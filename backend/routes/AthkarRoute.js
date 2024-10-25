// Importation du module express
const express = require("express");

// Importation du contrôleur AthkarController
const AthkarController = require("../controllers/AthkarController");

// Création d'un routeur express
const router = express.Router();

// Définition des routes pour les différents types de Athkar en utilisant le contrôleur AthkarController
router
    .route("/getAthkarSabah")
    .get(AthkarController.getAthkarSabah); // Route pour récupérer les Athkar du matin

router
    .route("/getAthkarMasaa")
    .get(AthkarController.getAthkarMasaa); // Route pour récupérer les Athkar du soir

router
    .route("/getAthkarNawm") 
    .get(AthkarController.getAthkarNawm); // Route pour récupérer les Athkar du sommeil

router
    .route("/getAthkarSalat")
    .get(AthkarController.getAthkarSalat); // Route pour récupérer les Athkar du Salat

// Exportation du routeur
module.exports = router;
