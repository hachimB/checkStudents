const PDFDocument = require('pdfkit');
const fs = require('fs');

const doc = new PDFDocument();
const outputStream = fs.createWriteStream('checkStudents.pdf');
doc.pipe(outputStream);

// Fonction pour ajouter du texte centré
function addCenteredText(doc, text, x, y, width, height) {
    const textWidth = doc.widthOfString(text);
    const textHeight = doc.currentLineHeight();
    const textX = x + (width - textWidth) / 2;
    const textY = y + (height - textHeight) / 2;
    doc.text(text, textX, textY);
}

// Fonction pour ajouter une image à l'intérieur d'un cercle
function addImageInCircle(doc, imagePath, x, y, diameter) {
    doc.save();
    doc.circle(x + diameter / 2, y + diameter / 2, diameter / 2).clip();
    doc.image(imagePath, x, y, { width: diameter, height: diameter });
    doc.restore();
}

// Ajouter l'image de fond
doc.image('checkStudents.jpg', {
    fit: [doc.page.width, doc.page.height], 
    align: 'center',
    valign: 'center'
});

// Ajouter la date et l'heure
const date = new Date();
const date_now = date.toLocaleDateString();
const hour_now = date.toLocaleTimeString();

doc.fillColor('blue').fontSize(12);
doc.text('Liste des étudiants présents du : ' + date_now + ' ' + hour_now, { align: 'center', underline: true });
doc.fillColor('black').fontSize(14);
doc.text('Reason', { align: 'center' });

// Position initiale pour le tableau
let startX = 50;
let startY = 200; // Ajuster la position de départ pour ne pas chevaucher le texte précédent

// Largeur des colonnes et hauteur des lignes
const columnWidth = 250;
const rowHeight = 50;
const circleDiameter = 40; // Diamètre des cercles

// Fonction pour ajouter un rectangle semi-transparent derrière le texte
function addBackgroundRectangle(doc, x, y, width, height, opacity) {
    doc.save();
    doc.fillOpacity(opacity).fillColor('white').rect(x, y, width, height).fill();
    doc.restore();
}

// Couleur des bordures en gris léger
const borderColor = 'lightgrey';

// Ajouter les en-têtes au-dessus des premières lignes
doc.strokeColor(borderColor).rect(startX, startY - rowHeight, columnWidth, rowHeight).stroke(); // Rectangle pour "Nom étudiant"
doc.fillColor('darkgrey'); // Changer la couleur du texte en gris foncé
addCenteredText(doc, 'Nom étudiant', startX, startY - rowHeight, columnWidth, rowHeight); // Texte centré dans le rectangle "Nom étudiant"

doc.strokeColor(borderColor).rect(startX + columnWidth, startY - rowHeight, columnWidth, rowHeight).stroke(); // Rectangle pour "Filiere de l'etudiant"
doc.fillColor('darkgrey'); // Changer la couleur du texte en gris foncé
addCenteredText(doc, 'Filiere de l\'etudiant', startX + columnWidth, startY - rowHeight, columnWidth, rowHeight); // Texte centré dans le rectangle "Filiere de l'etudiant"

// Ligne 1, Colonne 1
doc.strokeColor(borderColor).rect(startX, startY, columnWidth, rowHeight).stroke(); // Bordure de la cellule
addImageInCircle(doc, 'image2.jpg', startX + 10, startY + (rowHeight - circleDiameter) / 2, circleDiameter); // Image dans le cercle
addBackgroundRectangle(doc, startX + circleDiameter + 20, startY, columnWidth - circleDiameter - 20, rowHeight, 0.7); // Rectangle semi-transparent
addCenteredText(doc, 'Image 1', startX + circleDiameter + 20, startY, columnWidth - circleDiameter - 20, rowHeight); // Texte centré à droite de l'image
startX += columnWidth; // Déplacer à la colonne suivante

// Ligne 1, Colonne 2
doc.strokeColor(borderColor).rect(startX, startY, columnWidth, rowHeight).stroke(); // Bordure de la cellule
addBackgroundRectangle(doc, startX, startY, columnWidth, rowHeight, 0.7); // Rectangle semi-transparent
addCenteredText(doc, 'Texte 1', startX, startY, columnWidth, rowHeight); // Texte centré
startX -= columnWidth; // Revenir à la première colonne
startY += rowHeight; // Déplacer à la ligne suivante

// Ligne 2, Colonne 1
doc.strokeColor(borderColor).rect(startX, startY, columnWidth, rowHeight).stroke(); // Bordure de la cellule
addImageInCircle(doc, 'image2.jpg', startX + 10, startY + (rowHeight - circleDiameter) / 2, circleDiameter); // Image dans le cercle
addBackgroundRectangle(doc, startX + circleDiameter + 20, startY, columnWidth - circleDiameter - 20, rowHeight, 0.7); // Rectangle semi-transparent
addCenteredText(doc, 'Image 2', startX + circleDiameter + 20, startY, columnWidth - circleDiameter - 20, rowHeight); // Texte centré à droite de l'image
startX += columnWidth; // Déplacer à la colonne suivante

// Ligne 2, Colonne 2
doc.strokeColor(borderColor).rect(startX, startY, columnWidth, rowHeight).stroke(); // Bordure de la cellule
addBackgroundRectangle(doc, startX, startY, columnWidth, rowHeight, 0.7); // Rectangle semi-transparent
addCenteredText(doc, 'Texte 2', startX, startY, columnWidth, rowHeight); // Texte centré

// Finaliser le document
doc.end();
