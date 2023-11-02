function decreaseQuantity1() {
    const input = button.parentElement.querySelector("quantity-input-1");
    let value = parseInt(input.value, 10);

    if (value >= 1) {
        value--;
    }

    const quantityInput1 = document.getElementById("quantity-input-1");
    quantityInput1.value = value;
    updateTotal(input);
}

function updateTotal(input) {
    const productInfo = input.closest('.product-info');
    const price = parseFloat(productInfo.querySelector('p').textContent.replace('Price: $', ''));
    const quantity = parseInt(input.value, 10);
    const total = (price * quantity).toFixed(2);
    productInfo.querySelector('.total').textContent = `Pre' total: $${total} lei`;
}
