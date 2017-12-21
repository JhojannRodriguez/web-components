"use strict";

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
        return n;
    }
    return Array.from(e);
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(e, i.key, i);
        }
    }
    return function(t, n, i) {
        return n && e(t.prototype, n), i && e(t, i), t;
    };
}(), slideShow = function() {
    function e(t, n) {
        _classCallCheck(this, e), this.slideShow = document.querySelector(t) || document.querySelector(".slideContainer"), 
        this.slide = [].concat(_toConsumableArray(this.slideShow.querySelectorAll(".slide"))), 
        this.counter = 0, this.start();
    }
    return _createClass(e, [ {
        key: "start",
        value: function() {
            var e = this;
            this.slideShow.style.overflow = "hidden", this.slide.map(function(e) {
                e.style.top = 0, e.style.position = "relative";
            }), window.addEventListener("load", function() {
                e.dimensions();
            }), window.addEventListener("resize", function() {
                e.dimensions();
            }), window.addEventListener("keyup", function(t) {
                e.letter(t);
            });
        }
    }, {
        key: "dimensions",
        value: function() {
            this.slideShow.style.width = innerWidth + "px", this.slideShow.style.height = innerHeight + "px";
        }
    }, {
        key: "letter",
        value: function(e) {
            "ArrowRight" === e.key ? this.counter === this.slide.length - 1 ? this.counter = this.slide.length - 1 : this.counter++ : "ArrowLeft" === e.key && (0 === this.counter ? this.counter = 0 : this.counter--), 
            this.moveHorizontal();
        }
    }, {
        key: "moveHorizontal",
        value: function() {
            var e = this;
            this.slide.map(function(t) {
                t.style.top = -100 * e.counter + "%";
            });
        }
    } ]), e;
}();

new slideShow(".slideContainer");