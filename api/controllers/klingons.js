const Klingons = require("../models/klingons");

function saveKlingons(req, res) {
  const params = req.body;
  const klingons = new Klingons();

  klingons.inyectorA = params.inyectorA;
  klingons.inyectorB = params.inyectorB;
  klingons.inyectorC = params.inyectorC;
  klingons.porcentajeVelocidad = params.porcentajeVelocidad;
  klingons.capacidadPA = params.capacidadPA;
  klingons.capacidadPB = params.capacidadPB;
  klingons.capacidadPC = params.capacidadPC;
  klingons.tiempoFuncionamiento = params.tiempoFuncionamiento;

  klingons.save((err, klingonsStored) => {
    if (klingonsStored) {
      res.status(200).send({ klingonsStored });
    } else {
      res.status(404).send({ message: "No se ha registrado el klingons" });
    }
  });
}

function getKlingons(req, res) {
  Klingons.find((err, klingons) => {
    if (err) return res.status(500).send({ message: "error en la peticion" });
    if (!klingons)
      return res.status(404).send({ message: "No hay klingons disponibles" });

    return res.status(200).send({
      klingons,
    });
  });
}

function getKlingon(req, res) {
  const klingonId = req.params.id;
  Klingons.findById(klingonId, (err, klingon) => {
    if (err) return res.status(500).send({ message: "Error en la peticion" });
    if (!klingon)
      return res.status(404).send({ message: "el klingon no existe" });
    return res.status(200).send({
      klingon,
    });
  });
}

function updateKlingon(req, res) {
  const klingonId = req.params.id;
  const update = req.body;
  Klingons.findByIdAndUpdate(
    klingonId,
    update,
    { new: true },
    (err, klingonUpdated) => {
      if (err)
        return res.status(500).send({ message: "  Error en la Peticion" });
      if (!klingonUpdated)
        return res
          .status(404)
          .send({ message: "No se ha podido actualizar el Klingon" });
      return res.status(200).send({ user: klingonUpdated });
    }
  );
}

function deleteKlingon(req, res) {
  const klingonId = req.params.id;
  Klingons.findById(klingonId).remove((err) => {
    if (err) return res.status(500).send({ message: "  Error en la Peticion" });
    return res.status(200).send({ message: "El klingon Eliminado" });
  });
}

module.exports = {
  saveKlingons,
  getKlingons,
  getKlingon,
  updateKlingon,
  deleteKlingon,
};
