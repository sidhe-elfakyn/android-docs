/*eslint-disable*/
!(function() {
  'use strict';
  function e() {
    return (
      !0 === window.MapboxPageShellProduction ||
      /mapbox\.com$/.test(window.location.hostname)
    );
  }
  function t(e) {
    'loading' !== document.readyState
      ? e()
      : document.addEventListener('DOMContentLoaded', e);
  }
  function n() {
    var e = document.createElement('div');
    e.className = 'shell-wrapper';
    var t = document.createElement('div');
    (t.className =
      'shell-loading shell-loading--dark shell-fixed shell-top shell-left shell-right shell-bottom shell-flex-parent shell-bg-darken50'), (t.style.zIndex =
      '9999'), e.appendChild(t), document.body.appendChild(e);
  }
  function i() {
    return ye;
  }
  function o(e) {
    ye = e;
  }
  function r() {
    return Ie;
  }
  function a() {
    Ie = !0;
  }
  function l() {
    return be;
  }
  function s(e) {
    be = e;
  }
  function u(e) {
    Ee.push(e);
  }
  function c() {
    Ee.forEach(function(e) {
      e();
    }), (Ee = []);
  }
  function d(e) {
    Le = e;
  }
  function m() {
    Le && Le();
  }
  function v(e) {
    ke.push(e);
  }
  function f() {
    ke.forEach(function(e) {
      e();
    }), (ke = []);
  }
  function g(e) {
    u(e);
  }
  function p(e, t) {
    for (var n = document.querySelectorAll(e), i = 0; i < n.length; i++)
      if (n[i].contains(t)) return !0;
    return !1;
  }
  function h(e, t, n) {
    for (
      var i = window.document.querySelectorAll(e),
        o = 'style' === t,
        r = 0,
        a = i.length;
      r < a;
      r++
    )
      if (o)
        for (var l = Object.keys(n), s = 0, u = l.length; s < u; s++) {
          var c = l[s],
            d = n[c];
          i[r][t][c] = d;
        }
      else i[r][t] = n;
  }
  function w() {
    E(), k('[data-display-block-unauthenticated]', {
      display: 'block'
    }), k('[data-show-unauthenticated]', { visibility: 'visible' });
  }
  function y() {
    k(
      '[data-display-block-unauthenticated], [data-display-flex-unauthenticated]',
      { display: 'none' }
    ), k('[data-show-unauthenticated]', { visibility: 'hidden' });
  }
  function b(e) {
    y(), h('[data-user-name]', 'textContent', e.id), k('[data-user-avatar]', {
      background: 'url("' + e.avatar + '") no-repeat center center',
      backgroundSize: '30px'
    }), k('[data-display-block-authenticated]', {
      display: 'block'
    }), k('[data-show-authenticated]', { visibility: 'visible' });
  }
  function E() {
    k('[data-display-block-authenticated]', {
      display: 'none'
    }), k('[data-show-authenticated]', { visibility: 'hidden' });
  }
  function k(e, t) {
    h(e, 'style', t);
  }
  function L(e) {
    throw (w(), e);
  }
  function I() {
    return e() ? ce : de;
  }
  function x() {
    n();
    var e = new XMLHttpRequest();
    (e.withCredentials = !0), (e.onerror = L), (e.onload = function() {
      if (200 === e.status) return window.location.reload();
      throw new Error(e.statusText);
    }), e.open('DELETE', I() + '/api/logout'), e.send();
  }
  function S(e) {
    if (e && e.authorizations)
      for (var t = void 0, n = 0, i = e.authorizations.length; n < i; n++)
        if (
          'api' === (t = e.authorizations[n]).client &&
          'pk' === t.usage &&
          !0 === t.default
        )
          return t.token;
  }
  function B(e) {
    var t = e.triggerEl,
      n = e.pointerEl,
      i = e.onCrossMobileThreshhold;
    (Se = function() {
      window.matchMedia('(min-width: ' + we + 'px)').matches
        ? A({ pointerEl: n, triggerEl: t })
        : i && i();
    }), window.addEventListener('resize', Se);
  }
  function _() {
    xe && (window.clearTimeout(xe), (xe = null));
  }
  function A(e) {
    var t = e.pointerEl,
      n = e.triggerEl.getBoundingClientRect();
    t.style.left = Math.round(n.left + n.width / 2) + 'px';
  }
  function T() {
    window.removeEventListener('resize', Se), (Se = null);
  }
  function C(e) {
    var t = e.pointerEl,
      n = e.onPointerReset;
    xe = window.setTimeout(function() {
      t && (t.style.left = 'auto'), n && n();
    }, 250);
  }
  function M() {
    return Ae;
  }
  function P(e) {
    if (Ae && ('Escape' === e.key || 'Esc' === e.key || 27 === e.keyCode)) {
      j();
      var t = document.getElementById('user-menu-trigger');
      t && t.focus();
    }
  }
  function z(e) {
    var t = document.getElementById('user-menu-body'),
      n = document.getElementById('user-menu-pointer'),
      i = document.getElementById('user-menu-trigger');
    t &&
      n &&
      i &&
      (t.contains(e.target) ||
        n.contains(e.target) ||
        i.contains(e.target) ||
        j());
  }
  function R() {
    var e = document.getElementById('user-menu-body'),
      t = document.getElementById('user-menu-pointer'),
      n = document.getElementById('user-menu-trigger');
    e &&
      t &&
      n &&
      (
        m && m(),
        _(),
        (Ae = !0),
        A({ pointerEl: t, triggerEl: n }),
        e.classList.add('shell-animated-menu--visible'),
        t.classList.add('shell-animated-menu__pointer--visible'),
        d(j),
        e.addEventListener('keydown', P),
        n.setAttribute('aria-expanded', 'true'),
        n.addEventListener('keydown', P),
        (Be = t),
        (_e = n),
        document.addEventListener('focusin', z),
        B({ triggerEl: _e, pointerEl: Be, onCrossMobileThreshhold: j })
      );
  }
  function j() {
    var e = document.getElementById('user-menu-body'),
      t = document.getElementById('user-menu-pointer'),
      n = document.getElementById('user-menu-trigger');
    e &&
      t &&
      n &&
      (
        (Ae = !1),
        e.classList.remove('shell-animated-menu--visible'),
        t.classList.remove('shell-animated-menu__pointer--visible'),
        e.removeEventListener('keydown', P),
        n.setAttribute('aria-expanded', 'false'),
        n.removeEventListener('keydown', P),
        document.removeEventListener('focusin', z),
        T(),
        C({
          pointerEl: Be,
          onPointerReset: function() {
            Be = null;
          }
        }),
        (_e = null)
      );
  }
  function q(e) {
    if (p('[data-sign-out]', e.target)) return e.preventDefault(), x();
    var t = M(),
      n = document.getElementById('user-menu-trigger');
    if (!t && n && n.contains(e.target)) return R();
    var i = document.getElementById('user-menu-body');
    return t && i && !i.contains(e.target) ? j() : void 0;
  }
  function N(e, t) {
    if (
      (
        'function' == typeof e ? ((t = e), (e = {})) : (e = e || {}),
        (e.cache = void 0 === e.cache || e.cache),
        r() && e.cache
      )
    ) {
      var n = i();
      return n ? b(n, l()) : w(), c(), void (t && t());
    }
    if (Te) t && g(t);
    else {
      Te = !0;
      var u = new XMLHttpRequest();
      u.open('GET', I() + '/api/session'), u.setRequestHeader(
        'Accept',
        'application/json'
      ), (u.onerror = L), (u.onload = function() {
        if ((a(), 403 === u.status)) w();
        else if (200 !== u.status) w(), console.log(u.statusText);
        else {
          var e = JSON.parse(u.response);
          o(e), s(S(e)), b(e), analytics.identify(e.id, {
            username: e.id,
            email: e.email
          });
        }
        document.addEventListener('click', q), c(), t && t(), (Te = !1);
      }), (u.withCredentials = !0), u.send();
    }
  }
  function O(e, t, n) {
    function i(t) {
      e.contains(t.target) || n.contains(t.target) || r();
    }
    function o() {
      m && m(), _(), f ||
        (
          (f = !0),
          clearTimeout(p),
          A({ pointerEl: t, triggerEl: e }),
          t.classList.add('shell-animated-menu__pointer--visible'),
          n.classList.add('shell-animated-menu--visible'),
          e.setAttribute('aria-expanded', 'true'),
          d(r),
          h.addEventListener('focusin', i),
          B({ triggerEl: e, pointerEl: t, onCrossMobileThreshhold: r })
        );
    }
    function r() {
      f &&
        (
          (f = !1),
          clearTimeout(p),
          (g = null),
          t.classList.remove('shell-animated-menu__pointer--visible'),
          n.classList.remove('shell-animated-menu--visible'),
          e.setAttribute('aria-expanded', 'false'),
          h.removeEventListener('focusin', i),
          T(),
          C({ pointerEl: t })
        );
    }
    function a() {
      if (f && g === Me) return r();
      (g = Me), f || (clearTimeout(p), o());
    }
    function l() {
      g !== Me &&
        (
          (g = null),
          (p = setTimeout(function() {
            f && null === g && r();
          }, Pe))
        );
    }
    function s() {
      g !== Me && (clearTimeout(p), (g = Ce));
    }
    function u(t) {
      if (t.target.getAttribute && t.target.getAttribute('data-nav-link'))
        return r();
      if (!n.contains(t.target)) return e.contains(t.target) ? a() : void r();
    }
    function c(t) {
      f &&
        (('Escape' !== t.key && 'Esc' !== t.key && 27 !== t.keyCode) ||
          (r(), e.focus()));
    }
    var f = !1,
      g = null,
      p = void 0,
      h = window.document;
    if (!e.hasAttribute('data-page-shell-hover-menu')) {
      e.setAttribute('data-page-shell-hover-menu', '');
      var w = ue(
        e,
        function() {
          g !== Me && (clearTimeout(p), (g = Ce), o());
        },
        function() {}
      );
      e.addEventListener('mouseleave', l), e.addEventListener(
        'keydown',
        c
      ), n.addEventListener('mouseenter', s), n.addEventListener(
        'mouseleave',
        l
      ), n.addEventListener('keydown', c), h.addEventListener('click', u);
      var y = [];
      if ('ontouchstart' in document.documentElement)
        for (var b = document.body.childNodes, E = 0, k = b.length; E < k; E++)
          !(function(e, t) {
            var n = b[e];
            n.addEventListener('mouseover', ze), y.push(function() {
              n.removeEventListener('mouseover', ze);
            });
          })(E);
      v(function() {
        e.removeAttribute(
          'data-page-shell-hover-menu'
        ), w.remove(), e.removeEventListener('mouseleave', l), e.removeEventListener('keydown', c), n.removeEventListener('mouseenter', s), n.removeEventListener('mouseleave', l), n.removeEventListener('keydown', c), h.removeEventListener('click', u), y.forEach(
          function(e) {
            e();
          }
        );
      });
    }
  }
  function D(e) {
    console.log('Raven failed to initialize'), e && console.log(e);
  }
  function U() {
    t(function() {
      if (!window.Raven) {
        var e = {
            shouldSendCallback: function() {
              return Re;
            }
          },
          t = document.createElement('script');
        (t.type = 'text/javascript'), (t.src =
          'https://cdn.ravenjs.com/' + pe + '/raven.min.js'), t.setAttribute(
          'crossorigin',
          'anonymous'
        ), t.setAttribute('async', ''), t.setAttribute(
          'defer',
          ''
        ), (t.onerror = D), (t.onload = function() {
          window.Raven ? window.Raven.config(he, e).install() : D();
        }), document.head.appendChild(t);
      }
    });
  }
  function X() {
    if (!je) {
      var e = document.getElementById('page-shell'),
        t = document.getElementById('mobile-nav-menu'),
        n = document.getElementById('mobile-nav-backdrop');
      if (t && e && n) {
        var i = Math.max(
          t.getBoundingClientRect().bottom + 120,
          window.innerHeight
        );
        (e.style.height = String(i) + 'px'), (e.style.overflow =
          'hidden'), n.classList.add(
          'shell-mobile-nav__backdrop--visible'
        ), (n.style.height =
          String(i - parseInt(n.style.top)) + 'px'), (je = !0);
      }
    }
  }
  function Y() {
    if (je) {
      var e = document.getElementById('page-shell'),
        t = document.getElementById('mobile-nav-backdrop');
      e &&
        t &&
        (
          (e.style.height = ''),
          (e.style.overflow = ''),
          (e.style.overflowX = 'hidden'),
          t.classList.remove('shell-mobile-nav__backdrop--visible'),
          (je = !1)
        );
    }
  }
  function H(e, t) {
    return '' + e + J(t);
  }
  function F(e, t) {
    return '-' + e + '-' + t;
  }
  function J(e) {
    return '' + e.charAt(0).toUpperCase() + e.substr(1);
  }
  function W(e) {
    return (
      e in
      (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window)
    );
  }
  function Q(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qe;
    return (
      e in n.style ||
      (!!t &&
        Ne.some(function(t) {
          return Q(H(t, e));
        }))
    );
  }
  function V(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : qe,
      o = n.allowPrefixedProp,
      r = n.allowPrefixedValue,
      a = !1;
    return (o || r) &&
      (a = Ne.some(function(n) {
        return V(o ? H(n, e) : e, r ? F(n, t) : t);
      })), a || ((i.style[e] = t), i.style[e] === t);
  }
  function Z() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : qe;
    (Oe = {
      flexBox:
        Q('flex', e, t) &&
        V(
          'display',
          'flex',
          { allowPrefixedProp: !1, allowPrefixedValue: e },
          t
        ),
      viewportUnits: V(
        'width',
        '100vw',
        { allowPrefixedProp: !1, allowPrefixedValue: !1 },
        t
      ),
      visibilityState: W('visibilityState', window.document),
      devicePixelRatio: W('devicePixelRatio')
    }).doesCutMustard = Object.keys(Oe).every(function(e) {
      return Oe[e];
    });
  }
  function G() {
    var e = window.document.getElementById('page-shell-compatibility-dismiss'),
      t = window.document.getElementById('page-shell-compatibility-warning');
    (Ue = !0), (De = !1), e && e.removeEventListener('click', G), t &&
      (t.style.display = 'none'), window.localStorage &&
      window.localStorage.setItem(
        'suppress-browser-compatibility-warning',
        'true'
      );
  }
  function $() {
    if (
      (
        null == Oe.doesCutMustard && Z(!0),
        !(
          Ue ||
          Oe.doesCutMustard ||
          ('localStorage' in window &&
            'true' ===
              window.localStorage.getItem(
                'suppress-browser-compatibility-warning'
              ))
        )
      )
    ) {
      var e = window.document.getElementById(
        'page-shell-compatibility-warning'
      );
      if ((e && (e.style.display = 'block'), !De)) {
        var t = window.document.getElementById(
          'page-shell-compatibility-dismiss'
        );
        t && t.addEventListener('click', G);
      }
      De = !0;
    }
  }
  function K() {
    window.matchMedia('(min-width: ' + we + 'px)').matches && te();
  }
  function ee() {
    var e = document.getElementById('mobile-nav-menu'),
      t = document.getElementById('page-header-content');
    e &&
      (
        (Xe = !0),
        e.classList.add('shell-animated-menu--visible'),
        t.classList.add('shell-mobile-nav--visible'),
        Q('textOrientation', !0) ||
          (
            document
              .querySelector('.shell-mobile-nav__trigger__bar--top')
              .setAttribute('transform', 'translate(6 -1) rotate(45)'),
            document
              .querySelector('.shell-mobile-nav__trigger__bar--bottom')
              .setAttribute('transform', 'translate(-6.5 6) rotate(-45)')
          ),
        X(),
        window.addEventListener('resize', K)
      );
  }
  function te() {
    var e = document.getElementById('mobile-nav-menu'),
      t = document.getElementById('page-header-content');
    e &&
      (
        (Xe = !1),
        e.classList.remove('shell-animated-menu--visible'),
        t.classList.remove('shell-mobile-nav--visible'),
        Q('textOrientation', !0) ||
          (
            document
              .querySelector('.shell-mobile-nav__trigger__bar--top')
              .setAttribute('transform', ''),
            document
              .querySelector('.shell-mobile-nav__trigger__bar--bottom')
              .setAttribute('transform', '')
          ),
        Y(),
        window.removeEventListener('resize', K)
      );
  }
  function ne(e) {
    var t = document.getElementById('mobile-nav-trigger-toggle'),
      n = document.getElementById('mobile-nav-menu'),
      i = document.getElementById('page-header-content');
    t &&
      n &&
      (e.target.getAttribute && e.target.getAttribute('data-nav-link')
        ? (
            (document.documentElement.scrollTop = 0),
            (document.body.scrollTop = 0),
            te()
          )
        : t.contains(e.target)
          ? Xe ? te() : ee()
          : !Xe || n.contains(e.target) || i.contains(e.target) || te());
  }
  function ie() {
    if (!Ye) {
      Ye = !0;
      var e = document.querySelectorAll('[data-nav-trigger]');
      if (0 !== e.length) {
        var t = void 0,
          n = void 0,
          i = void 0;
        for (i = 0; i < e.length; i++)
          (n = (t = e[i]).getAttribute('data-nav-trigger')), O(
            t,
            document.querySelector('[data-nav-pointer="' + n + '"]'),
            document.querySelector('[data-nav-menu="' + n + '"]')
          );
        document.addEventListener('click', ne);
      }
    }
  }
  function oe() {
    Ye &&
      ((Ye = !1), f(), Y(), te(), document.removeEventListener('click', ne));
  }
  function re() {
    var t = (window.analytics = window.analytics || []);
    if (((window.analytics = t), !t.initialize))
      if (t.invoked)
        window.console &&
          console.error &&
          console.error('Segment snippet included twice.');
      else {
        (t.invoked = !0), (t.methods = [
          'trackSubmit',
          'trackClick',
          'trackLink',
          'trackForm',
          'pageview',
          'identify',
          'reset',
          'group',
          'track',
          'ready',
          'alias',
          'debug',
          'page',
          'once',
          'off',
          'on'
        ]), (t.factory = function(e) {
          return function() {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(e), t.push(n), t;
          };
        });
        for (var n = 0; n < t.methods.length; n++) {
          var i = t.methods[n];
          t[i] = t.factory(i);
        }
        (t.load = function(e) {
          var t = document.createElement('script');
          (t.type = 'text/javascript'), (t.async = !0), (t.src =
            ('https:' === document.location.protocol ? 'https://' : 'http://') +
            'cdn.segment.com/analytics.js/v1/' +
            e +
            '/analytics.min.js');
          var n = document.getElementsByTagName('script')[0];
          n.parentNode.insertBefore(t, n);
        }), (t.SNIPPET_VERSION = '4.0.0');
      }
    e() ? t.load(fe) : t.load(ge), t.page();
  }
  function ae() {
    if (window.history && window.history.pushState) {
      var e = void 0,
        t = function(t) {
          (t = t || {}), setTimeout(function() {
            (t.referrer = e), analytics.page(t), window._cio && window._cio.page && window._cio.page(window.location.href), (e = window.location.href);
          }, 300);
        },
        n = window.history.pushState;
      (window.history.pushState = function() {
        (e = window.location.href), t({
          clientSideRouting: 'pushstate'
        }), n.apply(window.history, arguments);
      }), window.addEventListener('popstate', function() {
        t({ clientSideRouting: 'popstate' });
      });
    }
  }
  var le = function() {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        for (var i in n) se.call(n, i) && (e[i] = n[i]);
      }
      return e;
    },
    se = Object.prototype.hasOwnProperty,
    ue = function(e, t, n) {
      function i(e, t) {
        return f && (f = clearTimeout(f)), (v = 0), n.call(e, t);
      }
      function o(e) {
        (s = e.clientX), (u = e.clientY);
      }
      function r(e, n) {
        if (
          (
            f && (f = clearTimeout(f)),
            Math.abs(c - s) + Math.abs(d - u) < g.sensitivity
          )
        )
          return (v = 1), t.call(e, n);
        (c = s), (d = u), (f = setTimeout(function() {
          r(e, n);
        }, g.interval));
      }
      function a(t) {
        return f && (f = clearTimeout(f)), e.removeEventListener(
          'mousemove',
          o,
          !1
        ), 1 !== v &&
          (
            (c = t.clientX),
            (d = t.clientY),
            e.addEventListener('mousemove', o, !1),
            (f = setTimeout(function() {
              r(e, t);
            }, g.interval))
          ), this;
      }
      function l(t) {
        return f && (f = clearTimeout(f)), e.removeEventListener(
          'mousemove',
          o,
          !1
        ), 1 === v &&
          (f = setTimeout(function() {
            i(e, t);
          }, g.timeout)), this;
      }
      var s,
        u,
        c,
        d,
        m = {},
        v = 0,
        f = 0,
        g = { sensitivity: 7, interval: 100, timeout: 0 };
      return (m.options = function(e) {
        return (g = le({}, g, e)), m;
      }), (m.remove = function() {
        e &&
          (
            e.removeEventListener('mouseover', a, !1),
            e.removeEventListener('mouseout', l, !1)
          );
      }), e &&
        (
          e.addEventListener('mouseover', a, !1),
          e.addEventListener('mouseout', l, !1)
        ), m;
    },
    ce = 'https://www.mapbox.com',
    de = 'https://122e4e-mapbox.global.ssl.fastly.net',
    me =
      'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
    ve =
      'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpZ3BqeDZlcDAwMDBzcmt1YnQ1OTM4cTEifQ.54XwgUSkvlmB7gHW4vWJ3w',
    fe = 'fl0c8p240n',
    ge = '0biiejpgfj',
    pe = '3.17.0',
    he = 'https://581913e6cd0845d785f5b551a4986b61@sentry.io/11290',
    we = 640,
    ye = void 0,
    be = void 0,
    Ee = [],
    ke = [],
    Le = void 0,
    Ie = !1,
    xe = void 0,
    Se = void 0,
    Be = null,
    _e = null,
    Ae = !1,
    Te = !1,
    Ce = 'mouse',
    Me = 'click',
    Pe = 300,
    ze = function() {},
    Re = !0,
    je = !1,
    qe = window.document.createElement('div'),
    Ne = ['webkit', 'moz', 'o', 'ms'],
    Oe = {},
    De = !1,
    Ue = !1,
    Xe = !1,
    Ye = !1,
    He = !1,
    Fe = {
      isProduction: e,
      afterDomContentLoaded: t,
      hoverintent: ue,
      appendFullscreenLoader: n,
      getMapboxAccessToken: function() {
        return e() ? me : ve;
      },
      getUser: i,
      isUserChecked: r,
      onNextUserCheck: g,
      afterUserCheck: function(e) {
        r() ? e() : g(e);
      },
      getUserPublicAccessToken: l,
      querySelectorContainsElement: p,
      signOut: x,
      checkSession: N,
      createHoverMenu: O,
      initializeNavigation: ie,
      removeNavigation: oe,
      initialize: function() {
        He || (re(), U(), ae()), (He = !0), t(function() {
          N(), oe(), ie(), $();
        });
      },
      disableRaven: function() {
        Re = !1;
      },
      generateCompatibilitySummary: Z,
      getCompatibilitySummary: function() {
        return Oe;
      }
    };
  (window.MapboxPageShell = Fe), Fe.initialize();
})();
