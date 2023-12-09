const {Vehiculo}= require ('../models/vehiculos')

const apiController= {
    async apiGet(req, res) {
        const listaVehiculos= await Vehiculo.find()
        res.json(listaVehiculos)
    },
    async apiGetOne(req, res) {
        const listaVehiculo= await Vehiculo.findOne(req.params)
        res.json(listaVehiculo)
    },
    async apiGetID(req, res) {
        const listaVehiculo= await Vehiculo.findById(req.params.id)
        res.json(listaVehiculo)
    },
    async apiPost(req, res) {
        const nuevoVehiculo= new Vehiculo(req.body)
        await nuevoVehiculo.save();
        res.status(201).json(nuevoVehiculo)
    },
    async apiPut (req, res) {
        await Vehiculo.findByIdAndUpdate(req.params.id,req.body)
        const vehiculoEditado= await Vehiculo.findById(req.params.id)
        res.status(201).json(vehiculoEditado)
    },
    async apiDelete (req, res) {
        await Vehiculo.findByIdAndDelete(req.params.id)
        res.status(201).send('Vehiculo eliminado de la base de datos')
    },
}

module.exports= apiController;