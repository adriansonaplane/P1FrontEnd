const inputDate = document.getElementById("date");
const inputTime = document.getElementById("time");
const inputLocation = document.getElementById("location");


document.addEventListener("submit", async event =>{

    event.preventDefault();

    const date = inputDate.value;
    const time = inputTime.value;
    const location = inputLocation.value

    const meeting = {id:0, date, time, location};
    console.log(meeting);
    const response = await fetch("http://localhost:4040/meeting",{
        method:"POST",
        body: JSON.stringify(meeting),
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