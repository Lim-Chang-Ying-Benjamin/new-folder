document.addEventListener("DOMContentLoaded", function() {
    let increase = document.getElementById("click");
    increase.addEventListener("click", updateCounter);

    let decrease = document.getElementById("decrease");
    decrease.addEventListener("click", decreaseCounter);

    let reset = document.getElementById("reset");
    reset.addEventListener("click", resetCounter);
});

function updateCounter() {
    let counterElement = document.getElementById("counter");
    let count = parseInt(counterElement.innerText);
    count++;
    counterElement.innerText = count;

    if (count % 10 === 0) {
        counterElement.style.color =  "gold";  
    } else {
        counterElement.style.color = "";
    }
}

function decreaseCounter() {
    let counterElement = document.getElementById("counter");
    let count = parseInt(counterElement.innerText);
    if (count > 0) {
        count--;
    } else {
        count = 0;
    }
    counterElement.innerText = count;
}

function resetCounter() {
    let counterElement = document.getElementById("counter");
    counterElement.innerText = 0;
    counterElement.style.color = "";
}