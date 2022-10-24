var slideIndex_promotion = 1;
showImgs(slideIndex_promotion);

function plusIndex(m) {
  showImgs(slideIndex_promotion += m);
}

function showImgs(m) {
  var j;
  var y = document.getElementsByClassName("promotion_slide");
  if (m > y.length) {slideIndex_promotion = 1}
  if (m < 1) {slideIndex_promotion = y.length}
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  y[slideIndex_promotion-1].style.display = "block";  
}

var slideIndex = 1;
showDivs(slideIndex);
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("Company_profile_slide");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}