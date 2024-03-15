const saludo1 = (req,res,next) => {
    const saludo1 = "Hola soy Luis"

    req.saludo1 = saludo1
    next()
}

const saludo2 = (req,res,next) => {
    const saludo2 = "Hola soy saludo 2"

    req.saludo2 = saludo2
    next()
}

module.exports = {
    saludo1,
    saludo2
}