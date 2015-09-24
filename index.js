
var express= require('express');
var app= express();

var server = app.listen(5000, function(){
	var host = server.address().adress;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
	});

/*app.get("/", function(req,res){
	res.send('Hello World!');
});

app.route('/student')
	.get(function(req,res){
		res.send('Get a student');
	})
	.post(function(req,res){
		res.send('Add a student');
	})
	.put(function(req,res){
		res.send('Update a student');
	});
*/

app.use(require('body-parser')());  //nagreread ng forms ng input , nilalagay sa req-body
app.use(require('method-override')());  //kelangan ng put, delete
app.use(require(__dirname+'/config/router')(express.Router()));
app.use(express.static(__dirname+'/public'));

