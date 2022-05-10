let value1=10;
let value2=42;
let aux=0;
document.getElementById("num1-el").textContent=value1;
document.getElementById("num2-el").textContent=value2;

function add(){
    console.log("Add button pressed");
    aux=value1+value2;
    document.getElementById("sum-el").textContent="Sum: "+aux;
}

function subtract(){
    console.log("Subtract button pressed");
    aux=value1-value2;
    document.getElementById("sum-el").textContent="Sum: "+aux;
}

function divide(){
    console.log("Divide button pressed");
    aux=value1/value2;
    document.getElementById("sum-el").textContent="Sum: "+aux;
}

function multy(){
    console.log("Multiply button pressed");
    aux=value1*value2;
    document.getElementById("sum-el").textContent="Sum: "+aux;
}