
var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

if (typeof web3 !== 'undefined') {
	web3 = new Web3(web3.currentProvider);
} else {
	var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Z9CteL366EwXY25GYzX1'));
}

web3.eth.defaultAccount = web3.eth.accounts[0];
console.log(web3.eth.accounts[0]);

var CoursetroContract = web3.eth.contract([
{
	"constant": false,
	"inputs": [
	{
		"name": "owner",
		"type": "address"
	}
	],
	"name": "addOwner",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"constant": false,
	"inputs": [
	{
		"name": "transactionId",
		"type": "uint256"
	}
	],
	"name": "deleteTransaction",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"constant": false,
	"inputs": [
	{
		"name": "owner",
		"type": "address"
	}
	],
	"name": "removeOwner",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"constant": false,
	"inputs": [
	{
		"name": "transactionId",
		"type": "uint256"
	}
	],
	"name": "signTransaction",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": false,
		"name": "by",
		"type": "address"
	},
	{
		"indexed": false,
		"name": "transactionId",
		"type": "uint256"
	}
	],
	"name": "TransactionSigned",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": false,
		"name": "from",
		"type": "address"
	},
	{
		"indexed": false,
		"name": "to",
		"type": "address"
	},
	{
		"indexed": false,
		"name": "amount",
		"type": "uint256"
	},
	{
		"indexed": false,
		"name": "transactionId",
		"type": "uint256"
	}
	],
	"name": "TransactionCompleted",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": false,
		"name": "from",
		"type": "address"
	},
	{
		"indexed": false,
		"name": "amount",
		"type": "uint256"
	}
	],
	"name": "DepositFunds",
	"type": "event"
},
{
	"anonymous": false,
	"inputs": [
	{
		"indexed": false,
		"name": "from",
		"type": "address"
	},
	{
		"indexed": false,
		"name": "to",
		"type": "address"
	},
	{
		"indexed": false,
		"name": "amount",
		"type": "uint256"
	},
	{
		"indexed": false,
		"name": "transactionId",
		"type": "uint256"
	}
	],
	"name": "TransactionCreated",
	"type": "event"
},
{
	"constant": false,
	"inputs": [
	{
		"name": "to",
		"type": "address"
	},
	{
		"name": "amount",
		"type": "uint256"
	}
	],
	"name": "transferTo",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"constant": false,
	"inputs": [
	{
		"name": "amount",
		"type": "uint256"
	}
	],
	"name": "withdraw",
	"outputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "function"
},
{
	"payable": true,
	"stateMutability": "payable",
	"type": "fallback"
},
{
	"inputs": [],
	"payable": false,
	"stateMutability": "nonpayable",
	"type": "constructor"
},
{
	"constant": true,
	"inputs": [],
	"name": "getPendingTransactions",
	"outputs": [
	{
		"name": "",
		"type": "uint256[]"
	}
	],
	"payable": false,
	"stateMutability": "view",
	"type": "function"
},
{
	"constant": true,
	"inputs": [],
	"name": "walletBalance",
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
]);
CoursetroContract1 = CoursetroContract.at('0x5067141403a5bfb69281c92a9ed7a3c7754f9bfe');
 //tokenContract = web3.eth.contract(contractABI).at(contractAddress)
  //   console.log(tokenContract.balanceOf(address).toNumber())
 // CoursetroContract1.getCandidateList.call();
 console.log(CoursetroContract1);
 //let name = "Rama";
//var zoka = CoursetroContract1.totalVotesFor.call(name).toString().then(function (result) { console.log(result)});
//console.log(zoka);
let name = "0x666666666a6f617175696d000000000000000000000000000000000000000000";
CoursetroContract1.walletBalance.call(function (err, res) {
  //do stuff
  $( document ).ready(function() {
  	$('#candidate-1').html(''+res)
  })
  console.log(res)
})

//!\\ SI probleme avec getPendingTransactions il suffit d'appeler la fonction avec un boutton
CoursetroContract1.getPendingTransactions.call(function (err, res) {
  //do stuff
  
  $( document ).ready(function() {
  	$('#candidate-3').html(''+res[0])
  	
  });
  console.log(JSON.stringify(res));
  //this.transacEncours.push(Number(res)); 
  console.log('c quoi la transac en cours'+res);
})



$( document ).ready(function() {
	$("#btnwithdraw").click(function() {
		CoursetroContract1.withdraw(300000000000000000, function (err, res) {
		  //do stuff
		  console.log(res);
		  //count pour numero transaction
		  
		  
		})
	})
	$("#btnsign").click(function() {
		CoursetroContract1.signTransaction(countTransactions, function (err, res) {
		  //do stuff
		  console.log(res);
		  console.log(transacEncours[0]);
		})
	})
	$("#btnsee").click(function() {
		CoursetroContract1.getPendingTransactions.call(function (err, res) {
		  //do stuff
		  $('#candidate-3').html(''+res)
		  console.log('BTSEE'+res);
		  
		})
	})
})




 /*
function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}



 $( document ).ready(function() {
  	$("#btns").click(function() {
		CoursetroContract1.voteForCandidate(name, {gas: 140000, from: web3.eth.accounts[0]}, (err, res) => {
                if (err)
                    console.log(res);
            }
	)
 })
  })
//console.log(CoursetroContract1.getCandidateList.call()); //console.log(CoursetroContract1.candidateList(0));
//CoursetroContract1.candidateList(0).then(function (result) { console.log(result)});

/*
CoursetroContract1.candidateList().call().then(function(error, result) {
           if (!error) {
               //$("#instructor").html(result[0]+' ('+result[1]+' years old)');
               console.log(result)
           } else
                console.log(error);
       });
       */

 //  var addressz = '0x337b78d8f72e0b9bfe28bad7925670f294880da8';
 //CoursetroContract1.balanceOf(addressz).call()
      //              .then(function (result) { console.log(result)});
//

     /*   var Coursetro = CoursetroContract.at('0x337b78d8f72e0b9bfe28bad7925670f294880da8');

        var instructorEvent = Coursetro.instructor({},'latest');

        instructorEvent.watch(function (err, result) {
            if (!err) {
                if (result.blockHash != $("#instrans").html()) 
                    $("#loader").hide();
                
                $("#insTrans").html('Block hash: ' +result.blockHash);
                $("#instructor").html(web3.toAscii(result.tokenName) + ' ' + web3.toAscii(result.args.lName) + ' (' + result.args.age + ' years old)');
            } else {
                $("#loader").hide();
            }
        });

        Coursetro.countInstructors((err, res) => {
            if (res)
                $("#countIns").html(res.c + ' Instructors'); 
        });

       $("#button").click(function() {
            $("#loader").show();
            Coursetro.setInstructor(web3.eth.defaultAccount, $("#age").val(), $("#fName").val(),$("#lName").val(), (err, res) => {
                if (err)
                    $("#loader").hide();
            });
        });
        */
