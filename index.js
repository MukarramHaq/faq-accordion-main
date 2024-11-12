const plusIconEl = document.querySelector(".plus-icon")
const minusIconEl = document.querySelector(".minus-icon")

minusIconEl.addEventListener("click", () => {
    minusIconEl.style.display = "none";
    plusIconEl.style.display = "block";

    

});

plusIconEl.addEventListener("click", () => {
    minusIconEl.style.display = "block";
    plusIconEl.style.display = "none";
});

console.log(plusIconEl);
console.log(minusIconEl);