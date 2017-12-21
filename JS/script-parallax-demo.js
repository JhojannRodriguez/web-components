class Parallax{
  constructor(elements){
    this.elements = [...document.querySelectorAll(elements)];
    this.start();
  }

  start(){
    window.addEventListener('unload', () => { this.gettingValues() } )
    window.addEventListener('scroll', () => { this.gettingValues() } )
  }

  gettingValues(){
    let valueEnd;
    this.elements.map( i => {
      let variation = Number(i.getAttribute('data-scroll')) || 80,
          valueReturn = window.scrollY / (variation * 5);
      i.style.transform =  `scale(${valueReturn + 1}) translateY(${valueReturn / variation}px) rotate(${valueReturn}deg)`;
      valueEnd = valueReturn;
    })
  }

}

new Parallax('.change');
