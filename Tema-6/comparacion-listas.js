//Cómo podemos comparar listas
// .every() si todos los componentes cumplen la condicion

const array=[4,7,8,10,15,12,15,-33,-54,-104];
// const res=array.some((val)=>{
//     if( val > 0){
//         return true;
//     }
//     else{
//         return false;
//     }
// });


//la mejor manera de usar esta .every cuando seas senior
const res = array.every(val => val>0)
console.log(res);

const arr1=[1,2,3,4];
const arr2=[1,2,3,4];
console.log(arr1 == arr2);


// const compararArray = (arr1,arr2)=>{
//     if(arr1.length === arr2.length) return false;
//     const res = arr1.every((val,i)=>{
//         if(val === arr2[i])return true;
//         return false;
//     })
// }
const compararArray = (arr1,arr2)=>{
    if(arr1.length !== arr2.length) return false;
    const res = arr1.every((val, i)=> val === arr2[i])
    return res;
}
console.log((compararArray(arr1,arr2)));
const arr3=[1,2,3,4,6];
console.log((compararArray(arr1,arr3)));
