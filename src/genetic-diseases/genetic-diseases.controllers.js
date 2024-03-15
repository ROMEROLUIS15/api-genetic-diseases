const findAll = (req,res) => {
    const {requestTime, saludo1} = req

    res.status(200).json({
        message: "method get - findAll",
        requestTime,
        saludo1
    })
}


const create = (req,res) => {
    const { requestTime} = req
    const disease = req.body
    console.log(req.body)
    return res.status(201).json({
        message: "method post - create",
        data: disease,
        requestTime

    })
}


const findOne = (req,res) => {
    const { requestTime } = req;
    console.log(req.params)

    return res.status(200).json({
        message: "method get - findOne",
        id: req.params.id, //muestra en id en el front
        requestTime
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