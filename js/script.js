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
  document.querySelectorAll("[data-scrollTo]").forEach(function (item) {
    item.onclick = function () {
      document
        .querySelector(".menu__link--active")
        .classList.remove("menu__link--active");
      item.classList.add("menu__link--active");
      let elementName = item.getAttribute("data-scrollTo");
      document.querySelector(`.${elementName}`).scrollIntoView({
        behavior: "smooth",
      });
    };
  });
  document.querySelectorAll(".project-item__button").forEach(function (button) {
    button.onclick = function () {
      let parentElement = button.parentElement;
      let description = parentElement.querySelector(
        ".project-item__description"
      );
      description.classList.toggle("project-item__description--hidden");
      if (description.classList.contains("project-item__description--hidden")) {
        button.innerHTML = "MORE DETAILS";
      } else {
        button.innerHTML = "LESS DETAILS";
      }
    };
  });
  const seeButton = document.querySelector(".section-gallery__button");
  seeButton.addEventListener("click", () => {
    const gallery = document.createElement("div");
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
