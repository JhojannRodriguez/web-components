window.addEventListener('load', e => {
  e.preventDefault();
  e.returnValue = false;
  let o = document.createElement('div'),
    s = document.createElement('span');

  o.classList.add('fixed_overlay');
  document.body.appendChild(o);
  s.classList.add('fixedText');
  s.textContent = document.title + '...';
  o.appendChild(s)
  o.style.animation = 'app 2s reverse';
  s.style.top = (innerHeight / 2) - (s.clientHeight / 2) + "px";
  s.style.left = (innerWidth / 2) - (s.clientWidth / 2) + "px";
  setTimeout( () => {o.remove()} , 2000)
})
