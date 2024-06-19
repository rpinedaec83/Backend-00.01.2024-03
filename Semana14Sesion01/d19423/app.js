const path = require("path");
const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').Server(app);
const http = require('https');
const WebSocketServer = require("websocket").server;


const wsServer = new WebSocketServer({
    httpServer: server,
    autoAcceptConnections: false
});

app.set("port", 3000);
app.use(cors());
app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, "./public")));

function originIsAllowed(origin) {
    // Para evitar cualquier conexión no permitida, validamos que 
    // provenga de el cliente adecuado, en este caso del mismo servidor.
    if (origin === "http://localhost:3000") {
        return true;
    }
    return false;

}


app.get('/pagina/', function (req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012 },
        { name: 'Tux', organization: "Linux", birth_year: 1996 },
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013 },
        { name: 'Pancho', organization: "x-codec", birth_year: 2023 }
    ];
    var tagline = "No programming concept is complete without a cute animal mascot. by RP";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

app.get('/about/', function (req, res) {
    
    res.render('pages/about');
});




wsServer.on("request", (request) => {
    if (!originIsAllowed(request.origin)) {
        // Sólo se aceptan request de origenes permitidos
        request.reject();
        console.log((new Date()) + ' Conexión del origen ' + request.origin + ' rechazada.');
        return;
    }
    const connection = request.accept(null, request.origin);
    connection.on("message",  (message) => {
        console.log(message.utf8Data)
        switch (message.utf8Data) {

            default :

                console.log("Mensaje recibido: " + message.utf8Data);
                connection.sendUTF("Recibido: " + message.utf8Data + " cliente");
                break;
        }
    });
    connection.on("close", (reasonCode, description) => {
        console.log("El cliente se desconecto");
    });
});


server.listen(app.get('port'), () => {
    console.log('Servidor iniciado en el puerto: ' + app.get('port'));
})