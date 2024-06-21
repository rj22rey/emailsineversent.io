let cart = [];

function addToCart(item, price) {
    cart.push({ item, price });
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const total = document.getElementById('total');
    cartItems.innerHTML = '';
    let totalPrice = 0;

    cart.forEach((cartItem, index) => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${cartItem.item} - $${cartItem.price.toFixed(2)}`;
        cartItems.appendChild(itemElement);
        totalPrice += cartItem.price;
    });

    total.textContent = `Total: $${totalPrice.toFixed(2)}`;
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Proceeding to checkout. Please integrate with a payment gateway.');
    // Here you would normally redirect to a payment page or initiate payment process
});

document.addEventListener('DOMContentLoaded', () => {
    const messages = document.querySelectorAll('.blog');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    messages.forEach(message => {
        observer.observe(message);
    });
});

window.onload = function() {
    var messages = document.querySelectorAll('.message');

    messages.forEach(function(message) {
        var randomTexture = Math.floor(Math.random() * 5) + 1; // Generate random number between 1 and 5
        message.style.backgroundImage = `url('sticky_note_texture${randomTexture}.png')`; // Set background image
    });
}
