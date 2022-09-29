

let button = document.getElementById("click");

console.log(button) 

let count = 0;

function counter() {
count += 1
button.innerText = count + " keer op geklikt"
document.getElementById("click").style.backgroundColor = "aqua"
}

function counter2() {
    count -= 1
    button.innerText = count + " keer op geklikt"
    document.getElementById("click").style.backgroundColor = "red"
    }

    

