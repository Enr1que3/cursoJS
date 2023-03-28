//Sets o conjuntos
//set nunca va a permitir almacenar, valores o elementos que ya existen en la lista
const array = [1,2,3,4,5,6,1,2,5];
const miset = new Set(array)
console.log(array);
console.log(miset);

//.add()
miset.add(9)
console.log(miset);
miset.add(10);
console.log(miset);
//.delete()
miset.delete(5);
console.log(miset);
//.cleat()
// miset.clear(miset);
// console.log(miset);

//.has();
//console.log(array.includes(2));
console.log(miset.has(40));//false

//.size
console.log(miset.size);//7

miset.forEach(val=>{
    console.log(val);
});

const it_miset= miset.values();
console.log(it_miset);

const newArray= [...miset];
console.log(newArray)

