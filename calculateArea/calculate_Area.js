let width;
let length;

function calculateArea(width, length){
    width = parseFloat(document.getElementById("width").value);
    length = parseFloat(document.getElementById("length").value);
    let area =  0.5 * length * width;
    document.getElementById("result").innerHTML = `The area of triangle is : ${area}`;
}