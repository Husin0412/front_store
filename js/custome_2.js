// Initiate zoom effect:
imageZoom("figure-img", "myresult");

var b = document.querySelector('.figure-img'),
    active = document.querySelector('.product-tumb-hover > a');

function selectThumbnail(e) {
    var a = e.innerHTML.split("src")["1"],
        c = a.split("=")["1"],
        c = c.split(">")[0],
        c = c.split('"')["1"];
    fadeOutEffect(110)
    b.src = "img/gif/loading_card5.gif"

    // effec delay
    function fadeOutEffect(del) {
        var b = document.querySelector(".figure-img");
        var fadeEffect = setInterval(function () {
            if (!b.style.opacity) {
                b.style.opacity = 1;
            }
            if (b.style.opacity > 0) {
                b.style.opacity -= 0.1;
            } else {
                clearInterval(fadeEffect);
                b.style.opacity = 1;
                b.src = c
                imageZoom("figure-img", "myresult");
            }
        }, del);
    }

}

// effect active
var header = document.getElementById("myFigration"),
    btns = header.getElementsByClassName("a-thumbnail");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active-tumbnail");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("active-tumbnail", "");
        }
        this.className += " active-tumbnail";
    });
}