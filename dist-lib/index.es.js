import Ye, { forwardRef as Me, createElement as xe, useRef as se, useState as j, useEffect as pe, useMemo as Ie } from "react";
var le = { exports: {} }, de = {};
/**
 * @license React
 * react-jsx-dev-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function We() {
  if (we) return de;
  we = 1;
  var d = Symbol.for("react.fragment");
  return de.Fragment = d, de.jsxDEV = void 0, de;
}
var ce = {};
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function Oe() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && (function() {
    function d(n) {
      if (n == null) return null;
      if (typeof n == "function")
        return n.$$typeof === te ? null : n.displayName || n.name || null;
      if (typeof n == "string") return n;
      switch (n) {
        case P:
          return "Fragment";
        case oe:
          return "Profiler";
        case Y:
          return "StrictMode";
        case A:
          return "Suspense";
        case ie:
          return "SuspenseList";
        case X:
          return "Activity";
      }
      if (typeof n == "object")
        switch (typeof n.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), n.$$typeof) {
          case _:
            return "Portal";
          case F:
            return n.displayName || "Context";
          case q:
            return (n._context.displayName || "Context") + ".Consumer";
          case k:
            var p = n.render;
            return n = n.displayName, n || (n = p.displayName || p.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
          case ee:
            return p = n.displayName || null, p !== null ? p : d(n.type) || "Memo";
          case u:
            p = n._payload, n = n._init;
            try {
              return d(n(p));
            } catch {
            }
        }
      return null;
    }
    function m(n) {
      return "" + n;
    }
    function b(n) {
      try {
        m(n);
        var p = !1;
      } catch {
        p = !0;
      }
      if (p) {
        p = console;
        var N = p.error, D = typeof Symbol == "function" && Symbol.toStringTag && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return N.call(
          p,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          D
        ), m(n);
      }
    }
    function h(n) {
      if (n === P) return "<>";
      if (typeof n == "object" && n !== null && n.$$typeof === u)
        return "<...>";
      try {
        var p = d(n);
        return p ? "<" + p + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function C() {
      var n = H.A;
      return n === null ? null : n.getOwner();
    }
    function I() {
      return Error("react-stack-top-frame");
    }
    function c(n) {
      if (K.call(n, "key")) {
        var p = Object.getOwnPropertyDescriptor(n, "key").get;
        if (p && p.isReactWarning) return !1;
      }
      return n.key !== void 0;
    }
    function l(n, p) {
      function N() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          p
        ));
      }
      N.isReactWarning = !0, Object.defineProperty(n, "key", {
        get: N,
        configurable: !0
      });
    }
    function V() {
      var n = d(this.type);
      return y[n] || (y[n] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), n = this.props.ref, n !== void 0 ? n : null;
    }
    function g(n, p, N, D, W, O) {
      var r = N.ref;
      return n = {
        $$typeof: ne,
        type: n,
        key: p,
        props: N,
        _owner: D
      }, (r !== void 0 ? r : null) !== null ? Object.defineProperty(n, "ref", {
        enumerable: !1,
        get: V
      }) : Object.defineProperty(n, "ref", { enumerable: !1, value: null }), n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(n, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(n, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: W
      }), Object.defineProperty(n, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    }
    function w(n, p, N, D, W, O) {
      var r = p.children;
      if (r !== void 0)
        if (D)
          if (J(r)) {
            for (D = 0; D < r.length; D++)
              T(r[D]);
            Object.freeze && Object.freeze(r);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else T(r);
      if (K.call(p, "key")) {
        r = d(n);
        var E = Object.keys(p).filter(function(ae) {
          return ae !== "key";
        });
        D = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", Z[r + D] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          D,
          r,
          E,
          r
        ), Z[r + D] = !0);
      }
      if (r = null, N !== void 0 && (b(N), r = "" + N), c(p) && (b(p.key), r = "" + p.key), "key" in p) {
        N = {};
        for (var z in p)
          z !== "key" && (N[z] = p[z]);
      } else N = p;
      return r && l(
        N,
        typeof n == "function" ? n.displayName || n.name || "Unknown" : n
      ), g(
        n,
        r,
        N,
        C(),
        W,
        O
      );
    }
    function T(n) {
      Q(n) ? n._store && (n._store.validated = 1) : typeof n == "object" && n !== null && n.$$typeof === u && (n._payload.status === "fulfilled" ? Q(n._payload.value) && n._payload.value._store && (n._payload.value._store.validated = 1) : n._store && (n._store.validated = 1));
    }
    function Q(n) {
      return typeof n == "object" && n !== null && n.$$typeof === ne;
    }
    var $ = Ye, ne = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), Y = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), q = Symbol.for("react.consumer"), F = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), ie = Symbol.for("react.suspense_list"), ee = Symbol.for("react.memo"), u = Symbol.for("react.lazy"), X = Symbol.for("react.activity"), te = Symbol.for("react.client.reference"), H = $.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, K = Object.prototype.hasOwnProperty, J = Array.isArray, f = console.createTask ? console.createTask : function() {
      return null;
    };
    $ = {
      react_stack_bottom_frame: function(n) {
        return n();
      }
    };
    var U, y = {}, G = $.react_stack_bottom_frame.bind(
      $,
      I
    )(), re = f(h(I)), Z = {};
    ce.Fragment = P, ce.jsxDEV = function(n, p, N, D) {
      var W = 1e4 > H.recentlyCreatedOwnerStacks++;
      return w(
        n,
        p,
        N,
        D,
        W ? Error("react-stack-top-frame") : G,
        W ? f(h(n)) : re
      );
    };
  })()), ce;
}
var je;
function Le() {
  return je || (je = 1, process.env.NODE_ENV === "production" ? le.exports = We() : le.exports = Oe()), le.exports;
}
var e = Le();
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pe = (d) => d.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Xe = (d) => d.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (m, b, h) => h ? h.toUpperCase() : b.toLowerCase()
), De = (d) => {
  const m = Xe(d);
  return m.charAt(0).toUpperCase() + m.slice(1);
}, Se = (...d) => d.filter((m, b, h) => !!m && m.trim() !== "" && h.indexOf(m) === b).join(" ").trim(), He = (d) => {
  for (const m in d)
    if (m.startsWith("aria-") || m === "role" || m === "title")
      return !0;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ue = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Be = Me(
  ({
    color: d = "currentColor",
    size: m = 24,
    strokeWidth: b = 2,
    absoluteStrokeWidth: h,
    className: C = "",
    children: I,
    iconNode: c,
    ...l
  }, V) => xe(
    "svg",
    {
      ref: V,
      ...Ue,
      width: m,
      height: m,
      stroke: d,
      strokeWidth: h ? Number(b) * 24 / Number(m) : b,
      className: Se("lucide", C),
      ...!I && !He(l) && { "aria-hidden": "true" },
      ...l
    },
    [
      ...c.map(([g, w]) => xe(g, w)),
      ...Array.isArray(I) ? I : [I]
    ]
  )
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const R = (d, m) => {
  const b = Me(
    ({ className: h, ...C }, I) => xe(Be, {
      ref: I,
      iconNode: m,
      className: Se(
        `lucide-${Pe(De(d))}`,
        `lucide-${d}`,
        h
      ),
      ...C
    })
  );
  return b.displayName = De(d), b;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
], Je = R("arrow-up-right", qe);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ze = [
  ["path", { d: "m11 10 3 3", key: "fzmg1i" }],
  [
    "path",
    { d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z", key: "p4q2r7" }
  ],
  ["path", { d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031", key: "wy6l02" }]
], Ke = R("brush", Ze);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ge = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], Qe = R("check", Ge);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const et = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], tt = R("download", et);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rt = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], nt = R("eraser", rt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ot = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], at = R("hash", ot);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const st = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], it = R("image", st);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lt = [
  ["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }],
  [
    "path",
    {
      d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
      key: "277e5u"
    }
  ]
], dt = R("mouse-pointer", lt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ct = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], mt = R("redo", ct);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ut = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
], Re = R("sparkles", ut);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], ft = R("square", pt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], bt = R("type", xt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], ht = R("undo", gt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nt = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], Fe = R("upload", Nt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], Ve = R("x", Et);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vt = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], yt = R("zoom-in", vt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const It = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], wt = R("zoom-out", It), kt = ({
  imageSrc: d,
  annotations: m,
  onAddAnnotation: b,
  onUpdateAnnotation: h,
  onDeleteAnnotation: C,
  selectedId: I,
  onSelectId: c,
  activeTool: l,
  selectedColor: V,
  selectedStrokeWidth: g,
  zoom: w,
  onUploadImage: T,
  onLoadSample: Q
}) => {
  var he, Ne, Ee, ve, ye;
  const $ = se(null), ne = se(null), [_, P] = j(null);
  pe(() => {
    if (!d) {
      P(null);
      return;
    }
    const t = new Image();
    t.src = d, t.onload = () => {
      P({
        width: t.naturalWidth,
        height: t.naturalHeight
      });
    };
  }, [d]);
  const [Y, oe] = j({ width: 800, height: 600 }), [q, F] = j(!1), [k, A] = j(null), [ie, ee] = j([]), [u, X] = j(null), [te, H] = j("none"), [K, J] = j(null), [f, U] = j(null), [y, G] = j(null), [re, Z] = j(""), [n, p] = j(null), N = se(null), D = se(!1);
  pe(() => {
    if (!$.current) return;
    const t = $.current, o = () => {
      oe({
        width: Math.max(100, t.clientWidth - 48),
        // pad sides
        height: Math.max(100, t.clientHeight - 136)
        // pad top (24px) + bottom (112px) to clear toolbar
      });
    };
    o();
    const s = new ResizeObserver(() => {
      o();
    });
    return s.observe(t), () => s.disconnect();
  }, []);
  const W = (t) => {
    const o = t.currentTarget;
    P({
      width: o.naturalWidth,
      height: o.naturalHeight
    });
  }, O = Ie(() => {
    if (!_) return { width: 0, height: 0 };
    const t = _.width / _.height;
    let o = Y.width, s = Y.width / t;
    s > Y.height && (s = Y.height, o = Y.height * t);
    const i = w / 100;
    return {
      width: o * i,
      height: s * i
    };
  }, [_, Y, w]), r = Ie(() => !_ || O.width === 0 ? 1 : O.width / _.width, [_, O]), E = (t) => {
    const o = t.currentTarget.getBoundingClientRect(), s = t.clientX - o.left, i = t.clientY - o.top;
    return {
      x: s / r,
      y: i / r
    };
  };
  pe(() => {
    if (y && N.current) {
      const t = setTimeout(() => {
        N.current && (N.current.focus(), N.current.select());
      }, 50);
      return () => clearTimeout(t);
    }
  }, [y]);
  const z = () => {
    if (!y) return;
    const t = re.trim();
    if (y === "new_temp_text") {
      if (t !== "") {
        const o = `ann_${Date.now()}`, s = {
          id: o,
          type: "text",
          color: V,
          strokeWidth: g,
          text: t,
          x: (n == null ? void 0 : n.x) ?? 0,
          y: (n == null ? void 0 : n.y) ?? 0,
          fontSize: 18 / r
          // target visual font size: 18px on screen
        };
        b(s), c(o);
      }
      p(null);
    } else {
      const o = m.find((s) => s.id === y);
      o && o.type === "text" && (t === "" ? C(y) : h({
        ...o,
        text: t
      }));
    }
    G(null);
  }, ae = () => {
    D.current || z();
  }, $e = (t) => {
    t.nativeEvent.isComposing || D.current || t.keyCode === 229 || t.key === "Escape" && z();
  }, be = (t) => {
    for (let o = m.length - 1; o >= 0; o--) {
      const s = m[o];
      let i = !1;
      if (s.type === "rectangle") {
        const a = 10 / r, x = s.x, v = s.x + s.width, M = s.y, L = s.y + s.height;
        t.x >= x - a && t.x <= v + a && t.y >= M - a && t.y <= L + a && (i = !0);
      } else if (s.type === "marker")
        Math.hypot(t.x - s.x, t.y - s.y) <= s.size * 2 && (i = !0);
      else if (s.type === "text") {
        const a = s.text.split(`
`), v = a.reduce((L, S) => Math.max(L, S.length), 0) * s.fontSize * 0.7 + 12 / r, M = a.length * s.fontSize * 1.35 + 12 / r;
        t.x >= s.x - 6 / r && t.x <= s.x + v && t.y >= s.y - 6 / r && t.y <= s.y + M && (i = !0);
      } else s.type === "arrow" ? ge(t, { x: s.startX, y: s.startY }, { x: s.endX, y: s.endY }) <= 16 / r && (i = !0) : s.type === "brush" && (i = s.points.some((a) => Math.hypot(t.x - a.x, t.y - a.y) <= 16 / r));
      if (i) {
        C(s.id);
        break;
      }
    }
  }, ze = (t) => {
    if (!d || !_) return;
    if (y) {
      z();
      return;
    }
    const o = E(t);
    if (l === "text") {
      const i = m.find((a) => {
        if (a.type !== "text") return !1;
        const x = a.text.split(`
`), M = x.reduce((B, ue) => Math.max(B, ue.length), 0) * a.fontSize * 0.7, L = x.length * a.fontSize * 1.35, S = 8 / r;
        return o.x >= a.x - S && o.x <= a.x + M + S && o.y >= a.y - S && o.y <= a.y + L + S;
      });
      if (i) {
        G(i.id), Z(i.text), c(i.id);
        return;
      }
    }
    if (l === "eraser") {
      F(!0), be(o);
      return;
    }
    if (l === "select") {
      if (I) {
        const i = m.find((a) => a.id === I);
        if (i) {
          if (i.type === "rectangle") {
            const a = i.x + i.width, x = i.y + i.height;
            if (Math.hypot(o.x - a, o.y - x) * r < 10) {
              H("resize-br"), J(o), U(i);
              return;
            }
          }
          if (i.type === "arrow") {
            const a = Math.hypot(o.x - i.startX, o.y - i.startY) * r, x = Math.hypot(o.x - i.endX, o.y - i.endY) * r;
            if (a < 10) {
              H("arrow-start"), J(o), U(i);
              return;
            }
            if (x < 10) {
              H("arrow-end"), J(o), U(i);
              return;
            }
          }
        }
      }
      for (let i = m.length - 1; i >= 0; i--) {
        const a = m[i];
        let x = !1;
        if (a.type === "rectangle") {
          const v = 8 / r, M = a.x, L = a.x + a.width, S = a.y, B = a.y + a.height;
          o.x >= M - v && o.x <= L + v && o.y >= S - v && o.y <= B + v && (x = !0);
        } else if (a.type === "marker")
          Math.hypot(o.x - a.x, o.y - a.y) <= a.size * 1.5 && (x = !0);
        else if (a.type === "text") {
          const v = a.text.length * a.fontSize * 0.65, M = a.fontSize * 1.3;
          o.x >= a.x && o.x <= a.x + v && o.y >= a.y && o.y <= a.y + M && (x = !0);
        } else a.type === "arrow" ? ge(o, { x: a.startX, y: a.startY }, { x: a.endX, y: a.endY }) <= 12 / r && (x = !0) : a.type === "brush" && (x = a.points.some((v) => Math.hypot(o.x - v.x, o.y - v.y) <= 12 / r));
        if (x) {
          c(a.id), H("move"), J(o), U(a);
          return;
        }
      }
      c(null);
      return;
    }
    F(!0), A(o);
    const s = `ann_${Date.now()}`;
    switch (l) {
      case "rectangle": {
        const i = {
          id: s,
          type: "rectangle",
          color: V,
          strokeWidth: g,
          x: o.x,
          y: o.y,
          width: 0,
          height: 0
        };
        X(i);
        break;
      }
      case "brush": {
        const i = {
          id: s,
          type: "brush",
          color: V,
          strokeWidth: g,
          points: [o]
        };
        ee([o]), X(i);
        break;
      }
      case "arrow": {
        const i = {
          id: s,
          type: "arrow",
          color: V,
          strokeWidth: g,
          startX: o.x,
          startY: o.y,
          endX: o.x,
          endY: o.y
        };
        X(i);
        break;
      }
      case "marker": {
        const i = m.filter((v) => v.type === "marker"), a = i.length > 0 ? Math.max(...i.map((v) => v.number)) + 1 : 1, x = {
          id: s,
          type: "marker",
          color: V,
          strokeWidth: g,
          number: a,
          x: o.x,
          y: o.y,
          size: 16 / r
          // target visual size: 16px on screen
        };
        b(x), F(!1);
        break;
      }
      case "text": {
        t.preventDefault(), p(o), G("new_temp_text"), Z(""), F(!1);
        break;
      }
    }
  }, Te = (t) => {
    if (!d || !_) return;
    const o = E(t);
    if (l === "eraser") {
      q && be(o);
      return;
    }
    if (l === "select" && K && f) {
      const s = o.x - K.x, i = o.y - K.y;
      switch (te) {
        case "move": {
          f.type === "rectangle" ? h({
            ...f,
            x: f.x + s,
            y: f.y + i
          }) : f.type === "arrow" ? h({
            ...f,
            startX: f.startX + s,
            startY: f.startY + i,
            endX: f.endX + s,
            endY: f.endY + i
          }) : f.type === "marker" ? h({
            ...f,
            x: f.x + s,
            y: f.y + i
          }) : f.type === "text" ? h({
            ...f,
            x: f.x + s,
            y: f.y + i
          }) : f.type === "brush" && h({
            ...f,
            points: f.points.map((a) => ({
              x: a.x + s,
              y: a.y + i
            }))
          });
          break;
        }
        case "resize-br": {
          if (f.type === "rectangle") {
            const a = Math.max(5 / r, f.width + s), x = Math.max(5 / r, f.height + i);
            h({
              ...f,
              width: a,
              height: x
            });
          }
          break;
        }
        case "arrow-start": {
          f.type === "arrow" && h({
            ...f,
            startX: f.startX + s,
            startY: f.startY + i
          });
          break;
        }
        case "arrow-end": {
          f.type === "arrow" && h({
            ...f,
            endX: f.endX + s,
            endY: f.endY + i
          });
          break;
        }
      }
      return;
    }
    if (!(!q || !k || !u))
      switch (l) {
        case "rectangle": {
          const s = Math.min(k.x, o.x), i = Math.min(k.y, o.y), a = Math.abs(o.x - k.x), x = Math.abs(o.y - k.y);
          X({
            ...u,
            type: "rectangle",
            x: s,
            y: i,
            width: a,
            height: x
          });
          break;
        }
        case "brush": {
          const s = [...ie, o];
          ee(s), X({
            ...u,
            type: "brush",
            points: s
          });
          break;
        }
        case "arrow": {
          X({
            ...u,
            type: "arrow",
            startX: k.x,
            startY: k.y,
            endX: o.x,
            endY: o.y
          });
          break;
        }
      }
  }, Ae = () => {
    if (l === "eraser") {
      F(!1);
      return;
    }
    if (l === "select") {
      H("none"), J(null), U(null);
      return;
    }
    if (q) {
      if (F(!1), u) {
        let t = !0;
        u.type === "rectangle" ? u.width < 5 / r && u.height < 5 / r && (t = !1) : u.type === "arrow" ? Math.hypot(
          u.endX - u.startX,
          u.endY - u.startY
        ) < 5 / r && (t = !1) : u.type === "brush" && u.points.length < 2 && (t = !1), t && (b(u), c(u.id));
      }
      X(null), A(null), ee([]);
    }
  };
  function ge(t, o, s) {
    const i = Math.hypot(o.x - s.x, o.y - s.y) ** 2;
    if (i === 0) return Math.hypot(t.x - o.x, t.y - o.y);
    let a = ((t.x - o.x) * (s.x - o.x) + (t.y - o.y) * (s.y - o.y)) / i;
    return a = Math.max(0, Math.min(1, a)), Math.hypot(t.x - (o.x + a * (s.x - o.x)), t.y - (o.y + a * (s.y - o.y)));
  }
  return /* @__PURE__ */ e.jsxDEV(
    "div",
    {
      ref: $,
      className: "flex-1 h-full flex items-center justify-center pt-6 px-6 pb-28 bg-slate-100 overflow-auto relative",
      children: d && _ ? /* @__PURE__ */ e.jsxDEV(
        "div",
        {
          className: "relative shadow-lg border border-gray-200 rounded-xl select-none bg-white",
          style: {
            width: `${O.width}px`,
            height: `${O.height}px`,
            transition: q || te !== "none" ? "none" : "width 0.2s, height 0.2s"
          },
          children: [
            /* @__PURE__ */ e.jsxDEV(
              "img",
              {
                ref: ne,
                src: d,
                alt: "Annotated",
                className: "absolute inset-0 w-full h-full object-fill rounded-xl pointer-events-none",
                onLoad: W
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                lineNumber: 697,
                columnNumber: 11
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV(
              "svg",
              {
                id: "editor-canvas-svg",
                className: "absolute inset-0 w-full h-full rounded-xl z-10 overflow-visible",
                style: {
                  cursor: l === "select" ? "default" : l === "text" ? "text" : l === "eraser" ? "pointer" : "crosshair"
                },
                onMouseDown: ze,
                onMouseMove: Te,
                onMouseUp: Ae,
                children: [
                  m.map((t) => {
                    if (y === t.id) return null;
                    const o = I === t.id;
                    switch (t.type) {
                      case "rectangle":
                        return /* @__PURE__ */ e.jsxDEV("g", { children: [
                          /* @__PURE__ */ e.jsxDEV(
                            "rect",
                            {
                              id: `rect-${t.id}`,
                              x: t.x * r,
                              y: t.y * r,
                              width: t.width * r,
                              height: t.height * r,
                              stroke: t.color,
                              strokeWidth: t.strokeWidth,
                              fill: "transparent",
                              className: "transition-all"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                              lineNumber: 734,
                              columnNumber: 23
                            },
                            void 0
                          ),
                          o && l === "select" && /* @__PURE__ */ e.jsxDEV(e.Fragment, { children: [
                            /* @__PURE__ */ e.jsxDEV(
                              "rect",
                              {
                                x: t.x * r - 2,
                                y: t.y * r - 2,
                                width: t.width * r + 4,
                                height: t.height * r + 4,
                                stroke: "#818CF8",
                                strokeWidth: 1,
                                strokeDasharray: "4 4",
                                fill: "transparent"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                lineNumber: 748,
                                columnNumber: 27
                              },
                              void 0
                            ),
                            /* @__PURE__ */ e.jsxDEV(
                              "circle",
                              {
                                cx: (t.x + t.width) * r,
                                cy: (t.y + t.height) * r,
                                r: 6,
                                fill: "#FFFFFF",
                                stroke: "#4F46E5",
                                strokeWidth: 2,
                                style: { cursor: "se-resize" }
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                lineNumber: 759,
                                columnNumber: 27
                              },
                              void 0
                            )
                          ] }, void 0, !0, {
                            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                            lineNumber: 747,
                            columnNumber: 25
                          }, void 0)
                        ] }, t.id, !0, {
                          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                          lineNumber: 733,
                          columnNumber: 21
                        }, void 0);
                      case "brush": {
                        if (t.points.length < 2) return null;
                        const s = t.points.map((i, a) => `${a === 0 ? "M" : "L"} ${i.x * r} ${i.y * r}`).join(" ");
                        return /* @__PURE__ */ e.jsxDEV("g", { children: [
                          /* @__PURE__ */ e.jsxDEV(
                            "path",
                            {
                              id: `brush-${t.id}`,
                              d: s,
                              stroke: t.color,
                              strokeWidth: t.strokeWidth,
                              fill: "none",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                              lineNumber: 781,
                              columnNumber: 23
                            },
                            void 0
                          ),
                          o && l === "select" && /* @__PURE__ */ e.jsxDEV(
                            "path",
                            {
                              d: s,
                              stroke: "#818CF8",
                              strokeWidth: t.strokeWidth + 4,
                              fill: "none",
                              strokeOpacity: 0.3,
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                              lineNumber: 791,
                              columnNumber: 25
                            },
                            void 0
                          )
                        ] }, t.id, !0, {
                          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                          lineNumber: 780,
                          columnNumber: 21
                        }, void 0);
                      }
                      case "arrow": {
                        const s = t.startX * r, i = t.startY * r, a = t.endX * r, x = t.endY * r, v = Math.atan2(x - i, a - s), M = Math.max(12, t.strokeWidth * 3), L = a - M * Math.cos(v - Math.PI / 6), S = x - M * Math.sin(v - Math.PI / 6), B = a - M * Math.cos(v + Math.PI / 6), ue = x - M * Math.sin(v + Math.PI / 6);
                        return /* @__PURE__ */ e.jsxDEV("g", { children: [
                          /* @__PURE__ */ e.jsxDEV(
                            "line",
                            {
                              id: `arrow-shaft-${t.id}`,
                              x1: s,
                              y1: i,
                              x2: a,
                              y2: x,
                              stroke: t.color,
                              strokeWidth: t.strokeWidth,
                              strokeLinecap: "round"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                              lineNumber: 822,
                              columnNumber: 23
                            },
                            void 0
                          ),
                          /* @__PURE__ */ e.jsxDEV(
                            "polygon",
                            {
                              id: `arrow-tip-${t.id}`,
                              points: `${a},${x} ${L},${S} ${B},${ue}`,
                              fill: t.color
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                              lineNumber: 833,
                              columnNumber: 23
                            },
                            void 0
                          ),
                          o && l === "select" && /* @__PURE__ */ e.jsxDEV(e.Fragment, { children: [
                            /* @__PURE__ */ e.jsxDEV(
                              "line",
                              {
                                x1: s,
                                y1: i,
                                x2: a,
                                y2: x,
                                stroke: "#818CF8",
                                strokeWidth: t.strokeWidth + 6,
                                strokeOpacity: 0.15,
                                strokeLinecap: "round"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                lineNumber: 842,
                                columnNumber: 27
                              },
                              void 0
                            ),
                            /* @__PURE__ */ e.jsxDEV(
                              "circle",
                              {
                                cx: s,
                                cy: i,
                                r: 6,
                                fill: "#FFFFFF",
                                stroke: "#4F46E5",
                                strokeWidth: 2,
                                style: { cursor: "move" }
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                lineNumber: 853,
                                columnNumber: 27
                              },
                              void 0
                            ),
                            /* @__PURE__ */ e.jsxDEV(
                              "circle",
                              {
                                cx: a,
                                cy: x,
                                r: 6,
                                fill: "#FFFFFF",
                                stroke: "#4F46E5",
                                strokeWidth: 2,
                                style: { cursor: "move" }
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                lineNumber: 863,
                                columnNumber: 27
                              },
                              void 0
                            )
                          ] }, void 0, !0, {
                            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                            lineNumber: 841,
                            columnNumber: 25
                          }, void 0)
                        ] }, t.id, !0, {
                          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                          lineNumber: 820,
                          columnNumber: 21
                        }, void 0);
                      }
                      case "marker": {
                        const s = t.x * r, i = t.y * r, a = t.size * r;
                        return /* @__PURE__ */ e.jsxDEV("g", { id: `marker-${t.id}`, children: [
                          o && l === "select" && /* @__PURE__ */ e.jsxDEV(
                            "circle",
                            {
                              cx: s,
                              cy: i,
                              r: a + 6,
                              fill: "transparent",
                              stroke: "#818CF8",
                              strokeWidth: 1.5,
                              strokeDasharray: "3 3"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                              lineNumber: 885,
                              columnNumber: 25
                            },
                            void 0
                          ),
                          /* @__PURE__ */ e.jsxDEV("circle", { cx: s, cy: i, r: a, fill: t.color, stroke: "#FFFFFF", strokeWidth: 2 }, void 0, !1, {
                            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                            lineNumber: 896,
                            columnNumber: 23
                          }, void 0),
                          /* @__PURE__ */ e.jsxDEV(
                            "text",
                            {
                              x: s,
                              y: i,
                              fill: "#FFFFFF",
                              fontSize: `${a * 1.05}px`,
                              fontWeight: "bold",
                              textAnchor: "middle",
                              dominantBaseline: "central",
                              fontFamily: "sans-serif",
                              children: t.number
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                              lineNumber: 898,
                              columnNumber: 23
                            },
                            void 0
                          )
                        ] }, t.id, !0, {
                          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                          lineNumber: 883,
                          columnNumber: 21
                        }, void 0);
                      }
                      case "text": {
                        const s = t.x * r, i = t.y * r, a = t.fontSize * r, x = t.text.split(`
`), M = x.reduce((S, B) => Math.max(S, B.length), 0) * a * 0.7 + 16, L = x.length * a * 1.35 + 16;
                        return /* @__PURE__ */ e.jsxDEV(
                          "g",
                          {
                            id: `text-${t.id}`,
                            onDoubleClick: (S) => {
                              S.stopPropagation(), S.preventDefault(), G(t.id), Z(t.text);
                            },
                            style: { cursor: l === "select" ? "pointer" : l === "text" ? "text" : "crosshair" },
                            children: [
                              /* @__PURE__ */ e.jsxDEV(
                                "rect",
                                {
                                  x: s - 8,
                                  y: i - 8,
                                  width: M,
                                  height: L,
                                  fill: "transparent",
                                  pointerEvents: "all"
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                  lineNumber: 935,
                                  columnNumber: 23
                                },
                                void 0
                              ),
                              o && l === "select" && /* @__PURE__ */ e.jsxDEV(
                                "rect",
                                {
                                  x: s - 4,
                                  y: i - 4,
                                  width: M - 8,
                                  height: L - 8,
                                  fill: "transparent",
                                  stroke: "#818CF8",
                                  strokeWidth: 1,
                                  strokeDasharray: "3 3",
                                  pointerEvents: "none"
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                  lineNumber: 944,
                                  columnNumber: 25
                                },
                                void 0
                              ),
                              /* @__PURE__ */ e.jsxDEV(
                                "text",
                                {
                                  x: s,
                                  y: i,
                                  fill: t.color,
                                  fontSize: `${a}px`,
                                  fontWeight: "500",
                                  fontFamily: "sans-serif",
                                  dominantBaseline: "hanging",
                                  pointerEvents: "none",
                                  children: x.map((S, B) => /* @__PURE__ */ e.jsxDEV("tspan", { x: s, dy: B === 0 ? 0 : `${a * 1.25}px`, children: S }, B, !1, {
                                    fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                    lineNumber: 967,
                                    columnNumber: 27
                                  }, void 0))
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                  lineNumber: 956,
                                  columnNumber: 23
                                },
                                void 0
                              )
                            ]
                          },
                          t.id,
                          !0,
                          {
                            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                            lineNumber: 923,
                            columnNumber: 21
                          },
                          void 0
                        );
                      }
                      default:
                        return null;
                    }
                  }),
                  u && /* @__PURE__ */ e.jsxDEV(e.Fragment, { children: [
                    u.type === "rectangle" && /* @__PURE__ */ e.jsxDEV(
                      "rect",
                      {
                        x: u.x * r,
                        y: u.y * r,
                        width: u.width * r,
                        height: u.height * r,
                        stroke: u.color,
                        strokeWidth: u.strokeWidth,
                        fill: "transparent"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                        lineNumber: 984,
                        columnNumber: 19
                      },
                      void 0
                    ),
                    u.type === "brush" && u.points.length >= 2 && /* @__PURE__ */ e.jsxDEV(
                      "path",
                      {
                        d: u.points.map((t, o) => `${o === 0 ? "M" : "L"} ${t.x * r} ${t.y * r}`).join(" "),
                        stroke: u.color,
                        strokeWidth: u.strokeWidth,
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                        lineNumber: 995,
                        columnNumber: 19
                      },
                      void 0
                    ),
                    u.type === "arrow" && /* @__PURE__ */ e.jsxDEV("g", { children: [
                      /* @__PURE__ */ e.jsxDEV(
                        "line",
                        {
                          x1: u.startX * r,
                          y1: u.startY * r,
                          x2: u.endX * r,
                          y2: u.endY * r,
                          stroke: u.color,
                          strokeWidth: u.strokeWidth
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                          lineNumber: 1008,
                          columnNumber: 21
                        },
                        void 0
                      ),
                      /* @__PURE__ */ e.jsxDEV(
                        "circle",
                        {
                          cx: u.endX * r,
                          cy: u.endY * r,
                          r: 4,
                          fill: u.color
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                          lineNumber: 1017,
                          columnNumber: 21
                        },
                        void 0
                      )
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                      lineNumber: 1007,
                      columnNumber: 19
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                    lineNumber: 982,
                    columnNumber: 15
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                lineNumber: 706,
                columnNumber: 11
              },
              void 0
            ),
            y && /* @__PURE__ */ e.jsxDEV(
              "div",
              {
                className: "absolute z-40 overflow-visible animate-in zoom-in-95 duration-100 select-text",
                onMouseDown: (t) => t.stopPropagation(),
                onMouseUp: (t) => t.stopPropagation(),
                onTouchStart: (t) => t.stopPropagation(),
                style: {
                  left: `${(y === "new_temp_text" ? (n == null ? void 0 : n.x) ?? 0 : ((he = m.find((t) => t.id === y)) == null ? void 0 : he.x) ?? 0) * r}px`,
                  top: `${(y === "new_temp_text" ? (n == null ? void 0 : n.y) ?? 0 : ((Ne = m.find((t) => t.id === y)) == null ? void 0 : Ne.y) ?? 0) * r}px`
                },
                children: [
                  /* @__PURE__ */ e.jsxDEV(
                    "textarea",
                    {
                      ref: N,
                      value: re,
                      onChange: (t) => Z(t.target.value),
                      onBlur: ae,
                      onKeyDown: $e,
                      onCompositionStart: () => {
                        D.current = !0;
                      },
                      onCompositionEnd: () => {
                        D.current = !1;
                      },
                      placeholder: "输入标注文字...",
                      className: "bg-transparent border-0 focus:border-0 focus:ring-0 p-0 shadow-none font-semibold outline-none resize-none overflow-hidden max-w-md block select-text leading-tight",
                      style: {
                        fontSize: `${(y === "new_temp_text" ? 18 : ((Ee = m.find((t) => t.id === y)) == null ? void 0 : Ee.fontSize) ?? 18) * r}px`,
                        color: y === "new_temp_text" ? V : ((ve = m.find((t) => t.id === y)) == null ? void 0 : ve.color) ?? "#EF4444",
                        minWidth: "200px",
                        lineHeight: "1.25",
                        background: "transparent",
                        border: "none",
                        outline: "none",
                        boxShadow: "none",
                        padding: "0",
                        margin: "0",
                        caretColor: y === "new_temp_text" ? V : ((ye = m.find((t) => t.id === y)) == null ? void 0 : ye.color) ?? "#EF4444",
                        resize: "none",
                        userSelect: "text",
                        WebkitUserSelect: "text"
                      },
                      rows: re.split(`
`).length || 1
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                      lineNumber: 1049,
                      columnNumber: 15
                    },
                    void 0
                  ),
                  /* @__PURE__ */ e.jsxDEV("div", { className: "absolute top-full left-0 mt-1.5 bg-indigo-600 text-[10px] text-white px-2 py-0.5 rounded-md font-semibold tracking-wide pointer-events-none whitespace-nowrap shadow-md", children: "点击空白处自动保存" }, void 0, !1, {
                    fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                    lineNumber: 1091,
                    columnNumber: 15
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                lineNumber: 1031,
                columnNumber: 13
              },
              void 0
            )
          ]
        },
        void 0,
        !0,
        {
          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
          lineNumber: 688,
          columnNumber: 9
        },
        void 0
      ) : (
        /* Empty Upload State Landing View - High fidelity clean theme */
        /* @__PURE__ */ e.jsxDEV("div", { className: "w-full max-w-2xl bg-white border border-gray-200 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-8 shadow-xl relative overflow-hidden group", children: [
          /* @__PURE__ */ e.jsxDEV("div", { className: "absolute -top-24 -left-24 w-48 h-48 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" }, void 0, !1, {
            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
            lineNumber: 1101,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("div", { className: "absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-violet-500/5 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" }, void 0, !1, {
            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
            lineNumber: 1102,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("div", { className: "w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-gray-150 shadow-inner text-indigo-500 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ e.jsxDEV(it, { size: 30, className: "stroke-1.5" }, void 0, !1, {
            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
            lineNumber: 1105,
            columnNumber: 13
          }, void 0) }, void 0, !1, {
            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
            lineNumber: 1104,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("div", { className: "space-y-2.5 max-w-md", children: [
            /* @__PURE__ */ e.jsxDEV("h2", { className: "text-xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ e.jsxDEV("span", { children: "智能改图" }, void 0, !1, {
                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                lineNumber: 1110,
                columnNumber: 15
              }, void 0),
              /* @__PURE__ */ e.jsxDEV("span", { className: "inline-flex items-center gap-1 bg-indigo-550/10 text-indigo-600 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold border border-indigo-100", children: [
                /* @__PURE__ */ e.jsxDEV(Re, { size: 10 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                  lineNumber: 1112,
                  columnNumber: 17
                }, void 0),
                /* @__PURE__ */ e.jsxDEV("span", { children: "V1.0" }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                  lineNumber: 1113,
                  columnNumber: 17
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                lineNumber: 1111,
                columnNumber: 15
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
              lineNumber: 1109,
              columnNumber: 13
            }, void 0),
            /* @__PURE__ */ e.jsxDEV("p", { className: "text-slate-500 text-sm leading-relaxed", children: "打开并在线标注图片：框选区域、自由手绘、添加箭头、编号徽章和文字。不涉及 AI，纯客户端离线安全编辑。" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
              lineNumber: 1116,
              columnNumber: 13
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
            lineNumber: 1108,
            columnNumber: 11
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("div", { className: "flex flex-col sm:flex-row items-center gap-3 w-full justify-center", children: /* @__PURE__ */ e.jsxDEV(
            "button",
            {
              id: "btn-upload-landing",
              type: "button",
              onClick: () => {
                const t = document.querySelector('input[type="file"]');
                t == null || t.click();
              },
              className: "w-full sm:w-auto px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl text-sm shadow-md shadow-indigo-600/15 hover:shadow-indigo-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-1.5",
              children: [
                /* @__PURE__ */ e.jsxDEV(Fe, { size: 15 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                  lineNumber: 1131,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ e.jsxDEV("span", { children: "选择本地图片" }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                  lineNumber: 1132,
                  columnNumber: 15
                }, void 0)
              ]
            },
            void 0,
            !0,
            {
              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
              lineNumber: 1122,
              columnNumber: 13
            },
            void 0
          ) }, void 0, !1, {
            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
            lineNumber: 1121,
            columnNumber: 11
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
          lineNumber: 1099,
          columnNumber: 9
        }, void 0)
      )
    },
    void 0,
    !1,
    {
      fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
      lineNumber: 683,
      columnNumber: 5
    },
    void 0
  );
};
function me(d) {
  return {
    past: [],
    present: d,
    future: []
  };
}
function fe(d, m) {
  return JSON.stringify(d.present) === JSON.stringify(m) ? d : {
    past: [...d.past, d.present],
    present: m,
    future: []
    // clear redo branch on action
  };
}
function jt(d) {
  if (d.past.length === 0) return d;
  const m = d.past[d.past.length - 1];
  return {
    past: d.past.slice(0, d.past.length - 1),
    present: m,
    future: [d.present, ...d.future]
  };
}
function Dt(d) {
  if (d.future.length === 0) return d;
  const m = d.future[0], b = d.future.slice(1);
  return {
    past: [...d.past, d.present],
    present: m,
    future: b
  };
}
async function Vt(d, m) {
  return new Promise((b, h) => {
    const C = new Image();
    C.crossOrigin = "anonymous", C.src = d, C.onload = () => {
      const I = document.createElement("canvas");
      I.width = C.naturalWidth, I.height = C.naturalHeight;
      const c = I.getContext("2d");
      if (!c) {
        h(new Error("Could not get 2D context"));
        return;
      }
      c.drawImage(C, 0, 0), c.textBaseline = "middle", c.textAlign = "center", m.forEach((l) => {
        c.strokeStyle = l.color, c.fillStyle = l.color;
        const V = Math.max(C.naturalWidth, C.naturalHeight) / 1e3;
        switch (c.lineWidth = l.strokeWidth * Math.max(1, V), c.lineCap = "round", c.lineJoin = "round", l.type) {
          case "rectangle": {
            c.beginPath(), c.rect(l.x, l.y, l.width, l.height), c.stroke();
            break;
          }
          case "brush": {
            if (l.points.length < 2) return;
            c.beginPath(), c.moveTo(l.points[0].x, l.points[0].y);
            for (let g = 1; g < l.points.length; g++)
              c.lineTo(l.points[g].x, l.points[g].y);
            c.stroke();
            break;
          }
          case "arrow": {
            c.beginPath(), c.moveTo(l.startX, l.startY), c.lineTo(l.endX, l.endY), c.stroke();
            const g = Math.atan2(l.endY - l.startY, l.endX - l.startX), w = Math.max(12, l.strokeWidth * 4 * Math.max(1, V));
            c.save(), c.translate(l.endX, l.endY), c.rotate(g), c.fillStyle = l.color, c.beginPath(), c.moveTo(0, 0), c.lineTo(-w, -w * 0.5), c.lineTo(-w, w * 0.5), c.closePath(), c.fill(), c.restore();
            break;
          }
          case "marker": {
            const g = l.size * Math.max(1, V);
            c.beginPath(), c.arc(l.x, l.y, g, 0, 2 * Math.PI), c.fillStyle = l.color, c.fill(), c.lineWidth = Math.max(2, g * 0.15), c.strokeStyle = "#ffffff", c.stroke(), c.fillStyle = "#ffffff", c.font = `bold ${g * 1.1}px sans-serif`, c.fillText(String(l.number), l.x, l.y);
            break;
          }
          case "text": {
            c.save();
            const g = l.fontSize * Math.max(1, V);
            c.font = `${g}px sans-serif`, c.fillStyle = l.color, c.textAlign = "left", c.textBaseline = "top";
            const w = l.text.split(`
`);
            let T = l.y;
            w.forEach((Q) => {
              c.fillText(Q, l.x, T), T += g * 1.2;
            }), c.restore();
            break;
          }
        }
      }), b(I.toDataURL("image/png"));
    }, C.onerror = () => {
      h(new Error("Failed to load image for export"));
    };
  });
}
function Mt(d, m) {
  const b = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(d, null, 2)
  )}`, h = document.createElement("a");
  h.setAttribute("href", b), h.setAttribute("download", m), document.body.appendChild(h), h.click(), h.remove();
}
function Ct(d, m) {
  const b = document.createElement("a");
  b.setAttribute("href", d), b.setAttribute("download", m), document.body.appendChild(b), b.click(), b.remove();
}
const Ce = [
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
], _e = [
  { label: "细", value: 2 },
  { label: "中", value: 4 },
  { label: "粗", value: 8 },
  { label: "极粗", value: 12 }
], St = ({
  initialImageSrc: d = null,
  initialFileName: m = "",
  onSave: b,
  onCancel: h,
  className: C = ""
}) => {
  var W, O;
  const [I, c] = j(d), [l, V] = j(m), [g, w] = j("select"), [T, Q] = j("#EF4444"), [$, ne] = j(4), [_, P] = j(100), [Y, oe] = j(!1), [q, F] = j(null), [k, A] = j(
    () => me([])
  ), [ie, ee] = j(!1), [u, X] = j(!1), te = se(null), H = (r) => {
    const E = new FileReader();
    E.onload = (z) => {
      var ae;
      (ae = z.target) != null && ae.result && (c(z.target.result), V(r.name), A(me([])), F(null), w("rectangle"));
    }, E.readAsDataURL(r);
  }, K = (r, E) => {
    c(r), V(E), A(me([])), F(null), w("rectangle");
  }, J = (r) => {
    const E = [...k.present, r];
    A(fe(k, E));
  }, f = (r) => {
    const E = k.present.map(
      (z) => z.id === r.id ? r : z
    );
    A(fe(k, E));
  }, U = (r) => {
    const E = k.present.filter((z) => z.id !== r);
    A(fe(k, E)), q === r && F(null);
  }, y = () => {
    const r = jt(k);
    A(r), F(null);
  }, G = () => {
    const r = Dt(k);
    A(r), F(null);
  }, re = () => {
    P((r) => Math.min(250, r + 25));
  }, Z = () => {
    P((r) => Math.max(50, r - 25));
  }, n = async () => {
    if (I)
      try {
        const r = await Vt(I, k.present), E = l.substring(0, l.lastIndexOf(".")) || l;
        Ct(r, `annotated_${E}.png`), b == null || b(r, k.present), ee(!1);
      } catch (r) {
        console.error(r), alert("无法渲染并保存带标注的图片。");
      }
  }, p = () => {
    c(null), V(""), A(me([])), F(null), P(100);
  }, N = () => {
    var r;
    (r = te.current) == null || r.click();
  }, D = (r) => {
    r.target.files && r.target.files[0] && H(r.target.files[0]);
  };
  return /* @__PURE__ */ e.jsxDEV("div", { className: "flex flex-col h-screen bg-slate-50 text-slate-800 font-sans select-none overflow-hidden", children: [
    /* @__PURE__ */ e.jsxDEV(
      "input",
      {
        type: "file",
        ref: te,
        onChange: D,
        accept: "image/png, image/jpeg, image/webp",
        className: "hidden"
      },
      void 0,
      !1,
      {
        fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
        lineNumber: 211,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ e.jsxDEV("div", { className: "flex flex-1 overflow-hidden relative", children: [
      u && /* @__PURE__ */ e.jsxDEV("div", { className: "absolute top-3 right-3 w-80 bg-white/95 border border-gray-200 rounded-xl shadow-xl p-4.5 z-40 text-slate-600 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150", children: [
        /* @__PURE__ */ e.jsxDEV("div", { className: "flex items-center justify-between mb-2.5 border-b border-gray-100 pb-1.5", children: [
          /* @__PURE__ */ e.jsxDEV("span", { className: "font-bold text-slate-800 flex items-center gap-1.5 text-sm", children: [
            /* @__PURE__ */ e.jsxDEV(Re, { size: 14, className: "text-indigo-500" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 226,
              columnNumber: 17
            }, void 0),
            "使用帮助 / 快捷指南"
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
            lineNumber: 225,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ e.jsxDEV(
            "button",
            {
              type: "button",
              onClick: () => X(!1),
              className: "text-slate-400 hover:text-slate-600",
              children: /* @__PURE__ */ e.jsxDEV(Ve, { size: 15 }, void 0, !1, {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 234,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            !1,
            {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 229,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
          lineNumber: 224,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ e.jsxDEV("ul", { className: "space-y-2 text-[11px] leading-relaxed", children: [
          /* @__PURE__ */ e.jsxDEV("li", { children: [
            /* @__PURE__ */ e.jsxDEV("strong", { className: "text-slate-800 font-semibold", children: "选择模式：" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 239,
              columnNumber: 17
            }, void 0),
            "拖动标注以移动位置，拖动右下角控制点可缩放矩形框大小，亦可调整箭头起止点。"
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
            lineNumber: 238,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("li", { children: [
            /* @__PURE__ */ e.jsxDEV("strong", { className: "text-slate-800 font-semibold", children: "矩形标记：" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 242,
              columnNumber: 17
            }, void 0),
            "在图像上点击并拖拽，可以画出矩形高亮区域（标红）。"
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
            lineNumber: 241,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("li", { children: [
            /* @__PURE__ */ e.jsxDEV("strong", { className: "text-slate-800 font-semibold", children: "自由画笔：" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 245,
              columnNumber: 17
            }, void 0),
            "直接在图片上涂鸦，绘制任意曲线手写标注。"
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
            lineNumber: 244,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("li", { children: [
            /* @__PURE__ */ e.jsxDEV("strong", { className: "text-slate-800 font-semibold", children: "数字序号标牌：" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 248,
              columnNumber: 17
            }, void 0),
            "每次点击都会生成一个自动递增的圆形序号标签（①, ②, ③），方便按步骤索引。"
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
            lineNumber: 247,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("li", { children: [
            /* @__PURE__ */ e.jsxDEV("strong", { className: "text-slate-800 font-semibold", children: "文字备注：" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 251,
              columnNumber: 17
            }, void 0),
            "点击任意位置，在输入框中打字创建文字卡片，选择模式下双击可以重新编辑。"
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
            lineNumber: 250,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("li", { children: [
            /* @__PURE__ */ e.jsxDEV("strong", { className: "text-slate-800 font-semibold", children: "橡皮擦：" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 254,
              columnNumber: 17
            }, void 0),
            "选中橡皮擦，点击或在标注上拖动可以直接擦除已有标注。"
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
            lineNumber: 253,
            columnNumber: 15
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
          lineNumber: 237,
          columnNumber: 13
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
        lineNumber: 223,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ e.jsxDEV("div", { className: "flex-1 flex flex-col h-full overflow-hidden relative", children: [
        /* @__PURE__ */ e.jsxDEV(
          kt,
          {
            imageSrc: I,
            annotations: k.present,
            onAddAnnotation: J,
            onUpdateAnnotation: f,
            onDeleteAnnotation: U,
            selectedId: q,
            onSelectId: F,
            activeTool: g,
            selectedColor: T,
            selectedStrokeWidth: $,
            zoom: _,
            onUploadImage: H,
            onLoadSample: K
          },
          void 0,
          !1,
          {
            fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
            lineNumber: 265,
            columnNumber: 11
          },
          void 0
        ),
        I && /* @__PURE__ */ e.jsxDEV("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-none", children: [
          /* @__PURE__ */ e.jsxDEV("div", { className: "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200/80 rounded-2xl p-1.5 flex items-center gap-1 pointer-events-auto", children: [
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-upload-toolbar",
                type: "button",
                onClick: N,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all cursor-pointer flex items-center justify-center",
                title: "上传图片",
                children: /* @__PURE__ */ e.jsxDEV(Fe, { size: 16 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 294,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 287,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV("div", { className: "w-px h-5 bg-gray-200 mx-1" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 298,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-tool-select",
                type: "button",
                onClick: () => w("select"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${g === "select" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "选择与拖动 (V)",
                children: /* @__PURE__ */ e.jsxDEV(dt, { size: 16 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 312,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 301,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-tool-rectangle",
                type: "button",
                onClick: () => w("rectangle"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${g === "rectangle" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "矩形框标记 (R)",
                children: /* @__PURE__ */ e.jsxDEV(ft, { size: 16 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 327,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 316,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-tool-brush",
                type: "button",
                onClick: () => w("brush"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${g === "brush" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "自由画笔 (B)",
                children: /* @__PURE__ */ e.jsxDEV(Ke, { size: 16 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 342,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 331,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-tool-arrow",
                type: "button",
                onClick: () => w("arrow"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${g === "arrow" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "指示箭头 (A)",
                children: /* @__PURE__ */ e.jsxDEV(Je, { size: 16 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 357,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 346,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-tool-marker",
                type: "button",
                onClick: () => w("marker"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${g === "marker" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "数字序号标牌 (N)",
                children: /* @__PURE__ */ e.jsxDEV(at, { size: 16 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 372,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 361,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-tool-text",
                type: "button",
                onClick: () => w("text"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${g === "text" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "文字备注 (T)",
                children: /* @__PURE__ */ e.jsxDEV(bt, { size: 16 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 387,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 376,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-tool-eraser",
                type: "button",
                onClick: () => w("eraser"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${g === "eraser" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "橡皮擦 (E) - 点击或拖动擦除标注",
                children: /* @__PURE__ */ e.jsxDEV(nt, { size: 16 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 402,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 391,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV("div", { className: "relative", children: [
              /* @__PURE__ */ e.jsxDEV(
                "button",
                {
                  id: "btn-style-popover",
                  type: "button",
                  onClick: () => oe(!Y),
                  className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${Y ? "bg-slate-100 text-indigo-600" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                  title: "画笔颜色与粗细",
                  children: /* @__PURE__ */ e.jsxDEV("div", { className: "relative flex items-center justify-center", children: /* @__PURE__ */ e.jsxDEV(
                    "div",
                    {
                      className: "w-4 h-4 rounded-full border border-slate-300 shadow-inner flex items-center justify-center",
                      style: { backgroundColor: T },
                      children: /* @__PURE__ */ e.jsxDEV(
                        "div",
                        {
                          className: "rounded-full bg-white",
                          style: {
                            width: `${Math.max(2, Math.min(8, $ * 0.7))}px`,
                            height: `${Math.max(2, Math.min(8, $ * 0.7))}px`
                          }
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                          lineNumber: 425,
                          columnNumber: 25
                        },
                        void 0
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                      lineNumber: 420,
                      columnNumber: 23
                    },
                    void 0
                  ) }, void 0, !1, {
                    fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                    lineNumber: 418,
                    columnNumber: 21
                  }, void 0)
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 407,
                  columnNumber: 19
                },
                void 0
              ),
              Y && /* @__PURE__ */ e.jsxDEV(e.Fragment, { children: [
                /* @__PURE__ */ e.jsxDEV(
                  "div",
                  {
                    className: "fixed inset-0 z-40",
                    onClick: () => oe(!1)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                    lineNumber: 440,
                    columnNumber: 23
                  },
                  void 0
                ),
                /* @__PURE__ */ e.jsxDEV("div", { className: "absolute bottom-full right-1/2 translate-x-1/2 mb-3.5 bg-white border border-gray-200 rounded-2xl shadow-xl p-4 z-50 flex flex-col gap-3.5 min-w-[280px] animate-in fade-in slide-in-from-bottom-2 duration-100", children: [
                  /* @__PURE__ */ e.jsxDEV("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ e.jsxDEV("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsxDEV("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: "画笔颜色" }, void 0, !1, {
                        fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                        lineNumber: 448,
                        columnNumber: 29
                      }, void 0),
                      /* @__PURE__ */ e.jsxDEV("span", { className: "text-[10px] font-medium text-slate-500", children: ((W = Ce.find((r) => r.value === T)) == null ? void 0 : W.name) || T }, void 0, !1, {
                        fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                        lineNumber: 451,
                        columnNumber: 29
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                      lineNumber: 447,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ e.jsxDEV("div", { className: "flex items-center gap-2", children: Ce.map((r) => {
                      const E = T.toLowerCase() === r.value.toLowerCase();
                      return /* @__PURE__ */ e.jsxDEV(
                        "button",
                        {
                          id: `btn-popover-color-${r.name.toLowerCase()}`,
                          type: "button",
                          onClick: () => Q(r.value),
                          className: `w-6 h-6 rounded-full border transition-all duration-150 relative flex items-center justify-center cursor-pointer ${E ? "border-slate-800 scale-110 ring-2 ring-indigo-500/20" : "border-slate-200 hover:border-slate-400 hover:scale-105"}`,
                          style: { backgroundColor: r.value },
                          title: r.name,
                          children: E && /* @__PURE__ */ e.jsxDEV(
                            Qe,
                            {
                              size: 12,
                              className: r.value === "#FFFFFF" ? "text-slate-800" : "text-white"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                              lineNumber: 473,
                              columnNumber: 37
                            },
                            void 0
                          )
                        },
                        r.value,
                        !1,
                        {
                          fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                          lineNumber: 459,
                          columnNumber: 33
                        },
                        void 0
                      );
                    }) }, void 0, !1, {
                      fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                      lineNumber: 455,
                      columnNumber: 27
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                    lineNumber: 446,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ e.jsxDEV("div", { className: "h-px bg-gray-100" }, void 0, !1, {
                    fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                    lineNumber: 485,
                    columnNumber: 25
                  }, void 0),
                  /* @__PURE__ */ e.jsxDEV("div", { className: "flex flex-col gap-2", children: [
                    /* @__PURE__ */ e.jsxDEV("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ e.jsxDEV("span", { className: "text-[10px] font-bold text-slate-400 uppercase tracking-wider", children: "画笔粗细" }, void 0, !1, {
                        fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                        lineNumber: 490,
                        columnNumber: 29
                      }, void 0),
                      /* @__PURE__ */ e.jsxDEV("span", { className: "text-[10px] font-medium text-slate-500", children: ((O = _e.find((r) => r.value === $)) == null ? void 0 : O.label) || `${$}px` }, void 0, !1, {
                        fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                        lineNumber: 493,
                        columnNumber: 29
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                      lineNumber: 489,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ e.jsxDEV("div", { className: "flex items-center gap-1 bg-slate-50 p-0.5 rounded-lg border border-slate-100", children: _e.map((r) => {
                      const E = $ === r.value;
                      return /* @__PURE__ */ e.jsxDEV(
                        "button",
                        {
                          id: `btn-popover-stroke-${r.value}`,
                          type: "button",
                          onClick: () => ne(r.value),
                          className: `py-1 rounded-md text-[11px] font-semibold transition-all duration-150 cursor-pointer flex-1 text-center ${E ? "bg-white text-slate-800 shadow-xs border border-slate-200/60" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"}`,
                          children: /* @__PURE__ */ e.jsxDEV("div", { className: "flex flex-col items-center justify-center gap-1", children: [
                            /* @__PURE__ */ e.jsxDEV(
                              "div",
                              {
                                className: "rounded-full",
                                style: {
                                  width: `${Math.max(2, r.value * 0.7)}px`,
                                  height: `${Math.max(2, r.value * 0.7)}px`,
                                  backgroundColor: E ? T : "#94A3B8"
                                }
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                                lineNumber: 513,
                                columnNumber: 37
                              },
                              void 0
                            ),
                            /* @__PURE__ */ e.jsxDEV("span", { className: "text-[9px]", children: r.label }, void 0, !1, {
                              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                              lineNumber: 521,
                              columnNumber: 37
                            }, void 0)
                          ] }, void 0, !0, {
                            fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                            lineNumber: 512,
                            columnNumber: 35
                          }, void 0)
                        },
                        r.value,
                        !1,
                        {
                          fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                          lineNumber: 501,
                          columnNumber: 33
                        },
                        void 0
                      );
                    }) }, void 0, !1, {
                      fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                      lineNumber: 497,
                      columnNumber: 27
                    }, void 0)
                  ] }, void 0, !0, {
                    fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                    lineNumber: 488,
                    columnNumber: 25
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 444,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 438,
                columnNumber: 21
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 406,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ e.jsxDEV("div", { className: "w-px h-5 bg-gray-200 mx-1" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 534,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-undo",
                type: "button",
                disabled: k.past.length === 0,
                onClick: y,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                title: "撤销 (Ctrl+Z)",
                children: /* @__PURE__ */ e.jsxDEV(ht, { size: 15 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 545,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 537,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-redo",
                type: "button",
                disabled: k.future.length === 0,
                onClick: G,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                title: "重做 (Ctrl+Y)",
                children: /* @__PURE__ */ e.jsxDEV(mt, { size: 15 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 555,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 547,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV("div", { className: "w-px h-5 bg-gray-200 mx-1" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 559,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-download-png-direct",
                type: "button",
                onClick: n,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer flex items-center justify-center",
                title: "保存标注后的图片",
                children: /* @__PURE__ */ e.jsxDEV(tt, { size: 15 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 569,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 562,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV("div", { className: "w-px h-5 bg-gray-200 mx-1" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 573,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-reset-editor",
                type: "button",
                onClick: p,
                className: "p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer flex items-center justify-center",
                title: "关闭图片",
                children: /* @__PURE__ */ e.jsxDEV(Ve, { size: 15 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 583,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 576,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
            lineNumber: 285,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("div", { className: "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200/80 rounded-2xl px-3.5 py-1.5 flex items-center gap-2.5 pointer-events-auto", children: [
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-zoom-out",
                type: "button",
                onClick: Z,
                disabled: _ <= 50,
                className: "p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors",
                title: "缩小",
                children: /* @__PURE__ */ e.jsxDEV(wt, { size: 14 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 597,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 589,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ e.jsxDEV("span", { className: "text-[11px] font-bold text-slate-700 min-w-[34px] text-center font-mono", children: [
              _,
              "%"
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
              lineNumber: 599,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-zoom-in",
                type: "button",
                onClick: re,
                disabled: _ >= 250,
                className: "p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors",
                title: "放大",
                children: /* @__PURE__ */ e.jsxDEV(yt, { size: 14 }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                  lineNumber: 610,
                  columnNumber: 19
                }, void 0)
              },
              void 0,
              !1,
              {
                fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                lineNumber: 602,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
            lineNumber: 588,
            columnNumber: 15
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
          lineNumber: 283,
          columnNumber: 13
        }, void 0)
      ] }, void 0, !0, {
        fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
        lineNumber: 261,
        columnNumber: 9
      }, void 0)
    ] }, void 0, !0, {
      fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
      lineNumber: 220,
      columnNumber: 7
    }, void 0)
  ] }, void 0, !0, {
    fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
    lineNumber: 209,
    columnNumber: 5
  }, void 0);
};
export {
  kt as Canvas,
  St as ImageEditor,
  me as createInitialHistory,
  Ct as downloadDataUrl,
  Mt as downloadJson,
  Vt as exportAnnotatedImage,
  fe as pushHistoryState,
  Dt as redoHistory,
  jt as undoHistory
};
