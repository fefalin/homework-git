let flkty = new Flickity(".slider", {
  setGallerySize: true,
  pageDots: false,
  initialIndex: 2 
});

let $carousel = $(".slider").flickity({
  cellAlign: 'center',
  contain: true
});

$(".slider").on("mousewheel", function (event) {
  event.preventDefault(); 
  if (event.deltaY == -1) {
    $carousel.flickity("previous");
  }

  if (event.deltaY == 1) {
    $carousel.flickity("next");
  }
});