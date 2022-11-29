//Bifurcaciones if else 
/*ejecutar parte del codigo si se cumple cierta condicion*/


let saldo =150;
let retiro=50;
if (retiro<saldo){
    console.log('su saldo es de '+saldo);
}
console.log('saldo actual',saldo-retiro);

if (retiro<saldo){
    console.log('Su retiro es de',retiro,' y su saldo actual es ',saldo-retiro);
}else{
    console.log('Saldo insuficiente',saldo-retiro);
}