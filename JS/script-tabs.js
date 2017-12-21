"use strict";

function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var n = 0, a = Array(t.length); n < t.length; n++) a[n] = t[n];
        return a;
    }
    return Array.from(t);
}

function _classCallCheck(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function t(t, n) {
        for (var a = 0; a < n.length; a++) {
            var e = n[a];
            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), 
            Object.defineProperty(t, e.key, e);
        }
    }
    return function(n, a, e) {
        return a && t(n.prototype, a), e && t(n, e), n;
    };
}(), TabsNavigation = function() {
    function t(n, a, e, r) {
        _classCallCheck(this, t), this.tabNavigation = document.querySelector(n), this.containerOptions = this.tabNavigation.querySelector(a) || this.tabNavigation.querySelector(".selectionsContainer"), 
        this.changeSection = this.tabNavigation.querySelector(e) || this.tabNavigation.querySelector(".changeSection"), 
        this.changeClass = r || "active", this.start();
    }
    return _createClass(t, [ {
        key: "start",
        value: function() {
            var t = this;
            console.log(this.changeClass), this.containerOptions.addEventListener("click", function(n) {
                var a = [].concat(_toConsumableArray(t.containerOptions.children)).indexOf(n.target);
                [].concat(_toConsumableArray(t.containerOptions.children)).map(function(n) {
                    n.classList.remove(t.changeClass);
                }), [].concat(_toConsumableArray(t.containerOptions.children))[a].classList.add(changeClass);
            });
        }
    } ]), t;
}();

new TabsNavigation(".tabContainer");