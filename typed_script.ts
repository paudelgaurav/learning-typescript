const button = document.querySelector("button")
const firstInput = document.getElementById("firstInput")! as HTMLInputElement;
const secondInput = document.getElementById("secondInput")! as HTMLInputElement;

function add(firstInput: number, secondInput: number) {
    return firstInput + secondInput;
}

button.addEventListener("click", function () {
    console.log(add(+firstInput.value, +secondInput.value));
});