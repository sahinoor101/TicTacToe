const boxes = document.querySelectorAll(".box");
console.log(boxes);
let chances = 0;
function add(el) {
    if (!el.firstElementChild.classList.contains("cross") && !el.lastElementChild.classList.contains("circle")){

        if (chances % 2 == 0) {
            document.querySelector(".turn").textContent = "Circle Turn";
            el.lastElementChild.classList.add("hidden");
            el.firstElementChild.classList.add("cross");
        }
        else
        {
            document.querySelector(".turn").textContent = "Cross Turn";
            el.firstElementChild.classList.add("hidden");
            el.lastElementChild.classList.add("circle");
        }

        if (boxes[0].firstElementChild.classList.contains("cross") && boxes[1].firstElementChild.classList.contains("cross") && boxes[2].firstElementChild.classList.contains("cross")) {
            document.querySelector(".turn").textContent = "Cross WIN"
                ;
            return;
        }
        if (boxes[3].firstElementChild.classList.contains("cross") && boxes[4].firstElementChild.classList.contains("cross") && boxes[5].firstElementChild.classList.contains("cross")) {
            document.querySelector(".turn").textContent = "Cross WIN"
                ;
            return;
        }
        if (boxes[6].firstElementChild.classList.contains("cross") && boxes[7].firstElementChild.classList.contains("cross") && boxes[8].firstElementChild.classList.contains("cross")) {
            document.querySelector(".turn").textContent = "Cross WIN"
                ;
            return;
        }
        if (boxes[0].firstElementChild.classList.contains("cross") && boxes[3].firstElementChild.classList.contains("cross") && boxes[6].firstElementChild.classList.contains("cross")) {
            document.querySelector(".turn").textContent = "Cross WIN"
                ;
            return;
        }
        if (boxes[1].firstElementChild.classList.contains("cross") && boxes[4].firstElementChild.classList.contains("cross") && boxes[7].firstElementChild.classList.contains("cross")) {
            document.querySelector(".turn").textContent = "Cross WIN"
                ;
            return;
        }
        if (boxes[2].firstElementChild.classList.contains("cross") && boxes[5].firstElementChild.classList.contains("cross") && boxes[8].firstElementChild.classList.contains("cross")) {
            document.querySelector(".turn").textContent = "Cross WIN"
                ;
            return;
        }
        if (boxes[0].firstElementChild.classList.contains("cross") && boxes[4].firstElementChild.classList.contains("cross") && boxes[8].firstElementChild.classList.contains("cross")) {
            document.querySelector(".turn").textContent = "Cross WIN"
                ;
            return;
        }
        if (boxes[2].firstElementChild.classList.contains("cross") && boxes[4].firstElementChild.classList.contains("cross") && boxes[6].firstElementChild.classList.contains("cross")) {
            document.querySelector(".turn").textContent = "Cross WIN"
                ;
            return;
        }

        //Circle Win 

        if (boxes[0].lastElementChild.classList.contains("circle") && boxes[1].lastElementChild.classList.contains("circle") && boxes[2].lastElementChild.classList.contains("circle")) {
            document.querySelector(".turn").textContent = "Circle WIN";
            return;
        }

        if (boxes[3].lastElementChild.classList.contains("circle") && boxes[4].lastElementChild.classList.contains("circle") && boxes[5].lastElementChild.classList.contains("circle")) {
            document.querySelector(".turn").textContent = "Circle WIN";
            return;
        }
        if (boxes[6].lastElementChild.classList.contains("circle") && boxes[7].lastElementChild.classList.contains("circle") && boxes[8].lastElementChild.classList.contains("circle")) {
            document.querySelector(".turn").textContent = "Circle WIN";
            return;
        }
        if (boxes[0].lastElementChild.classList.contains("circle") && boxes[3].lastElementChild.classList.contains("circle") && boxes[6].lastElementChild.classList.contains("circle")) {
            document.querySelector(".turn").textContent = "Circle WIN";
            return;
        }
        if (boxes[1].lastElementChild.classList.contains("circle") && boxes[4].lastElementChild.classList.contains("circle") && boxes[7].lastElementChild.classList.contains("circle")) {
            document.querySelector(".turn").textContent = "Circle WIN";
            return;
        }
        if (boxes[2].lastElementChild.classList.contains("circle") && boxes[5].lastElementChild.classList.contains("circle") && boxes[8].lastElementChild.classList.contains("circle")) {
            document.querySelector(".turn").textContent = "Circle WIN";
            return;
        }
        if (boxes[0].lastElementChild.classList.contains("circle") && boxes[4].lastElementChild.classList.contains("circle") && boxes[8].lastElementChild.classList.contains("circle")) {
            document.querySelector(".turn").textContent = "Circle WIN";
            return;
        }
        if (boxes[2].lastElementChild.classList.contains("circle") && boxes[4].lastElementChild.classList.contains("circle") && boxes[6].lastElementChild.classList.contains("circle")) {
            document.querySelector(".turn").textContent = "Circle WIN";
            return;
        }
        chances++;
    }
}
