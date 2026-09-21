const login = document.getElementById("login");
const email = document.getElementById("email");
const password = document.getElementById("password");
const output = document.querySelector(".output");

email.value = localStorage.getItem("savedEmail") ||"";
password.value = localStorage.getItem("savedPassword")||"";

login.addEventListener("submit", formHandler);
function formHandler(e){
    e.preventDefault();
    const savedEmail = localStorage.getItem("savedEmail");
    const savedPassword = localStorage.getItem("savedPassword");

    if (email.value === savedEmail && password.value === savedPassword){
        output.innerHTML = "Login succesful";
        output.style.color= "green";
        setTimeout(()=>{
            window.location.href = "dashboard.html";
        }, 1000);

    }else{
        output.innerHTML = "Incorrect email or password";
        output.style.color = "red";
    }
}

// let login = document.getElementById("login")

// login.addEventListener("submit", function(event){
//     event.preventDefault();

//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//     let user = JSON.parse(localStorage.getItem("register"));

//     if (user && email === register.email && password === register.password){
//         alert ("login successful");
//         window.location.href = "dashboard.html";
//     }else{
//         alert("INVALID EMAIL OR PASSWORD ")
//     }
// });