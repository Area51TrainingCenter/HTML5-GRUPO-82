//$("#lista1 li").addClass('done');
//$("#lista1 li").removeClass('done');

var lista = ["Reloj", "Pavo", "Medias", "Pantalones", "Zapatillas", "Gafas"];
var contenido = "";
for(var i=0; i<lista.length; i++){
	contenido += "<li >"+ lista[i] +"<span >X</span></li>";
	//console.log(contenido);
}
$("#lista1").html(contenido);

$("#lista1 li").click(function(){
	done($(this));
});
$("#lista1 li span").click(function(){
	deleteElement($(this));
});

$('h3').css({
	'background-color':'#c5a996',
	'border': '1px solid #ffffff'
});

$('h3').click(function(){
	$(this).animate({
		opacity: 0,
		paddingLeft: '+=80'
	}, 500, function(){
		$(this).remove();
	});
});

function done(e){
	if($(e).hasClass('done')){
		$(e).removeClass('done');
	}else{
		$(e).addClass('done');
	}
}

function deleteElement(e){
	$(e).parent().animate({
		opacity: 0.0,
		paddingLeft: '+=200px'
	}, 500, 'swing');
}