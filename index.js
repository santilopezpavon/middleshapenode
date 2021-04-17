const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const config = require("./config");

const app = express();
const port = config.server.port;


app.use(cors());
app.use(bodyParser.json());

const api = require("./api");
app.use("/api", api);

app.listen(port, () => {
    console.log("Open in Port " + port);
});
/*
const api = require("./api");



app.use("/api", api);
*/



/*
const handler = serverNum => (req, res) => {    
    console.log(`server ${serverNum}`, req.method, req.url, req.body);
    res.send(`Hello from server ${serverNum}!`);
};
app.get('*', handler(1)).post('*', handler(1));
app.listen(3000);
*/

// Pedir página
    // Drupal devolverá la página


$peticionBody = {
    "menu": {
        'url': "",
        "body": "",
        "cacheTime": ""
    },
    "content": {
        'url': "",
        "body": "",
        "cacheTime": ""
    }
};