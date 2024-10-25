// Importation du module DataTypes de Sequelize
const { DataTypes } = require("sequelize");

// Exportation d'une fonction qui définit le modèle de données Duaa
module.exports = (sequelize, DataTypes) => {

    // Définition du modèle Duaa à l'aide de sequelize.define()
    const Duaa = sequelize.define(
        'Duaa', // Nom du modèle
        {
            // Définition des propriétés du modèle Duaa
            id: {
                type: DataTypes.INTEGER, // Type de données : entier
                allowNull: false, // Ne peut pas être null
                primaryKey: true, // Clé primaire de la table
                autoIncrement: true, // Valeurs auto-incrémentées pour les nouvelles entrées
            },
            script: {
                type: DataTypes.STRING(100000), // Type de données : chaîne de caractères, peut être très longue
                allowNull: false, // Ne peut pas être null
                unique: true, // Valeurs uniques pour chaque entrée
            }
        }
    );

    // Retourne le modèle Duaa défini
    return Duaa;
}
