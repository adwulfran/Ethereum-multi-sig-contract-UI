if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
           var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/Z9CteL366EwXY25GYzX1'));
        }

        web3.eth.defaultAccount = web3.eth.accounts[0];

        var CoursetroContract = web3.eth.contract([
	{
		"constant": false,
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
	},
	{
		"constant": false,
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
		"stateMutability": "nonpayable",
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
		"constant": true,
		"inputs": [],
		"name": "getCandidateList",
		"outputs": [
			{
				"name": "",
				"type": "bytes32[]"
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
	}
]);
 CoursetroContract1 = CoursetroContract.at('0xea8f5ff4fc4dc769e2cc97adbe647b7d506e252e');
 //tokenContract = web3.eth.contract(contractABI).at(contractAddress)
  //   console.log(tokenContract.balanceOf(address).toNumber())
 // CoursetroContract1.getCandidateList.call();
 console.log(CoursetroContract1);
 //let name = "Rama";
//var zoka = CoursetroContract1.totalVotesFor.call(name).toString().then(function (result) { console.log(result)});
//console.log(zoka);
let name = "0x6a6f617175696d00000000000000000000000000000000000000000000000000";
CoursetroContract1.totalVotesFor.call(name, function (err, res) {
  //do stuff
  console.log(res)
})

CoursetroContract1.getCandidateList.call(function (err, res) {
  //do stuff
  console.log(res)
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
