function toggleMenu() {
    const menu = document.getElementById('menuLista');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}

document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;

    
    const li = document.createElement('li');
    li.textContent = `Nombre: ${name}, Fecha: ${date}`;

    
    document.getElementById('list').appendChild(li);

    
    document.getElementById('attendanceForm').reset();
});

function toggleTable() {
    const tableMenu = document.getElementById('menuLista2');
    if (tableMenu.style.display === 'block') {
        tableMenu.style.display = 'none';
    } else {
        tableMenu.style.display = 'block';
    }
}