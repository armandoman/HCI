// IMPORTA LIBRERIAS
var express = require("express");
var nunjucks = require("nunjucks");

//CREANDO EL SERVIDOR WEB
var app = express();

// ------ CONFIGURACION DE EXPRESS -----
//localhost:8000/css/principal.css
//PRIMER ARGUMENTO ES UN NOMBRE LOGICO
//SEGUNDO ARGUMENTO ES LA CARPETA REAL
//static PERMITE ACCESSO, PERO DEBO DE CONOCER LA RUTA COMPLETA DEL ARCHIVO
app.use("/css", express.static(__dirname + "/css"));
//con directory nos permite navegar en esa carpeta (VER ARHIVOS!!)
app.use("/css", express.directory(__dirname + "/css"));

app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));
app.use("/javascript", express.static(__dirname + "/javascript"));

/*-------- CONFIGURACION DEL SISTEMA DE TEMPLATES --------------*/
//faltaba el __dirname para que corra bien
nunjucks.configure(__dirname + "/vistas",{
	express:app
});

//lenvanta el servidor en el puerto 8000
app.listen(8000);

app.get("/", function(request, response){
	
	response.render("index.html");	
});

console.log("arrancando servidor");
