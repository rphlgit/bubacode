let contador = 0;

function atualizarContador() {
    document.getElementById('contador').innerText = contador;
}

function incrementar() {
    contador++;
    atualizarContador();
}

function zerar() {
    contador = 0;
    atualizarContador();
}

function diminuir() {
    contador--;
    atualizarContador();
}
