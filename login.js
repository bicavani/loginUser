let username = prompt("User Name: ", '');
let isUserName = username == "admin";
if (isUserName){
    let password = prompt("Password", '');
    let isPassword = password == "TheMaster";
    if(isPassword)
        document.write("Welcome");
    else {
        let isPassword = password == "null";
        if (isPassword)
            document.write("Canceld");
        else document.write("Wrong password");
    }

}
else {
    let isUserName = username == "null";
    if (isUserName)
        document.write("Canceld");
    else
        document.write("i don't known you");
}


