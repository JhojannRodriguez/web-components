class FullVideoWidth {
  constructor(video) {
    this.video = document.querySelector(video);
    this.dad = this.video.parentElement;
    this.start()
  }

  start(){
    this.stylesParent()
    this.stylesVideo()
    console.dir(this.video)
  }

  stylesParent(){
    this.dad.setAttribute('style', `position: absolute;width: 100%;height: 100%;overflow: hidden;z-index: -1`);
  }

  stylesVideo(){
    this.video.setAttribute('style' , `width: 100vw;height: 56.25vw;min-height: 100vh;min-width: 177.77vh;position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%)`);
  }
}

new FullVideoWidth('.fluid')
