// // server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const { db } = require('./firebaseAdminConfig');
// const PDFDocument = require('pdfkit');
// const fs = require('fs');
// const cors = require('cors');

// const app = express(); // Move this line up
// app.use(cors()); // Ensure this is after app initialization
// app.use(bodyParser.json()); // Ensure this is after app initialization

// // Endpoint to generate PDF
// app.post('/generate-pdf', async (req, res) => {
//   try {
//     // Query Firestore for students with statusConnection 'online'
//     const studentsSnapshot = await db.collection('students').where('statusConnection', '==', 'online').get();
//     const students = studentsSnapshot.docs.map(doc => doc.data());

//     // Create a PDF document
//     const doc = new PDFDocument();
//     const outputPath = 'checkStudents.pdf';
//     const outputStream = fs.createWriteStream(outputPath);
//     doc.pipe(outputStream);

//     // Add content to PDF
//     doc.text('Liste des étudiants présents', { align: 'center' });

//     students.forEach(student => {
//       doc.text(`Nom: ${student.name}, Filiere: ${student.filiere}`);
//     });

//     // Finalize the PDF and end the stream
//     doc.end();

//     // Wait for the PDF to finish writing
//     outputStream.on('finish', () => {
//       res.download(outputPath); // Send the PDF file as a download
//     });
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     res.status(500).send('Error generating PDF');
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });













// server.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const { db } = require('./firebaseAdminConfig');
// const PDFDocument = require('pdfkit');
// const cors = require('cors');
// const { Buffer } = require('buffer');

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// // Endpoint to generate PDF
// app.post('/generate-pdf', async (req, res) => {
//   try {
//     // Query Firestore for students with statusConnection 'online'
//     const studentsSnapshot = await db.collection('students').where('statusConnection', '==', 'online').get();
//     const students = studentsSnapshot.docs.map(doc => doc.data());

//     // Create a PDF document
//     const doc = new PDFDocument();
//     let buffers = [];
//     doc.on('data', buffers.push.bind(buffers));
//     doc.on('end', () => {
//       let pdfData = Buffer.concat(buffers);
//       let pdfBase64 = pdfData.toString('base64');
//       res.json({ pdfBase64 });
//     });

//     // Add content to PDF
//     doc.text('Liste des étudiants présents', { align: 'center' });
//     students.forEach(student => {
//       doc.text(`Nom: ${student.name}, Filiere: ${student.filiere}`);
//     });

//     // Finalize the PDF
//     doc.end();
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     res.status(500).send('Error generating PDF');
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });










const express = require('express');
const bodyParser = require('body-parser');
const { db } = require('./firebaseAdminConfig');
const PDFDocument = require('pdfkit');
const cors = require('cors');
const fs = require('fs'); // Ajout de fs

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Fonction pour ajouter du texte centré
function addCenteredText(doc, text, x, y, width, height) {
    if (!text) {
        text = ""; // Si le texte est indéfini, on le remplace par une chaîne vide
    }
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

// Fonction pour ajouter un rectangle semi-transparent derrière le texte
function addBackgroundRectangle(doc, x, y, width, height, opacity) {
    doc.save();
    doc.fillOpacity(opacity).fillColor('white').rect(x, y, width, height).fill();
    doc.restore();
}

// Endpoint to generate PDF
app.post('/generate-pdf', async (req, res) => {
    try {
        console.log('Fetching students from Firestore...');
        // Query Firestore for students with statusConnection 'online'
        const studentsSnapshot = await db.collection('students').where('statusConnection', '==', 'online').get();
        const students = studentsSnapshot.docs.map(doc => doc.data());

        console.log('Students fetched:', students);

        // Create a PDF document
        const doc = new PDFDocument();
        let buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            let pdfData = Buffer.concat(buffers);
            let pdfBase64 = pdfData.toString('base64');
            res.json({ pdfBase64 });
        });

        // Ajouter l'image de fond
        const backgroundImagePath = 'checkStudents.jpg';
        if (fs.existsSync(backgroundImagePath)) {
            doc.image(backgroundImagePath, {
                fit: [doc.page.width, doc.page.height],
                align: 'center',
                valign: 'center'
            });
        } else {
            console.error(`Background image not found: ${backgroundImagePath}`);
        }

        // Ajouter la date et l'heure
        const date = new Date();
        const date_now = date.toLocaleDateString();
        const hour_now = date.toLocaleTimeString();

        doc.fillColor('blue').fontSize(12);
        doc.text('Liste des étudiants présents du : ' + date_now + ' ' + hour_now, { align: 'center', underline: true });
        doc.fillColor('black').fontSize(14);

        // Position initiale pour le tableau
        let startX = 50;
        let startY = 200; // Ajuster la position de départ pour ne pas chevaucher le texte précédent

        // Largeur des colonnes et hauteur des lignes
        const columnWidth = 250;
        const rowHeight = 50;
        const circleDiameter = 40; // Diamètre des cercles

        // Couleur des bordures en gris léger
        const borderColor = 'lightgrey';

        // Ajouter les en-têtes au-dessus des premières lignes
        doc.strokeColor(borderColor).rect(startX, startY - rowHeight, columnWidth, rowHeight).stroke(); // Rectangle pour "Nom étudiant"
        doc.fillColor('darkgrey'); // Changer la couleur du texte en gris foncé
        addCenteredText(doc, 'Nom étudiant', startX, startY - rowHeight, columnWidth, rowHeight); // Texte centré dans le rectangle "Nom étudiant"

        doc.strokeColor(borderColor).rect(startX + columnWidth, startY - rowHeight, columnWidth, rowHeight).stroke(); // Rectangle pour "Filiere de l'etudiant"
        doc.fillColor('darkgrey'); // Changer la couleur du texte en gris foncé
        addCenteredText(doc, 'Filiere de l\'etudiant', startX + columnWidth, startY - rowHeight, columnWidth, rowHeight); // Texte centré dans le rectangle "Filiere de l'etudiant"

        // Ajouter les étudiants
        students.forEach(student => {
            // Vérifiez que les propriétés firstName, lastName et programChoice existent
            const studentName = student.firstName + ' ' + student.lastName;
            const studentProgram = student.programChoice;

            // Ligne pour chaque étudiant
            doc.strokeColor(borderColor).rect(startX, startY, columnWidth, rowHeight).stroke(); // Bordure de la cellule
            addBackgroundRectangle(doc, startX, startY, columnWidth, rowHeight, 0.7); // Rectangle semi-transparent
            addCenteredText(doc, studentName, startX, startY, columnWidth, rowHeight); // Texte centré pour le nom de l'étudiant

            doc.strokeColor(borderColor).rect(startX + columnWidth, startY, columnWidth, rowHeight).stroke(); // Bordure de la cellule
            addBackgroundRectangle(doc, startX + columnWidth, startY, columnWidth, rowHeight, 0.7); // Rectangle semi-transparent
            addCenteredText(doc, studentProgram, startX + columnWidth, startY, columnWidth, rowHeight); // Texte centré pour la filière de l'étudiant

            startY += rowHeight; // Déplacer à la ligne suivante
        });

        // Finaliser le document
        doc.end();
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Error generating PDF');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
