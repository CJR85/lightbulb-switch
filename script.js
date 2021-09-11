let btn = document.getSelection('.btn'),
  body = document.querySelector('body');
btn.onclick = function () {
  body.classList.toggle('on');
};
