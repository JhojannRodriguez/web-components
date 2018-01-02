const containerGallery = document.querySelector('.containerLightBox');

const getImages = container => [...container.querySelectorAll('img')];

const getBigImages = imgArr => imgArr.map( i => i.src ).map( a => a.replace('thumbs','principal') );


const openBigImage = (container, arrImages, bigImg) => {
    container.addEventListener('click', e => {
    let ch = e.target,
        i = arrImages.indexOf(ch);
    if (ch.tagName === "IMG"){
      openLightbox(arrImages, i, bigImg)
    }
  })
}

const openLightbox = (arrImages, i, bigImg) => {
  let createLightbox = (cont) => {
  let overlay = document.createElement('div'),
      imgBig  = document.createElement('img'),
      nav     = document.createElement('nav'),
      buttonPrev  = document.createElement('input'),
      infoPos = document.createElement('span'),
      buttonNext  = document.createElement('input');

    overlay.setAttribute('class', 'overlay');
    cont.appendChild(overlay);

    imgBig.setAttribute('class', 'bigImage');
    imgBig.setAttribute('src', bigImg[i]);
    imgBig.setAttribute('alt', arrImages[i]);
    overlay.appendChild(imgBig);

    nav.setAttribute('class', 'navigator');
    overlay.appendChild(nav);

    buttonPrev.setAttribute('class', 'prev');
    buttonPrev.setAttribute('value', '<');
    buttonPrev.setAttribute('type', 'button');
    nav.appendChild(buttonPrev);

    infoPos.setAttribute('class', 'posNav');
    infoPos.textContent = `${i + 1} de ${arrImages.length}`;
    nav.appendChild(infoPos);

    buttonNext.setAttribute('class', 'next');
    buttonNext.setAttribute('value', '>');
    buttonNext.setAttribute('type', 'button');
    nav.appendChild(buttonNext);
  }
  createLightbox(document.body);
}

const lightboxShow = container => {
  let images = getImages(container),
      bigImage = getBigImages(images),
      clickImage = openBigImage(container, images);
  openBigImage(container, images, bigImage);
}

lightboxShow(containerGallery);
