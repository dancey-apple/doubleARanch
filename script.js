
//--Avatar creation--
let username;
let unArr;
let avatar;
const loginButton = document.getElementById('login-button');

loginButton.onclick = logInUser

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

//--Shopping Cart--
const cart = [];


// Shopping Cart Icon - Button
const addToCart = document.getElementById('add-quarter');
addToCart.onclick = addItemToCart;

// Add to cart button(s)
function addItemToCart() {
    const item = {
        name: "quarter",
        price: 500
    }
    cart.push(item);
    //updateCartList();
    //updateCartTotal();
    console.log(cart);
}


// # of items icon

// Add to cart button(s)

// Update Cart List
function updateCartList(){}
// Update Cart Total
function updatCartTotal(){}
// Remove from Cart Button

