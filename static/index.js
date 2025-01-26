
let toggleDisplay = function(id) {
    current_display = document.getElementById(id).className;
    is_invisible = current_display == 'none' || current_display == ''
    document.getElementById(id).className = is_invisible ? 'display' : '';
}

document.getElementById("menu-button").onclick = function() {
    toggleDisplay('menu')
}