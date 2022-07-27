// disable right click
// window.addEventListener('contextmenu', function (event) {
//   event.preventDefault();
//   var contextElement = document.getElementById('context-menu');
//   contextElement.style.top = event.offsetY + 'px';
//   contextElement.style.left = event.offsetX + 'px';
//   contextElement.classList.add('active');
// });
// window.addEventListener('click', function () {
//   var contextElement = document.getElementById('context-menu').classList.remove('active');
// });

//disable shortcut nyari ini ya pak???
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    return false;
  }

  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
    return false;
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
    return false;
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode == 'U'.charCodeAt(0)) {
    return false;
  }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.keyCode == 'M'.charCodeAt(0)) {
    return false;
  }
  if ((e.ctrlKey || e.metaKey) && e.keyCode == 'M'.charCodeAt(0)) {
    return false;
  }
  if ((e.ctrlKey || e.metaKey) && e.keyCode == 'I'.charCodeAt(0)) {
    return false;
  }
};

// countdown
var countDate = new Date('Aug 1, 2022 00:00:00').getTime();

function dateNew() {
  var now = new Date().getTime();
  gap = countDate - now;

  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  var d = Math.floor(gap / day);
  var h = Math.floor((gap % day) / hour);
  var m = Math.floor((gap % hour) / minute);
  var s = Math.floor((gap % minute) / second);

  document.getElementById('day').innerText = d;
  document.getElementById('hour').innerText = h;
  document.getElementById('minute').innerText = m;
  document.getElementById('second').innerText = s;
}

setInterval(function () {
  dateNew();
}, 1000);

let LayerPertama = document.getElementsByClassName('layer1')[0];
let LayerKedua = document.getElementsByClassName('layer2')[0];
let LayerKetiga = document.getElementsByClassName('layer3')[0];
let LayerKeempat = document.getElementsByClassName('layer4')[0];
let LayerKelima = document.getElementsByClassName('layer5')[0];
let LayerKeenam = document.getElementsByClassName('layer6')[0];
let LayerKetujuh = document.getElementsByClassName('layer7')[0];
let LayerKedelapan = document.getElementsByClassName('layer8')[0];
let LayerKesembilan = document.getElementsByClassName('layer9')[0];
let LogoVestra = document.getElementsByClassName('logves')[0];
let Vestra = document.querySelector('#landing h1');
let Button = document.querySelector('.btn');

window.addEventListener('scroll', function () {
  let value = window.scrollY;

  LayerKedua.style.left = value * 0.9 + 'px';
  LayerKedua.style.bottom = value * 0.8 + 'px';
  LayerPertama.style.top = value * 0.7 + 'px';
  LayerKeenam.style.bottom = value * 0.7 + 'px';
  LayerKetujuh.style.bottom = value * 0.7 + 'px';
  LayerKetiga.style.bottom = value * 0.3 + 'px';
  LayerKesembilan.style.left = value * 2 + 'px';
  LayerKesembilan.style.top = value * 1 + 'px';
  LayerKedelapan.style.top = value * 0 + 'px';
  Vestra.style.right = value * 0.7 + 'px';
  LogoVestra.style.bottom = value * 1 + 'px';
});
