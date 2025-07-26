let color_box = document.querySelector(".color-box");
let color_button = document.querySelectorAll(".color");
let color_code = document.getElementById("color-code");
let select = document.getElementById("select");
let copy = document.querySelector(".Copy");


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

    color_box.style.backgroundImage = `linear-gradient( ${color1}, ${color2})`;
    color_code.innerHTML = `background-image: linear-gradient(${color1}, ${color2})`;

    color_button[0].value = color1;
    color_button[1].value = color2;

}

function copyText() {
    const codeText = document.getElementById('color-code').innerText;
    navigator.clipboard.writeText(codeText)

    copy.innerText = "Copied"

    setTimeout(function () {
        copy.innerText = "Copy code"
    }, 1000)
}

function direction(){
    let direction = select.value;

    let color1 = color_button[0].value;
    let color2 = color_button[1].value;


    color_box.style.backgroundImage = `linear-gradient(${direction}, ${color1}, ${color2})`;
    color_code.innerHTML = `background-image: linear-gradient(${direction}, ${color1}, ${color2})`;
}

select.addEventListener("change", direction);

color_button.forEach((input) => {
    input.addEventListener("input", () => {

        let direction = select.value;
        let color1 = color_button[0].value;
        let color2 = color_button[1].value;

        color_box.style.backgroundImage = `linear-gradient(${direction}, ${color1}, ${color2})`;
        color_code.innerText = `background-image: linear-gradient(${direction}, ${color1}, ${color2});`;
    });
});