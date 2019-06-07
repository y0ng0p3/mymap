'use strict';
module.exports = (sequelize, DataTypes) => {
    var Lead = sequelize.define('Lead', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUISV4,

            allowNull: false,
            primaryKey: true,
            
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return Lead;
};