import readlinkSync = require("readline-sync")
import { Stack } from "./Stack";

const stack = new Stack();

let option: number;

do{
    console.log("\nEscolha uma opção:");
    console.log("1: Adicionar um novo livro na pilha");
    console.log("2: Listar todos os livros da pilha");
    console.log("3: Retirar um livro da pilha");
    console.log("0: Finalizar o programa");

    option = readlinkSync.questionInt("Digite a opção: ");

    switch(option){
        case 1:
            const nomeLivro = readlinkSync.question("Digite o nome do livro");
            stack.push(nomeLivro);
            console.log(`${nomeLivro} foi adicionado à pilha.`);

            break;
        case 2:
            stack.list();    

            break;
        case 3:
            const removeLivro = stack.pop();
            if(removeLivro){
                console.log(`${removeLivro} foi removido da pilha.`);
            }   
            break;
        case 0:
            console.log("programa finalizado");
            
            break;
        default:
            console.log("opção inválida, tente novamente");
            break;    
    }
}while(option != 0);