(function () {
  const _ = document.createElement("link").relList;
  if (_ && _.supports && _.supports("modulepreload")) return;
  for (const R of document.querySelectorAll('link[rel="modulepreload"]')) v(R);
  new MutationObserver((R) => {
    for (const B of R)
      if (B.type === "childList")
        for (const k of B.addedNodes)
          k.tagName === "LINK" && k.rel === "modulepreload" && v(k);
  }).observe(document, { childList: !0, subtree: !0 });
  function j(R) {
    const B = {};
    return (
      R.integrity && (B.integrity = R.integrity),
      R.referrerPolicy && (B.referrerPolicy = R.referrerPolicy),
      R.crossOrigin === "use-credentials"
        ? (B.credentials = "include")
        : R.crossOrigin === "anonymous"
          ? (B.credentials = "omit")
          : (B.credentials = "same-origin"),
      B
    );
  }
  function v(R) {
    if (R.ep) return;
    R.ep = !0;
    const B = j(R);
    fetch(R.href, B);
  }
})();
var ci = { exports: {} },
  Se = {};
var hs;
function lm() {
  if (hs) return Se;
  hs = 1;
  var o = Symbol.for("react.transitional.element"),
    _ = Symbol.for("react.fragment");
  function j(v, R, B) {
    var k = null;
    if (
      (B !== void 0 && (k = "" + B),
      R.key !== void 0 && (k = "" + R.key),
      "key" in R)
    ) {
      B = {};
      for (var sl in R) sl !== "key" && (B[sl] = R[sl]);
    } else B = R;
    return (
      (R = B.ref),
      { $$typeof: o, type: v, key: k, ref: R !== void 0 ? R : null, props: B }
    );
  }
  return ((Se.Fragment = _), (Se.jsx = j), (Se.jsxs = j), Se);
}
var gs;
function tm() {
  return (gs || ((gs = 1), (ci.exports = lm())), ci.exports);
}
var p = tm(),
  fi = { exports: {} },
  G = {};
var rs;
function am() {
  if (rs) return G;
  rs = 1;
  var o = Symbol.for("react.transitional.element"),
    _ = Symbol.for("react.portal"),
    j = Symbol.for("react.fragment"),
    v = Symbol.for("react.strict_mode"),
    R = Symbol.for("react.profiler"),
    B = Symbol.for("react.consumer"),
    k = Symbol.for("react.context"),
    sl = Symbol.for("react.forward_ref"),
    U = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    W = Symbol.for("react.lazy"),
    H = Symbol.for("react.activity"),
    ll = Symbol.iterator;
  function pl(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (ll && d[ll]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var Yl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    ql = Object.assign,
    Mt = {};
  function $l(d, A, O) {
    ((this.props = d),
      (this.context = A),
      (this.refs = Mt),
      (this.updater = O || Yl));
  }
  (($l.prototype.isReactComponent = {}),
    ($l.prototype.setState = function (d, A) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, d, A, "setState");
    }),
    ($l.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    }));
  function Wt() {}
  Wt.prototype = $l.prototype;
  function Cl(d, A, O) {
    ((this.props = d),
      (this.context = A),
      (this.refs = Mt),
      (this.updater = O || Yl));
  }
  var ct = (Cl.prototype = new Wt());
  ((ct.constructor = Cl), ql(ct, $l.prototype), (ct.isPureReactComponent = !0));
  var Tt = Array.isArray;
  function Gl() {}
  var $ = { H: null, A: null, T: null, S: null },
    Zl = Object.prototype.hasOwnProperty;
  function Et(d, A, O) {
    var x = O.ref;
    return {
      $$typeof: o,
      type: d,
      key: A,
      ref: x !== void 0 ? x : null,
      props: O,
    };
  }
  function Za(d, A) {
    return Et(d.type, A, d.props);
  }
  function At(d) {
    return typeof d == "object" && d !== null && d.$$typeof === o;
  }
  function Ql(d) {
    var A = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (O) {
        return A[O];
      })
    );
  }
  var za = /\/+/g;
  function Ut(d, A) {
    return typeof d == "object" && d !== null && d.key != null
      ? Ql("" + d.key)
      : A.toString(36);
  }
  function rt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (
          (typeof d.status == "string"
            ? d.then(Gl, Gl)
            : ((d.status = "pending"),
              d.then(
                function (A) {
                  d.status === "pending" &&
                    ((d.status = "fulfilled"), (d.value = A));
                },
                function (A) {
                  d.status === "pending" &&
                    ((d.status = "rejected"), (d.reason = A));
                },
              )),
          d.status)
        ) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function b(d, A, O, x, Z) {
    var L = typeof d;
    (L === "undefined" || L === "boolean") && (d = null);
    var al = !1;
    if (d === null) al = !0;
    else
      switch (L) {
        case "bigint":
        case "string":
        case "number":
          al = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case o:
            case _:
              al = !0;
              break;
            case W:
              return ((al = d._init), b(al(d._payload), A, O, x, Z));
          }
      }
    if (al)
      return (
        (Z = Z(d)),
        (al = x === "" ? "." + Ut(d, 0) : x),
        Tt(Z)
          ? ((O = ""),
            al != null && (O = al.replace(za, "$&/") + "/"),
            b(Z, A, O, "", function (pu) {
              return pu;
            }))
          : Z != null &&
            (At(Z) &&
              (Z = Za(
                Z,
                O +
                  (Z.key == null || (d && d.key === Z.key)
                    ? ""
                    : ("" + Z.key).replace(za, "$&/") + "/") +
                  al,
              )),
            A.push(Z)),
        1
      );
    al = 0;
    var jl = x === "" ? "." : x + ":";
    if (Tt(d))
      for (var rl = 0; rl < d.length; rl++)
        ((x = d[rl]), (L = jl + Ut(x, rl)), (al += b(x, A, O, L, Z)));
    else if (((rl = pl(d)), typeof rl == "function"))
      for (d = rl.call(d), rl = 0; !(x = d.next()).done; )
        ((x = x.value), (L = jl + Ut(x, rl++)), (al += b(x, A, O, L, Z)));
    else if (L === "object") {
      if (typeof d.then == "function") return b(rt(d), A, O, x, Z);
      throw (
        (A = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (A === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : A) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return al;
  }
  function D(d, A, O) {
    if (d == null) return d;
    var x = [],
      Z = 0;
    return (
      b(d, x, "", "", function (L) {
        return A.call(O, L, Z++);
      }),
      x
    );
  }
  function Y(d) {
    if (d._status === -1) {
      var A = d._result;
      ((A = A()),
        A.then(
          function (O) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = O));
          },
          function (O) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = O));
          },
        ),
        d._status === -1 && ((d._status = 0), (d._result = A)));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var nl =
      typeof reportError == "function"
        ? reportError
        : function (d) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var A = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof d == "object" &&
                  d !== null &&
                  typeof d.message == "string"
                    ? String(d.message)
                    : String(d),
                error: d,
              });
              if (!window.dispatchEvent(A)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", d);
              return;
            }
            console.error(d);
          },
    dl = {
      map: D,
      forEach: function (d, A, O) {
        D(
          d,
          function () {
            A.apply(this, arguments);
          },
          O,
        );
      },
      count: function (d) {
        var A = 0;
        return (
          D(d, function () {
            A++;
          }),
          A
        );
      },
      toArray: function (d) {
        return (
          D(d, function (A) {
            return A;
          }) || []
        );
      },
      only: function (d) {
        if (!At(d))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return d;
      },
    };
  return (
    (G.Activity = H),
    (G.Children = dl),
    (G.Component = $l),
    (G.Fragment = j),
    (G.Profiler = R),
    (G.PureComponent = Cl),
    (G.StrictMode = v),
    (G.Suspense = U),
    (G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = $),
    (G.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return $.H.useMemoCache(d);
      },
    }),
    (G.cache = function (d) {
      return function () {
        return d.apply(null, arguments);
      };
    }),
    (G.cacheSignal = function () {
      return null;
    }),
    (G.cloneElement = function (d, A, O) {
      if (d == null)
        throw Error(
          "The argument must be a React element, but you passed " + d + ".",
        );
      var x = ql({}, d.props),
        Z = d.key;
      if (A != null)
        for (L in (A.key !== void 0 && (Z = "" + A.key), A))
          !Zl.call(A, L) ||
            L === "key" ||
            L === "__self" ||
            L === "__source" ||
            (L === "ref" && A.ref === void 0) ||
            (x[L] = A[L]);
      var L = arguments.length - 2;
      if (L === 1) x.children = O;
      else if (1 < L) {
        for (var al = Array(L), jl = 0; jl < L; jl++)
          al[jl] = arguments[jl + 2];
        x.children = al;
      }
      return Et(d.type, Z, x);
    }),
    (G.createContext = function (d) {
      return (
        (d = {
          $$typeof: k,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: B, _context: d }),
        d
      );
    }),
    (G.createElement = function (d, A, O) {
      var x,
        Z = {},
        L = null;
      if (A != null)
        for (x in (A.key !== void 0 && (L = "" + A.key), A))
          Zl.call(A, x) &&
            x !== "key" &&
            x !== "__self" &&
            x !== "__source" &&
            (Z[x] = A[x]);
      var al = arguments.length - 2;
      if (al === 1) Z.children = O;
      else if (1 < al) {
        for (var jl = Array(al), rl = 0; rl < al; rl++)
          jl[rl] = arguments[rl + 2];
        Z.children = jl;
      }
      if (d && d.defaultProps)
        for (x in ((al = d.defaultProps), al))
          Z[x] === void 0 && (Z[x] = al[x]);
      return Et(d, L, Z);
    }),
    (G.createRef = function () {
      return { current: null };
    }),
    (G.forwardRef = function (d) {
      return { $$typeof: sl, render: d };
    }),
    (G.isValidElement = At),
    (G.lazy = function (d) {
      return { $$typeof: W, _payload: { _status: -1, _result: d }, _init: Y };
    }),
    (G.memo = function (d, A) {
      return { $$typeof: E, type: d, compare: A === void 0 ? null : A };
    }),
    (G.startTransition = function (d) {
      var A = $.T,
        O = {};
      $.T = O;
      try {
        var x = d(),
          Z = $.S;
        (Z !== null && Z(O, x),
          typeof x == "object" &&
            x !== null &&
            typeof x.then == "function" &&
            x.then(Gl, nl));
      } catch (L) {
        nl(L);
      } finally {
        (A !== null && O.types !== null && (A.types = O.types), ($.T = A));
      }
    }),
    (G.unstable_useCacheRefresh = function () {
      return $.H.useCacheRefresh();
    }),
    (G.use = function (d) {
      return $.H.use(d);
    }),
    (G.useActionState = function (d, A, O) {
      return $.H.useActionState(d, A, O);
    }),
    (G.useCallback = function (d, A) {
      return $.H.useCallback(d, A);
    }),
    (G.useContext = function (d) {
      return $.H.useContext(d);
    }),
    (G.useDebugValue = function () {}),
    (G.useDeferredValue = function (d, A) {
      return $.H.useDeferredValue(d, A);
    }),
    (G.useEffect = function (d, A) {
      return $.H.useEffect(d, A);
    }),
    (G.useEffectEvent = function (d) {
      return $.H.useEffectEvent(d);
    }),
    (G.useId = function () {
      return $.H.useId();
    }),
    (G.useImperativeHandle = function (d, A, O) {
      return $.H.useImperativeHandle(d, A, O);
    }),
    (G.useInsertionEffect = function (d, A) {
      return $.H.useInsertionEffect(d, A);
    }),
    (G.useLayoutEffect = function (d, A) {
      return $.H.useLayoutEffect(d, A);
    }),
    (G.useMemo = function (d, A) {
      return $.H.useMemo(d, A);
    }),
    (G.useOptimistic = function (d, A) {
      return $.H.useOptimistic(d, A);
    }),
    (G.useReducer = function (d, A, O) {
      return $.H.useReducer(d, A, O);
    }),
    (G.useRef = function (d) {
      return $.H.useRef(d);
    }),
    (G.useState = function (d) {
      return $.H.useState(d);
    }),
    (G.useSyncExternalStore = function (d, A, O) {
      return $.H.useSyncExternalStore(d, A, O);
    }),
    (G.useTransition = function () {
      return $.H.useTransition();
    }),
    (G.version = "19.2.0"),
    G
  );
}
var Ss;
function Zn() {
  return (Ss || ((Ss = 1), (fi.exports = am())), fi.exports);
}
var Us = Zn(),
  ii = { exports: {} },
  be = {},
  si = { exports: {} },
  di = {};
var bs;
function um() {
  return (
    bs ||
      ((bs = 1),
      (function (o) {
        function _(b, D) {
          var Y = b.length;
          b.push(D);
          l: for (; 0 < Y; ) {
            var nl = (Y - 1) >>> 1,
              dl = b[nl];
            if (0 < R(dl, D)) ((b[nl] = D), (b[Y] = dl), (Y = nl));
            else break l;
          }
        }
        function j(b) {
          return b.length === 0 ? null : b[0];
        }
        function v(b) {
          if (b.length === 0) return null;
          var D = b[0],
            Y = b.pop();
          if (Y !== D) {
            b[0] = Y;
            l: for (var nl = 0, dl = b.length, d = dl >>> 1; nl < d; ) {
              var A = 2 * (nl + 1) - 1,
                O = b[A],
                x = A + 1,
                Z = b[x];
              if (0 > R(O, Y))
                x < dl && 0 > R(Z, O)
                  ? ((b[nl] = Z), (b[x] = Y), (nl = x))
                  : ((b[nl] = O), (b[A] = Y), (nl = A));
              else if (x < dl && 0 > R(Z, Y))
                ((b[nl] = Z), (b[x] = Y), (nl = x));
              else break l;
            }
          }
          return D;
        }
        function R(b, D) {
          var Y = b.sortIndex - D.sortIndex;
          return Y !== 0 ? Y : b.id - D.id;
        }
        if (
          ((o.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var B = performance;
          o.unstable_now = function () {
            return B.now();
          };
        } else {
          var k = Date,
            sl = k.now();
          o.unstable_now = function () {
            return k.now() - sl;
          };
        }
        var U = [],
          E = [],
          W = 1,
          H = null,
          ll = 3,
          pl = !1,
          Yl = !1,
          ql = !1,
          Mt = !1,
          $l = typeof setTimeout == "function" ? setTimeout : null,
          Wt = typeof clearTimeout == "function" ? clearTimeout : null,
          Cl = typeof setImmediate < "u" ? setImmediate : null;
        function ct(b) {
          for (var D = j(E); D !== null; ) {
            if (D.callback === null) v(E);
            else if (D.startTime <= b)
              (v(E), (D.sortIndex = D.expirationTime), _(U, D));
            else break;
            D = j(E);
          }
        }
        function Tt(b) {
          if (((ql = !1), ct(b), !Yl))
            if (j(U) !== null) ((Yl = !0), Gl || ((Gl = !0), Ql()));
            else {
              var D = j(E);
              D !== null && rt(Tt, D.startTime - b);
            }
        }
        var Gl = !1,
          $ = -1,
          Zl = 5,
          Et = -1;
        function Za() {
          return Mt ? !0 : !(o.unstable_now() - Et < Zl);
        }
        function At() {
          if (((Mt = !1), Gl)) {
            var b = o.unstable_now();
            Et = b;
            var D = !0;
            try {
              l: {
                ((Yl = !1), ql && ((ql = !1), Wt($), ($ = -1)), (pl = !0));
                var Y = ll;
                try {
                  t: {
                    for (
                      ct(b), H = j(U);
                      H !== null && !(H.expirationTime > b && Za());
                    ) {
                      var nl = H.callback;
                      if (typeof nl == "function") {
                        ((H.callback = null), (ll = H.priorityLevel));
                        var dl = nl(H.expirationTime <= b);
                        if (((b = o.unstable_now()), typeof dl == "function")) {
                          ((H.callback = dl), ct(b), (D = !0));
                          break t;
                        }
                        (H === j(U) && v(U), ct(b));
                      } else v(U);
                      H = j(U);
                    }
                    if (H !== null) D = !0;
                    else {
                      var d = j(E);
                      (d !== null && rt(Tt, d.startTime - b), (D = !1));
                    }
                  }
                  break l;
                } finally {
                  ((H = null), (ll = Y), (pl = !1));
                }
                D = void 0;
              }
            } finally {
              D ? Ql() : (Gl = !1);
            }
          }
        }
        var Ql;
        if (typeof Cl == "function")
          Ql = function () {
            Cl(At);
          };
        else if (typeof MessageChannel < "u") {
          var za = new MessageChannel(),
            Ut = za.port2;
          ((za.port1.onmessage = At),
            (Ql = function () {
              Ut.postMessage(null);
            }));
        } else
          Ql = function () {
            $l(At, 0);
          };
        function rt(b, D) {
          $ = $l(function () {
            b(o.unstable_now());
          }, D);
        }
        ((o.unstable_IdlePriority = 5),
          (o.unstable_ImmediatePriority = 1),
          (o.unstable_LowPriority = 4),
          (o.unstable_NormalPriority = 3),
          (o.unstable_Profiling = null),
          (o.unstable_UserBlockingPriority = 2),
          (o.unstable_cancelCallback = function (b) {
            b.callback = null;
          }),
          (o.unstable_forceFrameRate = function (b) {
            0 > b || 125 < b
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Zl = 0 < b ? Math.floor(1e3 / b) : 5);
          }),
          (o.unstable_getCurrentPriorityLevel = function () {
            return ll;
          }),
          (o.unstable_next = function (b) {
            switch (ll) {
              case 1:
              case 2:
              case 3:
                var D = 3;
                break;
              default:
                D = ll;
            }
            var Y = ll;
            ll = D;
            try {
              return b();
            } finally {
              ll = Y;
            }
          }),
          (o.unstable_requestPaint = function () {
            Mt = !0;
          }),
          (o.unstable_runWithPriority = function (b, D) {
            switch (b) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                b = 3;
            }
            var Y = ll;
            ll = b;
            try {
              return D();
            } finally {
              ll = Y;
            }
          }),
          (o.unstable_scheduleCallback = function (b, D, Y) {
            var nl = o.unstable_now();
            switch (
              (typeof Y == "object" && Y !== null
                ? ((Y = Y.delay),
                  (Y = typeof Y == "number" && 0 < Y ? nl + Y : nl))
                : (Y = nl),
              b)
            ) {
              case 1:
                var dl = -1;
                break;
              case 2:
                dl = 250;
                break;
              case 5:
                dl = 1073741823;
                break;
              case 4:
                dl = 1e4;
                break;
              default:
                dl = 5e3;
            }
            return (
              (dl = Y + dl),
              (b = {
                id: W++,
                callback: D,
                priorityLevel: b,
                startTime: Y,
                expirationTime: dl,
                sortIndex: -1,
              }),
              Y > nl
                ? ((b.sortIndex = Y),
                  _(E, b),
                  j(U) === null &&
                    b === j(E) &&
                    (ql ? (Wt($), ($ = -1)) : (ql = !0), rt(Tt, Y - nl)))
                : ((b.sortIndex = dl),
                  _(U, b),
                  Yl || pl || ((Yl = !0), Gl || ((Gl = !0), Ql()))),
              b
            );
          }),
          (o.unstable_shouldYield = Za),
          (o.unstable_wrapCallback = function (b) {
            var D = ll;
            return function () {
              var Y = ll;
              ll = D;
              try {
                return b.apply(this, arguments);
              } finally {
                ll = Y;
              }
            };
          }));
      })(di)),
    di
  );
}
var zs;
function em() {
  return (zs || ((zs = 1), (si.exports = um())), si.exports);
}
var mi = { exports: {} },
  Rl = {};
var Ts;
function nm() {
  if (Ts) return Rl;
  Ts = 1;
  var o = Zn();
  function _(U) {
    var E = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var W = 2; W < arguments.length; W++)
        E += "&args[]=" + encodeURIComponent(arguments[W]);
    }
    return (
      "Minified React error #" +
      U +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function j() {}
  var v = {
      d: {
        f: j,
        r: function () {
          throw Error(_(522));
        },
        D: j,
        C: j,
        L: j,
        m: j,
        X: j,
        S: j,
        M: j,
      },
      p: 0,
      findDOMNode: null,
    },
    R = Symbol.for("react.portal");
  function B(U, E, W) {
    var H =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: R,
      key: H == null ? null : "" + H,
      children: U,
      containerInfo: E,
      implementation: W,
    };
  }
  var k = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function sl(U, E) {
    if (U === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (Rl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = v),
    (Rl.createPortal = function (U, E) {
      var W =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(_(299));
      return B(U, E, null, W);
    }),
    (Rl.flushSync = function (U) {
      var E = k.T,
        W = v.p;
      try {
        if (((k.T = null), (v.p = 2), U)) return U();
      } finally {
        ((k.T = E), (v.p = W), v.d.f());
      }
    }),
    (Rl.preconnect = function (U, E) {
      typeof U == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        v.d.C(U, E));
    }),
    (Rl.prefetchDNS = function (U) {
      typeof U == "string" && v.d.D(U);
    }),
    (Rl.preinit = function (U, E) {
      if (typeof U == "string" && E && typeof E.as == "string") {
        var W = E.as,
          H = sl(W, E.crossOrigin),
          ll = typeof E.integrity == "string" ? E.integrity : void 0,
          pl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        W === "style"
          ? v.d.S(U, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: H,
              integrity: ll,
              fetchPriority: pl,
            })
          : W === "script" &&
            v.d.X(U, {
              crossOrigin: H,
              integrity: ll,
              fetchPriority: pl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (Rl.preinitModule = function (U, E) {
      if (typeof U == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var W = sl(E.as, E.crossOrigin);
            v.d.M(U, {
              crossOrigin: W,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && v.d.M(U);
    }),
    (Rl.preload = function (U, E) {
      if (
        typeof U == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var W = E.as,
          H = sl(W, E.crossOrigin);
        v.d.L(U, W, {
          crossOrigin: H,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (Rl.preloadModule = function (U, E) {
      if (typeof U == "string")
        if (E) {
          var W = sl(E.as, E.crossOrigin);
          v.d.m(U, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: W,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else v.d.m(U);
    }),
    (Rl.requestFormReset = function (U) {
      v.d.r(U);
    }),
    (Rl.unstable_batchedUpdates = function (U, E) {
      return U(E);
    }),
    (Rl.useFormState = function (U, E, W) {
      return k.H.useFormState(U, E, W);
    }),
    (Rl.useFormStatus = function () {
      return k.H.useHostTransitionStatus();
    }),
    (Rl.version = "19.2.0"),
    Rl
  );
}
var Es;
function cm() {
  if (Es) return mi.exports;
  Es = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (_) {
        console.error(_);
      }
  }
  return (o(), (mi.exports = nm()), mi.exports);
}
var As;
function fm() {
  if (As) return be;
  As = 1;
  var o = em(),
    _ = Zn(),
    j = cm();
  function v(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function R(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function B(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function k(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function sl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function U(l) {
    if (B(l) !== l) throw Error(v(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = B(l)), t === null)) throw Error(v(188));
      return t !== l ? null : l;
    }
    for (var a = l, u = t; ; ) {
      var e = a.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (((u = e.return), u !== null)) {
          a = u;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === a) return (U(e), l);
          if (n === u) return (U(e), t);
          n = n.sibling;
        }
        throw Error(v(188));
      }
      if (a.return !== u.return) ((a = e), (u = n));
      else {
        for (var c = !1, f = e.child; f; ) {
          if (f === a) {
            ((c = !0), (a = e), (u = n));
            break;
          }
          if (f === u) {
            ((c = !0), (u = e), (a = n));
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = n.child; f; ) {
            if (f === a) {
              ((c = !0), (a = n), (u = e));
              break;
            }
            if (f === u) {
              ((c = !0), (u = n), (a = e));
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(v(189));
        }
      }
      if (a.alternate !== u) throw Error(v(190));
    }
    if (a.tag !== 3) throw Error(v(188));
    return a.stateNode.current === a ? l : t;
  }
  function W(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = W(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign,
    ll = Symbol.for("react.element"),
    pl = Symbol.for("react.transitional.element"),
    Yl = Symbol.for("react.portal"),
    ql = Symbol.for("react.fragment"),
    Mt = Symbol.for("react.strict_mode"),
    $l = Symbol.for("react.profiler"),
    Wt = Symbol.for("react.consumer"),
    Cl = Symbol.for("react.context"),
    ct = Symbol.for("react.forward_ref"),
    Tt = Symbol.for("react.suspense"),
    Gl = Symbol.for("react.suspense_list"),
    $ = Symbol.for("react.memo"),
    Zl = Symbol.for("react.lazy"),
    Et = Symbol.for("react.activity"),
    Za = Symbol.for("react.memo_cache_sentinel"),
    At = Symbol.iterator;
  function Ql(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (At && l[At]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var za = Symbol.for("react.client.reference");
  function Ut(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === za ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case ql:
        return "Fragment";
      case $l:
        return "Profiler";
      case Mt:
        return "StrictMode";
      case Tt:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case Et:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Yl:
          return "Portal";
        case Cl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ct:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case $:
          return (
            (t = l.displayName || null),
            t !== null ? t : Ut(l.type) || "Memo"
          );
        case Zl:
          ((t = l._payload), (l = l._init));
          try {
            return Ut(l(t));
          } catch {}
      }
    return null;
  }
  var rt = Array.isArray,
    b = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    D = j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Y = { pending: !1, data: null, method: null, action: null },
    nl = [],
    dl = -1;
  function d(l) {
    return { current: l };
  }
  function A(l) {
    0 > dl || ((l.current = nl[dl]), (nl[dl] = null), dl--);
  }
  function O(l, t) {
    (dl++, (nl[dl] = l.current), (l.current = t));
  }
  var x = d(null),
    Z = d(null),
    L = d(null),
    al = d(null);
  function jl(l, t) {
    switch ((O(L, t), O(Z, l), O(x, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? Y1(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = Y1(t)), (l = G1(t, l)));
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    (A(x), O(x, l));
  }
  function rl() {
    (A(x), A(Z), A(L));
  }
  function pu(l) {
    l.memoizedState !== null && O(al, l);
    var t = x.current,
      a = G1(t, l.type);
    t !== a && (O(Z, l), O(x, a));
  }
  function Te(l) {
    (Z.current === l && (A(x), A(Z)),
      al.current === l && (A(al), (ye._currentValue = Y)));
  }
  var Qn, yi;
  function Ta(l) {
    if (Qn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Qn = (t && t[1]) || ""),
          (yi =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Qn +
      l +
      yi
    );
  }
  var Xn = !1;
  function Ln(l, t) {
    if (!l || Xn) return "";
    Xn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var u = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var T = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(T.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(T, []);
                } catch (r) {
                  var g = r;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (r) {
                  g = r;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (r) {
                g = r;
              }
              (T = l()) &&
                typeof T.catch == "function" &&
                T.catch(function () {});
            }
          } catch (r) {
            if (r && g && typeof r.stack == "string") return [r.stack, g.stack];
          }
          return [null, null];
        },
      };
      u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        u.DetermineComponentFrameRoot,
        "name",
      );
      e &&
        e.configurable &&
        Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = u.DetermineComponentFrameRoot(),
        c = n[0],
        f = n[1];
      if (c && f) {
        var i = c.split(`
`),
          h = f.split(`
`);
        for (
          e = u = 0;
          u < i.length && !i[u].includes("DetermineComponentFrameRoot");
        )
          u++;
        for (; e < h.length && !h[e].includes("DetermineComponentFrameRoot"); )
          e++;
        if (u === i.length || e === h.length)
          for (
            u = i.length - 1, e = h.length - 1;
            1 <= u && 0 <= e && i[u] !== h[e];
          )
            e--;
        for (; 1 <= u && 0 <= e; u--, e--)
          if (i[u] !== h[e]) {
            if (u !== 1 || e !== 1)
              do
                if ((u--, e--, 0 > e || i[u] !== h[e])) {
                  var S =
                    `
` + i[u].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      S.includes("<anonymous>") &&
                      (S = S.replace("<anonymous>", l.displayName)),
                    S
                  );
                }
              while (1 <= u && 0 <= e);
            break;
          }
      }
    } finally {
      ((Xn = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? Ta(a) : "";
  }
  function Ns(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ta(l.type);
      case 16:
        return Ta("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? Ta("Suspense Fallback")
          : Ta("Suspense");
      case 19:
        return Ta("SuspenseList");
      case 0:
      case 15:
        return Ln(l.type, !1);
      case 11:
        return Ln(l.type.render, !1);
      case 1:
        return Ln(l.type, !0);
      case 31:
        return Ta("Activity");
      default:
        return "";
    }
  }
  function hi(l) {
    try {
      var t = "",
        a = null;
      do ((t += Ns(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (u) {
      return (
        `
Error generating stack: ` +
        u.message +
        `
` +
        u.stack
      );
    }
  }
  var Vn = Object.prototype.hasOwnProperty,
    Kn = o.unstable_scheduleCallback,
    Jn = o.unstable_cancelCallback,
    Hs = o.unstable_shouldYield,
    Cs = o.unstable_requestPaint,
    Fl = o.unstable_now,
    Rs = o.unstable_getCurrentPriorityLevel,
    gi = o.unstable_ImmediatePriority,
    ri = o.unstable_UserBlockingPriority,
    Ee = o.unstable_NormalPriority,
    qs = o.unstable_LowPriority,
    Si = o.unstable_IdlePriority,
    js = o.log,
    Bs = o.unstable_setDisableYieldValue,
    Du = null,
    kl = null;
  function $t(l) {
    if (
      (typeof js == "function" && Bs(l),
      kl && typeof kl.setStrictMode == "function")
    )
      try {
        kl.setStrictMode(Du, l);
      } catch {}
  }
  var Il = Math.clz32 ? Math.clz32 : Zs,
    Ys = Math.log,
    Gs = Math.LN2;
  function Zs(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((Ys(l) / Gs) | 0)) | 0);
  }
  var Ae = 256,
    _e = 262144,
    pe = 4194304;
  function Ea(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function De(l, t, a) {
    var u = l.pendingLanes;
    if (u === 0) return 0;
    var e = 0,
      n = l.suspendedLanes,
      c = l.pingedLanes;
    l = l.warmLanes;
    var f = u & 134217727;
    return (
      f !== 0
        ? ((u = f & ~n),
          u !== 0
            ? (e = Ea(u))
            : ((c &= f),
              c !== 0
                ? (e = Ea(c))
                : a || ((a = f & ~l), a !== 0 && (e = Ea(a)))))
        : ((f = u & ~n),
          f !== 0
            ? (e = Ea(f))
            : c !== 0
              ? (e = Ea(c))
              : a || ((a = u & ~l), a !== 0 && (e = Ea(a)))),
      e === 0
        ? 0
        : t !== 0 &&
            t !== e &&
            (t & n) === 0 &&
            ((n = e & -e),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : e
    );
  }
  function Ou(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Qs(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bi() {
    var l = pe;
    return ((pe <<= 1), (pe & 62914560) === 0 && (pe = 4194304), l);
  }
  function wn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Mu(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Xs(l, t, a, u, e, n) {
    var c = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var f = l.entanglements,
      i = l.expirationTimes,
      h = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var S = 31 - Il(a),
        T = 1 << S;
      ((f[S] = 0), (i[S] = -1));
      var g = h[S];
      if (g !== null)
        for (h[S] = null, S = 0; S < g.length; S++) {
          var r = g[S];
          r !== null && (r.lane &= -536870913);
        }
      a &= ~T;
    }
    (u !== 0 && zi(l, u, 0),
      n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t)));
  }
  function zi(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var u = 31 - Il(t);
    ((l.entangledLanes |= t),
      (l.entanglements[u] = l.entanglements[u] | 1073741824 | (a & 261930)));
  }
  function Ti(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var u = 31 - Il(a),
        e = 1 << u;
      ((e & t) | (l[u] & t) && (l[u] |= t), (a &= ~e));
    }
  }
  function Ei(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : Wn(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function Wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function $n(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Ai() {
    var l = D.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : is(l.type));
  }
  function _i(l, t) {
    var a = D.p;
    try {
      return ((D.p = l), t());
    } finally {
      D.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2),
    Ml = "__reactFiber$" + Ft,
    Xl = "__reactProps$" + Ft,
    Qa = "__reactContainer$" + Ft,
    Fn = "__reactEvents$" + Ft,
    Ls = "__reactListeners$" + Ft,
    Vs = "__reactHandles$" + Ft,
    pi = "__reactResources$" + Ft,
    Uu = "__reactMarker$" + Ft;
  function kn(l) {
    (delete l[Ml], delete l[Xl], delete l[Fn], delete l[Ls], delete l[Vs]);
  }
  function Xa(l) {
    var t = l[Ml];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Qa] || a[Ml])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = J1(l); l !== null; ) {
            if ((a = l[Ml])) return a;
            l = J1(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function La(l) {
    if ((l = l[Ml] || l[Qa])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function xu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(v(33));
  }
  function Va(l) {
    var t = l[pi];
    return (
      t ||
        (t = l[pi] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Dl(l) {
    l[Uu] = !0;
  }
  var Di = new Set(),
    Oi = {};
  function Aa(l, t) {
    (Ka(l, t), Ka(l + "Capture", t));
  }
  function Ka(l, t) {
    for (Oi[l] = t, l = 0; l < t.length; l++) Di.add(t[l]);
  }
  var Ks = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Mi = {},
    Ui = {};
  function Js(l) {
    return Vn.call(Ui, l)
      ? !0
      : Vn.call(Mi, l)
        ? !1
        : Ks.test(l)
          ? (Ui[l] = !0)
          : ((Mi[l] = !0), !1);
  }
  function Oe(l, t, a) {
    if (Js(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function Me(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function xt(l, t, a, u) {
    if (u === null) l.removeAttribute(a);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + u);
    }
  }
  function ft(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function xi(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function ws(l, t, a) {
    var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof u < "u" &&
      typeof u.get == "function" &&
      typeof u.set == "function"
    ) {
      var e = u.get,
        n = u.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return e.call(this);
          },
          set: function (c) {
            ((a = "" + c), n.call(this, c));
          },
        }),
        Object.defineProperty(l, t, { enumerable: u.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (c) {
            a = "" + c;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function In(l) {
    if (!l._valueTracker) {
      var t = xi(l) ? "checked" : "value";
      l._valueTracker = ws(l, t, "" + l[t]);
    }
  }
  function Ni(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      u = "";
    return (
      l && (u = xi(l) ? (l.checked ? "true" : "false") : l.value),
      (l = u),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Ue(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Ws = /[\n"\\]/g;
  function it(l) {
    return l.replace(Ws, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function Pn(l, t, a, u, e, n, c, f) {
    ((l.name = ""),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.type = c)
        : l.removeAttribute("type"),
      t != null
        ? c === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ft(t))
          : l.value !== "" + ft(t) && (l.value = "" + ft(t))
        : (c !== "submit" && c !== "reset") || l.removeAttribute("value"),
      t != null
        ? lc(l, c, ft(t))
        : a != null
          ? lc(l, c, ft(a))
          : u != null && l.removeAttribute("value"),
      e == null && n != null && (l.defaultChecked = !!n),
      e != null &&
        (l.checked = e && typeof e != "function" && typeof e != "symbol"),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (l.name = "" + ft(f))
        : l.removeAttribute("name"));
  }
  function Hi(l, t, a, u, e, n, c, f) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        In(l);
        return;
      }
      ((a = a != null ? "" + ft(a) : ""),
        (t = t != null ? "" + ft(t) : a),
        f || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((u = u ?? e),
      (u = typeof u != "function" && typeof u != "symbol" && !!u),
      (l.checked = f ? l.checked : !!u),
      (l.defaultChecked = !!u),
      c != null &&
        typeof c != "function" &&
        typeof c != "symbol" &&
        typeof c != "boolean" &&
        (l.name = c),
      In(l));
  }
  function lc(l, t, a) {
    (t === "number" && Ue(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Ja(l, t, a, u) {
    if (((l = l.options), t)) {
      t = {};
      for (var e = 0; e < a.length; e++) t["$" + a[e]] = !0;
      for (a = 0; a < l.length; a++)
        ((e = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== e && (l[a].selected = e),
          e && u && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + ft(a), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === a) {
          ((l[e].selected = !0), u && (l[e].defaultSelected = !0));
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ci(l, t, a) {
    if (
      t != null &&
      ((t = "" + ft(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ft(a) : "";
  }
  function Ri(l, t, a, u) {
    if (t == null) {
      if (u != null) {
        if (a != null) throw Error(v(92));
        if (rt(u)) {
          if (1 < u.length) throw Error(v(93));
          u = u[0];
        }
        a = u;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = ft(t)),
      (l.defaultValue = a),
      (u = l.textContent),
      u === a && u !== "" && u !== null && (l.value = u),
      In(l));
  }
  function wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var $s = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function qi(l, t, a) {
    var u = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? u
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : u
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || $s.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function ji(l, t, a) {
    if (t != null && typeof t != "object") throw Error(v(62));
    if (((l = l.style), a != null)) {
      for (var u in a)
        !a.hasOwnProperty(u) ||
          (t != null && t.hasOwnProperty(u)) ||
          (u.indexOf("--") === 0
            ? l.setProperty(u, "")
            : u === "float"
              ? (l.cssFloat = "")
              : (l[u] = ""));
      for (var e in t)
        ((u = t[e]), t.hasOwnProperty(e) && a[e] !== u && qi(l, e, u));
    } else for (var n in t) t.hasOwnProperty(n) && qi(l, n, t[n]);
  }
  function tc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fs = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    ks =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function xe(l) {
    return ks.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function Nt() {}
  var ac = null;
  function uc(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Wa = null,
    $a = null;
  function Bi(l) {
    var t = La(l);
    if (t && (l = t.stateNode)) {
      var a = l[Xl] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (Pn(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + it("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var u = a[t];
              if (u !== l && u.form === l.form) {
                var e = u[Xl] || null;
                if (!e) throw Error(v(90));
                Pn(
                  u,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((u = a[t]), u.form === l.form && Ni(u));
          }
          break l;
        case "textarea":
          Ci(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && Ja(l, !!a.multiple, t, !1));
      }
    }
  }
  var ec = !1;
  function Yi(l, t, a) {
    if (ec) return l(t, a);
    ec = !0;
    try {
      var u = l(t);
      return u;
    } finally {
      if (
        ((ec = !1),
        (Wa !== null || $a !== null) &&
          (Sn(), Wa && ((t = Wa), (l = $a), ($a = Wa = null), Bi(t), l)))
      )
        for (t = 0; t < l.length; t++) Bi(l[t]);
    }
  }
  function Nu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var u = a[Xl] || null;
    if (u === null) return null;
    a = u[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        ((u = !u.disabled) ||
          ((l = l.type),
          (u = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !u));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(v(231, t, typeof a));
    return a;
  }
  var Ht = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    nc = !1;
  if (Ht)
    try {
      var Hu = {};
      (Object.defineProperty(Hu, "passive", {
        get: function () {
          nc = !0;
        },
      }),
        window.addEventListener("test", Hu, Hu),
        window.removeEventListener("test", Hu, Hu));
    } catch {
      nc = !1;
    }
  var kt = null,
    cc = null,
    Ne = null;
  function Gi() {
    if (Ne) return Ne;
    var l,
      t = cc,
      a = t.length,
      u,
      e = "value" in kt ? kt.value : kt.textContent,
      n = e.length;
    for (l = 0; l < a && t[l] === e[l]; l++);
    var c = a - l;
    for (u = 1; u <= c && t[a - u] === e[n - u]; u++);
    return (Ne = e.slice(l, 1 < u ? 1 - u : void 0));
  }
  function He(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Ce() {
    return !0;
  }
  function Zi() {
    return !1;
  }
  function Ll(l) {
    function t(a, u, e, n, c) {
      ((this._reactName = a),
        (this._targetInst = e),
        (this.type = u),
        (this.nativeEvent = n),
        (this.target = c),
        (this.currentTarget = null));
      for (var f in l)
        l.hasOwnProperty(f) && ((a = l[f]), (this[f] = a ? a(n) : n[f]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Ce
          : Zi),
        (this.isPropagationStopped = Zi),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Ce));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Ce));
        },
        persist: function () {},
        isPersistent: Ce,
      }),
      t
    );
  }
  var _a = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Re = Ll(_a),
    Cu = H({}, _a, { view: 0, detail: 0 }),
    Is = Ll(Cu),
    fc,
    ic,
    Ru,
    qe = H({}, Cu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: dc,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Ru &&
              (Ru && l.type === "mousemove"
                ? ((fc = l.screenX - Ru.screenX), (ic = l.screenY - Ru.screenY))
                : (ic = fc = 0),
              (Ru = l)),
            fc);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : ic;
      },
    }),
    Qi = Ll(qe),
    Ps = H({}, qe, { dataTransfer: 0 }),
    l3 = Ll(Ps),
    t3 = H({}, Cu, { relatedTarget: 0 }),
    sc = Ll(t3),
    a3 = H({}, _a, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    u3 = Ll(a3),
    e3 = H({}, _a, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    n3 = Ll(e3),
    c3 = H({}, _a, { data: 0 }),
    Xi = Ll(c3),
    f3 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    i3 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    s3 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function d3(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = s3[l])
        ? !!t[l]
        : !1;
  }
  function dc() {
    return d3;
  }
  var m3 = H({}, Cu, {
      key: function (l) {
        if (l.key) {
          var t = f3[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = He(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? i3[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: dc,
      charCode: function (l) {
        return l.type === "keypress" ? He(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? He(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    o3 = Ll(m3),
    v3 = H({}, qe, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Li = Ll(v3),
    y3 = H({}, Cu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: dc,
    }),
    h3 = Ll(y3),
    g3 = H({}, _a, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    r3 = Ll(g3),
    S3 = H({}, qe, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    b3 = Ll(S3),
    z3 = H({}, _a, { newState: 0, oldState: 0 }),
    T3 = Ll(z3),
    E3 = [9, 13, 27, 32],
    mc = Ht && "CompositionEvent" in window,
    qu = null;
  Ht && "documentMode" in document && (qu = document.documentMode);
  var A3 = Ht && "TextEvent" in window && !qu,
    Vi = Ht && (!mc || (qu && 8 < qu && 11 >= qu)),
    Ki = " ",
    Ji = !1;
  function wi(l, t) {
    switch (l) {
      case "keyup":
        return E3.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Wi(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var Fa = !1;
  function _3(l, t) {
    switch (l) {
      case "compositionend":
        return Wi(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ji = !0), Ki);
      case "textInput":
        return ((l = t.data), l === Ki && Ji ? null : l);
      default:
        return null;
    }
  }
  function p3(l, t) {
    if (Fa)
      return l === "compositionend" || (!mc && wi(l, t))
        ? ((l = Gi()), (Ne = cc = kt = null), (Fa = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var D3 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function $i(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!D3[l.type] : t === "textarea";
  }
  function Fi(l, t, a, u) {
    (Wa ? ($a ? $a.push(u) : ($a = [u])) : (Wa = u),
      (t = pn(t, "onChange")),
      0 < t.length &&
        ((a = new Re("onChange", "change", null, a, u)),
        l.push({ event: a, listeners: t })));
  }
  var ju = null,
    Bu = null;
  function O3(l) {
    H1(l, 0);
  }
  function je(l) {
    var t = xu(l);
    if (Ni(t)) return l;
  }
  function ki(l, t) {
    if (l === "change") return t;
  }
  var Ii = !1;
  if (Ht) {
    var oc;
    if (Ht) {
      var vc = "oninput" in document;
      if (!vc) {
        var Pi = document.createElement("div");
        (Pi.setAttribute("oninput", "return;"),
          (vc = typeof Pi.oninput == "function"));
      }
      oc = vc;
    } else oc = !1;
    Ii = oc && (!document.documentMode || 9 < document.documentMode);
  }
  function l0() {
    ju && (ju.detachEvent("onpropertychange", t0), (Bu = ju = null));
  }
  function t0(l) {
    if (l.propertyName === "value" && je(Bu)) {
      var t = [];
      (Fi(t, Bu, l, uc(l)), Yi(O3, t));
    }
  }
  function M3(l, t, a) {
    l === "focusin"
      ? (l0(), (ju = t), (Bu = a), ju.attachEvent("onpropertychange", t0))
      : l === "focusout" && l0();
  }
  function U3(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return je(Bu);
  }
  function x3(l, t) {
    if (l === "click") return je(t);
  }
  function N3(l, t) {
    if (l === "input" || l === "change") return je(t);
  }
  function H3(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Pl = typeof Object.is == "function" ? Object.is : H3;
  function Yu(l, t) {
    if (Pl(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      u = Object.keys(t);
    if (a.length !== u.length) return !1;
    for (u = 0; u < a.length; u++) {
      var e = a[u];
      if (!Vn.call(t, e) || !Pl(l[e], t[e])) return !1;
    }
    return !0;
  }
  function a0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function u0(l, t) {
    var a = a0(l);
    l = 0;
    for (var u; a; ) {
      if (a.nodeType === 3) {
        if (((u = l + a.textContent.length), l <= t && u >= t))
          return { node: a, offset: t - l };
        l = u;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = a0(a);
    }
  }
  function e0(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? e0(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function n0(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Ue(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ue(l.document);
    }
    return t;
  }
  function yc(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var C3 = Ht && "documentMode" in document && 11 >= document.documentMode,
    ka = null,
    hc = null,
    Gu = null,
    gc = !1;
  function c0(l, t, a) {
    var u =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    gc ||
      ka == null ||
      ka !== Ue(u) ||
      ((u = ka),
      "selectionStart" in u && yc(u)
        ? (u = { start: u.selectionStart, end: u.selectionEnd })
        : ((u = (
            (u.ownerDocument && u.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (u = {
            anchorNode: u.anchorNode,
            anchorOffset: u.anchorOffset,
            focusNode: u.focusNode,
            focusOffset: u.focusOffset,
          })),
      (Gu && Yu(Gu, u)) ||
        ((Gu = u),
        (u = pn(hc, "onSelect")),
        0 < u.length &&
          ((t = new Re("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: u }),
          (t.target = ka))));
  }
  function pa(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Ia = {
      animationend: pa("Animation", "AnimationEnd"),
      animationiteration: pa("Animation", "AnimationIteration"),
      animationstart: pa("Animation", "AnimationStart"),
      transitionrun: pa("Transition", "TransitionRun"),
      transitionstart: pa("Transition", "TransitionStart"),
      transitioncancel: pa("Transition", "TransitionCancel"),
      transitionend: pa("Transition", "TransitionEnd"),
    },
    rc = {},
    f0 = {};
  Ht &&
    ((f0 = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ia.animationend.animation,
      delete Ia.animationiteration.animation,
      delete Ia.animationstart.animation),
    "TransitionEvent" in window || delete Ia.transitionend.transition);
  function Da(l) {
    if (rc[l]) return rc[l];
    if (!Ia[l]) return l;
    var t = Ia[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in f0) return (rc[l] = t[a]);
    return l;
  }
  var i0 = Da("animationend"),
    s0 = Da("animationiteration"),
    d0 = Da("animationstart"),
    R3 = Da("transitionrun"),
    q3 = Da("transitionstart"),
    j3 = Da("transitioncancel"),
    m0 = Da("transitionend"),
    o0 = new Map(),
    Sc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  Sc.push("scrollEnd");
  function St(l, t) {
    (o0.set(l, t), Aa(t, [l]));
  }
  var Be =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    st = [],
    Pa = 0,
    bc = 0;
  function Ye() {
    for (var l = Pa, t = (bc = Pa = 0); t < l; ) {
      var a = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var n = st[t];
      if (((st[t++] = null), u !== null && e !== null)) {
        var c = u.pending;
        (c === null ? (e.next = e) : ((e.next = c.next), (c.next = e)),
          (u.pending = e));
      }
      n !== 0 && v0(a, e, n);
    }
  }
  function Ge(l, t, a, u) {
    ((st[Pa++] = l),
      (st[Pa++] = t),
      (st[Pa++] = a),
      (st[Pa++] = u),
      (bc |= u),
      (l.lanes |= u),
      (l = l.alternate),
      l !== null && (l.lanes |= u));
  }
  function zc(l, t, a, u) {
    return (Ge(l, t, a, u), Ze(l));
  }
  function Oa(l, t) {
    return (Ge(l, null, null, t), Ze(l));
  }
  function v0(l, t, a) {
    l.lanes |= a;
    var u = l.alternate;
    u !== null && (u.lanes |= a);
    for (var e = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (u = n.alternate),
        u !== null && (u.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (e = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        e &&
          t !== null &&
          ((e = 31 - Il(a)),
          (l = n.hiddenUpdates),
          (u = l[e]),
          u === null ? (l[e] = [t]) : u.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Ze(l) {
    if (50 < fe) throw ((fe = 0), (xf = null), Error(v(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var lu = {};
  function B3(l, t, a, u) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = u),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function lt(l, t, a, u) {
    return new B3(l, t, a, u);
  }
  function Tc(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Ct(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = lt(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function y0(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Qe(l, t, a, u, e, n) {
    var c = 0;
    if (((u = l), typeof l == "function")) Tc(l) && (c = 1);
    else if (typeof l == "string")
      c = Xd(l, a, x.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case Et:
          return (
            (l = lt(31, a, t, e)),
            (l.elementType = Et),
            (l.lanes = n),
            l
          );
        case ql:
          return Ma(a.children, e, n, t);
        case Mt:
          ((c = 8), (e |= 24));
          break;
        case $l:
          return (
            (l = lt(12, a, t, e | 2)),
            (l.elementType = $l),
            (l.lanes = n),
            l
          );
        case Tt:
          return (
            (l = lt(13, a, t, e)),
            (l.elementType = Tt),
            (l.lanes = n),
            l
          );
        case Gl:
          return (
            (l = lt(19, a, t, e)),
            (l.elementType = Gl),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Cl:
                c = 10;
                break l;
              case Wt:
                c = 9;
                break l;
              case ct:
                c = 11;
                break l;
              case $:
                c = 14;
                break l;
              case Zl:
                ((c = 16), (u = null));
                break l;
            }
          ((c = 29),
            (a = Error(v(130, l === null ? "null" : typeof l, ""))),
            (u = null));
      }
    return (
      (t = lt(c, a, t, e)),
      (t.elementType = l),
      (t.type = u),
      (t.lanes = n),
      t
    );
  }
  function Ma(l, t, a, u) {
    return ((l = lt(7, l, u, t)), (l.lanes = a), l);
  }
  function Ec(l, t, a) {
    return ((l = lt(6, l, null, t)), (l.lanes = a), l);
  }
  function h0(l) {
    var t = lt(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function Ac(l, t, a) {
    return (
      (t = lt(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var g0 = new WeakMap();
  function dt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = g0.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: hi(t) }), g0.set(l, t), t);
    }
    return { value: l, source: t, stack: hi(t) };
  }
  var tu = [],
    au = 0,
    Xe = null,
    Zu = 0,
    mt = [],
    ot = 0,
    It = null,
    _t = 1,
    pt = "";
  function Rt(l, t) {
    ((tu[au++] = Zu), (tu[au++] = Xe), (Xe = l), (Zu = t));
  }
  function r0(l, t, a) {
    ((mt[ot++] = _t), (mt[ot++] = pt), (mt[ot++] = It), (It = l));
    var u = _t;
    l = pt;
    var e = 32 - Il(u) - 1;
    ((u &= ~(1 << e)), (a += 1));
    var n = 32 - Il(t) + e;
    if (30 < n) {
      var c = e - (e % 5);
      ((n = (u & ((1 << c) - 1)).toString(32)),
        (u >>= c),
        (e -= c),
        (_t = (1 << (32 - Il(t) + e)) | (a << e) | u),
        (pt = n + l));
    } else ((_t = (1 << n) | (a << e) | u), (pt = l));
  }
  function _c(l) {
    l.return !== null && (Rt(l, 1), r0(l, 1, 0));
  }
  function pc(l) {
    for (; l === Xe; )
      ((Xe = tu[--au]), (tu[au] = null), (Zu = tu[--au]), (tu[au] = null));
    for (; l === It; )
      ((It = mt[--ot]),
        (mt[ot] = null),
        (pt = mt[--ot]),
        (mt[ot] = null),
        (_t = mt[--ot]),
        (mt[ot] = null));
  }
  function S0(l, t) {
    ((mt[ot++] = _t),
      (mt[ot++] = pt),
      (mt[ot++] = It),
      (_t = t.id),
      (pt = t.overflow),
      (It = l));
  }
  var Ul = null,
    ol = null,
    F = !1,
    Pt = null,
    vt = !1,
    Dc = Error(v(519));
  function la(l) {
    var t = Error(
      v(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Qu(dt(t, l)), Dc);
  }
  function b0(l) {
    var t = l.stateNode,
      a = l.type,
      u = l.memoizedProps;
    switch (((t[Ml] = l), (t[Xl] = u), a)) {
      case "dialog":
        (K("cancel", t), K("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        K("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < se.length; a++) K(se[a], t);
        break;
      case "source":
        K("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (K("error", t), K("load", t));
        break;
      case "details":
        K("toggle", t);
        break;
      case "input":
        (K("invalid", t),
          Hi(
            t,
            u.value,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name,
            !0,
          ));
        break;
      case "select":
        K("invalid", t);
        break;
      case "textarea":
        (K("invalid", t), Ri(t, u.value, u.defaultValue, u.children));
    }
    ((a = u.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      u.suppressHydrationWarning === !0 ||
      j1(t.textContent, a)
        ? (u.popover != null && (K("beforetoggle", t), K("toggle", t)),
          u.onScroll != null && K("scroll", t),
          u.onScrollEnd != null && K("scrollend", t),
          u.onClick != null && (t.onclick = Nt),
          (t = !0))
        : (t = !1),
      t || la(l, !0));
  }
  function z0(l) {
    for (Ul = l.return; Ul; )
      switch (Ul.tag) {
        case 5:
        case 31:
        case 13:
          vt = !1;
          return;
        case 27:
        case 3:
          vt = !0;
          return;
        default:
          Ul = Ul.return;
      }
  }
  function uu(l) {
    if (l !== Ul) return !1;
    if (!F) return (z0(l), (F = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Kf(l.type, l.memoizedProps))),
        (a = !a)),
      a && ol && la(l),
      z0(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(v(317));
      ol = K1(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(v(317));
      ol = K1(l);
    } else
      t === 27
        ? ((t = ol), ya(l.type) ? ((l = Ff), (Ff = null), (ol = l)) : (ol = t))
        : (ol = Ul ? ht(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ua() {
    ((ol = Ul = null), (F = !1));
  }
  function Oc() {
    var l = Pt;
    return (
      l !== null &&
        (wl === null ? (wl = l) : wl.push.apply(wl, l), (Pt = null)),
      l
    );
  }
  function Qu(l) {
    Pt === null ? (Pt = [l]) : Pt.push(l);
  }
  var Mc = d(null),
    xa = null,
    qt = null;
  function ta(l, t, a) {
    (O(Mc, t._currentValue), (t._currentValue = a));
  }
  function jt(l) {
    ((l._currentValue = Mc.current), A(Mc));
  }
  function Uc(l, t, a) {
    for (; l !== null; ) {
      var u = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), u !== null && (u.childLanes |= t))
          : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function xc(l, t, a, u) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var c = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var f = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (f.context === t[i]) {
              ((n.lanes |= a),
                (f = n.alternate),
                f !== null && (f.lanes |= a),
                Uc(n.return, a, l),
                u || (c = null));
              break l;
            }
          n = f.next;
        }
      } else if (e.tag === 18) {
        if (((c = e.return), c === null)) throw Error(v(341));
        ((c.lanes |= a),
          (n = c.alternate),
          n !== null && (n.lanes |= a),
          Uc(c, a, l),
          (c = null));
      } else c = e.child;
      if (c !== null) c.return = e;
      else
        for (c = e; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (((e = c.sibling), e !== null)) {
            ((e.return = c.return), (c = e));
            break;
          }
          c = c.return;
        }
      e = c;
    }
  }
  function eu(l, t, a, u) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var c = e.alternate;
        if (c === null) throw Error(v(387));
        if (((c = c.memoizedProps), c !== null)) {
          var f = e.type;
          Pl(e.pendingProps.value, c.value) ||
            (l !== null ? l.push(f) : (l = [f]));
        }
      } else if (e === al.current) {
        if (((c = e.alternate), c === null)) throw Error(v(387));
        c.memoizedState.memoizedState !== e.memoizedState.memoizedState &&
          (l !== null ? l.push(ye) : (l = [ye]));
      }
      e = e.return;
    }
    (l !== null && xc(t, l, a, u), (t.flags |= 262144));
  }
  function Le(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function Na(l) {
    ((xa = l),
      (qt = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function xl(l) {
    return T0(xa, l);
  }
  function Ve(l, t) {
    return (xa === null && Na(l), T0(l, t));
  }
  function T0(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), qt === null)) {
      if (l === null) throw Error(v(308));
      ((qt = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else qt = qt.next = t;
    return a;
  }
  var Y3 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, u) {
                  l.push(u);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    G3 = o.unstable_scheduleCallback,
    Z3 = o.unstable_NormalPriority,
    zl = {
      $$typeof: Cl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Nc() {
    return { controller: new Y3(), data: new Map(), refCount: 0 };
  }
  function Xu(l) {
    (l.refCount--,
      l.refCount === 0 &&
        G3(Z3, function () {
          l.controller.abort();
        }));
  }
  var Lu = null,
    Hc = 0,
    nu = 0,
    cu = null;
  function Q3(l, t) {
    if (Lu === null) {
      var a = (Lu = []);
      ((Hc = 0),
        (nu = jf()),
        (cu = {
          status: "pending",
          value: void 0,
          then: function (u) {
            a.push(u);
          },
        }));
    }
    return (Hc++, t.then(E0, E0), t);
  }
  function E0() {
    if (--Hc === 0 && Lu !== null) {
      cu !== null && (cu.status = "fulfilled");
      var l = Lu;
      ((Lu = null), (nu = 0), (cu = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function X3(l, t) {
    var a = [],
      u = {
        status: "pending",
        value: null,
        reason: null,
        then: function (e) {
          a.push(e);
        },
      };
    return (
      l.then(
        function () {
          ((u.status = "fulfilled"), (u.value = t));
          for (var e = 0; e < a.length; e++) (0, a[e])(t);
        },
        function (e) {
          for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++)
            (0, a[e])(void 0);
        },
      ),
      u
    );
  }
  var A0 = b.S;
  b.S = function (l, t) {
    ((c1 = Fl()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        Q3(l, t),
      A0 !== null && A0(l, t));
  };
  var Ha = d(null);
  function Cc() {
    var l = Ha.current;
    return l !== null ? l : ml.pooledCache;
  }
  function Ke(l, t) {
    t === null ? O(Ha, Ha.current) : O(Ha, t.pool);
  }
  function _0() {
    var l = Cc();
    return l === null ? null : { parent: zl._currentValue, pool: l };
  }
  var fu = Error(v(460)),
    Rc = Error(v(474)),
    Je = Error(v(542)),
    we = { then: function () {} };
  function p0(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function D0(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(Nt, Nt), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), M0(l), l);
      default:
        if (typeof t.status == "string") t.then(Nt, Nt);
        else {
          if (((l = ml), l !== null && 100 < l.shellSuspendCounter))
            throw Error(v(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "fulfilled"), (e.value = u));
                }
              },
              function (u) {
                if (t.status === "pending") {
                  var e = t;
                  ((e.status = "rejected"), (e.reason = u));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), M0(l), l);
        }
        throw ((Ra = t), fu);
    }
  }
  function Ca(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Ra = a), fu)
        : a;
    }
  }
  var Ra = null;
  function O0() {
    if (Ra === null) throw Error(v(459));
    var l = Ra;
    return ((Ra = null), l);
  }
  function M0(l) {
    if (l === fu || l === Je) throw Error(v(483));
  }
  var iu = null,
    Vu = 0;
  function We(l) {
    var t = Vu;
    return ((Vu += 1), iu === null && (iu = []), D0(iu, l, t));
  }
  function Ku(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function $e(l, t) {
    throw t.$$typeof === ll
      ? Error(v(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          v(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function U0(l) {
    function t(m, s) {
      if (l) {
        var y = m.deletions;
        y === null ? ((m.deletions = [s]), (m.flags |= 16)) : y.push(s);
      }
    }
    function a(m, s) {
      if (!l) return null;
      for (; s !== null; ) (t(m, s), (s = s.sibling));
      return null;
    }
    function u(m) {
      for (var s = new Map(); m !== null; )
        (m.key !== null ? s.set(m.key, m) : s.set(m.index, m), (m = m.sibling));
      return s;
    }
    function e(m, s) {
      return ((m = Ct(m, s)), (m.index = 0), (m.sibling = null), m);
    }
    function n(m, s, y) {
      return (
        (m.index = y),
        l
          ? ((y = m.alternate),
            y !== null
              ? ((y = y.index), y < s ? ((m.flags |= 67108866), s) : y)
              : ((m.flags |= 67108866), s))
          : ((m.flags |= 1048576), s)
      );
    }
    function c(m) {
      return (l && m.alternate === null && (m.flags |= 67108866), m);
    }
    function f(m, s, y, z) {
      return s === null || s.tag !== 6
        ? ((s = Ec(y, m.mode, z)), (s.return = m), s)
        : ((s = e(s, y)), (s.return = m), s);
    }
    function i(m, s, y, z) {
      var C = y.type;
      return C === ql
        ? S(m, s, y.props.children, z, y.key)
        : s !== null &&
            (s.elementType === C ||
              (typeof C == "object" &&
                C !== null &&
                C.$$typeof === Zl &&
                Ca(C) === s.type))
          ? ((s = e(s, y.props)), Ku(s, y), (s.return = m), s)
          : ((s = Qe(y.type, y.key, y.props, null, m.mode, z)),
            Ku(s, y),
            (s.return = m),
            s);
    }
    function h(m, s, y, z) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== y.containerInfo ||
        s.stateNode.implementation !== y.implementation
        ? ((s = Ac(y, m.mode, z)), (s.return = m), s)
        : ((s = e(s, y.children || [])), (s.return = m), s);
    }
    function S(m, s, y, z, C) {
      return s === null || s.tag !== 7
        ? ((s = Ma(y, m.mode, z, C)), (s.return = m), s)
        : ((s = e(s, y)), (s.return = m), s);
    }
    function T(m, s, y) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return ((s = Ec("" + s, m.mode, y)), (s.return = m), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case pl:
            return (
              (y = Qe(s.type, s.key, s.props, null, m.mode, y)),
              Ku(y, s),
              (y.return = m),
              y
            );
          case Yl:
            return ((s = Ac(s, m.mode, y)), (s.return = m), s);
          case Zl:
            return ((s = Ca(s)), T(m, s, y));
        }
        if (rt(s) || Ql(s))
          return ((s = Ma(s, m.mode, y, null)), (s.return = m), s);
        if (typeof s.then == "function") return T(m, We(s), y);
        if (s.$$typeof === Cl) return T(m, Ve(m, s), y);
        $e(m, s);
      }
      return null;
    }
    function g(m, s, y, z) {
      var C = s !== null ? s.key : null;
      if (
        (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
      )
        return C !== null ? null : f(m, s, "" + y, z);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case pl:
            return y.key === C ? i(m, s, y, z) : null;
          case Yl:
            return y.key === C ? h(m, s, y, z) : null;
          case Zl:
            return ((y = Ca(y)), g(m, s, y, z));
        }
        if (rt(y) || Ql(y)) return C !== null ? null : S(m, s, y, z, null);
        if (typeof y.then == "function") return g(m, s, We(y), z);
        if (y.$$typeof === Cl) return g(m, s, Ve(m, y), z);
        $e(m, y);
      }
      return null;
    }
    function r(m, s, y, z, C) {
      if (
        (typeof z == "string" && z !== "") ||
        typeof z == "number" ||
        typeof z == "bigint"
      )
        return ((m = m.get(y) || null), f(s, m, "" + z, C));
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case pl:
            return (
              (m = m.get(z.key === null ? y : z.key) || null),
              i(s, m, z, C)
            );
          case Yl:
            return (
              (m = m.get(z.key === null ? y : z.key) || null),
              h(s, m, z, C)
            );
          case Zl:
            return ((z = Ca(z)), r(m, s, y, z, C));
        }
        if (rt(z) || Ql(z))
          return ((m = m.get(y) || null), S(s, m, z, C, null));
        if (typeof z.then == "function") return r(m, s, y, We(z), C);
        if (z.$$typeof === Cl) return r(m, s, y, Ve(s, z), C);
        $e(s, z);
      }
      return null;
    }
    function M(m, s, y, z) {
      for (
        var C = null, I = null, N = s, X = (s = 0), w = null;
        N !== null && X < y.length;
        X++
      ) {
        N.index > X ? ((w = N), (N = null)) : (w = N.sibling);
        var P = g(m, N, y[X], z);
        if (P === null) {
          N === null && (N = w);
          break;
        }
        (l && N && P.alternate === null && t(m, N),
          (s = n(P, s, X)),
          I === null ? (C = P) : (I.sibling = P),
          (I = P),
          (N = w));
      }
      if (X === y.length) return (a(m, N), F && Rt(m, X), C);
      if (N === null) {
        for (; X < y.length; X++)
          ((N = T(m, y[X], z)),
            N !== null &&
              ((s = n(N, s, X)),
              I === null ? (C = N) : (I.sibling = N),
              (I = N)));
        return (F && Rt(m, X), C);
      }
      for (N = u(N); X < y.length; X++)
        ((w = r(N, m, X, y[X], z)),
          w !== null &&
            (l && w.alternate !== null && N.delete(w.key === null ? X : w.key),
            (s = n(w, s, X)),
            I === null ? (C = w) : (I.sibling = w),
            (I = w)));
      return (
        l &&
          N.forEach(function (ba) {
            return t(m, ba);
          }),
        F && Rt(m, X),
        C
      );
    }
    function q(m, s, y, z) {
      if (y == null) throw Error(v(151));
      for (
        var C = null, I = null, N = s, X = (s = 0), w = null, P = y.next();
        N !== null && !P.done;
        X++, P = y.next()
      ) {
        N.index > X ? ((w = N), (N = null)) : (w = N.sibling);
        var ba = g(m, N, P.value, z);
        if (ba === null) {
          N === null && (N = w);
          break;
        }
        (l && N && ba.alternate === null && t(m, N),
          (s = n(ba, s, X)),
          I === null ? (C = ba) : (I.sibling = ba),
          (I = ba),
          (N = w));
      }
      if (P.done) return (a(m, N), F && Rt(m, X), C);
      if (N === null) {
        for (; !P.done; X++, P = y.next())
          ((P = T(m, P.value, z)),
            P !== null &&
              ((s = n(P, s, X)),
              I === null ? (C = P) : (I.sibling = P),
              (I = P)));
        return (F && Rt(m, X), C);
      }
      for (N = u(N); !P.done; X++, P = y.next())
        ((P = r(N, m, X, P.value, z)),
          P !== null &&
            (l && P.alternate !== null && N.delete(P.key === null ? X : P.key),
            (s = n(P, s, X)),
            I === null ? (C = P) : (I.sibling = P),
            (I = P)));
      return (
        l &&
          N.forEach(function (Pd) {
            return t(m, Pd);
          }),
        F && Rt(m, X),
        C
      );
    }
    function il(m, s, y, z) {
      if (
        (typeof y == "object" &&
          y !== null &&
          y.type === ql &&
          y.key === null &&
          (y = y.props.children),
        typeof y == "object" && y !== null)
      ) {
        switch (y.$$typeof) {
          case pl:
            l: {
              for (var C = y.key; s !== null; ) {
                if (s.key === C) {
                  if (((C = y.type), C === ql)) {
                    if (s.tag === 7) {
                      (a(m, s.sibling),
                        (z = e(s, y.props.children)),
                        (z.return = m),
                        (m = z));
                      break l;
                    }
                  } else if (
                    s.elementType === C ||
                    (typeof C == "object" &&
                      C !== null &&
                      C.$$typeof === Zl &&
                      Ca(C) === s.type)
                  ) {
                    (a(m, s.sibling),
                      (z = e(s, y.props)),
                      Ku(z, y),
                      (z.return = m),
                      (m = z));
                    break l;
                  }
                  a(m, s);
                  break;
                } else t(m, s);
                s = s.sibling;
              }
              y.type === ql
                ? ((z = Ma(y.props.children, m.mode, z, y.key)),
                  (z.return = m),
                  (m = z))
                : ((z = Qe(y.type, y.key, y.props, null, m.mode, z)),
                  Ku(z, y),
                  (z.return = m),
                  (m = z));
            }
            return c(m);
          case Yl:
            l: {
              for (C = y.key; s !== null; ) {
                if (s.key === C)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === y.containerInfo &&
                    s.stateNode.implementation === y.implementation
                  ) {
                    (a(m, s.sibling),
                      (z = e(s, y.children || [])),
                      (z.return = m),
                      (m = z));
                    break l;
                  } else {
                    a(m, s);
                    break;
                  }
                else t(m, s);
                s = s.sibling;
              }
              ((z = Ac(y, m.mode, z)), (z.return = m), (m = z));
            }
            return c(m);
          case Zl:
            return ((y = Ca(y)), il(m, s, y, z));
        }
        if (rt(y)) return M(m, s, y, z);
        if (Ql(y)) {
          if (((C = Ql(y)), typeof C != "function")) throw Error(v(150));
          return ((y = C.call(y)), q(m, s, y, z));
        }
        if (typeof y.then == "function") return il(m, s, We(y), z);
        if (y.$$typeof === Cl) return il(m, s, Ve(m, y), z);
        $e(m, y);
      }
      return (typeof y == "string" && y !== "") ||
        typeof y == "number" ||
        typeof y == "bigint"
        ? ((y = "" + y),
          s !== null && s.tag === 6
            ? (a(m, s.sibling), (z = e(s, y)), (z.return = m), (m = z))
            : (a(m, s), (z = Ec(y, m.mode, z)), (z.return = m), (m = z)),
          c(m))
        : a(m, s);
    }
    return function (m, s, y, z) {
      try {
        Vu = 0;
        var C = il(m, s, y, z);
        return ((iu = null), C);
      } catch (N) {
        if (N === fu || N === Je) throw N;
        var I = lt(29, N, null, m.mode);
        return ((I.lanes = z), (I.return = m), I);
      } finally {
      }
    };
  }
  var qa = U0(!0),
    x0 = U0(!1),
    aa = !1;
  function qc(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function jc(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ua(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ea(l, t, a) {
    var u = l.updateQueue;
    if (u === null) return null;
    if (((u = u.shared), (tl & 2) !== 0)) {
      var e = u.pending;
      return (
        e === null ? (t.next = t) : ((t.next = e.next), (e.next = t)),
        (u.pending = t),
        (t = Ze(l)),
        v0(l, null, a),
        t
      );
    }
    return (Ge(l, u, t, a), Ze(l));
  }
  function Ju(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Ti(l, a));
    }
  }
  function Bc(l, t) {
    var a = l.updateQueue,
      u = l.alternate;
    if (u !== null && ((u = u.updateQueue), a === u)) {
      var e = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (e = n = c) : (n = n.next = c), (a = a.next));
        } while (a !== null);
        n === null ? (e = n = t) : (n = n.next = t);
      } else e = n = t;
      ((a = {
        baseState: u.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: u.shared,
        callbacks: u.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var Yc = !1;
  function wu() {
    if (Yc) {
      var l = cu;
      if (l !== null) throw l;
    }
  }
  function Wu(l, t, a, u) {
    Yc = !1;
    var e = l.updateQueue;
    aa = !1;
    var n = e.firstBaseUpdate,
      c = e.lastBaseUpdate,
      f = e.shared.pending;
    if (f !== null) {
      e.shared.pending = null;
      var i = f,
        h = i.next;
      ((i.next = null), c === null ? (n = h) : (c.next = h), (c = i));
      var S = l.alternate;
      S !== null &&
        ((S = S.updateQueue),
        (f = S.lastBaseUpdate),
        f !== c &&
          (f === null ? (S.firstBaseUpdate = h) : (f.next = h),
          (S.lastBaseUpdate = i)));
    }
    if (n !== null) {
      var T = e.baseState;
      ((c = 0), (S = h = i = null), (f = n));
      do {
        var g = f.lane & -536870913,
          r = g !== f.lane;
        if (r ? (J & g) === g : (u & g) === g) {
          (g !== 0 && g === nu && (Yc = !0),
            S !== null &&
              (S = S.next =
                {
                  lane: 0,
                  tag: f.tag,
                  payload: f.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var M = l,
              q = f;
            g = t;
            var il = a;
            switch (q.tag) {
              case 1:
                if (((M = q.payload), typeof M == "function")) {
                  T = M.call(il, T, g);
                  break l;
                }
                T = M;
                break l;
              case 3:
                M.flags = (M.flags & -65537) | 128;
              case 0:
                if (
                  ((M = q.payload),
                  (g = typeof M == "function" ? M.call(il, T, g) : M),
                  g == null)
                )
                  break l;
                T = H({}, T, g);
                break l;
              case 2:
                aa = !0;
            }
          }
          ((g = f.callback),
            g !== null &&
              ((l.flags |= 64),
              r && (l.flags |= 8192),
              (r = e.callbacks),
              r === null ? (e.callbacks = [g]) : r.push(g)));
        } else
          ((r = {
            lane: g,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null,
          }),
            S === null ? ((h = S = r), (i = T)) : (S = S.next = r),
            (c |= g));
        if (((f = f.next), f === null)) {
          if (((f = e.shared.pending), f === null)) break;
          ((r = f),
            (f = r.next),
            (r.next = null),
            (e.lastBaseUpdate = r),
            (e.shared.pending = null));
        }
      } while (!0);
      (S === null && (i = T),
        (e.baseState = i),
        (e.firstBaseUpdate = h),
        (e.lastBaseUpdate = S),
        n === null && (e.shared.lanes = 0),
        (sa |= c),
        (l.lanes = c),
        (l.memoizedState = T));
    }
  }
  function N0(l, t) {
    if (typeof l != "function") throw Error(v(191, l));
    l.call(t);
  }
  function H0(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) N0(a[l], t);
  }
  var su = d(null),
    Fe = d(0);
  function C0(l, t) {
    ((l = Kt), O(Fe, l), O(su, t), (Kt = l | t.baseLanes));
  }
  function Gc() {
    (O(Fe, Kt), O(su, su.current));
  }
  function Zc() {
    ((Kt = Fe.current), A(su), A(Fe));
  }
  var tt = d(null),
    yt = null;
  function na(l) {
    var t = l.alternate;
    (O(Sl, Sl.current & 1),
      O(tt, l),
      yt === null &&
        (t === null || su.current !== null || t.memoizedState !== null) &&
        (yt = l));
  }
  function Qc(l) {
    (O(Sl, Sl.current), O(tt, l), yt === null && (yt = l));
  }
  function R0(l) {
    l.tag === 22
      ? (O(Sl, Sl.current), O(tt, l), yt === null && (yt = l))
      : ca();
  }
  function ca() {
    (O(Sl, Sl.current), O(tt, tt.current));
  }
  function at(l) {
    (A(tt), yt === l && (yt = null), A(Sl));
  }
  var Sl = d(0);
  function ke(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Wf(a) || $f(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Bt = 0,
    Q = null,
    cl = null,
    Tl = null,
    Ie = !1,
    du = !1,
    ja = !1,
    Pe = 0,
    $u = 0,
    mu = null,
    L3 = 0;
  function hl() {
    throw Error(v(321));
  }
  function Xc(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Lc(l, t, a, u, e, n) {
    return (
      (Bt = n),
      (Q = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (b.H = l === null || l.memoizedState === null ? r2 : ef),
      (ja = !1),
      (n = a(u, e)),
      (ja = !1),
      du && (n = j0(t, a, u, e)),
      q0(l),
      n
    );
  }
  function q0(l) {
    b.H = Iu;
    var t = cl !== null && cl.next !== null;
    if (((Bt = 0), (Tl = cl = Q = null), (Ie = !1), ($u = 0), (mu = null), t))
      throw Error(v(300));
    l === null ||
      El ||
      ((l = l.dependencies), l !== null && Le(l) && (El = !0));
  }
  function j0(l, t, a, u) {
    Q = l;
    var e = 0;
    do {
      if ((du && (mu = null), ($u = 0), (du = !1), 25 <= e))
        throw Error(v(301));
      if (((e += 1), (Tl = cl = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((b.H = S2), (n = t(a, u)));
    } while (du);
    return n;
  }
  function V3() {
    var l = b.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Fu(t) : t),
      (l = l.useState()[0]),
      (cl !== null ? cl.memoizedState : null) !== l && (Q.flags |= 1024),
      t
    );
  }
  function Vc() {
    var l = Pe !== 0;
    return ((Pe = 0), l);
  }
  function Kc(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function Jc(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      Ie = !1;
    }
    ((Bt = 0), (Tl = cl = Q = null), (du = !1), ($u = Pe = 0), (mu = null));
  }
  function Bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Tl === null ? (Q.memoizedState = Tl = l) : (Tl = Tl.next = l), Tl);
  }
  function bl() {
    if (cl === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = cl.next;
    var t = Tl === null ? Q.memoizedState : Tl.next;
    if (t !== null) ((Tl = t), (cl = l));
    else {
      if (l === null)
        throw Q.alternate === null ? Error(v(467)) : Error(v(310));
      ((cl = l),
        (l = {
          memoizedState: cl.memoizedState,
          baseState: cl.baseState,
          baseQueue: cl.baseQueue,
          queue: cl.queue,
          next: null,
        }),
        Tl === null ? (Q.memoizedState = Tl = l) : (Tl = Tl.next = l));
    }
    return Tl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fu(l) {
    var t = $u;
    return (
      ($u += 1),
      mu === null && (mu = []),
      (l = D0(mu, l, t)),
      (t = Q),
      (Tl === null ? t.memoizedState : Tl.next) === null &&
        ((t = t.alternate),
        (b.H = t === null || t.memoizedState === null ? r2 : ef)),
      l
    );
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fu(l);
      if (l.$$typeof === Cl) return xl(l);
    }
    throw Error(v(438, String(l)));
  }
  function wc(l) {
    var t = null,
      a = Q.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var u = Q.alternate;
      u !== null &&
        ((u = u.updateQueue),
        u !== null &&
          ((u = u.memoCache),
          u != null &&
            (t = {
              data: u.data.map(function (e) {
                return e.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = ln()), (Q.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Za;
    return (t.index++, a);
  }
  function Yt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function an(l) {
    var t = bl();
    return Wc(t, cl, l);
  }
  function Wc(l, t, a) {
    var u = l.queue;
    if (u === null) throw Error(v(311));
    u.lastRenderedReducer = a;
    var e = l.baseQueue,
      n = u.pending;
    if (n !== null) {
      if (e !== null) {
        var c = e.next;
        ((e.next = n.next), (n.next = c));
      }
      ((t.baseQueue = e = n), (u.pending = null));
    }
    if (((n = l.baseState), e === null)) l.memoizedState = n;
    else {
      t = e.next;
      var f = (c = null),
        i = null,
        h = t,
        S = !1;
      do {
        var T = h.lane & -536870913;
        if (T !== h.lane ? (J & T) === T : (Bt & T) === T) {
          var g = h.revertLane;
          if (g === 0)
            (i !== null &&
              (i = i.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              T === nu && (S = !0));
          else if ((Bt & g) === g) {
            ((h = h.next), g === nu && (S = !0));
            continue;
          } else
            ((T = {
              lane: 0,
              revertLane: h.revertLane,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              i === null ? ((f = i = T), (c = n)) : (i = i.next = T),
              (Q.lanes |= g),
              (sa |= g));
          ((T = h.action),
            ja && a(n, T),
            (n = h.hasEagerState ? h.eagerState : a(n, T)));
        } else
          ((g = {
            lane: T,
            revertLane: h.revertLane,
            gesture: h.gesture,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            i === null ? ((f = i = g), (c = n)) : (i = i.next = g),
            (Q.lanes |= T),
            (sa |= T));
        h = h.next;
      } while (h !== null && h !== t);
      if (
        (i === null ? (c = n) : (i.next = f),
        !Pl(n, l.memoizedState) && ((El = !0), S && ((a = cu), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = c),
        (l.baseQueue = i),
        (u.lastRenderedState = n));
    }
    return (e === null && (u.lanes = 0), [l.memoizedState, u.dispatch]);
  }
  function $c(l) {
    var t = bl(),
      a = t.queue;
    if (a === null) throw Error(v(311));
    a.lastRenderedReducer = l;
    var u = a.dispatch,
      e = a.pending,
      n = t.memoizedState;
    if (e !== null) {
      a.pending = null;
      var c = (e = e.next);
      do ((n = l(n, c.action)), (c = c.next));
      while (c !== e);
      (Pl(n, t.memoizedState) || (El = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, u];
  }
  function B0(l, t, a) {
    var u = Q,
      e = bl(),
      n = F;
    if (n) {
      if (a === void 0) throw Error(v(407));
      a = a();
    } else a = t();
    var c = !Pl((cl || e).memoizedState, a);
    if (
      (c && ((e.memoizedState = a), (El = !0)),
      (e = e.queue),
      Ic(Z0.bind(null, u, e, l), [l]),
      e.getSnapshot !== t || c || (Tl !== null && Tl.memoizedState.tag & 1))
    ) {
      if (
        ((u.flags |= 2048),
        ou(9, { destroy: void 0 }, G0.bind(null, u, e, a, t), null),
        ml === null)
      )
        throw Error(v(349));
      n || (Bt & 127) !== 0 || Y0(u, t, a);
    }
    return a;
  }
  function Y0(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = Q.updateQueue),
      t === null
        ? ((t = ln()), (Q.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function G0(l, t, a, u) {
    ((t.value = a), (t.getSnapshot = u), Q0(t) && X0(l));
  }
  function Z0(l, t, a) {
    return a(function () {
      Q0(t) && X0(l);
    });
  }
  function Q0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Pl(l, a);
    } catch {
      return !0;
    }
  }
  function X0(l) {
    var t = Oa(l, 2);
    t !== null && Wl(t, l, 2);
  }
  function Fc(l) {
    var t = Bl();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), ja)) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function L0(l, t, a, u) {
    return ((l.baseState = a), Wc(l, cl, typeof u == "function" ? u : Yt));
  }
  function K3(l, t, a, u, e) {
    if (nn(l)) throw Error(v(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (c) {
          n.listeners.push(c);
        },
      };
      (b.T !== null ? a(!0) : (n.isTransition = !1),
        u(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), V0(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function V0(l, t) {
    var a = t.action,
      u = t.payload,
      e = l.state;
    if (t.isTransition) {
      var n = b.T,
        c = {};
      b.T = c;
      try {
        var f = a(e, u),
          i = b.S;
        (i !== null && i(c, f), K0(l, t, f));
      } catch (h) {
        kc(l, t, h);
      } finally {
        (n !== null && c.types !== null && (n.types = c.types), (b.T = n));
      }
    } else
      try {
        ((n = a(e, u)), K0(l, t, n));
      } catch (h) {
        kc(l, t, h);
      }
  }
  function K0(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (u) {
            J0(l, t, u);
          },
          function (u) {
            return kc(l, t, u);
          },
        )
      : J0(l, t, a);
  }
  function J0(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      w0(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), V0(l, a))));
  }
  function kc(l, t, a) {
    var u = l.pending;
    if (((l.pending = null), u !== null)) {
      u = u.next;
      do ((t.status = "rejected"), (t.reason = a), w0(t), (t = t.next));
      while (t !== u);
    }
    l.action = null;
  }
  function w0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function W0(l, t) {
    return t;
  }
  function $0(l, t) {
    if (F) {
      var a = ml.formState;
      if (a !== null) {
        l: {
          var u = Q;
          if (F) {
            if (ol) {
              t: {
                for (var e = ol, n = vt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (((e = ht(e.nextSibling)), e === null)) {
                    e = null;
                    break t;
                  }
                }
                ((n = e.data), (e = n === "F!" || n === "F" ? e : null));
              }
              if (e) {
                ((ol = ht(e.nextSibling)), (u = e.data === "F!"));
                break l;
              }
            }
            la(u);
          }
          u = !1;
        }
        u && (t = a[0]);
      }
    }
    return (
      (a = Bl()),
      (a.memoizedState = a.baseState = t),
      (u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: W0,
        lastRenderedState: t,
      }),
      (a.queue = u),
      (a = y2.bind(null, Q, u)),
      (u.dispatch = a),
      (u = Fc(!1)),
      (n = uf.bind(null, Q, !1, u.queue)),
      (u = Bl()),
      (e = { state: t, dispatch: null, action: l, pending: null }),
      (u.queue = e),
      (a = K3.bind(null, Q, e, n, a)),
      (e.dispatch = a),
      (u.memoizedState = l),
      [t, a, !1]
    );
  }
  function F0(l) {
    var t = bl();
    return k0(t, cl, l);
  }
  function k0(l, t, a) {
    if (
      ((t = Wc(l, t, W0)[0]),
      (l = an(Yt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var u = Fu(t);
      } catch (c) {
        throw c === fu ? Je : c;
      }
    else u = t;
    t = bl();
    var e = t.queue,
      n = e.dispatch;
    return (
      a !== t.memoizedState &&
        ((Q.flags |= 2048),
        ou(9, { destroy: void 0 }, J3.bind(null, e, a), null)),
      [u, n, l]
    );
  }
  function J3(l, t) {
    l.action = t;
  }
  function I0(l) {
    var t = bl(),
      a = cl;
    if (a !== null) return k0(t, a, l);
    (bl(), (t = t.memoizedState), (a = bl()));
    var u = a.queue.dispatch;
    return ((a.memoizedState = l), [t, u, !1]);
  }
  function ou(l, t, a, u) {
    return (
      (l = { tag: l, create: a, deps: u, inst: t, next: null }),
      (t = Q.updateQueue),
      t === null && ((t = ln()), (Q.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((u = a.next), (a.next = l), (l.next = u), (t.lastEffect = l)),
      l
    );
  }
  function P0() {
    return bl().memoizedState;
  }
  function un(l, t, a, u) {
    var e = Bl();
    ((Q.flags |= l),
      (e.memoizedState = ou(
        1 | t,
        { destroy: void 0 },
        a,
        u === void 0 ? null : u,
      )));
  }
  function en(l, t, a, u) {
    var e = bl();
    u = u === void 0 ? null : u;
    var n = e.memoizedState.inst;
    cl !== null && u !== null && Xc(u, cl.memoizedState.deps)
      ? (e.memoizedState = ou(t, n, a, u))
      : ((Q.flags |= l), (e.memoizedState = ou(1 | t, n, a, u)));
  }
  function l2(l, t) {
    un(8390656, 8, l, t);
  }
  function Ic(l, t) {
    en(2048, 8, l, t);
  }
  function w3(l) {
    Q.flags |= 4;
    var t = Q.updateQueue;
    if (t === null) ((t = ln()), (Q.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function t2(l) {
    var t = bl().memoizedState;
    return (
      w3({ ref: t, nextImpl: l }),
      function () {
        if ((tl & 2) !== 0) throw Error(v(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function a2(l, t) {
    return en(4, 2, l, t);
  }
  function u2(l, t) {
    return en(4, 4, l, t);
  }
  function e2(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function n2(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), en(4, 4, e2.bind(null, t, l), a));
  }
  function Pc() {}
  function c2(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    return t !== null && Xc(t, u[1]) ? u[0] : ((a.memoizedState = [l, t]), l);
  }
  function f2(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var u = a.memoizedState;
    if (t !== null && Xc(t, u[1])) return u[0];
    if (((u = l()), ja)) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return ((a.memoizedState = [u, t]), u);
  }
  function lf(l, t, a) {
    return a === void 0 || ((Bt & 1073741824) !== 0 && (J & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = i1()), (Q.lanes |= l), (sa |= l), a);
  }
  function i2(l, t, a, u) {
    return Pl(a, t)
      ? a
      : su.current !== null
        ? ((l = lf(l, a, u)), Pl(l, t) || (El = !0), l)
        : (Bt & 42) === 0 || ((Bt & 1073741824) !== 0 && (J & 261930) === 0)
          ? ((El = !0), (l.memoizedState = a))
          : ((l = i1()), (Q.lanes |= l), (sa |= l), t);
  }
  function s2(l, t, a, u, e) {
    var n = D.p;
    D.p = n !== 0 && 8 > n ? n : 8;
    var c = b.T,
      f = {};
    ((b.T = f), uf(l, !1, t, a));
    try {
      var i = e(),
        h = b.S;
      if (
        (h !== null && h(f, i),
        i !== null && typeof i == "object" && typeof i.then == "function")
      ) {
        var S = X3(i, u);
        ku(l, t, S, nt(l));
      } else ku(l, t, u, nt(l));
    } catch (T) {
      ku(l, t, { then: function () {}, status: "rejected", reason: T }, nt());
    } finally {
      ((D.p = n),
        c !== null && f.types !== null && (c.types = f.types),
        (b.T = c));
    }
  }
  function W3() {}
  function tf(l, t, a, u) {
    if (l.tag !== 5) throw Error(v(476));
    var e = d2(l).queue;
    s2(
      l,
      e,
      t,
      Y,
      a === null
        ? W3
        : function () {
            return (m2(l), a(u));
          },
    );
  }
  function d2(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Yt,
        lastRenderedState: Y,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Yt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function m2(l) {
    var t = d2(l);
    (t.next === null && (t = l.alternate.memoizedState),
      ku(l, t.next.queue, {}, nt()));
  }
  function af() {
    return xl(ye);
  }
  function o2() {
    return bl().memoizedState;
  }
  function v2() {
    return bl().memoizedState;
  }
  function $3(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          l = ua(a);
          var u = ea(t, l, a);
          (u !== null && (Wl(u, t, a), Ju(u, t, a)),
            (t = { cache: Nc() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function F3(l, t, a) {
    var u = nt();
    ((a = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      nn(l)
        ? h2(t, a)
        : ((a = zc(l, t, a, u)), a !== null && (Wl(a, l, u), g2(a, t, u))));
  }
  function y2(l, t, a) {
    var u = nt();
    ku(l, t, a, u);
  }
  function ku(l, t, a, u) {
    var e = {
      lane: u,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (nn(l)) h2(t, e);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var c = t.lastRenderedState,
            f = n(c, a);
          if (((e.hasEagerState = !0), (e.eagerState = f), Pl(f, c)))
            return (Ge(l, t, e, 0), ml === null && Ye(), !1);
        } catch {
        } finally {
        }
      if (((a = zc(l, t, e, u)), a !== null))
        return (Wl(a, l, u), g2(a, t, u), !0);
    }
    return !1;
  }
  function uf(l, t, a, u) {
    if (
      ((u = {
        lane: 2,
        revertLane: jf(),
        gesture: null,
        action: u,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      nn(l))
    ) {
      if (t) throw Error(v(479));
    } else ((t = zc(l, a, u, 2)), t !== null && Wl(t, l, 2));
  }
  function nn(l) {
    var t = l.alternate;
    return l === Q || (t !== null && t === Q);
  }
  function h2(l, t) {
    du = Ie = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function g2(l, t, a) {
    if ((a & 4194048) !== 0) {
      var u = t.lanes;
      ((u &= l.pendingLanes), (a |= u), (t.lanes = a), Ti(l, a));
    }
  }
  var Iu = {
    readContext: xl,
    use: tn,
    useCallback: hl,
    useContext: hl,
    useEffect: hl,
    useImperativeHandle: hl,
    useLayoutEffect: hl,
    useInsertionEffect: hl,
    useMemo: hl,
    useReducer: hl,
    useRef: hl,
    useState: hl,
    useDebugValue: hl,
    useDeferredValue: hl,
    useTransition: hl,
    useSyncExternalStore: hl,
    useId: hl,
    useHostTransitionStatus: hl,
    useFormState: hl,
    useActionState: hl,
    useOptimistic: hl,
    useMemoCache: hl,
    useCacheRefresh: hl,
  };
  Iu.useEffectEvent = hl;
  var r2 = {
      readContext: xl,
      use: tn,
      useCallback: function (l, t) {
        return ((Bl().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: xl,
      useEffect: l2,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          un(4194308, 4, e2.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return un(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        un(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = Bl();
        t = t === void 0 ? null : t;
        var u = l();
        if (ja) {
          $t(!0);
          try {
            l();
          } finally {
            $t(!1);
          }
        }
        return ((a.memoizedState = [u, t]), u);
      },
      useReducer: function (l, t, a) {
        var u = Bl();
        if (a !== void 0) {
          var e = a(t);
          if (ja) {
            $t(!0);
            try {
              a(t);
            } finally {
              $t(!1);
            }
          }
        } else e = t;
        return (
          (u.memoizedState = u.baseState = e),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: e,
          }),
          (u.queue = l),
          (l = l.dispatch = F3.bind(null, Q, l)),
          [u.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = Bl();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = Fc(l);
        var t = l.queue,
          a = y2.bind(null, Q, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: Pc,
      useDeferredValue: function (l, t) {
        var a = Bl();
        return lf(a, l, t);
      },
      useTransition: function () {
        var l = Fc(!1);
        return (
          (l = s2.bind(null, Q, l.queue, !0, !1)),
          (Bl().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var u = Q,
          e = Bl();
        if (F) {
          if (a === void 0) throw Error(v(407));
          a = a();
        } else {
          if (((a = t()), ml === null)) throw Error(v(349));
          (J & 127) !== 0 || Y0(u, t, a);
        }
        e.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (e.queue = n),
          l2(Z0.bind(null, u, n, l), [l]),
          (u.flags |= 2048),
          ou(9, { destroy: void 0 }, G0.bind(null, u, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = Bl(),
          t = ml.identifierPrefix;
        if (F) {
          var a = pt,
            u = _t;
          ((a = (u & ~(1 << (32 - Il(u) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Pe++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = L3++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: af,
      useFormState: $0,
      useActionState: $0,
      useOptimistic: function (l) {
        var t = Bl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = uf.bind(null, Q, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: wc,
      useCacheRefresh: function () {
        return (Bl().memoizedState = $3.bind(null, Q));
      },
      useEffectEvent: function (l) {
        var t = Bl(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((tl & 2) !== 0) throw Error(v(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ef = {
      readContext: xl,
      use: tn,
      useCallback: c2,
      useContext: xl,
      useEffect: Ic,
      useImperativeHandle: n2,
      useInsertionEffect: a2,
      useLayoutEffect: u2,
      useMemo: f2,
      useReducer: an,
      useRef: P0,
      useState: function () {
        return an(Yt);
      },
      useDebugValue: Pc,
      useDeferredValue: function (l, t) {
        var a = bl();
        return i2(a, cl.memoizedState, l, t);
      },
      useTransition: function () {
        var l = an(Yt)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : Fu(l), t];
      },
      useSyncExternalStore: B0,
      useId: o2,
      useHostTransitionStatus: af,
      useFormState: F0,
      useActionState: F0,
      useOptimistic: function (l, t) {
        var a = bl();
        return L0(a, cl, l, t);
      },
      useMemoCache: wc,
      useCacheRefresh: v2,
    };
  ef.useEffectEvent = t2;
  var S2 = {
    readContext: xl,
    use: tn,
    useCallback: c2,
    useContext: xl,
    useEffect: Ic,
    useImperativeHandle: n2,
    useInsertionEffect: a2,
    useLayoutEffect: u2,
    useMemo: f2,
    useReducer: $c,
    useRef: P0,
    useState: function () {
      return $c(Yt);
    },
    useDebugValue: Pc,
    useDeferredValue: function (l, t) {
      var a = bl();
      return cl === null ? lf(a, l, t) : i2(a, cl.memoizedState, l, t);
    },
    useTransition: function () {
      var l = $c(Yt)[0],
        t = bl().memoizedState;
      return [typeof l == "boolean" ? l : Fu(l), t];
    },
    useSyncExternalStore: B0,
    useId: o2,
    useHostTransitionStatus: af,
    useFormState: I0,
    useActionState: I0,
    useOptimistic: function (l, t) {
      var a = bl();
      return cl !== null
        ? L0(a, cl, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: wc,
    useCacheRefresh: v2,
  };
  S2.useEffectEvent = t2;
  function nf(l, t, a, u) {
    ((t = l.memoizedState),
      (a = a(u, t)),
      (a = a == null ? t : H({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var cf = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var u = nt(),
        e = ua(u);
      ((e.payload = t),
        a != null && (e.callback = a),
        (t = ea(l, e, u)),
        t !== null && (Wl(t, l, u), Ju(t, l, u)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var u = nt(),
        e = ua(u);
      ((e.tag = 1),
        (e.payload = t),
        a != null && (e.callback = a),
        (t = ea(l, e, u)),
        t !== null && (Wl(t, l, u), Ju(t, l, u)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = nt(),
        u = ua(a);
      ((u.tag = 2),
        t != null && (u.callback = t),
        (t = ea(l, u, a)),
        t !== null && (Wl(t, l, a), Ju(t, l, a)));
    },
  };
  function b2(l, t, a, u, e, n, c) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(u, n, c)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Yu(a, u) || !Yu(e, n)
          : !0
    );
  }
  function z2(l, t, a, u) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, u),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, u),
      t.state !== l && cf.enqueueReplaceState(t, t.state, null));
  }
  function Ba(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var u in t) u !== "ref" && (a[u] = t[u]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = H({}, a));
      for (var e in l) a[e] === void 0 && (a[e] = l[e]);
    }
    return a;
  }
  function T2(l) {
    Be(l);
  }
  function E2(l) {
    console.error(l);
  }
  function A2(l) {
    Be(l);
  }
  function cn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function _2(l, t, a) {
    try {
      var u = l.onCaughtError;
      u(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function ff(l, t, a) {
    return (
      (a = ua(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        cn(l, t);
      }),
      a
    );
  }
  function p2(l) {
    return ((l = ua(l)), (l.tag = 3), l);
  }
  function D2(l, t, a, u) {
    var e = a.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = u.value;
      ((l.payload = function () {
        return e(n);
      }),
        (l.callback = function () {
          _2(t, a, u);
        }));
    }
    var c = a.stateNode;
    c !== null &&
      typeof c.componentDidCatch == "function" &&
      (l.callback = function () {
        (_2(t, a, u),
          typeof e != "function" &&
            (da === null ? (da = new Set([this])) : da.add(this)));
        var f = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: f !== null ? f : "",
        });
      });
  }
  function k3(l, t, a, u, e) {
    if (
      ((a.flags |= 32768),
      u !== null && typeof u == "object" && typeof u.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && eu(t, a, e, !0),
        (a = tt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              yt === null ? bn() : a.alternate === null && gl === 0 && (gl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = e),
              u === we
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([u])) : t.add(u),
                  Cf(l, u, e)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              u === we
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([u]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([u])) : a.add(u)),
                  Cf(l, u, e)),
              !1
            );
        }
        throw Error(v(435, a.tag));
      }
      return (Cf(l, u, e), bn(), !1);
    }
    if (F)
      return (
        (t = tt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = e),
            u !== Dc && ((l = Error(v(422), { cause: u })), Qu(dt(l, a))))
          : (u !== Dc && ((t = Error(v(423), { cause: u })), Qu(dt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (e &= -e),
            (l.lanes |= e),
            (u = dt(u, a)),
            (e = ff(l.stateNode, u, e)),
            Bc(l, e),
            gl !== 4 && (gl = 2)),
        !1
      );
    var n = Error(v(520), { cause: u });
    if (
      ((n = dt(n, a)),
      ce === null ? (ce = [n]) : ce.push(n),
      gl !== 4 && (gl = 2),
      t === null)
    )
      return !0;
    ((u = dt(u, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = e & -e),
            (a.lanes |= l),
            (l = ff(a.stateNode, u, l)),
            Bc(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (da === null || !da.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (e &= -e),
              (a.lanes |= e),
              (e = p2(e)),
              D2(e, l, a, u),
              Bc(a, e),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var sf = Error(v(461)),
    El = !1;
  function Nl(l, t, a, u) {
    t.child = l === null ? x0(t, null, a, u) : qa(t, l.child, a, u);
  }
  function O2(l, t, a, u, e) {
    a = a.render;
    var n = t.ref;
    if ("ref" in u) {
      var c = {};
      for (var f in u) f !== "ref" && (c[f] = u[f]);
    } else c = u;
    return (
      Na(t),
      (u = Lc(l, t, a, c, n, e)),
      (f = Vc()),
      l !== null && !El
        ? (Kc(l, t, e), Gt(l, t, e))
        : (F && f && _c(t), (t.flags |= 1), Nl(l, t, u, e), t.child)
    );
  }
  function M2(l, t, a, u, e) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Tc(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), U2(l, t, n, u, e))
        : ((l = Qe(a.type, null, u, t, t.mode, e)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !rf(l, e))) {
      var c = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Yu), a(c, u) && l.ref === t.ref)
      )
        return Gt(l, t, e);
    }
    return (
      (t.flags |= 1),
      (l = Ct(n, u)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function U2(l, t, a, u, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Yu(n, u) && l.ref === t.ref)
        if (((El = !1), (t.pendingProps = u = n), rf(l, e)))
          (l.flags & 131072) !== 0 && (El = !0);
        else return ((t.lanes = l.lanes), Gt(l, t, e));
    }
    return df(l, t, a, u, e);
  }
  function x2(l, t, a, u) {
    var e = u.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      u.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (u = t.child = l.child, e = 0; u !== null; )
            ((e = e | u.lanes | u.childLanes), (u = u.sibling));
          u = e & ~n;
        } else ((u = 0), (t.child = null));
        return N2(l, t, n, a, u);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Ke(t, n !== null ? n.cachePool : null),
          n !== null ? C0(t, n) : Gc(),
          R0(t));
      else
        return (
          (u = t.lanes = 536870912),
          N2(l, t, n !== null ? n.baseLanes | a : a, a, u)
        );
    } else
      n !== null
        ? (Ke(t, n.cachePool), C0(t, n), ca(), (t.memoizedState = null))
        : (l !== null && Ke(t, null), Gc(), ca());
    return (Nl(l, t, e, a), t.child);
  }
  function Pu(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function N2(l, t, a, u, e) {
    var n = Cc();
    return (
      (n = n === null ? null : { parent: zl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && Ke(t, null),
      Gc(),
      R0(t),
      l !== null && eu(l, t, u, !0),
      (t.childLanes = e),
      null
    );
  }
  function fn(l, t) {
    return (
      (t = dn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function H2(l, t, a) {
    return (
      qa(t, l.child, null, a),
      (l = fn(t, t.pendingProps)),
      (l.flags |= 2),
      at(t),
      (t.memoizedState = null),
      l
    );
  }
  function I3(l, t, a) {
    var u = t.pendingProps,
      e = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (F) {
        if (u.mode === "hidden")
          return ((l = fn(t, u)), (t.lanes = 536870912), Pu(null, l));
        if (
          (Qc(t),
          (l = ol)
            ? ((l = V1(l, vt)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: _t, overflow: pt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = h0(l)),
                (a.return = t),
                (t.child = a),
                (Ul = t),
                (ol = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return ((t.lanes = 536870912), null);
      }
      return fn(t, u);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if ((Qc(t), e))
        if (t.flags & 256) ((t.flags &= -257), (t = H2(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(v(558));
      else if (
        (El || eu(l, t, a, !1), (e = (a & l.childLanes) !== 0), El || e)
      ) {
        if (
          ((u = ml),
          u !== null && ((c = Ei(u, a)), c !== 0 && c !== n.retryLane))
        )
          throw ((n.retryLane = c), Oa(l, c), Wl(u, l, c), sf);
        (bn(), (t = H2(l, t, a)));
      } else
        ((l = n.treeContext),
          (ol = ht(c.nextSibling)),
          (Ul = t),
          (F = !0),
          (Pt = null),
          (vt = !1),
          l !== null && S0(t, l),
          (t = fn(t, u)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Ct(l.child, { mode: u.mode, children: u.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function sn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(v(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function df(l, t, a, u, e) {
    return (
      Na(t),
      (a = Lc(l, t, a, u, void 0, e)),
      (u = Vc()),
      l !== null && !El
        ? (Kc(l, t, e), Gt(l, t, e))
        : (F && u && _c(t), (t.flags |= 1), Nl(l, t, a, e), t.child)
    );
  }
  function C2(l, t, a, u, e, n) {
    return (
      Na(t),
      (t.updateQueue = null),
      (a = j0(t, u, a, e)),
      q0(l),
      (u = Vc()),
      l !== null && !El
        ? (Kc(l, t, n), Gt(l, t, n))
        : (F && u && _c(t), (t.flags |= 1), Nl(l, t, a, n), t.child)
    );
  }
  function R2(l, t, a, u, e) {
    if ((Na(t), t.stateNode === null)) {
      var n = lu,
        c = a.contextType;
      (typeof c == "object" && c !== null && (n = xl(c)),
        (n = new a(u, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = cf),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = u),
        (n.state = t.memoizedState),
        (n.refs = {}),
        qc(t),
        (c = a.contextType),
        (n.context = typeof c == "object" && c !== null ? xl(c) : lu),
        (n.state = t.memoizedState),
        (c = a.getDerivedStateFromProps),
        typeof c == "function" && (nf(t, a, c, u), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((c = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          c !== n.state && cf.enqueueReplaceState(n, n.state, null),
          Wu(t, u, n, e),
          wu(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (u = !0));
    } else if (l === null) {
      n = t.stateNode;
      var f = t.memoizedProps,
        i = Ba(a, f);
      n.props = i;
      var h = n.context,
        S = a.contextType;
      ((c = lu), typeof S == "object" && S !== null && (c = xl(S)));
      var T = a.getDerivedStateFromProps;
      ((S =
        typeof T == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (f = t.pendingProps !== f),
        S ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((f || h !== c) && z2(t, n, u, c)),
        (aa = !1));
      var g = t.memoizedState;
      ((n.state = g),
        Wu(t, u, n, e),
        wu(),
        (h = t.memoizedState),
        f || g !== h || aa
          ? (typeof T == "function" && (nf(t, a, T, u), (h = t.memoizedState)),
            (i = aa || b2(t, a, i, u, g, h, c))
              ? (S ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = u),
                (t.memoizedState = h)),
            (n.props = u),
            (n.state = h),
            (n.context = c),
            (u = i))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (u = !1)));
    } else {
      ((n = t.stateNode),
        jc(l, t),
        (c = t.memoizedProps),
        (S = Ba(a, c)),
        (n.props = S),
        (T = t.pendingProps),
        (g = n.context),
        (h = a.contextType),
        (i = lu),
        typeof h == "object" && h !== null && (i = xl(h)),
        (f = a.getDerivedStateFromProps),
        (h =
          typeof f == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c !== T || g !== i) && z2(t, n, u, i)),
        (aa = !1),
        (g = t.memoizedState),
        (n.state = g),
        Wu(t, u, n, e),
        wu());
      var r = t.memoizedState;
      c !== T ||
      g !== r ||
      aa ||
      (l !== null && l.dependencies !== null && Le(l.dependencies))
        ? (typeof f == "function" && (nf(t, a, f, u), (r = t.memoizedState)),
          (S =
            aa ||
            b2(t, a, S, u, g, r, i) ||
            (l !== null && l.dependencies !== null && Le(l.dependencies)))
            ? (h ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(u, r, i),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(u, r, i)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (c === l.memoizedProps && g === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (c === l.memoizedProps && g === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = u),
              (t.memoizedState = r)),
          (n.props = u),
          (n.state = r),
          (n.context = i),
          (u = S))
        : (typeof n.componentDidUpdate != "function" ||
            (c === l.memoizedProps && g === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (c === l.memoizedProps && g === l.memoizedState) ||
            (t.flags |= 1024),
          (u = !1));
    }
    return (
      (n = u),
      sn(l, t),
      (u = (t.flags & 128) !== 0),
      n || u
        ? ((n = t.stateNode),
          (a =
            u && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && u
            ? ((t.child = qa(t, l.child, null, e)),
              (t.child = qa(t, null, a, e)))
            : Nl(l, t, a, e),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Gt(l, t, e)),
      l
    );
  }
  function q2(l, t, a, u) {
    return (Ua(), (t.flags |= 256), Nl(l, t, a, u), t.child);
  }
  var mf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function of(l) {
    return { baseLanes: l, cachePool: _0() };
  }
  function vf(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= et), l);
  }
  function j2(l, t, a) {
    var u = t.pendingProps,
      e = !1,
      n = (t.flags & 128) !== 0,
      c;
    if (
      ((c = n) ||
        (c =
          l !== null && l.memoizedState === null ? !1 : (Sl.current & 2) !== 0),
      c && ((e = !0), (t.flags &= -129)),
      (c = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (F) {
        if (
          (e ? na(t) : ca(),
          (l = ol)
            ? ((l = V1(l, vt)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: _t, overflow: pt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = h0(l)),
                (a.return = t),
                (t.child = a),
                (Ul = t),
                (ol = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return ($f(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var f = u.children;
      return (
        (u = u.fallback),
        e
          ? (ca(),
            (e = t.mode),
            (f = dn({ mode: "hidden", children: f }, e)),
            (u = Ma(u, e, a, null)),
            (f.return = t),
            (u.return = t),
            (f.sibling = u),
            (t.child = f),
            (u = t.child),
            (u.memoizedState = of(a)),
            (u.childLanes = vf(l, c, a)),
            (t.memoizedState = mf),
            Pu(null, u))
          : (na(t), yf(t, f))
      );
    }
    var i = l.memoizedState;
    if (i !== null && ((f = i.dehydrated), f !== null)) {
      if (n)
        t.flags & 256
          ? (na(t), (t.flags &= -257), (t = hf(l, t, a)))
          : t.memoizedState !== null
            ? (ca(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (ca(),
              (f = u.fallback),
              (e = t.mode),
              (u = dn({ mode: "visible", children: u.children }, e)),
              (f = Ma(f, e, a, null)),
              (f.flags |= 2),
              (u.return = t),
              (f.return = t),
              (u.sibling = f),
              (t.child = u),
              qa(t, l.child, null, a),
              (u = t.child),
              (u.memoizedState = of(a)),
              (u.childLanes = vf(l, c, a)),
              (t.memoizedState = mf),
              (t = Pu(null, u)));
      else if ((na(t), $f(f))) {
        if (((c = f.nextSibling && f.nextSibling.dataset), c)) var h = c.dgst;
        ((c = h),
          (u = Error(v(419))),
          (u.stack = ""),
          (u.digest = c),
          Qu({ value: u, source: null, stack: null }),
          (t = hf(l, t, a)));
      } else if (
        (El || eu(l, t, a, !1), (c = (a & l.childLanes) !== 0), El || c)
      ) {
        if (
          ((c = ml),
          c !== null && ((u = Ei(c, a)), u !== 0 && u !== i.retryLane))
        )
          throw ((i.retryLane = u), Oa(l, u), Wl(c, l, u), sf);
        (Wf(f) || bn(), (t = hf(l, t, a)));
      } else
        Wf(f)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = i.treeContext),
            (ol = ht(f.nextSibling)),
            (Ul = t),
            (F = !0),
            (Pt = null),
            (vt = !1),
            l !== null && S0(t, l),
            (t = yf(t, u.children)),
            (t.flags |= 4096));
      return t;
    }
    return e
      ? (ca(),
        (f = u.fallback),
        (e = t.mode),
        (i = l.child),
        (h = i.sibling),
        (u = Ct(i, { mode: "hidden", children: u.children })),
        (u.subtreeFlags = i.subtreeFlags & 65011712),
        h !== null ? (f = Ct(h, f)) : ((f = Ma(f, e, a, null)), (f.flags |= 2)),
        (f.return = t),
        (u.return = t),
        (u.sibling = f),
        (t.child = u),
        Pu(null, u),
        (u = t.child),
        (f = l.child.memoizedState),
        f === null
          ? (f = of(a))
          : ((e = f.cachePool),
            e !== null
              ? ((i = zl._currentValue),
                (e = e.parent !== i ? { parent: i, pool: i } : e))
              : (e = _0()),
            (f = { baseLanes: f.baseLanes | a, cachePool: e })),
        (u.memoizedState = f),
        (u.childLanes = vf(l, c, a)),
        (t.memoizedState = mf),
        Pu(l.child, u))
      : (na(t),
        (a = l.child),
        (l = a.sibling),
        (a = Ct(a, { mode: "visible", children: u.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((c = t.deletions),
          c === null ? ((t.deletions = [l]), (t.flags |= 16)) : c.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function yf(l, t) {
    return (
      (t = dn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function dn(l, t) {
    return ((l = lt(22, l, null, t)), (l.lanes = 0), l);
  }
  function hf(l, t, a) {
    return (
      qa(t, l.child, null, a),
      (l = yf(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function B2(l, t, a) {
    l.lanes |= t;
    var u = l.alternate;
    (u !== null && (u.lanes |= t), Uc(l.return, t, a));
  }
  function gf(l, t, a, u, e, n) {
    var c = l.memoizedState;
    c === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: u,
          tail: a,
          tailMode: e,
          treeForkCount: n,
        })
      : ((c.isBackwards = t),
        (c.rendering = null),
        (c.renderingStartTime = 0),
        (c.last = u),
        (c.tail = a),
        (c.tailMode = e),
        (c.treeForkCount = n));
  }
  function Y2(l, t, a) {
    var u = t.pendingProps,
      e = u.revealOrder,
      n = u.tail;
    u = u.children;
    var c = Sl.current,
      f = (c & 2) !== 0;
    if (
      (f ? ((c = (c & 1) | 2), (t.flags |= 128)) : (c &= 1),
      O(Sl, c),
      Nl(l, t, u, a),
      (u = F ? Zu : 0),
      !f && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && B2(l, a, t);
        else if (l.tag === 19) B2(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (e) {
      case "forwards":
        for (a = t.child, e = null; a !== null; )
          ((l = a.alternate),
            l !== null && ke(l) === null && (e = a),
            (a = a.sibling));
        ((a = e),
          a === null
            ? ((e = t.child), (t.child = null))
            : ((e = a.sibling), (a.sibling = null)),
          gf(t, !1, e, a, n, u));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, e = t.child, t.child = null; e !== null; ) {
          if (((l = e.alternate), l !== null && ke(l) === null)) {
            t.child = e;
            break;
          }
          ((l = e.sibling), (e.sibling = a), (a = e), (e = l));
        }
        gf(t, !0, a, null, n, u);
        break;
      case "together":
        gf(t, !1, null, null, void 0, u);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (sa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((eu(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(v(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Ct(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = Ct(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function rf(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Le(l)));
  }
  function P3(l, t, a) {
    switch (t.tag) {
      case 3:
        (jl(t, t.stateNode.containerInfo),
          ta(t, zl, l.memoizedState.cache),
          Ua());
        break;
      case 27:
      case 5:
        pu(t);
        break;
      case 4:
        jl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Qc(t), null);
        break;
      case 13:
        var u = t.memoizedState;
        if (u !== null)
          return u.dehydrated !== null
            ? (na(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? j2(l, t, a)
              : (na(t), (l = Gt(l, t, a)), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (
          ((u = (a & t.childLanes) !== 0),
          u || (eu(l, t, a, !1), (u = (a & t.childLanes) !== 0)),
          e)
        ) {
          if (u) return Y2(l, t, a);
          t.flags |= 128;
        }
        if (
          ((e = t.memoizedState),
          e !== null &&
            ((e.rendering = null), (e.tail = null), (e.lastEffect = null)),
          O(Sl, Sl.current),
          u)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), x2(l, t, a, t.pendingProps));
      case 24:
        ta(t, zl, l.memoizedState.cache);
    }
    return Gt(l, t, a);
  }
  function G2(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) El = !0;
      else {
        if (!rf(l, a) && (t.flags & 128) === 0) return ((El = !1), P3(l, t, a));
        El = (l.flags & 131072) !== 0;
      }
    else ((El = !1), F && (t.flags & 1048576) !== 0 && r0(t, Zu, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var u = t.pendingProps;
          if (((l = Ca(t.elementType)), (t.type = l), typeof l == "function"))
            Tc(l)
              ? ((u = Ba(l, u)), (t.tag = 1), (t = R2(null, t, l, u, a)))
              : ((t.tag = 0), (t = df(null, t, l, u, a)));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === ct) {
                ((t.tag = 11), (t = O2(null, t, l, u, a)));
                break l;
              } else if (e === $) {
                ((t.tag = 14), (t = M2(null, t, l, u, a)));
                break l;
              }
            }
            throw ((t = Ut(l) || l), Error(v(306, t, "")));
          }
        }
        return t;
      case 0:
        return df(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((u = t.type), (e = Ba(u, t.pendingProps)), R2(l, t, u, e, a));
      case 3:
        l: {
          if ((jl(t, t.stateNode.containerInfo), l === null))
            throw Error(v(387));
          u = t.pendingProps;
          var n = t.memoizedState;
          ((e = n.element), jc(l, t), Wu(t, u, null, a));
          var c = t.memoizedState;
          if (
            ((u = c.cache),
            ta(t, zl, u),
            u !== n.cache && xc(t, [zl], a, !0),
            wu(),
            (u = c.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: u, isDehydrated: !1, cache: c.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = q2(l, t, u, a);
              break l;
            } else if (u !== e) {
              ((e = dt(Error(v(424)), t)), Qu(e), (t = q2(l, t, u, a)));
              break l;
            } else {
              switch (((l = t.stateNode.containerInfo), l.nodeType)) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (
                ol = ht(l.firstChild),
                  Ul = t,
                  F = !0,
                  Pt = null,
                  vt = !0,
                  a = x0(t, null, u, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
            }
          else {
            if ((Ua(), u === e)) {
              t = Gt(l, t, a);
              break l;
            }
            Nl(l, t, u, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          sn(l, t),
          l === null
            ? (a = F1(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : F ||
                ((a = t.type),
                (l = t.pendingProps),
                (u = Dn(L.current).createElement(a)),
                (u[Ml] = t),
                (u[Xl] = l),
                Hl(u, a, l),
                Dl(u),
                (t.stateNode = u))
            : (t.memoizedState = F1(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          pu(t),
          l === null &&
            F &&
            ((u = t.stateNode = w1(t.type, t.pendingProps, L.current)),
            (Ul = t),
            (vt = !0),
            (e = ol),
            ya(t.type) ? ((Ff = e), (ol = ht(u.firstChild))) : (ol = e)),
          Nl(l, t, t.pendingProps.children, a),
          sn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            F &&
            ((e = u = ol) &&
              ((u = Ud(u, t.type, t.pendingProps, vt)),
              u !== null
                ? ((t.stateNode = u),
                  (Ul = t),
                  (ol = ht(u.firstChild)),
                  (vt = !1),
                  (e = !0))
                : (e = !1)),
            e || la(t)),
          pu(t),
          (e = t.type),
          (n = t.pendingProps),
          (c = l !== null ? l.memoizedProps : null),
          (u = n.children),
          Kf(e, n) ? (u = null) : c !== null && Kf(e, c) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((e = Lc(l, t, V3, null, null, a)), (ye._currentValue = e)),
          sn(l, t),
          Nl(l, t, u, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            F &&
            ((l = a = ol) &&
              ((a = xd(a, t.pendingProps, vt)),
              a !== null
                ? ((t.stateNode = a), (Ul = t), (ol = null), (l = !0))
                : (l = !1)),
            l || la(t)),
          null
        );
      case 13:
        return j2(l, t, a);
      case 4:
        return (
          jl(t, t.stateNode.containerInfo),
          (u = t.pendingProps),
          l === null ? (t.child = qa(t, null, u, a)) : Nl(l, t, u, a),
          t.child
        );
      case 11:
        return O2(l, t, t.type, t.pendingProps, a);
      case 7:
        return (Nl(l, t, t.pendingProps, a), t.child);
      case 8:
        return (Nl(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Nl(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (u = t.pendingProps),
          ta(t, t.type, u.value),
          Nl(l, t, u.children, a),
          t.child
        );
      case 9:
        return (
          (e = t.type._context),
          (u = t.pendingProps.children),
          Na(t),
          (e = xl(e)),
          (u = u(e)),
          (t.flags |= 1),
          Nl(l, t, u, a),
          t.child
        );
      case 14:
        return M2(l, t, t.type, t.pendingProps, a);
      case 15:
        return U2(l, t, t.type, t.pendingProps, a);
      case 19:
        return Y2(l, t, a);
      case 31:
        return I3(l, t, a);
      case 22:
        return x2(l, t, a, t.pendingProps);
      case 24:
        return (
          Na(t),
          (u = xl(zl)),
          l === null
            ? ((e = Cc()),
              e === null &&
                ((e = ml),
                (n = Nc()),
                (e.pooledCache = n),
                n.refCount++,
                n !== null && (e.pooledCacheLanes |= a),
                (e = n)),
              (t.memoizedState = { parent: u, cache: e }),
              qc(t),
              ta(t, zl, e))
            : ((l.lanes & a) !== 0 && (jc(l, t), Wu(t, null, null, a), wu()),
              (e = l.memoizedState),
              (n = t.memoizedState),
              e.parent !== u
                ? ((e = { parent: u, cache: u }),
                  (t.memoizedState = e),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = e),
                  ta(t, zl, u))
                : ((u = n.cache),
                  ta(t, zl, u),
                  u !== e.cache && xc(t, [zl], a, !0))),
          Nl(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(v(156, t.tag));
  }
  function Zt(l) {
    l.flags |= 4;
  }
  function Sf(l, t, a, u, e) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (e & 335544128) === e))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (o1()) l.flags |= 8192;
        else throw ((Ra = we), Rc);
    } else l.flags &= -16777217;
  }
  function Z2(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !ts(t)))
      if (o1()) l.flags |= 8192;
      else throw ((Ra = we), Rc);
  }
  function mn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? bi() : 536870912), (l.lanes |= t), (gu |= t)));
  }
  function le(l, t) {
    if (!F)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; )
            (a.alternate !== null && (u = a), (a = a.sibling));
          u === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (u.sibling = null);
      }
  }
  function vl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      u = 0;
    if (t)
      for (var e = l.child; e !== null; )
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags & 65011712),
          (u |= e.flags & 65011712),
          (e.return = l),
          (e = e.sibling));
    else
      for (e = l.child; e !== null; )
        ((a |= e.lanes | e.childLanes),
          (u |= e.subtreeFlags),
          (u |= e.flags),
          (e.return = l),
          (e = e.sibling));
    return ((l.subtreeFlags |= u), (l.childLanes = a), t);
  }
  function ld(l, t, a) {
    var u = t.pendingProps;
    switch ((pc(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (vl(t), null);
      case 1:
        return (vl(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (u = null),
          l !== null && (u = l.memoizedState.cache),
          t.memoizedState.cache !== u && (t.flags |= 2048),
          jt(zl),
          rl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (uu(t)
              ? Zt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), Oc())),
          vl(t),
          null
        );
      case 26:
        var e = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Zt(t),
              n !== null ? (vl(t), Z2(t, n)) : (vl(t), Sf(t, e, null, u, a)))
            : n
              ? n !== l.memoizedState
                ? (Zt(t), vl(t), Z2(t, n))
                : (vl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== u && Zt(t),
                vl(t),
                Sf(t, e, l, u, a)),
          null
        );
      case 27:
        if (
          (Te(t),
          (a = L.current),
          (e = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== u && Zt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(v(166));
            return (vl(t), null);
          }
          ((l = x.current),
            uu(t) ? b0(t) : ((l = w1(e, u, a)), (t.stateNode = l), Zt(t)));
        }
        return (vl(t), null);
      case 5:
        if ((Te(t), (e = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== u && Zt(t);
        else {
          if (!u) {
            if (t.stateNode === null) throw Error(v(166));
            return (vl(t), null);
          }
          if (((n = x.current), uu(t))) b0(t);
          else {
            var c = Dn(L.current);
            switch (n) {
              case 1:
                n = c.createElementNS("http://www.w3.org/2000/svg", e);
                break;
              case 2:
                n = c.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                break;
              default:
                switch (e) {
                  case "svg":
                    n = c.createElementNS("http://www.w3.org/2000/svg", e);
                    break;
                  case "math":
                    n = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e,
                    );
                    break;
                  case "script":
                    ((n = c.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof u.is == "string"
                        ? c.createElement("select", { is: u.is })
                        : c.createElement("select")),
                      u.multiple
                        ? (n.multiple = !0)
                        : u.size && (n.size = u.size));
                    break;
                  default:
                    n =
                      typeof u.is == "string"
                        ? c.createElement(e, { is: u.is })
                        : c.createElement(e);
                }
            }
            ((n[Ml] = t), (n[Xl] = u));
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6) n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                ((c.child.return = c), (c = c.child));
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t) break l;
                c = c.return;
              }
              ((c.sibling.return = c.return), (c = c.sibling));
            }
            t.stateNode = n;
            l: switch ((Hl(n, e, u), e)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                u = !!u.autoFocus;
                break l;
              case "img":
                u = !0;
                break l;
              default:
                u = !1;
            }
            u && Zt(t);
          }
        }
        return (
          vl(t),
          Sf(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== u && Zt(t);
        else {
          if (typeof u != "string" && t.stateNode === null) throw Error(v(166));
          if (((l = L.current), uu(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (u = null),
              (e = Ul),
              e !== null)
            )
              switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
            ((l[Ml] = t),
              (l = !!(
                l.nodeValue === a ||
                (u !== null && u.suppressHydrationWarning === !0) ||
                j1(l.nodeValue, a)
              )),
              l || la(t, !0));
          } else
            ((l = Dn(l).createTextNode(u)), (l[Ml] = t), (t.stateNode = l));
        }
        return (vl(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((u = uu(t)), a !== null)) {
            if (l === null) {
              if (!u) throw Error(v(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(v(557));
              l[Ml] = t;
            } else
              (Ua(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (vl(t), (l = !1));
          } else
            ((a = Oc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0) throw Error(v(558));
        }
        return (vl(t), null);
      case 13:
        if (
          ((u = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((e = uu(t)), u !== null && u.dehydrated !== null)) {
            if (l === null) {
              if (!e) throw Error(v(318));
              if (
                ((e = t.memoizedState),
                (e = e !== null ? e.dehydrated : null),
                !e)
              )
                throw Error(v(317));
              e[Ml] = t;
            } else
              (Ua(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (vl(t), (e = !1));
          } else
            ((e = Oc()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = e),
              (e = !0));
          if (!e) return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return (
          at(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = u !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((u = t.child),
                (e = null),
                u.alternate !== null &&
                  u.alternate.memoizedState !== null &&
                  u.alternate.memoizedState.cachePool !== null &&
                  (e = u.alternate.memoizedState.cachePool.pool),
                (n = null),
                u.memoizedState !== null &&
                  u.memoizedState.cachePool !== null &&
                  (n = u.memoizedState.cachePool.pool),
                n !== e && (u.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              mn(t, t.updateQueue),
              vl(t),
              null)
        );
      case 4:
        return (rl(), l === null && Zf(t.stateNode.containerInfo), vl(t), null);
      case 10:
        return (jt(t.type), vl(t), null);
      case 19:
        if ((A(Sl), (u = t.memoizedState), u === null)) return (vl(t), null);
        if (((e = (t.flags & 128) !== 0), (n = u.rendering), n === null))
          if (e) le(u, !1);
          else {
            if (gl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = ke(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      le(u, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      mn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (y0(a, l), (a = a.sibling));
                  return (
                    O(Sl, (Sl.current & 1) | 2),
                    F && Rt(t, u.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            u.tail !== null &&
              Fl() > gn &&
              ((t.flags |= 128), (e = !0), le(u, !1), (t.lanes = 4194304));
          }
        else {
          if (!e)
            if (((l = ke(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (e = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                mn(t, l),
                le(u, !0),
                u.tail === null &&
                  u.tailMode === "hidden" &&
                  !n.alternate &&
                  !F)
              )
                return (vl(t), null);
            } else
              2 * Fl() - u.renderingStartTime > gn &&
                a !== 536870912 &&
                ((t.flags |= 128), (e = !0), le(u, !1), (t.lanes = 4194304));
          u.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = u.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (u.last = n));
        }
        return u.tail !== null
          ? ((l = u.tail),
            (u.rendering = l),
            (u.tail = l.sibling),
            (u.renderingStartTime = Fl()),
            (l.sibling = null),
            (a = Sl.current),
            O(Sl, e ? (a & 1) | 2 : a & 1),
            F && Rt(t, u.treeForkCount),
            l)
          : (vl(t), null);
      case 22:
      case 23:
        return (
          at(t),
          Zc(),
          (u = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== u && (t.flags |= 8192)
            : u && (t.flags |= 8192),
          u
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : vl(t),
          (a = t.updateQueue),
          a !== null && mn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (u = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (u = t.memoizedState.cachePool.pool),
          u !== a && (t.flags |= 2048),
          l !== null && A(Ha),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          jt(zl),
          vl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(v(156, t.tag));
  }
  function td(l, t) {
    switch ((pc(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          jt(zl),
          rl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Te(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((at(t), t.alternate === null)) throw Error(v(340));
          Ua();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (at(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(v(340));
          Ua();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (A(Sl), null);
      case 4:
        return (rl(), null);
      case 10:
        return (jt(t.type), null);
      case 22:
      case 23:
        return (
          at(t),
          Zc(),
          l !== null && A(Ha),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (jt(zl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Q2(l, t) {
    switch ((pc(t), t.tag)) {
      case 3:
        (jt(zl), rl());
        break;
      case 26:
      case 27:
      case 5:
        Te(t);
        break;
      case 4:
        rl();
        break;
      case 31:
        t.memoizedState !== null && at(t);
        break;
      case 13:
        at(t);
        break;
      case 19:
        A(Sl);
        break;
      case 10:
        jt(t.type);
        break;
      case 22:
      case 23:
        (at(t), Zc(), l !== null && A(Ha));
        break;
      case 24:
        jt(zl);
    }
  }
  function te(l, t) {
    try {
      var a = t.updateQueue,
        u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var e = u.next;
        a = e;
        do {
          if ((a.tag & l) === l) {
            u = void 0;
            var n = a.create,
              c = a.inst;
            ((u = n()), (c.destroy = u));
          }
          a = a.next;
        } while (a !== e);
      }
    } catch (f) {
      el(t, t.return, f);
    }
  }
  function fa(l, t, a) {
    try {
      var u = t.updateQueue,
        e = u !== null ? u.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        u = n;
        do {
          if ((u.tag & l) === l) {
            var c = u.inst,
              f = c.destroy;
            if (f !== void 0) {
              ((c.destroy = void 0), (e = t));
              var i = a,
                h = f;
              try {
                h();
              } catch (S) {
                el(e, i, S);
              }
            }
          }
          u = u.next;
        } while (u !== n);
      }
    } catch (S) {
      el(t, t.return, S);
    }
  }
  function X2(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        H0(t, a);
      } catch (u) {
        el(l, l.return, u);
      }
    }
  }
  function L2(l, t, a) {
    ((a.props = Ba(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (u) {
      el(l, t, u);
    }
  }
  function ae(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var u = l.stateNode;
            break;
          case 30:
            u = l.stateNode;
            break;
          default:
            u = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(u)) : (a.current = u);
      }
    } catch (e) {
      el(l, t, e);
    }
  }
  function Dt(l, t) {
    var a = l.ref,
      u = l.refCleanup;
    if (a !== null)
      if (typeof u == "function")
        try {
          u();
        } catch (e) {
          el(l, t, e);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (e) {
          el(l, t, e);
        }
      else a.current = null;
  }
  function V2(l) {
    var t = l.type,
      a = l.memoizedProps,
      u = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && u.focus();
          break l;
        case "img":
          a.src ? (u.src = a.src) : a.srcSet && (u.srcset = a.srcSet);
      }
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function bf(l, t, a) {
    try {
      var u = l.stateNode;
      (Ad(u, l.type, a, t), (u[Xl] = t));
    } catch (e) {
      el(l, l.return, e);
    }
  }
  function K2(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && ya(l.type)) ||
      l.tag === 4
    );
  }
  function zf(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || K2(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && ya(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Tf(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = Nt)));
    else if (
      u !== 4 &&
      (u === 27 && ya(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (Tf(l, t, a), l = l.sibling; l !== null; )
        (Tf(l, t, a), (l = l.sibling));
  }
  function on(l, t, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      u !== 4 &&
      (u === 27 && ya(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (on(l, t, a), l = l.sibling; l !== null; )
        (on(l, t, a), (l = l.sibling));
  }
  function J2(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var u = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      (Hl(t, u, a), (t[Ml] = l), (t[Xl] = a));
    } catch (n) {
      el(l, l.return, n);
    }
  }
  var Qt = !1,
    Al = !1,
    Ef = !1,
    w2 = typeof WeakSet == "function" ? WeakSet : Set,
    Ol = null;
  function ad(l, t) {
    if (((l = l.containerInfo), (Lf = Cn), (l = n0(l)), yc(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset,
              n = u.focusNode;
            u = u.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var c = 0,
              f = -1,
              i = -1,
              h = 0,
              S = 0,
              T = l,
              g = null;
            t: for (;;) {
              for (
                var r;
                T !== a || (e !== 0 && T.nodeType !== 3) || (f = c + e),
                  T !== n || (u !== 0 && T.nodeType !== 3) || (i = c + u),
                  T.nodeType === 3 && (c += T.nodeValue.length),
                  (r = T.firstChild) !== null;
              )
                ((g = T), (T = r));
              for (;;) {
                if (T === l) break t;
                if (
                  (g === a && ++h === e && (f = c),
                  g === n && ++S === u && (i = c),
                  (r = T.nextSibling) !== null)
                )
                  break;
                ((T = g), (g = T.parentNode));
              }
              T = r;
            }
            a = f === -1 || i === -1 ? null : { start: f, end: i };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Vf = { focusedElem: l, selectionRange: a }, Cn = !1, Ol = t;
      Ol !== null;
    )
      if (
        ((t = Ol), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (Ol = l));
      else
        for (; Ol !== null; ) {
          switch (((t = Ol), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((e = l[a]), (e.ref.impl = e.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (e = n.memoizedProps),
                  (n = n.memoizedState),
                  (u = a.stateNode));
                try {
                  var M = Ba(a.type, e);
                  ((l = u.getSnapshotBeforeUpdate(M, n)),
                    (u.__reactInternalSnapshotBeforeUpdate = l));
                } catch (q) {
                  el(a, a.return, q);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  wf(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wf(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(v(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (Ol = l));
            break;
          }
          Ol = t.return;
        }
  }
  function W2(l, t, a) {
    var u = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Lt(l, a), u & 4 && te(5, a));
        break;
      case 1:
        if ((Lt(l, a), u & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (c) {
              el(a, a.return, c);
            }
          else {
            var e = Ba(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (c) {
              el(a, a.return, c);
            }
          }
        (u & 64 && X2(a), u & 512 && ae(a, a.return));
        break;
      case 3:
        if ((Lt(l, a), u & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            H0(l, t);
          } catch (c) {
            el(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && u & 4 && J2(a);
      case 26:
      case 5:
        (Lt(l, a), t === null && u & 4 && V2(a), u & 512 && ae(a, a.return));
        break;
      case 12:
        Lt(l, a);
        break;
      case 31:
        (Lt(l, a), u & 4 && k2(l, a));
        break;
      case 13:
        (Lt(l, a),
          u & 4 && I2(l, a),
          u & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = md.bind(null, a)), Nd(l, a)))));
        break;
      case 22:
        if (((u = a.memoizedState !== null || Qt), !u)) {
          ((t = (t !== null && t.memoizedState !== null) || Al), (e = Qt));
          var n = Al;
          ((Qt = u),
            (Al = t) && !n ? Vt(l, a, (a.subtreeFlags & 8772) !== 0) : Lt(l, a),
            (Qt = e),
            (Al = n));
        }
        break;
      case 30:
        break;
      default:
        Lt(l, a);
    }
  }
  function $2(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), $2(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && kn(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var yl = null,
    Vl = !1;
  function Xt(l, t, a) {
    for (a = a.child; a !== null; ) (F2(l, t, a), (a = a.sibling));
  }
  function F2(l, t, a) {
    if (kl && typeof kl.onCommitFiberUnmount == "function")
      try {
        kl.onCommitFiberUnmount(Du, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Al || Dt(a, t),
          Xt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Al || Dt(a, t);
        var u = yl,
          e = Vl;
        (ya(a.type) && ((yl = a.stateNode), (Vl = !1)),
          Xt(l, t, a),
          me(a.stateNode),
          (yl = u),
          (Vl = e));
        break;
      case 5:
        Al || Dt(a, t);
      case 6:
        if (
          ((u = yl),
          (e = Vl),
          (yl = null),
          Xt(l, t, a),
          (yl = u),
          (Vl = e),
          yl !== null)
        )
          if (Vl)
            try {
              (yl.nodeType === 9
                ? yl.body
                : yl.nodeName === "HTML"
                  ? yl.ownerDocument.body
                  : yl
              ).removeChild(a.stateNode);
            } catch (n) {
              el(a, t, n);
            }
          else
            try {
              yl.removeChild(a.stateNode);
            } catch (n) {
              el(a, t, n);
            }
        break;
      case 18:
        yl !== null &&
          (Vl
            ? ((l = yl),
              X1(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              _u(l))
            : X1(yl, a.stateNode));
        break;
      case 4:
        ((u = yl),
          (e = Vl),
          (yl = a.stateNode.containerInfo),
          (Vl = !0),
          Xt(l, t, a),
          (yl = u),
          (Vl = e));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (fa(2, a, t), Al || fa(4, a, t), Xt(l, t, a));
        break;
      case 1:
        (Al ||
          (Dt(a, t),
          (u = a.stateNode),
          typeof u.componentWillUnmount == "function" && L2(a, t, u)),
          Xt(l, t, a));
        break;
      case 21:
        Xt(l, t, a);
        break;
      case 22:
        ((Al = (u = Al) || a.memoizedState !== null), Xt(l, t, a), (Al = u));
        break;
      default:
        Xt(l, t, a);
    }
  }
  function k2(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        _u(l);
      } catch (a) {
        el(t, t.return, a);
      }
    }
  }
  function I2(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        _u(l);
      } catch (a) {
        el(t, t.return, a);
      }
  }
  function ud(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new w2()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new w2()),
          t
        );
      default:
        throw Error(v(435, l.tag));
    }
  }
  function vn(l, t) {
    var a = ud(l);
    t.forEach(function (u) {
      if (!a.has(u)) {
        a.add(u);
        var e = od.bind(null, l, u);
        u.then(e, e);
      }
    });
  }
  function Kl(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var e = a[u],
          n = l,
          c = t,
          f = c;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (ya(f.type)) {
                ((yl = f.stateNode), (Vl = !1));
                break l;
              }
              break;
            case 5:
              ((yl = f.stateNode), (Vl = !1));
              break l;
            case 3:
            case 4:
              ((yl = f.stateNode.containerInfo), (Vl = !0));
              break l;
          }
          f = f.return;
        }
        if (yl === null) throw Error(v(160));
        (F2(n, c, e),
          (yl = null),
          (Vl = !1),
          (n = e.alternate),
          n !== null && (n.return = null),
          (e.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (P2(t, l), (t = t.sibling));
  }
  var bt = null;
  function P2(l, t) {
    var a = l.alternate,
      u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Kl(t, l),
          Jl(l),
          u & 4 && (fa(3, l, l.return), te(3, l), fa(5, l, l.return)));
        break;
      case 1:
        (Kl(t, l),
          Jl(l),
          u & 512 && (Al || a === null || Dt(a, a.return)),
          u & 64 &&
            Qt &&
            ((l = l.updateQueue),
            l !== null &&
              ((u = l.callbacks),
              u !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? u : a.concat(u))))));
        break;
      case 26:
        var e = bt;
        if (
          (Kl(t, l),
          Jl(l),
          u & 512 && (Al || a === null || Dt(a, a.return)),
          u & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((u = l.memoizedState), a === null))
            if (u === null)
              if (l.stateNode === null) {
                l: {
                  ((u = l.type),
                    (a = l.memoizedProps),
                    (e = e.ownerDocument || e));
                  t: switch (u) {
                    case "title":
                      ((n = e.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Uu] ||
                          n[Ml] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = e.createElement(u)),
                          e.head.insertBefore(
                            n,
                            e.querySelector("head > title"),
                          )),
                        Hl(n, u, a),
                        (n[Ml] = l),
                        Dl(n),
                        (u = n));
                      break l;
                    case "link":
                      var c = P1("link", "href", e).get(u + (a.href || ""));
                      if (c) {
                        for (var f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        Hl(n, u, a),
                        e.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (c = P1("meta", "content", e).get(
                          u + (a.content || ""),
                        ))
                      ) {
                        for (f = 0; f < c.length; f++)
                          if (
                            ((n = c[f]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            c.splice(f, 1);
                            break t;
                          }
                      }
                      ((n = e.createElement(u)),
                        Hl(n, u, a),
                        e.head.appendChild(n));
                      break;
                    default:
                      throw Error(v(468, u));
                  }
                  ((n[Ml] = l), Dl(n), (u = n));
                }
                l.stateNode = u;
              } else ls(e, l.type, l.stateNode);
            else l.stateNode = I1(e, u, l.memoizedProps);
          else
            n !== u
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                u === null
                  ? ls(e, l.type, l.stateNode)
                  : I1(e, u, l.memoizedProps))
              : u === null &&
                l.stateNode !== null &&
                bf(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Kl(t, l),
          Jl(l),
          u & 512 && (Al || a === null || Dt(a, a.return)),
          a !== null && u & 4 && bf(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Kl(t, l),
          Jl(l),
          u & 512 && (Al || a === null || Dt(a, a.return)),
          l.flags & 32)
        ) {
          e = l.stateNode;
          try {
            wa(e, "");
          } catch (M) {
            el(l, l.return, M);
          }
        }
        (u & 4 &&
          l.stateNode != null &&
          ((e = l.memoizedProps), bf(l, e, a !== null ? a.memoizedProps : e)),
          u & 1024 && (Ef = !0));
        break;
      case 6:
        if ((Kl(t, l), Jl(l), u & 4)) {
          if (l.stateNode === null) throw Error(v(162));
          ((u = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = u;
          } catch (M) {
            el(l, l.return, M);
          }
        }
        break;
      case 3:
        if (
          ((Un = null),
          (e = bt),
          (bt = On(t.containerInfo)),
          Kl(t, l),
          (bt = e),
          Jl(l),
          u & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            _u(t.containerInfo);
          } catch (M) {
            el(l, l.return, M);
          }
        Ef && ((Ef = !1), l1(l));
        break;
      case 4:
        ((u = bt),
          (bt = On(l.stateNode.containerInfo)),
          Kl(t, l),
          Jl(l),
          (bt = u));
        break;
      case 12:
        (Kl(t, l), Jl(l));
        break;
      case 31:
        (Kl(t, l),
          Jl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), vn(l, u))));
        break;
      case 13:
        (Kl(t, l),
          Jl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (hn = Fl()),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), vn(l, u))));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = a !== null && a.memoizedState !== null,
          h = Qt,
          S = Al;
        if (
          ((Qt = h || e),
          (Al = S || i),
          Kl(t, l),
          (Al = S),
          (Qt = h),
          Jl(l),
          u & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = e ? t._visibility & -2 : t._visibility | 1,
              e && (a === null || i || Qt || Al || Ya(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (((n = i.stateNode), e))
                    ((c = n.style),
                      typeof c.setProperty == "function"
                        ? c.setProperty("display", "none", "important")
                        : (c.display = "none"));
                  else {
                    f = i.stateNode;
                    var T = i.memoizedProps.style,
                      g =
                        T != null && T.hasOwnProperty("display")
                          ? T.display
                          : null;
                    f.style.display =
                      g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (M) {
                  el(i, i.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (M) {
                  el(i, i.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                i = t;
                try {
                  var r = i.stateNode;
                  e ? L1(r, !0) : L1(i.stateNode, !1);
                } catch (M) {
                  el(i, i.return, M);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        u & 4 &&
          ((u = l.updateQueue),
          u !== null &&
            ((a = u.retryQueue),
            a !== null && ((u.retryQueue = null), vn(l, a))));
        break;
      case 19:
        (Kl(t, l),
          Jl(l),
          u & 4 &&
            ((u = l.updateQueue),
            u !== null && ((l.updateQueue = null), vn(l, u))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Kl(t, l), Jl(l));
    }
  }
  function Jl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, u = l.return; u !== null; ) {
          if (K2(u)) {
            a = u;
            break;
          }
          u = u.return;
        }
        if (a == null) throw Error(v(160));
        switch (a.tag) {
          case 27:
            var e = a.stateNode,
              n = zf(l);
            on(l, n, e);
            break;
          case 5:
            var c = a.stateNode;
            a.flags & 32 && (wa(c, ""), (a.flags &= -33));
            var f = zf(l);
            on(l, f, c);
            break;
          case 3:
          case 4:
            var i = a.stateNode.containerInfo,
              h = zf(l);
            Tf(l, h, i);
            break;
          default:
            throw Error(v(161));
        }
      } catch (S) {
        el(l, l.return, S);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function l1(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (l1(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Lt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (W2(l, t.alternate, t), (t = t.sibling));
  }
  function Ya(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (fa(4, t, t.return), Ya(t));
          break;
        case 1:
          Dt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && L2(t, t.return, a),
            Ya(t));
          break;
        case 27:
          me(t.stateNode);
        case 26:
        case 5:
          (Dt(t, t.return), Ya(t));
          break;
        case 22:
          t.memoizedState === null && Ya(t);
          break;
        case 30:
          Ya(t);
          break;
        default:
          Ya(t);
      }
      l = l.sibling;
    }
  }
  function Vt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var u = t.alternate,
        e = l,
        n = t,
        c = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Vt(e, n, a), te(4, n));
          break;
        case 1:
          if (
            (Vt(e, n, a),
            (u = n),
            (e = u.stateNode),
            typeof e.componentDidMount == "function")
          )
            try {
              e.componentDidMount();
            } catch (h) {
              el(u, u.return, h);
            }
          if (((u = n), (e = u.updateQueue), e !== null)) {
            var f = u.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  N0(i[e], f);
            } catch (h) {
              el(u, u.return, h);
            }
          }
          (a && c & 64 && X2(n), ae(n, n.return));
          break;
        case 27:
          J2(n);
        case 26:
        case 5:
          (Vt(e, n, a), a && u === null && c & 4 && V2(n), ae(n, n.return));
          break;
        case 12:
          Vt(e, n, a);
          break;
        case 31:
          (Vt(e, n, a), a && c & 4 && k2(e, n));
          break;
        case 13:
          (Vt(e, n, a), a && c & 4 && I2(e, n));
          break;
        case 22:
          (n.memoizedState === null && Vt(e, n, a), ae(n, n.return));
          break;
        case 30:
          break;
        default:
          Vt(e, n, a);
      }
      t = t.sibling;
    }
  }
  function Af(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Xu(a)));
  }
  function _f(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Xu(l)));
  }
  function zt(l, t, a, u) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (t1(l, t, a, u), (t = t.sibling));
  }
  function t1(l, t, a, u) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (zt(l, t, a, u), e & 2048 && te(9, t));
        break;
      case 1:
        zt(l, t, a, u);
        break;
      case 3:
        (zt(l, t, a, u),
          e & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Xu(l))));
        break;
      case 12:
        if (e & 2048) {
          (zt(l, t, a, u), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              c = n.id,
              f = n.onPostCommit;
            typeof f == "function" &&
              f(
                c,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (i) {
            el(t, t.return, i);
          }
        } else zt(l, t, a, u);
        break;
      case 31:
        zt(l, t, a, u);
        break;
      case 13:
        zt(l, t, a, u);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (c = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? zt(l, t, a, u)
              : ue(l, t)
            : n._visibility & 2
              ? zt(l, t, a, u)
              : ((n._visibility |= 2),
                vu(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || !1)),
          e & 2048 && Af(c, t));
        break;
      case 24:
        (zt(l, t, a, u), e & 2048 && _f(t.alternate, t));
        break;
      default:
        zt(l, t, a, u);
    }
  }
  function vu(l, t, a, u, e) {
    for (
      e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        c = t,
        f = a,
        i = u,
        h = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          (vu(n, c, f, i, e), te(8, c));
          break;
        case 23:
          break;
        case 22:
          var S = c.stateNode;
          (c.memoizedState !== null
            ? S._visibility & 2
              ? vu(n, c, f, i, e)
              : ue(n, c)
            : ((S._visibility |= 2), vu(n, c, f, i, e)),
            e && h & 2048 && Af(c.alternate, c));
          break;
        case 24:
          (vu(n, c, f, i, e), e && h & 2048 && _f(c.alternate, c));
          break;
        default:
          vu(n, c, f, i, e);
      }
      t = t.sibling;
    }
  }
  function ue(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          u = t,
          e = u.flags;
        switch (u.tag) {
          case 22:
            (ue(a, u), e & 2048 && Af(u.alternate, u));
            break;
          case 24:
            (ue(a, u), e & 2048 && _f(u.alternate, u));
            break;
          default:
            ue(a, u);
        }
        t = t.sibling;
      }
  }
  var ee = 8192;
  function yu(l, t, a) {
    if (l.subtreeFlags & ee)
      for (l = l.child; l !== null; ) (a1(l, t, a), (l = l.sibling));
  }
  function a1(l, t, a) {
    switch (l.tag) {
      case 26:
        (yu(l, t, a),
          l.flags & ee &&
            l.memoizedState !== null &&
            Ld(a, bt, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        yu(l, t, a);
        break;
      case 3:
      case 4:
        var u = bt;
        ((bt = On(l.stateNode.containerInfo)), yu(l, t, a), (bt = u));
        break;
      case 22:
        l.memoizedState === null &&
          ((u = l.alternate),
          u !== null && u.memoizedState !== null
            ? ((u = ee), (ee = 16777216), yu(l, t, a), (ee = u))
            : yu(l, t, a));
        break;
      default:
        yu(l, t, a);
    }
  }
  function u1(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function ne(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((Ol = u), n1(u, l));
        }
      u1(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (e1(l), (l = l.sibling));
  }
  function e1(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (ne(l), l.flags & 2048 && fa(9, l, l.return));
        break;
      case 3:
        ne(l);
        break;
      case 12:
        ne(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), yn(l))
          : ne(l);
        break;
      default:
        ne(l);
    }
  }
  function yn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ((Ol = u), n1(u, l));
        }
      u1(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (fa(8, t, t.return), yn(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), yn(t)));
          break;
        default:
          yn(t);
      }
      l = l.sibling;
    }
  }
  function n1(l, t) {
    for (; Ol !== null; ) {
      var a = Ol;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          fa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var u = a.memoizedState.cachePool.pool;
            u != null && u.refCount++;
          }
          break;
        case 24:
          Xu(a.memoizedState.cache);
      }
      if (((u = a.child), u !== null)) ((u.return = a), (Ol = u));
      else
        l: for (a = l; Ol !== null; ) {
          u = Ol;
          var e = u.sibling,
            n = u.return;
          if (($2(u), u === a)) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            ((e.return = n), (Ol = e));
            break l;
          }
          Ol = n;
        }
    }
  }
  var ed = {
      getCacheForType: function (l) {
        var t = xl(zl),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return xl(zl).controller.signal;
      },
    },
    nd = typeof WeakMap == "function" ? WeakMap : Map,
    tl = 0,
    ml = null,
    V = null,
    J = 0,
    ul = 0,
    ut = null,
    ia = !1,
    hu = !1,
    pf = !1,
    Kt = 0,
    gl = 0,
    sa = 0,
    Ga = 0,
    Df = 0,
    et = 0,
    gu = 0,
    ce = null,
    wl = null,
    Of = !1,
    hn = 0,
    c1 = 0,
    gn = 1 / 0,
    rn = null,
    da = null,
    _l = 0,
    ma = null,
    ru = null,
    Jt = 0,
    Mf = 0,
    Uf = null,
    f1 = null,
    fe = 0,
    xf = null;
  function nt() {
    return (tl & 2) !== 0 && J !== 0 ? J & -J : b.T !== null ? jf() : Ai();
  }
  function i1() {
    if (et === 0)
      if ((J & 536870912) === 0 || F) {
        var l = _e;
        ((_e <<= 1), (_e & 3932160) === 0 && (_e = 262144), (et = l));
      } else et = 536870912;
    return ((l = tt.current), l !== null && (l.flags |= 32), et);
  }
  function Wl(l, t, a) {
    (((l === ml && (ul === 2 || ul === 9)) || l.cancelPendingCommit !== null) &&
      (Su(l, 0), oa(l, J, et, !1)),
      Mu(l, a),
      ((tl & 2) === 0 || l !== ml) &&
        (l === ml &&
          ((tl & 2) === 0 && (Ga |= a), gl === 4 && oa(l, J, et, !1)),
        Ot(l)));
  }
  function s1(l, t, a) {
    if ((tl & 6) !== 0) throw Error(v(327));
    var u = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || Ou(l, t),
      e = u ? id(l, t) : Hf(l, t, !0),
      n = u;
    do {
      if (e === 0) {
        hu && !u && oa(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !cd(a))) {
          ((e = Hf(l, t, !1)), (n = !1));
          continue;
        }
        if (e === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var c = 0;
          else
            ((c = l.pendingLanes & -536870913),
              (c = c !== 0 ? c : c & 536870912 ? 536870912 : 0));
          if (c !== 0) {
            t = c;
            l: {
              var f = l;
              e = ce;
              var i = f.current.memoizedState.isDehydrated;
              if ((i && (Su(f, c).flags |= 256), (c = Hf(f, c, !1)), c !== 2)) {
                if (pf && !i) {
                  ((f.errorRecoveryDisabledLanes |= n), (Ga |= n), (e = 4));
                  break l;
                }
                ((n = wl),
                  (wl = e),
                  n !== null &&
                    (wl === null ? (wl = n) : wl.push.apply(wl, n)));
              }
              e = c;
            }
            if (((n = !1), e !== 2)) continue;
          }
        }
        if (e === 1) {
          (Su(l, 0), oa(l, t, 0, !0));
          break;
        }
        l: {
          switch (((u = l), (n = e), n)) {
            case 0:
            case 1:
              throw Error(v(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              oa(u, t, et, !ia);
              break l;
            case 2:
              wl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(v(329));
          }
          if ((t & 62914560) === t && ((e = hn + 300 - Fl()), 10 < e)) {
            if ((oa(u, t, et, !ia), De(u, 0, !0) !== 0)) break l;
            ((Jt = t),
              (u.timeoutHandle = Z1(
                d1.bind(
                  null,
                  u,
                  a,
                  wl,
                  rn,
                  Of,
                  t,
                  et,
                  Ga,
                  gu,
                  ia,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                e,
              )));
            break l;
          }
          d1(u, a, wl, rn, Of, t, et, Ga, gu, ia, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    Ot(l);
  }
  function d1(l, t, a, u, e, n, c, f, i, h, S, T, g, r) {
    if (
      ((l.timeoutHandle = -1),
      (T = t.subtreeFlags),
      T & 8192 || (T & 16785408) === 16785408)
    ) {
      ((T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Nt,
      }),
        a1(t, n, T));
      var M =
        (n & 62914560) === n ? hn - Fl() : (n & 4194048) === n ? c1 - Fl() : 0;
      if (((M = Vd(T, M)), M !== null)) {
        ((Jt = n),
          (l.cancelPendingCommit = M(
            S1.bind(null, l, t, n, a, u, e, c, f, i, S, T, null, g, r),
          )),
          oa(l, n, c, !h));
        return;
      }
    }
    S1(l, t, n, a, u, e, c, f, i);
  }
  function cd(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var u = 0; u < a.length; u++) {
          var e = a[u],
            n = e.getSnapshot;
          e = e.value;
          try {
            if (!Pl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function oa(l, t, a, u) {
    ((t &= ~Df),
      (t &= ~Ga),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      u && (l.warmLanes |= t),
      (u = l.expirationTimes));
    for (var e = t; 0 < e; ) {
      var n = 31 - Il(e),
        c = 1 << n;
      ((u[n] = -1), (e &= ~c));
    }
    a !== 0 && zi(l, a, t);
  }
  function Sn() {
    return (tl & 6) === 0 ? (ie(0), !1) : !0;
  }
  function Nf() {
    if (V !== null) {
      if (ul === 0) var l = V.return;
      else ((l = V), (qt = xa = null), Jc(l), (iu = null), (Vu = 0), (l = V));
      for (; l !== null; ) (Q2(l.alternate, l), (l = l.return));
      V = null;
    }
  }
  function Su(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), Dd(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (Jt = 0),
      Nf(),
      (ml = l),
      (V = a = Ct(l.current, null)),
      (J = t),
      (ul = 0),
      (ut = null),
      (ia = !1),
      (hu = Ou(l, t)),
      (pf = !1),
      (gu = et = Df = Ga = sa = gl = 0),
      (wl = ce = null),
      (Of = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var u = l.entangledLanes;
    if (u !== 0)
      for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - Il(u),
          n = 1 << e;
        ((t |= l[e]), (u &= ~n));
      }
    return ((Kt = t), Ye(), a);
  }
  function m1(l, t) {
    ((Q = null),
      (b.H = Iu),
      t === fu || t === Je
        ? ((t = O0()), (ul = 3))
        : t === Rc
          ? ((t = O0()), (ul = 4))
          : (ul =
              t === sf
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (ut = t),
      V === null && ((gl = 1), cn(l, dt(t, l.current))));
  }
  function o1() {
    var l = tt.current;
    return l === null
      ? !0
      : (J & 4194048) === J
        ? yt === null
        : (J & 62914560) === J || (J & 536870912) !== 0
          ? l === yt
          : !1;
  }
  function v1() {
    var l = b.H;
    return ((b.H = Iu), l === null ? Iu : l);
  }
  function y1() {
    var l = b.A;
    return ((b.A = ed), l);
  }
  function bn() {
    ((gl = 4),
      ia || ((J & 4194048) !== J && tt.current !== null) || (hu = !0),
      ((sa & 134217727) === 0 && (Ga & 134217727) === 0) ||
        ml === null ||
        oa(ml, J, et, !1));
  }
  function Hf(l, t, a) {
    var u = tl;
    tl |= 2;
    var e = v1(),
      n = y1();
    ((ml !== l || J !== t) && ((rn = null), Su(l, t)), (t = !1));
    var c = gl;
    l: do
      try {
        if (ul !== 0 && V !== null) {
          var f = V,
            i = ut;
          switch (ul) {
            case 8:
              (Nf(), (c = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var h = ul;
              if (((ul = 0), (ut = null), bu(l, f, i, h), a && hu)) {
                c = 0;
                break l;
              }
              break;
            default:
              ((h = ul), (ul = 0), (ut = null), bu(l, f, i, h));
          }
        }
        (fd(), (c = gl));
        break;
      } catch (S) {
        m1(l, S);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (qt = xa = null),
      (tl = u),
      (b.H = e),
      (b.A = n),
      V === null && ((ml = null), (J = 0), Ye()),
      c
    );
  }
  function fd() {
    for (; V !== null; ) h1(V);
  }
  function id(l, t) {
    var a = tl;
    tl |= 2;
    var u = v1(),
      e = y1();
    ml !== l || J !== t
      ? ((rn = null), (gn = Fl() + 500), Su(l, t))
      : (hu = Ou(l, t));
    l: do
      try {
        if (ul !== 0 && V !== null) {
          t = V;
          var n = ut;
          t: switch (ul) {
            case 1:
              ((ul = 0), (ut = null), bu(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (p0(n)) {
                ((ul = 0), (ut = null), g1(t));
                break;
              }
              ((t = function () {
                ((ul !== 2 && ul !== 9) || ml !== l || (ul = 7), Ot(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              ul = 7;
              break l;
            case 4:
              ul = 5;
              break l;
            case 7:
              p0(n)
                ? ((ul = 0), (ut = null), g1(t))
                : ((ul = 0), (ut = null), bu(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (V.tag) {
                case 26:
                  c = V.memoizedState;
                case 5:
                case 27:
                  var f = V;
                  if (c ? ts(c) : f.stateNode.complete) {
                    ((ul = 0), (ut = null));
                    var i = f.sibling;
                    if (i !== null) V = i;
                    else {
                      var h = f.return;
                      h !== null ? ((V = h), zn(h)) : (V = null);
                    }
                    break t;
                  }
              }
              ((ul = 0), (ut = null), bu(l, t, n, 5));
              break;
            case 6:
              ((ul = 0), (ut = null), bu(l, t, n, 6));
              break;
            case 8:
              (Nf(), (gl = 6));
              break l;
            default:
              throw Error(v(462));
          }
        }
        sd();
        break;
      } catch (S) {
        m1(l, S);
      }
    while (!0);
    return (
      (qt = xa = null),
      (b.H = u),
      (b.A = e),
      (tl = a),
      V !== null ? 0 : ((ml = null), (J = 0), Ye(), gl)
    );
  }
  function sd() {
    for (; V !== null && !Hs(); ) h1(V);
  }
  function h1(l) {
    var t = G2(l.alternate, l, Kt);
    ((l.memoizedProps = l.pendingProps), t === null ? zn(l) : (V = t));
  }
  function g1(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = C2(a, t, t.pendingProps, t.type, void 0, J);
        break;
      case 11:
        t = C2(a, t, t.pendingProps, t.type.render, t.ref, J);
        break;
      case 5:
        Jc(t);
      default:
        (Q2(a, t), (t = V = y0(t, Kt)), (t = G2(a, t, Kt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? zn(l) : (V = t));
  }
  function bu(l, t, a, u) {
    ((qt = xa = null), Jc(t), (iu = null), (Vu = 0));
    var e = t.return;
    try {
      if (k3(l, e, t, a, J)) {
        ((gl = 1), cn(l, dt(a, l.current)), (V = null));
        return;
      }
    } catch (n) {
      if (e !== null) throw ((V = e), n);
      ((gl = 1), cn(l, dt(a, l.current)), (V = null));
      return;
    }
    t.flags & 32768
      ? (F || u === 1
          ? (l = !0)
          : hu || (J & 536870912) !== 0
            ? (l = !1)
            : ((ia = l = !0),
              (u === 2 || u === 9 || u === 3 || u === 6) &&
                ((u = tt.current),
                u !== null && u.tag === 13 && (u.flags |= 16384))),
        r1(t, l))
      : zn(t);
  }
  function zn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        r1(t, ia);
        return;
      }
      l = t.return;
      var a = ld(t.alternate, t, Kt);
      if (a !== null) {
        V = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        V = t;
        return;
      }
      V = t = l;
    } while (t !== null);
    gl === 0 && (gl = 5);
  }
  function r1(l, t) {
    do {
      var a = td(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (V = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        V = l;
        return;
      }
      V = l = a;
    } while (l !== null);
    ((gl = 6), (V = null));
  }
  function S1(l, t, a, u, e, n, c, f, i) {
    l.cancelPendingCommit = null;
    do Tn();
    while (_l !== 0);
    if ((tl & 6) !== 0) throw Error(v(327));
    if (t !== null) {
      if (t === l.current) throw Error(v(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= bc),
        Xs(l, a, n, c, f, i),
        l === ml && ((V = ml = null), (J = 0)),
        (ru = t),
        (ma = l),
        (Jt = a),
        (Mf = n),
        (Uf = e),
        (f1 = u),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            vd(Ee, function () {
              return (A1(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (u = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || u)
      ) {
        ((u = b.T), (b.T = null), (e = D.p), (D.p = 2), (c = tl), (tl |= 4));
        try {
          ad(l, t, a);
        } finally {
          ((tl = c), (D.p = e), (b.T = u));
        }
      }
      ((_l = 1), b1(), z1(), T1());
    }
  }
  function b1() {
    if (_l === 1) {
      _l = 0;
      var l = ma,
        t = ru,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var u = D.p;
        D.p = 2;
        var e = tl;
        tl |= 4;
        try {
          P2(t, l);
          var n = Vf,
            c = n0(l.containerInfo),
            f = n.focusedElem,
            i = n.selectionRange;
          if (
            c !== f &&
            f &&
            f.ownerDocument &&
            e0(f.ownerDocument.documentElement, f)
          ) {
            if (i !== null && yc(f)) {
              var h = i.start,
                S = i.end;
              if ((S === void 0 && (S = h), "selectionStart" in f))
                ((f.selectionStart = h),
                  (f.selectionEnd = Math.min(S, f.value.length)));
              else {
                var T = f.ownerDocument || document,
                  g = (T && T.defaultView) || window;
                if (g.getSelection) {
                  var r = g.getSelection(),
                    M = f.textContent.length,
                    q = Math.min(i.start, M),
                    il = i.end === void 0 ? q : Math.min(i.end, M);
                  !r.extend && q > il && ((c = il), (il = q), (q = c));
                  var m = u0(f, q),
                    s = u0(f, il);
                  if (
                    m &&
                    s &&
                    (r.rangeCount !== 1 ||
                      r.anchorNode !== m.node ||
                      r.anchorOffset !== m.offset ||
                      r.focusNode !== s.node ||
                      r.focusOffset !== s.offset)
                  ) {
                    var y = T.createRange();
                    (y.setStart(m.node, m.offset),
                      r.removeAllRanges(),
                      q > il
                        ? (r.addRange(y), r.extend(s.node, s.offset))
                        : (y.setEnd(s.node, s.offset), r.addRange(y)));
                  }
                }
              }
            }
            for (T = [], r = f; (r = r.parentNode); )
              r.nodeType === 1 &&
                T.push({ element: r, left: r.scrollLeft, top: r.scrollTop });
            for (
              typeof f.focus == "function" && f.focus(), f = 0;
              f < T.length;
              f++
            ) {
              var z = T[f];
              ((z.element.scrollLeft = z.left), (z.element.scrollTop = z.top));
            }
          }
          ((Cn = !!Lf), (Vf = Lf = null));
        } finally {
          ((tl = e), (D.p = u), (b.T = a));
        }
      }
      ((l.current = t), (_l = 2));
    }
  }
  function z1() {
    if (_l === 2) {
      _l = 0;
      var l = ma,
        t = ru,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = b.T), (b.T = null));
        var u = D.p;
        D.p = 2;
        var e = tl;
        tl |= 4;
        try {
          W2(l, t.alternate, t);
        } finally {
          ((tl = e), (D.p = u), (b.T = a));
        }
      }
      _l = 3;
    }
  }
  function T1() {
    if (_l === 4 || _l === 3) {
      ((_l = 0), Cs());
      var l = ma,
        t = ru,
        a = Jt,
        u = f1;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (_l = 5)
        : ((_l = 0), (ru = ma = null), E1(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (
        (e === 0 && (da = null),
        $n(a),
        (t = t.stateNode),
        kl && typeof kl.onCommitFiberRoot == "function")
      )
        try {
          kl.onCommitFiberRoot(Du, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (u !== null) {
        ((t = b.T), (e = D.p), (D.p = 2), (b.T = null));
        try {
          for (var n = l.onRecoverableError, c = 0; c < u.length; c++) {
            var f = u[c];
            n(f.value, { componentStack: f.stack });
          }
        } finally {
          ((b.T = t), (D.p = e));
        }
      }
      ((Jt & 3) !== 0 && Tn(),
        Ot(l),
        (e = l.pendingLanes),
        (a & 261930) !== 0 && (e & 42) !== 0
          ? l === xf
            ? fe++
            : ((fe = 0), (xf = l))
          : (fe = 0),
        ie(0));
    }
  }
  function E1(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Xu(t)));
  }
  function Tn() {
    return (b1(), z1(), T1(), A1());
  }
  function A1() {
    if (_l !== 5) return !1;
    var l = ma,
      t = Mf;
    Mf = 0;
    var a = $n(Jt),
      u = b.T,
      e = D.p;
    try {
      ((D.p = 32 > a ? 32 : a), (b.T = null), (a = Uf), (Uf = null));
      var n = ma,
        c = Jt;
      if (((_l = 0), (ru = ma = null), (Jt = 0), (tl & 6) !== 0))
        throw Error(v(331));
      var f = tl;
      if (
        ((tl |= 4),
        e1(n.current),
        t1(n, n.current, c, a),
        (tl = f),
        ie(0, !1),
        kl && typeof kl.onPostCommitFiberRoot == "function")
      )
        try {
          kl.onPostCommitFiberRoot(Du, n);
        } catch {}
      return !0;
    } finally {
      ((D.p = e), (b.T = u), E1(l, t));
    }
  }
  function _1(l, t, a) {
    ((t = dt(a, t)),
      (t = ff(l.stateNode, t, 2)),
      (l = ea(l, t, 2)),
      l !== null && (Mu(l, 2), Ot(l)));
  }
  function el(l, t, a) {
    if (l.tag === 3) _1(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _1(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof u.componentDidCatch == "function" &&
              (da === null || !da.has(u)))
          ) {
            ((l = dt(a, l)),
              (a = p2(2)),
              (u = ea(t, a, 2)),
              u !== null && (D2(a, u, t, l), Mu(u, 2), Ot(u)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Cf(l, t, a) {
    var u = l.pingCache;
    if (u === null) {
      u = l.pingCache = new nd();
      var e = new Set();
      u.set(t, e);
    } else ((e = u.get(t)), e === void 0 && ((e = new Set()), u.set(t, e)));
    e.has(a) ||
      ((pf = !0), e.add(a), (l = dd.bind(null, l, t, a)), t.then(l, l));
  }
  function dd(l, t, a) {
    var u = l.pingCache;
    (u !== null && u.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      ml === l &&
        (J & a) === a &&
        (gl === 4 || (gl === 3 && (J & 62914560) === J && 300 > Fl() - hn)
          ? (tl & 2) === 0 && Su(l, 0)
          : (Df |= a),
        gu === J && (gu = 0)),
      Ot(l));
  }
  function p1(l, t) {
    (t === 0 && (t = bi()), (l = Oa(l, t)), l !== null && (Mu(l, t), Ot(l)));
  }
  function md(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), p1(l, a));
  }
  function od(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var u = l.stateNode,
          e = l.memoizedState;
        e !== null && (a = e.retryLane);
        break;
      case 19:
        u = l.stateNode;
        break;
      case 22:
        u = l.stateNode._retryCache;
        break;
      default:
        throw Error(v(314));
    }
    (u !== null && u.delete(t), p1(l, a));
  }
  function vd(l, t) {
    return Kn(l, t);
  }
  var En = null,
    zu = null,
    Rf = !1,
    An = !1,
    qf = !1,
    va = 0;
  function Ot(l) {
    (l !== zu &&
      l.next === null &&
      (zu === null ? (En = zu = l) : (zu = zu.next = l)),
      (An = !0),
      Rf || ((Rf = !0), hd()));
  }
  function ie(l, t) {
    if (!qf && An) {
      qf = !0;
      do
        for (var a = !1, u = En; u !== null; ) {
          if (l !== 0) {
            var e = u.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var c = u.suspendedLanes,
                f = u.pingedLanes;
              ((n = (1 << (31 - Il(42 | l) + 1)) - 1),
                (n &= e & ~(c & ~f)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), U1(u, n));
          } else
            ((n = J),
              (n = De(
                u,
                u === ml ? n : 0,
                u.cancelPendingCommit !== null || u.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || Ou(u, n) || ((a = !0), U1(u, n)));
          u = u.next;
        }
      while (a);
      qf = !1;
    }
  }
  function yd() {
    D1();
  }
  function D1() {
    An = Rf = !1;
    var l = 0;
    va !== 0 && pd() && (l = va);
    for (var t = Fl(), a = null, u = En; u !== null; ) {
      var e = u.next,
        n = O1(u, t);
      (n === 0
        ? ((u.next = null),
          a === null ? (En = e) : (a.next = e),
          e === null && (zu = a))
        : ((a = u), (l !== 0 || (n & 3) !== 0) && (An = !0)),
        (u = e));
    }
    ((_l !== 0 && _l !== 5) || ie(l), va !== 0 && (va = 0));
  }
  function O1(l, t) {
    for (
      var a = l.suspendedLanes,
        u = l.pingedLanes,
        e = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var c = 31 - Il(n),
        f = 1 << c,
        i = e[c];
      (i === -1
        ? ((f & a) === 0 || (f & u) !== 0) && (e[c] = Qs(f, t))
        : i <= t && (l.expiredLanes |= f),
        (n &= ~f));
    }
    if (
      ((t = ml),
      (a = J),
      (a = De(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (u = l.callbackNode),
      a === 0 ||
        (l === t && (ul === 2 || ul === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        u !== null && u !== null && Jn(u),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || Ou(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((u !== null && Jn(u), $n(a))) {
        case 2:
        case 8:
          a = ri;
          break;
        case 32:
          a = Ee;
          break;
        case 268435456:
          a = Si;
          break;
        default:
          a = Ee;
      }
      return (
        (u = M1.bind(null, l)),
        (a = Kn(a, u)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      u !== null && u !== null && Jn(u),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function M1(l, t) {
    if (_l !== 0 && _l !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (Tn() && l.callbackNode !== a) return null;
    var u = J;
    return (
      (u = De(
        l,
        l === ml ? u : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      u === 0
        ? null
        : (s1(l, u, t),
          O1(l, Fl()),
          l.callbackNode != null && l.callbackNode === a
            ? M1.bind(null, l)
            : null)
    );
  }
  function U1(l, t) {
    if (Tn()) return null;
    s1(l, t, !0);
  }
  function hd() {
    Od(function () {
      (tl & 6) !== 0 ? Kn(gi, yd) : D1();
    });
  }
  function jf() {
    if (va === 0) {
      var l = nu;
      (l === 0 && ((l = Ae), (Ae <<= 1), (Ae & 261888) === 0 && (Ae = 256)),
        (va = l));
    }
    return va;
  }
  function x1(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : xe("" + l);
  }
  function N1(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function gd(l, t, a, u, e) {
    if (t === "submit" && a && a.stateNode === e) {
      var n = x1((e[Xl] || null).action),
        c = u.submitter;
      c &&
        ((t = (t = c[Xl] || null)
          ? x1(t.formAction)
          : c.getAttribute("formAction")),
        t !== null && ((n = t), (c = null)));
      var f = new Re("action", "action", null, u, e);
      l.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (u.defaultPrevented) {
                if (va !== 0) {
                  var i = c ? N1(e, c) : new FormData(e);
                  tf(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    null,
                    i,
                  );
                }
              } else
                typeof n == "function" &&
                  (f.preventDefault(),
                  (i = c ? N1(e, c) : new FormData(e)),
                  tf(
                    a,
                    { pending: !0, data: i, method: e.method, action: n },
                    n,
                    i,
                  ));
            },
            currentTarget: e,
          },
        ],
      });
    }
  }
  for (var Bf = 0; Bf < Sc.length; Bf++) {
    var Yf = Sc[Bf],
      rd = Yf.toLowerCase(),
      Sd = Yf[0].toUpperCase() + Yf.slice(1);
    St(rd, "on" + Sd);
  }
  (St(i0, "onAnimationEnd"),
    St(s0, "onAnimationIteration"),
    St(d0, "onAnimationStart"),
    St("dblclick", "onDoubleClick"),
    St("focusin", "onFocus"),
    St("focusout", "onBlur"),
    St(R3, "onTransitionRun"),
    St(q3, "onTransitionStart"),
    St(j3, "onTransitionCancel"),
    St(m0, "onTransitionEnd"),
    Ka("onMouseEnter", ["mouseout", "mouseover"]),
    Ka("onMouseLeave", ["mouseout", "mouseover"]),
    Ka("onPointerEnter", ["pointerout", "pointerover"]),
    Ka("onPointerLeave", ["pointerout", "pointerover"]),
    Aa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Aa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Aa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Aa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Aa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Aa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var se =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    bd = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(se),
    );
  function H1(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var u = l[a],
        e = u.event;
      u = u.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = u.length - 1; 0 <= c; c--) {
            var f = u[c],
              i = f.instance,
              h = f.currentTarget;
            if (((f = f.listener), i !== n && e.isPropagationStopped()))
              break l;
            ((n = f), (e.currentTarget = h));
            try {
              n(e);
            } catch (S) {
              Be(S);
            }
            ((e.currentTarget = null), (n = i));
          }
        else
          for (c = 0; c < u.length; c++) {
            if (
              ((f = u[c]),
              (i = f.instance),
              (h = f.currentTarget),
              (f = f.listener),
              i !== n && e.isPropagationStopped())
            )
              break l;
            ((n = f), (e.currentTarget = h));
            try {
              n(e);
            } catch (S) {
              Be(S);
            }
            ((e.currentTarget = null), (n = i));
          }
      }
    }
  }
  function K(l, t) {
    var a = t[Fn];
    a === void 0 && (a = t[Fn] = new Set());
    var u = l + "__bubble";
    a.has(u) || (C1(t, l, 2, !1), a.add(u));
  }
  function Gf(l, t, a) {
    var u = 0;
    (t && (u |= 4), C1(a, l, u, t));
  }
  var _n = "_reactListening" + Math.random().toString(36).slice(2);
  function Zf(l) {
    if (!l[_n]) {
      ((l[_n] = !0),
        Di.forEach(function (a) {
          a !== "selectionchange" && (bd.has(a) || Gf(a, !1, l), Gf(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[_n] || ((t[_n] = !0), Gf("selectionchange", !1, t));
    }
  }
  function C1(l, t, a, u) {
    switch (is(t)) {
      case 2:
        var e = wd;
        break;
      case 8:
        e = Wd;
        break;
      default:
        e = ti;
    }
    ((a = e.bind(null, t, a, l)),
      (e = void 0),
      !nc ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (e = !0),
      u
        ? e !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: e })
          : l.addEventListener(t, a, !0)
        : e !== void 0
          ? l.addEventListener(t, a, { passive: e })
          : l.addEventListener(t, a, !1));
  }
  function Qf(l, t, a, u, e) {
    var n = u;
    if ((t & 1) === 0 && (t & 2) === 0 && u !== null)
      l: for (;;) {
        if (u === null) return;
        var c = u.tag;
        if (c === 3 || c === 4) {
          var f = u.stateNode.containerInfo;
          if (f === e) break;
          if (c === 4)
            for (c = u.return; c !== null; ) {
              var i = c.tag;
              if ((i === 3 || i === 4) && c.stateNode.containerInfo === e)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (((c = Xa(f)), c === null)) return;
            if (((i = c.tag), i === 5 || i === 6 || i === 26 || i === 27)) {
              u = n = c;
              continue l;
            }
            f = f.parentNode;
          }
        }
        u = u.return;
      }
    Yi(function () {
      var h = n,
        S = uc(a),
        T = [];
      l: {
        var g = o0.get(l);
        if (g !== void 0) {
          var r = Re,
            M = l;
          switch (l) {
            case "keypress":
              if (He(a) === 0) break l;
            case "keydown":
            case "keyup":
              r = o3;
              break;
            case "focusin":
              ((M = "focus"), (r = sc));
              break;
            case "focusout":
              ((M = "blur"), (r = sc));
              break;
            case "beforeblur":
            case "afterblur":
              r = sc;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              r = Qi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              r = l3;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              r = h3;
              break;
            case i0:
            case s0:
            case d0:
              r = u3;
              break;
            case m0:
              r = r3;
              break;
            case "scroll":
            case "scrollend":
              r = Is;
              break;
            case "wheel":
              r = b3;
              break;
            case "copy":
            case "cut":
            case "paste":
              r = n3;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              r = Li;
              break;
            case "toggle":
            case "beforetoggle":
              r = T3;
          }
          var q = (t & 4) !== 0,
            il = !q && (l === "scroll" || l === "scrollend"),
            m = q ? (g !== null ? g + "Capture" : null) : g;
          q = [];
          for (var s = h, y; s !== null; ) {
            var z = s;
            if (
              ((y = z.stateNode),
              (z = z.tag),
              (z !== 5 && z !== 26 && z !== 27) ||
                y === null ||
                m === null ||
                ((z = Nu(s, m)), z != null && q.push(de(s, z, y))),
              il)
            )
              break;
            s = s.return;
          }
          0 < q.length &&
            ((g = new r(g, M, null, a, S)), T.push({ event: g, listeners: q }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((g = l === "mouseover" || l === "pointerover"),
            (r = l === "mouseout" || l === "pointerout"),
            g &&
              a !== ac &&
              (M = a.relatedTarget || a.fromElement) &&
              (Xa(M) || M[Qa]))
          )
            break l;
          if (
            (r || g) &&
            ((g =
              S.window === S
                ? S
                : (g = S.ownerDocument)
                  ? g.defaultView || g.parentWindow
                  : window),
            r
              ? ((M = a.relatedTarget || a.toElement),
                (r = h),
                (M = M ? Xa(M) : null),
                M !== null &&
                  ((il = B(M)),
                  (q = M.tag),
                  M !== il || (q !== 5 && q !== 27 && q !== 6)) &&
                  (M = null))
              : ((r = null), (M = h)),
            r !== M)
          ) {
            if (
              ((q = Qi),
              (z = "onMouseLeave"),
              (m = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((q = Li),
                (z = "onPointerLeave"),
                (m = "onPointerEnter"),
                (s = "pointer")),
              (il = r == null ? g : xu(r)),
              (y = M == null ? g : xu(M)),
              (g = new q(z, s + "leave", r, a, S)),
              (g.target = il),
              (g.relatedTarget = y),
              (z = null),
              Xa(S) === h &&
                ((q = new q(m, s + "enter", M, a, S)),
                (q.target = y),
                (q.relatedTarget = il),
                (z = q)),
              (il = z),
              r && M)
            )
              t: {
                for (q = zd, m = r, s = M, y = 0, z = m; z; z = q(z)) y++;
                z = 0;
                for (var C = s; C; C = q(C)) z++;
                for (; 0 < y - z; ) ((m = q(m)), y--);
                for (; 0 < z - y; ) ((s = q(s)), z--);
                for (; y--; ) {
                  if (m === s || (s !== null && m === s.alternate)) {
                    q = m;
                    break t;
                  }
                  ((m = q(m)), (s = q(s)));
                }
                q = null;
              }
            else q = null;
            (r !== null && R1(T, g, r, q, !1),
              M !== null && il !== null && R1(T, il, M, q, !0));
          }
        }
        l: {
          if (
            ((g = h ? xu(h) : window),
            (r = g.nodeName && g.nodeName.toLowerCase()),
            r === "select" || (r === "input" && g.type === "file"))
          )
            var I = ki;
          else if ($i(g))
            if (Ii) I = N3;
            else {
              I = U3;
              var N = M3;
            }
          else
            ((r = g.nodeName),
              !r ||
              r.toLowerCase() !== "input" ||
              (g.type !== "checkbox" && g.type !== "radio")
                ? h && tc(h.elementType) && (I = ki)
                : (I = x3));
          if (I && (I = I(l, h))) {
            Fi(T, I, a, S);
            break l;
          }
          (N && N(l, g, h),
            l === "focusout" &&
              h &&
              g.type === "number" &&
              h.memoizedProps.value != null &&
              lc(g, "number", g.value));
        }
        switch (((N = h ? xu(h) : window), l)) {
          case "focusin":
            ($i(N) || N.contentEditable === "true") &&
              ((ka = N), (hc = h), (Gu = null));
            break;
          case "focusout":
            Gu = hc = ka = null;
            break;
          case "mousedown":
            gc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((gc = !1), c0(T, a, S));
            break;
          case "selectionchange":
            if (C3) break;
          case "keydown":
          case "keyup":
            c0(T, a, S);
        }
        var X;
        if (mc)
          l: {
            switch (l) {
              case "compositionstart":
                var w = "onCompositionStart";
                break l;
              case "compositionend":
                w = "onCompositionEnd";
                break l;
              case "compositionupdate":
                w = "onCompositionUpdate";
                break l;
            }
            w = void 0;
          }
        else
          Fa
            ? wi(l, a) && (w = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (w = "onCompositionStart");
        (w &&
          (Vi &&
            a.locale !== "ko" &&
            (Fa || w !== "onCompositionStart"
              ? w === "onCompositionEnd" && Fa && (X = Gi())
              : ((kt = S),
                (cc = "value" in kt ? kt.value : kt.textContent),
                (Fa = !0))),
          (N = pn(h, w)),
          0 < N.length &&
            ((w = new Xi(w, l, null, a, S)),
            T.push({ event: w, listeners: N }),
            X ? (w.data = X) : ((X = Wi(a)), X !== null && (w.data = X)))),
          (X = A3 ? _3(l, a) : p3(l, a)) &&
            ((w = pn(h, "onBeforeInput")),
            0 < w.length &&
              ((N = new Xi("onBeforeInput", "beforeinput", null, a, S)),
              T.push({ event: N, listeners: w }),
              (N.data = X))),
          gd(T, l, h, a, S));
      }
      H1(T, t);
    });
  }
  function de(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function pn(l, t) {
    for (var a = t + "Capture", u = []; l !== null; ) {
      var e = l,
        n = e.stateNode;
      if (
        ((e = e.tag),
        (e !== 5 && e !== 26 && e !== 27) ||
          n === null ||
          ((e = Nu(l, a)),
          e != null && u.unshift(de(l, e, n)),
          (e = Nu(l, t)),
          e != null && u.push(de(l, e, n))),
        l.tag === 3)
      )
        return u;
      l = l.return;
    }
    return [];
  }
  function zd(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function R1(l, t, a, u, e) {
    for (var n = t._reactName, c = []; a !== null && a !== u; ) {
      var f = a,
        i = f.alternate,
        h = f.stateNode;
      if (((f = f.tag), i !== null && i === u)) break;
      ((f !== 5 && f !== 26 && f !== 27) ||
        h === null ||
        ((i = h),
        e
          ? ((h = Nu(a, n)), h != null && c.unshift(de(a, h, i)))
          : e || ((h = Nu(a, n)), h != null && c.push(de(a, h, i)))),
        (a = a.return));
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var Td = /\r\n?/g,
    Ed = /\u0000|\uFFFD/g;
  function q1(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        Td,
        `
`,
      )
      .replace(Ed, "");
  }
  function j1(l, t) {
    return ((t = q1(t)), q1(l) === t);
  }
  function fl(l, t, a, u, e, n) {
    switch (a) {
      case "children":
        typeof u == "string"
          ? t === "body" || (t === "textarea" && u === "") || wa(l, u)
          : (typeof u == "number" || typeof u == "bigint") &&
            t !== "body" &&
            wa(l, "" + u);
        break;
      case "className":
        Me(l, "class", u);
        break;
      case "tabIndex":
        Me(l, "tabindex", u);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Me(l, a, u);
        break;
      case "style":
        ji(l, u, n);
        break;
      case "data":
        if (t !== "object") {
          Me(l, "data", u);
          break;
        }
      case "src":
      case "href":
        if (u === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "symbol" ||
          typeof u == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((u = xe("" + u)), l.setAttribute(a, u));
        break;
      case "action":
      case "formAction":
        if (typeof u == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && fl(l, t, "name", e.name, e, null),
                fl(l, t, "formEncType", e.formEncType, e, null),
                fl(l, t, "formMethod", e.formMethod, e, null),
                fl(l, t, "formTarget", e.formTarget, e, null))
              : (fl(l, t, "encType", e.encType, e, null),
                fl(l, t, "method", e.method, e, null),
                fl(l, t, "target", e.target, e, null)));
        if (u == null || typeof u == "symbol" || typeof u == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((u = xe("" + u)), l.setAttribute(a, u));
        break;
      case "onClick":
        u != null && (l.onclick = Nt);
        break;
      case "onScroll":
        u != null && K("scroll", l);
        break;
      case "onScrollEnd":
        u != null && K("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(v(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "muted":
        l.muted = u && typeof u != "function" && typeof u != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          u == null ||
          typeof u == "function" ||
          typeof u == "boolean" ||
          typeof u == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = xe("" + u)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        u != null && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "" + u)
          : l.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        u && typeof u != "function" && typeof u != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        u === !0
          ? l.setAttribute(a, "")
          : u !== !1 &&
              u != null &&
              typeof u != "function" &&
              typeof u != "symbol"
            ? l.setAttribute(a, u)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        u != null &&
        typeof u != "function" &&
        typeof u != "symbol" &&
        !isNaN(u) &&
        1 <= u
          ? l.setAttribute(a, u)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u)
          ? l.removeAttribute(a)
          : l.setAttribute(a, u);
        break;
      case "popover":
        (K("beforetoggle", l), K("toggle", l), Oe(l, "popover", u));
        break;
      case "xlinkActuate":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
        break;
      case "xlinkArcrole":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
        break;
      case "xlinkRole":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
        break;
      case "xlinkShow":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
        break;
      case "xlinkTitle":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
        break;
      case "xlinkType":
        xt(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
        break;
      case "xmlBase":
        xt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
        break;
      case "xmlLang":
        xt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
        break;
      case "xmlSpace":
        xt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
        break;
      case "is":
        Oe(l, "is", u);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Fs.get(a) || a), Oe(l, a, u));
    }
  }
  function Xf(l, t, a, u, e, n) {
    switch (a) {
      case "style":
        ji(l, u, n);
        break;
      case "dangerouslySetInnerHTML":
        if (u != null) {
          if (typeof u != "object" || !("__html" in u)) throw Error(v(61));
          if (((a = u.__html), a != null)) {
            if (e.children != null) throw Error(v(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof u == "string"
          ? wa(l, u)
          : (typeof u == "number" || typeof u == "bigint") && wa(l, "" + u);
        break;
      case "onScroll":
        u != null && K("scroll", l);
        break;
      case "onScrollEnd":
        u != null && K("scrollend", l);
        break;
      case "onClick":
        u != null && (l.onclick = Nt);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Oi.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((e = a.endsWith("Capture")),
              (t = a.slice(2, e ? a.length - 7 : void 0)),
              (n = l[Xl] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, e),
              typeof u == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, u, e));
              break l;
            }
            a in l
              ? (l[a] = u)
              : u === !0
                ? l.setAttribute(a, "")
                : Oe(l, a, u);
          }
    }
  }
  function Hl(l, t, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        (K("error", l), K("load", l));
        var u = !1,
          e = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  u = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(v(137, t));
                default:
                  fl(l, t, n, c, a, null);
              }
          }
        (e && fl(l, t, "srcSet", a.srcSet, a, null),
          u && fl(l, t, "src", a.src, a, null));
        return;
      case "input":
        K("invalid", l);
        var f = (n = c = e = null),
          i = null,
          h = null;
        for (u in a)
          if (a.hasOwnProperty(u)) {
            var S = a[u];
            if (S != null)
              switch (u) {
                case "name":
                  e = S;
                  break;
                case "type":
                  c = S;
                  break;
                case "checked":
                  i = S;
                  break;
                case "defaultChecked":
                  h = S;
                  break;
                case "value":
                  n = S;
                  break;
                case "defaultValue":
                  f = S;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (S != null) throw Error(v(137, t));
                  break;
                default:
                  fl(l, t, u, S, a, null);
              }
          }
        Hi(l, n, f, i, h, c, e, !1);
        return;
      case "select":
        (K("invalid", l), (u = c = n = null));
        for (e in a)
          if (a.hasOwnProperty(e) && ((f = a[e]), f != null))
            switch (e) {
              case "value":
                n = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                u = f;
              default:
                fl(l, t, e, f, a, null);
            }
        ((t = n),
          (a = c),
          (l.multiple = !!u),
          t != null ? Ja(l, !!u, t, !1) : a != null && Ja(l, !!u, a, !0));
        return;
      case "textarea":
        (K("invalid", l), (n = e = u = null));
        for (c in a)
          if (a.hasOwnProperty(c) && ((f = a[c]), f != null))
            switch (c) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                e = f;
                break;
              case "children":
                n = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(v(91));
                break;
              default:
                fl(l, t, c, f, a, null);
            }
        Ri(l, u, e, n);
        return;
      case "option":
        for (i in a)
          if (a.hasOwnProperty(i) && ((u = a[i]), u != null))
            switch (i) {
              case "selected":
                l.selected =
                  u && typeof u != "function" && typeof u != "symbol";
                break;
              default:
                fl(l, t, i, u, a, null);
            }
        return;
      case "dialog":
        (K("beforetoggle", l), K("toggle", l), K("cancel", l), K("close", l));
        break;
      case "iframe":
      case "object":
        K("load", l);
        break;
      case "video":
      case "audio":
        for (u = 0; u < se.length; u++) K(se[u], l);
        break;
      case "image":
        (K("error", l), K("load", l));
        break;
      case "details":
        K("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (K("error", l), K("load", l));
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (h in a)
          if (a.hasOwnProperty(h) && ((u = a[h]), u != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(v(137, t));
              default:
                fl(l, t, h, u, a, null);
            }
        return;
      default:
        if (tc(t)) {
          for (S in a)
            a.hasOwnProperty(S) &&
              ((u = a[S]), u !== void 0 && Xf(l, t, S, u, a, void 0));
          return;
        }
    }
    for (f in a)
      a.hasOwnProperty(f) && ((u = a[f]), u != null && fl(l, t, f, u, a, null));
  }
  function Ad(l, t, a, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null,
          n = null,
          c = null,
          f = null,
          i = null,
          h = null,
          S = null;
        for (r in a) {
          var T = a[r];
          if (a.hasOwnProperty(r) && T != null)
            switch (r) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                u.hasOwnProperty(r) || fl(l, t, r, null, u, T);
            }
        }
        for (var g in u) {
          var r = u[g];
          if (((T = a[g]), u.hasOwnProperty(g) && (r != null || T != null)))
            switch (g) {
              case "type":
                n = r;
                break;
              case "name":
                e = r;
                break;
              case "checked":
                h = r;
                break;
              case "defaultChecked":
                S = r;
                break;
              case "value":
                c = r;
                break;
              case "defaultValue":
                f = r;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(v(137, t));
                break;
              default:
                r !== T && fl(l, t, g, r, u, T);
            }
        }
        Pn(l, c, f, i, h, S, n, e);
        return;
      case "select":
        r = c = f = g = null;
        for (n in a)
          if (((i = a[n]), a.hasOwnProperty(n) && i != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                r = i;
              default:
                u.hasOwnProperty(n) || fl(l, t, n, null, u, i);
            }
        for (e in u)
          if (
            ((n = u[e]),
            (i = a[e]),
            u.hasOwnProperty(e) && (n != null || i != null))
          )
            switch (e) {
              case "value":
                g = n;
                break;
              case "defaultValue":
                f = n;
                break;
              case "multiple":
                c = n;
              default:
                n !== i && fl(l, t, e, n, u, i);
            }
        ((t = f),
          (a = c),
          (u = r),
          g != null
            ? Ja(l, !!a, g, !1)
            : !!u != !!a &&
              (t != null ? Ja(l, !!a, t, !0) : Ja(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        r = g = null;
        for (f in a)
          if (
            ((e = a[f]),
            a.hasOwnProperty(f) && e != null && !u.hasOwnProperty(f))
          )
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                fl(l, t, f, null, u, e);
            }
        for (c in u)
          if (
            ((e = u[c]),
            (n = a[c]),
            u.hasOwnProperty(c) && (e != null || n != null))
          )
            switch (c) {
              case "value":
                g = e;
                break;
              case "defaultValue":
                r = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(v(91));
                break;
              default:
                e !== n && fl(l, t, c, e, u, n);
            }
        Ci(l, g, r);
        return;
      case "option":
        for (var M in a)
          if (
            ((g = a[M]),
            a.hasOwnProperty(M) && g != null && !u.hasOwnProperty(M))
          )
            switch (M) {
              case "selected":
                l.selected = !1;
                break;
              default:
                fl(l, t, M, null, u, g);
            }
        for (i in u)
          if (
            ((g = u[i]),
            (r = a[i]),
            u.hasOwnProperty(i) && g !== r && (g != null || r != null))
          )
            switch (i) {
              case "selected":
                l.selected =
                  g && typeof g != "function" && typeof g != "symbol";
                break;
              default:
                fl(l, t, i, g, u, r);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var q in a)
          ((g = a[q]),
            a.hasOwnProperty(q) &&
              g != null &&
              !u.hasOwnProperty(q) &&
              fl(l, t, q, null, u, g));
        for (h in u)
          if (
            ((g = u[h]),
            (r = a[h]),
            u.hasOwnProperty(h) && g !== r && (g != null || r != null))
          )
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(v(137, t));
                break;
              default:
                fl(l, t, h, g, u, r);
            }
        return;
      default:
        if (tc(t)) {
          for (var il in a)
            ((g = a[il]),
              a.hasOwnProperty(il) &&
                g !== void 0 &&
                !u.hasOwnProperty(il) &&
                Xf(l, t, il, void 0, u, g));
          for (S in u)
            ((g = u[S]),
              (r = a[S]),
              !u.hasOwnProperty(S) ||
                g === r ||
                (g === void 0 && r === void 0) ||
                Xf(l, t, S, g, u, r));
          return;
        }
    }
    for (var m in a)
      ((g = a[m]),
        a.hasOwnProperty(m) &&
          g != null &&
          !u.hasOwnProperty(m) &&
          fl(l, t, m, null, u, g));
    for (T in u)
      ((g = u[T]),
        (r = a[T]),
        !u.hasOwnProperty(T) ||
          g === r ||
          (g == null && r == null) ||
          fl(l, t, T, g, u, r));
  }
  function B1(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function _d() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0;
        u < a.length;
        u++
      ) {
        var e = a[u],
          n = e.transferSize,
          c = e.initiatorType,
          f = e.duration;
        if (n && f && B1(c)) {
          for (c = 0, f = e.responseEnd, u += 1; u < a.length; u++) {
            var i = a[u],
              h = i.startTime;
            if (h > f) break;
            var S = i.transferSize,
              T = i.initiatorType;
            S &&
              B1(T) &&
              ((i = i.responseEnd), (c += S * (i < f ? 1 : (f - h) / (i - h))));
          }
          if ((--u, (t += (8 * (n + c)) / (e.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Lf = null,
    Vf = null;
  function Dn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function Y1(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function G1(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Kf(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Jf = null;
  function pd() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Jf
        ? !1
        : ((Jf = l), !0)
      : ((Jf = null), !1);
  }
  var Z1 = typeof setTimeout == "function" ? setTimeout : void 0,
    Dd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Q1 = typeof Promise == "function" ? Promise : void 0,
    Od =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Q1 < "u"
          ? function (l) {
              return Q1.resolve(null).then(l).catch(Md);
            }
          : Z1;
  function Md(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function ya(l) {
    return l === "head";
  }
  function X1(l, t) {
    var a = t,
      u = 0;
    do {
      var e = a.nextSibling;
      if ((l.removeChild(a), e && e.nodeType === 8))
        if (((a = e.data), a === "/$" || a === "/&")) {
          if (u === 0) {
            (l.removeChild(e), _u(t));
            return;
          }
          u--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          u++;
        else if (a === "html") me(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), me(a));
          for (var n = a.firstChild; n; ) {
            var c = n.nextSibling,
              f = n.nodeName;
            (n[Uu] ||
              f === "SCRIPT" ||
              f === "STYLE" ||
              (f === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = c));
          }
        } else a === "body" && me(l.ownerDocument.body);
      a = e;
    } while (a);
    _u(t);
  }
  function L1(l, t) {
    var a = l;
    l = 0;
    do {
      var u = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        u && u.nodeType === 8)
      )
        if (((a = u.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = u;
    } while (a);
  }
  function wf(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (wf(a), kn(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Ud(l, t, a, u) {
    for (; l.nodeType === 1; ) {
      var e = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (u) {
        if (!l[Uu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== e.rel ||
                l.getAttribute("href") !==
                  (e.href == null || e.href === "" ? null : e.href) ||
                l.getAttribute("crossorigin") !==
                  (e.crossOrigin == null ? null : e.crossOrigin) ||
                l.getAttribute("title") !== (e.title == null ? null : e.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (e.src == null ? null : e.src) ||
                  l.getAttribute("type") !== (e.type == null ? null : e.type) ||
                  l.getAttribute("crossorigin") !==
                    (e.crossOrigin == null ? null : e.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = ht(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function xd(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = ht(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function V1(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = ht(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Wf(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function $f(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Nd(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var u = function () {
        (t(), a.removeEventListener("DOMContentLoaded", u));
      };
      (a.addEventListener("DOMContentLoaded", u), (l._reactRetry = u));
    }
  }
  function ht(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Ff = null;
  function K1(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return ht(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function J1(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function w1(l, t, a) {
    switch (((t = Dn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(v(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(v(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(v(454));
        return l;
      default:
        throw Error(v(451));
    }
  }
  function me(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    kn(l);
  }
  var gt = new Map(),
    W1 = new Set();
  function On(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var wt = D.d;
  D.d = { f: Hd, r: Cd, D: Rd, C: qd, L: jd, m: Bd, X: Gd, S: Yd, M: Zd };
  function Hd() {
    var l = wt.f(),
      t = Sn();
    return l || t;
  }
  function Cd(l) {
    var t = La(l);
    t !== null && t.tag === 5 && t.type === "form" ? m2(t) : wt.r(l);
  }
  var Tu = typeof document > "u" ? null : document;
  function $1(l, t, a) {
    var u = Tu;
    if (u && typeof t == "string" && t) {
      var e = it(t);
      ((e = 'link[rel="' + l + '"][href="' + e + '"]'),
        typeof a == "string" && (e += '[crossorigin="' + a + '"]'),
        W1.has(e) ||
          (W1.add(e),
          (l = { rel: l, crossOrigin: a, href: t }),
          u.querySelector(e) === null &&
            ((t = u.createElement("link")),
            Hl(t, "link", l),
            Dl(t),
            u.head.appendChild(t))));
    }
  }
  function Rd(l) {
    (wt.D(l), $1("dns-prefetch", l, null));
  }
  function qd(l, t) {
    (wt.C(l, t), $1("preconnect", l, t));
  }
  function jd(l, t, a) {
    wt.L(l, t, a);
    var u = Tu;
    if (u && l && t) {
      var e = 'link[rel="preload"][as="' + it(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((e += '[imagesrcset="' + it(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (e += '[imagesizes="' + it(a.imageSizes) + '"]'))
        : (e += '[href="' + it(l) + '"]');
      var n = e;
      switch (t) {
        case "style":
          n = Eu(l);
          break;
        case "script":
          n = Au(l);
      }
      gt.has(n) ||
        ((l = H(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        gt.set(n, l),
        u.querySelector(e) !== null ||
          (t === "style" && u.querySelector(oe(n))) ||
          (t === "script" && u.querySelector(ve(n))) ||
          ((t = u.createElement("link")),
          Hl(t, "link", l),
          Dl(t),
          u.head.appendChild(t)));
    }
  }
  function Bd(l, t) {
    wt.m(l, t);
    var a = Tu;
    if (a && l) {
      var u = t && typeof t.as == "string" ? t.as : "script",
        e =
          'link[rel="modulepreload"][as="' + it(u) + '"][href="' + it(l) + '"]',
        n = e;
      switch (u) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Au(l);
      }
      if (
        !gt.has(n) &&
        ((l = H({ rel: "modulepreload", href: l }, t)),
        gt.set(n, l),
        a.querySelector(e) === null)
      ) {
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ve(n))) return;
        }
        ((u = a.createElement("link")),
          Hl(u, "link", l),
          Dl(u),
          a.head.appendChild(u));
      }
    }
  }
  function Yd(l, t, a) {
    wt.S(l, t, a);
    var u = Tu;
    if (u && l) {
      var e = Va(u).hoistableStyles,
        n = Eu(l);
      t = t || "default";
      var c = e.get(n);
      if (!c) {
        var f = { loading: 0, preload: null };
        if ((c = u.querySelector(oe(n)))) f.loading = 5;
        else {
          ((l = H({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = gt.get(n)) && kf(l, a));
          var i = (c = u.createElement("link"));
          (Dl(i),
            Hl(i, "link", l),
            (i._p = new Promise(function (h, S) {
              ((i.onload = h), (i.onerror = S));
            })),
            i.addEventListener("load", function () {
              f.loading |= 1;
            }),
            i.addEventListener("error", function () {
              f.loading |= 2;
            }),
            (f.loading |= 4),
            Mn(c, t, u));
        }
        ((c = { type: "stylesheet", instance: c, count: 1, state: f }),
          e.set(n, c));
      }
    }
  }
  function Gd(l, t) {
    wt.X(l, t);
    var a = Tu;
    if (a && l) {
      var u = Va(a).hoistableScripts,
        e = Au(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(ve(e))),
        n ||
          ((l = H({ src: l, async: !0 }, t)),
          (t = gt.get(e)) && If(l, t),
          (n = a.createElement("script")),
          Dl(n),
          Hl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function Zd(l, t) {
    wt.M(l, t);
    var a = Tu;
    if (a && l) {
      var u = Va(a).hoistableScripts,
        e = Au(l),
        n = u.get(e);
      n ||
        ((n = a.querySelector(ve(e))),
        n ||
          ((l = H({ src: l, async: !0, type: "module" }, t)),
          (t = gt.get(e)) && If(l, t),
          (n = a.createElement("script")),
          Dl(n),
          Hl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        u.set(e, n));
    }
  }
  function F1(l, t, a, u) {
    var e = (e = L.current) ? On(e) : null;
    if (!e) throw Error(v(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Eu(a.href)),
            (a = Va(e).hoistableStyles),
            (u = a.get(t)),
            u ||
              ((u = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, u)),
            u)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Eu(a.href);
          var n = Va(e).hoistableStyles,
            c = n.get(l);
          if (
            (c ||
              ((e = e.ownerDocument || e),
              (c = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, c),
              (n = e.querySelector(oe(l))) &&
                !n._p &&
                ((c.instance = n), (c.state.loading = 5)),
              gt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                gt.set(l, a),
                n || Qd(e, l, a, c.state))),
            t && u === null)
          )
            throw Error(v(528, ""));
          return c;
        }
        if (t && u !== null) throw Error(v(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Au(a)),
              (a = Va(e).hoistableScripts),
              (u = a.get(t)),
              u ||
                ((u = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, u)),
              u)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(v(444, l));
    }
  }
  function Eu(l) {
    return 'href="' + it(l) + '"';
  }
  function oe(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function k1(l) {
    return H({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Qd(l, t, a, u) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (u.loading = 1)
      : ((t = l.createElement("link")),
        (u.preload = t),
        t.addEventListener("load", function () {
          return (u.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (u.loading |= 2);
        }),
        Hl(t, "link", a),
        Dl(t),
        l.head.appendChild(t));
  }
  function Au(l) {
    return '[src="' + it(l) + '"]';
  }
  function ve(l) {
    return "script[async]" + l;
  }
  function I1(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + it(a.href) + '"]');
          if (u) return ((t.instance = u), Dl(u), u);
          var e = H({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (u = (l.ownerDocument || l).createElement("style")),
            Dl(u),
            Hl(u, "style", e),
            Mn(u, a.precedence, l),
            (t.instance = u)
          );
        case "stylesheet":
          e = Eu(a.href);
          var n = l.querySelector(oe(e));
          if (n) return ((t.state.loading |= 4), (t.instance = n), Dl(n), n);
          ((u = k1(a)),
            (e = gt.get(e)) && kf(u, e),
            (n = (l.ownerDocument || l).createElement("link")),
            Dl(n));
          var c = n;
          return (
            (c._p = new Promise(function (f, i) {
              ((c.onload = f), (c.onerror = i));
            })),
            Hl(n, "link", u),
            (t.state.loading |= 4),
            Mn(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Au(a.src)),
            (e = l.querySelector(ve(n)))
              ? ((t.instance = e), Dl(e), e)
              : ((u = a),
                (e = gt.get(n)) && ((u = H({}, a)), If(u, e)),
                (l = l.ownerDocument || l),
                (e = l.createElement("script")),
                Dl(e),
                Hl(e, "link", u),
                l.head.appendChild(e),
                (t.instance = e))
          );
        case "void":
          return null;
        default:
          throw Error(v(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((u = t.instance), (t.state.loading |= 4), Mn(u, a.precedence, l));
    return t.instance;
  }
  function Mn(l, t, a) {
    for (
      var u = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        e = u.length ? u[u.length - 1] : null,
        n = e,
        c = 0;
      c < u.length;
      c++
    ) {
      var f = u[c];
      if (f.dataset.precedence === t) n = f;
      else if (n !== e) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function kf(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function If(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var Un = null;
  function P1(l, t, a) {
    if (Un === null) {
      var u = new Map(),
        e = (Un = new Map());
      e.set(a, u);
    } else ((e = Un), (u = e.get(a)), u || ((u = new Map()), e.set(a, u)));
    if (u.has(l)) return u;
    for (
      u.set(l, null), a = a.getElementsByTagName(l), e = 0;
      e < a.length;
      e++
    ) {
      var n = a[e];
      if (
        !(
          n[Uu] ||
          n[Ml] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var f = u.get(c);
        f ? f.push(n) : u.set(c, [n]);
      }
    }
    return u;
  }
  function ls(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Xd(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (l = t.disabled),
              typeof t.precedence == "string" && l == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ts(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Ld(l, t, a, u) {
    if (
      a.type === "stylesheet" &&
      (typeof u.media != "string" || matchMedia(u.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var e = Eu(u.href),
          n = t.querySelector(oe(e));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = xn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            Dl(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (u = k1(u)),
          (e = gt.get(e)) && kf(u, e),
          (n = n.createElement("link")),
          Dl(n));
        var c = n;
        ((c._p = new Promise(function (f, i) {
          ((c.onload = f), (c.onerror = i));
        })),
          Hl(n, "link", u),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = xn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Pf = 0;
  function Vd(l, t) {
    return (
      l.stylesheets && l.count === 0 && Hn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var u = setTimeout(function () {
              if ((l.stylesheets && Hn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && Pf === 0 && (Pf = 62500 * _d());
            var e = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && Hn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > Pf ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(u), clearTimeout(e));
              }
            );
          }
        : null
    );
  }
  function xn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Hn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Nn = null;
  function Hn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Nn = new Map()),
        t.forEach(Kd, l),
        (Nn = null),
        xn.call(l)));
  }
  function Kd(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Nn.get(l);
      if (a) var u = a.get(null);
      else {
        ((a = new Map()), Nn.set(l, a));
        for (
          var e = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < e.length;
          n++
        ) {
          var c = e[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") &&
            (a.set(c.dataset.precedence, c), (u = c));
        }
        u && a.set(null, u);
      }
      ((e = t.instance),
        (c = e.getAttribute("data-precedence")),
        (n = a.get(c) || u),
        n === u && a.set(null, e),
        a.set(c, e),
        this.count++,
        (u = xn.bind(this)),
        e.addEventListener("load", u),
        e.addEventListener("error", u),
        n
          ? n.parentNode.insertBefore(e, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(e, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var ye = {
    $$typeof: Cl,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0,
  };
  function Jd(l, t, a, u, e, n, c, f, i) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = wn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = wn(0)),
      (this.hiddenUpdates = wn(null)),
      (this.identifierPrefix = u),
      (this.onUncaughtError = e),
      (this.onCaughtError = n),
      (this.onRecoverableError = c),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = i),
      (this.incompleteTransitions = new Map()));
  }
  function as(l, t, a, u, e, n, c, f, i, h, S, T) {
    return (
      (l = new Jd(l, t, a, c, i, h, S, T, f)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = lt(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Nc()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: u, isDehydrated: a, cache: t }),
      qc(n),
      l
    );
  }
  function us(l) {
    return l ? ((l = lu), l) : lu;
  }
  function es(l, t, a, u, e, n) {
    ((e = us(e)),
      u.context === null ? (u.context = e) : (u.pendingContext = e),
      (u = ua(t)),
      (u.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (u.callback = n),
      (a = ea(l, u, t)),
      a !== null && (Wl(a, l, t), Ju(a, l, t)));
  }
  function ns(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function li(l, t) {
    (ns(l, t), (l = l.alternate) && ns(l, t));
  }
  function cs(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Oa(l, 67108864);
      (t !== null && Wl(t, l, 67108864), li(l, 67108864));
    }
  }
  function fs(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = Wn(t);
      var a = Oa(l, t);
      (a !== null && Wl(a, l, t), li(l, t));
    }
  }
  var Cn = !0;
  function wd(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = D.p;
    try {
      ((D.p = 2), ti(l, t, a, u));
    } finally {
      ((D.p = n), (b.T = e));
    }
  }
  function Wd(l, t, a, u) {
    var e = b.T;
    b.T = null;
    var n = D.p;
    try {
      ((D.p = 8), ti(l, t, a, u));
    } finally {
      ((D.p = n), (b.T = e));
    }
  }
  function ti(l, t, a, u) {
    if (Cn) {
      var e = ai(u);
      if (e === null) (Qf(l, t, u, Rn, a), ss(l, u));
      else if (Fd(e, l, t, a, u)) u.stopPropagation();
      else if ((ss(l, u), t & 4 && -1 < $d.indexOf(l))) {
        for (; e !== null; ) {
          var n = La(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var c = Ea(n.pendingLanes);
                  if (c !== 0) {
                    var f = n;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var i = 1 << (31 - Il(c));
                      ((f.entanglements[1] |= i), (c &= ~i));
                    }
                    (Ot(n), (tl & 6) === 0 && ((gn = Fl() + 500), ie(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((f = Oa(n, 2)), f !== null && Wl(f, n, 2), Sn(), li(n, 2));
            }
          if (((n = ai(u)), n === null && Qf(l, t, u, Rn, a), n === e)) break;
          e = n;
        }
        e !== null && u.stopPropagation();
      } else Qf(l, t, u, null, a);
    }
  }
  function ai(l) {
    return ((l = uc(l)), ui(l));
  }
  var Rn = null;
  function ui(l) {
    if (((Rn = null), (l = Xa(l)), l !== null)) {
      var t = B(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = k(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = sl(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Rn = l), null);
  }
  function is(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Rs()) {
          case gi:
            return 2;
          case ri:
            return 8;
          case Ee:
          case qs:
            return 32;
          case Si:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ei = !1,
    ha = null,
    ga = null,
    ra = null,
    he = new Map(),
    ge = new Map(),
    Sa = [],
    $d =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function ss(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ha = null;
        break;
      case "dragenter":
      case "dragleave":
        ga = null;
        break;
      case "mouseover":
      case "mouseout":
        ra = null;
        break;
      case "pointerover":
      case "pointerout":
        he.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ge.delete(t.pointerId);
    }
  }
  function re(l, t, a, u, e, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: u,
          nativeEvent: n,
          targetContainers: [e],
        }),
        t !== null && ((t = La(t)), t !== null && cs(t)),
        l)
      : ((l.eventSystemFlags |= u),
        (t = l.targetContainers),
        e !== null && t.indexOf(e) === -1 && t.push(e),
        l);
  }
  function Fd(l, t, a, u, e) {
    switch (t) {
      case "focusin":
        return ((ha = re(ha, l, t, a, u, e)), !0);
      case "dragenter":
        return ((ga = re(ga, l, t, a, u, e)), !0);
      case "mouseover":
        return ((ra = re(ra, l, t, a, u, e)), !0);
      case "pointerover":
        var n = e.pointerId;
        return (he.set(n, re(he.get(n) || null, l, t, a, u, e)), !0);
      case "gotpointercapture":
        return (
          (n = e.pointerId),
          ge.set(n, re(ge.get(n) || null, l, t, a, u, e)),
          !0
        );
    }
    return !1;
  }
  function ds(l) {
    var t = Xa(l.target);
    if (t !== null) {
      var a = B(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = k(a)), t !== null)) {
            ((l.blockedOn = t),
              _i(l.priority, function () {
                fs(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = sl(a)), t !== null)) {
            ((l.blockedOn = t),
              _i(l.priority, function () {
                fs(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function qn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = ai(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var u = new a.constructor(a.type, a);
        ((ac = u), a.target.dispatchEvent(u), (ac = null));
      } else return ((t = La(a)), t !== null && cs(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function ms(l, t, a) {
    qn(l) && a.delete(t);
  }
  function kd() {
    ((ei = !1),
      ha !== null && qn(ha) && (ha = null),
      ga !== null && qn(ga) && (ga = null),
      ra !== null && qn(ra) && (ra = null),
      he.forEach(ms),
      ge.forEach(ms));
  }
  function jn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      ei ||
        ((ei = !0),
        o.unstable_scheduleCallback(o.unstable_NormalPriority, kd)));
  }
  var Bn = null;
  function os(l) {
    Bn !== l &&
      ((Bn = l),
      o.unstable_scheduleCallback(o.unstable_NormalPriority, function () {
        Bn === l && (Bn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            u = l[t + 1],
            e = l[t + 2];
          if (typeof u != "function") {
            if (ui(u || a) === null) continue;
            break;
          }
          var n = La(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            tf(n, { pending: !0, data: e, method: a.method, action: u }, u, e));
        }
      }));
  }
  function _u(l) {
    function t(i) {
      return jn(i, l);
    }
    (ha !== null && jn(ha, l),
      ga !== null && jn(ga, l),
      ra !== null && jn(ra, l),
      he.forEach(t),
      ge.forEach(t));
    for (var a = 0; a < Sa.length; a++) {
      var u = Sa[a];
      u.blockedOn === l && (u.blockedOn = null);
    }
    for (; 0 < Sa.length && ((a = Sa[0]), a.blockedOn === null); )
      (ds(a), a.blockedOn === null && Sa.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (u = 0; u < a.length; u += 3) {
        var e = a[u],
          n = a[u + 1],
          c = e[Xl] || null;
        if (typeof n == "function") c || os(a);
        else if (c) {
          var f = null;
          if (n && n.hasAttribute("formAction")) {
            if (((e = n), (c = n[Xl] || null))) f = c.formAction;
            else if (ui(e) !== null) continue;
          } else f = c.action;
          (typeof f == "function" ? (a[u + 1] = f) : (a.splice(u, 3), (u -= 3)),
            os(a));
        }
      }
  }
  function vs() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (c) {
              return (e = c);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (e !== null && (e(), (e = null)), u || setTimeout(a, 20));
    }
    function a() {
      if (!u && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var u = !1,
        e = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((u = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            e !== null && (e(), (e = null)));
        }
      );
    }
  }
  function ni(l) {
    this._internalRoot = l;
  }
  ((Yn.prototype.render = ni.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(v(409));
      var a = t.current,
        u = nt();
      es(a, u, l, t, null, null);
    }),
    (Yn.prototype.unmount = ni.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (es(l.current, 2, null, l, null, null), Sn(), (t[Qa] = null));
        }
      }));
  function Yn(l) {
    this._internalRoot = l;
  }
  Yn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = Ai();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Sa.length && t !== 0 && t < Sa[a].priority; a++);
      (Sa.splice(a, 0, l), a === 0 && ds(l));
    }
  };
  var ys = _.version;
  if (ys !== "19.2.0") throw Error(v(527, ys, "19.2.0"));
  D.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(v(188))
        : ((l = Object.keys(l).join(",")), Error(v(268, l)));
    return (
      (l = E(t)),
      (l = l !== null ? W(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Id = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Gn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Gn.isDisabled && Gn.supportsFiber)
      try {
        ((Du = Gn.inject(Id)), (kl = Gn));
      } catch {}
  }
  return (
    (be.createRoot = function (l, t) {
      if (!R(l)) throw Error(v(299));
      var a = !1,
        u = "",
        e = T2,
        n = E2,
        c = A2;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (u = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (e = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
        (t = as(l, 1, !1, null, null, a, u, null, e, n, c, vs)),
        (l[Qa] = t.current),
        Zf(l),
        new ni(t)
      );
    }),
    (be.hydrateRoot = function (l, t, a) {
      if (!R(l)) throw Error(v(299));
      var u = !1,
        e = "",
        n = T2,
        c = E2,
        f = A2,
        i = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (u = !0),
          a.identifierPrefix !== void 0 && (e = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (c = a.onCaughtError),
          a.onRecoverableError !== void 0 && (f = a.onRecoverableError),
          a.formState !== void 0 && (i = a.formState)),
        (t = as(l, 1, !0, t, a ?? null, u, e, i, n, c, f, vs)),
        (t.context = us(null)),
        (a = t.current),
        (u = nt()),
        (u = Wn(u)),
        (e = ua(u)),
        (e.callback = null),
        ea(a, e, u),
        (a = u),
        (t.current.lanes = a),
        Mu(t, a),
        Ot(t),
        (l[Qa] = t.current),
        Zf(l),
        new Yn(t)
      );
    }),
    (be.version = "19.2.0"),
    be
  );
}
var _s;
function im() {
  if (_s) return ii.exports;
  _s = 1;
  function o() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o);
      } catch (_) {
        console.error(_);
      }
  }
  return (o(), (ii.exports = fm()), ii.exports);
}
var sm = im(),
  oi = { exports: {} },
  vi = {};
var ps;
function dm() {
  if (ps) return vi;
  ps = 1;
  var o = Zn().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return (
    (vi.c = function (_) {
      return o.H.useMemoCache(_);
    }),
    vi
  );
}
var Ds;
function mm() {
  return (Ds || ((Ds = 1), (oi.exports = dm())), oi.exports);
}
var ze = mm();
const om = "./assets/download-CZB9dbJs.svg",
  vm =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%20365%20358'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xml:space='preserve'%20xmlns:serif='http://www.serif.com/'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3e%3cpath%20d='M226.903,275.811c-10.346,0%20-19.068,-3.501%20-26.164,-10.503c-7.097,-7.005%20-10.645,-15.577%20-10.645,-25.718c0,-10.143%203.571,-18.693%2010.714,-25.65c7.145,-6.957%2015.889,-10.436%2026.233,-10.436c10.346,0%2019.068,3.501%2026.164,10.503c7.097,7.005%2010.645,15.577%2010.645,25.718c0,10.143%20-3.571,18.693%20-10.714,25.65c-7.145,6.957%20-15.889,10.436%20-26.233,10.436Zm-158.469,52.181c-6.083,0%20-11.406,-2.236%20-15.968,-6.709c-4.562,-4.473%20-6.843,-9.691%20-6.843,-15.654l0,-231.085c0,-5.963%202.281,-11.182%206.843,-15.654c4.562,-4.473%209.885,-6.709%2015.968,-6.709l24.712,0l0,-22.363l24.712,0l0,22.363l129.263,0l0,-22.363l24.712,0l0,22.363l24.712,0c6.083,0%2011.406,2.236%2015.968,6.709c4.562,4.473%206.843,9.691%206.843,15.654l0,231.085c0,5.963%20-2.281,11.182%20-6.843,15.654c-4.562,4.473%20-9.885,6.709%20-15.968,6.709l-228.112,0Zm-0,-22.363l228.112,0l0,-160.269l-228.112,0l-0,160.269Zm0,-182.632l228.112,0l0,-48.453l-228.112,0l-0,48.453Zm0,0l0,-48.453l0,48.453Z'%20style='fill-rule:nonzero;'/%3e%3c/svg%3e",
  ym =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%20673%20659'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xml:space='preserve'%20xmlns:serif='http://www.serif.com/'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3e%3cpath%20d='M155.428,483.894c29.405,-20.134%2058.577,-35.577%2087.516,-46.33c28.939,-10.753%2059.978,-16.13%2093.117,-16.13c33.139,0%2064.295,5.377%2093.467,16.13c29.172,10.753%2058.461,26.197%2087.866,46.33c20.537,-24.709%2035.123,-49.648%2043.758,-74.815c8.635,-25.167%2012.952,-51.707%2012.952,-79.619c0,-66.35%20-22.754,-121.831%20-68.262,-166.446c-45.508,-44.614%20-102.102,-66.922%20-169.781,-66.922c-67.679,0%20-124.273,22.307%20-169.781,66.922c-45.508,44.614%20-68.262,100.096%20-68.262,166.446c0,27.913%204.434,54.452%2013.302,79.619c8.868,25.167%2023.571,50.105%2044.108,74.815Zm180.5,-133.843c-26.983,0%20-49.693,-9.081%20-68.129,-27.242c-18.437,-18.157%20-27.655,-40.464%20-27.655,-66.922c0,-26.453%209.263,-48.717%2027.788,-66.791c18.521,-18.075%2041.275,-27.112%2068.262,-27.112c26.983,0%2049.693,9.081%2068.129,27.242c18.437,18.157%2027.655,40.464%2027.655,66.922c0,26.453%20-9.263,48.717%20-27.788,66.791c-18.521,18.075%20-41.275,27.112%20-68.262,27.112Zm0.462,253.959c-38.493,0%20-74.776,-7.207%20-108.849,-21.621c-34.073,-14.414%20-63.828,-34.09%20-89.266,-59.028c-25.438,-24.938%20-45.508,-54.057%20-60.211,-87.355c-14.703,-33.294%20-22.054,-68.871%20-22.054,-106.731c0,-37.856%207.351,-73.371%2022.054,-106.546c14.703,-33.175%2034.773,-62.231%2060.211,-87.17c25.438,-24.938%2055.14,-44.614%2089.105,-59.028c33.961,-14.414%2070.251,-21.621%20108.87,-21.621c38.614,0%2074.841,7.207%20108.681,21.621c33.839,14.414%2063.478,34.09%2088.916,59.028c25.438,24.938%2045.508,54.002%2060.211,87.19c14.703,33.188%2022.054,68.651%2022.054,106.388c0,37.737%20-7.351,73.307%20-22.054,106.711c-14.703,33.404%20-34.773,62.574%20-60.211,87.513c-25.438,24.938%20-55.084,44.614%20-88.937,59.028c-33.853,14.414%20-70.027,21.621%20-108.52,21.621Zm-0.329,-41.182c25.671,0%2050.759,-3.661%2075.264,-10.982c24.504,-7.321%2048.659,-20.134%2072.463,-38.437c-23.804,-16.473%20-48.075,-29.057%20-72.813,-37.751c-24.738,-8.694%20-49.709,-13.041%20-74.914,-13.041c-25.205,0%20-50.176,4.347%20-74.914,13.041c-24.738,8.694%20-49.009,21.278%20-72.813,37.751c23.804,18.303%2047.959,31.116%2072.463,38.437c24.504,7.321%2049.592,10.982%2075.264,10.982Zm0,-253.959c15.87,0%2028.822,-4.919%2038.857,-14.757c10.035,-9.838%2015.053,-22.536%2015.053,-38.094c0,-15.558%20-5.018,-28.256%20-15.053,-38.094c-10.035,-9.838%20-22.987,-14.757%20-38.857,-14.757c-15.87,0%20-28.822,4.919%20-38.857,14.757c-10.035,9.838%20-15.053,22.536%20-15.053,38.094c0,15.558%205.018,28.256%2015.053,38.094c10.035,9.838%2022.987,14.757%2038.857,14.757Z'%20style='fill-rule:nonzero;'/%3e%3c/svg%3e";
function xs(o) {
  const _ = ze.c(28);
  let j;
  _[0] !== o.cover || _[1] !== o.title
    ? ((j = p.jsx("div", {
        className: "self-center rounded-t-2xl  overflow-hidden h-70",
        children: p.jsx("img", {
          src: o.cover,
          alt: o.title,
          className: " object-cover w-full h-full",
        }),
      })),
      (_[0] = o.cover),
      (_[1] = o.title),
      (_[2] = j))
    : (j = _[2]);
  let v;
  _[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((v = p.jsx("img", { src: vm, alt: "Calendar Logo", width: 24 })),
      (_[3] = v))
    : (v = _[3]);
  let R;
  _[4] !== o.updated
    ? ((R = p.jsxs("div", {
        className: "text-sm text-[#6E7C99] flex gap-2 self-end pr-4 pt-2",
        children: [
          v,
          p.jsx("span", { className: "text-[16px]", children: o.updated }),
        ],
      })),
      (_[4] = o.updated),
      (_[5] = R))
    : (R = _[5]);
  let B;
  _[6] !== o.title
    ? ((B = p.jsx("h3", {
        className: "font-semibold text-xl text-[#1D2D50]",
        children: o.title,
      })),
      (_[6] = o.title),
      (_[7] = B))
    : (B = _[7]);
  let k;
  _[8] !== o.description
    ? ((k = p.jsx("p", {
        className: "text-sm text-[#6E7C99] mt-1",
        children: o.description,
      })),
      (_[8] = o.description),
      (_[9] = k))
    : (k = _[9]);
  let sl;
  _[10] !== o.questions
    ? ((sl = p.jsx("div", {
        className: "flex items-center text-sm text-[#6E7C99] mt-4",
        children: p.jsxs("span", { children: [o.questions, " questions"] }),
      })),
      (_[10] = o.questions),
      (_[11] = sl))
    : (sl = _[11]);
  let U;
  _[12] === Symbol.for("react.memo_cache_sentinel")
    ? ((U = p.jsx("img", { src: ym, alt: "Avatar Icon", width: 24 })),
      (_[12] = U))
    : (U = _[12]);
  let E;
  _[13] !== o.uploader
    ? ((E = p.jsxs("div", {
        className: "flex gap-2 items-center text-[16px]",
        children: [U, p.jsx("span", { children: o.uploader })],
      })),
      (_[13] = o.uploader),
      (_[14] = E))
    : (E = _[14]);
  let W;
  _[15] === Symbol.for("react.memo_cache_sentinel")
    ? ((W = p.jsxs("button", {
        className:
          " px-4 bg-primary text-white py-2 rounded-xl hover:bg-[#233761] flex items-center justify-center gap-2",
        children: [
          p.jsx("img", { src: om, alt: "Download Icon", width: 35 }),
          p.jsx("span", { children: "Download" }),
        ],
      })),
      (_[15] = W))
    : (W = _[15]);
  let H;
  _[16] !== E
    ? ((H = p.jsxs("div", {
        className: "flex justify-between items-center self-baseline ",
        children: [E, W],
      })),
      (_[16] = E),
      (_[17] = H))
    : (H = _[17]);
  let ll;
  _[18] !== B || _[19] !== k || _[20] !== sl || _[21] !== H
    ? ((ll = p.jsxs("div", { className: "p-5", children: [B, k, sl, H] })),
      (_[18] = B),
      (_[19] = k),
      (_[20] = sl),
      (_[21] = H),
      (_[22] = ll))
    : (ll = _[22]);
  let pl;
  return (
    _[23] !== o.id || _[24] !== j || _[25] !== ll || _[26] !== R
      ? ((pl = p.jsx(p.Fragment, {
          children: p.jsxs(
            "div",
            {
              className:
                "bg-white rounded-2xl shadow-lg  hover:shadow-xl flex flex-col align-bottom border",
              children: [j, R, ll],
            },
            o.id,
          ),
        })),
        (_[23] = o.id),
        (_[24] = j),
        (_[25] = ll),
        (_[26] = R),
        (_[27] = pl))
      : (pl = _[27]),
    pl
  );
}
const hm = "./assets/lung-DcaBpAuy.svg",
  Os = "./assets/heart-CC-znOev.png",
  gm = "./assets/circulation-K28PEplg.png",
  Ms = [
    {
      id: 1,
      title: "Normal Lung Physiology",
      description: "Learn lung mechanics, pressures, volumes, and regulation.",
      uploader: "Andre",
      questions: 344,
      updated: "2025-10-06",
      cover: hm,
      isFeatured: !0,
    },
    {
      id: 2,
      title: "Cardiology (Block C - Week 4)",
      description: "Covers heart anatomy, conduction, and common pathologies.",
      uploader: "Denis",
      questions: 140,
      updated: "2025-11-26",
      cover: Os,
      isFeatured: !0,
    },
    {
      id: 3,
      title: "Regional Circulations",
      description: "Blood flow, perfusion, control mechanisms, and exam notes.",
      uploader: "Andre",
      questions: 100,
      updated: "2025-11-26",
      cover: gm,
      isFeatured: !1,
    },
    {
      id: 4,
      title: "Ischemic Heart Disease",
      description: "Pathophysiology, clinical features, and management of IHD.",
      uploader: "Andre",
      questions: 100,
      updated: "2025-11-26",
      cover: Os,
      isFeatured: !1,
    },
  ];
function rm() {
  const o = ze.c(9);
  let _, j;
  o[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((_ = p.jsxs("h1", {
        className: "text-6xl font-bold text-[#1D2D50] text-center mb-2",
        children: ["Free ", p.jsx("br", {}), " Question Banks"],
      })),
      (j = p.jsx("p", {
        className: "text-center text-lg text-[#6E7C99] mb-10 mt-6",
        children:
          "Download expertly crafted question banks to help you prepare for your board exams.",
      })),
      (o[0] = _),
      (o[1] = j))
    : ((_ = o[0]), (j = o[1]));
  let v;
  o[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((v = p.jsx("input", {
        placeholder: "Search question banks…",
        type: "text",
        className:
          "px-4 py-3 rounded-xl bg-white shadow-sm w-full lg:w-1/2 border border-gray-200",
      })),
      (o[2] = v))
    : (v = o[2]);
  let R;
  o[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((R = p.jsxs("select", {
        className:
          "px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-200",
        children: [
          p.jsx("option", { children: "All Exams" }),
          p.jsx("option", { children: "USMLE Step 1" }),
          p.jsx("option", { children: "MCCQE/LMCC" }),
          p.jsx("option", { children: "General" }),
        ],
      })),
      (o[3] = R))
    : (R = o[3]);
  let B, k;
  o[4] === Symbol.for("react.memo_cache_sentinel")
    ? ((B = p.jsxs("div", {
        className: "flex flex-col lg:flex-row gap-4 mb-12 justify-center",
        children: [
          v,
          R,
          p.jsxs("select", {
            className:
              "px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-200",
            children: [
              p.jsx("option", { children: "All Schools" }),
              p.jsx("option", { children: "McGill University" }),
            ],
          }),
        ],
      })),
      (k = p.jsx("h2", {
        className: "text-3xl font-semibold text-[#1D2D50] mb-6",
        children: "Featured",
      })),
      (o[4] = B),
      (o[5] = k))
    : ((B = o[4]), (k = o[5]));
  let sl, U;
  o[6] === Symbol.for("react.memo_cache_sentinel")
    ? ((sl = p.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16",
        children: Ms.map(bm),
      })),
      (U = p.jsx("h2", {
        className: "text-3xl font-semibold text-[#1D2D50] mb-6",
        children: "All Question Banks",
      })),
      (o[6] = sl),
      (o[7] = U))
    : ((sl = o[6]), (U = o[7]));
  let E;
  return (
    o[8] === Symbol.for("react.memo_cache_sentinel")
      ? ((E = p.jsx("section", {
          className: "bg-[#F4F7FB] py-16",
          children: p.jsxs("div", {
            className: "max-w-7xl mx-auto px-6",
            children: [
              _,
              j,
              B,
              k,
              sl,
              U,
              p.jsx("div", {
                className:
                  "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",
                children: Ms.map(Sm),
              }),
            ],
          }),
        })),
        (o[8] = E))
      : (E = o[8]),
    E
  );
}
function Sm(o) {
  return p.jsx(
    xs,
    {
      id: o.id,
      cover: o.cover,
      alt: o.title,
      title: o.title,
      description: o.description,
      uploader: o.uploader,
      questions: o.questions,
      updated: o.updated,
    },
    o.id,
  );
}
function bm(o) {
  return (
    o.isFeatured &&
    p.jsx(xs, {
      id: o.id,
      cover: o.cover,
      alt: o.title,
      title: o.title,
      description: o.description,
      uploader: o.uploader,
      questions: o.questions,
      updated: o.updated,
    })
  );
}
const zm = "./assets/logo-C-JDTDKe.png",
  Tm = "./assets/logoGray-DfuD1zg1.svg",
  Em =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%20266%20266'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xml:space='preserve'%20xmlns:serif='http://www.serif.com/'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3e%3cpath%20d='M263.002,79.695c0,0%20-2.594,-18.315%20-10.584,-26.357c-10.118,-10.584%20-21.428,-10.636%20-26.617,-11.259c-37.149,-2.698%20-92.925,-2.698%20-92.925,-2.698l-0.104,0c0,0%20-55.775,0%20-92.925,2.698c-5.188,0.623%20-16.499,0.675%20-26.617,11.259c-7.99,8.042%20-10.532,26.357%20-10.532,26.357c0,0%20-2.698,21.532%20-2.698,43.012l0,20.131c0,21.48%202.646,43.012%202.646,43.012c0,0%202.594,18.315%2010.533,26.357c10.117,10.584%2023.4,10.221%2029.315,11.363c21.273,2.023%2090.331,2.646%2090.331,2.646c0,0%2055.827,-0.104%2092.977,-2.75c5.188,-0.623%2016.499,-0.675%2026.617,-11.259c7.99,-8.042%2010.584,-26.357%2010.584,-26.357c0,0%202.646,-21.48%202.646,-43.012l0,-20.131c0,-21.48%20-2.646,-43.012%20-2.646,-43.012Zm-157.625,87.581l0,-74.661l71.756,37.46l-71.756,37.201Z'%20style='fill:%23fff;fill-rule:nonzero;'/%3e%3c/svg%3e",
  Am =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%20266%20266'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xml:space='preserve'%20xmlns:serif='http://www.serif.com/'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3e%3cg%3e%3cpath%20d='M245.984,0l-226.371,0c-10.844,0%20-19.612,8.561%20-19.612,19.145l0,227.305c0,10.584%208.768,19.197%2019.612,19.197l226.371,0c10.843,0%2019.664,-8.613%2019.664,-19.145l0,-227.357c0,-10.584%20-8.821,-19.145%20-19.664,-19.145Zm-167.171,226.371l-39.432,0l0,-126.805l39.432,0l0,126.805Zm-19.716,-144.082c-12.66,0%20-22.881,-10.221%20-22.881,-22.83c0,-12.608%2010.221,-22.829%2022.881,-22.829c12.608,0%2022.829,10.221%2022.829,22.829c0,12.556%20-10.221,22.83%20-22.829,22.83Zm167.275,144.082l-39.38,0l0,-61.639c0,-14.683%20-0.26,-33.621%20-20.494,-33.621c-20.495,0%20-23.608,16.032%20-23.608,32.583l0,62.676l-39.328,0l0,-126.805l37.772,0l0,17.33l0.519,0c5.24,-9.962%2018.108,-20.494%2037.253,-20.494c39.899,0%2047.266,26.253%2047.266,60.393l0,69.576Z'%20style='fill:%23fff;fill-rule:nonzero;'/%3e%3c/g%3e%3c/svg%3e",
  _m =
    "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%20266%20266'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xml:space='preserve'%20xmlns:serif='http://www.serif.com/'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3e%3cg%3e%3cpath%20d='M132.824,23.919c35.489,0%2039.692,0.156%2053.649,0.778c12.971,0.571%2019.975,2.75%2024.645,4.566c6.174,2.387%2010.636,5.292%2015.254,9.91c4.67,4.67%207.523,9.08%209.91,15.254c1.816,4.669%203.995,11.726%204.566,24.645c0.623,14.008%200.778,18.211%200.778,53.649c0,35.489%20-0.156,39.691%20-0.778,53.648c-0.571,12.971%20-2.75,19.976%20-4.566,24.645c-2.387,6.175%20-5.292,10.636%20-9.91,15.254c-4.669,4.669%20-9.08,7.523%20-15.254,9.91c-4.67,1.816%20-11.726,3.995%20-24.645,4.566c-14.009,0.623%20-18.212,0.778%20-53.649,0.778c-35.489,0%20-39.692,-0.156%20-53.648,-0.778c-12.971,-0.571%20-19.976,-2.75%20-24.645,-4.566c-6.174,-2.386%20-10.636,-5.292%20-15.254,-9.91c-4.67,-4.67%20-7.523,-9.08%20-9.91,-15.254c-1.816,-4.669%20-3.995,-11.726%20-4.566,-24.645c-0.623,-14.008%20-0.778,-18.211%20-0.778,-53.648c0,-35.489%200.156,-39.692%200.778,-53.649c0.571,-12.971%202.75,-19.976%204.566,-24.645c2.387,-6.174%205.292,-10.636%209.91,-15.254c4.67,-4.67%209.08,-7.523%2015.254,-9.91c4.67,-1.816%2011.726,-3.995%2024.645,-4.566c13.956,-0.623%2018.159,-0.778%2053.648,-0.778Zm0,-23.919c-36.059,0%20-40.573,0.156%20-54.738,0.778c-14.113,0.623%20-23.815,2.906%20-32.22,6.174c-8.768,3.424%20-16.188,7.938%20-23.555,15.358c-7.419,7.368%20-11.933,14.787%20-15.358,23.504c-3.269,8.457%20-5.552,18.108%20-6.174,32.22c-0.623,14.216%20-0.778,18.73%20-0.778,54.79c0,36.059%200.156,40.573%200.778,54.738c0.623,14.113%202.906,23.815%206.174,32.22c3.424,8.769%207.938,16.188%2015.358,23.556c7.368,7.367%2014.787,11.933%2023.504,15.306c8.457,3.269%2018.108,5.551%2032.22,6.174c14.165,0.623%2018.678,0.778%2054.738,0.778c36.06,0%2040.574,-0.156%2054.738,-0.778c14.113,-0.623%2023.815,-2.906%2032.22,-6.174c8.717,-3.373%2016.136,-7.938%2023.504,-15.306c7.367,-7.368%2011.934,-14.787%2015.306,-23.504c3.269,-8.457%205.552,-18.108%206.175,-32.22c0.623,-14.165%200.778,-18.678%200.778,-54.738c0,-36.059%20-0.156,-40.574%20-0.778,-54.738c-0.623,-14.113%20-2.906,-23.815%20-6.175,-32.22c-3.269,-8.82%20-7.782,-16.24%20-15.202,-23.607c-7.368,-7.368%20-14.787,-11.933%20-23.504,-15.306c-8.457,-3.269%20-18.108,-5.552%20-32.22,-6.174c-14.216,-0.674%20-18.73,-0.83%20-54.79,-0.83Z'%20style='fill:%23fff;fill-rule:nonzero;'/%3e%3cpath%20d='M132.824,64.596c-37.668,0%20-68.228,30.56%20-68.228,68.228c0,37.668%2030.56,68.228%2068.228,68.228c37.668,0%2068.228,-30.56%2068.228,-68.228c0,-37.668%20-30.56,-68.228%20-68.228,-68.228Zm0,112.485c-24.437,0%20-44.257,-19.82%20-44.257,-44.257c0,-24.437%2019.82,-44.257%2044.257,-44.257c24.437,0%2044.257,19.82%2044.257,44.257c0,24.437%20-19.82,44.257%20-44.257,44.257Z'%20style='fill:%23fff;fill-rule:nonzero;'/%3e%3cpath%20d='M219.678,61.898c0,8.82%20-7.16,15.928%20-15.928,15.928c-8.82,0%20-15.928,-7.16%20-15.928,-15.928c0,-8.82%207.16,-15.929%2015.928,-15.929c8.769,0%2015.928,7.16%2015.928,15.929Z'%20style='fill:%23fff;fill-rule:nonzero;'/%3e%3c/g%3e%3c/svg%3e",
  pm = [
    { id: 1, logo: Em, alt: "Youtube Logo" },
    { id: 2, logo: _m, alt: "Instagram Logo" },
    { id: 3, logo: Am, alt: "Linkedin Logo" },
  ];
function Dm() {
  const o = ze.c(5);
  let _;
  o[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((_ = p.jsx("span", {
        className: "text-2xl font-bold",
        children: "Useful Links",
      })),
      (o[0] = _))
    : (_ = o[0]);
  let j;
  o[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((j = p.jsxs("div", {
        className: "flex flex-col items-center justify-center gap-6",
        children: [
          _,
          p.jsxs("ul", {
            className: "flex gap-6 text-xl",
            children: [
              p.jsx("li", { children: "Home" }),
              p.jsx("li", { children: "About" }),
              p.jsx("li", { children: "Features" }),
              p.jsx("li", { children: "SentiaMarket" }),
            ],
          }),
        ],
      })),
      (o[1] = j))
    : (j = o[1]);
  let v;
  o[2] === Symbol.for("react.memo_cache_sentinel")
    ? ((v = p.jsx("div", {
        className: "w-[75%] p-2 self-center mx-auto",
        children: p.jsx("img", {
          src: Tm,
          alt: "Site Logo",
          className: "w-fit",
        }),
      })),
      (o[2] = v))
    : (v = o[2]);
  let R;
  o[3] === Symbol.for("react.memo_cache_sentinel")
    ? ((R = p.jsx("span", {
        className: "text-2xl font-bold",
        children: "Our Socials",
      })),
      (o[3] = R))
    : (R = o[3]);
  let B;
  return (
    o[4] === Symbol.for("react.memo_cache_sentinel")
      ? ((B = p.jsxs("footer", {
          className:
            "bg-[#333333] text-white w-full h-[50vh] grid grid-cols-3 overflow-hidden",
          children: [
            j,
            v,
            p.jsxs("div", {
              className: "flex flex-col justify-center items-center gap-6 ",
              children: [
                R,
                p.jsx("div", {
                  className: "flex gap-10 justify-center items-center",
                  children: pm.map(Om),
                }),
              ],
            }),
          ],
        })),
        (o[4] = B))
      : (B = o[4]),
    B
  );
}
function Om(o) {
  return p.jsx("div", {
    className: "w-14",
    children: p.jsx("img", { src: o.logo, alt: o.alt }),
  });
}
const Mm =
  "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20height='48px'%20viewBox='0%20-960%20960%20960'%20width='48px'%20fill='%23000000ff'%3e%3cpath%20d='M150-240q-12.75%200-21.37-8.68-8.63-8.67-8.63-21.5%200-12.82%208.63-21.32%208.62-8.5%2021.37-8.5h460q12.75%200%2021.38%208.68%208.62%208.67%208.62%2021.5%200%2012.82-8.62%2021.32-8.63%208.5-21.38%208.5H150Zm627-74L630-460q-9-9-9-21t9-21l146-146q9-9%2021.5-9t21.5%209q9%209%209%2021.5t-9%2021.5L695-481l125%20125q9%209%209%2021t-9%2021q-9%209-21.5%209t-21.5-9ZM150-452q-12.75%200-21.37-8.68-8.63-8.67-8.63-21.5%200-12.82%208.63-21.32%208.62-8.5%2021.37-8.5h340q12.75%200%2021.38%208.68%208.62%208.67%208.62%2021.5%200%2012.82-8.62%2021.32-8.63%208.5-21.38%208.5H150Zm0-208q-12.75%200-21.37-8.68-8.63-8.67-8.63-21.5%200-12.82%208.63-21.32%208.62-8.5%2021.37-8.5h460q12.75%200%2021.38%208.68%208.62%208.67%208.62%2021.5%200%2012.82-8.62%2021.32-8.63%208.5-21.38%208.5H150Z'/%3e%3c/svg%3e";
function Um() {
  const o = ze.c(3);
  Us.useState(!1);
  let _;
  o[0] === Symbol.for("react.memo_cache_sentinel")
    ? ((_ = p.jsx("div", {
        className: "lg:w-15 w-12",
        children: p.jsx("img", { src: zm, alt: "Logo for Sentia" }),
      })),
      (o[0] = _))
    : (_ = o[0]);
  let j;
  o[1] === Symbol.for("react.memo_cache_sentinel")
    ? ((j = p.jsx("div", {
        className: "lg:hidden ",
        children: p.jsx("img", { src: Mm, alt: "Menu Icon" }),
      })),
      (o[1] = j))
    : (j = o[1]);
  let v;
  return (
    o[2] === Symbol.for("react.memo_cache_sentinel")
      ? ((v = p.jsx(p.Fragment, {
          children: p.jsxs("div", {
            className:
              "sticky top-0 left-0 bg-white/30 backdrop-blur-sm w-full p-2 px-10 flex justify-between items-center",
            children: [
              _,
              j,
              p.jsxs("ul", {
                className:
                  "lg:flex lg:justify-between lg:gap-20 gap-10 lg:text-xl md:text-lg text-[14px]",
                children: [
                  p.jsx("li", {
                    children: p.jsx("a", { href: "#", children: "Home" }),
                  }),
                  p.jsx("li", {
                    children: p.jsx("a", { href: "#", children: "About" }),
                  }),
                  p.jsx("li", {
                    children: p.jsx("a", { href: "#", children: "Features" }),
                  }),
                  p.jsx("li", {
                    children: p.jsx("a", {
                      href: "#",
                      className: "font-bold text-primary",
                      children: "Sentia Market",
                    }),
                  }),
                ],
              }),
              p.jsx("button", {
                className:
                  "p-2 px-3 bg-primary rounded-xl text-white hidden lg:block",
                children: "Download Sentia",
              }),
            ],
          }),
        })),
        (o[2] = v))
      : (v = o[2]),
    v
  );
}
function xm() {
  const o = ze.c(1);
  let _;
  return (
    o[0] === Symbol.for("react.memo_cache_sentinel")
      ? ((_ = p.jsx(p.Fragment, {
          children: p.jsxs("body", {
            children: [p.jsx(Um, {}), p.jsx(rm, {}), p.jsx(Dm, {})],
          }),
        })),
        (o[0] = _))
      : (_ = o[0]),
    _
  );
}
sm.createRoot(document.getElementById("root")).render(
  p.jsx(Us.StrictMode, { children: p.jsx(xm, {}) }),
);
