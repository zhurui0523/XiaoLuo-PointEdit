import tt, { useRef as oe, useState as R, useEffect as ge, useMemo as Re, memo as De, useId as rt, useCallback as U } from "react";
import { Image as st, Sparkles as Oe, Upload as Le, X as Ce, MousePointer as it, Square as Ue, Brush as He, ArrowUpRight as nt, Hash as Be, Type as Ve, Eraser as Je, Check as Ze, Undo as lt, Redo as ot, Download as qe, ZoomOut as Ke, ZoomIn as Ge, Trash2 as at, MousePointer2 as ct, MoveUpRight as dt, Undo2 as ut, Redo2 as ht } from "lucide-react";
import { createPortal as xt } from "react-dom";
var je = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function ft() {
  if (Ae) return be;
  Ae = 1;
  var r = Symbol.for("react.transitional.element"), s = Symbol.for("react.fragment");
  function t(l, f, g) {
    var h = null;
    if (g !== void 0 && (h = "" + g), f.key !== void 0 && (h = "" + f.key), "key" in f) {
      g = {};
      for (var d in f)
        d !== "key" && (g[d] = f[d]);
    } else g = f;
    return f = g.ref, {
      $$typeof: r,
      type: l,
      key: h,
      ref: f !== void 0 ? f : null,
      props: g
    };
  }
  return be.Fragment = s, be.jsx = t, be.jsxs = t, be;
}
var we = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function pt() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(o) {
      if (o == null) return null;
      if (typeof o == "function")
        return o.$$typeof === ce ? null : o.displayName || o.name || null;
      if (typeof o == "string") return o;
      switch (o) {
        case j:
          return "Fragment";
        case ie:
          return "Profiler";
        case E:
          return "StrictMode";
        case Q:
          return "Suspense";
        case he:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof o == "object")
        switch (typeof o.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), o.$$typeof) {
          case F:
            return "Portal";
          case D:
            return o.displayName || "Context";
          case H:
            return (o._context.displayName || "Context") + ".Consumer";
          case P:
            var N = o.render;
            return o = o.displayName, o || (o = N.displayName || N.name || "", o = o !== "" ? "ForwardRef(" + o + ")" : "ForwardRef"), o;
          case ne:
            return N = o.displayName || null, N !== null ? N : r(o.type) || "Memo";
          case y:
            N = o._payload, o = o._init;
            try {
              return r(o(N));
            } catch {
            }
        }
      return null;
    }
    function s(o) {
      return "" + o;
    }
    function t(o) {
      try {
        s(o);
        var N = !1;
      } catch {
        N = !0;
      }
      if (N) {
        N = console;
        var _ = N.error, W = typeof Symbol == "function" && Symbol.toStringTag && o[Symbol.toStringTag] || o.constructor.name || "Object";
        return _.call(
          N,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          W
        ), s(o);
      }
    }
    function l(o) {
      if (o === j) return "<>";
      if (typeof o == "object" && o !== null && o.$$typeof === y)
        return "<...>";
      try {
        var N = r(o);
        return N ? "<" + N + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function f() {
      var o = ee.A;
      return o === null ? null : o.getOwner();
    }
    function g() {
      return Error("react-stack-top-frame");
    }
    function h(o) {
      if ($.call(o, "key")) {
        var N = Object.getOwnPropertyDescriptor(o, "key").get;
        if (N && N.isReactWarning) return !1;
      }
      return o.key !== void 0;
    }
    function d(o, N) {
      function _() {
        S || (S = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          N
        ));
      }
      _.isReactWarning = !0, Object.defineProperty(o, "key", {
        get: _,
        configurable: !0
      });
    }
    function v() {
      var o = r(this.type);
      return b[o] || (b[o] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), o = this.props.ref, o !== void 0 ? o : null;
    }
    function M(o, N, _, W, xe, le) {
      var i = _.ref;
      return o = {
        $$typeof: J,
        type: o,
        key: N,
        props: _,
        _owner: W
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(o, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(o, "ref", { enumerable: !1, value: null }), o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(o, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(o, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: xe
      }), Object.defineProperty(o, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: le
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    }
    function A(o, N, _, W, xe, le) {
      var i = N.children;
      if (i !== void 0)
        if (W)
          if (ae(i)) {
            for (W = 0; W < i.length; W++)
              V(i[W]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else V(i);
      if ($.call(N, "key")) {
        i = r(o);
        var Y = Object.keys(N).filter(function(p) {
          return p !== "key";
        });
        W = 0 < Y.length ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}", G[i + W] || (Y = 0 < Y.length ? "{" + Y.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          W,
          i,
          Y,
          i
        ), G[i + W] = !0);
      }
      if (i = null, _ !== void 0 && (t(_), i = "" + _), h(N) && (t(N.key), i = "" + N.key), "key" in N) {
        _ = {};
        for (var a in N)
          a !== "key" && (_[a] = N[a]);
      } else _ = N;
      return i && d(
        _,
        typeof o == "function" ? o.displayName || o.name || "Unknown" : o
      ), M(
        o,
        i,
        _,
        f(),
        xe,
        le
      );
    }
    function V(o) {
      se(o) ? o._store && (o._store.validated = 1) : typeof o == "object" && o !== null && o.$$typeof === y && (o._payload.status === "fulfilled" ? se(o._payload.value) && o._payload.value._store && (o._payload.value._store.validated = 1) : o._store && (o._store.validated = 1));
    }
    function se(o) {
      return typeof o == "object" && o !== null && o.$$typeof === J;
    }
    var z = tt, J = Symbol.for("react.transitional.element"), F = Symbol.for("react.portal"), j = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), ie = Symbol.for("react.profiler"), H = Symbol.for("react.consumer"), D = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), he = Symbol.for("react.suspense_list"), ne = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), ce = Symbol.for("react.client.reference"), ee = z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = Object.prototype.hasOwnProperty, ae = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    z = {
      react_stack_bottom_frame: function(o) {
        return o();
      }
    };
    var S, b = {}, O = z.react_stack_bottom_frame.bind(
      z,
      g
    )(), K = k(l(g)), G = {};
    we.Fragment = j, we.jsx = function(o, N, _) {
      var W = 1e4 > ee.recentlyCreatedOwnerStacks++;
      return A(
        o,
        N,
        _,
        !1,
        W ? Error("react-stack-top-frame") : O,
        W ? k(l(o)) : K
      );
    }, we.jsxs = function(o, N, _) {
      var W = 1e4 > ee.recentlyCreatedOwnerStacks++;
      return A(
        o,
        N,
        _,
        !0,
        W ? Error("react-stack-top-frame") : O,
        W ? k(l(o)) : K
      );
    };
  })()), we;
}
var We;
function mt() {
  return We || (We = 1, process.env.NODE_ENV === "production" ? je.exports = ft() : je.exports = pt()), je.exports;
}
var e = mt();
const yt = ({
  imageSrc: r,
  annotations: s,
  onAddAnnotation: t,
  onUpdateAnnotation: l,
  onDeleteAnnotation: f,
  selectedId: g,
  onSelectId: h,
  activeTool: d,
  selectedColor: v,
  selectedStrokeWidth: M,
  zoom: A,
  onUploadImage: V,
  onLoadSample: se
}) => {
  var L, de, ye, $e, Ye;
  const z = oe(null), J = oe(null), [F, j] = R(null);
  ge(() => {
    if (!r) {
      j(null);
      return;
    }
    const n = new Image();
    n.src = r, n.onload = () => {
      j({
        width: n.naturalWidth,
        height: n.naturalHeight
      });
    };
  }, [r]);
  const [E, ie] = R({ width: 800, height: 600 }), [H, D] = R(!1), [P, Q] = R(null), [he, ne] = R([]), [y, Z] = R(null), [ce, ee] = R("none"), [$, ae] = R(null), [k, S] = R(null), [b, O] = R(null), [K, G] = R(""), [o, N] = R(null), _ = oe(null), W = oe(!1);
  ge(() => {
    if (!z.current) return;
    const n = z.current, c = () => {
      ie({
        width: Math.max(100, n.clientWidth - 48),
        // pad sides
        height: Math.max(100, n.clientHeight - 136)
        // pad top (24px) + bottom (112px) to clear toolbar
      });
    };
    c();
    const x = new ResizeObserver(() => {
      c();
    });
    return x.observe(n), () => x.disconnect();
  }, []);
  const xe = (n) => {
    const c = n.currentTarget;
    j({
      width: c.naturalWidth,
      height: c.naturalHeight
    });
  }, le = Re(() => {
    if (!F) return { width: 0, height: 0 };
    const n = F.width / F.height;
    let c = E.width, x = E.width / n;
    x > E.height && (x = E.height, c = E.height * n);
    const m = A / 100;
    return {
      width: c * m,
      height: x * m
    };
  }, [F, E, A]), i = Re(() => !F || le.width === 0 ? 1 : le.width / F.width, [F, le]), Y = (n) => {
    const c = n.currentTarget.getBoundingClientRect(), x = n.clientX - c.left, m = n.clientY - c.top;
    return {
      x: x / i,
      y: m / i
    };
  };
  ge(() => {
    if (b && _.current) {
      const n = setTimeout(() => {
        _.current && (_.current.focus(), _.current.select());
      }, 50);
      return () => clearTimeout(n);
    }
  }, [b]);
  const a = () => {
    if (!b) return;
    const n = K.trim();
    if (b === "new_temp_text") {
      if (n !== "") {
        const c = `ann_${Date.now()}`, x = {
          id: c,
          type: "text",
          color: v,
          strokeWidth: M,
          text: n,
          x: (o == null ? void 0 : o.x) ?? 0,
          y: (o == null ? void 0 : o.y) ?? 0,
          fontSize: 18 / i
          // target visual font size: 18px on screen
        };
        t(x), h(c);
      }
      N(null);
    } else {
      const c = s.find((x) => x.id === b);
      c && c.type === "text" && (n === "" ? f(b) : l({
        ...c,
        text: n
      }));
    }
    O(null);
  }, p = () => {
    W.current || a();
  }, w = (n) => {
    n.nativeEvent.isComposing || W.current || n.keyCode === 229 || n.key === "Escape" && a();
  }, T = (n) => {
    for (let c = s.length - 1; c >= 0; c--) {
      const x = s[c];
      let m = !1;
      if (x.type === "rectangle") {
        const u = 10 / i, C = x.x, X = x.x + x.width, te = x.y, ue = x.y + x.height;
        n.x >= C - u && n.x <= X + u && n.y >= te - u && n.y <= ue + u && (m = !0);
      } else if (x.type === "marker")
        Math.hypot(n.x - x.x, n.y - x.y) <= x.size * 2 && (m = !0);
      else if (x.type === "text") {
        const u = x.text.split(`
`), X = u.reduce((ue, re) => Math.max(ue, re.length), 0) * x.fontSize * 0.7 + 12 / i, te = u.length * x.fontSize * 1.35 + 12 / i;
        n.x >= x.x - 6 / i && n.x <= x.x + X && n.y >= x.y - 6 / i && n.y <= x.y + te && (m = !0);
      } else x.type === "arrow" ? I(n, { x: x.startX, y: x.startY }, { x: x.endX, y: x.endY }) <= 16 / i && (m = !0) : x.type === "brush" && (m = x.points.some((u) => Math.hypot(n.x - u.x, n.y - u.y) <= 16 / i));
      if (m) {
        f(x.id);
        break;
      }
    }
  }, B = (n) => {
    if (!r || !F) return;
    if (b) {
      a();
      return;
    }
    const c = Y(n);
    if (d === "text") {
      const m = s.find((u) => {
        if (u.type !== "text") return !1;
        const C = u.text.split(`
`), te = C.reduce((pe, Se) => Math.max(pe, Se.length), 0) * u.fontSize * 0.7, ue = C.length * u.fontSize * 1.35, re = 8 / i;
        return c.x >= u.x - re && c.x <= u.x + te + re && c.y >= u.y - re && c.y <= u.y + ue + re;
      });
      if (m) {
        O(m.id), G(m.text), h(m.id);
        return;
      }
    }
    if (d === "eraser") {
      D(!0), T(c);
      return;
    }
    if (d === "select") {
      if (g) {
        const m = s.find((u) => u.id === g);
        if (m) {
          if (m.type === "rectangle") {
            const u = m.x + m.width, C = m.y + m.height;
            if (Math.hypot(c.x - u, c.y - C) * i < 10) {
              ee("resize-br"), ae(c), S(m);
              return;
            }
          }
          if (m.type === "arrow") {
            const u = Math.hypot(c.x - m.startX, c.y - m.startY) * i, C = Math.hypot(c.x - m.endX, c.y - m.endY) * i;
            if (u < 10) {
              ee("arrow-start"), ae(c), S(m);
              return;
            }
            if (C < 10) {
              ee("arrow-end"), ae(c), S(m);
              return;
            }
          }
        }
      }
      for (let m = s.length - 1; m >= 0; m--) {
        const u = s[m];
        let C = !1;
        if (u.type === "rectangle") {
          const X = 8 / i, te = u.x, ue = u.x + u.width, re = u.y, pe = u.y + u.height;
          c.x >= te - X && c.x <= ue + X && c.y >= re - X && c.y <= pe + X && (C = !0);
        } else if (u.type === "marker")
          Math.hypot(c.x - u.x, c.y - u.y) <= u.size * 1.5 && (C = !0);
        else if (u.type === "text") {
          const X = u.text.length * u.fontSize * 0.65, te = u.fontSize * 1.3;
          c.x >= u.x && c.x <= u.x + X && c.y >= u.y && c.y <= u.y + te && (C = !0);
        } else u.type === "arrow" ? I(c, { x: u.startX, y: u.startY }, { x: u.endX, y: u.endY }) <= 12 / i && (C = !0) : u.type === "brush" && (C = u.points.some((X) => Math.hypot(c.x - X.x, c.y - X.y) <= 12 / i));
        if (C) {
          h(u.id), ee("move"), ae(c), S(u);
          return;
        }
      }
      h(null);
      return;
    }
    D(!0), Q(c);
    const x = `ann_${Date.now()}`;
    switch (d) {
      case "rectangle": {
        const m = {
          id: x,
          type: "rectangle",
          color: v,
          strokeWidth: M,
          x: c.x,
          y: c.y,
          width: 0,
          height: 0
        };
        Z(m);
        break;
      }
      case "brush": {
        const m = {
          id: x,
          type: "brush",
          color: v,
          strokeWidth: M,
          points: [c]
        };
        ne([c]), Z(m);
        break;
      }
      case "arrow": {
        const m = {
          id: x,
          type: "arrow",
          color: v,
          strokeWidth: M,
          startX: c.x,
          startY: c.y,
          endX: c.x,
          endY: c.y
        };
        Z(m);
        break;
      }
      case "marker": {
        const m = s.filter((X) => X.type === "marker"), u = m.length > 0 ? Math.max(...m.map((X) => X.number)) + 1 : 1, C = {
          id: x,
          type: "marker",
          color: v,
          strokeWidth: M,
          number: u,
          x: c.x,
          y: c.y,
          size: 16 / i
          // target visual size: 16px on screen
        };
        t(C), D(!1);
        break;
      }
      case "text": {
        n.preventDefault(), N(c), O("new_temp_text"), G(""), D(!1);
        break;
      }
    }
  }, me = (n) => {
    if (!r || !F) return;
    const c = Y(n);
    if (d === "eraser") {
      H && T(c);
      return;
    }
    if (d === "select" && $ && k) {
      const x = c.x - $.x, m = c.y - $.y;
      switch (ce) {
        case "move": {
          k.type === "rectangle" ? l({
            ...k,
            x: k.x + x,
            y: k.y + m
          }) : k.type === "arrow" ? l({
            ...k,
            startX: k.startX + x,
            startY: k.startY + m,
            endX: k.endX + x,
            endY: k.endY + m
          }) : k.type === "marker" ? l({
            ...k,
            x: k.x + x,
            y: k.y + m
          }) : k.type === "text" ? l({
            ...k,
            x: k.x + x,
            y: k.y + m
          }) : k.type === "brush" && l({
            ...k,
            points: k.points.map((u) => ({
              x: u.x + x,
              y: u.y + m
            }))
          });
          break;
        }
        case "resize-br": {
          if (k.type === "rectangle") {
            const u = Math.max(5 / i, k.width + x), C = Math.max(5 / i, k.height + m);
            l({
              ...k,
              width: u,
              height: C
            });
          }
          break;
        }
        case "arrow-start": {
          k.type === "arrow" && l({
            ...k,
            startX: k.startX + x,
            startY: k.startY + m
          });
          break;
        }
        case "arrow-end": {
          k.type === "arrow" && l({
            ...k,
            endX: k.endX + x,
            endY: k.endY + m
          });
          break;
        }
      }
      return;
    }
    if (!(!H || !P || !y))
      switch (d) {
        case "rectangle": {
          const x = Math.min(P.x, c.x), m = Math.min(P.y, c.y), u = Math.abs(c.x - P.x), C = Math.abs(c.y - P.y);
          Z({
            ...y,
            type: "rectangle",
            x,
            y: m,
            width: u,
            height: C
          });
          break;
        }
        case "brush": {
          const x = [...he, c];
          ne(x), Z({
            ...y,
            type: "brush",
            points: x
          });
          break;
        }
        case "arrow": {
          Z({
            ...y,
            type: "arrow",
            startX: P.x,
            startY: P.y,
            endX: c.x,
            endY: c.y
          });
          break;
        }
      }
  }, fe = () => {
    if (d === "eraser") {
      D(!1);
      return;
    }
    if (d === "select") {
      ee("none"), ae(null), S(null);
      return;
    }
    if (H) {
      if (D(!1), y) {
        let n = !0;
        y.type === "rectangle" ? y.width < 5 / i && y.height < 5 / i && (n = !1) : y.type === "arrow" ? Math.hypot(
          y.endX - y.startX,
          y.endY - y.startY
        ) < 5 / i && (n = !1) : y.type === "brush" && y.points.length < 2 && (n = !1), n && (t(y), h(y.id));
      }
      Z(null), Q(null), ne([]);
    }
  };
  function I(n, c, x) {
    const m = Math.hypot(c.x - x.x, c.y - x.y) ** 2;
    if (m === 0) return Math.hypot(n.x - c.x, n.y - c.y);
    let u = ((n.x - c.x) * (x.x - c.x) + (n.y - c.y) * (x.y - c.y)) / m;
    return u = Math.max(0, Math.min(1, u)), Math.hypot(n.x - (c.x + u * (x.x - c.x)), n.y - (c.y + u * (x.y - c.y)));
  }
  return /* @__PURE__ */ e.jsx(
    "div",
    {
      ref: z,
      className: "flex-1 h-full flex items-center justify-center pt-6 px-6 pb-28 bg-slate-100 overflow-auto relative",
      children: r && F ? /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: "relative shadow-lg border border-gray-200 rounded-xl select-none bg-white",
          style: {
            width: `${le.width}px`,
            height: `${le.height}px`,
            transition: H || ce !== "none" ? "none" : "width 0.2s, height 0.2s"
          },
          children: [
            /* @__PURE__ */ e.jsx(
              "img",
              {
                ref: J,
                src: r,
                alt: "Annotated",
                className: "absolute inset-0 w-full h-full object-fill rounded-xl pointer-events-none",
                onLoad: xe
              }
            ),
            /* @__PURE__ */ e.jsxs(
              "svg",
              {
                id: "editor-canvas-svg",
                className: "absolute inset-0 w-full h-full rounded-xl z-10 overflow-visible",
                style: {
                  cursor: d === "select" ? "default" : d === "text" ? "text" : d === "eraser" ? "pointer" : "crosshair"
                },
                onMouseDown: B,
                onMouseMove: me,
                onMouseUp: fe,
                children: [
                  s.map((n) => {
                    if (b === n.id) return null;
                    const c = g === n.id;
                    switch (n.type) {
                      case "rectangle":
                        return /* @__PURE__ */ e.jsxs("g", { children: [
                          /* @__PURE__ */ e.jsx(
                            "rect",
                            {
                              id: `rect-${n.id}`,
                              x: n.x * i,
                              y: n.y * i,
                              width: n.width * i,
                              height: n.height * i,
                              stroke: n.color,
                              strokeWidth: n.strokeWidth,
                              fill: "transparent",
                              className: "transition-all"
                            }
                          ),
                          c && d === "select" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                            /* @__PURE__ */ e.jsx(
                              "rect",
                              {
                                x: n.x * i - 2,
                                y: n.y * i - 2,
                                width: n.width * i + 4,
                                height: n.height * i + 4,
                                stroke: "#818CF8",
                                strokeWidth: 1,
                                strokeDasharray: "4 4",
                                fill: "transparent"
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "circle",
                              {
                                cx: (n.x + n.width) * i,
                                cy: (n.y + n.height) * i,
                                r: 6,
                                fill: "#FFFFFF",
                                stroke: "#4F46E5",
                                strokeWidth: 2,
                                style: { cursor: "se-resize" }
                              }
                            )
                          ] })
                        ] }, n.id);
                      case "brush": {
                        if (n.points.length < 2) return null;
                        const x = n.points.map((m, u) => `${u === 0 ? "M" : "L"} ${m.x * i} ${m.y * i}`).join(" ");
                        return /* @__PURE__ */ e.jsxs("g", { children: [
                          /* @__PURE__ */ e.jsx(
                            "path",
                            {
                              id: `brush-${n.id}`,
                              d: x,
                              stroke: n.color,
                              strokeWidth: n.strokeWidth,
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }
                          ),
                          c && d === "select" && /* @__PURE__ */ e.jsx(
                            "path",
                            {
                              d: x,
                              stroke: "#818CF8",
                              strokeWidth: n.strokeWidth + 4,
                              fill: "none",
                              strokeOpacity: 0.3,
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }
                          )
                        ] }, n.id);
                      }
                      case "arrow": {
                        const x = n.startX * i, m = n.startY * i, u = n.endX * i, C = n.endY * i, X = Math.atan2(C - m, u - x), te = Math.max(12, n.strokeWidth * 3), ue = u - te * Math.cos(X - Math.PI / 6), re = C - te * Math.sin(X - Math.PI / 6), pe = u - te * Math.cos(X + Math.PI / 6), Se = C - te * Math.sin(X + Math.PI / 6);
                        return /* @__PURE__ */ e.jsxs("g", { children: [
                          /* @__PURE__ */ e.jsx(
                            "line",
                            {
                              id: `arrow-shaft-${n.id}`,
                              x1: x,
                              y1: m,
                              x2: u,
                              y2: C,
                              stroke: n.color,
                              strokeWidth: n.strokeWidth,
                              strokeLinecap: "round"
                            }
                          ),
                          /* @__PURE__ */ e.jsx(
                            "polygon",
                            {
                              id: `arrow-tip-${n.id}`,
                              points: `${u},${C} ${ue},${re} ${pe},${Se}`,
                              fill: n.color
                            }
                          ),
                          c && d === "select" && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                            /* @__PURE__ */ e.jsx(
                              "line",
                              {
                                x1: x,
                                y1: m,
                                x2: u,
                                y2: C,
                                stroke: "#818CF8",
                                strokeWidth: n.strokeWidth + 6,
                                strokeOpacity: 0.15,
                                strokeLinecap: "round"
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "circle",
                              {
                                cx: x,
                                cy: m,
                                r: 6,
                                fill: "#FFFFFF",
                                stroke: "#4F46E5",
                                strokeWidth: 2,
                                style: { cursor: "move" }
                              }
                            ),
                            /* @__PURE__ */ e.jsx(
                              "circle",
                              {
                                cx: u,
                                cy: C,
                                r: 6,
                                fill: "#FFFFFF",
                                stroke: "#4F46E5",
                                strokeWidth: 2,
                                style: { cursor: "move" }
                              }
                            )
                          ] })
                        ] }, n.id);
                      }
                      case "marker": {
                        const x = n.x * i, m = n.y * i, u = n.size * i;
                        return /* @__PURE__ */ e.jsxs("g", { id: `marker-${n.id}`, children: [
                          c && d === "select" && /* @__PURE__ */ e.jsx(
                            "circle",
                            {
                              cx: x,
                              cy: m,
                              r: u + 6,
                              fill: "transparent",
                              stroke: "#818CF8",
                              strokeWidth: 1.5,
                              strokeDasharray: "3 3"
                            }
                          ),
                          /* @__PURE__ */ e.jsx("circle", { cx: x, cy: m, r: u, fill: n.color, stroke: "#FFFFFF", strokeWidth: 2 }),
                          /* @__PURE__ */ e.jsx(
                            "text",
                            {
                              x,
                              y: m,
                              fill: "#FFFFFF",
                              fontSize: `${u * 1.05}px`,
                              fontWeight: "bold",
                              textAnchor: "middle",
                              dominantBaseline: "central",
                              fontFamily: "sans-serif",
                              children: n.number
                            }
                          )
                        ] }, n.id);
                      }
                      case "text": {
                        const x = n.x * i, m = n.y * i, u = n.fontSize * i, C = n.text.split(`
`), te = C.reduce((re, pe) => Math.max(re, pe.length), 0) * u * 0.7 + 16, ue = C.length * u * 1.35 + 16;
                        return /* @__PURE__ */ e.jsxs(
                          "g",
                          {
                            id: `text-${n.id}`,
                            onDoubleClick: (re) => {
                              re.stopPropagation(), re.preventDefault(), O(n.id), G(n.text);
                            },
                            style: { cursor: d === "select" ? "pointer" : d === "text" ? "text" : "crosshair" },
                            children: [
                              /* @__PURE__ */ e.jsx(
                                "rect",
                                {
                                  x: x - 8,
                                  y: m - 8,
                                  width: te,
                                  height: ue,
                                  fill: "transparent",
                                  pointerEvents: "all"
                                }
                              ),
                              c && d === "select" && /* @__PURE__ */ e.jsx(
                                "rect",
                                {
                                  x: x - 4,
                                  y: m - 4,
                                  width: te - 8,
                                  height: ue - 8,
                                  fill: "transparent",
                                  stroke: "#818CF8",
                                  strokeWidth: 1,
                                  strokeDasharray: "3 3",
                                  pointerEvents: "none"
                                }
                              ),
                              /* @__PURE__ */ e.jsx(
                                "text",
                                {
                                  x,
                                  y: m,
                                  fill: n.color,
                                  fontSize: `${u}px`,
                                  fontWeight: "500",
                                  fontFamily: "sans-serif",
                                  dominantBaseline: "hanging",
                                  pointerEvents: "none",
                                  children: C.map((re, pe) => /* @__PURE__ */ e.jsx("tspan", { x, dy: pe === 0 ? 0 : `${u * 1.25}px`, children: re }, pe))
                                }
                              )
                            ]
                          },
                          n.id
                        );
                      }
                      default:
                        return null;
                    }
                  }),
                  y && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                    y.type === "rectangle" && /* @__PURE__ */ e.jsx(
                      "rect",
                      {
                        x: y.x * i,
                        y: y.y * i,
                        width: y.width * i,
                        height: y.height * i,
                        stroke: y.color,
                        strokeWidth: y.strokeWidth,
                        fill: "transparent"
                      }
                    ),
                    y.type === "brush" && y.points.length >= 2 && /* @__PURE__ */ e.jsx(
                      "path",
                      {
                        d: y.points.map((n, c) => `${c === 0 ? "M" : "L"} ${n.x * i} ${n.y * i}`).join(" "),
                        stroke: y.color,
                        strokeWidth: y.strokeWidth,
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }
                    ),
                    y.type === "arrow" && /* @__PURE__ */ e.jsxs("g", { children: [
                      /* @__PURE__ */ e.jsx(
                        "line",
                        {
                          x1: y.startX * i,
                          y1: y.startY * i,
                          x2: y.endX * i,
                          y2: y.endY * i,
                          stroke: y.color,
                          strokeWidth: y.strokeWidth
                        }
                      ),
                      /* @__PURE__ */ e.jsx(
                        "circle",
                        {
                          cx: y.endX * i,
                          cy: y.endY * i,
                          r: 4,
                          fill: y.color
                        }
                      )
                    ] })
                  ] })
                ]
              }
            ),
            b && /* @__PURE__ */ e.jsxs(
              "div",
              {
                className: "absolute z-40 overflow-visible animate-in zoom-in-95 duration-100 select-text",
                onMouseDown: (n) => n.stopPropagation(),
                onMouseUp: (n) => n.stopPropagation(),
                onTouchStart: (n) => n.stopPropagation(),
                style: {
                  left: `${(b === "new_temp_text" ? (o == null ? void 0 : o.x) ?? 0 : ((L = s.find(
                    (n) => n.id === b && n.type === "text"
                  )) == null ? void 0 : L.x) ?? 0) * i}px`,
                  top: `${(b === "new_temp_text" ? (o == null ? void 0 : o.y) ?? 0 : ((de = s.find(
                    (n) => n.id === b && n.type === "text"
                  )) == null ? void 0 : de.y) ?? 0) * i}px`
                },
                children: [
                  /* @__PURE__ */ e.jsx(
                    "textarea",
                    {
                      ref: _,
                      value: K,
                      onChange: (n) => G(n.target.value),
                      onBlur: p,
                      onKeyDown: w,
                      onCompositionStart: () => {
                        W.current = !0;
                      },
                      onCompositionEnd: () => {
                        W.current = !1;
                      },
                      placeholder: "输入标注文字...",
                      className: "bg-transparent border-0 focus:border-0 focus:ring-0 p-0 shadow-none font-semibold outline-none resize-none overflow-hidden max-w-md block select-text leading-tight",
                      style: {
                        fontSize: `${(b === "new_temp_text" ? 18 : ((ye = s.find((n) => n.id === b)) == null ? void 0 : ye.fontSize) ?? 18) * i}px`,
                        color: b === "new_temp_text" ? v : (($e = s.find((n) => n.id === b)) == null ? void 0 : $e.color) ?? "#EF4444",
                        minWidth: "200px",
                        lineHeight: "1.25",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        padding: "0",
                        margin: "0",
                        caretColor: b === "new_temp_text" ? v : ((Ye = s.find((n) => n.id === b)) == null ? void 0 : Ye.color) ?? "#EF4444",
                        resize: "none",
                        userSelect: "text",
                        WebkitUserSelect: "text"
                      },
                      rows: K.split(`
`).length || 1
                    }
                  ),
                  /* @__PURE__ */ e.jsx("div", { className: "absolute top-full left-0 mt-1.5 bg-indigo-600 text-[10px] text-white px-2 py-0.5 rounded-md font-semibold tracking-wide pointer-events-none whitespace-nowrap shadow-md", children: "点击空白处自动保存" })
                ]
              }
            )
          ]
        }
      ) : (
        /* Empty Upload State Landing View - High fidelity clean theme */
        /* @__PURE__ */ e.jsxs("div", { className: "w-full max-w-2xl bg-white border border-gray-200 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-8 shadow-xl relative overflow-hidden group", children: [
          /* @__PURE__ */ e.jsx("div", { className: "absolute -top-24 -left-24 w-48 h-48 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" }),
          /* @__PURE__ */ e.jsx("div", { className: "absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-violet-500/5 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" }),
          /* @__PURE__ */ e.jsx("div", { className: "w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-gray-150 shadow-inner text-indigo-500 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ e.jsx(st, { size: 30, className: "stroke-1.5" }) }),
          /* @__PURE__ */ e.jsxs("div", { className: "space-y-2.5 max-w-md", children: [
            /* @__PURE__ */ e.jsxs("h2", { className: "text-xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ e.jsx("span", { children: "智能改图" }),
              /* @__PURE__ */ e.jsxs("span", { className: "inline-flex items-center gap-1 bg-indigo-550/10 text-indigo-600 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold border border-indigo-100", children: [
                /* @__PURE__ */ e.jsx(Oe, { size: 10 }),
                /* @__PURE__ */ e.jsx("span", { children: "V1.0" })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("p", { className: "text-slate-500 text-sm leading-relaxed", children: "打开并在线标注图片：框选区域、自由手绘、添加箭头、编号徽章和文字。不涉及 AI，纯客户端离线安全编辑。" })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "flex flex-col sm:flex-row items-center gap-3 w-full justify-center", children: /* @__PURE__ */ e.jsxs(
            "button",
            {
              id: "btn-upload-landing",
              type: "button",
              onClick: () => {
                const n = document.querySelector('input[type="file"]');
                n == null || n.click();
              },
              className: "w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm shadow-md shadow-indigo-600/15 hover:shadow-indigo-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-1.5",
              children: [
                /* @__PURE__ */ e.jsx(Le, { size: 15 }),
                /* @__PURE__ */ e.jsx("span", { children: "选择本地图片" })
              ]
            }
          ) })
        ] })
      )
    }
  );
};
function ve(r) {
  return {
    past: [],
    present: r,
    future: []
  };
}
function Me(r, s) {
  return JSON.stringify(r.present) === JSON.stringify(s) ? r : {
    past: [...r.past, r.present],
    present: s,
    future: []
    // clear redo branch on action
  };
}
function gt(r) {
  if (r.past.length === 0) return r;
  const s = r.past[r.past.length - 1];
  return {
    past: r.past.slice(0, r.past.length - 1),
    present: s,
    future: [r.present, ...r.future]
  };
}
function bt(r) {
  if (r.future.length === 0) return r;
  const s = r.future[0], t = r.future.slice(1);
  return {
    past: [...r.past, r.present],
    present: s,
    future: t
  };
}
async function wt(r, s) {
  return new Promise((t, l) => {
    const f = new Image();
    f.crossOrigin = "anonymous", f.src = r, f.onload = () => {
      const g = document.createElement("canvas");
      g.width = f.naturalWidth, g.height = f.naturalHeight;
      const h = g.getContext("2d");
      if (!h) {
        l(new Error("Could not get 2D context"));
        return;
      }
      h.drawImage(f, 0, 0), h.textBaseline = "middle", h.textAlign = "center", s.forEach((d) => {
        h.strokeStyle = d.color, h.fillStyle = d.color;
        const v = Math.max(f.naturalWidth, f.naturalHeight) / 1e3;
        switch (h.lineWidth = d.strokeWidth * Math.max(1, v), h.lineCap = "round", h.lineJoin = "round", d.type) {
          case "rectangle": {
            h.beginPath(), h.rect(d.x, d.y, d.width, d.height), h.stroke();
            break;
          }
          case "brush": {
            if (d.points.length < 2) return;
            h.beginPath(), h.moveTo(d.points[0].x, d.points[0].y);
            for (let M = 1; M < d.points.length; M++)
              h.lineTo(d.points[M].x, d.points[M].y);
            h.stroke();
            break;
          }
          case "arrow": {
            h.beginPath(), h.moveTo(d.startX, d.startY), h.lineTo(d.endX, d.endY), h.stroke();
            const M = Math.atan2(d.endY - d.startY, d.endX - d.startX), A = Math.max(12, d.strokeWidth * 4 * Math.max(1, v));
            h.save(), h.translate(d.endX, d.endY), h.rotate(M), h.fillStyle = d.color, h.beginPath(), h.moveTo(0, 0), h.lineTo(-A, -A * 0.5), h.lineTo(-A, A * 0.5), h.closePath(), h.fill(), h.restore();
            break;
          }
          case "marker": {
            const M = d.size * Math.max(1, v);
            h.beginPath(), h.arc(d.x, d.y, M, 0, 2 * Math.PI), h.fillStyle = d.color, h.fill(), h.lineWidth = Math.max(2, M * 0.15), h.strokeStyle = "#ffffff", h.stroke(), h.fillStyle = "#ffffff", h.font = `bold ${M * 1.1}px sans-serif`, h.fillText(String(d.number), d.x, d.y);
            break;
          }
          case "text": {
            h.save();
            const M = d.fontSize * Math.max(1, v);
            h.font = `${M}px sans-serif`, h.fillStyle = d.color, h.textAlign = "left", h.textBaseline = "top";
            const A = d.text.split(`
`);
            let V = d.y;
            A.forEach((se) => {
              h.fillText(se, d.x, V), V += M * 1.2;
            }), h.restore();
            break;
          }
        }
      }), t(g.toDataURL("image/png"));
    }, f.onerror = () => {
      l(new Error("Failed to load image for export"));
    };
  });
}
function Ht(r, s) {
  const t = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(r, null, 2)
  )}`, l = document.createElement("a");
  l.setAttribute("href", t), l.setAttribute("download", s), document.body.appendChild(l), l.click(), l.remove();
}
function kt(r, s) {
  const t = document.createElement("a");
  t.setAttribute("href", r), t.setAttribute("download", s), document.body.appendChild(t), t.click(), t.remove();
}
const Ie = [
  { name: "红色", value: "#EF4444" },
  // Red 500
  { name: "蓝色", value: "#3B82F6" },
  // Blue 500
  { name: "黄色", value: "#F59E0B" },
  // Amber 500
  { name: "绿色", value: "#10B981" },
  // Emerald 500
  { name: "紫色", value: "#8B5CF6" },
  // Purple 500
  { name: "黑色", value: "#1F2937" },
  // Gray 800
  { name: "白色", value: "#FFFFFF" }
  // White
], Pe = [
  { label: "细", value: 2 },
  { label: "中", value: 4 },
  { label: "粗", value: 8 },
  { label: "极粗", value: 12 }
], Bt = ({
  initialImageSrc: r = null,
  initialFileName: s = "",
  onSave: t,
  onCancel: l,
  className: f = ""
}) => {
  var xe, le;
  const [g, h] = R(r), [d, v] = R(s), [M, A] = R("select"), [V, se] = R("#EF4444"), [z, J] = R(4), [F, j] = R(100), [E, ie] = R(!1), [H, D] = R(null), [P, Q] = R(
    () => ve([])
  ), [he, ne] = R(!1), [y, Z] = R(!1), ce = oe(null), ee = (i) => {
    const Y = new FileReader();
    Y.onload = (a) => {
      var p;
      (p = a.target) != null && p.result && (h(a.target.result), v(i.name), Q(ve([])), D(null), A("rectangle"));
    }, Y.readAsDataURL(i);
  }, $ = (i, Y) => {
    h(i), v(Y), Q(ve([])), D(null), A("rectangle");
  }, ae = (i) => {
    const Y = [...P.present, i];
    Q(Me(P, Y));
  }, k = (i) => {
    const Y = P.present.map(
      (a) => a.id === i.id ? i : a
    );
    Q(Me(P, Y));
  }, S = (i) => {
    const Y = P.present.filter((a) => a.id !== i);
    Q(Me(P, Y)), H === i && D(null);
  }, b = () => {
    const i = gt(P);
    Q(i), D(null);
  }, O = () => {
    const i = bt(P);
    Q(i), D(null);
  }, K = () => {
    j((i) => Math.min(250, i + 25));
  }, G = () => {
    j((i) => Math.max(50, i - 25));
  }, o = async () => {
    if (g)
      try {
        const i = await wt(g, P.present), Y = d.substring(0, d.lastIndexOf(".")) || d;
        kt(i, `annotated_${Y}.png`), t == null || t(i, P.present), ne(!1);
      } catch (i) {
        console.error(i), alert("无法渲染并保存带标注的图片。");
      }
  }, N = () => {
    h(null), v(""), Q(ve([])), D(null), j(100);
  }, _ = () => {
    var i;
    (i = ce.current) == null || i.click();
  }, W = (i) => {
    i.target.files && i.target.files[0] && ee(i.target.files[0]);
  };
  return /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col h-screen bg-slate-50 text-slate-800 font-sans select-none overflow-hidden", children: [
    /* @__PURE__ */ e.jsx(
      "input",
      {
        type: "file",
        ref: ce,
        onChange: W,
        accept: "image/png, image/jpeg, image/webp",
        className: "hidden"
      }
    ),
    /* @__PURE__ */ e.jsxs("div", { className: "flex flex-1 overflow-hidden relative", children: [
      y && /* @__PURE__ */ e.jsxs("div", { className: "absolute top-3 right-3 w-80 bg-white/95 border border-gray-200 rounded-xl shadow-xl p-4.5 z-40 text-slate-600 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between mb-2.5 border-b border-gray-100 pb-1.5", children: [
          /* @__PURE__ */ e.jsxs("span", { className: "font-bold text-slate-800 flex items-center gap-1.5 text-sm", children: [
            /* @__PURE__ */ e.jsx(Oe, { size: 14, className: "text-indigo-500" }),
            "使用帮助 / 快捷指南"
          ] }),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => Z(!1),
              className: "text-slate-400 hover:text-slate-600",
              children: /* @__PURE__ */ e.jsx(Ce, { size: 15 })
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("ul", { className: "space-y-2 text-[11px] leading-relaxed", children: [
          /* @__PURE__ */ e.jsxs("li", { children: [
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-800 font-semibold", children: "选择模式：" }),
            "拖动标注以移动位置，拖动右下角控制点可缩放矩形框大小，亦可调整箭头起止点。"
          ] }),
          /* @__PURE__ */ e.jsxs("li", { children: [
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-800 font-semibold", children: "矩形标记：" }),
            "在图像上点击并拖拽，可以画出矩形高亮区域（标红）。"
          ] }),
          /* @__PURE__ */ e.jsxs("li", { children: [
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-800 font-semibold", children: "自由画笔：" }),
            "直接在图片上涂鸦，绘制任意曲线手写标注。"
          ] }),
          /* @__PURE__ */ e.jsxs("li", { children: [
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-800 font-semibold", children: "数字序号标牌：" }),
            "每次点击都会生成一个自动递增的圆形序号标签（①, ②, ③），方便按步骤索引。"
          ] }),
          /* @__PURE__ */ e.jsxs("li", { children: [
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-800 font-semibold", children: "文字备注：" }),
            "点击任意位置，在输入框中打字创建文字卡片，选择模式下双击可以重新编辑。"
          ] }),
          /* @__PURE__ */ e.jsxs("li", { children: [
            /* @__PURE__ */ e.jsx("strong", { className: "text-slate-800 font-semibold", children: "橡皮擦：" }),
            "选中橡皮擦，点击或在标注上拖动可以直接擦除已有标注。"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: "flex-1 flex flex-col h-full overflow-hidden relative", children: [
        /* @__PURE__ */ e.jsx(
          yt,
          {
            imageSrc: g,
            annotations: P.present,
            onAddAnnotation: ae,
            onUpdateAnnotation: k,
            onDeleteAnnotation: S,
            selectedId: H,
            onSelectId: D,
            activeTool: M,
            selectedColor: V,
            selectedStrokeWidth: z,
            zoom: F,
            onUploadImage: ee,
            onLoadSample: $
          }
        ),
        g && /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-none", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200/80 rounded-2xl p-1.5 flex items-center gap-1 pointer-events-auto", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-upload-toolbar",
                type: "button",
                onClick: _,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all cursor-pointer flex items-center justify-center",
                title: "上传图片",
                children: /* @__PURE__ */ e.jsx(Le, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-tool-select",
                type: "button",
                onClick: () => A("select"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${M === "select" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "选择与拖动 (V)",
                children: /* @__PURE__ */ e.jsx(it, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-tool-rectangle",
                type: "button",
                onClick: () => A("rectangle"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${M === "rectangle" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "矩形框标记 (R)",
                children: /* @__PURE__ */ e.jsx(Ue, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-tool-brush",
                type: "button",
                onClick: () => A("brush"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${M === "brush" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "自由画笔 (B)",
                children: /* @__PURE__ */ e.jsx(He, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-tool-arrow",
                type: "button",
                onClick: () => A("arrow"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${M === "arrow" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "指示箭头 (A)",
                children: /* @__PURE__ */ e.jsx(nt, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-tool-marker",
                type: "button",
                onClick: () => A("marker"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${M === "marker" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "数字序号标牌 (N)",
                children: /* @__PURE__ */ e.jsx(Be, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-tool-text",
                type: "button",
                onClick: () => A("text"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${M === "text" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "文字备注 (T)",
                children: /* @__PURE__ */ e.jsx(Ve, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-tool-eraser",
                type: "button",
                onClick: () => A("eraser"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${M === "eraser" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "橡皮擦 (E) - 点击或拖动擦除标注",
                children: /* @__PURE__ */ e.jsx(Je, { size: 16 })
              }
            ),
            /* @__PURE__ */ e.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  id: "btn-style-popover",
                  type: "button",
                  onClick: () => ie(!E),
                  className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${E ? "bg-slate-100 text-indigo-600" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                  title: "画笔颜色与粗细",
                  children: /* @__PURE__ */ e.jsx("div", { className: "relative flex items-center justify-center", children: /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      className: "w-4 h-4 rounded-full border border-slate-300 shadow-inner flex items-center justify-center",
                      style: { backgroundColor: V },
                      children: /* @__PURE__ */ e.jsx(
                        "div",
                        {
                          className: "rounded-full bg-white",
                          style: {
                            width: `${Math.max(2, Math.min(8, z * 0.7))}px`,
                            height: `${Math.max(2, Math.min(8, z * 0.7))}px`
                          }
                        }
                      )
                    }
                  ) })
                }
              ),
              E && /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => ie(!1)
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { className: "absolute bottom-full right-1/2 translate-x-1/2 mb-3.5 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 z-50 flex flex-col gap-3.5 min-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-100", children: [
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: "画笔颜色" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-medium text-slate-500", children: ((xe = Ie.find((i) => i.value === V)) == null ? void 0 : xe.name) || V })
                    ] }),
                    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-2", children: Ie.map((i) => {
                      const Y = V.toLowerCase() === i.value.toLowerCase();
                      return /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          id: `btn-popover-color-${i.name.toLowerCase()}`,
                          type: "button",
                          onClick: () => se(i.value),
                          className: `w-6 h-6 rounded-full border transition-all duration-150 relative flex items-center justify-center cursor-pointer ${Y ? "border-slate-800 scale-110 ring-2 ring-indigo-500/20" : "border-slate-200 hover:border-slate-400 hover:scale-105"}`,
                          style: { backgroundColor: i.value },
                          title: i.name,
                          children: Y && /* @__PURE__ */ e.jsx(
                            Ze,
                            {
                              size: 12,
                              className: i.value === "#FFFFFF" ? "text-slate-800" : "text-white"
                            }
                          )
                        },
                        i.value
                      );
                    }) })
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { className: "h-px bg-gray-100" }),
                  /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ e.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: "画笔粗细" }),
                      /* @__PURE__ */ e.jsx("span", { className: "text-[10px] font-medium text-slate-500", children: ((le = Pe.find((i) => i.value === z)) == null ? void 0 : le.label) || `${z}px` })
                    ] }),
                    /* @__PURE__ */ e.jsx("div", { className: "flex items-center gap-1 bg-slate-50 p-0.5 rounded-lg border border-slate-100", children: Pe.map((i) => {
                      const Y = z === i.value;
                      return /* @__PURE__ */ e.jsx(
                        "button",
                        {
                          id: `btn-popover-stroke-${i.value}`,
                          type: "button",
                          onClick: () => J(i.value),
                          className: `py-1 rounded-md text-[11px] font-semibold transition-all duration-150 cursor-pointer flex-1 text-center ${Y ? "bg-white text-slate-800 shadow-xs border border-slate-200/60" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"}`,
                          children: /* @__PURE__ */ e.jsxs("div", { className: "flex flex-col items-center justify-center gap-1", children: [
                            /* @__PURE__ */ e.jsx(
                              "div",
                              {
                                className: "rounded-full",
                                style: {
                                  width: `${Math.max(2, i.value * 0.7)}px`,
                                  height: `${Math.max(2, i.value * 0.7)}px`,
                                  backgroundColor: Y ? V : "#94A3B8"
                                }
                              }
                            ),
                            /* @__PURE__ */ e.jsx("span", { className: "text-[9px]", children: i.label })
                          ] })
                        },
                        i.value
                      );
                    }) })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-undo",
                type: "button",
                disabled: P.past.length === 0,
                onClick: b,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                title: "撤销 (Ctrl+Z)",
                children: /* @__PURE__ */ e.jsx(lt, { size: 15 })
              }
            ),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-redo",
                type: "button",
                disabled: P.future.length === 0,
                onClick: O,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                title: "重做 (Ctrl+Y)",
                children: /* @__PURE__ */ e.jsx(ot, { size: 15 })
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-download-png-direct",
                type: "button",
                onClick: o,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer flex items-center justify-center",
                title: "保存标注后的图片",
                children: /* @__PURE__ */ e.jsx(qe, { size: 15 })
              }
            ),
            /* @__PURE__ */ e.jsx("div", { className: "w-px h-5 bg-gray-200 mx-1" }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-reset-editor",
                type: "button",
                onClick: N,
                className: "p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer flex items-center justify-center",
                title: "关闭图片",
                children: /* @__PURE__ */ e.jsx(Ce, { size: 15 })
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { className: "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200/80 rounded-2xl px-3.5 py-1.5 flex items-center gap-2.5 pointer-events-auto", children: [
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-zoom-out",
                type: "button",
                onClick: G,
                disabled: F <= 50,
                className: "p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors",
                title: "缩小",
                children: /* @__PURE__ */ e.jsx(Ke, { size: 14 })
              }
            ),
            /* @__PURE__ */ e.jsxs("span", { className: "text-[11px] font-bold text-slate-700 min-w-[34px] text-center font-mono", children: [
              F,
              "%"
            ] }),
            /* @__PURE__ */ e.jsx(
              "button",
              {
                id: "btn-zoom-in",
                type: "button",
                onClick: K,
                disabled: F >= 250,
                className: "p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors",
                title: "放大",
                children: /* @__PURE__ */ e.jsx(Ge, { size: 14 })
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}, Te = 1;
function q(r) {
  return typeof r == "number" && Number.isFinite(r);
}
function jt(r) {
  if (!r || typeof r != "object") return !1;
  const s = r;
  return typeof s.id == "string" && typeof s.color == "string" && q(s.strokeWidth);
}
function vt(r) {
  if (!jt(r)) return !1;
  const s = r;
  switch (s.type) {
    case "rectangle":
      return q(s.x) && q(s.y) && q(s.width) && q(s.height);
    case "brush":
      return Array.isArray(s.points) && s.points.every((t) => !!t && typeof t == "object" && q(t.x) && q(t.y));
    case "arrow":
      return q(s.startX) && q(s.startY) && q(s.endX) && q(s.endY);
    case "marker":
      return q(s.number) && q(s.x) && q(s.y) && q(s.size);
    case "text":
      return typeof s.text == "string" && q(s.x) && q(s.y) && q(s.fontSize);
    default:
      return !1;
  }
}
function Vt(r) {
  if (!r || typeof r != "object") return !1;
  const s = r;
  return s.version === Te && q(s.width) && s.width > 0 && q(s.height) && s.height > 0 && Array.isArray(s.annotations) && s.annotations.every(vt);
}
function Nt(r, s, t) {
  const l = Math.sqrt(s * t);
  switch (r.type) {
    case "rectangle":
      return {
        ...r,
        strokeWidth: r.strokeWidth * l,
        x: r.x * s,
        y: r.y * t,
        width: r.width * s,
        height: r.height * t
      };
    case "brush":
      return {
        ...r,
        strokeWidth: r.strokeWidth * l,
        points: r.points.map((f) => ({
          x: f.x * s,
          y: f.y * t
        }))
      };
    case "arrow":
      return {
        ...r,
        strokeWidth: r.strokeWidth * l,
        startX: r.startX * s,
        startY: r.startY * t,
        endX: r.endX * s,
        endY: r.endY * t
      };
    case "marker":
      return {
        ...r,
        strokeWidth: r.strokeWidth * l,
        x: r.x * s,
        y: r.y * t,
        size: r.size * l
      };
    case "text":
      return {
        ...r,
        strokeWidth: r.strokeWidth * l,
        x: r.x * s,
        y: r.y * t,
        fontSize: r.fontSize * l
      };
  }
}
function Et(r, s, t) {
  if (r.width === s && r.height === t) return r;
  const l = s / r.width, f = t / r.height;
  return {
    version: Te,
    width: s,
    height: t,
    annotations: r.annotations.map((g) => Nt(g, l, f))
  };
}
const Qe = [
  "#ef4444",
  "#f59e0b",
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#ffffff",
  "#111827"
], St = [
  { tool: "select", label: "选择", shortcut: "V", icon: ct },
  { tool: "rectangle", label: "矩形", shortcut: "R", icon: Ue },
  { tool: "brush", label: "画笔", shortcut: "B", icon: He },
  { tool: "arrow", label: "箭头", shortcut: "A", icon: dt },
  { tool: "marker", label: "序号", shortcut: "M", icon: Be },
  { tool: "text", label: "文字", shortcut: "T", icon: Ve },
  { tool: "eraser", label: "橡皮擦", shortcut: "E", icon: Je }
], Mt = [2, 4, 8, 12];
function zt({
  activeTool: r,
  activeColor: s,
  strokeWidth: t,
  canUndo: l,
  canRedo: f,
  onCancel: g,
  onSave: h,
  onToolChange: d,
  onColorChange: v,
  onStrokeWidthChange: M,
  onUndo: A,
  onRedo: V,
  onClear: se
}) {
  const [z, J] = R(!1), F = oe(null);
  return ge(() => {
    if (!z) return;
    const j = (E) => {
      var ie;
      (ie = F.current) != null && ie.contains(E.target) || J(!1);
    };
    return document.addEventListener("pointerdown", j, !0), () => document.removeEventListener("pointerdown", j, !0);
  }, [z]), /* @__PURE__ */ e.jsxs("div", { className: "point-edit-toolbar", role: "toolbar", "aria-label": "图片标注工具", children: [
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "point-edit-btn point-edit-clear",
        title: "清空标注",
        "aria-label": "清空标注",
        onClick: se,
        children: /* @__PURE__ */ e.jsx(at, { size: 16, "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "point-edit-divider" }),
    /* @__PURE__ */ e.jsx("div", { className: "point-edit-tool-group", "aria-label": "标注工具", children: St.map(({ tool: j, label: E, shortcut: ie, icon: H }) => /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: `point-edit-btn${r === j ? " active" : ""}`,
        title: `${E} ${ie}`,
        "aria-label": E,
        "aria-pressed": r === j,
        onClick: () => d(j),
        children: /* @__PURE__ */ e.jsx(H, { size: 16, "aria-hidden": "true" })
      },
      j
    )) }),
    /* @__PURE__ */ e.jsxs("div", { className: "point-edit-style-control", ref: F, children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          className: `point-edit-btn point-edit-style-trigger${z ? " active" : ""}`,
          title: "标注颜色与线宽",
          "aria-label": "标注颜色与线宽",
          "aria-haspopup": "dialog",
          "aria-expanded": z,
          onClick: () => J((j) => !j),
          children: /* @__PURE__ */ e.jsx("span", { className: "point-edit-style-preview", style: { backgroundColor: s }, children: /* @__PURE__ */ e.jsx(
            "span",
            {
              className: "point-edit-style-preview-core",
              style: { width: Math.max(3, t), height: Math.max(3, t) }
            }
          ) })
        }
      ),
      z ? /* @__PURE__ */ e.jsxs("div", { className: "point-edit-style-menu", role: "dialog", "aria-label": "标注样式", children: [
        /* @__PURE__ */ e.jsxs("div", { className: "point-edit-style-section", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "point-edit-style-heading", children: [
            /* @__PURE__ */ e.jsx("span", { children: "标注颜色" }),
            /* @__PURE__ */ e.jsx("span", { children: s.toUpperCase() })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "point-edit-colors", children: Qe.map((j) => /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: `point-edit-color-swatch${s === j ? " active" : ""}`,
              style: { backgroundColor: j },
              title: j,
              "aria-label": `颜色 ${j}`,
              "aria-pressed": s === j,
              onClick: () => v(j),
              children: s === j ? /* @__PURE__ */ e.jsx(Ze, { size: 12, "aria-hidden": "true" }) : null
            },
            j
          )) })
        ] }),
        /* @__PURE__ */ e.jsx("div", { className: "point-edit-style-menu-divider" }),
        /* @__PURE__ */ e.jsxs("div", { className: "point-edit-style-section", children: [
          /* @__PURE__ */ e.jsxs("div", { className: "point-edit-style-heading", children: [
            /* @__PURE__ */ e.jsx("span", { children: "线宽" }),
            /* @__PURE__ */ e.jsxs("span", { children: [
              t,
              "px"
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("div", { className: "point-edit-stroke-options", "aria-label": "线宽", children: Mt.map((j) => /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              className: `point-edit-stroke-option${t === j ? " active" : ""}`,
              title: `线宽 ${j}`,
              "aria-label": `线宽 ${j}`,
              "aria-pressed": t === j,
              onClick: () => M(j),
              children: [
                /* @__PURE__ */ e.jsx("span", { style: { width: Math.max(3, j), height: Math.max(3, j) } }),
                /* @__PURE__ */ e.jsxs("small", { children: [
                  j,
                  "px"
                ] })
              ]
            },
            j
          )) })
        ] })
      ] }) : null
    ] }),
    /* @__PURE__ */ e.jsx("div", { className: "point-edit-divider" }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "point-edit-btn",
        title: "撤销 Ctrl+Z",
        "aria-label": "撤销",
        onClick: A,
        disabled: !l,
        children: /* @__PURE__ */ e.jsx(ut, { size: 15, "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "point-edit-btn",
        title: "重做 Ctrl+Shift+Z",
        "aria-label": "重做",
        onClick: V,
        disabled: !f,
        children: /* @__PURE__ */ e.jsx(ht, { size: 15, "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "point-edit-divider" }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "point-edit-btn",
        title: "保存标注",
        "aria-label": "保存标注",
        onClick: h,
        children: /* @__PURE__ */ e.jsx(qe, { size: 15, "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ e.jsx("div", { className: "point-edit-divider" }),
    /* @__PURE__ */ e.jsx(
      "button",
      {
        type: "button",
        className: "point-edit-btn point-edit-cancel",
        title: "取消 Esc",
        "aria-label": "取消标注",
        onClick: g,
        children: /* @__PURE__ */ e.jsx(Ce, { size: 16, "aria-hidden": "true" })
      }
    )
  ] });
}
const Rt = De(zt);
function Ct(r) {
  const s = Math.atan2(
    r.endY - r.startY,
    r.endX - r.startX
  ), t = Math.max(r.strokeWidth * 4, 12), l = t * 0.55, f = r.endX - Math.cos(s) * t, g = r.endY - Math.sin(s) * t, h = Math.sin(s) * l, d = -Math.cos(s) * l;
  return [
    `${r.endX},${r.endY}`,
    `${f + h},${g + d}`,
    `${f - h},${g - d}`
  ].join(" ");
}
function _t(r) {
  const s = r.text.split(`
`);
  let t = 0;
  for (const l of s) t = Math.max(t, l.length);
  return {
    width: Math.max(r.fontSize, t * r.fontSize * 0.64),
    height: Math.max(r.fontSize, s.length * r.fontSize * 1.25)
  };
}
function _e({ annotations: r, selectedId: s }) {
  return r.map((t) => {
    const l = t.id === s, f = Math.max(t.strokeWidth * 0.5, 1);
    switch (t.type) {
      case "rectangle":
        return /* @__PURE__ */ e.jsxs("g", { "data-annotation-id": t.id, children: [
          /* @__PURE__ */ e.jsx(
            "rect",
            {
              x: t.x,
              y: t.y,
              width: t.width,
              height: t.height,
              fill: "none",
              stroke: t.color,
              strokeWidth: t.strokeWidth,
              strokeLinejoin: "round"
            }
          ),
          l ? /* @__PURE__ */ e.jsx(
            "rect",
            {
              x: t.x,
              y: t.y,
              width: t.width,
              height: t.height,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: f,
              strokeDasharray: `${f * 4} ${f * 3}`,
              vectorEffect: "non-scaling-stroke"
            }
          ) : null
        ] }, t.id);
      case "brush": {
        if (t.points.length === 0) return null;
        const g = t.points.map((h, d) => `${d === 0 ? "M" : "L"} ${h.x} ${h.y}`).join(" ");
        return /* @__PURE__ */ e.jsx(
          "path",
          {
            "data-annotation-id": t.id,
            d: g,
            fill: "none",
            stroke: t.color,
            strokeWidth: t.strokeWidth,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          },
          t.id
        );
      }
      case "arrow":
        return /* @__PURE__ */ e.jsxs("g", { "data-annotation-id": t.id, children: [
          /* @__PURE__ */ e.jsx(
            "line",
            {
              x1: t.startX,
              y1: t.startY,
              x2: t.endX,
              y2: t.endY,
              stroke: t.color,
              strokeWidth: t.strokeWidth,
              strokeLinecap: "round"
            }
          ),
          /* @__PURE__ */ e.jsx("polygon", { points: Ct(t), fill: t.color }),
          l ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: t.startX,
                cy: t.startY,
                r: Math.max(t.strokeWidth * 1.5, 5),
                fill: "currentColor"
              }
            ),
            /* @__PURE__ */ e.jsx(
              "circle",
              {
                cx: t.endX,
                cy: t.endY,
                r: Math.max(t.strokeWidth * 1.5, 5),
                fill: "currentColor"
              }
            )
          ] }) : null
        ] }, t.id);
      case "marker":
        return /* @__PURE__ */ e.jsxs("g", { "data-annotation-id": t.id, children: [
          /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: t.x,
              cy: t.y,
              r: t.size,
              fill: t.color,
              stroke: "#ffffff",
              strokeWidth: Math.max(t.size * 0.12, 1)
            }
          ),
          /* @__PURE__ */ e.jsx(
            "text",
            {
              x: t.x,
              y: t.y,
              fill: "#ffffff",
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              fontSize: t.size * 1.08,
              fontWeight: "700",
              textAnchor: "middle",
              dominantBaseline: "central",
              children: t.number
            }
          ),
          l ? /* @__PURE__ */ e.jsx(
            "circle",
            {
              cx: t.x,
              cy: t.y,
              r: t.size * 1.22,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: f,
              strokeDasharray: `${f * 4} ${f * 3}`
            }
          ) : null
        ] }, t.id);
      case "text": {
        const g = t.text.split(`
`), h = _t(t);
        return /* @__PURE__ */ e.jsxs("g", { "data-annotation-id": t.id, children: [
          l ? /* @__PURE__ */ e.jsx(
            "rect",
            {
              x: t.x - t.fontSize * 0.2,
              y: t.y - t.fontSize * 0.15,
              width: h.width + t.fontSize * 0.4,
              height: h.height + t.fontSize * 0.3,
              rx: t.fontSize * 0.12,
              fill: "none",
              stroke: "currentColor",
              strokeWidth: f,
              strokeDasharray: `${f * 4} ${f * 3}`
            }
          ) : null,
          /* @__PURE__ */ e.jsx(
            "text",
            {
              x: t.x,
              y: t.y,
              fill: t.color,
              fontFamily: "ui-sans-serif, system-ui, sans-serif",
              fontSize: t.fontSize,
              fontWeight: "600",
              dominantBaseline: "hanging",
              children: g.map((d, v) => /* @__PURE__ */ e.jsx(
                "tspan",
                {
                  x: t.x,
                  dy: v === 0 ? 0 : t.fontSize * 1.25,
                  children: d || " "
                },
                `${t.id}-${v}`
              ))
            }
          )
        ] }, t.id);
      }
    }
  });
}
function Tt({
  layer: r,
  className: s,
  fit: t = "contain",
  title: l = "图片标注层"
}) {
  const f = rt();
  return /* @__PURE__ */ e.jsxs(
    "svg",
    {
      className: s,
      viewBox: `0 0 ${r.width} ${r.height}`,
      preserveAspectRatio: t === "cover" ? "xMidYMid slice" : "xMidYMid meet",
      role: "img",
      "aria-labelledby": f,
      children: [
        /* @__PURE__ */ e.jsx("title", { id: f, children: l }),
        /* @__PURE__ */ e.jsx(_e, { annotations: r.annotations })
      ]
    }
  );
}
const Jt = De(Tt), et = 5, Ee = 10;
function ze() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? `ann_${crypto.randomUUID()}` : `ann_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}
function $t(r, s, t) {
  const l = t.x - s.x, f = t.y - s.y;
  if (l === 0 && f === 0) return Math.hypot(r.x - s.x, r.y - s.y);
  const g = l * l + f * f, h = Math.max(0, Math.min(1, ((r.x - s.x) * l + (r.y - s.y) * f) / g)), d = s.x + h * l, v = s.y + h * f;
  return Math.hypot(r.x - d, r.y - v);
}
function Yt(r) {
  const s = r.text.split(`
`);
  let t = 0;
  for (const l of s) t = Math.max(t, l.length);
  return {
    width: Math.max(r.fontSize, t * r.fontSize * 0.64),
    height: Math.max(r.fontSize, s.length * r.fontSize * 1.25)
  };
}
function At(r, s, t) {
  const l = Ee / Math.max(t, 1e-3);
  switch (r.type) {
    case "rectangle":
      return s.x >= r.x - l && s.x <= r.x + r.width + l && s.y >= r.y - l && s.y <= r.y + r.height + l;
    case "brush":
      return r.points.some((f) => Math.hypot(s.x - f.x, s.y - f.y) <= l);
    case "arrow":
      return $t(
        s,
        { x: r.startX, y: r.startY },
        { x: r.endX, y: r.endY }
      ) <= l;
    case "marker":
      return Math.hypot(s.x - r.x, s.y - r.y) <= r.size + l;
    case "text": {
      const f = Yt(r);
      return s.x >= r.x - l && s.x <= r.x + f.width + l && s.y >= r.y - l && s.y <= r.y + f.height + l;
    }
  }
}
function ke(r, s, t, l) {
  for (let f = r.length - 1; f >= 0; f -= 1) {
    const g = r[f];
    if ((!l || g.type === l) && At(g, s, t))
      return g;
  }
}
function Ft(r, s, t) {
  switch (r.type) {
    case "rectangle":
      return { ...r, x: r.x + s, y: r.y + t };
    case "brush":
      return {
        ...r,
        points: r.points.map((l) => ({ x: l.x + s, y: l.y + t }))
      };
    case "arrow":
      return {
        ...r,
        startX: r.startX + s,
        startY: r.startY + t,
        endX: r.endX + s,
        endY: r.endY + t
      };
    case "marker":
      return { ...r, x: r.x + s, y: r.y + t };
    case "text":
      return { ...r, x: r.x + s, y: r.y + t };
  }
}
function Wt(r, s) {
  return r.map((t) => t.id === s.id ? s : t);
}
function It(r, s) {
  const t = et / Math.max(s, 1e-3);
  switch (r.type) {
    case "rectangle":
      return r.width >= t || r.height >= t;
    case "arrow":
      return Math.hypot(
        r.endX - r.startX,
        r.endY - r.startY
      ) >= t;
    case "brush":
      return r.points.length >= 2;
    default:
      return !0;
  }
}
function Pt({
  imageSrc: r,
  annotations: s,
  activeTool: t,
  selectedColor: l,
  selectedStrokeWidth: f,
  selectedId: g,
  zoom: h,
  onAnnotationsChange: d,
  onSelectedIdChange: v,
  onImageSizeChange: M
}) {
  const A = oe(null), V = oe(null), se = oe(null), z = oe(null), J = oe(null), F = oe(null), j = oe(!1), [E, ie] = R(null), [H, D] = R({ width: 800, height: 600 }), [P, Q] = R(null), [he, ne] = R(null), [y, Z] = R(null), ce = P ?? s;
  ge(() => {
    const a = A.current;
    if (!a) return;
    const p = () => {
      D({
        width: Math.max(160, a.clientWidth),
        height: Math.max(120, a.clientHeight)
      });
    };
    p();
    const w = new ResizeObserver(p);
    return w.observe(a), () => w.disconnect();
  }, []);
  const ee = y ? y.id ?? "new" : null;
  ge(() => {
    if (!ee) return;
    const a = requestAnimationFrame(() => {
      var p, w;
      (p = se.current) == null || p.focus(), (w = se.current) == null || w.select();
    });
    return () => cancelAnimationFrame(a);
  }, [ee]);
  const $ = Re(() => {
    if (!E) return { width: 0, height: 0, scale: 1 };
    const a = Math.max(120, H.width - 80), p = Math.max(100, H.height - 164), w = Math.min(
      a / E.width,
      p / E.height
    ), T = Math.max(0.01, w * (h / 100));
    return {
      width: E.width * T,
      height: E.height * T,
      scale: T
    };
  }, [E, H.height, H.width, h]), ae = U((a) => {
    const p = a.currentTarget, w = { width: p.naturalWidth, height: p.naturalHeight };
    ie(w), M(w);
  }, [M]), k = U((a) => {
    const p = a.currentTarget.getBoundingClientRect();
    return !E || p.width === 0 || p.height === 0 ? { x: 0, y: 0 } : {
      x: (a.clientX - p.left) / p.width * E.width,
      y: (a.clientY - p.top) / p.height * E.height
    };
  }, [E]), S = U((a) => {
    J.current = a, Q(a);
  }, []), b = U((a) => {
    F.current = a, ne(a);
  }, []), O = U(() => {
    z.current = null, S(null), b(null);
  }, [S, b]), K = U((a) => {
    Z({
      id: a.id,
      x: a.x,
      y: a.y,
      value: a.text,
      color: a.color,
      fontSize: a.fontSize
    }), v(a.id);
  }, [v]), G = U(() => {
    if (!y) return;
    const a = y.value.trim();
    let p = s;
    if (y.id)
      p = a ? s.map((w) => w.id === y.id && w.type === "text" ? { ...w, text: a } : w) : s.filter((w) => w.id !== y.id);
    else if (a) {
      const w = ze();
      p = [...s, {
        id: w,
        type: "text",
        color: y.color,
        strokeWidth: f / $.scale,
        text: a,
        x: y.x,
        y: y.y,
        fontSize: y.fontSize
      }], v(w);
    }
    Z(null), p !== s && d(p);
  }, [s, $.scale, d, v, f, y]), o = U((a) => {
    if (!E || a.button !== 0) return;
    if (a.preventDefault(), y) {
      G();
      return;
    }
    const p = k(a), w = $.scale, T = s.find((I) => I.id === g);
    if (t === "text") {
      const I = ke(s, p, w, "text");
      (I == null ? void 0 : I.type) === "text" ? K(I) : (Z({
        id: null,
        x: p.x,
        y: p.y,
        value: "",
        color: l,
        fontSize: 18 / w
      }), v(null));
      return;
    }
    if (t === "marker") {
      let I = 1;
      for (const de of s)
        de.type === "marker" && (I = Math.max(I, de.number + 1));
      const L = ze();
      d([...s, {
        id: L,
        type: "marker",
        color: l,
        strokeWidth: f / w,
        number: I,
        x: p.x,
        y: p.y,
        size: 16 / w
      }]), v(L);
      return;
    }
    if (t === "eraser") {
      const I = ke(s, p, w), L = I ? s.filter((de) => de.id !== I.id) : s;
      S(L), z.current = { kind: "erase", pointerId: a.pointerId, start: p }, a.currentTarget.setPointerCapture(a.pointerId);
      return;
    }
    if (t === "select") {
      if ((T == null ? void 0 : T.type) === "rectangle" && Math.hypot(
        p.x - (T.x + T.width),
        p.y - (T.y + T.height)
      ) * w <= Ee) {
        z.current = {
          kind: "resize-rectangle",
          pointerId: a.pointerId,
          start: p,
          source: T
        }, a.currentTarget.setPointerCapture(a.pointerId);
        return;
      }
      if ((T == null ? void 0 : T.type) === "arrow") {
        const L = Math.hypot(p.x - T.startX, p.y - T.startY) * w, de = Math.hypot(p.x - T.endX, p.y - T.endY) * w, ye = L <= Ee ? "arrow-start" : de <= Ee ? "arrow-end" : null;
        if (ye) {
          z.current = {
            kind: ye,
            pointerId: a.pointerId,
            start: p,
            source: T
          }, a.currentTarget.setPointerCapture(a.pointerId);
          return;
        }
      }
      const I = ke(s, p, w);
      v((I == null ? void 0 : I.id) ?? null), I && (z.current = {
        kind: "move",
        pointerId: a.pointerId,
        start: p,
        source: I
      }, a.currentTarget.setPointerCapture(a.pointerId));
      return;
    }
    const B = ze(), me = f / w, fe = { id: B, color: l, strokeWidth: me };
    t === "rectangle" ? b({ ...fe, type: "rectangle", x: p.x, y: p.y, width: 0, height: 0 }) : t === "brush" ? b({ ...fe, type: "brush", points: [p] }) : t === "arrow" && b({
      ...fe,
      type: "arrow",
      startX: p.x,
      startY: p.y,
      endX: p.x,
      endY: p.y
    }), z.current = { kind: "draw", pointerId: a.pointerId, start: p }, a.currentTarget.setPointerCapture(a.pointerId);
  }, [
    t,
    s,
    K,
    $.scale,
    k,
    E,
    d,
    v,
    G,
    l,
    g,
    f,
    S,
    b,
    y
  ]), N = U((a) => {
    const p = z.current;
    if (!p || p.pointerId !== a.pointerId) return;
    a.preventDefault();
    const w = k(a), T = $.scale;
    if (p.kind === "erase") {
      const L = J.current ?? s, de = ke(L, w, T);
      de && S(L.filter((ye) => ye.id !== de.id));
      return;
    }
    if (p.kind === "draw") {
      const L = F.current;
      if (!L) return;
      L.type === "rectangle" ? b({
        ...L,
        x: Math.min(p.start.x, w.x),
        y: Math.min(p.start.y, w.y),
        width: Math.abs(w.x - p.start.x),
        height: Math.abs(w.y - p.start.y)
      }) : L.type === "brush" ? b({ ...L, points: [...L.points, w] }) : L.type === "arrow" && b({ ...L, endX: w.x, endY: w.y });
      return;
    }
    const B = p.source;
    if (!B) return;
    const me = w.x - p.start.x, fe = w.y - p.start.y;
    let I = B;
    if (p.kind === "move")
      I = Ft(B, me, fe);
    else if (p.kind === "resize-rectangle" && B.type === "rectangle") {
      const L = et / T;
      I = {
        ...B,
        width: Math.max(L, B.width + me),
        height: Math.max(L, B.height + fe)
      };
    } else p.kind === "arrow-start" && B.type === "arrow" ? I = { ...B, startX: B.startX + me, startY: B.startY + fe } : p.kind === "arrow-end" && B.type === "arrow" && (I = { ...B, endX: B.endX + me, endY: B.endY + fe });
    S(Wt(s, I));
  }, [s, $.scale, k, S, b]), _ = U((a) => {
    const p = z.current;
    if (!p || p.pointerId !== a.pointerId) return;
    a.currentTarget.hasPointerCapture(a.pointerId) && a.currentTarget.releasePointerCapture(a.pointerId);
    const w = J.current, T = F.current;
    w && w !== s ? (d(w), g && !w.some((B) => B.id === g) && v(null)) : T && It(T, $.scale) && (d([...s, T]), v(T.id)), O();
  }, [
    s,
    $.scale,
    d,
    v,
    O,
    g
  ]), W = U((a) => {
    a.currentTarget.hasPointerCapture(a.pointerId) && a.currentTarget.releasePointerCapture(a.pointerId), O();
  }, [O]), xe = U((a) => {
    const p = k(a), w = ke(s, p, $.scale, "text");
    (w == null ? void 0 : w.type) === "text" && K(w);
  }, [s, K, $.scale, k]), le = U((a) => {
    if (a.key === "Escape") {
      a.preventDefault(), Z(null);
      return;
    }
    a.key === "Enter" && (a.ctrlKey || a.metaKey) && !j.current && (a.preventDefault(), G());
  }, [G]), i = ce.find((a) => a.id === g), Y = t === "select" ? "is-selecting" : t === "text" ? "is-text" : t === "eraser" ? "is-erasing" : "is-drawing";
  return /* @__PURE__ */ e.jsx("div", { ref: A, className: "point-edit-stage", children: /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: "point-edit-viewport",
      style: { width: $.width || void 0, height: $.height || void 0 },
      children: [
        /* @__PURE__ */ e.jsx(
          "img",
          {
            src: r,
            alt: "待标注图片",
            className: `point-edit-image${E ? " is-ready" : ""}`,
            draggable: !1,
            onLoad: ae,
            style: E ? { width: $.width, height: $.height } : void 0
          }
        ),
        E ? /* @__PURE__ */ e.jsxs(
          "svg",
          {
            ref: V,
            className: `point-edit-canvas ${Y}`,
            viewBox: `0 0 ${E.width} ${E.height}`,
            preserveAspectRatio: "none",
            onPointerDown: o,
            onPointerMove: N,
            onPointerUp: _,
            onPointerCancel: W,
            onDoubleClick: xe,
            children: [
              /* @__PURE__ */ e.jsx(_e, { annotations: ce, selectedId: g }),
              he ? /* @__PURE__ */ e.jsx(_e, { annotations: [he] }) : null,
              (i == null ? void 0 : i.type) === "rectangle" ? /* @__PURE__ */ e.jsx(
                "circle",
                {
                  className: "point-edit-resize-handle",
                  cx: i.x + i.width,
                  cy: i.y + i.height,
                  r: 7 / $.scale,
                  strokeWidth: 2 / $.scale
                }
              ) : null
            ]
          }
        ) : null,
        y && E ? /* @__PURE__ */ e.jsx(
          "textarea",
          {
            ref: se,
            className: "point-edit-text-editor",
            value: y.value,
            rows: Math.max(1, y.value.split(`
`).length),
            placeholder: "输入标注文字",
            onChange: (a) => Z((p) => p && { ...p, value: a.target.value }),
            onBlur: G,
            onKeyDown: le,
            onCompositionStart: () => {
              j.current = !0;
            },
            onCompositionEnd: () => {
              j.current = !1;
            },
            style: {
              left: y.x * $.scale,
              top: y.y * $.scale,
              color: y.color,
              fontSize: y.fontSize * $.scale
            }
          }
        ) : null
      ]
    }
  ) });
}
function Xe(r) {
  return { past: [], present: r, future: [] };
}
function Ne(r, s) {
  return r.present === s ? r : {
    past: [...r.past, r.present].slice(-50),
    present: s,
    future: []
  };
}
function Xt(r) {
  const s = r.past.at(-1);
  return s ? {
    past: r.past.slice(0, -1),
    present: s,
    future: [r.present, ...r.future]
  } : r;
}
function Dt(r) {
  const s = r.future[0];
  return s ? {
    past: [...r.past, r.present].slice(-50),
    present: s,
    future: r.future.slice(1)
  } : r;
}
function Zt({
  isOpen: r,
  imageUrl: s,
  initialAnnotationLayer: t,
  onClose: l,
  onSave: f,
  theme: g = "inherit"
}) {
  const h = oe(!1), [d, v] = R("select"), [M, A] = R(Qe[0]), [V, se] = R(4), [z, J] = R(null), [F, j] = R(100), [E, ie] = R(null), [H, D] = R(() => Xe((t == null ? void 0 : t.annotations) ?? [])), P = U((S) => {
    if (ie(S), h.current) return;
    h.current = !0;
    const b = t ? Et(t, S.width, S.height).annotations : [];
    D(Xe(b));
  }, [t]), Q = U((S) => {
    D((b) => Ne(b, S)), J((b) => b && !S.some((O) => O.id === b) ? null : b);
  }, []), he = U(() => {
    D(Xt), J(null);
  }, []), ne = U(() => {
    D(Dt), J(null);
  }, []), y = U(() => {
    D((S) => Ne(S, [])), J(null);
  }, []), Z = U(() => {
    z && (D((S) => Ne(
      S,
      S.present.filter((b) => b.id !== z)
    )), J(null));
  }, [z]), ce = U((S) => {
    A(S), z && D((b) => {
      const O = b.present.map((K) => K.id === z ? { ...K, color: S } : K);
      return Ne(b, O);
    });
  }, [z]), ee = U(() => {
    E && f({
      version: Te,
      width: E.width,
      height: E.height,
      annotations: H.present
    });
  }, [H.present, E, f]), $ = U(() => j((S) => Math.min(250, S + 25)), []), ae = U(() => j((S) => Math.max(50, S - 25)), []), k = U(() => j(100), []);
  return ge(() => {
    if (!r) return;
    const S = (b) => {
      const O = b.target;
      if ((O == null ? void 0 : O.tagName) === "INPUT" || (O == null ? void 0 : O.tagName) === "TEXTAREA") return;
      const G = b.ctrlKey || b.metaKey;
      if (G && b.key.toLowerCase() === "z") {
        b.preventDefault(), b.shiftKey ? ne() : he();
        return;
      }
      if (G && b.key.toLowerCase() === "y") {
        b.preventDefault(), ne();
        return;
      }
      switch (b.key.toLowerCase()) {
        case "escape":
          l();
          break;
        case "delete":
        case "backspace":
          b.preventDefault(), Z();
          break;
        case "v":
          v("select");
          break;
        case "r":
          v("rectangle");
          break;
        case "b":
          v("brush");
          break;
        case "a":
          v("arrow");
          break;
        case "m":
          v("marker");
          break;
        case "t":
          v("text");
          break;
        case "e":
          v("eraser");
          break;
      }
    };
    return window.addEventListener("keydown", S), () => window.removeEventListener("keydown", S);
  }, [Z, ne, he, r, l]), r ? xt(
    /* @__PURE__ */ e.jsxs("div", { className: "point-edit-overlay", "data-theme": g === "inherit" ? void 0 : g, children: [
      /* @__PURE__ */ e.jsx(
        Pt,
        {
          imageSrc: s,
          annotations: H.present,
          activeTool: d,
          selectedColor: M,
          selectedStrokeWidth: V,
          selectedId: z,
          zoom: F,
          onAnnotationsChange: Q,
          onSelectedIdChange: J,
          onImageSizeChange: P
        }
      ),
      /* @__PURE__ */ e.jsxs("div", { className: "point-edit-toolbar-dock", children: [
        /* @__PURE__ */ e.jsx(
          Rt,
          {
            activeTool: d,
            activeColor: M,
            strokeWidth: V,
            canUndo: H.past.length > 0,
            canRedo: H.future.length > 0,
            onCancel: l,
            onSave: ee,
            onToolChange: v,
            onColorChange: ce,
            onStrokeWidthChange: se,
            onUndo: he,
            onRedo: ne,
            onClear: y
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { className: "point-edit-zoom-controls", "aria-label": "标注画布缩放", children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "point-edit-zoom-btn",
              "data-tooltip": "缩小",
              "aria-label": "缩小",
              onClick: ae,
              disabled: F <= 50,
              children: /* @__PURE__ */ e.jsx(Ke, { size: 14, "aria-hidden": "true" })
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              className: "point-edit-zoom-value",
              "data-tooltip": "重置缩放",
              "aria-label": "重置缩放",
              onClick: k,
              children: [
                F,
                "%"
              ]
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              className: "point-edit-zoom-btn",
              "data-tooltip": "放大",
              "aria-label": "放大",
              onClick: $,
              disabled: F >= 250,
              children: /* @__PURE__ */ e.jsx(Ge, { size: 14, "aria-hidden": "true" })
            }
          )
        ] })
      ] })
    ] }),
    document.body
  ) : null;
}
function qt(r) {
  const s = document.createElement("canvas");
  s.width = r.width, s.height = r.height;
  const t = s.getContext("2d");
  if (!t) throw new Error("Annotation canvas 2D context is unavailable");
  t.textBaseline = "middle", t.textAlign = "center", t.lineCap = "round", t.lineJoin = "round";
  for (const l of r.annotations)
    switch (t.strokeStyle = l.color, t.fillStyle = l.color, t.lineWidth = l.strokeWidth, l.type) {
      case "rectangle":
        t.strokeRect(l.x, l.y, l.width, l.height);
        break;
      case "brush":
        if (l.points.length < 2) break;
        t.beginPath(), t.moveTo(l.points[0].x, l.points[0].y);
        for (let f = 1; f < l.points.length; f += 1)
          t.lineTo(l.points[f].x, l.points[f].y);
        t.stroke();
        break;
      case "arrow": {
        t.beginPath(), t.moveTo(l.startX, l.startY), t.lineTo(l.endX, l.endY), t.stroke();
        const f = Math.atan2(
          l.endY - l.startY,
          l.endX - l.startX
        ), g = Math.max(l.strokeWidth * 4, 12);
        t.save(), t.translate(l.endX, l.endY), t.rotate(f), t.beginPath(), t.moveTo(0, 0), t.lineTo(-g, -g * 0.55), t.lineTo(-g, g * 0.55), t.closePath(), t.fill(), t.restore();
        break;
      }
      case "marker":
        t.beginPath(), t.arc(l.x, l.y, l.size, 0, Math.PI * 2), t.fill(), t.strokeStyle = "#ffffff", t.lineWidth = Math.max(l.size * 0.12, 1), t.stroke(), t.fillStyle = "#ffffff", t.font = `700 ${l.size * 1.08}px ui-sans-serif, system-ui, sans-serif`, t.fillText(String(l.number), l.x, l.y);
        break;
      case "text": {
        t.save(), t.fillStyle = l.color, t.font = `600 ${l.fontSize}px ui-sans-serif, system-ui, sans-serif`, t.textAlign = "left", t.textBaseline = "top";
        const f = l.text.split(`
`);
        for (let g = 0; g < f.length; g += 1)
          t.fillText(
            f[g],
            l.x,
            l.y + g * l.fontSize * 1.25
          );
        t.restore();
        break;
      }
    }
  return s.toDataURL("image/png");
}
export {
  _e as AnnotationGraphics,
  Jt as AnnotationLayer,
  yt as Canvas,
  Te as IMAGE_ANNOTATION_LAYER_VERSION,
  Bt as ImageEditor,
  Pt as PointEditCanvas,
  Zt as PointEditEditor,
  ve as createInitialHistory,
  kt as downloadDataUrl,
  Ht as downloadJson,
  wt as exportAnnotatedImage,
  vt as isImageAnnotation,
  Vt as isImageAnnotationLayer,
  Me as pushHistoryState,
  bt as redoHistory,
  qt as renderImageAnnotationLayerToDataUrl,
  Et as resizeImageAnnotationLayer,
  gt as undoHistory
};
