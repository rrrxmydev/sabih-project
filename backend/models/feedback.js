// Importation du module DataTypes de Sequelize
const { DataTypes } = require("sequelize");

// Exportation d'une fonction qui définit le modèle de données Feedback
module.exports = (sequelize, DataTypes) => {

    // Définition du modèle Feedback à l'aide de sequelize.define()
    const feedback = sequelize.define(
        'feedback', // Nom du modèle
        {
            // Définition des propriétés du modèle Feedback
            id: {
                type: DataTypes.INTEGER, // Type de données : entier
                allowNull: false, // Ne peut pas être null
                primaryKey: true, // Clé primaire de la table
                autoIncrement: true, // Valeurs auto-incrémentées pour les nouvelles entrées
            },
            feedback: {
                type: DataTypes.STRING(3000), // Type de données : chaîne de caractères, peut contenir jusqu'à 3000 caractères
                allowNull: false, // Ne peut pas être null
            }, 
            email: {
                type: DataTypes.STRING, // Type de données : chaîne de caractères
                allowNull: false, // Ne peut pas être null
            },
            FirstName: {
                type: DataTypes.STRING, // Type de données : chaîne de caractères
                allowNull: false, // Ne peut pas être null
            },
            LastName: {
                type: DataTypes.STRING, // Type de données : chaîne de caractères
                allowNull: false, // Ne peut pas être null
            }
        }
    );

    // Retourne le modèle Feedback défini
    return feedback;
}
