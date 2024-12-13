import { Atleta } from "./atleta";

export interface Ciclista extends Atleta{
    pedalar(): void;
}