"use strict";

function _classCallCheck(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function e(e, n) {
        for (var t = 0; t < n.length; t++) {
            var s = n[t];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(e, s.key, s);
        }
    }
    return function(n, t, s) {
        return t && e(n.prototype, t), s && e(n, s), n;
    };
}(), Sticky = function() {
    function e(n, t) {
        _classCallCheck(this, e), this.stickyElement = document.querySelector(n), this.changeClass = t, 
        this.positionElement();
    }
    return _createClass(e, [ {
        key: "positionElement",
        value: function() {
            var e = this;
            window.addEventListener("scroll", function(n) {
                e.stickyElement.getBoundingClientRect().top <= 0 ? e.stickyElement.classList.add(e.changeClass) : e.stickyElement.classList.remove(e.changeClass);
            });
        }
    } ]), e;
}();

new Sticky("nav", "pinned");