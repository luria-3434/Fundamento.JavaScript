// declaração de função

// 1) declara a função

function imprmiTexto (texto) {
    console.log(texto)
}

// 2) excuta a função (1 ou + vezes)
imprmiTexto (soma())
imprmiTexto ("Outro texto");

// 3) outra forma de escrever funções

function soma() {
    return 2 + 2;
}

// console.log(soma())