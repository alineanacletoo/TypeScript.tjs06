import  readlinkSync = require("readline-sync")
import { colors } from "../util/cores";
import { TransformStreamDefaultController } from "node:stream/web";

let numero1: number;
let numero2: number;
let opcao: number;

do{
    menu();
    opcao = readlinkSync.questionInt()

    if(opcao === 0){
        about();
        process.exit(0)
    }

    switch(opcao){
        case 1:
           [numero1, numero2] = obeterNumeros();
            console.log(`${numero1} + ${numero2} = ${somar(numero1, numero2)}`);
            break;

        case 2:
            [numero1, numero2] = obeterNumeros();
            console.log(`${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`);

            break;
        case 3:
            [numero1, numero2] = obeterNumeros();
            console.log(`${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`);

            break;
        case 4:
            [numero1, numero2] = obeterNumeros();
            let resultado = dividir(numero1, numero2);

            if(resultado !== null)
            console.log(`${numero1} / ${numero2} = ${resultado}`);
            else 
                console.log("não existe divisão por 0");
            break;
        default:
            console.log("opção inválida")

    }

    
}while (true)


    function menu(): void {
        console.log("**************************************");
        console.log("         calculadora                  ");
        console.log("**************************************");
        console.log("         1 - somar                    ");
        console.log("         2 - subtrair                 ");
        console.log("         3 - multiplicar              ");
        console.log("         4 - dividir                  ");
        console.log("***************************************");
        console.log("Digite a opção desejada: ");
    }

    function obeterNumeros(): [number, number]{
       const numero1 = readlinkSync.questionFloat("digite o rimeiro numero: ");
       const numero2 = readlinkSync.questionFloat("digite o segundo numero: ");
        return [numero1, numero2];
    }

   function somar(numero1: number, numero2: number): number{
    return numero1 + numero2;
   } 
   
   function subtrair(numero1: number, numero2: number): number{
    return numero1 - numero2;
   } 

   function multiplicar(numero1: number, numero2: number): number{
    return numero1 * numero2;
   } 

   function dividir(numero1: number, numero2: number): number | null{
        let divisao = numero1 / numero2;
        return (divisao !== Infinity ? divisao: null)
   } 

   function about(){
    console.log("Criado por Aline");
   }