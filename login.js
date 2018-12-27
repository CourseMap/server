//initialize

var config = {
  apiKey: "AIzaSyAuvqAuiYCipCn5NO2gSXXLvy50Mmi7jLY",
  authDomain: "coursemap-e2f9a.firebaseapp.com",
  databaseURL: "https://coursemap-e2f9a.firebaseio.com",
  projectId: "coursemap-e2f9a",
  storageBucket: "coursemap-e2f9a.appspot.com",
  messagingSenderId: "199405435698"
};

firebase.initializeApp(config);

//sign in
var account = document.getElementById("account");
var pwd = document.getElementById("pwd");
var registerSmtBtn = document.getElementById("regist-btn");
registerSmtBtn.addEventListener("click", function(){
        console.log(account.value);
  //   firebase.auth().createUserWithEmailAndPassword(account.value, pwd.value).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMsg = error.message;
  //   console.log(errorMsg);
  //   document.getElementById("errormsg").innerHTML = errorMsg;
  // });
  firebase.auth().createUserWithEmailAndPassword(account.value, pwd.value).then(function() {
    var loginUser = firebase.auth().currentUser;
    console.log("log in as :", loginUser);
    firebase.database().ref('users/' + loginUser.uid).set({
      username: document.getElementById("username").value,
      email: loginUser.email,
      department: 
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMsg = error.message;
      console.log(errorMsg);
      document.getElementById("errormsg").innerHTML = errorMsg;
    });
  })
},false);


//login status
var userLogin;
firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    userLogin = user;
    document.getElementById("errormsg").innerHTML = "Welcome!";
    console.log("Hi!");
    console.log(userLogin.uid);
  } else {
    userLogin = null;
    document.getElementById("errormsg").innerHTML = "Please sign in first.";
    console.log("Bye");
  }
});

//log in
var logEmail = document.getElementById("log__em");
var logPwd = document.getElementById("log__pass");
var loginBtn = document.getElementById("login-btn");
if(loginBtn){
  loginBtn.addEventListener("click", function() {
    console.log(logEmail.value);
    firebase.auth().signInWithEmailAndPassword(logEmail.value, logPwd.value).catch(function(err) {
      var errorCode = error.code;
      var errorMsg = error.message;
      console.log(errorMsg);
    })
  }, false);
}


//log out
var logoutBtn = document.getElementById("logout-btn");
if(logoutBtn) {
  logoutBtn.addEventListener("click", function() {
    firebase.auth().signOut().then(function() {
      console.log("sign out!");
    }, function(err) {
      console.log("error");
    })
  }, false);
}

//verify email
userLogin = firebase.auth().currentUser;
var verifyBtn = document.getElementById("verify-btn");
if(verifyBtn){
  verifyBtn.addEventListener("click", function() {
    userLogin.sendEmailVerification().then(function() {
      console.log("sent!");
    }, function(err) {
      console.log.error("error!");
    });
  }, false);

}

//change password
var chgpwd = document.getElementById("chg-pass");
var chgpwdbtn

if(document.getElementById("username").value == 0){
  document.getElementById("regist-btn").disable = true;
}

//input data
// var key = firebase.database().ref('users/').push({
//             username: name,
//           }).key;
//
// console.log("Push key = "+ key );


//store personal data
// var db = firebase.database();
//
// ref = db.ref("/");
// var value = {
//   b: "234"
//  // Test1: "t1",
//  // Test2: "t2",
//  // Test3: "t3"
// }
//
// ref.set(value);

// var ref = db.ref("/");
// ref.once("value", function(snapshot) {
//  console.log(snapshot.val());
// });





//sign out
// var signoutBtn = document.getElementById("signout-btn");
// signoutBtn.addEventListener("click", function() {
//   firebase.auth().signOut().then(function() {
//     console.log("logged out");
//   }, function(err) {
//     console.log(err);
//   })
// }, false);


// var user = firebase.auth().currentUser;
// var name = document.getElementById("username");
// user.updateProfile({
//   displayName: name
// }).then(function() {
//   console.log("success!");
// }).catch (function(err) {
//   if(err) console.log(err);
// });
//
// var user_name, uid;
// if(user != null) {
//   user_name = user.displayName;
//   uid = user.uid;
//   console.log(user_name);
// }
