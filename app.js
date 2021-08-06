const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".header-menu");
//thêm sự kiện  click  và hàm vào 
menuToggle.addEventListener("click", function() {
    // khi nhấn vào sẽ thêm class mới 
    menu.classList.add("is-active");
});

document.addEventListener("click", function(e) {
    //kiểm tra xem khi click ra bên ngoài thì nó sẽ thụt vào 
    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
        menu.classList.remove("is-active");
    }
});