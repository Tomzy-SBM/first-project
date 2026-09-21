const register = document.getElementById("register");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const address = document.getElementById("address");
const dateofbirth = document.getElementById("dateofbirth");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmpassword = document.getElementById("confirmpassword");
const output = document.querySelector(".output");
register.addEventListener("submit", formHandler);
function formHandler(e) {
    e.preventDefault();
    if (firstname.value === "0") {
    output.innerHTML = "Please enter your firstname";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
    } else if (lastname.value.length === 0) {
    output.innerHTML = "Please enter your lastname";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
    } else if (email.value.length === 0) {
    output.innerHTML = "Please enter your email";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
    } else if (address.value.length === 0) {
    output.innerHTML = "Please enter your address";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
    }else if (dateofbirth.value.length === 0) {
    output.innerHTML = "Please enter your date of birth";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
    }else if (isNaN(phone.value) || phone.value.length !== 11) {
    output.innerHTML = "Please enter a valid phone number";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
    }else if (password.value.length === 0) {
    output.innerHTML = "Please enter your password";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
    }else if (password.value.length > 6) {
    output.innerHTML = "Password cannot exceed 6 characters";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
    }else if (confirmpassword.value.length === 0) {
    output.innerHTML = "Please confirm your password";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
    }else if (confirmpassword.value !== password.value) { 
    output.innerHTML = "Passwords do not match";
    output.style.color = "red";
    output.style.fontSize = "1.9rem";
    output.style.fontFamily = "roboto";
    }else {
        alert = `Account Successfully Created !`
        output.innerHTML= alert
        output.style.color= `green`
        output.style.fontSize= `14px`

        localStorage.setItem("savedFirstname",firstname.value)
        localStorage.setItem("savedLastname",lastname.value)
        localStorage.setItem("savedEmail", email.value)
        localStorage.setItem("savedAddress",address.value)
        localStorage.setItem("savedDate0fbirth",dateofbirth.value)
        localStorage.setItem("savedPhone",phone.value)
        localStorage.setItem(`savedPassword`,password.value)
        localStorage.setItem(`savedConfirmpassword`,confirmpassword.value)

        setTimeout(()=>{
            window.location.href = "login.html";
        })
        
    }
}
// btnSubmit.addEventListener(`click`,check)


