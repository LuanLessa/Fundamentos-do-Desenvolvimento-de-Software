const body = document.body;

const darkModeButton = document.getElementById('darkModeButton');
const navItems = document.querySelectorAll('nav ul li a');
const footer = document.querySelector('footer');
const nav = document.querySelector('nav');

const image = document.createElement('img');
const ul = document.createElement('ul');

image.src = 'https://curso.infnet.com.br/c/wp-content/uploads/sites/5/2022/12/Infnet-Logo.png';
image.alt = 'Logo do Instituto Infnet';
image.title = 'Instituto Infnet - Educação de qualidade';

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

nav.appendChild(image);
footer.appendChild(ul);