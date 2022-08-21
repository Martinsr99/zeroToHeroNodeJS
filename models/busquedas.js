const axios = require("axios").default;

class Busquedas {
  historial = ["Tegucigalpa", "Madrid", "Granada"];

  constructor() {
    //TODO leer base de datos si existe
  }

  get paramsMapBox() {
    return {
      proximity: "ip",
      access_token: process.env.MAPBOX_KEY,
      language: "es",
    };
  }

  async ciudad(lugar) {
    //Peticion HTTP
    const instance = axios.create({
      baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
      params: this.paramsMapBox,
    });

    try {
      const resp = await instance.get();
      return resp.data.features.map( lugar => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1]
      }));
    } catch (error) {}
    return []; //Retornar lugares
  }
}

module.exports = Busquedas;
