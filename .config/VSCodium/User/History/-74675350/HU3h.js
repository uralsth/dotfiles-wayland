
// function uploadFile(){
//     let imgList = [];
//     var files = !!
// }


// $("#uploadingImage").on("change", function () {
//   var files = !!this.files ? this.files : [];
//   var reader = new FileReader(); // instance of the FileReader
//   reader.readAsDataURL(files[0]); // read the local file
//   let uri = '';
//   reader.onloadend = function (event) { // set image data as background of div 
//     uri = event.target.result;
//     // console.log(dataUri);
//   }
//   console.log(uri)
// });

// createForm.addEventListener('change', handleEventListner(function urlGetter(uri){console.log(uri)}))
// function handleEventListner(callback){
//     let img = document.getElementById('uploadingImage');
//     var files = !!this.files? this.files: [];
//     var reader = new FileReader();
//     reader.readAsDataURL(files[0]);
//     reader.onloadend = function(event) {
//         dataUri = event.target.result;
//         callback(JSON.parse(dataUri));
//     }
// }






function getValeByID(id) {
    return document.getElementById(id).value;
}



const createForm = document.querySelector('.create-employee');
let records = [];

let imgList = [];
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



createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let genderValue = '';
    let isValidated = validateForm();
    if(isValidated) {
        console.log(isValidated);
        createForm.submit();
        const record = {
            id: self.crypto.randomUUID(),
            name: this.inputName.value,
            address: this.inputAddress.value,
            email: this.inputEmail.value,
            phone: this.inputPhone.value,
            regDate: new Date().toISOString().split('T')[0],
            gender: genderValue,
            post: inputPost.options[inputPost.selectedIndex].text,
            dob: this.inputDOB.value,
            photo: imgList
            // photo: 
        }

    console.log(record);
    records.push(record);
    console.log(record);
    }
})


function validateForm() {
    let maleRadio = document.getElementById('maleRadio');
    let femaleRadio = document.getElementById('femaleRadio');
    let otherRadio = document.getElementById('othersRadio');
    let inputPost = document.getElementById('inputPost');
    if(maleRadio.checked==true) {
        genderValue = maleRadio.value;
        }
    else if(femaleRadio.checked==true) {
        genderValue = femaleRadio.value;
    }
    else if(otherRadio.checked==true) {
        genderValue = otherRadio.value;
    }
    else {
        alert("not a valid input");
        return false;
    }

    let inputElements = createForm.getElementsByTagName('input');
    const namePattern = /^[a-zA-Z`-]+(\s[a-zA-Z`-]+)*$/;
    const addressPattern = /^[a-zA-Z0-9\s\-\.\,\#]+$/;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    const phonePattern = /^9\d{8}$/;

    Array.from(inputElements).forEach(input => {
        let inputValue = input.value.trim();
        let inputName = input.name;
        let inputType = input.type;

        if (inputType == "text" && inputName == "fullName"){
            if (!namePattern.test(inputValue)) {
                alert("Not a valid value");
                return false;
            }
        }
        else if (inputType == "text" && inputName == "address") {
            if (!addressPattern.test(inputValue)) {
                alert("Not a valid value");
                return false;
            }
        }
        else if (inputType == "text" && inputName == "email") {
            if (!emailPattern.test(inputValue)) {
                alert("Not a valid value");
                return false;
            }
        }
        else if (inputType == "text" && inputName == "phoneNumber") {
            if (!phonePattern.test(inputValue)) {
                alert("Not a valid value");
                return false;
            }
        }
        else if (inputType == "date" && inputName == "dob") {
            let dobDate = new Date(inputValue);
            let currentDate = new Date();

            if (isNaN(dobDate.getTime())) {
                alert("Please enter your date of birth");
                return false;
            }
            else if (dobDate.getTime() > currentDate.getTime()){
                alert("Please enter a date of birth that is less than the current date.");
                return false;
            }
        }
    });

    if (inputPost == "Choose...") {
        alert("Please select a position.");
        return false;
    }
    return true
    
}