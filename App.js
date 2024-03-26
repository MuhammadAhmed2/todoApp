let input = document.querySelector('#inputBox');
let ol = document.querySelector('ol');
let arr = [];

function app() {
    arr.push(input.value);
    input.value = '';
    render();
}

function render() {
    ol.innerHTML = '';
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `
            <li>
                ${arr[i]}
                <button onClick="Edit(${i})" class="delete-btn">Edit</button>
                <button onClick="del(${i})" class="edit-btn">Delete</button>
            </li>
        `;
    }
}

function Edit(i) {
    let change = prompt("Enter The Updated Value");
    if (change !== null) { // Check if user canceled prompt
        arr[i] = change;
        render();
    }
}

function del(i) {
    arr.splice(i,1)
    render();
}