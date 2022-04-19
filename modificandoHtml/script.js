function trocardiv() {
    var area = document.getElementById("area");
    var texto = prompt("Digite alguma coisa");

    area.innerHTML = texto;

}

function clicar(nome) {
    var area = document.getElementById("area");
    var texto = prompt("Qual o seu sobrenome?");

    area.innerHTML = nome + " " + texto;
}