
function pagalAbecele() {
    const list = document.getElementById('list');
    const elementai = Array.from(list.children);
    const rūšiuoti = elementai.sort((a, b) => a.textContent.localeCompare(b.textContent));
    deleteList(list);
    rūšiuoti.forEach(elementas => list.appendChild(elementas));
}

function atvirkstineAbecele() {
    const list = document.getElementById('list');
    const elementai = Array.from(list.children);
    const rūšiuoti = elementai.sort((a, b) => b.textContent.localeCompare(a.textContent));
    deleteList(list);
    rūšiuoti.forEach(elementas => list.appendChild(elementas));
}

function deleteList(list) {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}
