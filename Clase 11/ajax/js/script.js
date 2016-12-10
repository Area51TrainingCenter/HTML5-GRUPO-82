$(document).ready(function(){

});


function loadPage(page){
	if(page==1){
		$(".contenedor").load("pages/page1.html");
	}
	if(page==2){
		$(".contenedor").load("pages/page2.html");
	}
}

var hotel = {
	nombre : 'Los delfines',
	habitaciones : 35,
	copadas : 10,
	disponibles : function(){
		return this.habitaciones - this.copadas
	},
	categorias : [ "presidencial", "matrimonial", "simple" ]
}

console.log( hotel.nombre + '\n' );
console.log( hotel.disponibles() );










/******/