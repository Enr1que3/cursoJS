// Funciones asincronas
/*
    que son las funciones asincronas
    las funciones asincronas son aquellas que pueden tardar cierto tiempo
*/

function myasync(){
    // hago una llamada a una bd externa
    // Puede darno algún error
}

//que es una promesa
// const miPromesa  = new Promise((param1, param2))
const miPromesa  = new Promise((resolve, reject)=>{
    const i = Math.floor(Math.random()*2)
    // esta todo correcto
    if(i !==0){
        resolve()
    }
    else{
        reject();
    }
})

miPromesa.then(()=>console.log("se ejecuto de forma correcta"))
.catch((error)=> console.log("error"))
.finally(()=>console.log("yo me ejectuo siempre"))