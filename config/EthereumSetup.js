var Web3 = require('web3');
//const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/BUYxMOgW9MGsKcg8rkeq"));
const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/BUYxMOgW9MGsKcg8rkeq"));

let TrackerProductABI = 
[
  {
    "constant": false,
    "inputs": [
      {
        "name": "_nameProduct",
        "type": "string"
      },
      {
        "name": "_productionDate",
        "type": "string"
      },
      {
        "name": "_manufacturer",
        "type": "string"
      },
      {
        "name": "_trackerProgress",
        "type": "string"
      }
    ],
    "name": "registerProduct",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_ind",
        "type": "uint256"
      },
      {
        "name": "_trackerProgress",
        "type": "string"
      }
    ],
    "name": "updateTracker",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "ind",
        "type": "uint256"
      }
    ],
    "name": "getProduct",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getProductCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "productId",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "productSetters",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
let trackerProductAddressContract = '0x3df6e62b65e685f0535bce423111717acc891579';
const ProductContract = web3.eth.contract(TrackerProductABI).at(trackerProductAddressContract);
module.exports= ProductContract;
