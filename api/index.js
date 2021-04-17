const router = require('express').Router();
const HttpHandler = require("./../service/HttpHandler");
const config = require("./../config");
router.post("*", function (req, res) {
    //const {params = {}} = req;
    //const entity_type = params.entity_type;
    //const url = entity_type + "/alias";
    const url = req.url;
    const body = req.body;
    const definitiveUrl = config.domains.default + "/api" + req.url;
    HttpHandler.getResults("POST", definitiveUrl, {}, body).then((data) => {  
        let datos = {};      
        if(data.hasOwnProperty("status")) {
            datos = data.data;
            datos["status"] = data.status;
        } else {
            datos["status"] = data.response.status; 
            //datos["status"] = 404; 
            datos["err"] = data.response.statusText; 
            datos["message"] = data.response.data.message;
        }
        res.json(datos);       
    }).catch(err => {
        res.json({
            status: 500,
            message: "Internal Sever Error"
        })
    });
    

});

module.exports = router;