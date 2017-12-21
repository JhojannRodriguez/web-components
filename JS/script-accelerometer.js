"use strict";

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var a = e[n];
            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), 
            Object.defineProperty(t, a.key, a);
        }
    }
    return function(e, n, a) {
        return n && t(e.prototype, n), a && t(e, a), e;
    };
}(), RotateZ = function() {
    function t(e) {
        _classCallCheck(this, t), this.box = document.querySelector(e), this.start(this.box);
    }
    return _createClass(t, [ {
        key: "start",
        value: function(t) {
            window.addEventListener("deviceorientation", function(e) {
                var n = Math.round(e.beta), a = Math.round(e.gamma), o = void 0, r = void 0;
                n > 0 && n < 90 && (o = n / 5), a > -90 && a < 90 && (r = a / 5), t.style.boxShadow = r + "px " + o + "px 20px rgba(0,0,0,0.2)";
            });
        }
    } ]), t;
}();

new RotateZ(".box");