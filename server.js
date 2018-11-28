const express = require('express')
const app = express()
const fs = require('fs')
const https = require('https')
const port = 11121
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// for luffy https
// const key = fs.readFileSync('/home/wp2018/ssl/private.key')
// const cert = fs.readFileSync('/home/wp2018/ssl/certificate.crt')
//
// var opt = {
//   key: key,
//   cert: cert
// }
//
// https.createServer(opt, app).listen(port, function(){
//   console.log("---Connected---");
// })

app.listen(port, function(){
  console.log("---Connected---");
})

app.use(express.static(__dirname + '/public'))
//need this to execute "POST"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
