import { Controller, Post, Body, Get } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('create-customer')
  async createCustomer(
    @Body('email') email: string,
    @Body('name') name: string,
  ) {
    return this.stripeService.createCustomer(email, name);
  }

  @Post('create-payment-intent')
  async createPaymentIntent(
    @Body('email') email: string,
    @Body('name') name: string,
    @Body('amount') amount: number,
    @Body('currency') currency: string,
    @Body('paymentMethodId') paymentMethodId: string,
    @Body('return_url') return_url: string,
  ) {
    return this.stripeService.createPaymentIntent(email, name, amount, currency, paymentMethodId, return_url);
  }

  

  @Post('create-product')
  async createProduct(
    @Body('name') name: string,
    @Body('description') description: string,
  ) {
    return this.stripeService.createProduct(name, description);
  }

  @Get('get-products')
  async getProducts() {
    return this.stripeService.getProducts();
  }

  @Post('create-subscription')
  async createSubscription(
    @Body('email') email: string,
    @Body('name') name: string,
    @Body('priceId') priceId: string,
    @Body('paymentMethodId') paymentMethodId: string,
  ) {
    return this.stripeService.createSubscription(email, name, priceId);
  }
}
