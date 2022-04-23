

  var userData = JSON.parse(localStorage.getItem("userlocal")) || [] 
document.getElementById("movie").addEventListener("submit",myFunction1);
function myFunction1() {
    event.preventDefault();
var email = document.getElementById("email").value;

var pass = document.getElementById("pass").value;


var userObj ={
    userEmail : email ,
   
    userPass: pass  
  };
  
  
  userData.push(userObj);
  localStorage.setItem("userlocal",JSON.stringify(userData));
//   window.location.href='../signin/signin.html'
}
