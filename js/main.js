
// NAV BURGER
const burger = document.querySelector('.burger');
const list = document.querySelector('.nav__menu');

burger.addEventListener('click', function(){
    burger.classList.toggle('active');
    list.classList.toggle('active');
})


// NAV DROPDOWN
function toggleDropdown() {
    var dropdownContent = document.getElementById("myDropdown");
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
}

function selectOption(option) {
    var selectedOptionBtn = document.getElementById("selectedOption");
    selectedOptionBtn.innerHTML = option.innerHTML;

    var allOptions = document.querySelectorAll(".dropdown-content a");
    allOptions.forEach(function (opt) {
        opt.classList.remove("selected");
    });

    option.classList.add("selected");

    toggleDropdown();
}

// STICKY
window.addEventListener('scroll', function () {
    nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 5)
})