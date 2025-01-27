// let checked = document.querySelector('#checkBtn').addEventListener('click', check);

// function check(e) {
//     let checkBtn = document.querySelector('#checkBtn').innerHTML = "<img src='images/check-mark-2.png' alt='checked circle' width='25px' height='25px'>";
//     console.log("checked");
// }

// DELETE ITEM

let firstDeleteBtn = document.querySelector('#deleteBtn').addEventListener('click', remove);

function remove(e) {
    e.target.parentNode.parentNode.remove();
}
// ADD ITEM

let addTask = document.querySelector('.addNewTaskBtn').addEventListener('click', add);


function add(e) {

    let newTask = document.createElement('li');
    newTask.className = "listItem";

    let newInput = createInput();
    let newDeleteBtn = createDeleteBtn();
    // let newCheckBtn = createCheckBtn();

    // newTask.appendChild(newCheckBtn);
    newTask.appendChild(newInput);
    newTask.appendChild(newDeleteBtn);

    let list = document.getElementById('list');
    let last = list.lastElementChild;
    
    list.insertBefore(newTask, last); // INSERTBEFORE MUST BE CALLED ON A PARENT, IN THIS CASE #LIST
}

function createInput() {
    let newInput = document.createElement('input');
    newInput.type = "text";
    newInput.className = "itemInput";
    return newInput;
}

function createDeleteBtn() {
    let newDeleteBtn = document.createElement('button');
    newDeleteBtn.className = "buttonStyling";
    newDeleteBtn.id = "deleteBtn";

    newDeleteBtn.addEventListener('click', remove);

    let newDeleteBtnImage = document.createElement('img');
    newDeleteBtnImage.src = "images/x mark.png";
    newDeleteBtnImage.alt = "x";
    newDeleteBtnImage.width = 25;
    newDeleteBtnImage.height = 25;

    newDeleteBtn.appendChild(newDeleteBtnImage);

    return newDeleteBtn;
}


