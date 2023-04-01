//Crear un archivo llamado fechas.js que contenga las siguientes lineas

// la fecha de hoy
const dia = new Date();
console.log(dia);// Tue Mar 28 2023 22:18:10 GMT-0600 (Hora estandar central) 

//- La fecha de tu nacimiento

const diaNacimiento = new Date(1999,1,12);
console.log(diaNacimiento)// Fri Feb 12 1999

//-Una variable que contenga el dia de tu nacimiento
const nacimi = new Date();
const dianaci = nacimi.getDay()+7;
console.log(dianaci)// 12 :)

// -Una variable que contenga tu mes de nacimiento
const mesNacimiento = new Date();
const mes = mesNacimiento.getMonth()-1;
console.log(mes)// febrero

// -Una variable que contenga al año de tu nacimiento
const anioNacimiento = new Date ();
const anio = anioNacimiento.getFullYear()-24;
console.log(anio)//
//-Una variable que indique si hoy es más tarde (>) que la fechade tu nacimiento

if(dia > diaNacimiento){
    console.log("dia es mayor que el dia de mi fecha de nacimiento")
    return true
}else{
    console.log("dia no es mayor que mi dia de nacimiento");
    return false;
}




