var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("images");
  var captions = document.getElementsByClassName('captions')
  for (i = 0; i < slides.length; i++) {
    // slides[i].style.width = "0";  
    slides[i].style.height = "0"; 
    captions[i].style.fontSize = '0';
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
//   slides[slideIndex-1].style.width = "100%"; 
  slides[slideIndex-1].style.height = "500px";  
  captions[slideIndex-1].style.fontSize = "20"
  setTimeout(showSlides, 3500); 
}



