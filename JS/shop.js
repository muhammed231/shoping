let cart = document.querySelector('.cart');
let input = document.querySelector('#input');

window.addEventListener('DOMContentLoaded', displayList);


//Add to Cart Press Enter
window.addEventListener('keypress', key=>{
    if(key.keyCode == 13) {
        if(input.value){
           addToCart(input.value);
           saveToStorage(input.value);
           input.value = '';
        } else { 
            console.log('Please input Value');
        }
    }
});

function addToCart(list) {
    const div = document.createElement('div');
    div.classList.add('div-bg');
    div.innerHTML = input.value;

    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerHTML = 'Delete';

    div.appendChild(btn);
    cart.appendChild(div)

    btn.addEventListener('click', ()=> {
        div.remove();
    });
}

function saveToStorage() {
    let listItem;
    if (localStorage.getItem('listItem') === null){
        listItem = [];
    } else {
        listItem = JSON.parse(localStorage.getItem('listItem'));
    }

    listItem.push(list);
    localStorage.setItem('list Item', JSON.stringify(listItem));
}

function displayList () {
    let listItem;
    if (localStorage.getItem('listItem') === null){
        listItem = [];
    } else {
        listItem = JSON.parse(localStorage.getItem('listItem'));
    }

    listItem.forEach(function(list) {
        const div = document.createElement('div');
        div.classList.add('div-bg');
        div.innerHTML = list;
    
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerHTML = 'Delete';
    
        div.appendChild(btn);
        cart.appendChild(div)
    
        btn.addEventListener('click', ()=> {
            deleteList(list);
            div.remove();
        }); 
    });
}

function deleteList (list){
    let listItem;
    if(localStorage.getItems('listItem') === null){
        listItem = [];
    } else {
        listItem = JSON.parse(localStorage.getItem('listItem'));
    }

    const listIndex = listItem.indexOf(list);
    listItem.splice(list);
    localStorage.setItem('listItem', JSON.stringify(listItem));
}