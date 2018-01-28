var css = document.querySelector('h3');
var color1 = document.querySelector('.color1');
var color2 = document.querySelector('.color2');
var body = document.getElementById('gradient');

function setGradient() {
  body.style.background = 'linear-gradient(to right, ' + color1.value + ',' + color2.value + ')'; // This is using css (body.style.background) to get the color values
  css.textContent = body.style.background + ';'; // This displays the gradients rgb specifically using textContent
}

color1.addEventListener('input', setGradient); // This is listening for the values of the var color1s input and will run the function of setGradient

color2.addEventListener('input', setGradient); // This is listening for the values of the var color2s input and will run the function of setGradient
