const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const inputFirst = document.getElementById("firstname");
const inputLast = document.getElementById("lastname");

document.addEventListener("submit", async event =>{

    event.preventDefault();

    const username = inputUsername.value;
    const password = inputPassword.value;
    const firstname = inputFirst.value;
    const lastname = inputLast.value;

    const user = {id:0, username, password, firstname, lastname};
    console.log(user);

    const response = await fetch("http://localhost:8080/user",{
        method:"POST",
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(response.status === 201){

        alert("Successful");
        inputUsername.value ="";
        inputPassword.value ="";
        inputFirst.value = "";
        inputLast.value = "";

    }else{alert("Failed");}

});