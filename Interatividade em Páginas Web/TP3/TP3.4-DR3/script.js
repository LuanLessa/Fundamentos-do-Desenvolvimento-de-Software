const body = document.body;

const darkModeButton = document.getElementById('darkModeButton');
const nav = document.querySelector('nav');
const image = document.createElement('img');

image.src = 'https://curso.infnet.com.br/c/wp-content/uploads/sites/5/2022/12/Infnet-Logo.png';
image.alt = 'Logo do Instituto Infnet';
image.title = 'Instituto Infnet - Educação de qualidade';

nav.appendChild(image);

darkModeButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Desativar Dark Mode';
    } else {
        darkModeButton.textContent = 'Ativar Dark Mode';
    }
});