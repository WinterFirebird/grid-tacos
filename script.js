window.onload = function() {
    const menuToggleButton = document.querySelector("#menu-toggle-button");


    const changeAreaExpanded = ({target}) => {
        const trueOrFalse = target.getAttribute("aria-expanded") === "true" || false;
        menuToggleButton.setAttribute("aria-expanded", !trueOrFalse);
    } 


    menuToggleButton.addEventListener("click", changeAreaExpanded);




}