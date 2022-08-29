const inputCategory = document.getElementById("category");
const inputDesc = document.getElementById("description");


document.addEventListener("submit", async event =>{

    event.preventDefault();

    const category = inputCategory.value;
    const description = inputDesc.value;

    const complaint = {id:0, category, description};
    console.log(complaint);
    const response = await fetch("http://localhost:4040/complaint",{
        method:"POST",
        body: JSON.stringify(complaint),
        headers: {
            "Content-Type": "application/json"
        }
    });

    if(response.status === 201){

        alert("Successful");
        inputCategory.value = "";
        inputDesc.value = "";

    }else{alert("Failed");}

});