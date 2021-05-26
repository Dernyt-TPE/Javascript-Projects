let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;



function check() {
    if (username.value == "") {
        document.getElementById("usernameerror").innerHTML = "username cannot be empty";
        flag = 0;
    }
    else if (username.value.length < 3) {
        document.getElementById("usernameerror").innerHTML = "username should be greater than 3 characters";
        flag = 0;
    }
    else {
        document.getElementById("usernameerror").innerHTML = "";
        flag = 1;
    }

    if (password.value == "") {
        document.getElementById("passworderror").innerHTML = "password cannot be empty";
        flag = 0;
    }

    else if (password.value.length < 6) {
        document.getElementById("passworderror").innerHTML = "password should have minimum 6 characters";
        flag = 0;
    }
    else {
        document.getElementById("passworderror").innerHTML = "";
        flag = 1;
    }

    if (flag == 1)
        return true;
    else
        return false;


}
