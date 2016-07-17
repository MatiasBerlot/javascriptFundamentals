var Persona = function() {
  this.puedeHablar = true;
};

Persona.prototype.saludar = function() {
  if (this.puedeHablar) {
    console.log('Hola, mi nombre es ' + this.nombre);
  }
};

var Empleado = function(nombre, titulo) {
  Persona.call(this);
  this.nombre = nombre;
  this.titulo = titulo;
};

Empleado.prototype = Object.create(Persona.prototype);
Empleado.prototype.constructor = Empleado;

Empleado.prototype.saludar = function() {
  if (this.puedeHablar) {
    console.log('Hola, yo soy ' + this.nombre + ' el ' + this.titulo);
  }
};

var Cliente = function(nombre) {
  Persona.call(this);
  this.nombre = nombre;
};

Cliente.prototype = Object.create(Persona.prototype);
Cliente.prototype.constructor = Cliente;

var Mimo = function(nombre) {
  Persona.call(this);
  this.nombre = nombre;
  this.puedeHablar = false;
};

Mimo.prototype = Object.create(Persona.prototype);
Mimo.prototype.constructor = Mimo;

var pedro = new Empleado('Pedro', 'Constructor');
var juan = new Cliente('Juan');
var alberto = new Empleado('Alberto', 'Tecnico');
var miguel = new Cliente('Miguel');
var mimo = new Mimo('Mime');

pedro.saludar();
// Hola, yo soy Pedro el Constructor

juan.saludar();
// Hola, mi nombre es Juan

alberto.saludar();
//Hola, yo soy Alberto el Tecnico

miguel.saludar();
// Hola, mi nombre es Miguel

mimo.saludar();