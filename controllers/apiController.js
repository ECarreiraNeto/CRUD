const {Vehiculo}= require ('../models/vehiculos')
const axios= require (`axios`);

const apiController= {
    async apiGet(req, res) {
        try {
            const listaVehiculos= await Vehiculo.find()
            res.json(listaVehiculos)
        } catch {
            res.status(400).send("Error al conectarse con la base de datos");
        }
    },
    async apiGetOne(req, res) {
        try {
            const listaVehiculo= await Vehiculo.findOne(req.params)
            res.json(listaVehiculo)
        } catch {
            res.status(400).send("Error al conectarse con la base de datos");
        }
    },
    async apiGetID(req, res) {
        try {
            const listaVehiculo= await Vehiculo.findById(req.params.id)
            res.json(listaVehiculo)
        } catch {
            res.status(400).send("Error al conectarse con la base de datos")
        }
    },
    async apiPost(req, res) {
        try {
            const nuevoVehiculo= new Vehiculo(req.body)
            await nuevoVehiculo.save();
            res.status(201).json(nuevoVehiculo)
        } catch {
            res.status(400).send("Error al conectarse con la base de datos")
        }
    },
    async apiPut (req, res) {
        try {
            await Vehiculo.findByIdAndUpdate(req.params.id,req.body)
            const vehiculoEditado= await Vehiculo.findById(req.params.id)
            res.status(201).json(vehiculoEditado)
        } catch {
            res.status(400).send("Error al conectarse con la base de datos")
        }
    },
    async apiDelete (req, res) {
        try {
            await Vehiculo.findByIdAndDelete(req.params.id)
            res.status(201).send('Vehiculo eliminado de la base de datos')
        } catch  {
            res.status(400).send("Error al conectarse con la base de datos")
        }
    },

    async apiConnect (req,res){
        try {
            const response= await axios.get(`https://jsonplaceholder.typicode.com/users`)
            const users= response.data;
            res.status(201).json(users);
            console.log(`Se conecto a la API externa`,users)
        } catch  {
            res.status(400).send('Error al conectarse con la API externa')
            console.log(`Error al conectarse con la API externa`)
        }
    
    }
}

module.exports= apiController;