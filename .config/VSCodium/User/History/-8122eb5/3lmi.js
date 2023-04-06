const form = document.getElementById("addForm");
const contactlist = document.getElementById("tblBodyContact");
function getValue(valId){
  return document.getElementById(valId).value;
}

let contacts = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nameValue = getValue('txtName');
    const addressValue = getValue('txtAddress');
    const emailValue = getValue('txtEmail')
    const mobileValue = getValue('txtMobile');
    const phoneValue = getValue('txtPhone');
    const contact  = {
        id: new Date().getTime(),
        name: nameValue,
        address: addressValue,
        email: emailValue,
        mobile: mobileValue,
        phone: phoneValue
    }
    contacts.push(contact);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    createContact(contact);
    
})

function clearForm() {
  document.getElementById('txtName').value = '';
  document.getElementById('txtAddress').value = '';
  document.getElementById('txtEmail').value = '';
  document.getElementById('txtMobile').value = '';
  document.getElementById('txtPhone').value = '';
}


function createContact(contact) {
    const tableRow = document.createElement("tr");
    tableRow.setAttribute("id", contact.id)
    const tableRowMarkup = `
        <td>${contact.name}</td>
        <td>${contact.address}</td>
        <td>${contact.email}</td>
        <td>${contact.mobile}</td>
        <td>${contact.phone}</td>
        <td>
            <button id="btnEdit" onclick="createEditForm(${contact.id})">Edit</button>
            <button id="btnDelete" onclick="removeContact(${contact.id})">Delete</button>
        </td>
    `
    tableRow.innerHTML = tableRowMarkup;
    document.getElementById('tblBodyContact').appendChild(tableRow);
    clearForm();

}


function removeContact(contactID) {
    const tableRow = document.getElementById(contactID);
    console.log(tableRow);
    let unRemovedContact = contacts.filter(contact => {contact.id !== contactID});
    localStorage.setItem('contacts', JSON.stringify(unRemovedContact));
    tableRow.remove();
}

function createEditForm(contactID) {
  const form = document.createElement("form");
  const contact = contacts.find((contact) => {return (contact.id == contactID)})
  form.innerHTML = `
    <input type="text" id="editName" value="${contact.name}">
    <input type="text" id="editAddress" value="${contact.address}">
    <input type="text" id="editEmail" value="${contact.email}">
    <input type="text" id="editMobile" value="${contact.mobile}">
    <input type="text" id="editPhone" value="${contact.phone}">
    <button type="submit" id="btnUpdate" onclick="updateContact(${contact.id})">Update</button>
  `;
  document.getElementById('editFormContainer').appendChild(form);
}

function updateContact(id) {
  const tableRow = document.getElementById(id);
  const name = document.getElementById("editName").value;
  const address = document.getElementById("editAddress").value;
  const email = document.getElementById("editEmail").value;
  const mobile = document.getElementById("editMobile").value;
  const phone = document.getElementById("editPhone").value;
  const updatedContact = { id, name, address, email, mobile, phone };
  localStorage.setItem('tasks', JSON.stringify(updatedContact));
  const tableRowMarkup = `
    <td>${name}</td>
    <td>${address}</td>
    <td>${email}</td>
    <td>${mobile}</td>
    <td>${phone}</td>
    <td>
        <button id="btnEdit" value="${id}">Edit</button>
        <button id="btnDelete" onclick="removeContact(${id})">Delete</button>
    </td>
  `;
  tableRow.innerHTML = tableRowMarkup;
}


const button = document.querySelector