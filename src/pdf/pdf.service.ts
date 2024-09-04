import { Injectable } from '@nestjs/common';
import * as PDFDocument from 'pdfkit';
import { createWriteStream } from 'fs';
import { join } from 'path';

@Injectable()
export class PdfService {
  async generateAndSavePdf(name : string, amount: number, firstName: string, lastName: string, email: string, date: string): Promise<string> {
    // Créer un chemin de fichier unique
    const filePath = join('uploads', `facture${Date.now()}.pdf`);

    // Créer un nouveau document PDF
    const doc = new PDFDocument();
    const writeStream = createWriteStream(filePath);

    // Lier le document PDF au flux d'écriture
    doc.pipe(writeStream);

    // Ajouter du texte au document
    doc.fontSize(25).text('Facture : Paris Janitor');
    doc.moveDown(); // Ajouter un espace après le titre
    
    // Insérer chaque ligne de texte
    doc.fontSize(16).text(date); // Date de la facture
    doc.moveDown(); // Saut de ligne
    
    doc.fontSize(16).text(`${lastName} ${firstName}`); // Nom complet
    doc.moveDown();
    
    doc.fontSize(16).text(email); // Adresse e-mail
    doc.moveDown();
    
    doc.moveTo(doc.page.margins.left, doc.y) // Début de la ligne à la marge de gauche
    .lineTo(doc.page.width - doc.page.margins.right, doc.y) // Fin de la ligne à la marge de droite
    .stroke(); // Dessiner la ligne

 doc.moveDown(); // Ajouter un petit espace sous la ligne

    doc.fontSize(16).text(`${name}: ${amount} euros`); // Détail et montant
    doc.moveDown();

    doc.fontSize(25).text(`TOTAL : ${amount} EUROS`, {}); // Détail et montant
    doc.moveDown();

    // Terminer le document
    doc.end();
    // Gestion des erreurs et fin d'écriture
    await new Promise<void>((resolve, reject) => {
        writeStream.on('finish', resolve);  // Résoudre la promesse lors de la fin d'écriture
        writeStream.on('error', (error) => { // Rejeter la promesse en cas d'erreur
          console.error('Erreur lors de l\'écriture du fichier PDF:', error);
          reject(error);
        });
      });

    return filePath;
  }
}