const { sequelize, Sequelize } = require('sequelize')
const { envs } = require('../enviroments/enviroments')

const sequelize = new Sequelize(envs.DB_URI, {
    logging: false, //false evita ruido en la consola
})