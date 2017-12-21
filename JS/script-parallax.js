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
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(e, r.key, r);
        }
    }
    return function(t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t;
    };
}(), Parallax = function() {
    function e(t) {
        _classCallCheck(this, e), this.elements = [].concat(_toConsumableArray(document.querySelectorAll(t))), 
        this.start();
    }
    return _createClass(e, [ {
        key: "start",
        value: function() {
            var e = this;
            window.addEventListener("unload", function() {
                e.gettingValues();
            }), window.addEventListener("scroll", function() {
                e.gettingValues();
            });
        }
    }, {
        key: "gettingValues",
        value: function() {
            var e = void 0;
            this.elements.map(function(t) {
                var n = Number(t.getAttribute("data-scroll")) || 80, r = window.scrollY / (5 * n);
                t.style.transform = "scale(" + (r + 1) + ") translateY(" + r / n + "px) rotate(" + r + "deg)", 
                e = r;
            });
        }
    } ]), e;
}();

new Parallax(".change");