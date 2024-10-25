const db = require("../models"); // Import du modèle de la base de données

// Fonction pour récupérer les Athkar du matin
exports.getAthkarSabah = async (req, res) => {
    try {
        const athkar = await db.Athkar.findAll(); // Récupération de tous les Athkar
        
        // Filtrer les Athkar pour obtenir ceux du matin
        const AthkarSabah = athkar.filter((element) => {
            if (element.type == 1 || element.type == 5) return element;
        });

        // Répondre avec les Athkar du matin trouvés
        res.status(200).json({
            message: "Athkar sabah found !", // Message de succès
            status: 200, // Code de statut HTTP
            data: AthkarSabah // Données des Athkar du matin
        });
    } catch (err) {
        console.error("Error fetching athkar al-sabah:", err); // Affichage de l'erreur dans la console
        // Répondre avec une erreur interne du serveur en cas d'échec de la récupération
        res.status(500).json({
            message: "Internal server error", // Message d'erreur
            status: 500, // Code de statut HTTP
            error: err.message // Message d'erreur détaillé
        });
    }
}

// Fonction pour récupérer les Athkar du soir
exports.getAthkarMasaa = async (req, res) => {
    try {
        const athkar = await db.Athkar.findAll(); // Récupération de tous les Athkar
        // Filtrer les Athkar pour obtenir ceux du soir
        const AthkarMasaa = athkar.filter((element) => {
            if (element.type == 2 || element.type == 5) return element;
        });

        // Répondre avec les Athkar du soir trouvés
        res.status(200).json({
            message: "Athkar al-masaa found !", // Message de succès
            status: 200, // Code de statut HTTP
            data: AthkarMasaa // Données des Athkar du soir
        });
    } catch (err) {
        console.error("Error fetching thkar al-masaa:", err); // Affichage de l'erreur dans la console
        // Répondre avec une erreur interne du serveur en cas d'échec de la récupération
        res.status(500).json({
            message: "Internal server error", // Message d'erreur
            status: 500, // Code de statut HTTP
            error: err.message // Message d'erreur détaillé
        });
    }
}

// Fonction pour récupérer les Athkar du sommeil
exports.getAthkarNawm = async (req, res) => {
    try {
        const athkar = await db.Athkar.findAll(); // Récupération de tous les Athkar
        // Filtrer les Athkar pour obtenir ceux du sommeil
        const AthkarNawm = athkar.filter((element) => {
            if (element.type == 3) return element;
        });

        // Répondre avec les Athkar du sommeil trouvés
        res.status(200).json({
            message: "Athkar nawm found !", // Message de succès
            status: 200, // Code de statut HTTP
            data: AthkarNawm // Données des Athkar du sommeil
        });
    } catch (err) {
        console.error("Error fetching athkar al-nawm:", err); // Affichage de l'erreur dans la console
        // Répondre avec une erreur interne du serveur en cas d'échec de la récupération
        res.status(500).json({
            message: "Internal server error", // Message d'erreur
            status: 500, // Code de statut HTTP
            error: err.message // Message d'erreur détaillé
        });
    }
}

// Fonction pour récupérer les Athkar de la prière
exports.getAthkarSalat = async (req, res) => {
    try {
        const athkar = await db.Athkar.findAll(); // Récupération de tous les Athkar
        // Filtrer les Athkar pour obtenir ceux de la prière
        const AthkarSalat = athkar.filter((element) => {
            if (element.type == 4) return element;
        });

        // Répondre avec les Athkar de la prière trouvés
        res.status(200).json({
            message: "Athkar al-salat found !", // Message de succès
            status: 200, // Code de statut HTTP
            data: AthkarSalat // Données des Athkar de la prière
        });
    } catch (err) {
        console.error("Error fetching thkar al-salat:", err); // Affichage de l'erreur dans la
    }
}