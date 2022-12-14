!(() => {
  function e(e) {
    return e && e.__esModule ? e.default : e;
  }
  function t(e, t, r) {
    Object.defineProperty(e, t, { get: r, enumerable: !0 });
  }
  var r = (0,
  ("undefined" != typeof globalThis
    ? globalThis
    : "undefined" != typeof self
    ? self
    : "undefined" != typeof window
    ? window
    : "undefined" != typeof global
    ? global
    : {}
  ).parcelRequire469c)("2y0iw");
  function n(e) {
    return { current: e };
  }
  function o(e, t) {
    var r = void 0;
    return function (...args) {
      for (var n = args.length, o = new Array(n), i = 0; i < n; i++)
        o[i] = args[i];
      r && clearTimeout(r), (r = setTimeout(() => e.apply(void 0, o), t));
    };
  }
  function i(e) {
    return e.reduce((e, t) => e.concat(t), []);
  }
  var a = 0;
  function u() {
    return "autocomplete-".concat(a++);
  }
  function c(e, t) {
    return t.reduce((e, t) => e && e[t], e);
  }
  function l(e) {
    return 0 === e.collections.length
      ? 0
      : e.collections.reduce((e, t) => e + t.items.length, 0);
  }
  var s = () => {},
    p = "1.5.0",
    f = [{ segment: "autocomplete-core", version: p }];
  function y(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function d(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function m(e, t, r) {
    var n = t.initialState;
    return {
      getState() {
        return n;
      },
      dispatch(o, i) {
        var a = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? y(Object(r), !0).forEach((t) => {
                  d(e, t, r[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : y(Object(r)).forEach((t) => {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t)
                  );
                });
          }
          return e;
        })({}, n);
        (n = e(n, { type: o, props: t, payload: i })),
          r({ state: n, prevState: a });
      },
    };
  }
  function v(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function h(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? v(Object(r), !0).forEach((t) => {
            g(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : v(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function g(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function b(e, t, r, n) {
    if (!r) return null;
    if (e < 0 && (null === t || (null !== n && 0 === t))) return r + e;
    var o = (null === t ? -1 : t) + e;
    return o <= -1 || o >= r ? (null === n ? null : 0) : o;
  }
  function O(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function _(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function P(e, t) {
    var r = [];
    return Promise.resolve(e(t)).then(
      (e) => (
        Array.isArray(e),
        Promise.all(
          e
            .filter((e) => Boolean(e))
            .map((e) => {
              if ((e.sourceId, r.includes(e.sourceId)))
                throw new Error(
                  "[Autocomplete] The `sourceId` ".concat(
                    JSON.stringify(e.sourceId),
                    " is not unique."
                  )
                );
              r.push(e.sourceId);
              var t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var r = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? O(Object(r), !0).forEach((t) => {
                        _(e, t, r[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(r)
                      )
                    : O(Object(r)).forEach((t) => {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(r, t)
                        );
                      });
                }
                return e;
              })(
                {
                  getItemInputValue(e) {
                    return e.state.query;
                  },
                  getItemUrl() {},
                  onSelect(e) {
                    (0, e.setIsOpen)(!1);
                  },
                  onActive: s,
                },
                e
              );
              return Promise.resolve(t);
            })
        )
      )
    );
  }
  function S(e) {
    var t = ((e) => {
      var t = e.collections
        .map((e) => e.items.length)
        .reduce((e, t, r) => {
          var n = (e[r - 1] || 0) + t;
          return e.push(n), e;
        }, [])
        .reduce((t, r) => (r <= e.activeItemId ? t + 1 : t), 0);
      return e.collections[t];
    })(e);
    if (!t) return null;
    var r =
        t.items[
          ((e) => {
            for (
              var t = e.state, r = e.collection, n = !1, o = 0, i = 0;
              !1 === n;

            ) {
              var a = t.collections[o];
              if (a === r) {
                n = !0;
                break;
              }
              (i += a.items.length), o++;
            }
            return t.activeItemId - i;
          })({ state: e, collection: t })
        ],
      n = t.source;
    return {
      item: r,
      itemInputValue: n.getItemInputValue({ item: r, state: e }),
      itemUrl: n.getItemUrl({ item: r, state: e }),
      source: n,
    };
  }
  function j(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function w(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? j(Object(r), !0).forEach((t) => {
            I(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : j(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function I(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function A(e) {
    return (
      ((e) => {
        if (Array.isArray(e)) return E(e);
      })(e) ||
      ((e) => {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      ((e, t) => {
        if (!e) return;
        if ("string" == typeof e) return E(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return E(e, t);
      })(e) ||
      (() => {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function E(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function k(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function D(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? k(Object(r), !0).forEach((t) => {
            x(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : k(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function x(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function C(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function N(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? C(Object(r), !0).forEach((t) => {
            F(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : C(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function F(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function R(e) {
    return (
      ((e) => {
        if (Array.isArray(e)) return B(e);
      })(e) ||
      ((e) => {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      ((e, t) => {
        if (!e) return;
        if ("string" == typeof e) return B(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return B(e, t);
      })(e) ||
      (() => {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function B(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function T(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function M(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? T(Object(r), !0).forEach((t) => {
            U(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : T(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function U(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function L(e) {
    return Boolean(e.execute);
  }
  function q(e, t) {
    return (
      (r = e),
      Boolean(null == r ? void 0 : r.execute)
        ? M(
            M({}, e),
            {},
            {
              requests: e.queries.map((r) => ({
                query: r,
                sourceId: t,
                transformResponse: e.transformResponse,
              })),
            }
          )
        : { items: e, sourceId: t }
    );
    var r;
  }
  function W(e) {
    var t = e
      .reduce((e, t) => {
        if (!L(t)) return e.push(t), e;
        var r = t.searchClient,
          n = t.execute,
          o = t.requests,
          i = e.find(
            (e) => L(t) && L(e) && e.searchClient === r && e.execute === n
          );
        if (i) {
          var a;
          (a = i.items).push.apply(a, R(o));
        } else {
          var u = { execute: n, items: o, searchClient: r };
          e.push(u);
        }
        return e;
      }, [])
      .map((e) => {
        if (!L(e)) return Promise.resolve(e);
        var t = e,
          r = t.execute,
          n = t.items;
        return r({ searchClient: t.searchClient, requests: n });
      });
    return Promise.all(t).then((e) => i(e));
  }
  function H(e, t) {
    return t.map((t) => {
      var r = e.filter((e) => e.sourceId === t.sourceId),
        n = r.map((e) => e.items),
        o = r[0].transformResponse,
        i = o
          ? o(
              ((e) => {
                var t = e.map((e) => {
                  var t;
                  return w(
                    w({}, e),
                    {},
                    {
                      hits:
                        null === (t = e.hits) || void 0 === t
                          ? void 0
                          : t.map((t) =>
                              w(
                                w({}, t),
                                {},
                                {
                                  __autocomplete_indexName: e.index,
                                  __autocomplete_queryID: e.queryID,
                                }
                              )
                            ),
                    }
                  );
                });
                return {
                  results: t,
                  hits: t.map((e) => e.hits).filter(Boolean),
                  facetHits: t
                    .map((e) => {
                      var t;
                      return null === (t = e.facetHits) || void 0 === t
                        ? void 0
                        : t.map((e) => ({
                            label: e.value,
                            count: e.count,

                            _highlightResult: {
                              label: { value: e.highlighted },
                            },
                          }));
                    })
                    .filter(Boolean),
                };
              })(n)
            )
          : n;
      return (
        Array.isArray(i),
        i.every(Boolean),
        'The `getItems` function from source "'
          .concat(t.sourceId, '" must return an array of items but returned ')
          .concat(
            JSON.stringify(void 0),
            ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"
          ),
        { source: t, items: i }
      );
    });
  }
  var V = ["event", "nextState", "props", "query", "refresh", "store"];
  function $(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function G(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? $(Object(r), !0).forEach((t) => {
            z(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function z(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function Q(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = ((e, t) => {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++)
        (r = i[n]),
          t.indexOf(r) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
  }
  var J,
    K,
    Y,
    X = null,
    Z =
      ((J = -1),
      (K = -1),
      (Y = void 0),
      (e) => {
        var t = ++J;
        return Promise.resolve(e).then((e) =>
          Y && t < K ? Y : ((K = t), (Y = e), e)
        );
      });
  function ee(e) {
    var t = e.event,
      r = e.nextState,
      n = void 0 === r ? {} : r,
      o = e.props,
      a = e.query,
      u = e.refresh,
      c = e.store,
      l = Q(e, V);
    X && o.environment.clearTimeout(X);
    var s = l.setCollections,
      p = l.setIsOpen,
      f = l.setQuery,
      y = l.setActiveItemId,
      d = l.setStatus;
    if ((f(a), y(o.defaultActiveItemId), !a && !1 === o.openOnFocus)) {
      var m,
        v = c.getState().collections.map((e) => G(G({}, e), {}, { items: [] }));
      return (
        d("idle"),
        s(v),
        p(
          null !== (m = n.isOpen) && void 0 !== m
            ? m
            : o.shouldPanelOpen({ state: c.getState() })
        ),
        Z(v).then(() => Promise.resolve())
      );
    }
    return (
      d("loading"),
      (X = o.environment.setTimeout(() => {
        d("stalled");
      }, o.stallThreshold)),
      Z(
        o
          .getSources(G({ query: a, refresh: u, state: c.getState() }, l))
          .then((e) =>
            Promise.all(
              e.map((e) =>
                Promise.resolve(
                  e.getItems(
                    G({ query: a, refresh: u, state: c.getState() }, l)
                  )
                ).then((t) => q(t, e.sourceId))
              )
            )
              .then(W)
              .then((t) => H(t, e))
              .then((e) =>
                ((e) => {
                  var t = e.collections,
                    r = e.props,
                    n = e.state,
                    o = t.reduce(
                      (e, t) =>
                        N(
                          N({}, e),
                          {},
                          F(
                            {},
                            t.source.sourceId,
                            N(
                              N({}, t.source),
                              {},
                              {
                                getItems() {
                                  return i(t.items);
                                },
                              }
                            )
                          )
                        ),
                      {}
                    );
                  return i(
                    r.reshape({
                      sources: Object.values(o),
                      sourcesBySourceId: o,
                      state: n,
                    })
                  )
                    .filter(Boolean)
                    .map((e) => ({
                      source: e,
                      items: e.getItems(),
                    }));
                })({ collections: e, props: o, state: c.getState() })
              )
          )
      )
        .then((e) => {
          var r;
          d("idle"), s(e);
          var i = o.shouldPanelOpen({ state: c.getState() });
          p(
            null !== (r = n.isOpen) && void 0 !== r
              ? r
              : (o.openOnFocus && !a && i) || i
          );
          var f = S(c.getState());
          if (null !== c.getState().activeItemId && f) {
            var y = f.item,
              m = f.itemInputValue,
              v = f.itemUrl,
              h = f.source;
            h.onActive(
              G(
                {
                  event: t,
                  item: y,
                  itemInputValue: m,
                  itemUrl: v,
                  refresh: u,
                  source: h,
                  state: c.getState(),
                },
                l
              )
            );
          }
        })
        .finally(() => {
          X && o.environment.clearTimeout(X);
        })
    );
  }
  var te = ["event", "props", "refresh", "store"];
  function re(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function ne(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? re(Object(r), !0).forEach((t) => {
            oe(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : re(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function oe(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function ie(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = ((e, t) => {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++)
        (r = i[n]),
          t.indexOf(r) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
  }
  var ae = ["props", "refresh", "store"],
    ue = ["inputElement", "formElement", "panelElement"],
    ce = ["inputElement"],
    le = ["inputElement", "maxLength"],
    se = ["item", "source"];
  function pe(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function fe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? pe(Object(r), !0).forEach((t) => {
            ye(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : pe(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function ye(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function de(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = ((e, t) => {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++)
        (r = i[n]),
          t.indexOf(r) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
  }
  function me(e) {
    var t = e.props,
      r = e.refresh,
      n = e.store,
      o = de(e, ae);
    return {
      getEnvironmentProps(e) {
        var r = e.inputElement,
          o = e.formElement,
          i = e.panelElement;
        return fe(
          {
            onTouchStart(e) {
              !1 !== n.getState().isOpen &&
                e.target !== r &&
                !1 ===
                  [o, i].some((t) => {
                    return (r = t), (n = e.target), r === n || r.contains(n);
                    var r, n;
                  }) &&
                n.dispatch("blur", null);
            },
            onTouchMove(e) {
              !1 !== n.getState().isOpen &&
                r === t.environment.document.activeElement &&
                e.target !== r &&
                r.blur();
            },
          },
          de(e, ue)
        );
      },
      getRootProps(e) {
        return fe(
          {
            role: "combobox",
            "aria-expanded": n.getState().isOpen,
            "aria-haspopup": "listbox",
            "aria-owns": n.getState().isOpen
              ? "".concat(t.id, "-list")
              : void 0,
            "aria-labelledby": "".concat(t.id, "-label"),
          },
          e
        );
      },
      getFormProps(e) {
        e.inputElement;
        return fe(
          {
            action: "",
            noValidate: !0,
            role: "search",
            onSubmit(i) {
              var a;
              i.preventDefault(),
                t.onSubmit(
                  fe({ event: i, refresh: r, state: n.getState() }, o)
                ),
                n.dispatch("submit", null),
                null === (a = e.inputElement) || void 0 === a || a.blur();
            },
            onReset(i) {
              var a;
              i.preventDefault(),
                t.onReset(fe({ event: i, refresh: r, state: n.getState() }, o)),
                n.dispatch("reset", null),
                null === (a = e.inputElement) || void 0 === a || a.focus();
            },
          },
          de(e, ce)
        );
      },
      getLabelProps(e) {
        return fe(
          { htmlFor: "".concat(t.id, "-input"), id: "".concat(t.id, "-label") },
          e
        );
      },
      getInputProps(e) {
        function i(e) {
          (t.openOnFocus || Boolean(n.getState().query)) &&
            ee(
              fe(
                {
                  event: e,
                  props: t,
                  query: n.getState().completion || n.getState().query,
                  refresh: r,
                  store: n,
                },
                o
              )
            ),
            n.dispatch("focus", null);
        }
        var a = "ontouchstart" in t.environment,
          u = e || {},
          c = (u.inputElement, u.maxLength),
          l = void 0 === c ? 512 : c,
          s = de(u, le),
          p = S(n.getState());
        return fe(
          {
            "aria-autocomplete": "both",
            "aria-activedescendant":
              n.getState().isOpen && null !== n.getState().activeItemId
                ? "".concat(t.id, "-item-").concat(n.getState().activeItemId)
                : void 0,
            "aria-controls": n.getState().isOpen
              ? "".concat(t.id, "-list")
              : void 0,
            "aria-labelledby": "".concat(t.id, "-label"),
            value: n.getState().completion || n.getState().query,
            id: "".concat(t.id, "-input"),
            autoComplete: "off",
            autoCorrect: "off",
            autoCapitalize: "off",
            enterKeyHint: null != p && p.itemUrl ? "go" : "search",
            spellCheck: "false",
            autoFocus: t.autoFocus,
            placeholder: t.placeholder,
            maxLength: l,
            type: "search",
            onChange(e) {
              ee(
                fe(
                  {
                    event: e,
                    props: t,
                    query: e.currentTarget.value.slice(0, l),
                    refresh: r,
                    store: n,
                  },
                  o
                )
              );
            },
            onKeyDown(e) {
              !((e) => {
                var t = e.event,
                  r = e.props,
                  n = e.refresh,
                  o = e.store,
                  i = ie(e, te);
                if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                  var a = () => {
                      var e = r.environment.document.getElementById(
                        ""
                          .concat(r.id, "-item-")
                          .concat(o.getState().activeItemId)
                      );
                      e &&
                        (e.scrollIntoViewIfNeeded
                          ? e.scrollIntoViewIfNeeded(!1)
                          : e.scrollIntoView(!1));
                    },
                    u = () => {
                      var e = S(o.getState());
                      if (null !== o.getState().activeItemId && e) {
                        var r = e.item,
                          a = e.itemInputValue,
                          u = e.itemUrl,
                          c = e.source;
                        c.onActive(
                          ne(
                            {
                              event: t,
                              item: r,
                              itemInputValue: a,
                              itemUrl: u,
                              refresh: n,
                              source: c,
                              state: o.getState(),
                            },
                            i
                          )
                        );
                      }
                    };
                  t.preventDefault(),
                    !1 === o.getState().isOpen &&
                    (r.openOnFocus || Boolean(o.getState().query))
                      ? ee(
                          ne(
                            {
                              event: t,
                              props: r,
                              query: o.getState().query,
                              refresh: n,
                              store: o,
                            },
                            i
                          )
                        ).then(() => {
                          o.dispatch(t.key, {
                            nextActiveItemId: r.defaultActiveItemId,
                          }),
                            u(),
                            setTimeout(a, 0);
                        })
                      : (o.dispatch(t.key, {}), u(), a());
                } else if ("Escape" === t.key)
                  t.preventDefault(), o.dispatch(t.key, null);
                else if ("Enter" === t.key) {
                  if (
                    null === o.getState().activeItemId ||
                    o.getState().collections.every((e) => 0 === e.items.length)
                  )
                    return;
                  t.preventDefault();
                  var c = S(o.getState()),
                    l = c.item,
                    s = c.itemInputValue,
                    p = c.itemUrl,
                    f = c.source;
                  if (t.metaKey || t.ctrlKey)
                    void 0 !== p &&
                      (f.onSelect(
                        ne(
                          {
                            event: t,
                            item: l,
                            itemInputValue: s,
                            itemUrl: p,
                            refresh: n,
                            source: f,
                            state: o.getState(),
                          },
                          i
                        )
                      ),
                      r.navigator.navigateNewTab({
                        itemUrl: p,
                        item: l,
                        state: o.getState(),
                      }));
                  else if (t.shiftKey)
                    void 0 !== p &&
                      (f.onSelect(
                        ne(
                          {
                            event: t,
                            item: l,
                            itemInputValue: s,
                            itemUrl: p,
                            refresh: n,
                            source: f,
                            state: o.getState(),
                          },
                          i
                        )
                      ),
                      r.navigator.navigateNewWindow({
                        itemUrl: p,
                        item: l,
                        state: o.getState(),
                      }));
                  else if (t.altKey);
                  else {
                    if (void 0 !== p)
                      return (
                        f.onSelect(
                          ne(
                            {
                              event: t,
                              item: l,
                              itemInputValue: s,
                              itemUrl: p,
                              refresh: n,
                              source: f,
                              state: o.getState(),
                            },
                            i
                          )
                        ),
                        void r.navigator.navigate({
                          itemUrl: p,
                          item: l,
                          state: o.getState(),
                        })
                      );
                    ee(
                      ne(
                        {
                          event: t,
                          nextState: { isOpen: !1 },
                          props: r,
                          query: s,
                          refresh: n,
                          store: o,
                        },
                        i
                      )
                    ).then(() => {
                      f.onSelect(
                        ne(
                          {
                            event: t,
                            item: l,
                            itemInputValue: s,
                            itemUrl: p,
                            refresh: n,
                            source: f,
                            state: o.getState(),
                          },
                          i
                        )
                      );
                    });
                  }
                }
              })(fe({ event: e, props: t, refresh: r, store: n }, o));
            },
            onFocus: i,
            onBlur() {
              a || n.dispatch("blur", null);
            },
            onClick(r) {
              e.inputElement !== t.environment.document.activeElement ||
                n.getState().isOpen ||
                i(r);
            },
          },
          s
        );
      },
      getPanelProps(e) {
        return fe(
          {
            onMouseDown(e) {
              e.preventDefault();
            },
            onMouseLeave() {
              n.dispatch("mouseleave", null);
            },
          },
          e
        );
      },
      getListProps(e) {
        return fe(
          {
            role: "listbox",
            "aria-labelledby": "".concat(t.id, "-label"),
            id: "".concat(t.id, "-list"),
          },
          e
        );
      },
      getItemProps(e) {
        var i = e.item,
          a = e.source,
          u = de(e, se);
        return fe(
          {
            id: "".concat(t.id, "-item-").concat(i.__autocomplete_id),
            role: "option",
            "aria-selected": n.getState().activeItemId === i.__autocomplete_id,
            onMouseMove(e) {
              if (i.__autocomplete_id !== n.getState().activeItemId) {
                n.dispatch("mousemove", i.__autocomplete_id);
                var t = S(n.getState());
                if (null !== n.getState().activeItemId && t) {
                  var a = t.item,
                    u = t.itemInputValue,
                    c = t.itemUrl,
                    l = t.source;
                  l.onActive(
                    fe(
                      {
                        event: e,
                        item: a,
                        itemInputValue: u,
                        itemUrl: c,
                        refresh: r,
                        source: l,
                        state: n.getState(),
                      },
                      o
                    )
                  );
                }
              }
            },
            onMouseDown(e) {
              e.preventDefault();
            },
            onClick(e) {
              var u = a.getItemInputValue({ item: i, state: n.getState() }),
                c = a.getItemUrl({ item: i, state: n.getState() });
              (c
                ? Promise.resolve()
                : ee(
                    fe(
                      {
                        event: e,
                        nextState: { isOpen: !1 },
                        props: t,
                        query: u,
                        refresh: r,
                        store: n,
                      },
                      o
                    )
                  )
              ).then(() => {
                a.onSelect(
                  fe(
                    {
                      event: e,
                      item: i,
                      itemInputValue: u,
                      itemUrl: c,
                      refresh: r,
                      source: a,
                      state: n.getState(),
                    },
                    o
                  )
                );
              });
            },
          },
          u
        );
      },
    };
  }
  function ve(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function he(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? ve(Object(r), !0).forEach((t) => {
            ge(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : ve(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function ge(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function be(e) {
    var t,
      r,
      n,
      o,
      i = e.plugins,
      a = e.options,
      u =
        null ===
          (t = ((null === (r = a.__autocomplete_metadata) || void 0 === r
            ? void 0
            : r.userAgents) || [])[0]) || void 0 === t
          ? void 0
          : t.segment,
      c = u
        ? ge(
            {},
            u,
            Object.keys(
              (null === (n = a.__autocomplete_metadata) || void 0 === n
                ? void 0
                : n.options) || {}
            )
          )
        : {};
    return {
      plugins: i.map((e) => ({
        name: e.name,
        options: Object.keys(e.__autocomplete_pluginOptions || []),
      })),
      options: he({ "autocomplete-core": Object.keys(a) }, c),
      ua: f.concat(
        (null === (o = a.__autocomplete_metadata) || void 0 === o
          ? void 0
          : o.userAgents) || []
      ),
    };
  }
  function Oe(e) {
    var t,
      r = e.state;
    return !1 === r.isOpen || null === r.activeItemId
      ? null
      : (null === (t = S(r)) || void 0 === t ? void 0 : t.itemInputValue) ||
          null;
  }
  function _e(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function Pe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? _e(Object(r), !0).forEach((t) => {
            Se(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : _e(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function Se(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  var je = (e, t) => {
    switch (t.type) {
      case "setActiveItemId":
      case "mousemove":
        return Pe(Pe({}, e), {}, { activeItemId: t.payload });
      case "setQuery":
        return Pe(Pe({}, e), {}, { query: t.payload, completion: null });
      case "setCollections":
        return Pe(Pe({}, e), {}, { collections: t.payload });
      case "setIsOpen":
        return Pe(Pe({}, e), {}, { isOpen: t.payload });
      case "setStatus":
        return Pe(Pe({}, e), {}, { status: t.payload });
      case "setContext":
        return Pe(Pe({}, e), {}, { context: Pe(Pe({}, e.context), t.payload) });
      case "ArrowDown":
        var r = Pe(
          Pe({}, e),
          {},
          {
            activeItemId: t.payload.hasOwnProperty("nextActiveItemId")
              ? t.payload.nextActiveItemId
              : b(1, e.activeItemId, l(e), t.props.defaultActiveItemId),
          }
        );
        return Pe(Pe({}, r), {}, { completion: Oe({ state: r }) });
      case "ArrowUp":
        var n = Pe(
          Pe({}, e),
          {},
          {
            activeItemId: b(
              -1,
              e.activeItemId,
              l(e),
              t.props.defaultActiveItemId
            ),
          }
        );
        return Pe(Pe({}, n), {}, { completion: Oe({ state: n }) });
      case "Escape":
        return e.isOpen
          ? Pe(
              Pe({}, e),
              {},
              { activeItemId: null, isOpen: !1, completion: null }
            )
          : Pe(
              Pe({}, e),
              {},
              { activeItemId: null, query: "", status: "idle", collections: [] }
            );
      case "submit":
        return Pe(
          Pe({}, e),
          {},
          { activeItemId: null, isOpen: !1, status: "idle" }
        );
      case "reset":
        return Pe(
          Pe({}, e),
          {},
          {
            activeItemId:
              !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null,
            status: "idle",
            query: "",
          }
        );
      case "focus":
        return Pe(
          Pe({}, e),
          {},
          {
            activeItemId: t.props.defaultActiveItemId,
            isOpen:
              (t.props.openOnFocus || Boolean(e.query)) &&
              t.props.shouldPanelOpen({ state: e }),
          }
        );
      case "blur":
        return t.props.debug
          ? e
          : Pe(Pe({}, e), {}, { isOpen: !1, activeItemId: null });
      case "mouseleave":
        return Pe(Pe({}, e), {}, { activeItemId: t.props.defaultActiveItemId });
      default:
        return (
          "The reducer action ".concat(
            JSON.stringify(t.type),
            " is not supported."
          ),
          e
        );
    }
  };
  function we(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function Ie(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? we(Object(r), !0).forEach((t) => {
            Ae(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : we(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function Ae(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function Ee(e) {
    var t = [],
      r = ((e, t) => {
        var r,
          n = "undefined" != typeof window ? window : {},
          o = e.plugins || [];
        return D(
          D(
            {
              debug: !1,
              openOnFocus: !1,
              placeholder: "",
              autoFocus: !1,
              defaultActiveItemId: null,
              stallThreshold: 300,
              environment: n,
              shouldPanelOpen(e) {
                return l(e.state) > 0;
              },
              reshape(e) {
                return e.sources;
              },
            },
            e
          ),
          {},
          {
            id: null !== (r = e.id) && void 0 !== r ? r : u(),
            plugins: o,
            initialState: D(
              {
                activeItemId: null,
                query: "",
                completion: null,
                collections: [],
                isOpen: !1,
                status: "idle",
                context: {},
              },
              e.initialState
            ),
            onStateChange(t) {
              var r;
              null === (r = e.onStateChange) || void 0 === r || r.call(e, t),
                o.forEach((e) => {
                  var r;
                  return null === (r = e.onStateChange) || void 0 === r
                    ? void 0
                    : r.call(e, t);
                });
            },
            onSubmit(t) {
              var r;
              null === (r = e.onSubmit) || void 0 === r || r.call(e, t),
                o.forEach((e) => {
                  var r;
                  return null === (r = e.onSubmit) || void 0 === r
                    ? void 0
                    : r.call(e, t);
                });
            },
            onReset(t) {
              var r;
              null === (r = e.onReset) || void 0 === r || r.call(e, t),
                o.forEach((e) => {
                  var r;
                  return null === (r = e.onReset) || void 0 === r
                    ? void 0
                    : r.call(e, t);
                });
            },
            getSources(r) {
              return Promise.all(
                []
                  .concat(A(o.map((e) => e.getSources)), [e.getSources])
                  .filter(Boolean)
                  .map((e) => P(e, r))
              )
                .then((e) => i(e))
                .then((e) =>
                  e.map((e) =>
                    D(
                      D({}, e),
                      {},
                      {
                        onSelect(r) {
                          e.onSelect(r),
                            t.forEach((e) => {
                              var t;
                              return null === (t = e.onSelect) || void 0 === t
                                ? void 0
                                : t.call(e, r);
                            });
                        },
                        onActive(r) {
                          e.onActive(r),
                            t.forEach((e) => {
                              var t;
                              return null === (t = e.onActive) || void 0 === t
                                ? void 0
                                : t.call(e, r);
                            });
                        },
                      }
                    )
                  )
                );
            },
            navigator: D(
              {
                navigate(e) {
                  var t = e.itemUrl;
                  n.location.assign(t);
                },
                navigateNewTab(e) {
                  var t = e.itemUrl,
                    r = n.open(t, "_blank", "noopener");
                  null == r || r.focus();
                },
                navigateNewWindow(e) {
                  var t = e.itemUrl;
                  n.open(t, "_blank", "noopener");
                },
              },
              e.navigator
            ),
          }
        );
      })(e, t),
      n = m(je, r, (e) => {
        var t = e.prevState,
          n = e.state;
        r.onStateChange(Ie({ prevState: t, state: n, refresh: c }, o));
      }),
      o = ((e) => {
        var t = e.store;
        return {
          setActiveItemId(e) {
            t.dispatch("setActiveItemId", e);
          },
          setQuery(e) {
            t.dispatch("setQuery", e);
          },
          setCollections(e) {
            var r = 0,
              n = e.map((e) =>
                h(
                  h({}, e),
                  {},
                  {
                    items: i(e.items).map((e) =>
                      h(h({}, e), {}, { __autocomplete_id: r++ })
                    ),
                  }
                )
              );
            t.dispatch("setCollections", n);
          },
          setIsOpen(e) {
            t.dispatch("setIsOpen", e);
          },
          setStatus(e) {
            t.dispatch("setStatus", e);
          },
          setContext(e) {
            t.dispatch("setContext", e);
          },
        };
      })({ store: n }),
      a = me(Ie({ props: r, refresh: c, store: n }, o));
    function c() {
      return ee(
        Ie(
          {
            event: new Event("input"),
            nextState: { isOpen: n.getState().isOpen },
            props: r,
            query: n.getState().query,
            refresh: c,
            store: n,
          },
          o
        )
      );
    }
    return (
      r.plugins.forEach((e) => {
        var r;
        return null === (r = e.subscribe) || void 0 === r
          ? void 0
          : r.call(
              e,
              Ie(
                Ie({}, o),
                {},
                {
                  refresh: c,
                  onSelect(e) {
                    t.push({ onSelect: e });
                  },
                  onActive(e) {
                    t.push({ onActive: e });
                  },
                }
              )
            );
      }),
      ((e) => {
        var t,
          r = e.metadata,
          n = e.environment;
        if (
          null === (t = n.navigator) || void 0 === t
            ? void 0
            : t.userAgent.includes("Algolia Crawler")
        ) {
          var o = n.document.createElement("meta"),
            i = n.document.querySelector("head");
          (o.name = "algolia:metadata"),
            setTimeout(() => {
              (o.content = JSON.stringify(r)), i.appendChild(o);
            }, 0);
        }
      })({
        metadata: be({ plugins: r.plugins, options: e }),
        environment: r.environment,
      }),
      Ie(Ie({ refresh: c }, a), o)
    );
  }
  var ke = (e) => {
    var t = e.environment,
      r = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    r.setAttribute("class", "aa-ClearIcon"),
      r.setAttribute("viewBox", "0 0 24 24"),
      r.setAttribute("width", "18"),
      r.setAttribute("height", "18"),
      r.setAttribute("fill", "currentColor");
    var n = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (
      n.setAttribute(
        "d",
        "M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
      ),
      r.appendChild(n),
      r
    );
  };
  function De(e, t) {
    if ("string" == typeof t) {
      var r = e.document.querySelector(t);
      return (
        "The element ".concat(JSON.stringify(t), " is not in the document."), r
      );
    }
    return t;
  }
  function xe(...args) {
    for (var e = args.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = args[r];
    return t.reduce(
      (e, t) => (
        Object.keys(t).forEach((r) => {
          var n = e[r],
            o = t[r];
          n !== o && (e[r] = [n, o].filter(Boolean).join(" "));
        }),
        e
      ),
      {}
    );
  }
  function Ce(e) {
    return (
      ((e) => {
        if (Array.isArray(e)) return Ne(e);
      })(e) ||
      ((e) => {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      ((e, t) => {
        if (!e) return;
        if ("string" == typeof e) return Ne(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return Ne(e, t);
      })(e) ||
      (() => {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Ne(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Fe(e) {
    return (
      (Fe =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? (e) => typeof e
          : (e) =>
              e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
                ? "symbol"
                : typeof e),
      Fe(e)
    );
  }
  var Re = (e) =>
    e &&
    "object" === Fe(e) &&
    "[object Object]" === Object.prototype.toString.call(e);
  function Be(...args) {
    for (var e = args.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = args[r];
    return t.reduce(
      (e, t) => (
        Object.keys(t).forEach((r) => {
          var n = e[r],
            o = t[r];
          Array.isArray(n) && Array.isArray(o)
            ? (e[r] = n.concat(...Ce(o)))
            : Re(n) && Re(o)
            ? (e[r] = Be(n, o))
            : (e[r] = o);
        }),
        e
      ),
      {}
    );
  }
  function Te(e, t, r) {
    e[t] = null === r ? "" : "number" != typeof r ? r : r + "px";
  }
  function Me(e) {
    this._listeners[e.type](e);
  }
  function Ue(e, t, r) {
    var n,
      o,
      i = e[t];
    if ("style" === t)
      if ("string" == typeof r) e.style = r;
      else if (null === r) e.style = "";
      else for (t in r) (i && r[t] === i[t]) || Te(e.style, t, r[t]);
    else
      "o" === t[0] && "n" === t[1]
        ? ((n = t !== (t = t.replace(/Capture$/, ""))),
          (o = t.toLowerCase()) in e && (t = o),
          (t = t.slice(2)),
          e._listeners || (e._listeners = {}),
          (e._listeners[t] = r),
          r
            ? i || e.addEventListener(t, Me, n)
            : e.removeEventListener(t, Me, n))
        : "list" !== t &&
          "tagName" !== t &&
          "form" !== t &&
          "type" !== t &&
          "size" !== t &&
          "download" !== t &&
          "href" !== t &&
          t in e
        ? (e[t] = null == r ? "" : r)
        : "function" != typeof r &&
          "dangerouslySetInnerHTML" !== t &&
          (null == r || (!1 === r && !/^ar/.test(t))
            ? e.removeAttribute(t)
            : e.setAttribute(t, r));
  }
  function Le(e) {
    return "onChange" === e ? "onInput" : e;
  }
  function qe(e, t) {
    for (var r in t) Ue(e, Le(r), t[r]);
  }
  function We(e, t) {
    for (var r in t) ("o" === r[0] && "n" === r[1]) || Ue(e, Le(r), t[r]);
  }
  var He = ["children"];
  function Ve(e) {
    return (
      ((e) => {
        if (Array.isArray(e)) return $e(e);
      })(e) ||
      ((e) => {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      ((e, t) => {
        if (!e) return;
        if ("string" == typeof e) return $e(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return $e(e, t);
      })(e) ||
      (() => {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function $e(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Ge(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = ((e, t) => {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++)
        (r = i[n]),
          t.indexOf(r) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
  }
  function ze(e) {
    return (t, r) => {
      var n = r.children,
        o = void 0 === n ? [] : n,
        i = Ge(r, He),
        a = e.document.createElement(t);
      return qe(a, i), a.append(...Ve(o)), a;
    };
  }
  var Qe = [
    "autocompleteScopeApi",
    "environment",
    "classNames",
    "getInputProps",
    "getInputPropsCore",
    "onDetachedEscape",
    "state",
  ];
  function Je(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function Ke(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Je(Object(r), !0).forEach((t) => {
            Ye(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Je(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function Ye(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function Xe(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = ((e, t) => {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++)
        (r = i[n]),
          t.indexOf(r) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
  }
  var Ze = (e) => {
      var t = e.environment.document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      return (
        t.setAttribute("class", "aa-LoadingIcon"),
        t.setAttribute("viewBox", "0 0 100 100"),
        t.setAttribute("width", "20"),
        t.setAttribute("height", "20"),
        (t.innerHTML =
          '<circle\n  cx="50"\n  cy="50"\n  fill="none"\n  r="35"\n  stroke="currentColor"\n  stroke-dasharray="164.93361431346415 56.97787143782138"\n  stroke-width="6"\n>\n  <animateTransform\n    attributeName="transform"\n    type="rotate"\n    repeatCount="indefinite"\n    dur="1s"\n    values="0 50 50;90 50 50;180 50 50;360 50 50"\n    keyTimes="0;0.40;0.65;1"\n  />\n</circle>'),
        t
      );
    },
    et = (e) => {
      var t = e.environment,
        r = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
      r.setAttribute("class", "aa-SubmitIcon"),
        r.setAttribute("viewBox", "0 0 24 24"),
        r.setAttribute("width", "20"),
        r.setAttribute("height", "20"),
        r.setAttribute("fill", "currentColor");
      var n = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
      return (
        n.setAttribute(
          "d",
          "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
        ),
        r.appendChild(n),
        r
      );
    };
  function tt(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function rt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? tt(Object(r), !0).forEach((t) => {
            nt(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : tt(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function nt(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function ot(e) {
    var t = e.autocomplete,
      r = e.autocompleteScopeApi,
      n = e.classNames,
      o = e.environment,
      i = e.isDetached,
      a = e.placeholder,
      u = void 0 === a ? "Search" : a,
      c = e.propGetters,
      l = e.setIsModalOpen,
      s = e.state,
      p = e.translations,
      f = ze(o),
      y = c.getRootProps(rt({ state: s, props: t.getRootProps({}) }, r)),
      d = f("div", rt({ class: n.root }, y)),
      m = f("div", {
        class: n.detachedContainer,
        onMouseDown(e) {
          e.stopPropagation();
        },
      }),
      v = f("div", {
        class: n.detachedOverlay,
        children: [m],
        onMouseDown() {
          l(!1), t.setIsOpen(!1);
        },
      }),
      h = c.getLabelProps(rt({ state: s, props: t.getLabelProps({}) }, r)),
      g = f("button", {
        class: n.submitButton,
        type: "submit",
        title: p.submitButtonTitle,
        children: [et({ environment: o })],
      }),
      b = f("label", rt({ class: n.label, children: [g] }, h)),
      O = f("button", {
        class: n.clearButton,
        type: "reset",
        title: p.clearButtonTitle,
        children: [ke({ environment: o })],
      }),
      _ = f("div", {
        class: n.loadingIndicator,
        children: [Ze({ environment: o })],
      }),
      P = ((e) => {
        var t = e.autocompleteScopeApi,
          r = e.environment,
          n = (e.classNames, e.getInputProps),
          o = e.getInputPropsCore,
          i = e.onDetachedEscape,
          a = e.state,
          u = Xe(e, Qe),
          c = ze(r)("input", u),
          l = n(
            Ke({ state: a, props: o({ inputElement: c }), inputElement: c }, t)
          );
        return (
          qe(
            c,
            Ke(
              Ke({}, l),
              {},
              {
                onKeyDown(e) {
                  if (i && "Escape" === e.key)
                    return e.preventDefault(), void i();
                  l.onKeyDown(e);
                },
              }
            )
          ),
          c
        );
      })({
        class: n.input,
        environment: o,
        state: s,
        getInputProps: c.getInputProps,
        getInputPropsCore: t.getInputProps,
        autocompleteScopeApi: r,
        onDetachedEscape: i
          ? () => {
              t.setIsOpen(!1), l(!1);
            }
          : void 0,
      }),
      S = f("div", { class: n.inputWrapperPrefix, children: [b, _] }),
      j = f("div", { class: n.inputWrapperSuffix, children: [O] }),
      w = f("div", { class: n.inputWrapper, children: [P] }),
      I = c.getFormProps(
        rt({ state: s, props: t.getFormProps({ inputElement: P }) }, r)
      ),
      A = f("form", rt({ class: n.form, children: [S, w, j] }, I)),
      E = c.getPanelProps(rt({ state: s, props: t.getPanelProps({}) }, r)),
      k = f("div", rt({ class: n.panel }, E));
    if (i) {
      var D = f("div", {
          class: n.detachedSearchButtonIcon,
          children: [et({ environment: o })],
        }),
        x = f("div", {
          class: n.detachedSearchButtonPlaceholder,
          textContent: u,
        }),
        C = f("button", {
          class: n.detachedSearchButton,
          onClick(e) {
            e.preventDefault(), l(!0);
          },
          children: [D, x],
        }),
        N = f("button", {
          class: n.detachedCancelButton,
          textContent: p.detachedCancelButtonText,
          onClick() {
            t.setIsOpen(!1), l(!1);
          },
        }),
        F = f("div", { class: n.detachedFormContainer, children: [A, N] });
      m.appendChild(F), d.appendChild(C);
    } else d.appendChild(A);
    return {
      detachedContainer: m,
      detachedOverlay: v,
      inputWrapper: w,
      input: P,
      root: d,
      form: A,
      label: b,
      submitButton: g,
      clearButton: O,
      loadingIndicator: _,
      panel: k,
    };
  }
  var it,
    at,
    ut,
    ct,
    lt,
    st = {},
    pt = [],
    ft = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function yt(e, t) {
    for (var r in t) e[r] = t[r];
    return e;
  }
  function dt(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function mt(e, t, r) {
    var n,
      o,
      i,
      a = {};
    for (i in t)
      "key" == i ? (n = t[i]) : "ref" == i ? (o = t[i]) : (a[i] = t[i]);
    if (
      (arguments.length > 2 &&
        (a.children = arguments.length > 3 ? it.call(arguments, 2) : r),
      "function" == typeof e && null != e.defaultProps)
    )
      for (i in e.defaultProps) void 0 === a[i] && (a[i] = e.defaultProps[i]);
    return vt(e, a, n, o, null);
  }
  function vt(e, t, r, n, o) {
    var i = {
      type: e,
      props: t,
      key: r,
      ref: n,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++ut : o,
    };
    return null == o && null != at.vnode && at.vnode(i), i;
  }
  function ht(e) {
    return e.children;
  }
  function gt(e, t) {
    (this.props = e), (this.context = t);
  }
  function bt(e, t) {
    if (null == t) return e.__ ? bt(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var r; t < e.__k.length; t++)
      if (null != (r = e.__k[t]) && null != r.__e) return r.__e;
    return "function" == typeof e.type ? bt(e) : null;
  }
  function Ot(e) {
    var t, r;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (r = e.__k[t]) && null != r.__e) {
          e.__e = e.__c.base = r.__e;
          break;
        }
      return Ot(e);
    }
  }
  function _t(e) {
    ((!e.__d && (e.__d = !0) && ct.push(e) && !Pt.__r++) ||
      lt !== at.debounceRendering) &&
      ((lt = at.debounceRendering) || setTimeout)(Pt);
  }
  function Pt() {
    for (var e; (Pt.__r = ct.length); )
      (e = ct.sort((e, t) => e.__v.__b - t.__v.__b)),
        (ct = []),
        e.some((e) => {
          var t, r, n, o, i, a;
          e.__d &&
            ((i = (o = (t = e).__v).__e),
            (a = t.__P) &&
              ((r = []),
              ((n = yt({}, o)).__v = o.__v + 1),
              Dt(
                a,
                o,
                n,
                t.__n,
                void 0 !== a.ownerSVGElement,
                null != o.__h ? [i] : null,
                r,
                null == i ? bt(o) : i,
                o.__h
              ),
              xt(r, o),
              o.__e != i && Ot(o)));
        });
  }
  function St(e, t, r, n, o, i, a, u, c, l) {
    var s,
      p,
      f,
      y,
      d,
      m,
      v,
      h = (n && n.__k) || pt,
      g = h.length;
    for (r.__k = [], s = 0; s < t.length; s++)
      if (
        null !=
        (y = r.__k[s] =
          null == (y = t[s]) || "boolean" == typeof y
            ? null
            : "string" == typeof y ||
              "number" == typeof y ||
              "bigint" == typeof y
            ? vt(null, y, null, null, y)
            : Array.isArray(y)
            ? vt(ht, { children: y }, null, null, null)
            : y.__b > 0
            ? vt(y.type, y.props, y.key, null, y.__v)
            : y)
      ) {
        if (
          ((y.__ = r),
          (y.__b = r.__b + 1),
          null === (f = h[s]) || (f && y.key == f.key && y.type === f.type))
        )
          h[s] = void 0;
        else
          for (p = 0; p < g; p++) {
            if ((f = h[p]) && y.key == f.key && y.type === f.type) {
              h[p] = void 0;
              break;
            }
            f = null;
          }
        Dt(e, y, (f = f || st), o, i, a, u, c, l),
          (d = y.__e),
          (p = y.ref) &&
            f.ref != p &&
            (v || (v = []),
            f.ref && v.push(f.ref, null, y),
            v.push(p, y.__c || d, y)),
          null != d
            ? (null == m && (m = d),
              "function" == typeof y.type && y.__k === f.__k
                ? (y.__d = c = jt(y, c, e))
                : (c = wt(e, y, f, h, d, c)),
              "function" == typeof r.type && (r.__d = c))
            : c && f.__e == c && c.parentNode != e && (c = bt(f));
      }
    for (r.__e = m, s = g; s--; )
      null != h[s] &&
        ("function" == typeof r.type &&
          null != h[s].__e &&
          h[s].__e == r.__d &&
          (r.__d = bt(n, s + 1)),
        Nt(h[s], h[s]));
    if (v) for (s = 0; s < v.length; s++) Ct(v[s], v[++s], v[++s]);
  }
  function jt(e, t, r) {
    for (var n, o = e.__k, i = 0; o && i < o.length; i++)
      (n = o[i]) &&
        ((n.__ = e),
        (t =
          "function" == typeof n.type
            ? jt(n, t, r)
            : wt(r, n, n, o, n.__e, t)));
    return t;
  }
  function wt(e, t, r, n, o, i) {
    var a, u, c;
    if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0);
    else if (null == r || o != i || null == o.parentNode)
      e: if (null == i || i.parentNode !== e) e.appendChild(o), (a = null);
      else {
        for (u = i, c = 0; (u = u.nextSibling) && c < n.length; c += 2)
          if (u == o) break e;
        e.insertBefore(o, i), (a = i);
      }
    return void 0 !== a ? a : o.nextSibling;
  }
  function It(e, t, r) {
    "-" === t[0]
      ? e.setProperty(t, r)
      : (e[t] =
          null == r ? "" : "number" != typeof r || ft.test(t) ? r : r + "px");
  }
  function At(e, t, r, n, o) {
    var i;
    e: if ("style" === t)
      if ("string" == typeof r) e.style.cssText = r;
      else {
        if (("string" == typeof n && (e.style.cssText = n = ""), n))
          for (t in n) (r && t in r) || It(e.style, t, "");
        if (r) for (t in r) (n && r[t] === n[t]) || It(e.style, t, r[t]);
      }
    else if ("o" === t[0] && "n" === t[1])
      (i = t !== (t = t.replace(/Capture$/, ""))),
        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = r),
        r
          ? n || e.addEventListener(t, i ? kt : Et, i)
          : e.removeEventListener(t, i ? kt : Et, i);
    else if ("dangerouslySetInnerHTML" !== t) {
      if (o) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (
        "href" !== t &&
        "list" !== t &&
        "form" !== t &&
        "tabIndex" !== t &&
        "download" !== t &&
        t in e
      )
        try {
          e[t] = null == r ? "" : r;
          break e;
        } catch (e) {}
      "function" == typeof r ||
        (null != r && (!1 !== r || ("a" === t[0] && "r" === t[1]))
          ? e.setAttribute(t, r)
          : e.removeAttribute(t));
    }
  }
  function Et(e) {
    this.l[e.type + !1](at.event ? at.event(e) : e);
  }
  function kt(e) {
    this.l[e.type + !0](at.event ? at.event(e) : e);
  }
  function Dt(e, t, r, n, o, i, a, u, c) {
    var l,
      s,
      p,
      f,
      y,
      d,
      m,
      v,
      h,
      g,
      b,
      O,
      _,
      P = t.type;
    if (void 0 !== t.constructor) return null;
    null != r.__h &&
      ((c = r.__h), (u = t.__e = r.__e), (t.__h = null), (i = [u])),
      (l = at.__b) && l(t);
    try {
      e: if ("function" == typeof P) {
        if (
          ((v = t.props),
          (h = (l = P.contextType) && n[l.__c]),
          (g = l ? (h ? h.props.value : l.__) : n),
          r.__c
            ? (m = (s = t.__c = r.__c).__ = s.__E)
            : ("prototype" in P && P.prototype.render
                ? (t.__c = s = new P(v, g))
                : ((t.__c = s = new gt(v, g)),
                  (s.constructor = P),
                  (s.render = Ft)),
              h && h.sub(s),
              (s.props = v),
              s.state || (s.state = {}),
              (s.context = g),
              (s.__n = n),
              (p = s.__d = !0),
              (s.__h = [])),
          null == s.__s && (s.__s = s.state),
          null != P.getDerivedStateFromProps &&
            (s.__s == s.state && (s.__s = yt({}, s.__s)),
            yt(s.__s, P.getDerivedStateFromProps(v, s.__s))),
          (f = s.props),
          (y = s.state),
          p)
        )
          null == P.getDerivedStateFromProps &&
            null != s.componentWillMount &&
            s.componentWillMount(),
            null != s.componentDidMount && s.__h.push(s.componentDidMount);
        else {
          if (
            (null == P.getDerivedStateFromProps &&
              v !== f &&
              null != s.componentWillReceiveProps &&
              s.componentWillReceiveProps(v, g),
            (!s.__e &&
              null != s.shouldComponentUpdate &&
              !1 === s.shouldComponentUpdate(v, s.__s, g)) ||
              t.__v === r.__v)
          ) {
            (s.props = v),
              (s.state = s.__s),
              t.__v !== r.__v && (s.__d = !1),
              (s.__v = t),
              (t.__e = r.__e),
              (t.__k = r.__k),
              t.__k.forEach((e) => {
                e && (e.__ = t);
              }),
              s.__h.length && a.push(s);
            break e;
          }
          null != s.componentWillUpdate && s.componentWillUpdate(v, s.__s, g),
            null != s.componentDidUpdate &&
              s.__h.push(() => {
                s.componentDidUpdate(f, y, d);
              });
        }
        if (
          ((s.context = g),
          (s.props = v),
          (s.__v = t),
          (s.__P = e),
          (b = at.__r),
          (O = 0),
          "prototype" in P && P.prototype.render)
        )
          (s.state = s.__s),
            (s.__d = !1),
            b && b(t),
            (l = s.render(s.props, s.state, s.context));
        else
          do {
            (s.__d = !1),
              b && b(t),
              (l = s.render(s.props, s.state, s.context)),
              (s.state = s.__s);
          } while (s.__d && ++O < 25);
        (s.state = s.__s),
          null != s.getChildContext && (n = yt(yt({}, n), s.getChildContext())),
          p ||
            null == s.getSnapshotBeforeUpdate ||
            (d = s.getSnapshotBeforeUpdate(f, y)),
          (_ =
            null != l && l.type === ht && null == l.key ? l.props.children : l),
          St(e, Array.isArray(_) ? _ : [_], t, r, n, o, i, a, u, c),
          (s.base = t.__e),
          (t.__h = null),
          s.__h.length && a.push(s),
          m && (s.__E = s.__ = null),
          (s.__e = !1);
      } else
        null == i && t.__v === r.__v
          ? ((t.__k = r.__k), (t.__e = r.__e))
          : (t.__e = ((e, t, r, n, o, i, a, u) => {
              var c,
                l,
                s,
                p = r.props,
                f = t.props,
                y = t.type,
                d = 0;
              if (("svg" === y && (o = !0), null != i))
                for (; d < i.length; d++)
                  if (
                    (c = i[d]) &&
                    "setAttribute" in c == !!y &&
                    (y ? c.localName === y : 3 === c.nodeType)
                  ) {
                    (e = c), (i[d] = null);
                    break;
                  }
              if (null == e) {
                if (null === y) return document.createTextNode(f);
                (e = o
                  ? document.createElementNS("http://www.w3.org/2000/svg", y)
                  : document.createElement(y, f.is && f)),
                  (i = null),
                  (u = !1);
              }
              if (null === y) p === f || (u && e.data === f) || (e.data = f);
              else {
                if (
                  ((i = i && it.call(e.childNodes)),
                  (l = (p = r.props || st).dangerouslySetInnerHTML),
                  (s = f.dangerouslySetInnerHTML),
                  !u)
                ) {
                  if (null != i)
                    for (p = {}, d = 0; d < e.attributes.length; d++)
                      p[e.attributes[d].name] = e.attributes[d].value;
                  (s || l) &&
                    ((s &&
                      ((l && s.__html == l.__html) ||
                        s.__html === e.innerHTML)) ||
                      (e.innerHTML = (s && s.__html) || ""));
                }
                if (
                  (((e, t, r, n, o) => {
                    var i;
                    for (i in r)
                      "children" === i ||
                        "key" === i ||
                        i in t ||
                        At(e, i, null, r[i], n);
                    for (i in t)
                      (o && "function" != typeof t[i]) ||
                        "children" === i ||
                        "key" === i ||
                        "value" === i ||
                        "checked" === i ||
                        r[i] === t[i] ||
                        At(e, i, t[i], r[i], n);
                  })(e, f, p, o, u),
                  s)
                )
                  t.__k = [];
                else if (
                  ((d = t.props.children),
                  St(
                    e,
                    Array.isArray(d) ? d : [d],
                    t,
                    r,
                    n,
                    o && "foreignObject" !== y,
                    i,
                    a,
                    i ? i[0] : r.__k && bt(r, 0),
                    u
                  ),
                  null != i)
                )
                  for (d = i.length; d--; ) null != i[d] && dt(i[d]);
                u ||
                  ("value" in f &&
                    void 0 !== (d = f.value) &&
                    (d !== e.value ||
                      ("progress" === y && !d) ||
                      ("option" === y && d !== p.value)) &&
                    At(e, "value", d, p.value, !1),
                  "checked" in f &&
                    void 0 !== (d = f.checked) &&
                    d !== e.checked &&
                    At(e, "checked", d, p.checked, !1));
              }
              return e;
            })(r.__e, t, r, n, o, i, a, c));
      (l = at.diffed) && l(t);
    } catch (e) {
      (t.__v = null),
        (c || null != i) &&
          ((t.__e = u), (t.__h = !!c), (i[i.indexOf(u)] = null)),
        at.__e(e, t, r);
    }
  }
  function xt(e, t) {
    at.__c && at.__c(t, e),
      e.some((t) => {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some((e) => {
              e.call(t);
            });
        } catch (e) {
          at.__e(e, t.__v);
        }
      });
  }
  function Ct(e, t, r) {
    try {
      "function" == typeof e ? e(t) : (e.current = t);
    } catch (e) {
      at.__e(e, r);
    }
  }
  function Nt(e, t, r) {
    var n, o;
    if (
      (at.unmount && at.unmount(e),
      (n = e.ref) && ((n.current && n.current !== e.__e) || Ct(n, null, t)),
      null != (n = e.__c))
    ) {
      if (n.componentWillUnmount)
        try {
          n.componentWillUnmount();
        } catch (e) {
          at.__e(e, t);
        }
      n.base = n.__P = null;
    }
    if ((n = e.__k))
      for (o = 0; o < n.length; o++)
        n[o] && Nt(n[o], t, "function" != typeof e.type);
    r || null == e.__e || dt(e.__e), (e.__e = e.__d = void 0);
  }
  function Ft(e, t, r) {
    return this.constructor(e, r);
  }
  function Rt(e, t, r) {
    var n, o, i;
    at.__ && at.__(e, t),
      (o = (n = "function" == typeof r) ? null : (r && r.__k) || t.__k),
      (i = []),
      Dt(
        t,
        (e = ((!n && r) || t).__k = mt(ht, null, [e])),
        o || st,
        st,
        void 0 !== t.ownerSVGElement,
        !n && r ? [r] : o ? null : t.firstChild ? it.call(t.childNodes) : null,
        i,
        !n && r ? r : o ? o.__e : t.firstChild,
        n
      ),
      xt(i, e);
  }
  (it = pt.slice),
    (at = {
      __e(e, t, r, n) {
        for (var o, i, a; (t = t.__); )
          if ((o = t.__c) && !o.__)
            try {
              if (
                ((i = o.constructor) &&
                  null != i.getDerivedStateFromError &&
                  (o.setState(i.getDerivedStateFromError(e)), (a = o.__d)),
                null != o.componentDidCatch &&
                  (o.componentDidCatch(e, n || {}), (a = o.__d)),
                a)
              )
                return (o.__E = o);
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
    (ut = 0),
    (gt.prototype.setState = function (e, t) {
      var r;
      (r =
        null != this.__s && this.__s !== this.state
          ? this.__s
          : (this.__s = yt({}, this.state))),
        "function" == typeof e && (e = e(yt({}, r), this.props)),
        e && yt(r, e),
        null != e && this.__v && (t && this.__h.push(t), _t(this));
    }),
    (gt.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), _t(this));
    }),
    (gt.prototype.render = ht),
    (ct = []),
    (Pt.__r = 0);
  function Bt(e) {
    var t = e.highlightedValue.split("__aa-highlight__"),
      r = t.shift(),
      n = (function (...args) {
        var e = args.length > 0 && void 0 !== args[0] ? args[0] : [];
        return {
          get() {
            return e;
          },
          add(t) {
            var r = e[e.length - 1];
            (null == r ? void 0 : r.isHighlighted) === t.isHighlighted
              ? (e[e.length - 1] = {
                  value: r.value + t.value,
                  isHighlighted: r.isHighlighted,
                })
              : e.push(t);
          },
        };
      })(r ? [{ value: r, isHighlighted: !1 }] : []);
    return (
      t.forEach((e) => {
        var t = e.split("__/aa-highlight__");
        n.add({ value: t[0], isHighlighted: !0 }),
          "" !== t[1] && n.add({ value: t[1], isHighlighted: !1 });
      }),
      n.get()
    );
  }
  function Tt(e) {
    return (
      ((e) => {
        if (Array.isArray(e)) return Mt(e);
      })(e) ||
      ((e) => {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      ((e, t) => {
        if (!e) return;
        if ("string" == typeof e) return Mt(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return Mt(e, t);
      })(e) ||
      (() => {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Mt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Ut(e) {
    var t = e.hit,
      r = e.attribute,
      n = Array.isArray(r) ? r : [r],
      o = c(t, ["_highlightResult"].concat(Tt(n), ["value"]));
    return (
      "string" != typeof o && (o = c(t, n) || ""), Bt({ highlightedValue: o })
    );
  }
  t({}, "parseAlgoliaHitHighlight", () => Ut);
  var Lt = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
    },
    qt = new RegExp(/\w/i),
    Wt = /&(amp|quot|lt|gt|#39);/g,
    Ht = RegExp(Wt.source);
  function Vt(e, t) {
    var r,
      n,
      o,
      i = e[t],
      a =
        (null === (r = e[t + 1]) || void 0 === r ? void 0 : r.isHighlighted) ||
        !0,
      u =
        (null === (n = e[t - 1]) || void 0 === n ? void 0 : n.isHighlighted) ||
        !0;
    return qt.test(
      (o = i.value) && Ht.test(o) ? o.replace(Wt, (e) => Lt[e]) : o
    ) || u !== a
      ? i.isHighlighted
      : u;
  }
  function $t(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function Gt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? $t(Object(r), !0).forEach((t) => {
            zt(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : $t(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function zt(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function Qt(e) {
    return e.some((e) => e.isHighlighted)
      ? e.map((t, r) => Gt(Gt({}, t), {}, { isHighlighted: !Vt(e, r) }))
      : e.map((e) => Gt(Gt({}, e), {}, { isHighlighted: !1 }));
  }
  function Jt(e) {
    return Qt(Ut(e));
  }
  t({}, "parseAlgoliaHitReverseHighlight", () => Jt);
  function Kt(e) {
    return (
      ((e) => {
        if (Array.isArray(e)) return Yt(e);
      })(e) ||
      ((e) => {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      ((e, t) => {
        if (!e) return;
        if ("string" == typeof e) return Yt(e, t);
        var r = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === r && e.constructor && (r = e.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(e);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return Yt(e, t);
      })(e) ||
      (() => {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Yt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
    return n;
  }
  function Xt(e) {
    var t = e.hit,
      r = e.attribute,
      n = Array.isArray(r) ? r : [r],
      o = c(t, ["_snippetResult"].concat(Kt(n), ["value"]));
    return (
      "string" != typeof o && (o = c(t, n) || ""), Bt({ highlightedValue: o })
    );
  }
  function Zt(e) {
    return Qt(Xt(e));
  }
  function er(e) {
    var t = e.createElement,
      r = e.Fragment;
    return (e) => {
      var n = e.hit,
        o = e.attribute,
        i = e.tagName,
        a = void 0 === i ? "mark" : i;
      return t(
        r,
        {},
        Jt({ hit: n, attribute: o }).map((e, r) =>
          e.isHighlighted ? t(a, { key: r }, e.value) : e.value
        )
      );
    };
  }
  function tr(e) {
    var t = e.createElement,
      r = e.Fragment;
    return (e) => {
      var n = e.hit,
        o = e.attribute,
        i = e.tagName,
        a = void 0 === i ? "mark" : i;
      return t(
        r,
        {},
        Zt({ hit: n, attribute: o }).map((e, r) =>
          e.isHighlighted ? t(a, { key: r }, e.value) : e.value
        )
      );
    };
  }
  function rr(e) {
    var t = e.createElement,
      r = e.Fragment;
    return (e) => {
      var n = e.hit,
        o = e.attribute,
        i = e.tagName,
        a = void 0 === i ? "mark" : i;
      return t(
        r,
        {},
        Xt({ hit: n, attribute: o }).map((e, r) =>
          e.isHighlighted ? t(a, { key: r }, e.value) : e.value
        )
      );
    };
  }
  t({}, "parseAlgoliaHitSnippet", () => Xt),
    t({}, "parseAlgoliaHitReverseSnippet", () => Zt);
  var nr = [
    "classNames",
    "container",
    "getEnvironmentProps",
    "getFormProps",
    "getInputProps",
    "getItemProps",
    "getLabelProps",
    "getListProps",
    "getPanelProps",
    "getRootProps",
    "panelContainer",
    "panelPlacement",
    "render",
    "renderNoResults",
    "renderer",
    "detachedMediaQuery",
    "components",
    "translations",
  ];
  function or(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function ir(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? or(Object(r), !0).forEach((t) => {
            ar(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : or(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function ar(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  function ur(e, t) {
    if (null == e) return {};
    var r,
      n,
      o = ((e, t) => {
        if (null == e) return {};
        var r,
          n,
          o = {},
          i = Object.keys(e);
        for (n = 0; n < i.length; n++)
          (r = i[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (n = 0; n < i.length; n++)
        (r = i[n]),
          t.indexOf(r) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
    }
    return o;
  }
  var cr = {
      clearButton: "aa-ClearButton",
      detachedCancelButton: "aa-DetachedCancelButton",
      detachedContainer: "aa-DetachedContainer",
      detachedFormContainer: "aa-DetachedFormContainer",
      detachedOverlay: "aa-DetachedOverlay",
      detachedSearchButton: "aa-DetachedSearchButton",
      detachedSearchButtonIcon: "aa-DetachedSearchButtonIcon",
      detachedSearchButtonPlaceholder: "aa-DetachedSearchButtonPlaceholder",
      form: "aa-Form",
      input: "aa-Input",
      inputWrapper: "aa-InputWrapper",
      inputWrapperPrefix: "aa-InputWrapperPrefix",
      inputWrapperSuffix: "aa-InputWrapperSuffix",
      item: "aa-Item",
      label: "aa-Label",
      list: "aa-List",
      loadingIndicator: "aa-LoadingIndicator",
      panel: "aa-Panel",
      panelLayout: "aa-PanelLayout aa-Panel--scrollable",
      root: "aa-Autocomplete",
      source: "aa-Source",
      sourceFooter: "aa-SourceFooter",
      sourceHeader: "aa-SourceHeader",
      sourceNoResults: "aa-SourceNoResults",
      submitButton: "aa-SubmitButton",
    },
    lr = (e, t) => {
      Rt(e.children, t);
    },
    sr = { createElement: mt, Fragment: ht };
  function pr(e) {
    var t = e.panelPlacement,
      r = e.container,
      n = e.form,
      o = e.environment,
      i = r.getBoundingClientRect(),
      a =
        (o.pageYOffset ||
          o.document.documentElement.scrollTop ||
          o.document.body.scrollTop ||
          0) +
        i.top +
        i.height;
    switch (t) {
      case "start":
        return { top: a, left: i.left };
      case "end":
        return {
          top: a,
          right: o.document.documentElement.clientWidth - (i.left + i.width),
        };
      case "full-width":
        return { top: a, left: 0, right: 0, width: "unset", maxWidth: "unset" };
      case "input-wrapper-width":
        var u = n.getBoundingClientRect();
        return {
          top: a,
          left: u.left,
          right: o.document.documentElement.clientWidth - (u.left + u.width),
          width: "unset",
          maxWidth: "unset",
        };
      default:
        throw new Error(
          "[Autocomplete] The `panelPlacement` value ".concat(
            JSON.stringify(t),
            " is not valid."
          )
        );
    }
  }
  function fr(...args) {
    return (
      (fr =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        }),
      fr.apply(this, args)
    );
  }
  function yr(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function dr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? yr(Object(r), !0).forEach((t) => {
            mr(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : yr(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function mr(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  var vr = [{ segment: "autocomplete-js", version: p }];
  function hr(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t &&
        (n = n.filter((t) => Object.getOwnPropertyDescriptor(e, t).enumerable)),
        r.push(...n);
    }
    return r;
  }
  function gr(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? hr(Object(r), !0).forEach((t) => {
            br(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : hr(Object(r)).forEach((t) => {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function br(e, t, r) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r),
      e
    );
  }
  r();
  var Or,
    _r,
    Pr = SyntaxError,
    Sr = Function,
    jr = TypeError,
    wr = (e) => {
      try {
        return Sr('"use strict"; return (' + e + ").constructor;")();
      } catch (e) {}
    },
    Ir = Object.getOwnPropertyDescriptor;
  if (Ir)
    try {
      Ir({}, "");
    } catch (e) {
      Ir = null;
    }
  var Ar,
    Er = () => {
      throw new jr();
    },
    kr = Ir
      ? (function (...args) {
          try {
            return Er;
          } catch (e) {
            try {
              return Ir(args, "callee").get;
            } catch (e) {
              return Er;
            }
          }
        })()
      : Er,
    Dr = "undefined" != typeof Symbol && Symbol,
    xr = () => {
      if (
        "function" != typeof Symbol ||
        "function" != typeof Object.getOwnPropertySymbols
      )
        return !1;
      if ("symbol" == typeof Symbol.iterator) return !0;
      var e = {},
        t = Symbol("test"),
        r = Object(t);
      if ("string" == typeof t) return !1;
      if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
      if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
      for (t in ((e[t] = 42), e)) return !1;
      if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
        return !1;
      if (
        "function" == typeof Object.getOwnPropertyNames &&
        0 !== Object.getOwnPropertyNames(e).length
      )
        return !1;
      var n = Object.getOwnPropertySymbols(e);
      if (1 !== n.length || n[0] !== t) return !1;
      if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
      if ("function" == typeof Object.getOwnPropertyDescriptor) {
        var o = Object.getOwnPropertyDescriptor(e, t);
        if (42 !== o.value || !0 !== o.enumerable) return !1;
      }
      return !0;
    },
    Cr = (() =>
      "function" == typeof Dr &&
      "function" == typeof Symbol &&
      "symbol" == typeof Dr("foo") &&
      "symbol" == typeof Symbol("bar") &&
      xr())(),
    Nr = Object.getPrototypeOf || ((e) => e.__proto__),
    Fr = {},
    Rr = "undefined" == typeof Uint8Array ? _r : Nr(Uint8Array),
    Br = {
      "%AggregateError%":
        "undefined" == typeof AggregateError ? _r : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? _r : ArrayBuffer,
      "%ArrayIteratorPrototype%": Cr ? Nr([][Symbol.iterator]()) : _r,
      "%AsyncFromSyncIteratorPrototype%": _r,
      "%AsyncFunction%": Fr,
      "%AsyncGenerator%": Fr,
      "%AsyncGeneratorFunction%": Fr,
      "%AsyncIteratorPrototype%": Fr,
      "%Atomics%": "undefined" == typeof Atomics ? _r : Atomics,
      "%BigInt%": "undefined" == typeof BigInt ? _r : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": "undefined" == typeof DataView ? _r : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": "undefined" == typeof Float32Array ? _r : Float32Array,
      "%Float64Array%": "undefined" == typeof Float64Array ? _r : Float64Array,
      "%FinalizationRegistry%":
        "undefined" == typeof FinalizationRegistry ? _r : FinalizationRegistry,
      "%Function%": Sr,
      "%GeneratorFunction%": Fr,
      "%Int8Array%": "undefined" == typeof Int8Array ? _r : Int8Array,
      "%Int16Array%": "undefined" == typeof Int16Array ? _r : Int16Array,
      "%Int32Array%": "undefined" == typeof Int32Array ? _r : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": Cr ? Nr(Nr([][Symbol.iterator]())) : _r,
      "%JSON%": "object" == typeof JSON ? JSON : _r,
      "%Map%": "undefined" == typeof Map ? _r : Map,
      "%MapIteratorPrototype%":
        "undefined" != typeof Map && Cr ? Nr(new Map()[Symbol.iterator]()) : _r,
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": "undefined" == typeof Promise ? _r : Promise,
      "%Proxy%": "undefined" == typeof Proxy ? _r : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": "undefined" == typeof Reflect ? _r : Reflect,
      "%RegExp%": RegExp,
      "%Set%": "undefined" == typeof Set ? _r : Set,
      "%SetIteratorPrototype%":
        "undefined" != typeof Set && Cr ? Nr(new Set()[Symbol.iterator]()) : _r,
      "%SharedArrayBuffer%":
        "undefined" == typeof SharedArrayBuffer ? _r : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": Cr ? Nr(""[Symbol.iterator]()) : _r,
      "%Symbol%": Cr ? Symbol : _r,
      "%SyntaxError%": Pr,
      "%ThrowTypeError%": kr,
      "%TypedArray%": Rr,
      "%TypeError%": jr,
      "%Uint8Array%": "undefined" == typeof Uint8Array ? _r : Uint8Array,
      "%Uint8ClampedArray%":
        "undefined" == typeof Uint8ClampedArray ? _r : Uint8ClampedArray,
      "%Uint16Array%": "undefined" == typeof Uint16Array ? _r : Uint16Array,
      "%Uint32Array%": "undefined" == typeof Uint32Array ? _r : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": "undefined" == typeof WeakMap ? _r : WeakMap,
      "%WeakRef%": "undefined" == typeof WeakRef ? _r : WeakRef,
      "%WeakSet%": "undefined" == typeof WeakSet ? _r : WeakSet,
    },
    Tr = function e(t) {
      var r;
      if ("%AsyncFunction%" === t) r = wr("async function () {}");
      else if ("%GeneratorFunction%" === t) r = wr("function* () {}");
      else if ("%AsyncGeneratorFunction%" === t)
        r = wr("async function* () {}");
      else if ("%AsyncGenerator%" === t) {
        var n = e("%AsyncGeneratorFunction%");
        n && (r = n.prototype);
      } else if ("%AsyncIteratorPrototype%" === t) {
        var o = e("%AsyncGenerator%");
        o && (r = Nr(o.prototype));
      }
      return (Br[t] = r), r;
    },
    Mr = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype",
      ],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"],
    },
    Ur = {},
    Lr = "Function.prototype.bind called on incompatible ",
    qr = Array.prototype.slice,
    Wr = Object.prototype.toString,
    Hr = "[object Function]";
  Ar = function (e) {
    var t = this;
    if ("function" != typeof t || Wr.call(t) !== Hr)
      throw new TypeError(Lr + t);
    for (
      var r,
        n = qr.call(arguments, 1),
        o = function (...args) {
          if (this instanceof r) {
            var o = t.apply(this, n.concat(qr.call(args)));
            return Object(o) === o ? o : this;
          }
          return t.apply(e, n.concat(qr.call(args)));
        },
        i = Math.max(0, t.length - n.length),
        a = [],
        u = 0;
      u < i;
      u++
    )
      a.push("$" + u);
    if (
      ((r = Function(
        "binder",
        "return function (" +
          a.join(",") +
          "){ return binder.apply(this,arguments); }"
      )(o)),
      t.prototype)
    ) {
      var c = () => {};
      (c.prototype = t.prototype),
        (r.prototype = new c()),
        (c.prototype = null);
    }
    return r;
  };
  var Vr = Ar,
    $r = (Ur = Function.prototype.bind || Vr).call(
      Function.call,
      Object.prototype.hasOwnProperty
    ),
    Gr = Ur.call(Function.call, Array.prototype.concat),
    zr = Ur.call(Function.apply, Array.prototype.splice),
    Qr = Ur.call(Function.call, String.prototype.replace),
    Jr = Ur.call(Function.call, String.prototype.slice),
    Kr = Ur.call(Function.call, RegExp.prototype.exec),
    Yr =
      /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Xr = /\\(\\)?/g,
    Zr = (e) => {
      var t = Jr(e, 0, 1),
        r = Jr(e, -1);
      if ("%" === t && "%" !== r)
        throw new Pr("invalid intrinsic syntax, expected closing `%`");
      if ("%" === r && "%" !== t)
        throw new Pr("invalid intrinsic syntax, expected opening `%`");
      var n = [];
      return (
        Qr(e, Yr, (e, t, r, o) => {
          n[n.length] = r ? Qr(o, Xr, "$1") : t || e;
        }),
        n
      );
    },
    en = (e, t) => {
      var r,
        n = e;
      if (($r(Mr, n) && (n = "%" + (r = Mr[n])[0] + "%"), $r(Br, n))) {
        var o = Br[n];
        if ((o === Fr && (o = Tr(n)), void 0 === o && !t))
          throw new jr(
            "intrinsic " +
              e +
              " exists, but is not available. Please file an issue!"
          );
        return { alias: r, name: n, value: o };
      }
      throw new Pr("intrinsic " + e + " does not exist!");
    };
  Or = function (e, t) {
    if ("string" != typeof e || 0 === e.length)
      throw new jr("intrinsic name must be a non-empty string");
    if (arguments.length > 1 && "boolean" != typeof t)
      throw new jr('"allowMissing" argument must be a boolean');
    if (null === Kr(/^%?[^%]*%?$/g, e))
      throw new Pr(
        "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
      );
    var r = Zr(e),
      n = r.length > 0 ? r[0] : "",
      o = en("%" + n + "%", t),
      i = o.name,
      a = o.value,
      u = !1,
      c = o.alias;
    c && ((n = c[0]), zr(r, Gr([0, 1], c)));
    for (var l = 1, s = !0; l < r.length; l += 1) {
      var p = r[l],
        f = Jr(p, 0, 1),
        y = Jr(p, -1);
      if (
        ('"' === f ||
          "'" === f ||
          "`" === f ||
          '"' === y ||
          "'" === y ||
          "`" === y) &&
        f !== y
      )
        throw new Pr("property names with quotes must have matching quotes");
      if (
        (("constructor" !== p && s) || (u = !0),
        $r(Br, (i = "%" + (n += "." + p) + "%")))
      )
        a = Br[i];
      else if (null != a) {
        if (!(p in a)) {
          if (!t)
            throw new jr(
              "base intrinsic for " +
                e +
                " exists, but the property is not available."
            );
          return;
        }
        if (Ir && l + 1 >= r.length) {
          var d = Ir(a, p);
          a =
            (s = !!d) && "get" in d && !("originalValue" in d.get)
              ? d.get
              : a[p];
        } else (s = $r(a, p)), (a = a[p]);
        s && !u && (Br[i] = a);
      }
    }
    return a;
  };
  var tn,
    rn = Or,
    nn = Or,
    on = Ur,
    an = Or,
    un = an("%Function.prototype.apply%"),
    cn = an("%Function.prototype.call%"),
    ln = an("%Reflect.apply%", !0) || on.call(cn, un),
    sn = an("%Object.getOwnPropertyDescriptor%", !0),
    pn = an("%Object.defineProperty%", !0),
    fn = an("%Math.max%");
  if (pn)
    try {
      pn({}, "a", { value: 1 });
    } catch (e) {
      pn = null;
    }
  tn = function (e) {
    var t = ln(on, cn, arguments);
    if (sn && pn) {
      var r = sn(t, "length");
      r.configurable &&
        pn(t, "length", {
          value: 1 + fn(0, e.length - (arguments.length - 1)),
        });
    }
    return t;
  };
  var yn = function (...args) {
    return ln(on, un, args);
  };
  pn ? pn(tn, "apply", { value: yn }) : (tn.apply = yn);
  var dn,
    mn = tn,
    vn = mn(nn("String.prototype.indexOf")),
    hn = (e, t) => {
      var r = nn(e, !!t);
      return "function" == typeof r && vn(e, ".prototype.") > -1 ? mn(r) : r;
    },
    gn = "function" == typeof Map && Map.prototype,
    bn =
      Object.getOwnPropertyDescriptor && gn
        ? Object.getOwnPropertyDescriptor(Map.prototype, "size")
        : null,
    On = gn && bn && "function" == typeof bn.get ? bn.get : null,
    _n = gn && Map.prototype.forEach,
    Pn = "function" == typeof Set && Set.prototype,
    Sn =
      Object.getOwnPropertyDescriptor && Pn
        ? Object.getOwnPropertyDescriptor(Set.prototype, "size")
        : null,
    jn = Pn && Sn && "function" == typeof Sn.get ? Sn.get : null,
    wn = Pn && Set.prototype.forEach,
    In =
      "function" == typeof WeakMap && WeakMap.prototype
        ? WeakMap.prototype.has
        : null,
    An =
      "function" == typeof WeakSet && WeakSet.prototype
        ? WeakSet.prototype.has
        : null,
    En =
      "function" == typeof WeakRef && WeakRef.prototype
        ? WeakRef.prototype.deref
        : null,
    kn = Boolean.prototype.valueOf,
    Dn = Object.prototype.toString,
    xn = Function.prototype.toString,
    Cn = String.prototype.match,
    Nn = String.prototype.slice,
    Fn = String.prototype.replace,
    Rn = String.prototype.toUpperCase,
    Bn = String.prototype.toLowerCase,
    Tn = RegExp.prototype.test,
    Mn = Array.prototype.concat,
    Un = Array.prototype.join,
    Ln = Array.prototype.slice,
    qn = Math.floor,
    Wn = "function" == typeof BigInt ? BigInt.prototype.valueOf : null,
    Hn = Object.getOwnPropertySymbols,
    Vn =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? Symbol.prototype.toString
        : null,
    $n = "function" == typeof Symbol && "object" == typeof Symbol.iterator,
    Gn =
      "function" == typeof Symbol &&
      Symbol.toStringTag &&
      (typeof Symbol.toStringTag === $n || "symbol")
        ? Symbol.toStringTag
        : null,
    zn = Object.prototype.propertyIsEnumerable,
    Qn =
      ("function" == typeof Reflect
        ? Reflect.getPrototypeOf
        : Object.getPrototypeOf) ||
      ([].__proto__ === Array.prototype ? (e) => e.__proto__ : null);
  function Jn(e, t) {
    if (
      e === 1 / 0 ||
      e === -1 / 0 ||
      e != e ||
      (e && e > -1e3 && e < 1e3) ||
      Tn.call(/e/, t)
    )
      return t;
    var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ("number" == typeof e) {
      var n = e < 0 ? -qn(-e) : qn(e);
      if (n !== e) {
        var o = String(n),
          i = Nn.call(t, o.length + 1);
        return (
          Fn.call(o, r, "$&_") +
          "." +
          Fn.call(Fn.call(i, /([0-9]{3})/g, "$&_"), /_$/, "")
        );
      }
    }
    return Fn.call(t, r, "$&_");
  }
  var Kn = {},
    Yn = Kn.custom,
    Xn = no(Yn) ? Yn : null;
  function Zn(e, t, r) {
    var n = "double" === (r.quoteStyle || t) ? '"' : "'";
    return n + e + n;
  }
  function eo(e) {
    return Fn.call(String(e), /"/g, "&quot;");
  }
  function to(e) {
    return !(
      "[object Array]" !== ao(e) ||
      (Gn && "object" == typeof e && Gn in e)
    );
  }
  function ro(e) {
    return !(
      "[object RegExp]" !== ao(e) ||
      (Gn && "object" == typeof e && Gn in e)
    );
  }
  function no(e) {
    if ($n) return e && "object" == typeof e && e instanceof Symbol;
    if ("symbol" == typeof e) return !0;
    if (!e || "object" != typeof e || !Vn) return !1;
    try {
      return Vn.call(e), !0;
    } catch (e) {}
    return !1;
  }
  dn = function e(t, r, n, o) {
    var i = r || {};
    if (
      io(i, "quoteStyle") &&
      "single" !== i.quoteStyle &&
      "double" !== i.quoteStyle
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      io(i, "maxStringLength") &&
      ("number" == typeof i.maxStringLength
        ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0
        : null !== i.maxStringLength)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var a = !io(i, "customInspect") || i.customInspect;
    if ("boolean" != typeof a && "symbol" !== a)
      throw new TypeError(
        "option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`"
      );
    if (
      io(i, "indent") &&
      null !== i.indent &&
      "\t" !== i.indent &&
      !(parseInt(i.indent, 10) === i.indent && i.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (io(i, "numericSeparator") && "boolean" != typeof i.numericSeparator)
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var u = i.numericSeparator;
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("boolean" == typeof t) return t ? "true" : "false";
    if ("string" == typeof t) return co(t, i);
    if ("number" == typeof t) {
      if (0 === t) return 1 / 0 / t > 0 ? "0" : "-0";
      var c = String(t);
      return u ? Jn(t, c) : c;
    }
    if ("bigint" == typeof t) {
      var l = String(t) + "n";
      return u ? Jn(t, l) : l;
    }
    var s = void 0 === i.depth ? 5 : i.depth;
    if ((void 0 === n && (n = 0), n >= s && s > 0 && "object" == typeof t))
      return to(t) ? "[Array]" : "[Object]";
    var p = ((e, t) => {
      var r;
      if ("\t" === e.indent) r = "\t";
      else {
        if (!("number" == typeof e.indent && e.indent > 0)) return null;
        r = Un.call(Array(e.indent + 1), " ");
      }
      return { base: r, prev: Un.call(Array(t + 1), r) };
    })(i, n);
    if (void 0 === o) o = [];
    else if (uo(o, t) >= 0) return "[Circular]";
    function f(t, r, a) {
      if ((r && (o = Ln.call(o)).push(r), a)) {
        var u = { depth: i.depth };
        return (
          io(i, "quoteStyle") && (u.quoteStyle = i.quoteStyle),
          e(t, u, n + 1, o)
        );
      }
      return e(t, i, n + 1, o);
    }
    if ("function" == typeof t && !ro(t)) {
      var y = ((e) => {
          if (e.name) return e.name;
          var t = Cn.call(xn.call(e), /^function\s*([\w$]+)/);
          if (t) return t[1];
          return null;
        })(t),
        d = mo(t, f);
      return (
        "[Function" +
        (y ? ": " + y : " (anonymous)") +
        "]" +
        (d.length > 0 ? " { " + Un.call(d, ", ") + " }" : "")
      );
    }
    if (no(t)) {
      var m = $n
        ? Fn.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1")
        : Vn.call(t);
      return "object" != typeof t || $n ? m : so(m);
    }
    if (
      ((e) => {
        if (!e || "object" != typeof e) return !1;
        if ("undefined" != typeof HTMLElement && e instanceof HTMLElement)
          return !0;
        return (
          "string" == typeof e.nodeName && "function" == typeof e.getAttribute
        );
      })(t)
    ) {
      for (
        var v = "<" + Bn.call(String(t.nodeName)),
          h = t.attributes || [],
          g = 0;
        g < h.length;
        g++
      )
        v += " " + h[g].name + "=" + Zn(eo(h[g].value), "double", i);
      return (
        (v += ">"),
        t.childNodes && t.childNodes.length && (v += "..."),
        (v += "</" + Bn.call(String(t.nodeName)) + ">")
      );
    }
    if (to(t)) {
      if (0 === t.length) return "[]";
      var b = mo(t, f);
      return p &&
        !((e) => {
          for (var t = 0; t < e.length; t++) if (uo(e[t], "\n") >= 0) return !1;
          return !0;
        })(b)
        ? "[" + yo(b, p) + "]"
        : "[ " + Un.call(b, ", ") + " ]";
    }
    if (
      ((e) =>
        !(
          "[object Error]" !== ao(e) ||
          (Gn && "object" == typeof e && Gn in e)
        ))(t)
    ) {
      var O = mo(t, f);
      return "cause" in Error.prototype ||
        !("cause" in t) ||
        zn.call(t, "cause")
        ? 0 === O.length
          ? "[" + String(t) + "]"
          : "{ [" + String(t) + "] " + Un.call(O, ", ") + " }"
        : "{ [" +
            String(t) +
            "] " +
            Un.call(Mn.call("[cause]: " + f(t.cause), O), ", ") +
            " }";
    }
    if ("object" == typeof t && a) {
      if (Xn && "function" == typeof t[Xn] && Kn)
        return Kn(t, { depth: s - n });
      if ("symbol" !== a && "function" == typeof t.inspect) return t.inspect();
    }
    if (
      ((e) => {
        if (!On || !e || "object" != typeof e) return !1;
        try {
          On.call(e);
          try {
            jn.call(e);
          } catch (e) {
            return !0;
          }
          return e instanceof Map;
        } catch (e) {}
        return !1;
      })(t)
    ) {
      var _ = [];
      return (
        _n.call(t, (e, r) => {
          _.push(f(r, t, !0) + " => " + f(e, t));
        }),
        fo("Map", On.call(t), _, p)
      );
    }
    if (
      ((e) => {
        if (!jn || !e || "object" != typeof e) return !1;
        try {
          jn.call(e);
          try {
            On.call(e);
          } catch (e) {
            return !0;
          }
          return e instanceof Set;
        } catch (e) {}
        return !1;
      })(t)
    ) {
      var P = [];
      return (
        wn.call(t, (e) => {
          P.push(f(e, t));
        }),
        fo("Set", jn.call(t), P, p)
      );
    }
    if (
      ((e) => {
        if (!In || !e || "object" != typeof e) return !1;
        try {
          In.call(e, In);
          try {
            An.call(e, An);
          } catch (e) {
            return !0;
          }
          return e instanceof WeakMap;
        } catch (e) {}
        return !1;
      })(t)
    )
      return po("WeakMap");
    if (
      ((e) => {
        if (!An || !e || "object" != typeof e) return !1;
        try {
          An.call(e, An);
          try {
            In.call(e, In);
          } catch (e) {
            return !0;
          }
          return e instanceof WeakSet;
        } catch (e) {}
        return !1;
      })(t)
    )
      return po("WeakSet");
    if (
      ((e) => {
        if (!En || !e || "object" != typeof e) return !1;
        try {
          return En.call(e), !0;
        } catch (e) {}
        return !1;
      })(t)
    )
      return po("WeakRef");
    if (
      ((e) =>
        !(
          "[object Number]" !== ao(e) ||
          (Gn && "object" == typeof e && Gn in e)
        ))(t)
    )
      return so(f(Number(t)));
    if (
      ((e) => {
        if (!e || "object" != typeof e || !Wn) return !1;
        try {
          return Wn.call(e), !0;
        } catch (e) {}
        return !1;
      })(t)
    )
      return so(f(Wn.call(t)));
    if (
      ((e) =>
        !(
          "[object Boolean]" !== ao(e) ||
          (Gn && "object" == typeof e && Gn in e)
        ))(t)
    )
      return so(kn.call(t));
    if (
      ((e) =>
        !(
          "[object String]" !== ao(e) ||
          (Gn && "object" == typeof e && Gn in e)
        ))(t)
    )
      return so(f(String(t)));
    if (
      !((e) =>
        !(
          "[object Date]" !== ao(e) ||
          (Gn && "object" == typeof e && Gn in e)
        ))(t) &&
      !ro(t)
    ) {
      var S = mo(t, f),
        j = Qn
          ? Qn(t) === Object.prototype
          : t instanceof Object || t.constructor === Object,
        w = t instanceof Object ? "" : "null prototype",
        I =
          !j && Gn && Object(t) === t && Gn in t
            ? Nn.call(ao(t), 8, -1)
            : w
            ? "Object"
            : "",
        A =
          (j || "function" != typeof t.constructor
            ? ""
            : t.constructor.name
            ? t.constructor.name + " "
            : "") +
          (I || w
            ? "[" + Un.call(Mn.call([], I || [], w || []), ": ") + "] "
            : "");
      return 0 === S.length
        ? A + "{}"
        : p
        ? A + "{" + yo(S, p) + "}"
        : A + "{ " + Un.call(S, ", ") + " }";
    }
    return String(t);
  };
  var oo =
    Object.prototype.hasOwnProperty ||
    function (e) {
      return e in this;
    };
  function io(e, t) {
    return oo.call(e, t);
  }
  function ao(e) {
    return Dn.call(e);
  }
  function uo(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var r = 0, n = e.length; r < n; r++) if (e[r] === t) return r;
    return -1;
  }
  function co(e, t) {
    if (e.length > t.maxStringLength) {
      var r = e.length - t.maxStringLength,
        n = "... " + r + " more character" + (r > 1 ? "s" : "");
      return co(Nn.call(e, 0, t.maxStringLength), t) + n;
    }
    return Zn(
      Fn.call(Fn.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lo),
      "single",
      t
    );
  }
  function lo(e) {
    var t = e.charCodeAt(0),
      r = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[t];
    return r ? "\\" + r : "\\x" + (t < 16 ? "0" : "") + Rn.call(t.toString(16));
  }
  function so(e) {
    return "Object(" + e + ")";
  }
  function po(e) {
    return e + " { ? }";
  }
  function fo(e, t, r, n) {
    return e + " (" + t + ") {" + (n ? yo(r, n) : Un.call(r, ", ")) + "}";
  }
  function yo(e, t) {
    if (0 === e.length) return "";
    var r = "\n" + t.prev + t.base;
    return r + Un.call(e, "," + r) + "\n" + t.prev;
  }
  function mo(e, t) {
    var r = to(e),
      n = [];
    if (r) {
      n.length = e.length;
      for (var o = 0; o < e.length; o++) n[o] = io(e, o) ? t(e[o], e) : "";
    }
    var i,
      a = "function" == typeof Hn ? Hn(e) : [];
    if ($n) {
      i = {};
      for (var u = 0; u < a.length; u++) i["$" + a[u]] = a[u];
    }
    for (var c in e)
      io(e, c) &&
        ((r && String(Number(c)) === c && c < e.length) ||
          ($n && i["$" + c] instanceof Symbol) ||
          (Tn.call(/[^\w$]/, c)
            ? n.push(t(c, e) + ": " + t(e[c], e))
            : n.push(c + ": " + t(e[c], e))));
    if ("function" == typeof Hn)
      for (var l = 0; l < a.length; l++)
        zn.call(e, a[l]) && n.push("[" + t(a[l]) + "]: " + t(e[a[l]], e));
    return n;
  }
  var vo,
    ho,
    go = dn,
    bo = rn("%TypeError%"),
    Oo = rn("%WeakMap%", !0),
    _o = rn("%Map%", !0),
    Po = hn("WeakMap.prototype.get", !0),
    So = hn("WeakMap.prototype.set", !0),
    jo = hn("WeakMap.prototype.has", !0),
    wo = hn("Map.prototype.get", !0),
    Io = hn("Map.prototype.set", !0),
    Ao = hn("Map.prototype.has", !0),
    Eo = (e, t) => {
      for (var r, n = e; null !== (r = n.next); n = r)
        if (r.key === t)
          return (n.next = r.next), (r.next = e.next), (e.next = r), r;
    },
    ko = () => {
      var e,
        t,
        r,
        n = {
          assert(e) {
            if (!n.has(e))
              throw new bo("Side channel does not contain " + go(e));
          },
          get(n) {
            if (Oo && n && ("object" == typeof n || "function" == typeof n)) {
              if (e) return Po(e, n);
            } else if (_o) {
              if (t) return wo(t, n);
            } else if (r)
              return ((e, t) => {
                var r = Eo(e, t);
                return r && r.value;
              })(r, n);
          },
          has(n) {
            if (Oo && n && ("object" == typeof n || "function" == typeof n)) {
              if (e) return jo(e, n);
            } else if (_o) {
              if (t) return Ao(t, n);
            } else if (r) return ((e, t) => !!Eo(e, t))(r, n);
            return !1;
          },
          set(n, o) {
            Oo && n && ("object" == typeof n || "function" == typeof n)
              ? (e || (e = new Oo()), So(e, n, o))
              : _o
              ? (t || (t = new _o()), Io(t, n, o))
              : (r || (r = { key: {}, next: null }),
                ((e, t, r) => {
                  var n = Eo(e, t);
                  n
                    ? (n.value = r)
                    : (e.next = { key: t, next: e.next, value: r });
                })(r, n, o));
          },
        };
      return n;
    },
    Do = String.prototype.replace,
    xo = /%20/g,
    Co = "RFC3986";
  ho = {
    default: Co,
    formatters: {
      RFC1738(e) {
        return Do.call(e, xo, "+");
      },
      RFC3986(e) {
        return String(e);
      },
    },
    RFC1738: "RFC1738",
    RFC3986: Co,
  };
  var No = Object.prototype.hasOwnProperty,
    Fo = Array.isArray,
    Ro = (() => {
      for (var e = [], t = 0; t < 256; ++t)
        e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
      return e;
    })(),
    Bo = (e, t) => {
      for (
        var r = t && t.plainObjects ? Object.create(null) : {}, n = 0;
        n < e.length;
        ++n
      )
        void 0 !== e[n] && (r[n] = e[n]);
      return r;
    };
  vo = {
    arrayToObject: Bo,
    assign(e, t) {
      return Object.keys(t).reduce((e, r) => ((e[r] = t[r]), e), e);
    },
    combine(e, t) {
      return [].concat(e, t);
    },
    compact(e) {
      for (
        var t = [{ obj: { o: e }, prop: "o" }], r = [], n = 0;
        n < t.length;
        ++n
      )
        for (
          var o = t[n], i = o.obj[o.prop], a = Object.keys(i), u = 0;
          u < a.length;
          ++u
        ) {
          var c = a[u],
            l = i[c];
          "object" == typeof l &&
            null !== l &&
            -1 === r.indexOf(l) &&
            (t.push({ obj: i, prop: c }), r.push(l));
        }
      return (
        ((e) => {
          for (; e.length > 1; ) {
            var t = e.pop(),
              r = t.obj[t.prop];
            if (Fo(r)) {
              for (var n = [], o = 0; o < r.length; ++o)
                void 0 !== r[o] && n.push(r[o]);
              t.obj[t.prop] = n;
            }
          }
        })(t),
        e
      );
    },
    decode(e, t, r) {
      var n = e.replace(/\+/g, " ");
      if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
      try {
        return decodeURIComponent(n);
      } catch (e) {
        return n;
      }
    },
    encode(e, t, r, n, o) {
      if (0 === e.length) return e;
      var i = e;
      if (
        ("symbol" == typeof e
          ? (i = Symbol.prototype.toString.call(e))
          : "string" != typeof e && (i = String(e)),
        "iso-8859-1" === r)
      )
        return escape(i).replace(
          /%u[0-9a-f]{4}/gi,
          (e) => "%26%23" + parseInt(e.slice(2), 16) + "%3B"
        );
      for (var a = "", u = 0; u < i.length; ++u) {
        var c = i.charCodeAt(u);
        45 === c ||
        46 === c ||
        95 === c ||
        126 === c ||
        (c >= 48 && c <= 57) ||
        (c >= 65 && c <= 90) ||
        (c >= 97 && c <= 122) ||
        (o === ho.RFC1738 && (40 === c || 41 === c))
          ? (a += i.charAt(u))
          : c < 128
          ? (a += Ro[c])
          : c < 2048
          ? (a += Ro[192 | (c >> 6)] + Ro[128 | (63 & c)])
          : c < 55296 || c >= 57344
          ? (a +=
              Ro[224 | (c >> 12)] +
              Ro[128 | ((c >> 6) & 63)] +
              Ro[128 | (63 & c)])
          : ((u += 1),
            (c = 65536 + (((1023 & c) << 10) | (1023 & i.charCodeAt(u)))),
            (a +=
              Ro[240 | (c >> 18)] +
              Ro[128 | ((c >> 12) & 63)] +
              Ro[128 | ((c >> 6) & 63)] +
              Ro[128 | (63 & c)]));
      }
      return a;
    },
    isBuffer(e) {
      return (
        !(!e || "object" != typeof e) &&
        !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
      );
    },
    isRegExp(e) {
      return "[object RegExp]" === Object.prototype.toString.call(e);
    },
    maybeMap(e, t) {
      if (Fo(e)) {
        for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
        return r;
      }
      return t(e);
    },
    merge: function e(t, r, n) {
      if (!r) return t;
      if ("object" != typeof r) {
        if (Fo(t)) t.push(r);
        else {
          if (!t || "object" != typeof t) return [t, r];
          ((n && (n.plainObjects || n.allowPrototypes)) ||
            !No.call(Object.prototype, r)) &&
            (t[r] = !0);
        }
        return t;
      }
      if (!t || "object" != typeof t) return [t].concat(r);
      var o = t;
      return (
        Fo(t) && !Fo(r) && (o = Bo(t, n)),
        Fo(t) && Fo(r)
          ? (r.forEach((r, o) => {
              if (No.call(t, o)) {
                var i = t[o];
                i && "object" == typeof i && r && "object" == typeof r
                  ? (t[o] = e(i, r, n))
                  : t.push(r);
              } else t[o] = r;
            }),
            t)
          : Object.keys(r).reduce((t, o) => {
              var i = r[o];
              return No.call(t, o) ? (t[o] = e(t[o], i, n)) : (t[o] = i), t;
            }, o)
      );
    },
  };
  var To = Object.prototype.hasOwnProperty,
    Mo = {
      brackets(e) {
        return e + "[]";
      },
      comma: "comma",
      indices(e, t) {
        return e + "[" + t + "]";
      },
      repeat(e) {
        return e;
      },
    },
    Uo = Array.isArray,
    Lo = Array.prototype.push,
    qo = (e, t) => {
      Lo.apply(e, Uo(t) ? t : [t]);
    },
    Wo = Date.prototype.toISOString,
    Ho = ho.default,
    Vo = {
      addQueryPrefix: !1,
      allowDots: !1,
      charset: "utf-8",
      charsetSentinel: !1,
      delimiter: "&",
      encode: !0,
      encoder: vo.encode,
      encodeValuesOnly: !1,
      format: Ho,
      formatter: ho.formatters[Ho],
      indices: !1,
      serializeDate(e) {
        return Wo.call(e);
      },
      skipNulls: !1,
      strictNullHandling: !1,
    },
    $o = function e(t, r, n, o, i, a, u, c, l, s, p, f, y, d, m) {
      var v,
        h = t;
      if (m.has(t)) throw new RangeError("Cyclic object value");
      if (
        ("function" == typeof u
          ? (h = u(r, h))
          : h instanceof Date
          ? (h = s(h))
          : "comma" === n &&
            Uo(h) &&
            (h = vo.maybeMap(h, (e) => (e instanceof Date ? s(e) : e))),
        null === h)
      ) {
        if (o) return a && !y ? a(r, Vo.encoder, d, "key", p) : r;
        h = "";
      }
      if (
        "string" == typeof (v = h) ||
        "number" == typeof v ||
        "boolean" == typeof v ||
        "symbol" == typeof v ||
        "bigint" == typeof v ||
        vo.isBuffer(h)
      )
        return a
          ? [
              f(y ? r : a(r, Vo.encoder, d, "key", p)) +
                "=" +
                f(a(h, Vo.encoder, d, "value", p)),
            ]
          : [f(r) + "=" + f(String(h))];
      var g,
        b = [];
      if (void 0 === h) return b;
      if ("comma" === n && Uo(h))
        g = [{ value: h.length > 0 ? h.join(",") || null : void 0 }];
      else if (Uo(u)) g = u;
      else {
        var O = Object.keys(h);
        g = c ? O.sort(c) : O;
      }
      for (var _ = 0; _ < g.length; ++_) {
        var P = g[_],
          S = "object" == typeof P && void 0 !== P.value ? P.value : h[P];
        if (!i || null !== S) {
          var j = Uo(h)
            ? "function" == typeof n
              ? n(r, P)
              : r
            : r + (l ? "." + P : "[" + P + "]");
          m.set(t, !0);
          var w = ko();
          qo(b, e(S, j, n, o, i, a, u, c, l, s, p, f, y, d, w));
        }
      }
      return b;
    },
    Go = (e, t) => {
      var r,
        n = e,
        o = ((e) => {
          if (!e) return Vo;
          if (
            null !== e.encoder &&
            void 0 !== e.encoder &&
            "function" != typeof e.encoder
          )
            throw new TypeError("Encoder has to be a function.");
          var t = e.charset || Vo.charset;
          if (
            void 0 !== e.charset &&
            "utf-8" !== e.charset &&
            "iso-8859-1" !== e.charset
          )
            throw new TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          var r = ho.default;
          if (void 0 !== e.format) {
            if (!To.call(ho.formatters, e.format))
              throw new TypeError("Unknown format option provided.");
            r = e.format;
          }
          var n = ho.formatters[r],
            o = Vo.filter;
          return (
            ("function" == typeof e.filter || Uo(e.filter)) && (o = e.filter),
            {
              addQueryPrefix:
                "boolean" == typeof e.addQueryPrefix
                  ? e.addQueryPrefix
                  : Vo.addQueryPrefix,
              allowDots: void 0 === e.allowDots ? Vo.allowDots : !!e.allowDots,
              charset: t,
              charsetSentinel:
                "boolean" == typeof e.charsetSentinel
                  ? e.charsetSentinel
                  : Vo.charsetSentinel,
              delimiter: void 0 === e.delimiter ? Vo.delimiter : e.delimiter,
              encode: "boolean" == typeof e.encode ? e.encode : Vo.encode,
              encoder: "function" == typeof e.encoder ? e.encoder : Vo.encoder,
              encodeValuesOnly:
                "boolean" == typeof e.encodeValuesOnly
                  ? e.encodeValuesOnly
                  : Vo.encodeValuesOnly,
              filter: o,
              format: r,
              formatter: n,
              serializeDate:
                "function" == typeof e.serializeDate
                  ? e.serializeDate
                  : Vo.serializeDate,
              skipNulls:
                "boolean" == typeof e.skipNulls ? e.skipNulls : Vo.skipNulls,
              sort: "function" == typeof e.sort ? e.sort : null,
              strictNullHandling:
                "boolean" == typeof e.strictNullHandling
                  ? e.strictNullHandling
                  : Vo.strictNullHandling,
            }
          );
        })(t);
      "function" == typeof o.filter
        ? (n = (0, o.filter)("", n))
        : Uo(o.filter) && (r = o.filter);
      var i,
        a = [];
      if ("object" != typeof n || null === n) return "";
      i =
        t && t.arrayFormat in Mo
          ? t.arrayFormat
          : t && "indices" in t
          ? t.indices
            ? "indices"
            : "repeat"
          : "indices";
      var u = Mo[i];
      r || (r = Object.keys(n)), o.sort && r.sort(o.sort);
      for (var c = ko(), l = 0; l < r.length; ++l) {
        var s = r[l];
        (o.skipNulls && null === n[s]) ||
          qo(
            a,
            $o(
              n[s],
              s,
              u,
              o.strictNullHandling,
              o.skipNulls,
              o.encode ? o.encoder : null,
              o.filter,
              o.sort,
              o.allowDots,
              o.serializeDate,
              o.format,
              o.formatter,
              o.encodeValuesOnly,
              o.charset,
              c
            )
          );
      }
      var p = a.join(o.delimiter),
        f = !0 === o.addQueryPrefix ? "?" : "";
      return (
        o.charsetSentinel &&
          ("iso-8859-1" === o.charset
            ? (f += "utf8=%26%2310003%3B&")
            : (f += "utf8=%E2%9C%93&")),
        p.length > 0 ? f + p : ""
      );
    },
    zo = Object.prototype.hasOwnProperty,
    Qo = Array.isArray,
    Jo = {
      allowDots: !1,
      allowPrototypes: !1,
      allowSparse: !1,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: !1,
      comma: !1,
      decoder: vo.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: !1,
      interpretNumericEntities: !1,
      parameterLimit: 1e3,
      parseArrays: !0,
      plainObjects: !1,
      strictNullHandling: !1,
    },
    Ko = (e) =>
      e.replace(/&#(\d+);/g, (e, t) => String.fromCharCode(parseInt(t, 10))),
    Yo = (e, t) =>
      e && "string" == typeof e && t.comma && e.indexOf(",") > -1
        ? e.split(",")
        : e,
    Xo = (e, t, r, n) => {
      if (e) {
        var o = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
          i = /(\[[^[\]]*])/g,
          a = r.depth > 0 && /(\[[^[\]]*])/.exec(o),
          u = a ? o.slice(0, a.index) : o,
          c = [];
        if (u) {
          if (
            !r.plainObjects &&
            zo.call(Object.prototype, u) &&
            !r.allowPrototypes
          )
            return;
          c.push(u);
        }
        for (
          var l = 0;
          r.depth > 0 && null !== (a = i.exec(o)) && l < r.depth;

        ) {
          if (
            ((l += 1),
            !r.plainObjects &&
              zo.call(Object.prototype, a[1].slice(1, -1)) &&
              !r.allowPrototypes)
          )
            return;
          c.push(a[1]);
        }
        return (
          a && c.push("[" + o.slice(a.index) + "]"),
          ((e, t, r, n) => {
            for (var o = n ? t : Yo(t, r), i = e.length - 1; i >= 0; --i) {
              var a,
                u = e[i];
              if ("[]" === u && r.parseArrays) a = [].concat(o);
              else {
                a = r.plainObjects ? Object.create(null) : {};
                var c =
                    "[" === u.charAt(0) && "]" === u.charAt(u.length - 1)
                      ? u.slice(1, -1)
                      : u,
                  l = parseInt(c, 10);
                r.parseArrays || "" !== c
                  ? !isNaN(l) &&
                    u !== c &&
                    String(l) === c &&
                    l >= 0 &&
                    r.parseArrays &&
                    l <= r.arrayLimit
                    ? ((a = [])[l] = o)
                    : (a[c] = o)
                  : (a = { 0: o });
              }
              o = a;
            }
            return o;
          })(c, t, r, n)
        );
      }
    },
    Zo = e({
      formats: ho,
      parse(e, t) {
        var r = ((e) => {
          if (!e) return Jo;
          if (
            null !== e.decoder &&
            void 0 !== e.decoder &&
            "function" != typeof e.decoder
          )
            throw new TypeError("Decoder has to be a function.");
          if (
            void 0 !== e.charset &&
            "utf-8" !== e.charset &&
            "iso-8859-1" !== e.charset
          )
            throw new TypeError(
              "The charset option must be either utf-8, iso-8859-1, or undefined"
            );
          var t = void 0 === e.charset ? Jo.charset : e.charset;
          return {
            allowDots: void 0 === e.allowDots ? Jo.allowDots : !!e.allowDots,
            allowPrototypes:
              "boolean" == typeof e.allowPrototypes
                ? e.allowPrototypes
                : Jo.allowPrototypes,
            allowSparse:
              "boolean" == typeof e.allowSparse
                ? e.allowSparse
                : Jo.allowSparse,
            arrayLimit:
              "number" == typeof e.arrayLimit ? e.arrayLimit : Jo.arrayLimit,
            charset: t,
            charsetSentinel:
              "boolean" == typeof e.charsetSentinel
                ? e.charsetSentinel
                : Jo.charsetSentinel,
            comma: "boolean" == typeof e.comma ? e.comma : Jo.comma,
            decoder: "function" == typeof e.decoder ? e.decoder : Jo.decoder,
            delimiter:
              "string" == typeof e.delimiter || vo.isRegExp(e.delimiter)
                ? e.delimiter
                : Jo.delimiter,
            depth:
              "number" == typeof e.depth || !1 === e.depth
                ? +e.depth
                : Jo.depth,
            ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
            interpretNumericEntities:
              "boolean" == typeof e.interpretNumericEntities
                ? e.interpretNumericEntities
                : Jo.interpretNumericEntities,
            parameterLimit:
              "number" == typeof e.parameterLimit
                ? e.parameterLimit
                : Jo.parameterLimit,
            parseArrays: !1 !== e.parseArrays,
            plainObjects:
              "boolean" == typeof e.plainObjects
                ? e.plainObjects
                : Jo.plainObjects,
            strictNullHandling:
              "boolean" == typeof e.strictNullHandling
                ? e.strictNullHandling
                : Jo.strictNullHandling,
          };
        })(t);
        if ("" === e || null == e)
          return r.plainObjects ? Object.create(null) : {};
        for (
          var n =
              "string" == typeof e
                ? ((e, t) => {
                    var r,
                      n = {},
                      o = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                      i =
                        t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                      a = o.split(t.delimiter, i),
                      u = -1,
                      c = t.charset;
                    if (t.charsetSentinel)
                      for (r = 0; r < a.length; ++r)
                        0 === a[r].indexOf("utf8=") &&
                          ("utf8=%E2%9C%93" === a[r]
                            ? (c = "utf-8")
                            : "utf8=%26%2310003%3B" === a[r] &&
                              (c = "iso-8859-1"),
                          (u = r),
                          (r = a.length));
                    for (r = 0; r < a.length; ++r)
                      if (r !== u) {
                        var l,
                          s,
                          p = a[r],
                          f = p.indexOf("]="),
                          y = -1 === f ? p.indexOf("=") : f + 1;
                        -1 === y
                          ? ((l = t.decoder(p, Jo.decoder, c, "key")),
                            (s = t.strictNullHandling ? null : ""))
                          : ((l = t.decoder(
                              p.slice(0, y),
                              Jo.decoder,
                              c,
                              "key"
                            )),
                            (s = vo.maybeMap(Yo(p.slice(y + 1), t), (e) =>
                              t.decoder(e, Jo.decoder, c, "value")
                            ))),
                          s &&
                            t.interpretNumericEntities &&
                            "iso-8859-1" === c &&
                            (s = Ko(s)),
                          p.indexOf("[]=") > -1 && (s = Qo(s) ? [s] : s),
                          zo.call(n, l)
                            ? (n[l] = vo.combine(n[l], s))
                            : (n[l] = s);
                      }
                    return n;
                  })(e, r)
                : e,
            o = r.plainObjects ? Object.create(null) : {},
            i = Object.keys(n),
            a = 0;
          a < i.length;
          ++a
        ) {
          var u = i[a],
            c = Xo(u, n[u], r, "string" == typeof e);
          o = vo.merge(o, c, r);
        }
        return !0 === r.allowSparse ? o : vo.compact(o);
      },
      stringify: Go,
    });
  const ei = ((e, t) => {
      let r;
      return (...n) => (
        r && clearTimeout(r),
        new Promise((o) => {
          r = setTimeout(() => o(e(...n)), t);
        })
      );
    })(fetch, 300),
    ti = "https://api.github.com/search/repositories";
  !((e) => {
    var t,
      r = (() => {
        var e = [],
          t = [];
        function r(r) {
          e.push(r);
          var n = r();
          t.push(n);
        }
        return {
          runEffect: r,
          cleanupEffects() {
            var e = t;
            (t = []),
              e.forEach((e) => {
                e();
              });
          },
          runEffects() {
            var t = e;
            (e = []),
              t.forEach((e) => {
                r(e);
              });
          },
        };
      })(),
      i = r.runEffect,
      a = r.cleanupEffects,
      c = r.runEffects,
      s =
        ((t = []),
        {
          reactive(e) {
            var r = e(),
              n = {
                _fn: e,
                _ref: { current: r },
                get value() {
                  return this._ref.current;
                },
                set value(e) {
                  this._ref.current = e;
                },
              };
            return t.push(n), n;
          },
          runReactives() {
            t.forEach((e) => {
              e._ref.current = e._fn();
            });
          },
        }),
      p = s.reactive,
      f = s.runReactives,
      y = n(!1),
      d = n(e),
      m = n(void 0),
      v = p(() =>
        ((e) => {
          var t,
            r = e.classNames,
            n = e.container,
            o = e.getEnvironmentProps,
            i = e.getFormProps,
            a = e.getInputProps,
            c = e.getItemProps,
            l = e.getLabelProps,
            s = e.getListProps,
            p = e.getPanelProps,
            f = e.getRootProps,
            y = e.panelContainer,
            d = e.panelPlacement,
            m = e.render,
            v = e.renderNoResults,
            h = e.renderer,
            g = e.detachedMediaQuery,
            b = e.components,
            O = e.translations,
            _ = ur(e, nr),
            P = "undefined" != typeof window ? window : {},
            S = De(P, n);
          S.tagName;
          var j,
            w,
            I,
            A = null != h ? h : sr,
            E = {
              Highlight:
                ((j = A),
                (w = j.createElement),
                (I = j.Fragment),
                (e) => {
                  var t = e.hit,
                    r = e.attribute,
                    n = e.tagName,
                    o = void 0 === n ? "mark" : n;
                  return w(
                    I,
                    {},
                    Ut({ hit: t, attribute: r }).map((e, t) =>
                      e.isHighlighted ? w(o, { key: t }, e.value) : e.value
                    )
                  );
                }),
              ReverseHighlight: er(A),
              ReverseSnippet: tr(A),
              Snippet: rr(A),
            };
          return {
            renderer: {
              classNames: xe(cr, null != r ? r : {}),
              container: S,
              getEnvironmentProps: null != o ? o : (e) => e.props,
              getFormProps: null != i ? i : (e) => e.props,
              getInputProps: null != a ? a : (e) => e.props,
              getItemProps: null != c ? c : (e) => e.props,
              getLabelProps: null != l ? l : (e) => e.props,
              getListProps: null != s ? s : (e) => e.props,
              getPanelProps: null != p ? p : (e) => e.props,
              getRootProps: null != f ? f : (e) => e.props,
              panelContainer: y ? De(P, y) : P.document.body,
              panelPlacement: null != d ? d : "input-wrapper-width",
              render: null != m ? m : lr,
              renderNoResults: v,
              renderer: A,
              detachedMediaQuery:
                null != g
                  ? g
                  : getComputedStyle(
                      P.document.documentElement
                    ).getPropertyValue("--aa-detached-media-query"),
              components: ir(ir({}, E), b),
              translations: ir(
                ir(
                  {},
                  {
                    clearButtonTitle: "Clear",
                    detachedCancelButtonText: "Cancel",
                    submitButtonTitle: "Submit",
                  }
                ),
                O
              ),
            },
            core: ir(
              ir({}, _),
              {},
              {
                id: null !== (t = _.id) && void 0 !== t ? t : u(),
                environment: P,
              }
            ),
          };
        })(d.current)
      ),
      h = p(
        () =>
          v.value.core.environment.matchMedia(
            v.value.renderer.detachedMediaQuery
          ).matches
      ),
      g = p(() =>
        Ee(
          gr(
            gr({}, v.value.core),
            {},
            {
              onStateChange(e) {
                var t, r, n;
                (y.current = e.state.collections.some(
                  (e) => e.source.templates.noResults
                )),
                  null === (t = m.current) || void 0 === t || t.call(m, e),
                  null === (r = (n = v.value.core).onStateChange) ||
                    void 0 === r ||
                    r.call(n, e);
              },
              shouldPanelOpen:
                d.current.shouldPanelOpen ||
                ((e) => {
                  var t = e.state;
                  if (h.value) return !0;
                  var r = l(t) > 0;
                  if (!v.value.core.openOnFocus && !t.query) return r;
                  var n = Boolean(
                    y.current || v.value.renderer.renderNoResults
                  );
                  return (!r && n) || r;
                }),
              __autocomplete_metadata: { userAgents: vr, options: e },
            }
          )
        )
      ),
      b = n(
        gr(
          {
            collections: [],
            completion: null,
            context: {},
            isOpen: !1,
            query: "",
            activeItemId: null,
            status: "idle",
          },
          v.value.core.initialState
        )
      ),
      O = {
        getEnvironmentProps: v.value.renderer.getEnvironmentProps,
        getFormProps: v.value.renderer.getFormProps,
        getInputProps: v.value.renderer.getInputProps,
        getItemProps: v.value.renderer.getItemProps,
        getLabelProps: v.value.renderer.getLabelProps,
        getListProps: v.value.renderer.getListProps,
        getPanelProps: v.value.renderer.getPanelProps,
        getRootProps: v.value.renderer.getRootProps,
      },
      _ = {
        setActiveItemId: g.value.setActiveItemId,
        setQuery: g.value.setQuery,
        setCollections: g.value.setCollections,
        setIsOpen: g.value.setIsOpen,
        setStatus: g.value.setStatus,
        setContext: g.value.setContext,
        refresh: g.value.refresh,
      },
      P = p(() =>
        ot({
          autocomplete: g.value,
          autocompleteScopeApi: _,
          classNames: v.value.renderer.classNames,
          environment: v.value.core.environment,
          isDetached: h.value,
          placeholder: v.value.core.placeholder,
          propGetters: O,
          setIsModalOpen: I,
          state: b.current,
          translations: v.value.renderer.translations,
        })
      );
    function S() {
      qe(P.value.panel, {
        style: h.value
          ? {}
          : pr({
              panelPlacement: v.value.renderer.panelPlacement,
              container: P.value.root,
              form: P.value.form,
              environment: v.value.core.environment,
            }),
      });
    }
    function j(e) {
      b.current = e;
      var t = {
          autocomplete: g.value,
          autocompleteScopeApi: _,
          classNames: v.value.renderer.classNames,
          components: v.value.renderer.components,
          container: v.value.renderer.container,
          createElement: v.value.renderer.renderer.createElement,
          dom: P.value,
          Fragment: v.value.renderer.renderer.Fragment,
          panelContainer: h.value
            ? P.value.detachedContainer
            : v.value.renderer.panelContainer,
          propGetters: O,
          state: b.current,
        },
        r =
          (!l(e) && !y.current && v.value.renderer.renderNoResults) ||
          v.value.renderer.render;
      !((e) => {
        var t = e.autocomplete,
          r = e.autocompleteScopeApi,
          n = e.dom,
          o = e.propGetters,
          i = e.state;
        We(
          n.root,
          o.getRootProps(dr({ state: i, props: t.getRootProps({}) }, r))
        ),
          We(
            n.input,
            o.getInputProps(
              dr(
                {
                  state: i,
                  props: t.getInputProps({ inputElement: n.input }),
                  inputElement: n.input,
                },
                r
              )
            )
          ),
          qe(n.label, { hidden: "stalled" === i.status }),
          qe(n.loadingIndicator, { hidden: "stalled" !== i.status }),
          qe(n.clearButton, { hidden: !i.query });
      })(t),
        ((e, t) => {
          var r = t.autocomplete,
            n = t.autocompleteScopeApi,
            o = t.classNames,
            i = t.createElement,
            a = t.dom,
            u = t.Fragment,
            c = t.panelContainer,
            l = t.propGetters,
            s = t.state,
            p = t.components;
          if (s.isOpen) {
            c.contains(a.panel) ||
              "loading" === s.status ||
              c.appendChild(a.panel),
              a.panel.classList.toggle(
                "aa-Panel--stalled",
                "stalled" === s.status
              );
            var f = s.collections
                .filter((e) => {
                  var t = e.source,
                    r = e.items;
                  return t.templates.noResults || r.length > 0;
                })
                .map((e, t) => {
                  var a = e.source,
                    c = e.items;
                  return i(
                    "section",
                    {
                      key: t,
                      className: o.source,
                      "data-autocomplete-source-id": a.sourceId,
                    },
                    a.templates.header &&
                      i(
                        "div",
                        { className: o.sourceHeader },
                        a.templates.header({
                          components: p,
                          createElement: i,
                          Fragment: u,
                          items: c,
                          source: a,
                          state: s,
                        })
                      ),
                    a.templates.noResults && 0 === c.length
                      ? i(
                          "div",
                          { className: o.sourceNoResults },
                          a.templates.noResults({
                            components: p,
                            createElement: i,
                            Fragment: u,
                            source: a,
                            state: s,
                          })
                        )
                      : i(
                          "ul",
                          fr(
                            { className: o.list },
                            l.getListProps(
                              dr({ state: s, props: r.getListProps({}) }, n)
                            )
                          ),
                          c.map((e) => {
                            var t = r.getItemProps({ item: e, source: a });
                            return i(
                              "li",
                              fr(
                                { key: t.id, className: o.item },
                                l.getItemProps(dr({ state: s, props: t }, n))
                              ),
                              a.templates.item({
                                components: p,
                                createElement: i,
                                Fragment: u,
                                item: e,
                                state: s,
                              })
                            );
                          })
                        ),
                    a.templates.footer &&
                      i(
                        "div",
                        { className: o.sourceFooter },
                        a.templates.footer({
                          components: p,
                          createElement: i,
                          Fragment: u,
                          items: c,
                          source: a,
                          state: s,
                        })
                      )
                  );
                }),
              y = i(
                u,
                null,
                i("div", { className: o.panelLayout }, f),
                i("div", { className: "aa-GradientBottom" })
              ),
              d = f.reduce(
                (e, t) => ((e[t.props["data-autocomplete-source-id"]] = t), e),
                {}
              );
            e(
              dr(
                {
                  children: y,
                  state: s,
                  sections: f,
                  elements: d,
                  createElement: i,
                  Fragment: u,
                  components: p,
                },
                n
              ),
              a.panel
            );
          } else c.contains(a.panel) && c.removeChild(a.panel);
        })(r, t);
    }
    function w(...args) {
      var e = args.length > 0 && void 0 !== args[0] ? args[0] : {};
      a(),
        (d.current = Be(
          v.value.renderer,
          v.value.core,
          { initialState: b.current },
          e
        )),
        f(),
        c(),
        g.value.refresh().then(() => {
          j(b.current);
        });
    }
    function I(e) {
      requestAnimationFrame(() => {
        var t = v.value.core.environment.document.body.contains(
          P.value.detachedOverlay
        );
        e !== t &&
          (e
            ? (v.value.core.environment.document.body.appendChild(
                P.value.detachedOverlay
              ),
              v.value.core.environment.document.body.classList.add(
                "aa-Detached"
              ),
              P.value.input.focus())
            : (v.value.core.environment.document.body.removeChild(
                P.value.detachedOverlay
              ),
              v.value.core.environment.document.body.classList.remove(
                "aa-Detached"
              ),
              g.value.setQuery(""),
              g.value.refresh()));
      });
    }
    i(() => {
      var e = g.value.getEnvironmentProps({
        formElement: P.value.form,
        panelElement: P.value.panel,
        inputElement: P.value.input,
      });
      return (
        qe(v.value.core.environment, e),
        () => {
          qe(
            v.value.core.environment,
            Object.keys(e).reduce(
              (e, t) => gr(gr({}, e), {}, br({}, t, void 0)),
              {}
            )
          );
        }
      );
    }),
      i(() => {
        var e = h.value
            ? v.value.core.environment.document.body
            : v.value.renderer.panelContainer,
          t = h.value ? P.value.detachedOverlay : P.value.panel;
        return (
          h.value && b.current.isOpen && I(!0),
          j(b.current),
          () => {
            e.contains(t) && e.removeChild(t);
          }
        );
      }),
      i(() => {
        var e = v.value.renderer.container;
        return (
          e.appendChild(P.value.root),
          () => {
            e.removeChild(P.value.root);
          }
        );
      }),
      i(() => {
        var e = o((e) => {
          j(e.state);
        }, 0);
        return (
          (m.current = (t) => {
            var r = t.state,
              n = t.prevState;
            (h.value && n.isOpen !== r.isOpen && I(r.isOpen),
            h.value || !r.isOpen || n.isOpen || S(),
            r.query !== n.query) &&
              v.value.core.environment.document
                .querySelectorAll(".aa-Panel--scrollable")
                .forEach((e) => {
                  0 !== e.scrollTop && (e.scrollTop = 0);
                });
            e({ state: r });
          }),
          () => {
            m.current = void 0;
          }
        );
      }),
      i(() => {
        var e = o(() => {
          var e = h.value;
          (h.value = v.value.core.environment.matchMedia(
            v.value.renderer.detachedMediaQuery
          ).matches),
            e !== h.value ? w({}) : requestAnimationFrame(S);
        }, 20);
        return (
          v.value.core.environment.addEventListener("resize", e),
          () => {
            v.value.core.environment.removeEventListener("resize", e);
          }
        );
      }),
      i(() => {
        if (!h.value) return () => {};
        function e(e) {
          P.value.detachedContainer.classList.toggle(
            "aa-DetachedContainer--modal",
            e
          );
        }
        function t(t) {
          e(t.matches);
        }
        var r = v.value.core.environment.matchMedia(
          getComputedStyle(
            v.value.core.environment.document.documentElement
          ).getPropertyValue("--aa-detached-modal-media-query")
        );
        e(r.matches);
        var n = Boolean(r.addEventListener);
        return (
          n ? r.addEventListener("change", t) : r.addListener(t),
          () => {
            n ? r.removeEventListener("change", t) : r.removeListener(t);
          }
        );
      }),
      i(() => (requestAnimationFrame(S), () => {})),
      gr(
        gr({}, _),
        {},
        {
          update: w,
          destroy() {
            a();
          },
        }
      );
  })({
    container: "#autocomplete",
    placeholder: "Search repositories",
    plugins: [
      ((e = {}) => ({
        getSources({ query: t }) {
          const n = Zo.stringify({ ...e, q: t }),
            o = [ti, n].join("?");
          return ei(o)
            .then((e) => e.json())
            .then((e) => [
              {
                sourceId: "githubPlugin",
                getItems() {
                  return e.items || [];
                },
                getItemUrl({ item: e }) {
                  return e.html_url;
                },
                templates: {
                  item({ item: e }) {
                    const t = new Intl.NumberFormat("en-US").format(
                      e.stargazers_count
                    );
                    return r().h(
                      "div",
                      { className: "aa-ItemWrapper" },
                      r().h(
                        "div",
                        { className: "aa-ItemContent" },
                        r().h(
                          "div",
                          { className: "aa-ItemIcon aa-ItemIcon--alignTop" },
                          r().h("img", {
                            src: e.owner.avatar_url,
                            alt: e.full_name,
                            width: "40",
                            height: "40",
                          })
                        ),
                        r().h(
                          "div",
                          { className: "aa-ItemContentBody" },
                          r().h(
                            "div",
                            { className: "aa-ItemContentTitle" },
                            r().h(
                              "div",
                              { style: { display: "flex" } },
                              r().h(
                                "div",
                                { style: { fontWeight: 700 } },
                                e.full_name
                              ),
                              r().h(
                                "div",
                                {
                                  style: {
                                    alignItems: "center",
                                    display: "flex",
                                    marginLeft: "var(--aa-spacing-half)",
                                    position: "relative",
                                    top: "1px",
                                  },
                                },
                                r().h(
                                  "svg",
                                  {
                                    "aria-label": `${t} stars`,
                                    style: {
                                      display: "block",
                                      width: "calc(var(--aa-spacing-half) * 2)",
                                      height:
                                        "calc(var(--aa-spacing-half) * 2)",
                                      color: "#ffa724",
                                    },
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                  },
                                  r().h("path", {
                                    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z",
                                  })
                                ),
                                " ",
                                r().h(
                                  "span",
                                  {
                                    "aria-hidden": "true",
                                    style: {
                                      color: "var(--aa-content-text-color)",
                                      fontSize: "0.8em",
                                      lineHeight: "normal",
                                    },
                                  },
                                  t
                                )
                              )
                            )
                          ),
                          r().h(
                            "div",
                            { className: "aa-ItemContentDescription" },
                            e.description
                          )
                        )
                      ),
                      r().h(
                        "div",
                        { className: "aa-ItemActions" },
                        r().h(
                          "button",
                          {
                            className:
                              "aa-ItemActionButton aa-DesktopOnly aa-ActiveOnly",
                            type: "button",
                            title: "Select",
                            style: { pointerEvents: "none" },
                          },
                          r().h(
                            "svg",
                            {
                              viewBox: "0 0 24 24",
                              width: "20",
                              height: "20",
                              fill: "currentColor",
                            },
                            r().h("path", {
                              d: "M18.984 6.984h2.016v6h-15.188l3.609 3.609-1.406 1.406-6-6 6-6 1.406 1.406-3.609 3.609h13.172v-4.031z",
                            })
                          )
                        )
                      )
                    );
                  },
                },
              },
            ]);
        },
      }))({ per_page: 5 }),
    ],
  });
})();
//# sourceMappingURL=index.4759c485.js.map
