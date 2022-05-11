

// SOMA

function somar ( a , b) {
    return a + b ; 
}


// SUBTRAÇÃO

function subtrair ( a , b) {
    return a - b ; 
}


// MULTIPLICAÇÃO

function multiplicar ( a , b) {
    return a * b ; 
}


// DIVISÃO

function dividir ( a , b) {
    return a / b ; 
}


console.log ("-------------- Teste de Operações / Calculador --------------");
console.log (" ");

console.log ("Cálculo soma");
console.log ( somar ( 1 , 2 ));

console.log ("Cálculo subtração");
console.log ( subtrair ( 1 , 2 ));

console.log ("Cálculo multiplicação");
console.log ( multiplicar ( 1 , 2 ));

console.log ("Cálculo divisão");
console.log ( dividir ( 6, 2 ));
console.log ( dividir ( 0 , 2 ));


// QUADRADO DO NUMERO

function quadradoDoNumeroA ( a , b ){
    return Math.pow ( a , b );
}

function quadradoDoNumeroB ( a ) {
    return multiplicar ( a , a ); 
}

console.log ("Cálculo quadrado");
console.log ( quadradoDoNumeroA ( 3 , 2 ));
console.log ( quadradoDoNumeroB ( 3 ));

// MÉDIA 3 NÚMEROS

function mediaDeTresNumeros ( a , b , c ) {
    return dividir (( a + b + c ) , 3 ); 
}

console.log ("Cálculo média 3 números");
console.log ( mediaDeTresNumeros ( 5 , 10 , 15 ));


// CALCULO PORCENTAGEM

function calculaPorcentagem ( a ,b ) {
    return multiplicar ( a , (dividir ( b , 100 ))); 
}

console.log ("Cálculo porcentagem");
console.log ( calculaPorcentagem ( 300 , 15 ));


// GERADOR PORCENTAGEM

function geradorPorcentagem ( a ,b ) {
    return dividir ( a , b ) * 100; 
}

console.log ("Gerador porcentagem");
console.log ( `${geradorPorcentagem ( 45 , 300 )}%` );