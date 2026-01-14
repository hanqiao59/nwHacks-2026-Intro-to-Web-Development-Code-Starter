let userName = "Nugget";
console.log("Hello, " + userName);

function say_hello(userName) {
  console.log("Hello, " + userName);
}
say_hello("World");

function increment() {
  score_element = document.getElementById("score");
  score_element.innerHTML = parseInt(score_element.innerHTML) + 1;
}
