"use strict";
const responseHttp = require("../helpers/response");
const {
  getZonas: getZonasController,
  createZona: createZonaController,
  updateZona: updateZonaController,
  deleteZona: deleteZonaController,
  getDetailZona: getDetailZonaController,
} = require("../../application/controllers/zonas-controller.js");

module.exports.getZonas = async (event) => {
  const response = await getZonasController();
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.createZona = async (event) => {
  const response = await createZonaController(JSON.parse(event.body));
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.updateZona = async (event) => {
  const response = await updateZonaController(
    JSON.parse(event.body),
    event.pathParameters.id
  );
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.deleteZona = async (event) => {
  const response = await deleteZonaController(event.pathParameters.id);
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};

module.exports.getDetailZona = async (event) => {
  const response = await getDetailZonaController(event.pathParameters.id);
  return responseHttp(
    response.success,
    response.data,
    response.message,
    response.statusCode
  );
};
