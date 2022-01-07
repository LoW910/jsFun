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
form.addEventListener('submit', addItem);

clearBtn.addEventListener('click', clearItems)


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





    } else if(!value && editFlag){
        // console.log('editing item');
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

// set back to default
function setBackToDefault() {
    console.log('set back to default');
    grocery.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit';
}

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
    // localStorage.removeItem('list');
}



// *********** LOCAL STORAGE ****************
function addToLocalStorage(id, value) {
    console.log('added to local storage');
}

// *********** SETUP ITEMS ****************


