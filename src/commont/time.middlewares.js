const calculeRequestTime = (req,res,next) => {
    const requestTime = new Date().toString()
    req.requestTime = requestTime
    next()
}

module.exports = {
    calculeRequestTime
}