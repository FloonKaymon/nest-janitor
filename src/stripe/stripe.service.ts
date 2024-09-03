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


  async createPaymentIntent(email: string, name: string, amount: number, currency : string, paymentMethodId: string, return_url: string) {
    // Recherchez le client existant par email
    const existingCustomers = await this.stripe.customers.list({
      email,
      limit: 1,
    });

    let customer;
    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await this.createCustomer(email, name);
    }

    // Créez un paiementIntent
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount,
      currency,
      customer: customer.id,
      payment_method: paymentMethodId,
      confirm: true,
      return_url: return_url,
    });
    return {
      clientSecret: paymentIntent.client_secret,
    };
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

    async createSubscription(email: string, name: string, priceId: string) {
      // Recherchez le client existant par email
    const existingCustomers = await this.stripe.customers.list({
      email,
      limit: 1,
    });

    let customer;
    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await this.createCustomer(email, name);
    }
  
      const subscription = await this.stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        expand: ['latest_invoice.payment_intent'],
      });

    const invoice = subscription.latest_invoice as Stripe.Invoice;

    const invoicePdfUrl = invoice.invoice_pdf;
    }
}