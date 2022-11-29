const num=11;
let factorial=1;
let i=1;

while(i<num){
    if (num>=11){
        console.log("el valor maximo admitido es de 10");
        break
    }
    factorial=factorial*i;
    i++;
    console.log(factorial);
}