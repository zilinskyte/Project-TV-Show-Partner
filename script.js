// You can edit ALL of the code here
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.classList.add("grid-container"); // Apply grid layout

  // Loop through each episode
  episodeList.forEach(episode => {
    // Create HTML elements for episode details
    const episodeDiv = document.createElement("div");
    episodeDiv.classList.add("episode-box");

    const episodeCode = `S${episode.season.toString().padStart(2, '0')}E${episode.number.toString().padStart(2, '0')}`;

    episodeDiv.innerHTML = `
      <h2 class="episode-name">${episode.name} (${episodeCode})</h2>
      <p>Season ${episode.season}, Episode ${episode.number}</p>
      <img class="episode-image" src="${episode.image.medium}" alt="${episode.name}" />
      <p class="episode-summary">${episode.summary}</p>
      <p>Source: <a class="episode-link" href="${episode.url}" target="_blank">TVMaze.com</a></p>
    `;

    rootElem.appendChild(episodeDiv);
  });

  // Display total number of episodes
  rootElem.insertAdjacentHTML("beforebegin", `<p>Got ${episodeList.length} episode(s)</p>`);
}

window.onload = setup;
