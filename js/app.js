/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var e = {
      807: (e) => {
        var t = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
        e.exports = t;
      },
      705: (e, t, s) => {
        var i = s(639).Symbol;
        e.exports = i;
      },
      239: (e, t, s) => {
        var i = s(705),
          n = s(607),
          r = s(333),
          a = i ? i.toStringTag : void 0;
        e.exports = function (e) {
          return null == e
            ? void 0 === e
              ? "[object Undefined]"
              : "[object Null]"
            : a && a in Object(e)
            ? n(e)
            : r(e);
        };
      },
      561: (e, t, s) => {
        var i = s(990),
          n = /^\s+/;
        e.exports = function (e) {
          return e ? e.slice(0, i(e) + 1).replace(n, "") : e;
        };
      },
      957: (e, t, s) => {
        var i = "object" == typeof s.g && s.g && s.g.Object === Object && s.g;
        e.exports = i;
      },
      607: (e, t, s) => {
        var i = s(705),
          n = Object.prototype,
          r = n.hasOwnProperty,
          a = n.toString,
          o = i ? i.toStringTag : void 0;
        e.exports = function (e) {
          var t = r.call(e, o),
            s = e[o];
          try {
            e[o] = void 0;
            var i = !0;
          } catch (e) {}
          var n = a.call(e);
          return i && (t ? (e[o] = s) : delete e[o]), n;
        };
      },
      333: (e) => {
        var t = Object.prototype.toString;
        e.exports = function (e) {
          return t.call(e);
        };
      },
      639: (e, t, s) => {
        var i = s(957),
          n = "object" == typeof self && self && self.Object === Object && self,
          r = i || n || Function("return this")();
        e.exports = r;
      },
      990: (e) => {
        var t = /\s/;
        e.exports = function (e) {
          for (var s = e.length; s-- && t.test(e.charAt(s)); );
          return s;
        };
      },
      279: (e, t, s) => {
        var i = s(218),
          n = s(771),
          r = s(841),
          a = Math.max,
          o = Math.min;
        e.exports = function (e, t, s) {
          var l,
            c,
            d,
            u,
            h,
            p,
            g = 0,
            m = !1,
            f = !1,
            v = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function y(t) {
            var s = l,
              i = c;
            return (l = c = void 0), (g = t), (u = e.apply(i, s));
          }
          function b(e) {
            return (g = e), (h = setTimeout(S, t)), m ? y(e) : u;
          }
          function w(e) {
            var s = e - p;
            return void 0 === p || s >= t || s < 0 || (f && e - g >= d);
          }
          function S() {
            var e = n();
            if (w(e)) return x(e);
            h = setTimeout(
              S,
              (function (e) {
                var s = t - (e - p);
                return f ? o(s, d - (e - g)) : s;
              })(e)
            );
          }
          function x(e) {
            return (h = void 0), v && l ? y(e) : ((l = c = void 0), u);
          }
          function C() {
            var e = n(),
              s = w(e);
            if (((l = arguments), (c = this), (p = e), s)) {
              if (void 0 === h) return b(p);
              if (f) return clearTimeout(h), (h = setTimeout(S, t)), y(p);
            }
            return void 0 === h && (h = setTimeout(S, t)), u;
          }
          return (
            (t = r(t) || 0),
            i(s) &&
              ((m = !!s.leading),
              (d = (f = "maxWait" in s) ? a(r(s.maxWait) || 0, t) : d),
              (v = "trailing" in s ? !!s.trailing : v)),
            (C.cancel = function () {
              void 0 !== h && clearTimeout(h),
                (g = 0),
                (l = p = c = h = void 0);
            }),
            (C.flush = function () {
              return void 0 === h ? u : x(n());
            }),
            C
          );
        };
      },
      218: (e) => {
        e.exports = function (e) {
          var t = typeof e;
          return null != e && ("object" == t || "function" == t);
        };
      },
      5: (e) => {
        e.exports = function (e) {
          return null != e && "object" == typeof e;
        };
      },
      448: (e, t, s) => {
        var i = s(239),
          n = s(5);
        e.exports = function (e) {
          return "symbol" == typeof e || (n(e) && "[object Symbol]" == i(e));
        };
      },
      771: (e, t, s) => {
        var i = s(639);
        e.exports = function () {
          return i.Date.now();
        };
      },
      493: (e, t, s) => {
        var i = s(279),
          n = s(218);
        e.exports = function (e, t, s) {
          var r = !0,
            a = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          return (
            n(s) &&
              ((r = "leading" in s ? !!s.leading : r),
              (a = "trailing" in s ? !!s.trailing : a)),
            i(e, t, { leading: r, maxWait: t, trailing: a })
          );
        };
      },
      841: (e, t, s) => {
        var i = s(561),
          n = s(218),
          r = s(448),
          a = /^[-+]0x[0-9a-f]+$/i,
          o = /^0b[01]+$/i,
          l = /^0o[0-7]+$/i,
          c = parseInt;
        e.exports = function (e) {
          if ("number" == typeof e) return e;
          if (r(e)) return NaN;
          if (n(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = n(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = i(e);
          var s = o.test(e);
          return s || l.test(e)
            ? c(e.slice(2), s ? 2 : 8)
            : a.test(e)
            ? NaN
            : +e;
        };
      },
      732: function (e) {
        e.exports = (function () {
          "use strict";
          function e() {
            return (
              (e =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var s = arguments[t];
                    for (var i in s)
                      Object.prototype.hasOwnProperty.call(s, i) &&
                        (e[i] = s[i]);
                  }
                  return e;
                }),
              e.apply(this, arguments)
            );
          }
          var t = "undefined" != typeof window,
            s =
              (t && !("onscroll" in window)) ||
              ("undefined" != typeof navigator &&
                /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)),
            i = t && "IntersectionObserver" in window,
            n = t && "classList" in document.createElement("p"),
            r = t && window.devicePixelRatio > 1,
            a = {
              elements_selector: ".lazy",
              container: s || t ? document : null,
              threshold: 300,
              thresholds: null,
              data_src: "src",
              data_srcset: "srcset",
              data_sizes: "sizes",
              data_bg: "bg",
              data_bg_hidpi: "bg-hidpi",
              data_bg_multi: "bg-multi",
              data_bg_multi_hidpi: "bg-multi-hidpi",
              data_bg_set: "bg-set",
              data_poster: "poster",
              class_applied: "applied",
              class_loading: "loading",
              class_loaded: "loaded",
              class_error: "error",
              class_entered: "entered",
              class_exited: "exited",
              unobserve_completed: !0,
              unobserve_entered: !1,
              cancel_on_exit: !0,
              callback_enter: null,
              callback_exit: null,
              callback_applied: null,
              callback_loading: null,
              callback_loaded: null,
              callback_error: null,
              callback_finish: null,
              callback_cancel: null,
              use_native: !1,
              restore_on_error: !1,
            },
            o = function (t) {
              return e({}, a, t);
            },
            l = function (e, t) {
              var s,
                i = "LazyLoad::Initialized",
                n = new e(t);
              try {
                s = new CustomEvent(i, { detail: { instance: n } });
              } catch (e) {
                (s = document.createEvent("CustomEvent")).initCustomEvent(
                  i,
                  !1,
                  !1,
                  { instance: n }
                );
              }
              window.dispatchEvent(s);
            },
            c = "src",
            d = "srcset",
            u = "sizes",
            h = "poster",
            p = "llOriginalAttrs",
            g = "data",
            m = "loading",
            f = "loaded",
            v = "applied",
            y = "error",
            b = "native",
            w = "data-",
            S = "ll-status",
            x = function (e, t) {
              return e.getAttribute(w + t);
            },
            C = function (e) {
              return x(e, S);
            },
            E = function (e, t) {
              return (function (e, t, s) {
                var i = "data-ll-status";
                null !== s ? e.setAttribute(i, s) : e.removeAttribute(i);
              })(e, 0, t);
            },
            T = function (e) {
              return E(e, null);
            },
            O = function (e) {
              return null === C(e);
            },
            L = function (e) {
              return C(e) === b;
            },
            M = [m, f, v, y],
            A = function (e, t, s, i) {
              e &&
                (void 0 === i ? (void 0 === s ? e(t) : e(t, s)) : e(t, s, i));
            },
            k = function (e, t) {
              n
                ? e.classList.add(t)
                : (e.className += (e.className ? " " : "") + t);
            },
            I = function (e, t) {
              n
                ? e.classList.remove(t)
                : (e.className = e.className
                    .replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ")
                    .replace(/^\s+/, "")
                    .replace(/\s+$/, ""));
            },
            _ = function (e) {
              return e.llTempImage;
            },
            $ = function (e, t) {
              if (t) {
                var s = t._observer;
                s && s.unobserve(e);
              }
            },
            D = function (e, t) {
              e && (e.loadingCount += t);
            },
            P = function (e, t) {
              e && (e.toLoadCount = t);
            },
            z = function (e) {
              for (var t, s = [], i = 0; (t = e.children[i]); i += 1)
                "SOURCE" === t.tagName && s.push(t);
              return s;
            },
            q = function (e, t) {
              var s = e.parentNode;
              s && "PICTURE" === s.tagName && z(s).forEach(t);
            },
            N = function (e, t) {
              z(e).forEach(t);
            },
            B = [c],
            H = [c, h],
            W = [c, d, u],
            G = [g],
            F = function (e) {
              return !!e[p];
            },
            j = function (e) {
              return e[p];
            },
            R = function (e) {
              return delete e[p];
            },
            V = function (e, t) {
              if (!F(e)) {
                var s = {};
                t.forEach(function (t) {
                  s[t] = e.getAttribute(t);
                }),
                  (e[p] = s);
              }
            },
            Y = function (e, t) {
              if (F(e)) {
                var s = j(e);
                t.forEach(function (t) {
                  !(function (e, t, s) {
                    s ? e.setAttribute(t, s) : e.removeAttribute(t);
                  })(e, t, s[t]);
                });
              }
            },
            X = function (e, t, s) {
              k(e, t.class_applied),
                E(e, v),
                s &&
                  (t.unobserve_completed && $(e, t),
                  A(t.callback_applied, e, s));
            },
            U = function (e, t, s) {
              k(e, t.class_loading),
                E(e, m),
                s && (D(s, 1), A(t.callback_loading, e, s));
            },
            K = function (e, t, s) {
              s && e.setAttribute(t, s);
            },
            Z = function (e, t) {
              K(e, u, x(e, t.data_sizes)),
                K(e, d, x(e, t.data_srcset)),
                K(e, c, x(e, t.data_src));
            },
            J = {
              IMG: function (e, t) {
                q(e, function (e) {
                  V(e, W), Z(e, t);
                }),
                  V(e, W),
                  Z(e, t);
              },
              IFRAME: function (e, t) {
                V(e, B), K(e, c, x(e, t.data_src));
              },
              VIDEO: function (e, t) {
                N(e, function (e) {
                  V(e, B), K(e, c, x(e, t.data_src));
                }),
                  V(e, H),
                  K(e, h, x(e, t.data_poster)),
                  K(e, c, x(e, t.data_src)),
                  e.load();
              },
              OBJECT: function (e, t) {
                V(e, G), K(e, g, x(e, t.data_src));
              },
            },
            Q = ["IMG", "IFRAME", "VIDEO", "OBJECT"],
            ee = function (e, t) {
              !t ||
                (function (e) {
                  return e.loadingCount > 0;
                })(t) ||
                (function (e) {
                  return e.toLoadCount > 0;
                })(t) ||
                A(e.callback_finish, t);
            },
            te = function (e, t, s) {
              e.addEventListener(t, s), (e.llEvLisnrs[t] = s);
            },
            se = function (e, t, s) {
              e.removeEventListener(t, s);
            },
            ie = function (e) {
              return !!e.llEvLisnrs;
            },
            ne = function (e) {
              if (ie(e)) {
                var t = e.llEvLisnrs;
                for (var s in t) {
                  var i = t[s];
                  se(e, s, i);
                }
                delete e.llEvLisnrs;
              }
            },
            re = function (e, t, s) {
              !(function (e) {
                delete e.llTempImage;
              })(e),
                D(s, -1),
                (function (e) {
                  e && (e.toLoadCount -= 1);
                })(s),
                I(e, t.class_loading),
                t.unobserve_completed && $(e, s);
            },
            ae = function (e, t, s) {
              var i = _(e) || e;
              ie(i) ||
                (function (e, t, s) {
                  ie(e) || (e.llEvLisnrs = {});
                  var i = "VIDEO" === e.tagName ? "loadeddata" : "load";
                  te(e, i, t), te(e, "error", s);
                })(
                  i,
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = L(t);
                      re(t, s, i),
                        k(t, s.class_loaded),
                        E(t, f),
                        A(s.callback_loaded, t, i),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  },
                  function (n) {
                    !(function (e, t, s, i) {
                      var n = L(t);
                      re(t, s, i),
                        k(t, s.class_error),
                        E(t, y),
                        A(s.callback_error, t, i),
                        s.restore_on_error && Y(t, W),
                        n || ee(s, i);
                    })(0, e, t, s),
                      ne(i);
                  }
                );
            },
            oe = function (e, t, s) {
              !(function (e) {
                return Q.indexOf(e.tagName) > -1;
              })(e)
                ? (function (e, t, s) {
                    !(function (e) {
                      e.llTempImage = document.createElement("IMG");
                    })(e),
                      ae(e, t, s),
                      (function (e) {
                        F(e) ||
                          (e[p] = { backgroundImage: e.style.backgroundImage });
                      })(e),
                      (function (e, t, s) {
                        var i = x(e, t.data_bg),
                          n = x(e, t.data_bg_hidpi),
                          a = r && n ? n : i;
                        a &&
                          ((e.style.backgroundImage = 'url("'.concat(a, '")')),
                          _(e).setAttribute(c, a),
                          U(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = x(e, t.data_bg_multi),
                          n = x(e, t.data_bg_multi_hidpi),
                          a = r && n ? n : i;
                        a && ((e.style.backgroundImage = a), X(e, t, s));
                      })(e, t, s),
                      (function (e, t, s) {
                        var i = x(e, t.data_bg_set);
                        if (i) {
                          var n = i.split("|"),
                            r = n.map(function (e) {
                              return "image-set(".concat(e, ")");
                            });
                          (e.style.backgroundImage = r.join()),
                            "" === e.style.backgroundImage &&
                              ((r = n.map(function (e) {
                                return "-webkit-image-set(".concat(e, ")");
                              })),
                              (e.style.backgroundImage = r.join())),
                            X(e, t, s);
                        }
                      })(e, t, s);
                  })(e, t, s)
                : (function (e, t, s) {
                    ae(e, t, s),
                      (function (e, t, s) {
                        var i = J[e.tagName];
                        i && (i(e, t), U(e, t, s));
                      })(e, t, s);
                  })(e, t, s);
            },
            le = function (e) {
              e.removeAttribute(c), e.removeAttribute(d), e.removeAttribute(u);
            },
            ce = function (e) {
              q(e, function (e) {
                Y(e, W);
              }),
                Y(e, W);
            },
            de = {
              IMG: ce,
              IFRAME: function (e) {
                Y(e, B);
              },
              VIDEO: function (e) {
                N(e, function (e) {
                  Y(e, B);
                }),
                  Y(e, H),
                  e.load();
              },
              OBJECT: function (e) {
                Y(e, G);
              },
            },
            ue = function (e, t) {
              (function (e) {
                var t = de[e.tagName];
                t
                  ? t(e)
                  : (function (e) {
                      if (F(e)) {
                        var t = j(e);
                        e.style.backgroundImage = t.backgroundImage;
                      }
                    })(e);
              })(e),
                (function (e, t) {
                  O(e) ||
                    L(e) ||
                    (I(e, t.class_entered),
                    I(e, t.class_exited),
                    I(e, t.class_applied),
                    I(e, t.class_loading),
                    I(e, t.class_loaded),
                    I(e, t.class_error));
                })(e, t),
                T(e),
                R(e);
            },
            he = ["IMG", "IFRAME", "VIDEO"],
            pe = function (e) {
              return e.use_native && "loading" in HTMLImageElement.prototype;
            },
            ge = function (e, t, s) {
              e.forEach(function (e) {
                return (function (e) {
                  return e.isIntersecting || e.intersectionRatio > 0;
                })(e)
                  ? (function (e, t, s, i) {
                      var n = (function (e) {
                        return M.indexOf(C(e)) >= 0;
                      })(e);
                      E(e, "entered"),
                        k(e, s.class_entered),
                        I(e, s.class_exited),
                        (function (e, t, s) {
                          t.unobserve_entered && $(e, s);
                        })(e, s, i),
                        A(s.callback_enter, e, t, i),
                        n || oe(e, s, i);
                    })(e.target, e, t, s)
                  : (function (e, t, s, i) {
                      O(e) ||
                        (k(e, s.class_exited),
                        (function (e, t, s, i) {
                          s.cancel_on_exit &&
                            (function (e) {
                              return C(e) === m;
                            })(e) &&
                            "IMG" === e.tagName &&
                            (ne(e),
                            (function (e) {
                              q(e, function (e) {
                                le(e);
                              }),
                                le(e);
                            })(e),
                            ce(e),
                            I(e, s.class_loading),
                            D(i, -1),
                            T(e),
                            A(s.callback_cancel, e, t, i));
                        })(e, t, s, i),
                        A(s.callback_exit, e, t, i));
                    })(e.target, e, t, s);
              });
            },
            me = function (e) {
              return Array.prototype.slice.call(e);
            },
            fe = function (e) {
              return e.container.querySelectorAll(e.elements_selector);
            },
            ve = function (e) {
              return (function (e) {
                return C(e) === y;
              })(e);
            },
            ye = function (e, t) {
              return (function (e) {
                return me(e).filter(O);
              })(e || fe(t));
            },
            be = function (e, s) {
              var n = o(e);
              (this._settings = n),
                (this.loadingCount = 0),
                (function (e, t) {
                  i &&
                    !pe(e) &&
                    (t._observer = new IntersectionObserver(
                      function (s) {
                        ge(s, e, t);
                      },
                      (function (e) {
                        return {
                          root: e.container === document ? null : e.container,
                          rootMargin: e.thresholds || e.threshold + "px",
                        };
                      })(e)
                    ));
                })(n, this),
                (function (e, s) {
                  t &&
                    ((s._onlineHandler = function () {
                      !(function (e, t) {
                        var s;
                        ((s = fe(e)), me(s).filter(ve)).forEach(function (t) {
                          I(t, e.class_error), T(t);
                        }),
                          t.update();
                      })(e, s);
                    }),
                    window.addEventListener("online", s._onlineHandler));
                })(n, this),
                this.update(s);
            };
          return (
            (be.prototype = {
              update: function (e) {
                var t,
                  n,
                  r = this._settings,
                  a = ye(e, r);
                P(this, a.length),
                  !s && i
                    ? pe(r)
                      ? (function (e, t, s) {
                          e.forEach(function (e) {
                            -1 !== he.indexOf(e.tagName) &&
                              (function (e, t, s) {
                                e.setAttribute("loading", "lazy"),
                                  ae(e, t, s),
                                  (function (e, t) {
                                    var s = J[e.tagName];
                                    s && s(e, t);
                                  })(e, t),
                                  E(e, b);
                              })(e, t, s);
                          }),
                            P(s, 0);
                        })(a, r, this)
                      : ((n = a),
                        (function (e) {
                          e.disconnect();
                        })((t = this._observer)),
                        (function (e, t) {
                          t.forEach(function (t) {
                            e.observe(t);
                          });
                        })(t, n))
                    : this.loadAll(a);
              },
              destroy: function () {
                this._observer && this._observer.disconnect(),
                  t &&
                    window.removeEventListener("online", this._onlineHandler),
                  fe(this._settings).forEach(function (e) {
                    R(e);
                  }),
                  delete this._observer,
                  delete this._settings,
                  delete this._onlineHandler,
                  delete this.loadingCount,
                  delete this.toLoadCount;
              },
              loadAll: function (e) {
                var t = this,
                  s = this._settings;
                ye(e, s).forEach(function (e) {
                  $(e, t), oe(e, s, t);
                });
              },
              restoreAll: function () {
                var e = this._settings;
                fe(e).forEach(function (t) {
                  ue(t, e);
                });
              },
            }),
            (be.load = function (e, t) {
              var s = o(t);
              oe(e, s);
            }),
            (be.resetStatus = function (e) {
              T(e);
            }),
            t &&
              (function (e, t) {
                if (t)
                  if (t.length) for (var s, i = 0; (s = t[i]); i += 1) l(e, s);
                  else l(e, t);
              })(be, window.lazyLoadOptions),
            be
          );
        })();
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, s), r.exports;
  }
  (s.g = (function () {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (e) {
      if ("object" == typeof window) return window;
    }
  })()),
    (() => {
      "use strict";
      function e(e) {
        this.type = e;
      }
      (e.prototype.init = function () {
        const e = this;
        (this.оbjects = []),
          (this.daClassname = "_dynamic_adapt_"),
          (this.nodes = document.querySelectorAll("[data-da]"));
        for (let e = 0; e < this.nodes.length; e++) {
          const t = this.nodes[e],
            s = t.dataset.da.trim().split(","),
            i = {};
          (i.element = t),
            (i.parent = t.parentNode),
            (i.destination = document.querySelector(s[0].trim())),
            (i.breakpoint = s[1] ? s[1].trim() : "767"),
            (i.place = s[2] ? s[2].trim() : "last"),
            (i.index = this.indexInParent(i.parent, i.element)),
            this.оbjects.push(i);
        }
        this.arraySort(this.оbjects),
          (this.mediaQueries = Array.prototype.map.call(
            this.оbjects,
            function (e) {
              return (
                "(" +
                this.type +
                "-width: " +
                e.breakpoint +
                "px)," +
                e.breakpoint
              );
            },
            this
          )),
          (this.mediaQueries = Array.prototype.filter.call(
            this.mediaQueries,
            function (e, t, s) {
              return Array.prototype.indexOf.call(s, e) === t;
            }
          ));
        for (let t = 0; t < this.mediaQueries.length; t++) {
          const s = this.mediaQueries[t],
            i = String.prototype.split.call(s, ","),
            n = window.matchMedia(i[0]),
            r = i[1],
            a = Array.prototype.filter.call(this.оbjects, function (e) {
              return e.breakpoint === r;
            });
          n.addListener(function () {
            e.mediaHandler(n, a);
          }),
            this.mediaHandler(n, a);
        }
      }),
        (e.prototype.mediaHandler = function (e, t) {
          if (e.matches)
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              (s.index = this.indexInParent(s.parent, s.element)),
                this.moveTo(s.place, s.element, s.destination);
            }
          else
            for (let e = t.length - 1; e >= 0; e--) {
              const s = t[e];
              s.element.classList.contains(this.daClassname) &&
                this.moveBack(s.parent, s.element, s.index);
            }
        }),
        (e.prototype.moveTo = function (e, t, s) {
          t.classList.add(this.daClassname),
            "last" === e || e >= s.children.length
              ? s.insertAdjacentElement("beforeend", t)
              : "first" !== e
              ? s.children[e].insertAdjacentElement("beforebegin", t)
              : s.insertAdjacentElement("afterbegin", t);
        }),
        (e.prototype.moveBack = function (e, t, s) {
          t.classList.remove(this.daClassname),
            void 0 !== e.children[s]
              ? e.children[s].insertAdjacentElement("beforebegin", t)
              : e.insertAdjacentElement("beforeend", t);
        }),
        (e.prototype.indexInParent = function (e, t) {
          const s = Array.prototype.slice.call(e.children);
          return Array.prototype.indexOf.call(s, t);
        }),
        (e.prototype.arraySort = function (e) {
          "min" === this.type
            ? Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? -1
                    : "last" === e.place || "first" === t.place
                    ? 1
                    : e.place - t.place
                  : e.breakpoint - t.breakpoint;
              })
            : Array.prototype.sort.call(e, function (e, t) {
                return e.breakpoint === t.breakpoint
                  ? e.place === t.place
                    ? 0
                    : "first" === e.place || "last" === t.place
                    ? 1
                    : "last" === e.place || "first" === t.place
                    ? -1
                    : t.place - e.place
                  : t.breakpoint - e.breakpoint;
              });
        });
      var t, i;
      new e("max").init(),
        (t = window),
        (i = function () {
          return (function (e) {
            var t = {};
            function s(i) {
              if (t[i]) return t[i].exports;
              var n = (t[i] = { i, l: !1, exports: {} });
              return (
                e[i].call(n.exports, n, n.exports, s), (n.l = !0), n.exports
              );
            }
            return (
              (s.m = e),
              (s.c = t),
              (s.d = function (e, t, i) {
                s.o(e, t) ||
                  Object.defineProperty(e, t, { enumerable: !0, get: i });
              }),
              (s.r = function (e) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (s.t = function (e, t) {
                if ((1 & t && (e = s(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                  return e;
                var i = Object.create(null);
                if (
                  (s.r(i),
                  Object.defineProperty(i, "default", {
                    enumerable: !0,
                    value: e,
                  }),
                  2 & t && "string" != typeof e)
                )
                  for (var n in e)
                    s.d(
                      i,
                      n,
                      function (t) {
                        return e[t];
                      }.bind(null, n)
                    );
                return i;
              }),
              (s.n = function (e) {
                var t =
                  e && e.__esModule
                    ? function () {
                        return e.default;
                      }
                    : function () {
                        return e;
                      };
                return s.d(t, "a", t), t;
              }),
              (s.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
              }),
              (s.p = ""),
              s((s.s = 0))
            );
          })([
            function (e, t, s) {
              s(1);
              var i = [],
                n = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                r = [
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
                a = {
                  t: "top",
                  r: "right",
                  b: "bottom",
                  l: "left",
                  c: "centered",
                };
              function o() {}
              var l = ["click", "focusin", "keydown", "input"];
              function c(e) {
                return Array.isArray(e)
                  ? e.map(c)
                  : "[object Object]" === {}.toString.call(e)
                  ? Object.keys(e).reduce(function (t, s) {
                      return (t[s] = c(e[s])), t;
                    }, {})
                  : e;
              }
              function d(e, t) {
                var s = e.calendar.querySelector(".qs-overlay"),
                  i = s && !s.classList.contains("qs-hidden");
                (t = t || new Date(e.currentYear, e.currentMonth)),
                  (e.calendar.innerHTML = [
                    u(t, e, i),
                    h(t, e, i),
                    p(e, i),
                  ].join("")),
                  i &&
                    setTimeout(function () {
                      C(!0, e);
                    }, 10);
              }
              function u(e, t, s) {
                return [
                  '<div class="qs-controls' + (s ? " qs-blur" : "") + '">',
                  '<div class="qs-arrow qs-left"></div>',
                  '<div class="qs-month-year">',
                  '<span class="qs-month">' +
                    t.months[e.getMonth()] +
                    "</span>",
                  '<span class="qs-year">' + e.getFullYear() + "</span>",
                  "</div>",
                  '<div class="qs-arrow qs-right"></div>',
                  "</div>",
                ].join("");
              }
              function h(e, t, s) {
                var i = t.currentMonth,
                  n = t.currentYear,
                  r = t.dateSelected,
                  a = t.maxDate,
                  o = t.minDate,
                  l = t.showAllDates,
                  c = t.days,
                  d = t.disabledDates,
                  u = t.disabler,
                  h = t.noWeekends,
                  p = t.startDay,
                  g = t.weekendIndices,
                  m = t.events,
                  f = t.getRange ? t.getRange() : {},
                  v = +f.start,
                  y = +f.end,
                  b = new Date(),
                  S = n === b.getFullYear() && i === b.getMonth(),
                  x = w(new Date(e).setDate(1)),
                  C = x.getDay() - p,
                  E = C < 0 ? 7 : 0;
                x.setMonth(x.getMonth() + 1), x.setDate(0);
                var T = x.getDate(),
                  O = [],
                  L = E + 7 * (((C + T) / 7) | 0);
                (L += (C + T) % 7 ? 7 : 0), 0 !== p && 0 === C && (L += 7);
                for (var M = 1; M <= L; M++) {
                  var A = (M - 1) % 7,
                    k = c[A],
                    I = M - (C >= 0 ? C : 7 + C),
                    _ = new Date(n, i, I),
                    $ = m[+_],
                    D = "qs-num",
                    P = '<span class="qs-num">' + _.getDate() + "</span>",
                    z = v && y && +_ >= v && +_ <= y;
                  I < 1 || I > T
                    ? ((D = "qs-empty qs-outside-current-month"),
                      l
                        ? ($ && (D += " qs-event"), (D += " qs-disabled"))
                        : (P = ""))
                    : (((o && _ < o) ||
                        (a && _ > a) ||
                        u(_) ||
                        d.some(function (e) {
                          return e === +_;
                        }) ||
                        (h &&
                          g.some(function (e) {
                            return e === A;
                          }))) &&
                        (D = "qs-disabled"),
                      $ && (D += " qs-event"),
                      S && I === b.getDate() && (D += " qs-current"),
                      +_ == +r && (D += " qs-active"),
                      z &&
                        ((D += " qs-range-date-" + A),
                        v !== y &&
                          (D +=
                            +_ === v
                              ? " qs-range-date-start qs-active"
                              : +_ === y
                              ? " qs-range-date-end qs-active"
                              : " qs-range-date-middle"))),
                    O.push(
                      '<div class="qs-square ' +
                        D +
                        " " +
                        k +
                        '">' +
                        P +
                        "</div>"
                    );
                }
                var q = c
                  .map(function (e) {
                    return '<div class="qs-square qs-day">' + e + "</div>";
                  })
                  .concat(O);
                if (q.length % 7 != 0)
                  throw "Calendar not constructed properly. The # of squares should be a multiple of 7.";
                return (
                  q.unshift(
                    '<div class="qs-squares' + (s ? " qs-blur" : "") + '">'
                  ),
                  q.push("</div>"),
                  q.join("")
                );
              }
              function p(e, t) {
                var s = e.overlayPlaceholder,
                  i = e.overlayButton;
                return [
                  '<div class="qs-overlay' + (t ? "" : " qs-hidden") + '">',
                  "<div>",
                  '<input class="qs-overlay-year" placeholder="' + s + '" />',
                  '<div class="qs-close">&#10005;</div>',
                  "</div>",
                  '<div class="qs-overlay-month-container">' +
                    e.overlayMonths
                      .map(function (e, t) {
                        return [
                          '<div class="qs-overlay-month" data-month-num="' +
                            t +
                            '">',
                          '<span data-month-num="' + t + '">' + e + "</span>",
                          "</div>",
                        ].join("");
                      })
                      .join("") +
                    "</div>",
                  '<div class="qs-submit qs-disabled">' + i + "</div>",
                  "</div>",
                ].join("");
              }
              function g(e, t, s) {
                var i = t.el,
                  n = t.calendar.querySelector(".qs-active"),
                  r = e.textContent,
                  a = t.sibling;
                ((i.disabled || i.readOnly) && t.respectDisabledReadOnly) ||
                  ((t.dateSelected = s
                    ? void 0
                    : new Date(t.currentYear, t.currentMonth, r)),
                  n && n.classList.remove("qs-active"),
                  s || e.classList.add("qs-active"),
                  f(i, t, s),
                  s || S(t),
                  a &&
                    (m({ instance: t, deselect: s }),
                    t.first &&
                      !a.dateSelected &&
                      ((a.currentYear = t.currentYear),
                      (a.currentMonth = t.currentMonth),
                      (a.currentMonthName = t.currentMonthName)),
                    d(t),
                    d(a)),
                  t.onSelect(t, s ? void 0 : new Date(t.dateSelected)));
              }
              function m(e) {
                var t = e.instance.first ? e.instance : e.instance.sibling,
                  s = t.sibling;
                t === e.instance
                  ? e.deselect
                    ? ((t.minDate = t.originalMinDate),
                      (s.minDate = s.originalMinDate))
                    : (s.minDate = t.dateSelected)
                  : e.deselect
                  ? ((s.maxDate = s.originalMaxDate),
                    (t.maxDate = t.originalMaxDate))
                  : (t.maxDate = s.dateSelected);
              }
              function f(e, t, s) {
                if (!t.nonInput)
                  return s
                    ? (e.value = "")
                    : t.formatter !== o
                    ? t.formatter(e, t.dateSelected, t)
                    : void (e.value = t.dateSelected.toDateString());
              }
              function v(e, t, s, i) {
                s || i
                  ? (s && (t.currentYear = +s), i && (t.currentMonth = +i))
                  : ((t.currentMonth += e.contains("qs-right") ? 1 : -1),
                    12 === t.currentMonth
                      ? ((t.currentMonth = 0), t.currentYear++)
                      : -1 === t.currentMonth &&
                        ((t.currentMonth = 11), t.currentYear--)),
                  (t.currentMonthName = t.months[t.currentMonth]),
                  d(t),
                  t.onMonthChange(t);
              }
              function y(e) {
                if (!e.noPosition) {
                  var t = e.position.top,
                    s = e.position.right;
                  if (e.position.centered)
                    return e.calendarContainer.classList.add("qs-centered");
                  var i = [e.parent, e.el, e.calendarContainer].map(function (
                      e
                    ) {
                      return e.getBoundingClientRect();
                    }),
                    n = i[0],
                    r = i[1],
                    a = i[2],
                    o =
                      r.top -
                      n.top +
                      e.parent.scrollTop -
                      (t ? a.height : -1 * r.height) +
                      "px",
                    l = r.left - n.left + (s ? r.width - a.width : 0) + "px";
                  e.calendarContainer.style.setProperty("top", o),
                    e.calendarContainer.style.setProperty("left", l);
                }
              }
              function b(e) {
                return (
                  "[object Date]" === {}.toString.call(e) &&
                  "Invalid Date" !== e.toString()
                );
              }
              function w(e) {
                if (b(e) || ("number" == typeof e && !isNaN(e))) {
                  var t = new Date(+e);
                  return new Date(t.getFullYear(), t.getMonth(), t.getDate());
                }
              }
              function S(e) {
                e.disabled ||
                  (!e.calendarContainer.classList.contains("qs-hidden") &&
                    !e.alwaysShow &&
                    (C(!0, e),
                    e.calendarContainer.classList.add("qs-hidden"),
                    e.onHide(e)));
              }
              function x(e) {
                e.disabled ||
                  (e.calendarContainer.classList.remove("qs-hidden"),
                  y(e),
                  e.onShow(e));
              }
              function C(e, t) {
                var s = t.calendar;
                if (s) {
                  var i = s.querySelector(".qs-overlay"),
                    n = i.querySelector(".qs-overlay-year"),
                    r = s.querySelector(".qs-controls"),
                    a = s.querySelector(".qs-squares");
                  e
                    ? (i.classList.add("qs-hidden"),
                      r.classList.remove("qs-blur"),
                      a.classList.remove("qs-blur"),
                      (n.value = ""))
                    : (i.classList.remove("qs-hidden"),
                      r.classList.add("qs-blur"),
                      a.classList.add("qs-blur"),
                      n.focus());
                }
              }
              function E(e, t, s, i) {
                var n = isNaN(+new Date().setFullYear(t.value || void 0)),
                  r = n ? null : t.value;
                13 === (e.which || e.keyCode) || "click" === e.type
                  ? i
                    ? v(null, s, r, i)
                    : n ||
                      t.classList.contains("qs-disabled") ||
                      v(null, s, r, i)
                  : s.calendar.contains(t) &&
                    s.calendar
                      .querySelector(".qs-submit")
                      .classList[n ? "add" : "remove"]("qs-disabled");
              }
              function T(e) {
                var t = e.type,
                  s = e.target,
                  n = s.classList,
                  r = i.filter(function (e) {
                    return e.calendar.contains(s) || e.el === s;
                  })[0],
                  a = r && r.calendar.contains(s);
                if (!(r && r.isMobile && r.disableMobile))
                  if ("click" === t) {
                    if (!r) return i.forEach(S);
                    if (r.disabled) return;
                    var o = r.calendar,
                      l = r.calendarContainer,
                      c = r.disableYearOverlay,
                      d = r.nonInput,
                      u = o.querySelector(".qs-overlay-year"),
                      h = !!o.querySelector(".qs-hidden"),
                      p = o.querySelector(".qs-month-year").contains(s),
                      m = s.dataset.monthNum;
                    if (r.noPosition && !a)
                      (l.classList.contains("qs-hidden") ? x : S)(r);
                    else if (n.contains("qs-arrow")) v(n, r);
                    else if (p || n.contains("qs-close")) c || C(!h, r);
                    else if (m) E(e, u, r, m);
                    else {
                      if (n.contains("qs-num")) {
                        var f = "SPAN" === s.nodeName ? s.parentNode : s;
                        return void (f.classList.contains("qs-active")
                          ? g(f, r, !0)
                          : f.classList.contains("qs-disabled") || g(f, r));
                      }
                      n.contains("qs-submit") && !n.contains("qs-disabled")
                        ? E(e, u, r)
                        : d && s === r.el && x(r);
                    }
                  } else if ("focusin" === t && r)
                    x(r),
                      i.forEach(function (e) {
                        e !== r && S(e);
                      });
                  else if ("keydown" === t && r && !r.disabled) {
                    var y = !r.calendar
                      .querySelector(".qs-overlay")
                      .classList.contains("qs-hidden");
                    13 === (e.which || e.keyCode) && y && a
                      ? E(e, s, r)
                      : 27 === (e.which || e.keyCode) && y && a && C(!0, r);
                  } else if ("input" === t) {
                    if (!r || !r.calendar.contains(s)) return;
                    var b = r.calendar.querySelector(".qs-submit"),
                      w = s.value
                        .split("")
                        .reduce(function (e, t) {
                          return e || "0" !== t
                            ? e + (t.match(/[0-9]/) ? t : "")
                            : "";
                        }, "")
                        .slice(0, 4);
                    (s.value = w),
                      b.classList[4 === w.length ? "remove" : "add"](
                        "qs-disabled"
                      );
                  }
              }
              function O() {
                x(this);
              }
              function L() {
                S(this);
              }
              function M(e, t) {
                var s = w(e),
                  i = this.currentYear,
                  n = this.currentMonth,
                  r = this.sibling;
                if (null == e)
                  return (
                    (this.dateSelected = void 0),
                    f(this.el, this, !0),
                    r && (m({ instance: this, deselect: !0 }), d(r)),
                    d(this),
                    this
                  );
                if (!b(e)) throw "`setDate` needs a JavaScript Date object.";
                if (
                  this.disabledDates.some(function (e) {
                    return +e == +s;
                  }) ||
                  s < this.minDate ||
                  s > this.maxDate
                )
                  throw "You can't manually set a date that's disabled.";
                return (
                  (this.dateSelected = s),
                  t &&
                    ((this.currentYear = s.getFullYear()),
                    (this.currentMonth = s.getMonth()),
                    (this.currentMonthName = this.months[s.getMonth()])),
                  f(this.el, this),
                  r && (m({ instance: this }), d(r)),
                  ((i === s.getFullYear() && n === s.getMonth()) || t) &&
                    d(this, s),
                  this
                );
              }
              function A(e) {
                return I(this, e, !0);
              }
              function k(e) {
                return I(this, e);
              }
              function I(e, t, s) {
                var i = e.dateSelected,
                  n = e.first,
                  r = e.sibling,
                  a = e.minDate,
                  o = e.maxDate,
                  l = w(t),
                  c = s ? "Min" : "Max";
                function u() {
                  return "original" + c + "Date";
                }
                function h() {
                  return c.toLowerCase() + "Date";
                }
                function p() {
                  return "set" + c;
                }
                function g() {
                  throw "Out-of-range date passed to " + p();
                }
                if (null == t)
                  (e[u()] = void 0),
                    r
                      ? ((r[u()] = void 0),
                        s
                          ? ((n && !i) || (!n && !r.dateSelected)) &&
                            ((e.minDate = void 0), (r.minDate = void 0))
                          : ((n && !r.dateSelected) || (!n && !i)) &&
                            ((e.maxDate = void 0), (r.maxDate = void 0)))
                      : (e[h()] = void 0);
                else {
                  if (!b(t)) throw "Invalid date passed to " + p();
                  r
                    ? (((n && s && l > (i || o)) ||
                        (n && !s && l < (r.dateSelected || a)) ||
                        (!n && s && l > (r.dateSelected || o)) ||
                        (!n && !s && l < (i || a))) &&
                        g(),
                      (e[u()] = l),
                      (r[u()] = l),
                      ((s && ((n && !i) || (!n && !r.dateSelected))) ||
                        (!s && ((n && !r.dateSelected) || (!n && !i)))) &&
                        ((e[h()] = l), (r[h()] = l)))
                    : (((s && l > (i || o)) || (!s && l < (i || a))) && g(),
                      (e[h()] = l));
                }
                return r && d(r), d(e), e;
              }
              function _() {
                var e = this.first ? this : this.sibling,
                  t = e.sibling;
                return { start: e.dateSelected, end: t.dateSelected };
              }
              function $() {
                var e = this.inlinePosition,
                  t = this.parent,
                  s = this.calendarContainer,
                  n = this.el,
                  r = this.sibling,
                  a = this;
                for (var o in (e &&
                  (i.some(function (e) {
                    return e !== a && e.parent === t;
                  }) ||
                    t.style.setProperty("position", null)),
                s.remove(),
                (i = i.filter(function (e) {
                  return e.el !== n;
                })),
                r && delete r.sibling,
                this))
                  delete this[o];
                i.length ||
                  l.forEach(function (e) {
                    document.removeEventListener(e, T);
                  });
              }
              e.exports = function (e, t) {
                i.length ||
                  l.forEach(function (e) {
                    document.addEventListener(e, T);
                  });
                var s = (function (e, t) {
                  var s = e;
                  if (
                    ("string" == typeof s &&
                      (s =
                        "#" === s[0]
                          ? document.getElementById(s.slice(1))
                          : document.querySelector(s)),
                    !s)
                  )
                    throw "No selector / element found.";
                  var l = (function (e, t) {
                      if (
                        i.some(function (e) {
                          return e.el === t;
                        })
                      )
                        throw "A datepicker already exists on that element.";
                      var s = c(e);
                      s.events &&
                        (s.events = s.events.reduce(function (e, t) {
                          if (!b(t))
                            throw '"options.events" must only contain valid JavaScript Date objects.';
                          return (e[+w(t)] = !0), e;
                        }, {})),
                        [
                          "startDate",
                          "dateSelected",
                          "minDate",
                          "maxDate",
                        ].forEach(function (e) {
                          var t = s[e];
                          if (t && !b(t))
                            throw (
                              '"options.' +
                              e +
                              '" needs to be a valid JavaScript Date object.'
                            );
                          s[e] = w(t);
                        });
                      var r = s.position,
                        l = s.maxDate,
                        d = s.minDate,
                        u = s.dateSelected,
                        h = s.overlayPlaceholder,
                        p = s.overlayButton,
                        g = s.startDay,
                        m = s.id;
                      if (
                        ((s.startDate = w(s.startDate || u || new Date())),
                        (s.disabledDates = (s.disabledDates || []).map(
                          function (e) {
                            var t = +w(e);
                            if (!b(e))
                              throw 'You supplied an invalid date to "options.disabledDates".';
                            if (t === +w(u))
                              throw '"disabledDates" cannot contain the same date as "dateSelected".';
                            return t;
                          }
                        )),
                        s.hasOwnProperty("id") && null == m)
                      )
                        throw "Id cannot be `null` or `undefined`";
                      if (null != m) {
                        var f = i.filter(function (e) {
                          return e.id === m;
                        });
                        if (f.length > 1)
                          throw "Only two datepickers can share an id.";
                        f.length
                          ? ((s.second = !0), (s.sibling = f[0]))
                          : (s.first = !0);
                      }
                      var v = ["tr", "tl", "br", "bl", "c"].some(function (e) {
                        return r === e;
                      });
                      if (r && !v)
                        throw '"options.position" must be one of the following: tl, tr, bl, br, or c.';
                      if (
                        ((s.position = (function (e) {
                          var t = e[0],
                            s = e[1],
                            i = {};
                          return (i[a[t]] = 1), s && (i[a[s]] = 1), i;
                        })(r || "bl")),
                        l < d)
                      )
                        throw '"maxDate" in options is less than "minDate".';
                      if (u) {
                        function x(e) {
                          throw (
                            '"dateSelected" in options is ' +
                            (e ? "less" : "greater") +
                            ' than "' +
                            (e || "max") +
                            'Date".'
                          );
                        }
                        d > u && x("min"), l < u && x();
                      }
                      if (
                        ([
                          "onSelect",
                          "onShow",
                          "onHide",
                          "onMonthChange",
                          "formatter",
                          "disabler",
                        ].forEach(function (e) {
                          "function" != typeof s[e] && (s[e] = o);
                        }),
                        [
                          "customDays",
                          "customMonths",
                          "customOverlayMonths",
                        ].forEach(function (e, t) {
                          var i = s[e],
                            n = t ? 12 : 7;
                          if (i) {
                            if (
                              !Array.isArray(i) ||
                              i.length !== n ||
                              i.some(function (e) {
                                return "string" != typeof e;
                              })
                            )
                              throw (
                                '"' +
                                e +
                                '" must be an array with ${num} strings.'
                              );
                            s[
                              t ? (t < 2 ? "months" : "overlayMonths") : "days"
                            ] = i;
                          }
                        }),
                        g && g > 0 && g < 7)
                      ) {
                        var y = (s.customDays || n).slice(),
                          S = y.splice(0, g);
                        (s.customDays = y.concat(S)),
                          (s.startDay = +g),
                          (s.weekendIndices = [y.length - 1, y.length]);
                      } else (s.startDay = 0), (s.weekendIndices = [6, 0]);
                      return (
                        "string" != typeof h && delete s.overlayPlaceholder,
                        "string" != typeof p && delete s.overlayButton,
                        s
                      );
                    })(t || { startDate: w(new Date()), position: "bl" }, s),
                    d = s === document.body,
                    u = d ? document.body : s.parentElement,
                    h = document.createElement("div"),
                    p = document.createElement("div");
                  (h.className = "qs-datepicker-container qs-hidden"),
                    (p.className = "qs-datepicker");
                  var g = {
                    el: s,
                    parent: u,
                    nonInput: "INPUT" !== s.nodeName,
                    noPosition: d,
                    position: !d && l.position,
                    startDate: l.startDate,
                    dateSelected: l.dateSelected,
                    disabledDates: l.disabledDates,
                    minDate: l.minDate,
                    maxDate: l.maxDate,
                    noWeekends: !!l.noWeekends,
                    weekendIndices: l.weekendIndices,
                    calendarContainer: h,
                    calendar: p,
                    currentMonth: (l.startDate || l.dateSelected).getMonth(),
                    currentMonthName: (l.months || r)[
                      (l.startDate || l.dateSelected).getMonth()
                    ],
                    currentYear: (l.startDate || l.dateSelected).getFullYear(),
                    events: l.events || {},
                    setDate: M,
                    remove: $,
                    setMin: A,
                    setMax: k,
                    show: O,
                    hide: L,
                    onSelect: l.onSelect,
                    onShow: l.onShow,
                    onHide: l.onHide,
                    onMonthChange: l.onMonthChange,
                    formatter: l.formatter,
                    disabler: l.disabler,
                    months: l.months || r,
                    days: l.customDays || n,
                    startDay: l.startDay,
                    overlayMonths:
                      l.overlayMonths ||
                      (l.months || r).map(function (e) {
                        return e.slice(0, 3);
                      }),
                    overlayPlaceholder: l.overlayPlaceholder || "4-digit year",
                    overlayButton: l.overlayButton || "Submit",
                    disableYearOverlay: !!l.disableYearOverlay,
                    disableMobile: !!l.disableMobile,
                    isMobile: "ontouchstart" in window,
                    alwaysShow: !!l.alwaysShow,
                    id: l.id,
                    showAllDates: !!l.showAllDates,
                    respectDisabledReadOnly: !!l.respectDisabledReadOnly,
                    first: l.first,
                    second: l.second,
                  };
                  if (l.sibling) {
                    var m = l.sibling,
                      v = g,
                      y = m.minDate || v.minDate,
                      S = m.maxDate || v.maxDate;
                    (v.sibling = m),
                      (m.sibling = v),
                      (m.minDate = y),
                      (m.maxDate = S),
                      (v.minDate = y),
                      (v.maxDate = S),
                      (m.originalMinDate = y),
                      (m.originalMaxDate = S),
                      (v.originalMinDate = y),
                      (v.originalMaxDate = S),
                      (m.getRange = _),
                      (v.getRange = _);
                  }
                  l.dateSelected && f(s, g);
                  var C = getComputedStyle(u).position;
                  return (
                    d ||
                      (C && "static" !== C) ||
                      ((g.inlinePosition = !0),
                      u.style.setProperty("position", "relative")),
                    g.inlinePosition &&
                      i.forEach(function (e) {
                        e.parent === g.parent && (e.inlinePosition = !0);
                      }),
                    i.push(g),
                    h.appendChild(p),
                    u.appendChild(h),
                    g.alwaysShow && x(g),
                    g
                  );
                })(e, t);
                if (s.second) {
                  var u = s.sibling;
                  m({ instance: s, deselect: !s.dateSelected }),
                    m({ instance: u, deselect: !u.dateSelected }),
                    d(u);
                }
                return (
                  d(s, s.startDate || s.dateSelected), s.alwaysShow && y(s), s
                );
              };
            },
            function (e, t, s) {},
          ]);
        }),
        "object" == typeof exports && "object" == typeof module
          ? (module.exports = i())
          : "function" == typeof define && define.amd
          ? define([], i)
          : "object" == typeof exports
          ? (exports.datepicker = i())
          : (t.datepicker = i());
      class n {
        constructor(e) {
          let t = {
            logging: !0,
            init: !0,
            attributeOpenButton: "data-popup",
            attributeCloseButton: "data-close",
            fixElementSelector: "[data-lp]",
            youtubeAttribute: "data-youtube",
            youtubePlaceAttribute: "data-youtube-place",
            setAutoplayYoutube: !0,
            classes: {
              popup: "popup",
              popupContent: "popup__content",
              popupActive: "popup_show",
              bodyActive: "popup-show",
            },
            focusCatch: !0,
            closeEsc: !0,
            bodyLock: !0,
            bodyLockDelay: 500,
            hashSettings: { location: !0, goHash: !0 },
            on: {
              beforeOpen: function () {},
              afterOpen: function () {},
              beforeClose: function () {},
              afterClose: function () {},
            },
          };
          (this.isOpen = !1),
            (this.targetOpen = { selector: !1, element: !1 }),
            (this.previousOpen = { selector: !1, element: !1 }),
            (this.lastClosed = { selector: !1, element: !1 }),
            (this._dataValue = !1),
            (this.hash = !1),
            (this._reopen = !1),
            (this._selectorOpen = !1),
            (this.lastFocusEl = !1),
            (this._focusEl = [
              "a[href]",
              'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
              "button:not([disabled]):not([aria-hidden])",
              "select:not([disabled]):not([aria-hidden])",
              "textarea:not([disabled]):not([aria-hidden])",
              "area[href]",
              "iframe",
              "object",
              "embed",
              "[contenteditable]",
              '[tabindex]:not([tabindex^="-"])',
            ]),
            (this.options = {
              ...t,
              ...e,
              classes: { ...t.classes, ...e?.classes },
              hashSettings: { ...t.hashSettings, ...e?.hashSettings },
              on: { ...t.on, ...e?.on },
            }),
            this.options.init && this.initPopups();
        }
        initPopups() {
          this.popupLogging("Проснулся"), this.eventsPopup();
        }
        eventsPopup() {
          document.addEventListener(
            "click",
            function (e) {
              const t = e.target.closest(
                `[${this.options.attributeOpenButton}]`
              );
              if (t)
                return (
                  e.preventDefault(),
                  (this._dataValue = t.getAttribute(
                    this.options.attributeOpenButton
                  )
                    ? t.getAttribute(this.options.attributeOpenButton)
                    : "error"),
                  "error" !== this._dataValue
                    ? (this.isOpen || (this.lastFocusEl = t),
                      (this.targetOpen.selector = `${this._dataValue}`),
                      (this._selectorOpen = !0),
                      void this.open())
                    : void this.popupLogging(
                        `Ой ой, не заполнен атрибут у ${t.classList}`
                      )
                );
              return e.target.closest(
                `[${this.options.attributeCloseButton}]`
              ) ||
                (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                  this.isOpen)
                ? (e.preventDefault(), void this.close())
                : void 0;
            }.bind(this)
          ),
            document.addEventListener(
              "keydown",
              function (e) {
                if (
                  this.options.closeEsc &&
                  27 == e.which &&
                  "Escape" === e.code &&
                  this.isOpen
                )
                  return e.preventDefault(), void this.close();
                this.options.focusCatch &&
                  9 == e.which &&
                  this.isOpen &&
                  this._focusCatch(e);
              }.bind(this)
            ),
            document.querySelector("form[data-ajax],form[data-dev]") &&
              document.addEventListener(
                "formSent",
                function (e) {
                  const t = e.detail.form.dataset.popupMessage;
                  t && this.open(t);
                }.bind(this)
              ),
            this.options.hashSettings.goHash &&
              (window.addEventListener(
                "hashchange",
                function () {
                  window.location.hash
                    ? this._openToHash()
                    : this.close(this.targetOpen.selector);
                }.bind(this)
              ),
              window.addEventListener(
                "load",
                function () {
                  window.location.hash && this._openToHash();
                }.bind(this)
              ));
        }
        open(e) {
          if (
            (e &&
              "string" == typeof e &&
              "" !== e.trim() &&
              ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
            this.isOpen && ((this._reopen = !0), this.close()),
            this._selectorOpen ||
              (this.targetOpen.selector = this.lastClosed.selector),
            this._reopen ||
              (this.previousActiveElement = document.activeElement),
            (this.targetOpen.element = document.querySelector(
              this.targetOpen.selector
            )),
            this.targetOpen.element)
          ) {
            if (
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              )
            ) {
              const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                  this.options.youtubeAttribute
                )}?rel=0&showinfo=0&autoplay=1`,
                t = document.createElement("iframe");
              t.setAttribute("allowfullscreen", "");
              const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
              t.setAttribute("allow", `${s}; encrypted-media`),
                t.setAttribute("src", e),
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                  this.targetOpen.element
                    .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                    .appendChild(t);
            }
            this.options.hashSettings.location &&
              (this._getHash(), this._setHash()),
              this.options.on.beforeOpen(this),
              this.targetOpen.element.classList.add(
                this.options.classes.popupActive
              ),
              document.body.classList.add(this.options.classes.bodyActive),
              this._reopen ? (this._reopen = !1) : d(),
              this.targetOpen.element.setAttribute("aria-hidden", "false"),
              (this.previousOpen.selector = this.targetOpen.selector),
              (this.previousOpen.element = this.targetOpen.element),
              (this._selectorOpen = !1),
              (this.isOpen = !0),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              document.dispatchEvent(
                new CustomEvent("afterPopupOpen", { detail: { popup: this } })
              ),
              this.popupLogging("Открыл попап");
          } else
            this.popupLogging(
              "Ой ой, такого попапа нет. Проверьте корректность ввода. "
            );
        }
        close(e) {
          e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            (this.previousOpen.selector = e),
            this.isOpen &&
              c &&
              (this.options.on.beforeClose(this),
              this.targetOpen.element.hasAttribute(
                this.options.youtubeAttribute
              ) &&
                this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ) &&
                (this.targetOpen.element.querySelector(
                  `[${this.options.youtubePlaceAttribute}]`
                ).innerHTML = ""),
              this.previousOpen.element.classList.remove(
                this.options.classes.popupActive
              ),
              this.previousOpen.element.setAttribute("aria-hidden", "true"),
              this._reopen ||
                (document.body.classList.remove(
                  this.options.classes.bodyActive
                ),
                d(),
                (this.isOpen = !1)),
              this._removeHash(),
              this._selectorOpen &&
                ((this.lastClosed.selector = this.previousOpen.selector),
                (this.lastClosed.element = this.previousOpen.element)),
              this.options.on.afterClose(this),
              setTimeout(() => {
                this._focusTrap();
              }, 50),
              this.popupLogging("Закрыл попап"));
        }
        _getHash() {
          this.options.hashSettings.location &&
            (this.hash = this.targetOpen.selector.includes("#")
              ? this.targetOpen.selector
              : this.targetOpen.selector.replace(".", "#"));
        }
        _openToHash() {
          let e = document.querySelector(
            `.${window.location.hash.replace("#", "")}`
          )
            ? `.${window.location.hash.replace("#", "")}`
            : document.querySelector(`${window.location.hash}`)
            ? `${window.location.hash}`
            : null;
          document.querySelector(
            `[${this.options.attributeOpenButton}="${e}"]`
          ) &&
            e &&
            this.open(e);
        }
        _setHash() {
          history.pushState("", "", this.hash);
        }
        _removeHash() {
          history.pushState("", "", window.location.href.split("#")[0]);
        }
        _focusCatch(e) {
          const t = this.targetOpen.element.querySelectorAll(this._focusEl),
            s = Array.prototype.slice.call(t),
            i = s.indexOf(document.activeElement);
          e.shiftKey &&
            0 === i &&
            (s[s.length - 1].focus(), e.preventDefault()),
            e.shiftKey ||
              i !== s.length - 1 ||
              (s[0].focus(), e.preventDefault());
        }
        _focusTrap() {
          const e = this.previousOpen.element.querySelectorAll(this._focusEl);
          !this.isOpen && this.lastFocusEl
            ? this.lastFocusEl.focus()
            : e[0].focus();
        }
        popupLogging(e) {
          this.options.logging && p(`[Попапос]: ${e}`);
        }
      }
      let r = {
        Android: function () {
          return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
          return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
          return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
          return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
          return (
            r.Android() || r.BlackBerry() || r.iOS() || r.Opera() || r.Windows()
          );
        },
      };
      let a = (e, t = 500, s = 0) => {
          e.classList.contains("_slide") ||
            (e.classList.add("_slide"),
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = `${e.offsetHeight}px`),
            e.offsetHeight,
            (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            window.setTimeout(() => {
              (e.hidden = !s),
                !s && e.style.removeProperty("height"),
                e.style.removeProperty("padding-top"),
                e.style.removeProperty("padding-bottom"),
                e.style.removeProperty("margin-top"),
                e.style.removeProperty("margin-bottom"),
                !s && e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t));
        },
        o = (e, t = 500, s = 0) => {
          if (!e.classList.contains("_slide")) {
            e.classList.add("_slide"),
              (e.hidden = !e.hidden && null),
              s && e.style.removeProperty("height");
            let i = e.offsetHeight;
            (e.style.overflow = "hidden"),
              (e.style.height = s ? `${s}px` : "0px"),
              (e.style.paddingTop = 0),
              (e.style.paddingBottom = 0),
              (e.style.marginTop = 0),
              (e.style.marginBottom = 0),
              e.offsetHeight,
              (e.style.transitionProperty = "height, margin, padding"),
              (e.style.transitionDuration = t + "ms"),
              (e.style.height = i + "px"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              window.setTimeout(() => {
                e.style.removeProperty("height"),
                  e.style.removeProperty("overflow"),
                  e.style.removeProperty("transition-duration"),
                  e.style.removeProperty("transition-property"),
                  e.classList.remove("_slide");
              }, t);
          }
        },
        l = (e, t = 500) => (e.hidden ? o(e, t) : a(e, t)),
        c = !0,
        d = (e = 500) => {
          document.documentElement.classList.contains("lock") ? u(e) : h(e);
        },
        u = (e = 500) => {
          let t = document.querySelector("body");
          if (c) {
            let s = document.querySelectorAll("[data-lp]");
            setTimeout(() => {
              for (let e = 0; e < s.length; e++) {
                s[e].style.paddingRight = "0px";
              }
              (t.style.paddingRight = "0px"),
                document.documentElement.classList.remove("lock");
            }, e),
              (c = !1),
              setTimeout(function () {
                c = !0;
              }, e);
          }
        },
        h = (e = 500) => {
          let t = document.querySelector("body");
          if (c) {
            let s = document.querySelectorAll("[data-lp]");
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight =
                window.innerWidth -
                document.querySelector(".wrapper").offsetWidth +
                "px";
            }
            (t.style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px"),
              document.documentElement.classList.add("lock"),
              (c = !1),
              setTimeout(function () {
                c = !0;
              }, e);
          }
        };
      function p(e) {
        setTimeout(() => {
          window.FLS && console.log(e);
        }, 0);
      }
      function g(e) {
        return e.filter(function (e, t, s) {
          return s.indexOf(e) === t;
        });
      }
      let m = (e, t = !1, s = 500, i = 0) => {
        const n = document.querySelector(e);
        if (n) {
          let r = "",
            a = 0;
          t &&
            ((r = "header.header"),
            (a = document.querySelector(r).offsetHeight));
          let o = {
            speedAsDuration: !0,
            speed: s,
            header: r,
            offset: i,
            easing: "easeOutQuad",
          };
          if (
            (document.documentElement.classList.contains("menu-open") &&
              (u(), document.documentElement.classList.remove("menu-open")),
            "undefined" != typeof SmoothScroll)
          )
            new SmoothScroll().animateScroll(n, "", o);
          else {
            let e = n.getBoundingClientRect().top + scrollY;
            window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
          }
          p(`[gotoBlock]: Юхуу...едем к ${e}`);
        } else p(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
      };
      class f {
        constructor(e, t = null) {
          if (
            ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
            (this.selectClasses = {
              classSelect: "select",
              classSelectBody: "select__body",
              classSelectTitle: "select__title",
              classSelectValue: "select__value",
              classSelectLabel: "select__label",
              classSelectInput: "select__input",
              classSelectText: "select__text",
              classSelectLink: "select__link",
              classSelectOptions: "select__options",
              classSelectOptionsScroll: "select__scroll",
              classSelectOption: "select__option",
              classSelectContent: "select__content",
              classSelectRow: "select__row",
              classSelectData: "select__asset",
              classSelectDisabled: "_select-disabled",
              classSelectTag: "_select-tag",
              classSelectOpen: "_select-open",
              classSelectActive: "_select-active",
              classSelectFocus: "_select-focus",
              classSelectMultiple: "_select-multiple",
              classSelectCheckBox: "_select-checkbox",
              classSelectOptionSelected: "_select-selected",
            }),
            (this._this = this),
            this.config.init)
          ) {
            const e = t
              ? document.querySelectorAll(t)
              : document.querySelectorAll("select");
            e.length
              ? (this.selectsInit(e),
                this.setLogging(`Проснулся, построил селектов: (${e.length})`))
              : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
          }
        }
        getSelectClass(e) {
          return `.${e}`;
        }
        getSelectElement(e, t) {
          return {
            originalSelect: e.querySelector("select"),
            selectElement: e.querySelector(this.getSelectClass(t)),
          };
        }
        selectsInit(e) {
          e.forEach((e, t) => {
            this.selectInit(e, t + 1);
          }),
            document.addEventListener(
              "click",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            ),
            document.addEventListener(
              "keydown",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            ),
            document.addEventListener(
              "focusin",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            ),
            document.addEventListener(
              "focusout",
              function (e) {
                this.selectsActions(e);
              }.bind(this)
            );
        }
        selectInit(e, t) {
          const s = this;
          let i = document.createElement("div");
          if (
            (i.classList.add(this.selectClasses.classSelect),
            e.parentNode.insertBefore(i, e),
            i.appendChild(e),
            (e.hidden = !0),
            t && (e.dataset.id = t),
            i.insertAdjacentHTML(
              "beforeend",
              `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
            ),
            this.selectBuild(e),
            this.getSelectPlaceholder(e) &&
              ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
              this.getSelectPlaceholder(e).label.show))
          ) {
            this.getSelectElement(
              i,
              this.selectClasses.classSelectTitle
            ).selectElement.insertAdjacentHTML(
              "afterbegin",
              `<span class="${this.selectClasses.classSelectLabel}">${
                this.getSelectPlaceholder(e).label.text
                  ? this.getSelectPlaceholder(e).label.text
                  : this.getSelectPlaceholder(e).value
              }</span>`
            );
          }
          (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
            e.addEventListener("change", function (e) {
              s.selectChange(e);
            });
        }
        selectBuild(e) {
          const t = e.parentElement;
          (t.dataset.id = e.dataset.id),
            t.classList.add(
              e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
            ),
            e.multiple
              ? t.classList.add(this.selectClasses.classSelectMultiple)
              : t.classList.remove(this.selectClasses.classSelectMultiple),
            e.hasAttribute("data-checkbox") && e.multiple
              ? t.classList.add(this.selectClasses.classSelectCheckBox)
              : t.classList.remove(this.selectClasses.classSelectCheckBox),
            this.setSelectTitleValue(t, e),
            this.setOptions(t, e),
            e.hasAttribute("data-search") && this.searchActions(t),
            e.hasAttribute("data-open") && this.selectAction(t),
            this.selectDisabled(t, e);
        }
        selectsActions(e) {
          const t = e.target,
            s = e.type;
          if (
            t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
            t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
          ) {
            const i = t.closest(".select")
                ? t.closest(".select")
                : document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${
                      t.closest(
                        this.getSelectClass(this.selectClasses.classSelectTag)
                      ).dataset.selectId
                    }"]`
                  ),
              n = this.getSelectElement(i).originalSelect;
            if ("click" === s) {
              if (!n.disabled)
                if (
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  )
                ) {
                  const e = t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ),
                    s = document.querySelector(
                      `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                    );
                  this.optionAction(i, n, s);
                } else if (
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTitle)
                  )
                )
                  this.selectAction(i);
                else if (
                  t.closest(
                    this.getSelectClass(this.selectClasses.classSelectOption)
                  )
                ) {
                  const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectOption)
                  );
                  this.optionAction(i, n, e);
                }
            } else
              "focusin" === s || "focusout" === s
                ? t.closest(
                    this.getSelectClass(this.selectClasses.classSelect)
                  ) &&
                  ("focusin" === s
                    ? i.classList.add(this.selectClasses.classSelectFocus)
                    : i.classList.remove(this.selectClasses.classSelectFocus))
                : "keydown" === s && "Escape" === e.code && this.selectsСlose();
          } else this.selectsСlose();
        }
        selectsСlose() {
          const e = document.querySelectorAll(
            `${this.getSelectClass(
              this.selectClasses.classSelect
            )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
          );
          e.length &&
            e.forEach((e) => {
              this.selectAction(e);
            });
        }
        selectAction(e) {
          const t = this.getSelectElement(e).originalSelect,
            s = this.getSelectElement(
              e,
              this.selectClasses.classSelectOptions
            ).selectElement;
          s.classList.contains("_slide") ||
            (e.classList.toggle(this.selectClasses.classSelectOpen),
            l(s, t.dataset.speed));
        }
        setSelectTitleValue(e, t) {
          const s = this.getSelectElement(
              e,
              this.selectClasses.classSelectBody
            ).selectElement,
            i = this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement;
          i && i.remove(),
            s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
        }
        getSelectTitleValue(e, t) {
          let s = this.getSelectedOptionsData(t, 2).html;
          if (
            (t.multiple &&
              t.hasAttribute("data-tags") &&
              ((s = this.getSelectedOptionsData(t)
                .elements.map(
                  (t) =>
                    `<span role="button" data-select-id="${
                      e.dataset.id
                    }" data-value="${
                      t.value
                    }" class="_select-tag">${this.getSelectElementContent(
                      t
                    )}</span>`
                )
                .join("")),
              t.dataset.tags &&
                document.querySelector(t.dataset.tags) &&
                ((document.querySelector(t.dataset.tags).innerHTML = s),
                t.hasAttribute("data-search") && (s = !1))),
            (s = s.length ? s : t.dataset.placeholder),
            this.getSelectedOptionsData(t).values.length
              ? e.classList.add(this.selectClasses.classSelectActive)
              : e.classList.remove(this.selectClasses.classSelectActive),
            t.hasAttribute("data-search"))
          )
            return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
          {
            const e =
              this.getSelectedOptionsData(t).elements.length &&
              this.getSelectedOptionsData(t).elements[0].dataset.class
                ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
                : "";
            return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
          }
        }
        getSelectElementContent(e) {
          const t = e.dataset.asset ? `${e.dataset.asset}` : "",
            s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
          let i = "";
          return (
            (i += t
              ? `<span class="${this.selectClasses.classSelectRow}">`
              : ""),
            (i += t
              ? `<span class="${this.selectClasses.classSelectData}">`
              : ""),
            (i += t ? s : ""),
            (i += t ? "</span>" : ""),
            (i += t
              ? `<span class="${this.selectClasses.classSelectText}">`
              : ""),
            (i += e.textContent),
            (i += t ? "</span>" : ""),
            (i += t ? "</span>" : ""),
            i
          );
        }
        getSelectPlaceholder(e) {
          const t = Array.from(e.options).find((e) => !e.value);
          if (t)
            return {
              value: t.textContent,
              show: t.hasAttribute("data-show"),
              label: {
                show: t.hasAttribute("data-label"),
                text: t.dataset.label,
              },
            };
        }
        getSelectedOptionsData(e, t) {
          let s = [];
          return (
            e.multiple
              ? (s = Array.from(e.options)
                  .filter((e) => e.value)
                  .filter((e) => e.selected))
              : s.push(e.options[e.selectedIndex]),
            {
              elements: s.map((e) => e),
              values: s.filter((e) => e.value).map((e) => e.value),
              html: s.map((e) => this.getSelectElementContent(e)),
            }
          );
        }
        getOptions(e) {
          let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
            s = e.dataset.scroll
              ? `style="max-height:${e.dataset.scroll}px"`
              : "",
            i = Array.from(e.options);
          if (i.length > 0) {
            let n = "";
            return (
              ((this.getSelectPlaceholder(e) &&
                !this.getSelectPlaceholder(e).show) ||
                e.multiple) &&
                (i = i.filter((e) => e.value)),
              (n += t
                ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
                : ""),
              i.forEach((t) => {
                n += this.getOption(t, e);
              }),
              (n += t ? "</div>" : ""),
              n
            );
          }
        }
        getOption(e, t) {
          const s =
              e.selected && t.multiple
                ? ` ${this.selectClasses.classSelectOptionSelected}`
                : "",
            i =
              e.selected && !t.hasAttribute("data-show-selected")
                ? "hidden"
                : "",
            n = e.dataset.class ? ` ${e.dataset.class}` : "",
            r = !!e.dataset.href && e.dataset.href,
            a = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
          let o = "";
          return (
            (o += r
              ? `<a ${a} ${i} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
              : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
            (o += this.getSelectElementContent(e)),
            (o += r ? "</a>" : "</button>"),
            o
          );
        }
        setOptions(e, t) {
          this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement.innerHTML = this.getOptions(t);
        }
        optionAction(e, t, s) {
          if (t.multiple) {
            s.classList.toggle(this.selectClasses.classSelectOptionSelected);
            this.getSelectedOptionsData(t).elements.forEach((e) => {
              e.removeAttribute("selected");
            });
            e.querySelectorAll(
              this.getSelectClass(this.selectClasses.classSelectOptionSelected)
            ).forEach((e) => {
              t.querySelector(
                `option[value="${e.dataset.value}"]`
              ).setAttribute("selected", "selected");
            });
          } else
            t.hasAttribute("data-show-selected") ||
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ) &&
                (e.querySelector(
                  `${this.getSelectClass(
                    this.selectClasses.classSelectOption
                  )}[hidden]`
                ).hidden = !1),
              (s.hidden = !0)),
              (t.value = s.hasAttribute("data-value")
                ? s.dataset.value
                : s.textContent),
              this.selectAction(e);
          this.setSelectTitleValue(e, t), this.setSelectChange(t);
        }
        selectChange(e) {
          const t = e.target;
          this.selectBuild(t), this.setSelectChange(t);
        }
        setSelectChange(e) {
          if (
            (e.hasAttribute("data-validate") && y.validateInput(e),
            e.hasAttribute("data-submit") && e.value)
          ) {
            let t = document.createElement("button");
            (t.type = "submit"),
              e.closest("form").append(t),
              t.click(),
              t.remove();
          }
          const t = e.parentElement;
          this.selectCallback(t, e);
        }
        selectDisabled(e, t) {
          t.disabled
            ? (e.classList.add(this.selectClasses.classSelectDisabled),
              (this.getSelectElement(
                e,
                this.selectClasses.classSelectTitle
              ).selectElement.disabled = !0))
            : (e.classList.remove(this.selectClasses.classSelectDisabled),
              (this.getSelectElement(
                e,
                this.selectClasses.classSelectTitle
              ).selectElement.disabled = !1));
        }
        searchActions(e) {
          this.getSelectElement(e).originalSelect;
          const t = this.getSelectElement(
              e,
              this.selectClasses.classSelectInput
            ).selectElement,
            s = this.getSelectElement(
              e,
              this.selectClasses.classSelectOptions
            ).selectElement,
            i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
            n = this;
          t.addEventListener("input", function () {
            i.forEach((e) => {
              e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
                ? (e.hidden = !1)
                : (e.hidden = !0);
            }),
              !0 === s.hidden && n.selectAction(e);
          });
        }
        selectCallback(e, t) {
          document.dispatchEvent(
            new CustomEvent("selectCallback", { detail: { select: t } })
          );
        }
        setLogging(e) {
          this.config.logging && p(`[select]: ${e}`);
        }
      }
      const v = { inputMaskModule: null, selectModule: null };
      let y = {
        getErrors(e) {
          let t = 0,
            s = e.querySelectorAll("*[data-required]");
          return (
            s.length &&
              s.forEach((e) => {
                (null === e.offsetParent && "SELECT" !== e.tagName) ||
                  e.disabled ||
                  (t += this.validateInput(e));
              }),
            t
          );
        },
        validateInput(e) {
          let t = 0;
          return (
            "email" === e.dataset.required
              ? ((e.value = e.value.replace(" ", "")),
                this.emailTest(e)
                  ? (this.addError(e), t++)
                  : this.removeError(e))
              : ("checkbox" !== e.type || e.checked) && e.value
              ? this.removeError(e)
              : (this.addError(e), t++),
            t
          );
        },
        addError(e) {
          e.classList.add("_form-error"),
            e.parentElement.classList.add("_form-error");
          let t = e.parentElement.querySelector(".form__error");
          t && e.parentElement.removeChild(t),
            e.dataset.error &&
              e.parentElement.insertAdjacentHTML(
                "beforeend",
                `<div class="form__error">${e.dataset.error}</div>`
              );
        },
        removeError(e) {
          e.classList.remove("_form-error"),
            e.parentElement.classList.remove("_form-error"),
            e.parentElement.querySelector(".form__error") &&
              e.parentElement.removeChild(
                e.parentElement.querySelector(".form__error")
              );
        },
        formClean(e) {
          e.reset(),
            setTimeout(() => {
              let t = e.querySelectorAll("input,textarea");
              for (let e = 0; e < t.length; e++) {
                const s = t[e];
                s.parentElement.classList.remove("_form-focus"),
                  s.classList.remove("_form-focus"),
                  y.removeError(s),
                  (s.value = s.dataset.placeholder);
              }
              let s = e.querySelectorAll(".checkbox__input");
              if (s.length > 0)
                for (let e = 0; e < s.length; e++) {
                  s[e].checked = !1;
                }
              if (v.selectModule) {
                let t = e.querySelectorAll(".select");
                if (t.length)
                  for (let e = 0; e < t.length; e++) {
                    const s = t[e].querySelector("select");
                    v.selectModule.selectBuild(s);
                  }
              }
            }, 0);
        },
        emailTest: (e) =>
          !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
      };
      function b(e) {
        return (
          null !== e &&
          "object" == typeof e &&
          "constructor" in e &&
          e.constructor === Object
        );
      }
      function w(e = {}, t = {}) {
        Object.keys(t).forEach((s) => {
          void 0 === e[s]
            ? (e[s] = t[s])
            : b(t[s]) &&
              b(e[s]) &&
              Object.keys(t[s]).length > 0 &&
              w(e[s], t[s]);
        });
      }
      const S = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: { blur() {}, nodeName: "" },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({ initEvent() {} }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => [],
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
      };
      function x() {
        const e = "undefined" != typeof document ? document : {};
        return w(e, S), e;
      }
      const C = {
        document: S,
        navigator: { userAgent: "" },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: "",
        },
        history: { replaceState() {}, pushState() {}, go() {}, back() {} },
        CustomEvent: function () {
          return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({ getPropertyValue: () => "" }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: (e) =>
          "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e);
        },
      };
      function E() {
        const e = "undefined" != typeof window ? window : {};
        return w(e, C), e;
      }
      class T extends Array {
        constructor(e) {
          "number" == typeof e
            ? super(e)
            : (super(...(e || [])),
              (function (e) {
                const t = e.__proto__;
                Object.defineProperty(e, "__proto__", {
                  get: () => t,
                  set(e) {
                    t.__proto__ = e;
                  },
                });
              })(this));
        }
      }
      function O(e = []) {
        const t = [];
        return (
          e.forEach((e) => {
            Array.isArray(e) ? t.push(...O(e)) : t.push(e);
          }),
          t
        );
      }
      function L(e, t) {
        return Array.prototype.filter.call(e, t);
      }
      function M(e, t) {
        const s = E(),
          i = x();
        let n = [];
        if (!t && e instanceof T) return e;
        if (!e) return new T(n);
        if ("string" == typeof e) {
          const s = e.trim();
          if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
            let e = "div";
            0 === s.indexOf("<li") && (e = "ul"),
              0 === s.indexOf("<tr") && (e = "tbody"),
              (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
              0 === s.indexOf("<tbody") && (e = "table"),
              0 === s.indexOf("<option") && (e = "select");
            const t = i.createElement(e);
            t.innerHTML = s;
            for (let e = 0; e < t.childNodes.length; e += 1)
              n.push(t.childNodes[e]);
          } else
            n = (function (e, t) {
              if ("string" != typeof e) return [e];
              const s = [],
                i = t.querySelectorAll(e);
              for (let e = 0; e < i.length; e += 1) s.push(i[e]);
              return s;
            })(e.trim(), t || i);
        } else if (e.nodeType || e === s || e === i) n.push(e);
        else if (Array.isArray(e)) {
          if (e instanceof T) return e;
          n = e;
        }
        return new T(
          (function (e) {
            const t = [];
            for (let s = 0; s < e.length; s += 1)
              -1 === t.indexOf(e[s]) && t.push(e[s]);
            return t;
          })(n)
        );
      }
      M.fn = T.prototype;
      const A = "resize scroll".split(" ");
      function k(e) {
        return function (...t) {
          if (void 0 === t[0]) {
            for (let t = 0; t < this.length; t += 1)
              A.indexOf(e) < 0 &&
                (e in this[t] ? this[t][e]() : M(this[t]).trigger(e));
            return this;
          }
          return this.on(e, ...t);
        };
      }
      k("click"),
        k("blur"),
        k("focus"),
        k("focusin"),
        k("focusout"),
        k("keyup"),
        k("keydown"),
        k("keypress"),
        k("submit"),
        k("change"),
        k("mousedown"),
        k("mousemove"),
        k("mouseup"),
        k("mouseenter"),
        k("mouseleave"),
        k("mouseout"),
        k("mouseover"),
        k("touchstart"),
        k("touchend"),
        k("touchmove"),
        k("resize"),
        k("scroll");
      const I = {
        addClass: function (...e) {
          const t = O(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.add(...t);
            }),
            this
          );
        },
        removeClass: function (...e) {
          const t = O(e.map((e) => e.split(" ")));
          return (
            this.forEach((e) => {
              e.classList.remove(...t);
            }),
            this
          );
        },
        hasClass: function (...e) {
          const t = O(e.map((e) => e.split(" ")));
          return (
            L(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
              .length > 0
          );
        },
        toggleClass: function (...e) {
          const t = O(e.map((e) => e.split(" ")));
          this.forEach((e) => {
            t.forEach((t) => {
              e.classList.toggle(t);
            });
          });
        },
        attr: function (e, t) {
          if (1 === arguments.length && "string" == typeof e)
            return this[0] ? this[0].getAttribute(e) : void 0;
          for (let s = 0; s < this.length; s += 1)
            if (2 === arguments.length) this[s].setAttribute(e, t);
            else
              for (const t in e)
                (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
          return this;
        },
        removeAttr: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
          return this;
        },
        transform: function (e) {
          for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
          return this;
        },
        transition: function (e) {
          for (let t = 0; t < this.length; t += 1)
            this[t].style.transitionDuration =
              "string" != typeof e ? `${e}ms` : e;
          return this;
        },
        on: function (...e) {
          let [t, s, i, n] = e;
          function r(e) {
            const t = e.target;
            if (!t) return;
            const n = e.target.dom7EventData || [];
            if ((n.indexOf(e) < 0 && n.unshift(e), M(t).is(s))) i.apply(t, n);
            else {
              const e = M(t).parents();
              for (let t = 0; t < e.length; t += 1)
                M(e[t]).is(s) && i.apply(e[t], n);
            }
          }
          function a(e) {
            const t = (e && e.target && e.target.dom7EventData) || [];
            t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
          }
          "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
            n || (n = !1);
          const o = t.split(" ");
          let l;
          for (let e = 0; e < this.length; e += 1) {
            const t = this[e];
            if (s)
              for (l = 0; l < o.length; l += 1) {
                const e = o[l];
                t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                  t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                  t.dom7LiveListeners[e].push({
                    listener: i,
                    proxyListener: r,
                  }),
                  t.addEventListener(e, r, n);
              }
            else
              for (l = 0; l < o.length; l += 1) {
                const e = o[l];
                t.dom7Listeners || (t.dom7Listeners = {}),
                  t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                  t.dom7Listeners[e].push({ listener: i, proxyListener: a }),
                  t.addEventListener(e, a, n);
              }
          }
          return this;
        },
        off: function (...e) {
          let [t, s, i, n] = e;
          "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
            n || (n = !1);
          const r = t.split(" ");
          for (let e = 0; e < r.length; e += 1) {
            const t = r[e];
            for (let e = 0; e < this.length; e += 1) {
              const r = this[e];
              let a;
              if (
                (!s && r.dom7Listeners
                  ? (a = r.dom7Listeners[t])
                  : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
                a && a.length)
              )
                for (let e = a.length - 1; e >= 0; e -= 1) {
                  const s = a[e];
                  (i && s.listener === i) ||
                  (i &&
                    s.listener &&
                    s.listener.dom7proxy &&
                    s.listener.dom7proxy === i)
                    ? (r.removeEventListener(t, s.proxyListener, n),
                      a.splice(e, 1))
                    : i ||
                      (r.removeEventListener(t, s.proxyListener, n),
                      a.splice(e, 1));
                }
            }
          }
          return this;
        },
        trigger: function (...e) {
          const t = E(),
            s = e[0].split(" "),
            i = e[1];
          for (let n = 0; n < s.length; n += 1) {
            const r = s[n];
            for (let s = 0; s < this.length; s += 1) {
              const n = this[s];
              if (t.CustomEvent) {
                const s = new t.CustomEvent(r, {
                  detail: i,
                  bubbles: !0,
                  cancelable: !0,
                });
                (n.dom7EventData = e.filter((e, t) => t > 0)),
                  n.dispatchEvent(s),
                  (n.dom7EventData = []),
                  delete n.dom7EventData;
              }
            }
          }
          return this;
        },
        transitionEnd: function (e) {
          const t = this;
          return (
            e &&
              t.on("transitionend", function s(i) {
                i.target === this &&
                  (e.call(this, i), t.off("transitionend", s));
              }),
            this
          );
        },
        outerWidth: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetWidth +
                parseFloat(e.getPropertyValue("margin-right")) +
                parseFloat(e.getPropertyValue("margin-left"))
              );
            }
            return this[0].offsetWidth;
          }
          return null;
        },
        outerHeight: function (e) {
          if (this.length > 0) {
            if (e) {
              const e = this.styles();
              return (
                this[0].offsetHeight +
                parseFloat(e.getPropertyValue("margin-top")) +
                parseFloat(e.getPropertyValue("margin-bottom"))
              );
            }
            return this[0].offsetHeight;
          }
          return null;
        },
        styles: function () {
          const e = E();
          return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function () {
          if (this.length > 0) {
            const e = E(),
              t = x(),
              s = this[0],
              i = s.getBoundingClientRect(),
              n = t.body,
              r = s.clientTop || n.clientTop || 0,
              a = s.clientLeft || n.clientLeft || 0,
              o = s === e ? e.scrollY : s.scrollTop,
              l = s === e ? e.scrollX : s.scrollLeft;
            return { top: i.top + o - r, left: i.left + l - a };
          }
          return null;
        },
        css: function (e, t) {
          const s = E();
          let i;
          if (1 === arguments.length) {
            if ("string" != typeof e) {
              for (i = 0; i < this.length; i += 1)
                for (const t in e) this[i].style[t] = e[t];
              return this;
            }
            if (this[0])
              return s.getComputedStyle(this[0], null).getPropertyValue(e);
          }
          if (2 === arguments.length && "string" == typeof e) {
            for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
            return this;
          }
          return this;
        },
        each: function (e) {
          return e
            ? (this.forEach((t, s) => {
                e.apply(t, [t, s]);
              }),
              this)
            : this;
        },
        html: function (e) {
          if (void 0 === e) return this[0] ? this[0].innerHTML : null;
          for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
          return this;
        },
        text: function (e) {
          if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
          for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
          return this;
        },
        is: function (e) {
          const t = E(),
            s = x(),
            i = this[0];
          let n, r;
          if (!i || void 0 === e) return !1;
          if ("string" == typeof e) {
            if (i.matches) return i.matches(e);
            if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
            if (i.msMatchesSelector) return i.msMatchesSelector(e);
            for (n = M(e), r = 0; r < n.length; r += 1)
              if (n[r] === i) return !0;
            return !1;
          }
          if (e === s) return i === s;
          if (e === t) return i === t;
          if (e.nodeType || e instanceof T) {
            for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
              if (n[r] === i) return !0;
            return !1;
          }
          return !1;
        },
        index: function () {
          let e,
            t = this[0];
          if (t) {
            for (e = 0; null !== (t = t.previousSibling); )
              1 === t.nodeType && (e += 1);
            return e;
          }
        },
        eq: function (e) {
          if (void 0 === e) return this;
          const t = this.length;
          if (e > t - 1) return M([]);
          if (e < 0) {
            const s = t + e;
            return M(s < 0 ? [] : [this[s]]);
          }
          return M([this[e]]);
        },
        append: function (...e) {
          let t;
          const s = x();
          for (let i = 0; i < e.length; i += 1) {
            t = e[i];
            for (let e = 0; e < this.length; e += 1)
              if ("string" == typeof t) {
                const i = s.createElement("div");
                for (i.innerHTML = t; i.firstChild; )
                  this[e].appendChild(i.firstChild);
              } else if (t instanceof T)
                for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
              else this[e].appendChild(t);
          }
          return this;
        },
        prepend: function (e) {
          const t = x();
          let s, i;
          for (s = 0; s < this.length; s += 1)
            if ("string" == typeof e) {
              const n = t.createElement("div");
              for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
                this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
            } else if (e instanceof T)
              for (i = 0; i < e.length; i += 1)
                this[s].insertBefore(e[i], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
          return this;
        },
        next: function (e) {
          return this.length > 0
            ? e
              ? this[0].nextElementSibling &&
                M(this[0].nextElementSibling).is(e)
                ? M([this[0].nextElementSibling])
                : M([])
              : this[0].nextElementSibling
              ? M([this[0].nextElementSibling])
              : M([])
            : M([]);
        },
        nextAll: function (e) {
          const t = [];
          let s = this[0];
          if (!s) return M([]);
          for (; s.nextElementSibling; ) {
            const i = s.nextElementSibling;
            e ? M(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return M(t);
        },
        prev: function (e) {
          if (this.length > 0) {
            const t = this[0];
            return e
              ? t.previousElementSibling && M(t.previousElementSibling).is(e)
                ? M([t.previousElementSibling])
                : M([])
              : t.previousElementSibling
              ? M([t.previousElementSibling])
              : M([]);
          }
          return M([]);
        },
        prevAll: function (e) {
          const t = [];
          let s = this[0];
          if (!s) return M([]);
          for (; s.previousElementSibling; ) {
            const i = s.previousElementSibling;
            e ? M(i).is(e) && t.push(i) : t.push(i), (s = i);
          }
          return M(t);
        },
        parent: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1)
            null !== this[s].parentNode &&
              (e
                ? M(this[s].parentNode).is(e) && t.push(this[s].parentNode)
                : t.push(this[s].parentNode));
          return M(t);
        },
        parents: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            let i = this[s].parentNode;
            for (; i; )
              e ? M(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
          }
          return M(t);
        },
        closest: function (e) {
          let t = this;
          return void 0 === e
            ? M([])
            : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) t.push(i[e]);
          }
          return M(t);
        },
        children: function (e) {
          const t = [];
          for (let s = 0; s < this.length; s += 1) {
            const i = this[s].children;
            for (let s = 0; s < i.length; s += 1)
              (e && !M(i[s]).is(e)) || t.push(i[s]);
          }
          return M(t);
        },
        filter: function (e) {
          return M(L(this, e));
        },
        remove: function () {
          for (let e = 0; e < this.length; e += 1)
            this[e].parentNode && this[e].parentNode.removeChild(this[e]);
          return this;
        },
      };
      Object.keys(I).forEach((e) => {
        Object.defineProperty(M.fn, e, { value: I[e], writable: !0 });
      });
      const _ = M;
      function $(e, t = 0) {
        return setTimeout(e, t);
      }
      function D() {
        return Date.now();
      }
      function P(e, t = "x") {
        const s = E();
        let i, n, r;
        const a = (function (e) {
          const t = E();
          let s;
          return (
            t.getComputedStyle && (s = t.getComputedStyle(e, null)),
            !s && e.currentStyle && (s = e.currentStyle),
            s || (s = e.style),
            s
          );
        })(e);
        return (
          s.WebKitCSSMatrix
            ? ((n = a.transform || a.webkitTransform),
              n.split(",").length > 6 &&
                (n = n
                  .split(", ")
                  .map((e) => e.replace(",", "."))
                  .join(", ")),
              (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
            : ((r =
                a.MozTransform ||
                a.OTransform ||
                a.MsTransform ||
                a.msTransform ||
                a.transform ||
                a
                  .getPropertyValue("transform")
                  .replace("translate(", "matrix(1, 0, 0, 1,")),
              (i = r.toString().split(","))),
          "x" === t &&
            (n = s.WebKitCSSMatrix
              ? r.m41
              : 16 === i.length
              ? parseFloat(i[12])
              : parseFloat(i[4])),
          "y" === t &&
            (n = s.WebKitCSSMatrix
              ? r.m42
              : 16 === i.length
              ? parseFloat(i[13])
              : parseFloat(i[5])),
          n || 0
        );
      }
      function z(e) {
        return (
          "object" == typeof e &&
          null !== e &&
          e.constructor &&
          "Object" === Object.prototype.toString.call(e).slice(8, -1)
        );
      }
      function q(...e) {
        const t = Object(e[0]),
          s = ["__proto__", "constructor", "prototype"];
        for (let n = 1; n < e.length; n += 1) {
          const r = e[n];
          if (
            null != r &&
            ((i = r),
            !("undefined" != typeof window && void 0 !== window.HTMLElement
              ? i instanceof HTMLElement
              : i && (1 === i.nodeType || 11 === i.nodeType)))
          ) {
            const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
            for (let s = 0, i = e.length; s < i; s += 1) {
              const i = e[s],
                n = Object.getOwnPropertyDescriptor(r, i);
              void 0 !== n &&
                n.enumerable &&
                (z(t[i]) && z(r[i])
                  ? r[i].__swiper__
                    ? (t[i] = r[i])
                    : q(t[i], r[i])
                  : !z(t[i]) && z(r[i])
                  ? ((t[i] = {}),
                    r[i].__swiper__ ? (t[i] = r[i]) : q(t[i], r[i]))
                  : (t[i] = r[i]));
            }
          }
        }
        var i;
        return t;
      }
      function N(e, t, s) {
        e.style.setProperty(t, s);
      }
      function B({ swiper: e, targetPosition: t, side: s }) {
        const i = E(),
          n = -e.translate;
        let r,
          a = null;
        const o = e.params.speed;
        (e.wrapperEl.style.scrollSnapType = "none"),
          i.cancelAnimationFrame(e.cssModeFrameID);
        const l = t > n ? "next" : "prev",
          c = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
          d = () => {
            (r = new Date().getTime()), null === a && (a = r);
            const l = Math.max(Math.min((r - a) / o, 1), 0),
              u = 0.5 - Math.cos(l * Math.PI) / 2;
            let h = n + u * (t - n);
            if ((c(h, t) && (h = t), e.wrapperEl.scrollTo({ [s]: h }), c(h, t)))
              return (
                (e.wrapperEl.style.overflow = "hidden"),
                (e.wrapperEl.style.scrollSnapType = ""),
                setTimeout(() => {
                  (e.wrapperEl.style.overflow = ""),
                    e.wrapperEl.scrollTo({ [s]: h });
                }),
                void i.cancelAnimationFrame(e.cssModeFrameID)
              );
            e.cssModeFrameID = i.requestAnimationFrame(d);
          };
        d();
      }
      let H, W, G;
      function F() {
        return (
          H ||
            (H = (function () {
              const e = E(),
                t = x();
              return {
                smoothScroll:
                  t.documentElement &&
                  "scrollBehavior" in t.documentElement.style,
                touch: !!(
                  "ontouchstart" in e ||
                  (e.DocumentTouch && t instanceof e.DocumentTouch)
                ),
                passiveListener: (function () {
                  let t = !1;
                  try {
                    const s = Object.defineProperty({}, "passive", {
                      get() {
                        t = !0;
                      },
                    });
                    e.addEventListener("testPassiveListener", null, s);
                  } catch (e) {}
                  return t;
                })(),
                gestures: "ongesturestart" in e,
              };
            })()),
          H
        );
      }
      function j(e = {}) {
        return (
          W ||
            (W = (function ({ userAgent: e } = {}) {
              const t = F(),
                s = E(),
                i = s.navigator.platform,
                n = e || s.navigator.userAgent,
                r = { ios: !1, android: !1 },
                a = s.screen.width,
                o = s.screen.height,
                l = n.match(/(Android);?[\s\/]+([\d.]+)?/);
              let c = n.match(/(iPad).*OS\s([\d_]+)/);
              const d = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
              let p = "MacIntel" === i;
              return (
                !c &&
                  p &&
                  t.touch &&
                  [
                    "1024x1366",
                    "1366x1024",
                    "834x1194",
                    "1194x834",
                    "834x1112",
                    "1112x834",
                    "768x1024",
                    "1024x768",
                    "820x1180",
                    "1180x820",
                    "810x1080",
                    "1080x810",
                  ].indexOf(`${a}x${o}`) >= 0 &&
                  ((c = n.match(/(Version)\/([\d.]+)/)),
                  c || (c = [0, 1, "13_0_0"]),
                  (p = !1)),
                l && !h && ((r.os = "android"), (r.android = !0)),
                (c || u || d) && ((r.os = "ios"), (r.ios = !0)),
                r
              );
            })(e)),
          W
        );
      }
      function R() {
        return (
          G ||
            (G = (function () {
              const e = E();
              return {
                isSafari: (function () {
                  const t = e.navigator.userAgent.toLowerCase();
                  return (
                    t.indexOf("safari") >= 0 &&
                    t.indexOf("chrome") < 0 &&
                    t.indexOf("android") < 0
                  );
                })(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                  e.navigator.userAgent
                ),
              };
            })()),
          G
        );
      }
      const V = {
        on(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const n = s ? "unshift" : "push";
          return (
            e.split(" ").forEach((e) => {
              i.eventsListeners[e] || (i.eventsListeners[e] = []),
                i.eventsListeners[e][n](t);
            }),
            i
          );
        },
        once(e, t, s) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          function n(...s) {
            i.off(e, n),
              n.__emitterProxy && delete n.__emitterProxy,
              t.apply(i, s);
          }
          return (n.__emitterProxy = t), i.on(e, n, s);
        },
        onAny(e, t) {
          const s = this;
          if (!s.eventsListeners || s.destroyed) return s;
          if ("function" != typeof e) return s;
          const i = t ? "unshift" : "push";
          return (
            s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
          );
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const s = t.eventsAnyListeners.indexOf(e);
          return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off(e, t) {
          const s = this;
          return !s.eventsListeners || s.destroyed
            ? s
            : s.eventsListeners
            ? (e.split(" ").forEach((e) => {
                void 0 === t
                  ? (s.eventsListeners[e] = [])
                  : s.eventsListeners[e] &&
                    s.eventsListeners[e].forEach((i, n) => {
                      (i === t ||
                        (i.__emitterProxy && i.__emitterProxy === t)) &&
                        s.eventsListeners[e].splice(n, 1);
                    });
              }),
              s)
            : s;
        },
        emit(...e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsListeners) return t;
          let s, i, n;
          "string" == typeof e[0] || Array.isArray(e[0])
            ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
            : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
            i.unshift(n);
          return (
            (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
              t.eventsAnyListeners &&
                t.eventsAnyListeners.length &&
                t.eventsAnyListeners.forEach((t) => {
                  t.apply(n, [e, ...i]);
                }),
                t.eventsListeners &&
                  t.eventsListeners[e] &&
                  t.eventsListeners[e].forEach((e) => {
                    e.apply(n, i);
                  });
            }),
            t
          );
        },
      };
      const Y = {
        updateSize: function () {
          const e = this;
          let t, s;
          const i = e.$el;
          (t =
            void 0 !== e.params.width && null !== e.params.width
              ? e.params.width
              : i[0].clientWidth),
            (s =
              void 0 !== e.params.height && null !== e.params.height
                ? e.params.height
                : i[0].clientHeight),
            (0 === t && e.isHorizontal()) ||
              (0 === s && e.isVertical()) ||
              ((t =
                t -
                parseInt(i.css("padding-left") || 0, 10) -
                parseInt(i.css("padding-right") || 0, 10)),
              (s =
                s -
                parseInt(i.css("padding-top") || 0, 10) -
                parseInt(i.css("padding-bottom") || 0, 10)),
              Number.isNaN(t) && (t = 0),
              Number.isNaN(s) && (s = 0),
              Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s,
              }));
        },
        updateSlides: function () {
          const e = this;
          function t(t) {
            return e.isHorizontal()
              ? t
              : {
                  width: "height",
                  "margin-top": "margin-left",
                  "margin-bottom ": "margin-right",
                  "margin-left": "margin-top",
                  "margin-right": "margin-bottom",
                  "padding-left": "padding-top",
                  "padding-right": "padding-bottom",
                  marginRight: "marginBottom",
                }[t];
          }
          function s(e, s) {
            return parseFloat(e.getPropertyValue(t(s)) || 0);
          }
          const i = e.params,
            { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: o } = e,
            l = e.virtual && i.virtual.enabled,
            c = l ? e.virtual.slides.length : e.slides.length,
            d = n.children(`.${e.params.slideClass}`),
            u = l ? e.virtual.slides.length : d.length;
          let h = [];
          const p = [],
            g = [];
          let m = i.slidesOffsetBefore;
          "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
          let f = i.slidesOffsetAfter;
          "function" == typeof f && (f = i.slidesOffsetAfter.call(e));
          const v = e.snapGrid.length,
            y = e.slidesGrid.length;
          let b = i.spaceBetween,
            w = -m,
            S = 0,
            x = 0;
          if (void 0 === r) return;
          "string" == typeof b &&
            b.indexOf("%") >= 0 &&
            (b = (parseFloat(b.replace("%", "")) / 100) * r),
            (e.virtualSize = -b),
            a
              ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
              : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
            i.centeredSlides &&
              i.cssMode &&
              (N(e.wrapperEl, "--swiper-centered-offset-before", ""),
              N(e.wrapperEl, "--swiper-centered-offset-after", ""));
          const C = i.grid && i.grid.rows > 1 && e.grid;
          let E;
          C && e.grid.initSlides(u);
          const T =
            "auto" === i.slidesPerView &&
            i.breakpoints &&
            Object.keys(i.breakpoints).filter(
              (e) => void 0 !== i.breakpoints[e].slidesPerView
            ).length > 0;
          for (let n = 0; n < u; n += 1) {
            E = 0;
            const a = d.eq(n);
            if (
              (C && e.grid.updateSlide(n, a, u, t), "none" !== a.css("display"))
            ) {
              if ("auto" === i.slidesPerView) {
                T && (d[n].style[t("width")] = "");
                const r = getComputedStyle(a[0]),
                  o = a[0].style.transform,
                  l = a[0].style.webkitTransform;
                if (
                  (o && (a[0].style.transform = "none"),
                  l && (a[0].style.webkitTransform = "none"),
                  i.roundLengths)
                )
                  E = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
                else {
                  const e = s(r, "width"),
                    t = s(r, "padding-left"),
                    i = s(r, "padding-right"),
                    n = s(r, "margin-left"),
                    o = s(r, "margin-right"),
                    l = r.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) E = e + n + o;
                  else {
                    const { clientWidth: s, offsetWidth: r } = a[0];
                    E = e + t + i + n + o + (r - s);
                  }
                }
                o && (a[0].style.transform = o),
                  l && (a[0].style.webkitTransform = l),
                  i.roundLengths && (E = Math.floor(E));
              } else
                (E = (r - (i.slidesPerView - 1) * b) / i.slidesPerView),
                  i.roundLengths && (E = Math.floor(E)),
                  d[n] && (d[n].style[t("width")] = `${E}px`);
              d[n] && (d[n].swiperSlideSize = E),
                g.push(E),
                i.centeredSlides
                  ? ((w = w + E / 2 + S / 2 + b),
                    0 === S && 0 !== n && (w = w - r / 2 - b),
                    0 === n && (w = w - r / 2 - b),
                    Math.abs(w) < 0.001 && (w = 0),
                    i.roundLengths && (w = Math.floor(w)),
                    x % i.slidesPerGroup == 0 && h.push(w),
                    p.push(w))
                  : (i.roundLengths && (w = Math.floor(w)),
                    (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                      e.params.slidesPerGroup ==
                      0 && h.push(w),
                    p.push(w),
                    (w = w + E + b)),
                (e.virtualSize += E + b),
                (S = E),
                (x += 1);
            }
          }
          if (
            ((e.virtualSize = Math.max(e.virtualSize, r) + f),
            a &&
              o &&
              ("slide" === i.effect || "coverflow" === i.effect) &&
              n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
            i.setWrapperSize &&
              n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
            C && e.grid.updateWrapperSize(E, h, t),
            !i.centeredSlides)
          ) {
            const t = [];
            for (let s = 0; s < h.length; s += 1) {
              let n = h[s];
              i.roundLengths && (n = Math.floor(n)),
                h[s] <= e.virtualSize - r && t.push(n);
            }
            (h = t),
              Math.floor(e.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 &&
                h.push(e.virtualSize - r);
          }
          if ((0 === h.length && (h = [0]), 0 !== i.spaceBetween)) {
            const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
            d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
              [s]: `${b}px`,
            });
          }
          if (i.centeredSlides && i.centeredSlidesBounds) {
            let e = 0;
            g.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
              (e -= i.spaceBetween);
            const t = e - r;
            h = h.map((e) => (e < 0 ? -m : e > t ? t + f : e));
          }
          if (i.centerInsufficientSlides) {
            let e = 0;
            if (
              (g.forEach((t) => {
                e += t + (i.spaceBetween ? i.spaceBetween : 0);
              }),
              (e -= i.spaceBetween),
              e < r)
            ) {
              const t = (r - e) / 2;
              h.forEach((e, s) => {
                h[s] = e - t;
              }),
                p.forEach((e, s) => {
                  p[s] = e + t;
                });
            }
          }
          if (
            (Object.assign(e, {
              slides: d,
              snapGrid: h,
              slidesGrid: p,
              slidesSizesGrid: g,
            }),
            i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
          ) {
            N(e.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"),
              N(
                e.wrapperEl,
                "--swiper-centered-offset-after",
                e.size / 2 - g[g.length - 1] / 2 + "px"
              );
            const t = -e.snapGrid[0],
              s = -e.slidesGrid[0];
            (e.snapGrid = e.snapGrid.map((e) => e + t)),
              (e.slidesGrid = e.slidesGrid.map((e) => e + s));
          }
          if (
            (u !== c && e.emit("slidesLengthChange"),
            h.length !== v &&
              (e.params.watchOverflow && e.checkOverflow(),
              e.emit("snapGridLengthChange")),
            p.length !== y && e.emit("slidesGridLengthChange"),
            i.watchSlidesProgress && e.updateSlidesOffset(),
            !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
          ) {
            const t = `${i.containerModifierClass}backface-hidden`,
              s = e.$el.hasClass(t);
            u <= i.maxBackfaceHiddenSlides
              ? s || e.$el.addClass(t)
              : s && e.$el.removeClass(t);
          }
        },
        updateAutoHeight: function (e) {
          const t = this,
            s = [],
            i = t.virtual && t.params.virtual.enabled;
          let n,
            r = 0;
          "number" == typeof e
            ? t.setTransition(e)
            : !0 === e && t.setTransition(t.params.speed);
          const a = (e) =>
            i
              ? t.slides.filter(
                  (t) =>
                    parseInt(t.getAttribute("data-swiper-slide-index"), 10) ===
                    e
                )[0]
              : t.slides.eq(e)[0];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)
              (t.visibleSlides || _([])).each((e) => {
                s.push(e);
              });
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !i) break;
                s.push(a(e));
              }
          else s.push(a(t.activeIndex));
          for (n = 0; n < s.length; n += 1)
            if (void 0 !== s[n]) {
              const e = s[n].offsetHeight;
              r = e > r ? e : r;
            }
          (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function () {
          const e = this,
            t = e.slides;
          for (let s = 0; s < t.length; s += 1)
            t[s].swiperSlideOffset = e.isHorizontal()
              ? t[s].offsetLeft
              : t[s].offsetTop;
        },
        updateSlidesProgress: function (e = (this && this.translate) || 0) {
          const t = this,
            s = t.params,
            { slides: i, rtlTranslate: n, snapGrid: r } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let a = -e;
          n && (a = e),
            i.removeClass(s.slideVisibleClass),
            (t.visibleSlidesIndexes = []),
            (t.visibleSlides = []);
          for (let e = 0; e < i.length; e += 1) {
            const o = i[e];
            let l = o.swiperSlideOffset;
            s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
            const c =
                (a + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                (o.swiperSlideSize + s.spaceBetween),
              d =
                (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
                (o.swiperSlideSize + s.spaceBetween),
              u = -(a - l),
              h = u + t.slidesSizesGrid[e];
            ((u >= 0 && u < t.size - 1) ||
              (h > 1 && h <= t.size) ||
              (u <= 0 && h >= t.size)) &&
              (t.visibleSlides.push(o),
              t.visibleSlidesIndexes.push(e),
              i.eq(e).addClass(s.slideVisibleClass)),
              (o.progress = n ? -c : c),
              (o.originalProgress = n ? -d : d);
          }
          t.visibleSlides = _(t.visibleSlides);
        },
        updateProgress: function (e) {
          const t = this;
          if (void 0 === e) {
            const s = t.rtlTranslate ? -1 : 1;
            e = (t && t.translate && t.translate * s) || 0;
          }
          const s = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let { progress: n, isBeginning: r, isEnd: a } = t;
          const o = r,
            l = a;
          0 === i
            ? ((n = 0), (r = !0), (a = !0))
            : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (a = n >= 1)),
            Object.assign(t, { progress: n, isBeginning: r, isEnd: a }),
            (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
              t.updateSlidesProgress(e),
            r && !o && t.emit("reachBeginning toEdge"),
            a && !l && t.emit("reachEnd toEdge"),
            ((o && !r) || (l && !a)) && t.emit("fromEdge"),
            t.emit("progress", n);
        },
        updateSlidesClasses: function () {
          const e = this,
            {
              slides: t,
              params: s,
              $wrapperEl: i,
              activeIndex: n,
              realIndex: r,
            } = e,
            a = e.virtual && s.virtual.enabled;
          let o;
          t.removeClass(
            `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
          ),
            (o = a
              ? e.$wrapperEl.find(
                  `.${s.slideClass}[data-swiper-slide-index="${n}"]`
                )
              : t.eq(n)),
            o.addClass(s.slideActiveClass),
            s.loop &&
              (o.hasClass(s.slideDuplicateClass)
                ? i
                    .children(
                      `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass)
                : i
                    .children(
                      `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                    )
                    .addClass(s.slideDuplicateActiveClass));
          let l = o
            .nextAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slideNextClass);
          s.loop &&
            0 === l.length &&
            ((l = t.eq(0)), l.addClass(s.slideNextClass));
          let c = o
            .prevAll(`.${s.slideClass}`)
            .eq(0)
            .addClass(s.slidePrevClass);
          s.loop &&
            0 === c.length &&
            ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
            s.loop &&
              (l.hasClass(s.slideDuplicateClass)
                ? i
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass)
                : i
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${l.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicateNextClass),
              c.hasClass(s.slideDuplicateClass)
                ? i
                    .children(
                      `.${s.slideClass}:not(.${
                        s.slideDuplicateClass
                      })[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)
                : i
                    .children(
                      `.${s.slideClass}.${
                        s.slideDuplicateClass
                      }[data-swiper-slide-index="${c.attr(
                        "data-swiper-slide-index"
                      )}"]`
                    )
                    .addClass(s.slideDuplicatePrevClass)),
            e.emitSlidesClasses();
        },
        updateActiveIndex: function (e) {
          const t = this,
            s = t.rtlTranslate ? t.translate : -t.translate,
            {
              slidesGrid: i,
              snapGrid: n,
              params: r,
              activeIndex: a,
              realIndex: o,
              snapIndex: l,
            } = t;
          let c,
            d = e;
          if (void 0 === d) {
            for (let e = 0; e < i.length; e += 1)
              void 0 !== i[e + 1]
                ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                  ? (d = e)
                  : s >= i[e] && s < i[e + 1] && (d = e + 1)
                : s >= i[e] && (d = e);
            r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
          }
          if (n.indexOf(s) >= 0) c = n.indexOf(s);
          else {
            const e = Math.min(r.slidesPerGroupSkip, d);
            c = e + Math.floor((d - e) / r.slidesPerGroup);
          }
          if ((c >= n.length && (c = n.length - 1), d === a))
            return void (
              c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
            );
          const u = parseInt(
            t.slides.eq(d).attr("data-swiper-slide-index") || d,
            10
          );
          Object.assign(t, {
            snapIndex: c,
            realIndex: u,
            previousIndex: a,
            activeIndex: d,
          }),
            t.emit("activeIndexChange"),
            t.emit("snapIndexChange"),
            o !== u && t.emit("realIndexChange"),
            (t.initialized || t.params.runCallbacksOnInit) &&
              t.emit("slideChange");
        },
        updateClickedSlide: function (e) {
          const t = this,
            s = t.params,
            i = _(e).closest(`.${s.slideClass}`)[0];
          let n,
            r = !1;
          if (i)
            for (let e = 0; e < t.slides.length; e += 1)
              if (t.slides[e] === i) {
                (r = !0), (n = e);
                break;
              }
          if (!i || !r)
            return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
          (t.clickedSlide = i),
            t.virtual && t.params.virtual.enabled
              ? (t.clickedIndex = parseInt(
                  _(i).attr("data-swiper-slide-index"),
                  10
                ))
              : (t.clickedIndex = n),
            s.slideToClickedSlide &&
              void 0 !== t.clickedIndex &&
              t.clickedIndex !== t.activeIndex &&
              t.slideToClickedSlide();
        },
      };
      const X = {
        getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
          const {
            params: t,
            rtlTranslate: s,
            translate: i,
            $wrapperEl: n,
          } = this;
          if (t.virtualTranslate) return s ? -i : i;
          if (t.cssMode) return i;
          let r = P(n[0], e);
          return s && (r = -r), r || 0;
        },
        setTranslate: function (e, t) {
          const s = this,
            {
              rtlTranslate: i,
              params: n,
              $wrapperEl: r,
              wrapperEl: a,
              progress: o,
            } = s;
          let l,
            c = 0,
            d = 0;
          s.isHorizontal() ? (c = i ? -e : e) : (d = e),
            n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
            n.cssMode
              ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                  s.isHorizontal() ? -c : -d)
              : n.virtualTranslate ||
                r.transform(`translate3d(${c}px, ${d}px, 0px)`),
            (s.previousTranslate = s.translate),
            (s.translate = s.isHorizontal() ? c : d);
          const u = s.maxTranslate() - s.minTranslate();
          (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
            l !== o && s.updateProgress(e),
            s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function () {
          return -this.snapGrid[0];
        },
        maxTranslate: function () {
          return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function (
          e = 0,
          t = this.params.speed,
          s = !0,
          i = !0,
          n
        ) {
          const r = this,
            { params: a, wrapperEl: o } = r;
          if (r.animating && a.preventInteractionOnTransition) return !1;
          const l = r.minTranslate(),
            c = r.maxTranslate();
          let d;
          if (
            ((d = i && e > l ? l : i && e < c ? c : e),
            r.updateProgress(d),
            a.cssMode)
          ) {
            const e = r.isHorizontal();
            if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
            else {
              if (!r.support.smoothScroll)
                return (
                  B({
                    swiper: r,
                    targetPosition: -d,
                    side: e ? "left" : "top",
                  }),
                  !0
                );
              o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
            }
            return !0;
          }
          return (
            0 === t
              ? (r.setTransition(0),
                r.setTranslate(d),
                s &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionEnd")))
              : (r.setTransition(t),
                r.setTranslate(d),
                s &&
                  (r.emit("beforeTransitionStart", t, n),
                  r.emit("transitionStart")),
                r.animating ||
                  ((r.animating = !0),
                  r.onTranslateToWrapperTransitionEnd ||
                    (r.onTranslateToWrapperTransitionEnd = function (e) {
                      r &&
                        !r.destroyed &&
                        e.target === this &&
                        (r.$wrapperEl[0].removeEventListener(
                          "transitionend",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        r.$wrapperEl[0].removeEventListener(
                          "webkitTransitionEnd",
                          r.onTranslateToWrapperTransitionEnd
                        ),
                        (r.onTranslateToWrapperTransitionEnd = null),
                        delete r.onTranslateToWrapperTransitionEnd,
                        s && r.emit("transitionEnd"));
                    }),
                  r.$wrapperEl[0].addEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].addEventListener(
                    "webkitTransitionEnd",
                    r.onTranslateToWrapperTransitionEnd
                  ))),
            !0
          );
        },
      };
      function U({ swiper: e, runCallbacks: t, direction: s, step: i }) {
        const { activeIndex: n, previousIndex: r } = e;
        let a = s;
        if (
          (a || (a = n > r ? "next" : n < r ? "prev" : "reset"),
          e.emit(`transition${i}`),
          t && n !== r)
        ) {
          if ("reset" === a) return void e.emit(`slideResetTransition${i}`);
          e.emit(`slideChangeTransition${i}`),
            "next" === a
              ? e.emit(`slideNextTransition${i}`)
              : e.emit(`slidePrevTransition${i}`);
        }
      }
      const K = {
        slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
          if ("number" != typeof e && "string" != typeof e)
            throw new Error(
              `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
            );
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const r = this;
          let a = e;
          a < 0 && (a = 0);
          const {
            params: o,
            snapGrid: l,
            slidesGrid: c,
            previousIndex: d,
            activeIndex: u,
            rtlTranslate: h,
            wrapperEl: p,
            enabled: g,
          } = r;
          if (
            (r.animating && o.preventInteractionOnTransition) ||
            (!g && !i && !n)
          )
            return !1;
          const m = Math.min(r.params.slidesPerGroupSkip, a);
          let f = m + Math.floor((a - m) / r.params.slidesPerGroup);
          f >= l.length && (f = l.length - 1);
          const v = -l[f];
          if (o.normalizeSlideIndex)
            for (let e = 0; e < c.length; e += 1) {
              const t = -Math.floor(100 * v),
                s = Math.floor(100 * c[e]),
                i = Math.floor(100 * c[e + 1]);
              void 0 !== c[e + 1]
                ? t >= s && t < i - (i - s) / 2
                  ? (a = e)
                  : t >= s && t < i && (a = e + 1)
                : t >= s && (a = e);
            }
          if (r.initialized && a !== u) {
            if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
              return !1;
            if (
              !r.allowSlidePrev &&
              v > r.translate &&
              v > r.maxTranslate() &&
              (u || 0) !== a
            )
              return !1;
          }
          let y;
          if (
            (a !== (d || 0) && s && r.emit("beforeSlideChangeStart"),
            r.updateProgress(v),
            (y = a > u ? "next" : a < u ? "prev" : "reset"),
            (h && -v === r.translate) || (!h && v === r.translate))
          )
            return (
              r.updateActiveIndex(a),
              o.autoHeight && r.updateAutoHeight(),
              r.updateSlidesClasses(),
              "slide" !== o.effect && r.setTranslate(v),
              "reset" !== y && (r.transitionStart(s, y), r.transitionEnd(s, y)),
              !1
            );
          if (o.cssMode) {
            const e = r.isHorizontal(),
              s = h ? v : -v;
            if (0 === t) {
              const t = r.virtual && r.params.virtual.enabled;
              t &&
                ((r.wrapperEl.style.scrollSnapType = "none"),
                (r._immediateVirtual = !0)),
                (p[e ? "scrollLeft" : "scrollTop"] = s),
                t &&
                  requestAnimationFrame(() => {
                    (r.wrapperEl.style.scrollSnapType = ""),
                      (r._swiperImmediateVirtual = !1);
                  });
            } else {
              if (!r.support.smoothScroll)
                return (
                  B({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                  !0
                );
              p.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
            }
            return !0;
          }
          return (
            r.setTransition(t),
            r.setTranslate(v),
            r.updateActiveIndex(a),
            r.updateSlidesClasses(),
            r.emit("beforeTransitionStart", t, i),
            r.transitionStart(s, y),
            0 === t
              ? r.transitionEnd(s, y)
              : r.animating ||
                ((r.animating = !0),
                r.onSlideToWrapperTransitionEnd ||
                  (r.onSlideToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onSlideToWrapperTransitionEnd
                      ),
                      (r.onSlideToWrapperTransitionEnd = null),
                      delete r.onSlideToWrapperTransitionEnd,
                      r.transitionEnd(s, y));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onSlideToWrapperTransitionEnd
                )),
            !0
          );
        },
        slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
          if ("string" == typeof e) {
            const t = parseInt(e, 10);
            if (!isFinite(t))
              throw new Error(
                `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
              );
            e = t;
          }
          const n = this;
          let r = e;
          return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
        },
        slideNext: function (e = this.params.speed, t = !0, s) {
          const i = this,
            { animating: n, enabled: r, params: a } = i;
          if (!r) return i;
          let o = a.slidesPerGroup;
          "auto" === a.slidesPerView &&
            1 === a.slidesPerGroup &&
            a.slidesPerGroupAuto &&
            (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
          const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o;
          if (a.loop) {
            if (n && a.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          return a.rewind && i.isEnd
            ? i.slideTo(0, e, t, s)
            : i.slideTo(i.activeIndex + l, e, t, s);
        },
        slidePrev: function (e = this.params.speed, t = !0, s) {
          const i = this,
            {
              params: n,
              animating: r,
              snapGrid: a,
              slidesGrid: o,
              rtlTranslate: l,
              enabled: c,
            } = i;
          if (!c) return i;
          if (n.loop) {
            if (r && n.loopPreventsSlide) return !1;
            i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
          }
          function d(e) {
            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
          }
          const u = d(l ? i.translate : -i.translate),
            h = a.map((e) => d(e));
          let p = a[h.indexOf(u) - 1];
          if (void 0 === p && n.cssMode) {
            let e;
            a.forEach((t, s) => {
              u >= t && (e = s);
            }),
              void 0 !== e && (p = a[e > 0 ? e - 1 : e]);
          }
          let g = 0;
          if (
            (void 0 !== p &&
              ((g = o.indexOf(p)),
              g < 0 && (g = i.activeIndex - 1),
              "auto" === n.slidesPerView &&
                1 === n.slidesPerGroup &&
                n.slidesPerGroupAuto &&
                ((g = g - i.slidesPerViewDynamic("previous", !0) + 1),
                (g = Math.max(g, 0)))),
            n.rewind && i.isBeginning)
          ) {
            const n =
              i.params.virtual && i.params.virtual.enabled && i.virtual
                ? i.virtual.slides.length - 1
                : i.slides.length - 1;
            return i.slideTo(n, e, t, s);
          }
          return i.slideTo(g, e, t, s);
        },
        slideReset: function (e = this.params.speed, t = !0, s) {
          return this.slideTo(this.activeIndex, e, t, s);
        },
        slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
          const n = this;
          let r = n.activeIndex;
          const a = Math.min(n.params.slidesPerGroupSkip, r),
            o = a + Math.floor((r - a) / n.params.slidesPerGroup),
            l = n.rtlTranslate ? n.translate : -n.translate;
          if (l >= n.snapGrid[o]) {
            const e = n.snapGrid[o];
            l - e > (n.snapGrid[o + 1] - e) * i &&
              (r += n.params.slidesPerGroup);
          } else {
            const e = n.snapGrid[o - 1];
            l - e <= (n.snapGrid[o] - e) * i && (r -= n.params.slidesPerGroup);
          }
          return (
            (r = Math.max(r, 0)),
            (r = Math.min(r, n.slidesGrid.length - 1)),
            n.slideTo(r, e, t, s)
          );
        },
        slideToClickedSlide: function () {
          const e = this,
            { params: t, $wrapperEl: s } = e,
            i =
              "auto" === t.slidesPerView
                ? e.slidesPerViewDynamic()
                : t.slidesPerView;
          let n,
            r = e.clickedIndex;
          if (t.loop) {
            if (e.animating) return;
            (n = parseInt(
              _(e.clickedSlide).attr("data-swiper-slide-index"),
              10
            )),
              t.centeredSlides
                ? r < e.loopedSlides - i / 2 ||
                  r > e.slides.length - e.loopedSlides + i / 2
                  ? (e.loopFix(),
                    (r = s
                      .children(
                        `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                      )
                      .eq(0)
                      .index()),
                    $(() => {
                      e.slideTo(r);
                    }))
                  : e.slideTo(r)
                : r > e.slides.length - i
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  $(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r);
          } else e.slideTo(r);
        },
      };
      const Z = {
        loopCreate: function () {
          const e = this,
            t = x(),
            { params: s, $wrapperEl: i } = e,
            n = i.children().length > 0 ? _(i.children()[0].parentNode) : i;
          n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
          let r = n.children(`.${s.slideClass}`);
          if (s.loopFillGroupWithBlank) {
            const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
            if (e !== s.slidesPerGroup) {
              for (let i = 0; i < e; i += 1) {
                const e = _(t.createElement("div")).addClass(
                  `${s.slideClass} ${s.slideBlankClass}`
                );
                n.append(e);
              }
              r = n.children(`.${s.slideClass}`);
            }
          }
          "auto" !== s.slidesPerView ||
            s.loopedSlides ||
            (s.loopedSlides = r.length),
            (e.loopedSlides = Math.ceil(
              parseFloat(s.loopedSlides || s.slidesPerView, 10)
            )),
            (e.loopedSlides += s.loopAdditionalSlides),
            e.loopedSlides > r.length &&
              e.params.loopedSlidesLimit &&
              (e.loopedSlides = r.length);
          const a = [],
            o = [];
          r.each((e, t) => {
            _(e).attr("data-swiper-slide-index", t);
          });
          for (let t = 0; t < e.loopedSlides; t += 1) {
            const e = t - Math.floor(t / r.length) * r.length;
            o.push(r.eq(e)[0]), a.unshift(r.eq(r.length - e - 1)[0]);
          }
          for (let e = 0; e < o.length; e += 1)
            n.append(_(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
          for (let e = a.length - 1; e >= 0; e -= 1)
            n.prepend(_(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        },
        loopFix: function () {
          const e = this;
          e.emit("beforeLoopFix");
          const {
            activeIndex: t,
            slides: s,
            loopedSlides: i,
            allowSlidePrev: n,
            allowSlideNext: r,
            snapGrid: a,
            rtlTranslate: o,
          } = e;
          let l;
          (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
          const c = -a[t] - e.getTranslate();
          if (t < i) {
            (l = s.length - 3 * i + t), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((o ? -e.translate : e.translate) - c);
          } else if (t >= s.length - i) {
            (l = -s.length + t + i), (l += i);
            e.slideTo(l, 0, !1, !0) &&
              0 !== c &&
              e.setTranslate((o ? -e.translate : e.translate) - c);
          }
          (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
        },
        loopDestroy: function () {
          const { $wrapperEl: e, params: t, slides: s } = this;
          e
            .children(
              `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
            )
            .remove(),
            s.removeAttr("data-swiper-slide-index");
        },
      };
      function J(e) {
        const t = this,
          s = x(),
          i = E(),
          n = t.touchEventsData,
          { params: r, touches: a, enabled: o } = t;
        if (!o) return;
        if (t.animating && r.preventInteractionOnTransition) return;
        !t.animating && r.cssMode && r.loop && t.loopFix();
        let l = e;
        l.originalEvent && (l = l.originalEvent);
        let c = _(l.target);
        if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
          return;
        if (
          ((n.isTouchEvent = "touchstart" === l.type),
          !n.isTouchEvent && "which" in l && 3 === l.which)
        )
          return;
        if (!n.isTouchEvent && "button" in l && l.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        const d = !!r.noSwipingClass && "" !== r.noSwipingClass,
          u = e.composedPath ? e.composedPath() : e.path;
        d && l.target && l.target.shadowRoot && u && (c = _(u[0]));
        const h = r.noSwipingSelector
            ? r.noSwipingSelector
            : `.${r.noSwipingClass}`,
          p = !(!l.target || !l.target.shadowRoot);
        if (
          r.noSwiping &&
          (p
            ? (function (e, t = this) {
                return (function t(s) {
                  if (!s || s === x() || s === E()) return null;
                  s.assignedSlot && (s = s.assignedSlot);
                  const i = s.closest(e);
                  return i || s.getRootNode
                    ? i || t(s.getRootNode().host)
                    : null;
                })(t);
              })(h, c[0])
            : c.closest(h)[0])
        )
          return void (t.allowClick = !0);
        if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
        (a.currentX =
          "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
          (a.currentY =
            "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
        const g = a.currentX,
          m = a.currentY,
          f = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
          v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (f && (g <= v || g >= i.innerWidth - v)) {
          if ("prevent" !== f) return;
          e.preventDefault();
        }
        if (
          (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0,
          }),
          (a.startX = g),
          (a.startY = m),
          (n.touchStartTime = D()),
          (t.allowClick = !0),
          t.updateSize(),
          (t.swipeDirection = void 0),
          r.threshold > 0 && (n.allowThresholdMove = !1),
          "touchstart" !== l.type)
        ) {
          let e = !0;
          c.is(n.focusableElements) &&
            ((e = !1), "SELECT" === c[0].nodeName && (n.isTouched = !1)),
            s.activeElement &&
              _(s.activeElement).is(n.focusableElements) &&
              s.activeElement !== c[0] &&
              s.activeElement.blur();
          const i = e && t.allowTouchMove && r.touchStartPreventDefault;
          (!r.touchStartForcePreventDefault && !i) ||
            c[0].isContentEditable ||
            l.preventDefault();
        }
        t.params.freeMode &&
          t.params.freeMode.enabled &&
          t.freeMode &&
          t.animating &&
          !r.cssMode &&
          t.freeMode.onTouchStart(),
          t.emit("touchStart", l);
      }
      function Q(e) {
        const t = x(),
          s = this,
          i = s.touchEventsData,
          { params: n, touches: r, rtlTranslate: a, enabled: o } = s;
        if (!o) return;
        let l = e;
        if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
          return void (
            i.startMoving &&
            i.isScrolling &&
            s.emit("touchMoveOpposite", l)
          );
        if (i.isTouchEvent && "touchmove" !== l.type) return;
        const c =
            "touchmove" === l.type &&
            l.targetTouches &&
            (l.targetTouches[0] || l.changedTouches[0]),
          d = "touchmove" === l.type ? c.pageX : l.pageX,
          u = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper)
          return (r.startX = d), void (r.startY = u);
        if (!s.allowTouchMove)
          return (
            _(l.target).is(i.focusableElements) || (s.allowClick = !1),
            void (
              i.isTouched &&
              (Object.assign(r, {
                startX: d,
                startY: u,
                currentX: d,
                currentY: u,
              }),
              (i.touchStartTime = D()))
            )
          );
        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
          if (s.isVertical()) {
            if (
              (u < r.startY && s.translate <= s.maxTranslate()) ||
              (u > r.startY && s.translate >= s.minTranslate())
            )
              return (i.isTouched = !1), void (i.isMoved = !1);
          } else if (
            (d < r.startX && s.translate <= s.maxTranslate()) ||
            (d > r.startX && s.translate >= s.minTranslate())
          )
            return;
        if (
          i.isTouchEvent &&
          t.activeElement &&
          l.target === t.activeElement &&
          _(l.target).is(i.focusableElements)
        )
          return (i.isMoved = !0), void (s.allowClick = !1);
        if (
          (i.allowTouchCallbacks && s.emit("touchMove", l),
          l.targetTouches && l.targetTouches.length > 1)
        )
          return;
        (r.currentX = d), (r.currentY = u);
        const h = r.currentX - r.startX,
          p = r.currentY - r.startY;
        if (
          s.params.threshold &&
          Math.sqrt(h ** 2 + p ** 2) < s.params.threshold
        )
          return;
        if (void 0 === i.isScrolling) {
          let e;
          (s.isHorizontal() && r.currentY === r.startY) ||
          (s.isVertical() && r.currentX === r.startX)
            ? (i.isScrolling = !1)
            : h * h + p * p >= 25 &&
              ((e = (180 * Math.atan2(Math.abs(p), Math.abs(h))) / Math.PI),
              (i.isScrolling = s.isHorizontal()
                ? e > n.touchAngle
                : 90 - e > n.touchAngle));
        }
        if (
          (i.isScrolling && s.emit("touchMoveOpposite", l),
          void 0 === i.startMoving &&
            ((r.currentX === r.startX && r.currentY === r.startY) ||
              (i.startMoving = !0)),
          i.isScrolling)
        )
          return void (i.isTouched = !1);
        if (!i.startMoving) return;
        (s.allowClick = !1),
          !n.cssMode && l.cancelable && l.preventDefault(),
          n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
          i.isMoved ||
            (n.loop && !n.cssMode && s.loopFix(),
            (i.startTranslate = s.getTranslate()),
            s.setTransition(0),
            s.animating &&
              s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
            (i.allowMomentumBounce = !1),
            !n.grabCursor ||
              (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
              s.setGrabCursor(!0),
            s.emit("sliderFirstMove", l)),
          s.emit("sliderMove", l),
          (i.isMoved = !0);
        let g = s.isHorizontal() ? h : p;
        (r.diff = g),
          (g *= n.touchRatio),
          a && (g = -g),
          (s.swipeDirection = g > 0 ? "prev" : "next"),
          (i.currentTranslate = g + i.startTranslate);
        let m = !0,
          f = n.resistanceRatio;
        if (
          (n.touchReleaseOnEdges && (f = 0),
          g > 0 && i.currentTranslate > s.minTranslate()
            ? ((m = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.minTranslate() -
                  1 +
                  (-s.minTranslate() + i.startTranslate + g) ** f))
            : g < 0 &&
              i.currentTranslate < s.maxTranslate() &&
              ((m = !1),
              n.resistance &&
                (i.currentTranslate =
                  s.maxTranslate() +
                  1 -
                  (s.maxTranslate() - i.startTranslate - g) ** f)),
          m && (l.preventedByNestedSwiper = !0),
          !s.allowSlideNext &&
            "next" === s.swipeDirection &&
            i.currentTranslate < i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          !s.allowSlidePrev &&
            "prev" === s.swipeDirection &&
            i.currentTranslate > i.startTranslate &&
            (i.currentTranslate = i.startTranslate),
          s.allowSlidePrev ||
            s.allowSlideNext ||
            (i.currentTranslate = i.startTranslate),
          n.threshold > 0)
        ) {
          if (!(Math.abs(g) > n.threshold || i.allowThresholdMove))
            return void (i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove)
            return (
              (i.allowThresholdMove = !0),
              (r.startX = r.currentX),
              (r.startY = r.currentY),
              (i.currentTranslate = i.startTranslate),
              void (r.diff = s.isHorizontal()
                ? r.currentX - r.startX
                : r.currentY - r.startY)
            );
        }
        n.followFinger &&
          !n.cssMode &&
          (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
            n.watchSlidesProgress) &&
            (s.updateActiveIndex(), s.updateSlidesClasses()),
          s.params.freeMode &&
            n.freeMode.enabled &&
            s.freeMode &&
            s.freeMode.onTouchMove(),
          s.updateProgress(i.currentTranslate),
          s.setTranslate(i.currentTranslate));
      }
      function ee(e) {
        const t = this,
          s = t.touchEventsData,
          {
            params: i,
            touches: n,
            rtlTranslate: r,
            slidesGrid: a,
            enabled: o,
          } = t;
        if (!o) return;
        let l = e;
        if (
          (l.originalEvent && (l = l.originalEvent),
          s.allowTouchCallbacks && t.emit("touchEnd", l),
          (s.allowTouchCallbacks = !1),
          !s.isTouched)
        )
          return (
            s.isMoved && i.grabCursor && t.setGrabCursor(!1),
            (s.isMoved = !1),
            void (s.startMoving = !1)
          );
        i.grabCursor &&
          s.isMoved &&
          s.isTouched &&
          (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
          t.setGrabCursor(!1);
        const c = D(),
          d = c - s.touchStartTime;
        if (t.allowClick) {
          const e = l.path || (l.composedPath && l.composedPath());
          t.updateClickedSlide((e && e[0]) || l.target),
            t.emit("tap click", l),
            d < 300 &&
              c - s.lastClickTime < 300 &&
              t.emit("doubleTap doubleClick", l);
        }
        if (
          ((s.lastClickTime = D()),
          $(() => {
            t.destroyed || (t.allowClick = !0);
          }),
          !s.isTouched ||
            !s.isMoved ||
            !t.swipeDirection ||
            0 === n.diff ||
            s.currentTranslate === s.startTranslate)
        )
          return (
            (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1)
          );
        let u;
        if (
          ((s.isTouched = !1),
          (s.isMoved = !1),
          (s.startMoving = !1),
          (u = i.followFinger
            ? r
              ? t.translate
              : -t.translate
            : -s.currentTranslate),
          i.cssMode)
        )
          return;
        if (t.params.freeMode && i.freeMode.enabled)
          return void t.freeMode.onTouchEnd({ currentPos: u });
        let h = 0,
          p = t.slidesSizesGrid[0];
        for (
          let e = 0;
          e < a.length;
          e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
        ) {
          const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
          void 0 !== a[e + t]
            ? u >= a[e] && u < a[e + t] && ((h = e), (p = a[e + t] - a[e]))
            : u >= a[e] && ((h = e), (p = a[a.length - 1] - a[a.length - 2]));
        }
        let g = null,
          m = null;
        i.rewind &&
          (t.isBeginning
            ? (m =
                t.params.virtual && t.params.virtual.enabled && t.virtual
                  ? t.virtual.slides.length - 1
                  : t.slides.length - 1)
            : t.isEnd && (g = 0));
        const f = (u - a[h]) / p,
          v = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (d > i.longSwipesMs) {
          if (!i.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection &&
            (f >= i.longSwipesRatio
              ? t.slideTo(i.rewind && t.isEnd ? g : h + v)
              : t.slideTo(h)),
            "prev" === t.swipeDirection &&
              (f > 1 - i.longSwipesRatio
                ? t.slideTo(h + v)
                : null !== m && f < 0 && Math.abs(f) > i.longSwipesRatio
                ? t.slideTo(m)
                : t.slideTo(h));
        } else {
          if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
          t.navigation &&
          (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
            ? l.target === t.navigation.nextEl
              ? t.slideTo(h + v)
              : t.slideTo(h)
            : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : h + v),
              "prev" === t.swipeDirection && t.slideTo(null !== m ? m : h));
        }
      }
      function te() {
        const e = this,
          { params: t, el: s } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
        (e.allowSlideNext = !0),
          (e.allowSlidePrev = !0),
          e.updateSize(),
          e.updateSlides(),
          e.updateSlidesClasses(),
          ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
          e.isEnd &&
          !e.isBeginning &&
          !e.params.centeredSlides
            ? e.slideTo(e.slides.length - 1, 0, !1, !0)
            : e.slideTo(e.activeIndex, 0, !1, !0),
          e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            e.autoplay.run(),
          (e.allowSlidePrev = n),
          (e.allowSlideNext = i),
          e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
      }
      function se(e) {
        const t = this;
        t.enabled &&
          (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
              t.animating &&
              (e.stopPropagation(), e.stopImmediatePropagation())));
      }
      function ie() {
        const e = this,
          { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
        if (!i) return;
        let n;
        (e.previousTranslate = e.translate),
          e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
          0 === e.translate && (e.translate = 0),
          e.updateActiveIndex(),
          e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
          n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
          e.emit("setTranslate", e.translate, !1);
      }
      let ne = !1;
      function re() {}
      const ae = (e, t) => {
        const s = x(),
          {
            params: i,
            touchEvents: n,
            el: r,
            wrapperEl: a,
            device: o,
            support: l,
          } = e,
          c = !!i.nested,
          d = "on" === t ? "addEventListener" : "removeEventListener",
          u = t;
        if (l.touch) {
          const t = !(
            "touchstart" !== n.start ||
            !l.passiveListener ||
            !i.passiveListeners
          ) && { passive: !0, capture: !1 };
          r[d](n.start, e.onTouchStart, t),
            r[d](
              n.move,
              e.onTouchMove,
              l.passiveListener ? { passive: !1, capture: c } : c
            ),
            r[d](n.end, e.onTouchEnd, t),
            n.cancel && r[d](n.cancel, e.onTouchEnd, t);
        } else
          r[d](n.start, e.onTouchStart, !1),
            s[d](n.move, e.onTouchMove, c),
            s[d](n.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) &&
          r[d]("click", e.onClick, !0),
          i.cssMode && a[d]("scroll", e.onScroll),
          i.updateOnWindowResize
            ? e[u](
                o.ios || o.android
                  ? "resize orientationchange observerUpdate"
                  : "resize observerUpdate",
                te,
                !0
              )
            : e[u]("observerUpdate", te, !0);
      };
      const oe = {
          attachEvents: function () {
            const e = this,
              t = x(),
              { params: s, support: i } = e;
            (e.onTouchStart = J.bind(e)),
              (e.onTouchMove = Q.bind(e)),
              (e.onTouchEnd = ee.bind(e)),
              s.cssMode && (e.onScroll = ie.bind(e)),
              (e.onClick = se.bind(e)),
              i.touch &&
                !ne &&
                (t.addEventListener("touchstart", re), (ne = !0)),
              ae(e, "on");
          },
          detachEvents: function () {
            ae(this, "off");
          },
        },
        le = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      const ce = {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: s,
              loopedSlides: i = 0,
              params: n,
              $el: r,
            } = e,
            a = n.breakpoints;
          if (!a || (a && 0 === Object.keys(a).length)) return;
          const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
          if (!o || e.currentBreakpoint === o) return;
          const l = (o in a ? a[o] : void 0) || e.originalParams,
            c = le(e, n),
            d = le(e, l),
            u = n.enabled;
          c && !d
            ? (r.removeClass(
                `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !c &&
              d &&
              (r.addClass(`${n.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === n.grid.fill)) &&
                r.addClass(`${n.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const s = n[t] && n[t].enabled,
                i = l[t] && l[t].enabled;
              s && !i && e[t].disable(), !s && i && e[t].enable();
            });
          const h = l.direction && l.direction !== n.direction,
            p = n.loop && (l.slidesPerView !== n.slidesPerView || h);
          h && s && e.changeDirection(), q(e.params, l);
          const g = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            u && !g ? e.disable() : !u && g && e.enable(),
            (e.currentBreakpoint = o),
            e.emit("_beforeBreakpoint", l),
            p &&
              s &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - i + e.loopedSlides, 0, !1)),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t = "window", s) {
          if (!e || ("container" === t && !s)) return;
          let i = !1;
          const n = E(),
            r = "window" === t ? n.innerHeight : s.clientHeight,
            a = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: r * t, point: e };
              }
              return { value: e, point: e };
            });
          a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < a.length; e += 1) {
            const { point: r, value: o } = a[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = r)
              : o <= s.clientWidth && (i = r);
          }
          return i || "max";
        },
      };
      const de = {
        addClasses: function () {
          const e = this,
            {
              classNames: t,
              params: s,
              rtl: i,
              $el: n,
              device: r,
              support: a,
            } = e,
            o = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && s.push(t + i);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "pointer-events": !a.touch },
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: i },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { "watch-progress": s.watchSlidesProgress },
              ],
              s.containerModifierClass
            );
          t.push(...o), n.addClass([...t].join(" ")), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { $el: e, classNames: t } = this;
          e.removeClass(t.join(" ")), this.emitContainerClasses();
        },
      };
      const ue = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements:
          "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1,
      };
      function he(e, t) {
        return function (s = {}) {
          const i = Object.keys(s)[0],
            n = s[i];
          "object" == typeof n && null !== n
            ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
                !0 === e[i] &&
                (e[i] = { auto: !0 }),
              i in e && "enabled" in n
                ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                  "object" != typeof e[i] ||
                    "enabled" in e[i] ||
                    (e[i].enabled = !0),
                  e[i] || (e[i] = { enabled: !1 }),
                  q(t, s))
                : q(t, s))
            : q(t, s);
        };
      }
      const pe = {
          eventsEmitter: V,
          update: Y,
          translate: X,
          transition: {
            setTransition: function (e, t) {
              const s = this;
              s.params.cssMode || s.$wrapperEl.transition(e),
                s.emit("setTransition", e, t);
            },
            transitionStart: function (e = !0, t) {
              const s = this,
                { params: i } = s;
              i.cssMode ||
                (i.autoHeight && s.updateAutoHeight(),
                U({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
            },
            transitionEnd: function (e = !0, t) {
              const s = this,
                { params: i } = s;
              (s.animating = !1),
                i.cssMode ||
                  (s.setTransition(0),
                  U({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
            },
          },
          slide: K,
          loop: Z,
          grabCursor: {
            setGrabCursor: function (e) {
              const t = this;
              if (
                t.support.touch ||
                !t.params.simulateTouch ||
                (t.params.watchOverflow && t.isLocked) ||
                t.params.cssMode
              )
                return;
              const s =
                "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              (s.style.cursor = "move"),
                (s.style.cursor = e ? "grabbing" : "grab");
            },
            unsetGrabCursor: function () {
              const e = this;
              e.support.touch ||
                (e.params.watchOverflow && e.isLocked) ||
                e.params.cssMode ||
                (e[
                  "container" === e.params.touchEventsTarget
                    ? "el"
                    : "wrapperEl"
                ].style.cursor = "");
            },
          },
          events: oe,
          breakpoints: ce,
          checkOverflow: {
            checkOverflow: function () {
              const e = this,
                { isLocked: t, params: s } = e,
                { slidesOffsetBefore: i } = s;
              if (i) {
                const t = e.slides.length - 1,
                  s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > s;
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
                !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
                t && t !== e.isLocked && (e.isEnd = !1),
                t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            },
          },
          classes: de,
          images: {
            loadImage: function (e, t, s, i, n, r) {
              const a = E();
              let o;
              function l() {
                r && r();
              }
              _(e).parent("picture")[0] || (e.complete && n)
                ? l()
                : t
                ? ((o = new a.Image()),
                  (o.onload = l),
                  (o.onerror = l),
                  i && (o.sizes = i),
                  s && (o.srcset = s),
                  t && (o.src = t))
                : l();
            },
            preloadImages: function () {
              const e = this;
              function t() {
                null != e &&
                  e &&
                  !e.destroyed &&
                  (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
                  e.imagesLoaded === e.imagesToLoad.length &&
                    (e.params.updateOnImagesReady && e.update(),
                    e.emit("imagesReady")));
              }
              e.imagesToLoad = e.$el.find("img");
              for (let s = 0; s < e.imagesToLoad.length; s += 1) {
                const i = e.imagesToLoad[s];
                e.loadImage(
                  i,
                  i.currentSrc || i.getAttribute("src"),
                  i.srcset || i.getAttribute("srcset"),
                  i.sizes || i.getAttribute("sizes"),
                  !0,
                  t
                );
              }
            },
          },
        },
        ge = {};
      class me {
        constructor(...e) {
          let t, s;
          if (
            (1 === e.length &&
            e[0].constructor &&
            "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
              ? (s = e[0])
              : ([t, s] = e),
            s || (s = {}),
            (s = q({}, s)),
            t && !s.el && (s.el = t),
            s.el && _(s.el).length > 1)
          ) {
            const e = [];
            return (
              _(s.el).each((t) => {
                const i = q({}, s, { el: t });
                e.push(new me(i));
              }),
              e
            );
          }
          const i = this;
          (i.__swiper__ = !0),
            (i.support = F()),
            (i.device = j({ userAgent: s.userAgent })),
            (i.browser = R()),
            (i.eventsListeners = {}),
            (i.eventsAnyListeners = []),
            (i.modules = [...i.__modules__]),
            s.modules &&
              Array.isArray(s.modules) &&
              i.modules.push(...s.modules);
          const n = {};
          i.modules.forEach((e) => {
            e({
              swiper: i,
              extendParams: he(s, n),
              on: i.on.bind(i),
              once: i.once.bind(i),
              off: i.off.bind(i),
              emit: i.emit.bind(i),
            });
          });
          const r = q({}, ue, n);
          return (
            (i.params = q({}, r, ge, s)),
            (i.originalParams = q({}, i.params)),
            (i.passedParams = q({}, s)),
            i.params &&
              i.params.on &&
              Object.keys(i.params.on).forEach((e) => {
                i.on(e, i.params.on[e]);
              }),
            i.params && i.params.onAny && i.onAny(i.params.onAny),
            (i.$ = _),
            Object.assign(i, {
              enabled: i.params.enabled,
              el: t,
              classNames: [],
              slides: _(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: () => "horizontal" === i.params.direction,
              isVertical: () => "vertical" === i.params.direction,
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: i.params.allowSlideNext,
              allowSlidePrev: i.params.allowSlidePrev,
              touchEvents: (function () {
                const e = [
                    "touchstart",
                    "touchmove",
                    "touchend",
                    "touchcancel",
                  ],
                  t = ["pointerdown", "pointermove", "pointerup"];
                return (
                  (i.touchEventsTouch = {
                    start: e[0],
                    move: e[1],
                    end: e[2],
                    cancel: e[3],
                  }),
                  (i.touchEventsDesktop = {
                    start: t[0],
                    move: t[1],
                    end: t[2],
                  }),
                  i.support.touch || !i.params.simulateTouch
                    ? i.touchEventsTouch
                    : i.touchEventsDesktop
                );
              })(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: i.params.focusableElements,
                lastClickTime: D(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: i.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0,
              },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            i.emit("_swiper"),
            i.params.init && i.init(),
            i
          );
        }
        enable() {
          const e = this;
          e.enabled ||
            ((e.enabled = !0),
            e.params.grabCursor && e.setGrabCursor(),
            e.emit("enable"));
        }
        disable() {
          const e = this;
          e.enabled &&
            ((e.enabled = !1),
            e.params.grabCursor && e.unsetGrabCursor(),
            e.emit("disable"));
        }
        setProgress(e, t) {
          const s = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = s.minTranslate(),
            n = (s.maxTranslate() - i) * e + i;
          s.translateTo(n, void 0 === t ? 0 : t),
            s.updateActiveIndex(),
            s.updateSlidesClasses();
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className
            .split(" ")
            .filter(
              (t) =>
                0 === t.indexOf("swiper") ||
                0 === t.indexOf(e.params.containerModifierClass)
            );
          e.emit("_containerClasses", t.join(" "));
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed
            ? ""
            : e.className
                .split(" ")
                .filter(
                  (e) =>
                    0 === e.indexOf("swiper-slide") ||
                    0 === e.indexOf(t.params.slideClass)
                )
                .join(" ");
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.each((s) => {
            const i = e.getSlideClasses(s);
            t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
          }),
            e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e = "current", t = !1) {
          const {
            params: s,
            slides: i,
            slidesGrid: n,
            slidesSizesGrid: r,
            size: a,
            activeIndex: o,
          } = this;
          let l = 1;
          if (s.centeredSlides) {
            let e,
              t = i[o].swiperSlideSize;
            for (let s = o + 1; s < i.length; s += 1)
              i[s] &&
                !e &&
                ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
            for (let s = o - 1; s >= 0; s -= 1)
              i[s] &&
                !e &&
                ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
          } else if ("current" === e)
            for (let e = o + 1; e < i.length; e += 1) {
              (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
            }
          else
            for (let e = o - 1; e >= 0; e -= 1) {
              n[o] - n[e] < a && (l += 1);
            }
          return l;
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const { snapGrid: t, params: s } = e;
          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
          }
          let n;
          s.breakpoints && e.setBreakpoint(),
            e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode && e.params.freeMode.enabled
              ? (i(), e.params.autoHeight && e.updateAutoHeight())
              : ((n =
                  ("auto" === e.params.slidesPerView ||
                    e.params.slidesPerView > 1) &&
                  e.isEnd &&
                  !e.params.centeredSlides
                    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                    : e.slideTo(e.activeIndex, 0, !1, !0)),
                n || i()),
            s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
            e.emit("update");
        }
        changeDirection(e, t = !0) {
          const s = this,
            i = s.params.direction;
          return (
            e || (e = "horizontal" === i ? "vertical" : "horizontal"),
            e === i ||
              ("horizontal" !== e && "vertical" !== e) ||
              (s.$el
                .removeClass(`${s.params.containerModifierClass}${i}`)
                .addClass(`${s.params.containerModifierClass}${e}`),
              s.emitContainerClasses(),
              (s.params.direction = e),
              s.slides.each((t) => {
                "vertical" === e ? (t.style.width = "") : (t.style.height = "");
              }),
              s.emit("changeDirection"),
              t && s.update()),
            s
          );
        }
        changeLanguageDirection(e) {
          const t = this;
          (t.rtl && "rtl" === e) ||
            (!t.rtl && "ltr" === e) ||
            ((t.rtl = "rtl" === e),
            (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
            t.rtl
              ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "rtl"))
              : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`),
                (t.el.dir = "ltr")),
            t.update());
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          const s = _(e || t.params.el);
          if (!(e = s[0])) return !1;
          e.swiper = t;
          const i = () =>
            `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
          let n = (() => {
            if (e && e.shadowRoot && e.shadowRoot.querySelector) {
              const t = _(e.shadowRoot.querySelector(i()));
              return (t.children = (e) => s.children(e)), t;
            }
            return s.children ? s.children(i()) : _(s).children(i());
          })();
          if (0 === n.length && t.params.createElements) {
            const e = x().createElement("div");
            (n = _(e)),
              (e.className = t.params.wrapperClass),
              s.append(e),
              s.children(`.${t.params.slideClass}`).each((e) => {
                n.append(e);
              });
          }
          return (
            Object.assign(t, {
              $el: s,
              el: e,
              $wrapperEl: n,
              wrapperEl: n[0],
              mounted: !0,
              rtl:
                "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
              rtlTranslate:
                "horizontal" === t.params.direction &&
                ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
              wrongRTL: "-webkit-box" === n.css("display"),
            }),
            !0
          );
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          return (
            !1 === t.mount(e) ||
              (t.emit("beforeInit"),
              t.params.breakpoints && t.setBreakpoint(),
              t.addClasses(),
              t.params.loop && t.loopCreate(),
              t.updateSize(),
              t.updateSlides(),
              t.params.watchOverflow && t.checkOverflow(),
              t.params.grabCursor && t.enabled && t.setGrabCursor(),
              t.params.preloadImages && t.preloadImages(),
              t.params.loop
                ? t.slideTo(
                    t.params.initialSlide + t.loopedSlides,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  )
                : t.slideTo(
                    t.params.initialSlide,
                    0,
                    t.params.runCallbacksOnInit,
                    !1,
                    !0
                  ),
              t.attachEvents(),
              (t.initialized = !0),
              t.emit("init"),
              t.emit("afterInit")),
            t
          );
        }
        destroy(e = !0, t = !0) {
          const s = this,
            { params: i, $el: n, $wrapperEl: r, slides: a } = s;
          return (
            void 0 === s.params ||
              s.destroyed ||
              (s.emit("beforeDestroy"),
              (s.initialized = !1),
              s.detachEvents(),
              i.loop && s.loopDestroy(),
              t &&
                (s.removeClasses(),
                n.removeAttr("style"),
                r.removeAttr("style"),
                a &&
                  a.length &&
                  a
                    .removeClass(
                      [
                        i.slideVisibleClass,
                        i.slideActiveClass,
                        i.slideNextClass,
                        i.slidePrevClass,
                      ].join(" ")
                    )
                    .removeAttr("style")
                    .removeAttr("data-swiper-slide-index")),
              s.emit("destroy"),
              Object.keys(s.eventsListeners).forEach((e) => {
                s.off(e);
              }),
              !1 !== e &&
                ((s.$el[0].swiper = null),
                (function (e) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    try {
                      t[e] = null;
                    } catch (e) {}
                    try {
                      delete t[e];
                    } catch (e) {}
                  });
                })(s)),
              (s.destroyed = !0)),
            null
          );
        }
        static extendDefaults(e) {
          q(ge, e);
        }
        static get extendedDefaults() {
          return ge;
        }
        static get defaults() {
          return ue;
        }
        static installModule(e) {
          me.prototype.__modules__ || (me.prototype.__modules__ = []);
          const t = me.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e) {
          return Array.isArray(e)
            ? (e.forEach((e) => me.installModule(e)), me)
            : (me.installModule(e), me);
        }
      }
      Object.keys(pe).forEach((e) => {
        Object.keys(pe[e]).forEach((t) => {
          me.prototype[t] = pe[e][t];
        });
      }),
        me.use([
          function ({ swiper: e, on: t, emit: s }) {
            const i = E();
            let n = null,
              r = null;
            const a = () => {
                e &&
                  !e.destroyed &&
                  e.initialized &&
                  (s("beforeResize"), s("resize"));
              },
              o = () => {
                e && !e.destroyed && e.initialized && s("orientationchange");
              };
            t("init", () => {
              e.params.resizeObserver && void 0 !== i.ResizeObserver
                ? e &&
                  !e.destroyed &&
                  e.initialized &&
                  ((n = new ResizeObserver((t) => {
                    r = i.requestAnimationFrame(() => {
                      const { width: s, height: i } = e;
                      let n = s,
                        r = i;
                      t.forEach(
                        ({ contentBoxSize: t, contentRect: s, target: i }) => {
                          (i && i !== e.el) ||
                            ((n = s ? s.width : (t[0] || t).inlineSize),
                            (r = s ? s.height : (t[0] || t).blockSize));
                        }
                      ),
                        (n === s && r === i) || a();
                    });
                  })),
                  n.observe(e.el))
                : (i.addEventListener("resize", a),
                  i.addEventListener("orientationchange", o));
            }),
              t("destroy", () => {
                r && i.cancelAnimationFrame(r),
                  n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
                  i.removeEventListener("resize", a),
                  i.removeEventListener("orientationchange", o);
              });
          },
          function ({ swiper: e, extendParams: t, on: s, emit: i }) {
            const n = [],
              r = E(),
              a = (e, t = {}) => {
                const s = new (r.MutationObserver || r.WebkitMutationObserver)(
                  (e) => {
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const t = function () {
                      i("observerUpdate", e[0]);
                    };
                    r.requestAnimationFrame
                      ? r.requestAnimationFrame(t)
                      : r.setTimeout(t, 0);
                  }
                );
                s.observe(e, {
                  attributes: void 0 === t.attributes || t.attributes,
                  childList: void 0 === t.childList || t.childList,
                  characterData: void 0 === t.characterData || t.characterData,
                }),
                  n.push(s);
              };
            t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
              s("init", () => {
                if (e.params.observer) {
                  if (e.params.observeParents) {
                    const t = e.$el.parents();
                    for (let e = 0; e < t.length; e += 1) a(t[e]);
                  }
                  a(e.$el[0], { childList: e.params.observeSlideChildren }),
                    a(e.$wrapperEl[0], { attributes: !1 });
                }
              }),
              s("destroy", () => {
                n.forEach((e) => {
                  e.disconnect();
                }),
                  n.splice(0, n.length);
              });
          },
        ]);
      const fe = me;
      function ve(e = "") {
        return `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`;
      }
      function ye({ swiper: e, extendParams: t, on: s, emit: i }) {
        const n = "swiper-pagination";
        let r;
        t({
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (e) => e,
            formatFractionTotal: (e) => e,
            bulletClass: `${n}-bullet`,
            bulletActiveClass: `${n}-bullet-active`,
            modifierClass: `${n}-`,
            currentClass: `${n}-current`,
            totalClass: `${n}-total`,
            hiddenClass: `${n}-hidden`,
            progressbarFillClass: `${n}-progressbar-fill`,
            progressbarOppositeClass: `${n}-progressbar-opposite`,
            clickableClass: `${n}-clickable`,
            lockClass: `${n}-lock`,
            horizontalClass: `${n}-horizontal`,
            verticalClass: `${n}-vertical`,
            paginationDisabledClass: `${n}-disabled`,
          },
        }),
          (e.pagination = { el: null, $el: null, bullets: [] });
        let a = 0;
        function o() {
          return (
            !e.params.pagination.el ||
            !e.pagination.el ||
            !e.pagination.$el ||
            0 === e.pagination.$el.length
          );
        }
        function l(t, s) {
          const { bulletActiveClass: i } = e.params.pagination;
          t[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
        }
        function c() {
          const t = e.rtl,
            s = e.params.pagination;
          if (o()) return;
          const n =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            c = e.pagination.$el;
          let d;
          const u = e.params.loop
            ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup)
            : e.snapGrid.length;
          if (
            (e.params.loop
              ? ((d = Math.ceil(
                  (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
                )),
                d > n - 1 - 2 * e.loopedSlides && (d -= n - 2 * e.loopedSlides),
                d > u - 1 && (d -= u),
                d < 0 && "bullets" !== e.params.paginationType && (d = u + d))
              : (d = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
            "bullets" === s.type &&
              e.pagination.bullets &&
              e.pagination.bullets.length > 0)
          ) {
            const i = e.pagination.bullets;
            let n, o, u;
            if (
              (s.dynamicBullets &&
                ((r = i
                  .eq(0)
                  [e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                c.css(
                  e.isHorizontal() ? "width" : "height",
                  r * (s.dynamicMainBullets + 4) + "px"
                ),
                s.dynamicMainBullets > 1 &&
                  void 0 !== e.previousIndex &&
                  ((a += d - (e.previousIndex - e.loopedSlides || 0)),
                  a > s.dynamicMainBullets - 1
                    ? (a = s.dynamicMainBullets - 1)
                    : a < 0 && (a = 0)),
                (n = Math.max(d - a, 0)),
                (o = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
                (u = (o + n) / 2)),
              i.removeClass(
                ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                  .map((e) => `${s.bulletActiveClass}${e}`)
                  .join(" ")
              ),
              c.length > 1)
            )
              i.each((e) => {
                const t = _(e),
                  i = t.index();
                i === d && t.addClass(s.bulletActiveClass),
                  s.dynamicBullets &&
                    (i >= n &&
                      i <= o &&
                      t.addClass(`${s.bulletActiveClass}-main`),
                    i === n && l(t, "prev"),
                    i === o && l(t, "next"));
              });
            else {
              const t = i.eq(d),
                r = t.index();
              if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
                const t = i.eq(n),
                  a = i.eq(o);
                for (let e = n; e <= o; e += 1)
                  i.eq(e).addClass(`${s.bulletActiveClass}-main`);
                if (e.params.loop)
                  if (r >= i.length) {
                    for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                      i.eq(i.length - e).addClass(
                        `${s.bulletActiveClass}-main`
                      );
                    i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                      `${s.bulletActiveClass}-prev`
                    );
                  } else l(t, "prev"), l(a, "next");
                else l(t, "prev"), l(a, "next");
              }
            }
            if (s.dynamicBullets) {
              const n = Math.min(i.length, s.dynamicMainBullets + 4),
                a = (r * n - r) / 2 - u * r,
                o = t ? "right" : "left";
              i.css(e.isHorizontal() ? o : "top", `${a}px`);
            }
          }
          if (
            ("fraction" === s.type &&
              (c.find(ve(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
              c.find(ve(s.totalClass)).text(s.formatFractionTotal(u))),
            "progressbar" === s.type)
          ) {
            let t;
            t = s.progressbarOpposite
              ? e.isHorizontal()
                ? "vertical"
                : "horizontal"
              : e.isHorizontal()
              ? "horizontal"
              : "vertical";
            const i = (d + 1) / u;
            let n = 1,
              r = 1;
            "horizontal" === t ? (n = i) : (r = i),
              c
                .find(ve(s.progressbarFillClass))
                .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${r})`)
                .transition(e.params.speed);
          }
          "custom" === s.type && s.renderCustom
            ? (c.html(s.renderCustom(e, d + 1, u)), i("paginationRender", c[0]))
            : i("paginationUpdate", c[0]),
            e.params.watchOverflow &&
              e.enabled &&
              c[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
        }
        function d() {
          const t = e.params.pagination;
          if (o()) return;
          const s =
              e.virtual && e.params.virtual.enabled
                ? e.virtual.slides.length
                : e.slides.length,
            n = e.pagination.$el;
          let r = "";
          if ("bullets" === t.type) {
            let i = e.params.loop
              ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
              : e.snapGrid.length;
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.loop &&
              i > s &&
              (i = s);
            for (let s = 0; s < i; s += 1)
              t.renderBullet
                ? (r += t.renderBullet.call(e, s, t.bulletClass))
                : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
            n.html(r), (e.pagination.bullets = n.find(ve(t.bulletClass)));
          }
          "fraction" === t.type &&
            ((r = t.renderFraction
              ? t.renderFraction.call(e, t.currentClass, t.totalClass)
              : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
            n.html(r)),
            "progressbar" === t.type &&
              ((r = t.renderProgressbar
                ? t.renderProgressbar.call(e, t.progressbarFillClass)
                : `<span class="${t.progressbarFillClass}"></span>`),
              n.html(r)),
            "custom" !== t.type && i("paginationRender", e.pagination.$el[0]);
        }
        function u() {
          e.params.pagination = (function (e, t, s, i) {
            const n = x();
            return (
              e.params.createElements &&
                Object.keys(i).forEach((r) => {
                  if (!s[r] && !0 === s.auto) {
                    let a = e.$el.children(`.${i[r]}`)[0];
                    a ||
                      ((a = n.createElement("div")),
                      (a.className = i[r]),
                      e.$el.append(a)),
                      (s[r] = a),
                      (t[r] = a);
                  }
                }),
              s
            );
          })(e, e.originalParams.pagination, e.params.pagination, {
            el: "swiper-pagination",
          });
          const t = e.params.pagination;
          if (!t.el) return;
          let s = _(t.el);
          0 !== s.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              s.length > 1 &&
              ((s = e.$el.find(t.el)),
              s.length > 1 &&
                (s = s.filter((t) => _(t).parents(".swiper")[0] === e.el))),
            "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
            s.addClass(t.modifierClass + t.type),
            s.addClass(e.isHorizontal() ? t.horizontalClass : t.verticalClass),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
              (a = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            "progressbar" === t.type &&
              t.progressbarOpposite &&
              s.addClass(t.progressbarOppositeClass),
            t.clickable &&
              s.on("click", ve(t.bulletClass), function (t) {
                t.preventDefault();
                let s = _(this).index() * e.params.slidesPerGroup;
                e.params.loop && (s += e.loopedSlides), e.slideTo(s);
              }),
            Object.assign(e.pagination, { $el: s, el: s[0] }),
            e.enabled || s.addClass(t.lockClass));
        }
        function h() {
          const t = e.params.pagination;
          if (o()) return;
          const s = e.pagination.$el;
          s.removeClass(t.hiddenClass),
            s.removeClass(t.modifierClass + t.type),
            s.removeClass(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            ),
            e.pagination.bullets &&
              e.pagination.bullets.removeClass &&
              e.pagination.bullets.removeClass(t.bulletActiveClass),
            t.clickable && s.off("click", ve(t.bulletClass));
        }
        s("init", () => {
          !1 === e.params.pagination.enabled ? p() : (u(), d(), c());
        }),
          s("activeIndexChange", () => {
            (e.params.loop || void 0 === e.snapIndex) && c();
          }),
          s("snapIndexChange", () => {
            e.params.loop || c();
          }),
          s("slidesLengthChange", () => {
            e.params.loop && (d(), c());
          }),
          s("snapGridLengthChange", () => {
            e.params.loop || (d(), c());
          }),
          s("destroy", () => {
            h();
          }),
          s("enable disable", () => {
            const { $el: t } = e.pagination;
            t &&
              t[e.enabled ? "removeClass" : "addClass"](
                e.params.pagination.lockClass
              );
          }),
          s("lock unlock", () => {
            c();
          }),
          s("click", (t, s) => {
            const n = s.target,
              { $el: r } = e.pagination;
            if (
              e.params.pagination.el &&
              e.params.pagination.hideOnClick &&
              r &&
              r.length > 0 &&
              !_(n).hasClass(e.params.pagination.bulletClass)
            ) {
              if (
                e.navigation &&
                ((e.navigation.nextEl && n === e.navigation.nextEl) ||
                  (e.navigation.prevEl && n === e.navigation.prevEl))
              )
                return;
              const t = r.hasClass(e.params.pagination.hiddenClass);
              i(!0 === t ? "paginationShow" : "paginationHide"),
                r.toggleClass(e.params.pagination.hiddenClass);
            }
          });
        const p = () => {
          e.$el.addClass(e.params.pagination.paginationDisabledClass),
            e.pagination.$el &&
              e.pagination.$el.addClass(
                e.params.pagination.paginationDisabledClass
              ),
            h();
        };
        Object.assign(e.pagination, {
          enable: () => {
            e.$el.removeClass(e.params.pagination.paginationDisabledClass),
              e.pagination.$el &&
                e.pagination.$el.removeClass(
                  e.params.pagination.paginationDisabledClass
                ),
              u(),
              d(),
              c();
          },
          disable: p,
          render: d,
          update: c,
          init: u,
          destroy: h,
        });
      }
      function be({ swiper: e, extendParams: t, on: s, emit: i }) {
        t({
          lazy: {
            checkInView: !1,
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            scrollingElement: "",
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        }),
          (e.lazy = {});
        let n = !1,
          r = !1;
        function a(t, s = !0) {
          const n = e.params.lazy;
          if (void 0 === t) return;
          if (0 === e.slides.length) return;
          const r =
              e.virtual && e.params.virtual.enabled
                ? e.$wrapperEl.children(
                    `.${e.params.slideClass}[data-swiper-slide-index="${t}"]`
                  )
                : e.slides.eq(t),
            o = r.find(
              `.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`
            );
          !r.hasClass(n.elementClass) ||
            r.hasClass(n.loadedClass) ||
            r.hasClass(n.loadingClass) ||
            o.push(r[0]),
            0 !== o.length &&
              o.each((t) => {
                const o = _(t);
                o.addClass(n.loadingClass);
                const l = o.attr("data-background"),
                  c = o.attr("data-src"),
                  d = o.attr("data-srcset"),
                  u = o.attr("data-sizes"),
                  h = o.parent("picture");
                e.loadImage(o[0], c || l, d, u, !1, () => {
                  if (null != e && e && (!e || e.params) && !e.destroyed) {
                    if (
                      (l
                        ? (o.css("background-image", `url("${l}")`),
                          o.removeAttr("data-background"))
                        : (d &&
                            (o.attr("srcset", d), o.removeAttr("data-srcset")),
                          u && (o.attr("sizes", u), o.removeAttr("data-sizes")),
                          h.length &&
                            h.children("source").each((e) => {
                              const t = _(e);
                              t.attr("data-srcset") &&
                                (t.attr("srcset", t.attr("data-srcset")),
                                t.removeAttr("data-srcset"));
                            }),
                          c && (o.attr("src", c), o.removeAttr("data-src"))),
                      o.addClass(n.loadedClass).removeClass(n.loadingClass),
                      r.find(`.${n.preloaderClass}`).remove(),
                      e.params.loop && s)
                    ) {
                      const t = r.attr("data-swiper-slide-index");
                      if (r.hasClass(e.params.slideDuplicateClass)) {
                        a(
                          e.$wrapperEl
                            .children(
                              `[data-swiper-slide-index="${t}"]:not(.${e.params.slideDuplicateClass})`
                            )
                            .index(),
                          !1
                        );
                      } else {
                        a(
                          e.$wrapperEl
                            .children(
                              `.${e.params.slideDuplicateClass}[data-swiper-slide-index="${t}"]`
                            )
                            .index(),
                          !1
                        );
                      }
                    }
                    i("lazyImageReady", r[0], o[0]),
                      e.params.autoHeight && e.updateAutoHeight();
                  }
                }),
                  i("lazyImageLoad", r[0], o[0]);
              });
        }
        function o() {
          const { $wrapperEl: t, params: s, slides: i, activeIndex: n } = e,
            o = e.virtual && s.virtual.enabled,
            l = s.lazy;
          let c = s.slidesPerView;
          function d(e) {
            if (o) {
              if (
                t.children(`.${s.slideClass}[data-swiper-slide-index="${e}"]`)
                  .length
              )
                return !0;
            } else if (i[e]) return !0;
            return !1;
          }
          function u(e) {
            return o ? _(e).attr("data-swiper-slide-index") : _(e).index();
          }
          if (
            ("auto" === c && (c = 0),
            r || (r = !0),
            e.params.watchSlidesProgress)
          )
            t.children(`.${s.slideVisibleClass}`).each((e) => {
              a(o ? _(e).attr("data-swiper-slide-index") : _(e).index());
            });
          else if (c > 1) for (let e = n; e < n + c; e += 1) d(e) && a(e);
          else a(n);
          if (l.loadPrevNext)
            if (c > 1 || (l.loadPrevNextAmount && l.loadPrevNextAmount > 1)) {
              const e = l.loadPrevNextAmount,
                t = Math.ceil(c),
                s = Math.min(n + t + Math.max(e, t), i.length),
                r = Math.max(n - Math.max(t, e), 0);
              for (let e = n + t; e < s; e += 1) d(e) && a(e);
              for (let e = r; e < n; e += 1) d(e) && a(e);
            } else {
              const e = t.children(`.${s.slideNextClass}`);
              e.length > 0 && a(u(e));
              const i = t.children(`.${s.slidePrevClass}`);
              i.length > 0 && a(u(i));
            }
        }
        function l() {
          const t = E();
          if (!e || e.destroyed) return;
          const s = e.params.lazy.scrollingElement
              ? _(e.params.lazy.scrollingElement)
              : _(t),
            i = s[0] === t,
            r = i ? t.innerWidth : s[0].offsetWidth,
            a = i ? t.innerHeight : s[0].offsetHeight,
            c = e.$el.offset(),
            { rtlTranslate: d } = e;
          let u = !1;
          d && (c.left -= e.$el[0].scrollLeft);
          const h = [
            [c.left, c.top],
            [c.left + e.width, c.top],
            [c.left, c.top + e.height],
            [c.left + e.width, c.top + e.height],
          ];
          for (let e = 0; e < h.length; e += 1) {
            const t = h[e];
            if (t[0] >= 0 && t[0] <= r && t[1] >= 0 && t[1] <= a) {
              if (0 === t[0] && 0 === t[1]) continue;
              u = !0;
            }
          }
          const p = !(
            "touchstart" !== e.touchEvents.start ||
            !e.support.passiveListener ||
            !e.params.passiveListeners
          ) && { passive: !0, capture: !1 };
          u
            ? (o(), s.off("scroll", l, p))
            : n || ((n = !0), s.on("scroll", l, p));
        }
        s("beforeInit", () => {
          e.params.lazy.enabled &&
            e.params.preloadImages &&
            (e.params.preloadImages = !1);
        }),
          s("init", () => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? l() : o());
          }),
          s("scroll", () => {
            e.params.freeMode &&
              e.params.freeMode.enabled &&
              !e.params.freeMode.sticky &&
              o();
          }),
          s("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
            e.params.lazy.enabled && (e.params.lazy.checkInView ? l() : o());
          }),
          s("transitionStart", () => {
            e.params.lazy.enabled &&
              (e.params.lazy.loadOnTransitionStart ||
                (!e.params.lazy.loadOnTransitionStart && !r)) &&
              (e.params.lazy.checkInView ? l() : o());
          }),
          s("transitionEnd", () => {
            e.params.lazy.enabled &&
              !e.params.lazy.loadOnTransitionStart &&
              (e.params.lazy.checkInView ? l() : o());
          }),
          s("slideChange", () => {
            const {
              lazy: t,
              cssMode: s,
              watchSlidesProgress: i,
              touchReleaseOnEdges: n,
              resistanceRatio: r,
            } = e.params;
            t.enabled && (s || (i && (n || 0 === r))) && o();
          }),
          s("destroy", () => {
            e.$el &&
              e.$el
                .find(`.${e.params.lazy.loadingClass}`)
                .removeClass(e.params.lazy.loadingClass);
          }),
          Object.assign(e.lazy, { load: o, loadInSlide: a });
      }
      function we({ swiper: e, extendParams: t, on: s, emit: i }) {
        let n;
        function r() {
          if (!e.size)
            return (e.autoplay.running = !1), void (e.autoplay.paused = !1);
          const t = e.slides.eq(e.activeIndex);
          let s = e.params.autoplay.delay;
          t.attr("data-swiper-autoplay") &&
            (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
            clearTimeout(n),
            (n = $(() => {
              let t;
              e.params.autoplay.reverseDirection
                ? e.params.loop
                  ? (e.loopFix(),
                    (t = e.slidePrev(e.params.speed, !0, !0)),
                    i("autoplay"))
                  : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? o()
                    : ((t = e.slideTo(
                        e.slides.length - 1,
                        e.params.speed,
                        !0,
                        !0
                      )),
                      i("autoplay"))
                  : ((t = e.slidePrev(e.params.speed, !0, !0)), i("autoplay"))
                : e.params.loop
                ? (e.loopFix(),
                  (t = e.slideNext(e.params.speed, !0, !0)),
                  i("autoplay"))
                : e.isEnd
                ? e.params.autoplay.stopOnLastSlide
                  ? o()
                  : ((t = e.slideTo(0, e.params.speed, !0, !0)), i("autoplay"))
                : ((t = e.slideNext(e.params.speed, !0, !0)), i("autoplay")),
                ((e.params.cssMode && e.autoplay.running) || !1 === t) && r();
            }, s));
        }
        function a() {
          return (
            void 0 === n &&
            !e.autoplay.running &&
            ((e.autoplay.running = !0), i("autoplayStart"), r(), !0)
          );
        }
        function o() {
          return (
            !!e.autoplay.running &&
            void 0 !== n &&
            (n && (clearTimeout(n), (n = void 0)),
            (e.autoplay.running = !1),
            i("autoplayStop"),
            !0)
          );
        }
        function l(t) {
          e.autoplay.running &&
            (e.autoplay.paused ||
              (n && clearTimeout(n),
              (e.autoplay.paused = !0),
              0 !== t && e.params.autoplay.waitForTransition
                ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                    e.$wrapperEl[0].addEventListener(t, d);
                  })
                : ((e.autoplay.paused = !1), r())));
        }
        function c() {
          const t = x();
          "hidden" === t.visibilityState && e.autoplay.running && l(),
            "visible" === t.visibilityState &&
              e.autoplay.paused &&
              (r(), (e.autoplay.paused = !1));
        }
        function d(t) {
          e &&
            !e.destroyed &&
            e.$wrapperEl &&
            t.target === e.$wrapperEl[0] &&
            (["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, d);
            }),
            (e.autoplay.paused = !1),
            e.autoplay.running ? r() : o());
        }
        function u() {
          e.params.autoplay.disableOnInteraction
            ? o()
            : (i("autoplayPause"), l()),
            ["transitionend", "webkitTransitionEnd"].forEach((t) => {
              e.$wrapperEl[0].removeEventListener(t, d);
            });
        }
        function h() {
          e.params.autoplay.disableOnInteraction ||
            ((e.autoplay.paused = !1), i("autoplayResume"), r());
        }
        (e.autoplay = { running: !1, paused: !1 }),
          t({
            autoplay: {
              enabled: !1,
              delay: 3e3,
              waitForTransition: !0,
              disableOnInteraction: !0,
              stopOnLastSlide: !1,
              reverseDirection: !1,
              pauseOnMouseEnter: !1,
            },
          }),
          s("init", () => {
            if (e.params.autoplay.enabled) {
              a();
              x().addEventListener("visibilitychange", c),
                e.params.autoplay.pauseOnMouseEnter &&
                  (e.$el.on("mouseenter", u), e.$el.on("mouseleave", h));
            }
          }),
          s("beforeTransitionStart", (t, s, i) => {
            e.autoplay.running &&
              (i || !e.params.autoplay.disableOnInteraction
                ? e.autoplay.pause(s)
                : o());
          }),
          s("sliderFirstMove", () => {
            e.autoplay.running &&
              (e.params.autoplay.disableOnInteraction ? o() : l());
          }),
          s("touchEnd", () => {
            e.params.cssMode &&
              e.autoplay.paused &&
              !e.params.autoplay.disableOnInteraction &&
              r();
          }),
          s("destroy", () => {
            e.$el.off("mouseenter", u),
              e.$el.off("mouseleave", h),
              e.autoplay.running && o();
            x().removeEventListener("visibilitychange", c);
          }),
          Object.assign(e.autoplay, { pause: l, run: r, start: a, stop: o });
      }
      function Se(e, t) {
        return e.transformEl
          ? t
              .find(e.transformEl)
              .css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden",
              })
          : t;
      }
      function xe({ swiper: e, extendParams: t, on: s }) {
        t({ fadeEffect: { crossFade: !1, transformEl: null } });
        !(function (e) {
          const {
            effect: t,
            swiper: s,
            on: i,
            setTranslate: n,
            setTransition: r,
            overwriteParams: a,
            perspective: o,
            recreateShadows: l,
            getEffectParams: c,
          } = e;
          let d;
          i("beforeInit", () => {
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`),
              o &&
                o() &&
                s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = a ? a() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
          }),
            i("setTranslate", () => {
              s.params.effect === t && n();
            }),
            i("setTransition", (e, i) => {
              s.params.effect === t && r(i);
            }),
            i("transitionEnd", () => {
              if (s.params.effect === t && l) {
                if (!c || !c().slideShadows) return;
                s.slides.each((e) => {
                  s.$(e)
                    .find(
                      ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                    )
                    .remove();
                }),
                  l();
              }
            }),
            i("virtualUpdate", () => {
              s.params.effect === t &&
                (s.slides.length || (d = !0),
                requestAnimationFrame(() => {
                  d && s.slides && s.slides.length && (n(), (d = !1));
                }));
            });
        })({
          effect: "fade",
          swiper: e,
          on: s,
          setTranslate: () => {
            const { slides: t } = e,
              s = e.params.fadeEffect;
            for (let i = 0; i < t.length; i += 1) {
              const t = e.slides.eq(i);
              let n = -t[0].swiperSlideOffset;
              e.params.virtualTranslate || (n -= e.translate);
              let r = 0;
              e.isHorizontal() || ((r = n), (n = 0));
              const a = e.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(t[0].progress), 0)
                : 1 + Math.min(Math.max(t[0].progress, -1), 0);
              Se(s, t)
                .css({ opacity: a })
                .transform(`translate3d(${n}px, ${r}px, 0px)`);
            }
          },
          setTransition: (t) => {
            const { transformEl: s } = e.params.fadeEffect;
            (s ? e.slides.find(s) : e.slides).transition(t),
              (function ({
                swiper: e,
                duration: t,
                transformEl: s,
                allSlides: i,
              }) {
                const { slides: n, activeIndex: r, $wrapperEl: a } = e;
                if (e.params.virtualTranslate && 0 !== t) {
                  let t,
                    o = !1;
                  (t = i ? (s ? n.find(s) : n) : s ? n.eq(r).find(s) : n.eq(r)),
                    t.transitionEnd(() => {
                      if (o) return;
                      if (!e || e.destroyed) return;
                      (o = !0), (e.animating = !1);
                      const t = ["webkitTransitionEnd", "transitionend"];
                      for (let e = 0; e < t.length; e += 1) a.trigger(t[e]);
                    });
                }
              })({ swiper: e, duration: t, transformEl: s, allSlides: !0 });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !e.params.cssMode,
          }),
        });
      }
      function Ce() {
        let e = document.querySelectorAll(
          '[class*="__swiper"]:not(.swiper-wrapper)'
        );
        e &&
          e.forEach((e) => {
            e.parentElement.classList.add("swiper"),
              e.classList.add("swiper-wrapper");
            for (const t of e.children) t.classList.add("swiper-slide");
          });
      }
      window.addEventListener("load", function (e) {
        Ce(),
          document.querySelector(".body-main-slider") &&
            new fe(".body-main-slider", {
              modules: [ye, xe, be],
              effect: "fade",
              observer: !0,
              observeParents: !0,
              slidesPerView: 1,
              spaceBetween: 0,
              autoHeight: !1,
              speed: 800,
              loop: !0,
              preloadImages: !1,
              lazy: { loadPrevNext: !0 },
              pagination: { el: ".body-main-slider__controll", clickable: !0 },
              breakpoints: { 320: { autoHeight: !0 }, 992: { autoHeight: !1 } },
              on: {
                init: function () {
                  document
                    .querySelectorAll(
                      ".body-main-slider__controll .swiper-pagination-bullet"
                    )
                    .forEach((e, t) => {
                      let s;
                      t < 10 && (s = "0"), (e.innerHTML = `${s}${t + 1}`);
                    });
                },
                breakpoint: function (e, t) {
                  !t.autoHeight &&
                    (document.querySelector(
                      ".body-main-slider__swiper"
                    ).style.height = "auto"),
                    e.updateSize();
                },
              },
            }),
          document.querySelector(".gallery__slider") &&
            new fe(".gallery__slider", {
              modules: [we, be],
              autoplay: { delay: 3e3, disableOnInteraction: !1 },
              observer: !0,
              observeParents: !0,
              slidesPerView: "auto",
              spaceBetween: 32,
              autoHeight: !1,
              speed: 1e3,
              loop: !0,
              preloadImages: !1,
              lazy: { loadPrevNext: !0 },
              breakpoints: {},
              on: {},
            });
      });
      var Ee = s(807),
        Te = s(279),
        Oe = s(493),
        Le = function () {
          return (
            (Le =
              Object.assign ||
              function (e) {
                for (var t, s = 1, i = arguments.length; s < i; s++)
                  for (var n in (t = arguments[s]))
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e;
              }),
            Le.apply(this, arguments)
          );
        },
        Me = null,
        Ae = null;
      function ke() {
        if (null === Me) {
          if ("undefined" == typeof document) return (Me = 0);
          var e = document.body,
            t = document.createElement("div");
          t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
          var s = t.getBoundingClientRect().right;
          e.removeChild(t), (Me = s);
        }
        return Me;
      }
      function Ie(e) {
        return e && e.ownerDocument && e.ownerDocument.defaultView
          ? e.ownerDocument.defaultView
          : window;
      }
      function _e(e) {
        return e && e.ownerDocument ? e.ownerDocument : document;
      }
      Ee &&
        window.addEventListener("resize", function () {
          Ae !== window.devicePixelRatio &&
            ((Ae = window.devicePixelRatio), (Me = null));
        });
      var $e = function (e) {
          return Array.prototype.reduce.call(
            e,
            function (e, t) {
              var s = t.name.match(/data-simplebar-(.+)/);
              if (s) {
                var i = s[1].replace(/\W+(.)/g, function (e, t) {
                  return t.toUpperCase();
                });
                switch (t.value) {
                  case "true":
                    e[i] = !0;
                    break;
                  case "false":
                    e[i] = !1;
                    break;
                  case void 0:
                    e[i] = !0;
                    break;
                  default:
                    e[i] = t.value;
                }
              }
              return e;
            },
            {}
          );
        },
        De = (function () {
          function e(t, s) {
            void 0 === s && (s = {});
            var i = this;
            if (
              ((this.removePreventClickId = null),
              (this.minScrollbarWidth = 20),
              (this.stopScrollDelay = 175),
              (this.isScrolling = !1),
              (this.isMouseEntering = !1),
              (this.scrollXTicking = !1),
              (this.scrollYTicking = !1),
              (this.wrapperEl = null),
              (this.contentWrapperEl = null),
              (this.contentEl = null),
              (this.offsetEl = null),
              (this.maskEl = null),
              (this.placeholderEl = null),
              (this.heightAutoObserverWrapperEl = null),
              (this.heightAutoObserverEl = null),
              (this.rtlHelpers = null),
              (this.scrollbarWidth = 0),
              (this.resizeObserver = null),
              (this.mutationObserver = null),
              (this.elStyles = null),
              (this.isRtl = null),
              (this.mouseX = 0),
              (this.mouseY = 0),
              (this.onMouseMove = function () {}),
              (this.onWindowResize = function () {}),
              (this.onStopScrolling = function () {}),
              (this.onMouseEntered = function () {}),
              (this.onScroll = function () {
                var e = Ie(i.el);
                i.scrollXTicking ||
                  (e.requestAnimationFrame(i.scrollX), (i.scrollXTicking = !0)),
                  i.scrollYTicking ||
                    (e.requestAnimationFrame(i.scrollY),
                    (i.scrollYTicking = !0)),
                  i.isScrolling ||
                    ((i.isScrolling = !0),
                    i.el.classList.add(i.classNames.scrolling)),
                  i.showScrollbar("x"),
                  i.showScrollbar("y"),
                  i.onStopScrolling();
              }),
              (this.scrollX = function () {
                i.axis.x.isOverflowing && i.positionScrollbar("x"),
                  (i.scrollXTicking = !1);
              }),
              (this.scrollY = function () {
                i.axis.y.isOverflowing && i.positionScrollbar("y"),
                  (i.scrollYTicking = !1);
              }),
              (this._onStopScrolling = function () {
                i.el.classList.remove(i.classNames.scrolling),
                  i.options.autoHide &&
                    (i.hideScrollbar("x"), i.hideScrollbar("y")),
                  (i.isScrolling = !1);
              }),
              (this.onMouseEnter = function () {
                i.isMouseEntering ||
                  (i.el.classList.add(i.classNames.mouseEntered),
                  i.showScrollbar("x"),
                  i.showScrollbar("y"),
                  (i.isMouseEntering = !0)),
                  i.onMouseEntered();
              }),
              (this._onMouseEntered = function () {
                i.el.classList.remove(i.classNames.mouseEntered),
                  i.options.autoHide &&
                    (i.hideScrollbar("x"), i.hideScrollbar("y")),
                  (i.isMouseEntering = !1);
              }),
              (this._onMouseMove = function (e) {
                (i.mouseX = e.clientX),
                  (i.mouseY = e.clientY),
                  (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                    i.onMouseMoveForAxis("x"),
                  (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                    i.onMouseMoveForAxis("y");
              }),
              (this.onMouseLeave = function () {
                i.onMouseMove.cancel(),
                  (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                    i.onMouseLeaveForAxis("x"),
                  (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                    i.onMouseLeaveForAxis("y"),
                  (i.mouseX = -1),
                  (i.mouseY = -1);
              }),
              (this._onWindowResize = function () {
                (i.scrollbarWidth = i.getScrollbarWidth()),
                  i.hideNativeScrollbar();
              }),
              (this.onPointerEvent = function (e) {
                var t, s;
                i.axis.x.track.el &&
                  i.axis.y.track.el &&
                  i.axis.x.scrollbar.el &&
                  i.axis.y.scrollbar.el &&
                  ((i.axis.x.track.rect =
                    i.axis.x.track.el.getBoundingClientRect()),
                  (i.axis.y.track.rect =
                    i.axis.y.track.el.getBoundingClientRect()),
                  (i.axis.x.isOverflowing || i.axis.x.forceVisible) &&
                    (t = i.isWithinBounds(i.axis.x.track.rect)),
                  (i.axis.y.isOverflowing || i.axis.y.forceVisible) &&
                    (s = i.isWithinBounds(i.axis.y.track.rect)),
                  (t || s) &&
                    (e.stopPropagation(),
                    "pointerdown" === e.type &&
                      "touch" !== e.pointerType &&
                      (t &&
                        ((i.axis.x.scrollbar.rect =
                          i.axis.x.scrollbar.el.getBoundingClientRect()),
                        i.isWithinBounds(i.axis.x.scrollbar.rect)
                          ? i.onDragStart(e, "x")
                          : i.onTrackClick(e, "x")),
                      s &&
                        ((i.axis.y.scrollbar.rect =
                          i.axis.y.scrollbar.el.getBoundingClientRect()),
                        i.isWithinBounds(i.axis.y.scrollbar.rect)
                          ? i.onDragStart(e, "y")
                          : i.onTrackClick(e, "y")))));
              }),
              (this.drag = function (t) {
                var s, n, r, a, o, l, c, d, u, h, p;
                if (i.draggedAxis && i.contentWrapperEl) {
                  var g = i.axis[i.draggedAxis].track,
                    m =
                      null !==
                        (n =
                          null === (s = g.rect) || void 0 === s
                            ? void 0
                            : s[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== n
                        ? n
                        : 0,
                    f = i.axis[i.draggedAxis].scrollbar,
                    v =
                      null !==
                        (a =
                          null === (r = i.contentWrapperEl) || void 0 === r
                            ? void 0
                            : r[i.axis[i.draggedAxis].scrollSizeAttr]) &&
                      void 0 !== a
                        ? a
                        : 0,
                    y = parseInt(
                      null !==
                        (l =
                          null === (o = i.elStyles) || void 0 === o
                            ? void 0
                            : o[i.axis[i.draggedAxis].sizeAttr]) && void 0 !== l
                        ? l
                        : "0px",
                      10
                    );
                  t.preventDefault(), t.stopPropagation();
                  var b =
                      ("y" === i.draggedAxis ? t.pageY : t.pageX) -
                      (null !==
                        (d =
                          null === (c = g.rect) || void 0 === c
                            ? void 0
                            : c[i.axis[i.draggedAxis].offsetAttr]) &&
                      void 0 !== d
                        ? d
                        : 0) -
                      i.axis[i.draggedAxis].dragOffset,
                    w =
                      ((b = i.isRtl
                        ? (null !==
                            (h =
                              null === (u = g.rect) || void 0 === u
                                ? void 0
                                : u[i.axis[i.draggedAxis].sizeAttr]) &&
                          void 0 !== h
                            ? h
                            : 0) -
                          f.size -
                          b
                        : b) /
                        (m - f.size)) *
                      (v - y);
                  "x" === i.draggedAxis &&
                    i.isRtl &&
                    (w = (
                      null === (p = e.getRtlHelpers()) || void 0 === p
                        ? void 0
                        : p.isScrollingToNegative
                    )
                      ? -w
                      : w),
                    (i.contentWrapperEl[
                      i.axis[i.draggedAxis].scrollOffsetAttr
                    ] = w);
                }
              }),
              (this.onEndDrag = function (e) {
                var t = _e(i.el),
                  s = Ie(i.el);
                e.preventDefault(),
                  e.stopPropagation(),
                  i.el.classList.remove(i.classNames.dragging),
                  t.removeEventListener("mousemove", i.drag, !0),
                  t.removeEventListener("mouseup", i.onEndDrag, !0),
                  (i.removePreventClickId = s.setTimeout(function () {
                    t.removeEventListener("click", i.preventClick, !0),
                      t.removeEventListener("dblclick", i.preventClick, !0),
                      (i.removePreventClickId = null);
                  }));
              }),
              (this.preventClick = function (e) {
                e.preventDefault(), e.stopPropagation();
              }),
              (this.el = t),
              (this.options = Le(Le({}, e.defaultOptions), s)),
              (this.classNames = Le(
                Le({}, e.defaultOptions.classNames),
                s.classNames
              )),
              (this.axis = {
                x: {
                  scrollOffsetAttr: "scrollLeft",
                  sizeAttr: "width",
                  scrollSizeAttr: "scrollWidth",
                  offsetSizeAttr: "offsetWidth",
                  offsetAttr: "left",
                  overflowAttr: "overflowX",
                  dragOffset: 0,
                  isOverflowing: !0,
                  forceVisible: !1,
                  track: { size: null, el: null, rect: null, isVisible: !1 },
                  scrollbar: {
                    size: null,
                    el: null,
                    rect: null,
                    isVisible: !1,
                  },
                },
                y: {
                  scrollOffsetAttr: "scrollTop",
                  sizeAttr: "height",
                  scrollSizeAttr: "scrollHeight",
                  offsetSizeAttr: "offsetHeight",
                  offsetAttr: "top",
                  overflowAttr: "overflowY",
                  dragOffset: 0,
                  isOverflowing: !0,
                  forceVisible: !1,
                  track: { size: null, el: null, rect: null, isVisible: !1 },
                  scrollbar: {
                    size: null,
                    el: null,
                    rect: null,
                    isVisible: !1,
                  },
                },
              }),
              "object" != typeof this.el || !this.el.nodeName)
            )
              throw new Error(
                "Argument passed to SimpleBar must be an HTML element instead of ".concat(
                  this.el
                )
              );
            (this.onMouseMove = Oe(this._onMouseMove, 64)),
              (this.onWindowResize = Te(this._onWindowResize, 64, {
                leading: !0,
              })),
              (this.onStopScrolling = Te(
                this._onStopScrolling,
                this.stopScrollDelay
              )),
              (this.onMouseEntered = Te(
                this._onMouseEntered,
                this.stopScrollDelay
              )),
              this.init();
          }
          return (
            (e.getRtlHelpers = function () {
              if (e.rtlHelpers) return e.rtlHelpers;
              var t = document.createElement("div");
              t.innerHTML =
                '<div class="simplebar-dummy-scrollbar-size"><div></div></div>';
              var s = t.firstElementChild,
                i = null == s ? void 0 : s.firstElementChild;
              if (!i) return null;
              document.body.appendChild(s), (s.scrollLeft = 0);
              var n = e.getOffset(s),
                r = e.getOffset(i);
              s.scrollLeft = -999;
              var a = e.getOffset(i);
              return (
                document.body.removeChild(s),
                (e.rtlHelpers = {
                  isScrollOriginAtZero: n.left !== r.left,
                  isScrollingToNegative: r.left !== a.left,
                }),
                e.rtlHelpers
              );
            }),
            (e.prototype.getScrollbarWidth = function () {
              try {
                return (this.contentWrapperEl &&
                  "none" ===
                    getComputedStyle(
                      this.contentWrapperEl,
                      "::-webkit-scrollbar"
                    ).display) ||
                  "scrollbarWidth" in document.documentElement.style ||
                  "-ms-overflow-style" in document.documentElement.style
                  ? 0
                  : ke();
              } catch (e) {
                return ke();
              }
            }),
            (e.getOffset = function (e) {
              var t = e.getBoundingClientRect(),
                s = _e(e),
                i = Ie(e);
              return {
                top: t.top + (i.pageYOffset || s.documentElement.scrollTop),
                left: t.left + (i.pageXOffset || s.documentElement.scrollLeft),
              };
            }),
            (e.prototype.init = function () {
              Ee &&
                (this.initDOM(),
                (this.rtlHelpers = e.getRtlHelpers()),
                (this.scrollbarWidth = this.getScrollbarWidth()),
                this.recalculate(),
                this.initListeners());
            }),
            (e.prototype.initDOM = function () {
              var e, t, s, i;
              (this.wrapperEl = this.el.querySelector(
                ".".concat(this.classNames.wrapper)
              )),
                (this.contentWrapperEl =
                  this.options.scrollableNode ||
                  this.el.querySelector(
                    ".".concat(this.classNames.contentWrapper)
                  )),
                (this.contentEl =
                  this.options.contentNode ||
                  this.el.querySelector(".".concat(this.classNames.contentEl))),
                (this.offsetEl = this.el.querySelector(
                  ".".concat(this.classNames.offset)
                )),
                (this.maskEl = this.el.querySelector(
                  ".".concat(this.classNames.mask)
                )),
                (this.placeholderEl = this.findChild(
                  this.wrapperEl,
                  ".".concat(this.classNames.placeholder)
                )),
                (this.heightAutoObserverWrapperEl = this.el.querySelector(
                  ".".concat(this.classNames.heightAutoObserverWrapperEl)
                )),
                (this.heightAutoObserverEl = this.el.querySelector(
                  ".".concat(this.classNames.heightAutoObserverEl)
                )),
                (this.axis.x.track.el = this.findChild(
                  this.el,
                  "."
                    .concat(this.classNames.track, ".")
                    .concat(this.classNames.horizontal)
                )),
                (this.axis.y.track.el = this.findChild(
                  this.el,
                  "."
                    .concat(this.classNames.track, ".")
                    .concat(this.classNames.vertical)
                )),
                (this.axis.x.scrollbar.el =
                  (null === (e = this.axis.x.track.el) || void 0 === e
                    ? void 0
                    : e.querySelector(".".concat(this.classNames.scrollbar))) ||
                  null),
                (this.axis.y.scrollbar.el =
                  (null === (t = this.axis.y.track.el) || void 0 === t
                    ? void 0
                    : t.querySelector(".".concat(this.classNames.scrollbar))) ||
                  null),
                this.options.autoHide ||
                  (null === (s = this.axis.x.scrollbar.el) ||
                    void 0 === s ||
                    s.classList.add(this.classNames.visible),
                  null === (i = this.axis.y.scrollbar.el) ||
                    void 0 === i ||
                    i.classList.add(this.classNames.visible));
            }),
            (e.prototype.initListeners = function () {
              var e,
                t = this,
                s = Ie(this.el);
              if (
                (this.el.addEventListener("mouseenter", this.onMouseEnter),
                this.el.addEventListener(
                  "pointerdown",
                  this.onPointerEvent,
                  !0
                ),
                this.el.addEventListener("mousemove", this.onMouseMove),
                this.el.addEventListener("mouseleave", this.onMouseLeave),
                null === (e = this.contentWrapperEl) ||
                  void 0 === e ||
                  e.addEventListener("scroll", this.onScroll),
                s.addEventListener("resize", this.onWindowResize),
                this.contentEl)
              ) {
                if (window.ResizeObserver) {
                  var i = !1,
                    n = s.ResizeObserver || ResizeObserver;
                  (this.resizeObserver = new n(function () {
                    i &&
                      s.requestAnimationFrame(function () {
                        t.recalculate();
                      });
                  })),
                    this.resizeObserver.observe(this.el),
                    this.resizeObserver.observe(this.contentEl),
                    s.requestAnimationFrame(function () {
                      i = !0;
                    });
                }
                (this.mutationObserver = new s.MutationObserver(function () {
                  s.requestAnimationFrame(function () {
                    t.recalculate();
                  });
                })),
                  this.mutationObserver.observe(this.contentEl, {
                    childList: !0,
                    subtree: !0,
                    characterData: !0,
                  });
              }
            }),
            (e.prototype.recalculate = function () {
              if (
                this.heightAutoObserverEl &&
                this.contentEl &&
                this.contentWrapperEl &&
                this.wrapperEl &&
                this.placeholderEl
              ) {
                var e = Ie(this.el);
                (this.elStyles = e.getComputedStyle(this.el)),
                  (this.isRtl = "rtl" === this.elStyles.direction);
                var t = this.contentEl.offsetWidth,
                  s = this.heightAutoObserverEl.offsetHeight <= 1,
                  i = this.heightAutoObserverEl.offsetWidth <= 1 || t > 0,
                  n = this.contentWrapperEl.offsetWidth,
                  r = this.elStyles.overflowX,
                  a = this.elStyles.overflowY;
                (this.contentEl.style.padding = ""
                  .concat(this.elStyles.paddingTop, " ")
                  .concat(this.elStyles.paddingRight, " ")
                  .concat(this.elStyles.paddingBottom, " ")
                  .concat(this.elStyles.paddingLeft)),
                  (this.wrapperEl.style.margin = "-"
                    .concat(this.elStyles.paddingTop, " -")
                    .concat(this.elStyles.paddingRight, " -")
                    .concat(this.elStyles.paddingBottom, " -")
                    .concat(this.elStyles.paddingLeft));
                var o = this.contentEl.scrollHeight,
                  l = this.contentEl.scrollWidth;
                (this.contentWrapperEl.style.height = s ? "auto" : "100%"),
                  (this.placeholderEl.style.width = i
                    ? "".concat(t || l, "px")
                    : "auto"),
                  (this.placeholderEl.style.height = "".concat(o, "px"));
                var c = this.contentWrapperEl.offsetHeight;
                (this.axis.x.isOverflowing = 0 !== t && l > t),
                  (this.axis.y.isOverflowing = o > c),
                  (this.axis.x.isOverflowing =
                    "hidden" !== r && this.axis.x.isOverflowing),
                  (this.axis.y.isOverflowing =
                    "hidden" !== a && this.axis.y.isOverflowing),
                  (this.axis.x.forceVisible =
                    "x" === this.options.forceVisible ||
                    !0 === this.options.forceVisible),
                  (this.axis.y.forceVisible =
                    "y" === this.options.forceVisible ||
                    !0 === this.options.forceVisible),
                  this.hideNativeScrollbar();
                var d = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                  u = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                (this.axis.x.isOverflowing =
                  this.axis.x.isOverflowing && l > n - u),
                  (this.axis.y.isOverflowing =
                    this.axis.y.isOverflowing && o > c - d),
                  (this.axis.x.scrollbar.size = this.getScrollbarSize("x")),
                  (this.axis.y.scrollbar.size = this.getScrollbarSize("y")),
                  this.axis.x.scrollbar.el &&
                    (this.axis.x.scrollbar.el.style.width = "".concat(
                      this.axis.x.scrollbar.size,
                      "px"
                    )),
                  this.axis.y.scrollbar.el &&
                    (this.axis.y.scrollbar.el.style.height = "".concat(
                      this.axis.y.scrollbar.size,
                      "px"
                    )),
                  this.positionScrollbar("x"),
                  this.positionScrollbar("y"),
                  this.toggleTrackVisibility("x"),
                  this.toggleTrackVisibility("y");
              }
            }),
            (e.prototype.getScrollbarSize = function (e) {
              var t, s;
              if (
                (void 0 === e && (e = "y"),
                !this.axis[e].isOverflowing || !this.contentEl)
              )
                return 0;
              var i,
                n = this.contentEl[this.axis[e].scrollSizeAttr],
                r =
                  null !==
                    (s =
                      null === (t = this.axis[e].track.el) || void 0 === t
                        ? void 0
                        : t[this.axis[e].offsetSizeAttr]) && void 0 !== s
                    ? s
                    : 0,
                a = r / n;
              return (
                (i = Math.max(~~(a * r), this.options.scrollbarMinSize)),
                this.options.scrollbarMaxSize &&
                  (i = Math.min(i, this.options.scrollbarMaxSize)),
                i
              );
            }),
            (e.prototype.positionScrollbar = function (t) {
              var s, i, n;
              void 0 === t && (t = "y");
              var r = this.axis[t].scrollbar;
              if (
                this.axis[t].isOverflowing &&
                this.contentWrapperEl &&
                r.el &&
                this.elStyles
              ) {
                var a = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                  o =
                    (null === (s = this.axis[t].track.el) || void 0 === s
                      ? void 0
                      : s[this.axis[t].offsetSizeAttr]) || 0,
                  l = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                  c = this.contentWrapperEl[this.axis[t].scrollOffsetAttr];
                (c =
                  "x" === t &&
                  this.isRtl &&
                  (null === (i = e.getRtlHelpers()) || void 0 === i
                    ? void 0
                    : i.isScrollOriginAtZero)
                    ? -c
                    : c),
                  "x" === t &&
                    this.isRtl &&
                    (c = (
                      null === (n = e.getRtlHelpers()) || void 0 === n
                        ? void 0
                        : n.isScrollingToNegative
                    )
                      ? c
                      : -c);
                var d = c / (a - l),
                  u = ~~((o - r.size) * d);
                (u = "x" === t && this.isRtl ? -u + (o - r.size) : u),
                  (r.el.style.transform =
                    "x" === t
                      ? "translate3d(".concat(u, "px, 0, 0)")
                      : "translate3d(0, ".concat(u, "px, 0)"));
              }
            }),
            (e.prototype.toggleTrackVisibility = function (e) {
              void 0 === e && (e = "y");
              var t = this.axis[e].track.el,
                s = this.axis[e].scrollbar.el;
              t &&
                s &&
                this.contentWrapperEl &&
                (this.axis[e].isOverflowing || this.axis[e].forceVisible
                  ? ((t.style.visibility = "visible"),
                    (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                      "scroll"),
                    this.el.classList.add(
                      "".concat(this.classNames.scrollable, "-").concat(e)
                    ))
                  : ((t.style.visibility = "hidden"),
                    (this.contentWrapperEl.style[this.axis[e].overflowAttr] =
                      "hidden"),
                    this.el.classList.remove(
                      "".concat(this.classNames.scrollable, "-").concat(e)
                    )),
                this.axis[e].isOverflowing
                  ? (s.style.display = "block")
                  : (s.style.display = "none"));
            }),
            (e.prototype.showScrollbar = function (e) {
              var t;
              void 0 === e && (e = "y"),
                this.axis[e].isOverflowing &&
                  !this.axis[e].scrollbar.isVisible &&
                  (null === (t = this.axis[e].scrollbar.el) ||
                    void 0 === t ||
                    t.classList.add(this.classNames.visible),
                  (this.axis[e].scrollbar.isVisible = !0));
            }),
            (e.prototype.hideScrollbar = function (e) {
              var t;
              void 0 === e && (e = "y"),
                this.axis[e].isOverflowing &&
                  this.axis[e].scrollbar.isVisible &&
                  (null === (t = this.axis[e].scrollbar.el) ||
                    void 0 === t ||
                    t.classList.remove(this.classNames.visible),
                  (this.axis[e].scrollbar.isVisible = !1));
            }),
            (e.prototype.hideNativeScrollbar = function () {
              this.offsetEl &&
                ((this.offsetEl.style[this.isRtl ? "left" : "right"] =
                  this.axis.y.isOverflowing || this.axis.y.forceVisible
                    ? "-".concat(this.scrollbarWidth, "px")
                    : "0px"),
                (this.offsetEl.style.bottom =
                  this.axis.x.isOverflowing || this.axis.x.forceVisible
                    ? "-".concat(this.scrollbarWidth, "px")
                    : "0px"));
            }),
            (e.prototype.onMouseMoveForAxis = function (e) {
              void 0 === e && (e = "y");
              var t = this.axis[e];
              t.track.el &&
                t.scrollbar.el &&
                ((t.track.rect = t.track.el.getBoundingClientRect()),
                (t.scrollbar.rect = t.scrollbar.el.getBoundingClientRect()),
                this.isWithinBounds(t.track.rect)
                  ? (this.showScrollbar(e),
                    t.track.el.classList.add(this.classNames.hover),
                    this.isWithinBounds(t.scrollbar.rect)
                      ? t.scrollbar.el.classList.add(this.classNames.hover)
                      : t.scrollbar.el.classList.remove(this.classNames.hover))
                  : (t.track.el.classList.remove(this.classNames.hover),
                    this.options.autoHide && this.hideScrollbar(e)));
            }),
            (e.prototype.onMouseLeaveForAxis = function (e) {
              var t, s;
              void 0 === e && (e = "y"),
                null === (t = this.axis[e].track.el) ||
                  void 0 === t ||
                  t.classList.remove(this.classNames.hover),
                null === (s = this.axis[e].scrollbar.el) ||
                  void 0 === s ||
                  s.classList.remove(this.classNames.hover),
                this.options.autoHide && this.hideScrollbar(e);
            }),
            (e.prototype.onDragStart = function (e, t) {
              var s;
              void 0 === t && (t = "y");
              var i = _e(this.el),
                n = Ie(this.el),
                r = this.axis[t].scrollbar,
                a = "y" === t ? e.pageY : e.pageX;
              (this.axis[t].dragOffset =
                a -
                ((null === (s = r.rect) || void 0 === s
                  ? void 0
                  : s[this.axis[t].offsetAttr]) || 0)),
                (this.draggedAxis = t),
                this.el.classList.add(this.classNames.dragging),
                i.addEventListener("mousemove", this.drag, !0),
                i.addEventListener("mouseup", this.onEndDrag, !0),
                null === this.removePreventClickId
                  ? (i.addEventListener("click", this.preventClick, !0),
                    i.addEventListener("dblclick", this.preventClick, !0))
                  : (n.clearTimeout(this.removePreventClickId),
                    (this.removePreventClickId = null));
            }),
            (e.prototype.onTrackClick = function (e, t) {
              var s,
                i,
                n,
                r,
                a = this;
              void 0 === t && (t = "y");
              var o = this.axis[t];
              if (
                this.options.clickOnTrack &&
                o.scrollbar.el &&
                this.contentWrapperEl
              ) {
                e.preventDefault();
                var l = Ie(this.el);
                this.axis[t].scrollbar.rect =
                  o.scrollbar.el.getBoundingClientRect();
                var c =
                    null !==
                      (i =
                        null === (s = this.axis[t].scrollbar.rect) ||
                        void 0 === s
                          ? void 0
                          : s[this.axis[t].offsetAttr]) && void 0 !== i
                      ? i
                      : 0,
                  d = parseInt(
                    null !==
                      (r =
                        null === (n = this.elStyles) || void 0 === n
                          ? void 0
                          : n[this.axis[t].sizeAttr]) && void 0 !== r
                      ? r
                      : "0px",
                    10
                  ),
                  u = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                  h =
                    ("y" === t ? this.mouseY - c : this.mouseX - c) < 0
                      ? -1
                      : 1,
                  p = -1 === h ? u - d : u + d,
                  g = function () {
                    a.contentWrapperEl &&
                      (-1 === h
                        ? u > p &&
                          ((u -= 40),
                          (a.contentWrapperEl[a.axis[t].scrollOffsetAttr] = u),
                          l.requestAnimationFrame(g))
                        : u < p &&
                          ((u += 40),
                          (a.contentWrapperEl[a.axis[t].scrollOffsetAttr] = u),
                          l.requestAnimationFrame(g)));
                  };
                g();
              }
            }),
            (e.prototype.getContentElement = function () {
              return this.contentEl;
            }),
            (e.prototype.getScrollElement = function () {
              return this.contentWrapperEl;
            }),
            (e.prototype.removeListeners = function () {
              var e = Ie(this.el);
              this.el.removeEventListener("mouseenter", this.onMouseEnter),
                this.el.removeEventListener(
                  "pointerdown",
                  this.onPointerEvent,
                  !0
                ),
                this.el.removeEventListener("mousemove", this.onMouseMove),
                this.el.removeEventListener("mouseleave", this.onMouseLeave),
                this.contentWrapperEl &&
                  this.contentWrapperEl.removeEventListener(
                    "scroll",
                    this.onScroll
                  ),
                e.removeEventListener("resize", this.onWindowResize),
                this.mutationObserver && this.mutationObserver.disconnect(),
                this.resizeObserver && this.resizeObserver.disconnect(),
                this.onMouseMove.cancel(),
                this.onWindowResize.cancel(),
                this.onStopScrolling.cancel(),
                this.onMouseEntered.cancel();
            }),
            (e.prototype.unMount = function () {
              this.removeListeners();
            }),
            (e.prototype.isWithinBounds = function (e) {
              return (
                this.mouseX >= e.left &&
                this.mouseX <= e.left + e.width &&
                this.mouseY >= e.top &&
                this.mouseY <= e.top + e.height
              );
            }),
            (e.prototype.findChild = function (e, t) {
              var s =
                e.matches ||
                e.webkitMatchesSelector ||
                e.mozMatchesSelector ||
                e.msMatchesSelector;
              return Array.prototype.filter.call(e.children, function (e) {
                return s.call(e, t);
              })[0];
            }),
            (e.rtlHelpers = null),
            (e.defaultOptions = {
              forceVisible: !1,
              clickOnTrack: !0,
              scrollbarMinSize: 25,
              scrollbarMaxSize: 0,
              ariaLabel: "scrollable content",
              classNames: {
                contentEl: "simplebar-content",
                contentWrapper: "simplebar-content-wrapper",
                offset: "simplebar-offset",
                mask: "simplebar-mask",
                wrapper: "simplebar-wrapper",
                placeholder: "simplebar-placeholder",
                scrollbar: "simplebar-scrollbar",
                track: "simplebar-track",
                heightAutoObserverWrapperEl:
                  "simplebar-height-auto-observer-wrapper",
                heightAutoObserverEl: "simplebar-height-auto-observer",
                visible: "simplebar-visible",
                horizontal: "simplebar-horizontal",
                vertical: "simplebar-vertical",
                hover: "simplebar-hover",
                dragging: "simplebar-dragging",
                scrolling: "simplebar-scrolling",
                scrollable: "simplebar-scrollable",
                mouseEntered: "simplebar-mouse-entered",
              },
              scrollableNode: null,
              contentNode: null,
              autoHide: !0,
            }),
            (e.getOptions = $e),
            e
          );
        })(),
        Pe = function (e, t) {
          return (
            (Pe =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var s in t)
                  Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
              }),
            Pe(e, t)
          );
        };
      var ze = De.getOptions,
        qe = (function (e) {
          function t() {
            for (var s = [], i = 0; i < arguments.length; i++)
              s[i] = arguments[i];
            var n = e.apply(this, s) || this;
            return t.instances.set(s[0], n), n;
          }
          return (
            (function (e, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null"
                );
              function s() {
                this.constructor = e;
              }
              Pe(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((s.prototype = t.prototype), new s()));
            })(t, e),
            (t.initDOMLoadedElements = function () {
              document.removeEventListener(
                "DOMContentLoaded",
                this.initDOMLoadedElements
              ),
                window.removeEventListener("load", this.initDOMLoadedElements),
                Array.prototype.forEach.call(
                  document.querySelectorAll("[data-simplebar]"),
                  function (e) {
                    "init" === e.getAttribute("data-simplebar") ||
                      t.instances.has(e) ||
                      new t(e, ze(e.attributes));
                  }
                );
            }),
            (t.removeObserver = function () {
              var e;
              null === (e = t.globalObserver) || void 0 === e || e.disconnect();
            }),
            (t.prototype.initDOM = function () {
              var e,
                t,
                s,
                i = this;
              if (
                !Array.prototype.filter.call(this.el.children, function (e) {
                  return e.classList.contains(i.classNames.wrapper);
                }).length
              ) {
                for (
                  this.wrapperEl = document.createElement("div"),
                    this.contentWrapperEl = document.createElement("div"),
                    this.offsetEl = document.createElement("div"),
                    this.maskEl = document.createElement("div"),
                    this.contentEl = document.createElement("div"),
                    this.placeholderEl = document.createElement("div"),
                    this.heightAutoObserverWrapperEl =
                      document.createElement("div"),
                    this.heightAutoObserverEl = document.createElement("div"),
                    this.wrapperEl.classList.add(this.classNames.wrapper),
                    this.contentWrapperEl.classList.add(
                      this.classNames.contentWrapper
                    ),
                    this.offsetEl.classList.add(this.classNames.offset),
                    this.maskEl.classList.add(this.classNames.mask),
                    this.contentEl.classList.add(this.classNames.contentEl),
                    this.placeholderEl.classList.add(
                      this.classNames.placeholder
                    ),
                    this.heightAutoObserverWrapperEl.classList.add(
                      this.classNames.heightAutoObserverWrapperEl
                    ),
                    this.heightAutoObserverEl.classList.add(
                      this.classNames.heightAutoObserverEl
                    );
                  this.el.firstChild;

                )
                  this.contentEl.appendChild(this.el.firstChild);
                this.contentWrapperEl.appendChild(this.contentEl),
                  this.offsetEl.appendChild(this.contentWrapperEl),
                  this.maskEl.appendChild(this.offsetEl),
                  this.heightAutoObserverWrapperEl.appendChild(
                    this.heightAutoObserverEl
                  ),
                  this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),
                  this.wrapperEl.appendChild(this.maskEl),
                  this.wrapperEl.appendChild(this.placeholderEl),
                  this.el.appendChild(this.wrapperEl),
                  null === (e = this.contentWrapperEl) ||
                    void 0 === e ||
                    e.setAttribute("tabindex", "0"),
                  null === (t = this.contentWrapperEl) ||
                    void 0 === t ||
                    t.setAttribute("role", "region"),
                  null === (s = this.contentWrapperEl) ||
                    void 0 === s ||
                    s.setAttribute("aria-label", this.options.ariaLabel);
              }
              if (!this.axis.x.track.el || !this.axis.y.track.el) {
                var n = document.createElement("div"),
                  r = document.createElement("div");
                n.classList.add(this.classNames.track),
                  r.classList.add(this.classNames.scrollbar),
                  n.appendChild(r),
                  (this.axis.x.track.el = n.cloneNode(!0)),
                  this.axis.x.track.el.classList.add(
                    this.classNames.horizontal
                  ),
                  (this.axis.y.track.el = n.cloneNode(!0)),
                  this.axis.y.track.el.classList.add(this.classNames.vertical),
                  this.el.appendChild(this.axis.x.track.el),
                  this.el.appendChild(this.axis.y.track.el);
              }
              De.prototype.initDOM.call(this),
                this.el.setAttribute("data-simplebar", "init");
            }),
            (t.prototype.unMount = function () {
              De.prototype.unMount.call(this), t.instances.delete(this.el);
            }),
            (t.initHtmlApi = function () {
              (this.initDOMLoadedElements =
                this.initDOMLoadedElements.bind(this)),
                "undefined" != typeof MutationObserver &&
                  ((this.globalObserver = new MutationObserver(
                    t.handleMutations
                  )),
                  this.globalObserver.observe(document, {
                    childList: !0,
                    subtree: !0,
                  })),
                "complete" === document.readyState ||
                ("loading" !== document.readyState &&
                  !document.documentElement.doScroll)
                  ? window.setTimeout(this.initDOMLoadedElements)
                  : (document.addEventListener(
                      "DOMContentLoaded",
                      this.initDOMLoadedElements
                    ),
                    window.addEventListener(
                      "load",
                      this.initDOMLoadedElements
                    ));
            }),
            (t.handleMutations = function (e) {
              e.forEach(function (e) {
                e.addedNodes.forEach(function (e) {
                  1 === e.nodeType &&
                    (e.hasAttribute("data-simplebar")
                      ? !t.instances.has(e) &&
                        document.documentElement.contains(e) &&
                        new t(e, ze(e.attributes))
                      : e
                          .querySelectorAll("[data-simplebar]")
                          .forEach(function (e) {
                            "init" !== e.getAttribute("data-simplebar") &&
                              !t.instances.has(e) &&
                              document.documentElement.contains(e) &&
                              new t(e, ze(e.attributes));
                          }));
                }),
                  e.removedNodes.forEach(function (e) {
                    1 === e.nodeType &&
                      ("init" === e.getAttribute("data-simplebar")
                        ? t.instances.has(e) &&
                          !document.documentElement.contains(e) &&
                          t.instances.get(e).unMount()
                        : Array.prototype.forEach.call(
                            e.querySelectorAll('[data-simplebar="init"]'),
                            function (e) {
                              t.instances.has(e) &&
                                !document.documentElement.contains(e) &&
                                t.instances.get(e).unMount();
                            }
                          ));
                  });
              });
            }),
            (t.instances = new WeakMap()),
            t
          );
        })(De);
      Ee && qe.initHtmlApi();
      new (s(732))({
        elements_selector: "[data-src]",
        class_loaded: "_lazy-loaded",
        use_native: !0,
      });
      class Ne {
        constructor(e) {
          (this.config = Object.assign({ logging: !0 }, e)),
            this.observer,
            !document.documentElement.classList.contains("watcher") &&
              this.scrollWatcherRun();
        }
        scrollWatcherUpdate() {
          this.scrollWatcherRun();
        }
        scrollWatcherRun() {
          document.documentElement.classList.add("watcher"),
            this.scrollWatcherConstructor(
              document.querySelectorAll("[data-watch]")
            );
        }
        scrollWatcherConstructor(e) {
          if (e.length) {
            this.scrollWatcherLogging(
              `Проснулся, слежу за объектами (${e.length})...`
            ),
              g(
                Array.from(e).map(function (e) {
                  return `${
                    e.dataset.watchRoot ? e.dataset.watchRoot : null
                  }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
                })
              ).forEach((t) => {
                let s = t.split("|"),
                  i = { root: s[0], margin: s[1], threshold: s[2] },
                  n = Array.from(e).filter(function (e) {
                    let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                      s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                      n = e.dataset.watchThreshold
                        ? e.dataset.watchThreshold
                        : 0;
                    if (
                      String(t) === i.root &&
                      String(s) === i.margin &&
                      String(n) === i.threshold
                    )
                      return e;
                  }),
                  r = this.getScrollWatcherConfig(i);
                this.scrollWatcherInit(n, r);
              });
          } else
            this.scrollWatcherLogging(
              "Сплю, нет объектов для слежения. ZzzZZzz"
            );
        }
        getScrollWatcherConfig(e) {
          let t = {};
          if (
            (document.querySelector(e.root)
              ? (t.root = document.querySelector(e.root))
              : "null" !== e.root &&
                this.scrollWatcherLogging(
                  `Эмм... родительского объекта ${e.root} нет на странице`
                ),
            (t.rootMargin = e.margin),
            !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
          ) {
            if ("prx" === e.threshold) {
              e.threshold = [];
              for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
            } else e.threshold = e.threshold.split(",");
            return (t.threshold = e.threshold), t;
          }
          this.scrollWatcherLogging(
            "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
          );
        }
        scrollWatcherCreate(e) {
          this.observer = new IntersectionObserver((e, t) => {
            e.forEach((e) => {
              this.scrollWatcherCallback(e, t);
            });
          }, e);
        }
        scrollWatcherInit(e, t) {
          this.scrollWatcherCreate(t),
            e.forEach((e) => this.observer.observe(e));
        }
        scrollWatcherIntersecting(e, t) {
          e.isIntersecting
            ? (!t.classList.contains("_watcher-view") &&
                t.classList.add("_watcher-view"),
              this.scrollWatcherLogging(
                `Я вижу ${t.classList}, добавил класс _watcher-view`
              ))
            : (t.classList.contains("_watcher-view") &&
                t.classList.remove("_watcher-view"),
              this.scrollWatcherLogging(
                `Я не вижу ${t.classList}, убрал класс _watcher-view`
              ));
        }
        scrollWatcherOff(e, t) {
          t.unobserve(e),
            this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
        }
        scrollWatcherLogging(e) {
          this.config.logging && p(`[Наблюдатель]: ${e}`);
        }
        scrollWatcherCallback(e, t) {
          const s = e.target;
          this.scrollWatcherIntersecting(e, s),
            s.hasAttribute("data-watch-once") &&
              e.isIntersecting &&
              this.scrollWatcherOff(s, t),
            document.dispatchEvent(
              new CustomEvent("watcherCallback", { detail: { entry: e } })
            );
        }
      }
      let Be = !1;
      setTimeout(() => {
        if (Be) {
          let e = new Event("windowScroll");
          window.addEventListener("scroll", function (t) {
            document.dispatchEvent(e);
          });
        }
      }, 0);
      var He = function () {
        return (
          (He =
            Object.assign ||
            function (e) {
              for (var t, s = 1, i = arguments.length; s < i; s++)
                for (var n in (t = arguments[s]))
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              return e;
            }),
          He.apply(this, arguments)
        );
      };
      var We = "lgAfterAppendSlide",
        Ge = "lgInit",
        Fe = "lgHasVideo",
        je = "lgContainerResize",
        Re = "lgUpdateSlides",
        Ve = "lgAfterAppendSubHtml",
        Ye = "lgBeforeOpen",
        Xe = "lgAfterOpen",
        Ue = "lgSlideItemLoad",
        Ke = "lgBeforeSlide",
        Ze = "lgAfterSlide",
        Je = "lgPosterClick",
        Qe = "lgDragStart",
        et = "lgDragMove",
        tt = "lgDragEnd",
        st = "lgBeforeNextSlide",
        it = "lgBeforePrevSlide",
        nt = "lgBeforeClose",
        rt = "lgAfterClose",
        at = {
          mode: "lg-slide",
          easing: "ease",
          speed: 400,
          licenseKey: "0000-0000-000-0000",
          height: "100%",
          width: "100%",
          addClass: "",
          startClass: "lg-start-zoom",
          backdropDuration: 300,
          container: "",
          startAnimationDuration: 400,
          zoomFromOrigin: !0,
          hideBarsDelay: 0,
          showBarsAfter: 1e4,
          slideDelay: 0,
          supportLegacyBrowser: !0,
          allowMediaOverlap: !1,
          videoMaxSize: "1280-720",
          loadYouTubePoster: !0,
          defaultCaptionHeight: 0,
          ariaLabelledby: "",
          ariaDescribedby: "",
          resetScrollPosition: !0,
          hideScrollbar: !1,
          closable: !0,
          swipeToClose: !0,
          closeOnTap: !0,
          showCloseIcon: !0,
          showMaximizeIcon: !1,
          loop: !0,
          escKey: !0,
          keyPress: !0,
          trapFocus: !0,
          controls: !0,
          slideEndAnimation: !0,
          hideControlOnEnd: !1,
          mousewheel: !1,
          getCaptionFromTitleOrAlt: !0,
          appendSubHtmlTo: ".lg-sub-html",
          subHtmlSelectorRelative: !1,
          preload: 2,
          numberOfSlideItemsInDom: 10,
          selector: "",
          selectWithin: "",
          nextHtml: "",
          prevHtml: "",
          index: 0,
          iframeWidth: "100%",
          iframeHeight: "100%",
          iframeMaxWidth: "100%",
          iframeMaxHeight: "100%",
          download: !0,
          counter: !0,
          appendCounterTo: ".lg-toolbar",
          swipeThreshold: 50,
          enableSwipe: !0,
          enableDrag: !0,
          dynamic: !1,
          dynamicEl: [],
          extraProps: [],
          exThumbImage: "",
          isMobile: void 0,
          mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
          plugins: [],
          strings: {
            closeGallery: "Close gallery",
            toggleMaximize: "Toggle maximize",
            previousSlide: "Previous slide",
            nextSlide: "Next slide",
            download: "Download",
            playVideo: "Play video",
          },
        };
      var ot = (function () {
        function e(e) {
          return (
            (this.cssVenderPrefixes = [
              "TransitionDuration",
              "TransitionTimingFunction",
              "Transform",
              "Transition",
            ]),
            (this.selector = this._getSelector(e)),
            (this.firstElement = this._getFirstEl()),
            this
          );
        }
        return (
          (e.generateUUID = function () {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
              /[xy]/g,
              function (e) {
                var t = (16 * Math.random()) | 0;
                return ("x" == e ? t : (3 & t) | 8).toString(16);
              }
            );
          }),
          (e.prototype._getSelector = function (e, t) {
            return (
              void 0 === t && (t = document),
              "string" != typeof e
                ? e
                : ((t = t || document),
                  "#" === e.substring(0, 1)
                    ? t.querySelector(e)
                    : t.querySelectorAll(e))
            );
          }),
          (e.prototype._each = function (e) {
            return this.selector
              ? (void 0 !== this.selector.length
                  ? [].forEach.call(this.selector, e)
                  : e(this.selector, 0),
                this)
              : this;
          }),
          (e.prototype._setCssVendorPrefix = function (e, t, s) {
            var i = t.replace(/-([a-z])/gi, function (e, t) {
              return t.toUpperCase();
            });
            -1 !== this.cssVenderPrefixes.indexOf(i)
              ? ((e.style[i.charAt(0).toLowerCase() + i.slice(1)] = s),
                (e.style["webkit" + i] = s),
                (e.style["moz" + i] = s),
                (e.style["ms" + i] = s),
                (e.style["o" + i] = s))
              : (e.style[i] = s);
          }),
          (e.prototype._getFirstEl = function () {
            return this.selector && void 0 !== this.selector.length
              ? this.selector[0]
              : this.selector;
          }),
          (e.prototype.isEventMatched = function (e, t) {
            var s = t.split(".");
            return e
              .split(".")
              .filter(function (e) {
                return e;
              })
              .every(function (e) {
                return -1 !== s.indexOf(e);
              });
          }),
          (e.prototype.attr = function (e, t) {
            return void 0 === t
              ? this.firstElement
                ? this.firstElement.getAttribute(e)
                : ""
              : (this._each(function (s) {
                  s.setAttribute(e, t);
                }),
                this);
          }),
          (e.prototype.find = function (e) {
            return lt(this._getSelector(e, this.selector));
          }),
          (e.prototype.first = function () {
            return this.selector && void 0 !== this.selector.length
              ? lt(this.selector[0])
              : lt(this.selector);
          }),
          (e.prototype.eq = function (e) {
            return lt(this.selector[e]);
          }),
          (e.prototype.parent = function () {
            return lt(this.selector.parentElement);
          }),
          (e.prototype.get = function () {
            return this._getFirstEl();
          }),
          (e.prototype.removeAttr = function (e) {
            var t = e.split(" ");
            return (
              this._each(function (e) {
                t.forEach(function (t) {
                  return e.removeAttribute(t);
                });
              }),
              this
            );
          }),
          (e.prototype.wrap = function (e) {
            if (!this.firstElement) return this;
            var t = document.createElement("div");
            return (
              (t.className = e),
              this.firstElement.parentNode.insertBefore(t, this.firstElement),
              this.firstElement.parentNode.removeChild(this.firstElement),
              t.appendChild(this.firstElement),
              this
            );
          }),
          (e.prototype.addClass = function (e) {
            return (
              void 0 === e && (e = ""),
              this._each(function (t) {
                e.split(" ").forEach(function (e) {
                  e && t.classList.add(e);
                });
              }),
              this
            );
          }),
          (e.prototype.removeClass = function (e) {
            return (
              this._each(function (t) {
                e.split(" ").forEach(function (e) {
                  e && t.classList.remove(e);
                });
              }),
              this
            );
          }),
          (e.prototype.hasClass = function (e) {
            return (
              !!this.firstElement && this.firstElement.classList.contains(e)
            );
          }),
          (e.prototype.hasAttribute = function (e) {
            return !!this.firstElement && this.firstElement.hasAttribute(e);
          }),
          (e.prototype.toggleClass = function (e) {
            return this.firstElement
              ? (this.hasClass(e) ? this.removeClass(e) : this.addClass(e),
                this)
              : this;
          }),
          (e.prototype.css = function (e, t) {
            var s = this;
            return (
              this._each(function (i) {
                s._setCssVendorPrefix(i, e, t);
              }),
              this
            );
          }),
          (e.prototype.on = function (t, s) {
            var i = this;
            return this.selector
              ? (t.split(" ").forEach(function (t) {
                  Array.isArray(e.eventListeners[t]) ||
                    (e.eventListeners[t] = []),
                    e.eventListeners[t].push(s),
                    i.selector.addEventListener(t.split(".")[0], s);
                }),
                this)
              : this;
          }),
          (e.prototype.once = function (e, t) {
            var s = this;
            return (
              this.on(e, function () {
                s.off(e), t(e);
              }),
              this
            );
          }),
          (e.prototype.off = function (t) {
            var s = this;
            return this.selector
              ? (Object.keys(e.eventListeners).forEach(function (i) {
                  s.isEventMatched(t, i) &&
                    (e.eventListeners[i].forEach(function (e) {
                      s.selector.removeEventListener(i.split(".")[0], e);
                    }),
                    (e.eventListeners[i] = []));
                }),
                this)
              : this;
          }),
          (e.prototype.trigger = function (e, t) {
            if (!this.firstElement) return this;
            var s = new CustomEvent(e.split(".")[0], { detail: t || null });
            return this.firstElement.dispatchEvent(s), this;
          }),
          (e.prototype.load = function (e) {
            var t = this;
            return (
              fetch(e)
                .then(function (e) {
                  return e.text();
                })
                .then(function (e) {
                  t.selector.innerHTML = e;
                }),
              this
            );
          }),
          (e.prototype.html = function (e) {
            return void 0 === e
              ? this.firstElement
                ? this.firstElement.innerHTML
                : ""
              : (this._each(function (t) {
                  t.innerHTML = e;
                }),
                this);
          }),
          (e.prototype.append = function (e) {
            return (
              this._each(function (t) {
                "string" == typeof e
                  ? t.insertAdjacentHTML("beforeend", e)
                  : t.appendChild(e);
              }),
              this
            );
          }),
          (e.prototype.prepend = function (e) {
            return (
              this._each(function (t) {
                t.insertAdjacentHTML("afterbegin", e);
              }),
              this
            );
          }),
          (e.prototype.remove = function () {
            return (
              this._each(function (e) {
                e.parentNode.removeChild(e);
              }),
              this
            );
          }),
          (e.prototype.empty = function () {
            return (
              this._each(function (e) {
                e.innerHTML = "";
              }),
              this
            );
          }),
          (e.prototype.scrollTop = function (e) {
            return void 0 !== e
              ? ((document.body.scrollTop = e),
                (document.documentElement.scrollTop = e),
                this)
              : window.pageYOffset ||
                  document.documentElement.scrollTop ||
                  document.body.scrollTop ||
                  0;
          }),
          (e.prototype.scrollLeft = function (e) {
            return void 0 !== e
              ? ((document.body.scrollLeft = e),
                (document.documentElement.scrollLeft = e),
                this)
              : window.pageXOffset ||
                  document.documentElement.scrollLeft ||
                  document.body.scrollLeft ||
                  0;
          }),
          (e.prototype.offset = function () {
            if (!this.firstElement) return { left: 0, top: 0 };
            var e = this.firstElement.getBoundingClientRect(),
              t = lt("body").style().marginLeft;
            return {
              left: e.left - parseFloat(t) + this.scrollLeft(),
              top: e.top + this.scrollTop(),
            };
          }),
          (e.prototype.style = function () {
            return this.firstElement
              ? this.firstElement.currentStyle ||
                  window.getComputedStyle(this.firstElement)
              : {};
          }),
          (e.prototype.width = function () {
            var e = this.style();
            return (
              this.firstElement.clientWidth -
              parseFloat(e.paddingLeft) -
              parseFloat(e.paddingRight)
            );
          }),
          (e.prototype.height = function () {
            var e = this.style();
            return (
              this.firstElement.clientHeight -
              parseFloat(e.paddingTop) -
              parseFloat(e.paddingBottom)
            );
          }),
          (e.eventListeners = {}),
          e
        );
      })();
      function lt(e) {
        return (
          (function () {
            if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function (e, t) {
              t = t || { bubbles: !1, cancelable: !1, detail: null };
              var s = document.createEvent("CustomEvent");
              return s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), s;
            };
          })(),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector),
          new ot(e)
        );
      }
      var ct = [
        "src",
        "sources",
        "subHtml",
        "subHtmlUrl",
        "html",
        "video",
        "poster",
        "slideName",
        "responsive",
        "srcset",
        "sizes",
        "iframe",
        "downloadUrl",
        "download",
        "width",
        "facebookShareUrl",
        "tweetText",
        "iframeTitle",
        "twitterShareUrl",
        "pinterestShareUrl",
        "pinterestText",
        "fbHtml",
        "disqusIdentifier",
        "disqusUrl",
      ];
      function dt(e) {
        return "href" === e
          ? "src"
          : (e = (e =
              (e = e.replace("data-", "")).charAt(0).toLowerCase() +
              e.slice(1)).replace(/-([a-z])/g, function (e) {
              return e[1].toUpperCase();
            }));
      }
      var ut = function (e, t, s, i) {
          void 0 === s && (s = 0);
          var n = lt(e).attr("data-lg-size") || i;
          if (n) {
            var r = n.split(",");
            if (r[1])
              for (var a = window.innerWidth, o = 0; o < r.length; o++) {
                var l = r[o];
                if (parseInt(l.split("-")[2], 10) > a) {
                  n = l;
                  break;
                }
                o === r.length - 1 && (n = l);
              }
            var c = n.split("-"),
              d = parseInt(c[0], 10),
              u = parseInt(c[1], 10),
              h = t.width(),
              p = t.height() - s,
              g = Math.min(h, d),
              m = Math.min(p, u),
              f = Math.min(g / d, m / u);
            return { width: d * f, height: u * f };
          }
        },
        ht = function (e, t, s, i, n) {
          if (n) {
            var r = lt(e).find("img").first();
            if (r.get()) {
              var a = t.get().getBoundingClientRect(),
                o = a.width,
                l = t.height() - (s + i),
                c = r.width(),
                d = r.height(),
                u = r.style(),
                h =
                  (o - c) / 2 -
                  r.offset().left +
                  (parseFloat(u.paddingLeft) || 0) +
                  (parseFloat(u.borderLeft) || 0) +
                  lt(window).scrollLeft() +
                  a.left,
                p =
                  (l - d) / 2 -
                  r.offset().top +
                  (parseFloat(u.paddingTop) || 0) +
                  (parseFloat(u.borderTop) || 0) +
                  lt(window).scrollTop() +
                  s;
              return (
                "translate3d(" +
                (h *= -1) +
                "px, " +
                (p *= -1) +
                "px, 0) scale3d(" +
                c / n.width +
                ", " +
                d / n.height +
                ", 1)"
              );
            }
          }
        },
        pt = function (e, t, s, i, n, r) {
          return (
            '<div class="lg-video-cont lg-has-iframe" style="width:' +
            e +
            "; max-width:" +
            s +
            "; height: " +
            t +
            "; max-height:" +
            i +
            '">\n                    <iframe class="lg-object" frameborder="0" ' +
            (r ? 'title="' + r + '"' : "") +
            ' src="' +
            n +
            '"  allowfullscreen="true"></iframe>\n                </div>'
          );
        },
        gt = function (e, t, s, i, n, r) {
          var a =
              "<img " +
              s +
              " " +
              (i ? 'srcset="' + i + '"' : "") +
              "  " +
              (n ? 'sizes="' + n + '"' : "") +
              ' class="lg-object lg-image" data-index="' +
              e +
              '" src="' +
              t +
              '" />',
            o = "";
          r &&
            (o = ("string" == typeof r ? JSON.parse(r) : r).map(function (e) {
              var t = "";
              return (
                Object.keys(e).forEach(function (s) {
                  t += " " + s + '="' + e[s] + '"';
                }),
                "<source " + t + "></source>"
              );
            }));
          return "" + o + a;
        },
        mt = function (e) {
          for (var t = [], s = [], i = "", n = 0; n < e.length; n++) {
            var r = e[n].split(" ");
            "" === r[0] && r.splice(0, 1), s.push(r[0]), t.push(r[1]);
          }
          for (var a = window.innerWidth, o = 0; o < t.length; o++)
            if (parseInt(t[o], 10) > a) {
              i = s[o];
              break;
            }
          return i;
        },
        ft = function (e) {
          return !!e && !!e.complete && 0 !== e.naturalWidth;
        },
        vt = function (e, t, s, i, n) {
          return (
            '<div class="lg-video-cont ' +
            (n && n.youtube
              ? "lg-has-youtube"
              : n && n.vimeo
              ? "lg-has-vimeo"
              : "lg-has-html5") +
            '" style="' +
            s +
            '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
            i +
            '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
            i +
            '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
            (t || "") +
            '\n            <img class="lg-object lg-video-poster" src="' +
            e +
            '" />\n        </div>'
          );
        },
        yt = function (e) {
          var t = e.querySelectorAll(
            'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
          );
          return [].filter.call(t, function (e) {
            var t = window.getComputedStyle(e);
            return "none" !== t.display && "hidden" !== t.visibility;
          });
        },
        bt = function (e, t, s, i) {
          var n = [],
            r = (function () {
              for (var e = 0, t = 0, s = arguments.length; t < s; t++)
                e += arguments[t].length;
              var i = Array(e),
                n = 0;
              for (t = 0; t < s; t++)
                for (var r = arguments[t], a = 0, o = r.length; a < o; a++, n++)
                  i[n] = r[a];
              return i;
            })(ct, t);
          return (
            [].forEach.call(e, function (e) {
              for (var t = {}, a = 0; a < e.attributes.length; a++) {
                var o = e.attributes[a];
                if (o.specified) {
                  var l = dt(o.name),
                    c = "";
                  r.indexOf(l) > -1 && (c = l), c && (t[c] = o.value);
                }
              }
              var d = lt(e),
                u = d.find("img").first().attr("alt"),
                h = d.attr("title"),
                p = i ? d.attr(i) : d.find("img").first().attr("src");
              (t.thumb = p),
                s && !t.subHtml && (t.subHtml = h || u || ""),
                (t.alt = u || h || ""),
                n.push(t);
            }),
            n
          );
        },
        wt = function () {
          return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        },
        St = function (e, t, s) {
          if (!e)
            return t
              ? { html5: !0 }
              : void console.error(
                  "lightGallery :- data-src is not provided on slide item " +
                    (s + 1) +
                    ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
                );
          var i = e.match(
              /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
            ),
            n = e.match(
              /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
            ),
            r = e.match(
              /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
            );
          return i
            ? { youtube: i }
            : n
            ? { vimeo: n }
            : r
            ? { wistia: r }
            : void 0;
        },
        xt = 0,
        Ct = (function () {
          function e(e, t) {
            if (
              ((this.lgOpened = !1),
              (this.index = 0),
              (this.plugins = []),
              (this.lGalleryOn = !1),
              (this.lgBusy = !1),
              (this.currentItemsInDom = []),
              (this.prevScrollTop = 0),
              (this.bodyPaddingRight = 0),
              (this.isDummyImageRemoved = !1),
              (this.dragOrSwipeEnabled = !1),
              (this.mediaContainerPosition = { top: 0, bottom: 0 }),
              !e)
            )
              return this;
            if (
              (xt++,
              (this.lgId = xt),
              (this.el = e),
              (this.LGel = lt(e)),
              this.generateSettings(t),
              this.buildModules(),
              this.settings.dynamic &&
                void 0 !== this.settings.dynamicEl &&
                !Array.isArray(this.settings.dynamicEl))
            )
              throw "When using dynamic mode, you must also define dynamicEl as an Array.";
            return (
              (this.galleryItems = this.getItems()),
              this.normalizeSettings(),
              this.init(),
              this.validateLicense(),
              this
            );
          }
          return (
            (e.prototype.generateSettings = function (e) {
              if (
                ((this.settings = He(He({}, at), e)),
                this.settings.isMobile &&
                "function" == typeof this.settings.isMobile
                  ? this.settings.isMobile()
                  : wt())
              ) {
                var t = He(
                  He({}, this.settings.mobileSettings),
                  this.settings.mobileSettings
                );
                this.settings = He(He({}, this.settings), t);
              }
            }),
            (e.prototype.normalizeSettings = function () {
              this.settings.slideEndAnimation &&
                (this.settings.hideControlOnEnd = !1),
                this.settings.closable || (this.settings.swipeToClose = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                this.settings.dynamic && (this.zoomFromOrigin = !1),
                this.settings.container ||
                  (this.settings.container = document.body),
                (this.settings.preload = Math.min(
                  this.settings.preload,
                  this.galleryItems.length
                ));
            }),
            (e.prototype.init = function () {
              var e = this;
              this.addSlideVideoInfo(this.galleryItems),
                this.buildStructure(),
                this.LGel.trigger(Ge, { instance: this }),
                this.settings.keyPress && this.keyPress(),
                setTimeout(function () {
                  e.enableDrag(), e.enableSwipe(), e.triggerPosterClick();
                }, 50),
                this.arrow(),
                this.settings.mousewheel && this.mousewheel(),
                this.settings.dynamic || this.openGalleryOnItemClick();
            }),
            (e.prototype.openGalleryOnItemClick = function () {
              for (
                var e = this,
                  t = function (t) {
                    var i = s.items[t],
                      n = lt(i),
                      r = ot.generateUUID();
                    n.attr("data-lg-id", r).on(
                      "click.lgcustom-item-" + r,
                      function (s) {
                        s.preventDefault();
                        var n = e.settings.index || t;
                        e.openGallery(n, i);
                      }
                    );
                  },
                  s = this,
                  i = 0;
                i < this.items.length;
                i++
              )
                t(i);
            }),
            (e.prototype.buildModules = function () {
              var e = this;
              this.settings.plugins.forEach(function (t) {
                e.plugins.push(new t(e, lt));
              });
            }),
            (e.prototype.validateLicense = function () {
              this.settings.licenseKey
                ? "0000-0000-000-0000" === this.settings.licenseKey &&
                  console.warn(
                    "lightGallery: " +
                      this.settings.licenseKey +
                      " license key is not valid for production use"
                  )
                : console.error("Please provide a valid license key");
            }),
            (e.prototype.getSlideItem = function (e) {
              return lt(this.getSlideItemId(e));
            }),
            (e.prototype.getSlideItemId = function (e) {
              return "#lg-item-" + this.lgId + "-" + e;
            }),
            (e.prototype.getIdName = function (e) {
              return e + "-" + this.lgId;
            }),
            (e.prototype.getElementById = function (e) {
              return lt("#" + this.getIdName(e));
            }),
            (e.prototype.manageSingleSlideClassName = function () {
              this.galleryItems.length < 2
                ? this.outer.addClass("lg-single-item")
                : this.outer.removeClass("lg-single-item");
            }),
            (e.prototype.buildStructure = function () {
              var e = this;
              if (!(this.$container && this.$container.get())) {
                var t = "",
                  s = "";
                this.settings.controls &&
                  (t =
                    '<button type="button" id="' +
                    this.getIdName("lg-prev") +
                    '" aria-label="' +
                    this.settings.strings.previousSlide +
                    '" class="lg-prev lg-icon"> ' +
                    this.settings.prevHtml +
                    ' </button>\n                <button type="button" id="' +
                    this.getIdName("lg-next") +
                    '" aria-label="' +
                    this.settings.strings.nextSlide +
                    '" class="lg-next lg-icon"> ' +
                    this.settings.nextHtml +
                    " </button>"),
                  ".lg-item" !== this.settings.appendSubHtmlTo &&
                    (s =
                      '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                var i = "";
                this.settings.allowMediaOverlap && (i += "lg-media-overlap ");
                var n = this.settings.ariaLabelledby
                    ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                    : "",
                  r = this.settings.ariaDescribedby
                    ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                    : "",
                  a =
                    "lg-container " +
                    this.settings.addClass +
                    " " +
                    (document.body !== this.settings.container
                      ? "lg-inline"
                      : ""),
                  o =
                    this.settings.closable && this.settings.showCloseIcon
                      ? '<button type="button" aria-label="' +
                        this.settings.strings.closeGallery +
                        '" id="' +
                        this.getIdName("lg-close") +
                        '" class="lg-close lg-icon"></button>'
                      : "",
                  l = this.settings.showMaximizeIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.toggleMaximize +
                      '" id="' +
                      this.getIdName("lg-maximize") +
                      '" class="lg-maximize lg-icon"></button>'
                    : "",
                  c =
                    '\n        <div class="' +
                    a +
                    '" id="' +
                    this.getIdName("lg-container") +
                    '" tabindex="-1" aria-modal="true" ' +
                    n +
                    " " +
                    r +
                    ' role="dialog"\n        >\n            <div id="' +
                    this.getIdName("lg-backdrop") +
                    '" class="lg-backdrop"></div>\n\n            <div id="' +
                    this.getIdName("lg-outer") +
                    '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                    i +
                    ' ">\n\n              <div id="' +
                    this.getIdName("lg-content") +
                    '" class="lg-content">\n                <div id="' +
                    this.getIdName("lg-inner") +
                    '" class="lg-inner">\n                </div>\n                ' +
                    t +
                    '\n              </div>\n                <div id="' +
                    this.getIdName("lg-toolbar") +
                    '" class="lg-toolbar lg-group">\n                    ' +
                    l +
                    "\n                    " +
                    o +
                    "\n                    </div>\n                    " +
                    (".lg-outer" === this.settings.appendSubHtmlTo ? s : "") +
                    '\n                <div id="' +
                    this.getIdName("lg-components") +
                    '" class="lg-components">\n                    ' +
                    (".lg-sub-html" === this.settings.appendSubHtmlTo
                      ? s
                      : "") +
                    "\n                </div>\n            </div>\n        </div>\n        ";
                lt(this.settings.container).append(c),
                  document.body !== this.settings.container &&
                    lt(this.settings.container).css("position", "relative"),
                  (this.outer = this.getElementById("lg-outer")),
                  (this.$lgComponents = this.getElementById("lg-components")),
                  (this.$backdrop = this.getElementById("lg-backdrop")),
                  (this.$container = this.getElementById("lg-container")),
                  (this.$inner = this.getElementById("lg-inner")),
                  (this.$content = this.getElementById("lg-content")),
                  (this.$toolbar = this.getElementById("lg-toolbar")),
                  this.$backdrop.css(
                    "transition-duration",
                    this.settings.backdropDuration + "ms"
                  );
                var d = this.settings.mode + " ";
                this.manageSingleSlideClassName(),
                  this.settings.enableDrag && (d += "lg-grab "),
                  this.outer.addClass(d),
                  this.$inner.css(
                    "transition-timing-function",
                    this.settings.easing
                  ),
                  this.$inner.css(
                    "transition-duration",
                    this.settings.speed + "ms"
                  ),
                  this.settings.download &&
                    this.$toolbar.append(
                      '<a id="' +
                        this.getIdName("lg-download") +
                        '" target="_blank" rel="noopener" aria-label="' +
                        this.settings.strings.download +
                        '" download class="lg-download lg-icon"></a>'
                    ),
                  this.counter(),
                  lt(window).on(
                    "resize.lg.global" +
                      this.lgId +
                      " orientationchange.lg.global" +
                      this.lgId,
                    function () {
                      e.refreshOnResize();
                    }
                  ),
                  this.hideBars(),
                  this.manageCloseGallery(),
                  this.toggleMaximize(),
                  this.initModules();
              }
            }),
            (e.prototype.refreshOnResize = function () {
              if (this.lgOpened) {
                var e = this.galleryItems[this.index].__slideVideoInfo;
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var t = this.mediaContainerPosition,
                  s = t.top,
                  i = t.bottom;
                if (
                  ((this.currentImageSize = ut(
                    this.items[this.index],
                    this.outer,
                    s + i,
                    e && this.settings.videoMaxSize
                  )),
                  e && this.resizeVideoSlide(this.index, this.currentImageSize),
                  this.zoomFromOrigin && !this.isDummyImageRemoved)
                ) {
                  var n = this.getDummyImgStyles(this.currentImageSize);
                  this.outer
                    .find(".lg-current .lg-dummy-img")
                    .first()
                    .attr("style", n);
                }
                this.LGel.trigger(je);
              }
            }),
            (e.prototype.resizeVideoSlide = function (e, t) {
              var s = this.getVideoContStyle(t);
              this.getSlideItem(e).find(".lg-video-cont").attr("style", s);
            }),
            (e.prototype.updateSlides = function (e, t) {
              if (
                (this.index > e.length - 1 && (this.index = e.length - 1),
                1 === e.length && (this.index = 0),
                e.length)
              ) {
                var s = this.galleryItems[t].src;
                (this.galleryItems = e),
                  this.updateControls(),
                  this.$inner.empty(),
                  (this.currentItemsInDom = []);
                var i = 0;
                this.galleryItems.some(function (e, t) {
                  return e.src === s && ((i = t), !0);
                }),
                  (this.currentItemsInDom = this.organizeSlideItems(i, -1)),
                  this.loadContent(i, !0),
                  this.getSlideItem(i).addClass("lg-current"),
                  (this.index = i),
                  this.updateCurrentCounter(i),
                  this.LGel.trigger(Re);
              } else this.closeGallery();
            }),
            (e.prototype.getItems = function () {
              if (((this.items = []), this.settings.dynamic))
                return this.settings.dynamicEl || [];
              if ("this" === this.settings.selector) this.items.push(this.el);
              else if (this.settings.selector)
                if ("string" == typeof this.settings.selector)
                  if (this.settings.selectWithin) {
                    var e = lt(this.settings.selectWithin);
                    this.items = e.find(this.settings.selector).get();
                  } else
                    this.items = this.el.querySelectorAll(
                      this.settings.selector
                    );
                else this.items = this.settings.selector;
              else this.items = this.el.children;
              return bt(
                this.items,
                this.settings.extraProps,
                this.settings.getCaptionFromTitleOrAlt,
                this.settings.exThumbImage
              );
            }),
            (e.prototype.shouldHideScrollbar = function () {
              return (
                this.settings.hideScrollbar &&
                document.body === this.settings.container
              );
            }),
            (e.prototype.hideScrollbar = function () {
              if (this.shouldHideScrollbar()) {
                this.bodyPaddingRight = parseFloat(
                  lt("body").style().paddingRight
                );
                var e = document.documentElement.getBoundingClientRect(),
                  t = window.innerWidth - e.width;
                lt(document.body).css(
                  "padding-right",
                  t + this.bodyPaddingRight + "px"
                ),
                  lt(document.body).addClass("lg-overlay-open");
              }
            }),
            (e.prototype.resetScrollBar = function () {
              this.shouldHideScrollbar() &&
                (lt(document.body).css(
                  "padding-right",
                  this.bodyPaddingRight + "px"
                ),
                lt(document.body).removeClass("lg-overlay-open"));
            }),
            (e.prototype.openGallery = function (e, t) {
              var s = this;
              if ((void 0 === e && (e = this.settings.index), !this.lgOpened)) {
                (this.lgOpened = !0),
                  this.outer.removeClass("lg-hide-items"),
                  this.hideScrollbar(),
                  this.$container.addClass("lg-show");
                var i = this.getItemsToBeInsertedToDom(e, e);
                this.currentItemsInDom = i;
                var n = "";
                i.forEach(function (e) {
                  n = n + '<div id="' + e + '" class="lg-item"></div>';
                }),
                  this.$inner.append(n),
                  this.addHtml(e);
                var r = "";
                this.mediaContainerPosition = this.getMediaContainerPosition();
                var a = this.mediaContainerPosition,
                  o = a.top,
                  l = a.bottom;
                this.settings.allowMediaOverlap ||
                  this.setMediaContainerPosition(o, l);
                var c = this.galleryItems[e].__slideVideoInfo;
                this.zoomFromOrigin &&
                  t &&
                  ((this.currentImageSize = ut(
                    t,
                    this.outer,
                    o + l,
                    c && this.settings.videoMaxSize
                  )),
                  (r = ht(t, this.outer, o, l, this.currentImageSize))),
                  (this.zoomFromOrigin && r) ||
                    (this.outer.addClass(this.settings.startClass),
                    this.getSlideItem(e).removeClass("lg-complete"));
                var d = this.settings.zoomFromOrigin
                  ? 100
                  : this.settings.backdropDuration;
                setTimeout(function () {
                  s.outer.addClass("lg-components-open");
                }, d),
                  (this.index = e),
                  this.LGel.trigger(Ye),
                  this.getSlideItem(e).addClass("lg-current"),
                  (this.lGalleryOn = !1),
                  (this.prevScrollTop = lt(window).scrollTop()),
                  setTimeout(function () {
                    if (s.zoomFromOrigin && r) {
                      var t = s.getSlideItem(e);
                      t.css("transform", r),
                        setTimeout(function () {
                          t
                            .addClass("lg-start-progress lg-start-end-progress")
                            .css(
                              "transition-duration",
                              s.settings.startAnimationDuration + "ms"
                            ),
                            s.outer.addClass("lg-zoom-from-image");
                        }),
                        setTimeout(function () {
                          t.css("transform", "translate3d(0, 0, 0)");
                        }, 100);
                    }
                    setTimeout(function () {
                      s.$backdrop.addClass("in"),
                        s.$container.addClass("lg-show-in");
                    }, 10),
                      setTimeout(function () {
                        s.settings.trapFocus &&
                          document.body === s.settings.container &&
                          s.trapFocus();
                      }, s.settings.backdropDuration + 50),
                      (s.zoomFromOrigin && r) ||
                        setTimeout(function () {
                          s.outer.addClass("lg-visible");
                        }, s.settings.backdropDuration),
                      s.slide(e, !1, !1, !1),
                      s.LGel.trigger(Xe);
                  }),
                  document.body === this.settings.container &&
                    lt("html").addClass("lg-on");
              }
            }),
            (e.prototype.getMediaContainerPosition = function () {
              if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
              var e = this.$toolbar.get().clientHeight || 0,
                t = this.outer.find(".lg-components .lg-sub-html").get(),
                s =
                  this.settings.defaultCaptionHeight ||
                  (t && t.clientHeight) ||
                  0,
                i = this.outer.find(".lg-thumb-outer").get();
              return { top: e, bottom: (i ? i.clientHeight : 0) + s };
            }),
            (e.prototype.setMediaContainerPosition = function (e, t) {
              void 0 === e && (e = 0),
                void 0 === t && (t = 0),
                this.$content.css("top", e + "px").css("bottom", t + "px");
            }),
            (e.prototype.hideBars = function () {
              var e = this;
              setTimeout(function () {
                e.outer.removeClass("lg-hide-items"),
                  e.settings.hideBarsDelay > 0 &&
                    (e.outer.on(
                      "mousemove.lg click.lg touchstart.lg",
                      function () {
                        e.outer.removeClass("lg-hide-items"),
                          clearTimeout(e.hideBarTimeout),
                          (e.hideBarTimeout = setTimeout(function () {
                            e.outer.addClass("lg-hide-items");
                          }, e.settings.hideBarsDelay));
                      }
                    ),
                    e.outer.trigger("mousemove.lg"));
              }, this.settings.showBarsAfter);
            }),
            (e.prototype.initPictureFill = function (e) {
              if (this.settings.supportLegacyBrowser)
                try {
                  picturefill({ elements: [e.get()] });
                } catch (e) {
                  console.warn(
                    "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                  );
                }
            }),
            (e.prototype.counter = function () {
              if (this.settings.counter) {
                var e =
                  '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                  this.getIdName("lg-counter-current") +
                  '" class="lg-counter-current">' +
                  (this.index + 1) +
                  ' </span> /\n                <span id="' +
                  this.getIdName("lg-counter-all") +
                  '" class="lg-counter-all">' +
                  this.galleryItems.length +
                  " </span></div>";
                this.outer.find(this.settings.appendCounterTo).append(e);
              }
            }),
            (e.prototype.addHtml = function (e) {
              var t, s;
              if (
                (this.galleryItems[e].subHtmlUrl
                  ? (s = this.galleryItems[e].subHtmlUrl)
                  : (t = this.galleryItems[e].subHtml),
                !s)
              )
                if (t) {
                  var i = t.substring(0, 1);
                  ("." !== i && "#" !== i) ||
                    (t =
                      this.settings.subHtmlSelectorRelative &&
                      !this.settings.dynamic
                        ? lt(this.items).eq(e).find(t).first().html()
                        : lt(t).first().html());
                } else t = "";
              if (".lg-item" !== this.settings.appendSubHtmlTo)
                s
                  ? this.outer.find(".lg-sub-html").load(s)
                  : this.outer.find(".lg-sub-html").html(t);
              else {
                var n = lt(this.getSlideItemId(e));
                s
                  ? n.load(s)
                  : n.append('<div class="lg-sub-html">' + t + "</div>");
              }
              null != t &&
                ("" === t
                  ? this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .addClass("lg-empty-html")
                  : this.outer
                      .find(this.settings.appendSubHtmlTo)
                      .removeClass("lg-empty-html")),
                this.LGel.trigger(Ve, { index: e });
            }),
            (e.prototype.preload = function (e) {
              for (
                var t = 1;
                t <= this.settings.preload &&
                !(t >= this.galleryItems.length - e);
                t++
              )
                this.loadContent(e + t, !1);
              for (var s = 1; s <= this.settings.preload && !(e - s < 0); s++)
                this.loadContent(e - s, !1);
            }),
            (e.prototype.getDummyImgStyles = function (e) {
              return e
                ? "width:" +
                    e.width +
                    "px;\n                margin-left: -" +
                    e.width / 2 +
                    "px;\n                margin-top: -" +
                    e.height / 2 +
                    "px;\n                height:" +
                    e.height +
                    "px"
                : "";
            }),
            (e.prototype.getVideoContStyle = function (e) {
              return e
                ? "width:" +
                    e.width +
                    "px;\n                height:" +
                    e.height +
                    "px"
                : "";
            }),
            (e.prototype.getDummyImageContent = function (e, t, s) {
              var i;
              if ((this.settings.dynamic || (i = lt(this.items).eq(t)), i)) {
                var n = void 0;
                if (
                  !(n = this.settings.exThumbImage
                    ? i.attr(this.settings.exThumbImage)
                    : i.find("img").first().attr("src"))
                )
                  return "";
                var r =
                  "<img " +
                  s +
                  ' style="' +
                  this.getDummyImgStyles(this.currentImageSize) +
                  '" class="lg-dummy-img" src="' +
                  n +
                  '" />';
                return (
                  e.addClass("lg-first-slide"),
                  this.outer.addClass("lg-first-slide-loading"),
                  r
                );
              }
              return "";
            }),
            (e.prototype.setImgMarkup = function (e, t, s) {
              var i = this.galleryItems[s],
                n = i.alt,
                r = i.srcset,
                a = i.sizes,
                o = i.sources,
                l = n ? 'alt="' + n + '"' : "",
                c =
                  '<picture class="lg-img-wrap"> ' +
                  (this.isFirstSlideWithZoomAnimation()
                    ? this.getDummyImageContent(t, s, l)
                    : gt(s, e, l, r, a, o)) +
                  "</picture>";
              t.prepend(c);
            }),
            (e.prototype.onSlideObjectLoad = function (e, t, s, i) {
              var n = e.find(".lg-object").first();
              ft(n.get()) || t
                ? s()
                : (n.on("load.lg error.lg", function () {
                    s && s();
                  }),
                  n.on("error.lg", function () {
                    i && i();
                  }));
            }),
            (e.prototype.onLgObjectLoad = function (e, t, s, i, n, r) {
              var a = this;
              this.onSlideObjectLoad(
                e,
                r,
                function () {
                  a.triggerSlideItemLoad(e, t, s, i, n);
                },
                function () {
                  e.addClass("lg-complete lg-complete_"),
                    e.html(
                      '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                    );
                }
              );
            }),
            (e.prototype.triggerSlideItemLoad = function (e, t, s, i, n) {
              var r = this,
                a = this.galleryItems[t],
                o = n && "video" === this.getSlideType(a) && !a.poster ? i : 0;
              setTimeout(function () {
                e.addClass("lg-complete lg-complete_"),
                  r.LGel.trigger(Ue, {
                    index: t,
                    delay: s || 0,
                    isFirstSlide: n,
                  });
              }, o);
            }),
            (e.prototype.isFirstSlideWithZoomAnimation = function () {
              return !(
                this.lGalleryOn ||
                !this.zoomFromOrigin ||
                !this.currentImageSize
              );
            }),
            (e.prototype.addSlideVideoInfo = function (e) {
              var t = this;
              e.forEach(function (e, s) {
                (e.__slideVideoInfo = St(e.src, !!e.video, s)),
                  e.__slideVideoInfo &&
                    t.settings.loadYouTubePoster &&
                    !e.poster &&
                    e.__slideVideoInfo.youtube &&
                    (e.poster =
                      "//img.youtube.com/vi/" +
                      e.__slideVideoInfo.youtube[1] +
                      "/maxresdefault.jpg");
              });
            }),
            (e.prototype.loadContent = function (e, t) {
              var s = this,
                i = this.galleryItems[e],
                n = lt(this.getSlideItemId(e)),
                r = i.poster,
                a = i.srcset,
                o = i.sizes,
                l = i.sources,
                c = i.src,
                d = i.video,
                u = d && "string" == typeof d ? JSON.parse(d) : d;
              if (i.responsive) {
                var h = i.responsive.split(",");
                c = mt(h) || c;
              }
              var p = i.__slideVideoInfo,
                g = "",
                m = !!i.iframe,
                f = !this.lGalleryOn,
                v = 0;
              if (
                (f &&
                  (v =
                    this.zoomFromOrigin && this.currentImageSize
                      ? this.settings.startAnimationDuration + 10
                      : this.settings.backdropDuration + 10),
                !n.hasClass("lg-loaded"))
              ) {
                if (p) {
                  var y = this.mediaContainerPosition,
                    b = y.top,
                    w = y.bottom,
                    S = ut(
                      this.items[e],
                      this.outer,
                      b + w,
                      p && this.settings.videoMaxSize
                    );
                  g = this.getVideoContStyle(S);
                }
                if (m) {
                  var x = pt(
                    this.settings.iframeWidth,
                    this.settings.iframeHeight,
                    this.settings.iframeMaxWidth,
                    this.settings.iframeMaxHeight,
                    c,
                    i.iframeTitle
                  );
                  n.prepend(x);
                } else if (r) {
                  var C = "";
                  f &&
                    this.zoomFromOrigin &&
                    this.currentImageSize &&
                    (C = this.getDummyImageContent(n, e, ""));
                  x = vt(r, C || "", g, this.settings.strings.playVideo, p);
                  n.prepend(x);
                } else if (p) {
                  x = '<div class="lg-video-cont " style="' + g + '"></div>';
                  n.prepend(x);
                } else if ((this.setImgMarkup(c, n, e), a || l)) {
                  var E = n.find(".lg-object");
                  this.initPictureFill(E);
                }
                (r || p) &&
                  this.LGel.trigger(Fe, {
                    index: e,
                    src: c,
                    html5Video: u,
                    hasPoster: !!r,
                  }),
                  this.LGel.trigger(We, { index: e }),
                  this.lGalleryOn &&
                    ".lg-item" === this.settings.appendSubHtmlTo &&
                    this.addHtml(e);
              }
              var T = 0;
              v && !lt(document.body).hasClass("lg-from-hash") && (T = v),
                this.isFirstSlideWithZoomAnimation() &&
                  (setTimeout(function () {
                    n.removeClass(
                      "lg-start-end-progress lg-start-progress"
                    ).removeAttr("style");
                  }, this.settings.startAnimationDuration + 100),
                  n.hasClass("lg-loaded") ||
                    setTimeout(function () {
                      if ("image" === s.getSlideType(i)) {
                        var t = i.alt,
                          d = t ? 'alt="' + t + '"' : "";
                        if (
                          (n
                            .find(".lg-img-wrap")
                            .append(gt(e, c, d, a, o, i.sources)),
                          a || l)
                        ) {
                          var u = n.find(".lg-object");
                          s.initPictureFill(u);
                        }
                      }
                      ("image" === s.getSlideType(i) ||
                        ("video" === s.getSlideType(i) && r)) &&
                        (s.onLgObjectLoad(n, e, v, T, !0, !1),
                        s.onSlideObjectLoad(
                          n,
                          !(!p || !p.html5 || r),
                          function () {
                            s.loadContentOnFirstSlideLoad(e, n, T);
                          },
                          function () {
                            s.loadContentOnFirstSlideLoad(e, n, T);
                          }
                        ));
                    }, this.settings.startAnimationDuration + 100)),
                n.addClass("lg-loaded"),
                (this.isFirstSlideWithZoomAnimation() &&
                  ("video" !== this.getSlideType(i) || r)) ||
                  this.onLgObjectLoad(n, e, v, T, f, !(!p || !p.html5 || r)),
                (this.zoomFromOrigin && this.currentImageSize) ||
                  !n.hasClass("lg-complete_") ||
                  this.lGalleryOn ||
                  setTimeout(function () {
                    n.addClass("lg-complete");
                  }, this.settings.backdropDuration),
                (this.lGalleryOn = !0),
                !0 === t &&
                  (n.hasClass("lg-complete_")
                    ? this.preload(e)
                    : n
                        .find(".lg-object")
                        .first()
                        .on("load.lg error.lg", function () {
                          s.preload(e);
                        }));
            }),
            (e.prototype.loadContentOnFirstSlideLoad = function (e, t, s) {
              var i = this;
              setTimeout(function () {
                t.find(".lg-dummy-img").remove(),
                  t.removeClass("lg-first-slide"),
                  i.outer.removeClass("lg-first-slide-loading"),
                  (i.isDummyImageRemoved = !0),
                  i.preload(e);
              }, s + 300);
            }),
            (e.prototype.getItemsToBeInsertedToDom = function (e, t, s) {
              var i = this;
              void 0 === s && (s = 0);
              var n = [],
                r = Math.max(s, 3);
              r = Math.min(r, this.galleryItems.length);
              var a = "lg-item-" + this.lgId + "-" + t;
              if (this.galleryItems.length <= 3)
                return (
                  this.galleryItems.forEach(function (e, t) {
                    n.push("lg-item-" + i.lgId + "-" + t);
                  }),
                  n
                );
              if (e < (this.galleryItems.length - 1) / 2) {
                for (var o = e; o > e - r / 2 && o >= 0; o--)
                  n.push("lg-item-" + this.lgId + "-" + o);
                var l = n.length;
                for (o = 0; o < r - l; o++)
                  n.push("lg-item-" + this.lgId + "-" + (e + o + 1));
              } else {
                for (
                  o = e;
                  o <= this.galleryItems.length - 1 && o < e + r / 2;
                  o++
                )
                  n.push("lg-item-" + this.lgId + "-" + o);
                for (l = n.length, o = 0; o < r - l; o++)
                  n.push("lg-item-" + this.lgId + "-" + (e - o - 1));
              }
              return (
                this.settings.loop &&
                  (e === this.galleryItems.length - 1
                    ? n.push("lg-item-" + this.lgId + "-0")
                    : 0 === e &&
                      n.push(
                        "lg-item-" +
                          this.lgId +
                          "-" +
                          (this.galleryItems.length - 1)
                      )),
                -1 === n.indexOf(a) && n.push("lg-item-" + this.lgId + "-" + t),
                n
              );
            }),
            (e.prototype.organizeSlideItems = function (e, t) {
              var s = this,
                i = this.getItemsToBeInsertedToDom(
                  e,
                  t,
                  this.settings.numberOfSlideItemsInDom
                );
              return (
                i.forEach(function (e) {
                  -1 === s.currentItemsInDom.indexOf(e) &&
                    s.$inner.append(
                      '<div id="' + e + '" class="lg-item"></div>'
                    );
                }),
                this.currentItemsInDom.forEach(function (e) {
                  -1 === i.indexOf(e) && lt("#" + e).remove();
                }),
                i
              );
            }),
            (e.prototype.getPreviousSlideIndex = function () {
              var e = 0;
              try {
                var t = this.outer.find(".lg-current").first().attr("id");
                e = parseInt(t.split("-")[3]) || 0;
              } catch (t) {
                e = 0;
              }
              return e;
            }),
            (e.prototype.setDownloadValue = function (e) {
              if (this.settings.download) {
                var t = this.galleryItems[e];
                if (!1 === t.downloadUrl || "false" === t.downloadUrl)
                  this.outer.addClass("lg-hide-download");
                else {
                  var s = this.getElementById("lg-download");
                  this.outer.removeClass("lg-hide-download"),
                    s.attr("href", t.downloadUrl || t.src),
                    t.download && s.attr("download", t.download);
                }
              }
            }),
            (e.prototype.makeSlideAnimation = function (e, t, s) {
              var i = this;
              this.lGalleryOn && s.addClass("lg-slide-progress"),
                setTimeout(
                  function () {
                    i.outer.addClass("lg-no-trans"),
                      i.outer
                        .find(".lg-item")
                        .removeClass("lg-prev-slide lg-next-slide"),
                      "prev" === e
                        ? (t.addClass("lg-prev-slide"),
                          s.addClass("lg-next-slide"))
                        : (t.addClass("lg-next-slide"),
                          s.addClass("lg-prev-slide")),
                      setTimeout(function () {
                        i.outer.find(".lg-item").removeClass("lg-current"),
                          t.addClass("lg-current"),
                          i.outer.removeClass("lg-no-trans");
                      }, 50);
                  },
                  this.lGalleryOn ? this.settings.slideDelay : 0
                );
            }),
            (e.prototype.slide = function (e, t, s, i) {
              var n = this,
                r = this.getPreviousSlideIndex();
              if (
                ((this.currentItemsInDom = this.organizeSlideItems(e, r)),
                !this.lGalleryOn || r !== e)
              ) {
                var a = this.galleryItems.length;
                if (!this.lgBusy) {
                  this.settings.counter && this.updateCurrentCounter(e);
                  var o = this.getSlideItem(e),
                    l = this.getSlideItem(r),
                    c = this.galleryItems[e],
                    d = c.__slideVideoInfo;
                  if (
                    (this.outer.attr(
                      "data-lg-slide-type",
                      this.getSlideType(c)
                    ),
                    this.setDownloadValue(e),
                    d)
                  ) {
                    var u = this.mediaContainerPosition,
                      h = u.top,
                      p = u.bottom,
                      g = ut(
                        this.items[e],
                        this.outer,
                        h + p,
                        d && this.settings.videoMaxSize
                      );
                    this.resizeVideoSlide(e, g);
                  }
                  if (
                    (this.LGel.trigger(Ke, {
                      prevIndex: r,
                      index: e,
                      fromTouch: !!t,
                      fromThumb: !!s,
                    }),
                    (this.lgBusy = !0),
                    clearTimeout(this.hideBarTimeout),
                    this.arrowDisable(e),
                    i || (e < r ? (i = "prev") : e > r && (i = "next")),
                    t)
                  ) {
                    this.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-current lg-next-slide");
                    var m = void 0,
                      f = void 0;
                    a > 2
                      ? ((m = e - 1),
                        (f = e + 1),
                        ((0 === e && r === a - 1) ||
                          (e === a - 1 && 0 === r)) &&
                          ((f = 0), (m = a - 1)))
                      : ((m = 0), (f = 1)),
                      "prev" === i
                        ? this.getSlideItem(f).addClass("lg-next-slide")
                        : this.getSlideItem(m).addClass("lg-prev-slide"),
                      o.addClass("lg-current");
                  } else this.makeSlideAnimation(i, o, l);
                  this.lGalleryOn
                    ? setTimeout(function () {
                        n.loadContent(e, !0),
                          ".lg-item" !== n.settings.appendSubHtmlTo &&
                            n.addHtml(e);
                      }, this.settings.speed +
                        50 +
                        (t ? 0 : this.settings.slideDelay))
                    : this.loadContent(e, !0),
                    setTimeout(function () {
                      (n.lgBusy = !1),
                        l.removeClass("lg-slide-progress"),
                        n.LGel.trigger(Ze, {
                          prevIndex: r,
                          index: e,
                          fromTouch: t,
                          fromThumb: s,
                        });
                    }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                      (t ? 0 : this.settings.slideDelay));
                }
                this.index = e;
              }
            }),
            (e.prototype.updateCurrentCounter = function (e) {
              this.getElementById("lg-counter-current").html(e + 1 + "");
            }),
            (e.prototype.updateCounterTotal = function () {
              this.getElementById("lg-counter-all").html(
                this.galleryItems.length + ""
              );
            }),
            (e.prototype.getSlideType = function (e) {
              return e.__slideVideoInfo
                ? "video"
                : e.iframe
                ? "iframe"
                : "image";
            }),
            (e.prototype.touchMove = function (e, t, s) {
              var i = t.pageX - e.pageX,
                n = t.pageY - e.pageY,
                r = !1;
              if (
                (this.swipeDirection
                  ? (r = !0)
                  : Math.abs(i) > 15
                  ? ((this.swipeDirection = "horizontal"), (r = !0))
                  : Math.abs(n) > 15 &&
                    ((this.swipeDirection = "vertical"), (r = !0)),
                r)
              ) {
                var a = this.getSlideItem(this.index);
                if ("horizontal" === this.swipeDirection) {
                  null == s || s.preventDefault(),
                    this.outer.addClass("lg-dragging"),
                    this.setTranslate(a, i, 0);
                  var o = a.get().offsetWidth,
                    l = (15 * o) / 100 - Math.abs((10 * i) / 100);
                  this.setTranslate(
                    this.outer.find(".lg-prev-slide").first(),
                    -o + i - l,
                    0
                  ),
                    this.setTranslate(
                      this.outer.find(".lg-next-slide").first(),
                      o + i + l,
                      0
                    );
                } else if (
                  "vertical" === this.swipeDirection &&
                  this.settings.swipeToClose
                ) {
                  null == s || s.preventDefault(),
                    this.$container.addClass("lg-dragging-vertical");
                  var c = 1 - Math.abs(n) / window.innerHeight;
                  this.$backdrop.css("opacity", c);
                  var d = 1 - Math.abs(n) / (2 * window.innerWidth);
                  this.setTranslate(a, 0, n, d, d),
                    Math.abs(n) > 100 &&
                      this.outer
                        .addClass("lg-hide-items")
                        .removeClass("lg-components-open");
                }
              }
            }),
            (e.prototype.touchEnd = function (e, t, s) {
              var i,
                n = this;
              "lg-slide" !== this.settings.mode &&
                this.outer.addClass("lg-slide"),
                setTimeout(function () {
                  n.$container.removeClass("lg-dragging-vertical"),
                    n.outer
                      .removeClass("lg-dragging lg-hide-items")
                      .addClass("lg-components-open");
                  var r = !0;
                  if ("horizontal" === n.swipeDirection) {
                    i = e.pageX - t.pageX;
                    var a = Math.abs(e.pageX - t.pageX);
                    i < 0 && a > n.settings.swipeThreshold
                      ? (n.goToNextSlide(!0), (r = !1))
                      : i > 0 &&
                        a > n.settings.swipeThreshold &&
                        (n.goToPrevSlide(!0), (r = !1));
                  } else if ("vertical" === n.swipeDirection) {
                    if (
                      ((i = Math.abs(e.pageY - t.pageY)),
                      n.settings.closable && n.settings.swipeToClose && i > 100)
                    )
                      return void n.closeGallery();
                    n.$backdrop.css("opacity", 1);
                  }
                  if (
                    (n.outer.find(".lg-item").removeAttr("style"),
                    r && Math.abs(e.pageX - t.pageX) < 5)
                  ) {
                    var o = lt(s.target);
                    n.isPosterElement(o) && n.LGel.trigger(Je);
                  }
                  n.swipeDirection = void 0;
                }),
                setTimeout(function () {
                  n.outer.hasClass("lg-dragging") ||
                    "lg-slide" === n.settings.mode ||
                    n.outer.removeClass("lg-slide");
                }, this.settings.speed + 100);
            }),
            (e.prototype.enableSwipe = function () {
              var e = this,
                t = {},
                s = {},
                i = !1,
                n = !1;
              this.settings.enableSwipe &&
                (this.$inner.on("touchstart.lg", function (s) {
                  e.dragOrSwipeEnabled = !0;
                  var i = e.getSlideItem(e.index);
                  (!lt(s.target).hasClass("lg-item") &&
                    !i.get().contains(s.target)) ||
                    e.outer.hasClass("lg-zoomed") ||
                    e.lgBusy ||
                    1 !== s.touches.length ||
                    ((n = !0),
                    (e.touchAction = "swipe"),
                    e.manageSwipeClass(),
                    (t = {
                      pageX: s.touches[0].pageX,
                      pageY: s.touches[0].pageY,
                    }));
                }),
                this.$inner.on("touchmove.lg", function (r) {
                  n &&
                    "swipe" === e.touchAction &&
                    1 === r.touches.length &&
                    ((s = {
                      pageX: r.touches[0].pageX,
                      pageY: r.touches[0].pageY,
                    }),
                    e.touchMove(t, s, r),
                    (i = !0));
                }),
                this.$inner.on("touchend.lg", function (r) {
                  if ("swipe" === e.touchAction) {
                    if (i) (i = !1), e.touchEnd(s, t, r);
                    else if (n) {
                      var a = lt(r.target);
                      e.isPosterElement(a) && e.LGel.trigger(Je);
                    }
                    (e.touchAction = void 0), (n = !1);
                  }
                }));
            }),
            (e.prototype.enableDrag = function () {
              var e = this,
                t = {},
                s = {},
                i = !1,
                n = !1;
              this.settings.enableDrag &&
                (this.outer.on("mousedown.lg", function (s) {
                  e.dragOrSwipeEnabled = !0;
                  var n = e.getSlideItem(e.index);
                  (lt(s.target).hasClass("lg-item") ||
                    n.get().contains(s.target)) &&
                    (e.outer.hasClass("lg-zoomed") ||
                      e.lgBusy ||
                      (s.preventDefault(),
                      e.lgBusy ||
                        (e.manageSwipeClass(),
                        (t = { pageX: s.pageX, pageY: s.pageY }),
                        (i = !0),
                        (e.outer.get().scrollLeft += 1),
                        (e.outer.get().scrollLeft -= 1),
                        e.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                        e.LGel.trigger(Qe))));
                }),
                lt(window).on("mousemove.lg.global" + this.lgId, function (r) {
                  i &&
                    e.lgOpened &&
                    ((n = !0),
                    (s = { pageX: r.pageX, pageY: r.pageY }),
                    e.touchMove(t, s),
                    e.LGel.trigger(et));
                }),
                lt(window).on("mouseup.lg.global" + this.lgId, function (r) {
                  if (e.lgOpened) {
                    var a = lt(r.target);
                    n
                      ? ((n = !1), e.touchEnd(s, t, r), e.LGel.trigger(tt))
                      : e.isPosterElement(a) && e.LGel.trigger(Je),
                      i &&
                        ((i = !1),
                        e.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                  }
                }));
            }),
            (e.prototype.triggerPosterClick = function () {
              var e = this;
              this.$inner.on("click.lg", function (t) {
                !e.dragOrSwipeEnabled &&
                  e.isPosterElement(lt(t.target)) &&
                  e.LGel.trigger(Je);
              });
            }),
            (e.prototype.manageSwipeClass = function () {
              var e = this.index + 1,
                t = this.index - 1;
              this.settings.loop &&
                this.galleryItems.length > 2 &&
                (0 === this.index
                  ? (t = this.galleryItems.length - 1)
                  : this.index === this.galleryItems.length - 1 && (e = 0)),
                this.outer
                  .find(".lg-item")
                  .removeClass("lg-next-slide lg-prev-slide"),
                t > -1 && this.getSlideItem(t).addClass("lg-prev-slide"),
                this.getSlideItem(e).addClass("lg-next-slide");
            }),
            (e.prototype.goToNextSlide = function (e) {
              var t = this,
                s = this.settings.loop;
              e && this.galleryItems.length < 3 && (s = !1),
                this.lgBusy ||
                  (this.index + 1 < this.galleryItems.length
                    ? (this.index++,
                      this.LGel.trigger(st, { index: this.index }),
                      this.slide(this.index, !!e, !1, "next"))
                    : s
                    ? ((this.index = 0),
                      this.LGel.trigger(st, { index: this.index }),
                      this.slide(this.index, !!e, !1, "next"))
                    : this.settings.slideEndAnimation &&
                      !e &&
                      (this.outer.addClass("lg-right-end"),
                      setTimeout(function () {
                        t.outer.removeClass("lg-right-end");
                      }, 400)));
            }),
            (e.prototype.goToPrevSlide = function (e) {
              var t = this,
                s = this.settings.loop;
              e && this.galleryItems.length < 3 && (s = !1),
                this.lgBusy ||
                  (this.index > 0
                    ? (this.index--,
                      this.LGel.trigger(it, {
                        index: this.index,
                        fromTouch: e,
                      }),
                      this.slide(this.index, !!e, !1, "prev"))
                    : s
                    ? ((this.index = this.galleryItems.length - 1),
                      this.LGel.trigger(it, {
                        index: this.index,
                        fromTouch: e,
                      }),
                      this.slide(this.index, !!e, !1, "prev"))
                    : this.settings.slideEndAnimation &&
                      !e &&
                      (this.outer.addClass("lg-left-end"),
                      setTimeout(function () {
                        t.outer.removeClass("lg-left-end");
                      }, 400)));
            }),
            (e.prototype.keyPress = function () {
              var e = this;
              lt(window).on("keydown.lg.global" + this.lgId, function (t) {
                e.lgOpened &&
                  !0 === e.settings.escKey &&
                  27 === t.keyCode &&
                  (t.preventDefault(),
                  e.settings.allowMediaOverlap &&
                  e.outer.hasClass("lg-can-toggle") &&
                  e.outer.hasClass("lg-components-open")
                    ? e.outer.removeClass("lg-components-open")
                    : e.closeGallery()),
                  e.lgOpened &&
                    e.galleryItems.length > 1 &&
                    (37 === t.keyCode &&
                      (t.preventDefault(), e.goToPrevSlide()),
                    39 === t.keyCode &&
                      (t.preventDefault(), e.goToNextSlide()));
              });
            }),
            (e.prototype.arrow = function () {
              var e = this;
              this.getElementById("lg-prev").on("click.lg", function () {
                e.goToPrevSlide();
              }),
                this.getElementById("lg-next").on("click.lg", function () {
                  e.goToNextSlide();
                });
            }),
            (e.prototype.arrowDisable = function (e) {
              if (!this.settings.loop && this.settings.hideControlOnEnd) {
                var t = this.getElementById("lg-prev"),
                  s = this.getElementById("lg-next");
                e + 1 === this.galleryItems.length
                  ? s.attr("disabled", "disabled").addClass("disabled")
                  : s.removeAttr("disabled").removeClass("disabled"),
                  0 === e
                    ? t.attr("disabled", "disabled").addClass("disabled")
                    : t.removeAttr("disabled").removeClass("disabled");
              }
            }),
            (e.prototype.setTranslate = function (e, t, s, i, n) {
              void 0 === i && (i = 1),
                void 0 === n && (n = 1),
                e.css(
                  "transform",
                  "translate3d(" +
                    t +
                    "px, " +
                    s +
                    "px, 0px) scale3d(" +
                    i +
                    ", " +
                    n +
                    ", 1)"
                );
            }),
            (e.prototype.mousewheel = function () {
              var e = this,
                t = 0;
              this.outer.on("wheel.lg", function (s) {
                if (s.deltaY && !(e.galleryItems.length < 2)) {
                  s.preventDefault();
                  var i = new Date().getTime();
                  i - t < 1e3 ||
                    ((t = i),
                    s.deltaY > 0
                      ? e.goToNextSlide()
                      : s.deltaY < 0 && e.goToPrevSlide());
                }
              });
            }),
            (e.prototype.isSlideElement = function (e) {
              return (
                e.hasClass("lg-outer") ||
                e.hasClass("lg-item") ||
                e.hasClass("lg-img-wrap")
              );
            }),
            (e.prototype.isPosterElement = function (e) {
              var t = this.getSlideItem(this.index)
                .find(".lg-video-play-button")
                .get();
              return (
                e.hasClass("lg-video-poster") ||
                e.hasClass("lg-video-play-button") ||
                (t && t.contains(e.get()))
              );
            }),
            (e.prototype.toggleMaximize = function () {
              var e = this;
              this.getElementById("lg-maximize").on("click.lg", function () {
                e.$container.toggleClass("lg-inline"), e.refreshOnResize();
              });
            }),
            (e.prototype.invalidateItems = function () {
              for (var e = 0; e < this.items.length; e++) {
                var t = lt(this.items[e]);
                t.off("click.lgcustom-item-" + t.attr("data-lg-id"));
              }
            }),
            (e.prototype.trapFocus = function () {
              var e = this;
              this.$container.get().focus({ preventScroll: !0 }),
                lt(window).on("keydown.lg.global" + this.lgId, function (t) {
                  if (e.lgOpened && ("Tab" === t.key || 9 === t.keyCode)) {
                    var s = yt(e.$container.get()),
                      i = s[0],
                      n = s[s.length - 1];
                    t.shiftKey
                      ? document.activeElement === i &&
                        (n.focus(), t.preventDefault())
                      : document.activeElement === n &&
                        (i.focus(), t.preventDefault());
                  }
                });
            }),
            (e.prototype.manageCloseGallery = function () {
              var e = this;
              if (this.settings.closable) {
                var t = !1;
                this.getElementById("lg-close").on("click.lg", function () {
                  e.closeGallery();
                }),
                  this.settings.closeOnTap &&
                    (this.outer.on("mousedown.lg", function (s) {
                      var i = lt(s.target);
                      t = !!e.isSlideElement(i);
                    }),
                    this.outer.on("mousemove.lg", function () {
                      t = !1;
                    }),
                    this.outer.on("mouseup.lg", function (s) {
                      var i = lt(s.target);
                      e.isSlideElement(i) &&
                        t &&
                        (e.outer.hasClass("lg-dragging") || e.closeGallery());
                    }));
              }
            }),
            (e.prototype.closeGallery = function (e) {
              var t = this;
              if (!this.lgOpened || (!this.settings.closable && !e)) return 0;
              this.LGel.trigger(nt),
                this.settings.resetScrollPosition &&
                  !this.settings.hideScrollbar &&
                  lt(window).scrollTop(this.prevScrollTop);
              var s,
                i = this.items[this.index];
              if (this.zoomFromOrigin && i) {
                var n = this.mediaContainerPosition,
                  r = n.top,
                  a = n.bottom,
                  o = this.galleryItems[this.index],
                  l = o.__slideVideoInfo,
                  c = o.poster,
                  d = ut(
                    i,
                    this.outer,
                    r + a,
                    l && c && this.settings.videoMaxSize
                  );
                s = ht(i, this.outer, r, a, d);
              }
              this.zoomFromOrigin && s
                ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                  this.getSlideItem(this.index)
                    .addClass("lg-start-end-progress")
                    .css(
                      "transition-duration",
                      this.settings.startAnimationDuration + "ms"
                    )
                    .css("transform", s))
                : (this.outer.addClass("lg-hide-items"),
                  this.outer.removeClass("lg-zoom-from-image")),
                this.destroyModules(),
                (this.lGalleryOn = !1),
                (this.isDummyImageRemoved = !1),
                (this.zoomFromOrigin = this.settings.zoomFromOrigin),
                clearTimeout(this.hideBarTimeout),
                (this.hideBarTimeout = !1),
                lt("html").removeClass("lg-on"),
                this.outer.removeClass("lg-visible lg-components-open"),
                this.$backdrop.removeClass("in").css("opacity", 0);
              var u =
                this.zoomFromOrigin && s
                  ? Math.max(
                      this.settings.startAnimationDuration,
                      this.settings.backdropDuration
                    )
                  : this.settings.backdropDuration;
              return (
                this.$container.removeClass("lg-show-in"),
                setTimeout(function () {
                  t.zoomFromOrigin &&
                    s &&
                    t.outer.removeClass("lg-zoom-from-image"),
                    t.$container.removeClass("lg-show"),
                    t.resetScrollBar(),
                    t.$backdrop
                      .removeAttr("style")
                      .css(
                        "transition-duration",
                        t.settings.backdropDuration + "ms"
                      ),
                    t.outer.removeClass("lg-closing " + t.settings.startClass),
                    t
                      .getSlideItem(t.index)
                      .removeClass("lg-start-end-progress"),
                    t.$inner.empty(),
                    t.lgOpened && t.LGel.trigger(rt, { instance: t }),
                    t.$container.get() && t.$container.get().blur(),
                    (t.lgOpened = !1);
                }, u + 100),
                u + 100
              );
            }),
            (e.prototype.initModules = function () {
              this.plugins.forEach(function (e) {
                try {
                  e.init();
                } catch (e) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly initiated"
                  );
                }
              });
            }),
            (e.prototype.destroyModules = function (e) {
              this.plugins.forEach(function (t) {
                try {
                  e ? t.destroy() : t.closeGallery && t.closeGallery();
                } catch (e) {
                  console.warn(
                    "lightGallery:- make sure lightGallery module is properly destroyed"
                  );
                }
              });
            }),
            (e.prototype.refresh = function (e) {
              this.settings.dynamic || this.invalidateItems(),
                (this.galleryItems = e || this.getItems()),
                this.updateControls(),
                this.openGalleryOnItemClick(),
                this.LGel.trigger(Re);
            }),
            (e.prototype.updateControls = function () {
              this.addSlideVideoInfo(this.galleryItems),
                this.updateCounterTotal(),
                this.manageSingleSlideClassName();
            }),
            (e.prototype.destroyGallery = function () {
              this.destroyModules(!0),
                this.settings.dynamic || this.invalidateItems(),
                lt(window).off(".lg.global" + this.lgId),
                this.LGel.off(".lg"),
                this.$container.remove();
            }),
            (e.prototype.destroy = function () {
              var e = this.closeGallery(!0);
              return (
                e
                  ? setTimeout(this.destroyGallery.bind(this), e)
                  : this.destroyGallery(),
                e
              );
            }),
            e
          );
        })();
      const Et = function (e, t) {
          return new Ct(e, t);
        },
        Tt = document.querySelectorAll("[data-gallery]");
      Tt.length &&
        Tt.forEach((e) => {
          Et(e, {
            licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E",
            speed: 500,
          });
        }),
        window.addEventListener("load", function (e) {
          const t = document.querySelectorAll("[data-bg]");
          t.length &&
            t.forEach((e) => {
              e.insertAdjacentHTML("beforeend", '<div class="bg-item"></div>');
            });
          datepicker("[data-calendar]");
          document.querySelector(".video-modele") &&
            document.addEventListener("watcherCallback", function (e) {
              const t = e.detail.entry,
                s = t.target;
              "video" !== s.dataset.watch ||
                s.classList.contains("init") ||
                (t.isIntersecting
                  ? s.querySelector("video").play()
                  : s.querySelector("video").pause()),
                document
                  .querySelector(".video-modele")
                  .addEventListener("click", function (e) {
                    document
                      .querySelector(".video-modele")
                      .classList.contains("init")
                      ? (document
                          .querySelector(".video-modele")
                          .querySelector("video").paused
                          ? document
                              .querySelector(".video-modele")
                              .querySelector("video")
                              .play()
                          : document
                              .querySelector(".video-modele")
                              .querySelector("video")
                              .pause(),
                        document
                          .querySelector(".video-modele")
                          .classList.toggle("active"))
                      : ((document
                          .querySelector(".video-modele")
                          .querySelector("video").src = document
                          .querySelector(".video-modele")
                          .querySelector("video").dataset.full),
                        document
                          .querySelector(".video-modele")
                          .querySelector("video")
                          .play(),
                        document
                          .querySelector(".video-modele")
                          .classList.add("active"),
                        document
                          .querySelector(".video-modele")
                          .classList.add("init"),
                        (document
                          .querySelector(".video-modele")
                          .querySelector("video").muted = !1));
                  });
            });
        }),
        (window.FLS = !0),
        (function (e) {
          let t = new Image();
          (t.onload = t.onerror =
            function () {
              e(2 == t.height);
            }),
            (t.src =
              "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
        })(function (e) {
          let t = !0 === e ? "webp" : "no-webp";
          document.documentElement.classList.add(t);
        }),
        r.any() && document.documentElement.classList.add("touch"),
        (function () {
          let e = document.querySelector(".icon-menu");
          e &&
            e.addEventListener("click", function (e) {
              c &&
                (d(), document.documentElement.classList.toggle("menu-open"));
            });
        })(),
        (function () {
          if (
            document.querySelectorAll("[data-fullscreen]").length &&
            r.any()
          ) {
            function e() {
              let e = 0.01 * window.innerHeight;
              document.documentElement.style.setProperty("--vh", `${e}px`);
            }
            window.addEventListener("resize", e), e();
          }
        })(),
        new n({}),
        (function () {
          const e = document.querySelectorAll(
            "input[placeholder],textarea[placeholder]"
          );
          e.length &&
            e.forEach((e) => {
              e.dataset.placeholder = e.placeholder;
            }),
            document.body.addEventListener("focusin", function (e) {
              const t = e.target;
              ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
                (t.dataset.placeholder && (t.placeholder = ""),
                t.classList.add("_form-focus"),
                t.parentElement.classList.add("_form-focus"),
                y.removeError(t));
            }),
            document.body.addEventListener("focusout", function (e) {
              const t = e.target;
              ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
                (t.dataset.placeholder &&
                  (t.placeholder = t.dataset.placeholder),
                t.classList.remove("_form-focus"),
                t.parentElement.classList.remove("_form-focus"),
                t.hasAttribute("data-validate") && y.validateInput(t));
            });
        })(),
        (function (e) {
          const t = document.forms;
          if (t.length)
            for (const e of t)
              e.addEventListener("submit", function (e) {
                s(e.target, e);
              }),
                e.addEventListener("reset", function (e) {
                  const t = e.target;
                  y.formClean(t);
                });
          async function s(t, s) {
            if (0 === (e ? y.getErrors(t) : 0)) {
              if (t.hasAttribute("data-ajax")) {
                s.preventDefault();
                const e = t.getAttribute("action")
                    ? t.getAttribute("action").trim()
                    : "#",
                  n = t.getAttribute("method")
                    ? t.getAttribute("method").trim()
                    : "GET",
                  r = new FormData(t);
                t.classList.add("_sending");
                const a = await fetch(e, { method: n, body: r });
                if (a.ok) {
                  await a.json();
                  t.classList.remove("_sending"), i(t);
                } else alert("Ошибка"), t.classList.remove("_sending");
              } else t.hasAttribute("data-dev") && (s.preventDefault(), i(t));
            } else {
              s.preventDefault();
              const e = t.querySelector("._form-error");
              e && t.hasAttribute("data-goto-error") && m(e, !0, 1e3);
            }
          }
          function i(e) {
            document.dispatchEvent(
              new CustomEvent("formSent", { detail: { form: e } })
            ),
              y.formClean(e),
              p(`[Формы]: ${"Форма отправлена!"}`);
          }
        })(!0),
        (v.selectModule = new f({})),
        new Ne({}),
        (function () {
          function e(e) {
            if ("click" === e.type) {
              const t = e.target;
              if (t.closest("[data-goto]")) {
                const s = t.closest("[data-goto]"),
                  i = s.dataset.goto ? s.dataset.goto : "",
                  n = !!s.hasAttribute("data-goto-header"),
                  r = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
                m(i, n, r), e.preventDefault();
              }
            } else if ("watcherCallback" === e.type && e.detail) {
              const t = e.detail.entry,
                s = t.target;
              if ("navigator" === s.dataset.watch) {
                const e = s.id,
                  i =
                    (document.querySelector("[data-goto]._navigator-active"),
                    document.querySelector(`[data-goto="${e}"]`));
                t.isIntersecting
                  ? i && i.classList.add("_navigator-active")
                  : i && i.classList.remove("_navigator-active");
              }
            }
          }
          document.addEventListener("click", e),
            document.addEventListener("watcherCallback", e);
        })(),
        (function () {
          Be = !0;
          const e = document.querySelector("header.header"),
            t = e.hasAttribute("data-scroll-show"),
            s = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
            i = e.dataset.scroll ? e.dataset.scroll : 1;
          let n,
            r = 0;
          document.addEventListener("windowScroll", function (a) {
            const o = window.scrollY;
            clearTimeout(n),
              o >= i
                ? (!e.classList.contains("_header-scroll") &&
                    e.classList.add("_header-scroll"),
                  t &&
                    (o > r
                      ? e.classList.contains("_header-show") &&
                        e.classList.remove("_header-show")
                      : !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show"),
                    (n = setTimeout(() => {
                      !e.classList.contains("_header-show") &&
                        e.classList.add("_header-show");
                    }, s))))
                : (e.classList.contains("_header-scroll") &&
                    e.classList.remove("_header-scroll"),
                  t &&
                    e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")),
              (r = o <= 0 ? 0 : o);
          });
        })(),
        (function () {
          Be = !0;
          const e = document.querySelectorAll("[data-bg]");
          e.length &&
            document.addEventListener("windowScroll", function (t) {
              e.forEach((e) => {
                let t = e.getBoundingClientRect().top + scrollY,
                  s = e.offsetHeight,
                  i = e.querySelector(".bg-item"),
                  n =
                    (((s / 100) * 30) / 100) *
                    Math.abs(
                      ((e.getBoundingClientRect().top - window.innerHeight) /
                        (s + window.innerHeight)) *
                        100
                    );
                i &&
                  scrollY > t - window.innerHeight &&
                  scrollY < t + s &&
                  (i.style.cssText = `transform: translate3d(0,${n}px,0);`);
              });
            });
        })();
    })();
})();
