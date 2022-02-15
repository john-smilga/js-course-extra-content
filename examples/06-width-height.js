/*
innerWidth - The read-only Window property the interior width of the window in pixels

innerHeight - The read-only property of the Window interface returns the interior height of the window in pixels

The Element.getBoundingClientRect() method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.

 */

console.log('height : ' + window.innerWidth);
console.log('width : ' + window.innerHeight);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', function () {
  const values = box.getBoundingClientRect();
  console.log(values);
});
