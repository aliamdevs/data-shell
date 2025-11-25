import R, { useState as ce, useEffect as de } from "react";
var B = { exports: {} }, E = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W;
function ue() {
  if (W) return E;
  W = 1;
  var i = Symbol.for("react.transitional.element"), o = Symbol.for("react.fragment");
  function e(r, n, s) {
    var l = null;
    if (s !== void 0 && (l = "" + s), n.key !== void 0 && (l = "" + n.key), "key" in n) {
      s = {};
      for (var a in n)
        a !== "key" && (s[a] = n[a]);
    } else s = n;
    return n = s.ref, {
      $$typeof: i,
      type: r,
      key: l,
      ref: n !== void 0 ? n : null,
      props: s
    };
  }
  return E.Fragment = o, E.jsx = e, E.jsxs = e, E;
}
var j = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G;
function fe() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && (function() {
    function i(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === ie ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case k:
          return "Fragment";
        case v:
          return "Profiler";
        case $:
          return "StrictMode";
        case te:
          return "Suspense";
        case ne:
          return "SuspenseList";
        case ae:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case f:
            return "Portal";
          case ee:
            return t.displayName || "Context";
          case C:
            return (t._context.displayName || "Context") + ".Consumer";
          case re:
            var d = t.render;
            return t = t.displayName, t || (t = d.displayName || d.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case le:
            return d = t.displayName || null, d !== null ? d : i(t.type) || "Memo";
          case L:
            d = t._payload, t = t._init;
            try {
              return i(t(d));
            } catch {
            }
        }
      return null;
    }
    function o(t) {
      return "" + t;
    }
    function e(t) {
      try {
        o(t);
        var d = !1;
      } catch {
        d = !0;
      }
      if (d) {
        d = console;
        var p = d.error, b = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return p.call(
          d,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          b
        ), o(t);
      }
    }
    function r(t) {
      if (t === k) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === L)
        return "<...>";
      try {
        var d = i(t);
        return d ? "<" + d + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function n() {
      var t = z.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function l(t) {
      if (F.call(t, "key")) {
        var d = Object.getOwnPropertyDescriptor(t, "key").get;
        if (d && d.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function a(t, d) {
      function p() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          d
        ));
      }
      p.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: p,
        configurable: !0
      });
    }
    function x() {
      var t = i(this.type);
      return M[t] || (M[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function c(t, d, p, b, I, A) {
      var S = p.ref;
      return t = {
        $$typeof: g,
        type: t,
        key: d,
        props: p,
        _owner: b
      }, (S !== void 0 ? S : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function _(t, d, p, b, I, A) {
      var S = d.children;
      if (S !== void 0)
        if (b)
          if (se(S)) {
            for (b = 0; b < S.length; b++)
              h(S[b]);
            Object.freeze && Object.freeze(S);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(S);
      if (F.call(d, "key")) {
        S = i(t);
        var y = Object.keys(d).filter(function(oe) {
          return oe !== "key";
        });
        b = 0 < y.length ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}", q[S + b] || (y = 0 < y.length ? "{" + y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          b,
          S,
          y,
          S
        ), q[S + b] = !0);
      }
      if (S = null, p !== void 0 && (e(p), S = "" + p), l(d) && (e(d.key), S = "" + d.key), "key" in d) {
        p = {};
        for (var O in d)
          O !== "key" && (p[O] = d[O]);
      } else p = d;
      return S && a(
        p,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), c(
        t,
        S,
        p,
        n(),
        I,
        A
      );
    }
    function h(t) {
      m(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === L && (t._payload.status === "fulfilled" ? m(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function m(t) {
      return typeof t == "object" && t !== null && t.$$typeof === g;
    }
    var D = R, g = Symbol.for("react.transitional.element"), f = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), ee = Symbol.for("react.context"), re = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), le = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), ae = Symbol.for("react.activity"), ie = Symbol.for("react.client.reference"), z = D.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, F = Object.prototype.hasOwnProperty, se = Array.isArray, T = console.createTask ? console.createTask : function() {
      return null;
    };
    D = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var Y, M = {}, N = D.react_stack_bottom_frame.bind(
      D,
      s
    )(), U = T(r(s)), q = {};
    j.Fragment = k, j.jsx = function(t, d, p) {
      var b = 1e4 > z.recentlyCreatedOwnerStacks++;
      return _(
        t,
        d,
        p,
        !1,
        b ? Error("react-stack-top-frame") : N,
        b ? T(r(t)) : U
      );
    }, j.jsxs = function(t, d, p) {
      var b = 1e4 > z.recentlyCreatedOwnerStacks++;
      return _(
        t,
        d,
        p,
        !0,
        b ? Error("react-stack-top-frame") : N,
        b ? T(r(t)) : U
      );
    };
  })()), j;
}
var J;
function he() {
  return J || (J = 1, process.env.NODE_ENV === "production" ? B.exports = ue() : B.exports = fe()), B.exports;
}
var u = he();
const xe = "#212121ff";
function X(i) {
  const o = "9566ec883cfc66c1d8e693110ee4290f1b6476864";
  let e = document.getElementById(o);
  e && e.remove();
  const r = document.createElement("style");
  r.id = o;
  function n(s) {
    let l = "";
    for (const a of s)
      l += a.innerStyle, a.children.length !== 0 && (l += n(a.children));
    return l;
  }
  r.textContent = n(i), document.head.appendChild(r);
}
function H(i) {
  return i.replace("/;", " __$emi_col__ ").replace(`
`, " ").split(";").map((o) => o.trim().split(/\s+/).filter((e) => e.length));
}
function Q(i) {
  for (var o = "", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", r = e.length, n = 0; n < i; n++)
    o += e.charAt(Math.floor(Math.random() * r));
  return o;
}
function w(i) {
  return typeof i != "string" ? !1 : !isNaN(i) && !isNaN(parseFloat(i));
}
function P(i) {
  let o = "x1";
  const e = Q(14);
  let r = "40px", n = "71.6px", s = "3px", l = xe, a = "1000ms", x = null, c = 1;
  for (; i[c] !== void 0; )
    if (i[c][0] === "$")
      x = i[c].replace(/^\$/, ""), c++;
    else if (i[c][0] === "-") {
      let h = !0;
      switch (i[c]) {
        case "-w":
        case "--width":
          h = w(i[c + 1][i[c + 1].length - 1]), r = h ? i[c + 1] + "px" : i[c + 1];
          break;
        case "-h":
        case "--height":
          h = w(i[c + 1][i[c + 1].length - 1]), n = h ? i[c + 1] + "px" : i[c + 1];
          break;
        case "-b":
        case "--border":
          h = w(i[c + 1][i[c + 1].length - 1]), s = h ? i[c + 1] + "px" : i[c + 1];
          break;
        case "-c":
        case "--color":
          l = i[c + 1];
          break;
        case "-s":
        case "--speed":
          h = w(i[c + 1][i[c + 1].length - 1]), a = h ? i[c + 1] + "ms" : i[c + 1];
          break;
        case "-1":
          o = "x1", c--;
          break;
        case "-2":
          o = "x2", a = "2000ms", c--;
          break;
        case "-3":
          o = "x3", a = "3000ms", c--;
          break;
        case "-4":
          o = "x4", a = "2000ms", c--;
          break;
        case "-5":
          o = "x5", a = "2000ms", c--;
          break;
        case "-6":
          o = "x6", a = "2000ms", c--;
          break;
        default:
          c--;
          break;
      }
      c += 2;
    } else {
      switch (i[c]) {
        case "large":
          r = "60px", n = "107.5px", s = "7px";
          break;
        case "normal":
          r = "40px", n = "71.6px", s = "4px";
          break;
        case "thin":
          r = "48px", n = "86px", s = "2px";
          break;
        case "small":
          r = "30px", n = "53.7px", s = "2px";
          break;
      }
      c++;
    }
  let _ = {};
  if (o === "x1")
    _ = {
      __DID: e,
      node: "span",
      id: x,
      class: ["loader-spinner-x0000-" + e],
      innerStyle: `
      .loader-spinner-x0000-` + e + ` {
          width:` + r + ";height:" + r + `;
          border-radius: 50%;
          border: ` + s + " solid " + l + `;
          border-bottom-color: transparent;
          display: inline-block;
          box-sizing: border-box;
          cursor: progress;
          animation: rotation-loader-snpinner-x0000 ` + a + ` linear infinite;
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
  else if (o === "x2") {
    const h = a[a.length - 2] === "m" ? String(parseFloat(a) / 2) + "ms" : String(parseFloat(a) / 2) + "s";
    _ = {
      __DID: e,
      node: "span",
      id: x,
      class: ["loader-spinner-x0001-" + e],
      innerStyle: ".loader-spinner-x0001-" + e + ` {
          width:` + r + `;
          height:` + r + `;
          display: inline-block;
          cursor: progress;
          position: relative;
      }
      .loader-spinner-x0001-` + e + `::after,
      .loader-spinner-x0001-` + e + `::before{
        content: '';
        box-sizing: border-box;
        cursor: progress;
        width: ` + r + `;
        height: ` + r + `;
        border-radius: 50%;
        border: ` + s + " solid " + l + `;
        position: absolute;
        left: 0;
        top: 0;
        animation: animloader-loader-spinner-x0001 ` + a + ` linear infinite;
      }
      .loader-spinner-x0001-` + e + `::after {
          animation-delay: ` + h + `;
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
  } else if (o === "x3")
    _ = {
      __DID: e,
      node: "span",
      id: x,
      class: ["loader-spinner-x0003-" + e],
      children: [],
      innerStyle: `
      .loader-spinner-x0003-` + e + ` {
        width: ` + r + `;
        height: ` + r + `;
        border: ` + s + " dotted " + l + `;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        cursor: progress;
        animation: rotation-loader-spinner-x0003 ` + a + ` linear infinite;
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
  else if (o === "x4") {
    const h = a[a.length - 2] === "m" ? String(parseFloat(a) / 2) + "ms" : String(parseFloat(a) / 2) + "s";
    _ = {
      __DID: e,
      node: "span",
      id: x,
      class: ["loader-spinner-x0004-" + e],
      children: [],
      innerStyle: `
           .loader-spinner-x0004-` + e + ` {
        width: ` + r + `;
        height: ` + r + `;
        display: inline-block;
        cursor: progress;
        position: relative;
      }
      .loader-spinner-x0004-` + e + `::after,
      .loader-spinner-x0004-` + e + `::before {
        content: '';  
        box-sizing: border-box;
        width: ` + r + `;
        height: ` + r + `;
        border-radius: 50%;
        background: ` + l + `;
        position: absolute;
        cursor: progress;
        left: 0;
        top: 0;
        animation: animloader-loader-spinner-x0004 ` + a + ` linear infinite;
      }
      .loader-spinner-x0004-` + e + `::after {
        animation-delay: ` + h + `;
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
  } else if (o === "x5")
    _ = {
      __DID: e,
      node: "span",
      id: x,
      class: ["loader-spinner-x0005-" + e],
      children: [],
      innerStyle: `
      .loader-spinner-x0005-` + e + ` {
        width: ` + r + `;
        height: ` + r + `;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        cursor: progress;
        animation: animloader-loader-spinner-x0005 ` + a + ` linear infinite;
      }

      @keyframes animloader-loader-spinner-x0005 {
        0% {
          box-shadow: -` + String(parseFloat(r) * 1.5) + "px 0 " + l + ` inset;
        }
        100% {
          box-shadow: ` + r + " 0 " + l + ` inset;
        }
      }  
      `
    };
  else if (o === "x6") {
    const h = r[r.length] === "%" ? "%" : r[r.length] === "m" ? "em" : "px";
    _ = {
      __DID: e,
      node: "span",
      id: x,
      class: ["loader-spinner-x0006-" + e],
      children: [],
      innerStyle: `
      .loader-spinner-x0006-` + e + ` {
        width: ` + r + `;
        height: ` + n + `;
        position: relative;
      }

      .loader-spinner-x0006-` + e + `::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50% , 50%);
        width: ` + String(parseFloat(r) * 0.2083333333) + h + `;
        height: ` + String(parseFloat(r) * 0.2083333333) + h + `;
        background: ` + l + `;
        border-radius: 50%;
        animation: bounce-loader-spinner-x0006 1s ease-in infinite alternate;
      }
      .loader-spinner-x0006-` + e + `::after {
        content: '';
        left: 0;
        top: 0;
        position: absolute;
        width: ` + r + `;
        height: ` + n + `;
        box-sizing: border-box;
        border: ` + s + " solid " + l + `;
        border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
        animation: kick-loader-spinner-x0006-` + e + ` 1s ease-in infinite alternate;
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
      @keyframes kick-loader-spinner-x0006-` + e + ` {
        0% , 75% {
          height: ` + n + `
        }
        100% {
          height: ` + String(parseFloat(n) * 0.9) + h + `
        }
      }
      `
    };
  }
  return _;
}
function Z(i) {
  let o = "x1";
  const e = Q(14), r = 10;
  let n = 3, s = "round", l = "380px", a = "#e4e4e4ff", x = "#d8d8d8ff", c = "#f8f8f8ff", _ = !1, h = "#f2f2f2", m = !1, D = null, g = !1, f = 1;
  for (; i[f] !== void 0; )
    if (i[f][0] === "$")
      D = i[f].replace(/^\$/, ""), f++;
    else if (i[f][0] === "-") {
      let v = !0;
      switch (i[f]) {
        case "-s":
        case "--scale":
          v = w(i[f + 1]), n = v ? parseFloat(i[f + 1]) : 3;
          break;
        case "-w":
        case "--width":
          v = w(i[f + 1][i[f + 1].length - 1]), l = v ? i[f + 1] + "px" : i[f + 1];
          break;
        case "-b":
        case "--background-color":
          c = i[f + 1];
          break;
        case "-a":
        case "--avatar":
          s = i[f + 1];
          break;
        case "--border-color":
          h = i[f + 1];
          break;
        case "-c":
        case "--color":
          a = i[f + 1], x = i[f + 2], f++;
          break;
        case "-1":
          o = "x1", l = "380px", f--;
          break;
        case "-2":
          o = "x2", l = "380px", s = "square", f--;
          break;
        case "-3":
          o = "x3", l = "230px", f--;
          break;
        case "-4":
          o = "x4", s = "square", l = "200px", f--;
          break;
        default:
          f--;
          break;
      }
      f += 2;
    } else {
      switch (i[f]) {
        case "large":
          o === "x1" || o === "x2" ? l = "450px" : o === "x3" ? l = "300px" : o === "x4" && (l = "270px"), n = 4;
          break;
        case "normal":
          o === "x1" || o === "x2" ? l = "380px" : o === "x3" ? l = "230px" : o === "x4" && (l = "200px"), n = 3;
          break;
        case "small":
          o === "x1" || o === "x2" ? l = "290px" : o === "x3" ? l = "150px" : o === "x4" && (l = "140px"), n = 2;
          break;
        case "sharp":
          g = !0;
          break;
        case "reverse":
          m = !0;
          break;
        case "frame":
          _ = !0;
          break;
        case "noframe":
          _ = !1;
          break;
        case "dark":
          a = "#252525ff", x = "#333333ff", c = "#1c1c1cff", h = "#202020ff";
          break;
        case "light":
          a = "#e4e4e4ff", x = "#d8d8d8ff", c = "#f8f8f8ff", h = "#f2f2f2";
          break;
      }
      f++;
    }
  let k = {
    __DID: e,
    node: "div",
    id: D,
    class: ["skeleton-tempalate-parent-xB00-" + e],
    innerStyle: `
    .skeleton-tempalate-parent-xB00-${e} {
      width: ${l};
      height:max-content;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: ${_ ? c : "transparent"};
      border: 1px solid ${_ ? h : "transparent"};
      padding :11px;
      border-radius:${g ? "0" : String(n * (r / 2))}px;
      row-gap: ${String(n * (r / 3))}px;
      box-sizing: border-box;
    }
    .line-skeleton-flex-row-xB00-${e} {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: ${String(n * (r / 3))}px;
      box-sizing: border-box;
    }
    .line-skeleton-flex-row-xB02-${e} {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      column-gap: ${String(n * (r / 3))}px;
      box-sizing: border-box;
    }
    .line-skeleton-flex-col-xB00-${e} {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      row-gap: ${String(n * (r / 3))}px;
      box-sizing: border-box;
    }
    .SLDS-xB00-hide-${e} {
      visibility: hidden;
    }
    .SLDS-xB00-unzel-${e} {
      width: ${String(n * 4 * r)}px;
      aspect-ratio: 1;
      border-radius: 10000000px;
      background-color: ${a};
    }
    .SLDS-xB00-fuzel-${e} {
      width: ${String(n * 4 * r)}px;
      aspect-ratio: 1;
      border-radius: ${g ? "0" : String(n * (r / 3))}px;
      background-color: ${a};
    }
    .SLDS-xB00-tezel-${e} {
      width: 100%;
      height: ${String(n * r)}px;
      border-radius: ${g ? "0" : String(n * (r / 3))}px;
      background-color: ${a};
    }
    .shimmer-data-shell-specific-${e} {
        background: linear-gradient(90deg,
                ${a} 30%,
                ${x} 50%,
                ${a} 70%);
        background-size: 400%;
        animation: shimmer-data-shell-specific-anim 1.5s infinite linear;
    }
    @keyframes shimmer-data-shell-specific-anim {
      0% {
        background-position: 100% 100%;
      }

      100% {
        background-position: 0 0;
      }
    }
    `,
    children: []
  }, $ = [];
  switch (o) {
    case "x1":
      m ? $.push({ __DID: e + "ch01", node: "div", id: null, class: [`line-skeleton-flex-row-xB00-${e}`], innerStyle: "", children: [
        { __DID: e + "ch012", node: "div", id: null, class: [`line-skeleton-flex-col-xB00-${e}`], innerStyle: "", children: [
          { __DID: e + "ch0121", node: "div", id: null, class: [`line-skeleton-flex-row-xB00-${e}`], innerStyle: "", children: [
            { __DID: e + "ch01212", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `SLDS-xB00-hide-${e}`], innerStyle: "", children: [] },
            { __DID: e + "ch01211", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] }
          ] },
          { __DID: e + "ch0122", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] },
          { __DID: e + "ch0123", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] }
        ] },
        { __DID: e + "ch011", node: "div", id: null, class: [`SLDS-xB00-${s === "round" ? "unzel" : "fuzel"}-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] }
      ] }) : $.push({ __DID: e + "ch01", node: "div", id: null, class: [`line-skeleton-flex-row-xB00-${e}`], innerStyle: "", children: [
        { __DID: e + "ch011", node: "div", id: null, class: [`SLDS-xB00-${s === "round" ? "unzel" : "fuzel"}-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] },
        { __DID: e + "ch012", node: "div", id: null, class: [`line-skeleton-flex-col-xB00-${e}`], innerStyle: "", children: [
          { __DID: e + "ch0121", node: "div", id: null, class: [`line-skeleton-flex-row-xB00-${e}`], innerStyle: "", children: [
            { __DID: e + "ch01211", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] },
            { __DID: e + "ch01212", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `SLDS-xB00-hide-${e}`], innerStyle: "", children: [] }
          ] },
          { __DID: e + "ch0122", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] },
          { __DID: e + "ch0123", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] }
        ] }
      ] });
      break;
    case "x2":
      m ? ($.push({ __DID: e + "ch01", node: "div", id: null, class: [`line-skeleton-flex-row-xB02-${e}`], innerStyle: "", children: [
        { __DID: e + "ch012", node: "div", id: null, class: [`line-skeleton-flex-col-xB00-${e}`], innerStyle: "", children: [
          { __DID: e + "ch0121", node: "div", id: null, class: [`line-skeleton-flex-row-xB00-${e}`], innerStyle: "", children: [
            { __DID: e + "ch01212", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `SLDS-xB00-hide-${e}`], innerStyle: "", children: [] },
            { __DID: e + "ch01211", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] }
          ] },
          { __DID: e + "ch0122", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] }
        ] },
        { __DID: e + "ch011", node: "div", id: null, class: [`SLDS-xB00-${s === "round" ? "unzel" : "fuzel"}2-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: `
             .SLDS-xB00-unzel2-${e} {
              width: ${String(n * 2.5 * r)}px;
              aspect-ratio: 1;
              border-radius: 10000000px;
              background-color: ${a};
            }
            .SLDS-xB00-fuzel2-${e} {
              width: ${String(n * 2.5 * r)}px;
              aspect-ratio: 1;
              border-radius: ${g ? "0" : String(n * (r / 3))}px;
              background-color: ${a};
            }
             `, children: [] }
      ] }), $.push({ __DID: e + "ch10", node: "div", id: null, class: [`SLDS-xB00-tezel2-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: `
            .SLDS-xB00-tezel2-${e} {
              width: 100%;
              height: ${String(n * r) * 3}px;
              border-radius: ${g ? "0" : String(n * (r / 3))}px;
              background-color: ${a};
            }
          `, children: [] })) : ($.push({ __DID: e + "ch01", node: "div", id: null, class: [`line-skeleton-flex-row-xB02-${e}`], innerStyle: "", children: [
        { __DID: e + "ch011", node: "div", id: null, class: [`SLDS-xB00-${s === "round" ? "unzel" : "fuzel"}2-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: `
           .SLDS-xB00-unzel2-${e} {
              width: ${String(n * 2.5 * r)}px;
              aspect-ratio: 1;
              border-radius: 10000000px;
              background-color: ${a};
            }
            .SLDS-xB00-fuzel2-${e} {
              width: ${String(n * 2.5 * r)}px;
              aspect-ratio: 1;
              border-radius: ${g ? "0" : String(n * (r / 3))}px;
              background-color: ${a};
            } 
              `, children: [] },
        { __DID: e + "ch012", node: "div", id: null, class: [`line-skeleton-flex-col-xB00-${e}`], innerStyle: "", children: [
          { __DID: e + "ch0121", node: "div", id: null, class: [`line-skeleton-flex-row-xB00-${e}`], innerStyle: "", children: [
            { __DID: e + "ch01211", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] },
            { __DID: e + "ch01212", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `SLDS-xB00-hide-${e}`], innerStyle: "", children: [] }
          ] },
          { __DID: e + "ch0122", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] }
        ] }
      ] }), $.push({ __DID: e + "ch10", node: "div", id: null, class: [`SLDS-xB00-tezel2-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: `
            .SLDS-xB00-tezel2-${e} {
              width: 100%;
              height: ${String(n * r) * 3}px;
              border-radius: ${g ? "0" : String(n * (r / 3))}px;
              background-color: ${a};
            }
          `, children: [] }));
      break;
    case "x3":
      $.push(
        { __DID: e + "ch01", node: "div", id: null, class: [`SLDS-xB00-${s === "round" ? "unzel" : "fuzel"}3-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: `
          .SLDS-xB00-unzel3-${e} {
            width: ${String(n * 3.2 * r)}px;
            aspect-ratio: 1;
            border-radius: 10000000px;
            background-color: ${a};
          }
          .SLDS-xB00-fuzel3-${e} {
            width: ${String(n * 3.2 * r)}px;
            aspect-ratio: 1;
            border-radius: ${g ? "0" : String(n * (r / 3))}px;
            background-color: ${a};
          } 
            `, children: [] }
      ), $.push({ __DID: e + "ch02", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] }), $.push({ __DID: e + "ch03", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] });
      break;
    case "x4":
      $.push(
        { __DID: e + "ch02", node: "div", id: null, class: [`SLDS-xB00-tezel-ar-1-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: `
          .SLDS-xB00-tezel-ar-1-${e} {
            width: 100%;
            aspect-ratio : 1;
            border-radius: ${g ? "0" : String(n * (r / 3))}px;
            background-color: ${a};
          }
        `, children: [] }
      ), $.push(
        { __DID: e + "ch01", node: "div", id: null, class: [`line-skeleton-flex-row-xB00-${e}`], innerStyle: "", children: [
          { __DID: e + "ch011", node: "div", id: null, class: [`SLDS-xB00-${s === "round" ? "unzel" : "fuzel"}3-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: `
           .SLDS-xB00-unzel3-${e} {
              width: ${String(n * 2 * r)}px;
              aspect-ratio: 1;
              border-radius: 10000000px;
              background-color: ${a};
            }
            .SLDS-xB00-fuzel3-${e} {
              width: ${String(n * 2 * r)}px;
              aspect-ratio: 1;
              border-radius: ${g ? "0" : String(n * (r / 3))}px;
              background-color: ${a};
            } 
              `, children: [] },
          { __DID: e + "ch012", node: "div", id: null, class: [`SLDS-xB00-tezel-${e}`, `shimmer-data-shell-specific-${e}`], innerStyle: "", children: [] }
        ] }
      );
      break;
  }
  return k.children = $, k;
}
function K() {
  document.head.innerHTML += '<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/aliamdevs/airy-icons@latest/css/airy.min.css" />';
  function i(r) {
    let n = "";
    if (r.children.length !== 0)
      for (const s of r.children)
        n += i(s);
    return `<${r.node} ${r.id === null ? "" : 'id="' + r.id + '"'} class="${r.class.join(" ")}" data-shell-id="${r.__DID}" >${n}</${r.node}>`;
  }
  let o = [];
  const e = document.body.getElementsByTagName("*");
  for (let r = 0; r < e.length; r++) {
    const n = e[r].getAttribute("data-shell");
    if (!n) continue;
    const s = H(n);
    for (const l of s) {
      let a;
      switch (l[0]) {
        case "loader":
          a = P(l);
          break;
        case "skeleton":
          a = Z(l);
          break;
        default:
          a = P(l);
          break;
      }
      o.push(a), e[r].innerHTML += i(a);
    }
  }
  X(o);
}
function pe(i) {
  let o = [];
  if (i) {
    const e = H(i);
    for (const r of e)
      switch (r[0]) {
        case "loader":
          o.push(P(r));
          break;
        case "skeleton":
          o.push(Z(r));
          break;
      }
  }
  return o;
}
function V({ type: i = "div", src: o, children: e, className: r, id: n, onClick: s = () => {
}, dsi: l, style: a }) {
  switch (i) {
    case "span":
      return /* @__PURE__ */ u.jsx("span", { style: a, "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "h1":
      return /* @__PURE__ */ u.jsx("h1", { style: a, "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "h2":
      return /* @__PURE__ */ u.jsx("h2", { style: a, "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "h3":
      return /* @__PURE__ */ u.jsx("h3", { style: a, "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "h4":
      return /* @__PURE__ */ u.jsx("h4", { style: a, "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "h5":
      return /* @__PURE__ */ u.jsx("h5", { style: a, "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "h6":
      return /* @__PURE__ */ u.jsx("h6", { style: a, "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "section":
      return /* @__PURE__ */ u.jsx("section", { style: a, "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "blockquote":
      return /* @__PURE__ */ u.jsx("blockquote", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "dd":
      return /* @__PURE__ */ u.jsx("dd", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "dt":
      return /* @__PURE__ */ u.jsx("dt", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "dl":
      return /* @__PURE__ */ u.jsx("dl", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "hr":
      return /* @__PURE__ */ u.jsx("hr", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "li":
      return /* @__PURE__ */ u.jsx("li", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "ol":
      return /* @__PURE__ */ u.jsx("ol", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "p":
      return /* @__PURE__ */ u.jsx("p", { style: a, "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "i":
      return /* @__PURE__ */ u.jsx("p", { style: a, "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "ul":
      return /* @__PURE__ */ u.jsx("ul", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "a":
      return /* @__PURE__ */ u.jsx("a", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "<button":
      return /* @__PURE__ */ u.jsx("button", { style: a, "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "datalist":
      return /* @__PURE__ */ u.jsx("datalist", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "form":
      return /* @__PURE__ */ u.jsx("form", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "input":
      return /* @__PURE__ */ u.jsx("input", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "label":
      return /* @__PURE__ */ u.jsx("label", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "option":
      return /* @__PURE__ */ u.jsx("option", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "select":
      return /* @__PURE__ */ u.jsx("select", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "textarea":
      return /* @__PURE__ */ u.jsx("textarea", { "data-shell-id": l, onClick: s, id: n, className: r, children: e });
    case "img":
      return /* @__PURE__ */ u.jsx("img", { "data-shell-id": l, src: o, onClick: s, id: n, className: r });
    case "video":
      return /* @__PURE__ */ u.jsx("video", { "data-shell-id": l, src: o, onClick: s, id: n, className: r });
    case "audio":
      return /* @__PURE__ */ u.jsx("audio", { "data-shell-id": l, src: o, onClick: s, id: n, className: r });
    case "none":
      return /* @__PURE__ */ u.jsx(R.Fragment, { children: e });
    default:
      return /* @__PURE__ */ u.jsx("div", { "data-shell-id": l, style: a, onClick: s, id: n, className: r, children: e });
  }
}
const Se = ({ shell: i, style: o, className: e, type: r = "div" }) => {
  const [n, s] = ce(null);
  de(() => {
    const a = pe(i);
    s(a), X(a);
  }, [i]);
  const l = ({ nodelist: a }) => /* @__PURE__ */ u.jsx(R.Fragment, { children: a === null ? null : a.map((x, c) => /* @__PURE__ */ u.jsx(V, { type: x.node, className: x.class.join(" "), id: x.id === null ? "" : 'id="' + x.id + '"', dsi: x.__DID, children: x.children.length !== 0 ? /* @__PURE__ */ u.jsx(l, { nodelist: x.children }) : null }, c)) });
  return /* @__PURE__ */ u.jsx(R.Fragment, { children: /* @__PURE__ */ u.jsx(
    V,
    {
      type: r,
      style: o,
      className: e,
      children: /* @__PURE__ */ u.jsx(l, { nodelist: n })
    }
  ) });
};
function _e() {
  K();
}
K();
export {
  Se as DataShellEnv,
  _e as useDataShell
};
