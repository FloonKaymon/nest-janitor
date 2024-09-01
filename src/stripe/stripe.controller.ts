import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('create-customer')
  async createCustomer(@Body('email') email: string, @Body('name') name: string) {
    return this.stripeService.createCustomer(email, name);
  }

  @Post('create-payment-intent')
  async createPaymentIntent(@Body('amount') amount: number, @Body('currency') currency: string) {
    return this.stripeService.createPaymentIntent(amount, currency);
  }

    @Post('create-subscription')
    async createSubscription(@Body('customerId') customerId: string, @Body('priceId') priceId: string) {
        return this.stripeService.createSubscription(customerId, priceId);
    }
}