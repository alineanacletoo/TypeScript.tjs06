import { Atleta } from "./atleta";

export interface Corredor extends Atleta{
    correr(): void;
}