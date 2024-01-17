const express= require('express')
const router= express.Router()
const apiController= require('../controllers/apiController')
const {validarVehiculoID}= require('../middleware/validarVehiculoId')
const checkConditions= require('../middleware/checksConditions')
const {validarChecksConditions}= require('../middleware/validarChecksConditions')



router.get('/listaVehiculos',apiController.apiGet)
router.get('/vehiculo/:marca/:modelo',apiController.apiGetOne)
router.get('/id/:id',validarVehiculoID,apiController.apiGetID)
router.post('/ingresarVehiculo',checkConditions,validarChecksConditions,apiController.apiPost )
router.put('/editarVehiculo/:id',validarVehiculoID,checkConditions,validarChecksConditions,apiController.apiPut )
router.delete('/eliminarVehiculo/:id',validarVehiculoID,apiController.apiDelete )
router.get('/conectarApi',apiController.apiConnect)

module.exports= router;