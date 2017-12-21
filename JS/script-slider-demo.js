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
    this.builtControls();
    this.selectButton();
    if (this.time != false) { window.setInterval(this.autoMove.bind(this), this.time); }
    this.putClass()
    this.finger()
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
    window.addEventListener('touchstart', (e) => {
      let a = document.createElement('h1');
          a.style.position = 'fixed';
          a.style.top = '20px';
          a.style.left = '20px';
          a.textContent = e;
      console.log(e)
    })
  }
}

let sliderMovement = new Slider('.slider', false , ['opacity', 'show', 'rotate', 'r']);
