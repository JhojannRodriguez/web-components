class HamburguerMenu {
  constructor(trigger, menu, classAdd){
    this.triggerElement = document.querySelector(trigger);
    this.nav = document.querySelector(menu);
    this.newClass = classAdd;
    this.start();
  }

  start(){
    let spanChange = document.querySelector('.showtext');
    this.nav.addEventListener('mouseover' , e => {
      if (e.target.classList.contains('nav_button')) {
        spanChange.textContent = e.target.textContent
      }else {
        spanChange.textContent = ''
      }
    })
    this.triggerElement.addEventListener('click', () => {
      this.show()
    });
  }

  show(){
    if (this.triggerElement.children[0].classList.contains('close')){
      this.triggerElement.children[0].classList.remove('close');
      this.nav.classList.add('nav_inactive')
    } else {
      this.triggerElement.children[0].classList.add('close');
      this.nav.classList.remove('nav_inactive')
    }
  }
}

new HamburguerMenu('.icon_container', 'nav', 'close' )
