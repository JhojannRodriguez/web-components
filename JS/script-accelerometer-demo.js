class RotateZ{
	constructor(element){
		this.box = document.querySelector(element);
		this.start(this.box);
	}

	start(el){
		window.addEventListener('deviceorientation', function(e) {
			let beta = Math.round(e.beta),
					alpha = Math.round(e.gamma),
					gBeta,
					gAlpha;
			if (beta > 0 && beta < 90) {gBeta = beta / 5}
			if (alpha > -90 && alpha < 90) { gAlpha = alpha / 5}
			el.style.boxShadow = `${gAlpha}px ${gBeta}px 20px rgba(0,0,0,0.2)`
		});
	}

}

new RotateZ('.box');
