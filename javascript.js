document.querySelector("#add").addEventListener("click", (event) => {
  event.preventDefault();

  document.getElementById("nameInput").style.visibility = "visible";

  document.getElementById("save").style.visibility = "visible";

  document.getElementById("add").style.visibility = "hidden";
});

let guestsArray = [];
let counter = 0;

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  document.getElementById("guest-h1").style.visibility = "visible";
  document.getElementById("guest-list").style.visibility = "visible";

  let newName = document.querySelector("input[name=inputName]").value;

  if (newName) {
    guestsArray.unshift(newName);
    counter++;
  } else {
      alert('You entered bad name');
  }

  ul = document.createElement("ul");

  document.getElementById("guest-list").appendChild(ul);

  guestsArray.forEach(function (guest) {
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML += guest;
  });

  guestsArray = [];

  if(counter > 11) {
    alert('This is the last one! You reached maximum number of guests (12)');
    document.getElementById("nameInput").style.visibility = "hidden";

  document.getElementById("save").style.visibility = "hidden";
  document.getElementById("stop-image").style.visibility = "visible";
}
});
