function setup() {
  const allEpisodes = getAllEpisodes();
  renderEpisodes(allEpisodes);
}

<<<<<<< HEAD
function renderEpisodes(episodeList) {
  const episodesContainer = document.getElementById("root");
  episodesContainer.classList.add("grid-container");

  episodeList.forEach(episode => {
    const episodeDiv = document.createElement("div");
    episodeDiv.classList.add("episode-box");

    const episodeCode = formatEpisodeCode(episode.season, episode.number);

    episodeDiv.innerHTML = `
      <h2 class="episode-name">${episode.name} (${episodeCode})</h2>
      <p>Season ${episode.season}, Episode ${episode.number}</p>
      <img class="episode-image" src="${episode.image.medium}" alt="${episode.name}" />
      <p class="episode-summary">${episode.summary}</p>
      <p>Source: <a class="episode-link" href="${episode.url}" target="_blank">TVMaze.com</a></p>
    `;

    episodesContainer.appendChild(episodeDiv);
  });

  episodesContainer.insertAdjacentHTML(
    "beforebegin",
    `<p>Got ${episodeList.length} episode(s)</p>`
  );
}

function formatEpisodeCode(season, number) {
  return `S${season.toString().padStart(2, "0")}E${number
    .toString()
    .padStart(2, "0")}`;
=======
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");

  // Loop through each episode
  episodeList.forEach(episode => {
    // Create HTML elements for episode details
    const episodeDiv = document.createElement("div");
    const episodeCode = `S${episode.season.toString().padStart(2, '0')}E${episode.number.toString().padStart(2, '0')}`;
    episodeDiv.innerHTML = `
      <h2>${episode.name} (${episodeCode})</h2>
      <p>Season ${episode.season}, Episode ${episode.number}</p>
      <img src="${episode.image.medium}" alt="${episode.name}" />
      <p>${episode.summary}</p>
      <p>Source: <a href="${episode.url}"target="_blank">TVMaze.com</a></p>
`;
    rootElem.appendChild(episodeDiv);
  });

  // Display total number of episodes
  rootElem.insertAdjacentHTML("beforebegin", `<p>Got ${episodeList.length} episode(s)</p>`);
>>>>>>> 35db82b457693f62b02a84c994bbd6a734c6d55c
}

window.onload = setup;