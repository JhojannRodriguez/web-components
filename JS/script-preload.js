"use strict";

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function e(e, t) {
        for (var n = 0; n < t.length; n++) {
            var a = t[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(e, a.key, a);
        }
    }
    return function(t, n, a) {
        return n && e(t.prototype, n), a && e(t, a), t;
    };
}(), preload = function() {
    function e(t) {
        _classCallCheck(this, e), this.preloadElement = document.querySelector(t), this.start();
    }
    return _createClass(e, [ {
        key: "start",
        value: function() {
            var e = this;
            window.addEventListener("load", function() {
                setTimeout(function() {
                    e.preloadElement.style.opacity = 0, e.preloadElement.style.zIndex = "-9999";
                }, 3e3);
            });
        }
    } ]), e;
}();

new preload(".loadPage");