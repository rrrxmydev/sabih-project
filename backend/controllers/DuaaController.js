const db = require("../models"); // Import du modèle de la base de données

// Fonction pour récupérer la liste des Dou'as
exports.getDuaaList = async (req, res) => {
    try {
        const duaas = await db.Duaa.findAll(); // Récupération de toutes les Dou'as
        // Répondre avec la liste des Dou'as
        res.status(200).json({
            message: "Liste des Dou'as !", // Message de succès
            status: 200, // Code de statut HTTP
            data: duaas, // Données des Dou'as
        });
    } catch (error) {
        console.error("Error fetching duaas:", error); // Affichage de l'erreur dans la console
        // Répondre avec une erreur interne du serveur en cas d'échec de la récupération
        res.status(500).json({
            message: "Internal server error", // Message d'erreur
            status: 500, // Code de statut HTTP
            error: error.message, // Message d'erreur détaillé
        });
    }
}

// Fonction pour récupérer une Dou'a aléatoire
exports.getRandomDuaa = async (req, res) => {
    console.log("getRandomDuaa visited"); // Message de suivi dans la console
    try {
        const duaas = await db.Duaa.findAll(); // Récupération de toutes les Dou'as
        const randomIndex = Math.floor(Math.random() * duaas.length); // Génération d'un index aléatoire
        // Répondre avec la Dou'a aléatoire
        res.status(200).json({
            message: "Dou'a aléatoire !", // Message de succès
            status: 200, // Code de statut HTTP
            data: duaas[randomIndex], // Dou'a aléatoire
        });
    } catch (err) {
        console.error("Error fetching random duaas:", err); // Affichage de l'erreur dans la console
        // Répondre avec une erreur interne du serveur en cas d'échec de la récupération
        res.status(500).json({
            message: "Internal server error", // Message d'erreur
            status: 500, // Code de statut HTTP
            error: err.message, // Message d'erreur détaillé
        });
    }
}
