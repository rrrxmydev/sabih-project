// Importation du module DataTypes de Sequelize
const { DataTypes } = require("sequelize");

// Exportation d'une fonction qui définit le modèle de données Athkar
module.exports = (sequelize, DataTypes) => {

    // Définition du modèle Athkar à l'aide de sequelize.define()
    const Athkar = sequelize.define(
        'Athkar', // Nom du modèle
        {
            // Définition des propriétés du modèle Athkar
            id: {
                type: DataTypes.INTEGER, // Type de données : entier
                allowNull: false, // Ne peut pas être null
                primaryKey: true, // Clé primaire de la table
                autoIncrement: true, // Valeurs auto-incrémentées pour les nouvelles entrées
            },
            repete: {
                type: DataTypes.INTEGER, // Type de données : entier
                allowNull: false, // Ne peut pas être null
            },
            script: {
                type: DataTypes.STRING(100000), // Type de données : chaîne de caractères, peut être très longue
                allowNull: false, // Ne peut pas être null
            },
            fadl: {
                type: DataTypes.STRING(100000), // Type de données : chaîne de caractères, peut être très longue
                allowNull: true, // Peut être null
            },
            type: {
                type: DataTypes.INTEGER, // Type de données : entier
                allowNull: false, // Ne peut pas être null
                validate: { // Validation personnalisée pour le type
                    max: 6 // La valeur maximale autorisée pour le type est 6
                }
            }
        }
    );

    // Retourne le modèle Athkar défini
    return Athkar;
}
