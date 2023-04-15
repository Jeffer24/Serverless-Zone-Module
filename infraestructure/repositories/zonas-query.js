const { db } = require("./connections");
const TableName = "Zonas";

const findZonas = async () => {
  return db.select().table(TableName);
};

const findOneZona = async (id) => {
  return db.select().table(TableName).where("idZonas", id).first();
};
const createZona = async ({ codigoZona, nombreZona, idPais }) => {
  return await db(TableName).insert({
    codigoZona,
    nombreZona,
    idPais,
  });
};
const updateZona = async ({ codigoZona, nombreZona, idPais }, id) => {
  return await db(TableName).where("idZonas", id).update({
    codigoZona,
    nombreZona,
    idPais,
  });
};

const deleteZona = async (id) => {
  return await db(TableName).where("idZonas", id).del();
};

module.exports = {
  findZonas,
  findOneZona,
  createZona,
  updateZona,
  deleteZona,
};
