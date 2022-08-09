let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let admin = document.getElementById("admin");
let member = document.getElementById("member");
let buttonLogin = document.getElementById("buttonLogin");
let buttonLogout = document.getElementById("buttonLogout");


admin.style.display= "none";
member.style.display= "none";
buttonLogout.style.display= "none";

// console.log("Username berhasil di input kan");
// console.log(usernameInput.value);
// console.log(passwordInput.value);

function onLogin () {
    localStorage.setItem("username", usernameInput.value);
    buttonLogout.style.display= "block";
    if (usernameInput.value == "admin" && passwordInput.value == "akunadmin")  {
        localStorage.setItem("role", "Admin"); 
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        buttonLogin.style.display = "none";
        member.style.display = "none"; 
        admin.style.display = "block";
        
    } else {
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        buttonLogin.style.display = "none";
        localStorage.setItem("role", "MEMBER");
        member.style.display = "block";
        admin.style.display = "none";
        // buttonLogout.style.display = "block";
        // alert("login member berhasil")
    }

    if (localStorage.getItem("username")){
        usernameInput.style.display = "none";
        passwordInput.style.display = "none";
        buttonLogin.style.display = "none";
        buttonLogout.style.display = "block";
        if (localStorage.getItem("role") == "Admin"){
            member.style.display= "none";
            admin.style.display= "block";
        } else {
            admin.style.display= "none";
            member.style.display= "block";

        }
    }
}

function onLogout() {
    localStorage.clear();
    location.reload();
}
