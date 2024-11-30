// - Evento drag

// O evento `drag` ocorre quando um elemento, é `arrastado` pelo usuário. Ele é `disparado`
// no elemento que está sendo arrastado. Para habilitar o `arrastar` de um elemento, é necessário
// definir o atributo `draggable`, como `true` para esse elemento. Além disso, é necessário adicionar
// um `ouvinte de evento`, para o evento `dragstart` no elemento arrastado, que define os dados a serem
// `transferidos` durante o arrastar, utilizando o método `setData` do objeto `dataTransfer`

// <br>

// - Evento drop

// O evento `drop` ocorre quando um elemento arrastado, é `solto` em um alvo `válido`.
// Ele é `disparado` no elemento de destino, onde o `elemento arrastado` está sendo `solto`.
// Para `permitir` que um elemento seja `solto` em um `alvo`, é necessário adicionar um
// `ouvinte de evento`, para o evento `dragover` no elemento de destino e, dentro desse ouvinte,
// chamar o método `preventDefault()` para permitir que o elemento seja solto. Além disso, é necessário
// adicionar um ouvinte de evento para o evento `drop` no elemento de destino, onde a `lógica` para manipular
// os `dados transferidos` é implementada.

const caixinhas = document.querySelectorAll('.caixinha');
const containers = document.querySelectorAll('.container');

caixinhas.forEach(caixinha => {
    caixinha.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('hidden');
        }, 0);
    });

    caixinha.addEventListener('dragend', (e) => {
        e.target.classList.remove('hidden');
    });
});

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
