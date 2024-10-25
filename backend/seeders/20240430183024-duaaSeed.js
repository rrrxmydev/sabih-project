'use strict';

// Importation du modèle Duaa de la base de données
const { Duaa } = require('../models/Duaa');

// Importation des données Duaa à insérer
const { DuaaArray } = require('../data/DuaaData');

// Exportation du module
module.exports = {
  
  // Fonction de migration ascendante
  async up(queryInterface, Sequelize) {
    // Insertion des données DuaaArray dans la table 'duaas' de la base de données
    await queryInterface.bulkInsert('duaas', [...DuaaArray, {
      // Ajout des timestamps createdAt et updatedAt pour chaque enregistrement
      createdAt: new Date(),
      updatedAt: new Date(),
    }]);
  },

  // Fonction de migration descendante
  async down(queryInterface, Sequelize) {
    // Suppression de tous les enregistrements de la table 'duaas'
    await queryInterface.bulkDelete('duaas', null, {});
  }
};
