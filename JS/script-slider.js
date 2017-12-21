'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slider = function () {
  function Slider(slider, time, classes) {
    _classCallCheck(this, Slider);

    this.slider = document.querySelector(slider);
    this.time = time || false;
    this.classes = classes || null;
    this.innerSlider = this.slider.querySelector('.slider_containerImages');
    this.active = 0;
    this.moveSlider();
  }

  _createClass(Slider, [{
    key: 'moveSlider',
    value: function moveSlider() {
      this.builtControls();
      this.selectButton();
      if (this.time != false) {
        window.setInterval(this.autoMove.bind(this), this.time);
      }
      this.putClass();
      this.finger();
    }
  }, {
    key: 'builtControls',
    value: function builtControls() {
      var conButtons = this.slider.querySelector('.containerControls');

      for (var a = 0; a < this.innerSlider.children.length; a++) {
        var button = document.createElement('li');
        conButtons.appendChild(button);
      }

      conButtons.children[0].classList.add('control_active');
    }
  }, {
    key: 'selectButton',
    value: function selectButton() {
      var _this = this;

      var conButtons = this.slider.querySelector('.containerControls');
      conButtons.addEventListener('click', function (e) {
        _this.active = [].concat(_toConsumableArray(conButtons.children)).indexOf(e.target);
        if (_this.active != -1) {
          _this.move();_this.getActive();_this.putClass();
        };
      });
    }
  }, {
    key: 'move',
    value: function move() {
      this.innerSlider.style.transform = 'translateX(' + this.active * -100 + '%)';
    }
  }, {
    key: 'getActive',
    value: function getActive() {
      var buttons = [].concat(_toConsumableArray(this.slider.querySelector('.containerControls').children));
      buttons.map(function (i) {
        i.classList.contains('control_active') ? i.classList.remove('control_active') : false;
      });
      buttons[this.active].classList.add('control_active');
    }
  }, {
    key: 'autoMove',
    value: function autoMove() {
      if (this.active === this.innerSlider.children.length - 1) {
        this.active = 0;
      } else {
        this.active++;
      };
      this.putClass();
      this.move();
      this.getActive();
    }
  }, {
    key: 'putClass',
    value: function putClass() {
      var _this2 = this;

      [].concat(_toConsumableArray(this.innerSlider.children[this.active].children)).map(function (i) {
        i.classList.remove(_this2.classes[_this2.active]);window.setTimeout(function () {
          i.classList.add(_this2.classes[_this2.active]);
        }, 10);
      });
    }
  }, {
    key: 'finger',
    value: function finger() {
      window.addEventListener('touchstart', function (e) {
        var a = document.createElement('h1');
        a.style.position = 'fixed';
        a.style.top = '20px';
        a.style.left = '20px';
        a.textContent = e;
        console.log(e);
      });
    }
  }]);

  return Slider;
}();

var sliderMovement = new Slider('.slider', false, ['opacity', 'show', 'rotate', 'r']);