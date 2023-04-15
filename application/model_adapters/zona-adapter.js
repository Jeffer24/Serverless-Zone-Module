const zonaQuery = require("../../infraestructure/repositories/zonas-query");
const zonaDto = require("../helpers/zona-dto");

const findZonas = async () => {
  const data = await zonaQuery.findZonas();
  return zonaDto.getZonasFromDBArray(data);
};

const findOneZona = async (id) => {
  const zona = await zonaQuery.findOneZona(id);
  if (!zona) return null;
  return zonaDto.getZonaFromDBDto(zona);
};

const createZona = async ({ codigoZona, nombreZona, idPais }) => {
  return await zonaQuery.createZona({
    codigoZona,
    nombreZona,
    idPais,
  });
};

const updateZona = async ({ codigoZona, nombreZona, idPais }, idZonas) => {
  return await zonaQuery.updateZona(
    {
      codigoZona,
      nombreZona,
      idPais,
    },
    idZonas
  );
};

const deleteZona = async (idZonas) => {
  return await zonaQuery.deleteZona(idZonas);
};

module.exports = {
  findZonas,
  findOneZona,
  createZona,
  updateZona,
  deleteZona,
};
