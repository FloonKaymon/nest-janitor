import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import * as path from 'path';
import * as fs from 'fs';
import axios from 'axios';


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


  /*async createPaymentIntent(
    email: string,
    name: string,
    amount: number,
    currency: string,
    paymentMethodId: string,
    return_url: string,
  ) {
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

    
    // Créez un PaymentIntent
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount,
      currency,
      customer: customer.id,
      payment_method: paymentMethodId,
      confirm: true,
      return_url: return_url,
    });

    // Vérifiez si le PaymentIntent est lié à une facture
    let invoiceId = null;
    if (paymentIntent.invoice) {
      invoiceId = paymentIntent.invoice;
    } else if (paymentIntent.latest_charge) {
      const charge = await this.stripe.charges.retrieve(
        paymentIntent.latest_charge as string,
      );
      if (charge.invoice) {
        invoiceId = charge.invoice;
      }
    }

    if (invoiceId) {
      // Si une facture est trouvée, téléchargez et enregistrez-la en PDF
      await this.saveInvoiceAsPdf(invoiceId);
    }

    return {
      clientSecret: paymentIntent.client_secret,
      invoiceId: invoiceId,
    };
  }
  */
  async saveInvoiceAsPdf(invoiceId: string) {
    try {
      // Récupérer les détails de la facture
      const invoice = await this.stripe.invoices.retrieve(invoiceId);

      if (!invoice.invoice_pdf) {
        throw new Error('No PDF URL found for the invoice.');
      }

      const pdfUrl = invoice.invoice_pdf;

      // Chemin d'enregistrement local du fichier PDF
      const pdfPath = path.join(__dirname, `../invoices/${invoiceId}.pdf`);

      // Télécharger le PDF avec Axios
      const response = await axios({
        url: pdfUrl,
        method: 'GET',
        responseType: 'stream',
      });

      // Créez un flux d'écriture pour enregistrer le fichier en local
      const writer = fs.createWriteStream(pdfPath);

      if (response.data) {
        response.data.pipe(writer);
      }

      return new Promise<void>((resolve, reject) => {
        writer.on('finish', resolve);
        writer.on('error', reject);
      });
    } catch (error) {
      throw new HttpException(
        `Failed to save invoice PDF: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
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

    async createSubscription(email: string, name: string, priceId: string, paymentMethodId: string) {
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

    // Attachez la méthode de paiement au client
    await this.stripe.paymentMethods.attach(paymentMethodId, {
      customer: customer.id,
    });

    // Définissez la méthode de paiement par défaut pour le client
    await this.stripe.customers.update(customer.id, {
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });
  
      const subscription = await this.stripe.subscriptions.create({
        customer: customer.id,
        items: [{ price: priceId }],
        default_payment_method: paymentMethodId,
        expand: ['latest_invoice.payment_intent'],
      });


    const invoice = subscription.latest_invoice as Stripe.Invoice;

    const invoicePdfUrl = invoice.invoice_pdf;
    return {
      subscription,
      invoicePdfUrl,
    };
    }
}
