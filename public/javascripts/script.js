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

        var CoursetroContract = web3.eth.contract([
	{
		"constant": true,
		"inputs": [
			{
				"name": "candidate",
				"type": "bytes32"
			}
		],
		"name": "totalVotesFor",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
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
				"name": "candidate",
				"type": "bytes32"
			}
		],
		"name": "validCandidate",
		"outputs": [
			{
				"name": "",
				"type": "bool"
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
				"type": "bytes32"
			}
		],
		"name": "votesReceived",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
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
		"name": "candidateList",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "candidate",
				"type": "bytes32"
			}
		],
		"name": "voteForCandidate",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "candidateNames",
				"type": "bytes32[]"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]);
 CoursetroContract1 = CoursetroContract.at('0xf0ccc528909414fc78a867ebd7e654e9f60cec10');
 //tokenContract = web3.eth.contract(contractABI).at(contractAddress)
  //   console.log(tokenContract.balanceOf(address).toNumber())
 // CoursetroContract1.getCandidateList.call();
 console.log(CoursetroContract1);
 //let name = "Rama";
//var zoka = CoursetroContract1.totalVotesFor.call(name).toString().then(function (result) { console.log(result)});
//console.log(zoka);
let name = "0x666666666a6f617175696d000000000000000000000000000000000000000000";
CoursetroContract1.totalVotesFor.call(name, function (err, res) {
  //do stuff
   $( document ).ready(function() {
  		$('#candidate-1').html('salut'+res)
  })
  console.log(res)
})

CoursetroContract1.candidateList.call(0,function (err, res) {
  //do stuff
  $("#insTrans").html('Block hash: ' +hex2a(res));
  console.log(res);
})


 
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
