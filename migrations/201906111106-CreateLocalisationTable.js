'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Localisations', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            city: {
                allowNull: false,
                type: Sequelize.STRING
            },
            place: {
                allowNull: false,
                type: Sequelize.STRING
            },
            longitude: {
                allowNull: false,
                type: Sequelize.FLOAT
            },
            latitude: {
                allowNull: false,
                type: Sequelize.FLOAT
            },
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Localisations');
    }
}