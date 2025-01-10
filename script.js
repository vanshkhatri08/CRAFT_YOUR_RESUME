function addNewAQField() {
    let newField = document.createElement("input");
    newField.type = "text";
    newField.classList.add("form-control", "aqField", "mt-2");
    newField.placeholder = "Enter academic qualification";
    document.getElementById("aqContainer").appendChild(newField);
}

function addNewWEField() {
    let newField = document.createElement("select");
    newField.classList.add("form-select", "weField", "mt-2");
    newField.innerHTML = `
        <option value="0-1">0-1 Year</option>
        <option value="1-2">1-2 Years</option>
        <option value="2-5">2-5 Years</option>
        <option value="5+">5+ Years</option>
    `;
    document.getElementById("weContainer").appendChild(newField);
}

function addNewSkillField() {
    let newField = document.createElement("select");
    newField.classList.add("form-select", "skillField", "mt-2");
    newField.innerHTML = `
        <option value="Python">Python</option>
        <option value="JavaScript">JavaScript</option>
        <option value="SQL">SQL</option>
        <option value="HTML/CSS">HTML/CSS</option>
        <option value="Java">Java</option>
    `;
    document.getElementById("skillsContainer").appendChild(newField);
}

function generateResume() {
    document.getElementById("nameTemplate").textContent = document.getElementById("nameField").value;
    document.getElementById("contactTemplate").textContent = document.getElementById("contactField").value;
    document.getElementById("emailTemplate").textContent = document.getElementById("emailField").value;
    document.getElementById("linkedinTemplate").textContent = document.getElementById("linkedinField").value;
    document.getElementById("linkedinTemplate").href = document.getElementById("linkedinField").value;
    document.getElementById("githubTemplate").textContent = document.getElementById("githubField").value;
    document.getElementById("githubTemplate").href = document.getElementById("githubField").value;
    document.getElementById("addressTemplate").textContent = document.getElementById("addressField").value;
    document.getElementById("degreeTemplate").textContent = document.getElementById("degreeField").value;
    document.getElementById("majorTemplate").textContent = document.getElementById("majorField").value;
    document.getElementById("cgpaTemplate").textContent = document.getElementById("cgpaField").value;

    let aqFields = document.querySelectorAll(".aqField");
    let aqList = document.getElementById("aqTemplate");
    aqList.innerHTML = "";
    aqFields.forEach(field => {
        let li = document.createElement("li");
        li.textContent = field.value;
        aqList.appendChild(li);
    });

    let weFields = document.querySelectorAll(".weField");
    let weList = document.getElementById("weTemplate");
    weList.innerHTML = "";
    weFields.forEach(field => {
        let li = document.createElement("li");
        li.textContent = field.value;
        weList.appendChild(li);
    });

    let skillFields = document.querySelectorAll(".skillField");
    let skillsList = document.getElementById("skillsTemplate");
    skillsList.innerHTML = "";
    skillFields.forEach(field => {
        let li = document.createElement("li");
        li.textContent = field.value;
        skillsList.appendChild(li);
    });

    document.getElementById("resume-form").style.display = "none";
    document.getElementById("resume-template").style.display = "block";
}

function printResume() {
    window.print();
}
