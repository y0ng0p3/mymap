'use strict';
module.exports = (sequelize, DataType) => {
    var Lead = sequelize.defin('Leads', {
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