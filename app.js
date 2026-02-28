// =============================
// 1) CATÁLOGO DE RECEITAS (JSON + DOM)
// =============================

// Vetor JSON (como pede a prática)
const receitas = [
  {
    titulo: "Macarrão ao Alho e Óleo",
    imagem:
      "https://images.unsplash.com/photo-1528750997573-59b89d56f4f7?auto=format&fit=crop&w=900&q=80",
    preparo:
      "Cozinhe o macarrão. Doure alho no azeite, misture com o macarrão, finalize com sal, pimenta e cheiro-verde.",
    ingredientes: ["Macarrão", "Alho", "Azeite", "Sal", "Pimenta", "Cheiro-verde"],
  },
  {
    titulo: "Salada Colorida",
    imagem:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    preparo:
      "Pique os ingredientes, misture tudo e tempere com azeite, limão e sal. Sirva gelado.",
    ingredientes: ["Alface", "Tomate", "Cenoura", "Milho", "Azeite", "Limão", "Sal"],
  },
  {
    titulo: "Panquecas Rápidas",
    imagem:
      "https://images.unsplash.com/photo-1495214783159-3503fd1b572d?auto=format&fit=crop&w=900&q=80",
    preparo:
      "Misture a massa, doure em frigideira antiaderente e finalize com mel, frutas ou recheio salgado.",
    ingredientes: ["Farinha", "Ovos", "Leite", "Fermento", "Sal", "Açúcar (opcional)"],
  },
];

function getListaIngredientes(receita) {
  let texto = "<ul class='mb-2'>";
  texto += receita.ingredientes
    .map((ing) => `<li>${ing}</li>`)
    .reduce((acc, item) => acc + item, "");
  texto += "</ul>";
  return texto;
}

function getCard(receita) {
  return `
    <div class="card recipe-card shadow-sm">
      <img class="card-img-top" src="${receita.imagem}" alt="Foto de ${receita.titulo}">
      <div class="card-body">
        <h5 class="card-title">${receita.titulo}</h5>
        <div class="card-text">
          ${getListaIngredientes(receita)}
          <hr />
          <p class="mb-0">${receita.preparo}</p>
        </div>
      </div>
    </div>
  `;
}

function preencherCatalogo(lista = receitas) {
  const pnl = document.getElementById("pnlCatalogo");
  if (!pnl) return;

  const html = lista
    .map((r) => getCard(r))
    .reduce((acc, card) => acc + card, "");

  pnl.innerHTML = html;
}

function filtrarReceitas() {
  const input = document.getElementById("busca");
  if (!input) return;

  const busca = input.value.toLowerCase().trim();

  if (!busca) {
    preencherCatalogo(receitas);
    return;
  }

  const filtradas = receitas.filter((r) =>
    (r.titulo + " " + r.ingredientes.join(" ")).toLowerCase().includes(busca)
  );

  preencherCatalogo(filtradas);
}

function limparFiltro() {
  const input = document.getElementById("busca");
  if (input) input.value = "";
  preencherCatalogo(receitas);
}

// =============================
// 2) LIGHTBOX DOS PRINTS (abre em tela cheia e fecha só no X)
// =============================

function configurarLightboxPrints() {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("closeBtn");

  // Se o usuário ainda não colocou o HTML do lightbox, não quebra o site
  if (!lightbox || !lightboxImg || !closeBtn) return;

  // Clica no print -> abre
  document.querySelectorAll(".print-img").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "Print ampliado";
      lightbox.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Fecha SOMENTE no X
  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
    lightboxImg.alt = "";
    document.body.style.overflow = "auto";
  });
}

// =============================
// 3) INICIALIZAÇÃO (quando a página carregar)
// =============================

document.addEventListener("DOMContentLoaded", () => {
  preencherCatalogo();
  configurarLightboxPrints();
});