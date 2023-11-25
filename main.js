/**/
// Mi comentario de linea

/*Mi comentario
de  muchas
lineas*/

//Calculo del Perimetro de un Cuadrado

let lado = 5;

let perimetro = 4*lado;
let area = lado*lado;

document.getElementById('algoritmo').innerHTML = "El perimetro es: " + perimetro + " y el área es: " + area;

let lado1 = 5;
let lado2 = 6;

let perimetroRectangulo = 2*lado2 + 2*lado2;
let areaRectangulo = lado1*lado2;

document.getElementById('rectangulo').innerHTML = "El perimetro del rectangulo es: " + perimetroRectangulo + " y el área del rectangulo es: " + areaRectangulo;


//Comparar dos números

function comparar(){
  
  let inputValorA = document.getElementById("valor-a").value;
  let inputValorB = document.getElementById("valor-b").value;
    
  let valorA = parseFloat(inputValorA);
  let valorB = parseFloat(inputValorB);
  
  // console.log(valorA);
  console.log(typeof(valorA));

  
  if (valorA > valorB) {
    document.getElementById('el-mayor').innerHTML = "El valor A es el mayor";
      
  } else {
    if (valorA < valorB) {
      document.getElementById('el-mayor').innerHTML = "El valor B es el mayor";  

    } else {
      if (valorA == valorB) {
        document.getElementById('el-mayor').innerHTML = "Los valores son iguales";
        
      } else {
        document.getElementById('el-mayor').innerHTML = "Los datos son errados";
      }
    }        
  }  
}



// Saludar - Estructura repetitiva
//Arrow function
saludar = ()=>{
  let inputCantidad = document.getElementById("cantidad").value;

  let cantidad = parseInt(inputCantidad);

  let contador = 0;
  let mensaje = '';

  while (contador < cantidad) {

    mensaje = mensaje + ' ' + 'hola' + '<br>'; 
    document.getElementById('saludos').innerHTML = mensaje;
    contador = contador + 1;    
  }

}



// Ejercicio sumar repetitiva con mientras
function sumar() {
  let inputNumeroFinal = document.getElementById("numero-final").value;

  let numeroFinal = parseInt(inputNumeroFinal);

  let contador = 0;
  let suma = 0;

  while (contador <= numeroFinal){
    suma = suma + contador;
    contador = contador + 1;
  };

  document.getElementById('suma-mientras').innerHTML = "El resultado de la suma es: " + suma;  
};


// Ejercicio sumar repetitiva con PARA
sumarPara = ()=>{
  let inputFinalPara = document.getElementById("final-para").value;

  let finalPara = parseInt(inputFinalPara);

  let sumaPara = 0;

  for (let i = 0; i <= finalPara; i=i+1) {
    sumaPara = sumaPara + i;    
  }

  document.getElementById('suma-para').innerHTML = "El resultado de la suma es: " + sumaPara; 

};



//---- Arreglos y Objetos ----//

//ARREGLOS

const numerosPrimos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

document.getElementById("demo4.0").innerHTML = numerosPrimos;

document.getElementById("demo4.1").innerHTML =numerosPrimos[40];

document.getElementById("demo4.2").innerHTML = numerosPrimos.length;


//Datos de los arreglos
datosRecibidos = [76587, 8.98, "Violeta", null, undefined, [1,"talla", false], {marca: "Lenovo", ram: 8}]

document.getElementById("demo4.3").innerHTML = datosRecibidos;

document.getElementById("demo4.4").innerHTML = datosRecibidos[5][1];

