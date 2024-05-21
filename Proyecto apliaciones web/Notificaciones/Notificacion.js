function toggleMenu() {
    const menu = document.getElementById('menuLista');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

function toggleTable() {
    const tableMenu = document.getElementById('menuLista2');
    if (tableMenu.style.display === 'block') {
        tableMenu.style.display = 'none';
    } else {
        tableMenu.style.display = 'block';
    }
}