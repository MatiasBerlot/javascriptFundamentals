function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual XHR stuff
    var req = new XMLHttpRequest();
    req.open('GET', url);

    req.onload = function() {
      // This is called even on 404 etc
      // so check the status
      if (req.status == 200) {
        // Resolve the promise with the response text
        resolve(req.response);
      }
      else {
        // Otherwise reject with the status text
        // which will hopefully be a meaningful error
        reject(Error(req.statusText));
      }
    };

    // Handle network errors
    req.onerror = function() {
      reject(Error("Network Error"));
    };

    // Make the request
    req.send();
  });
}

function writeBookTitlesOnConsole(json){
	var books = json.data;

	books.forEach(function(book){
		console.log(book.title);
	});
		
}

function parseToJson(text){
	return JSON.parse(text);
}


get('http://isbndb.com/api/v2/json/Y2WGXHH7/books?q=science')
	.then(parseToJson)
	.then(writeBookTitlesOnConsole);