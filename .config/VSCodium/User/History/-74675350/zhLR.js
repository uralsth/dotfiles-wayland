
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
    let maleRadio = document.getElementById('maleRadio');
    let femaleRadio = document.getElementById('femaleRadio');
    let otherRadio = document.getElementById('othersRadio');
    let inputPost = document.getElementById('inputPost');
    let genderValue = '';
    if(maleRadio.checked==true) {
        genderValue = maleRadio.value;
        }
    else if(femaleRadio.checked==true) {
        genderValue = femaleRadio.value;
    }
    else if(otherRadio.checked==true) {
        genderValue = otherRadio.value;
    }

    var


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

    records.push(record);
})

createForm.addEventListener("submit", () => {
    let maleRadio = document.getElementById('maleRadio');
    let femaleRadio = document.getElementById('femaleRadio');
    let otherRadio = document.getElementById('othersRadio');
    let inputPost = document.getElementById('inputPost');

    let nameField = getValeByID('inputName');
    const namePattern = /^[a-zA-Z`-]+(\s[a-zA-Z`-]+)*$/;
    let address = getValeByID('inputAddress');
    const addressPattern = /^[a-zA-Z0-9\s\-\.\,\#]+$/
    let email = getValeByID('inputEmail');
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    let phone = getValeByID('inputPhone');
    const phonePattern = /^9\d{8}$/;
    let dob = getValeByID('inputDOB');

    
})

