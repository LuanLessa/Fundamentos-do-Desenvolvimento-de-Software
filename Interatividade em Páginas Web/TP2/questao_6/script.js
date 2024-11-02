const body = document.querySelector("body");

const lista = document.createElement("ul");
const heading = document.createElement("h2");
const primeiroParagrafo = document.createElement("p");
const segundoParagrafo = document.createElement("p");

const itens = ["Item 1", "Item 2", "Item 3", "Item 4"];

itens.forEach((itemTexto) => {
    const item = document.createElement("li");
    item.textContent = itemTexto;

    item.style.backgroundColor = "#f0f0f0";
    item.style.color = "#333";
    item.style.fontFamily = "Arial, sans-serif";
    item.style.border = "1px solid #ddd";
    item.style.padding = "10px";
    item.style.margin = "5px 0";

    lista.appendChild(item);
});

primeiroParagrafo.id = "primeiro";
segundoParagrafo.id = "segundo";

primeiroParagrafo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat atque qui fugit, corrupti consequatur eveniet facilis optio a maxime nemo nisi ea beatae quasi debitis placeat eligendi iusto commodi!";
segundoParagrafo.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quam ducimus numquam, aut enim, voluptate minima blanditiis pariatur non ut, qui fugit veritatis. Deserunt, esse? Obcaecati adipisci labore asperiores ullam.";
heading.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

body.appendChild(lista);
body.appendChild(primeiroParagrafo);
body.appendChild(heading);
body.appendChild(segundoParagrafo);