//usando o while
var x = 0
document.write("Iniciando o loop...<br/><br/>")
while (x < 10) {
    document.write("Número: " + x + "<br/>");
    //x = x +1
    x++;
}

document.write("<br/>Finalizando o loop...<br/><br/>")


//usando o for
for (x = 0; x < 10; x++) {
    document.write("Número " + x + "<br/>")
}

//usando switch
x = prompt("Qual é o número?");
switch (x) {
    case "0":
        alert("X é 0");
        break;
    case "1":
        alert("X é 1");
        break;
    case "2":
        alert("X é 2");
        break;
    default:
        alert("Ninguem foi satisfeito");
        break;
}