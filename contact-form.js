const x = document.getElementById("contact-form");
const makeForm = document.createElement('form');
x.appendChild(makeForm);

const heading = document.createElement('h1');
heading.innerHTML = "Contact AdoptaDog";
makeForm.appendChild(heading);

const nameLabel = document.createElement('label');
nameLabel.innerHTML = "First Name: ";
makeForm.appendChild(nameLabel);

const inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'firstName');
makeForm.appendChild(inputName);
console.log(inputName);

const lastNameLabel = document.createElement('label');
lastNameLabel.innerHTML = "Last Name: ";
makeForm.appendChild(lastNameLabel);

const inputLastName = document.createElement('input');
inputLastName.setAttribute('type', 'text');
inputLastName.setAttribute('name', 'lastName');
makeForm.appendChild(inputLastName);

const emailLabel = document.createElement('label');
emailLabel.innerHTML = "Email: ";
makeForm.appendChild(emailLabel);

const inputEmail = document.createElement('input');
inputEmail.setAttribute('type', 'email');
inputEmail.setAttribute('name', 'email');
inputEmail.setAttribute("required", "");
inputEmail.required = true;
makeForm.appendChild(inputEmail);

const commentsLabel = document.createElement('label');
commentsLabel.innerHTML = "Comments: ";
makeForm.appendChild(commentsLabel);

const inputComments = document.createElement('textarea');
inputComments.setAttribute('name', 'comments');
makeForm.appendChild(inputComments);

const submitButton = document.createElement('input');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('name', 'submit');
submitButton.setAttribute('value', 'submit');
submitButton.setAttribute('id', 'submit-button');
makeForm.appendChild(submitButton);

document.getElementById('submit-button').addEventListener('click', function(e) {
  e.preventDefault();
  alert("Your message has been submitted");
  console.log(inputName.value);
  console.log(inputLastName.value);
  console.log(inputEmail.value);
  console.log(inputComments.value);
})
