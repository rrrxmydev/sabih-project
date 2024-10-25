const db = require("../models"); // Import du modèle de la base de données

// Fonction pour enregistrer un nouveau feedback
exports.feedback = async (req, res) => {
    const feedback = req.body; // Récupération des données du feedback à partir du corps de la requête
    try {
        // Création d'un nouveau feedback dans la base de données avec les données reçues et la date actuelle
        await db.feedback.create({ ...feedback,id: null, createdAt: new Date(), updatedAt: new Date() });
        // Répondre avec un code de statut 201 pour indiquer que le feedback a été créé avec succès
        res.status(201).json({
            message: "Merci pour votre retour !", // Message de succès
            status: 201, // Code de statut HTTP
        });
    } catch (err) {
        // En cas d'erreur lors de la création du feedback, répondre avec une erreur interne du serveur
        res.status(500).json({
            message: "Erreur interne du serveur", // Message d'erreur
            status: 500, // Code de statut HTTP
            error: err.message, // Message d'erreur détaillé
        });
    }
}
