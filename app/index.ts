import { Request, Response } from 'express';
import fs from 'fs';
import express from 'express';

const app = express();
const port = 3000;

// Middleware pour lire le fichier JSON
app.use(express.json());

// Route pour afficher les utilisateurs
app.get('/users', (req, res) => {
    // Lire le fichier JSON
    fs.readFile('db.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur du serveur');
            return;
        }

        // Convertir le contenu JSON en objet JavaScript
        const { users } = JSON.parse(data);

        // Envoyer les utilisateurs en tant que réponse
        res.json(users);
    });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:3000`);
});