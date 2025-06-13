document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");

  fetch("http://localhost:3000/projetos") // ou a rota correta do seu JSON Server
    .then(res => res.json())
    .then(data => {
      data.forEach(projeto => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
        <img src="${projeto.imagem}" alt="${projeto.titulo}">
        <div class="card-content">
            <h3 class="card-title">${projeto.titulo}</h3>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => console.error("Erro ao carregar projetos:", err));
});
