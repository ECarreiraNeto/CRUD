const {Schema, model}= require('mongoose')

const schema= new Schema({
    marca: {
        type: String,
        required: true,
        enum: ['Ford','Volskwagen','Chevrolet','Peugeot','Honda','Fiat','Hyundai','BMW','Audi','Jeep','Nissan','Volvo']
    },
    modelo: {
        type: String,
        required: true,
        
    },
    año: {
        type: Number, 
        required: true
    },
    color: {
        type: String,
        required: true
    },
    precio: {
        type: String
    },
    kilometros: {
        type: Number
    }
    
})

const Vehiculo= model('apiVehiculo',schema) 
module.exports={apiVehiculo}