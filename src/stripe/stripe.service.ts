import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(private configService: ConfigService) {
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY'), {
      apiVersion: '2024-06-20',
    });
  }

  async createCustomer(email: string, name: string): Promise<Stripe.Customer> {
    return this.stripe.customers.create({
      email,
      name,
    });
  }

  async createProduct(name: string, description: string) {
    const product = await this.stripe.products.create({
      name: name,
      description: description,
    });
    return product;
  }
   async getProducts(): Promise<Stripe.ApiList<Stripe.Product>> {
    const products = await this.stripe.products.list({
    });

    return products;
  }


  async createPaymentIntent(amount: number, currency: string): Promise<Stripe.PaymentIntent> {
    return this.stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card'],
    });
  }

    async createSubscription(customerId: string, priceId: string) {
      return this.stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
      });
    }

    async createNewPriceForProduct(productId: string, amount: number, interval: 'month' | 'year' | null) {
      if (interval) {
        const newPrice = await this.stripe.prices.create({
          unit_amount: amount,
          currency: 'eur',
          recurring: { interval },
          product: productId,
        });
        return newPrice; 
      }
      const newPrice = await this.stripe.prices.create({
        unit_amount: amount,
        currency: 'eur',
        product: productId,
      });
  
      return newPrice;
    }

  async createInvoice(customerId: string, items: { description: string; price: number }[]) {
    const invoiceItems = await Promise.all(
      items.map(async (item) => {
        return await this.stripe.invoiceItems.create({
          customer: customerId,
          amount: item.price * 100,
          currency: 'eur',
          description: item.description,
        });
      }),
    );

    const invoice = await this.stripe.invoices.create({
      customer: customerId,
      auto_advance: true,
    });

    return invoice;
  }

  async finalizeInvoice(invoiceId: string) {
    const finalizedInvoice = await this.stripe.invoices.finalizeInvoice(invoiceId);

    return finalizedInvoice.invoice_pdf;
  }
}