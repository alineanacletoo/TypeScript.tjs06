import readlinkSync = require("readline-sync")

// criamos a coleção Array vazia
const numeros: Array<number> = new Array<number>();

// adicionamos os valores na coleção
numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7);

// listamos os dados que foram adicionados
for(let numero of numeros){
    console.log(numero);
}

// adicionamos oum numero utilizando a entrada de dadpa
numeros.push(readlinkSync.questionFloat("Digite um numero: "));

// adicionamos um ou mais elementos no indice da fila
numeros.unshift(2, 4.5, 9, 8)
console.table(numeros);

// verificamos se um numero existe na coleção
console.log("Existe o numero 5 no array?:", numeros.includes(5));

// verificamos qual é o indice de um elemento
console.log("qual é o indice do numero 9 do meu array: ", numeros.indexOf(9));

// apagar um elemento na coleção
numeros.splice(numeros.indexOf(10), 1)
console.table(numeros)