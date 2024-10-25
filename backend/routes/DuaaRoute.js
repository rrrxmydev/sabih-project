// Importation du module express
const express = require("express");

// Importation du contrôleur DuaaController
const DuaaController = require('../controllers/DuaaController');

// Création d'un routeur express
const router = express.Router();

// Définition des routes pour récupérer la liste des Duaas et un Duaa aléatoire
router
    .route('/getDuaaList')
    .get(DuaaController.getDuaaList); // Route pour récupérer la liste des Duaas

router 
    .route('/getRandomDuaa')
    .get(DuaaController.getRandomDuaa); // Route pour récupérer un Duaa aléatoire

// Exportation du routeur
module.exports = router;
