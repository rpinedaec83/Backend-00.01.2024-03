console.log("Inicio de la aplicacion");
var http = require('http');
var url = require('url');
let RegistroCompras=[];

http.createServer(function (req, res) {
  const reqUrl = url.parse(req.url, true);
  console.log("reqUrl: ",reqUrl.pathname);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

 
  if (reqUrl.pathname === '/nuevo' && req.method === 'POST') {

    let body = '';

    req.on('data', (chunk) => {
      console.log("capturando el chunk");
      body += chunk;});

    req.on('end', () => {
      const lista = JSON.parse(body);
      RegistroCompras.push({
          nombre: lista.nombre,
          descripcion: lista.descripcion,
          fecha: lista.fecha,
          estado: lista.estado
      });
      console.log("Registros Creados: ",RegistroCompras);
    });
  
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Registro creado' }));
  }

  else if (reqUrl.pathname === '/pendientes' && req.method === 'GET') {
    const Pendientes = RegistroCompras.filter(elem => !elem.estado);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(Pendientes));  
    console.log("listas Pendientes: ",Pendientes);  
  }

  else if (reqUrl.pathname === '/completados' && req.method === 'GET') {
    const Completados = RegistroCompras.filter(elem => elem.estado);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(Completados));  
    console.log("listas Completados: ",Completados);  
  }


  else {
    res.write(JSON.stringify({ data: "cualquiercosa" }));
    res.end();
  }
  }).listen(8080); //the server object listens on port 8080