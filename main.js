let chances = 0;
function add(el) {
    if (chances % 2 == 0) {
        document.querySelector(".turn").textContent = "Circle Turn";
        el.lastElementChild.classList.add("hidden");
        el.firstElementChild.classList.toggle("hidden");
    }
    else {
        document.querySelector(".turn").textContent = "Cross Turn";
        el.firstElementChild.classList.add("hidden");
        el.lastElementChild.classList.toggle("hidden");
    }
    chances++;
}
