document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector("#check");
    const sidebar = document.querySelector(".sidebar");
    const header = document.querySelector("header");
    const content = document.querySelector(".content");

    menuToggle.addEventListener("change", function() {
        if (menuToggle.checked) {
            sidebar.classList.add("open");
            header.style.marginLeft = "250px";
            content.style.marginLeft = "250px";
        } else {
            sidebar.classList.remove("open");
            header.style.marginLeft = "0";
            content.style.marginLeft = "0";
        }
    });
});

function toggleSubMenu(id) {
    var submenu = document.getElementById(id);
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
}








