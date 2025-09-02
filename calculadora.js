let operaciones = 0;
let contadorSuma = 0;
let contadorResta = 0;
let contadorMultiplicar = 0;
let contadorDividir = 0;

function sumar(){
    let num1 = prompt("Ingrese numero 1");
    let num2 = prompt("Ingrese numero 2");

    let sum = parseInt(num1) + parseInt(num2);

    alert("la suma es: "+sum)

    let lista = document.getElementById("lista");
    lista.innerHTML += "<li>" + num1 + " + " + num2 + " = " + sum + "</li>";
    let operacion  = document.getElementById("operaciones");
    operaciones++;
    operacion.innerText = operaciones;
}

function restar(){
    let num1 = prompt("Ingrese numero 1");
    let num2 = prompt("Ingrese numero 2");

    let restar = parseInt(num1) - parseInt(num2);

    alert("la resta es: "+restar)

    let lista = document.getElementById("lista");
    lista.innerHTML += "<li>" + num1 + " - " + num2 + " = " + restar + "</li>";
    let operacion  = document.getElementById("operaciones");
    operaciones++;
    operacion.innerText = operaciones;
}
function multiplicar(){
    let num1 = prompt("Ingrese numero 1");
    let num2 = prompt("Ingrese numero 2");

    let multiplicar = parseInt(num1) * parseInt(num2);

    alert("la Multiplicacion es: "+multiplicar)

    let lista = document.getElementById("lista");
    lista.innerHTML += "<li>" + num1 + " * " + num2 + " = " + multiplicar + "</li>";
    let operacion  = document.getElementById("operaciones");
    operaciones++;
    operacion.innerText = operaciones;
}

function dividir(){
    let num1 = prompt("Ingrese numero 1");
    let num2 = prompt("Ingrese numero 2");

    let dividir = parseInt(num1) / parseInt(num2);

    alert("la division es: "+dividir)

    let lista = document.getElementById("lista");
    lista.innerHTML += "<li>" + num1 + " / " + num2 + " = " + dividir + "</li>";
    let operacion  = document.getElementById("operaciones");
    operaciones++;
    operacion.innerText = operaciones;
}

function calculadora(){
    let opc=parseInt(prompt("Ingrese una opcion\n1.suma\n2.resta\n3.multiplicacion\n4.dividir"));
 
    switch(opc){
        case 1:
            sumar();
            contadorSuma++;
            break;
        case 2:
            restar();
            contadorResta++;
            break;
        case 3:
            multiplicar();
            contadorMultiplicar++;
            break;
        case 4:
            dividir();
            contadorDividir++;
            break;
    }
    if (contadorSuma> contadorResta && contadorSuma> contadorMultiplicar && contadorSuma> contadorDividir){
        contadorSuma.innerText(contadorSuma)
    }
        
}

