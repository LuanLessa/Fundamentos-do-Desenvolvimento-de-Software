const body = document.querySelector('body');

const botaoInserir = document.createElement('button');
botaoInserir.textContent = 'Inserir';

body.appendChild(botaoInserir);

const lista = document.createElement('ul');
lista.id = 'lista';
body.appendChild(lista);

botaoInserir.addEventListener('click', () => {
    const novoItem = document.createElement('li');
    novoItem.textContent = 'Nova entrada';

    lista.appendChild(novoItem);
});
