var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/public'));
app.use('/static/node_modules/web3/dist/web3.min.js', express.static(__dirname + '/node_modules/web3/dist/web3.min.js'));
app.use('/script', express.static(__dirname + '/public/script.js'));



app.get('/', function (req, res) {
  res.send('Hello World!')
})



app.listen(3000, function(){
    console.log("The frontend server is running on port 3000!");
});