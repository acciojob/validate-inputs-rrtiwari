
function validateName() {
    const pattern = /^[A-Za-z]{3,}$/;
    const input = document.getElementById("name");

    if (!input.value) {
        input.style.backgroundColor = "pink"; 
    } else {
        input.style.backgroundColor = pattern.test(input.value) ? "lightgreen" : "pink";
    }
}

function validateEmail() {
    const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const input = document.getElementById("email");

    if (!input.value) {
        input.style.backgroundColor = "pink";
    } else {
        input.style.backgroundColor = pattern.test(input.value) ? "lightgreen" : "pink";
    }
}

function validateMobile() {
    const pattern = /^[0-9]{10}$/;
    const input = document.getElementById("mobile");

    if (!input.value) {
        input.style.backgroundColor = "pink"; 
    } else {
        input.style.backgroundColor = pattern.test(input.value) ? "lightgreen" : "pink";
    }
}