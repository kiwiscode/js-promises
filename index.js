function fetchJokes() {
  return fetch("https://official-joke-api.appspot.com/random_joke")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
}

async function displayJokes() {
  try {
    const jokeContainer = document.getElementById("joke-container");

    const jokes = await fetchJokes();
    const jokeHTML = `<p>${jokes.setup}</p><p>${jokes.punchline}</p>`;

    jokeContainer.innerHTML = jokeHTML;
  } catch (error) {
    console.log("Error:", error);
  }
}

displayJokes();
