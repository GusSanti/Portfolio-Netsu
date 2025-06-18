document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("cards-container");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const modalVideo = document.getElementById("modalVideo");

  const projetos = [
  {
    id: 1,
    titulo: "Roblox Game",
    imagem: "https://i.pinimg.com/originals/37/07/a7/3707a7cd7d384511c213b2a12dc3f0a7.jpg",
    video: "https://streamable.com/2aa66s",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    links: {
      codigo: "https://pastebin.com/VE0dxvw7",
      repositorio: "https://github.com/exemplo",
      linkedin: "https://linkedin.com/in/exemplo"
    }
  },
  {
    id: 2,
    titulo: "Roblox Game ",
    imagem: "https://i.pinimg.com/originals/37/07/a7/3707a7cd7d384511c213b2a12dc3f0a7.jpg",
    video: "https://streamable.com/2aa66s",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    links: {
      codigo: "https://pastebin.com/VE0dxvw7",
      repositorio: "https://github.com/exemplo",
      linkedin: "https://linkedin.com/in/exemplo"
    }
  },
  {
    id: 3,
    titulo: "Roblox Game ",
    imagem: "https://i.pinimg.com/originals/37/07/a7/3707a7cd7d384511c213b2a12dc3f0a7.jpg",
    video: "https://streamable.com/2aa66s",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    links: {
      codigo: "https://pastebin.com/VE0dxvw7",
      repositorio: "https://github.com/exemplo",
      linkedin: "https://linkedin.com/in/exemplo"
    }
  },
  {
    id: 4,
    titulo: "Roblox Game ",
    imagem: "https://i.pinimg.com/originals/37/07/a7/3707a7cd7d384511c213b2a12dc3f0a7.jpg",
    video: "https://streamable.com/2aa66s",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    links: {
      codigo: "https://pastebin.com/VE0dxvw7",
      repositorio: "https://github.com/exemplo",
      linkedin: "https://linkedin.com/in/exemplo"
    }
  },
  {
    id: 5,
    titulo: "Roblox Game ",
    imagem: "https://i.pinimg.com/originals/37/07/a7/3707a7cd7d384511c213b2a12dc3f0a7.jpg",
    video: "https://streamable.com/2aa66s",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    links: {
      codigo: "https://pastebin.com/VE0dxvw7",
      repositorio: "https://github.com/exemplo",
      linkedin: "https://linkedin.com/in/exemplo"
    }
  },
  {
    id: 6,
    titulo: "Roblox Game ",
    imagem: "https://i.pinimg.com/originals/37/07/a7/3707a7cd7d384511c213b2a12dc3f0a7.jpg",
    video: "https://streamable.com/2aa66s",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    links: {
      codigo: "https://pastebin.com/VE0dxvw7",
      repositorio: "https://github.com/exemplo",
      linkedin: "https://linkedin.com/in/exemplo"
    }
  },
  {
    id: 7,
    titulo: "Roblox Game ",
    imagem: "https://i.pinimg.com/originals/37/07/a7/3707a7cd7d384511c213b2a12dc3f0a7.jpg",
    video: "https://streamable.com/2aa66s",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    links: {
      codigo: "https://pastebin.com/VE0dxvw7",
      repositorio: "https://github.com/exemplo",
      linkedin: "https://linkedin.com/in/exemplo"
    }
  },
  {
    id: 8,
    titulo: "Roblox Game ",
    imagem: "https://i.pinimg.com/originals/37/07/a7/3707a7cd7d384511c213b2a12dc3f0a7.jpg",
    video: "https://streamable.com/2aa66s",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    links: {
      codigo: "https://pastebin.com/VE0dxvw7",
      repositorio: "https://github.com/exemplo",
      linkedin: "https://linkedin.com/in/exemplo"
    }
  },
  {
    id: 9,
    titulo: "Roblox Game ",
    imagem: "https://i.pinimg.com/originals/37/07/a7/3707a7cd7d384511c213b2a12dc3f0a7.jpg",
    video: "https://streamable.com/2aa66s",
    descricao: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
    links: {
      codigo: "https://pastebin.com/VE0dxvw7",
      repositorio: "https://github.com/exemplo",
      linkedin: "https://linkedin.com/in/exemplo"
    }
  }
];
  // 🔄 Gera os cards
  projetos.forEach(projeto => {
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
      mostrarModal(projeto.id);
    });

    container.appendChild(card);
  });

  // 🔎 Exibe o modal com base no ID
  function mostrarModal(id) {
    const card = projetos.find(p => p.id === id);
    if (!card) return;

    let videoUrl = card.video;
    if (videoUrl.includes("streamable.com/") && !videoUrl.includes("/e/")) {
      const vid = videoUrl.split("/").pop();
      videoUrl = `https://streamable.com/e/${vid}`;
    }

    modalVideo.src = videoUrl;
    document.getElementById("modalTitulo").textContent = card.titulo;
    document.getElementById("modalDescricao").textContent = card.descricao;

    if (card.links) {
      document.getElementById("btnCodigo").onclick = () => window.open(card.links.codigo, "_blank");
      document.getElementById("btnRepositorio").onclick = () => window.open(card.links.repositorio, "_blank");
      document.getElementById("btnLinkedin").onclick = () => window.open(card.links.linkedin, "_blank");
    }

    modal.classList.remove("hidden");
  }

  closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modalVideo.src = "";
  });
});




//CARDS SAINDO E ENTRANDO

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





