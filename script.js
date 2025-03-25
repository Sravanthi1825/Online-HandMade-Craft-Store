let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalDisplay = document.getElementById("cart-total");

    cartList.innerHTML = "";
    cart.forEach((craft, index) => {
        let li = document.createElement("li");
        li.textContent = `${craft.item} - $${craft.price.toFixed(2)}`;
        cartList.appendChild(li);
    });

    totalDisplay.textContent = totalPrice.toFixed(2);
}

function checkout() {
    if (cart.length === 0) {
        alert("No items selected!");
    } else {
        alert(`Purchase Confirmed! Total: $${totalPrice.toFixed(2)}`);
        cart = [];
        totalPrice = 0;
        updateCart();
    }
}
