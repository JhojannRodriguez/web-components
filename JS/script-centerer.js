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
}(), center = function() {
    function e(t, n) {
        _classCallCheck(this, e), this.elements = [].concat(_toConsumableArray(document.querySelectorAll(t))), 
        this.start(), this.coord = n || "all";
    }
    return _createClass(e, [ {
        key: "start",
        value: function() {
            var e = this;
            window.addEventListener("DOMContentLoaded", function() {
                e.center();
            }), window.addEventListener("unload", function() {
                e.center();
            }), window.addEventListener("resize", function() {
                e.center();
            });
        }
    }, {
        key: "center",
        value: function() {
            var e = this, t = function(e) {
                e.style.left = e.parentElement.clientWidth / 2 - e.clientWidth / 2 + "px";
            }, n = function(e) {
                e.style.top = e.parentElement.clientHeight / 2 - e.clientHeight / 2 + "px";
            };
            this.elements.map(function(r) {
                r.style.position = "relative", "y" === e.coord ? n(r) : "x" === e.coord ? t(r) : "all" === e.coord ? (n(r), 
                t(r)) : console.log("Error Centering");
            });
        }
    } ]), e;
}();

new center(".box");