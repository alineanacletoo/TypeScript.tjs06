
const frutas: Set<string> = new Set<string>();

frutas.add("banana")
frutas.add("maça")     
frutas.add("caqui")
frutas.add("banana") // ele não deixa repetir valor
frutas.add("manga")

console.table(frutas);

console.log("A fruta morando existe?:", frutas.has("morango"));

frutas.delete("caqui");

console.table(frutas);

let setOrdenado: Array<string> = Array.from(frutas).sort();
console.table(setOrdenado);

