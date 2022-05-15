const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const KlingonsSchema = Schema({
    inyectorA: Number | String ,
    inyectorB: Number | String,
    inyectorC: Number | String,
    porcentajeVelocidad: Number | String,
    capacidadPA : Number | String,
    capacidadPB : Number | String,
    capacidadPC : Number | String,
    tiempoFuncionamiento : Number | String,
    createdAt: Date
})

module.exports = mongoose.model('Klingons', KlingonsSchema)