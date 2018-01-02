class preload {
  constructor(preloadElement) {
    this.preloadElement = document.querySelector(preloadElement);
    this.start();
  }

  start(){
    window.addEventListener('load', () => { setTimeout( () => { this.preloadElement.style.opacity = 0; this.preloadElement.style.zIndex = '-9999'; }, 3000)})
  }
}

new preload('.loadPage');
