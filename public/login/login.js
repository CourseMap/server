const name = document.getElementById("login-name");
const department = document.getElementById("login-department");

$(document).ready(function() {


$('#login-submit').click(function(e) {
  e.preventDefault();
  var info = {};
  info.name = $("#login-name").val();
  info.dept = $("#login-department").val();
  console.log(info);

  $.ajax({
    url: '/depart',
    data: info,
    method: "GET",
    success: function(data) {
      console.log(data);
      $("#showdata").text(data);
    }
  });
});

});
