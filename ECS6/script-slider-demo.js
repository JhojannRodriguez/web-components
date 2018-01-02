class Slider {
  constructor(slider, time, classes) {
    this.slider = document.querySelector(slider)
    this.time = time || false;
    this.classes = classes || null;
    this.innerSlider = this.slider.querySelector('.slider_containerImages');
    this.active = 0;
    this.moveSlider();
  }

  moveSlider() {
    this.positioningSlides();
    this.builtControls();
    this.selectButton();
    if (this.time != false) { window.setInterval(this.autoMove.bind(this), this.time); }
    this.putClass()
    addEventListener('resize', () => {this.positioningSlides()})
    // this.finger()
  }

  positioningSlides(){
    let children = [...this.innerSlider.children]
    this.innerSlider.style.position = 'relative';
    for (var i = 0; i < children.length; i++) {
      children[i].style.width = this.slider.clientWidth + 'px';
      // children[i].style.position = 'absolute';
      children[i].style.left = this.slider.clientWidth * i + 'px';
      // children[i].style.top = 0;
    }
  }

  builtControls() {
    let conButtons = this.slider.querySelector('.containerControls');

    for (let a = 0; a < this.innerSlider.children.length ; a++) {
      let button = document.createElement('li');
      conButtons.appendChild(button);
    }

    conButtons.children[0].classList.add('control_active');

  }

  selectButton() {
    let conButtons = this.slider.querySelector('.containerControls');
    conButtons.addEventListener('click', e => {
      this.active = [...conButtons.children].indexOf(e.target);
      if (this.active != -1) { this.move(); this.getActive(); this.putClass()};
    });
  }

  move() {
    this.innerSlider.style.transform = `translateX(${this.active * -100}%)`;
  }

  getActive() {
    let buttons = [...this.slider.querySelector('.containerControls').children];
    buttons.map( i => { i.classList.contains('control_active') ? i.classList.remove('control_active') : false});
    buttons[this.active].classList.add('control_active');
  }

  autoMove(){
    if(this.active === this.innerSlider.children.length - 1){ this.active = 0 }else{this.active++};
    this.putClass()
    this.move();
    this.getActive();
  }

  putClass(){
    [...this.innerSlider.children[this.active].children].map( i => { i.classList.remove(this.classes[this.active]); window.setTimeout( () => { i.classList.add(this.classes[this.active]) } , 10); })
  }

  finger(){
    // let getMove = (e) => { console.log(window.event) };
    // this.slider.addEventListener('mousedown', getMove())
    // this.slider.addEventListener('mouseup', () => { this.slider.removeEventListener('mousedown', getMove()) })
  }
}

let sliderMovement = new Slider('.slider', false , ['opacity', 'show', 'rotate', 'r']);
