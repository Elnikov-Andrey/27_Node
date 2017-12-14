// task one
/*
var Event = require('events').EventEmitter;
var emt = new Event();

emt.on('test', function(){
    var date = new Date();
    console.log(date.toISOString());
    setTimeout(function(){
		console.log('hello');
	}, 2000);

});
emt.emit('test');


// task two

var http =  require('http');
var app = http.createServer(function (req, res){
	console.log(req.url);
	if (req.url == '/about') {
        console.log(req.method);
        console.log(req.headers);
        console.log(req.url);
		res.write('Hello in /about');
		res.end();
	} else {
		res.write('Hello world');
		res.end();
	}
    
    if (req.url == '/stop') {
        process.exit(-1);
        res.write('Hello in /stop');
		res.end();
	} else {
		res.write('Hello world');
		res.end();
	}
	
})
app.listen(3000, function(){
	console.log('Server on localhost:3000');
})

// task three

var http =  require('http');
var a = [{"ccy":"EUR","base_ccy":"UAH","buy":"32.00113","sale":"31.97658"},{"ccy":"RUR","base_ccy":"UAH","buy":"0.46103","sale":"0.46191"},{"ccy":"USD","base_ccy":"UAH","buy":"27.26749","sale":"27.17711"},{"ccy":"BTC","base_ccy":"USD","buy":"15703.5654","sale":"17356.5722"}];
function foo (request, response) {
    console.log(a);
    response.write('Hello');
	response.end();
}
//var app = http.createServer(foo);
//app.listen(3000);
http.createServer(foo).listen(3000);
console.log('Go to localhost 3000');
*/