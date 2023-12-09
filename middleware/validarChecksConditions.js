const {validationResult} = require('express-validator');

const validarChecksConditions= (req,res,next) =>{
    const error= validationResult(req);
    if (error.isEmpty()) {
        next();
    } else {
        res.status(400).json(error);
    }
}

module.exports={validarChecksConditions};