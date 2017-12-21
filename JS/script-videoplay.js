"use strict";

function _classCallCheck(i, e) {
    if (!(i instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var _createClass = function() {
    function i(i, e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
            Object.defineProperty(i, n.key, n);
        }
    }
    return function(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e;
    };
}(), VideoPlay = function() {
    function i(e) {
        _classCallCheck(this, i), this.video = document.querySelector(e), this.bind();
    }
    return _createClass(i, [ {
        key: "bind",
        value: function() {
            var i = this;
            document.addEventListener("visibilitychange", function() {
                i.stopVideoVisibility();
            }), window.addEventListener("scroll", function() {
                i.positionVideo();
            });
        }
    }, {
        key: "stopVideoVisibility",
        value: function() {
            "hidden" === document.visibilityState && !1 === this.video.paused ? this.video.pause() : this.video.play();
        }
    }, {
        key: "positionVideo",
        value: function() {
            var i = this.video.getBoundingClientRect();
            i.top - window.innerHeight / 1.2 < 0 && -1.5 * (i.top + i.height) < 0 ? this.video.play() : this.video.pause();
        }
    } ]), i;
}();

new VideoPlay("video");