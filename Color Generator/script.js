let color_box = document.querySelector(".color-box");
let select = document.getElementById("select");
let color_button = document.querySelectorAll(".color");
let color_code = document.getElementById("color-code");
let Refrech_button = document.querySelector(".Refresh");



function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}

function applyGradient() {

    let color1 = getRandomColor();
    let color2 = getRandomColor();

    color_box.style.backgroundImage = `linear-gradient(to right, ${color1}, ${color2})`;
    color_code.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2})`;

    color_button[0].value = color1;
    color_button[1].value = color2;

}

function copyText() {
    const codeText = document.getElementById('color-code').innerText; 
    navigator.clipboard.writeText(codeText)
}


























































