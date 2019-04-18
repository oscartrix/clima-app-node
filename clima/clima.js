const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=59361b472b0bd9757ede20925d3ac0d5&units=metric`);


    return resp.data.main.temp;
}

module.exports = {
    getClima
}