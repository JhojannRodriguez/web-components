class center {
  constructor(elements,coord){
    this.elements = [...document.querySelectorAll(elements)];
    this.start();
    this.coord = coord || 'all'
  }

  start(){
    window.addEventListener('DOMContentLoaded', () => { this.center() })
    window.addEventListener('unload', () => { this.center() })
    window.addEventListener('resize', () => { this.center() })
  }

  center(){
    let x = i => { i.style.left = (i.parentElement.clientWidth / 2 - i.clientWidth / 2)  + "px"; },
        y = i => { i.style.top = (i.parentElement.clientHeight / 2 - i.clientHeight / 2)  + "px"; };
    this.elements.map( i => {
      i.style.position =  'relative';
      if( this.coord === 'y' ) { y(i) }
      else if ( this.coord === 'x' ) { x(i) }
      else if ( this.coord === 'all' ) { y(i); x(i)}
      else { console.log('Error Centering')}
    });
  }
}

new center('.box')
