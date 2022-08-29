const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

document.addEventListener("submit", async event => {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;
    const credentials = {username, password};

    const httpResponse = await fetch("http://localhost:4040/login", {
        method:"POST",
        body:JSON.stringify(credentials),
        headers:{
            'Content-Type':"application/json"
        }
    });

    if(httpResponse.status === 200){

        const user = await httpResponse.json();
        alert("login successful");

        user.password = null;

        console.log(user);

        localStorage.setItem("user", JSON.stringify(user));
        localStorage.getItem("user");
        localStorage.clear();

    }

    if(httpResponse.status === 404){alert("User not found");}

    if(httpResponse.status === 400){alert("Username/Password does not match");}

});