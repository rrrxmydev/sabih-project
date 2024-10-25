'use strict';

// Importation du modèle Athkar de la base de données
const { Athkar } = require('../models/Athkar');

// Importation des données Athkar à insérer
const { athkarData } = require("../data/athkarData");

// Exportation du module
module.exports = {
  
  // Fonction de migration ascendante
  async up(queryInterface, Sequelize) {
    // Insertion des données athkarData dans la table 'athkars' de la base de données
    await queryInterface.bulkInsert('athkars', [...athkarData, {
      // Ajout des timestamps createdAt et updatedAt pour chaque enregistrement
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  // Fonction de migration descendante
  async down(queryInterface, Sequelize) {
    // Suppression de tous les enregistrements de la table 'athkars'
    await queryInterface.bulkDelete('athkars', null, {});
  }
};
