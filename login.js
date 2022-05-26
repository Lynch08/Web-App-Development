// Function to validate Login details for login.html
function validate()
{
    //variables for username and password - get the input value to text fields
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;

// if statment on what to do after validation
if (username == "gmit" && password=="gmit")
{
    alert("Login Successful"); // alert if successful
    window.open("home_and_signup.html") // Open homepage
    return false;
}
else
{
    alert("Login Failed"); // alert if not successful
}

}