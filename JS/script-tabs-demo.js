class TabsNavigation{
  constructor(tabContainer, containerOptions, changeSection, changeClass){
    this.tabNavigation = document.querySelector(tabContainer);
    this.containerOptions = this.tabNavigation.querySelector(containerOptions) || this.tabNavigation.querySelector('.selectionsContainer');
    this.changeSection = this.tabNavigation.querySelector(changeSection) || this.tabNavigation.querySelector('.changeSection')
    this.changeClass = changeClass || 'active';
    this.start()
  }

  start() {
    console.log(this.changeClass)
    this.containerOptions.addEventListener('click', (e) => {
      let count = [...this.containerOptions.children].indexOf(e.target);
      [...this.containerOptions.children].map( i => {i.classList.remove(this.changeClass);});
      [...this.containerOptions.children][count].classList.add(changeClass);
    })
  }
}
new TabsNavigation('.tabContainer')
