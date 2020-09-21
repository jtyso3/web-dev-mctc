// Jacob Tyson
// This program will allow you to add and del students to a list.




let counter = document.querySelector('#student-count'); //  creates counter.
let liCount = 0;
counter.innerHTML = `${liCount}`; // adds counter to page starts at 0

let name = document.querySelector('#student-name');
let id = document.querySelector('#student-id');
let gpa = document.querySelector('#student-gpa');

let addStudentButton = document.querySelector('#add-student')

// This button will add student name to list w validation using addStudent()
addStudentButton.addEventListener('click', ()=>{
  addStudent();
})

let delStudentButton = document.querySelector('#remove-selected-students');

// this deletes selected students using delStudent()
delStudentButton.addEventListener('click', ()=>{
  delStudent();
})


function delStudent (){
  let selectStudent = document.querySelectorAll('.selected');
	selectStudent.forEach( function(element) {  // loops through each li element w selected class and removes them from li
  	element.remove()
  })
  liNum = document.querySelectorAll('li'); // updates li counter
  liCount = liNum.length;
  counter.innerHTML = `${liCount}`; // prints length li to web page
}


function addStudent (){
  if (name.value.length == 0) {  // name vaildaton.. needs updating to exlude only whitespace as acceptable input
    alert('ERROR: Please provide your name.');
  }
  else if (id.value.length == 0){ // id validation.. needs updating to exlude only whitespace as acceptable input
    alert('ERROR: Please provide your student ID');
  }
  else if (gpa.value.length == 0){ // gpa validation
    alert('ERROR: Please provide your GPA');
  }
  else if(gpa.value > 4 || gpa.value < 0){ // gpa validation
    alert('ERROR: Please provide a valid GPA');
  }
  else{
    // add user input into list
  let list = document.querySelector('#student-list');

  let nameValue = name.value; // gets the value of name input
  let idValue = id.value; // gets the value of id input
  let gpaValue = gpa.value; // gets the value of gpa input

  let newStudent = document.createElement('li'); // creates li element
  newStudent.innerHTML = `<b>Name:</b> ${nameValue}, <b>ID:</b> ${idValue}, <b>GPA:</b> ${gpaValue}` //add values of user input to li element
  newStudent.setAttribute('class','student'); // sets class attribute to student
  list.appendChild(newStudent); // adds li element to ul parent element

  newStudent.addEventListener('click', ()=>{ // adds toggle functionality add class select to li element
    newStudent.classList.toggle('selected')

  })

  liNum = document.querySelectorAll('li'); // student list counter
  liCount = liNum.length;
  counter.innerHTML = `${liCount}`; // add count to web page.
  }
}
