const zonaAdapter = require("../../application/model_adapters/zona-adapter");

const getZonas = async () => {
  return zonaAdapter.findZonas();
};
const createZona = async (zonaData) => {
  return zonaAdapter.createZona(zonaData);
};
const updateZona = async (zonaData, id) => {
  return zonaAdapter.updateZona(zonaData, id);
};
const deleteZona = async (id) => {
  return zonaAdapter.deleteZona(id);
};
const getDetailZona = async (id) => {
  return zonaAdapter.findOneZona(id);
};

module.exports = {
  getZonas,
  createZona,
  updateZona,
  deleteZona,
  getDetailZona,
};
