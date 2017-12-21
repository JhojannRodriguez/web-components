"use strict";

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var s = t[n];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(e, s.key, s);
        }
    }
    return function(t, n, s) {
        return n && e(t.prototype, n), s && e(t, s), t;
    };
}(), HamburguerMenu = function() {
    function e(t, n, s) {
        _classCallCheck(this, e), this.triggerElement = document.querySelector(t), this.nav = document.querySelector(n), 
        this.newClass = s, this.start();
    }
    return _createClass(e, [ {
        key: "start",
        value: function() {
            var e = this, t = document.querySelector(".showtext");
            this.nav.addEventListener("mouseover", function(e) {
                e.target.classList.contains("nav_button") ? t.textContent = e.target.textContent : t.textContent = "";
            }), this.triggerElement.addEventListener("click", function() {
                e.show();
            });
        }
    }, {
        key: "show",
        value: function() {
            this.triggerElement.children[0].classList.contains("close") ? (this.triggerElement.children[0].classList.remove("close"), 
            this.nav.classList.add("nav_inactive")) : (this.triggerElement.children[0].classList.add("close"), 
            this.nav.classList.remove("nav_inactive"));
        }
    } ]), e;
}();

new HamburguerMenu(".icon_container", "nav", "close");