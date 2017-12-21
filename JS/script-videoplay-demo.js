class VideoPlay {
  constructor(video) {
    this.video = document.querySelector(video);
    this.bind();
  }

  bind(){
    document.addEventListener('visibilitychange', () => {
      this.stopVideoVisibility()
    })

    window.addEventListener('scroll', () => {
      this.positionVideo()
    })
  }

  stopVideoVisibility() {
      let state = document.visibilityState;
      state === 'hidden' && this.video.paused === false ?this.video.pause() : this.video.play();
  }

  positionVideo() {
    let videoPos = this.video.getBoundingClientRect();
    if (videoPos.top - window.innerHeight / 1.2 < 0 && (videoPos.top + videoPos.height) * -1.5 < 0 ) {
      this.video.play()
    }else {
      this.video.pause()
    }


  }
}

new VideoPlay('video');
