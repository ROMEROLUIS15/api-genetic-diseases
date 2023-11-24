// 1. importar express
const express = require('express');

// 2. crear una constante app que tendra
//todos los funcionamientos de express
const app = express();


app.use(express.json()) //perimte poder obtener el body en formato Json

app.use(express.urlencoded({ extended: true })); //permite obtener el body en formato url-encoded


//otra manera de enviar un callback y el ejemplo de su uso esta en la linea 26 en app.get
const findAll = (req, res) => {

    //aca podemos cambiar el status
    return res.status(200).json({
        message: 'method get - findAll'
    })
}


const create = (req, res) => {
   
    const disease = req.body;

    return res.status(201).json({
        message: 'method post - create',
        data: disease

    })
}


const findOne = (req,res) => {

    console.log(req.params)

    return res.status(200).json({
        message: 'method get - findOne',
        id: req.params.id
    })

}


const update = (req,res ) => {

    const { id } = req.params;

    return res.status(200).json({
        message: 'method patch - update',
        id,
    })
}


const toDelete = (req,res) => {

    const { id } = req.params;

    return res.status(200).json({
        message: 'method delete -delete',
        id
    })
}





// 3. definir endpoint
//endpoint para buscar todas las enfermedades geneticas
app.get('/api/v1/genetic-diseases', findAll)


//para crear un elemento al endpoint
app.post('/api/v1/genetic-diseases', create )
    

//endepoint para buscar una enfermedad genetica
app.get('/api/v1/genetic-diseases', findOne)


//endpoint para actualizar una enfermedad genetica
app.patch('/api/v1/genetic-diseases/:id', update)


app.delete('/api/v1/genetic-diseases/:id', toDelete)

// 4. poner a escuchar el servidor
app.listen(3000 , () => {
    console.log("server running on port: " + 3000)
})

// servidor local -> direccion ip de lookback
//127.0.0.1 -> localhost
//localhost:3000 
