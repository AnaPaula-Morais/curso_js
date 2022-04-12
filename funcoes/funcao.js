function alterar(titulo) {
    document.getElementById("titulo").innerHTML = titulo;
    document.getElementById("campo").value = titulo;
}

function soma(x, y) {
    let total = x + y;
    document.getElementById("campo").value = total;
    return total;
}

var resultado = soma(10, 15);

console.log(resultado);