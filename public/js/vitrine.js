function cores() {
    document.addEventListener("DOMContentLoaded", alterarCoresDosElementos);
}

function alterarCoresDosElementos() {
    var elementos = ["Blush", "Batom", "Maquiagem", "Perfume"];
    var cores = ["#FFDAB9", "	#A52A2A", "	#D8BFD8", "#8B008B"]; // Array de cores

    for (var i = 0; i < elementos.length; i++) {
        var elemento = document.getElementById(elementos[i]);
        if (elemento) {
            var cor = cores[i % cores.length]; // Seleciona uma cor do array de cores
            elemento.style.backgroundColor = cor;
            elemento.style.color = "white";
            elemento.style.borderRadius = "10px"; 
            elemento.style.padding = "5px"; 
        }
    }
}

// Chamando a função cores para iniciar o processo de alteração de cores após o carregamento do DOM
cores();
