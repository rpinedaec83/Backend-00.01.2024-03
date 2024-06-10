/*===================================================
=====================================================
            SOLICITUD DE CITAS DEL DIA
            
    Ejecutar:
        npm run dev 

    Ejemplo:
        npm run dev 

        ********* Display en la pagina ***********

           
        *****************************************   
        
=====================================================
=====================================================*/


console.log("Inicio de la aplicacion");
var http = require('http');
const axios = require('axios');
var url = require('url');

http.createServer(async function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    console.log("req.url:"+req.url)
    let strUrl = req.url;
    
    if (strUrl.includes("/citas")) {

        const options= {
            method: 'GET',
            url:'https://quotes.rest/qod',
            params: {
                category:'inspire',
            },
            headers:{
                'X-TheySaidSo-Api-Secret':'s98ggkhqfmlaLvgl5XTtGceDAxZEM83DyzUKrmPu',
            }
        };

        let strHTML="";
       
        //Solictud Axios -Citas del Dia
        axios.request(options)
            .then((response) => {
                strHTML+= `<b>PERSONAJES DE LA SERIE RICK & MORTY: </b><ul>`;
                console.log("Ingrese a AXIOS");
                let Cita =response;
                console.log("Personajes: ", Cita);
                /*console.log("Lista de Personajes");
                Personajes.forEach(element => {
                    for (const Clave in element) {
                        if (Clave!="id" && Clave!="episode") {
                            if (Clave=="name") {
                                strHTML+= `<p><span>** ${element[Clave].toUpperCase()}</span> </p>`;
                                console.log(`===>${element[Clave]}`);
                            }
                            else if(Clave=="origin" || Clave=="location"){
                                strHTML+= `<li> ${Clave} : ${element[Clave].name} </li>`;
                                console.log(`-${Clave} : ${element[Clave].name} `);
                            }

                            else{
                                strHTML+= `<li> ${Clave} : ${element[Clave]} </li>`;
                                console.log(`-${Clave} : ${element[Clave]} `);
                            }
                        }   
                    }
                    console.log("");
                    strHTML+= `<br>  </br>`
                });

                strHTML += "</ul>";
                console.log("Caracteristica de Personajes HTML : ")
                console.log(strHTML);
                res.write(strHTML);*/
                res.end("Hola Mundo");
                      
            })
            .catch((error) => {
                console.log("Hubo un error en la aplicacion");
                console.log(error);
                res.write("Hubo un error al Solicitar los Datos");
                res.end();
            });
    }
    else {
        res.write(JSON.stringify({ data: "cualquiercosa" }));
        res.end();
    }
    
}).listen(8080);