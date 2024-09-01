import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  private stripe: Stripe;

  constructor(private configService: ConfigService) {
    // Initialisez Stripe avec la clé secrète depuis les variables d'environnement
    this.stripe = new Stripe(this.configService.get<string>('STRIPE_SECRET_KEY'), {
      apiVersion: '2024-06-20', // Vous pouvez utiliser la version actuelle
    });
  }

  async createCustomer(email: string, name: string): Promise<Stripe.Customer> {
    return this.stripe.customers.create({
      email,
      name,
    });
  }

  async createProduct(name: string, description: string) {
    // Crée le produit
    const product = await this.stripe.products.create({
      name: name, // Nom du produit
      description: description, // Description du produit
    });
    return product;
  }
   // Méthode pour récupérer tous les produits
   async getProducts(): Promise<Stripe.ApiList<Stripe.Product>> {
    const products = await this.stripe.products.list({
    });

    return products;
  }


  async createPaymentIntent(amount: number, currency: string): Promise<Stripe.PaymentIntent> {
    return this.stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ['card'], // Par défaut, cela utilise les paiements par carte
    });
  }

    // Crée un abonnement pour un client avec un prix spécifique
    async createSubscription(customerId: string, priceId: string) {
      return this.stripe.subscriptions.create({
        customer: customerId,
        items: [{ price: priceId }],
        payment_behavior: 'default_incomplete', // Pour permettre la configuration de l'authentification 3D Secure
        expand: ['latest_invoice.payment_intent'],
      });
    }

    async createNewPriceForProduct(productId: string, amount: number, interval: 'month' | 'year' | null) {
      // Crée un nouveau prix pour le produit
      if (interval) {
        const newPrice = await this.stripe.prices.create({
          unit_amount: amount, // Montant en centimes, ex: 2000 pour 20 EUR
          currency: 'eur',
          recurring: { interval },
          product: productId,
        });
        return newPrice; 
      }
      const newPrice = await this.stripe.prices.create({
        unit_amount: amount, // Montant en centimes, ex: 2000 pour 20 EUR
        currency: 'eur',
        product: productId,
      });
  
      return newPrice;
    }

    // Création d'une facture pour un client avec des lignes d'articles
  async createInvoice(customerId: string, items: { description: string; price: number }[]) {
    // Créer des éléments de ligne de facture
    const invoiceItems = await Promise.all(
      items.map(async (item) => {
        return await this.stripe.invoiceItems.create({
          customer: customerId,
          amount: item.price * 100, // Montant en centimes
          currency: 'eur',
          description: item.description,
        });
      }),
    );

    // Créer la facture après avoir ajouté les éléments
    const invoice = await this.stripe.invoices.create({
      customer: customerId,
      auto_advance: true, // Auto-finalise la facture pour que le PDF soit disponible
    });

    return invoice;
  }
}