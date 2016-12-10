//$("#lista1 li").addClass('done');
//$("#lista1 li").removeClass('done');

function done(e){

	if($(e).hasClass('done')){
		$(e).removeClass('done');
	}else{
		$(e).addClass('done');
	}
}