
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
        itemName: "quarter",
        price: 500
    },
    {
        itemName: "half",
        price: 900
    },
    {
        itemName: "whole",
        price: 1500
    },
    {
        itemName: "steak",
        price: 12.00
    }, 
    {
        itemName: "roast",
        price: 8.00
    }, 
    {
        itemName: "beef",
        price: 5.00
    }, 
    {
        itemName: "jerky",
        price: 15.00
    }

];  
const addToCart = document.getElementsByClassName('add-to-cart');
Array.from(addToCart).forEach((button) => button.onclick = addItemToCart);

// Add to cart button(s)
function addItemToCart(e) {
    let item = items.find((item) => item.itemName === e.target.id);
    if (item) {
        cart.push(item);
        quantity = getItemQuantity(item);
        getCartQuantities();
        updateCartTotal();
        }
}

function getCartQuantities(){
    let cartQuantities = {};
    for (let i = 0; i < cart.length; i++){
        if (cart[i].itemName in cartQuantities){
            cartQuantities[cart[i].itemName] += 1;
        } else {
            cartQuantities[cart[i].itemName] = 1;
        }
    }
    prettyPrintCart(cartQuantities);
}

function prettyPrintCart(cartQuantities){
    for (let key in cartQuantities){
        console.log(`You have ${cartQuantities[key]} ${key}'s in your cart`);
    }
}


function getItemQuantity(item){
    let quantity = 0;
    for (let i = 0; i < cart.length; i++){
        if (cart[i].itemName === item.itemName){
            quantity += 1;
            }
    }
    return quantity;
}

// Update Cart Total
function updateCartTotal(){
    let total = 0;
    for (let i = 0; i < cart.length; i++){
        total += cart[i].price;
    }
    console.log(`Total: ${total}`);
}

// Remove from Cart Button

