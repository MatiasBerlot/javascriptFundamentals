function Persona(nombre, apellido, dni){
    
    var self = this;
    
    self.obtenerNombre = obtenerNombre;
    
    function obtenerNombre(){
        return apellido + ", " + nombre;
    }
    
    Object.defineProperty(self, 'profesion', {
        configurable: true,
        get: function(){
            return "no definida"
        }
    });
    
}

function Profesor(nombre, apellido, dni, headerProfesor){
    var self = this;
    Persona.call(self, nombre, apellido, dni);
    
    Object.defineProperty(self, 'profesion', {
        configurable: true,
        get: function(){
            return "profesor"
        }
    });
    
    self.dictar = dictar;
    
    function dictar(){
        headerProfesor.innerHTML = self.obtenerNombre() + " " + dni;
    }
}

function Alumno(nombre, apellido, dni, listaAlumnos){
    var self = this;
    Persona.call(self, nombre, apellido, dni);
    
    Object.defineProperty(self, 'profesion', {
        configurable: true,
        get: function(){
            return "alumno"
        }
    });
    
    self.inscribir = inscribir;
    
    function inscribir(){
        var alumno = document.createElement("li");
        alumno.innerHTML = self.obtenerNombre() + " " + dni;
        listaAlumnos.appendChild(alumno);
    }
}

var headerProfesor = document.getElementById("profesor");
var listaAlumnos = document.getElementById("alumnos");

var curso = [
    new Profesor("Juan", "Perez", 27111333, headerProfesor),
    new Alumno("Roberto", "Gonzales", 47111333, listaAlumnos),
    new Alumno("Mas", "Alguien", 25411333, listaAlumnos),
    new Alumno("Soy", "Otro", 31211333, listaAlumnos),
    new Alumno("Matias", "Berlot", 33311333, listaAlumnos)
];

for (var index = 0; index < curso.length; index++) {
    curso[index].profesion == "profesor" ? curso[index].dictar() : curso[index].inscribir();
}
