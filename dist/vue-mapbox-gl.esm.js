import t from 'vue'
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var e = function(
  t,
  o
) {
  return (e =
    Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array &&
      function(t, e) {
        t.__proto__ = e
      }) ||
    function(t, e) {
      for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
    })(t, o)
}
function o(t, e, o, n) {
  var r,
    i = arguments.length,
    a = i < 3 ? e : null === n ? (n = Object.getOwnPropertyDescriptor(e, o)) : n
  if ('object' == typeof Reflect && 'function' == typeof Reflect.decorate)
    a = Reflect.decorate(t, e, o, n)
  else
    for (var c = t.length - 1; c >= 0; c--)
      (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a)
  return i > 3 && a && Object.defineProperty(e, o, a), a
  /**
   * vue-class-component v7.2.2
   * (c) 2015-present Evan You
   * @license MIT
   */
}
function n(t) {
  return (n =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? function(t) {
          return typeof t
        }
      : function(t) {
          return t &&
            'function' == typeof Symbol &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t
        })(t)
}
function r(t, e, o) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = o),
    t
  )
}
function i(t) {
  return (
    (function(t) {
      if (Array.isArray(t)) {
        for (var e = 0, o = new Array(t.length); e < t.length; e++) o[e] = t[e]
        return o
      }
    })(t) ||
    (function(t) {
      if (
        Symbol.iterator in Object(t) ||
        '[object Arguments]' === Object.prototype.toString.call(t)
      )
        return Array.from(t)
    })(t) ||
    (function() {
      throw new TypeError('Invalid attempt to spread non-iterable instance')
    })()
  )
}
function a() {
  return (
    'undefined' != typeof Reflect &&
    Reflect.defineMetadata &&
    Reflect.getOwnMetadataKeys
  )
}
function c(t, e) {
  s(t, e),
    Object.getOwnPropertyNames(e.prototype).forEach(function(o) {
      s(t.prototype, e.prototype, o)
    }),
    Object.getOwnPropertyNames(e).forEach(function(o) {
      s(t, e, o)
    })
}
function s(t, e, o) {
  ;(o
    ? Reflect.getOwnMetadataKeys(e, o)
    : Reflect.getOwnMetadataKeys(e)
  ).forEach(function(n) {
    var r = o ? Reflect.getOwnMetadata(n, e, o) : Reflect.getOwnMetadata(n, e)
    o ? Reflect.defineMetadata(n, r, t, o) : Reflect.defineMetadata(n, r, t)
  })
}
var p = { __proto__: [] } instanceof Array
function u(t) {
  'undefined' != typeof console && console.warn('[vue-class-component] ' + t)
}
function l(e, o) {
  var n = o.prototype._init
  o.prototype._init = function() {
    var t = this,
      o = Object.getOwnPropertyNames(e)
    if (e.$options.props)
      for (var n in e.$options.props) e.hasOwnProperty(n) || o.push(n)
    o.forEach(function(o) {
      '_' !== o.charAt(0) &&
        Object.defineProperty(t, o, {
          get: function() {
            return e[o]
          },
          set: function(t) {
            e[o] = t
          },
          configurable: !0,
        })
    })
  }
  var r = new o()
  o.prototype._init = n
  var i = {}
  return (
    Object.keys(r).forEach(function(t) {
      void 0 !== r[t] && (i[t] = r[t])
    }),
    'production' !== process.env.NODE_ENV &&
      !(o.prototype instanceof t) &&
      Object.keys(i).length > 0 &&
      u(
        'Component class must inherit Vue or its descendant class when class property is used.'
      ),
    i
  )
}
var f = [
  'data',
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeDestroy',
  'destroyed',
  'beforeUpdate',
  'updated',
  'activated',
  'deactivated',
  'render',
  'errorCaptured',
  'serverPrefetch',
]
function d(e) {
  var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
  o.name = o.name || e._componentTag || e.name
  var n = e.prototype
  Object.getOwnPropertyNames(n).forEach(function(t) {
    if ('constructor' !== t)
      if (f.indexOf(t) > -1) o[t] = n[t]
      else {
        var e = Object.getOwnPropertyDescriptor(n, t)
        void 0 !== e.value
          ? 'function' == typeof e.value
            ? ((o.methods || (o.methods = {}))[t] = e.value)
            : (o.mixins || (o.mixins = [])).push({
                data: function() {
                  return r({}, t, e.value)
                },
              })
          : (e.get || e.set) &&
            ((o.computed || (o.computed = {}))[t] = { get: e.get, set: e.set })
      }
  }),
    (o.mixins || (o.mixins = [])).push({
      data: function() {
        return l(this, e)
      },
    })
  var i = e.__decorators__
  i &&
    (i.forEach(function(t) {
      return t(o)
    }),
    delete e.__decorators__)
  var s = Object.getPrototypeOf(e.prototype),
    p = s instanceof t ? s.constructor : t,
    u = p.extend(o)
  return y(u, e, p), a() && c(u, e), u
}
var h = [
    'cid',
    'super',
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    'component',
    'directive',
    'filter',
  ],
  m = { prototype: !0, arguments: !0, callee: !0, caller: !0 }
function y(t, e, o) {
  Object.getOwnPropertyNames(e).forEach(function(r) {
    if (!m[r]) {
      var i = Object.getOwnPropertyDescriptor(t, r)
      if (!i || i.configurable) {
        var a,
          c,
          s = Object.getOwnPropertyDescriptor(e, r)
        if (!p) {
          if ('cid' === r) return
          var l = Object.getOwnPropertyDescriptor(o, r)
          if (
            ((a = s.value),
            (c = n(a)),
            null != a &&
              ('object' === c || 'function' === c) &&
              l &&
              l.value === s.value)
          )
            return
        }
        'production' !== process.env.NODE_ENV &&
          h.indexOf(r) >= 0 &&
          u(
            "Static property name '"
              .concat(r, "' declared on class '")
              .concat(e.name, "' ") +
              'conflicts with reserved property name of Vue internal. It may cause unexpected behavior of the component. Consider renaming the property.'
          ),
          Object.defineProperty(t, r, s)
      }
    }
  })
}
function v(t) {
  return 'function' == typeof t
    ? d(t)
    : function(e) {
        return d(e, t)
      }
}
v.registerHooks = function(t) {
  f.push.apply(f, i(t))
}
var g = 'undefined' != typeof Reflect && void 0 !== Reflect.getMetadata
function O(t) {
  return (
    void 0 === t && (t = {}),
    function(e, o) {
      var n
      !(function(t, e, o) {
        g &&
          (Array.isArray(t) ||
            'function' == typeof t ||
            void 0 !== t.type ||
            (t.type = Reflect.getMetadata('design:type', e, o)))
      })(t, e, o),
        ((n = function(e, o) {
          ;(e.props || (e.props = {}))[o] = t
        }),
        function(t, e, o) {
          var r = 'function' == typeof t ? t : t.constructor
          r.__decorators__ || (r.__decorators__ = []),
            'number' != typeof o && (o = void 0),
            r.__decorators__.push(function(t) {
              return n(t, e, o)
            })
        })(e, o)
    }
  )
}
var b = /\B([A-Z])/g
function w(t) {
  return function(e, o, n) {
    o = o.replace(b, '-$1').toLowerCase()
    var r = n.value
    n.value = function() {
      for (var e = this, n = [], i = 0; i < arguments.length; i++)
        n[i] = arguments[i]
      var a = function(r) {
          void 0 !== r && n.unshift(r), e.$emit.apply(e, [t || o].concat(n))
        },
        c = r.apply(this, n)
      return (
        _(c)
          ? c.then(function(t) {
              a(t)
            })
          : a(c),
        c
      )
    }
  }
}
function _(t) {
  return t instanceof Promise || (t && 'function' == typeof t.then)
}
const C = (function(t) {
  function n() {
    return (null !== t && t.apply(this, arguments)) || this
  }
  return (
    (function(t, o) {
      function n() {
        this.constructor = t
      }
      e(t, o),
        (t.prototype =
          null === o
            ? Object.create(o)
            : ((n.prototype = o.prototype), new n()))
    })(n, t),
    (n.prototype.mounted = function() {
      ;(this.map = this.mapInit()),
        this.addControls(this.map),
        this.registerMapEvents(this.map)
    }),
    (n.prototype.beforeDestroy = function() {
      this.map.remove()
    }),
    (n.prototype.mapInit = function() {
      return (
        (mapboxgl.accessToken = this.accessToken),
        Object.prototype.hasOwnProperty.call(this.mapOptions, 'container') ||
          (this.mapOptions.container = 'map'),
        this.shadowRoot &&
          null !== this.mapOptions.container &&
          null !== document &&
          null !== document.querySelector(this.shadowRoot) &&
          null !== document.querySelector(this.shadowRoot).shadowRoot &&
          null !==
            document
              .querySelector(this.shadowRoot)
              .shadowRoot.getElementById(this.mapOptions.container) &&
          (this.mapOptions.container = document
            .querySelector(this.shadowRoot)
            .shadowRoot.getElementById(this.mapOptions.container)),
        new mapboxgl.Map(this.mapOptions)
      )
    }),
    (n.prototype.registerMapEvents = function(t) {
      var e = this,
        o = [
          'error',
          'load',
          'remove',
          'render',
          'resize',
          'webglcontextlost',
          'webglcontextrestored',
          'dataloading',
          'data',
          'tiledataloading',
          'sourcedataloading',
          'styledataloading',
          'sourcedata',
          'styledata',
          'boxzoomcancel',
          'boxzoomstart',
          'boxzoomend',
          'touchcancel',
          'touchmove',
          'touchend',
          'touchstart',
          'click',
          'contextmenu',
          'dblclick',
          'mousemove',
          'mouseup',
          'mousedown',
          'mouseout',
          'mouseover',
          'mouseenter',
          'mouseleave',
          'movestart',
          'move',
          'moveend',
          'zoomstart',
          'zoom',
          'zoomend',
          'rotatestart',
          'rotate',
          'rotateend',
          'dragstart',
          'drag',
          'dragend',
          'pitchstart',
          'pitch',
          'pitchend',
          'wheel',
        ],
        n = [
          'touchcancel',
          'touchend',
          'touchstart',
          'click',
          'contextmenu',
          'dblclick',
          'mousemove',
          'mouseup',
          'mousedown',
          'mouseout',
          'mouseover',
          'mouseenter',
          'mouseleave',
        ]
      if (Object.keys(this.$listeners).length) {
        var r = function(r) {
          var i = r.replace(/^map-/, '').split(':'),
            a = i[0],
            c = i[1]
          o.indexOf(a) > -1 &&
            (c && n.indexOf(a) > -1
              ? t.on(a, c, function(o) {
                  e.$emit(r, t, o)
                })
              : t.on(a, function(o) {
                  e.$emit(r, t, o)
                }))
        }
        for (var i in this.$listeners) r(i)
      }
    }),
    (n.prototype.addControls = function(t) {
      var e = this
      if (this.navControl.show) {
        var o = new mapboxgl.NavigationControl(this.navControl.options)
        t.addControl(o, this.navControl.position)
      }
      if (this.geolocateControl.show) {
        var n = new mapboxgl.GeolocateControl(this.geolocateControl.options)
        t.addControl(n, this.geolocateControl.position)
        var r = [
          'error',
          'trackuserlocationstart',
          'trackuserlocationend',
          'geolocate',
        ]
        if (Object.keys(this.$listeners).length) {
          var i = function(t) {
            var o = t.replace(/^geolocate-/, '')
            r.indexOf(o) > -1 &&
              n.on(o, function(o) {
                o ? e.$emit(t, n, o) : e.$emit(t, n)
              })
          }
          for (var a in this.$listeners) i(a)
        }
      }
      if (this.scaleControl.show) {
        var c = new mapboxgl.ScaleControl(this.scaleControl.options)
        t.addControl(c, this.scaleControl.position)
      }
      if (this.fullscreenControl.show) {
        var s = new mapboxgl.FullscreenControl()
        t.addControl(s, this.fullscreenControl.position)
      }
    }),
    o([O({ required: !0 })], n.prototype, 'accessToken', void 0),
    o([O({ required: !0 })], n.prototype, 'mapOptions', void 0),
    o([O({ required: !1, default: '' })], n.prototype, 'shadowRoot', void 0),
    o(
      [
        O({
          default: function() {
            return { show: !0, position: 'top-right', options: {} }
          },
        }),
      ],
      n.prototype,
      'navControl',
      void 0
    ),
    o(
      [
        O({
          default: function() {
            return { show: !1, position: 'top-left', options: {} }
          },
        }),
      ],
      n.prototype,
      'geolocateControl',
      void 0
    ),
    o(
      [
        O({
          default: function() {
            return { show: !1, position: 'top-left', options: {} }
          },
        }),
      ],
      n.prototype,
      'scaleControl',
      void 0
    ),
    o(
      [
        O({
          default: function() {
            return { show: !1, position: 'top-right', options: {} }
          },
        }),
      ],
      n.prototype,
      'fullscreenControl',
      void 0
    ),
    o(
      [
        O({
          default: function() {
            return { show: !1, position: 'top-right', options: {} }
          },
        }),
      ],
      n.prototype,
      'attributionControl',
      void 0
    ),
    o([w()], n.prototype, 'mapInit', null),
    (n = o([v], n))
  )
})(t)
var R = function() {
  var t = this.$createElement
  return (this._self._c || t)('div', {
    attrs: {
      id: Object.prototype.hasOwnProperty.call(this.mapOptions, 'container')
        ? this.mapOptions.container
        : 'map',
    },
  })
}
R._withStripped = !0
const x = (function(t, e, o, n, r, i, a, c, s, p) {
  'boolean' != typeof a && ((s = c), (c = a), (a = !1))
  const u = 'function' == typeof o ? o.options : o
  let l
  if (
    (t &&
      t.render &&
      ((u.render = t.render),
      (u.staticRenderFns = t.staticRenderFns),
      (u._compiled = !0),
      r && (u.functional = !0)),
    n && (u._scopeId = n),
    i
      ? ((l = function(t) {
          ;(t =
            t ||
            (this.$vnode && this.$vnode.ssrContext) ||
            (this.parent &&
              this.parent.$vnode &&
              this.parent.$vnode.ssrContext)) ||
            'undefined' == typeof __VUE_SSR_CONTEXT__ ||
            (t = __VUE_SSR_CONTEXT__),
            e && e.call(this, s(t)),
            t && t._registeredComponents && t._registeredComponents.add(i)
        }),
        (u._ssrRegister = l))
      : e &&
        (l = a
          ? function(t) {
              e.call(this, p(t, this.$root.$options.shadowRoot))
            }
          : function(t) {
              e.call(this, c(t))
            }),
    l)
  )
    if (u.functional) {
      const t = u.render
      u.render = function(e, o) {
        return l.call(o), t(e, o)
      }
    } else {
      const t = u.beforeCreate
      u.beforeCreate = t ? [].concat(t, l) : [l]
    }
  return o
})(
  { render: R, staticRenderFns: [] },
  void 0,
  C,
  void 0,
  !1,
  void 0,
  !1,
  void 0,
  void 0,
  void 0
)
var j,
  E = {
    install: (j = function(t) {
      j.installed || ((j.installed = !0), t.component('Mapbox', x))
    }),
  },
  P = null
'undefined' != typeof window && (P = window.Vue), P && P.use(E)
export default x
