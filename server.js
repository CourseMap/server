const express = require('express')
const app = express()
const port = 11121
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(port, function(){
  console.log("---Connected---");
})
app.use(express.static(__dirname + '/public'))
//need this to execute "POST"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
