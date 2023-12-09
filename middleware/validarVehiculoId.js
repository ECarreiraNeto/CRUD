const {Vehiculo}= require('../models/vehiculos')

const validarVehiculoID= async (req,res,next) => {
    try {
        const buscarVehiculo= await Vehiculo.findById(req.params.id)
        if (buscarVehiculo !== null) {
            next()
        } else {
            res.status(400).json({
                msg: 'el vehiculo con el id' + req.params.id + ' no se encuentra registrado, por favor intente con otro ID'
            })
            
        }
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports={validarVehiculoID}