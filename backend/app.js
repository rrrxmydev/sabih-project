// Importation des modules express, morgan et cors
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

// Création d'une application express
const app = express();

// Importation des routes
const AthkarRoute = require("./routes/AthkarRoute");
const DuaaRoute = require("./routes/DuaaRoute");
const feedbackRoute = require("./routes/feedbackRoute");

// Middlewares :
// Middleware pour traiter les données JSON dans les requêtes
app.use(express.json());
// Middleware pour les logs des requêtes HTTP
app.use(morgan());
// Middleware pour activer CORS (Cross-Origin Resource Sharing)
app.use(cors());

// Routes
// Les routes Athkar, Duaa et feedback sont montées sous le préfixe "/sabihAPI/v1"
app.use("/sabihAPI/v1", AthkarRoute, DuaaRoute, feedbackRoute);


// Exportation de l'application express
module.exports = app;
