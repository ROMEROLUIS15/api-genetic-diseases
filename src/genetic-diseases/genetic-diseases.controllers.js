const GeneticDiseasesServices = require("./genetic-diseases.service");

const findAll = async (req,res) => {
    const {requestTime, saludo1} = req

    const geneticDiseases = await  GeneticDiseasesServices.findAll();

    res.status(200).json({
        message: "method get - findAll",
        requestTime,
        saludo1,
        geneticDiseases
    })
}


const create = async(req,res) => {
    const { requestTime} = req;
    const { name, description, cause, mortalityRate, treatment, symptoms } = req.body;
    // 1 const disease = req.body
    const geneticDiseases = await GeneticDiseasesServices.create({
        name,
        description,
        cause,
        mortalityRate,
        treatment,
        symptoms,
    })
    return res.status(201).json({
        // 1 data: disease,
        requestTime,
        data: geneticDiseases,

    })
}


const findOne = async(req,res) => {
    const { requestTime } = req;
    const { id } = req.params;
    const geneticDisease = await GeneticDiseasesServices.findOne(id)

    return res.status(200).json({
        message: "method get - findOne",
        id: req.params.id, //muestra en id en el front
        requestTime,
        geneticDisease
    })
}


const update = (req,res) => {
    const { requestTime, saludo2 } = req;
    const {id} = req.params
        return res.status(200).json({
            message: "methos patch - update",
            id: id,
            requestTime,
            saludo2
        })
    }


const toDelete = (req,res)=>{
    const { requestTime, saludo2 } = req;
    const {id} = req.params;
    return res.status(200).json({
        message:"method delete - remove",
        requestTime,
        id:id,
        saludo2
    })
 }

 module.exports = {
    findAll,
    create,
    findOne,
    update,
    toDelete
 }