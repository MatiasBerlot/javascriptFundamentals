
function get(url) {
  // se retorna una nueva promesa
  return new Promise(function(resolve, reject) {
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // esta funcion es ejecutada incluive con un 404 u otros estados
      // asi que se chequea que sea 200 (OK)
      if (req.status == 200) {
        // resolviendo la promesa con el resultado
        resolve(req.response);
      }
      else {
        // sino se rechaza con el texto del error
        reject(Error(req.statusText));
      }
    };

    // manejador para prosible errores de red
    req.onerror = function() {
      //rechazo de la promesa
      reject(Error("Network Error"));
    };

    // realizando el request
    req.send();
  });
}

//la siguiente funcion va a imprimir los titulos de unos libros que espera que le lleguen como JSON
function writeBookTitlesOnConsole(json){
	var books = json.data;

	books.forEach(function(book){
		console.log(book.title);
	});
		
}

//parseo de texto a JSON
function parseToJson(text){
	return JSON.parse(text);
}

//encadenamiento de promesas.
get('http://isbndb.com/api/v2/json/Y2WGXHH7/books?q=science')
	.then(parseToJson)
	.then(writeBookTitlesOnConsole);