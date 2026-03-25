const caruselBody = document.querySelector(".carusel__body");

const arrowLeft = document.querySelector(".arrow__left");
const arrowRight = document.querySelector(".arrow__right");

const lenghtCaruselElem = caruselBody.children.length;
let activeElem = 0;

arrowLeft.addEventListener("click", () => {
    console.log(activeElem);
    if (activeElem > 0) {
        activeElem--;
        caruselBody.style.transform = `translate(-${600 * activeElem}px)`;
    }
});

arrowRight.addEventListener("click", () => {
    console.log(activeElem);
    if (activeElem < lenghtCaruselElem - 1) {
        activeElem++;
        caruselBody.style.transform = `translate(-${600 * activeElem}px)`;
    }
});

document.addEventListener("click", (e) => {
    console.log("событие сработало", e.target);
});
