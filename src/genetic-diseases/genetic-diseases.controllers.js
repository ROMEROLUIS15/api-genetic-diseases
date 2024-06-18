const GeneticDiseasesServices = require("./genetic-diseases.service");

const findAll = async (req,res) => {
    try {
        const {requestTime, saludo1} = req

        const geneticDiseases = await  GeneticDiseasesServices.findAll();

        res.status(200).json({
            message: "method get - findAll",
            requestTime,
            saludo1,
            geneticDiseases
        })
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
            error
        })
    }

}


const create = async(req,res) => {
    try {
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
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
            error
        })
    }
}


const findOne = async(req,res) => {
    try {
        const { requestTime } = req;
        const { id } = req.params;
        const geneticDisease = await GeneticDiseasesServices.findOne(id)

        if(!geneticDisease){
            return res.status(404).json({
                status: "error",
                message: `Genetic Disease with ${id} not found`,
            })
        }

        return res.status(200).json({
            message: "method get - findOne",
            id: req.params.id, //muestra en id en el front
            requestTime,
            geneticDisease
        })
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
            error
        })
    }
}


const update = async(req,res) => {

    try {
        const { requestTime, saludo2 } = req;
        const {id} = req.params
        const { name, description, cause, mortalityRate, treatment, symptoms } = req.body

        const geneticDisease = await GeneticDiseasesServices.findOne(id)

        if(!geneticDisease){
            return res.status(404).json({
                status: "error",
                message: `Genetic Disease with ${id} not found`,
            })
        }
        //encontramos el id con findOne
        const geneticDiseaseUpdate = await GeneticDiseasesServices.update(geneticDisease, {
            name,
            description,
            cause,
            mortalityRate,
            treatment,
            symptoms
        })
            return res.status(200).json({
                message: "methos patch - update",
                id: id,
                requestTime,
                saludo2,
                geneticDiseaseUpdate
            })
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
            error
        })
    }
}




const toDelete = async(req,res)=>{
    try {
        //const { requestTime, saludo2 } = req;
        const {id} = req.params;

        const geneticDisease = await GeneticDiseasesServices.findOne(id)
    
        if(!geneticDisease){
            return res.status(400).json({
                status: "error",
                message: `Genetic Disease with ${id} not found`,
            })
        }
    
        await GeneticDiseasesServices.delete(geneticDisease)
    
        return res.status(200).json({
            message:"method delete - remove",
            //requestTime,
            //id:id,
            //saludo2
        })
    } catch (error) {
        return res.status(500).json({
            status: "fail",
            message: "Internal server error",
            error
        })
    }
 }



 module.exports = {
    findAll,
    create,
    findOne,
    update,
    toDelete
 }