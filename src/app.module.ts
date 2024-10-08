import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './database/database';
import { BienModule } from './bien/bien.module';
import { StandardAccountModule } from './standard-account/standard-account.module';
import { ReservationModule } from './reservation/reservation.module';
import { PhotoBienModule } from './photo-bien/photo-bien.module';
import { CommentaireModule } from './commentaire/commentaire.module';
import { PrestationProposeModule } from './prestation-propose/prestation-propose.module';
import { PrestationUnitaireModule } from './prestation-unitaire/prestation-unitaire.module';
import { FactureClientModule } from './facture-client/facture-client.module';
import { BienCategoryModule } from './bien-category/bien-category.module';
import { PrestationCategoryModule } from './prestation-category/prestation-category.module';
import { BienService } from './bien/bien.service';
import { BienCategoryController } from './bien-category/bien-category.controller';
import { BienCategoryService } from './bien-category/bien-category.service';
import { BienCategory } from './bien-category/entities/bien-category.entity';
import { BienController } from './bien/bien.controller';
import { Bien } from './bien/entities/bien.entity';
import { CommentaireController } from './commentaire/commentaire.controller';
import { CommentaireService } from './commentaire/commentaire.service';
import { Commentaire } from './commentaire/entities/commentaire.entity';
import { FactureClient } from './facture-client/entities/facture-client.entity';
import { FactureClientController } from './facture-client/facture-client.controller';
import { FactureClientService } from './facture-client/facture-client.service';
import { PhotoBien } from './photo-bien/entities/photo-bien.entity';
import { PhotoBienController } from './photo-bien/photo-bien.controller';
import { PhotoBienService } from './photo-bien/photo-bien.service';
import { PrestationCategory } from './prestation-category/entities/prestation-category.entity';
import { PrestationCategoryController } from './prestation-category/prestation-category.controller';
import { PrestationCategoryService } from './prestation-category/prestation-category.service';
import { PrestationPropose } from './prestation-propose/entities/prestation-propose.entity';
import { PrestationProposeController } from './prestation-propose/prestation-propose.controller';
import { PrestationProposeService } from './prestation-propose/prestation-propose.service';
import { PrestationUnitaire } from './prestation-unitaire/entities/prestation-unitaire.entity';
import { PrestationUnitaireController } from './prestation-unitaire/prestation-unitaire.controller';
import { PrestationUnitaireService } from './prestation-unitaire/prestation-unitaire.service';
import { Reservation } from './reservation/entities/reservation.entity';
import { ReservationController } from './reservation/reservation.controller';
import { ReservationService } from './reservation/reservation.service';
import { StandardAccount } from './standard-account/entities/standard-account.entity';
import { StandardAccountController } from './standard-account/standard-account.controller';
import { StandardAccountService } from './standard-account/standard-account.service';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { StripeModule } from './stripe/stripe.module';
import { ConfigModule } from '@nestjs/config';
import { PdfService } from './pdf/pdf.service';
import { PdfController } from './pdf/pdf.controller';
import { PdfModule } from './pdf/pdf.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(dataSourceOptions),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
    TypeOrmModule.forFeature([
      Bien,
      StandardAccount,
      Reservation,
      PhotoBien,
      Commentaire,
      PrestationPropose,
      PrestationUnitaire,
      FactureClient,
      BienCategory,
      PrestationCategory,
    ]),
    BienModule,
    StandardAccountModule,
    ReservationModule,
    PhotoBienModule,
    CommentaireModule,
    PrestationProposeModule,
    PrestationUnitaireModule,
    FactureClientModule,
    BienCategoryModule,
    PrestationCategoryModule,
    AuthModule,
    StripeModule,
    PdfModule,
  ],
  controllers: [
    BienController,
    StandardAccountController,
    ReservationController,
    PhotoBienController,
    CommentaireController,
    PrestationProposeController,
    PrestationUnitaireController,
    FactureClientController,
    BienCategoryController,
    PrestationCategoryController,
    PdfController,
  ],
  providers: [
    BienService,
    StandardAccountService,
    ReservationService,
    PhotoBienService,
    CommentaireService,
    PrestationProposeService,
    PrestationUnitaireService,
    FactureClientService,
    BienCategoryService,
    PrestationCategoryService,
    PdfService,
  ],
})
export class AppModule {}
