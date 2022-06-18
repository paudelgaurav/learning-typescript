var button = document.querySelector("button");
var firstInput = document.getElementById("firstInput");
var secondInput = document.getElementById("secondInput");
function add(firstInput, secondInput) {
    return firstInput + secondInput;
}
button.addEventListener("click", function () {
    console.log(add(+firstInput.value, +secondInput.value));
});
