let name = "Nugget";
console.log("Hello, " + name);

function say_hello() {
  console.log("Hello, " + name);
}
say_hello("World");

function increment() {
  score_element = document.getElementById("score");
  score_element.innerHTML = parseInt(score_element.innerHTML) + 1;
}
