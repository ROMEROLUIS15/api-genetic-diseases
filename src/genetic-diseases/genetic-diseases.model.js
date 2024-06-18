const { DataTypes } = require('sequelize')
const { sequelize } = require('./../config/batabase/database')


const GeneticDiseases = sequelize.define('genetic-diseases', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cause: {
        type: DataTypes.STRING,
        allowNull: true
    },
    mortalityRate: {
        type: DataTypes.FLOAT,
        allowNull: true,
        field: "mortality_rate" //name in database
    },
    treatment: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    symptoms: {
        type: DataTypes.STRING,
        allowNull: true
    },
    hasDisability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false //este nos da respuesta en el body
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        allowNull: false,
        defaultValue: 'active'
    }
})

module.exports = GeneticDiseases;