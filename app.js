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

  const html = lista
    .map((r) => getCard(r))
    .reduce((acc, card) => acc + card, "");

  pnl.innerHTML = html;
}

function filtrarReceitas() {
  const busca = document.getElementById("busca").value.toLowerCase().trim();

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
  document.getElementById("busca").value = "";
  preencherCatalogo(receitas);
}

// carregar ao abrir
window.onload = () => preencherCatalogo();