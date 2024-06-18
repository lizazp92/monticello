$(document).ready(function () {
  $("div.header-slider").slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    speed: 500,
    easing: "ease",
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $("div.news-slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    easing: "ease",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    prevArrow: $(".section-news__prev-arrow"),
    nextArrow: $(".section-news__next-arrow"),
  });

  document
    .querySelectorAll(".whatwedo-section-item__button")
    .forEach(function (button) {
      button.onclick = function () {
        let parentElement = button.parentElement;
        let description = parentElement.querySelector(
          ".whatwedo-section-item__description"
        );
        description.classList.toggle(
          "whatwedo-section-item__description--hidden"
        );
        if (
          description.classList.contains(
            "whatwedo-section-item__description--hidden"
          )
        ) {
          button.innerHTML = "MORE DETAILS";
        } else {
          button.innerHTML = "LESS DETAILS";
        }
      };
    });
});

function initMap() {
  const myLatLng = { lat: 40.678177, lng: -73.94416 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navigation__list-item-link");
  const arrow = document.querySelector(".arrow__img");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  if (arrow) {
    arrow.addEventListener("click", function () {
      const currentSection = arrow.closest("section");
      if (currentSection) {
        const nextSection = currentSection.nextElementSibling;
        if (nextSection) {
          window.scrollTo({
            top: nextSection.offsetTop,
            behavior: "smooth",
          });
        }
      }
    });
  }
});
