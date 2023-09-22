//1)Calcular el área de un triángulo:

function calcularAreaTriangulo(base, altura) {
  return (base * altura) / 2;
}

const base = 5;
const altura = 8;
const area = calcularAreaTriangulo(base, altura);
console.log(`El área del triángulo es: ${area}`);

//2)Convertir grados Celsius a Fahrenheit:

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

const celsius = 25;
const fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} grados Celsius son equivalentes a ${fahrenheit} grados Fahrenheit`);

//3)Encontrar el máximo de dos números:

function encontrarMaximo(num1, num2) {
  return Math.max(num1, num2);
}

const numero1 = 10;
const numero2 = 15;
const maximo = encontrarMaximo(numero1, numero2);
console.log(`El número máximo es: ${maximo}`);

//4)Calcular el factorial de un número:

function calcularFactorial(numero) {
  if (numero === 0) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}

const numero = 5;
const factorial = calcularFactorial(numero);
console.log(`El factorial de ${numero} es: ${factorial}`);

//5)Verificar si un número es primo:

function esPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;

  if (numero % 2 === 0 || numero % 3 === 0) return false;

  let i = 5;
  while (i * i <= numero) {
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
}

const numero = 17;
if (esPrimo(numero)) {
  console.log(`${numero} es un número primo.`);
} else {
  console.log(`${numero} no es un número primo.`);
}


//6) Revertir una cadena de texto:

function revertirCadena(cadena) {
  return cadena.split('').reverse().join('');
}

const texto = "Hola, mundo!";
const textoRevertido = revertirCadena(texto);
console.log(`Texto original: ${texto}`);
console.log(`Texto revertido: ${textoRevertido}`);

//7) Calcular la suma de los primeros N números primos:

function sumarPrimos(n) {
  let suma = 0;
  let contador = 2;
  let primosEncontrados = 0;

  while (primosEncontrados < n) {
    if (esPrimo(contador)) {
      suma += contador;
      primosEncontrados++;
    }
    contador++;
  }

  return suma;
}

const n = 5; // Cambia esto a la cantidad deseada de números primos
const sumaDePrimos = sumarPrimos(n);
console.log(`La suma de los primeros ${n} números primos es: ${sumaDePrimos}`);

//8) Encontrar el elemento más grande en un arreglo:

function encontrarMaximoEnArreglo(arreglo) {
  if (arreglo.length === 0) {
    return undefined;
  }
  return Math.max(...arreglo);
}

const numeros = [10, 5, 8, 20, 3];
const maximoEnArreglo = encontrarMaximoEnArreglo(numeros);
console.log(`El elemento más grande en el arreglo es: ${maximoEnArreglo}`);

//9)Verificar si una palabra es un palíndromo:

function esPalindromo(palabra) {
  palabra = palabra.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  const palabraInvertida = palabra.split('').reverse().join('');
  return palabra === palabraInvertida;
}

const palabra = "anilina";
if (esPalindromo(palabra)) {
  console.log(`${palabra} es un palíndromo.`);
} else {
  console.log(`${palabra} no es un palíndromo.`);
}


//10) Generar un número aleatorio en un rango dado:

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const minimo = 1;
const maximo = 100;
const numeroAleatorio = generarNumeroAleatorio(minimo, maximo);
console.log(`Número aleatorio entre ${minimo} y ${maximo}: ${numeroAleatorio}`);


