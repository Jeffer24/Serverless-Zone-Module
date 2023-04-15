const getZonaFromDBDto = ({ idZonas, codigoZona, nombreZona, idPais }) => ({
  idZonas: idZonas,
  codigoZona: codigoZona,
  nombreZona: nombreZona,
  idPais: idPais,
});

const getZonasFromDBArray = (zonasDB) => zonasDB.map(getZonaFromDBDto);

const getDBFromZonaDto = ({ idZonas, codigoZona, nombreZona, idPais }) => ({
  idZonas: idZonas,
  codigoZona: codigoZona,
  nombreZona: nombreZona,
  idPais: idPais,
});

module.exports = {
  getZonaFromDBDto,
  getZonasFromDBArray,
  getDBFromZonaDto,
};
