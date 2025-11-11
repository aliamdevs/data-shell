import B, { useState as pr, useEffect as vr } from "react";
var q = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function hr() {
  if (we) return $;
  we = 1;
  var l = B, d = Symbol.for("react.element"), a = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, o = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(f, _, p) {
    var y, g = {}, O = null, W = null;
    p !== void 0 && (O = "" + p), _.key !== void 0 && (O = "" + _.key), _.ref !== void 0 && (W = _.ref);
    for (y in _) t.call(_, y) && !s.hasOwnProperty(y) && (g[y] = _[y]);
    if (f && f.defaultProps) for (y in _ = f.defaultProps, _) g[y] === void 0 && (g[y] = _[y]);
    return { $$typeof: d, type: f, key: O, ref: W, props: g, _owner: o.current };
  }
  return $.Fragment = a, $.jsx = i, $.jsxs = i, $;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function br() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && (function() {
    var l = B, d = Symbol.for("react.element"), a = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), f = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ee = Symbol.iterator, ke = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[ke];
      return typeof r == "function" ? r : null;
    }
    var D = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          n[u - 1] = arguments[u];
        Fe("error", e, n);
      }
    }
    function Fe(e, r, n) {
      {
        var u = D.ReactDebugCurrentFrame, b = u.getStackAddendum();
        b !== "" && (r += "%s", n = n.concat([b]));
        var x = n.map(function(v) {
          return String(v);
        });
        x.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, x);
      }
    }
    var Ie = !1, Ae = !1, Ce = !1, $e = !1, Le = !1, re;
    re = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === t || e === s || Le || e === o || e === p || e === y || $e || e === W || Ie || Ae || Ce || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === g || e.$$typeof === i || e.$$typeof === f || e.$$typeof === _ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ye(e, r, n) {
      var u = e.displayName;
      if (u)
        return u;
      var b = r.displayName || r.name || "";
      return b !== "" ? n + "(" + b + ")" : n;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function T(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case t:
          return "Fragment";
        case a:
          return "Portal";
        case s:
          return "Profiler";
        case o:
          return "StrictMode";
        case p:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var r = e;
            return te(r) + ".Consumer";
          case i:
            var n = e;
            return te(n._context) + ".Provider";
          case _:
            return Ye(e, e.render, "ForwardRef");
          case g:
            var u = e.displayName || null;
            return u !== null ? u : T(e.type) || "Memo";
          case O: {
            var b = e, x = b._payload, v = b._init;
            try {
              return T(v(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, A = 0, ae, ne, ie, oe, se, le, ue;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Me() {
      {
        if (A === 0) {
          ae = console.log, ne = console.info, ie = console.warn, oe = console.error, se = console.group, le = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        A++;
      }
    }
    function Ue() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: ae
            }),
            info: P({}, e, {
              value: ne
            }),
            warn: P({}, e, {
              value: ie
            }),
            error: P({}, e, {
              value: oe
            }),
            group: P({}, e, {
              value: se
            }),
            groupCollapsed: P({}, e, {
              value: le
            }),
            groupEnd: P({}, e, {
              value: ue
            })
          });
        }
        A < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = D.ReactCurrentDispatcher, K;
    function Y(e, r, n) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (b) {
            var u = b.stack.trim().match(/\n( *(at )?)/);
            K = u && u[1] || "";
          }
        return `
` + K + e;
      }
    }
    var G = !1, M;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Ve();
    }
    function ce(e, r) {
      if (!e || G)
        return "";
      {
        var n = M.get(e);
        if (n !== void 0)
          return n;
      }
      var u;
      G = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = J.current, J.current = null, Me();
      try {
        if (r) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (S) {
              u = S;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (S) {
              u = S;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            u = S;
          }
          e();
        }
      } catch (S) {
        if (S && u && typeof S.stack == "string") {
          for (var c = S.stack.split(`
`), j = u.stack.split(`
`), E = c.length - 1, R = j.length - 1; E >= 1 && R >= 0 && c[E] !== j[R]; )
            R--;
          for (; E >= 1 && R >= 0; E--, R--)
            if (c[E] !== j[R]) {
              if (E !== 1 || R !== 1)
                do
                  if (E--, R--, R < 0 || c[E] !== j[R]) {
                    var w = `
` + c[E].replace(" at new ", " at ");
                    return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, w), w;
                  }
                while (E >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        G = !1, J.current = x, Ue(), Error.prepareStackTrace = b;
      }
      var I = e ? e.displayName || e.name : "", k = I ? Y(I) : "";
      return typeof e == "function" && M.set(e, k), k;
    }
    function qe(e, r, n) {
      return ce(e, !1);
    }
    function ze(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function U(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, ze(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case p:
          return Y("Suspense");
        case y:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            return qe(e.render);
          case g:
            return U(e.type, r, n);
          case O: {
            var u = e, b = u._payload, x = u._init;
            try {
              return U(x(b), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var C = Object.prototype.hasOwnProperty, de = {}, pe = D.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, n = U(e.type, e._source, r ? r.type : null);
        pe.setExtraStackFrame(n);
      } else
        pe.setExtraStackFrame(null);
    }
    function Be(e, r, n, u, b) {
      {
        var x = Function.call.bind(C);
        for (var v in e)
          if (x(e, v)) {
            var c = void 0;
            try {
              if (typeof e[v] != "function") {
                var j = Error((u || "React class") + ": " + n + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              c = e[v](r, v, u, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (E) {
              c = E;
            }
            c && !(c instanceof Error) && (V(b), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", n, v, typeof c), V(null)), c instanceof Error && !(c.message in de) && (de[c.message] = !0, V(b), m("Failed %s type: %s", n, c.message), V(null));
          }
      }
    }
    var Je = Array.isArray;
    function X(e) {
      return Je(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function Ge(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function he(e) {
      if (Ge(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), ve(e);
    }
    var be = D.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, ge;
    function He(e) {
      if (C.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (C.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ze(e, r) {
      typeof e.ref == "string" && be.current;
    }
    function Ne(e, r) {
      {
        var n = function() {
          xe || (xe = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function er(e, r) {
      {
        var n = function() {
          ge || (ge = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var rr = function(e, r, n, u, b, x, v) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: v,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function tr(e, r, n, u, b) {
      {
        var x, v = {}, c = null, j = null;
        n !== void 0 && (he(n), c = "" + n), Qe(r) && (he(r.key), c = "" + r.key), He(r) && (j = r.ref, Ze(r, b));
        for (x in r)
          C.call(r, x) && !Xe.hasOwnProperty(x) && (v[x] = r[x]);
        if (e && e.defaultProps) {
          var E = e.defaultProps;
          for (x in E)
            v[x] === void 0 && (v[x] = E[x]);
        }
        if (c || j) {
          var R = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && Ne(v, R), j && er(v, R);
        }
        return rr(e, c, j, b, u, be.current, v);
      }
    }
    var H = D.ReactCurrentOwner, _e = D.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, n = U(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(n);
      } else
        _e.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function ye() {
      {
        if (H.current) {
          var e = T(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var Ee = {};
    function nr(e) {
      {
        var r = ye();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = nr(r);
        if (Ee[n])
          return;
        Ee[n] = !0;
        var u = "";
        e && e._owner && e._owner !== H.current && (u = " It was passed a child from " + T(e._owner.type) + "."), F(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, u), F(null);
      }
    }
    function me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var n = 0; n < e.length; n++) {
            var u = e[n];
            Z(u) && Re(u, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = De(e);
          if (typeof b == "function" && b !== e.entries)
            for (var x = b.call(e), v; !(v = x.next()).done; )
              Z(v.value) && Re(v.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === _ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          n = r.propTypes;
        else
          return;
        if (n) {
          var u = T(r);
          Be(n, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var b = T(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var u = r[n];
          if (u !== "children" && u !== "key") {
            F(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var je = {};
    function Se(e, r, n, u, b, x) {
      {
        var v = We(e);
        if (!v) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = ar();
          j ? c += j : c += ye();
          var E;
          e === null ? E = "null" : X(e) ? E = "array" : e !== void 0 && e.$$typeof === d ? (E = "<" + (T(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : E = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, c);
        }
        var R = tr(e, r, n, b, x);
        if (R == null)
          return R;
        if (v) {
          var w = r.children;
          if (w !== void 0)
            if (u)
              if (X(w)) {
                for (var I = 0; I < w.length; I++)
                  me(w[I], e);
                Object.freeze && Object.freeze(w);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              me(w, e);
        }
        if (C.call(r, "key")) {
          var k = T(e), S = Object.keys(r).filter(function(dr) {
            return dr !== "key";
          }), N = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!je[k + N]) {
            var cr = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, N, k, cr, k), je[k + N] = !0;
          }
        }
        return e === t ? or(R) : ir(R), R;
      }
    }
    function sr(e, r, n) {
      return Se(e, r, n, !0);
    }
    function lr(e, r, n) {
      return Se(e, r, n, !1);
    }
    var ur = lr, fr = sr;
    L.Fragment = t, L.jsx = ur, L.jsxs = fr;
  })()), L;
}
var Oe;
function xr() {
  return Oe || (Oe = 1, process.env.NODE_ENV === "production" ? q.exports = hr() : q.exports = br()), q.exports;
}
var h = xr();
const gr = "#212121ff";
function _r(l) {
  const d = "9566ec883cfc66c1d8e693110ee4290f1b6476864";
  let a = document.getElementById(d);
  a && a.remove();
  const t = document.createElement("style");
  t.id = d;
  let o = "";
  for (const s in l)
    console.log(s), o += l[s].innerStyle;
  t.textContent = o, document.head.appendChild(t);
}
function yr(l) {
  return l.replace("/;", " __$emi_col__ ").replace(`
`, " ").split(";").map((d) => d.trim().split(/\s+/).filter((a) => a.length));
}
function Er(l) {
  for (var d = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", t = a.length, o = 0; o < l; o++)
    d += a.charAt(Math.floor(Math.random() * t));
  return d;
}
function z(l) {
  return typeof l != "string" ? !1 : !isNaN(l) && !isNaN(parseFloat(l));
}
function Rr(l) {
  let d = "x1";
  const a = Er(14);
  let t = "40px", o = "71.6px", s = "3px", i = gr, f = "1000ms", _ = null, p = 1;
  for (; l[p] !== void 0; )
    if (l[p][0] === "$")
      _ = l[p].replace(/^\$/, ""), p++;
    else if (l[p][0] === "-") {
      let g = !0;
      switch (l[p]) {
        case "-w":
        case "--width":
          g = z(l[p + 1][l[p + 1].length - 1]), t = g ? l[p + 1] + "px" : l[p + 1];
          break;
        case "-h":
        case "--height":
          g = z(l[p + 1][l[p + 1].length - 1]), o = g ? l[p + 1] + "px" : l[p + 1];
          break;
        case "-b":
        case "--border":
          g = z(l[p + 1][l[p + 1].length - 1]), s = g ? l[p + 1] + "px" : l[p + 1];
          break;
        case "-c":
        case "--color":
          i = l[p + 1];
          break;
        case "-s":
        case "--speed":
          g = z(l[p + 1][l[p + 1].length - 1]), f = g ? l[p + 1] + "ms" : l[p + 1];
          break;
        default:
          p--;
          break;
      }
      p += 2;
    } else {
      switch (l[p]) {
        case "large":
          t = "60px", o = "107.5px", s = "7px";
          break;
        case "normal":
          t = "40px", o = "71.6px", s = "4px";
          break;
        case "thin":
          t = "48px", o = "86px", s = "2px";
          break;
        case "small":
          t = "30px", o = "53.7px", s = "2px";
          break;
        case "spinner":
        case "spin":
        case "t1":
        case "type-1":
          d = "x1";
          break;
        case "growing":
        case "grow":
        case "t2":
        case "type-2":
          d = "x2", f = "2000ms";
          break;
        case "dottedspinner":
        case "dotspin":
        case "t3":
        case "type-3":
          d = "x3", f = "3000ms";
          break;
        case "loading":
        case "load":
        case "t4":
        case "type-4":
          d = "x4", f = "2000ms";
          break;
        case "moon":
        case "t5":
        case "type-5":
          d = "x5", f = "2000ms";
          break;
        case "scroll":
        case "t6":
        case "type-6":
          d = "x6", f = "2000ms";
          break;
      }
      p++;
    }
  let y = {};
  if (d === "x1")
    y = {
      __DID: a,
      node: "span",
      id: _,
      class: ["loader-spinner-x0000-" + a],
      innerStyle: `
      .loader-spinner-x0000-` + a + ` {
          width:` + t + ";height:" + t + `;
          border-radius: 50%;
          border: ` + s + " solid " + i + `;
          border-bottom-color: transparent;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation-loader-snpinner-x0000 ` + f + ` linear infinite;
      }
      @keyframes rotation-loader-snpinner-x0000 {
          0% {
              transform: rotate(0deg);
          }

          100% {
              transform: rotate(360deg);
          }
      }`,
      children: []
    };
  else if (d === "x2") {
    const g = f[f.length - 2] === "m" ? String(parseFloat(f) / 2) + "ms" : String(parseFloat(f) / 2) + "s";
    y = {
      __DID: a,
      node: "span",
      id: _,
      class: ["loader-spinner-x0001-" + a],
      innerStyle: ".loader-spinner-x0001-" + a + ` {
          width:` + t + `;
          height:` + t + `;
          display: inline-block;
          position: relative;
      }
      .loader-spinner-x0001-` + a + `::after,
      .loader-spinner-x0001-` + a + `::before{
        content: '';
        box-sizing: border-box;
        width: ` + t + `;
        height: ` + t + `;
        border-radius: 50%;
        border: ` + s + " solid " + i + `;
        position: absolute;
        left: 0;
        top: 0;
        animation: animloader-loader-spinner-x0001 ` + f + ` linear infinite;
      }
      .loader-spinner-x0001-` + a + `::after {
          animation-delay: ` + g + `;
      }
      @keyframes animloader-loader-spinner-x0001 {
          0% {
              transform: scale(0);
              opacity: 1;
          }
          100% {
              transform: scale(1);
              opacity: 0;
          }
        }
      
      `,
      children: []
    };
  } else if (d === "x3")
    y = {
      __DID: a,
      node: "span",
      id: _,
      class: ["loader-spinner-x0003-" + a],
      children: [],
      innerStyle: `
      .loader-spinner-x0003-` + a + ` {
        width: ` + t + `;
        height: ` + t + `;
        border: ` + s + " dotted " + i + `;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation-loader-spinner-x0003 ` + f + ` linear infinite;
      }
      @keyframes rotation-loader-spinner-x0003 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      } 
      `
    };
  else if (d === "x4") {
    const g = f[f.length - 2] === "m" ? String(parseFloat(f) / 2) + "ms" : String(parseFloat(f) / 2) + "s";
    y = {
      __DID: a,
      node: "span",
      id: _,
      class: ["loader-spinner-x0004-" + a],
      children: [],
      innerStyle: `
           .loader-spinner-x0004-` + a + ` {
        width: ` + t + `;
        height: ` + t + `;
        display: inline-block;
        position: relative;
      }
      .loader-spinner-x0004-` + a + `::after,
      .loader-spinner-x0004-` + a + `::before {
        content: '';  
        box-sizing: border-box;
        width: ` + t + `;
        height: ` + t + `;
        border-radius: 50%;
        background: ` + i + `;
        position: absolute;
        left: 0;
        top: 0;
        animation: animloader-loader-spinner-x0004 ` + f + ` linear infinite;
      }
      .loader-spinner-x0004-` + a + `::after {
        animation-delay: ` + g + `;
      }
      @keyframes animloader-loader-spinner-x0004 {
        0% {
          transform: scale(0);
          opacity: 1;
        }
        100% {
          transform: scale(1);
          opacity: 0;
        }
      }
       
      `
    };
  } else if (d === "x5")
    y = {
      __DID: a,
      node: "span",
      id: _,
      class: ["loader-spinner-x0005-" + a],
      children: [],
      innerStyle: `
      .loader-spinner-x0005-` + a + ` {
        width: ` + t + `;
        height: ` + t + `;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: animloader-loader-spinner-x0005 ` + f + ` linear infinite;
      }

      @keyframes animloader-loader-spinner-x0005 {
        0% {
          box-shadow: -` + String(parseFloat(t) * 1.5) + "px 0 " + i + ` inset;
        }
        100% {
          box-shadow: ` + t + " 0 " + i + ` inset;
        }
      }  
      `
    };
  else if (d === "x6") {
    const g = t[t.length] === "%" ? "%" : t[t.length] === "m" ? "em" : "px";
    y = {
      __DID: a,
      node: "span",
      id: _,
      class: ["loader-spinner-x0006-" + a],
      children: [],
      innerStyle: `
      .loader-spinner-x0006-` + a + ` {
        width: ` + t + `;
        height: ` + o + `;
        position: absolute;
      }

      .loader-spinner-x0006-` + a + `::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50% , 50%);
        width: ` + String(parseFloat(t) * 0.2083333333) + g + `;
        height: ` + String(parseFloat(t) * 0.2083333333) + g + `;
        background: ` + i + `;
        border-radius: 50%;
        animation: bounce-loader-spinner-x0006 1s ease-in infinite alternate;
      }
      .loader-spinner-x0006-` + a + `::after {
        content: '';
        left: 0;
        top: 0;
        position: absolute;
        width: ` + t + `;
        height: ` + o + `;
        box-sizing: border-box;
        border: ` + s + " solid " + i + `;
        border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
        animation: kick-loader-spinner-x0006-` + a + ` 1s ease-in infinite alternate;
      }
      @keyframes bounce-loader-spinner-x0006 {
        0% {
          top: 0%;
          opacity: 1;
        }
        100% {
          top: 75%;
          opacity: 0.2;
        }
      }
      @keyframes kick-loader-spinner-x0006-` + a + ` {
        0% , 75% {
          height: ` + o + `
        }
        100% {
          height: ` + String(parseFloat(o) * 0.9) + g + `
        }
      }
      `
    };
  }
  return y;
}
function mr(l) {
  let d = [];
  if (l) {
    const a = yr(l);
    for (const t of a)
      t[0] === "loader" && d.push(Rr(t));
  }
  return d;
}
function Pe({ type: l = "div", src: d, children: a, className: t, id: o, onClick: s = () => {
}, dsi: i, style: f }) {
  switch (l) {
    case "span":
      return /* @__PURE__ */ h.jsx("span", { style: f, "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "h1":
      return /* @__PURE__ */ h.jsx("h1", { style: f, "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "h2":
      return /* @__PURE__ */ h.jsx("h2", { style: f, "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "h3":
      return /* @__PURE__ */ h.jsx("h3", { style: f, "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "h4":
      return /* @__PURE__ */ h.jsx("h4", { style: f, "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "h5":
      return /* @__PURE__ */ h.jsx("h5", { style: f, "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "h6":
      return /* @__PURE__ */ h.jsx("h6", { style: f, "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "section":
      return /* @__PURE__ */ h.jsx("section", { style: f, "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "blockquote":
      return /* @__PURE__ */ h.jsx("blockquote", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "dd":
      return /* @__PURE__ */ h.jsx("dd", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "dt":
      return /* @__PURE__ */ h.jsx("dt", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "dl":
      return /* @__PURE__ */ h.jsx("dl", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "hr":
      return /* @__PURE__ */ h.jsx("hr", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "li":
      return /* @__PURE__ */ h.jsx("li", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "ol":
      return /* @__PURE__ */ h.jsx("ol", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "p":
      return /* @__PURE__ */ h.jsx("p", { style: f, "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "ul":
      return /* @__PURE__ */ h.jsx("ul", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "a":
      return /* @__PURE__ */ h.jsx("a", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "<button":
      return /* @__PURE__ */ h.jsx("button", { style: f, "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "datalist":
      return /* @__PURE__ */ h.jsx("datalist", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "form":
      return /* @__PURE__ */ h.jsx("form", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "input":
      return /* @__PURE__ */ h.jsx("input", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "label":
      return /* @__PURE__ */ h.jsx("label", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "option":
      return /* @__PURE__ */ h.jsx("option", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "select":
      return /* @__PURE__ */ h.jsx("select", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "textarea":
      return /* @__PURE__ */ h.jsx("textarea", { "data-shell-id": i, onClick: s, id: o, className: t, children: a });
    case "img":
      return /* @__PURE__ */ h.jsx("img", { "data-shell-id": i, src: d, onClick: s, id: o, className: t });
    case "video":
      return /* @__PURE__ */ h.jsx("video", { "data-shell-id": i, src: d, onClick: s, id: o, className: t });
    case "audio":
      return /* @__PURE__ */ h.jsx("audio", { "data-shell-id": i, src: d, onClick: s, id: o, className: t });
    case "div":
      return /* @__PURE__ */ h.jsx("div", { "data-shell-id": i, style: f, onClick: s, id: o, className: t, children: a });
    default:
      return /* @__PURE__ */ h.jsx(B.Fragment, { children: a });
  }
}
const Sr = ({ shell: l, style: d, className: a, type: t = "div" }) => {
  const [o, s] = pr(null);
  return vr(() => {
    const i = mr(l);
    s(i), _r(i);
  }, [l]), /* @__PURE__ */ h.jsx(B.Fragment, { children: /* @__PURE__ */ h.jsx(
    Pe,
    {
      type: t,
      style: d,
      className: a,
      children: o === null ? null : o.map((i, f) => /* @__PURE__ */ h.jsx(Pe, { type: i.node, className: i.class.join(" "), id: i.id === null ? "" : 'id="' + i.id + '"', dsi: i.__DID }, f))
    }
  ) });
};
function wr() {
  run_data_shell_replacer();
}
run_data_shell_replacer();
export {
  Sr as DataShellEnv,
  wr as useDataShell
};
