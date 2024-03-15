const express = require('express')
const app = express()
const generitDiseases = require('./genetic-diseases/genetic-diseases.router')
const { calculeRequestTime } = require('./commont/time.middlewares')
// const resultTime = require('./genetic-diseases/time.middlewares')

// const calculeRequestTime = (req,res,next) => {
//     const requestTime = new Date().toString()
//     req.requestTime = requestTime
//     next()
// }

app.use(express.json()) //permite obtener el body en formato json
app.use(express.urlencoded({ extended: true})) //permite obtener el body en formato url-encoded
app.use(calculeRequestTime)
// app.use(resultTime.calculeRequestTime)
//llamamos  el archivo desde ruta
app.use('/',generitDiseases)

// //endpoints ya llevados a carpeta router
//  app.get('/api/genetic-diseases', findAll) //creando variable findAll realiza la misma funcion
//  app.post('/api/genetic-diseases', create)
//  app.get('/api/genetic-diseases/:id', findOne)
//  app.patch('/api/genetic-diseases/:id', patch)
//  app.delete('/api/genetic-diseases/:id', toDelete)

app.get('/', (req,res) =>{ //envia respuesta a frontend (pantalla)
    res.send('Respuesta a Frontend')
})


module.exports = app