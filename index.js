function showBillingForm() {
    let same = document.getElementById("isSame");
    if (same.checked) {
        document.getElementById("billing-form").style.display = "none";

    } else {
        document.getElementById("billing-form").style.display = "block";
    }
}

function decrementQuantity() {
    let quantity = document.getElementById('itemQuantity').innerHTML;
    let newQuantity = quantity--;
    console.log(newQuantity--);
    document.getElementById('itemQuantity').innerHTML = newQuantity;
}

function incrementQuantity() {
    let quantity = document.getElementById('itemQuantity').innerHTML;
    let newQuantity = quantity++;
    console.log(newQuantity++);
    document.getElementById('itemQuantity').innerHTML = newQuantity;
}