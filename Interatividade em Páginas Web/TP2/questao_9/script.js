const body = document.querySelector("body");

const lista = document.createElement("ul");
const heading = document.createElement("h2");
const primeiroParagrafo = document.createElement("p");
const segundoParagrafo = document.createElement("p");
const galeriaSection = document.createElement('section');

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

galeriaSection.style.display = 'flex';
galeriaSection.style.flexDirection = 'row';
galeriaSection.style.justifyContent = 'space-around';
galeriaSection.style.marginTop = '20px';
for (let i = 1; i <= 3; i++) {
    const imagem = document.createElement('img');
    imagem.src = `https://placehold.co/150`;
    imagem.alt = `Imagem ${i}`;
    imagem.style.width = '150px';
    imagem.style.height = '150px';
    imagem.style.border = '1px solid #ddd';
    galeriaSection.appendChild(imagem);
}

primeiroParagrafo.id = "primeiro";
segundoParagrafo.id = "segundo";
galeriaSection.id = 'galeria';

primeiroParagrafo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat atque qui fugit, corrupti consequatur eveniet facilis optio a maxime nemo nisi ea beatae quasi debitis placeat eligendi iusto commodi!";
segundoParagrafo.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore quam ducimus numquam, aut enim, voluptate minima blanditiis pariatur non ut, qui fugit veritatis. Deserunt, esse? Obcaecati adipisci labore asperiores ullam.";
heading.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

body.appendChild(lista);
body.appendChild(primeiroParagrafo);
body.appendChild(heading);
body.appendChild(segundoParagrafo);
body.appendChild(galeriaSection);
body.removeChild(primeiroParagrafo);
lista.removeChild(lista.firstChild);

const novoItem = document.createElement('li');
novoItem.textContent = 'Novo Item Substituto';

novoItem.style.backgroundColor = '#e0e0e0';
novoItem.style.color = '#333';
novoItem.style.fontFamily = 'Arial, sans-serif';
novoItem.style.border = '1px solid #ddd';
novoItem.style.padding = '10px';
novoItem.style.margin = '5px 0';

lista.replaceChild(novoItem, lista.lastChild);