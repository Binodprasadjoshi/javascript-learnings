let product1;
let product2;
let product3;

function calculateBill(){
    product1 = parseFloat(document.getElementById("product1").value);
    product2 = parseFloat(document.getElementById("product2").value);
    product3 = parseFloat(document.getElementById("product3").value);

    let sum = product1 + product2 + product3;
    
    document.getElementById("result").innerHTML = `Sum of price = ${sum}`;
}
