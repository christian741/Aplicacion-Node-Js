//Importar libreria de Servidor Web
var http = require('http');


/**
 * [createServer Se encargada de crear el servidor con un puerto especifico]
 *
 * @param   function  [Funcion interna de la creacion]
 * @param   {[request]}  request   [request Se encarga de ]
 * @param   {[response]}  response  [response Se encarga de de dar respuesta del servidor]
 *
 * @return  {[listen]}            [return Servidor montado en un puerto y direccion logica]
 */
http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hola Mundo");
    response.end();
}).listen(3000,'localhost');

console.log('el servidor se muestra en http://localhost:3000');