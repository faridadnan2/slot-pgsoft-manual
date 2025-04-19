
document.addEventListener("DOMContentLoaded", () => {
  const gameList = document.getElementById("game-list");

  fetch("https://your-api-url.com/games")
    .then((response) => response.json())
    .then((games) => {
      games.forEach((game) => {
        const div = document.createElement("div");
        div.className = "game-card";
        div.innerHTML = `
          <img src="${game.image_url}" alt="${game.name}" />
          <h3>${game.name}</h3>
          <a href="${game.launch_url}" target="_blank" class="btn">Mainkan</a>
        `;
        gameList.appendChild(div);
      });
    })
    .catch((err) => {
      gameList.innerHTML = "<p>Gagal memuat game.</p>";
    });
});
