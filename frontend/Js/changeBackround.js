
var backgrounds = [
    "/frontend/images/image1.jpg",
    "/frontend/images/image2.jpg",
    "/frontend/images/image3.jpg",
    "/frontend/images/image4.jpg",
    "/frontend/images/image5.jpg",
    "/frontend/images/image6.jpg",
    "/frontend/images/image7.jpg",
    "/frontend/images/image8.jpg"

  ];
  
  var index = 0;
  
  function changeBackground() {
    document.body.style.backgroundImage = "url('" + backgrounds[index] + "')";
  
    index++;
    if (index === backgrounds.length) {
      index = 0;
    }
  }
  
  setInterval(changeBackground, 4000);

