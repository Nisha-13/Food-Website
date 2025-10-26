AOS.init();

let lastButton = document.getElementById("button1");
function changebg(button) {
  if (lastButton && lastButton !== button) {
    lastButton.classList.remove("active");
  }
  button.classList.add("active");
  lastButton = button;
}



$("#counter").countMe(4, 7);

$("#count").countMe(5, 5);
$("#counting").countMe(5, 5);



let mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




$(document).ready(function () {

    // Loop through each product card
    $('.product-detail.p2').each(function () {
        let $product = $(this);
        let $quantity = $product.find('.reset');
        let $price = parseFloat($product.find('.line1').first().text().replace('$', ''));
        let $total = $product.find('.line1').eq(1);

        // Set initial total
        let qty = parseInt($quantity.text());
        $total.text(`$${($price * qty).toFixed(2)}`);

        // Increase quantity
        $product.find('.increase').on('click', function () {
            qty = parseInt($quantity.text());
            qty++;
            $quantity.text(qty);
            $total.text(`$${($price * qty).toFixed(2)}`);
        });

        // Decrease quantity
        $product.find('.decrease').on('click', function () {
            qty = parseInt($quantity.text());
            if (qty > 1) {
                qty--;
                $quantity.text(qty);
                $total.text(`$${($price * qty).toFixed(2)}`);
            }
        });

        // Remove item with confirmation
        $product.find('.close').on('click', function (e) {
            e.preventDefault();
            let confirmDelete = confirm("Are you sure you want to remove this product?");
            if (confirmDelete) {
                $product.fadeOut(300, function () {
                    $(this).remove();
                });
            }
