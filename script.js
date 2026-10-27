// Two small features: (1) reveal sections on scroll, (2) highlight the current nav link.

// Tell the CSS that JavaScript works (so .reveal elements may start hidden).
document.body.classList.add("js");

var revealItems = document.querySelectorAll(".reveal");
var sections = document.querySelectorAll("main section, section");
var links = document.querySelectorAll(".nav-link");

function onScroll() {
    // 1) Show every .reveal element that has entered the screen
    for (var i = 0; i < revealItems.length; i++) {
        var top = revealItems[i].getBoundingClientRect().top;
        if (top < window.innerHeight - 60) {
            revealItems[i].classList.add("show");
        }
    }

    // 2) Find the section that is under the top of the page
    var current = "";
    for (var j = 0; j < sections.length; j++) {
        var rect = sections[j].getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
            current = sections[j].id;
        }
    }
    for (var k = 0; k < links.length; k++) {
        if (links[k].getAttribute("href") === "#" + current) {
            links[k].classList.add("active");
        } else {
            links[k].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", onScroll);
onScroll(); // run once when the page opens
