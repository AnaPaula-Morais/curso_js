function adicionarIngrediente() {
    var ing = document.getElementById("ingrediente").value;

    var listaHtml = document.getElementById("lista").innerHTML;

    listaHtml = listaHtml + "<li>" + ing + "</li>";
    document.getElementById("lista").innerHTML = listaHtml;
}