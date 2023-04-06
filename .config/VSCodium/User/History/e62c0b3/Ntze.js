let records = [];
let imgList = [];
let updated = false;

const form = document.querySelector('.create-employee');
const showForm = document.getElementById('employee-create-form');
const showTable = document.getElementById('employee-show-table');

// user defined function to get value
function getValueByID(id) {
    return document.getElementById(id).value;
}

function uploadFile(){
    let img=document.getElementById('inputPhoto');
    var files = !!img.files ? img.files : [];
    var reader = new FileReader();
    reader.readAsDataURL(files[0]) 
    reader.onloadend = function (event) {
        var dataUri = event.target.result;
        let imgVal = {
            image: dataUri
        }
        imgList.push(imgVal);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let genderValue = '';
    if (validateForm()) {
        createForm();
        clearForm();
        showForm.style.display = 'none';
        showTable.style.display = 'block';
    }
})


function clearForm() {
    this.inputName.value = '';
    this.inputAddress.value = '';
    this.inputEmail.value = '';
    this.inputPhone.value = '';
    inputPost.options[inputPost.selectedIndex].text = '';
    imgList = '';
    this.inputDOB.value = '';
    genderValue = '';

}

// Form Create Function
function createForm() {
        updated = false;
        const startingSalary = 20000;
        const salaryIncrease = 0.1;
        const currentDate = new Date();
        const record = {
            id: new Date().getTime(),
            name: this.inputName.value,
            address: this.inputAddress.value,
            email: this.inputEmail.value,
            phone: this.inputPhone.value,
            regDate: new Date().toLocaleString().split(',')[0],
            gender: genderValue,
            post: inputPost.options[inputPost.selectedIndex].text,
            dob: this.inputDOB.value,
            photo: imgList,
            salary: function() {
                const diffInMonths = (currentDate.getFullYear - new Date(this.regDate)) * 12 + currentDate.getMonth() - new Date(this.regDate).getMonth();
                const numIncreases =  Math.floor((diffInMonths - 0)/3);
                const finalSalary = startingSalary * Math.pow(1+salaryIncrease, numIncreases);
                return finalSalary;
            }
        }

        records.push(record);
        let updateRecords = JSON.parse(localStorage.getItem('records'));
        newUpdatedRecords = updateRecords.concat(records);
        localStorage.setItem("records", JSON.stringify(newUpdatedRecords));
        // addToTable(record);
        if (!updated){
            let updaterecords = JSON.parse(localStorage.getItem('records'));
            updateTable(updaterecords);
            updated = true;
        }
}


function updateTable(records) {
    records.forEach((record) => {
        const tableRow = document.createElement('tr');
        tableRow.setAttribute('id', record.id);
        const tableRowMarkup = `
            <td onclick="empDetail(${record.id})">${record.name}</td>
            <td onclick="empDetail(${record.id})">${record.address}</td>
            <td onclick="empDetail(${record.id})">${record.phone}</td>
            <td onclick="empDetail(${record.id})">${record.email}</td>
            <td>
                <button id="btnDelete" class="btn btn-danger" onclick="deleteRecord(${record.id})">Delete</button>
            </td>
        `;
        tableRow.innerHTML = tableRowMarkup;
        document.getElementById('tblEmployeeBody').appendChild(tableRow);
    })
}

function empDetail(id) {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let infoSec = document.querySelector('.info-sec');
    let photoSec = document.querySelector('.photo-sec');
    let currentDate = new Date().toISOString().split('T')[0];
    let updatedrecords = JSON.parse(localStorage.getItem('records'));
    let detail = updatedrecords.filter(record => record.id == id);
    console.log(detail);

}

// Table Show Function
// function addToTable(record) {
//     const tableRow = document.createElement('tr');
//     tableRow.setAttribute('id', record.id);
//     const tableRowMarkup = `
//         <td>${record.name}</td>
//         <td>${record.address}</td>
//         <td>${record.phone}</td>
//         <td>${record.email}</td>
//         <td>
//             <button id="btnDelete" class="btn btn-danger" onclick="deleteRecord(${record.id})">Delete</button>
//         </td>
//     `;
//     tableRow.innerHTML = tableRowMarkup;
//     document.getElementById('tblEmployeeBody').appendChild(tableRow);
// }

function deleteRecord(id) {
    const tableRow = document.getElementById(id);
    console.log(tableRow);
    let unRemovedrRecord = records.filter(record => {record.id !== id});
    localStorage.setItem('records', JSON.stringify(unRemovedrRecord));
    tableRow.remove();
}

function viewRecord(id){
    const tableRow = document.getElementById(id);
}

// Form Validation Function
function validateForm(){

    // Gender Validation
    let maleRadio = document.getElementById('maleRadio');
    let femaleRadio = document.getElementById('femaleRadio');
    if(maleRadio.checked==true) {
        genderValue = maleRadio.value;
        }
    else if(femaleRadio.checked==true) {
        genderValue = femaleRadio.value;
    }
    else {
        returnVal = false;
    }
    var returnVal = true;
    let inputPost = getValueByID('inputPost');
    
    // Position Validation
    if (inputPost === "Choose...") {
        returnVal = false;
    }
    let inputElements = form.getElementsByTagName('input');
    const namePattern = /^[a-zA-Z`-]+(\s[a-zA-Z`-]+)*$/;
    const addressPattern = /^[a-zA-Z0-9\s\-\.\,\#]+$/;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    const phonePattern = /^(\+977\s)?9\d{9}$/;


    //  Other Field validation
    Array.from(inputElements).forEach(input => {
        let inputValue = input.value.trim();
        let inputName = input.name;
        let inputType = input.type;
        if(inputName == 'fullName' && inputValue == '') {
            document.querySelector('.fullname').innerHTML = 'Please enter your name.';
            document.getElementById('inputName').classList.add('error-input');
        }
        else if (inputType == "text" && inputName == "fullName"){
            if (!namePattern.test(inputValue)) {
            document.querySelector('.fullname').innerHTML = 'Please enter your name.';
            document.getElementById('inputName').classList.add('error-input');
            returnVal = false;
            }
        }
        if(inputName == 'address' && inputValue == '') {
            document.querySelector('.address').innerHTML ='Please enter your address.';
            document.getElementById('inputAddress').classList.add('error-input');
            
        }
        else if (inputType == "text" && inputName == "address") {
            if (!addressPattern.test(inputValue)) {
                document.querySelector('.emailaddress').innerHTML ='Please enter valid email address.';
                document.getElementById('inputEmail').classList.add('error-input');
                returnVal = false;
            }
        }
        if(inputName == 'email' && inputValue == '') {
            document.querySelector('.emailaddress').innerHTML ='Please enter your email address.';
            document.getElementById('inputEmail').classList.add('error-input');
            
        }
        else if (inputType == "text" && inputName == "email") {
            if (!emailPattern.test(inputValue)) {
                document.querySelector('.emailaddress').innerHTML ='Please enter valid email address.';
                document.getElementById('inputEmail').classList.add('error-input');
                returnVal = false;
            }
        }
        if(inputName == 'phoneNumber' && inputValue == '') {
            document.querySelector('.phonenumber').innerHTML ='Please enter your phone number.';
            document.getElementById('inputPhone').classList.add('error-input');
        }    
        else if (inputType == "text" && inputName == "phoneNumber") {
            if (!phonePattern.test(inputValue)) {
                document.querySelector('.phonenumber').innerHTML ='Please enter valid phone number.';
                document.getElementById('inputPhone').classList.add('error-input');
                returnVal = false;
            }
        }
        if(inputName == 'dob' && inputValue == '') {
            document.querySelector('.dateofbirth').innerHTML ='Please enter your date of birth.';
            document.getElementById('inputDOB').classList.add('error-input');
        }    
        else if (inputType == "date" && inputName == "dob") {
            let dobDate = new Date(inputValue);
            let currentDate = new Date();

            if (isNaN(dobDate.getTime())) {
                document.querySelector('.dateofbirth').innerHTML ='Please enter valid date of birth.';
                document.getElementById('inputDOB').classList.add('error-input');
                returnVal = false;
            }
            else if (dobDate.getTime() > currentDate.getTime()){
                document.querySelector('.dateofbirth').innerHTML ='Please enter valid date of birth.';
                document.getElementById('inputDOB').classList.add('error-input');
                returnVal = false;
            }
        }
    });
    return returnVal;
}

const createBtn = document.getElementById('btnCreate');
createBtn.addEventListener('click', () => {
    showTable.style.display = 'none';
    showForm.style.display = 'block';
})

const listBtn = document.querySelector('.btnList');
listBtn.addEventListener('click', () => {
    if (!updated){
        let updaterecords = JSON.parse(localStorage.getItem('records'));
        updateTable(updaterecords);
        updated = true;
    }
    showTable.style.display = 'block';
    showForm.style.display = 'none';
})