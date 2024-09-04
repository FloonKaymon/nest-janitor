import { Body, Controller, Post } from '@nestjs/common';
import { PdfService } from './pdf.service';

@Controller('pdf')
export class PdfController {
  constructor(private readonly pdfService: PdfService) {}

  @Post('generate')
  async generatePdf(@Body() body: { name: string; amount: number, firstName: string, lastName: string, email: string, date: string }) {
    const filePath = await this.pdfService.generateAndSavePdf(body.name, body.amount, body.firstName, body.lastName, body.email, body.date);
    return { message: 'PDF generated successfully', filePath };
  }
}