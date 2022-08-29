const complaintBody = document.getElementById("complaintBody");
const inputOrder = document.getElementById("status");
const changeId = document.getElementById("complaintId");
const changeStatus = document.getElementById("statusId");
const changeMeeting = document.getElementById("meetingId");

async function getComplaints(){
    const httpResponse = await fetch("http://localhost:4040/complaint");
    const complaints = await httpResponse.json();
    return complaints;
}

async function renderComplaintBody(){

    let renderedComplaints;

    if(inputOrder.value == "ALL"){
        renderedComplaints = await getComplaints();
    }else{
        renderedComplaints = await getComplaints();
        renderedComplaints = renderedComplaints.filter(complaint => complaint.status == inputOrder.value );
    }

    for(const complaint of renderedComplaints){

            const complaintRow = document.createElement("tr");

            const complaintId = document.createElement("td");
            complaintId.innerText = complaint.id;

            const complaintCategory = document.createElement("td");
            complaintCategory.innerText = complaint.category;

            const complaintDesc = document.createElement("td");
            complaintDesc.innerText = complaint.description;

            const complaintStatus = document.createElement("td");
            complaintStatus.innerText = complaint.status;

            const complaintMeeting = document.createElement("td");
            complaintMeeting.innerText = complaint.meetingId;

            complaintRow.appendChild(complaintId);
            complaintRow.appendChild(complaintCategory);
            complaintRow.appendChild(complaintDesc);
            complaintRow.appendChild(complaintStatus);
            complaintRow.appendChild(complaintMeeting);

            complaintBody.appendChild(complaintRow);

    }

}

inputOrder.addEventListener("change", event => {
    event.preventDefault();

    const complaintBody = document.getElementById("complaintBody");

    complaintBody.innerHTML = "    <tr>\n" +
        "      <th>Complaint ID</th>\n" +
        "      <th>Category</th>\n" +
        "      <th>Description</th>\n" +
        "      <th>Status</th>\n" +
        "    </tr>";

    renderComplaintBody();
});

document.addEventListener("submit", async event =>{

    event.preventDefault();

    const id = changeId.value;
    const status = changeStatus.value;
    let meeting = changeMeeting.value;

    const renderedComplaints = await getComplaints();


    for(const complaint of renderedComplaints){


        if(complaint.id == id){

            let c = complaint;

            if(meeting == ""){
                c.status = status;
                c.meetingId = 0;
            }else{
                c.status = status;
                c.meetingId = meeting;
            }


            const response = await fetch(`http://localhost:4040/complaint/${id}`,{
                method:"PATCH",
                body: JSON.stringify(c),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if(response.status === 201){

                alert("Successful");
                changeId.value = "";
                changeStatus.value = "";
                changeMeeting.value = "";

            }else{alert("Failed");}
        }
    }
});

renderComplaintBody();
