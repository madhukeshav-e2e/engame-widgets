/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function (a, b) {
  function G(a) {
    var b = (F[a] = {});
    return (
      p.each(a.split(s), function (a, c) {
        b[c] = !0;
      }),
      b
    );
  }
  function J(a, c, d) {
    if (d === b && a.nodeType === 1) {
      var e = "data-" + c.replace(I, "-$1").toLowerCase();
      d = a.getAttribute(e);
      if (typeof d == "string") {
        try {
          d =
            d === "true"
              ? !0
              : d === "false"
              ? !1
              : d === "null"
              ? null
              : +d + "" === d
              ? +d
              : H.test(d)
              ? p.parseJSON(d)
              : d;
        } catch (f) {}
        p.data(a, c, d);
      } else d = b;
    }
    return d;
  }
  function K(a) {
    var b;
    for (b in a) {
      if (b === "data" && p.isEmptyObject(a[b])) continue;
      if (b !== "toJSON") return !1;
    }
    return !0;
  }
  function ba() {
    return !1;
  }
  function bb() {
    return !0;
  }
  function bh(a) {
    return !a || !a.parentNode || a.parentNode.nodeType === 11;
  }
  function bi(a, b) {
    do a = a[b];
    while (a && a.nodeType !== 1);
    return a;
  }
  function bj(a, b, c) {
    b = b || 0;
    if (p.isFunction(b))
      return p.grep(a, function (a, d) {
        var e = !!b.call(a, d, a);
        return e === c;
      });
    if (b.nodeType)
      return p.grep(a, function (a, d) {
        return (a === b) === c;
      });
    if (typeof b == "string") {
      var d = p.grep(a, function (a) {
        return a.nodeType === 1;
      });
      if (be.test(b)) return p.filter(b, d, !c);
      b = p.filter(b, d);
    }
    return p.grep(a, function (a, d) {
      return p.inArray(a, b) >= 0 === c;
    });
  }
  function bk(a) {
    var b = bl.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement) while (b.length) c.createElement(b.pop());
    return c;
  }
  function bC(a, b) {
    return (
      a.getElementsByTagName(b)[0] ||
      a.appendChild(a.ownerDocument.createElement(b))
    );
  }
  function bD(a, b) {
    if (b.nodeType !== 1 || !p.hasData(a)) return;
    var c,
      d,
      e,
      f = p._data(a),
      g = p._data(b, f),
      h = f.events;
    if (h) {
      delete g.handle, (g.events = {});
      for (c in h)
        for (d = 0, e = h[c].length; d < e; d++) p.event.add(b, c, h[c][d]);
    }
    g.data && (g.data = p.extend({}, g.data));
  }
  function bE(a, b) {
    var c;
    if (b.nodeType !== 1) return;
    b.clearAttributes && b.clearAttributes(),
      b.mergeAttributes && b.mergeAttributes(a),
      (c = b.nodeName.toLowerCase()),
      c === "object"
        ? (b.parentNode && (b.outerHTML = a.outerHTML),
          p.support.html5Clone &&
            a.innerHTML &&
            !p.trim(b.innerHTML) &&
            (b.innerHTML = a.innerHTML))
        : c === "input" && bv.test(a.type)
        ? ((b.defaultChecked = b.checked = a.checked),
          b.value !== a.value && (b.value = a.value))
        : c === "option"
        ? (b.selected = a.defaultSelected)
        : c === "input" || c === "textarea"
        ? (b.defaultValue = a.defaultValue)
        : c === "script" && b.text !== a.text && (b.text = a.text),
      b.removeAttribute(p.expando);
  }
  function bF(a) {
    return typeof a.getElementsByTagName != "undefined"
      ? a.getElementsByTagName("*")
      : typeof a.querySelectorAll != "undefined"
      ? a.querySelectorAll("*")
      : [];
  }
  function bG(a) {
    bv.test(a.type) && (a.defaultChecked = a.checked);
  }
  function bY(a, b) {
    if (b in a) return b;
    var c = b.charAt(0).toUpperCase() + b.slice(1),
      d = b,
      e = bW.length;
    while (e--) {
      b = bW[e] + c;
      if (b in a) return b;
    }
    return d;
  }
  function bZ(a, b) {
    return (
      (a = b || a),
      p.css(a, "display") === "none" || !p.contains(a.ownerDocument, a)
    );
  }
  function b$(a, b) {
    var c,
      d,
      e = [],
      f = 0,
      g = a.length;
    for (; f < g; f++) {
      c = a[f];
      if (!c.style) continue;
      (e[f] = p._data(c, "olddisplay")),
        b
          ? (!e[f] && c.style.display === "none" && (c.style.display = ""),
            c.style.display === "" &&
              bZ(c) &&
              (e[f] = p._data(c, "olddisplay", cc(c.nodeName))))
          : ((d = bH(c, "display")),
            !e[f] && d !== "none" && p._data(c, "olddisplay", d));
    }
    for (f = 0; f < g; f++) {
      c = a[f];
      if (!c.style) continue;
      if (!b || c.style.display === "none" || c.style.display === "")
        c.style.display = b ? e[f] || "" : "none";
    }
    return a;
  }
  function b_(a, b, c) {
    var d = bP.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
  }
  function ca(a, b, c, d) {
    var e = c === (d ? "border" : "content") ? 4 : b === "width" ? 1 : 0,
      f = 0;
    for (; e < 4; e += 2)
      c === "margin" && (f += p.css(a, c + bV[e], !0)),
        d
          ? (c === "content" &&
              (f -= parseFloat(bH(a, "padding" + bV[e])) || 0),
            c !== "margin" &&
              (f -= parseFloat(bH(a, "border" + bV[e] + "Width")) || 0))
          : ((f += parseFloat(bH(a, "padding" + bV[e])) || 0),
            c !== "padding" &&
              (f += parseFloat(bH(a, "border" + bV[e] + "Width")) || 0));
    return f;
  }
  function cb(a, b, c) {
    var d = b === "width" ? a.offsetWidth : a.offsetHeight,
      e = !0,
      f = p.support.boxSizing && p.css(a, "boxSizing") === "border-box";
    if (d <= 0 || d == null) {
      d = bH(a, b);
      if (d < 0 || d == null) d = a.style[b];
      if (bQ.test(d)) return d;
      (e = f && (p.support.boxSizingReliable || d === a.style[b])),
        (d = parseFloat(d) || 0);
    }
    return d + ca(a, b, c || (f ? "border" : "content"), e) + "px";
  }
  function cc(a) {
    if (bS[a]) return bS[a];
    var b = p("<" + a + ">").appendTo(e.body),
      c = b.css("display");
    b.remove();
    if (c === "none" || c === "") {
      bI = e.body.appendChild(
        bI ||
          p.extend(e.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0,
          })
      );
      if (!bJ || !bI.createElement)
        (bJ = (bI.contentWindow || bI.contentDocument).document),
          bJ.write("<!doctype html><html><body>"),
          bJ.close();
      (b = bJ.body.appendChild(bJ.createElement(a))),
        (c = bH(b, "display")),
        e.body.removeChild(bI);
    }
    return (bS[a] = c), c;
  }
  function ci(a, b, c, d) {
    var e;
    if (p.isArray(b))
      p.each(b, function (b, e) {
        c || ce.test(a)
          ? d(a, e)
          : ci(a + "[" + (typeof e == "object" ? b : "") + "]", e, c, d);
      });
    else if (!c && p.type(b) === "object")
      for (e in b) ci(a + "[" + e + "]", b[e], c, d);
    else d(a, b);
  }
  function cz(a) {
    return function (b, c) {
      typeof b != "string" && ((c = b), (b = "*"));
      var d,
        e,
        f,
        g = b.toLowerCase().split(s),
        h = 0,
        i = g.length;
      if (p.isFunction(c))
        for (; h < i; h++)
          (d = g[h]),
            (f = /^\+/.test(d)),
            f && (d = d.substr(1) || "*"),
            (e = a[d] = a[d] || []),
            e[f ? "unshift" : "push"](c);
    };
  }
  function cA(a, c, d, e, f, g) {
    (f = f || c.dataTypes[0]), (g = g || {}), (g[f] = !0);
    var h,
      i = a[f],
      j = 0,
      k = i ? i.length : 0,
      l = a === cv;
    for (; j < k && (l || !h); j++)
      (h = i[j](c, d, e)),
        typeof h == "string" &&
          (!l || g[h]
            ? (h = b)
            : (c.dataTypes.unshift(h), (h = cA(a, c, d, e, h, g))));
    return (l || !h) && !g["*"] && (h = cA(a, c, d, e, "*", g)), h;
  }
  function cB(a, c) {
    var d,
      e,
      f = p.ajaxSettings.flatOptions || {};
    for (d in c) c[d] !== b && ((f[d] ? a : e || (e = {}))[d] = c[d]);
    e && p.extend(!0, a, e);
  }
  function cC(a, c, d) {
    var e,
      f,
      g,
      h,
      i = a.contents,
      j = a.dataTypes,
      k = a.responseFields;
    for (f in k) f in d && (c[k[f]] = d[f]);
    while (j[0] === "*")
      j.shift(),
        e === b && (e = a.mimeType || c.getResponseHeader("content-type"));
    if (e)
      for (f in i)
        if (i[f] && i[f].test(e)) {
          j.unshift(f);
          break;
        }
    if (j[0] in d) g = j[0];
    else {
      for (f in d) {
        if (!j[0] || a.converters[f + " " + j[0]]) {
          g = f;
          break;
        }
        h || (h = f);
      }
      g = g || h;
    }
    if (g) return g !== j[0] && j.unshift(g), d[g];
  }
  function cD(a, b) {
    var c,
      d,
      e,
      f,
      g = a.dataTypes.slice(),
      h = g[0],
      i = {},
      j = 0;
    a.dataFilter && (b = a.dataFilter(b, a.dataType));
    if (g[1]) for (c in a.converters) i[c.toLowerCase()] = a.converters[c];
    for (; (e = g[++j]); )
      if (e !== "*") {
        if (h !== "*" && h !== e) {
          c = i[h + " " + e] || i["* " + e];
          if (!c)
            for (d in i) {
              f = d.split(" ");
              if (f[1] === e) {
                c = i[h + " " + f[0]] || i["* " + f[0]];
                if (c) {
                  c === !0
                    ? (c = i[d])
                    : i[d] !== !0 && ((e = f[0]), g.splice(j--, 0, e));
                  break;
                }
              }
            }
          if (c !== !0)
            if (c && a["throws"]) b = c(b);
            else
              try {
                b = c(b);
              } catch (k) {
                return {
                  state: "parsererror",
                  error: c ? k : "No conversion from " + h + " to " + e,
                };
              }
        }
        h = e;
      }
    return { state: "success", data: b };
  }
  function cL() {
    try {
      return new a.XMLHttpRequest();
    } catch (b) {}
  }
  function cM() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP");
    } catch (b) {}
  }
  function cU() {
    return (
      setTimeout(function () {
        cN = b;
      }, 0),
      (cN = p.now())
    );
  }
  function cV(a, b) {
    p.each(b, function (b, c) {
      var d = (cT[b] || []).concat(cT["*"]),
        e = 0,
        f = d.length;
      for (; e < f; e++) if (d[e].call(a, b, c)) return;
    });
  }
  function cW(a, b, c) {
    var d,
      e = 0,
      f = 0,
      g = cS.length,
      h = p.Deferred().always(function () {
        delete i.elem;
      }),
      i = function () {
        var b = cN || cU(),
          c = Math.max(0, j.startTime + j.duration - b),
          d = 1 - (c / j.duration || 0),
          e = 0,
          f = j.tweens.length;
        for (; e < f; e++) j.tweens[e].run(d);
        return (
          h.notifyWith(a, [j, d, c]),
          d < 1 && f ? c : (h.resolveWith(a, [j]), !1)
        );
      },
      j = h.promise({
        elem: a,
        props: p.extend({}, b),
        opts: p.extend(!0, { specialEasing: {} }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: cN || cU(),
        duration: c.duration,
        tweens: [],
        createTween: function (b, c, d) {
          var e = p.Tween(
            a,
            j.opts,
            b,
            c,
            j.opts.specialEasing[b] || j.opts.easing
          );
          return j.tweens.push(e), e;
        },
        stop: function (b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          for (; c < d; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
        },
      }),
      k = j.props;
    cX(k, j.opts.specialEasing);
    for (; e < g; e++) {
      d = cS[e].call(j, a, k, j.opts);
      if (d) return d;
    }
    return (
      cV(j, k),
      p.isFunction(j.opts.start) && j.opts.start.call(a, j),
      p.fx.timer(p.extend(i, { anim: j, queue: j.opts.queue, elem: a })),
      j
        .progress(j.opts.progress)
        .done(j.opts.done, j.opts.complete)
        .fail(j.opts.fail)
        .always(j.opts.always)
    );
  }
  function cX(a, b) {
    var c, d, e, f, g;
    for (c in a) {
      (d = p.camelCase(c)),
        (e = b[d]),
        (f = a[c]),
        p.isArray(f) && ((e = f[1]), (f = a[c] = f[0])),
        c !== d && ((a[d] = f), delete a[c]),
        (g = p.cssHooks[d]);
      if (g && "expand" in g) {
        (f = g.expand(f)), delete a[d];
        for (c in f) c in a || ((a[c] = f[c]), (b[c] = e));
      } else b[d] = e;
    }
  }
  function cY(a, b, c) {
    var d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l = this,
      m = a.style,
      n = {},
      o = [],
      q = a.nodeType && bZ(a);
    c.queue ||
      ((j = p._queueHooks(a, "fx")),
      j.unqueued == null &&
        ((j.unqueued = 0),
        (k = j.empty.fire),
        (j.empty.fire = function () {
          j.unqueued || k();
        })),
      j.unqueued++,
      l.always(function () {
        l.always(function () {
          j.unqueued--, p.queue(a, "fx").length || j.empty.fire();
        });
      })),
      a.nodeType === 1 &&
        ("height" in b || "width" in b) &&
        ((c.overflow = [m.overflow, m.overflowX, m.overflowY]),
        p.css(a, "display") === "inline" &&
          p.css(a, "float") === "none" &&
          (!p.support.inlineBlockNeedsLayout || cc(a.nodeName) === "inline"
            ? (m.display = "inline-block")
            : (m.zoom = 1))),
      c.overflow &&
        ((m.overflow = "hidden"),
        p.support.shrinkWrapBlocks ||
          l.done(function () {
            (m.overflow = c.overflow[0]),
              (m.overflowX = c.overflow[1]),
              (m.overflowY = c.overflow[2]);
          }));
    for (d in b) {
      f = b[d];
      if (cP.exec(f)) {
        delete b[d];
        if (f === (q ? "hide" : "show")) continue;
        o.push(d);
      }
    }
    g = o.length;
    if (g) {
      (h = p._data(a, "fxshow") || p._data(a, "fxshow", {})),
        q
          ? p(a).show()
          : l.done(function () {
              p(a).hide();
            }),
        l.done(function () {
          var b;
          p.removeData(a, "fxshow", !0);
          for (b in n) p.style(a, b, n[b]);
        });
      for (d = 0; d < g; d++)
        (e = o[d]),
          (i = l.createTween(e, q ? h[e] : 0)),
          (n[e] = h[e] || p.style(a, e)),
          e in h ||
            ((h[e] = i.start),
            q &&
              ((i.end = i.start),
              (i.start = e === "width" || e === "height" ? 1 : 0)));
    }
  }
  function cZ(a, b, c, d, e) {
    return new cZ.prototype.init(a, b, c, d, e);
  }
  function c$(a, b) {
    var c,
      d = { height: a },
      e = 0;
    b = b ? 1 : 0;
    for (; e < 4; e += 2 - b)
      (c = bV[e]), (d["margin" + c] = d["padding" + c] = a);
    return b && (d.opacity = d.width = a), d;
  }
  function da(a) {
    return p.isWindow(a)
      ? a
      : a.nodeType === 9
      ? a.defaultView || a.parentWindow
      : !1;
  }
  var c,
    d,
    e = a.document,
    f = a.location,
    g = a.navigator,
    h = a.jQuery,
    i = a.$,
    j = Array.prototype.push,
    k = Array.prototype.slice,
    l = Array.prototype.indexOf,
    m = Object.prototype.toString,
    n = Object.prototype.hasOwnProperty,
    o = String.prototype.trim,
    p = function (a, b) {
      return new p.fn.init(a, b, c);
    },
    q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
    r = /\S/,
    s = /\s+/,
    t = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    u = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
    v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    w = /^[\],:{}\s]*$/,
    x = /(?:^|:|,)(?:\s*\[)+/g,
    y = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    z = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
    A = /^-ms-/,
    B = /-([\da-z])/gi,
    C = function (a, b) {
      return (b + "").toUpperCase();
    },
    D = function () {
      e.addEventListener
        ? (e.removeEventListener("DOMContentLoaded", D, !1), p.ready())
        : e.readyState === "complete" &&
          (e.detachEvent("onreadystatechange", D), p.ready());
    },
    E = {};
  (p.fn = p.prototype =
    {
      constructor: p,
      init: function (a, c, d) {
        var f, g, h, i;
        if (!a) return this;
        if (a.nodeType)
          return (this.context = this[0] = a), (this.length = 1), this;
        if (typeof a == "string") {
          a.charAt(0) === "<" && a.charAt(a.length - 1) === ">" && a.length >= 3
            ? (f = [null, a, null])
            : (f = u.exec(a));
          if (f && (f[1] || !c)) {
            if (f[1])
              return (
                (c = c instanceof p ? c[0] : c),
                (i = c && c.nodeType ? c.ownerDocument || c : e),
                (a = p.parseHTML(f[1], i, !0)),
                v.test(f[1]) && p.isPlainObject(c) && this.attr.call(a, c, !0),
                p.merge(this, a)
              );
            g = e.getElementById(f[2]);
            if (g && g.parentNode) {
              if (g.id !== f[2]) return d.find(a);
              (this.length = 1), (this[0] = g);
            }
            return (this.context = e), (this.selector = a), this;
          }
          return !c || c.jquery
            ? (c || d).find(a)
            : this.constructor(c).find(a);
        }
        return p.isFunction(a)
          ? d.ready(a)
          : (a.selector !== b &&
              ((this.selector = a.selector), (this.context = a.context)),
            p.makeArray(a, this));
      },
      selector: "",
      jquery: "1.8.2",
      length: 0,
      size: function () {
        return this.length;
      },
      toArray: function () {
        return k.call(this);
      },
      get: function (a) {
        return a == null
          ? this.toArray()
          : a < 0
          ? this[this.length + a]
          : this[a];
      },
      pushStack: function (a, b, c) {
        var d = p.merge(this.constructor(), a);
        return (
          (d.prevObject = this),
          (d.context = this.context),
          b === "find"
            ? (d.selector = this.selector + (this.selector ? " " : "") + c)
            : b && (d.selector = this.selector + "." + b + "(" + c + ")"),
          d
        );
      },
      each: function (a, b) {
        return p.each(this, a, b);
      },
      ready: function (a) {
        return p.ready.promise().done(a), this;
      },
      eq: function (a) {
        return (a = +a), a === -1 ? this.slice(a) : this.slice(a, a + 1);
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      slice: function () {
        return this.pushStack(
          k.apply(this, arguments),
          "slice",
          k.call(arguments).join(",")
        );
      },
      map: function (a) {
        return this.pushStack(
          p.map(this, function (b, c) {
            return a.call(b, c, b);
          })
        );
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: j,
      sort: [].sort,
      splice: [].splice,
    }),
    (p.fn.init.prototype = p.fn),
    (p.extend = p.fn.extend =
      function () {
        var a,
          c,
          d,
          e,
          f,
          g,
          h = arguments[0] || {},
          i = 1,
          j = arguments.length,
          k = !1;
        typeof h == "boolean" && ((k = h), (h = arguments[1] || {}), (i = 2)),
          typeof h != "object" && !p.isFunction(h) && (h = {}),
          j === i && ((h = this), --i);
        for (; i < j; i++)
          if ((a = arguments[i]) != null)
            for (c in a) {
              (d = h[c]), (e = a[c]);
              if (h === e) continue;
              k && e && (p.isPlainObject(e) || (f = p.isArray(e)))
                ? (f
                    ? ((f = !1), (g = d && p.isArray(d) ? d : []))
                    : (g = d && p.isPlainObject(d) ? d : {}),
                  (h[c] = p.extend(k, g, e)))
                : e !== b && (h[c] = e);
            }
        return h;
      }),
    p.extend({
      noConflict: function (b) {
        return a.$ === p && (a.$ = i), b && a.jQuery === p && (a.jQuery = h), p;
      },
      isReady: !1,
      readyWait: 1,
      holdReady: function (a) {
        a ? p.readyWait++ : p.ready(!0);
      },
      ready: function (a) {
        if (a === !0 ? --p.readyWait : p.isReady) return;
        if (!e.body) return setTimeout(p.ready, 1);
        p.isReady = !0;
        if (a !== !0 && --p.readyWait > 0) return;
        d.resolveWith(e, [p]),
          p.fn.trigger && p(e).trigger("ready").off("ready");
      },
      isFunction: function (a) {
        return p.type(a) === "function";
      },
      isArray:
        Array.isArray ||
        function (a) {
          return p.type(a) === "array";
        },
      isWindow: function (a) {
        return a != null && a == a.window;
      },
      isNumeric: function (a) {
        return !isNaN(parseFloat(a)) && isFinite(a);
      },
      type: function (a) {
        return a == null ? String(a) : E[m.call(a)] || "object";
      },
      isPlainObject: function (a) {
        if (!a || p.type(a) !== "object" || a.nodeType || p.isWindow(a))
          return !1;
        try {
          if (
            a.constructor &&
            !n.call(a, "constructor") &&
            !n.call(a.constructor.prototype, "isPrototypeOf")
          )
            return !1;
        } catch (c) {
          return !1;
        }
        var d;
        for (d in a);
        return d === b || n.call(a, d);
      },
      isEmptyObject: function (a) {
        var b;
        for (b in a) return !1;
        return !0;
      },
      error: function (a) {
        throw new Error(a);
      },
      parseHTML: function (a, b, c) {
        var d;
        return !a || typeof a != "string"
          ? null
          : (typeof b == "boolean" && ((c = b), (b = 0)),
            (b = b || e),
            (d = v.exec(a))
              ? [b.createElement(d[1])]
              : ((d = p.buildFragment([a], b, c ? null : [])),
                p.merge(
                  [],
                  (d.cacheable ? p.clone(d.fragment) : d.fragment).childNodes
                )));
      },
      parseJSON: function (b) {
        if (!b || typeof b != "string") return null;
        b = p.trim(b);
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b);
        if (w.test(b.replace(y, "@").replace(z, "]").replace(x, "")))
          return new Function("return " + b)();
        p.error("Invalid JSON: " + b);
      },
      parseXML: function (c) {
        var d, e;
        if (!c || typeof c != "string") return null;
        try {
          a.DOMParser
            ? ((e = new DOMParser()), (d = e.parseFromString(c, "text/xml")))
            : ((d = new ActiveXObject("Microsoft.XMLDOM")),
              (d.async = "false"),
              d.loadXML(c));
        } catch (f) {
          d = b;
        }
        return (
          (!d ||
            !d.documentElement ||
            d.getElementsByTagName("parsererror").length) &&
            p.error("Invalid XML: " + c),
          d
        );
      },
      noop: function () {},
      globalEval: function (b) {
        b &&
          r.test(b) &&
          (
            a.execScript ||
            function (b) {
              a.eval.call(a, b);
            }
          )(b);
      },
      camelCase: function (a) {
        return a.replace(A, "ms-").replace(B, C);
      },
      nodeName: function (a, b) {
        return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
      },
      each: function (a, c, d) {
        var e,
          f = 0,
          g = a.length,
          h = g === b || p.isFunction(a);
        if (d) {
          if (h) {
            for (e in a) if (c.apply(a[e], d) === !1) break;
          } else for (; f < g; ) if (c.apply(a[f++], d) === !1) break;
        } else if (h) {
          for (e in a) if (c.call(a[e], e, a[e]) === !1) break;
        } else for (; f < g; ) if (c.call(a[f], f, a[f++]) === !1) break;
        return a;
      },
      trim:
        o && !o.call("???????? ")
          ? function (a) {
              return a == null ? "" : o.call(a);
            }
          : function (a) {
              return a == null ? "" : (a + "").replace(t, "");
            },
      makeArray: function (a, b) {
        var c,
          d = b || [];
        return (
          a != null &&
            ((c = p.type(a)),
            a.length == null ||
            c === "string" ||
            c === "function" ||
            c === "regexp" ||
            p.isWindow(a)
              ? j.call(d, a)
              : p.merge(d, a)),
          d
        );
      },
      inArray: function (a, b, c) {
        var d;
        if (b) {
          if (l) return l.call(b, a, c);
          (d = b.length), (c = c ? (c < 0 ? Math.max(0, d + c) : c) : 0);
          for (; c < d; c++) if (c in b && b[c] === a) return c;
        }
        return -1;
      },
      merge: function (a, c) {
        var d = c.length,
          e = a.length,
          f = 0;
        if (typeof d == "number") for (; f < d; f++) a[e++] = c[f];
        else while (c[f] !== b) a[e++] = c[f++];
        return (a.length = e), a;
      },
      grep: function (a, b, c) {
        var d,
          e = [],
          f = 0,
          g = a.length;
        c = !!c;
        for (; f < g; f++) (d = !!b(a[f], f)), c !== d && e.push(a[f]);
        return e;
      },
      map: function (a, c, d) {
        var e,
          f,
          g = [],
          h = 0,
          i = a.length,
          j =
            a instanceof p ||
            (i !== b &&
              typeof i == "number" &&
              ((i > 0 && a[0] && a[i - 1]) || i === 0 || p.isArray(a)));
        if (j)
          for (; h < i; h++)
            (e = c(a[h], h, d)), e != null && (g[g.length] = e);
        else for (f in a) (e = c(a[f], f, d)), e != null && (g[g.length] = e);
        return g.concat.apply([], g);
      },
      guid: 1,
      proxy: function (a, c) {
        var d, e, f;
        return (
          typeof c == "string" && ((d = a[c]), (c = a), (a = d)),
          p.isFunction(a)
            ? ((e = k.call(arguments, 2)),
              (f = function () {
                return a.apply(c, e.concat(k.call(arguments)));
              }),
              (f.guid = a.guid = a.guid || p.guid++),
              f)
            : b
        );
      },
      access: function (a, c, d, e, f, g, h) {
        var i,
          j = d == null,
          k = 0,
          l = a.length;
        if (d && typeof d == "object") {
          for (k in d) p.access(a, c, k, d[k], 1, g, e);
          f = 1;
        } else if (e !== b) {
          (i = h === b && p.isFunction(e)),
            j &&
              (i
                ? ((i = c),
                  (c = function (a, b, c) {
                    return i.call(p(a), c);
                  }))
                : (c.call(a, e), (c = null)));
          if (c)
            for (; k < l; k++)
              c(a[k], d, i ? e.call(a[k], k, c(a[k], d)) : e, h);
          f = 1;
        }
        return f ? a : j ? c.call(a) : l ? c(a[0], d) : g;
      },
      now: function () {
        return new Date().getTime();
      },
    }),
    (p.ready.promise = function (b) {
      if (!d) {
        d = p.Deferred();
        if (e.readyState === "complete") setTimeout(p.ready, 1);
        else if (e.addEventListener)
          e.addEventListener("DOMContentLoaded", D, !1),
            a.addEventListener("load", p.ready, !1);
        else {
          e.attachEvent("onreadystatechange", D),
            a.attachEvent("onload", p.ready);
          var c = !1;
          try {
            c = a.frameElement == null && e.documentElement;
          } catch (f) {}
          c &&
            c.doScroll &&
            (function g() {
              if (!p.isReady) {
                try {
                  c.doScroll("left");
                } catch (a) {
                  return setTimeout(g, 50);
                }
                p.ready();
              }
            })();
        }
      }
      return d.promise(b);
    }),
    p.each(
      "Boolean Number String Function Array Date RegExp Object".split(" "),
      function (a, b) {
        E["[object " + b + "]"] = b.toLowerCase();
      }
    ),
    (c = p(e));
  var F = {};
  (p.Callbacks = function (a) {
    a = typeof a == "string" ? F[a] || G(a) : p.extend({}, a);
    var c,
      d,
      e,
      f,
      g,
      h,
      i = [],
      j = !a.once && [],
      k = function (b) {
        (c = a.memory && b),
          (d = !0),
          (h = f || 0),
          (f = 0),
          (g = i.length),
          (e = !0);
        for (; i && h < g; h++)
          if (i[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break;
          }
        (e = !1),
          i && (j ? j.length && k(j.shift()) : c ? (i = []) : l.disable());
      },
      l = {
        add: function () {
          if (i) {
            var b = i.length;
            (function d(b) {
              p.each(b, function (b, c) {
                var e = p.type(c);
                e === "function" && (!a.unique || !l.has(c))
                  ? i.push(c)
                  : c && c.length && e !== "string" && d(c);
              });
            })(arguments),
              e ? (g = i.length) : c && ((f = b), k(c));
          }
          return this;
        },
        remove: function () {
          return (
            i &&
              p.each(arguments, function (a, b) {
                var c;
                while ((c = p.inArray(b, i, c)) > -1)
                  i.splice(c, 1), e && (c <= g && g--, c <= h && h--);
              }),
            this
          );
        },
        has: function (a) {
          return p.inArray(a, i) > -1;
        },
        empty: function () {
          return (i = []), this;
        },
        disable: function () {
          return (i = j = c = b), this;
        },
        disabled: function () {
          return !i;
        },
        lock: function () {
          return (j = b), c || l.disable(), this;
        },
        locked: function () {
          return !j;
        },
        fireWith: function (a, b) {
          return (
            (b = b || []),
            (b = [a, b.slice ? b.slice() : b]),
            i && (!d || j) && (e ? j.push(b) : k(b)),
            this
          );
        },
        fire: function () {
          return l.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!d;
        },
      };
    return l;
  }),
    p.extend({
      Deferred: function (a) {
        var b = [
            ["resolve", "done", p.Callbacks("once memory"), "resolved"],
            ["reject", "fail", p.Callbacks("once memory"), "rejected"],
            ["notify", "progress", p.Callbacks("memory")],
          ],
          c = "pending",
          d = {
            state: function () {
              return c;
            },
            always: function () {
              return e.done(arguments).fail(arguments), this;
            },
            then: function () {
              var a = arguments;
              return p
                .Deferred(function (c) {
                  p.each(b, function (b, d) {
                    var f = d[0],
                      g = a[b];
                    e[d[1]](
                      p.isFunction(g)
                        ? function () {
                            var a = g.apply(this, arguments);
                            a && p.isFunction(a.promise)
                              ? a
                                  .promise()
                                  .done(c.resolve)
                                  .fail(c.reject)
                                  .progress(c.notify)
                              : c[f + "With"](this === e ? c : this, [a]);
                          }
                        : c[f]
                    );
                  }),
                    (a = null);
                })
                .promise();
            },
            promise: function (a) {
              return a != null ? p.extend(a, d) : d;
            },
          },
          e = {};
        return (
          (d.pipe = d.then),
          p.each(b, function (a, f) {
            var g = f[2],
              h = f[3];
            (d[f[1]] = g.add),
              h &&
                g.add(
                  function () {
                    c = h;
                  },
                  b[a ^ 1][2].disable,
                  b[2][2].lock
                ),
              (e[f[0]] = g.fire),
              (e[f[0] + "With"] = g.fireWith);
          }),
          d.promise(e),
          a && a.call(e, e),
          e
        );
      },
      when: function (a) {
        var b = 0,
          c = k.call(arguments),
          d = c.length,
          e = d !== 1 || (a && p.isFunction(a.promise)) ? d : 0,
          f = e === 1 ? a : p.Deferred(),
          g = function (a, b, c) {
            return function (d) {
              (b[a] = this),
                (c[a] = arguments.length > 1 ? k.call(arguments) : d),
                c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c);
            };
          },
          h,
          i,
          j;
        if (d > 1) {
          (h = new Array(d)), (i = new Array(d)), (j = new Array(d));
          for (; b < d; b++)
            c[b] && p.isFunction(c[b].promise)
              ? c[b]
                  .promise()
                  .done(g(b, j, c))
                  .fail(f.reject)
                  .progress(g(b, i, h))
              : --e;
        }
        return e || f.resolveWith(j, c), f.promise();
      },
    }),
    (p.support = (function () {
      var b,
        c,
        d,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n = e.createElement("div");
      n.setAttribute("className", "t"),
        (n.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (c = n.getElementsByTagName("*")),
        (d = n.getElementsByTagName("a")[0]),
        (d.style.cssText = "top:1px;float:left;opacity:.5");
      if (!c || !c.length) return {};
      (f = e.createElement("select")),
        (g = f.appendChild(e.createElement("option"))),
        (h = n.getElementsByTagName("input")[0]),
        (b = {
          leadingWhitespace: n.firstChild.nodeType === 3,
          tbody: !n.getElementsByTagName("tbody").length,
          htmlSerialize: !!n.getElementsByTagName("link").length,
          style: /top/.test(d.getAttribute("style")),
          hrefNormalized: d.getAttribute("href") === "/a",
          opacity: /^0.5/.test(d.style.opacity),
          cssFloat: !!d.style.cssFloat,
          checkOn: h.value === "on",
          optSelected: g.selected,
          getSetAttribute: n.className !== "t",
          enctype: !!e.createElement("form").enctype,
          html5Clone:
            e.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
          boxModel: e.compatMode === "CSS1Compat",
          submitBubbles: !0,
          changeBubbles: !0,
          focusinBubbles: !1,
          deleteExpando: !0,
          noCloneEvent: !0,
          inlineBlockNeedsLayout: !1,
          shrinkWrapBlocks: !1,
          reliableMarginRight: !0,
          boxSizingReliable: !0,
          pixelPosition: !1,
        }),
        (h.checked = !0),
        (b.noCloneChecked = h.cloneNode(!0).checked),
        (f.disabled = !0),
        (b.optDisabled = !g.disabled);
      try {
        delete n.test;
      } catch (o) {
        b.deleteExpando = !1;
      }
      !n.addEventListener &&
        n.attachEvent &&
        n.fireEvent &&
        (n.attachEvent(
          "onclick",
          (m = function () {
            b.noCloneEvent = !1;
          })
        ),
        n.cloneNode(!0).fireEvent("onclick"),
        n.detachEvent("onclick", m)),
        (h = e.createElement("input")),
        (h.value = "t"),
        h.setAttribute("type", "radio"),
        (b.radioValue = h.value === "t"),
        h.setAttribute("checked", "checked"),
        h.setAttribute("name", "t"),
        n.appendChild(h),
        (i = e.createDocumentFragment()),
        i.appendChild(n.lastChild),
        (b.checkClone = i.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (b.appendChecked = h.checked),
        i.removeChild(h),
        i.appendChild(n);
      if (n.attachEvent)
        for (k in { submit: !0, change: !0, focusin: !0 })
          (j = "on" + k),
            (l = j in n),
            l ||
              (n.setAttribute(j, "return;"), (l = typeof n[j] == "function")),
            (b[k + "Bubbles"] = l);
      return (
        p(function () {
          var c,
            d,
            f,
            g,
            h = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
            i = e.getElementsByTagName("body")[0];
          if (!i) return;
          (c = e.createElement("div")),
            (c.style.cssText =
              "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px"),
            i.insertBefore(c, i.firstChild),
            (d = e.createElement("div")),
            c.appendChild(d),
            (d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
            (f = d.getElementsByTagName("td")),
            (f[0].style.cssText = "padding:0;margin:0;border:0;display:none"),
            (l = f[0].offsetHeight === 0),
            (f[0].style.display = ""),
            (f[1].style.display = "none"),
            (b.reliableHiddenOffsets = l && f[0].offsetHeight === 0),
            (d.innerHTML = ""),
            (d.style.cssText =
              "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;"),
            (b.boxSizing = d.offsetWidth === 4),
            (b.doesNotIncludeMarginInBodyOffset = i.offsetTop !== 1),
            a.getComputedStyle &&
              ((b.pixelPosition =
                (a.getComputedStyle(d, null) || {}).top !== "1%"),
              (b.boxSizingReliable =
                (a.getComputedStyle(d, null) || { width: "4px" }).width ===
                "4px"),
              (g = e.createElement("div")),
              (g.style.cssText = d.style.cssText = h),
              (g.style.marginRight = g.style.width = "0"),
              (d.style.width = "1px"),
              d.appendChild(g),
              (b.reliableMarginRight = !parseFloat(
                (a.getComputedStyle(g, null) || {}).marginRight
              ))),
            typeof d.style.zoom != "undefined" &&
              ((d.innerHTML = ""),
              (d.style.cssText =
                h + "width:1px;padding:1px;display:inline;zoom:1"),
              (b.inlineBlockNeedsLayout = d.offsetWidth === 3),
              (d.style.display = "block"),
              (d.style.overflow = "visible"),
              (d.innerHTML = "<div></div>"),
              (d.firstChild.style.width = "5px"),
              (b.shrinkWrapBlocks = d.offsetWidth !== 3),
              (c.style.zoom = 1)),
            i.removeChild(c),
            (c = d = f = g = null);
        }),
        i.removeChild(n),
        (c = d = f = g = h = i = n = null),
        b
      );
    })());
  var H = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    I = /([A-Z])/g;
  p.extend({
    cache: {},
    deletedIds: [],
    uuid: 0,
    expando: "jQuery" + (p.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData: {
      embed: !0,
      object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet: !0,
    },
    hasData: function (a) {
      return (
        (a = a.nodeType ? p.cache[a[p.expando]] : a[p.expando]), !!a && !K(a)
      );
    },
    data: function (a, c, d, e) {
      if (!p.acceptData(a)) return;
      var f,
        g,
        h = p.expando,
        i = typeof c == "string",
        j = a.nodeType,
        k = j ? p.cache : a,
        l = j ? a[h] : a[h] && h;
      if ((!l || !k[l] || (!e && !k[l].data)) && i && d === b) return;
      l || (j ? (a[h] = l = p.deletedIds.pop() || p.guid++) : (l = h)),
        k[l] || ((k[l] = {}), j || (k[l].toJSON = p.noop));
      if (typeof c == "object" || typeof c == "function")
        e ? (k[l] = p.extend(k[l], c)) : (k[l].data = p.extend(k[l].data, c));
      return (
        (f = k[l]),
        e || (f.data || (f.data = {}), (f = f.data)),
        d !== b && (f[p.camelCase(c)] = d),
        i ? ((g = f[c]), g == null && (g = f[p.camelCase(c)])) : (g = f),
        g
      );
    },
    removeData: function (a, b, c) {
      if (!p.acceptData(a)) return;
      var d,
        e,
        f,
        g = a.nodeType,
        h = g ? p.cache : a,
        i = g ? a[p.expando] : p.expando;
      if (!h[i]) return;
      if (b) {
        d = c ? h[i] : h[i].data;
        if (d) {
          p.isArray(b) ||
            (b in d
              ? (b = [b])
              : ((b = p.camelCase(b)),
                b in d ? (b = [b]) : (b = b.split(" "))));
          for (e = 0, f = b.length; e < f; e++) delete d[b[e]];
          if (!(c ? K : p.isEmptyObject)(d)) return;
        }
      }
      if (!c) {
        delete h[i].data;
        if (!K(h[i])) return;
      }
      g
        ? p.cleanData([a], !0)
        : p.support.deleteExpando || h != h.window
        ? delete h[i]
        : (h[i] = null);
    },
    _data: function (a, b, c) {
      return p.data(a, b, c, !0);
    },
    acceptData: function (a) {
      var b = a.nodeName && p.noData[a.nodeName.toLowerCase()];
      return !b || (b !== !0 && a.getAttribute("classid") === b);
    },
  }),
    p.fn.extend({
      data: function (a, c) {
        var d,
          e,
          f,
          g,
          h,
          i = this[0],
          j = 0,
          k = null;
        if (a === b) {
          if (this.length) {
            k = p.data(i);
            if (i.nodeType === 1 && !p._data(i, "parsedAttrs")) {
              f = i.attributes;
              for (h = f.length; j < h; j++)
                (g = f[j].name),
                  g.indexOf("data-") ||
                    ((g = p.camelCase(g.substring(5))), J(i, g, k[g]));
              p._data(i, "parsedAttrs", !0);
            }
          }
          return k;
        }
        return typeof a == "object"
          ? this.each(function () {
              p.data(this, a);
            })
          : ((d = a.split(".", 2)),
            (d[1] = d[1] ? "." + d[1] : ""),
            (e = d[1] + "!"),
            p.access(
              this,
              function (c) {
                if (c === b)
                  return (
                    (k = this.triggerHandler("getData" + e, [d[0]])),
                    k === b && i && ((k = p.data(i, a)), (k = J(i, a, k))),
                    k === b && d[1] ? this.data(d[0]) : k
                  );
                (d[1] = c),
                  this.each(function () {
                    var b = p(this);
                    b.triggerHandler("setData" + e, d),
                      p.data(this, a, c),
                      b.triggerHandler("changeData" + e, d);
                  });
              },
              null,
              c,
              arguments.length > 1,
              null,
              !1
            ));
      },
      removeData: function (a) {
        return this.each(function () {
          p.removeData(this, a);
        });
      },
    }),
    p.extend({
      queue: function (a, b, c) {
        var d;
        if (a)
          return (
            (b = (b || "fx") + "queue"),
            (d = p._data(a, b)),
            c &&
              (!d || p.isArray(c)
                ? (d = p._data(a, b, p.makeArray(c)))
                : d.push(c)),
            d || []
          );
      },
      dequeue: function (a, b) {
        b = b || "fx";
        var c = p.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = p._queueHooks(a, b),
          g = function () {
            p.dequeue(a, b);
          };
        e === "inprogress" && ((e = c.shift()), d--),
          e &&
            (b === "fx" && c.unshift("inprogress"),
            delete f.stop,
            e.call(a, g, f)),
          !d && f && f.empty.fire();
      },
      _queueHooks: function (a, b) {
        var c = b + "queueHooks";
        return (
          p._data(a, c) ||
          p._data(a, c, {
            empty: p.Callbacks("once memory").add(function () {
              p.removeData(a, b + "queue", !0), p.removeData(a, c, !0);
            }),
          })
        );
      },
    }),
    p.fn.extend({
      queue: function (a, c) {
        var d = 2;
        return (
          typeof a != "string" && ((c = a), (a = "fx"), d--),
          arguments.length < d
            ? p.queue(this[0], a)
            : c === b
            ? this
            : this.each(function () {
                var b = p.queue(this, a, c);
                p._queueHooks(this, a),
                  a === "fx" && b[0] !== "inprogress" && p.dequeue(this, a);
              })
        );
      },
      dequeue: function (a) {
        return this.each(function () {
          p.dequeue(this, a);
        });
      },
      delay: function (a, b) {
        return (
          (a = p.fx ? p.fx.speeds[a] || a : a),
          (b = b || "fx"),
          this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
              clearTimeout(d);
            };
          })
        );
      },
      clearQueue: function (a) {
        return this.queue(a || "fx", []);
      },
      promise: function (a, c) {
        var d,
          e = 1,
          f = p.Deferred(),
          g = this,
          h = this.length,
          i = function () {
            --e || f.resolveWith(g, [g]);
          };
        typeof a != "string" && ((c = a), (a = b)), (a = a || "fx");
        while (h--)
          (d = p._data(g[h], a + "queueHooks")),
            d && d.empty && (e++, d.empty.add(i));
        return i(), f.promise(c);
      },
    });
  var L,
    M,
    N,
    O = /[\t\r\n]/g,
    P = /\r/g,
    Q = /^(?:button|input)$/i,
    R = /^(?:button|input|object|select|textarea)$/i,
    S = /^a(?:rea|)$/i,
    T =
      /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    U = p.support.getSetAttribute;
  p.fn.extend({
    attr: function (a, b) {
      return p.access(this, p.attr, a, b, arguments.length > 1);
    },
    removeAttr: function (a) {
      return this.each(function () {
        p.removeAttr(this, a);
      });
    },
    prop: function (a, b) {
      return p.access(this, p.prop, a, b, arguments.length > 1);
    },
    removeProp: function (a) {
      return (
        (a = p.propFix[a] || a),
        this.each(function () {
          try {
            (this[a] = b), delete this[a];
          } catch (c) {}
        })
      );
    },
    addClass: function (a) {
      var b, c, d, e, f, g, h;
      if (p.isFunction(a))
        return this.each(function (b) {
          p(this).addClass(a.call(this, b, this.className));
        });
      if (a && typeof a == "string") {
        b = a.split(s);
        for (c = 0, d = this.length; c < d; c++) {
          e = this[c];
          if (e.nodeType === 1)
            if (!e.className && b.length === 1) e.className = a;
            else {
              f = " " + e.className + " ";
              for (g = 0, h = b.length; g < h; g++)
                f.indexOf(" " + b[g] + " ") < 0 && (f += b[g] + " ");
              e.className = p.trim(f);
            }
        }
      }
      return this;
    },
    removeClass: function (a) {
      var c, d, e, f, g, h, i;
      if (p.isFunction(a))
        return this.each(function (b) {
          p(this).removeClass(a.call(this, b, this.className));
        });
      if ((a && typeof a == "string") || a === b) {
        c = (a || "").split(s);
        for (h = 0, i = this.length; h < i; h++) {
          e = this[h];
          if (e.nodeType === 1 && e.className) {
            d = (" " + e.className + " ").replace(O, " ");
            for (f = 0, g = c.length; f < g; f++)
              while (d.indexOf(" " + c[f] + " ") >= 0)
                d = d.replace(" " + c[f] + " ", " ");
            e.className = a ? p.trim(d) : "";
          }
        }
      }
      return this;
    },
    toggleClass: function (a, b) {
      var c = typeof a,
        d = typeof b == "boolean";
      return p.isFunction(a)
        ? this.each(function (c) {
            p(this).toggleClass(a.call(this, c, this.className, b), b);
          })
        : this.each(function () {
            if (c === "string") {
              var e,
                f = 0,
                g = p(this),
                h = b,
                i = a.split(s);
              while ((e = i[f++]))
                (h = d ? h : !g.hasClass(e)),
                  g[h ? "addClass" : "removeClass"](e);
            } else if (c === "undefined" || c === "boolean") this.className && p._data(this, "__className__", this.className), (this.className = this.className || a === !1 ? "" : p._data(this, "__className__") || "");
          });
    },
    hasClass: function (a) {
      var b = " " + a + " ",
        c = 0,
        d = this.length;
      for (; c < d; c++)
        if (
          this[c].nodeType === 1 &&
          (" " + this[c].className + " ").replace(O, " ").indexOf(b) >= 0
        )
          return !0;
      return !1;
    },
    val: function (a) {
      var c,
        d,
        e,
        f = this[0];
      if (!arguments.length) {
        if (f)
          return (
            (c = p.valHooks[f.type] || p.valHooks[f.nodeName.toLowerCase()]),
            c && "get" in c && (d = c.get(f, "value")) !== b
              ? d
              : ((d = f.value),
                typeof d == "string" ? d.replace(P, "") : d == null ? "" : d)
          );
        return;
      }
      return (
        (e = p.isFunction(a)),
        this.each(function (d) {
          var f,
            g = p(this);
          if (this.nodeType !== 1) return;
          e ? (f = a.call(this, d, g.val())) : (f = a),
            f == null
              ? (f = "")
              : typeof f == "number"
              ? (f += "")
              : p.isArray(f) &&
                (f = p.map(f, function (a) {
                  return a == null ? "" : a + "";
                })),
            (c =
              p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]);
          if (!c || !("set" in c) || c.set(this, f, "value") === b)
            this.value = f;
        })
      );
    },
  }),
    p.extend({
      valHooks: {
        option: {
          get: function (a) {
            var b = a.attributes.value;
            return !b || b.specified ? a.value : a.text;
          },
        },
        select: {
          get: function (a) {
            var b,
              c,
              d,
              e,
              f = a.selectedIndex,
              g = [],
              h = a.options,
              i = a.type === "select-one";
            if (f < 0) return null;
            (c = i ? f : 0), (d = i ? f + 1 : h.length);
            for (; c < d; c++) {
              e = h[c];
              if (
                e.selected &&
                (p.support.optDisabled
                  ? !e.disabled
                  : e.getAttribute("disabled") === null) &&
                (!e.parentNode.disabled ||
                  !p.nodeName(e.parentNode, "optgroup"))
              ) {
                b = p(e).val();
                if (i) return b;
                g.push(b);
              }
            }
            return i && !g.length && h.length ? p(h[f]).val() : g;
          },
          set: function (a, b) {
            var c = p.makeArray(b);
            return (
              p(a)
                .find("option")
                .each(function () {
                  this.selected = p.inArray(p(this).val(), c) >= 0;
                }),
              c.length || (a.selectedIndex = -1),
              c
            );
          },
        },
      },
      attrFn: {},
      attr: function (a, c, d, e) {
        var f,
          g,
          h,
          i = a.nodeType;
        if (!a || i === 3 || i === 8 || i === 2) return;
        if (e && p.isFunction(p.fn[c])) return p(a)[c](d);
        if (typeof a.getAttribute == "undefined") return p.prop(a, c, d);
        (h = i !== 1 || !p.isXMLDoc(a)),
          h &&
            ((c = c.toLowerCase()),
            (g = p.attrHooks[c] || (T.test(c) ? M : L)));
        if (d !== b) {
          if (d === null) {
            p.removeAttr(a, c);
            return;
          }
          return g && "set" in g && h && (f = g.set(a, d, c)) !== b
            ? f
            : (a.setAttribute(c, d + ""), d);
        }
        return g && "get" in g && h && (f = g.get(a, c)) !== null
          ? f
          : ((f = a.getAttribute(c)), f === null ? b : f);
      },
      removeAttr: function (a, b) {
        var c,
          d,
          e,
          f,
          g = 0;
        if (b && a.nodeType === 1) {
          d = b.split(s);
          for (; g < d.length; g++)
            (e = d[g]),
              e &&
                ((c = p.propFix[e] || e),
                (f = T.test(e)),
                f || p.attr(a, e, ""),
                a.removeAttribute(U ? e : c),
                f && c in a && (a[c] = !1));
        }
      },
      attrHooks: {
        type: {
          set: function (a, b) {
            if (Q.test(a.nodeName) && a.parentNode)
              p.error("type property can't be changed");
            else if (
              !p.support.radioValue &&
              b === "radio" &&
              p.nodeName(a, "input")
            ) {
              var c = a.value;
              return a.setAttribute("type", b), c && (a.value = c), b;
            }
          },
        },
        value: {
          get: function (a, b) {
            return L && p.nodeName(a, "button")
              ? L.get(a, b)
              : b in a
              ? a.value
              : null;
          },
          set: function (a, b, c) {
            if (L && p.nodeName(a, "button")) return L.set(a, b, c);
            a.value = b;
          },
        },
      },
      propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable",
      },
      prop: function (a, c, d) {
        var e,
          f,
          g,
          h = a.nodeType;
        if (!a || h === 3 || h === 8 || h === 2) return;
        return (
          (g = h !== 1 || !p.isXMLDoc(a)),
          g && ((c = p.propFix[c] || c), (f = p.propHooks[c])),
          d !== b
            ? f && "set" in f && (e = f.set(a, d, c)) !== b
              ? e
              : (a[c] = d)
            : f && "get" in f && (e = f.get(a, c)) !== null
            ? e
            : a[c]
        );
      },
      propHooks: {
        tabIndex: {
          get: function (a) {
            var c = a.getAttributeNode("tabindex");
            return c && c.specified
              ? parseInt(c.value, 10)
              : R.test(a.nodeName) || (S.test(a.nodeName) && a.href)
              ? 0
              : b;
          },
        },
      },
    }),
    (M = {
      get: function (a, c) {
        var d,
          e = p.prop(a, c);
        return e === !0 ||
          (typeof e != "boolean" &&
            (d = a.getAttributeNode(c)) &&
            d.nodeValue !== !1)
          ? c.toLowerCase()
          : b;
      },
      set: function (a, b, c) {
        var d;
        return (
          b === !1
            ? p.removeAttr(a, c)
            : ((d = p.propFix[c] || c),
              d in a && (a[d] = !0),
              a.setAttribute(c, c.toLowerCase())),
          c
        );
      },
    }),
    U ||
      ((N = { name: !0, id: !0, coords: !0 }),
      (L = p.valHooks.button =
        {
          get: function (a, c) {
            var d;
            return (
              (d = a.getAttributeNode(c)),
              d && (N[c] ? d.value !== "" : d.specified) ? d.value : b
            );
          },
          set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return (
              d || ((d = e.createAttribute(c)), a.setAttributeNode(d)),
              (d.value = b + "")
            );
          },
        }),
      p.each(["width", "height"], function (a, b) {
        p.attrHooks[b] = p.extend(p.attrHooks[b], {
          set: function (a, c) {
            if (c === "") return a.setAttribute(b, "auto"), c;
          },
        });
      }),
      (p.attrHooks.contenteditable = {
        get: L.get,
        set: function (a, b, c) {
          b === "" && (b = "false"), L.set(a, b, c);
        },
      })),
    p.support.hrefNormalized ||
      p.each(["href", "src", "width", "height"], function (a, c) {
        p.attrHooks[c] = p.extend(p.attrHooks[c], {
          get: function (a) {
            var d = a.getAttribute(c, 2);
            return d === null ? b : d;
          },
        });
      }),
    p.support.style ||
      (p.attrHooks.style = {
        get: function (a) {
          return a.style.cssText.toLowerCase() || b;
        },
        set: function (a, b) {
          return (a.style.cssText = b + "");
        },
      }),
    p.support.optSelected ||
      (p.propHooks.selected = p.extend(p.propHooks.selected, {
        get: function (a) {
          var b = a.parentNode;
          return (
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex),
            null
          );
        },
      })),
    p.support.enctype || (p.propFix.enctype = "encoding"),
    p.support.checkOn ||
      p.each(["radio", "checkbox"], function () {
        p.valHooks[this] = {
          get: function (a) {
            return a.getAttribute("value") === null ? "on" : a.value;
          },
        };
      }),
    p.each(["radio", "checkbox"], function () {
      p.valHooks[this] = p.extend(p.valHooks[this], {
        set: function (a, b) {
          if (p.isArray(b)) return (a.checked = p.inArray(p(a).val(), b) >= 0);
        },
      });
    });
  var V = /^(?:textarea|input|select)$/i,
    W = /^([^\.]*|)(?:\.(.+)|)$/,
    X = /(?:^|\s)hover(\.\S+|)\b/,
    Y = /^key/,
    Z = /^(?:mouse|contextmenu)|click/,
    $ = /^(?:focusinfocus|focusoutblur)$/,
    _ = function (a) {
      return p.event.special.hover
        ? a
        : a.replace(X, "mouseenter$1 mouseleave$1");
    };
  (p.event = {
    add: function (a, c, d, e, f) {
      var g, h, i, j, k, l, m, n, o, q, r;
      if (a.nodeType === 3 || a.nodeType === 8 || !c || !d || !(g = p._data(a)))
        return;
      d.handler && ((o = d), (d = o.handler), (f = o.selector)),
        d.guid || (d.guid = p.guid++),
        (i = g.events),
        i || (g.events = i = {}),
        (h = g.handle),
        h ||
          ((g.handle = h =
            function (a) {
              return typeof p != "undefined" &&
                (!a || p.event.triggered !== a.type)
                ? p.event.dispatch.apply(h.elem, arguments)
                : b;
            }),
          (h.elem = a)),
        (c = p.trim(_(c)).split(" "));
      for (j = 0; j < c.length; j++) {
        (k = W.exec(c[j]) || []),
          (l = k[1]),
          (m = (k[2] || "").split(".").sort()),
          (r = p.event.special[l] || {}),
          (l = (f ? r.delegateType : r.bindType) || l),
          (r = p.event.special[l] || {}),
          (n = p.extend(
            {
              type: l,
              origType: k[1],
              data: e,
              handler: d,
              guid: d.guid,
              selector: f,
              needsContext: f && p.expr.match.needsContext.test(f),
              namespace: m.join("."),
            },
            o
          )),
          (q = i[l]);
        if (!q) {
          (q = i[l] = []), (q.delegateCount = 0);
          if (!r.setup || r.setup.call(a, e, m, h) === !1)
            a.addEventListener
              ? a.addEventListener(l, h, !1)
              : a.attachEvent && a.attachEvent("on" + l, h);
        }
        r.add &&
          (r.add.call(a, n), n.handler.guid || (n.handler.guid = d.guid)),
          f ? q.splice(q.delegateCount++, 0, n) : q.push(n),
          (p.event.global[l] = !0);
      }
      a = null;
    },
    global: {},
    remove: function (a, b, c, d, e) {
      var f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        q,
        r = p.hasData(a) && p._data(a);
      if (!r || !(m = r.events)) return;
      b = p.trim(_(b || "")).split(" ");
      for (f = 0; f < b.length; f++) {
        (g = W.exec(b[f]) || []), (h = i = g[1]), (j = g[2]);
        if (!h) {
          for (h in m) p.event.remove(a, h + b[f], c, d, !0);
          continue;
        }
        (n = p.event.special[h] || {}),
          (h = (d ? n.delegateType : n.bindType) || h),
          (o = m[h] || []),
          (k = o.length),
          (j = j
            ? new RegExp(
                "(^|\\.)" +
                  j.split(".").sort().join("\\.(?:.*\\.|)") +
                  "(\\.|$)"
              )
            : null);
        for (l = 0; l < o.length; l++)
          (q = o[l]),
            (e || i === q.origType) &&
              (!c || c.guid === q.guid) &&
              (!j || j.test(q.namespace)) &&
              (!d || d === q.selector || (d === "**" && q.selector)) &&
              (o.splice(l--, 1),
              q.selector && o.delegateCount--,
              n.remove && n.remove.call(a, q));
        o.length === 0 &&
          k !== o.length &&
          ((!n.teardown || n.teardown.call(a, j, r.handle) === !1) &&
            p.removeEvent(a, h, r.handle),
          delete m[h]);
      }
      p.isEmptyObject(m) && (delete r.handle, p.removeData(a, "events", !0));
    },
    customEvent: { getData: !0, setData: !0, changeData: !0 },
    trigger: function (c, d, f, g) {
      if (!f || (f.nodeType !== 3 && f.nodeType !== 8)) {
        var h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          q,
          r,
          s = c.type || c,
          t = [];
        if ($.test(s + p.event.triggered)) return;
        s.indexOf("!") >= 0 && ((s = s.slice(0, -1)), (i = !0)),
          s.indexOf(".") >= 0 &&
            ((t = s.split(".")), (s = t.shift()), t.sort());
        if ((!f || p.event.customEvent[s]) && !p.event.global[s]) return;
        (c =
          typeof c == "object"
            ? c[p.expando]
              ? c
              : new p.Event(s, c)
            : new p.Event(s)),
          (c.type = s),
          (c.isTrigger = !0),
          (c.exclusive = i),
          (c.namespace = t.join(".")),
          (c.namespace_re = c.namespace
            ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (m = s.indexOf(":") < 0 ? "on" + s : "");
        if (!f) {
          h = p.cache;
          for (j in h)
            h[j].events &&
              h[j].events[s] &&
              p.event.trigger(c, d, h[j].handle.elem, !0);
          return;
        }
        (c.result = b),
          c.target || (c.target = f),
          (d = d != null ? p.makeArray(d) : []),
          d.unshift(c),
          (n = p.event.special[s] || {});
        if (n.trigger && n.trigger.apply(f, d) === !1) return;
        q = [[f, n.bindType || s]];
        if (!g && !n.noBubble && !p.isWindow(f)) {
          (r = n.delegateType || s), (k = $.test(r + s) ? f : f.parentNode);
          for (l = f; k; k = k.parentNode) q.push([k, r]), (l = k);
          l === (f.ownerDocument || e) &&
            q.push([l.defaultView || l.parentWindow || a, r]);
        }
        for (j = 0; j < q.length && !c.isPropagationStopped(); j++)
          (k = q[j][0]),
            (c.type = q[j][1]),
            (o = (p._data(k, "events") || {})[c.type] && p._data(k, "handle")),
            o && o.apply(k, d),
            (o = m && k[m]),
            o &&
              p.acceptData(k) &&
              o.apply &&
              o.apply(k, d) === !1 &&
              c.preventDefault();
        return (
          (c.type = s),
          !g &&
            !c.isDefaultPrevented() &&
            (!n._default || n._default.apply(f.ownerDocument, d) === !1) &&
            (s !== "click" || !p.nodeName(f, "a")) &&
            p.acceptData(f) &&
            m &&
            f[s] &&
            ((s !== "focus" && s !== "blur") || c.target.offsetWidth !== 0) &&
            !p.isWindow(f) &&
            ((l = f[m]),
            l && (f[m] = null),
            (p.event.triggered = s),
            f[s](),
            (p.event.triggered = b),
            l && (f[m] = l)),
          c.result
        );
      }
      return;
    },
    dispatch: function (c) {
      c = p.event.fix(c || a.event);
      var d,
        e,
        f,
        g,
        h,
        i,
        j,
        l,
        m,
        n,
        o = (p._data(this, "events") || {})[c.type] || [],
        q = o.delegateCount,
        r = k.call(arguments),
        s = !c.exclusive && !c.namespace,
        t = p.event.special[c.type] || {},
        u = [];
      (r[0] = c), (c.delegateTarget = this);
      if (t.preDispatch && t.preDispatch.call(this, c) === !1) return;
      if (q && (!c.button || c.type !== "click"))
        for (f = c.target; f != this; f = f.parentNode || this)
          if (f.disabled !== !0 || c.type !== "click") {
            (h = {}), (j = []);
            for (d = 0; d < q; d++)
              (l = o[d]),
                (m = l.selector),
                h[m] === b &&
                  (h[m] = l.needsContext
                    ? p(m, this).index(f) >= 0
                    : p.find(m, this, null, [f]).length),
                h[m] && j.push(l);
            j.length && u.push({ elem: f, matches: j });
          }
      o.length > q && u.push({ elem: this, matches: o.slice(q) });
      for (d = 0; d < u.length && !c.isPropagationStopped(); d++) {
        (i = u[d]), (c.currentTarget = i.elem);
        for (
          e = 0;
          e < i.matches.length && !c.isImmediatePropagationStopped();
          e++
        ) {
          l = i.matches[e];
          if (
            s ||
            (!c.namespace && !l.namespace) ||
            (c.namespace_re && c.namespace_re.test(l.namespace))
          )
            (c.data = l.data),
              (c.handleObj = l),
              (g = (
                (p.event.special[l.origType] || {}).handle || l.handler
              ).apply(i.elem, r)),
              g !== b &&
                ((c.result = g),
                g === !1 && (c.preventDefault(), c.stopPropagation()));
        }
      }
      return t.postDispatch && t.postDispatch.call(this, c), c.result;
    },
    props:
      "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (a, b) {
        return (
          a.which == null &&
            (a.which = b.charCode != null ? b.charCode : b.keyCode),
          a
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (a, c) {
        var d,
          f,
          g,
          h = c.button,
          i = c.fromElement;
        return (
          a.pageX == null &&
            c.clientX != null &&
            ((d = a.target.ownerDocument || e),
            (f = d.documentElement),
            (g = d.body),
            (a.pageX =
              c.clientX +
              ((f && f.scrollLeft) || (g && g.scrollLeft) || 0) -
              ((f && f.clientLeft) || (g && g.clientLeft) || 0)),
            (a.pageY =
              c.clientY +
              ((f && f.scrollTop) || (g && g.scrollTop) || 0) -
              ((f && f.clientTop) || (g && g.clientTop) || 0))),
          !a.relatedTarget &&
            i &&
            (a.relatedTarget = i === a.target ? c.toElement : i),
          !a.which &&
            h !== b &&
            (a.which = h & 1 ? 1 : h & 2 ? 3 : h & 4 ? 2 : 0),
          a
        );
      },
    },
    fix: function (a) {
      if (a[p.expando]) return a;
      var b,
        c,
        d = a,
        f = p.event.fixHooks[a.type] || {},
        g = f.props ? this.props.concat(f.props) : this.props;
      a = p.Event(d);
      for (b = g.length; b; ) (c = g[--b]), (a[c] = d[c]);
      return (
        a.target || (a.target = d.srcElement || e),
        a.target.nodeType === 3 && (a.target = a.target.parentNode),
        (a.metaKey = !!a.metaKey),
        f.filter ? f.filter(a, d) : a
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: { delegateType: "focusin" },
      blur: { delegateType: "focusout" },
      beforeunload: {
        setup: function (a, b, c) {
          p.isWindow(this) && (this.onbeforeunload = c);
        },
        teardown: function (a, b) {
          this.onbeforeunload === b && (this.onbeforeunload = null);
        },
      },
    },
    simulate: function (a, b, c, d) {
      var e = p.extend(new p.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {},
      });
      d ? p.event.trigger(e, null, b) : p.event.dispatch.call(b, e),
        e.isDefaultPrevented() && c.preventDefault();
    },
  }),
    (p.event.handle = p.event.dispatch),
    (p.removeEvent = e.removeEventListener
      ? function (a, b, c) {
          a.removeEventListener && a.removeEventListener(b, c, !1);
        }
      : function (a, b, c) {
          var d = "on" + b;
          a.detachEvent &&
            (typeof a[d] == "undefined" && (a[d] = null), a.detachEvent(d, c));
        }),
    (p.Event = function (a, b) {
      if (this instanceof p.Event)
        a && a.type
          ? ((this.originalEvent = a),
            (this.type = a.type),
            (this.isDefaultPrevented =
              a.defaultPrevented ||
              a.returnValue === !1 ||
              (a.getPreventDefault && a.getPreventDefault())
                ? bb
                : ba))
          : (this.type = a),
          b && p.extend(this, b),
          (this.timeStamp = (a && a.timeStamp) || p.now()),
          (this[p.expando] = !0);
      else return new p.Event(a, b);
    }),
    (p.Event.prototype = {
      preventDefault: function () {
        this.isDefaultPrevented = bb;
        var a = this.originalEvent;
        if (!a) return;
        a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
      },
      stopPropagation: function () {
        this.isPropagationStopped = bb;
        var a = this.originalEvent;
        if (!a) return;
        a.stopPropagation && a.stopPropagation(), (a.cancelBubble = !0);
      },
      stopImmediatePropagation: function () {
        (this.isImmediatePropagationStopped = bb), this.stopPropagation();
      },
      isDefaultPrevented: ba,
      isPropagationStopped: ba,
      isImmediatePropagationStopped: ba,
    }),
    p.each(
      { mouseenter: "mouseover", mouseleave: "mouseout" },
      function (a, b) {
        p.event.special[a] = {
          delegateType: b,
          bindType: b,
          handle: function (a) {
            var c,
              d = this,
              e = a.relatedTarget,
              f = a.handleObj,
              g = f.selector;
            if (!e || (e !== d && !p.contains(d, e)))
              (a.type = f.origType),
                (c = f.handler.apply(this, arguments)),
                (a.type = b);
            return c;
          },
        };
      }
    ),
    p.support.submitBubbles ||
      (p.event.special.submit = {
        setup: function () {
          if (p.nodeName(this, "form")) return !1;
          p.event.add(this, "click._submit keypress._submit", function (a) {
            var c = a.target,
              d =
                p.nodeName(c, "input") || p.nodeName(c, "button") ? c.form : b;
            d &&
              !p._data(d, "_submit_attached") &&
              (p.event.add(d, "submit._submit", function (a) {
                a._submit_bubble = !0;
              }),
              p._data(d, "_submit_attached", !0));
          });
        },
        postDispatch: function (a) {
          a._submit_bubble &&
            (delete a._submit_bubble,
            this.parentNode &&
              !a.isTrigger &&
              p.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function () {
          if (p.nodeName(this, "form")) return !1;
          p.event.remove(this, "._submit");
        },
      }),
    p.support.changeBubbles ||
      (p.event.special.change = {
        setup: function () {
          if (V.test(this.nodeName)) {
            if (this.type === "checkbox" || this.type === "radio")
              p.event.add(this, "propertychange._change", function (a) {
                a.originalEvent.propertyName === "checked" &&
                  (this._just_changed = !0);
              }),
                p.event.add(this, "click._change", function (a) {
                  this._just_changed &&
                    !a.isTrigger &&
                    (this._just_changed = !1),
                    p.event.simulate("change", this, a, !0);
                });
            return !1;
          }
          p.event.add(this, "beforeactivate._change", function (a) {
            var b = a.target;
            V.test(b.nodeName) &&
              !p._data(b, "_change_attached") &&
              (p.event.add(b, "change._change", function (a) {
                this.parentNode &&
                  !a.isSimulated &&
                  !a.isTrigger &&
                  p.event.simulate("change", this.parentNode, a, !0);
              }),
              p._data(b, "_change_attached", !0));
          });
        },
        handle: function (a) {
          var b = a.target;
          if (
            this !== b ||
            a.isSimulated ||
            a.isTrigger ||
            (b.type !== "radio" && b.type !== "checkbox")
          )
            return a.handleObj.handler.apply(this, arguments);
        },
        teardown: function () {
          return p.event.remove(this, "._change"), !V.test(this.nodeName);
        },
      }),
    p.support.focusinBubbles ||
      p.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = 0,
          d = function (a) {
            p.event.simulate(b, a.target, p.event.fix(a), !0);
          };
        p.event.special[b] = {
          setup: function () {
            c++ === 0 && e.addEventListener(a, d, !0);
          },
          teardown: function () {
            --c === 0 && e.removeEventListener(a, d, !0);
          },
        };
      }),
    p.fn.extend({
      on: function (a, c, d, e, f) {
        var g, h;
        if (typeof a == "object") {
          typeof c != "string" && ((d = d || c), (c = b));
          for (h in a) this.on(h, c, d, a[h], f);
          return this;
        }
        d == null && e == null
          ? ((e = c), (d = c = b))
          : e == null &&
            (typeof c == "string"
              ? ((e = d), (d = b))
              : ((e = d), (d = c), (c = b)));
        if (e === !1) e = ba;
        else if (!e) return this;
        return (
          f === 1 &&
            ((g = e),
            (e = function (a) {
              return p().off(a), g.apply(this, arguments);
            }),
            (e.guid = g.guid || (g.guid = p.guid++))),
          this.each(function () {
            p.event.add(this, a, e, d, c);
          })
        );
      },
      one: function (a, b, c, d) {
        return this.on(a, b, c, d, 1);
      },
      off: function (a, c, d) {
        var e, f;
        if (a && a.preventDefault && a.handleObj)
          return (
            (e = a.handleObj),
            p(a.delegateTarget).off(
              e.namespace ? e.origType + "." + e.namespace : e.origType,
              e.selector,
              e.handler
            ),
            this
          );
        if (typeof a == "object") {
          for (f in a) this.off(f, c, a[f]);
          return this;
        }
        if (c === !1 || typeof c == "function") (d = c), (c = b);
        return (
          d === !1 && (d = ba),
          this.each(function () {
            p.event.remove(this, a, d, c);
          })
        );
      },
      bind: function (a, b, c) {
        return this.on(a, null, b, c);
      },
      unbind: function (a, b) {
        return this.off(a, null, b);
      },
      live: function (a, b, c) {
        return p(this.context).on(a, this.selector, b, c), this;
      },
      die: function (a, b) {
        return p(this.context).off(a, this.selector || "**", b), this;
      },
      delegate: function (a, b, c, d) {
        return this.on(b, a, c, d);
      },
      undelegate: function (a, b, c) {
        return arguments.length === 1
          ? this.off(a, "**")
          : this.off(b, a || "**", c);
      },
      trigger: function (a, b) {
        return this.each(function () {
          p.event.trigger(a, b, this);
        });
      },
      triggerHandler: function (a, b) {
        if (this[0]) return p.event.trigger(a, b, this[0], !0);
      },
      toggle: function (a) {
        var b = arguments,
          c = a.guid || p.guid++,
          d = 0,
          e = function (c) {
            var e = (p._data(this, "lastToggle" + a.guid) || 0) % d;
            return (
              p._data(this, "lastToggle" + a.guid, e + 1),
              c.preventDefault(),
              b[e].apply(this, arguments) || !1
            );
          };
        e.guid = c;
        while (d < b.length) b[d++].guid = c;
        return this.click(e);
      },
      hover: function (a, b) {
        return this.mouseenter(a).mouseleave(b || a);
      },
    }),
    p.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (a, b) {
        (p.fn[b] = function (a, c) {
          return (
            c == null && ((c = a), (a = null)),
            arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
          );
        }),
          Y.test(b) && (p.event.fixHooks[b] = p.event.keyHooks),
          Z.test(b) && (p.event.fixHooks[b] = p.event.mouseHooks);
      }
    ),
    (function (a, b) {
      function bc(a, b, c, d) {
        (c = c || []), (b = b || r);
        var e,
          f,
          i,
          j,
          k = b.nodeType;
        if (!a || typeof a != "string") return c;
        if (k !== 1 && k !== 9) return [];
        i = g(b);
        if (!i && !d)
          if ((e = P.exec(a)))
            if ((j = e[1])) {
              if (k === 9) {
                f = b.getElementById(j);
                if (!f || !f.parentNode) return c;
                if (f.id === j) return c.push(f), c;
              } else if (
                b.ownerDocument &&
                (f = b.ownerDocument.getElementById(j)) &&
                h(b, f) &&
                f.id === j
              )
                return c.push(f), c;
            } else {
              if (e[2])
                return w.apply(c, x.call(b.getElementsByTagName(a), 0)), c;
              if ((j = e[3]) && _ && b.getElementsByClassName)
                return w.apply(c, x.call(b.getElementsByClassName(j), 0)), c;
            }
        return bp(a.replace(L, "$1"), b, c, d, i);
      }
      function bd(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return c === "input" && b.type === a;
        };
      }
      function be(a) {
        return function (b) {
          var c = b.nodeName.toLowerCase();
          return (c === "input" || c === "button") && b.type === a;
        };
      }
      function bf(a) {
        return z(function (b) {
          return (
            (b = +b),
            z(function (c, d) {
              var e,
                f = a([], c.length, b),
                g = f.length;
              while (g--) c[(e = f[g])] && (c[e] = !(d[e] = c[e]));
            })
          );
        });
      }
      function bg(a, b, c) {
        if (a === b) return c;
        var d = a.nextSibling;
        while (d) {
          if (d === b) return -1;
          d = d.nextSibling;
        }
        return 1;
      }
      function bh(a, b) {
        var c,
          d,
          f,
          g,
          h,
          i,
          j,
          k = C[o][a];
        if (k) return b ? 0 : k.slice(0);
        (h = a), (i = []), (j = e.preFilter);
        while (h) {
          if (!c || (d = M.exec(h)))
            d && (h = h.slice(d[0].length)), i.push((f = []));
          c = !1;
          if ((d = N.exec(h)))
            f.push((c = new q(d.shift()))),
              (h = h.slice(c.length)),
              (c.type = d[0].replace(L, " "));
          for (g in e.filter)
            (d = W[g].exec(h)) &&
              (!j[g] || (d = j[g](d, r, !0))) &&
              (f.push((c = new q(d.shift()))),
              (h = h.slice(c.length)),
              (c.type = g),
              (c.matches = d));
          if (!c) break;
        }
        return b ? h.length : h ? bc.error(a) : C(a, i).slice(0);
      }
      function bi(a, b, d) {
        var e = b.dir,
          f = d && b.dir === "parentNode",
          g = u++;
        return b.first
          ? function (b, c, d) {
              while ((b = b[e])) if (f || b.nodeType === 1) return a(b, c, d);
            }
          : function (b, d, h) {
              if (!h) {
                var i,
                  j = t + " " + g + " ",
                  k = j + c;
                while ((b = b[e]))
                  if (f || b.nodeType === 1) {
                    if ((i = b[o]) === k) return b.sizset;
                    if (typeof i == "string" && i.indexOf(j) === 0) {
                      if (b.sizset) return b;
                    } else {
                      b[o] = k;
                      if (a(b, d, h)) return (b.sizset = !0), b;
                      b.sizset = !1;
                    }
                  }
              } else
                while ((b = b[e]))
                  if (f || b.nodeType === 1) if (a(b, d, h)) return b;
            };
      }
      function bj(a) {
        return a.length > 1
          ? function (b, c, d) {
              var e = a.length;
              while (e--) if (!a[e](b, c, d)) return !1;
              return !0;
            }
          : a[0];
      }
      function bk(a, b, c, d, e) {
        var f,
          g = [],
          h = 0,
          i = a.length,
          j = b != null;
        for (; h < i; h++)
          if ((f = a[h])) if (!c || c(f, d, e)) g.push(f), j && b.push(h);
        return g;
      }
      function bl(a, b, c, d, e, f) {
        return (
          d && !d[o] && (d = bl(d)),
          e && !e[o] && (e = bl(e, f)),
          z(function (f, g, h, i) {
            if (f && e) return;
            var j,
              k,
              l,
              m = [],
              n = [],
              o = g.length,
              p = f || bo(b || "*", h.nodeType ? [h] : h, [], f),
              q = a && (f || !b) ? bk(p, m, a, h, i) : p,
              r = c ? (e || (f ? a : o || d) ? [] : g) : q;
            c && c(q, r, h, i);
            if (d) {
              (l = bk(r, n)), d(l, [], h, i), (j = l.length);
              while (j--) if ((k = l[j])) r[n[j]] = !(q[n[j]] = k);
            }
            if (f) {
              j = a && r.length;
              while (j--) if ((k = r[j])) f[m[j]] = !(g[m[j]] = k);
            } else (r = bk(r === g ? r.splice(o, r.length) : r)), e ? e(null, g, r, i) : w.apply(g, r);
          })
        );
      }
      function bm(a) {
        var b,
          c,
          d,
          f = a.length,
          g = e.relative[a[0].type],
          h = g || e.relative[" "],
          i = g ? 1 : 0,
          j = bi(
            function (a) {
              return a === b;
            },
            h,
            !0
          ),
          k = bi(
            function (a) {
              return y.call(b, a) > -1;
            },
            h,
            !0
          ),
          m = [
            function (a, c, d) {
              return (
                (!g && (d || c !== l)) ||
                ((b = c).nodeType ? j(a, c, d) : k(a, c, d))
              );
            },
          ];
        for (; i < f; i++)
          if ((c = e.relative[a[i].type])) m = [bi(bj(m), c)];
          else {
            c = e.filter[a[i].type].apply(null, a[i].matches);
            if (c[o]) {
              d = ++i;
              for (; d < f; d++) if (e.relative[a[d].type]) break;
              return bl(
                i > 1 && bj(m),
                i > 1 &&
                  a
                    .slice(0, i - 1)
                    .join("")
                    .replace(L, "$1"),
                c,
                i < d && bm(a.slice(i, d)),
                d < f && bm((a = a.slice(d))),
                d < f && a.join("")
              );
            }
            m.push(c);
          }
        return bj(m);
      }
      function bn(a, b) {
        var d = b.length > 0,
          f = a.length > 0,
          g = function (h, i, j, k, m) {
            var n,
              o,
              p,
              q = [],
              s = 0,
              u = "0",
              x = h && [],
              y = m != null,
              z = l,
              A = h || (f && e.find.TAG("*", (m && i.parentNode) || i)),
              B = (t += z == null ? 1 : Math.E);
            y && ((l = i !== r && i), (c = g.el));
            for (; (n = A[u]) != null; u++) {
              if (f && n) {
                for (o = 0; (p = a[o]); o++)
                  if (p(n, i, j)) {
                    k.push(n);
                    break;
                  }
                y && ((t = B), (c = ++g.el));
              }
              d && ((n = !p && n) && s--, h && x.push(n));
            }
            s += u;
            if (d && u !== s) {
              for (o = 0; (p = b[o]); o++) p(x, q, i, j);
              if (h) {
                if (s > 0) while (u--) !x[u] && !q[u] && (q[u] = v.call(k));
                q = bk(q);
              }
              w.apply(k, q),
                y && !h && q.length > 0 && s + b.length > 1 && bc.uniqueSort(k);
            }
            return y && ((t = B), (l = z)), x;
          };
        return (g.el = 0), d ? z(g) : g;
      }
      function bo(a, b, c, d) {
        var e = 0,
          f = b.length;
        for (; e < f; e++) bc(a, b[e], c, d);
        return c;
      }
      function bp(a, b, c, d, f) {
        var g,
          h,
          j,
          k,
          l,
          m = bh(a),
          n = m.length;
        if (!d && m.length === 1) {
          h = m[0] = m[0].slice(0);
          if (
            h.length > 2 &&
            (j = h[0]).type === "ID" &&
            b.nodeType === 9 &&
            !f &&
            e.relative[h[1].type]
          ) {
            b = e.find.ID(j.matches[0].replace(V, ""), b, f)[0];
            if (!b) return c;
            a = a.slice(h.shift().length);
          }
          for (g = W.POS.test(a) ? -1 : h.length - 1; g >= 0; g--) {
            j = h[g];
            if (e.relative[(k = j.type)]) break;
            if ((l = e.find[k]))
              if (
                (d = l(
                  j.matches[0].replace(V, ""),
                  (R.test(h[0].type) && b.parentNode) || b,
                  f
                ))
              ) {
                h.splice(g, 1), (a = d.length && h.join(""));
                if (!a) return w.apply(c, x.call(d, 0)), c;
                break;
              }
          }
        }
        return i(a, m)(d, b, f, c, R.test(a)), c;
      }
      function bq() {}
      var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = !0,
        n = "undefined",
        o = ("sizcache" + Math.random()).replace(".", ""),
        q = String,
        r = a.document,
        s = r.documentElement,
        t = 0,
        u = 0,
        v = [].pop,
        w = [].push,
        x = [].slice,
        y =
          [].indexOf ||
          function (a) {
            var b = 0,
              c = this.length;
            for (; b < c; b++) if (this[b] === a) return b;
            return -1;
          },
        z = function (a, b) {
          return (a[o] = b == null || b), a;
        },
        A = function () {
          var a = {},
            b = [];
          return z(function (c, d) {
            return b.push(c) > e.cacheLength && delete a[b.shift()], (a[c] = d);
          }, a);
        },
        B = A(),
        C = A(),
        D = A(),
        E = "[\\x20\\t\\r\\n\\f]",
        F = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
        G = F.replace("w", "w#"),
        H = "([*^$|!~]?=)",
        I =
          "\\[" +
          E +
          "*(" +
          F +
          ")" +
          E +
          "*(?:" +
          H +
          E +
          "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" +
          G +
          ")|)|)" +
          E +
          "*\\]",
        J =
          ":(" +
          F +
          ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" +
          I +
          ")|[^:]|\\\\.)*|.*))\\)|)",
        K =
          ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
          E +
          "*((?:-\\d)?\\d*)" +
          E +
          "*\\)|)(?=[^-]|$)",
        L = new RegExp("^" + E + "+|((?:^|[^\\\\])(?:\\\\.)*)" + E + "+$", "g"),
        M = new RegExp("^" + E + "*," + E + "*"),
        N = new RegExp("^" + E + "*([\\x20\\t\\r\\n\\f>+~])" + E + "*"),
        O = new RegExp(J),
        P = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
        Q = /^:not/,
        R = /[\x20\t\r\n\f]*[+~]/,
        S = /:not\($/,
        T = /h\d/i,
        U = /input|select|textarea|button/i,
        V = /\\(?!\\)/g,
        W = {
          ID: new RegExp("^#(" + F + ")"),
          CLASS: new RegExp("^\\.(" + F + ")"),
          NAME: new RegExp("^\\[name=['\"]?(" + F + ")['\"]?\\]"),
          TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
          ATTR: new RegExp("^" + I),
          PSEUDO: new RegExp("^" + J),
          POS: new RegExp(K, "i"),
          CHILD: new RegExp(
            "^:(only|nth|first|last)-child(?:\\(" +
              E +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              E +
              "*(?:([+-]|)" +
              E +
              "*(\\d+)|))" +
              E +
              "*\\)|)",
            "i"
          ),
          needsContext: new RegExp("^" + E + "*[>+~]|" + K, "i"),
        },
        X = function (a) {
          var b = r.createElement("div");
          try {
            return a(b);
          } catch (c) {
            return !1;
          } finally {
            b = null;
          }
        },
        Y = X(function (a) {
          return (
            a.appendChild(r.createComment("")),
            !a.getElementsByTagName("*").length
          );
        }),
        Z = X(function (a) {
          return (
            (a.innerHTML = "<a href='#'></a>"),
            a.firstChild &&
              typeof a.firstChild.getAttribute !== n &&
              a.firstChild.getAttribute("href") === "#"
          );
        }),
        $ = X(function (a) {
          a.innerHTML = "<select></select>";
          var b = typeof a.lastChild.getAttribute("multiple");
          return b !== "boolean" && b !== "string";
        }),
        _ = X(function (a) {
          return (
            (a.innerHTML =
              "<div class='hidden e'></div><div class='hidden'></div>"),
            !a.getElementsByClassName || !a.getElementsByClassName("e").length
              ? !1
              : ((a.lastChild.className = "e"),
                a.getElementsByClassName("e").length === 2)
          );
        }),
        ba = X(function (a) {
          (a.id = o + 0),
            (a.innerHTML =
              "<a name='" + o + "'></a><div name='" + o + "'></div>"),
            s.insertBefore(a, s.firstChild);
          var b =
            r.getElementsByName &&
            r.getElementsByName(o).length ===
              2 + r.getElementsByName(o + 0).length;
          return (d = !r.getElementById(o)), s.removeChild(a), b;
        });
      try {
        x.call(s.childNodes, 0)[0].nodeType;
      } catch (bb) {
        x = function (a) {
          var b,
            c = [];
          for (; (b = this[a]); a++) c.push(b);
          return c;
        };
      }
      (bc.matches = function (a, b) {
        return bc(a, null, null, b);
      }),
        (bc.matchesSelector = function (a, b) {
          return bc(b, null, null, [a]).length > 0;
        }),
        (f = bc.getText =
          function (a) {
            var b,
              c = "",
              d = 0,
              e = a.nodeType;
            if (e) {
              if (e === 1 || e === 9 || e === 11) {
                if (typeof a.textContent == "string") return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += f(a);
              } else if (e === 3 || e === 4) return a.nodeValue;
            } else for (; (b = a[d]); d++) c += f(b);
            return c;
          }),
        (g = bc.isXML =
          function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? b.nodeName !== "HTML" : !1;
          }),
        (h = bc.contains =
          s.contains
            ? function (a, b) {
                var c = a.nodeType === 9 ? a.documentElement : a,
                  d = b && b.parentNode;
                return (
                  a === d ||
                  !!(d && d.nodeType === 1 && c.contains && c.contains(d))
                );
              }
            : s.compareDocumentPosition
            ? function (a, b) {
                return b && !!(a.compareDocumentPosition(b) & 16);
              }
            : function (a, b) {
                while ((b = b.parentNode)) if (b === a) return !0;
                return !1;
              }),
        (bc.attr = function (a, b) {
          var c,
            d = g(a);
          return (
            d || (b = b.toLowerCase()),
            (c = e.attrHandle[b])
              ? c(a)
              : d || $
              ? a.getAttribute(b)
              : ((c = a.getAttributeNode(b)),
                c
                  ? typeof a[b] == "boolean"
                    ? a[b]
                      ? b
                      : null
                    : c.specified
                    ? c.value
                    : null
                  : null)
          );
        }),
        (e = bc.selectors =
          {
            cacheLength: 50,
            createPseudo: z,
            match: W,
            attrHandle: Z
              ? {}
              : {
                  href: function (a) {
                    return a.getAttribute("href", 2);
                  },
                  type: function (a) {
                    return a.getAttribute("type");
                  },
                },
            find: {
              ID: d
                ? function (a, b, c) {
                    if (typeof b.getElementById !== n && !c) {
                      var d = b.getElementById(a);
                      return d && d.parentNode ? [d] : [];
                    }
                  }
                : function (a, c, d) {
                    if (typeof c.getElementById !== n && !d) {
                      var e = c.getElementById(a);
                      return e
                        ? e.id === a ||
                          (typeof e.getAttributeNode !== n &&
                            e.getAttributeNode("id").value === a)
                          ? [e]
                          : b
                        : [];
                    }
                  },
              TAG: Y
                ? function (a, b) {
                    if (typeof b.getElementsByTagName !== n)
                      return b.getElementsByTagName(a);
                  }
                : function (a, b) {
                    var c = b.getElementsByTagName(a);
                    if (a === "*") {
                      var d,
                        e = [],
                        f = 0;
                      for (; (d = c[f]); f++) d.nodeType === 1 && e.push(d);
                      return e;
                    }
                    return c;
                  },
              NAME:
                ba &&
                function (a, b) {
                  if (typeof b.getElementsByName !== n)
                    return b.getElementsByName(name);
                },
              CLASS:
                _ &&
                function (a, b, c) {
                  if (typeof b.getElementsByClassName !== n && !c)
                    return b.getElementsByClassName(a);
                },
            },
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (a) {
                return (
                  (a[1] = a[1].replace(V, "")),
                  (a[3] = (a[4] || a[5] || "").replace(V, "")),
                  a[2] === "~=" && (a[3] = " " + a[3] + " "),
                  a.slice(0, 4)
                );
              },
              CHILD: function (a) {
                return (
                  (a[1] = a[1].toLowerCase()),
                  a[1] === "nth"
                    ? (a[2] || bc.error(a[0]),
                      (a[3] = +(a[3]
                        ? a[4] + (a[5] || 1)
                        : 2 * (a[2] === "even" || a[2] === "odd"))),
                      (a[4] = +(a[6] + a[7] || a[2] === "odd")))
                    : a[2] && bc.error(a[0]),
                  a
                );
              },
              PSEUDO: function (a) {
                var b, c;
                if (W.CHILD.test(a[0])) return null;
                if (a[3]) a[2] = a[3];
                else if ((b = a[4]))
                  O.test(b) &&
                    (c = bh(b, !0)) &&
                    (c = b.indexOf(")", b.length - c) - b.length) &&
                    ((b = b.slice(0, c)), (a[0] = a[0].slice(0, c))),
                    (a[2] = b);
                return a.slice(0, 3);
              },
            },
            filter: {
              ID: d
                ? function (a) {
                    return (
                      (a = a.replace(V, "")),
                      function (b) {
                        return b.getAttribute("id") === a;
                      }
                    );
                  }
                : function (a) {
                    return (
                      (a = a.replace(V, "")),
                      function (b) {
                        var c =
                          typeof b.getAttributeNode !== n &&
                          b.getAttributeNode("id");
                        return c && c.value === a;
                      }
                    );
                  },
              TAG: function (a) {
                return a === "*"
                  ? function () {
                      return !0;
                    }
                  : ((a = a.replace(V, "").toLowerCase()),
                    function (b) {
                      return b.nodeName && b.nodeName.toLowerCase() === a;
                    });
              },
              CLASS: function (a) {
                var b = B[o][a];
                return (
                  b ||
                    (b = B(
                      a,
                      new RegExp("(^|" + E + ")" + a + "(" + E + "|$)")
                    )),
                  function (a) {
                    return b.test(
                      a.className ||
                        (typeof a.getAttribute !== n &&
                          a.getAttribute("class")) ||
                        ""
                    );
                  }
                );
              },
              ATTR: function (a, b, c) {
                return function (d, e) {
                  var f = bc.attr(d, a);
                  return f == null
                    ? b === "!="
                    : b
                    ? ((f += ""),
                      b === "="
                        ? f === c
                        : b === "!="
                        ? f !== c
                        : b === "^="
                        ? c && f.indexOf(c) === 0
                        : b === "*="
                        ? c && f.indexOf(c) > -1
                        : b === "$="
                        ? c && f.substr(f.length - c.length) === c
                        : b === "~="
                        ? (" " + f + " ").indexOf(c) > -1
                        : b === "|="
                        ? f === c || f.substr(0, c.length + 1) === c + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (a, b, c, d) {
                return a === "nth"
                  ? function (a) {
                      var b,
                        e,
                        f = a.parentNode;
                      if (c === 1 && d === 0) return !0;
                      if (f) {
                        e = 0;
                        for (b = f.firstChild; b; b = b.nextSibling)
                          if (b.nodeType === 1) {
                            e++;
                            if (a === b) break;
                          }
                      }
                      return (e -= d), e === c || (e % c === 0 && e / c >= 0);
                    }
                  : function (b) {
                      var c = b;
                      switch (a) {
                        case "only":
                        case "first":
                          while ((c = c.previousSibling))
                            if (c.nodeType === 1) return !1;
                          if (a === "first") return !0;
                          c = b;
                        case "last":
                          while ((c = c.nextSibling))
                            if (c.nodeType === 1) return !1;
                          return !0;
                      }
                    };
              },
              PSEUDO: function (a, b) {
                var c,
                  d =
                    e.pseudos[a] ||
                    e.setFilters[a.toLowerCase()] ||
                    bc.error("unsupported pseudo: " + a);
                return d[o]
                  ? d(b)
                  : d.length > 1
                  ? ((c = [a, a, "", b]),
                    e.setFilters.hasOwnProperty(a.toLowerCase())
                      ? z(function (a, c) {
                          var e,
                            f = d(a, b),
                            g = f.length;
                          while (g--)
                            (e = y.call(a, f[g])), (a[e] = !(c[e] = f[g]));
                        })
                      : function (a) {
                          return d(a, 0, c);
                        })
                  : d;
              },
            },
            pseudos: {
              not: z(function (a) {
                var b = [],
                  c = [],
                  d = i(a.replace(L, "$1"));
                return d[o]
                  ? z(function (a, b, c, e) {
                      var f,
                        g = d(a, null, e, []),
                        h = a.length;
                      while (h--) if ((f = g[h])) a[h] = !(b[h] = f);
                    })
                  : function (a, e, f) {
                      return (b[0] = a), d(b, null, f, c), !c.pop();
                    };
              }),
              has: z(function (a) {
                return function (b) {
                  return bc(a, b).length > 0;
                };
              }),
              contains: z(function (a) {
                return function (b) {
                  return (b.textContent || b.innerText || f(b)).indexOf(a) > -1;
                };
              }),
              enabled: function (a) {
                return a.disabled === !1;
              },
              disabled: function (a) {
                return a.disabled === !0;
              },
              checked: function (a) {
                var b = a.nodeName.toLowerCase();
                return (
                  (b === "input" && !!a.checked) ||
                  (b === "option" && !!a.selected)
                );
              },
              selected: function (a) {
                return (
                  a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                );
              },
              parent: function (a) {
                return !e.pseudos.empty(a);
              },
              empty: function (a) {
                var b;
                a = a.firstChild;
                while (a) {
                  if (a.nodeName > "@" || (b = a.nodeType) === 3 || b === 4)
                    return !1;
                  a = a.nextSibling;
                }
                return !0;
              },
              header: function (a) {
                return T.test(a.nodeName);
              },
              text: function (a) {
                var b, c;
                return (
                  a.nodeName.toLowerCase() === "input" &&
                  (b = a.type) === "text" &&
                  ((c = a.getAttribute("type")) == null ||
                    c.toLowerCase() === b)
                );
              },
              radio: bd("radio"),
              checkbox: bd("checkbox"),
              file: bd("file"),
              password: bd("password"),
              image: bd("image"),
              submit: be("submit"),
              reset: be("reset"),
              button: function (a) {
                var b = a.nodeName.toLowerCase();
                return (b === "input" && a.type === "button") || b === "button";
              },
              input: function (a) {
                return U.test(a.nodeName);
              },
              focus: function (a) {
                var b = a.ownerDocument;
                return (
                  a === b.activeElement &&
                  (!b.hasFocus || b.hasFocus()) &&
                  (!!a.type || !!a.href)
                );
              },
              active: function (a) {
                return a === a.ownerDocument.activeElement;
              },
              first: bf(function (a, b, c) {
                return [0];
              }),
              last: bf(function (a, b, c) {
                return [b - 1];
              }),
              eq: bf(function (a, b, c) {
                return [c < 0 ? c + b : c];
              }),
              even: bf(function (a, b, c) {
                for (var d = 0; d < b; d += 2) a.push(d);
                return a;
              }),
              odd: bf(function (a, b, c) {
                for (var d = 1; d < b; d += 2) a.push(d);
                return a;
              }),
              lt: bf(function (a, b, c) {
                for (var d = c < 0 ? c + b : c; --d >= 0; ) a.push(d);
                return a;
              }),
              gt: bf(function (a, b, c) {
                for (var d = c < 0 ? c + b : c; ++d < b; ) a.push(d);
                return a;
              }),
            },
          }),
        (j = s.compareDocumentPosition
          ? function (a, b) {
              return a === b
                ? ((k = !0), 0)
                : (
                    !a.compareDocumentPosition || !b.compareDocumentPosition
                      ? a.compareDocumentPosition
                      : a.compareDocumentPosition(b) & 4
                  )
                ? -1
                : 1;
            }
          : function (a, b) {
              if (a === b) return (k = !0), 0;
              if (a.sourceIndex && b.sourceIndex)
                return a.sourceIndex - b.sourceIndex;
              var c,
                d,
                e = [],
                f = [],
                g = a.parentNode,
                h = b.parentNode,
                i = g;
              if (g === h) return bg(a, b);
              if (!g) return -1;
              if (!h) return 1;
              while (i) e.unshift(i), (i = i.parentNode);
              i = h;
              while (i) f.unshift(i), (i = i.parentNode);
              (c = e.length), (d = f.length);
              for (var j = 0; j < c && j < d; j++)
                if (e[j] !== f[j]) return bg(e[j], f[j]);
              return j === c ? bg(a, f[j], -1) : bg(e[j], b, 1);
            }),
        [0, 0].sort(j),
        (m = !k),
        (bc.uniqueSort = function (a) {
          var b,
            c = 1;
          (k = m), a.sort(j);
          if (k) for (; (b = a[c]); c++) b === a[c - 1] && a.splice(c--, 1);
          return a;
        }),
        (bc.error = function (a) {
          throw new Error("Syntax error, unrecognized expression: " + a);
        }),
        (i = bc.compile =
          function (a, b) {
            var c,
              d = [],
              e = [],
              f = D[o][a];
            if (!f) {
              b || (b = bh(a)), (c = b.length);
              while (c--) (f = bm(b[c])), f[o] ? d.push(f) : e.push(f);
              f = D(a, bn(e, d));
            }
            return f;
          }),
        r.querySelectorAll &&
          (function () {
            var a,
              b = bp,
              c = /'|\\/g,
              d = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
              e = [":focus"],
              f = [":active", ":focus"],
              h =
                s.matchesSelector ||
                s.mozMatchesSelector ||
                s.webkitMatchesSelector ||
                s.oMatchesSelector ||
                s.msMatchesSelector;
            X(function (a) {
              (a.innerHTML = "<select><option selected=''></option></select>"),
                a.querySelectorAll("[selected]").length ||
                  e.push(
                    "\\[" +
                      E +
                      "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"
                  ),
                a.querySelectorAll(":checked").length || e.push(":checked");
            }),
              X(function (a) {
                (a.innerHTML = "<p test=''></p>"),
                  a.querySelectorAll("[test^='']").length &&
                    e.push("[*^$]=" + E + "*(?:\"\"|'')"),
                  (a.innerHTML = "<input type='hidden'/>"),
                  a.querySelectorAll(":enabled").length ||
                    e.push(":enabled", ":disabled");
              }),
              (e = new RegExp(e.join("|"))),
              (bp = function (a, d, f, g, h) {
                if (!g && !h && (!e || !e.test(a))) {
                  var i,
                    j,
                    k = !0,
                    l = o,
                    m = d,
                    n = d.nodeType === 9 && a;
                  if (
                    d.nodeType === 1 &&
                    d.nodeName.toLowerCase() !== "object"
                  ) {
                    (i = bh(a)),
                      (k = d.getAttribute("id"))
                        ? (l = k.replace(c, "\\$&"))
                        : d.setAttribute("id", l),
                      (l = "[id='" + l + "'] "),
                      (j = i.length);
                    while (j--) i[j] = l + i[j].join("");
                    (m = (R.test(a) && d.parentNode) || d), (n = i.join(","));
                  }
                  if (n)
                    try {
                      return w.apply(f, x.call(m.querySelectorAll(n), 0)), f;
                    } catch (p) {
                    } finally {
                      k || d.removeAttribute("id");
                    }
                }
                return b(a, d, f, g, h);
              }),
              h &&
                (X(function (b) {
                  a = h.call(b, "div");
                  try {
                    h.call(b, "[test!='']:sizzle"), f.push("!=", J);
                  } catch (c) {}
                }),
                (f = new RegExp(f.join("|"))),
                (bc.matchesSelector = function (b, c) {
                  c = c.replace(d, "='$1']");
                  if (!g(b) && !f.test(c) && (!e || !e.test(c)))
                    try {
                      var i = h.call(b, c);
                      if (i || a || (b.document && b.document.nodeType !== 11))
                        return i;
                    } catch (j) {}
                  return bc(c, null, null, [b]).length > 0;
                }));
          })(),
        (e.pseudos.nth = e.pseudos.eq),
        (e.filters = bq.prototype = e.pseudos),
        (e.setFilters = new bq()),
        (bc.attr = p.attr),
        (p.find = bc),
        (p.expr = bc.selectors),
        (p.expr[":"] = p.expr.pseudos),
        (p.unique = bc.uniqueSort),
        (p.text = bc.getText),
        (p.isXMLDoc = bc.isXML),
        (p.contains = bc.contains);
    })(a);
  var bc = /Until$/,
    bd = /^(?:parents|prev(?:Until|All))/,
    be = /^.[^:#\[\.,]*$/,
    bf = p.expr.match.needsContext,
    bg = { children: !0, contents: !0, next: !0, prev: !0 };
  p.fn.extend({
    find: function (a) {
      var b,
        c,
        d,
        e,
        f,
        g,
        h = this;
      if (typeof a != "string")
        return p(a).filter(function () {
          for (b = 0, c = h.length; b < c; b++)
            if (p.contains(h[b], this)) return !0;
        });
      g = this.pushStack("", "find", a);
      for (b = 0, c = this.length; b < c; b++) {
        (d = g.length), p.find(a, this[b], g);
        if (b > 0)
          for (e = d; e < g.length; e++)
            for (f = 0; f < d; f++)
              if (g[f] === g[e]) {
                g.splice(e--, 1);
                break;
              }
      }
      return g;
    },
    has: function (a) {
      var b,
        c = p(a, this),
        d = c.length;
      return this.filter(function () {
        for (b = 0; b < d; b++) if (p.contains(this, c[b])) return !0;
      });
    },
    not: function (a) {
      return this.pushStack(bj(this, a, !1), "not", a);
    },
    filter: function (a) {
      return this.pushStack(bj(this, a, !0), "filter", a);
    },
    is: function (a) {
      return (
        !!a &&
        (typeof a == "string"
          ? bf.test(a)
            ? p(a, this.context).index(this[0]) >= 0
            : p.filter(a, this).length > 0
          : this.filter(a).length > 0)
      );
    },
    closest: function (a, b) {
      var c,
        d = 0,
        e = this.length,
        f = [],
        g = bf.test(a) || typeof a != "string" ? p(a, b || this.context) : 0;
      for (; d < e; d++) {
        c = this[d];
        while (c && c.ownerDocument && c !== b && c.nodeType !== 11) {
          if (g ? g.index(c) > -1 : p.find.matchesSelector(c, a)) {
            f.push(c);
            break;
          }
          c = c.parentNode;
        }
      }
      return (
        (f = f.length > 1 ? p.unique(f) : f), this.pushStack(f, "closest", a)
      );
    },
    index: function (a) {
      return a
        ? typeof a == "string"
          ? p.inArray(this[0], p(a))
          : p.inArray(a.jquery ? a[0] : a, this)
        : this[0] && this[0].parentNode
        ? this.prevAll().length
        : -1;
    },
    add: function (a, b) {
      var c =
          typeof a == "string"
            ? p(a, b)
            : p.makeArray(a && a.nodeType ? [a] : a),
        d = p.merge(this.get(), c);
      return this.pushStack(bh(c[0]) || bh(d[0]) ? d : p.unique(d));
    },
    addBack: function (a) {
      return this.add(a == null ? this.prevObject : this.prevObject.filter(a));
    },
  }),
    (p.fn.andSelf = p.fn.addBack),
    p.each(
      {
        parent: function (a) {
          var b = a.parentNode;
          return b && b.nodeType !== 11 ? b : null;
        },
        parents: function (a) {
          return p.dir(a, "parentNode");
        },
        parentsUntil: function (a, b, c) {
          return p.dir(a, "parentNode", c);
        },
        next: function (a) {
          return bi(a, "nextSibling");
        },
        prev: function (a) {
          return bi(a, "previousSibling");
        },
        nextAll: function (a) {
          return p.dir(a, "nextSibling");
        },
        prevAll: function (a) {
          return p.dir(a, "previousSibling");
        },
        nextUntil: function (a, b, c) {
          return p.dir(a, "nextSibling", c);
        },
        prevUntil: function (a, b, c) {
          return p.dir(a, "previousSibling", c);
        },
        siblings: function (a) {
          return p.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function (a) {
          return p.sibling(a.firstChild);
        },
        contents: function (a) {
          return p.nodeName(a, "iframe")
            ? a.contentDocument || a.contentWindow.document
            : p.merge([], a.childNodes);
        },
      },
      function (a, b) {
        p.fn[a] = function (c, d) {
          var e = p.map(this, b, c);
          return (
            bc.test(a) || (d = c),
            d && typeof d == "string" && (e = p.filter(d, e)),
            (e = this.length > 1 && !bg[a] ? p.unique(e) : e),
            this.length > 1 && bd.test(a) && (e = e.reverse()),
            this.pushStack(e, a, k.call(arguments).join(","))
          );
        };
      }
    ),
    p.extend({
      filter: function (a, b, c) {
        return (
          c && (a = ":not(" + a + ")"),
          b.length === 1
            ? p.find.matchesSelector(b[0], a)
              ? [b[0]]
              : []
            : p.find.matches(a, b)
        );
      },
      dir: function (a, c, d) {
        var e = [],
          f = a[c];
        while (
          f &&
          f.nodeType !== 9 &&
          (d === b || f.nodeType !== 1 || !p(f).is(d))
        )
          f.nodeType === 1 && e.push(f), (f = f[c]);
        return e;
      },
      sibling: function (a, b) {
        var c = [];
        for (; a; a = a.nextSibling) a.nodeType === 1 && a !== b && c.push(a);
        return c;
      },
    });
  var bl =
      "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    bm = / jQuery\d+="(?:null|\d+)"/g,
    bn = /^\s+/,
    bo =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    bp = /<([\w:]+)/,
    bq = /<tbody/i,
    br = /<|&#?\w+;/,
    bs = /<(?:script|style|link)/i,
    bt = /<(?:script|object|embed|option|style)/i,
    bu = new RegExp("<(?:" + bl + ")[\\s/>]", "i"),
    bv = /^(?:checkbox|radio)$/,
    bw = /checked\s*(?:[^=]|=\s*.checked.)/i,
    bx = /\/(java|ecma)script/i,
    by = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
    bz = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      area: [1, "<map>", "</map>"],
      _default: [0, "", ""],
    },
    bA = bk(e),
    bB = bA.appendChild(e.createElement("div"));
  (bz.optgroup = bz.option),
    (bz.tbody = bz.tfoot = bz.colgroup = bz.caption = bz.thead),
    (bz.th = bz.td),
    p.support.htmlSerialize || (bz._default = [1, "X<div>", "</div>"]),
    p.fn.extend({
      text: function (a) {
        return p.access(
          this,
          function (a) {
            return a === b
              ? p.text(this)
              : this.empty().append(
                  ((this[0] && this[0].ownerDocument) || e).createTextNode(a)
                );
          },
          null,
          a,
          arguments.length
        );
      },
      wrapAll: function (a) {
        if (p.isFunction(a))
          return this.each(function (b) {
            p(this).wrapAll(a.call(this, b));
          });
        if (this[0]) {
          var b = p(a, this[0].ownerDocument).eq(0).clone(!0);
          this[0].parentNode && b.insertBefore(this[0]),
            b
              .map(function () {
                var a = this;
                while (a.firstChild && a.firstChild.nodeType === 1)
                  a = a.firstChild;
                return a;
              })
              .append(this);
        }
        return this;
      },
      wrapInner: function (a) {
        return p.isFunction(a)
          ? this.each(function (b) {
              p(this).wrapInner(a.call(this, b));
            })
          : this.each(function () {
              var b = p(this),
                c = b.contents();
              c.length ? c.wrapAll(a) : b.append(a);
            });
      },
      wrap: function (a) {
        var b = p.isFunction(a);
        return this.each(function (c) {
          p(this).wrapAll(b ? a.call(this, c) : a);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            p.nodeName(this, "body") || p(this).replaceWith(this.childNodes);
          })
          .end();
      },
      append: function () {
        return this.domManip(arguments, !0, function (a) {
          (this.nodeType === 1 || this.nodeType === 11) && this.appendChild(a);
        });
      },
      prepend: function () {
        return this.domManip(arguments, !0, function (a) {
          (this.nodeType === 1 || this.nodeType === 11) &&
            this.insertBefore(a, this.firstChild);
        });
      },
      before: function () {
        if (!bh(this[0]))
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this);
          });
        if (arguments.length) {
          var a = p.clean(arguments);
          return this.pushStack(p.merge(a, this), "before", this.selector);
        }
      },
      after: function () {
        if (!bh(this[0]))
          return this.domManip(arguments, !1, function (a) {
            this.parentNode.insertBefore(a, this.nextSibling);
          });
        if (arguments.length) {
          var a = p.clean(arguments);
          return this.pushStack(p.merge(this, a), "after", this.selector);
        }
      },
      remove: function (a, b) {
        var c,
          d = 0;
        for (; (c = this[d]) != null; d++)
          if (!a || p.filter(a, [c]).length)
            !b &&
              c.nodeType === 1 &&
              (p.cleanData(c.getElementsByTagName("*")), p.cleanData([c])),
              c.parentNode && c.parentNode.removeChild(c);
        return this;
      },
      empty: function () {
        var a,
          b = 0;
        for (; (a = this[b]) != null; b++) {
          a.nodeType === 1 && p.cleanData(a.getElementsByTagName("*"));
          while (a.firstChild) a.removeChild(a.firstChild);
        }
        return this;
      },
      clone: function (a, b) {
        return (
          (a = a == null ? !1 : a),
          (b = b == null ? a : b),
          this.map(function () {
            return p.clone(this, a, b);
          })
        );
      },
      html: function (a) {
        return p.access(
          this,
          function (a) {
            var c = this[0] || {},
              d = 0,
              e = this.length;
            if (a === b)
              return c.nodeType === 1 ? c.innerHTML.replace(bm, "") : b;
            if (
              typeof a == "string" &&
              !bs.test(a) &&
              (p.support.htmlSerialize || !bu.test(a)) &&
              (p.support.leadingWhitespace || !bn.test(a)) &&
              !bz[(bp.exec(a) || ["", ""])[1].toLowerCase()]
            ) {
              a = a.replace(bo, "<$1></$2>");
              try {
                for (; d < e; d++)
                  (c = this[d] || {}),
                    c.nodeType === 1 &&
                      (p.cleanData(c.getElementsByTagName("*")),
                      (c.innerHTML = a));
                c = 0;
              } catch (f) {}
            }
            c && this.empty().append(a);
          },
          null,
          a,
          arguments.length
        );
      },
      replaceWith: function (a) {
        return bh(this[0])
          ? this.length
            ? this.pushStack(p(p.isFunction(a) ? a() : a), "replaceWith", a)
            : this
          : p.isFunction(a)
          ? this.each(function (b) {
              var c = p(this),
                d = c.html();
              c.replaceWith(a.call(this, b, d));
            })
          : (typeof a != "string" && (a = p(a).detach()),
            this.each(function () {
              var b = this.nextSibling,
                c = this.parentNode;
              p(this).remove(), b ? p(b).before(a) : p(c).append(a);
            }));
      },
      detach: function (a) {
        return this.remove(a, !0);
      },
      domManip: function (a, c, d) {
        a = [].concat.apply([], a);
        var e,
          f,
          g,
          h,
          i = 0,
          j = a[0],
          k = [],
          l = this.length;
        if (
          !p.support.checkClone &&
          l > 1 &&
          typeof j == "string" &&
          bw.test(j)
        )
          return this.each(function () {
            p(this).domManip(a, c, d);
          });
        if (p.isFunction(j))
          return this.each(function (e) {
            var f = p(this);
            (a[0] = j.call(this, e, c ? f.html() : b)), f.domManip(a, c, d);
          });
        if (this[0]) {
          (e = p.buildFragment(a, this, k)),
            (g = e.fragment),
            (f = g.firstChild),
            g.childNodes.length === 1 && (g = f);
          if (f) {
            c = c && p.nodeName(f, "tr");
            for (h = e.cacheable || l - 1; i < l; i++)
              d.call(
                c && p.nodeName(this[i], "table")
                  ? bC(this[i], "tbody")
                  : this[i],
                i === h ? g : p.clone(g, !0, !0)
              );
          }
          (g = f = null),
            k.length &&
              p.each(k, function (a, b) {
                b.src
                  ? p.ajax
                    ? p.ajax({
                        url: b.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0,
                      })
                    : p.error("no ajax")
                  : p.globalEval(
                      (b.text || b.textContent || b.innerHTML || "").replace(
                        by,
                        ""
                      )
                    ),
                  b.parentNode && b.parentNode.removeChild(b);
              });
        }
        return this;
      },
    }),
    (p.buildFragment = function (a, c, d) {
      var f,
        g,
        h,
        i = a[0];
      return (
        (c = c || e),
        (c = (!c.nodeType && c[0]) || c),
        (c = c.ownerDocument || c),
        a.length === 1 &&
          typeof i == "string" &&
          i.length < 512 &&
          c === e &&
          i.charAt(0) === "<" &&
          !bt.test(i) &&
          (p.support.checkClone || !bw.test(i)) &&
          (p.support.html5Clone || !bu.test(i)) &&
          ((g = !0), (f = p.fragments[i]), (h = f !== b)),
        f ||
          ((f = c.createDocumentFragment()),
          p.clean(a, c, f, d),
          g && (p.fragments[i] = h && f)),
        { fragment: f, cacheable: g }
      );
    }),
    (p.fragments = {}),
    p.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (a, b) {
        p.fn[a] = function (c) {
          var d,
            e = 0,
            f = [],
            g = p(c),
            h = g.length,
            i = this.length === 1 && this[0].parentNode;
          if (
            (i == null ||
              (i && i.nodeType === 11 && i.childNodes.length === 1)) &&
            h === 1
          )
            return g[b](this[0]), this;
          for (; e < h; e++)
            (d = (e > 0 ? this.clone(!0) : this).get()),
              p(g[e])[b](d),
              (f = f.concat(d));
          return this.pushStack(f, a, g.selector);
        };
      }
    ),
    p.extend({
      clone: function (a, b, c) {
        var d, e, f, g;
        p.support.html5Clone ||
        p.isXMLDoc(a) ||
        !bu.test("<" + a.nodeName + ">")
          ? (g = a.cloneNode(!0))
          : ((bB.innerHTML = a.outerHTML), bB.removeChild((g = bB.firstChild)));
        if (
          (!p.support.noCloneEvent || !p.support.noCloneChecked) &&
          (a.nodeType === 1 || a.nodeType === 11) &&
          !p.isXMLDoc(a)
        ) {
          bE(a, g), (d = bF(a)), (e = bF(g));
          for (f = 0; d[f]; ++f) e[f] && bE(d[f], e[f]);
        }
        if (b) {
          bD(a, g);
          if (c) {
            (d = bF(a)), (e = bF(g));
            for (f = 0; d[f]; ++f) bD(d[f], e[f]);
          }
        }
        return (d = e = null), g;
      },
      clean: function (a, b, c, d) {
        var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          n,
          o,
          q,
          r,
          s = b === e && bA,
          t = [];
        if (!b || typeof b.createDocumentFragment == "undefined") b = e;
        for (f = 0; (h = a[f]) != null; f++) {
          typeof h == "number" && (h += "");
          if (!h) continue;
          if (typeof h == "string")
            if (!br.test(h)) h = b.createTextNode(h);
            else {
              (s = s || bk(b)),
                (l = b.createElement("div")),
                s.appendChild(l),
                (h = h.replace(bo, "<$1></$2>")),
                (i = (bp.exec(h) || ["", ""])[1].toLowerCase()),
                (j = bz[i] || bz._default),
                (k = j[0]),
                (l.innerHTML = j[1] + h + j[2]);
              while (k--) l = l.lastChild;
              if (!p.support.tbody) {
                (m = bq.test(h)),
                  (n =
                    i === "table" && !m
                      ? l.firstChild && l.firstChild.childNodes
                      : j[1] === "<table>" && !m
                      ? l.childNodes
                      : []);
                for (g = n.length - 1; g >= 0; --g)
                  p.nodeName(n[g], "tbody") &&
                    !n[g].childNodes.length &&
                    n[g].parentNode.removeChild(n[g]);
              }
              !p.support.leadingWhitespace &&
                bn.test(h) &&
                l.insertBefore(b.createTextNode(bn.exec(h)[0]), l.firstChild),
                (h = l.childNodes),
                l.parentNode.removeChild(l);
            }
          h.nodeType ? t.push(h) : p.merge(t, h);
        }
        l && (h = l = s = null);
        if (!p.support.appendChecked)
          for (f = 0; (h = t[f]) != null; f++)
            p.nodeName(h, "input")
              ? bG(h)
              : typeof h.getElementsByTagName != "undefined" &&
                p.grep(h.getElementsByTagName("input"), bG);
        if (c) {
          q = function (a) {
            if (!a.type || bx.test(a.type))
              return d
                ? d.push(a.parentNode ? a.parentNode.removeChild(a) : a)
                : c.appendChild(a);
          };
          for (f = 0; (h = t[f]) != null; f++)
            if (!p.nodeName(h, "script") || !q(h))
              c.appendChild(h),
                typeof h.getElementsByTagName != "undefined" &&
                  ((r = p.grep(
                    p.merge([], h.getElementsByTagName("script")),
                    q
                  )),
                  t.splice.apply(t, [f + 1, 0].concat(r)),
                  (f += r.length));
        }
        return t;
      },
      cleanData: function (a, b) {
        var c,
          d,
          e,
          f,
          g = 0,
          h = p.expando,
          i = p.cache,
          j = p.support.deleteExpando,
          k = p.event.special;
        for (; (e = a[g]) != null; g++)
          if (b || p.acceptData(e)) {
            (d = e[h]), (c = d && i[d]);
            if (c) {
              if (c.events)
                for (f in c.events)
                  k[f] ? p.event.remove(e, f) : p.removeEvent(e, f, c.handle);
              i[d] &&
                (delete i[d],
                j
                  ? delete e[h]
                  : e.removeAttribute
                  ? e.removeAttribute(h)
                  : (e[h] = null),
                p.deletedIds.push(d));
            }
          }
      },
    }),
    (function () {
      var a, b;
      (p.uaMatch = function (a) {
        a = a.toLowerCase();
        var b =
          /(chrome)[ \/]([\w.]+)/.exec(a) ||
          /(webkit)[ \/]([\w.]+)/.exec(a) ||
          /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) ||
          /(msie) ([\w.]+)/.exec(a) ||
          (a.indexOf("compatible") < 0 &&
            /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)) ||
          [];
        return { browser: b[1] || "", version: b[2] || "0" };
      }),
        (a = p.uaMatch(g.userAgent)),
        (b = {}),
        a.browser && ((b[a.browser] = !0), (b.version = a.version)),
        b.chrome ? (b.webkit = !0) : b.webkit && (b.safari = !0),
        (p.browser = b),
        (p.sub = function () {
          function a(b, c) {
            return new a.fn.init(b, c);
          }
          p.extend(!0, a, this),
            (a.superclass = this),
            (a.fn = a.prototype = this()),
            (a.fn.constructor = a),
            (a.sub = this.sub),
            (a.fn.init = function c(c, d) {
              return (
                d && d instanceof p && !(d instanceof a) && (d = a(d)),
                p.fn.init.call(this, c, d, b)
              );
            }),
            (a.fn.init.prototype = a.fn);
          var b = a(e);
          return a;
        });
    })();
  var bH,
    bI,
    bJ,
    bK = /alpha\([^)]*\)/i,
    bL = /opacity=([^)]*)/,
    bM = /^(top|right|bottom|left)$/,
    bN = /^(none|table(?!-c[ea]).+)/,
    bO = /^margin/,
    bP = new RegExp("^(" + q + ")(.*)$", "i"),
    bQ = new RegExp("^(" + q + ")(?!px)[a-z%]+$", "i"),
    bR = new RegExp("^([-+])=(" + q + ")", "i"),
    bS = {},
    bT = { position: "absolute", visibility: "hidden", display: "block" },
    bU = { letterSpacing: 0, fontWeight: 400 },
    bV = ["Top", "Right", "Bottom", "Left"],
    bW = ["Webkit", "O", "Moz", "ms"],
    bX = p.fn.toggle;
  p.fn.extend({
    css: function (a, c) {
      return p.access(
        this,
        function (a, c, d) {
          return d !== b ? p.style(a, c, d) : p.css(a, c);
        },
        a,
        c,
        arguments.length > 1
      );
    },
    show: function () {
      return b$(this, !0);
    },
    hide: function () {
      return b$(this);
    },
    toggle: function (a, b) {
      var c = typeof a == "boolean";
      return p.isFunction(a) && p.isFunction(b)
        ? bX.apply(this, arguments)
        : this.each(function () {
            (c ? a : bZ(this)) ? p(this).show() : p(this).hide();
          });
    },
  }),
    p.extend({
      cssHooks: {
        opacity: {
          get: function (a, b) {
            if (b) {
              var c = bH(a, "opacity");
              return c === "" ? "1" : c;
            }
          },
        },
      },
      cssNumber: {
        fillOpacity: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: p.support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (a, c, d, e) {
        if (!a || a.nodeType === 3 || a.nodeType === 8 || !a.style) return;
        var f,
          g,
          h,
          i = p.camelCase(c),
          j = a.style;
        (c = p.cssProps[i] || (p.cssProps[i] = bY(j, i))),
          (h = p.cssHooks[c] || p.cssHooks[i]);
        if (d === b)
          return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
        (g = typeof d),
          g === "string" &&
            (f = bR.exec(d)) &&
            ((d = (f[1] + 1) * f[2] + parseFloat(p.css(a, c))), (g = "number"));
        if (d == null || (g === "number" && isNaN(d))) return;
        g === "number" && !p.cssNumber[i] && (d += "px");
        if (!h || !("set" in h) || (d = h.set(a, d, e)) !== b)
          try {
            j[c] = d;
          } catch (k) {}
      },
      css: function (a, c, d, e) {
        var f,
          g,
          h,
          i = p.camelCase(c);
        return (
          (c = p.cssProps[i] || (p.cssProps[i] = bY(a.style, i))),
          (h = p.cssHooks[c] || p.cssHooks[i]),
          h && "get" in h && (f = h.get(a, !0, e)),
          f === b && (f = bH(a, c)),
          f === "normal" && c in bU && (f = bU[c]),
          d || e !== b
            ? ((g = parseFloat(f)), d || p.isNumeric(g) ? g || 0 : f)
            : f
        );
      },
      swap: function (a, b, c) {
        var d,
          e,
          f = {};
        for (e in b) (f[e] = a.style[e]), (a.style[e] = b[e]);
        d = c.call(a);
        for (e in b) a.style[e] = f[e];
        return d;
      },
    }),
    a.getComputedStyle
      ? (bH = function (b, c) {
          var d,
            e,
            f,
            g,
            h = a.getComputedStyle(b, null),
            i = b.style;
          return (
            h &&
              ((d = h[c]),
              d === "" &&
                !p.contains(b.ownerDocument, b) &&
                (d = p.style(b, c)),
              bQ.test(d) &&
                bO.test(c) &&
                ((e = i.width),
                (f = i.minWidth),
                (g = i.maxWidth),
                (i.minWidth = i.maxWidth = i.width = d),
                (d = h.width),
                (i.width = e),
                (i.minWidth = f),
                (i.maxWidth = g))),
            d
          );
        })
      : e.documentElement.currentStyle &&
        (bH = function (a, b) {
          var c,
            d,
            e = a.currentStyle && a.currentStyle[b],
            f = a.style;
          return (
            e == null && f && f[b] && (e = f[b]),
            bQ.test(e) &&
              !bM.test(b) &&
              ((c = f.left),
              (d = a.runtimeStyle && a.runtimeStyle.left),
              d && (a.runtimeStyle.left = a.currentStyle.left),
              (f.left = b === "fontSize" ? "1em" : e),
              (e = f.pixelLeft + "px"),
              (f.left = c),
              d && (a.runtimeStyle.left = d)),
            e === "" ? "auto" : e
          );
        }),
    p.each(["height", "width"], function (a, b) {
      p.cssHooks[b] = {
        get: function (a, c, d) {
          if (c)
            return a.offsetWidth === 0 && bN.test(bH(a, "display"))
              ? p.swap(a, bT, function () {
                  return cb(a, b, d);
                })
              : cb(a, b, d);
        },
        set: function (a, c, d) {
          return b_(
            a,
            c,
            d
              ? ca(
                  a,
                  b,
                  d,
                  p.support.boxSizing && p.css(a, "boxSizing") === "border-box"
                )
              : 0
          );
        },
      };
    }),
    p.support.opacity ||
      (p.cssHooks.opacity = {
        get: function (a, b) {
          return bL.test(
            (b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || ""
          )
            ? 0.01 * parseFloat(RegExp.$1) + ""
            : b
            ? "1"
            : "";
        },
        set: function (a, b) {
          var c = a.style,
            d = a.currentStyle,
            e = p.isNumeric(b) ? "alpha(opacity=" + b * 100 + ")" : "",
            f = (d && d.filter) || c.filter || "";
          c.zoom = 1;
          if (b >= 1 && p.trim(f.replace(bK, "")) === "" && c.removeAttribute) {
            c.removeAttribute("filter");
            if (d && !d.filter) return;
          }
          c.filter = bK.test(f) ? f.replace(bK, e) : f + " " + e;
        },
      }),
    p(function () {
      p.support.reliableMarginRight ||
        (p.cssHooks.marginRight = {
          get: function (a, b) {
            return p.swap(a, { display: "inline-block" }, function () {
              if (b) return bH(a, "marginRight");
            });
          },
        }),
        !p.support.pixelPosition &&
          p.fn.position &&
          p.each(["top", "left"], function (a, b) {
            p.cssHooks[b] = {
              get: function (a, c) {
                if (c) {
                  var d = bH(a, b);
                  return bQ.test(d) ? p(a).position()[b] + "px" : d;
                }
              },
            };
          });
    }),
    p.expr &&
      p.expr.filters &&
      ((p.expr.filters.hidden = function (a) {
        return (
          (a.offsetWidth === 0 && a.offsetHeight === 0) ||
          (!p.support.reliableHiddenOffsets &&
            ((a.style && a.style.display) || bH(a, "display")) === "none")
        );
      }),
      (p.expr.filters.visible = function (a) {
        return !p.expr.filters.hidden(a);
      })),
    p.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
      (p.cssHooks[a + b] = {
        expand: function (c) {
          var d,
            e = typeof c == "string" ? c.split(" ") : [c],
            f = {};
          for (d = 0; d < 4; d++) f[a + bV[d] + b] = e[d] || e[d - 2] || e[0];
          return f;
        },
      }),
        bO.test(a) || (p.cssHooks[a + b].set = b_);
    });
  var cd = /%20/g,
    ce = /\[\]$/,
    cf = /\r?\n/g,
    cg =
      /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
    ch = /^(?:select|textarea)/i;
  p.fn.extend({
    serialize: function () {
      return p.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        return this.elements ? p.makeArray(this.elements) : this;
      })
        .filter(function () {
          return (
            this.name &&
            !this.disabled &&
            (this.checked || ch.test(this.nodeName) || cg.test(this.type))
          );
        })
        .map(function (a, b) {
          var c = p(this).val();
          return c == null
            ? null
            : p.isArray(c)
            ? p.map(c, function (a, c) {
                return { name: b.name, value: a.replace(cf, "\r\n") };
              })
            : { name: b.name, value: c.replace(cf, "\r\n") };
        })
        .get();
    },
  }),
    (p.param = function (a, c) {
      var d,
        e = [],
        f = function (a, b) {
          (b = p.isFunction(b) ? b() : b == null ? "" : b),
            (e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b));
        };
      c === b && (c = p.ajaxSettings && p.ajaxSettings.traditional);
      if (p.isArray(a) || (a.jquery && !p.isPlainObject(a)))
        p.each(a, function () {
          f(this.name, this.value);
        });
      else for (d in a) ci(d, a[d], c, f);
      return e.join("&").replace(cd, "+");
    });
  var cj,
    ck,
    cl = /#.*$/,
    cm = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    cn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
    co = /^(?:GET|HEAD)$/,
    cp = /^\/\//,
    cq = /\?/,
    cr = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    cs = /([?&])_=[^&]*/,
    ct = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    cu = p.fn.load,
    cv = {},
    cw = {},
    cx = ["*/"] + ["*"];
  try {
    ck = f.href;
  } catch (cy) {
    (ck = e.createElement("a")), (ck.href = ""), (ck = ck.href);
  }
  (cj = ct.exec(ck.toLowerCase()) || []),
    (p.fn.load = function (a, c, d) {
      if (typeof a != "string" && cu) return cu.apply(this, arguments);
      if (!this.length) return this;
      var e,
        f,
        g,
        h = this,
        i = a.indexOf(" ");
      return (
        i >= 0 && ((e = a.slice(i, a.length)), (a = a.slice(0, i))),
        p.isFunction(c)
          ? ((d = c), (c = b))
          : c && typeof c == "object" && (f = "POST"),
        p
          .ajax({
            url: a,
            type: f,
            dataType: "html",
            data: c,
            complete: function (a, b) {
              d && h.each(d, g || [a.responseText, b, a]);
            },
          })
          .done(function (a) {
            (g = arguments),
              h.html(e ? p("<div>").append(a.replace(cr, "")).find(e) : a);
          }),
        this
      );
    }),
    p.each(
      "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(
        " "
      ),
      function (a, b) {
        p.fn[b] = function (a) {
          return this.on(b, a);
        };
      }
    ),
    p.each(["get", "post"], function (a, c) {
      p[c] = function (a, d, e, f) {
        return (
          p.isFunction(d) && ((f = f || e), (e = d), (d = b)),
          p.ajax({ type: c, url: a, data: d, success: e, dataType: f })
        );
      };
    }),
    p.extend({
      getScript: function (a, c) {
        return p.get(a, b, c, "script");
      },
      getJSON: function (a, b, c) {
        return p.get(a, b, c, "json");
      },
      ajaxSetup: function (a, b) {
        return (
          b ? cB(a, p.ajaxSettings) : ((b = a), (a = p.ajaxSettings)),
          cB(a, b),
          a
        );
      },
      ajaxSettings: {
        url: ck,
        isLocal: cn.test(cj[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,
        async: !0,
        accepts: {
          xml: "application/xml, text/xml",
          html: "text/html",
          text: "text/plain",
          json: "application/json, text/javascript",
          "*": cx,
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: { xml: "responseXML", text: "responseText" },
        converters: {
          "* text": a.String,
          "text html": !0,
          "text json": p.parseJSON,
          "text xml": p.parseXML,
        },
        flatOptions: { context: !0, url: !0 },
      },
      ajaxPrefilter: cz(cv),
      ajaxTransport: cz(cw),
      ajax: function (a, c) {
        function y(a, c, f, i) {
          var k,
            s,
            t,
            u,
            w,
            y = c;
          if (v === 2) return;
          (v = 2),
            h && clearTimeout(h),
            (g = b),
            (e = i || ""),
            (x.readyState = a > 0 ? 4 : 0),
            f && (u = cC(l, x, f));
          if ((a >= 200 && a < 300) || a === 304)
            l.ifModified &&
              ((w = x.getResponseHeader("Last-Modified")),
              w && (p.lastModified[d] = w),
              (w = x.getResponseHeader("Etag")),
              w && (p.etag[d] = w)),
              a === 304
                ? ((y = "notmodified"), (k = !0))
                : ((k = cD(l, u)),
                  (y = k.state),
                  (s = k.data),
                  (t = k.error),
                  (k = !t));
          else {
            t = y;
            if (!y || a) (y = "error"), a < 0 && (a = 0);
          }
          (x.status = a),
            (x.statusText = (c || y) + ""),
            k ? o.resolveWith(m, [s, y, x]) : o.rejectWith(m, [x, y, t]),
            x.statusCode(r),
            (r = b),
            j &&
              n.trigger("ajax" + (k ? "Success" : "Error"), [x, l, k ? s : t]),
            q.fireWith(m, [x, y]),
            j &&
              (n.trigger("ajaxComplete", [x, l]),
              --p.active || p.event.trigger("ajaxStop"));
        }
        typeof a == "object" && ((c = a), (a = b)), (c = c || {});
        var d,
          e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = p.ajaxSetup({}, c),
          m = l.context || l,
          n = m !== l && (m.nodeType || m instanceof p) ? p(m) : p.event,
          o = p.Deferred(),
          q = p.Callbacks("once memory"),
          r = l.statusCode || {},
          t = {},
          u = {},
          v = 0,
          w = "canceled",
          x = {
            readyState: 0,
            setRequestHeader: function (a, b) {
              if (!v) {
                var c = a.toLowerCase();
                (a = u[c] = u[c] || a), (t[a] = b);
              }
              return this;
            },
            getAllResponseHeaders: function () {
              return v === 2 ? e : null;
            },
            getResponseHeader: function (a) {
              var c;
              if (v === 2) {
                if (!f) {
                  f = {};
                  while ((c = cm.exec(e))) f[c[1].toLowerCase()] = c[2];
                }
                c = f[a.toLowerCase()];
              }
              return c === b ? null : c;
            },
            overrideMimeType: function (a) {
              return v || (l.mimeType = a), this;
            },
            abort: function (a) {
              return (a = a || w), g && g.abort(a), y(0, a), this;
            },
          };
        o.promise(x),
          (x.success = x.done),
          (x.error = x.fail),
          (x.complete = q.add),
          (x.statusCode = function (a) {
            if (a) {
              var b;
              if (v < 2) for (b in a) r[b] = [r[b], a[b]];
              else (b = a[x.status]), x.always(b);
            }
            return this;
          }),
          (l.url = ((a || l.url) + "")
            .replace(cl, "")
            .replace(cp, cj[1] + "//")),
          (l.dataTypes = p
            .trim(l.dataType || "*")
            .toLowerCase()
            .split(s)),
          l.crossDomain == null &&
            ((i = ct.exec(l.url.toLowerCase()) || !1),
            (l.crossDomain =
              i &&
              i.join(":") + (i[3] ? "" : i[1] === "http:" ? 80 : 443) !==
                cj.join(":") + (cj[3] ? "" : cj[1] === "http:" ? 80 : 443))),
          l.data &&
            l.processData &&
            typeof l.data != "string" &&
            (l.data = p.param(l.data, l.traditional)),
          cA(cv, l, c, x);
        if (v === 2) return x;
        (j = l.global),
          (l.type = l.type.toUpperCase()),
          (l.hasContent = !co.test(l.type)),
          j && p.active++ === 0 && p.event.trigger("ajaxStart");
        if (!l.hasContent) {
          l.data &&
            ((l.url += (cq.test(l.url) ? "&" : "?") + l.data), delete l.data),
            (d = l.url);
          if (l.cache === !1) {
            var z = p.now(),
              A = l.url.replace(cs, "$1_=" + z);
            l.url =
              A + (A === l.url ? (cq.test(l.url) ? "&" : "?") + "_=" + z : "");
          }
        }
        ((l.data && l.hasContent && l.contentType !== !1) || c.contentType) &&
          x.setRequestHeader("Content-Type", l.contentType),
          l.ifModified &&
            ((d = d || l.url),
            p.lastModified[d] &&
              x.setRequestHeader("If-Modified-Since", p.lastModified[d]),
            p.etag[d] && x.setRequestHeader("If-None-Match", p.etag[d])),
          x.setRequestHeader(
            "Accept",
            l.dataTypes[0] && l.accepts[l.dataTypes[0]]
              ? l.accepts[l.dataTypes[0]] +
                  (l.dataTypes[0] !== "*" ? ", " + cx + "; q=0.01" : "")
              : l.accepts["*"]
          );
        for (k in l.headers) x.setRequestHeader(k, l.headers[k]);
        if (!l.beforeSend || (l.beforeSend.call(m, x, l) !== !1 && v !== 2)) {
          w = "abort";
          for (k in { success: 1, error: 1, complete: 1 }) x[k](l[k]);
          g = cA(cw, l, c, x);
          if (!g) y(-1, "No Transport");
          else {
            (x.readyState = 1),
              j && n.trigger("ajaxSend", [x, l]),
              l.async &&
                l.timeout > 0 &&
                (h = setTimeout(function () {
                  x.abort("timeout");
                }, l.timeout));
            try {
              (v = 1), g.send(t, y);
            } catch (B) {
              if (v < 2) y(-1, B);
              else throw B;
            }
          }
          return x;
        }
        return x.abort();
      },
      active: 0,
      lastModified: {},
      etag: {},
    });
  var cE = [],
    cF = /\?/,
    cG = /(=)\?(?=&|$)|\?\?/,
    cH = p.now();
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var a = cE.pop() || p.expando + "_" + cH++;
      return (this[a] = !0), a;
    },
  }),
    p.ajaxPrefilter("json jsonp", function (c, d, e) {
      var f,
        g,
        h,
        i = c.data,
        j = c.url,
        k = c.jsonp !== !1,
        l = k && cG.test(j),
        m =
          k &&
          !l &&
          typeof i == "string" &&
          !(c.contentType || "").indexOf("application/x-www-form-urlencoded") &&
          cG.test(i);
      if (c.dataTypes[0] === "jsonp" || l || m)
        return (
          (f = c.jsonpCallback =
            p.isFunction(c.jsonpCallback)
              ? c.jsonpCallback()
              : c.jsonpCallback),
          (g = a[f]),
          l
            ? (c.url = j.replace(cG, "$1" + f))
            : m
            ? (c.data = i.replace(cG, "$1" + f))
            : k && (c.url += (cF.test(j) ? "&" : "?") + c.jsonp + "=" + f),
          (c.converters["script json"] = function () {
            return h || p.error(f + " was not called"), h[0];
          }),
          (c.dataTypes[0] = "json"),
          (a[f] = function () {
            h = arguments;
          }),
          e.always(function () {
            (a[f] = g),
              c[f] && ((c.jsonpCallback = d.jsonpCallback), cE.push(f)),
              h && p.isFunction(g) && g(h[0]),
              (h = g = b);
          }),
          "script"
        );
    }),
    p.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /javascript|ecmascript/ },
      converters: {
        "text script": function (a) {
          return p.globalEval(a), a;
        },
      },
    }),
    p.ajaxPrefilter("script", function (a) {
      a.cache === b && (a.cache = !1),
        a.crossDomain && ((a.type = "GET"), (a.global = !1));
    }),
    p.ajaxTransport("script", function (a) {
      if (a.crossDomain) {
        var c,
          d = e.head || e.getElementsByTagName("head")[0] || e.documentElement;
        return {
          send: function (f, g) {
            (c = e.createElement("script")),
              (c.async = "async"),
              a.scriptCharset && (c.charset = a.scriptCharset),
              (c.src = a.url),
              (c.onload = c.onreadystatechange =
                function (a, e) {
                  if (
                    e ||
                    !c.readyState ||
                    /loaded|complete/.test(c.readyState)
                  )
                    (c.onload = c.onreadystatechange = null),
                      d && c.parentNode && d.removeChild(c),
                      (c = b),
                      e || g(200, "success");
                }),
              d.insertBefore(c, d.firstChild);
          },
          abort: function () {
            c && c.onload(0, 1);
          },
        };
      }
    });
  var cI,
    cJ = a.ActiveXObject
      ? function () {
          for (var a in cI) cI[a](0, 1);
        }
      : !1,
    cK = 0;
  (p.ajaxSettings.xhr = a.ActiveXObject
    ? function () {
        return (!this.isLocal && cL()) || cM();
      }
    : cL),
    (function (a) {
      p.extend(p.support, { ajax: !!a, cors: !!a && "withCredentials" in a });
    })(p.ajaxSettings.xhr()),
    p.support.ajax &&
      p.ajaxTransport(function (c) {
        if (!c.crossDomain || p.support.cors) {
          var d;
          return {
            send: function (e, f) {
              var g,
                h,
                i = c.xhr();
              c.username
                ? i.open(c.type, c.url, c.async, c.username, c.password)
                : i.open(c.type, c.url, c.async);
              if (c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
              c.mimeType &&
                i.overrideMimeType &&
                i.overrideMimeType(c.mimeType),
                !c.crossDomain &&
                  !e["X-Requested-With"] &&
                  (e["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (h in e) i.setRequestHeader(h, e[h]);
              } catch (j) {}
              i.send((c.hasContent && c.data) || null),
                (d = function (a, e) {
                  var h, j, k, l, m;
                  try {
                    if (d && (e || i.readyState === 4)) {
                      (d = b),
                        g &&
                          ((i.onreadystatechange = p.noop), cJ && delete cI[g]);
                      if (e) i.readyState !== 4 && i.abort();
                      else {
                        (h = i.status),
                          (k = i.getAllResponseHeaders()),
                          (l = {}),
                          (m = i.responseXML),
                          m && m.documentElement && (l.xml = m);
                        try {
                          l.text = i.responseText;
                        } catch (a) {}
                        try {
                          j = i.statusText;
                        } catch (n) {
                          j = "";
                        }
                        !h && c.isLocal && !c.crossDomain
                          ? (h = l.text ? 200 : 404)
                          : h === 1223 && (h = 204);
                      }
                    }
                  } catch (o) {
                    e || f(-1, o);
                  }
                  l && f(h, j, l, k);
                }),
                c.async
                  ? i.readyState === 4
                    ? setTimeout(d, 0)
                    : ((g = ++cK),
                      cJ && (cI || ((cI = {}), p(a).unload(cJ)), (cI[g] = d)),
                      (i.onreadystatechange = d))
                  : d();
            },
            abort: function () {
              d && d(0, 1);
            },
          };
        }
      });
  var cN,
    cO,
    cP = /^(?:toggle|show|hide)$/,
    cQ = new RegExp("^(?:([-+])=|)(" + q + ")([a-z%]*)$", "i"),
    cR = /queueHooks$/,
    cS = [cY],
    cT = {
      "*": [
        function (a, b) {
          var c,
            d,
            e = this.createTween(a, b),
            f = cQ.exec(b),
            g = e.cur(),
            h = +g || 0,
            i = 1,
            j = 20;
          if (f) {
            (c = +f[2]), (d = f[3] || (p.cssNumber[a] ? "" : "px"));
            if (d !== "px" && h) {
              h = p.css(e.elem, a, !0) || c || 1;
              do (i = i || ".5"), (h = h / i), p.style(e.elem, a, h + d);
              while (i !== (i = e.cur() / g) && i !== 1 && --j);
            }
            (e.unit = d),
              (e.start = h),
              (e.end = f[1] ? h + (f[1] + 1) * c : c);
          }
          return e;
        },
      ],
    };
  (p.Animation = p.extend(cW, {
    tweener: function (a, b) {
      p.isFunction(a) ? ((b = a), (a = ["*"])) : (a = a.split(" "));
      var c,
        d = 0,
        e = a.length;
      for (; d < e; d++) (c = a[d]), (cT[c] = cT[c] || []), cT[c].unshift(b);
    },
    prefilter: function (a, b) {
      b ? cS.unshift(a) : cS.push(a);
    },
  })),
    (p.Tween = cZ),
    (cZ.prototype = {
      constructor: cZ,
      init: function (a, b, c, d, e, f) {
        (this.elem = a),
          (this.prop = c),
          (this.easing = e || "swing"),
          (this.options = b),
          (this.start = this.now = this.cur()),
          (this.end = d),
          (this.unit = f || (p.cssNumber[c] ? "" : "px"));
      },
      cur: function () {
        var a = cZ.propHooks[this.prop];
        return a && a.get ? a.get(this) : cZ.propHooks._default.get(this);
      },
      run: function (a) {
        var b,
          c = cZ.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = b =
                p.easing[this.easing](
                  a,
                  this.options.duration * a,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = b = a),
          (this.now = (this.end - this.start) * b + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          c && c.set ? c.set(this) : cZ.propHooks._default.set(this),
          this
        );
      },
    }),
    (cZ.prototype.init.prototype = cZ.prototype),
    (cZ.propHooks = {
      _default: {
        get: function (a) {
          var b;
          return a.elem[a.prop] == null ||
            (!!a.elem.style && a.elem.style[a.prop] != null)
            ? ((b = p.css(a.elem, a.prop, !1, "")), !b || b === "auto" ? 0 : b)
            : a.elem[a.prop];
        },
        set: function (a) {
          p.fx.step[a.prop]
            ? p.fx.step[a.prop](a)
            : a.elem.style &&
              (a.elem.style[p.cssProps[a.prop]] != null || p.cssHooks[a.prop])
            ? p.style(a.elem, a.prop, a.now + a.unit)
            : (a.elem[a.prop] = a.now);
        },
      },
    }),
    (cZ.propHooks.scrollTop = cZ.propHooks.scrollLeft =
      {
        set: function (a) {
          a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        },
      }),
    p.each(["toggle", "show", "hide"], function (a, b) {
      var c = p.fn[b];
      p.fn[b] = function (d, e, f) {
        return d == null ||
          typeof d == "boolean" ||
          (!a && p.isFunction(d) && p.isFunction(e))
          ? c.apply(this, arguments)
          : this.animate(c$(b, !0), d, e, f);
      };
    }),
    p.fn.extend({
      fadeTo: function (a, b, c, d) {
        return this.filter(bZ)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: b }, a, c, d);
      },
      animate: function (a, b, c, d) {
        var e = p.isEmptyObject(a),
          f = p.speed(b, c, d),
          g = function () {
            var b = cW(this, p.extend({}, a), f);
            e && b.stop(!0);
          };
        return e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
      },
      stop: function (a, c, d) {
        var e = function (a) {
          var b = a.stop;
          delete a.stop, b(d);
        };
        return (
          typeof a != "string" && ((d = c), (c = a), (a = b)),
          c && a !== !1 && this.queue(a || "fx", []),
          this.each(function () {
            var b = !0,
              c = a != null && a + "queueHooks",
              f = p.timers,
              g = p._data(this);
            if (c) g[c] && g[c].stop && e(g[c]);
            else for (c in g) g[c] && g[c].stop && cR.test(c) && e(g[c]);
            for (c = f.length; c--; )
              f[c].elem === this &&
                (a == null || f[c].queue === a) &&
                (f[c].anim.stop(d), (b = !1), f.splice(c, 1));
            (b || !d) && p.dequeue(this, a);
          })
        );
      },
    }),
    p.each(
      {
        slideDown: c$("show"),
        slideUp: c$("hide"),
        slideToggle: c$("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (a, b) {
        p.fn[a] = function (a, c, d) {
          return this.animate(b, a, c, d);
        };
      }
    ),
    (p.speed = function (a, b, c) {
      var d =
        a && typeof a == "object"
          ? p.extend({}, a)
          : {
              complete: c || (!c && b) || (p.isFunction(a) && a),
              duration: a,
              easing: (c && b) || (b && !p.isFunction(b) && b),
            };
      d.duration = p.fx.off
        ? 0
        : typeof d.duration == "number"
        ? d.duration
        : d.duration in p.fx.speeds
        ? p.fx.speeds[d.duration]
        : p.fx.speeds._default;
      if (d.queue == null || d.queue === !0) d.queue = "fx";
      return (
        (d.old = d.complete),
        (d.complete = function () {
          p.isFunction(d.old) && d.old.call(this),
            d.queue && p.dequeue(this, d.queue);
        }),
        d
      );
    }),
    (p.easing = {
      linear: function (a) {
        return a;
      },
      swing: function (a) {
        return 0.5 - Math.cos(a * Math.PI) / 2;
      },
    }),
    (p.timers = []),
    (p.fx = cZ.prototype.init),
    (p.fx.tick = function () {
      var a,
        b = p.timers,
        c = 0;
      for (; c < b.length; c++)
        (a = b[c]), !a() && b[c] === a && b.splice(c--, 1);
      b.length || p.fx.stop();
    }),
    (p.fx.timer = function (a) {
      a() &&
        p.timers.push(a) &&
        !cO &&
        (cO = setInterval(p.fx.tick, p.fx.interval));
    }),
    (p.fx.interval = 13),
    (p.fx.stop = function () {
      clearInterval(cO), (cO = null);
    }),
    (p.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (p.fx.step = {}),
    p.expr &&
      p.expr.filters &&
      (p.expr.filters.animated = function (a) {
        return p.grep(p.timers, function (b) {
          return a === b.elem;
        }).length;
      });
  var c_ = /^(?:body|html)$/i;
  (p.fn.offset = function (a) {
    if (arguments.length)
      return a === b
        ? this
        : this.each(function (b) {
            p.offset.setOffset(this, a, b);
          });
    var c,
      d,
      e,
      f,
      g,
      h,
      i,
      j = { top: 0, left: 0 },
      k = this[0],
      l = k && k.ownerDocument;
    if (!l) return;
    return (d = l.body) === k
      ? p.offset.bodyOffset(k)
      : ((c = l.documentElement),
        p.contains(c, k)
          ? (typeof k.getBoundingClientRect != "undefined" &&
              (j = k.getBoundingClientRect()),
            (e = da(l)),
            (f = c.clientTop || d.clientTop || 0),
            (g = c.clientLeft || d.clientLeft || 0),
            (h = e.pageYOffset || c.scrollTop),
            (i = e.pageXOffset || c.scrollLeft),
            { top: j.top + h - f, left: j.left + i - g })
          : j);
  }),
    (p.offset = {
      bodyOffset: function (a) {
        var b = a.offsetTop,
          c = a.offsetLeft;
        return (
          p.support.doesNotIncludeMarginInBodyOffset &&
            ((b += parseFloat(p.css(a, "marginTop")) || 0),
            (c += parseFloat(p.css(a, "marginLeft")) || 0)),
          { top: b, left: c }
        );
      },
      setOffset: function (a, b, c) {
        var d = p.css(a, "position");
        d === "static" && (a.style.position = "relative");
        var e = p(a),
          f = e.offset(),
          g = p.css(a, "top"),
          h = p.css(a, "left"),
          i =
            (d === "absolute" || d === "fixed") &&
            p.inArray("auto", [g, h]) > -1,
          j = {},
          k = {},
          l,
          m;
        i
          ? ((k = e.position()), (l = k.top), (m = k.left))
          : ((l = parseFloat(g) || 0), (m = parseFloat(h) || 0)),
          p.isFunction(b) && (b = b.call(a, c, f)),
          b.top != null && (j.top = b.top - f.top + l),
          b.left != null && (j.left = b.left - f.left + m),
          "using" in b ? b.using.call(a, j) : e.css(j);
      },
    }),
    p.fn.extend({
      position: function () {
        if (!this[0]) return;
        var a = this[0],
          b = this.offsetParent(),
          c = this.offset(),
          d = c_.test(b[0].nodeName) ? { top: 0, left: 0 } : b.offset();
        return (
          (c.top -= parseFloat(p.css(a, "marginTop")) || 0),
          (c.left -= parseFloat(p.css(a, "marginLeft")) || 0),
          (d.top += parseFloat(p.css(b[0], "borderTopWidth")) || 0),
          (d.left += parseFloat(p.css(b[0], "borderLeftWidth")) || 0),
          { top: c.top - d.top, left: c.left - d.left }
        );
      },
      offsetParent: function () {
        return this.map(function () {
          var a = this.offsetParent || e.body;
          while (a && !c_.test(a.nodeName) && p.css(a, "position") === "static")
            a = a.offsetParent;
          return a || e.body;
        });
      },
    }),
    p.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (a, c) {
        var d = /Y/.test(c);
        p.fn[a] = function (e) {
          return p.access(
            this,
            function (a, e, f) {
              var g = da(a);
              if (f === b)
                return g
                  ? c in g
                    ? g[c]
                    : g.document.documentElement[e]
                  : a[e];
              g
                ? g.scrollTo(
                    d ? p(g).scrollLeft() : f,
                    d ? f : p(g).scrollTop()
                  )
                : (a[e] = f);
            },
            a,
            e,
            arguments.length,
            null
          );
        };
      }
    ),
    p.each({ Height: "height", Width: "width" }, function (a, c) {
      p.each(
        { padding: "inner" + a, content: c, "": "outer" + a },
        function (d, e) {
          p.fn[e] = function (e, f) {
            var g = arguments.length && (d || typeof e != "boolean"),
              h = d || (e === !0 || f === !0 ? "margin" : "border");
            return p.access(
              this,
              function (c, d, e) {
                var f;
                return p.isWindow(c)
                  ? c.document.documentElement["client" + a]
                  : c.nodeType === 9
                  ? ((f = c.documentElement),
                    Math.max(
                      c.body["scroll" + a],
                      f["scroll" + a],
                      c.body["offset" + a],
                      f["offset" + a],
                      f["client" + a]
                    ))
                  : e === b
                  ? p.css(c, d, e, h)
                  : p.style(c, d, e, h);
              },
              c,
              g ? e : b,
              g,
              null
            );
          };
        }
      );
    }),
    (a.jQuery = a.$ = p),
    typeof define == "function" &&
      define.amd &&
      define.amd.jQuery &&
      define("jquery", [], function () {
        return p;
      });
})(window);

//   =================================================================================================================

!(function (t, e) {
  function i(e, i) {
    var n,
      o,
      a,
      r = e.nodeName.toLowerCase();
    return "area" === r
      ? ((n = e.parentNode),
        (o = n.name),
        !(!e.href || !o || "map" !== n.nodeName.toLowerCase()) &&
          !!(a = t("img[usemap=#" + o + "]")[0]) &&
          s(a))
      : (/input|select|textarea|button|object/.test(r)
          ? !e.disabled
          : "a" === r
          ? e.href || i
          : i) && s(e);
  }
  function s(e) {
    return (
      t.expr.filters.visible(e) &&
      !t(e)
        .parents()
        .addBack()
        .filter(function () {
          return "hidden" === t.css(this, "visibility");
        }).length
    );
  }
  var n = 0,
    o = /^ui-id-\d+$/;
  (t.ui = t.ui || {}),
    t.extend(t.ui, {
      version: "1.10.3",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38,
      },
    }),
    t.fn.extend({
      focus: (function (e) {
        return function (i, s) {
          return "number" == typeof i
            ? this.each(function () {
                var e = this;
                setTimeout(function () {
                  t(e).focus(), s && s.call(e);
                }, i);
              })
            : e.apply(this, arguments);
        };
      })(t.fn.focus),
      scrollParent: function () {
        var e;
        return (
          (e =
            (t.ui.ie && /(static|relative)/.test(this.css("position"))) ||
            /absolute/.test(this.css("position"))
              ? this.parents()
                  .filter(function () {
                    return (
                      /(relative|absolute|fixed)/.test(
                        t.css(this, "position")
                      ) &&
                      /(auto|scroll)/.test(
                        t.css(this, "overflow") +
                          t.css(this, "overflow-y") +
                          t.css(this, "overflow-x")
                      )
                    );
                  })
                  .eq(0)
              : this.parents()
                  .filter(function () {
                    return /(auto|scroll)/.test(
                      t.css(this, "overflow") +
                        t.css(this, "overflow-y") +
                        t.css(this, "overflow-x")
                    );
                  })
                  .eq(0)),
          /fixed/.test(this.css("position")) || !e.length ? t(document) : e
        );
      },
      zIndex: function (e) {
        if (void 0 !== e) return this.css("zIndex", e);
        if (this.length)
          for (var i, s, n = t(this[0]); n.length && n[0] !== document; ) {
            if (
              ("absolute" === (i = n.css("position")) ||
                "relative" === i ||
                "fixed" === i) &&
              ((s = parseInt(n.css("zIndex"), 10)), !isNaN(s) && 0 !== s)
            )
              return s;
            n = n.parent();
          }
        return 0;
      },
      uniqueId: function () {
        return this.each(function () {
          this.id || (this.id = "ui-id-" + ++n);
        });
      },
      removeUniqueId: function () {
        return this.each(function () {
          o.test(this.id) && t(this).removeAttr("id");
        });
      },
    }),
    t.extend(t.expr[":"], {
      data: t.expr.createPseudo
        ? t.expr.createPseudo(function (e) {
            return function (i) {
              return !!t.data(i, e);
            };
          })
        : function (e, i, s) {
            return !!t.data(e, s[3]);
          },
      focusable: function (e) {
        return i(e, !isNaN(t.attr(e, "tabindex")));
      },
      tabbable: function (e) {
        var s = t.attr(e, "tabindex"),
          n = isNaN(s);
        return (n || s >= 0) && i(e, !n);
      },
    }),
    t("<a>").outerWidth(1).jquery ||
      t.each(["Width", "Height"], function (e, i) {
        function s(e, i, s, o) {
          return (
            t.each(n, function () {
              (i -= parseFloat(t.css(e, "padding" + this)) || 0),
                s &&
                  (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0),
                o && (i -= parseFloat(t.css(e, "margin" + this)) || 0);
            }),
            i
          );
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
          o = i.toLowerCase(),
          a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight,
          };
        (t.fn["inner" + i] = function (e) {
          return void 0 === e
            ? a["inner" + i].call(this)
            : this.each(function () {
                t(this).css(o, s(this, e) + "px");
              });
        }),
          (t.fn["outer" + i] = function (e, n) {
            return "number" != typeof e
              ? a["outer" + i].call(this, e)
              : this.each(function () {
                  t(this).css(o, s(this, e, !0, n) + "px");
                });
          });
      }),
    t.fn.addBack ||
      (t.fn.addBack = function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      }),
    t("<a>").data("a-b", "a").removeData("a-b").data("a-b") &&
      (t.fn.removeData = (function (e) {
        return function (i) {
          return arguments.length ? e.call(this, t.camelCase(i)) : e.call(this);
        };
      })(t.fn.removeData)),
    (t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())),
    (t.support.selectstart = "onselectstart" in document.createElement("div")),
    t.fn.extend({
      disableSelection: function () {
        return this.bind(
          (t.support.selectstart ? "selectstart" : "mousedown") +
            ".ui-disableSelection",
          function (t) {
            t.preventDefault();
          }
        );
      },
      enableSelection: function () {
        return this.unbind(".ui-disableSelection");
      },
    }),
    t.extend(t.ui, {
      plugin: {
        add: function (e, i, s) {
          var n,
            o = t.ui[e].prototype;
          for (n in s)
            (o.plugins[n] = o.plugins[n] || []), o.plugins[n].push([i, s[n]]);
        },
        call: function (t, e, i) {
          var s,
            n = t.plugins[e];
          if (
            n &&
            t.element[0].parentNode &&
            11 !== t.element[0].parentNode.nodeType
          )
            for (s = 0; s < n.length; s++)
              t.options[n[s][0]] && n[s][1].apply(t.element, i);
        },
      },
      hasScroll: function (e, i) {
        if ("hidden" === t(e).css("overflow")) return !1;
        var s = i && "left" === i ? "scrollLeft" : "scrollTop",
          n = !1;
        return e[s] > 0 || ((e[s] = 1), (n = e[s] > 0), (e[s] = 0), n);
      },
    });
})(jQuery),
  (function (t, e) {
    var i = 0,
      s = Array.prototype.slice,
      n = t.cleanData;
    (t.cleanData = function (e) {
      for (var i, s = 0; null != (i = e[s]); s++)
        try {
          t(i).triggerHandler("remove");
        } catch (t) {}
      n(e);
    }),
      (t.widget = function (e, i, s) {
        var n,
          o,
          a,
          r,
          h = {},
          l = e.split(".")[0];
        (e = e.split(".")[1]),
          (n = l + "-" + e),
          s || ((s = i), (i = t.Widget)),
          (t.expr[":"][n.toLowerCase()] = function (e) {
            return !!t.data(e, n);
          }),
          (t[l] = t[l] || {}),
          (o = t[l][e]),
          (a = t[l][e] =
            function (t, e) {
              if (!this._createWidget) return new a(t, e);
              arguments.length && this._createWidget(t, e);
            }),
          t.extend(a, o, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: [],
          }),
          ((r = new i()).options = t.widget.extend({}, r.options)),
          t.each(s, function (e, s) {
            t.isFunction(s)
              ? (h[e] = (function () {
                  var t = function () {
                      return i.prototype[e].apply(this, arguments);
                    },
                    n = function (t) {
                      return i.prototype[e].apply(this, t);
                    };
                  return function () {
                    var e,
                      i = this._super,
                      o = this._superApply;
                    return (
                      (this._super = t),
                      (this._superApply = n),
                      (e = s.apply(this, arguments)),
                      (this._super = i),
                      (this._superApply = o),
                      e
                    );
                  };
                })())
              : (h[e] = s);
          }),
          (a.prototype = t.widget.extend(
            r,
            { widgetEventPrefix: o ? r.widgetEventPrefix : e },
            h,
            { constructor: a, namespace: l, widgetName: e, widgetFullName: n }
          )),
          o
            ? (t.each(o._childConstructors, function (e, i) {
                var s = i.prototype;
                t.widget(s.namespace + "." + s.widgetName, a, i._proto);
              }),
              delete o._childConstructors)
            : i._childConstructors.push(a),
          t.widget.bridge(e, a);
      }),
      (t.widget.extend = function (e) {
        for (
          var i, n, o = s.call(arguments, 1), a = 0, r = o.length;
          a < r;
          a++
        )
          for (i in o[a])
            (n = o[a][i]),
              o[a].hasOwnProperty(i) &&
                void 0 !== n &&
                (t.isPlainObject(n)
                  ? (e[i] = t.isPlainObject(e[i])
                      ? t.widget.extend({}, e[i], n)
                      : t.widget.extend({}, n))
                  : (e[i] = n));
        return e;
      }),
      (t.widget.bridge = function (e, i) {
        var n = i.prototype.widgetFullName || e;
        t.fn[e] = function (o) {
          var a = "string" == typeof o,
            r = s.call(arguments, 1),
            h = this;
          return (
            (o =
              !a && r.length ? t.widget.extend.apply(null, [o].concat(r)) : o),
            a
              ? this.each(function () {
                  var i,
                    s = t.data(this, n);
                  return s
                    ? t.isFunction(s[o]) && "_" !== o.charAt(0)
                      ? (i = s[o].apply(s, r)) !== s && void 0 !== i
                        ? ((h = i && i.jquery ? h.pushStack(i.get()) : i), !1)
                        : void 0
                      : t.error(
                          "no such method '" +
                            o +
                            "' for " +
                            e +
                            " widget instance"
                        )
                    : t.error(
                        "cannot call methods on " +
                          e +
                          " prior to initialization; attempted to call method '" +
                          o +
                          "'"
                      );
                })
              : this.each(function () {
                  var e = t.data(this, n);
                  e
                    ? e.option(o || {})._init()
                    : t.data(this, n, new i(o, this));
                }),
            h
          );
        };
      }),
      (t.Widget = function () {}),
      (t.Widget._childConstructors = []),
      (t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: { disabled: !1, create: null },
        _createWidget: function (e, s) {
          (s = t(s || this.defaultElement || this)[0]),
            (this.element = t(s)),
            (this.uuid = i++),
            (this.eventNamespace = "." + this.widgetName + this.uuid),
            (this.options = t.widget.extend(
              {},
              this.options,
              this._getCreateOptions(),
              e
            )),
            (this.bindings = t()),
            (this.hoverable = t()),
            (this.focusable = t()),
            s !== this &&
              (t.data(s, this.widgetFullName, this),
              this._on(!0, this.element, {
                remove: function (t) {
                  t.target === s && this.destroy();
                },
              }),
              (this.document = t(s.style ? s.ownerDocument : s.document || s)),
              (this.window = t(
                this.document[0].defaultView || this.document[0].parentWindow
              ))),
            this._create(),
            this._trigger("create", null, this._getCreateEventData()),
            this._init();
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
          this._destroy(),
            this.element
              .unbind(this.eventNamespace)
              .removeData(this.widgetName)
              .removeData(this.widgetFullName)
              .removeData(t.camelCase(this.widgetFullName)),
            this.widget()
              .unbind(this.eventNamespace)
              .removeAttr("aria-disabled")
              .removeClass(this.widgetFullName + "-disabled ui-state-disabled"),
            this.bindings.unbind(this.eventNamespace),
            this.hoverable.removeClass("ui-state-hover"),
            this.focusable.removeClass("ui-state-focus");
        },
        _destroy: t.noop,
        widget: function () {
          return this.element;
        },
        option: function (e, i) {
          var s,
            n,
            o,
            a = e;
          if (0 === arguments.length) return t.widget.extend({}, this.options);
          if ("string" == typeof e)
            if (((a = {}), (s = e.split(".")), (e = s.shift()), s.length)) {
              for (
                n = a[e] = t.widget.extend({}, this.options[e]), o = 0;
                o < s.length - 1;
                o++
              )
                (n[s[o]] = n[s[o]] || {}), (n = n[s[o]]);
              if (((e = s.pop()), void 0 === i))
                return void 0 === n[e] ? null : n[e];
              n[e] = i;
            } else {
              if (void 0 === i)
                return void 0 === this.options[e] ? null : this.options[e];
              a[e] = i;
            }
          return this._setOptions(a), this;
        },
        _setOptions: function (t) {
          var e;
          for (e in t) this._setOption(e, t[e]);
          return this;
        },
        _setOption: function (t, e) {
          return (
            (this.options[t] = e),
            "disabled" === t &&
              (this.widget()
                .toggleClass(
                  this.widgetFullName + "-disabled ui-state-disabled",
                  !!e
                )
                .attr("aria-disabled", e),
              this.hoverable.removeClass("ui-state-hover"),
              this.focusable.removeClass("ui-state-focus")),
            this
          );
        },
        enable: function () {
          return this._setOption("disabled", !1);
        },
        disable: function () {
          return this._setOption("disabled", !0);
        },
        _on: function (e, i, s) {
          var n,
            o = this;
          "boolean" != typeof e && ((s = i), (i = e), (e = !1)),
            s
              ? ((i = n = t(i)), (this.bindings = this.bindings.add(i)))
              : ((s = i), (i = this.element), (n = this.widget())),
            t.each(s, function (s, a) {
              function r() {
                if (
                  e ||
                  (!0 !== o.options.disabled &&
                    !t(this).hasClass("ui-state-disabled"))
                )
                  return ("string" == typeof a ? o[a] : a).apply(o, arguments);
              }
              "string" != typeof a &&
                (r.guid = a.guid = a.guid || r.guid || t.guid++);
              var h = s.match(/^(\w+)\s*(.*)$/),
                l = h[1] + o.eventNamespace,
                c = h[2];
              c ? n.delegate(c, l, r) : i.bind(l, r);
            });
        },
        _off: function (t, e) {
          (e =
            (e || "").split(" ").join(this.eventNamespace + " ") +
            this.eventNamespace),
            t.unbind(e).undelegate(e);
        },
        _delay: function (t, e) {
          var i = this;
          return setTimeout(function () {
            return ("string" == typeof t ? i[t] : t).apply(i, arguments);
          }, e || 0);
        },
        _hoverable: function (e) {
          (this.hoverable = this.hoverable.add(e)),
            this._on(e, {
              mouseenter: function (e) {
                t(e.currentTarget).addClass("ui-state-hover");
              },
              mouseleave: function (e) {
                t(e.currentTarget).removeClass("ui-state-hover");
              },
            });
        },
        _focusable: function (e) {
          (this.focusable = this.focusable.add(e)),
            this._on(e, {
              focusin: function (e) {
                t(e.currentTarget).addClass("ui-state-focus");
              },
              focusout: function (e) {
                t(e.currentTarget).removeClass("ui-state-focus");
              },
            });
        },
        _trigger: function (e, i, s) {
          var n,
            o,
            a = this.options[e];
          if (
            ((s = s || {}),
            (i = t.Event(i)),
            (i.type = (
              e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e
            ).toLowerCase()),
            (i.target = this.element[0]),
            (o = i.originalEvent))
          )
            for (n in o) n in i || (i[n] = o[n]);
          return (
            this.element.trigger(i, s),
            !(
              (t.isFunction(a) &&
                !1 === a.apply(this.element[0], [i].concat(s))) ||
              i.isDefaultPrevented()
            )
          );
        },
      }),
      t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
        t.Widget.prototype["_" + e] = function (s, n, o) {
          "string" == typeof n && (n = { effect: n });
          var a,
            r = n ? (!0 === n || "number" == typeof n ? i : n.effect || i) : e;
          "number" == typeof (n = n || {}) && (n = { duration: n }),
            (a = !t.isEmptyObject(n)),
            (n.complete = o),
            n.delay && s.delay(n.delay),
            a && t.effects && t.effects.effect[r]
              ? s[e](n)
              : r !== e && s[r]
              ? s[r](n.duration, n.easing, o)
              : s.queue(function (i) {
                  t(this)[e](), o && o.call(s[0]), i();
                });
        };
      });
  })(jQuery),
  (function (t, e) {
    var i = !1;
    t(document).mouseup(function () {
      i = !1;
    }),
      t.widget("ui.mouse", {
        version: "1.10.3",
        options: {
          cancel: "input,textarea,button,select,option",
          distance: 1,
          delay: 0,
        },
        _mouseInit: function () {
          var e = this;
          this.element
            .bind("mousedown." + this.widgetName, function (t) {
              return e._mouseDown(t);
            })
            .bind("click." + this.widgetName, function (i) {
              if (!0 === t.data(i.target, e.widgetName + ".preventClickEvent"))
                return (
                  t.removeData(i.target, e.widgetName + ".preventClickEvent"),
                  i.stopImmediatePropagation(),
                  !1
                );
            }),
            (this.started = !1);
        },
        _mouseDestroy: function () {
          this.element.unbind("." + this.widgetName),
            this._mouseMoveDelegate &&
              t(document)
                .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
                .unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function (e) {
          if (!i) {
            this._mouseStarted && this._mouseUp(e), (this._mouseDownEvent = e);
            var s = this,
              n = 1 === e.which,
              o =
                !(
                  "string" != typeof this.options.cancel || !e.target.nodeName
                ) && t(e.target).closest(this.options.cancel).length;
            return (
              !(n && !o && this._mouseCapture(e)) ||
              ((this.mouseDelayMet = !this.options.delay),
              this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function () {
                  s.mouseDelayMet = !0;
                }, this.options.delay)),
              this._mouseDistanceMet(e) &&
              this._mouseDelayMet(e) &&
              ((this._mouseStarted = !1 !== this._mouseStart(e)),
              !this._mouseStarted)
                ? (e.preventDefault(), !0)
                : (!0 ===
                    t.data(e.target, this.widgetName + ".preventClickEvent") &&
                    t.removeData(
                      e.target,
                      this.widgetName + ".preventClickEvent"
                    ),
                  (this._mouseMoveDelegate = function (t) {
                    return s._mouseMove(t);
                  }),
                  (this._mouseUpDelegate = function (t) {
                    return s._mouseUp(t);
                  }),
                  t(document)
                    .bind(
                      "mousemove." + this.widgetName,
                      this._mouseMoveDelegate
                    )
                    .bind("mouseup." + this.widgetName, this._mouseUpDelegate),
                  e.preventDefault(),
                  (i = !0),
                  !0))
            );
          }
        },
        _mouseMove: function (e) {
          return t.ui.ie &&
            (!document.documentMode || document.documentMode < 9) &&
            !e.button
            ? this._mouseUp(e)
            : this._mouseStarted
            ? (this._mouseDrag(e), e.preventDefault())
            : (this._mouseDistanceMet(e) &&
                this._mouseDelayMet(e) &&
                ((this._mouseStarted =
                  !1 !== this._mouseStart(this._mouseDownEvent, e)),
                this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)),
              !this._mouseStarted);
        },
        _mouseUp: function (e) {
          return (
            t(document)
              .unbind("mousemove." + this.widgetName, this._mouseMoveDelegate)
              .unbind("mouseup." + this.widgetName, this._mouseUpDelegate),
            this._mouseStarted &&
              ((this._mouseStarted = !1),
              e.target === this._mouseDownEvent.target &&
                t.data(e.target, this.widgetName + ".preventClickEvent", !0),
              this._mouseStop(e)),
            !1
          );
        },
        _mouseDistanceMet: function (t) {
          return (
            Math.max(
              Math.abs(this._mouseDownEvent.pageX - t.pageX),
              Math.abs(this._mouseDownEvent.pageY - t.pageY)
            ) >= this.options.distance
          );
        },
        _mouseDelayMet: function () {
          return this.mouseDelayMet;
        },
        _mouseStart: function () {},
        _mouseDrag: function () {},
        _mouseStop: function () {},
        _mouseCapture: function () {
          return !0;
        },
      });
  })(jQuery),
  (function (t, e) {
    t.widget("ui.draggable", t.ui.mouse, {
      version: "1.10.3",
      widgetEventPrefix: "drag",
      options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null,
      },
      _create: function () {
        "original" !== this.options.helper ||
          /^(?:r|a|f)/.test(this.element.css("position")) ||
          (this.element[0].style.position = "relative"),
          this.options.addClasses && this.element.addClass("ui-draggable"),
          this.options.disabled &&
            this.element.addClass("ui-draggable-disabled"),
          this._mouseInit();
      },
      _destroy: function () {
        this.element.removeClass(
          "ui-draggable ui-draggable-dragging ui-draggable-disabled"
        ),
          this._mouseDestroy();
      },
      _mouseCapture: function (e) {
        var i = this.options;
        return (
          !(
            this.helper ||
            i.disabled ||
            t(e.target).closest(".ui-resizable-handle").length > 0
          ) &&
          ((this.handle = this._getHandle(e)),
          !!this.handle &&
            (t(!0 === i.iframeFix ? "iframe" : i.iframeFix).each(function () {
              t(
                "<div class='ui-draggable-iframeFix' style='background: #fff;'></div>"
              )
                .css({
                  width: this.offsetWidth + "px",
                  height: this.offsetHeight + "px",
                  position: "absolute",
                  opacity: "0.001",
                  zIndex: 1e3,
                })
                .css(t(this).offset())
                .appendTo("body");
            }),
            !0))
        );
      },
      _mouseStart: function (e) {
        var i = this.options;
        return (
          (this.helper = this._createHelper(e)),
          this.helper.addClass("ui-draggable-dragging"),
          this._cacheHelperProportions(),
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          this._cacheMargins(),
          (this.cssPosition = this.helper.css("position")),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offsetParent = this.helper.offsetParent()),
          (this.offsetParentCssPosition = this.offsetParent.css("position")),
          (this.offset = this.positionAbs = this.element.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          (this.offset.scroll = !1),
          t.extend(this.offset, {
            click: {
              left: e.pageX - this.offset.left,
              top: e.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          (this.originalPosition = this.position = this._generatePosition(e)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt),
          this._setContainment(),
          !1 === this._trigger("start", e)
            ? (this._clear(), !1)
            : (this._cacheHelperProportions(),
              t.ui.ddmanager &&
                !i.dropBehaviour &&
                t.ui.ddmanager.prepareOffsets(this, e),
              this._mouseDrag(e, !0),
              t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e),
              !0)
        );
      },
      _mouseDrag: function (e, i) {
        if (
          ("fixed" === this.offsetParentCssPosition &&
            (this.offset.parent = this._getParentOffset()),
          (this.position = this._generatePosition(e)),
          (this.positionAbs = this._convertPositionTo("absolute")),
          !i)
        ) {
          var s = this._uiHash();
          if (!1 === this._trigger("drag", e, s)) return this._mouseUp({}), !1;
          this.position = s.position;
        }
        return (
          (this.options.axis && "y" === this.options.axis) ||
            (this.helper[0].style.left = this.position.left + "px"),
          (this.options.axis && "x" === this.options.axis) ||
            (this.helper[0].style.top = this.position.top + "px"),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          !1
        );
      },
      _mouseStop: function (e) {
        var i = this,
          s = !1;
        return (
          t.ui.ddmanager &&
            !this.options.dropBehaviour &&
            (s = t.ui.ddmanager.drop(this, e)),
          this.dropped && ((s = this.dropped), (this.dropped = !1)),
          !(
            "original" === this.options.helper &&
            !t.contains(this.element[0].ownerDocument, this.element[0])
          ) &&
            (("invalid" === this.options.revert && !s) ||
            ("valid" === this.options.revert && s) ||
            !0 === this.options.revert ||
            (t.isFunction(this.options.revert) &&
              this.options.revert.call(this.element, s))
              ? t(this.helper).animate(
                  this.originalPosition,
                  parseInt(this.options.revertDuration, 10),
                  function () {
                    !1 !== i._trigger("stop", e) && i._clear();
                  }
                )
              : !1 !== this._trigger("stop", e) && this._clear(),
            !1)
        );
      },
      _mouseUp: function (e) {
        return (
          t("div.ui-draggable-iframeFix").each(function () {
            this.parentNode.removeChild(this);
          }),
          t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e),
          t.ui.mouse.prototype._mouseUp.call(this, e)
        );
      },
      cancel: function () {
        return (
          this.helper.is(".ui-draggable-dragging")
            ? this._mouseUp({})
            : this._clear(),
          this
        );
      },
      _getHandle: function (e) {
        return (
          !this.options.handle ||
          !!t(e.target).closest(this.element.find(this.options.handle)).length
        );
      },
      _createHelper: function (e) {
        var i = this.options,
          s = t.isFunction(i.helper)
            ? t(i.helper.apply(this.element[0], [e]))
            : "clone" === i.helper
            ? this.element.clone().removeAttr("id")
            : this.element;
        return (
          s.parents("body").length ||
            s.appendTo(
              "parent" === i.appendTo ? this.element[0].parentNode : i.appendTo
            ),
          s[0] === this.element[0] ||
            /(fixed|absolute)/.test(s.css("position")) ||
            s.css("position", "absolute"),
          s
        );
      },
      _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          "left" in e && (this.offset.click.left = e.left + this.margins.left),
          "right" in e &&
            (this.offset.click.left =
              this.helperProportions.width - e.right + this.margins.left),
          "top" in e && (this.offset.click.top = e.top + this.margins.top),
          "bottom" in e &&
            (this.offset.click.top =
              this.helperProportions.height - e.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        var e = this.offsetParent.offset();
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== document &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()),
            (e.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === document.body ||
            (this.offsetParent[0].tagName &&
              "html" === this.offsetParent[0].tagName.toLowerCase() &&
              t.ui.ie)) &&
            (e = { top: 0, left: 0 }),
          {
            top:
              e.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              e.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
          var t = this.element.position();
          return {
            top:
              t.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              t.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              this.scrollParent.scrollLeft(),
          };
        }
        return { top: 0, left: 0 };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.element.css("marginLeft"), 10) || 0,
          top: parseInt(this.element.css("marginTop"), 10) || 0,
          right: parseInt(this.element.css("marginRight"), 10) || 0,
          bottom: parseInt(this.element.css("marginBottom"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var e,
          i,
          s,
          n = this.options;
        n.containment
          ? "window" !== n.containment
            ? "document" !== n.containment
              ? n.containment.constructor !== Array
                ? ("parent" === n.containment &&
                    (n.containment = this.helper[0].parentNode),
                  (s = (i = t(n.containment))[0]) &&
                    ((e = "hidden" !== i.css("overflow")),
                    (this.containment = [
                      (parseInt(i.css("borderLeftWidth"), 10) || 0) +
                        (parseInt(i.css("paddingLeft"), 10) || 0),
                      (parseInt(i.css("borderTopWidth"), 10) || 0) +
                        (parseInt(i.css("paddingTop"), 10) || 0),
                      (e
                        ? Math.max(s.scrollWidth, s.offsetWidth)
                        : s.offsetWidth) -
                        (parseInt(i.css("borderRightWidth"), 10) || 0) -
                        (parseInt(i.css("paddingRight"), 10) || 0) -
                        this.helperProportions.width -
                        this.margins.left -
                        this.margins.right,
                      (e
                        ? Math.max(s.scrollHeight, s.offsetHeight)
                        : s.offsetHeight) -
                        (parseInt(i.css("borderBottomWidth"), 10) || 0) -
                        (parseInt(i.css("paddingBottom"), 10) || 0) -
                        this.helperProportions.height -
                        this.margins.top -
                        this.margins.bottom,
                    ]),
                    (this.relative_container = i)))
                : (this.containment = n.containment)
              : (this.containment = [
                  0,
                  0,
                  t(document).width() -
                    this.helperProportions.width -
                    this.margins.left,
                  (t(document).height() ||
                    document.body.parentNode.scrollHeight) -
                    this.helperProportions.height -
                    this.margins.top,
                ])
            : (this.containment = [
                t(window).scrollLeft() -
                  this.offset.relative.left -
                  this.offset.parent.left,
                t(window).scrollTop() -
                  this.offset.relative.top -
                  this.offset.parent.top,
                t(window).scrollLeft() +
                  t(window).width() -
                  this.helperProportions.width -
                  this.margins.left,
                t(window).scrollTop() +
                  (t(window).height() ||
                    document.body.parentNode.scrollHeight) -
                  this.helperProportions.height -
                  this.margins.top,
              ])
          : (this.containment = null);
      },
      _convertPositionTo: function (e, i) {
        i || (i = this.position);
        var s = "absolute" === e ? 1 : -1,
          n =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent;
        return (
          this.offset.scroll ||
            (this.offset.scroll = { top: n.scrollTop(), left: n.scrollLeft() }),
          {
            top:
              i.top +
              this.offset.relative.top * s +
              this.offset.parent.top * s -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : this.offset.scroll.top) *
                s,
            left:
              i.left +
              this.offset.relative.left * s +
              this.offset.parent.left * s -
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : this.offset.scroll.left) *
                s,
          }
        );
      },
      _generatePosition: function (e) {
        var i,
          s,
          n,
          o,
          a = this.options,
          r =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          h = e.pageX,
          l = e.pageY;
        return (
          this.offset.scroll ||
            (this.offset.scroll = { top: r.scrollTop(), left: r.scrollLeft() }),
          this.originalPosition &&
            (this.containment &&
              (this.relative_container
                ? ((s = this.relative_container.offset()),
                  (i = [
                    this.containment[0] + s.left,
                    this.containment[1] + s.top,
                    this.containment[2] + s.left,
                    this.containment[3] + s.top,
                  ]))
                : (i = this.containment),
              e.pageX - this.offset.click.left < i[0] &&
                (h = i[0] + this.offset.click.left),
              e.pageY - this.offset.click.top < i[1] &&
                (l = i[1] + this.offset.click.top),
              e.pageX - this.offset.click.left > i[2] &&
                (h = i[2] + this.offset.click.left),
              e.pageY - this.offset.click.top > i[3] &&
                (l = i[3] + this.offset.click.top)),
            a.grid &&
              ((n = a.grid[1]
                ? this.originalPageY +
                  Math.round((l - this.originalPageY) / a.grid[1]) * a.grid[1]
                : this.originalPageY),
              (l = i
                ? n - this.offset.click.top >= i[1] ||
                  n - this.offset.click.top > i[3]
                  ? n
                  : n - this.offset.click.top >= i[1]
                  ? n - a.grid[1]
                  : n + a.grid[1]
                : n),
              (o = a.grid[0]
                ? this.originalPageX +
                  Math.round((h - this.originalPageX) / a.grid[0]) * a.grid[0]
                : this.originalPageX),
              (h = i
                ? o - this.offset.click.left >= i[0] ||
                  o - this.offset.click.left > i[2]
                  ? o
                  : o - this.offset.click.left >= i[0]
                  ? o - a.grid[0]
                  : o + a.grid[0]
                : o))),
          {
            top:
              l -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : this.offset.scroll.top),
            left:
              h -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : this.offset.scroll.left),
          }
        );
      },
      _clear: function () {
        this.helper.removeClass("ui-draggable-dragging"),
          this.helper[0] === this.element[0] ||
            this.cancelHelperRemoval ||
            this.helper.remove(),
          (this.helper = null),
          (this.cancelHelperRemoval = !1);
      },
      _trigger: function (e, i, s) {
        return (
          (s = s || this._uiHash()),
          t.ui.plugin.call(this, e, [i, s]),
          "drag" === e &&
            (this.positionAbs = this._convertPositionTo("absolute")),
          t.Widget.prototype._trigger.call(this, e, i, s)
        );
      },
      plugins: {},
      _uiHash: function () {
        return {
          helper: this.helper,
          position: this.position,
          originalPosition: this.originalPosition,
          offset: this.positionAbs,
        };
      },
    }),
      t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i) {
          var s = t(this).data("ui-draggable"),
            n = s.options,
            o = t.extend({}, i, { item: s.element });
          (s.sortables = []),
            t(n.connectToSortable).each(function () {
              var i = t.data(this, "ui-sortable");
              i &&
                !i.options.disabled &&
                (s.sortables.push({
                  instance: i,
                  shouldRevert: i.options.revert,
                }),
                i.refreshPositions(),
                i._trigger("activate", e, o));
            });
        },
        stop: function (e, i) {
          var s = t(this).data("ui-draggable"),
            n = t.extend({}, i, { item: s.element });
          t.each(s.sortables, function () {
            this.instance.isOver
              ? ((this.instance.isOver = 0),
                (s.cancelHelperRemoval = !0),
                (this.instance.cancelHelperRemoval = !1),
                this.shouldRevert &&
                  (this.instance.options.revert = this.shouldRevert),
                this.instance._mouseStop(e),
                (this.instance.options.helper = this.instance.options._helper),
                "original" === s.options.helper &&
                  this.instance.currentItem.css({ top: "auto", left: "auto" }))
              : ((this.instance.cancelHelperRemoval = !1),
                this.instance._trigger("deactivate", e, n));
          });
        },
        drag: function (e, i) {
          var s = t(this).data("ui-draggable"),
            n = this;
          t.each(s.sortables, function () {
            var o = !1,
              a = this;
            (this.instance.positionAbs = s.positionAbs),
              (this.instance.helperProportions = s.helperProportions),
              (this.instance.offset.click = s.offset.click),
              this.instance._intersectsWith(this.instance.containerCache) &&
                ((o = !0),
                t.each(s.sortables, function () {
                  return (
                    (this.instance.positionAbs = s.positionAbs),
                    (this.instance.helperProportions = s.helperProportions),
                    (this.instance.offset.click = s.offset.click),
                    this !== a &&
                      this.instance._intersectsWith(
                        this.instance.containerCache
                      ) &&
                      t.contains(
                        a.instance.element[0],
                        this.instance.element[0]
                      ) &&
                      (o = !1),
                    o
                  );
                })),
              o
                ? (this.instance.isOver ||
                    ((this.instance.isOver = 1),
                    (this.instance.currentItem = t(n)
                      .clone()
                      .removeAttr("id")
                      .appendTo(this.instance.element)
                      .data("ui-sortable-item", !0)),
                    (this.instance.options._helper =
                      this.instance.options.helper),
                    (this.instance.options.helper = function () {
                      return i.helper[0];
                    }),
                    (e.target = this.instance.currentItem[0]),
                    this.instance._mouseCapture(e, !0),
                    this.instance._mouseStart(e, !0, !0),
                    (this.instance.offset.click.top = s.offset.click.top),
                    (this.instance.offset.click.left = s.offset.click.left),
                    (this.instance.offset.parent.left -=
                      s.offset.parent.left - this.instance.offset.parent.left),
                    (this.instance.offset.parent.top -=
                      s.offset.parent.top - this.instance.offset.parent.top),
                    s._trigger("toSortable", e),
                    (s.dropped = this.instance.element),
                    (s.currentItem = s.element),
                    (this.instance.fromOutside = s)),
                  this.instance.currentItem && this.instance._mouseDrag(e))
                : this.instance.isOver &&
                  ((this.instance.isOver = 0),
                  (this.instance.cancelHelperRemoval = !0),
                  (this.instance.options.revert = !1),
                  this.instance._trigger(
                    "out",
                    e,
                    this.instance._uiHash(this.instance)
                  ),
                  this.instance._mouseStop(e, !0),
                  (this.instance.options.helper =
                    this.instance.options._helper),
                  this.instance.currentItem.remove(),
                  this.instance.placeholder &&
                    this.instance.placeholder.remove(),
                  s._trigger("fromSortable", e),
                  (s.dropped = !1));
          });
        },
      }),
      t.ui.plugin.add("draggable", "cursor", {
        start: function () {
          var e = t("body"),
            i = t(this).data("ui-draggable").options;
          e.css("cursor") && (i._cursor = e.css("cursor")),
            e.css("cursor", i.cursor);
        },
        stop: function () {
          var e = t(this).data("ui-draggable").options;
          e._cursor && t("body").css("cursor", e._cursor);
        },
      }),
      t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i) {
          var s = t(i.helper),
            n = t(this).data("ui-draggable").options;
          s.css("opacity") && (n._opacity = s.css("opacity")),
            s.css("opacity", n.opacity);
        },
        stop: function (e, i) {
          var s = t(this).data("ui-draggable").options;
          s._opacity && t(i.helper).css("opacity", s._opacity);
        },
      }),
      t.ui.plugin.add("draggable", "scroll", {
        start: function () {
          var e = t(this).data("ui-draggable");
          e.scrollParent[0] !== document &&
            "HTML" !== e.scrollParent[0].tagName &&
            (e.overflowOffset = e.scrollParent.offset());
        },
        drag: function (e) {
          var i = t(this).data("ui-draggable"),
            s = i.options,
            n = !1;
          i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName
            ? ((s.axis && "x" === s.axis) ||
                (i.overflowOffset.top +
                  i.scrollParent[0].offsetHeight -
                  e.pageY <
                s.scrollSensitivity
                  ? (i.scrollParent[0].scrollTop = n =
                      i.scrollParent[0].scrollTop + s.scrollSpeed)
                  : e.pageY - i.overflowOffset.top < s.scrollSensitivity &&
                    (i.scrollParent[0].scrollTop = n =
                      i.scrollParent[0].scrollTop - s.scrollSpeed)),
              (s.axis && "y" === s.axis) ||
                (i.overflowOffset.left +
                  i.scrollParent[0].offsetWidth -
                  e.pageX <
                s.scrollSensitivity
                  ? (i.scrollParent[0].scrollLeft = n =
                      i.scrollParent[0].scrollLeft + s.scrollSpeed)
                  : e.pageX - i.overflowOffset.left < s.scrollSensitivity &&
                    (i.scrollParent[0].scrollLeft = n =
                      i.scrollParent[0].scrollLeft - s.scrollSpeed)))
            : ((s.axis && "x" === s.axis) ||
                (e.pageY - t(document).scrollTop() < s.scrollSensitivity
                  ? (n = t(document).scrollTop(
                      t(document).scrollTop() - s.scrollSpeed
                    ))
                  : t(window).height() - (e.pageY - t(document).scrollTop()) <
                      s.scrollSensitivity &&
                    (n = t(document).scrollTop(
                      t(document).scrollTop() + s.scrollSpeed
                    ))),
              (s.axis && "y" === s.axis) ||
                (e.pageX - t(document).scrollLeft() < s.scrollSensitivity
                  ? (n = t(document).scrollLeft(
                      t(document).scrollLeft() - s.scrollSpeed
                    ))
                  : t(window).width() - (e.pageX - t(document).scrollLeft()) <
                      s.scrollSensitivity &&
                    (n = t(document).scrollLeft(
                      t(document).scrollLeft() + s.scrollSpeed
                    )))),
            !1 !== n &&
              t.ui.ddmanager &&
              !s.dropBehaviour &&
              t.ui.ddmanager.prepareOffsets(i, e);
        },
      }),
      t.ui.plugin.add("draggable", "snap", {
        start: function () {
          var e = t(this).data("ui-draggable"),
            i = e.options;
          (e.snapElements = []),
            t(
              i.snap.constructor !== String
                ? i.snap.items || ":data(ui-draggable)"
                : i.snap
            ).each(function () {
              var i = t(this),
                s = i.offset();
              this !== e.element[0] &&
                e.snapElements.push({
                  item: this,
                  width: i.outerWidth(),
                  height: i.outerHeight(),
                  top: s.top,
                  left: s.left,
                });
            });
        },
        drag: function (e, i) {
          var s,
            n,
            o,
            a,
            r,
            h,
            l,
            c,
            u,
            d,
            p = t(this).data("ui-draggable"),
            f = p.options,
            g = f.snapTolerance,
            m = i.offset.left,
            v = m + p.helperProportions.width,
            _ = i.offset.top,
            b = _ + p.helperProportions.height;
          for (u = p.snapElements.length - 1; u >= 0; u--)
            (h = (r = p.snapElements[u].left) + p.snapElements[u].width),
              (c = (l = p.snapElements[u].top) + p.snapElements[u].height),
              v < r - g ||
              m > h + g ||
              b < l - g ||
              _ > c + g ||
              !t.contains(
                p.snapElements[u].item.ownerDocument,
                p.snapElements[u].item
              )
                ? (p.snapElements[u].snapping &&
                    p.options.snap.release &&
                    p.options.snap.release.call(
                      p.element,
                      e,
                      t.extend(p._uiHash(), {
                        snapItem: p.snapElements[u].item,
                      })
                    ),
                  (p.snapElements[u].snapping = !1))
                : ("inner" !== f.snapMode &&
                    ((s = Math.abs(l - b) <= g),
                    (n = Math.abs(c - _) <= g),
                    (o = Math.abs(r - v) <= g),
                    (a = Math.abs(h - m) <= g),
                    s &&
                      (i.position.top =
                        p._convertPositionTo("relative", {
                          top: l - p.helperProportions.height,
                          left: 0,
                        }).top - p.margins.top),
                    n &&
                      (i.position.top =
                        p._convertPositionTo("relative", { top: c, left: 0 })
                          .top - p.margins.top),
                    o &&
                      (i.position.left =
                        p._convertPositionTo("relative", {
                          top: 0,
                          left: r - p.helperProportions.width,
                        }).left - p.margins.left),
                    a &&
                      (i.position.left =
                        p._convertPositionTo("relative", { top: 0, left: h })
                          .left - p.margins.left)),
                  (d = s || n || o || a),
                  "outer" !== f.snapMode &&
                    ((s = Math.abs(l - _) <= g),
                    (n = Math.abs(c - b) <= g),
                    (o = Math.abs(r - m) <= g),
                    (a = Math.abs(h - v) <= g),
                    s &&
                      (i.position.top =
                        p._convertPositionTo("relative", { top: l, left: 0 })
                          .top - p.margins.top),
                    n &&
                      (i.position.top =
                        p._convertPositionTo("relative", {
                          top: c - p.helperProportions.height,
                          left: 0,
                        }).top - p.margins.top),
                    o &&
                      (i.position.left =
                        p._convertPositionTo("relative", { top: 0, left: r })
                          .left - p.margins.left),
                    a &&
                      (i.position.left =
                        p._convertPositionTo("relative", {
                          top: 0,
                          left: h - p.helperProportions.width,
                        }).left - p.margins.left)),
                  !p.snapElements[u].snapping &&
                    (s || n || o || a || d) &&
                    p.options.snap.snap &&
                    p.options.snap.snap.call(
                      p.element,
                      e,
                      t.extend(p._uiHash(), {
                        snapItem: p.snapElements[u].item,
                      })
                    ),
                  (p.snapElements[u].snapping = s || n || o || a || d));
        },
      }),
      t.ui.plugin.add("draggable", "stack", {
        start: function () {
          var e,
            i = this.data("ui-draggable").options,
            s = t.makeArray(t(i.stack)).sort(function (e, i) {
              return (
                (parseInt(t(e).css("zIndex"), 10) || 0) -
                (parseInt(t(i).css("zIndex"), 10) || 0)
              );
            });
          s.length &&
            ((e = parseInt(t(s[0]).css("zIndex"), 10) || 0),
            t(s).each(function (i) {
              t(this).css("zIndex", e + i);
            }),
            this.css("zIndex", e + s.length));
        },
      }),
      t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i) {
          var s = t(i.helper),
            n = t(this).data("ui-draggable").options;
          s.css("zIndex") && (n._zIndex = s.css("zIndex")),
            s.css("zIndex", n.zIndex);
        },
        stop: function (e, i) {
          var s = t(this).data("ui-draggable").options;
          s._zIndex && t(i.helper).css("zIndex", s._zIndex);
        },
      });
  })(jQuery),
  (function (t, e) {
    function i(t, e, i) {
      return t > e && t < e + i;
    }
    t.widget("ui.droppable", {
      version: "1.10.3",
      widgetEventPrefix: "drop",
      options: {
        accept: "*",
        activeClass: !1,
        addClasses: !0,
        greedy: !1,
        hoverClass: !1,
        scope: "default",
        tolerance: "intersect",
        activate: null,
        deactivate: null,
        drop: null,
        out: null,
        over: null,
      },
      _create: function () {
        var e = this.options,
          i = e.accept;
        (this.isover = !1),
          (this.isout = !0),
          (this.accept = t.isFunction(i)
            ? i
            : function (t) {
                return t.is(i);
              }),
          (this.proportions = {
            width: this.element[0].offsetWidth,
            height: this.element[0].offsetHeight,
          }),
          (t.ui.ddmanager.droppables[e.scope] =
            t.ui.ddmanager.droppables[e.scope] || []),
          t.ui.ddmanager.droppables[e.scope].push(this),
          e.addClasses && this.element.addClass("ui-droppable");
      },
      _destroy: function () {
        for (
          var e = 0, i = t.ui.ddmanager.droppables[this.options.scope];
          e < i.length;
          e++
        )
          i[e] === this && i.splice(e, 1);
        this.element.removeClass("ui-droppable ui-droppable-disabled");
      },
      _setOption: function (e, i) {
        "accept" === e &&
          (this.accept = t.isFunction(i)
            ? i
            : function (t) {
                return t.is(i);
              }),
          t.Widget.prototype._setOption.apply(this, arguments);
      },
      _activate: function (e) {
        var i = t.ui.ddmanager.current;
        this.options.activeClass &&
          this.element.addClass(this.options.activeClass),
          i && this._trigger("activate", e, this.ui(i));
      },
      _deactivate: function (e) {
        var i = t.ui.ddmanager.current;
        this.options.activeClass &&
          this.element.removeClass(this.options.activeClass),
          i && this._trigger("deactivate", e, this.ui(i));
      },
      _over: function (e) {
        var i = t.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this.options.hoverClass &&
            this.element.addClass(this.options.hoverClass),
          this._trigger("over", e, this.ui(i)));
      },
      _out: function (e) {
        var i = t.ui.ddmanager.current;
        i &&
          (i.currentItem || i.element)[0] !== this.element[0] &&
          this.accept.call(this.element[0], i.currentItem || i.element) &&
          (this.options.hoverClass &&
            this.element.removeClass(this.options.hoverClass),
          this._trigger("out", e, this.ui(i)));
      },
      _drop: function (e, i) {
        var s = i || t.ui.ddmanager.current,
          n = !1;
        return (
          !(!s || (s.currentItem || s.element)[0] === this.element[0]) &&
          (this.element
            .find(":data(ui-droppable)")
            .not(".ui-draggable-dragging")
            .each(function () {
              var e = t.data(this, "ui-droppable");
              if (
                e.options.greedy &&
                !e.options.disabled &&
                e.options.scope === s.options.scope &&
                e.accept.call(e.element[0], s.currentItem || s.element) &&
                t.ui.intersect(
                  s,
                  t.extend(e, { offset: e.element.offset() }),
                  e.options.tolerance
                )
              )
                return (n = !0), !1;
            }),
          !n &&
            !!this.accept.call(this.element[0], s.currentItem || s.element) &&
            (this.options.activeClass &&
              this.element.removeClass(this.options.activeClass),
            this.options.hoverClass &&
              this.element.removeClass(this.options.hoverClass),
            this._trigger("drop", e, this.ui(s)),
            this.element))
        );
      },
      ui: function (t) {
        return {
          draggable: t.currentItem || t.element,
          helper: t.helper,
          position: t.position,
          offset: t.positionAbs,
        };
      },
    }),
      (t.ui.intersect = function (t, e, s) {
        if (!e.offset) return !1;
        var n,
          o,
          a = (t.positionAbs || t.position.absolute).left,
          r = a + t.helperProportions.width,
          h = (t.positionAbs || t.position.absolute).top,
          l = h + t.helperProportions.height,
          c = e.offset.left,
          u = c + e.proportions.width,
          d = e.offset.top,
          p = d + e.proportions.height;
        switch (s) {
          case "fit":
            return c <= a && r <= u && d <= h && l <= p;
          case "intersect":
            return (
              c < a + t.helperProportions.width / 2 &&
              r - t.helperProportions.width / 2 < u &&
              d < h + t.helperProportions.height / 2 &&
              l - t.helperProportions.height / 2 < p
            );
          case "pointer":
            return (
              (n =
                (t.positionAbs || t.position.absolute).left +
                (t.clickOffset || t.offset.click).left),
              (o =
                (t.positionAbs || t.position.absolute).top +
                (t.clickOffset || t.offset.click).top),
              i(o, d, e.proportions.height) && i(n, c, e.proportions.width)
            );
          case "touch":
            return (
              ((h >= d && h <= p) || (l >= d && l <= p) || (h < d && l > p)) &&
              ((a >= c && a <= u) || (r >= c && r <= u) || (a < c && r > u))
            );
          default:
            return !1;
        }
      }),
      (t.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function (e, i) {
          var s,
            n,
            o = t.ui.ddmanager.droppables[e.options.scope] || [],
            a = i ? i.type : null,
            r = (e.currentItem || e.element)
              .find(":data(ui-droppable)")
              .addBack();
          t: for (s = 0; s < o.length; s++)
            if (
              !(
                o[s].options.disabled ||
                (e &&
                  !o[s].accept.call(
                    o[s].element[0],
                    e.currentItem || e.element
                  ))
              )
            ) {
              for (n = 0; n < r.length; n++)
                if (r[n] === o[s].element[0]) {
                  o[s].proportions.height = 0;
                  continue t;
                }
              (o[s].visible = "none" !== o[s].element.css("display")),
                o[s].visible &&
                  ("mousedown" === a && o[s]._activate.call(o[s], i),
                  (o[s].offset = o[s].element.offset()),
                  (o[s].proportions = {
                    width: o[s].element[0].offsetWidth,
                    height: o[s].element[0].offsetHeight,
                  }));
            }
        },
        drop: function (e, i) {
          var s = !1;
          return (
            t.each(
              (t.ui.ddmanager.droppables[e.options.scope] || []).slice(),
              function () {
                this.options &&
                  (!this.options.disabled &&
                    this.visible &&
                    t.ui.intersect(e, this, this.options.tolerance) &&
                    (s = this._drop.call(this, i) || s),
                  !this.options.disabled &&
                    this.visible &&
                    this.accept.call(
                      this.element[0],
                      e.currentItem || e.element
                    ) &&
                    ((this.isout = !0),
                    (this.isover = !1),
                    this._deactivate.call(this, i)));
              }
            ),
            s
          );
        },
        dragStart: function (e, i) {
          e.element.parentsUntil("body").bind("scroll.droppable", function () {
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
          });
        },
        drag: function (e, i) {
          e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i),
            t.each(
              t.ui.ddmanager.droppables[e.options.scope] || [],
              function () {
                if (
                  !this.options.disabled &&
                  !this.greedyChild &&
                  this.visible
                ) {
                  var s,
                    n,
                    o,
                    a = t.ui.intersect(e, this, this.options.tolerance),
                    r =
                      !a && this.isover
                        ? "isout"
                        : a && !this.isover
                        ? "isover"
                        : null;
                  r &&
                    (this.options.greedy &&
                      ((n = this.options.scope),
                      (o = this.element
                        .parents(":data(ui-droppable)")
                        .filter(function () {
                          return (
                            t.data(this, "ui-droppable").options.scope === n
                          );
                        })).length &&
                        ((s = t.data(o[0], "ui-droppable")).greedyChild =
                          "isover" === r)),
                    s &&
                      "isover" === r &&
                      ((s.isover = !1), (s.isout = !0), s._out.call(s, i)),
                    (this[r] = !0),
                    (this["isout" === r ? "isover" : "isout"] = !1),
                    this["isover" === r ? "_over" : "_out"].call(this, i),
                    s &&
                      "isout" === r &&
                      ((s.isout = !1), (s.isover = !0), s._over.call(s, i)));
                }
              }
            );
        },
        dragStop: function (e, i) {
          e.element.parentsUntil("body").unbind("scroll.droppable"),
            e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i);
        },
      });
  })(jQuery),
  (function (t, e) {
    function i(t) {
      return parseInt(t, 10) || 0;
    }
    function s(t) {
      return !isNaN(parseInt(t, 10));
    }
    t.widget("ui.resizable", t.ui.mouse, {
      version: "1.10.3",
      widgetEventPrefix: "resize",
      options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: "slow",
        animateEasing: "swing",
        aspectRatio: !1,
        autoHide: !1,
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: "e,s,se",
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 90,
        resize: null,
        start: null,
        stop: null,
      },
      _create: function () {
        var e,
          i,
          s,
          n,
          o = this,
          a = this.options;
        if (
          (this.element.addClass("ui-resizable"),
          t.extend(this, {
            _aspectRatio: !!a.aspectRatio,
            aspectRatio: a.aspectRatio,
            originalElement: this.element,
            _proportionallyResizeElements: [],
            _helper:
              a.helper || a.ghost || a.animate
                ? a.helper || "ui-resizable-helper"
                : null,
          }),
          this.element[0].nodeName.match(
            /canvas|textarea|input|select|button|img/i
          ) &&
            (this.element.wrap(
              t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css(
                {
                  position: this.element.css("position"),
                  width: this.element.outerWidth(),
                  height: this.element.outerHeight(),
                  top: this.element.css("top"),
                  left: this.element.css("left"),
                }
              )
            ),
            (this.element = this.element
              .parent()
              .data("ui-resizable", this.element.data("ui-resizable"))),
            (this.elementIsWrapper = !0),
            this.element.css({
              marginLeft: this.originalElement.css("marginLeft"),
              marginTop: this.originalElement.css("marginTop"),
              marginRight: this.originalElement.css("marginRight"),
              marginBottom: this.originalElement.css("marginBottom"),
            }),
            this.originalElement.css({
              marginLeft: 0,
              marginTop: 0,
              marginRight: 0,
              marginBottom: 0,
            }),
            (this.originalResizeStyle = this.originalElement.css("resize")),
            this.originalElement.css("resize", "none"),
            this._proportionallyResizeElements.push(
              this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block",
              })
            ),
            this.originalElement.css({
              margin: this.originalElement.css("margin"),
            }),
            this._proportionallyResize()),
          (this.handles =
            a.handles ||
            (t(".ui-resizable-handle", this.element).length
              ? {
                  n: ".ui-resizable-n",
                  e: ".ui-resizable-e",
                  s: ".ui-resizable-s",
                  w: ".ui-resizable-w",
                  se: ".ui-resizable-se",
                  sw: ".ui-resizable-sw",
                  ne: ".ui-resizable-ne",
                  nw: ".ui-resizable-nw",
                }
              : "e,s,se")),
          this.handles.constructor === String)
        )
          for (
            "all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"),
              e = this.handles.split(","),
              this.handles = {},
              i = 0;
            i < e.length;
            i++
          )
            (s = t.trim(e[i])),
              (n = t(
                "<div class='ui-resizable-handle " +
                  ("ui-resizable-" + s) +
                  "'></div>"
              )).css({ zIndex: a.zIndex }),
              "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),
              (this.handles[s] = ".ui-resizable-" + s),
              this.element.append(n);
        (this._renderAxis = function (e) {
          var i, s, n, o;
          e = e || this.element;
          for (i in this.handles)
            this.handles[i].constructor === String &&
              (this.handles[i] = t(this.handles[i], this.element).show()),
              this.elementIsWrapper &&
                this.originalElement[0].nodeName.match(
                  /textarea|input|select|button/i
                ) &&
                ((s = t(this.handles[i], this.element)),
                (o = /sw|ne|nw|se|n|s/.test(i)
                  ? s.outerHeight()
                  : s.outerWidth()),
                (n = [
                  "padding",
                  /ne|nw|n/.test(i)
                    ? "Top"
                    : /se|sw|s/.test(i)
                    ? "Bottom"
                    : /^e$/.test(i)
                    ? "Right"
                    : "Left",
                ].join("")),
                e.css(n, o),
                this._proportionallyResize()),
              t(this.handles[i]).length;
        }),
          this._renderAxis(this.element),
          (this._handles = t(
            ".ui-resizable-handle",
            this.element
          ).disableSelection()),
          this._handles.mouseover(function () {
            o.resizing ||
              (this.className &&
                (n = this.className.match(
                  /ui-resizable-(se|sw|ne|nw|n|e|s|w)/i
                )),
              (o.axis = n && n[1] ? n[1] : "se"));
          }),
          a.autoHide &&
            (this._handles.hide(),
            t(this.element)
              .addClass("ui-resizable-autohide")
              .mouseenter(function () {
                a.disabled ||
                  (t(this).removeClass("ui-resizable-autohide"),
                  o._handles.show());
              })
              .mouseleave(function () {
                a.disabled ||
                  o.resizing ||
                  (t(this).addClass("ui-resizable-autohide"),
                  o._handles.hide());
              })),
          this._mouseInit();
      },
      _destroy: function () {
        this._mouseDestroy();
        var e,
          i = function (e) {
            t(e)
              .removeClass(
                "ui-resizable ui-resizable-disabled ui-resizable-resizing"
              )
              .removeData("resizable")
              .removeData("ui-resizable")
              .unbind(".resizable")
              .find(".ui-resizable-handle")
              .remove();
          };
        return (
          this.elementIsWrapper &&
            (i(this.element),
            (e = this.element),
            this.originalElement
              .css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left"),
              })
              .insertAfter(e),
            e.remove()),
          this.originalElement.css("resize", this.originalResizeStyle),
          i(this.originalElement),
          this
        );
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n = !1;
        for (i in this.handles)
          ((s = t(this.handles[i])[0]) === e.target ||
            t.contains(s, e.target)) &&
            (n = !0);
        return !this.options.disabled && n;
      },
      _mouseStart: function (e) {
        var s,
          n,
          o,
          a = this.options,
          r = this.element.position(),
          h = this.element;
        return (
          (this.resizing = !0),
          /absolute/.test(h.css("position"))
            ? h.css({
                position: "absolute",
                top: h.css("top"),
                left: h.css("left"),
              })
            : h.is(".ui-draggable") &&
              h.css({ position: "absolute", top: r.top, left: r.left }),
          this._renderProxy(),
          (s = i(this.helper.css("left"))),
          (n = i(this.helper.css("top"))),
          a.containment &&
            ((s += t(a.containment).scrollLeft() || 0),
            (n += t(a.containment).scrollTop() || 0)),
          (this.offset = this.helper.offset()),
          (this.position = { left: s, top: n }),
          (this.size = this._helper
            ? { width: h.outerWidth(), height: h.outerHeight() }
            : { width: h.width(), height: h.height() }),
          (this.originalSize = this._helper
            ? { width: h.outerWidth(), height: h.outerHeight() }
            : { width: h.width(), height: h.height() }),
          (this.originalPosition = { left: s, top: n }),
          (this.sizeDiff = {
            width: h.outerWidth() - h.width(),
            height: h.outerHeight() - h.height(),
          }),
          (this.originalMousePosition = { left: e.pageX, top: e.pageY }),
          (this.aspectRatio =
            "number" == typeof a.aspectRatio
              ? a.aspectRatio
              : this.originalSize.width / this.originalSize.height || 1),
          (o = t(".ui-resizable-" + this.axis).css("cursor")),
          t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o),
          h.addClass("ui-resizable-resizing"),
          this._propagate("start", e),
          !0
        );
      },
      _mouseDrag: function (e) {
        var i,
          s = this.helper,
          n = {},
          o = this.originalMousePosition,
          a = this.axis,
          r = this.position.top,
          h = this.position.left,
          l = this.size.width,
          c = this.size.height,
          u = e.pageX - o.left || 0,
          d = e.pageY - o.top || 0,
          p = this._change[a];
        return (
          !!p &&
          ((i = p.apply(this, [e, u, d])),
          this._updateVirtualBoundaries(e.shiftKey),
          (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)),
          (i = this._respectSize(i, e)),
          this._updateCache(i),
          this._propagate("resize", e),
          this.position.top !== r && (n.top = this.position.top + "px"),
          this.position.left !== h && (n.left = this.position.left + "px"),
          this.size.width !== l && (n.width = this.size.width + "px"),
          this.size.height !== c && (n.height = this.size.height + "px"),
          s.css(n),
          !this._helper &&
            this._proportionallyResizeElements.length &&
            this._proportionallyResize(),
          t.isEmptyObject(n) || this._trigger("resize", e, this.ui()),
          !1)
        );
      },
      _mouseStop: function (e) {
        this.resizing = !1;
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l = this.options,
          c = this;
        return (
          this._helper &&
            ((n =
              (s =
                (i = this._proportionallyResizeElements).length &&
                /textarea/i.test(i[0].nodeName)) && t.ui.hasScroll(i[0], "left")
                ? 0
                : c.sizeDiff.height),
            (o = s ? 0 : c.sizeDiff.width),
            (a = {
              width: c.helper.width() - o,
              height: c.helper.height() - n,
            }),
            (r =
              parseInt(c.element.css("left"), 10) +
                (c.position.left - c.originalPosition.left) || null),
            (h =
              parseInt(c.element.css("top"), 10) +
                (c.position.top - c.originalPosition.top) || null),
            l.animate || this.element.css(t.extend(a, { top: h, left: r })),
            c.helper.height(c.size.height),
            c.helper.width(c.size.width),
            this._helper && !l.animate && this._proportionallyResize()),
          t("body").css("cursor", "auto"),
          this.element.removeClass("ui-resizable-resizing"),
          this._propagate("stop", e),
          this._helper && this.helper.remove(),
          !1
        );
      },
      _updateVirtualBoundaries: function (t) {
        var e,
          i,
          n,
          o,
          a,
          r = this.options;
        (a = {
          minWidth: s(r.minWidth) ? r.minWidth : 0,
          maxWidth: s(r.maxWidth) ? r.maxWidth : 1 / 0,
          minHeight: s(r.minHeight) ? r.minHeight : 0,
          maxHeight: s(r.maxHeight) ? r.maxHeight : 1 / 0,
        }),
          (this._aspectRatio || t) &&
            ((e = a.minHeight * this.aspectRatio),
            (n = a.minWidth / this.aspectRatio),
            (i = a.maxHeight * this.aspectRatio),
            (o = a.maxWidth / this.aspectRatio),
            e > a.minWidth && (a.minWidth = e),
            n > a.minHeight && (a.minHeight = n),
            i < a.maxWidth && (a.maxWidth = i),
            o < a.maxHeight && (a.maxHeight = o)),
          (this._vBoundaries = a);
      },
      _updateCache: function (t) {
        (this.offset = this.helper.offset()),
          s(t.left) && (this.position.left = t.left),
          s(t.top) && (this.position.top = t.top),
          s(t.height) && (this.size.height = t.height),
          s(t.width) && (this.size.width = t.width);
      },
      _updateRatio: function (t) {
        var e = this.position,
          i = this.size,
          n = this.axis;
        return (
          s(t.height)
            ? (t.width = t.height * this.aspectRatio)
            : s(t.width) && (t.height = t.width / this.aspectRatio),
          "sw" === n &&
            ((t.left = e.left + (i.width - t.width)), (t.top = null)),
          "nw" === n &&
            ((t.top = e.top + (i.height - t.height)),
            (t.left = e.left + (i.width - t.width))),
          t
        );
      },
      _respectSize: function (t) {
        var e = this._vBoundaries,
          i = this.axis,
          n = s(t.width) && e.maxWidth && e.maxWidth < t.width,
          o = s(t.height) && e.maxHeight && e.maxHeight < t.height,
          a = s(t.width) && e.minWidth && e.minWidth > t.width,
          r = s(t.height) && e.minHeight && e.minHeight > t.height,
          h = this.originalPosition.left + this.originalSize.width,
          l = this.position.top + this.size.height,
          c = /sw|nw|w/.test(i),
          u = /nw|ne|n/.test(i);
        return (
          a && (t.width = e.minWidth),
          r && (t.height = e.minHeight),
          n && (t.width = e.maxWidth),
          o && (t.height = e.maxHeight),
          a && c && (t.left = h - e.minWidth),
          n && c && (t.left = h - e.maxWidth),
          r && u && (t.top = l - e.minHeight),
          o && u && (t.top = l - e.maxHeight),
          t.width || t.height || t.left || !t.top
            ? t.width || t.height || t.top || !t.left || (t.left = null)
            : (t.top = null),
          t
        );
      },
      _proportionallyResize: function () {
        if (this._proportionallyResizeElements.length) {
          var t,
            e,
            i,
            s,
            n,
            o = this.helper || this.element;
          for (t = 0; t < this._proportionallyResizeElements.length; t++) {
            if (((n = this._proportionallyResizeElements[t]), !this.borderDif))
              for (
                this.borderDif = [],
                  i = [
                    n.css("borderTopWidth"),
                    n.css("borderRightWidth"),
                    n.css("borderBottomWidth"),
                    n.css("borderLeftWidth"),
                  ],
                  s = [
                    n.css("paddingTop"),
                    n.css("paddingRight"),
                    n.css("paddingBottom"),
                    n.css("paddingLeft"),
                  ],
                  e = 0;
                e < i.length;
                e++
              )
                this.borderDif[e] =
                  (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
            n.css({
              height: o.height() - this.borderDif[0] - this.borderDif[2] || 0,
              width: o.width() - this.borderDif[1] - this.borderDif[3] || 0,
            });
          }
        }
      },
      _renderProxy: function () {
        var e = this.element,
          i = this.options;
        (this.elementOffset = e.offset()),
          this._helper
            ? ((this.helper =
                this.helper || t("<div style='overflow:hidden;'></div>")),
              this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex,
              }),
              this.helper.appendTo("body").disableSelection())
            : (this.helper = this.element);
      },
      _change: {
        e: function (t, e) {
          return { width: this.originalSize.width + e };
        },
        w: function (t, e) {
          var i = this.originalSize;
          return { left: this.originalPosition.left + e, width: i.width - e };
        },
        n: function (t, e, i) {
          var s = this.originalSize;
          return { top: this.originalPosition.top + i, height: s.height - i };
        },
        s: function (t, e, i) {
          return { height: this.originalSize.height + i };
        },
        se: function (e, i, s) {
          return t.extend(
            this._change.s.apply(this, arguments),
            this._change.e.apply(this, [e, i, s])
          );
        },
        sw: function (e, i, s) {
          return t.extend(
            this._change.s.apply(this, arguments),
            this._change.w.apply(this, [e, i, s])
          );
        },
        ne: function (e, i, s) {
          return t.extend(
            this._change.n.apply(this, arguments),
            this._change.e.apply(this, [e, i, s])
          );
        },
        nw: function (e, i, s) {
          return t.extend(
            this._change.n.apply(this, arguments),
            this._change.w.apply(this, [e, i, s])
          );
        },
      },
      _propagate: function (e, i) {
        t.ui.plugin.call(this, e, [i, this.ui()]),
          "resize" !== e && this._trigger(e, i, this.ui());
      },
      plugins: {},
      ui: function () {
        return {
          originalElement: this.originalElement,
          element: this.element,
          helper: this.helper,
          position: this.position,
          size: this.size,
          originalSize: this.originalSize,
          originalPosition: this.originalPosition,
        };
      },
    }),
      t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
          var i = t(this).data("ui-resizable"),
            s = i.options,
            n = i._proportionallyResizeElements,
            o = n.length && /textarea/i.test(n[0].nodeName),
            a = o && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
            r = o ? 0 : i.sizeDiff.width,
            h = { width: i.size.width - r, height: i.size.height - a },
            l =
              parseInt(i.element.css("left"), 10) +
                (i.position.left - i.originalPosition.left) || null,
            c =
              parseInt(i.element.css("top"), 10) +
                (i.position.top - i.originalPosition.top) || null;
          i.element.animate(t.extend(h, c && l ? { top: c, left: l } : {}), {
            duration: s.animateDuration,
            easing: s.animateEasing,
            step: function () {
              var s = {
                width: parseInt(i.element.css("width"), 10),
                height: parseInt(i.element.css("height"), 10),
                top: parseInt(i.element.css("top"), 10),
                left: parseInt(i.element.css("left"), 10),
              };
              n &&
                n.length &&
                t(n[0]).css({ width: s.width, height: s.height }),
                i._updateCache(s),
                i._propagate("resize", e);
            },
          });
        },
      }),
      t.ui.plugin.add("resizable", "containment", {
        start: function () {
          var e,
            s,
            n,
            o,
            a,
            r,
            h,
            l = t(this).data("ui-resizable"),
            c = l.options,
            u = l.element,
            d = c.containment,
            p =
              d instanceof t
                ? d.get(0)
                : /parent/.test(d)
                ? u.parent().get(0)
                : d;
          p &&
            ((l.containerElement = t(p)),
            /document/.test(d) || d === document
              ? ((l.containerOffset = { left: 0, top: 0 }),
                (l.containerPosition = { left: 0, top: 0 }),
                (l.parentData = {
                  element: t(document),
                  left: 0,
                  top: 0,
                  width: t(document).width(),
                  height:
                    t(document).height() ||
                    document.body.parentNode.scrollHeight,
                }))
              : ((e = t(p)),
                (s = []),
                t(["Top", "Right", "Left", "Bottom"]).each(function (t, n) {
                  s[t] = i(e.css("padding" + n));
                }),
                (l.containerOffset = e.offset()),
                (l.containerPosition = e.position()),
                (l.containerSize = {
                  height: e.innerHeight() - s[3],
                  width: e.innerWidth() - s[1],
                }),
                (n = l.containerOffset),
                (o = l.containerSize.height),
                (a = l.containerSize.width),
                (r = t.ui.hasScroll(p, "left") ? p.scrollWidth : a),
                (h = t.ui.hasScroll(p) ? p.scrollHeight : o),
                (l.parentData = {
                  element: p,
                  left: n.left,
                  top: n.top,
                  width: r,
                  height: h,
                })));
        },
        resize: function (e) {
          var i,
            s,
            n,
            o,
            a = t(this).data("ui-resizable"),
            r = a.options,
            h = a.containerOffset,
            l = a.position,
            c = a._aspectRatio || e.shiftKey,
            u = { top: 0, left: 0 },
            d = a.containerElement;
          d[0] !== document && /static/.test(d.css("position")) && (u = h),
            l.left < (a._helper ? h.left : 0) &&
              ((a.size.width =
                a.size.width +
                (a._helper
                  ? a.position.left - h.left
                  : a.position.left - u.left)),
              c && (a.size.height = a.size.width / a.aspectRatio),
              (a.position.left = r.helper ? h.left : 0)),
            l.top < (a._helper ? h.top : 0) &&
              ((a.size.height =
                a.size.height +
                (a._helper ? a.position.top - h.top : a.position.top)),
              c && (a.size.width = a.size.height * a.aspectRatio),
              (a.position.top = a._helper ? h.top : 0)),
            (a.offset.left = a.parentData.left + a.position.left),
            (a.offset.top = a.parentData.top + a.position.top),
            (i = Math.abs(
              (a._helper, a.offset.left - u.left + a.sizeDiff.width)
            )),
            (s = Math.abs(
              (a._helper ? a.offset.top - u.top : a.offset.top - h.top) +
                a.sizeDiff.height
            )),
            (n = a.containerElement.get(0) === a.element.parent().get(0)),
            (o = /relative|absolute/.test(a.containerElement.css("position"))),
            n && o && (i -= a.parentData.left),
            i + a.size.width >= a.parentData.width &&
              ((a.size.width = a.parentData.width - i),
              c && (a.size.height = a.size.width / a.aspectRatio)),
            s + a.size.height >= a.parentData.height &&
              ((a.size.height = a.parentData.height - s),
              c && (a.size.width = a.size.height * a.aspectRatio));
        },
        stop: function () {
          var e = t(this).data("ui-resizable"),
            i = e.options,
            s = e.containerOffset,
            n = e.containerPosition,
            o = e.containerElement,
            a = t(e.helper),
            r = a.offset(),
            h = a.outerWidth() - e.sizeDiff.width,
            l = a.outerHeight() - e.sizeDiff.height;
          e._helper &&
            !i.animate &&
            /relative/.test(o.css("position")) &&
            t(this).css({
              left: r.left - n.left - s.left,
              width: h,
              height: l,
            }),
            e._helper &&
              !i.animate &&
              /static/.test(o.css("position")) &&
              t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l,
              });
        },
      }),
      t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
          var e = t(this).data("ui-resizable").options,
            i = function (e) {
              t(e).each(function () {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                  width: parseInt(e.width(), 10),
                  height: parseInt(e.height(), 10),
                  left: parseInt(e.css("left"), 10),
                  top: parseInt(e.css("top"), 10),
                });
              });
            };
          "object" != typeof e.alsoResize || e.alsoResize.parentNode
            ? i(e.alsoResize)
            : e.alsoResize.length
            ? ((e.alsoResize = e.alsoResize[0]), i(e.alsoResize))
            : t.each(e.alsoResize, function (t) {
                i(t);
              });
        },
        resize: function (e, i) {
          var s = t(this).data("ui-resizable"),
            n = s.options,
            o = s.originalSize,
            a = s.originalPosition,
            r = {
              height: s.size.height - o.height || 0,
              width: s.size.width - o.width || 0,
              top: s.position.top - a.top || 0,
              left: s.position.left - a.left || 0,
            },
            h = function (e, s) {
              t(e).each(function () {
                var e = t(this),
                  n = t(this).data("ui-resizable-alsoresize"),
                  o = {},
                  a =
                    s && s.length
                      ? s
                      : e.parents(i.originalElement[0]).length
                      ? ["width", "height"]
                      : ["width", "height", "top", "left"];
                t.each(a, function (t, e) {
                  var i = (n[e] || 0) + (r[e] || 0);
                  i && i >= 0 && (o[e] = i || null);
                }),
                  e.css(o);
              });
            };
          "object" != typeof n.alsoResize || n.alsoResize.nodeType
            ? h(n.alsoResize)
            : t.each(n.alsoResize, function (t, e) {
                h(t, e);
              });
        },
        stop: function () {
          t(this).removeData("resizable-alsoresize");
        },
      }),
      t.ui.plugin.add("resizable", "ghost", {
        start: function () {
          var e = t(this).data("ui-resizable"),
            i = e.options,
            s = e.size;
          (e.ghost = e.originalElement.clone()),
            e.ghost
              .css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0,
              })
              .addClass("ui-resizable-ghost")
              .addClass("string" == typeof i.ghost ? i.ghost : ""),
            e.ghost.appendTo(e.helper);
        },
        resize: function () {
          var e = t(this).data("ui-resizable");
          e.ghost &&
            e.ghost.css({
              position: "relative",
              height: e.size.height,
              width: e.size.width,
            });
        },
        stop: function () {
          var e = t(this).data("ui-resizable");
          e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0));
        },
      }),
      t.ui.plugin.add("resizable", "grid", {
        resize: function () {
          var e = t(this).data("ui-resizable"),
            i = e.options,
            s = e.size,
            n = e.originalSize,
            o = e.originalPosition,
            a = e.axis,
            r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
            h = r[0] || 1,
            l = r[1] || 1,
            c = Math.round((s.width - n.width) / h) * h,
            u = Math.round((s.height - n.height) / l) * l,
            d = n.width + c,
            p = n.height + u,
            f = i.maxWidth && i.maxWidth < d,
            g = i.maxHeight && i.maxHeight < p,
            m = i.minWidth && i.minWidth > d,
            v = i.minHeight && i.minHeight > p;
          (i.grid = r),
            m && (d += h),
            v && (p += l),
            f && (d -= h),
            g && (p -= l),
            /^(se|s|e)$/.test(a)
              ? ((e.size.width = d), (e.size.height = p))
              : /^(ne)$/.test(a)
              ? ((e.size.width = d),
                (e.size.height = p),
                (e.position.top = o.top - u))
              : /^(sw)$/.test(a)
              ? ((e.size.width = d),
                (e.size.height = p),
                (e.position.left = o.left - c))
              : ((e.size.width = d),
                (e.size.height = p),
                (e.position.top = o.top - u),
                (e.position.left = o.left - c));
        },
      });
  })(jQuery),
  (function (t, e) {
    t.widget("ui.selectable", t.ui.mouse, {
      version: "1.10.3",
      options: {
        appendTo: "body",
        autoRefresh: !0,
        distance: 0,
        filter: "*",
        tolerance: "touch",
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null,
      },
      _create: function () {
        var e,
          i = this;
        this.element.addClass("ui-selectable"),
          (this.dragged = !1),
          (this.refresh = function () {
            (e = t(i.options.filter, i.element[0])).addClass("ui-selectee"),
              e.each(function () {
                var e = t(this),
                  i = e.offset();
                t.data(this, "selectable-item", {
                  element: this,
                  $element: e,
                  left: i.left,
                  top: i.top,
                  right: i.left + e.outerWidth(),
                  bottom: i.top + e.outerHeight(),
                  startselected: !1,
                  selected: e.hasClass("ui-selected"),
                  selecting: e.hasClass("ui-selecting"),
                  unselecting: e.hasClass("ui-unselecting"),
                });
              });
          }),
          this.refresh(),
          (this.selectees = e.addClass("ui-selectee")),
          this._mouseInit(),
          (this.helper = t("<div class='ui-selectable-helper'></div>"));
      },
      _destroy: function () {
        this.selectees.removeClass("ui-selectee").removeData("selectable-item"),
          this.element.removeClass("ui-selectable ui-selectable-disabled"),
          this._mouseDestroy();
      },
      _mouseStart: function (e) {
        var i = this,
          s = this.options;
        (this.opos = [e.pageX, e.pageY]),
          this.options.disabled ||
            ((this.selectees = t(s.filter, this.element[0])),
            this._trigger("start", e),
            t(s.appendTo).append(this.helper),
            this.helper.css({
              left: e.pageX,
              top: e.pageY,
              width: 0,
              height: 0,
            }),
            s.autoRefresh && this.refresh(),
            this.selectees.filter(".ui-selected").each(function () {
              var s = t.data(this, "selectable-item");
              (s.startselected = !0),
                e.metaKey ||
                  e.ctrlKey ||
                  (s.$element.removeClass("ui-selected"),
                  (s.selected = !1),
                  s.$element.addClass("ui-unselecting"),
                  (s.unselecting = !0),
                  i._trigger("unselecting", e, { unselecting: s.element }));
            }),
            t(e.target)
              .parents()
              .addBack()
              .each(function () {
                var s,
                  n = t.data(this, "selectable-item");
                if (n)
                  return (
                    (s =
                      (!e.metaKey && !e.ctrlKey) ||
                      !n.$element.hasClass("ui-selected")),
                    n.$element
                      .removeClass(s ? "ui-unselecting" : "ui-selected")
                      .addClass(s ? "ui-selecting" : "ui-unselecting"),
                    (n.unselecting = !s),
                    (n.selecting = s),
                    (n.selected = s),
                    s
                      ? i._trigger("selecting", e, { selecting: n.element })
                      : i._trigger("unselecting", e, {
                          unselecting: n.element,
                        }),
                    !1
                  );
              }));
      },
      _mouseDrag: function (e) {
        if (((this.dragged = !0), !this.options.disabled)) {
          var i,
            s = this,
            n = this.options,
            o = this.opos[0],
            a = this.opos[1],
            r = e.pageX,
            h = e.pageY;
          return (
            o > r && ((i = r), (r = o), (o = i)),
            a > h && ((i = h), (h = a), (a = i)),
            this.helper.css({ left: o, top: a, width: r - o, height: h - a }),
            this.selectees.each(function () {
              var i = t.data(this, "selectable-item"),
                l = !1;
              i &&
                i.element !== s.element[0] &&
                ("touch" === n.tolerance
                  ? (l = !(
                      i.left > r ||
                      i.right < o ||
                      i.top > h ||
                      i.bottom < a
                    ))
                  : "fit" === n.tolerance &&
                    (l =
                      i.left > o && i.right < r && i.top > a && i.bottom < h),
                l
                  ? (i.selected &&
                      (i.$element.removeClass("ui-selected"),
                      (i.selected = !1)),
                    i.unselecting &&
                      (i.$element.removeClass("ui-unselecting"),
                      (i.unselecting = !1)),
                    i.selecting ||
                      (i.$element.addClass("ui-selecting"),
                      (i.selecting = !0),
                      s._trigger("selecting", e, { selecting: i.element })))
                  : (i.selecting &&
                      ((e.metaKey || e.ctrlKey) && i.startselected
                        ? (i.$element.removeClass("ui-selecting"),
                          (i.selecting = !1),
                          i.$element.addClass("ui-selected"),
                          (i.selected = !0))
                        : (i.$element.removeClass("ui-selecting"),
                          (i.selecting = !1),
                          i.startselected &&
                            (i.$element.addClass("ui-unselecting"),
                            (i.unselecting = !0)),
                          s._trigger("unselecting", e, {
                            unselecting: i.element,
                          }))),
                    i.selected &&
                      (e.metaKey ||
                        e.ctrlKey ||
                        i.startselected ||
                        (i.$element.removeClass("ui-selected"),
                        (i.selected = !1),
                        i.$element.addClass("ui-unselecting"),
                        (i.unselecting = !0),
                        s._trigger("unselecting", e, {
                          unselecting: i.element,
                        })))));
            }),
            !1
          );
        }
      },
      _mouseStop: function (e) {
        var i = this;
        return (
          (this.dragged = !1),
          t(".ui-unselecting", this.element[0]).each(function () {
            var s = t.data(this, "selectable-item");
            s.$element.removeClass("ui-unselecting"),
              (s.unselecting = !1),
              (s.startselected = !1),
              i._trigger("unselected", e, { unselected: s.element });
          }),
          t(".ui-selecting", this.element[0]).each(function () {
            var s = t.data(this, "selectable-item");
            s.$element.removeClass("ui-selecting").addClass("ui-selected"),
              (s.selecting = !1),
              (s.selected = !0),
              (s.startselected = !0),
              i._trigger("selected", e, { selected: s.element });
          }),
          this._trigger("stop", e),
          this.helper.remove(),
          !1
        );
      },
    });
  })(jQuery),
  (function (t, e) {
    function i(t, e, i) {
      return t > e && t < e + i;
    }
    function s(t) {
      return (
        /left|right/.test(t.css("float")) ||
        /inline|table-cell/.test(t.css("display"))
      );
    }
    t.widget("ui.sortable", t.ui.mouse, {
      version: "1.10.3",
      widgetEventPrefix: "sort",
      ready: !1,
      options: {
        appendTo: "parent",
        axis: !1,
        connectWith: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        dropOnEmpty: !0,
        forcePlaceholderSize: !1,
        forceHelperSize: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        items: "> *",
        opacity: !1,
        placeholder: !1,
        revert: !1,
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        scope: "default",
        tolerance: "intersect",
        zIndex: 1e3,
        activate: null,
        beforeStop: null,
        change: null,
        deactivate: null,
        out: null,
        over: null,
        receive: null,
        remove: null,
        sort: null,
        start: null,
        stop: null,
        update: null,
      },
      _create: function () {
        var t = this.options;
        (this.containerCache = {}),
          this.element.addClass("ui-sortable"),
          this.refresh(),
          (this.floating =
            !!this.items.length && ("x" === t.axis || s(this.items[0].item))),
          (this.offset = this.element.offset()),
          this._mouseInit(),
          (this.ready = !0);
      },
      _destroy: function () {
        this.element.removeClass("ui-sortable ui-sortable-disabled"),
          this._mouseDestroy();
        for (var t = this.items.length - 1; t >= 0; t--)
          this.items[t].item.removeData(this.widgetName + "-item");
        return this;
      },
      _setOption: function (e, i) {
        "disabled" === e
          ? ((this.options[e] = i),
            this.widget().toggleClass("ui-sortable-disabled", !!i))
          : t.Widget.prototype._setOption.apply(this, arguments);
      },
      _mouseCapture: function (e, i) {
        var s = null,
          n = !1,
          o = this;
        return (
          !this.reverting &&
          !this.options.disabled &&
          "static" !== this.options.type &&
          (this._refreshItems(e),
          t(e.target)
            .parents()
            .each(function () {
              if (t.data(this, o.widgetName + "-item") === o)
                return (s = t(this)), !1;
            }),
          t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)),
          !!s &&
            !(
              this.options.handle &&
              !i &&
              (t(this.options.handle, s)
                .find("*")
                .addBack()
                .each(function () {
                  this === e.target && (n = !0);
                }),
              !n)
            ) &&
            ((this.currentItem = s), this._removeCurrentsFromItems(), !0))
        );
      },
      _mouseStart: function (e, i, s) {
        var n,
          o,
          a = this.options;
        if (
          ((this.currentContainer = this),
          this.refreshPositions(),
          (this.helper = this._createHelper(e)),
          this._cacheHelperProportions(),
          this._cacheMargins(),
          (this.scrollParent = this.helper.scrollParent()),
          (this.offset = this.currentItem.offset()),
          (this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left,
          }),
          t.extend(this.offset, {
            click: {
              left: e.pageX - this.offset.left,
              top: e.pageY - this.offset.top,
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset(),
          }),
          this.helper.css("position", "absolute"),
          (this.cssPosition = this.helper.css("position")),
          (this.originalPosition = this._generatePosition(e)),
          (this.originalPageX = e.pageX),
          (this.originalPageY = e.pageY),
          a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt),
          (this.domPosition = {
            prev: this.currentItem.prev()[0],
            parent: this.currentItem.parent()[0],
          }),
          this.helper[0] !== this.currentItem[0] && this.currentItem.hide(),
          this._createPlaceholder(),
          a.containment && this._setContainment(),
          a.cursor &&
            "auto" !== a.cursor &&
            ((o = this.document.find("body")),
            (this.storedCursor = o.css("cursor")),
            o.css("cursor", a.cursor),
            (this.storedStylesheet = t(
              "<style>*{ cursor: " + a.cursor + " !important; }</style>"
            ).appendTo(o))),
          a.opacity &&
            (this.helper.css("opacity") &&
              (this._storedOpacity = this.helper.css("opacity")),
            this.helper.css("opacity", a.opacity)),
          a.zIndex &&
            (this.helper.css("zIndex") &&
              (this._storedZIndex = this.helper.css("zIndex")),
            this.helper.css("zIndex", a.zIndex)),
          this.scrollParent[0] !== document &&
            "HTML" !== this.scrollParent[0].tagName &&
            (this.overflowOffset = this.scrollParent.offset()),
          this._trigger("start", e, this._uiHash()),
          this._preserveHelperProportions || this._cacheHelperProportions(),
          !s)
        )
          for (n = this.containers.length - 1; n >= 0; n--)
            this.containers[n]._trigger("activate", e, this._uiHash(this));
        return (
          t.ui.ddmanager && (t.ui.ddmanager.current = this),
          t.ui.ddmanager &&
            !a.dropBehaviour &&
            t.ui.ddmanager.prepareOffsets(this, e),
          (this.dragging = !0),
          this.helper.addClass("ui-sortable-helper"),
          this._mouseDrag(e),
          !0
        );
      },
      _mouseDrag: function (e) {
        var i,
          s,
          n,
          o,
          a = this.options,
          r = !1;
        for (
          this.position = this._generatePosition(e),
            this.positionAbs = this._convertPositionTo("absolute"),
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs),
            this.options.scroll &&
              (this.scrollParent[0] !== document &&
              "HTML" !== this.scrollParent[0].tagName
                ? (this.overflowOffset.top +
                    this.scrollParent[0].offsetHeight -
                    e.pageY <
                  a.scrollSensitivity
                    ? (this.scrollParent[0].scrollTop = r =
                        this.scrollParent[0].scrollTop + a.scrollSpeed)
                    : e.pageY - this.overflowOffset.top < a.scrollSensitivity &&
                      (this.scrollParent[0].scrollTop = r =
                        this.scrollParent[0].scrollTop - a.scrollSpeed),
                  this.overflowOffset.left +
                    this.scrollParent[0].offsetWidth -
                    e.pageX <
                  a.scrollSensitivity
                    ? (this.scrollParent[0].scrollLeft = r =
                        this.scrollParent[0].scrollLeft + a.scrollSpeed)
                    : e.pageX - this.overflowOffset.left <
                        a.scrollSensitivity &&
                      (this.scrollParent[0].scrollLeft = r =
                        this.scrollParent[0].scrollLeft - a.scrollSpeed))
                : (e.pageY - t(document).scrollTop() < a.scrollSensitivity
                    ? (r = t(document).scrollTop(
                        t(document).scrollTop() - a.scrollSpeed
                      ))
                    : t(window).height() - (e.pageY - t(document).scrollTop()) <
                        a.scrollSensitivity &&
                      (r = t(document).scrollTop(
                        t(document).scrollTop() + a.scrollSpeed
                      )),
                  e.pageX - t(document).scrollLeft() < a.scrollSensitivity
                    ? (r = t(document).scrollLeft(
                        t(document).scrollLeft() - a.scrollSpeed
                      ))
                    : t(window).width() - (e.pageX - t(document).scrollLeft()) <
                        a.scrollSensitivity &&
                      (r = t(document).scrollLeft(
                        t(document).scrollLeft() + a.scrollSpeed
                      ))),
              !1 !== r &&
                t.ui.ddmanager &&
                !a.dropBehaviour &&
                t.ui.ddmanager.prepareOffsets(this, e)),
            this.positionAbs = this._convertPositionTo("absolute"),
            (this.options.axis && "y" === this.options.axis) ||
              (this.helper[0].style.left = this.position.left + "px"),
            (this.options.axis && "x" === this.options.axis) ||
              (this.helper[0].style.top = this.position.top + "px"),
            i = this.items.length - 1;
          i >= 0;
          i--
        )
          if (
            ((s = this.items[i]),
            (n = s.item[0]),
            (o = this._intersectsWithPointer(s)) &&
              s.instance === this.currentContainer &&
              !(
                n === this.currentItem[0] ||
                this.placeholder[1 === o ? "next" : "prev"]()[0] === n ||
                t.contains(this.placeholder[0], n) ||
                ("semi-dynamic" === this.options.type &&
                  t.contains(this.element[0], n))
              ))
          ) {
            if (
              ((this.direction = 1 === o ? "down" : "up"),
              "pointer" !== this.options.tolerance &&
                !this._intersectsWithSides(s))
            )
              break;
            this._rearrange(e, s), this._trigger("change", e, this._uiHash());
            break;
          }
        return (
          this._contactContainers(e),
          t.ui.ddmanager && t.ui.ddmanager.drag(this, e),
          this._trigger("sort", e, this._uiHash()),
          (this.lastPositionAbs = this.positionAbs),
          !1
        );
      },
      _mouseStop: function (e, i) {
        if (e) {
          if (
            (t.ui.ddmanager &&
              !this.options.dropBehaviour &&
              t.ui.ddmanager.drop(this, e),
            this.options.revert)
          ) {
            var s = this,
              n = this.placeholder.offset(),
              o = this.options.axis,
              a = {};
            (o && "x" !== o) ||
              (a.left =
                n.left -
                this.offset.parent.left -
                this.margins.left +
                (this.offsetParent[0] === document.body
                  ? 0
                  : this.offsetParent[0].scrollLeft)),
              (o && "y" !== o) ||
                (a.top =
                  n.top -
                  this.offset.parent.top -
                  this.margins.top +
                  (this.offsetParent[0] === document.body
                    ? 0
                    : this.offsetParent[0].scrollTop)),
              (this.reverting = !0),
              t(this.helper).animate(
                a,
                parseInt(this.options.revert, 10) || 500,
                function () {
                  s._clear(e);
                }
              );
          } else this._clear(e, i);
          return !1;
        }
      },
      cancel: function () {
        if (this.dragging) {
          this._mouseUp({ target: null }),
            "original" === this.options.helper
              ? this.currentItem
                  .css(this._storedCSS)
                  .removeClass("ui-sortable-helper")
              : this.currentItem.show();
          for (var e = this.containers.length - 1; e >= 0; e--)
            this.containers[e]._trigger("deactivate", null, this._uiHash(this)),
              this.containers[e].containerCache.over &&
                (this.containers[e]._trigger("out", null, this._uiHash(this)),
                (this.containers[e].containerCache.over = 0));
        }
        return (
          this.placeholder &&
            (this.placeholder[0].parentNode &&
              this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
            "original" !== this.options.helper &&
              this.helper &&
              this.helper[0].parentNode &&
              this.helper.remove(),
            t.extend(this, {
              helper: null,
              dragging: !1,
              reverting: !1,
              _noFinalSort: null,
            }),
            this.domPosition.prev
              ? t(this.domPosition.prev).after(this.currentItem)
              : t(this.domPosition.parent).prepend(this.currentItem)),
          this
        );
      },
      serialize: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          s = [];
        return (
          (e = e || {}),
          t(i).each(function () {
            var i = (t(e.item || this).attr(e.attribute || "id") || "").match(
              e.expression || /(.+)[\-=_](.+)/
            );
            i &&
              s.push(
                (e.key || i[1] + "[]") +
                  "=" +
                  (e.key && e.expression ? i[1] : i[2])
              );
          }),
          !s.length && e.key && s.push(e.key + "="),
          s.join("&")
        );
      },
      toArray: function (e) {
        var i = this._getItemsAsjQuery(e && e.connected),
          s = [];
        return (
          (e = e || {}),
          i.each(function () {
            s.push(t(e.item || this).attr(e.attribute || "id") || "");
          }),
          s
        );
      },
      _intersectsWith: function (t) {
        var e = this.positionAbs.left,
          i = e + this.helperProportions.width,
          s = this.positionAbs.top,
          n = s + this.helperProportions.height,
          o = t.left,
          a = o + t.width,
          r = t.top,
          h = r + t.height,
          l = this.offset.click.top,
          c = this.offset.click.left,
          u = "x" === this.options.axis || (s + l > r && s + l < h),
          d = "y" === this.options.axis || (e + c > o && e + c < a),
          p = u && d;
        return "pointer" === this.options.tolerance ||
          this.options.forcePointerForContainers ||
          ("pointer" !== this.options.tolerance &&
            this.helperProportions[this.floating ? "width" : "height"] >
              t[this.floating ? "width" : "height"])
          ? p
          : o < e + this.helperProportions.width / 2 &&
              i - this.helperProportions.width / 2 < a &&
              r < s + this.helperProportions.height / 2 &&
              n - this.helperProportions.height / 2 < h;
      },
      _intersectsWithPointer: function (t) {
        var e =
            "x" === this.options.axis ||
            i(this.positionAbs.top + this.offset.click.top, t.top, t.height),
          s =
            "y" === this.options.axis ||
            i(this.positionAbs.left + this.offset.click.left, t.left, t.width),
          n = e && s,
          o = this._getDragVerticalDirection(),
          a = this._getDragHorizontalDirection();
        return (
          !!n &&
          (this.floating
            ? (a && "right" === a) || "down" === o
              ? 2
              : 1
            : o && ("down" === o ? 2 : 1))
        );
      },
      _intersectsWithSides: function (t) {
        var e = i(
            this.positionAbs.top + this.offset.click.top,
            t.top + t.height / 2,
            t.height
          ),
          s = i(
            this.positionAbs.left + this.offset.click.left,
            t.left + t.width / 2,
            t.width
          ),
          n = this._getDragVerticalDirection(),
          o = this._getDragHorizontalDirection();
        return this.floating && o
          ? ("right" === o && s) || ("left" === o && !s)
          : n && (("down" === n && e) || ("up" === n && !e));
      },
      _getDragVerticalDirection: function () {
        var t = this.positionAbs.top - this.lastPositionAbs.top;
        return 0 !== t && (t > 0 ? "down" : "up");
      },
      _getDragHorizontalDirection: function () {
        var t = this.positionAbs.left - this.lastPositionAbs.left;
        return 0 !== t && (t > 0 ? "right" : "left");
      },
      refresh: function (t) {
        return this._refreshItems(t), this.refreshPositions(), this;
      },
      _connectWith: function () {
        var t = this.options;
        return t.connectWith.constructor === String
          ? [t.connectWith]
          : t.connectWith;
      },
      _getItemsAsjQuery: function (e) {
        var i,
          s,
          n,
          o,
          a = [],
          r = [],
          h = this._connectWith();
        if (h && e)
          for (i = h.length - 1; i >= 0; i--)
            for (s = (n = t(h[i])).length - 1; s >= 0; s--)
              (o = t.data(n[s], this.widgetFullName)) &&
                o !== this &&
                !o.options.disabled &&
                r.push([
                  t.isFunction(o.options.items)
                    ? o.options.items.call(o.element)
                    : t(o.options.items, o.element)
                        .not(".ui-sortable-helper")
                        .not(".ui-sortable-placeholder"),
                  o,
                ]);
        for (
          r.push([
            t.isFunction(this.options.items)
              ? this.options.items.call(this.element, null, {
                  options: this.options,
                  item: this.currentItem,
                })
              : t(this.options.items, this.element)
                  .not(".ui-sortable-helper")
                  .not(".ui-sortable-placeholder"),
            this,
          ]),
            i = r.length - 1;
          i >= 0;
          i--
        )
          r[i][0].each(function () {
            a.push(this);
          });
        return t(a);
      },
      _removeCurrentsFromItems: function () {
        var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
        this.items = t.grep(this.items, function (t) {
          for (var i = 0; i < e.length; i++) if (e[i] === t.item[0]) return !1;
          return !0;
        });
      },
      _refreshItems: function (e) {
        (this.items = []), (this.containers = [this]);
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c = this.items,
          u = [
            [
              t.isFunction(this.options.items)
                ? this.options.items.call(this.element[0], e, {
                    item: this.currentItem,
                  })
                : t(this.options.items, this.element),
              this,
            ],
          ],
          d = this._connectWith();
        if (d && this.ready)
          for (i = d.length - 1; i >= 0; i--)
            for (s = (n = t(d[i])).length - 1; s >= 0; s--)
              (o = t.data(n[s], this.widgetFullName)) &&
                o !== this &&
                !o.options.disabled &&
                (u.push([
                  t.isFunction(o.options.items)
                    ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem,
                      })
                    : t(o.options.items, o.element),
                  o,
                ]),
                this.containers.push(o));
        for (i = u.length - 1; i >= 0; i--)
          for (a = u[i][1], s = 0, l = (r = u[i][0]).length; s < l; s++)
            (h = t(r[s])).data(this.widgetName + "-item", a),
              c.push({
                item: h,
                instance: a,
                width: 0,
                height: 0,
                left: 0,
                top: 0,
              });
      },
      refreshPositions: function (e) {
        this.offsetParent &&
          this.helper &&
          (this.offset.parent = this._getParentOffset());
        var i, s, n, o;
        for (i = this.items.length - 1; i >= 0; i--)
          ((s = this.items[i]).instance !== this.currentContainer &&
            this.currentContainer &&
            s.item[0] !== this.currentItem[0]) ||
            ((n = this.options.toleranceElement
              ? t(this.options.toleranceElement, s.item)
              : s.item),
            e || ((s.width = n.outerWidth()), (s.height = n.outerHeight())),
            (o = n.offset()),
            (s.left = o.left),
            (s.top = o.top));
        if (this.options.custom && this.options.custom.refreshContainers)
          this.options.custom.refreshContainers.call(this);
        else
          for (i = this.containers.length - 1; i >= 0; i--)
            (o = this.containers[i].element.offset()),
              (this.containers[i].containerCache.left = o.left),
              (this.containers[i].containerCache.top = o.top),
              (this.containers[i].containerCache.width =
                this.containers[i].element.outerWidth()),
              (this.containers[i].containerCache.height =
                this.containers[i].element.outerHeight());
        return this;
      },
      _createPlaceholder: function (e) {
        var i,
          s = (e = e || this).options;
        (s.placeholder && s.placeholder.constructor !== String) ||
          ((i = s.placeholder),
          (s.placeholder = {
            element: function () {
              var s = e.currentItem[0].nodeName.toLowerCase(),
                n = t("<" + s + ">", e.document[0])
                  .addClass(
                    i || e.currentItem[0].className + " ui-sortable-placeholder"
                  )
                  .removeClass("ui-sortable-helper");
              return (
                "tr" === s
                  ? e.currentItem.children().each(function () {
                      t("<td>&#160;</td>", e.document[0])
                        .attr("colspan", t(this).attr("colspan") || 1)
                        .appendTo(n);
                    })
                  : "img" === s && n.attr("src", e.currentItem.attr("src")),
                i || n.css("visibility", "hidden"),
                n
              );
            },
            update: function (t, n) {
              (i && !s.forcePlaceholderSize) ||
                (n.height() ||
                  n.height(
                    e.currentItem.innerHeight() -
                      parseInt(e.currentItem.css("paddingTop") || 0, 10) -
                      parseInt(e.currentItem.css("paddingBottom") || 0, 10)
                  ),
                n.width() ||
                  n.width(
                    e.currentItem.innerWidth() -
                      parseInt(e.currentItem.css("paddingLeft") || 0, 10) -
                      parseInt(e.currentItem.css("paddingRight") || 0, 10)
                  ));
            },
          })),
          (e.placeholder = t(
            s.placeholder.element.call(e.element, e.currentItem)
          )),
          e.currentItem.after(e.placeholder),
          s.placeholder.update(e, e.placeholder);
      },
      _contactContainers: function (e) {
        var n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d,
          p,
          f = null,
          g = null;
        for (n = this.containers.length - 1; n >= 0; n--)
          if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
            if (this._intersectsWith(this.containers[n].containerCache)) {
              if (f && t.contains(this.containers[n].element[0], f.element[0]))
                continue;
              (f = this.containers[n]), (g = n);
            } else
              this.containers[n].containerCache.over &&
                (this.containers[n]._trigger("out", e, this._uiHash(this)),
                (this.containers[n].containerCache.over = 0));
        if (f)
          if (1 === this.containers.length)
            this.containers[g].containerCache.over ||
              (this.containers[g]._trigger("over", e, this._uiHash(this)),
              (this.containers[g].containerCache.over = 1));
          else {
            for (
              a = 1e4,
                r = null,
                h = (p = f.floating || s(this.currentItem)) ? "left" : "top",
                l = p ? "width" : "height",
                c = this.positionAbs[h] + this.offset.click[h],
                o = this.items.length - 1;
              o >= 0;
              o--
            )
              t.contains(
                this.containers[g].element[0],
                this.items[o].item[0]
              ) &&
                this.items[o].item[0] !== this.currentItem[0] &&
                ((p &&
                  !i(
                    this.positionAbs.top + this.offset.click.top,
                    this.items[o].top,
                    this.items[o].height
                  )) ||
                  ((u = this.items[o].item.offset()[h]),
                  (d = !1),
                  Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) &&
                    ((d = !0), (u += this.items[o][l])),
                  Math.abs(u - c) < a &&
                    ((a = Math.abs(u - c)),
                    (r = this.items[o]),
                    (this.direction = d ? "up" : "down"))));
            if (!r && !this.options.dropOnEmpty) return;
            if (this.currentContainer === this.containers[g]) return;
            r
              ? this._rearrange(e, r, null, !0)
              : this._rearrange(e, null, this.containers[g].element, !0),
              this._trigger("change", e, this._uiHash()),
              this.containers[g]._trigger("change", e, this._uiHash(this)),
              (this.currentContainer = this.containers[g]),
              this.options.placeholder.update(
                this.currentContainer,
                this.placeholder
              ),
              this.containers[g]._trigger("over", e, this._uiHash(this)),
              (this.containers[g].containerCache.over = 1);
          }
      },
      _createHelper: function (e) {
        var i = this.options,
          s = t.isFunction(i.helper)
            ? t(i.helper.apply(this.element[0], [e, this.currentItem]))
            : "clone" === i.helper
            ? this.currentItem.clone()
            : this.currentItem;
        return (
          s.parents("body").length ||
            t(
              "parent" !== i.appendTo
                ? i.appendTo
                : this.currentItem[0].parentNode
            )[0].appendChild(s[0]),
          s[0] === this.currentItem[0] &&
            (this._storedCSS = {
              width: this.currentItem[0].style.width,
              height: this.currentItem[0].style.height,
              position: this.currentItem.css("position"),
              top: this.currentItem.css("top"),
              left: this.currentItem.css("left"),
            }),
          (s[0].style.width && !i.forceHelperSize) ||
            s.width(this.currentItem.width()),
          (s[0].style.height && !i.forceHelperSize) ||
            s.height(this.currentItem.height()),
          s
        );
      },
      _adjustOffsetFromHelper: function (e) {
        "string" == typeof e && (e = e.split(" ")),
          t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }),
          "left" in e && (this.offset.click.left = e.left + this.margins.left),
          "right" in e &&
            (this.offset.click.left =
              this.helperProportions.width - e.right + this.margins.left),
          "top" in e && (this.offset.click.top = e.top + this.margins.top),
          "bottom" in e &&
            (this.offset.click.top =
              this.helperProportions.height - e.bottom + this.margins.top);
      },
      _getParentOffset: function () {
        this.offsetParent = this.helper.offsetParent();
        var e = this.offsetParent.offset();
        return (
          "absolute" === this.cssPosition &&
            this.scrollParent[0] !== document &&
            t.contains(this.scrollParent[0], this.offsetParent[0]) &&
            ((e.left += this.scrollParent.scrollLeft()),
            (e.top += this.scrollParent.scrollTop())),
          (this.offsetParent[0] === document.body ||
            (this.offsetParent[0].tagName &&
              "html" === this.offsetParent[0].tagName.toLowerCase() &&
              t.ui.ie)) &&
            (e = { top: 0, left: 0 }),
          {
            top:
              e.top +
              (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left:
              e.left +
              (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0),
          }
        );
      },
      _getRelativeOffset: function () {
        if ("relative" === this.cssPosition) {
          var t = this.currentItem.position();
          return {
            top:
              t.top -
              (parseInt(this.helper.css("top"), 10) || 0) +
              this.scrollParent.scrollTop(),
            left:
              t.left -
              (parseInt(this.helper.css("left"), 10) || 0) +
              this.scrollParent.scrollLeft(),
          };
        }
        return { top: 0, left: 0 };
      },
      _cacheMargins: function () {
        this.margins = {
          left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
          top: parseInt(this.currentItem.css("marginTop"), 10) || 0,
        };
      },
      _cacheHelperProportions: function () {
        this.helperProportions = {
          width: this.helper.outerWidth(),
          height: this.helper.outerHeight(),
        };
      },
      _setContainment: function () {
        var e,
          i,
          s,
          n = this.options;
        "parent" === n.containment &&
          (n.containment = this.helper[0].parentNode),
          ("document" !== n.containment && "window" !== n.containment) ||
            (this.containment = [
              0 - this.offset.relative.left - this.offset.parent.left,
              0 - this.offset.relative.top - this.offset.parent.top,
              t("document" === n.containment ? document : window).width() -
                this.helperProportions.width -
                this.margins.left,
              (t("document" === n.containment ? document : window).height() ||
                document.body.parentNode.scrollHeight) -
                this.helperProportions.height -
                this.margins.top,
            ]),
          /^(document|window|parent)$/.test(n.containment) ||
            ((e = t(n.containment)[0]),
            (i = t(n.containment).offset()),
            (s = "hidden" !== t(e).css("overflow")),
            (this.containment = [
              i.left +
                (parseInt(t(e).css("borderLeftWidth"), 10) || 0) +
                (parseInt(t(e).css("paddingLeft"), 10) || 0) -
                this.margins.left,
              i.top +
                (parseInt(t(e).css("borderTopWidth"), 10) || 0) +
                (parseInt(t(e).css("paddingTop"), 10) || 0) -
                this.margins.top,
              i.left +
                (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) -
                (parseInt(t(e).css("borderLeftWidth"), 10) || 0) -
                (parseInt(t(e).css("paddingRight"), 10) || 0) -
                this.helperProportions.width -
                this.margins.left,
              i.top +
                (s
                  ? Math.max(e.scrollHeight, e.offsetHeight)
                  : e.offsetHeight) -
                (parseInt(t(e).css("borderTopWidth"), 10) || 0) -
                (parseInt(t(e).css("paddingBottom"), 10) || 0) -
                this.helperProportions.height -
                this.margins.top,
            ]));
      },
      _convertPositionTo: function (e, i) {
        i || (i = this.position);
        var s = "absolute" === e ? 1 : -1,
          n =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          o = /(html|body)/i.test(n[0].tagName);
        return {
          top:
            i.top +
            this.offset.relative.top * s +
            this.offset.parent.top * s -
            ("fixed" === this.cssPosition
              ? -this.scrollParent.scrollTop()
              : o
              ? 0
              : n.scrollTop()) *
              s,
          left:
            i.left +
            this.offset.relative.left * s +
            this.offset.parent.left * s -
            ("fixed" === this.cssPosition
              ? -this.scrollParent.scrollLeft()
              : o
              ? 0
              : n.scrollLeft()) *
              s,
        };
      },
      _generatePosition: function (e) {
        var i,
          s,
          n = this.options,
          o = e.pageX,
          a = e.pageY,
          r =
            "absolute" !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              t.contains(this.scrollParent[0], this.offsetParent[0]))
              ? this.scrollParent
              : this.offsetParent,
          h = /(html|body)/i.test(r[0].tagName);
        return (
          "relative" !== this.cssPosition ||
            (this.scrollParent[0] !== document &&
              this.scrollParent[0] !== this.offsetParent[0]) ||
            (this.offset.relative = this._getRelativeOffset()),
          this.originalPosition &&
            (this.containment &&
              (e.pageX - this.offset.click.left < this.containment[0] &&
                (o = this.containment[0] + this.offset.click.left),
              e.pageY - this.offset.click.top < this.containment[1] &&
                (a = this.containment[1] + this.offset.click.top),
              e.pageX - this.offset.click.left > this.containment[2] &&
                (o = this.containment[2] + this.offset.click.left),
              e.pageY - this.offset.click.top > this.containment[3] &&
                (a = this.containment[3] + this.offset.click.top)),
            n.grid &&
              ((i =
                this.originalPageY +
                Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1]),
              (a = this.containment
                ? i - this.offset.click.top >= this.containment[1] &&
                  i - this.offset.click.top <= this.containment[3]
                  ? i
                  : i - this.offset.click.top >= this.containment[1]
                  ? i - n.grid[1]
                  : i + n.grid[1]
                : i),
              (s =
                this.originalPageX +
                Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0]),
              (o = this.containment
                ? s - this.offset.click.left >= this.containment[0] &&
                  s - this.offset.click.left <= this.containment[2]
                  ? s
                  : s - this.offset.click.left >= this.containment[0]
                  ? s - n.grid[0]
                  : s + n.grid[0]
                : s))),
          {
            top:
              a -
              this.offset.click.top -
              this.offset.relative.top -
              this.offset.parent.top +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollTop()
                : h
                ? 0
                : r.scrollTop()),
            left:
              o -
              this.offset.click.left -
              this.offset.relative.left -
              this.offset.parent.left +
              ("fixed" === this.cssPosition
                ? -this.scrollParent.scrollLeft()
                : h
                ? 0
                : r.scrollLeft()),
          }
        );
      },
      _rearrange: function (t, e, i, s) {
        i
          ? i[0].appendChild(this.placeholder[0])
          : e.item[0].parentNode.insertBefore(
              this.placeholder[0],
              "down" === this.direction ? e.item[0] : e.item[0].nextSibling
            ),
          (this.counter = this.counter ? ++this.counter : 1);
        var n = this.counter;
        this._delay(function () {
          n === this.counter && this.refreshPositions(!s);
        });
      },
      _clear: function (t, e) {
        this.reverting = !1;
        var i,
          s = [];
        if (
          (!this._noFinalSort &&
            this.currentItem.parent().length &&
            this.placeholder.before(this.currentItem),
          (this._noFinalSort = null),
          this.helper[0] === this.currentItem[0])
        ) {
          for (i in this._storedCSS)
            ("auto" !== this._storedCSS[i] &&
              "static" !== this._storedCSS[i]) ||
              (this._storedCSS[i] = "");
          this.currentItem
            .css(this._storedCSS)
            .removeClass("ui-sortable-helper");
        } else this.currentItem.show();
        for (
          this.fromOutside &&
            !e &&
            s.push(function (t) {
              this._trigger("receive", t, this._uiHash(this.fromOutside));
            }),
            (!this.fromOutside &&
              this.domPosition.prev ===
                this.currentItem.prev().not(".ui-sortable-helper")[0] &&
              this.domPosition.parent === this.currentItem.parent()[0]) ||
              e ||
              s.push(function (t) {
                this._trigger("update", t, this._uiHash());
              }),
            this !== this.currentContainer &&
              (e ||
                (s.push(function (t) {
                  this._trigger("remove", t, this._uiHash());
                }),
                s.push(
                  function (t) {
                    return function (e) {
                      t._trigger("receive", e, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ),
                s.push(
                  function (t) {
                    return function (e) {
                      t._trigger("update", e, this._uiHash(this));
                    };
                  }.call(this, this.currentContainer)
                ))),
            i = this.containers.length - 1;
          i >= 0;
          i--
        )
          e ||
            s.push(
              function (t) {
                return function (e) {
                  t._trigger("deactivate", e, this._uiHash(this));
                };
              }.call(this, this.containers[i])
            ),
            this.containers[i].containerCache.over &&
              (s.push(
                function (t) {
                  return function (e) {
                    t._trigger("out", e, this._uiHash(this));
                  };
                }.call(this, this.containers[i])
              ),
              (this.containers[i].containerCache.over = 0));
        if (
          (this.storedCursor &&
            (this.document.find("body").css("cursor", this.storedCursor),
            this.storedStylesheet.remove()),
          this._storedOpacity &&
            this.helper.css("opacity", this._storedOpacity),
          this._storedZIndex &&
            this.helper.css(
              "zIndex",
              "auto" === this._storedZIndex ? "" : this._storedZIndex
            ),
          (this.dragging = !1),
          this.cancelHelperRemoval)
        ) {
          if (!e) {
            for (
              this._trigger("beforeStop", t, this._uiHash()), i = 0;
              i < s.length;
              i++
            )
              s[i].call(this, t);
            this._trigger("stop", t, this._uiHash());
          }
          return (this.fromOutside = !1), !1;
        }
        if (
          (e || this._trigger("beforeStop", t, this._uiHash()),
          this.placeholder[0].parentNode.removeChild(this.placeholder[0]),
          this.helper[0] !== this.currentItem[0] && this.helper.remove(),
          (this.helper = null),
          !e)
        ) {
          for (i = 0; i < s.length; i++) s[i].call(this, t);
          this._trigger("stop", t, this._uiHash());
        }
        return (this.fromOutside = !1), !0;
      },
      _trigger: function () {
        !1 === t.Widget.prototype._trigger.apply(this, arguments) &&
          this.cancel();
      },
      _uiHash: function (e) {
        var i = e || this;
        return {
          helper: i.helper,
          placeholder: i.placeholder || t([]),
          position: i.position,
          originalPosition: i.originalPosition,
          offset: i.positionAbs,
          item: i.currentItem,
          sender: e ? e.element : null,
        };
      },
    });
  })(jQuery),
  (function (t, e) {
    (t.effects = { effect: {} }),
      (function (t, e) {
        function i(t, e, i) {
          var s = c[e.type] || {};
          return null == t
            ? i || !e.def
              ? null
              : e.def
            : ((t = s.floor ? ~~t : parseFloat(t)),
              isNaN(t)
                ? e.def
                : s.mod
                ? (t + s.mod) % s.mod
                : 0 > t
                ? 0
                : s.max < t
                ? s.max
                : t);
        }
        function s(e) {
          var i = h(),
            s = (i._rgba = []);
          return (
            (e = e.toLowerCase()),
            p(r, function (t, n) {
              var o,
                a = n.re.exec(e),
                r = a && n.parse(a),
                h = n.space || "rgba";
              if (r)
                return (
                  (o = i[h](r)),
                  (i[l[h].cache] = o[l[h].cache]),
                  (s = i._rgba = o._rgba),
                  !1
                );
            }),
            s.length
              ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), i)
              : o[e]
          );
        }
        function n(t, e, i) {
          return 6 * (i = (i + 1) % 1) < 1
            ? t + (e - t) * i * 6
            : 2 * i < 1
            ? e
            : 3 * i < 2
            ? t + (e - t) * (2 / 3 - i) * 6
            : t;
        }
        var o,
          a = /^([\-+])=\s*(\d+\.?\d*)/,
          r = [
            {
              re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [t[1], t[2], t[3], t[4]];
              },
            },
            {
              re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              parse: function (t) {
                return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]];
              },
            },
            {
              re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
              parse: function (t) {
                return [
                  parseInt(t[1], 16),
                  parseInt(t[2], 16),
                  parseInt(t[3], 16),
                ];
              },
            },
            {
              re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
              parse: function (t) {
                return [
                  parseInt(t[1] + t[1], 16),
                  parseInt(t[2] + t[2], 16),
                  parseInt(t[3] + t[3], 16),
                ];
              },
            },
            {
              re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
              space: "hsla",
              parse: function (t) {
                return [t[1], t[2] / 100, t[3] / 100, t[4]];
              },
            },
          ],
          h = (t.Color = function (e, i, s, n) {
            return new t.Color.fn.parse(e, i, s, n);
          }),
          l = {
            rgba: {
              props: {
                red: { idx: 0, type: "byte" },
                green: { idx: 1, type: "byte" },
                blue: { idx: 2, type: "byte" },
              },
            },
            hsla: {
              props: {
                hue: { idx: 0, type: "degrees" },
                saturation: { idx: 1, type: "percent" },
                lightness: { idx: 2, type: "percent" },
              },
            },
          },
          c = {
            byte: { floor: !0, max: 255 },
            percent: { max: 1 },
            degrees: { mod: 360, floor: !0 },
          },
          u = (h.support = {}),
          d = t("<p>")[0],
          p = t.each;
        (d.style.cssText = "background-color:rgba(1,1,1,.5)"),
          (u.rgba = d.style.backgroundColor.indexOf("rgba") > -1),
          p(l, function (t, e) {
            (e.cache = "_" + t),
              (e.props.alpha = { idx: 3, type: "percent", def: 1 });
          }),
          (h.fn = t.extend(h.prototype, {
            parse: function (e, n, a, r) {
              if (void 0 === e)
                return (this._rgba = [null, null, null, null]), this;
              (e.jquery || e.nodeType) && ((e = t(e).css(n)), (n = void 0));
              var c = this,
                u = t.type(e),
                d = (this._rgba = []);
              return (
                void 0 !== n && ((e = [e, n, a, r]), (u = "array")),
                "string" === u
                  ? this.parse(s(e) || o._default)
                  : "array" === u
                  ? (p(l.rgba.props, function (t, s) {
                      d[s.idx] = i(e[s.idx], s);
                    }),
                    this)
                  : "object" === u
                  ? (e instanceof h
                      ? p(l, function (t, i) {
                          e[i.cache] && (c[i.cache] = e[i.cache].slice());
                        })
                      : p(l, function (s, n) {
                          var o = n.cache;
                          p(n.props, function (t, s) {
                            if (!c[o] && n.to) {
                              if ("alpha" === t || null == e[t]) return;
                              c[o] = n.to(c._rgba);
                            }
                            c[o][s.idx] = i(e[t], s, !0);
                          }),
                            c[o] &&
                              t.inArray(null, c[o].slice(0, 3)) < 0 &&
                              ((c[o][3] = 1),
                              n.from && (c._rgba = n.from(c[o])));
                        }),
                    this)
                  : void 0
              );
            },
            is: function (t) {
              var e = h(t),
                i = !0,
                s = this;
              return (
                p(l, function (t, n) {
                  var o,
                    a = e[n.cache];
                  return (
                    a &&
                      ((o = s[n.cache] || (n.to && n.to(s._rgba)) || []),
                      p(n.props, function (t, e) {
                        if (null != a[e.idx])
                          return (i = a[e.idx] === o[e.idx]);
                      })),
                    i
                  );
                }),
                i
              );
            },
            _space: function () {
              var t = [],
                e = this;
              return (
                p(l, function (i, s) {
                  e[s.cache] && t.push(i);
                }),
                t.pop()
              );
            },
            transition: function (t, e) {
              var s = h(t),
                n = s._space(),
                o = l[n],
                a = 0 === this.alpha() ? h("transparent") : this,
                r = a[o.cache] || o.to(a._rgba),
                u = r.slice();
              return (
                (s = s[o.cache]),
                p(o.props, function (t, n) {
                  var o = n.idx,
                    a = r[o],
                    h = s[o],
                    l = c[n.type] || {};
                  null !== h &&
                    (null === a
                      ? (u[o] = h)
                      : (l.mod &&
                          (h - a > l.mod / 2
                            ? (a += l.mod)
                            : a - h > l.mod / 2 && (a -= l.mod)),
                        (u[o] = i((h - a) * e + a, n))));
                }),
                this[n](u)
              );
            },
            blend: function (e) {
              if (1 === this._rgba[3]) return this;
              var i = this._rgba.slice(),
                s = i.pop(),
                n = h(e)._rgba;
              return h(
                t.map(i, function (t, e) {
                  return (1 - s) * n[e] + s * t;
                })
              );
            },
            toRgbaString: function () {
              var e = "rgba(",
                i = t.map(this._rgba, function (t, e) {
                  return null == t ? (e > 2 ? 1 : 0) : t;
                });
              return 1 === i[3] && (i.pop(), (e = "rgb(")), e + i.join() + ")";
            },
            toHslaString: function () {
              var e = "hsla(",
                i = t.map(this.hsla(), function (t, e) {
                  return (
                    null == t && (t = e > 2 ? 1 : 0),
                    e && e < 3 && (t = Math.round(100 * t) + "%"),
                    t
                  );
                });
              return 1 === i[3] && (i.pop(), (e = "hsl(")), e + i.join() + ")";
            },
            toHexString: function (e) {
              var i = this._rgba.slice(),
                s = i.pop();
              return (
                e && i.push(~~(255 * s)),
                "#" +
                  t
                    .map(i, function (t) {
                      return 1 === (t = (t || 0).toString(16)).length
                        ? "0" + t
                        : t;
                    })
                    .join("")
              );
            },
            toString: function () {
              return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            },
          })),
          (h.fn.parse.prototype = h.fn),
          (l.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e,
              i,
              s = t[0] / 255,
              n = t[1] / 255,
              o = t[2] / 255,
              a = t[3],
              r = Math.max(s, n, o),
              h = Math.min(s, n, o),
              l = r - h,
              c = r + h,
              u = 0.5 * c;
            return (
              (e =
                h === r
                  ? 0
                  : s === r
                  ? (60 * (n - o)) / l + 360
                  : n === r
                  ? (60 * (o - s)) / l + 120
                  : (60 * (s - n)) / l + 240),
              (i = 0 === l ? 0 : u <= 0.5 ? l / c : l / (2 - c)),
              [Math.round(e) % 360, i, u, null == a ? 1 : a]
            );
          }),
          (l.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2])
              return [null, null, null, t[3]];
            var e = t[0] / 360,
              i = t[1],
              s = t[2],
              o = t[3],
              a = s <= 0.5 ? s * (1 + i) : s + i - s * i,
              r = 2 * s - a;
            return [
              Math.round(255 * n(r, a, e + 1 / 3)),
              Math.round(255 * n(r, a, e)),
              Math.round(255 * n(r, a, e - 1 / 3)),
              o,
            ];
          }),
          p(l, function (e, s) {
            var n = s.props,
              o = s.cache,
              r = s.to,
              l = s.from;
            (h.fn[e] = function (e) {
              if ((r && !this[o] && (this[o] = r(this._rgba)), void 0 === e))
                return this[o].slice();
              var s,
                a = t.type(e),
                c = "array" === a || "object" === a ? e : arguments,
                u = this[o].slice();
              return (
                p(n, function (t, e) {
                  var s = c["object" === a ? t : e.idx];
                  null == s && (s = u[e.idx]), (u[e.idx] = i(s, e));
                }),
                l ? ((s = h(l(u))), (s[o] = u), s) : h(u)
              );
            }),
              p(n, function (i, s) {
                h.fn[i] ||
                  (h.fn[i] = function (n) {
                    var o,
                      r = t.type(n),
                      h = "alpha" === i ? (this._hsla ? "hsla" : "rgba") : e,
                      l = this[h](),
                      c = l[s.idx];
                    return "undefined" === r
                      ? c
                      : ("function" === r &&
                          ((n = n.call(this, c)), (r = t.type(n))),
                        null == n && s.empty
                          ? this
                          : ("string" === r &&
                              (o = a.exec(n)) &&
                              (n =
                                c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)),
                            (l[s.idx] = n),
                            this[h](l)));
                  });
              });
          }),
          (h.hook = function (e) {
            var i = e.split(" ");
            p(i, function (e, i) {
              (t.cssHooks[i] = {
                set: function (e, n) {
                  var o,
                    a,
                    r = "";
                  if (
                    "transparent" !== n &&
                    ("string" !== t.type(n) || (o = s(n)))
                  ) {
                    if (((n = h(o || n)), !u.rgba && 1 !== n._rgba[3])) {
                      for (
                        a = "backgroundColor" === i ? e.parentNode : e;
                        ("" === r || "transparent" === r) && a && a.style;

                      )
                        try {
                          (r = t.css(a, "backgroundColor")), (a = a.parentNode);
                        } catch (t) {}
                      n = n.blend(r && "transparent" !== r ? r : "_default");
                    }
                    n = n.toRgbaString();
                  }
                  try {
                    e.style[i] = n;
                  } catch (t) {}
                },
              }),
                (t.fx.step[i] = function (e) {
                  e.colorInit ||
                    ((e.start = h(e.elem, i)),
                    (e.end = h(e.end)),
                    (e.colorInit = !0)),
                    t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos));
                });
            });
          }),
          h.hook(
            "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"
          ),
          (t.cssHooks.borderColor = {
            expand: function (t) {
              var e = {};
              return (
                p(["Top", "Right", "Bottom", "Left"], function (i, s) {
                  e["border" + s + "Color"] = t;
                }),
                e
              );
            },
          }),
          (o = t.Color.names =
            {
              aqua: "#00ffff",
              black: "#000000",
              blue: "#0000ff",
              fuchsia: "#ff00ff",
              gray: "#808080",
              green: "#008000",
              lime: "#00ff00",
              maroon: "#800000",
              navy: "#000080",
              olive: "#808000",
              purple: "#800080",
              red: "#ff0000",
              silver: "#c0c0c0",
              teal: "#008080",
              white: "#ffffff",
              yellow: "#ffff00",
              transparent: [null, null, null, 0],
              _default: "#ffffff",
            });
      })(jQuery),
      (function () {
        function e(e) {
          var i,
            s,
            n = e.ownerDocument.defaultView
              ? e.ownerDocument.defaultView.getComputedStyle(e, null)
              : e.currentStyle,
            o = {};
          if (n && n.length && n[0] && n[n[0]])
            for (s = n.length; s--; )
              "string" == typeof n[(i = n[s])] && (o[t.camelCase(i)] = n[i]);
          else for (i in n) "string" == typeof n[i] && (o[i] = n[i]);
          return o;
        }
        function i(e, i) {
          var s,
            o,
            a = {};
          for (s in i)
            (o = i[s]),
              e[s] !== o &&
                (n[s] || (!t.fx.step[s] && isNaN(parseFloat(o))) || (a[s] = o));
          return a;
        }
        var s = ["add", "remove", "toggle"],
          n = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1,
          };
        t.each(
          [
            "borderLeftStyle",
            "borderRightStyle",
            "borderBottomStyle",
            "borderTopStyle",
          ],
          function (e, i) {
            t.fx.step[i] = function (t) {
              (("none" !== t.end && !t.setAttr) ||
                (1 === t.pos && !t.setAttr)) &&
                (jQuery.style(t.elem, i, t.end), (t.setAttr = !0));
            };
          }
        ),
          t.fn.addBack ||
            (t.fn.addBack = function (t) {
              return this.add(
                null == t ? this.prevObject : this.prevObject.filter(t)
              );
            }),
          (t.effects.animateClass = function (n, o, a, r) {
            var h = t.speed(o, a, r);
            return this.queue(function () {
              var o,
                a = t(this),
                r = a.attr("class") || "",
                l = h.children ? a.find("*").addBack() : a;
              (l = l.map(function () {
                return { el: t(this), start: e(this) };
              })),
                (o = function () {
                  t.each(s, function (t, e) {
                    n[e] && a[e + "Class"](n[e]);
                  });
                })(),
                (l = l.map(function () {
                  return (
                    (this.end = e(this.el[0])),
                    (this.diff = i(this.start, this.end)),
                    this
                  );
                })),
                a.attr("class", r),
                (l = l.map(function () {
                  var e = this,
                    i = t.Deferred(),
                    s = t.extend({}, h, {
                      queue: !1,
                      complete: function () {
                        i.resolve(e);
                      },
                    });
                  return this.el.animate(this.diff, s), i.promise();
                })),
                t.when.apply(t, l.get()).done(function () {
                  o(),
                    t.each(arguments, function () {
                      var e = this.el;
                      t.each(this.diff, function (t) {
                        e.css(t, "");
                      });
                    }),
                    h.complete.call(a[0]);
                });
            });
          }),
          t.fn.extend({
            addClass: (function (e) {
              return function (i, s, n, o) {
                return s
                  ? t.effects.animateClass.call(this, { add: i }, s, n, o)
                  : e.apply(this, arguments);
              };
            })(t.fn.addClass),
            removeClass: (function (e) {
              return function (i, s, n, o) {
                return arguments.length > 1
                  ? t.effects.animateClass.call(this, { remove: i }, s, n, o)
                  : e.apply(this, arguments);
              };
            })(t.fn.removeClass),
            toggleClass: (function (e) {
              return function (i, s, n, o, a) {
                return "boolean" == typeof s || void 0 === s
                  ? n
                    ? t.effects.animateClass.call(
                        this,
                        s ? { add: i } : { remove: i },
                        n,
                        o,
                        a
                      )
                    : e.apply(this, arguments)
                  : t.effects.animateClass.call(this, { toggle: i }, s, n, o);
              };
            })(t.fn.toggleClass),
            switchClass: function (e, i, s, n, o) {
              return t.effects.animateClass.call(
                this,
                { add: i, remove: e },
                s,
                n,
                o
              );
            },
          });
      })(),
      (function () {
        function e(e, i, s, n) {
          return (
            t.isPlainObject(e) && ((i = e), (e = e.effect)),
            (e = { effect: e }),
            null == i && (i = {}),
            t.isFunction(i) && ((n = i), (s = null), (i = {})),
            ("number" == typeof i || t.fx.speeds[i]) &&
              ((n = s), (s = i), (i = {})),
            t.isFunction(s) && ((n = s), (s = null)),
            i && t.extend(e, i),
            (s = s || i.duration),
            (e.duration = t.fx.off
              ? 0
              : "number" == typeof s
              ? s
              : s in t.fx.speeds
              ? t.fx.speeds[s]
              : t.fx.speeds._default),
            (e.complete = n || i.complete),
            e
          );
        }
        function i(e) {
          return (
            !(e && "number" != typeof e && !t.fx.speeds[e]) ||
            ("string" == typeof e && !t.effects.effect[e]) ||
            !!t.isFunction(e) ||
            ("object" == typeof e && !e.effect)
          );
        }
        t.extend(t.effects, {
          version: "1.10.3",
          save: function (t, e) {
            for (var i = 0; i < e.length; i++)
              null !== e[i] && t.data("ui-effects-" + e[i], t[0].style[e[i]]);
          },
          restore: function (t, e) {
            var i, s;
            for (s = 0; s < e.length; s++)
              null !== e[s] &&
                (void 0 === (i = t.data("ui-effects-" + e[s])) && (i = ""),
                t.css(e[s], i));
          },
          setMode: function (t, e) {
            return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e;
          },
          getBaseline: function (t, e) {
            var i, s;
            switch (t[0]) {
              case "top":
                i = 0;
                break;
              case "middle":
                i = 0.5;
                break;
              case "bottom":
                i = 1;
                break;
              default:
                i = t[0] / e.height;
            }
            switch (t[1]) {
              case "left":
                s = 0;
                break;
              case "center":
                s = 0.5;
                break;
              case "right":
                s = 1;
                break;
              default:
                s = t[1] / e.width;
            }
            return { x: s, y: i };
          },
          createWrapper: function (e) {
            if (e.parent().is(".ui-effects-wrapper")) return e.parent();
            var i = {
                width: e.outerWidth(!0),
                height: e.outerHeight(!0),
                float: e.css("float"),
              },
              s = t("<div></div>").addClass("ui-effects-wrapper").css({
                fontSize: "100%",
                background: "transparent",
                border: "none",
                margin: 0,
                padding: 0,
              }),
              n = { width: e.width(), height: e.height() },
              o = document.activeElement;
            try {
              o.id;
            } catch (t) {
              o = document.body;
            }
            return (
              e.wrap(s),
              (e[0] === o || t.contains(e[0], o)) && t(o).focus(),
              (s = e.parent()),
              "static" === e.css("position")
                ? (s.css({ position: "relative" }),
                  e.css({ position: "relative" }))
                : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index"),
                  }),
                  t.each(["top", "left", "bottom", "right"], function (t, s) {
                    (i[s] = e.css(s)),
                      isNaN(parseInt(i[s], 10)) && (i[s] = "auto");
                  }),
                  e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto",
                  })),
              e.css(n),
              s.css(i).show()
            );
          },
          removeWrapper: function (e) {
            var i = document.activeElement;
            return (
              e.parent().is(".ui-effects-wrapper") &&
                (e.parent().replaceWith(e),
                (e[0] === i || t.contains(e[0], i)) && t(i).focus()),
              e
            );
          },
          setTransition: function (e, i, s, n) {
            return (
              (n = n || {}),
              t.each(i, function (t, i) {
                var o = e.cssUnit(i);
                o[0] > 0 && (n[i] = o[0] * s + o[1]);
              }),
              n
            );
          },
        }),
          t.fn.extend({
            effect: function () {
              function i(e) {
                function i() {
                  t.isFunction(o) && o.call(n[0]), t.isFunction(e) && e();
                }
                var n = t(this),
                  o = s.complete,
                  r = s.mode;
                (n.is(":hidden") ? "hide" === r : "show" === r)
                  ? (n[r](), i())
                  : a.call(n[0], s, i);
              }
              var s = e.apply(this, arguments),
                n = s.mode,
                o = s.queue,
                a = t.effects.effect[s.effect];
              return t.fx.off || !a
                ? n
                  ? this[n](s.duration, s.complete)
                  : this.each(function () {
                      s.complete && s.complete.call(this);
                    })
                : !1 === o
                ? this.each(i)
                : this.queue(o || "fx", i);
            },
            show: (function (t) {
              return function (s) {
                if (i(s)) return t.apply(this, arguments);
                var n = e.apply(this, arguments);
                return (n.mode = "show"), this.effect.call(this, n);
              };
            })(t.fn.show),
            hide: (function (t) {
              return function (s) {
                if (i(s)) return t.apply(this, arguments);
                var n = e.apply(this, arguments);
                return (n.mode = "hide"), this.effect.call(this, n);
              };
            })(t.fn.hide),
            toggle: (function (t) {
              return function (s) {
                if (i(s) || "boolean" == typeof s)
                  return t.apply(this, arguments);
                var n = e.apply(this, arguments);
                return (n.mode = "toggle"), this.effect.call(this, n);
              };
            })(t.fn.toggle),
            cssUnit: function (e) {
              var i = this.css(e),
                s = [];
              return (
                t.each(["em", "px", "%", "pt"], function (t, e) {
                  i.indexOf(e) > 0 && (s = [parseFloat(i), e]);
                }),
                s
              );
            },
          });
      })(),
      (function () {
        var e = {};
        t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
          e[i] = function (e) {
            return Math.pow(e, t + 2);
          };
        }),
          t.extend(e, {
            Sine: function (t) {
              return 1 - Math.cos((t * Math.PI) / 2);
            },
            Circ: function (t) {
              return 1 - Math.sqrt(1 - t * t);
            },
            Elastic: function (t) {
              return 0 === t || 1 === t
                ? t
                : -Math.pow(2, 8 * (t - 1)) *
                    Math.sin(((80 * (t - 1) - 7.5) * Math.PI) / 15);
            },
            Back: function (t) {
              return t * t * (3 * t - 2);
            },
            Bounce: function (t) {
              for (var e, i = 4; t < ((e = Math.pow(2, --i)) - 1) / 11; );
              return (
                1 / Math.pow(4, 3 - i) -
                7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
              );
            },
          }),
          t.each(e, function (e, i) {
            (t.easing["easeIn" + e] = i),
              (t.easing["easeOut" + e] = function (t) {
                return 1 - i(1 - t);
              }),
              (t.easing["easeInOut" + e] = function (t) {
                return t < 0.5 ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2;
              });
          });
      })();
  })(jQuery),
  (function (t, e) {
    var i = 0,
      s = {},
      n = {};
    (s.height =
      s.paddingTop =
      s.paddingBottom =
      s.borderTopWidth =
      s.borderBottomWidth =
        "hide"),
      (n.height =
        n.paddingTop =
        n.paddingBottom =
        n.borderTopWidth =
        n.borderBottomWidth =
          "show"),
      t.widget("ui.accordion", {
        version: "1.10.3",
        options: {
          active: 0,
          animate: {},
          collapsible: !1,
          event: "click",
          header: "> li > :first-child,> :not(li):even",
          heightStyle: "auto",
          icons: {
            activeHeader: "ui-icon-triangle-1-s",
            header: "ui-icon-triangle-1-e",
          },
          activate: null,
          beforeActivate: null,
        },
        _create: function () {
          var e = this.options;
          (this.prevShow = this.prevHide = t()),
            this.element
              .addClass("ui-accordion ui-widget ui-helper-reset")
              .attr("role", "tablist"),
            e.collapsible ||
              (!1 !== e.active && null != e.active) ||
              (e.active = 0),
            this._processPanels(),
            e.active < 0 && (e.active += this.headers.length),
            this._refresh();
        },
        _getCreateEventData: function () {
          return {
            header: this.active,
            panel: this.active.length ? this.active.next() : t(),
            content: this.active.length ? this.active.next() : t(),
          };
        },
        _createIcons: function () {
          var e = this.options.icons;
          e &&
            (t("<span>")
              .addClass("ui-accordion-header-icon ui-icon " + e.header)
              .prependTo(this.headers),
            this.active
              .children(".ui-accordion-header-icon")
              .removeClass(e.header)
              .addClass(e.activeHeader),
            this.headers.addClass("ui-accordion-icons"));
        },
        _destroyIcons: function () {
          this.headers
            .removeClass("ui-accordion-icons")
            .children(".ui-accordion-header-icon")
            .remove();
        },
        _destroy: function () {
          var t;
          this.element
            .removeClass("ui-accordion ui-widget ui-helper-reset")
            .removeAttr("role"),
            this.headers
              .removeClass(
                "ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top"
              )
              .removeAttr("role")
              .removeAttr("aria-selected")
              .removeAttr("aria-controls")
              .removeAttr("tabIndex")
              .each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id");
              }),
            this._destroyIcons(),
            (t = this.headers
              .next()
              .css("display", "")
              .removeAttr("role")
              .removeAttr("aria-expanded")
              .removeAttr("aria-hidden")
              .removeAttr("aria-labelledby")
              .removeClass(
                "ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled"
              )
              .each(function () {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id");
              })),
            "content" !== this.options.heightStyle && t.css("height", "");
        },
        _setOption: function (t, e) {
          "active" !== t
            ? ("event" === t &&
                (this.options.event &&
                  this._off(this.headers, this.options.event),
                this._setupEvents(e)),
              this._super(t, e),
              "collapsible" !== t ||
                e ||
                !1 !== this.options.active ||
                this._activate(0),
              "icons" === t && (this._destroyIcons(), e && this._createIcons()),
              "disabled" === t &&
                this.headers
                  .add(this.headers.next())
                  .toggleClass("ui-state-disabled", !!e))
            : this._activate(e);
        },
        _keydown: function (e) {
          if (!e.altKey && !e.ctrlKey) {
            var i = t.ui.keyCode,
              s = this.headers.length,
              n = this.headers.index(e.target),
              o = !1;
            switch (e.keyCode) {
              case i.RIGHT:
              case i.DOWN:
                o = this.headers[(n + 1) % s];
                break;
              case i.LEFT:
              case i.UP:
                o = this.headers[(n - 1 + s) % s];
                break;
              case i.SPACE:
              case i.ENTER:
                this._eventHandler(e);
                break;
              case i.HOME:
                o = this.headers[0];
                break;
              case i.END:
                o = this.headers[s - 1];
            }
            o &&
              (t(e.target).attr("tabIndex", -1),
              t(o).attr("tabIndex", 0),
              o.focus(),
              e.preventDefault());
          }
        },
        _panelKeyDown: function (e) {
          e.keyCode === t.ui.keyCode.UP &&
            e.ctrlKey &&
            t(e.currentTarget).prev().focus();
        },
        refresh: function () {
          var e = this.options;
          this._processPanels(),
            (!1 === e.active && !0 === e.collapsible) || !this.headers.length
              ? ((e.active = !1), (this.active = t()))
              : !1 === e.active
              ? this._activate(0)
              : this.active.length &&
                !t.contains(this.element[0], this.active[0])
              ? this.headers.length ===
                this.headers.find(".ui-state-disabled").length
                ? ((e.active = !1), (this.active = t()))
                : this._activate(Math.max(0, e.active - 1))
              : (e.active = this.headers.index(this.active)),
            this._destroyIcons(),
            this._refresh();
        },
        _processPanels: function () {
          (this.headers = this.element
            .find(this.options.header)
            .addClass(
              "ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"
            )),
            this.headers
              .next()
              .addClass(
                "ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom"
              )
              .filter(":not(.ui-accordion-content-active)")
              .hide();
        },
        _refresh: function () {
          var e,
            s = this.options,
            n = s.heightStyle,
            o = this.element.parent(),
            a = (this.accordionId =
              "ui-accordion-" + (this.element.attr("id") || ++i));
          (this.active = this._findActive(s.active)
            .addClass(
              "ui-accordion-header-active ui-state-active ui-corner-top"
            )
            .removeClass("ui-corner-all")),
            this.active.next().addClass("ui-accordion-content-active").show(),
            this.headers
              .attr("role", "tab")
              .each(function (e) {
                var i = t(this),
                  s = i.attr("id"),
                  n = i.next(),
                  o = n.attr("id");
                s || ((s = a + "-header-" + e), i.attr("id", s)),
                  o || ((o = a + "-panel-" + e), n.attr("id", o)),
                  i.attr("aria-controls", o),
                  n.attr("aria-labelledby", s);
              })
              .next()
              .attr("role", "tabpanel"),
            this.headers
              .not(this.active)
              .attr({ "aria-selected": "false", tabIndex: -1 })
              .next()
              .attr({ "aria-expanded": "false", "aria-hidden": "true" })
              .hide(),
            this.active.length
              ? this.active
                  .attr({ "aria-selected": "true", tabIndex: 0 })
                  .next()
                  .attr({ "aria-expanded": "true", "aria-hidden": "false" })
              : this.headers.eq(0).attr("tabIndex", 0),
            this._createIcons(),
            this._setupEvents(s.event),
            "fill" === n
              ? ((e = o.height()),
                this.element.siblings(":visible").each(function () {
                  var i = t(this),
                    s = i.css("position");
                  "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0));
                }),
                this.headers.each(function () {
                  e -= t(this).outerHeight(!0);
                }),
                this.headers
                  .next()
                  .each(function () {
                    t(this).height(
                      Math.max(0, e - t(this).innerHeight() + t(this).height())
                    );
                  })
                  .css("overflow", "auto"))
              : "auto" === n &&
                ((e = 0),
                this.headers
                  .next()
                  .each(function () {
                    e = Math.max(e, t(this).css("height", "").height());
                  })
                  .height(e));
        },
        _activate: function (e) {
          var i = this._findActive(e)[0];
          i !== this.active[0] &&
            ((i = i || this.active[0]),
            this._eventHandler({
              target: i,
              currentTarget: i,
              preventDefault: t.noop,
            }));
        },
        _findActive: function (e) {
          return "number" == typeof e ? this.headers.eq(e) : t();
        },
        _setupEvents: function (e) {
          var i = { keydown: "_keydown" };
          e &&
            t.each(e.split(" "), function (t, e) {
              i[e] = "_eventHandler";
            }),
            this._off(this.headers.add(this.headers.next())),
            this._on(this.headers, i),
            this._on(this.headers.next(), { keydown: "_panelKeyDown" }),
            this._hoverable(this.headers),
            this._focusable(this.headers);
        },
        _eventHandler: function (e) {
          var i = this.options,
            s = this.active,
            n = t(e.currentTarget),
            o = n[0] === s[0],
            a = o && i.collapsible,
            r = a ? t() : n.next(),
            h = {
              oldHeader: s,
              oldPanel: s.next(),
              newHeader: a ? t() : n,
              newPanel: r,
            };
          e.preventDefault(),
            (o && !i.collapsible) ||
              !1 === this._trigger("beforeActivate", e, h) ||
              ((i.active = !a && this.headers.index(n)),
              (this.active = o ? t() : n),
              this._toggle(h),
              s.removeClass("ui-accordion-header-active ui-state-active"),
              i.icons &&
                s
                  .children(".ui-accordion-header-icon")
                  .removeClass(i.icons.activeHeader)
                  .addClass(i.icons.header),
              o ||
                (n
                  .removeClass("ui-corner-all")
                  .addClass(
                    "ui-accordion-header-active ui-state-active ui-corner-top"
                  ),
                i.icons &&
                  n
                    .children(".ui-accordion-header-icon")
                    .removeClass(i.icons.header)
                    .addClass(i.icons.activeHeader),
                n.next().addClass("ui-accordion-content-active")));
        },
        _toggle: function (e) {
          var i = e.newPanel,
            s = this.prevShow.length ? this.prevShow : e.oldPanel;
          this.prevShow.add(this.prevHide).stop(!0, !0),
            (this.prevShow = i),
            (this.prevHide = s),
            this.options.animate
              ? this._animate(i, s, e)
              : (s.hide(), i.show(), this._toggleComplete(e)),
            s.attr({ "aria-expanded": "false", "aria-hidden": "true" }),
            s.prev().attr("aria-selected", "false"),
            i.length && s.length
              ? s.prev().attr("tabIndex", -1)
              : i.length &&
                this.headers
                  .filter(function () {
                    return 0 === t(this).attr("tabIndex");
                  })
                  .attr("tabIndex", -1),
            i
              .attr({ "aria-expanded": "true", "aria-hidden": "false" })
              .prev()
              .attr({ "aria-selected": "true", tabIndex: 0 });
        },
        _animate: function (t, e, i) {
          var o,
            a,
            r,
            h = this,
            l = 0,
            c = t.length && (!e.length || t.index() < e.index()),
            u = this.options.animate || {},
            d = (c && u.down) || u,
            p = function () {
              h._toggleComplete(i);
            };
          return (
            "number" == typeof d && (r = d),
            "string" == typeof d && (a = d),
            (a = a || d.easing || u.easing),
            (r = r || d.duration || u.duration),
            e.length
              ? t.length
                ? ((o = t.show().outerHeight()),
                  e.animate(s, {
                    duration: r,
                    easing: a,
                    step: function (t, e) {
                      e.now = Math.round(t);
                    },
                  }),
                  void t.hide().animate(n, {
                    duration: r,
                    easing: a,
                    complete: p,
                    step: function (t, i) {
                      (i.now = Math.round(t)),
                        "height" !== i.prop
                          ? (l += i.now)
                          : "content" !== h.options.heightStyle &&
                            ((i.now = Math.round(o - e.outerHeight() - l)),
                            (l = 0));
                    },
                  }))
                : e.animate(s, r, a, p)
              : t.animate(n, r, a, p)
          );
        },
        _toggleComplete: function (t) {
          var e = t.oldPanel;
          e
            .removeClass("ui-accordion-content-active")
            .prev()
            .removeClass("ui-corner-top")
            .addClass("ui-corner-all"),
            e.length && (e.parent()[0].className = e.parent()[0].className),
            this._trigger("activate", null, t);
        },
      });
  })(jQuery),
  (function (t, e) {
    var i = 0;
    t.widget("ui.autocomplete", {
      version: "1.10.3",
      defaultElement: "<input>",
      options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: { my: "left top", at: "left bottom", collision: "none" },
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null,
      },
      pending: 0,
      _create: function () {
        var e,
          i,
          s,
          n = this.element[0].nodeName.toLowerCase(),
          o = "textarea" === n,
          a = "input" === n;
        (this.isMultiLine =
          !!o || (!a && this.element.prop("isContentEditable"))),
          (this.valueMethod = this.element[o || a ? "val" : "text"]),
          (this.isNewMenu = !0),
          this.element
            .addClass("ui-autocomplete-input")
            .attr("autocomplete", "off"),
          this._on(this.element, {
            keydown: function (n) {
              if (this.element.prop("readOnly"))
                return (e = !0), (s = !0), void (i = !0);
              (e = !1), (s = !1), (i = !1);
              var o = t.ui.keyCode;
              switch (n.keyCode) {
                case o.PAGE_UP:
                  (e = !0), this._move("previousPage", n);
                  break;
                case o.PAGE_DOWN:
                  (e = !0), this._move("nextPage", n);
                  break;
                case o.UP:
                  (e = !0), this._keyEvent("previous", n);
                  break;
                case o.DOWN:
                  (e = !0), this._keyEvent("next", n);
                  break;
                case o.ENTER:
                case o.NUMPAD_ENTER:
                  this.menu.active &&
                    ((e = !0), n.preventDefault(), this.menu.select(n));
                  break;
                case o.TAB:
                  this.menu.active && this.menu.select(n);
                  break;
                case o.ESCAPE:
                  this.menu.element.is(":visible") &&
                    (this._value(this.term), this.close(n), n.preventDefault());
                  break;
                default:
                  (i = !0), this._searchTimeout(n);
              }
            },
            keypress: function (s) {
              if (e)
                return (
                  (e = !1),
                  void (
                    (this.isMultiLine && !this.menu.element.is(":visible")) ||
                    s.preventDefault()
                  )
                );
              if (!i) {
                var n = t.ui.keyCode;
                switch (s.keyCode) {
                  case n.PAGE_UP:
                    this._move("previousPage", s);
                    break;
                  case n.PAGE_DOWN:
                    this._move("nextPage", s);
                    break;
                  case n.UP:
                    this._keyEvent("previous", s);
                    break;
                  case n.DOWN:
                    this._keyEvent("next", s);
                }
              }
            },
            input: function (t) {
              if (s) return (s = !1), void t.preventDefault();
              this._searchTimeout(t);
            },
            focus: function () {
              (this.selectedItem = null), (this.previous = this._value());
            },
            blur: function (t) {
              this.cancelBlur
                ? delete this.cancelBlur
                : (clearTimeout(this.searching),
                  this.close(t),
                  this._change(t));
            },
          }),
          this._initSource(),
          (this.menu = t("<ul>")
            .addClass("ui-autocomplete ui-front")
            .appendTo(this._appendTo())
            .menu({ role: null })
            .hide()
            .data("ui-menu")),
          this._on(this.menu.element, {
            mousedown: function (e) {
              e.preventDefault(),
                (this.cancelBlur = !0),
                this._delay(function () {
                  delete this.cancelBlur;
                });
              var i = this.menu.element[0];
              t(e.target).closest(".ui-menu-item").length ||
                this._delay(function () {
                  var e = this;
                  this.document.one("mousedown", function (s) {
                    s.target === e.element[0] ||
                      s.target === i ||
                      t.contains(i, s.target) ||
                      e.close();
                  });
                });
            },
            menufocus: function (e, i) {
              if (
                this.isNewMenu &&
                ((this.isNewMenu = !1),
                e.originalEvent && /^mouse/.test(e.originalEvent.type))
              )
                return (
                  this.menu.blur(),
                  void this.document.one("mousemove", function () {
                    t(e.target).trigger(e.originalEvent);
                  })
                );
              var s = i.item.data("ui-autocomplete-item");
              !1 !== this._trigger("focus", e, { item: s })
                ? e.originalEvent &&
                  /^key/.test(e.originalEvent.type) &&
                  this._value(s.value)
                : this.liveRegion.text(s.value);
            },
            menuselect: function (t, e) {
              var i = e.item.data("ui-autocomplete-item"),
                s = this.previous;
              this.element[0] !== this.document[0].activeElement &&
                (this.element.focus(),
                (this.previous = s),
                this._delay(function () {
                  (this.previous = s), (this.selectedItem = i);
                })),
                !1 !== this._trigger("select", t, { item: i }) &&
                  this._value(i.value),
                (this.term = this._value()),
                this.close(t),
                (this.selectedItem = i);
            },
          }),
          (this.liveRegion = t("<span>", {
            role: "status",
            "aria-live": "polite",
          })
            .addClass("ui-helper-hidden-accessible")
            .insertBefore(this.element)),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr("autocomplete");
            },
          });
      },
      _destroy: function () {
        clearTimeout(this.searching),
          this.element
            .removeClass("ui-autocomplete-input")
            .removeAttr("autocomplete"),
          this.menu.element.remove(),
          this.liveRegion.remove();
      },
      _setOption: function (t, e) {
        this._super(t, e),
          "source" === t && this._initSource(),
          "appendTo" === t && this.menu.element.appendTo(this._appendTo()),
          "disabled" === t && e && this.xhr && this.xhr.abort();
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return (
          e &&
            (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)),
          e || (e = this.element.closest(".ui-front")),
          e.length || (e = this.document[0].body),
          e
        );
      },
      _initSource: function () {
        var e,
          i,
          s = this;
        t.isArray(this.options.source)
          ? ((e = this.options.source),
            (this.source = function (i, s) {
              s(t.ui.autocomplete.filter(e, i.term));
            }))
          : "string" == typeof this.options.source
          ? ((i = this.options.source),
            (this.source = function (e, n) {
              s.xhr && s.xhr.abort(),
                (s.xhr = t.ajax({
                  url: i,
                  data: e,
                  dataType: "json",
                  success: function (t) {
                    n(t);
                  },
                  error: function () {
                    n([]);
                  },
                }));
            }))
          : (this.source = this.options.source);
      },
      _searchTimeout: function (t) {
        clearTimeout(this.searching),
          (this.searching = this._delay(function () {
            this.term !== this._value() &&
              ((this.selectedItem = null), this.search(null, t));
          }, this.options.delay));
      },
      search: function (t, e) {
        return (
          (t = null != t ? t : this._value()),
          (this.term = this._value()),
          t.length < this.options.minLength
            ? this.close(e)
            : !1 !== this._trigger("search", e)
            ? this._search(t)
            : void 0
        );
      },
      _search: function (t) {
        this.pending++,
          this.element.addClass("ui-autocomplete-loading"),
          (this.cancelSearch = !1),
          this.source({ term: t }, this._response());
      },
      _response: function () {
        var t = this,
          e = ++i;
        return function (s) {
          e === i && t.__response(s),
            t.pending--,
            t.pending || t.element.removeClass("ui-autocomplete-loading");
        };
      },
      __response: function (t) {
        t && (t = this._normalize(t)),
          this._trigger("response", null, { content: t }),
          !this.options.disabled && t && t.length && !this.cancelSearch
            ? (this._suggest(t), this._trigger("open"))
            : this._close();
      },
      close: function (t) {
        (this.cancelSearch = !0), this._close(t);
      },
      _close: function (t) {
        this.menu.element.is(":visible") &&
          (this.menu.element.hide(),
          this.menu.blur(),
          (this.isNewMenu = !0),
          this._trigger("close", t));
      },
      _change: function (t) {
        this.previous !== this._value() &&
          this._trigger("change", t, { item: this.selectedItem });
      },
      _normalize: function (e) {
        return e.length && e[0].label && e[0].value
          ? e
          : t.map(e, function (e) {
              return "string" == typeof e
                ? { label: e, value: e }
                : t.extend(
                    { label: e.label || e.value, value: e.value || e.label },
                    e
                  );
            });
      },
      _suggest: function (e) {
        var i = this.menu.element.empty();
        this._renderMenu(i, e),
          (this.isNewMenu = !0),
          this.menu.refresh(),
          i.show(),
          this._resizeMenu(),
          i.position(t.extend({ of: this.element }, this.options.position)),
          this.options.autoFocus && this.menu.next();
      },
      _resizeMenu: function () {
        var t = this.menu.element;
        t.outerWidth(
          Math.max(t.width("").outerWidth() + 1, this.element.outerWidth())
        );
      },
      _renderMenu: function (e, i) {
        var s = this;
        t.each(i, function (t, i) {
          s._renderItemData(e, i);
        });
      },
      _renderItemData: function (t, e) {
        return this._renderItem(t, e).data("ui-autocomplete-item", e);
      },
      _renderItem: function (e, i) {
        return t("<li>").append(t("<a>").text(i.label)).appendTo(e);
      },
      _move: function (t, e) {
        if (this.menu.element.is(":visible"))
          return (this.menu.isFirstItem() && /^previous/.test(t)) ||
            (this.menu.isLastItem() && /^next/.test(t))
            ? (this._value(this.term), void this.menu.blur())
            : void this.menu[t](e);
        this.search(null, e);
      },
      widget: function () {
        return this.menu.element;
      },
      _value: function () {
        return this.valueMethod.apply(this.element, arguments);
      },
      _keyEvent: function (t, e) {
        (this.isMultiLine && !this.menu.element.is(":visible")) ||
          (this._move(t, e), e.preventDefault());
      },
    }),
      t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        },
        filter: function (e, i) {
          var s = new RegExp(t.ui.autocomplete.escapeRegex(i), "i");
          return t.grep(e, function (t) {
            return s.test(t.label || t.value || t);
          });
        },
      }),
      t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function (t) {
              return (
                t +
                (t > 1 ? " results are" : " result is") +
                " available, use up and down arrow keys to navigate."
              );
            },
          },
        },
        __response: function (t) {
          var e;
          this._superApply(arguments),
            this.options.disabled ||
              this.cancelSearch ||
              ((e =
                t && t.length
                  ? this.options.messages.results(t.length)
                  : this.options.messages.noResults),
              this.liveRegion.text(e));
        },
      });
  })(jQuery),
  (function (t, e) {
    var i,
      s,
      n,
      o,
      a = "ui-button ui-widget ui-state-default ui-corner-all",
      r =
        "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
      h = function () {
        var e = t(this);
        setTimeout(function () {
          e.find(":ui-button").button("refresh");
        }, 1);
      },
      l = function (e) {
        var i = e.name,
          s = e.form,
          n = t([]);
        return (
          i &&
            ((i = i.replace(/'/g, "\\'")),
            (n = s
              ? t(s).find("[name='" + i + "']")
              : t("[name='" + i + "']", e.ownerDocument).filter(function () {
                  return !this.form;
                }))),
          n
        );
      };
    t.widget("ui.button", {
      version: "1.10.3",
      defaultElement: "<button>",
      options: {
        disabled: null,
        text: !0,
        label: null,
        icons: { primary: null, secondary: null },
      },
      _create: function () {
        this.element
          .closest("form")
          .unbind("reset" + this.eventNamespace)
          .bind("reset" + this.eventNamespace, h),
          "boolean" != typeof this.options.disabled
            ? (this.options.disabled = !!this.element.prop("disabled"))
            : this.element.prop("disabled", this.options.disabled),
          this._determineButtonType(),
          (this.hasTitle = !!this.buttonElement.attr("title"));
        var e = this,
          r = this.options,
          c = "checkbox" === this.type || "radio" === this.type,
          u = c ? "" : "ui-state-active";
        null === r.label &&
          (r.label =
            "input" === this.type
              ? this.buttonElement.val()
              : this.buttonElement.html()),
          this._hoverable(this.buttonElement),
          this.buttonElement
            .addClass(a)
            .attr("role", "button")
            .bind("mouseenter" + this.eventNamespace, function () {
              r.disabled || (this === i && t(this).addClass("ui-state-active"));
            })
            .bind("mouseleave" + this.eventNamespace, function () {
              r.disabled || t(this).removeClass(u);
            })
            .bind("click" + this.eventNamespace, function (t) {
              r.disabled && (t.preventDefault(), t.stopImmediatePropagation());
            }),
          this.element
            .bind("focus" + this.eventNamespace, function () {
              e.buttonElement.addClass("ui-state-focus");
            })
            .bind("blur" + this.eventNamespace, function () {
              e.buttonElement.removeClass("ui-state-focus");
            }),
          c &&
            (this.element.bind("change" + this.eventNamespace, function () {
              o || e.refresh();
            }),
            this.buttonElement
              .bind("mousedown" + this.eventNamespace, function (t) {
                r.disabled || ((o = !1), (s = t.pageX), (n = t.pageY));
              })
              .bind("mouseup" + this.eventNamespace, function (t) {
                r.disabled || (s === t.pageX && n === t.pageY) || (o = !0);
              })),
          "checkbox" === this.type
            ? this.buttonElement.bind(
                "click" + this.eventNamespace,
                function () {
                  if (r.disabled || o) return !1;
                }
              )
            : "radio" === this.type
            ? this.buttonElement.bind(
                "click" + this.eventNamespace,
                function () {
                  if (r.disabled || o) return !1;
                  t(this).addClass("ui-state-active"),
                    e.buttonElement.attr("aria-pressed", "true");
                  var i = e.element[0];
                  l(i)
                    .not(i)
                    .map(function () {
                      return t(this).button("widget")[0];
                    })
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", "false");
                }
              )
            : (this.buttonElement
                .bind("mousedown" + this.eventNamespace, function () {
                  if (r.disabled) return !1;
                  t(this).addClass("ui-state-active"),
                    (i = this),
                    e.document.one("mouseup", function () {
                      i = null;
                    });
                })
                .bind("mouseup" + this.eventNamespace, function () {
                  if (r.disabled) return !1;
                  t(this).removeClass("ui-state-active");
                })
                .bind("keydown" + this.eventNamespace, function (e) {
                  if (r.disabled) return !1;
                  (e.keyCode !== t.ui.keyCode.SPACE &&
                    e.keyCode !== t.ui.keyCode.ENTER) ||
                    t(this).addClass("ui-state-active");
                })
                .bind(
                  "keyup" + this.eventNamespace + " blur" + this.eventNamespace,
                  function () {
                    t(this).removeClass("ui-state-active");
                  }
                ),
              this.buttonElement.is("a") &&
                this.buttonElement.keyup(function (e) {
                  e.keyCode === t.ui.keyCode.SPACE && t(this).click();
                })),
          this._setOption("disabled", r.disabled),
          this._resetButton();
      },
      _determineButtonType: function () {
        var t, e, i;
        this.element.is("[type=checkbox]")
          ? (this.type = "checkbox")
          : this.element.is("[type=radio]")
          ? (this.type = "radio")
          : this.element.is("input")
          ? (this.type = "input")
          : (this.type = "button"),
          "checkbox" === this.type || "radio" === this.type
            ? ((t = this.element.parents().last()),
              (e = "label[for='" + this.element.attr("id") + "']"),
              (this.buttonElement = t.find(e)),
              this.buttonElement.length ||
                ((t = t.length ? t.siblings() : this.element.siblings()),
                (this.buttonElement = t.filter(e)),
                this.buttonElement.length || (this.buttonElement = t.find(e))),
              this.element.addClass("ui-helper-hidden-accessible"),
              (i = this.element.is(":checked")) &&
                this.buttonElement.addClass("ui-state-active"),
              this.buttonElement.prop("aria-pressed", i))
            : (this.buttonElement = this.element);
      },
      widget: function () {
        return this.buttonElement;
      },
      _destroy: function () {
        this.element.removeClass("ui-helper-hidden-accessible"),
          this.buttonElement
            .removeClass(a + " ui-state-hover ui-state-active  " + r)
            .removeAttr("role")
            .removeAttr("aria-pressed")
            .html(this.buttonElement.find(".ui-button-text").html()),
          this.hasTitle || this.buttonElement.removeAttr("title");
      },
      _setOption: function (t, e) {
        this._super(t, e),
          "disabled" !== t
            ? this._resetButton()
            : e
            ? this.element.prop("disabled", !0)
            : this.element.prop("disabled", !1);
      },
      refresh: function () {
        var e = this.element.is("input, button")
          ? this.element.is(":disabled")
          : this.element.hasClass("ui-button-disabled");
        e !== this.options.disabled && this._setOption("disabled", e),
          "radio" === this.type
            ? l(this.element[0]).each(function () {
                t(this).is(":checked")
                  ? t(this)
                      .button("widget")
                      .addClass("ui-state-active")
                      .attr("aria-pressed", "true")
                  : t(this)
                      .button("widget")
                      .removeClass("ui-state-active")
                      .attr("aria-pressed", "false");
              })
            : "checkbox" === this.type &&
              (this.element.is(":checked")
                ? this.buttonElement
                    .addClass("ui-state-active")
                    .attr("aria-pressed", "true")
                : this.buttonElement
                    .removeClass("ui-state-active")
                    .attr("aria-pressed", "false"));
      },
      _resetButton: function () {
        if ("input" !== this.type) {
          var e = this.buttonElement.removeClass(r),
            i = t("<span></span>", this.document[0])
              .addClass("ui-button-text")
              .html(this.options.label)
              .appendTo(e.empty())
              .text(),
            s = this.options.icons,
            n = s.primary && s.secondary,
            o = [];
          s.primary || s.secondary
            ? (this.options.text &&
                o.push(
                  "ui-button-text-icon" +
                    (n ? "s" : s.primary ? "-primary" : "-secondary")
                ),
              s.primary &&
                e.prepend(
                  "<span class='ui-button-icon-primary ui-icon " +
                    s.primary +
                    "'></span>"
                ),
              s.secondary &&
                e.append(
                  "<span class='ui-button-icon-secondary ui-icon " +
                    s.secondary +
                    "'></span>"
                ),
              this.options.text ||
                (o.push(n ? "ui-button-icons-only" : "ui-button-icon-only"),
                this.hasTitle || e.attr("title", t.trim(i))))
            : o.push("ui-button-text-only"),
            e.addClass(o.join(" "));
        } else this.options.label && this.element.val(this.options.label);
      },
    }),
      t.widget("ui.buttonset", {
        version: "1.10.3",
        options: {
          items:
            "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)",
        },
        _create: function () {
          this.element.addClass("ui-buttonset");
        },
        _init: function () {
          this.refresh();
        },
        _setOption: function (t, e) {
          "disabled" === t && this.buttons.button("option", t, e),
            this._super(t, e);
        },
        refresh: function () {
          var e = "rtl" === this.element.css("direction");
          this.buttons = this.element
            .find(this.options.items)
            .filter(":ui-button")
            .button("refresh")
            .end()
            .not(":ui-button")
            .button()
            .end()
            .map(function () {
              return t(this).button("widget")[0];
            })
            .removeClass("ui-corner-all ui-corner-left ui-corner-right")
            .filter(":first")
            .addClass(e ? "ui-corner-right" : "ui-corner-left")
            .end()
            .filter(":last")
            .addClass(e ? "ui-corner-left" : "ui-corner-right")
            .end()
            .end();
        },
        _destroy: function () {
          this.element.removeClass("ui-buttonset"),
            this.buttons
              .map(function () {
                return t(this).button("widget")[0];
              })
              .removeClass("ui-corner-left ui-corner-right")
              .end()
              .button("destroy");
        },
      });
  })(jQuery),
  (function (t, e) {
    function i() {
      (this._curInst = null),
        (this._keyEvent = !1),
        (this._disabledInputs = []),
        (this._datepickerShowing = !1),
        (this._inDialog = !1),
        (this._mainDivId = "ui-datepicker-div"),
        (this._inlineClass = "ui-datepicker-inline"),
        (this._appendClass = "ui-datepicker-append"),
        (this._triggerClass = "ui-datepicker-trigger"),
        (this._dialogClass = "ui-datepicker-dialog"),
        (this._disableClass = "ui-datepicker-disabled"),
        (this._unselectableClass = "ui-datepicker-unselectable"),
        (this._currentClass = "ui-datepicker-current-day"),
        (this._dayOverClass = "ui-datepicker-days-cell-over"),
        (this.regional = []),
        (this.regional[""] = {
          closeText: "Done",
          prevText: "Prev",
          nextText: "Next",
          currentText: "Today",
          monthNames: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          monthNamesShort: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          dayNames: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          weekHeader: "Wk",
          dateFormat: "mm/dd/yy",
          firstDay: 0,
          isRTL: !1,
          showMonthAfterYear: !1,
          yearSuffix: "",
        }),
        (this._defaults = {
          showOn: "focus",
          showAnim: "fadeIn",
          showOptions: {},
          defaultDate: null,
          appendText: "",
          buttonText: "...",
          buttonImage: "",
          buttonImageOnly: !1,
          hideIfNoPrevNext: !1,
          navigationAsDateFormat: !1,
          gotoCurrent: !1,
          changeMonth: !1,
          changeYear: !1,
          yearRange: "c-10:c+10",
          showOtherMonths: !1,
          selectOtherMonths: !1,
          showWeek: !1,
          calculateWeek: this.iso8601Week,
          shortYearCutoff: "+10",
          minDate: null,
          maxDate: null,
          duration: "fast",
          beforeShowDay: null,
          beforeShow: null,
          onSelect: null,
          onChangeMonthYear: null,
          onClose: null,
          numberOfMonths: 1,
          showCurrentAtPos: 0,
          stepMonths: 1,
          stepBigMonths: 12,
          altField: "",
          altFormat: "",
          constrainInput: !0,
          showButtonPanel: !1,
          autoSize: !1,
          disabled: !1,
        }),
        t.extend(this._defaults, this.regional[""]),
        (this.dpDiv = s(
          t(
            "<div id='" +
              this._mainDivId +
              "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
          )
        ));
    }
    function s(e) {
      var i =
        "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return e
        .delegate(i, "mouseout", function () {
          t(this).removeClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") &&
              t(this).removeClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") &&
              t(this).removeClass("ui-datepicker-next-hover");
        })
        .delegate(i, "mouseover", function () {
          t.datepicker._isDisabledDatepicker(
            o.inline ? e.parent()[0] : o.input[0]
          ) ||
            (t(this)
              .parents(".ui-datepicker-calendar")
              .find("a")
              .removeClass("ui-state-hover"),
            t(this).addClass("ui-state-hover"),
            -1 !== this.className.indexOf("ui-datepicker-prev") &&
              t(this).addClass("ui-datepicker-prev-hover"),
            -1 !== this.className.indexOf("ui-datepicker-next") &&
              t(this).addClass("ui-datepicker-next-hover"));
        });
    }
    function n(e, i) {
      t.extend(e, i);
      for (var s in i) null == i[s] && (e[s] = i[s]);
      return e;
    }
    t.extend(t.ui, { datepicker: { version: "1.10.3" } });
    var o,
      a = "datepicker";
    t.extend(i.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv;
      },
      setDefaults: function (t) {
        return n(this._defaults, t || {}), this;
      },
      _attachDatepicker: function (e, i) {
        var s, n, o;
        (n = "div" === (s = e.nodeName.toLowerCase()) || "span" === s),
          e.id || ((this.uuid += 1), (e.id = "dp" + this.uuid)),
          ((o = this._newInst(t(e), n)).settings = t.extend({}, i || {})),
          "input" === s
            ? this._connectDatepicker(e, o)
            : n && this._inlineDatepicker(e, o);
      },
      _newInst: function (e, i) {
        return {
          id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
          input: e,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: i,
          dpDiv: i
            ? s(
                t(
                  "<div class='" +
                    this._inlineClass +
                    " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"
                )
              )
            : this.dpDiv,
        };
      },
      _connectDatepicker: function (e, i) {
        var s = t(e);
        (i.append = t([])),
          (i.trigger = t([])),
          s.hasClass(this.markerClassName) ||
            (this._attachments(s, i),
            s
              .addClass(this.markerClassName)
              .keydown(this._doKeyDown)
              .keypress(this._doKeyPress)
              .keyup(this._doKeyUp),
            this._autoSize(i),
            t.data(e, a, i),
            i.settings.disabled && this._disableDatepicker(e));
      },
      _attachments: function (e, i) {
        var s,
          n,
          o,
          a = this._get(i, "appendText"),
          r = this._get(i, "isRTL");
        i.append && i.append.remove(),
          a &&
            ((i.append = t(
              "<span class='" + this._appendClass + "'>" + a + "</span>"
            )),
            e[r ? "before" : "after"](i.append)),
          e.unbind("focus", this._showDatepicker),
          i.trigger && i.trigger.remove(),
          ("focus" !== (s = this._get(i, "showOn")) && "both" !== s) ||
            e.focus(this._showDatepicker),
          ("button" !== s && "both" !== s) ||
            ((n = this._get(i, "buttonText")),
            (o = this._get(i, "buttonImage")),
            (i.trigger = t(
              this._get(i, "buttonImageOnly")
                ? t("<img/>")
                    .addClass(this._triggerClass)
                    .attr({ src: o, alt: n, title: n })
                : t("<button type='button'></button>")
                    .addClass(this._triggerClass)
                    .html(
                      o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n
                    )
            )),
            e[r ? "before" : "after"](i.trigger),
            i.trigger.click(function () {
              return (
                t.datepicker._datepickerShowing &&
                t.datepicker._lastInput === e[0]
                  ? t.datepicker._hideDatepicker()
                  : t.datepicker._datepickerShowing &&
                    t.datepicker._lastInput !== e[0]
                  ? (t.datepicker._hideDatepicker(),
                    t.datepicker._showDatepicker(e[0]))
                  : t.datepicker._showDatepicker(e[0]),
                !1
              );
            }));
      },
      _autoSize: function (t) {
        if (this._get(t, "autoSize") && !t.inline) {
          var e,
            i,
            s,
            n,
            o = new Date(2009, 11, 20),
            a = this._get(t, "dateFormat");
          a.match(/[DM]/) &&
            ((e = function (t) {
              for (i = 0, s = 0, n = 0; n < t.length; n++)
                t[n].length > i && ((i = t[n].length), (s = n));
              return s;
            }),
            o.setMonth(
              e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))
            ),
            o.setDate(
              e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) +
                20 -
                o.getDay()
            )),
            t.input.attr("size", this._formatDate(t, o).length);
        }
      },
      _inlineDatepicker: function (e, i) {
        var s = t(e);
        s.hasClass(this.markerClassName) ||
          (s.addClass(this.markerClassName).append(i.dpDiv),
          t.data(e, a, i),
          this._setDate(i, this._getDefaultDate(i), !0),
          this._updateDatepicker(i),
          this._updateAlternate(i),
          i.settings.disabled && this._disableDatepicker(e),
          i.dpDiv.css("display", "block"));
      },
      _dialogDatepicker: function (e, i, s, o, r) {
        var h,
          l,
          c,
          u,
          d,
          p = this._dialogInst;
        return (
          p ||
            ((this.uuid += 1),
            (h = "dp" + this.uuid),
            (this._dialogInput = t(
              "<input type='text' id='" +
                h +
                "' style='position: absolute; top: -100px; width: 0px;'/>"
            )),
            this._dialogInput.keydown(this._doKeyDown),
            t("body").append(this._dialogInput),
            ((p = this._dialogInst =
              this._newInst(this._dialogInput, !1)).settings = {}),
            t.data(this._dialogInput[0], a, p)),
          n(p.settings, o || {}),
          (i = i && i.constructor === Date ? this._formatDate(p, i) : i),
          this._dialogInput.val(i),
          (this._pos = r ? (r.length ? r : [r.pageX, r.pageY]) : null),
          this._pos ||
            ((l = document.documentElement.clientWidth),
            (c = document.documentElement.clientHeight),
            (u =
              document.documentElement.scrollLeft || document.body.scrollLeft),
            (d = document.documentElement.scrollTop || document.body.scrollTop),
            (this._pos = [l / 2 - 100 + u, c / 2 - 150 + d])),
          this._dialogInput
            .css("left", this._pos[0] + 20 + "px")
            .css("top", this._pos[1] + "px"),
          (p.settings.onSelect = s),
          (this._inDialog = !0),
          this.dpDiv.addClass(this._dialogClass),
          this._showDatepicker(this._dialogInput[0]),
          t.blockUI && t.blockUI(this.dpDiv),
          t.data(this._dialogInput[0], a, p),
          this
        );
      },
      _destroyDatepicker: function (e) {
        var i,
          s = t(e),
          n = t.data(e, a);
        s.hasClass(this.markerClassName) &&
          ((i = e.nodeName.toLowerCase()),
          t.removeData(e, a),
          "input" === i
            ? (n.append.remove(),
              n.trigger.remove(),
              s
                .removeClass(this.markerClassName)
                .unbind("focus", this._showDatepicker)
                .unbind("keydown", this._doKeyDown)
                .unbind("keypress", this._doKeyPress)
                .unbind("keyup", this._doKeyUp))
            : ("div" !== i && "span" !== i) ||
              s.removeClass(this.markerClassName).empty());
      },
      _enableDatepicker: function (e) {
        var i,
          s,
          n = t(e),
          o = t.data(e, a);
        n.hasClass(this.markerClassName) &&
          ("input" === (i = e.nodeName.toLowerCase())
            ? ((e.disabled = !1),
              o.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !1;
                })
                .end()
                .filter("img")
                .css({ opacity: "1.0", cursor: "" }))
            : ("div" !== i && "span" !== i) ||
              ((s = n.children("." + this._inlineClass))
                .children()
                .removeClass("ui-state-disabled"),
              s
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !1)),
          (this._disabledInputs = t.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })));
      },
      _disableDatepicker: function (e) {
        var i,
          s,
          n = t(e),
          o = t.data(e, a);
        n.hasClass(this.markerClassName) &&
          ("input" === (i = e.nodeName.toLowerCase())
            ? ((e.disabled = !0),
              o.trigger
                .filter("button")
                .each(function () {
                  this.disabled = !0;
                })
                .end()
                .filter("img")
                .css({ opacity: "0.5", cursor: "default" }))
            : ("div" !== i && "span" !== i) ||
              ((s = n.children("." + this._inlineClass))
                .children()
                .addClass("ui-state-disabled"),
              s
                .find("select.ui-datepicker-month, select.ui-datepicker-year")
                .prop("disabled", !0)),
          (this._disabledInputs = t.map(this._disabledInputs, function (t) {
            return t === e ? null : t;
          })),
          (this._disabledInputs[this._disabledInputs.length] = e));
      },
      _isDisabledDatepicker: function (t) {
        if (!t) return !1;
        for (var e = 0; e < this._disabledInputs.length; e++)
          if (this._disabledInputs[e] === t) return !0;
        return !1;
      },
      _getInst: function (e) {
        try {
          return t.data(e, a);
        } catch (t) {
          throw "Missing instance data for this datepicker";
        }
      },
      _optionDatepicker: function (e, i, s) {
        var o,
          a,
          r,
          h,
          l = this._getInst(e);
        if (2 === arguments.length && "string" == typeof i)
          return "defaults" === i
            ? t.extend({}, t.datepicker._defaults)
            : l
            ? "all" === i
              ? t.extend({}, l.settings)
              : this._get(l, i)
            : null;
        (o = i || {}),
          "string" == typeof i && ((o = {})[i] = s),
          l &&
            (this._curInst === l && this._hideDatepicker(),
            (a = this._getDateDatepicker(e, !0)),
            (r = this._getMinMaxDate(l, "min")),
            (h = this._getMinMaxDate(l, "max")),
            n(l.settings, o),
            null !== r &&
              void 0 !== o.dateFormat &&
              void 0 === o.minDate &&
              (l.settings.minDate = this._formatDate(l, r)),
            null !== h &&
              void 0 !== o.dateFormat &&
              void 0 === o.maxDate &&
              (l.settings.maxDate = this._formatDate(l, h)),
            "disabled" in o &&
              (o.disabled
                ? this._disableDatepicker(e)
                : this._enableDatepicker(e)),
            this._attachments(t(e), l),
            this._autoSize(l),
            this._setDate(l, a),
            this._updateAlternate(l),
            this._updateDatepicker(l));
      },
      _changeDatepicker: function (t, e, i) {
        this._optionDatepicker(t, e, i);
      },
      _refreshDatepicker: function (t) {
        var e = this._getInst(t);
        e && this._updateDatepicker(e);
      },
      _setDateDatepicker: function (t, e) {
        var i = this._getInst(t);
        i &&
          (this._setDate(i, e),
          this._updateDatepicker(i),
          this._updateAlternate(i));
      },
      _getDateDatepicker: function (t, e) {
        var i = this._getInst(t);
        return (
          i && !i.inline && this._setDateFromField(i, e),
          i ? this._getDate(i) : null
        );
      },
      _doKeyDown: function (e) {
        var i,
          s,
          n,
          o = t.datepicker._getInst(e.target),
          a = !0,
          r = o.dpDiv.is(".ui-datepicker-rtl");
        if (((o._keyEvent = !0), t.datepicker._datepickerShowing))
          switch (e.keyCode) {
            case 9:
              t.datepicker._hideDatepicker(), (a = !1);
              break;
            case 13:
              return (
                (n = t(
                  "td." +
                    t.datepicker._dayOverClass +
                    ":not(." +
                    t.datepicker._currentClass +
                    ")",
                  o.dpDiv
                ))[0] &&
                  t.datepicker._selectDay(
                    e.target,
                    o.selectedMonth,
                    o.selectedYear,
                    n[0]
                  ),
                (i = t.datepicker._get(o, "onSelect"))
                  ? ((s = t.datepicker._formatDate(o)),
                    i.apply(o.input ? o.input[0] : null, [s, o]))
                  : t.datepicker._hideDatepicker(),
                !1
              );
            case 27:
              t.datepicker._hideDatepicker();
              break;
            case 33:
              t.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? -t.datepicker._get(o, "stepBigMonths")
                  : -t.datepicker._get(o, "stepMonths"),
                "M"
              );
              break;
            case 34:
              t.datepicker._adjustDate(
                e.target,
                e.ctrlKey
                  ? +t.datepicker._get(o, "stepBigMonths")
                  : +t.datepicker._get(o, "stepMonths"),
                "M"
              );
              break;
            case 35:
              (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target),
                (a = e.ctrlKey || e.metaKey);
              break;
            case 36:
              (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target),
                (a = e.ctrlKey || e.metaKey);
              break;
            case 37:
              (e.ctrlKey || e.metaKey) &&
                t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"),
                (a = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  t.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? -t.datepicker._get(o, "stepBigMonths")
                      : -t.datepicker._get(o, "stepMonths"),
                    "M"
                  );
              break;
            case 38:
              (e.ctrlKey || e.metaKey) &&
                t.datepicker._adjustDate(e.target, -7, "D"),
                (a = e.ctrlKey || e.metaKey);
              break;
            case 39:
              (e.ctrlKey || e.metaKey) &&
                t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"),
                (a = e.ctrlKey || e.metaKey),
                e.originalEvent.altKey &&
                  t.datepicker._adjustDate(
                    e.target,
                    e.ctrlKey
                      ? +t.datepicker._get(o, "stepBigMonths")
                      : +t.datepicker._get(o, "stepMonths"),
                    "M"
                  );
              break;
            case 40:
              (e.ctrlKey || e.metaKey) &&
                t.datepicker._adjustDate(e.target, 7, "D"),
                (a = e.ctrlKey || e.metaKey);
              break;
            default:
              a = !1;
          }
        else
          36 === e.keyCode && e.ctrlKey
            ? t.datepicker._showDatepicker(this)
            : (a = !1);
        a && (e.preventDefault(), e.stopPropagation());
      },
      _doKeyPress: function (e) {
        var i,
          s,
          n = t.datepicker._getInst(e.target);
        if (t.datepicker._get(n, "constrainInput"))
          return (
            (i = t.datepicker._possibleChars(
              t.datepicker._get(n, "dateFormat")
            )),
            (s = String.fromCharCode(
              null == e.charCode ? e.keyCode : e.charCode
            )),
            e.ctrlKey || e.metaKey || s < " " || !i || i.indexOf(s) > -1
          );
      },
      _doKeyUp: function (e) {
        var i = t.datepicker._getInst(e.target);
        if (i.input.val() !== i.lastVal)
          try {
            t.datepicker.parseDate(
              t.datepicker._get(i, "dateFormat"),
              i.input ? i.input.val() : null,
              t.datepicker._getFormatConfig(i)
            ) &&
              (t.datepicker._setDateFromField(i),
              t.datepicker._updateAlternate(i),
              t.datepicker._updateDatepicker(i));
          } catch (t) {}
        return !0;
      },
      _showDatepicker: function (e) {
        if (
          ("input" !== (e = e.target || e).nodeName.toLowerCase() &&
            (e = t("input", e.parentNode)[0]),
          !t.datepicker._isDisabledDatepicker(e) &&
            t.datepicker._lastInput !== e)
        ) {
          var i, s, o, a, r, h, l;
          (i = t.datepicker._getInst(e)),
            t.datepicker._curInst &&
              t.datepicker._curInst !== i &&
              (t.datepicker._curInst.dpDiv.stop(!0, !0),
              i &&
                t.datepicker._datepickerShowing &&
                t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])),
            !1 !==
              (o = (s = t.datepicker._get(i, "beforeShow"))
                ? s.apply(e, [e, i])
                : {}) &&
              (n(i.settings, o),
              (i.lastVal = null),
              (t.datepicker._lastInput = e),
              t.datepicker._setDateFromField(i),
              t.datepicker._inDialog && (e.value = ""),
              t.datepicker._pos ||
                ((t.datepicker._pos = t.datepicker._findPos(e)),
                (t.datepicker._pos[1] += e.offsetHeight)),
              (a = !1),
              t(e)
                .parents()
                .each(function () {
                  return !(a |= "fixed" === t(this).css("position"));
                }),
              (r = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }),
              (t.datepicker._pos = null),
              i.dpDiv.empty(),
              i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px",
              }),
              t.datepicker._updateDatepicker(i),
              (r = t.datepicker._checkOffset(i, r, a)),
              i.dpDiv.css({
                position:
                  t.datepicker._inDialog && t.blockUI
                    ? "static"
                    : a
                    ? "fixed"
                    : "absolute",
                display: "none",
                left: r.left + "px",
                top: r.top + "px",
              }),
              i.inline ||
                ((h = t.datepicker._get(i, "showAnim")),
                (l = t.datepicker._get(i, "duration")),
                i.dpDiv.zIndex(t(e).zIndex() + 1),
                (t.datepicker._datepickerShowing = !0),
                t.effects && t.effects.effect[h]
                  ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l)
                  : i.dpDiv[h || "show"](h ? l : null),
                t.datepicker._shouldFocusInput(i) && i.input.focus(),
                (t.datepicker._curInst = i)));
        }
      },
      _updateDatepicker: function (e) {
        (this.maxRows = 4),
          (o = e),
          e.dpDiv.empty().append(this._generateHTML(e)),
          this._attachHandlers(e),
          e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
        var i,
          s = this._getNumberOfMonths(e),
          n = s[1];
        e.dpDiv
          .removeClass(
            "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4"
          )
          .width(""),
          n > 1 &&
            e.dpDiv
              .addClass("ui-datepicker-multi-" + n)
              .css("width", 17 * n + "em"),
          e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"](
            "ui-datepicker-multi"
          ),
          e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"](
            "ui-datepicker-rtl"
          ),
          e === t.datepicker._curInst &&
            t.datepicker._datepickerShowing &&
            t.datepicker._shouldFocusInput(e) &&
            e.input.focus(),
          e.yearshtml &&
            ((i = e.yearshtml),
            setTimeout(function () {
              i === e.yearshtml &&
                e.yearshtml &&
                e.dpDiv
                  .find("select.ui-datepicker-year:first")
                  .replaceWith(e.yearshtml),
                (i = e.yearshtml = null);
            }, 0));
      },
      _shouldFocusInput: function (t) {
        return (
          t.input &&
          t.input.is(":visible") &&
          !t.input.is(":disabled") &&
          !t.input.is(":focus")
        );
      },
      _checkOffset: function (e, i, s) {
        var n = e.dpDiv.outerWidth(),
          o = e.dpDiv.outerHeight(),
          a = e.input ? e.input.outerWidth() : 0,
          r = e.input ? e.input.outerHeight() : 0,
          h =
            document.documentElement.clientWidth +
            (s ? 0 : t(document).scrollLeft()),
          l =
            document.documentElement.clientHeight +
            (s ? 0 : t(document).scrollTop());
        return (
          (i.left -= this._get(e, "isRTL") ? n - a : 0),
          (i.left -=
            s && i.left === e.input.offset().left
              ? t(document).scrollLeft()
              : 0),
          (i.top -=
            s && i.top === e.input.offset().top + r
              ? t(document).scrollTop()
              : 0),
          (i.left -= Math.min(
            i.left,
            i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0
          )),
          (i.top -= Math.min(
            i.top,
            i.top + o > l && l > o ? Math.abs(o + r) : 0
          )),
          i
        );
      },
      _findPos: function (e) {
        for (
          var i, s = this._getInst(e), n = this._get(s, "isRTL");
          e &&
          ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));

        )
          e = e[n ? "previousSibling" : "nextSibling"];
        return (i = t(e).offset()), [i.left, i.top];
      },
      _hideDatepicker: function (e) {
        var i,
          s,
          n,
          o,
          r = this._curInst;
        !r ||
          (e && r !== t.data(e, a)) ||
          (this._datepickerShowing &&
            ((i = this._get(r, "showAnim")),
            (s = this._get(r, "duration")),
            (n = function () {
              t.datepicker._tidyDialog(r);
            }),
            t.effects && (t.effects.effect[i] || t.effects[i])
              ? r.dpDiv.hide(i, t.datepicker._get(r, "showOptions"), s, n)
              : r.dpDiv[
                  "slideDown" === i
                    ? "slideUp"
                    : "fadeIn" === i
                    ? "fadeOut"
                    : "hide"
                ](i ? s : null, n),
            i || n(),
            (this._datepickerShowing = !1),
            (o = this._get(r, "onClose")) &&
              o.apply(r.input ? r.input[0] : null, [
                r.input ? r.input.val() : "",
                r,
              ]),
            (this._lastInput = null),
            this._inDialog &&
              (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px",
              }),
              t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))),
            (this._inDialog = !1)));
      },
      _tidyDialog: function (t) {
        t.dpDiv
          .removeClass(this._dialogClass)
          .unbind(".ui-datepicker-calendar");
      },
      _checkExternalClick: function (e) {
        if (t.datepicker._curInst) {
          var i = t(e.target),
            s = t.datepicker._getInst(i[0]);
          ((i[0].id === t.datepicker._mainDivId ||
            0 !== i.parents("#" + t.datepicker._mainDivId).length ||
            i.hasClass(t.datepicker.markerClassName) ||
            i.closest("." + t.datepicker._triggerClass).length ||
            !t.datepicker._datepickerShowing ||
            (t.datepicker._inDialog && t.blockUI)) &&
            (!i.hasClass(t.datepicker.markerClassName) ||
              t.datepicker._curInst === s)) ||
            t.datepicker._hideDatepicker();
        }
      },
      _adjustDate: function (e, i, s) {
        var n = t(e),
          o = this._getInst(n[0]);
        this._isDisabledDatepicker(n[0]) ||
          (this._adjustInstDate(
            o,
            i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0),
            s
          ),
          this._updateDatepicker(o));
      },
      _gotoToday: function (e) {
        var i,
          s = t(e),
          n = this._getInst(s[0]);
        this._get(n, "gotoCurrent") && n.currentDay
          ? ((n.selectedDay = n.currentDay),
            (n.drawMonth = n.selectedMonth = n.currentMonth),
            (n.drawYear = n.selectedYear = n.currentYear))
          : ((i = new Date()),
            (n.selectedDay = i.getDate()),
            (n.drawMonth = n.selectedMonth = i.getMonth()),
            (n.drawYear = n.selectedYear = i.getFullYear())),
          this._notifyChange(n),
          this._adjustDate(s);
      },
      _selectMonthYear: function (e, i, s) {
        var n = t(e),
          o = this._getInst(n[0]);
        (o["selected" + ("M" === s ? "Month" : "Year")] = o[
          "draw" + ("M" === s ? "Month" : "Year")
        ] =
          parseInt(i.options[i.selectedIndex].value, 10)),
          this._notifyChange(o),
          this._adjustDate(n);
      },
      _selectDay: function (e, i, s, n) {
        var o,
          a = t(e);
        t(n).hasClass(this._unselectableClass) ||
          this._isDisabledDatepicker(a[0]) ||
          (((o = this._getInst(a[0])).selectedDay = o.currentDay =
            t("a", n).html()),
          (o.selectedMonth = o.currentMonth = i),
          (o.selectedYear = o.currentYear = s),
          this._selectDate(
            e,
            this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)
          ));
      },
      _clearDate: function (e) {
        var i = t(e);
        this._selectDate(i, "");
      },
      _selectDate: function (e, i) {
        var s,
          n = t(e),
          o = this._getInst(n[0]);
        (i = null != i ? i : this._formatDate(o)),
          o.input && o.input.val(i),
          this._updateAlternate(o),
          (s = this._get(o, "onSelect"))
            ? s.apply(o.input ? o.input[0] : null, [i, o])
            : o.input && o.input.trigger("change"),
          o.inline
            ? this._updateDatepicker(o)
            : (this._hideDatepicker(),
              (this._lastInput = o.input[0]),
              "object" != typeof o.input[0] && o.input.focus(),
              (this._lastInput = null));
      },
      _updateAlternate: function (e) {
        var i,
          s,
          n,
          o = this._get(e, "altField");
        o &&
          ((i = this._get(e, "altFormat") || this._get(e, "dateFormat")),
          (s = this._getDate(e)),
          (n = this.formatDate(i, s, this._getFormatConfig(e))),
          t(o).each(function () {
            t(this).val(n);
          }));
      },
      noWeekends: function (t) {
        var e = t.getDay();
        return [e > 0 && e < 6, ""];
      },
      iso8601Week: function (t) {
        var e,
          i = new Date(t.getTime());
        return (
          i.setDate(i.getDate() + 4 - (i.getDay() || 7)),
          (e = i.getTime()),
          i.setMonth(0),
          i.setDate(1),
          Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        );
      },
      parseDate: function (e, i, s) {
        if (null == e || null == i) throw "Invalid arguments";
        if ("" === (i = "object" == typeof i ? i.toString() : i + ""))
          return null;
        var n,
          o,
          a,
          r,
          h = 0,
          l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          c =
            "string" != typeof l
              ? l
              : (new Date().getFullYear() % 100) + parseInt(l, 10),
          u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
          d = (s ? s.dayNames : null) || this._defaults.dayNames,
          p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
          f = (s ? s.monthNames : null) || this._defaults.monthNames,
          g = -1,
          m = -1,
          v = -1,
          _ = -1,
          b = !1,
          y = function (t) {
            var i = n + 1 < e.length && e.charAt(n + 1) === t;
            return i && n++, i;
          },
          w = function (t) {
            var e = y(t),
              s =
                "@" === t
                  ? 14
                  : "!" === t
                  ? 20
                  : "y" === t && e
                  ? 4
                  : "o" === t
                  ? 3
                  : 2,
              n = new RegExp("^\\d{1," + s + "}"),
              o = i.substring(h).match(n);
            if (!o) throw "Missing number at position " + h;
            return (h += o[0].length), parseInt(o[0], 10);
          },
          k = function (e, s, n) {
            var o = -1,
              a = t
                .map(y(e) ? n : s, function (t, e) {
                  return [[e, t]];
                })
                .sort(function (t, e) {
                  return -(t[1].length - e[1].length);
                });
            if (
              (t.each(a, function (t, e) {
                var s = e[1];
                if (i.substr(h, s.length).toLowerCase() === s.toLowerCase())
                  return (o = e[0]), (h += s.length), !1;
              }),
              -1 !== o)
            )
              return o + 1;
            throw "Unknown name at position " + h;
          },
          x = function () {
            if (i.charAt(h) !== e.charAt(n))
              throw "Unexpected literal at position " + h;
            h++;
          };
        for (n = 0; n < e.length; n++)
          if (b) "'" !== e.charAt(n) || y("'") ? x() : (b = !1);
          else
            switch (e.charAt(n)) {
              case "d":
                v = w("d");
                break;
              case "D":
                k("D", u, d);
                break;
              case "o":
                _ = w("o");
                break;
              case "m":
                m = w("m");
                break;
              case "M":
                m = k("M", p, f);
                break;
              case "y":
                g = w("y");
                break;
              case "@":
                (g = (r = new Date(w("@"))).getFullYear()),
                  (m = r.getMonth() + 1),
                  (v = r.getDate());
                break;
              case "!":
                (g = (r = new Date(
                  (w("!") - this._ticksTo1970) / 1e4
                )).getFullYear()),
                  (m = r.getMonth() + 1),
                  (v = r.getDate());
                break;
              case "'":
                y("'") ? x() : (b = !0);
                break;
              default:
                x();
            }
        if (h < i.length && ((a = i.substr(h)), !/^\s+/.test(a)))
          throw "Extra/unparsed characters found in date: " + a;
        if (
          (-1 === g
            ? (g = new Date().getFullYear())
            : g < 100 &&
              (g +=
                new Date().getFullYear() -
                (new Date().getFullYear() % 100) +
                (g <= c ? 0 : -100)),
          _ > -1)
        )
          for (m = 1, v = _; ; ) {
            if (((o = this._getDaysInMonth(g, m - 1)), v <= o)) break;
            m++, (v -= o);
          }
        if (
          (r = this._daylightSavingAdjust(
            new Date(g, m - 1, v)
          )).getFullYear() !== g ||
          r.getMonth() + 1 !== m ||
          r.getDate() !== v
        )
          throw "Invalid date";
        return r;
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970:
        24 *
        (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) *
        60 *
        60 *
        1e7,
      formatDate: function (t, e, i) {
        if (!e) return "";
        var s,
          n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          o = (i ? i.dayNames : null) || this._defaults.dayNames,
          a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          r = (i ? i.monthNames : null) || this._defaults.monthNames,
          h = function (e) {
            var i = s + 1 < t.length && t.charAt(s + 1) === e;
            return i && s++, i;
          },
          l = function (t, e, i) {
            var s = "" + e;
            if (h(t)) for (; s.length < i; ) s = "0" + s;
            return s;
          },
          c = function (t, e, i, s) {
            return h(t) ? s[e] : i[e];
          },
          u = "",
          d = !1;
        if (e)
          for (s = 0; s < t.length; s++)
            if (d)
              "'" !== t.charAt(s) || h("'") ? (u += t.charAt(s)) : (d = !1);
            else
              switch (t.charAt(s)) {
                case "d":
                  u += l("d", e.getDate(), 2);
                  break;
                case "D":
                  u += c("D", e.getDay(), n, o);
                  break;
                case "o":
                  u += l(
                    "o",
                    Math.round(
                      (new Date(
                        e.getFullYear(),
                        e.getMonth(),
                        e.getDate()
                      ).getTime() -
                        new Date(e.getFullYear(), 0, 0).getTime()) /
                        864e5
                    ),
                    3
                  );
                  break;
                case "m":
                  u += l("m", e.getMonth() + 1, 2);
                  break;
                case "M":
                  u += c("M", e.getMonth(), a, r);
                  break;
                case "y":
                  u += h("y")
                    ? e.getFullYear()
                    : (e.getYear() % 100 < 10 ? "0" : "") + (e.getYear() % 100);
                  break;
                case "@":
                  u += e.getTime();
                  break;
                case "!":
                  u += 1e4 * e.getTime() + this._ticksTo1970;
                  break;
                case "'":
                  h("'") ? (u += "'") : (d = !0);
                  break;
                default:
                  u += t.charAt(s);
              }
        return u;
      },
      _possibleChars: function (t) {
        var e,
          i = "",
          s = !1,
          n = function (i) {
            var s = e + 1 < t.length && t.charAt(e + 1) === i;
            return s && e++, s;
          };
        for (e = 0; e < t.length; e++)
          if (s) "'" !== t.charAt(e) || n("'") ? (i += t.charAt(e)) : (s = !1);
          else
            switch (t.charAt(e)) {
              case "d":
              case "m":
              case "y":
              case "@":
                i += "0123456789";
                break;
              case "D":
              case "M":
                return null;
              case "'":
                n("'") ? (i += "'") : (s = !0);
                break;
              default:
                i += t.charAt(e);
            }
        return i;
      },
      _get: function (t, e) {
        return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
      },
      _setDateFromField: function (t, e) {
        if (t.input.val() !== t.lastVal) {
          var i = this._get(t, "dateFormat"),
            s = (t.lastVal = t.input ? t.input.val() : null),
            n = this._getDefaultDate(t),
            o = n,
            a = this._getFormatConfig(t);
          try {
            o = this.parseDate(i, s, a) || n;
          } catch (t) {
            s = e ? "" : s;
          }
          (t.selectedDay = o.getDate()),
            (t.drawMonth = t.selectedMonth = o.getMonth()),
            (t.drawYear = t.selectedYear = o.getFullYear()),
            (t.currentDay = s ? o.getDate() : 0),
            (t.currentMonth = s ? o.getMonth() : 0),
            (t.currentYear = s ? o.getFullYear() : 0),
            this._adjustInstDate(t);
        }
      },
      _getDefaultDate: function (t) {
        return this._restrictMinMax(
          t,
          this._determineDate(t, this._get(t, "defaultDate"), new Date())
        );
      },
      _determineDate: function (e, i, s) {
        var n =
          null == i || "" === i
            ? s
            : "string" == typeof i
            ? (function (i) {
                try {
                  return t.datepicker.parseDate(
                    t.datepicker._get(e, "dateFormat"),
                    i,
                    t.datepicker._getFormatConfig(e)
                  );
                } catch (t) {}
                for (
                  var s =
                      (i.toLowerCase().match(/^c/)
                        ? t.datepicker._getDate(e)
                        : null) || new Date(),
                    n = s.getFullYear(),
                    o = s.getMonth(),
                    a = s.getDate(),
                    r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
                    h = r.exec(i);
                  h;

                ) {
                  switch (h[2] || "d") {
                    case "d":
                    case "D":
                      a += parseInt(h[1], 10);
                      break;
                    case "w":
                    case "W":
                      a += 7 * parseInt(h[1], 10);
                      break;
                    case "m":
                    case "M":
                      (o += parseInt(h[1], 10)),
                        (a = Math.min(a, t.datepicker._getDaysInMonth(n, o)));
                      break;
                    case "y":
                    case "Y":
                      (n += parseInt(h[1], 10)),
                        (a = Math.min(a, t.datepicker._getDaysInMonth(n, o)));
                  }
                  h = r.exec(i);
                }
                return new Date(n, o, a);
              })(i)
            : "number" == typeof i
            ? isNaN(i)
              ? s
              : (function (t) {
                  var e = new Date();
                  return e.setDate(e.getDate() + t), e;
                })(i)
            : new Date(i.getTime());
        return (
          (n = n && "Invalid Date" === n.toString() ? s : n) &&
            (n.setHours(0),
            n.setMinutes(0),
            n.setSeconds(0),
            n.setMilliseconds(0)),
          this._daylightSavingAdjust(n)
        );
      },
      _daylightSavingAdjust: function (t) {
        return t
          ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t)
          : null;
      },
      _setDate: function (t, e, i) {
        var s = !e,
          n = t.selectedMonth,
          o = t.selectedYear,
          a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));
        (t.selectedDay = t.currentDay = a.getDate()),
          (t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth()),
          (t.drawYear = t.selectedYear = t.currentYear = a.getFullYear()),
          (n === t.selectedMonth && o === t.selectedYear) ||
            i ||
            this._notifyChange(t),
          this._adjustInstDate(t),
          t.input && t.input.val(s ? "" : this._formatDate(t));
      },
      _getDate: function (t) {
        return !t.currentYear || (t.input && "" === t.input.val())
          ? null
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay)
            );
      },
      _attachHandlers: function (e) {
        var i = this._get(e, "stepMonths"),
          s = "#" + e.id.replace(/\\\\/g, "\\");
        e.dpDiv.find("[data-handler]").map(function () {
          var e = {
            prev: function () {
              t.datepicker._adjustDate(s, -i, "M");
            },
            next: function () {
              t.datepicker._adjustDate(s, +i, "M");
            },
            hide: function () {
              t.datepicker._hideDatepicker();
            },
            today: function () {
              t.datepicker._gotoToday(s);
            },
            selectDay: function () {
              return (
                t.datepicker._selectDay(
                  s,
                  +this.getAttribute("data-month"),
                  +this.getAttribute("data-year"),
                  this
                ),
                !1
              );
            },
            selectMonth: function () {
              return t.datepicker._selectMonthYear(s, this, "M"), !1;
            },
            selectYear: function () {
              return t.datepicker._selectMonthYear(s, this, "Y"), !1;
            },
          };
          t(this).bind(
            this.getAttribute("data-event"),
            e[this.getAttribute("data-handler")]
          );
        });
      },
      _generateHTML: function (t) {
        var e,
          i,
          s,
          n,
          o,
          a,
          r,
          h,
          l,
          c,
          u,
          d,
          p,
          f,
          g,
          m,
          v,
          _,
          b,
          y,
          w,
          k,
          x,
          D,
          C,
          I,
          P,
          T,
          M,
          S,
          z,
          A,
          H,
          W,
          E,
          N,
          O,
          F,
          R,
          L = new Date(),
          j = this._daylightSavingAdjust(
            new Date(L.getFullYear(), L.getMonth(), L.getDate())
          ),
          Y = this._get(t, "isRTL"),
          B = this._get(t, "showButtonPanel"),
          K = this._get(t, "hideIfNoPrevNext"),
          U = this._get(t, "navigationAsDateFormat"),
          q = this._getNumberOfMonths(t),
          V = this._get(t, "showCurrentAtPos"),
          Q = this._get(t, "stepMonths"),
          X = 1 !== q[0] || 1 !== q[1],
          $ = this._daylightSavingAdjust(
            t.currentDay
              ? new Date(t.currentYear, t.currentMonth, t.currentDay)
              : new Date(9999, 9, 9)
          ),
          G = this._getMinMaxDate(t, "min"),
          J = this._getMinMaxDate(t, "max"),
          Z = t.drawMonth - V,
          tt = t.drawYear;
        if ((Z < 0 && ((Z += 12), tt--), J))
          for (
            e = this._daylightSavingAdjust(
              new Date(
                J.getFullYear(),
                J.getMonth() - q[0] * q[1] + 1,
                J.getDate()
              )
            ),
              e = G && e < G ? G : e;
            this._daylightSavingAdjust(new Date(tt, Z, 1)) > e;

          )
            --Z < 0 && ((Z = 11), tt--);
        for (
          t.drawMonth = Z,
            t.drawYear = tt,
            i = this._get(t, "prevText"),
            i = U
              ? this.formatDate(
                  i,
                  this._daylightSavingAdjust(new Date(tt, Z - Q, 1)),
                  this._getFormatConfig(t)
                )
              : i,
            s = this._canAdjustMonth(t, -1, tt, Z)
              ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" +
                i +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Y ? "e" : "w") +
                "'>" +
                i +
                "</span></a>"
              : K
              ? ""
              : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" +
                i +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Y ? "e" : "w") +
                "'>" +
                i +
                "</span></a>",
            n = this._get(t, "nextText"),
            n = U
              ? this.formatDate(
                  n,
                  this._daylightSavingAdjust(new Date(tt, Z + Q, 1)),
                  this._getFormatConfig(t)
                )
              : n,
            o = this._canAdjustMonth(t, 1, tt, Z)
              ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" +
                n +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Y ? "w" : "e") +
                "'>" +
                n +
                "</span></a>"
              : K
              ? ""
              : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" +
                n +
                "'><span class='ui-icon ui-icon-circle-triangle-" +
                (Y ? "w" : "e") +
                "'>" +
                n +
                "</span></a>",
            a = this._get(t, "currentText"),
            r = this._get(t, "gotoCurrent") && t.currentDay ? $ : j,
            a = U ? this.formatDate(a, r, this._getFormatConfig(t)) : a,
            h = t.inline
              ? ""
              : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
                this._get(t, "closeText") +
                "</button>",
            l = B
              ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +
                (Y ? h : "") +
                (this._isInRange(t, r)
                  ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" +
                    a +
                    "</button>"
                  : "") +
                (Y ? "" : h) +
                "</div>"
              : "",
            c = parseInt(this._get(t, "firstDay"), 10),
            c = isNaN(c) ? 0 : c,
            u = this._get(t, "showWeek"),
            d = this._get(t, "dayNames"),
            p = this._get(t, "dayNamesMin"),
            f = this._get(t, "monthNames"),
            g = this._get(t, "monthNamesShort"),
            m = this._get(t, "beforeShowDay"),
            v = this._get(t, "showOtherMonths"),
            _ = this._get(t, "selectOtherMonths"),
            b = this._getDefaultDate(t),
            y = "",
            k = 0;
          k < q[0];
          k++
        ) {
          for (x = "", this.maxRows = 4, D = 0; D < q[1]; D++) {
            if (
              ((C = this._daylightSavingAdjust(new Date(tt, Z, t.selectedDay))),
              (I = " ui-corner-all"),
              (P = ""),
              X)
            ) {
              if (((P += "<div class='ui-datepicker-group"), q[1] > 1))
                switch (D) {
                  case 0:
                    (P += " ui-datepicker-group-first"),
                      (I = " ui-corner-" + (Y ? "right" : "left"));
                    break;
                  case q[1] - 1:
                    (P += " ui-datepicker-group-last"),
                      (I = " ui-corner-" + (Y ? "left" : "right"));
                    break;
                  default:
                    (P += " ui-datepicker-group-middle"), (I = "");
                }
              P += "'>";
            }
            for (
              P +=
                "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" +
                I +
                "'>" +
                (/all|left/.test(I) && 0 === k ? (Y ? o : s) : "") +
                (/all|right/.test(I) && 0 === k ? (Y ? s : o) : "") +
                this._generateMonthYearHeader(
                  t,
                  Z,
                  tt,
                  G,
                  J,
                  k > 0 || D > 0,
                  f,
                  g
                ) +
                "</div><table class='ui-datepicker-calendar'><thead><tr>",
                T = u
                  ? "<th class='ui-datepicker-week-col'>" +
                    this._get(t, "weekHeader") +
                    "</th>"
                  : "",
                w = 0;
              w < 7;
              w++
            )
              (M = (w + c) % 7),
                (T +=
                  "<th" +
                  ((w + c + 6) % 7 >= 5
                    ? " class='ui-datepicker-week-end'"
                    : "") +
                  "><span title='" +
                  d[M] +
                  "'>" +
                  p[M] +
                  "</span></th>");
            for (
              P += T + "</tr></thead><tbody>",
                S = this._getDaysInMonth(tt, Z),
                tt === t.selectedYear &&
                  Z === t.selectedMonth &&
                  (t.selectedDay = Math.min(t.selectedDay, S)),
                z = (this._getFirstDayOfMonth(tt, Z) - c + 7) % 7,
                A = Math.ceil((z + S) / 7),
                H = X && this.maxRows > A ? this.maxRows : A,
                this.maxRows = H,
                W = this._daylightSavingAdjust(new Date(tt, Z, 1 - z)),
                E = 0;
              E < H;
              E++
            ) {
              for (
                P += "<tr>",
                  N = u
                    ? "<td class='ui-datepicker-week-col'>" +
                      this._get(t, "calculateWeek")(W) +
                      "</td>"
                    : "",
                  w = 0;
                w < 7;
                w++
              )
                (O = m ? m.apply(t.input ? t.input[0] : null, [W]) : [!0, ""]),
                  (R =
                    ((F = W.getMonth() !== Z) && !_) ||
                    !O[0] ||
                    (G && W < G) ||
                    (J && W > J)),
                  (N +=
                    "<td class='" +
                    ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") +
                    (F ? " ui-datepicker-other-month" : "") +
                    ((W.getTime() === C.getTime() &&
                      Z === t.selectedMonth &&
                      t._keyEvent) ||
                    (b.getTime() === W.getTime() && b.getTime() === C.getTime())
                      ? " " + this._dayOverClass
                      : "") +
                    (R
                      ? " " + this._unselectableClass + " ui-state-disabled"
                      : "") +
                    (F && !v
                      ? ""
                      : " " +
                        O[1] +
                        (W.getTime() === $.getTime()
                          ? " " + this._currentClass
                          : "") +
                        (W.getTime() === j.getTime()
                          ? " ui-datepicker-today"
                          : "")) +
                    "'" +
                    ((F && !v) || !O[2]
                      ? ""
                      : " title='" + O[2].replace(/'/g, "&#39;") + "'") +
                    (R
                      ? ""
                      : " data-handler='selectDay' data-event='click' data-month='" +
                        W.getMonth() +
                        "' data-year='" +
                        W.getFullYear() +
                        "'") +
                    ">" +
                    (F && !v
                      ? "&#xa0;"
                      : R
                      ? "<span class='ui-state-default'>" +
                        W.getDate() +
                        "</span>"
                      : "<a class='ui-state-default" +
                        (W.getTime() === j.getTime()
                          ? " ui-state-highlight"
                          : "") +
                        (W.getTime() === $.getTime()
                          ? " ui-state-active"
                          : "") +
                        (F ? " ui-priority-secondary" : "") +
                        "' href='#'>" +
                        W.getDate() +
                        "</a>") +
                    "</td>"),
                  W.setDate(W.getDate() + 1),
                  (W = this._daylightSavingAdjust(W));
              P += N + "</tr>";
            }
            ++Z > 11 && ((Z = 0), tt++),
              (x += P +=
                "</tbody></table>" +
                (X
                  ? "</div>" +
                    (q[0] > 0 && D === q[1] - 1
                      ? "<div class='ui-datepicker-row-break'></div>"
                      : "")
                  : ""));
          }
          y += x;
        }
        return (y += l), (t._keyEvent = !1), y;
      },
      _generateMonthYearHeader: function (t, e, i, s, n, o, a, r) {
        var h,
          l,
          c,
          u,
          d,
          p,
          f,
          g,
          m = this._get(t, "changeMonth"),
          v = this._get(t, "changeYear"),
          _ = this._get(t, "showMonthAfterYear"),
          b = "<div class='ui-datepicker-title'>",
          y = "";
        if (o || !m)
          y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
        else {
          for (
            h = s && s.getFullYear() === i,
              l = n && n.getFullYear() === i,
              y +=
                "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",
              c = 0;
            c < 12;
            c++
          )
            (!h || c >= s.getMonth()) &&
              (!l || c <= n.getMonth()) &&
              (y +=
                "<option value='" +
                c +
                "'" +
                (c === e ? " selected='selected'" : "") +
                ">" +
                r[c] +
                "</option>");
          y += "</select>";
        }
        if ((_ || (b += y + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml))
          if (((t.yearshtml = ""), o || !v))
            b += "<span class='ui-datepicker-year'>" + i + "</span>";
          else {
            for (
              u = this._get(t, "yearRange").split(":"),
                d = new Date().getFullYear(),
                f = (p = function (t) {
                  var e = t.match(/c[+\-].*/)
                    ? i + parseInt(t.substring(1), 10)
                    : t.match(/[+\-].*/)
                    ? d + parseInt(t, 10)
                    : parseInt(t, 10);
                  return isNaN(e) ? d : e;
                })(u[0]),
                g = Math.max(f, p(u[1] || "")),
                f = s ? Math.max(f, s.getFullYear()) : f,
                g = n ? Math.min(g, n.getFullYear()) : g,
                t.yearshtml +=
                  "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
              f <= g;
              f++
            )
              t.yearshtml +=
                "<option value='" +
                f +
                "'" +
                (f === i ? " selected='selected'" : "") +
                ">" +
                f +
                "</option>";
            (t.yearshtml += "</select>"),
              (b += t.yearshtml),
              (t.yearshtml = null);
          }
        return (
          (b += this._get(t, "yearSuffix")),
          _ && (b += (!o && m && v ? "" : "&#xa0;") + y),
          (b += "</div>")
        );
      },
      _adjustInstDate: function (t, e, i) {
        var s = t.drawYear + ("Y" === i ? e : 0),
          n = t.drawMonth + ("M" === i ? e : 0),
          o =
            Math.min(t.selectedDay, this._getDaysInMonth(s, n)) +
            ("D" === i ? e : 0),
          a = this._restrictMinMax(
            t,
            this._daylightSavingAdjust(new Date(s, n, o))
          );
        (t.selectedDay = a.getDate()),
          (t.drawMonth = t.selectedMonth = a.getMonth()),
          (t.drawYear = t.selectedYear = a.getFullYear()),
          ("M" !== i && "Y" !== i) || this._notifyChange(t);
      },
      _restrictMinMax: function (t, e) {
        var i = this._getMinMaxDate(t, "min"),
          s = this._getMinMaxDate(t, "max"),
          n = i && e < i ? i : e;
        return s && n > s ? s : n;
      },
      _notifyChange: function (t) {
        var e = this._get(t, "onChangeMonthYear");
        e &&
          e.apply(t.input ? t.input[0] : null, [
            t.selectedYear,
            t.selectedMonth + 1,
            t,
          ]);
      },
      _getNumberOfMonths: function (t) {
        var e = this._get(t, "numberOfMonths");
        return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
      },
      _getMinMaxDate: function (t, e) {
        return this._determineDate(t, this._get(t, e + "Date"), null);
      },
      _getDaysInMonth: function (t, e) {
        return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
      },
      _getFirstDayOfMonth: function (t, e) {
        return new Date(t, e, 1).getDay();
      },
      _canAdjustMonth: function (t, e, i, s) {
        var n = this._getNumberOfMonths(t),
          o = this._daylightSavingAdjust(
            new Date(i, s + (e < 0 ? e : n[0] * n[1]), 1)
          );
        return (
          e < 0 &&
            o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())),
          this._isInRange(t, o)
        );
      },
      _isInRange: function (t, e) {
        var i,
          s,
          n = this._getMinMaxDate(t, "min"),
          o = this._getMinMaxDate(t, "max"),
          a = null,
          r = null,
          h = this._get(t, "yearRange");
        return (
          h &&
            ((i = h.split(":")),
            (s = new Date().getFullYear()),
            (a = parseInt(i[0], 10)),
            (r = parseInt(i[1], 10)),
            i[0].match(/[+\-].*/) && (a += s),
            i[1].match(/[+\-].*/) && (r += s)),
          (!n || e.getTime() >= n.getTime()) &&
            (!o || e.getTime() <= o.getTime()) &&
            (!a || e.getFullYear() >= a) &&
            (!r || e.getFullYear() <= r)
        );
      },
      _getFormatConfig: function (t) {
        var e = this._get(t, "shortYearCutoff");
        return (
          (e =
            "string" != typeof e
              ? e
              : (new Date().getFullYear() % 100) + parseInt(e, 10)),
          {
            shortYearCutoff: e,
            dayNamesShort: this._get(t, "dayNamesShort"),
            dayNames: this._get(t, "dayNames"),
            monthNamesShort: this._get(t, "monthNamesShort"),
            monthNames: this._get(t, "monthNames"),
          }
        );
      },
      _formatDate: function (t, e, i, s) {
        e ||
          ((t.currentDay = t.selectedDay),
          (t.currentMonth = t.selectedMonth),
          (t.currentYear = t.selectedYear));
        var n = e
          ? "object" == typeof e
            ? e
            : this._daylightSavingAdjust(new Date(s, i, e))
          : this._daylightSavingAdjust(
              new Date(t.currentYear, t.currentMonth, t.currentDay)
            );
        return this.formatDate(
          this._get(t, "dateFormat"),
          n,
          this._getFormatConfig(t)
        );
      },
    }),
      (t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized ||
          (t(document).mousedown(t.datepicker._checkExternalClick),
          (t.datepicker.initialized = !0)),
          0 === t("#" + t.datepicker._mainDivId).length &&
            t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e ||
          ("isDisabled" !== e && "getDate" !== e && "widget" !== e)
          ? "option" === e &&
            2 === arguments.length &&
            "string" == typeof arguments[1]
            ? t.datepicker["_" + e + "Datepicker"].apply(
                t.datepicker,
                [this[0]].concat(i)
              )
            : this.each(function () {
                "string" == typeof e
                  ? t.datepicker["_" + e + "Datepicker"].apply(
                      t.datepicker,
                      [this].concat(i)
                    )
                  : t.datepicker._attachDatepicker(this, e);
              })
          : t.datepicker["_" + e + "Datepicker"].apply(
              t.datepicker,
              [this[0]].concat(i)
            );
      }),
      (t.datepicker = new i()),
      (t.datepicker.initialized = !1),
      (t.datepicker.uuid = new Date().getTime()),
      (t.datepicker.version = "1.10.3");
  })(jQuery),
  (function (t, e) {
    var i = {
        buttons: !0,
        height: !0,
        maxHeight: !0,
        maxWidth: !0,
        minHeight: !0,
        minWidth: !0,
        width: !0,
      },
      s = { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 };
    t.widget("ui.dialog", {
      version: "1.10.3",
      options: {
        appendTo: "body",
        autoOpen: !0,
        buttons: [],
        closeOnEscape: !0,
        closeText: "close",
        dialogClass: "",
        draggable: !0,
        hide: null,
        height: "auto",
        maxHeight: null,
        maxWidth: null,
        minHeight: 150,
        minWidth: 150,
        modal: !1,
        position: {
          my: "center",
          at: "center",
          of: window,
          collision: "fit",
          using: function (e) {
            var i = t(this).css(e).offset().top;
            i < 0 && t(this).css("top", e.top - i);
          },
        },
        resizable: !0,
        show: null,
        title: null,
        width: 300,
        beforeClose: null,
        close: null,
        drag: null,
        dragStart: null,
        dragStop: null,
        focus: null,
        open: null,
        resize: null,
        resizeStart: null,
        resizeStop: null,
      },
      _create: function () {
        (this.originalCss = {
          display: this.element[0].style.display,
          width: this.element[0].style.width,
          minHeight: this.element[0].style.minHeight,
          maxHeight: this.element[0].style.maxHeight,
          height: this.element[0].style.height,
        }),
          (this.originalPosition = {
            parent: this.element.parent(),
            index: this.element.parent().children().index(this.element),
          }),
          (this.originalTitle = this.element.attr("title")),
          (this.options.title = this.options.title || this.originalTitle),
          this._createWrapper(),
          this.element
            .show()
            .removeAttr("title")
            .addClass("ui-dialog-content ui-widget-content")
            .appendTo(this.uiDialog),
          this._createTitlebar(),
          this._createButtonPane(),
          this.options.draggable && t.fn.draggable && this._makeDraggable(),
          this.options.resizable && t.fn.resizable && this._makeResizable(),
          (this._isOpen = !1);
      },
      _init: function () {
        this.options.autoOpen && this.open();
      },
      _appendTo: function () {
        var e = this.options.appendTo;
        return e && (e.jquery || e.nodeType)
          ? t(e)
          : this.document.find(e || "body").eq(0);
      },
      _destroy: function () {
        var t,
          e = this.originalPosition;
        this._destroyOverlay(),
          this.element
            .removeUniqueId()
            .removeClass("ui-dialog-content ui-widget-content")
            .css(this.originalCss)
            .detach(),
          this.uiDialog.stop(!0, !0).remove(),
          this.originalTitle && this.element.attr("title", this.originalTitle),
          (t = e.parent.children().eq(e.index)).length &&
          t[0] !== this.element[0]
            ? t.before(this.element)
            : e.parent.append(this.element);
      },
      widget: function () {
        return this.uiDialog;
      },
      disable: t.noop,
      enable: t.noop,
      close: function (e) {
        var i = this;
        this._isOpen &&
          !1 !== this._trigger("beforeClose", e) &&
          ((this._isOpen = !1),
          this._destroyOverlay(),
          this.opener.filter(":focusable").focus().length ||
            t(this.document[0].activeElement).blur(),
          this._hide(this.uiDialog, this.options.hide, function () {
            i._trigger("close", e);
          }));
      },
      isOpen: function () {
        return this._isOpen;
      },
      moveToTop: function () {
        this._moveToTop();
      },
      _moveToTop: function (t, e) {
        var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog)
          .length;
        return i && !e && this._trigger("focus", t), i;
      },
      open: function () {
        var e = this;
        this._isOpen
          ? this._moveToTop() && this._focusTabbable()
          : ((this._isOpen = !0),
            (this.opener = t(this.document[0].activeElement)),
            this._size(),
            this._position(),
            this._createOverlay(),
            this._moveToTop(null, !0),
            this._show(this.uiDialog, this.options.show, function () {
              e._focusTabbable(), e._trigger("focus");
            }),
            this._trigger("open"));
      },
      _focusTabbable: function () {
        var t = this.element.find("[autofocus]");
        t.length || (t = this.element.find(":tabbable")),
          t.length || (t = this.uiDialogButtonPane.find(":tabbable")),
          t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")),
          t.length || (t = this.uiDialog),
          t.eq(0).focus();
      },
      _keepFocus: function (e) {
        function i() {
          var e = this.document[0].activeElement;
          this.uiDialog[0] === e ||
            t.contains(this.uiDialog[0], e) ||
            this._focusTabbable();
        }
        e.preventDefault(), i.call(this), this._delay(i);
      },
      _createWrapper: function () {
        (this.uiDialog = t("<div>")
          .addClass(
            "ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " +
              this.options.dialogClass
          )
          .hide()
          .attr({ tabIndex: -1, role: "dialog" })
          .appendTo(this._appendTo())),
          this._on(this.uiDialog, {
            keydown: function (e) {
              if (
                this.options.closeOnEscape &&
                !e.isDefaultPrevented() &&
                e.keyCode &&
                e.keyCode === t.ui.keyCode.ESCAPE
              )
                return e.preventDefault(), void this.close(e);
              if (e.keyCode === t.ui.keyCode.TAB) {
                var i = this.uiDialog.find(":tabbable"),
                  s = i.filter(":first"),
                  n = i.filter(":last");
                (e.target !== n[0] && e.target !== this.uiDialog[0]) ||
                e.shiftKey
                  ? (e.target !== s[0] && e.target !== this.uiDialog[0]) ||
                    !e.shiftKey ||
                    (n.focus(1), e.preventDefault())
                  : (s.focus(1), e.preventDefault());
              }
            },
            mousedown: function (t) {
              this._moveToTop(t) && this._focusTabbable();
            },
          }),
          this.element.find("[aria-describedby]").length ||
            this.uiDialog.attr({
              "aria-describedby": this.element.uniqueId().attr("id"),
            });
      },
      _createTitlebar: function () {
        var e;
        (this.uiDialogTitlebar = t("<div>")
          .addClass(
            "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"
          )
          .prependTo(this.uiDialog)),
          this._on(this.uiDialogTitlebar, {
            mousedown: function (e) {
              t(e.target).closest(".ui-dialog-titlebar-close") ||
                this.uiDialog.focus();
            },
          }),
          (this.uiDialogTitlebarClose = t("<button></button>")
            .button({
              label: this.options.closeText,
              icons: { primary: "ui-icon-closethick" },
              text: !1,
            })
            .addClass("ui-dialog-titlebar-close")
            .appendTo(this.uiDialogTitlebar)),
          this._on(this.uiDialogTitlebarClose, {
            click: function (t) {
              t.preventDefault(), this.close(t);
            },
          }),
          (e = t("<span>")
            .uniqueId()
            .addClass("ui-dialog-title")
            .prependTo(this.uiDialogTitlebar)),
          this._title(e),
          this.uiDialog.attr({ "aria-labelledby": e.attr("id") });
      },
      _title: function (t) {
        this.options.title || t.html("&#160;"), t.text(this.options.title);
      },
      _createButtonPane: function () {
        (this.uiDialogButtonPane = t("<div>").addClass(
          "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"
        )),
          (this.uiButtonSet = t("<div>")
            .addClass("ui-dialog-buttonset")
            .appendTo(this.uiDialogButtonPane)),
          this._createButtons();
      },
      _createButtons: function () {
        var e = this,
          i = this.options.buttons;
        this.uiDialogButtonPane.remove(),
          this.uiButtonSet.empty(),
          t.isEmptyObject(i) || (t.isArray(i) && !i.length)
            ? this.uiDialog.removeClass("ui-dialog-buttons")
            : (t.each(i, function (i, s) {
                var n, o;
                (s = t.isFunction(s) ? { click: s, text: i } : s),
                  (s = t.extend({ type: "button" }, s)),
                  (n = s.click),
                  (s.click = function () {
                    n.apply(e.element[0], arguments);
                  }),
                  (o = { icons: s.icons, text: s.showText }),
                  delete s.icons,
                  delete s.showText,
                  t("<button></button>", s).button(o).appendTo(e.uiButtonSet);
              }),
              this.uiDialog.addClass("ui-dialog-buttons"),
              this.uiDialogButtonPane.appendTo(this.uiDialog));
      },
      _makeDraggable: function () {
        function e(t) {
          return { position: t.position, offset: t.offset };
        }
        var i = this,
          s = this.options;
        this.uiDialog.draggable({
          cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
          handle: ".ui-dialog-titlebar",
          containment: "document",
          start: function (s, n) {
            t(this).addClass("ui-dialog-dragging"),
              i._blockFrames(),
              i._trigger("dragStart", s, e(n));
          },
          drag: function (t, s) {
            i._trigger("drag", t, e(s));
          },
          stop: function (n, o) {
            (s.position = [
              o.position.left - i.document.scrollLeft(),
              o.position.top - i.document.scrollTop(),
            ]),
              t(this).removeClass("ui-dialog-dragging"),
              i._unblockFrames(),
              i._trigger("dragStop", n, e(o));
          },
        });
      },
      _makeResizable: function () {
        function e(t) {
          return {
            originalPosition: t.originalPosition,
            originalSize: t.originalSize,
            position: t.position,
            size: t.size,
          };
        }
        var i = this,
          s = this.options,
          n = s.resizable,
          o = this.uiDialog.css("position"),
          a = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
        this.uiDialog
          .resizable({
            cancel: ".ui-dialog-content",
            containment: "document",
            alsoResize: this.element,
            maxWidth: s.maxWidth,
            maxHeight: s.maxHeight,
            minWidth: s.minWidth,
            minHeight: this._minHeight(),
            handles: a,
            start: function (s, n) {
              t(this).addClass("ui-dialog-resizing"),
                i._blockFrames(),
                i._trigger("resizeStart", s, e(n));
            },
            resize: function (t, s) {
              i._trigger("resize", t, e(s));
            },
            stop: function (n, o) {
              (s.height = t(this).height()),
                (s.width = t(this).width()),
                t(this).removeClass("ui-dialog-resizing"),
                i._unblockFrames(),
                i._trigger("resizeStop", n, e(o));
            },
          })
          .css("position", o);
      },
      _minHeight: function () {
        var t = this.options;
        return "auto" === t.height
          ? t.minHeight
          : Math.min(t.minHeight, t.height);
      },
      _position: function () {
        var t = this.uiDialog.is(":visible");
        t || this.uiDialog.show(),
          this.uiDialog.position(this.options.position),
          t || this.uiDialog.hide();
      },
      _setOptions: function (e) {
        var n = this,
          o = !1,
          a = {};
        t.each(e, function (t, e) {
          n._setOption(t, e), t in i && (o = !0), t in s && (a[t] = e);
        }),
          o && (this._size(), this._position()),
          this.uiDialog.is(":data(ui-resizable)") &&
            this.uiDialog.resizable("option", a);
      },
      _setOption: function (t, e) {
        var i,
          s,
          n = this.uiDialog;
        "dialogClass" === t &&
          n.removeClass(this.options.dialogClass).addClass(e),
          "disabled" !== t &&
            (this._super(t, e),
            "appendTo" === t && this.uiDialog.appendTo(this._appendTo()),
            "buttons" === t && this._createButtons(),
            "closeText" === t &&
              this.uiDialogTitlebarClose.button({ label: "" + e }),
            "draggable" === t &&
              ((i = n.is(":data(ui-draggable)")) &&
                !e &&
                n.draggable("destroy"),
              !i && e && this._makeDraggable()),
            "position" === t && this._position(),
            "resizable" === t &&
              ((s = n.is(":data(ui-resizable)")) &&
                !e &&
                n.resizable("destroy"),
              s && "string" == typeof e && n.resizable("option", "handles", e),
              s || !1 === e || this._makeResizable()),
            "title" === t &&
              this._title(this.uiDialogTitlebar.find(".ui-dialog-title")));
      },
      _size: function () {
        var t,
          e,
          i,
          s = this.options;
        this.element
          .show()
          .css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }),
          s.minWidth > s.width && (s.width = s.minWidth),
          (t = this.uiDialog
            .css({ height: "auto", width: s.width })
            .outerHeight()),
          (e = Math.max(0, s.minHeight - t)),
          (i =
            "number" == typeof s.maxHeight
              ? Math.max(0, s.maxHeight - t)
              : "none"),
          "auto" === s.height
            ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" })
            : this.element.height(Math.max(0, s.height - t)),
          this.uiDialog.is(":data(ui-resizable)") &&
            this.uiDialog.resizable("option", "minHeight", this._minHeight());
      },
      _blockFrames: function () {
        this.iframeBlocks = this.document.find("iframe").map(function () {
          var e = t(this);
          return t("<div>")
            .css({
              position: "absolute",
              width: e.outerWidth(),
              height: e.outerHeight(),
            })
            .appendTo(e.parent())
            .offset(e.offset())[0];
        });
      },
      _unblockFrames: function () {
        this.iframeBlocks &&
          (this.iframeBlocks.remove(), delete this.iframeBlocks);
      },
      _allowInteraction: function (e) {
        return (
          !!t(e.target).closest(".ui-dialog").length ||
          !!t(e.target).closest(".ui-datepicker").length
        );
      },
      _createOverlay: function () {
        if (this.options.modal) {
          var e = this,
            i = this.widgetFullName;
          t.ui.dialog.overlayInstances ||
            this._delay(function () {
              t.ui.dialog.overlayInstances &&
                this.document.bind("focusin.dialog", function (s) {
                  e._allowInteraction(s) ||
                    (s.preventDefault(),
                    t(".ui-dialog:visible:last .ui-dialog-content")
                      .data(i)
                      ._focusTabbable());
                });
            }),
            (this.overlay = t("<div>")
              .addClass("ui-widget-overlay ui-front")
              .appendTo(this._appendTo())),
            this._on(this.overlay, { mousedown: "_keepFocus" }),
            t.ui.dialog.overlayInstances++;
        }
      },
      _destroyOverlay: function () {
        this.options.modal &&
          this.overlay &&
          (t.ui.dialog.overlayInstances--,
          t.ui.dialog.overlayInstances ||
            this.document.unbind("focusin.dialog"),
          this.overlay.remove(),
          (this.overlay = null));
      },
    }),
      (t.ui.dialog.overlayInstances = 0),
      !1 !== t.uiBackCompat &&
        t.widget("ui.dialog", t.ui.dialog, {
          _position: function () {
            var e,
              i = this.options.position,
              s = [],
              n = [0, 0];
            i
              ? (("string" == typeof i || ("object" == typeof i && "0" in i)) &&
                  (1 === (s = i.split ? i.split(" ") : [i[0], i[1]]).length &&
                    (s[1] = s[0]),
                  t.each(["left", "top"], function (t, e) {
                    +s[t] === s[t] && ((n[t] = s[t]), (s[t] = e));
                  }),
                  (i = {
                    my:
                      s[0] +
                      (n[0] < 0 ? n[0] : "+" + n[0]) +
                      " " +
                      s[1] +
                      (n[1] < 0 ? n[1] : "+" + n[1]),
                    at: s.join(" "),
                  })),
                (i = t.extend({}, t.ui.dialog.prototype.options.position, i)))
              : (i = t.ui.dialog.prototype.options.position),
              (e = this.uiDialog.is(":visible")) || this.uiDialog.show(),
              this.uiDialog.position(i),
              e || this.uiDialog.hide();
          },
        });
  })(jQuery),
  (function (t, e) {
    var i = /up|down|vertical/,
      s = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function (e, n) {
      var o,
        a,
        r,
        h = t(this),
        l = ["position", "top", "bottom", "left", "right", "height", "width"],
        c = t.effects.setMode(h, e.mode || "hide"),
        u = e.direction || "up",
        d = i.test(u),
        p = d ? "height" : "width",
        f = d ? "top" : "left",
        g = s.test(u),
        m = {},
        v = "show" === c;
      h.parent().is(".ui-effects-wrapper")
        ? t.effects.save(h.parent(), l)
        : t.effects.save(h, l),
        h.show(),
        (a = (o = t.effects.createWrapper(h).css({ overflow: "hidden" }))[p]()),
        (r = parseFloat(o.css(f)) || 0),
        (m[p] = v ? a : 0),
        g ||
          (h
            .css(d ? "bottom" : "right", 0)
            .css(d ? "top" : "left", "auto")
            .css({ position: "absolute" }),
          (m[f] = v ? r : a + r)),
        v && (o.css(p, 0), g || o.css(f, r + a)),
        o.animate(m, {
          duration: e.duration,
          easing: e.easing,
          queue: !1,
          complete: function () {
            "hide" === c && h.hide(),
              t.effects.restore(h, l),
              t.effects.removeWrapper(h),
              n();
          },
        });
    };
  })(jQuery),
  (function (t, e) {
    t.effects.effect.bounce = function (e, i) {
      var s,
        n,
        o,
        a = t(this),
        r = ["position", "top", "bottom", "left", "right", "height", "width"],
        h = t.effects.setMode(a, e.mode || "effect"),
        l = "hide" === h,
        c = "show" === h,
        u = e.direction || "up",
        d = e.distance,
        p = e.times || 5,
        f = 2 * p + (c || l ? 1 : 0),
        g = e.duration / f,
        m = e.easing,
        v = "up" === u || "down" === u ? "top" : "left",
        _ = "up" === u || "left" === u,
        b = a.queue(),
        y = b.length;
      for (
        (c || l) && r.push("opacity"),
          t.effects.save(a, r),
          a.show(),
          t.effects.createWrapper(a),
          d || (d = a["top" === v ? "outerHeight" : "outerWidth"]() / 3),
          c &&
            (((o = { opacity: 1 })[v] = 0),
            a
              .css("opacity", 0)
              .css(v, _ ? 2 * -d : 2 * d)
              .animate(o, g, m)),
          l && (d /= Math.pow(2, p - 1)),
          (o = {})[v] = 0,
          s = 0;
        s < p;
        s++
      )
        ((n = {})[v] = (_ ? "-=" : "+=") + d),
          a.animate(n, g, m).animate(o, g, m),
          (d = l ? 2 * d : d / 2);
      l &&
        (((n = { opacity: 0 })[v] = (_ ? "-=" : "+=") + d), a.animate(n, g, m)),
        a.queue(function () {
          l && a.hide(),
            t.effects.restore(a, r),
            t.effects.removeWrapper(a),
            i();
        }),
        y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))),
        a.dequeue();
    };
  })(jQuery),
  (function (t, e) {
    t.effects.effect.clip = function (e, i) {
      var s,
        n,
        o,
        a = t(this),
        r = ["position", "top", "bottom", "left", "right", "height", "width"],
        h = "show" === t.effects.setMode(a, e.mode || "hide"),
        l = "vertical" === (e.direction || "vertical"),
        c = l ? "height" : "width",
        u = l ? "top" : "left",
        d = {};
      t.effects.save(a, r),
        a.show(),
        (s = t.effects.createWrapper(a).css({ overflow: "hidden" })),
        (o = (n = "IMG" === a[0].tagName ? s : a)[c]()),
        h && (n.css(c, 0), n.css(u, o / 2)),
        (d[c] = h ? o : 0),
        (d[u] = h ? 0 : o / 2),
        n.animate(d, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function () {
            h || a.hide(),
              t.effects.restore(a, r),
              t.effects.removeWrapper(a),
              i();
          },
        });
    };
  })(jQuery),
  (function (t, e) {
    t.effects.effect.drop = function (e, i) {
      var s,
        n = t(this),
        o = [
          "position",
          "top",
          "bottom",
          "left",
          "right",
          "opacity",
          "height",
          "width",
        ],
        a = t.effects.setMode(n, e.mode || "hide"),
        r = "show" === a,
        h = e.direction || "left",
        l = "up" === h || "down" === h ? "top" : "left",
        c = "up" === h || "left" === h ? "pos" : "neg",
        u = { opacity: r ? 1 : 0 };
      t.effects.save(n, o),
        n.show(),
        t.effects.createWrapper(n),
        (s =
          e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2),
        r && n.css("opacity", 0).css(l, "pos" === c ? -s : s),
        (u[l] =
          (r ? ("pos" === c ? "+=" : "-=") : "pos" === c ? "-=" : "+=") + s),
        n.animate(u, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function () {
            "hide" === a && n.hide(),
              t.effects.restore(n, o),
              t.effects.removeWrapper(n),
              i();
          },
        });
    };
  })(jQuery),
  (function (t, e) {
    t.effects.effect.explode = function (e, i) {
      function s() {
        d.css({ visibility: "visible" }), t(v).remove(), p || d.hide(), i();
      }
      var n,
        o,
        a,
        r,
        h,
        l,
        c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
        u = c,
        d = t(this),
        p = "show" === t.effects.setMode(d, e.mode || "hide"),
        f = d.show().css("visibility", "hidden").offset(),
        g = Math.ceil(d.outerWidth() / u),
        m = Math.ceil(d.outerHeight() / c),
        v = [];
      for (n = 0; n < c; n++)
        for (r = f.top + n * m, l = n - (c - 1) / 2, o = 0; o < u; o++)
          (a = f.left + o * g),
            (h = o - (u - 1) / 2),
            d
              .clone()
              .appendTo("body")
              .wrap("<div></div>")
              .css({
                position: "absolute",
                visibility: "visible",
                left: -o * g,
                top: -n * m,
              })
              .parent()
              .addClass("ui-effects-explode")
              .css({
                position: "absolute",
                overflow: "hidden",
                width: g,
                height: m,
                left: a + (p ? h * g : 0),
                top: r + (p ? l * m : 0),
                opacity: p ? 0 : 1,
              })
              .animate(
                {
                  left: a + (p ? 0 : h * g),
                  top: r + (p ? 0 : l * m),
                  opacity: p ? 1 : 0,
                },
                e.duration || 500,
                e.easing,
                function () {
                  v.push(this), v.length === c * u && s();
                }
              );
    };
  })(jQuery),
  (function (t, e) {
    t.effects.effect.fade = function (e, i) {
      var s = t(this),
        n = t.effects.setMode(s, e.mode || "toggle");
      s.animate(
        { opacity: n },
        { queue: !1, duration: e.duration, easing: e.easing, complete: i }
      );
    };
  })(jQuery),
  (function (t, e) {
    t.effects.effect.fold = function (e, i) {
      var s,
        n,
        o = t(this),
        a = ["position", "top", "bottom", "left", "right", "height", "width"],
        r = t.effects.setMode(o, e.mode || "hide"),
        h = "show" === r,
        l = "hide" === r,
        c = e.size || 15,
        u = /([0-9]+)%/.exec(c),
        d = !!e.horizFirst,
        p = h !== d,
        f = p ? ["width", "height"] : ["height", "width"],
        g = e.duration / 2,
        m = {},
        v = {};
      t.effects.save(o, a),
        o.show(),
        (s = t.effects.createWrapper(o).css({ overflow: "hidden" })),
        (n = p ? [s.width(), s.height()] : [s.height(), s.width()]),
        u && (c = (parseInt(u[1], 10) / 100) * n[l ? 0 : 1]),
        h && s.css(d ? { height: 0, width: c } : { height: c, width: 0 }),
        (m[f[0]] = h ? n[0] : c),
        (v[f[1]] = h ? n[1] : 0),
        s.animate(m, g, e.easing).animate(v, g, e.easing, function () {
          l && o.hide(),
            t.effects.restore(o, a),
            t.effects.removeWrapper(o),
            i();
        });
    };
  })(jQuery),
  (function (t, e) {
    t.effects.effect.highlight = function (e, i) {
      var s = t(this),
        n = ["backgroundImage", "backgroundColor", "opacity"],
        o = t.effects.setMode(s, e.mode || "show"),
        a = { backgroundColor: s.css("backgroundColor") };
      "hide" === o && (a.opacity = 0),
        t.effects.save(s, n),
        s
          .show()
          .css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99",
          })
          .animate(a, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              "hide" === o && s.hide(), t.effects.restore(s, n), i();
            },
          });
    };
  })(jQuery),
  (function (t, e) {
    t.effects.effect.pulsate = function (e, i) {
      var s,
        n = t(this),
        o = t.effects.setMode(n, e.mode || "show"),
        a = "show" === o,
        r = "hide" === o,
        h = a || "hide" === o,
        l = 2 * (e.times || 5) + (h ? 1 : 0),
        c = e.duration / l,
        u = 0,
        d = n.queue(),
        p = d.length;
      for (
        (!a && n.is(":visible")) || (n.css("opacity", 0).show(), (u = 1)),
          s = 1;
        s < l;
        s++
      )
        n.animate({ opacity: u }, c, e.easing), (u = 1 - u);
      n.animate({ opacity: u }, c, e.easing),
        n.queue(function () {
          r && n.hide(), i();
        }),
        p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))),
        n.dequeue();
    };
  })(jQuery),
  (function (t, e) {
    (t.effects.effect.puff = function (e, i) {
      var s = t(this),
        n = t.effects.setMode(s, e.mode || "hide"),
        o = "hide" === n,
        a = parseInt(e.percent, 10) || 150,
        r = a / 100,
        h = {
          height: s.height(),
          width: s.width(),
          outerHeight: s.outerHeight(),
          outerWidth: s.outerWidth(),
        };
      t.extend(e, {
        effect: "scale",
        queue: !1,
        fade: !0,
        mode: n,
        complete: i,
        percent: o ? a : 100,
        from: o
          ? h
          : {
              height: h.height * r,
              width: h.width * r,
              outerHeight: h.outerHeight * r,
              outerWidth: h.outerWidth * r,
            },
      }),
        s.effect(e);
    }),
      (t.effects.effect.scale = function (e, i) {
        var s = t(this),
          n = t.extend(!0, {}, e),
          o = t.effects.setMode(s, e.mode || "effect"),
          a =
            parseInt(e.percent, 10) ||
            (0 === parseInt(e.percent, 10) ? 0 : "hide" === o ? 0 : 100),
          r = e.direction || "both",
          h = e.origin,
          l = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth(),
          },
          c = {
            y: "horizontal" !== r ? a / 100 : 1,
            x: "vertical" !== r ? a / 100 : 1,
          };
        (n.effect = "size"),
          (n.queue = !1),
          (n.complete = i),
          "effect" !== o &&
            ((n.origin = h || ["middle", "center"]), (n.restore = !0)),
          (n.from =
            e.from ||
            ("show" === o
              ? { height: 0, width: 0, outerHeight: 0, outerWidth: 0 }
              : l)),
          (n.to = {
            height: l.height * c.y,
            width: l.width * c.x,
            outerHeight: l.outerHeight * c.y,
            outerWidth: l.outerWidth * c.x,
          }),
          n.fade &&
            ("show" === o && ((n.from.opacity = 0), (n.to.opacity = 1)),
            "hide" === o && ((n.from.opacity = 1), (n.to.opacity = 0))),
          s.effect(n);
      }),
      (t.effects.effect.size = function (e, i) {
        var s,
          n,
          o,
          a = t(this),
          r = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "width",
            "height",
            "overflow",
            "opacity",
          ],
          h = [
            "position",
            "top",
            "bottom",
            "left",
            "right",
            "overflow",
            "opacity",
          ],
          l = ["width", "height", "overflow"],
          c = ["fontSize"],
          u = [
            "borderTopWidth",
            "borderBottomWidth",
            "paddingTop",
            "paddingBottom",
          ],
          d = [
            "borderLeftWidth",
            "borderRightWidth",
            "paddingLeft",
            "paddingRight",
          ],
          p = t.effects.setMode(a, e.mode || "effect"),
          f = e.restore || "effect" !== p,
          g = e.scale || "both",
          m = e.origin || ["middle", "center"],
          v = a.css("position"),
          _ = f ? r : h,
          b = { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
        "show" === p && a.show(),
          (s = {
            height: a.height(),
            width: a.width(),
            outerHeight: a.outerHeight(),
            outerWidth: a.outerWidth(),
          }),
          "toggle" === e.mode && "show" === p
            ? ((a.from = e.to || b), (a.to = e.from || s))
            : ((a.from = e.from || ("show" === p ? b : s)),
              (a.to = e.to || ("hide" === p ? b : s))),
          (o = {
            from: { y: a.from.height / s.height, x: a.from.width / s.width },
            to: { y: a.to.height / s.height, x: a.to.width / s.width },
          }),
          ("box" !== g && "both" !== g) ||
            (o.from.y !== o.to.y &&
              ((_ = _.concat(u)),
              (a.from = t.effects.setTransition(a, u, o.from.y, a.from)),
              (a.to = t.effects.setTransition(a, u, o.to.y, a.to))),
            o.from.x !== o.to.x &&
              ((_ = _.concat(d)),
              (a.from = t.effects.setTransition(a, d, o.from.x, a.from)),
              (a.to = t.effects.setTransition(a, d, o.to.x, a.to)))),
          ("content" !== g && "both" !== g) ||
            (o.from.y !== o.to.y &&
              ((_ = _.concat(c).concat(l)),
              (a.from = t.effects.setTransition(a, c, o.from.y, a.from)),
              (a.to = t.effects.setTransition(a, c, o.to.y, a.to)))),
          t.effects.save(a, _),
          a.show(),
          t.effects.createWrapper(a),
          a.css("overflow", "hidden").css(a.from),
          m &&
            ((n = t.effects.getBaseline(m, s)),
            (a.from.top = (s.outerHeight - a.outerHeight()) * n.y),
            (a.from.left = (s.outerWidth - a.outerWidth()) * n.x),
            (a.to.top = (s.outerHeight - a.to.outerHeight) * n.y),
            (a.to.left = (s.outerWidth - a.to.outerWidth) * n.x)),
          a.css(a.from),
          ("content" !== g && "both" !== g) ||
            ((u = u.concat(["marginTop", "marginBottom"]).concat(c)),
            (d = d.concat(["marginLeft", "marginRight"])),
            (l = r.concat(u).concat(d)),
            a.find("*[width]").each(function () {
              var i = t(this),
                s = {
                  height: i.height(),
                  width: i.width(),
                  outerHeight: i.outerHeight(),
                  outerWidth: i.outerWidth(),
                };
              f && t.effects.save(i, l),
                (i.from = {
                  height: s.height * o.from.y,
                  width: s.width * o.from.x,
                  outerHeight: s.outerHeight * o.from.y,
                  outerWidth: s.outerWidth * o.from.x,
                }),
                (i.to = {
                  height: s.height * o.to.y,
                  width: s.width * o.to.x,
                  outerHeight: s.height * o.to.y,
                  outerWidth: s.width * o.to.x,
                }),
                o.from.y !== o.to.y &&
                  ((i.from = t.effects.setTransition(i, u, o.from.y, i.from)),
                  (i.to = t.effects.setTransition(i, u, o.to.y, i.to))),
                o.from.x !== o.to.x &&
                  ((i.from = t.effects.setTransition(i, d, o.from.x, i.from)),
                  (i.to = t.effects.setTransition(i, d, o.to.x, i.to))),
                i.css(i.from),
                i.animate(i.to, e.duration, e.easing, function () {
                  f && t.effects.restore(i, l);
                });
            })),
          a.animate(a.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function () {
              0 === a.to.opacity && a.css("opacity", a.from.opacity),
                "hide" === p && a.hide(),
                t.effects.restore(a, _),
                f ||
                  ("static" === v
                    ? a.css({
                        position: "relative",
                        top: a.to.top,
                        left: a.to.left,
                      })
                    : t.each(["top", "left"], function (t, e) {
                        a.css(e, function (e, i) {
                          var s = parseInt(i, 10),
                            n = t ? a.to.left : a.to.top;
                          return "auto" === i ? n + "px" : s + n + "px";
                        });
                      })),
                t.effects.removeWrapper(a),
                i();
            },
          });
      });
  })(jQuery),
  (function (t, e) {
    t.effects.effect.shake = function (e, i) {
      var s,
        n = t(this),
        o = ["position", "top", "bottom", "left", "right", "height", "width"],
        a = t.effects.setMode(n, e.mode || "effect"),
        r = e.direction || "left",
        h = e.distance || 20,
        l = e.times || 3,
        c = 2 * l + 1,
        u = Math.round(e.duration / c),
        d = "up" === r || "down" === r ? "top" : "left",
        p = "up" === r || "left" === r,
        f = {},
        g = {},
        m = {},
        v = n.queue(),
        _ = v.length;
      for (
        t.effects.save(n, o),
          n.show(),
          t.effects.createWrapper(n),
          f[d] = (p ? "-=" : "+=") + h,
          g[d] = (p ? "+=" : "-=") + 2 * h,
          m[d] = (p ? "-=" : "+=") + 2 * h,
          n.animate(f, u, e.easing),
          s = 1;
        s < l;
        s++
      )
        n.animate(g, u, e.easing).animate(m, u, e.easing);
      n
        .animate(g, u, e.easing)
        .animate(f, u / 2, e.easing)
        .queue(function () {
          "hide" === a && n.hide(),
            t.effects.restore(n, o),
            t.effects.removeWrapper(n),
            i();
        }),
        _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))),
        n.dequeue();
    };
  })(jQuery),
  (function (t, e) {
    t.effects.effect.slide = function (e, i) {
      var s,
        n = t(this),
        o = ["position", "top", "bottom", "left", "right", "width", "height"],
        a = t.effects.setMode(n, e.mode || "show"),
        r = "show" === a,
        h = e.direction || "left",
        l = "up" === h || "down" === h ? "top" : "left",
        c = "up" === h || "left" === h,
        u = {};
      t.effects.save(n, o),
        n.show(),
        (s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0)),
        t.effects.createWrapper(n).css({ overflow: "hidden" }),
        r && n.css(l, c ? (isNaN(s) ? "-" + s : -s) : s),
        (u[l] = (r ? (c ? "+=" : "-=") : c ? "-=" : "+=") + s),
        n.animate(u, {
          queue: !1,
          duration: e.duration,
          easing: e.easing,
          complete: function () {
            "hide" === a && n.hide(),
              t.effects.restore(n, o),
              t.effects.removeWrapper(n),
              i();
          },
        });
    };
  })(jQuery),
  (function (t, e) {
    t.effects.effect.transfer = function (e, i) {
      var s = t(this),
        n = t(e.to),
        o = "fixed" === n.css("position"),
        a = t("body"),
        r = o ? a.scrollTop() : 0,
        h = o ? a.scrollLeft() : 0,
        l = n.offset(),
        c = {
          top: l.top - r,
          left: l.left - h,
          height: n.innerHeight(),
          width: n.innerWidth(),
        },
        u = s.offset(),
        d = t("<div class='ui-effects-transfer'></div>")
          .appendTo(document.body)
          .addClass(e.className)
          .css({
            top: u.top - r,
            left: u.left - h,
            height: s.innerHeight(),
            width: s.innerWidth(),
            position: o ? "fixed" : "absolute",
          })
          .animate(c, e.duration, e.easing, function () {
            d.remove(), i();
          });
    };
  })(jQuery),
  (function (t, e) {
    t.widget("ui.menu", {
      version: "1.10.3",
      defaultElement: "<ul>",
      delay: 300,
      options: {
        icons: { submenu: "ui-icon-carat-1-e" },
        menus: "ul",
        position: { my: "left top", at: "right top" },
        role: "menu",
        blur: null,
        focus: null,
        select: null,
      },
      _create: function () {
        (this.activeMenu = this.element),
          (this.mouseHandled = !1),
          this.element
            .uniqueId()
            .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
            .toggleClass(
              "ui-menu-icons",
              !!this.element.find(".ui-icon").length
            )
            .attr({ role: this.options.role, tabIndex: 0 })
            .bind(
              "click" + this.eventNamespace,
              t.proxy(function (t) {
                this.options.disabled && t.preventDefault();
              }, this)
            ),
          this.options.disabled &&
            this.element
              .addClass("ui-state-disabled")
              .attr("aria-disabled", "true"),
          this._on({
            "mousedown .ui-menu-item > a": function (t) {
              t.preventDefault();
            },
            "click .ui-state-disabled > a": function (t) {
              t.preventDefault();
            },
            "click .ui-menu-item:has(a)": function (e) {
              var i = t(e.target).closest(".ui-menu-item");
              !this.mouseHandled &&
                i.not(".ui-state-disabled").length &&
                ((this.mouseHandled = !0),
                this.select(e),
                i.has(".ui-menu").length
                  ? this.expand(e)
                  : this.element.is(":focus") ||
                    (this.element.trigger("focus", [!0]),
                    this.active &&
                      1 === this.active.parents(".ui-menu").length &&
                      clearTimeout(this.timer)));
            },
            "mouseenter .ui-menu-item": function (e) {
              var i = t(e.currentTarget);
              i
                .siblings()
                .children(".ui-state-active")
                .removeClass("ui-state-active"),
                this.focus(e, i);
            },
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function (t, e) {
              var i =
                this.active || this.element.children(".ui-menu-item").eq(0);
              e || this.focus(t, i);
            },
            blur: function (e) {
              this._delay(function () {
                t.contains(this.element[0], this.document[0].activeElement) ||
                  this.collapseAll(e);
              });
            },
            keydown: "_keydown",
          }),
          this.refresh(),
          this._on(this.document, {
            click: function (e) {
              t(e.target).closest(".ui-menu").length || this.collapseAll(e),
                (this.mouseHandled = !1);
            },
          });
      },
      _destroy: function () {
        this.element
          .removeAttr("aria-activedescendant")
          .find(".ui-menu")
          .addBack()
          .removeClass(
            "ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons"
          )
          .removeAttr("role")
          .removeAttr("tabIndex")
          .removeAttr("aria-labelledby")
          .removeAttr("aria-expanded")
          .removeAttr("aria-hidden")
          .removeAttr("aria-disabled")
          .removeUniqueId()
          .show(),
          this.element
            .find(".ui-menu-item")
            .removeClass("ui-menu-item")
            .removeAttr("role")
            .removeAttr("aria-disabled")
            .children("a")
            .removeUniqueId()
            .removeClass("ui-corner-all ui-state-hover")
            .removeAttr("tabIndex")
            .removeAttr("role")
            .removeAttr("aria-haspopup")
            .children()
            .each(function () {
              var e = t(this);
              e.data("ui-menu-submenu-carat") && e.remove();
            }),
          this.element
            .find(".ui-menu-divider")
            .removeClass("ui-menu-divider ui-widget-content");
      },
      _keydown: function (e) {
        function i(t) {
          return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
        }
        var s,
          n,
          o,
          a,
          r,
          h = !0;
        switch (e.keyCode) {
          case t.ui.keyCode.PAGE_UP:
            this.previousPage(e);
            break;
          case t.ui.keyCode.PAGE_DOWN:
            this.nextPage(e);
            break;
          case t.ui.keyCode.HOME:
            this._move("first", "first", e);
            break;
          case t.ui.keyCode.END:
            this._move("last", "last", e);
            break;
          case t.ui.keyCode.UP:
            this.previous(e);
            break;
          case t.ui.keyCode.DOWN:
            this.next(e);
            break;
          case t.ui.keyCode.LEFT:
            this.collapse(e);
            break;
          case t.ui.keyCode.RIGHT:
            this.active &&
              !this.active.is(".ui-state-disabled") &&
              this.expand(e);
            break;
          case t.ui.keyCode.ENTER:
          case t.ui.keyCode.SPACE:
            this._activate(e);
            break;
          case t.ui.keyCode.ESCAPE:
            this.collapse(e);
            break;
          default:
            (h = !1),
              (n = this.previousFilter || ""),
              (o = String.fromCharCode(e.keyCode)),
              (a = !1),
              clearTimeout(this.filterTimer),
              o === n ? (a = !0) : (o = n + o),
              (r = new RegExp("^" + i(o), "i")),
              (s = this.activeMenu
                .children(".ui-menu-item")
                .filter(function () {
                  return r.test(t(this).children("a").text());
                })),
              (s =
                a && -1 !== s.index(this.active.next())
                  ? this.active.nextAll(".ui-menu-item")
                  : s).length ||
                ((o = String.fromCharCode(e.keyCode)),
                (r = new RegExp("^" + i(o), "i")),
                (s = this.activeMenu
                  .children(".ui-menu-item")
                  .filter(function () {
                    return r.test(t(this).children("a").text());
                  }))),
              s.length
                ? (this.focus(e, s),
                  s.length > 1
                    ? ((this.previousFilter = o),
                      (this.filterTimer = this._delay(function () {
                        delete this.previousFilter;
                      }, 1e3)))
                    : delete this.previousFilter)
                : delete this.previousFilter;
        }
        h && e.preventDefault();
      },
      _activate: function (t) {
        this.active.is(".ui-state-disabled") ||
          (this.active.children("a[aria-haspopup='true']").length
            ? this.expand(t)
            : this.select(t));
      },
      refresh: function () {
        var e,
          i = this.options.icons.submenu,
          s = this.element.find(this.options.menus);
        s
          .filter(":not(.ui-menu)")
          .addClass("ui-menu ui-widget ui-widget-content ui-corner-all")
          .hide()
          .attr({
            role: this.options.role,
            "aria-hidden": "true",
            "aria-expanded": "false",
          })
          .each(function () {
            var e = t(this),
              s = e.prev("a"),
              n = t("<span>")
                .addClass("ui-menu-icon ui-icon " + i)
                .data("ui-menu-submenu-carat", !0);
            s.attr("aria-haspopup", "true").prepend(n),
              e.attr("aria-labelledby", s.attr("id"));
          }),
          (e = s.add(this.element))
            .children(":not(.ui-menu-item):has(a)")
            .addClass("ui-menu-item")
            .attr("role", "presentation")
            .children("a")
            .uniqueId()
            .addClass("ui-corner-all")
            .attr({ tabIndex: -1, role: this._itemRole() }),
          e.children(":not(.ui-menu-item)").each(function () {
            var e = t(this);
            /[^\-\u2014\u2013\s]/.test(e.text()) ||
              e.addClass("ui-widget-content ui-menu-divider");
          }),
          e.children(".ui-state-disabled").attr("aria-disabled", "true"),
          this.active &&
            !t.contains(this.element[0], this.active[0]) &&
            this.blur();
      },
      _itemRole: function () {
        return { menu: "menuitem", listbox: "option" }[this.options.role];
      },
      _setOption: function (t, e) {
        "icons" === t &&
          this.element
            .find(".ui-menu-icon")
            .removeClass(this.options.icons.submenu)
            .addClass(e.submenu),
          this._super(t, e);
      },
      focus: function (t, e) {
        var i, s;
        this.blur(t, t && "focus" === t.type),
          this._scrollIntoView(e),
          (this.active = e.first()),
          (s = this.active.children("a").addClass("ui-state-focus")),
          this.options.role &&
            this.element.attr("aria-activedescendant", s.attr("id")),
          this.active
            .parent()
            .closest(".ui-menu-item")
            .children("a:first")
            .addClass("ui-state-active"),
          t && "keydown" === t.type
            ? this._close()
            : (this.timer = this._delay(function () {
                this._close();
              }, this.delay)),
          (i = e.children(".ui-menu")).length &&
            /^mouse/.test(t.type) &&
            this._startOpening(i),
          (this.activeMenu = e.parent()),
          this._trigger("focus", t, { item: e });
      },
      _scrollIntoView: function (e) {
        var i, s, n, o, a, r;
        this._hasScroll() &&
          ((i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0),
          (s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0),
          (n = e.offset().top - this.activeMenu.offset().top - i - s),
          (o = this.activeMenu.scrollTop()),
          (a = this.activeMenu.height()),
          (r = e.height()),
          n < 0
            ? this.activeMenu.scrollTop(o + n)
            : n + r > a && this.activeMenu.scrollTop(o + n - a + r));
      },
      blur: function (t, e) {
        e || clearTimeout(this.timer),
          this.active &&
            (this.active.children("a").removeClass("ui-state-focus"),
            (this.active = null),
            this._trigger("blur", t, { item: this.active }));
      },
      _startOpening: function (t) {
        clearTimeout(this.timer),
          "true" === t.attr("aria-hidden") &&
            (this.timer = this._delay(function () {
              this._close(), this._open(t);
            }, this.delay));
      },
      _open: function (e) {
        var i = t.extend({ of: this.active }, this.options.position);
        clearTimeout(this.timer),
          this.element
            .find(".ui-menu")
            .not(e.parents(".ui-menu"))
            .hide()
            .attr("aria-hidden", "true"),
          e
            .show()
            .removeAttr("aria-hidden")
            .attr("aria-expanded", "true")
            .position(i);
      },
      collapseAll: function (e, i) {
        clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            var s = i
              ? this.element
              : t(e && e.target).closest(this.element.find(".ui-menu"));
            s.length || (s = this.element),
              this._close(s),
              this.blur(e),
              (this.activeMenu = s);
          }, this.delay));
      },
      _close: function (t) {
        t || (t = this.active ? this.active.parent() : this.element),
          t
            .find(".ui-menu")
            .hide()
            .attr("aria-hidden", "true")
            .attr("aria-expanded", "false")
            .end()
            .find("a.ui-state-active")
            .removeClass("ui-state-active");
      },
      collapse: function (t) {
        var e =
          this.active &&
          this.active.parent().closest(".ui-menu-item", this.element);
        e && e.length && (this._close(), this.focus(t, e));
      },
      expand: function (t) {
        var e =
          this.active &&
          this.active.children(".ui-menu ").children(".ui-menu-item").first();
        e &&
          e.length &&
          (this._open(e.parent()),
          this._delay(function () {
            this.focus(t, e);
          }));
      },
      next: function (t) {
        this._move("next", "first", t);
      },
      previous: function (t) {
        this._move("prev", "last", t);
      },
      isFirstItem: function () {
        return this.active && !this.active.prevAll(".ui-menu-item").length;
      },
      isLastItem: function () {
        return this.active && !this.active.nextAll(".ui-menu-item").length;
      },
      _move: function (t, e, i) {
        var s;
        this.active &&
          (s =
            "first" === t || "last" === t
              ? this.active["first" === t ? "prevAll" : "nextAll"](
                  ".ui-menu-item"
                ).eq(-1)
              : this.active[t + "All"](".ui-menu-item").eq(0)),
          (s && s.length && this.active) ||
            (s = this.activeMenu.children(".ui-menu-item")[e]()),
          this.focus(i, s);
      },
      nextPage: function (e) {
        var i, s, n;
        this.active
          ? this.isLastItem() ||
            (this._hasScroll()
              ? ((s = this.active.offset().top),
                (n = this.element.height()),
                this.active.nextAll(".ui-menu-item").each(function () {
                  return (i = t(this)).offset().top - s - n < 0;
                }),
                this.focus(e, i))
              : this.focus(
                  e,
                  this.activeMenu
                    .children(".ui-menu-item")
                    [this.active ? "last" : "first"]()
                ))
          : this.next(e);
      },
      previousPage: function (e) {
        var i, s, n;
        this.active
          ? this.isFirstItem() ||
            (this._hasScroll()
              ? ((s = this.active.offset().top),
                (n = this.element.height()),
                this.active.prevAll(".ui-menu-item").each(function () {
                  return (i = t(this)).offset().top - s + n > 0;
                }),
                this.focus(e, i))
              : this.focus(
                  e,
                  this.activeMenu.children(".ui-menu-item").first()
                ))
          : this.next(e);
      },
      _hasScroll: function () {
        return this.element.outerHeight() < this.element.prop("scrollHeight");
      },
      select: function (e) {
        this.active = this.active || t(e.target).closest(".ui-menu-item");
        var i = { item: this.active };
        this.active.has(".ui-menu").length || this.collapseAll(e, !0),
          this._trigger("select", e, i);
      },
    });
  })(jQuery),
  (function (t, e) {
    function i(t, e, i) {
      return [
        parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1),
        parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1),
      ];
    }
    function s(e, i) {
      return parseInt(t.css(e, i), 10) || 0;
    }
    function n(e) {
      var i = e[0];
      return 9 === i.nodeType
        ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } }
        : t.isWindow(i)
        ? {
            width: e.width(),
            height: e.height(),
            offset: { top: e.scrollTop(), left: e.scrollLeft() },
          }
        : i.preventDefault
        ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } }
        : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset(),
          };
    }
    t.ui = t.ui || {};
    var o,
      a = Math.max,
      r = Math.abs,
      h = Math.round,
      l = /left|center|right/,
      c = /top|center|bottom/,
      u = /[\+\-]\d+(\.[\d]+)?%?/,
      d = /^\w+/,
      p = /%$/,
      f = t.fn.position;
    (t.position = {
      scrollbarWidth: function () {
        if (void 0 !== o) return o;
        var e,
          i,
          s = t(
            "<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"
          ),
          n = s.children()[0];
        return (
          t("body").append(s),
          (e = n.offsetWidth),
          s.css("overflow", "scroll"),
          (i = n.offsetWidth),
          e === i && (i = s[0].clientWidth),
          s.remove(),
          (o = e - i)
        );
      },
      getScrollInfo: function (e) {
        var i = e.isWindow ? "" : e.element.css("overflow-x"),
          s = e.isWindow ? "" : e.element.css("overflow-y"),
          n =
            "scroll" === i ||
            ("auto" === i && e.width < e.element[0].scrollWidth);
        return {
          width:
            "scroll" === s ||
            ("auto" === s && e.height < e.element[0].scrollHeight)
              ? t.position.scrollbarWidth()
              : 0,
          height: n ? t.position.scrollbarWidth() : 0,
        };
      },
      getWithinInfo: function (e) {
        var i = t(e || window),
          s = t.isWindow(i[0]);
        return {
          element: i,
          isWindow: s,
          offset: i.offset() || { left: 0, top: 0 },
          scrollLeft: i.scrollLeft(),
          scrollTop: i.scrollTop(),
          width: s ? i.width() : i.outerWidth(),
          height: s ? i.height() : i.outerHeight(),
        };
      },
    }),
      (t.fn.position = function (e) {
        if (!e || !e.of) return f.apply(this, arguments);
        e = t.extend({}, e);
        var o,
          p,
          g,
          m,
          v,
          _,
          b = t(e.of),
          y = t.position.getWithinInfo(e.within),
          w = t.position.getScrollInfo(y),
          k = (e.collision || "flip").split(" "),
          x = {};
        return (
          (_ = n(b)),
          b[0].preventDefault && (e.at = "left top"),
          (p = _.width),
          (g = _.height),
          (m = _.offset),
          (v = t.extend({}, m)),
          t.each(["my", "at"], function () {
            var t,
              i,
              s = (e[this] || "").split(" ");
            1 === s.length &&
              (s = l.test(s[0])
                ? s.concat(["center"])
                : c.test(s[0])
                ? ["center"].concat(s)
                : ["center", "center"]),
              (s[0] = l.test(s[0]) ? s[0] : "center"),
              (s[1] = c.test(s[1]) ? s[1] : "center"),
              (t = u.exec(s[0])),
              (i = u.exec(s[1])),
              (x[this] = [t ? t[0] : 0, i ? i[0] : 0]),
              (e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]);
          }),
          1 === k.length && (k[1] = k[0]),
          "right" === e.at[0]
            ? (v.left += p)
            : "center" === e.at[0] && (v.left += p / 2),
          "bottom" === e.at[1]
            ? (v.top += g)
            : "center" === e.at[1] && (v.top += g / 2),
          (o = i(x.at, p, g)),
          (v.left += o[0]),
          (v.top += o[1]),
          this.each(function () {
            var n,
              l,
              c = t(this),
              u = c.outerWidth(),
              d = c.outerHeight(),
              f = s(this, "marginLeft"),
              _ = s(this, "marginTop"),
              D = u + f + s(this, "marginRight") + w.width,
              C = d + _ + s(this, "marginBottom") + w.height,
              I = t.extend({}, v),
              P = i(x.my, c.outerWidth(), c.outerHeight());
            "right" === e.my[0]
              ? (I.left -= u)
              : "center" === e.my[0] && (I.left -= u / 2),
              "bottom" === e.my[1]
                ? (I.top -= d)
                : "center" === e.my[1] && (I.top -= d / 2),
              (I.left += P[0]),
              (I.top += P[1]),
              t.support.offsetFractions ||
                ((I.left = h(I.left)), (I.top = h(I.top))),
              (n = { marginLeft: f, marginTop: _ }),
              t.each(["left", "top"], function (i, s) {
                t.ui.position[k[i]] &&
                  t.ui.position[k[i]][s](I, {
                    targetWidth: p,
                    targetHeight: g,
                    elemWidth: u,
                    elemHeight: d,
                    collisionPosition: n,
                    collisionWidth: D,
                    collisionHeight: C,
                    offset: [o[0] + P[0], o[1] + P[1]],
                    my: e.my,
                    at: e.at,
                    within: y,
                    elem: c,
                  });
              }),
              e.using &&
                (l = function (t) {
                  var i = m.left - I.left,
                    s = i + p - u,
                    n = m.top - I.top,
                    o = n + g - d,
                    h = {
                      target: {
                        element: b,
                        left: m.left,
                        top: m.top,
                        width: p,
                        height: g,
                      },
                      element: {
                        element: c,
                        left: I.left,
                        top: I.top,
                        width: u,
                        height: d,
                      },
                      horizontal: s < 0 ? "left" : i > 0 ? "right" : "center",
                      vertical: o < 0 ? "top" : n > 0 ? "bottom" : "middle",
                    };
                  p < u && r(i + s) < p && (h.horizontal = "center"),
                    g < d && r(n + o) < g && (h.vertical = "middle"),
                    a(r(i), r(s)) > a(r(n), r(o))
                      ? (h.important = "horizontal")
                      : (h.important = "vertical"),
                    e.using.call(this, t, h);
                }),
              c.offset(t.extend(I, { using: l }));
          })
        );
      }),
      (t.ui.position = {
        fit: {
          left: function (t, e) {
            var i,
              s = e.within,
              n = s.isWindow ? s.scrollLeft : s.offset.left,
              o = s.width,
              r = t.left - e.collisionPosition.marginLeft,
              h = n - r,
              l = r + e.collisionWidth - o - n;
            e.collisionWidth > o
              ? h > 0 && l <= 0
                ? ((i = t.left + h + e.collisionWidth - o - n),
                  (t.left += h - i))
                : (t.left =
                    l > 0 && h <= 0 ? n : h > l ? n + o - e.collisionWidth : n)
              : h > 0
              ? (t.left += h)
              : l > 0
              ? (t.left -= l)
              : (t.left = a(t.left - r, t.left));
          },
          top: function (t, e) {
            var i,
              s = e.within,
              n = s.isWindow ? s.scrollTop : s.offset.top,
              o = e.within.height,
              r = t.top - e.collisionPosition.marginTop,
              h = n - r,
              l = r + e.collisionHeight - o - n;
            e.collisionHeight > o
              ? h > 0 && l <= 0
                ? ((i = t.top + h + e.collisionHeight - o - n),
                  (t.top += h - i))
                : (t.top =
                    l > 0 && h <= 0 ? n : h > l ? n + o - e.collisionHeight : n)
              : h > 0
              ? (t.top += h)
              : l > 0
              ? (t.top -= l)
              : (t.top = a(t.top - r, t.top));
          },
        },
        flip: {
          left: function (t, e) {
            var i,
              s,
              n = e.within,
              o = n.offset.left + n.scrollLeft,
              a = n.width,
              h = n.isWindow ? n.scrollLeft : n.offset.left,
              l = t.left - e.collisionPosition.marginLeft,
              c = l - h,
              u = l + e.collisionWidth - a - h,
              d =
                "left" === e.my[0]
                  ? -e.elemWidth
                  : "right" === e.my[0]
                  ? e.elemWidth
                  : 0,
              p =
                "left" === e.at[0]
                  ? e.targetWidth
                  : "right" === e.at[0]
                  ? -e.targetWidth
                  : 0,
              f = -2 * e.offset[0];
            c < 0
              ? ((i = t.left + d + p + f + e.collisionWidth - a - o) < 0 ||
                  i < r(c)) &&
                (t.left += d + p + f)
              : u > 0 &&
                ((s = t.left - e.collisionPosition.marginLeft + d + p + f - h) >
                  0 ||
                  r(s) < u) &&
                (t.left += d + p + f);
          },
          top: function (t, e) {
            var i,
              s,
              n = e.within,
              o = n.offset.top + n.scrollTop,
              a = n.height,
              h = n.isWindow ? n.scrollTop : n.offset.top,
              l = t.top - e.collisionPosition.marginTop,
              c = l - h,
              u = l + e.collisionHeight - a - h,
              d =
                "top" === e.my[1]
                  ? -e.elemHeight
                  : "bottom" === e.my[1]
                  ? e.elemHeight
                  : 0,
              p =
                "top" === e.at[1]
                  ? e.targetHeight
                  : "bottom" === e.at[1]
                  ? -e.targetHeight
                  : 0,
              f = -2 * e.offset[1];
            c < 0
              ? ((s = t.top + d + p + f + e.collisionHeight - a - o),
                t.top + d + p + f > c &&
                  (s < 0 || s < r(c)) &&
                  (t.top += d + p + f))
              : u > 0 &&
                ((i = t.top - e.collisionPosition.marginTop + d + p + f - h),
                t.top + d + p + f > u &&
                  (i > 0 || r(i) < u) &&
                  (t.top += d + p + f));
          },
        },
        flipfit: {
          left: function () {
            t.ui.position.flip.left.apply(this, arguments),
              t.ui.position.fit.left.apply(this, arguments);
          },
          top: function () {
            t.ui.position.flip.top.apply(this, arguments),
              t.ui.position.fit.top.apply(this, arguments);
          },
        },
      }),
      (function () {
        var e,
          i,
          s,
          n,
          o,
          a = document.getElementsByTagName("body")[0],
          r = document.createElement("div");
        (e = document.createElement(a ? "div" : "body")),
          (s = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none",
          }),
          a &&
            t.extend(s, {
              position: "absolute",
              left: "-1000px",
              top: "-1000px",
            });
        for (o in s) e.style[o] = s[o];
        e.appendChild(r),
          (i = a || document.documentElement).insertBefore(e, i.firstChild),
          (r.style.cssText = "position: absolute; left: 10.7432222px;"),
          (n = t(r).offset().left),
          (t.support.offsetFractions = n > 10 && n < 11),
          (e.innerHTML = ""),
          i.removeChild(e);
      })();
  })(jQuery),
  (function (t, e) {
    t.widget("ui.progressbar", {
      version: "1.10.3",
      options: { max: 100, value: 0, change: null, complete: null },
      min: 0,
      _create: function () {
        (this.oldValue = this.options.value = this._constrainedValue()),
          this.element
            .addClass(
              "ui-progressbar ui-widget ui-widget-content ui-corner-all"
            )
            .attr({ role: "progressbar", "aria-valuemin": this.min }),
          (this.valueDiv = t(
            "<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>"
          ).appendTo(this.element)),
          this._refreshValue();
      },
      _destroy: function () {
        this.element
          .removeClass(
            "ui-progressbar ui-widget ui-widget-content ui-corner-all"
          )
          .removeAttr("role")
          .removeAttr("aria-valuemin")
          .removeAttr("aria-valuemax")
          .removeAttr("aria-valuenow"),
          this.valueDiv.remove();
      },
      value: function (t) {
        if (void 0 === t) return this.options.value;
        (this.options.value = this._constrainedValue(t)), this._refreshValue();
      },
      _constrainedValue: function (t) {
        return (
          void 0 === t && (t = this.options.value),
          (this.indeterminate = !1 === t),
          "number" != typeof t && (t = 0),
          !this.indeterminate &&
            Math.min(this.options.max, Math.max(this.min, t))
        );
      },
      _setOptions: function (t) {
        var e = t.value;
        delete t.value,
          this._super(t),
          (this.options.value = this._constrainedValue(e)),
          this._refreshValue();
      },
      _setOption: function (t, e) {
        "max" === t && (e = Math.max(this.min, e)), this._super(t, e);
      },
      _percentage: function () {
        return this.indeterminate
          ? 100
          : (100 * (this.options.value - this.min)) /
              (this.options.max - this.min);
      },
      _refreshValue: function () {
        var e = this.options.value,
          i = this._percentage();
        this.valueDiv
          .toggle(this.indeterminate || e > this.min)
          .toggleClass("ui-corner-right", e === this.options.max)
          .width(i.toFixed(0) + "%"),
          this.element.toggleClass(
            "ui-progressbar-indeterminate",
            this.indeterminate
          ),
          this.indeterminate
            ? (this.element.removeAttr("aria-valuenow"),
              this.overlayDiv ||
                (this.overlayDiv = t(
                  "<div class='ui-progressbar-overlay'></div>"
                ).appendTo(this.valueDiv)))
            : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e,
              }),
              this.overlayDiv &&
                (this.overlayDiv.remove(), (this.overlayDiv = null))),
          this.oldValue !== e && ((this.oldValue = e), this._trigger("change")),
          e === this.options.max && this._trigger("complete");
      },
    });
  })(jQuery),
  (function (t, e) {
    t.widget("ui.slider", t.ui.mouse, {
      version: "1.10.3",
      widgetEventPrefix: "slide",
      options: {
        animate: !1,
        distance: 0,
        max: 100,
        min: 0,
        orientation: "horizontal",
        range: !1,
        step: 1,
        value: 0,
        values: null,
        change: null,
        slide: null,
        start: null,
        stop: null,
      },
      _create: function () {
        (this._keySliding = !1),
          (this._mouseSliding = !1),
          (this._animateOff = !0),
          (this._handleIndex = null),
          this._detectOrientation(),
          this._mouseInit(),
          this.element.addClass(
            "ui-slider ui-slider-" +
              this.orientation +
              " ui-widget ui-widget-content ui-corner-all"
          ),
          this._refresh(),
          this._setOption("disabled", this.options.disabled),
          (this._animateOff = !1);
      },
      _refresh: function () {
        this._createRange(),
          this._createHandles(),
          this._setupEvents(),
          this._refreshValue();
      },
      _createHandles: function () {
        var e,
          i,
          s = this.options,
          n = this.element
            .find(".ui-slider-handle")
            .addClass("ui-state-default ui-corner-all"),
          o = [];
        for (
          i = (s.values && s.values.length) || 1,
            n.length > i && (n.slice(i).remove(), (n = n.slice(0, i))),
            e = n.length;
          e < i;
          e++
        )
          o.push(
            "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>"
          );
        (this.handles = n.add(t(o.join("")).appendTo(this.element))),
          (this.handle = this.handles.eq(0)),
          this.handles.each(function (e) {
            t(this).data("ui-slider-handle-index", e);
          });
      },
      _createRange: function () {
        var e = this.options,
          i = "";
        e.range
          ? (!0 === e.range &&
              (e.values
                ? e.values.length && 2 !== e.values.length
                  ? (e.values = [e.values[0], e.values[0]])
                  : t.isArray(e.values) && (e.values = e.values.slice(0))
                : (e.values = [this._valueMin(), this._valueMin()])),
            this.range && this.range.length
              ? this.range
                  .removeClass("ui-slider-range-min ui-slider-range-max")
                  .css({ left: "", bottom: "" })
              : ((this.range = t("<div></div>").appendTo(this.element)),
                (i = "ui-slider-range ui-widget-header ui-corner-all")),
            this.range.addClass(
              i +
                ("min" === e.range || "max" === e.range
                  ? " ui-slider-range-" + e.range
                  : "")
            ))
          : (this.range = t([]));
      },
      _setupEvents: function () {
        var t = this.handles.add(this.range).filter("a");
        this._off(t),
          this._on(t, this._handleEvents),
          this._hoverable(t),
          this._focusable(t);
      },
      _destroy: function () {
        this.handles.remove(),
          this.range.remove(),
          this.element.removeClass(
            "ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"
          ),
          this._mouseDestroy();
      },
      _mouseCapture: function (e) {
        var i,
          s,
          n,
          o,
          a,
          r,
          h,
          l = this,
          c = this.options;
        return (
          !c.disabled &&
          ((this.elementSize = {
            width: this.element.outerWidth(),
            height: this.element.outerHeight(),
          }),
          (this.elementOffset = this.element.offset()),
          (i = { x: e.pageX, y: e.pageY }),
          (s = this._normValueFromMouse(i)),
          (n = this._valueMax() - this._valueMin() + 1),
          this.handles.each(function (e) {
            var i = Math.abs(s - l.values(e));
            (n > i ||
              (n === i &&
                (e === l._lastChangedValue || l.values(e) === c.min))) &&
              ((n = i), (o = t(this)), (a = e));
          }),
          !1 !== this._start(e, a) &&
            ((this._mouseSliding = !0),
            (this._handleIndex = a),
            o.addClass("ui-state-active").focus(),
            (r = o.offset()),
            (h = !t(e.target).parents().addBack().is(".ui-slider-handle")),
            (this._clickOffset = h
              ? { left: 0, top: 0 }
              : {
                  left: e.pageX - r.left - o.width() / 2,
                  top:
                    e.pageY -
                    r.top -
                    o.height() / 2 -
                    (parseInt(o.css("borderTopWidth"), 10) || 0) -
                    (parseInt(o.css("borderBottomWidth"), 10) || 0) +
                    (parseInt(o.css("marginTop"), 10) || 0),
                }),
            this.handles.hasClass("ui-state-hover") || this._slide(e, a, s),
            (this._animateOff = !0),
            !0))
        );
      },
      _mouseStart: function () {
        return !0;
      },
      _mouseDrag: function (t) {
        var e = { x: t.pageX, y: t.pageY },
          i = this._normValueFromMouse(e);
        return this._slide(t, this._handleIndex, i), !1;
      },
      _mouseStop: function (t) {
        return (
          this.handles.removeClass("ui-state-active"),
          (this._mouseSliding = !1),
          this._stop(t, this._handleIndex),
          this._change(t, this._handleIndex),
          (this._handleIndex = null),
          (this._clickOffset = null),
          (this._animateOff = !1),
          !1
        );
      },
      _detectOrientation: function () {
        this.orientation =
          "vertical" === this.options.orientation ? "vertical" : "horizontal";
      },
      _normValueFromMouse: function (t) {
        var e, i, s, n, o;
        return (
          "horizontal" === this.orientation
            ? ((e = this.elementSize.width),
              (i =
                t.x -
                this.elementOffset.left -
                (this._clickOffset ? this._clickOffset.left : 0)))
            : ((e = this.elementSize.height),
              (i =
                t.y -
                this.elementOffset.top -
                (this._clickOffset ? this._clickOffset.top : 0))),
          (s = i / e) > 1 && (s = 1),
          s < 0 && (s = 0),
          "vertical" === this.orientation && (s = 1 - s),
          (n = this._valueMax() - this._valueMin()),
          (o = this._valueMin() + s * n),
          this._trimAlignValue(o)
        );
      },
      _start: function (t, e) {
        var i = { handle: this.handles[e], value: this.value() };
        return (
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(e)), (i.values = this.values())),
          this._trigger("start", t, i)
        );
      },
      _slide: function (t, e, i) {
        var s, n, o;
        this.options.values && this.options.values.length
          ? ((s = this.values(e ? 0 : 1)),
            2 === this.options.values.length &&
              !0 === this.options.range &&
              ((0 === e && i > s) || (1 === e && i < s)) &&
              (i = s),
            i !== this.values(e) &&
              (((n = this.values())[e] = i),
              (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n,
              })),
              (s = this.values(e ? 0 : 1)),
              !1 !== o && this.values(e, i, !0)))
          : i !== this.value() &&
            !1 !==
              (o = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
              })) &&
            this.value(i);
      },
      _stop: function (t, e) {
        var i = { handle: this.handles[e], value: this.value() };
        this.options.values &&
          this.options.values.length &&
          ((i.value = this.values(e)), (i.values = this.values())),
          this._trigger("stop", t, i);
      },
      _change: function (t, e) {
        if (!this._keySliding && !this._mouseSliding) {
          var i = { handle: this.handles[e], value: this.value() };
          this.options.values &&
            this.options.values.length &&
            ((i.value = this.values(e)), (i.values = this.values())),
            (this._lastChangedValue = e),
            this._trigger("change", t, i);
        }
      },
      value: function (t) {
        return arguments.length
          ? ((this.options.value = this._trimAlignValue(t)),
            this._refreshValue(),
            void this._change(null, 0))
          : this._value();
      },
      values: function (e, i) {
        var s, n, o;
        if (arguments.length > 1)
          return (
            (this.options.values[e] = this._trimAlignValue(i)),
            this._refreshValue(),
            void this._change(null, e)
          );
        if (!arguments.length) return this._values();
        if (!t.isArray(arguments[0]))
          return this.options.values && this.options.values.length
            ? this._values(e)
            : this.value();
        for (
          s = this.options.values, n = arguments[0], o = 0;
          o < s.length;
          o += 1
        )
          (s[o] = this._trimAlignValue(n[o])), this._change(null, o);
        this._refreshValue();
      },
      _setOption: function (e, i) {
        var s,
          n = 0;
        switch (
          ("range" === e &&
            !0 === this.options.range &&
            ("min" === i
              ? ((this.options.value = this._values(0)),
                (this.options.values = null))
              : "max" === i &&
                ((this.options.value = this._values(
                  this.options.values.length - 1
                )),
                (this.options.values = null))),
          t.isArray(this.options.values) && (n = this.options.values.length),
          t.Widget.prototype._setOption.apply(this, arguments),
          e)
        ) {
          case "orientation":
            this._detectOrientation(),
              this.element
                .removeClass("ui-slider-horizontal ui-slider-vertical")
                .addClass("ui-slider-" + this.orientation),
              this._refreshValue();
            break;
          case "value":
            (this._animateOff = !0),
              this._refreshValue(),
              this._change(null, 0),
              (this._animateOff = !1);
            break;
          case "values":
            for (
              this._animateOff = !0, this._refreshValue(), s = 0;
              s < n;
              s += 1
            )
              this._change(null, s);
            this._animateOff = !1;
            break;
          case "min":
          case "max":
            (this._animateOff = !0),
              this._refreshValue(),
              (this._animateOff = !1);
            break;
          case "range":
            (this._animateOff = !0), this._refresh(), (this._animateOff = !1);
        }
      },
      _value: function () {
        var t = this.options.value;
        return (t = this._trimAlignValue(t));
      },
      _values: function (t) {
        var e, i, s;
        if (arguments.length)
          return (e = this.options.values[t]), (e = this._trimAlignValue(e));
        if (this.options.values && this.options.values.length) {
          for (i = this.options.values.slice(), s = 0; s < i.length; s += 1)
            i[s] = this._trimAlignValue(i[s]);
          return i;
        }
        return [];
      },
      _trimAlignValue: function (t) {
        if (t <= this._valueMin()) return this._valueMin();
        if (t >= this._valueMax()) return this._valueMax();
        var e = this.options.step > 0 ? this.options.step : 1,
          i = (t - this._valueMin()) % e,
          s = t - i;
        return (
          2 * Math.abs(i) >= e && (s += i > 0 ? e : -e),
          parseFloat(s.toFixed(5))
        );
      },
      _valueMin: function () {
        return this.options.min;
      },
      _valueMax: function () {
        return this.options.max;
      },
      _refreshValue: function () {
        var e,
          i,
          s,
          n,
          o,
          a = this.options.range,
          r = this.options,
          h = this,
          l = !this._animateOff && r.animate,
          c = {};
        this.options.values && this.options.values.length
          ? this.handles.each(function (s) {
              (i =
                ((h.values(s) - h._valueMin()) /
                  (h._valueMax() - h._valueMin())) *
                100),
                (c["horizontal" === h.orientation ? "left" : "bottom"] =
                  i + "%"),
                t(this).stop(1, 1)[l ? "animate" : "css"](c, r.animate),
                !0 === h.options.range &&
                  ("horizontal" === h.orientation
                    ? (0 === s &&
                        h.range
                          .stop(1, 1)
                          [l ? "animate" : "css"]({ left: i + "%" }, r.animate),
                      1 === s &&
                        h.range[l ? "animate" : "css"](
                          { width: i - e + "%" },
                          { queue: !1, duration: r.animate }
                        ))
                    : (0 === s &&
                        h.range
                          .stop(1, 1)
                          [l ? "animate" : "css"](
                            { bottom: i + "%" },
                            r.animate
                          ),
                      1 === s &&
                        h.range[l ? "animate" : "css"](
                          { height: i - e + "%" },
                          { queue: !1, duration: r.animate }
                        ))),
                (e = i);
            })
          : ((s = this.value()),
            (n = this._valueMin()),
            (o = this._valueMax()),
            (i = o !== n ? ((s - n) / (o - n)) * 100 : 0),
            (c["horizontal" === this.orientation ? "left" : "bottom"] =
              i + "%"),
            this.handle.stop(1, 1)[l ? "animate" : "css"](c, r.animate),
            "min" === a &&
              "horizontal" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ width: i + "%" }, r.animate),
            "max" === a &&
              "horizontal" === this.orientation &&
              this.range[l ? "animate" : "css"](
                { width: 100 - i + "%" },
                { queue: !1, duration: r.animate }
              ),
            "min" === a &&
              "vertical" === this.orientation &&
              this.range
                .stop(1, 1)
                [l ? "animate" : "css"]({ height: i + "%" }, r.animate),
            "max" === a &&
              "vertical" === this.orientation &&
              this.range[l ? "animate" : "css"](
                { height: 100 - i + "%" },
                { queue: !1, duration: r.animate }
              ));
      },
      _handleEvents: {
        keydown: function (e) {
          var i,
            s,
            n,
            o = t(e.target).data("ui-slider-handle-index");
          switch (e.keyCode) {
            case t.ui.keyCode.HOME:
            case t.ui.keyCode.END:
            case t.ui.keyCode.PAGE_UP:
            case t.ui.keyCode.PAGE_DOWN:
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (
                (e.preventDefault(),
                !this._keySliding &&
                  ((this._keySliding = !0),
                  t(e.target).addClass("ui-state-active"),
                  !1 === this._start(e, o)))
              )
                return;
          }
          switch (
            ((n = this.options.step),
            (i = s =
              this.options.values && this.options.values.length
                ? this.values(o)
                : this.value()),
            e.keyCode)
          ) {
            case t.ui.keyCode.HOME:
              s = this._valueMin();
              break;
            case t.ui.keyCode.END:
              s = this._valueMax();
              break;
            case t.ui.keyCode.PAGE_UP:
              s = this._trimAlignValue(
                i + (this._valueMax() - this._valueMin()) / 5
              );
              break;
            case t.ui.keyCode.PAGE_DOWN:
              s = this._trimAlignValue(
                i - (this._valueMax() - this._valueMin()) / 5
              );
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.RIGHT:
              if (i === this._valueMax()) return;
              s = this._trimAlignValue(i + n);
              break;
            case t.ui.keyCode.DOWN:
            case t.ui.keyCode.LEFT:
              if (i === this._valueMin()) return;
              s = this._trimAlignValue(i - n);
          }
          this._slide(e, o, s);
        },
        click: function (t) {
          t.preventDefault();
        },
        keyup: function (e) {
          var i = t(e.target).data("ui-slider-handle-index");
          this._keySliding &&
            ((this._keySliding = !1),
            this._stop(e, i),
            this._change(e, i),
            t(e.target).removeClass("ui-state-active"));
        },
      },
    });
  })(jQuery),
  (function (t) {
    function e(t) {
      return function () {
        var e = this.element.val();
        t.apply(this, arguments),
          this._refresh(),
          e !== this.element.val() && this._trigger("change");
      };
    }
    t.widget("ui.spinner", {
      version: "1.10.3",
      defaultElement: "<input>",
      widgetEventPrefix: "spin",
      options: {
        culture: null,
        icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" },
        incremental: !0,
        max: null,
        min: null,
        numberFormat: null,
        page: 10,
        step: 1,
        change: null,
        spin: null,
        start: null,
        stop: null,
      },
      _create: function () {
        this._setOption("max", this.options.max),
          this._setOption("min", this.options.min),
          this._setOption("step", this.options.step),
          this._value(this.element.val(), !0),
          this._draw(),
          this._on(this._events),
          this._refresh(),
          this._on(this.window, {
            beforeunload: function () {
              this.element.removeAttr("autocomplete");
            },
          });
      },
      _getCreateOptions: function () {
        var e = {},
          i = this.element;
        return (
          t.each(["min", "max", "step"], function (t, s) {
            var n = i.attr(s);
            void 0 !== n && n.length && (e[s] = n);
          }),
          e
        );
      },
      _events: {
        keydown: function (t) {
          this._start(t) && this._keydown(t) && t.preventDefault();
        },
        keyup: "_stop",
        focus: function () {
          this.previous = this.element.val();
        },
        blur: function (t) {
          this.cancelBlur
            ? delete this.cancelBlur
            : (this._stop(),
              this._refresh(),
              this.previous !== this.element.val() &&
                this._trigger("change", t));
        },
        mousewheel: function (t, e) {
          if (e) {
            if (!this.spinning && !this._start(t)) return !1;
            this._spin((e > 0 ? 1 : -1) * this.options.step, t),
              clearTimeout(this.mousewheelTimer),
              (this.mousewheelTimer = this._delay(function () {
                this.spinning && this._stop(t);
              }, 100)),
              t.preventDefault();
          }
        },
        "mousedown .ui-spinner-button": function (e) {
          function i() {
            this.element[0] === this.document[0].activeElement ||
              (this.element.focus(),
              (this.previous = s),
              this._delay(function () {
                this.previous = s;
              }));
          }
          var s;
          (s =
            this.element[0] === this.document[0].activeElement
              ? this.previous
              : this.element.val()),
            e.preventDefault(),
            i.call(this),
            (this.cancelBlur = !0),
            this._delay(function () {
              delete this.cancelBlur, i.call(this);
            }),
            !1 !== this._start(e) &&
              this._repeat(
                null,
                t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                e
              );
        },
        "mouseup .ui-spinner-button": "_stop",
        "mouseenter .ui-spinner-button": function (e) {
          if (t(e.currentTarget).hasClass("ui-state-active"))
            return (
              !1 !== this._start(e) &&
              void this._repeat(
                null,
                t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1,
                e
              )
            );
        },
        "mouseleave .ui-spinner-button": "_stop",
      },
      _draw: function () {
        var t = (this.uiSpinner = this.element
          .addClass("ui-spinner-input")
          .attr("autocomplete", "off")
          .wrap(this._uiSpinnerHtml())
          .parent()
          .append(this._buttonHtml()));
        this.element.attr("role", "spinbutton"),
          (this.buttons = t
            .find(".ui-spinner-button")
            .attr("tabIndex", -1)
            .button()
            .removeClass("ui-corner-all")),
          this.buttons.height() > Math.ceil(0.5 * t.height()) &&
            t.height() > 0 &&
            t.height(t.height()),
          this.options.disabled && this.disable();
      },
      _keydown: function (e) {
        var i = this.options,
          s = t.ui.keyCode;
        switch (e.keyCode) {
          case s.UP:
            return this._repeat(null, 1, e), !0;
          case s.DOWN:
            return this._repeat(null, -1, e), !0;
          case s.PAGE_UP:
            return this._repeat(null, i.page, e), !0;
          case s.PAGE_DOWN:
            return this._repeat(null, -i.page, e), !0;
        }
        return !1;
      },
      _uiSpinnerHtml: function () {
        return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>";
      },
      _buttonHtml: function () {
        return (
          "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " +
          this.options.icons.up +
          "'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " +
          this.options.icons.down +
          "'>&#9660;</span></a>"
        );
      },
      _start: function (t) {
        return (
          !(!this.spinning && !1 === this._trigger("start", t)) &&
          (this.counter || (this.counter = 1), (this.spinning = !0), !0)
        );
      },
      _repeat: function (t, e, i) {
        (t = t || 500),
          clearTimeout(this.timer),
          (this.timer = this._delay(function () {
            this._repeat(40, e, i);
          }, t)),
          this._spin(e * this.options.step, i);
      },
      _spin: function (t, e) {
        var i = this.value() || 0;
        this.counter || (this.counter = 1),
          (i = this._adjustValue(i + t * this._increment(this.counter))),
          (this.spinning && !1 === this._trigger("spin", e, { value: i })) ||
            (this._value(i), this.counter++);
      },
      _increment: function (e) {
        var i = this.options.incremental;
        return i
          ? t.isFunction(i)
            ? i(e)
            : Math.floor((e * e * e) / 5e4 - (e * e) / 500 + (17 * e) / 200 + 1)
          : 1;
      },
      _precision: function () {
        var t = this._precisionOf(this.options.step);
        return (
          null !== this.options.min &&
            (t = Math.max(t, this._precisionOf(this.options.min))),
          t
        );
      },
      _precisionOf: function (t) {
        var e = t.toString(),
          i = e.indexOf(".");
        return -1 === i ? 0 : e.length - i - 1;
      },
      _adjustValue: function (t) {
        var e,
          i,
          s = this.options;
        return (
          (e = null !== s.min ? s.min : 0),
          (i = t - e),
          (i = Math.round(i / s.step) * s.step),
          (t = e + i),
          (t = parseFloat(t.toFixed(this._precision()))),
          null !== s.max && t > s.max
            ? s.max
            : null !== s.min && t < s.min
            ? s.min
            : t
        );
      },
      _stop: function (t) {
        this.spinning &&
          (clearTimeout(this.timer),
          clearTimeout(this.mousewheelTimer),
          (this.counter = 0),
          (this.spinning = !1),
          this._trigger("stop", t));
      },
      _setOption: function (t, e) {
        if ("culture" === t || "numberFormat" === t) {
          var i = this._parse(this.element.val());
          return (this.options[t] = e), void this.element.val(this._format(i));
        }
        ("max" !== t && "min" !== t && "step" !== t) ||
          ("string" == typeof e && (e = this._parse(e))),
          "icons" === t &&
            (this.buttons
              .first()
              .find(".ui-icon")
              .removeClass(this.options.icons.up)
              .addClass(e.up),
            this.buttons
              .last()
              .find(".ui-icon")
              .removeClass(this.options.icons.down)
              .addClass(e.down)),
          this._super(t, e),
          "disabled" === t &&
            (e
              ? (this.element.prop("disabled", !0),
                this.buttons.button("disable"))
              : (this.element.prop("disabled", !1),
                this.buttons.button("enable")));
      },
      _setOptions: e(function (t) {
        this._super(t), this._value(this.element.val());
      }),
      _parse: function (t) {
        return (
          "string" == typeof t &&
            "" !== t &&
            (t =
              window.Globalize && this.options.numberFormat
                ? Globalize.parseFloat(t, 10, this.options.culture)
                : +t),
          "" === t || isNaN(t) ? null : t
        );
      },
      _format: function (t) {
        return "" === t
          ? ""
          : window.Globalize && this.options.numberFormat
          ? Globalize.format(t, this.options.numberFormat, this.options.culture)
          : t;
      },
      _refresh: function () {
        this.element.attr({
          "aria-valuemin": this.options.min,
          "aria-valuemax": this.options.max,
          "aria-valuenow": this._parse(this.element.val()),
        });
      },
      _value: function (t, e) {
        var i;
        "" !== t &&
          null !== (i = this._parse(t)) &&
          (e || (i = this._adjustValue(i)), (t = this._format(i))),
          this.element.val(t),
          this._refresh();
      },
      _destroy: function () {
        this.element
          .removeClass("ui-spinner-input")
          .prop("disabled", !1)
          .removeAttr("autocomplete")
          .removeAttr("role")
          .removeAttr("aria-valuemin")
          .removeAttr("aria-valuemax")
          .removeAttr("aria-valuenow"),
          this.uiSpinner.replaceWith(this.element);
      },
      stepUp: e(function (t) {
        this._stepUp(t);
      }),
      _stepUp: function (t) {
        this._start() &&
          (this._spin((t || 1) * this.options.step), this._stop());
      },
      stepDown: e(function (t) {
        this._stepDown(t);
      }),
      _stepDown: function (t) {
        this._start() &&
          (this._spin((t || 1) * -this.options.step), this._stop());
      },
      pageUp: e(function (t) {
        this._stepUp((t || 1) * this.options.page);
      }),
      pageDown: e(function (t) {
        this._stepDown((t || 1) * this.options.page);
      }),
      value: function (t) {
        if (!arguments.length) return this._parse(this.element.val());
        e(this._value).call(this, t);
      },
      widget: function () {
        return this.uiSpinner;
      },
    });
  })(jQuery),
  (function (t, e) {
    function i() {
      return ++n;
    }
    function s(t) {
      return (
        t.hash.length > 1 &&
        decodeURIComponent(t.href.replace(o, "")) ===
          decodeURIComponent(location.href.replace(o, ""))
      );
    }
    var n = 0,
      o = /#.*$/;
    t.widget("ui.tabs", {
      version: "1.10.3",
      delay: 300,
      options: {
        active: null,
        collapsible: !1,
        event: "click",
        heightStyle: "content",
        hide: null,
        show: null,
        activate: null,
        beforeActivate: null,
        beforeLoad: null,
        load: null,
      },
      _create: function () {
        var e = this,
          i = this.options;
        (this.running = !1),
          this.element
            .addClass("ui-tabs ui-widget ui-widget-content ui-corner-all")
            .toggleClass("ui-tabs-collapsible", i.collapsible)
            .delegate(
              ".ui-tabs-nav > li",
              "mousedown" + this.eventNamespace,
              function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault();
              }
            )
            .delegate(
              ".ui-tabs-anchor",
              "focus" + this.eventNamespace,
              function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur();
              }
            ),
          this._processTabs(),
          (i.active = this._initialActive()),
          t.isArray(i.disabled) &&
            (i.disabled = t
              .unique(
                i.disabled.concat(
                  t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                    return e.tabs.index(t);
                  })
                )
              )
              .sort()),
          !1 !== this.options.active && this.anchors.length
            ? (this.active = this._findActive(i.active))
            : (this.active = t()),
          this._refresh(),
          this.active.length && this.load(i.active);
      },
      _initialActive: function () {
        var e = this.options.active,
          i = this.options.collapsible,
          s = location.hash.substring(1);
        return (
          null === e &&
            (s &&
              this.tabs.each(function (i, n) {
                if (t(n).attr("aria-controls") === s) return (e = i), !1;
              }),
            null === e &&
              (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))),
            (null !== e && -1 !== e) || (e = !!this.tabs.length && 0)),
          !1 !== e &&
            -1 === (e = this.tabs.index(this.tabs.eq(e))) &&
            (e = !i && 0),
          !i && !1 === e && this.anchors.length && (e = 0),
          e
        );
      },
      _getCreateEventData: function () {
        return {
          tab: this.active,
          panel: this.active.length ? this._getPanelForTab(this.active) : t(),
        };
      },
      _tabKeydown: function (e) {
        var i = t(this.document[0].activeElement).closest("li"),
          s = this.tabs.index(i),
          n = !0;
        if (!this._handlePageNav(e)) {
          switch (e.keyCode) {
            case t.ui.keyCode.RIGHT:
            case t.ui.keyCode.DOWN:
              s++;
              break;
            case t.ui.keyCode.UP:
            case t.ui.keyCode.LEFT:
              (n = !1), s--;
              break;
            case t.ui.keyCode.END:
              s = this.anchors.length - 1;
              break;
            case t.ui.keyCode.HOME:
              s = 0;
              break;
            case t.ui.keyCode.SPACE:
              return (
                e.preventDefault(),
                clearTimeout(this.activating),
                void this._activate(s)
              );
            case t.ui.keyCode.ENTER:
              return (
                e.preventDefault(),
                clearTimeout(this.activating),
                void this._activate(s !== this.options.active && s)
              );
            default:
              return;
          }
          e.preventDefault(),
            clearTimeout(this.activating),
            (s = this._focusNextTab(s, n)),
            e.ctrlKey ||
              (i.attr("aria-selected", "false"),
              this.tabs.eq(s).attr("aria-selected", "true"),
              (this.activating = this._delay(function () {
                this.option("active", s);
              }, this.delay)));
        }
      },
      _panelKeydown: function (e) {
        this._handlePageNav(e) ||
          (e.ctrlKey &&
            e.keyCode === t.ui.keyCode.UP &&
            (e.preventDefault(), this.active.focus()));
      },
      _handlePageNav: function (e) {
        return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP
          ? (this._activate(this._focusNextTab(this.options.active - 1, !1)),
            !0)
          : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN
          ? (this._activate(this._focusNextTab(this.options.active + 1, !0)),
            !0)
          : void 0;
      },
      _findNextTab: function (e, i) {
        for (
          var s = this.tabs.length - 1;
          -1 !==
          t.inArray(
            (e > s && (e = 0), e < 0 && (e = s), e),
            this.options.disabled
          );

        )
          e = i ? e + 1 : e - 1;
        return e;
      },
      _focusNextTab: function (t, e) {
        return (t = this._findNextTab(t, e)), this.tabs.eq(t).focus(), t;
      },
      _setOption: function (t, e) {
        "active" !== t
          ? "disabled" !== t
            ? (this._super(t, e),
              "collapsible" === t &&
                (this.element.toggleClass("ui-tabs-collapsible", e),
                e || !1 !== this.options.active || this._activate(0)),
              "event" === t && this._setupEvents(e),
              "heightStyle" === t && this._setupHeightStyle(e))
            : this._setupDisabled(e)
          : this._activate(e);
      },
      _tabId: function (t) {
        return t.attr("aria-controls") || "ui-tabs-" + i();
      },
      _sanitizeSelector: function (t) {
        return t
          ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&")
          : "";
      },
      refresh: function () {
        var e = this.options,
          i = this.tablist.children(":has(a[href])");
        (e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
          return i.index(t);
        })),
          this._processTabs(),
          !1 !== e.active && this.anchors.length
            ? this.active.length && !t.contains(this.tablist[0], this.active[0])
              ? this.tabs.length === e.disabled.length
                ? ((e.active = !1), (this.active = t()))
                : this._activate(
                    this._findNextTab(Math.max(0, e.active - 1), !1)
                  )
              : (e.active = this.tabs.index(this.active))
            : ((e.active = !1), (this.active = t())),
          this._refresh();
      },
      _refresh: function () {
        this._setupDisabled(this.options.disabled),
          this._setupEvents(this.options.event),
          this._setupHeightStyle(this.options.heightStyle),
          this.tabs
            .not(this.active)
            .attr({ "aria-selected": "false", tabIndex: -1 }),
          this.panels
            .not(this._getPanelForTab(this.active))
            .hide()
            .attr({ "aria-expanded": "false", "aria-hidden": "true" }),
          this.active.length
            ? (this.active
                .addClass("ui-tabs-active ui-state-active")
                .attr({ "aria-selected": "true", tabIndex: 0 }),
              this._getPanelForTab(this.active)
                .show()
                .attr({ "aria-expanded": "true", "aria-hidden": "false" }))
            : this.tabs.eq(0).attr("tabIndex", 0);
      },
      _processTabs: function () {
        var e = this;
        (this.tablist = this._getList()
          .addClass(
            "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
          )
          .attr("role", "tablist")),
          (this.tabs = this.tablist
            .find("> li:has(a[href])")
            .addClass("ui-state-default ui-corner-top")
            .attr({ role: "tab", tabIndex: -1 })),
          (this.anchors = this.tabs
            .map(function () {
              return t("a", this)[0];
            })
            .addClass("ui-tabs-anchor")
            .attr({ role: "presentation", tabIndex: -1 })),
          (this.panels = t()),
          this.anchors.each(function (i, n) {
            var o,
              a,
              r,
              h = t(n).uniqueId().attr("id"),
              l = t(n).closest("li"),
              c = l.attr("aria-controls");
            s(n)
              ? ((o = n.hash), (a = e.element.find(e._sanitizeSelector(o))))
              : ((o = "#" + (r = e._tabId(l))),
                (a = e.element.find(o)).length ||
                  (a = e._createPanel(r)).insertAfter(
                    e.panels[i - 1] || e.tablist
                  ),
                a.attr("aria-live", "polite")),
              a.length && (e.panels = e.panels.add(a)),
              c && l.data("ui-tabs-aria-controls", c),
              l.attr({ "aria-controls": o.substring(1), "aria-labelledby": h }),
              a.attr("aria-labelledby", h);
          }),
          this.panels
            .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
            .attr("role", "tabpanel");
      },
      _getList: function () {
        return this.element.find("ol,ul").eq(0);
      },
      _createPanel: function (e) {
        return t("<div>")
          .attr("id", e)
          .addClass("ui-tabs-panel ui-widget-content ui-corner-bottom")
          .data("ui-tabs-destroy", !0);
      },
      _setupDisabled: function (e) {
        t.isArray(e) &&
          (e.length ? e.length === this.anchors.length && (e = !0) : (e = !1));
        for (var i, s = 0; (i = this.tabs[s]); s++)
          !0 === e || -1 !== t.inArray(s, e)
            ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true")
            : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
        this.options.disabled = e;
      },
      _setupEvents: function (e) {
        var i = {
          click: function (t) {
            t.preventDefault();
          },
        };
        e &&
          t.each(e.split(" "), function (t, e) {
            i[e] = "_eventHandler";
          }),
          this._off(this.anchors.add(this.tabs).add(this.panels)),
          this._on(this.anchors, i),
          this._on(this.tabs, { keydown: "_tabKeydown" }),
          this._on(this.panels, { keydown: "_panelKeydown" }),
          this._focusable(this.tabs),
          this._hoverable(this.tabs);
      },
      _setupHeightStyle: function (e) {
        var i,
          s = this.element.parent();
        "fill" === e
          ? ((i = s.height()),
            (i -= this.element.outerHeight() - this.element.height()),
            this.element.siblings(":visible").each(function () {
              var e = t(this),
                s = e.css("position");
              "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
            }),
            this.element
              .children()
              .not(this.panels)
              .each(function () {
                i -= t(this).outerHeight(!0);
              }),
            this.panels
              .each(function () {
                t(this).height(
                  Math.max(0, i - t(this).innerHeight() + t(this).height())
                );
              })
              .css("overflow", "auto"))
          : "auto" === e &&
            ((i = 0),
            this.panels
              .each(function () {
                i = Math.max(i, t(this).height("").height());
              })
              .height(i));
      },
      _eventHandler: function (e) {
        var i = this.options,
          s = this.active,
          n = t(e.currentTarget).closest("li"),
          o = n[0] === s[0],
          a = o && i.collapsible,
          r = a ? t() : this._getPanelForTab(n),
          h = s.length ? this._getPanelForTab(s) : t(),
          l = { oldTab: s, oldPanel: h, newTab: a ? t() : n, newPanel: r };
        e.preventDefault(),
          n.hasClass("ui-state-disabled") ||
            n.hasClass("ui-tabs-loading") ||
            this.running ||
            (o && !i.collapsible) ||
            !1 === this._trigger("beforeActivate", e, l) ||
            ((i.active = !a && this.tabs.index(n)),
            (this.active = o ? t() : n),
            this.xhr && this.xhr.abort(),
            h.length ||
              r.length ||
              t.error("jQuery UI Tabs: Mismatching fragment identifier."),
            r.length && this.load(this.tabs.index(n), e),
            this._toggle(e, l));
      },
      _toggle: function (e, i) {
        function s() {
          (o.running = !1), o._trigger("activate", e, i);
        }
        function n() {
          i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),
            a.length && o.options.show
              ? o._show(a, o.options.show, s)
              : (a.show(), s());
        }
        var o = this,
          a = i.newPanel,
          r = i.oldPanel;
        (this.running = !0),
          r.length && this.options.hide
            ? this._hide(r, this.options.hide, function () {
                i.oldTab
                  .closest("li")
                  .removeClass("ui-tabs-active ui-state-active"),
                  n();
              })
            : (i.oldTab
                .closest("li")
                .removeClass("ui-tabs-active ui-state-active"),
              r.hide(),
              n()),
          r.attr({ "aria-expanded": "false", "aria-hidden": "true" }),
          i.oldTab.attr("aria-selected", "false"),
          a.length && r.length
            ? i.oldTab.attr("tabIndex", -1)
            : a.length &&
              this.tabs
                .filter(function () {
                  return 0 === t(this).attr("tabIndex");
                })
                .attr("tabIndex", -1),
          a.attr({ "aria-expanded": "true", "aria-hidden": "false" }),
          i.newTab.attr({ "aria-selected": "true", tabIndex: 0 });
      },
      _activate: function (e) {
        var i,
          s = this._findActive(e);
        s[0] !== this.active[0] &&
          (s.length || (s = this.active),
          (i = s.find(".ui-tabs-anchor")[0]),
          this._eventHandler({
            target: i,
            currentTarget: i,
            preventDefault: t.noop,
          }));
      },
      _findActive: function (e) {
        return !1 === e ? t() : this.tabs.eq(e);
      },
      _getIndex: function (t) {
        return (
          "string" == typeof t &&
            (t = this.anchors.index(
              this.anchors.filter("[href$='" + t + "']")
            )),
          t
        );
      },
      _destroy: function () {
        this.xhr && this.xhr.abort(),
          this.element.removeClass(
            "ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"
          ),
          this.tablist
            .removeClass(
              "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all"
            )
            .removeAttr("role"),
          this.anchors
            .removeClass("ui-tabs-anchor")
            .removeAttr("role")
            .removeAttr("tabIndex")
            .removeUniqueId(),
          this.tabs.add(this.panels).each(function () {
            t.data(this, "ui-tabs-destroy")
              ? t(this).remove()
              : t(this)
                  .removeClass(
                    "ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel"
                  )
                  .removeAttr("tabIndex")
                  .removeAttr("aria-live")
                  .removeAttr("aria-busy")
                  .removeAttr("aria-selected")
                  .removeAttr("aria-labelledby")
                  .removeAttr("aria-hidden")
                  .removeAttr("aria-expanded")
                  .removeAttr("role");
          }),
          this.tabs.each(function () {
            var e = t(this),
              i = e.data("ui-tabs-aria-controls");
            i
              ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls")
              : e.removeAttr("aria-controls");
          }),
          this.panels.show(),
          "content" !== this.options.heightStyle &&
            this.panels.css("height", "");
      },
      enable: function (e) {
        var i = this.options.disabled;
        !1 !== i &&
          (void 0 === e
            ? (i = !1)
            : ((e = this._getIndex(e)),
              (i = t.isArray(i)
                ? t.map(i, function (t) {
                    return t !== e ? t : null;
                  })
                : t.map(this.tabs, function (t, i) {
                    return i !== e ? i : null;
                  }))),
          this._setupDisabled(i));
      },
      disable: function (e) {
        var i = this.options.disabled;
        if (!0 !== i) {
          if (void 0 === e) i = !0;
          else {
            if (((e = this._getIndex(e)), -1 !== t.inArray(e, i))) return;
            i = t.isArray(i) ? t.merge([e], i).sort() : [e];
          }
          this._setupDisabled(i);
        }
      },
      load: function (e, i) {
        e = this._getIndex(e);
        var n = this,
          o = this.tabs.eq(e),
          a = o.find(".ui-tabs-anchor"),
          r = this._getPanelForTab(o),
          h = { tab: o, panel: r };
        s(a[0]) ||
          ((this.xhr = t.ajax(this._ajaxSettings(a, i, h))),
          this.xhr &&
            "canceled" !== this.xhr.statusText &&
            (o.addClass("ui-tabs-loading"),
            r.attr("aria-busy", "true"),
            this.xhr
              .success(function (t) {
                setTimeout(function () {
                  r.html(t), n._trigger("load", i, h);
                }, 1);
              })
              .complete(function (t, e) {
                setTimeout(function () {
                  "abort" === e && n.panels.stop(!1, !0),
                    o.removeClass("ui-tabs-loading"),
                    r.removeAttr("aria-busy"),
                    t === n.xhr && delete n.xhr;
                }, 1);
              })));
      },
      _ajaxSettings: function (e, i, s) {
        var n = this;
        return {
          url: e.attr("href"),
          beforeSend: function (e, o) {
            return n._trigger(
              "beforeLoad",
              i,
              t.extend({ jqXHR: e, ajaxSettings: o }, s)
            );
          },
        };
      },
      _getPanelForTab: function (e) {
        var i = t(e).attr("aria-controls");
        return this.element.find(this._sanitizeSelector("#" + i));
      },
    });
  })(jQuery),
  (function (t) {
    function e(e, i) {
      var s = (e.attr("aria-describedby") || "").split(/\s+/);
      s.push(i),
        e
          .data("ui-tooltip-id", i)
          .attr("aria-describedby", t.trim(s.join(" ")));
    }
    function i(e) {
      var i = e.data("ui-tooltip-id"),
        s = (e.attr("aria-describedby") || "").split(/\s+/),
        n = t.inArray(i, s);
      -1 !== n && s.splice(n, 1),
        e.removeData("ui-tooltip-id"),
        (s = t.trim(s.join(" ")))
          ? e.attr("aria-describedby", s)
          : e.removeAttr("aria-describedby");
    }
    var s = 0;
    t.widget("ui.tooltip", {
      version: "1.10.3",
      options: {
        content: function () {
          var e = t(this).attr("title") || "";
          return t("<a>").text(e).html();
        },
        hide: !0,
        items: "[title]:not([disabled])",
        position: {
          my: "left top+15",
          at: "left bottom",
          collision: "flipfit flip",
        },
        show: !0,
        tooltipClass: null,
        track: !1,
        close: null,
        open: null,
      },
      _create: function () {
        this._on({ mouseover: "open", focusin: "open" }),
          (this.tooltips = {}),
          (this.parents = {}),
          this.options.disabled && this._disable();
      },
      _setOption: function (e, i) {
        var s = this;
        if ("disabled" === e)
          return this[i ? "_disable" : "_enable"](), void (this.options[e] = i);
        this._super(e, i),
          "content" === e &&
            t.each(this.tooltips, function (t, e) {
              s._updateContent(e);
            });
      },
      _disable: function () {
        var e = this;
        t.each(this.tooltips, function (i, s) {
          var n = t.Event("blur");
          (n.target = n.currentTarget = s[0]), e.close(n, !0);
        }),
          this.element
            .find(this.options.items)
            .addBack()
            .each(function () {
              var e = t(this);
              e.is("[title]") &&
                e.data("ui-tooltip-title", e.attr("title")).attr("title", "");
            });
      },
      _enable: function () {
        this.element
          .find(this.options.items)
          .addBack()
          .each(function () {
            var e = t(this);
            e.data("ui-tooltip-title") &&
              e.attr("title", e.data("ui-tooltip-title"));
          });
      },
      open: function (e) {
        var i = this,
          s = t(e ? e.target : this.element).closest(this.options.items);
        s.length &&
          !s.data("ui-tooltip-id") &&
          (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")),
          s.data("ui-tooltip-open", !0),
          e &&
            "mouseover" === e.type &&
            s.parents().each(function () {
              var e,
                s = t(this);
              s.data("ui-tooltip-open") &&
                (((e = t.Event("blur")).target = e.currentTarget = this),
                i.close(e, !0)),
                s.attr("title") &&
                  (s.uniqueId(),
                  (i.parents[this.id] = {
                    element: this,
                    title: s.attr("title"),
                  }),
                  s.attr("title", ""));
            }),
          this._updateContent(s, e));
      },
      _updateContent: function (t, e) {
        var i,
          s = this.options.content,
          n = this,
          o = e ? e.type : null;
        if ("string" == typeof s) return this._open(e, t, s);
        (i = s.call(t[0], function (i) {
          t.data("ui-tooltip-open") &&
            n._delay(function () {
              e && (e.type = o), this._open(e, t, i);
            });
        })) && this._open(e, t, i);
      },
      _open: function (i, s, n) {
        function o(t) {
          (l.of = t), a.is(":hidden") || a.position(l);
        }
        var a,
          r,
          h,
          l = t.extend({}, this.options.position);
        n &&
          ((a = this._find(s)).length
            ? a.find(".ui-tooltip-content").html(n)
            : (s.is("[title]") &&
                (i && "mouseover" === i.type
                  ? s.attr("title", "")
                  : s.removeAttr("title")),
              (a = this._tooltip(s)),
              e(s, a.attr("id")),
              a.find(".ui-tooltip-content").html(n),
              this.options.track && i && /^mouse/.test(i.type)
                ? (this._on(this.document, { mousemove: o }), o(i))
                : a.position(t.extend({ of: s }, this.options.position)),
              a.hide(),
              this._show(a, this.options.show),
              this.options.show &&
                this.options.show.delay &&
                (h = this.delayedShow =
                  setInterval(function () {
                    a.is(":visible") && (o(l.of), clearInterval(h));
                  }, t.fx.interval)),
              this._trigger("open", i, { tooltip: a }),
              (r = {
                keyup: function (e) {
                  if (e.keyCode === t.ui.keyCode.ESCAPE) {
                    var i = t.Event(e);
                    (i.currentTarget = s[0]), this.close(i, !0);
                  }
                },
                remove: function () {
                  this._removeTooltip(a);
                },
              }),
              (i && "mouseover" !== i.type) || (r.mouseleave = "close"),
              (i && "focusin" !== i.type) || (r.focusout = "close"),
              this._on(!0, s, r)));
      },
      close: function (e) {
        var s = this,
          n = t(e ? e.currentTarget : this.element),
          o = this._find(n);
        this.closing ||
          (clearInterval(this.delayedShow),
          n.data("ui-tooltip-title") &&
            n.attr("title", n.data("ui-tooltip-title")),
          i(n),
          o.stop(!0),
          this._hide(o, this.options.hide, function () {
            s._removeTooltip(t(this));
          }),
          n.removeData("ui-tooltip-open"),
          this._off(n, "mouseleave focusout keyup"),
          n[0] !== this.element[0] && this._off(n, "remove"),
          this._off(this.document, "mousemove"),
          e &&
            "mouseleave" === e.type &&
            t.each(this.parents, function (e, i) {
              t(i.element).attr("title", i.title), delete s.parents[e];
            }),
          (this.closing = !0),
          this._trigger("close", e, { tooltip: o }),
          (this.closing = !1));
      },
      _tooltip: function (e) {
        var i = "ui-tooltip-" + s++,
          n = t("<div>")
            .attr({ id: i, role: "tooltip" })
            .addClass(
              "ui-tooltip ui-widget ui-corner-all ui-widget-content " +
                (this.options.tooltipClass || "")
            );
        return (
          t("<div>").addClass("ui-tooltip-content").appendTo(n),
          n.appendTo(this.document[0].body),
          (this.tooltips[i] = e),
          n
        );
      },
      _find: function (e) {
        var i = e.data("ui-tooltip-id");
        return i ? t("#" + i) : t();
      },
      _removeTooltip: function (t) {
        t.remove(), delete this.tooltips[t.attr("id")];
      },
      _destroy: function () {
        var e = this;
        t.each(this.tooltips, function (i, s) {
          var n = t.Event("blur");
          (n.target = n.currentTarget = s[0]),
            e.close(n, !0),
            t("#" + i).remove(),
            s.data("ui-tooltip-title") &&
              (s.attr("title", s.data("ui-tooltip-title")),
              s.removeData("ui-tooltip-title"));
        });
      },
    });
  })(jQuery);
//# sourceMappingURL=jquery-ui.min.js.map

//  =============================================================================================

$(window).load(function () {
  const widgetData = { client_key: client_key };
  var keyNotValid =
    "Key Expired|Your key is not valid please put your valid key.";
  var popupText =
    " Could not run the widget as the subscribed limit has exceeded. You may need to <span>upgrade your subscription</span> to extend the limit.";
  var trialVersion = "Free Trial Version";

  $.ajax({
    url: baseURl + "/subscription/validate/",
    type: "POST",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(widgetData),
    success: function (response) {
      var errorMessage = "Somthing went wrong";
      if (response.data[0].is_paused) {
        var errorMessage = "Subscription Paused ";
      } else if (!response.data[0].is_widget_active) {
        var errorMessage = "Subscription expired ";
      } else {
        var errorMessage = "Somthing went wrong ";
      }

      if (response?.status && response.data[0].HasSuccess) {
        wedgitData();
        if (!response?.data[0].is_widget_purchase) {
          $(".droppbaleAre").before(
            '<div class="trial-version">\
                  <div class="trial-version-text"><span>E2E</span>Research Pvt. Ltd</div>\
                </div>'
          );
        }
      } else if (response?.status && !response.data[0]?.HasSuccess) {
        $("body").addClass("popup");
        $("body").append(
          '<div class="popup-model"><div class="popup-outer">   \
                         <div class="popup-iner"><div class="popup-header"><h5>' +
            errorMessage +
            '</h5>\
                     </div>          \
                     <div class="popup-body"><div class="exclamation"><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">\
                     <g id="esclamination-mark" transform="translate(-1.1 -0.6)">\
                       <circle id="exclamation" data-name="Ellipse 2" cx="23.5" cy="23.5" r="23.5" transform="translate(1.1 0.6)" fill="#ffbf00"/>\
                       <path id="exclamation" d="M21.6,33.1a3,3,0,1,1,3,3A2.946,2.946,0,0,1,21.6,33.1Zm.3-18a2.717,2.717,0,0,1,5.4-.6v.6L26.2,25.6a1.669,1.669,0,0,1-1.8,1.5,1.7,1.7,0,0,1-1.5-1.5Z" fill="#fff"/>\
                     </g>\
                   </svg> </div>\
                     <div class="popup-text"> ' +
            response?.data[0]?.responseText +
            "\
                      </div> </div>\
                     </div>"
        );
      } else {
        $("body").addClass("popup");
        $("body").append(
          '<div class="popup-model"><div class="popup-outer">   \
                         <div class="popup-iner"><div class="popup-header"><h5>Subscription expired</h5>\
                     </div>          \
                     <div class="popup-body"><div class="exclamation"><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">\
                     <g id="esclamination-mark" transform="translate(-1.1 -0.6)">\
                       <circle id="exclamation" data-name="Ellipse 2" cx="23.5" cy="23.5" r="23.5" transform="translate(1.1 0.6)" fill="#ffbf00"/>\
                       <path id="exclamation" d="M21.6,33.1a3,3,0,1,1,3,3A2.946,2.946,0,0,1,21.6,33.1Zm.3-18a2.717,2.717,0,0,1,5.4-.6v.6L26.2,25.6a1.669,1.669,0,0,1-1.8,1.5,1.7,1.7,0,0,1-1.5-1.5Z" fill="#fff"/>\
                     </g>\
                   </svg> </div>\
                     <div class="popup-text"> ' +
            response.detail.message +
            "\
                      </div> </div>\
                     </div>"
        );
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      if (errorThrown) {
        $("body").addClass("popup");
        $("body").append(
          '<div class="popup-model"><div class="popup-outer">   \
                           <div class="popup-iner"><div class="popup-header"><h5>' +
            keyNotValid.split("|")[0] +
            '</h5>\
                       </div>          \
                       <div class="popup-body"><div class="exclamation"><svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 47 47">\
                       <g id="esclamination-mark" transform="translate(-1.1 -0.6)">\
                         <circle id="exclamation" data-name="Ellipse 2" cx="23.5" cy="23.5" r="23.5" transform="translate(1.1 0.6)" fill="#ffbf00"/>\
                         <path id="exclamation" d="M21.6,33.1a3,3,0,1,1,3,3A2.946,2.946,0,0,1,21.6,33.1Zm.3-18a2.717,2.717,0,0,1,5.4-.6v.6L26.2,25.6a1.669,1.669,0,0,1-1.8,1.5,1.7,1.7,0,0,1-1.5-1.5Z" fill="#fff"/>\
                       </g>\
                     </svg> </div>\
                       <div class="popup-text"> ' +
            keyNotValid.split("|")[1] +
            "\
                        </div> </div>\
                       </div>"
        );
      }
    },
  });

  function wedgitData() {
    function OutputValue(data1, data2) {
      $("#resultstr").val(data1);
      $("#resultstr1").val(data2);
    }
    function init() {
      $(".mainContainer").before(
        '<div class="title-toll">' +
          title +
          '</div> <div class="respondent-info">' +
          respondentInfo +
          "</div>"
      );
      $(".mainContainer").after(
        '<div class="output-info"><b>Output</b>:' + outputInfo + "</div>"
      );

      $(".mainContainer").append(
        '<div class="droppbaleAre"><div class="popuopBlock"><div class="shoImgBlock"></div><div class="closeIcon"></div></div></div><div class="clearAll"></div><div class="origin"></div><div class="clearAll"></div>'
      ),
        imgWidth,
        parseInt(imageSizepercentage.split("%")[0]),
        imgHeight,
        parseInt(imageSizepercentage.split("%")[0]);
      var r = cuntr / (100 / parseInt(imageSizepercentage.split("%")[0]));
      parseInt(imageSizepercentage.split("%")[0]),
        r > 65 && (r = 70),
        $(".mainContainer").css({ width: stageWidth + "px" }),
        (_length = droppableAttr.length);
      for (var t = 0; t < droppableAttr.length; t++)
        (arrayContainer["Arr" + t] = []),
          $(".droppbaleAre").append(
            "<div datd-info='" +
              t +
              "' id='drops" +
              t +
              "' class='drops marginRight shadowGray'><div class='imgBlock'><img src='https://e2eresearch.com/swteam/engame/chip-game/dist/images/" +
              droppableAttr[t] +
              "' style='width:120px; height:120px;'></div></div>"
          ),
          (clickIdAttr[t] = 0);
      for (var i = 0; i < draggableAttr.length; i++)
        $(".origin").append(
          "<div id='drag" +
            i +
            "' info-data='" +
            i +
            "' class='drags marginRight'><img  src='https://e2eresearch.com/swteam/engame/chip-game/dist/images/coinIcon.png'></div>"
        );
    }
    function Adddrag(drag, drop) {
      for (
        var resultStr = "",
          dragId = drag.attr("id").split("g")[1],
          dropId = drop.attr("id").split("s")[1],
          i = 0;
        i < _length;
        i++
      )
        if (dropId == i) {
          eval("Arr" + i).push(dragId);
          break;
        }
      for (var j = 0; j < _length; j++)
        $("#drp" + j).attr("value", eval("Arr" + j).length);
      OutputValue();
    }
    function removedrag(ddrag) {
      for (
        var dragId = ddrag.attr("id").split("g")[1], z = 0;
        z < _length;
        z++
      ) {
        for (var temp = eval("Arr" + z), i = 0; i < temp.length; i++)
          temp[i] == dragId && temp.splice(i, 1);
        $("#drp" + z).attr("value", temp.length);
      }
      Output();
    }
    function Output() {
      for (var str = "", i = 0; i < _length; i++)
        str += eval("Arr" + i).length + ",";
      var subStr = str.substr(0, 2 * _length);
      OutputValue(subStr, clickIdAttr);
    }
    var droppableAttr = droppableStr.split("|"),
      draggableAttr = draggableStr.split("|"),
      arrayContainer = window,
      clickIdAttr = [],
      cuntr = 150,
      zindx = 0;
    init(),
      $(".drags").draggable({
        refreshPositions: !0,
        containment: ".mainContainer",
        cursor: "move",
        revert: "invalid",
        greedy: !0,
        tolerance: "touch",
        drag: function (r, t) {
          $(this).css({ "z-index": ++zindx }), removedrag($(this));
        },
        revert: function (r) {
          var t = $(this);
          return (
            (hasBeenDroppedBefore = t.data("hasBeenDropped")),
            (wasJustDropped = r),
            !wasJustDropped &&
              (removedrag(t),
              !hasBeenDroppedBefore ||
                (t.animate({ top: 0, left: 0 }, "slow"), !1))
          );
        },
      });
    var hitcount = 0;
    $(".drops").bind({
      click: function () {
        $(".popuopBlock").show();
        var r = $(this).find("img").attr("src");
        $(".shoImgBlock").html("<img src='" + r + "'>");
        var t = $(this).attr("datd-info");
        (clickIdAttr[t] = "1"),
          Output(),
          $(this).removeClass("shadowGray"),
          $(this).addClass("shadowGreen"),
          $(this).find(".counterVal").css({ color: "#2af947" }),
          $(this).droppable({
            drop: function (r, t) {
              $(t.draggable).data("hasBeenDropped", !0),
                t.draggable.position({
                  of: $(this),
                  my: "center",
                  at: "center",
                  using: function (r) {
                    $(this).animate(r, 300, "linear");
                  },
                }),
                Adddrag(t.draggable, $(this)),
                Output();
            },
          });

        if (hitcount == 0) {
          hitcount = 1;
          $.ajax({
            url: baseURl + "/subscription/validate/hitcount/",
            type: "POST",
            dataType: "json",
            headers: {
              "Content-Type": "application/json",
            },
            data: JSON.stringify(widgetData),
            success: function (response) {
              // console.log(response);
            },
          });
        }
      },
    }),
      $(".closeIcon").click(function () {
        $(".popuopBlock").hide();
      });
  }
});

//  =========================================================================================

/*
 * jQuery UI Touch Punch 0.2.2
 *
 * Copyright 2011, Dave Furfero
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Depends:
 *  jquery.ui.widget.js
 *  jquery.ui.mouse.js
 */
(function (b) {
  b.support.touch = "ontouchend" in document;
  if (!b.support.touch) {
    return;
  }
  var c = b.ui.mouse.prototype,
    e = c._mouseInit,
    a;
  function d(g, h) {
    if (g.originalEvent.touches.length > 1) {
      return;
    }
    g.preventDefault();
    var i = g.originalEvent.changedTouches[0],
      f = document.createEvent("MouseEvents");
    f.initMouseEvent(
      h,
      true,
      true,
      window,
      1,
      i.screenX,
      i.screenY,
      i.clientX,
      i.clientY,
      false,
      false,
      false,
      false,
      0,
      null
    );
    g.target.dispatchEvent(f);
  }
  c._touchStart = function (g) {
    var f = this;
    if (a || !f._mouseCapture(g.originalEvent.changedTouches[0])) {
      return;
    }
    a = true;
    f._touchMoved = false;
    d(g, "mouseover");
    d(g, "mousemove");
    d(g, "mousedown");
  };
  c._touchMove = function (f) {
    if (!a) {
      return;
    }
    this._touchMoved = true;
    d(f, "mousemove");
  };
  c._touchEnd = function (f) {
    if (!a) {
      return;
    }
    d(f, "mouseup");
    d(f, "mouseout");
    if (!this._touchMoved) {
      d(f, "click");
    }
    a = false;
  };
  c._mouseInit = function () {
    var f = this;
    f.element
      .bind("touchstart", b.proxy(f, "_touchStart"))
      .bind("touchmove", b.proxy(f, "_touchMove"))
      .bind("touchend", b.proxy(f, "_touchEnd"));
    e.call(f);
  };
})(jQuery);
// ===============================================================================================
