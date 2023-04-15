const {
  responseSuccess,
  responseFail,
  structureFail,
} = require("../helpers/responses");
const { StatusCodes } = require("http-status-codes");
const zonaUseCase = require("../../domain/usecase/zonas-usecase");

const getZonas = async () => {
  let response = null;
  try {
    const result = await zonaUseCase.getZonas();
    response = responseSuccess({ data: result });
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const createZona = async (zonaData) => {
  let response = null;
  try {
    await zonaUseCase.createZona(zonaData);
    response = responseSuccess(
      {
        message: "Zona creado.",
      },
      StatusCodes.CREATED
    );
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const updateZona = async (zonaData, idZona) => {
  let response = null;
  try {
    //console.log('zona Data updated ', zonaData, idZona);
    //Validamos si existe el zona
    response = await validarExistencia(idZona);
    if (response.data) {
      const result = await zonaUseCase.updateZona(zonaData, idZona);
      response = responseSuccess(
        {
          message: "Zona actualizado.",
          data: result,
        },
        StatusCodes.OK
      );
    }
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const deleteZona = async (idZona) => {
  let response = null;
  try {
    //console.log('zona Data elimiar ', idZona);
    // Validamos si existe el zona
    response = await validarExistencia(idZona);
    if (response.data) {
      await zonaUseCase.deleteZona(idZona);
      response = responseSuccess(
        {
          message: "Zona eliminado.",
        },
        StatusCodes.OK
      );
    }
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const getDetailZona = async (idZona) => {
  let response = null;
  try {
    //console.log('zona Data consultar ', idZona);
    response = await validarExistencia(idZona);
  } catch (error) {
    response = structureFail({
      message: "Error inesperado.",
    });
  }
  return response;
};

const validarExistencia = async (idZona) => {
  let response = null;
  const result = await zonaUseCase.getDetailZona(idZona);

  if (result) {
    response = responseSuccess(
      {
        data: result,
      },
      StatusCodes.OK
    );
  } else {
    response = responseSuccess(
      {
        data: null,
        message: "Zona no encontrado.",
      },
      StatusCodes.NOT_FOUND
    );
  }

  return response;
};

module.exports = {
  getZonas,
  createZona,
  updateZona,
  deleteZona,
  getDetailZona,
};
