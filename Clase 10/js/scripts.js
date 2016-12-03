//alert("Hello");

function saludar(nombre){
  alert("Hola " + nombre);
}
//saludar("Juan");

function sumar(a,b){
  console.log(a+b);
}
//sumar(1000,1);

function cuadrado(x){
  console.log("El cuadrado es: " + (x*x) );
}
//cuadrado(25);

function cubo(x){
  console.log("El cubo es: " + (x*x*x) );
}
//cubo(3);

function promedio(x,y,z){
  console.log("El promedio es: " + ((x+y+z)/3) );
}
//promedio(10, 12, 5);

function edad(fecha){
  console.log("PPK tu edad es de: " + (2016-fecha) );
}
//edad(1938);

function factorial(x){
  var total = 1;
  for(var i=1; i<=x; i++){
      total *= i;
  }
  console.log("El factorial es: " + total);
}
//factorial(3);

/***** IF STATEMENT *********/

if(1 != 0){
  console.log("Es verdad");
}

var edad = 15;
var genero = "M";

if( edad>=18 && genero=='M' ){
  console.log("Es apto");
}else{
  console.log("No es apto");
}

if( edad>=18 || genero=='M' ){
  console.log("Es apto");
}else{
  console.log("No es apto");
}

var msj;
var nivel = 0;

switch(nivel){
  case 1:
    msj = 'Buena suerte, estas estas en el nivel 1';
    break;

  case 2:
    msj = 'Buena suerte, estas estas en el nivel 2';
    break;

  case 3:
    msj = 'Buena suerte, estas estas en el nivel 3';
    break;

  default:
    msj = "No tienes ningun nivel";
    break;
}

console.log(msj);

/*******LOOPS*****/
var notas = [8, 10, 12, 5, 18, 20];
var sum = 0;

for(var i=0; i<notas.length; i++){
   sum+= notas[i];
}

var promedio = sum/notas.length;
console.log("Tu promedio es: "+  promedio );

var i = 1;
var rst = '';
while (i < 13){
  rst += i + ' x 8 = ' + (i * 8) + '\n';
  i++;
}
console.log(rst);

var x = 1;
var rst2 = '';

do{
  rst2 += x + ' x 5 = ' + (x*5) + '\n';
  x++;
}while (x<13);

console.log(rst2);


//1.- Crear una función que evalúe cuál de 4 números es el mayor.

function openModal(){
  console.log("deberia abrir");
  $('.miModal').fadeIn(1000);
}

function showImg(){
  $('.profile').toggle(1000);
}

var estado = 0;
function showDetalle(){
  if(estado==0){
    $('.detalle').slideDown(500);
    estado = 1;
  }else{
    $('.detalle').slideUp(500);
    estado = 0;
  }
}

$('.container').hide();
$('.container').show();

$('#error').text("El usuario ya ha sido tomado.");
$('#error').html("El <b>usuario</b> ya ha sido tomado.");

var img = $('#imagen').html();
console.log(img);

function addPicture(){
  console.log(img);
  $('#galeria').append(img);
}







// EJERCICIOS
// 1.- Crear una función que calcule el cuadrado de un número.
// 2.- Crear una función que calcule el cubo de un número.
// 3.- Crear una función que calcule el promedio de tres números.
// 4.- Crear una función que calcule el factorial de un número.
// 5.- Crear una función que calcule la edad de una persona, en
// base al año de nacimiento.
