function trocarImagem(filename, animalName) {
    document.querySelector(".imagem").setAttribute("src","imagem/" + filename);
    document.querySelector(".imagem").setAttribute("data-animal", animalName);

}

function pagarAnimal() {
    let animal = document.querySelector('.imagem').getAttribute('data-animal');
    alert("O animal é: " + animal);
}