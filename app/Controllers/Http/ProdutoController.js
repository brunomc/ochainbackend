'use strict'
const Web3 = require('web3') ;
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/BUYxMOgW9MGsKcg8rkeq"));
EthereumTx = require('ethereumjs-tx');
var coder = require('web3/lib/solidity/coder');  
var CryptoJS = require('crypto-js');
//private key gerada a partir das 12 palavras chaves privadas da carteira
const privateKey = Buffer.from('a2d9a9cc454b3b8793ac10b1bab2cbbd04d2baab4720a759fe5a3228a802743b', 'hex');
//var mnemonic = "pepper athlete brand party proud cabin federal often despair regret corn artefact";
 

var ProductContract = require('../../config/EthereumSetup.js');
//var Product = require('../models/Product');
var account = "0xe0e702bbe5af4e664db9589100c2e6711a34263c";
var addressContract = "0x909b6c3ee6e4df62115b7043203a86994cec32ff";

const Produto = use('App/Models/Produto')

/**
 * Resourceful controller for interacting with produtos
 */
class ProdutoController {
  /**
   * Show a list of all produtos.
   * GET produtos
   */
  async index ({ request, response }) {
    //const produtos = await Produto.all()
    //return produtos
     var arrayOfProducts =[];
  
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
    return arrayOfProducts
  }

  /**
   * Create/save a new produto.
   * POST produtos
   */
  async store ({ request, response }) {
    const dataBody = request.only(["nameProduct","productionDate","manufacturer","trackerProgress"])
    var functionName = 'registerProduct'; 
    var types = ['string','string','string','string']; 
    var args = [dataBody.nameProduct, dataBody.productionDate, dataBody.manufacturer, dataBody.trackerProgress]; 
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
  web3.eth.sendRawTransaction(serializedTx, function(err, txHash){
    if(err){
      return ({resposta:"Erro ao inserir dados do Produto no Blockchain"});
    }
    
    return ({resposta:txHash});
  }); 

 //   const produto = await Produto.create(data)

   // return produto
  }

  /**
   * Display a single produto.
   * GET produtos/:id
   */
  async show ({ params, request, response}) {
    //const produto = await Produto.find(params.id)
    //return produto
    

    var data = ProductContract.getProduct(params.id);
    var jsonObjProduct = {
      id: data[0],
      nameProduct: data[1],
      dateFabrication: data[2],
      manufacturer: data[3],
      tracker: data[4]

    };
      return jsonObjProduct  
  }

  /**
   * Update produto details.
   * PUT or PATCH produtos/:id
   */
  async update ({ params, request, response }) {
    const data = request.only(["url"])
    const produto = await Produto.find(params.id)
    console.log(produto)
    produto.merge(data)
    produto.save()
    return produto
  }

  /**
   * Delete a produto with id.
   * DELETE produtos/:id
   */
  async destroy ({ params, request, response }) {
    const produto = await Produto.find(params.id)
    produto.delete()
  }
}

module.exports = ProdutoController
