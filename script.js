
//--Avatar creation--
let username;
let unArr;
let avatar;
const loginButton = document.getElementById('login-button');

loginButton.onclick = logInUser;

function logInUser(){
    username = prompt("What's your first and last name?");
    avatar = setAvatar(username);
    displayAvatar();
}

function setAvatar(username) {
    if (!username) {
        alert("We need a name!");
        return;
    }
    unArr = username.split(' ')
    if (unArr.length < 2) {
        alert("We need 2 names!");
        return;
    }
    return unArr[0][0] + unArr[1][0];
}

function displayAvatar() {
    loginButton.style.display = 'none';
    document.getElementById('avatar').innerText = avatar;
}
console.log('ready for you to push a button')
//---------------------Shopping Cart----------------------
const cart = [];
const items = [
    {
        name: "quarter",
        price: 500
    },
    {
        name: "half",
        price: 900
    },
    {
        name: "whole",
        price: 1500
    },
    {
        name: "steak",
        price: 12.00
    }, 
    {
        name: "roast",
        price: 8.00
    }, 
    {
        name: "ground beef",
        price: 5.00
    }, 
    {
        name: "jerky",
        price: 15.00
    }

];  
const addToCart = document.getElementsByClassName('add-to-cart');
const buttonID = document.getElementById("add-*");
addToCart.onclick = addItemToCart;

// Add to cart button(s)
function addItemToCart() {
    let item;
    if (buttonID === "quarter") {   
        item = items[0];
        cart.push(item);
    }
    if (buttonID === "half") {   
        item = items[1];
        cart.push(item);
        console.log(cart);
    }
    if (buttonID === "whole") {   
        item = items[2];
        cart.push(item);
        console.log(cart);
    }
    if (buttonID === "steak") {   
        item = items[3];
        cart.push(item);
        console.log(cart);
    }
    if (buttonID === "roast") {   
        item = items[4];
        cart.push(item);
        console.log(cart);
    }
    if (buttonID === "ground beef") {   
        item = items[5];
        cart.push(item);
        console.log(cart);
    }
    if (buttonID === "jerky") {   
        item = items[6];
        cart.push(item);
        console.log(cart);
    }
    else {
        console.log("Error: Item not found");
    }
    console.log(cart);
}


// # of items icon

// Update Cart List
function updateCartList(){}
// Update Cart Total
function updatCartTotal(){}
// Remove from Cart Button

