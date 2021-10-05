// header controller

var listParent = document.querySelector('.list-parent');

listParent.onclick = function openBox() {

    listParent.classList.toggle("expand");
}

// sliders

$(document).ready(function () {


    $('.news__slider').owlCarousel({
        loop: true,
        margin: 39,
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            800: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                padding: 10,
            }
        }
    })

    $('.partner-slider').owlCarousel({
        loop: true,
        margin: 40,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            800: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 4,
                nav: true,
            }
        }
    })


    $('.clients-slider').owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    $('.vehicle-slider').owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

});


if ($("#datepicker-1")[0]) {
    $("#datepicker-1").datepicker();
}
if ($("#datepicker-2")[0]) {
    $("#datepicker-2").datepicker();
}
if ($("#datepicker-3")[0]) {
    $("#datepicker-3").datepicker();
}









if ($(".passengers-number")[0]) {
    // passengers counter

    let counterDisplayElem = document.querySelector('.passengers-number');
    let counterMinusElem = document.querySelector('.decrease');
    let counterPlusElem = document.querySelector('.increase');

    let count = 0;

    updateDisplay();

    counterPlusElem.addEventListener("click", () => {
        count++;
        updateDisplay();
    });

    counterMinusElem.addEventListener("click", () => {
        count--;
        updateDisplay();
    });

    function updateDisplay() {
        counterDisplayElem.innerHTML = count;
    };
}
if ($(".check-box")[0]) {
    // check box

    var checkBox = document.querySelector('.check-box');

    checkBox.onclick = function checkTheBox() {

        checkBox.classList.toggle("selected");
    }
}