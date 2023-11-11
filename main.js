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





