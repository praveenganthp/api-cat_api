// script.js
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body; // Get the body element

  // Create title
  const catHead = document.createElement("h1");
  catHead.textContent = "The Cats";
  catHead.style.textAlign='center'
  body.appendChild(catHead);

  // Create container
  const catContainer = document.createElement("div");
  catContainer.classList.add("container");
  body.appendChild(catContainer);

  const apiKey =
    "live_s5m9WRHs81SPa8ncMe5micGTPVILWNLe55zlhpjH0ZPK2a6HEABSr1MIGLGtj8ql";
  const apiUrl =
    "https://api.thecatapi.com/v1/images/search?limit=10&api_key=" + apiKey;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayCats(data);
      console.log(data);
    })
    .catch((error) => console.log("Error: ", error));

  function displayCats(cats) {
    catContainer.innerHTML = ""; // Clear previous content

    cats.forEach((cat, index) => {
      const catCard = document.createElement("div");
      catCard.classList.add("cat-card");

      catCard.innerHTML = `
                <img src="${cat.url}" alt="Cat Image">
                <p>Breed: ${
                  cat.breeds && cat.breeds.length > 0
                    ? cat.breeds[0].name
                    : "Not available"
                }</p>
            `;

      catContainer.appendChild(catCard);

      // Add line break after every 3 cat cards (assuming you want them in rows)
      if ((index + 1) % 3 === 0) {
        catContainer.appendChild(document.createElement("br"));
      }
    });
  }
});
