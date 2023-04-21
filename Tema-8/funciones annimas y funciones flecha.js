// Funciones flecha 

// Ecs 2015 se introdugeron las funciones flecha y las funciones anonimas

const array = [1,5,6,2,7,12,8,92];
// const array2 = array.map(function(valor,indice,arrayOriginal));

const array2 = array.map(function(valor){
    return valor*2;
})

const array3 =array.map((valor) => valor*2)
console.log(array3)

const doubleValor = (valor) =>{
    return valor * 5;
}

function doubleValor2 (valor){
    return valor ** 5;
}

const suma = array2.map(suma => suma + 2 )
console.log(suma)

doubleValor2(5)
console.log(doubleValor2(10))