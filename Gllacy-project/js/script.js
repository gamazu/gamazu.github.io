var feedback = document.querySelector(".feedback-button");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".popup-close");
var form = popup.querySelector(".modal-feedback__form")
var userName = popup.querySelector(".modal-feedback__user-name");
var mail = popup.querySelector(".modal-feedback__email");
var message = popup.querySelector(".modal-feedback__text");
var overlay = document.querySelector(".overlay");
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("userName");
} catch (err) {
    isStorageSupport = false;
}

feedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    overlay.classList.add("display");

    if (storage) {
        userName.value = storage;
        mail.focus();
    } else {
        userName.focus();
    }
});

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    overlay.classList.remove("display")
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function(evt) {
    if (!userName.value || !mail.value || !message.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            local.Storage.setItem("userName", userName.value);
        }
    }
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
})

var slide1 = document.querySelector(".page-slider__item-1");
var slide2 = document.querySelector(".page-slider__item-2");
var slide3 = document.querySelector(".page-slider__item-3");
var slideControl1 = document.querySelector(".page-slider__button-1");
var slideControl2 = document.querySelector(".page-slider__button-2");
var slideControl3 = document.querySelector(".page-slider__button-3");
var background = document.querySelector("body")

slideControl1.addEventListener("click", function(evt) {
    background.classList.remove("slider2-bg");
    background.classList.remove("slider3-bg");
    background.classList.add("slider1-bg");
    slide1.classList.add("slide-show");
    slide2.classList.remove("slide-show");
    slide3.classList.remove("slide-show");
    slideControl1.classList.add("page-slider__button--active");
    slideControl2.classList.remove("page-slider__button--active");
    slideControl3.classList.remove("page-slider__button--active");
})

slideControl2.addEventListener("click", function(evt) {
    background.classList.add("slider2-bg");
    background.classList.remove("slider3-bg");
    background.classList.remove("slider1-bg");
    slide2.classList.add("slide-show");
    slide1.classList.remove("slide-show");
    slide3.classList.remove("slide-show");
    slideControl2.classList.add("page-slider__button--active");
    slideControl1.classList.remove("page-slider__button--active");
    slideControl3.classList.remove("page-slider__button--active");
})

slideControl3.addEventListener("click", function(evt) {
    background.classList.remove("slider2-bg");
    background.classList.add("slider3-bg");
    background.classList.remove("slider1-bg");
    slide3.classList.add("slide-show");
    slide2.classList.remove("slide-show");
    slide1.classList.remove("slide-show");
    slideControl3.classList.add("page-slider__button--active");
    slideControl2.classList.remove("page-slider__button--active");
    slideControl1.classList.remove("page-slider__button--active");
})

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: {
            lat: 59.939202,
            lng: 30.327438
        }
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 59.938863,
            lng: 30.323214
        },
        map: map,
        icon: {
            url: './img/pin-icon-2.png',
            size: new google.maps.Size(218, 142),
            anchor: new google.maps.Point(48, 122)
        }
    });
}