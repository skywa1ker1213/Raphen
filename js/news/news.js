function openTab(tabId) {
    var i, tabContent, tabButtons;

    // Получаем все элементы с классом "tab" и скрываем их
    tabContent = document.getElementsByClassName("tab");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Получаем все кнопки вкладок и удаляем класс "active"
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }

    // Показываем содержимое выбранной вкладки и добавляем класс "active" к кнопке
    document.getElementById(tabId).style.display = "block";
    event.currentTarget.className += " active";
}