for(var i = 0; i < 10; i++){
    
    $.ajax('/contacts/' + i, { method: "DELETE" }).then(function(data){
        console.log(data);
    }, function(error){
        console.log(error);
    });
}