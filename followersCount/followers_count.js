let count = 0;

function increaseCount(){
    count++;
    displayCount();
    congratulation();
}

function displayCount(){
    document.getElementById("countDisplay").innerHTML = count;
}

function congratulation(){
    if (count === 10){
        alert("you got 10 followers, congratulations");
    }
}
