const accordion = document.querySelector(".accordion__container");

accordion.addEventListener("click", (e) => {
    let accElem = e.target.closest(".accordion__elem");

    if (accElem) {
        let isOpen = accElem.dataset.isOpen == "true";

        if (isOpen == true) accElem.setAttribute("data-is-open", "false");
        else accElem.setAttribute("data-is-open", "true");
    }
});
