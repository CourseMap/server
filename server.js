const express = require('express')
const app = express()
// const session = require('express-session')
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



// app.use(session({
//   secret: '2C44-4D44-WppQ38S',
//   resave: true,
//   saveUninitialized: true
// }));
//
// var auth = function(req, res, next) {
//   if(req.session && req.session.user === "hugecat" && req.session.admin)
//     return next();
//   else
//     return res.sendStatus(401);
// };
//
// //Login endpoint
// app.get('/login', function(req,res) {
//   if(!req.query.username || !req.query.password) {
//     res.send('login failed');
//   } else if(req.query.username === "hugecat" || req.query.password === "pass")
//     req.session.user = "hugecat";
//     res.session.admin = true;
//     res.send("login success!");
// });
//
// //Logout endpoint
// app.get('/logout', function(req, res) {
//   req.session.destroy();
//   res.send("logout succcess!");
// });
//
// //Get content endpoint
// app.get('/content', auth, function(req,res) {
//   res.send("Please log in first.");
// });

var deptInfo = fs.readFileSync("all_department_with_credit.json");

app.listen(port, function(){
  console.log("---Connected---");
})

app.use(express.static(__dirname + '/public'))
//need this to execute "POST"
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.get('/depart', function(req, res) {
  var data = req.query.name;
  console.log(data);
})
