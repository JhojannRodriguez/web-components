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
}(), UploadFile = function() {
    function e(t, n) {
        _classCallCheck(this, e), this.element = document.querySelector(t), this.backgroundSet = document.querySelector(n), 
        this.capture();
    }
    return _createClass(e, [ {
        key: "capture",
        value: function() {
            var e = this;
            this.element.addEventListener("change", function(t) {
                var n = t.target.files[0], a = URL.createObjectURL(n);
                e.setImage(a);
            });
        }
    }, {
        key: "setImage",
        value: function(e) {
            this.backgroundSet.style.backgroundImage = "url('" + e + "')";
        }
    } ]), e;
}();

new UploadFile("#fileinput", ".imageProfile");