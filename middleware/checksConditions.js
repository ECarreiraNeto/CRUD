const {check} = require ('express-validator')

const checks= [
    check('marca')
        .notEmpty().withMessage('Por favor ingrese una marca del vehiculo que desea buscar'),
    check('modelo')
        .notEmpty().withMessage('Por favor ingrese un modelo del vehiculo que desea buscar'),
    check('año')
        .notEmpty().withMessage('Por favor ingrese el año de fabricacion del vehiculo que desea buscar')
        .isNumeric().withMessage('El campo año solo admite numeros'),
    check('color')
        .notEmpty().withMessage('Por favor ingrese un color para la busqueda')
        .isString().withMessage('El dato ingresado es incorrecto')
]

module.exports= checks;