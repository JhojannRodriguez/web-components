class Sticky {
  constructor(element, classNew){
    this.stickyElement = document.querySelector(element);
    this.changeClass = classNew;
    this.positionElement()
  }

  positionElement(){
    window.addEventListener('scroll', (e) => {
      let coords = this.stickyElement.getBoundingClientRect();
      coords.top <= 0 ? this.stickyElement.classList.add(this.changeClass) :  this.stickyElement.classList.remove(this.changeClass)
    })
  }


}


new Sticky('nav' , 'pinned')
