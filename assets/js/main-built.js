/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.13.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */

//     Underscore.js 1.4.4
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore may be freely distributed under the MIT license.

//     (c) 2010-2012 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

/**
 * @license RequireJS text 2.0.5 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */

/*!
 * Bootstrap v4.0.0-beta (https://getbootstrap.com)
 * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

function guidS4() {
  return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
}
function generateGuid() {
  return (
    guidS4() +
    guidS4() +
    "-" +
    guidS4() +
    "-" +
    guidS4() +
    "-" +
    guidS4() +
    "-" +
    guidS4() +
    guidS4() +
    guidS4()
  );
}
if (
  ((function (e, t) {
    e.Popper = (function () {
      "use strict";
      function t(e) {
        var t = !1;
        return function () {
          t ||
            ((t = !0),
            window.Promise.resolve().then(function () {
              (t = !1), e();
            }));
        };
      }
      function n(e) {
        var t = !1;
        return function () {
          t ||
            ((t = !0),
            setTimeout(function () {
              (t = !1), e();
            }, le));
        };
      }
      function i(e) {
        var t = {};
        return e && "[object Function]" === t.toString.call(e);
      }
      function r(e, t) {
        if (1 !== e.nodeType) return [];
        var n = getComputedStyle(e, null);
        return t ? n[t] : n;
      }
      function o(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host;
      }
      function a(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
          case "HTML":
          case "BODY":
            return e.ownerDocument.body;
          case "#document":
            return e.body;
        }
        var t = r(e),
          n = t.overflow,
          i = t.overflowX;
        return /(auto|scroll)/.test(n + t.overflowY + i) ? e : a(o(e));
      }
      function s(e) {
        var t = e && e.offsetParent,
          n = t && t.nodeName;
        return n && "BODY" !== n && "HTML" !== n
          ? -1 !== ["TD", "TABLE"].indexOf(t.nodeName) &&
            "static" === r(t, "position")
            ? s(t)
            : t
          : e
          ? e.ownerDocument.documentElement
          : document.documentElement;
      }
      function l(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || s(e.firstElementChild) === e);
      }
      function u(e) {
        return null !== e.parentNode ? u(e.parentNode) : e;
      }
      function c(e, t) {
        if (!(e && e.nodeType && t && t.nodeType))
          return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
          i = n ? e : t,
          r = n ? t : e,
          o = document.createRange();
        o.setStart(i, 0), o.setEnd(r, 0);
        var a = o.commonAncestorContainer;
        if ((e !== a && t !== a) || i.contains(r)) return l(a) ? a : s(a);
        var p = u(e);
        return p.host ? c(p.host, t) : c(e, u(t).host);
      }
      function p(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "top",
          n = "top" === t ? "scrollTop" : "scrollLeft",
          i = e.nodeName;
        if ("BODY" === i || "HTML" === i) {
          var r = e.ownerDocument.documentElement;
          return (e.ownerDocument.scrollingElement || r)[n];
        }
        return e[n];
      }
      function d(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          i = p(t, "top"),
          r = p(t, "left"),
          o = n ? -1 : 1;
        return (
          (e.top += i * o),
          (e.bottom += i * o),
          (e.left += r * o),
          (e.right += r * o),
          e
        );
      }
      function f(e, t) {
        var n = "x" === t ? "Left" : "Top",
          i = "Left" === n ? "Right" : "Bottom";
        return (
          parseFloat(e["border" + n + "Width"], 10) +
          parseFloat(e["border" + i + "Width"], 10)
        );
      }
      function h(e, t, n, i) {
        return Math.max(
          t["offset" + e],
          t["scroll" + e],
          n["client" + e],
          n["offset" + e],
          n["scroll" + e],
          fe()
            ? n["offset" + e] +
                i["margin" + ("Height" === e ? "Top" : "Left")] +
                i["margin" + ("Height" === e ? "Bottom" : "Right")]
            : 0
        );
      }
      function m() {
        var e = document.body,
          t = document.documentElement,
          n = fe() && getComputedStyle(t);
        return { height: h("Height", e, t, n), width: h("Width", e, t, n) };
      }
      function g(e) {
        return ve({}, e, { right: e.left + e.width, bottom: e.top + e.height });
      }
      function v(e) {
        var t = {};
        if (fe())
          try {
            t = e.getBoundingClientRect();
            var n = p(e, "top"),
              i = p(e, "left");
            (t.top += n), (t.left += i), (t.bottom += n), (t.right += i);
          } catch (e) {}
        else t = e.getBoundingClientRect();
        var o = {
            left: t.left,
            top: t.top,
            width: t.right - t.left,
            height: t.bottom - t.top,
          },
          a = "HTML" === e.nodeName ? m() : {},
          s = a.width || e.clientWidth || o.right - o.left,
          l = a.height || e.clientHeight || o.bottom - o.top,
          u = e.offsetWidth - s,
          c = e.offsetHeight - l;
        if (u || c) {
          var d = r(e);
          (u -= f(d, "x")), (c -= f(d, "y")), (o.width -= u), (o.height -= c);
        }
        return g(o);
      }
      function b(e, t) {
        var n = fe(),
          i = "HTML" === t.nodeName,
          o = v(e),
          s = v(t),
          l = a(e),
          u = r(t),
          c = parseFloat(u.borderTopWidth, 10),
          p = parseFloat(u.borderLeftWidth, 10),
          f = g({
            top: o.top - s.top - c,
            left: o.left - s.left - p,
            width: o.width,
            height: o.height,
          });
        if (((f.marginTop = 0), (f.marginLeft = 0), !n && i)) {
          var h = parseFloat(u.marginTop, 10),
            m = parseFloat(u.marginLeft, 10);
          (f.top -= c - h),
            (f.bottom -= c - h),
            (f.left -= p - m),
            (f.right -= p - m),
            (f.marginTop = h),
            (f.marginLeft = m);
        }
        return (
          (n ? t.contains(l) : t === l && "BODY" !== l.nodeName) &&
            (f = d(f, t)),
          f
        );
      }
      function y(e) {
        var t = e.ownerDocument.documentElement,
          n = b(e, t),
          i = Math.max(t.clientWidth, window.innerWidth || 0),
          r = Math.max(t.clientHeight, window.innerHeight || 0),
          o = p(t),
          a = p(t, "left");
        return g({
          top: o - n.top + n.marginTop,
          left: a - n.left + n.marginLeft,
          width: i,
          height: r,
        });
      }
      function x(e) {
        var t = e.nodeName;
        return (
          "BODY" !== t &&
          "HTML" !== t &&
          ("fixed" === r(e, "position") || x(o(e)))
        );
      }
      function _(e, t, n, i) {
        var r = { top: 0, left: 0 },
          s = c(e, t);
        if ("viewport" === i) r = y(s);
        else {
          var l = void 0;
          "scrollParent" === i
            ? ((l = a(o(t))),
              "BODY" === l.nodeName && (l = e.ownerDocument.documentElement))
            : (l = "window" === i ? e.ownerDocument.documentElement : i);
          var u = b(l, s);
          if ("HTML" !== l.nodeName || x(s)) r = u;
          else {
            var p = m(),
              d = p.height,
              f = p.width;
            (r.top += u.top - u.marginTop),
              (r.bottom = d + u.top),
              (r.left += u.left - u.marginLeft),
              (r.right = f + u.left);
          }
        }
        return (r.left += n), (r.top += n), (r.right -= n), (r.bottom -= n), r;
      }
      function w(e) {
        return e.width * e.height;
      }
      function E(e, t, n, i, r) {
        var o =
          arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = _(n, i, o, r),
          s = {
            top: { width: a.width, height: t.top - a.top },
            right: { width: a.right - t.right, height: a.height },
            bottom: { width: a.width, height: a.bottom - t.bottom },
            left: { width: t.left - a.left, height: a.height },
          },
          l = Object.keys(s)
            .map(function (e) {
              return ve({ key: e }, s[e], { area: w(s[e]) });
            })
            .sort(function (e, t) {
              return t.area - e.area;
            }),
          u = l.filter(function (e) {
            var t = e.width,
              i = e.height;
            return t >= n.clientWidth && i >= n.clientHeight;
          }),
          c = u.length > 0 ? u[0].key : l[0].key,
          p = e.split("-")[1];
        return c + (p ? "-" + p : "");
      }
      function T(e, t, n) {
        return b(n, c(t, n));
      }
      function C(e) {
        var t = getComputedStyle(e),
          n = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
          i = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
        return { width: e.offsetWidth + i, height: e.offsetHeight + n };
      }
      function S(e) {
        var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
        return e.replace(/left|right|bottom|top/g, function (e) {
          return t[e];
        });
      }
      function A(e, t, n) {
        n = n.split("-")[0];
        var i = C(e),
          r = { width: i.width, height: i.height },
          o = -1 !== ["right", "left"].indexOf(n),
          a = o ? "top" : "left",
          s = o ? "left" : "top",
          l = o ? "height" : "width",
          u = o ? "width" : "height";
        return (
          (r[a] = t[a] + t[l] / 2 - i[l] / 2),
          (r[s] = n === s ? t[s] - i[u] : t[S(s)]),
          r
        );
      }
      function D(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0];
      }
      function O(e, t, n) {
        if (Array.prototype.findIndex)
          return e.findIndex(function (e) {
            return e[t] === n;
          });
        var i = D(e, function (e) {
          return e[t] === n;
        });
        return e.indexOf(i);
      }
      function I(e, t, n) {
        return (
          (void 0 === n ? e : e.slice(0, O(e, "name", n))).forEach(function (
            e
          ) {
            e.function &&
              console.warn(
                "`modifier.function` is deprecated, use `modifier.fn`!"
              );
            var n = e.function || e.fn;
            e.enabled &&
              i(n) &&
              ((t.offsets.popper = g(t.offsets.popper)),
              (t.offsets.reference = g(t.offsets.reference)),
              (t = n(t, e)));
          }),
          t
        );
      }
      function N() {
        if (!this.state.isDestroyed) {
          var e = {
            instance: this,
            styles: {},
            arrowStyles: {},
            attributes: {},
            flipped: !1,
            offsets: {},
          };
          (e.offsets.reference = T(this.state, this.popper, this.reference)),
            (e.placement = E(
              this.options.placement,
              e.offsets.reference,
              this.popper,
              this.reference,
              this.options.modifiers.flip.boundariesElement,
              this.options.modifiers.flip.padding
            )),
            (e.originalPlacement = e.placement),
            (e.offsets.popper = A(
              this.popper,
              e.offsets.reference,
              e.placement
            )),
            (e.offsets.popper.position = "absolute"),
            (e = I(this.modifiers, e)),
            this.state.isCreated
              ? this.options.onUpdate(e)
              : ((this.state.isCreated = !0), this.options.onCreate(e));
        }
      }
      function k(e, t) {
        return e.some(function (e) {
          var n = e.name;
          return e.enabled && n === t;
        });
      }
      function L(e) {
        for (
          var t = [!1, "ms", "Webkit", "Moz", "O"],
            n = e.charAt(0).toUpperCase() + e.slice(1),
            i = 0;
          i < t.length - 1;
          i++
        ) {
          var r = t[i],
            o = r ? "" + r + n : e;
          if (void 0 !== document.body.style[o]) return o;
        }
        return null;
      }
      function j() {
        return (
          (this.state.isDestroyed = !0),
          k(this.modifiers, "applyStyle") &&
            (this.popper.removeAttribute("x-placement"),
            (this.popper.style.left = ""),
            (this.popper.style.position = ""),
            (this.popper.style.top = ""),
            (this.popper.style[L("transform")] = "")),
          this.disableEventListeners(),
          this.options.removeOnDestroy &&
            this.popper.parentNode.removeChild(this.popper),
          this
        );
      }
      function H(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window;
      }
      function P(e, t, n, i) {
        var r = "BODY" === e.nodeName,
          o = r ? e.ownerDocument.defaultView : e;
        o.addEventListener(t, n, { passive: !0 }),
          r || P(a(o.parentNode), t, n, i),
          i.push(o);
      }
      function R(e, t, n, i) {
        (n.updateBound = i),
          H(e).addEventListener("resize", n.updateBound, { passive: !0 });
        var r = a(e);
        return (
          P(r, "scroll", n.updateBound, n.scrollParents),
          (n.scrollElement = r),
          (n.eventsEnabled = !0),
          n
        );
      }
      function M() {
        this.state.eventsEnabled ||
          (this.state = R(
            this.reference,
            this.options,
            this.state,
            this.scheduleUpdate
          ));
      }
      function F(e, t) {
        return (
          H(e).removeEventListener("resize", t.updateBound),
          t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound);
          }),
          (t.updateBound = null),
          (t.scrollParents = []),
          (t.scrollElement = null),
          (t.eventsEnabled = !1),
          t
        );
      }
      function B() {
        this.state.eventsEnabled &&
          (cancelAnimationFrame(this.scheduleUpdate),
          (this.state = F(this.reference, this.state)));
      }
      function W(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
      }
      function q(e, t) {
        Object.keys(t).forEach(function (n) {
          var i = "";
          -1 !==
            ["width", "height", "top", "right", "bottom", "left"].indexOf(n) &&
            W(t[n]) &&
            (i = "px"),
            (e.style[n] = t[n] + i);
        });
      }
      function U(e, t) {
        Object.keys(t).forEach(function (n) {
          !1 !== t[n] ? e.setAttribute(n, t[n]) : e.removeAttribute(n);
        });
      }
      function V(e) {
        return (
          q(e.instance.popper, e.styles),
          U(e.instance.popper, e.attributes),
          e.arrowElement &&
            Object.keys(e.arrowStyles).length &&
            q(e.arrowElement, e.arrowStyles),
          e
        );
      }
      function G(e, t, n, i, r) {
        var o = T(r, t, e),
          a = E(
            n.placement,
            o,
            t,
            e,
            n.modifiers.flip.boundariesElement,
            n.modifiers.flip.padding
          );
        return (
          t.setAttribute("x-placement", a), q(t, { position: "absolute" }), n
        );
      }
      function z(e, t) {
        var n = t.x,
          i = t.y,
          r = e.offsets.popper,
          o = D(e.instance.modifiers, function (e) {
            return "applyStyle" === e.name;
          }).gpuAcceleration;
        void 0 !== o &&
          console.warn(
            "WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!"
          );
        var a = void 0 !== o ? o : t.gpuAcceleration,
          l = s(e.instance.popper),
          u = v(l),
          c = { position: r.position },
          p = {
            left: Math.floor(r.left),
            top: Math.floor(r.top),
            bottom: Math.floor(r.bottom),
            right: Math.floor(r.right),
          },
          d = "bottom" === n ? "top" : "bottom",
          f = "right" === i ? "left" : "right",
          h = L("transform"),
          m = void 0,
          g = void 0;
        if (
          ((g = "bottom" === d ? -u.height + p.bottom : p.top),
          (m = "right" === f ? -u.width + p.right : p.left),
          a && h)
        )
          (c[h] = "translate3d(" + m + "px, " + g + "px, 0)"),
            (c[d] = 0),
            (c[f] = 0),
            (c.willChange = "transform");
        else {
          var b = "bottom" === d ? -1 : 1,
            y = "right" === f ? -1 : 1;
          (c[d] = g * b), (c[f] = m * y), (c.willChange = d + ", " + f);
        }
        var x = { "x-placement": e.placement };
        return (
          (e.attributes = ve({}, x, e.attributes)),
          (e.styles = ve({}, c, e.styles)),
          (e.arrowStyles = ve({}, e.offsets.arrow, e.arrowStyles)),
          e
        );
      }
      function $(e, t, n) {
        var i = D(e, function (e) {
            return e.name === t;
          }),
          r =
            !!i &&
            e.some(function (e) {
              return e.name === n && e.enabled && e.order < i.order;
            });
        if (!r) {
          var o = "`" + t + "`",
            a = "`" + n + "`";
          console.warn(
            a +
              " modifier is required by " +
              o +
              " modifier in order to work, be sure to include it before " +
              o +
              "!"
          );
        }
        return r;
      }
      function X(e, t) {
        var n;
        if (!$(e.instance.modifiers, "arrow", "keepTogether")) return e;
        var i = t.element;
        if ("string" == typeof i) {
          if (!(i = e.instance.popper.querySelector(i))) return e;
        } else if (!e.instance.popper.contains(i))
          return (
            console.warn(
              "WARNING: `arrow.element` must be child of its popper element!"
            ),
            e
          );
        var o = e.placement.split("-")[0],
          a = e.offsets,
          s = a.popper,
          l = a.reference,
          u = -1 !== ["left", "right"].indexOf(o),
          c = u ? "height" : "width",
          p = u ? "Top" : "Left",
          d = p.toLowerCase(),
          f = u ? "left" : "top",
          h = u ? "bottom" : "right",
          m = C(i)[c];
        l[h] - m < s[d] && (e.offsets.popper[d] -= s[d] - (l[h] - m)),
          l[d] + m > s[h] && (e.offsets.popper[d] += l[d] + m - s[h]),
          (e.offsets.popper = g(e.offsets.popper));
        var v = l[d] + l[c] / 2 - m / 2,
          b = r(e.instance.popper),
          y = parseFloat(b["margin" + p], 10),
          x = parseFloat(b["border" + p + "Width"], 10),
          _ = v - e.offsets.popper[d] - y - x;
        return (
          (_ = Math.max(Math.min(s[c] - m, _), 0)),
          (e.arrowElement = i),
          (e.offsets.arrow =
            ((n = {}), ge(n, d, Math.round(_)), ge(n, f, ""), n)),
          e
        );
      }
      function Q(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e;
      }
      function K(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = ye.indexOf(e),
          i = ye.slice(n + 1).concat(ye.slice(0, n));
        return t ? i.reverse() : i;
      }
      function Y(e, t) {
        if (k(e.instance.modifiers, "inner")) return e;
        if (e.flipped && e.placement === e.originalPlacement) return e;
        var n = _(
            e.instance.popper,
            e.instance.reference,
            t.padding,
            t.boundariesElement
          ),
          i = e.placement.split("-")[0],
          r = S(i),
          o = e.placement.split("-")[1] || "",
          a = [];
        switch (t.behavior) {
          case xe.FLIP:
            a = [i, r];
            break;
          case xe.CLOCKWISE:
            a = K(i);
            break;
          case xe.COUNTERCLOCKWISE:
            a = K(i, !0);
            break;
          default:
            a = t.behavior;
        }
        return (
          a.forEach(function (s, l) {
            if (i !== s || a.length === l + 1) return e;
            (i = e.placement.split("-")[0]), (r = S(i));
            var u = e.offsets.popper,
              c = e.offsets.reference,
              p = Math.floor,
              d =
                ("left" === i && p(u.right) > p(c.left)) ||
                ("right" === i && p(u.left) < p(c.right)) ||
                ("top" === i && p(u.bottom) > p(c.top)) ||
                ("bottom" === i && p(u.top) < p(c.bottom)),
              f = p(u.left) < p(n.left),
              h = p(u.right) > p(n.right),
              m = p(u.top) < p(n.top),
              g = p(u.bottom) > p(n.bottom),
              v =
                ("left" === i && f) ||
                ("right" === i && h) ||
                ("top" === i && m) ||
                ("bottom" === i && g),
              b = -1 !== ["top", "bottom"].indexOf(i),
              y =
                !!t.flipVariations &&
                ((b && "start" === o && f) ||
                  (b && "end" === o && h) ||
                  (!b && "start" === o && m) ||
                  (!b && "end" === o && g));
            (d || v || y) &&
              ((e.flipped = !0),
              (d || v) && (i = a[l + 1]),
              y && (o = Q(o)),
              (e.placement = i + (o ? "-" + o : "")),
              (e.offsets.popper = ve(
                {},
                e.offsets.popper,
                A(e.instance.popper, e.offsets.reference, e.placement)
              )),
              (e = I(e.instance.modifiers, e, "flip")));
          }),
          e
        );
      }
      function J(e) {
        var t = e.offsets,
          n = t.popper,
          i = t.reference,
          r = e.placement.split("-")[0],
          o = Math.floor,
          a = -1 !== ["top", "bottom"].indexOf(r),
          s = a ? "right" : "bottom",
          l = a ? "left" : "top",
          u = a ? "width" : "height";
        return (
          n[s] < o(i[l]) && (e.offsets.popper[l] = o(i[l]) - n[u]),
          n[l] > o(i[s]) && (e.offsets.popper[l] = o(i[s])),
          e
        );
      }
      function Z(e, t, n, i) {
        var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
          o = +r[1],
          a = r[2];
        if (!o) return e;
        if (0 === a.indexOf("%")) {
          var s = void 0;
          switch (a) {
            case "%p":
              s = n;
              break;
            case "%":
            case "%r":
            default:
              s = i;
          }
          return (g(s)[t] / 100) * o;
        }
        if ("vh" === a || "vw" === a) {
          return (
            (("vh" === a
              ? Math.max(
                  document.documentElement.clientHeight,
                  window.innerHeight || 0
                )
              : Math.max(
                  document.documentElement.clientWidth,
                  window.innerWidth || 0
                )) /
              100) *
            o
          );
        }
        return o;
      }
      function ee(e, t, n, i) {
        var r = [0, 0],
          o = -1 !== ["right", "left"].indexOf(i),
          a = e.split(/(\+|\-)/).map(function (e) {
            return e.trim();
          }),
          s = a.indexOf(
            D(a, function (e) {
              return -1 !== e.search(/,|\s/);
            })
          );
        a[s] &&
          -1 === a[s].indexOf(",") &&
          console.warn(
            "Offsets separated by white space(s) are deprecated, use a comma (,) instead."
          );
        var l = /\s*,\s*|\s+/,
          u =
            -1 !== s
              ? [
                  a.slice(0, s).concat([a[s].split(l)[0]]),
                  [a[s].split(l)[1]].concat(a.slice(s + 1)),
                ]
              : [a];
        return (
          (u = u.map(function (e, i) {
            var r = (1 === i ? !o : o) ? "height" : "width",
              a = !1;
            return e
              .reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t)
                  ? ((e[e.length - 1] = t), (a = !0), e)
                  : a
                  ? ((e[e.length - 1] += t), (a = !1), e)
                  : e.concat(t);
              }, [])
              .map(function (e) {
                return Z(e, r, t, n);
              });
          })),
          u.forEach(function (e, t) {
            e.forEach(function (n, i) {
              W(n) && (r[t] += n * ("-" === e[i - 1] ? -1 : 1));
            });
          }),
          r
        );
      }
      function te(e, t) {
        var n = t.offset,
          i = e.placement,
          r = e.offsets,
          o = r.popper,
          a = r.reference,
          s = i.split("-")[0],
          l = void 0;
        return (
          (l = W(+n) ? [+n, 0] : ee(n, o, a, s)),
          "left" === s
            ? ((o.top += l[0]), (o.left -= l[1]))
            : "right" === s
            ? ((o.top += l[0]), (o.left += l[1]))
            : "top" === s
            ? ((o.left += l[0]), (o.top -= l[1]))
            : "bottom" === s && ((o.left += l[0]), (o.top += l[1])),
          (e.popper = o),
          e
        );
      }
      function ne(e, t) {
        var n = t.boundariesElement || s(e.instance.popper);
        e.instance.reference === n && (n = s(n));
        var i = _(e.instance.popper, e.instance.reference, t.padding, n);
        t.boundaries = i;
        var r = t.priority,
          o = e.offsets.popper,
          a = {
            primary: function (e) {
              var n = o[e];
              return (
                o[e] < i[e] &&
                  !t.escapeWithReference &&
                  (n = Math.max(o[e], i[e])),
                ge({}, e, n)
              );
            },
            secondary: function (e) {
              var n = "right" === e ? "left" : "top",
                r = o[n];
              return (
                o[e] > i[e] &&
                  !t.escapeWithReference &&
                  (r = Math.min(
                    o[n],
                    i[e] - ("right" === e ? o.width : o.height)
                  )),
                ge({}, n, r)
              );
            },
          };
        return (
          r.forEach(function (e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
            o = ve({}, o, a[t](e));
          }),
          (e.offsets.popper = o),
          e
        );
      }
      function ie(e) {
        var t = e.placement,
          n = t.split("-")[0],
          i = t.split("-")[1];
        if (i) {
          var r = e.offsets,
            o = r.reference,
            a = r.popper,
            s = -1 !== ["bottom", "top"].indexOf(n),
            l = s ? "left" : "top",
            u = s ? "width" : "height",
            c = { start: ge({}, l, o[l]), end: ge({}, l, o[l] + o[u] - a[u]) };
          e.offsets.popper = ve({}, a, c[i]);
        }
        return e;
      }
      function re(e) {
        if (!$(e.instance.modifiers, "hide", "preventOverflow")) return e;
        var t = e.offsets.reference,
          n = D(e.instance.modifiers, function (e) {
            return "preventOverflow" === e.name;
          }).boundaries;
        if (
          t.bottom < n.top ||
          t.left > n.right ||
          t.top > n.bottom ||
          t.right < n.left
        ) {
          if (!0 === e.hide) return e;
          (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
        } else {
          if (!1 === e.hide) return e;
          (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
        }
        return e;
      }
      function oe(e) {
        var t = e.placement,
          n = t.split("-")[0],
          i = e.offsets,
          r = i.popper,
          o = i.reference,
          a = -1 !== ["left", "right"].indexOf(n),
          s = -1 === ["top", "left"].indexOf(n);
        return (
          (r[a ? "left" : "top"] = o[n] - (s ? r[a ? "width" : "height"] : 0)),
          (e.placement = S(t)),
          (e.offsets.popper = g(r)),
          e
        );
      }
      for (
        var ae = "undefined" != typeof window && "undefined" != typeof document,
          se = ["Edge", "Trident", "Firefox"],
          le = 0,
          ue = 0;
        ue < se.length;
        ue += 1
      )
        if (ae && navigator.userAgent.indexOf(se[ue]) >= 0) {
          le = 1;
          break;
        }
      var ce = ae && window.Promise,
        pe = ce ? t : n,
        de = void 0,
        fe = function () {
          return (
            void 0 === de &&
              (de = -1 !== navigator.appVersion.indexOf("MSIE 10")),
            de
          );
        },
        he = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
        me = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var i = t[n];
              (i.enumerable = i.enumerable || !1),
                (i.configurable = !0),
                "value" in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i);
            }
          }
          return function (t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t;
          };
        })(),
        ge = function (e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        },
        ve =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
          },
        be = [
          "auto-start",
          "auto",
          "auto-end",
          "top-start",
          "top",
          "top-end",
          "right-start",
          "right",
          "right-end",
          "bottom-end",
          "bottom",
          "bottom-start",
          "left-end",
          "left",
          "left-start",
        ],
        ye = be.slice(3),
        xe = {
          FLIP: "flip",
          CLOCKWISE: "clockwise",
          COUNTERCLOCKWISE: "counterclockwise",
        },
        _e = {
          shift: { order: 100, enabled: !0, fn: ie },
          offset: { order: 200, enabled: !0, fn: te, offset: 0 },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: ne,
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent",
          },
          keepTogether: { order: 400, enabled: !0, fn: J },
          arrow: { order: 500, enabled: !0, fn: X, element: "[x-arrow]" },
          flip: {
            order: 600,
            enabled: !0,
            fn: Y,
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport",
          },
          inner: { order: 700, enabled: !1, fn: oe },
          hide: { order: 800, enabled: !0, fn: re },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: z,
            gpuAcceleration: !0,
            x: "bottom",
            y: "right",
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: V,
            onLoad: G,
            gpuAcceleration: void 0,
          },
        },
        we = {
          placement: "bottom",
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: _e,
        },
        Ee = (function () {
          function e(t, n) {
            var r = this,
              o =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {};
            he(this, e),
              (this.scheduleUpdate = function () {
                return requestAnimationFrame(r.update);
              }),
              (this.update = pe(this.update.bind(this))),
              (this.options = ve({}, e.Defaults, o)),
              (this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: [],
              }),
              (this.reference = t && t.jquery ? t[0] : t),
              (this.popper = n && n.jquery ? n[0] : n),
              (this.options.modifiers = {}),
              Object.keys(ve({}, e.Defaults.modifiers, o.modifiers)).forEach(
                function (t) {
                  r.options.modifiers[t] = ve(
                    {},
                    e.Defaults.modifiers[t] || {},
                    o.modifiers ? o.modifiers[t] : {}
                  );
                }
              ),
              (this.modifiers = Object.keys(this.options.modifiers)
                .map(function (e) {
                  return ve({ name: e }, r.options.modifiers[e]);
                })
                .sort(function (e, t) {
                  return e.order - t.order;
                })),
              this.modifiers.forEach(function (e) {
                e.enabled &&
                  i(e.onLoad) &&
                  e.onLoad(r.reference, r.popper, r.options, e, r.state);
              }),
              this.update();
            var a = this.options.eventsEnabled;
            a && this.enableEventListeners(), (this.state.eventsEnabled = a);
          }
          return (
            me(e, [
              {
                key: "update",
                value: function () {
                  return N.call(this);
                },
              },
              {
                key: "destroy",
                value: function () {
                  return j.call(this);
                },
              },
              {
                key: "enableEventListeners",
                value: function () {
                  return M.call(this);
                },
              },
              {
                key: "disableEventListeners",
                value: function () {
                  return B.call(this);
                },
              },
            ]),
            e
          );
        })();
      return (
        (Ee.Utils = ("undefined" != typeof window ? window : e).PopperUtils),
        (Ee.placements = be),
        (Ee.Defaults = we),
        Ee
      );
    })();
  })(this),
  define("popper.min", function () {}),
  (function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = e.document
          ? t(e, !0)
          : function (e) {
              if (!e.document)
                throw new Error("jQuery requires a window with a document");
              return t(e);
            })
      : t(e);
  })("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    function n(e, t) {
      t = t || ne;
      var n = t.createElement("script");
      (n.text = e), t.head.appendChild(n).parentNode.removeChild(n);
    }
    function i(e) {
      var t = !!e && "length" in e && e.length,
        n = me.type(e);
      return (
        "function" !== n &&
        !me.isWindow(e) &&
        ("array" === n ||
          0 === t ||
          ("number" == typeof t && t > 0 && t - 1 in e))
      );
    }
    function r(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    function o(e, t, n) {
      return me.isFunction(t)
        ? me.grep(e, function (e, i) {
            return !!t.call(e, i, e) !== n;
          })
        : t.nodeType
        ? me.grep(e, function (e) {
            return (e === t) !== n;
          })
        : "string" != typeof t
        ? me.grep(e, function (e) {
            return se.call(t, e) > -1 !== n;
          })
        : Ce.test(t)
        ? me.filter(t, e, n)
        : ((t = me.filter(t, e)),
          me.grep(e, function (e) {
            return se.call(t, e) > -1 !== n && 1 === e.nodeType;
          }));
    }
    function a(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType; );
      return e;
    }
    function s(e) {
      var t = {};
      return (
        me.each(e.match(Ie) || [], function (e, n) {
          t[n] = !0;
        }),
        t
      );
    }
    function l(e) {
      return e;
    }
    function u(e) {
      throw e;
    }
    function c(e, t, n, i) {
      var r;
      try {
        e && me.isFunction((r = e.promise))
          ? r.call(e).done(t).fail(n)
          : e && me.isFunction((r = e.then))
          ? r.call(e, t, n)
          : t.apply(void 0, [e].slice(i));
      } catch (e) {
        n.apply(void 0, [e]);
      }
    }
    function p() {
      ne.removeEventListener("DOMContentLoaded", p),
        e.removeEventListener("load", p),
        me.ready();
    }
    function d() {
      this.expando = me.expando + d.uid++;
    }
    function f(e) {
      return (
        "true" === e ||
        ("false" !== e &&
          ("null" === e
            ? null
            : e === +e + ""
            ? +e
            : Re.test(e)
            ? JSON.parse(e)
            : e))
      );
    }
    function h(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (
          ((i = "data-" + t.replace(Me, "-$&").toLowerCase()),
          "string" == typeof (n = e.getAttribute(i)))
        ) {
          try {
            n = f(n);
          } catch (e) {}
          Pe.set(e, t, n);
        } else n = void 0;
      return n;
    }
    function m(e, t, n, i) {
      var r,
        o = 1,
        a = 20,
        s = i
          ? function () {
              return i.cur();
            }
          : function () {
              return me.css(e, t, "");
            },
        l = s(),
        u = (n && n[3]) || (me.cssNumber[t] ? "" : "px"),
        c = (me.cssNumber[t] || ("px" !== u && +l)) && Be.exec(me.css(e, t));
      if (c && c[3] !== u) {
        (u = u || c[3]), (n = n || []), (c = +l || 1);
        do {
          (o = o || ".5"), (c /= o), me.style(e, t, c + u);
        } while (o !== (o = s() / l) && 1 !== o && --a);
      }
      return (
        n &&
          ((c = +c || +l || 0),
          (r = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
          i && ((i.unit = u), (i.start = c), (i.end = r))),
        r
      );
    }
    function g(e) {
      var t,
        n = e.ownerDocument,
        i = e.nodeName,
        r = Ve[i];
      return (
        r ||
        ((t = n.body.appendChild(n.createElement(i))),
        (r = me.css(t, "display")),
        t.parentNode.removeChild(t),
        "none" === r && (r = "block"),
        (Ve[i] = r),
        r)
      );
    }
    function v(e, t) {
      for (var n, i, r = [], o = 0, a = e.length; o < a; o++)
        (i = e[o]),
          i.style &&
            ((n = i.style.display),
            t
              ? ("none" === n &&
                  ((r[o] = He.get(i, "display") || null),
                  r[o] || (i.style.display = "")),
                "" === i.style.display && qe(i) && (r[o] = g(i)))
              : "none" !== n && ((r[o] = "none"), He.set(i, "display", n)));
      for (o = 0; o < a; o++) null != r[o] && (e[o].style.display = r[o]);
      return e;
    }
    function b(e, t) {
      var n;
      return (
        (n =
          void 0 !== e.getElementsByTagName
            ? e.getElementsByTagName(t || "*")
            : void 0 !== e.querySelectorAll
            ? e.querySelectorAll(t || "*")
            : []),
        void 0 === t || (t && r(e, t)) ? me.merge([e], n) : n
      );
    }
    function y(e, t) {
      for (var n = 0, i = e.length; n < i; n++)
        He.set(e[n], "globalEval", !t || He.get(t[n], "globalEval"));
    }
    function x(e, t, n, i, r) {
      for (
        var o,
          a,
          s,
          l,
          u,
          c,
          p = t.createDocumentFragment(),
          d = [],
          f = 0,
          h = e.length;
        f < h;
        f++
      )
        if ((o = e[f]) || 0 === o)
          if ("object" === me.type(o)) me.merge(d, o.nodeType ? [o] : o);
          else if (Qe.test(o)) {
            for (
              a = a || p.appendChild(t.createElement("div")),
                s = (ze.exec(o) || ["", ""])[1].toLowerCase(),
                l = Xe[s] || Xe._default,
                a.innerHTML = l[1] + me.htmlPrefilter(o) + l[2],
                c = l[0];
              c--;

            )
              a = a.lastChild;
            me.merge(d, a.childNodes), (a = p.firstChild), (a.textContent = "");
          } else d.push(t.createTextNode(o));
      for (p.textContent = "", f = 0; (o = d[f++]); )
        if (i && me.inArray(o, i) > -1) r && r.push(o);
        else if (
          ((u = me.contains(o.ownerDocument, o)),
          (a = b(p.appendChild(o), "script")),
          u && y(a),
          n)
        )
          for (c = 0; (o = a[c++]); ) $e.test(o.type || "") && n.push(o);
      return p;
    }
    function _() {
      return !0;
    }
    function w() {
      return !1;
    }
    function E() {
      try {
        return ne.activeElement;
      } catch (e) {}
    }
    function T(e, t, n, i, r, o) {
      var a, s;
      if ("object" == typeof t) {
        "string" != typeof n && ((i = i || n), (n = void 0));
        for (s in t) T(e, s, n, i, t[s], o);
        return e;
      }
      if (
        (null == i && null == r
          ? ((r = n), (i = n = void 0))
          : null == r &&
            ("string" == typeof n
              ? ((r = i), (i = void 0))
              : ((r = i), (i = n), (n = void 0))),
        !1 === r)
      )
        r = w;
      else if (!r) return e;
      return (
        1 === o &&
          ((a = r),
          (r = function (e) {
            return me().off(e), a.apply(this, arguments);
          }),
          (r.guid = a.guid || (a.guid = me.guid++))),
        e.each(function () {
          me.event.add(this, t, r, i, n);
        })
      );
    }
    function C(e, t) {
      return r(e, "table") && r(11 !== t.nodeType ? t : t.firstChild, "tr")
        ? me(">tbody", e)[0] || e
        : e;
    }
    function S(e) {
      return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function A(e) {
      var t = it.exec(e.type);
      return t ? (e.type = t[1]) : e.removeAttribute("type"), e;
    }
    function D(e, t) {
      var n, i, r, o, a, s, l, u;
      if (1 === t.nodeType) {
        if (
          He.hasData(e) &&
          ((o = He.access(e)), (a = He.set(t, o)), (u = o.events))
        ) {
          delete a.handle, (a.events = {});
          for (r in u)
            for (n = 0, i = u[r].length; n < i; n++)
              me.event.add(t, r, u[r][n]);
        }
        Pe.hasData(e) &&
          ((s = Pe.access(e)), (l = me.extend({}, s)), Pe.set(t, l));
      }
    }
    function O(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ge.test(e.type)
        ? (t.checked = e.checked)
        : ("input" !== n && "textarea" !== n) ||
          (t.defaultValue = e.defaultValue);
    }
    function I(e, t, i, r) {
      t = oe.apply([], t);
      var o,
        a,
        s,
        l,
        u,
        c,
        p = 0,
        d = e.length,
        f = d - 1,
        h = t[0],
        m = me.isFunction(h);
      if (m || (d > 1 && "string" == typeof h && !fe.checkClone && nt.test(h)))
        return e.each(function (n) {
          var o = e.eq(n);
          m && (t[0] = h.call(this, n, o.html())), I(o, t, i, r);
        });
      if (
        d &&
        ((o = x(t, e[0].ownerDocument, !1, e, r)),
        (a = o.firstChild),
        1 === o.childNodes.length && (o = a),
        a || r)
      ) {
        for (s = me.map(b(o, "script"), S), l = s.length; p < d; p++)
          (u = o),
            p !== f &&
              ((u = me.clone(u, !0, !0)), l && me.merge(s, b(u, "script"))),
            i.call(e[p], u, p);
        if (l)
          for (
            c = s[s.length - 1].ownerDocument, me.map(s, A), p = 0;
            p < l;
            p++
          )
            (u = s[p]),
              $e.test(u.type || "") &&
                !He.access(u, "globalEval") &&
                me.contains(c, u) &&
                (u.src
                  ? me._evalUrl && me._evalUrl(u.src)
                  : n(u.textContent.replace(rt, ""), c));
      }
      return e;
    }
    function N(e, t, n) {
      for (var i, r = t ? me.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
        n || 1 !== i.nodeType || me.cleanData(b(i)),
          i.parentNode &&
            (n && me.contains(i.ownerDocument, i) && y(b(i, "script")),
            i.parentNode.removeChild(i));
      return e;
    }
    function k(e, t, n) {
      var i,
        r,
        o,
        a,
        s = e.style;
      return (
        (n = n || st(e)),
        n &&
          ((a = n.getPropertyValue(t) || n[t]),
          "" !== a || me.contains(e.ownerDocument, e) || (a = me.style(e, t)),
          !fe.pixelMarginRight() &&
            at.test(a) &&
            ot.test(t) &&
            ((i = s.width),
            (r = s.minWidth),
            (o = s.maxWidth),
            (s.minWidth = s.maxWidth = s.width = a),
            (a = n.width),
            (s.width = i),
            (s.minWidth = r),
            (s.maxWidth = o))),
        void 0 !== a ? a + "" : a
      );
    }
    function L(e, t) {
      return {
        get: function () {
          return e()
            ? void delete this.get
            : (this.get = t).apply(this, arguments);
        },
      };
    }
    function j(e) {
      if (e in ft) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = dt.length; n--; )
        if ((e = dt[n] + t) in ft) return e;
    }
    function H(e) {
      var t = me.cssProps[e];
      return t || (t = me.cssProps[e] = j(e) || e), t;
    }
    function P(e, t, n) {
      var i = Be.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function R(e, t, n, i, r) {
      var o,
        a = 0;
      for (
        o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0;
        o < 4;
        o += 2
      )
        "margin" === n && (a += me.css(e, n + We[o], !0, r)),
          i
            ? ("content" === n && (a -= me.css(e, "padding" + We[o], !0, r)),
              "margin" !== n &&
                (a -= me.css(e, "border" + We[o] + "Width", !0, r)))
            : ((a += me.css(e, "padding" + We[o], !0, r)),
              "padding" !== n &&
                (a += me.css(e, "border" + We[o] + "Width", !0, r)));
      return a;
    }
    function M(e, t, n) {
      var i,
        r = st(e),
        o = k(e, t, r),
        a = "border-box" === me.css(e, "boxSizing", !1, r);
      return at.test(o)
        ? o
        : ((i = a && (fe.boxSizingReliable() || o === e.style[t])),
          "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]),
          (o = parseFloat(o) || 0) +
            R(e, t, n || (a ? "border" : "content"), i, r) +
            "px");
    }
    function F(e, t, n, i, r) {
      return new F.prototype.init(e, t, n, i, r);
    }
    function B() {
      mt &&
        (!1 === ne.hidden && e.requestAnimationFrame
          ? e.requestAnimationFrame(B)
          : e.setTimeout(B, me.fx.interval),
        me.fx.tick());
    }
    function W() {
      return (
        e.setTimeout(function () {
          ht = void 0;
        }),
        (ht = me.now())
      );
    }
    function q(e, t) {
      var n,
        i = 0,
        r = { height: e };
      for (t = t ? 1 : 0; i < 4; i += 2 - t)
        (n = We[i]), (r["margin" + n] = r["padding" + n] = e);
      return t && (r.opacity = r.width = e), r;
    }
    function U(e, t, n) {
      for (
        var i,
          r = (z.tweeners[t] || []).concat(z.tweeners["*"]),
          o = 0,
          a = r.length;
        o < a;
        o++
      )
        if ((i = r[o].call(n, t, e))) return i;
    }
    function V(e, t, n) {
      var i,
        r,
        o,
        a,
        s,
        l,
        u,
        c,
        p = "width" in t || "height" in t,
        d = this,
        f = {},
        h = e.style,
        m = e.nodeType && qe(e),
        g = He.get(e, "fxshow");
      n.queue ||
        ((a = me._queueHooks(e, "fx")),
        null == a.unqueued &&
          ((a.unqueued = 0),
          (s = a.empty.fire),
          (a.empty.fire = function () {
            a.unqueued || s();
          })),
        a.unqueued++,
        d.always(function () {
          d.always(function () {
            a.unqueued--, me.queue(e, "fx").length || a.empty.fire();
          });
        }));
      for (i in t)
        if (((r = t[i]), gt.test(r))) {
          if (
            (delete t[i],
            (o = o || "toggle" === r),
            r === (m ? "hide" : "show"))
          ) {
            if ("show" !== r || !g || void 0 === g[i]) continue;
            m = !0;
          }
          f[i] = (g && g[i]) || me.style(e, i);
        }
      if ((l = !me.isEmptyObject(t)) || !me.isEmptyObject(f)) {
        p &&
          1 === e.nodeType &&
          ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
          (u = g && g.display),
          null == u && (u = He.get(e, "display")),
          (c = me.css(e, "display")),
          "none" === c &&
            (u
              ? (c = u)
              : (v([e], !0),
                (u = e.style.display || u),
                (c = me.css(e, "display")),
                v([e]))),
          ("inline" === c || ("inline-block" === c && null != u)) &&
            "none" === me.css(e, "float") &&
            (l ||
              (d.done(function () {
                h.display = u;
              }),
              null == u && ((c = h.display), (u = "none" === c ? "" : c))),
            (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            d.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (l = !1);
        for (i in f)
          l ||
            (g
              ? "hidden" in g && (m = g.hidden)
              : (g = He.access(e, "fxshow", { display: u })),
            o && (g.hidden = !m),
            m && v([e], !0),
            d.done(function () {
              m || v([e]), He.remove(e, "fxshow");
              for (i in f) me.style(e, i, f[i]);
            })),
            (l = U(m ? g[i] : 0, i, d)),
            i in g ||
              ((g[i] = l.start), m && ((l.end = l.start), (l.start = 0)));
      }
    }
    function G(e, t) {
      var n, i, r, o, a;
      for (n in e)
        if (
          ((i = me.camelCase(n)),
          (r = t[i]),
          (o = e[n]),
          Array.isArray(o) && ((r = o[1]), (o = e[n] = o[0])),
          n !== i && ((e[i] = o), delete e[n]),
          (a = me.cssHooks[i]) && "expand" in a)
        ) {
          (o = a.expand(o)), delete e[i];
          for (n in o) n in e || ((e[n] = o[n]), (t[n] = r));
        } else t[i] = r;
    }
    function z(e, t, n) {
      var i,
        r,
        o = 0,
        a = z.prefilters.length,
        s = me.Deferred().always(function () {
          delete l.elem;
        }),
        l = function () {
          if (r) return !1;
          for (
            var t = ht || W(),
              n = Math.max(0, u.startTime + u.duration - t),
              i = n / u.duration || 0,
              o = 1 - i,
              a = 0,
              l = u.tweens.length;
            a < l;
            a++
          )
            u.tweens[a].run(o);
          return (
            s.notifyWith(e, [u, o, n]),
            o < 1 && l
              ? n
              : (l || s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u]), !1)
          );
        },
        u = s.promise({
          elem: e,
          props: me.extend({}, t),
          opts: me.extend(
            !0,
            { specialEasing: {}, easing: me.easing._default },
            n
          ),
          originalProperties: t,
          originalOptions: n,
          startTime: ht || W(),
          duration: n.duration,
          tweens: [],
          createTween: function (t, n) {
            var i = me.Tween(
              e,
              u.opts,
              t,
              n,
              u.opts.specialEasing[t] || u.opts.easing
            );
            return u.tweens.push(i), i;
          },
          stop: function (t) {
            var n = 0,
              i = t ? u.tweens.length : 0;
            if (r) return this;
            for (r = !0; n < i; n++) u.tweens[n].run(1);
            return (
              t
                ? (s.notifyWith(e, [u, 1, 0]), s.resolveWith(e, [u, t]))
                : s.rejectWith(e, [u, t]),
              this
            );
          },
        }),
        c = u.props;
      for (G(c, u.opts.specialEasing); o < a; o++)
        if ((i = z.prefilters[o].call(u, e, c, u.opts)))
          return (
            me.isFunction(i.stop) &&
              (me._queueHooks(u.elem, u.opts.queue).stop = me.proxy(i.stop, i)),
            i
          );
      return (
        me.map(c, U, u),
        me.isFunction(u.opts.start) && u.opts.start.call(e, u),
        u
          .progress(u.opts.progress)
          .done(u.opts.done, u.opts.complete)
          .fail(u.opts.fail)
          .always(u.opts.always),
        me.fx.timer(me.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
        u
      );
    }
    function $(e) {
      return (e.match(Ie) || []).join(" ");
    }
    function X(e) {
      return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function Q(e, t, n, i) {
      var r;
      if (Array.isArray(t))
        me.each(t, function (t, r) {
          n || At.test(e)
            ? i(e, r)
            : Q(
                e + "[" + ("object" == typeof r && null != r ? t : "") + "]",
                r,
                n,
                i
              );
        });
      else if (n || "object" !== me.type(t)) i(e, t);
      else for (r in t) Q(e + "[" + r + "]", t[r], n, i);
    }
    function K(e) {
      return function (t, n) {
        "string" != typeof t && ((n = t), (t = "*"));
        var i,
          r = 0,
          o = t.toLowerCase().match(Ie) || [];
        if (me.isFunction(n))
          for (; (i = o[r++]); )
            "+" === i[0]
              ? ((i = i.slice(1) || "*"), (e[i] = e[i] || []).unshift(n))
              : (e[i] = e[i] || []).push(n);
      };
    }
    function Y(e, t, n, i) {
      function r(s) {
        var l;
        return (
          (o[s] = !0),
          me.each(e[s] || [], function (e, s) {
            var u = s(t, n, i);
            return "string" != typeof u || a || o[u]
              ? a
                ? !(l = u)
                : void 0
              : (t.dataTypes.unshift(u), r(u), !1);
          }),
          l
        );
      }
      var o = {},
        a = e === Ft;
      return r(t.dataTypes[0]) || (!o["*"] && r("*"));
    }
    function J(e, t) {
      var n,
        i,
        r = me.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && me.extend(!0, e, i), e;
    }
    function Z(e, t, n) {
      for (var i, r, o, a, s = e.contents, l = e.dataTypes; "*" === l[0]; )
        l.shift(),
          void 0 === i &&
            (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)
        for (r in s)
          if (s[r] && s[r].test(i)) {
            l.unshift(r);
            break;
          }
      if (l[0] in n) o = l[0];
      else {
        for (r in n) {
          if (!l[0] || e.converters[r + " " + l[0]]) {
            o = r;
            break;
          }
          a || (a = r);
        }
        o = o || a;
      }
      if (o) return o !== l[0] && l.unshift(o), n[o];
    }
    function ee(e, t, n, i) {
      var r,
        o,
        a,
        s,
        l,
        u = {},
        c = e.dataTypes.slice();
      if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];
      for (o = c.shift(); o; )
        if (
          (e.responseFields[o] && (n[e.responseFields[o]] = t),
          !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
          (l = o),
          (o = c.shift()))
        )
          if ("*" === o) o = l;
          else if ("*" !== l && l !== o) {
            if (!(a = u[l + " " + o] || u["* " + o]))
              for (r in u)
                if (
                  ((s = r.split(" ")),
                  s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]]))
                ) {
                  !0 === a
                    ? (a = u[r])
                    : !0 !== u[r] && ((o = s[0]), c.unshift(s[1]));
                  break;
                }
            if (!0 !== a)
              if (a && e.throws) t = a(t);
              else
                try {
                  t = a(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + l + " to " + o,
                  };
                }
          }
      return { state: "success", data: t };
    }
    var te = [],
      ne = e.document,
      ie = Object.getPrototypeOf,
      re = te.slice,
      oe = te.concat,
      ae = te.push,
      se = te.indexOf,
      le = {},
      ue = le.toString,
      ce = le.hasOwnProperty,
      pe = ce.toString,
      de = pe.call(Object),
      fe = {},
      he = "3.2.1",
      me = function (e, t) {
        return new me.fn.init(e, t);
      },
      ge = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ve = /^-ms-/,
      be = /-([a-z])/g,
      ye = function (e, t) {
        return t.toUpperCase();
      };
    (me.fn = me.prototype =
      {
        jquery: he,
        constructor: me,
        length: 0,
        toArray: function () {
          return re.call(this);
        },
        get: function (e) {
          return null == e
            ? re.call(this)
            : e < 0
            ? this[e + this.length]
            : this[e];
        },
        pushStack: function (e) {
          var t = me.merge(this.constructor(), e);
          return (t.prevObject = this), t;
        },
        each: function (e) {
          return me.each(this, e);
        },
        map: function (e) {
          return this.pushStack(
            me.map(this, function (t, n) {
              return e.call(t, n, t);
            })
          );
        },
        slice: function () {
          return this.pushStack(re.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (e) {
          var t = this.length,
            n = +e + (e < 0 ? t : 0);
          return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: ae,
        sort: te.sort,
        splice: te.splice,
      }),
      (me.extend = me.fn.extend =
        function () {
          var e,
            t,
            n,
            i,
            r,
            o,
            a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1;
          for (
            "boolean" == typeof a && ((u = a), (a = arguments[s] || {}), s++),
              "object" == typeof a || me.isFunction(a) || (a = {}),
              s === l && ((a = this), s--);
            s < l;
            s++
          )
            if (null != (e = arguments[s]))
              for (t in e)
                (n = a[t]),
                  (i = e[t]),
                  a !== i &&
                    (u && i && (me.isPlainObject(i) || (r = Array.isArray(i)))
                      ? (r
                          ? ((r = !1), (o = n && Array.isArray(n) ? n : []))
                          : (o = n && me.isPlainObject(n) ? n : {}),
                        (a[t] = me.extend(u, o, i)))
                      : void 0 !== i && (a[t] = i));
          return a;
        }),
      me.extend({
        expando: "jQuery" + (he + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (e) {
          throw new Error(e);
        },
        noop: function () {},
        isFunction: function (e) {
          return "function" === me.type(e);
        },
        isWindow: function (e) {
          return null != e && e === e.window;
        },
        isNumeric: function (e) {
          var t = me.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        },
        isPlainObject: function (e) {
          var t, n;
          return !(
            !e ||
            "[object Object]" !== ue.call(e) ||
            ((t = ie(e)) &&
              ("function" !=
                typeof (n = ce.call(t, "constructor") && t.constructor) ||
                pe.call(n) !== de))
          );
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? le[ue.call(e)] || "object"
            : typeof e;
        },
        globalEval: function (e) {
          n(e);
        },
        camelCase: function (e) {
          return e.replace(ve, "ms-").replace(be, ye);
        },
        each: function (e, t) {
          var n,
            r = 0;
          if (i(e))
            for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
          else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e;
        },
        trim: function (e) {
          return null == e ? "" : (e + "").replace(ge, "");
        },
        makeArray: function (e, t) {
          var n = t || [];
          return (
            null != e &&
              (i(Object(e))
                ? me.merge(n, "string" == typeof e ? [e] : e)
                : ae.call(n, e)),
            n
          );
        },
        inArray: function (e, t, n) {
          return null == t ? -1 : se.call(t, e, n);
        },
        merge: function (e, t) {
          for (var n = +t.length, i = 0, r = e.length; i < n; i++)
            e[r++] = t[i];
          return (e.length = r), e;
        },
        grep: function (e, t, n) {
          for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
            !t(e[r], r) !== a && i.push(e[r]);
          return i;
        },
        map: function (e, t, n) {
          var r,
            o,
            a = 0,
            s = [];
          if (i(e))
            for (r = e.length; a < r; a++)
              null != (o = t(e[a], a, n)) && s.push(o);
          else for (a in e) null != (o = t(e[a], a, n)) && s.push(o);
          return oe.apply([], s);
        },
        guid: 1,
        proxy: function (e, t) {
          var n, i, r;
          if (
            ("string" == typeof t && ((n = e[t]), (t = e), (e = n)),
            me.isFunction(e))
          )
            return (
              (i = re.call(arguments, 2)),
              (r = function () {
                return e.apply(t || this, i.concat(re.call(arguments)));
              }),
              (r.guid = e.guid = e.guid || me.guid++),
              r
            );
        },
        now: Date.now,
        support: fe,
      }),
      "function" == typeof Symbol &&
        (me.fn[Symbol.iterator] = te[Symbol.iterator]),
      me.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (e, t) {
          le["[object " + t + "]"] = t.toLowerCase();
        }
      );
    var xe = (function (e) {
      function t(e, t, n, i) {
        var r,
          o,
          a,
          s,
          l,
          c,
          d,
          f = t && t.ownerDocument,
          h = t ? t.nodeType : 9;
        if (
          ((n = n || []),
          "string" != typeof e || !e || (1 !== h && 9 !== h && 11 !== h))
        )
          return n;
        if (
          !i &&
          ((t ? t.ownerDocument || t : F) !== N && I(t), (t = t || N), L)
        ) {
          if (11 !== h && (l = me.exec(e)))
            if ((r = l[1])) {
              if (9 === h) {
                if (!(a = t.getElementById(r))) return n;
                if (a.id === r) return n.push(a), n;
              } else if (
                f &&
                (a = f.getElementById(r)) &&
                R(t, a) &&
                a.id === r
              )
                return n.push(a), n;
            } else {
              if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
              if (
                (r = l[3]) &&
                x.getElementsByClassName &&
                t.getElementsByClassName
              )
                return K.apply(n, t.getElementsByClassName(r)), n;
            }
          if (x.qsa && !V[e + " "] && (!j || !j.test(e))) {
            if (1 !== h) (f = t), (d = e);
            else if ("object" !== t.nodeName.toLowerCase()) {
              for (
                (s = t.getAttribute("id"))
                  ? (s = s.replace(ye, xe))
                  : t.setAttribute("id", (s = M)),
                  c = T(e),
                  o = c.length;
                o--;

              )
                c[o] = "#" + s + " " + p(c[o]);
              (d = c.join(",")), (f = (ge.test(e) && u(t.parentNode)) || t);
            }
            if (d)
              try {
                return K.apply(n, f.querySelectorAll(d)), n;
              } catch (e) {
              } finally {
                s === M && t.removeAttribute("id");
              }
          }
        }
        return S(e.replace(oe, "$1"), t, n, i);
      }
      function n() {
        function e(n, i) {
          return (
            t.push(n + " ") > _.cacheLength && delete e[t.shift()],
            (e[n + " "] = i)
          );
        }
        var t = [];
        return e;
      }
      function i(e) {
        return (e[M] = !0), e;
      }
      function r(e) {
        var t = N.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function o(e, t) {
        for (var n = e.split("|"), i = n.length; i--; ) _.attrHandle[n[i]] = t;
      }
      function a(e, t) {
        var n = t && e,
          i =
            n &&
            1 === e.nodeType &&
            1 === t.nodeType &&
            e.sourceIndex - t.sourceIndex;
        if (i) return i;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function s(e) {
        return function (t) {
          return "form" in t
            ? t.parentNode && !1 === t.disabled
              ? "label" in t
                ? "label" in t.parentNode
                  ? t.parentNode.disabled === e
                  : t.disabled === e
                : t.isDisabled === e || (t.isDisabled !== !e && we(t) === e)
              : t.disabled === e
            : "label" in t && t.disabled === e;
        };
      }
      function l(e) {
        return i(function (t) {
          return (
            (t = +t),
            i(function (n, i) {
              for (var r, o = e([], n.length, t), a = o.length; a--; )
                n[(r = o[a])] && (n[r] = !(i[r] = n[r]));
            })
          );
        });
      }
      function u(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      function c() {}
      function p(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i;
      }
      function d(e, t, n) {
        var i = t.dir,
          r = t.next,
          o = r || i,
          a = n && "parentNode" === o,
          s = W++;
        return t.first
          ? function (t, n, r) {
              for (; (t = t[i]); ) if (1 === t.nodeType || a) return e(t, n, r);
              return !1;
            }
          : function (t, n, l) {
              var u,
                c,
                p,
                d = [B, s];
              if (l) {
                for (; (t = t[i]); )
                  if ((1 === t.nodeType || a) && e(t, n, l)) return !0;
              } else
                for (; (t = t[i]); )
                  if (1 === t.nodeType || a)
                    if (
                      ((p = t[M] || (t[M] = {})),
                      (c = p[t.uniqueID] || (p[t.uniqueID] = {})),
                      r && r === t.nodeName.toLowerCase())
                    )
                      t = t[i] || t;
                    else {
                      if ((u = c[o]) && u[0] === B && u[1] === s)
                        return (d[2] = u[2]);
                      if (((c[o] = d), (d[2] = e(t, n, l)))) return !0;
                    }
              return !1;
            };
      }
      function f(e) {
        return e.length > 1
          ? function (t, n, i) {
              for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
              return !0;
            }
          : e[0];
      }
      function h(e, n, i) {
        for (var r = 0, o = n.length; r < o; r++) t(e, n[r], i);
        return i;
      }
      function m(e, t, n, i, r) {
        for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++)
          (o = e[s]) && ((n && !n(o, i, r)) || (a.push(o), u && t.push(s)));
        return a;
      }
      function g(e, t, n, r, o, a) {
        return (
          r && !r[M] && (r = g(r)),
          o && !o[M] && (o = g(o, a)),
          i(function (i, a, s, l) {
            var u,
              c,
              p,
              d = [],
              f = [],
              g = a.length,
              v = i || h(t || "*", s.nodeType ? [s] : s, []),
              b = !e || (!i && t) ? v : m(v, d, e, s, l),
              y = n ? (o || (i ? e : g || r) ? [] : a) : b;
            if ((n && n(b, y, s, l), r))
              for (u = m(y, f), r(u, [], s, l), c = u.length; c--; )
                (p = u[c]) && (y[f[c]] = !(b[f[c]] = p));
            if (i) {
              if (o || e) {
                if (o) {
                  for (u = [], c = y.length; c--; )
                    (p = y[c]) && u.push((b[c] = p));
                  o(null, (y = []), u, l);
                }
                for (c = y.length; c--; )
                  (p = y[c]) &&
                    (u = o ? J(i, p) : d[c]) > -1 &&
                    (i[u] = !(a[u] = p));
              }
            } else (y = m(y === a ? y.splice(g, y.length) : y)), o ? o(null, a, y, l) : K.apply(a, y);
          })
        );
      }
      function v(e) {
        for (
          var t,
            n,
            i,
            r = e.length,
            o = _.relative[e[0].type],
            a = o || _.relative[" "],
            s = o ? 1 : 0,
            l = d(
              function (e) {
                return e === t;
              },
              a,
              !0
            ),
            u = d(
              function (e) {
                return J(t, e) > -1;
              },
              a,
              !0
            ),
            c = [
              function (e, n, i) {
                var r =
                  (!o && (i || n !== A)) ||
                  ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return (t = null), r;
              },
            ];
          s < r;
          s++
        )
          if ((n = _.relative[e[s].type])) c = [d(f(c), n)];
          else {
            if (((n = _.filter[e[s].type].apply(null, e[s].matches)), n[M])) {
              for (i = ++s; i < r && !_.relative[e[i].type]; i++);
              return g(
                s > 1 && f(c),
                s > 1 &&
                  p(
                    e
                      .slice(0, s - 1)
                      .concat({ value: " " === e[s - 2].type ? "*" : "" })
                  ).replace(oe, "$1"),
                n,
                s < i && v(e.slice(s, i)),
                i < r && v((e = e.slice(i))),
                i < r && p(e)
              );
            }
            c.push(n);
          }
        return f(c);
      }
      function b(e, n) {
        var r = n.length > 0,
          o = e.length > 0,
          a = function (i, a, s, l, u) {
            var c,
              p,
              d,
              f = 0,
              h = "0",
              g = i && [],
              v = [],
              b = A,
              y = i || (o && _.find.TAG("*", u)),
              x = (B += null == b ? 1 : Math.random() || 0.1),
              w = y.length;
            for (
              u && (A = a === N || a || u);
              h !== w && null != (c = y[h]);
              h++
            ) {
              if (o && c) {
                for (
                  p = 0, a || c.ownerDocument === N || (I(c), (s = !L));
                  (d = e[p++]);

                )
                  if (d(c, a || N, s)) {
                    l.push(c);
                    break;
                  }
                u && (B = x);
              }
              r && ((c = !d && c) && f--, i && g.push(c));
            }
            if (((f += h), r && h !== f)) {
              for (p = 0; (d = n[p++]); ) d(g, v, a, s);
              if (i) {
                if (f > 0) for (; h--; ) g[h] || v[h] || (v[h] = X.call(l));
                v = m(v);
              }
              K.apply(l, v),
                u && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l);
            }
            return u && ((B = x), (A = b)), g;
          };
        return r ? i(a) : a;
      }
      var y,
        x,
        _,
        w,
        E,
        T,
        C,
        S,
        A,
        D,
        O,
        I,
        N,
        k,
        L,
        j,
        H,
        P,
        R,
        M = "sizzle" + 1 * new Date(),
        F = e.document,
        B = 0,
        W = 0,
        q = n(),
        U = n(),
        V = n(),
        G = function (e, t) {
          return e === t && (O = !0), 0;
        },
        z = {}.hasOwnProperty,
        $ = [],
        X = $.pop,
        Q = $.push,
        K = $.push,
        Y = $.slice,
        J = function (e, t) {
          for (var n = 0, i = e.length; n < i; n++) if (e[n] === t) return n;
          return -1;
        },
        Z =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        ne =
          "\\[" +
          ee +
          "*(" +
          te +
          ")(?:" +
          ee +
          "*([*^$|!~]?=)" +
          ee +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          te +
          "))|)" +
          ee +
          "*\\]",
        ie =
          ":(" +
          te +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          ne +
          ")*)|.*)\\)|)",
        re = new RegExp(ee + "+", "g"),
        oe = new RegExp(
          "^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$",
          "g"
        ),
        ae = new RegExp("^" + ee + "*," + ee + "*"),
        se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
        ue = new RegExp(ie),
        ce = new RegExp("^" + te + "$"),
        pe = {
          ID: new RegExp("^#(" + te + ")"),
          CLASS: new RegExp("^\\.(" + te + ")"),
          TAG: new RegExp("^(" + te + "|[*])"),
          ATTR: new RegExp("^" + ne),
          PSEUDO: new RegExp("^" + ie),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ee +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ee +
              "*(?:([+-]|)" +
              ee +
              "*(\\d+)|))" +
              ee +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + Z + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ee +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ee +
              "*((?:-\\d)?\\d*)" +
              ee +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        de = /^(?:input|select|textarea|button)$/i,
        fe = /^h\d$/i,
        he = /^[^{]+\{\s*\[native \w/,
        me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ge = /[+~]/,
        ve = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        be = function (e, t, n) {
          var i = "0x" + t - 65536;
          return i !== i || n
            ? t
            : i < 0
            ? String.fromCharCode(i + 65536)
            : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
        },
        ye = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        xe = function (e, t) {
          return t
            ? "\0" === e
              ? "�"
              : e.slice(0, -1) +
                "\\" +
                e.charCodeAt(e.length - 1).toString(16) +
                " "
            : "\\" + e;
        },
        _e = function () {
          I();
        },
        we = d(
          function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        K.apply(($ = Y.call(F.childNodes)), F.childNodes),
          $[F.childNodes.length].nodeType;
      } catch (e) {
        K = {
          apply: $.length
            ? function (e, t) {
                Q.apply(e, Y.call(t));
              }
            : function (e, t) {
                for (var n = e.length, i = 0; (e[n++] = t[i++]); );
                e.length = n - 1;
              },
        };
      }
      (x = t.support = {}),
        (E = t.isXML =
          function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          }),
        (I = t.setDocument =
          function (e) {
            var t,
              n,
              i = e ? e.ownerDocument || e : F;
            return i !== N && 9 === i.nodeType && i.documentElement
              ? ((N = i),
                (k = N.documentElement),
                (L = !E(N)),
                F !== N &&
                  (n = N.defaultView) &&
                  n.top !== n &&
                  (n.addEventListener
                    ? n.addEventListener("unload", _e, !1)
                    : n.attachEvent && n.attachEvent("onunload", _e)),
                (x.attributes = r(function (e) {
                  return (e.className = "i"), !e.getAttribute("className");
                })),
                (x.getElementsByTagName = r(function (e) {
                  return (
                    e.appendChild(N.createComment("")),
                    !e.getElementsByTagName("*").length
                  );
                })),
                (x.getElementsByClassName = he.test(N.getElementsByClassName)),
                (x.getById = r(function (e) {
                  return (
                    (k.appendChild(e).id = M),
                    !N.getElementsByName || !N.getElementsByName(M).length
                  );
                })),
                x.getById
                  ? ((_.filter.ID = function (e) {
                      var t = e.replace(ve, be);
                      return function (e) {
                        return e.getAttribute("id") === t;
                      };
                    }),
                    (_.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && L) {
                        var n = t.getElementById(e);
                        return n ? [n] : [];
                      }
                    }))
                  : ((_.filter.ID = function (e) {
                      var t = e.replace(ve, be);
                      return function (e) {
                        var n =
                          void 0 !== e.getAttributeNode &&
                          e.getAttributeNode("id");
                        return n && n.value === t;
                      };
                    }),
                    (_.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && L) {
                        var n,
                          i,
                          r,
                          o = t.getElementById(e);
                        if (o) {
                          if ((n = o.getAttributeNode("id")) && n.value === e)
                            return [o];
                          for (
                            r = t.getElementsByName(e), i = 0;
                            (o = r[i++]);

                          )
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                        }
                        return [];
                      }
                    })),
                (_.find.TAG = x.getElementsByTagName
                  ? function (e, t) {
                      return void 0 !== t.getElementsByTagName
                        ? t.getElementsByTagName(e)
                        : x.qsa
                        ? t.querySelectorAll(e)
                        : void 0;
                    }
                  : function (e, t) {
                      var n,
                        i = [],
                        r = 0,
                        o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; (n = o[r++]); ) 1 === n.nodeType && i.push(n);
                        return i;
                      }
                      return o;
                    }),
                (_.find.CLASS =
                  x.getElementsByClassName &&
                  function (e, t) {
                    if (void 0 !== t.getElementsByClassName && L)
                      return t.getElementsByClassName(e);
                  }),
                (H = []),
                (j = []),
                (x.qsa = he.test(N.querySelectorAll)) &&
                  (r(function (e) {
                    (k.appendChild(e).innerHTML =
                      "<a id='" +
                      M +
                      "'></a><select id='" +
                      M +
                      "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                      e.querySelectorAll("[msallowcapture^='']").length &&
                        j.push("[*^$]=" + ee + "*(?:''|\"\")"),
                      e.querySelectorAll("[selected]").length ||
                        j.push("\\[" + ee + "*(?:value|" + Z + ")"),
                      e.querySelectorAll("[id~=" + M + "-]").length ||
                        j.push("~="),
                      e.querySelectorAll(":checked").length ||
                        j.push(":checked"),
                      e.querySelectorAll("a#" + M + "+*").length ||
                        j.push(".#.+[+~]");
                  }),
                  r(function (e) {
                    e.innerHTML =
                      "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = N.createElement("input");
                    t.setAttribute("type", "hidden"),
                      e.appendChild(t).setAttribute("name", "D"),
                      e.querySelectorAll("[name=d]").length &&
                        j.push("name" + ee + "*[*^$|!~]?="),
                      2 !== e.querySelectorAll(":enabled").length &&
                        j.push(":enabled", ":disabled"),
                      (k.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        j.push(":enabled", ":disabled"),
                      e.querySelectorAll("*,:x"),
                      j.push(",.*:");
                  })),
                (x.matchesSelector = he.test(
                  (P =
                    k.matches ||
                    k.webkitMatchesSelector ||
                    k.mozMatchesSelector ||
                    k.oMatchesSelector ||
                    k.msMatchesSelector)
                )) &&
                  r(function (e) {
                    (x.disconnectedMatch = P.call(e, "*")),
                      P.call(e, "[s!='']:x"),
                      H.push("!=", ie);
                  }),
                (j = j.length && new RegExp(j.join("|"))),
                (H = H.length && new RegExp(H.join("|"))),
                (t = he.test(k.compareDocumentPosition)),
                (R =
                  t || he.test(k.contains)
                    ? function (e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e,
                          i = t && t.parentNode;
                        return (
                          e === i ||
                          !(
                            !i ||
                            1 !== i.nodeType ||
                            !(n.contains
                              ? n.contains(i)
                              : e.compareDocumentPosition &&
                                16 & e.compareDocumentPosition(i))
                          )
                        );
                      }
                    : function (e, t) {
                        if (t)
                          for (; (t = t.parentNode); ) if (t === e) return !0;
                        return !1;
                      }),
                (G = t
                  ? function (e, t) {
                      if (e === t) return (O = !0), 0;
                      var n =
                        !e.compareDocumentPosition - !t.compareDocumentPosition;
                      return (
                        n ||
                        ((n =
                          (e.ownerDocument || e) === (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1),
                        1 & n ||
                        (!x.sortDetached && t.compareDocumentPosition(e) === n)
                          ? e === N || (e.ownerDocument === F && R(F, e))
                            ? -1
                            : t === N || (t.ownerDocument === F && R(F, t))
                            ? 1
                            : D
                            ? J(D, e) - J(D, t)
                            : 0
                          : 4 & n
                          ? -1
                          : 1)
                      );
                    }
                  : function (e, t) {
                      if (e === t) return (O = !0), 0;
                      var n,
                        i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        s = [e],
                        l = [t];
                      if (!r || !o)
                        return e === N
                          ? -1
                          : t === N
                          ? 1
                          : r
                          ? -1
                          : o
                          ? 1
                          : D
                          ? J(D, e) - J(D, t)
                          : 0;
                      if (r === o) return a(e, t);
                      for (n = e; (n = n.parentNode); ) s.unshift(n);
                      for (n = t; (n = n.parentNode); ) l.unshift(n);
                      for (; s[i] === l[i]; ) i++;
                      return i
                        ? a(s[i], l[i])
                        : s[i] === F
                        ? -1
                        : l[i] === F
                        ? 1
                        : 0;
                    }),
                N)
              : N;
          }),
        (t.matches = function (e, n) {
          return t(e, null, null, n);
        }),
        (t.matchesSelector = function (e, n) {
          if (
            ((e.ownerDocument || e) !== N && I(e),
            (n = n.replace(le, "='$1']")),
            x.matchesSelector &&
              L &&
              !V[n + " "] &&
              (!H || !H.test(n)) &&
              (!j || !j.test(n)))
          )
            try {
              var i = P.call(e, n);
              if (
                i ||
                x.disconnectedMatch ||
                (e.document && 11 !== e.document.nodeType)
              )
                return i;
            } catch (e) {}
          return t(n, N, null, [e]).length > 0;
        }),
        (t.contains = function (e, t) {
          return (e.ownerDocument || e) !== N && I(e), R(e, t);
        }),
        (t.attr = function (e, t) {
          (e.ownerDocument || e) !== N && I(e);
          var n = _.attrHandle[t.toLowerCase()],
            i =
              n && z.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !L) : void 0;
          return void 0 !== i
            ? i
            : x.attributes || !L
            ? e.getAttribute(t)
            : (i = e.getAttributeNode(t)) && i.specified
            ? i.value
            : null;
        }),
        (t.escape = function (e) {
          return (e + "").replace(ye, xe);
        }),
        (t.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (t.uniqueSort = function (e) {
          var t,
            n = [],
            i = 0,
            r = 0;
          if (
            ((O = !x.detectDuplicates),
            (D = !x.sortStable && e.slice(0)),
            e.sort(G),
            O)
          ) {
            for (; (t = e[r++]); ) t === e[r] && (i = n.push(r));
            for (; i--; ) e.splice(n[i], 1);
          }
          return (D = null), e;
        }),
        (w = t.getText =
          function (e) {
            var t,
              n = "",
              i = 0,
              r = e.nodeType;
            if (r) {
              if (1 === r || 9 === r || 11 === r) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) n += w(e);
              } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[i++]); ) n += w(t);
            return n;
          }),
        (_ = t.selectors =
          {
            cacheLength: 50,
            createPseudo: i,
            match: pe,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (e) {
                return (
                  (e[1] = e[1].replace(ve, be)),
                  (e[3] = (e[3] || e[4] || e[5] || "").replace(ve, be)),
                  "~=" === e[2] && (e[3] = " " + e[3] + " "),
                  e.slice(0, 4)
                );
              },
              CHILD: function (e) {
                return (
                  (e[1] = e[1].toLowerCase()),
                  "nth" === e[1].slice(0, 3)
                    ? (e[3] || t.error(e[0]),
                      (e[4] = +(e[4]
                        ? e[5] + (e[6] || 1)
                        : 2 * ("even" === e[3] || "odd" === e[3]))),
                      (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                    : e[3] && t.error(e[0]),
                  e
                );
              },
              PSEUDO: function (e) {
                var t,
                  n = !e[6] && e[2];
                return pe.CHILD.test(e[0])
                  ? null
                  : (e[3]
                      ? (e[2] = e[4] || e[5] || "")
                      : n &&
                        ue.test(n) &&
                        (t = T(n, !0)) &&
                        (t = n.indexOf(")", n.length - t) - n.length) &&
                        ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                    e.slice(0, 3));
              },
            },
            filter: {
              TAG: function (e) {
                var t = e.replace(ve, be).toLowerCase();
                return "*" === e
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
              },
              CLASS: function (e) {
                var t = q[e + " "];
                return (
                  t ||
                  ((t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) &&
                    q(e, function (e) {
                      return t.test(
                        ("string" == typeof e.className && e.className) ||
                          (void 0 !== e.getAttribute &&
                            e.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (e, n, i) {
                return function (r) {
                  var o = t.attr(r, e);
                  return null == o
                    ? "!=" === n
                    : !n ||
                        ((o += ""),
                        "=" === n
                          ? o === i
                          : "!=" === n
                          ? o !== i
                          : "^=" === n
                          ? i && 0 === o.indexOf(i)
                          : "*=" === n
                          ? i && o.indexOf(i) > -1
                          : "$=" === n
                          ? i && o.slice(-i.length) === i
                          : "~=" === n
                          ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1
                          : "|=" === n &&
                            (o === i || o.slice(0, i.length + 1) === i + "-"));
                };
              },
              CHILD: function (e, t, n, i, r) {
                var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;
                return 1 === i && 0 === r
                  ? function (e) {
                      return !!e.parentNode;
                    }
                  : function (t, n, l) {
                      var u,
                        c,
                        p,
                        d,
                        f,
                        h,
                        m = o !== a ? "nextSibling" : "previousSibling",
                        g = t.parentNode,
                        v = s && t.nodeName.toLowerCase(),
                        b = !l && !s,
                        y = !1;
                      if (g) {
                        if (o) {
                          for (; m; ) {
                            for (d = t; (d = d[m]); )
                              if (
                                s
                                  ? d.nodeName.toLowerCase() === v
                                  : 1 === d.nodeType
                              )
                                return !1;
                            h = m = "only" === e && !h && "nextSibling";
                          }
                          return !0;
                        }
                        if (((h = [a ? g.firstChild : g.lastChild]), a && b)) {
                          for (
                            d = g,
                              p = d[M] || (d[M] = {}),
                              c = p[d.uniqueID] || (p[d.uniqueID] = {}),
                              u = c[e] || [],
                              f = u[0] === B && u[1],
                              y = f && u[2],
                              d = f && g.childNodes[f];
                            (d = (++f && d && d[m]) || (y = f = 0) || h.pop());

                          )
                            if (1 === d.nodeType && ++y && d === t) {
                              c[e] = [B, f, y];
                              break;
                            }
                        } else if (
                          (b &&
                            ((d = t),
                            (p = d[M] || (d[M] = {})),
                            (c = p[d.uniqueID] || (p[d.uniqueID] = {})),
                            (u = c[e] || []),
                            (f = u[0] === B && u[1]),
                            (y = f)),
                          !1 === y)
                        )
                          for (
                            ;
                            (d =
                              (++f && d && d[m]) || (y = f = 0) || h.pop()) &&
                            ((s
                              ? d.nodeName.toLowerCase() !== v
                              : 1 !== d.nodeType) ||
                              !++y ||
                              (b &&
                                ((p = d[M] || (d[M] = {})),
                                (c = p[d.uniqueID] || (p[d.uniqueID] = {})),
                                (c[e] = [B, y])),
                              d !== t));

                          );
                        return (y -= r) === i || (y % i == 0 && y / i >= 0);
                      }
                    };
              },
              PSEUDO: function (e, n) {
                var r,
                  o =
                    _.pseudos[e] ||
                    _.setFilters[e.toLowerCase()] ||
                    t.error("unsupported pseudo: " + e);
                return o[M]
                  ? o(n)
                  : o.length > 1
                  ? ((r = [e, e, "", n]),
                    _.setFilters.hasOwnProperty(e.toLowerCase())
                      ? i(function (e, t) {
                          for (var i, r = o(e, n), a = r.length; a--; )
                            (i = J(e, r[a])), (e[i] = !(t[i] = r[a]));
                        })
                      : function (e) {
                          return o(e, 0, r);
                        })
                  : o;
              },
            },
            pseudos: {
              not: i(function (e) {
                var t = [],
                  n = [],
                  r = C(e.replace(oe, "$1"));
                return r[M]
                  ? i(function (e, t, n, i) {
                      for (var o, a = r(e, null, i, []), s = e.length; s--; )
                        (o = a[s]) && (e[s] = !(t[s] = o));
                    })
                  : function (e, i, o) {
                      return (
                        (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      );
                    };
              }),
              has: i(function (e) {
                return function (n) {
                  return t(e, n).length > 0;
                };
              }),
              contains: i(function (e) {
                return (
                  (e = e.replace(ve, be)),
                  function (t) {
                    return (
                      (t.textContent || t.innerText || w(t)).indexOf(e) > -1
                    );
                  }
                );
              }),
              lang: i(function (e) {
                return (
                  ce.test(e || "") || t.error("unsupported lang: " + e),
                  (e = e.replace(ve, be).toLowerCase()),
                  function (t) {
                    var n;
                    do {
                      if (
                        (n = L
                          ? t.lang
                          : t.getAttribute("xml:lang") ||
                            t.getAttribute("lang"))
                      )
                        return (
                          (n = n.toLowerCase()) === e ||
                          0 === n.indexOf(e + "-")
                        );
                    } while ((t = t.parentNode) && 1 === t.nodeType);
                    return !1;
                  }
                );
              }),
              target: function (t) {
                var n = e.location && e.location.hash;
                return n && n.slice(1) === t.id;
              },
              root: function (e) {
                return e === k;
              },
              focus: function (e) {
                return (
                  e === N.activeElement &&
                  (!N.hasFocus || N.hasFocus()) &&
                  !!(e.type || e.href || ~e.tabIndex)
                );
              },
              enabled: s(!1),
              disabled: s(!0),
              checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return (
                  ("input" === t && !!e.checked) ||
                  ("option" === t && !!e.selected)
                );
              },
              selected: function (e) {
                return (
                  e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                );
              },
              empty: function (e) {
                for (e = e.firstChild; e; e = e.nextSibling)
                  if (e.nodeType < 6) return !1;
                return !0;
              },
              parent: function (e) {
                return !_.pseudos.empty(e);
              },
              header: function (e) {
                return fe.test(e.nodeName);
              },
              input: function (e) {
                return de.test(e.nodeName);
              },
              button: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t && "button" === e.type) || "button" === t;
              },
              text: function (e) {
                var t;
                return (
                  "input" === e.nodeName.toLowerCase() &&
                  "text" === e.type &&
                  (null == (t = e.getAttribute("type")) ||
                    "text" === t.toLowerCase())
                );
              },
              first: l(function () {
                return [0];
              }),
              last: l(function (e, t) {
                return [t - 1];
              }),
              eq: l(function (e, t, n) {
                return [n < 0 ? n + t : n];
              }),
              even: l(function (e, t) {
                for (var n = 0; n < t; n += 2) e.push(n);
                return e;
              }),
              odd: l(function (e, t) {
                for (var n = 1; n < t; n += 2) e.push(n);
                return e;
              }),
              lt: l(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; --i >= 0; ) e.push(i);
                return e;
              }),
              gt: l(function (e, t, n) {
                for (var i = n < 0 ? n + t : n; ++i < t; ) e.push(i);
                return e;
              }),
            },
          }),
        (_.pseudos.nth = _.pseudos.eq);
      for (y in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        _.pseudos[y] = (function (e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        })(y);
      for (y in { submit: !0, reset: !0 })
        _.pseudos[y] = (function (e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();
            return ("input" === n || "button" === n) && t.type === e;
          };
        })(y);
      return (
        (c.prototype = _.filters = _.pseudos),
        (_.setFilters = new c()),
        (T = t.tokenize =
          function (e, n) {
            var i,
              r,
              o,
              a,
              s,
              l,
              u,
              c = U[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, l = [], u = _.preFilter; s; ) {
              (i && !(r = ae.exec(s))) ||
                (r && (s = s.slice(r[0].length) || s), l.push((o = []))),
                (i = !1),
                (r = se.exec(s)) &&
                  ((i = r.shift()),
                  o.push({ value: i, type: r[0].replace(oe, " ") }),
                  (s = s.slice(i.length)));
              for (a in _.filter)
                !(r = pe[a].exec(s)) ||
                  (u[a] && !(r = u[a](r))) ||
                  ((i = r.shift()),
                  o.push({ value: i, type: a, matches: r }),
                  (s = s.slice(i.length)));
              if (!i) break;
            }
            return n ? s.length : s ? t.error(e) : U(e, l).slice(0);
          }),
        (C = t.compile =
          function (e, t) {
            var n,
              i = [],
              r = [],
              o = V[e + " "];
            if (!o) {
              for (t || (t = T(e)), n = t.length; n--; )
                (o = v(t[n])), o[M] ? i.push(o) : r.push(o);
              (o = V(e, b(r, i))), (o.selector = e);
            }
            return o;
          }),
        (S = t.select =
          function (e, t, n, i) {
            var r,
              o,
              a,
              s,
              l,
              c = "function" == typeof e && e,
              d = !i && T((e = c.selector || e));
            if (((n = n || []), 1 === d.length)) {
              if (
                ((o = d[0] = d[0].slice(0)),
                o.length > 2 &&
                  "ID" === (a = o[0]).type &&
                  9 === t.nodeType &&
                  L &&
                  _.relative[o[1].type])
              ) {
                if (
                  !(t = (_.find.ID(a.matches[0].replace(ve, be), t) || [])[0])
                )
                  return n;
                c && (t = t.parentNode), (e = e.slice(o.shift().value.length));
              }
              for (
                r = pe.needsContext.test(e) ? 0 : o.length;
                r-- && ((a = o[r]), !_.relative[(s = a.type)]);

              )
                if (
                  (l = _.find[s]) &&
                  (i = l(
                    a.matches[0].replace(ve, be),
                    (ge.test(o[0].type) && u(t.parentNode)) || t
                  ))
                ) {
                  if ((o.splice(r, 1), !(e = i.length && p(o))))
                    return K.apply(n, i), n;
                  break;
                }
            }
            return (
              (c || C(e, d))(
                i,
                t,
                !L,
                n,
                !t || (ge.test(e) && u(t.parentNode)) || t
              ),
              n
            );
          }),
        (x.sortStable = M.split("").sort(G).join("") === M),
        (x.detectDuplicates = !!O),
        I(),
        (x.sortDetached = r(function (e) {
          return 1 & e.compareDocumentPosition(N.createElement("fieldset"));
        })),
        r(function (e) {
          return (
            (e.innerHTML = "<a href='#'></a>"),
            "#" === e.firstChild.getAttribute("href")
          );
        }) ||
          o("type|href|height|width", function (e, t, n) {
            if (!n)
              return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (x.attributes &&
          r(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          o("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase())
              return e.defaultValue;
          }),
        r(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          o(Z, function (e, t, n) {
            var i;
            if (!n)
              return !0 === e[t]
                ? t.toLowerCase()
                : (i = e.getAttributeNode(t)) && i.specified
                ? i.value
                : null;
          }),
        t
      );
    })(e);
    (me.find = xe),
      (me.expr = xe.selectors),
      (me.expr[":"] = me.expr.pseudos),
      (me.uniqueSort = me.unique = xe.uniqueSort),
      (me.text = xe.getText),
      (me.isXMLDoc = xe.isXML),
      (me.contains = xe.contains),
      (me.escapeSelector = xe.escape);
    var _e = function (e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
          if (1 === e.nodeType) {
            if (r && me(e).is(n)) break;
            i.push(e);
          }
        return i;
      },
      we = function (e, t) {
        for (var n = []; e; e = e.nextSibling)
          1 === e.nodeType && e !== t && n.push(e);
        return n;
      },
      Ee = me.expr.match.needsContext,
      Te = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
      Ce = /^.[^:#\[\.,]*$/;
    (me.filter = function (e, t, n) {
      var i = t[0];
      return (
        n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === i.nodeType
          ? me.find.matchesSelector(i, e)
            ? [i]
            : []
          : me.find.matches(
              e,
              me.grep(t, function (e) {
                return 1 === e.nodeType;
              })
            )
      );
    }),
      me.fn.extend({
        find: function (e) {
          var t,
            n,
            i = this.length,
            r = this;
          if ("string" != typeof e)
            return this.pushStack(
              me(e).filter(function () {
                for (t = 0; t < i; t++) if (me.contains(r[t], this)) return !0;
              })
            );
          for (n = this.pushStack([]), t = 0; t < i; t++) me.find(e, r[t], n);
          return i > 1 ? me.uniqueSort(n) : n;
        },
        filter: function (e) {
          return this.pushStack(o(this, e || [], !1));
        },
        not: function (e) {
          return this.pushStack(o(this, e || [], !0));
        },
        is: function (e) {
          return !!o(
            this,
            "string" == typeof e && Ee.test(e) ? me(e) : e || [],
            !1
          ).length;
        },
      });
    var Se,
      Ae = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    ((me.fn.init = function (e, t, n) {
      var i, r;
      if (!e) return this;
      if (((n = n || Se), "string" == typeof e)) {
        if (
          !(i =
            "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
              ? [null, e, null]
              : Ae.exec(e)) ||
          (!i[1] && t)
        )
          return !t || t.jquery
            ? (t || n).find(e)
            : this.constructor(t).find(e);
        if (i[1]) {
          if (
            ((t = t instanceof me ? t[0] : t),
            me.merge(
              this,
              me.parseHTML(
                i[1],
                t && t.nodeType ? t.ownerDocument || t : ne,
                !0
              )
            ),
            Te.test(i[1]) && me.isPlainObject(t))
          )
            for (i in t)
              me.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this;
        }
        return (
          (r = ne.getElementById(i[2])),
          r && ((this[0] = r), (this.length = 1)),
          this
        );
      }
      return e.nodeType
        ? ((this[0] = e), (this.length = 1), this)
        : me.isFunction(e)
        ? void 0 !== n.ready
          ? n.ready(e)
          : e(me)
        : me.makeArray(e, this);
    }).prototype = me.fn),
      (Se = me(ne));
    var De = /^(?:parents|prev(?:Until|All))/,
      Oe = { children: !0, contents: !0, next: !0, prev: !0 };
    me.fn.extend({
      has: function (e) {
        var t = me(e, this),
          n = t.length;
        return this.filter(function () {
          for (var e = 0; e < n; e++) if (me.contains(this, t[e])) return !0;
        });
      },
      closest: function (e, t) {
        var n,
          i = 0,
          r = this.length,
          o = [],
          a = "string" != typeof e && me(e);
        if (!Ee.test(e))
          for (; i < r; i++)
            for (n = this[i]; n && n !== t; n = n.parentNode)
              if (
                n.nodeType < 11 &&
                (a
                  ? a.index(n) > -1
                  : 1 === n.nodeType && me.find.matchesSelector(n, e))
              ) {
                o.push(n);
                break;
              }
        return this.pushStack(o.length > 1 ? me.uniqueSort(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? se.call(me(e), this[0])
            : se.call(this, e.jquery ? e[0] : e)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        return this.pushStack(me.uniqueSort(me.merge(this.get(), me(e, t))));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e)
        );
      },
    }),
      me.each(
        {
          parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
          },
          parents: function (e) {
            return _e(e, "parentNode");
          },
          parentsUntil: function (e, t, n) {
            return _e(e, "parentNode", n);
          },
          next: function (e) {
            return a(e, "nextSibling");
          },
          prev: function (e) {
            return a(e, "previousSibling");
          },
          nextAll: function (e) {
            return _e(e, "nextSibling");
          },
          prevAll: function (e) {
            return _e(e, "previousSibling");
          },
          nextUntil: function (e, t, n) {
            return _e(e, "nextSibling", n);
          },
          prevUntil: function (e, t, n) {
            return _e(e, "previousSibling", n);
          },
          siblings: function (e) {
            return we((e.parentNode || {}).firstChild, e);
          },
          children: function (e) {
            return we(e.firstChild);
          },
          contents: function (e) {
            return r(e, "iframe")
              ? e.contentDocument
              : (r(e, "template") && (e = e.content || e),
                me.merge([], e.childNodes));
          },
        },
        function (e, t) {
          me.fn[e] = function (n, i) {
            var r = me.map(this, t, n);
            return (
              "Until" !== e.slice(-5) && (i = n),
              i && "string" == typeof i && (r = me.filter(i, r)),
              this.length > 1 &&
                (Oe[e] || me.uniqueSort(r), De.test(e) && r.reverse()),
              this.pushStack(r)
            );
          };
        }
      );
    var Ie = /[^\x20\t\r\n\f]+/g;
    (me.Callbacks = function (e) {
      e = "string" == typeof e ? s(e) : me.extend({}, e);
      var t,
        n,
        i,
        r,
        o = [],
        a = [],
        l = -1,
        u = function () {
          for (r = r || e.once, i = t = !0; a.length; l = -1)
            for (n = a.shift(); ++l < o.length; )
              !1 === o[l].apply(n[0], n[1]) &&
                e.stopOnFalse &&
                ((l = o.length), (n = !1));
          e.memory || (n = !1), (t = !1), r && (o = n ? [] : "");
        },
        c = {
          add: function () {
            return (
              o &&
                (n && !t && ((l = o.length - 1), a.push(n)),
                (function t(n) {
                  me.each(n, function (n, i) {
                    me.isFunction(i)
                      ? (e.unique && c.has(i)) || o.push(i)
                      : i && i.length && "string" !== me.type(i) && t(i);
                  });
                })(arguments),
                n && !t && u()),
              this
            );
          },
          remove: function () {
            return (
              me.each(arguments, function (e, t) {
                for (var n; (n = me.inArray(t, o, n)) > -1; )
                  o.splice(n, 1), n <= l && l--;
              }),
              this
            );
          },
          has: function (e) {
            return e ? me.inArray(e, o) > -1 : o.length > 0;
          },
          empty: function () {
            return o && (o = []), this;
          },
          disable: function () {
            return (r = a = []), (o = n = ""), this;
          },
          disabled: function () {
            return !o;
          },
          lock: function () {
            return (r = a = []), n || t || (o = n = ""), this;
          },
          locked: function () {
            return !!r;
          },
          fireWith: function (e, n) {
            return (
              r ||
                ((n = n || []),
                (n = [e, n.slice ? n.slice() : n]),
                a.push(n),
                t || u()),
              this
            );
          },
          fire: function () {
            return c.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!i;
          },
        };
      return c;
    }),
      me.extend({
        Deferred: function (t) {
          var n = [
              [
                "notify",
                "progress",
                me.Callbacks("memory"),
                me.Callbacks("memory"),
                2,
              ],
              [
                "resolve",
                "done",
                me.Callbacks("once memory"),
                me.Callbacks("once memory"),
                0,
                "resolved",
              ],
              [
                "reject",
                "fail",
                me.Callbacks("once memory"),
                me.Callbacks("once memory"),
                1,
                "rejected",
              ],
            ],
            i = "pending",
            r = {
              state: function () {
                return i;
              },
              always: function () {
                return o.done(arguments).fail(arguments), this;
              },
              catch: function (e) {
                return r.then(null, e);
              },
              pipe: function () {
                var e = arguments;
                return me
                  .Deferred(function (t) {
                    me.each(n, function (n, i) {
                      var r = me.isFunction(e[i[4]]) && e[i[4]];
                      o[i[1]](function () {
                        var e = r && r.apply(this, arguments);
                        e && me.isFunction(e.promise)
                          ? e
                              .promise()
                              .progress(t.notify)
                              .done(t.resolve)
                              .fail(t.reject)
                          : t[i[0] + "With"](this, r ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  })
                  .promise();
              },
              then: function (t, i, r) {
                function o(t, n, i, r) {
                  return function () {
                    var s = this,
                      c = arguments,
                      p = function () {
                        var e, p;
                        if (!(t < a)) {
                          if ((e = i.apply(s, c)) === n.promise())
                            throw new TypeError("Thenable self-resolution");
                          (p =
                            e &&
                            ("object" == typeof e || "function" == typeof e) &&
                            e.then),
                            me.isFunction(p)
                              ? r
                                ? p.call(e, o(a, n, l, r), o(a, n, u, r))
                                : (a++,
                                  p.call(
                                    e,
                                    o(a, n, l, r),
                                    o(a, n, u, r),
                                    o(a, n, l, n.notifyWith)
                                  ))
                              : (i !== l && ((s = void 0), (c = [e])),
                                (r || n.resolveWith)(s, c));
                        }
                      },
                      d = r
                        ? p
                        : function () {
                            try {
                              p();
                            } catch (e) {
                              me.Deferred.exceptionHook &&
                                me.Deferred.exceptionHook(e, d.stackTrace),
                                t + 1 >= a &&
                                  (i !== u && ((s = void 0), (c = [e])),
                                  n.rejectWith(s, c));
                            }
                          };
                    t
                      ? d()
                      : (me.Deferred.getStackHook &&
                          (d.stackTrace = me.Deferred.getStackHook()),
                        e.setTimeout(d));
                  };
                }
                var a = 0;
                return me
                  .Deferred(function (e) {
                    n[0][3].add(
                      o(0, e, me.isFunction(r) ? r : l, e.notifyWith)
                    ),
                      n[1][3].add(o(0, e, me.isFunction(t) ? t : l)),
                      n[2][3].add(o(0, e, me.isFunction(i) ? i : u));
                  })
                  .promise();
              },
              promise: function (e) {
                return null != e ? me.extend(e, r) : r;
              },
            },
            o = {};
          return (
            me.each(n, function (e, t) {
              var a = t[2],
                s = t[5];
              (r[t[1]] = a.add),
                s &&
                  a.add(
                    function () {
                      i = s;
                    },
                    n[3 - e][2].disable,
                    n[0][2].lock
                  ),
                a.add(t[3].fire),
                (o[t[0]] = function () {
                  return (
                    o[t[0] + "With"](this === o ? void 0 : this, arguments),
                    this
                  );
                }),
                (o[t[0] + "With"] = a.fireWith);
            }),
            r.promise(o),
            t && t.call(o, o),
            o
          );
        },
        when: function (e) {
          var t = arguments.length,
            n = t,
            i = Array(n),
            r = re.call(arguments),
            o = me.Deferred(),
            a = function (e) {
              return function (n) {
                (i[e] = this),
                  (r[e] = arguments.length > 1 ? re.call(arguments) : n),
                  --t || o.resolveWith(i, r);
              };
            };
          if (
            t <= 1 &&
            (c(e, o.done(a(n)).resolve, o.reject, !t),
            "pending" === o.state() || me.isFunction(r[n] && r[n].then))
          )
            return o.then();
          for (; n--; ) c(r[n], a(n), o.reject);
          return o.promise();
        },
      });
    var Ne = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (me.Deferred.exceptionHook = function (t, n) {
      e.console &&
        e.console.warn &&
        t &&
        Ne.test(t.name) &&
        e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
    }),
      (me.readyException = function (t) {
        e.setTimeout(function () {
          throw t;
        });
      });
    var ke = me.Deferred();
    (me.fn.ready = function (e) {
      return (
        ke.then(e).catch(function (e) {
          me.readyException(e);
        }),
        this
      );
    }),
      me.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (e) {
          (!0 === e ? --me.readyWait : me.isReady) ||
            ((me.isReady = !0),
            (!0 !== e && --me.readyWait > 0) || ke.resolveWith(ne, [me]));
        },
      }),
      (me.ready.then = ke.then),
      "complete" === ne.readyState ||
      ("loading" !== ne.readyState && !ne.documentElement.doScroll)
        ? e.setTimeout(me.ready)
        : (ne.addEventListener("DOMContentLoaded", p),
          e.addEventListener("load", p));
    var Le = function (e, t, n, i, r, o, a) {
        var s = 0,
          l = e.length,
          u = null == n;
        if ("object" === me.type(n)) {
          r = !0;
          for (s in n) Le(e, t, s, n[s], !0, o, a);
        } else if (
          void 0 !== i &&
          ((r = !0),
          me.isFunction(i) || (a = !0),
          u &&
            (a
              ? (t.call(e, i), (t = null))
              : ((u = t),
                (t = function (e, t, n) {
                  return u.call(me(e), n);
                }))),
          t)
        )
          for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
      },
      je = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
    (d.uid = 1),
      (d.prototype = {
        cache: function (e) {
          var t = e[this.expando];
          return (
            t ||
              ((t = {}),
              je(e) &&
                (e.nodeType
                  ? (e[this.expando] = t)
                  : Object.defineProperty(e, this.expando, {
                      value: t,
                      configurable: !0,
                    }))),
            t
          );
        },
        set: function (e, t, n) {
          var i,
            r = this.cache(e);
          if ("string" == typeof t) r[me.camelCase(t)] = n;
          else for (i in t) r[me.camelCase(i)] = t[i];
          return r;
        },
        get: function (e, t) {
          return void 0 === t
            ? this.cache(e)
            : e[this.expando] && e[this.expando][me.camelCase(t)];
        },
        access: function (e, t, n) {
          return void 0 === t || (t && "string" == typeof t && void 0 === n)
            ? this.get(e, t)
            : (this.set(e, t, n), void 0 !== n ? n : t);
        },
        remove: function (e, t) {
          var n,
            i = e[this.expando];
          if (void 0 !== i) {
            if (void 0 !== t) {
              Array.isArray(t)
                ? (t = t.map(me.camelCase))
                : ((t = me.camelCase(t)),
                  (t = t in i ? [t] : t.match(Ie) || [])),
                (n = t.length);
              for (; n--; ) delete i[t[n]];
            }
            (void 0 === t || me.isEmptyObject(i)) &&
              (e.nodeType
                ? (e[this.expando] = void 0)
                : delete e[this.expando]);
          }
        },
        hasData: function (e) {
          var t = e[this.expando];
          return void 0 !== t && !me.isEmptyObject(t);
        },
      });
    var He = new d(),
      Pe = new d(),
      Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Me = /[A-Z]/g;
    me.extend({
      hasData: function (e) {
        return Pe.hasData(e) || He.hasData(e);
      },
      data: function (e, t, n) {
        return Pe.access(e, t, n);
      },
      removeData: function (e, t) {
        Pe.remove(e, t);
      },
      _data: function (e, t, n) {
        return He.access(e, t, n);
      },
      _removeData: function (e, t) {
        He.remove(e, t);
      },
    }),
      me.fn.extend({
        data: function (e, t) {
          var n,
            i,
            r,
            o = this[0],
            a = o && o.attributes;
          if (void 0 === e) {
            if (
              this.length &&
              ((r = Pe.get(o)), 1 === o.nodeType && !He.get(o, "hasDataAttrs"))
            ) {
              for (n = a.length; n--; )
                a[n] &&
                  ((i = a[n].name),
                  0 === i.indexOf("data-") &&
                    ((i = me.camelCase(i.slice(5))), h(o, i, r[i])));
              He.set(o, "hasDataAttrs", !0);
            }
            return r;
          }
          return "object" == typeof e
            ? this.each(function () {
                Pe.set(this, e);
              })
            : Le(
                this,
                function (t) {
                  var n;
                  if (o && void 0 === t) {
                    if (void 0 !== (n = Pe.get(o, e))) return n;
                    if (void 0 !== (n = h(o, e))) return n;
                  } else
                    this.each(function () {
                      Pe.set(this, e, t);
                    });
                },
                null,
                t,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (e) {
          return this.each(function () {
            Pe.remove(this, e);
          });
        },
      }),
      me.extend({
        queue: function (e, t, n) {
          var i;
          if (e)
            return (
              (t = (t || "fx") + "queue"),
              (i = He.get(e, t)),
              n &&
                (!i || Array.isArray(n)
                  ? (i = He.access(e, t, me.makeArray(n)))
                  : i.push(n)),
              i || []
            );
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var n = me.queue(e, t),
            i = n.length,
            r = n.shift(),
            o = me._queueHooks(e, t),
            a = function () {
              me.dequeue(e, t);
            };
          "inprogress" === r && ((r = n.shift()), i--),
            r &&
              ("fx" === t && n.unshift("inprogress"),
              delete o.stop,
              r.call(e, a, o)),
            !i && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var n = t + "queueHooks";
          return (
            He.get(e, n) ||
            He.access(e, n, {
              empty: me.Callbacks("once memory").add(function () {
                He.remove(e, [t + "queue", n]);
              }),
            })
          );
        },
      }),
      me.fn.extend({
        queue: function (e, t) {
          var n = 2;
          return (
            "string" != typeof e && ((t = e), (e = "fx"), n--),
            arguments.length < n
              ? me.queue(this[0], e)
              : void 0 === t
              ? this
              : this.each(function () {
                  var n = me.queue(this, e, t);
                  me._queueHooks(this, e),
                    "fx" === e && "inprogress" !== n[0] && me.dequeue(this, e);
                })
          );
        },
        dequeue: function (e) {
          return this.each(function () {
            me.dequeue(this, e);
          });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var n,
            i = 1,
            r = me.Deferred(),
            o = this,
            a = this.length,
            s = function () {
              --i || r.resolveWith(o, [o]);
            };
          for (
            "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
            a--;

          )
            (n = He.get(o[a], e + "queueHooks")) &&
              n.empty &&
              (i++, n.empty.add(s));
          return s(), r.promise(t);
        },
      });
    var Fe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Be = new RegExp("^(?:([+-])=|)(" + Fe + ")([a-z%]*)$", "i"),
      We = ["Top", "Right", "Bottom", "Left"],
      qe = function (e, t) {
        return (
          (e = t || e),
          "none" === e.style.display ||
            ("" === e.style.display &&
              me.contains(e.ownerDocument, e) &&
              "none" === me.css(e, "display"))
        );
      },
      Ue = function (e, t, n, i) {
        var r,
          o,
          a = {};
        for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = a[o];
        return r;
      },
      Ve = {};
    me.fn.extend({
      show: function () {
        return v(this, !0);
      },
      hide: function () {
        return v(this);
      },
      toggle: function (e) {
        return "boolean" == typeof e
          ? e
            ? this.show()
            : this.hide()
          : this.each(function () {
              qe(this) ? me(this).show() : me(this).hide();
            });
      },
    });
    var Ge = /^(?:checkbox|radio)$/i,
      ze = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
      $e = /^$|\/(?:java|ecma)script/i,
      Xe = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
    (Xe.optgroup = Xe.option),
      (Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead),
      (Xe.th = Xe.td);
    var Qe = /<|&#?\w+;/;
    !(function () {
      var e = ne.createDocumentFragment(),
        t = e.appendChild(ne.createElement("div")),
        n = ne.createElement("input");
      n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        t.appendChild(n),
        (fe.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (t.innerHTML = "<textarea>x</textarea>"),
        (fe.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue);
    })();
    var Ke = ne.documentElement,
      Ye = /^key/,
      Je = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      Ze = /^([^.]*)(?:\.(.+)|)/;
    (me.event = {
      global: {},
      add: function (e, t, n, i, r) {
        var o,
          a,
          s,
          l,
          u,
          c,
          p,
          d,
          f,
          h,
          m,
          g = He.get(e);
        if (g)
          for (
            n.handler && ((o = n), (n = o.handler), (r = o.selector)),
              r && me.find.matchesSelector(Ke, r),
              n.guid || (n.guid = me.guid++),
              (l = g.events) || (l = g.events = {}),
              (a = g.handle) ||
                (a = g.handle =
                  function (t) {
                    return void 0 !== me && me.event.triggered !== t.type
                      ? me.event.dispatch.apply(e, arguments)
                      : void 0;
                  }),
              t = (t || "").match(Ie) || [""],
              u = t.length;
            u--;

          )
            (s = Ze.exec(t[u]) || []),
              (f = m = s[1]),
              (h = (s[2] || "").split(".").sort()),
              f &&
                ((p = me.event.special[f] || {}),
                (f = (r ? p.delegateType : p.bindType) || f),
                (p = me.event.special[f] || {}),
                (c = me.extend(
                  {
                    type: f,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && me.expr.match.needsContext.test(r),
                    namespace: h.join("."),
                  },
                  o
                )),
                (d = l[f]) ||
                  ((d = l[f] = []),
                  (d.delegateCount = 0),
                  (p.setup && !1 !== p.setup.call(e, i, h, a)) ||
                    (e.addEventListener && e.addEventListener(f, a))),
                p.add &&
                  (p.add.call(e, c),
                  c.handler.guid || (c.handler.guid = n.guid)),
                r ? d.splice(d.delegateCount++, 0, c) : d.push(c),
                (me.event.global[f] = !0));
      },
      remove: function (e, t, n, i, r) {
        var o,
          a,
          s,
          l,
          u,
          c,
          p,
          d,
          f,
          h,
          m,
          g = He.hasData(e) && He.get(e);
        if (g && (l = g.events)) {
          for (t = (t || "").match(Ie) || [""], u = t.length; u--; )
            if (
              ((s = Ze.exec(t[u]) || []),
              (f = m = s[1]),
              (h = (s[2] || "").split(".").sort()),
              f)
            ) {
              for (
                p = me.event.special[f] || {},
                  f = (i ? p.delegateType : p.bindType) || f,
                  d = l[f] || [],
                  s =
                    s[2] &&
                    new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  a = o = d.length;
                o--;

              )
                (c = d[o]),
                  (!r && m !== c.origType) ||
                    (n && n.guid !== c.guid) ||
                    (s && !s.test(c.namespace)) ||
                    (i && i !== c.selector && ("**" !== i || !c.selector)) ||
                    (d.splice(o, 1),
                    c.selector && d.delegateCount--,
                    p.remove && p.remove.call(e, c));
              a &&
                !d.length &&
                ((p.teardown && !1 !== p.teardown.call(e, h, g.handle)) ||
                  me.removeEvent(e, f, g.handle),
                delete l[f]);
            } else for (f in l) me.event.remove(e, f + t[u], n, i, !0);
          me.isEmptyObject(l) && He.remove(e, "handle events");
        }
      },
      dispatch: function (e) {
        var t,
          n,
          i,
          r,
          o,
          a,
          s = me.event.fix(e),
          l = new Array(arguments.length),
          u = (He.get(this, "events") || {})[s.type] || [],
          c = me.event.special[s.type] || {};
        for (l[0] = s, t = 1; t < arguments.length; t++) l[t] = arguments[t];
        if (
          ((s.delegateTarget = this),
          !c.preDispatch || !1 !== c.preDispatch.call(this, s))
        ) {
          for (
            a = me.event.handlers.call(this, s, u), t = 0;
            (r = a[t++]) && !s.isPropagationStopped();

          )
            for (
              s.currentTarget = r.elem, n = 0;
              (o = r.handlers[n++]) && !s.isImmediatePropagationStopped();

            )
              (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
                ((s.handleObj = o),
                (s.data = o.data),
                void 0 !==
                  (i = (
                    (me.event.special[o.origType] || {}).handle || o.handler
                  ).apply(r.elem, l)) &&
                  !1 === (s.result = i) &&
                  (s.preventDefault(), s.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, s), s.result;
        }
      },
      handlers: function (e, t) {
        var n,
          i,
          r,
          o,
          a,
          s = [],
          l = t.delegateCount,
          u = e.target;
        if (l && u.nodeType && !("click" === e.type && e.button >= 1))
          for (; u !== this; u = u.parentNode || this)
            if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
              for (o = [], a = {}, n = 0; n < l; n++)
                (i = t[n]),
                  (r = i.selector + " "),
                  void 0 === a[r] &&
                    (a[r] = i.needsContext
                      ? me(r, this).index(u) > -1
                      : me.find(r, this, null, [u]).length),
                  a[r] && o.push(i);
              o.length && s.push({ elem: u, handlers: o });
            }
        return (
          (u = this),
          l < t.length && s.push({ elem: u, handlers: t.slice(l) }),
          s
        );
      },
      addProp: function (e, t) {
        Object.defineProperty(me.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: me.isFunction(t)
            ? function () {
                if (this.originalEvent) return t(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[e];
              },
          set: function (t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            });
          },
        });
      },
      fix: function (e) {
        return e[me.expando] ? e : new me.Event(e);
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== E() && this.focus) return this.focus(), !1;
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === E() && this.blur) return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if ("checkbox" === this.type && this.click && r(this, "input"))
              return this.click(), !1;
          },
          _default: function (e) {
            return r(e.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (e) {
            void 0 !== e.result &&
              e.originalEvent &&
              (e.originalEvent.returnValue = e.result);
          },
        },
      },
    }),
      (me.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
      }),
      (me.Event = function (e, t) {
        return this instanceof me.Event
          ? (e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented ||
                  (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? _
                    : w),
                (this.target =
                  e.target && 3 === e.target.nodeType
                    ? e.target.parentNode
                    : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
            t && me.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || me.now()),
            void (this[me.expando] = !0))
          : new me.Event(e, t);
      }),
      (me.Event.prototype = {
        constructor: me.Event,
        isDefaultPrevented: w,
        isPropagationStopped: w,
        isImmediatePropagationStopped: w,
        isSimulated: !1,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = _),
            e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = _),
            e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = _),
            e && !this.isSimulated && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      me.each(
        {
          altKey: !0,
          bubbles: !0,
          cancelable: !0,
          changedTouches: !0,
          ctrlKey: !0,
          detail: !0,
          eventPhase: !0,
          metaKey: !0,
          pageX: !0,
          pageY: !0,
          shiftKey: !0,
          view: !0,
          char: !0,
          charCode: !0,
          key: !0,
          keyCode: !0,
          button: !0,
          buttons: !0,
          clientX: !0,
          clientY: !0,
          offsetX: !0,
          offsetY: !0,
          pointerId: !0,
          pointerType: !0,
          screenX: !0,
          screenY: !0,
          targetTouches: !0,
          toElement: !0,
          touches: !0,
          which: function (e) {
            var t = e.button;
            return null == e.which && Ye.test(e.type)
              ? null != e.charCode
                ? e.charCode
                : e.keyCode
              : !e.which && void 0 !== t && Je.test(e.type)
              ? 1 & t
                ? 1
                : 2 & t
                ? 3
                : 4 & t
                ? 2
                : 0
              : e.which;
          },
        },
        me.event.addProp
      ),
      me.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (e, t) {
          me.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function (e) {
              var n,
                i = this,
                r = e.relatedTarget,
                o = e.handleObj;
              return (
                (r && (r === i || me.contains(i, r))) ||
                  ((e.type = o.origType),
                  (n = o.handler.apply(this, arguments)),
                  (e.type = t)),
                n
              );
            },
          };
        }
      ),
      me.fn.extend({
        on: function (e, t, n, i) {
          return T(this, e, t, n, i);
        },
        one: function (e, t, n, i) {
          return T(this, e, t, n, i, 1);
        },
        off: function (e, t, n) {
          var i, r;
          if (e && e.preventDefault && e.handleObj)
            return (
              (i = e.handleObj),
              me(e.delegateTarget).off(
                i.namespace ? i.origType + "." + i.namespace : i.origType,
                i.selector,
                i.handler
              ),
              this
            );
          if ("object" == typeof e) {
            for (r in e) this.off(r, t, e[r]);
            return this;
          }
          return (
            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
            !1 === n && (n = w),
            this.each(function () {
              me.event.remove(this, e, n, t);
            })
          );
        },
      });
    var et =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
      tt = /<script|<style|<link/i,
      nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      it = /^true\/(.*)/,
      rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    me.extend({
      htmlPrefilter: function (e) {
        return e.replace(et, "<$1></$2>");
      },
      clone: function (e, t, n) {
        var i,
          r,
          o,
          a,
          s = e.cloneNode(!0),
          l = me.contains(e.ownerDocument, e);
        if (
          !(
            fe.noCloneChecked ||
            (1 !== e.nodeType && 11 !== e.nodeType) ||
            me.isXMLDoc(e)
          )
        )
          for (a = b(s), o = b(e), i = 0, r = o.length; i < r; i++)
            O(o[i], a[i]);
        if (t)
          if (n)
            for (o = o || b(e), a = a || b(s), i = 0, r = o.length; i < r; i++)
              D(o[i], a[i]);
          else D(e, s);
        return (
          (a = b(s, "script")), a.length > 0 && y(a, !l && b(e, "script")), s
        );
      },
      cleanData: function (e) {
        for (
          var t, n, i, r = me.event.special, o = 0;
          void 0 !== (n = e[o]);
          o++
        )
          if (je(n)) {
            if ((t = n[He.expando])) {
              if (t.events)
                for (i in t.events)
                  r[i] ? me.event.remove(n, i) : me.removeEvent(n, i, t.handle);
              n[He.expando] = void 0;
            }
            n[Pe.expando] && (n[Pe.expando] = void 0);
          }
      },
    }),
      me.fn.extend({
        detach: function (e) {
          return N(this, e, !0);
        },
        remove: function (e) {
          return N(this, e);
        },
        text: function (e) {
          return Le(
            this,
            function (e) {
              return void 0 === e
                ? me.text(this)
                : this.empty().each(function () {
                    (1 !== this.nodeType &&
                      11 !== this.nodeType &&
                      9 !== this.nodeType) ||
                      (this.textContent = e);
                  });
            },
            null,
            e,
            arguments.length
          );
        },
        append: function () {
          return I(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              C(this, e).appendChild(e);
            }
          });
        },
        prepend: function () {
          return I(this, arguments, function (e) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var t = C(this, e);
              t.insertBefore(e, t.firstChild);
            }
          });
        },
        before: function () {
          return I(this, arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return I(this, arguments, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++)
            1 === e.nodeType && (me.cleanData(b(e, !1)), (e.textContent = ""));
          return this;
        },
        clone: function (e, t) {
          return (
            (e = null != e && e),
            (t = null == t ? e : t),
            this.map(function () {
              return me.clone(this, e, t);
            })
          );
        },
        html: function (e) {
          return Le(
            this,
            function (e) {
              var t = this[0] || {},
                n = 0,
                i = this.length;
              if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
              if (
                "string" == typeof e &&
                !tt.test(e) &&
                !Xe[(ze.exec(e) || ["", ""])[1].toLowerCase()]
              ) {
                e = me.htmlPrefilter(e);
                try {
                  for (; n < i; n++)
                    (t = this[n] || {}),
                      1 === t.nodeType &&
                        (me.cleanData(b(t, !1)), (t.innerHTML = e));
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length
          );
        },
        replaceWith: function () {
          var e = [];
          return I(
            this,
            arguments,
            function (t) {
              var n = this.parentNode;
              me.inArray(this, e) < 0 &&
                (me.cleanData(b(this)), n && n.replaceChild(t, this));
            },
            e
          );
        },
      }),
      me.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (e, t) {
          me.fn[e] = function (e) {
            for (var n, i = [], r = me(e), o = r.length - 1, a = 0; a <= o; a++)
              (n = a === o ? this : this.clone(!0)),
                me(r[a])[t](n),
                ae.apply(i, n.get());
            return this.pushStack(i);
          };
        }
      );
    var ot = /^margin/,
      at = new RegExp("^(" + Fe + ")(?!px)[a-z%]+$", "i"),
      st = function (t) {
        var n = t.ownerDocument.defaultView;
        return (n && n.opener) || (n = e), n.getComputedStyle(t);
      };
    !(function () {
      function t() {
        if (s) {
          (s.style.cssText =
            "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
            (s.innerHTML = ""),
            Ke.appendChild(a);
          var t = e.getComputedStyle(s);
          (n = "1%" !== t.top),
            (o = "2px" === t.marginLeft),
            (i = "4px" === t.width),
            (s.style.marginRight = "50%"),
            (r = "4px" === t.marginRight),
            Ke.removeChild(a),
            (s = null);
        }
      }
      var n,
        i,
        r,
        o,
        a = ne.createElement("div"),
        s = ne.createElement("div");
      s.style &&
        ((s.style.backgroundClip = "content-box"),
        (s.cloneNode(!0).style.backgroundClip = ""),
        (fe.clearCloneStyle = "content-box" === s.style.backgroundClip),
        (a.style.cssText =
          "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
        a.appendChild(s),
        me.extend(fe, {
          pixelPosition: function () {
            return t(), n;
          },
          boxSizingReliable: function () {
            return t(), i;
          },
          pixelMarginRight: function () {
            return t(), r;
          },
          reliableMarginLeft: function () {
            return t(), o;
          },
        }));
    })();
    var lt = /^(none|table(?!-c[ea]).+)/,
      ut = /^--/,
      ct = { position: "absolute", visibility: "hidden", display: "block" },
      pt = { letterSpacing: "0", fontWeight: "400" },
      dt = ["Webkit", "Moz", "ms"],
      ft = ne.createElement("div").style;
    me.extend({
      cssHooks: {
        opacity: {
          get: function (e, t) {
            if (t) {
              var n = k(e, "opacity");
              return "" === n ? "1" : n;
            }
          },
        },
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: "cssFloat" },
      style: function (e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r,
            o,
            a,
            s = me.camelCase(t),
            l = ut.test(t),
            u = e.style;
          return (
            l || (t = H(s)),
            (a = me.cssHooks[t] || me.cssHooks[s]),
            void 0 === n
              ? a && "get" in a && void 0 !== (r = a.get(e, !1, i))
                ? r
                : u[t]
              : ((o = typeof n),
                "string" === o &&
                  (r = Be.exec(n)) &&
                  r[1] &&
                  ((n = m(e, t, r)), (o = "number")),
                void (
                  null != n &&
                  n === n &&
                  ("number" === o &&
                    (n += (r && r[3]) || (me.cssNumber[s] ? "" : "px")),
                  fe.clearCloneStyle ||
                    "" !== n ||
                    0 !== t.indexOf("background") ||
                    (u[t] = "inherit"),
                  (a && "set" in a && void 0 === (n = a.set(e, n, i))) ||
                    (l ? u.setProperty(t, n) : (u[t] = n)))
                ))
          );
        }
      },
      css: function (e, t, n, i) {
        var r,
          o,
          a,
          s = me.camelCase(t);
        return (
          ut.test(t) || (t = H(s)),
          (a = me.cssHooks[t] || me.cssHooks[s]),
          a && "get" in a && (r = a.get(e, !0, n)),
          void 0 === r && (r = k(e, t, i)),
          "normal" === r && t in pt && (r = pt[t]),
          "" === n || n
            ? ((o = parseFloat(r)), !0 === n || isFinite(o) ? o || 0 : r)
            : r
        );
      },
    }),
      me.each(["height", "width"], function (e, t) {
        me.cssHooks[t] = {
          get: function (e, n, i) {
            if (n)
              return !lt.test(me.css(e, "display")) ||
                (e.getClientRects().length && e.getBoundingClientRect().width)
                ? M(e, t, i)
                : Ue(e, ct, function () {
                    return M(e, t, i);
                  });
          },
          set: function (e, n, i) {
            var r,
              o = i && st(e),
              a =
                i &&
                R(e, t, i, "border-box" === me.css(e, "boxSizing", !1, o), o);
            return (
              a &&
                (r = Be.exec(n)) &&
                "px" !== (r[3] || "px") &&
                ((e.style[t] = n), (n = me.css(e, t))),
              P(e, n, a)
            );
          },
        };
      }),
      (me.cssHooks.marginLeft = L(fe.reliableMarginLeft, function (e, t) {
        if (t)
          return (
            (parseFloat(k(e, "marginLeft")) ||
              e.getBoundingClientRect().left -
                Ue(e, { marginLeft: 0 }, function () {
                  return e.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      me.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        (me.cssHooks[e + t] = {
          expand: function (n) {
            for (
              var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n];
              i < 4;
              i++
            )
              r[e + We[i] + t] = o[i] || o[i - 2] || o[0];
            return r;
          },
        }),
          ot.test(e) || (me.cssHooks[e + t].set = P);
      }),
      me.fn.extend({
        css: function (e, t) {
          return Le(
            this,
            function (e, t, n) {
              var i,
                r,
                o = {},
                a = 0;
              if (Array.isArray(t)) {
                for (i = st(e), r = t.length; a < r; a++)
                  o[t[a]] = me.css(e, t[a], !1, i);
                return o;
              }
              return void 0 !== n ? me.style(e, t, n) : me.css(e, t);
            },
            e,
            t,
            arguments.length > 1
          );
        },
      }),
      (me.Tween = F),
      (F.prototype = {
        constructor: F,
        init: function (e, t, n, i, r, o) {
          (this.elem = e),
            (this.prop = n),
            (this.easing = r || me.easing._default),
            (this.options = t),
            (this.start = this.now = this.cur()),
            (this.end = i),
            (this.unit = o || (me.cssNumber[n] ? "" : "px"));
        },
        cur: function () {
          var e = F.propHooks[this.prop];
          return e && e.get ? e.get(this) : F.propHooks._default.get(this);
        },
        run: function (e) {
          var t,
            n = F.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = t =
                  me.easing[this.easing](
                    e,
                    this.options.duration * e,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = t = e),
            (this.now = (this.end - this.start) * t + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : F.propHooks._default.set(this),
            this
          );
        },
      }),
      (F.prototype.init.prototype = F.prototype),
      (F.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return 1 !== e.elem.nodeType ||
              (null != e.elem[e.prop] && null == e.elem.style[e.prop])
              ? e.elem[e.prop]
              : ((t = me.css(e.elem, e.prop, "")), t && "auto" !== t ? t : 0);
          },
          set: function (e) {
            me.fx.step[e.prop]
              ? me.fx.step[e.prop](e)
              : 1 !== e.elem.nodeType ||
                (null == e.elem.style[me.cssProps[e.prop]] &&
                  !me.cssHooks[e.prop])
              ? (e.elem[e.prop] = e.now)
              : me.style(e.elem, e.prop, e.now + e.unit);
          },
        },
      }),
      (F.propHooks.scrollTop = F.propHooks.scrollLeft =
        {
          set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
          },
        }),
      (me.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return 0.5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (me.fx = F.prototype.init),
      (me.fx.step = {});
    var ht,
      mt,
      gt = /^(?:toggle|show|hide)$/,
      vt = /queueHooks$/;
    (me.Animation = me.extend(z, {
      tweeners: {
        "*": [
          function (e, t) {
            var n = this.createTween(e, t);
            return m(n.elem, e, Be.exec(t), n), n;
          },
        ],
      },
      tweener: function (e, t) {
        me.isFunction(e) ? ((t = e), (e = ["*"])) : (e = e.match(Ie));
        for (var n, i = 0, r = e.length; i < r; i++)
          (n = e[i]),
            (z.tweeners[n] = z.tweeners[n] || []),
            z.tweeners[n].unshift(t);
      },
      prefilters: [V],
      prefilter: function (e, t) {
        t ? z.prefilters.unshift(e) : z.prefilters.push(e);
      },
    })),
      (me.speed = function (e, t, n) {
        var i =
          e && "object" == typeof e
            ? me.extend({}, e)
            : {
                complete: n || (!n && t) || (me.isFunction(e) && e),
                duration: e,
                easing: (n && t) || (t && !me.isFunction(t) && t),
              };
        return (
          me.fx.off
            ? (i.duration = 0)
            : "number" != typeof i.duration &&
              (i.duration in me.fx.speeds
                ? (i.duration = me.fx.speeds[i.duration])
                : (i.duration = me.fx.speeds._default)),
          (null != i.queue && !0 !== i.queue) || (i.queue = "fx"),
          (i.old = i.complete),
          (i.complete = function () {
            me.isFunction(i.old) && i.old.call(this),
              i.queue && me.dequeue(this, i.queue);
          }),
          i
        );
      }),
      me.fn.extend({
        fadeTo: function (e, t, n, i) {
          return this.filter(qe)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: t }, e, n, i);
        },
        animate: function (e, t, n, i) {
          var r = me.isEmptyObject(e),
            o = me.speed(t, n, i),
            a = function () {
              var t = z(this, me.extend({}, e), o);
              (r || He.get(this, "finish")) && t.stop(!0);
            };
          return (
            (a.finish = a),
            r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
          );
        },
        stop: function (e, t, n) {
          var i = function (e) {
            var t = e.stop;
            delete e.stop, t(n);
          };
          return (
            "string" != typeof e && ((n = t), (t = e), (e = void 0)),
            t && !1 !== e && this.queue(e || "fx", []),
            this.each(function () {
              var t = !0,
                r = null != e && e + "queueHooks",
                o = me.timers,
                a = He.get(this);
              if (r) a[r] && a[r].stop && i(a[r]);
              else for (r in a) a[r] && a[r].stop && vt.test(r) && i(a[r]);
              for (r = o.length; r--; )
                o[r].elem !== this ||
                  (null != e && o[r].queue !== e) ||
                  (o[r].anim.stop(n), (t = !1), o.splice(r, 1));
              (!t && n) || me.dequeue(this, e);
            })
          );
        },
        finish: function (e) {
          return (
            !1 !== e && (e = e || "fx"),
            this.each(function () {
              var t,
                n = He.get(this),
                i = n[e + "queue"],
                r = n[e + "queueHooks"],
                o = me.timers,
                a = i ? i.length : 0;
              for (
                n.finish = !0,
                  me.queue(this, e, []),
                  r && r.stop && r.stop.call(this, !0),
                  t = o.length;
                t--;

              )
                o[t].elem === this &&
                  o[t].queue === e &&
                  (o[t].anim.stop(!0), o.splice(t, 1));
              for (t = 0; t < a; t++)
                i[t] && i[t].finish && i[t].finish.call(this);
              delete n.finish;
            })
          );
        },
      }),
      me.each(["toggle", "show", "hide"], function (e, t) {
        var n = me.fn[t];
        me.fn[t] = function (e, i, r) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(q(t, !0), e, i, r);
        };
      }),
      me.each(
        {
          slideDown: q("show"),
          slideUp: q("hide"),
          slideToggle: q("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (e, t) {
          me.fn[e] = function (e, n, i) {
            return this.animate(t, e, n, i);
          };
        }
      ),
      (me.timers = []),
      (me.fx.tick = function () {
        var e,
          t = 0,
          n = me.timers;
        for (ht = me.now(); t < n.length; t++)
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || me.fx.stop(), (ht = void 0);
      }),
      (me.fx.timer = function (e) {
        me.timers.push(e), me.fx.start();
      }),
      (me.fx.interval = 13),
      (me.fx.start = function () {
        mt || ((mt = !0), B());
      }),
      (me.fx.stop = function () {
        mt = null;
      }),
      (me.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (me.fn.delay = function (t, n) {
        return (
          (t = me.fx ? me.fx.speeds[t] || t : t),
          (n = n || "fx"),
          this.queue(n, function (n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function () {
              e.clearTimeout(r);
            };
          })
        );
      }),
      (function () {
        var e = ne.createElement("input"),
          t = ne.createElement("select"),
          n = t.appendChild(ne.createElement("option"));
        (e.type = "checkbox"),
          (fe.checkOn = "" !== e.value),
          (fe.optSelected = n.selected),
          (e = ne.createElement("input")),
          (e.value = "t"),
          (e.type = "radio"),
          (fe.radioValue = "t" === e.value);
      })();
    var bt,
      yt = me.expr.attrHandle;
    me.fn.extend({
      attr: function (e, t) {
        return Le(this, me.attr, e, t, arguments.length > 1);
      },
      removeAttr: function (e) {
        return this.each(function () {
          me.removeAttr(this, e);
        });
      },
    }),
      me.extend({
        attr: function (e, t, n) {
          var i,
            r,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return void 0 === e.getAttribute
              ? me.prop(e, t, n)
              : ((1 === o && me.isXMLDoc(e)) ||
                  (r =
                    me.attrHooks[t.toLowerCase()] ||
                    (me.expr.match.bool.test(t) ? bt : void 0)),
                void 0 !== n
                  ? null === n
                    ? void me.removeAttr(e, t)
                    : r && "set" in r && void 0 !== (i = r.set(e, n, t))
                    ? i
                    : (e.setAttribute(t, n + ""), n)
                  : r && "get" in r && null !== (i = r.get(e, t))
                  ? i
                  : ((i = me.find.attr(e, t)), null == i ? void 0 : i));
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (!fe.radioValue && "radio" === t && r(e, "input")) {
                var n = e.value;
                return e.setAttribute("type", t), n && (e.value = n), t;
              }
            },
          },
        },
        removeAttr: function (e, t) {
          var n,
            i = 0,
            r = t && t.match(Ie);
          if (r && 1 === e.nodeType)
            for (; (n = r[i++]); ) e.removeAttribute(n);
        },
      }),
      (bt = {
        set: function (e, t, n) {
          return !1 === t ? me.removeAttr(e, n) : e.setAttribute(n, n), n;
        },
      }),
      me.each(me.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = yt[t] || me.find.attr;
        yt[t] = function (e, t, i) {
          var r,
            o,
            a = t.toLowerCase();
          return (
            i ||
              ((o = yt[a]),
              (yt[a] = r),
              (r = null != n(e, t, i) ? a : null),
              (yt[a] = o)),
            r
          );
        };
      });
    var xt = /^(?:input|select|textarea|button)$/i,
      _t = /^(?:a|area)$/i;
    me.fn.extend({
      prop: function (e, t) {
        return Le(this, me.prop, e, t, arguments.length > 1);
      },
      removeProp: function (e) {
        return this.each(function () {
          delete this[me.propFix[e] || e];
        });
      },
    }),
      me.extend({
        prop: function (e, t, n) {
          var i,
            r,
            o = e.nodeType;
          if (3 !== o && 8 !== o && 2 !== o)
            return (
              (1 === o && me.isXMLDoc(e)) ||
                ((t = me.propFix[t] || t), (r = me.propHooks[t])),
              void 0 !== n
                ? r && "set" in r && void 0 !== (i = r.set(e, n, t))
                  ? i
                  : (e[t] = n)
                : r && "get" in r && null !== (i = r.get(e, t))
                ? i
                : e[t]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = me.find.attr(e, "tabindex");
              return t
                ? parseInt(t, 10)
                : xt.test(e.nodeName) || (_t.test(e.nodeName) && e.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      fe.optSelected ||
        (me.propHooks.selected = {
          get: function (e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
          },
          set: function (e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
          },
        }),
      me.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          me.propFix[this.toLowerCase()] = this;
        }
      ),
      me.fn.extend({
        addClass: function (e) {
          var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l = 0;
          if (me.isFunction(e))
            return this.each(function (t) {
              me(this).addClass(e.call(this, t, X(this)));
            });
          if ("string" == typeof e && e)
            for (t = e.match(Ie) || []; (n = this[l++]); )
              if (((r = X(n)), (i = 1 === n.nodeType && " " + $(r) + " "))) {
                for (a = 0; (o = t[a++]); )
                  i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                (s = $(i)), r !== s && n.setAttribute("class", s);
              }
          return this;
        },
        removeClass: function (e) {
          var t,
            n,
            i,
            r,
            o,
            a,
            s,
            l = 0;
          if (me.isFunction(e))
            return this.each(function (t) {
              me(this).removeClass(e.call(this, t, X(this)));
            });
          if (!arguments.length) return this.attr("class", "");
          if ("string" == typeof e && e)
            for (t = e.match(Ie) || []; (n = this[l++]); )
              if (((r = X(n)), (i = 1 === n.nodeType && " " + $(r) + " "))) {
                for (a = 0; (o = t[a++]); )
                  for (; i.indexOf(" " + o + " ") > -1; )
                    i = i.replace(" " + o + " ", " ");
                (s = $(i)), r !== s && n.setAttribute("class", s);
              }
          return this;
        },
        toggleClass: function (e, t) {
          var n = typeof e;
          return "boolean" == typeof t && "string" === n
            ? t
              ? this.addClass(e)
              : this.removeClass(e)
            : me.isFunction(e)
            ? this.each(function (n) {
                me(this).toggleClass(e.call(this, n, X(this), t), t);
              })
            : this.each(function () {
                var t, i, r, o;
                if ("string" === n)
                  for (
                    i = 0, r = me(this), o = e.match(Ie) || [];
                    (t = o[i++]);

                  )
                    r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                  (void 0 !== e && "boolean" !== n) ||
                    ((t = X(this)),
                    t && He.set(this, "__className__", t),
                    this.setAttribute &&
                      this.setAttribute(
                        "class",
                        t || !1 === e ? "" : He.get(this, "__className__") || ""
                      ));
              });
        },
        hasClass: function (e) {
          var t,
            n,
            i = 0;
          for (t = " " + e + " "; (n = this[i++]); )
            if (1 === n.nodeType && (" " + $(X(n)) + " ").indexOf(t) > -1)
              return !0;
          return !1;
        },
      });
    var wt = /\r/g;
    me.fn.extend({
      val: function (e) {
        var t,
          n,
          i,
          r = this[0];
        return arguments.length
          ? ((i = me.isFunction(e)),
            this.each(function (n) {
              var r;
              1 === this.nodeType &&
                ((r = i ? e.call(this, n, me(this).val()) : e),
                null == r
                  ? (r = "")
                  : "number" == typeof r
                  ? (r += "")
                  : Array.isArray(r) &&
                    (r = me.map(r, function (e) {
                      return null == e ? "" : e + "";
                    })),
                ((t =
                  me.valHooks[this.type] ||
                  me.valHooks[this.nodeName.toLowerCase()]) &&
                  "set" in t &&
                  void 0 !== t.set(this, r, "value")) ||
                  (this.value = r));
            }))
          : r
          ? ((t = me.valHooks[r.type] || me.valHooks[r.nodeName.toLowerCase()]),
            t && "get" in t && void 0 !== (n = t.get(r, "value"))
              ? n
              : ((n = r.value),
                "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n))
          : void 0;
      },
    }),
      me.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = me.find.attr(e, "value");
              return null != t ? t : $(me.text(e));
            },
          },
          select: {
            get: function (e) {
              var t,
                n,
                i,
                o = e.options,
                a = e.selectedIndex,
                s = "select-one" === e.type,
                l = s ? null : [],
                u = s ? a + 1 : o.length;
              for (i = a < 0 ? u : s ? a : 0; i < u; i++)
                if (
                  ((n = o[i]),
                  (n.selected || i === a) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !r(n.parentNode, "optgroup")))
                ) {
                  if (((t = me(n).val()), s)) return t;
                  l.push(t);
                }
              return l;
            },
            set: function (e, t) {
              for (
                var n, i, r = e.options, o = me.makeArray(t), a = r.length;
                a--;

              )
                (i = r[a]),
                  (i.selected =
                    me.inArray(me.valHooks.option.get(i), o) > -1) && (n = !0);
              return n || (e.selectedIndex = -1), o;
            },
          },
        },
      }),
      me.each(["radio", "checkbox"], function () {
        (me.valHooks[this] = {
          set: function (e, t) {
            if (Array.isArray(t))
              return (e.checked = me.inArray(me(e).val(), t) > -1);
          },
        }),
          fe.checkOn ||
            (me.valHooks[this].get = function (e) {
              return null === e.getAttribute("value") ? "on" : e.value;
            });
      });
    var Et = /^(?:focusinfocus|focusoutblur)$/;
    me.extend(me.event, {
      trigger: function (t, n, i, r) {
        var o,
          a,
          s,
          l,
          u,
          c,
          p,
          d = [i || ne],
          f = ce.call(t, "type") ? t.type : t,
          h = ce.call(t, "namespace") ? t.namespace.split(".") : [];
        if (
          ((a = s = i = i || ne),
          3 !== i.nodeType &&
            8 !== i.nodeType &&
            !Et.test(f + me.event.triggered) &&
            (f.indexOf(".") > -1 &&
              ((h = f.split(".")), (f = h.shift()), h.sort()),
            (u = f.indexOf(":") < 0 && "on" + f),
            (t = t[me.expando]
              ? t
              : new me.Event(f, "object" == typeof t && t)),
            (t.isTrigger = r ? 2 : 3),
            (t.namespace = h.join(".")),
            (t.rnamespace = t.namespace
              ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (t.result = void 0),
            t.target || (t.target = i),
            (n = null == n ? [t] : me.makeArray(n, [t])),
            (p = me.event.special[f] || {}),
            r || !p.trigger || !1 !== p.trigger.apply(i, n)))
        ) {
          if (!r && !p.noBubble && !me.isWindow(i)) {
            for (
              l = p.delegateType || f, Et.test(l + f) || (a = a.parentNode);
              a;
              a = a.parentNode
            )
              d.push(a), (s = a);
            s === (i.ownerDocument || ne) &&
              d.push(s.defaultView || s.parentWindow || e);
          }
          for (o = 0; (a = d[o++]) && !t.isPropagationStopped(); )
            (t.type = o > 1 ? l : p.bindType || f),
              (c = (He.get(a, "events") || {})[t.type] && He.get(a, "handle")),
              c && c.apply(a, n),
              (c = u && a[u]) &&
                c.apply &&
                je(a) &&
                ((t.result = c.apply(a, n)),
                !1 === t.result && t.preventDefault());
          return (
            (t.type = f),
            r ||
              t.isDefaultPrevented() ||
              (p._default && !1 !== p._default.apply(d.pop(), n)) ||
              !je(i) ||
              (u &&
                me.isFunction(i[f]) &&
                !me.isWindow(i) &&
                ((s = i[u]),
                s && (i[u] = null),
                (me.event.triggered = f),
                i[f](),
                (me.event.triggered = void 0),
                s && (i[u] = s))),
            t.result
          );
        }
      },
      simulate: function (e, t, n) {
        var i = me.extend(new me.Event(), n, { type: e, isSimulated: !0 });
        me.event.trigger(i, null, t);
      },
    }),
      me.fn.extend({
        trigger: function (e, t) {
          return this.each(function () {
            me.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var n = this[0];
          if (n) return me.event.trigger(e, t, n, !0);
        },
      }),
      me.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (e, t) {
          me.fn[t] = function (e, n) {
            return arguments.length > 0
              ? this.on(t, null, e, n)
              : this.trigger(t);
          };
        }
      ),
      me.fn.extend({
        hover: function (e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        },
      }),
      (fe.focusin = "onfocusin" in e),
      fe.focusin ||
        me.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          var n = function (e) {
            me.event.simulate(t, e.target, me.event.fix(e));
          };
          me.event.special[t] = {
            setup: function () {
              var i = this.ownerDocument || this,
                r = He.access(i, t);
              r || i.addEventListener(e, n, !0), He.access(i, t, (r || 0) + 1);
            },
            teardown: function () {
              var i = this.ownerDocument || this,
                r = He.access(i, t) - 1;
              r
                ? He.access(i, t, r)
                : (i.removeEventListener(e, n, !0), He.remove(i, t));
            },
          };
        });
    var Tt = e.location,
      Ct = me.now(),
      St = /\?/;
    me.parseXML = function (t) {
      var n;
      if (!t || "string" != typeof t) return null;
      try {
        n = new e.DOMParser().parseFromString(t, "text/xml");
      } catch (e) {
        n = void 0;
      }
      return (
        (n && !n.getElementsByTagName("parsererror").length) ||
          me.error("Invalid XML: " + t),
        n
      );
    };
    var At = /\[\]$/,
      Dt = /\r?\n/g,
      Ot = /^(?:submit|button|image|reset|file)$/i,
      It = /^(?:input|select|textarea|keygen)/i;
    (me.param = function (e, t) {
      var n,
        i = [],
        r = function (e, t) {
          var n = me.isFunction(t) ? t() : t;
          i[i.length] =
            encodeURIComponent(e) +
            "=" +
            encodeURIComponent(null == n ? "" : n);
        };
      if (Array.isArray(e) || (e.jquery && !me.isPlainObject(e)))
        me.each(e, function () {
          r(this.name, this.value);
        });
      else for (n in e) Q(n, e[n], t, r);
      return i.join("&");
    }),
      me.fn.extend({
        serialize: function () {
          return me.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var e = me.prop(this, "elements");
            return e ? me.makeArray(e) : this;
          })
            .filter(function () {
              var e = this.type;
              return (
                this.name &&
                !me(this).is(":disabled") &&
                It.test(this.nodeName) &&
                !Ot.test(e) &&
                (this.checked || !Ge.test(e))
              );
            })
            .map(function (e, t) {
              var n = me(this).val();
              return null == n
                ? null
                : Array.isArray(n)
                ? me.map(n, function (e) {
                    return { name: t.name, value: e.replace(Dt, "\r\n") };
                  })
                : { name: t.name, value: n.replace(Dt, "\r\n") };
            })
            .get();
        },
      });
    var Nt = /%20/g,
      kt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Ht = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Pt = /^(?:GET|HEAD)$/,
      Rt = /^\/\//,
      Mt = {},
      Ft = {},
      Bt = "*/".concat("*"),
      Wt = ne.createElement("a");
    (Wt.href = Tt.href),
      me.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: Tt.href,
          type: "GET",
          isLocal: Ht.test(Tt.protocol),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": Bt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": JSON.parse,
            "text xml": me.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? J(J(e, me.ajaxSettings), t) : J(me.ajaxSettings, e);
        },
        ajaxPrefilter: K(Mt),
        ajaxTransport: K(Ft),
        ajax: function (t, n) {
          function i(t, n, i, s) {
            var u,
              d,
              f,
              x,
              _,
              w = n;
            c ||
              ((c = !0),
              l && e.clearTimeout(l),
              (r = void 0),
              (a = s || ""),
              (E.readyState = t > 0 ? 4 : 0),
              (u = (t >= 200 && t < 300) || 304 === t),
              i && (x = Z(h, E, i)),
              (x = ee(h, x, E, u)),
              u
                ? (h.ifModified &&
                    ((_ = E.getResponseHeader("Last-Modified")),
                    _ && (me.lastModified[o] = _),
                    (_ = E.getResponseHeader("etag")) && (me.etag[o] = _)),
                  204 === t || "HEAD" === h.type
                    ? (w = "nocontent")
                    : 304 === t
                    ? (w = "notmodified")
                    : ((w = x.state), (d = x.data), (f = x.error), (u = !f)))
                : ((f = w), (!t && w) || ((w = "error"), t < 0 && (t = 0))),
              (E.status = t),
              (E.statusText = (n || w) + ""),
              u ? v.resolveWith(m, [d, w, E]) : v.rejectWith(m, [E, w, f]),
              E.statusCode(y),
              (y = void 0),
              p &&
                g.trigger(u ? "ajaxSuccess" : "ajaxError", [E, h, u ? d : f]),
              b.fireWith(m, [E, w]),
              p &&
                (g.trigger("ajaxComplete", [E, h]),
                --me.active || me.event.trigger("ajaxStop")));
          }
          "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
          var r,
            o,
            a,
            s,
            l,
            u,
            c,
            p,
            d,
            f,
            h = me.ajaxSetup({}, n),
            m = h.context || h,
            g = h.context && (m.nodeType || m.jquery) ? me(m) : me.event,
            v = me.Deferred(),
            b = me.Callbacks("once memory"),
            y = h.statusCode || {},
            x = {},
            _ = {},
            w = "canceled",
            E = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (c) {
                  if (!s)
                    for (s = {}; (t = jt.exec(a)); )
                      s[t[1].toLowerCase()] = t[2];
                  t = s[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return c ? a : null;
              },
              setRequestHeader: function (e, t) {
                return (
                  null == c &&
                    ((e = _[e.toLowerCase()] = _[e.toLowerCase()] || e),
                    (x[e] = t)),
                  this
                );
              },
              overrideMimeType: function (e) {
                return null == c && (h.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e)
                  if (c) E.always(e[E.status]);
                  else for (t in e) y[t] = [y[t], e[t]];
                return this;
              },
              abort: function (e) {
                var t = e || w;
                return r && r.abort(t), i(0, t), this;
              },
            };
          if (
            (v.promise(E),
            (h.url = ((t || h.url || Tt.href) + "").replace(
              Rt,
              Tt.protocol + "//"
            )),
            (h.type = n.method || n.type || h.method || h.type),
            (h.dataTypes = (h.dataType || "*").toLowerCase().match(Ie) || [""]),
            null == h.crossDomain)
          ) {
            u = ne.createElement("a");
            try {
              (u.href = h.url),
                (u.href = u.href),
                (h.crossDomain =
                  Wt.protocol + "//" + Wt.host != u.protocol + "//" + u.host);
            } catch (e) {
              h.crossDomain = !0;
            }
          }
          if (
            (h.data &&
              h.processData &&
              "string" != typeof h.data &&
              (h.data = me.param(h.data, h.traditional)),
            Y(Mt, h, n, E),
            c)
          )
            return E;
          (p = me.event && h.global),
            p && 0 == me.active++ && me.event.trigger("ajaxStart"),
            (h.type = h.type.toUpperCase()),
            (h.hasContent = !Pt.test(h.type)),
            (o = h.url.replace(kt, "")),
            h.hasContent
              ? h.data &&
                h.processData &&
                0 ===
                  (h.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (h.data = h.data.replace(Nt, "+"))
              : ((f = h.url.slice(o.length)),
                h.data &&
                  ((o += (St.test(o) ? "&" : "?") + h.data), delete h.data),
                !1 === h.cache &&
                  ((o = o.replace(Lt, "$1")),
                  (f = (St.test(o) ? "&" : "?") + "_=" + Ct++ + f)),
                (h.url = o + f)),
            h.ifModified &&
              (me.lastModified[o] &&
                E.setRequestHeader("If-Modified-Since", me.lastModified[o]),
              me.etag[o] && E.setRequestHeader("If-None-Match", me.etag[o])),
            ((h.data && h.hasContent && !1 !== h.contentType) ||
              n.contentType) &&
              E.setRequestHeader("Content-Type", h.contentType),
            E.setRequestHeader(
              "Accept",
              h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                ? h.accepts[h.dataTypes[0]] +
                    ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "")
                : h.accepts["*"]
            );
          for (d in h.headers) E.setRequestHeader(d, h.headers[d]);
          if (h.beforeSend && (!1 === h.beforeSend.call(m, E, h) || c))
            return E.abort();
          if (
            ((w = "abort"),
            b.add(h.complete),
            E.done(h.success),
            E.fail(h.error),
            (r = Y(Ft, h, n, E)))
          ) {
            if (((E.readyState = 1), p && g.trigger("ajaxSend", [E, h]), c))
              return E;
            h.async &&
              h.timeout > 0 &&
              (l = e.setTimeout(function () {
                E.abort("timeout");
              }, h.timeout));
            try {
              (c = !1), r.send(x, i);
            } catch (e) {
              if (c) throw e;
              i(-1, e);
            }
          } else i(-1, "No Transport");
          return E;
        },
        getJSON: function (e, t, n) {
          return me.get(e, t, n, "json");
        },
        getScript: function (e, t) {
          return me.get(e, void 0, t, "script");
        },
      }),
      me.each(["get", "post"], function (e, t) {
        me[t] = function (e, n, i, r) {
          return (
            me.isFunction(n) && ((r = r || i), (i = n), (n = void 0)),
            me.ajax(
              me.extend(
                { url: e, type: t, dataType: r, data: n, success: i },
                me.isPlainObject(e) && e
              )
            )
          );
        };
      }),
      (me._evalUrl = function (e) {
        return me.ajax({
          url: e,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      me.fn.extend({
        wrapAll: function (e) {
          var t;
          return (
            this[0] &&
              (me.isFunction(e) && (e = e.call(this[0])),
              (t = me(e, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && t.insertBefore(this[0]),
              t
                .map(function () {
                  for (var e = this; e.firstElementChild; )
                    e = e.firstElementChild;
                  return e;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (e) {
          return me.isFunction(e)
            ? this.each(function (t) {
                me(this).wrapInner(e.call(this, t));
              })
            : this.each(function () {
                var t = me(this),
                  n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
              });
        },
        wrap: function (e) {
          var t = me.isFunction(e);
          return this.each(function (n) {
            me(this).wrapAll(t ? e.call(this, n) : e);
          });
        },
        unwrap: function (e) {
          return (
            this.parent(e)
              .not("body")
              .each(function () {
                me(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (me.expr.pseudos.hidden = function (e) {
        return !me.expr.pseudos.visible(e);
      }),
      (me.expr.pseudos.visible = function (e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }),
      (me.ajaxSettings.xhr = function () {
        try {
          return new e.XMLHttpRequest();
        } catch (e) {}
      });
    var qt = { 0: 200, 1223: 204 },
      Ut = me.ajaxSettings.xhr();
    (fe.cors = !!Ut && "withCredentials" in Ut),
      (fe.ajax = Ut = !!Ut),
      me.ajaxTransport(function (t) {
        var n, i;
        if (fe.cors || (Ut && !t.crossDomain))
          return {
            send: function (r, o) {
              var a,
                s = t.xhr();
              if (
                (s.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (a in t.xhrFields) s[a] = t.xhrFields[a];
              t.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest");
              for (a in r) s.setRequestHeader(a, r[a]);
              (n = function (e) {
                return function () {
                  n &&
                    ((n =
                      i =
                      s.onload =
                      s.onerror =
                      s.onabort =
                      s.onreadystatechange =
                        null),
                    "abort" === e
                      ? s.abort()
                      : "error" === e
                      ? "number" != typeof s.status
                        ? o(0, "error")
                        : o(s.status, s.statusText)
                      : o(
                          qt[s.status] || s.status,
                          s.statusText,
                          "text" !== (s.responseType || "text") ||
                            "string" != typeof s.responseText
                            ? { binary: s.response }
                            : { text: s.responseText },
                          s.getAllResponseHeaders()
                        ));
                };
              }),
                (s.onload = n()),
                (i = s.onerror = n("error")),
                void 0 !== s.onabort
                  ? (s.onabort = i)
                  : (s.onreadystatechange = function () {
                      4 === s.readyState &&
                        e.setTimeout(function () {
                          n && i();
                        });
                    }),
                (n = n("abort"));
              try {
                s.send((t.hasContent && t.data) || null);
              } catch (e) {
                if (n) throw e;
              }
            },
            abort: function () {
              n && n();
            },
          };
      }),
      me.ajaxPrefilter(function (e) {
        e.crossDomain && (e.contents.script = !1);
      }),
      me.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (e) {
            return me.globalEval(e), e;
          },
        },
      }),
      me.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }),
      me.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
          var t, n;
          return {
            send: function (i, r) {
              (t = me("<script>")
                .prop({ charset: e.scriptCharset, src: e.url })
                .on(
                  "load error",
                  (n = function (e) {
                    t.remove(),
                      (n = null),
                      e && r("error" === e.type ? 404 : 200, e.type);
                  })
                )),
                ne.head.appendChild(t[0]);
            },
            abort: function () {
              n && n();
            },
          };
        }
      });
    var Vt = [],
      Gt = /(=)\?(?=&|$)|\?\?/;
    me.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = Vt.pop() || me.expando + "_" + Ct++;
        return (this[e] = !0), e;
      },
    }),
      me.ajaxPrefilter("json jsonp", function (t, n, i) {
        var r,
          o,
          a,
          s =
            !1 !== t.jsonp &&
            (Gt.test(t.url)
              ? "url"
              : "string" == typeof t.data &&
                0 ===
                  (t.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                Gt.test(t.data) &&
                "data");
        if (s || "jsonp" === t.dataTypes[0])
          return (
            (r = t.jsonpCallback =
              me.isFunction(t.jsonpCallback)
                ? t.jsonpCallback()
                : t.jsonpCallback),
            s
              ? (t[s] = t[s].replace(Gt, "$1" + r))
              : !1 !== t.jsonp &&
                (t.url += (St.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
            (t.converters["script json"] = function () {
              return a || me.error(r + " was not called"), a[0];
            }),
            (t.dataTypes[0] = "json"),
            (o = e[r]),
            (e[r] = function () {
              a = arguments;
            }),
            i.always(function () {
              void 0 === o ? me(e).removeProp(r) : (e[r] = o),
                t[r] && ((t.jsonpCallback = n.jsonpCallback), Vt.push(r)),
                a && me.isFunction(o) && o(a[0]),
                (a = o = void 0);
            }),
            "script"
          );
      }),
      (fe.createHTMLDocument = (function () {
        var e = ne.implementation.createHTMLDocument("").body;
        return (
          (e.innerHTML = "<form></form><form></form>"),
          2 === e.childNodes.length
        );
      })()),
      (me.parseHTML = function (e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && ((n = t), (t = !1));
        var i, r, o;
        return (
          t ||
            (fe.createHTMLDocument
              ? ((t = ne.implementation.createHTMLDocument("")),
                (i = t.createElement("base")),
                (i.href = ne.location.href),
                t.head.appendChild(i))
              : (t = ne)),
          (r = Te.exec(e)),
          (o = !n && []),
          r
            ? [t.createElement(r[1])]
            : ((r = x([e], t, o)),
              o && o.length && me(o).remove(),
              me.merge([], r.childNodes))
        );
      }),
      (me.fn.load = function (e, t, n) {
        var i,
          r,
          o,
          a = this,
          s = e.indexOf(" ");
        return (
          s > -1 && ((i = $(e.slice(s))), (e = e.slice(0, s))),
          me.isFunction(t)
            ? ((n = t), (t = void 0))
            : t && "object" == typeof t && (r = "POST"),
          a.length > 0 &&
            me
              .ajax({ url: e, type: r || "GET", dataType: "html", data: t })
              .done(function (e) {
                (o = arguments),
                  a.html(i ? me("<div>").append(me.parseHTML(e)).find(i) : e);
              })
              .always(
                n &&
                  function (e, t) {
                    a.each(function () {
                      n.apply(this, o || [e.responseText, t, e]);
                    });
                  }
              ),
          this
        );
      }),
      me.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (e, t) {
          me.fn[t] = function (e) {
            return this.on(t, e);
          };
        }
      ),
      (me.expr.pseudos.animated = function (e) {
        return me.grep(me.timers, function (t) {
          return e === t.elem;
        }).length;
      }),
      (me.offset = {
        setOffset: function (e, t, n) {
          var i,
            r,
            o,
            a,
            s,
            l,
            u,
            c = me.css(e, "position"),
            p = me(e),
            d = {};
          "static" === c && (e.style.position = "relative"),
            (s = p.offset()),
            (o = me.css(e, "top")),
            (l = me.css(e, "left")),
            (u =
              ("absolute" === c || "fixed" === c) &&
              (o + l).indexOf("auto") > -1),
            u
              ? ((i = p.position()), (a = i.top), (r = i.left))
              : ((a = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
            me.isFunction(t) && (t = t.call(e, n, me.extend({}, s))),
            null != t.top && (d.top = t.top - s.top + a),
            null != t.left && (d.left = t.left - s.left + r),
            "using" in t ? t.using.call(e, d) : p.css(d);
        },
      }),
      me.fn.extend({
        offset: function (e) {
          if (arguments.length)
            return void 0 === e
              ? this
              : this.each(function (t) {
                  me.offset.setOffset(this, e, t);
                });
          var t,
            n,
            i,
            r,
            o = this[0];
          return o
            ? o.getClientRects().length
              ? ((i = o.getBoundingClientRect()),
                (t = o.ownerDocument),
                (n = t.documentElement),
                (r = t.defaultView),
                {
                  top: i.top + r.pageYOffset - n.clientTop,
                  left: i.left + r.pageXOffset - n.clientLeft,
                })
              : { top: 0, left: 0 }
            : void 0;
        },
        position: function () {
          if (this[0]) {
            var e,
              t,
              n = this[0],
              i = { top: 0, left: 0 };
            return (
              "fixed" === me.css(n, "position")
                ? (t = n.getBoundingClientRect())
                : ((e = this.offsetParent()),
                  (t = this.offset()),
                  r(e[0], "html") || (i = e.offset()),
                  (i = {
                    top: i.top + me.css(e[0], "borderTopWidth", !0),
                    left: i.left + me.css(e[0], "borderLeftWidth", !0),
                  })),
              {
                top: t.top - i.top - me.css(n, "marginTop", !0),
                left: t.left - i.left - me.css(n, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent;
              e && "static" === me.css(e, "position");

            )
              e = e.offsetParent;
            return e || Ke;
          });
        },
      }),
      me.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (e, t) {
          var n = "pageYOffset" === t;
          me.fn[e] = function (i) {
            return Le(
              this,
              function (e, i, r) {
                var o;
                return (
                  me.isWindow(e)
                    ? (o = e)
                    : 9 === e.nodeType && (o = e.defaultView),
                  void 0 === r
                    ? o
                      ? o[t]
                      : e[i]
                    : void (o
                        ? o.scrollTo(
                            n ? o.pageXOffset : r,
                            n ? r : o.pageYOffset
                          )
                        : (e[i] = r))
                );
              },
              e,
              i,
              arguments.length
            );
          };
        }
      ),
      me.each(["top", "left"], function (e, t) {
        me.cssHooks[t] = L(fe.pixelPosition, function (e, n) {
          if (n)
            return (n = k(e, t)), at.test(n) ? me(e).position()[t] + "px" : n;
        });
      }),
      me.each({ Height: "height", Width: "width" }, function (e, t) {
        me.each(
          { padding: "inner" + e, content: t, "": "outer" + e },
          function (n, i) {
            me.fn[i] = function (r, o) {
              var a = arguments.length && (n || "boolean" != typeof r),
                s = n || (!0 === r || !0 === o ? "margin" : "border");
              return Le(
                this,
                function (t, n, r) {
                  var o;
                  return me.isWindow(t)
                    ? 0 === i.indexOf("outer")
                      ? t["inner" + e]
                      : t.document.documentElement["client" + e]
                    : 9 === t.nodeType
                    ? ((o = t.documentElement),
                      Math.max(
                        t.body["scroll" + e],
                        o["scroll" + e],
                        t.body["offset" + e],
                        o["offset" + e],
                        o["client" + e]
                      ))
                    : void 0 === r
                    ? me.css(t, n, s)
                    : me.style(t, n, r, s);
                },
                t,
                a ? r : void 0,
                a
              );
            };
          }
        );
      }),
      me.fn.extend({
        bind: function (e, t, n) {
          return this.on(e, null, t, n);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, n, i) {
          return this.on(t, e, n, i);
        },
        undelegate: function (e, t, n) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", n);
        },
      }),
      (me.holdReady = function (e) {
        e ? me.readyWait++ : me.ready(!0);
      }),
      (me.isArray = Array.isArray),
      (me.parseJSON = JSON.parse),
      (me.nodeName = r),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return me;
        });
    var zt = e.jQuery,
      $t = e.$;
    return (
      (me.noConflict = function (t) {
        return (
          e.$ === me && (e.$ = $t), t && e.jQuery === me && (e.jQuery = zt), me
        );
      }),
      t || (e.jQuery = e.$ = me),
      me
    );
  }),
  function () {
    var e = this,
      t = e._,
      n = {},
      i = Array.prototype,
      r = Object.prototype,
      o = Function.prototype,
      a = i.push,
      s = i.slice,
      l = i.concat,
      u = r.toString,
      c = r.hasOwnProperty,
      p = i.forEach,
      d = i.map,
      f = i.reduce,
      h = i.reduceRight,
      m = i.filter,
      g = i.every,
      v = i.some,
      b = i.indexOf,
      y = i.lastIndexOf,
      x = Array.isArray,
      _ = Object.keys,
      w = o.bind,
      E = function (e) {
        return e instanceof E
          ? e
          : this instanceof E
          ? void (this._wrapped = e)
          : new E(e);
      };
    "undefined" != typeof exports
      ? ("undefined" != typeof module &&
          module.exports &&
          (exports = module.exports = E),
        (exports._ = E))
      : (e._ = E),
      (E.VERSION = "1.4.4");
    var T =
      (E.each =
      E.forEach =
        function (e, t, i) {
          if (null != e)
            if (p && e.forEach === p) e.forEach(t, i);
            else if (e.length === +e.length) {
              for (var r = 0, o = e.length; r < o; r++)
                if (t.call(i, e[r], r, e) === n) return;
            } else
              for (var a in e)
                if (E.has(e, a) && t.call(i, e[a], a, e) === n) return;
        });
    E.map = E.collect = function (e, t, n) {
      var i = [];
      return null == e
        ? i
        : d && e.map === d
        ? e.map(t, n)
        : (T(e, function (e, r, o) {
            i[i.length] = t.call(n, e, r, o);
          }),
          i);
    };
    var C = "Reduce of empty array with no initial value";
    (E.reduce =
      E.foldl =
      E.inject =
        function (e, t, n, i) {
          var r = arguments.length > 2;
          if ((null == e && (e = []), f && e.reduce === f))
            return i && (t = E.bind(t, i)), r ? e.reduce(t, n) : e.reduce(t);
          if (
            (T(e, function (e, o, a) {
              r ? (n = t.call(i, n, e, o, a)) : ((n = e), (r = !0));
            }),
            !r)
          )
            throw new TypeError(C);
          return n;
        }),
      (E.reduceRight = E.foldr =
        function (e, t, n, i) {
          var r = arguments.length > 2;
          if ((null == e && (e = []), h && e.reduceRight === h))
            return (
              i && (t = E.bind(t, i)),
              r ? e.reduceRight(t, n) : e.reduceRight(t)
            );
          var o = e.length;
          if (o !== +o) {
            var a = E.keys(e);
            o = a.length;
          }
          if (
            (T(e, function (s, l, u) {
              (l = a ? a[--o] : --o),
                r ? (n = t.call(i, n, e[l], l, u)) : ((n = e[l]), (r = !0));
            }),
            !r)
          )
            throw new TypeError(C);
          return n;
        }),
      (E.find = E.detect =
        function (e, t, n) {
          var i;
          return (
            S(e, function (e, r, o) {
              if (t.call(n, e, r, o)) return (i = e), !0;
            }),
            i
          );
        }),
      (E.filter = E.select =
        function (e, t, n) {
          var i = [];
          return null == e
            ? i
            : m && e.filter === m
            ? e.filter(t, n)
            : (T(e, function (e, r, o) {
                t.call(n, e, r, o) && (i[i.length] = e);
              }),
              i);
        }),
      (E.reject = function (e, t, n) {
        return E.filter(
          e,
          function (e, i, r) {
            return !t.call(n, e, i, r);
          },
          n
        );
      }),
      (E.every = E.all =
        function (e, t, i) {
          t || (t = E.identity);
          var r = !0;
          return null == e
            ? r
            : g && e.every === g
            ? e.every(t, i)
            : (T(e, function (e, o, a) {
                if (!(r = r && t.call(i, e, o, a))) return n;
              }),
              !!r);
        });
    var S =
      (E.some =
      E.any =
        function (e, t, i) {
          t || (t = E.identity);
          var r = !1;
          return null == e
            ? r
            : v && e.some === v
            ? e.some(t, i)
            : (T(e, function (e, o, a) {
                if (r || (r = t.call(i, e, o, a))) return n;
              }),
              !!r);
        });
    (E.contains = E.include =
      function (e, t) {
        return (
          null != e &&
          (b && e.indexOf === b
            ? -1 != e.indexOf(t)
            : S(e, function (e) {
                return e === t;
              }))
        );
      }),
      (E.invoke = function (e, t) {
        var n = s.call(arguments, 2),
          i = E.isFunction(t);
        return E.map(e, function (e) {
          return (i ? t : e[t]).apply(e, n);
        });
      }),
      (E.pluck = function (e, t) {
        return E.map(e, function (e) {
          return e[t];
        });
      }),
      (E.where = function (e, t, n) {
        return E.isEmpty(t)
          ? n
            ? null
            : []
          : E[n ? "find" : "filter"](e, function (e) {
              for (var n in t) if (t[n] !== e[n]) return !1;
              return !0;
            });
      }),
      (E.findWhere = function (e, t) {
        return E.where(e, t, !0);
      }),
      (E.max = function (e, t, n) {
        if (!t && E.isArray(e) && e[0] === +e[0] && e.length < 65535)
          return Math.max.apply(Math, e);
        if (!t && E.isEmpty(e)) return -1 / 0;
        var i = { computed: -1 / 0, value: -1 / 0 };
        return (
          T(e, function (e, r, o) {
            var a = t ? t.call(n, e, r, o) : e;
            a >= i.computed && (i = { value: e, computed: a });
          }),
          i.value
        );
      }),
      (E.min = function (e, t, n) {
        if (!t && E.isArray(e) && e[0] === +e[0] && e.length < 65535)
          return Math.min.apply(Math, e);
        if (!t && E.isEmpty(e)) return 1 / 0;
        var i = { computed: 1 / 0, value: 1 / 0 };
        return (
          T(e, function (e, r, o) {
            var a = t ? t.call(n, e, r, o) : e;
            a < i.computed && (i = { value: e, computed: a });
          }),
          i.value
        );
      }),
      (E.shuffle = function (e) {
        var t,
          n = 0,
          i = [];
        return (
          T(e, function (e) {
            (t = E.random(n++)), (i[n - 1] = i[t]), (i[t] = e);
          }),
          i
        );
      });
    var A = function (e) {
      return E.isFunction(e)
        ? e
        : function (t) {
            return t[e];
          };
    };
    E.sortBy = function (e, t, n) {
      var i = A(t);
      return E.pluck(
        E.map(e, function (e, t, r) {
          return { value: e, index: t, criteria: i.call(n, e, t, r) };
        }).sort(function (e, t) {
          var n = e.criteria,
            i = t.criteria;
          if (n !== i) {
            if (n > i || void 0 === n) return 1;
            if (n < i || void 0 === i) return -1;
          }
          return e.index < t.index ? -1 : 1;
        }),
        "value"
      );
    };
    var D = function (e, t, n, i) {
      var r = {},
        o = A(t || E.identity);
      return (
        T(e, function (t, a) {
          var s = o.call(n, t, a, e);
          i(r, s, t);
        }),
        r
      );
    };
    (E.groupBy = function (e, t, n) {
      return D(e, t, n, function (e, t, n) {
        (E.has(e, t) ? e[t] : (e[t] = [])).push(n);
      });
    }),
      (E.countBy = function (e, t, n) {
        return D(e, t, n, function (e, t) {
          E.has(e, t) || (e[t] = 0), e[t]++;
        });
      }),
      (E.sortedIndex = function (e, t, n, i) {
        n = null == n ? E.identity : A(n);
        for (var r = n.call(i, t), o = 0, a = e.length; o < a; ) {
          var s = (o + a) >>> 1;
          n.call(i, e[s]) < r ? (o = s + 1) : (a = s);
        }
        return o;
      }),
      (E.toArray = function (e) {
        return e
          ? E.isArray(e)
            ? s.call(e)
            : e.length === +e.length
            ? E.map(e, E.identity)
            : E.values(e)
          : [];
      }),
      (E.size = function (e) {
        return null == e
          ? 0
          : e.length === +e.length
          ? e.length
          : E.keys(e).length;
      }),
      (E.first =
        E.head =
        E.take =
          function (e, t, n) {
            if (null != e) return null == t || n ? e[0] : s.call(e, 0, t);
          }),
      (E.initial = function (e, t, n) {
        return s.call(e, 0, e.length - (null == t || n ? 1 : t));
      }),
      (E.last = function (e, t, n) {
        if (null != e)
          return null == t || n
            ? e[e.length - 1]
            : s.call(e, Math.max(e.length - t, 0));
      }),
      (E.rest =
        E.tail =
        E.drop =
          function (e, t, n) {
            return s.call(e, null == t || n ? 1 : t);
          }),
      (E.compact = function (e) {
        return E.filter(e, E.identity);
      });
    var O = function (e, t, n) {
      return (
        T(e, function (e) {
          E.isArray(e) ? (t ? a.apply(n, e) : O(e, t, n)) : n.push(e);
        }),
        n
      );
    };
    (E.flatten = function (e, t) {
      return O(e, t, []);
    }),
      (E.without = function (e) {
        return E.difference(e, s.call(arguments, 1));
      }),
      (E.uniq = E.unique =
        function (e, t, n, i) {
          E.isFunction(t) && ((i = n), (n = t), (t = !1));
          var r = n ? E.map(e, n, i) : e,
            o = [],
            a = [];
          return (
            T(r, function (n, i) {
              (t ? i && a[a.length - 1] === n : E.contains(a, n)) ||
                (a.push(n), o.push(e[i]));
            }),
            o
          );
        }),
      (E.union = function () {
        return E.uniq(l.apply(i, arguments));
      }),
      (E.intersection = function (e) {
        var t = s.call(arguments, 1);
        return E.filter(E.uniq(e), function (e) {
          return E.every(t, function (t) {
            return E.indexOf(t, e) >= 0;
          });
        });
      }),
      (E.difference = function (e) {
        var t = l.apply(i, s.call(arguments, 1));
        return E.filter(e, function (e) {
          return !E.contains(t, e);
        });
      }),
      (E.zip = function () {
        for (
          var e = s.call(arguments),
            t = E.max(E.pluck(e, "length")),
            n = new Array(t),
            i = 0;
          i < t;
          i++
        )
          n[i] = E.pluck(e, "" + i);
        return n;
      }),
      (E.object = function (e, t) {
        if (null == e) return {};
        for (var n = {}, i = 0, r = e.length; i < r; i++)
          t ? (n[e[i]] = t[i]) : (n[e[i][0]] = e[i][1]);
        return n;
      }),
      (E.indexOf = function (e, t, n) {
        if (null == e) return -1;
        var i = 0,
          r = e.length;
        if (n) {
          if ("number" != typeof n)
            return (i = E.sortedIndex(e, t)), e[i] === t ? i : -1;
          i = n < 0 ? Math.max(0, r + n) : n;
        }
        if (b && e.indexOf === b) return e.indexOf(t, n);
        for (; i < r; i++) if (e[i] === t) return i;
        return -1;
      }),
      (E.lastIndexOf = function (e, t, n) {
        if (null == e) return -1;
        var i = null != n;
        if (y && e.lastIndexOf === y)
          return i ? e.lastIndexOf(t, n) : e.lastIndexOf(t);
        for (var r = i ? n : e.length; r--; ) if (e[r] === t) return r;
        return -1;
      }),
      (E.range = function (e, t, n) {
        arguments.length <= 1 && ((t = e || 0), (e = 0)),
          (n = arguments[2] || 1);
        for (
          var i = Math.max(Math.ceil((t - e) / n), 0), r = 0, o = new Array(i);
          r < i;

        )
          (o[r++] = e), (e += n);
        return o;
      }),
      (E.bind = function (e, t) {
        if (e.bind === w && w) return w.apply(e, s.call(arguments, 1));
        var n = s.call(arguments, 2);
        return function () {
          return e.apply(t, n.concat(s.call(arguments)));
        };
      }),
      (E.partial = function (e) {
        var t = s.call(arguments, 1);
        return function () {
          return e.apply(this, t.concat(s.call(arguments)));
        };
      }),
      (E.bindAll = function (e) {
        var t = s.call(arguments, 1);
        return (
          0 === t.length && (t = E.functions(e)),
          T(t, function (t) {
            e[t] = E.bind(e[t], e);
          }),
          e
        );
      }),
      (E.memoize = function (e, t) {
        var n = {};
        return (
          t || (t = E.identity),
          function () {
            var i = t.apply(this, arguments);
            return E.has(n, i) ? n[i] : (n[i] = e.apply(this, arguments));
          }
        );
      }),
      (E.delay = function (e, t) {
        var n = s.call(arguments, 2);
        return setTimeout(function () {
          return e.apply(null, n);
        }, t);
      }),
      (E.defer = function (e) {
        return E.delay.apply(E, [e, 1].concat(s.call(arguments, 1)));
      }),
      (E.throttle = function (e, t) {
        var n,
          i,
          r,
          o,
          a = 0,
          s = function () {
            (a = new Date()), (r = null), (o = e.apply(n, i));
          };
        return function () {
          var l = new Date(),
            u = t - (l - a);
          return (
            (n = this),
            (i = arguments),
            u <= 0
              ? (clearTimeout(r), (r = null), (a = l), (o = e.apply(n, i)))
              : r || (r = setTimeout(s, u)),
            o
          );
        };
      }),
      (E.debounce = function (e, t, n) {
        var i, r;
        return function () {
          var o = this,
            a = arguments,
            s = function () {
              (i = null), n || (r = e.apply(o, a));
            },
            l = n && !i;
          return (
            clearTimeout(i), (i = setTimeout(s, t)), l && (r = e.apply(o, a)), r
          );
        };
      }),
      (E.once = function (e) {
        var t,
          n = !1;
        return function () {
          return n
            ? t
            : ((n = !0), (t = e.apply(this, arguments)), (e = null), t);
        };
      }),
      (E.wrap = function (e, t) {
        return function () {
          var n = [e];
          return a.apply(n, arguments), t.apply(this, n);
        };
      }),
      (E.compose = function () {
        var e = arguments;
        return function () {
          for (var t = arguments, n = e.length - 1; n >= 0; n--)
            t = [e[n].apply(this, t)];
          return t[0];
        };
      }),
      (E.after = function (e, t) {
        return e <= 0
          ? t()
          : function () {
              if (--e < 1) return t.apply(this, arguments);
            };
      }),
      (E.keys =
        _ ||
        function (e) {
          if (e !== Object(e)) throw new TypeError("Invalid object");
          var t = [];
          for (var n in e) E.has(e, n) && (t[t.length] = n);
          return t;
        }),
      (E.values = function (e) {
        var t = [];
        for (var n in e) E.has(e, n) && t.push(e[n]);
        return t;
      }),
      (E.pairs = function (e) {
        var t = [];
        for (var n in e) E.has(e, n) && t.push([n, e[n]]);
        return t;
      }),
      (E.invert = function (e) {
        var t = {};
        for (var n in e) E.has(e, n) && (t[e[n]] = n);
        return t;
      }),
      (E.functions = E.methods =
        function (e) {
          var t = [];
          for (var n in e) E.isFunction(e[n]) && t.push(n);
          return t.sort();
        }),
      (E.extend = function (e) {
        return (
          T(s.call(arguments, 1), function (t) {
            if (t) for (var n in t) e[n] = t[n];
          }),
          e
        );
      }),
      (E.pick = function (e) {
        var t = {},
          n = l.apply(i, s.call(arguments, 1));
        return (
          T(n, function (n) {
            n in e && (t[n] = e[n]);
          }),
          t
        );
      }),
      (E.omit = function (e) {
        var t = {},
          n = l.apply(i, s.call(arguments, 1));
        for (var r in e) E.contains(n, r) || (t[r] = e[r]);
        return t;
      }),
      (E.defaults = function (e) {
        return (
          T(s.call(arguments, 1), function (t) {
            if (t) for (var n in t) null == e[n] && (e[n] = t[n]);
          }),
          e
        );
      }),
      (E.clone = function (e) {
        return E.isObject(e) ? (E.isArray(e) ? e.slice() : E.extend({}, e)) : e;
      }),
      (E.tap = function (e, t) {
        return t(e), e;
      });
    var I = function (e, t, n, i) {
      if (e === t) return 0 !== e || 1 / e == 1 / t;
      if (null == e || null == t) return e === t;
      e instanceof E && (e = e._wrapped), t instanceof E && (t = t._wrapped);
      var r = u.call(e);
      if (r != u.call(t)) return !1;
      switch (r) {
        case "[object String]":
          return e == String(t);
        case "[object Number]":
          return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
        case "[object Date]":
        case "[object Boolean]":
          return +e == +t;
        case "[object RegExp]":
          return (
            e.source == t.source &&
            e.global == t.global &&
            e.multiline == t.multiline &&
            e.ignoreCase == t.ignoreCase
          );
      }
      if ("object" != typeof e || "object" != typeof t) return !1;
      for (var o = n.length; o--; ) if (n[o] == e) return i[o] == t;
      n.push(e), i.push(t);
      var a = 0,
        s = !0;
      if ("[object Array]" == r) {
        if (((a = e.length), (s = a == t.length)))
          for (; a-- && (s = I(e[a], t[a], n, i)); );
      } else {
        var l = e.constructor,
          c = t.constructor;
        if (
          l !== c &&
          !(
            E.isFunction(l) &&
            l instanceof l &&
            E.isFunction(c) &&
            c instanceof c
          )
        )
          return !1;
        for (var p in e)
          if (E.has(e, p) && (a++, !(s = E.has(t, p) && I(e[p], t[p], n, i))))
            break;
        if (s) {
          for (p in t) if (E.has(t, p) && !a--) break;
          s = !a;
        }
      }
      return n.pop(), i.pop(), s;
    };
    (E.isEqual = function (e, t) {
      return I(e, t, [], []);
    }),
      (E.isEmpty = function (e) {
        if (null == e) return !0;
        if (E.isArray(e) || E.isString(e)) return 0 === e.length;
        for (var t in e) if (E.has(e, t)) return !1;
        return !0;
      }),
      (E.isElement = function (e) {
        return !(!e || 1 !== e.nodeType);
      }),
      (E.isArray =
        x ||
        function (e) {
          return "[object Array]" == u.call(e);
        }),
      (E.isObject = function (e) {
        return e === Object(e);
      }),
      T(
        ["Arguments", "Function", "String", "Number", "Date", "RegExp"],
        function (e) {
          E["is" + e] = function (t) {
            return u.call(t) == "[object " + e + "]";
          };
        }
      ),
      E.isArguments(arguments) ||
        (E.isArguments = function (e) {
          return !(!e || !E.has(e, "callee"));
        }),
      "function" != typeof /./ &&
        (E.isFunction = function (e) {
          return "function" == typeof e;
        }),
      (E.isFinite = function (e) {
        return isFinite(e) && !isNaN(parseFloat(e));
      }),
      (E.isNaN = function (e) {
        return E.isNumber(e) && e != +e;
      }),
      (E.isBoolean = function (e) {
        return !0 === e || !1 === e || "[object Boolean]" == u.call(e);
      }),
      (E.isNull = function (e) {
        return null === e;
      }),
      (E.isUndefined = function (e) {
        return void 0 === e;
      }),
      (E.has = function (e, t) {
        return c.call(e, t);
      }),
      (E.noConflict = function () {
        return (e._ = t), this;
      }),
      (E.identity = function (e) {
        return e;
      }),
      (E.times = function (e, t, n) {
        for (var i = Array(e), r = 0; r < e; r++) i[r] = t.call(n, r);
        return i;
      }),
      (E.random = function (e, t) {
        return (
          null == t && ((t = e), (e = 0)),
          e + Math.floor(Math.random() * (t - e + 1))
        );
      });
    var N = {
      escape: {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;",
      },
    };
    N.unescape = E.invert(N.escape);
    var k = {
      escape: new RegExp("[" + E.keys(N.escape).join("") + "]", "g"),
      unescape: new RegExp("(" + E.keys(N.unescape).join("|") + ")", "g"),
    };
    E.each(["escape", "unescape"], function (e) {
      E[e] = function (t) {
        return null == t
          ? ""
          : ("" + t).replace(k[e], function (t) {
              return N[e][t];
            });
      };
    }),
      (E.result = function (e, t) {
        if (null == e) return null;
        var n = e[t];
        return E.isFunction(n) ? n.call(e) : n;
      }),
      (E.mixin = function (e) {
        T(E.functions(e), function (t) {
          var n = (E[t] = e[t]);
          E.prototype[t] = function () {
            var e = [this._wrapped];
            return a.apply(e, arguments), R.call(this, n.apply(E, e));
          };
        });
      });
    var L = 0;
    (E.uniqueId = function (e) {
      var t = ++L + "";
      return e ? e + t : t;
    }),
      (E.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
      });
    var j = /(.)^/,
      H = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\t": "t",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      P = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    (E.template = function (e, t, n) {
      var i;
      n = E.defaults({}, n, E.templateSettings);
      var r = new RegExp(
          [
            (n.escape || j).source,
            (n.interpolate || j).source,
            (n.evaluate || j).source,
          ].join("|") + "|$",
          "g"
        ),
        o = 0,
        a = "__p+='";
      e.replace(r, function (t, n, i, r, s) {
        return (
          (a += e.slice(o, s).replace(P, function (e) {
            return "\\" + H[e];
          })),
          n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"),
          i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"),
          r && (a += "';\n" + r + "\n__p+='"),
          (o = s + t.length),
          t
        );
      }),
        (a += "';\n"),
        n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
        (a =
          "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
          a +
          "return __p;\n");
      try {
        i = new Function(n.variable || "obj", "_", a);
      } catch (e) {
        throw ((e.source = a), e);
      }
      if (t) return i(t, E);
      var s = function (e) {
        return i.call(this, e, E);
      };
      return (
        (s.source = "function(" + (n.variable || "obj") + "){\n" + a + "}"), s
      );
    }),
      (E.chain = function (e) {
        return E(e).chain();
      });
    var R = function (e) {
      return this._chain ? E(e).chain() : e;
    };
    E.mixin(E),
      T(
        ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
        function (e) {
          var t = i[e];
          E.prototype[e] = function () {
            var n = this._wrapped;
            return (
              t.apply(n, arguments),
              ("shift" != e && "splice" != e) || 0 !== n.length || delete n[0],
              R.call(this, n)
            );
          };
        }
      ),
      T(["concat", "join", "slice"], function (e) {
        var t = i[e];
        E.prototype[e] = function () {
          return R.call(this, t.apply(this._wrapped, arguments));
        };
      }),
      E.extend(E.prototype, {
        chain: function () {
          return (this._chain = !0), this;
        },
        value: function () {
          return this._wrapped;
        },
      });
  }.call(this),
  define(
    "underscore",
    (function (e) {
      return function () {
        return e._;
      };
    })(this)
  ),
  function () {
    var e,
      t = this,
      n = t.Backbone,
      i = Array.prototype.slice,
      r = Array.prototype.splice;
    (e = "undefined" != typeof exports ? exports : (t.Backbone = {})),
      (e.VERSION = "0.9.2");
    var o = t._;
    o || "undefined" == typeof require || (o = require("underscore"));
    var a = t.jQuery || t.Zepto || t.ender;
    (e.setDomLibrary = function (e) {
      a = e;
    }),
      (e.noConflict = function () {
        return (t.Backbone = n), this;
      }),
      (e.emulateHTTP = !1),
      (e.emulateJSON = !1);
    var s = /\s+/,
      l = (e.Events = {
        on: function (e, t, n) {
          var i, r, o, a, l;
          if (!t) return this;
          for (
            e = e.split(s), i = this._callbacks || (this._callbacks = {});
            (r = e.shift());

          )
            (l = i[r]),
              (o = l ? l.tail : {}),
              (o.next = a = {}),
              (o.context = n),
              (o.callback = t),
              (i[r] = { tail: a, next: l ? l.next : o });
          return this;
        },
        off: function (e, t, n) {
          var i, r, a, l, u, c;
          if ((r = this._callbacks)) {
            if (!(e || t || n)) return delete this._callbacks, this;
            for (e = e ? e.split(s) : o.keys(r); (i = e.shift()); )
              if (((a = r[i]), delete r[i], a && (t || n)))
                for (l = a.tail; (a = a.next) !== l; )
                  (u = a.callback),
                    (c = a.context),
                    ((t && u !== t) || (n && c !== n)) && this.on(i, u, c);
            return this;
          }
        },
        trigger: function (e) {
          var t, n, r, o, a, l, u;
          if (!(r = this._callbacks)) return this;
          for (
            l = r.all, e = e.split(s), u = i.call(arguments, 1);
            (t = e.shift());

          ) {
            if ((n = r[t]))
              for (o = n.tail; (n = n.next) !== o; )
                n.callback.apply(n.context || this, u);
            if ((n = l))
              for (o = n.tail, a = [t].concat(u); (n = n.next) !== o; )
                n.callback.apply(n.context || this, a);
          }
          return this;
        },
      });
    (l.bind = l.on), (l.unbind = l.off);
    var u = (e.Model = function (e, t) {
      var n;
      e || (e = {}),
        t && t.parse && (e = this.parse(e)),
        (n = S(this, "defaults")) && (e = o.extend({}, n, e)),
        t && t.collection && (this.collection = t.collection),
        (this.attributes = {}),
        (this._escapedAttributes = {}),
        (this.cid = o.uniqueId("c")),
        (this.changed = {}),
        (this._silent = {}),
        (this._pending = {}),
        this.set(e, { silent: !0 }),
        (this.changed = {}),
        (this._silent = {}),
        (this._pending = {}),
        (this._previousAttributes = o.clone(this.attributes)),
        this.initialize.apply(this, arguments);
    });
    o.extend(u.prototype, l, {
      changed: null,
      _silent: null,
      _pending: null,
      idAttribute: "id",
      initialize: function () {},
      toJSON: function (e) {
        return o.clone(this.attributes);
      },
      get: function (e) {
        return this.attributes[e];
      },
      escape: function (e) {
        var t;
        if ((t = this._escapedAttributes[e])) return t;
        var n = this.get(e);
        return (this._escapedAttributes[e] = o.escape(null == n ? "" : "" + n));
      },
      has: function (e) {
        return null != this.get(e);
      },
      set: function (e, t, n) {
        var i, r, a;
        if (
          (o.isObject(e) || null == e
            ? ((i = e), (n = t))
            : ((i = {}), (i[e] = t)),
          n || (n = {}),
          !i)
        )
          return this;
        if ((i instanceof u && (i = i.attributes), n.unset))
          for (r in i) i[r] = void 0;
        if (!this._validate(i, n)) return !1;
        this.idAttribute in i && (this.id = i[this.idAttribute]);
        var s = (n.changes = {}),
          l = this.attributes,
          c = this._escapedAttributes,
          p = this._previousAttributes || {};
        for (r in i)
          (a = i[r]),
            (!o.isEqual(l[r], a) || (n.unset && o.has(l, r))) &&
              (delete c[r], ((n.silent ? this._silent : s)[r] = !0)),
            n.unset ? delete l[r] : (l[r] = a),
            o.isEqual(p[r], a) && o.has(l, r) == o.has(p, r)
              ? (delete this.changed[r], delete this._pending[r])
              : ((this.changed[r] = a), n.silent || (this._pending[r] = !0));
        return n.silent || this.change(n), this;
      },
      unset: function (e, t) {
        return ((t || (t = {})).unset = !0), this.set(e, null, t);
      },
      clear: function (e) {
        return (
          ((e || (e = {})).unset = !0), this.set(o.clone(this.attributes), e)
        );
      },
      fetch: function (t) {
        t = t ? o.clone(t) : {};
        var n = this,
          i = t.success;
        return (
          (t.success = function (e, r, o) {
            if (!n.set(n.parse(e, o), t)) return !1;
            i && i(n, e);
          }),
          (t.error = e.wrapError(t.error, n, t)),
          (this.sync || e.sync).call(this, "read", this, t)
        );
      },
      save: function (t, n, i) {
        var r, a;
        if (
          (o.isObject(t) || null == t
            ? ((r = t), (i = n))
            : ((r = {}), (r[t] = n)),
          (i = i ? o.clone(i) : {}),
          i.wait)
        ) {
          if (!this._validate(r, i)) return !1;
          a = o.clone(this.attributes);
        }
        var s = o.extend({}, i, { silent: !0 });
        if (r && !this.set(r, i.wait ? s : i)) return !1;
        var l = this,
          u = i.success;
        (i.success = function (e, t, n) {
          var a = l.parse(e, n);
          if (
            (i.wait && (delete i.wait, (a = o.extend(r || {}, a))),
            !l.set(a, i))
          )
            return !1;
          u ? u(l, e) : l.trigger("sync", l, e, i);
        }),
          (i.error = e.wrapError(i.error, l, i));
        var c = this.isNew() ? "create" : "update",
          p = (this.sync || e.sync).call(this, c, this, i);
        return i.wait && this.set(a, s), p;
      },
      destroy: function (t) {
        t = t ? o.clone(t) : {};
        var n = this,
          i = t.success,
          r = function () {
            n.trigger("destroy", n, n.collection, t);
          };
        if (this.isNew()) return r(), !1;
        (t.success = function (e) {
          t.wait && r(), i ? i(n, e) : n.trigger("sync", n, e, t);
        }),
          (t.error = e.wrapError(t.error, n, t));
        var a = (this.sync || e.sync).call(this, "delete", this, t);
        return t.wait || r(), a;
      },
      url: function () {
        var e = S(this, "urlRoot") || S(this.collection, "url") || A();
        return this.isNew()
          ? e
          : e +
              ("/" == e.charAt(e.length - 1) ? "" : "/") +
              encodeURIComponent(this.id);
      },
      parse: function (e, t) {
        return e;
      },
      clone: function () {
        return new this.constructor(this.attributes);
      },
      isNew: function () {
        return null == this.id;
      },
      change: function (e) {
        e || (e = {});
        var t = this._changing;
        this._changing = !0;
        for (var n in this._silent) this._pending[n] = !0;
        var i = o.extend({}, e.changes, this._silent);
        this._silent = {};
        for (var n in i) this.trigger("change:" + n, this, this.get(n), e);
        if (t) return this;
        for (; !o.isEmpty(this._pending); ) {
          (this._pending = {}), this.trigger("change", this, e);
          for (var n in this.changed)
            this._pending[n] || this._silent[n] || delete this.changed[n];
          this._previousAttributes = o.clone(this.attributes);
        }
        return (this._changing = !1), this;
      },
      hasChanged: function (e) {
        return arguments.length
          ? o.has(this.changed, e)
          : !o.isEmpty(this.changed);
      },
      changedAttributes: function (e) {
        if (!e) return !!this.hasChanged() && o.clone(this.changed);
        var t,
          n = !1,
          i = this._previousAttributes;
        for (var r in e)
          o.isEqual(i[r], (t = e[r])) || ((n || (n = {}))[r] = t);
        return n;
      },
      previous: function (e) {
        return arguments.length && this._previousAttributes
          ? this._previousAttributes[e]
          : null;
      },
      previousAttributes: function () {
        return o.clone(this._previousAttributes);
      },
      isValid: function () {
        return !this.validate(this.attributes);
      },
      _validate: function (e, t) {
        if (t.silent || !this.validate) return !0;
        e = o.extend({}, this.attributes, e);
        var n = this.validate(e, t);
        return (
          !n ||
          (t && t.error
            ? t.error(this, n, t)
            : this.trigger("error", this, n, t),
          !1)
        );
      },
    });
    var c = (e.Collection = function (e, t) {
      t || (t = {}),
        t.model && (this.model = t.model),
        t.comparator && (this.comparator = t.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        e && this.reset(e, { silent: !0, parse: t.parse });
    });
    o.extend(c.prototype, l, {
      model: u,
      initialize: function () {},
      toJSON: function (e) {
        return this.map(function (t) {
          return t.toJSON(e);
        });
      },
      add: function (e, t) {
        var n,
          i,
          a,
          s,
          l,
          u,
          c = {},
          p = {},
          d = [];
        for (
          t || (t = {}),
            e = o.isArray(e) ? e.slice() : [e],
            n = 0,
            a = e.length;
          n < a;
          n++
        ) {
          if (!(s = e[n] = this._prepareModel(e[n], t)))
            throw new Error("Can't add an invalid model to a collection");
          (l = s.cid),
            (u = s.id),
            c[l] || this._byCid[l] || (null != u && (p[u] || this._byId[u]))
              ? d.push(n)
              : (c[l] = p[u] = s);
        }
        for (n = d.length; n--; ) e.splice(d[n], 1);
        for (n = 0, a = e.length; n < a; n++)
          (s = e[n]).on("all", this._onModelEvent, this),
            (this._byCid[s.cid] = s),
            null != s.id && (this._byId[s.id] = s);
        if (
          ((this.length += a),
          (i = null != t.at ? t.at : this.models.length),
          r.apply(this.models, [i, 0].concat(e)),
          this.comparator && this.sort({ silent: !0 }),
          t.silent)
        )
          return this;
        for (n = 0, a = this.models.length; n < a; n++)
          c[(s = this.models[n]).cid] &&
            ((t.index = n), s.trigger("add", s, this, t));
        return this;
      },
      remove: function (e, t) {
        var n, i, r, a;
        for (
          t || (t = {}),
            e = o.isArray(e) ? e.slice() : [e],
            n = 0,
            i = e.length;
          n < i;
          n++
        )
          (a = this.getByCid(e[n]) || this.get(e[n])) &&
            (delete this._byId[a.id],
            delete this._byCid[a.cid],
            (r = this.indexOf(a)),
            this.models.splice(r, 1),
            this.length--,
            t.silent || ((t.index = r), a.trigger("remove", a, this, t)),
            this._removeReference(a));
        return this;
      },
      push: function (e, t) {
        return (e = this._prepareModel(e, t)), this.add(e, t), e;
      },
      pop: function (e) {
        var t = this.at(this.length - 1);
        return this.remove(t, e), t;
      },
      unshift: function (e, t) {
        return (
          (e = this._prepareModel(e, t)), this.add(e, o.extend({ at: 0 }, t)), e
        );
      },
      shift: function (e) {
        var t = this.at(0);
        return this.remove(t, e), t;
      },
      get: function (e) {
        if (null != e) return this._byId[null != e.id ? e.id : e];
      },
      getByCid: function (e) {
        return e && this._byCid[e.cid || e];
      },
      at: function (e) {
        return this.models[e];
      },
      where: function (e) {
        return o.isEmpty(e)
          ? []
          : this.filter(function (t) {
              for (var n in e) if (e[n] !== t.get(n)) return !1;
              return !0;
            });
      },
      sort: function (e) {
        if ((e || (e = {}), !this.comparator))
          throw new Error("Cannot sort a set without a comparator");
        var t = o.bind(this.comparator, this);
        return (
          1 == this.comparator.length
            ? (this.models = this.sortBy(t))
            : this.models.sort(t),
          e.silent || this.trigger("reset", this, e),
          this
        );
      },
      pluck: function (e) {
        return o.map(this.models, function (t) {
          return t.get(e);
        });
      },
      reset: function (e, t) {
        e || (e = []), t || (t = {});
        for (var n = 0, i = this.models.length; n < i; n++)
          this._removeReference(this.models[n]);
        return (
          this._reset(),
          this.add(e, o.extend({ silent: !0 }, t)),
          t.silent || this.trigger("reset", this, t),
          this
        );
      },
      fetch: function (t) {
        (t = t ? o.clone(t) : {}), void 0 === t.parse && (t.parse = !0);
        var n = this,
          i = t.success;
        return (
          (t.success = function (e, r, o) {
            n[t.add ? "add" : "reset"](n.parse(e, o), t), i && i(n, e);
          }),
          (t.error = e.wrapError(t.error, n, t)),
          (this.sync || e.sync).call(this, "read", this, t)
        );
      },
      create: function (e, t) {
        var n = this;
        if (((t = t ? o.clone(t) : {}), !(e = this._prepareModel(e, t))))
          return !1;
        t.wait || n.add(e, t);
        var i = t.success;
        return (
          (t.success = function (r, o, a) {
            t.wait && n.add(r, t), i ? i(r, o) : r.trigger("sync", e, o, t);
          }),
          e.save(null, t),
          e
        );
      },
      parse: function (e, t) {
        return e;
      },
      chain: function () {
        return o(this.models).chain();
      },
      _reset: function (e) {
        (this.length = 0),
          (this.models = []),
          (this._byId = {}),
          (this._byCid = {});
      },
      _prepareModel: function (e, t) {
        if ((t || (t = {}), e instanceof u))
          e.collection || (e.collection = this);
        else {
          var n = e;
          (t.collection = this),
            (e = new this.model(n, t)),
            e._validate(e.attributes, t) || (e = !1);
        }
        return e;
      },
      _removeReference: function (e) {
        this == e.collection && delete e.collection,
          e.off("all", this._onModelEvent, this);
      },
      _onModelEvent: function (e, t, n, i) {
        (("add" != e && "remove" != e) || n == this) &&
          ("destroy" == e && this.remove(t, i),
          t &&
            e === "change:" + t.idAttribute &&
            (delete this._byId[t.previous(t.idAttribute)],
            (this._byId[t.id] = t)),
          this.trigger.apply(this, arguments));
      },
    });
    var p = [
      "forEach",
      "each",
      "map",
      "reduce",
      "reduceRight",
      "find",
      "detect",
      "filter",
      "select",
      "reject",
      "every",
      "all",
      "some",
      "any",
      "include",
      "contains",
      "invoke",
      "max",
      "min",
      "sortBy",
      "sortedIndex",
      "toArray",
      "size",
      "first",
      "initial",
      "rest",
      "last",
      "without",
      "indexOf",
      "shuffle",
      "lastIndexOf",
      "isEmpty",
      "groupBy",
    ];
    o.each(p, function (e) {
      c.prototype[e] = function () {
        return o[e].apply(o, [this.models].concat(o.toArray(arguments)));
      };
    });
    var d = (e.Router = function (e) {
        e || (e = {}),
          e.routes && (this.routes = e.routes),
          this._bindRoutes(),
          this.initialize.apply(this, arguments);
      }),
      f = /:\w+/g,
      h = /\*\w+/g,
      m = /[-[\]{}()+?.,\\^$|#\s]/g;
    o.extend(d.prototype, l, {
      initialize: function () {},
      route: function (t, n, i) {
        return (
          e.history || (e.history = new g()),
          o.isRegExp(t) || (t = this._routeToRegExp(t)),
          i || (i = this[n]),
          e.history.route(
            t,
            o.bind(function (r) {
              var o = this._extractParameters(t, r);
              i && i.apply(this, o),
                this.trigger.apply(this, ["route:" + n].concat(o)),
                e.history.trigger("route", this, n, o);
            }, this)
          ),
          this
        );
      },
      navigate: function (t, n) {
        e.history.navigate(t, n);
      },
      _bindRoutes: function () {
        if (this.routes) {
          var e = [];
          for (var t in this.routes) e.unshift([t, this.routes[t]]);
          for (var n = 0, i = e.length; n < i; n++)
            this.route(e[n][0], e[n][1], this[e[n][1]]);
        }
      },
      _routeToRegExp: function (e) {
        return (
          (e = e.replace(m, "\\$&").replace(f, "([^/]+)").replace(h, "(.*?)")),
          new RegExp("^" + e + "$")
        );
      },
      _extractParameters: function (e, t) {
        return e.exec(t).slice(1);
      },
    });
    var g = (e.History = function () {
        (this.handlers = []), o.bindAll(this, "checkUrl");
      }),
      v = /^[#\/]/,
      b = /msie [\w.]+/;
    (g.started = !1),
      o.extend(g.prototype, l, {
        interval: 50,
        getHash: function (e) {
          var t = e ? e.location : window.location,
            n = t.href.match(/#(.*)$/);
          return n ? n[1] : "";
        },
        getFragment: function (e, t) {
          if (null == e)
            if (this._hasPushState || t) {
              e = window.location.pathname;
              var n = window.location.search;
              n && (e += n);
            } else e = this.getHash();
          return (
            e.indexOf(this.options.root) ||
              (e = e.substr(this.options.root.length)),
            e.replace(v, "")
          );
        },
        start: function (e) {
          if (g.started)
            throw new Error("Backbone.history has already been started");
          (g.started = !0),
            (this.options = o.extend({}, { root: "/" }, this.options, e)),
            (this._wantsHashChange = !1 !== this.options.hashChange),
            (this._wantsPushState = !!this.options.pushState),
            (this._hasPushState = !!(
              this.options.pushState &&
              window.history &&
              window.history.pushState
            ));
          var t = this.getFragment(),
            n = document.documentMode,
            i = b.exec(navigator.userAgent.toLowerCase()) && (!n || n <= 7);
          i &&
            ((this.iframe = a('<iframe src="javascript:0" tabindex="-1" />')
              .hide()
              .appendTo("body")[0].contentWindow),
            this.navigate(t)),
            this._hasPushState
              ? a(window).bind("popstate", this.checkUrl)
              : this._wantsHashChange && "onhashchange" in window && !i
              ? a(window).bind("hashchange", this.checkUrl)
              : this._wantsHashChange &&
                (this._checkUrlInterval = setInterval(
                  this.checkUrl,
                  this.interval
                )),
            (this.fragment = t);
          var r = window.location,
            s = r.pathname == this.options.root;
          return this._wantsHashChange &&
            this._wantsPushState &&
            !this._hasPushState &&
            !s
            ? ((this.fragment = this.getFragment(null, !0)),
              window.location.replace(this.options.root + "#" + this.fragment),
              !0)
            : (this._wantsPushState &&
                this._hasPushState &&
                s &&
                r.hash &&
                ((this.fragment = this.getHash().replace(v, "")),
                window.history.replaceState(
                  {},
                  document.title,
                  r.protocol + "//" + r.host + this.options.root + this.fragment
                )),
              this.options.silent ? void 0 : this.loadUrl());
        },
        stop: function () {
          a(window)
            .unbind("popstate", this.checkUrl)
            .unbind("hashchange", this.checkUrl),
            clearInterval(this._checkUrlInterval),
            (g.started = !1);
        },
        route: function (e, t) {
          this.handlers.unshift({ route: e, callback: t });
        },
        checkUrl: function (e) {
          var t = this.getFragment();
          if (
            (t == this.fragment &&
              this.iframe &&
              (t = this.getFragment(this.getHash(this.iframe))),
            t == this.fragment)
          )
            return !1;
          this.iframe && this.navigate(t),
            this.loadUrl() || this.loadUrl(this.getHash());
        },
        loadUrl: function (e) {
          var t = (this.fragment = this.getFragment(e));
          return o.any(this.handlers, function (e) {
            if (e.route.test(t)) return e.callback(t), !0;
          });
        },
        navigate: function (e, t) {
          if (!g.started) return !1;
          (t && !0 !== t) || (t = { trigger: t });
          var n = (e || "").replace(v, "");
          this.fragment != n &&
            (this._hasPushState
              ? (0 != n.indexOf(this.options.root) &&
                  (n = this.options.root + n),
                (this.fragment = n),
                window.history[t.replace ? "replaceState" : "pushState"](
                  {},
                  document.title,
                  n
                ))
              : this._wantsHashChange
              ? ((this.fragment = n),
                this._updateHash(window.location, n, t.replace),
                this.iframe &&
                  n != this.getFragment(this.getHash(this.iframe)) &&
                  (t.replace || this.iframe.document.open().close(),
                  this._updateHash(this.iframe.location, n, t.replace)))
              : window.location.assign(this.options.root + e),
            t.trigger && this.loadUrl(e));
        },
        _updateHash: function (e, t, n) {
          n
            ? e.replace(
                e.toString().replace(/(javascript:|#).*$/, "") + "#" + t
              )
            : (e.hash = t);
        },
      });
    var y = (e.View = function (e) {
        (this.cid = o.uniqueId("view")),
          this._configure(e || {}),
          this._ensureElement(),
          this.initialize.apply(this, arguments),
          this.delegateEvents();
      }),
      x = /^(\S+)\s*(.*)$/,
      _ = [
        "model",
        "collection",
        "el",
        "id",
        "attributes",
        "className",
        "tagName",
      ];
    o.extend(y.prototype, l, {
      tagName: "div",
      $: function (e) {
        return this.$el.find(e);
      },
      initialize: function () {},
      render: function () {
        return this;
      },
      remove: function () {
        return this.$el.remove(), this;
      },
      make: function (e, t, n) {
        var i = document.createElement(e);
        return t && a(i).attr(t), n && a(i).html(n), i;
      },
      setElement: function (e, t) {
        return (
          this.$el && this.undelegateEvents(),
          (this.$el = e instanceof a ? e : a(e)),
          (this.el = this.$el[0]),
          !1 !== t && this.delegateEvents(),
          this
        );
      },
      delegateEvents: function (e) {
        if (e || (e = S(this, "events"))) {
          this.undelegateEvents();
          for (var t in e) {
            var n = e[t];
            if ((o.isFunction(n) || (n = this[e[t]]), !n))
              throw new Error('Method "' + e[t] + '" does not exist');
            var i = t.match(x),
              r = i[1],
              a = i[2];
            (n = o.bind(n, this)),
              (r += ".delegateEvents" + this.cid),
              "" === a ? this.$el.bind(r, n) : this.$el.delegate(a, r, n);
          }
        }
      },
      undelegateEvents: function () {
        this.$el.unbind(".delegateEvents" + this.cid);
      },
      _configure: function (e) {
        this.options && (e = o.extend({}, this.options, e));
        for (var t = 0, n = _.length; t < n; t++) {
          var i = _[t];
          e[i] && (this[i] = e[i]);
        }
        this.options = e;
      },
      _ensureElement: function () {
        if (this.el) this.setElement(this.el, !1);
        else {
          var e = S(this, "attributes") || {};
          this.id && (e.id = this.id),
            this.className && (e.class = this.className),
            this.setElement(this.make(this.tagName, e), !1);
        }
      },
    });
    var w = function (e, t) {
      var n = C(this, e, t);
      return (n.extend = this.extend), n;
    };
    u.extend = c.extend = d.extend = y.extend = w;
    var E = { create: "POST", update: "PUT", delete: "DELETE", read: "GET" };
    (e.sync = function (t, n, i) {
      var r = E[t];
      i || (i = {});
      var s = { type: r, dataType: "json" };
      return (
        i.url || (s.url = S(n, "url") || A()),
        i.data ||
          !n ||
          ("create" != t && "update" != t) ||
          ((s.contentType = "application/json"),
          (s.data = JSON.stringify(n.toJSON()))),
        e.emulateJSON &&
          ((s.contentType = "application/x-www-form-urlencoded"),
          (s.data = s.data ? { model: s.data } : {})),
        e.emulateHTTP &&
          (("PUT" !== r && "DELETE" !== r) ||
            (e.emulateJSON && (s.data._method = r),
            (s.type = "POST"),
            (s.beforeSend = function (e) {
              e.setRequestHeader("X-HTTP-Method-Override", r);
            }))),
        "GET" === s.type || e.emulateJSON || (s.processData = !1),
        a.ajax(o.extend(s, i))
      );
    }),
      (e.wrapError = function (e, t, n) {
        return function (i, r) {
          (r = i === t ? r : i), e ? e(t, r, n) : t.trigger("error", t, r, n);
        };
      });
    var T = function () {},
      C = function (e, t, n) {
        var i;
        return (
          (i =
            t && t.hasOwnProperty("constructor")
              ? t.constructor
              : function () {
                  e.apply(this, arguments);
                }),
          o.extend(i, e),
          (T.prototype = e.prototype),
          (i.prototype = new T()),
          t && o.extend(i.prototype, t),
          n && o.extend(i, n),
          (i.prototype.constructor = i),
          (i.__super__ = e.prototype),
          i
        );
      },
      S = function (e, t) {
        return e && e[t] ? (o.isFunction(e[t]) ? e[t]() : e[t]) : null;
      },
      A = function () {
        throw new Error('A "url" property or function must be specified');
      };
  }.call(this),
  define(
    "backbone",
    ["underscore", "jquery"],
    (function (e) {
      return function () {
        return e.Backbone;
      };
    })(this)
  ),
  define(
    "models/snippet",
    ["jquery", "underscore", "backbone"],
    function (e, t, n) {
      return n.Model.extend({
        getValues: function () {
          return t.reduce(
            this.get("fields"),
            function (e, n, i) {
              return (
                "select" == n.type
                  ? (e[i] = t.find(n.value, function (e) {
                      return e.selected;
                    }).value)
                  : (e[i] = n.value),
                e
              );
            },
            {}
          );
        },
        idFriendlyTitle: function () {
          return this.get("title").replace(/\W/g, "").toLowerCase();
        },
        setField: function (e, t) {
          var n = this.get("fields");
          (n[e].value = t), this.set("fields", n);
        },
      });
    }
  ),
  define("text", ["module"], function (e) {
    "use strict";
    var t,
      n,
      i = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"],
      r = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,
      o = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
      a = "undefined" != typeof location && location.href,
      s = a && location.protocol && location.protocol.replace(/\:/, ""),
      l = a && location.hostname,
      u = a && (location.port || void 0),
      c = [],
      p = (e.config && e.config()) || {};
    return (
      (t = {
        version: "2.0.5",
        strip: function (e) {
          if (e) {
            e = e.replace(r, "");
            var t = e.match(o);
            t && (e = t[1]);
          } else e = "";
          return e;
        },
        jsEscape: function (e) {
          return e
            .replace(/(['\\])/g, "\\$1")
            .replace(/[\f]/g, "\\f")
            .replace(/[\b]/g, "\\b")
            .replace(/[\n]/g, "\\n")
            .replace(/[\t]/g, "\\t")
            .replace(/[\r]/g, "\\r")
            .replace(/[\u2028]/g, "\\u2028")
            .replace(/[\u2029]/g, "\\u2029");
        },
        createXhr:
          p.createXhr ||
          function () {
            var e, t, n;
            if ("undefined" != typeof XMLHttpRequest)
              return new XMLHttpRequest();
            if ("undefined" != typeof ActiveXObject)
              for (t = 0; t < 3; t += 1) {
                n = i[t];
                try {
                  e = new ActiveXObject(n);
                } catch (e) {}
                if (e) {
                  i = [n];
                  break;
                }
              }
            return e;
          },
        parseName: function (e) {
          var t,
            n,
            i,
            r = !1,
            o = e.indexOf("."),
            a = 0 === e.indexOf("./") || 0 === e.indexOf("../");
          return (
            -1 !== o && (!a || o > 1)
              ? ((t = e.substring(0, o)), (n = e.substring(o + 1, e.length)))
              : (t = e),
            (i = n || t),
            (o = i.indexOf("!")),
            -1 !== o &&
              ((r = "strip" === i.substring(o + 1)),
              (i = i.substring(0, o)),
              n ? (n = i) : (t = i)),
            { moduleName: t, ext: n, strip: r }
          );
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function (e, n, i, r) {
          var o,
            a,
            s,
            l = t.xdRegExp.exec(e);
          return (
            !l ||
            ((o = l[2]),
            (a = l[3]),
            (a = a.split(":")),
            (s = a[1]),
            (a = a[0]),
            !(
              (o && o !== n) ||
              (a && a.toLowerCase() !== i.toLowerCase()) ||
              ((s || a) && s !== r)
            ))
          );
        },
        finishLoad: function (e, n, i, r) {
          (i = n ? t.strip(i) : i), p.isBuild && (c[e] = i), r(i);
        },
        load: function (e, n, i, r) {
          if (r.isBuild && !r.inlineText) return void i();
          p.isBuild = r.isBuild;
          var o = t.parseName(e),
            c = o.moduleName + (o.ext ? "." + o.ext : ""),
            d = n.toUrl(c),
            f = p.useXhr || t.useXhr;
          !a || f(d, s, l, u)
            ? t.get(
                d,
                function (n) {
                  t.finishLoad(e, o.strip, n, i);
                },
                function (e) {
                  i.error && i.error(e);
                }
              )
            : n([c], function (e) {
                t.finishLoad(o.moduleName + "." + o.ext, o.strip, e, i);
              });
        },
        write: function (e, n, i, r) {
          if (c.hasOwnProperty(n)) {
            var o = t.jsEscape(c[n]);
            i.asModule(
              e + "!" + n,
              "define(function () { return '" + o + "';});\n"
            );
          }
        },
        writeFile: function (e, n, i, r, o) {
          var a = t.parseName(n),
            s = a.ext ? "." + a.ext : "",
            l = a.moduleName + s,
            u = i.toUrl(a.moduleName + s) + ".js";
          t.load(
            l,
            i,
            function (n) {
              var i = function (e) {
                return r(u, e);
              };
              (i.asModule = function (e, t) {
                return r.asModule(e, u, t);
              }),
                t.write(e, l, i, o);
            },
            o
          );
        },
      }),
      "node" === p.env ||
      (!p.env &&
        "undefined" != typeof process &&
        process.versions &&
        process.versions.node)
        ? ((n = require.nodeRequire("fs")),
          (t.get = function (e, t) {
            var i = n.readFileSync(e, "utf8");
            0 === i.indexOf("\ufeff") && (i = i.substring(1)), t(i);
          }))
        : "xhr" === p.env || (!p.env && t.createXhr())
        ? (t.get = function (e, n, i, r) {
            var o,
              a = t.createXhr();
            if ((a.open("GET", e, !0), r))
              for (o in r)
                r.hasOwnProperty(o) &&
                  a.setRequestHeader(o.toLowerCase(), r[o]);
            p.onXhr && p.onXhr(a, e),
              (a.onreadystatechange = function (t) {
                var r, o;
                4 === a.readyState &&
                  ((r = a.status),
                  r > 399 && r < 600
                    ? ((o = new Error(e + " HTTP status: " + r)),
                      (o.xhr = a),
                      i(o))
                    : n(a.responseText));
              }),
              a.send(null);
          })
        : ("rhino" === p.env ||
            (!p.env &&
              "undefined" != typeof Packages &&
              "undefined" != typeof java)) &&
          (t.get = function (e, t) {
            var n,
              i,
              r = new java.io.File(e),
              o = java.lang.System.getProperty("line.separator"),
              a = new java.io.BufferedReader(
                new java.io.InputStreamReader(
                  new java.io.FileInputStream(r),
                  "utf-8"
                )
              ),
              s = "";
            try {
              for (
                n = new java.lang.StringBuffer(),
                  i = a.readLine(),
                  i &&
                    i.length() &&
                    65279 === i.charAt(0) &&
                    (i = i.substring(1)),
                  n.append(i);
                null !== (i = a.readLine());

              )
                n.append(o), n.append(i);
              s = String(n.toString());
            } finally {
              a.close();
            }
            t(s);
          }),
      t
    );
  }),
  define("text!templates/popover/popover-main.html", [], function () {
    return '<form role="form">\n    <% var compiled =  _.reduce(items, function(str, v, k){ %>\n      <% v["name"] = k; %>\n      <% return str + popoverTemplates[v["type"]](v); %>\n    <% }, "") %>\n    <%= compiled %>\n    <hr/>\n    <button id="save" class=\'btn btn-info col-md-4\'>Save</button>&nbsp;<button id="cancel" class=\'btn btn-danger\'>Cancel</button>\n</form>\n';
  }),
  define("text!templates/popover/popover-input.html", [], function () {
    return "<div class=\"form-group\">\n\t<label class=\"col-md-12 control-label\"> <%= label %> </label>\n\t<div class=\"col-md-10\">\n\t\t<input class='form-control field' data-type=\"<%= type %>\" type='text' name='<%= name %>' id='<%= name %>' value ='<%= value %>' />\n\t</div>\n</div>";
  }),
  define("text!templates/popover/popover-select.html", [], function () {
    return '<div class="form-group">\n\t<label class=\'col-md-6 control-label\'> <%= label %> </label>\n\t<div class="col-md-6">\n\t\t<select class="form-control field" data-type="<%= type %>" id=\'<%= name %>\'>\n\t\t<% _.each(value, function(v,k){ %>\n\t\t  <option value="<%= v["value"] %>" <% if (v["selected"]){ %> selected <% } %> ><%= v["label"] %></option>\n\t\t<% }); %>\n\t\t</select>\n\t</div>\n</div>\n';
  }),
  define("text!templates/popover/popover-textarea.html", [], function () {
    return '<div class="form-group">\n\t<label class="col-md-12 control-label"> <%= label %> </label>\n\t<div class="col-md-10"> \n\t\t<textarea class="form-control field" data-type="<%= type %>" style=\'min-height: 200px\' id=\'<%= name %>\'><%= value %></textarea>\n\t</div>\n</div>\n';
  }),
  define("text!templates/popover/popover-textarea-split.html", [], function () {
    return '<div class="form-group">\n\t<label class="col-md-12 control-label"> <%= label %> </label>\n\t<div class="col-md-10">\n\t<textarea class="form-control field" data-type="<%= type %>" id=\'<%= name %>\'><% for ( var i = 0; i < value.length ; i++ ) { %><%= value[i] %><% if (i < value.length - 1) { %><%= "\\n" %><% } %><% } %></textarea>\n\t</div>\n</div>';
  }),
  define("text!templates/popover/popover-checkbox.html", [], function () {
    return '<div class="checkbox">\n\t<label>\n\t  <input type="checkbox" data-type="<%= type %>" class="field" name="<%= name %>" id="<%= name %>"<% if(value) {%> checked="checked" <% } %>>\n\t  <%= label %>\n\t</label>\n</div>\n';
  }),
  define("text!templates/snippet/formname.html", [], function () {
    return "";
  }),
  define("text!templates/snippet/prependedtext.html", [], function () {
    return '\x3c!-- <%= label %> | Prepended text --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div class=<% if ( inputsize.length <= 0){ %>  "col-md-4" <%}else { %> "<%= inputsize %>"<%}%> >\n        <div class="input-group">\n            <div class="input-group-addon"><%= prepend %></div>\n            <input <% if (helptext.length > 0) { %> aria-describedby="<%= id %>HelpBlock" <% } %>id="<%= id %>" name="<%= id %>" class="form-control" placeholder="<%= placeholder %>" type="text"<% if(required) {%> required <% } %> />\n        </div>\n        <% if (helptext.length > 0) { %><small id="<%= id %>HelpBlock" class="text-muted"><%= helptext %></small><% } %>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/searchinput.html", [], function () {
    return '\x3c!-- <%= label %> | Search input--\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div class=<% if ( inputsize.length <= 0){ %>  "col-md-4" <%}else { %> "<%= inputsize %>"<%}%> >\n        <input <% if (helptext.length > 0) { %> aria-describedby="<%= id %>HelpBlock" <% } %>id="<%= id %>" name="<%= id %>" type="password" placeholder="<%= placeholder %>" class="form-control input-md" <% if(required) {%> required <% } %> />\n        <% if (helptext.length > 0) { %><small id="<%= id %>HelpBlock" class="text-muted"><%= helptext %></small><% } %>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/textinput.html", [], function () {
    return '\x3c!-- <%= label %> | Text input--\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div class=<% if ( inputsize.length <= 0){ %> "col-md-8" <%}else { %> "<%= inputsize %>"<%}%> >\n        <input <% if (helptext.length > 0) { %> aria-describedby="<%= id %>HelpBlock" <% } %>id="<%= id %>" name="<%= id %>" type="text" placeholder="<%= placeholder %>" class="form-control input-md" <% if(required) {%> required <% } %> />\n        <% if (helptext.length > 0) { %><small id="<%= id %>HelpBlock" class="text-muted"><%= helptext %></small><% } %>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/appendedcheckbox.html", [], function () {
    return '\x3c!-- Appended checkbox --\x3e\n<div class="form-group row">\n    <label class="col-md-4 control-label" for="<%= id %>"><%= label %></label>\n    <div class=<% if ( inputsize.length <= 0){ %>  "col-md-4" <%}else { %> "<%= inputsize %>"<%}%>>\n        <div class="input-group">\n            <input id="<%= id %>" name="<%= id %>" class="form-control" type="text" placeholder="<%= placeholder %>" <% if(required) {%> required <% } %> />\n            <span class="input-group-addon">\n                <input type="checkbox" <% if (checked){ %>checked="checked"<% } %>>\n            </span>\n        </div>\n        <% if (helptext.length > 0) { %><p class="help-block"><%= helptext %></p><% } %>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/appendedtext.html", [], function () {
    return '\x3c!-- <%= label %> | Appended text --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div class=<% if ( inputsize.length <= 0){ %>  "col-md-4" <%}else { %> "<%= inputsize %>"<%}%> >\n        <div class="input-group">\n            <input <% if (helptext.length > 0) { %> aria-describedby="<%= id %>HelpBlock" <% } %>id="<%= id %>" name="<%= id %>" class="form-control" placeholder="<%= placeholder %>" type="text"<% if(required) {%> required <% } %> />\n            <div class="input-group-addon"><%= append %></div>\n        </div>\n        <% if (helptext.length > 0) { %><small id="<%= id %>HelpBlock" class="text-muted"><%= helptext %></small><% } %>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/filebutton.html", [], function () {
    return '\x3c!-- <%= label %> | File Button --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div class="col-md-8">\n        <input id="<%= id %>" name="<%= id %>" class="input-file" id="fileInput" type="file">\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/button.html", [], function () {
    return '\x3c!-- <%= label %> | Button --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div class="col-md-4">\n        <button id="<%= id %>" name="<%= id %>" class=\'btn <%= buttontype %>\'><%= buttonlabel %></button>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/buttondouble.html", [], function () {
    return '\x3c!-- <%= label %> | Button (Double) --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div class="col-md-8">\n        <button id="<%= id %>" name="<%= id %>" class=\'btn <%= button1type %>\'><%= button1label %></button>\n        <button id="<%= id2 %>" name="<%= id2 %>" class=\'btn <%= button2type %>\'><%= button2label %></button>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/buttondropdown.html", [], function () {
    return '\x3c!-- Button Drop Down --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div class=<% if ( inputsize.length <= 0){ %>  "col-md-4" <%}else { %> "<%= inputsize %>"<%}%>>\n        <div class="input-group">\n            <div class="input-group-btn">\n                <div class="dropdown">\n                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n                        <%= buttontext %>\n                    </button>\n                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton"><% _.each(buttonoptions, function(value) { %>\n                        <a class="dropdown-item" href="#"><%= value %></a><% }); %>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n';
  }),
  define("text!templates/snippet/multiplecheckboxes.html", [], function () {
    return '\x3c!-- <%= label %> | Multiple Checkboxes --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label"><%= label %></label>\n    <div class="col-md-8"><% _.each(checkboxes, function(checkbox, i){ %>\n        <div class="checkbox">\n            <label for="<%= name+\'-\'+i %>">\n                <input type="checkbox" name="<%= name %>" id="<%= name+\'-\'+i %>" value="<%= checkboxesValues[i] %>">\n                <%= checkbox %>\n            </label>\n        </div><% }); %>\n    </div>\n</div>\n';
  }),
  define(
    "text!templates/snippet/multiplecheckboxesinline.html",
    [],
    function () {
      return '\x3c!-- <%= label %> | Multiple Checkboxes (inline) --\x3e\n<div class="form-group row">\n  <label class="col-md-4 col-form-label"><%= label %></label>\n  <div class="col-md-8"><% _.each(checkboxes, function(checkbox, i){ %>\n    <label class="checkbox-inline" for="<%= name+\'-\'+i %>">\n      <input type="checkbox" name="<%= name %>" id="<%= name+\'-\'+i %>" value="<%= checkboxesValues[i] %>">\n      <%= checkbox %>\n    </label><% }); %>\n  </div>\n</div>\n';
    }
  ),
  define("text!templates/snippet/multipleradios.html", [], function () {
    return '\x3c!-- <%= label %> | Multiple Radios --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label"><%= label %></label>\n    <div class="col-md-8"><% _.each(radios, function(radio, i){ %>\n        <div class="radio">\n            <label  for="<%= name+\'-\'+i %>">\n                <input type="radio" name="<%= name %>" id="<%= name+\'-\'+i %>" value="<%= radiosValues[i] %>"  <% if (i < 1) { %> checked="checked" <% } %>>\n                <%= radio %>\n            </label>\n        </div><% }); %>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/multipleradiosinline.html", [], function () {
    return '\x3c!-- <%= label %> | Multiple Radios (inline)--\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label"><%= label %></label>\n    <div class="col-md-8"><% _.each(radios, function(radio, i){ %>\n        <label class="radio-inline" for="<%= name+\'-\'+i %>">\n            <input type="radio" name="<%= name %>" id="<%= name+\'-\'+i %>" value="<%= radiosValues[i] %>"  <% if (i < 1) { %> checked="checked" <% } %>>\n            <%= radio %>\n        </label><% }); %>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/passwordinput.html", [], function () {
    return '\x3c!-- <%= label %> | Passwrod input--\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div class=<% if ( inputsize.length <= 0){ %>  "col-md-4" <%}else { %> "<%= inputsize %>"<%}%> >\n        <input <% if (helptext.length > 0) { %> aria-describedby="<%= id %>HelpBlock" <% } %>id="<%= id %>" name="<%= id %>" type="password" placeholder="<%= placeholder %>" class="form-control input-md" <% if(required) {%> required <% } %> />\n        <% if (helptext.length > 0) { %><small id="<%= id %>HelpBlock" class="text-muted"><%= helptext %></small><% } %>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/prependedcheckbox.html", [], function () {
    return '\x3c!-- <%= label %> | Prepended checkbox --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div class=<% if ( inputsize.length <= 0){ %>  "col-md-4" <%}else { %> "<%= inputsize %>"<%}%> >\n        <div class="input-group">\n            <div class="input-group-addon">\n              <input type="checkbox" <% if (checked){ %>checked="checked"<% } %>>\n            </div>\n            <input <% if (helptext.length > 0) { %> aria-describedby="<%= id %>HelpBlock" <% } %>id="<%= id %>" name="<%= id %>" class="form-control" type="text" placeholder="<%= placeholder %>" <% if(required) {%> required <% } %> />\n        </div>\n        <% if (helptext.length > 0) { %><small id="<%= id %>HelpBlock" class="text-muted"><%= helptext %></small><% } %>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/dateinput.html", [], function () {
    return '\x3c!-- <%= label %> | Date input--\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div>\n        <input id="<%= id %>" name="<%= id %>" type="date" class="form-control input-md" <% if(required) {%> required <% } %> />\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/selectbasic.html", [], function () {
    return '\x3c!-- <%= label %> | Select Basic --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n    <div class=<% if ( inputsize.length <= 0){ %>  "col-md-4" <%}else { %> "<%= inputsize %>"<%}%>>\n        <select id="<%= id %>" name="<%= id %>" class="form-control"><% _.each(options, function(option,i) { %>\n            <option value="<%= values[i] %>"><%= option %></option><% }); %>\n        </select>\n    </div>\n</div>\n';
  }),
  define("text!templates/snippet/selectmultiple.html", [], function () {
    return '\x3c!-- <%= label %> | Select Multiple --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for="<%= id %>"><%= label %></label>\n  <div class=<% if ( inputsize.length <= 0){ %>  "col-md-4" <%}else { %> "<%= inputsize %>"<%}%>>\n    <select id="<%= id %>" name="<%= id %>" class="form-control" multiple="multiple"><% _.each(options, function(option,i) { %>\n      <option value="<%= values[i] %>"><%= option %></option><% }); %>\n    </select>\n  </div>\n</div>\n';
  }),
  define("text!templates/snippet/textarea.html", [], function () {
    return '\x3c!-- <%= label %> | Textarea --\x3e\n<div class="form-group row">\n    <label class="col-md-4 col-form-label" for ="<%= id %>"><%= label %></label>\n    <div class="col-md-8">\n        <textarea class="form-control" id="<%= id %>" name="<%= id %>" ><%= textarea %></textarea>\n    </div>\n</div>\n';
  }),
  define(
    "templates/snippet/snippet-templates",
    [
      "require",
      "text!templates/snippet/formname.html",
      "text!templates/snippet/prependedtext.html",
      "text!templates/snippet/searchinput.html",
      "text!templates/snippet/textinput.html",
      "text!templates/snippet/appendedcheckbox.html",
      "text!templates/snippet/appendedtext.html",
      "text!templates/snippet/filebutton.html",
      "text!templates/snippet/button.html",
      "text!templates/snippet/buttondouble.html",
      "text!templates/snippet/buttondropdown.html",
      "text!templates/snippet/multiplecheckboxes.html",
      "text!templates/snippet/multiplecheckboxesinline.html",
      "text!templates/snippet/multipleradios.html",
      "text!templates/snippet/multipleradiosinline.html",
      "text!templates/snippet/passwordinput.html",
      "text!templates/snippet/prependedcheckbox.html",
      "text!templates/snippet/searchinput.html",
      "text!templates/snippet/dateinput.html",
      "text!templates/snippet/selectbasic.html",
      "text!templates/snippet/selectmultiple.html",
      "text!templates/snippet/textarea.html",
    ],
    function (e) {
      var t = e("text!templates/snippet/formname.html"),
        n = e("text!templates/snippet/prependedtext.html"),
        i = e("text!templates/snippet/searchinput.html"),
        r = e("text!templates/snippet/textinput.html"),
        o = e("text!templates/snippet/appendedcheckbox.html"),
        a = e("text!templates/snippet/appendedtext.html"),
        s = e("text!templates/snippet/filebutton.html"),
        l = e("text!templates/snippet/button.html"),
        u = e("text!templates/snippet/buttondouble.html"),
        c = e("text!templates/snippet/buttondropdown.html"),
        p = e("text!templates/snippet/multiplecheckboxes.html"),
        d = e("text!templates/snippet/multiplecheckboxesinline.html"),
        f = e("text!templates/snippet/multipleradios.html"),
        h = e("text!templates/snippet/multipleradiosinline.html"),
        m = e("text!templates/snippet/passwordinput.html"),
        g = e("text!templates/snippet/prependedcheckbox.html"),
        v = e("text!templates/snippet/searchinput.html");
      return {
        formname: t,
        prependedtext: n,
        search: i,
        textinput: r,
        dateinput: e("text!templates/snippet/dateinput.html"),
        appendedcheckbox: o,
        appendedtext: a,
        filebutton: s,
        singlebutton: l,
        doublebutton: u,
        buttondropdown: c,
        multiplecheckboxes: p,
        multiplecheckboxesinline: d,
        multipleradios: f,
        multipleradiosinline: h,
        passwordinput: m,
        prependedcheckbox: g,
        searchinput: v,
        selectbasic: e("text!templates/snippet/selectbasic.html"),
        selectmultiple: e("text!templates/snippet/selectmultiple.html"),
        textarea: e("text!templates/snippet/textarea.html"),
      };
    }
  ),
  "undefined" == typeof jQuery)
)
  throw new Error(
    "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
  );
!(function (e) {
  var t = jQuery.fn.jquery.split(" ")[0].split(".");
  if (
    (t[0] < 2 && t[1] < 9) ||
    (1 == t[0] && 9 == t[1] && t[2] < 1) ||
    t[0] >= 4
  )
    throw new Error(
      "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
    );
})(),
  (function () {
    function e(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    function t(e, t) {
      if ("function" != typeof t && null !== t)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof t
        );
      (e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        t &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(e, t)
            : (e.__proto__ = t));
    }
    function n(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    var i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            },
      r = (function () {
        function e(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        return function (t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })(),
      o = (function (e) {
        function t(e) {
          return {}.toString
            .call(e)
            .match(/\s([a-zA-Z]+)/)[1]
            .toLowerCase();
        }
        function n(e) {
          return (e[0] || e).nodeType;
        }
        function i(t) {
          var n = this,
            i = !1;
          return (
            e(this).one(a.TRANSITION_END, function () {
              i = !0;
            }),
            setTimeout(function () {
              i || a.triggerTransitionEnd(n);
            }, t),
            this
          );
        }
        var r = !1,
          o = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend",
          },
          a = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
              do {
                e += ~~(1e6 * Math.random());
              } while (document.getElementById(e));
              return e;
            },
            getSelectorFromElement: function (t) {
              var n = t.getAttribute("data-target");
              (n && "#" !== n) || (n = t.getAttribute("href") || "");
              try {
                return e(n).length > 0 ? n : null;
              } catch (e) {
                return null;
              }
            },
            reflow: function (e) {
              return e.offsetHeight;
            },
            triggerTransitionEnd: function (t) {
              e(t).trigger(r.end);
            },
            supportsTransitionEnd: function () {
              return Boolean(r);
            },
            typeCheckConfig: function (e, i, r) {
              for (var o in r)
                if (r.hasOwnProperty(o)) {
                  var a = r[o],
                    s = i[o],
                    l = s && n(s) ? "element" : t(s);
                  if (!new RegExp(a).test(l))
                    throw new Error(
                      e.toUpperCase() +
                        ': Option "' +
                        o +
                        '" provided type "' +
                        l +
                        '" but expected type "' +
                        a +
                        '".'
                    );
                }
            },
          };
        return (
          (r = (function () {
            if (window.QUnit) return !1;
            var e = document.createElement("bootstrap");
            for (var t in o) if (void 0 !== e.style[t]) return { end: o[t] };
            return !1;
          })()),
          (e.fn.emulateTransitionEnd = i),
          a.supportsTransitionEnd() &&
            (e.event.special[a.TRANSITION_END] = (function () {
              return {
                bindType: r.end,
                delegateType: r.end,
                handle: function (t) {
                  if (e(t.target).is(this))
                    return t.handleObj.handler.apply(this, arguments);
                },
              };
            })()),
          a
        );
      })(jQuery),
      a =
        ((function (e) {
          var t = "alert",
            i = e.fn[t],
            a = { DISMISS: '[data-dismiss="alert"]' },
            s = {
              CLOSE: "close.bs.alert",
              CLOSED: "closed.bs.alert",
              CLICK_DATA_API: "click.bs.alert.data-api",
            },
            l = { ALERT: "alert", FADE: "fade", SHOW: "show" },
            u = (function () {
              function t(e) {
                n(this, t), (this._element = e);
              }
              return (
                (t.prototype.close = function (e) {
                  e = e || this._element;
                  var t = this._getRootElement(e);
                  this._triggerCloseEvent(t).isDefaultPrevented() ||
                    this._removeElement(t);
                }),
                (t.prototype.dispose = function () {
                  e.removeData(this._element, "bs.alert"),
                    (this._element = null);
                }),
                (t.prototype._getRootElement = function (t) {
                  var n = o.getSelectorFromElement(t),
                    i = !1;
                  return (
                    n && (i = e(n)[0]),
                    i || (i = e(t).closest("." + l.ALERT)[0]),
                    i
                  );
                }),
                (t.prototype._triggerCloseEvent = function (t) {
                  var n = e.Event(s.CLOSE);
                  return e(t).trigger(n), n;
                }),
                (t.prototype._removeElement = function (t) {
                  var n = this;
                  e(t).removeClass(l.SHOW),
                    o.supportsTransitionEnd() && e(t).hasClass(l.FADE)
                      ? e(t)
                          .one(o.TRANSITION_END, function (e) {
                            return n._destroyElement(t, e);
                          })
                          .emulateTransitionEnd(150)
                      : this._destroyElement(t);
                }),
                (t.prototype._destroyElement = function (t) {
                  e(t).detach().trigger(s.CLOSED).remove();
                }),
                (t._jQueryInterface = function (n) {
                  return this.each(function () {
                    var i = e(this),
                      r = i.data("bs.alert");
                    r || ((r = new t(this)), i.data("bs.alert", r)),
                      "close" === n && r[n](this);
                  });
                }),
                (t._handleDismiss = function (e) {
                  return function (t) {
                    t && t.preventDefault(), e.close(this);
                  };
                }),
                r(t, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-beta";
                    },
                  },
                ]),
                t
              );
            })();
          e(document).on(
            s.CLICK_DATA_API,
            a.DISMISS,
            u._handleDismiss(new u())
          ),
            (e.fn[t] = u._jQueryInterface),
            (e.fn[t].Constructor = u),
            (e.fn[t].noConflict = function () {
              return (e.fn[t] = i), u._jQueryInterface;
            });
        })(jQuery),
        (function (e) {
          var t = "button",
            i = e.fn[t],
            o = { ACTIVE: "active", BUTTON: "btn", FOCUS: "focus" },
            a = {
              DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
              DATA_TOGGLE: '[data-toggle="buttons"]',
              INPUT: "input",
              ACTIVE: ".active",
              BUTTON: ".btn",
            },
            s = {
              CLICK_DATA_API: "click.bs.button.data-api",
              FOCUS_BLUR_DATA_API:
                "focus.bs.button.data-api blur.bs.button.data-api",
            },
            l = (function () {
              function t(e) {
                n(this, t), (this._element = e);
              }
              return (
                (t.prototype.toggle = function () {
                  var t = !0,
                    n = !0,
                    i = e(this._element).closest(a.DATA_TOGGLE)[0];
                  if (i) {
                    var r = e(this._element).find(a.INPUT)[0];
                    if (r) {
                      if ("radio" === r.type)
                        if (r.checked && e(this._element).hasClass(o.ACTIVE))
                          t = !1;
                        else {
                          var s = e(i).find(a.ACTIVE)[0];
                          s && e(s).removeClass(o.ACTIVE);
                        }
                      if (t) {
                        if (
                          r.hasAttribute("disabled") ||
                          i.hasAttribute("disabled") ||
                          r.classList.contains("disabled") ||
                          i.classList.contains("disabled")
                        )
                          return;
                        (r.checked = !e(this._element).hasClass(o.ACTIVE)),
                          e(r).trigger("change");
                      }
                      r.focus(), (n = !1);
                    }
                  }
                  n &&
                    this._element.setAttribute(
                      "aria-pressed",
                      !e(this._element).hasClass(o.ACTIVE)
                    ),
                    t && e(this._element).toggleClass(o.ACTIVE);
                }),
                (t.prototype.dispose = function () {
                  e.removeData(this._element, "bs.button"),
                    (this._element = null);
                }),
                (t._jQueryInterface = function (n) {
                  return this.each(function () {
                    var i = e(this).data("bs.button");
                    i || ((i = new t(this)), e(this).data("bs.button", i)),
                      "toggle" === n && i[n]();
                  });
                }),
                r(t, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-beta";
                    },
                  },
                ]),
                t
              );
            })();
          e(document)
            .on(s.CLICK_DATA_API, a.DATA_TOGGLE_CARROT, function (t) {
              t.preventDefault();
              var n = t.target;
              e(n).hasClass(o.BUTTON) || (n = e(n).closest(a.BUTTON)),
                l._jQueryInterface.call(e(n), "toggle");
            })
            .on(s.FOCUS_BLUR_DATA_API, a.DATA_TOGGLE_CARROT, function (t) {
              var n = e(t.target).closest(a.BUTTON)[0];
              e(n).toggleClass(o.FOCUS, /^focus(in)?$/.test(t.type));
            }),
            (e.fn[t] = l._jQueryInterface),
            (e.fn[t].Constructor = l),
            (e.fn[t].noConflict = function () {
              return (e.fn[t] = i), l._jQueryInterface;
            });
        })(jQuery),
        (function (e) {
          var t = "carousel",
            a = "bs.carousel",
            s = "." + a,
            l = e.fn[t],
            u = {
              interval: 5e3,
              keyboard: !0,
              slide: !1,
              pause: "hover",
              wrap: !0,
            },
            c = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              slide: "(boolean|string)",
              pause: "(string|boolean)",
              wrap: "boolean",
            },
            p = { NEXT: "next", PREV: "prev", LEFT: "left", RIGHT: "right" },
            d = {
              SLIDE: "slide" + s,
              SLID: "slid" + s,
              KEYDOWN: "keydown" + s,
              MOUSEENTER: "mouseenter" + s,
              MOUSELEAVE: "mouseleave" + s,
              TOUCHEND: "touchend" + s,
              LOAD_DATA_API: "load.bs.carousel.data-api",
              CLICK_DATA_API: "click.bs.carousel.data-api",
            },
            f = {
              CAROUSEL: "carousel",
              ACTIVE: "active",
              SLIDE: "slide",
              RIGHT: "carousel-item-right",
              LEFT: "carousel-item-left",
              NEXT: "carousel-item-next",
              PREV: "carousel-item-prev",
              ITEM: "carousel-item",
            },
            h = {
              ACTIVE: ".active",
              ACTIVE_ITEM: ".active.carousel-item",
              ITEM: ".carousel-item",
              NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
              INDICATORS: ".carousel-indicators",
              DATA_SLIDE: "[data-slide], [data-slide-to]",
              DATA_RIDE: '[data-ride="carousel"]',
            },
            m = (function () {
              function l(t, i) {
                n(this, l),
                  (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this.touchTimeout = null),
                  (this._config = this._getConfig(i)),
                  (this._element = e(t)[0]),
                  (this._indicatorsElement = e(this._element).find(
                    h.INDICATORS
                  )[0]),
                  this._addEventListeners();
              }
              return (
                (l.prototype.next = function () {
                  this._isSliding || this._slide(p.NEXT);
                }),
                (l.prototype.nextWhenVisible = function () {
                  document.hidden || this.next();
                }),
                (l.prototype.prev = function () {
                  this._isSliding || this._slide(p.PREV);
                }),
                (l.prototype.pause = function (t) {
                  t || (this._isPaused = !0),
                    e(this._element).find(h.NEXT_PREV)[0] &&
                      o.supportsTransitionEnd() &&
                      (o.triggerTransitionEnd(this._element), this.cycle(!0)),
                    clearInterval(this._interval),
                    (this._interval = null);
                }),
                (l.prototype.cycle = function (e) {
                  e || (this._isPaused = !1),
                    this._interval &&
                      (clearInterval(this._interval), (this._interval = null)),
                    this._config.interval &&
                      !this._isPaused &&
                      (this._interval = setInterval(
                        (document.visibilityState
                          ? this.nextWhenVisible
                          : this.next
                        ).bind(this),
                        this._config.interval
                      ));
                }),
                (l.prototype.to = function (t) {
                  var n = this;
                  this._activeElement = e(this._element).find(h.ACTIVE_ITEM)[0];
                  var i = this._getItemIndex(this._activeElement);
                  if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding)
                      e(this._element).one(d.SLID, function () {
                        return n.to(t);
                      });
                    else {
                      if (i === t) return this.pause(), void this.cycle();
                      var r = t > i ? p.NEXT : p.PREV;
                      this._slide(r, this._items[t]);
                    }
                }),
                (l.prototype.dispose = function () {
                  e(this._element).off(s),
                    e.removeData(this._element, a),
                    (this._items = null),
                    (this._config = null),
                    (this._element = null),
                    (this._interval = null),
                    (this._isPaused = null),
                    (this._isSliding = null),
                    (this._activeElement = null),
                    (this._indicatorsElement = null);
                }),
                (l.prototype._getConfig = function (n) {
                  return (
                    (n = e.extend({}, u, n)), o.typeCheckConfig(t, n, c), n
                  );
                }),
                (l.prototype._addEventListeners = function () {
                  var t = this;
                  this._config.keyboard &&
                    e(this._element).on(d.KEYDOWN, function (e) {
                      return t._keydown(e);
                    }),
                    "hover" === this._config.pause &&
                      (e(this._element)
                        .on(d.MOUSEENTER, function (e) {
                          return t.pause(e);
                        })
                        .on(d.MOUSELEAVE, function (e) {
                          return t.cycle(e);
                        }),
                      "ontouchstart" in document.documentElement &&
                        e(this._element).on(d.TOUCHEND, function () {
                          t.pause(),
                            t.touchTimeout && clearTimeout(t.touchTimeout),
                            (t.touchTimeout = setTimeout(function (e) {
                              return t.cycle(e);
                            }, 500 + t._config.interval));
                        }));
                }),
                (l.prototype._keydown = function (e) {
                  if (!/input|textarea/i.test(e.target.tagName))
                    switch (e.which) {
                      case 37:
                        e.preventDefault(), this.prev();
                        break;
                      case 39:
                        e.preventDefault(), this.next();
                        break;
                      default:
                        return;
                    }
                }),
                (l.prototype._getItemIndex = function (t) {
                  return (
                    (this._items = e.makeArray(e(t).parent().find(h.ITEM))),
                    this._items.indexOf(t)
                  );
                }),
                (l.prototype._getItemByDirection = function (e, t) {
                  var n = e === p.NEXT,
                    i = e === p.PREV,
                    r = this._getItemIndex(t),
                    o = this._items.length - 1;
                  if (((i && 0 === r) || (n && r === o)) && !this._config.wrap)
                    return t;
                  var a = (r + (e === p.PREV ? -1 : 1)) % this._items.length;
                  return -1 === a
                    ? this._items[this._items.length - 1]
                    : this._items[a];
                }),
                (l.prototype._triggerSlideEvent = function (t, n) {
                  var i = this._getItemIndex(t),
                    r = this._getItemIndex(
                      e(this._element).find(h.ACTIVE_ITEM)[0]
                    ),
                    o = e.Event(d.SLIDE, {
                      relatedTarget: t,
                      direction: n,
                      from: r,
                      to: i,
                    });
                  return e(this._element).trigger(o), o;
                }),
                (l.prototype._setActiveIndicatorElement = function (t) {
                  if (this._indicatorsElement) {
                    e(this._indicatorsElement)
                      .find(h.ACTIVE)
                      .removeClass(f.ACTIVE);
                    var n =
                      this._indicatorsElement.children[this._getItemIndex(t)];
                    n && e(n).addClass(f.ACTIVE);
                  }
                }),
                (l.prototype._slide = function (t, n) {
                  var i = this,
                    r = e(this._element).find(h.ACTIVE_ITEM)[0],
                    a = this._getItemIndex(r),
                    s = n || (r && this._getItemByDirection(t, r)),
                    l = this._getItemIndex(s),
                    u = Boolean(this._interval),
                    c = void 0,
                    m = void 0,
                    g = void 0;
                  if (
                    (t === p.NEXT
                      ? ((c = f.LEFT), (m = f.NEXT), (g = p.LEFT))
                      : ((c = f.RIGHT), (m = f.PREV), (g = p.RIGHT)),
                    s && e(s).hasClass(f.ACTIVE))
                  )
                    this._isSliding = !1;
                  else if (
                    !this._triggerSlideEvent(s, g).isDefaultPrevented() &&
                    r &&
                    s
                  ) {
                    (this._isSliding = !0),
                      u && this.pause(),
                      this._setActiveIndicatorElement(s);
                    var v = e.Event(d.SLID, {
                      relatedTarget: s,
                      direction: g,
                      from: a,
                      to: l,
                    });
                    o.supportsTransitionEnd() &&
                    e(this._element).hasClass(f.SLIDE)
                      ? (e(s).addClass(m),
                        o.reflow(s),
                        e(r).addClass(c),
                        e(s).addClass(c),
                        e(r)
                          .one(o.TRANSITION_END, function () {
                            e(s)
                              .removeClass(c + " " + m)
                              .addClass(f.ACTIVE),
                              e(r).removeClass(f.ACTIVE + " " + m + " " + c),
                              (i._isSliding = !1),
                              setTimeout(function () {
                                return e(i._element).trigger(v);
                              }, 0);
                          })
                          .emulateTransitionEnd(600))
                      : (e(r).removeClass(f.ACTIVE),
                        e(s).addClass(f.ACTIVE),
                        (this._isSliding = !1),
                        e(this._element).trigger(v)),
                      u && this.cycle();
                  }
                }),
                (l._jQueryInterface = function (t) {
                  return this.each(function () {
                    var n = e(this).data(a),
                      r = e.extend({}, u, e(this).data());
                    "object" === (void 0 === t ? "undefined" : i(t)) &&
                      e.extend(r, t);
                    var o = "string" == typeof t ? t : r.slide;
                    if (
                      (n || ((n = new l(this, r)), e(this).data(a, n)),
                      "number" == typeof t)
                    )
                      n.to(t);
                    else if ("string" == typeof o) {
                      if (void 0 === n[o])
                        throw new Error('No method named "' + o + '"');
                      n[o]();
                    } else r.interval && (n.pause(), n.cycle());
                  });
                }),
                (l._dataApiClickHandler = function (t) {
                  var n = o.getSelectorFromElement(this);
                  if (n) {
                    var i = e(n)[0];
                    if (i && e(i).hasClass(f.CAROUSEL)) {
                      var r = e.extend({}, e(i).data(), e(this).data()),
                        s = this.getAttribute("data-slide-to");
                      s && (r.interval = !1),
                        l._jQueryInterface.call(e(i), r),
                        s && e(i).data(a).to(s),
                        t.preventDefault();
                    }
                  }
                }),
                r(l, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-beta";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return u;
                    },
                  },
                ]),
                l
              );
            })();
          e(document).on(
            d.CLICK_DATA_API,
            h.DATA_SLIDE,
            m._dataApiClickHandler
          ),
            e(window).on(d.LOAD_DATA_API, function () {
              e(h.DATA_RIDE).each(function () {
                var t = e(this);
                m._jQueryInterface.call(t, t.data());
              });
            }),
            (e.fn[t] = m._jQueryInterface),
            (e.fn[t].Constructor = m),
            (e.fn[t].noConflict = function () {
              return (e.fn[t] = l), m._jQueryInterface;
            });
        })(jQuery),
        (function (e) {
          var t = "collapse",
            a = "bs.collapse",
            s = e.fn[t],
            l = { toggle: !0, parent: "" },
            u = { toggle: "boolean", parent: "string" },
            c = {
              SHOW: "show.bs.collapse",
              SHOWN: "shown.bs.collapse",
              HIDE: "hide.bs.collapse",
              HIDDEN: "hidden.bs.collapse",
              CLICK_DATA_API: "click.bs.collapse.data-api",
            },
            p = {
              SHOW: "show",
              COLLAPSE: "collapse",
              COLLAPSING: "collapsing",
              COLLAPSED: "collapsed",
            },
            d = { WIDTH: "width", HEIGHT: "height" },
            f = {
              ACTIVES: ".show, .collapsing",
              DATA_TOGGLE: '[data-toggle="collapse"]',
            },
            h = (function () {
              function s(t, i) {
                n(this, s),
                  (this._isTransitioning = !1),
                  (this._element = t),
                  (this._config = this._getConfig(i)),
                  (this._triggerArray = e.makeArray(
                    e(
                      '[data-toggle="collapse"][href="#' +
                        t.id +
                        '"],[data-toggle="collapse"][data-target="#' +
                        t.id +
                        '"]'
                    )
                  ));
                for (var r = e(f.DATA_TOGGLE), a = 0; a < r.length; a++) {
                  var l = r[a],
                    u = o.getSelectorFromElement(l);
                  null !== u &&
                    e(u).filter(t).length > 0 &&
                    this._triggerArray.push(l);
                }
                (this._parent = this._config.parent ? this._getParent() : null),
                  this._config.parent ||
                    this._addAriaAndCollapsedClass(
                      this._element,
                      this._triggerArray
                    ),
                  this._config.toggle && this.toggle();
              }
              return (
                (s.prototype.toggle = function () {
                  e(this._element).hasClass(p.SHOW) ? this.hide() : this.show();
                }),
                (s.prototype.show = function () {
                  var t = this;
                  if (
                    !this._isTransitioning &&
                    !e(this._element).hasClass(p.SHOW)
                  ) {
                    var n = void 0,
                      i = void 0;
                    if (
                      (this._parent &&
                        ((n = e.makeArray(
                          e(this._parent).children().children(f.ACTIVES)
                        )).length ||
                          (n = null)),
                      !(n && (i = e(n).data(a)) && i._isTransitioning))
                    ) {
                      var r = e.Event(c.SHOW);
                      if (
                        (e(this._element).trigger(r), !r.isDefaultPrevented())
                      ) {
                        n &&
                          (s._jQueryInterface.call(e(n), "hide"),
                          i || e(n).data(a, null));
                        var l = this._getDimension();
                        e(this._element)
                          .removeClass(p.COLLAPSE)
                          .addClass(p.COLLAPSING),
                          (this._element.style[l] = 0),
                          this._triggerArray.length &&
                            e(this._triggerArray)
                              .removeClass(p.COLLAPSED)
                              .attr("aria-expanded", !0),
                          this.setTransitioning(!0);
                        var u = function () {
                          e(t._element)
                            .removeClass(p.COLLAPSING)
                            .addClass(p.COLLAPSE)
                            .addClass(p.SHOW),
                            (t._element.style[l] = ""),
                            t.setTransitioning(!1),
                            e(t._element).trigger(c.SHOWN);
                        };
                        if (o.supportsTransitionEnd()) {
                          var d = "scroll" + (l[0].toUpperCase() + l.slice(1));
                          e(this._element)
                            .one(o.TRANSITION_END, u)
                            .emulateTransitionEnd(600),
                            (this._element.style[l] = this._element[d] + "px");
                        } else u();
                      }
                    }
                  }
                }),
                (s.prototype.hide = function () {
                  var t = this;
                  if (
                    !this._isTransitioning &&
                    e(this._element).hasClass(p.SHOW)
                  ) {
                    var n = e.Event(c.HIDE);
                    if (
                      (e(this._element).trigger(n), !n.isDefaultPrevented())
                    ) {
                      var i = this._getDimension();
                      if (
                        ((this._element.style[i] =
                          this._element.getBoundingClientRect()[i] + "px"),
                        o.reflow(this._element),
                        e(this._element)
                          .addClass(p.COLLAPSING)
                          .removeClass(p.COLLAPSE)
                          .removeClass(p.SHOW),
                        this._triggerArray.length)
                      )
                        for (var r = 0; r < this._triggerArray.length; r++) {
                          var a = this._triggerArray[r],
                            s = o.getSelectorFromElement(a);
                          null !== s &&
                            (e(s).hasClass(p.SHOW) ||
                              e(a)
                                .addClass(p.COLLAPSED)
                                .attr("aria-expanded", !1));
                        }
                      this.setTransitioning(!0);
                      var l = function () {
                        t.setTransitioning(!1),
                          e(t._element)
                            .removeClass(p.COLLAPSING)
                            .addClass(p.COLLAPSE)
                            .trigger(c.HIDDEN);
                      };
                      (this._element.style[i] = ""),
                        o.supportsTransitionEnd()
                          ? e(this._element)
                              .one(o.TRANSITION_END, l)
                              .emulateTransitionEnd(600)
                          : l();
                    }
                  }
                }),
                (s.prototype.setTransitioning = function (e) {
                  this._isTransitioning = e;
                }),
                (s.prototype.dispose = function () {
                  e.removeData(this._element, a),
                    (this._config = null),
                    (this._parent = null),
                    (this._element = null),
                    (this._triggerArray = null),
                    (this._isTransitioning = null);
                }),
                (s.prototype._getConfig = function (n) {
                  return (
                    (n = e.extend({}, l, n)),
                    (n.toggle = Boolean(n.toggle)),
                    o.typeCheckConfig(t, n, u),
                    n
                  );
                }),
                (s.prototype._getDimension = function () {
                  return e(this._element).hasClass(d.WIDTH)
                    ? d.WIDTH
                    : d.HEIGHT;
                }),
                (s.prototype._getParent = function () {
                  var t = this,
                    n = e(this._config.parent)[0],
                    i =
                      '[data-toggle="collapse"][data-parent="' +
                      this._config.parent +
                      '"]';
                  return (
                    e(n)
                      .find(i)
                      .each(function (e, n) {
                        t._addAriaAndCollapsedClass(
                          s._getTargetFromElement(n),
                          [n]
                        );
                      }),
                    n
                  );
                }),
                (s.prototype._addAriaAndCollapsedClass = function (t, n) {
                  if (t) {
                    var i = e(t).hasClass(p.SHOW);
                    n.length &&
                      e(n)
                        .toggleClass(p.COLLAPSED, !i)
                        .attr("aria-expanded", i);
                  }
                }),
                (s._getTargetFromElement = function (t) {
                  var n = o.getSelectorFromElement(t);
                  return n ? e(n)[0] : null;
                }),
                (s._jQueryInterface = function (t) {
                  return this.each(function () {
                    var n = e(this),
                      r = n.data(a),
                      o = e.extend(
                        {},
                        l,
                        n.data(),
                        "object" === (void 0 === t ? "undefined" : i(t)) && t
                      );
                    if (
                      (!r && o.toggle && /show|hide/.test(t) && (o.toggle = !1),
                      r || ((r = new s(this, o)), n.data(a, r)),
                      "string" == typeof t)
                    ) {
                      if (void 0 === r[t])
                        throw new Error('No method named "' + t + '"');
                      r[t]();
                    }
                  });
                }),
                r(s, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-beta";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return l;
                    },
                  },
                ]),
                s
              );
            })();
          e(document).on(c.CLICK_DATA_API, f.DATA_TOGGLE, function (t) {
            /input|textarea/i.test(t.target.tagName) || t.preventDefault();
            var n = e(this),
              i = o.getSelectorFromElement(this);
            e(i).each(function () {
              var t = e(this),
                i = t.data(a) ? "toggle" : n.data();
              h._jQueryInterface.call(t, i);
            });
          }),
            (e.fn[t] = h._jQueryInterface),
            (e.fn[t].Constructor = h),
            (e.fn[t].noConflict = function () {
              return (e.fn[t] = s), h._jQueryInterface;
            });
        })(jQuery),
        (function (e) {
          if ("undefined" == typeof Popper)
            throw new Error(
              "Bootstrap dropdown require Popper.js (https://popper.js.org)"
            );
          var t = "dropdown",
            a = "bs.dropdown",
            s = "." + a,
            l = e.fn[t],
            u = new RegExp("38|40|27"),
            c = {
              HIDE: "hide" + s,
              HIDDEN: "hidden" + s,
              SHOW: "show" + s,
              SHOWN: "shown" + s,
              CLICK: "click" + s,
              CLICK_DATA_API: "click.bs.dropdown.data-api",
              KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
              KEYUP_DATA_API: "keyup.bs.dropdown.data-api",
            },
            p = {
              DISABLED: "disabled",
              SHOW: "show",
              DROPUP: "dropup",
              MENURIGHT: "dropdown-menu-right",
              MENULEFT: "dropdown-menu-left",
            },
            d = {
              DATA_TOGGLE: '[data-toggle="dropdown"]',
              FORM_CHILD: ".dropdown form",
              MENU: ".dropdown-menu",
              NAVBAR_NAV: ".navbar-nav",
              VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled)",
            },
            f = {
              TOP: "top-start",
              TOPEND: "top-end",
              BOTTOM: "bottom-start",
              BOTTOMEND: "bottom-end",
            },
            h = { placement: f.BOTTOM, offset: 0, flip: !0 },
            m = {
              placement: "string",
              offset: "(number|string)",
              flip: "boolean",
            },
            g = (function () {
              function l(e, t) {
                n(this, l),
                  (this._element = e),
                  (this._popper = null),
                  (this._config = this._getConfig(t)),
                  (this._menu = this._getMenuElement()),
                  (this._inNavbar = this._detectNavbar()),
                  this._addEventListeners();
              }
              return (
                (l.prototype.toggle = function () {
                  if (
                    !this._element.disabled &&
                    !e(this._element).hasClass(p.DISABLED)
                  ) {
                    var t = l._getParentFromElement(this._element),
                      n = e(this._menu).hasClass(p.SHOW);
                    if ((l._clearMenus(), !n)) {
                      var i = { relatedTarget: this._element },
                        r = e.Event(c.SHOW, i);
                      if ((e(t).trigger(r), !r.isDefaultPrevented())) {
                        var o = this._element;
                        e(t).hasClass(p.DROPUP) &&
                          (e(this._menu).hasClass(p.MENULEFT) ||
                            e(this._menu).hasClass(p.MENURIGHT)) &&
                          (o = t),
                          (this._popper = new Popper(
                            o,
                            this._menu,
                            this._getPopperConfig()
                          )),
                          "ontouchstart" in document.documentElement &&
                            !e(t).closest(d.NAVBAR_NAV).length &&
                            e("body").children().on("mouseover", null, e.noop),
                          this._element.focus(),
                          this._element.setAttribute("aria-expanded", !0),
                          e(this._menu).toggleClass(p.SHOW),
                          e(t).toggleClass(p.SHOW).trigger(e.Event(c.SHOWN, i));
                      }
                    }
                  }
                }),
                (l.prototype.dispose = function () {
                  e.removeData(this._element, a),
                    e(this._element).off(s),
                    (this._element = null),
                    (this._menu = null),
                    null !== this._popper && this._popper.destroy(),
                    (this._popper = null);
                }),
                (l.prototype.update = function () {
                  (this._inNavbar = this._detectNavbar()),
                    null !== this._popper && this._popper.scheduleUpdate();
                }),
                (l.prototype._addEventListeners = function () {
                  var t = this;
                  e(this._element).on(c.CLICK, function (e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle();
                  });
                }),
                (l.prototype._getConfig = function (n) {
                  var i = e(this._element).data();
                  return (
                    void 0 !== i.placement &&
                      (i.placement = f[i.placement.toUpperCase()]),
                    (n = e.extend(
                      {},
                      this.constructor.Default,
                      e(this._element).data(),
                      n
                    )),
                    o.typeCheckConfig(t, n, this.constructor.DefaultType),
                    n
                  );
                }),
                (l.prototype._getMenuElement = function () {
                  if (!this._menu) {
                    var t = l._getParentFromElement(this._element);
                    this._menu = e(t).find(d.MENU)[0];
                  }
                  return this._menu;
                }),
                (l.prototype._getPlacement = function () {
                  var t = e(this._element).parent(),
                    n = this._config.placement;
                  return (
                    t.hasClass(p.DROPUP) || this._config.placement === f.TOP
                      ? ((n = f.TOP),
                        e(this._menu).hasClass(p.MENURIGHT) && (n = f.TOPEND))
                      : e(this._menu).hasClass(p.MENURIGHT) &&
                        (n = f.BOTTOMEND),
                    n
                  );
                }),
                (l.prototype._detectNavbar = function () {
                  return e(this._element).closest(".navbar").length > 0;
                }),
                (l.prototype._getPopperConfig = function () {
                  var e = {
                    placement: this._getPlacement(),
                    modifiers: {
                      offset: { offset: this._config.offset },
                      flip: { enabled: this._config.flip },
                    },
                  };
                  return (
                    this._inNavbar &&
                      (e.modifiers.applyStyle = { enabled: !this._inNavbar }),
                    e
                  );
                }),
                (l._jQueryInterface = function (t) {
                  return this.each(function () {
                    var n = e(this).data(a),
                      r =
                        "object" === (void 0 === t ? "undefined" : i(t))
                          ? t
                          : null;
                    if (
                      (n || ((n = new l(this, r)), e(this).data(a, n)),
                      "string" == typeof t)
                    ) {
                      if (void 0 === n[t])
                        throw new Error('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                (l._clearMenus = function (t) {
                  if (
                    !t ||
                    (3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                  )
                    for (
                      var n = e.makeArray(e(d.DATA_TOGGLE)), i = 0;
                      i < n.length;
                      i++
                    ) {
                      var r = l._getParentFromElement(n[i]),
                        o = e(n[i]).data(a),
                        s = { relatedTarget: n[i] };
                      if (o) {
                        var u = o._menu;
                        if (
                          e(r).hasClass(p.SHOW) &&
                          !(
                            t &&
                            (("click" === t.type &&
                              /input|textarea/i.test(t.target.tagName)) ||
                              ("keyup" === t.type && 9 === t.which)) &&
                            e.contains(r, t.target)
                          )
                        ) {
                          var f = e.Event(c.HIDE, s);
                          e(r).trigger(f),
                            f.isDefaultPrevented() ||
                              ("ontouchstart" in document.documentElement &&
                                e("body")
                                  .children()
                                  .off("mouseover", null, e.noop),
                              n[i].setAttribute("aria-expanded", "false"),
                              e(u).removeClass(p.SHOW),
                              e(r)
                                .removeClass(p.SHOW)
                                .trigger(e.Event(c.HIDDEN, s)));
                        }
                      }
                    }
                }),
                (l._getParentFromElement = function (t) {
                  var n = void 0,
                    i = o.getSelectorFromElement(t);
                  return i && (n = e(i)[0]), n || t.parentNode;
                }),
                (l._dataApiKeydownHandler = function (t) {
                  if (
                    !(
                      !u.test(t.which) ||
                      (/button/i.test(t.target.tagName) && 32 === t.which) ||
                      /input|textarea/i.test(t.target.tagName) ||
                      (t.preventDefault(),
                      t.stopPropagation(),
                      this.disabled || e(this).hasClass(p.DISABLED))
                    )
                  ) {
                    var n = l._getParentFromElement(this),
                      i = e(n).hasClass(p.SHOW);
                    if (
                      (i || (27 === t.which && 32 === t.which)) &&
                      (!i || (27 !== t.which && 32 !== t.which))
                    ) {
                      var r = e(n).find(d.VISIBLE_ITEMS).get();
                      if (r.length) {
                        var o = r.indexOf(t.target);
                        38 === t.which && o > 0 && o--,
                          40 === t.which && o < r.length - 1 && o++,
                          o < 0 && (o = 0),
                          r[o].focus();
                      }
                    } else {
                      if (27 === t.which) {
                        var a = e(n).find(d.DATA_TOGGLE)[0];
                        e(a).trigger("focus");
                      }
                      e(this).trigger("click");
                    }
                  }
                }),
                r(l, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-beta";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return h;
                    },
                  },
                  {
                    key: "DefaultType",
                    get: function () {
                      return m;
                    },
                  },
                ]),
                l
              );
            })();
          e(document)
            .on(c.KEYDOWN_DATA_API, d.DATA_TOGGLE, g._dataApiKeydownHandler)
            .on(c.KEYDOWN_DATA_API, d.MENU, g._dataApiKeydownHandler)
            .on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, g._clearMenus)
            .on(c.CLICK_DATA_API, d.DATA_TOGGLE, function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                g._jQueryInterface.call(e(this), "toggle");
            })
            .on(c.CLICK_DATA_API, d.FORM_CHILD, function (e) {
              e.stopPropagation();
            }),
            (e.fn[t] = g._jQueryInterface),
            (e.fn[t].Constructor = g),
            (e.fn[t].noConflict = function () {
              return (e.fn[t] = l), g._jQueryInterface;
            });
        })(jQuery),
        (function (e) {
          var t = "modal",
            a = e.fn[t],
            s = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            l = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              focus: "boolean",
              show: "boolean",
            },
            u = {
              HIDE: "hide.bs.modal",
              HIDDEN: "hidden.bs.modal",
              SHOW: "show.bs.modal",
              SHOWN: "shown.bs.modal",
              FOCUSIN: "focusin.bs.modal",
              RESIZE: "resize.bs.modal",
              CLICK_DISMISS: "click.dismiss.bs.modal",
              KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
              MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
              MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
              CLICK_DATA_API: "click.bs.modal.data-api",
            },
            c = {
              SCROLLBAR_MEASURER: "modal-scrollbar-measure",
              BACKDROP: "modal-backdrop",
              OPEN: "modal-open",
              FADE: "fade",
              SHOW: "show",
            },
            p = {
              DIALOG: ".modal-dialog",
              DATA_TOGGLE: '[data-toggle="modal"]',
              DATA_DISMISS: '[data-dismiss="modal"]',
              FIXED_CONTENT:
                ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
              NAVBAR_TOGGLER: ".navbar-toggler",
            },
            d = (function () {
              function a(t, i) {
                n(this, a),
                  (this._config = this._getConfig(i)),
                  (this._element = t),
                  (this._dialog = e(t).find(p.DIALOG)[0]),
                  (this._backdrop = null),
                  (this._isShown = !1),
                  (this._isBodyOverflowing = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._originalBodyPadding = 0),
                  (this._scrollbarWidth = 0);
              }
              return (
                (a.prototype.toggle = function (e) {
                  return this._isShown ? this.hide() : this.show(e);
                }),
                (a.prototype.show = function (t) {
                  var n = this;
                  if (!this._isTransitioning) {
                    o.supportsTransitionEnd() &&
                      e(this._element).hasClass(c.FADE) &&
                      (this._isTransitioning = !0);
                    var i = e.Event(u.SHOW, { relatedTarget: t });
                    e(this._element).trigger(i),
                      this._isShown ||
                        i.isDefaultPrevented() ||
                        ((this._isShown = !0),
                        this._checkScrollbar(),
                        this._setScrollbar(),
                        e(document.body).addClass(c.OPEN),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        e(this._element).on(
                          u.CLICK_DISMISS,
                          p.DATA_DISMISS,
                          function (e) {
                            return n.hide(e);
                          }
                        ),
                        e(this._dialog).on(u.MOUSEDOWN_DISMISS, function () {
                          e(n._element).one(u.MOUSEUP_DISMISS, function (t) {
                            e(t.target).is(n._element) &&
                              (n._ignoreBackdropClick = !0);
                          });
                        }),
                        this._showBackdrop(function () {
                          return n._showElement(t);
                        }));
                  }
                }),
                (a.prototype.hide = function (t) {
                  var n = this;
                  if (
                    (t && t.preventDefault(),
                    !this._isTransitioning && this._isShown)
                  ) {
                    var i =
                      o.supportsTransitionEnd() &&
                      e(this._element).hasClass(c.FADE);
                    i && (this._isTransitioning = !0);
                    var r = e.Event(u.HIDE);
                    e(this._element).trigger(r),
                      this._isShown &&
                        !r.isDefaultPrevented() &&
                        ((this._isShown = !1),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        e(document).off(u.FOCUSIN),
                        e(this._element).removeClass(c.SHOW),
                        e(this._element).off(u.CLICK_DISMISS),
                        e(this._dialog).off(u.MOUSEDOWN_DISMISS),
                        i
                          ? e(this._element)
                              .one(o.TRANSITION_END, function (e) {
                                return n._hideModal(e);
                              })
                              .emulateTransitionEnd(300)
                          : this._hideModal());
                  }
                }),
                (a.prototype.dispose = function () {
                  e.removeData(this._element, "bs.modal"),
                    e(window, document, this._element, this._backdrop).off(
                      ".bs.modal"
                    ),
                    (this._config = null),
                    (this._element = null),
                    (this._dialog = null),
                    (this._backdrop = null),
                    (this._isShown = null),
                    (this._isBodyOverflowing = null),
                    (this._ignoreBackdropClick = null),
                    (this._scrollbarWidth = null);
                }),
                (a.prototype.handleUpdate = function () {
                  this._adjustDialog();
                }),
                (a.prototype._getConfig = function (n) {
                  return (
                    (n = e.extend({}, s, n)), o.typeCheckConfig(t, n, l), n
                  );
                }),
                (a.prototype._showElement = function (t) {
                  var n = this,
                    i =
                      o.supportsTransitionEnd() &&
                      e(this._element).hasClass(c.FADE);
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                    document.body.appendChild(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    (this._element.scrollTop = 0),
                    i && o.reflow(this._element),
                    e(this._element).addClass(c.SHOW),
                    this._config.focus && this._enforceFocus();
                  var r = e.Event(u.SHOWN, { relatedTarget: t }),
                    a = function () {
                      n._config.focus && n._element.focus(),
                        (n._isTransitioning = !1),
                        e(n._element).trigger(r);
                    };
                  i
                    ? e(this._dialog)
                        .one(o.TRANSITION_END, a)
                        .emulateTransitionEnd(300)
                    : a();
                }),
                (a.prototype._enforceFocus = function () {
                  var t = this;
                  e(document)
                    .off(u.FOCUSIN)
                    .on(u.FOCUSIN, function (n) {
                      document === n.target ||
                        t._element === n.target ||
                        e(t._element).has(n.target).length ||
                        t._element.focus();
                    });
                }),
                (a.prototype._setEscapeEvent = function () {
                  var t = this;
                  this._isShown && this._config.keyboard
                    ? e(this._element).on(u.KEYDOWN_DISMISS, function (e) {
                        27 === e.which && (e.preventDefault(), t.hide());
                      })
                    : this._isShown || e(this._element).off(u.KEYDOWN_DISMISS);
                }),
                (a.prototype._setResizeEvent = function () {
                  var t = this;
                  this._isShown
                    ? e(window).on(u.RESIZE, function (e) {
                        return t.handleUpdate(e);
                      })
                    : e(window).off(u.RESIZE);
                }),
                (a.prototype._hideModal = function () {
                  var t = this;
                  (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", !0),
                    (this._isTransitioning = !1),
                    this._showBackdrop(function () {
                      e(document.body).removeClass(c.OPEN),
                        t._resetAdjustments(),
                        t._resetScrollbar(),
                        e(t._element).trigger(u.HIDDEN);
                    });
                }),
                (a.prototype._removeBackdrop = function () {
                  this._backdrop &&
                    (e(this._backdrop).remove(), (this._backdrop = null));
                }),
                (a.prototype._showBackdrop = function (t) {
                  var n = this,
                    i = e(this._element).hasClass(c.FADE) ? c.FADE : "";
                  if (this._isShown && this._config.backdrop) {
                    var r = o.supportsTransitionEnd() && i;
                    if (
                      ((this._backdrop = document.createElement("div")),
                      (this._backdrop.className = c.BACKDROP),
                      i && e(this._backdrop).addClass(i),
                      e(this._backdrop).appendTo(document.body),
                      e(this._element).on(u.CLICK_DISMISS, function (e) {
                        n._ignoreBackdropClick
                          ? (n._ignoreBackdropClick = !1)
                          : e.target === e.currentTarget &&
                            ("static" === n._config.backdrop
                              ? n._element.focus()
                              : n.hide());
                      }),
                      r && o.reflow(this._backdrop),
                      e(this._backdrop).addClass(c.SHOW),
                      !t)
                    )
                      return;
                    if (!r) return void t();
                    e(this._backdrop)
                      .one(o.TRANSITION_END, t)
                      .emulateTransitionEnd(150);
                  } else if (!this._isShown && this._backdrop) {
                    e(this._backdrop).removeClass(c.SHOW);
                    var a = function () {
                      n._removeBackdrop(), t && t();
                    };
                    o.supportsTransitionEnd() &&
                    e(this._element).hasClass(c.FADE)
                      ? e(this._backdrop)
                          .one(o.TRANSITION_END, a)
                          .emulateTransitionEnd(150)
                      : a();
                  } else t && t();
                }),
                (a.prototype._adjustDialog = function () {
                  var e =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight;
                  !this._isBodyOverflowing &&
                    e &&
                    (this._element.style.paddingLeft =
                      this._scrollbarWidth + "px"),
                    this._isBodyOverflowing &&
                      !e &&
                      (this._element.style.paddingRight =
                        this._scrollbarWidth + "px");
                }),
                (a.prototype._resetAdjustments = function () {
                  (this._element.style.paddingLeft = ""),
                    (this._element.style.paddingRight = "");
                }),
                (a.prototype._checkScrollbar = function () {
                  (this._isBodyOverflowing =
                    document.body.clientWidth < window.innerWidth),
                    (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (a.prototype._setScrollbar = function () {
                  var t = this;
                  if (this._isBodyOverflowing) {
                    e(p.FIXED_CONTENT).each(function (n, i) {
                      var r = e(i)[0].style.paddingRight,
                        o = e(i).css("padding-right");
                      e(i)
                        .data("padding-right", r)
                        .css(
                          "padding-right",
                          parseFloat(o) + t._scrollbarWidth + "px"
                        );
                    }),
                      e(p.NAVBAR_TOGGLER).each(function (n, i) {
                        var r = e(i)[0].style.marginRight,
                          o = e(i).css("margin-right");
                        e(i)
                          .data("margin-right", r)
                          .css(
                            "margin-right",
                            parseFloat(o) + t._scrollbarWidth + "px"
                          );
                      });
                    var n = document.body.style.paddingRight,
                      i = e("body").css("padding-right");
                    e("body")
                      .data("padding-right", n)
                      .css(
                        "padding-right",
                        parseFloat(i) + this._scrollbarWidth + "px"
                      );
                  }
                }),
                (a.prototype._resetScrollbar = function () {
                  e(p.FIXED_CONTENT).each(function (t, n) {
                    var i = e(n).data("padding-right");
                    void 0 !== i &&
                      e(n).css("padding-right", i).removeData("padding-right");
                  }),
                    e(p.NAVBAR_TOGGLER).each(function (t, n) {
                      var i = e(n).data("margin-right");
                      void 0 !== i &&
                        e(n).css("margin-right", i).removeData("margin-right");
                    });
                  var t = e("body").data("padding-right");
                  void 0 !== t &&
                    e("body")
                      .css("padding-right", t)
                      .removeData("padding-right");
                }),
                (a.prototype._getScrollbarWidth = function () {
                  var e = document.createElement("div");
                  (e.className = c.SCROLLBAR_MEASURER),
                    document.body.appendChild(e);
                  var t = e.getBoundingClientRect().width - e.clientWidth;
                  return document.body.removeChild(e), t;
                }),
                (a._jQueryInterface = function (t, n) {
                  return this.each(function () {
                    var r = e(this).data("bs.modal"),
                      o = e.extend(
                        {},
                        a.Default,
                        e(this).data(),
                        "object" === (void 0 === t ? "undefined" : i(t)) && t
                      );
                    if (
                      (r || ((r = new a(this, o)), e(this).data("bs.modal", r)),
                      "string" == typeof t)
                    ) {
                      if (void 0 === r[t])
                        throw new Error('No method named "' + t + '"');
                      r[t](n);
                    } else o.show && r.show(n);
                  });
                }),
                r(a, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-beta";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return s;
                    },
                  },
                ]),
                a
              );
            })();
          e(document).on(u.CLICK_DATA_API, p.DATA_TOGGLE, function (t) {
            var n = this,
              i = void 0,
              r = o.getSelectorFromElement(this);
            r && (i = e(r)[0]);
            var a = e(i).data("bs.modal")
              ? "toggle"
              : e.extend({}, e(i).data(), e(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) ||
              t.preventDefault();
            var s = e(i).one(u.SHOW, function (t) {
              t.isDefaultPrevented() ||
                s.one(u.HIDDEN, function () {
                  e(n).is(":visible") && n.focus();
                });
            });
            d._jQueryInterface.call(e(i), a, this);
          }),
            (e.fn[t] = d._jQueryInterface),
            (e.fn[t].Constructor = d),
            (e.fn[t].noConflict = function () {
              return (e.fn[t] = a), d._jQueryInterface;
            });
        })(jQuery),
        (function (e) {
          var t = "scrollspy",
            a = e.fn[t],
            s = { offset: 10, method: "auto", target: "" },
            l = {
              offset: "number",
              method: "string",
              target: "(string|element)",
            },
            u = {
              ACTIVATE: "activate.bs.scrollspy",
              SCROLL: "scroll.bs.scrollspy",
              LOAD_DATA_API: "load.bs.scrollspy.data-api",
            },
            c = {
              DROPDOWN_ITEM: "dropdown-item",
              DROPDOWN_MENU: "dropdown-menu",
              ACTIVE: "active",
            },
            p = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: ".active",
              NAV_LIST_GROUP: ".nav, .list-group",
              NAV_LINKS: ".nav-link",
              LIST_ITEMS: ".list-group-item",
              DROPDOWN: ".dropdown",
              DROPDOWN_ITEMS: ".dropdown-item",
              DROPDOWN_TOGGLE: ".dropdown-toggle",
            },
            d = { OFFSET: "offset", POSITION: "position" },
            f = (function () {
              function a(t, i) {
                var r = this;
                n(this, a),
                  (this._element = t),
                  (this._scrollElement = "BODY" === t.tagName ? window : t),
                  (this._config = this._getConfig(i)),
                  (this._selector =
                    this._config.target +
                    " " +
                    p.NAV_LINKS +
                    "," +
                    this._config.target +
                    " " +
                    p.LIST_ITEMS +
                    "," +
                    this._config.target +
                    " " +
                    p.DROPDOWN_ITEMS),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  e(this._scrollElement).on(u.SCROLL, function (e) {
                    return r._process(e);
                  }),
                  this.refresh(),
                  this._process();
              }
              return (
                (a.prototype.refresh = function () {
                  var t = this,
                    n =
                      this._scrollElement !== this._scrollElement.window
                        ? d.POSITION
                        : d.OFFSET,
                    i =
                      "auto" === this._config.method ? n : this._config.method,
                    r = i === d.POSITION ? this._getScrollTop() : 0;
                  (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight()),
                    e
                      .makeArray(e(this._selector))
                      .map(function (t) {
                        var n = void 0,
                          a = o.getSelectorFromElement(t);
                        if ((a && (n = e(a)[0]), n)) {
                          var s = n.getBoundingClientRect();
                          if (s.width || s.height)
                            return [e(n)[i]().top + r, a];
                        }
                        return null;
                      })
                      .filter(function (e) {
                        return e;
                      })
                      .sort(function (e, t) {
                        return e[0] - t[0];
                      })
                      .forEach(function (e) {
                        t._offsets.push(e[0]), t._targets.push(e[1]);
                      });
                }),
                (a.prototype.dispose = function () {
                  e.removeData(this._element, "bs.scrollspy"),
                    e(this._scrollElement).off(".bs.scrollspy"),
                    (this._element = null),
                    (this._scrollElement = null),
                    (this._config = null),
                    (this._selector = null),
                    (this._offsets = null),
                    (this._targets = null),
                    (this._activeTarget = null),
                    (this._scrollHeight = null);
                }),
                (a.prototype._getConfig = function (n) {
                  if ("string" != typeof (n = e.extend({}, s, n)).target) {
                    var i = e(n.target).attr("id");
                    i || ((i = o.getUID(t)), e(n.target).attr("id", i)),
                      (n.target = "#" + i);
                  }
                  return o.typeCheckConfig(t, n, l), n;
                }),
                (a.prototype._getScrollTop = function () {
                  return this._scrollElement === window
                    ? this._scrollElement.pageYOffset
                    : this._scrollElement.scrollTop;
                }),
                (a.prototype._getScrollHeight = function () {
                  return (
                    this._scrollElement.scrollHeight ||
                    Math.max(
                      document.body.scrollHeight,
                      document.documentElement.scrollHeight
                    )
                  );
                }),
                (a.prototype._getOffsetHeight = function () {
                  return this._scrollElement === window
                    ? window.innerHeight
                    : this._scrollElement.getBoundingClientRect().height;
                }),
                (a.prototype._process = function () {
                  var e = this._getScrollTop() + this._config.offset,
                    t = this._getScrollHeight(),
                    n = this._config.offset + t - this._getOffsetHeight();
                  if ((this._scrollHeight !== t && this.refresh(), e >= n)) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i);
                  } else {
                    if (
                      this._activeTarget &&
                      e < this._offsets[0] &&
                      this._offsets[0] > 0
                    )
                      return (this._activeTarget = null), void this._clear();
                    for (var r = this._offsets.length; r--; )
                      this._activeTarget !== this._targets[r] &&
                        e >= this._offsets[r] &&
                        (void 0 === this._offsets[r + 1] ||
                          e < this._offsets[r + 1]) &&
                        this._activate(this._targets[r]);
                  }
                }),
                (a.prototype._activate = function (t) {
                  (this._activeTarget = t), this._clear();
                  var n = this._selector.split(",");
                  n = n.map(function (e) {
                    return (
                      e +
                      '[data-target="' +
                      t +
                      '"],' +
                      e +
                      '[href="' +
                      t +
                      '"]'
                    );
                  });
                  var i = e(n.join(","));
                  i.hasClass(c.DROPDOWN_ITEM)
                    ? (i
                        .closest(p.DROPDOWN)
                        .find(p.DROPDOWN_TOGGLE)
                        .addClass(c.ACTIVE),
                      i.addClass(c.ACTIVE))
                    : (i.addClass(c.ACTIVE),
                      i
                        .parents(p.NAV_LIST_GROUP)
                        .prev(p.NAV_LINKS + ", " + p.LIST_ITEMS)
                        .addClass(c.ACTIVE)),
                    e(this._scrollElement).trigger(u.ACTIVATE, {
                      relatedTarget: t,
                    });
                }),
                (a.prototype._clear = function () {
                  e(this._selector).filter(p.ACTIVE).removeClass(c.ACTIVE);
                }),
                (a._jQueryInterface = function (t) {
                  return this.each(function () {
                    var n = e(this).data("bs.scrollspy"),
                      r = "object" === (void 0 === t ? "undefined" : i(t)) && t;
                    if (
                      (n ||
                        ((n = new a(this, r)), e(this).data("bs.scrollspy", n)),
                      "string" == typeof t)
                    ) {
                      if (void 0 === n[t])
                        throw new Error('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                r(a, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-beta";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return s;
                    },
                  },
                ]),
                a
              );
            })();
          e(window).on(u.LOAD_DATA_API, function () {
            for (var t = e.makeArray(e(p.DATA_SPY)), n = t.length; n--; ) {
              var i = e(t[n]);
              f._jQueryInterface.call(i, i.data());
            }
          }),
            (e.fn[t] = f._jQueryInterface),
            (e.fn[t].Constructor = f),
            (e.fn[t].noConflict = function () {
              return (e.fn[t] = a), f._jQueryInterface;
            });
        })(jQuery),
        (function (e) {
          var t = e.fn.tab,
            i = {
              HIDE: "hide.bs.tab",
              HIDDEN: "hidden.bs.tab",
              SHOW: "show.bs.tab",
              SHOWN: "shown.bs.tab",
              CLICK_DATA_API: "click.bs.tab.data-api",
            },
            a = {
              DROPDOWN_MENU: "dropdown-menu",
              ACTIVE: "active",
              DISABLED: "disabled",
              FADE: "fade",
              SHOW: "show",
            },
            s = {
              DROPDOWN: ".dropdown",
              NAV_LIST_GROUP: ".nav, .list-group",
              ACTIVE: ".active",
              DATA_TOGGLE:
                '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
              DROPDOWN_TOGGLE: ".dropdown-toggle",
              DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active",
            },
            l = (function () {
              function t(e) {
                n(this, t), (this._element = e);
              }
              return (
                (t.prototype.show = function () {
                  var t = this;
                  if (
                    !(
                      (this._element.parentNode &&
                        this._element.parentNode.nodeType ===
                          Node.ELEMENT_NODE &&
                        e(this._element).hasClass(a.ACTIVE)) ||
                      e(this._element).hasClass(a.DISABLED)
                    )
                  ) {
                    var n = void 0,
                      r = void 0,
                      l = e(this._element).closest(s.NAV_LIST_GROUP)[0],
                      u = o.getSelectorFromElement(this._element);
                    l &&
                      ((r = e.makeArray(e(l).find(s.ACTIVE))),
                      (r = r[r.length - 1]));
                    var c = e.Event(i.HIDE, { relatedTarget: this._element }),
                      p = e.Event(i.SHOW, { relatedTarget: r });
                    if (
                      (r && e(r).trigger(c),
                      e(this._element).trigger(p),
                      !p.isDefaultPrevented() && !c.isDefaultPrevented())
                    ) {
                      u && (n = e(u)[0]), this._activate(this._element, l);
                      var d = function () {
                        var n = e.Event(i.HIDDEN, {
                            relatedTarget: t._element,
                          }),
                          o = e.Event(i.SHOWN, { relatedTarget: r });
                        e(r).trigger(n), e(t._element).trigger(o);
                      };
                      n ? this._activate(n, n.parentNode, d) : d();
                    }
                  }
                }),
                (t.prototype.dispose = function () {
                  e.removeData(this._element, "bs.tab"), (this._element = null);
                }),
                (t.prototype._activate = function (t, n, i) {
                  var r = this,
                    l = e(n).find(s.ACTIVE)[0],
                    u =
                      i &&
                      o.supportsTransitionEnd() &&
                      l &&
                      e(l).hasClass(a.FADE),
                    c = function () {
                      return r._transitionComplete(t, l, u, i);
                    };
                  l && u
                    ? e(l).one(o.TRANSITION_END, c).emulateTransitionEnd(150)
                    : c(),
                    l && e(l).removeClass(a.SHOW);
                }),
                (t.prototype._transitionComplete = function (t, n, i, r) {
                  if (n) {
                    e(n).removeClass(a.ACTIVE);
                    var l = e(n.parentNode).find(s.DROPDOWN_ACTIVE_CHILD)[0];
                    l && e(l).removeClass(a.ACTIVE),
                      n.setAttribute("aria-expanded", !1);
                  }
                  if (
                    (e(t).addClass(a.ACTIVE),
                    t.setAttribute("aria-expanded", !0),
                    i
                      ? (o.reflow(t), e(t).addClass(a.SHOW))
                      : e(t).removeClass(a.FADE),
                    t.parentNode && e(t.parentNode).hasClass(a.DROPDOWN_MENU))
                  ) {
                    var u = e(t).closest(s.DROPDOWN)[0];
                    u && e(u).find(s.DROPDOWN_TOGGLE).addClass(a.ACTIVE),
                      t.setAttribute("aria-expanded", !0);
                  }
                  r && r();
                }),
                (t._jQueryInterface = function (n) {
                  return this.each(function () {
                    var i = e(this),
                      r = i.data("bs.tab");
                    if (
                      (r || ((r = new t(this)), i.data("bs.tab", r)),
                      "string" == typeof n)
                    ) {
                      if (void 0 === r[n])
                        throw new Error('No method named "' + n + '"');
                      r[n]();
                    }
                  });
                }),
                r(t, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-beta";
                    },
                  },
                ]),
                t
              );
            })();
          e(document).on(i.CLICK_DATA_API, s.DATA_TOGGLE, function (t) {
            t.preventDefault(), l._jQueryInterface.call(e(this), "show");
          }),
            (e.fn.tab = l._jQueryInterface),
            (e.fn.tab.Constructor = l),
            (e.fn.tab.noConflict = function () {
              return (e.fn.tab = t), l._jQueryInterface;
            });
        })(jQuery),
        (function (e) {
          if ("undefined" == typeof Popper)
            throw new Error(
              "Bootstrap tooltips require Popper.js (https://popper.js.org)"
            );
          var t = "tooltip",
            a = ".bs.tooltip",
            s = e.fn[t],
            l = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            u = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "(number|string)",
              container: "(string|element|boolean)",
              fallbackPlacement: "(string|array)",
            },
            c = {
              AUTO: "auto",
              TOP: "top",
              RIGHT: "right",
              BOTTOM: "bottom",
              LEFT: "left",
            },
            p = {
              animation: !0,
              template:
                '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: 0,
              container: !1,
              fallbackPlacement: "flip",
            },
            d = { SHOW: "show", OUT: "out" },
            f = {
              HIDE: "hide" + a,
              HIDDEN: "hidden" + a,
              SHOW: "show" + a,
              SHOWN: "shown" + a,
              INSERTED: "inserted" + a,
              CLICK: "click" + a,
              FOCUSIN: "focusin" + a,
              FOCUSOUT: "focusout" + a,
              MOUSEENTER: "mouseenter" + a,
              MOUSELEAVE: "mouseleave" + a,
            },
            h = { FADE: "fade", SHOW: "show" },
            m = {
              TOOLTIP: ".tooltip",
              TOOLTIP_INNER: ".tooltip-inner",
              ARROW: ".arrow",
            },
            g = {
              HOVER: "hover",
              FOCUS: "focus",
              CLICK: "click",
              MANUAL: "manual",
            },
            v = (function () {
              function s(e, t) {
                n(this, s),
                  (this._isEnabled = !0),
                  (this._timeout = 0),
                  (this._hoverState = ""),
                  (this._activeTrigger = {}),
                  (this._popper = null),
                  (this.element = e),
                  (this.config = this._getConfig(t)),
                  (this.tip = null),
                  this._setListeners();
              }
              return (
                (s.prototype.enable = function () {
                  this._isEnabled = !0;
                }),
                (s.prototype.disable = function () {
                  this._isEnabled = !1;
                }),
                (s.prototype.toggleEnabled = function () {
                  this._isEnabled = !this._isEnabled;
                }),
                (s.prototype.toggle = function (t) {
                  if (t) {
                    var n = this.constructor.DATA_KEY,
                      i = e(t.currentTarget).data(n);
                    i ||
                      ((i = new this.constructor(
                        t.currentTarget,
                        this._getDelegateConfig()
                      )),
                      e(t.currentTarget).data(n, i)),
                      (i._activeTrigger.click = !i._activeTrigger.click),
                      i._isWithActiveTrigger()
                        ? i._enter(null, i)
                        : i._leave(null, i);
                  } else {
                    if (e(this.getTipElement()).hasClass(h.SHOW))
                      return void this._leave(null, this);
                    this._enter(null, this);
                  }
                }),
                (s.prototype.dispose = function () {
                  clearTimeout(this._timeout),
                    e.removeData(this.element, this.constructor.DATA_KEY),
                    e(this.element).off(this.constructor.EVENT_KEY),
                    e(this.element).closest(".modal").off("hide.bs.modal"),
                    this.tip && e(this.tip).remove(),
                    (this._isEnabled = null),
                    (this._timeout = null),
                    (this._hoverState = null),
                    (this._activeTrigger = null),
                    null !== this._popper && this._popper.destroy(),
                    (this._popper = null),
                    (this.element = null),
                    (this.config = null),
                    (this.tip = null);
                }),
                (s.prototype.show = function () {
                  var t = this;
                  if ("none" === e(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                  var n = e.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                    e(this.element).trigger(n);
                    var i = e.contains(
                      this.element.ownerDocument.documentElement,
                      this.element
                    );
                    if (n.isDefaultPrevented() || !i) return;
                    var r = this.getTipElement(),
                      a = o.getUID(this.constructor.NAME);
                    r.setAttribute("id", a),
                      this.element.setAttribute("aria-describedby", a),
                      this.setContent(),
                      this.config.animation && e(r).addClass(h.FADE);
                    var l =
                        "function" == typeof this.config.placement
                          ? this.config.placement.call(this, r, this.element)
                          : this.config.placement,
                      u = this._getAttachment(l);
                    this.addAttachmentClass(u);
                    var c =
                      !1 === this.config.container
                        ? document.body
                        : e(this.config.container);
                    e(r).data(this.constructor.DATA_KEY, this),
                      e.contains(
                        this.element.ownerDocument.documentElement,
                        this.tip
                      ) || e(r).appendTo(c),
                      e(this.element).trigger(this.constructor.Event.INSERTED),
                      (this._popper = new Popper(this.element, r, {
                        placement: u,
                        modifiers: {
                          offset: { offset: this.config.offset },
                          flip: { behavior: this.config.fallbackPlacement },
                          arrow: { element: m.ARROW },
                        },
                        onCreate: function (e) {
                          e.originalPlacement !== e.placement &&
                            t._handlePopperPlacementChange(e);
                        },
                        onUpdate: function (e) {
                          t._handlePopperPlacementChange(e);
                        },
                      })),
                      e(r).addClass(h.SHOW),
                      "ontouchstart" in document.documentElement &&
                        e("body").children().on("mouseover", null, e.noop);
                    var p = function () {
                      t.config.animation && t._fixTransition();
                      var n = t._hoverState;
                      (t._hoverState = null),
                        e(t.element).trigger(t.constructor.Event.SHOWN),
                        n === d.OUT && t._leave(null, t);
                    };
                    o.supportsTransitionEnd() && e(this.tip).hasClass(h.FADE)
                      ? e(this.tip)
                          .one(o.TRANSITION_END, p)
                          .emulateTransitionEnd(s._TRANSITION_DURATION)
                      : p();
                  }
                }),
                (s.prototype.hide = function (t) {
                  var n = this,
                    i = this.getTipElement(),
                    r = e.Event(this.constructor.Event.HIDE),
                    a = function () {
                      n._hoverState !== d.SHOW &&
                        i.parentNode &&
                        i.parentNode.removeChild(i),
                        n._cleanTipClass(),
                        n.element.removeAttribute("aria-describedby"),
                        e(n.element).trigger(n.constructor.Event.HIDDEN),
                        null !== n._popper && n._popper.destroy(),
                        t && t();
                    };
                  e(this.element).trigger(r),
                    r.isDefaultPrevented() ||
                      (e(i).removeClass(h.SHOW),
                      "ontouchstart" in document.documentElement &&
                        e("body").children().off("mouseover", null, e.noop),
                      (this._activeTrigger[g.CLICK] = !1),
                      (this._activeTrigger[g.FOCUS] = !1),
                      (this._activeTrigger[g.HOVER] = !1),
                      o.supportsTransitionEnd() && e(this.tip).hasClass(h.FADE)
                        ? e(i)
                            .one(o.TRANSITION_END, a)
                            .emulateTransitionEnd(150)
                        : a(),
                      (this._hoverState = ""));
                }),
                (s.prototype.update = function () {
                  null !== this._popper && this._popper.scheduleUpdate();
                }),
                (s.prototype.isWithContent = function () {
                  return Boolean(this.getTitle());
                }),
                (s.prototype.addAttachmentClass = function (t) {
                  e(this.getTipElement()).addClass("bs-tooltip-" + t);
                }),
                (s.prototype.getTipElement = function () {
                  return (this.tip = this.tip || e(this.config.template)[0]);
                }),
                (s.prototype.setContent = function () {
                  var t = e(this.getTipElement());
                  this.setElementContent(
                    t.find(m.TOOLTIP_INNER),
                    this.getTitle()
                  ),
                    t.removeClass(h.FADE + " " + h.SHOW);
                }),
                (s.prototype.setElementContent = function (t, n) {
                  var r = this.config.html;
                  "object" === (void 0 === n ? "undefined" : i(n)) &&
                  (n.nodeType || n.jquery)
                    ? r
                      ? e(n).parent().is(t) || t.empty().append(n)
                      : t.text(e(n).text())
                    : t[r ? "html" : "text"](n);
                }),
                (s.prototype.getTitle = function () {
                  var e = this.element.getAttribute("data-original-title");
                  return (
                    e ||
                      (e =
                        "function" == typeof this.config.title
                          ? this.config.title.call(this.element)
                          : this.config.title),
                    e
                  );
                }),
                (s.prototype._getAttachment = function (e) {
                  return c[e.toUpperCase()];
                }),
                (s.prototype._setListeners = function () {
                  var t = this;
                  this.config.trigger.split(" ").forEach(function (n) {
                    if ("click" === n)
                      e(t.element).on(
                        t.constructor.Event.CLICK,
                        t.config.selector,
                        function (e) {
                          return t.toggle(e);
                        }
                      );
                    else if (n !== g.MANUAL) {
                      var i =
                          n === g.HOVER
                            ? t.constructor.Event.MOUSEENTER
                            : t.constructor.Event.FOCUSIN,
                        r =
                          n === g.HOVER
                            ? t.constructor.Event.MOUSELEAVE
                            : t.constructor.Event.FOCUSOUT;
                      e(t.element)
                        .on(i, t.config.selector, function (e) {
                          return t._enter(e);
                        })
                        .on(r, t.config.selector, function (e) {
                          return t._leave(e);
                        });
                    }
                    e(t.element)
                      .closest(".modal")
                      .on("hide.bs.modal", function () {
                        return t.hide();
                      });
                  }),
                    this.config.selector
                      ? (this.config = e.extend({}, this.config, {
                          trigger: "manual",
                          selector: "",
                        }))
                      : this._fixTitle();
                }),
                (s.prototype._fixTitle = function () {
                  var e = i(this.element.getAttribute("data-original-title"));
                  (this.element.getAttribute("title") || "string" !== e) &&
                    (this.element.setAttribute(
                      "data-original-title",
                      this.element.getAttribute("title") || ""
                    ),
                    this.element.setAttribute("title", ""));
                }),
                (s.prototype._enter = function (t, n) {
                  var i = this.constructor.DATA_KEY;
                  (n = n || e(t.currentTarget).data(i)) ||
                    ((n = new this.constructor(
                      t.currentTarget,
                      this._getDelegateConfig()
                    )),
                    e(t.currentTarget).data(i, n)),
                    t &&
                      (n._activeTrigger[
                        "focusin" === t.type ? g.FOCUS : g.HOVER
                      ] = !0),
                    e(n.getTipElement()).hasClass(h.SHOW) ||
                    n._hoverState === d.SHOW
                      ? (n._hoverState = d.SHOW)
                      : (clearTimeout(n._timeout),
                        (n._hoverState = d.SHOW),
                        n.config.delay && n.config.delay.show
                          ? (n._timeout = setTimeout(function () {
                              n._hoverState === d.SHOW && n.show();
                            }, n.config.delay.show))
                          : n.show());
                }),
                (s.prototype._leave = function (t, n) {
                  var i = this.constructor.DATA_KEY;
                  (n = n || e(t.currentTarget).data(i)) ||
                    ((n = new this.constructor(
                      t.currentTarget,
                      this._getDelegateConfig()
                    )),
                    e(t.currentTarget).data(i, n)),
                    t &&
                      (n._activeTrigger[
                        "focusout" === t.type ? g.FOCUS : g.HOVER
                      ] = !1),
                    n._isWithActiveTrigger() ||
                      (clearTimeout(n._timeout),
                      (n._hoverState = d.OUT),
                      n.config.delay && n.config.delay.hide
                        ? (n._timeout = setTimeout(function () {
                            n._hoverState === d.OUT && n.hide();
                          }, n.config.delay.hide))
                        : n.hide());
                }),
                (s.prototype._isWithActiveTrigger = function () {
                  for (var e in this._activeTrigger)
                    if (this._activeTrigger[e]) return !0;
                  return !1;
                }),
                (s.prototype._getConfig = function (n) {
                  return (
                    (n = e.extend(
                      {},
                      this.constructor.Default,
                      e(this.element).data(),
                      n
                    )).delay &&
                      "number" == typeof n.delay &&
                      (n.delay = { show: n.delay, hide: n.delay }),
                    n.title &&
                      "number" == typeof n.title &&
                      (n.title = n.title.toString()),
                    n.content &&
                      "number" == typeof n.content &&
                      (n.content = n.content.toString()),
                    o.typeCheckConfig(t, n, this.constructor.DefaultType),
                    n
                  );
                }),
                (s.prototype._getDelegateConfig = function () {
                  var e = {};
                  if (this.config)
                    for (var t in this.config)
                      this.constructor.Default[t] !== this.config[t] &&
                        (e[t] = this.config[t]);
                  return e;
                }),
                (s.prototype._cleanTipClass = function () {
                  var t = e(this.getTipElement()),
                    n = t.attr("class").match(l);
                  null !== n && n.length > 0 && t.removeClass(n.join(""));
                }),
                (s.prototype._handlePopperPlacementChange = function (e) {
                  this._cleanTipClass(),
                    this.addAttachmentClass(this._getAttachment(e.placement));
                }),
                (s.prototype._fixTransition = function () {
                  var t = this.getTipElement(),
                    n = this.config.animation;
                  null === t.getAttribute("x-placement") &&
                    (e(t).removeClass(h.FADE),
                    (this.config.animation = !1),
                    this.hide(),
                    this.show(),
                    (this.config.animation = n));
                }),
                (s._jQueryInterface = function (t) {
                  return this.each(function () {
                    var n = e(this).data("bs.tooltip"),
                      r = "object" === (void 0 === t ? "undefined" : i(t)) && t;
                    if (
                      (n || !/dispose|hide/.test(t)) &&
                      (n ||
                        ((n = new s(this, r)), e(this).data("bs.tooltip", n)),
                      "string" == typeof t)
                    ) {
                      if (void 0 === n[t])
                        throw new Error('No method named "' + t + '"');
                      n[t]();
                    }
                  });
                }),
                r(s, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return "4.0.0-beta";
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return p;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return t;
                    },
                  },
                  {
                    key: "DATA_KEY",
                    get: function () {
                      return "bs.tooltip";
                    },
                  },
                  {
                    key: "Event",
                    get: function () {
                      return f;
                    },
                  },
                  {
                    key: "EVENT_KEY",
                    get: function () {
                      return a;
                    },
                  },
                  {
                    key: "DefaultType",
                    get: function () {
                      return u;
                    },
                  },
                ]),
                s
              );
            })();
          return (
            (e.fn[t] = v._jQueryInterface),
            (e.fn[t].Constructor = v),
            (e.fn[t].noConflict = function () {
              return (e.fn[t] = s), v._jQueryInterface;
            }),
            v
          );
        })(jQuery));
    !(function (o) {
      var s = "popover",
        l = ".bs.popover",
        u = o.fn[s],
        c = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        p = o.extend({}, a.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        }),
        d = o.extend({}, a.DefaultType, {
          content: "(string|element|function)",
        }),
        f = { FADE: "fade", SHOW: "show" },
        h = { TITLE: ".popover-header", CONTENT: ".popover-body" },
        m = {
          HIDE: "hide" + l,
          HIDDEN: "hidden" + l,
          SHOW: "show" + l,
          SHOWN: "shown" + l,
          INSERTED: "inserted" + l,
          CLICK: "click" + l,
          FOCUSIN: "focusin" + l,
          FOCUSOUT: "focusout" + l,
          MOUSEENTER: "mouseenter" + l,
          MOUSELEAVE: "mouseleave" + l,
        },
        g = (function (a) {
          function u() {
            return n(this, u), e(this, a.apply(this, arguments));
          }
          return (
            t(u, a),
            (u.prototype.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (u.prototype.addAttachmentClass = function (e) {
              o(this.getTipElement()).addClass("bs-popover-" + e);
            }),
            (u.prototype.getTipElement = function () {
              return (this.tip = this.tip || o(this.config.template)[0]);
            }),
            (u.prototype.setContent = function () {
              var e = o(this.getTipElement());
              this.setElementContent(e.find(h.TITLE), this.getTitle()),
                this.setElementContent(e.find(h.CONTENT), this._getContent()),
                e.removeClass(f.FADE + " " + f.SHOW);
            }),
            (u.prototype._getContent = function () {
              return (
                this.element.getAttribute("data-content") ||
                ("function" == typeof this.config.content
                  ? this.config.content.call(this.element)
                  : this.config.content)
              );
            }),
            (u.prototype._cleanTipClass = function () {
              var e = o(this.getTipElement()),
                t = e.attr("class").match(c);
              null !== t && t.length > 0 && e.removeClass(t.join(""));
            }),
            (u._jQueryInterface = function (e) {
              return this.each(function () {
                var t = o(this).data("bs.popover"),
                  n =
                    "object" === (void 0 === e ? "undefined" : i(e)) ? e : null;
                if (
                  (t || !/destroy|hide/.test(e)) &&
                  (t || ((t = new u(this, n)), o(this).data("bs.popover", t)),
                  "string" == typeof e)
                ) {
                  if (void 0 === t[e])
                    throw new Error('No method named "' + e + '"');
                  t[e]();
                }
              });
            }),
            r(u, null, [
              {
                key: "VERSION",
                get: function () {
                  return "4.0.0-beta";
                },
              },
              {
                key: "Default",
                get: function () {
                  return p;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return s;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return "bs.popover";
                },
              },
              {
                key: "Event",
                get: function () {
                  return m;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return l;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return d;
                },
              },
            ]),
            u
          );
        })(a);
      (o.fn[s] = g._jQueryInterface),
        (o.fn[s].Constructor = g),
        (o.fn[s].noConflict = function () {
          return (o.fn[s] = u), g._jQueryInterface;
        });
    })(jQuery);
  })(),
  define(
    "bootstrap",
    ["jquery"],
    (function (e) {
      return function () {
        return e.$.fn.popover;
      };
    })(this)
  ),
  define(
    "views/snippet",
    [
      "jquery",
      "underscore",
      "backbone",
      "text!templates/popover/popover-main.html",
      "text!templates/popover/popover-input.html",
      "text!templates/popover/popover-select.html",
      "text!templates/popover/popover-textarea.html",
      "text!templates/popover/popover-textarea-split.html",
      "text!templates/popover/popover-checkbox.html",
      "templates/snippet/snippet-templates",
      "bootstrap",
    ],
    function (e, t, n, i, r, o, a, s, l, u) {
      return n.View.extend({
        tagName: "div",
        className: "component",
        initialize: function () {
          (this.template = t.template(u[this.model.idFriendlyTitle()])),
            (this.popoverTemplates = {
              input: t.template(r),
              select: t.template(o),
              textarea: t.template(a),
              "textarea-split": t.template(s),
              checkbox: t.template(l),
            });
        },
        render: function (e) {
          var n = this,
            r = t.template(i)({
              title: n.model.get("title"),
              items: n.model.get("fields"),
              popoverTemplates: n.popoverTemplates,
            });
          return e
            ? this.$el
                .html(n.template(n.model.getValues()))
                .attr({
                  "data-content": r,
                  "data-title": n.model.get("title"),
                  "data-trigger": "manual",
                  "data-html": !0,
                })
            : this.$el.html(n.template(n.model.getValues()));
        },
      });
    }
  ),
  define("text!templates/app/temp.html", [], function () {
    return "<form class='form-horizontal col-md-5' id='temp'>\n  <%= text %>\n</form>\n";
  }),
  define(
    "helper/pubsub",
    ["jquery", "underscore", "backbone"],
    function (e, t, n) {
      return t.extend({}, n.Events);
    }
  ),
  define(
    "views/temp-snippet",
    [
      "jquery",
      "views/snippet",
      "text!templates/app/temp.html",
      "helper/pubsub",
    ],
    function (e, t, n, i) {
      return t.extend({
        initialize: function () {
          i.on("newTempPostRender", this.postRender, this),
            this.constructor.__super__.initialize.call(this),
            (this.tempTemplate = _.template(n));
        },
        className: "temp",
        render: function () {
          return this.$el.html(
            this.tempTemplate({
              text: this.constructor.__super__.render.call(this).html(),
            })
          );
        },
        postRender: function (e) {
          (this.tempForm = this.$el.find("form")[0]),
            (this.halfHeight = Math.floor(this.tempForm.clientHeight / 2)),
            (this.halfWidth = Math.floor(this.tempForm.clientWidth / 2)),
            this.centerOnEvent(e);
        },
        events: { mousemove: "mouseMoveHandler", mouseup: "mouseUpHandler" },
        centerOnEvent: function (e) {
          var t = e.pageX,
            n = e.pageY;
          (this.tempForm.style.top = n - this.halfHeight + "px"),
            (this.tempForm.style.left = t - this.halfWidth + "px"),
            i.trigger("tempMove", e);
        },
        mouseMoveHandler: function (e) {
          e.preventDefault(), this.centerOnEvent(e);
        },
        mouseUpHandler: function (e) {
          e.preventDefault(),
            i.trigger("tempDrop", e, this.model),
            this.remove();
        },
      });
    }
  ),
  define(
    "views/tab-snippet",
    [
      "jquery",
      "underscore",
      "backbone",
      "models/snippet",
      "views/snippet",
      "views/temp-snippet",
      "helper/pubsub",
    ],
    function (e, t, n, i, r, o, a) {
      return r.extend({
        events: { mousedown: "mouseDownHandler" },
        mouseDownHandler: function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            e(".popover").hide(),
            e("body").append(
              new o({
                model: new i(e.extend(!0, {}, this.model.attributes)),
              }).render()
            ),
            a.trigger("newTempPostRender", t);
        },
      });
    }
  ),
  define(
    "collections/snippets",
    ["jquery", "underscore", "backbone", "models/snippet", "views/tab-snippet"],
    function (e, t, n, i, r) {
      return n.Collection.extend({
        model: i,
        renderAll: function () {
          return this.map(function (e) {
            return new r({ model: e }).render();
          });
        },
      });
    }
  ),
  define(
    "views/my-form-snippet",
    [
      "jquery",
      "underscore",
      "backbone",
      "views/snippet",
      "views/temp-snippet",
      "helper/pubsub",
    ],
    function (e, t, n, i, r, o) {
      return i.extend({
        events: {
          click: "preventPropagation",
          mousedown: "mouseDownHandler",
          mouseup: "mouseUpHandler",
        },
        mouseDownHandler: function (t) {
          t.stopPropagation(), t.preventDefault();
          var n = this;
          e(".popover").remove(),
            this.$el.popover({ placement: "left" }).popover("show"),
            e(".popover #save").on("click", this.saveHandler(n)),
            e(".popover #cancel").on("click", this.cancelHandler(n)),
            "Form Name" !== this.model.get("title") &&
              e("body").on("mousemove", function (e) {
                (Math.abs(t.pageX - e.pageX) > 10 ||
                  Math.abs(t.pageY - e.pageY) > 10) &&
                  (n.$el.popover("dispose"),
                  o.trigger("mySnippetDrag", t, n.model),
                  n.mouseUpHandler());
              });
        },
        preventPropagation: function (e) {
          e.stopPropagation(), e.preventDefault();
        },
        mouseUpHandler: function (t) {
          e("body").off("mousemove");
        },
        saveHandler: function (n) {
          return function (i) {
            i.preventDefault();
            var r = e(".popover .field");
            t.each(r, function (i) {
              var r = e(i),
                o = r.attr("data-type"),
                a = r.attr("id");
              switch (o) {
                case "checkbox":
                  n.model.setField(a, r.is(":checked"));
                  break;
                case "input":
                case "textarea":
                  n.model.setField(a, r.val());
                  break;
                case "textarea-split":
                  n.model.setField(
                    a,
                    t
                      .chain(r.val().split("\n"))
                      .map(function (t) {
                        return e.trim(t);
                      })
                      .filter(function (e) {
                        return e.length > 0;
                      })
                      .value()
                  );
                  break;
                case "select":
                  var s = t.map(r.find("option"), function (t) {
                    return {
                      value: t.value,
                      selected: t.selected,
                      label: e(t).text(),
                    };
                  });
                  n.model.setField(a, s);
              }
            }),
              n.model.trigger("change"),
              e(".popover").remove();
          };
        },
        cancelHandler: function (t) {
          return function (n) {
            n.preventDefault(),
              e(".popover").remove(),
              t.model.trigger("change");
          };
        },
      });
    }
  ),
  define(
    "collections/my-form-snippets",
    [
      "jquery",
      "underscore",
      "backbone",
      "models/snippet",
      "collections/snippets",
      "views/my-form-snippet",
    ],
    function (e, t, n, i, r, o) {
      return r.extend({
        model: i,
        renderAll: function () {
          return this.map(function (e) {
            return new o({ model: e }).render(!0);
          });
        },
        renderAllClean: function () {
          return this.map(function (e) {
            return new o({ model: e }).render(!1);
          });
        },
      });
    }
  ),
  define("text!templates/app/tab-nav.html", [], function () {
    return '<li class="nav-item"><a class="nav-link p-1" href="#<%= id %>" data-toggle="tab"><%= title %></a></li>\n';
  }),
  define(
    "views/tab",
    ["jquery", "underscore", "backbone", "text!templates/app/tab-nav.html"],
    function (e, t, n, i) {
      return n.View.extend({
        tagName: "div",
        className: "tab-pane",
        initialize: function () {
          (this.id = this.options.title.toLowerCase().replace(/\W/g, "")),
            (this.tabNavTemplate = t.template(i)),
            this.render();
        },
        render: function () {
          var n = this;
          void 0 !== n.collection
            ? t.each(this.collection.renderAll(), function (e) {
                n.$el.append(e);
              })
            : n.options.content && n.$el.append(n.options.content),
            e("#formtabs").append(
              this.tabNavTemplate({ title: this.options.title, id: this.id })
            ),
            this.$el.attr("id", this.id),
            this.$el.appendTo(".tab-content"),
            this.delegateEvents();
        },
      });
    }
  ),
  define("text!templates/app/renderform.html", [], function () {
    return "<form>\n  <%= text %>\n</form>\n";
  }),
  define("Guid", function () {}),
  define(
    "views/my-form",
    [
      "jquery",
      "underscore",
      "backbone",
      "views/temp-snippet",
      "helper/pubsub",
      "text!templates/app/renderform.html",
      "Guid",
    ],
    function (e, t, n, i, r, o) {
      return n.View.extend({
        tagName: "fieldset",
        initialize: function () {
          this.collection.on("add", this.render, this),
            this.collection.on("remove", this.render, this),
            this.collection.on("change", this.render, this),
            r.on("mySnippetDrag", this.handleSnippetDrag, this),
            r.on("tempMove", this.handleTempMove, this),
            r.on("tempDrop", this.handleTempDrop, this),
            (this.$build = e("#build")),
            (this.build = document.getElementById("build")),
            (this.buildBCR = this.build.getBoundingClientRect()),
            (this.renderForm = t.template(o)),
            this.render();
        },
        render: function () {
          this.$el.empty();
          var n = this;
          t.each(this.collection.renderAll(), function (e) {
            n.$el.append(e);
          }),
            e("#render").val(
              n.renderForm({
                text: t
                  .map(this.collection.renderAllClean(), function (e) {
                    return e.html();
                  })
                  .join("\n"),
              })
            ),
            this.$el.appendTo("#build form"),
            this.delegateEvents();
        },
        getBottomAbove: function (n) {
          var i = e(this.$el.find(".component")),
            r = t.find(i, function (t) {
              return e(t).position().top + e(t).height() > n - 160;
            });
          return r || i[0];
        },
        handleSnippetDrag: function (t, n) {
          e("body").append(new i({ model: n }).render()),
            this.collection.remove(n),
            r.trigger("newTempPostRender", t);
        },
        handleTempMove: function (t) {
          e(".target").removeClass("target"),
            t.pageX >= this.buildBCR.left &&
            t.pageX < this.$build.width() + this.buildBCR.left &&
            t.pageY >= this.buildBCR.top &&
            t.pageY < this.$build.height() + this.buildBCR.top
              ? e(this.getBottomAbove(t.pageY)).addClass("target")
              : e(".target").removeClass("target");
        },
        handleTempDrop: function (t, n, i) {
          if (
            t.pageX >= this.buildBCR.left &&
            t.pageX < this.$build.width() + this.buildBCR.left &&
            t.pageY >= this.buildBCR.top &&
            t.pageY < this.$build.height() + this.buildBCR.top
          ) {
            var i = e(".target").index();
            e(".target").removeClass("target"),
              this.collection.add(n, { at: i + 1 });
          } else e(".target").removeClass("target");
        },
      });
    }
  ),
  define("text!data/input.json", [], function () {
    return '[\n  {\n    "title": "Text Input",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "textinput"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Text Input"\n      },\n      "placeholder": {\n        "label": "Placeholder",\n        "type": "input",\n        "value": "placeholder"\n      },\n      "helptext": {\n        "label": "Help Text",\n        "type": "input",\n        "value": "help"\n      },\n      "required": {\n        "label": "Required",\n        "type": "checkbox",\n        "value": false\n      },\n      "inputsize": {\n        "label": "Input Size",\n        "type": "select",\n        "value": [\n          {\n            "value": "col-md-1",\n            "label": "Mini",\n            "selected": false\n          },\n          {\n            "value": "col-md-2",\n            "label": "Small",\n            "selected": false\n          },\n          {\n            "value": "col-md-4",\n            "label": "Medium",\n            "selected": true\n          },\n          {\n            "value": "col-md-5",\n            "label": "Large",\n            "selected": false\n          },\n          {\n            "value": "col-md-6",\n            "label": "Xlarge",\n            "selected": false\n          },\n          {\n            "value": "col-md-8",\n            "label": "Xxlarge",\n            "selected": false\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Date Input",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "textinput"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Date Input"\n      },\n      "placeholder": {\n        "label": "Placeholder",\n        "type": "input",\n        "value": "placeholder"\n      },\n      "helptext": {\n        "label": "Help Text",\n        "type": "input",\n        "value": "help"\n      },\n      "required": {\n        "label": "Required",\n        "type": "checkbox",\n        "value": false\n      },\n      "inputsize": {\n        "label": "Input Size",\n        "type": "select",\n        "value": [\n          {\n            "value": "col-md-1",\n            "label": "Mini",\n            "selected": false\n          },\n          {\n            "value": "col-md-2",\n            "label": "Small",\n            "selected": false\n          },\n          {\n            "value": "col-md-4",\n            "label": "Medium",\n            "selected": true\n          },\n          {\n            "value": "col-md-5",\n            "label": "Large",\n            "selected": false\n          },\n          {\n            "value": "col-md-6",\n            "label": "Xlarge",\n            "selected": false\n          },\n          {\n            "value": "col-md-8",\n            "label": "Xxlarge",\n            "selected": false\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Password Input",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "passwordinput"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Password Input"\n      },\n      "placeholder": {\n        "label": "Placeholder",\n        "type": "input",\n        "value": "placeholder"\n      },\n      "helptext": {\n        "label": "Help Text",\n        "type": "input",\n        "value": "help"\n      },\n      "required": {\n        "label": "Required",\n        "type": "checkbox",\n        "value": false\n      },\n      "inputsize": {\n        "label": "Input Size",\n        "type": "select",\n        "value": [\n          {\n            "value": "col-md-1",\n            "label": "Mini",\n            "selected": false\n          },\n          {\n            "value": "col-md-2",\n            "label": "Small",\n            "selected": false\n          },\n          {\n            "value": "col-md-4",\n            "label": "Medium",\n            "selected": true\n          },\n          {\n            "value": "col-md-5",\n            "label": "Large",\n            "selected": false\n          },\n          {\n            "value": "col-md-6",\n            "label": "Xlarge",\n            "selected": false\n          },\n          {\n            "value": "col-md-8",\n            "label": "Xxlarge",\n            "selected": false\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Search Input",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "searchinput"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Search Input"\n      },\n      "placeholder": {\n        "label": "Placeholder",\n        "type": "input",\n        "value": "placeholder"\n      },\n      "helptext": {\n        "label": "Help Text",\n        "type": "input",\n        "value": "help"\n      },\n      "required": {\n        "label": "Required",\n        "type": "checkbox",\n        "value": false\n      },\n      "inputsize": {\n        "label": "Input Size",\n        "type": "select",\n        "value": [\n          {\n            "value": "col-md-1",\n            "label": "Mini",\n            "selected": false\n          },\n          {\n            "value": "col-md-2",\n            "label": "Small",\n            "selected": false\n          },\n          {\n            "value": "col-md-4",\n            "label": "Medium",\n            "selected": true\n          },\n          {\n            "value": "col-md-5",\n            "label": "Large",\n            "selected": false\n          },\n          {\n            "value": "col-md-6",\n            "label": "Xlarge",\n            "selected": false\n          },\n          {\n            "value": "col-md-8",\n            "label": "Xxlarge",\n            "selected": false\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Prepended Text",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "prependedtext"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Prepended Text"\n      },\n      "prepend": {\n        "label": "Prepend",\n        "type": "input",\n        "value": "prepend"\n      },\n      "placeholder": {\n        "label": "Placeholder",\n        "type": "input",\n        "value": "placeholder"\n      },\n      "helptext": {\n        "label": "Help Text",\n        "type": "input",\n        "value": "help"\n      },\n      "required": {\n        "label": "Required",\n        "type": "checkbox",\n        "value": false\n      },\n      "inputsize": {\n        "label": "Input Size",\n        "type": "select",\n        "value": [\n          {\n            "value": "col-md-1",\n            "label": "Mini",\n            "selected": false\n          },\n          {\n            "value": "col-md-2",\n            "label": "Small",\n            "selected": false\n          },\n          {\n            "value": "col-md-4",\n            "label": "Medium",\n            "selected": true\n          },\n          {\n            "value": "col-md-5",\n            "label": "Large",\n            "selected": false\n          },\n          {\n            "value": "col-md-6",\n            "label": "Xlarge",\n            "selected": false\n          },\n          {\n            "value": "col-md-8",\n            "label": "Xxlarge",\n            "selected": false\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Appended Text",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "appendedtext"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Appended Text"\n      },\n      "append": {\n        "label": "Append",\n        "type": "input",\n        "value": "append"\n      },\n      "placeholder": {\n        "label": "Placeholder",\n        "type": "input",\n        "value": "placeholder"\n      },\n      "helptext": {\n        "label": "Help Text",\n        "type": "input",\n        "value": "help"\n      },\n      "required": {\n        "label": "Required",\n        "type": "checkbox",\n        "value": false\n      },\n      "inputsize": {\n        "label": "Input Size",\n        "type": "select",\n        "value": [\n          {\n            "value": "col-md-1",\n            "label": "Mini",\n            "selected": false\n          },\n          {\n            "value": "col-md-2",\n            "label": "Small",\n            "selected": false\n          },\n          {\n            "value": "col-md-4",\n            "label": "Medium",\n            "selected": true\n          },\n          {\n            "value": "col-md-5",\n            "label": "Large",\n            "selected": false\n          },\n          {\n            "value": "col-md-6",\n            "label": "Xlarge",\n            "selected": false\n          },\n          {\n            "value": "col-md-8",\n            "label": "Xxlarge",\n            "selected": false\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Prepended Checkbox",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "prependedcheckbox"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Prepended Checkbox"\n      },\n      "placeholder": {\n        "label": "Placeholder",\n        "type": "input",\n        "value": "placeholder"\n      },\n      "helptext": {\n        "label": "Help Text",\n        "type": "input",\n        "value": "help"\n      },\n      "checked": {\n        "label": "Checked",\n        "type": "checkbox",\n        "value": false\n      },\n      "required": {\n        "label": "Required",\n        "type": "checkbox",\n        "value": false\n      },\n      "inputsize": {\n        "label": "Input Size",\n        "type": "select",\n        "value": [\n          {\n            "value": "col-md-1",\n            "label": "Mini",\n            "selected": false\n          },\n          {\n            "value": "col-md-2",\n            "label": "Small",\n            "selected": false\n          },\n          {\n            "value": "col-md-4",\n            "label": "Medium",\n            "selected": true\n          },\n          {\n            "value": "col-md-5",\n            "label": "Large",\n            "selected": false\n          },\n          {\n            "value": "col-md-6",\n            "label": "Xlarge",\n            "selected": false\n          },\n          {\n            "value": "col-md-8",\n            "label": "Xxlarge",\n            "selected": false\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Appended Checkbox",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "appendedcheckbox"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Appended Checkbox"\n      },\n      "placeholder": {\n        "label": "Placeholder",\n        "type": "input",\n        "value": "placeholder"\n      },\n      "helptext": {\n        "label": "Help Text",\n        "type": "input",\n        "value": "help"\n      },\n      "checked": {\n        "label": "Checked",\n        "type": "checkbox",\n        "value": false\n      },\n      "required": {\n        "label": "Required",\n        "type": "checkbox",\n        "value": false\n      },\n      "inputsize": {\n        "label": "Input Size",\n        "type": "select",\n        "value": [\n          {\n            "value": "col-md-1",\n            "label": "Mini",\n            "selected": false\n          },\n          {\n            "value": "col-md-2",\n            "label": "Small",\n            "selected": false\n          },\n          {\n            "value": "col-md-4",\n            "label": "Medium",\n            "selected": true\n          },\n          {\n            "value": "col-md-5",\n            "label": "Large",\n            "selected": false\n          },\n          {\n            "value": "col-md-6",\n            "label": "Xlarge",\n            "selected": false\n          },\n          {\n            "value": "col-md-8",\n            "label": "Xxlarge",\n            "selected": false\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Button Drop Down",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "buttondropdown"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Button Drop Down"\n      },\n      "placeholder": {\n        "label": "Placeholder",\n        "type": "input",\n        "value": "placeholder"\n      },\n      "buttontext": {\n        "label": "Button Text",\n        "type": "input",\n        "value": "Action"\n      },\n      "buttonoptions": {\n        "label": "Options",\n        "type": "textarea-split",\n        "value": [\n          "Option one",\n          "Option two",\n          "Option three"\n        ]\n      },\n      "required": {\n        "label": "Required",\n        "type": "checkbox",\n        "value": false\n      },\n      "inputsize": {\n        "label": "Input Size",\n        "type": "select",\n        "value": [\n          {\n            "value": "col-md-1",\n            "label": "Mini",\n            "selected": false\n          },\n          {\n            "value": "col-md-2",\n            "label": "Small",\n            "selected": false\n          },\n          {\n            "value": "col-md-4",\n            "label": "Medium",\n            "selected": true\n          },\n          {\n            "value": "col-md-5",\n            "label": "Large",\n            "selected": false\n          },\n          {\n            "value": "col-md-6",\n            "label": "Xlarge",\n            "selected": false\n          },\n          {\n            "value": "col-md-8",\n            "label": "Xxlarge",\n            "selected": false\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Text Area",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "textarea"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Text Area"\n      },\n      "textarea": {\n        "label": "Starting Text",\n        "type": "textarea",\n        "value": "default text"\n      }\n    }\n  }\n]\n';
  }),
  define("text!data/radio.json", [], function () {
    return '[\n  {\n    "title": "Multiple Radios",\n    "fields": {\n      "name": {\n        "label": "Group Name",\n        "type": "input",\n        "value": "radios"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Multiple Radios"\n      },\n      "radios": {\n        "label": "Radios",\n        "type": "textarea-split",\n        "value": [\n          "Option one",\n          "Option two"\n        ]\n      },\n\t\t"radiosValues" :{\n\t\t\t"label" : "Radios Values",\n\t\t\t"type" : "textarea-split",\n\t\t\t"value" :[\n\t\t\t\t"1",\n\t\t\t\t"2"\n\t\t\t] \n\t\t}\n    }\n  },\n  {\n    "title": "Multiple Radios Inline",\n    "fields": {\n      "name": {\n        "label": "Group Name",\n        "type": "input",\n        "value": "radios"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Inline Radios"\n      },\n      "radios": {\n        "label": "Radios",\n        "type": "textarea-split",\n        "value": [\n          1,\n          2,\n          3,\n          4\n        ]\n      },\n\t\t"radiosValues" :{\n\t\t\t"label" : "Radios Values",\n\t\t\t"type" : "textarea-split",\n\t\t\t"value" :[\n\t\t\t\t"1",\n\t\t\t\t"2",\n\t\t\t\t"3",\n\t\t\t\t"4"\n\t\t\t] \n\t\t}\n    }\n  },\n  {\n    "title": "Multiple Checkboxes",\n    "fields": {\n      "name": {\n        "label": "Group Name",\n        "type": "input",\n        "value": "checkboxes"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Multiple Checkboxes"\n      },\n      "checkboxes": {\n        "label": "Checkboxes",\n        "type": "textarea-split",\n        "value": [\n          "Option one",\n          "Option two"\n        ]\n      },\n\t  "checkboxesValues":{\n\t\t"label" : "Checkboxes Values",\n\t\t"type" : "textarea-split",\n\t\t"value" : [\n\t\t\t"1",\n\t\t\t"2"\n\t\t]\t\t\n\t  }\n    }\n  },\n  {\n    "title": "Multiple Checkboxes Inline",\n    "fields": {\n      "name": {\n        "label": "Group Name",\n        "type": "input",\n        "value": "checkboxes"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Inline Checkboxes"\n      },\n      "checkboxes": {\n        "label": "Checkboxes",\n        "type": "textarea-split",\n        "value": [\n          1,\n          2,\n          3,\n          4\n        ]\n      },\n\t  "checkboxesValues":{\n\t\t"label" : "Checkboxes Values",\n\t\t"type" : "textarea-split",\n\t\t"value" : [\n\t\t\t"1",\n\t\t\t"2",\n\t\t\t"3",\n\t\t\t"4"\n\t\t]\t\t\n\t  }\n    }\n  }\n]';
  }),
  define("text!data/select.json", [], function () {
    return '[\n  {\n    "title": "Select Basic",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "selectbasic"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Select Basic"\n      },\n      "options": {\n        "label": "Options",\n        "type": "textarea-split",\n        "value": [\n          "Option one",\n          "Option two"\n        ]\n      },\n      "values":{\n\t\t\t"label": "Values",\n         "type": "textarea-split",\n         "value": [\n           "1",\n           "2"\n        ]\n      },\n      "inputsize": {\n        "label": "Input Size",\n        "type": "select",\n        "value": [\n          {\n            "value": "col-md-1",\n            "label": "Mini",\n            "selected": false\n          },\n          {\n            "value": "col-md-2",\n            "label": "Small",\n            "selected": false\n          },\n          {\n            "value": "col-md-4",\n            "label": "Medium",\n            "selected": true\n          },\n          {\n            "value": "col-md-5",\n            "label": "Large",\n            "selected": false\n          },\n          {\n            "value": "col-md-6",\n            "label": "Xlarge",\n            "selected": false\n          },\n          {\n            "value": "col-md-8",\n            "label": "Xxlarge",\n            "selected": false\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Select Multiple",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "selectmultiple"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Select Multiple"\n      },\n      "options": {\n        "label": "Options",\n        "type": "textarea-split",\n        "value": [\n          "Option one",\n          "Option two"\n        ]\n      },\n      "values":{\n\t\t\t"label": "Values",\n         "type": "textarea-split",\n         "value": [\n           "1",\n           "2"\n        ]\n      },\n      "inputsize": {\n        "label": "Input Size",\n        "type": "select",\n        "value": [\n          {\n            "value": "col-md-1",\n            "label": "Mini",\n            "selected": false\n          },\n          {\n            "value": "col-md-2",\n            "label": "Small",\n            "selected": false\n          },\n          {\n            "value": "col-md-4",\n            "label": "Medium",\n            "selected": true\n          },\n          {\n            "value": "col-md-5",\n            "label": "Large",\n            "selected": false\n          },\n          {\n            "value": "col-md-6",\n            "label": "Xlarge",\n            "selected": false\n          },\n          {\n            "value": "col-md-8",\n            "label": "Xxlarge",\n            "selected": false\n          }\n        ]\n      }\n    }\n  }\n]';
  }),
  define("text!data/buttons.json", [], function () {
    return '[\n  {\n    "title": "File Button",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "filebutton"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "File Button"\n      }\n    }\n  },\n  {\n    "title": "Single Button",\n    "fields": {\n      "id": {\n        "label": "ID / Name",\n        "type": "input",\n        "value": "singlebutton"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Single Button"\n      },\n      "buttonlabel": {\n        "label": "Button Label",\n        "type": "input",\n        "value": "Button"\n      },\n      "buttontype": {\n        "label": "Button Type",\n        "type": "select",\n        "value": [\n          {\n            "value": "btn-default",\n            "label": "Default",\n            "selected": false\n          },\n          {\n            "value": "btn-primary",\n            "label": "Primary",\n            "selected": true\n          },\n          {\n            "value": "btn-info",\n            "label": "Info",\n            "selected": false\n          },\n          {\n            "value": "btn-success",\n            "label": "Success",\n            "selected": false\n          },\n          {\n            "value": "btn-warning",\n            "label": "Warning",\n            "selected": false\n          },\n          {\n            "value": "btn-danger",\n            "label": "Danger",\n            "selected": false\n          },\n          {\n            "value": "btn-inverse",\n            "label": "Inverse",\n            "selected": false\n          }\n        ]\n      }\n    }\n  },\n  {\n    "title": "Double Button",\n    "fields": {\n      "id": {\n        "label": "Button 1 ID / Name",\n        "type": "input",\n        "value": "button1id"\n      },\n      "label": {\n        "label": "Label Text",\n        "type": "input",\n        "value": "Double Button"\n      },\n      "button1label": {\n        "label": "Button Label",\n        "type": "input",\n        "value": "Good Button"\n      },\n      "button1type": {\n        "label": "Button Type",\n        "type": "select",\n        "value": [\n          {\n            "value": "btn-default",\n            "label": "Default",\n            "selected": false\n          },\n          {\n            "value": "btn-primary",\n            "label": "Primary",\n            "selected": false\n          },\n          {\n            "value": "btn-info",\n            "label": "Info",\n            "selected": false\n          },\n          {\n            "value": "btn-success",\n            "label": "Success",\n            "selected": true\n          },\n          {\n            "value": "btn-warning",\n            "label": "Warning",\n            "selected": false\n          },\n          {\n            "value": "btn-danger",\n            "label": "Danger",\n            "selected": false\n          },\n          {\n            "value": "btn-inverse",\n            "label": "Inverse",\n            "selected": false\n          }\n        ]\n      },\n      "id2": {\n        "label": "Button 2 ID / Name",\n        "type": "input",\n        "value": "button2id"\n      },\n      "button2label": {\n        "label": "Button Label",\n        "type": "input",\n        "value": "Scary Button"\n      },\n      "button2type": {\n        "label": "Button Type",\n        "type": "select",\n        "value": [\n          {\n            "value": "btn-default",\n            "label": "Default",\n            "selected": false\n          },\n          {\n            "value": "btn-primary",\n            "label": "Primary",\n            "selected": false\n          },\n          {\n            "value": "btn-info",\n            "label": "Info",\n            "selected": false\n          },\n          {\n            "value": "btn-success",\n            "label": "Success",\n            "selected": false\n          },\n          {\n            "value": "btn-warning",\n            "label": "Warning",\n            "selected": false\n          },\n          {\n            "value": "btn-danger",\n            "label": "Danger",\n            "selected": true\n          },\n          {\n            "value": "btn-inverse",\n            "label": "Inverse",\n            "selected": false\n          }\n        ]\n      }\n    }\n  }\n]';
  }),
  define("text!templates/app/render.html", [], function () {
    return '<h3>Rendered source of your form:</h3>\n<textarea id="render" class="col-md-12"></textarea>\n';
  }),
  define("text!templates/app/about.html", [], function () {
    return '<h3>About</h3>\n\n<p>\nOriginally, created by Adam Moore (@<a href="http://twitter.com/minikomi">minikomi</a>) to help take the stress out of\nwriting all that markup to get bootstrap forms together. 🎨\n</p>\n\n<p>\nThen, it was updated to work with Bootstrap 3, thanks to Ihab Soliman (@<a href="https://github.com/IhabSoliman">IhabSoliman</a>). 🍰\n</p>\n\n<p>\nFinally, updated by @<a href="https://github.com/Bloggify">Bloggify</a> to make it compatible with Bootstrap 4. 🚀\n</p>\n\n<p>\nIf you have a problem, or want a specific snippet added please check out the\n<a href="https://github.com/Bloggify/bootstrap-form-builder">GitHub project</a>.\n\nAdding snippets is quite simple now so please don\'t hesitate to open an issue!\n</p>\n\n<h5>Versions</h5>\n\n<ul>\n    <li><a href="https://github.com/Bloggify/bootstrap-form-builder">Bootstrap 4</a>\n    <li><a href="https://github.com/IhabSoliman/Bootstrap-Form-Builder">Bootstrap 3</a>\n    <li><a href="https://github.com/minikomi/Bootstrap-Form-Builder">Bootstrap 2</a>\n</ul>\n';
  }),
  define(
    "app/app",
    [
      "jquery",
      "underscore",
      "backbone",
      "collections/snippets",
      "collections/my-form-snippets",
      "views/tab",
      "views/my-form",
      "text!data/input.json",
      "text!data/radio.json",
      "text!data/select.json",
      "text!data/buttons.json",
      "text!templates/app/render.html",
      "text!templates/app/about.html",
    ],
    function (e, t, n, i, r, o, a, s, l, u, c, p, d) {
      return {
        initialize: function () {
          new o({ title: "Input", collection: new i(JSON.parse(s)) }),
            new o({
              title: "Radios / Checkboxes",
              collection: new i(JSON.parse(l)),
            }),
            new o({ title: "Select", collection: new i(JSON.parse(u)) }),
            new o({ title: "Buttons", collection: new i(JSON.parse(c)) }),
            new o({ title: "Rendered", content: p }),
            new o({ title: "About", content: d }),
            e("#components .tab-pane").first().addClass("active"),
            e("#formtabs li a").first().addClass("active"),
            new a({
              title: "Original",
              collection: new r([
                {
                  title: "Form Name",
                  fields: {
                    name: {
                      label: "Form Name",
                      type: "input",
                      value: "Form Name",
                    },
                  },
                },
              ]),
            });
        },
      };
    }
  ),
  require.config({
    baseUrl: "assets/js/lib/",
    shim: {
      backbone: { deps: ["underscore", "jquery"], exports: "Backbone" },
      popper: { exports: "Popper" },
      underscore: { exports: "_" },
      bootstrap: { deps: ["jquery"], exports: "$.fn.popover" },
    },
    paths: {
      app: "..",
      collections: "../collections",
      data: "../data",
      models: "../models",
      helper: "../helper",
      templates: "../templates",
      views: "../views",
    },
  }),
  require(["popper.min", "app/app"], function (e, t) {
    t.initialize();
  }),
  define("../main", function () {});
