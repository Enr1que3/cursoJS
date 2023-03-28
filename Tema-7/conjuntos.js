//Crea un archivo llamado conjuntos.js que contenga las siguientes lineas

//- Un nuevo Set con los nombre de tu familia
const familia = ["Artemio","Margarita","Luis Alberto", "Efren","Enrique"];

const newFamilia = new Set(familia);
console.log(newFamilia);

//- Modifica el Set original añadiendo tu nombre(duplicado)(deveria darte lo mismo)

newFamilia.add("Enrique");
console.log(newFamilia);

// - Modifica el Set original añadiendo el nombre de "JAVASCRIPT" (ya que empieza a format parte de tu vida ;) )
newFamilia.add("javaScritp");
console.log(newFamilia)