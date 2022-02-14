/* 
Scroll Event - on element or document 

  window.addEventListener('scroll', function () {
  console.log(window.scrollY + 'px');
  console.log(window.scrollX + 'px');
});

document

scrollY - returns the number of pixels the document is currently scrolled along the vertical axis (pageYOffset)


scrollX - returns the number of pixels scrolled along the horizontal axis (pageXOffset)
*/

window.addEventListener('scroll', function () {
  console.log(window.scrollY + 'px');
  console.log(window.scrollX + 'px');
});
