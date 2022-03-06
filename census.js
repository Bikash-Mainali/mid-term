document.getElementById("census-form").addEventListener("submit", submitCensus);
function submitCensus() {
    const citizenId = document.getElementById("citizenId").value;
    const ssn = document.getElementById("ssn").value;
    const fullName = document.getElementById("fullName").value;
    const state = document.getElementById("state").value;
    const citizenCategory = document.getElementsByName("citizenCategory");
    let cat;
    for (let i = 0, length = citizenCategory.length; i < length; i++) {
        if (citizenCategory[i].checked) {
            cat = citizenCategory[i].value;
            break;
        }
    }
    let txt = "Citizen ID: " + citizenId + '\n' +
        "SSN ID: " + ssn + '\n' +
        "Full Name: " + fullName + '\n' +
        "State: " + state + '\n' +
        "Senior: " + cat
    alert(txt);
}

