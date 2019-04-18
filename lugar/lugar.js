//Usaremos axios para realizar peticiones http, utiliza como función una promesa (async await, then catch)
//Request es otro paquete que podríamos utilizar, pero usa callbacks para consumirlo

const axios = require('axios');

const getLugarLatLng = async(dir) => { //Sin promesa, usamos async

    //Configuramos los datos de entrada con los caracteres especiales con encodeURI

    const encodeURL = encodeURI(dir);

    // console.log(encodeURL);

    //Realizaremos una peticion a City-location. El primer paso es configurar los headers

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeURL }`,
        headers: { 'X-RapidAPI-Key': '98056b7b13mshfe559fa5b56279bp1840ddjsn57c61e599d2c' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {

        throw new Error(`No hay resultados para ${ dir } `);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        direccion, // regresa direccion : direccion por el EMC6
        lat,
        lng
    }

    //Por promesa
    // instance.get()
    //     .then(resp => {
    //         console.log(resp.data.Results[0]);
    //     })
    //     .catch(err => {
    //         console.log('Error !!1', err);
    //     });


};

module.exports = {
    getLugarLatLng
}