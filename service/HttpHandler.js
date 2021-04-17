const axios = require('axios');

module.exports = {
    getResults: (method, url, queryparams = {}, body = {}) => {
        console.log(url);
        return axios({
            method: method,
            url: url,
            data: body
        }).then(function (response) {
            return response;
        }).catch(function (error) {
            return error;
        });
    } 
};