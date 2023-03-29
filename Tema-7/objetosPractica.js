//Crea un archivo llamado objetos.js que contenga las siguientes lineas

//-Crea un objeto que contenga tus datos personales 

const datosPersonales ={
    name:"Enrique",
    lastName:"Cuamatzi Galicia",
    age:24,
    height:176,
    isDeveloper:true
};
const nombre = datosPersonales.name;
console.log(nombre);//Enrique

//-Una variable que contenga la edad apartir del objeto
const edad = datosPersonales.age;
console.log(edad)//24

//- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus amig@s
const listaDeDatos = datosPersonales;
console.log(datosPersonales);
/*// {
    name:"Enrique",
    lastName:"Cuamatzi Galicia",
    age:24,
    height:176,
    isDeveloper:true
};*/


const datosAmigo = [
    {
        name:"Yazmin",
        lastName:"Cortez",
        age:"22",
        height:"152",
        isDeveloper:false
    },
    {
        name:"Cesar",
        lastName:"Bojorquez",
        age:23,
        height:170,
        isDeveloper:false
    }
]

//- una nueva lista con objetos de la lisa anterior ordenados por edad, de mayor a menor
const orderByAge = datosAmigo;
console.log(orderByAge.sort(datosAmigo.age))



