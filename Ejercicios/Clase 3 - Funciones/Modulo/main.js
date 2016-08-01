var programa = (function(personas, document){
    
    var Profesor = personas.Profesor;
    var Alumno = personas.Alumno;
	
    var headerProfesor = document.getElementById("profesor");
    var listaAlumnos = document.getElementById("alumnos");
    
	var curso = [
            new Profesor("Juan", "Perez", 27111333, headerProfesor),
            new Alumno("Roberto", "Gonzales", 47111333, listaAlumnos),
            new Alumno("Mas", "Alguien", 25411333, listaAlumnos),
            new Alumno("Soy", "Otro", 31211333, listaAlumnos),
            new Alumno("Matias", "Berlot", 33311333, listaAlumnos)
        ];
	
    function generarCurso(){
        for (var index = 0; index < curso.length; index++) {
            curso[index].profesion == "profesor" ? curso[index].dictar() : curso[index].inscribir();
        }
    }
    
    return {
		generarCurso: generarCurso
	};
    
})(personas, document);

programa.generarCurso();