"use strict";

function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
        return n;
    }
    return Array.from(t);
}

var containerGallery = document.querySelector(".containerLightBox"), getImages = function(t) {
    return [].concat(_toConsumableArray(t.querySelectorAll("img")));
}, getBigImages = function(t) {
    return t.map(function(t) {
        return t.src;
    }).map(function(t) {
        return t.replace("thumbs", "principal");
    });
}, openBigImage = function(t, e, n) {
    t.addEventListener("click", function(t) {
        var r = t.target, a = e.indexOf(r);
        "IMG" === r.tagName && openLightbox(e, a, n);
    });
}, openLightbox = function(t, e, n) {
    !function(r) {
        var a = document.createElement("div"), i = document.createElement("img"), o = document.createElement("nav"), u = document.createElement("input"), c = document.createElement("span"), l = document.createElement("input");
        a.setAttribute("class", "overlay"), r.appendChild(a), i.setAttribute("class", "bigImage"), 
        i.setAttribute("src", n[e]), i.setAttribute("alt", t[e]), a.appendChild(i), o.setAttribute("class", "navigator"), 
        a.appendChild(o), u.setAttribute("class", "prev"), u.setAttribute("value", "<"), 
        u.setAttribute("type", "button"), o.appendChild(u), c.setAttribute("class", "posNav"), 
        c.textContent = e + 1 + " de " + t.length, o.appendChild(c), l.setAttribute("class", "next"), 
        l.setAttribute("value", ">"), l.setAttribute("type", "button"), o.appendChild(l);
    }(document.body);
}, lightboxShow = function(t) {
    var e = getImages(t), n = getBigImages(e);
    openBigImage(t, e);
    openBigImage(t, e, n);
};

lightboxShow(containerGallery);