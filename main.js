let name = prompt("Enter Your Name:");
let phoneNumber = prompt("Enter Your Phone Number:" );
let email = prompt("Enter your Email:");
let password = prompt("Enter your Password:");
let confirmPassword = prompt("Confirm Enter your Password:");



 if (!password || !phoneNumber ||!email ||!confirmPassword) {
    alert("Error: Please fill in all the input fields.");
}else {
if (password == confirmPassword ){
    alert("Congratulations! You are successfully registered.");
}else{
    alert("Error: Passwords do not match. Please make sure the passwords match.");
}
}

document.write("User Name = " + name + "<br>");
document.write("User Phone Number = " + phoneNumber + "<br>");
document.write("User Email = " + email + "<br>");
document.write("User Password = " + password + "<br>");