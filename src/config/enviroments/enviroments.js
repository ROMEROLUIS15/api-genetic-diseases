//require('dotenv').config() , esta es otra manera de importar
const dotenv = require('dotenv') //sirve para utilizar los envs
dotenv.config();
const env = require('env-var') //sirve para validar los env

exports.envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    DB_URI: env.get('DB_URI').required().asString()
}