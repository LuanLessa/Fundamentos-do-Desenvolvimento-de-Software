const input = document.getElementById('texto');
const spanNome = document.getElementById('nome');

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        spanNome.textContent = input.value;

        input.value = '';
    }
});
