let button = (document.getElementById("nr"))

let count = 0;

function onClick() {
    count += 1;
    button.innerText = count
    if (count >= 10) {
        count = 0;
    }
}