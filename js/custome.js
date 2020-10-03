
window.addEventListener('load', function () {
    $("#loading").delay(2000).fadeOut("slow");
});

// loading checkout
document.getElementById('checkoutCart').onclick = function () {
    var check = document.getElementById('loading-checkout')
    check.style.visibility = "visible"
    check.style.display = "block"
    $("#loading-checkout").delay(5000).fadeOut("slow");

    setTimeout(() => {
        $('#visible-check').trigger("click")
        check.style.visibility = "hidden"
        check.style.opacity = 1;
    }, 4500);
    // fadeOutEffect(700, check)
}
