//initialize




$("#regist-btn").click(function() {
  $('.ui.modal').modal('hide');
});

$("#login-btn").click(function() {
  $('.ui.modal').modal('hide');
});

$('.ui.modal').modal({
    backdrop: 'static',
    keyboard: false
})

// $('.ui.modal').modal('show');


var config = {
  apiKey: "AIzaSyAuvqAuiYCipCn5NO2gSXXLvy50Mmi7jLY",
  authDomain: "coursemap-e2f9a.firebaseapp.com",
  databaseURL: "https://coursemap-e2f9a.firebaseio.com",
  projectId: "coursemap-e2f9a",
  storageBucket: "coursemap-e2f9a.appspot.com",
  messagingSenderId: "199405435698"
};

firebase.initializeApp(config);

var depart_list = new Vue ({
  el: '#select_dept',
  data: {
    departments: ["中文系 CL", "外文系 FLL", "歷史系 HIS", "台文系 TWL", "數學系 MATH", "物理系 PHYS", "化學系 CHEM", "地科系 EARS", "光電系 DPS", "機械系 ME", "化工系 CHE", "資源系 RE", "材料系 MSE", "土木系 CE", "水利系 HOE", "工科系 ES", "能源學程 IBPE", "系統系 SNME", "都計系 UP", "航太系 AA", "環工系 EV", "測量系 GM", "醫工系 BME", "會計系 ACC", "統計系 STAT", "工資系 IIM", "企管系 BA", "交管系 TCM", "護理系 NURS", "醫技系 MLSB", "醫學系 MED", "物治系 PT", "職治系 OT", "藥學系 DOPA", "法律系 LAW", "政治系 PS", "經濟系 ECON", "心理系 PSY", "電機系 EE", "資訊系 CSIE", "建築系 ARCH", "工設系 ID", "生科系 LS", "生技系 BBS"],
},
  methods: {
    choose_depart: function() {
      console.log(document.getElementById("sel__dept").selectedIndex +" "+ document.getElementById("sel__dept").value);
    }
  }

});

//sign in
var account = document.getElementById("account");
var pwd = document.getElementById("pwd");
var registerSmtBtn = document.getElementById("regist-btn");

document.getElementById("regist-btn").disabled = true;

document.addEventListener("input", function(){

  if(document.getElementById("username").value.length == 0 || pwd.value.length==0 || account.value.length==0 || document.getElementById("sel__dept").value=="No"){
    console.log("NOOOO");
    document.getElementById("regist-btn").disabled = true;
  } else {
    document.getElementById("regist-btn").disabled = false;
  }
}, false);



registerSmtBtn.addEventListener("click", function(){
  console.log(account.value);
  firebase.auth().createUserWithEmailAndPassword(account.value, pwd.value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMsg = error.message;
    console.log(errorMsg);
    document.getElementById("errormsg").innerHTML = errorMsg;
  }).then(function() {

    var loginUser = firebase.auth().currentUser;
    console.log("log in as :", loginUser);

    firebase.database().ref('users/' + loginUser.uid).set({
      email: loginUser.email,
      username: document.getElementById("username").value,
      departName: document.getElementById("sel__dept").value,
      departID: document.getElementById("sel__dept").selectedIndex,
    })
  });
}, false);

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
    $('.ui.modal').modal('show');
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
    }, function(error) {
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
    }, function(error) {
      console.log.error("error!");
    });
  }, false);

}

//change password
var chgpwd = document.getElementById("chg-pass");
var chgpwdbtn;
