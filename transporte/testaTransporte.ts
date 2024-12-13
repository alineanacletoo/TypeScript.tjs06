import { Automovel } from "./automovel";
import { Terrestre } from "./terrestre";
import { Trnasporte } from "./transporte";


function main(){
    const t1 = new Trnasporte(5);
    t1.vizualizar();

    const tr1 = new Terrestre(5, 4, 100);
    tr1.vizualizar();

    const a1 = new Automovel(5, 4, 250, "verde", 5, "FLV-4567", 5);
    a1.vizualizar();
}

main();