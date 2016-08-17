function insertarEquiposEnLista(equipos, lista){
	var html = "";
	
	equipos.length && equipos.each(function(index, equipo){
		html += "<li>" + $(equipo).attr('name') + "</li>";
	});
	
	lista.append(html);
}

//:has seleccionara el elemento padre, no los hijos
insertarEquiposEnLista($('.developers:has(.senior)'), $('#equipos-senior'));
insertarEquiposEnLista($('.developers:has(.junior)'), $('#equipos-junior'));

//$(.employees-list.developers .senior) el espacio entre ambos denota que queremos seleccionar los hijos (directos o no)
//de los elementos .employees-list.developers que tengan la clase .senior 
//$(.employees-list.developers>.senior) seria equivalente pero solo seleccionaria los hijos directos (no los hijos de los hijos)
var desarrolladoresSeniorEmpleados = $('.employees-list.developers .senior');

//Necesitamos usar .clone(), sino cambiariamos los elementos existentes de lugar en vez de generar nuevos
$('#desarrolladores-senior-empleados').append(desarrolladoresSeniorEmpleados.clone());