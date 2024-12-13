import readlinkSync = require("readline-sync")
import { Queue } from "./queue";

const queue = new Queue();

let option: number;

do{
console.log("\nEscolha uma opção:");
console.log("1: Adicionar um novo Cliente na fila");
console.log("2: Listar todos os Clientes na fila");
console.log("3: Chamar (retirar) uma pessoa da fila");
console.log("0: Finalizar o programa");

option = readlinkSync.questionInt("digite a opção: ");

switch(option){
    case 1:
        const nomeCliente = readlinkSync.question("digite o nome do Cliente: ");
        queue.enqueue(nomeCliente);
        console.log(`${nomeCliente} foi adicionado à fila.`);

        break;
    case 2:
        queue.list();
        
        break;
    case 3: 
        const chamadaCliente = queue.dequeue();
        if(chamadaCliente){
            console.log(`${chamadaCliente} foi chamado para atendimento.`);
        } 
        
        break;
    case 0:
        console.log("programa finalizado");
        
        break;
    default:  
        console.log("opção inválida, tente novamente");

        break;


}
}while (option !== 0);