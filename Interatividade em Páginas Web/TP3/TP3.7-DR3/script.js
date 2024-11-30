const body = document.body;
const darkModeButton = document.getElementById('darkModeButton');
const navItems = document.querySelectorAll('nav ul li a');
const section = document.querySelector('main section');
const footer = document.querySelector('footer');
const nav = document.querySelector('nav');
const image = document.createElement('img');
const ul = document.createElement('ul');
const msg = document.createElement('p');
const tabela = document.createElement('table');
const nomeUsuario = prompt("Qual é o seu nome?");
const usuario = { nome: nomeUsuario };


image.src = 'https://curso.infnet.com.br/c/wp-content/uploads/sites/5/2022/12/Infnet-Logo.png';
image.alt = 'Logo do Instituto Infnet';
image.title = 'Instituto Infnet - Educação de qualidade';
msg.textContent = `Bem-vindo(a), ${usuario.nome}! Aproveite sua visita.`;
msg.style.fontSize = '1.2rem';
msg.style.marginTop = '20px';
tabela.style.borderCollapse = 'collapse';
tabela.style.marginTop = '20px';
tabela.style.width = '100%';
tabela.style.textAlign = 'center';

tabela.innerHTML = `
<thead>
    <tr>
        <th scope="col">Coluna 1</th>
        <th scope="col">Coluna 2</th>
        <th scope="col">Coluna 3</th>
        <th scope="col">Coluna 4</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>Item 1</td>
        <td>Item 2</td>
        <td>Item 3</td>
        <td>Item 4</td>
    </tr>
    <tr>
        <td>Item 5</td>
        <td>Item 6</td>
        <td>Item 7</td>
        <td>Item 8</td>
    </tr>
</tbody>
`;


navItems.forEach((navItem, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = navItem.href;
    a.textContent = `Link ${index + 1}: ${navItem.textContent}`;
    li.appendChild(a);
    ul.appendChild(li);
});

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Desativar Dark Mode';
    } else {
        darkModeButton.textContent = 'Ativar Dark Mode';
    }
});

tabela.querySelectorAll('th, td').forEach(cell => {
    cell.style.border = '1px solid';
    cell.style.padding = '10px';
});

section.prepend(msg);
section.appendChild(tabela);
nav.appendChild(image);
footer.appendChild(ul);