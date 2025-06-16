document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const modalVideo = document.getElementById("modalVideo");

  fetch("http://localhost:3000/projetos")
    .then(res => res.json())
    .then(data => {
      data.forEach(projeto => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.id = projeto.id;

        card.innerHTML = `
          <img src="${projeto.imagem}" alt="${projeto.titulo}">
          <div class="card-content">
            <h3 class="card-title">${projeto.titulo}</h3>
          </div>
        `;

        card.addEventListener("click", () => {
          console.log("ID clicado:", projeto.id);
          mostrarModal(projeto.id);
        });

        container.appendChild(card);
      });
    })
    .catch(err => console.error("Erro ao carregar projetos:", err));

  function mostrarModal(id) {
    fetch(`http://localhost:3000/projetos/${id}`)
      .then(res => res.json())
      .then(card => {
        // 👉 Usa embed do Streamable
        // Se o JSON for tipo "https://streamable.com/2aa66s", troca para embed
        let videoUrl = card.video;
        if (videoUrl.includes("streamable.com/") && !videoUrl.includes("/e/")) {
          const id = videoUrl.split("/").pop();
          videoUrl = `https://streamable.com/e/${id}`;
        }

        modalVideo.src = videoUrl;

        document.getElementById("modalTitulo").textContent = card.titulo;
        document.getElementById("modalDescricao").textContent = card.descricao;

        const ul = document.getElementById("modalDetalhes");
        ul.innerHTML = "";
        if (Array.isArray(card.detalhes)) {
          card.detalhes.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            ul.appendChild(li);
          });
        }

        document.getElementById("modalData").textContent = card.data || "";

        if (card.links) {
          document.getElementById("btnProjeto").onclick = () => window.open(card.links.projeto, "_blank");
          document.getElementById("btnRepositorio").onclick = () => window.open(card.links.repositorio, "_blank");
          document.getElementById("btnLinkedin").onclick = () => window.open(card.links.linkedin, "_blank");
        }

        modal.classList.remove("hidden");
      })
      .catch(err => {
        console.error("Erro ao carregar dados:", err);
        alert("Erro ao carregar o projeto.");
      });
  }

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalVideo.src = ""; // Limpa iframe pra parar o vídeo
  });
});





const section = document.querySelector('.projects-section');
  let isVisible = false;

  function handleScrollAnimation() {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const screenHeight = window.innerHeight;

    const isInView = sectionTop < screenHeight && sectionBottom > 100;

    if (isInView && !isVisible) {
      // Entrando na tela
      section.classList.remove('animate-out');
      section.classList.add('animate-in');
      isVisible = true;
    } else if (!isInView && isVisible) {
      // Saindo da tela
      section.classList.remove('animate-in');
      section.classList.add('animate-out');
      isVisible = false;
    }
  }
  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('load', handleScrollAnimation);





