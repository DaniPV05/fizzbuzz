numero=Number(prompt("Ingrese un numero entero"))
let divisibilidad3
let divisibilidad5
let Respuesta
if (numero % 1== 0){
    divisibilidad3=numero/3
    divisibilidad5=numero/5
    if (divisibilidad3 %1 ==0 && divisibilidad5 %1 ==0) {
        Respuesta= "FizzBuzz"
    }else{
        if (divisibilidad3 %1 ==0) {
            Respuesta="Fizz"
        }else{
            if (divisibilidad5 %1 ==0) {
                Respuesta="Buzz"
            }else{
                Respuesta="No es divisible ni por 3 ni por 5"
            }
        }
    }

}else{
    alert ("No es un numero entero")}
     document.getElementById("texto").innerHTML=Respuesta
