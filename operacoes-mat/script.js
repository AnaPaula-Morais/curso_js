function somar() {
    let campo1 = parseInt(document.getElementById("campo1").value);
    let campo2 = parseInt(document.getElementById("campo2").value);

    let soma = campo1 + campo2;
    alert(soma);
}

function subtrair() {
    let campo3 = parseInt(document.getElementById("campo3").value);
    let campo4 = parseInt(document.getElementById("campo4").value);

    let subtracao = campo3 - campo4;
    alert(subtracao);
}

function multiplicar() {
    let campo5 = parseInt(document.getElementById("campo5").value);
    let campo6 = parseInt(document.getElementById("campo6").value);

    let multiplica = campo5 * campo6;
    alert(multiplica);
}

function dividir() {
    let campo7 = parseInt(document.getElementById("campo7").value);
    let campo8 = parseInt(document.getElementById("campo8").value);

    let divisao = campo7 / campo8;
    alert(divisao);
}