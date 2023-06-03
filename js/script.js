const options = [
  {
    id: 1,
    title: "troca de titular",
    description:
      "Pego minha caneca de café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto",
  },
  {
    id: 2,
    title: "segunda via",
    description:
      "Pego minha caneca de café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto",
  },
  {
    id: 3,
    title: "aumento de carga",
    description:
      "Pego minha caneca de café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto",
  },
  {
    id: 4,
    title: "religação",
    description:
      "Pego minha caneca de café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto",
  },
  {
    id: 5,
    title: "ligação nova",
    description:
      "Pego minha caneca de café cheia, acendo meu ultimo cigarro e corro pra velha janela do quarto",
  },
];

//buscando container
const container = document.getElementById("myUL");

const createCard = () => {
  const cards = options.map((item) => {
    //criando elemento pai
    const card = document.createElement("li");

    //criando elemento filho
    const titleCard = document.createElement("h1");
    const description = document.createElement("span");

    //adicionando item ao filho
    titleCard.textContent = item.title;
    description.textContent = item.description;

    //adicionando classe
    card.classList.add("li-card");
    titleCard.classList.add("title-card");
    description.classList.add("description-card");

    //adicionando filho ao pai
    card.appendChild(titleCard);
    card.appendChild(description);

    return card;
  });
  container.append(...cards);
};

createCard();

//buscando input
const inputSearch = document.querySelector(".search");

inputSearch.addEventListener("input", (event) => {
  const inputValue = event.target.value.trim();
  Array.from(container.children).filter((service) => {
    if (!service.textContent.includes(inputValue)) {
      service.style.display = "none";
    } else {
      service.style.display = "flex";
    }
  });
});
