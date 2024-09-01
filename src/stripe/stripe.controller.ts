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
    @Body('amount') amount: number,
    @Body('currency') currency: string,
  ) {
    return this.stripeService.createPaymentIntent(amount, currency);
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

  @Post('create-new-price')
  async createNewPrice(
    @Body('productId') productId: string,
    @Body('amount') amount: number,
    @Body('interval') interval: 'month' | 'year' | null,
  ) {
    return this.stripeService.createNewPriceForProduct(
      productId,
      amount,
      interval,
    );
  }
}
