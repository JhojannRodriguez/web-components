let cont = document.querySelector('.indexListContainer');

cont.addEventListener('click', e => { if(e.target.nodeName === "A"){ e.preventDefault();
  let t = document.createElement('span'),
      o = document.createElement('div'),
      word = e.target.textContent + '...',
      fS = 0,
      tR = "",
      time = 2000 / word.length;
  o.classList.add('fixed_overlay');
  document.body.appendChild(o);
  t.classList.add('fixedText');
  o.appendChild(t);
  document.body.style.height = window.innerHeight + 'px'
  document.body.style.overflow = 'hidden'
  // t.style.top = (innerHeight / 2) - (t.clientHeight / 2 ) + "px" ; ; t.style.left = (innerWidth / 2) - (t.clientWidth / 2 ) + "px" ;

  setInterval( () => {  fS > word.length - 1 ? fS = word.length :tR += word[fS]; fS++; t.textContent = tR; t.style.top = (innerHeight / 2) - (t.clientHeight / 2 ) + "px" ;  t.style.left = (innerWidth / 2) - (t.clientWidth / 2 ) + "px" ;} , time);
  setTimeout( () => { location.href = e.target.href }, 2000)
  }
})
