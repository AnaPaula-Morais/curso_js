//usando o while
/*var x = 0
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
}*/

/*let numero = 0;
while(numero < 10){
    console.log(`O número da vez é: ${numero}`)
    numero++;
}*/

/*let fruits = ["maça","uva","banana"];
for(let i in fruits){
    console.log(fruits[i]);
}

var numero = 1;
while(numero <= 100){
    console.log(`Número ${numero}`);
    numero++;
}*/

let fruits = ["maça", "uva", "laranja", "banana"];
fruits.sort();
fruits.reverse();
console.log(fruits);

let cars = [
    {Brand: "Fiat", Year: 2022},
    {Brand: "Ferrari", Year: 2020},
    {Brand: "BMW", Year: 2018}
]

cars.sort((a,b) => {
    if(a.Year > b.Year){
        return 1;
    }else if(a.Year < b.Year){
        return -1;
    }else{
        return 0;
    }
})

console.log(cars);