import Xe, { forwardRef as Re, createElement as be, useRef as ie, useState as I, useEffect as fe, useMemo as ke } from "react";
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
var je;
function He() {
  if (je) return de;
  je = 1;
  var c = Symbol.for("react.fragment");
  return de.Fragment = c, de.jsxDEV = void 0, de;
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
var De;
function Ue() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && (function() {
    function c(r) {
      if (r == null) return null;
      if (typeof r == "function")
        return r.$$typeof === p ? null : r.displayName || r.name || null;
      if (typeof r == "string") return r;
      switch (r) {
        case P:
          return "Fragment";
        case oe:
          return "Profiler";
        case W:
          return "StrictMode";
        case S:
          return "Suspense";
        case H:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof r == "object")
        switch (typeof r.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), r.$$typeof) {
          case M:
            return "Portal";
          case Y:
            return r.displayName || "Context";
          case ae:
            return (r._context.displayName || "Context") + ".Consumer";
          case V:
            var f = r.render;
            return r = r.displayName, r || (r = f.displayName || f.name || "", r = r !== "" ? "ForwardRef(" + r + ")" : "ForwardRef"), r;
          case se:
            return f = r.displayName || null, f !== null ? f : c(r.type) || "Memo";
          case Q:
            f = r._payload, r = r._init;
            try {
              return c(r(f));
            } catch {
            }
        }
      return null;
    }
    function u(r) {
      return "" + r;
    }
    function h(r) {
      try {
        u(r);
        var f = !1;
      } catch {
        f = !0;
      }
      if (f) {
        f = console;
        var b = f.error, C = typeof Symbol == "function" && Symbol.toStringTag && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return b.call(
          f,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          C
        ), u(r);
      }
    }
    function E(r) {
      if (r === P) return "<>";
      if (typeof r == "object" && r !== null && r.$$typeof === Q)
        return "<...>";
      try {
        var f = c(r);
        return f ? "<" + f + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function _() {
      var r = O.A;
      return r === null ? null : r.getOwner();
    }
    function w() {
      return Error("react-stack-top-frame");
    }
    function m(r) {
      if (te.call(r, "key")) {
        var f = Object.getOwnPropertyDescriptor(r, "key").get;
        if (f && f.isReactWarning) return !1;
      }
      return r.key !== void 0;
    }
    function d(r, f) {
      function b() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          f
        ));
      }
      b.isReactWarning = !0, Object.defineProperty(r, "key", {
        get: b,
        configurable: !0
      });
    }
    function D() {
      var r = c(this.type);
      return x[r] || (x[r] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), r = this.props.ref, r !== void 0 ? r : null;
    }
    function N(r, f, b, C, z, X) {
      var i = b.ref;
      return r = {
        $$typeof: ne,
        type: r,
        key: f,
        props: b,
        _owner: C
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(r, "ref", {
        enumerable: !1,
        get: D
      }) : Object.defineProperty(r, "ref", { enumerable: !1, value: null }), r._store = {}, Object.defineProperty(r._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(r, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(r, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: z
      }), Object.defineProperty(r, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: X
      }), Object.freeze && (Object.freeze(r.props), Object.freeze(r)), r;
    }
    function k(r, f, b, C, z, X) {
      var i = f.children;
      if (i !== void 0)
        if (C)
          if (q(i)) {
            for (C = 0; C < i.length; C++)
              A(i[C]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(i);
      if (te.call(f, "key")) {
        i = c(r);
        var v = Object.keys(f).filter(function(re) {
          return re !== "key";
        });
        C = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", Z[i + C] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          C,
          i,
          v,
          i
        ), Z[i + C] = !0);
      }
      if (i = null, b !== void 0 && (h(b), i = "" + b), m(f) && (h(f.key), i = "" + f.key), "key" in f) {
        b = {};
        for (var l in f)
          l !== "key" && (b[l] = f[l]);
      } else b = f;
      return i && d(
        b,
        typeof r == "function" ? r.displayName || r.name || "Unknown" : r
      ), N(
        r,
        i,
        b,
        _(),
        z,
        X
      );
    }
    function A(r) {
      G(r) ? r._store && (r._store.validated = 1) : typeof r == "object" && r !== null && r.$$typeof === Q && (r._payload.status === "fulfilled" ? G(r._payload.value) && r._payload.value._store && (r._payload.value._store.validated = 1) : r._store && (r._store.validated = 1));
    }
    function G(r) {
      return typeof r == "object" && r !== null && r.$$typeof === ne;
    }
    var T = Xe, ne = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), oe = Symbol.for("react.profiler"), ae = Symbol.for("react.consumer"), Y = Symbol.for("react.context"), V = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), se = Symbol.for("react.memo"), Q = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), p = Symbol.for("react.client.reference"), O = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = Object.prototype.hasOwnProperty, q = Array.isArray, K = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      react_stack_bottom_frame: function(r) {
        return r();
      }
    };
    var U, x = {}, J = T.react_stack_bottom_frame.bind(
      T,
      w
    )(), j = K(E(w)), Z = {};
    ce.Fragment = P, ce.jsxDEV = function(r, f, b, C) {
      var z = 1e4 > O.recentlyCreatedOwnerStacks++;
      return k(
        r,
        f,
        b,
        C,
        z ? Error("react-stack-top-frame") : J,
        z ? K(E(r)) : j
      );
    };
  })()), ce;
}
var Ve;
function Be() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? le.exports = He() : le.exports = Ue()), le.exports;
}
var e = Be();
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qe = (c) => c.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Je = (c) => c.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (u, h, E) => E ? E.toUpperCase() : h.toLowerCase()
), Ce = (c) => {
  const u = Je(c);
  return u.charAt(0).toUpperCase() + u.slice(1);
}, Fe = (...c) => c.filter((u, h, E) => !!u && u.trim() !== "" && E.indexOf(u) === h).join(" ").trim(), Ze = (c) => {
  for (const u in c)
    if (u.startsWith("aria-") || u === "role" || u === "title")
      return !0;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ke = {
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
const Ge = Re(
  ({
    color: c = "currentColor",
    size: u = 24,
    strokeWidth: h = 2,
    absoluteStrokeWidth: E,
    className: _ = "",
    children: w,
    iconNode: m,
    ...d
  }, D) => be(
    "svg",
    {
      ref: D,
      ...Ke,
      width: u,
      height: u,
      stroke: c,
      strokeWidth: E ? Number(h) * 24 / Number(u) : h,
      className: Fe("lucide", _),
      ...!w && !Ze(d) && { "aria-hidden": "true" },
      ...d
    },
    [
      ...m.map(([N, k]) => be(N, k)),
      ...Array.isArray(w) ? w : [w]
    ]
  )
);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $ = (c, u) => {
  const h = Re(
    ({ className: E, ..._ }, w) => be(Ge, {
      ref: w,
      iconNode: u,
      className: Fe(
        `lucide-${qe(Ce(c))}`,
        `lucide-${c}`,
        E
      ),
      ..._
    })
  );
  return h.displayName = Ce(c), h;
};
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qe = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
], et = $("arrow-up-right", Qe);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tt = [
  ["path", { d: "m11 10 3 3", key: "fzmg1i" }],
  [
    "path",
    { d: "M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z", key: "p4q2r7" }
  ],
  ["path", { d: "M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031", key: "wy6l02" }]
], rt = $("brush", tt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nt = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]], ot = $("check", nt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const at = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
], st = $("download", at);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const it = [
  [
    "path",
    {
      d: "M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21",
      key: "g5wo59"
    }
  ],
  ["path", { d: "m5.082 11.09 8.828 8.828", key: "1wx5vj" }]
], lt = $("eraser", it);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const dt = [
  ["line", { x1: "4", x2: "20", y1: "9", y2: "9", key: "4lhtct" }],
  ["line", { x1: "4", x2: "20", y1: "15", y2: "15", key: "vyu0kd" }],
  ["line", { x1: "10", x2: "8", y1: "3", y2: "21", key: "1ggp8o" }],
  ["line", { x1: "16", x2: "14", y1: "3", y2: "21", key: "weycgp" }]
], ct = $("hash", dt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const mt = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
], ut = $("image", mt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const pt = [
  ["path", { d: "M12.586 12.586 19 19", key: "ea5xo7" }],
  [
    "path",
    {
      d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z",
      key: "277e5u"
    }
  ]
], ft = $("mouse-pointer", pt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xt = [
  ["path", { d: "M21 7v6h-6", key: "3ptur4" }],
  ["path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", key: "1kgawr" }]
], bt = $("redo", xt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gt = [
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
], $e = $("sparkles", gt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ht = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]
], Nt = $("square", ht);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Et = [
  ["path", { d: "M12 4v16", key: "1654pz" }],
  ["path", { d: "M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2", key: "e0r10z" }],
  ["path", { d: "M9 20h6", key: "s66wpe" }]
], vt = $("type", Et);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const yt = [
  ["path", { d: "M3 7v6h6", key: "1v2h90" }],
  ["path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", key: "1r6uu6" }]
], It = $("undo", yt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const wt = [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m17 8-5-5-5 5", key: "7q97r8" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }]
], ge = $("upload", wt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kt = [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
], _e = $("x", kt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jt = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "11", x2: "11", y1: "8", y2: "14", key: "1vmskp" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Dt = $("zoom-in", jt);
/**
 * @license lucide-react v0.546.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vt = [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["line", { x1: "21", x2: "16.65", y1: "21", y2: "16.65", key: "13gj7c" }],
  ["line", { x1: "8", x2: "14", y1: "11", y2: "11", key: "durymu" }]
], Ct = $("zoom-out", Vt), _t = ({
  imageSrc: c,
  annotations: u,
  onAddAnnotation: h,
  onUpdateAnnotation: E,
  onDeleteAnnotation: _,
  selectedId: w,
  onSelectId: m,
  activeTool: d,
  selectedColor: D,
  selectedStrokeWidth: N,
  zoom: k,
  onUploadImage: A,
  onLoadSample: G
}) => {
  var Ee, ve, ye, Ie, we;
  const T = ie(null), ne = ie(null), [M, P] = I(null);
  fe(() => {
    if (!c) {
      P(null);
      return;
    }
    const t = new Image();
    t.src = c, t.onload = () => {
      P({
        width: t.naturalWidth,
        height: t.naturalHeight
      });
    };
  }, [c]);
  const [W, oe] = I({ width: 800, height: 600 }), [ae, Y] = I(!1), [V, S] = I(!1), [H, se] = I(null), [Q, ee] = I([]), [p, O] = I(null), [te, q] = I("none"), [K, U] = I(null), [x, J] = I(null), [j, Z] = I(null), [r, f] = I(""), [b, C] = I(null), z = ie(null), X = ie(!1);
  fe(() => {
    if (!T.current) return;
    const t = T.current, n = () => {
      oe({
        width: Math.max(100, t.clientWidth - 48),
        // pad sides
        height: Math.max(100, t.clientHeight - 136)
        // pad top (24px) + bottom (112px) to clear toolbar
      });
    };
    n();
    const a = new ResizeObserver(() => {
      n();
    });
    return a.observe(t), () => a.disconnect();
  }, []);
  const i = (t) => {
    const n = t.currentTarget;
    P({
      width: n.naturalWidth,
      height: n.naturalHeight
    });
  }, v = ke(() => {
    if (!M) return { width: 0, height: 0 };
    const t = M.width / M.height;
    let n = W.width, a = W.width / t;
    a > W.height && (a = W.height, n = W.height * t);
    const s = k / 100;
    return {
      width: n * s,
      height: a * s
    };
  }, [M, W, k]), l = ke(() => !M || v.width === 0 ? 1 : v.width / M.width, [M, v]), re = (t) => {
    const n = t.currentTarget.getBoundingClientRect(), a = t.clientX - n.left, s = t.clientY - n.top;
    return {
      x: a / l,
      y: s / l
    };
  }, ze = (t) => {
    t.preventDefault(), Y(!0);
  }, Te = () => {
    Y(!1);
  }, Ae = (t) => {
    if (t.preventDefault(), Y(!1), t.dataTransfer.files && t.dataTransfer.files[0]) {
      const n = t.dataTransfer.files[0];
      n.type.startsWith("image/") && A(n);
    }
  };
  fe(() => {
    if (j && z.current) {
      const t = setTimeout(() => {
        z.current && (z.current.focus(), z.current.select());
      }, 50);
      return () => clearTimeout(t);
    }
  }, [j]);
  const ue = () => {
    if (!j) return;
    const t = r.trim();
    if (j === "new_temp_text") {
      if (t !== "") {
        const n = `ann_${Date.now()}`, a = {
          id: n,
          type: "text",
          color: D,
          strokeWidth: N,
          text: t,
          x: (b == null ? void 0 : b.x) ?? 0,
          y: (b == null ? void 0 : b.y) ?? 0,
          fontSize: 18 / l
          // target visual font size: 18px on screen
        };
        h(a), m(n);
      }
      C(null);
    } else {
      const n = u.find((a) => a.id === j);
      n && n.type === "text" && (t === "" ? _(j) : E({
        ...n,
        text: t
      }));
    }
    Z(null);
  }, Ye = () => {
    X.current || ue();
  }, Oe = (t) => {
    t.nativeEvent.isComposing || X.current || t.keyCode === 229 || t.key === "Escape" && ue();
  }, he = (t) => {
    for (let n = u.length - 1; n >= 0; n--) {
      const a = u[n];
      let s = !1;
      if (a.type === "rectangle") {
        const o = 10 / l, g = a.x, y = a.x + a.width, R = a.y, L = a.y + a.height;
        t.x >= g - o && t.x <= y + o && t.y >= R - o && t.y <= L + o && (s = !0);
      } else if (a.type === "marker")
        Math.hypot(t.x - a.x, t.y - a.y) <= a.size * 2 && (s = !0);
      else if (a.type === "text") {
        const o = a.text.split(`
`), y = o.reduce((L, F) => Math.max(L, F.length), 0) * a.fontSize * 0.7 + 12 / l, R = o.length * a.fontSize * 1.35 + 12 / l;
        t.x >= a.x - 6 / l && t.x <= a.x + y && t.y >= a.y - 6 / l && t.y <= a.y + R && (s = !0);
      } else a.type === "arrow" ? Ne(t, { x: a.startX, y: a.startY }, { x: a.endX, y: a.endY }) <= 16 / l && (s = !0) : a.type === "brush" && (s = a.points.some((o) => Math.hypot(t.x - o.x, t.y - o.y) <= 16 / l));
      if (s) {
        _(a.id);
        break;
      }
    }
  }, We = (t) => {
    if (!c || !M) return;
    if (j) {
      ue();
      return;
    }
    const n = re(t);
    if (d === "text") {
      const s = u.find((o) => {
        if (o.type !== "text") return !1;
        const g = o.text.split(`
`), R = g.reduce((B, pe) => Math.max(B, pe.length), 0) * o.fontSize * 0.7, L = g.length * o.fontSize * 1.35, F = 8 / l;
        return n.x >= o.x - F && n.x <= o.x + R + F && n.y >= o.y - F && n.y <= o.y + L + F;
      });
      if (s) {
        Z(s.id), f(s.text), m(s.id);
        return;
      }
    }
    if (d === "eraser") {
      S(!0), he(n);
      return;
    }
    if (d === "select") {
      if (w) {
        const s = u.find((o) => o.id === w);
        if (s) {
          if (s.type === "rectangle") {
            const o = s.x + s.width, g = s.y + s.height;
            if (Math.hypot(n.x - o, n.y - g) * l < 10) {
              q("resize-br"), U(n), J(s);
              return;
            }
          }
          if (s.type === "arrow") {
            const o = Math.hypot(n.x - s.startX, n.y - s.startY) * l, g = Math.hypot(n.x - s.endX, n.y - s.endY) * l;
            if (o < 10) {
              q("arrow-start"), U(n), J(s);
              return;
            }
            if (g < 10) {
              q("arrow-end"), U(n), J(s);
              return;
            }
          }
        }
      }
      for (let s = u.length - 1; s >= 0; s--) {
        const o = u[s];
        let g = !1;
        if (o.type === "rectangle") {
          const y = 8 / l, R = o.x, L = o.x + o.width, F = o.y, B = o.y + o.height;
          n.x >= R - y && n.x <= L + y && n.y >= F - y && n.y <= B + y && (g = !0);
        } else if (o.type === "marker")
          Math.hypot(n.x - o.x, n.y - o.y) <= o.size * 1.5 && (g = !0);
        else if (o.type === "text") {
          const y = o.text.length * o.fontSize * 0.65, R = o.fontSize * 1.3;
          n.x >= o.x && n.x <= o.x + y && n.y >= o.y && n.y <= o.y + R && (g = !0);
        } else o.type === "arrow" ? Ne(n, { x: o.startX, y: o.startY }, { x: o.endX, y: o.endY }) <= 12 / l && (g = !0) : o.type === "brush" && (g = o.points.some((y) => Math.hypot(n.x - y.x, n.y - y.y) <= 12 / l));
        if (g) {
          m(o.id), q("move"), U(n), J(o);
          return;
        }
      }
      m(null);
      return;
    }
    S(!0), se(n);
    const a = `ann_${Date.now()}`;
    switch (d) {
      case "rectangle": {
        const s = {
          id: a,
          type: "rectangle",
          color: D,
          strokeWidth: N,
          x: n.x,
          y: n.y,
          width: 0,
          height: 0
        };
        O(s);
        break;
      }
      case "brush": {
        const s = {
          id: a,
          type: "brush",
          color: D,
          strokeWidth: N,
          points: [n]
        };
        ee([n]), O(s);
        break;
      }
      case "arrow": {
        const s = {
          id: a,
          type: "arrow",
          color: D,
          strokeWidth: N,
          startX: n.x,
          startY: n.y,
          endX: n.x,
          endY: n.y
        };
        O(s);
        break;
      }
      case "marker": {
        const s = u.filter((y) => y.type === "marker"), o = s.length > 0 ? Math.max(...s.map((y) => y.number)) + 1 : 1, g = {
          id: a,
          type: "marker",
          color: D,
          strokeWidth: N,
          number: o,
          x: n.x,
          y: n.y,
          size: 16 / l
          // target visual size: 16px on screen
        };
        h(g), S(!1);
        break;
      }
      case "text": {
        t.preventDefault(), C(n), Z("new_temp_text"), f(""), S(!1);
        break;
      }
    }
  }, Le = (t) => {
    if (!c || !M) return;
    const n = re(t);
    if (d === "eraser") {
      V && he(n);
      return;
    }
    if (d === "select" && K && x) {
      const a = n.x - K.x, s = n.y - K.y;
      switch (te) {
        case "move": {
          x.type === "rectangle" ? E({
            ...x,
            x: x.x + a,
            y: x.y + s
          }) : x.type === "arrow" ? E({
            ...x,
            startX: x.startX + a,
            startY: x.startY + s,
            endX: x.endX + a,
            endY: x.endY + s
          }) : x.type === "marker" ? E({
            ...x,
            x: x.x + a,
            y: x.y + s
          }) : x.type === "text" ? E({
            ...x,
            x: x.x + a,
            y: x.y + s
          }) : x.type === "brush" && E({
            ...x,
            points: x.points.map((o) => ({
              x: o.x + a,
              y: o.y + s
            }))
          });
          break;
        }
        case "resize-br": {
          if (x.type === "rectangle") {
            const o = Math.max(5 / l, x.width + a), g = Math.max(5 / l, x.height + s);
            E({
              ...x,
              width: o,
              height: g
            });
          }
          break;
        }
        case "arrow-start": {
          x.type === "arrow" && E({
            ...x,
            startX: x.startX + a,
            startY: x.startY + s
          });
          break;
        }
        case "arrow-end": {
          x.type === "arrow" && E({
            ...x,
            endX: x.endX + a,
            endY: x.endY + s
          });
          break;
        }
      }
      return;
    }
    if (!(!V || !H || !p))
      switch (d) {
        case "rectangle": {
          const a = Math.min(H.x, n.x), s = Math.min(H.y, n.y), o = Math.abs(n.x - H.x), g = Math.abs(n.y - H.y);
          O({
            ...p,
            type: "rectangle",
            x: a,
            y: s,
            width: o,
            height: g
          });
          break;
        }
        case "brush": {
          const a = [...Q, n];
          ee(a), O({
            ...p,
            type: "brush",
            points: a
          });
          break;
        }
        case "arrow": {
          O({
            ...p,
            type: "arrow",
            startX: H.x,
            startY: H.y,
            endX: n.x,
            endY: n.y
          });
          break;
        }
      }
  }, Pe = () => {
    if (d === "eraser") {
      S(!1);
      return;
    }
    if (d === "select") {
      q("none"), U(null), J(null);
      return;
    }
    if (V) {
      if (S(!1), p) {
        let t = !0;
        p.type === "rectangle" ? p.width < 5 / l && p.height < 5 / l && (t = !1) : p.type === "arrow" ? Math.hypot(
          p.endX - p.startX,
          p.endY - p.startY
        ) < 5 / l && (t = !1) : p.type === "brush" && p.points.length < 2 && (t = !1), t && (h(p), m(p.id));
      }
      O(null), se(null), ee([]);
    }
  };
  function Ne(t, n, a) {
    const s = Math.hypot(n.x - a.x, n.y - a.y) ** 2;
    if (s === 0) return Math.hypot(t.x - n.x, t.y - n.y);
    let o = ((t.x - n.x) * (a.x - n.x) + (t.y - n.y) * (a.y - n.y)) / s;
    return o = Math.max(0, Math.min(1, o)), Math.hypot(t.x - (n.x + o * (a.x - n.x)), t.y - (n.y + o * (a.y - n.y)));
  }
  return /* @__PURE__ */ e.jsxDEV(
    "div",
    {
      ref: T,
      className: "flex-1 h-full flex items-center justify-center pt-6 px-6 pb-28 bg-slate-100 overflow-auto relative",
      onDragOver: ze,
      onDragLeave: Te,
      onDrop: Ae,
      children: [
        ae && /* @__PURE__ */ e.jsxDEV("div", { className: "absolute inset-0 bg-indigo-600/5 backdrop-blur-sm border-2 border-dashed border-indigo-400 z-50 flex items-center justify-center pointer-events-none", children: /* @__PURE__ */ e.jsxDEV("div", { className: "bg-white border border-gray-200 p-6 rounded-2xl shadow-xl flex flex-col items-center gap-3 text-slate-800 max-w-sm text-center", children: [
          /* @__PURE__ */ e.jsxDEV("div", { className: "w-12 h-12 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center animate-bounce", children: /* @__PURE__ */ e.jsxDEV(ge, { size: 24 }, void 0, !1, {
            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
            lineNumber: 717,
            columnNumber: 15
          }, void 0) }, void 0, !1, {
            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
            lineNumber: 716,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("h3", { className: "font-semibold text-lg", children: "拖放图片至此" }, void 0, !1, {
            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
            lineNumber: 719,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ e.jsxDEV("p", { className: "text-slate-500 text-sm", children: "松开鼠标即可立即载入并开始标注图片" }, void 0, !1, {
            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
            lineNumber: 720,
            columnNumber: 13
          }, void 0)
        ] }, void 0, !0, {
          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
          lineNumber: 715,
          columnNumber: 11
        }, void 0) }, void 0, !1, {
          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
          lineNumber: 714,
          columnNumber: 9
        }, void 0),
        c && M ? /* @__PURE__ */ e.jsxDEV(
          "div",
          {
            className: "relative shadow-lg border border-gray-200 rounded-xl select-none bg-white",
            style: {
              width: `${v.width}px`,
              height: `${v.height}px`,
              transition: V || te !== "none" ? "none" : "width 0.2s, height 0.2s"
            },
            children: [
              /* @__PURE__ */ e.jsxDEV(
                "img",
                {
                  ref: ne,
                  src: c,
                  alt: "Annotated",
                  className: "absolute inset-0 w-full h-full object-fill rounded-xl pointer-events-none",
                  onLoad: i
                },
                void 0,
                !1,
                {
                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                  lineNumber: 735,
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
                    cursor: d === "select" ? "default" : d === "text" ? "text" : d === "eraser" ? "pointer" : "crosshair"
                  },
                  onMouseDown: We,
                  onMouseMove: Le,
                  onMouseUp: Pe,
                  children: [
                    u.map((t) => {
                      if (j === t.id) return null;
                      const n = w === t.id;
                      switch (t.type) {
                        case "rectangle":
                          return /* @__PURE__ */ e.jsxDEV("g", { children: [
                            /* @__PURE__ */ e.jsxDEV(
                              "rect",
                              {
                                id: `rect-${t.id}`,
                                x: t.x * l,
                                y: t.y * l,
                                width: t.width * l,
                                height: t.height * l,
                                stroke: t.color,
                                strokeWidth: t.strokeWidth,
                                fill: "transparent",
                                className: "transition-all"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                lineNumber: 772,
                                columnNumber: 23
                              },
                              void 0
                            ),
                            n && d === "select" && /* @__PURE__ */ e.jsxDEV(e.Fragment, { children: [
                              /* @__PURE__ */ e.jsxDEV(
                                "rect",
                                {
                                  x: t.x * l - 2,
                                  y: t.y * l - 2,
                                  width: t.width * l + 4,
                                  height: t.height * l + 4,
                                  stroke: "#818CF8",
                                  strokeWidth: 1,
                                  strokeDasharray: "4 4",
                                  fill: "transparent"
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                  lineNumber: 786,
                                  columnNumber: 27
                                },
                                void 0
                              ),
                              /* @__PURE__ */ e.jsxDEV(
                                "circle",
                                {
                                  cx: (t.x + t.width) * l,
                                  cy: (t.y + t.height) * l,
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
                                  lineNumber: 797,
                                  columnNumber: 27
                                },
                                void 0
                              )
                            ] }, void 0, !0, {
                              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                              lineNumber: 785,
                              columnNumber: 25
                            }, void 0)
                          ] }, t.id, !0, {
                            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                            lineNumber: 771,
                            columnNumber: 21
                          }, void 0);
                        case "brush": {
                          if (t.points.length < 2) return null;
                          const a = t.points.map((s, o) => `${o === 0 ? "M" : "L"} ${s.x * l} ${s.y * l}`).join(" ");
                          return /* @__PURE__ */ e.jsxDEV("g", { children: [
                            /* @__PURE__ */ e.jsxDEV(
                              "path",
                              {
                                id: `brush-${t.id}`,
                                d: a,
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
                                lineNumber: 819,
                                columnNumber: 23
                              },
                              void 0
                            ),
                            n && d === "select" && /* @__PURE__ */ e.jsxDEV(
                              "path",
                              {
                                d: a,
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
                                lineNumber: 829,
                                columnNumber: 25
                              },
                              void 0
                            )
                          ] }, t.id, !0, {
                            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                            lineNumber: 818,
                            columnNumber: 21
                          }, void 0);
                        }
                        case "arrow": {
                          const a = t.startX * l, s = t.startY * l, o = t.endX * l, g = t.endY * l, y = Math.atan2(g - s, o - a), R = Math.max(12, t.strokeWidth * 3), L = o - R * Math.cos(y - Math.PI / 6), F = g - R * Math.sin(y - Math.PI / 6), B = o - R * Math.cos(y + Math.PI / 6), pe = g - R * Math.sin(y + Math.PI / 6);
                          return /* @__PURE__ */ e.jsxDEV("g", { children: [
                            /* @__PURE__ */ e.jsxDEV(
                              "line",
                              {
                                id: `arrow-shaft-${t.id}`,
                                x1: a,
                                y1: s,
                                x2: o,
                                y2: g,
                                stroke: t.color,
                                strokeWidth: t.strokeWidth,
                                strokeLinecap: "round"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                lineNumber: 860,
                                columnNumber: 23
                              },
                              void 0
                            ),
                            /* @__PURE__ */ e.jsxDEV(
                              "polygon",
                              {
                                id: `arrow-tip-${t.id}`,
                                points: `${o},${g} ${L},${F} ${B},${pe}`,
                                fill: t.color
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                lineNumber: 871,
                                columnNumber: 23
                              },
                              void 0
                            ),
                            n && d === "select" && /* @__PURE__ */ e.jsxDEV(e.Fragment, { children: [
                              /* @__PURE__ */ e.jsxDEV(
                                "line",
                                {
                                  x1: a,
                                  y1: s,
                                  x2: o,
                                  y2: g,
                                  stroke: "#818CF8",
                                  strokeWidth: t.strokeWidth + 6,
                                  strokeOpacity: 0.15,
                                  strokeLinecap: "round"
                                },
                                void 0,
                                !1,
                                {
                                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                  lineNumber: 880,
                                  columnNumber: 27
                                },
                                void 0
                              ),
                              /* @__PURE__ */ e.jsxDEV(
                                "circle",
                                {
                                  cx: a,
                                  cy: s,
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
                                  lineNumber: 891,
                                  columnNumber: 27
                                },
                                void 0
                              ),
                              /* @__PURE__ */ e.jsxDEV(
                                "circle",
                                {
                                  cx: o,
                                  cy: g,
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
                                  lineNumber: 901,
                                  columnNumber: 27
                                },
                                void 0
                              )
                            ] }, void 0, !0, {
                              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                              lineNumber: 879,
                              columnNumber: 25
                            }, void 0)
                          ] }, t.id, !0, {
                            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                            lineNumber: 858,
                            columnNumber: 21
                          }, void 0);
                        }
                        case "marker": {
                          const a = t.x * l, s = t.y * l, o = t.size * l;
                          return /* @__PURE__ */ e.jsxDEV("g", { id: `marker-${t.id}`, children: [
                            n && d === "select" && /* @__PURE__ */ e.jsxDEV(
                              "circle",
                              {
                                cx: a,
                                cy: s,
                                r: o + 6,
                                fill: "transparent",
                                stroke: "#818CF8",
                                strokeWidth: 1.5,
                                strokeDasharray: "3 3"
                              },
                              void 0,
                              !1,
                              {
                                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                lineNumber: 923,
                                columnNumber: 25
                              },
                              void 0
                            ),
                            /* @__PURE__ */ e.jsxDEV("circle", { cx: a, cy: s, r: o, fill: t.color, stroke: "#FFFFFF", strokeWidth: 2 }, void 0, !1, {
                              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                              lineNumber: 934,
                              columnNumber: 23
                            }, void 0),
                            /* @__PURE__ */ e.jsxDEV(
                              "text",
                              {
                                x: a,
                                y: s,
                                fill: "#FFFFFF",
                                fontSize: `${o * 1.05}px`,
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
                                lineNumber: 936,
                                columnNumber: 23
                              },
                              void 0
                            )
                          ] }, t.id, !0, {
                            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                            lineNumber: 921,
                            columnNumber: 21
                          }, void 0);
                        }
                        case "text": {
                          const a = t.x * l, s = t.y * l, o = t.fontSize * l, g = t.text.split(`
`), R = g.reduce((F, B) => Math.max(F, B.length), 0) * o * 0.7 + 16, L = g.length * o * 1.35 + 16;
                          return /* @__PURE__ */ e.jsxDEV(
                            "g",
                            {
                              id: `text-${t.id}`,
                              onDoubleClick: (F) => {
                                F.stopPropagation(), F.preventDefault(), Z(t.id), f(t.text);
                              },
                              style: { cursor: d === "select" ? "pointer" : d === "text" ? "text" : "crosshair" },
                              children: [
                                /* @__PURE__ */ e.jsxDEV(
                                  "rect",
                                  {
                                    x: a - 8,
                                    y: s - 8,
                                    width: R,
                                    height: L,
                                    fill: "transparent",
                                    pointerEvents: "all"
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                    lineNumber: 973,
                                    columnNumber: 23
                                  },
                                  void 0
                                ),
                                n && d === "select" && /* @__PURE__ */ e.jsxDEV(
                                  "rect",
                                  {
                                    x: a - 4,
                                    y: s - 4,
                                    width: R - 8,
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
                                    lineNumber: 982,
                                    columnNumber: 25
                                  },
                                  void 0
                                ),
                                /* @__PURE__ */ e.jsxDEV(
                                  "text",
                                  {
                                    x: a,
                                    y: s,
                                    fill: t.color,
                                    fontSize: `${o}px`,
                                    fontWeight: "500",
                                    fontFamily: "sans-serif",
                                    dominantBaseline: "hanging",
                                    pointerEvents: "none",
                                    children: g.map((F, B) => /* @__PURE__ */ e.jsxDEV("tspan", { x: a, dy: B === 0 ? 0 : `${o * 1.25}px`, children: F }, B, !1, {
                                      fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                      lineNumber: 1005,
                                      columnNumber: 27
                                    }, void 0))
                                  },
                                  void 0,
                                  !1,
                                  {
                                    fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                                    lineNumber: 994,
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
                              lineNumber: 961,
                              columnNumber: 21
                            },
                            void 0
                          );
                        }
                        default:
                          return null;
                      }
                    }),
                    p && /* @__PURE__ */ e.jsxDEV(e.Fragment, { children: [
                      p.type === "rectangle" && /* @__PURE__ */ e.jsxDEV(
                        "rect",
                        {
                          x: p.x * l,
                          y: p.y * l,
                          width: p.width * l,
                          height: p.height * l,
                          stroke: p.color,
                          strokeWidth: p.strokeWidth,
                          fill: "transparent"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                          lineNumber: 1022,
                          columnNumber: 19
                        },
                        void 0
                      ),
                      p.type === "brush" && p.points.length >= 2 && /* @__PURE__ */ e.jsxDEV(
                        "path",
                        {
                          d: p.points.map((t, n) => `${n === 0 ? "M" : "L"} ${t.x * l} ${t.y * l}`).join(" "),
                          stroke: p.color,
                          strokeWidth: p.strokeWidth,
                          fill: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round"
                        },
                        void 0,
                        !1,
                        {
                          fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                          lineNumber: 1033,
                          columnNumber: 19
                        },
                        void 0
                      ),
                      p.type === "arrow" && /* @__PURE__ */ e.jsxDEV("g", { children: [
                        /* @__PURE__ */ e.jsxDEV(
                          "line",
                          {
                            x1: p.startX * l,
                            y1: p.startY * l,
                            x2: p.endX * l,
                            y2: p.endY * l,
                            stroke: p.color,
                            strokeWidth: p.strokeWidth
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                            lineNumber: 1046,
                            columnNumber: 21
                          },
                          void 0
                        ),
                        /* @__PURE__ */ e.jsxDEV(
                          "circle",
                          {
                            cx: p.endX * l,
                            cy: p.endY * l,
                            r: 4,
                            fill: p.color
                          },
                          void 0,
                          !1,
                          {
                            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                            lineNumber: 1055,
                            columnNumber: 21
                          },
                          void 0
                        )
                      ] }, void 0, !0, {
                        fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                        lineNumber: 1045,
                        columnNumber: 19
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                      lineNumber: 1020,
                      columnNumber: 15
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                  lineNumber: 744,
                  columnNumber: 11
                },
                void 0
              ),
              j && /* @__PURE__ */ e.jsxDEV(
                "div",
                {
                  className: "absolute z-40 overflow-visible animate-in zoom-in-95 duration-100 select-text",
                  onMouseDown: (t) => t.stopPropagation(),
                  onMouseUp: (t) => t.stopPropagation(),
                  onTouchStart: (t) => t.stopPropagation(),
                  style: {
                    left: `${(j === "new_temp_text" ? (b == null ? void 0 : b.x) ?? 0 : ((Ee = u.find((t) => t.id === j)) == null ? void 0 : Ee.x) ?? 0) * l}px`,
                    top: `${(j === "new_temp_text" ? (b == null ? void 0 : b.y) ?? 0 : ((ve = u.find((t) => t.id === j)) == null ? void 0 : ve.y) ?? 0) * l}px`
                  },
                  children: [
                    /* @__PURE__ */ e.jsxDEV(
                      "textarea",
                      {
                        ref: z,
                        value: r,
                        onChange: (t) => f(t.target.value),
                        onBlur: Ye,
                        onKeyDown: Oe,
                        onCompositionStart: () => {
                          X.current = !0;
                        },
                        onCompositionEnd: () => {
                          X.current = !1;
                        },
                        placeholder: "输入标注文字...",
                        className: "bg-transparent border-0 focus:border-0 focus:ring-0 p-0 shadow-none font-semibold outline-none resize-none overflow-hidden max-w-md block select-text leading-tight",
                        style: {
                          fontSize: `${(j === "new_temp_text" ? 18 : ((ye = u.find((t) => t.id === j)) == null ? void 0 : ye.fontSize) ?? 18) * l}px`,
                          color: j === "new_temp_text" ? D : ((Ie = u.find((t) => t.id === j)) == null ? void 0 : Ie.color) ?? "#EF4444",
                          minWidth: "200px",
                          lineHeight: "1.25",
                          background: "transparent",
                          border: "none",
                          outline: "none",
                          boxShadow: "none",
                          padding: "0",
                          margin: "0",
                          caretColor: j === "new_temp_text" ? D : ((we = u.find((t) => t.id === j)) == null ? void 0 : we.color) ?? "#EF4444",
                          resize: "none",
                          userSelect: "text",
                          WebkitUserSelect: "text"
                        },
                        rows: r.split(`
`).length || 1
                      },
                      void 0,
                      !1,
                      {
                        fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                        lineNumber: 1087,
                        columnNumber: 15
                      },
                      void 0
                    ),
                    /* @__PURE__ */ e.jsxDEV("div", { className: "absolute top-full left-0 mt-1.5 bg-indigo-600 text-[10px] text-white px-2 py-0.5 rounded-md font-semibold tracking-wide pointer-events-none whitespace-nowrap shadow-md", children: "点击空白处自动保存" }, void 0, !1, {
                      fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                      lineNumber: 1129,
                      columnNumber: 15
                    }, void 0)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                  lineNumber: 1069,
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
            lineNumber: 726,
            columnNumber: 9
          },
          void 0
        ) : (
          /* Empty Upload State Landing View - High fidelity clean theme */
          /* @__PURE__ */ e.jsxDEV("div", { className: "w-full max-w-2xl bg-white border border-gray-200 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center text-center gap-8 shadow-xl relative overflow-hidden group", children: [
            /* @__PURE__ */ e.jsxDEV("div", { className: "absolute -top-24 -left-24 w-48 h-48 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
              lineNumber: 1139,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ e.jsxDEV("div", { className: "absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-violet-500/5 blur-3xl pointer-events-none group-hover:scale-150 transition-transform duration-500" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
              lineNumber: 1140,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ e.jsxDEV("div", { className: "w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-gray-150 shadow-inner text-indigo-500 group-hover:scale-110 transition-transform duration-300", children: /* @__PURE__ */ e.jsxDEV(ut, { size: 30, className: "stroke-1.5" }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
              lineNumber: 1143,
              columnNumber: 13
            }, void 0) }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
              lineNumber: 1142,
              columnNumber: 11
            }, void 0),
            /* @__PURE__ */ e.jsxDEV("div", { className: "space-y-2.5 max-w-md", children: [
              /* @__PURE__ */ e.jsxDEV("h2", { className: "text-xl font-extrabold text-slate-900 tracking-tight flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ e.jsxDEV("span", { children: "智能改图" }, void 0, !1, {
                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                  lineNumber: 1148,
                  columnNumber: 15
                }, void 0),
                /* @__PURE__ */ e.jsxDEV("span", { className: "inline-flex items-center gap-1 bg-indigo-550/10 text-indigo-600 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-semibold border border-indigo-100", children: [
                  /* @__PURE__ */ e.jsxDEV($e, { size: 10 }, void 0, !1, {
                    fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                    lineNumber: 1150,
                    columnNumber: 17
                  }, void 0),
                  /* @__PURE__ */ e.jsxDEV("span", { children: "V1.0" }, void 0, !1, {
                    fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                    lineNumber: 1151,
                    columnNumber: 17
                  }, void 0)
                ] }, void 0, !0, {
                  fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                  lineNumber: 1149,
                  columnNumber: 15
                }, void 0)
              ] }, void 0, !0, {
                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                lineNumber: 1147,
                columnNumber: 13
              }, void 0),
              /* @__PURE__ */ e.jsxDEV("p", { className: "text-slate-500 text-sm leading-relaxed", children: "打开并在线标注图片：框选区域、自由手绘、添加箭头、编号徽章和文字。不涉及 AI，纯客户端离线安全编辑。" }, void 0, !1, {
                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                lineNumber: 1154,
                columnNumber: 13
              }, void 0)
            ] }, void 0, !0, {
              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
              lineNumber: 1146,
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
                  /* @__PURE__ */ e.jsxDEV(ge, { size: 15 }, void 0, !1, {
                    fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                    lineNumber: 1169,
                    columnNumber: 15
                  }, void 0),
                  /* @__PURE__ */ e.jsxDEV("span", { children: "选择本地图片" }, void 0, !1, {
                    fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                    lineNumber: 1170,
                    columnNumber: 15
                  }, void 0)
                ]
              },
              void 0,
              !0,
              {
                fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
                lineNumber: 1160,
                columnNumber: 13
              },
              void 0
            ) }, void 0, !1, {
              fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
              lineNumber: 1159,
              columnNumber: 11
            }, void 0)
          ] }, void 0, !0, {
            fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
            lineNumber: 1137,
            columnNumber: 9
          }, void 0)
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "/app/applet/src/components/ImageEditor/Canvas.tsx",
      lineNumber: 705,
      columnNumber: 5
    },
    void 0
  );
};
function me(c) {
  return {
    past: [],
    present: c,
    future: []
  };
}
function xe(c, u) {
  return JSON.stringify(c.present) === JSON.stringify(u) ? c : {
    past: [...c.past, c.present],
    present: u,
    future: []
    // clear redo branch on action
  };
}
function Mt(c) {
  if (c.past.length === 0) return c;
  const u = c.past[c.past.length - 1];
  return {
    past: c.past.slice(0, c.past.length - 1),
    present: u,
    future: [c.present, ...c.future]
  };
}
function St(c) {
  if (c.future.length === 0) return c;
  const u = c.future[0], h = c.future.slice(1);
  return {
    past: [...c.past, c.present],
    present: u,
    future: h
  };
}
async function Rt(c, u) {
  return new Promise((h, E) => {
    const _ = new Image();
    _.crossOrigin = "anonymous", _.src = c, _.onload = () => {
      const w = document.createElement("canvas");
      w.width = _.naturalWidth, w.height = _.naturalHeight;
      const m = w.getContext("2d");
      if (!m) {
        E(new Error("Could not get 2D context"));
        return;
      }
      m.drawImage(_, 0, 0), m.textBaseline = "middle", m.textAlign = "center", u.forEach((d) => {
        m.strokeStyle = d.color, m.fillStyle = d.color;
        const D = Math.max(_.naturalWidth, _.naturalHeight) / 1e3;
        switch (m.lineWidth = d.strokeWidth * Math.max(1, D), m.lineCap = "round", m.lineJoin = "round", d.type) {
          case "rectangle": {
            m.beginPath(), m.rect(d.x, d.y, d.width, d.height), m.stroke();
            break;
          }
          case "brush": {
            if (d.points.length < 2) return;
            m.beginPath(), m.moveTo(d.points[0].x, d.points[0].y);
            for (let N = 1; N < d.points.length; N++)
              m.lineTo(d.points[N].x, d.points[N].y);
            m.stroke();
            break;
          }
          case "arrow": {
            m.beginPath(), m.moveTo(d.startX, d.startY), m.lineTo(d.endX, d.endY), m.stroke();
            const N = Math.atan2(d.endY - d.startY, d.endX - d.startX), k = Math.max(12, d.strokeWidth * 4 * Math.max(1, D));
            m.save(), m.translate(d.endX, d.endY), m.rotate(N), m.fillStyle = d.color, m.beginPath(), m.moveTo(0, 0), m.lineTo(-k, -k * 0.5), m.lineTo(-k, k * 0.5), m.closePath(), m.fill(), m.restore();
            break;
          }
          case "marker": {
            const N = d.size * Math.max(1, D);
            m.beginPath(), m.arc(d.x, d.y, N, 0, 2 * Math.PI), m.fillStyle = d.color, m.fill(), m.lineWidth = Math.max(2, N * 0.15), m.strokeStyle = "#ffffff", m.stroke(), m.fillStyle = "#ffffff", m.font = `bold ${N * 1.1}px sans-serif`, m.fillText(String(d.number), d.x, d.y);
            break;
          }
          case "text": {
            m.save();
            const N = d.fontSize * Math.max(1, D);
            m.font = `${N}px sans-serif`, m.fillStyle = d.color, m.textAlign = "left", m.textBaseline = "top";
            const k = d.text.split(`
`);
            let A = d.y;
            k.forEach((G) => {
              m.fillText(G, d.x, A), A += N * 1.2;
            }), m.restore();
            break;
          }
        }
      }), h(w.toDataURL("image/png"));
    }, _.onerror = () => {
      E(new Error("Failed to load image for export"));
    };
  });
}
function zt(c, u) {
  const h = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(c, null, 2)
  )}`, E = document.createElement("a");
  E.setAttribute("href", h), E.setAttribute("download", u), document.body.appendChild(E), E.click(), E.remove();
}
function Ft(c, u) {
  const h = document.createElement("a");
  h.setAttribute("href", c), h.setAttribute("download", u), document.body.appendChild(h), h.click(), h.remove();
}
const Me = [
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
], Se = [
  { label: "细", value: 2 },
  { label: "中", value: 4 },
  { label: "粗", value: 8 },
  { label: "极粗", value: 12 }
], Tt = ({
  initialImageSrc: c = null,
  initialFileName: u = "",
  onSave: h,
  onCancel: E,
  className: _ = ""
}) => {
  var z, X;
  const [w, m] = I(c), [d, D] = I(u), [N, k] = I("select"), [A, G] = I("#EF4444"), [T, ne] = I(4), [M, P] = I(100), [W, oe] = I(!1), [ae, Y] = I(null), [V, S] = I(
    () => me([])
  ), [H, se] = I(!1), [Q, ee] = I(!1), p = ie(null), O = (i) => {
    const v = new FileReader();
    v.onload = (l) => {
      var re;
      (re = l.target) != null && re.result && (m(l.target.result), D(i.name), S(me([])), Y(null), k("rectangle"));
    }, v.readAsDataURL(i);
  }, te = (i, v) => {
    m(i), D(v), S(me([])), Y(null), k("rectangle");
  }, q = (i) => {
    const v = [...V.present, i];
    S(xe(V, v));
  }, K = (i) => {
    const v = V.present.map(
      (l) => l.id === i.id ? i : l
    );
    S(xe(V, v));
  }, U = (i) => {
    const v = V.present.filter((l) => l.id !== i);
    S(xe(V, v)), ae === i && Y(null);
  }, x = () => {
    const i = Mt(V);
    S(i), Y(null);
  }, J = () => {
    const i = St(V);
    S(i), Y(null);
  }, j = () => {
    P((i) => Math.min(250, i + 25));
  }, Z = () => {
    P((i) => Math.max(50, i - 25));
  }, r = async () => {
    if (w)
      try {
        const i = await Rt(w, V.present), v = d.substring(0, d.lastIndexOf(".")) || d;
        Ft(i, `annotated_${v}.png`), h == null || h(i, V.present), se(!1);
      } catch (i) {
        console.error(i), alert("无法渲染并保存带标注的图片。");
      }
  }, f = () => {
    m(null), D(""), S(me([])), Y(null), P(100);
  }, b = () => {
    var i;
    (i = p.current) == null || i.click();
  }, C = (i) => {
    i.target.files && i.target.files[0] && O(i.target.files[0]);
  };
  return /* @__PURE__ */ e.jsxDEV("div", { className: "flex flex-col h-screen bg-slate-50 text-slate-800 font-sans select-none overflow-hidden", children: [
    /* @__PURE__ */ e.jsxDEV(
      "input",
      {
        type: "file",
        ref: p,
        onChange: C,
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
      Q && /* @__PURE__ */ e.jsxDEV("div", { className: "absolute top-3 right-3 w-80 bg-white/95 border border-gray-200 rounded-xl shadow-xl p-4.5 z-40 text-slate-600 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-150", children: [
        /* @__PURE__ */ e.jsxDEV("div", { className: "flex items-center justify-between mb-2.5 border-b border-gray-100 pb-1.5", children: [
          /* @__PURE__ */ e.jsxDEV("span", { className: "font-bold text-slate-800 flex items-center gap-1.5 text-sm", children: [
            /* @__PURE__ */ e.jsxDEV($e, { size: 14, className: "text-indigo-500" }, void 0, !1, {
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
              onClick: () => ee(!1),
              className: "text-slate-400 hover:text-slate-600",
              children: /* @__PURE__ */ e.jsxDEV(_e, { size: 15 }, void 0, !1, {
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
          _t,
          {
            imageSrc: w,
            annotations: V.present,
            onAddAnnotation: q,
            onUpdateAnnotation: K,
            onDeleteAnnotation: U,
            selectedId: ae,
            onSelectId: Y,
            activeTool: N,
            selectedColor: A,
            selectedStrokeWidth: T,
            zoom: M,
            onUploadImage: O,
            onLoadSample: te
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
        w && /* @__PURE__ */ e.jsxDEV("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-30 pointer-events-none", children: [
          /* @__PURE__ */ e.jsxDEV("div", { className: "bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200/80 rounded-2xl p-1.5 flex items-center gap-1 pointer-events-auto", children: [
            /* @__PURE__ */ e.jsxDEV(
              "button",
              {
                id: "btn-upload-toolbar",
                type: "button",
                onClick: b,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-all cursor-pointer flex items-center justify-center",
                title: "上传图片",
                children: /* @__PURE__ */ e.jsxDEV(ge, { size: 16 }, void 0, !1, {
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
                onClick: () => k("select"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${N === "select" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "选择与拖动 (V)",
                children: /* @__PURE__ */ e.jsxDEV(ft, { size: 16 }, void 0, !1, {
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
                onClick: () => k("rectangle"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${N === "rectangle" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "矩形框标记 (R)",
                children: /* @__PURE__ */ e.jsxDEV(Nt, { size: 16 }, void 0, !1, {
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
                onClick: () => k("brush"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${N === "brush" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "自由画笔 (B)",
                children: /* @__PURE__ */ e.jsxDEV(rt, { size: 16 }, void 0, !1, {
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
                onClick: () => k("arrow"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${N === "arrow" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "指示箭头 (A)",
                children: /* @__PURE__ */ e.jsxDEV(et, { size: 16 }, void 0, !1, {
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
                onClick: () => k("marker"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${N === "marker" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "数字序号标牌 (N)",
                children: /* @__PURE__ */ e.jsxDEV(ct, { size: 16 }, void 0, !1, {
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
                onClick: () => k("text"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${N === "text" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "文字备注 (T)",
                children: /* @__PURE__ */ e.jsxDEV(vt, { size: 16 }, void 0, !1, {
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
                onClick: () => k("eraser"),
                className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${N === "eraser" ? "bg-slate-100 text-indigo-600 font-medium" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                title: "橡皮擦 (E) - 点击或拖动擦除标注",
                children: /* @__PURE__ */ e.jsxDEV(lt, { size: 16 }, void 0, !1, {
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
                  onClick: () => oe(!W),
                  className: `p-2 rounded-xl transition-all cursor-pointer flex items-center justify-center ${W ? "bg-slate-100 text-indigo-600" : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"}`,
                  title: "画笔颜色与粗细",
                  children: /* @__PURE__ */ e.jsxDEV("div", { className: "relative flex items-center justify-center", children: /* @__PURE__ */ e.jsxDEV(
                    "div",
                    {
                      className: "w-4 h-4 rounded-full border border-slate-300 shadow-inner flex items-center justify-center",
                      style: { backgroundColor: A },
                      children: /* @__PURE__ */ e.jsxDEV(
                        "div",
                        {
                          className: "rounded-full bg-white",
                          style: {
                            width: `${Math.max(2, Math.min(8, T * 0.7))}px`,
                            height: `${Math.max(2, Math.min(8, T * 0.7))}px`
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
              W && /* @__PURE__ */ e.jsxDEV(e.Fragment, { children: [
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
                      /* @__PURE__ */ e.jsxDEV("span", { className: "text-[10px] font-medium text-slate-500", children: ((z = Me.find((i) => i.value === A)) == null ? void 0 : z.name) || A }, void 0, !1, {
                        fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                        lineNumber: 451,
                        columnNumber: 29
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                      lineNumber: 447,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ e.jsxDEV("div", { className: "flex items-center gap-2", children: Me.map((i) => {
                      const v = A.toLowerCase() === i.value.toLowerCase();
                      return /* @__PURE__ */ e.jsxDEV(
                        "button",
                        {
                          id: `btn-popover-color-${i.name.toLowerCase()}`,
                          type: "button",
                          onClick: () => G(i.value),
                          className: `w-6 h-6 rounded-full border transition-all duration-150 relative flex items-center justify-center cursor-pointer ${v ? "border-slate-800 scale-110 ring-2 ring-indigo-500/20" : "border-slate-200 hover:border-slate-400 hover:scale-105"}`,
                          style: { backgroundColor: i.value },
                          title: i.name,
                          children: v && /* @__PURE__ */ e.jsxDEV(
                            ot,
                            {
                              size: 12,
                              className: i.value === "#FFFFFF" ? "text-slate-800" : "text-white"
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
                        i.value,
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
                      /* @__PURE__ */ e.jsxDEV("span", { className: "text-[10px] font-medium text-slate-500", children: ((X = Se.find((i) => i.value === T)) == null ? void 0 : X.label) || `${T}px` }, void 0, !1, {
                        fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                        lineNumber: 493,
                        columnNumber: 29
                      }, void 0)
                    ] }, void 0, !0, {
                      fileName: "/app/applet/src/components/ImageEditor/ImageEditor.tsx",
                      lineNumber: 489,
                      columnNumber: 27
                    }, void 0),
                    /* @__PURE__ */ e.jsxDEV("div", { className: "flex items-center gap-1 bg-slate-50 p-0.5 rounded-lg border border-slate-100", children: Se.map((i) => {
                      const v = T === i.value;
                      return /* @__PURE__ */ e.jsxDEV(
                        "button",
                        {
                          id: `btn-popover-stroke-${i.value}`,
                          type: "button",
                          onClick: () => ne(i.value),
                          className: `py-1 rounded-md text-[11px] font-semibold transition-all duration-150 cursor-pointer flex-1 text-center ${v ? "bg-white text-slate-800 shadow-xs border border-slate-200/60" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"}`,
                          children: /* @__PURE__ */ e.jsxDEV("div", { className: "flex flex-col items-center justify-center gap-1", children: [
                            /* @__PURE__ */ e.jsxDEV(
                              "div",
                              {
                                className: "rounded-full",
                                style: {
                                  width: `${Math.max(2, i.value * 0.7)}px`,
                                  height: `${Math.max(2, i.value * 0.7)}px`,
                                  backgroundColor: v ? A : "#94A3B8"
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
                            /* @__PURE__ */ e.jsxDEV("span", { className: "text-[9px]", children: i.label }, void 0, !1, {
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
                        i.value,
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
                disabled: V.past.length === 0,
                onClick: x,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                title: "撤销 (Ctrl+Z)",
                children: /* @__PURE__ */ e.jsxDEV(It, { size: 15 }, void 0, !1, {
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
                disabled: V.future.length === 0,
                onClick: J,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer",
                title: "重做 (Ctrl+Y)",
                children: /* @__PURE__ */ e.jsxDEV(bt, { size: 15 }, void 0, !1, {
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
                onClick: r,
                className: "p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer flex items-center justify-center",
                title: "保存标注后的图片",
                children: /* @__PURE__ */ e.jsxDEV(st, { size: 15 }, void 0, !1, {
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
                onClick: f,
                className: "p-2 text-rose-500 hover:text-rose-700 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer flex items-center justify-center",
                title: "关闭图片",
                children: /* @__PURE__ */ e.jsxDEV(_e, { size: 15 }, void 0, !1, {
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
                disabled: M <= 50,
                className: "p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors",
                title: "缩小",
                children: /* @__PURE__ */ e.jsxDEV(Ct, { size: 14 }, void 0, !1, {
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
              M,
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
                onClick: j,
                disabled: M >= 250,
                className: "p-1 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors",
                title: "放大",
                children: /* @__PURE__ */ e.jsxDEV(Dt, { size: 14 }, void 0, !1, {
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
  _t as Canvas,
  Tt as ImageEditor,
  me as createInitialHistory,
  Ft as downloadDataUrl,
  zt as downloadJson,
  Rt as exportAnnotatedImage,
  xe as pushHistoryState,
  St as redoHistory,
  Mt as undoHistory
};
