const meetingBody = document.getElementById("meetingBody");

async function getMeetings(){
    const httpResponse = await fetch("http://localhost:4040/meeting");
    const meetings = await httpResponse.json();
    return meetings;
}

async function renderMeetingBody(){

    const renderedMeetings = await getMeetings();

    for(const meeting of renderedMeetings){

        const meetingRow = document.createElement("tr");

        const meetingId = document.createElement("td");
        meetingId.innerText = meeting.id;

        const meetingDate = document.createElement("td");
        meetingDate.innerText = meeting.date;

        const meetingTime = document.createElement("td");
        meetingTime.innerText = meeting.time;

        const meetingLocation = document.createElement("td");
        meetingLocation.innerText = meeting.location;

        meetingRow.appendChild(meetingId);
        meetingRow.appendChild(meetingDate);
        meetingRow.appendChild(meetingTime);
        meetingRow.appendChild(meetingLocation);

        meetingBody.appendChild(meetingRow);

    }

}

renderMeetingBody();
