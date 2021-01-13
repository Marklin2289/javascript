const task3Element = document.getElementById("task-3");

function greeting() {
  alert("welcome to the page!");
}

function greet(userName) {
  //   let name;
  alert("welcome to the page " + userName);
}

function combine(str1, str2, str3) {
  const combinedText = str1 + " " + str2 + " " + str3;
  return combinedText;
}
// greeting();

greet("Mark");
task3Element.addEventListener("click", greeting);
const combinedString = combine("hi", "there", "!");
alert(combinedString);
