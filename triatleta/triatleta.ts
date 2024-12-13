import { Ciclista } from "./ciclista";
import { Corredor } from "./corredor";
import { Nadador } from "./nadador";
import { Pessoa } from "./pessoa";


export class Triatleta extends Pessoa implements Ciclista, Nadador, Corredor{
    
    constructor(nome: string) {
        super(nome);
    }

    pedalar(): void {
        console.log("Pedalando...");
    }

    aquecer(): void {
        console.log("Aquecendo...");
    }

    nadar(): void {
        console.log("Nadando ....");
    }

    correr(): void {
        console.log("Correndo...");
    }

    cansou(): void{
        console.log("Cansou...");
    }
}


