// ACADEMIC PLANNER

function addTask() {
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

const task = input.value.trim();

if (task === "") {
alert("Please enter a task!");
return;
}

const li = document.createElement("li");

const taskText = document.createElement("span");
taskText.textContent = task;

// Complete button
const completeButton = document.createElement("button");
completeButton.textContent = "Complete";

completeButton.onclick = function() {
taskText.style.textDecoration = "line-through";
taskText.style.color = "green";
};

// Delete button
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete";

deleteButton.onclick = function() {
taskList.removeChild(li);
};

li.appendChild(taskText);
li.appendChild(completeButton);
li.appendChild(deleteButton);

taskList.appendChild(li);

input.value = "";
}

// CONTACT FORM

document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault();
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const message = document.getElementById("message").value.trim();
if (name === "" || email === "" || phone === "" || message === "") {
alert("Please fill in all fields!");
return;
}
if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
alert("Please enter a valid email address!");
return;
}
if (!/^\d+$/.test(phone)) {
alert("Phone number must contain digits only!");
return;
}

alert("Your message has been submitted successfully!");

this.reset();
});
