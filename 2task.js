let span = document.querySelector('span');
let count = parseInt(span.innerText);

function add() {
    count = count + 1;
    span.innerText = count;
    if (count === 0) {
        span.style.color = "black";
    } else {
        span.style.color = "green";
    }
}

function sub() {
    count = count - 1;
    span.innerText = count;
    if (count === 0) {
        span.style.color = "black";
    } else {
        span.style.color = "brown";
    }
}

function reset() {
    count = 0;
    span.innerText = count;
    span.style.color = "black";
}
