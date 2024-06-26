const { Sequelize } = require('sequelize')
const { envs } = require('../enviroments/enviroments')

const sequelize = new Sequelize(envs.DB_URI, {
    logging: false, //false evita ruido en la consola
})


//Autenticacion de base de datos
const authenticated = async() => {
    try {
        await sequelize.authenticate();
        console.log('Conection established successfully...!');
    } catch (error) {
        console(error);
    }
}

//Sincronizacion de base de datos
const syncUp = async() => {
    try {
        // si colocamos {force: true} dentro del sync() sirve para forzar los cambios a la base de datos
        //{alter: true} sincroniza
        // ojo: se recomienda usar al apenas comenzar un proyecto ojo
        // recordar eliminarlo del sync()
        await sequelize.sync();
        console.log('Conectionn synced successfully...!');
    } catch (error) {
        console(error);
    }
}


module.exports = {
    authenticated,
    syncUp,
    sequelize
}