const quantityControls = document.querySelectorAll('.quantity-control');
const dineInCheck = document.getElementById('dineInCheck');
const checkoutButton = document.getElementById('checkoutButton');
const subtotalElement = document.querySelector('.card-body p:first-child');

quantityControls.forEach(control => {
    const quantityElement = control.querySelector('.quantity');
    const subtractButton = control.querySelector('.btn-danger');
    const addButton = control.querySelector('.btn-success');

    subtractButton.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            // Update subtotal here
        }
    });

    addButton.addEventListener('click', () => {
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        // Update subtotal here
    });
});

dineInCheck.addEventListener('change', () => {
    // Update subtotal based on dine-in checkbox
});

checkoutButton.addEventListener('click', () => {
    // Handle checkout logic (e.g., redirect to payment page)
});