class UploadFile {
  constructor(inputfile, background){
    this.element = document.querySelector(inputfile);
    this.backgroundSet = document.querySelector(background);
    this.capture();
  }
  capture(){
    this.element.addEventListener( 'change' , (e) => {
      let image = e.target.files[0];
      let imageURL = URL.createObjectURL(image);
      this.setImage(imageURL)

    })
  }

  setImage(URL){
    this.backgroundSet.style.backgroundImage = `url('${URL}')`
  }
}

new UploadFile('#fileinput', '.imageProfile');
