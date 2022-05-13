const Klingons = require('../models/klingons');


function saveklingons(req, res) {
    var params = req.body;
    var klingons = new Klingons();

   
    klingons.inyectorA = params.inyectorA;
    klingons.inyectorB = params.inyectorB;
    klingons.inyectorC = params.inyectorC;
    klingons.porcentajeVelocidad = params.porcentajeVelocidad;
    klingons.capacidadPA = params.capacidadPA;
    klingons.capacidadPB = params.capacidadPB;
    klingons.capacidadPC = params.capacidadPC;
    klingons.tiempoFuncionamiento = params.tiempoFuncionamiento;

        res.status(200).send({
          klingons
        })

}

module.exports = {
    saveklingons
}