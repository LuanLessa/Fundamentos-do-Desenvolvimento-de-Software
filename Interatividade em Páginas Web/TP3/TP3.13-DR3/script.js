const novoContainer = document.getElementById('novo');
const criarButton = document.getElementById('criar');
const containers = document.querySelectorAll('.container');

const cores = ['corVerde', 'corRoxa', 'corLaranja', 'corVermelha'];

function adicionarEventosDrag(caixinha) {
    caixinha.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hidden');
        }, 0);
    });

    caixinha.addEventListener('dragend', (e) => {
        e.target.classList.remove('hidden');
    });
}

containers.forEach(container => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    container.addEventListener('drop', (e) => {
        e.preventDefault();
        const caixinhaId = e.dataTransfer.getData('text/plain');
        const caixinha = document.getElementById(caixinhaId);
        if (caixinha) {
            container.appendChild(caixinha);
        }
    });
});

criarButton.addEventListener('click', () => {
    const novaCaixinha = document.createElement('div');
    novaCaixinha.classList.add('caixinha');

    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
    novaCaixinha.classList.add(corAleatoria);

    novaCaixinha.id = `caixinha-${Date.now()}`;

    novaCaixinha.setAttribute('draggable', 'true');

    adicionarEventosDrag(novaCaixinha);

    novoContainer.appendChild(novaCaixinha);
});
