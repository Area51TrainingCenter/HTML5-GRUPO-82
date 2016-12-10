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

var pokedex = "";
$.getJSON("js/pokemon.json", function(data){
	console.log(data.pokemon.length);

	for(var i = 0; i<data.pokemon.length; i++){
		pokedex += '<div class="pokemon">'+
					'<img src=" '+ data.pokemon[i].img +' " width="120" height="120" />'+
					'<p>' + data.pokemon[i].id + ': ' + data.pokemon[i].name + '</p>'+
					'<p>Tipo: ' + data.pokemon[i].type[0] + '</p>'+
				'</div>';
	}

	$(".pokedex").html(pokedex);

});









/******/