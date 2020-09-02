const student = [
    {
        name : "Nitya",
        RegNo : 123456,
        courses : ["Maths","Science","History"]
    },
    {
        name : "Sonal",
        RegNo : 123459,
        courses : ["Maths","Science","History"]
    },
    {
        name : "Nisha",
        RegNo : 123479,
        courses : ["Maths","Science","History"]
    }
]

const studentsDiv = document.getElementById('details');

for(var i=0; i<student.length; i++){ 
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card','mt-3');
    const nameElem = document.createElement('h4');
    const regNo = document.createElement('h4');
    nameElem.innerText = student[i].name;
    regNo.innerText = student[i].RegNo;

    mainDiv.appendChild(nameElem);
    mainDiv.appendChild(regNo);
    studentsDiv.appendChild(mainDiv);

    const course = student[i].courses;
    const ulElem = document.createElement ('ul');
    for(var j=0; j<course.length; j++){
        const liElem = document.createElement('li');
        liElem.innerText = course[j];
        ulElem.appendChild(liElem);
    }
    mainDiv.appendChild(ulElem);
}