import { Trnasporte } from "./transporte";

// classe terrestre herda da classe transporte
export class Terrestre extends Trnasporte{
        
    private _numeroRodas: number;
    private _velocidade: number;


	constructor(capacidade: number, numeroRodas: number, velocidade: number) {
		super(capacidade);
        this._numeroRodas = numeroRodas;
		this._velocidade = velocidade;
	}
    
	public get numeroRodas(): number {
		return this._numeroRodas;
	}

	public get velocidade(): number {
		return this._velocidade;
	}

   
	public set numeroRodas(value: number) {
		this._numeroRodas = value;
	}

	public set velocidade(value: number) {
		this._velocidade = value;
	}

	public vizualizar(){
		super.vizualizar();
		console.log(`Numero de Rodas: ${this._numeroRodas}`);
		console.log(`Velocidade: ${this._velocidade}`);
	}
	

}