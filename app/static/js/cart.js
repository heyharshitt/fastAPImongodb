let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(id, name, price) {
    cart.push({id, name, price});
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

function displayCart() {
    let cartContainer = document.getElementById("cart-items");
    if (!cartContainer) return;

    let total = 0;
    cartContainer.innerHTML = "";

    cart.forEach(item => {
        total += item.price;
        cartContainer.innerHTML += `
            <div>
                <p>${item.name} - ₹${item.price}</p>
            </div>
        `;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

displayCart();
