
// Importation du module express
const express = require("express");

// Importation de la base de données depuis le fichier models
const db = require("./models");

// Importation de l'application Express depuis le fichier app
const app = require("./app");


// Définition du port sur lequel le serveur écoutera les requêtes
const port = 3000;


db.sequelize.sync().then((req) => {
    // Démarrage du serveur Express sur le port défini
    app.listen(port, () => {
        console.log("server has started"); // Message indiquant que le serveur a démarré avec succès
    });
});
