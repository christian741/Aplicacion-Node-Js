/**
 * App.js clase encargada de ser la principal
 */
var express = require("express");// framework express
var fs = require("fs");//Fyle sistem

const pug = require("pug");//Carpeta views  planntillas

var app = express(); //asignacion de uso de express

/**
 * [use description]
 *
 * @param   {[type]}  express    [express crea midlware]
 * @param   {[type]}  __dirname  [__dirname directorio raiz]
 * @param   {[type]}  /public    [/public carpeta]
 *
 * @return  {[type]}             [return description]
 */
app.use( express.static(__dirname + '/public'))
/**
 * encargada de recibir la raiz
 *
 * @param   {[type]}  function  [function ]
 * @param   {[type]}  request   [request Peticion]
 * @param   {[type]}  response  [response respuesta]
 *
 * @return  {[type]}            [return description]
 */
app.get('/',function(request,response){
    response.render("index.pug");//use pug para plantilla
    response.send("index.html"); //llama el archivo index.html
});

//Puerto local
app.listen(3000,function(){
    console.log("puerto 3000");
});