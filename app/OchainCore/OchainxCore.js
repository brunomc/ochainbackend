const Web3 = require('web3') ;
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/BUYxMOgW9MGsKcg8rkeq"));
EthereumTx = require('ethereumjs-tx');
var coder = require('web3/lib/solidity/coder');  
var CryptoJS = require('crypto-js');
//private key gerada a partir das 12 palavras chaves privadas da carteira
const privateKey = Buffer.from('a2d9a9cc454b3b8793ac10b1bab2cbbd04d2baab4720a759fe5a3228a802743b', 'hex');
//var mnemonic = "pepper athlete brand party proud cabin federal often despair regret corn artefact";
 
const ProductContract = require('../../config/EthereumSetup.js');
var account = "0xe0e702bbe5af4e664db9589100c2e6711a34263c";
var addressContract = "0x921Df9f6c2AFDE3e728A8a1ebb8Ae4bB24AfbA40";

exports.save =  function(nameProduct,productionDate,manufacturer,trackerProgress){
	var functionName = 'registerProduct';
	var types = ['string','string','string','string']; 
	var args = [nameProduct, productionDate, manufacturer, trackerProgress];
	var fullName = functionName + '(' + types.join() + ')';  
	var signature = CryptoJS.SHA3(fullName,{outputLength:256}).toString(CryptoJS.enc.Hex).slice(0, 8);
	var dataHex = signature + coder.encodeParams(types, args);
	var data = '0x'+dataHex;
	var nonce = web3.toHex(web3.eth.getTransactionCount(account));
	var gasPrice = web3.toHex(web3.eth.gasPrice) ; 
	var gasLimitHex = web3.toHex(300000); 
	var rawTx = { 'nonce': nonce, 'gasPrice': gasPrice, 'gasLimit': gasLimitHex, 'from': account, 'to': addressContract, 'data': data, 'chainId':4} ; 
	var tx = new EthereumTx(rawTx) ;
	tx.sign(privateKey);
	var serializedTx = '0x'+tx.serialize().toString('hex') ;
	return new Promise((resolve, reject) => {
		web3.eth.sendRawTransaction(serializedTx, function(error, result){
			if(result){
				resposta = {resposta:result};		
				resolve(resposta);
			} else {
				resposta = {resposta:error};
				reject(resposta);
			}	
		}); 
	
	});
	
};	
exports.updateProductTracker = function(idProduct,trackerProgress){
	var functionName = 'updateTracker'; 
	var types = ['uint256','string']; 
	var args = [idProduct, trackerProgress]; 
	var fullName = functionName + '(' + types.join() + ')';  
	var signature = CryptoJS.SHA3(fullName,{outputLength:256}).toString(CryptoJS.enc.Hex).slice(0, 8);
	var dataHex = signature + coder.encodeParams(types, args);
	var data = '0x'+dataHex;
	var nonce = web3.toHex(web3.eth.getTransactionCount(account))  ;
	var gasPrice = web3.toHex(web3.eth.gasPrice) ; 
	var gasLimitHex = web3.toHex(300000); 
	var rawTx = { 'nonce': nonce, 'gasPrice': gasPrice, 'gasLimit': gasLimitHex, 'from': account, 'to': addressContract, 'data': data, 'chainId':4} ; 
	var tx = new EthereumTx(rawTx) ;
	tx.sign(privateKey);
	var serializedTx = '0x'+tx.serialize().toString('hex') ;
	return new Promise((resolve, reject) => {
		web3.eth.sendRawTransaction(serializedTx, function(error, result){
			if(result){
				resposta = {resposta:result};		
				resolve(resposta);
			} else {
				resposta = {resposta:error};
				reject(resposta);
			}	
		}); 
	
	});
};
exports.updateOwnerProduct = function(idProduct,ownerProduct){
	var functionName = 'updateOwnerProduct'; 
	var types = ['uint256','string']; 
	var args = [idProduct, ownerProduct]; 
	var fullName = functionName + '(' + types.join() + ')';  
	var signature = CryptoJS.SHA3(fullName,{outputLength:256}).toString(CryptoJS.enc.Hex).slice(0, 8);
	var dataHex = signature + coder.encodeParams(types, args);
	var data = '0x'+dataHex;
	var nonce = web3.toHex(web3.eth.getTransactionCount(account))  ;
	var gasPrice = web3.toHex(web3.eth.gasPrice) ; 
	var gasLimitHex = web3.toHex(300000); 
	var rawTx = { 'nonce': nonce, 'gasPrice': gasPrice, 'gasLimit': gasLimitHex, 'from': account, 'to': addressContract, 'data': data, 'chainId':4} ; 
	var tx = new EthereumTx(rawTx) ;
	tx.sign(privateKey);
	var serializedTx = '0x'+tx.serialize().toString('hex') ;
	return new Promise((resolve, reject) => {
		web3.eth.sendRawTransaction(serializedTx, function(error, result){
			if(result){
				resposta = {resposta:result};		
				resolve(resposta);
			} else {
				resposta = {resposta:error};
				reject(resposta);
			}	
		}); 
	
	});
};


exports.list = () =>{
	
	var arrayOfProducts =[];
	console.log('ProductContract', ProductContract);
	for(var i=0;i<=ProductContract.getProductCount()-1;i++){
		var data = ProductContract.getProduct(i);
		var jsonObjProduct = {};
		jsonObjProduct["id"] = data[0];
		jsonObjProduct["nameProduct"] = data[1];
		jsonObjProduct["dateFabrication"] = data[2];
		jsonObjProduct["manufacturer"] = data[3];
		jsonObjProduct["tracker"] = data[4];
		arrayOfProducts.push(jsonObjProduct);
	}
	
	return arrayOfProducts;


};
exports.getProductById = function(id,callback){
	
		var data = ProductContract.getProduct(id);
		console.log(data);
		var jsonObjProduct = {
			id: data[0],
			nameProduct: data[1],
			dateFabrication: data[2],
			ownerProduct: data[3],
			manufacturer: data[4],
			tracker: data[5],


		};
				
		return jsonObjProduct

};



