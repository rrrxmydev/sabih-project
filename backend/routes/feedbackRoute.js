// Importation du module express
const express = require("express");

// Importation du contrôleur feedbackController
const feedbackController = require("../controllers/feedbackController");

// Création d'un routeur express
const router = express.Router();

// Définition de la route pour soumettre un feedback (via une requête POST)
router
    .route("/feedback")
    .post(feedbackController.feedback); // Route pour soumettre un feedback

// Exportation du routeur
module.exports = router;
