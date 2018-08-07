var mongoose = require('mongoose');

var urlString = 'mongodb://hack:abc123@ds163630.mlab.com:63630/ochain';

mongoose.Promise = global.Promise;
mongoose.connect(urlString,function(err,res){
if( err ){
	console.log("Nao foi possivel conectar ", urlString);
}else{
	console.log("Conectado ao mongodb");
}

});