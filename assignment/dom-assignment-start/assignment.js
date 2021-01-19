// getElementById
const task1El1 = document.getElementById("task-1");
// querySelector('li') to find the first element from the result
const task1El2 = document.querySelector("#task-1");

task1El1.style.color = "white";
task1El2.style.backgroundColor = "black";

// =================================================================//
const title1 = document.querySelector("title");
// title1.textContent = "Assignment Solved";

// const docHead = document.head;
const docTitle2 = document.head.querySelector("title");
docTitle2.textContent = "Assignment - Solved!";

// =================================================================//
// const h1 = document.getElementsByTagName("h1");
// h1[0].textContent = "Assignment - Solved";

const h1 = document.querySelector("h1");
h1.textContent = "Assignment - Solved";
