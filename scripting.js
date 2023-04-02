const apiKey = "b4cdfba7";

async function getMovieData(title) {
  const response = await fetch(`https://www.omdbapi.com/?t=${title}&apikey=${apiKey}`);
  const data = await response.json();
  return data;
}

function displayMovieData() {
  const title = document.getElementById("movieTitle").value;
  const movieInfo = document.getElementById("movieInfo");

  getMovieData(title)
    .then((movieData) => {
      if (movieData.Response === "False") {
        movieInfo.innerHTML = `<p>No movie found with the title ${title}</p>`;
        return;
      }

      const poster = movieData.Poster === "N/A" ? "" : `<img src="${movieData.Poster}" alt="${title} poster" />`;
      const imdbRating = movieData.imdbRating === "N/A" ? "Not rated" : movieData.imdbRating;

      movieInfo.innerHTML = `
        <h2>${movieData.Title} (${movieData.Year})</h2>
        ${poster}
        <p><strong>Director:</strong> ${movieData.Director}</p>
        <p><strong>Writer:</strong> ${movieData.Writer}</p>
        <p><strong>Actors:</strong> ${movieData.Actors}</p>
        <p><strong>Plot:</strong> ${movieData.Plot}</p>
        <p><strong>IMDb rating:</strong> ${imdbRating}</p>
      `;
    })
    .catch((error) => {
      console.error(error);
      movieInfo.innerHTML = "<p>An error occurred while retrieving movie data</p>";
    });
}
