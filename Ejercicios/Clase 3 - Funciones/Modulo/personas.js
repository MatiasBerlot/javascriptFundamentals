var personas = (function(){

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
 
    
    return {
        Alumno: Alumno,
        Profesor: Profesor
    };
    
})();