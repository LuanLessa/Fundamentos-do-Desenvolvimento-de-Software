const arrastaveis = document.querySelectorAll('.arrastavel');
const containers = document.querySelectorAll('.container');
const resetBtn = document.getElementById('resetBtn');
const contador = document.getElementById('contador');
const origem = document.getElementById('origem');

let contagem = 0;

arrastaveis.forEach(arrastavel => {
    arrastavel.addEventListener('dragstart', dragStart);
    arrastavel.addEventListener('dragend', dragEnd);
});

containers.forEach(container => {
    container.addEventListener('dragover', dragOver);
    container.addEventListener('dragenter', dragEnter);
    container.addEventListener('dragleave', dragLeave);
    container.addEventListener('drop', dragDrop);
});

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.classList.add('invisible');
    }, 0);
}

function dragEnd(event) {
    event.target.classList.remove('invisible');
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    event.target.classList.add('dragover');
}

function dragLeave(event) {
    event.target.classList.remove('dragover');
}

function dragDrop(event) {
    event.preventDefault();
    const arrastavelId = event.dataTransfer.getData('text/plain');
    const arrastavel = document.getElementById(arrastavelId);
    event.target.classList.remove('dragover');
    if (event.target.classList.contains('container')) {
        event.target.appendChild(arrastavel);
    }
}

function resetItems() {
    const items = document.querySelectorAll('.arrastavel');
    items.forEach(item => {
        origem.appendChild(item);
    });

    contagem++;
    contador.textContent = `Você clicou ${contagem} vezes`;
}

resetBtn.addEventListener('click', resetItems);