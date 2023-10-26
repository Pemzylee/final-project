
let screen = document.querySelector('#screen');
let btn = document.querySelectorAll('.button');

for (item of btn) {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;

        if (btntext === 'x') {
            btntext = '*';
        }

        if (btntext === '÷') {
            btntext = '/';
        }

        screen.value += btntext;
    });
}

document.querySelector('.sin').addEventListener('click', function () {
    screen.value = Math.sin(screen.value);
});

document.querySelector('.cos').addEventListener('click', function () {
    screen.value = Math.cos(screen.value);
});

document.querySelector('.tan').addEventListener('click', function () {
    screen.value = Math.tan(screen.value);
});

document.querySelector('.pow').addEventListener('click', function () {
    screen.value = Math.pow(screen.value, 2);
});

document.querySelector('.sqrt').addEventListener('click', function () {
    screen.value = Math.sqrt(screen.value);
});

document.querySelector('.log').addEventListener('click', function () {
    screen.value = Math.log(screen.value);
});

document.querySelector('.pi').addEventListener('click', function () {
    screen.value = Math.PI;
});

document.querySelector('.e').addEventListener('click', function () {
    screen.value = Math.E;
});

document.querySelector('.fact').addEventListener('click', function () {
    let num = parseInt(screen.value);
    if (!isNaN(num) && num >= 0) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        screen.value = factorial;
    } else {
        screen.value = "Invalid input";
    }
});

document.querySelector('.clear').addEventListener('click', function () {
    screen.value = screen.value.substr(0, screen.value.length - 1);
});

document.querySelector('.ac').addEventListener('click', function () {
    screen.value = "";
});

let openMenu = document.querySelector('.action')
let closeMenu = document.querySelector('.closeMenu')
let container = document.querySelector('.search-engine')

openMenu.addEventListener('click', open)

function open() {
    container.style.display = 'block';
}

closeMenu.addEventListener('click', close)

function close() {
        container.style.display = 'none';
        // container.style.width = 89.4;
}


document.addEventListener("DOMContentLoaded", function () {
    const wolframForm = document.getElementById("wolfram-form");
    const chatInput = document.getElementById("chat-input");

    wolframForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting normally
        const query = chatInput.value;
        const wolframUrl = wolframForm.action + encodeURIComponent(query);
        window.open(wolframUrl, "_blank"); // Open Wolfram Alpha in a new tab
    });

    chatInput.addEventListener("keyup", function (e) {
        if (e.key === "Enter") {
            // If Enter key is pressed, simulate form submission
            wolframForm.submit();
        }
    });
});