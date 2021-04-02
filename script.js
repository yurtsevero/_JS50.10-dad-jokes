"use strict";
const joke = document.getElementById("joke");
const btnJGeneretor = document.getElementById("btnJGenerator");

generateJoke();

async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  // const jokeObj = fetch("https://icanhazdadjoke.com", config)
  //   .then((response) => response.json())
  //   .then((data) => {
  //     joke.innerText = data.joke;
  //   });

  const response = await fetch("https://icanhazdadjoke.com", config);
  const data = await response.json();
  joke.innerText = data.joke;
}

btnJGeneretor.addEventListener("click", generateJoke);
