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




var num = 0;
var pre = $('.reset').html(num);
$('.increase').click(function () {
    $(this).prev().html(num += 1)
});

$('.decrease').click(function () {
    $(this).next().html(num -= 1)
});