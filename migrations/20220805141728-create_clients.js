'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([

      queryInterface.createTable('clients', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },

        machineName: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },


        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),

    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.dropTable( 'clients' )
    ])
  }
};
