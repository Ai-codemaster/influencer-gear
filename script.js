let menu_icon = document.getElementById("menu_icon");
let main_menu = document.getElementById("main_menu");

menu_icon.addEventListener("click", () => {
    main_menu.classList.toggle('hidden');
})