// *********** SELECT ITEMS ****************
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// *********** EDIT OPTION ****************
let editElement;
let editFlag = false;
let editId = "";
// *********** EVENT LISTENERS ****************
// submit form
form.addEventListener('submit', addItem);

// clear items
clearBtn.addEventListener('click', clearItems)

// load items
window.addEventListener('DOMContentLoaded', setupItems);


// *********** FUNCTIONS ****************

// add item
function addItem(e) {
    e.preventDefault();
    // console.log(grocery.value);
    const value = grocery.value;
    const id = new Date().getTime().toString();
    // console.log(id);

   // add item to list
    if(value && !editFlag) {
        // console.log('adding item to the list');

        const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        
        // id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');

        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem)

        // append child
        list.appendChild(element);
        // display alert
        displayAlert("Item added to the list", "success");
        // show container
        container.classList.add('show-container');
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default
        setBackToDefault();


    } else if(value && editFlag){
        console.log('editing item');
        editElement.innerHTML = value;
        displayAlert('Value Changes', 'success');
        // edit local storage(editId,value)
        editLocalStorage(editId,value);
        setBackToDefault();

    } else{
        // console.log('empty string');
        displayAlert('Please enter a value', 'danger')
    }
}

// display alert
function displayAlert(text, action) {
    
    // add alert
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    // remove alert after one second
    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}    

// delete btn function
function deleteItem(e) {
    // console.log('item deleted');
    const element= e.currentTarget.parentElement.parentElement;
    // console.log(element);
    const id = element.dataset.id;
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove('show-container');
    }
    displayAlert('Item removed', 'danger')
    setBackToDefault();
    // remove from local storage
    removeFromLocalStorage(id); 
}


// edit btn function
function editItem(e) {
    // console.log('edited item');
    const element= e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = 'edit';

}

// set back to default
function setBackToDefault() {
    // console.log('set back to default');
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit';
}

// to clear items from grocery list
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0) {
        items.forEach(function(item) {
            list.removeChild(item);
        })
    }
    container.classList.remove('show-container');
    displayAlert('empty list', 'danger')
    setBackToDefault();
    localStorage.removeItem('list');
}



// *********** LOCAL STORAGE ****************
function addToLocalStorage(id, value) {
    const grocery = {id, value};
    // console.log(grocery);
    let items = getLocalStorage();
        console.log(items);
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items));
}

function getLocalStorage() {
    return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem('list'))
    : [];
}

function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item) {
        console.log(item);
        if(item.id !== id) {
            return item
        }
    })
    localStorage.setItem('list', JSON.stringify(items));
}

function editLocalStorage(id, value) {
    console.log('editing local storage');
    let items = getLocalStorage();
    items = items.map(function(item) {
        if(item.id === id) {
            item.value = value;
        }
        return item;
    });
    localStorage.setItem('list', JSON.stringify(items));
    
}


// localStorage API
// setItem
// getItem
// removeItem 
// save as string
// localStorage.setItem("orange", JSON.stringify(["item", "item2"]));
// const oranges = JSON.parse(localStorage.getItem('orange'));
// // console.log(oranges);
// localStorage.removeItem('orange');

// *********** SETUP ITEMS ****************

function setupItems() {
    let items = getLocalStorage();
    if(items.length > 0) {
        items.forEach(function(item){
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }
}

function createListItem(id, value){
    const element = document.createElement('article');
        // add class
        element.classList.add('grocery-item');
        
        // id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
        <p class="title">${value}</p>
        <div class="btn-container">
            <button class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`
        const deleteBtn = element.querySelector('.delete-btn');
        const editBtn = element.querySelector('.edit-btn');

        deleteBtn.addEventListener('click', deleteItem);
        editBtn.addEventListener('click', editItem)

        // append child
        list.appendChild(element);
}


