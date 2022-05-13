const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const KlingonsSchema = Schema({
    inyectorA: Number,
    inyectorB: Number,
    inyectorC: Number,
    porcentajeVelocidad: Number,
    capacidadPA : Number,
    capacidadPB : Number,
    capacidadPC : Number,
    tiempoFuncionamiento : Number,
    createdAt: Date
})

module.exports = mongoose.model('Klingons', KlingonsSchema)