const nav = document.querySelector("nav");
const navElems = nav.querySelectorAll(".nav__elem");

let timeoutId = null;

function closedAllNavElem() {
    navElems.forEach((elem) => {
        elem.setAttribute("data-is-open", "false");
    });
}

function activetedElem(elem) {
    closedAllNavElem();

    elem.setAttribute("data-is-open", "true");
}

navElems.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
        if (timeoutId) clearTimeout(timeoutId);
        activetedElem(elem);
    });

    elem.addEventListener("mouseleave", () => {
        timeoutId = setTimeout(() => {
            closedAllNavElem();
            timeoutId = null;
        }, 150);
    });
});
