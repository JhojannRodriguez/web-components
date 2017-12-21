class slideShow {
  constructor(slideshow,coor) {
    this.slideShow = document.querySelector(slideshow) || document.querySelector('.slideContainer');
    this.slide = [...this.slideShow.querySelectorAll('.slide')];
    this.counter = 0;
    this.start();
  }
  start(){
    this.slideShow.style.overflow = 'hidden';
    this.slide.map( i => { i.style.top = 0; i.style.position = 'relative';})
    window.addEventListener('load', () => { this.dimensions() } )
    window.addEventListener('resize', () => { this.dimensions() } )
    window.addEventListener('keyup', (e) => { this.letter(e) } )
  }

  dimensions(){
    this.slideShow.style.width = innerWidth + 'px';
    this.slideShow.style.height = innerHeight + 'px';
  }

  letter(e){
    if (e.key === 'ArrowRight') {
      if (this.counter === this.slide.length-1) {
        this.counter = this.slide.length-1;
      }else{
        this.counter++
      }
    }else if (e.key === 'ArrowLeft') {
      if (this.counter === 0) {
        this.counter = 0;
      }else {
        this.counter--;
      }
    }

    this.moveHorizontal()
  }

  moveHorizontal(){
    this.slide.map( i => {
      i.style.top = (-100 * this.counter) + '%';
    })
  }
}

new slideShow('.slideContainer');
