function loadJoke() {
    const jsonJoke = document.getElementById("jsonJoke");
    const joke = document.getElementById("joke");

    const jokeValue = JSON.parse(jsonJoke.textContent).value;
    joke.textContent  = jokeValue ? jokeValue : "";
}