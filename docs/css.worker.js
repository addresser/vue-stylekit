!function(e) {
  var t = {};

  function n(r) {
    if (t[r]) return t[r].exports;
    var i = t[r] = { i: r, l: !1, exports: {} };
    return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  n.m = e, n.c = t, n.d = function(e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
  }, n.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) n.d(r, i, function(t) {
      return e[t];
    }.bind(null, i));
    return r;
  }, n.n = function(e) {
    var t = e && e.__esModule ? function() {
      return e.default;
    } : function() {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "/", n(n.s = 4);
}([function(e, t, n) {
  "use strict";
  (function(e, r) {
    var i;
    n.d(t, "a", function() {
      return o;
    }), function() {
      var t = Object.create(null);
      t["WinJS/Core/_WinJS"] = {};
      var n = function(e, n, r) {
        var i = {}, o = !1, s = n.map(function(e) {
          return "exports" === e ? (o = !0, i) : t[e];
        }), a = r.apply({}, s);
        t[e] = o ? i : a;
      };
      n("WinJS/Core/_Global", [], function() {
        return "undefined" != typeof window ? window : "undefined" != typeof self ? self : void 0 !== e ? e : {};
      }), n("WinJS/Core/_BaseCoreUtils", ["WinJS/Core/_Global"], function(e) {
        var t = null;
        return {
          hasWinRT: !!e.Windows, markSupportedForProcessing: function(e) {
            return e.supportedForProcessing = !0, e;
          }, _setImmediate: function(n) {
            null === t && (t = e.setImmediate ? e.setImmediate.bind(e) : void 0 !== r && "function" == typeof r.nextTick ? r.nextTick.bind(r) : e.setTimeout.bind(e)), t(n);
          }
        };
      }), n("WinJS/Core/_WriteProfilerMark", ["WinJS/Core/_Global"], function(e) {
        return e.msWriteProfilerMark || function() {
        };
      }), n("WinJS/Core/_Base", ["WinJS/Core/_WinJS", "WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_WriteProfilerMark"], function(e, t, n, r) {
        function i(e, t, n) {
          var r, i, o, s = Object.keys(t), a = Array.isArray(e);
          for (i = 0, o = s.length; i < o; i++) {
            var l = s[i], c = 95 !== l.charCodeAt(0), h = t[l];
            !h || "object" != typeof h || void 0 === h.value && "function" != typeof h.get && "function" != typeof h.set ? c ? a ? e.forEach(function(e) {
              e[l] = h;
            }) : e[l] = h : (r = r || {})[l] = {
              value: h,
              enumerable: c,
              configurable: !0,
              writable: !0
            } : (void 0 === h.enumerable && (h.enumerable = c), n && h.setName && "function" == typeof h.setName && h.setName(n + "." + l), (r = r || {})[l] = h);
          }
          r && (a ? e.forEach(function(e) {
            Object.defineProperties(e, r);
          }) : Object.defineProperties(e, r));
        }

        return function() {
          var n = e;

          function o(n, r) {
            var i = n || {};
            if (r) {
              var o = r.split(".");
              i === t && "WinJS" === o[0] && (i = e, o.splice(0, 1));
              for (var s = 0, a = o.length; s < a; s++) {
                var l = o[s];
                i[l] || Object.defineProperty(i, l, {
                  value: {},
                  writable: !1,
                  enumerable: !0,
                  configurable: !0
                }), i = i[l];
              }
            }
            return i;
          }

          function s(e, t, n) {
            var r = o(e, t);
            return n && i(r, n, t || "<ANONYMOUS>"), r;
          }

          n.Namespace || (n.Namespace = Object.create(Object.prototype));
          var a = { uninitialized: 1, working: 2, initialized: 3 };
          Object.defineProperties(n.Namespace, {
            defineWithParent: {
              value: s,
              writable: !0,
              enumerable: !0,
              configurable: !0
            }, define: {
              value: function(e, n) {
                return s(t, e, n);
              }, writable: !0, enumerable: !0, configurable: !0
            }, _lazy: {
              value: function(e) {
                var t, n, i = a.uninitialized;
                return {
                  setName: function(e) {
                    t = e;
                  }, get: function() {
                    switch (i) {
                      case a.initialized:
                        return n;
                      case a.uninitialized:
                        i = a.working;
                        try {
                          r("WinJS.Namespace._lazy:" + t + ",StartTM"), n = e();
                        } finally {
                          r("WinJS.Namespace._lazy:" + t + ",StopTM"), i = a.uninitialized;
                        }
                        return e = null, i = a.initialized, n;
                      case a.working:
                        throw"Illegal: reentrancy on initialization";
                      default:
                        throw"Illegal";
                    }
                  }, set: function(e) {
                    switch (i) {
                      case a.working:
                        throw"Illegal: reentrancy on initialization";
                      default:
                        i = a.initialized, n = e;
                    }
                  }, enumerable: !0, configurable: !0
                };
              }, writable: !0, enumerable: !0, configurable: !0
            }, _moduleDefine: {
              value: function(e, n, r) {
                var s = [e], a = null;
                return n && (a = o(t, n), s.push(a)), i(s, r, n || "<ANONYMOUS>"), a;
              }, writable: !0, enumerable: !0, configurable: !0
            }
          });
        }(), function() {
          function t(e, t, r) {
            return e = e || function() {
            }, n.markSupportedForProcessing(e), t && i(e.prototype, t), r && i(e, r), e;
          }

          e.Namespace.define("WinJS.Class", {
            define: t, derive: function(e, r, o, s) {
              if (e) {
                r = r || function() {
                };
                var a = e.prototype;
                return r.prototype = Object.create(a), n.markSupportedForProcessing(r), Object.defineProperty(r.prototype, "constructor", {
                  value: r,
                  writable: !0,
                  configurable: !0,
                  enumerable: !0
                }), o && i(r.prototype, o), s && i(r, s), r;
              }
              return t(r, o, s);
            }, mix: function(e) {
              var t, n;
              for (e = e || function() {
              }, t = 1, n = arguments.length; t < n; t++) i(e.prototype, arguments[t]);
              return e;
            }
          });
        }(), { Namespace: e.Namespace, Class: e.Class };
      }), n("WinJS/Core/_ErrorFromName", ["WinJS/Core/_Base"], function(e) {
        var t = e.Class.derive(Error, function(e, t) {
          this.name = e, this.message = t || e;
        }, {}, { supportedForProcessing: !1 });
        return e.Namespace.define("WinJS", { ErrorFromName: t }), t;
      }), n("WinJS/Core/_Events", ["exports", "WinJS/Core/_Base"], function(e, t) {
        function n(e) {
          var t = "_on" + e + "state";
          return {
            get: function() {
              var e = this[t];
              return e && e.userHandler;
            }, set: function(n) {
              var r = this[t];
              n ? (r || (r = {
                wrapper: function(e) {
                  return r.userHandler(e);
                }, userHandler: n
              }, Object.defineProperty(this, t, {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0
              }), this.addEventListener(e, r.wrapper, !1)), r.userHandler = n) : r && (this.removeEventListener(e, r.wrapper, !1), this[t] = null);
            }, enumerable: !0
          };
        }

        var r = t.Class.define(function(e, t, n) {
          this.detail = t, this.target = n, this.timeStamp = Date.now(), this.type = e;
        }, {
          bubbles: { value: !1, writable: !1 },
          cancelable: { value: !1, writable: !1 },
          currentTarget: {
            get: function() {
              return this.target;
            }
          },
          defaultPrevented: {
            get: function() {
              return this._preventDefaultCalled;
            }
          },
          trusted: { value: !1, writable: !1 },
          eventPhase: { value: 0, writable: !1 },
          target: null,
          timeStamp: null,
          type: null,
          preventDefault: function() {
            this._preventDefaultCalled = !0;
          },
          stopImmediatePropagation: function() {
            this._stopImmediatePropagationCalled = !0;
          },
          stopPropagation: function() {
          }
        }, { supportedForProcessing: !1 }), i = {
          _listeners: null, addEventListener: function(e, t, n) {
            n = n || !1, this._listeners = this._listeners || {};
            for (var r = this._listeners[e] = this._listeners[e] || [], i = 0, o = r.length; i < o; i++) {
              var s = r[i];
              if (s.useCapture === n && s.listener === t) return;
            }
            r.push({ listener: t, useCapture: n });
          }, dispatchEvent: function(e, t) {
            var n = this._listeners && this._listeners[e];
            if (n) {
              for (var i = new r(e, t, this), o = 0, s = (n = n.slice(0, n.length)).length; o < s && !i._stopImmediatePropagationCalled; o++) n[o].listener(i);
              return i.defaultPrevented || !1;
            }
            return !1;
          }, removeEventListener: function(e, t, n) {
            n = n || !1;
            var r = this._listeners && this._listeners[e];
            if (r) for (var i = 0, o = r.length; i < o; i++) {
              var s = r[i];
              if (s.listener === t && s.useCapture === n) {
                r.splice(i, 1), 0 === r.length && delete this._listeners[e];
                break;
              }
            }
          }
        };
        t.Namespace._moduleDefine(e, "WinJS.Utilities", {
          _createEventProperty: n, createEventProperties: function() {
            for (var e = {}, t = 0, r = arguments.length; t < r; t++) {
              var i = arguments[t];
              e["on" + i] = n(i);
            }
            return e;
          }, eventMixin: i
        });
      }), n("WinJS/Core/_Trace", ["WinJS/Core/_Global"], function(e) {
        function t(e) {
          return e;
        }

        return {
          _traceAsyncOperationStarting: e.Debug && e.Debug.msTraceAsyncOperationStarting && e.Debug.msTraceAsyncOperationStarting.bind(e.Debug) || t,
          _traceAsyncOperationCompleted: e.Debug && e.Debug.msTraceAsyncOperationCompleted && e.Debug.msTraceAsyncOperationCompleted.bind(e.Debug) || t,
          _traceAsyncCallbackStarting: e.Debug && e.Debug.msTraceAsyncCallbackStarting && e.Debug.msTraceAsyncCallbackStarting.bind(e.Debug) || t,
          _traceAsyncCallbackCompleted: e.Debug && e.Debug.msTraceAsyncCallbackCompleted && e.Debug.msTraceAsyncCallbackCompleted.bind(e.Debug) || t
        };
      }), n("WinJS/Promise/_StateMachine", ["WinJS/Core/_Global", "WinJS/Core/_BaseCoreUtils", "WinJS/Core/_Base", "WinJS/Core/_ErrorFromName", "WinJS/Core/_Events", "WinJS/Core/_Trace"], function(e, t, n, r, i, o) {
        e.Debug && (e.Debug.setNonUserCodeExceptions = !0);
        var s = new (n.Class.mix(n.Class.define(null, {}, { supportedForProcessing: !1 }), i.eventMixin));
        s._listeners = {};
        var a = "error", l = "Canceled", c = !1,
          h = { promise: 1, thenPromise: 2, errorPromise: 4, exceptionPromise: 8, completePromise: 16 };
        h.all = h.promise | h.thenPromise | h.errorPromise | h.exceptionPromise | h.completePromise;
        var d, u, m, p, f, g, b, y, w, v, x = 1;

        function k() {
        }

        d = {
          name: "created",
          enter: function(e) {
            e._setState(u);
          },
          cancel: k,
          done: k,
          then: k,
          _completed: k,
          _error: k,
          _notify: k,
          _progress: k,
          _setCompleteValue: k,
          _setErrorValue: k
        }, u = {
          name: "working",
          enter: k,
          cancel: function(e) {
            e._setState(f);
          },
          done: A,
          then: j,
          _completed: S,
          _error: P,
          _notify: k,
          _progress: D,
          _setCompleteValue: M,
          _setErrorValue: U
        }, m = {
          name: "waiting",
          enter: function(e) {
            var t = e._value;
            if (t instanceof B && t._state !== v && t._state !== y) N(t, { promise: e }); else {
              var n = function(r) {
                t._errorId ? e._chainedError(r, t) : (L(e, r, F, t, n), e._error(r));
              };
              n.handlesOnError = !0, t.then(e._completed.bind(e), n, e._progress.bind(e));
            }
          },
          cancel: function(e) {
            e._setState(p);
          },
          done: A,
          then: j,
          _completed: S,
          _error: P,
          _notify: k,
          _progress: D,
          _setCompleteValue: M,
          _setErrorValue: U
        }, p = {
          name: "waiting_canceled",
          enter: function(e) {
            e._setState(g);
            var t = e._value;
            t.cancel && t.cancel();
          },
          cancel: k,
          done: A,
          then: j,
          _completed: S,
          _error: P,
          _notify: k,
          _progress: D,
          _setCompleteValue: M,
          _setErrorValue: U
        }, f = {
          name: "canceled",
          enter: function(e) {
            e._setState(g), e._cancelAction();
          },
          cancel: k,
          done: A,
          then: j,
          _completed: S,
          _error: P,
          _notify: k,
          _progress: D,
          _setCompleteValue: M,
          _setErrorValue: U
        }, g = {
          name: "canceling",
          enter: function(e) {
            var t = new Error(l);
            t.name = t.message, e._value = t, e._setState(w);
          },
          cancel: k,
          done: k,
          then: k,
          _completed: k,
          _error: k,
          _notify: k,
          _progress: k,
          _setCompleteValue: k,
          _setErrorValue: k
        }, b = {
          name: "complete_notify",
          enter: function(e) {
            if (e.done = W.prototype.done, e.then = W.prototype.then, e._listeners) for (var t, n = [e]; n.length;) (t = n.shift())._state._notify(t, n);
            e._setState(y);
          },
          cancel: k,
          done: null,
          then: null,
          _completed: k,
          _error: k,
          _notify: O,
          _progress: k,
          _setCompleteValue: k,
          _setErrorValue: k
        }, y = {
          name: "success",
          enter: function(e) {
            e.done = W.prototype.done, e.then = W.prototype.then, e._cleanupAction();
          },
          cancel: k,
          done: null,
          then: null,
          _completed: k,
          _error: k,
          _notify: O,
          _progress: k,
          _setCompleteValue: k,
          _setErrorValue: k
        }, w = {
          name: "error_notify",
          enter: function(e) {
            if (e.done = K.prototype.done, e.then = K.prototype.then, e._listeners) for (var t, n = [e]; n.length;) (t = n.shift())._state._notify(t, n);
            e._setState(v);
          },
          cancel: k,
          done: null,
          then: null,
          _completed: k,
          _error: k,
          _notify: z,
          _progress: k,
          _setCompleteValue: k,
          _setErrorValue: k
        }, v = {
          name: "error",
          enter: function(e) {
            e.done = K.prototype.done, e.then = K.prototype.then, e._cleanupAction();
          },
          cancel: k,
          done: null,
          then: null,
          _completed: k,
          _error: k,
          _notify: z,
          _progress: k,
          _setCompleteValue: k,
          _setErrorValue: k
        };
        var C = n.Class.define(null, {
          _listeners: null,
          _nextState: null,
          _state: null,
          _value: null,
          cancel: function() {
            this._state.cancel(this), this._run();
          },
          done: function(e, t, n) {
            this._state.done(this, e, t, n);
          },
          then: function e(t, n, r) {
            if (this.then === e) return this._state.then(this, t, n, r);
            this.then(t, n, r);
          },
          _chainedError: function(e, t) {
            var n = this._state._error(this, e, E, t);
            return this._run(), n;
          },
          _completed: function(e) {
            var t = this._state._completed(this, e);
            return this._run(), t;
          },
          _error: function(e) {
            var t = this._state._error(this, e, T);
            return this._run(), t;
          },
          _progress: function(e) {
            this._state._progress(this, e);
          },
          _setState: function(e) {
            this._nextState = e;
          },
          _setCompleteValue: function(e) {
            this._state._setCompleteValue(this, e), this._run();
          },
          _setChainedErrorValue: function(e, t) {
            var n = this._state._setErrorValue(this, e, E, t);
            return this._run(), n;
          },
          _setExceptionValue: function(e) {
            var t = this._state._setErrorValue(this, e, I);
            return this._run(), t;
          },
          _run: function() {
            for (; this._nextState;) this._state = this._nextState, this._nextState = null, this._state.enter(this);
          }
        }, { supportedForProcessing: !1 });

        function S(e, t) {
          var n;
          n = t && "object" == typeof t && "function" == typeof t.then ? m : b, e._value = t, e._setState(n);
        }

        function _(e, t, n, r, i, o) {
          return { exception: e, error: t, promise: n, handler: o, id: r, parent: i };
        }

        function F(e, t, n, r) {
          var i = n._isException, o = n._errorId;
          return _(i ? t : null, i ? null : t, e, o, n, r);
        }

        function E(e, t, n) {
          var r = n._isException, i = n._errorId;
          return R(e, i, r), _(r ? t : null, r ? null : t, e, i, n);
        }

        function T(e, t) {
          var n = ++x;
          return R(e, n), _(null, t, e, n);
        }

        function I(e, t) {
          var n = ++x;
          return R(e, n, !0), _(t, null, e, n);
        }

        function A(e, t, n, r) {
          N(e, { c: t, e: n, p: r, asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.done") });
        }

        function P(e, t, n, r) {
          e._value = t, L(e, t, n, r), e._setState(w);
        }

        function O(t, n) {
          var r, i, s = t._value, a = t._listeners;
          if (a) for (t._listeners = null, r = 0, i = Array.isArray(a) ? a.length : 1; r < i; r++) {
            var l = 1 === i ? a : a[r], c = l.c, h = l.promise;
            if (o._traceAsyncOperationCompleted(l.asyncOpID, e.Debug && e.Debug.MS_ASYNC_OP_STATUS_SUCCESS), h) {
              o._traceAsyncCallbackStarting(l.asyncOpID);
              try {
                h._setCompleteValue(c ? c(s) : s);
              } catch (e) {
                h._setExceptionValue(e);
              } finally {
                o._traceAsyncCallbackCompleted();
              }
              h._state !== m && h._listeners && n.push(h);
            } else W.prototype.done.call(t, c);
          }
        }

        function z(t, n) {
          var r, i, s = t._value, a = t._listeners;
          if (a) for (t._listeners = null, r = 0, i = Array.isArray(a) ? a.length : 1; r < i; r++) {
            var c = 1 === i ? a : a[r], h = c.e, d = c.promise,
              u = e.Debug && (s && s.name === l ? e.Debug.MS_ASYNC_OP_STATUS_CANCELED : e.Debug.MS_ASYNC_OP_STATUS_ERROR);
            if (o._traceAsyncOperationCompleted(c.asyncOpID, u), d) {
              var p = !1;
              try {
                h ? (o._traceAsyncCallbackStarting(c.asyncOpID), p = !0, h.handlesOnError || L(d, s, F, t, h), d._setCompleteValue(h(s))) : d._setChainedErrorValue(s, t);
              } catch (e) {
                d._setExceptionValue(e);
              } finally {
                p && o._traceAsyncCallbackCompleted();
              }
              d._state !== m && d._listeners && n.push(d);
            } else K.prototype.done.call(t, null, h);
          }
        }

        function L(e, t, n, r, i) {
          if (s._listeners[a]) {
            if (t instanceof Error && t.message === l) return;
            s.dispatchEvent(a, n(e, t, r, i));
          }
        }

        function D(e, t) {
          var n, r, i = e._listeners;
          if (i) for (n = 0, r = Array.isArray(i) ? i.length : 1; n < r; n++) {
            var o = 1 === r ? i : i[n], s = o.p;
            if (s) try {
              s(t);
            } catch (e) {
            }
            o.c || o.e || !o.promise || o.promise._progress(t);
          }
        }

        function N(e, t) {
          var n = e._listeners;
          n ? (n = Array.isArray(n) ? n : [n]).push(t) : n = t, e._listeners = n;
        }

        function R(e, t, n) {
          e._isException = n || !1, e._errorId = t;
        }

        function U(e, t, n, r) {
          e._value = t, L(e, t, n, r), e._setState(v);
        }

        function M(e, t) {
          var n;
          n = t && "object" == typeof t && "function" == typeof t.then ? m : y, e._value = t, e._setState(n);
        }

        function j(e, t, n, r) {
          var i = new B(e);
          return N(e, {
            promise: i,
            c: t,
            e: n,
            p: r,
            asyncOpID: o._traceAsyncOperationStarting("WinJS.Promise.then")
          }), i;
        }

        var V, B = n.Class.derive(C, function(e) {
          c && (!0 === c || c & h.thenPromise) && (this._stack = $._getStack()), this._creator = e, this._setState(d), this._run();
        }, {
          _creator: null, _cancelAction: function() {
            this._creator && this._creator.cancel();
          }, _cleanupAction: function() {
            this._creator = null;
          }
        }, { supportedForProcessing: !1 }), K = n.Class.define(function(e) {
          c && (!0 === c || c & h.errorPromise) && (this._stack = $._getStack()), this._value = e, L(this, e, T);
        }, {
          cancel: function() {
          }, done: function(e, t) {
            var n = this._value;
            if (t) try {
              t.handlesOnError || L(null, n, F, this, t);
              var r = t(n);
              return void(r && "object" == typeof r && "function" == typeof r.done && r.done());
            } catch (e) {
              n = e;
            }
            n instanceof Error && n.message === l || $._doneHandler(n);
          }, then: function(e, t) {
            if (!t) return this;
            var n, r = this._value;
            try {
              t.handlesOnError || L(null, r, F, this, t), n = new W(t(r));
            } catch (e) {
              n = e === r ? this : new q(e);
            }
            return n;
          }
        }, { supportedForProcessing: !1 }), q = n.Class.derive(K, function(e) {
          c && (!0 === c || c & h.exceptionPromise) && (this._stack = $._getStack()), this._value = e, L(this, e, I);
        }, {}, { supportedForProcessing: !1 }), W = n.Class.define(function(e) {
          if (c && (!0 === c || c & h.completePromise) && (this._stack = $._getStack()), e && "object" == typeof e && "function" == typeof e.then) {
            var t = new B(null);
            return t._setCompleteValue(e), t;
          }
          this._value = e;
        }, {
          cancel: function() {
          }, done: function(e) {
            if (e) try {
              var t = e(this._value);
              t && "object" == typeof t && "function" == typeof t.done && t.done();
            } catch (e) {
              $._doneHandler(e);
            }
          }, then: function(e) {
            try {
              var t = e ? e(this._value) : this._value;
              return t === this._value ? this : new W(t);
            } catch (e) {
              return new q(e);
            }
          }
        }, { supportedForProcessing: !1 });
        var $ = n.Class.derive(C, function(e, t) {
          c && (!0 === c || c & h.promise) && (this._stack = $._getStack()), this._oncancel = t, this._setState(d), this._run();
          try {
            e(this._completed.bind(this), this._error.bind(this), this._progress.bind(this));
          } catch (e) {
            this._setExceptionValue(e);
          }
        }, {
          _oncancel: null, _cancelAction: function() {
            try {
              if (!this._oncancel) throw new Error("Promise did not implement oncancel");
              this._oncancel();
            } catch (e) {
              e.message, e.stack;
              s.dispatchEvent("error", e);
            }
          }, _cleanupAction: function() {
            this._oncancel = null;
          }
        }, {
          addEventListener: function(e, t, n) {
            s.addEventListener(e, t, n);
          }, any: function(e) {
            return new $(function(t, n) {
              var r = Object.keys(e);
              0 === r.length && t();
              var i = 0;
              r.forEach(function(o) {
                $.as(e[o]).then(function() {
                  t({ key: o, value: e[o] });
                }, function(s) {
                  s instanceof Error && s.name === l ? ++i === r.length && t($.cancel) : n({ key: o, value: e[o] });
                });
              });
            }, function() {
              Object.keys(e).forEach(function(t) {
                var n = $.as(e[t]);
                "function" == typeof n.cancel && n.cancel();
              });
            });
          }, as: function(e) {
            return e && "object" == typeof e && "function" == typeof e.then ? e : new W(e);
          }, cancel: {
            get: function() {
              return V = V || new K(new r(l));
            }
          }, dispatchEvent: function(e, t) {
            return s.dispatchEvent(e, t);
          }, is: function(e) {
            return e && "object" == typeof e && "function" == typeof e.then;
          }, join: function(e) {
            return new $(function(t, n, r) {
              var i = Object.keys(e), o = Array.isArray(e) ? [] : {}, s = Array.isArray(e) ? [] : {}, a = 0,
                c = i.length, h = function(e) {
                  if (0 == --c) {
                    var a = Object.keys(o).length;
                    if (0 === a) t(s); else {
                      var h = 0;
                      i.forEach(function(e) {
                        var t = o[e];
                        t instanceof Error && t.name === l && h++;
                      }), h === a ? t($.cancel) : n(o);
                    }
                  } else r({ Key: e, Done: !0 });
                };
              i.forEach(function(t) {
                var n = e[t];
                void 0 === n ? a++ : $.then(n, function(e) {
                  s[t] = e, h(t);
                }, function(e) {
                  o[t] = e, h(t);
                });
              }), 0 !== (c -= a) || t(s);
            }, function() {
              Object.keys(e).forEach(function(t) {
                var n = $.as(e[t]);
                "function" == typeof n.cancel && n.cancel();
              });
            });
          }, removeEventListener: function(e, t, n) {
            s.removeEventListener(e, t, n);
          }, supportedForProcessing: !1, then: function(e, t, n, r) {
            return $.as(e).then(t, n, r);
          }, thenEach: function(e, t, n, r) {
            var i = Array.isArray(e) ? [] : {};
            return Object.keys(e).forEach(function(o) {
              i[o] = $.as(e[o]).then(t, n, r);
            }), $.join(i);
          }, timeout: function(n, r) {
            var i = function(n) {
              var r;
              return new $(function(i) {
                n ? r = e.setTimeout(i, n) : t._setImmediate(i);
              }, function() {
                r && e.clearTimeout(r);
              });
            }(n);
            return r ? function(e, t) {
              var n = function() {
                e.cancel();
              };
              return e.then(function() {
                t.cancel();
              }), t.then(n, n), t;
            }(i, r) : i;
          }, wrap: function(e) {
            return new W(e);
          }, wrapError: function(e) {
            return new K(e);
          }, _veryExpensiveTagWithStack: {
            get: function() {
              return c;
            }, set: function(e) {
              c = e;
            }
          }, _veryExpensiveTagWithStack_tag: h, _getStack: function() {
            if (e.Debug && e.Debug.debuggerEnabled) try {
              throw new Error;
            } catch (e) {
              return e.stack;
            }
          }, _cancelBlocker: function(e, t) {
            if (!$.is(e)) return $.wrap(e);
            var n, r, i = new $(function(e, t) {
              n = e, r = t;
            }, function() {
              n = null, r = null, t && t();
            });
            return e.then(function(e) {
              n && n(e);
            }, function(e) {
              r && r(e);
            }), i;
          }
        });
        return Object.defineProperties($, i.createEventProperties(a)), $._doneHandler = function(e) {
          t._setImmediate(function() {
            throw e;
          });
        }, { PromiseStateMachine: C, Promise: $, state_created: d };
      }), n("WinJS/Promise", ["WinJS/Core/_Base", "WinJS/Promise/_StateMachine"], function(e, t) {
        return e.Namespace.define("WinJS", { Promise: t.Promise }), t.Promise;
      }), (i = t["WinJS/Core/_WinJS"]).TPromise = i.Promise, i.PPromise = i.Promise;
    }();
    i.Promise;
    var o = i.TPromise;
    i.PPromise;
  }).call(this, n(3), n(2));
}, function(e, t, n) {
  "use strict";
  (function(e, r) {
    n.d(t, "c", function() {
      return p;
    }), n.d(t, "b", function() {
      return f;
    }), n.d(t, "a", function() {
      return g;
    });
    var i, o = !1, s = !1, a = !1, l = !1, c = !1;
    if ("object" == typeof e && "function" == typeof e.nextTick && "string" == typeof e.platform) {
      o = "win32" === e.platform, s = "darwin" === e.platform, a = "linux" === e.platform, "en", "en";
      var h = e.env.VSCODE_NLS_CONFIG;
      if (h) try {
        var d = JSON.parse(h), u = d.availableLanguages["*"];
        d.locale, u || "en", d._translationsConfigFile;
      } catch (e) {
      }
      l = !0;
    } else if ("object" == typeof navigator) {
      var m = navigator.userAgent;
      o = m.indexOf("Windows") >= 0, s = m.indexOf("Macintosh") >= 0, a = m.indexOf("Linux") >= 0, c = !0, navigator.language;
    }
    !function(e) {
      e[e.Web = 0] = "Web", e[e.Mac = 1] = "Mac", e[e.Linux = 2] = "Linux", e[e.Windows = 3] = "Windows";
    }(i || (i = {}));
    i.Web;
    l && (s ? i.Mac : o ? i.Windows : a && i.Linux);
    var p = o, f = c, g = "object" == typeof self ? self : "object" == typeof r ? r : {};
  }).call(this, n(2), n(3));
}, function(e, t) {
  var n, r, i = e.exports = {};

  function o() {
    throw new Error("setTimeout has not been defined");
  }

  function s() {
    throw new Error("clearTimeout has not been defined");
  }

  function a(e) {
    if (n === setTimeout) return setTimeout(e, 0);
    if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
    try {
      return n(e, 0);
    } catch (t) {
      try {
        return n.call(null, e, 0);
      } catch (t) {
        return n.call(this, e, 0);
      }
    }
  }

  !function() {
    try {
      n = "function" == typeof setTimeout ? setTimeout : o;
    } catch (e) {
      n = o;
    }
    try {
      r = "function" == typeof clearTimeout ? clearTimeout : s;
    } catch (e) {
      r = s;
    }
  }();
  var l, c = [], h = !1, d = -1;

  function u() {
    h && l && (h = !1, l.length ? c = l.concat(c) : d = -1, c.length && m());
  }

  function m() {
    if (!h) {
      var e = a(u);
      h = !0;
      for (var t = c.length; t;) {
        for (l = c, c = []; ++d < t;) l && l[d].run();
        d = -1, t = c.length;
      }
      l = null, h = !1, function(e) {
        if (r === clearTimeout) return clearTimeout(e);
        if ((r === s || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
        try {
          r(e);
        } catch (t) {
          try {
            return r.call(null, e);
          } catch (t) {
            return r.call(this, e);
          }
        }
      }(e);
    }
  }

  function p(e, t) {
    this.fun = e, this.array = t;
  }

  function f() {
  }

  i.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    c.push(new p(e, t)), 1 !== c.length || h || a(m);
  }, p.prototype.run = function() {
    this.fun.apply(null, this.array);
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = f, i.addListener = f, i.once = f, i.off = f, i.removeListener = f, i.removeAllListeners = f, i.emit = f, i.prependListener = f, i.prependOnceListener = f, i.listeners = function(e) {
    return [];
  }, i.binding = function(e) {
    throw new Error("process.binding is not supported");
  }, i.cwd = function() {
    return "/";
  }, i.chdir = function(e) {
    throw new Error("process.chdir is not supported");
  }, i.umask = function() {
    return 0;
  };
}, function(e, t) {
  var n;
  n = function() {
    return this;
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this");
  } catch (e) {
    "object" == typeof window && (n = window);
  }
  e.exports = n;
}, function(e, t, n) {
  "use strict";
  n.r(t);
  var r, i = n(1), o = function() {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
      e.__proto__ = t;
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    return function(t, n) {
      function r() {
        this.constructor = t;
      }

      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
    };
  }(), s = /^\w[\w\d+.-]*$/, a = /^\//, l = /^\/\//;
  var c = "", h = "/", d = /^(([^:/?#]+?):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/, u = function() {
      function e(e, t, n, r, i) {
        "object" == typeof e ? (this.scheme = e.scheme || c, this.authority = e.authority || c, this.path = e.path || c, this.query = e.query || c, this.fragment = e.fragment || c) : (this.scheme = e || c, this.authority = t || c, this.path = function(e, t) {
          switch (e) {
            case"https":
            case"http":
            case"file":
              t ? t[0] !== h && (t = h + t) : t = h;
          }
          return t;
        }(this.scheme, n || c), this.query = r || c, this.fragment = i || c, function(e) {
          if (e.scheme && !s.test(e.scheme)) throw new Error("[UriError]: Scheme contains illegal characters.");
          if (e.path) if (e.authority) {
            if (!a.test(e.path)) throw new Error("[UriError]: If a URI contains an authority component, then the path component must either be empty or begin with a slash (\"/\") character");
          } else if (l.test(e.path)) throw new Error("[UriError]: If a URI does not contain an authority component, then the path cannot begin with two slash characters (\"//\")");
        }(this));
      }

      return e.isUri = function(t) {
        return t instanceof e || !!t && ("string" == typeof t.authority && "string" == typeof t.fragment && "string" == typeof t.path && "string" == typeof t.query && "string" == typeof t.scheme);
      }, Object.defineProperty(e.prototype, "fsPath", {
        get: function() {
          return y(this);
        }, enumerable: !0, configurable: !0
      }), e.prototype.with = function(e) {
        if (!e) return this;
        var t = e.scheme, n = e.authority, r = e.path, i = e.query, o = e.fragment;
        return void 0 === t ? t = this.scheme : null === t && (t = c), void 0 === n ? n = this.authority : null === n && (n = c), void 0 === r ? r = this.path : null === r && (r = c), void 0 === i ? i = this.query : null === i && (i = c), void 0 === o ? o = this.fragment : null === o && (o = c), t === this.scheme && n === this.authority && r === this.path && i === this.query && o === this.fragment ? this : new p(t, n, r, i, o);
      }, e.parse = function(e) {
        var t = d.exec(e);
        return t ? new p(t[2] || c, decodeURIComponent(t[4] || c), decodeURIComponent(t[5] || c), decodeURIComponent(t[7] || c), decodeURIComponent(t[9] || c)) : new p(c, c, c, c, c);
      }, e.file = function(e) {
        var t = c;
        if (i.c && (e = e.replace(/\\/g, h)), e[0] === h && e[1] === h) {
          var n = e.indexOf(h, 2);
          -1 === n ? (t = e.substring(2), e = h) : (t = e.substring(2, n), e = e.substring(n) || h);
        }
        return new p("file", t, e, c, c);
      }, e.from = function(e) {
        return new p(e.scheme, e.authority, e.path, e.query, e.fragment);
      }, e.prototype.toString = function(e) {
        return void 0 === e && (e = !1), w(this, e);
      }, e.prototype.toJSON = function() {
        return this;
      }, e.revive = function(t) {
        if (t) {
          if (t instanceof e) return t;
          var n = new p(t);
          return n._fsPath = t.fsPath, n._formatted = t.external, n;
        }
        return t;
      }, e;
    }(), m = u, p = function(e) {
      function t() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t._formatted = null, t._fsPath = null, t;
      }

      return o(t, e), Object.defineProperty(t.prototype, "fsPath", {
        get: function() {
          return this._fsPath || (this._fsPath = y(this)), this._fsPath;
        }, enumerable: !0, configurable: !0
      }), t.prototype.toString = function(e) {
        return void 0 === e && (e = !1), e ? w(this, !0) : (this._formatted || (this._formatted = w(this, !1)), this._formatted);
      }, t.prototype.toJSON = function() {
        var e = { $mid: 1 };
        return this._fsPath && (e.fsPath = this._fsPath), this._formatted && (e.external = this._formatted), this.path && (e.path = this.path), this.scheme && (e.scheme = this.scheme), this.authority && (e.authority = this.authority), this.query && (e.query = this.query), this.fragment && (e.fragment = this.fragment), e;
      }, t;
    }(u),
    f = ((r = {})[58] = "%3A", r[47] = "%2F", r[63] = "%3F", r[35] = "%23", r[91] = "%5B", r[93] = "%5D", r[64] = "%40", r[33] = "%21", r[36] = "%24", r[38] = "%26", r[39] = "%27", r[40] = "%28", r[41] = "%29", r[42] = "%2A", r[43] = "%2B", r[44] = "%2C", r[59] = "%3B", r[61] = "%3D", r[32] = "%20", r);

  function g(e, t) {
    for (var n = void 0, r = -1, i = 0; i < e.length; i++) {
      var o = e.charCodeAt(i);
      if (o >= 97 && o <= 122 || o >= 65 && o <= 90 || o >= 48 && o <= 57 || 45 === o || 46 === o || 95 === o || 126 === o || t && 47 === o) -1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), void 0 !== n && (n += e.charAt(i)); else {
        void 0 === n && (n = e.substr(0, i));
        var s = f[o];
        void 0 !== s ? (-1 !== r && (n += encodeURIComponent(e.substring(r, i)), r = -1), n += s) : -1 === r && (r = i);
      }
    }
    return -1 !== r && (n += encodeURIComponent(e.substring(r))), void 0 !== n ? n : e;
  }

  function b(e) {
    for (var t = void 0, n = 0; n < e.length; n++) {
      var r = e.charCodeAt(n);
      35 === r || 63 === r ? (void 0 === t && (t = e.substr(0, n)), t += f[r]) : void 0 !== t && (t += e[n]);
    }
    return void 0 !== t ? t : e;
  }

  function y(e) {
    var t;
    return t = e.authority && e.path.length > 1 && "file" === e.scheme ? "//" + e.authority + e.path : 47 === e.path.charCodeAt(0) && (e.path.charCodeAt(1) >= 65 && e.path.charCodeAt(1) <= 90 || e.path.charCodeAt(1) >= 97 && e.path.charCodeAt(1) <= 122) && 58 === e.path.charCodeAt(2) ? e.path[1].toLowerCase() + e.path.substr(2) : e.path, i.c && (t = t.replace(/\//g, "\\")), t;
  }

  function w(e, t) {
    var n = t ? b : g, r = "", i = e.scheme, o = e.authority, s = e.path, a = e.query, l = e.fragment;
    if (i && (r += i, r += ":"), (o || "file" === i) && (r += h, r += h), o) {
      var c = o.indexOf("@");
      if (-1 !== c) {
        var d = o.substr(0, c);
        o = o.substr(c + 1), -1 === (c = d.indexOf(":")) ? r += n(d, !1) : (r += n(d.substr(0, c), !1), r += ":", r += n(d.substr(c + 1), !1)), r += "@";
      }
      -1 === (c = (o = o.toLowerCase()).indexOf(":")) ? r += n(o, !1) : (r += n(o.substr(0, c), !1), r += o.substr(c));
    }
    if (s) {
      if (s.length >= 3 && 47 === s.charCodeAt(0) && 58 === s.charCodeAt(2)) (u = s.charCodeAt(1)) >= 65 && u <= 90 && (s = "/" + String.fromCharCode(u + 32) + ":" + s.substr(3)); else if (s.length >= 2 && 58 === s.charCodeAt(1)) {
        var u;
        (u = s.charCodeAt(0)) >= 65 && u <= 90 && (s = String.fromCharCode(u + 32) + ":" + s.substr(2));
      }
      r += n(s, !0);
    }
    return a && (r += "?", r += n(a, !1)), l && (r += "#", r += t ? l : g(l, !1)), r;
  }

  var v = n(0), x = function() {
    function e(e, t) {
      this.lineNumber = e, this.column = t;
    }

    return e.prototype.equals = function(t) {
      return e.equals(this, t);
    }, e.equals = function(e, t) {
      return !e && !t || !!e && !!t && e.lineNumber === t.lineNumber && e.column === t.column;
    }, e.prototype.isBefore = function(t) {
      return e.isBefore(this, t);
    }, e.isBefore = function(e, t) {
      return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column < t.column;
    }, e.prototype.isBeforeOrEqual = function(t) {
      return e.isBeforeOrEqual(this, t);
    }, e.isBeforeOrEqual = function(e, t) {
      return e.lineNumber < t.lineNumber || !(t.lineNumber < e.lineNumber) && e.column <= t.column;
    }, e.compare = function(e, t) {
      var n = 0 | e.lineNumber, r = 0 | t.lineNumber;
      return n === r ? (0 | e.column) - (0 | t.column) : n - r;
    }, e.prototype.clone = function() {
      return new e(this.lineNumber, this.column);
    }, e.prototype.toString = function() {
      return "(" + this.lineNumber + "," + this.column + ")";
    }, e.lift = function(t) {
      return new e(t.lineNumber, t.column);
    }, e.isIPosition = function(e) {
      return e && "number" == typeof e.lineNumber && "number" == typeof e.column;
    }, e;
  }(), k = function() {
    function e(e, t, n, r) {
      e > n || e === n && t > r ? (this.startLineNumber = n, this.startColumn = r, this.endLineNumber = e, this.endColumn = t) : (this.startLineNumber = e, this.startColumn = t, this.endLineNumber = n, this.endColumn = r);
    }

    return e.prototype.isEmpty = function() {
      return e.isEmpty(this);
    }, e.isEmpty = function(e) {
      return e.startLineNumber === e.endLineNumber && e.startColumn === e.endColumn;
    }, e.prototype.containsPosition = function(t) {
      return e.containsPosition(this, t);
    }, e.containsPosition = function(e, t) {
      return !(t.lineNumber < e.startLineNumber || t.lineNumber > e.endLineNumber) && (!(t.lineNumber === e.startLineNumber && t.column < e.startColumn) && !(t.lineNumber === e.endLineNumber && t.column > e.endColumn));
    }, e.prototype.containsRange = function(t) {
      return e.containsRange(this, t);
    }, e.containsRange = function(e, t) {
      return !(t.startLineNumber < e.startLineNumber || t.endLineNumber < e.startLineNumber) && (!(t.startLineNumber > e.endLineNumber || t.endLineNumber > e.endLineNumber) && (!(t.startLineNumber === e.startLineNumber && t.startColumn < e.startColumn) && !(t.endLineNumber === e.endLineNumber && t.endColumn > e.endColumn)));
    }, e.prototype.plusRange = function(t) {
      return e.plusRange(this, t);
    }, e.plusRange = function(t, n) {
      var r, i, o, s;
      return n.startLineNumber < t.startLineNumber ? (r = n.startLineNumber, i = n.startColumn) : n.startLineNumber === t.startLineNumber ? (r = n.startLineNumber, i = Math.min(n.startColumn, t.startColumn)) : (r = t.startLineNumber, i = t.startColumn), n.endLineNumber > t.endLineNumber ? (o = n.endLineNumber, s = n.endColumn) : n.endLineNumber === t.endLineNumber ? (o = n.endLineNumber, s = Math.max(n.endColumn, t.endColumn)) : (o = t.endLineNumber, s = t.endColumn), new e(r, i, o, s);
    }, e.prototype.intersectRanges = function(t) {
      return e.intersectRanges(this, t);
    }, e.intersectRanges = function(t, n) {
      var r = t.startLineNumber, i = t.startColumn, o = t.endLineNumber, s = t.endColumn, a = n.startLineNumber,
        l = n.startColumn, c = n.endLineNumber, h = n.endColumn;
      return r < a ? (r = a, i = l) : r === a && (i = Math.max(i, l)), o > c ? (o = c, s = h) : o === c && (s = Math.min(s, h)), r > o ? null : r === o && i > s ? null : new e(r, i, o, s);
    }, e.prototype.equalsRange = function(t) {
      return e.equalsRange(this, t);
    }, e.equalsRange = function(e, t) {
      return !!e && !!t && e.startLineNumber === t.startLineNumber && e.startColumn === t.startColumn && e.endLineNumber === t.endLineNumber && e.endColumn === t.endColumn;
    }, e.prototype.getEndPosition = function() {
      return new x(this.endLineNumber, this.endColumn);
    }, e.prototype.getStartPosition = function() {
      return new x(this.startLineNumber, this.startColumn);
    }, e.prototype.toString = function() {
      return "[" + this.startLineNumber + "," + this.startColumn + " -> " + this.endLineNumber + "," + this.endColumn + "]";
    }, e.prototype.setEndPosition = function(t, n) {
      return new e(this.startLineNumber, this.startColumn, t, n);
    }, e.prototype.setStartPosition = function(t, n) {
      return new e(t, n, this.endLineNumber, this.endColumn);
    }, e.prototype.collapseToStart = function() {
      return e.collapseToStart(this);
    }, e.collapseToStart = function(t) {
      return new e(t.startLineNumber, t.startColumn, t.startLineNumber, t.startColumn);
    }, e.fromPositions = function(t, n) {
      return void 0 === n && (n = t), new e(t.lineNumber, t.column, n.lineNumber, n.column);
    }, e.lift = function(t) {
      return t ? new e(t.startLineNumber, t.startColumn, t.endLineNumber, t.endColumn) : null;
    }, e.isIRange = function(e) {
      return e && "number" == typeof e.startLineNumber && "number" == typeof e.startColumn && "number" == typeof e.endLineNumber && "number" == typeof e.endColumn;
    }, e.areIntersectingOrTouching = function(e, t) {
      return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn < t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn < e.startColumn);
    }, e.areIntersecting = function(e, t) {
      return !(e.endLineNumber < t.startLineNumber || e.endLineNumber === t.startLineNumber && e.endColumn <= t.startColumn) && !(t.endLineNumber < e.startLineNumber || t.endLineNumber === e.startLineNumber && t.endColumn <= e.startColumn);
    }, e.compareRangesUsingStarts = function(e, t) {
      var n = 0 | e.startLineNumber, r = 0 | t.startLineNumber;
      if (n === r) {
        var i = 0 | e.startColumn, o = 0 | t.startColumn;
        if (i === o) {
          var s = 0 | e.endLineNumber, a = 0 | t.endLineNumber;
          return s === a ? (0 | e.endColumn) - (0 | t.endColumn) : s - a;
        }
        return i - o;
      }
      return n - r;
    }, e.compareRangesUsingEnds = function(e, t) {
      return e.endLineNumber === t.endLineNumber ? e.endColumn === t.endColumn ? e.startLineNumber === t.startLineNumber ? e.startColumn - t.startColumn : e.startLineNumber - t.startLineNumber : e.endColumn - t.endColumn : e.endLineNumber - t.endLineNumber;
    }, e.spansMultipleLines = function(e) {
      return e.endLineNumber > e.startLineNumber;
    }, e;
  }(), C = function() {
    function e(e, t, n, r) {
      this.originalStart = e, this.originalLength = t, this.modifiedStart = n, this.modifiedLength = r;
    }

    return e.prototype.getOriginalEnd = function() {
      return this.originalStart + this.originalLength;
    }, e.prototype.getModifiedEnd = function() {
      return this.modifiedStart + this.modifiedLength;
    }, e;
  }();

  function S(e) {
    return {
      getLength: function() {
        return e.length;
      }, getElementAtIndex: function(t) {
        return e.charCodeAt(t);
      }
    };
  }

  function _(e, t, n) {
    return new I(S(e), S(t)).ComputeDiff(n);
  }

  var F = function() {
    function e() {
    }

    return e.Assert = function(e, t) {
      if (!e) throw new Error(t);
    }, e;
  }(), E = function() {
    function e() {
    }

    return e.Copy = function(e, t, n, r, i) {
      for (var o = 0; o < i; o++) n[r + o] = e[t + o];
    }, e;
  }(), T = function() {
    function e() {
      this.m_changes = [], this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE, this.m_originalCount = 0, this.m_modifiedCount = 0;
    }

    return e.prototype.MarkNextChange = function() {
      (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.m_changes.push(new C(this.m_originalStart, this.m_originalCount, this.m_modifiedStart, this.m_modifiedCount)), this.m_originalCount = 0, this.m_modifiedCount = 0, this.m_originalStart = Number.MAX_VALUE, this.m_modifiedStart = Number.MAX_VALUE;
    }, e.prototype.AddOriginalElement = function(e, t) {
      this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_originalCount++;
    }, e.prototype.AddModifiedElement = function(e, t) {
      this.m_originalStart = Math.min(this.m_originalStart, e), this.m_modifiedStart = Math.min(this.m_modifiedStart, t), this.m_modifiedCount++;
    }, e.prototype.getChanges = function() {
      return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes;
    }, e.prototype.getReverseChanges = function() {
      return (this.m_originalCount > 0 || this.m_modifiedCount > 0) && this.MarkNextChange(), this.m_changes.reverse(), this.m_changes;
    }, e;
  }(), I = function() {
    function e(e, t, n) {
      void 0 === n && (n = null), this.OriginalSequence = e, this.ModifiedSequence = t, this.ContinueProcessingPredicate = n, this.m_forwardHistory = [], this.m_reverseHistory = [];
    }

    return e.prototype.ElementsAreEqual = function(e, t) {
      return this.OriginalSequence.getElementAtIndex(e) === this.ModifiedSequence.getElementAtIndex(t);
    }, e.prototype.OriginalElementsAreEqual = function(e, t) {
      return this.OriginalSequence.getElementAtIndex(e) === this.OriginalSequence.getElementAtIndex(t);
    }, e.prototype.ModifiedElementsAreEqual = function(e, t) {
      return this.ModifiedSequence.getElementAtIndex(e) === this.ModifiedSequence.getElementAtIndex(t);
    }, e.prototype.ComputeDiff = function(e) {
      return this._ComputeDiff(0, this.OriginalSequence.getLength() - 1, 0, this.ModifiedSequence.getLength() - 1, e);
    }, e.prototype._ComputeDiff = function(e, t, n, r, i) {
      var o = this.ComputeDiffRecursive(e, t, n, r, [!1]);
      return i ? this.ShiftChanges(o) : o;
    }, e.prototype.ComputeDiffRecursive = function(e, t, n, r, i) {
      for (i[0] = !1; e <= t && n <= r && this.ElementsAreEqual(e, n);) e++, n++;
      for (; t >= e && r >= n && this.ElementsAreEqual(t, r);) t--, r--;
      if (e > t || n > r) {
        var o = void 0;
        return n <= r ? (F.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), o = [new C(e, 0, n, r - n + 1)]) : e <= t ? (F.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), o = [new C(e, t - e + 1, n, 0)]) : (F.Assert(e === t + 1, "originalStart should only be one more than originalEnd"), F.Assert(n === r + 1, "modifiedStart should only be one more than modifiedEnd"), o = []), o;
      }
      var s = [0], a = [0], l = this.ComputeRecursionPoint(e, t, n, r, s, a, i), c = s[0], h = a[0];
      if (null !== l) return l;
      if (!i[0]) {
        var d = this.ComputeDiffRecursive(e, c, n, h, i), u = [];
        return u = i[0] ? [new C(c + 1, t - (c + 1) + 1, h + 1, r - (h + 1) + 1)] : this.ComputeDiffRecursive(c + 1, t, h + 1, r, i), this.ConcatenateChanges(d, u);
      }
      return [new C(e, t - e + 1, n, r - n + 1)];
    }, e.prototype.WALKTRACE = function(e, t, n, r, i, o, s, a, l, c, h, d, u, m, p, f, g, b) {
      var y, w, v = null, x = new T, k = t, S = n, _ = u[0] - f[0] - r, F = Number.MIN_VALUE,
        E = this.m_forwardHistory.length - 1;
      do {
        (w = _ + e) === k || w < S && l[w - 1] < l[w + 1] ? (m = (h = l[w + 1]) - _ - r, h < F && x.MarkNextChange(), F = h, x.AddModifiedElement(h + 1, m), _ = w + 1 - e) : (m = (h = l[w - 1] + 1) - _ - r, h < F && x.MarkNextChange(), F = h - 1, x.AddOriginalElement(h, m + 1), _ = w - 1 - e), E >= 0 && (e = (l = this.m_forwardHistory[E])[0], k = 1, S = l.length - 1);
      } while (--E >= -1);
      if (y = x.getReverseChanges(), b[0]) {
        var I = u[0] + 1, A = f[0] + 1;
        if (null !== y && y.length > 0) {
          var P = y[y.length - 1];
          I = Math.max(I, P.getOriginalEnd()), A = Math.max(A, P.getModifiedEnd());
        }
        v = [new C(I, d - I + 1, A, p - A + 1)];
      } else {
        x = new T, k = o, S = s, _ = u[0] - f[0] - a, F = Number.MAX_VALUE, E = g ? this.m_reverseHistory.length - 1 : this.m_reverseHistory.length - 2;
        do {
          (w = _ + i) === k || w < S && c[w - 1] >= c[w + 1] ? (m = (h = c[w + 1] - 1) - _ - a, h > F && x.MarkNextChange(), F = h + 1, x.AddOriginalElement(h + 1, m + 1), _ = w + 1 - i) : (m = (h = c[w - 1]) - _ - a, h > F && x.MarkNextChange(), F = h, x.AddModifiedElement(h + 1, m + 1), _ = w - 1 - i), E >= 0 && (i = (c = this.m_reverseHistory[E])[0], k = 1, S = c.length - 1);
        } while (--E >= -1);
        v = x.getChanges();
      }
      return this.ConcatenateChanges(y, v);
    }, e.prototype.ComputeRecursionPoint = function(e, t, n, r, i, o, s) {
      var a, l, c, h = 0, d = 0, u = 0, m = 0;
      e--, n--, i[0] = 0, o[0] = 0, this.m_forwardHistory = [], this.m_reverseHistory = [];
      var p, f, g = t - e + (r - n), b = g + 1, y = new Array(b), w = new Array(b), v = r - n, x = t - e, k = e - n,
        S = t - r, _ = (x - v) % 2 == 0;
      for (y[v] = e, w[x] = t, s[0] = !1, c = 1; c <= g / 2 + 1; c++) {
        var F = 0, T = 0;
        for (h = this.ClipDiagonalBound(v - c, c, v, b), d = this.ClipDiagonalBound(v + c, c, v, b), p = h; p <= d; p += 2) {
          for (l = (a = p === h || p < d && y[p - 1] < y[p + 1] ? y[p + 1] : y[p - 1] + 1) - (p - v) - k, f = a; a < t && l < r && this.ElementsAreEqual(a + 1, l + 1);) a++, l++;
          if (y[p] = a, a + l > F + T && (F = a, T = l), !_ && Math.abs(p - x) <= c - 1 && a >= w[p]) return i[0] = a, o[0] = l, f <= w[p] && c <= 1448 ? this.WALKTRACE(v, h, d, k, x, u, m, S, y, w, a, t, i, l, r, o, _, s) : null;
        }
        var I = (F - e + (T - n) - c) / 2;
        if (null !== this.ContinueProcessingPredicate && !this.ContinueProcessingPredicate(F, this.OriginalSequence, I)) return s[0] = !0, i[0] = F, o[0] = T, I > 0 && c <= 1448 ? this.WALKTRACE(v, h, d, k, x, u, m, S, y, w, a, t, i, l, r, o, _, s) : [new C(++e, t - e + 1, ++n, r - n + 1)];
        for (u = this.ClipDiagonalBound(x - c, c, x, b), m = this.ClipDiagonalBound(x + c, c, x, b), p = u; p <= m; p += 2) {
          for (l = (a = p === u || p < m && w[p - 1] >= w[p + 1] ? w[p + 1] - 1 : w[p - 1]) - (p - x) - S, f = a; a > e && l > n && this.ElementsAreEqual(a, l);) a--, l--;
          if (w[p] = a, _ && Math.abs(p - v) <= c && a <= y[p]) return i[0] = a, o[0] = l, f >= y[p] && c <= 1448 ? this.WALKTRACE(v, h, d, k, x, u, m, S, y, w, a, t, i, l, r, o, _, s) : null;
        }
        if (c <= 1447) {
          var A = new Array(d - h + 2);
          A[0] = v - h + 1, E.Copy(y, h, A, 1, d - h + 1), this.m_forwardHistory.push(A), (A = new Array(m - u + 2))[0] = x - u + 1, E.Copy(w, u, A, 1, m - u + 1), this.m_reverseHistory.push(A);
        }
      }
      return this.WALKTRACE(v, h, d, k, x, u, m, S, y, w, a, t, i, l, r, o, _, s);
    }, e.prototype.ShiftChanges = function(e) {
      var t;
      do {
        t = !1;
        for (var n = 0; n < e.length; n++) for (var r = e[n], i = n < e.length - 1 ? e[n + 1].originalStart : this.OriginalSequence.getLength(), o = n < e.length - 1 ? e[n + 1].modifiedStart : this.ModifiedSequence.getLength(), s = r.originalLength > 0, a = r.modifiedLength > 0; r.originalStart + r.originalLength < i && r.modifiedStart + r.modifiedLength < o && (!s || this.OriginalElementsAreEqual(r.originalStart, r.originalStart + r.originalLength)) && (!a || this.ModifiedElementsAreEqual(r.modifiedStart, r.modifiedStart + r.modifiedLength));) r.originalStart++, r.modifiedStart++;
        var l = new Array, c = [null];
        for (n = 0; n < e.length; n++) n < e.length - 1 && this.ChangesOverlap(e[n], e[n + 1], c) ? (t = !0, l.push(c[0]), n++) : l.push(e[n]);
        e = l;
      } while (t);
      for (n = e.length - 1; n >= 0; n--) {
        r = e[n], i = 0, o = 0;
        if (n > 0) {
          var h = e[n - 1];
          h.originalLength > 0 && (i = h.originalStart + h.originalLength), h.modifiedLength > 0 && (o = h.modifiedStart + h.modifiedLength);
        }
        s = r.originalLength > 0, a = r.modifiedLength > 0;
        for (var d = 0, u = this._boundaryScore(r.originalStart, r.originalLength, r.modifiedStart, r.modifiedLength), m = 1; ; m++) {
          var p = r.originalStart - m, f = r.modifiedStart - m;
          if (p < i || f < o) break;
          if (s && !this.OriginalElementsAreEqual(p, p + r.originalLength)) break;
          if (a && !this.ModifiedElementsAreEqual(f, f + r.modifiedLength)) break;
          var g = this._boundaryScore(p, r.originalLength, f, r.modifiedLength);
          g > u && (u = g, d = m);
        }
        r.originalStart -= d, r.modifiedStart -= d;
      }
      return e;
    }, e.prototype._OriginalIsBoundary = function(e) {
      if (e <= 0 || e >= this.OriginalSequence.getLength() - 1) return !0;
      var t = this.OriginalSequence.getElementAtIndex(e);
      return "string" == typeof t && /^\s*$/.test(t);
    }, e.prototype._OriginalRegionIsBoundary = function(e, t) {
      if (this._OriginalIsBoundary(e) || this._OriginalIsBoundary(e - 1)) return !0;
      if (t > 0) {
        var n = e + t;
        if (this._OriginalIsBoundary(n - 1) || this._OriginalIsBoundary(n)) return !0;
      }
      return !1;
    }, e.prototype._ModifiedIsBoundary = function(e) {
      if (e <= 0 || e >= this.ModifiedSequence.getLength() - 1) return !0;
      var t = this.ModifiedSequence.getElementAtIndex(e);
      return "string" == typeof t && /^\s*$/.test(t);
    }, e.prototype._ModifiedRegionIsBoundary = function(e, t) {
      if (this._ModifiedIsBoundary(e) || this._ModifiedIsBoundary(e - 1)) return !0;
      if (t > 0) {
        var n = e + t;
        if (this._ModifiedIsBoundary(n - 1) || this._ModifiedIsBoundary(n)) return !0;
      }
      return !1;
    }, e.prototype._boundaryScore = function(e, t, n, r) {
      return (this._OriginalRegionIsBoundary(e, t) ? 1 : 0) + (this._ModifiedRegionIsBoundary(n, r) ? 1 : 0);
    }, e.prototype.ConcatenateChanges = function(e, t) {
      var n = [], r = null;
      return 0 === e.length || 0 === t.length ? t.length > 0 ? t : e : this.ChangesOverlap(e[e.length - 1], t[0], n) ? (r = new Array(e.length + t.length - 1), E.Copy(e, 0, r, 0, e.length - 1), r[e.length - 1] = n[0], E.Copy(t, 1, r, e.length, t.length - 1), r) : (r = new Array(e.length + t.length), E.Copy(e, 0, r, 0, e.length), E.Copy(t, 0, r, e.length, t.length), r);
    }, e.prototype.ChangesOverlap = function(e, t, n) {
      if (F.Assert(e.originalStart <= t.originalStart, "Left change is not less than or equal to right change"), F.Assert(e.modifiedStart <= t.modifiedStart, "Left change is not less than or equal to right change"), e.originalStart + e.originalLength >= t.originalStart || e.modifiedStart + e.modifiedLength >= t.modifiedStart) {
        var r = e.originalStart, i = e.originalLength, o = e.modifiedStart, s = e.modifiedLength;
        return e.originalStart + e.originalLength >= t.originalStart && (i = t.originalStart + t.originalLength - e.originalStart), e.modifiedStart + e.modifiedLength >= t.modifiedStart && (s = t.modifiedStart + t.modifiedLength - e.modifiedStart), n[0] = new C(r, i, o, s), !0;
      }
      return n[0] = null, !1;
    }, e.prototype.ClipDiagonalBound = function(e, t, n, r) {
      if (e >= 0 && e < r) return e;
      var i = t % 2 == 0;
      return e < 0 ? i === (n % 2 == 0) ? 0 : 1 : i === ((r - n - 1) % 2 == 0) ? r - 1 : r - 2;
    }, e;
  }();
  String.fromCharCode(65279);
  var A = 5e3, P = 3;

  function O(e, t, n, r) {
    return new I(e, t, n).ComputeDiff(r);
  }

  var z = function() {
    function e(t) {
      for (var n = [], r = [], i = 0, o = t.length; i < o; i++) n[i] = e._getFirstNonBlankColumn(t[i], 1), r[i] = e._getLastNonBlankColumn(t[i], 1);
      this._lines = t, this._startColumns = n, this._endColumns = r;
    }

    return e.prototype.getLength = function() {
      return this._lines.length;
    }, e.prototype.getElementAtIndex = function(e) {
      return this._lines[e].substring(this._startColumns[e] - 1, this._endColumns[e] - 1);
    }, e.prototype.getStartLineNumber = function(e) {
      return e + 1;
    }, e.prototype.getEndLineNumber = function(e) {
      return e + 1;
    }, e._getFirstNonBlankColumn = function(e, t) {
      var n = function(e) {
        for (var t = 0, n = e.length; t < n; t++) {
          var r = e.charCodeAt(t);
          if (32 !== r && 9 !== r) return t;
        }
        return -1;
      }(e);
      return -1 === n ? t : n + 1;
    }, e._getLastNonBlankColumn = function(e, t) {
      var n = function(e, t) {
        void 0 === t && (t = e.length - 1);
        for (var n = t; n >= 0; n--) {
          var r = e.charCodeAt(n);
          if (32 !== r && 9 !== r) return n;
        }
        return -1;
      }(e);
      return -1 === n ? t : n + 2;
    }, e.prototype.getCharSequence = function(e, t, n) {
      for (var r = [], i = [], o = [], s = 0, a = t; a <= n; a++) for (var l = this._lines[a], c = e ? this._startColumns[a] : 1, h = e ? this._endColumns[a] : l.length + 1, d = c; d < h; d++) r[s] = l.charCodeAt(d - 1), i[s] = a + 1, o[s] = d, s++;
      return new L(r, i, o);
    }, e;
  }(), L = function() {
    function e(e, t, n) {
      this._charCodes = e, this._lineNumbers = t, this._columns = n;
    }

    return e.prototype.getLength = function() {
      return this._charCodes.length;
    }, e.prototype.getElementAtIndex = function(e) {
      return this._charCodes[e];
    }, e.prototype.getStartLineNumber = function(e) {
      return this._lineNumbers[e];
    }, e.prototype.getStartColumn = function(e) {
      return this._columns[e];
    }, e.prototype.getEndLineNumber = function(e) {
      return this._lineNumbers[e];
    }, e.prototype.getEndColumn = function(e) {
      return this._columns[e] + 1;
    }, e;
  }(), D = function() {
    function e(e, t, n, r, i, o, s, a) {
      this.originalStartLineNumber = e, this.originalStartColumn = t, this.originalEndLineNumber = n, this.originalEndColumn = r, this.modifiedStartLineNumber = i, this.modifiedStartColumn = o, this.modifiedEndLineNumber = s, this.modifiedEndColumn = a;
    }

    return e.createFromDiffChange = function(t, n, r) {
      var i, o, s, a, l, c, h, d;
      return 0 === t.originalLength ? (i = 0, o = 0, s = 0, a = 0) : (i = n.getStartLineNumber(t.originalStart), o = n.getStartColumn(t.originalStart), s = n.getEndLineNumber(t.originalStart + t.originalLength - 1), a = n.getEndColumn(t.originalStart + t.originalLength - 1)), 0 === t.modifiedLength ? (l = 0, c = 0, h = 0, d = 0) : (l = r.getStartLineNumber(t.modifiedStart), c = r.getStartColumn(t.modifiedStart), h = r.getEndLineNumber(t.modifiedStart + t.modifiedLength - 1), d = r.getEndColumn(t.modifiedStart + t.modifiedLength - 1)), new e(i, o, s, a, l, c, h, d);
    }, e;
  }();
  var N = function() {
    function e(e, t, n, r, i) {
      this.originalStartLineNumber = e, this.originalEndLineNumber = t, this.modifiedStartLineNumber = n, this.modifiedEndLineNumber = r, this.charChanges = i;
    }

    return e.createFromDiffResult = function(t, n, r, i, o, s, a) {
      var l, c, h, d, u;
      if (0 === n.originalLength ? (l = r.getStartLineNumber(n.originalStart) - 1, c = 0) : (l = r.getStartLineNumber(n.originalStart), c = r.getEndLineNumber(n.originalStart + n.originalLength - 1)), 0 === n.modifiedLength ? (h = i.getStartLineNumber(n.modifiedStart) - 1, d = 0) : (h = i.getStartLineNumber(n.modifiedStart), d = i.getEndLineNumber(n.modifiedStart + n.modifiedLength - 1)), s && 0 !== n.originalLength && 0 !== n.modifiedLength && o()) {
        var m = r.getCharSequence(t, n.originalStart, n.originalStart + n.originalLength - 1),
          p = i.getCharSequence(t, n.modifiedStart, n.modifiedStart + n.modifiedLength - 1), f = O(m, p, o, !0);
        a && (f = function(e) {
          if (e.length <= 1) return e;
          for (var t = [e[0]], n = t[0], r = 1, i = e.length; r < i; r++) {
            var o = e[r], s = o.originalStart - (n.originalStart + n.originalLength),
              a = o.modifiedStart - (n.modifiedStart + n.modifiedLength);
            Math.min(s, a) < P ? (n.originalLength = o.originalStart + o.originalLength - n.originalStart, n.modifiedLength = o.modifiedStart + o.modifiedLength - n.modifiedStart) : (t.push(o), n = o);
          }
          return t;
        }(f)), u = [];
        for (var g = 0, b = f.length; g < b; g++) u.push(D.createFromDiffChange(f[g], m, p));
      }
      return new e(l, c, h, d, u);
    }, e;
  }(), R = function() {
    function e(e, t, n) {
      this.shouldComputeCharChanges = n.shouldComputeCharChanges, this.shouldPostProcessCharChanges = n.shouldPostProcessCharChanges, this.shouldIgnoreTrimWhitespace = n.shouldIgnoreTrimWhitespace, this.shouldMakePrettyDiff = n.shouldMakePrettyDiff, this.maximumRunTimeMs = A, this.originalLines = e, this.modifiedLines = t, this.original = new z(e), this.modified = new z(t);
    }

    return e.prototype.computeDiff = function() {
      if (1 === this.original.getLength() && 0 === this.original.getElementAtIndex(0).length) return [{
        originalStartLineNumber: 1,
        originalEndLineNumber: 1,
        modifiedStartLineNumber: 1,
        modifiedEndLineNumber: this.modified.getLength(),
        charChanges: [{
          modifiedEndColumn: 0,
          modifiedEndLineNumber: 0,
          modifiedStartColumn: 0,
          modifiedStartLineNumber: 0,
          originalEndColumn: 0,
          originalEndLineNumber: 0,
          originalStartColumn: 0,
          originalStartLineNumber: 0
        }]
      }];
      if (1 === this.modified.getLength() && 0 === this.modified.getElementAtIndex(0).length) return [{
        originalStartLineNumber: 1,
        originalEndLineNumber: this.original.getLength(),
        modifiedStartLineNumber: 1,
        modifiedEndLineNumber: 1,
        charChanges: [{
          modifiedEndColumn: 0,
          modifiedEndLineNumber: 0,
          modifiedStartColumn: 0,
          modifiedStartLineNumber: 0,
          originalEndColumn: 0,
          originalEndLineNumber: 0,
          originalStartColumn: 0,
          originalStartLineNumber: 0
        }]
      }];
      this.computationStartTime = (new Date).getTime();
      var e = O(this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldMakePrettyDiff);
      if (this.shouldIgnoreTrimWhitespace) {
        for (var t = [], n = 0, r = e.length; n < r; n++) t.push(N.createFromDiffResult(this.shouldIgnoreTrimWhitespace, e[n], this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges));
        return t;
      }
      for (var i = [], o = 0, s = 0, a = (n = -1, e.length); n < a; n++) {
        for (var l = n + 1 < a ? e[n + 1] : null, c = l ? l.originalStart : this.originalLines.length, h = l ? l.modifiedStart : this.modifiedLines.length; o < c && s < h;) {
          var d = this.originalLines[o], u = this.modifiedLines[s];
          if (d !== u) {
            for (var m = z._getFirstNonBlankColumn(d, 1), p = z._getFirstNonBlankColumn(u, 1); m > 1 && p > 1;) {
              if (d.charCodeAt(m - 2) !== u.charCodeAt(p - 2)) break;
              m--, p--;
            }
            (m > 1 || p > 1) && this._pushTrimWhitespaceCharChange(i, o + 1, 1, m, s + 1, 1, p);
            for (var f = z._getLastNonBlankColumn(d, 1), g = z._getLastNonBlankColumn(u, 1), b = d.length + 1, y = u.length + 1; f < b && g < y;) {
              if (d.charCodeAt(f - 1) !== d.charCodeAt(g - 1)) break;
              f++, g++;
            }
            (f < b || g < y) && this._pushTrimWhitespaceCharChange(i, o + 1, f, b, s + 1, g, y);
          }
          o++, s++;
        }
        l && (i.push(N.createFromDiffResult(this.shouldIgnoreTrimWhitespace, l, this.original, this.modified, this._continueProcessingPredicate.bind(this), this.shouldComputeCharChanges, this.shouldPostProcessCharChanges)), o += l.originalLength, s += l.modifiedLength);
      }
      return i;
    }, e.prototype._pushTrimWhitespaceCharChange = function(e, t, n, r, i, o, s) {
      var a;
      this._mergeTrimWhitespaceCharChange(e, t, n, r, i, o, s) || (this.shouldComputeCharChanges && (a = [new D(t, n, t, r, i, o, i, s)]), e.push(new N(t, t, i, i, a)));
    }, e.prototype._mergeTrimWhitespaceCharChange = function(e, t, n, r, i, o, s) {
      var a = e.length;
      if (0 === a) return !1;
      var l = e[a - 1];
      return 0 !== l.originalEndLineNumber && 0 !== l.modifiedEndLineNumber && (l.originalEndLineNumber + 1 === t && l.modifiedEndLineNumber + 1 === i && (l.originalEndLineNumber = t, l.modifiedEndLineNumber = i, this.shouldComputeCharChanges && l.charChanges.push(new D(t, n, t, r, i, o, i, s)), !0));
    }, e.prototype._continueProcessingPredicate = function() {
      return 0 === this.maximumRunTimeMs || (new Date).getTime() - this.computationStartTime < this.maximumRunTimeMs;
    }, e;
  }(), U = function() {
    function e(e, t, n) {
      for (var r = new Uint8Array(e * t), i = 0, o = e * t; i < o; i++) r[i] = n;
      this._data = r, this.rows = e, this.cols = t;
    }

    return e.prototype.get = function(e, t) {
      return this._data[e * this.cols + t];
    }, e.prototype.set = function(e, t, n) {
      this._data[e * this.cols + t] = n;
    }, e;
  }();

  function M(e) {
    return e < 0 ? 0 : e > 255 ? 255 : 0 | e;
  }

  function j(e) {
    return e < 0 ? 0 : e > 4294967295 ? 4294967295 : 0 | e;
  }

  var V = function() {
    return function(e, t) {
      this.index = e, this.remainder = t;
    };
  }(), B = function() {
    function e(e) {
      this.values = e, this.prefixSum = new Uint32Array(e.length), this.prefixSumValidIndex = new Int32Array(1), this.prefixSumValidIndex[0] = -1;
    }

    return e.prototype.getCount = function() {
      return this.values.length;
    }, e.prototype.insertValues = function(e, t) {
      e = j(e);
      var n = this.values, r = this.prefixSum, i = t.length;
      return 0 !== i && (this.values = new Uint32Array(n.length + i), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e), e + i), this.values.set(t, e), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSum = new Uint32Array(this.values.length), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }, e.prototype.changeValue = function(e, t) {
      return e = j(e), t = j(t), this.values[e] !== t && (this.values[e] = t, e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), !0);
    }, e.prototype.removeValues = function(e, t) {
      e = j(e), t = j(t);
      var n = this.values, r = this.prefixSum;
      if (e >= n.length) return !1;
      var i = n.length - e;
      return t >= i && (t = i), 0 !== t && (this.values = new Uint32Array(n.length - t), this.values.set(n.subarray(0, e), 0), this.values.set(n.subarray(e + t), e), this.prefixSum = new Uint32Array(this.values.length), e - 1 < this.prefixSumValidIndex[0] && (this.prefixSumValidIndex[0] = e - 1), this.prefixSumValidIndex[0] >= 0 && this.prefixSum.set(r.subarray(0, this.prefixSumValidIndex[0] + 1)), !0);
    }, e.prototype.getTotalValue = function() {
      return 0 === this.values.length ? 0 : this._getAccumulatedValue(this.values.length - 1);
    }, e.prototype.getAccumulatedValue = function(e) {
      return e < 0 ? 0 : (e = j(e), this._getAccumulatedValue(e));
    }, e.prototype._getAccumulatedValue = function(e) {
      if (e <= this.prefixSumValidIndex[0]) return this.prefixSum[e];
      var t = this.prefixSumValidIndex[0] + 1;
      0 === t && (this.prefixSum[0] = this.values[0], t++), e >= this.values.length && (e = this.values.length - 1);
      for (var n = t; n <= e; n++) this.prefixSum[n] = this.prefixSum[n - 1] + this.values[n];
      return this.prefixSumValidIndex[0] = Math.max(this.prefixSumValidIndex[0], e), this.prefixSum[e];
    }, e.prototype.getIndexOf = function(e) {
      e = Math.floor(e), this.getTotalValue();
      for (var t, n, r, i = 0, o = this.values.length - 1; i <= o;) if (t = i + (o - i) / 2 | 0, e < (r = (n = this.prefixSum[t]) - this.values[t])) o = t - 1; else {
        if (!(e >= n)) break;
        i = t + 1;
      }
      return new V(t, e - r);
    }, e;
  }(), K = (function() {
    function e(e) {
      this._cacheAccumulatedValueStart = 0, this._cache = null, this._actual = new B(e), this._bustCache();
    }

    e.prototype._bustCache = function() {
      this._cacheAccumulatedValueStart = 0, this._cache = null;
    }, e.prototype.insertValues = function(e, t) {
      this._actual.insertValues(e, t) && this._bustCache();
    }, e.prototype.changeValue = function(e, t) {
      this._actual.changeValue(e, t) && this._bustCache();
    }, e.prototype.removeValues = function(e, t) {
      this._actual.removeValues(e, t) && this._bustCache();
    }, e.prototype.getTotalValue = function() {
      return this._actual.getTotalValue();
    }, e.prototype.getAccumulatedValue = function(e) {
      return this._actual.getAccumulatedValue(e);
    }, e.prototype.getIndexOf = function(e) {
      if (e = Math.floor(e), null !== this._cache) {
        var t = e - this._cacheAccumulatedValueStart;
        if (t >= 0 && t < this._cache.length) return this._cache[t];
      }
      return this._actual.getIndexOf(e);
    }, e.prototype.warmUpCache = function(e, t) {
      for (var n = [], r = e; r <= t; r++) n[r - e] = this.getIndexOf(r);
      this._cache = n, this._cacheAccumulatedValueStart = e;
    };
  }(), function() {
    function e(e, t, n, r) {
      this._uri = e, this._lines = t, this._eol = n, this._versionId = r;
    }

    return e.prototype.dispose = function() {
      this._lines.length = 0;
    }, e.prototype.getText = function() {
      return this._lines.join(this._eol);
    }, e.prototype.onEvents = function(e) {
      e.eol && e.eol !== this._eol && (this._eol = e.eol, this._lineStarts = null);
      for (var t = e.changes, n = 0, r = t.length; n < r; n++) {
        var i = t[n];
        this._acceptDeleteRange(i.range), this._acceptInsertText(new x(i.range.startLineNumber, i.range.startColumn), i.text);
      }
      this._versionId = e.versionId;
    }, e.prototype._ensureLineStarts = function() {
      if (!this._lineStarts) {
        for (var e = this._eol.length, t = this._lines.length, n = new Uint32Array(t), r = 0; r < t; r++) n[r] = this._lines[r].length + e;
        this._lineStarts = new B(n);
      }
    }, e.prototype._setLineText = function(e, t) {
      this._lines[e] = t, this._lineStarts && this._lineStarts.changeValue(e, this._lines[e].length + this._eol.length);
    }, e.prototype._acceptDeleteRange = function(e) {
      if (e.startLineNumber !== e.endLineNumber) this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.endLineNumber - 1].substring(e.endColumn - 1)), this._lines.splice(e.startLineNumber, e.endLineNumber - e.startLineNumber), this._lineStarts && this._lineStarts.removeValues(e.startLineNumber, e.endLineNumber - e.startLineNumber); else {
        if (e.startColumn === e.endColumn) return;
        this._setLineText(e.startLineNumber - 1, this._lines[e.startLineNumber - 1].substring(0, e.startColumn - 1) + this._lines[e.startLineNumber - 1].substring(e.endColumn - 1));
      }
    }, e.prototype._acceptInsertText = function(e, t) {
      if (0 !== t.length) {
        var n = t.split(/\r\n|\r|\n/);
        if (1 !== n.length) {
          n[n.length - 1] += this._lines[e.lineNumber - 1].substring(e.column - 1), this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0]);
          for (var r = new Uint32Array(n.length - 1), i = 1; i < n.length; i++) this._lines.splice(e.lineNumber + i - 1, 0, n[i]), r[i - 1] = n[i].length + this._eol.length;
          this._lineStarts && this._lineStarts.insertValues(e.lineNumber, r);
        } else this._setLineText(e.lineNumber - 1, this._lines[e.lineNumber - 1].substring(0, e.column - 1) + n[0] + this._lines[e.lineNumber - 1].substring(e.column - 1));
      }
    }, e;
  }()), q = function() {
    function e(t) {
      var n = M(t);
      this._defaultValue = n, this._asciiMap = e._createAsciiMap(n), this._map = new Map;
    }

    return e._createAsciiMap = function(e) {
      for (var t = new Uint8Array(256), n = 0; n < 256; n++) t[n] = e;
      return t;
    }, e.prototype.set = function(e, t) {
      var n = M(t);
      e >= 0 && e < 256 ? this._asciiMap[e] = n : this._map.set(e, n);
    }, e.prototype.get = function(e) {
      return e >= 0 && e < 256 ? this._asciiMap[e] : this._map.get(e) || this._defaultValue;
    }, e;
  }(), W = (function() {
    function e() {
      this._actual = new q(0);
    }

    e.prototype.add = function(e) {
      this._actual.set(e, 1);
    }, e.prototype.has = function(e) {
      return 1 === this._actual.get(e);
    };
  }(), function() {
    function e(e) {
      for (var t = 0, n = 0, r = 0, i = e.length; r < i; r++) {
        var o = e[r], s = o[0], a = o[1], l = o[2];
        a > t && (t = a), s > n && (n = s), l > n && (n = l);
      }
      var c = new U(++n, ++t, 0);
      for (r = 0, i = e.length; r < i; r++) {
        var h = e[r];
        s = h[0], a = h[1], l = h[2];
        c.set(s, a, l);
      }
      this._states = c, this._maxCharCode = t;
    }

    return e.prototype.nextState = function(e, t) {
      return t < 0 || t >= this._maxCharCode ? 0 : this._states.get(e, t);
    }, e;
  }()), $ = null;
  var G = null;
  var H = function() {
    function e() {
    }

    return e._createLink = function(e, t, n, r, i) {
      var o = i - 1;
      do {
        var s = t.charCodeAt(o);
        if (2 !== e.get(s)) break;
        o--;
      } while (o > r);
      if (r > 0) {
        var a = t.charCodeAt(r - 1), l = t.charCodeAt(o);
        (40 === a && 41 === l || 91 === a && 93 === l || 123 === a && 125 === l) && o--;
      }
      return {
        range: { startLineNumber: n, startColumn: r + 1, endLineNumber: n, endColumn: o + 2 },
        url: t.substring(r, o + 1)
      };
    }, e.computeLinks = function(t) {
      for (var n = (null === $ && ($ = new W([[1, 104, 2], [1, 72, 2], [1, 102, 6], [1, 70, 6], [2, 116, 3], [2, 84, 3], [3, 116, 4], [3, 84, 4], [4, 112, 5], [4, 80, 5], [5, 115, 9], [5, 83, 9], [5, 58, 10], [6, 105, 7], [6, 73, 7], [7, 108, 8], [7, 76, 8], [8, 101, 9], [8, 69, 9], [9, 58, 10], [10, 47, 11], [11, 47, 12]])), $), r = function() {
        if (null === G) {
          G = new q(0);
          for (var e = 0; e < " \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…".length; e++) G.set(" \t<>'\"、。｡､，．：；？！＠＃＄％＆＊‘“〈《「『【〔（［｛｢｣｝］）〕】』」》〉”’｀～…".charCodeAt(e), 1);
          for (e = 0; e < ".,;".length; e++) G.set(".,;".charCodeAt(e), 2);
        }
        return G;
      }(), i = [], o = 1, s = t.getLineCount(); o <= s; o++) {
        for (var a = t.getLineContent(o), l = a.length, c = 0, h = 0, d = 0, u = 1, m = !1, p = !1, f = !1; c < l;) {
          var g = !1, b = a.charCodeAt(c);
          if (13 === u) {
            var y = void 0;
            switch (b) {
              case 40:
                m = !0, y = 0;
                break;
              case 41:
                y = m ? 0 : 1;
                break;
              case 91:
                p = !0, y = 0;
                break;
              case 93:
                y = p ? 0 : 1;
                break;
              case 123:
                f = !0, y = 0;
                break;
              case 125:
                y = f ? 0 : 1;
                break;
              case 39:
                y = 34 === d || 96 === d ? 0 : 1;
                break;
              case 34:
                y = 39 === d || 96 === d ? 0 : 1;
                break;
              case 96:
                y = 39 === d || 34 === d ? 0 : 1;
                break;
              default:
                y = r.get(b);
            }
            1 === y && (i.push(e._createLink(r, a, o, h, c)), g = !0);
          } else if (12 === u) {
            1 === (y = r.get(b)) ? g = !0 : u = 13;
          } else 0 === (u = n.nextState(u, b)) && (g = !0);
          g && (u = 1, m = !1, p = !1, f = !1, h = c + 1, d = b), c++;
        }
        13 === u && i.push(e._createLink(r, a, o, h, l));
      }
      return i;
    }, e;
  }();
  var J = function() {
    function e() {
      this._defaultValueSet = [["true", "false"], ["True", "False"], ["Private", "Public", "Friend", "ReadOnly", "Partial", "Protected", "WriteOnly"], ["public", "protected", "private"]];
    }

    return e.prototype.navigateValueSet = function(e, t, n, r, i) {
      var o;
      if (e && t && (o = this.doNavigateValueSet(t, i))) return { range: e, value: o };
      if (n && r && (o = this.doNavigateValueSet(r, i))) return { range: n, value: o };
      return null;
    }, e.prototype.doNavigateValueSet = function(e, t) {
      var n = this.numberReplace(e, t);
      return null !== n ? n : this.textReplace(e, t);
    }, e.prototype.numberReplace = function(e, t) {
      var n = Math.pow(10, e.length - (e.lastIndexOf(".") + 1)), r = Number(e), i = parseFloat(e);
      return isNaN(r) || isNaN(i) || r !== i ? null : 0 !== r || t ? (r = Math.floor(r * n), r += t ? n : -n, String(r / n)) : null;
    }, e.prototype.textReplace = function(e, t) {
      return this.valueSetsReplace(this._defaultValueSet, e, t);
    }, e.prototype.valueSetsReplace = function(e, t, n) {
      for (var r = null, i = 0, o = e.length; null === r && i < o; i++) r = this.valueSetReplace(e[i], t, n);
      return r;
    }, e.prototype.valueSetReplace = function(e, t, n) {
      var r = e.indexOf(t);
      return r >= 0 ? ((r += n ? 1 : -1) < 0 ? r = e.length - 1 : r %= e.length, e[r]) : null;
    }, e.INSTANCE = new e, e;
  }(), Y = "`~!@#$%^&*()-=+[{]}\\|;:'\",.<>/?";
  var X = function(e) {
    void 0 === e && (e = "");
    for (var t = "(-?\\d*\\.\\d\\w*)|([^", n = 0; n < Y.length; n++) e.indexOf(Y[n]) >= 0 || (t += "\\" + Y[n]);
    return t += "\\s]+)", new RegExp(t, "g");
  }();
  var Q = {};
  v.a.addEventListener("error", function(e) {
    var t = e.detail, n = t.id;
    t.parent ? t.handler && Q && delete Q[n] : (Q[n] = t, 1 === Object.keys(Q).length && setTimeout(function() {
      var e = Q;
      Q = {}, Object.keys(e).forEach(function(t) {
        var n = e[t];
        n.exception ? ee(n.exception) : n.error && ee(n.error), console.log("WARNING: Promise with no error callback:" + n.id), console.log(n), n.exception && console.log(n.exception.stack);
      });
    }, 0));
  });
  var Z = new (function() {
    function e() {
      this.listeners = [], this.unexpectedErrorHandler = function(e) {
        setTimeout(function() {
          if (e.stack) throw new Error(e.message + "\n\n" + e.stack);
          throw e;
        }, 0);
      };
    }

    return e.prototype.emit = function(e) {
      this.listeners.forEach(function(t) {
        t(e);
      });
    }, e.prototype.onUnexpectedError = function(e) {
      this.unexpectedErrorHandler(e), this.emit(e);
    }, e.prototype.onUnexpectedExternalError = function(e) {
      this.unexpectedErrorHandler(e);
    }, e;
  }());

  function ee(e) {
    re(e) || Z.onUnexpectedError(e);
  }

  function te(e) {
    return e instanceof Error ? { $isError: !0, name: e.name, message: e.message, stack: e.stacktrace || e.stack } : e;
  }

  var ne = "Canceled";

  function re(e) {
    return e instanceof Error && e.name === ne && e.message === ne;
  }

  function ie() {
    var e = new Error(ne);
    return e.name = e.message, e;
  }

  function oe(e) {
    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    return Array.isArray(e) ? (e.forEach(function(e) {
      return e && e.dispose();
    }), []) : 0 === t.length ? e ? (e.dispose(), e) : void 0 : (oe(e), oe(t), []);
  }

  var se, ae = function() {
    function e() {
      this._toDispose = [];
    }

    return Object.defineProperty(e.prototype, "toDispose", {
      get: function() {
        return this._toDispose;
      }, enumerable: !0, configurable: !0
    }), e.prototype.dispose = function() {
      this._toDispose = oe(this._toDispose);
    }, e.prototype._register = function(e) {
      return this._toDispose.push(e), e;
    }, e.None = Object.freeze({
      dispose: function() {
      }
    }), e;
  }(), le = (function() {
    function e(e) {
      this.object = e;
    }

    e.prototype.dispose = function() {
    };
  }(), function() {
    return function(e) {
      this.element = e;
    };
  }()), ce = function() {
    function e() {
    }

    return e.prototype.isEmpty = function() {
      return !this._first;
    }, e.prototype.unshift = function(e) {
      return this.insert(e, !1);
    }, e.prototype.push = function(e) {
      return this.insert(e, !0);
    }, e.prototype.insert = function(e, t) {
      var n = this, r = new le(e);
      if (this._first) if (t) {
        var i = this._last;
        this._last = r, r.prev = i, i.next = r;
      } else {
        var o = this._first;
        this._first = r, r.next = o, o.prev = r;
      } else this._first = r, this._last = r;
      return function() {
        for (var e = n._first; e instanceof le; e = e.next) if (e === r) {
          if (e.prev && e.next) {
            var t = e.prev;
            t.next = e.next, e.next.prev = t;
          } else e.prev || e.next ? e.next ? e.prev || (n._first = n._first.next, n._first.prev = void 0) : (n._last = n._last.prev, n._last.next = void 0) : (n._first = void 0, n._last = void 0);
          break;
        }
      };
    }, e.prototype.iterator = function() {
      var e = { done: void 0, value: void 0 }, t = this._first;
      return {
        next: function() {
          return t ? (e.done = !1, e.value = t.element, t = t.next) : (e.done = !0, e.value = void 0), e;
        }
      };
    }, e;
  }();
  !function(e) {
    var t = {
      dispose: function() {
      }
    };
    e.None = function() {
      return t;
    };
  }(se || (se = {}));
  var he = function() {
    function e(e) {
      this._options = e;
    }

    return Object.defineProperty(e.prototype, "event", {
      get: function() {
        var t = this;
        return this._event || (this._event = function(n, r, i) {
          t._listeners || (t._listeners = new ce);
          var o = t._listeners.isEmpty();
          o && t._options && t._options.onFirstListenerAdd && t._options.onFirstListenerAdd(t);
          var s, a = t._listeners.push(r ? [n, r] : n);
          return o && t._options && t._options.onFirstListenerDidAdd && t._options.onFirstListenerDidAdd(t), t._options && t._options.onListenerDidAdd && t._options.onListenerDidAdd(t, n, r), s = {
            dispose: function() {
              s.dispose = e._noop, t._disposed || (a(), t._options && t._options.onLastListenerRemove && t._listeners.isEmpty() && t._options.onLastListenerRemove(t));
            }
          }, Array.isArray(i) && i.push(s), s;
        }), this._event;
      }, enumerable: !0, configurable: !0
    }), e.prototype.fire = function(e) {
      if (this._listeners) {
        this._deliveryQueue || (this._deliveryQueue = []);
        for (var t = this._listeners.iterator(), n = t.next(); !n.done; n = t.next()) this._deliveryQueue.push([n.value, e]);
        for (; this._deliveryQueue.length > 0;) {
          var r = this._deliveryQueue.shift(), i = r[0], o = r[1];
          try {
            "function" == typeof i ? i.call(void 0, o) : i[0].call(i[1], o);
          } catch (n) {
            ee(n);
          }
        }
      }
    }, e.prototype.dispose = function() {
      this._listeners && (this._listeners = void 0), this._deliveryQueue && (this._deliveryQueue.length = 0), this._disposed = !0;
    }, e._noop = function() {
    }, e;
  }();
  !function() {
    function e() {
      var e = this;
      this.hasListeners = !1, this.events = [], this.emitter = new he({
        onFirstListenerAdd: function() {
          return e.onFirstListenerAdd();
        }, onLastListenerRemove: function() {
          return e.onLastListenerRemove();
        }
      });
    }

    Object.defineProperty(e.prototype, "event", {
      get: function() {
        return this.emitter.event;
      }, enumerable: !0, configurable: !0
    }), e.prototype.add = function(e) {
      var t = this, n = { event: e, listener: null };
      this.events.push(n), this.hasListeners && this.hook(n);
      return function(e) {
        return {
          dispose: function() {
            e();
          }
        };
      }(function(e) {
        var t, n = this, r = !1;
        return function() {
          return r ? t : (r = !0, t = e.apply(n, arguments));
        };
      }(function() {
        t.hasListeners && t.unhook(n);
        var e = t.events.indexOf(n);
        t.events.splice(e, 1);
      }));
    }, e.prototype.onFirstListenerAdd = function() {
      var e = this;
      this.hasListeners = !0, this.events.forEach(function(t) {
        return e.hook(t);
      });
    }, e.prototype.onLastListenerRemove = function() {
      var e = this;
      this.hasListeners = !1, this.events.forEach(function(t) {
        return e.unhook(t);
      });
    }, e.prototype.hook = function(e) {
      var t = this;
      e.listener = e.event(function(e) {
        return t.emitter.fire(e);
      });
    }, e.prototype.unhook = function(e) {
      e.listener.dispose(), e.listener = null;
    }, e.prototype.dispose = function() {
      this.emitter.dispose();
    };
  }();
  !function() {
    function e() {
      this.buffers = [];
    }

    e.prototype.wrapEvent = function(e) {
      var t = this;
      return function(n, r, i) {
        return e(function(e) {
          var i = t.buffers[t.buffers.length - 1];
          i ? i.push(function() {
            return n.call(r, e);
          }) : n.call(r, e);
        }, void 0, i);
      };
    }, e.prototype.bufferEvents = function(e) {
      var t = [];
      this.buffers.push(t), e(), this.buffers.pop(), t.forEach(function(e) {
        return e();
      });
    };
  }();
  !function() {
    function e(e) {
      this._event = e;
    }

    Object.defineProperty(e.prototype, "event", {
      get: function() {
        return this._event;
      }, enumerable: !0, configurable: !0
    }), e.prototype.map = function(t) {
      return new e(function(e, t) {
        return function(n, r, i) {
          return void 0 === r && (r = null), e(function(e) {
            return n.call(r, t(e));
          }, null, i);
        };
      }(this._event, t));
    }, e.prototype.filter = function(t) {
      return new e(function(e, t) {
        return function(n, r, i) {
          return void 0 === r && (r = null), e(function(e) {
            return t(e) && n.call(r, e);
          }, null, i);
        };
      }(this._event, t));
    }, e.prototype.on = function(e, t, n) {
      return this._event(e, t, n);
    };
  }();
  !function() {
    function e() {
      this.emitter = new he, this.event = this.emitter.event, this.disposable = ae.None;
    }

    Object.defineProperty(e.prototype, "input", {
      set: function(e) {
        this.disposable.dispose(), this.disposable = e(this.emitter.fire, this.emitter);
      }, enumerable: !0, configurable: !0
    }), e.prototype.dispose = function() {
      this.disposable.dispose(), this.emitter.dispose();
    };
  }();
  var de, ue = function() {
    function e() {
      this._keyCodeToStr = [], this._strToKeyCode = Object.create(null);
    }

    return e.prototype.define = function(e, t) {
      this._keyCodeToStr[e] = t, this._strToKeyCode[t.toLowerCase()] = e;
    }, e.prototype.keyCodeToStr = function(e) {
      return this._keyCodeToStr[e];
    }, e.prototype.strToKeyCode = function(e) {
      return this._strToKeyCode[e.toLowerCase()] || 0;
    }, e;
  }(), me = new ue, pe = new ue, fe = new ue;
  !function() {
    function e(e, t, n, r) {
      void 0 === n && (n = t), void 0 === r && (r = n), me.define(e, t), pe.define(e, n), fe.define(e, r);
    }

    e(0, "unknown"), e(1, "Backspace"), e(2, "Tab"), e(3, "Enter"), e(4, "Shift"), e(5, "Ctrl"), e(6, "Alt"), e(7, "PauseBreak"), e(8, "CapsLock"), e(9, "Escape"), e(10, "Space"), e(11, "PageUp"), e(12, "PageDown"), e(13, "End"), e(14, "Home"), e(15, "LeftArrow", "Left"), e(16, "UpArrow", "Up"), e(17, "RightArrow", "Right"), e(18, "DownArrow", "Down"), e(19, "Insert"), e(20, "Delete"), e(21, "0"), e(22, "1"), e(23, "2"), e(24, "3"), e(25, "4"), e(26, "5"), e(27, "6"), e(28, "7"), e(29, "8"), e(30, "9"), e(31, "A"), e(32, "B"), e(33, "C"), e(34, "D"), e(35, "E"), e(36, "F"), e(37, "G"), e(38, "H"), e(39, "I"), e(40, "J"), e(41, "K"), e(42, "L"), e(43, "M"), e(44, "N"), e(45, "O"), e(46, "P"), e(47, "Q"), e(48, "R"), e(49, "S"), e(50, "T"), e(51, "U"), e(52, "V"), e(53, "W"), e(54, "X"), e(55, "Y"), e(56, "Z"), e(57, "Meta"), e(58, "ContextMenu"), e(59, "F1"), e(60, "F2"), e(61, "F3"), e(62, "F4"), e(63, "F5"), e(64, "F6"), e(65, "F7"), e(66, "F8"), e(67, "F9"), e(68, "F10"), e(69, "F11"), e(70, "F12"), e(71, "F13"), e(72, "F14"), e(73, "F15"), e(74, "F16"), e(75, "F17"), e(76, "F18"), e(77, "F19"), e(78, "NumLock"), e(79, "ScrollLock"), e(80, ";", ";", "OEM_1"), e(81, "=", "=", "OEM_PLUS"), e(82, ",", ",", "OEM_COMMA"), e(83, "-", "-", "OEM_MINUS"), e(84, ".", ".", "OEM_PERIOD"), e(85, "/", "/", "OEM_2"), e(86, "`", "`", "OEM_3"), e(110, "ABNT_C1"), e(111, "ABNT_C2"), e(87, "[", "[", "OEM_4"), e(88, "\\", "\\", "OEM_5"), e(89, "]", "]", "OEM_6"), e(90, "'", "'", "OEM_7"), e(91, "OEM_8"), e(92, "OEM_102"), e(93, "NumPad0"), e(94, "NumPad1"), e(95, "NumPad2"), e(96, "NumPad3"), e(97, "NumPad4"), e(98, "NumPad5"),e(99, "NumPad6"),e(100, "NumPad7"),e(101, "NumPad8"),e(102, "NumPad9"),e(103, "NumPad_Multiply"),e(104, "NumPad_Add"),e(105, "NumPad_Separator"),e(106, "NumPad_Subtract"),e(107, "NumPad_Decimal"),e(108, "NumPad_Divide");
  }(), function(e) {
    e.toString = function(e) {
      return me.keyCodeToStr(e);
    }, e.fromString = function(e) {
      return me.strToKeyCode(e);
    }, e.toUserSettingsUS = function(e) {
      return pe.keyCodeToStr(e);
    }, e.toUserSettingsGeneral = function(e) {
      return fe.keyCodeToStr(e);
    }, e.fromUserSettings = function(e) {
      return pe.strToKeyCode(e) || fe.strToKeyCode(e);
    };
  }(de || (de = {}));
  !function() {
    function e(e, t, n, r, i) {
      this.type = 1, this.ctrlKey = e, this.shiftKey = t, this.altKey = n, this.metaKey = r, this.keyCode = i;
    }

    e.prototype.equals = function(e) {
      return 1 === e.type && (this.ctrlKey === e.ctrlKey && this.shiftKey === e.shiftKey && this.altKey === e.altKey && this.metaKey === e.metaKey && this.keyCode === e.keyCode);
    }, e.prototype.isModifierKey = function() {
      return 0 === this.keyCode || 5 === this.keyCode || 57 === this.keyCode || 6 === this.keyCode || 4 === this.keyCode;
    }, e.prototype.isDuplicateModifierCase = function() {
      return this.ctrlKey && 5 === this.keyCode || this.shiftKey && 4 === this.keyCode || this.altKey && 6 === this.keyCode || this.metaKey && 57 === this.keyCode;
    };
  }();
  var ge, be = function() {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
      e.__proto__ = t;
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    return function(t, n) {
      function r() {
        this.constructor = t;
      }

      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
    };
  }();
  !function(e) {
    e[e.LTR = 0] = "LTR", e[e.RTL = 1] = "RTL";
  }(ge || (ge = {}));
  var ye, we = function(e) {
    function t(t, n, r, i) {
      var o = e.call(this, t, n, r, i) || this;
      return o.selectionStartLineNumber = t, o.selectionStartColumn = n, o.positionLineNumber = r, o.positionColumn = i, o;
    }

    return be(t, e), t.prototype.clone = function() {
      return new t(this.selectionStartLineNumber, this.selectionStartColumn, this.positionLineNumber, this.positionColumn);
    }, t.prototype.toString = function() {
      return "[" + this.selectionStartLineNumber + "," + this.selectionStartColumn + " -> " + this.positionLineNumber + "," + this.positionColumn + "]";
    }, t.prototype.equalsSelection = function(e) {
      return t.selectionsEqual(this, e);
    }, t.selectionsEqual = function(e, t) {
      return e.selectionStartLineNumber === t.selectionStartLineNumber && e.selectionStartColumn === t.selectionStartColumn && e.positionLineNumber === t.positionLineNumber && e.positionColumn === t.positionColumn;
    }, t.prototype.getDirection = function() {
      return this.selectionStartLineNumber === this.startLineNumber && this.selectionStartColumn === this.startColumn ? ge.LTR : ge.RTL;
    }, t.prototype.setEndPosition = function(e, n) {
      return this.getDirection() === ge.LTR ? new t(this.startLineNumber, this.startColumn, e, n) : new t(e, n, this.startLineNumber, this.startColumn);
    }, t.prototype.getPosition = function() {
      return new x(this.positionLineNumber, this.positionColumn);
    }, t.prototype.setStartPosition = function(e, n) {
      return this.getDirection() === ge.LTR ? new t(e, n, this.endLineNumber, this.endColumn) : new t(this.endLineNumber, this.endColumn, e, n);
    }, t.fromPositions = function(e, n) {
      return void 0 === n && (n = e), new t(e.lineNumber, e.column, n.lineNumber, n.column);
    }, t.liftSelection = function(e) {
      return new t(e.selectionStartLineNumber, e.selectionStartColumn, e.positionLineNumber, e.positionColumn);
    }, t.selectionsArrEqual = function(e, t) {
      if (e && !t || !e && t) return !1;
      if (!e && !t) return !0;
      if (e.length !== t.length) return !1;
      for (var n = 0, r = e.length; n < r; n++) if (!this.selectionsEqual(e[n], t[n])) return !1;
      return !0;
    }, t.isISelection = function(e) {
      return e && "number" == typeof e.selectionStartLineNumber && "number" == typeof e.selectionStartColumn && "number" == typeof e.positionLineNumber && "number" == typeof e.positionColumn;
    }, t.createWithDirection = function(e, n, r, i, o) {
      return o === ge.LTR ? new t(e, n, r, i) : new t(r, i, e, n);
    }, t;
  }(k), ve = Object.freeze(function(e, t) {
    var n = setTimeout(e.bind(t), 0);
    return {
      dispose: function() {
        clearTimeout(n);
      }
    };
  });
  !function(e) {
    e.None = Object.freeze({
      isCancellationRequested: !1,
      onCancellationRequested: se.None
    }), e.Cancelled = Object.freeze({ isCancellationRequested: !0, onCancellationRequested: ve });
  }(ye || (ye = {}));
  var xe, ke, Ce = function() {
    function e() {
      this._isCancelled = !1;
    }

    return e.prototype.cancel = function() {
      this._isCancelled || (this._isCancelled = !0, this._emitter && (this._emitter.fire(void 0), this.dispose()));
    }, Object.defineProperty(e.prototype, "isCancellationRequested", {
      get: function() {
        return this._isCancelled;
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "onCancellationRequested", {
      get: function() {
        return this._isCancelled ? ve : (this._emitter || (this._emitter = new he), this._emitter.event);
      }, enumerable: !0, configurable: !0
    }), e.prototype.dispose = function() {
      this._emitter && (this._emitter.dispose(), this._emitter = void 0);
    }, e;
  }(), Se = function() {
    function e() {
    }

    return Object.defineProperty(e.prototype, "token", {
      get: function() {
        return this._token || (this._token = new Ce), this._token;
      }, enumerable: !0, configurable: !0
    }), e.prototype.cancel = function() {
      this._token ? this._token instanceof Ce && this._token.cancel() : this._token = ye.Cancelled;
    }, e.prototype.dispose = function() {
      this._token ? this._token instanceof Ce && this._token.dispose() : this._token = ye.None;
    }, e;
  }(), _e = function() {
    function e(e, t, n) {
      this.offset = 0 | e, this.type = t, this.language = n;
    }

    return e.prototype.toString = function() {
      return "(" + this.offset + ", " + this.type + ")";
    }, e;
  }();
  !function(e) {
    e[e.Unnecessary = 1] = "Unnecessary";
  }(xe || (xe = {})), function(e) {
    e[e.Hint = 1] = "Hint", e[e.Info = 2] = "Info", e[e.Warning = 4] = "Warning", e[e.Error = 8] = "Error";
  }(ke || (ke = {}));
  var Fe, Ee = function() {
    function e() {
    }

    return e.chord = function(e, t) {
      return function(e, t) {
        return (e | (65535 & t) << 16 >>> 0) >>> 0;
      }(e, t);
    }, e.CtrlCmd = 2048, e.Shift = 1024, e.Alt = 512, e.WinCtrl = 256, e;
  }();
  !function(e) {
    e[e.Unknown = 0] = "Unknown", e[e.Backspace = 1] = "Backspace", e[e.Tab = 2] = "Tab", e[e.Enter = 3] = "Enter", e[e.Shift = 4] = "Shift", e[e.Ctrl = 5] = "Ctrl", e[e.Alt = 6] = "Alt", e[e.PauseBreak = 7] = "PauseBreak", e[e.CapsLock = 8] = "CapsLock", e[e.Escape = 9] = "Escape", e[e.Space = 10] = "Space", e[e.PageUp = 11] = "PageUp", e[e.PageDown = 12] = "PageDown", e[e.End = 13] = "End", e[e.Home = 14] = "Home", e[e.LeftArrow = 15] = "LeftArrow", e[e.UpArrow = 16] = "UpArrow", e[e.RightArrow = 17] = "RightArrow", e[e.DownArrow = 18] = "DownArrow", e[e.Insert = 19] = "Insert", e[e.Delete = 20] = "Delete", e[e.KEY_0 = 21] = "KEY_0", e[e.KEY_1 = 22] = "KEY_1", e[e.KEY_2 = 23] = "KEY_2", e[e.KEY_3 = 24] = "KEY_3", e[e.KEY_4 = 25] = "KEY_4", e[e.KEY_5 = 26] = "KEY_5", e[e.KEY_6 = 27] = "KEY_6", e[e.KEY_7 = 28] = "KEY_7", e[e.KEY_8 = 29] = "KEY_8", e[e.KEY_9 = 30] = "KEY_9", e[e.KEY_A = 31] = "KEY_A", e[e.KEY_B = 32] = "KEY_B", e[e.KEY_C = 33] = "KEY_C", e[e.KEY_D = 34] = "KEY_D", e[e.KEY_E = 35] = "KEY_E", e[e.KEY_F = 36] = "KEY_F", e[e.KEY_G = 37] = "KEY_G", e[e.KEY_H = 38] = "KEY_H", e[e.KEY_I = 39] = "KEY_I", e[e.KEY_J = 40] = "KEY_J", e[e.KEY_K = 41] = "KEY_K", e[e.KEY_L = 42] = "KEY_L", e[e.KEY_M = 43] = "KEY_M", e[e.KEY_N = 44] = "KEY_N", e[e.KEY_O = 45] = "KEY_O", e[e.KEY_P = 46] = "KEY_P", e[e.KEY_Q = 47] = "KEY_Q", e[e.KEY_R = 48] = "KEY_R", e[e.KEY_S = 49] = "KEY_S", e[e.KEY_T = 50] = "KEY_T", e[e.KEY_U = 51] = "KEY_U", e[e.KEY_V = 52] = "KEY_V", e[e.KEY_W = 53] = "KEY_W", e[e.KEY_X = 54] = "KEY_X", e[e.KEY_Y = 55] = "KEY_Y", e[e.KEY_Z = 56] = "KEY_Z", e[e.Meta = 57] = "Meta", e[e.ContextMenu = 58] = "ContextMenu", e[e.F1 = 59] = "F1", e[e.F2 = 60] = "F2", e[e.F3 = 61] = "F3", e[e.F4 = 62] = "F4", e[e.F5 = 63] = "F5", e[e.F6 = 64] = "F6", e[e.F7 = 65] = "F7", e[e.F8 = 66] = "F8", e[e.F9 = 67] = "F9", e[e.F10 = 68] = "F10", e[e.F11 = 69] = "F11", e[e.F12 = 70] = "F12", e[e.F13 = 71] = "F13", e[e.F14 = 72] = "F14", e[e.F15 = 73] = "F15", e[e.F16 = 74] = "F16", e[e.F17 = 75] = "F17", e[e.F18 = 76] = "F18", e[e.F19 = 77] = "F19", e[e.NumLock = 78] = "NumLock", e[e.ScrollLock = 79] = "ScrollLock", e[e.US_SEMICOLON = 80] = "US_SEMICOLON", e[e.US_EQUAL = 81] = "US_EQUAL", e[e.US_COMMA = 82] = "US_COMMA", e[e.US_MINUS = 83] = "US_MINUS", e[e.US_DOT = 84] = "US_DOT", e[e.US_SLASH = 85] = "US_SLASH", e[e.US_BACKTICK = 86] = "US_BACKTICK", e[e.US_OPEN_SQUARE_BRACKET = 87] = "US_OPEN_SQUARE_BRACKET", e[e.US_BACKSLASH = 88] = "US_BACKSLASH", e[e.US_CLOSE_SQUARE_BRACKET = 89] = "US_CLOSE_SQUARE_BRACKET", e[e.US_QUOTE = 90] = "US_QUOTE", e[e.OEM_8 = 91] = "OEM_8", e[e.OEM_102 = 92] = "OEM_102", e[e.NUMPAD_0 = 93] = "NUMPAD_0", e[e.NUMPAD_1 = 94] = "NUMPAD_1", e[e.NUMPAD_2 = 95] = "NUMPAD_2", e[e.NUMPAD_3 = 96] = "NUMPAD_3", e[e.NUMPAD_4 = 97] = "NUMPAD_4", e[e.NUMPAD_5 = 98] = "NUMPAD_5", e[e.NUMPAD_6 = 99] = "NUMPAD_6", e[e.NUMPAD_7 = 100] = "NUMPAD_7",e[e.NUMPAD_8 = 101] = "NUMPAD_8",e[e.NUMPAD_9 = 102] = "NUMPAD_9",e[e.NUMPAD_MULTIPLY = 103] = "NUMPAD_MULTIPLY",e[e.NUMPAD_ADD = 104] = "NUMPAD_ADD",e[e.NUMPAD_SEPARATOR = 105] = "NUMPAD_SEPARATOR",e[e.NUMPAD_SUBTRACT = 106] = "NUMPAD_SUBTRACT",e[e.NUMPAD_DECIMAL = 107] = "NUMPAD_DECIMAL",e[e.NUMPAD_DIVIDE = 108] = "NUMPAD_DIVIDE",e[e.KEY_IN_COMPOSITION = 109] = "KEY_IN_COMPOSITION",e[e.ABNT_C1 = 110] = "ABNT_C1",e[e.ABNT_C2 = 111] = "ABNT_C2",e[e.MAX_VALUE = 112] = "MAX_VALUE";
  }(Fe || (Fe = {}));
  var Te = function() {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
      e.__proto__ = t;
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    return function(t, n) {
      function r() {
        this.constructor = t;
      }

      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
    };
  }(), Ie = function(e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return Te(t, e), Object.defineProperty(t.prototype, "uri", {
      get: function() {
        return this._uri;
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "version", {
      get: function() {
        return this._versionId;
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(t.prototype, "eol", {
      get: function() {
        return this._eol;
      }, enumerable: !0, configurable: !0
    }), t.prototype.getValue = function() {
      return this.getText();
    }, t.prototype.getLinesContent = function() {
      return this._lines.slice(0);
    }, t.prototype.getLineCount = function() {
      return this._lines.length;
    }, t.prototype.getLineContent = function(e) {
      return this._lines[e - 1];
    }, t.prototype.getWordAtPosition = function(e, t) {
      var n = function(e, t, n, r) {
        t.lastIndex = 0;
        var i = t.exec(n);
        if (!i) return null;
        var o = i[0].indexOf(" ") >= 0 ? function(e, t, n, r) {
          var i, o = e - 1 - r;
          for (t.lastIndex = 0; i = t.exec(n);) {
            if (i.index > o) return null;
            if (t.lastIndex >= o) return { word: i[0], startColumn: r + 1 + i.index, endColumn: r + 1 + t.lastIndex };
          }
          return null;
        }(e, t, n, r) : function(e, t, n, r) {
          var i, o = e - 1 - r, s = n.lastIndexOf(" ", o - 1) + 1, a = n.indexOf(" ", o);
          for (-1 === a && (a = n.length), t.lastIndex = s; i = t.exec(n);) if (i.index <= o && t.lastIndex >= o) return {
            word: i[0],
            startColumn: r + 1 + i.index,
            endColumn: r + 1 + t.lastIndex
          };
          return null;
        }(e, t, n, r);
        return t.lastIndex = 0, o;
      }(e.column, function(e) {
        var t = X;
        if (e && e instanceof RegExp) if (e.global) t = e; else {
          var n = "g";
          e.ignoreCase && (n += "i"), e.multiline && (n += "m"), t = new RegExp(e.source, n);
        }
        return t.lastIndex = 0, t;
      }(t), this._lines[e.lineNumber - 1], 0);
      return n ? new k(e.lineNumber, n.startColumn, e.lineNumber, n.endColumn) : null;
    }, t.prototype.getWordUntilPosition = function(e, t) {
      var n = this.getWordAtPosition(e, t);
      return n ? {
        word: this._lines[e.lineNumber - 1].substring(n.startColumn - 1, e.column - 1),
        startColumn: n.startColumn,
        endColumn: e.column
      } : { word: "", startColumn: e.column, endColumn: e.column };
    }, t.prototype.createWordIterator = function(e) {
      var t, n = this, r = { done: !1, value: "" }, i = 0, o = 0, s = [], a = function() {
        if (o < s.length) r.done = !1, r.value = t.substring(s[o].start, s[o].end), o += 1; else {
          if (!(i >= n._lines.length)) return t = n._lines[i], s = n._wordenize(t, e), o = 0, i += 1, a();
          r.done = !0, r.value = void 0;
        }
        return r;
      };
      return { next: a };
    }, t.prototype._wordenize = function(e, t) {
      var n, r = [];
      for (t.lastIndex = 0; (n = t.exec(e)) && 0 !== n[0].length;) r.push({
        start: n.index,
        end: n.index + n[0].length
      });
      return r;
    }, t.prototype.getValueInRange = function(e) {
      if ((e = this._validateRange(e)).startLineNumber === e.endLineNumber) return this._lines[e.startLineNumber - 1].substring(e.startColumn - 1, e.endColumn - 1);
      var t = this._eol, n = e.startLineNumber - 1, r = e.endLineNumber - 1, i = [];
      i.push(this._lines[n].substring(e.startColumn - 1));
      for (var o = n + 1; o < r; o++) i.push(this._lines[o]);
      return i.push(this._lines[r].substring(0, e.endColumn - 1)), i.join(t);
    }, t.prototype.offsetAt = function(e) {
      return e = this._validatePosition(e), this._ensureLineStarts(), this._lineStarts.getAccumulatedValue(e.lineNumber - 2) + (e.column - 1);
    }, t.prototype.positionAt = function(e) {
      e = Math.floor(e), e = Math.max(0, e), this._ensureLineStarts();
      var t = this._lineStarts.getIndexOf(e), n = this._lines[t.index].length;
      return { lineNumber: 1 + t.index, column: 1 + Math.min(t.remainder, n) };
    }, t.prototype._validateRange = function(e) {
      var t = this._validatePosition({ lineNumber: e.startLineNumber, column: e.startColumn }),
        n = this._validatePosition({ lineNumber: e.endLineNumber, column: e.endColumn });
      return t.lineNumber !== e.startLineNumber || t.column !== e.startColumn || n.lineNumber !== e.endLineNumber || n.column !== e.endColumn ? {
        startLineNumber: t.lineNumber,
        startColumn: t.column,
        endLineNumber: n.lineNumber,
        endColumn: n.column
      } : e;
    }, t.prototype._validatePosition = function(e) {
      if (!x.isIPosition(e)) throw new Error("bad position");
      var t = e.lineNumber, n = e.column, r = !1;
      if (t < 1) t = 1, n = 1, r = !0; else if (t > this._lines.length) t = this._lines.length, n = this._lines[t - 1].length + 1, r = !0; else {
        var i = this._lines[t - 1].length + 1;
        n < 1 ? (n = 1, r = !0) : n > i && (n = i, r = !0);
      }
      return r ? { lineNumber: t, column: n } : e;
    }, t;
  }(K), Ae = function(e) {
    function t(t) {
      var n = e.call(this, t) || this;
      return n._models = Object.create(null), n;
    }

    return Te(t, e), t.prototype.dispose = function() {
      this._models = Object.create(null);
    }, t.prototype._getModel = function(e) {
      return this._models[e];
    }, t.prototype._getModels = function() {
      var e = this, t = [];
      return Object.keys(this._models).forEach(function(n) {
        return t.push(e._models[n]);
      }), t;
    }, t.prototype.acceptNewModel = function(e) {
      this._models[e.url] = new Ie(m.parse(e.url), e.lines, e.EOL, e.versionId);
    }, t.prototype.acceptModelChanged = function(e, t) {
      this._models[e] && this._models[e].onEvents(t);
    }, t.prototype.acceptRemovedModel = function(e) {
      this._models[e] && delete this._models[e];
    }, t;
  }(function() {
    function e(e) {
      this._foreignModuleFactory = e, this._foreignModule = null;
    }

    return e.prototype.computeDiff = function(e, t, n) {
      var r = this._getModel(e), i = this._getModel(t);
      if (!r || !i) return null;
      var o = r.getLinesContent(), s = i.getLinesContent(), a = new R(o, s, {
        shouldComputeCharChanges: !0,
        shouldPostProcessCharChanges: !0,
        shouldIgnoreTrimWhitespace: n,
        shouldMakePrettyDiff: !0
      });
      return v.a.as(a.computeDiff());
    }, e.prototype.computeMoreMinimalEdits = function(t, n) {
      var r = this._getModel(t);
      if (!r) return v.a.as(n);
      for (var i, o = [], s = 0, a = n; s < a.length; s++) {
        var l = a[s], c = l.range, h = l.text, d = l.eol;
        if ("number" == typeof d && (i = d), c) {
          var u = r.getValueInRange(c);
          if (u !== (h = h.replace(/\r\n|\n|\r/g, r.eol))) if (Math.max(h.length, u.length) > e._diffLimit) o.push({
            range: c,
            text: h
          }); else for (var m = _(u, h, !1), p = r.offsetAt(k.lift(c).getStartPosition()), f = 0, g = m; f < g.length; f++) {
            var b = g[f], y = r.positionAt(p + b.originalStart),
              w = r.positionAt(p + b.originalStart + b.originalLength), x = {
                text: h.substr(b.modifiedStart, b.modifiedLength),
                range: {
                  startLineNumber: y.lineNumber,
                  startColumn: y.column,
                  endLineNumber: w.lineNumber,
                  endColumn: w.column
                }
              };
            r.getValueInRange(x.range) !== x.text && o.push(x);
          }
        }
      }
      return "number" == typeof i && o.push({ eol: i, text: void 0, range: void 0 }), v.a.as(o);
    }, e.prototype.computeLinks = function(e) {
      var t = this._getModel(e);
      return t ? v.a.as(function(e) {
        return e && "function" == typeof e.getLineCount && "function" == typeof e.getLineContent ? H.computeLinks(e) : [];
      }(t)) : null;
    }, e.prototype.textualSuggest = function(t, n, r, i) {
      var o = this._getModel(t);
      if (o) {
        var s = [], a = new RegExp(r, i), l = o.getWordUntilPosition(n, a).word, c = Object.create(null);
        c[l] = !0;
        for (var h = o.createWordIterator(a), d = h.next(); !d.done && s.length <= e._suggestionsLimit; d = h.next()) {
          var u = d.value;
          c[u] || (c[u] = !0, isNaN(Number(u)) && s.push({
            type: "text",
            label: u,
            insertText: u,
            noAutoAccept: !0,
            overwriteBefore: l.length
          }));
        }
        return v.a.as({ suggestions: s });
      }
    }, e.prototype.navigateValueSet = function(e, t, n, r, i) {
      var o = this._getModel(e);
      if (!o) return null;
      var s = new RegExp(r, i);
      t.startColumn === t.endColumn && (t = {
        startLineNumber: t.startLineNumber,
        startColumn: t.startColumn,
        endLineNumber: t.endLineNumber,
        endColumn: t.endColumn + 1
      });
      var a = o.getValueInRange(t),
        l = o.getWordAtPosition({ lineNumber: t.startLineNumber, column: t.startColumn }, s), c = null;
      null !== l && (c = o.getValueInRange(l));
      var h = J.INSTANCE.navigateValueSet(t, a, l, c, n);
      return v.a.as(h);
    }, e.prototype.loadForeignModule = function(e, t) {
      var n = this, r = {
        getMirrorModels: function() {
          return n._getModels();
        }
      };
      if (this._foreignModuleFactory) {
        this._foreignModule = this._foreignModuleFactory(r, t);
        var i = [];
        for (var o in this._foreignModule) "function" == typeof this._foreignModule[o] && i.push(o);
        return v.a.as(i);
      }
      return v.a.wrapError(new Error("Unexpected usage"));
    }, e.prototype.fmr = function(e, t) {
      if (!this._foreignModule || "function" != typeof this._foreignModule[e]) return v.a.wrapError(new Error("Missing requestHandler or method: " + e));
      try {
        return v.a.as(this._foreignModule[e].apply(this._foreignModule, t));
      } catch (e) {
        return v.a.wrapError(e);
      }
    }, e._diffLimit = 1e4, e._suggestionsLimit = 1e4, e;
  }());
  "function" == typeof importScripts && (i.a.monaco = {
    editor: void 0,
    languages: void 0,
    CancellationTokenSource: Se,
    Emitter: he,
    KeyCode: Fe,
    KeyMod: Ee,
    Position: x,
    Range: k,
    Selection: we,
    SelectionDirection: ge,
    MarkerSeverity: ke,
    MarkerTag: xe,
    Promise: v.a,
    Uri: m,
    Token: _e
  });
  var Pe = function() {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
      e.__proto__ = t;
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    return function(t, n) {
      function r() {
        this.constructor = t;
      }

      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
    };
  }();
  (function() {
    function e() {
      this.activePromise = null, this.queuedPromise = null, this.queuedPromiseFactory = null;
    }

    e.prototype.queue = function(e) {
      var t = this;
      if (this.activePromise) {
        if (this.queuedPromiseFactory = e, !this.queuedPromise) {
          var n = function() {
            t.queuedPromise = null;
            var e = t.queue(t.queuedPromiseFactory);
            return t.queuedPromiseFactory = null, e;
          };
          this.queuedPromise = new v.a(function(e, r, i) {
            t.activePromise.then(n, n, i).done(e);
          }, function() {
            t.activePromise.cancel();
          });
        }
        return new v.a(function(e, n, r) {
          t.queuedPromise.then(e, n, r);
        }, function() {
        });
      }
      return this.activePromise = e(), new v.a(function(e, n, r) {
        t.activePromise.done(function(n) {
          t.activePromise = null, e(n);
        }, function(e) {
          t.activePromise = null, n(e);
        }, r);
      }, function() {
        t.activePromise.cancel();
      });
    };
  })(), function() {
    function e(e) {
      this.defaultDelay = e, this.timeout = null, this.completionPromise = null, this.onSuccess = null, this.task = null;
    }

    e.prototype.trigger = function(e, t) {
      var n = this;
      return void 0 === t && (t = this.defaultDelay), this.task = e, this.cancelTimeout(), this.completionPromise || (this.completionPromise = new v.a(function(e) {
        n.onSuccess = e;
      }, function() {
      }).then(function() {
        n.completionPromise = null, n.onSuccess = null;
        var e = n.task;
        return n.task = null, e();
      })), this.timeout = setTimeout(function() {
        n.timeout = null, n.onSuccess(null);
      }, t), this.completionPromise;
    }, e.prototype.cancel = function() {
      this.cancelTimeout(), this.completionPromise && (this.completionPromise.cancel(), this.completionPromise = null);
    }, e.prototype.cancelTimeout = function() {
      null !== this.timeout && (clearTimeout(this.timeout), this.timeout = null);
    };
  }();
  var Oe = function(e) {
    function t(t) {
      var n, r, i, o;
      return n = e.call(this, function(e, t, n) {
        r = e, i = t, o = n;
      }, function() {
        i(ie());
      }) || this, t.then(r, i, o), n;
    }

    return Pe(t, e), t;
  }(v.a);
  (function(e) {
    function t() {
      var t = e.call(this) || this;
      return t._token = -1, t;
    }

    Pe(t, e), t.prototype.dispose = function() {
      this.cancel(), e.prototype.dispose.call(this);
    }, t.prototype.cancel = function() {
      -1 !== this._token && (clearTimeout(this._token), this._token = -1);
    }, t.prototype.cancelAndSet = function(e, t) {
      var n = this;
      this.cancel(), this._token = setTimeout(function() {
        n._token = -1, e();
      }, t);
    }, t.prototype.setIfNotSet = function(e, t) {
      var n = this;
      -1 === this._token && (this._token = setTimeout(function() {
        n._token = -1, e();
      }, t));
    };
  })(ae), function(e) {
    function t() {
      var t = e.call(this) || this;
      return t._token = -1, t;
    }

    Pe(t, e), t.prototype.dispose = function() {
      this.cancel(), e.prototype.dispose.call(this);
    }, t.prototype.cancel = function() {
      -1 !== this._token && (clearInterval(this._token), this._token = -1);
    }, t.prototype.cancelAndSet = function(e, t) {
      this.cancel(), this._token = setInterval(function() {
        e();
      }, t);
    };
  }(ae), function() {
    function e(e, t) {
      this.timeoutToken = -1, this.runner = e, this.timeout = t, this.timeoutHandler = this.onTimeout.bind(this);
    }

    e.prototype.dispose = function() {
      this.cancel(), this.runner = null;
    }, e.prototype.cancel = function() {
      this.isScheduled() && (clearTimeout(this.timeoutToken), this.timeoutToken = -1);
    }, e.prototype.schedule = function(e) {
      void 0 === e && (e = this.timeout), this.cancel(), this.timeoutToken = setTimeout(this.timeoutHandler, e);
    }, e.prototype.isScheduled = function() {
      return -1 !== this.timeoutToken;
    }, e.prototype.onTimeout = function() {
      this.timeoutToken = -1, this.runner && this.doRun();
    }, e.prototype.doRun = function() {
      this.runner();
    };
  }();
  var ze = function() {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
      e.__proto__ = t;
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    return function(t, n) {
      function r() {
        this.constructor = t;
      }

      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
    };
  }(), Le = "$initialize";
  var De = function() {
    function e(e) {
      this._workerId = -1, this._handler = e, this._lastSentReq = 0, this._pendingReplies = Object.create(null);
    }

    return e.prototype.setWorkerId = function(e) {
      this._workerId = e;
    }, e.prototype.sendMessage = function(e, t) {
      var n = String(++this._lastSentReq), r = { c: null, e: null }, i = new v.a(function(e, t) {
        r.c = e, r.e = t;
      }, function() {
      });
      return this._pendingReplies[n] = r, this._send({ vsWorker: this._workerId, req: n, method: e, args: t }), i;
    }, e.prototype.handleMessage = function(e) {
      var t;
      try {
        t = JSON.parse(e);
      } catch (e) {
      }
      t && t.vsWorker && (-1 !== this._workerId && t.vsWorker !== this._workerId || this._handleMessage(t));
    }, e.prototype._handleMessage = function(e) {
      var t = this;
      if (e.seq) {
        var n = e;
        if (!this._pendingReplies[n.seq]) return void console.warn("Got reply to unknown seq");
        var r = this._pendingReplies[n.seq];
        if (delete this._pendingReplies[n.seq], n.err) {
          var i = n.err;
          return n.err.$isError && ((i = new Error).name = n.err.name, i.message = n.err.message, i.stack = n.err.stack), void r.e(i);
        }
        r.c(n.res);
      } else {
        var o = e, s = o.req;
        this._handler.handleMessage(o.method, o.args).then(function(e) {
          t._send({ vsWorker: t._workerId, seq: s, res: e, err: void 0 });
        }, function(e) {
          e.detail instanceof Error && (e.detail = te(e.detail)), t._send({
            vsWorker: t._workerId,
            seq: s,
            res: void 0,
            err: te(e)
          });
        });
      }
    }, e.prototype._send = function(e) {
      var t = JSON.stringify(e);
      this._handler.sendMessage(t);
    }, e;
  }(), Ne = (function(e) {
    function t(t, n) {
      var r = e.call(this) || this, i = null, o = null;
      r._worker = r._register(t.create("vs/base/common/worker/simpleWorker", function(e) {
        r._protocol.handleMessage(e);
      }, function(e) {
        o(e);
      })), r._protocol = new De({
        sendMessage: function(e) {
          r._worker.postMessage(e);
        }, handleMessage: function(e, t) {
          return v.a.as(null);
        }
      }), r._protocol.setWorkerId(r._worker.getId());
      var s = null;
      void 0 !== self.require && "function" == typeof self.require.getConfig ? s = self.require.getConfig() : void 0 !== self.requirejs && (s = self.requirejs.s.contexts._.config), r._lazyProxy = new v.a(function(e, t) {
        i = e, o = t;
      }, function() {
      }), r._onModuleLoaded = r._protocol.sendMessage(Le, [r._worker.getId(), n, s]), r._onModuleLoaded.then(function(e) {
        for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = l(e[n], a);
        i(t);
      }, function(e) {
        o(e), r._onError("Worker failed to load " + n, e);
      });
      var a = function(e, t) {
        return r._request(e, t);
      }, l = function(e, t) {
        return function() {
          var n = Array.prototype.slice.call(arguments, 0);
          return t(e, n);
        };
      };
      return r;
    }

    ze(t, e), t.prototype.getProxyObject = function() {
      return new Oe(this._lazyProxy);
    }, t.prototype._request = function(e, t) {
      var n = this;
      return new v.a(function(r, i) {
        n._onModuleLoaded.then(function() {
          n._protocol.sendMessage(e, t).then(r, i);
        }, i);
      }, function() {
      });
    }, t.prototype._onError = function(e, t) {
      console.error(e), console.info(t);
    };
  }(ae), function() {
    function e(e, t) {
      var n = this;
      this._requestHandler = t, this._protocol = new De({
        sendMessage: function(t) {
          e(t);
        }, handleMessage: function(e, t) {
          return n._handleMessage(e, t);
        }
      });
    }

    return e.prototype.onmessage = function(e) {
      this._protocol.handleMessage(e);
    }, e.prototype._handleMessage = function(e, t) {
      if (e === Le) return this.initialize(t[0], t[1], t[2]);
      if (!this._requestHandler || "function" != typeof this._requestHandler[e]) return v.a.wrapError(new Error("Missing requestHandler or method: " + e));
      try {
        return v.a.as(this._requestHandler[e].apply(this._requestHandler, t));
      } catch (e) {
        return v.a.wrapError(e);
      }
    }, e.prototype.initialize = function(e, t, n) {
      var r, i, o = this;
      if (this._protocol.setWorkerId(e), this._requestHandler) {
        var s = [];
        for (var a in this._requestHandler) "function" == typeof this._requestHandler[a] && s.push(a);
        return v.a.as(s);
      }
      n && (void 0 !== n.baseUrl && delete n.baseUrl, void 0 !== n.paths && void 0 !== n.paths.vs && delete n.paths.vs, n.catchError = !0, self.require.config(n));
      var l = new v.a(function(e, t) {
        r = e, i = t;
      });
      return self.require([t], function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var n = e[0];
        o._requestHandler = n.create();
        var i = [];
        for (var s in o._requestHandler) "function" == typeof o._requestHandler[s] && i.push(s);
        r(i);
      }, i), l;
    }, e;
  }());
  var Re, Ue = !1;

  function Me(e) {
    if (!Ue) {
      Ue = !0;
      var t = new Ae(e), n = new Ne(function(e) {
        self.postMessage(e);
      }, t);
      self.onmessage = function(e) {
        n.onmessage(e.data);
      };
    }
  }

  self.onmessage = function(e) {
    Ue || Me(null);
  }, function(e) {
    e[e.Ident = 0] = "Ident", e[e.AtKeyword = 1] = "AtKeyword", e[e.String = 2] = "String", e[e.BadString = 3] = "BadString", e[e.UnquotedString = 4] = "UnquotedString", e[e.Hash = 5] = "Hash", e[e.Num = 6] = "Num", e[e.Percentage = 7] = "Percentage", e[e.Dimension = 8] = "Dimension", e[e.UnicodeRange = 9] = "UnicodeRange", e[e.CDO = 10] = "CDO", e[e.CDC = 11] = "CDC", e[e.Colon = 12] = "Colon", e[e.SemiColon = 13] = "SemiColon", e[e.CurlyL = 14] = "CurlyL", e[e.CurlyR = 15] = "CurlyR", e[e.ParenthesisL = 16] = "ParenthesisL", e[e.ParenthesisR = 17] = "ParenthesisR", e[e.BracketL = 18] = "BracketL", e[e.BracketR = 19] = "BracketR", e[e.Whitespace = 20] = "Whitespace", e[e.Includes = 21] = "Includes", e[e.Dashmatch = 22] = "Dashmatch", e[e.SubstringOperator = 23] = "SubstringOperator", e[e.PrefixOperator = 24] = "PrefixOperator", e[e.SuffixOperator = 25] = "SuffixOperator", e[e.Delim = 26] = "Delim", e[e.EMS = 27] = "EMS", e[e.EXS = 28] = "EXS", e[e.Length = 29] = "Length", e[e.Angle = 30] = "Angle", e[e.Time = 31] = "Time", e[e.Freq = 32] = "Freq", e[e.Exclamation = 33] = "Exclamation", e[e.Resolution = 34] = "Resolution", e[e.Comma = 35] = "Comma", e[e.Charset = 36] = "Charset", e[e.EscapedJavaScript = 37] = "EscapedJavaScript", e[e.BadEscapedJavaScript = 38] = "BadEscapedJavaScript", e[e.Comment = 39] = "Comment", e[e.SingleLineComment = 40] = "SingleLineComment", e[e.EOF = 41] = "EOF", e[e.CustomToken = 42] = "CustomToken";
  }(Re || (Re = {}));
  var je = function() {
      function e(e) {
        this.source = e, this.len = e.length, this.position = 0;
      }

      return e.prototype.substring = function(e, t) {
        return void 0 === t && (t = this.position), this.source.substring(e, t);
      }, e.prototype.eos = function() {
        return this.len <= this.position;
      }, e.prototype.pos = function() {
        return this.position;
      }, e.prototype.goBackTo = function(e) {
        this.position = e;
      }, e.prototype.goBack = function(e) {
        this.position -= e;
      }, e.prototype.advance = function(e) {
        this.position += e;
      }, e.prototype.nextChar = function() {
        return this.source.charCodeAt(this.position++) || 0;
      }, e.prototype.peekChar = function(e) {
        return void 0 === e && (e = 0), this.source.charCodeAt(this.position + e) || 0;
      }, e.prototype.lookbackChar = function(e) {
        return void 0 === e && (e = 0), this.source.charCodeAt(this.position - e) || 0;
      }, e.prototype.advanceIfChar = function(e) {
        return e === this.source.charCodeAt(this.position) && (this.position++, !0);
      }, e.prototype.advanceIfChars = function(e) {
        var t;
        if (this.position + e.length > this.source.length) return !1;
        for (t = 0; t < e.length; t++) if (this.source.charCodeAt(this.position + t) !== e[t]) return !1;
        return this.advance(t), !0;
      }, e.prototype.advanceWhileChar = function(e) {
        for (var t = this.position; this.position < this.len && e(this.source.charCodeAt(this.position));) this.position++;
        return this.position - t;
      }, e;
    }(), Ve = "a".charCodeAt(0), Be = "f".charCodeAt(0), Ke = "z".charCodeAt(0), qe = "A".charCodeAt(0),
    We = "F".charCodeAt(0), $e = "Z".charCodeAt(0), Ge = "0".charCodeAt(0), He = "9".charCodeAt(0),
    Je = "~".charCodeAt(0), Ye = "^".charCodeAt(0), Xe = "=".charCodeAt(0), Qe = "|".charCodeAt(0),
    Ze = "-".charCodeAt(0), et = "_".charCodeAt(0), tt = "%".charCodeAt(0), nt = "*".charCodeAt(0),
    rt = "(".charCodeAt(0), it = ")".charCodeAt(0), ot = "<".charCodeAt(0), st = ">".charCodeAt(0),
    at = "@".charCodeAt(0), lt = "#".charCodeAt(0), ct = "$".charCodeAt(0), ht = "\\".charCodeAt(0),
    dt = "/".charCodeAt(0), ut = "\n".charCodeAt(0), mt = "\r".charCodeAt(0), pt = "\f".charCodeAt(0),
    ft = "\"".charCodeAt(0), gt = "'".charCodeAt(0), bt = " ".charCodeAt(0), yt = "\t".charCodeAt(0),
    wt = ";".charCodeAt(0), vt = ":".charCodeAt(0), xt = "{".charCodeAt(0), kt = "}".charCodeAt(0),
    Ct = "[".charCodeAt(0), St = "]".charCodeAt(0), _t = ",".charCodeAt(0), Ft = ".".charCodeAt(0),
    Et = "!".charCodeAt(0), Tt = {};
  Tt[wt] = Re.SemiColon, Tt[vt] = Re.Colon, Tt[xt] = Re.CurlyL, Tt[kt] = Re.CurlyR, Tt[St] = Re.BracketR, Tt[Ct] = Re.BracketL, Tt[rt] = Re.ParenthesisL, Tt[it] = Re.ParenthesisR, Tt[_t] = Re.Comma;
  var It = {};
  It.em = Re.EMS, It.ex = Re.EXS, It.px = Re.Length, It.cm = Re.Length, It.mm = Re.Length, It.in = Re.Length, It.pt = Re.Length, It.pc = Re.Length, It.deg = Re.Angle, It.rad = Re.Angle, It.grad = Re.Angle, It.ms = Re.Time, It.s = Re.Time, It.hz = Re.Freq, It.khz = Re.Freq, It["%"] = Re.Percentage, It.fr = Re.Percentage, It.dpi = Re.Resolution, It.dpcm = Re.Resolution;
  var At, Pt, Ot = function() {
    function e() {
      this.stream = new je(""), this.ignoreComment = !0, this.ignoreWhitespace = !0, this.inURL = !1;
    }

    return e.prototype.setSource = function(e) {
      this.stream = new je(e);
    }, e.prototype.finishToken = function(e, t, n) {
      return { offset: e, len: this.stream.pos() - e, type: t, text: n || this.stream.substring(e) };
    }, e.prototype.substring = function(e, t) {
      return this.stream.substring(e, e + t);
    }, e.prototype.pos = function() {
      return this.stream.pos();
    }, e.prototype.goBackTo = function(e) {
      this.stream.goBackTo(e);
    }, e.prototype.scanUnquotedString = function() {
      var e = this.stream.pos(), t = [];
      return this._unquotedString(t) ? this.finishToken(e, Re.UnquotedString, t.join("")) : null;
    }, e.prototype.scan = function() {
      var e = this.trivia();
      if (null !== e) return e;
      var t = this.stream.pos();
      return this.stream.eos() ? this.finishToken(t, Re.EOF) : this.scanNext(t);
    }, e.prototype.scanNext = function(e) {
      if (this.stream.advanceIfChars([ot, Et, Ze, Ze])) return this.finishToken(e, Re.CDO);
      if (this.stream.advanceIfChars([Ze, Ze, st])) return this.finishToken(e, Re.CDC);
      var t = [];
      if (this.ident(t)) return this.finishToken(e, Re.Ident, t.join(""));
      if (this.stream.advanceIfChar(at)) {
        if (t = ["@"], this._name(t)) {
          var n = t.join("");
          return "@charset" === n ? this.finishToken(e, Re.Charset, n) : this.finishToken(e, Re.AtKeyword, n);
        }
        return this.finishToken(e, Re.Delim);
      }
      if (this.stream.advanceIfChar(lt)) return t = ["#"], this._name(t) ? this.finishToken(e, Re.Hash, t.join("")) : this.finishToken(e, Re.Delim);
      if (this.stream.advanceIfChar(Et)) return this.finishToken(e, Re.Exclamation);
      if (this._number()) {
        var r = this.stream.pos();
        if (t = [this.stream.substring(e, r)], this.stream.advanceIfChar(tt)) return this.finishToken(e, Re.Percentage);
        if (this.ident(t)) {
          var i = this.stream.substring(r).toLowerCase(), o = It[i];
          return void 0 !== o ? this.finishToken(e, o, t.join("")) : this.finishToken(e, Re.Dimension, t.join(""));
        }
        return this.finishToken(e, Re.Num);
      }
      t = [];
      var s = this._string(t);
      return null !== s ? this.finishToken(e, s, t.join("")) : void 0 !== (s = Tt[this.stream.peekChar()]) ? (this.stream.advance(1), this.finishToken(e, s)) : this.stream.peekChar(0) === Je && this.stream.peekChar(1) === Xe ? (this.stream.advance(2), this.finishToken(e, Re.Includes)) : this.stream.peekChar(0) === Qe && this.stream.peekChar(1) === Xe ? (this.stream.advance(2), this.finishToken(e, Re.Dashmatch)) : this.stream.peekChar(0) === nt && this.stream.peekChar(1) === Xe ? (this.stream.advance(2), this.finishToken(e, Re.SubstringOperator)) : this.stream.peekChar(0) === Ye && this.stream.peekChar(1) === Xe ? (this.stream.advance(2), this.finishToken(e, Re.PrefixOperator)) : this.stream.peekChar(0) === ct && this.stream.peekChar(1) === Xe ? (this.stream.advance(2), this.finishToken(e, Re.SuffixOperator)) : (this.stream.nextChar(), this.finishToken(e, Re.Delim));
    }, e.prototype._matchWordAnyCase = function(e) {
      var t = 0;
      return this.stream.advanceWhileChar(function(n) {
        var r = e[t] === n || e[t + 1] === n;
        return r && (t += 2), r;
      }), t === e.length || (this.stream.goBack(t / 2), !1);
    }, e.prototype.trivia = function() {
      for (; ;) {
        var e = this.stream.pos();
        if (this._whitespace()) {
          if (!this.ignoreWhitespace) return this.finishToken(e, Re.Whitespace);
        } else {
          if (!this.comment()) return null;
          if (!this.ignoreComment) return this.finishToken(e, Re.Comment);
        }
      }
    }, e.prototype.comment = function() {
      if (this.stream.advanceIfChars([dt, nt])) {
        var e = !1, t = !1;
        return this.stream.advanceWhileChar(function(n) {
          return t && n === dt ? (e = !0, !1) : (t = n === nt, !0);
        }), e && this.stream.advance(1), !0;
      }
      return !1;
    }, e.prototype._number = function() {
      var e, t = 0;
      return this.stream.peekChar() === Ft && (t = 1), (e = this.stream.peekChar(t)) >= Ge && e <= He && (this.stream.advance(t + 1), this.stream.advanceWhileChar(function(e) {
        return e >= Ge && e <= He || 0 === t && e === Ft;
      }), !0);
    }, e.prototype._newline = function(e) {
      var t = this.stream.peekChar();
      switch (t) {
        case mt:
        case pt:
        case ut:
          return this.stream.advance(1), e.push(String.fromCharCode(t)), t === mt && this.stream.advanceIfChar(ut) && e.push("\n"), !0;
      }
      return !1;
    }, e.prototype._escape = function(e, t) {
      var n = this.stream.peekChar();
      if (n === ht) {
        this.stream.advance(1), n = this.stream.peekChar();
        for (var r = 0; r < 6 && (n >= Ge && n <= He || n >= Ve && n <= Be || n >= qe && n <= We);) this.stream.advance(1), n = this.stream.peekChar(), r++;
        if (r > 0) {
          try {
            var i = parseInt(this.stream.substring(this.stream.pos() - r), 16);
            i && e.push(String.fromCharCode(i));
          } catch (e) {
          }
          return n === bt || n === yt ? this.stream.advance(1) : this._newline([]), !0;
        }
        if (n !== mt && n !== pt && n !== ut) return this.stream.advance(1), e.push(String.fromCharCode(n)), !0;
        if (t) return this._newline(e);
      }
      return !1;
    }, e.prototype._stringChar = function(e, t) {
      var n = this.stream.peekChar();
      return 0 !== n && n !== e && n !== ht && n !== mt && n !== pt && n !== ut && (this.stream.advance(1), t.push(String.fromCharCode(n)), !0);
    }, e.prototype._string = function(e) {
      if (this.stream.peekChar() === gt || this.stream.peekChar() === ft) {
        var t = this.stream.nextChar();
        for (e.push(String.fromCharCode(t)); this._stringChar(t, e) || this._escape(e, !0);) ;
        return this.stream.peekChar() === t ? (this.stream.nextChar(), e.push(String.fromCharCode(t)), Re.String) : Re.BadString;
      }
      return null;
    }, e.prototype._unquotedChar = function(e) {
      var t = this.stream.peekChar();
      return 0 !== t && t !== ht && t !== gt && t !== ft && t !== rt && t !== it && t !== bt && t !== yt && t !== ut && t !== pt && t !== mt && (this.stream.advance(1), e.push(String.fromCharCode(t)), !0);
    }, e.prototype._unquotedString = function(e) {
      for (var t = !1; this._unquotedChar(e) || this._escape(e);) t = !0;
      return t;
    }, e.prototype._whitespace = function() {
      return this.stream.advanceWhileChar(function(e) {
        return e === bt || e === yt || e === ut || e === pt || e === mt;
      }) > 0;
    }, e.prototype._name = function(e) {
      for (var t = !1; this._identChar(e) || this._escape(e);) t = !0;
      return t;
    }, e.prototype.ident = function(e) {
      var t = this.stream.pos();
      if (this._minus(e) && this._minus(e)) {
        if (this._identFirstChar(e) || this._escape(e)) {
          for (; this._identChar(e) || this._escape(e);) ;
          return !0;
        }
      } else if (this._identFirstChar(e) || this._escape(e)) {
        for (; this._identChar(e) || this._escape(e);) ;
        return !0;
      }
      return this.stream.goBackTo(t), !1;
    }, e.prototype._identFirstChar = function(e) {
      var t = this.stream.peekChar();
      return (t === et || t >= Ve && t <= Ke || t >= qe && t <= $e || t >= 128 && t <= 65535) && (this.stream.advance(1), e.push(String.fromCharCode(t)), !0);
    }, e.prototype._minus = function(e) {
      var t = this.stream.peekChar();
      return t === Ze && (this.stream.advance(1), e.push(String.fromCharCode(t)), !0);
    }, e.prototype._identChar = function(e) {
      var t = this.stream.peekChar();
      return (t === et || t === Ze || t >= Ve && t <= Ke || t >= qe && t <= $e || t >= Ge && t <= He || t >= 128 && t <= 65535) && (this.stream.advance(1), e.push(String.fromCharCode(t)), !0);
    }, e;
  }(), zt = function() {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
      e.__proto__ = t;
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    return function(t, n) {
      function r() {
        this.constructor = t;
      }

      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
    };
  }();

  function Lt(e, t) {
    var n = null;
    return !e || t < e.offset || t > e.end ? null : (e.accept(function(e) {
      return -1 === e.offset && -1 === e.length || e.offset <= t && e.end >= t && (n ? e.length <= n.length && (n = e) : n = e, !0);
    }), n);
  }

  function Dt(e, t) {
    for (var n = Lt(e, t), r = []; n;) r.unshift(n), n = n.parent;
    return r;
  }

  !function(e) {
    e[e.Undefined = 0] = "Undefined", e[e.Identifier = 1] = "Identifier", e[e.Stylesheet = 2] = "Stylesheet", e[e.Ruleset = 3] = "Ruleset", e[e.Selector = 4] = "Selector", e[e.SimpleSelector = 5] = "SimpleSelector", e[e.SelectorInterpolation = 6] = "SelectorInterpolation", e[e.SelectorCombinator = 7] = "SelectorCombinator", e[e.SelectorCombinatorParent = 8] = "SelectorCombinatorParent", e[e.SelectorCombinatorSibling = 9] = "SelectorCombinatorSibling", e[e.SelectorCombinatorAllSiblings = 10] = "SelectorCombinatorAllSiblings", e[e.SelectorCombinatorShadowPiercingDescendant = 11] = "SelectorCombinatorShadowPiercingDescendant", e[e.Page = 12] = "Page", e[e.PageBoxMarginBox = 13] = "PageBoxMarginBox", e[e.ClassSelector = 14] = "ClassSelector", e[e.IdentifierSelector = 15] = "IdentifierSelector", e[e.ElementNameSelector = 16] = "ElementNameSelector", e[e.PseudoSelector = 17] = "PseudoSelector", e[e.AttributeSelector = 18] = "AttributeSelector", e[e.Declaration = 19] = "Declaration", e[e.Declarations = 20] = "Declarations", e[e.Property = 21] = "Property", e[e.Expression = 22] = "Expression", e[e.BinaryExpression = 23] = "BinaryExpression", e[e.Term = 24] = "Term", e[e.Operator = 25] = "Operator", e[e.Value = 26] = "Value", e[e.StringLiteral = 27] = "StringLiteral", e[e.URILiteral = 28] = "URILiteral", e[e.EscapedValue = 29] = "EscapedValue", e[e.Function = 30] = "Function", e[e.NumericValue = 31] = "NumericValue", e[e.HexColorValue = 32] = "HexColorValue", e[e.MixinDeclaration = 33] = "MixinDeclaration", e[e.MixinReference = 34] = "MixinReference", e[e.VariableName = 35] = "VariableName", e[e.VariableDeclaration = 36] = "VariableDeclaration", e[e.Prio = 37] = "Prio", e[e.Interpolation = 38] = "Interpolation", e[e.NestedProperties = 39] = "NestedProperties", e[e.ExtendsReference = 40] = "ExtendsReference", e[e.SelectorPlaceholder = 41] = "SelectorPlaceholder", e[e.Debug = 42] = "Debug", e[e.If = 43] = "If", e[e.Else = 44] = "Else", e[e.For = 45] = "For", e[e.Each = 46] = "Each", e[e.While = 47] = "While", e[e.MixinContent = 48] = "MixinContent", e[e.Media = 49] = "Media", e[e.Keyframe = 50] = "Keyframe", e[e.FontFace = 51] = "FontFace", e[e.Import = 52] = "Import", e[e.Namespace = 53] = "Namespace", e[e.Invocation = 54] = "Invocation", e[e.FunctionDeclaration = 55] = "FunctionDeclaration", e[e.ReturnStatement = 56] = "ReturnStatement", e[e.MediaQuery = 57] = "MediaQuery", e[e.FunctionParameter = 58] = "FunctionParameter", e[e.FunctionArgument = 59] = "FunctionArgument", e[e.KeyframeSelector = 60] = "KeyframeSelector", e[e.ViewPort = 61] = "ViewPort", e[e.Document = 62] = "Document", e[e.AtApplyRule = 63] = "AtApplyRule", e[e.CustomPropertyDeclaration = 64] = "CustomPropertyDeclaration", e[e.CustomPropertySet = 65] = "CustomPropertySet", e[e.ListEntry = 66] = "ListEntry", e[e.Supports = 67] = "Supports", e[e.SupportsCondition = 68] = "SupportsCondition", e[e.NamespacePrefix = 69] = "NamespacePrefix", e[e.GridLine = 70] = "GridLine", e[e.Plugin = 71] = "Plugin", e[e.UnknownAtRule = 72] = "UnknownAtRule";
  }(At || (At = {})), function(e) {
    e[e.Mixin = 0] = "Mixin", e[e.Rule = 1] = "Rule", e[e.Variable = 2] = "Variable", e[e.Function = 3] = "Function", e[e.Keyframe = 4] = "Keyframe", e[e.Unknown = 5] = "Unknown";
  }(Pt || (Pt = {}));
  var Nt, Rt = function() {
    function e(e, t, n) {
      void 0 === e && (e = -1), void 0 === t && (t = -1), this.parent = null, this.offset = e, this.length = t, n && (this.nodeType = n);
    }

    return Object.defineProperty(e.prototype, "end", {
      get: function() {
        return this.offset + this.length;
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "type", {
      get: function() {
        return this.nodeType || At.Undefined;
      }, set: function(e) {
        this.nodeType = e;
      }, enumerable: !0, configurable: !0
    }), e.prototype.getTextProvider = function() {
      for (var e = this; e && !e.textProvider;) e = e.parent;
      return e ? e.textProvider : function() {
        return "unknown";
      };
    }, e.prototype.getText = function() {
      return this.getTextProvider()(this.offset, this.length);
    }, e.prototype.matches = function(e) {
      return this.length === e.length && this.getTextProvider()(this.offset, this.length) === e;
    }, e.prototype.startsWith = function(e) {
      return this.length >= e.length && this.getTextProvider()(this.offset, e.length) === e;
    }, e.prototype.endsWith = function(e) {
      return this.length >= e.length && this.getTextProvider()(this.end - e.length, e.length) === e;
    }, e.prototype.accept = function(e) {
      if (e(this) && this.children) for (var t = 0, n = this.children; t < n.length; t++) {
        n[t].accept(e);
      }
    }, e.prototype.acceptVisitor = function(e) {
      this.accept(e.visitNode.bind(e));
    }, e.prototype.adoptChild = function(e, t) {
      if (void 0 === t && (t = -1), e.parent && e.parent.children) {
        var n = e.parent.children.indexOf(e);
        n >= 0 && e.parent.children.splice(n, 1);
      }
      e.parent = this;
      var r = this.children;
      return r || (r = this.children = []), -1 !== t ? r.splice(t, 0, e) : r.push(e), e;
    }, e.prototype.attachTo = function(e, t) {
      return void 0 === t && (t = -1), e && e.adoptChild(this, t), this;
    }, e.prototype.collectIssues = function(e) {
      this.issues && e.push.apply(e, this.issues);
    }, e.prototype.addIssue = function(e) {
      this.issues || (this.issues = []), this.issues.push(e);
    }, e.prototype.hasIssue = function(e) {
      return Array.isArray(this.issues) && this.issues.some(function(t) {
        return t.getRule() === e;
      });
    }, e.prototype.isErroneous = function(e) {
      return void 0 === e && (e = !1), !!(this.issues && this.issues.length > 0) || e && Array.isArray(this.children) && this.children.some(function(e) {
        return e.isErroneous(!0);
      });
    }, e.prototype.setNode = function(e, t, n) {
      return void 0 === n && (n = -1), !!t && (t.attachTo(this, n), this[e] = t, !0);
    }, e.prototype.addChild = function(e) {
      return !!e && (this.children || (this.children = []), e.attachTo(this), this.updateOffsetAndLength(e), !0);
    }, e.prototype.updateOffsetAndLength = function(e) {
      (e.offset < this.offset || -1 === this.offset) && (this.offset = e.offset);
      var t = e.end;
      (t > this.end || -1 === this.length) && (this.length = t - this.offset);
    }, e.prototype.hasChildren = function() {
      return this.children && this.children.length > 0;
    }, e.prototype.getChildren = function() {
      return this.children ? this.children.slice(0) : [];
    }, e.prototype.getChild = function(e) {
      return this.children && e < this.children.length ? this.children[e] : null;
    }, e.prototype.addChildren = function(e) {
      for (var t = 0, n = e; t < n.length; t++) {
        var r = n[t];
        this.addChild(r);
      }
    }, e.prototype.findFirstChildBeforeOffset = function(e) {
      if (this.children) for (var t = null, n = this.children.length - 1; n >= 0; n--) if ((t = this.children[n]).offset <= e) return t;
      return null;
    }, e.prototype.findChildAtOffset = function(e, t) {
      var n = this.findFirstChildBeforeOffset(e);
      return n && n.end >= e ? t && n.findChildAtOffset(e, !0) || n : null;
    }, e.prototype.encloses = function(e) {
      return this.offset <= e.offset && this.offset + this.length >= e.offset + e.length;
    }, e.prototype.getParent = function() {
      for (var e = this.parent; e instanceof Ut;) e = e.parent;
      return e;
    }, e.prototype.findParent = function(e) {
      for (var t = this; t && t.type !== e;) t = t.parent;
      return t;
    }, e.prototype.setData = function(e, t) {
      this.options || (this.options = {}), this.options[e] = t;
    }, e.prototype.getData = function(e) {
      return this.options && this.options.hasOwnProperty(e) ? this.options[e] : null;
    }, e;
  }(), Ut = function(e) {
    function t(t, n) {
      void 0 === n && (n = -1);
      var r = e.call(this, -1, -1) || this;
      return r.attachTo(t, n), r.offset = -1, r.length = -1, r;
    }

    return zt(t, e), t;
  }(Rt), Mt = function(e) {
    function t(t, n) {
      var r = e.call(this, t, n) || this;
      return r.isCustomProperty = !1, r;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Identifier;
      }, enumerable: !0, configurable: !0
    }), t.prototype.containsInterpolation = function() {
      return this.hasChildren();
    }, t;
  }(Rt), jt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Stylesheet;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setName = function(e) {
      this.name = e;
    }, t;
  }(Rt), Vt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Declarations;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Rt), Bt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), t.prototype.getDeclarations = function() {
      return this.declarations;
    }, t.prototype.setDeclarations = function(e) {
      return this.setNode("declarations", e);
    }, t;
  }(Rt), Kt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Ruleset;
      }, enumerable: !0, configurable: !0
    }), t.prototype.getSelectors = function() {
      return this.selectors || (this.selectors = new Ut(this)), this.selectors;
    }, t.prototype.isNested = function() {
      return !!this.parent && null !== this.parent.findParent(At.Declarations);
    }, t;
  }(Bt), qt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Selector;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Rt), Wt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.SimpleSelector;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Rt), $t = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.AtApplyRule;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setIdentifier = function(e) {
      return this.setNode("identifier", e, 0);
    }, t.prototype.getIdentifier = function() {
      return this.identifier;
    }, t.prototype.getName = function() {
      return this.identifier ? this.identifier.getText() : "";
    }, t;
  }(Rt), Gt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), t;
  }(Rt), Ht = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.CustomPropertyDeclaration;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setProperty = function(e) {
      return this.setNode("property", e);
    }, t.prototype.getProperty = function() {
      return this.property;
    }, t.prototype.setValue = function(e) {
      return this.setNode("value", e);
    }, t.prototype.getValue = function() {
      return this.value;
    }, t.prototype.setPropertySet = function(e) {
      return this.setNode("propertySet", e);
    }, t.prototype.getPropertySet = function() {
      return this.propertySet;
    }, t;
  }(Gt), Jt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.CustomPropertySet;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), Yt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Declaration;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setProperty = function(e) {
      return this.setNode("property", e);
    }, t.prototype.getProperty = function() {
      return this.property;
    }, t.prototype.getFullPropertyName = function() {
      var e = this.property ? this.property.getName() : "unknown";
      if (this.parent instanceof Vt && this.parent.getParent() instanceof hn) {
        var n = this.parent.getParent().getParent();
        if (n instanceof t) return n.getFullPropertyName() + e;
      }
      return e;
    }, t.prototype.getNonPrefixedPropertyName = function() {
      var e = this.getFullPropertyName();
      if (e && "-" === e.charAt(0)) {
        var t = e.indexOf("-", 1);
        if (-1 !== t) return e.substring(t + 1);
      }
      return e;
    }, t.prototype.setValue = function(e) {
      return this.setNode("value", e);
    }, t.prototype.getValue = function() {
      return this.value;
    }, t.prototype.setNestedProperties = function(e) {
      return this.setNode("nestedProprties", e);
    }, t.prototype.getNestedProperties = function() {
      return this.nestedProprties;
    }, t;
  }(Gt), Xt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Property;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setIdentifier = function(e) {
      return this.setNode("identifier", e);
    }, t.prototype.getIdentifier = function() {
      return this.identifier;
    }, t.prototype.getName = function() {
      return this.getText();
    }, t.prototype.isCustomProperty = function() {
      return this.identifier.isCustomProperty;
    }, t;
  }(Rt), Qt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Function;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setIdentifier = function(e) {
      return this.setNode("identifier", e, 0);
    }, t.prototype.getIdentifier = function() {
      return this.identifier;
    }, t.prototype.getName = function() {
      return this.identifier ? this.identifier.getText() : "";
    }, t;
  }(function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Invocation;
      }, enumerable: !0, configurable: !0
    }), t.prototype.getArguments = function() {
      return this.arguments || (this.arguments = new Ut(this)), this.arguments;
    }, t;
  }(Rt)), Zt = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.FunctionParameter;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setIdentifier = function(e) {
      return this.setNode("identifier", e, 0);
    }, t.prototype.getIdentifier = function() {
      return this.identifier;
    }, t.prototype.getName = function() {
      return this.identifier ? this.identifier.getText() : "";
    }, t.prototype.setDefaultValue = function(e) {
      return this.setNode("defaultValue", e, 0);
    }, t.prototype.getDefaultValue = function() {
      return this.defaultValue;
    }, t;
  }(Rt), en = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.FunctionArgument;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setIdentifier = function(e) {
      return this.setNode("identifier", e, 0);
    }, t.prototype.getIdentifier = function() {
      return this.identifier;
    }, t.prototype.getName = function() {
      return this.identifier ? this.identifier.getText() : "";
    }, t.prototype.setValue = function(e) {
      return this.setNode("value", e, 0);
    }, t.prototype.getValue = function() {
      return this.value;
    }, t;
  }(Rt), tn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.If;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setExpression = function(e) {
      return this.setNode("expression", e, 0);
    }, t.prototype.setElseClause = function(e) {
      return this.setNode("elseClause", e);
    }, t;
  }(Bt), nn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.For;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setVariable = function(e) {
      return this.setNode("variable", e, 0);
    }, t;
  }(Bt), rn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Each;
      }, enumerable: !0, configurable: !0
    }), t.prototype.getVariables = function() {
      return this.variables || (this.variables = new Ut(this)), this.variables;
    }, t;
  }(Bt), on = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.While;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), sn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Else;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), an = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.FunctionDeclaration;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setIdentifier = function(e) {
      return this.setNode("identifier", e, 0);
    }, t.prototype.getIdentifier = function() {
      return this.identifier;
    }, t.prototype.getName = function() {
      return this.identifier ? this.identifier.getText() : "";
    }, t.prototype.getParameters = function() {
      return this.parameters || (this.parameters = new Ut(this)), this.parameters;
    }, t;
  }(Bt), ln = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.ViewPort;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), cn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.FontFace;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), hn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.NestedProperties;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), dn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Keyframe;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setKeyword = function(e) {
      return this.setNode("keyword", e, 0);
    }, t.prototype.getKeyword = function() {
      return this.keyword;
    }, t.prototype.setIdentifier = function(e) {
      return this.setNode("identifier", e, 0);
    }, t.prototype.getIdentifier = function() {
      return this.identifier;
    }, t.prototype.getName = function() {
      return this.identifier ? this.identifier.getText() : "";
    }, t;
  }(Bt), un = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.KeyframeSelector;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), mn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Import;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setMedialist = function(e) {
      return !!e && (e.attachTo(this), this.medialist = e, !0);
    }, t;
  }(Rt), pn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Namespace;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Rt), fn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Media;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), gn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Supports;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), bn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Document;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), yn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), t.prototype.getMediums = function() {
      return this.mediums || (this.mediums = new Ut(this)), this.mediums;
    }, t;
  }(Rt), wn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.MediaQuery;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Rt), vn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.SupportsCondition;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Rt), xn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Page;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), kn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.PageBoxMarginBox;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Bt), Cn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Expression;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Rt), Sn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.BinaryExpression;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setLeft = function(e) {
      return this.setNode("left", e);
    }, t.prototype.getLeft = function() {
      return this.left;
    }, t.prototype.setRight = function(e) {
      return this.setNode("right", e);
    }, t.prototype.getRight = function() {
      return this.right;
    }, t.prototype.setOperator = function(e) {
      return this.setNode("operator", e);
    }, t.prototype.getOperator = function() {
      return this.operator;
    }, t;
  }(Rt), _n = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Term;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setOperator = function(e) {
      return this.setNode("operator", e);
    }, t.prototype.getOperator = function() {
      return this.operator;
    }, t.prototype.setExpression = function(e) {
      return this.setNode("expression", e);
    }, t.prototype.getExpression = function() {
      return this.expression;
    }, t;
  }(Rt), Fn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.AttributeSelector;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setNamespacePrefix = function(e) {
      return this.setNode("namespacePrefix", e);
    }, t.prototype.getNamespacePrefix = function() {
      return this.namespacePrefix;
    }, t.prototype.setIdentifier = function(e) {
      return this.setNode("identifier", e);
    }, t.prototype.getIdentifier = function() {
      return this.identifier;
    }, t.prototype.setOperator = function(e) {
      return this.setNode("operator", e);
    }, t.prototype.getOperator = function() {
      return this.operator;
    }, t.prototype.setValue = function(e) {
      return this.setNode("value", e);
    }, t.prototype.getValue = function() {
      return this.value;
    }, t;
  }(Rt), En = (function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Operator;
      }, enumerable: !0, configurable: !0
    });
  }(Rt), function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.HexColorValue;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Rt)), Tn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.NumericValue;
      }, enumerable: !0, configurable: !0
    }), t.prototype.getValue = function() {
      for (var e, t = this.getText(), n = 0, r = ".".charCodeAt(0), i = "0".charCodeAt(0), o = "9".charCodeAt(0), s = 0, a = t.length; s < a && (i <= (e = t.charCodeAt(s)) && e <= o || e === r); s++) n += 1;
      return { value: t.substring(0, n), unit: n < t.length ? t.substring(n) : void 0 };
    }, t;
  }(Rt), In = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.VariableDeclaration;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setVariable = function(e) {
      return !!e && (e.attachTo(this), this.variable = e, !0);
    }, t.prototype.getVariable = function() {
      return this.variable;
    }, t.prototype.getName = function() {
      return this.variable ? this.variable.getName() : "";
    }, t.prototype.setValue = function(e) {
      return !!e && (e.attachTo(this), this.value = e, !0);
    }, t.prototype.getValue = function() {
      return this.value;
    }, t;
  }(Gt), An = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.Interpolation;
      }, enumerable: !0, configurable: !0
    }), t;
  }(Rt), Pn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.VariableName;
      }, enumerable: !0, configurable: !0
    }), t.prototype.getName = function() {
      return this.getText();
    }, t;
  }(Rt), On = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.ExtendsReference;
      }, enumerable: !0, configurable: !0
    }), t.prototype.getSelectors = function() {
      return this.selectors || (this.selectors = new Ut(this)), this.selectors;
    }, t;
  }(Rt), zn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.MixinReference;
      }, enumerable: !0, configurable: !0
    }), t.prototype.getNamespaces = function() {
      return this.namespaces || (this.namespaces = new Ut(this)), this.namespaces;
    }, t.prototype.setIdentifier = function(e) {
      return this.setNode("identifier", e, 0);
    }, t.prototype.getIdentifier = function() {
      return this.identifier;
    }, t.prototype.getName = function() {
      return this.identifier ? this.identifier.getText() : "";
    }, t.prototype.getArguments = function() {
      return this.arguments || (this.arguments = new Ut(this)), this.arguments;
    }, t.prototype.setContent = function(e) {
      return this.setNode("content", e);
    }, t.prototype.getContent = function() {
      return this.content;
    }, t;
  }(Rt), Ln = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.MixinDeclaration;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setIdentifier = function(e) {
      return this.setNode("identifier", e, 0);
    }, t.prototype.getIdentifier = function() {
      return this.identifier;
    }, t.prototype.getName = function() {
      return this.identifier ? this.identifier.getText() : "";
    }, t.prototype.getParameters = function() {
      return this.parameters || (this.parameters = new Ut(this)), this.parameters;
    }, t.prototype.setGuard = function(e) {
      return e && (e.attachTo(this), this.guard = e), !1;
    }, t;
  }(Bt), Dn = function(e) {
    function t(t, n) {
      return e.call(this, t, n) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.UnknownAtRule;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setAtRuleName = function(e) {
      this.atRuleName = e;
    }, t.prototype.getAtRuleName = function(e) {
      return this.atRuleName;
    }, t;
  }(Bt), Nn = function(e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return zt(t, e), Object.defineProperty(t.prototype, "type", {
      get: function() {
        return At.ListEntry;
      }, enumerable: !0, configurable: !0
    }), t.prototype.setKey = function(e) {
      return this.setNode("key", e, 0);
    }, t.prototype.setValue = function(e) {
      return this.setNode("value", e, 1);
    }, t;
  }(Rt), Rn = function(e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return zt(t, e), t.prototype.getConditions = function() {
      return this.conditions || (this.conditions = new Ut(this)), this.conditions;
    }, t;
  }(Rt), Un = function(e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return zt(t, e), t.prototype.setVariable = function(e) {
      return this.setNode("variable", e);
    }, t;
  }(Rt);
  !function(e) {
    e[e.Ignore = 1] = "Ignore", e[e.Warning = 2] = "Warning", e[e.Error = 4] = "Error";
  }(Nt || (Nt = {}));
  var Mn = function() {
    function e(e, t, n, r, i, o) {
      void 0 === i && (i = e.offset), void 0 === o && (o = e.length), this.node = e, this.rule = t, this.level = n, this.message = r || t.message, this.offset = i, this.length = o;
    }

    return e.prototype.getRule = function() {
      return this.rule;
    }, e.prototype.getLevel = function() {
      return this.level;
    }, e.prototype.getOffset = function() {
      return this.offset;
    }, e.prototype.getLength = function() {
      return this.length;
    }, e.prototype.getNode = function() {
      return this.node;
    }, e.prototype.getMessage = function() {
      return this.message;
    }, e;
  }(), jn = function() {
    function e() {
      this.entries = [];
    }

    return e.entries = function(t) {
      var n = new e;
      return t.acceptVisitor(n), n.entries;
    }, e.prototype.visitNode = function(e) {
      return e.isErroneous() && e.collectIssues(this.entries), !0;
    }, e;
  }();

  function Vn(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
    return function(e, t) {
      return 0 === t.length ? e : e.replace(/\{(\d+)\}/g, function(e, n) {
        var r = n[0];
        return void 0 !== t[r] ? t[r] : e;
      });
    }(t, n);
  }

  function Bn(e) {
    return Vn;
  }

  var Kn = Bn(), qn = function() {
      return function(e, t) {
        this.id = e, this.message = t;
      };
    }(), Wn = {
      NumberExpected: new qn("css-numberexpected", Kn("expected.number", "number expected")),
      ConditionExpected: new qn("css-conditionexpected", Kn("expected.condt", "condition expected")),
      RuleOrSelectorExpected: new qn("css-ruleorselectorexpected", Kn("expected.ruleorselector", "at-rule or selector expected")),
      DotExpected: new qn("css-dotexpected", Kn("expected.dot", "dot expected")),
      ColonExpected: new qn("css-colonexpected", Kn("expected.colon", "colon expected")),
      SemiColonExpected: new qn("css-semicolonexpected", Kn("expected.semicolon", "semi-colon expected")),
      TermExpected: new qn("css-termexpected", Kn("expected.term", "term expected")),
      ExpressionExpected: new qn("css-expressionexpected", Kn("expected.expression", "expression expected")),
      OperatorExpected: new qn("css-operatorexpected", Kn("expected.operator", "operator expected")),
      IdentifierExpected: new qn("css-identifierexpected", Kn("expected.ident", "identifier expected")),
      PercentageExpected: new qn("css-percentageexpected", Kn("expected.percentage", "percentage expected")),
      URIOrStringExpected: new qn("css-uriorstringexpected", Kn("expected.uriorstring", "uri or string expected")),
      URIExpected: new qn("css-uriexpected", Kn("expected.uri", "URI expected")),
      VariableNameExpected: new qn("css-varnameexpected", Kn("expected.varname", "variable name expected")),
      VariableValueExpected: new qn("css-varvalueexpected", Kn("expected.varvalue", "variable value expected")),
      PropertyValueExpected: new qn("css-propertyvalueexpected", Kn("expected.propvalue", "property value expected")),
      LeftCurlyExpected: new qn("css-lcurlyexpected", Kn("expected.lcurly", "{ expected")),
      RightCurlyExpected: new qn("css-rcurlyexpected", Kn("expected.rcurly", "} expected")),
      LeftSquareBracketExpected: new qn("css-rbracketexpected", Kn("expected.lsquare", "[ expected")),
      RightSquareBracketExpected: new qn("css-lbracketexpected", Kn("expected.rsquare", "] expected")),
      LeftParenthesisExpected: new qn("css-lparentexpected", Kn("expected.lparen", "( expected")),
      RightParenthesisExpected: new qn("css-rparentexpected", Kn("expected.rparent", ") expected")),
      CommaExpected: new qn("css-commaexpected", Kn("expected.comma", "comma expected")),
      PageDirectiveOrDeclarationExpected: new qn("css-pagedirordeclexpected", Kn("expected.pagedirordecl", "page directive or declaraton expected")),
      UnknownAtRule: new qn("css-unknownatrule", Kn("unknown.atrule", "at-rule unknown")),
      UnknownKeyword: new qn("css-unknownkeyword", Kn("unknown.keyword", "unknown keyword")),
      SelectorExpected: new qn("css-selectorexpected", Kn("expected.selector", "selector expected")),
      StringLiteralExpected: new qn("css-stringliteralexpected", Kn("expected.stringliteral", "string literal expected")),
      WhitespaceExpected: new qn("css-whitespaceexpected", Kn("expected.whitespace", "whitespace expected")),
      MediaQueryExpected: new qn("css-mediaqueryexpected", Kn("expected.mediaquery", "media query expected"))
    }, $n = {
      atdirectives: [{
        name: "@charset",
        desc: "Defines character set of the document.",
        browsers: "FF1.5,S4,C2,IE5.5,O9"
      }, { name: "@counter-style", desc: "Defines a custom counter style.", browsers: "FF33" }, {
        name: "@font-face",
        desc: "Allows for linking to fonts that are automatically activated when needed. This permits authors to work around the limitation of 'web-safe' fonts, allowing for consistent rendering independent of the fonts available in a given user's environment.",
        browsers: "all"
      }, {
        name: "@font-feature-values",
        desc: "Defines named values for the indices used to select alternate glyphs for a given font family.",
        browsers: "FF34,S9.1"
      }, { name: "@import", desc: "Includes content of another file.", browsers: "all" }, {
        name: "@keyframes",
        desc: "Defines set of animation key frames.",
        browsers: "all"
      }, {
        name: "@media",
        desc: "Defines a stylesheet for a particular media type.",
        browsers: "all"
      }, {
        name: "@-moz-document",
        desc: "Gecko-specific at-rule that restricts the style rules contained within it based on the URL of the document.",
        browsers: "FF1.8"
      }, {
        name: "@-moz-keyframes",
        desc: "Defines set of animation key frames.",
        browsers: "FF5"
      }, {
        name: "@-ms-viewport",
        desc: "Specifies the size, zoom factor, and orientation of the viewport.",
        browsers: "E,IE10"
      }, {
        name: "@namespace",
        desc: "Declares a prefix and associates it with a namespace name.",
        browsers: "all"
      }, { name: "@-o-keyframes", desc: "Defines set of animation key frames.", browsers: "O12" }, {
        name: "@-o-viewport",
        desc: "Specifies the size, zoom factor, and orientation of the viewport.",
        browsers: "O11"
      }, {
        name: "@page",
        desc: "Directive defines various page parameters.",
        browsers: "E,FF19,C2,IE8,O6"
      }, {
        name: "@supports",
        desc: "A conditional group rule whose condition tests whether the user agent supports CSS property:value pairs.",
        browsers: "E12,FF22,S9,C28,O12.1"
      }, { name: "@-webkit-keyframes", desc: "Defines set of animation key frames.", browsers: "C,S4" }],
      pseudoclasses: [{
        name: ":active",
        desc: "Applies while an element is being activated by the user. For example, between the times the user presses the mouse button and releases it.",
        browsers: "all"
      }, {
        name: ":any-link",
        desc: "Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links.",
        browsers: "FF,S,C,O"
      }, {
        name: ":checked",
        desc: "Radio and checkbox elements can be toggled by the user. Some menu items are 'checked' when the user selects them. When such elements are toggled 'on' the :checked pseudo-class applies.",
        browsers: "all"
      }, {
        name: ":corner-present",
        desc: "Non-standard. Indicates whether or not a scrollbar corner is present.",
        browsers: "C,S5"
      }, {
        name: ":decrement",
        desc: "Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will decrement the view’s position when used.",
        browsers: "C,S5"
      }, {
        name: ":default",
        desc: "Applies to the one or more UI elements that are the default among a set of similar elements. Typically applies to context menu items, buttons, and select lists/menus.",
        browsers: "FF4,S5,C10,O10"
      }, {
        name: ":disabled",
        desc: "Represents user interface elements that are in a disabled state; such elements have a corresponding enabled state.",
        browsers: "all"
      }, {
        name: ":double-button",
        desc: "Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed together at the same end of the scrollbar.",
        browsers: "C,S5"
      }, {
        name: ":empty",
        desc: "Represents an element that has no children at all.",
        browsers: "all"
      }, {
        name: ":enabled",
        desc: "Represents user interface elements that are in an enabled state; such elements have a corresponding disabled state.",
        browsers: "all"
      }, {
        name: ":end",
        desc: "Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed after the thumb.",
        browsers: "C,S5"
      }, {
        name: ":first",
        desc: "When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.",
        browsers: "E,IE8,O9.2"
      }, {
        name: ":first-child",
        desc: "Same as :nth-child(1). Represents an element that is the first child of some other element.",
        browsers: "all"
      }, {
        name: ":first-of-type",
        desc: "Same as :nth-of-type(1). Represents an element that is the first sibling of its type in the list of children of its parent element.",
        browsers: "all"
      }, {
        name: ":focus",
        desc: "Applies while an element has the focus (accepts keyboard or mouse events, or other forms of input).",
        browsers: "all"
      }, {
        name: ":fullscreen",
        desc: "Matches any element that has its fullscreen flag set.",
        browsers: "E12,FF9,S6,C15,IE11"
      }, {
        name: ":future",
        desc: "Represents any element that is defined to occur entirely after a :current element.",
        browsers: "C,O16,S6"
      }, {
        name: ":horizontal",
        desc: "Non-standard. Applies to any scrollbar pieces that have a horizontal orientation.",
        browsers: "C,S5"
      }, {
        name: ":host",
        desc: "When evaluated in the context of a shadow tree, matches the shadow tree’s host element.",
        browsers: "FF61,S,C,O"
      }, {
        name: ":host()",
        desc: "When evaluated in the context of a shadow tree, it matches the shadow tree’s host element if the host element, in its normal context, matches the selector argument.",
        browsers: "C35,O22"
      }, {
        name: ":host-context()",
        desc: "Tests whether there is an ancestor, outside the shadow tree, which matches a particular selector.",
        browsers: "C35,O22"
      }, {
        name: ":hover",
        desc: "Applies while the user designates an element with a pointing device, but does not necessarily activate it. For example, a visual user agent could apply this pseudo-class when the cursor (mouse pointer) hovers over a box generated by the element.",
        browsers: "all"
      }, {
        name: ":increment",
        desc: "Non-standard. Applies to buttons and track pieces. Indicates whether or not the button or track piece will increment the view’s position when used.",
        browsers: "C,S5"
      }, {
        name: ":indeterminate",
        desc: "Applies to UI elements whose value is in an indeterminate state.",
        browsers: "all"
      }, {
        name: ":in-range",
        desc: "Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.",
        browsers: "E,FF29,S,C10,O11"
      }, {
        name: ":invalid",
        desc: "An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.",
        browsers: "all"
      }, {
        name: ":lang()",
        desc: "Represents an element that is in language specified.",
        browsers: "E,C,FF1,IE8,O8,S3"
      }, {
        name: ":last-child",
        desc: "Same as :nth-last-child(1). Represents an element that is the last child of some other element.",
        browsers: "all"
      }, {
        name: ":last-of-type",
        desc: "Same as :nth-last-of-type(1). Represents an element that is the last sibling of its type in the list of children of its parent element.",
        browsers: "all"
      }, {
        name: ":left",
        desc: "When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.",
        browsers: "E,IE8,O9.2"
      }, {
        name: ":link",
        desc: "Applies to links that have not yet been visited.",
        browsers: "all"
      }, {
        name: ":matches()",
        desc: "Takes a selector list as its argument. It represents an element that is represented by its argument.",
        browsers: "S9"
      }, {
        name: ":-moz-any()",
        desc: "Represents an element that is represented by the selector list passed as its argument. Standardized as :matches().",
        browsers: "FF4"
      }, {
        name: ":-moz-any-link",
        desc: "Represents an element that acts as the source anchor of a hyperlink. Applies to both visited and unvisited links.",
        browsers: "FF1"
      }, {
        name: ":-moz-broken",
        desc: "Non-standard. Matches elements representing broken images.",
        browsers: "FF3"
      }, {
        name: ":-moz-drag-over",
        desc: "Non-standard. Matches elements when a drag-over event applies to it.",
        browsers: "FF1"
      }, {
        name: ":-moz-first-node",
        desc: "Non-standard. Represents an element that is the first child node of some other element.",
        browsers: "FF1"
      }, {
        name: ":-moz-focusring",
        desc: "Non-standard. Matches an element that has focus and focus ring drawing is enabled in the browser.",
        browsers: "FF4"
      }, {
        name: ":-moz-full-screen",
        desc: "Matches any element that has its fullscreen flag set. Standardized as :fullscreen.",
        browsers: "FF9"
      }, {
        name: ":-moz-last-node",
        desc: "Non-standard. Represents an element that is the last child node of some other element.",
        browsers: "FF1"
      }, {
        name: ":-moz-loading",
        desc: "Non-standard. Matches elements, such as images, that haven’t started loading yet.",
        browsers: "FF3"
      }, {
        name: ":-moz-only-whitespace",
        desc: "The same as :empty, except that it additionally matches elements that only contain code points affected by whitespace processing. Standardized as :blank.",
        browsers: "FF1.5"
      }, {
        name: ":-moz-placeholder",
        desc: "Deprecated. Represents placeholder text in an input field. Use ::-moz-placeholder for Firefox 19+.",
        browsers: "FF4"
      }, {
        name: ":-moz-submit-invalid",
        desc: "Non-standard. Represents any submit button when the contents of the associated form are not valid.",
        browsers: "FF4"
      }, {
        name: ":-moz-suppressed",
        desc: "Non-standard. Matches elements representing images that have been blocked from loading.",
        browsers: "FF3"
      }, {
        name: ":-moz-ui-invalid",
        desc: "Non-standard. Represents any validated form element whose value isn't valid ",
        browsers: "FF4"
      }, {
        name: ":-moz-ui-valid",
        desc: "Non-standard. Represents any validated form element whose value is valid ",
        browsers: "FF4"
      }, {
        name: ":-moz-user-disabled",
        desc: "Non-standard. Matches elements representing images that have been disabled due to the user’s preferences.",
        browsers: "FF3"
      }, {
        name: ":-moz-window-inactive",
        desc: "Non-standard. Matches elements in an inactive window.",
        browsers: "FF4"
      }, {
        name: ":-ms-fullscreen",
        desc: "Matches any element that has its fullscreen flag set.",
        browsers: "IE11"
      }, {
        name: ":-ms-input-placeholder",
        desc: "Represents placeholder text in an input field. Note: for Edge use the pseudo-element ::-ms-input-placeholder. Standardized as ::placeholder.",
        browsers: "IE10"
      }, {
        name: ":-ms-keyboard-active",
        desc: "Windows Store apps only. Applies one or more styles to an element when it has focus and the user presses the space bar.",
        browsers: "IE10"
      }, {
        name: ":-ms-lang()",
        desc: "Represents an element that is in the language specified. Accepts a comma seperated list of language tokens.",
        browsers: "E,IE10"
      }, {
        name: ":no-button",
        desc: "Non-standard. Applies to track pieces. Applies when there is no button at that end of the track.",
        browsers: "C,S5"
      }, {
        name: ":not()",
        desc: "The negation pseudo-class, :not(X), is a functional notation taking a simple selector (excluding the negation pseudo-class itself) as an argument. It represents an element that is not represented by its argument.",
        browsers: "E,C,FF1,IE9,O9.5,S2"
      }, {
        name: ":nth-child()",
        desc: "Represents an element that has an+b-1 siblings before it in the document tree, for any positive integer or zero value of n, and has a parent element.",
        browsers: "E,C,FF3.5,IE9,O9.5,S3.1"
      }, {
        name: ":nth-last-child()",
        desc: "Represents an element that has an+b-1 siblings after it in the document tree, for any positive integer or zero value of n, and has a parent element.",
        browsers: "E,C,FF3.5,IE9,O9.5,S3.1"
      }, {
        name: ":nth-last-of-type()",
        desc: "Represents an element that has an+b-1 siblings with the same expanded element name after it in the document tree, for any zero or positive integer value of n, and has a parent element.",
        browsers: "E,C,FF3.5,IE9,O9.5,S3.1"
      }, {
        name: ":nth-of-type()",
        desc: "Represents an element that has an+b-1 siblings with the same expanded element name before it in the document tree, for any zero or positive integer value of n, and has a parent element.",
        browsers: "E,C,FF3.5,IE9,O9.5,S3.1"
      }, {
        name: ":only-child",
        desc: "Represents an element that has a parent element and whose parent element has no other element children. Same as :first-child:last-child or :nth-child(1):nth-last-child(1), but with a lower specificity.",
        browsers: "all"
      }, {
        name: ":only-of-type",
        desc: "Matches every element that is the only child of its type, of its parent. Same as :first-of-type:last-of-type or :nth-of-type(1):nth-last-of-type(1), but with a lower specificity.",
        browsers: "all"
      }, {
        name: ":optional",
        desc: "A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.",
        browsers: "all"
      }, {
        name: ":out-of-range",
        desc: "Used in conjunction with the min and max attributes, whether on a range input, a number field, or any other types that accept those attributes.",
        browsers: "E,FF29,S,C10,O11"
      }, {
        name: ":past",
        desc: "Represents any element that is defined to occur entirely prior to a :current element.",
        browsers: "C,O16,S6"
      }, {
        name: ":read-only",
        desc: "An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.",
        browsers: "E,FF,S,C,O"
      }, {
        name: ":read-write",
        desc: "An element whose contents are not user-alterable is :read-only. However, elements whose contents are user-alterable (such as text input fields) are considered to be in a :read-write state. In typical documents, most elements are :read-only.",
        browsers: "E,FF,S,C,O"
      }, {
        name: ":required",
        desc: "A form element is :required or :optional if a value for it is, respectively, required or optional before the form it belongs to is submitted. Elements that are not form elements are neither required nor optional.",
        browsers: "all"
      }, {
        name: ":right",
        desc: "When printing double-sided documents, the page boxes on left and right pages may be different. This can be expressed through CSS pseudo-classes defined in the  page context.",
        browsers: "E,IE8,O9.2"
      }, {
        name: ":root",
        desc: "Represents an element that is the root of the document. In HTML 4, this is always the HTML element.",
        browsers: "FF1,S1,C1,IE9,O9.5"
      }, {
        name: ":scope",
        desc: "Represents any element that is in the contextual reference element set.",
        browsers: "FF32,S7,O15"
      }, {
        name: ":single-button",
        desc: "Non-standard. Applies to buttons and track pieces. Applies when both buttons are displayed separately at either end of the scrollbar.",
        browsers: "C,S5"
      }, {
        name: ":start",
        desc: "Non-standard. Applies to buttons and track pieces. Indicates whether the object is placed before the thumb.",
        browsers: "C,S5"
      }, {
        name: ":target",
        desc: "Some URIs refer to a location within a resource. This kind of URI ends with a 'number sign' (#) followed by an anchor identifier (called the fragment identifier).",
        browsers: "all"
      }, {
        name: ":valid",
        desc: "An element is :valid or :invalid when it is, respectively, valid or invalid with respect to data validity semantics defined by a different specification.",
        browsers: "all"
      }, {
        name: ":vertical",
        desc: "Non-standard. Applies to any scrollbar pieces that have a vertical orientation.",
        browsers: "C,S5"
      }, {
        name: ":visited",
        desc: "Applies once the link has been visited by the user.",
        browsers: "all"
      }, {
        name: ":-webkit-any()",
        desc: "Represents an element that is represented by the selector list passed as its argument. Standardized as :matches().",
        browsers: "C,S5"
      }, {
        name: ":-webkit-full-screen",
        desc: "Matches any element that has its fullscreen flag set. Standardized as :fullscreen.",
        browsers: "C,S6"
      }, {
        name: ":window-inactive",
        desc: "Non-standard. Applies to all scrollbar pieces. Indicates whether or not the window containing the scrollbar is currently active.",
        browsers: "C,S3"
      }, {
        name: ":defined",
        desc: "The :defined CSS pseudo-class represents any element that has been defined. This includes any standard element built in to the browser, and custom elements that have been successfully defined (i.e. with the CustomElementRegistry.define() method).",
        browsers: "S,C,O"
      }, {
        name: ":dir",
        desc: "The :dir() CSS pseudo-class matches elements based on the directionality of the text contained in them.",
        browsers: "FF49"
      }, {
        name: ":focus-visible",
        desc: "The :focus-visible pseudo-class applies while an element matches the :focus pseudo-class and the UA determines via heuristics that the focus should be made evident on the element."
      }, {
        name: ":focus-within",
        desc: "The :focus-within pseudo-class applies to any element for which the :focus pseudo class applies as well as to an element whose descendant in the flat tree (including non-element nodes, such as text nodes) matches the conditions for matching :focus.",
        browsers: "FF52,S10.1,C60,O47"
      }, {
        name: ":placeholder-shown",
        desc: "The :placeholder-shown CSS pseudo-class represents any <input> or <textarea> element that is currently displaying placeholder text.",
        browsers: "FF51,S9,C47,O34"
      }],
      pseudoelements: [{
        name: "::after",
        desc: "Represents a styleable child pseudo-element immediately after the originating element’s actual content.",
        browsers: "all"
      }, {
        name: "::backdrop",
        desc: "Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).",
        browsers: "E,FF47,C37,IE11"
      }, {
        name: "::before",
        desc: "Represents a styleable child pseudo-element immediately before the originating element’s actual content.",
        browsers: "all"
      }, {
        name: "::content",
        desc: "Deprecated. Matches the distribution list itself, on elements that have one. Use ::slotted for forward compatibility.",
        browsers: "C35,O22"
      }, { name: "::cue", browsers: "FF55,C" }, { name: "::cue()", browsers: "C,O16,S6" }, {
        name: "::cue-region",
        browsers: "C,O16,S6"
      }, { name: "::cue-region()", browsers: "C,O16,S6" }, {
        name: "::first-letter",
        desc: "Represents the first letter of an element, if it is not preceded by any other content (such as images or inline tables) on its line.",
        browsers: "all"
      }, {
        name: "::first-line",
        desc: "Describes the contents of the first formatted line of its originating element.",
        browsers: "all"
      }, { name: "::-moz-focus-inner", browsers: "FF4" }, {
        name: "::-moz-focus-outer",
        browsers: "FF4"
      }, {
        name: "::-moz-list-bullet",
        desc: "Used to style the bullet of a list element. Similar to the standardized ::marker.",
        browsers: "FF1"
      }, {
        name: "::-moz-list-number",
        desc: "Used to style the numbers of a list element. Similar to the standardized ::marker.",
        browsers: "FF1"
      }, {
        name: "::-moz-placeholder",
        desc: "Represents placeholder text in an input field",
        browsers: "FF19"
      }, {
        name: "::-moz-progress-bar",
        desc: "Represents the bar portion of a progress bar.",
        browsers: "FF9"
      }, {
        name: "::-moz-selection",
        desc: "Represents the portion of a document that has been highlighted by the user.",
        browsers: "FF1"
      }, {
        name: "::-ms-backdrop",
        desc: "Used to create a backdrop that hides the underlying document for an element in a top layer (such as an element that is displayed fullscreen).",
        browsers: "IE11"
      }, {
        name: "::-ms-browse",
        desc: "Represents the browse button of an input type=file control.",
        browsers: "E,IE10"
      }, {
        name: "::-ms-check",
        desc: "Represents the check of a checkbox or radio button input control.",
        browsers: "E,IE10"
      }, {
        name: "::-ms-clear",
        desc: "Represents the clear button of a text input control",
        browsers: "E,IE10"
      }, {
        name: "::-ms-expand",
        desc: "Represents the drop-down button of a select control.",
        browsers: "E,IE10"
      }, {
        name: "::-ms-fill",
        desc: "Represents the bar portion of a progress bar.",
        browsers: "E,IE10"
      }, {
        name: "::-ms-fill-lower",
        desc: "Represents the portion of the slider track from its smallest value up to the value currently selected by the thumb. In a left-to-right layout, this is the portion of the slider track to the left of the thumb.",
        browsers: "E,IE10"
      }, {
        name: "::-ms-fill-upper",
        desc: "Represents the portion of the slider track from the value currently selected by the thumb up to the slider's largest value. In a left-to-right layout, this is the portion of the slider track to the right of the thumb.",
        browsers: "E,IE10"
      }, {
        name: "::-ms-reveal",
        desc: "Represents the password reveal button of an input type=password control.",
        browsers: "E,IE10"
      }, {
        name: "::-ms-thumb",
        desc: "Represents the portion of range input control (also known as a slider control) that the user drags.",
        browsers: "E,IE10"
      }, {
        name: "::-ms-ticks-after",
        desc: "Represents the tick marks of a slider that begin just after the thumb and continue up to the slider's largest value. In a left-to-right layout, these are the ticks to the right of the thumb.",
        browsers: "E,IE10"
      }, {
        name: "::-ms-ticks-before",
        desc: "Represents the tick marks of a slider that represent its smallest values up to the value currently selected by the thumb. In a left-to-right layout, these are the ticks to the left of the thumb.",
        browsers: "E,IE10"
      }, {
        name: "::-ms-tooltip",
        desc: "Represents the tooltip of a slider (input type=range).",
        browsers: "E,IE10"
      }, { name: "::-ms-track", desc: "Represents the track of a slider.", browsers: "E,IE10" }, {
        name: "::-ms-value",
        desc: "Represents the content of a text or password input control, or a select control.",
        browsers: "E,IE10"
      }, {
        name: "::selection",
        desc: "Represents the portion of a document that has been highlighted by the user.",
        browsers: "all"
      }, {
        name: "::shadow",
        desc: "Matches the shadow root if an element has a shadow tree.",
        browsers: "C35,O22"
      }, { name: "::-webkit-file-upload-button", browsers: "C,O,S6" }, {
        name: "::-webkit-inner-spin-button",
        browsers: "C,O,S6"
      }, { name: "::-webkit-input-placeholder", browsers: "C,S4" }, {
        name: "::-webkit-keygen-select",
        browsers: "C,O,S6"
      }, { name: "::-webkit-meter-bar", browsers: "S,C,O" }, {
        name: "::-webkit-meter-even-less-good-value",
        browsers: "S,C,O"
      }, { name: "::-webkit-meter-optimum-value", browsers: "S,C,O" }, {
        name: "::-webkit-meter-suboptimal-value",
        browsers: "E13,C,O15,S6"
      }, { name: "::-webkit-outer-spin-button", browsers: "C,O,S6" }, {
        name: "::-webkit-progress-bar",
        browsers: "S,C,O"
      }, { name: "::-webkit-progress-inner-element", browsers: "S,C,O" }, {
        name: "::-webkit-progress-value",
        browsers: "S,C,O"
      }, { name: "::-webkit-resizer", browsers: "C,S5" }, {
        name: "::-webkit-scrollbar",
        browsers: "C,S5"
      }, { name: "::-webkit-scrollbar-button", browsers: "C,S5" }, {
        name: "::-webkit-scrollbar-corner",
        browsers: "C,S5"
      }, { name: "::-webkit-scrollbar-thumb", browsers: "C,S5" }, {
        name: "::-webkit-scrollbar-track",
        browsers: "C,S5"
      }, { name: "::-webkit-scrollbar-track-piece", browsers: "C,S5" }, {
        name: "::-webkit-search-cancel-button",
        browsers: "S,C"
      }, { name: "::-webkit-search-decoration", browsers: "C,S4" }, {
        name: "::-webkit-search-results-button",
        browsers: "S,C"
      }, { name: "::-webkit-search-results-decoration", browsers: "C,S4" }, {
        name: "::-webkit-slider-runnable-track",
        browsers: "C,O,S6"
      }, { name: "::-webkit-slider-thumb", browsers: "C,O,S6" }, {
        name: "::-webkit-textfield-decoration-container",
        browsers: "C,O,S6"
      }, { name: "::-webkit-validation-bubble", browsers: "C,O,S6" }, {
        name: "::-webkit-validation-bubble-arrow",
        browsers: "C,O,S6"
      }, {
        name: "::-webkit-validation-bubble-arrow-clipper",
        browsers: "C,O,S6"
      }, {
        name: "::-webkit-validation-bubble-heading",
        browsers: "C,O,S6"
      }, {
        name: "::-webkit-validation-bubble-message",
        browsers: "C,O,S6"
      }, { name: "::-webkit-validation-bubble-text-block", browsers: "C,O,S6" }, {
        name: "::-moz-range-progress",
        desc: "The ::-moz-range-progress CSS pseudo-element is a Mozilla extension that represents the lower portion of the track (i.e., groove) in which the indicator slides in an <input> of type=\"range\". This portion corresponds to values lower than the value currently selected by the thumb (i.e., virtual knob)."
      }, {
        name: "::-moz-range-thumb",
        desc: "The ::-moz-range-thumb CSS pseudo-element is a Mozilla extension that represents the thumb (i.e., virtual knob) of an <input> of type=\"range\". The user can move the thumb along the input's track to alter its numerical value."
      }, {
        name: "::-moz-range-track",
        desc: "The ::-moz-range-track CSS pseudo-element is a Mozilla extension that represents the track (i.e., groove) in which the indicator slides in an <input> of type=\"range\"."
      }, {
        name: "::-webkit-progress-inner-value",
        desc: "The ::-webkit-progress-value CSS pseudo-element represents the filled-in portion of the bar of a <progress> element. It is a child of the ::-webkit-progress-bar pseudo-element.\n\nIn order to let ::-webkit-progress-value take effect, -webkit-appearance needs to be set to none on the <progress> element."
      }, {
        name: "::grammar-error",
        desc: "The ::grammar-error CSS pseudo-element represents a text segment which the user agent has flagged as grammatically incorrect."
      }, {
        name: "::placeholder",
        desc: "The ::placeholder CSS pseudo-element represents the placeholder text of a form element.",
        browsers: "all"
      }, {
        name: "::spelling-error",
        desc: "The ::spelling-error CSS pseudo-element represents a text segment which the user agent has flagged as incorrectly spelled."
      }],
      properties: [{
        name: "additive-symbols",
        desc: "@counter-style descriptor. Specifies the symbols used by the marker-construction algorithm specified by the system descriptor. Needs to be specified if the counter system is 'additive'.",
        browsers: "FF33",
        restriction: "integer, string, image, identifier",
        syntax: "[ <integer> && <symbol> ]#"
      }, {
        name: "align-content",
        desc: "Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "center",
          desc: "Lines are packed toward the center of the flex container."
        }, { name: "flex-end", desc: "Lines are packed toward the end of the flex container." }, {
          name: "flex-start",
          desc: "Lines are packed toward the start of the flex container."
        }, {
          name: "space-around",
          desc: "Lines are evenly distributed in the flex container, with half-size spaces on either end."
        }, { name: "space-between", desc: "Lines are evenly distributed in the flex container." }, {
          name: "stretch",
          desc: "Lines stretch to take up the remaining space."
        }],
        syntax: "normal | <baseline-position> | <content-distribution> | <overflow-position>? <content-position>"
      }, {
        name: "align-items",
        desc: "Aligns flex items along the cross axis of the current line of the flex container.",
        browsers: "E,C29,FF22,IE11,O12.1,S9",
        restriction: "enum",
        values: [{
          name: "baseline",
          desc: "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
        }, {
          name: "center",
          desc: "The flex item’s margin box is centered in the cross axis within the line."
        }, {
          name: "flex-end",
          desc: "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
        }, {
          name: "flex-start",
          desc: "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
        }, {
          name: "stretch",
          desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
        }],
        syntax: "normal | stretch | <baseline-position> | [ <overflow-position>? <self-position> ]"
      }, {
        name: "justify-items",
        desc: "Defines the default justify-self for all items of the box, given them the default way of justifying each box along the appropriate axi",
        browsers: "E16,FF45",
        restriction: "enum",
        values: [{ name: "auto" }, { name: "normal" }, { name: "end" }, { name: "start" }, {
          name: "flex-end",
          desc: "\"Flex items are packed toward the end of the line.\""
        }, {
          name: "flex-start",
          desc: "\"Flex items are packed toward the start of the line.\""
        }, { name: "self-end" }, { name: "self-start" }, {
          name: "center",
          desc: "The items are packed flush to each other toward the center of the of the alignment container."
        }, { name: "left" }, { name: "right" }, { name: "baseline" }, { name: "first baseline" }, { name: "last baseline" }, {
          name: "stretch",
          desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
        }, { name: "save" }, { name: "unsave" }, { name: "legacy" }],
        syntax: "normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ] | legacy | legacy && [ left | right | center ]"
      }, {
        name: "justify-self",
        desc: "Defines the way of justifying a box inside its container along the appropriate axis.",
        browsers: "E16,FF45",
        restriction: "enum",
        values: [{ name: "auto" }, { name: "normal" }, { name: "end" }, { name: "start" }, {
          name: "flex-end",
          desc: "\"Flex items are packed toward the end of the line.\""
        }, {
          name: "flex-start",
          desc: "\"Flex items are packed toward the start of the line.\""
        }, { name: "self-end" }, { name: "self-start" }, {
          name: "center",
          desc: "The items are packed flush to each other toward the center of the of the alignment container."
        }, { name: "left" }, { name: "right" }, { name: "baseline" }, { name: "first baseline" }, { name: "last baseline" }, {
          name: "stretch",
          desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
        }, { name: "save" }, { name: "unsave" }],
        syntax: "auto | normal | stretch | <baseline-position> | <overflow-position>? [ <self-position> | left | right ]"
      }, {
        name: "align-self",
        desc: "Allows the default alignment along the cross axis to be overridden for individual flex items.",
        browsers: "E12,FF20,C36,IE11,O12.1",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Computes to the value of 'align-items' on the element’s parent, or 'stretch' if the element has no parent. On absolutely positioned elements, it computes to itself."
        }, {
          name: "baseline",
          desc: "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
        }, {
          name: "center",
          desc: "The flex item’s margin box is centered in the cross axis within the line."
        }, {
          name: "flex-end",
          desc: "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
        }, {
          name: "flex-start",
          desc: "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
        }, {
          name: "stretch",
          desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
        }],
        syntax: "auto | normal | stretch | <baseline-position> | <overflow-position>? <self-position>"
      }, {
        name: "all",
        desc: "Shorthand that resets all properties except 'direction' and 'unicode-bidi'.",
        browsers: "FF27,C37,O24",
        restriction: "enum",
        values: [],
        syntax: "initial | inherit | unset | revert"
      }, {
        name: "alt",
        desc: "Provides alternative text for assistive technology to replace the genenerated content of a ::before or ::after element.",
        browsers: "S9",
        restriction: "string, enum",
        values: []
      }, {
        name: "animation",
        desc: "Shorthand property combines six of the animation properties into a single property.",
        browsers: "all",
        restriction: "time, timing-function, enum, identifier, number",
        values: [{ name: "alternate" }, { name: "alternate-reverse" }, { name: "backwards" }, {
          name: "both",
          desc: "Both forwards and backwards fill modes are applied."
        }, { name: "forwards" }, { name: "infinite", desc: "Causes the animation to repeat forever." }, {
          name: "none",
          desc: "No animation is performed"
        }, { name: "normal", desc: "Normal playback." }, {
          name: "reverse",
          desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
        }],
        syntax: "<single-animation>#"
      }, {
        name: "animation-delay",
        desc: "Defines when the animation will start.",
        browsers: "all",
        restriction: "time",
        syntax: "<time>#"
      }, {
        name: "animation-direction",
        desc: "Defines whether or not the animation should play in reverse on alternate cycles.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "alternate" }, { name: "alternate-reverse" }, {
          name: "normal",
          desc: "Normal playback."
        }, {
          name: "reverse",
          desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
        }],
        syntax: "<single-animation-direction>#"
      }, {
        name: "animation-duration",
        desc: "Defines the length of time that an animation takes to complete one cycle.",
        browsers: "all",
        restriction: "time",
        syntax: "<time>#"
      }, {
        name: "animation-fill-mode",
        desc: "Defines what values are applied by the animation outside the time it is executing.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "backwards" }, {
          name: "both",
          desc: "Both forwards and backwards fill modes are applied."
        }, { name: "forwards" }, {
          name: "none",
          desc: "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
        }],
        syntax: "<single-animation-fill-mode>#"
      }, {
        name: "animation-iteration-count",
        desc: "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
        browsers: "all",
        restriction: "number, enum",
        values: [{ name: "infinite", desc: "Causes the animation to repeat forever." }],
        syntax: "<single-animation-iteration-count>#"
      }, {
        name: "animation-name",
        desc: "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
        browsers: "all",
        restriction: "identifier, enum",
        values: [{ name: "none", desc: "No animation is performed" }],
        syntax: "[ none | <keyframes-name> ]#"
      }, {
        name: "animation-play-state",
        desc: "Defines whether the animation is running or paused.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "paused" }, { name: "running" }],
        syntax: "<single-animation-play-state>#"
      }, {
        name: "animation-timing-function",
        desc: "Describes how the animation will progress over one cycle of its duration.",
        browsers: "all",
        restriction: "timing-function",
        syntax: "<single-timing-function>#"
      }, {
        name: "backface-visibility",
        desc: "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "hidden", desc: "Back side is hidden." }, { name: "visible", desc: "Back side is visible." }],
        syntax: "visible | hidden"
      }, {
        name: "background",
        desc: "Shorthand property for setting most background properties at the same place in the style sheet.",
        browsers: "all",
        restriction: "enum, image, color, position, length, repeat, percentage, box",
        values: [{
          name: "fixed",
          desc: "The background is fixed with regard to the viewport. In paged media where there is no viewport, a 'fixed' background is fixed with respect to the page box and therefore replicated on every page."
        }, {
          name: "local",
          desc: "The background is fixed with regard to the element's contents: if the element has a scrolling mechanism, the background scrolls with the element's contents."
        }, {
          name: "scroll",
          desc: "The background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element's border.)"
        }],
        syntax: "[ <bg-layer> , ]* <final-bg-layer>"
      }, {
        name: "background-attachment",
        desc: "Specifies whether the background images are fixed with regard to the viewport ('fixed') or scroll along with the element ('scroll') or its contents ('local').",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "fixed",
          desc: "The background is fixed with regard to the viewport. In paged media where there is no viewport, a 'fixed' background is fixed with respect to the page box and therefore replicated on every page."
        }, {
          name: "local",
          desc: "The background is fixed with regard to the element’s contents: if the element has a scrolling mechanism, the background scrolls with the element’s contents.",
          browsers: "E,C,FF25,IE9,O11.5,S5"
        }, {
          name: "scroll",
          desc: "The background is fixed with regard to the element itself and does not scroll with its contents. (It is effectively attached to the element’s border.)"
        }],
        syntax: "<attachment>#"
      }, {
        name: "background-blend-mode",
        desc: "Defines the blending mode of each background layer.",
        browsers: "FF30,S,C35,O22",
        restriction: "enum",
        values: [{
          name: "normal",
          desc: "Default attribute which specifies no blending"
        }, { name: "multiply" }, { name: "screen" }, { name: "overlay" }, { name: "darken" }, { name: "lighten" }, { name: "color-dodge" }, { name: "color-burn" }, { name: "hard-light" }, { name: "soft-light" }, { name: "difference" }, { name: "exclusion" }, {
          name: "hue",
          browsers: "C35,FF30,O22"
        }, { name: "saturation", browsers: "C35,FF30,O22" }, {
          name: "color",
          browsers: "C35,FF30,O22"
        }, { name: "luminosity", browsers: "C35,FF30,O22" }],
        syntax: "<blend-mode>#"
      }, {
        name: "background-clip",
        desc: "Determines the background painting area.",
        browsers: "all",
        restriction: "box",
        syntax: "<box>#"
      }, {
        name: "background-color",
        desc: "Sets the background color of an element.",
        browsers: "all",
        restriction: "color",
        syntax: "<color>"
      }, {
        name: "background-image",
        desc: "Sets the background image(s) of an element.",
        browsers: "all",
        restriction: "image, enum",
        values: [{ name: "none", desc: "Counts as an image layer but draws nothing." }],
        syntax: "<bg-image>#"
      }, {
        name: "background-origin",
        desc: "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
        browsers: "all",
        restriction: "box",
        syntax: "<box>#"
      }, {
        name: "background-position",
        desc: "Specifies the initial position of the background image(s) (after any resizing) within their corresponding background positioning area.",
        browsers: "all",
        restriction: "position, length, percentage",
        syntax: "<bg-position>#"
      }, {
        name: "background-position-x",
        desc: "If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{
          name: "center",
          desc: "Equivalent to '50%' ('left 50%') for the horizontal position if the horizontal position is not otherwise specified, or '50%' ('top 50%') for the vertical position if it is."
        }, {
          name: "left",
          desc: "Equivalent to '0%' for the horizontal position if one or two values are given, otherwise specifies the left edge as the origin for the next offset."
        }, {
          name: "right",
          desc: "Equivalent to '100%' for the horizontal position if one or two values are given, otherwise specifies the right edge as the origin for the next offset."
        }],
        status: "e",
        syntax: "[ center | [ left | right | x-start | x-end ]? <length-percentage>? ]#"
      }, {
        name: "background-position-y",
        desc: "If background images have been specified, this property specifies their initial position (after any resizing) within their corresponding background positioning area.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{
          name: "bottom",
          desc: "Equivalent to '100%' for the vertical position if one or two values are given, otherwise specifies the bottom edge as the origin for the next offset."
        }, {
          name: "center",
          desc: "Equivalent to '50%' ('left 50%') for the horizontal position if the horizontal position is not otherwise specified, or '50%' ('top 50%') for the vertical position if it is."
        }, {
          name: "top",
          desc: "Equivalent to '0%' for the vertical position if one or two values are given, otherwise specifies the top edge as the origin for the next offset."
        }],
        status: "e",
        syntax: "[ center | [ top | bottom | y-start | y-end ]? <length-percentage>? ]#"
      }, {
        name: "background-repeat",
        desc: "Specifies how background images are tiled after they have been sized and positioned.",
        browsers: "all",
        restriction: "repeat",
        values: [],
        syntax: "<repeat-style>#"
      }, {
        name: "background-size",
        desc: "Specifies the size of the background images.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{
          name: "auto",
          desc: "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
        }, {
          name: "contain",
          desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
        }, {
          name: "cover",
          desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
        }],
        syntax: "<bg-size>#"
      }, {
        name: "behavior",
        desc: "IE only. Used to extend behaviors of the browser.",
        browsers: "IE6",
        restriction: "url"
      }, {
        name: "block-size",
        desc: "Logical 'width'. Mapping depends on the element’s 'writing-mode'.",
        browsers: "FF41",
        restriction: "length, percentage",
        values: [{ name: "auto", desc: "Depends on the values of other properties." }],
        syntax: "<'width'>"
      }, {
        name: "border",
        desc: "Shorthand property for setting border width, style, and color.",
        browsers: "all",
        restriction: "length, line-width, line-style, color",
        syntax: "<br-width> || <br-style> || <color>"
      }, {
        name: "border-block-end",
        desc: "Logical 'border-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, line-width, line-style, color",
        syntax: "<'border-width'> || <'border-style'> || <'color'>"
      }, {
        name: "border-block-start",
        desc: "Logical 'border-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, line-width, line-style, color",
        syntax: "<'border-width'> || <'border-style'> || <'color'>"
      }, {
        name: "border-block-end-color",
        desc: "Logical 'border-bottom-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "color",
        syntax: "<'color'>"
      }, {
        name: "border-block-start-color",
        desc: "Logical 'border-top-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "color",
        syntax: "<'color'>"
      }, {
        name: "border-block-end-style",
        desc: "Logical 'border-bottom-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "line-style",
        syntax: "<'border-style'>"
      }, {
        name: "border-block-start-style",
        desc: "Logical 'border-top-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "lline-style",
        syntax: "<'border-style'>"
      }, {
        name: "border-block-end-width",
        desc: "Logical 'border-bottom-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, line-width",
        syntax: "<'border-width'>"
      }, {
        name: "border-block-start-width",
        desc: "Logical 'border-top-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, line-width",
        syntax: "<'border-width'>"
      }, {
        name: "border-bottom",
        desc: "Shorthand property for setting border width, style and color.",
        browsers: "all",
        restriction: "length, line-width, line-style, color",
        syntax: "<br-width> || <br-style> || <color>"
      }, {
        name: "border-bottom-color",
        desc: "Sets the color of the bottom border.",
        browsers: "all",
        restriction: "color",
        syntax: "<color>"
      }, {
        name: "border-bottom-left-radius",
        desc: "Defines the radii of the bottom left outer border edge.",
        browsers: "all",
        restriction: "length, percentage",
        syntax: "<length-percentage>{1,2}"
      }, {
        name: "border-bottom-right-radius",
        desc: "Defines the radii of the bottom right outer border edge.",
        browsers: "all",
        restriction: "length, percentage",
        syntax: "<length-percentage>{1,2}"
      }, {
        name: "border-bottom-style",
        desc: "Sets the style of the bottom border.",
        browsers: "all",
        restriction: "line-style",
        syntax: "<br-style>"
      }, {
        name: "border-bottom-width",
        desc: "Sets the thickness of the bottom border.",
        browsers: "all",
        restriction: "length, line-width",
        syntax: "<br-width>"
      }, {
        name: "border-collapse",
        desc: "Selects a table's border model.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "collapse", desc: "Selects the collapsing borders model." }, {
          name: "separate",
          desc: "Selects the separated borders border model."
        }],
        syntax: "collapse | separate"
      }, {
        name: "border-color",
        desc: "The color of the border around all four edges of an element.",
        browsers: "all",
        restriction: "color",
        values: [],
        syntax: "<color>{1,4}"
      }, {
        name: "border-image",
        desc: "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
        browsers: "all",
        restriction: "length, percentage, number, url, enum",
        values: [{
          name: "auto",
          desc: "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
        }, { name: "fill", desc: "Causes the middle part of the border-image to be preserved." }, {
          name: "none",
          desc: "Use the border styles."
        }, { name: "repeat" }, {
          name: "round",
          desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
        }, {
          name: "space",
          desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
        }, { name: "stretch", desc: "The image is stretched to fill the area." }, { name: "url()" }],
        syntax: "<'border-image-source'> || <'border-image-slice'> [ / <'border-image-width'> | / <'border-image-width'>? / <'border-image-outset'> ]? || <'border-image-repeat'>"
      }, {
        name: "border-image-outset",
        desc: "The values specify the amount by which the border image area extends beyond the border box on the top, right, bottom, and left sides respectively. If the fourth value is absent, it is the same as the second. If the third one is also absent, it is the same as the first. If the second one is also absent, it is the same as the first. Numbers represent multiples of the corresponding border-width.",
        browsers: "all",
        restriction: "length, number",
        syntax: "[ <length> | <number> ]{1,4}"
      }, {
        name: "border-image-repeat",
        desc: "Specifies how the images for the sides and the middle part of the border image are scaled and tiled. If the second keyword is absent, it is assumed to be the same as the first.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "repeat" }, {
          name: "round",
          desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
        }, {
          name: "space",
          desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
        }, { name: "stretch", desc: "The image is stretched to fill the area." }],
        syntax: "[ stretch | repeat | round | space ]{1,2}"
      }, {
        name: "border-image-slice",
        desc: "Specifies inward offsets from the top, right, bottom, and left edges of the image, dividing it into nine regions: four corners, four edges and a middle.",
        browsers: "all",
        restriction: "number, percentage",
        values: [{ name: "fill", desc: "Causes the middle part of the border-image to be preserved." }],
        syntax: "<number-percentage>{1,4} && fill?"
      }, {
        name: "border-image-source",
        desc: "Specifies an image to use instead of the border styles given by the 'border-style' properties and as an additional background layer for the element. If the value is 'none' or if the image cannot be displayed, the border styles will be used.",
        browsers: "all",
        restriction: "image",
        values: [{ name: "none", desc: "Use the border styles." }],
        syntax: "none | <image>"
      }, {
        name: "border-image-width",
        desc: "The four values of 'border-image-width' specify offsets that are used to divide the border image area into nine parts. They represent inward distances from the top, right, bottom, and left sides of the area, respectively.",
        browsers: "all",
        restriction: "length, percentage, number",
        values: [{
          name: "auto",
          desc: "The border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
        }],
        syntax: "[ <length-percentage> | <number> | auto ]{1,4}"
      }, {
        name: "border-inline-end",
        desc: "Logical 'border-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, line-width, line-style, color",
        syntax: "<'border-width'> || <'border-style'> || <'color'>"
      }, {
        name: "border-inline-start",
        desc: "Logical 'border-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, line-width, line-style, color",
        syntax: "<'border-width'> || <'border-style'> || <'color'>"
      }, {
        name: "border-inline-end-color",
        desc: "Logical 'border-right-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "color",
        syntax: "<'color'>"
      }, {
        name: "border-inline-start-color",
        desc: "Logical 'border-left-color'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "color",
        syntax: "<'color'>"
      }, {
        name: "border-inline-end-style",
        desc: "Logical 'border-right-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "line-style",
        syntax: "<'border-style'>"
      }, {
        name: "border-inline-start-style",
        desc: "Logical 'border-left-style'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "lline-style",
        syntax: "<'border-style'>"
      }, {
        name: "border-inline-end-width",
        desc: "Logical 'border-right-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, line-width",
        syntax: "<'border-width'>"
      }, {
        name: "border-inline-start-width",
        desc: "Logical 'border-left-width'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, line-width",
        syntax: "<'border-width'>"
      }, {
        name: "border-left",
        desc: "Shorthand property for setting border width, style and color",
        browsers: "all",
        restriction: "length, line-width, line-style, color",
        syntax: "<br-width> || <br-style> || <color>"
      }, {
        name: "border-left-color",
        desc: "Sets the color of the left border.",
        browsers: "all",
        restriction: "color",
        syntax: "<color>"
      }, {
        name: "border-left-style",
        desc: "Sets the style of the left border.",
        browsers: "all",
        restriction: "line-style",
        syntax: "<br-style>"
      }, {
        name: "border-left-width",
        desc: "Sets the thickness of the left border.",
        browsers: "all",
        restriction: "length, line-width",
        syntax: "<br-width>"
      }, {
        name: "border-radius",
        desc: "Defines the radii of the outer border edge.",
        browsers: "all",
        restriction: "length, percentage",
        syntax: "<length-percentage>{1,4} [ / <length-percentage>{1,4} ]?"
      }, {
        name: "border-right",
        desc: "Shorthand property for setting border width, style and color",
        browsers: "all",
        restriction: "length, line-width, line-style, color",
        syntax: "<br-width> || <br-style> || <color>"
      }, {
        name: "border-right-color",
        desc: "Sets the color of the right border.",
        browsers: "all",
        restriction: "color",
        syntax: "<color>"
      }, {
        name: "border-right-style",
        desc: "Sets the style of the right border.",
        browsers: "all",
        restriction: "line-style",
        syntax: "<br-style>"
      }, {
        name: "border-right-width",
        desc: "Sets the thickness of the right border.",
        browsers: "all",
        restriction: "length, line-width",
        syntax: "<br-width>"
      }, {
        name: "border-spacing",
        desc: "The lengths specify the distance that separates adjoining cell borders. If one length is specified, it gives both the horizontal and vertical spacing. If two are specified, the first gives the horizontal spacing and the second the vertical spacing. Lengths may not be negative.",
        browsers: "all",
        restriction: "length",
        syntax: "<length> <length>?"
      }, {
        name: "border-style",
        desc: "The style of the border around edges of an element.",
        browsers: "all",
        restriction: "line-style",
        values: [],
        syntax: "<br-style>{1,4}"
      }, {
        name: "border-top",
        desc: "Shorthand property for setting border width, style and color",
        browsers: "all",
        restriction: "length, line-width, line-style, color",
        syntax: "<br-width> || <br-style> || <color>"
      }, {
        name: "border-top-color",
        desc: "Sets the color of the top border.",
        browsers: "all",
        restriction: "color",
        syntax: "<color>"
      }, {
        name: "border-top-left-radius",
        desc: "Defines the radii of the top left outer border edge.",
        browsers: "all",
        restriction: "length, percentage",
        syntax: "<length-percentage>{1,2}"
      }, {
        name: "border-top-right-radius",
        desc: "Defines the radii of the top right outer border edge.",
        browsers: "all",
        restriction: "length, percentage",
        syntax: "<length-percentage>{1,2}"
      }, {
        name: "border-top-style",
        desc: "Sets the style of the top border.",
        browsers: "all",
        restriction: "line-style",
        syntax: "<br-style>"
      }, {
        name: "border-top-width",
        desc: "Sets the thickness of the top border.",
        browsers: "all",
        restriction: "length, line-width",
        syntax: "<br-width>"
      }, {
        name: "border-width",
        desc: "Shorthand that sets the four 'border-*-width' properties. If it has four values, they set top, right, bottom and left in that order. If left is missing, it is the same as right; if bottom is missing, it is the same as top; if right is missing, it is the same as top.",
        browsers: "all",
        restriction: "length, line-width",
        values: [],
        syntax: "<br-width>{1,4}"
      }, {
        name: "bottom",
        desc: "Specifies how far an absolutely positioned box's bottom margin edge is offset above the bottom edge of the box's 'containing block'.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{
          name: "auto",
          desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
        }],
        syntax: "<length> | <percentage> | auto"
      }, {
        name: "box-decoration-break",
        desc: "Specifies whether individual boxes are treated as broken pieces of one continuous box, or whether each box is individually wrapped with the border and padding.",
        browsers: "FF32,S6.1,C22,O15",
        restriction: "enum",
        values: [{ name: "clone" }, { name: "slice" }],
        syntax: "slice | clone"
      }, {
        name: "box-shadow",
        desc: "Attaches one or more drop-shadows to the box. The property is a comma-separated list of shadows, each specified by 2-4 length values, an optional color, and an optional 'inset' keyword. Omitted lengths are 0; omitted colors are a user agent chosen color.",
        browsers: "all",
        restriction: "length, color, enum",
        values: [{ name: "inset" }],
        syntax: "none | <shadow>#"
      }, {
        name: "box-sizing",
        desc: "Specifies the behavior of the 'width' and 'height' properties.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "border-box" }, { name: "content-box" }],
        syntax: "content-box | border-box"
      }, {
        name: "break-after",
        desc: "Describes the page/column/region break behavior after the generated box.",
        browsers: "E12,S10,C50,IE10,O37",
        restriction: "enum",
        values: [{ name: "always", desc: "Always force a page break before/after the generated box." }, {
          name: "auto",
          desc: "Neither force nor forbid a page/column break before/after the principal box."
        }, { name: "avoid", desc: "Avoid a break before/after the principal box." }, {
          name: "avoid-column",
          desc: "Avoid a column break before/after the principal box."
        }, { name: "avoid-page", desc: "Avoid a page break before/after the principal box." }, {
          name: "column",
          desc: "Always force a column break before/after the principal box."
        }, {
          name: "left",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
        }, { name: "page", desc: "Always force a page break before/after the principal box." }, {
          name: "right",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
        }],
        syntax: "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region"
      }, {
        name: "break-before",
        desc: "Describes the page/column/region break behavior before the generated box.",
        browsers: "E12,S10,C50,IE10,O37",
        restriction: "enum",
        values: [{ name: "always", desc: "Always force a page break before/after the generated box." }, {
          name: "auto",
          desc: "Neither force nor forbid a page/column break before/after the principal box."
        }, { name: "avoid", desc: "Avoid a break before/after the principal box." }, {
          name: "avoid-column",
          desc: "Avoid a column break before/after the principal box."
        }, { name: "avoid-page", desc: "Avoid a page break before/after the principal box." }, {
          name: "column",
          desc: "Always force a column break before/after the principal box."
        }, {
          name: "left",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
        }, { name: "page", desc: "Always force a page break before/after the principal box." }, {
          name: "right",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
        }],
        syntax: "auto | avoid | avoid-page | page | left | right | recto | verso | avoid-column | column | avoid-region | region"
      }, {
        name: "break-inside",
        desc: "Describes the page/column/region break behavior inside the principal box.",
        browsers: "E12,S10,C50,IE10,O37",
        restriction: "enum",
        values: [{ name: "auto", desc: "Impose no additional breaking constraints within the box." }, {
          name: "avoid",
          desc: "Avoid breaks within the box."
        }, { name: "avoid-column", desc: "Avoid a column break within the box." }, {
          name: "avoid-page",
          desc: "Avoid a page break within the box."
        }],
        syntax: "auto | avoid | avoid-page | avoid-column | avoid-region"
      }, {
        name: "caption-side",
        desc: "Specifies the position of the caption box with respect to the table box.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "bottom", desc: "Positions the caption box below the table box." }, {
          name: "top",
          desc: "Positions the caption box above the table box."
        }],
        syntax: "top | bottom | block-start | block-end | inline-start | inline-end"
      }, {
        name: "caret-color",
        desc: "Controls the color of the text insertion indicator.",
        browsers: "FF53,S11.1,C57,O44",
        restriction: "color, enum",
        values: [{
          name: "auto",
          desc: "The user agent selects an appropriate color for the caret. This is generally currentcolor, but the user agent may choose a different color to ensure good visibility and contrast with the surrounding content, taking into account the value of currentcolor, the background, shadows, and other factors."
        }],
        syntax: "auto | <color>"
      }, {
        name: "clear",
        desc: "Indicates which sides of an element's box(es) may not be adjacent to an earlier floating box. The 'clear' property does not consider floats inside the element itself or in other block formatting contexts.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "both",
          desc: "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any right-floating and left-floating boxes that resulted from elements earlier in the source document."
        }, {
          name: "left",
          desc: "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any left-floating boxes that resulted from elements earlier in the source document."
        }, { name: "none", desc: "No constraint on the box's position with respect to floats." }, {
          name: "right",
          desc: "The clearance of the generated box is set to the amount necessary to place the top border edge below the bottom outer edge of any right-floating boxes that resulted from elements earlier in the source document."
        }],
        syntax: "none | left | right | both | inline-start | inline-end"
      }, {
        name: "clip",
        desc: "Deprecated. Use the 'clip-path' property when support allows. Defines the visible portion of an element’s box.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "auto", desc: "The element does not clip." }, { name: "rect()" }],
        syntax: "<shape> | auto"
      }, {
        name: "clip-path",
        desc: "Specifies a clipping path where everything inside the path is visable and everything outside is clipped out.",
        browsers: "FF3.5,C55,O42",
        restriction: "url, shape, geometry-box, enum",
        values: [{ name: "none", desc: "No clipping path gets created." }, {
          name: "url()",
          desc: "References a <clipPath> element to create a clipping path."
        }],
        syntax: "<clip-source> | [ <basic-shape> || <geometry-box> ] | none"
      }, {
        name: "clip-rule",
        desc: "Indicates the algorithm which is to be used to determine what parts of the canvas are included inside the shape.",
        browsers: "E,C5,FF3,IE10,O9,S6",
        restriction: "enum",
        values: [{ name: "evenodd" }, { name: "nonzero" }]
      }, {
        name: "color",
        desc: "Color of an element's text",
        browsers: "all",
        restriction: "color",
        syntax: "<color>"
      }, {
        name: "color-interpolation-filters",
        desc: "Specifies the color space for imaging operations performed via filter effects.",
        browsers: "E,C5,FF3,IE10,O9,S6",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Color operations are not required to occur in a particular color space."
        }, { name: "linearRGB" }, { name: "sRGB" }]
      }, {
        name: "column-count",
        desc: "Describes the optimal number of columns into which the content of the element will be flowed.",
        browsers: "all",
        restriction: "integer, enum",
        values: [{
          name: "auto",
          desc: "Determines the number of columns by the 'column-width' property and the element width."
        }],
        syntax: "<integer> | auto"
      }, {
        name: "column-fill",
        desc: "In continuous media, this property will only be consulted if the length of columns has been constrained. Otherwise, columns will automatically be balanced.",
        browsers: "E12,FF52,C",
        restriction: "enum",
        values: [{ name: "auto", desc: "Fills columns sequentially." }, { name: "balance" }],
        syntax: "auto | balance | balance-all"
      }, {
        name: "column-gap",
        desc: "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
        browsers: "E,IE10,O11.5,S9",
        restriction: "length, enum",
        values: [{ name: "normal", desc: "User agent specific and typically equivalent to 1em." }],
        syntax: "normal | <length-percentage>"
      }, {
        name: "column-rule",
        desc: "Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
        browsers: "all",
        restriction: "length, line-width, line-style, color",
        syntax: "<'column-rule-width'> || <'column-rule-style'> || <'column-rule-color'>"
      }, {
        name: "column-rule-color",
        desc: "Sets the color of the column rule",
        browsers: "all",
        restriction: "color",
        syntax: "<color>"
      }, {
        name: "column-rule-style",
        desc: "Sets the style of the rule between columns of an element.",
        browsers: "all",
        restriction: "line-style",
        syntax: "<'border-style'>"
      }, {
        name: "column-rule-width",
        desc: "Sets the width of the rule between columns. Negative values are not allowed.",
        browsers: "all",
        restriction: "length, line-width",
        syntax: "<'border-width'>"
      }, {
        name: "columns",
        desc: "A shorthand property which sets both 'column-width' and 'column-count'.",
        browsers: "all",
        restriction: "length, integer, enum",
        values: [{ name: "auto", desc: "The width depends on the values of other properties." }],
        syntax: "<'column-width'> || <'column-count'>"
      }, {
        name: "column-span",
        desc: "Describes the page/column break behavior after the generated box.",
        browsers: "E12,S,C50,IE10,O11.1",
        restriction: "enum",
        values: [{
          name: "all",
          desc: "The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appear."
        }, { name: "none", desc: "The element does not span multiple columns." }],
        syntax: "none | all"
      }, {
        name: "column-width",
        desc: "Describes the width of columns in multicol elements.",
        browsers: "all",
        restriction: "length, enum",
        values: [{ name: "auto", desc: "The width depends on the values of other properties." }],
        syntax: "<length> | auto"
      }, {
        name: "contain",
        desc: "Indicates that an element and its contents are, as much as possible, independent of the rest of the document tree.",
        browsers: "C52,O40",
        restriction: "enum",
        values: [{ name: "none", desc: "Indicates that the property has no effect." }, {
          name: "strict",
          desc: "Turns on all forms of containment for the element."
        }, {
          name: "content",
          desc: "All containment rules except size are applied to the element."
        }, { name: "size" }, { name: "layout" }, {
          name: "style",
          desc: "Turns on style containment for the element."
        }, { name: "paint" }],
        status: "e",
        syntax: "none | strict | content | [ size || layout || style || paint ]"
      }, {
        name: "content",
        desc: "Determines which page-based occurrence of a given element is applied to a counter or string value.",
        browsers: "all",
        restriction: "string, url",
        values: [{ name: "attr()" }, { name: "counter(name)" }, {
          name: "icon",
          desc: "The (pseudo-)element is replaced in its entirety by the resource referenced by its 'icon' property, and treated as a replaced element."
        }, {
          name: "none",
          desc: "On elements, this inhibits the children of the element from being rendered as children of this element, as if the element was empty. On pseudo-elements it causes the pseudo-element to have no content."
        }, {
          name: "normal",
          desc: "See http://www.w3.org/TR/css3-content/#content for computation rules."
        }, { name: "url()" }],
        syntax: "normal | none | [ <content-replacement> | <content-list> ] [/ <string> ]?"
      }, {
        name: "counter-increment",
        desc: "Manipulate the value of existing counters.",
        browsers: "FF1,S3,C2,IE8,O9.2",
        restriction: "identifier, integer",
        values: [{ name: "none", desc: "This element does not alter the value of any counters." }],
        syntax: "[ <custom-ident> <integer>? ]+ | none"
      }, {
        name: "counter-reset",
        desc: "Property accepts one or more names of counters (identifiers), each one optionally followed by an integer. The integer gives the value that the counter is set to on each occurrence of the element.",
        browsers: "all",
        restriction: "identifier, integer",
        values: [{ name: "none", desc: "The counter is not modified." }],
        syntax: "[ <custom-ident> <integer>? ]+ | none"
      }, {
        name: "cursor",
        desc: "Allows control over cursor appearance in an element",
        browsers: "all",
        restriction: "url, number, enum",
        values: [{ name: "alias" }, { name: "all-scroll" }, {
          name: "auto",
          desc: "The UA determines the cursor to display based on the current context."
        }, { name: "cell" }, { name: "col-resize" }, { name: "context-menu" }, { name: "copy" }, { name: "crosshair" }, {
          name: "default",
          desc: "The platform-dependent default cursor. Often rendered as an arrow."
        }, { name: "e-resize" }, { name: "ew-resize" }, { name: "grab", browsers: "FF27" }, {
          name: "grabbing",
          browsers: "FF27"
        }, { name: "help" }, { name: "move" }, { name: "-moz-grab", browsers: "FF1.5" }, {
          name: "-moz-grabbing",
          browsers: "FF1.5"
        }, { name: "-moz-zoom-in", browsers: "FF" }, {
          name: "-moz-zoom-out",
          browsers: "FF"
        }, { name: "ne-resize" }, { name: "nesw-resize" }, { name: "no-drop" }, {
          name: "none",
          desc: "No cursor is rendered for the element."
        }, { name: "not-allowed" }, { name: "n-resize" }, { name: "ns-resize" }, { name: "nw-resize" }, { name: "nwse-resize" }, { name: "pointer" }, { name: "progress" }, { name: "row-resize" }, { name: "se-resize" }, { name: "s-resize" }, { name: "sw-resize" }, {
          name: "text",
          desc: "Indicates text that may be selected. Often rendered as a vertical I-beam."
        }, { name: "vertical-text" }, { name: "wait" }, {
          name: "-webkit-grab",
          browsers: "C,S4"
        }, { name: "-webkit-grabbing", browsers: "C,S4" }, {
          name: "-webkit-zoom-in",
          browsers: "C,S1.2"
        }, { name: "-webkit-zoom-out", browsers: "C,S1.2" }, { name: "w-resize" }, {
          name: "zoom-in",
          browsers: "E,C37,FF24,O12.1,S9"
        }, { name: "zoom-out", browsers: "E,C37,FF24,O12.1,S9" }],
        syntax: "[ [ <url> [ <x> <y> ]? , ]* [ auto | default | none | context-menu | help | pointer | progress | wait | cell | crosshair | text | vertical-text | alias | copy | move | no-drop | not-allowed | e-resize | n-resize | ne-resize | nw-resize | s-resize | se-resize | sw-resize | w-resize | ew-resize | ns-resize | nesw-resize | nwse-resize | col-resize | row-resize | all-scroll | zoom-in | zoom-out | grab | grabbing ] ]"
      }, {
        name: "direction",
        desc: "Specifies the inline base direction or directionality of any bidi paragraph, embedding, isolate, or override established by the box. Note: for HTML content use the 'dir' attribute and 'bdo' element rather than this property.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "ltr" }, { name: "rtl" }],
        syntax: "ltr | rtl"
      }, {
        name: "display",
        desc: "In combination with 'float' and 'position', determines the type of box or boxes that are generated for an element.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "block" }, {
          name: "contents",
          desc: "The element itself does not generate any boxes, but its children and pseudo-elements still generate boxes as normal.",
          browsers: "FF37"
        }, { name: "flex", browsers: "E,C29,FF22,IE11,O12.1,S9" }, {
          name: "flexbox",
          browsers: "O12.1"
        }, { name: "flow-root", browsers: "C58,FF53,O45" }, {
          name: "grid",
          browsers: "FF52,C57,S10.1,O44"
        }, {
          name: "inline",
          desc: "The element generates an inline-level box."
        }, { name: "inline-block" }, {
          name: "inline-flex",
          browsers: "E,C29,FF22,IE11,O12.1,S9"
        }, {
          name: "inline-flexbox",
          browsers: "O12.1"
        }, { name: "inline-table" }, { name: "list-item" }, { name: "-moz-box", browsers: "FF" }, {
          name: "-moz-deck",
          browsers: "FF"
        }, { name: "-moz-grid", browsers: "FF" }, { name: "-moz-grid-group", browsers: "FF" }, {
          name: "-moz-grid-line",
          browsers: "FF"
        }, { name: "-moz-groupbox", browsers: "FF" }, {
          name: "-moz-inline-box",
          browsers: "FF"
        }, { name: "-moz-inline-grid", browsers: "FF" }, {
          name: "-moz-inline-stack",
          browsers: "FF"
        }, { name: "-moz-marker", browsers: "FF" }, { name: "-moz-popup", browsers: "FF" }, {
          name: "-moz-stack",
          browsers: "FF"
        }, { name: "-ms-flexbox", browsers: "IE10" }, {
          name: "-ms-grid",
          browsers: "E,IE10"
        }, { name: "-ms-inline-flexbox", browsers: "IE10" }, {
          name: "-ms-inline-grid",
          browsers: "E,IE10"
        }, { name: "none", desc: "The element and its descendants generates no boxes." }, {
          name: "ruby",
          desc: "The element generates a principal ruby container box, and establishes a ruby formatting context."
        }, { name: "ruby-base" }, { name: "ruby-base-container" }, { name: "ruby-text" }, { name: "ruby-text-container" }, {
          name: "run-in",
          browsers: "IE8"
        }, { name: "table" }, { name: "table-caption" }, { name: "table-cell" }, { name: "table-column" }, { name: "table-column-group" }, { name: "table-footer-group" }, { name: "table-header-group" }, { name: "table-row" }, { name: "table-row-group" }, {
          name: "-webkit-box",
          browsers: "C,S1"
        }, { name: "-webkit-flex", browsers: "C21,O15,S6.1" }, {
          name: "-webkit-inline-box",
          browsers: "C,S1"
        }, { name: "-webkit-inline-flex", browsers: "C21,O15,S6.1" }],
        syntax: "[ <display-outside> || <display-inside> ] | <display-listitem> | <display-internal> | <display-box> | <display-legacy>"
      }, {
        name: "empty-cells",
        desc: "In the separated borders model, this property controls the rendering of borders and backgrounds around cells that have no visible content.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "hide" }, { name: "-moz-show-background", browsers: "FF" }, { name: "show" }],
        syntax: "show | hide"
      }, {
        name: "enable-background",
        desc: "Deprecated. Use 'isolation' property instead when support allows. Specifies how the accumulation of the background image is managed.",
        restriction: "integer, length, percentage, enum",
        values: [{ name: "accumulate" }, { name: "new" }]
      }, {
        name: "fallback",
        desc: "@counter-style descriptor. Specifies a fallback counter style to be used when the current counter style can’t create a representation for a given counter value.",
        browsers: "FF33",
        restriction: "identifier",
        syntax: "<counter-style-name>"
      }, {
        name: "fill",
        desc: "Paints the interior of the given graphical element.",
        restriction: "color, enum, url",
        values: [{
          name: "url()",
          desc: "A URL reference to a paint server element, which is an element that defines a paint server: ‘hatch’, ‘linearGradient’, ‘mesh’, ‘pattern’, ‘radialGradient’ and ‘solidcolor’."
        }]
      }, {
        name: "fill-opacity",
        desc: "Specifies the opacity of the painting operation used to paint the interior the current object.",
        restriction: "number(0-1)"
      }, {
        name: "fill-rule",
        desc: "Indicates the algorithm (or winding rule) which is to be used to determine what parts of the canvas are included inside the shape.",
        restriction: "enum",
        values: [{ name: "evenodd" }, { name: "nonzero" }]
      }, {
        name: "filter",
        desc: "Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.",
        browsers: "E12,FF35,S6,C53,O40",
        restriction: "enum, url",
        values: [{
          name: "none",
          desc: "No filter effects are applied."
        }, { name: "blur()" }, { name: "brightness()" }, { name: "contrast()" }, { name: "drop-shadow()" }, { name: "grayscale()" }, { name: "hue-rotate()" }, { name: "invert()" }, { name: "opacity()" }, { name: "saturate()" }, { name: "sepia()" }, {
          name: "url()",
          desc: "A filter reference to a <filter> element.",
          browsers: "FF3.6"
        }],
        syntax: "none | <filter-function-list>"
      }, {
        name: "flex",
        desc: "Specifies the components of a flexible length: the flex grow factor and flex shrink factor, and the flex basis.",
        browsers: "all",
        restriction: "length, number, percentage",
        values: [{
          name: "auto",
          desc: "Retrieves the value of the main size property as the used 'flex-basis'."
        }, {
          name: "content",
          desc: "Indicates automatic sizing, based on the flex item’s content.",
          browsers: "E,IE11"
        }, { name: "none", desc: "Expands to '0 0 auto'." }],
        syntax: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]"
      }, {
        name: "flex-basis",
        desc: "Sets the flex basis.",
        browsers: "all",
        restriction: "length, number, percentage",
        values: [{
          name: "auto",
          desc: "Retrieves the value of the main size property as the used 'flex-basis'."
        }, {
          name: "content",
          desc: "Indicates automatic sizing, based on the flex item’s content.",
          browsers: "E,IE11"
        }],
        syntax: "content | <'width'>"
      }, {
        name: "flex-direction",
        desc: "Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "column",
          desc: "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
        }, { name: "column-reverse" }, {
          name: "row",
          desc: "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
        }, { name: "row-reverse" }],
        syntax: "row | row-reverse | column | column-reverse"
      }, {
        name: "flex-flow",
        desc: "Specifies how flexbox items are placed in the flexbox.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "column",
          desc: "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
        }, { name: "column-reverse" }, { name: "nowrap", desc: "The flex container is single-line." }, {
          name: "row",
          desc: "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
        }, { name: "row-reverse" }, { name: "wrap", desc: "The flexbox is multi-line." }, { name: "wrap-reverse" }],
        syntax: "<'flex-direction'> || <'flex-wrap'>"
      }, {
        name: "flex-grow",
        desc: "Sets the flex grow factor. Negative numbers are invalid.",
        browsers: "all",
        restriction: "number",
        syntax: "<number>"
      }, {
        name: "flex-shrink",
        desc: "Sets the flex shrink factor. Negative numbers are invalid.",
        browsers: "all",
        restriction: "number",
        syntax: "<number>"
      }, {
        name: "flex-wrap",
        desc: "Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "nowrap", desc: "The flex container is single-line." }, {
          name: "wrap",
          desc: "The flexbox is multi-line."
        }, { name: "wrap-reverse" }],
        syntax: "nowrap | wrap | wrap-reverse"
      }, {
        name: "float",
        desc: "Specifies how a box should be floated. It may be set for any element, but only applies to elements that generate boxes that are not absolutely positioned.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "inline-end", browsers: "FF55" }, { name: "inline-start", browsers: "FF55" }, {
          name: "left",
          desc: "The element generates a block box that is floated to the left. Content flows on the right side of the box, starting at the top (subject to the 'clear' property)."
        }, { name: "none", desc: "The box is not floated." }, {
          name: "right",
          desc: "Similar to 'left', except the box is floated to the right, and content flows on the left side of the box, starting at the top."
        }],
        syntax: "left | right | none | inline-start | inline-end"
      }, {
        name: "flood-color",
        desc: "Indicates what color to use to flood the current filter primitive subregion.",
        browsers: "E,C5,FF3,IE10,O9,S6",
        restriction: "color"
      }, {
        name: "flood-opacity",
        desc: "Indicates what opacity to use to flood the current filter primitive subregion.",
        browsers: "E,C5,FF3,IE10,O9,S6",
        restriction: "number(0-1), percentage"
      }, {
        name: "font",
        desc: "Shorthand property for setting 'font-style', 'font-variant', 'font-weight', 'font-size', 'line-height', and 'font-family', at the same place in the style sheet. The syntax of this property is based on a traditional typographical shorthand notation to set multiple properties related to fonts.",
        browsers: "all",
        restriction: "font",
        values: [{ name: "100" }, { name: "200" }, { name: "300" }, { name: "400" }, { name: "500" }, { name: "600" }, { name: "700" }, { name: "800" }, { name: "900" }, { name: "bold" }, { name: "bolder" }, { name: "caption" }, {
          name: "icon",
          desc: "The font used to label icons."
        }, {
          name: "italic",
          desc: "Selects a font that is labeled 'italic', or, if that is not available, one labeled 'oblique'."
        }, { name: "large" }, { name: "larger" }, { name: "lighter" }, { name: "medium" }, { name: "menu" }, { name: "message-box" }, {
          name: "normal",
          desc: "Specifies a face that is not labeled as a small-caps font."
        }, {
          name: "oblique",
          desc: "Selects a font that is labeled 'oblique'."
        }, { name: "small" }, {
          name: "small-caps",
          desc: "Specifies a font that is labeled as a small-caps font. If a genuine small-caps font is not available, user agents should simulate a small-caps font."
        }, { name: "small-caption" }, { name: "smaller" }, { name: "status-bar" }, { name: "x-large" }, { name: "x-small" }, { name: "xx-large" }, { name: "xx-small" }],
        syntax: "[ [ <'font-style'> || <font-variant-css21> || <'font-weight'> || <'font-stretch'> ]? <'font-size'> [ / <'line-height'> ]? <'font-family'> ] | caption | icon | menu | message-box | small-caption | status-bar"
      }, {
        name: "font-family",
        desc: "Specifies a prioritized list of font family names or generic family names. A user agent iterates through the list of family names until it matches an available font that contains a glyph for the character to be rendered.",
        browsers: "all",
        restriction: "font",
        values: [{ name: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif" }, { name: "Arial, Helvetica, sans-serif" }, { name: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }, { name: "'Courier New', Courier, monospace" }, { name: "cursive" }, { name: "fantasy" }, { name: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif" }, { name: "Georgia, 'Times New Roman', Times, serif" }, { name: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif" }, { name: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif" }, { name: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" }, { name: "monospace" }, { name: "sans-serif" }, { name: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif" }, { name: "serif" }, { name: "'Times New Roman', Times, serif" }, { name: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif" }, { name: "Verdana, Geneva, Tahoma, sans-serif" }],
        syntax: "<family-name>"
      }, {
        name: "font-feature-settings",
        desc: "Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
        browsers: "all",
        restriction: "string, integer",
        values: [{ name: "\"aalt\"" }, { name: "\"abvf\"" }, { name: "\"abvm\"" }, { name: "\"abvs\"" }, { name: "\"afrc\"" }, { name: "\"akhn\"" }, { name: "\"blwf\"" }, { name: "\"blwm\"" }, { name: "\"blws\"" }, { name: "\"calt\"" }, { name: "\"case\"" }, { name: "\"ccmp\"" }, { name: "\"cfar\"" }, { name: "\"cjct\"" }, { name: "\"clig\"" }, { name: "\"cpct\"" }, { name: "\"cpsp\"" }, { name: "\"cswh\"" }, { name: "\"curs\"" }, { name: "\"c2pc\"" }, {
          name: "\"c2cs\"",
          desc: "Small Capitals From Capitals. Applies only to bicameral scripts."
        }, { name: "\"dist\"" }, {
          name: "\"dlig\"",
          desc: "Discretionary ligatures."
        }, { name: "\"dnom\"" }, { name: "\"dtls\"" }, { name: "\"expt\"" }, { name: "\"falt\"" }, { name: "\"fin2\"" }, { name: "\"fin3\"" }, { name: "\"fina\"" }, { name: "\"flac\"" }, { name: "\"frac\"" }, { name: "\"fwid\"" }, { name: "\"half\"" }, { name: "\"haln\"" }, { name: "\"halt\"" }, { name: "\"hist\"" }, { name: "\"hkna\"" }, { name: "\"hlig\"" }, { name: "\"hngl\"" }, { name: "\"hojo\"" }, { name: "\"hwid\"" }, { name: "\"init\"" }, { name: "\"isol\"" }, { name: "\"ital\"" }, { name: "\"jalt\"" }, { name: "\"jp78\"" }, { name: "\"jp83\"" }, { name: "\"jp90\"" }, { name: "\"jp04\"" }, {
          name: "\"kern\"",
          desc: "Kerning."
        }, { name: "\"lfbd\"" }, { name: "\"liga\"", desc: "Standard Ligatures." }, { name: "\"ljmo\"" }, {
          name: "\"lnum\"",
          desc: "Lining Figures."
        }, { name: "\"locl\"" }, { name: "\"ltra\"" }, { name: "\"ltrm\"" }, { name: "\"mark\"" }, { name: "\"med2\"" }, { name: "\"medi\"" }, { name: "\"mgrk\"" }, { name: "\"mkmk\"" }, { name: "\"nalt\"" }, { name: "\"nlck\"" }, { name: "\"nukt\"" }, { name: "\"numr\"" }, {
          name: "\"onum\"",
          desc: "Oldstyle Figures."
        }, { name: "\"opbd\"" }, { name: "\"ordn\"" }, { name: "\"ornm\"" }, { name: "\"palt\"" }, { name: "\"pcap\"" }, { name: "\"pkna\"" }, { name: "\"pnum\"" }, { name: "\"pref\"" }, { name: "\"pres\"" }, { name: "\"pstf\"" }, { name: "\"psts\"" }, { name: "\"pwid\"" }, { name: "\"qwid\"" }, { name: "\"rand\"" }, { name: "\"rclt\"" }, { name: "\"rlig\"" }, { name: "\"rkrf\"" }, { name: "\"rphf\"" }, { name: "\"rtbd\"" }, { name: "\"rtla\"" }, { name: "\"rtlm\"" }, { name: "\"ruby\"" }, { name: "\"salt\"" }, { name: "\"sinf\"" }, { name: "\"size\"" }, {
          name: "\"smcp\"",
          desc: "Small Capitals. Applies only to bicameral scripts."
        }, { name: "\"smpl\"" }, { name: "\"ssty\"" }, { name: "\"stch\"" }, { name: "\"subs\"" }, { name: "\"sups\"" }, {
          name: "\"swsh\"",
          desc: "Swash. Does not apply to ideographic scripts."
        }, { name: "\"titl\"" }, { name: "\"tjmo\"" }, { name: "\"tnam\"" }, {
          name: "\"tnum\"",
          desc: "Tabular Figures."
        }, { name: "\"trad\"" }, { name: "\"twid\"" }, { name: "\"unic\"" }, { name: "\"valt\"" }, { name: "\"vatu\"" }, { name: "\"vert\"" }, { name: "\"vhal\"" }, { name: "\"vjmo\"" }, { name: "\"vkna\"" }, { name: "\"vkrn\"" }, { name: "\"vpal\"" }, { name: "\"vrt2\"" }, { name: "\"zero\"" }, {
          name: "normal",
          desc: "No change in glyph substitution or positioning occurs."
        }, { name: "off", desc: "Disable feature." }, { name: "on", desc: "Enable feature." }],
        syntax: "normal | <feature-tag-value>#"
      }, {
        name: "font-kerning",
        desc: "Kerning is the contextual adjustment of inter-glyph spacing. This property controls metric kerning, kerning that utilizes adjustment data contained in the font.",
        browsers: "FF32,S7,C32",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Specifies that kerning is applied at the discretion of the user agent."
        }, { name: "none", desc: "Specifies that kerning is not applied." }, {
          name: "normal",
          desc: "Specifies that kerning is applied."
        }],
        syntax: "auto | normal | none"
      }, {
        name: "font-language-override",
        desc: "The value of 'normal' implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering.",
        browsers: "FF34",
        restriction: "string",
        values: [{
          name: "normal",
          desc: "Implies that when rendering with OpenType fonts the language of the document is used to infer the OpenType language system, used to select language specific features when rendering."
        }],
        syntax: "normal | <string>"
      }, {
        name: "font-size",
        desc: "Indicates the desired height of glyphs from the font. For scalable fonts, the font-size is a scale factor applied to the EM unit of the font. (Note that certain glyphs may bleed outside their EM box.) For non-scalable fonts, the font-size is converted into absolute units and matched against the declared font-size of the font, using the same absolute coordinate space for both of the matched values.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "large" }, { name: "larger" }, { name: "medium" }, { name: "small" }, { name: "smaller" }, { name: "x-large" }, { name: "x-small" }, { name: "xx-large" }, { name: "xx-small" }],
        syntax: "<absolute-size> | <relative-size> | <length-percentage>"
      }, {
        name: "font-size-adjust",
        desc: "Preserves the readability of text when font fallback occurs by adjusting the font-size so that the x-height is the same irregardless of the font used.",
        browsers: "FF40,C43,O30",
        restriction: "number",
        values: [{ name: "none", desc: "Do not preserve the font’s x-height." }],
        syntax: "none | <number>"
      }, {
        name: "font-stretch",
        desc: "Selects a normal, condensed, or expanded face from a font family.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "condensed" }, { name: "expanded" }, { name: "extra-condensed" }, { name: "extra-expanded" }, {
          name: "narrower",
          browsers: "E,IE10"
        }, { name: "normal" }, { name: "semi-condensed" }, { name: "semi-expanded" }, { name: "ultra-condensed" }, { name: "ultra-expanded" }, {
          name: "wider",
          browsers: "E,IE10"
        }],
        syntax: "normal | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded"
      }, {
        name: "font-style",
        desc: "Allows italic or oblique faces to be selected. Italic forms are generally cursive in nature while oblique faces are typically sloped versions of the regular face.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "italic",
          desc: "Selects a font that is labeled as an 'italic' face, or an 'oblique' face if one is not"
        }, { name: "normal", desc: "Selects a face that is classified as 'normal'." }, {
          name: "oblique",
          desc: "Selects a font that is labeled as an 'oblique' face, or an 'italic' face if one is not."
        }],
        syntax: "normal | italic | oblique"
      }, {
        name: "font-synthesis",
        desc: "Controls whether user agents are allowed to synthesize bold or oblique font faces when a font family lacks bold or italic faces.",
        browsers: "FF34,S9",
        restriction: "enum",
        values: [{ name: "none", desc: "Disallow all synthetic faces." }, {
          name: "style",
          desc: "Allow synthetic italic faces."
        }, { name: "weight" }],
        syntax: "none | [ weight || style ]"
      }, {
        name: "font-variant",
        desc: "Specifies variant representations of the font",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "normal",
          desc: "Specifies a face that is not labeled as a small-caps font."
        }, {
          name: "small-caps",
          desc: "Specifies a font that is labeled as a small-caps font. If a genuine small-caps font is not available, user agents should simulate a small-caps font."
        }],
        syntax: "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> || stylistic(<feature-value-name>) || historical-forms || styleset(<feature-value-name>#) || character-variant(<feature-value-name>#) || swash(<feature-value-name>) || ornaments(<feature-value-name>) || annotation(<feature-value-name>) || [ small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps ] || <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero || <east-asian-variant-values> || <east-asian-width-values> || ruby ]"
      }, {
        name: "font-variant-alternates",
        desc: "For any given character, fonts can provide a variety of alternate glyphs in addition to the default glyph for that character. This property provides control over the selection of these alternate glyphs.",
        browsers: "FF34",
        restriction: "enum",
        values: [{ name: "annotation()" }, { name: "character-variant()" }, { name: "historical-forms" }, {
          name: "normal",
          desc: "None of the features are enabled."
        }, { name: "ornaments()" }, { name: "styleset()" }, { name: "stylistic()" }, { name: "swash()" }],
        syntax: "normal | [ stylistic( <feature-value-name> ) || historical-forms || styleset( <feature-value-name># ) || character-variant( <feature-value-name># ) || swash( <feature-value-name> ) || ornaments( <feature-value-name> ) || annotation( <feature-value-name> ) ]"
      }, {
        name: "font-variant-caps",
        desc: "Specifies control over capitalized forms.",
        browsers: "FF34,C52,O39",
        restriction: "enum",
        values: [{ name: "all-petite-caps" }, { name: "all-small-caps" }, {
          name: "normal",
          desc: "None of the features are enabled."
        }, { name: "petite-caps" }, {
          name: "small-caps",
          desc: "Enables display of small capitals. Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters."
        }, { name: "titling-caps" }, { name: "unicase" }],
        syntax: "normal | small-caps | all-small-caps | petite-caps | all-petite-caps | unicase | titling-caps"
      }, {
        name: "font-variant-east-asian",
        desc: "Allows control of glyph substitute and positioning in East Asian text.",
        browsers: "FF34,C63,O50",
        restriction: "enum",
        values: [{ name: "full-width" }, { name: "jis04" }, { name: "jis78" }, { name: "jis83" }, { name: "jis90" }, {
          name: "normal",
          desc: "None of the features are enabled."
        }, { name: "proportional-width" }, {
          name: "ruby",
          desc: "Enables display of ruby variant glyphs."
        }, { name: "simplified" }, { name: "traditional" }],
        syntax: "normal | [ <east-asian-variant-values> || <east-asian-width-values> || ruby ]"
      }, {
        name: "font-variant-ligatures",
        desc: "Specifies control over which ligatures are enabled or disabled. A value of ‘normal’ implies that the defaults set by the font are used.",
        browsers: "FF34,S9.1,C34,O21",
        restriction: "enum",
        values: [{ name: "additional-ligatures" }, { name: "common-ligatures" }, {
          name: "contextual",
          browsers: "C35,F34,O22"
        }, { name: "discretionary-ligatures" }, { name: "historical-ligatures" }, { name: "no-additional-ligatures" }, { name: "no-common-ligatures" }, {
          name: "no-contextual",
          browsers: "C35,F34,O22"
        }, { name: "no-discretionary-ligatures" }, { name: "no-historical-ligatures" }, {
          name: "none",
          desc: "Disables all ligatures.",
          browsers: "FF34"
        }, { name: "normal", desc: "Implies that the defaults set by the font are used." }],
        syntax: "normal | none | [ <common-lig-values> || <discretionary-lig-values> || <historical-lig-values> || <contextual-alt-values> ]"
      }, {
        name: "font-variant-numeric",
        desc: "Specifies control over numerical forms.",
        browsers: "FF34,S9.1,C52,O39",
        restriction: "enum",
        values: [{ name: "diagonal-fractions" }, { name: "lining-nums" }, {
          name: "normal",
          desc: "None of the features are enabled."
        }, { name: "oldstyle-nums" }, { name: "ordinal" }, { name: "proportional-nums" }, { name: "slashed-zero" }, { name: "stacked-fractions" }, { name: "tabular-nums" }],
        syntax: "normal | [ <numeric-figure-values> || <numeric-spacing-values> || <numeric-fraction-values> || ordinal || slashed-zero ]"
      }, {
        name: "font-variant-position",
        desc: "Specifies the vertical position",
        browsers: "FF34",
        restriction: "enum",
        values: [{ name: "normal", desc: "None of the features are enabled." }, {
          name: "sub",
          desc: "Enables display of subscript variants (OpenType feature: subs)."
        }, { name: "super", desc: "Enables display of superscript variants (OpenType feature: sups)." }],
        syntax: "normal | sub | super"
      }, {
        name: "font-weight",
        desc: "Specifies weight of glyphs in the font, their degree of blackness or stroke thickness.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "100" }, { name: "200" }, { name: "300" }, { name: "400" }, { name: "500" }, { name: "600" }, { name: "700" }, { name: "800" }, { name: "900" }, { name: "bold" }, { name: "bolder" }, { name: "lighter" }, {
          name: "normal",
          desc: "Same as 400"
        }],
        syntax: "normal | bold | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900"
      }, {
        name: "glyph-orientation-horizontal",
        desc: "Controls glyph orientation when the inline-progression-direction is horizontal.",
        restriction: "angle, number"
      }, {
        name: "glyph-orientation-vertical",
        desc: "Controls glyph orientation when the inline-progression-direction is vertical.",
        restriction: "angle, number, enum",
        values: [{
          name: "auto",
          desc: "Sets the orientation based on the fullwidth or non-fullwidth characters and the most common orientation."
        }]
      }, {
        name: "grid-area",
        desc: "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement. Shorthand for 'grid-row-start', 'grid-column-start', 'grid-row-end', and 'grid-column-end'.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "identifier, integer",
        values: [{
          name: "auto",
          desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
        }, { name: "span" }],
        syntax: "<grid-line> [ / <grid-line> ]{0,3}"
      }, {
        name: "grid",
        desc: "The grid CSS property is a shorthand property that sets all of the explicit grid properties ('grid-template-rows', 'grid-template-columns', and 'grid-template-areas'), and all the implicit grid properties ('grid-auto-rows', 'grid-auto-columns', and 'grid-auto-flow'), in a single declaration.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "identifier, length, percentage, string, enum",
        syntax: "<'grid-template'> | <'grid-template-rows'> / [ auto-flow && dense? ] <'grid-auto-columns'>? | [ auto-flow && dense? ] <'grid-auto-rows'>? / <'grid-template-columns'>"
      }, {
        name: "grid-auto-columns",
        desc: "Specifies the size of implicitly created columns.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{
          name: "min-content",
          desc: "Represents the largest min-content contribution of the grid items occupying the grid track."
        }, {
          name: "max-content",
          desc: "Represents the largest max-content contribution of the grid items occupying the grid track."
        }, {
          name: "auto",
          desc: "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
        }, { name: "minmax()" }],
        syntax: "<track-size>+"
      }, {
        name: "grid-auto-flow",
        desc: "Controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "enum",
        values: [{
          name: "row",
          desc: "The auto-placement algorithm places items by filling each row in turn, adding new rows as necessary."
        }, {
          name: "column",
          desc: "The auto-placement algorithm places items by filling each column in turn, adding new columns as necessary."
        }, { name: "dense" }],
        syntax: "[ row | column ] || dense"
      }, {
        name: "grid-auto-rows",
        desc: "Specifies the size of implicitly created rows.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{
          name: "min-content",
          desc: "Represents the largest min-content contribution of the grid items occupying the grid track."
        }, {
          name: "max-content",
          desc: "Represents the largest max-content contribution of the grid items occupying the grid track."
        }, {
          name: "auto",
          desc: "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
        }, { name: "minmax()" }],
        syntax: "<track-size>+"
      }, {
        name: "grid-column",
        desc: "Shorthand for 'grid-column-start' and 'grid-column-end'.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "identifier, integer, enum",
        values: [{
          name: "auto",
          desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
        }, { name: "span" }],
        syntax: "<grid-line> [ / <grid-line> ]?"
      }, {
        name: "grid-column-end",
        desc: "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "identifier, integer, enum",
        values: [{
          name: "auto",
          desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
        }, { name: "span" }],
        syntax: "<grid-line>"
      }, {
        name: "grid-column-gap",
        desc: "Specifies the gutters between grid columns.",
        browsers: "FF52,C57,S10.1,O44",
        restriction: "length",
        status: "o",
        syntax: "<length-percentage>"
      }, {
        name: "grid-column-start",
        desc: "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "identifier, integer, enum",
        values: [{
          name: "auto",
          desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
        }, { name: "span" }],
        syntax: "<grid-line>"
      }, {
        name: "grid-gap",
        desc: "Shorthand that specifies the gutters between grid columns and grid rows in one declaration.",
        browsers: "FF52,C57,S10.1,O44",
        restriction: "length",
        status: "o",
        syntax: "<'grid-row-gap'> <'grid-column-gap'>?"
      }, {
        name: "grid-row",
        desc: "Shorthand for 'grid-row-start' and 'grid-row-end'.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "identifier, integer, enum",
        values: [{
          name: "auto",
          desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
        }, { name: "span" }],
        syntax: "<grid-line> [ / <grid-line> ]?"
      }, {
        name: "grid-row-end",
        desc: "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "identifier, integer, enum",
        values: [{
          name: "auto",
          desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
        }, { name: "span" }],
        syntax: "<grid-line>"
      }, {
        name: "grid-row-gap",
        desc: "Specifies the gutters between grid rows.",
        browsers: "FF52,C57,S10.1,O44",
        restriction: "length",
        status: "o",
        syntax: "<length-percentage>"
      }, {
        name: "grid-row-start",
        desc: "Determine a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "identifier, integer, enum",
        values: [{
          name: "auto",
          desc: "The property contributes nothing to the grid item’s placement, indicating auto-placement, an automatic span, or a default span of one."
        }, { name: "span" }],
        syntax: "<grid-line>"
      }, {
        name: "grid-template",
        desc: "Shorthand for setting grid-template-columns, grid-template-rows, and grid-template-areas in a single declaration.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "identifier, length, percentage, string, enum",
        values: [{ name: "none", desc: "Sets all three properties to their initial values." }, {
          name: "min-content",
          desc: "Represents the largest min-content contribution of the grid items occupying the grid track."
        }, {
          name: "max-content",
          desc: "Represents the largest max-content contribution of the grid items occupying the grid track."
        }, {
          name: "auto",
          desc: "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
        }, {
          name: "subgrid",
          desc: "Sets 'grid-template-rows' and 'grid-template-columns' to 'subgrid', and 'grid-template-areas' to its initial value."
        }, { name: "minmax()" }, {
          name: "repeat()",
          desc: "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
        }],
        syntax: "none | [ <'grid-template-rows'> / <'grid-template-columns'> ] | [ <line-names>? <string> <track-size>? <line-names>? ]+ [ / <explicit-track-list> ]?"
      }, {
        name: "grid-template-areas",
        desc: "Specifies named grid areas, which are not associated with any particular grid item, but can be referenced from the grid-placement properties.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "string",
        values: [{ name: "none", desc: "The grid container doesn’t define any named grid areas." }],
        syntax: "none | <string>+"
      }, {
        name: "grid-template-columns",
        desc: "specifies, as a space-separated track list, the line names and track sizing functions of the grid.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "identifier, length, percentage, enum",
        values: [{
          name: "none",
          desc: "There is no explicit grid; any rows/columns will be implicitly generated."
        }, {
          name: "min-content",
          desc: "Represents the largest min-content contribution of the grid items occupying the grid track."
        }, {
          name: "max-content",
          desc: "Represents the largest max-content contribution of the grid items occupying the grid track."
        }, {
          name: "auto",
          desc: "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
        }, {
          name: "subgrid",
          desc: "Indicates that the grid will align to its parent grid in that axis."
        }, { name: "minmax()" }, {
          name: "repeat()",
          desc: "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
        }],
        syntax: "none | <track-list> | <auto-track-list>"
      }, {
        name: "grid-template-rows",
        desc: "specifies, as a space-separated track list, the line names and track sizing functions of the grid.",
        browsers: "E16,FF52,S10.1,C57,O44",
        restriction: "identifier, length, percentage, string, enum",
        values: [{
          name: "none",
          desc: "There is no explicit grid; any rows/columns will be implicitly generated."
        }, {
          name: "min-content",
          desc: "Represents the largest min-content contribution of the grid items occupying the grid track."
        }, {
          name: "max-content",
          desc: "Represents the largest max-content contribution of the grid items occupying the grid track."
        }, {
          name: "auto",
          desc: "As a maximum, identical to 'max-content'. As a minimum, represents the largest minimum size (as specified by min-width/min-height) of the grid items occupying the grid track."
        }, {
          name: "subgrid",
          desc: "Indicates that the grid will align to its parent grid in that axis."
        }, { name: "minmax()" }, {
          name: "repeat()",
          desc: "Represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form."
        }],
        syntax: "none | <track-list> | <auto-track-list>"
      }, {
        name: "height",
        desc: "Specifies the height of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "auto", desc: "The height depends on the values of other properties." }, {
          name: "fit-content",
          browsers: "C46,O33"
        }, {
          name: "max-content",
          desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }, {
          name: "min-content",
          desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }],
        syntax: "<viewport-length>{1,2}"
      }, {
        name: "hyphens",
        desc: "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
        browsers: "FF43,S5.1,C55,IE10,O44",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
        }, { name: "manual" }, {
          name: "none",
          desc: "Words are not broken at line breaks, even if characters inside the word suggest line break points."
        }],
        syntax: "none | manual | auto"
      }, {
        name: "image-orientation",
        desc: "Specifies an orthogonal rotation to be applied to an image before it is laid out.",
        browsers: "FF26",
        restriction: "angle",
        values: [{ name: "flip" }, { name: "from-image" }],
        syntax: "from-image | <angle> | [ <angle>? flip ]"
      }, {
        name: "image-rendering",
        desc: "Provides a hint to the user-agent about what aspects of an image are most important to preserve when the image is scaled, to aid the user-agent in the choice of an appropriate scaling algorithm.",
        browsers: "FF3.6,S,C,O",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The image should be scaled with an algorithm that maximizes the appearance of the image."
        }, { name: "crisp-edges" }, {
          name: "-moz-crisp-edges",
          browsers: "FF"
        }, { name: "optimizeQuality" }, { name: "optimizeSpeed", desc: "Deprecated." }, { name: "pixelated" }],
        syntax: "auto | crisp-edges | pixelated"
      }, {
        name: "ime-mode",
        desc: "Controls the state of the input method editor for text fields.",
        browsers: "FF3,IE5",
        restriction: "enum",
        values: [{ name: "active" }, {
          name: "auto",
          desc: "No change is made to the current input method editor state. This is the default."
        }, { name: "disabled" }, { name: "inactive" }, {
          name: "normal",
          desc: "The IME state should be normal; this value can be used in a user style sheet to override the page setting."
        }],
        status: "o",
        syntax: "auto | normal | active | inactive | disabled"
      }, {
        name: "inline-size",
        desc: "Logical 'height'. Mapping depends on the element’s 'writing-mode'.",
        browsers: "FF41",
        restriction: "length, percentage",
        values: [{ name: "auto", desc: "Depends on the values of other properties." }],
        syntax: "<'width'>"
      }, {
        name: "isolation",
        desc: "In CSS setting to 'isolate' will turn the element into a stacking context. In SVG, it defines whether an element is isolated or not.",
        browsers: "FF36,S,C41,O30",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Elements are not isolated unless an operation is applied that causes the creation of a stacking context."
        }, { name: "isolate", desc: "In CSS will turn the element into a stacking context." }],
        syntax: "auto | isolate"
      }, {
        name: "justify-content",
        desc: "Aligns flex items along the main axis of the current line of the flex container.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "center", desc: "Flex items are packed toward the center of the line." }, {
          name: "start",
          desc: "The items are packed flush to each other toward the start edge of the alignment container in the main axis."
        }, {
          name: "end",
          desc: "The items are packed flush to each other toward the end edge of the alignment container in the main axis."
        }, {
          name: "left",
          desc: "The items are packed flush to each other toward the left edge of the alignment container in the main axis."
        }, {
          name: "right",
          desc: "The items are packed flush to each other toward the right edge of the alignment container in the main axis."
        }, { name: "safe" }, { name: "unsafe" }, {
          name: "stretch",
          desc: "If the combined size of the alignment subjects is less than the size of the alignment container, any auto-sized alignment subjects have their size increased equally (not proportionally), while still respecting the constraints imposed by max-height/max-width (or equivalent functionality), so that the combined size exactly fills the alignment container."
        }, { name: "space-evenly" }, {
          name: "flex-end",
          desc: "Flex items are packed toward the end of the line."
        }, { name: "flex-start", desc: "Flex items are packed toward the start of the line." }, {
          name: "space-around",
          desc: "Flex items are evenly distributed in the line, with half-size spaces on either end."
        }, { name: "space-between", desc: "Flex items are evenly distributed in the line." }, {
          name: "baseline",
          desc: "Specifies participation in first-baseline alignment."
        }, {
          name: "first baseline",
          desc: "Specifies participation in first-baseline alignment."
        }, { name: "last baseline", desc: "Specifies participation in last-baseline alignment." }],
        syntax: "normal | <content-distribution> | <overflow-position>? [ <content-position> | left | right ]"
      }, {
        name: "kerning",
        desc: "Indicates whether the user agent should adjust inter-glyph spacing based on kerning tables that are included in the relevant font or instead disable auto-kerning and set inter-character spacing to a specific length.",
        restriction: "length, enum",
        values: [{
          name: "auto",
          desc: "Indicates that the user agent should adjust inter-glyph spacing based on kerning tables that are included in the font that will be used."
        }]
      }, {
        name: "left",
        desc: "Specifies how far an absolutely positioned box's left margin edge is offset to the right of the left edge of the box's 'containing block'.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{
          name: "auto",
          desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
        }],
        syntax: "<length> | <percentage> | auto"
      }, {
        name: "letter-spacing",
        desc: "Specifies the minimum, maximum, and optimal spacing between grapheme clusters.",
        browsers: "all",
        restriction: "length",
        values: [{
          name: "normal",
          desc: "The spacing is the normal spacing for the current font. It is typically zero-length."
        }],
        syntax: "normal | <length>"
      }, {
        name: "lighting-color",
        desc: "Defines the color of the light source for filter primitives 'feDiffuseLighting' and 'feSpecularLighting'.",
        browsers: "E,C5,FF3,IE10,O9,S6",
        restriction: "color"
      }, {
        name: "line-break",
        desc: "Specifies what set of line breaking restrictions are in effect within the element.",
        browsers: "E14,S,C58,IE5.5,O45",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The UA determines the set of line-breaking restrictions to use for CJK scripts, and it may vary the restrictions based on the length of the line; e.g., use a less restrictive set of line-break rules for short lines."
        }, {
          name: "loose",
          desc: "Breaks text using the least restrictive set of line-breaking rules. Typically used for short lines, such as in newspapers."
        }, { name: "normal", desc: "Breaks text using the most common set of line-breaking rules." }, {
          name: "strict",
          desc: "Breaks CJK scripts using a more restrictive set of line-breaking rules than 'normal'."
        }],
        syntax: "auto | loose | normal | strict"
      }, {
        name: "line-height",
        desc: "Determines the block-progression dimension of the text content area of an inline box.",
        browsers: "all",
        restriction: "number, length, percentage",
        values: [{
          name: "normal",
          desc: "Tells user agents to set the computed value to a 'reasonable' value based on the font size of the element."
        }],
        syntax: "normal | <number> | <length> | <percentage>"
      }, {
        name: "list-style",
        desc: "Shorthand for setting 'list-style-type', 'list-style-position' and 'list-style-image'",
        browsers: "all",
        restriction: "image, enum, url",
        values: [{ name: "armenian" }, { name: "circle" }, { name: "decimal" }, { name: "decimal-leading-zero" }, { name: "disc" }, { name: "georgian" }, { name: "inside" }, { name: "lower-alpha" }, { name: "lower-greek" }, { name: "lower-latin" }, { name: "lower-roman" }, { name: "none" }, { name: "outside" }, {
          name: "square",
          desc: "A filled square."
        }, {
          name: "symbols()",
          browsers: "FF35"
        }, { name: "upper-alpha" }, { name: "upper-latin" }, { name: "upper-roman" }, { name: "url()" }],
        syntax: "<'list-style-type'> || <'list-style-position'> || <'list-style-image'>"
      }, {
        name: "list-style-image",
        desc: "Sets the image that will be used as the list item marker. When the image is available, it will replace the marker set with the 'list-style-type' marker.",
        browsers: "all",
        restriction: "image",
        values: [{
          name: "none",
          desc: "The default contents of the of the list item’s marker are given by 'list-style-type' instead."
        }],
        syntax: "<url> | none"
      }, {
        name: "list-style-position",
        desc: "Specifies the position of the '::marker' pseudo-element's box in the list item.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "inside" }, { name: "outside" }],
        syntax: "inside | outside"
      }, {
        name: "list-style-type",
        desc: "Used to construct the default contents of a list item’s marker",
        browsers: "all",
        restriction: "enum, string",
        values: [{
          name: "armenian",
          desc: "Traditional uppercase Armenian numbering."
        }, { name: "circle" }, { name: "decimal", desc: "Western decimal numbers." }, {
          name: "decimal-leading-zero",
          desc: "Decimal numbers padded by initial zeros."
        }, { name: "disc" }, { name: "georgian", desc: "Traditional Georgian numbering." }, {
          name: "lower-alpha",
          desc: "Lowercase ASCII letters."
        }, { name: "lower-greek", desc: "Lowercase classical Greek." }, {
          name: "lower-latin",
          desc: "Lowercase ASCII letters."
        }, { name: "lower-roman", desc: "Lowercase ASCII Roman numerals." }, {
          name: "none",
          desc: "No marker"
        }, { name: "square", desc: "A filled square." }, { name: "symbols()", browsers: "FF35" }, {
          name: "upper-alpha",
          desc: "Uppercase ASCII letters."
        }, { name: "upper-latin", desc: "Uppercase ASCII letters." }, {
          name: "upper-roman",
          desc: "Uppercase ASCII Roman numerals."
        }],
        syntax: "<counter-style> | <string> | none"
      }, {
        name: "margin",
        desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "auto" }],
        syntax: "[ <length> | <percentage> | auto ]{1,4}"
      }, {
        name: "margin-block-end",
        desc: "Logical 'margin-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, percentage",
        values: [{ name: "auto" }],
        syntax: "<'margin-left'>"
      }, {
        name: "margin-block-start",
        desc: "Logical 'margin-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, percentage",
        values: [{ name: "auto" }],
        syntax: "<'margin-left'>"
      }, {
        name: "margin-bottom",
        desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "auto" }],
        syntax: "<length> | <percentage> | auto"
      }, {
        name: "margin-inline-end",
        desc: "Logical 'margin-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41,S3,C2",
        restriction: "length, percentage",
        values: [{ name: "auto" }],
        syntax: "<'margin-left'>"
      }, {
        name: "margin-inline-start",
        desc: "Logical 'margin-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41,S3,C2",
        restriction: "length, percentage",
        values: [{ name: "auto" }],
        syntax: "<'margin-left'>"
      }, {
        name: "margin-left",
        desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "auto" }],
        syntax: "<length> | <percentage> | auto"
      }, {
        name: "margin-right",
        desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "auto" }],
        syntax: "<length> | <percentage> | auto"
      }, {
        name: "margin-top",
        desc: "Shorthand property to set values the thickness of the margin area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. Negative values for margin properties are allowed, but there may be implementation-specific limits..",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "auto" }],
        syntax: "<length> | <percentage> | auto"
      }, {
        name: "marker",
        desc: "Specifies the marker symbol that shall be used for all points on the sets the value for all vertices on the given ‘path’ element or basic shape.",
        restriction: "url",
        values: [{
          name: "none",
          desc: "Indicates that no marker symbol will be drawn at the given vertex or vertices."
        }, { name: "url()", desc: "Indicates that the <marker> element referenced will be used." }]
      }, {
        name: "marker-end",
        desc: "Specifies the marker that will be drawn at the last vertices of the given markable element.",
        restriction: "url",
        values: [{
          name: "none",
          desc: "Indicates that no marker symbol will be drawn at the given vertex or vertices."
        }, { name: "url()", desc: "Indicates that the <marker> element referenced will be used." }]
      }, {
        name: "marker-mid",
        desc: "Specifies the marker that will be drawn at all vertices except the first and last.",
        restriction: "url",
        values: [{
          name: "none",
          desc: "Indicates that no marker symbol will be drawn at the given vertex or vertices."
        }, { name: "url()", desc: "Indicates that the <marker> element referenced will be used." }]
      }, {
        name: "marker-start",
        desc: "Specifies the marker that will be drawn at the first vertices of the given markable element.",
        restriction: "url",
        values: [{
          name: "none",
          desc: "Indicates that no marker symbol will be drawn at the given vertex or vertices."
        }, { name: "url()", desc: "Indicates that the <marker> element referenced will be used." }]
      }, {
        name: "mask-image",
        desc: "Sets the mask layer image of an element.",
        browsers: "E16,FF53,S4,C1,O",
        restriction: "url, image, enum",
        values: [{ name: "none", desc: "Counts as a transparent black image layer." }, {
          name: "url()",
          desc: "Reference to a <mask element or to a CSS image."
        }],
        syntax: "<mask-reference>#"
      }, {
        name: "mask-mode",
        desc: "Indicates whether the mask layer image is treated as luminance mask or alpha mask.",
        browsers: "FF53",
        restriction: "url, image, enum",
        values: [{
          name: "alpha",
          desc: "Alpha values of the mask layer image should be used as the mask values."
        }, {
          name: "auto",
          desc: "Use alpha values if 'mask-image' is an image, luminance if a <mask> element or a CSS image."
        }, { name: "luminance", desc: "Luminance values of the mask layer image should be used as the mask values." }],
        syntax: "<masking-mode>#"
      }, {
        name: "mask-origin",
        desc: "Specifies the mask positioning area.",
        browsers: "FF53,S,C,O",
        restriction: "geometry-box, enum",
        syntax: "<geometry-box>#"
      }, {
        name: "mask-position",
        desc: "Specifies how mask layer images are positioned.",
        browsers: "FF53,S4,C1",
        restriction: "position, length, percentage",
        syntax: "<position>#"
      }, {
        name: "mask-repeat",
        desc: "Specifies how mask layer images are tiled after they have been sized and positioned.",
        browsers: "FF53,S4,C1",
        restriction: "repeat",
        syntax: "<repeat-style>#"
      }, {
        name: "mask-size",
        desc: "Specifies the size of the mask layer images.",
        browsers: "FF53",
        restriction: "length, percentage, enum",
        values: [{
          name: "auto",
          desc: "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
        }, {
          name: "contain",
          desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
        }, {
          name: "cover",
          desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
        }],
        syntax: "<bg-size>#"
      }, {
        name: "mask-type",
        desc: "Defines whether the content of the <mask> element is treated as as luminance mask or alpha mask.",
        browsers: "FF35,C24",
        restriction: "enum",
        values: [{
          name: "alpha",
          desc: "Indicates that the alpha values of the mask should be used."
        }, { name: "luminance", desc: "Indicates that the luminance values of the mask should be used." }],
        syntax: "luminance | alpha"
      }, {
        name: "max-block-size",
        desc: "Logical 'max-width'. Mapping depends on the element’s 'writing-mode'.",
        browsers: "FF41",
        restriction: "length, percentage",
        values: [{ name: "none", desc: "No limit on the width of the box." }],
        status: "e",
        syntax: "<'max-width'>"
      }, {
        name: "max-height",
        desc: "Allows authors to constrain content height to a certain range.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "none", desc: "No limit on the height of the box." }, {
          name: "fit-content",
          browsers: "C46,O33"
        }, {
          name: "max-content",
          desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }, {
          name: "min-content",
          desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }],
        syntax: "<viewport-length>"
      }, {
        name: "max-inline-size",
        desc: "Logical 'max-height'. Mapping depends on the element’s 'writing-mode'.",
        browsers: "FF41,S10.1,C,O",
        restriction: "length, percentage",
        values: [{ name: "none", desc: "No limit on the height of the box." }],
        status: "e",
        syntax: "<'max-width'>"
      }, {
        name: "max-width",
        desc: "Allows authors to constrain content width to a certain range.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "none", desc: "No limit on the width of the box." }, {
          name: "fit-content",
          browsers: "C46,O33"
        }, {
          name: "max-content",
          desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }, {
          name: "min-content",
          desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }],
        syntax: "<viewport-length>"
      }, {
        name: "min-block-size",
        desc: "Logical 'min-width'. Mapping depends on the element’s 'writing-mode'.",
        browsers: "FF41",
        restriction: "length, percentage",
        syntax: "<'min-width'>"
      }, {
        name: "min-height",
        desc: "Allows authors to constrain content height to a certain range.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "auto", browsers: "E,IE11" }, {
          name: "fit-content",
          browsers: "C46,O33"
        }, {
          name: "max-content",
          desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }, {
          name: "min-content",
          desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }],
        syntax: "<viewport-length>"
      }, {
        name: "min-inline-size",
        desc: "Logical 'min-height'. Mapping depends on the element’s 'writing-mode'.",
        browsers: "FF41",
        restriction: "length, percentage",
        syntax: "<'min-width'>"
      }, {
        name: "min-width",
        desc: "Allows authors to constrain content width to a certain range.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "auto", browsers: "E,IE11" }, {
          name: "fit-content",
          browsers: "C46,O33"
        }, {
          name: "max-content",
          desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }, {
          name: "min-content",
          desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }],
        syntax: "<viewport-length>"
      }, {
        name: "mix-blend-mode",
        desc: "Defines the formula that must be used to mix the colors with the backdrop.",
        browsers: "FF32,S8,C41,O",
        restriction: "enum",
        values: [{
          name: "normal",
          desc: "Default attribute which specifies no blending"
        }, { name: "multiply" }, { name: "screen" }, { name: "overlay" }, { name: "darken" }, { name: "lighten" }, { name: "color-dodge" }, { name: "color-burn" }, { name: "hard-light" }, { name: "soft-light" }, { name: "difference" }, { name: "exclusion" }, {
          name: "hue",
          browsers: "C41,FF32,O29"
        }, { name: "saturation", browsers: "C41,FF32,O29" }, {
          name: "color",
          browsers: "C41,FF32,O29"
        }, { name: "luminosity", browsers: "C41,FF32,O29" }],
        syntax: "<blend-mode>"
      }, {
        name: "motion",
        desc: "Shorthand property for setting 'motion-path', 'motion-offset' and 'motion-rotation'.",
        browsers: "C46,O33",
        restriction: "url, length, percentage, angle, shape, geometry-box, enum",
        values: [{ name: "none", desc: "No motion path gets created." }, { name: "path()" }, {
          name: "auto",
          desc: "Indicates that the object is rotated by the angle of the direction of the motion path."
        }, {
          name: "reverse",
          desc: "Indicates that the object is rotated by the angle of the direction of the motion path plus 180 degrees."
        }]
      }, {
        name: "motion-offset",
        desc: "A distance that describes the position along the specified motion path.",
        browsers: "C46,O33",
        restriction: "length, percentage"
      }, {
        name: "motion-path",
        desc: "Specifies the motion path the element gets positioned at.",
        browsers: "C46,O33",
        restriction: "url, shape, geometry-box, enum",
        values: [{ name: "none", desc: "No motion path gets created." }, { name: "path()" }]
      }, {
        name: "motion-rotation",
        desc: "Defines the direction of the element while positioning along the motion path.",
        browsers: "C46,O33",
        restriction: "angle",
        values: [{
          name: "auto",
          desc: "Indicates that the object is rotated by the angle of the direction of the motion path."
        }, {
          name: "reverse",
          desc: "Indicates that the object is rotated by the angle of the direction of the motion path plus 180 degrees."
        }]
      }, {
        name: "-moz-animation",
        desc: "Shorthand property combines six of the animation properties into a single property.",
        browsers: "FF9",
        restriction: "time, enum, timing-function, identifier, number",
        values: [{ name: "alternate" }, { name: "alternate-reverse" }, { name: "backwards" }, {
          name: "both",
          desc: "Both forwards and backwards fill modes are applied."
        }, { name: "forwards" }, { name: "infinite", desc: "Causes the animation to repeat forever." }, {
          name: "none",
          desc: "No animation is performed"
        }, { name: "normal", desc: "Normal playback." }, {
          name: "reverse",
          desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
        }]
      }, {
        name: "-moz-animation-delay",
        desc: "Defines when the animation will start.",
        browsers: "FF9",
        restriction: "time"
      }, {
        name: "-moz-animation-direction",
        desc: "Defines whether or not the animation should play in reverse on alternate cycles.",
        browsers: "FF9",
        restriction: "enum",
        values: [{ name: "alternate" }, { name: "alternate-reverse" }, {
          name: "normal",
          desc: "Normal playback."
        }, {
          name: "reverse",
          desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
        }]
      }, {
        name: "-moz-animation-duration",
        desc: "Defines the length of time that an animation takes to complete one cycle.",
        browsers: "FF9",
        restriction: "time"
      }, {
        name: "-moz-animation-iteration-count",
        desc: "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
        browsers: "FF9",
        restriction: "number, enum",
        values: [{ name: "infinite", desc: "Causes the animation to repeat forever." }]
      }, {
        name: "-moz-animation-name",
        desc: "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
        browsers: "FF9",
        restriction: "identifier, enum",
        values: [{ name: "none", desc: "No animation is performed" }]
      }, {
        name: "-moz-animation-play-state",
        desc: "Defines whether the animation is running or paused.",
        browsers: "FF9",
        restriction: "enum",
        values: [{ name: "paused" }, { name: "running" }]
      }, {
        name: "-moz-animation-timing-function",
        desc: "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
        browsers: "FF9",
        restriction: "timing-function"
      }, {
        name: "-moz-appearance",
        desc: "Used in Gecko (Firefox) to display an element using a platform-native styling based on the operating system's theme.",
        browsers: "FF54",
        restriction: "enum",
        values: [{ name: "button" }, { name: "button-arrow-down" }, { name: "button-arrow-next" }, { name: "button-arrow-previous" }, { name: "button-arrow-up" }, { name: "button-bevel" }, { name: "checkbox" }, { name: "checkbox-container" }, { name: "checkbox-label" }, { name: "dialog" }, { name: "groupbox" }, { name: "listbox" }, { name: "menuarrow" }, { name: "menuimage" }, { name: "menuitem" }, { name: "menuitemtext" }, { name: "menulist" }, { name: "menulist-button" }, { name: "menulist-text" }, { name: "menulist-textfield" }, { name: "menupopup" }, { name: "menuradio" }, { name: "menuseparator" }, { name: "-moz-mac-unified-toolbar" }, { name: "-moz-win-borderless-glass" }, { name: "-moz-win-browsertabbar-toolbox" }, { name: "-moz-win-communications-toolbox" }, { name: "-moz-win-glass" }, { name: "-moz-win-media-toolbox" }, { name: "none" }, { name: "progressbar" }, { name: "progresschunk" }, { name: "radio" }, { name: "radio-container" }, { name: "radio-label" }, { name: "radiomenuitem" }, { name: "resizer" }, { name: "resizerpanel" }, { name: "scrollbarbutton-down" }, { name: "scrollbarbutton-left" }, { name: "scrollbarbutton-right" }, { name: "scrollbarbutton-up" }, { name: "scrollbar-small" }, { name: "scrollbartrack-horizontal" }, { name: "scrollbartrack-vertical" }, { name: "separator" }, { name: "spinner" }, { name: "spinner-downbutton" }, { name: "spinner-textfield" }, { name: "spinner-upbutton" }, { name: "statusbar" }, { name: "statusbarpanel" }, { name: "tab" }, { name: "tabpanels" }, { name: "tab-scroll-arrow-back" }, { name: "tab-scroll-arrow-forward" }, { name: "textfield" }, { name: "textfield-multiline" }, { name: "toolbar" }, { name: "toolbox" }, { name: "tooltip" }, { name: "treeheadercell" }, { name: "treeheadersortarrow" }, { name: "treeitem" }, { name: "treetwistyopen" }, { name: "treeview" }, { name: "treewisty" }, { name: "window" }],
        status: "n",
        syntax: "none | button | button-arrow-down | button-arrow-next | button-arrow-previous | button-arrow-up | button-bevel | button-focus | caret | checkbox | checkbox-container | checkbox-label | checkmenuitem | dualbutton | groupbox | listbox | listitem | menuarrow | menubar | menucheckbox | menuimage | menuitem | menuitemtext | menulist | menulist-button | menulist-text | menulist-textfield | menupopup | menuradio | menuseparator | meterbar | meterchunk | progressbar | progressbar-vertical | progresschunk | progresschunk-vertical | radio | radio-container | radio-label | radiomenuitem | range | range-thumb | resizer | resizerpanel | scale-horizontal | scalethumbend | scalethumb-horizontal | scalethumbstart | scalethumbtick | scalethumb-vertical | scale-vertical | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbartrack-horizontal | scrollbartrack-vertical | searchfield | separator | sheet | spinner | spinner-downbutton | spinner-textfield | spinner-upbutton | splitter | statusbar | statusbarpanel | tab | tabpanel | tabpanels | tab-scroll-arrow-back | tab-scroll-arrow-forward | textfield | textfield-multiline | toolbar | toolbarbutton | toolbarbutton-dropdown | toolbargripper | toolbox | tooltip | treeheader | treeheadercell | treeheadersortarrow | treeitem | treeline | treetwisty | treetwistyopen | treeview | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communicationstext | -moz-win-communications-toolbox | -moz-win-exclude-glass | -moz-win-glass | -moz-win-mediatext | -moz-win-media-toolbox | -moz-window-button-box | -moz-window-button-box-maximized | -moz-window-button-close | -moz-window-button-maximize | -moz-window-button-minimize | -moz-window-button-restore | -moz-window-frame-bottom | -moz-window-frame-left | -moz-window-frame-right | -moz-window-titlebar | -moz-window-titlebar-maximized"
      }, {
        name: "-moz-backface-visibility",
        desc: "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
        browsers: "FF10",
        restriction: "enum",
        values: [{ name: "hidden" }, { name: "visible" }]
      }, {
        name: "-moz-background-clip",
        desc: "Determines the background painting area.",
        browsers: "FF1-3.6",
        restriction: "box, enum",
        values: [{ name: "padding" }]
      }, {
        name: "-moz-background-inline-policy",
        desc: "In Gecko-based applications like Firefox, the -moz-background-inline-policy CSS property specifies how the background image of an inline element is determined when the content of the inline element wraps onto multiple lines. The choice of position has significant effects on repetition.",
        browsers: "FF1",
        restriction: "enum",
        values: [{ name: "bounding-box" }, { name: "continuous" }, { name: "each-box" }]
      }, {
        name: "-moz-background-origin",
        desc: "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
        browsers: "FF1",
        restriction: "box"
      }, {
        name: "-moz-border-bottom-colors",
        desc: "Sets a list of colors for the bottom border.",
        browsers: "FF1",
        restriction: "color",
        status: "n",
        syntax: "<color>+ | none"
      }, {
        name: "-moz-border-image",
        desc: "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
        browsers: "FF3.6",
        restriction: "length, percentage, number, url, enum",
        values: [{
          name: "auto",
          desc: "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
        }, {
          name: "fill",
          desc: "Causes the middle part of the border-image to be preserved."
        }, { name: "none" }, { name: "repeat" }, {
          name: "round",
          desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
        }, {
          name: "space",
          desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
        }, { name: "stretch", desc: "The image is stretched to fill the area." }, { name: "url()" }]
      }, {
        name: "-moz-border-left-colors",
        desc: "Sets a list of colors for the bottom border.",
        browsers: "FF1",
        restriction: "color",
        status: "n",
        syntax: "<color>+ | none"
      }, {
        name: "-moz-border-right-colors",
        desc: "Sets a list of colors for the bottom border.",
        browsers: "FF1",
        restriction: "color",
        status: "n",
        syntax: "<color>+ | none"
      }, {
        name: "-moz-border-top-colors",
        desc: "Ske Firefox, -moz-border-bottom-colors sets a list of colors for the bottom border.",
        browsers: "FF1",
        restriction: "color",
        status: "n",
        syntax: "<color>+ | none"
      }, {
        name: "-moz-box-align",
        desc: "Specifies how a XUL box aligns its contents across (perpendicular to) the direction of its layout. The effect of this is only visible if there is extra space in the box.",
        browsers: "FF1",
        restriction: "enum",
        values: [{
          name: "baseline",
          desc: "If this box orientation is inline-axis or horizontal, all children are placed with their baselines aligned, and extra space placed before or after as necessary. For block flows, the baseline of the first non-empty line box located within the element is used. For tables, the baseline of the first cell is used."
        }, {
          name: "center",
          desc: "Any extra space is divided evenly, with half placed above the child and the other half placed after the child."
        }, {
          name: "end",
          desc: "For normal direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element. For reverse direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element."
        }, {
          name: "start",
          desc: "For normal direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element. For reverse direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element."
        }, { name: "stretch", desc: "The height of each child is adjusted to that of the containing block." }]
      }, {
        name: "-moz-box-direction",
        desc: "Specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).",
        browsers: "FF1",
        restriction: "enum",
        values: [{
          name: "normal",
          desc: "A box with a computed value of horizontal for box-orient displays its children from left to right. A box with a computed value of vertical displays its children from top to bottom."
        }, {
          name: "reverse",
          desc: "A box with a computed value of horizontal for box-orient displays its children from right to left. A box with a computed value of vertical displays its children from bottom to top."
        }]
      }, {
        name: "-moz-box-flex",
        desc: "Specifies how a box grows to fill the box that contains it, in the direction of the containing box's layout.",
        browsers: "FF1",
        restriction: "number"
      }, {
        name: "-moz-box-flexgroup",
        desc: "Flexible elements can be assigned to flex groups using the 'box-flex-group' property.",
        browsers: "FF1",
        restriction: "integer"
      }, {
        name: "-moz-box-ordinal-group",
        desc: "Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.",
        browsers: "FF1",
        restriction: "integer"
      }, {
        name: "-moz-box-orient",
        desc: "In Mozilla applications, -moz-box-orient specifies whether a box lays out its contents horizontally or vertically.",
        browsers: "FF1",
        restriction: "enum",
        values: [{ name: "block-axis" }, {
          name: "horizontal",
          desc: "The box displays its children from left to right in a horizontal line."
        }, { name: "inline-axis" }, {
          name: "vertical",
          desc: "The box displays its children from stacked from top to bottom vertically."
        }]
      }, {
        name: "-moz-box-pack",
        desc: "Specifies how a box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.",
        browsers: "FF1",
        restriction: "enum",
        values: [{
          name: "center",
          desc: "The extra space is divided evenly, with half placed before the first child and the other half placed after the last child."
        }, {
          name: "end",
          desc: "For normal direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child. For reverse direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child."
        }, {
          name: "justify",
          desc: "The space is divided evenly in-between each child, with none of the extra space placed before the first child or after the last child. If there is only one child, treat the pack value as if it were start."
        }, {
          name: "start",
          desc: "For normal direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child. For reverse direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child."
        }]
      }, {
        name: "-moz-box-sizing",
        desc: "Box Model addition in CSS3.",
        browsers: "FF1",
        restriction: "enum",
        values: [{ name: "border-box" }, { name: "content-box" }, { name: "padding-box" }]
      }, {
        name: "-moz-column-count",
        desc: "Describes the optimal number of columns into which the content of the element will be flowed.",
        browsers: "FF3.5",
        restriction: "integer",
        values: [{
          name: "auto",
          desc: "Determines the number of columns by the 'column-width' property and the element width."
        }]
      }, {
        name: "-moz-column-gap",
        desc: "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
        browsers: "FF3.5",
        restriction: "length",
        values: [{ name: "normal", desc: "User agent specific and typically equivalent to 1em." }]
      }, {
        name: "-moz-column-rule",
        desc: "Shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
        browsers: "FF3.5",
        restriction: "length, line-width, line-style, color"
      }, {
        name: "-moz-column-rule-color",
        desc: "Sets the color of the column rule",
        browsers: "FF3.5",
        restriction: "color"
      }, {
        name: "-moz-column-rule-style",
        desc: "Sets the style of the rule between columns of an element.",
        browsers: "FF3.5",
        restriction: "line-style"
      }, {
        name: "-moz-column-rule-width",
        desc: "Sets the width of the rule between columns. Negative values are not allowed.",
        browsers: "FF3.5",
        restriction: "length, line-width"
      }, {
        name: "-moz-columns",
        desc: "A shorthand property which sets both 'column-width' and 'column-count'.",
        browsers: "FF9",
        restriction: "length, integer",
        values: [{ name: "auto", desc: "The width depends on the values of other properties." }]
      }, {
        name: "-moz-column-width",
        desc: "This property describes the width of columns in multicol elements.",
        browsers: "FF3.5",
        restriction: "length",
        values: [{ name: "auto", desc: "The width depends on the values of other properties." }]
      }, {
        name: "-moz-font-feature-settings",
        desc: "Provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
        browsers: "FF4",
        restriction: "string, integer",
        values: [{ name: "\"c2cs\"" }, { name: "\"dlig\"" }, { name: "\"kern\"" }, { name: "\"liga\"" }, { name: "\"lnum\"" }, { name: "\"onum\"" }, { name: "\"smcp\"" }, { name: "\"swsh\"" }, { name: "\"tnum\"" }, {
          name: "normal",
          desc: "No change in glyph substitution or positioning occurs."
        }, { name: "off", browsers: "FF15" }, { name: "on", browsers: "FF15" }]
      }, {
        name: "-moz-hyphens",
        desc: "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
        browsers: "FF9",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
        }, { name: "manual" }, {
          name: "none",
          desc: "Words are not broken at line breaks, even if characters inside the word suggest line break points."
        }]
      }, {
        name: "-moz-perspective",
        desc: "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
        browsers: "FF10",
        restriction: "length",
        values: [{ name: "none", desc: "No perspective transform is applied." }]
      }, {
        name: "-moz-perspective-origin",
        desc: "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
        browsers: "FF10",
        restriction: "position, percentage, length"
      }, {
        name: "-moz-text-align-last",
        desc: "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
        browsers: "FF12",
        restriction: "enum",
        values: [{ name: "auto" }, {
          name: "center",
          desc: "The inline contents are centered within the line box."
        }, {
          name: "justify",
          desc: "The text is justified according to the method specified by the 'text-justify' property."
        }, {
          name: "left",
          desc: "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
        }, {
          name: "right",
          desc: "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
        }]
      }, {
        name: "-moz-text-decoration-color",
        desc: "Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.",
        browsers: "FF6",
        restriction: "color"
      }, {
        name: "-moz-text-decoration-line",
        desc: "Specifies what line decorations, if any, are added to the element.",
        browsers: "FF6",
        restriction: "enum",
        values: [{ name: "line-through" }, {
          name: "none",
          desc: "Neither produces nor inhibits text decoration."
        }, { name: "overline" }, { name: "underline" }]
      }, {
        name: "-moz-text-decoration-style",
        desc: "Specifies the line style for underline, line-through and overline text decoration.",
        browsers: "FF6",
        restriction: "enum",
        values: [{ name: "dashed" }, { name: "dotted" }, { name: "double" }, {
          name: "none",
          desc: "Produces no line."
        }, { name: "solid" }, { name: "wavy" }]
      }, {
        name: "-moz-text-size-adjust",
        desc: "Specifies a size adjustment for displaying text content in mobile browsers.",
        browsers: "FF",
        restriction: "enum, percentage",
        values: [{
          name: "auto",
          desc: "Renderers must use the default size adjustment when displaying on a small device."
        }, { name: "none", desc: "Renderers must not do size adjustment when displaying on a small device." }]
      }, {
        name: "-moz-transform",
        desc: "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
        browsers: "FF3.5",
        restriction: "enum",
        values: [{ name: "matrix()" }, { name: "matrix3d()" }, { name: "none" }, { name: "perspective" }, { name: "rotate()" }, { name: "rotate3d()" }, { name: "rotateX('angle')" }, { name: "rotateY('angle')" }, { name: "rotateZ('angle')" }, { name: "scale()" }, { name: "scale3d()" }, { name: "scaleX()" }, { name: "scaleY()" }, { name: "scaleZ()" }, { name: "skew()" }, { name: "skewX()" }, { name: "skewY()" }, { name: "translate()" }, { name: "translate3d()" }, { name: "translateX()" }, { name: "translateY()" }, { name: "translateZ()" }]
      }, {
        name: "-moz-transform-origin",
        desc: "Establishes the origin of transformation for an element.",
        browsers: "FF3.5",
        restriction: "position, length, percentage"
      }, {
        name: "-moz-transition",
        desc: "Shorthand property combines four of the transition properties into a single property.",
        browsers: "FF4",
        restriction: "time, property, timing-function, enum",
        values: [{ name: "all", desc: "Every property that is able to undergo a transition will do so." }, {
          name: "none",
          desc: "No property will transition."
        }]
      }, {
        name: "-moz-transition-delay",
        desc: "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
        browsers: "FF4",
        restriction: "time"
      }, {
        name: "-moz-transition-duration",
        desc: "Specifies how long the transition from the old value to the new value should take.",
        browsers: "FF4",
        restriction: "time"
      }, {
        name: "-moz-transition-property",
        desc: "Specifies the name of the CSS property to which the transition is applied.",
        browsers: "FF4",
        restriction: "property",
        values: [{ name: "all", desc: "Every property that is able to undergo a transition will do so." }, {
          name: "none",
          desc: "No property will transition."
        }]
      }, {
        name: "-moz-transition-timing-function",
        desc: "Describes how the intermediate values used during a transition will be calculated.",
        browsers: "FF4",
        restriction: "timing-function"
      }, {
        name: "-moz-user-focus",
        desc: "Used to indicate whether the element can have focus.",
        browsers: "FF1.5",
        values: [{ name: "ignore" }, { name: "normal" }],
        status: "n",
        syntax: "ignore | normal | select-after | select-before | select-menu | select-same | select-all | none"
      }, {
        name: "-moz-user-select",
        desc: "Controls the appearance of selection.",
        browsers: "FF1.5",
        restriction: "enum",
        values: [{ name: "all" }, { name: "element" }, { name: "elements" }, { name: "-moz-all" }, { name: "-moz-none" }, { name: "none" }, { name: "text" }, { name: "toggle" }]
      }, {
        name: "-ms-accelerator",
        desc: "IE only. Has the ability to turn off its system underlines for accelerator keys until the ALT key is pressed",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{ name: "false" }, { name: "true" }],
        status: "n",
        syntax: "false | true"
      }, {
        name: "-ms-behavior",
        desc: "IE only. Used to extend behaviors of the browser",
        browsers: "IE8",
        restriction: "url"
      }, {
        name: "-ms-block-progression",
        desc: "Sets the block-progression value and the flow orientation",
        browsers: "IE8",
        restriction: "enum",
        values: [{ name: "bt" }, { name: "lr" }, { name: "rl" }, { name: "tb" }],
        status: "n",
        syntax: "tb | rl | bt | lr"
      }, {
        name: "-ms-content-zoom-chaining",
        desc: "Specifies the zoom behavior that occurs when a user hits the zoom limit during a manipulation.",
        browsers: "E,IE10",
        values: [{
          name: "chained",
          desc: "The nearest zoomable parent element begins zooming when the user hits a zoom limit during a manipulation. No bounce effect is shown."
        }, { name: "none", desc: "A bounce effect is shown when the user hits a zoom limit during a manipulation." }],
        status: "n",
        syntax: "none | chained"
      }, {
        name: "-ms-content-zooming",
        desc: "Specifies whether zooming is enabled.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{ name: "none", desc: "The element is not zoomable." }, { name: "zoom" }],
        status: "n",
        syntax: "none | zoom"
      }, {
        name: "-ms-content-zoom-limit",
        desc: "Shorthand property for the -ms-content-zoom-limit-min and -ms-content-zoom-limit-max properties.",
        browsers: "E,IE10",
        restriction: "percentage",
        status: "n",
        syntax: "<'-ms-content-zoom-limit-min'> <'-ms-content-zoom-limit-max'>"
      }, {
        name: "-ms-content-zoom-limit-max",
        desc: "Specifies the maximum zoom factor.",
        browsers: "E,IE10",
        restriction: "percentage",
        status: "n",
        syntax: "<percentage>"
      }, {
        name: "-ms-content-zoom-limit-min",
        desc: "Specifies the minimum zoom factor.",
        browsers: "E,IE10",
        restriction: "percentage",
        status: "n",
        syntax: "<percentage>"
      }, {
        name: "-ms-content-zoom-snap",
        desc: "Shorthand property for the -ms-content-zoom-snap-type and -ms-content-zoom-snap-points properties.",
        browsers: "E,IE10",
        values: [{
          name: "mandatory",
          desc: "Indicates that the motion of the content after the contact is picked up is always adjusted so that it lands on a snap-point."
        }, {
          name: "none",
          desc: "Indicates that zooming is unaffected by any defined snap-points."
        }, {
          name: "proximity",
          desc: "Indicates that the motion of the content after the contact is picked up may be adjusted if the content would normally stop \"close enough\" to a snap-point."
        }, {
          name: "snapInterval(100%, 100%)",
          desc: "Specifies where the snap-points will be placed."
        }, {
          name: "snapList()",
          desc: "Specifies the position of individual snap-points as a comma-separated list of zoom factors."
        }],
        status: "n",
        syntax: "<'-ms-content-zoom-snap-type'> || <'-ms-content-zoom-snap-points'>"
      }, {
        name: "-ms-content-zoom-snap-points",
        desc: "Defines where zoom snap-points are located.",
        browsers: "E,IE10",
        values: [{
          name: "snapInterval(100%, 100%)",
          desc: "Specifies where the snap-points will be placed."
        }, {
          name: "snapList()",
          desc: "Specifies the position of individual snap-points as a comma-separated list of zoom factors."
        }],
        status: "n",
        syntax: "snapInterval( <percentage>, <percentage> ) | snapList( <percentage># )"
      }, {
        name: "-ms-content-zoom-snap-type",
        desc: "Specifies how zooming is affected by defined snap-points.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "mandatory",
          desc: "Indicates that the motion of the content after the contact is picked up is always adjusted so that it lands on a snap-point."
        }, {
          name: "none",
          desc: "Indicates that zooming is unaffected by any defined snap-points."
        }, {
          name: "proximity",
          desc: "Indicates that the motion of the content after the contact is picked up may be adjusted if the content would normally stop \"close enough\" to a snap-point."
        }],
        status: "n",
        syntax: "none | proximity | mandatory"
      }, {
        name: "-ms-filter",
        desc: "IE only. Used to produce visual effects.",
        browsers: "IE8-9",
        restriction: "string",
        status: "n",
        syntax: "<string>"
      }, {
        name: "-ms-flex",
        desc: "specifies the parameters of a flexible length: the positive and negative flexibility, and the preferred size.",
        browsers: "IE10",
        restriction: "length, number, percentage",
        values: [{
          name: "auto",
          desc: "Retrieves the value of the main size property as the used 'flex-basis'."
        }, { name: "none", desc: "Expands to '0 0 auto'." }]
      }, {
        name: "-ms-flex-align",
        desc: "Aligns flex items along the cross axis of the current line of the flex container.",
        browsers: "IE10",
        restriction: "enum",
        values: [{
          name: "baseline",
          desc: "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
        }, {
          name: "center",
          desc: "The flex item’s margin box is centered in the cross axis within the line."
        }, {
          name: "end",
          desc: "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
        }, {
          name: "start",
          desc: "The cross-start margin edge of the flexbox item is placed flush with the cross-start edge of the line."
        }, {
          name: "stretch",
          desc: "If the cross size property of the flexbox item is anything other than 'auto', this value is identical to 'start'."
        }]
      }, {
        name: "-ms-flex-direction",
        desc: "Specifies how flex items are placed in the flex container, by setting the direction of the flex container’s main axis.",
        browsers: "IE10",
        restriction: "enum",
        values: [{
          name: "column",
          desc: "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
        }, { name: "column-reverse" }, {
          name: "row",
          desc: "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
        }, { name: "row-reverse" }]
      }, {
        name: "-ms-flex-flow",
        desc: "Specifies how flexbox items are placed in the flexbox.",
        browsers: "IE10",
        restriction: "enum",
        values: [{
          name: "column",
          desc: "The flex container’s main axis has the same orientation as the block axis of the current writing mode."
        }, { name: "column-reverse" }, { name: "nowrap", desc: "The flex container is single-line." }, {
          name: "row",
          desc: "The flex container’s main axis has the same orientation as the inline axis of the current writing mode."
        }, { name: "wrap", desc: "The flexbox is multi-line." }, { name: "wrap-reverse" }]
      }, {
        name: "-ms-flex-item-align",
        desc: "Allows the default alignment along the cross axis to be overridden for individual flex items.",
        browsers: "IE10",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Computes to the value of 'align-items' on the element’s parent, or 'stretch' if the element has no parent. On absolutely positioned elements, it computes to itself."
        }, {
          name: "baseline",
          desc: "If the flex item’s inline axis is the same as the cross axis, this value is identical to 'flex-start'. Otherwise, it participates in baseline alignment."
        }, {
          name: "center",
          desc: "The flex item’s margin box is centered in the cross axis within the line."
        }, {
          name: "end",
          desc: "The cross-end margin edge of the flex item is placed flush with the cross-end edge of the line."
        }, {
          name: "start",
          desc: "The cross-start margin edge of the flex item is placed flush with the cross-start edge of the line."
        }, {
          name: "stretch",
          desc: "If the cross size property of the flex item computes to auto, and neither of the cross-axis margins are auto, the flex item is stretched."
        }]
      }, {
        name: "-ms-flex-line-pack",
        desc: "Aligns a flex container’s lines within the flex container when there is extra space in the cross-axis, similar to how 'justify-content' aligns individual items within the main-axis.",
        browsers: "IE10",
        restriction: "enum",
        values: [{
          name: "center",
          desc: "Lines are packed toward the center of the flex container."
        }, {
          name: "distribute",
          desc: "Lines are evenly distributed in the flex container, with half-size spaces on either end."
        }, { name: "end", desc: "Lines are packed toward the end of the flex container." }, {
          name: "justify",
          desc: "Lines are evenly distributed in the flex container."
        }, { name: "start", desc: "Lines are packed toward the start of the flex container." }, {
          name: "stretch",
          desc: "Lines stretch to take up the remaining space."
        }]
      }, {
        name: "-ms-flex-order",
        desc: "Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.",
        browsers: "IE10",
        restriction: "integer"
      }, {
        name: "-ms-flex-pack",
        desc: "Aligns flex items along the main axis of the current line of the flex container.",
        browsers: "IE10",
        restriction: "enum",
        values: [{ name: "center", desc: "Flex items are packed toward the center of the line." }, {
          name: "distribute",
          desc: "Flex items are evenly distributed in the line, with half-size spaces on either end."
        }, { name: "end", desc: "Flex items are packed toward the end of the line." }, {
          name: "justify",
          desc: "Flex items are evenly distributed in the line."
        }, { name: "start", desc: "Flex items are packed toward the start of the line." }]
      }, {
        name: "-ms-flex-wrap",
        desc: "Controls whether the flex container is single-line or multi-line, and the direction of the cross-axis, which determines the direction new lines are stacked in.",
        browsers: "IE10",
        restriction: "enum",
        values: [{ name: "nowrap", desc: "The flex container is single-line." }, {
          name: "wrap",
          desc: "The flexbox is multi-line."
        }, { name: "wrap-reverse" }]
      }, {
        name: "-ms-flow-from",
        desc: "Makes a block container a region and associates it with a named flow.",
        browsers: "E,IE10",
        restriction: "identifier",
        values: [{ name: "none", desc: "The block container is not a CSS Region." }],
        status: "n",
        syntax: "[ none | <custom-ident> ]#"
      }, {
        name: "-ms-flow-into",
        desc: "Places an element or its contents into a named flow.",
        browsers: "E,IE10",
        restriction: "identifier",
        values: [{
          name: "none",
          desc: "The element is not moved to a named flow and normal CSS processing takes place."
        }],
        status: "n",
        syntax: "[ none | <custom-ident> ]#"
      }, {
        name: "-ms-grid-column",
        desc: "Used to place grid items and explicitly defined grid cells in the Grid.",
        browsers: "E,IE10",
        restriction: "integer, string, enum",
        values: [{ name: "auto" }, { name: "end" }, { name: "start" }]
      }, {
        name: "-ms-grid-column-align",
        desc: "Aligns the columns in a grid.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "center",
          desc: "Places the center of the Grid Item's margin box at the center of the Grid Item's column."
        }, {
          name: "end",
          desc: "Aligns the end edge of the Grid Item's margin box to the end edge of the Grid Item's column."
        }, {
          name: "start",
          desc: "Aligns the starting edge of the Grid Item's margin box to the starting edge of the Grid Item's column."
        }, {
          name: "stretch",
          desc: "Ensures that the Grid Item's margin box is equal to the size of the Grid Item's column."
        }]
      }, {
        name: "-ms-grid-columns",
        desc: "Lays out the columns of the grid.",
        browsers: "E,IE10"
      }, {
        name: "-ms-grid-column-span",
        desc: "Specifies the number of columns to span.",
        browsers: "E,IE10",
        restriction: "integer"
      }, {
        name: "-ms-grid-layer",
        desc: "Grid-layer is similar in concept to z-index, but avoids overloading the meaning of the z-index property, which is applicable only to positioned elements.",
        browsers: "E,IE10",
        restriction: "integer"
      }, {
        name: "-ms-grid-row",
        desc: "grid-row is used to place grid items and explicitly defined grid cells in the Grid.",
        browsers: "E,IE10",
        restriction: "integer, string, enum",
        values: [{ name: "auto" }, { name: "end" }, { name: "start" }]
      }, {
        name: "-ms-grid-row-align",
        desc: "Aligns the rows in a grid.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "center",
          desc: "Places the center of the Grid Item's margin box at the center of the Grid Item's row."
        }, {
          name: "end",
          desc: "Aligns the end edge of the Grid Item's margin box to the end edge of the Grid Item's row."
        }, {
          name: "start",
          desc: "Aligns the starting edge of the Grid Item's margin box to the starting edge of the Grid Item's row."
        }, {
          name: "stretch",
          desc: "Ensures that the Grid Item's margin box is equal to the size of the Grid Item's row."
        }]
      }, {
        name: "-ms-grid-rows",
        desc: "Lays out the columns of the grid.",
        browsers: "E,IE10"
      }, {
        name: "-ms-grid-row-span",
        desc: "Specifies the number of rows to span.",
        browsers: "E,IE10",
        restriction: "integer"
      }, {
        name: "-ms-high-contrast-adjust",
        desc: "Specifies if properties should be adjusted in high contrast mode.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{ name: "auto", desc: "Properties will be adjusted as applicable." }, {
          name: "none",
          desc: "No adjustments will be applied."
        }],
        status: "n",
        syntax: "auto | none"
      }, {
        name: "-ms-hyphenate-limit-chars",
        desc: "Specifies the minimum number of characters in a hyphenated word.",
        browsers: "E,IE10",
        restriction: "integer",
        values: [{ name: "auto", desc: "The user agent chooses a value that adapts to the current layout." }],
        status: "n",
        syntax: "auto | <integer>{1,3}"
      }, {
        name: "-ms-hyphenate-limit-lines",
        desc: "Indicates the maximum number of successive hyphenated lines in an element.",
        browsers: "E,IE10",
        restriction: "integer",
        values: [{ name: "no-limit" }],
        status: "n",
        syntax: "no-limit | <integer>"
      }, {
        name: "-ms-hyphenate-limit-zone",
        desc: "Specifies the maximum amount of unfilled space (before justification) that may be left in the line box before hyphenation is triggered to pull part of a word from the next line back up into the current line.",
        browsers: "E,IE10",
        restriction: "percentage, length",
        status: "n",
        syntax: "<percentage> | <length>"
      }, {
        name: "-ms-hyphens",
        desc: "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
        }, { name: "manual" }, {
          name: "none",
          desc: "Words are not broken at line breaks, even if characters inside the word suggest line break points."
        }]
      }, {
        name: "-ms-ime-mode",
        desc: "Controls the state of the input method editor for text fields.",
        browsers: "IE10",
        restriction: "enum",
        values: [{ name: "active" }, {
          name: "auto",
          desc: "No change is made to the current input method editor state. This is the default."
        }, { name: "disabled" }, { name: "inactive" }, {
          name: "normal",
          desc: "The IME state should be normal; this value can be used in a user style sheet to override the page setting."
        }]
      }, {
        name: "-ms-interpolation-mode",
        desc: "Gets or sets the interpolation (resampling) method used to stretch images.",
        browsers: "IE7",
        restriction: "enum",
        values: [{ name: "bicubic" }, { name: "nearest-neighbor" }]
      }, {
        name: "-ms-layout-grid",
        desc: "Sets or retrieves the composite document grid properties that specify the layout of text characters.",
        browsers: "E,IE10",
        values: [{
          name: "char",
          desc: "Any of the range of character values available to the -ms-layout-grid-char property."
        }, {
          name: "line",
          desc: "Any of the range of line values available to the -ms-layout-grid-line property."
        }, { name: "mode" }, { name: "type" }]
      }, {
        name: "-ms-layout-grid-char",
        desc: "Sets or retrieves the size of the character grid used for rendering the text content of an element.",
        browsers: "E,IE10",
        restriction: "enum, length, percentage",
        values: [{
          name: "auto",
          desc: "Largest character in the font of the element is used to set the character grid."
        }, { name: "none", desc: "Default. No character grid is set." }]
      }, {
        name: "-ms-layout-grid-line",
        desc: "Sets or retrieves the gridline value used for rendering the text content of an element.",
        browsers: "E,IE10",
        restriction: "length",
        values: [{
          name: "auto",
          desc: "Largest character in the font of the element is used to set the character grid."
        }, { name: "none", desc: "Default. No grid line is set." }]
      }, {
        name: "-ms-layout-grid-mode",
        desc: "Gets or sets whether the text layout grid uses two dimensions.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "both",
          desc: "Default. Both the char and line grid modes are enabled. This setting is necessary to fully enable the layout grid on an element."
        }, {
          name: "char",
          desc: "Only a character grid is used. This is recommended for use with block-level elements, such as a blockquote, where the line grid is intended to be disabled."
        }, {
          name: "line",
          desc: "Only a line grid is used. This is recommended for use with inline elements, such as a span, to disable the horizontal grid on runs of text that act as a single entity in the grid layout."
        }, { name: "none", desc: "No grid is used." }]
      }, {
        name: "-ms-layout-grid-type",
        desc: "Sets or retrieves the type of grid used for rendering the text content of an element.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "fixed",
          desc: "Grid used for monospaced layout. All noncursive characters are treated as equal; every character is centered within a single grid space by default."
        }, { name: "loose", desc: "Default. Grid used for Japanese and Korean characters." }, {
          name: "strict",
          desc: "Grid used for Chinese, as well as Japanese (Genko) and Korean characters. Only the ideographs, kanas, and wide characters are snapped to the grid."
        }]
      }, {
        name: "-ms-line-break",
        desc: "Specifies what set of line breaking restrictions are in effect within the element.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The UA determines the set of line-breaking restrictions to use for CJK scripts, and it may vary the restrictions based on the length of the line; e.g., use a less restrictive set of line-break rules for short lines."
        }, {
          name: "keep-all",
          desc: "Sequences of CJK characters can no longer break on implied break points. This option should only be used where the presence of word separator characters still creates line-breaking opportunities, as in Korean."
        }, {
          name: "newspaper",
          desc: "Breaks CJK scripts using the least restrictive set of line-breaking rules. Typically used for short lines, such as in newspapers."
        }, { name: "normal", desc: "Breaks CJK scripts using a normal set of line-breaking rules." }, {
          name: "strict",
          desc: "Breaks CJK scripts using a more restrictive set of line-breaking rules than 'normal'."
        }]
      }, {
        name: "-ms-overflow-style",
        desc: "Specify whether content is clipped when it overflows the element's content area.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "No preference, UA should use the first scrolling method in the list that it supports."
        }, { name: "-ms-autohiding-scrollbar" }, {
          name: "none",
          desc: "Indicates the element does not display scrollbars or panning indicators, even when its content overflows."
        }, { name: "scrollbar" }],
        status: "n",
        syntax: "auto | none | scrollbar | -ms-autohiding-scrollbar"
      }, {
        name: "-ms-perspective",
        desc: "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
        browsers: "IE10",
        restriction: "length",
        values: [{ name: "none", desc: "No perspective transform is applied." }]
      }, {
        name: "-ms-perspective-origin",
        desc: "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
        browsers: "IE10",
        restriction: "position, percentage, length"
      }, {
        name: "-ms-perspective-origin-x",
        desc: "Establishes the origin for the perspective property. It effectively sets the X  position at which the viewer appears to be looking at the children of the element.",
        browsers: "IE10",
        restriction: "position, percentage, length"
      }, {
        name: "-ms-perspective-origin-y",
        desc: "Establishes the origin for the perspective property. It effectively sets the Y position at which the viewer appears to be looking at the children of the element.",
        browsers: "IE10",
        restriction: "position, percentage, length"
      }, {
        name: "-ms-progress-appearance",
        desc: "Gets or sets a value that specifies whether a progress control displays as a bar or a ring.",
        browsers: "IE10",
        restriction: "enum",
        values: [{ name: "bar" }, { name: "ring" }]
      }, {
        name: "-ms-scrollbar-3dlight-color",
        desc: "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
        browsers: "IE8",
        restriction: "color",
        status: "n",
        syntax: "<color>"
      }, {
        name: "-ms-scrollbar-arrow-color",
        desc: "Determines the color of the arrow elements of a scroll arrow.",
        browsers: "IE8",
        restriction: "color",
        status: "n",
        syntax: "<color>"
      }, {
        name: "-ms-scrollbar-base-color",
        desc: "Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.",
        browsers: "IE8",
        restriction: "color",
        status: "n",
        syntax: "<color>"
      }, {
        name: "-ms-scrollbar-darkshadow-color",
        desc: "Determines the color of the gutter of a scroll bar.",
        browsers: "IE8",
        restriction: "color",
        status: "n",
        syntax: "<color>"
      }, {
        name: "-ms-scrollbar-face-color",
        desc: "Determines the color of the scroll box and scroll arrows of a scroll bar.",
        browsers: "IE8",
        restriction: "color",
        status: "n",
        syntax: "<color>"
      }, {
        name: "-ms-scrollbar-highlight-color",
        desc: "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
        browsers: "IE8",
        restriction: "color",
        status: "n",
        syntax: "<color>"
      }, {
        name: "-ms-scrollbar-shadow-color",
        desc: "Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.",
        browsers: "IE8",
        restriction: "color",
        status: "n",
        syntax: "<color>"
      }, {
        name: "-ms-scrollbar-track-color",
        desc: "Determines the color of the track element of a scroll bar.",
        browsers: "IE8",
        restriction: "color",
        status: "n",
        syntax: "<color>"
      }, {
        name: "-ms-scroll-chaining",
        desc: "Gets or sets a value that indicates the scrolling behavior that occurs when a user hits the content boundary during a manipulation.",
        browsers: "E,IE10",
        restriction: "enum, length",
        values: [{ name: "chained" }, { name: "none" }],
        status: "n",
        syntax: "chained | none"
      }, {
        name: "-ms-scroll-limit",
        desc: "Gets or sets a shorthand value that sets values for the -ms-scroll-limit-x-min, -ms-scroll-limit-y-min, -ms-scroll-limit-x-max, and -ms-scroll-limit-y-max properties.",
        browsers: "E,IE10",
        restriction: "length",
        values: [{ name: "auto" }],
        status: "n",
        syntax: "<'-ms-scroll-limit-x-min'> <'-ms-scroll-limit-y-min'> <'-ms-scroll-limit-x-max'> <'-ms-scroll-limit-y-max'>"
      }, {
        name: "-ms-scroll-limit-x-max",
        desc: "Gets or sets a value that specifies the maximum value for the scrollLeft property.",
        browsers: "E,IE10",
        restriction: "length",
        values: [{ name: "auto" }],
        status: "n",
        syntax: "auto | <length>"
      }, {
        name: "-ms-scroll-limit-x-min",
        desc: "Gets or sets a value that specifies the minimum value for the scrollLeft property.",
        browsers: "E,IE10",
        restriction: "length",
        status: "n",
        syntax: "<length>"
      }, {
        name: "-ms-scroll-limit-y-max",
        desc: "Gets or sets a value that specifies the maximum value for the scrollTop property.",
        browsers: "E,IE10",
        restriction: "length",
        values: [{ name: "auto" }],
        status: "n",
        syntax: "auto | <length>"
      }, {
        name: "-ms-scroll-limit-y-min",
        desc: "Gets or sets a value that specifies the minimum value for the scrollTop property.",
        browsers: "E,IE10",
        restriction: "length",
        status: "n",
        syntax: "<length>"
      }, {
        name: "-ms-scroll-rails",
        desc: "Gets or sets a value that indicates whether or not small motions perpendicular to the primary axis of motion will result in either changes to both the scrollTop and scrollLeft properties or a change to the primary axis (for instance, either the scrollTop or scrollLeft properties will change, but not both).",
        browsers: "E,IE10",
        restriction: "enum, length",
        values: [{ name: "none" }, { name: "railed" }],
        status: "n",
        syntax: "none | railed"
      }, {
        name: "-ms-scroll-snap-points-x",
        desc: "Gets or sets a value that defines where snap-points will be located along the x-axis.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{ name: "snapInterval(100%, 100%)" }, { name: "snapList()" }],
        status: "n",
        syntax: "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )"
      }, {
        name: "-ms-scroll-snap-points-y",
        desc: "Gets or sets a value that defines where snap-points will be located along the y-axis.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{ name: "snapInterval(100%, 100%)" }, { name: "snapList()" }],
        status: "n",
        syntax: "snapInterval( <length-percentage>, <length-percentage> ) | snapList( <length-percentage># )"
      }, {
        name: "-ms-scroll-snap-type",
        desc: "Gets or sets a value that defines what type of snap-point should be used for the current element. There are two type of snap-points, with the primary difference being whether or not the user is guaranteed to always stop on a snap-point.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "none",
          desc: "The visual viewport of this scroll container must ignore snap points, if any, when scrolled."
        }, {
          name: "mandatory",
          desc: "The visual viewport of this scroll container is guaranteed to rest on a snap point when there are no active scrolling operations."
        }, {
          name: "proximity",
          desc: "The visual viewport of this scroll container may come to rest on a snap point at the termination of a scroll at the discretion of the UA given the parameters of the scroll."
        }],
        status: "n",
        syntax: "none | proximity | mandatory"
      }, {
        name: "-ms-scroll-snap-x",
        desc: "Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-x properties.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{ name: "mandatory" }, { name: "none" }, { name: "proximity" }, { name: "snapInterval(100%, 100%)" }, { name: "snapList()" }],
        status: "n",
        syntax: "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-x'>"
      }, {
        name: "-ms-scroll-snap-y",
        desc: "Gets or sets a shorthand value that sets values for the -ms-scroll-snap-type and -ms-scroll-snap-points-y properties.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{ name: "mandatory" }, { name: "none" }, { name: "proximity" }, { name: "snapInterval(100%, 100%)" }, { name: "snapList()" }],
        status: "n",
        syntax: "<'-ms-scroll-snap-type'> <'-ms-scroll-snap-points-y'>"
      }, {
        name: "-ms-scroll-translation",
        desc: "Gets or sets a value that specifies whether vertical-to-horizontal scroll wheel translation occurs on the specified element.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{ name: "none" }, { name: "vertical-to-horizontal" }],
        status: "n",
        syntax: "none | vertical-to-horizontal"
      }, {
        name: "-ms-text-align-last",
        desc: "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
        browsers: "E,IE8",
        restriction: "enum",
        values: [{ name: "auto" }, {
          name: "center",
          desc: "The inline contents are centered within the line box."
        }, {
          name: "justify",
          desc: "The text is justified according to the method specified by the 'text-justify' property."
        }, {
          name: "left",
          desc: "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
        }, {
          name: "right",
          desc: "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
        }]
      }, {
        name: "-ms-text-autospace",
        desc: "Determines whether or not a full-width punctuation mark character should be trimmed if it appears at the beginning of a line, so that its 'ink' lines up with the first glyph in the line above and below.",
        browsers: "E,IE8",
        restriction: "enum",
        values: [{ name: "ideograph-alpha" }, { name: "ideograph-numeric" }, { name: "ideograph-parenthesis" }, { name: "ideograph-space" }, {
          name: "none",
          desc: "No extra space is created."
        }, { name: "punctuation" }],
        status: "n",
        syntax: "none | ideograph-alpha | ideograph-numeric | ideograph-parenthesis | ideograph-space"
      }, {
        name: "-ms-text-combine-horizontal",
        desc: "This property specifies the combination of multiple characters into the space of a single character.",
        browsers: "E,IE11",
        restriction: "enum, integer",
        values: [{
          name: "all",
          desc: "Attempt to typeset horizontally all consecutive characters within the box such that they take up the space of a single character within the vertical line box."
        }, { name: "digits" }, { name: "none", desc: "No special processing." }]
      }, {
        name: "-ms-text-justify",
        desc: "Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.",
        browsers: "E,IE8",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The UA determines the justification algorithm to follow, based on a balance between performance and adequate presentation quality."
        }, {
          name: "distribute",
          desc: "Justification primarily changes spacing both at word separators and at grapheme cluster boundaries in all scripts except those in the connected and cursive groups. This value is sometimes used in e.g. Japanese, often with the 'text-align-last' property."
        }, { name: "inter-cluster" }, { name: "inter-ideograph" }, { name: "inter-word" }, { name: "kashida" }]
      }, {
        name: "-ms-text-kashida-space",
        desc: "Sets or retrieves the ratio of kashida expansion to white space expansion when justifying lines of text in the object.",
        browsers: "E,IE10",
        restriction: "percentage"
      }, {
        name: "-ms-text-overflow",
        desc: "Text can overflow for example when it is prevented from wrapping",
        browsers: "IE10",
        restriction: "enum",
        values: [{ name: "clip" }, { name: "ellipsis" }]
      }, {
        name: "-ms-text-size-adjust",
        desc: "Specifies a size adjustment for displaying text content in mobile browsers.",
        browsers: "E,IE10",
        restriction: "enum, percentage",
        values: [{
          name: "auto",
          desc: "Renderers must use the default size adjustment when displaying on a small device."
        }, { name: "none", desc: "Renderers must not do size adjustment when displaying on a small device." }]
      }, {
        name: "-ms-text-underline-position",
        desc: "Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements.This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "alphabetic",
          desc: "The underline is aligned with the alphabetic baseline. In this case the underline is likely to cross some descenders."
        }, {
          name: "auto",
          desc: "The user agent may use any algorithm to determine the underline's position. In horizontal line layout, the underline should be aligned as for alphabetic. In vertical line layout, if the language is set to Japanese or Korean, the underline should be aligned as for over."
        }, { name: "over" }, { name: "under" }]
      }, {
        name: "-ms-touch-action",
        desc: "Gets or sets a value that indicates whether and how a given region can be manipulated by the user.",
        browsers: "IE10",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The element is a passive element, with several exceptions."
        }, { name: "double-tap-zoom", desc: "The element will zoom on double-tap." }, {
          name: "manipulation",
          desc: "The element is a manipulation-causing element."
        }, { name: "none", desc: "The element is a manipulation-blocking element." }, {
          name: "pan-x",
          desc: "The element permits touch-driven panning on the horizontal axis. The touch pan is performed on the nearest ancestor with horizontally scrollable content."
        }, {
          name: "pan-y",
          desc: "The element permits touch-driven panning on the vertical axis. The touch pan is performed on the nearest ancestor with vertically scrollable content."
        }, {
          name: "pinch-zoom",
          desc: "The element permits pinch-zooming. The pinch-zoom is performed on the nearest ancestor with zoomable content."
        }]
      }, {
        name: "-ms-touch-select",
        desc: "Gets or sets a value that toggles the 'gripper' visual elements that enable touch text selection.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{ name: "grippers" }, { name: "none", desc: "Grippers are always off." }],
        status: "n",
        syntax: "grippers | none"
      }, {
        name: "-ms-transform",
        desc: "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
        browsers: "IE9-9",
        restriction: "enum",
        values: [{ name: "matrix()" }, { name: "matrix3d()" }, { name: "none" }, { name: "rotate()" }, { name: "rotate3d()" }, { name: "rotateX('angle')" }, { name: "rotateY('angle')" }, { name: "rotateZ('angle')" }, { name: "scale()" }, { name: "scale3d()" }, { name: "scaleX()" }, { name: "scaleY()" }, { name: "scaleZ()" }, { name: "skew()" }, { name: "skewX()" }, { name: "skewY()" }, { name: "translate()" }, { name: "translate3d()" }, { name: "translateX()" }, { name: "translateY()" }, { name: "translateZ()" }]
      }, {
        name: "-ms-transform-origin",
        desc: "Establishes the origin of transformation for an element.",
        browsers: "IE9-9",
        restriction: "position, length, percentage"
      }, {
        name: "-ms-transform-origin-x",
        desc: "The x coordinate of the origin for transforms applied to an element with respect to its border box.",
        browsers: "IE10",
        restriction: "length, percentage"
      }, {
        name: "-ms-transform-origin-y",
        desc: "The y coordinate of the origin for transforms applied to an element with respect to its border box.",
        browsers: "IE10",
        restriction: "length, percentage"
      }, {
        name: "-ms-transform-origin-z",
        desc: "The z coordinate of the origin for transforms applied to an element with respect to its border box.",
        browsers: "IE10",
        restriction: "length, percentage"
      }, {
        name: "-ms-user-select",
        desc: "Controls the appearance of selection.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{ name: "element" }, { name: "none" }, { name: "text" }],
        status: "n",
        syntax: "none | element | text"
      }, {
        name: "-ms-word-break",
        desc: "Specifies line break opportunities for non-CJK scripts.",
        browsers: "IE8",
        restriction: "enum",
        values: [{ name: "break-all" }, {
          name: "keep-all",
          desc: "Block characters can no longer create implied break points."
        }, { name: "normal", desc: "Breaks non-CJK scripts according to their own rules." }]
      }, {
        name: "-ms-word-wrap",
        desc: "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.",
        browsers: "IE8",
        restriction: "enum",
        values: [{
          name: "break-word",
          desc: "An unbreakable 'word' may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
        }, { name: "normal", desc: "Lines may break only at allowed break points." }]
      }, {
        name: "-ms-wrap-flow",
        desc: "An element becomes an exclusion when its 'wrap-flow' property has a computed value other than 'auto'.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "For floats an exclusion is created, for all other elements an exclusion is not created."
        }, {
          name: "both",
          desc: "Inline flow content can flow on all sides of the exclusion."
        }, { name: "clear" }, {
          name: "end",
          desc: "Inline flow content can wrap on the end side of the exclusion area but must leave the area to the start edge of the exclusion area empty."
        }, { name: "maximum" }, { name: "minimum" }, {
          name: "start",
          desc: "Inline flow content can wrap on the start edge of the exclusion area but must leave the area to end edge of the exclusion area empty."
        }],
        status: "n",
        syntax: "auto | both | start | end | maximum | clear"
      }, {
        name: "-ms-wrap-margin",
        desc: "Gets or sets a value that is used to offset the inner wrap shape from other shapes.",
        browsers: "E,IE10",
        restriction: "length, percentage",
        status: "n",
        syntax: "<length>"
      }, {
        name: "-ms-wrap-through",
        desc: "Specifies if an element inherits its parent wrapping context. In other words if it is subject to the exclusions defined outside the element.",
        browsers: "E,IE10",
        restriction: "enum",
        values: [{
          name: "none",
          desc: "The exclusion element does not inherit its parent node's wrapping context. Its descendants are only subject to exclusion shapes defined inside the element."
        }, {
          name: "wrap",
          desc: "The exclusion element inherits its parent node's wrapping context. Its descendant inline content wraps around exclusions defined outside the element."
        }],
        status: "n",
        syntax: "wrap | none"
      }, {
        name: "-ms-writing-mode",
        desc: "Shorthand property for both 'direction' and 'block-progression'.",
        browsers: "IE8",
        restriction: "enum",
        values: [{ name: "bt-lr" }, { name: "bt-rl" }, { name: "lr-bt" }, { name: "lr-tb" }, { name: "rl-bt" }, { name: "rl-tb" }, { name: "tb-lr" }, { name: "tb-rl" }]
      }, {
        name: "-ms-zoom",
        desc: "Sets or retrieves the magnification scale of the object.",
        browsers: "IE8",
        restriction: "enum, integer, number, percentage",
        values: [{ name: "normal" }]
      }, {
        name: "-ms-zoom-animation",
        desc: "Gets or sets a value that indicates whether an animation is used when zooming.",
        browsers: "IE10",
        restriction: "enum",
        values: [{ name: "default" }, { name: "none" }]
      }, {
        name: "nav-down",
        desc: "Provides an way to control directional focus navigation.",
        browsers: "O9.5",
        restriction: "enum, identifier, string",
        values: [{
          name: "auto",
          desc: "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
        }, { name: "current" }, { name: "root" }]
      }, {
        name: "nav-index",
        desc: "Provides an input-method-neutral way of specifying the sequential navigation order (also known as 'tabbing order').",
        browsers: "O9.5",
        restriction: "number",
        values: [{
          name: "auto",
          desc: "The element's sequential navigation order is assigned automatically by the user agent."
        }]
      }, {
        name: "nav-left",
        desc: "Provides an way to control directional focus navigation.",
        browsers: "O9.5",
        restriction: "enum, identifier, string",
        values: [{
          name: "auto",
          desc: "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
        }, { name: "current" }, { name: "root" }]
      }, {
        name: "nav-right",
        desc: "Provides an way to control directional focus navigation.",
        browsers: "O9.5",
        restriction: "enum, identifier, string",
        values: [{
          name: "auto",
          desc: "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
        }, { name: "current" }, { name: "root" }]
      }, {
        name: "nav-up",
        desc: "Provides an way to control directional focus navigation.",
        browsers: "O9.5",
        restriction: "enum, identifier, string",
        values: [{
          name: "auto",
          desc: "The user agent automatically determines which element to navigate the focus to in response to directional navigational input."
        }, { name: "current" }, { name: "root" }]
      }, {
        name: "negative",
        desc: "@counter-style descriptor. Defines how to alter the representation when the counter value is negative.",
        browsers: "FF33",
        restriction: "image, identifier, string",
        syntax: "<symbol> <symbol>?"
      }, {
        name: "-o-animation",
        desc: "Shorthand property combines six of the animation properties into a single property.",
        browsers: "O12",
        restriction: "time, enum, timing-function, identifier, number",
        values: [{ name: "alternate" }, { name: "alternate-reverse" }, { name: "backwards" }, {
          name: "both",
          desc: "Both forwards and backwards fill modes are applied."
        }, { name: "forwards" }, { name: "infinite", desc: "Causes the animation to repeat forever." }, {
          name: "none",
          desc: "No animation is performed"
        }, { name: "normal", desc: "Normal playback." }, {
          name: "reverse",
          desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
        }]
      }, {
        name: "-o-animation-delay",
        desc: "Defines when the animation will start.",
        browsers: "O12",
        restriction: "time"
      }, {
        name: "-o-animation-direction",
        desc: "Defines whether or not the animation should play in reverse on alternate cycles.",
        browsers: "O12",
        restriction: "enum",
        values: [{ name: "alternate" }, { name: "alternate-reverse" }, {
          name: "normal",
          desc: "Normal playback."
        }, {
          name: "reverse",
          desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
        }]
      }, {
        name: "-o-animation-duration",
        desc: "Defines the length of time that an animation takes to complete one cycle.",
        browsers: "O12",
        restriction: "time"
      }, {
        name: "-o-animation-fill-mode",
        desc: "Defines what values are applied by the animation outside the time it is executing.",
        browsers: "O12",
        restriction: "enum",
        values: [{ name: "backwards" }, {
          name: "both",
          desc: "Both forwards and backwards fill modes are applied."
        }, { name: "forwards" }, {
          name: "none",
          desc: "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
        }]
      }, {
        name: "-o-animation-iteration-count",
        desc: "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
        browsers: "O12",
        restriction: "number, enum",
        values: [{ name: "infinite", desc: "Causes the animation to repeat forever." }]
      }, {
        name: "-o-animation-name",
        desc: "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
        browsers: "O12",
        restriction: "identifier, enum",
        values: [{ name: "none", desc: "No animation is performed" }]
      }, {
        name: "-o-animation-play-state",
        desc: "Defines whether the animation is running or paused.",
        browsers: "O12",
        restriction: "enum",
        values: [{ name: "paused" }, { name: "running" }]
      }, {
        name: "-o-animation-timing-function",
        desc: "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
        browsers: "O12",
        restriction: "timing-function"
      }, {
        name: "object-fit",
        desc: "Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.",
        browsers: "E16,FF36,S,C31,O19",
        restriction: "enum",
        values: [{
          name: "contain",
          desc: "The replaced content is sized to maintain its aspect ratio while fitting within the element’s content box: its concrete object size is resolved as a contain constraint against the element's used width and height."
        }, {
          name: "cover",
          desc: "The replaced content is sized to maintain its aspect ratio while filling the element's entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height."
        }, {
          name: "fill",
          desc: "The replaced content is sized to fill the element’s content box: the object's concrete object size is the element's used width and height."
        }, {
          name: "none",
          desc: "The replaced content is not resized to fit inside the element's content box"
        }, { name: "scale-down" }],
        syntax: "fill | contain | cover | none | scale-down"
      }, {
        name: "object-position",
        desc: "Determines the alignment of the replaced element inside its box.",
        browsers: "E16,FF36,S10,C31,O19",
        restriction: "position, length, percentage",
        syntax: "<position>"
      }, {
        name: "-o-border-image",
        desc: "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
        browsers: "O11.6",
        restriction: "length, percentage, number, image, enum",
        values: [{
          name: "auto",
          desc: "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
        }, {
          name: "fill",
          desc: "Causes the middle part of the border-image to be preserved."
        }, { name: "none" }, { name: "repeat" }, {
          name: "round",
          desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
        }, {
          name: "space",
          desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
        }, { name: "stretch", desc: "The image is stretched to fill the area." }]
      }, {
        name: "-o-object-fit",
        desc: "Specifies how the contents of a replaced element should be scaled relative to the box established by its used height and width.",
        browsers: "O10.6",
        restriction: "enum",
        values: [{
          name: "contain",
          desc: "The replaced content is sized to maintain its aspect ratio while fitting within the element’s content box: its concrete object size is resolved as a contain constraint against the element's used width and height."
        }, {
          name: "cover",
          desc: "The replaced content is sized to maintain its aspect ratio while filling the element's entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height."
        }, {
          name: "fill",
          desc: "The replaced content is sized to fill the element’s content box: the object's concrete object size is the element's used width and height."
        }, {
          name: "none",
          desc: "The replaced content is not resized to fit inside the element's content box"
        }, { name: "scale-down" }]
      }, {
        name: "-o-object-position",
        desc: "Determines the alignment of the replaced element inside its box.",
        browsers: "O10.6",
        restriction: "position, length, percentage"
      }, {
        name: "opacity",
        desc: "Opacity of an element's text, where 1 is opaque and 0 is entirely transparent.",
        browsers: "all",
        restriction: "number(0-1)",
        syntax: "<number>"
      }, {
        name: "order",
        desc: "Controls the order in which children of a flex container appear within the flex container, by assigning them to ordinal groups.",
        browsers: "all",
        restriction: "integer",
        syntax: "<integer>"
      }, {
        name: "orphans",
        desc: "Specifies the minimum number of line boxes in a block container that must be left in a fragment before a fragmentation break.",
        browsers: "E12,C25,IE8,O9.2",
        restriction: "integer",
        syntax: "<integer>"
      }, {
        name: "-o-table-baseline",
        desc: "Determines which row of a inline-table should be used as baseline of inline-table.",
        browsers: "O9.6",
        restriction: "integer"
      }, {
        name: "-o-tab-size",
        desc: "This property determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.",
        browsers: "O10.6",
        restriction: "integer, length"
      }, {
        name: "-o-text-overflow",
        desc: "Text can overflow for example when it is prevented from wrapping",
        browsers: "O10",
        restriction: "enum",
        values: [{ name: "clip" }, { name: "ellipsis" }]
      }, {
        name: "-o-transform",
        desc: "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
        browsers: "O10.5",
        restriction: "enum",
        values: [{ name: "matrix()" }, { name: "matrix3d()" }, { name: "none" }, { name: "rotate()" }, { name: "rotate3d()" }, { name: "rotateX('angle')" }, { name: "rotateY('angle')" }, { name: "rotateZ('angle')" }, { name: "scale()" }, { name: "scale3d()" }, { name: "scaleX()" }, { name: "scaleY()" }, { name: "scaleZ()" }, { name: "skew()" }, { name: "skewX()" }, { name: "skewY()" }, { name: "translate()" }, { name: "translate3d()" }, { name: "translateX()" }, { name: "translateY()" }, { name: "translateZ()" }]
      }, {
        name: "-o-transform-origin",
        desc: "Establishes the origin of transformation for an element.",
        browsers: "O10.5",
        restriction: "positon, length, percentage"
      }, {
        name: "-o-transition",
        desc: "Shorthand property combines four of the transition properties into a single property.",
        browsers: "O11.5",
        restriction: "time, property, timing-function, enum",
        values: [{ name: "all", desc: "Every property that is able to undergo a transition will do so." }, {
          name: "none",
          desc: "No property will transition."
        }]
      }, {
        name: "-o-transition-delay",
        desc: "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
        browsers: "O11.5",
        restriction: "time"
      }, {
        name: "-o-transition-duration",
        desc: "Specifies how long the transition from the old value to the new value should take.",
        browsers: "O11.5",
        restriction: "time"
      }, {
        name: "-o-transition-property",
        desc: "Specifies the name of the CSS property to which the transition is applied.",
        browsers: "O11.5",
        restriction: "property",
        values: [{ name: "all", desc: "Every property that is able to undergo a transition will do so." }, {
          name: "none",
          desc: "No property will transition."
        }]
      }, {
        name: "-o-transition-timing-function",
        desc: "Describes how the intermediate values used during a transition will be calculated.",
        browsers: "O11.5",
        restriction: "timing-function"
      }, {
        name: "offset-block-end",
        desc: "Logical 'bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, percentage",
        values: [{
          name: "auto",
          desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
        }],
        syntax: "<'left'>"
      }, {
        name: "offset-block-start",
        desc: "Logical 'top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, percentage",
        values: [{
          name: "auto",
          desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
        }],
        syntax: "<'left'>"
      }, {
        name: "offset-inline-end",
        desc: "Logical 'right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, percentage",
        values: [{
          name: "auto",
          desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
        }],
        syntax: "<'left'>"
      }, {
        name: "offset-inline-start",
        desc: "Logical 'left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, percentage",
        values: [{
          name: "auto",
          desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well."
        }],
        syntax: "<'left'>"
      }, {
        name: "outline",
        desc: "Shorthand property for 'outline-style', 'outline-width', and 'outline-color'.",
        browsers: "all",
        restriction: "length, line-width, line-style, color, enum",
        values: [{
          name: "auto",
          desc: "Permits the user agent to render a custom outline style, typically the default platform style."
        }, { name: "invert", browsers: "E,IE8,O" }],
        syntax: "[ <'outline-color'> || <'outline-style'> || <'outline-width'> ]"
      }, {
        name: "outline-color",
        desc: "The color of the outline.",
        browsers: "all",
        restriction: "enum, color",
        values: [{ name: "invert", browsers: "E,IE8,O" }],
        syntax: "<color> | invert"
      }, {
        name: "outline-offset",
        desc: "Offset the outline and draw it beyond the border edge.",
        browsers: "FF1.5,S1.2,C1,O9.5",
        restriction: "length",
        syntax: "<length>"
      }, {
        name: "outline-style",
        desc: "Style of the outline.",
        browsers: "all",
        restriction: "line-style, enum",
        values: [{
          name: "auto",
          desc: "Permits the user agent to render a custom outline style, typically the default platform style."
        }],
        syntax: "auto | <br-style>"
      }, {
        name: "outline-width",
        desc: "Width of the outline.",
        browsers: "all",
        restriction: "length, line-width",
        syntax: "<br-width>"
      }, {
        name: "overflow",
        desc: "Shorthand for setting 'overflow-x' and 'overflow-y'.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
        }, {
          name: "hidden",
          desc: "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
        }, { name: "-moz-hidden-unscrollable", browsers: "FF" }, {
          name: "scroll",
          desc: "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
        }, { name: "visible", desc: "Content is not clipped, i.e., it may be rendered outside the content box." }],
        syntax: "[ visible | hidden | clip | scroll | auto ]{1,2}"
      }, {
        name: "overflow-wrap",
        desc: "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit within the line box.",
        browsers: "FF49,S,C,IE5.5,O",
        restriction: "enum",
        values: [{
          name: "break-word",
          desc: "An otherwise unbreakable sequence of characters may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
        }, { name: "normal", desc: "Lines may break only at allowed break points." }],
        syntax: "normal | break-word"
      }, {
        name: "overflow-x",
        desc: "Specifies the handling of overflow in the horizontal direction.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
        }, {
          name: "hidden",
          desc: "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
        }, {
          name: "scroll",
          desc: "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
        }, { name: "visible", desc: "Content is not clipped, i.e., it may be rendered outside the content box." }],
        syntax: "visible | hidden | clip | scroll | auto"
      }, {
        name: "overflow-y",
        desc: "Specifies the handling of overflow in the vertical direction.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The behavior of the 'auto' value is UA-dependent, but should cause a scrolling mechanism to be provided for overflowing boxes."
        }, {
          name: "hidden",
          desc: "Content is clipped and no scrolling mechanism should be provided to view the content outside the clipping region."
        }, {
          name: "scroll",
          desc: "Content is clipped and if the user agent uses a scrolling mechanism that is visible on the screen (such as a scroll bar or a panner), that mechanism should be displayed for a box whether or not any of its content is clipped."
        }, { name: "visible", desc: "Content is not clipped, i.e., it may be rendered outside the content box." }],
        syntax: "visible | hidden | clip | scroll | auto"
      }, {
        name: "pad",
        desc: "@counter-style descriptor. Specifies a “fixed-width” counter style, where representations shorter than the pad value are padded with a particular <symbol>",
        browsers: "FF33",
        restriction: "integer, image, string, identifier",
        syntax: "<integer> && <symbol>"
      }, {
        name: "padding",
        desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
        browsers: "all",
        restriction: "length, percentage",
        values: [],
        syntax: "[ <length> | <percentage> ]{1,4}"
      }, {
        name: "padding-bottom",
        desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
        browsers: "all",
        restriction: "length, percentage",
        syntax: "<length> | <percentage>"
      }, {
        name: "padding-block-end",
        desc: "Logical 'padding-bottom'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, percentage",
        syntax: "<'padding-left'>"
      }, {
        name: "padding-block-start",
        desc: "Logical 'padding-top'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41",
        restriction: "length, percentage",
        syntax: "<'padding-left'>"
      }, {
        name: "padding-inline-end",
        desc: "Logical 'padding-right'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41,S3,C2,O15",
        restriction: "length, percentage",
        syntax: "<'padding-left'>"
      }, {
        name: "padding-inline-start",
        desc: "Logical 'padding-left'. Mapping depends on the parent element’s 'writing-mode', 'direction', and 'text-orientation'.",
        browsers: "FF41,S3,C2,O",
        restriction: "length, percentage",
        syntax: "<'padding-left'>"
      }, {
        name: "padding-left",
        desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
        browsers: "all",
        restriction: "length, percentage",
        syntax: "<length> | <percentage>"
      }, {
        name: "padding-right",
        desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
        browsers: "all",
        restriction: "length, percentage",
        syntax: "<length> | <percentage>"
      }, {
        name: "padding-top",
        desc: "Shorthand property to set values the thickness of the padding area. If left is omitted, it is the same as right. If bottom is omitted it is the same as top, if right is omitted it is the same as top. The value may not be negative.",
        browsers: "all",
        restriction: "length, percentage",
        syntax: "<length> | <percentage>"
      }, {
        name: "page-break-after",
        desc: "Defines rules for page breaks after an element.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "always", desc: "Always force a page break after the generated box." }, {
          name: "auto",
          desc: "Neither force nor forbid a page break after generated box."
        }, { name: "avoid", desc: "Avoid a page break after the generated box." }, {
          name: "left",
          desc: "Force one or two page breaks after the generated box so that the next page is formatted as a left page."
        }, {
          name: "right",
          desc: "Force one or two page breaks after the generated box so that the next page is formatted as a right page."
        }],
        syntax: "auto | always | avoid | left | right | recto | verso"
      }, {
        name: "page-break-before",
        desc: "Defines rules for page breaks before an element.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "always", desc: "Always force a page break before the generated box." }, {
          name: "auto",
          desc: "Neither force nor forbid a page break before the generated box."
        }, { name: "avoid", desc: "Avoid a page break before the generated box." }, {
          name: "left",
          desc: "Force one or two page breaks before the generated box so that the next page is formatted as a left page."
        }, {
          name: "right",
          desc: "Force one or two page breaks before the generated box so that the next page is formatted as a right page."
        }],
        syntax: "auto | always | avoid | left | right | recto | verso"
      }, {
        name: "page-break-inside",
        desc: "Defines rules for page breaks inside an element.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Neither force nor forbid a page break inside the generated box."
        }, { name: "avoid", desc: "Avoid a page break inside the generated box." }],
        syntax: "auto | avoid"
      }, {
        name: "paint-order",
        desc: "Controls the order that the three paint operations that shapes and text are rendered with: their fill, their stroke and any markers they might have.",
        browsers: "FF60,S",
        restriction: "enum",
        values: [{ name: "fill" }, { name: "markers" }, {
          name: "normal",
          desc: "The element is painted with the standard order of painting operations: the 'fill' is painted first, then its 'stroke' and finally its markers."
        }, { name: "stroke" }],
        status: "e",
        syntax: "normal | [ fill || stroke || markers ]"
      }, {
        name: "perspective",
        desc: "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
        browsers: "all",
        restriction: "length, enum",
        values: [{ name: "none", desc: "No perspective transform is applied." }],
        syntax: "none | <length>"
      }, {
        name: "perspective-origin",
        desc: "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
        browsers: "all",
        restriction: "position, percentage, length",
        syntax: "<position>"
      }, {
        name: "pointer-events",
        desc: "Specifies under what circumstances a given element can be the target element for a pointer event.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "all",
          desc: "The given element can be the target element for pointer events whenever the pointer is over either the interior or the perimeter of the element."
        }, {
          name: "fill",
          desc: "The given element can be the target element for pointer events whenever the pointer is over the interior of the element."
        }, {
          name: "none",
          desc: "The given element does not receive pointer events."
        }, { name: "painted" }, {
          name: "stroke",
          desc: "The given element can be the target element for pointer events whenever the pointer is over the perimeter of the element."
        }, {
          name: "visible",
          desc: "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and the pointer is over either the interior or the perimete of the element."
        }, { name: "visibleFill" }, { name: "visiblePainted" }, { name: "visibleStroke" }],
        syntax: "auto | none | visiblePainted | visibleFill | visibleStroke | visible | painted | fill | stroke | all | inherit"
      }, {
        name: "position",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "absolute" }, {
          name: "fixed",
          desc: "The box's position is calculated according to the 'absolute' model, but in addition, the box is fixed with respect to some reference. As with the 'absolute' model, the box's margins do not collapse with any other margins."
        }, { name: "-ms-page", browsers: "E,IE10" }, { name: "relative" }, { name: "static" }, {
          name: "sticky",
          browsers: "C56,FF32"
        }, { name: "-webkit-sticky", browsers: "S6.1" }],
        syntax: "static | relative | absolute | sticky | fixed"
      }, {
        name: "prefix",
        desc: "@counter-style descriptor. Specifies a <symbol> that is prepended to the marker representation.",
        browsers: "FF33",
        restriction: "image, string, identifier",
        syntax: "<symbol>"
      }, {
        name: "quotes",
        desc: "Specifies quotation marks for any number of embedded quotations.",
        browsers: "all",
        restriction: "string",
        values: [{
          name: "none",
          desc: "The 'open-quote' and 'close-quote' values of the 'content' property produce no quotations marks, as if they were 'no-open-quote' and 'no-close-quote' respectively."
        }],
        syntax: "none | [ <string> <string> ]+"
      }, {
        name: "range",
        desc: "@counter-style descriptor. Defines the ranges over which the counter style is defined.",
        browsers: "FF33",
        restriction: "integer, enum",
        values: [{ name: "auto", desc: "The range depends on the counter system." }, {
          name: "infinite",
          desc: "If used as the first value in a range, it represents negative infinity; if used as the second value, it represents positive infinity."
        }],
        syntax: "[ [ <integer> | infinite ]{2} ]# | auto"
      }, {
        name: "resize",
        desc: "Specifies whether or not an element is resizable by the user, and if so, along which axis/axes.",
        browsers: "FF,S3,C1,O12.1",
        restriction: "enum",
        values: [{
          name: "both",
          desc: "The UA presents a bidirectional resizing mechanism to allow the user to adjust both the height and the width of the element."
        }, {
          name: "horizontal",
          desc: "The UA presents a unidirectional horizontal resizing mechanism to allow the user to adjust only the width of the element."
        }, {
          name: "none",
          desc: "The UA does not present a resizing mechanism on the element, and the user is given no direct manipulation mechanism to resize the element."
        }, {
          name: "vertical",
          desc: "The UA presents a unidirectional vertical resizing mechanism to allow the user to adjust only the height of the element."
        }],
        syntax: "none | both | horizontal | vertical"
      }, {
        name: "right",
        desc: "Specifies how far an absolutely positioned box's right margin edge is offset to the left of the right edge of the box's 'containing block'.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{
          name: "auto",
          desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
        }],
        syntax: "<length> | <percentage> | auto"
      }, {
        name: "ruby-align",
        desc: "Specifies how text is distributed within the various ruby boxes when their contents do not exactly fill their respective boxes.",
        browsers: "FF38",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The user agent determines how the ruby contents are aligned. This is the initial value.",
          browsers: "E,IE5"
        }, { name: "center", desc: "The ruby content is centered within its box." }, {
          name: "distribute-letter",
          browsers: "E,IE5"
        }, { name: "distribute-space", browsers: "E,IE5" }, {
          name: "left",
          desc: "The ruby text content is aligned with the start edge of the base."
        }, { name: "line-edge", browsers: "E,IE5" }, {
          name: "right",
          desc: "The ruby text content is aligned with the end edge of the base.",
          browsers: "E,IE5"
        }, {
          name: "start",
          desc: "The ruby text content is aligned with the start edge of the base.",
          browsers: "FF10"
        }, {
          name: "space-between",
          desc: "The ruby content expands as defined for normal text justification (as defined by 'text-justify'),",
          browsers: "FF10"
        }, {
          name: "space-around",
          desc: "As for 'space-between' except that there exists an extra justification opportunities whose space is distributed half before and half after the ruby content.",
          browsers: "FF10"
        }],
        status: "e",
        syntax: "start | center | space-between | space-around"
      }, {
        name: "ruby-overhang",
        desc: "Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.",
        browsers: "FF10,IE5",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The ruby text can overhang text adjacent to the base on either side. This is the initial value."
        }, { name: "end", desc: "The ruby text can overhang the text that follows it." }, {
          name: "none",
          desc: "The ruby text cannot overhang any text adjacent to its base, only its own base."
        }, { name: "start", desc: "The ruby text can overhang the text that precedes it." }]
      }, {
        name: "ruby-position",
        desc: "Used by the parent of elements with display: ruby-text to control the position of the ruby text with respect to its base.",
        browsers: "E12,FF38",
        restriction: "enum",
        values: [{ name: "after" }, { name: "before" }, { name: "inline" }, {
          name: "right",
          desc: "The ruby text appears on the right of the base. Unlike 'before' and 'after', this value is not relative to the text flow direction."
        }],
        status: "e",
        syntax: "over | under | inter-character"
      }, {
        name: "ruby-span",
        desc: "Determines whether, and on which side, ruby text is allowed to partially overhang any adjacent text in addition to its own base, when the ruby text is wider than the ruby base.",
        browsers: "FF10",
        restriction: "enum",
        values: [{ name: "attr(x)" }, { name: "none", desc: "No spanning. The computed value is '1'." }]
      }, {
        name: "scrollbar-3dlight-color",
        desc: "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
        browsers: "IE6",
        restriction: "color"
      }, {
        name: "scrollbar-arrow-color",
        desc: "Determines the color of the arrow elements of a scroll arrow.",
        browsers: "IE6",
        restriction: "color"
      }, {
        name: "scrollbar-base-color",
        desc: "Determines the color of the main elements of a scroll bar, which include the scroll box, track, and scroll arrows.",
        browsers: "IE6",
        restriction: "color"
      }, {
        name: "scrollbar-darkshadow-color",
        desc: "Determines the color of the gutter of a scroll bar.",
        browsers: "IE6",
        restriction: "color"
      }, {
        name: "scrollbar-face-color",
        desc: "Determines the color of the scroll box and scroll arrows of a scroll bar.",
        browsers: "IE6",
        restriction: "color"
      }, {
        name: "scrollbar-highlight-color",
        desc: "Determines the color of the top and left edges of the scroll box and scroll arrows of a scroll bar.",
        browsers: "IE6",
        restriction: "color"
      }, {
        name: "scrollbar-shadow-color",
        desc: "Determines the color of the bottom and right edges of the scroll box and scroll arrows of a scroll bar.",
        browsers: "IE6",
        restriction: "color"
      }, {
        name: "scrollbar-track-color",
        desc: "Determines the color of the track element of a scroll bar.",
        browsers: "IE6",
        restriction: "color"
      }, {
        name: "scroll-behavior",
        desc: "Specifies the scrolling behavior for a scrolling box, when scrolling happens due to navigation or CSSOM scrolling APIs.",
        browsers: "FF36,C61,O",
        restriction: "enum",
        values: [{ name: "auto", desc: "Scrolls in an instant fashion." }, { name: "smooth" }],
        syntax: "auto | smooth"
      }, {
        name: "scroll-snap-coordinate",
        desc: "Defines the x and y coordinate within the element which will align with the nearest ancestor scroll container’s snap-destination for the respective axis.",
        browsers: "FF39",
        restriction: "position, length, percentage, enum",
        values: [{ name: "none", desc: "Specifies that this element does not contribute a snap point." }],
        syntax: "none | <position>#"
      }, {
        name: "scroll-snap-destination",
        desc: "Define the x and y coordinate within the scroll container’s visual viewport which element snap points will align with.",
        browsers: "FF39",
        restriction: "position, length, percentage",
        syntax: "<position>"
      }, {
        name: "scroll-snap-points-x",
        desc: "Defines the positioning of snap points along the x axis of the scroll container it is applied to.",
        browsers: "FF39,S9",
        restriction: "enum",
        values: [{ name: "none", desc: "No snap points are defined by this scroll container." }, {
          name: "repeat()",
          desc: "Defines an interval at which snap points are defined, starting from the container’s relevant start edge."
        }],
        status: "o",
        syntax: "none | repeat( <length-percentage> )"
      }, {
        name: "scroll-snap-points-y",
        desc: "Defines the positioning of snap points alobg the y axis of the scroll container it is applied to.",
        browsers: "FF39,S9",
        restriction: "enum",
        values: [{ name: "none", desc: "No snap points are defined by this scroll container." }, {
          name: "repeat()",
          desc: "Defines an interval at which snap points are defined, starting from the container’s relevant start edge."
        }],
        status: "o",
        syntax: "none | repeat( <length-percentage> )"
      }, {
        name: "scroll-snap-type",
        desc: "Defines how strictly snap points are enforced on the scroll container.",
        browsers: "E12,FF39,S9,IE10",
        restriction: "enum",
        values: [{
          name: "none",
          desc: "The visual viewport of this scroll container must ignore snap points, if any, when scrolled."
        }, {
          name: "mandatory",
          desc: "The visual viewport of this scroll container is guaranteed to rest on a snap point when there are no active scrolling operations."
        }, {
          name: "proximity",
          desc: "The visual viewport of this scroll container may come to rest on a snap point at the termination of a scroll at the discretion of the UA given the parameters of the scroll."
        }],
        syntax: "none | mandatory | proximity"
      }, {
        name: "shape-image-threshold",
        desc: "Defines the alpha channel threshold used to extract the shape using an image. A value of 0.5 means that the shape will enclose all the pixels that are more than 50% opaque.",
        browsers: "FF61,S10.1,C37,O24",
        restriction: "number",
        syntax: "<number>"
      }, {
        name: "shape-margin",
        desc: "Adds a margin to a 'shape-outside'. This defines a new shape that is the smallest contour that includes all the points that are the 'shape-margin' distance outward in the perpendicular direction from a point on the underlying shape.",
        browsers: "FF61,S10.1,C37,O24",
        restriction: "url, length, percentage",
        syntax: "<length-percentage>"
      }, {
        name: "shape-outside",
        desc: "Specifies an orthogonal rotation to be applied to an image before it is laid out.",
        browsers: "FF61,S10.1,C37,O24",
        restriction: "image, box, shape, enum",
        values: [{ name: "margin-box" }, { name: "none", desc: "The float area is unaffected." }],
        syntax: "none | <shape-box> || <basic-shape> | <image>"
      }, {
        name: "shape-rendering",
        desc: "Provides hints about what tradeoffs to make as it renders vector graphics elements such as <path> elements and basic shapes such as circles and rectangles.",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Suppresses aural rendering."
        }, { name: "crispEdges" }, {
          name: "geometricPrecision",
          desc: "Emphasize geometric precision over speed and crisp edges."
        }, { name: "optimizeSpeed", desc: "Emphasize rendering speed over geometric precision and crisp edges." }]
      }, { name: "size", browsers: "C,O8", restriction: "length" }, {
        name: "src",
        desc: "@font-face descriptor. Specifies the resource containing font data. It is required, whether the font is downloadable or locally installed.",
        restriction: "enum, url, identifier",
        values: [{ name: "url()", desc: "Reference font by URL" }, { name: "format()" }, { name: "local()" }],
        syntax: "[ <url> [ format( <string># ) ]? | local( <family-name> ) ]#"
      }, {
        name: "stop-color",
        desc: "Indicates what color to use at that gradient stop.",
        restriction: "color"
      }, {
        name: "stop-opacity",
        desc: "Defines the opacity of a given gradient stop.",
        restriction: "number(0-1)"
      }, {
        name: "stroke",
        desc: "Paints along the outline of the given graphical element.",
        restriction: "color, enum, url",
        values: [{
          name: "url()",
          desc: "A URL reference to a paint server element, which is an element that defines a paint server: ‘hatch’, ‘linearGradient’, ‘mesh’, ‘pattern’, ‘radialGradient’ and ‘solidcolor’."
        }]
      }, {
        name: "stroke-dasharray",
        desc: "Controls the pattern of dashes and gaps used to stroke paths.",
        restriction: "length, percentage, number, enum",
        values: [{ name: "none", desc: "Indicates that no dashing is used." }]
      }, {
        name: "stroke-dashoffset",
        desc: "Specifies the distance into the dash pattern to start the dash.",
        restriction: "percentage, length"
      }, {
        name: "stroke-linecap",
        desc: "Specifies the shape to be used at the end of open subpaths when they are stroked.",
        restriction: "enum",
        values: [{ name: "butt" }, {
          name: "round",
          desc: "Indicates that at each end of each subpath, the shape representing the stroke will be extended by a half circle with a radius equal to the stroke width."
        }, {
          name: "square",
          desc: "Indicates that at the end of each subpath, the shape representing the stroke will be extended by a rectangle with the same width as the stroke width and whose length is half of the stroke width."
        }]
      }, {
        name: "stroke-linejoin",
        desc: "Specifies the shape to be used at the corners of paths or basic shapes when they are stroked.",
        restriction: "enum",
        values: [{ name: "bevel" }, { name: "miter" }, {
          name: "round",
          desc: "Indicates that a round corner is to be used to join path segments."
        }]
      }, {
        name: "stroke-miterlimit",
        desc: "When two line segments meet at a sharp angle and miter joins have been specified for 'stroke-linejoin', it is possible for the miter to extend far beyond the thickness of the line stroking the path.",
        restriction: "number"
      }, {
        name: "stroke-opacity",
        desc: "Specifies the opacity of the painting operation used to stroke the current object.",
        restriction: "number(0-1)"
      }, {
        name: "stroke-width",
        desc: "Specifies the width of the stroke on the current object.",
        restriction: "percentage, length"
      }, {
        name: "suffix",
        desc: "@counter-style descriptor. Specifies a <symbol> that is appended to the marker representation.",
        browsers: "FF33",
        restriction: "image, string, identifier",
        syntax: "<symbol>"
      }, {
        name: "system",
        desc: "@counter-style descriptor. Specifies which algorithm will be used to construct the counter’s representation based on the counter value.",
        browsers: "FF33",
        restriction: "enum, integer",
        values: [{ name: "additive" }, {
          name: "alphabetic",
          desc: "Interprets the list of counter symbols as digits to an alphabetic numbering system, similar to the default lower-alpha counter style, which wraps from \"a\", \"b\", \"c\", to \"aa\", \"ab\", \"ac\"."
        }, { name: "cyclic" }, { name: "extends" }, {
          name: "fixed",
          desc: "Runs through its list of counter symbols once, then falls back."
        }, { name: "numeric" }, { name: "symbolic" }],
        syntax: "cyclic | numeric | alphabetic | symbolic | additive | [ fixed <integer>? ] | [ extends <counter-style-name> ]"
      }, {
        name: "symbols",
        desc: "@counter-style descriptor. Specifies the symbols used by the marker-construction algorithm specified by the system descriptor.",
        browsers: "FF33",
        restriction: "image, string, identifier",
        syntax: "<symbol>+"
      }, {
        name: "table-layout",
        desc: "Controls the algorithm used to lay out the table cells, rows, and columns.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "auto", desc: "Use any automatic table layout algorithm." }, {
          name: "fixed",
          desc: "Use the fixed table layout algorithm."
        }],
        syntax: "auto | fixed"
      }, {
        name: "tab-size",
        desc: "Determines the width of the tab character (U+0009), in space characters (U+0020), when rendered.",
        browsers: "FF4,S6.1,C21,O15",
        restriction: "integer, length",
        syntax: "<integer> | <length>"
      }, {
        name: "text-align",
        desc: "Describes how inline contents of a block are horizontally aligned if the contents do not completely fill the line box.",
        browsers: "all",
        restriction: "string",
        values: [{ name: "center", desc: "The inline contents are centered within the line box." }, {
          name: "end",
          desc: "The inline contents are aligned to the end edge of the line box.",
          browsers: "C,FF3.6,O15,S3.1"
        }, {
          name: "justify",
          desc: "The text is justified according to the method specified by the 'text-justify' property."
        }, {
          name: "left",
          desc: "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
        }, {
          name: "right",
          desc: "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
        }, {
          name: "start",
          desc: "The inline contents are aligned to the start edge of the line box.",
          browsers: "C,FF1,O15,S3.1"
        }],
        syntax: "start | end | left | right | center | justify | match-parent"
      }, {
        name: "text-align-last",
        desc: "Describes how the last line of a block or a line right before a forced line break is aligned when 'text-align' is set to 'justify'.",
        browsers: "E12,FF49,C47,O",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Content on the affected line is aligned per 'text-align' unless 'text-align' is set to 'justify', in which case it is 'start-aligned'."
        }, { name: "center", desc: "The inline contents are centered within the line box." }, {
          name: "justify",
          desc: "The text is justified according to the method specified by the 'text-justify' property."
        }, {
          name: "left",
          desc: "The inline contents are aligned to the left edge of the line box. In vertical text, 'left' aligns to the edge of the line box that would be the start edge for left-to-right text."
        }, {
          name: "right",
          desc: "The inline contents are aligned to the right edge of the line box. In vertical text, 'right' aligns to the edge of the line box that would be the end edge for left-to-right text."
        }],
        syntax: "auto | start | end | left | right | center | justify"
      }, {
        name: "text-anchor",
        desc: "Used to align (start-, middle- or end-alignment) a string of text relative to a given point.",
        restriction: "enum",
        values: [{
          name: "end",
          desc: "The rendered characters are aligned such that the end of the resulting rendered text is at the initial current text position."
        }, {
          name: "middle",
          desc: "The rendered characters are aligned such that the geometric middle of the resulting rendered text is at the initial current text position."
        }, {
          name: "start",
          desc: "The rendered characters are aligned such that the start of the resulting rendered text is at the initial current text position."
        }]
      }, {
        name: "text-decoration",
        desc: "Decorations applied to font used for an element's text.",
        browsers: "all",
        restriction: "enum, color",
        values: [{ name: "dashed" }, { name: "dotted" }, { name: "double" }, { name: "line-through" }, { name: "overline" }, { name: "solid" }, { name: "underline" }, { name: "wavy" }],
        syntax: "<'text-decoration-line'> || <'text-decoration-style'> || <'text-decoration-color'>"
      }, {
        name: "text-decoration-color",
        desc: "Specifies the color of text decoration (underlines overlines, and line-throughs) set on the element with text-decoration-line.",
        browsers: "FF36,S,C57,O44",
        restriction: "color",
        syntax: "<color>"
      }, {
        name: "text-decoration-line",
        desc: "Specifies what line decorations, if any, are added to the element.",
        browsers: "FF36,S,C,O",
        restriction: "enum",
        values: [{ name: "line-through" }, {
          name: "none",
          desc: "Neither produces nor inhibits text decoration."
        }, { name: "overline" }, { name: "underline" }],
        syntax: "none | [ underline || overline || line-through || blink ]"
      }, {
        name: "text-decoration-style",
        desc: "Specifies the line style for underline, line-through and overline text decoration.",
        browsers: "FF36,S,C57,O44",
        restriction: "enum",
        values: [{ name: "dashed" }, { name: "dotted" }, { name: "double" }, {
          name: "none",
          desc: "Produces no line."
        }, { name: "solid" }, { name: "wavy" }],
        syntax: "solid | double | dotted | dashed | wavy"
      }, {
        name: "text-indent",
        desc: "Specifies the indentation applied to lines of inline content in a block. The indentation only affects the first line of inline content in the block unless the 'hanging' keyword is specified, in which case it affects all lines except the first.",
        browsers: "all",
        restriction: "percentage, length",
        values: [],
        syntax: "<length-percentage> && hanging? && each-line?"
      }, {
        name: "text-justify",
        desc: "Selects the justification algorithm used when 'text-align' is set to 'justify'. The property applies to block containers, but the UA may (but is not required to) also support it on inline elements.",
        browsers: "E14,FF55,C,IE11,O",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The UA determines the justification algorithm to follow, based on a balance between performance and adequate presentation quality."
        }, {
          name: "distribute",
          desc: "Justification primarily changes spacing both at word separators and at grapheme cluster boundaries in all scripts except those in the connected and cursive groups. This value is sometimes used in e.g. Japanese, often with the 'text-align-last' property."
        }, { name: "distribute-all-lines" }, { name: "inter-cluster" }, { name: "inter-ideograph" }, { name: "inter-word" }, { name: "kashida" }, { name: "newspaper" }],
        syntax: "auto | inter-character | inter-word | none"
      }, {
        name: "text-orientation",
        desc: "Specifies the orientation of text within a line.",
        browsers: "FF41,C48,O",
        restriction: "enum",
        values: [{ name: "sideways", browsers: "C25,O15,S6.1" }, {
          name: "sideways-right",
          browsers: "C25,O15,S6.1"
        }, { name: "upright" }],
        syntax: "mixed | upright | sideways"
      }, {
        name: "text-overflow",
        desc: "Text can overflow for example when it is prevented from wrapping.",
        browsers: "all",
        restriction: "enum, string",
        values: [{ name: "clip" }, { name: "ellipsis" }],
        syntax: "[ clip | ellipsis | <string> ]{1,2}"
      }, {
        name: "text-rendering",
        desc: "The creator of SVG content might want to provide a hint to the implementation about what tradeoffs to make as it renders text. The ‘text-rendering’ property provides these hints.",
        browsers: "FF3,S5,C4,O15",
        restriction: "enum",
        values: [{ name: "auto" }, {
          name: "geometricPrecision",
          desc: "Indicates that the user agent shall emphasize geometric precision over legibility and rendering speed."
        }, { name: "optimizeLegibility" }, {
          name: "optimizeSpeed",
          desc: "Indicates that the user agent shall emphasize rendering speed over legibility and geometric precision."
        }],
        syntax: "auto | optimizeSpeed | optimizeLegibility | geometricPrecision"
      }, {
        name: "text-shadow",
        desc: "Enables shadow effects to be applied to the text of the element.",
        browsers: "all",
        restriction: "length, color",
        values: [],
        syntax: "none | <shadow-t>#"
      }, {
        name: "text-transform",
        desc: "Controls capitalization effects of an element’s text.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "capitalize" }, { name: "lowercase" }, {
          name: "none",
          desc: "No effects."
        }, { name: "uppercase" }],
        syntax: "none | capitalize | uppercase | lowercase | full-width"
      }, {
        name: "text-underline-position",
        desc: "Sets the position of an underline specified on the same element: it does not affect underlines specified by ancestor elements. This property is typically used in vertical writing contexts such as in Japanese documents where it often desired to have the underline appear 'over' (to the right of) the affected run of text",
        browsers: "E12,C33,IE6",
        restriction: "enum",
        values: [{ name: "above" }, {
          name: "auto",
          desc: "The user agent may use any algorithm to determine the underline’s position. In horizontal line layout, the underline should be aligned as for alphabetic. In vertical line layout, if the language is set to Japanese or Korean, the underline should be aligned as for over."
        }, { name: "below", desc: "The underline is aligned with the under edge of the element’s content box." }],
        syntax: "auto | [ under || [ left | right ] ]"
      }, {
        name: "top",
        desc: "Specifies how far an absolutely positioned box's top margin edge is offset below the top edge of the box's 'containing block'.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{
          name: "auto",
          desc: "For non-replaced elements, the effect of this value depends on which of related properties have the value 'auto' as well"
        }],
        syntax: "<length> | <percentage> | auto"
      }, {
        name: "touch-action",
        desc: "Determines whether touch input may trigger default behavior supplied by user agent.",
        browsers: "E12,FF52,C36,IE11,O23",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "The user agent may determine any permitted touch behaviors for touches that begin on the element."
        }, { name: "cross-slide-x", browsers: "E,IE11" }, {
          name: "cross-slide-y",
          browsers: "E,IE11"
        }, { name: "double-tap-zoom", browsers: "E,IE11" }, {
          name: "manipulation",
          desc: "The user agent may consider touches that begin on the element only for the purposes of scrolling and continuous zooming."
        }, {
          name: "none",
          desc: "Touches that begin on the element must not trigger default touch behaviors."
        }, {
          name: "pan-x",
          desc: "The user agent may consider touches that begin on the element only for the purposes of horizontally scrolling the element’s nearest ancestor with horizontally scrollable content."
        }, {
          name: "pan-y",
          desc: "The user agent may consider touches that begin on the element only for the purposes of vertically scrolling the element’s nearest ancestor with vertically scrollable content."
        }, { name: "pinch-zoom", browsers: "E,IE11" }],
        syntax: "auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] || pinch-zoom ] | manipulation"
      }, {
        name: "transform",
        desc: "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "matrix()" }, { name: "matrix3d()" }, { name: "none" }, { name: "perspective()" }, { name: "rotate()" }, { name: "rotate3d()" }, { name: "rotateX('angle')" }, { name: "rotateY('angle')" }, { name: "rotateZ('angle')" }, { name: "scale()" }, { name: "scale3d()" }, { name: "scaleX()" }, { name: "scaleY()" }, { name: "scaleZ()" }, { name: "skew()" }, { name: "skewX()" }, { name: "skewY()" }, { name: "translate()" }, { name: "translate3d()" }, { name: "translateX()" }, { name: "translateY()" }, { name: "translateZ()" }],
        syntax: "none | <transform-list>"
      }, {
        name: "transform-origin",
        desc: "Establishes the origin of transformation for an element.",
        browsers: "all",
        restriction: "position, length, percentage",
        syntax: "[ <length-percentage> | left | center | right | top | bottom ] | [ [ <length-percentage> | left | center | right ] && [ <length-percentage> | top | center | bottom ] ] <length>?"
      }, {
        name: "transform-style",
        desc: "Defines how nested elements are rendered in 3D space.",
        browsers: "E12,FF16,S,C12,O15",
        restriction: "enum",
        values: [{ name: "flat" }, { name: "preserve-3d", browsers: "E,C36,FF16,O23,S9" }],
        syntax: "flat | preserve-3d"
      }, {
        name: "transition",
        desc: "Shorthand property combines four of the transition properties into a single property.",
        browsers: "all",
        restriction: "time, property, timing-function, enum",
        values: [{ name: "all", desc: "Every property that is able to undergo a transition will do so." }, {
          name: "none",
          desc: "No property will transition."
        }],
        syntax: "<single-transition>#"
      }, {
        name: "transition-delay",
        desc: "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
        browsers: "all",
        restriction: "time",
        syntax: "<time>#"
      }, {
        name: "transition-duration",
        desc: "Specifies how long the transition from the old value to the new value should take.",
        browsers: "all",
        restriction: "time",
        syntax: "<time>#"
      }, {
        name: "transition-property",
        desc: "Specifies the name of the CSS property to which the transition is applied.",
        browsers: "all",
        restriction: "property",
        values: [{ name: "all", desc: "Every property that is able to undergo a transition will do so." }, {
          name: "none",
          desc: "No property will transition."
        }],
        syntax: "none | <single-transition-property>#"
      }, {
        name: "transition-timing-function",
        desc: "Describes how the intermediate values used during a transition will be calculated.",
        browsers: "all",
        restriction: "timing-function",
        syntax: "<single-transition-timing-function>#"
      }, {
        name: "unicode-bidi",
        desc: "The level of embedding with respect to the bidirectional algorithm.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "bidi-override" }, { name: "embed" }, {
          name: "isolate",
          desc: "The contents of the element are considered to be inside a separate, independent paragraph.",
          browsers: "C,FF10,O15,S5.1"
        }, { name: "isolate-override", browsers: "C,FF17,O15,S6.1" }, {
          name: "normal",
          desc: "The element does not open an additional level of embedding with respect to the bidirectional algorithm. For inline-level elements, implicit reordering works across element boundaries."
        }, { name: "plaintext", browsers: "C,FF10,O15,S6" }],
        syntax: "normal | embed | isolate | bidi-override | isolate-override | plaintext"
      }, {
        name: "unicode-range",
        desc: "@font-face descriptor. Defines the set of Unicode codepoints that may be supported by the font face for which it is declared.",
        restriction: "unicode-range",
        values: [{ name: "U+26" }, { name: "U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F" }, { name: "U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF" }, { name: "U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD" }, { name: "U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD" }, { name: "U+00-7F" }, { name: "U+80-FF" }, { name: "U+100-17F" }, { name: "U+180-24F" }, { name: "U+1E00-1EFF" }, { name: "U+250-2AF" }, { name: "U+370-3FF" }, { name: "U+1F00-1FFF" }, { name: "U+400-4FF" }, { name: "U+500-52F" }, { name: "U+00-52F, U+1E00-1FFF, U+2200–22FF" }, { name: "U+530–58F" }, { name: "U+590–5FF" }, { name: "U+600–6FF" }, { name: "U+750–77F" }, { name: "U+8A0–8FF" }, { name: "U+700–74F" }, { name: "U+900–97F" }, { name: "U+980–9FF" }, { name: "U+A00–A7F" }, { name: "U+A80–AFF" }, { name: "U+B00–B7F" }, { name: "U+B80–BFF" }, { name: "U+C00–C7F" }, { name: "U+C80–CFF" }, { name: "U+D00–D7F" }, { name: "U+D80–DFF" }, { name: "U+118A0–118FF" }, { name: "U+E00–E7F" }, { name: "U+1A20–1AAF" }, { name: "U+AA80–AADF" }, { name: "U+E80–EFF" }, { name: "U+F00–FFF" }, { name: "U+1000–109F" }, { name: "U+10A0–10FF" }, { name: "U+1200–137F" }, { name: "U+1380–139F" }, { name: "U+2D80–2DDF" }, { name: "U+AB00–AB2F" }, { name: "U+1780–17FF" }, { name: "U+1800–18AF" }, { name: "U+1B80–1BBF" }, { name: "U+1CC0–1CCF" }, { name: "U+4E00–9FD5" }, { name: "U+3400–4DB5" }, { name: "U+2F00–2FDF" }, { name: "U+2E80–2EFF" }, { name: "U+1100–11FF" }, { name: "U+AC00–D7AF" }, { name: "U+3040–309F" }, { name: "U+30A0–30FF" }, { name: "U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F" }, { name: "U+A4D0–A4FF" }, { name: "U+A000–A48F" }, { name: "U+A490–A4CF" }, { name: "U+2000-206F" }, { name: "U+3000–303F" }, { name: "U+2070–209F" }, { name: "U+20A0–20CF" }, { name: "U+2100–214F" }, { name: "U+2150–218F" }, { name: "U+2190–21FF" }, { name: "U+2200–22FF" }, { name: "U+2300–23FF" }, { name: "U+E000-F8FF" }, { name: "U+FB00–FB4F" }, { name: "U+FB50–FDFF" }, { name: "U+1F600–1F64F" }, { name: "U+2600–26FF" }, { name: "U+1F300–1F5FF" }, { name: "U+1F900–1F9FF" }, { name: "U+1F680–1F6FF" }],
        syntax: "<unicode-range>#"
      }, {
        name: "user-select",
        desc: "Controls the appearance of selection.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "all",
          desc: "The content of the element must be selected atomically"
        }, { name: "auto" }, {
          name: "contain",
          desc: "UAs must not allow a selection which is started in this element to be extended outside of this element."
        }, { name: "none", desc: "The UA must not allow selections to be started in this element." }, {
          name: "text",
          desc: "The element imposes no constraint on the selection."
        }],
        status: "n",
        syntax: "auto | text | none | contain | all"
      }, {
        name: "vertical-align",
        desc: "Affects the vertical positioning of the inline boxes generated by an inline-level element inside a line box.",
        browsers: "all",
        restriction: "percentage, length",
        values: [{
          name: "auto",
          desc: "Align the dominant baseline of the parent box with the equivalent, or heuristically reconstructed, baseline of the element inline box."
        }, {
          name: "baseline",
          desc: "Align the 'alphabetic' baseline of the element with the 'alphabetic' baseline of the parent element."
        }, {
          name: "bottom",
          desc: "Align the after edge of the extended inline box with the after-edge of the line box."
        }, {
          name: "middle",
          desc: "Align the 'middle' baseline of the inline element with the middle baseline of the parent."
        }, {
          name: "sub",
          desc: "Lower the baseline of the box to the proper position for subscripts of the parent's box. (This value has no effect on the font size of the element's text.)"
        }, {
          name: "super",
          desc: "Raise the baseline of the box to the proper position for superscripts of the parent's box. (This value has no effect on the font size of the element's text.)"
        }, { name: "text-bottom" }, { name: "text-top" }, {
          name: "top",
          desc: "Align the before edge of the extended inline box with the before-edge of the line box."
        }, { name: "-webkit-baseline-middle", browsers: "C,S1" }],
        syntax: "baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>"
      }, {
        name: "visibility",
        desc: "Specifies whether the boxes generated by an element are rendered. Invisible boxes still affect layout (set the ‘display’ property to ‘none’ to suppress box generation altogether).",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "collapse",
          desc: "Table-specific. If used on elements other than rows, row groups, columns, or column groups, 'collapse' has the same meaning as 'hidden'."
        }, {
          name: "hidden",
          desc: "The generated box is invisible (fully transparent, nothing is drawn), but still affects layout."
        }, { name: "visible", desc: "The generated box is visible." }],
        syntax: "visible | hidden | collapse"
      }, {
        name: "-webkit-animation",
        desc: "Shorthand property combines six of the animation properties into a single property.",
        browsers: "C,S5",
        restriction: "time, enum, timing-function, identifier, number",
        values: [{ name: "alternate" }, { name: "alternate-reverse" }, { name: "backwards" }, {
          name: "both",
          desc: "Both forwards and backwards fill modes are applied."
        }, { name: "forwards" }, { name: "infinite", desc: "Causes the animation to repeat forever." }, {
          name: "none",
          desc: "No animation is performed"
        }, { name: "normal", desc: "Normal playback." }, {
          name: "reverse",
          desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
        }]
      }, {
        name: "-webkit-animation-delay",
        desc: "Defines when the animation will start.",
        browsers: "C,S5",
        restriction: "time"
      }, {
        name: "-webkit-animation-direction",
        desc: "Defines whether or not the animation should play in reverse on alternate cycles.",
        browsers: "C,S5",
        restriction: "enum",
        values: [{ name: "alternate" }, { name: "alternate-reverse" }, {
          name: "normal",
          desc: "Normal playback."
        }, {
          name: "reverse",
          desc: "All iterations of the animation are played in the reverse direction from the way they were specified."
        }]
      }, {
        name: "-webkit-animation-duration",
        desc: "Defines the length of time that an animation takes to complete one cycle.",
        browsers: "C,S5",
        restriction: "time"
      }, {
        name: "-webkit-animation-fill-mode",
        desc: "Defines what values are applied by the animation outside the time it is executing.",
        browsers: "C,S5",
        restriction: "enum",
        values: [{ name: "backwards" }, {
          name: "both",
          desc: "Both forwards and backwards fill modes are applied."
        }, { name: "forwards" }, {
          name: "none",
          desc: "There is no change to the property value between the time the animation is applied and the time the animation begins playing or after the animation completes."
        }]
      }, {
        name: "-webkit-animation-iteration-count",
        desc: "Defines the number of times an animation cycle is played. The default value is one, meaning the animation will play from beginning to end once.",
        browsers: "C,S5",
        restriction: "number, enum",
        values: [{ name: "infinite", desc: "Causes the animation to repeat forever." }]
      }, {
        name: "-webkit-animation-name",
        desc: "Defines a list of animations that apply. Each name is used to select the keyframe at-rule that provides the property values for the animation.",
        browsers: "C,S5",
        restriction: "identifier, enum",
        values: [{ name: "none", desc: "No animation is performed" }]
      }, {
        name: "-webkit-animation-play-state",
        desc: "Defines whether the animation is running or paused.",
        browsers: "C,S5",
        restriction: "enum",
        values: [{ name: "paused" }, { name: "running" }]
      }, {
        name: "-webkit-animation-timing-function",
        desc: "Describes how the animation will progress over one cycle of its duration. See the 'transition-timing-function'.",
        browsers: "C,S5",
        restriction: "timing-function"
      }, {
        name: "-webkit-appearance",
        desc: "Changes the appearance of buttons and other controls to resemble native controls.",
        browsers: "E12,S3,C1,O15",
        restriction: "enum",
        values: [{ name: "button" }, { name: "button-bevel" }, { name: "caps-lock-indicator" }, { name: "caret" }, { name: "checkbox" }, { name: "default-button" }, { name: "listbox" }, { name: "listitem" }, { name: "media-fullscreen-button" }, { name: "media-mute-button" }, { name: "media-play-button" }, { name: "media-seek-back-button" }, { name: "media-seek-forward-button" }, { name: "media-slider" }, { name: "media-sliderthumb" }, { name: "menulist" }, { name: "menulist-button" }, { name: "menulist-text" }, { name: "menulist-textfield" }, { name: "none" }, { name: "push-button" }, { name: "radio" }, { name: "scrollbarbutton-down" }, { name: "scrollbarbutton-left" }, { name: "scrollbarbutton-right" }, { name: "scrollbarbutton-up" }, { name: "scrollbargripper-horizontal" }, { name: "scrollbargripper-vertical" }, { name: "scrollbarthumb-horizontal" }, { name: "scrollbarthumb-vertical" }, { name: "scrollbartrack-horizontal" }, { name: "scrollbartrack-vertical" }, { name: "searchfield" }, { name: "searchfield-cancel-button" }, { name: "searchfield-decoration" }, { name: "searchfield-results-button" }, { name: "searchfield-results-decoration" }, { name: "slider-horizontal" }, { name: "sliderthumb-horizontal" }, { name: "sliderthumb-vertical" }, { name: "slider-vertical" }, { name: "square-button" }, { name: "textarea" }, { name: "textfield" }],
        status: "n",
        syntax: "none | button | button-bevel | caret | checkbox | default-button | inner-spin-button | listbox | listitem | media-controls-background | media-controls-fullscreen-background | media-current-time-display | media-enter-fullscreen-button | media-exit-fullscreen-button | media-fullscreen-button | media-mute-button | media-overlay-play-button | media-play-button | media-seek-back-button | media-seek-forward-button | media-slider | media-sliderthumb | media-time-remaining-display | media-toggle-closed-captions-button | media-volume-slider | media-volume-slider-container | media-volume-sliderthumb | menulist | menulist-button | menulist-text | menulist-textfield | meter | progress-bar | progress-bar-value | push-button | radio | searchfield | searchfield-cancel-button | searchfield-decoration | searchfield-results-button | searchfield-results-decoration | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | square-button | textarea | textfield"
      }, {
        name: "-webkit-backdrop-filter",
        desc: "Applies a filter effect where the first filter in the list takes the element's background image as the input image.",
        browsers: "S9",
        restriction: "enum, url",
        values: [{
          name: "none",
          desc: "No filter effects are applied."
        }, { name: "blur()" }, { name: "brightness()" }, { name: "contrast()" }, { name: "drop-shadow()" }, { name: "grayscale()" }, { name: "hue-rotate()" }, { name: "invert()" }, { name: "opacity()" }, { name: "saturate()" }, { name: "sepia()" }, {
          name: "url()",
          desc: "A filter reference to a <filter> element."
        }]
      }, {
        name: "-webkit-backface-visibility",
        desc: "Determines whether or not the 'back' side of a transformed element is visible when facing the viewer. With an identity transform, the front side of an element faces the viewer.",
        browsers: "C,S5",
        restriction: "enum",
        values: [{ name: "hidden" }, { name: "visible" }]
      }, {
        name: "-webkit-background-clip",
        desc: "Determines the background painting area.",
        browsers: "C,S3",
        restriction: "box"
      }, {
        name: "-webkit-background-composite",
        browsers: "C,S3",
        restriction: "enum",
        values: [{ name: "border" }, { name: "padding" }]
      }, {
        name: "-webkit-background-origin",
        desc: "For elements rendered as a single box, specifies the background positioning area. For elements rendered as multiple boxes (e.g., inline boxes on several lines, boxes on several pages) specifies which boxes 'box-decoration-break' operates on to determine the background positioning area(s).",
        browsers: "C,S3",
        restriction: "box"
      }, {
        name: "-webkit-border-image",
        desc: "Shorthand property for setting 'border-image-source', 'border-image-slice', 'border-image-width', 'border-image-outset' and 'border-image-repeat'. Omitted values are set to their initial values.",
        browsers: "C,S5",
        restriction: "length, percentage, number, url, enum",
        values: [{
          name: "auto",
          desc: "If 'auto' is specified then the border image width is the intrinsic width or height (whichever is applicable) of the corresponding image slice. If the image does not have the required intrinsic dimension then the corresponding border-width is used instead."
        }, {
          name: "fill",
          desc: "Causes the middle part of the border-image to be preserved."
        }, { name: "none" }, { name: "repeat" }, {
          name: "round",
          desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the image is rescaled so that it does."
        }, {
          name: "space",
          desc: "The image is tiled (repeated) to fill the area. If it does not fill the area with a whole number of tiles, the extra space is distributed around the tiles."
        }, { name: "stretch", desc: "The image is stretched to fill the area." }, { name: "url()" }]
      }, {
        name: "-webkit-box-align",
        desc: "Specifies the alignment of nested elements within an outer flexible box element.",
        browsers: "C,S3",
        restriction: "enum",
        values: [{
          name: "baseline",
          desc: "If this box orientation is inline-axis or horizontal, all children are placed with their baselines aligned, and extra space placed before or after as necessary. For block flows, the baseline of the first non-empty line box located within the element is used. For tables, the baseline of the first cell is used."
        }, {
          name: "center",
          desc: "Any extra space is divided evenly, with half placed above the child and the other half placed after the child."
        }, {
          name: "end",
          desc: "For normal direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element. For reverse direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element."
        }, {
          name: "start",
          desc: "For normal direction boxes, the top edge of each child is placed along the top of the box. Extra space is placed below the element. For reverse direction boxes, the bottom edge of each child is placed along the bottom of the box. Extra space is placed above the element."
        }, { name: "stretch", desc: "The height of each child is adjusted to that of the containing block." }]
      }, {
        name: "-webkit-box-direction",
        desc: "In webkit applications, -webkit-box-direction specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).",
        browsers: "C,S3",
        restriction: "enum",
        values: [{
          name: "normal",
          desc: "A box with a computed value of horizontal for box-orient displays its children from left to right. A box with a computed value of vertical displays its children from top to bottom."
        }, {
          name: "reverse",
          desc: "A box with a computed value of horizontal for box-orient displays its children from right to left. A box with a computed value of vertical displays its children from bottom to top."
        }]
      }, {
        name: "-webkit-box-flex",
        desc: "Specifies an element's flexibility.",
        browsers: "C,S3",
        restriction: "number"
      }, {
        name: "-webkit-box-flex-group",
        desc: "Flexible elements can be assigned to flex groups using the 'box-flex-group' property.",
        browsers: "C,S3",
        restriction: "integer"
      }, {
        name: "-webkit-box-ordinal-group",
        desc: "Indicates the ordinal group the element belongs to. Elements with a lower ordinal group are displayed before those with a higher ordinal group.",
        browsers: "C,S3",
        restriction: "integer"
      }, {
        name: "-webkit-box-orient",
        desc: "In webkit applications, -webkit-box-orient specifies whether a box lays out its contents horizontally or vertically.",
        browsers: "C,S3",
        restriction: "enum",
        values: [{ name: "block-axis" }, {
          name: "horizontal",
          desc: "The box displays its children from left to right in a horizontal line."
        }, { name: "inline-axis" }, {
          name: "vertical",
          desc: "The box displays its children from stacked from top to bottom vertically."
        }]
      }, {
        name: "-webkit-box-pack",
        desc: "Specifies alignment of child elements within the current element in the direction of orientation.",
        browsers: "C,S3",
        restriction: "enum",
        values: [{
          name: "center",
          desc: "The extra space is divided evenly, with half placed before the first child and the other half placed after the last child."
        }, {
          name: "end",
          desc: "For normal direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child. For reverse direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child."
        }, {
          name: "justify",
          desc: "The space is divided evenly in-between each child, with none of the extra space placed before the first child or after the last child. If there is only one child, treat the pack value as if it were start."
        }, {
          name: "start",
          desc: "For normal direction boxes, the left edge of the first child is placed at the left side, with all extra space placed after the last child. For reverse direction boxes, the right edge of the last child is placed at the right side, with all extra space placed before the first child."
        }]
      }, {
        name: "-webkit-box-reflect",
        desc: "Defines a reflection of a border box.",
        browsers: "C,S4",
        values: [{ name: "above", desc: "The reflection appears above the border box." }, {
          name: "below",
          desc: "The reflection appears below the border box."
        }, { name: "left", desc: "The reflection appears to the left of the border box." }, {
          name: "right",
          desc: "The reflection appears to the right of the border box."
        }],
        status: "n",
        syntax: "[ above | below | right | left ]? <length>? <image>?"
      }, {
        name: "-webkit-box-sizing",
        desc: "Box Model addition in CSS3.",
        browsers: "C,S3",
        restriction: "enum",
        values: [{ name: "border-box" }, { name: "content-box" }]
      }, {
        name: "-webkit-break-after",
        desc: "Describes the page/column break behavior before the generated box.",
        browsers: "S7",
        restriction: "enum",
        values: [{ name: "always", desc: "Always force a page break before/after the generated box." }, {
          name: "auto",
          desc: "Neither force nor forbid a page/column break before/after the generated box."
        }, { name: "avoid", desc: "Avoid a page/column break before/after the generated box." }, {
          name: "avoid-column",
          desc: "Avoid a column break before/after the generated box."
        }, {
          name: "avoid-page",
          desc: "Avoid a page break before/after the generated box."
        }, { name: "avoid-region" }, {
          name: "column",
          desc: "Always force a column break before/after the generated box."
        }, {
          name: "left",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
        }, {
          name: "page",
          desc: "Always force a page break before/after the generated box."
        }, { name: "region" }, {
          name: "right",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
        }]
      }, {
        name: "-webkit-break-before",
        desc: "Describes the page/column break behavior before the generated box.",
        browsers: "S7",
        restriction: "enum",
        values: [{ name: "always", desc: "Always force a page break before/after the generated box." }, {
          name: "auto",
          desc: "Neither force nor forbid a page/column break before/after the generated box."
        }, { name: "avoid", desc: "Avoid a page/column break before/after the generated box." }, {
          name: "avoid-column",
          desc: "Avoid a column break before/after the generated box."
        }, {
          name: "avoid-page",
          desc: "Avoid a page break before/after the generated box."
        }, { name: "avoid-region" }, {
          name: "column",
          desc: "Always force a column break before/after the generated box."
        }, {
          name: "left",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
        }, {
          name: "page",
          desc: "Always force a page break before/after the generated box."
        }, { name: "region" }, {
          name: "right",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
        }]
      }, {
        name: "-webkit-break-inside",
        desc: "Describes the page/column break behavior inside the generated box.",
        browsers: "S7",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Neither force nor forbid a page/column break inside the generated box."
        }, { name: "avoid", desc: "Avoid a page/column break inside the generated box." }, {
          name: "avoid-column",
          desc: "Avoid a column break inside the generated box."
        }, { name: "avoid-page", desc: "Avoid a page break inside the generated box." }, { name: "avoid-region" }]
      }, {
        name: "-webkit-column-break-after",
        desc: "Describes the page/column break behavior before the generated box.",
        browsers: "C,S3",
        restriction: "enum",
        values: [{ name: "always", desc: "Always force a page break before/after the generated box." }, {
          name: "auto",
          desc: "Neither force nor forbid a page/column break before/after the generated box."
        }, { name: "avoid", desc: "Avoid a page/column break before/after the generated box." }, {
          name: "avoid-column",
          desc: "Avoid a column break before/after the generated box."
        }, {
          name: "avoid-page",
          desc: "Avoid a page break before/after the generated box."
        }, { name: "avoid-region" }, {
          name: "column",
          desc: "Always force a column break before/after the generated box."
        }, {
          name: "left",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
        }, {
          name: "page",
          desc: "Always force a page break before/after the generated box."
        }, { name: "region" }, {
          name: "right",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
        }]
      }, {
        name: "-webkit-column-break-before",
        desc: "Describes the page/column break behavior before the generated box.",
        browsers: "C,S3",
        restriction: "enum",
        values: [{ name: "always", desc: "Always force a page break before/after the generated box." }, {
          name: "auto",
          desc: "Neither force nor forbid a page/column break before/after the generated box."
        }, { name: "avoid", desc: "Avoid a page/column break before/after the generated box." }, {
          name: "avoid-column",
          desc: "Avoid a column break before/after the generated box."
        }, {
          name: "avoid-page",
          desc: "Avoid a page break before/after the generated box."
        }, { name: "avoid-region" }, {
          name: "column",
          desc: "Always force a column break before/after the generated box."
        }, {
          name: "left",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a left page."
        }, {
          name: "page",
          desc: "Always force a page break before/after the generated box."
        }, { name: "region" }, {
          name: "right",
          desc: "Force one or two page breaks before/after the generated box so that the next page is formatted as a right page."
        }]
      }, {
        name: "-webkit-column-break-inside",
        desc: "Describes the page/column break behavior inside the generated box.",
        browsers: "C,S3",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Neither force nor forbid a page/column break inside the generated box."
        }, { name: "avoid", desc: "Avoid a page/column break inside the generated box." }, {
          name: "avoid-column",
          desc: "Avoid a column break inside the generated box."
        }, { name: "avoid-page", desc: "Avoid a page break inside the generated box." }, { name: "avoid-region" }]
      }, {
        name: "-webkit-column-count",
        desc: "Describes the optimal number of columns into which the content of the element will be flowed.",
        browsers: "C,S3",
        restriction: "integer",
        values: [{
          name: "auto",
          desc: "Determines the number of columns by the 'column-width' property and the element width."
        }]
      }, {
        name: "-webkit-column-gap",
        desc: "Sets the gap between columns. If there is a column rule between columns, it will appear in the middle of the gap.",
        browsers: "C,S3",
        restriction: "length",
        values: [{ name: "normal", desc: "User agent specific and typically equivalent to 1em." }]
      }, {
        name: "-webkit-column-rule",
        desc: "This property is a shorthand for setting 'column-rule-width', 'column-rule-style', and 'column-rule-color' at the same place in the style sheet. Omitted values are set to their initial values.",
        browsers: "C,S3",
        restriction: "length, line-width, line-style, color"
      }, {
        name: "-webkit-column-rule-color",
        desc: "Sets the color of the column rule",
        browsers: "C,S3",
        restriction: "color"
      }, {
        name: "-webkit-column-rule-style",
        desc: "Sets the style of the rule between columns of an element.",
        browsers: "C,S3",
        restriction: "line-style"
      }, {
        name: "-webkit-column-rule-width",
        desc: "Sets the width of the rule between columns. Negative values are not allowed.",
        browsers: "C,S3",
        restriction: "length, line-width"
      }, {
        name: "-webkit-columns",
        desc: "A shorthand property which sets both 'column-width' and 'column-count'.",
        browsers: "C,S3",
        restriction: "length, integer",
        values: [{ name: "auto", desc: "The width depends on the values of other properties." }]
      }, {
        name: "-webkit-column-span",
        desc: "Describes the page/column break behavior after the generated box.",
        browsers: "C,S3",
        restriction: "enum",
        values: [{
          name: "all",
          desc: "The element spans across all columns. Content in the normal flow that appears before the element is automatically balanced across all columns before the element appear."
        }, { name: "none", desc: "The element does not span multiple columns." }]
      }, {
        name: "-webkit-column-width",
        desc: "This property describes the width of columns in multicol elements.",
        browsers: "C,S3",
        restriction: "length",
        values: [{ name: "auto", desc: "The width depends on the values of other properties." }]
      }, {
        name: "-webkit-filter",
        desc: "Processes an element’s rendering before it is displayed in the document, by applying one or more filter effects.",
        browsers: "C18,O15,S6",
        restriction: "enum, url",
        values: [{
          name: "none",
          desc: "No filter effects are applied."
        }, { name: "blur()" }, { name: "brightness()" }, { name: "contrast()" }, { name: "drop-shadow()" }, { name: "grayscale()" }, { name: "hue-rotate()" }, { name: "invert()" }, { name: "opacity()" }, { name: "saturate()" }, { name: "sepia()" }, {
          name: "url()",
          desc: "A filter reference to a <filter> element."
        }]
      }, {
        name: "-webkit-flow-from",
        desc: "Makes a block container a region and associates it with a named flow.",
        browsers: "S6.1",
        restriction: "identifier",
        values: [{ name: "none", desc: "The block container is not a CSS Region." }]
      }, {
        name: "-webkit-flow-into",
        desc: "Places an element or its contents into a named flow.",
        browsers: "S6.1",
        restriction: "identifier",
        values: [{
          name: "none",
          desc: "The element is not moved to a named flow and normal CSS processing takes place."
        }]
      }, {
        name: "-webkit-font-feature-settings",
        desc: "This property provides low-level control over OpenType font features. It is intended as a way of providing access to font features that are not widely used but are needed for a particular use case.",
        browsers: "C16",
        restriction: "string, integer",
        values: [{ name: "\"c2cs\"" }, { name: "\"dlig\"" }, { name: "\"kern\"" }, { name: "\"liga\"" }, { name: "\"lnum\"" }, { name: "\"onum\"" }, { name: "\"smcp\"" }, { name: "\"swsh\"" }, { name: "\"tnum\"" }, {
          name: "normal",
          desc: "No change in glyph substitution or positioning occurs."
        }, { name: "off" }, { name: "on" }]
      }, {
        name: "-webkit-hyphens",
        desc: "Controls whether hyphenation is allowed to create more break opportunities within a line of text.",
        browsers: "S5.1",
        restriction: "enum",
        values: [{
          name: "auto",
          desc: "Conditional hyphenation characters inside a word, if present, take priority over automatic resources when determining hyphenation points within the word."
        }, { name: "manual" }, {
          name: "none",
          desc: "Words are not broken at line breaks, even if characters inside the word suggest line break points."
        }]
      }, {
        name: "-webkit-line-break",
        desc: "Specifies line-breaking rules for CJK (Chinese, Japanese, and Korean) text.",
        browsers: "C,S3",
        values: [{ name: "after-white-space" }, { name: "normal" }]
      }, {
        name: "-webkit-margin-bottom-collapse",
        browsers: "C,S3",
        restriction: "enum",
        values: [{ name: "collapse" }, { name: "discard" }, { name: "separate" }]
      }, {
        name: "-webkit-margin-collapse",
        browsers: "C,S3",
        restriction: "enum",
        values: [{ name: "collapse" }, { name: "discard" }, { name: "separate" }]
      }, {
        name: "-webkit-margin-start",
        browsers: "C,S3",
        restriction: "percentage, length",
        values: [{ name: "auto" }]
      }, {
        name: "-webkit-margin-top-collapse",
        browsers: "C,S3",
        restriction: "enum",
        values: [{ name: "collapse" }, { name: "discard" }, { name: "separate" }]
      }, {
        name: "-webkit-mask-clip",
        desc: "Determines the mask painting area, which determines the area that is affected by the mask.",
        browsers: "C,O15,S4",
        restriction: "box",
        status: "n",
        syntax: "[ <box> | border | padding | content | text ]#"
      }, {
        name: "-webkit-mask-image",
        desc: "Sets the mask layer image of an element.",
        browsers: "C,O15,S4",
        restriction: "url, image, enum",
        values: [{ name: "none", desc: "Counts as a transparent black image layer." }, {
          name: "url()",
          desc: "Reference to a <mask element or to a CSS image."
        }],
        status: "n",
        syntax: "<mask-reference>#"
      }, {
        name: "-webkit-mask-origin",
        desc: "Specifies the mask positioning area.",
        browsers: "C,O15,S4",
        restriction: "box",
        status: "n",
        syntax: "[ <box> | border | padding | content ]#"
      }, {
        name: "-webkit-mask-repeat",
        desc: "Specifies how mask layer images are tiled after they have been sized and positioned.",
        browsers: "C,O15,S4",
        restriction: "repeat",
        status: "n",
        syntax: "<repeat-style>#"
      }, {
        name: "-webkit-mask-size",
        desc: "Specifies the size of the mask layer images.",
        browsers: "C,O15,S4",
        restriction: "length, percentage, enum",
        values: [{
          name: "auto",
          desc: "Resolved by using the image’s intrinsic ratio and the size of the other dimension, or failing that, using the image’s intrinsic size, or failing that, treating it as 100%."
        }, {
          name: "contain",
          desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the largest size such that both its width and its height can fit inside the background positioning area."
        }, {
          name: "cover",
          desc: "Scale the image, while preserving its intrinsic aspect ratio (if any), to the smallest size such that both its width and its height can completely cover the background positioning area."
        }],
        status: "n",
        syntax: "<bg-size>#"
      }, {
        name: "-webkit-nbsp-mode",
        desc: "Defines the behavior of nonbreaking spaces within text.",
        browsers: "C,S3",
        values: [{ name: "normal" }, { name: "space" }]
      }, {
        name: "-webkit-overflow-scrolling",
        desc: "Specifies whether to use native-style scrolling in an overflow:scroll element.",
        browsers: "C,S5",
        values: [{ name: "auto" }, { name: "touch" }],
        status: "n",
        syntax: "auto | touch"
      }, {
        name: "-webkit-padding-start",
        browsers: "C,S3",
        restriction: "percentage, length"
      }, {
        name: "-webkit-perspective",
        desc: "Applies the same transform as the perspective(<number>) transform function, except that it applies only to the positioned or transformed children of the element, not to the transform on the element itself.",
        browsers: "C,S4",
        restriction: "length",
        values: [{ name: "none", desc: "No perspective transform is applied." }]
      }, {
        name: "-webkit-perspective-origin",
        desc: "Establishes the origin for the perspective property. It effectively sets the X and Y position at which the viewer appears to be looking at the children of the element.",
        browsers: "C,S4",
        restriction: "position, percentage, length"
      }, {
        name: "-webkit-region-fragment",
        desc: "The 'region-fragment' property controls the behavior of the last region associated with a named flow.",
        browsers: "S7",
        restriction: "enum",
        values: [{ name: "auto", desc: "Content flows as it would in a regular content box." }, { name: "break" }]
      }, {
        name: "-webkit-tap-highlight-color",
        browsers: "E,C,S3.1",
        restriction: "color",
        status: "n",
        syntax: "<color>"
      }, {
        name: "-webkit-text-fill-color",
        browsers: "E12,FF49,S,C,O",
        restriction: "color",
        status: "n",
        syntax: "<color>"
      }, {
        name: "-webkit-text-size-adjust",
        desc: "Specifies a size adjustment for displaying text content in mobile browsers.",
        browsers: "E,C,S3",
        restriction: "percentage",
        values: [{
          name: "auto",
          desc: "Renderers must use the default size adjustment when displaying on a small device."
        }, { name: "none", desc: "Renderers must not do size adjustment when displaying on a small device." }]
      }, {
        name: "-webkit-text-stroke",
        browsers: "E15,FF49,S3.1,C4,O15",
        restriction: "length, line-width, color, percentage",
        status: "n",
        syntax: "<length> || <color>"
      }, {
        name: "-webkit-text-stroke-color",
        browsers: "E15,FF49,S,C,O",
        restriction: "color",
        status: "n",
        syntax: "<color>"
      }, {
        name: "-webkit-text-stroke-width",
        browsers: "E15,FF49,S,C,O",
        restriction: "length, line-width, percentage",
        status: "n",
        syntax: "<length>"
      }, {
        name: "-webkit-touch-callout",
        browsers: "S4",
        restriction: "enum",
        values: [{ name: "none" }],
        status: "n",
        syntax: "default | none"
      }, {
        name: "-webkit-transform",
        desc: "A two-dimensional transformation is applied to an element through the 'transform' property. This property contains a list of transform functions similar to those allowed by SVG.",
        browsers: "C,O12,S3.1",
        restriction: "enum",
        values: [{ name: "matrix()" }, { name: "matrix3d()" }, { name: "none" }, { name: "perspective()" }, { name: "rotate()" }, { name: "rotate3d()" }, { name: "rotateX('angle')" }, { name: "rotateY('angle')" }, { name: "rotateZ('angle')" }, { name: "scale()" }, { name: "scale3d()" }, { name: "scaleX()" }, { name: "scaleY()" }, { name: "scaleZ()" }, { name: "skew()" }, { name: "skewX()" }, { name: "skewY()" }, { name: "translate()" }, { name: "translate3d()" }, { name: "translateX()" }, { name: "translateY()" }, { name: "translateZ()" }]
      }, {
        name: "-webkit-transform-origin",
        desc: "Establishes the origin of transformation for an element.",
        browsers: "C,O15,S3.1",
        restriction: "position, length, percentage"
      }, {
        name: "-webkit-transform-origin-x",
        desc: "The x coordinate of the origin for transforms applied to an element with respect to its border box.",
        browsers: "C,S3.1",
        restriction: "length, percentage"
      }, {
        name: "-webkit-transform-origin-y",
        desc: "The y coordinate of the origin for transforms applied to an element with respect to its border box.",
        browsers: "C,S3.1",
        restriction: "length, percentage"
      }, {
        name: "-webkit-transform-origin-z",
        desc: "The z coordinate of the origin for transforms applied to an element with respect to its border box.",
        browsers: "C,S4",
        restriction: "length, percentage"
      }, {
        name: "-webkit-transform-style",
        desc: "Defines how nested elements are rendered in 3D space.",
        browsers: "C,S4",
        restriction: "enum",
        values: [{ name: "flat" }]
      }, {
        name: "-webkit-transition",
        desc: "Shorthand property combines four of the transition properties into a single property.",
        browsers: "C,O12,S5",
        restriction: "time, property, timing-function, enum",
        values: [{ name: "all", desc: "Every property that is able to undergo a transition will do so." }, {
          name: "none",
          desc: "No property will transition."
        }]
      }, {
        name: "-webkit-transition-delay",
        desc: "Defines when the transition will start. It allows a transition to begin execution some period of time from when it is applied.",
        browsers: "C,O12,S5",
        restriction: "time"
      }, {
        name: "-webkit-transition-duration",
        desc: "Specifies how long the transition from the old value to the new value should take.",
        browsers: "C,O12,S5",
        restriction: "time"
      }, {
        name: "-webkit-transition-property",
        desc: "Specifies the name of the CSS property to which the transition is applied.",
        browsers: "C,O12,S5",
        restriction: "property",
        values: [{ name: "all", desc: "Every property that is able to undergo a transition will do so." }, {
          name: "none",
          desc: "No property will transition."
        }]
      }, {
        name: "-webkit-transition-timing-function",
        desc: "Describes how the intermediate values used during a transition will be calculated.",
        browsers: "C,O12,S5",
        restriction: "timing-function"
      }, {
        name: "-webkit-user-drag",
        browsers: "S3",
        restriction: "enum",
        values: [{ name: "auto" }, { name: "element" }, { name: "none" }]
      }, {
        name: "-webkit-user-modify",
        desc: "Determines whether a user can edit the content of an element.",
        browsers: "C,S3",
        restriction: "enum",
        values: [{ name: "read-only" }, { name: "read-write" }, { name: "read-write-plaintext-only" }],
        status: "n",
        syntax: "read-only | read-write | read-write-plaintext-only"
      }, {
        name: "-webkit-user-select",
        desc: "Controls the appearance of selection.",
        browsers: "C,S3",
        restriction: "enum",
        values: [{ name: "auto" }, { name: "none" }, { name: "text" }]
      }, {
        name: "white-space",
        desc: "Shorthand property for the 'white-space-collapsing' and 'text-wrap' properties.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "normal",
          desc: "Sets 'white-space-collapsing' to 'collapse' and 'text-wrap' to 'normal'."
        }, {
          name: "nowrap",
          desc: "Sets 'white-space-collapsing' to 'collapse' and 'text-wrap' to 'none'."
        }, { name: "pre" }, { name: "pre-line" }, { name: "pre-wrap" }],
        syntax: "normal | pre | nowrap | pre-wrap | pre-line"
      }, {
        name: "widows",
        desc: "Specifies the minimum number of line boxes of a block container that must be left in a fragment after a break.",
        browsers: "E12,C25,IE8,O9.2",
        restriction: "integer",
        syntax: "<integer>"
      }, {
        name: "width",
        desc: "Specifies the width of the content area, padding area or border area (depending on 'box-sizing') of certain boxes.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "auto", desc: "The width depends on the values of other properties." }, {
          name: "fit-content",
          browsers: "C46,O33"
        }, {
          name: "max-content",
          desc: "Use the max-content inline size or max-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }, {
          name: "min-content",
          desc: "Use the min-content inline size or min-content block size, as appropriate to the writing mode.",
          browsers: "C46,O33"
        }],
        syntax: "<viewport-length>{1,2}"
      }, {
        name: "will-change",
        desc: "Provides a rendering hint to the user agent, stating what kinds of changes the author expects to perform on the element.",
        browsers: "FF36,S9.1,C36,O24",
        restriction: "enum, identifier",
        values: [{ name: "auto", desc: "Expresses no particular intent." }, {
          name: "contents",
          desc: "Indicates that the author expects to animate or change something about the element’s contents in the near future."
        }, { name: "scroll-position" }],
        syntax: "auto | <animateable-feature>#"
      }, {
        name: "word-break",
        desc: "Specifies line break opportunities for non-CJK scripts.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "break-all" }, {
          name: "keep-all",
          desc: "Block characters can no longer create implied break points."
        }, { name: "normal", desc: "Breaks non-CJK scripts according to their own rules." }],
        syntax: "normal | break-all | keep-all | break-word"
      }, {
        name: "word-spacing",
        desc: "Specifies additional spacing between “words”.",
        browsers: "all",
        restriction: "length, percentage",
        values: [{ name: "normal", desc: "No additional spacing is applied. Computes to zero." }],
        syntax: "normal | <length-percentage>"
      }, {
        name: "word-wrap",
        desc: "Specifies whether the UA may break within a word to prevent overflow when an otherwise-unbreakable string is too long to fit.",
        browsers: "all",
        restriction: "enum",
        values: [{
          name: "break-word",
          desc: "An otherwise unbreakable sequence of characters may be broken at an arbitrary point if there are no otherwise-acceptable break points in the line."
        }, { name: "normal", desc: "Lines may break only at allowed break points." }],
        syntax: "normal | break-word"
      }, {
        name: "writing-mode",
        desc: "This is a shorthand property for both 'direction' and 'block-progression'.",
        browsers: "all",
        restriction: "enum",
        values: [{ name: "horizontal-tb" }, { name: "sideways-lr", browsers: "FF43" }, {
          name: "sideways-rl",
          browsers: "FF43"
        }, { name: "vertical-lr" }, { name: "vertical-rl" }],
        syntax: "horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr"
      }, {
        name: "z-index",
        desc: "For a positioned box, the 'z-index' property specifies the stack level of the box in the current stacking context and whether the box establishes a local stacking context.",
        browsers: "all",
        restriction: "integer",
        values: [{
          name: "auto",
          desc: "The stack level of the generated box in the current stacking context is 0. The box does not establish a new stacking context unless it is the root element."
        }],
        syntax: "auto | <integer>"
      }, {
        name: "zoom",
        desc: "Non-standard. Specifies the magnification scale of the object. See 'transform: scale()' for a standards-based alternative.",
        browsers: "E,C,IE6,O15,S4",
        restriction: "enum, integer, number, percentage",
        values: [{ name: "normal" }],
        syntax: "auto | <number> | <percentage>"
      }, {
        name: "-ms-ime-align",
        desc: "Aligns the Input Method Editor (IME) candidate window box relative to the element on which the IME composition is active.",
        restriction: "none",
        status: "n",
        syntax: "auto | after"
      }, {
        name: "-moz-binding",
        desc: "The -moz-binding CSS property is used by Mozilla-based applications to attach an XBL binding to a DOM element.",
        restriction: "none",
        status: "n",
        syntax: "<url> | none"
      }, {
        name: "-moz-context-properties",
        desc: "If you reference an SVG image in a webpage (such as with the <img> element or as a background image), the SVG image can coordinate with the embedding element (its context) to have the image adopt property values set on the embedding element. To do this the embedding element needs to list the properties that are to be made available to the image by listing them as values of the -moz-context-properties property, and the image needs to opt in to using those properties by using values such as the context-fill value.\n\nThis feature is available since Firefox 55, but is only currently supported with SVG images loaded via chrome:// or resource:// URLs. To experiment with the feature in SVG on the Web it is necessary to set the svg.context-properties.content.enabled pref to true.",
        restriction: "none",
        status: "n",
        syntax: "none | [ fill | fill-opacity | stroke | stroke-opacity ]#",
        browsers: "FF55"
      }, {
        name: "-moz-float-edge",
        desc: "The non-standard -moz-float-edge CSS property specifies whether the height and width properties of the element include the margin, border, or padding thickness.",
        restriction: "none",
        status: "n",
        syntax: "border-box | content-box | margin-box | padding-box"
      }, {
        name: "-moz-force-broken-image-icon",
        desc: "The -moz-force-broken-image-icon extended CSS property can be used to force the broken image icon to be shown even when a broken image has an alt attribute.",
        restriction: "none",
        status: "n",
        syntax: "<integer>"
      }, {
        name: "-moz-image-region",
        desc: "For certain XUL elements and pseudo-elements that use an image from the list-style-image property, this property specifies a region of the image that is used in place of the whole image. This allows elements to use different pieces of the same image to improve performance.",
        restriction: "none",
        status: "n",
        syntax: "<shape> | auto"
      }, {
        name: "-moz-orient",
        desc: "The -moz-orient CSS property specifies the orientation of the element to which it's applied.",
        restriction: "none",
        status: "n",
        syntax: "inline | block | horizontal | vertical"
      }, {
        name: "-moz-outline-radius",
        desc: "In Mozilla applications like Firefox, the -moz-outline-radius CSS property can be used to give an element's outline rounded corners.",
        restriction: "none",
        status: "n",
        syntax: "<outline-radius>{1,4} [ / <outline-radius>{1,4} ]?"
      }, {
        name: "-moz-outline-radius-bottomleft",
        desc: "In Mozilla applications, the -moz-outline-radius-bottomleft CSS property can be used to round the bottom-left corner of an element's outline.",
        restriction: "none",
        status: "n",
        syntax: "<outline-radius>"
      }, {
        name: "-moz-outline-radius-bottomright",
        desc: "In Mozilla applications, the -moz-outline-radius-bottomright CSS property can be used to round the bottom-right corner of an element's outline.",
        restriction: "none",
        status: "n",
        syntax: "<outline-radius>"
      }, {
        name: "-moz-outline-radius-topleft",
        desc: "In Mozilla applications, the -moz-outline-radius-topleft CSS property can be used to round the top-left corner of an element's outline.",
        restriction: "none",
        status: "n",
        syntax: "<outline-radius>"
      }, {
        name: "-moz-outline-radius-topright",
        desc: "In Mozilla applications, the -moz-outline-radius-topright CSS property can be used to round the top-right corner of an element's outline.",
        restriction: "none",
        status: "n",
        syntax: "<outline-radius>"
      }, {
        name: "-moz-stack-sizing",
        desc: "-moz-stack-sizing is an extended CSS property. Normally, a stack will change its size so that all of its child elements are completely visible. For example, moving a child of the stack far to the right will widen the stack so the child remains visible.",
        restriction: "none",
        status: "n",
        syntax: "ignore | stretch-to-fit"
      }, {
        name: "-moz-text-blink",
        desc: "The -moz-text-blink non-standard Mozilla CSS extension specifies the blink mode.",
        restriction: "none",
        status: "n",
        syntax: "none | blink"
      }, {
        name: "-moz-user-input",
        desc: "In Mozilla applications, -moz-user-input determines if an element will accept user input.",
        restriction: "none",
        status: "n",
        syntax: "auto | none | enabled | disabled"
      }, {
        name: "-moz-user-modify",
        desc: "The -moz-user-modify property has no effect. It was originally planned to determine whether or not the content of an element can be edited by a user.",
        restriction: "none",
        status: "n",
        syntax: "read-only | read-write | write-only"
      }, {
        name: "-moz-window-dragging",
        desc: "The -moz-window-dragging CSS property specifies whether a window is draggable or not. It only works in Chrome code, and only on Mac OS X.",
        restriction: "none",
        status: "n",
        syntax: "drag | no-drag"
      }, {
        name: "-moz-window-shadow",
        desc: "The -moz-window-shadow CSS property specifies whether a window will have a shadow. It only works on Mac OS X.",
        restriction: "none",
        status: "n",
        syntax: "default | menu | tooltip | sheet | none"
      }, {
        name: "-webkit-border-before",
        desc: "The -webkit-border-before CSS property is a shorthand property for setting the individual logical block start border property values in a single place in the style sheet.",
        restriction: "none",
        status: "n",
        syntax: "<'border-width'> || <'border-style'> || <'color'>"
      }, {
        name: "-webkit-border-before-color",
        desc: "The -webkit-border-before-color CSS property sets the color of the individual logical block start border in a single place in the style sheet.",
        restriction: "none",
        status: "n",
        syntax: "<'color'>"
      }, {
        name: "-webkit-border-before-style",
        desc: "The -webkit-border-before-style CSS property sets the style of the individual logical block start border in a single place in the style sheet.",
        restriction: "none",
        status: "n",
        syntax: "<'border-style'>"
      }, {
        name: "-webkit-border-before-width",
        desc: "The -webkit-border-before-width CSS property sets the width of the individual logical block start border in a single place in the style sheet.",
        restriction: "none",
        status: "n",
        syntax: "<'border-width'>"
      }, {
        name: "-webkit-mask",
        desc: "The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.",
        restriction: "none",
        status: "n",
        syntax: "[ <mask-reference> || <position> [ / <bg-size> ]? || <repeat-style> || [ <box> | border | padding | content | text ] || [ <box> | border | padding | content ] ]#"
      }, {
        name: "-webkit-mask-attachment",
        desc: "If a -webkit-mask-image is specified, -webkit-mask-attachment determines whether the mask image's position is fixed within the viewport, or scrolls along with its containing block.",
        restriction: "none",
        status: "n",
        syntax: "<attachment>#",
        browsers: "S4,C"
      }, {
        name: "-webkit-mask-composite",
        desc: "The -webkit-mask-composite property specifies the manner in which multiple mask images applied to the same element are composited with one another. Mask images are composited in the opposite order that they are declared with the -webkit-mask-image property.",
        restriction: "none",
        status: "n",
        syntax: "<composite-style>#"
      }, {
        name: "-webkit-mask-position",
        desc: "The mask-position CSS property sets the initial position, relative to the mask position layer defined by mask-origin, for each defined mask image.",
        restriction: "none",
        status: "n",
        syntax: "<position>#"
      }, {
        name: "-webkit-mask-position-x",
        desc: "The -webkit-mask-position-x CSS property sets the initial horizontal position of a mask image.",
        restriction: "none",
        status: "n",
        syntax: "[ <length-percentage> | left | center | right ]#"
      }, {
        name: "-webkit-mask-position-y",
        desc: "The -webkit-mask-position-y CSS property sets the initial vertical position of a mask image.",
        restriction: "none",
        status: "n",
        syntax: "[ <length-percentage> | top | center | bottom ]#",
        browsers: "S4,C1"
      }, {
        name: "-webkit-mask-repeat-x",
        desc: "The -webkit-mask-repeat-x property specifies whether and how a mask image is repeated (tiled) horizontally.",
        restriction: "none",
        status: "n",
        syntax: "repeat | no-repeat | space | round"
      }, {
        name: "-webkit-mask-repeat-y",
        desc: "The -webkit-mask-repeat-y property specifies whether and how a mask image is repeated (tiled) vertically.",
        restriction: "none",
        status: "n",
        syntax: "repeat | no-repeat | space | round"
      }, {
        name: "appearance",
        desc: "Changes the appearance of buttons and other controls to resemble native controls.",
        restriction: "none",
        status: "e",
        syntax: "auto | none",
        browsers: "E12,FF1,S3,C1,O15"
      }, {
        name: "azimuth",
        desc: "In combination with elevation, the azimuth CSS property enables different audio sources to be positioned spatially for aural presentation. This is important in that it provides a natural way to tell several voices apart, as each can be positioned to originate at a different location on the sound stage. Stereo output produce a lateral sound stage, while binaural headphones and multi-speaker setups allow for a fully three-dimensional stage.",
        restriction: "none",
        status: "o",
        syntax: "<angle> | [ [ left-side | far-left | left | center-left | center | center-right | right | far-right | right-side ] || behind ] | leftwards | rightwards"
      }, {
        name: "backdrop-filter",
        desc: "The backdrop-filter CSS property lets you apply graphical effects such as blurring or color shifting to the area behind an element. Because it applies to everything behind the element, to see the effect you must make the element or its background at least partially transparent.",
        restriction: "none",
        status: "e",
        syntax: "none | <filter-function-list>",
        browsers: "E17,S9,C47"
      }, {
        name: "block-overflow",
        desc: "",
        restriction: "none",
        status: "e",
        syntax: "clip | ellipsis | <string>"
      }, {
        name: "box-align",
        desc: "The box-align CSS property specifies how an element aligns its contents across its layout in a perpendicular direction. The effect of the property is only visible if there is extra space in the box.",
        restriction: "none",
        status: "n",
        syntax: "start | center | end | baseline | stretch"
      }, {
        name: "box-direction",
        desc: "The box-direction CSS property specifies whether a box lays out its contents normally (from the top or left edge), or in reverse (from the bottom or right edge).",
        restriction: "none",
        status: "n",
        syntax: "normal | reverse | inherit",
        browsers: "E12,FF,S3,C,O"
      }, {
        name: "box-flex",
        desc: "The -moz-box-flex and -webkit-box-flex CSS properties specify how a -moz-box or -webkit-box grows to fill the box that contains it, in the direction of the containing box's layout.",
        restriction: "none",
        status: "n",
        syntax: "<number>",
        browsers: "E12,FF,S3,C,O"
      }, {
        name: "box-flex-group",
        desc: "The box-flex-group CSS property assigns the flexbox's child elements to a flex group.",
        restriction: "none",
        status: "n",
        syntax: "<integer>"
      }, {
        name: "box-lines",
        desc: "The box-lines CSS property determines whether the box may have a single or multiple lines (rows for horizontally oriented boxes, columns for vertically oriented boxes).",
        restriction: "none",
        status: "n",
        syntax: "single | multiple"
      }, {
        name: "box-ordinal-group",
        desc: "The box-ordinal-group CSS property assigns the flexbox's child elements to an ordinal group.",
        restriction: "none",
        status: "n",
        syntax: "<integer>"
      }, {
        name: "box-orient",
        desc: "The box-orient CSS property specifies whether an element lays out its contents horizontally or vertically.",
        restriction: "none",
        status: "n",
        syntax: "horizontal | vertical | inline-axis | block-axis | inherit",
        browsers: "E12,FF,S3,C,O"
      }, {
        name: "box-pack",
        desc: "The -moz-box-pack and -webkit-box-pack CSS properties specify how a -moz-box or -webkit-box packs its contents in the direction of its layout. The effect of this is only visible if there is extra space in the box.",
        restriction: "none",
        status: "n",
        syntax: "start | center | end | justify",
        browsers: "E12,FF,S3,C,O"
      }, {
        name: "color-adjust",
        desc: "The color-adjust property is a non-standard CSS extension that can be used to force printing of background colors and images in browsers based on the WebKit engine.",
        restriction: "none",
        syntax: "economy | exact"
      }, {
        name: "font-optical-sizing",
        desc: "",
        restriction: "none",
        syntax: "auto | none",
        browsers: "FF61"
      }, {
        name: "font-variation-settings",
        desc: "The font-variation-settings CSS property provides low-level control over OpenType or TrueType font variations, by specifying the four letter axis names of the features you want to vary, along with their variation values.",
        restriction: "none",
        syntax: "normal | [ <string> <number> ]#",
        browsers: "FF61,S11,C62,O49"
      }, {
        name: "gap",
        desc: "The gap CSS property is a shorthand property for row-gap and column-gap specifying the gutters between grid rows and columns.",
        restriction: "none",
        syntax: "<'row-gap'> <'column-gap'>?",
        browsers: "E16,FF61,S10.1,C66,O53"
      }, {
        name: "hanging-punctuation",
        desc: "The hanging-punctuation CSS property specifies whether a punctuation mark should hang at the start or end of a line of text. Hanging punctuation may be placed outside the line box.",
        restriction: "none",
        syntax: "none | [ first || [ force-end | allow-end ] || last ]"
      }, {
        name: "image-resolution",
        desc: "The image-resolution property specifies the intrinsic resolution of all raster images used in or on the element. It affects both content images (e.g. replaced elements and generated content) and decorative images (such as background-image). The intrinsic resolution of an image is used to determine the image’s intrinsic dimensions.",
        restriction: "none",
        status: "e",
        syntax: "[ from-image || <resolution> ] && snap?"
      }, {
        name: "initial-letter",
        desc: "The initial-letter CSS property specifies styling for dropped, raised, and sunken initial letters.",
        restriction: "none",
        status: "e",
        syntax: "normal | [ <number> <integer>? ]",
        browsers: "S9"
      }, {
        name: "initial-letter-align",
        desc: "The initial-letter-align CSS property specifies the alignment of initial letters within a paragraph.",
        restriction: "none",
        status: "e",
        syntax: "[ auto | alphabetic | hanging | ideographic ]"
      }, {
        name: "line-clamp",
        desc: "",
        restriction: "none",
        status: "e",
        syntax: "none | <integer>"
      }, {
        name: "line-height-step",
        desc: "The line-height-step CSS property defines the step units for line box heights. When the step unit is positive, line box heights are rounded up to the closest multiple of the unit. Negative values are invalid.",
        restriction: "none",
        status: "e",
        syntax: "<length>"
      }, {
        name: "mask",
        desc: "The mask CSS property alters the visibility of an element by either partially or fully hiding it. This is accomplished by either masking or clipping the image at specific points.",
        restriction: "none",
        syntax: "<mask-layer>#",
        browsers: "E12,FF,S4,C1,O"
      }, {
        name: "mask-border",
        desc: "The mask-border CSS property lets you create a mask along the edge of an element's border.\n\nThis property is a shorthand for mask-border-source, mask-border-slice, mask-border-width, mask-border-outset, mask-border-repeat, and mask-border-mode. As with all shorthand properties, any omitted sub-values will be set to their initial value.",
        restriction: "none",
        status: "e",
        syntax: "<'mask-border-source'> || <'mask-border-slice'> [ / <'mask-border-width'>? [ / <'mask-border-outset'> ]? ]? || <'mask-border-repeat'> || <'mask-border-mode'>"
      }, {
        name: "mask-border-mode",
        desc: "The mask-border-mode CSS property specifies the blending mode used in a mask border.",
        restriction: "none",
        status: "e",
        syntax: "luminance | alpha"
      }, {
        name: "mask-border-outset",
        desc: "The mask-border-outset CSS property specifies the distance by which an element's mask border is set out from its border box.",
        restriction: "none",
        status: "e",
        syntax: "[ <length> | <number> ]{1,4}"
      }, {
        name: "mask-border-repeat",
        desc: "The mask-border-repeat CSS property defines how the edge regions of a source image are adjusted to fit the dimensions of an element's mask border.",
        restriction: "none",
        status: "e",
        syntax: "[ stretch | repeat | round | space ]{1,2}"
      }, {
        name: "mask-border-slice",
        desc: "The mask-border-slice CSS property divides the image specified by mask-border-source into regions. These regions are used to form the components of an element's mask border.",
        restriction: "none",
        status: "e",
        syntax: "<number-percentage>{1,4} fill?"
      }, {
        name: "mask-border-source",
        desc: "The mask-border-source CSS property specifies the source image used to create an element's mask border.\n\nThe mask-border-slice property is used to divide the source image into regions, which are then dynamically applied to the final mask border.",
        restriction: "none",
        status: "e",
        syntax: "none | <image>"
      }, {
        name: "mask-border-width",
        desc: "The mask-border-width CSS property specifies the width of an element's mask border.",
        restriction: "none",
        status: "e",
        syntax: "[ <length-percentage> | <number> | auto ]{1,4}"
      }, {
        name: "mask-clip",
        desc: "The mask-clip CSS property determines the area, which is affected by a mask. The painted content of an element must be restricted to this area.",
        restriction: "none",
        syntax: "[ <geometry-box> | no-clip ]#",
        browsers: "FF53,S,C,O"
      }, {
        name: "mask-composite",
        desc: "The mask-composite CSS property represents a compositing operation used on the current mask layer with the mask layers below it.",
        restriction: "none",
        syntax: "<compositing-operator>#",
        browsers: "FF53"
      }, { name: "max-lines", desc: "", restriction: "none", status: "e", syntax: "none | <integer>" }, {
        name: "offset",
        desc: "The offset CSS property is a shorthand property for animating an element along a defined path.",
        restriction: "none",
        status: "e",
        syntax: "[ <'offset-position'>? [ <'offset-path'> [ <'offset-distance'> || <'offset-rotate'> ]? ]? ]! [ / <'offset-anchor'> ]?",
        browsers: "C55"
      }, {
        name: "offset-anchor",
        desc: "Defines an anchor point of the box positioned along the path. The anchor point specifies the point of the box which is to be considered as the point that is moved along the path.",
        restriction: "none",
        status: "e",
        syntax: "auto | <position>"
      }, {
        name: "offset-distance",
        desc: "The offset-distance CSS property specifies a position along an offset-path.",
        restriction: "none",
        status: "e",
        syntax: "<length-percentage>",
        browsers: "C55"
      }, {
        name: "offset-path",
        desc: "The offset-path CSS property specifies the offset path where the element gets positioned. The exact element’s position on the offset path is determined by the offset-distance property. An offset path is either a specified path with one or multiple sub-paths or the geometry of a not-styled basic shape. Each shape or path must define an initial position for the computed value of \"0\" for offset-distance and an initial direction which specifies the rotation of the object to the initial position.\n\nIn this specification, a direction (or rotation) of 0 degrees is equivalent to the direction of the positive x-axis in the object’s local coordinate system. In other words, a rotation of 0 degree points to the right side of the UA if the object and its ancestors have no transformation applied.",
        restriction: "none",
        status: "e",
        syntax: "none | ray( [ <angle> && <size>? && contain? ] ) | <path()> | <url> | [ <basic-shape> || <geometry-box> ]",
        browsers: "C55"
      }, {
        name: "offset-position",
        desc: "Specifies the initial position of the offset path. If position is specified with static, offset-position would be ignored.",
        restriction: "none",
        status: "e",
        syntax: "auto | <position>"
      }, {
        name: "offset-rotate",
        desc: "The offset-rotate CSS property defines the direction of the element while positioning along the offset path.",
        restriction: "none",
        status: "e",
        syntax: "[ auto | reverse ] || <angle>",
        browsers: "C56"
      }, {
        name: "overflow-anchor",
        desc: "",
        restriction: "none",
        status: "e",
        syntax: "auto | none"
      }, {
        name: "overflow-block",
        desc: "",
        restriction: "none",
        status: "e",
        syntax: "<'overflow'>"
      }, {
        name: "overflow-clip-box",
        desc: "The overflow-clip-box CSS property specifies relative to which box the clipping happens when there is an overflow. It is short hand for the overflow-clip-box-inline and overflow-clip-box-block properties.",
        restriction: "none",
        status: "n",
        syntax: "padding-box | content-box"
      }, {
        name: "overflow-inline",
        desc: "",
        restriction: "none",
        status: "e",
        syntax: "<'overflow'>"
      }, {
        name: "overscroll-behavior",
        desc: "The overscroll-behavior CSS property is shorthand for the overscroll-behavior-x and overscroll-behavior-y properties, which allow you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached.",
        restriction: "none",
        status: "n",
        syntax: "[ contain | none | auto ]{1,2}",
        browsers: "FF59,C63,O50"
      }, {
        name: "overscroll-behavior-x",
        desc: "The overscroll-behavior-x CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the x axis direction.",
        restriction: "none",
        status: "n",
        syntax: "contain | none | auto",
        browsers: "FF59,C63,O50"
      }, {
        name: "overscroll-behavior-y",
        desc: "The overscroll-behavior-y CSS property is allows you to control the browser's scroll overflow behavior — what happens when the boundary of a scrolling area is reached — in the y axis direction.",
        restriction: "none",
        status: "n",
        syntax: "contain | none | auto",
        browsers: "FF59,C63,O50"
      }, {
        name: "place-content",
        desc: "The place-content CSS shorthand property sets both the align-content and justify-content properties.",
        restriction: "none",
        syntax: "<'align-content'> <'justify-content'>?",
        browsers: "FF,C59,O"
      }, {
        name: "rotate",
        desc: "The rotate CSS property allows you to specify rotation transforms individually and independantly of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.",
        restriction: "none",
        syntax: "none | [ x | y | z | <number>{3} ]? && <angle>",
        browsers: "FF60,C"
      }, {
        name: "row-gap",
        desc: "The row-gap CSS property specifies the gutter between grid rows.",
        restriction: "none",
        syntax: "normal | <length-percentage>",
        browsers: "E16,FF61,S10.1,C66,O53"
      }, {
        name: "ruby-merge",
        desc: "This property controls how ruby annotation boxes should be rendered when there are more than one in a ruby container box: whether each pair should be kept separate, the annotations should be collapsed and rendered as a group, or the separation should be determined based on the space available.",
        restriction: "none",
        status: "e",
        syntax: "separate | collapse | auto"
      }, {
        name: "scale",
        desc: "The scale CSS property allows you to specify scale transforms individually and independantly of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.",
        restriction: "none",
        syntax: "none | <number>{1,3}",
        browsers: "FF60,C"
      }, {
        name: "scroll-snap-type-x",
        desc: "The scroll-snap-type-x CSS property defines how strictly snap points are enforced on the horizontal axis of the scroll container in case there is one.\n\nSpecifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.",
        restriction: "none",
        status: "n",
        syntax: "none | mandatory | proximity",
        browsers: "FF39,S9"
      }, {
        name: "scroll-snap-type-y",
        desc: "The scroll-snap-type-y CSS property defines how strictly snap points are enforced on the vertical axis of the scroll container in case there is one.\n\nSpecifying any precise animations or physics used to enforce those snap points is not covered by this property but instead left up to the user agent.",
        restriction: "none",
        status: "n",
        syntax: "none | mandatory | proximity",
        browsers: "FF39"
      }, {
        name: "text-combine-upright",
        desc: "The text-combine-upright CSS property specifies the combination of multiple characters into the space of a single character. If the combined text is wider than 1em, the user agent must fit the contents within 1em. The resulting composition is treated as a single upright glyph for layout and decoration. This property only has an effect in vertical writing modes.\n\nThis is used to produce an effect that is known as tate-chū-yoko (縦中横) in Japanese, or as 直書橫向 in Chinese.",
        restriction: "none",
        syntax: "none | all | [ digits <integer>? ]",
        browsers: "all"
      }, {
        name: "text-decoration-skip",
        desc: "The text-decoration-skip CSS property specifies what parts of the element’s content any text decoration affecting the element must skip over. It controls all text decoration lines drawn by the element and also any text decoration lines drawn by its ancestors.",
        restriction: "none",
        status: "e",
        syntax: "none | [ objects || [ spaces | [ leading-spaces || trailing-spaces ] ] || edges || box-decoration ]",
        browsers: "S8,C57,O44"
      }, {
        name: "text-decoration-skip-ink",
        desc: "The text-decoration-skip-ink CSS property specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.",
        restriction: "none",
        status: "e",
        syntax: "auto | none",
        browsers: "C64,O50"
      }, {
        name: "text-emphasis",
        desc: "The text-emphasis CSS property is a shorthand property for setting text-emphasis-style and text-emphasis-color in one declaration. This property will apply the specified emphasis mark to each character of the element's text, except separator characters, like spaces,  and control characters.",
        restriction: "none",
        syntax: "<'text-emphasis-style'> || <'text-emphasis-color'>",
        browsers: "FF46,S,C25,O15"
      }, {
        name: "text-emphasis-color",
        desc: "The text-emphasis-color CSS property defines the color used to draw emphasis marks on text being rendered in the HTML document. This value can also be set and reset using the text-emphasis shorthand.",
        restriction: "none",
        syntax: "<color>",
        browsers: "FF46,S,C25,O15"
      }, {
        name: "text-emphasis-position",
        desc: "The text-emphasis-position CSS property describes where emphasis marks are drawn at. The effect of emphasis marks on the line height is the same as for ruby text: if there isn't enough place, the line height is increased.",
        restriction: "none",
        syntax: "[ over | under ] && [ right | left ]",
        browsers: "FF46,S,C,O"
      }, {
        name: "text-emphasis-style",
        desc: "The text-emphasis-style CSS property defines the type of emphasis used. It can also be set, and reset, using the text-emphasis shorthand.",
        restriction: "none",
        syntax: "none | [ [ filled | open ] || [ dot | circle | double-circle | triangle | sesame ] ] | <string>",
        browsers: "FF46,S,C25,O15"
      }, {
        name: "text-size-adjust",
        desc: "The text-size-adjust CSS property controls the text inflation algorithm used on some smartphones and tablets. Other browsers will ignore this property.",
        restriction: "none",
        status: "e",
        syntax: "none | auto | <percentage>",
        browsers: "E12,C54,O42"
      }, {
        name: "transform-box",
        desc: "The transform-box CSS property defines the layout box to which the transform and transform-origin properties relate.",
        restriction: "none",
        syntax: "border-box | fill-box | view-box",
        browsers: "FF55,C64,O51"
      }, {
        name: "translate",
        desc: "The translate CSS property allows you to specify translation transforms individually and independantly of the transform property. This maps better to typical user interface usage, and saves having to remember the exact order of transform functions to specify in the transform value.",
        restriction: "none",
        syntax: "none | <length-percentage> [ <length-percentage> <length>? ]?",
        browsers: "FF60,C"
      }, {
        name: "speak-as",
        desc: "The speak-as descriptor specifies how a counter symbol constructed with a given @counter-style will be represented in the spoken form. For example, an author can specify a counter symbol to be either spoken as its numerical value or just represented with an audio cue.",
        restriction: "none",
        syntax: "auto | bullets | numbers | words | spell-out | <counter-style-name>"
      }, {
        name: "font-display",
        desc: "The font-display descriptor determines how a font face is displayed based on whether and when it is downloaded and ready to use.",
        restriction: "none",
        status: "e",
        syntax: "[ auto | block | swap | fallback | optional ]"
      }, {
        name: "bleed",
        desc: "The bleed CSS at-rule descriptor, used with the @page at-rule, specifies the extent of the page bleed area outside the page box. This property only has effect if crop marks are enabled using the marks property.",
        restriction: "none",
        status: "e",
        syntax: "auto | <length>"
      }, {
        name: "marks",
        desc: "The marks CSS at-rule descriptor, used with the @page at-rule, adds crop and/or cross marks to the presentation of the document. Crop marks indicate where the page should be cut. Cross marks are used to align sheets.",
        restriction: "none",
        status: "e",
        syntax: "none | [ crop || cross ]"
      }, {
        name: "max-zoom",
        desc: "The max-zoom CSS descriptor sets the maximum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom in any further than this, whether automatically or at the user's request.\n\nA zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out.",
        restriction: "none",
        syntax: "auto | <number> | <percentage>"
      }, {
        name: "min-zoom",
        desc: "The min-zoom CSS descriptor sets the minimum zoom factor of a document defined by the @viewport at-rule. The browser will not zoom out any further than this, whether automatically or at the user's request.\n\nA zoom factor of 1.0 or 100% corresponds to no zooming. Larger values are zoomed in. Smaller values are zoomed out.",
        restriction: "none",
        syntax: "auto | <number> | <percentage>"
      }, {
        name: "orientation",
        desc: "The orientation CSS @media media feature can be used to apply styles based on the orientation of the viewport (or the page box, for paged media).",
        restriction: "none",
        syntax: "auto | portrait | landscape"
      }, {
        name: "user-zoom",
        desc: "The user-zoom CSS descriptor controls whether or not the user can change the zoom factor of a document defined by @viewport.",
        restriction: "none",
        syntax: "zoom | fixed"
      }]
    }, Gn = {
      100: "Thin",
      200: "Extra Light (Ultra Light)",
      300: "Light",
      400: "Normal",
      500: "Medium",
      600: "Semi Bold (Demi Bold)",
      700: "Bold",
      800: "Extra Bold (Ultra Bold)",
      900: "Black (Heavy)",
      "self-end": "The item is packed flush to the edge of the alignment container of the end side of the item, in the appropriate axis.",
      "self-start": "The item is packed flush to the edge of the alignment container of the start side of the item, in the appropriate axis..",
      alternate: "The animation cycle iterations that are odd counts are played in the normal direction, and the animation cycle iterations that are even counts are played in a reverse direction.",
      "alternate-reverse": "The animation cycle iterations that are odd counts are played in the reverse direction, and the animation cycle iterations that are even counts are played in a normal direction.",
      backwards: "The beginning property value (as defined in the first @keyframes at-rule) is applied before the animation is displayed, during the period defined by 'animation-delay'.",
      forwards: "The final property value (as defined in the last @keyframes at-rule) is maintained after the animation completes.",
      paused: "A running animation will be paused.",
      running: "Resume playback of a paused animation.",
      multiply: "The source color is multiplied by the destination color and replaces the destination.",
      screen: "Multiplies the complements of the backdrop and source color values, then complements the result.",
      overlay: "Multiplies or screens the colors, depending on the backdrop color value.",
      darken: "Selects the darker of the backdrop and source colors.",
      lighten: "Selects the lighter of the backdrop and source colors.",
      "color-dodge": "Brightens the backdrop color to reflect the source color.",
      "color-burn": "Darkens the backdrop color to reflect the source color.",
      "hard-light": "Multiplies or screens the colors, depending on the source color value.",
      "soft-light": "Darkens or lightens the colors, depending on the source color value.",
      difference: "Subtracts the darker of the two constituent colors from the lighter color..",
      exclusion: "Produces an effect similar to that of the Difference mode but lower in contrast.",
      hue: "Creates a color with the hue of the source color and the saturation and luminosity of the backdrop color.",
      saturation: "Creates a color with the saturation of the source color and the hue and luminosity of the backdrop color.",
      color: "Creates a color with the hue and saturation of the source color and the luminosity of the backdrop color.",
      luminosity: "Creates a color with the luminosity of the source color and the hue and saturation of the backdrop color.",
      repeat: "The image is tiled (repeated) to fill the area.",
      clone: "Each box is independently wrapped with the border and padding.",
      slice: "The effect is as though the element were rendered with no breaks present, and then sliced by the breaks afterward.",
      inset: "Changes the drop shadow from an outer shadow (one that shadows the box onto the canvas, as if it were lifted above the canvas) to an inner shadow (one that shadows the canvas onto the box, as if the box were cut out of the canvas and shifted behind it).",
      "border-box": "The specified width and height (and respective min/max properties) on this element determine the border box of the element.",
      "content-box": "Behavior of width and height as specified by CSS2.1. The specified width and height (and respective min/max properties) apply to the width and height respectively of the content box of the element.",
      "rect()": "Specifies offsets from the edges of the border box.",
      evenodd: "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and counting the number of path segments from the given shape that the ray crosses.",
      nonzero: "Determines the ‘insideness’ of a point on the canvas by drawing a ray from that point to infinity in any direction and then examining the places where a segment of the shape crosses the ray.",
      linearRGB: "Color operations should occur in the linearized RGB color space.",
      sRGB: "Color operations should occur in the sRGB color space.",
      balance: "Balance content equally between columns, if possible.",
      size: "For properties that can have effects on more than just an element and its descendants, those effects don't escape the containing element.",
      layout: "Turns on layout containment for the element.",
      paint: "Turns on paint containment for the element.",
      "attr()": "The attr(n) function returns as a string the value of attribute n for the subject of the selector.",
      "counter(name)": "Counters are denoted by identifiers (see the 'counter-increment' and 'counter-reset' properties).",
      alias: "Indicates an alias of/shortcut to something is to be created. Often rendered as an arrow with a small curved arrow next to it.",
      "all-scroll": "Indicates that the something can be scrolled in any direction. Often rendered as arrows pointing up, down, left, and right with a dot in the middle.",
      cell: "Indicates that a cell or set of cells may be selected. Often rendered as a thick plus-sign with a dot in the middle.",
      "col-resize": "Indicates that the item/column can be resized horizontally. Often rendered as arrows pointing left and right with a vertical bar separating them.",
      "context-menu": "A context menu is available for the object under the cursor. Often rendered as an arrow with a small menu-like graphic next to it.",
      copy: "Indicates something is to be copied. Often rendered as an arrow with a small plus sign next to it.",
      crosshair: "A simple crosshair (e.g., short line segments resembling a '+' sign). Often used to indicate a two dimensional bitmap selection mode.",
      "e-resize": "Indicates that east edge is to be moved.",
      "ew-resize": "Indicates a bidirectional east-west resize cursor.",
      grab: "Indicates that something can be grabbed.",
      grabbing: "Indicates that something is being grabbed.",
      help: "Help is available for the object under the cursor. Often rendered as a question mark or a balloon.",
      move: "Indicates something is to be moved.",
      "-moz-grab": "Indicates that something can be grabbed.",
      "-moz-grabbing": "Indicates that something is being grabbed.",
      "-moz-zoom-in": "Indicates that something can be zoomed (magnified) in.",
      "-moz-zoom-out": "Indicates that something can be zoomed (magnified) out.",
      "ne-resize": "Indicates that movement starts from north-east corner.",
      "nesw-resize": "Indicates a bidirectional north-east/south-west cursor.",
      "no-drop": "Indicates that the dragged item cannot be dropped at the current cursor location. Often rendered as a hand or pointer with a small circle with a line through it.",
      "not-allowed": "Indicates that the requested action will not be carried out. Often rendered as a circle with a line through it.",
      "n-resize": "Indicates that north edge is to be moved.",
      "ns-resize": "Indicates a bidirectional north-south cursor.",
      "nw-resize": "Indicates that movement starts from north-west corner.",
      "nwse-resize": "Indicates a bidirectional north-west/south-east cursor.",
      pointer: "The cursor is a pointer that indicates a link.",
      progress: "A progress indicator. The program is performing some processing, but is different from 'wait' in that the user may still interact with the program. Often rendered as a spinning beach ball, or an arrow with a watch or hourglass.",
      "row-resize": "Indicates that the item/row can be resized vertically. Often rendered as arrows pointing up and down with a horizontal bar separating them.",
      "se-resize": "Indicates that movement starts from south-east corner.",
      "s-resize": "Indicates that south edge is to be moved.",
      "sw-resize": "Indicates that movement starts from south-west corner.",
      "vertical-text": "Indicates vertical-text that may be selected. Often rendered as a horizontal I-beam.",
      wait: "Indicates that the program is busy and the user should wait. Often rendered as a watch or hourglass.",
      "-webkit-grab": "Indicates that something can be grabbed.",
      "-webkit-grabbing": "Indicates that something is being grabbed.",
      "-webkit-zoom-in": "Indicates that something can be zoomed (magnified) in.",
      "-webkit-zoom-out": "Indicates that something can be zoomed (magnified) out.",
      "w-resize": "Indicates that west edge is to be moved.",
      "zoom-in": "Indicates that something can be zoomed (magnified) in.",
      "zoom-out": "Indicates that something can be zoomed (magnified) out.",
      ltr: "Left-to-right direction.",
      rtl: "Right-to-left direction.",
      block: "The element generates a block-level box",
      flex: "The element generates a principal flex container box and establishes a flex formatting context.",
      flexbox: "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
      "flow-root": "The element generates a block container box, and lays out its contents using flow layout.",
      grid: "The element generates a principal grid container box, and establishes a grid formatting context.",
      "inline-block": "A block box, which itself is flowed as a single inline box, similar to a replaced element. The inside of an inline-block is formatted as a block box, and the box itself is formatted as an inline box.",
      "inline-flex": "Inline-level flex container.",
      "inline-flexbox": "Inline-level flex container. Standardized as 'inline-flex'",
      "inline-table": "Inline-level table wrapper box containing table box.",
      "list-item": "One or more block boxes and one marker box.",
      "-moz-box": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
      "-moz-inline-box": "Inline-level flex container. Standardized as 'inline-flex'",
      "-ms-flexbox": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
      "-ms-grid": "The element generates a principal grid container box, and establishes a grid formatting context.",
      "-ms-inline-flexbox": "Inline-level flex container. Standardized as 'inline-flex'",
      "-ms-inline-grid": "Inline-level grid container.",
      "run-in": "The element generates a run-in box. Run-in elements act like inlines or blocks, depending on the surrounding elements.",
      table: "The element generates a principal table wrapper box containing an additionally-generated table box, and establishes a table formatting context.",
      "-webkit-box": "The element lays out its contents using flow layout (block-and-inline layout). Standardized as 'flex'.",
      "-webkit-flex": "The element lays out its contents using flow layout (block-and-inline layout).",
      "-webkit-inline-box": "Inline-level flex container. Standardized as 'inline-flex'",
      "-webkit-inline-flex": "Inline-level flex container.",
      hide: "No borders or backgrounds are drawn around/behind empty cells.",
      show: "Borders and backgrounds are drawn around/behind empty cells (like normal cells).",
      accumulate: "If the ancestor container element has a property of new, then all graphics elements within the current container are rendered both on the parent's background image and onto the target.",
      new: "Create a new background image canvas. All children of the current container element can access the background, and they will be rendered onto both the parent's background image canvas in addition to the target device.",
      "blur()": "Applies a Gaussian blur to the input image.",
      "brightness()": "Applies a linear multiplier to input image, making it appear more or less bright.",
      "contrast()": "Adjusts the contrast of the input.",
      "drop-shadow()": "Applies a drop shadow effect to the input image.",
      "grayscale()": "Converts the input image to grayscale.",
      "hue-rotate()": "Applies a hue rotation on the input image. ",
      "invert()": "Inverts the samples in the input image.",
      "opacity()": "Applies transparency to the samples in the input image.",
      "saturate()": "Saturates the input image.",
      "sepia()": "Converts the input image to sepia.",
      "column-reverse": "Same as 'column', except the main-start and main-end directions are swapped.",
      "row-reverse": "Same as 'row', except the main-start and main-end directions are swapped.",
      "wrap-reverse": "Same as 'wrap', except the cross-start and cross-end directions are swapped.",
      "inline-end": "A keyword indicating that the element must float on the end side of its containing block. That is the right side with ltr scripts, and the left side with rtl scripts.",
      "inline-start": "A keyword indicating that the element must float on the start side of its containing block. That is the left side with ltr scripts, and the right side with rtl scripts.",
      bold: "Same as 700",
      bolder: "Specifies the weight of the face bolder than the inherited value.",
      caption: "The font used for captioned controls (e.g., buttons, drop-downs, etc.).",
      lighter: "Specifies the weight of the face lighter than the inherited value.",
      menu: "The font used in menus (e.g., dropdown menus and menu lists).",
      "message-box": "The font used in dialog boxes.",
      "small-caption": "The font used for labeling small controls.",
      "status-bar": "The font used in window status bars.",
      "\"aalt\"": "Access All Alternates.",
      "\"abvf\"": "Above-base Forms. Required in Khmer script.",
      "\"abvm\"": "Above-base Mark Positioning. Required in Indic scripts.",
      "\"abvs\"": "Above-base Substitutions. Required in Indic scripts.",
      "\"afrc\"": "Alternative Fractions.",
      "\"akhn\"": "Akhand. Required in most Indic scripts.",
      "\"blwf\"": "Below-base Form. Required in a number of Indic scripts.",
      "\"blwm\"": "Below-base Mark Positioning. Required in Indic scripts.",
      "\"blws\"": "Below-base Substitutions. Required in Indic scripts.",
      "\"calt\"": "Contextual Alternates.",
      "\"case\"": "Case-Sensitive Forms. Applies only to European scripts; particularly prominent in Spanish-language setting.",
      "\"ccmp\"": "Glyph Composition/Decomposition.",
      "\"cfar\"": "Conjunct Form After Ro. Required in Khmer scripts.",
      "\"cjct\"": "Conjunct Forms. Required in Indic scripts that show similarity to Devanagari.",
      "\"clig\"": "Contextual Ligatures.",
      "\"cpct\"": "Centered CJK Punctuation. Used primarily in Chinese fonts.",
      "\"cpsp\"": "Capital Spacing. Should not be used in connecting scripts (e.g. most Arabic).",
      "\"cswh\"": "Contextual Swash.",
      "\"curs\"": "Cursive Positioning. Can be used in any cursive script.",
      "\"c2pc\"": "Petite Capitals From Capitals. Applies only to bicameral scripts.",
      "\"dist\"": "Distances. Required in Indic scripts.",
      "\"dnom\"": "Denominators.",
      "\"dtls\"": "Dotless Forms. Applied to math formula layout.",
      "\"expt\"": "Expert Forms. Applies only to Japanese.",
      "\"falt\"": "Final Glyph on Line Alternates. Can be used in any cursive script.",
      "\"fin2\"": "Terminal Form #2. Used only with the Syriac script.",
      "\"fin3\"": "Terminal Form #3. Used only with the Syriac script.",
      "\"fina\"": "Terminal Forms. Can be used in any alphabetic script.",
      "\"flac\"": "Flattened ascent forms. Applied to math formula layout.",
      "\"frac\"": "Fractions.",
      "\"fwid\"": "Full Widths. Applies to any script which can use monospaced forms.",
      "\"half\"": "Half Forms. Required in Indic scripts that show similarity to Devanagari.",
      "\"haln\"": "Halant Forms. Required in Indic scripts.",
      "\"halt\"": "Alternate Half Widths. Used only in CJKV fonts.",
      "\"hist\"": "Historical Forms.",
      "\"hkna\"": "Horizontal Kana Alternates. Applies only to fonts that support kana (hiragana and katakana).",
      "\"hlig\"": "Historical Ligatures.",
      "\"hngl\"": "Hangul. Korean only.",
      "\"hojo\"": "Hojo Kanji Forms (JIS X 0212-1990 Kanji Forms). Used only with Kanji script.",
      "\"hwid\"": "Half Widths. Generally used only in CJKV fonts.",
      "\"init\"": "Initial Forms. Can be used in any alphabetic script.",
      "\"isol\"": "Isolated Forms. Can be used in any cursive script.",
      "\"ital\"": "Italics. Applies mostly to Latin; note that many non-Latin fonts contain Latin as well.",
      "\"jalt\"": "Justification Alternates. Can be used in any cursive script.",
      "\"jp78\"": "JIS78 Forms. Applies only to Japanese.",
      "\"jp83\"": "JIS83 Forms. Applies only to Japanese.",
      "\"jp90\"": "JIS90 Forms. Applies only to Japanese.",
      "\"jp04\"": "JIS2004 Forms. Applies only to Japanese.",
      "\"lfbd\"": "Left Bounds.",
      "\"ljmo\"": "Leading Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
      "\"locl\"": "Localized Forms.",
      "\"ltra\"": "Left-to-right glyph alternates.",
      "\"ltrm\"": "Left-to-right mirrored forms.",
      "\"mark\"": "Mark Positioning.",
      "\"med2\"": "Medial Form #2. Used only with the Syriac script.",
      "\"medi\"": "Medial Forms.",
      "\"mgrk\"": "Mathematical Greek.",
      "\"mkmk\"": "Mark to Mark Positioning.",
      "\"nalt\"": "Alternate Annotation Forms.",
      "\"nlck\"": "NLC Kanji Forms. Used only with Kanji script.",
      "\"nukt\"": "Nukta Forms. Required in Indic scripts..",
      "\"numr\"": "Numerators.",
      "\"opbd\"": "Optical Bounds.",
      "\"ordn\"": "Ordinals. Applies mostly to Latin script.",
      "\"ornm\"": "Ornaments.",
      "\"palt\"": "Proportional Alternate Widths. Used mostly in CJKV fonts.",
      "\"pcap\"": "Petite Capitals.",
      "\"pkna\"": "Proportional Kana. Generally used only in Japanese fonts.",
      "\"pnum\"": "Proportional Figures.",
      "\"pref\"": "Pre-base Forms. Required in Khmer and Myanmar (Burmese) scripts and southern Indic scripts that may display a pre-base form of Ra.",
      "\"pres\"": "Pre-base Substitutions. Required in Indic scripts.",
      "\"pstf\"": "Post-base Forms. Required in scripts of south and southeast Asia that have post-base forms for consonants eg: Gurmukhi, Malayalam, Khmer.",
      "\"psts\"": "Post-base Substitutions.",
      "\"pwid\"": "Proportional Widths.",
      "\"qwid\"": "Quarter Widths. Generally used only in CJKV fonts.",
      "\"rand\"": "Randomize.",
      "\"rclt\"": "Required Contextual Alternates. May apply to any script, but is especially important for many styles of Arabic.",
      "\"rlig\"": "Required Ligatures. Applies to Arabic and Syriac. May apply to some other scripts.",
      "\"rkrf\"": "Rakar Forms. Required in Devanagari and Gujarati scripts.",
      "\"rphf\"": "Reph Form. Required in Indic scripts. E.g. Devanagari, Kannada.",
      "\"rtbd\"": "Right Bounds.",
      "\"rtla\"": "Right-to-left alternates.",
      "\"rtlm\"": "Right-to-left mirrored forms.",
      "\"ruby\"": "Ruby Notation Forms. Applies only to Japanese.",
      "\"salt\"": "Stylistic Alternates.",
      "\"sinf\"": "Scientific Inferiors.",
      "\"size\"": "Optical size.",
      "\"smpl\"": "Simplified Forms. Applies only to Chinese and Japanese.",
      "\"ssty\"": "Math script style alternates.",
      "\"stch\"": "Stretching Glyph Decomposition.",
      "\"subs\"": "Subscript.",
      "\"sups\"": "Superscript.",
      "\"titl\"": "Titling.",
      "\"tjmo\"": "Trailing Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
      "\"tnam\"": "Traditional Name Forms. Applies only to Japanese.",
      "\"trad\"": "Traditional Forms. Applies only to Chinese and Japanese.",
      "\"twid\"": "Third Widths. Generally used only in CJKV fonts.",
      "\"unic\"": "Unicase.",
      "\"valt\"": "Alternate Vertical Metrics. Applies only to scripts with vertical writing modes.",
      "\"vatu\"": "Vattu Variants. Used for Indic scripts. E.g. Devanagari.",
      "\"vert\"": "Vertical Alternates. Applies only to scripts with vertical writing modes.",
      "\"vhal\"": "Alternate Vertical Half Metrics. Used only in CJKV fonts.",
      "\"vjmo\"": "Vowel Jamo Forms. Required for Hangul script when Ancient Hangul writing system is supported.",
      "\"vkna\"": "Vertical Kana Alternates. Applies only to fonts that support kana (hiragana and katakana).",
      "\"vkrn\"": "Vertical Kerning.",
      "\"vpal\"": "Proportional Alternate Vertical Metrics. Used mostly in CJKV fonts.",
      "\"vrt2\"": "Vertical Alternates and Rotation. Applies only to scripts with vertical writing modes.",
      "\"zero\"": "Slashed Zero.",
      narrower: "Indicates a narrower value relative to the width of the parent element.",
      wider: "Indicates a wider value relative to the width of the parent element.",
      weight: "Allow synthetic bold faces.",
      "annotation()": "Enables display of alternate annotation forms.",
      "character-variant()": "Enables display of specific character variants.",
      "historical-forms": "Enables display of historical forms.",
      "ornaments()": "Enables replacement of default glyphs with ornaments, if provided in the font.",
      "styleset()": "Enables display with stylistic sets.",
      "stylistic()": "Enables display of stylistic alternates.",
      "swash()": "Enables display of swash glyphs.",
      "all-petite-caps": "Enables display of petite capitals for both upper and lowercase letters.",
      "all-small-caps": "Enables display of small capitals for both upper and lowercase letters.",
      "petite-caps": "Enables display of petite capitals.",
      "titling-caps": "Enables display of titling capitals.",
      unicase: "Enables display of mixture of small capitals for uppercase letters with normal lowercase letters.",
      "full-width": "Enables rendering of full-width variants.",
      jis04: "Enables rendering of JIS04 forms.",
      jis78: "Enables rendering of JIS78 forms.",
      jis83: "Enables rendering of JIS83 forms.",
      jis90: "Enables rendering of JIS90 forms.",
      "proportional-width": "Enables rendering of proportionally-spaced variants.",
      simplified: "Enables rendering of simplified forms.",
      traditional: "Enables rendering of traditional forms.",
      "additional-ligatures": "Enables display of additional ligatures.",
      "common-ligatures": "Enables display of common ligatures.",
      contextual: "Enables display of contextual alternates.",
      "discretionary-ligatures": "Enables display of discretionary ligatures.",
      "historical-ligatures": "Enables display of historical ligatures.",
      "no-additional-ligatures": "Disables display of additional ligatures.",
      "no-common-ligatures": "Disables display of common ligatures.",
      "no-contextual": "Disables display of contextual alternates.",
      "no-discretionary-ligatures": "Disables display of discretionary ligatures.",
      "no-historical-ligatures": "Disables display of historical ligatures.",
      "diagonal-fractions": "Enables display of lining diagonal fractions.",
      "lining-nums": "Enables display of lining numerals.",
      "oldstyle-nums": "Enables display of old-style numerals.",
      ordinal: "Enables display of letter forms used with ordinal numbers.",
      "proportional-nums": "Enables display of proportional numerals.",
      "slashed-zero": "Enables display of slashed zeros.",
      "stacked-fractions": "Enables display of lining stacked fractions.",
      "tabular-nums": "Enables display of tabular numerals.",
      span: "Contributes a grid span to the grid item’s placement such that the corresponding edge of the grid item’s grid area is N lines from its opposite edge.",
      "minmax()": "Defines a size range greater than or equal to min and less than or equal to max.",
      dense: "If specified, the auto-placement algorithm uses a “dense” packing algorithm, which attempts to fill in holes earlier in the grid if smaller items come up later.",
      "fit-content": "Use the fit-content inline size or fit-content block size, as appropriate to the writing mode.",
      manual: "Words are only broken at line breaks where there are characters inside the word that suggest line break opportunities",
      flip: "After rotating by the precededing angle, the image is flipped horizontally. Defaults to 0deg if the angle is ommitted.",
      "from-image": "If the image has an orientation specified in its metadata, such as EXIF, this value computes to the angle that the metadata specifies is necessary to correctly orient the image.",
      "crisp-edges": "The image must be scaled with an algorithm that preserves contrast and edges in the image, and which does not smooth colors or introduce blur to the image in the process.",
      optimizeQuality: "Deprecated.",
      pixelated: "When scaling the image up, the 'nearest neighbor' or similar algorithm must be used, so that the image appears to be simply composed of very large pixels.",
      active: "The input method editor is initially active; text entry is performed using it unless the user specifically dismisses it.",
      disabled: "The input method editor is disabled and may not be activated by the user.",
      inactive: "The input method editor is initially inactive, but the user may activate it if they wish.",
      safe: "If the size of the item overflows the alignment container, the item is instead aligned as if the alignment mode were start.",
      unsafe: "Regardless of the relative sizes of the item and alignment container, the given alignment value is honored.",
      "space-evenly": "The items are evenly distributed within the alignment container along the main axis.",
      circle: "A hollow circle.",
      disc: "A filled circle.",
      inside: "The marker box is outside the principal block box, as described in the section on the ::marker pseudo-element below.",
      outside: "The ::marker pseudo-element is an inline element placed immediately before all ::before pseudo-elements in the principal block box, after which the element's content flows.",
      "symbols()": "Allows a counter style to be defined inline.",
      "path()": "Defines an SVG path as a string, with optional 'fill-rule' as the first argument.",
      "block-axis": "Elements are oriented along the box's axis.",
      "inline-axis": "Elements are oriented vertically.",
      "padding-box": "The specified width and height (and respective min/max properties) on this element determine the padding box of the element.",
      "line-through": "Each line of text has a line through the middle.",
      overline: "Each line of text has a line above it.",
      underline: "Each line of text is underlined.",
      dashed: "Produces a dashed line style.",
      dotted: "Produces a dotted line.",
      double: "Produces a double line.",
      solid: "Produces a solid line.",
      wavy: "Produces a wavy line.",
      "matrix()": "Specifies a 2D transformation in the form of a transformation matrix of six values. matrix(a,b,c,d,e,f) is equivalent to applying the transformation matrix [a b c d e f]",
      "matrix3d()": "Specifies a 3D transformation as a 4x4 homogeneous matrix of 16 values in column-major order.",
      perspective: "Specifies a perspective projection matrix.",
      "rotate()": "Specifies a 2D rotation by the angle specified in the parameter about the origin of the element, as defined by the transform-origin property.",
      "rotate3d()": "Specifies a clockwise 3D rotation by the angle specified in last parameter about the [x,y,z] direction vector described by the first 3 parameters.",
      "rotateX('angle')": "Specifies a clockwise rotation by the given angle about the X axis.",
      "rotateY('angle')": "Specifies a clockwise rotation by the given angle about the Y axis.",
      "rotateZ('angle')": "Specifies a clockwise rotation by the given angle about the Z axis.",
      "scale()": "Specifies a 2D scale operation by the [sx,sy] scaling vector described by the 2 parameters. If the second parameter is not provided, it is takes a value equal to the first.",
      "scale3d()": "Specifies a 3D scale operation by the [sx,sy,sz] scaling vector described by the 3 parameters.",
      "scaleX()": "Specifies a scale operation using the [sx,1] scaling vector, where sx is given as the parameter.",
      "scaleY()": "Specifies a scale operation using the [sy,1] scaling vector, where sy is given as the parameter.",
      "scaleZ()": "Specifies a scale operation using the [1,1,sz] scaling vector, where sz is given as the parameter.",
      "skew()": "Specifies a skew transformation along the X and Y axes. The first angle parameter specifies the skew on the X axis. The second angle parameter specifies the skew on the Y axis. If the second parameter is not given then a value of 0 is used for the Y angle (ie: no skew on the Y axis).",
      "skewX()": "Specifies a skew transformation along the X axis by the given angle.",
      "skewY()": "Specifies a skew transformation along the Y axis by the given angle.",
      "translate()": "Specifies a 2D translation by the vector [tx, ty], where tx is the first translation-value parameter and ty is the optional second translation-value parameter.",
      "translate3d()": "Specifies a 3D translation by the vector [tx,ty,tz], with tx, ty and tz being the first, second and third translation-value parameters respectively.",
      "translateX()": "Specifies a translation by the given amount in the X direction.",
      "translateY()": "Specifies a translation by the given amount in the Y direction.",
      "translateZ()": "Specifies a translation by the given amount in the Z direction. Note that percentage values are not allowed in the translateZ translation-value, and if present are evaluated as 0.",
      false: "The element does not contain an accelerator key sequence.",
      true: "The element contains an accelerator key sequence.",
      bt: "Bottom-to-top block flow. Layout is horizontal.",
      lr: "Left-to-right direction. The flow orientation is vertical.",
      rl: "Right-to-left direction. The flow orientation is vertical.",
      tb: "Top-to-bottom direction. The flow orientation is horizontal.",
      zoom: "The element is zoomable.",
      "no-limit": "There is no limit.",
      mode: "Any of the range of mode values available to the -ms-layout-grid-mode property.",
      type: "Any of the range of type values available to the -ms-layout-grid-type property.",
      "-ms-autohiding-scrollbar": "Indicates the element displays auto-hiding scrollbars during mouse interactions and panning indicators during touch and keyboard interactions.",
      scrollbar: "Scrollbars are typically narrow strips inserted on one or two edges of an element and which often have arrows to click on and a \"thumb\" to drag up and down (or left and right) to move the contents of the element.",
      "ideograph-alpha": "Creates 1/4em extra spacing between runs of ideographic letters and non-ideographic letters, such as Latin-based, Cyrillic, Greek, Arabic or Hebrew.",
      "ideograph-numeric": "Creates 1/4em extra spacing between runs of ideographic letters and numeric glyphs.",
      "ideograph-parenthesis": "Creates extra spacing between normal (non wide) parenthesis and ideographs.",
      "ideograph-space": "Extends the width of the space character while surrounded by ideographs.",
      punctuation: "Creates extra non-breaking spacing around punctuation as required by language-specific typographic conventions.",
      digits: "Attempt to typeset horizontally each maximal sequence of consecutive ASCII digits (U+0030–U+0039) that has as many or fewer characters than the specified integer such that it takes up the space of a single character within the vertical line box.",
      "inter-cluster": "Justification primarily changes spacing at word separators and at grapheme cluster boundaries in clustered scripts. This value is typically used for Southeast Asian scripts such as Thai.",
      "inter-ideograph": "Justification primarily changes spacing at word separators and at inter-graphemic boundaries in scripts that use no word spaces. This value is typically used for CJK languages.",
      "inter-word": "Justification primarily changes spacing at word separators. This value is typically used for languages that separate words using spaces, like English or (sometimes) Korean.",
      kashida: "Justification primarily stretches Arabic and related scripts through the use of kashida or other calligraphic elongation.",
      clip: "Clip inline content that overflows. Characters may be only partially rendered.",
      ellipsis: "Render an ellipsis character (U+2026) to represent clipped inline content.",
      over: "The underline is aligned with the 'top' (right in vertical writing) edge of the element's em-box. In this mode, an overline also switches sides.",
      under: "The underline is aligned with the 'bottom' (left in vertical writing) edge of the element's em-box. In this case the underline usually does not cross the descenders. This is sometimes called 'accounting' underline.",
      grippers: "Grippers are always on.",
      "break-all": "Lines may break between any two grapheme clusters for non-CJK scripts.",
      clear: "Inline flow content can only wrap on top and bottom of the exclusion and must leave the areas to the start and end edges of the exclusion box empty.",
      maximum: "Inline flow content can wrap on the side of the exclusion with the largest available space for the given line, and must leave the other side of the exclusion empty.",
      minimum: "Inline flow content can flow around the edge of the exclusion with the smallest available space within the flow content’s containing block, and must leave the other edge of the exclusion empty.",
      current: "Indicates that the user agent should target the frame that the element is in.",
      root: "Indicates that the user agent should target the full window.",
      "scale-down": "Size the content as if ‘none’ or ‘contain’ were specified, whichever would result in a smaller concrete object size.",
      invert: "Performs a color inversion on the pixels on the screen.",
      "-moz-hidden-unscrollable": "Same as the standardized 'clip', except doesn’t establish a block formatting context.",
      painted: "The given element can be the target element for pointer events when the pointer is over a \"painted\" area. ",
      visibleFill: "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over the interior of the element.",
      visiblePainted: "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over a ‘painted’ area.",
      visibleStroke: "The given element can be the target element for pointer events when the ‘visibility’ property is set to visible and when the pointer is over the perimeter of the element.",
      absolute: "The box's position (and possibly size) is specified with the 'top', 'right', 'bottom', and 'left' properties. These properties specify offsets with respect to the box's 'containing block'.",
      "-ms-page": "The box's position is calculated according to the 'absolute' model.",
      relative: "The box's position is calculated according to the normal flow (this is called the position in normal flow). Then the box is offset relative to its normal position.",
      static: "The box is a normal box, laid out according to the normal flow. The 'top', 'right', 'bottom', and 'left' properties do not apply.",
      sticky: "The box's position is calculated according to the normal flow. Then the box is offset relative to its flow root and containing block and in all cases, including table elements, does not affect the position of any following boxes.",
      "-webkit-sticky": "The box's position is calculated according to the normal flow. Then the box is offset relative to its flow root and containing block and in all cases, including table elements, does not affect the position of any following boxes.",
      "distribute-letter": "If the width of the ruby text is smaller than that of the base, then the ruby text contents are evenly distributed across the width of the base, with the first and last ruby text glyphs lining up with the corresponding first and last base glyphs. If the width of the ruby text is at least the width of the base, then the letters of the base are evenly distributed across the width of the ruby text.",
      "distribute-space": "If the width of the ruby text is smaller than that of the base, then the ruby text contents are evenly distributed across the width of the base, with a certain amount of white space preceding the first and following the last character in the ruby text. That amount of white space is normally equal to half the amount of inter-character space of the ruby text.",
      "line-edge": "If the ruby text is not adjacent to a line edge, it is aligned as in 'auto'. If it is adjacent to a line edge, then it is still aligned as in auto, but the side of the ruby text that touches the end of the line is lined up with the corresponding edge of the base.",
      after: "The ruby text appears after the base. This is a relatively rare setting used in ideographic East Asian writing systems, most easily found in educational text.",
      before: "The ruby text appears before the base. This is the most common setting used in ideographic East Asian writing systems.",
      "attr(x)": "The value of attribute 'x' is a string value. The string value is evaluated as a <number> to determine the number of ruby base elements to be spanned by the annotation element.",
      smooth: "Scrolls in a smooth fashion using a user-agent-defined timing function and time period.",
      "margin-box": "The background is painted within (clipped to) the margin box.",
      crispEdges: "Emphasize the contrast between clean edges of artwork over rendering speed and geometric precision.",
      "format()": "Optional hint describing the format of the font resource.",
      "local()": "Format-specific string that identifies a locally available copy of a given font.",
      butt: "Indicates that the stroke for each subpath does not extend beyond its two endpoints.",
      bevel: "Indicates that a bevelled corner is to be used to join path segments.",
      miter: "Indicates that a sharp corner is to be used to join path segments.",
      additive: "Represents “sign-value” numbering systems, which, rather than using reusing digits in different positions to change their value, define additional digits with much larger values, so that the value of the number can be obtained by adding all the digits together.",
      cyclic: "Cycles repeatedly through its provided symbols, looping back to the beginning when it reaches the end of the list.",
      extends: "Use the algorithm of another counter style, but alter other aspects.",
      numeric: "interprets the list of counter symbols as digits to a \"place-value\" numbering system, similar to the default 'decimal' counter style.",
      symbolic: "Cycles repeatedly through its provided symbols, doubling, tripling, etc. the symbols on each successive pass through the list.",
      sideways: "This value is equivalent to 'sideways-right' in 'vertical-rl' writing mode and equivalent to 'sideways-left' in 'vertical-lr' writing mode.",
      "sideways-right": "In vertical writing modes, this causes text to be set as if in a horizontal layout, but rotated 90° clockwise.",
      upright: "In vertical writing modes, characters from horizontal-only scripts are rendered upright, i.e. in their standard horizontal orientation.",
      optimizeLegibility: "Indicates that the user agent shall emphasize legibility over rendering speed and geometric precision.",
      capitalize: "Puts the first typographic letter unit of each word in titlecase.",
      lowercase: "Puts all letters in lowercase.",
      uppercase: "Puts all letters in uppercase.",
      "perspective()": "Specifies a perspective projection matrix.",
      flat: "All children of this element are rendered flattened into the 2D plane of the element.",
      "preserve-3d": "Flattening is not performed, so children maintain their position in 3D space.",
      "bidi-override": "Inside the element, reordering is strictly in sequence according to the 'direction' property; the implicit part of the bidirectional algorithm is ignored.",
      embed: "If the element is inline-level, this value opens an additional level of embedding with respect to the bidirectional algorithm. The direction of this embedding level is given by the 'direction' property.",
      "isolate-override": "This combines the isolation behavior of 'isolate' with the directional override behavior of 'bidi-override'",
      plaintext: "For the purposes of the Unicode bidirectional algorithm, the base directionality of each bidi paragraph for which the element forms the containing block is determined not by the element's computed 'direction'.",
      "U+26": "Ampersand.",
      "U+20-24F, U+2B0-2FF, U+370-4FF, U+1E00-1EFF, U+2000-20CF, U+2100-23FF, U+2500-26FF, U+E000-F8FF, U+FB00–FB4F": "WGL4 character set (Pan-European).",
      "U+20-17F, U+2B0-2FF, U+2000-206F, U+20A0-20CF, U+2100-21FF, U+2600-26FF": "The Multilingual European Subset No. 1. Latin. Covers ~44 languages.",
      "U+20-2FF, U+370-4FF, U+1E00-20CF, U+2100-23FF, U+2500-26FF, U+FB00-FB4F, U+FFF0-FFFD": "The Multilingual European Subset No. 2. Latin, Greek, and Cyrillic. Covers ~128 language.",
      "U+20-4FF, U+530-58F, U+10D0-10FF, U+1E00-23FF, U+2440-245F, U+2500-26FF, U+FB00-FB4F, U+FE20-FE2F, U+FFF0-FFFD": "The Multilingual European Subset No. 3. Covers all characters belonging to European scripts.",
      "U+00-7F": "Basic Latin (ASCII).",
      "U+80-FF": "Latin-1 Supplement. Accented characters for Western European languages, common punctuation characters, multiplication and division signs.",
      "U+100-17F": "Latin Extended-A. Accented characters for for Czech, Dutch, Polish, and Turkish.",
      "U+180-24F": "Latin Extended-B. Croatian, Slovenian, Romanian, Non-European and historic latin, Khoisan, Pinyin, Livonian, Sinology.",
      "U+1E00-1EFF": "Latin Extended Additional. Vietnamese, German captial sharp s, Medievalist, Latin general use.",
      "U+250-2AF": "International Phonetic Alphabet Extensions.",
      "U+370-3FF": "Greek and Coptic.",
      "U+1F00-1FFF": "Greek Extended. Accented characters for polytonic Greek.",
      "U+400-4FF": "Cyrillic.",
      "U+500-52F": "Cyrillic Supplement. Extra letters for Komi, Khanty, Chukchi, Mordvin, Kurdish, Aleut, Chuvash, Abkhaz, Azerbaijani, and Orok.",
      "U+00-52F, U+1E00-1FFF, U+2200–22FF": "Latin, Greek, Cyrillic, some punctuation and symbols.",
      "U+530–58F": "Armenian.",
      "U+590–5FF": "Hebrew.",
      "U+600–6FF": "Arabic.",
      "U+750–77F": "Arabic Supplement. Additional letters for African languages, Khowar, Torwali, Burushaski, and early Persian.",
      "U+8A0–8FF": "Arabic Extended-A. Additional letters for African languages, European and Central Asian languages, Rohingya, Tamazight, Arwi, and Koranic annotation signs.",
      "U+700–74F": "Syriac.",
      "U+900–97F": "Devanagari.",
      "U+980–9FF": "Bengali.",
      "U+A00–A7F": "Gurmukhi.",
      "U+A80–AFF": "Gujarati.",
      "U+B00–B7F": "Oriya.",
      "U+B80–BFF": "Tamil.",
      "U+C00–C7F": "Telugu.",
      "U+C80–CFF": "Kannada.",
      "U+D00–D7F": "Malayalam.",
      "U+D80–DFF": "Sinhala.",
      "U+118A0–118FF": "Warang Citi.",
      "U+E00–E7F": "Thai.",
      "U+1A20–1AAF": "Tai Tham.",
      "U+AA80–AADF": "Tai Viet.",
      "U+E80–EFF": "Lao.",
      "U+F00–FFF": "Tibetan.",
      "U+1000–109F": "Myanmar (Burmese).",
      "U+10A0–10FF": "Georgian.",
      "U+1200–137F": "Ethiopic.",
      "U+1380–139F": "Ethiopic Supplement. Extra Syllables for Sebatbeit, and Tonal marks",
      "U+2D80–2DDF": "Ethiopic Extended. Extra Syllables for Me'en, Blin, and Sebatbeit.",
      "U+AB00–AB2F": "Ethiopic Extended-A. Extra characters for Gamo-Gofa-Dawro, Basketo, and Gumuz.",
      "U+1780–17FF": "Khmer.",
      "U+1800–18AF": "Mongolian.",
      "U+1B80–1BBF": "Sundanese.",
      "U+1CC0–1CCF": "Sundanese Supplement. Punctuation.",
      "U+4E00–9FD5": "CJK (Chinese, Japanese, Korean) Unified Ideographs. Most common ideographs for modern Chinese and Japanese.",
      "U+3400–4DB5": "CJK Unified Ideographs Extension A. Rare ideographs.",
      "U+2F00–2FDF": "Kangxi Radicals.",
      "U+2E80–2EFF": "CJK Radicals Supplement. Alternative forms of Kangxi Radicals.",
      "U+1100–11FF": "Hangul Jamo.",
      "U+AC00–D7AF": "Hangul Syllables.",
      "U+3040–309F": "Hiragana.",
      "U+30A0–30FF": "Katakana.",
      "U+A5, U+4E00-9FFF, U+30??, U+FF00-FF9F": "Japanese Kanji, Hiragana and Katakana characters plus Yen/Yuan symbol.",
      "U+A4D0–A4FF": "Lisu.",
      "U+A000–A48F": "Yi Syllables.",
      "U+A490–A4CF": "Yi Radicals.",
      "U+2000-206F": "General Punctuation.",
      "U+3000–303F": "CJK Symbols and Punctuation.",
      "U+2070–209F": "Superscripts and Subscripts.",
      "U+20A0–20CF": "Currency Symbols.",
      "U+2100–214F": "Letterlike Symbols.",
      "U+2150–218F": "Number Forms.",
      "U+2190–21FF": "Arrows.",
      "U+2200–22FF": "Mathematical Operators.",
      "U+2300–23FF": "Miscellaneous Technical.",
      "U+E000-F8FF": "Private Use Area.",
      "U+FB00–FB4F": "Alphabetic Presentation Forms. Ligatures for latin, Armenian, and Hebrew.",
      "U+FB50–FDFF": "Arabic Presentation Forms-A. Contextual forms / ligatures for Persian, Urdu, Sindhi, Central Asian languages, etc, Arabic pedagogical symbols, word ligatures.",
      "U+1F600–1F64F": "Emoji: Emoticons.",
      "U+2600–26FF": "Emoji: Miscellaneous Symbols.",
      "U+1F300–1F5FF": "Emoji: Miscellaneous Symbols and Pictographs.",
      "U+1F900–1F9FF": "Emoji: Supplemental Symbols and Pictographs.",
      "U+1F680–1F6FF": "Emoji: Transport and Map Symbols.",
      "text-bottom": "Align the bottom of the box with the after-edge of the parent element's font.",
      "text-top": "Align the top of the box with the before-edge of the parent element's font.",
      break: "If the content fits within the CSS Region, then this property has no effect.",
      pre: "Sets 'white-space-collapsing' to 'preserve' and 'text-wrap' to 'none'.",
      "pre-line": "Sets 'white-space-collapsing' to 'preserve-breaks' and 'text-wrap' to 'normal'.",
      "pre-wrap": "Sets 'white-space-collapsing' to 'preserve' and 'text-wrap' to 'normal'.",
      "scroll-position": "Indicates that the author expects to animate or change the scroll position of the element in the near future.",
      "horizontal-tb": "Top-to-bottom block flow direction. The writing mode is horizontal.",
      "sideways-lr": "Left-to-right block flow direction. The writing mode is vertical, while the typographic mode is horizontal.",
      "sideways-rl": "Right-to-left block flow direction. The writing mode is vertical, while the typographic mode is horizontal.",
      "vertical-lr": "Left-to-right block flow direction. The writing mode is vertical.",
      "vertical-rl": "Right-to-left block flow direction. The writing mode is vertical."
    }, Hn = Bn(), Jn = {
      aliceblue: "#f0f8ff",
      antiquewhite: "#faebd7",
      aqua: "#00ffff",
      aquamarine: "#7fffd4",
      azure: "#f0ffff",
      beige: "#f5f5dc",
      bisque: "#ffe4c4",
      black: "#000000",
      blanchedalmond: "#ffebcd",
      blue: "#0000ff",
      blueviolet: "#8a2be2",
      brown: "#a52a2a",
      burlywood: "#deb887",
      cadetblue: "#5f9ea0",
      chartreuse: "#7fff00",
      chocolate: "#d2691e",
      coral: "#ff7f50",
      cornflowerblue: "#6495ed",
      cornsilk: "#fff8dc",
      crimson: "#dc143c",
      cyan: "#00ffff",
      darkblue: "#00008b",
      darkcyan: "#008b8b",
      darkgoldenrod: "#b8860b",
      darkgray: "#a9a9a9",
      darkgrey: "#a9a9a9",
      darkgreen: "#006400",
      darkkhaki: "#bdb76b",
      darkmagenta: "#8b008b",
      darkolivegreen: "#556b2f",
      darkorange: "#ff8c00",
      darkorchid: "#9932cc",
      darkred: "#8b0000",
      darksalmon: "#e9967a",
      darkseagreen: "#8fbc8f",
      darkslateblue: "#483d8b",
      darkslategray: "#2f4f4f",
      darkslategrey: "#2f4f4f",
      darkturquoise: "#00ced1",
      darkviolet: "#9400d3",
      deeppink: "#ff1493",
      deepskyblue: "#00bfff",
      dimgray: "#696969",
      dimgrey: "#696969",
      dodgerblue: "#1e90ff",
      firebrick: "#b22222",
      floralwhite: "#fffaf0",
      forestgreen: "#228b22",
      fuchsia: "#ff00ff",
      gainsboro: "#dcdcdc",
      ghostwhite: "#f8f8ff",
      gold: "#ffd700",
      goldenrod: "#daa520",
      gray: "#808080",
      grey: "#808080",
      green: "#008000",
      greenyellow: "#adff2f",
      honeydew: "#f0fff0",
      hotpink: "#ff69b4",
      indianred: "#cd5c5c",
      indigo: "#4b0082",
      ivory: "#fffff0",
      khaki: "#f0e68c",
      lavender: "#e6e6fa",
      lavenderblush: "#fff0f5",
      lawngreen: "#7cfc00",
      lemonchiffon: "#fffacd",
      lightblue: "#add8e6",
      lightcoral: "#f08080",
      lightcyan: "#e0ffff",
      lightgoldenrodyellow: "#fafad2",
      lightgray: "#d3d3d3",
      lightgrey: "#d3d3d3",
      lightgreen: "#90ee90",
      lightpink: "#ffb6c1",
      lightsalmon: "#ffa07a",
      lightseagreen: "#20b2aa",
      lightskyblue: "#87cefa",
      lightslategray: "#778899",
      lightslategrey: "#778899",
      lightsteelblue: "#b0c4de",
      lightyellow: "#ffffe0",
      lime: "#00ff00",
      limegreen: "#32cd32",
      linen: "#faf0e6",
      magenta: "#ff00ff",
      maroon: "#800000",
      mediumaquamarine: "#66cdaa",
      mediumblue: "#0000cd",
      mediumorchid: "#ba55d3",
      mediumpurple: "#9370d8",
      mediumseagreen: "#3cb371",
      mediumslateblue: "#7b68ee",
      mediumspringgreen: "#00fa9a",
      mediumturquoise: "#48d1cc",
      mediumvioletred: "#c71585",
      midnightblue: "#191970",
      mintcream: "#f5fffa",
      mistyrose: "#ffe4e1",
      moccasin: "#ffe4b5",
      navajowhite: "#ffdead",
      navy: "#000080",
      oldlace: "#fdf5e6",
      olive: "#808000",
      olivedrab: "#6b8e23",
      orange: "#ffa500",
      orangered: "#ff4500",
      orchid: "#da70d6",
      palegoldenrod: "#eee8aa",
      palegreen: "#98fb98",
      paleturquoise: "#afeeee",
      palevioletred: "#d87093",
      papayawhip: "#ffefd5",
      peachpuff: "#ffdab9",
      peru: "#cd853f",
      pink: "#ffc0cb",
      plum: "#dda0dd",
      powderblue: "#b0e0e6",
      purple: "#800080",
      red: "#ff0000",
      rebeccapurple: "#663399",
      rosybrown: "#bc8f8f",
      royalblue: "#4169e1",
      saddlebrown: "#8b4513",
      salmon: "#fa8072",
      sandybrown: "#f4a460",
      seagreen: "#2e8b57",
      seashell: "#fff5ee",
      sienna: "#a0522d",
      silver: "#c0c0c0",
      skyblue: "#87ceeb",
      slateblue: "#6a5acd",
      slategray: "#708090",
      slategrey: "#708090",
      snow: "#fffafa",
      springgreen: "#00ff7f",
      steelblue: "#4682b4",
      tan: "#d2b48c",
      teal: "#008080",
      thistle: "#d8bfd8",
      tomato: "#ff6347",
      turquoise: "#40e0d0",
      violet: "#ee82ee",
      wheat: "#f5deb3",
      white: "#ffffff",
      whitesmoke: "#f5f5f5",
      yellow: "#ffff00",
      yellowgreen: "#9acd32"
    }, Yn = {
      currentColor: "The value of the 'color' property. The computed value of the 'currentColor' keyword is the computed value of the 'color' property. If the 'currentColor' keyword is set on the 'color' property itself, it is treated as 'color:inherit' at parse time.",
      transparent: "Fully transparent. This keyword can be considered a shorthand for rgba(0,0,0,0) which is its computed value."
    }, Xn = {
      bottom: "Computes to ‘100%’ for the vertical position if one or two values are given, otherwise specifies the bottom edge as the origin for the next offset.",
      center: "Computes to ‘50%’ (‘left 50%’) for the horizontal position if the horizontal position is not otherwise specified, or ‘50%’ (‘top 50%’) for the vertical position if it is.",
      left: "Computes to ‘0%’ for the horizontal position if one or two values are given, otherwise specifies the left edge as the origin for the next offset.",
      right: "Computes to ‘100%’ for the horizontal position if one or two values are given, otherwise specifies the right edge as the origin for the next offset.",
      top: "Computes to ‘0%’ for the vertical position if one or two values are given, otherwise specifies the top edge as the origin for the next offset."
    }, Qn = {
      "no-repeat": "Placed once and not repeated in this direction.",
      repeat: "Repeated in this direction as often as needed to cover the background painting area.",
      "repeat-x": "Computes to ‘repeat no-repeat’.",
      "repeat-y": "Computes to ‘no-repeat repeat’.",
      round: "Repeated as often as will fit within the background positioning area. If it doesn’t fit a whole number of times, it is rescaled so that it does.",
      space: "Repeated as often as will fit within the background positioning area without being clipped and then the images are spaced out to fill the area."
    }, Zn = {
      dashed: "A series of square-ended dashes.",
      dotted: "A series of round dots.",
      double: "Two parallel solid lines with some space between them.",
      groove: "Looks as if it were carved in the canvas.",
      hidden: "Same as ‘none’, but has different behavior in the border conflict resolution rules for border-collapsed tables.",
      inset: "Looks as if the content on the inside of the border is sunken into the canvas.",
      none: "No border. Color and width are ignored.",
      outset: "Looks as if the content on the inside of the border is coming out of the canvas.",
      ridge: "Looks as if it were coming out of the canvas.",
      solid: "A single line segment."
    }, er = ["medium", "thick", "thin"], tr = {
      "border-box": "The background is painted within (clipped to) the border box.",
      "content-box": "The background is painted within (clipped to) the content box.",
      "padding-box": "The background is painted within (clipped to) the padding box."
    }, nr = {
      "margin-box": "Uses the margin box as reference box.",
      "fill-box": "Uses the object bounding box as reference box.",
      "stroke-box": "Uses the stroke bounding box as reference box.",
      "view-box": "Uses the nearest SVG viewport as reference box."
    }, rr = {
      initial: "Represents the value specified as the property’s initial value.",
      inherit: "Represents the computed value of the property on the element’s parent.",
      unset: "Acts as either `inherit` or `initial`, depending on whether the property is inherited or not."
    }, ir = [{
      func: "rgb($red, $green, $blue)",
      desc: Hn("css.builtin.rgb", "Creates a Color from red, green, and blue values.")
    }, {
      func: "rgba($red, $green, $blue, $alpha)",
      desc: Hn("css.builtin.rgba", "Creates a Color from red, green, blue, and alpha values.")
    }, {
      func: "hsl($hue, $saturation, $lightness)",
      desc: Hn("css.builtin.hsl", "Creates a Color from hue, saturation, and lightness values.")
    }, {
      func: "hsla($hue, $saturation, $lightness, $alpha)",
      desc: Hn("css.builtin.hsla", "Creates a Color from hue, saturation, lightness, and alpha values.")
    }], or = {
      "url()": "Reference an image file by URL",
      "image()": "Provide image fallbacks and annotations.",
      "-webkit-image-set()": "Provide multiple resolutions. Remember to use unprefixed image-set() in addition.",
      "image-set()": "Provide multiple resolutions of an image and let the UA decide which is most appropriate in a given situation.",
      "-moz-element()": "Use an element in the document as an image. Remember to use unprefixed element() in addition.",
      "element()": "Use an element in the document as an image.",
      "cross-fade()": "Indicates the two images to be combined and how far along in the transition the combination is.",
      "-webkit-gradient()": "Deprecated. Use modern linear-gradient() or radial-gradient() instead.",
      "-webkit-linear-gradient()": "Linear gradient. Remember to use unprefixed version in addition.",
      "-moz-linear-gradient()": "Linear gradient. Remember to use unprefixed version in addition.",
      "-o-linear-gradient()": "Linear gradient. Remember to use unprefixed version in addition.",
      "linear-gradient()": "A linear gradient is created by specifying a straight gradient line, and then several colors placed along that line.",
      "-webkit-repeating-linear-gradient()": "Repeating Linear gradient. Remember to use unprefixed version in addition.",
      "-moz-repeating-linear-gradient()": "Repeating Linear gradient. Remember to use unprefixed version in addition.",
      "-o-repeating-linear-gradient()": "RepeatingLinear gradient. Remember to use unprefixed version in addition.",
      "repeating-linear-gradient()": "Same as linear-gradient, except the color-stops are repeated infinitely in both directions, with their positions shifted by multiples of the difference between the last specified color-stop’s position and the first specified color-stop’s position.",
      "-webkit-radial-gradient()": "Radial gradient. Remember to use unprefixed version in addition.",
      "-moz-radial-gradient()": "Radial gradient. Remember to use unprefixed version in addition.",
      "radial-gradient()": "Colors emerge from a single point and smoothly spread outward in a circular or elliptical shape.",
      "-webkit-repeating-radial-gradient()": "Repeating radial gradient. Remember to use unprefixed version in addition.",
      "-moz-repeating-radial-gradient()": "Repeating radial gradient. Remember to use unprefixed version in addition.",
      "repeating-radial-gradient()": "Same as radial-gradient, except the color-stops are repeated infinitely in both directions, with their positions shifted by multiples of the difference between the last specified color-stop’s position and the first specified color-stop’s position."
    }, sr = {
      ease: "Equivalent to cubic-bezier(0.25, 0.1, 0.25, 1.0).",
      "ease-in": "Equivalent to cubic-bezier(0.42, 0, 1.0, 1.0).",
      "ease-in-out": "Equivalent to cubic-bezier(0.42, 0, 0.58, 1.0).",
      "ease-out": "Equivalent to cubic-bezier(0, 0, 0.58, 1.0).",
      linear: "Equivalent to cubic-bezier(0.0, 0.0, 1.0, 1.0).",
      "step-end": "Equivalent to steps(1, end).",
      "step-start": "Equivalent to steps(1, start).",
      "steps()": "The first parameter specifies the number of intervals in the function. The second parameter, which is optional, is either the value “start” or “end”.",
      "cubic-bezier()": "Specifies a cubic-bezier curve. The four values specify points P1 and P2  of the curve as (x1, y1, x2, y2).",
      "cubic-bezier(0.6, -0.28, 0.735, 0.045)": "Ease-in Back. Overshoots.",
      "cubic-bezier(0.68, -0.55, 0.265, 1.55)": "Ease-in-out Back. Overshoots.",
      "cubic-bezier(0.175, 0.885, 0.32, 1.275)": "Ease-out Back. Overshoots.",
      "cubic-bezier(0.6, 0.04, 0.98, 0.335)": "Ease-in Circular. Based on half circle.",
      "cubic-bezier(0.785, 0.135, 0.15, 0.86)": "Ease-in-out Circular. Based on half circle.",
      "cubic-bezier(0.075, 0.82, 0.165, 1)": "Ease-out Circular. Based on half circle.",
      "cubic-bezier(0.55, 0.055, 0.675, 0.19)": "Ease-in Cubic. Based on power of three.",
      "cubic-bezier(0.645, 0.045, 0.355, 1)": "Ease-in-out Cubic. Based on power of three.",
      "cubic-bezier(0.215, 0.610, 0.355, 1)": "Ease-out Cubic. Based on power of three.",
      "cubic-bezier(0.95, 0.05, 0.795, 0.035)": "Ease-in Exponential. Based on two to the power ten.",
      "cubic-bezier(1, 0, 0, 1)": "Ease-in-out Exponential. Based on two to the power ten.",
      "cubic-bezier(0.19, 1, 0.22, 1)": "Ease-out Exponential. Based on two to the power ten.",
      "cubic-bezier(0.47, 0, 0.745, 0.715)": "Ease-in Sine.",
      "cubic-bezier(0.445, 0.05, 0.55, 0.95)": "Ease-in-out Sine.",
      "cubic-bezier(0.39, 0.575, 0.565, 1)": "Ease-out Sine.",
      "cubic-bezier(0.55, 0.085, 0.68, 0.53)": "Ease-in Quadratic. Based on power of two.",
      "cubic-bezier(0.455, 0.03, 0.515, 0.955)": "Ease-in-out Quadratic. Based on power of two.",
      "cubic-bezier(0.25, 0.46, 0.45, 0.94)": "Ease-out Quadratic. Based on power of two.",
      "cubic-bezier(0.895, 0.03, 0.685, 0.22)": "Ease-in Quartic. Based on power of four.",
      "cubic-bezier(0.77, 0, 0.175, 1)": "Ease-in-out Quartic. Based on power of four.",
      "cubic-bezier(0.165, 0.84, 0.44, 1)": "Ease-out Quartic. Based on power of four.",
      "cubic-bezier(0.755, 0.05, 0.855, 0.06)": "Ease-in Quintic. Based on power of five.",
      "cubic-bezier(0.86, 0, 0.07, 1)": "Ease-in-out Quintic. Based on power of five.",
      "cubic-bezier(0.23, 1, 0.320, 1)": "Ease-out Quintic. Based on power of five."
    }, ar = {
      "circle()": "Defines a circle.",
      "ellipse()": "Defines an ellipse.",
      "inset()": "Defines an inset rectangle.",
      "polygon()": "Defines a polygon."
    }, lr = {
      length: ["em", "rem", "ex", "px", "cm", "mm", "in", "pt", "pc", "ch", "vw", "vh", "vmin", "vmax"],
      angle: ["deg", "rad", "grad", "turn"],
      time: ["ms", "s"],
      frequency: ["Hz", "kHz"],
      resolution: ["dpi", "dpcm", "dppx"],
      percentage: ["%", "fr"]
    },
    cr = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "let", "video", "wbr"],
    hr = ["circle", "clipPath", "cursor", "defs", "desc", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "foreignObject", "g", "hatch", "hatchpath", "image", "line", "linearGradient", "marker", "mask", "mesh", "meshpatch", "meshrow", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "set", "solidcolor", "stop", "svg", "switch", "symbol", "text", "textPath", "tspan", "use", "view"];

  function dr(e) {
    var t = e.getName();
    return !!t && /^(rgb|rgba|hsl|hsla)$/gi.test(t);
  }

  var ur = 48, mr = 57, pr = 65, fr = 97, gr = 102;

  function br(e) {
    return e < ur ? 0 : e <= mr ? e - ur : (e < fr && (e += fr - pr), e >= fr && e <= gr ? e - fr + 10 : 0);
  }

  function yr(e) {
    if ("#" !== e[0]) return null;
    switch (e.length) {
      case 4:
        return {
          red: 17 * br(e.charCodeAt(1)) / 255,
          green: 17 * br(e.charCodeAt(2)) / 255,
          blue: 17 * br(e.charCodeAt(3)) / 255,
          alpha: 1
        };
      case 5:
        return {
          red: 17 * br(e.charCodeAt(1)) / 255,
          green: 17 * br(e.charCodeAt(2)) / 255,
          blue: 17 * br(e.charCodeAt(3)) / 255,
          alpha: 17 * br(e.charCodeAt(4)) / 255
        };
      case 7:
        return {
          red: (16 * br(e.charCodeAt(1)) + br(e.charCodeAt(2))) / 255,
          green: (16 * br(e.charCodeAt(3)) + br(e.charCodeAt(4))) / 255,
          blue: (16 * br(e.charCodeAt(5)) + br(e.charCodeAt(6))) / 255,
          alpha: 1
        };
      case 9:
        return {
          red: (16 * br(e.charCodeAt(1)) + br(e.charCodeAt(2))) / 255,
          green: (16 * br(e.charCodeAt(3)) + br(e.charCodeAt(4))) / 255,
          blue: (16 * br(e.charCodeAt(5)) + br(e.charCodeAt(6))) / 255,
          alpha: (16 * br(e.charCodeAt(7)) + br(e.charCodeAt(8))) / 255
        };
    }
    return null;
  }

  function wr(e) {
    if (e.type === At.HexColorValue) return yr(e.getText());
    if (e.type === At.Function) {
      var t = e, n = t.getName(), r = t.getArguments().getChildren();
      if (!n || r.length < 3 || r.length > 4) return null;
      try {
        var i = 4 === r.length ? vr(r[3], 1) : 1;
        if ("rgb" === n || "rgba" === n) return {
          red: vr(r[0], 255),
          green: vr(r[1], 255),
          blue: vr(r[2], 255),
          alpha: i
        };
        if ("hsl" === n || "hsla" === n) return function(e, t, n, r) {
          if (void 0 === r && (r = 1), e /= 60, 0 === t) return { red: n, green: n, blue: n, alpha: r };
          var i = function(e, t, n) {
            for (; n < 0;) n += 6;
            for (; n >= 6;) n -= 6;
            return n < 1 ? (t - e) * n + e : n < 3 ? t : n < 4 ? (t - e) * (4 - n) + e : e;
          }, o = n <= .5 ? n * (t + 1) : n + t - n * t, s = 2 * n - o;
          return { red: i(s, o, e + 2), green: i(s, o, e), blue: i(s, o, e - 2), alpha: r };
        }(function(e) {
          var t = e.getText();
          if (t.match(/^([-+]?[0-9]*\.?[0-9]+)(deg)?$/)) return parseFloat(t) % 360;
          throw new Error;
        }(r[0]), vr(r[1], 100), vr(r[2], 100), i);
      } catch (e) {
        return null;
      }
    } else if (e.type === At.Identifier) {
      if (e.parent && e.parent.type !== At.Term) return null;
      var o = e.parent;
      if (o.parent && o.parent.type === At.BinaryExpression) {
        var s = o.parent;
        if (s.parent && s.parent.type === At.ListEntry && s.parent.key === s) return null;
      }
      var a = e.getText().toLowerCase();
      if ("none" === a) return null;
      var l = Jn[a];
      if (l) return yr(l);
    }
    return null;
  }

  function vr(e, t) {
    var n = e.getText().match(/^([-+]?[0-9]*\.?[0-9]+)(%?)$/);
    if (n) {
      n[2] && (t = 100);
      var r = parseFloat(n[1]) / t;
      if (r >= 0 && r <= 1) return r;
    }
    throw new Error;
  }

  function xr(e) {
    return !!e && (e = e.toLowerCase(), Pr().hasOwnProperty(e));
  }

  function kr(e) {
    if (e) {
      e = e.toLowerCase();
      var t = Pr()[e];
      return t && "standard" === t.status;
    }
    return !1;
  }

  function Cr(e) {
    return e.browsers.count > 1;
  }

  function Sr(e) {
    if (!e.description || "" === e.description) return null;
    var t = "";
    e.data && e.data.status && (t += function(e) {
      switch (e) {
        case"e":
          return "⚠️ Property is experimental. Be cautious when using it.️\n\n";
        case"n":
          return "🚨️ Property is nonstandard. Avoid using it.\n\n";
        case"o":
          return "🚨️️️ Property is obsolete. Avoid using it.\n\n";
        default:
          return "";
      }
    }(e.data.status)), t += e.description;
    var n = _r(e.browsers);
    return n && (t += "\n(" + n + ")"), e.data && e.data.syntax && (t += "\n\nSyntax: " + e.data.syntax), t;
  }

  function _r(e) {
    var t = "";
    if (!e || e.all || 0 === e.count) return null;
    for (var n in Ur) if ("string" == typeof e[n]) {
      t.length > 0 && (t += ", "), t += Ur[n];
      var r = e[n];
      r.length > 0 && (t = t + " " + r);
    }
    return t;
  }

  function Fr(e) {
    var t = { all: !1, count: 0, onCodeComplete: !1 }, n = 0;
    if (e) for (var r = 0, i = e.split(","); r < i.length; r++) {
      var o = i[r];
      if ("all" === (o = o.trim())) t.all = !0, n = Number.MAX_VALUE; else if ("none" !== o) for (var s in Ur) 0 === o.indexOf(s) && (t[s] = o.substring(s.length).trim(), n++);
    } else t.all = !0, n = Number.MAX_VALUE;
    return t.count = n, t.onCodeComplete = n > 0, t;
  }

  var Er, Tr = function() {
    function e(e) {
      this.data = e;
    }

    return Object.defineProperty(e.prototype, "name", {
      get: function() {
        return this.data.name;
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "description", {
      get: function() {
        return this.data.desc || Gn[this.data.name];
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "browsers", {
      get: function() {
        return this.browserEntry || (this.browserEntry = Fr(this.data.browsers)), this.browserEntry;
      }, enumerable: !0, configurable: !0
    }), e;
  }(), Ir = function() {
    function e(e) {
      this.data = e;
    }

    return Object.defineProperty(e.prototype, "name", {
      get: function() {
        return this.data.name;
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "description", {
      get: function() {
        return this.data.desc || Gn[this.data.name];
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "browsers", {
      get: function() {
        return this.browserEntry || (this.browserEntry = Fr(this.data.browsers)), this.browserEntry;
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "restrictions", {
      get: function() {
        return this.data.restriction ? this.data.restriction.split(",").map(function(e) {
          return e.trim();
        }) : [];
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "status", {
      get: function() {
        return function(e) {
          switch (e) {
            case"e":
              return "experimental";
            case"n":
              return "nonstandard";
            case"o":
              return "obsolete";
            default:
              return "standard";
          }
        }(this.data.status);
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "values", {
      get: function() {
        return this.data.values ? Array.isArray(this.data.values) ? this.data.values.map(function(e) {
          return new Tr(e);
        }) : [new Tr(this.data.values.value)] : [];
      }, enumerable: !0, configurable: !0
    }), e;
  }(), Ar = $n.properties;

  function Pr() {
    if (!Er) {
      Er = {};
      for (var e = 0; e < Ar.length; e++) {
        var t = Ar[e];
        Er[t.name] = new Ir(t);
      }
    }
    return Er;
  }

  var Or, zr = $n.atdirectives;
  var Lr, Dr = $n.pseudoelements;
  var Nr, Rr = $n.pseudoclasses;
  var Ur = { E: "Edge", FF: "Firefox", S: "Safari", C: "Chrome", IE: "IE", O: "Opera" }, Mr = function() {
    function e(e) {
      void 0 === e && (e = new Ot), this.keyframeRegex = /^@(\-(webkit|ms|moz|o)\-)?keyframes$/i, this.scanner = e, this.token = null, this.prevToken = null;
    }

    return e.prototype.peekIdent = function(e) {
      return Re.Ident === this.token.type && e.length === this.token.text.length && e === this.token.text.toLowerCase();
    }, e.prototype.peekKeyword = function(e) {
      return Re.AtKeyword === this.token.type && e.length === this.token.text.length && e === this.token.text.toLowerCase();
    }, e.prototype.peekDelim = function(e) {
      return Re.Delim === this.token.type && e === this.token.text;
    }, e.prototype.peek = function(e) {
      return e === this.token.type;
    }, e.prototype.peekRegExp = function(e, t) {
      return e === this.token.type && t.test(this.token.text);
    }, e.prototype.hasWhitespace = function() {
      return this.prevToken && this.prevToken.offset + this.prevToken.len !== this.token.offset;
    }, e.prototype.consumeToken = function() {
      this.prevToken = this.token, this.token = this.scanner.scan();
    }, e.prototype.mark = function() {
      return { prev: this.prevToken, curr: this.token, pos: this.scanner.pos() };
    }, e.prototype.restoreAtMark = function(e) {
      this.prevToken = e.prev, this.token = e.curr, this.scanner.goBackTo(e.pos);
    }, e.prototype.try = function(e) {
      var t = this.mark(), n = e();
      return n || (this.restoreAtMark(t), null);
    }, e.prototype.acceptOneKeyword = function(e) {
      if (Re.AtKeyword === this.token.type) for (var t = 0, n = e; t < n.length; t++) {
        var r = n[t];
        if (r.length === this.token.text.length && r === this.token.text.toLowerCase()) return this.consumeToken(), !0;
      }
      return !1;
    }, e.prototype.accept = function(e) {
      return e === this.token.type && (this.consumeToken(), !0);
    }, e.prototype.acceptIdent = function(e) {
      return !!this.peekIdent(e) && (this.consumeToken(), !0);
    }, e.prototype.acceptKeyword = function(e) {
      return !!this.peekKeyword(e) && (this.consumeToken(), !0);
    }, e.prototype.acceptDelim = function(e) {
      return !!this.peekDelim(e) && (this.consumeToken(), !0);
    }, e.prototype.acceptUnquotedString = function() {
      var e = this.scanner.pos();
      this.scanner.goBackTo(this.token.offset);
      var t = this.scanner.scanUnquotedString();
      return t ? (this.token = t, this.consumeToken(), !0) : (this.scanner.goBackTo(e), !1);
    }, e.prototype.resync = function(e, t) {
      for (; ;) {
        if (e && -1 !== e.indexOf(this.token.type)) return this.consumeToken(), !0;
        if (t && -1 !== t.indexOf(this.token.type)) return !0;
        if (this.token.type === Re.EOF) return !1;
        this.token = this.scanner.scan();
      }
    }, e.prototype.createNode = function(e) {
      return new Rt(this.token.offset, this.token.len, e);
    }, e.prototype.create = function(e) {
      var t = Object.create(e.prototype);
      return e.apply(t, [this.token.offset, this.token.len]), t;
    }, e.prototype.finish = function(e, t, n, r) {
      if (!(e instanceof Ut) && (t && this.markError(e, t, n, r), null !== this.prevToken)) {
        var i = this.prevToken.offset + this.prevToken.len;
        e.length = i > e.offset ? i - e.offset : 0;
      }
      return e;
    }, e.prototype.markError = function(e, t, n, r) {
      this.token !== this.lastErrorToken && (e.addIssue(new Mn(e, t, Nt.Error, null, this.token.offset, this.token.len)), this.lastErrorToken = this.token), (n || r) && this.resync(n, r);
    }, e.prototype.parseStylesheet = function(e) {
      var t = e.version;
      return this.internalParse(e.getText(), this._parseStylesheet, function(n, r) {
        if (e.version !== t) throw new Error("Underlying model has changed, AST is no longer valid");
        return e.getText().substr(n, r);
      });
    }, e.prototype.internalParse = function(e, t, n) {
      this.scanner.setSource(e), this.token = this.scanner.scan();
      var r = t.bind(this)();
      return r && (r.textProvider = n || function(t, n) {
        return e.substr(t, n);
      }), r;
    }, e.prototype._parseStylesheet = function() {
      var e = this.create(jt);
      e.addChild(this._parseCharset());
      var t = !1;
      do {
        var n = !1;
        do {
          n = !1;
          var r = this._parseStylesheetStatement();
          for (r && (e.addChild(r), n = !0, t = !1, this.peek(Re.EOF) || !this._needsSemicolonAfter(r) || this.accept(Re.SemiColon) || this.markError(e, Wn.SemiColonExpected)); this.accept(Re.SemiColon) || this.accept(Re.CDO) || this.accept(Re.CDC);) n = !0, t = !1;
        } while (n);
        if (this.peek(Re.EOF)) break;
        t || (this.peek(Re.AtKeyword) ? this.markError(e, Wn.UnknownAtRule) : this.markError(e, Wn.RuleOrSelectorExpected), t = !0), this.consumeToken();
      } while (!this.peek(Re.EOF));
      return this.finish(e);
    }, e.prototype._parseStylesheetStatement = function() {
      return this.peek(Re.AtKeyword) ? this._parseStylesheetAtStatement() : this._parseRuleset(!1);
    }, e.prototype._parseStylesheetAtStatement = function() {
      return this._parseImport() || this._parseMedia() || this._parsePage() || this._parseFontFace() || this._parseKeyframe() || this._parseSupports() || this._parseViewPort() || this._parseNamespace() || this._parseDocument() || this._parseUnknownAtRule();
    }, e.prototype._tryParseRuleset = function(e) {
      var t = this.mark();
      if (this._parseSelector(e)) {
        for (; this.accept(Re.Comma) && this._parseSelector(e);) ;
        if (this.accept(Re.CurlyL)) return this.restoreAtMark(t), this._parseRuleset(e);
      }
      return this.restoreAtMark(t), null;
    }, e.prototype._parseRuleset = function(e) {
      void 0 === e && (e = !1);
      var t = this.create(Kt);
      if (!t.getSelectors().addChild(this._parseSelector(e))) return null;
      for (; this.accept(Re.Comma) && t.getSelectors().addChild(this._parseSelector(e));) ;
      return this._parseBody(t, this._parseRuleSetDeclaration.bind(this));
    }, e.prototype._parseRuleSetDeclaration = function() {
      return this._parseAtApply() || this._tryParseCustomPropertyDeclaration() || this._parseDeclaration();
    }, e.prototype._parseAtApply = function() {
      if (!this.peekKeyword("@apply")) return null;
      var e = this.create($t);
      return this.consumeToken(), e.setIdentifier(this._parseIdent([Pt.Variable])) ? this.finish(e) : this.finish(e, Wn.IdentifierExpected);
    }, e.prototype._needsSemicolonAfter = function(e) {
      switch (e.type) {
        case At.Keyframe:
        case At.ViewPort:
        case At.Media:
        case At.Ruleset:
        case At.Namespace:
        case At.If:
        case At.For:
        case At.Each:
        case At.While:
        case At.MixinDeclaration:
        case At.FunctionDeclaration:
          return !1;
        case At.VariableDeclaration:
        case At.ExtendsReference:
        case At.MixinContent:
        case At.ReturnStatement:
        case At.MediaQuery:
        case At.Debug:
        case At.Import:
        case At.AtApplyRule:
        case At.CustomPropertyDeclaration:
          return !0;
        case At.MixinReference:
          return !e.getContent();
        case At.Declaration:
          return !e.getNestedProperties();
      }
      return !1;
    }, e.prototype._parseDeclarations = function(e) {
      var t = this.create(Vt);
      if (!this.accept(Re.CurlyL)) return null;
      for (var n = e(); t.addChild(n) && !this.peek(Re.CurlyR);) {
        if (this._needsSemicolonAfter(n) && !this.accept(Re.SemiColon)) return this.finish(t, Wn.SemiColonExpected, [Re.SemiColon, Re.CurlyR]);
        for (; this.accept(Re.SemiColon);) ;
        n = e();
      }
      return this.accept(Re.CurlyR) ? this.finish(t) : this.finish(t, Wn.RightCurlyExpected, [Re.CurlyR, Re.SemiColon]);
    }, e.prototype._parseBody = function(e, t) {
      return e.setDeclarations(this._parseDeclarations(t)) ? this.finish(e) : this.finish(e, Wn.LeftCurlyExpected, [Re.CurlyR, Re.SemiColon]);
    }, e.prototype._parseSelector = function(e) {
      var t = this.create(qt), n = !1;
      for (e && (n = t.addChild(this._parseCombinator())); t.addChild(this._parseSimpleSelector());) n = !0, t.addChild(this._parseCombinator());
      return n ? this.finish(t) : null;
    }, e.prototype._parseDeclaration = function(e) {
      var t = this.create(Yt);
      return t.setProperty(this._parseProperty()) ? this.accept(Re.Colon) ? (t.colonPosition = this.prevToken.offset, t.setValue(this._parseExpr()) ? (t.addChild(this._parsePrio()), this.peek(Re.SemiColon) && (t.semicolonPosition = this.token.offset), this.finish(t)) : this.finish(t, Wn.PropertyValueExpected)) : this.finish(t, Wn.ColonExpected, [Re.Colon], e) : null;
    }, e.prototype._tryParseCustomPropertyDeclaration = function() {
      if (!this.peekRegExp(Re.Ident, /^--/)) return null;
      var e = this.create(Ht);
      if (!e.setProperty(this._parseProperty())) return null;
      if (!this.accept(Re.Colon)) return this.finish(e, Wn.ColonExpected, [Re.Colon]);
      e.colonPosition = this.prevToken.offset;
      var t = this.mark();
      if (this.peek(Re.CurlyL)) {
        var n = this.create(Jt), r = this._parseDeclarations(this._parseRuleSetDeclaration.bind(this));
        if (n.setDeclarations(r) && !r.isErroneous(!0) && (n.addChild(this._parsePrio()), this.peek(Re.SemiColon))) return this.finish(n), e.setPropertySet(n), e.semicolonPosition = this.token.offset, this.finish(e);
        this.restoreAtMark(t);
      }
      var i = this._parseExpr();
      return i && !i.isErroneous(!0) && (this._parsePrio(), this.peek(Re.SemiColon)) ? (e.setValue(i), e.semicolonPosition = this.token.offset, this.finish(e)) : (this.restoreAtMark(t), e.addChild(this._parseCustomPropertyValue()), e.addChild(this._parsePrio()), this.token.offset === e.colonPosition + 1 ? this.finish(e, Wn.PropertyValueExpected) : this.finish(e));
    }, e.prototype._parseCustomPropertyValue = function() {
      var e = this.create(Rt), t = function() {
        return 0 === n && 0 === r && 0 === i;
      }, n = 0, r = 0, i = 0;
      e:for (; ;) {
        switch (this.token.type) {
          case Re.SemiColon:
          case Re.Exclamation:
            if (t()) break e;
            break;
          case Re.CurlyL:
            n++;
            break;
          case Re.CurlyR:
            if (--n < 0) {
              if (0 === r && 0 === i) break e;
              return this.finish(e, Wn.LeftCurlyExpected);
            }
            break;
          case Re.ParenthesisL:
            r++;
            break;
          case Re.ParenthesisR:
            if (--r < 0) return this.finish(e, Wn.LeftParenthesisExpected);
            break;
          case Re.BracketL:
            i++;
            break;
          case Re.BracketR:
            if (--i < 0) return this.finish(e, Wn.LeftSquareBracketExpected);
            break;
          case Re.BadString:
            break e;
          case Re.EOF:
            var o = Wn.RightCurlyExpected;
            return i > 0 ? o = Wn.RightSquareBracketExpected : r > 0 && (o = Wn.RightParenthesisExpected), this.finish(e, o);
        }
        this.consumeToken();
      }
      return this.finish(e);
    }, e.prototype._tryToParseDeclaration = function() {
      var e = this.mark();
      return this._parseProperty() && this.accept(Re.Colon) ? (this.restoreAtMark(e), this._parseDeclaration()) : (this.restoreAtMark(e), null);
    }, e.prototype._parseProperty = function() {
      var e = this.create(Xt), t = this.mark();
      return (this.acceptDelim("*") || this.acceptDelim("_")) && this.hasWhitespace() ? (this.restoreAtMark(t), null) : e.setIdentifier(this._parsePropertyIdentifier()) ? this.finish(e) : null;
    }, e.prototype._parsePropertyIdentifier = function() {
      return this._parseIdent();
    }, e.prototype._parseCharset = function() {
      if (!this.peek(Re.Charset)) return null;
      var e = this.create(Rt);
      return this.consumeToken(), this.accept(Re.String) ? this.accept(Re.SemiColon) ? this.finish(e) : this.finish(e, Wn.SemiColonExpected) : this.finish(e, Wn.IdentifierExpected);
    }, e.prototype._parseImport = function() {
      if (!this.peekKeyword("@import")) return null;
      var e = this.create(mn);
      return this.consumeToken(), e.addChild(this._parseURILiteral()) || e.addChild(this._parseStringLiteral()) ? (this.peek(Re.SemiColon) || this.peek(Re.EOF) || e.setMedialist(this._parseMediaQueryList()), this.finish(e)) : this.finish(e, Wn.URIOrStringExpected);
    }, e.prototype._parseNamespace = function() {
      if (!this.peekKeyword("@namespace")) return null;
      var e = this.create(pn);
      return this.consumeToken(), e.addChild(this._parseURILiteral()) || (e.addChild(this._parseIdent()), e.addChild(this._parseURILiteral()) || e.addChild(this._parseStringLiteral())) ? this.accept(Re.SemiColon) ? this.finish(e) : this.finish(e, Wn.SemiColonExpected) : this.finish(e, Wn.URIExpected, [Re.SemiColon]);
    }, e.prototype._parseFontFace = function() {
      if (!this.peekKeyword("@font-face")) return null;
      var e = this.create(cn);
      return this.consumeToken(), this._parseBody(e, this._parseRuleSetDeclaration.bind(this));
    }, e.prototype._parseViewPort = function() {
      if (!this.peekKeyword("@-ms-viewport") && !this.peekKeyword("@-o-viewport") && !this.peekKeyword("@viewport")) return null;
      var e = this.create(ln);
      return this.consumeToken(), this._parseBody(e, this._parseRuleSetDeclaration.bind(this));
    }, e.prototype._parseKeyframe = function() {
      if (!this.peekRegExp(Re.AtKeyword, this.keyframeRegex)) return null;
      var e = this.create(dn), t = this.create(Rt);
      return this.consumeToken(), e.setKeyword(this.finish(t)), "@-ms-keyframes" === t.getText() && this.markError(t, Wn.UnknownKeyword), e.setIdentifier(this._parseKeyframeIdent()) ? this._parseBody(e, this._parseKeyframeSelector.bind(this)) : this.finish(e, Wn.IdentifierExpected, [Re.CurlyR]);
    }, e.prototype._parseKeyframeIdent = function() {
      return this._parseIdent([Pt.Keyframe]);
    }, e.prototype._parseKeyframeSelector = function() {
      var e = this.create(un);
      if (!e.addChild(this._parseIdent()) && !this.accept(Re.Percentage)) return null;
      for (; this.accept(Re.Comma);) if (!e.addChild(this._parseIdent()) && !this.accept(Re.Percentage)) return this.finish(e, Wn.PercentageExpected);
      return this._parseBody(e, this._parseRuleSetDeclaration.bind(this));
    }, e.prototype._tryParseKeyframeSelector = function() {
      var e = this.create(un), t = this.mark();
      if (!e.addChild(this._parseIdent()) && !this.accept(Re.Percentage)) return null;
      for (; this.accept(Re.Comma);) if (!e.addChild(this._parseIdent()) && !this.accept(Re.Percentage)) return this.restoreAtMark(t), null;
      return this.peek(Re.CurlyL) ? this._parseBody(e, this._parseRuleSetDeclaration.bind(this)) : (this.restoreAtMark(t), null);
    }, e.prototype._parseSupports = function(e) {
      if (void 0 === e && (e = !1), !this.peekKeyword("@supports")) return null;
      var t = this.create(gn);
      return this.consumeToken(), t.addChild(this._parseSupportsCondition()), this._parseBody(t, this._parseSupportsDeclaration.bind(this, e));
    }, e.prototype._parseSupportsDeclaration = function(e) {
      return void 0 === e && (e = !1), e && (this._tryParseRuleset(e) || this._tryToParseDeclaration()) || this._parseStylesheetStatement();
    }, e.prototype._parseSupportsCondition = function() {
      var e = this.create(vn);
      if (this.acceptIdent("not")) e.addChild(this._parseSupportsConditionInParens()); else if (e.addChild(this._parseSupportsConditionInParens()), this.peekRegExp(Re.Ident, /^(and|or)$/i)) for (var t = this.token.text.toLowerCase(); this.acceptIdent(t);) e.addChild(this._parseSupportsConditionInParens());
      return this.finish(e);
    }, e.prototype._parseSupportsConditionInParens = function() {
      var e = this.create(vn);
      if (this.accept(Re.ParenthesisL)) return e.lParent = this.prevToken.offset, e.addChild(this._tryToParseDeclaration()) || this._parseSupportsCondition() ? this.accept(Re.ParenthesisR) ? (e.rParent = this.prevToken.offset, this.finish(e)) : this.finish(e, Wn.RightParenthesisExpected, [Re.ParenthesisR], []) : this.finish(e, Wn.ConditionExpected);
      if (this.peek(Re.Ident)) {
        var t = this.mark();
        if (this.consumeToken(), !this.hasWhitespace() && this.accept(Re.ParenthesisL)) {
          for (var n = 1; this.token.type !== Re.EOF && 0 !== n;) this.token.type === Re.ParenthesisL ? n++ : this.token.type === Re.ParenthesisR && n--, this.consumeToken();
          return this.finish(e);
        }
        this.restoreAtMark(t);
      }
      return this.finish(e, Wn.LeftParenthesisExpected, [], [Re.ParenthesisL]);
    }, e.prototype._parseMediaDeclaration = function(e) {
      return void 0 === e && (e = !1), this._tryParseRuleset(e) || this._tryToParseDeclaration() || this._parseStylesheetStatement();
    }, e.prototype._parseMedia = function(e) {
      if (void 0 === e && (e = !1), !this.peekKeyword("@media")) return null;
      var t = this.create(fn);
      return this.consumeToken(), t.addChild(this._parseMediaQueryList()) ? this._parseBody(t, this._parseMediaDeclaration.bind(this, e)) : this.finish(t, Wn.MediaQueryExpected);
    }, e.prototype._parseMediaQueryList = function() {
      var e = this.create(yn);
      if (!e.addChild(this._parseMediaQuery([Re.CurlyL]))) return this.finish(e, Wn.MediaQueryExpected);
      for (; this.accept(Re.Comma);) if (!e.addChild(this._parseMediaQuery([Re.CurlyL]))) return this.finish(e, Wn.MediaQueryExpected);
      return this.finish(e);
    }, e.prototype._parseMediaQuery = function(e) {
      var t = this.create(wn), n = !0, r = !1;
      if (!this.peek(Re.ParenthesisL)) {
        if (this.acceptIdent("only") || this.acceptIdent("not"), !t.addChild(this._parseIdent())) return null;
        r = !0, n = this.acceptIdent("and");
      }
      for (; n;) {
        if (!this.accept(Re.ParenthesisL)) return r ? this.finish(t, Wn.LeftParenthesisExpected, [], e) : null;
        if (!t.addChild(this._parseMediaFeatureName())) return this.finish(t, Wn.IdentifierExpected, [], e);
        if (this.accept(Re.Colon) && !t.addChild(this._parseExpr())) return this.finish(t, Wn.TermExpected, [], e);
        if (!this.accept(Re.ParenthesisR)) return this.finish(t, Wn.RightParenthesisExpected, [], e);
        n = this.acceptIdent("and");
      }
      return this.finish(t);
    }, e.prototype._parseMediaFeatureName = function() {
      return this._parseIdent();
    }, e.prototype._parseMedium = function() {
      var e = this.create(Rt);
      return e.addChild(this._parseIdent()) ? this.finish(e) : null;
    }, e.prototype._parsePageDeclaration = function() {
      return this._parsePageMarginBox() || this._parseRuleSetDeclaration();
    }, e.prototype._parsePage = function() {
      if (!this.peekKeyword("@page")) return null;
      var e = this.create(xn);
      if (this.consumeToken(), e.addChild(this._parsePageSelector())) for (; this.accept(Re.Comma);) if (!e.addChild(this._parsePageSelector())) return this.finish(e, Wn.IdentifierExpected);
      return this._parseBody(e, this._parsePageDeclaration.bind(this));
    }, e.prototype._parsePageMarginBox = function() {
      if (!this.peek(Re.AtKeyword)) return null;
      var e = this.create(kn);
      return this.acceptOneKeyword(["@bottom-center", "@bottom-left", "@bottom-left-corner", "@bottom-right", "@bottom-right-corner", "@left-bottom", "@left-middle", "@left-top", "@right-bottom", "@right-middle", "@right-top", "@top-center", "@top-left", "@top-left-corner", "@top-right", "@top-right-corner"]) || this.markError(e, Wn.UnknownAtRule, [], [Re.CurlyL]), this._parseBody(e, this._parseRuleSetDeclaration.bind(this));
    }, e.prototype._parsePageSelector = function() {
      if (!this.peek(Re.Ident) && !this.peek(Re.Colon)) return null;
      var e = this.create(Rt);
      return e.addChild(this._parseIdent()), this.accept(Re.Colon) && !e.addChild(this._parseIdent()) ? this.finish(e, Wn.IdentifierExpected) : this.finish(e);
    }, e.prototype._parseDocument = function() {
      if (!this.peekKeyword("@-moz-document")) return null;
      var e = this.create(bn);
      return this.consumeToken(), this.resync([], [Re.CurlyL]), this._parseBody(e, this._parseStylesheetStatement.bind(this));
    }, e.prototype._parseUnknownAtRule = function() {
      var e = this.create(Dn);
      e.addChild(this._parseUnknownAtRuleName());
      var t = 0, n = 0, r = 0, i = 0;
      e:for (; ;) {
        switch (this.token.type) {
          case Re.SemiColon:
            if (0 === n && 0 === r && 0 === i) break e;
            break;
          case Re.EOF:
            return n > 0 ? this.finish(e, Wn.RightCurlyExpected) : i > 0 ? this.finish(e, Wn.RightSquareBracketExpected) : r > 0 ? this.finish(e, Wn.RightParenthesisExpected) : this.finish(e);
          case Re.CurlyL:
            t++, n++;
            break;
          case Re.CurlyR:
            if (n--, t > 0 && 0 === n) {
              if (this.consumeToken(), i > 0) return this.finish(e, Wn.RightSquareBracketExpected);
              if (r > 0) return this.finish(e, Wn.RightParenthesisExpected);
              break e;
            }
            if (n < 0) {
              if (0 === r && 0 === i) break e;
              return this.finish(e, Wn.LeftCurlyExpected);
            }
            break;
          case Re.ParenthesisL:
            r++;
            break;
          case Re.ParenthesisR:
            if (--r < 0) return this.finish(e, Wn.LeftParenthesisExpected);
            break;
          case Re.BracketL:
            i++;
            break;
          case Re.BracketR:
            if (--i < 0) return this.finish(e, Wn.LeftSquareBracketExpected);
        }
        this.consumeToken();
      }
      return e;
    }, e.prototype._parseUnknownAtRuleName = function() {
      var e = this.create(Rt);
      return this.accept(Re.AtKeyword) ? this.finish(e) : e;
    }, e.prototype._parseOperator = function() {
      if (this.peekDelim("/") || this.peekDelim("*") || this.peekDelim("+") || this.peekDelim("-") || this.peek(Re.Dashmatch) || this.peek(Re.Includes) || this.peek(Re.SubstringOperator) || this.peek(Re.PrefixOperator) || this.peek(Re.SuffixOperator) || this.peekDelim("=")) {
        var e = this.createNode(At.Operator);
        return this.consumeToken(), this.finish(e);
      }
      return null;
    }, e.prototype._parseUnaryOperator = function() {
      if (!this.peekDelim("+") && !this.peekDelim("-")) return null;
      var e = this.create(Rt);
      return this.consumeToken(), this.finish(e);
    }, e.prototype._parseCombinator = function() {
      if (this.peekDelim(">")) {
        var e = this.create(Rt);
        this.consumeToken();
        var t = this.mark();
        if (!this.hasWhitespace() && this.acceptDelim(">")) {
          if (!this.hasWhitespace() && this.acceptDelim(">")) return e.type = At.SelectorCombinatorShadowPiercingDescendant, this.finish(e);
          this.restoreAtMark(t);
        }
        return e.type = At.SelectorCombinatorParent, this.finish(e);
      }
      if (this.peekDelim("+")) {
        e = this.create(Rt);
        return this.consumeToken(), e.type = At.SelectorCombinatorSibling, this.finish(e);
      }
      if (this.peekDelim("~")) {
        e = this.create(Rt);
        return this.consumeToken(), e.type = At.SelectorCombinatorAllSiblings, this.finish(e);
      }
      if (!this.peekDelim("/")) return null;
      e = this.create(Rt);
      this.consumeToken();
      t = this.mark();
      if (!this.hasWhitespace() && this.acceptIdent("deep") && !this.hasWhitespace() && this.acceptDelim("/")) return e.type = At.SelectorCombinatorShadowPiercingDescendant, this.finish(e);
      this.restoreAtMark(t);
    }, e.prototype._parseSimpleSelector = function() {
      var e = this.create(Wt), t = 0;
      for (e.addChild(this._parseElementName()) && t++; (0 === t || !this.hasWhitespace()) && e.addChild(this._parseSimpleSelectorBody());) t++;
      return t > 0 ? this.finish(e) : null;
    }, e.prototype._parseSimpleSelectorBody = function() {
      return this._parsePseudo() || this._parseHash() || this._parseClass() || this._parseAttrib();
    }, e.prototype._parseSelectorIdent = function() {
      return this._parseIdent();
    }, e.prototype._parseHash = function() {
      if (!this.peek(Re.Hash) && !this.peekDelim("#")) return null;
      var e = this.createNode(At.IdentifierSelector);
      if (this.acceptDelim("#")) {
        if (this.hasWhitespace() || !e.addChild(this._parseSelectorIdent())) return this.finish(e, Wn.IdentifierExpected);
      } else this.consumeToken();
      return this.finish(e);
    }, e.prototype._parseClass = function() {
      if (!this.peekDelim(".")) return null;
      var e = this.createNode(At.ClassSelector);
      return this.consumeToken(), this.hasWhitespace() || !e.addChild(this._parseSelectorIdent()) ? this.finish(e, Wn.IdentifierExpected) : this.finish(e);
    }, e.prototype._parseElementName = function() {
      var e = this.mark(), t = this.createNode(At.ElementNameSelector);
      return t.addChild(this._parseNamespacePrefix()), t.addChild(this._parseSelectorIdent()) || this.acceptDelim("*") ? this.finish(t) : (this.restoreAtMark(e), null);
    }, e.prototype._parseNamespacePrefix = function() {
      var e = this.mark(), t = this.createNode(At.NamespacePrefix);
      return !t.addChild(this._parseIdent()) && this.acceptDelim("*"), this.acceptDelim("|") ? this.finish(t) : (this.restoreAtMark(e), null);
    }, e.prototype._parseAttrib = function() {
      if (!this.peek(Re.BracketL)) return null;
      var e = this.create(Fn);
      return this.consumeToken(), e.setNamespacePrefix(this._parseNamespacePrefix()), e.setIdentifier(this._parseIdent()) ? (e.setOperator(this._parseOperator()) && (e.setValue(this._parseBinaryExpr()), this.acceptIdent("i")), this.accept(Re.BracketR) ? this.finish(e) : this.finish(e, Wn.RightSquareBracketExpected)) : this.finish(e, Wn.IdentifierExpected);
    }, e.prototype._parsePseudo = function() {
      var e = this, t = this._tryParsePseudoIdentifier();
      if (t) {
        if (!this.hasWhitespace() && this.accept(Re.ParenthesisL)) {
          if (t.addChild(this.try(function() {
            var t = e.create(Rt);
            if (!t.addChild(e._parseSelector(!1))) return null;
            for (; e.accept(Re.Comma) && t.addChild(e._parseSelector(!1));) ;
            return e.peek(Re.ParenthesisR) ? e.finish(t) : void 0;
          }) || this._parseBinaryExpr()), !this.accept(Re.ParenthesisR)) return this.finish(t, Wn.RightParenthesisExpected);
        }
        return this.finish(t);
      }
      return null;
    }, e.prototype._tryParsePseudoIdentifier = function() {
      if (!this.peek(Re.Colon)) return null;
      var e = this.mark(), t = this.createNode(At.PseudoSelector);
      return this.consumeToken(), this.hasWhitespace() ? (this.restoreAtMark(e), null) : (this.accept(Re.Colon) && this.hasWhitespace() && this.markError(t, Wn.IdentifierExpected), t.addChild(this._parseIdent()) || this.markError(t, Wn.IdentifierExpected), t);
    }, e.prototype._tryParsePrio = function() {
      var e = this.mark(), t = this._parsePrio();
      return t || (this.restoreAtMark(e), null);
    }, e.prototype._parsePrio = function() {
      if (!this.peek(Re.Exclamation)) return null;
      var e = this.createNode(At.Prio);
      return this.accept(Re.Exclamation) && this.acceptIdent("important") ? this.finish(e) : null;
    }, e.prototype._parseExpr = function(e) {
      void 0 === e && (e = !1);
      var t = this.create(Cn);
      if (!t.addChild(this._parseBinaryExpr())) return null;
      for (; ;) {
        if (this.peek(Re.Comma)) {
          if (e) return this.finish(t);
          this.consumeToken();
        }
        if (!t.addChild(this._parseBinaryExpr())) break;
      }
      return this.finish(t);
    }, e.prototype._parseNamedLine = function() {
      if (!this.peek(Re.BracketL)) return null;
      var e = this.createNode(At.GridLine);
      for (this.consumeToken(); e.addChild(this._parseIdent());) ;
      return this.accept(Re.BracketR) ? this.finish(e) : this.finish(e, Wn.RightSquareBracketExpected);
    }, e.prototype._parseBinaryExpr = function(e, t) {
      var n = this.create(Sn);
      if (!n.setLeft(e || this._parseTerm())) return null;
      if (!n.setOperator(t || this._parseOperator())) return this.finish(n);
      if (!n.setRight(this._parseTerm())) return this.finish(n, Wn.TermExpected);
      n = this.finish(n);
      var r = this._parseOperator();
      return r && (n = this._parseBinaryExpr(n, r)), this.finish(n);
    }, e.prototype._parseTerm = function() {
      var e = this.create(_n);
      return e.setOperator(this._parseUnaryOperator()), e.setExpression(this._parseURILiteral()) || e.setExpression(this._parseFunction()) || e.setExpression(this._parseIdent()) || e.setExpression(this._parseStringLiteral()) || e.setExpression(this._parseNumeric()) || e.setExpression(this._parseHexColor()) || e.setExpression(this._parseOperation()) || e.setExpression(this._parseNamedLine()) ? this.finish(e) : null;
    }, e.prototype._parseOperation = function() {
      if (!this.peek(Re.ParenthesisL)) return null;
      var e = this.create(Rt);
      return this.consumeToken(), e.addChild(this._parseExpr()), this.accept(Re.ParenthesisR) ? this.finish(e) : this.finish(e, Wn.RightParenthesisExpected);
    }, e.prototype._parseNumeric = function() {
      if (this.peek(Re.Num) || this.peek(Re.Percentage) || this.peek(Re.Resolution) || this.peek(Re.Length) || this.peek(Re.EMS) || this.peek(Re.EXS) || this.peek(Re.Angle) || this.peek(Re.Time) || this.peek(Re.Dimension) || this.peek(Re.Freq)) {
        var e = this.create(Tn);
        return this.consumeToken(), this.finish(e);
      }
      return null;
    }, e.prototype._parseStringLiteral = function() {
      if (!this.peek(Re.String) && !this.peek(Re.BadString)) return null;
      var e = this.createNode(At.StringLiteral);
      return this.consumeToken(), this.finish(e);
    }, e.prototype._parseURILiteral = function() {
      if (!this.peekRegExp(Re.Ident, /^url(-prefix)?$/i)) return null;
      var e = this.mark(), t = this.createNode(At.URILiteral);
      return this.accept(Re.Ident), this.hasWhitespace() || !this.peek(Re.ParenthesisL) ? (this.restoreAtMark(e), null) : (this.scanner.inURL = !0, this.consumeToken(), t.addChild(this._parseURLArgument()), this.scanner.inURL = !1, this.accept(Re.ParenthesisR) ? this.finish(t) : this.finish(t, Wn.RightParenthesisExpected));
    }, e.prototype._parseURLArgument = function() {
      var e = this.create(Rt);
      return this.accept(Re.String) || this.accept(Re.BadString) || this.acceptUnquotedString() ? this.finish(e) : null;
    }, e.prototype._parseIdent = function(e) {
      if (!this.peek(Re.Ident)) return null;
      var t = this.create(Mt);
      return e && (t.referenceTypes = e), t.isCustomProperty = this.peekRegExp(Re.Ident, /^--/), this.consumeToken(), this.finish(t);
    }, e.prototype._parseFunction = function() {
      var e = this.mark(), t = this.create(Qt);
      if (!t.setIdentifier(this._parseFunctionIdentifier())) return null;
      if (this.hasWhitespace() || !this.accept(Re.ParenthesisL)) return this.restoreAtMark(e), null;
      if (t.getArguments().addChild(this._parseFunctionArgument())) for (; this.accept(Re.Comma);) t.getArguments().addChild(this._parseFunctionArgument()) || this.markError(t, Wn.ExpressionExpected);
      return this.accept(Re.ParenthesisR) ? this.finish(t) : this.finish(t, Wn.RightParenthesisExpected);
    }, e.prototype._parseFunctionIdentifier = function() {
      if (!this.peek(Re.Ident)) return null;
      var e = this.create(Mt);
      if (e.referenceTypes = [Pt.Function], this.acceptIdent("progid")) {
        if (this.accept(Re.Colon)) for (; this.accept(Re.Ident) && this.acceptDelim(".");) ;
        return this.finish(e);
      }
      return this.consumeToken(), this.finish(e);
    }, e.prototype._parseFunctionArgument = function() {
      var e = this.create(en);
      return e.setValue(this._parseExpr(!0)) ? this.finish(e) : null;
    }, e.prototype._parseHexColor = function() {
      if (this.peekRegExp(Re.Hash, /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{4}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/g)) {
        var e = this.create(En);
        return this.consumeToken(), this.finish(e);
      }
      return null;
    }, e;
  }();
  var jr, Vr, Br, Kr, qr, Wr, $r, Gr, Hr, Jr, Yr, Xr, Qr, Zr, ei, ti = function() {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
      e.__proto__ = t;
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    return function(t, n) {
      function r() {
        this.constructor = t;
      }

      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
    };
  }(), ni = function() {
    function e(e, t) {
      this.offset = e, this.length = t, this.symbols = [], this.parent = null, this.children = [];
    }

    return e.prototype.addChild = function(e) {
      this.children.push(e), e.setParent(this);
    }, e.prototype.setParent = function(e) {
      this.parent = e;
    }, e.prototype.findScope = function(e, t) {
      return void 0 === t && (t = 0), this.offset <= e && this.offset + this.length > e + t || this.offset === e && this.length === t ? this.findInScope(e, t) : null;
    }, e.prototype.findInScope = function(e, t) {
      void 0 === t && (t = 0);
      var n = e + t, r = function(e, t) {
        var n = 0, r = e.length;
        if (0 === r) return 0;
        for (; n < r;) {
          var i = Math.floor((n + r) / 2);
          t(e[i]) ? r = i : n = i + 1;
        }
        return n;
      }(this.children, function(e) {
        return e.offset > n;
      });
      if (0 === r) return this;
      var i = this.children[r - 1];
      return i.offset <= e && i.offset + i.length >= e + t ? i.findInScope(e, t) : this;
    }, e.prototype.addSymbol = function(e) {
      this.symbols.push(e);
    }, e.prototype.getSymbol = function(e, t) {
      for (var n = 0; n < this.symbols.length; n++) {
        var r = this.symbols[n];
        if (r.name === e && r.type === t) return r;
      }
      return null;
    }, e.prototype.getSymbols = function() {
      return this.symbols;
    }, e;
  }(), ri = function(e) {
    function t() {
      return e.call(this, 0, Number.MAX_VALUE) || this;
    }

    return ti(t, e), t;
  }(ni), ii = function() {
    return function(e, t, n, r) {
      this.name = e, this.value = t, this.node = n, this.type = r;
    };
  }(), oi = function() {
    function e(e) {
      this.scope = e;
    }

    return e.prototype.addSymbol = function(e, t, n, r) {
      if (-1 !== e.offset) {
        var i = this.scope.findScope(e.offset, e.length);
        i && i.addSymbol(new ii(t, n, e, r));
      }
    }, e.prototype.addScope = function(e) {
      if (-1 !== e.offset) {
        var t = this.scope.findScope(e.offset, e.length);
        if (t && (t.offset !== e.offset || t.length !== e.length)) {
          var n = new ni(e.offset, e.length);
          return t.addChild(n), n;
        }
        return t;
      }
      return null;
    }, e.prototype.addSymbolToChildScope = function(e, t, n, r, i) {
      if (e && -1 !== e.offset) {
        var o = this.addScope(e);
        o && o.addSymbol(new ii(n, r, t, i));
      }
    }, e.prototype.visitNode = function(e) {
      switch (e.type) {
        case At.Keyframe:
          return this.addSymbol(e, e.getName(), void 0, Pt.Keyframe), !0;
        case At.CustomPropertyDeclaration:
          return this.visitCustomPropertyDeclarationNode(e);
        case At.VariableDeclaration:
          return this.visitVariableDeclarationNode(e);
        case At.Ruleset:
          return this.visitRuleSet(e);
        case At.MixinDeclaration:
          return this.addSymbol(e, e.getName(), void 0, Pt.Mixin), !0;
        case At.FunctionDeclaration:
          return this.addSymbol(e, e.getName(), void 0, Pt.Function), !0;
        case At.FunctionParameter:
          return this.visitFunctionParameterNode(e);
        case At.Declarations:
          return this.addScope(e), !0;
        case At.For:
          var t = e, n = t.getDeclarations();
          return n && this.addSymbolToChildScope(n, t.variable, t.variable.getName(), void 0, Pt.Variable), !0;
        case At.Each:
          var r = e, i = r.getDeclarations();
          if (i) for (var o = 0, s = r.getVariables().getChildren(); o < s.length; o++) {
            var a = s[o];
            this.addSymbolToChildScope(i, a, a.getName(), void 0, Pt.Variable);
          }
          return !0;
      }
      return !0;
    }, e.prototype.visitRuleSet = function(e) {
      var t = this.scope.findScope(e.offset, e.length);
      if (t) for (var n = 0, r = e.getSelectors().getChildren(); n < r.length; n++) {
        var i = r[n];
        i instanceof qt && 1 === i.getChildren().length && t.addSymbol(new ii(i.getChild(0).getText(), void 0, i, Pt.Rule));
      }
      return !0;
    }, e.prototype.visitVariableDeclarationNode = function(e) {
      var t = e.getValue() ? e.getValue().getText() : void 0;
      return this.addSymbol(e, e.getName(), t, Pt.Variable), !0;
    }, e.prototype.visitFunctionParameterNode = function(e) {
      var t = e.getParent().getDeclarations();
      if (t) {
        var n = e.getDefaultValue(), r = n ? n.getText() : void 0;
        this.addSymbolToChildScope(t, e, e.getName(), r, Pt.Variable);
      }
      return !0;
    }, e.prototype.visitCustomPropertyDeclarationNode = function(e) {
      var t = e.getValue() ? e.getValue().getText() : "";
      return this.addCSSVariable(e.getProperty(), e.getProperty().getName(), t, Pt.Variable), !0;
    }, e.prototype.addCSSVariable = function(e, t, n, r) {
      -1 !== e.offset && this.scope.addSymbol(new ii(t, n, e, r));
    }, e;
  }(), si = function() {
    function e(e) {
      this.global = new ri, e.acceptVisitor(new oi(this.global));
    }

    return e.prototype.findSymbolsAtOffset = function(e, t) {
      for (var n = this.global.findScope(e, 0), r = [], i = {}; n;) {
        for (var o = n.getSymbols(), s = 0; s < o.length; s++) {
          var a = o[s];
          a.type !== t || i[a.name] || (r.push(a), i[a.name] = !0);
        }
        n = n.parent;
      }
      return r;
    }, e.prototype.internalFindSymbol = function(e, t) {
      var n = e;
      if (e.parent instanceof Zt && e.parent.getParent() instanceof Bt && (n = e.parent.getParent().getDeclarations()), e.parent instanceof en && e.parent.getParent() instanceof Qt) {
        var r = e.parent.getParent().getIdentifier();
        if (r) {
          var i = this.internalFindSymbol(r, [Pt.Function]);
          i && (n = i.node.getDeclarations());
        }
      }
      if (!n) return null;
      for (var o = e.getText(), s = this.global.findScope(n.offset, n.length); s;) {
        for (var a = 0; a < t.length; a++) {
          var l = t[a], c = s.getSymbol(o, l);
          if (c) return c;
        }
        s = s.parent;
      }
      return null;
    }, e.prototype.evaluateReferenceTypes = function(e) {
      if (e instanceof Mt) {
        var t = e.referenceTypes;
        if (t) return t;
        if (e.isCustomProperty) return [Pt.Variable];
        var n = function(e) {
          var t = e.findParent(At.Declaration);
          return t && t.getValue() && t.getValue().encloses(e) ? t : null;
        }(e);
        if (n) {
          var r = n.getNonPrefixedPropertyName();
          if (("animation" === r || "animation-name" === r) && n.getValue() && n.getValue().offset === e.offset) return [Pt.Keyframe];
        }
      } else if (e instanceof Pn) return [Pt.Variable];
      return e.findParent(At.Selector) ? [Pt.Rule] : e.findParent(At.ExtendsReference) ? [Pt.Rule] : null;
    }, e.prototype.findSymbolFromNode = function(e) {
      if (!e) return null;
      for (; e.type === At.Interpolation;) e = e.getParent();
      var t = this.evaluateReferenceTypes(e);
      return t ? this.internalFindSymbol(e, t) : null;
    }, e.prototype.matchesSymbol = function(e, t) {
      if (!e) return !1;
      for (; e.type === At.Interpolation;) e = e.getParent();
      if (t.name.length !== e.length || t.name !== e.getText()) return !1;
      var n = this.evaluateReferenceTypes(e);
      return !(!n || -1 === n.indexOf(t.type)) && this.internalFindSymbol(e, n) === t;
    }, e.prototype.findSymbol = function(e, t, n) {
      for (var r = this.global.findScope(n); r;) {
        var i = r.getSymbol(e, t);
        if (i) return i;
        r = r.parent;
      }
      return null;
    }, e;
  }();

  function ai(e, t) {
    if (e.length < t.length) return !1;
    for (var n = 0; n < t.length; n++) if (e[n] !== t[n]) return !1;
    return !0;
  }

  function li(e, t) {
    var n = e.length - t.length;
    return n > 0 ? e.lastIndexOf(t) === n : 0 === n && e === t;
  }

  function ci(e, t, n) {
    void 0 === n && (n = 4);
    var r = Math.abs(e.length - t.length);
    if (r > n) return 0;
    var i, o, s = [], a = [];
    for (i = 0; i < t.length + 1; ++i) a.push(0);
    for (i = 0; i < e.length + 1; ++i) s.push(a);
    for (i = 1; i < e.length + 1; ++i) for (o = 1; o < t.length + 1; ++o) e[i - 1] === t[o - 1] ? s[i][o] = s[i - 1][o - 1] + 1 : s[i][o] = Math.max(s[i - 1][o], s[i][o - 1]);
    return s[e.length][t.length] - Math.sqrt(r);
  }

  function hi(e, t) {
    return void 0 === t && (t = !0), e ? e.length < 140 ? e : e.slice(0, 140) + (t ? "…" : "") : "";
  }

  !function(e) {
    e.create = function(e, t) {
      return { line: e, character: t };
    }, e.is = function(e) {
      var t = e;
      return Ui.objectLiteral(t) && Ui.number(t.line) && Ui.number(t.character);
    };
  }(jr || (jr = {})), function(e) {
    e.create = function(e, t, n, r) {
      if (Ui.number(e) && Ui.number(t) && Ui.number(n) && Ui.number(r)) return {
        start: jr.create(e, t),
        end: jr.create(n, r)
      };
      if (jr.is(e) && jr.is(t)) return { start: e, end: t };
      throw new Error("Range#create called with invalid arguments[" + e + ", " + t + ", " + n + ", " + r + "]");
    }, e.is = function(e) {
      var t = e;
      return Ui.objectLiteral(t) && jr.is(t.start) && jr.is(t.end);
    };
  }(Vr || (Vr = {})), function(e) {
    e.create = function(e, t) {
      return { uri: e, range: t };
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && Vr.is(t.range) && (Ui.string(t.uri) || Ui.undefined(t.uri));
    };
  }(Br || (Br = {})), function(e) {
    e.create = function(e, t, n, r) {
      return { red: e, green: t, blue: n, alpha: r };
    }, e.is = function(e) {
      var t = e;
      return Ui.number(t.red) && Ui.number(t.green) && Ui.number(t.blue) && Ui.number(t.alpha);
    };
  }(Kr || (Kr = {})), function(e) {
    e.create = function(e, t) {
      return { range: e, color: t };
    }, e.is = function(e) {
      var t = e;
      return Vr.is(t.range) && Kr.is(t.color);
    };
  }(qr || (qr = {})), function(e) {
    e.create = function(e, t, n) {
      return { label: e, textEdit: t, additionalTextEdits: n };
    }, e.is = function(e) {
      var t = e;
      return Ui.string(t.label) && (Ui.undefined(t.textEdit) || Qr.is(t)) && (Ui.undefined(t.additionalTextEdits) || Ui.typedArray(t.additionalTextEdits, Qr.is));
    };
  }(Wr || (Wr = {})), function(e) {
    e.Comment = "comment", e.Imports = "imports", e.Region = "region";
  }($r || ($r = {})), function(e) {
    e.create = function(e, t, n, r, i) {
      var o = { startLine: e, endLine: t };
      return Ui.defined(n) && (o.startCharacter = n), Ui.defined(r) && (o.endCharacter = r), Ui.defined(i) && (o.kind = i), o;
    }, e.is = function(e) {
      var t = e;
      return Ui.number(t.startLine) && Ui.number(t.startLine) && (Ui.undefined(t.startCharacter) || Ui.number(t.startCharacter)) && (Ui.undefined(t.endCharacter) || Ui.number(t.endCharacter)) && (Ui.undefined(t.kind) || Ui.string(t.kind));
    };
  }(Gr || (Gr = {})), function(e) {
    e.create = function(e, t) {
      return { location: e, message: t };
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && Br.is(t.location) && Ui.string(t.message);
    };
  }(Hr || (Hr = {})), function(e) {
    e.Error = 1, e.Warning = 2, e.Information = 3, e.Hint = 4;
  }(Jr || (Jr = {})), function(e) {
    e.create = function(e, t, n, r, i, o) {
      var s = { range: e, message: t };
      return Ui.defined(n) && (s.severity = n), Ui.defined(r) && (s.code = r), Ui.defined(i) && (s.source = i), Ui.defined(o) && (s.relatedInformation = o), s;
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && Vr.is(t.range) && Ui.string(t.message) && (Ui.number(t.severity) || Ui.undefined(t.severity)) && (Ui.number(t.code) || Ui.string(t.code) || Ui.undefined(t.code)) && (Ui.string(t.source) || Ui.undefined(t.source)) && (Ui.undefined(t.relatedInformation) || Ui.typedArray(t.relatedInformation, Hr.is));
    };
  }(Yr || (Yr = {})), function(e) {
    e.create = function(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
      var i = { title: e, command: t };
      return Ui.defined(n) && n.length > 0 && (i.arguments = n), i;
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && Ui.string(t.title) && Ui.string(t.command);
    };
  }(Xr || (Xr = {})), function(e) {
    e.replace = function(e, t) {
      return { range: e, newText: t };
    }, e.insert = function(e, t) {
      return { range: { start: e, end: e }, newText: t };
    }, e.del = function(e) {
      return { range: e, newText: "" };
    }, e.is = function(e) {
      var t = e;
      return Ui.objectLiteral(t) && Ui.string(t.newText) && Vr.is(t.range);
    };
  }(Qr || (Qr = {})), function(e) {
    e.create = function(e, t) {
      return { textDocument: e, edits: t };
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && ui.is(t.textDocument) && Array.isArray(t.edits);
    };
  }(Zr || (Zr = {})), function(e) {
    e.is = function(e) {
      var t = e;
      return t && (void 0 !== t.changes || void 0 !== t.documentChanges) && (void 0 === t.documentChanges || Ui.typedArray(t.documentChanges, Zr.is));
    };
  }(ei || (ei = {}));
  var di, ui, mi, pi, fi, gi, bi, yi, wi, vi, xi, ki, Ci, Si, _i, Fi, Ei, Ti = function() {
    function e(e) {
      this.edits = e;
    }

    return e.prototype.insert = function(e, t) {
      this.edits.push(Qr.insert(e, t));
    }, e.prototype.replace = function(e, t) {
      this.edits.push(Qr.replace(e, t));
    }, e.prototype.delete = function(e) {
      this.edits.push(Qr.del(e));
    }, e.prototype.add = function(e) {
      this.edits.push(e);
    }, e.prototype.all = function() {
      return this.edits;
    }, e.prototype.clear = function() {
      this.edits.splice(0, this.edits.length);
    }, e;
  }();
  !function() {
    function e(e) {
      var t = this;
      this._textEditChanges = Object.create(null), e && (this._workspaceEdit = e, e.documentChanges ? e.documentChanges.forEach(function(e) {
        var n = new Ti(e.edits);
        t._textEditChanges[e.textDocument.uri] = n;
      }) : e.changes && Object.keys(e.changes).forEach(function(n) {
        var r = new Ti(e.changes[n]);
        t._textEditChanges[n] = r;
      }));
    }

    Object.defineProperty(e.prototype, "edit", {
      get: function() {
        return this._workspaceEdit;
      }, enumerable: !0, configurable: !0
    }), e.prototype.getTextEditChange = function(e) {
      if (ui.is(e)) {
        if (this._workspaceEdit || (this._workspaceEdit = { documentChanges: [] }), !this._workspaceEdit.documentChanges) throw new Error("Workspace edit is not configured for versioned document changes.");
        var t = e;
        if (!(r = this._textEditChanges[t.uri])) {
          var n = { textDocument: t, edits: i = [] };
          this._workspaceEdit.documentChanges.push(n), r = new Ti(i), this._textEditChanges[t.uri] = r;
        }
        return r;
      }
      if (this._workspaceEdit || (this._workspaceEdit = { changes: Object.create(null) }), !this._workspaceEdit.changes) throw new Error("Workspace edit is not configured for normal text edit changes.");
      var r;
      if (!(r = this._textEditChanges[e])) {
        var i = [];
        this._workspaceEdit.changes[e] = i, r = new Ti(i), this._textEditChanges[e] = r;
      }
      return r;
    };
  }();
  !function(e) {
    e.create = function(e) {
      return { uri: e };
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && Ui.string(t.uri);
    };
  }(di || (di = {})), function(e) {
    e.create = function(e, t) {
      return { uri: e, version: t };
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && Ui.string(t.uri) && Ui.number(t.version);
    };
  }(ui || (ui = {})), function(e) {
    e.create = function(e, t, n, r) {
      return { uri: e, languageId: t, version: n, text: r };
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && Ui.string(t.uri) && Ui.string(t.languageId) && Ui.number(t.version) && Ui.string(t.text);
    };
  }(mi || (mi = {})), function(e) {
    e.PlainText = "plaintext", e.Markdown = "markdown";
  }(pi || (pi = {})), function(e) {
    e.is = function(t) {
      var n = t;
      return n === e.PlainText || n === e.Markdown;
    };
  }(pi || (pi = {})), function(e) {
    e.is = function(e) {
      var t = e;
      return Ui.objectLiteral(e) && pi.is(t.kind) && Ui.string(t.value);
    };
  }(fi || (fi = {})), function(e) {
    e.Text = 1, e.Method = 2, e.Function = 3, e.Constructor = 4, e.Field = 5, e.Variable = 6, e.Class = 7, e.Interface = 8, e.Module = 9, e.Property = 10, e.Unit = 11, e.Value = 12, e.Enum = 13, e.Keyword = 14, e.Snippet = 15, e.Color = 16, e.File = 17, e.Reference = 18, e.Folder = 19, e.EnumMember = 20, e.Constant = 21, e.Struct = 22, e.Event = 23, e.Operator = 24, e.TypeParameter = 25;
  }(gi || (gi = {})), function(e) {
    e.PlainText = 1, e.Snippet = 2;
  }(bi || (bi = {})), function(e) {
    e.create = function(e) {
      return { label: e };
    };
  }(yi || (yi = {})), function(e) {
    e.create = function(e, t) {
      return { items: e || [], isIncomplete: !!t };
    };
  }(wi || (wi = {})), function(e) {
    e.fromPlainText = function(e) {
      return e.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }, e.is = function(e) {
      var t = e;
      return Ui.string(t) || Ui.objectLiteral(t) && Ui.string(t.language) && Ui.string(t.value);
    };
  }(vi || (vi = {})), function(e) {
    e.is = function(e) {
      var t = e;
      return Ui.objectLiteral(t) && (fi.is(t.contents) || vi.is(t.contents) || Ui.typedArray(t.contents, vi.is)) && (void 0 === e.range || Vr.is(e.range));
    };
  }(xi || (xi = {})), function(e) {
    e.create = function(e, t) {
      return t ? { label: e, documentation: t } : { label: e };
    };
  }(ki || (ki = {})), function(e) {
    e.create = function(e, t) {
      for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
      var i = { label: e };
      return Ui.defined(t) && (i.documentation = t), Ui.defined(n) ? i.parameters = n : i.parameters = [], i;
    };
  }(Ci || (Ci = {})), function(e) {
    e.Text = 1, e.Read = 2, e.Write = 3;
  }(Si || (Si = {})), function(e) {
    e.create = function(e, t) {
      var n = { range: e };
      return Ui.number(t) && (n.kind = t), n;
    };
  }(_i || (_i = {})), function(e) {
    e.File = 1, e.Module = 2, e.Namespace = 3, e.Package = 4, e.Class = 5, e.Method = 6, e.Property = 7, e.Field = 8, e.Constructor = 9, e.Enum = 10, e.Interface = 11, e.Function = 12, e.Variable = 13, e.Constant = 14, e.String = 15, e.Number = 16, e.Boolean = 17, e.Array = 18, e.Object = 19, e.Key = 20, e.Null = 21, e.EnumMember = 22, e.Struct = 23, e.Event = 24, e.Operator = 25, e.TypeParameter = 26;
  }(Fi || (Fi = {})), function(e) {
    e.create = function(e, t, n, r, i) {
      var o = { name: e, kind: t, location: { uri: r, range: n } };
      return i && (o.containerName = i), o;
    };
  }(Ei || (Ei = {}));
  var Ii, Ai, Pi, Oi, zi, Li = function() {
    return function() {
    };
  }();
  !function(e) {
    e.create = function(e, t, n, r, i, o) {
      var s = { name: e, detail: t, kind: n, range: r, selectionRange: i };
      return void 0 !== o && (s.children = o), s;
    }, e.is = function(e) {
      var t = e;
      return t && Ui.string(t.name) && Ui.string(t.detail) && Ui.number(t.kind) && Vr.is(t.range) && Vr.is(t.selectionRange) && (void 0 === t.deprecated || Ui.boolean(t.deprecated)) && (void 0 === t.children || Array.isArray(t.children));
    };
  }(Li || (Li = {})), function(e) {
    e.QuickFix = "quickfix", e.Refactor = "refactor", e.RefactorExtract = "refactor.extract", e.RefactorInline = "refactor.inline", e.RefactorRewrite = "refactor.rewrite", e.Source = "source", e.SourceOrganizeImports = "source.organizeImports";
  }(Ii || (Ii = {})), function(e) {
    e.create = function(e, t) {
      var n = { diagnostics: e };
      return void 0 !== t && null !== t && (n.only = t), n;
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && Ui.typedArray(t.diagnostics, Yr.is) && (void 0 === t.only || Ui.typedArray(t.only, Ui.string));
    };
  }(Ai || (Ai = {})), function(e) {
    e.create = function(e, t, n) {
      var r = { title: e };
      return Xr.is(t) ? r.command = t : r.edit = t, void 0 !== n && (r.kind = n), r;
    }, e.is = function(e) {
      var t = e;
      return t && Ui.string(t.title) && (void 0 === t.diagnostics || Ui.typedArray(t.diagnostics, Yr.is)) && (void 0 === t.kind || Ui.string(t.kind)) && (void 0 !== t.edit || void 0 !== t.command) && (void 0 === t.command || Xr.is(t.command)) && (void 0 === t.edit || ei.is(t.edit));
    };
  }(Pi || (Pi = {})), function(e) {
    e.create = function(e, t) {
      var n = { range: e };
      return Ui.defined(t) && (n.data = t), n;
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && Vr.is(t.range) && (Ui.undefined(t.command) || Xr.is(t.command));
    };
  }(Oi || (Oi = {})), function(e) {
    e.create = function(e, t) {
      return { tabSize: e, insertSpaces: t };
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && Ui.number(t.tabSize) && Ui.boolean(t.insertSpaces);
    };
  }(zi || (zi = {}));
  var Di = function() {
    return function() {
    };
  }();
  !function(e) {
    e.create = function(e, t, n) {
      return { range: e, target: t, data: n };
    }, e.is = function(e) {
      var t = e;
      return Ui.defined(t) && Vr.is(t.range) && (Ui.undefined(t.target) || Ui.string(t.target));
    };
  }(Di || (Di = {}));
  var Ni, Ri;
  !function(e) {
    e.create = function(e, t, n, r) {
      return new Mi(e, t, n, r);
    }, e.is = function(e) {
      var t = e;
      return !!(Ui.defined(t) && Ui.string(t.uri) && (Ui.undefined(t.languageId) || Ui.string(t.languageId)) && Ui.number(t.lineCount) && Ui.func(t.getText) && Ui.func(t.positionAt) && Ui.func(t.offsetAt));
    }, e.applyEdits = function(e, t) {
      for (var n = e.getText(), r = function e(t, n) {
        if (t.length <= 1) return t;
        var r = t.length / 2 | 0, i = t.slice(0, r), o = t.slice(r);
        e(i, n), e(o, n);
        for (var s = 0, a = 0, l = 0; s < i.length && a < o.length;) {
          var c = n(i[s], o[a]);
          t[l++] = c <= 0 ? i[s++] : o[a++];
        }
        for (; s < i.length;) t[l++] = i[s++];
        for (; a < o.length;) t[l++] = o[a++];
        return t;
      }(t, function(e, t) {
        var n = e.range.start.line - t.range.start.line;
        return 0 === n ? e.range.start.character - t.range.start.character : n;
      }), i = n.length, o = r.length - 1; o >= 0; o--) {
        var s = r[o], a = e.offsetAt(s.range.start), l = e.offsetAt(s.range.end);
        if (!(l <= i)) throw new Error("Ovelapping edit");
        n = n.substring(0, a) + s.newText + n.substring(l, n.length), i = a;
      }
      return n;
    };
  }(Ni || (Ni = {})), function(e) {
    e.Manual = 1, e.AfterDelay = 2, e.FocusOut = 3;
  }(Ri || (Ri = {}));
  var Ui, Mi = function() {
    function e(e, t, n, r) {
      this._uri = e, this._languageId = t, this._version = n, this._content = r, this._lineOffsets = null;
    }

    return Object.defineProperty(e.prototype, "uri", {
      get: function() {
        return this._uri;
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "languageId", {
      get: function() {
        return this._languageId;
      }, enumerable: !0, configurable: !0
    }), Object.defineProperty(e.prototype, "version", {
      get: function() {
        return this._version;
      }, enumerable: !0, configurable: !0
    }), e.prototype.getText = function(e) {
      if (e) {
        var t = this.offsetAt(e.start), n = this.offsetAt(e.end);
        return this._content.substring(t, n);
      }
      return this._content;
    }, e.prototype.update = function(e, t) {
      this._content = e.text, this._version = t, this._lineOffsets = null;
    }, e.prototype.getLineOffsets = function() {
      if (null === this._lineOffsets) {
        for (var e = [], t = this._content, n = !0, r = 0; r < t.length; r++) {
          n && (e.push(r), n = !1);
          var i = t.charAt(r);
          n = "\r" === i || "\n" === i, "\r" === i && r + 1 < t.length && "\n" === t.charAt(r + 1) && r++;
        }
        n && t.length > 0 && e.push(t.length), this._lineOffsets = e;
      }
      return this._lineOffsets;
    }, e.prototype.positionAt = function(e) {
      e = Math.max(Math.min(e, this._content.length), 0);
      var t = this.getLineOffsets(), n = 0, r = t.length;
      if (0 === r) return jr.create(0, e);
      for (; n < r;) {
        var i = Math.floor((n + r) / 2);
        t[i] > e ? r = i : n = i + 1;
      }
      var o = n - 1;
      return jr.create(o, e - t[o]);
    }, e.prototype.offsetAt = function(e) {
      var t = this.getLineOffsets();
      if (e.line >= t.length) return this._content.length;
      if (e.line < 0) return 0;
      var n = t[e.line], r = e.line + 1 < t.length ? t[e.line + 1] : this._content.length;
      return Math.max(Math.min(n + e.character, r), n);
    }, Object.defineProperty(e.prototype, "lineCount", {
      get: function() {
        return this.getLineOffsets().length;
      }, enumerable: !0, configurable: !0
    }), e;
  }();
  !function(e) {
    var t = Object.prototype.toString;
    e.defined = function(e) {
      return void 0 !== e;
    }, e.undefined = function(e) {
      return void 0 === e;
    }, e.boolean = function(e) {
      return !0 === e || !1 === e;
    }, e.string = function(e) {
      return "[object String]" === t.call(e);
    }, e.number = function(e) {
      return "[object Number]" === t.call(e);
    }, e.func = function(e) {
      return "[object Function]" === t.call(e);
    }, e.objectLiteral = function(e) {
      return null !== e && "object" == typeof e;
    }, e.typedArray = function(e, t) {
      return Array.isArray(e) && e.every(t);
    };
  }(Ui || (Ui = {}));
  var ji = Bn(), Vi = bi.Snippet, Bi = function() {
    function e(e) {
      void 0 === e && (e = null), this.completionParticipants = [], this.valueTypes = [At.Identifier, At.Value, At.StringLiteral, At.URILiteral, At.NumericValue, At.HexColorValue, At.VariableName, At.Prio], this.variablePrefix = e;
    }

    return e.prototype.getSymbolContext = function() {
      return this.symbolContext || (this.symbolContext = new si(this.styleSheet)), this.symbolContext;
    }, e.prototype.setCompletionParticipants = function(e) {
      this.completionParticipants = e || [];
    }, e.prototype.doComplete = function(e, t, n) {
      this.offset = e.offsetAt(t), this.position = t, this.currentWord = function(e, t) {
        var n = t - 1, r = e.getText();
        for (; n >= 0 && -1 === ' \t\n\r":{[()]},*>+'.indexOf(r.charAt(n));) n--;
        return r.substring(n + 1, t);
      }(e, this.offset), this.defaultReplaceRange = Vr.create(jr.create(this.position.line, this.position.character - this.currentWord.length), this.position), this.textDocument = e, this.styleSheet = n;
      try {
        var r = { isIncomplete: !1, items: [] };
        this.nodePath = Dt(this.styleSheet, this.offset);
        for (var i = this.nodePath.length - 1; i >= 0; i--) {
          var o = this.nodePath[i];
          if (o instanceof Xt) this.getCompletionsForDeclarationProperty(o.getParent(), r); else if (o instanceof Cn) o.parent instanceof An ? this.getVariableProposals(null, r) : this.getCompletionsForExpression(o, r); else if (o instanceof Wt) {
            var s = o.findParent(At.ExtendsReference);
            if (s) this.getCompletionsForExtendsReference(s, o, r); else {
              var a = o.findParent(At.Ruleset);
              this.getCompletionsForSelector(a, a && a.isNested(), r);
            }
          } else if (o instanceof en) this.getCompletionsForFunctionArgument(o, o.getParent(), r); else if (o instanceof Vt) this.getCompletionsForDeclarations(o, r); else if (o instanceof In) this.getCompletionsForVariableDeclaration(o, r); else if (o instanceof Kt) this.getCompletionsForRuleSet(o, r); else if (o instanceof An) this.getCompletionsForInterpolation(o, r); else if (o instanceof an) this.getCompletionsForFunctionDeclaration(o, r); else if (o instanceof zn) this.getCompletionsForMixinReference(o, r); else if (o instanceof Qt) this.getCompletionsForFunctionArgument(null, o, r); else if (o instanceof gn) this.getCompletionsForSupports(o, r); else if (o instanceof vn) this.getCompletionsForSupportsCondition(o, r); else if (o instanceof On) this.getCompletionsForExtendsReference(o, null, r); else if (o.type === At.URILiteral) this.getCompletionForUriLiteralValue(o, r); else {
            if (null !== o.parent) continue;
            this.getCompletionForTopLevel(r);
          }
          if (r.items.length > 0 || this.offset > o.offset) return this.finalize(r);
        }
        return this.getCompletionsForStylesheet(r), 0 === r.items.length && this.variablePrefix && 0 === this.currentWord.indexOf(this.variablePrefix) && this.getVariableProposals(null, r), this.finalize(r);
      } finally {
        this.position = null, this.currentWord = null, this.textDocument = null, this.styleSheet = null, this.symbolContext = null, this.defaultReplaceRange = null, this.nodePath = null;
      }
    }, e.prototype.finalize = function(e) {
      if (e.items.some(function(e) {
        return !!e.sortText;
      })) for (var t = 0, n = e.items; t < n.length; t++) {
        var r = n[t];
        r.sortText || (r.sortText = "d");
      }
      return e;
    }, e.prototype.findInNodePath = function() {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      for (var n = this.nodePath.length - 1; n >= 0; n--) {
        var r = this.nodePath[n];
        if (-1 !== e.indexOf(r.type)) return r;
      }
      return null;
    }, e.prototype.getCompletionsForDeclarationProperty = function(e, t) {
      return this.getPropertyProposals(e, t);
    }, e.prototype.getPropertyProposals = function(e, t) {
      var n = this, r = Pr();
      for (var i in r) if (r.hasOwnProperty(i)) {
        var o = r[i];
        if (o.browsers.onCodeComplete) {
          var s = void 0, a = void 0, l = !1;
          e ? (s = this.getCompletionRange(e.getProperty()), a = o.name, $i(e.colonPosition) || (a += ": ", l = !0)) : (s = this.getCompletionRange(null), a = o.name + ": ", l = !0);
          var c = { label: o.name, documentation: Sr(o), textEdit: Qr.replace(s, a), kind: gi.Property };
          1 === o.restrictions.length && "none" === o.restrictions[0] && (l = !1), l && (c.command = {
            title: "Suggest",
            command: "editor.action.triggerSuggest"
          }), ai(o.name, "-") && (c.sortText = "x"), t.items.push(c);
        }
      }
      return this.completionParticipants.forEach(function(e) {
        e.onCssProperty && e.onCssProperty({ propertyName: n.currentWord, range: n.defaultReplaceRange });
      }), t;
    }, e.prototype.getCompletionsForDeclarationValue = function(e, t) {
      for (var n = this, r = e.getFullPropertyName(), i = Pr()[r], o = e.getValue(); o && o.hasChildren();) o = o.findChildAtOffset(this.offset, !1);
      if (this.completionParticipants.forEach(function(e) {
        e.onCssPropertyValue && e.onCssPropertyValue({
          propertyName: r,
          propertyValue: n.currentWord,
          range: n.getCompletionRange(o)
        });
      }), i) {
        for (var s = 0, a = i.restrictions; s < a.length; s++) {
          switch (a[s]) {
            case"color":
              this.getColorProposals(i, o, t);
              break;
            case"position":
              this.getPositionProposals(i, o, t);
              break;
            case"repeat":
              this.getRepeatStyleProposals(i, o, t);
              break;
            case"line-style":
              this.getLineStyleProposals(i, o, t);
              break;
            case"line-width":
              this.getLineWidthProposals(i, o, t);
              break;
            case"geometry-box":
              this.getGeometryBoxProposals(i, o, t);
              break;
            case"box":
              this.getBoxProposals(i, o, t);
              break;
            case"image":
              this.getImageProposals(i, o, t);
              break;
            case"timing-function":
              this.getTimingFunctionProposals(i, o, t);
              break;
            case"shape":
              this.getBasicShapeProposals(i, o, t);
          }
        }
        this.getValueEnumProposals(i, o, t), this.getCSSWideKeywordProposals(i, o, t), this.getUnitProposals(i, o, t);
      } else for (var l = 0, c = function(e, t) {
        var n = t.getFullPropertyName(), r = new Ki;

        function i(e) {
          return (e instanceof Mt || e instanceof Tn || e instanceof En) && r.add(e.getText()), !0;
        }

        return e.accept(function(e) {
          if (e instanceof Yt && e !== t && function(e) {
            var t = e.getFullPropertyName();
            return n === t;
          }(e)) {
            var r = e.getValue();
            r && r.accept(i);
          }
          return !0;
        }), r;
      }(this.styleSheet, e).getEntries(); l < c.length; l++) {
        var h = c[l];
        t.items.push({ label: h, textEdit: Qr.replace(this.getCompletionRange(o), h), kind: gi.Value });
      }
      return this.getVariableProposals(o, t), this.getTermProposals(i, o, t), t;
    }, e.prototype.getValueEnumProposals = function(e, t, n) {
      if (e.values) for (var r = 0, i = e.values; r < i.length; r++) {
        var o = i[r];
        if (Cr(o)) {
          var s = o.name, a = void 0;
          if (li(s, ")")) {
            var l = s.lastIndexOf("(");
            -1 !== l && (s = s.substr(0, l) + "($1)", a = Vi);
          }
          var c = {
            label: o.name,
            documentation: Sr(o),
            textEdit: Qr.replace(this.getCompletionRange(t), s),
            kind: gi.Value,
            insertTextFormat: a
          };
          n.items.push(c);
        }
      }
      return n;
    }, e.prototype.getCSSWideKeywordProposals = function(e, t, n) {
      for (var r in rr) n.items.push({
        label: r,
        documentation: rr[r],
        textEdit: Qr.replace(this.getCompletionRange(t), r),
        kind: gi.Value
      });
      return n;
    }, e.prototype.getCompletionsForInterpolation = function(e, t) {
      return this.offset >= e.offset + 2 && this.getVariableProposals(null, t), t;
    }, e.prototype.getVariableProposals = function(e, t) {
      for (var n = 0, r = this.getSymbolContext().findSymbolsAtOffset(this.offset, Pt.Variable); n < r.length; n++) {
        var i = r[n], o = ai(i.name, "--") ? "var(" + i.name + ")" : i.name, s = {
          label: i.name,
          documentation: i.value ? hi(i.value) : i.value,
          textEdit: Qr.replace(this.getCompletionRange(e), o),
          kind: gi.Variable,
          sortText: "z"
        };
        if (i.node.type === At.FunctionParameter) {
          var a = i.node.getParent();
          a.type === At.MixinDeclaration && (s.detail = ji("completion.argument", "argument from '{0}'", a.getName()));
        }
        t.items.push(s);
      }
      return t;
    }, e.prototype.getVariableProposalsForCSSVarFunction = function(e) {
      for (var t = this.getSymbolContext().findSymbolsAtOffset(this.offset, Pt.Variable), n = 0, r = t = t.filter(function(e) {
        return ai(e.name, "--");
      }); n < r.length; n++) {
        var i = r[n];
        e.items.push({
          label: i.name,
          documentation: i.value ? hi(i.value) : i.value,
          textEdit: Qr.replace(this.getCompletionRange(null), i.name),
          kind: gi.Variable
        });
      }
      return e;
    }, e.prototype.getUnitProposals = function(e, t, n) {
      var r = "0";
      if (this.currentWord.length > 0) {
        var i = this.currentWord.match(/^-?\d[\.\d+]*/);
        i && (r = i[0], n.isIncomplete = r.length === this.currentWord.length);
      } else 0 === this.currentWord.length && (n.isIncomplete = !0);
      t && t.parent && t.parent.type === At.Term && (t = t.getParent());
      for (var o = 0, s = e.restrictions; o < s.length; o++) {
        var a = s[o], l = lr[a];
        if (l) for (var c = 0, h = l; c < h.length; c++) {
          var d = r + h[c];
          n.items.push({ label: d, textEdit: Qr.replace(this.getCompletionRange(t), d), kind: gi.Unit });
        }
      }
      return n;
    }, e.prototype.getCompletionRange = function(e) {
      if (e && e.offset <= this.offset) {
        var t = -1 !== e.end ? this.textDocument.positionAt(e.end) : this.position;
        return Vr.create(this.textDocument.positionAt(e.offset), t);
      }
      return this.defaultReplaceRange;
    }, e.prototype.getColorProposals = function(e, t, n) {
      for (var r in Jn) n.items.push({
        label: r,
        documentation: Jn[r],
        textEdit: Qr.replace(this.getCompletionRange(t), r),
        kind: gi.Color
      });
      for (var r in Yn) n.items.push({
        label: r,
        documentation: Yn[r],
        textEdit: Qr.replace(this.getCompletionRange(t), r),
        kind: gi.Value
      });
      var i = new Ki;
      this.styleSheet.acceptVisitor(new Wi(i, this.offset));
      for (var o = 0, s = i.getEntries(); o < s.length; o++) {
        r = s[o];
        n.items.push({ label: r, textEdit: Qr.replace(this.getCompletionRange(t), r), kind: gi.Color });
      }
      for (var a = function(e) {
        var r = 1, i = e.func.replace(/\[?\$(\w+)\]?/g, function(e, t) {
          return "${" + r++ + ":" + t + "}";
        });
        n.items.push({
          label: e.func.substr(0, e.func.indexOf("(")),
          detail: e.func,
          documentation: e.desc,
          textEdit: Qr.replace(l.getCompletionRange(t), i),
          insertTextFormat: Vi,
          kind: gi.Function
        });
      }, l = this, c = 0, h = ir; c < h.length; c++) {
        a(h[c]);
      }
      return n;
    }, e.prototype.getPositionProposals = function(e, t, n) {
      for (var r in Xn) n.items.push({
        label: r,
        documentation: Xn[r],
        textEdit: Qr.replace(this.getCompletionRange(t), r),
        kind: gi.Value
      });
      return n;
    }, e.prototype.getRepeatStyleProposals = function(e, t, n) {
      for (var r in Qn) n.items.push({
        label: r,
        documentation: Qn[r],
        textEdit: Qr.replace(this.getCompletionRange(t), r),
        kind: gi.Value
      });
      return n;
    }, e.prototype.getLineStyleProposals = function(e, t, n) {
      for (var r in Zn) n.items.push({
        label: r,
        documentation: Zn[r],
        textEdit: Qr.replace(this.getCompletionRange(t), r),
        kind: gi.Value
      });
      return n;
    }, e.prototype.getLineWidthProposals = function(e, t, n) {
      for (var r = 0, i = er; r < i.length; r++) {
        var o = i[r];
        n.items.push({ label: o, textEdit: Qr.replace(this.getCompletionRange(t), o), kind: gi.Value });
      }
      return n;
    }, e.prototype.getGeometryBoxProposals = function(e, t, n) {
      for (var r in nr) n.items.push({
        label: r,
        documentation: nr[r],
        textEdit: Qr.replace(this.getCompletionRange(t), r),
        kind: gi.Value
      });
      return n;
    }, e.prototype.getBoxProposals = function(e, t, n) {
      for (var r in tr) n.items.push({
        label: r,
        documentation: tr[r],
        textEdit: Qr.replace(this.getCompletionRange(t), r),
        kind: gi.Value
      });
      return n;
    }, e.prototype.getImageProposals = function(e, t, n) {
      for (var r in or) {
        var i = qi(r);
        n.items.push({
          label: r,
          documentation: or[r],
          textEdit: Qr.replace(this.getCompletionRange(t), i),
          kind: gi.Function,
          insertTextFormat: r !== i ? Vi : void 0
        });
      }
      return n;
    }, e.prototype.getTimingFunctionProposals = function(e, t, n) {
      for (var r in sr) {
        var i = qi(r);
        n.items.push({
          label: r,
          documentation: sr[r],
          textEdit: Qr.replace(this.getCompletionRange(t), i),
          kind: gi.Function,
          insertTextFormat: r !== i ? Vi : void 0
        });
      }
      return n;
    }, e.prototype.getBasicShapeProposals = function(e, t, n) {
      for (var r in ar) {
        var i = qi(r);
        n.items.push({
          label: r,
          documentation: ar[r],
          textEdit: Qr.replace(this.getCompletionRange(t), i),
          kind: gi.Function,
          insertTextFormat: r !== i ? Vi : void 0
        });
      }
      return n;
    }, e.prototype.getCompletionsForStylesheet = function(e) {
      var t = this.styleSheet.findFirstChildBeforeOffset(this.offset);
      return t ? t instanceof Kt ? this.getCompletionsForRuleSet(t, e) : t instanceof gn ? this.getCompletionsForSupports(t, e) : e : this.getCompletionForTopLevel(e);
    }, e.prototype.getCompletionForTopLevel = function(e) {
      for (var t = 0, n = function() {
        if (!Or) {
          Or = [];
          for (var e = 0; e < zr.length; e++) {
            var t = zr[e];
            Or.push(new Ir(t));
          }
        }
        return Or;
      }(); t < n.length; t++) {
        var r = n[t];
        r.browsers.count > 0 && e.items.push({
          label: r.name,
          textEdit: Qr.replace(this.getCompletionRange(null), r.name),
          documentation: Sr(r),
          kind: gi.Keyword
        });
      }
      return this.getCompletionsForSelector(null, !1, e), e;
    }, e.prototype.getCompletionsForRuleSet = function(e, t) {
      var n = e.getDeclarations();
      return n && n.endsWith("}") && this.offset >= n.end ? this.getCompletionForTopLevel(t) : !n || this.offset <= n.offset ? this.getCompletionsForSelector(e, e.isNested(), t) : (e.findParent(At.Ruleset), this.getCompletionsForDeclarations(e.getDeclarations(), t));
    }, e.prototype.getCompletionsForSelector = function(e, t, n) {
      var r = this,
        i = this.findInNodePath(At.PseudoSelector, At.IdentifierSelector, At.ClassSelector, At.ElementNameSelector);
      !i && this.offset - this.currentWord.length > 0 && ":" === this.textDocument.getText()[this.offset - this.currentWord.length - 1] && (this.currentWord = ":" + this.currentWord, this.defaultReplaceRange = Vr.create(jr.create(this.position.line, this.position.character - this.currentWord.length), this.position));
      for (var o = 0, s = function() {
        if (!Nr) {
          Nr = [];
          for (var e = 0; e < Rr.length; e++) {
            var t = Rr[e];
            Nr.push(new Ir(t));
          }
        }
        return Nr;
      }(); o < s.length; o++) {
        if ((m = s[o]).browsers.onCodeComplete) {
          var a = qi(m.name), l = {
            label: m.name,
            textEdit: Qr.replace(this.getCompletionRange(i), a),
            documentation: Sr(m),
            kind: gi.Function,
            insertTextFormat: m.name !== a ? Vi : void 0
          };
          ai(m.name, ":-") && (l.sortText = "x"), n.items.push(l);
        }
      }
      for (var c = 0, h = function() {
        if (!Lr) {
          Lr = [];
          for (var e = 0; e < Dr.length; e++) {
            var t = Dr[e];
            Lr.push(new Ir(t));
          }
        }
        return Lr;
      }(); c < h.length; c++) {
        if ((m = h[c]).browsers.onCodeComplete) {
          a = qi(m.name), l = {
            label: m.name,
            textEdit: Qr.replace(this.getCompletionRange(i), a),
            documentation: Sr(m),
            kind: gi.Function,
            insertTextFormat: m.name !== a ? Vi : void 0
          };
          ai(m.name, "::-") && (l.sortText = "x"), n.items.push(l);
        }
      }
      if (!t) {
        for (var d = 0, u = cr; d < u.length; d++) {
          var m = u[d];
          n.items.push({ label: m, textEdit: Qr.replace(this.getCompletionRange(i), m), kind: gi.Keyword });
        }
        for (var p = 0, f = hr; p < f.length; p++) {
          m = f[p];
          n.items.push({ label: m, textEdit: Qr.replace(this.getCompletionRange(i), m), kind: gi.Keyword });
        }
      }
      var g = {};
      g[this.currentWord] = !0;
      var b = this.styleSheet.getTextProvider();
      if (this.styleSheet.accept(function(e) {
        if (e.type === At.SimpleSelector && e.length > 0) {
          var t = b(e.offset, e.length);
          return "." !== t.charAt(0) || g[t] || (g[t] = !0, n.items.push({
            label: t,
            textEdit: Qr.replace(r.getCompletionRange(i), t),
            kind: gi.Keyword
          })), !1;
        }
        return !0;
      }), e && e.isNested()) {
        var y = e.getSelectors().findFirstChildBeforeOffset(this.offset);
        y && 0 === e.getSelectors().getChildren().indexOf(y) && this.getPropertyProposals(null, n);
      }
      return n;
    }, e.prototype.getCompletionsForDeclarations = function(e, t) {
      if (!e || this.offset === e.offset) return t;
      var n = e.findFirstChildBeforeOffset(this.offset);
      if (!n) return this.getCompletionsForDeclarationProperty(null, t);
      if (n instanceof Gt) {
        var r = n;
        if (!$i(r.colonPosition) || this.offset <= r.colonPosition) return this.getCompletionsForDeclarationProperty(r, t);
        if ($i(r.semicolonPosition) && r.semicolonPosition < this.offset) return this.offset === r.semicolonPosition + 1 ? t : this.getCompletionsForDeclarationProperty(null, t);
        if (r instanceof Yt) return this.getCompletionsForDeclarationValue(r, t);
      } else n instanceof On ? this.getCompletionsForExtendsReference(n, null, t) : this.currentWord && "@" === this.currentWord[0] && this.getCompletionsForDeclarationProperty(null, t);
      return t;
    }, e.prototype.getCompletionsForVariableDeclaration = function(e, t) {
      return this.offset > e.colonPosition && this.getVariableProposals(e.getValue(), t), t;
    }, e.prototype.getCompletionsForExpression = function(e, t) {
      if (e.getParent() instanceof en) return this.getCompletionsForFunctionArgument(e.getParent(), e.getParent().getParent(), t), t;
      var n = e.findParent(At.Declaration);
      if (!n) return this.getTermProposals(null, null, t), t;
      var r = e.findChildAtOffset(this.offset, !0);
      return r ? r instanceof Tn || r instanceof Mt ? this.getCompletionsForDeclarationValue(n, t) : t : this.getCompletionsForDeclarationValue(n, t);
    }, e.prototype.getCompletionsForFunctionArgument = function(e, t, n) {
      return "var" === t.getIdentifier().getText() && (t.getArguments().hasChildren() && t.getArguments().getChild(0) !== e || this.getVariableProposalsForCSSVarFunction(n)), n;
    }, e.prototype.getCompletionsForFunctionDeclaration = function(e, t) {
      var n = e.getDeclarations();
      return n && this.offset > n.offset && this.offset < n.end && this.getTermProposals(null, null, t), t;
    }, e.prototype.getCompletionsForMixinReference = function(e, t) {
      for (var n = 0, r = this.getSymbolContext().findSymbolsAtOffset(this.offset, Pt.Mixin); n < r.length; n++) {
        var i = r[n];
        i.node instanceof Ln && t.items.push(this.makeTermProposal(i, i.node.getParameters(), null));
      }
      return t;
    }, e.prototype.getTermProposals = function(e, t, n) {
      for (var r = 0, i = this.getSymbolContext().findSymbolsAtOffset(this.offset, Pt.Function); r < i.length; r++) {
        var o = i[r];
        o.node instanceof an && n.items.push(this.makeTermProposal(o, o.node.getParameters(), t));
      }
      return n;
    }, e.prototype.makeTermProposal = function(e, t, n) {
      e.node;
      var r = t.getChildren().map(function(e) {
        return e instanceof Zt ? e.getName() : e.getText();
      }), i = e.name + "(" + r.map(function(e, t) {
        return "${" + (t + 1) + ":" + e + "}";
      }).join(", ") + ")";
      return {
        label: e.name,
        detail: e.name + "(" + r.join(", ") + ")",
        textEdit: Qr.replace(this.getCompletionRange(n), i),
        insertTextFormat: Vi,
        kind: gi.Function,
        sortText: "z"
      };
    }, e.prototype.getCompletionsForSupportsCondition = function(e, t) {
      var n = e.findFirstChildBeforeOffset(this.offset);
      if (n) {
        if (n instanceof Yt) return $i(n.colonPosition || this.offset <= n.colonPosition) ? this.getCompletionsForDeclarationValue(n, t) : this.getCompletionsForDeclarationProperty(n, t);
        if (n instanceof vn) return this.getCompletionsForSupportsCondition(n, t);
      }
      return $i(e.lParent) && this.offset > e.lParent && (!$i(e.rParent) || this.offset <= e.rParent) ? this.getCompletionsForDeclarationProperty(null, t) : t;
    }, e.prototype.getCompletionsForSupports = function(e, t) {
      var n = e.getDeclarations();
      if (!n || this.offset <= n.offset) {
        var r = e.findFirstChildBeforeOffset(this.offset);
        return r instanceof vn ? this.getCompletionsForSupportsCondition(r, t) : t;
      }
      return this.getCompletionForTopLevel(t);
    }, e.prototype.getCompletionsForExtendsReference = function(e, t, n) {
      return n;
    }, e.prototype.getCompletionForUriLiteralValue = function(e, t) {
      var n, r, i;
      if (0 === e.getChildren().length) {
        n = "", r = this.position;
        var o = this.textDocument.positionAt(e.offset + "url(".length);
        i = Vr.create(o, o);
      } else {
        var s = e.getChild(0);
        n = s.getText(), r = this.position, i = this.getCompletionRange(s);
      }
      return this.completionParticipants.forEach(function(e) {
        e.onCssURILiteralValue && e.onCssURILiteralValue({ uriValue: n, position: r, range: i });
      }), t;
    }, e;
  }(), Ki = function() {
    function e() {
      this.entries = {};
    }

    return e.prototype.add = function(e) {
      this.entries[e] = !0;
    }, e.prototype.getEntries = function() {
      return Object.keys(this.entries);
    }, e;
  }();

  function qi(e) {
    return e.replace(/\(\)$/, "($1)");
  }

  var Wi = function() {
    function e(e, t) {
      this.entries = e, this.currentOffset = t;
    }

    return e.prototype.visitNode = function(e) {
      return (e instanceof En || e instanceof Qt && dr(e)) && (this.currentOffset < e.offset || e.end < this.currentOffset) && this.entries.add(e.getText()), !0;
    }, e;
  }();

  function $i(e) {
    return void 0 !== e;
  }

  var Gi, Hi = function() {
    var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
      e.__proto__ = t;
    } || function(e, t) {
      for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
    };
    return function(t, n) {
      function r() {
        this.constructor = t;
      }

      e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
    };
  }(), Ji = function() {
    function e() {
    }

    return e.prototype.findAttribute = function(e) {
      if (this.attributes) for (var t = 0, n = this.attributes; t < n.length; t++) {
        var r = n[t];
        if (r.name === e) return r.value;
      }
      return null;
    }, e.prototype.addChild = function(t) {
      t instanceof e && (t.parent = this), this.children || (this.children = []), this.children.push(t);
    }, e.prototype.append = function(e) {
      if (this.attributes) {
        var t = this.attributes[this.attributes.length - 1];
        t.value = t.value + e;
      }
    }, e.prototype.prepend = function(e) {
      if (this.attributes) {
        var t = this.attributes[0];
        t.value = e + t.value;
      }
    }, e.prototype.findRoot = function() {
      for (var e = this; e.parent && !(e.parent instanceof Yi);) e = e.parent;
      return e;
    }, e.prototype.removeChild = function(e) {
      if (this.children) {
        var t = this.children.indexOf(e);
        if (-1 !== t) return this.children.splice(t, 1), !0;
      }
      return !1;
    }, e.prototype.addAttr = function(e, t) {
      this.attributes || (this.attributes = []);
      for (var n = 0, r = this.attributes; n < r.length; n++) {
        var i = r[n];
        if (i.name === e) return void(i.value += " " + t);
      }
      this.attributes.push({ name: e, value: t });
    }, e.prototype.clone = function(t) {
      void 0 === t && (t = !0);
      var n = new e;
      if (this.attributes) {
        n.attributes = [];
        for (var r = 0, i = this.attributes; r < i.length; r++) {
          var o = i[r];
          n.addAttr(o.name, o.value);
        }
      }
      if (t && this.children) {
        n.children = [];
        for (var s = 0; s < this.children.length; s++) n.addChild(this.children[s].clone());
      }
      return n;
    }, e.prototype.cloneWithParent = function() {
      var e = this.clone(!1);
      !this.parent || this.parent instanceof Yi || this.parent.cloneWithParent().addChild(e);
      return e;
    }, e;
  }(), Yi = function(e) {
    function t() {
      return null !== e && e.apply(this, arguments) || this;
    }

    return Hi(t, e), t;
  }(Ji), Xi = function(e) {
    function t(t) {
      var n = e.call(this) || this;
      return n.addAttr("name", t), n;
    }

    return Hi(t, e), t;
  }(Ji), Qi = function() {
    function e(e) {
      this.quote = e;
    }

    return e.prototype.print = function(e) {
      return this.result = [], e instanceof Yi ? this.doPrint(e.children, 0) : this.doPrint([e], 0), [{
        language: "html",
        value: this.result.join("\n")
      }];
    }, e.prototype.doPrint = function(e, t) {
      for (var n = 0, r = e; n < r.length; n++) {
        var i = r[n];
        this.doPrintElement(i, t), i.children && this.doPrint(i.children, t + 1);
      }
    }, e.prototype.writeLine = function(e, t) {
      var n = new Array(e + 1).join("  ");
      this.result.push(n + t);
    }, e.prototype.doPrintElement = function(e, t) {
      var n = e.findAttribute("name");
      if (e instanceof Xi || "…" === n) this.writeLine(t, n); else {
        var r = ["<"];
        if (n ? r.push(n) : r.push("element"), e.attributes) for (var i = 0, o = e.attributes; i < o.length; i++) {
          var s = o[i];
          if ("name" !== s.name) {
            r.push(" "), r.push(s.name);
            var a = s.value;
            a && (r.push("="), r.push(Gi.ensure(a, this.quote)));
          }
        }
        r.push(">"), this.writeLine(t, r.join(""));
      }
    }, e;
  }();

  function Zi(e, t) {
    for (var n = new Ji, r = 0, i = e.getChildren(); r < i.length; r++) {
      var o = i[r];
      switch (o.type) {
        case At.SelectorCombinator:
          if (t) {
            var s = o.getText().split("&");
            if (1 === s.length) {
              n.addAttr("name", s[0]);
              break;
            }
            if (n = t.cloneWithParent(), s[0]) n.findRoot().prepend(s[0]);
            for (var a = 1; a < s.length; a++) {
              if (a > 1) {
                var l = t.cloneWithParent();
                n.addChild(l.findRoot()), n = l;
              }
              n.append(s[a]);
            }
          }
          break;
        case At.SelectorPlaceholder:
          if ("@at-root" === o.getText()) return n;
        case At.ElementNameSelector:
          var c = o.getText();
          n.addAttr("name", "*" === c ? "element" : eo(c));
          break;
        case At.ClassSelector:
          n.addAttr("class", eo(o.getText().substring(1)));
          break;
        case At.IdentifierSelector:
          n.addAttr("id", eo(o.getText().substring(1)));
          break;
        case At.MixinDeclaration:
          n.addAttr("class", o.getName());
          break;
        case At.PseudoSelector:
          n.addAttr(eo(o.getText()), "");
          break;
        case At.AttributeSelector:
          var h = o, d = h.getIdentifier();
          if (d) {
            var u = h.getValue(), m = h.getOperator(), p = void 0;
            if (u) switch (eo(m.getText())) {
              case"|=":
                p = Gi.remove(eo(u.getText())) + "-…";
                break;
              case"^=":
                p = Gi.remove(eo(u.getText())) + "…";
                break;
              case"$=":
                p = "…" + Gi.remove(eo(u.getText()));
                break;
              case"~=":
                p = " … " + Gi.remove(eo(u.getText())) + " … ";
                break;
              case"*=":
                p = "…" + Gi.remove(eo(u.getText())) + "…";
                break;
              default:
                p = Gi.remove(eo(u.getText()));
            }
            n.addAttr(eo(d.getText()), p);
          }
      }
    }
    return n;
  }

  function eo(e) {
    var t = new Ot;
    t.setSource(e);
    var n = t.scanUnquotedString();
    return n ? n.text : e;
  }

  function to(e) {
    var t = function(e) {
      if (e.matches("@at-root")) return null;
      var t = new Yi, n = [];
      if (e.getParent() instanceof Kt) for (var r = e.getParent().getParent(); r && !io(r);) {
        if (r instanceof Kt) {
          if (r.getSelectors().matches("@at-root")) break;
          n.push(r);
        }
        r = r.getParent();
      }
      for (var i = new ro(t), o = n.length - 1; o >= 0; o--) {
        var s = n[o].getSelectors().getChild(0);
        s && i.processSelector(s);
      }
      return i.processSelector(e), t;
    }(e);
    return new Qi("\"").print(t);
  }

  function no(e) {
    var t = Zi(e);
    return new Qi("\"").print(t);
  }

  !function(e) {
    function t(e) {
      var t = e.match(/^['"](.*)["']$/);
      return t ? t[1] : e;
    }

    e.ensure = function(e, n) {
      return n + t(e) + n;
    }, e.remove = t;
  }(Gi || (Gi = {}));
  var ro = function() {
    function e(e) {
      this.prev = null, this.element = e;
    }

    return e.prototype.processSelector = function(e) {
      var t = null;
      if (!(this.element instanceof Yi) && e.getChildren().some(function(e) {
        return e.hasChildren() && e.getChild(0).type === At.SelectorCombinator;
      })) {
        var n = this.element.findRoot();
        n.parent instanceof Yi && (t = this.element, this.element = n.parent, this.element.removeChild(n), this.prev = null);
      }
      for (var r = 0, i = e.getChildren(); r < i.length; r++) {
        var o = i[r];
        if (o instanceof Wt) {
          if (this.prev instanceof Wt) {
            var s = new Xi("…");
            this.element.addChild(s), this.element = s;
          } else this.prev && (this.prev.matches("+") || this.prev.matches("~")) && (this.element = this.element.parent);
          this.prev && this.prev.matches("~") && (this.element.addChild(Zi(o)), this.element.addChild(new Xi("⋮")));
          var a = Zi(o, t), l = a.findRoot();
          this.element.addChild(l), this.element = a;
        }
        (o instanceof Wt || o.type === At.SelectorCombinatorParent || o.type === At.SelectorCombinatorShadowPiercingDescendant || o.type === At.SelectorCombinatorSibling || o.type === At.SelectorCombinatorAllSiblings) && (this.prev = o);
      }
    }, e;
  }();

  function io(e) {
    switch (e.type) {
      case At.MixinDeclaration:
      case At.Stylesheet:
        return !0;
    }
    return !1;
  }

  var oo = function() {
    function e() {
    }

    return e.prototype.doHover = function(e, t, n) {
      function r(t) {
        return Vr.create(e.positionAt(t.offset), e.positionAt(t.end));
      }

      for (var i = Dt(n, e.offsetAt(t)), o = 0; o < i.length; o++) {
        var s = i[o];
        if (s instanceof qt) return { contents: to(s), range: r(s) };
        if (s instanceof Wt) return { contents: no(s), range: r(s) };
        if (s instanceof Yt) {
          var a = s.getFullPropertyName(), l = Pr()[a];
          if (l) {
            var c = [];
            l.description && c.push(vi.fromPlainText(l.description));
            var h = _r(l.browsers);
            if (h && c.push(vi.fromPlainText(h)), c.length) return { contents: c, range: r(s) };
          }
        }
      }
      return null;
    }, e;
  }(), so = Bn(), ao = function() {
    function e() {
    }

    return e.prototype.findDefinition = function(e, t, n) {
      var r = new si(n), i = Lt(n, e.offsetAt(t));
      if (!i) return null;
      var o = r.findSymbolFromNode(i);
      return o ? { uri: e.uri, range: lo(o.node, e) } : null;
    }, e.prototype.findReferences = function(e, t, n) {
      return this.findDocumentHighlights(e, t, n).map(function(t) {
        return { uri: e.uri, range: t.range };
      });
    }, e.prototype.findDocumentHighlights = function(e, t, n) {
      var r = [], i = Lt(n, e.offsetAt(t));
      if (!i || i.type === At.Stylesheet || i.type === At.Declarations) return r;
      var o = new si(n), s = o.findSymbolFromNode(i), a = i.getText();
      return n.accept(function(t) {
        if (s) {
          if (o.matchesSymbol(t, s)) return r.push({ kind: co(t), range: lo(t, e) }), !1;
        } else i.type === t.type && i.length === t.length && a === t.getText() && r.push({
          kind: co(t),
          range: lo(t, e)
        });
        return !0;
      }), r;
    }, e.prototype.findDocumentSymbols = function(e, t) {
      var n = [];
      return t.accept(function(t) {
        var r = { name: null, kind: Fi.Class, location: null }, i = t;
        return t instanceof qt ? (r.name = t.getText(), i = t.findParent(At.Ruleset)) : t instanceof In ? (r.name = t.getName(), r.kind = Fi.Variable) : t instanceof Ln ? (r.name = t.getName(), r.kind = Fi.Method) : t instanceof an ? (r.name = t.getName(), r.kind = Fi.Function) : t instanceof dn ? r.name = so("literal.keyframes", "@keyframes {0}", t.getName()) : t instanceof cn && (r.name = so("literal.fontface", "@font-face")), r.name && (r.location = Br.create(e.uri, lo(i, e)), n.push(r)), !0;
      }), n;
    }, e.prototype.findDocumentColors = function(e, t) {
      var n = [];
      return t.accept(function(t) {
        var r = function(e, t) {
          var n = wr(e);
          if (n) {
            var r = lo(e, t);
            return { color: n, range: r };
          }
          return null;
        }(t, e);
        return r && n.push(r), !0;
      }), n;
    }, e.prototype.getColorPresentations = function(e, t, n, r) {
      var i, o = [], s = Math.round(255 * n.red), a = Math.round(255 * n.green), l = Math.round(255 * n.blue);
      i = 1 === n.alpha ? "rgb(" + s + ", " + a + ", " + l + ")" : "rgba(" + s + ", " + a + ", " + l + ", " + n.alpha + ")", o.push({
        label: i,
        textEdit: Qr.replace(r, i)
      }), i = 1 === n.alpha ? "#" + ho(s) + ho(a) + ho(l) : "#" + ho(s) + ho(a) + ho(l) + ho(Math.round(255 * n.alpha)), o.push({
        label: i,
        textEdit: Qr.replace(r, i)
      });
      var c = function(e) {
        var t = e.red, n = e.green, r = e.blue, i = e.alpha, o = Math.max(t, n, r), s = Math.min(t, n, r), a = 0, l = 0,
          c = (s + o) / 2, h = o - s;
        if (h > 0) {
          switch (l = Math.min(c <= .5 ? h / (2 * c) : h / (2 - 2 * c), 1), o) {
            case t:
              a = (n - r) / h + (n < r ? 6 : 0);
              break;
            case n:
              a = (r - t) / h + 2;
              break;
            case r:
              a = (t - n) / h + 4;
          }
          a *= 60, a = Math.round(a);
        }
        return { h: a, s: l, l: c, a: i };
      }(n);
      return i = 1 === c.a ? "hsl(" + c.h + ", " + Math.round(100 * c.s) + "%, " + Math.round(100 * c.l) + "%)" : "hsla(" + c.h + ", " + Math.round(100 * c.s) + "%, " + Math.round(100 * c.l) + "%, " + c.a + ")", o.push({
        label: i,
        textEdit: Qr.replace(r, i)
      }), o;
    }, e.prototype.doRename = function(e, t, n, r) {
      var i, o = this.findDocumentHighlights(e, t, r).map(function(e) {
        return Qr.replace(e.range, n);
      });
      return { changes: (i = {}, i[e.uri] = o, i) };
    }, e;
  }();

  function lo(e, t) {
    return Vr.create(t.positionAt(e.offset), t.positionAt(e.end));
  }

  function co(e) {
    if (e.type === At.Selector) return Si.Write;
    if (e instanceof Mt && e.parent && e.parent instanceof Xt && e.isCustomProperty) return Si.Write;
    if (e.parent) switch (e.parent.type) {
      case At.FunctionDeclaration:
      case At.MixinDeclaration:
      case At.Keyframe:
      case At.VariableDeclaration:
      case At.FunctionParameter:
        return Si.Write;
    }
    return Si.Read;
  }

  function ho(e) {
    var t = e.toString(16);
    return 2 !== t.length ? "0" + t : t;
  }

  var uo = Bn(), mo = Nt.Warning, po = Nt.Error, fo = Nt.Ignore, go = function() {
    return function(e, t, n) {
      this.id = e, this.message = t, this.defaultValue = n;
    };
  }(), bo = {
    AllVendorPrefixes: new go("compatibleVendorPrefixes", uo("rule.vendorprefixes.all", "When using a vendor-specific prefix make sure to also include all other vendor-specific properties"), fo),
    IncludeStandardPropertyWhenUsingVendorPrefix: new go("vendorPrefix", uo("rule.standardvendorprefix.all", "When using a vendor-specific prefix also include the standard property"), mo),
    DuplicateDeclarations: new go("duplicateProperties", uo("rule.duplicateDeclarations", "Do not use duplicate style definitions"), fo),
    EmptyRuleSet: new go("emptyRules", uo("rule.emptyRuleSets", "Do not use empty rulesets"), mo),
    ImportStatemement: new go("importStatement", uo("rule.importDirective", "Import statements do not load in parallel"), fo),
    BewareOfBoxModelSize: new go("boxModel", uo("rule.bewareOfBoxModelSize", "Do not use width or height when using padding or border"), fo),
    UniversalSelector: new go("universalSelector", uo("rule.universalSelector", "The universal selector (*) is known to be slow"), fo),
    ZeroWithUnit: new go("zeroUnits", uo("rule.zeroWidthUnit", "No unit for zero needed"), fo),
    RequiredPropertiesForFontFace: new go("fontFaceProperties", uo("rule.fontFaceProperties", "@font-face rule must define 'src' and 'font-family' properties"), mo),
    HexColorLength: new go("hexColorLength", uo("rule.hexColor", "Hex colors must consist of three, four, six or eight hex numbers"), po),
    ArgsInColorFunction: new go("argumentsInColorFunction", uo("rule.colorFunction", "Invalid number of parameters"), po),
    UnknownProperty: new go("unknownProperties", uo("rule.unknownProperty", "Unknown property."), mo),
    UnknownAtRules: new go("unknownAtRules", uo("rule.unknownAtRules", "Unknown at-rule."), mo),
    IEStarHack: new go("ieHack", uo("rule.ieHack", "IE hacks are only necessary when supporting IE7 and older"), fo),
    UnknownVendorSpecificProperty: new go("unknownVendorSpecificProperties", uo("rule.unknownVendorSpecificProperty", "Unknown vendor specific property."), fo),
    PropertyIgnoredDueToDisplay: new go("propertyIgnoredDueToDisplay", uo("rule.propertyIgnoredDueToDisplay", "Property is ignored due to the display."), mo),
    AvoidImportant: new go("important", uo("rule.avoidImportant", "Avoid using !important. It is an indication that the specificity of the entire CSS has gotten out of control and needs to be refactored."), fo),
    AvoidFloat: new go("float", uo("rule.avoidFloat", "Avoid using 'float'. Floats lead to fragile CSS that is easy to break if one aspect of the layout changes."), fo),
    AvoidIdSelector: new go("idSelector", uo("rule.avoidIdSelector", "Selectors should not contain IDs because these rules are too tightly coupled with the HTML."), fo)
  }, yo = function() {
    function e(e) {
      void 0 === e && (e = {}), this.conf = e;
    }

    return e.prototype.get = function(e) {
      if (this.conf.hasOwnProperty(e.id)) {
        var t = function(e) {
          switch (e) {
            case"ignore":
              return Nt.Ignore;
            case"warning":
              return Nt.Warning;
            case"error":
              return Nt.Error;
          }
          return null;
        }(this.conf[e.id]);
        if (t) return t;
      }
      return e.defaultValue;
    }, e;
  }();
  var wo = Bn(), vo = function() {
      function e() {
      }

      return e.prototype.doCodeActions = function(e, t, n, r) {
        var i = [];
        if (n.diagnostics) for (var o = 0, s = n.diagnostics; o < s.length; o++) {
          var a = s[o];
          this.appendFixesForMarker(e, r, a, i);
        }
        return i;
      }, e.prototype.getFixesForUnknownProperty = function(e, t, n, r) {
        var i = t.getName(), o = [];
        for (var s in Pr()) {
          var a = ci(i, s);
          a >= i.length / 2 && o.push({ property: s, score: a });
        }
        o.sort(function(e, t) {
          return t.score - e.score;
        });
        for (var l = 3, c = 0, h = o; c < h.length; c++) {
          var d = h[c].property, u = wo("css.codeaction.rename", "Rename to '{0}'", d), m = Qr.replace(n.range, d);
          if (r.push(Xr.create(u, "_css.applyCodeAction", e.uri, e.version, [m])), --l <= 0) return;
        }
      }, e.prototype.appendFixesForMarker = function(e, t, n, r) {
        if (n.code === bo.UnknownProperty.id) for (var i = e.offsetAt(n.range.start), o = e.offsetAt(n.range.end), s = Dt(t, i), a = s.length - 1; a >= 0; a--) {
          var l = s[a];
          if (l instanceof Yt) {
            var c = l.getProperty();
            if (c && c.offset === i && c.end === o) return void this.getFixesForUnknownProperty(e, c, n, r);
          }
        }
      }, e;
    }(), xo = Bn(), ko = function() {
      return function(e, t) {
        this.name = e, this.node = t;
      };
    }(), Co = function() {
      function e() {
        this.data = {};
      }

      return e.prototype.add = function(e, t, n) {
        var r = this.data[e];
        r || (r = { nodes: [], names: [] }, this.data[e] = r), r.names.push(t), n && r.nodes.push(n);
      }, e;
    }(), So = function() {
      function e(e, t) {
        this.warnings = [], this.settings = t, this.documentText = e.getText(), this.keyframes = new Co;
      }

      return e.entries = function(t, n, r, i) {
        var o = new e(n, r);
        return t.acceptVisitor(o), o.completeValidations(), o.getEntries(i);
      }, e.prototype.fetch = function(e, t) {
        for (var n = [], r = 0, i = e; r < i.length; r++) {
          var o = i[r];
          o.name === t && n.push(o);
        }
        return n;
      }, e.prototype.fetchWithValue = function(e, t, n) {
        for (var r = [], i = 0, o = e; i < o.length; i++) {
          var s = o[i];
          if (s.name === t) {
            var a = s.node.getValue();
            a && this.findValueInExpression(a, n) && r.push(s);
          }
        }
        return r;
      }, e.prototype.findValueInExpression = function(e, t) {
        var n = !1;
        return e.accept(function(e) {
          return e.type === At.Identifier && e.getText() === t && (n = !0), !n;
        }), n;
      }, e.prototype.getEntries = function(e) {
        return void 0 === e && (e = Nt.Warning | Nt.Error), this.warnings.filter(function(t) {
          return 0 != (t.getLevel() & e);
        });
      }, e.prototype.addEntry = function(e, t, n) {
        var r = new Mn(e, t, this.settings.get(t), n);
        this.warnings.push(r);
      }, e.prototype.getMissingNames = function(e, t) {
        e = e.slice(0);
        for (var n = 0; n < t.length; n++) {
          var r = e.indexOf(t[n]);
          -1 !== r && (e[r] = null);
        }
        var i = null;
        for (n = 0; n < e.length; n++) {
          var o = e[n];
          o && (i = null === i ? xo("namelist.single", "'{0}'", o) : xo("namelist.concatenated", "{0}, '{1}'", i, o));
        }
        return i;
      }, e.prototype.visitNode = function(e) {
        switch (e.type) {
          case At.UnknownAtRule:
            return this.visitUnknownAtRule(e);
          case At.Keyframe:
            return this.visitKeyframe(e);
          case At.FontFace:
            return this.visitFontFace(e);
          case At.Ruleset:
            return this.visitRuleSet(e);
          case At.SimpleSelector:
            return this.visitSimpleSelector(e);
          case At.Function:
            return this.visitFunction(e);
          case At.NumericValue:
            return this.visitNumericValue(e);
          case At.Import:
            return this.visitImport(e);
          case At.HexColorValue:
            return this.visitHexColorValue(e);
          case At.Prio:
            return this.visitPrio(e);
        }
        return !0;
      }, e.prototype.completeValidations = function() {
        this.validateKeyframes();
      }, e.prototype.visitUnknownAtRule = function(e) {
        var t = e.getChild(0);
        return !!t && (this.addEntry(t, bo.UnknownAtRules, "Unknown at rule " + t.getText()), !0);
      }, e.prototype.visitKeyframe = function(e) {
        var t = e.getKeyword(), n = t.getText();
        return this.keyframes.add(e.getName(), n, "@keyframes" !== n ? t : null), !0;
      }, e.prototype.validateKeyframes = function() {
        var e = ["@-webkit-keyframes", "@-moz-keyframes", "@-o-keyframes"];
        for (var t in this.keyframes.data) {
          var n = this.keyframes.data[t].names, r = -1 === n.indexOf("@keyframes");
          if (r || 1 !== n.length) {
            var i = this.getMissingNames(e, n);
            if (i || r) for (var o = 0, s = this.keyframes.data[t].nodes; o < s.length; o++) {
              var a = s[o];
              if (r) {
                var l = xo("keyframes.standardrule.missing", "Always define standard rule '@keyframes' when defining keyframes.");
                this.addEntry(a, bo.IncludeStandardPropertyWhenUsingVendorPrefix, l);
              }
              if (i) {
                l = xo("keyframes.vendorspecific.missing", "Always include all vendor specific rules: Missing: {0}", i);
                this.addEntry(a, bo.AllVendorPrefixes, l);
              }
            }
          }
        }
        return !0;
      }, e.prototype.visitSimpleSelector = function(e) {
        var t = this.documentText.charAt(e.offset);
        return 1 === e.length && "*" === t && this.addEntry(e, bo.UniversalSelector), "#" === t && this.addEntry(e, bo.AvoidIdSelector), !0;
      }, e.prototype.visitImport = function(e) {
        return this.addEntry(e, bo.ImportStatemement), !0;
      }, e.prototype.visitRuleSet = function(t) {
        var n = t.getDeclarations();
        if (!n) return !1;
        n.hasChildren() || this.addEntry(t.getSelectors(), bo.EmptyRuleSet);
        for (var r = [], i = 0, o = n.getChildren(); i < o.length; i++) {
          if ((N = o[i]) instanceof Yt) {
            var s = N;
            r.push(new ko(s.getFullPropertyName().toLowerCase(), s));
          }
        }
        if (0 === this.fetch(r, "box-sizing").length) {
          var a = this.fetch(r, "width");
          if (a.length > 0) {
            for (var l = !1, c = 0, h = ["border", "border-left", "border-right", "padding", "padding-left", "padding-right"]; c < h.length; c++) for (var d = h[c], u = 0, m = this.fetch(r, d); u < m.length; u++) {
              (O = (N = m[u]).node.getValue()) && !O.matches("none") && (this.addEntry(N.node, bo.BewareOfBoxModelSize), l = !0);
            }
            if (l) for (var p = 0, f = a; p < f.length; p++) {
              var g = f[p];
              this.addEntry(g.node, bo.BewareOfBoxModelSize);
            }
          }
          var b = this.fetch(r, "height");
          if (b.length > 0) {
            l = !1;
            for (var y = 0, w = ["border", "border-top", "border-bottom", "padding", "padding-top", "padding-bottom"]; y < w.length; y++) {
              d = w[y];
              for (var v = 0, x = this.fetch(r, d); v < x.length; v++) {
                (O = (N = x[v]).node.getValue()) && !O.matches("none") && (this.addEntry(N.node, bo.BewareOfBoxModelSize), l = !0);
              }
            }
            if (l) for (var k = 0, C = b; k < C.length; k++) {
              var S = C[k];
              this.addEntry(S.node, bo.BewareOfBoxModelSize);
            }
          }
        }
        var _ = this.fetchWithValue(r, "display", "inline");
        if (_.length > 0) for (var F = 0, E = ["width", "height", "margin-top", "margin-bottom", "float"]; F < E.length; F++) for (var T = E[F], I = this.fetch(r, T), A = 0; A < I.length; A++) {
          var P = I[A].node, O = P.getValue();
          ("float" !== T || O && !O.matches("none")) && this.addEntry(P, bo.PropertyIgnoredDueToDisplay, xo("rule.propertyIgnoredDueToDisplayInline", "Property is ignored due to the display. With 'display: inline', the width, height, margin-top, margin-bottom, and float properties have no effect."));
        }
        if ((_ = this.fetchWithValue(r, "display", "inline-block")).length > 0) for (I = this.fetch(r, "float"), A = 0; A < I.length; A++) {
          var z = I[A].node;
          (O = z.getValue()) && !O.matches("none") && this.addEntry(z, bo.PropertyIgnoredDueToDisplay, xo("rule.propertyIgnoredDueToDisplayInlineBlock", "inline-block is ignored due to the float. If 'float' has a value other than 'none', the box is floated and 'display' is treated as 'block'"));
        }
        if ((_ = this.fetchWithValue(r, "display", "block")).length > 0) for (I = this.fetch(r, "vertical-align"), A = 0; A < I.length; A++) this.addEntry(I[A].node, bo.PropertyIgnoredDueToDisplay, xo("rule.propertyIgnoredDueToDisplayBlock", "Property is ignored due to the display. With 'display: block', vertical-align should not be used."));
        var L = this.fetch(r, "float");
        for (A = 0; A < L.length; A++) this.addEntry(L[A].node, bo.AvoidFloat);
        for (var D = 0; D < r.length; D++) {
          var N;
          if ("background" !== (N = r[D]).name) if ((O = N.node.getValue()) && "-" !== this.documentText.charAt(O.offset)) {
            var R = this.fetch(r, N.name);
            if (R.length > 1) for (var U = 0; U < R.length; U++) {
              var M = R[U].node.getValue();
              M && "-" !== this.documentText.charAt(M.offset) && R[U] !== N && this.addEntry(N.node, bo.DuplicateDeclarations);
            }
          }
        }
        for (var j = new Co, V = !1, B = 0, K = n.getChildren(); B < K.length; B++) {
          var q = K[B];
          if (this.isCSSDeclaration(q)) {
            var W = (s = q).getFullPropertyName(), $ = W.charAt(0);
            if ("-" === $) {
              if ("-" !== W.charAt(1)) {
                xr(W) || this.addEntry(s.getProperty(), bo.UnknownVendorSpecificProperty);
                var G = s.getNonPrefixedPropertyName();
                j.add(G, W, s.getProperty());
              }
            } else "*" !== $ && "_" !== $ || (this.addEntry(s.getProperty(), bo.IEStarHack), W = W.substr(1)), xr(W) || this.addEntry(s.getProperty(), bo.UnknownProperty, xo("property.unknownproperty.detailed", "Unknown property: '{0}'", W)), j.add(W, W, null);
          } else V = !0;
        }
        if (!V) for (var H in j.data) {
          var J = j.data[H], Y = J.names, X = kr(H) && -1 === Y.indexOf(H);
          if (X || 1 !== Y.length) {
            for (var Q = [], Z = (D = 0, e.prefixes.length); D < Z; D++) {
              var ee = e.prefixes[D];
              kr(ee + H) && Q.push(ee + H);
            }
            var te = this.getMissingNames(Q, Y);
            if (te || X) for (var ne = 0, re = J.nodes; ne < re.length; ne++) {
              var ie = re[ne];
              if (X) {
                var oe = xo("property.standard.missing", "Also define the standard property '{0}' for compatibility", H);
                this.addEntry(ie, bo.IncludeStandardPropertyWhenUsingVendorPrefix, oe);
              }
              if (te) {
                oe = xo("property.vendorspecific.missing", "Always include all vendor specific properties: Missing: {0}", te);
                this.addEntry(ie, bo.AllVendorPrefixes, oe);
              }
            }
          }
        }
        return !0;
      }, e.prototype.visitPrio = function(e) {
        return this.addEntry(e, bo.AvoidImportant), !0;
      }, e.prototype.visitNumericValue = function(e) {
        var t = e.findParent(At.Declaration);
        if (t) {
          var n = t.getValue();
          if (n && n.offset === e.offset && n.length === e.length) {
            var r = e.getValue();
            if (!r.unit || -1 === lr.length.indexOf(r.unit.toLowerCase())) return !0;
            0 === parseFloat(r.value) && r.unit && this.addEntry(e, bo.ZeroWithUnit);
          }
        }
        return !0;
      }, e.prototype.visitFontFace = function(e) {
        var t = e.getDeclarations();
        if (t) {
          for (var n = !1, r = !1, i = !1, o = 0, s = t.getChildren(); o < s.length; o++) {
            var a = s[o];
            if (this.isCSSDeclaration(a)) {
              var l = a.getProperty().getName().toLowerCase();
              "src" === l && (n = !0), "font-family" === l && (r = !0);
            } else i = !0;
          }
          return i || n && r || this.addEntry(e, bo.RequiredPropertiesForFontFace), !0;
        }
      }, e.prototype.isCSSDeclaration = function(e) {
        if (e instanceof Yt) {
          if (!e.getValue()) return !1;
          var t = e.getProperty();
          return !(!t || t.getIdentifier().containsInterpolation());
        }
        return !1;
      }, e.prototype.visitHexColorValue = function(e) {
        var t = e.length;
        return 9 !== t && 7 !== t && 5 !== t && 4 !== t && this.addEntry(e, bo.HexColorLength), !1;
      }, e.prototype.visitFunction = function(e) {
        var t = -1, n = 0;
        switch (e.getName().toLowerCase()) {
          case"rgb(":
          case"hsl(":
            t = 3;
            break;
          case"rgba(":
          case"hsla(":
            t = 4;
        }
        return -1 !== t && (e.getArguments().accept(function(e) {
          return !(e instanceof Sn) || (n += 1, !1);
        }), n !== t && this.addEntry(e, bo.ArgsInColorFunction)), !0;
      }, e.prefixes = ["-ms-", "-moz-", "-o-", "-webkit-"], e;
    }(), _o = function() {
      function e() {
      }

      return e.prototype.configure = function(e) {
        this.settings = e;
      }, e.prototype.doValidation = function(e, t, n) {
        if (void 0 === n && (n = this.settings), n && !1 === n.validate) return [];
        var r = [];
        return r.push.apply(r, jn.entries(t)), r.push.apply(r, So.entries(t, e, new yo(n && n.lint))), r.filter(function(e) {
          return e.getLevel() !== Nt.Ignore;
        }).map(function(t) {
          var n = Vr.create(e.positionAt(t.getOffset()), e.positionAt(t.getOffset() + t.getLength()));
          return {
            code: t.getRule().id,
            source: e.languageId,
            message: t.getMessage(),
            severity: t.getLevel() === Nt.Warning ? Jr.Warning : Jr.Error,
            range: n
          };
        });
      }, e;
    }(), Fo = function() {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
        e.__proto__ = t;
      } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      };
      return function(t, n) {
        function r() {
          this.constructor = t;
        }

        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
      };
    }(), Eo = "/".charCodeAt(0), To = "\n".charCodeAt(0), Io = "\r".charCodeAt(0), Ao = "\f".charCodeAt(0),
    Po = "$".charCodeAt(0), Oo = "#".charCodeAt(0), zo = "{".charCodeAt(0), Lo = "=".charCodeAt(0),
    Do = "!".charCodeAt(0), No = "<".charCodeAt(0), Ro = ">".charCodeAt(0), Uo = ".".charCodeAt(0), Mo = Re.CustomToken,
    jo = Mo++, Vo = Mo++, Bo = (Mo++, Mo++), Ko = Mo++, qo = Mo++, Wo = Mo++, $o = Mo++, Go = function(e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return Fo(t, e), t.prototype.scanNext = function(t) {
        if (this.stream.advanceIfChar(Po)) {
          var n = ["$"];
          if (this.ident(n)) return this.finishToken(t, jo, n.join(""));
          this.stream.goBackTo(t);
        }
        return this.stream.advanceIfChars([Oo, zo]) ? this.finishToken(t, Vo) : this.stream.advanceIfChars([Lo, Lo]) ? this.finishToken(t, Bo) : this.stream.advanceIfChars([Do, Lo]) ? this.finishToken(t, Ko) : this.stream.advanceIfChar(No) ? this.stream.advanceIfChar(Lo) ? this.finishToken(t, Wo) : this.finishToken(t, Re.Delim) : this.stream.advanceIfChar(Ro) ? this.stream.advanceIfChar(Lo) ? this.finishToken(t, qo) : this.finishToken(t, Re.Delim) : this.stream.advanceIfChars([Uo, Uo, Uo]) ? this.finishToken(t, $o) : e.prototype.scanNext.call(this, t);
      }, t.prototype.comment = function() {
        return !!e.prototype.comment.call(this) || !(this.inURL || !this.stream.advanceIfChars([Eo, Eo])) && (this.stream.advanceWhileChar(function(e) {
          switch (e) {
            case To:
            case Io:
            case Ao:
              return !1;
            default:
              return !0;
          }
        }), !0);
      }, t;
    }(Ot), Ho = Bn(), Jo = function() {
      return function(e, t) {
        this.id = e, this.message = t;
      };
    }(), Yo = {
      FromExpected: new Jo("scss-fromexpected", Ho("expected.from", "'from' expected")),
      ThroughOrToExpected: new Jo("scss-throughexpected", Ho("expected.through", "'through' or 'to' expected")),
      InExpected: new Jo("scss-fromexpected", Ho("expected.in", "'in' expected"))
    }, Xo = function() {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
        e.__proto__ = t;
      } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      };
      return function(t, n) {
        function r() {
          this.constructor = t;
        }

        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
      };
    }(), Qo = function(e) {
      function t() {
        return e.call(this, new Go) || this;
      }

      return Xo(t, e), t.prototype._parseStylesheetStatement = function() {
        return this.peek(Re.AtKeyword) ? this._parseWarnAndDebug() || this._parseControlStatement() || this._parseMixinDeclaration() || this._parseMixinContent() || this._parseMixinReference() || this._parseFunctionDeclaration() || e.prototype._parseStylesheetAtStatement.call(this) : this._parseRuleset(!0) || this._parseVariableDeclaration();
      }, t.prototype._parseImport = function() {
        if (!this.peekKeyword("@import")) return null;
        var e = this.create(mn);
        if (this.consumeToken(), !e.addChild(this._parseURILiteral()) && !e.addChild(this._parseStringLiteral())) return this.finish(e, Wn.URIOrStringExpected);
        for (; this.accept(Re.Comma);) if (!e.addChild(this._parseURILiteral()) && !e.addChild(this._parseStringLiteral())) return this.finish(e, Wn.URIOrStringExpected);
        return this.peek(Re.SemiColon) || this.peek(Re.EOF) || e.setMedialist(this._parseMediaQueryList()), this.finish(e);
      }, t.prototype._parseVariableDeclaration = function(e) {
        if (void 0 === e && (e = []), !this.peek(jo)) return null;
        var t = this.create(In);
        if (!t.setVariable(this._parseVariable())) return null;
        if (!this.accept(Re.Colon)) return this.finish(t, Wn.ColonExpected);
        if (t.colonPosition = this.prevToken.offset, !t.setValue(this._parseExpr())) return this.finish(t, Wn.VariableValueExpected, [], e);
        for (; this.accept(Re.Exclamation);) {
          if (!this.peekRegExp(Re.Ident, /^(default|global)$/)) return this.finish(t, Wn.UnknownKeyword);
          this.consumeToken();
        }
        return this.peek(Re.SemiColon) && (t.semicolonPosition = this.token.offset), this.finish(t);
      }, t.prototype._parseMediaFeatureName = function() {
        return this._parseFunction() || this._parseIdent() || this._parseVariable();
      }, t.prototype._parseKeyframeSelector = function() {
        return this._tryParseKeyframeSelector() || this._parseControlStatement(this._parseKeyframeSelector.bind(this)) || this._parseVariableDeclaration() || this._parseMixinContent();
      }, t.prototype._parseVariable = function() {
        if (!this.peek(jo)) return null;
        var e = this.create(Pn);
        return this.consumeToken(), e;
      }, t.prototype._parseIdent = function(e) {
        var t = this;
        if (!this.peek(Re.Ident) && !this.peek(Vo) && !this.peekDelim("-")) return null;
        var n = this.create(Mt);
        n.referenceTypes = e;
        for (var r = !1, i = function() {
          return t.acceptDelim("-") ? (!t.hasWhitespace() && t.acceptDelim("-") && (n.isCustomProperty = !0), t.hasWhitespace() ? null : t._parseInterpolation()) : null;
        }; (this.accept(Re.Ident) || n.addChild(this._parseInterpolation() || this.try(i))) && (r = !0, !this.hasWhitespace() && this.acceptDelim("-"), !this.hasWhitespace());) ;
        return r ? this.finish(n) : null;
      }, t.prototype._parseTerm = function() {
        var t = e.prototype._parseTerm.call(this);
        return t || ((t = this.create(_n)).setExpression(this._parseVariable()) || t.setExpression(this._parseSelectorCombinator()) || t.setExpression(this._tryParsePrio()) ? this.finish(t) : null);
      }, t.prototype._parseInterpolation = function() {
        if (this.peek(Vo)) {
          var e = this.create(An);
          return this.consumeToken(), e.addChild(this._parseExpr()) || this._parseSelectorCombinator() ? this.accept(Re.CurlyR) ? this.finish(e) : this.finish(e, Wn.RightCurlyExpected) : this.accept(Re.CurlyR) ? this.finish(e) : this.finish(e, Wn.ExpressionExpected);
        }
        return null;
      }, t.prototype._parseOperator = function() {
        if (this.peek(Bo) || this.peek(Ko) || this.peek(qo) || this.peek(Wo) || this.peekDelim(">") || this.peekDelim("<") || this.peekIdent("and") || this.peekIdent("or") || this.peekDelim("%")) {
          var t = this.createNode(At.Operator);
          return this.consumeToken(), this.finish(t);
        }
        return e.prototype._parseOperator.call(this);
      }, t.prototype._parseUnaryOperator = function() {
        if (this.peekIdent("not")) {
          var t = this.create(Rt);
          return this.consumeToken(), this.finish(t);
        }
        return e.prototype._parseUnaryOperator.call(this);
      }, t.prototype._parseRuleSetDeclaration = function() {
        return this.peek(Re.AtKeyword) ? this._parseKeyframe() || this._parseImport() || this._parseMedia(!0) || this._parseFontFace() || this._parseWarnAndDebug() || this._parseControlStatement() || this._parseFunctionDeclaration() || this._parseExtends() || this._parseMixinReference() || this._parseMixinContent() || this._parseMixinDeclaration() || this._parseRuleset(!0) || this._parseSupports(!0) : this._parseVariableDeclaration() || this._tryParseRuleset(!0) || e.prototype._parseRuleSetDeclaration.call(this);
      }, t.prototype._parseDeclaration = function(e) {
        var t = this.create(Yt);
        if (!t.setProperty(this._parseProperty())) return null;
        if (!this.accept(Re.Colon)) return this.finish(t, Wn.ColonExpected, [Re.Colon], e);
        t.colonPosition = this.prevToken.offset;
        var n = !1;
        if (t.setValue(this._parseExpr()) && (n = !0, t.addChild(this._parsePrio())), this.peek(Re.CurlyL)) t.setNestedProperties(this._parseNestedProperties()); else if (!n) return this.finish(t, Wn.PropertyValueExpected);
        return this.peek(Re.SemiColon) && (t.semicolonPosition = this.token.offset), this.finish(t);
      }, t.prototype._parseNestedProperties = function() {
        var e = this.create(hn);
        return this._parseBody(e, this._parseDeclaration.bind(this));
      }, t.prototype._parseExtends = function() {
        if (this.peekKeyword("@extend")) {
          var e = this.create(On);
          if (this.consumeToken(), !e.getSelectors().addChild(this._parseSimpleSelector())) return this.finish(e, Wn.SelectorExpected);
          for (; this.accept(Re.Comma);) e.getSelectors().addChild(this._parseSimpleSelector());
          return this.accept(Re.Exclamation) && !this.acceptIdent("optional") ? this.finish(e, Wn.UnknownKeyword) : this.finish(e);
        }
        return null;
      }, t.prototype._parseSimpleSelectorBody = function() {
        return this._parseSelectorCombinator() || this._parseSelectorPlaceholder() || e.prototype._parseSimpleSelectorBody.call(this);
      }, t.prototype._parseSelectorCombinator = function() {
        if (this.peekDelim("&")) {
          var e = this.createNode(At.SelectorCombinator);
          for (this.consumeToken(); !this.hasWhitespace() && (this.acceptDelim("-") || this.accept(Re.Num) || this.accept(Re.Dimension) || e.addChild(this._parseIdent()) || this.acceptDelim("&"));) ;
          return this.finish(e);
        }
        return null;
      }, t.prototype._parseSelectorPlaceholder = function() {
        if (this.peekDelim("%")) {
          var e = this.createNode(At.SelectorPlaceholder);
          return this.consumeToken(), this._parseIdent(), this.finish(e);
        }
        if (this.peekKeyword("@at-root")) {
          e = this.createNode(At.SelectorPlaceholder);
          return this.consumeToken(), this.finish(e);
        }
        return null;
      }, t.prototype._parseElementName = function() {
        var t = this.mark(), n = e.prototype._parseElementName.call(this);
        return n && !this.hasWhitespace() && this.peek(Re.ParenthesisL) ? (this.restoreAtMark(t), null) : n;
      }, t.prototype._tryParsePseudoIdentifier = function() {
        return this._parseInterpolation() || e.prototype._tryParsePseudoIdentifier.call(this);
      }, t.prototype._parseWarnAndDebug = function() {
        if (!this.peekKeyword("@debug") && !this.peekKeyword("@warn") && !this.peekKeyword("@error")) return null;
        var e = this.createNode(At.Debug);
        return this.consumeToken(), e.addChild(this._parseExpr()), this.finish(e);
      }, t.prototype._parseControlStatement = function(e) {
        return void 0 === e && (e = this._parseRuleSetDeclaration.bind(this)), this.peek(Re.AtKeyword) ? this._parseIfStatement(e) || this._parseForStatement(e) || this._parseEachStatement(e) || this._parseWhileStatement(e) : null;
      }, t.prototype._parseIfStatement = function(e) {
        return this.peekKeyword("@if") ? this._internalParseIfStatement(e) : null;
      }, t.prototype._internalParseIfStatement = function(e) {
        var t = this.create(tn);
        if (this.consumeToken(), !t.setExpression(this._parseExpr(!0))) return this.finish(t, Wn.ExpressionExpected);
        if (this._parseBody(t, e), this.acceptKeyword("@else")) if (this.peekIdent("if")) t.setElseClause(this._internalParseIfStatement(e)); else if (this.peek(Re.CurlyL)) {
          var n = this.create(sn);
          this._parseBody(n, e), t.setElseClause(n);
        }
        return this.finish(t);
      }, t.prototype._parseForStatement = function(e) {
        if (!this.peekKeyword("@for")) return null;
        var t = this.create(nn);
        return this.consumeToken(), t.setVariable(this._parseVariable()) ? this.acceptIdent("from") ? t.addChild(this._parseBinaryExpr()) ? this.acceptIdent("to") || this.acceptIdent("through") ? t.addChild(this._parseBinaryExpr()) ? this._parseBody(t, e) : this.finish(t, Wn.ExpressionExpected, [Re.CurlyR]) : this.finish(t, Yo.ThroughOrToExpected, [Re.CurlyR]) : this.finish(t, Wn.ExpressionExpected, [Re.CurlyR]) : this.finish(t, Yo.FromExpected, [Re.CurlyR]) : this.finish(t, Wn.VariableNameExpected, [Re.CurlyR]);
      }, t.prototype._parseEachStatement = function(e) {
        if (!this.peekKeyword("@each")) return null;
        var t = this.create(rn);
        this.consumeToken();
        var n = t.getVariables();
        if (!n.addChild(this._parseVariable())) return this.finish(t, Wn.VariableNameExpected, [Re.CurlyR]);
        for (; this.accept(Re.Comma);) if (!n.addChild(this._parseVariable())) return this.finish(t, Wn.VariableNameExpected, [Re.CurlyR]);
        return this.finish(n), this.acceptIdent("in") ? t.addChild(this._parseExpr()) ? this._parseBody(t, e) : this.finish(t, Wn.ExpressionExpected, [Re.CurlyR]) : this.finish(t, Yo.InExpected, [Re.CurlyR]);
      }, t.prototype._parseWhileStatement = function(e) {
        if (!this.peekKeyword("@while")) return null;
        var t = this.create(on);
        return this.consumeToken(), t.addChild(this._parseBinaryExpr()) ? this._parseBody(t, e) : this.finish(t, Wn.ExpressionExpected, [Re.CurlyR]);
      }, t.prototype._parseFunctionBodyDeclaration = function() {
        return this._parseVariableDeclaration() || this._parseReturnStatement() || this._parseWarnAndDebug() || this._parseControlStatement(this._parseFunctionBodyDeclaration.bind(this));
      }, t.prototype._parseFunctionDeclaration = function() {
        if (!this.peekKeyword("@function")) return null;
        var e = this.create(an);
        if (this.consumeToken(), !e.setIdentifier(this._parseIdent([Pt.Function]))) return this.finish(e, Wn.IdentifierExpected, [Re.CurlyR]);
        if (!this.accept(Re.ParenthesisL)) return this.finish(e, Wn.LeftParenthesisExpected, [Re.CurlyR]);
        if (e.getParameters().addChild(this._parseParameterDeclaration())) for (; this.accept(Re.Comma);) if (!e.getParameters().addChild(this._parseParameterDeclaration())) return this.finish(e, Wn.VariableNameExpected);
        return this.accept(Re.ParenthesisR) ? this._parseBody(e, this._parseFunctionBodyDeclaration.bind(this)) : this.finish(e, Wn.RightParenthesisExpected, [Re.CurlyR]);
      }, t.prototype._parseReturnStatement = function() {
        if (!this.peekKeyword("@return")) return null;
        var e = this.createNode(At.ReturnStatement);
        return this.consumeToken(), e.addChild(this._parseExpr()) ? this.finish(e) : this.finish(e, Wn.ExpressionExpected);
      }, t.prototype._parseMixinDeclaration = function() {
        if (!this.peekKeyword("@mixin")) return null;
        var e = this.create(Ln);
        if (this.consumeToken(), !e.setIdentifier(this._parseIdent([Pt.Mixin]))) return this.finish(e, Wn.IdentifierExpected, [Re.CurlyR]);
        if (this.accept(Re.ParenthesisL)) {
          if (e.getParameters().addChild(this._parseParameterDeclaration())) for (; this.accept(Re.Comma);) if (!e.getParameters().addChild(this._parseParameterDeclaration())) return this.finish(e, Wn.VariableNameExpected);
          if (!this.accept(Re.ParenthesisR)) return this.finish(e, Wn.RightParenthesisExpected, [Re.CurlyR]);
        }
        return this._parseBody(e, this._parseRuleSetDeclaration.bind(this));
      }, t.prototype._parseParameterDeclaration = function() {
        var e = this.create(Zt);
        return e.setIdentifier(this._parseVariable()) ? (this.accept($o), this.accept(Re.Colon) && !e.setDefaultValue(this._parseExpr(!0)) ? this.finish(e, Wn.VariableValueExpected, [], [Re.Comma, Re.ParenthesisR]) : this.finish(e)) : null;
      }, t.prototype._parseMixinContent = function() {
        if (!this.peekKeyword("@content")) return null;
        var e = this.createNode(At.MixinContent);
        return this.consumeToken(), this.finish(e);
      }, t.prototype._parseMixinReference = function() {
        if (!this.peekKeyword("@include")) return null;
        var e = this.create(zn);
        if (this.consumeToken(), !e.setIdentifier(this._parseIdent([Pt.Mixin]))) return this.finish(e, Wn.IdentifierExpected, [Re.CurlyR]);
        if (this.accept(Re.ParenthesisL)) {
          if (e.getArguments().addChild(this._parseFunctionArgument())) for (; this.accept(Re.Comma);) if (!e.getArguments().addChild(this._parseFunctionArgument())) return this.finish(e, Wn.ExpressionExpected);
          if (!this.accept(Re.ParenthesisR)) return this.finish(e, Wn.RightParenthesisExpected);
        }
        if (this.peek(Re.CurlyL)) {
          var t = this.create(Bt);
          this._parseBody(t, this._parseMixinReferenceBodyStatement.bind(this)), e.setContent(t);
        }
        return this.finish(e);
      }, t.prototype._parseMixinReferenceBodyStatement = function() {
        return this._tryParseKeyframeSelector() || this._parseRuleSetDeclaration();
      }, t.prototype._parseFunctionArgument = function() {
        var e = this.create(en), t = this.mark(), n = this._parseVariable();
        if (n) if (this.accept(Re.Colon)) e.setIdentifier(n); else {
          if (this.accept($o)) return e.setValue(n), this.finish(e);
          this.restoreAtMark(t);
        }
        return e.setValue(this._parseExpr(!0)) ? (this.accept($o), e.addChild(this._parsePrio()), this.finish(e)) : null;
      }, t.prototype._parseURLArgument = function() {
        var t = this.mark(), n = e.prototype._parseURLArgument.call(this);
        if (!n || !this.peek(Re.ParenthesisR)) {
          this.restoreAtMark(t);
          var r = this.create(Rt);
          return r.addChild(this._parseBinaryExpr()), this.finish(r);
        }
        return n;
      }, t.prototype._parseOperation = function() {
        if (!this.peek(Re.ParenthesisL)) return null;
        var e = this.create(Rt);
        for (this.consumeToken(); e.addChild(this._parseListElement());) this.accept(Re.Comma);
        return this.accept(Re.ParenthesisR) ? this.finish(e) : this.finish(e, Wn.RightParenthesisExpected);
      }, t.prototype._parseListElement = function() {
        var e = this.create(Nn), t = this._parseBinaryExpr();
        if (!t) return null;
        if (this.accept(Re.Colon)) {
          if (e.setKey(t), !e.setValue(this._parseBinaryExpr())) return this.finish(e, Wn.ExpressionExpected);
        } else e.setValue(t);
        return this.finish(e);
      }, t;
    }(Mr), Zo = function() {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
        e.__proto__ = t;
      } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      };
      return function(t, n) {
        function r() {
          this.constructor = t;
        }

        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
      };
    }(), es = Bn(), ts = function(e) {
      function t() {
        return e.call(this, "$") || this;
      }

      return Zo(t, e), t.prototype.createReplaceFunction = function() {
        var e = 1;
        return function(n, r) {
          return "\\" + r + ": ${" + e++ + ":" + (t.variableDefaults[r] || "") + "}";
        };
      }, t.prototype.createFunctionProposals = function(e, t, n, r) {
        for (var i = 0, o = e; i < o.length; i++) {
          var s = o[i], a = s.func.replace(/\[?(\$\w+)\]?/g, this.createReplaceFunction()), l = {
            label: s.func.substr(0, s.func.indexOf("(")),
            detail: s.func,
            documentation: s.desc,
            textEdit: Qr.replace(this.getCompletionRange(t), a),
            insertTextFormat: bi.Snippet,
            kind: gi.Function
          };
          n && (l.sortText = "z"), r.items.push(l);
        }
        return r;
      }, t.prototype.getCompletionsForSelector = function(n, r, i) {
        return this.createFunctionProposals(t.selectorFuncs, void 0, !0, i), e.prototype.getCompletionsForSelector.call(this, n, r, i);
      }, t.prototype.getTermProposals = function(n, r, i) {
        var o = t.builtInFuncs;
        return n && (o = o.filter(function(e) {
          return !e.type || -1 !== n.restrictions.indexOf(e.type);
        })), this.createFunctionProposals(o, r, !0, i), e.prototype.getTermProposals.call(this, n, r, i);
      }, t.prototype.getColorProposals = function(n, r, i) {
        return this.createFunctionProposals(t.colorProposals, r, !1, i), e.prototype.getColorProposals.call(this, n, r, i);
      }, t.prototype.getCompletionsForDeclarationProperty = function(t, n) {
        return this.getCompletionForAtDirectives(n), this.getCompletionsForSelector(null, !0, n), e.prototype.getCompletionsForDeclarationProperty.call(this, t, n);
      }, t.prototype.getCompletionsForExtendsReference = function(e, t, n) {
        for (var r = 0, i = this.getSymbolContext().findSymbolsAtOffset(this.offset, Pt.Rule); r < i.length; r++) {
          var o = i[r],
            s = { label: o.name, textEdit: Qr.replace(this.getCompletionRange(t), o.name), kind: gi.Function };
          n.items.push(s);
        }
        return n;
      }, t.prototype.getCompletionForAtDirectives = function(e) {
        var n;
        return (n = e.items).push.apply(n, t.scssAtDirectives), e;
      }, t.prototype.getCompletionForTopLevel = function(t) {
        return this.getCompletionForAtDirectives(t), e.prototype.getCompletionForTopLevel.call(this, t), t;
      }, t.variableDefaults = {
        $red: "1",
        $green: "2",
        $blue: "3",
        $alpha: "1.0",
        $color: "#000000",
        $weight: "0.5",
        $hue: "0",
        $saturation: "0%",
        $lightness: "0%",
        $degrees: "0",
        $amount: "0",
        $string: "\"\"",
        $substring: "\"s\"",
        $number: "0",
        $limit: "1"
      }, t.colorProposals = [{
        func: "red($color)",
        desc: es("scss.builtin.red", "Gets the red component of a color.")
      }, {
        func: "green($color)",
        desc: es("scss.builtin.green", "Gets the green component of a color.")
      }, {
        func: "blue($color)",
        desc: es("scss.builtin.blue", "Gets the blue component of a color.")
      }, {
        func: "mix($color, $color, [$weight])",
        desc: es("scss.builtin.mix", "Mixes two colors together.")
      }, {
        func: "hue($color)",
        desc: es("scss.builtin.hue", "Gets the hue component of a color.")
      }, {
        func: "saturation($color)",
        desc: es("scss.builtin.saturation", "Gets the saturation component of a color.")
      }, {
        func: "lightness($color)",
        desc: es("scss.builtin.lightness", "Gets the lightness component of a color.")
      }, {
        func: "adjust-hue($color, $degrees)",
        desc: es("scss.builtin.adjust-hue", "Changes the hue of a color.")
      }, {
        func: "lighten($color, $amount)",
        desc: es("scss.builtin.lighten", "Makes a color lighter.")
      }, {
        func: "darken($color, $amount)",
        desc: es("scss.builtin.darken", "Makes a color darker.")
      }, {
        func: "saturate($color, $amount)",
        desc: es("scss.builtin.saturate", "Makes a color more saturated.")
      }, {
        func: "desaturate($color, $amount)",
        desc: es("scss.builtin.desaturate", "Makes a color less saturated.")
      }, {
        func: "grayscale($color)",
        desc: es("scss.builtin.grayscale", "Converts a color to grayscale.")
      }, {
        func: "complement($color)",
        desc: es("scss.builtin.complement", "Returns the complement of a color.")
      }, {
        func: "invert($color)",
        desc: es("scss.builtin.invert", "Returns the inverse of a color.")
      }, {
        func: "alpha($color)",
        desc: es("scss.builtin.alpha", "Gets the opacity component of a color.")
      }, {
        func: "opacity($color)",
        desc: "Gets the alpha component (opacity) of a color."
      }, {
        func: "rgba($color, $alpha)",
        desc: es("scss.builtin.rgba", "Changes the alpha component for a color.")
      }, {
        func: "opacify($color, $amount)",
        desc: es("scss.builtin.opacify", "Makes a color more opaque.")
      }, {
        func: "fade-in($color, $amount)",
        desc: es("scss.builtin.fade-in", "Makes a color more opaque.")
      }, {
        func: "transparentize($color, $amount)",
        desc: es("scss.builtin.transparentize", "Makes a color more transparent.")
      }, {
        func: "fade-out($color, $amount)",
        desc: es("scss.builtin.fade-out", "Makes a color more transparent.")
      }, {
        func: "adjust-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])",
        desc: es("scss.builtin.adjust-color", "Increases or decreases one or more components of a color.")
      }, {
        func: "scale-color($color, [$red], [$green], [$blue], [$saturation], [$lightness], [$alpha])",
        desc: es("scss.builtin.scale-color", "Fluidly scales one or more properties of a color.")
      }, {
        func: "change-color($color, [$red], [$green], [$blue], [$hue], [$saturation], [$lightness], [$alpha])",
        desc: es("scss.builtin.change-color", "Changes one or more properties of a color.")
      }, {
        func: "ie-hex-str($color)",
        desc: es("scss.builtin.ie-hex-str", "Converts a color into the format understood by IE filters.")
      }], t.selectorFuncs = [{
        func: "selector-nest($selectors…)",
        desc: es("scss.builtin.selector-nest", "Nests selector beneath one another like they would be nested in the stylesheet.")
      }, {
        func: "selector-append($selectors…)",
        desc: es("scss.builtin.selector-append", "Appends selectors to one another without spaces in between.")
      }, {
        func: "selector-extend($selector, $extendee, $extender)",
        desc: es("scss.builtin.selector-extend", "Extends $extendee with $extender within $selector.")
      }, {
        func: "selector-replace($selector, $original, $replacement)",
        desc: es("scss.builtin.selector-replace", "Replaces $original with $replacement within $selector.")
      }, {
        func: "selector-unify($selector1, $selector2)",
        desc: es("scss.builtin.selector-unify", "Unifies two selectors to produce a selector that matches elements matched by both.")
      }, {
        func: "is-superselector($super, $sub)",
        desc: es("scss.builtin.is-superselector", "Returns whether $super matches all the elements $sub does, and possibly more.")
      }, {
        func: "simple-selectors($selector)",
        desc: es("scss.builtin.simple-selectors", "Returns the simple selectors that comprise a compound selector.")
      }, {
        func: "selector-parse($selector)",
        desc: es("scss.builtin.selector-parse", "Parses a selector into the format returned by &.")
      }], t.builtInFuncs = [{
        func: "unquote($string)",
        desc: es("scss.builtin.unquote", "Removes quotes from a string.")
      }, {
        func: "quote($string)",
        desc: es("scss.builtin.quote", "Adds quotes to a string.")
      }, {
        func: "str-length($string)",
        desc: es("scss.builtin.str-length", "Returns the number of characters in a string.")
      }, {
        func: "str-insert($string, $insert, $index)",
        desc: es("scss.builtin.str-insert", "Inserts $insert into $string at $index.")
      }, {
        func: "str-index($string, $substring)",
        desc: es("scss.builtin.str-index", "Returns the index of the first occurance of $substring in $string.")
      }, {
        func: "str-slice($string, $start-at, [$end-at])",
        desc: es("scss.builtin.str-slice", "Extracts a substring from $string.")
      }, {
        func: "to-upper-case($string)",
        desc: es("scss.builtin.to-upper-case", "Converts a string to upper case.")
      }, {
        func: "to-lower-case($string)",
        desc: es("scss.builtin.to-lower-case", "Converts a string to lower case.")
      }, {
        func: "percentage($number)",
        desc: es("scss.builtin.percentage", "Converts a unitless number to a percentage."),
        type: "percentage"
      }, {
        func: "round($number)",
        desc: es("scss.builtin.round", "Rounds a number to the nearest whole number.")
      }, {
        func: "ceil($number)",
        desc: es("scss.builtin.ceil", "Rounds a number up to the next whole number.")
      }, {
        func: "floor($number)",
        desc: es("scss.builtin.floor", "Rounds a number down to the previous whole number.")
      }, {
        func: "abs($number)",
        desc: es("scss.builtin.abs", "Returns the absolute value of a number.")
      }, {
        func: "min($numbers)",
        desc: es("scss.builtin.min", "Finds the minimum of several numbers.")
      }, {
        func: "max($numbers)",
        desc: es("scss.builtin.max", "Finds the maximum of several numbers.")
      }, {
        func: "random([$limit])",
        desc: es("scss.builtin.random", "Returns a random number.")
      }, {
        func: "length($list)",
        desc: es("scss.builtin.length", "Returns the length of a list.")
      }, {
        func: "nth($list, $n)",
        desc: es("scss.builtin.nth", "Returns a specific item in a list.")
      }, {
        func: "set-nth($list, $n, $value)",
        desc: es("scss.builtin.set-nth", "Replaces the nth item in a list.")
      }, {
        func: "join($list1, $list2, [$separator])",
        desc: es("scss.builtin.join", "Joins together two lists into one.")
      }, {
        func: "append($list1, $val, [$separator])",
        desc: es("scss.builtin.append", "Appends a single value onto the end of a list.")
      }, {
        func: "zip($lists)",
        desc: es("scss.builtin.zip", "Combines several lists into a single multidimensional list.")
      }, {
        func: "index($list, $value)",
        desc: es("scss.builtin.index", "Returns the position of a value within a list.")
      }, {
        func: "list-separator(#list)",
        desc: es("scss.builtin.list-separator", "Returns the separator of a list.")
      }, {
        func: "map-get($map, $key)",
        desc: es("scss.builtin.map-get", "Returns the value in a map associated with a given key.")
      }, {
        func: "map-merge($map1, $map2)",
        desc: es("scss.builtin.map-merge", "Merges two maps together into a new map.")
      }, {
        func: "map-remove($map, $keys)",
        desc: es("scss.builtin.map-remove", "Returns a new map with keys removed.")
      }, {
        func: "map-keys($map)",
        desc: es("scss.builtin.map-keys", "Returns a list of all keys in a map.")
      }, {
        func: "map-values($map)",
        desc: es("scss.builtin.map-values", "Returns a list of all values in a map.")
      }, {
        func: "map-has-key($map, $key)",
        desc: es("scss.builtin.map-has-key", "Returns whether a map has a value associated with a given key.")
      }, {
        func: "keywords($args)",
        desc: es("scss.builtin.keywords", "Returns the keywords passed to a function that takes variable arguments.")
      }, {
        func: "feature-exists($feature)",
        desc: es("scss.builtin.feature-exists", "Returns whether a feature exists in the current Sass runtime.")
      }, {
        func: "variable-exists($name)",
        desc: es("scss.builtin.variable-exists", "Returns whether a variable with the given name exists in the current scope.")
      }, {
        func: "global-variable-exists($name)",
        desc: es("scss.builtin.global-variable-exists", "Returns whether a variable with the given name exists in the global scope.")
      }, {
        func: "function-exists($name)",
        desc: es("scss.builtin.function-exists", "Returns whether a function with the given name exists.")
      }, {
        func: "mixin-exists($name)",
        desc: es("scss.builtin.mixin-exists", "Returns whether a mixin with the given name exists.")
      }, {
        func: "inspect($value)",
        desc: es("scss.builtin.inspect", "Returns the string representation of a value as it would be represented in Sass.")
      }, {
        func: "type-of($value)",
        desc: es("scss.builtin.type-of", "Returns the type of a value.")
      }, {
        func: "unit($number)",
        desc: es("scss.builtin.unit", "Returns the unit(s) associated with a number.")
      }, {
        func: "unitless($number)",
        desc: es("scss.builtin.unitless", "Returns whether a number has units.")
      }, {
        func: "comparable($number1, $number2)",
        desc: es("scss.builtin.comparable", "Returns whether two numbers can be added, subtracted, or compared.")
      }, {
        func: "call($name, $args…)",
        desc: es("scss.builtin.call", "Dynamically calls a Sass function.")
      }], t.scssAtDirectives = [{
        label: "@extend",
        documentation: es("scss.builtin.@extend", "Inherits the styles of another selector."),
        kind: gi.Keyword
      }, {
        label: "@at-root",
        documentation: es("scss.builtin.@at-root", "Causes one or more rules to be emitted at the root of the document."),
        kind: gi.Keyword
      }, {
        label: "@debug",
        documentation: es("scss.builtin.@debug", "Prints the value of an expression to the standard error output stream. Useful for debugging complicated Sass files."),
        kind: gi.Keyword
      }, {
        label: "@warn",
        documentation: es("scss.builtin.@warn", "Prints the value of an expression to the standard error output stream. Useful for libraries that need to warn users of deprecations or recovering from minor mixin usage mistakes. Warnings can be turned off with the `--quiet` command-line option or the `:quiet` Sass option."),
        kind: gi.Keyword
      }, {
        label: "@error",
        documentation: es("scss.builtin.@error", "Throws the value of an expression as a fatal error with stack trace. Useful for validating arguments to mixins and functions."),
        kind: gi.Keyword
      }, {
        label: "@if",
        documentation: es("scss.builtin.@if", "Includes the body if the expression does not evaluate to `false` or `null`."),
        insertText: "@if ${1:expr} {\n\t$0\n}",
        insertTextFormat: bi.Snippet,
        kind: gi.Keyword
      }, {
        label: "@for",
        documentation: es("scss.builtin.@for", "For loop that repeatedly outputs a set of styles for each `$var` in the `from/through` or `from/to` clause."),
        insertText: "@for \\$${1:var} from ${2:start} ${3|to,through|} ${4:end} {\n\t$0\n}",
        insertTextFormat: bi.Snippet,
        kind: gi.Keyword
      }, {
        label: "@each",
        documentation: es("scss.builtin.@each", "Each loop that sets `$var` to each item in the list or map, then outputs the styles it contains using that value of `$var`."),
        insertText: "@each \\$${1:var} in ${2:list} {\n\t$0\n}",
        insertTextFormat: bi.Snippet,
        kind: gi.Keyword
      }, {
        label: "@while",
        documentation: es("scss.builtin.@while", "While loop that takes an expression and repeatedly outputs the nested styles until the statement evaluates to `false`."),
        insertText: "@while ${1:condition} {\n\t$0\n}",
        insertTextFormat: bi.Snippet,
        kind: gi.Keyword
      }, {
        label: "@mixin",
        documentation: es("scss.builtin.@mixin", "Defines styles that can be re-used throughout the stylesheet with `@include`."),
        insertText: "@mixin ${1:name} {\n\t$0\n}",
        insertTextFormat: bi.Snippet,
        kind: gi.Keyword
      }, {
        label: "@include",
        documentation: es("scss.builtin.@include", "Includes the styles defined by another mixin into the current rule."),
        kind: gi.Keyword
      }], t;
    }(Bi), ns = function() {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
        e.__proto__ = t;
      } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      };
      return function(t, n) {
        function r() {
          this.constructor = t;
        }

        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
      };
    }(), rs = "/".charCodeAt(0), is = "\n".charCodeAt(0), os = "\r".charCodeAt(0), ss = "\f".charCodeAt(0),
    as = "`".charCodeAt(0), ls = ".".charCodeAt(0), cs = Re.CustomToken, hs = cs++, ds = function(e) {
      function t() {
        return null !== e && e.apply(this, arguments) || this;
      }

      return ns(t, e), t.prototype.scanNext = function(t) {
        var n = this.escapedJavaScript();
        return null !== n ? this.finishToken(t, n) : this.stream.advanceIfChars([ls, ls, ls]) ? this.finishToken(t, hs) : e.prototype.scanNext.call(this, t);
      }, t.prototype.comment = function() {
        return !!e.prototype.comment.call(this) || !(this.inURL || !this.stream.advanceIfChars([rs, rs])) && (this.stream.advanceWhileChar(function(e) {
          switch (e) {
            case is:
            case os:
            case ss:
              return !1;
            default:
              return !0;
          }
        }), !0);
      }, t.prototype.escapedJavaScript = function() {
        return this.stream.peekChar() === as ? (this.stream.advance(1), this.stream.advanceWhileChar(function(e) {
          return e !== as;
        }), this.stream.advanceIfChar(as) ? Re.EscapedJavaScript : Re.BadEscapedJavaScript) : null;
      }, t;
    }(Ot), us = function() {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
        e.__proto__ = t;
      } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      };
      return function(t, n) {
        function r() {
          this.constructor = t;
        }

        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
      };
    }(), ms = function(e) {
      function t() {
        return e.call(this, new ds) || this;
      }

      return us(t, e), t.prototype._parseStylesheetStatement = function() {
        return this.peek(Re.AtKeyword) ? this._parseVariableDeclaration() || this._parsePlugin() || e.prototype._parseStylesheetAtStatement.call(this) : this._tryParseMixinDeclaration() || this._tryParseMixinReference(!0) || this._parseRuleset(!0);
      }, t.prototype._parseImport = function() {
        if (!this.peekKeyword("@import") && !this.peekKeyword("@import-once")) return null;
        var e = this.create(mn);
        if (this.consumeToken(), this.accept(Re.ParenthesisL)) {
          if (!this.accept(Re.Ident)) return this.finish(e, Wn.IdentifierExpected, [Re.SemiColon]);
          do {
            if (!this.accept(Re.Comma)) break;
          } while (this.accept(Re.Ident));
          if (!this.accept(Re.ParenthesisR)) return this.finish(e, Wn.RightParenthesisExpected, [Re.SemiColon]);
        }
        return e.addChild(this._parseURILiteral()) || e.addChild(this._parseStringLiteral()) ? (this.peek(Re.SemiColon) || this.peek(Re.EOF) || e.setMedialist(this._parseMediaQueryList()), this.finish(e)) : this.finish(e, Wn.URIOrStringExpected, [Re.SemiColon]);
      }, t.prototype._parsePlugin = function() {
        if (!this.peekKeyword("@plugin")) return null;
        var e = this.createNode(At.Plugin);
        return this.consumeToken(), e.addChild(this._parseStringLiteral()) ? this.accept(Re.SemiColon) ? this.finish(e) : this.finish(e, Wn.SemiColonExpected) : this.finish(e, Wn.StringLiteralExpected);
      }, t.prototype._parseMediaQuery = function(t) {
        var n = e.prototype._parseMediaQuery.call(this, t);
        if (!n) {
          var r = this.create(wn);
          return r.addChild(this._parseVariable()) ? this.finish(r) : null;
        }
        return n;
      }, t.prototype._parseMediaDeclaration = function(e) {
        return void 0 === e && (e = !1), this._tryParseRuleset(e) || this._tryToParseDeclaration() || this._tryParseMixinDeclaration() || this._tryParseMixinReference() || this._parseDetachedRuleSetMixin() || this._parseStylesheetStatement();
      }, t.prototype._parseMediaFeatureName = function() {
        return this._parseIdent() || this._parseVariable();
      }, t.prototype._parseVariableDeclaration = function(e) {
        void 0 === e && (e = []);
        var t = this.create(In), n = this.mark();
        return t.setVariable(this._parseVariable()) ? this.accept(Re.Colon) ? (t.colonPosition = this.prevToken.offset, t.setValue(this._parseDetachedRuleSet() || this._parseExpr()) ? (t.addChild(this._parsePrio()), this.peek(Re.SemiColon) && (t.semicolonPosition = this.token.offset), this.finish(t)) : this.finish(t, Wn.VariableValueExpected, [], e)) : (this.restoreAtMark(n), null) : null;
      }, t.prototype._parseDetachedRuleSet = function() {
        if (!this.peek(Re.CurlyL)) return null;
        var e = this.create(Bt);
        return this._parseBody(e, this._parseDetachedRuleSetBody.bind(this)), this.finish(e);
      }, t.prototype._parseDetachedRuleSetBody = function() {
        return this._tryParseKeyframeSelector() || this._tryParseRuleset(!0) || e.prototype._parseRuleSetDeclaration.call(this);
      }, t.prototype._parseVariable = function() {
        if (!this.peekDelim("@") && !this.peek(Re.AtKeyword)) return null;
        for (var e = this.create(Pn), t = this.mark(); this.acceptDelim("@");) if (this.hasWhitespace()) return this.restoreAtMark(t), null;
        return this.accept(Re.AtKeyword) ? e : (this.restoreAtMark(t), null);
      }, t.prototype._parseTerm = function() {
        var t = e.prototype._parseTerm.call(this);
        return t || ((t = this.create(_n)).setExpression(this._parseVariable()) || t.setExpression(this._parseEscaped()) ? this.finish(t) : null);
      }, t.prototype._parseEscaped = function() {
        if (this.peek(Re.EscapedJavaScript) || this.peek(Re.BadEscapedJavaScript)) {
          var e = this.createNode(At.EscapedValue);
          return this.consumeToken(), this.finish(e);
        }
        if (this.peekDelim("~")) {
          e = this.createNode(At.EscapedValue);
          return this.consumeToken(), this.finish(e, this.accept(Re.String) ? null : Wn.TermExpected);
        }
        return null;
      }, t.prototype._parseOperator = function() {
        var t = this._parseGuardOperator();
        return t || e.prototype._parseOperator.call(this);
      }, t.prototype._parseGuardOperator = function() {
        if (this.peekDelim(">")) {
          var e = this.createNode(At.Operator);
          return this.consumeToken(), this.acceptDelim("="), e;
        }
        if (this.peekDelim("=")) {
          e = this.createNode(At.Operator);
          return this.consumeToken(), this.acceptDelim("<"), e;
        }
        if (this.peekDelim("<")) {
          e = this.createNode(At.Operator);
          return this.consumeToken(), this.acceptDelim("="), e;
        }
        return null;
      }, t.prototype._parseRuleSetDeclaration = function() {
        return this.peek(Re.AtKeyword) ? this._parseKeyframe() || this._parseMedia(!0) || this._parseImport() || this._parseSupports(!0) || this._parseDetachedRuleSetMixin() || this._parseVariableDeclaration() : this._tryParseMixinDeclaration() || this._tryParseRuleset(!0) || this._tryParseMixinReference() || this._parseExtend() || e.prototype._parseRuleSetDeclaration.call(this);
      }, t.prototype._parseKeyframeIdent = function() {
        return this._parseIdent([Pt.Keyframe]) || this._parseVariable();
      }, t.prototype._parseKeyframeSelector = function() {
        return this._parseDetachedRuleSetMixin() || e.prototype._parseKeyframeSelector.call(this);
      }, t.prototype._parseSimpleSelectorBody = function() {
        return this._parseSelectorCombinator() || e.prototype._parseSimpleSelectorBody.call(this);
      }, t.prototype._parseSelector = function(e) {
        var t = this.create(qt), n = !1;
        for (e && (n = t.addChild(this._parseCombinator())); t.addChild(this._parseSimpleSelector());) {
          n = !0;
          var r = this.mark();
          if (t.addChild(this._parseGuard()) && this.peek(Re.CurlyL)) break;
          this.restoreAtMark(r), t.addChild(this._parseCombinator());
        }
        return n ? this.finish(t) : null;
      }, t.prototype._parseSelectorCombinator = function() {
        if (this.peekDelim("&")) {
          var e = this.createNode(At.SelectorCombinator);
          for (this.consumeToken(); !this.hasWhitespace() && (this.acceptDelim("-") || this.accept(Re.Num) || this.accept(Re.Dimension) || e.addChild(this._parseIdent()) || this.acceptDelim("&"));) ;
          return this.finish(e);
        }
        return null;
      }, t.prototype._parseSelectorIdent = function() {
        if (!this.peekInterpolatedIdent()) return null;
        var e = this.createNode(At.SelectorInterpolation);
        return this._acceptInterpolatedIdent(e) ? this.finish(e) : null;
      }, t.prototype._parsePropertyIdentifier = function() {
        if (!this.peekInterpolatedIdent()) return null;
        var e = this.create(Mt);
        e.isCustomProperty = this.peekRegExp(Re.Ident, /^--/);
        var t = this._acceptInterpolatedIdent(e);
        return t && !this.hasWhitespace() && (this.acceptDelim("+"), this.hasWhitespace() || this.acceptIdent("_")), t ? this.finish(e) : null;
      }, t.prototype.peekInterpolatedIdent = function() {
        return this.peek(Re.Ident) || this.peekDelim("@") || this.peekDelim("-");
      }, t.prototype._acceptInterpolatedIdent = function(e) {
        for (var t = this, n = !1, r = function() {
          return t.acceptDelim("-") ? (!t.hasWhitespace() && t.acceptDelim("-"), t.hasWhitespace() ? null : t._parseInterpolation()) : null;
        }; (this.accept(Re.Ident) || e.addChild(this._parseInterpolation() || this.try(r))) && (n = !0, !this.hasWhitespace() && this.acceptDelim("-"), !this.hasWhitespace());) ;
        return n;
      }, t.prototype._parseInterpolation = function() {
        var e = this.mark();
        if (this.peekDelim("@")) {
          var t = this.createNode(At.Interpolation);
          return this.consumeToken(), this.hasWhitespace() || !this.accept(Re.CurlyL) ? (this.restoreAtMark(e), null) : t.addChild(this._parseIdent()) ? this.accept(Re.CurlyR) ? this.finish(t) : this.finish(t, Wn.RightCurlyExpected) : this.finish(t, Wn.IdentifierExpected);
        }
        return null;
      }, t.prototype._tryParseMixinDeclaration = function() {
        var e = this.mark(), t = this.create(Ln);
        if (!t.setIdentifier(this._parseMixinDeclarationIdentifier()) || !this.accept(Re.ParenthesisL)) return this.restoreAtMark(e), null;
        if (t.getParameters().addChild(this._parseMixinParameter())) for (; (this.accept(Re.Comma) || this.accept(Re.SemiColon)) && !this.peek(Re.ParenthesisR);) t.getParameters().addChild(this._parseMixinParameter()) || this.markError(t, Wn.IdentifierExpected, [], [Re.ParenthesisR]);
        return this.accept(Re.ParenthesisR) ? (t.setGuard(this._parseGuard()), this.peek(Re.CurlyL) ? this._parseBody(t, this._parseMixInBodyDeclaration.bind(this)) : (this.restoreAtMark(e), null)) : (this.restoreAtMark(e), null);
      }, t.prototype._parseMixInBodyDeclaration = function() {
        return this._parseFontFace() || this._parseRuleSetDeclaration();
      }, t.prototype._parseMixinDeclarationIdentifier = function() {
        var e;
        if (this.peekDelim("#") || this.peekDelim(".")) {
          if (e = this.create(Mt), this.consumeToken(), this.hasWhitespace() || !e.addChild(this._parseIdent())) return null;
        } else {
          if (!this.peek(Re.Hash)) return null;
          e = this.create(Mt), this.consumeToken();
        }
        return e.referenceTypes = [Pt.Mixin], this.finish(e);
      }, t.prototype._parsePseudo = function() {
        if (!this.peek(Re.Colon)) return null;
        var t = this.mark(), n = this.create(On);
        return this.consumeToken(), this.acceptIdent("extend") ? this._completeExtends(n) : (this.restoreAtMark(t), e.prototype._parsePseudo.call(this));
      }, t.prototype._parseExtend = function() {
        if (!this.peekDelim("&")) return null;
        var e = this.mark(), t = this.create(On);
        return this.consumeToken(), !this.hasWhitespace() && this.accept(Re.Colon) && this.acceptIdent("extend") ? this._completeExtends(t) : (this.restoreAtMark(e), null);
      }, t.prototype._completeExtends = function(e) {
        if (!this.accept(Re.ParenthesisL)) return this.finish(e, Wn.LeftParenthesisExpected);
        var t = e.getSelectors();
        if (!t.addChild(this._parseSelector(!0))) return this.finish(e, Wn.SelectorExpected);
        for (; this.accept(Re.Comma);) if (!t.addChild(this._parseSelector(!0))) return this.finish(e, Wn.SelectorExpected);
        return this.accept(Re.ParenthesisR) ? this.finish(e) : this.finish(e, Wn.RightParenthesisExpected);
      }, t.prototype._parseDetachedRuleSetMixin = function() {
        if (!this.peek(Re.AtKeyword)) return null;
        var e = this.mark(), t = this.create(zn);
        return t.addChild(this._parseVariable()) && this.accept(Re.ParenthesisL) ? this.accept(Re.ParenthesisR) ? this.finish(t) : this.finish(t, Wn.RightParenthesisExpected) : (this.restoreAtMark(e), null);
      }, t.prototype._tryParseMixinReference = function(e) {
        void 0 === e && (e = !1);
        for (var t = this.mark(), n = this.create(zn), r = this._parseMixinDeclarationIdentifier(); r;) {
          this.acceptDelim(">");
          var i = this._parseMixinDeclarationIdentifier();
          if (!i) break;
          n.getNamespaces().addChild(r), r = i;
        }
        if (!n.setIdentifier(r)) return this.restoreAtMark(t), null;
        var o = !1;
        if (!this.hasWhitespace() && this.accept(Re.ParenthesisL)) {
          if (o = !0, n.getArguments().addChild(this._parseMixinArgument())) for (; (this.accept(Re.Comma) || this.accept(Re.SemiColon)) && !this.peek(Re.ParenthesisR);) if (!n.getArguments().addChild(this._parseMixinArgument())) return this.finish(n, Wn.ExpressionExpected);
          if (!this.accept(Re.ParenthesisR)) return this.finish(n, Wn.RightParenthesisExpected);
          r.referenceTypes = [Pt.Mixin];
        } else r.referenceTypes = [Pt.Mixin, Pt.Rule];
        return n.addChild(this._parsePrio()), o || this.peek(Re.SemiColon) || this.peek(Re.CurlyR) || this.peek(Re.EOF) ? this.finish(n) : (this.restoreAtMark(t), null);
      }, t.prototype._parseMixinArgument = function() {
        var e = this.create(en), t = this.mark(), n = this._parseVariable();
        return n && (this.accept(Re.Colon) ? e.setIdentifier(n) : this.restoreAtMark(t)), e.setValue(this._parseDetachedRuleSet() || this._parseExpr(!0)) ? this.finish(e) : (this.restoreAtMark(t), null);
      }, t.prototype._parseMixinParameter = function() {
        var e = this.create(Zt);
        if (this.peekKeyword("@rest")) {
          var t = this.create(Rt);
          return this.consumeToken(), this.accept(hs) ? (e.setIdentifier(this.finish(t)), this.finish(e)) : this.finish(e, Wn.DotExpected, [], [Re.Comma, Re.ParenthesisR]);
        }
        if (this.peek(hs)) {
          var n = this.create(Rt);
          return this.consumeToken(), e.setIdentifier(this.finish(n)), this.finish(e);
        }
        var r = !1;
        return e.setIdentifier(this._parseVariable()) && (this.accept(Re.Colon), r = !0), e.setDefaultValue(this._parseExpr(!0)) || r ? this.finish(e) : null;
      }, t.prototype._parseGuard = function() {
        if (!this.peekIdent("when")) return null;
        var e = this.create(Rn);
        if (this.consumeToken(), e.isNegated = this.acceptIdent("not"), !e.getConditions().addChild(this._parseGuardCondition())) return this.finish(e, Wn.ConditionExpected);
        for (; this.acceptIdent("and") || this.accept(Re.Comma);) if (!e.getConditions().addChild(this._parseGuardCondition())) return this.finish(e, Wn.ConditionExpected);
        return this.finish(e);
      }, t.prototype._parseGuardCondition = function() {
        if (!this.peek(Re.ParenthesisL)) return null;
        var e = this.create(Un);
        return this.consumeToken(), e.addChild(this._parseExpr()), this.accept(Re.ParenthesisR) ? this.finish(e) : this.finish(e, Wn.RightParenthesisExpected);
      }, t.prototype._parseFunctionIdentifier = function() {
        if (this.peekDelim("%")) {
          var t = this.create(Mt);
          return t.referenceTypes = [Pt.Function], this.consumeToken(), this.finish(t);
        }
        return e.prototype._parseFunctionIdentifier.call(this);
      }, t.prototype._parseURLArgument = function() {
        var t = this.mark(), n = e.prototype._parseURLArgument.call(this);
        if (!n || !this.peek(Re.ParenthesisR)) {
          this.restoreAtMark(t);
          var r = this.create(Rt);
          return r.addChild(this._parseBinaryExpr()), this.finish(r);
        }
        return n;
      }, t;
    }(Mr), ps = function() {
      var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e, t) {
        e.__proto__ = t;
      } || function(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      };
      return function(t, n) {
        function r() {
          this.constructor = t;
        }

        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r);
      };
    }(), fs = Bn(), gs = function(e) {
      function t() {
        return e.call(this, "@") || this;
      }

      return ps(t, e), t.prototype.createFunctionProposals = function(e, t, n, r) {
        for (var i = 0, o = e; i < o.length; i++) {
          var s = o[i], a = {
            label: s.name,
            detail: s.example,
            documentation: s.description,
            textEdit: Qr.replace(this.getCompletionRange(t), s.name + "($0)"),
            insertTextFormat: bi.Snippet,
            kind: gi.Function
          };
          n && (a.sortText = "z"), r.items.push(a);
        }
        return r;
      }, t.prototype.getTermProposals = function(n, r, i) {
        var o = t.builtInProposals;
        return n && (o = o.filter(function(e) {
          return !e.type || -1 !== n.restrictions.indexOf(e.type);
        })), this.createFunctionProposals(o, r, !0, i), e.prototype.getTermProposals.call(this, n, r, i);
      }, t.prototype.getColorProposals = function(n, r, i) {
        return this.createFunctionProposals(t.colorProposals, r, !1, i), e.prototype.getColorProposals.call(this, n, r, i);
      }, t.prototype.getCompletionsForDeclarationProperty = function(t, n) {
        return this.getCompletionsForSelector(null, !0, n), e.prototype.getCompletionsForDeclarationProperty.call(this, t, n);
      }, t.builtInProposals = [{
        name: "escape",
        example: "escape(@string);",
        description: fs("less.builtin.escape", "URL encodes a string")
      }, {
        name: "e",
        example: "e(@string);",
        description: fs("less.builtin.e", "escape string content")
      }, {
        name: "replace",
        example: "replace(@string, @pattern, @replacement[, @flags]);",
        description: fs("less.builtin.replace", "string replace")
      }, {
        name: "unit",
        example: "unit(@dimension, [@unit: '']);",
        description: fs("less.builtin.unit", "remove or change the unit of a dimension")
      }, {
        name: "color",
        example: "color(@string);",
        description: fs("less.builtin.color", "parses a string to a color"),
        type: "color"
      }, {
        name: "convert",
        example: "convert(@value, unit);",
        description: fs("less.builtin.convert", "converts numbers from one type into another")
      }, {
        name: "data-uri",
        example: "data-uri([mimetype,] url);",
        description: fs("less.builtin.data-uri", "inlines a resource and falls back to `url()`"),
        type: "url"
      }, {
        name: "length",
        example: "length(@list);",
        description: fs("less.builtin.length", "returns the number of elements in a value list")
      }, {
        name: "extract",
        example: "extract(@list, index);",
        description: fs("less.builtin.extract", "returns a value at the specified position in the list")
      }, {
        name: "abs",
        description: fs("less.builtin.abs", "absolute value of a number"),
        example: "abs(number);"
      }, {
        name: "acos",
        description: fs("less.builtin.acos", "arccosine - inverse of cosine function"),
        example: "acos(number);"
      }, {
        name: "asin",
        description: fs("less.builtin.asin", "arcsine - inverse of sine function"),
        example: "asin(number);"
      }, {
        name: "ceil",
        example: "ceil(@number);",
        description: fs("less.builtin.ceil", "rounds up to an integer")
      }, {
        name: "cos",
        description: fs("less.builtin.cos", "cosine function"),
        example: "cos(number);"
      }, {
        name: "floor",
        description: fs("less.builtin.floor", "rounds down to an integer"),
        example: "floor(@number);"
      }, {
        name: "percentage",
        description: fs("less.builtin.percentage", "converts to a %, e.g. 0.5 > 50%"),
        example: "percentage(@number);",
        type: "percentage"
      }, {
        name: "round",
        description: fs("less.builtin.round", "rounds a number to a number of places"),
        example: "round(number, [places: 0]);"
      }, {
        name: "sqrt",
        description: fs("less.builtin.sqrt", "calculates square root of a number"),
        example: "sqrt(number);"
      }, { name: "sin", description: fs("less.builtin.sin", "sine function"), example: "sin(number);" }, {
        name: "tan",
        description: fs("less.builtin.tan", "tangent function"),
        example: "tan(number);"
      }, {
        name: "atan",
        description: fs("less.builtin.atan", "arctangent - inverse of tangent function"),
        example: "atan(number);"
      }, { name: "pi", description: fs("less.builtin.pi", "returns pi"), example: "pi();" }, {
        name: "pow",
        description: fs("less.builtin.pow", "first argument raised to the power of the second argument"),
        example: "pow(@base, @exponent);"
      }, {
        name: "mod",
        description: fs("less.builtin.mod", "first argument modulus second argument"),
        example: "mod(number, number);"
      }, {
        name: "min",
        description: fs("less.builtin.min", "returns the lowest of one or more values"),
        example: "min(@x, @y);"
      }, {
        name: "max",
        description: fs("less.builtin.max", "returns the lowest of one or more values"),
        example: "max(@x, @y);"
      }], t.colorProposals = [{
        name: "argb",
        example: "argb(@color);",
        description: fs("less.builtin.argb", "creates a #AARRGGBB")
      }, {
        name: "hsl",
        example: "hsl(@hue, @saturation, @lightness);",
        description: fs("less.builtin.hsl", "creates a color")
      }, {
        name: "hsla",
        example: "hsla(@hue, @saturation, @lightness, @alpha);",
        description: fs("less.builtin.hsla", "creates a color")
      }, {
        name: "hsv",
        example: "hsv(@hue, @saturation, @value);",
        description: fs("less.builtin.hsv", "creates a color")
      }, {
        name: "hsva",
        example: "hsva(@hue, @saturation, @value, @alpha);",
        description: fs("less.builtin.hsva", "creates a color")
      }, {
        name: "hue",
        example: "hue(@color);",
        description: fs("less.builtin.hue", "returns the `hue` channel of `@color` in the HSL space")
      }, {
        name: "saturation",
        example: "saturation(@color);",
        description: fs("less.builtin.saturation", "returns the `saturation` channel of `@color` in the HSL space")
      }, {
        name: "lightness",
        example: "lightness(@color);",
        description: fs("less.builtin.lightness", "returns the `lightness` channel of `@color` in the HSL space")
      }, {
        name: "hsvhue",
        example: "hsvhue(@color);",
        description: fs("less.builtin.hsvhue", "returns the `hue` channel of `@color` in the HSV space")
      }, {
        name: "hsvsaturation",
        example: "hsvsaturation(@color);",
        description: fs("less.builtin.hsvsaturation", "returns the `saturation` channel of `@color` in the HSV space")
      }, {
        name: "hsvvalue",
        example: "hsvvalue(@color);",
        description: fs("less.builtin.hsvvalue", "returns the `value` channel of `@color` in the HSV space")
      }, {
        name: "red",
        example: "red(@color);",
        description: fs("less.builtin.red", "returns the `red` channel of `@color`")
      }, {
        name: "green",
        example: "green(@color);",
        description: fs("less.builtin.green", "returns the `green` channel of `@color`")
      }, {
        name: "blue",
        example: "blue(@color);",
        description: fs("less.builtin.blue", "returns the `blue` channel of `@color`")
      }, {
        name: "alpha",
        example: "alpha(@color);",
        description: fs("less.builtin.alpha", "returns the `alpha` channel of `@color`")
      }, {
        name: "luma",
        example: "luma(@color);",
        description: fs("less.builtin.luma", "returns the `luma` value (perceptual brightness) of `@color`")
      }, {
        name: "saturate",
        example: "saturate(@color, 10%);",
        description: fs("less.builtin.saturate", "return `@color` 10% points more saturated")
      }, {
        name: "desaturate",
        example: "desaturate(@color, 10%);",
        description: fs("less.builtin.desaturate", "return `@color` 10% points less saturated")
      }, {
        name: "lighten",
        example: "lighten(@color, 10%);",
        description: fs("less.builtin.lighten", "return `@color` 10% points lighter")
      }, {
        name: "darken",
        example: "darken(@color, 10%);",
        description: fs("less.builtin.darken", "return `@color` 10% points darker")
      }, {
        name: "fadein",
        example: "fadein(@color, 10%);",
        description: fs("less.builtin.fadein", "return `@color` 10% points less transparent")
      }, {
        name: "fadeout",
        example: "fadeout(@color, 10%);",
        description: fs("less.builtin.fadeout", "return `@color` 10% points more transparent")
      }, {
        name: "fade",
        example: "fade(@color, 50%);",
        description: fs("less.builtin.fade", "return `@color` with 50% transparency")
      }, {
        name: "spin",
        example: "spin(@color, 10);",
        description: fs("less.builtin.spin", "return `@color` with a 10 degree larger in hue")
      }, {
        name: "mix",
        example: "mix(@color1, @color2, [@weight: 50%]);",
        description: fs("less.builtin.mix", "return a mix of `@color1` and `@color2`")
      }, {
        name: "greyscale",
        example: "greyscale(@color);",
        description: fs("less.builtin.greyscale", "returns a grey, 100% desaturated color")
      }, {
        name: "contrast",
        example: "contrast(@color1, [@darkcolor: black], [@lightcolor: white], [@threshold: 43%]);",
        description: fs("less.builtin.contrast", "return `@darkcolor` if `@color1 is> 43% luma` otherwise return `@lightcolor`, see notes")
      }, { name: "multiply", example: "multiply(@color1, @color2);" }, {
        name: "screen",
        example: "screen(@color1, @color2);"
      }, { name: "overlay", example: "overlay(@color1, @color2);" }, {
        name: "softlight",
        example: "softlight(@color1, @color2);"
      }, { name: "hardlight", example: "hardlight(@color1, @color2);" }, {
        name: "difference",
        example: "difference(@color1, @color2);"
      }, { name: "exclusion", example: "exclusion(@color1, @color2);" }, {
        name: "average",
        example: "average(@color1, @color2);"
      }, { name: "negation", example: "negation(@color1, @color2);" }], t;
    }(Bi);

  function bs(e, t) {
    return function(e, t) {
      var n = t && t.rangeLimit || Number.MAX_VALUE, r = [], i = -1;
      return e.sort(function(e, t) {
        var n = e.startLine - t.startLine;
        return 0 === n && (n = e.endLine - t.endLine), n;
      }).forEach(function(e) {
        e.startLine < i && i < e.endLine || (r.push(e), i = e.endLine);
      }), r.length < n ? r : r.slice(0, n);
    }(function(e) {
      function t(t) {
        return e.positionAt(t.offset).line;
      }

      function n(t) {
        return e.positionAt(t.offset + t.len).line;
      }

      var r = [], i = [], o = function() {
        switch (e.languageId) {
          case"scss":
            return new Go;
          case"less":
            return new ds;
          default:
            return new Ot;
        }
      }();
      o.ignoreComment = !1, o.setSource(e.getText());
      var s, a = o.scan(), l = function() {
        switch (a.type) {
          case Re.CurlyL:
          case Vo:
            i.push({ line: t(a), type: "brace", isStart: !0 });
            break;
          case Re.CurlyR:
            if (0 !== i.length) {
              var l = ys(i, "brace");
              if (!l) break;
              var c = n(a);
              "brace" === l.type && (n(s) !== c && c--, l.line !== c && r.push({
                startLine: l.line,
                endLine: c,
                kind: void 0
              }));
            }
            break;
          case Re.Comment:
            var h = function(e) {
              return "#region" === e ? { line: t(a), type: "comment", isStart: !0 } : {
                line: n(a),
                type: "comment",
                isStart: !1
              };
            }, d = function(t) {
              var n = t.text.match(/^\s*\/\*\s*(#region|#endregion)\b\s*(.*?)\s*\*\//);
              if (n) return h(n[1]);
              if ("scss" === e.languageId || "less" === e.languageId) {
                var r = t.text.match(/^\s*\/\/\s*(#region|#endregion)\b\s*(.*?)\s*/);
                if (r) return h(r[1]);
              }
              return null;
            }(a);
            if (d) if (d.isStart) i.push(d); else {
              var l = ys(i, "comment");
              if (!l) break;
              "comment" === l.type && l.line !== d.line && r.push({
                startLine: l.line,
                endLine: d.line,
                kind: "region"
              });
            } else {
              var u = function(e, r) {
                var i = t(e), o = n(e);
                return i !== o ? { startLine: i, endLine: o, kind: r } : null;
              }(a, "comment");
              u && r.push(u);
            }
        }
        s = a, a = o.scan();
      };
      for (; a.type !== Re.EOF;) l();
      return r;
    }(e), t);
  }

  function ys(e, t) {
    if (0 === e.length) return null;
    for (var n = e.length - 1; n >= 0; n--) if (e[n].type === t && e[n].isStart) return e.splice(n, 1)[0];
    return null;
  }

  function ws(e, t, n, r, i, o) {
    return {
      configure: o.configure.bind(o),
      doValidation: o.doValidation.bind(o),
      parseStylesheet: e.parseStylesheet.bind(e),
      doComplete: t.doComplete.bind(t),
      setCompletionParticipants: t.setCompletionParticipants.bind(t),
      doHover: n.doHover.bind(n),
      findDefinition: r.findDefinition.bind(r),
      findReferences: r.findReferences.bind(r),
      findDocumentHighlights: r.findDocumentHighlights.bind(r),
      findDocumentSymbols: r.findDocumentSymbols.bind(r),
      doCodeActions: i.doCodeActions.bind(i),
      findColorSymbols: function(e, t) {
        return r.findDocumentColors(e, t).map(function(e) {
          return e.range;
        });
      },
      findDocumentColors: r.findDocumentColors.bind(r),
      getColorPresentations: r.getColorPresentations.bind(r),
      doRename: r.doRename.bind(r),
      getFoldingRanges: bs
    };
  }

  var vs = monaco.Promise, xs = function() {
    function e(e, t) {
      switch (this._ctx = e, this._languageSettings = t.languageSettings, this._languageId = t.languageId, this._languageId) {
        case"css":
          this._languageService = ws(new Mr, new Bi, new oo, new ao, new vo, new _o);
          break;
        case"less":
          this._languageService = ws(new ms, new gs, new oo, new ao, new vo, new _o);
          break;
        case"scss":
          this._languageService = ws(new Qo, new ts, new oo, new ao, new vo, new _o);
          break;
        default:
          throw new Error("Invalid language id: " + this._languageId);
      }
      this._languageService.configure(this._languageSettings);
    }

    return e.prototype.doValidation = function(e) {
      var t = this._getTextDocument(e);
      if (t) {
        var n = this._languageService.parseStylesheet(t), r = this._languageService.doValidation(t, n);
        return vs.as(r);
      }
      return vs.as([]);
    }, e.prototype.doComplete = function(e, t) {
      var n = this._getTextDocument(e), r = this._languageService.parseStylesheet(n),
        i = this._languageService.doComplete(n, t, r);
      return vs.as(i);
    }, e.prototype.doHover = function(e, t) {
      var n = this._getTextDocument(e), r = this._languageService.parseStylesheet(n),
        i = this._languageService.doHover(n, t, r);
      return vs.as(i);
    }, e.prototype.findDefinition = function(e, t) {
      var n = this._getTextDocument(e), r = this._languageService.parseStylesheet(n),
        i = this._languageService.findDefinition(n, t, r);
      return vs.as(i);
    }, e.prototype.findReferences = function(e, t) {
      var n = this._getTextDocument(e), r = this._languageService.parseStylesheet(n),
        i = this._languageService.findReferences(n, t, r);
      return vs.as(i);
    }, e.prototype.findDocumentHighlights = function(e, t) {
      var n = this._getTextDocument(e), r = this._languageService.parseStylesheet(n),
        i = this._languageService.findDocumentHighlights(n, t, r);
      return vs.as(i);
    }, e.prototype.findDocumentSymbols = function(e) {
      var t = this._getTextDocument(e), n = this._languageService.parseStylesheet(t),
        r = this._languageService.findDocumentSymbols(t, n);
      return vs.as(r);
    }, e.prototype.doCodeActions = function(e, t, n) {
      var r = this._getTextDocument(e), i = this._languageService.parseStylesheet(r),
        o = this._languageService.doCodeActions(r, t, n, i);
      return vs.as(o);
    }, e.prototype.findDocumentColors = function(e) {
      var t = this._getTextDocument(e), n = this._languageService.parseStylesheet(t),
        r = this._languageService.findDocumentColors(t, n);
      return vs.as(r);
    }, e.prototype.getColorPresentations = function(e, t, n) {
      var r = this._getTextDocument(e), i = this._languageService.parseStylesheet(r),
        o = this._languageService.getColorPresentations(r, i, t, n);
      return vs.as(o);
    }, e.prototype.provideFoldingRanges = function(e, t) {
      var n = this._getTextDocument(e), r = this._languageService.getFoldingRanges(n, t);
      return vs.as(r);
    }, e.prototype.doRename = function(e, t, n) {
      var r = this._getTextDocument(e), i = this._languageService.parseStylesheet(r),
        o = this._languageService.doRename(r, t, n, i);
      return vs.as(o);
    }, e.prototype._getTextDocument = function(e) {
      for (var t = 0, n = this._ctx.getMirrorModels(); t < n.length; t++) {
        var r = n[t];
        if (r.uri.toString() === e) return Ni.create(e, this._languageId, r.version, r.getValue());
      }
      return null;
    }, e;
  }();
  self.onmessage = function() {
    Me(function(e, t) {
      return new xs(e, t);
    });
  };
}]);
