(self.webpackChunkico_fe = self.webpackChunkico_fe || []).push([
  [34],
  {
    5035: (de, A, U) => {
      "use strict";
      U.r(A),
        U.d(A, {
          detectEnv: () => W,
          detectOS: () => q,
          formatIOSMobile: () => Be,
          formatMobileRegistry: () => R,
          formatMobileRegistryEntry: () => g,
          getClientMeta: () => ae,
          getCrypto: () => oe,
          getCryptoOrThrow: () => w,
          getDappRegistryUrl: () => i,
          getDocument: () => p,
          getDocumentOrThrow: () => d,
          getFromWindow: () => o,
          getFromWindowOrThrow: () => l,
          getLocal: () => st,
          getLocalStorage: () => J,
          getLocalStorageOrThrow: () => j,
          getLocation: () => r,
          getLocationOrThrow: () => _,
          getMobileLinkRegistry: () => lt,
          getMobileRegistryEntry: () => Te,
          getNavigator: () => I,
          getNavigatorOrThrow: () => M,
          getWalletRegistryUrl: () => n,
          isAndroid: () => ne,
          isBrowser: () => e,
          isIOS: () => Q,
          isMobile: () => te,
          isNode: () => y,
          mobileLinkChoiceKey: () => ye,
          removeLocal: () => Ie,
          safeJsonParse: () => nt,
          safeJsonStringify: () => be,
          saveMobileLinkInfo: () => Se,
          setLocal: () => Ee,
        });
      var C = U(543),
        E = U(6499),
        v = function () {
          for (var k = 0, L = 0, $ = arguments.length; L < $; L++)
            k += arguments[L].length;
          var ce = Array(k),
            ie = 0;
          for (L = 0; L < $; L++)
            for (
              var he = arguments[L], me = 0, xe = he.length;
              me < xe;
              me++, ie++
            )
              ce[ie] = he[me];
          return ce;
        },
        T = function k(L, $, ce) {
          (this.name = L),
            (this.version = $),
            (this.os = ce),
            (this.type = "browser");
        },
        a = function k(L) {
          (this.version = L),
            (this.type = "node"),
            (this.name = "node"),
            (this.os = process.platform);
        },
        B = function k(L, $, ce, ie) {
          (this.name = L),
            (this.version = $),
            (this.os = ce),
            (this.bot = ie),
            (this.type = "bot-device");
        },
        O = function k() {
          (this.type = "bot"),
            (this.bot = !0),
            (this.name = "bot"),
            (this.version = null),
            (this.os = null);
        },
        b = function k() {
          (this.type = "react-native"),
            (this.name = "react-native"),
            (this.version = null),
            (this.os = null);
        },
        ue =
          /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
        fe = 3,
        V = [
          ["aol", /AOLShield\/([0-9\._]+)/],
          ["edge", /Edge\/([0-9\._]+)/],
          ["edge-ios", /EdgiOS\/([0-9\._]+)/],
          ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
          ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
          ["samsung", /SamsungBrowser\/([0-9\.]+)/],
          ["silk", /\bSilk\/([0-9._-]+)\b/],
          ["miui", /MiuiBrowser\/([0-9\.]+)$/],
          ["beaker", /BeakerBrowser\/([0-9\.]+)/],
          ["edge-chromium", /EdgA?\/([0-9\.]+)/],
          [
            "chromium-webview",
            /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
          ],
          ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
          ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
          ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
          ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
          ["fxios", /FxiOS\/([0-9\.]+)/],
          ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
          ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
          ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
          ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
          ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
          ["ie", /MSIE\s(7\.0)/],
          ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
          ["android", /Android\s([0-9\.]+)/],
          ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
          ["safari", /Version\/([0-9\._]+).*Safari/],
          ["facebook", /FBAV\/([0-9\.]+)/],
          ["instagram", /Instagram\s([0-9\.]+)/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
          ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
          [
            "searchbot",
            /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
          ],
        ],
        ee = [
          ["iOS", /iP(hone|od|ad)/],
          ["Android OS", /Android/],
          ["BlackBerry OS", /BlackBerry|BB10/],
          ["Windows Mobile", /IEMobile/],
          ["Amazon OS", /Kindle/],
          ["Windows 3.11", /Win16/],
          ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
          ["Windows 98", /(Windows 98)|(Win98)/],
          ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
          ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
          ["Windows Server 2003", /(Windows NT 5.2)/],
          ["Windows Vista", /(Windows NT 6.0)/],
          ["Windows 7", /(Windows NT 6.1)/],
          ["Windows 8", /(Windows NT 6.2)/],
          ["Windows 8.1", /(Windows NT 6.3)/],
          ["Windows 10", /(Windows NT 10.0)/],
          ["Windows ME", /Windows ME/],
          ["Open BSD", /OpenBSD/],
          ["Sun OS", /SunOS/],
          ["Chrome OS", /CrOS/],
          ["Linux", /(Linux)|(X11)/],
          ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
          ["QNX", /QNX/],
          ["BeOS", /BeOS/],
          ["OS/2", /OS\/2/],
        ];
      function P(k) {
        var L = (function le(k) {
          return (
            "" !== k &&
            V.reduce(function (L, $) {
              var ce = $[0];
              if (L) return L;
              var he = $[1].exec(k);
              return !!he && [ce, he];
            }, !1)
          );
        })(k);
        if (!L) return null;
        var $ = L[0],
          ce = L[1];
        if ("searchbot" === $) return new O();
        var ie = ce[1] && ce[1].split(/[._]/).slice(0, 3);
        ie
          ? ie.length < fe &&
            (ie = v(
              ie,
              (function S(k) {
                for (var L = [], $ = 0; $ < k; $++) L.push("0");
                return L;
              })(fe - ie.length)
            ))
          : (ie = []);
        var he = ie.join("."),
          me = (function N(k) {
            for (var L = 0, $ = ee.length; L < $; L++) {
              var ce = ee[L],
                ie = ce[0];
              if (ce[1].exec(k)) return ie;
            }
            return null;
          })(k),
          xe = ue.exec(k);
        return xe && xe[1] ? new B($, he, me, xe[1]) : new T($, he, me);
      }
      function W(k) {
        return (function X(k) {
          return k
            ? P(k)
            : typeof document > "u" &&
              typeof navigator < "u" &&
              "ReactNative" === navigator.product
            ? new b()
            : typeof navigator < "u"
            ? P(navigator.userAgent)
            : (function x() {
                return typeof process < "u" && process.version
                  ? new a(process.version.slice(1))
                  : null;
              })();
        })(k);
      }
      function q() {
        const k = W();
        return k && k.os ? k.os : void 0;
      }
      function ne() {
        const k = q();
        return !!k && k.toLowerCase().includes("android");
      }
      function Q() {
        const k = q();
        return (
          !!k &&
          (k.toLowerCase().includes("ios") ||
            (k.toLowerCase().includes("mac") && navigator.maxTouchPoints > 1))
        );
      }
      function te() {
        return !!q() && (ne() || Q());
      }
      function y() {
        const k = W();
        return !(!k || !k.name) && "node" === k.name.toLowerCase();
      }
      function e() {
        return !y() && !!I();
      }
      const o = E.getFromWindow,
        l = E.getFromWindowOrThrow,
        d = E.getDocumentOrThrow,
        p = E.getDocument,
        M = E.getNavigatorOrThrow,
        I = E.getNavigator,
        _ = E.getLocationOrThrow,
        r = E.getLocation,
        w = E.getCryptoOrThrow,
        oe = E.getCrypto,
        j = E.getLocalStorageOrThrow,
        J = E.getLocalStorage;
      function ae() {
        return C.D();
      }
      const nt = function _e(k) {
          if ("string" != typeof k)
            throw new Error("Cannot safe json parse value of type " + typeof k);
          try {
            return JSON.parse(k);
          } catch {
            return k;
          }
        },
        be = function ve(k) {
          return "string" == typeof k ? k : JSON.stringify(k);
        };
      function Ee(k, L) {
        const $ = be(L),
          ce = J();
        ce && ce.setItem(k, $);
      }
      function st(k) {
        let L = null,
          $ = null;
        const ce = J();
        return ce && ($ = ce.getItem(k)), (L = $ && nt($)), L;
      }
      function Ie(k) {
        const L = J();
        L && L.removeItem(k);
      }
      const ye = "WALLETCONNECT_DEEPLINK_CHOICE";
      function Be(k, L) {
        const $ = encodeURIComponent(k);
        return L.universalLink
          ? `${L.universalLink}/wc?uri=${$}`
          : L.deepLink
          ? `${L.deepLink}${L.deepLink.endsWith(":") ? "//" : "/"}wc?uri=${$}`
          : "";
      }
      function Se(k) {
        const L = k.href.split("?")[0];
        Ee(ye, Object.assign(Object.assign({}, k), { href: L }));
      }
      function Te(k, L) {
        return k.filter(($) =>
          $.name.toLowerCase().includes(L.toLowerCase())
        )[0];
      }
      function lt(k, L) {
        let $ = k;
        return L && ($ = L.map((ce) => Te(k, ce)).filter(Boolean)), $;
      }
      const u = "https://registry.walletconnect.com";
      function n() {
        return u + "/api/v2/wallets";
      }
      function i() {
        return u + "/api/v2/dapps";
      }
      function g(k, L = "mobile") {
        var $;
        return {
          name: k.name || "",
          shortName: k.metadata.shortName || "",
          color: k.metadata.colors.primary || "",
          logo: null !== ($ = k.image_url.sm) && void 0 !== $ ? $ : "",
          universalLink: k[L].universal || "",
          deepLink: k[L].native || "",
        };
      }
      function R(k, L = "mobile") {
        return Object.values(k)
          .filter(($) => !!$[L].universal || !!$[L].native)
          .map(($) => g($, L));
      }
    },
    6034: (de, A, U) => {
      "use strict";
      U.r(A), U.d(A, { default: () => Sr });
      var C = {};
      U.r(C),
        U.d(C, {
          decrypt: () => _r,
          encrypt: () => mr,
          generateKey: () => pn,
          verifyHmac: () => gn,
        });
      var E = U(9671),
        v = U(2005),
        T = U.n(v),
        a = U(7394),
        B = U(3286),
        O = U(5035);
      const b = [
          "session_request",
          "session_update",
          "exchange_key",
          "connect",
          "disconnect",
          "display_uri",
          "modal_closed",
          "transport_open",
          "transport_close",
          "transport_error",
        ],
        G = [
          "eth_sendTransaction",
          "eth_signTransaction",
          "eth_sign",
          "eth_signTypedData",
          "eth_signTypedData_v1",
          "eth_signTypedData_v2",
          "eth_signTypedData_v3",
          "eth_signTypedData_v4",
          "personal_sign",
          "wallet_addEthereumChain",
          "wallet_switchEthereumChain",
          "wallet_getPermissions",
          "wallet_requestPermissions",
          "wallet_registerOnboarding",
          "wallet_watchAsset",
          "wallet_scanQRCode",
        ],
        fe = {
          1: "mainnet",
          3: "ropsten",
          4: "rinkeby",
          5: "goerli",
          42: "kovan",
        };
      var V = U(9348),
        ee = U.n(V),
        le = (U(5829), U(8517)),
        D = U.n(le);
      const P = "hex",
        N = "utf8",
        Q = "0";
      function te(s) {
        return new Uint8Array(s);
      }
      function y(s, t = !1) {
        const c = s.toString(P);
        return t ? Me(c) : c;
      }
      function d(s) {
        return D()(s);
      }
      function p(s, t = !1) {
        return y(d(s), t);
      }
      function M(s) {
        return (function e(s) {
          return s.toString(N);
        })(d(s));
      }
      function w(s) {
        return te(
          (function r(s) {
            return Buffer.from(Fe(s), P);
          })(s)
        );
      }
      function ae(s) {
        return Buffer.from(s, N);
      }
      function he(...s) {
        let t = [];
        return (
          s.forEach((c) => (t = t.concat(Array.from(c)))),
          new Uint8Array([...t])
        );
      }
      function ft(s, t = 8, c = Q) {
        return (function Le(s, t, c = Q) {
          return (function qe(s, t, c, F = Q) {
            const z = t - s.length;
            let re = s;
            if (z > 0) {
              const Oe = F.repeat(z);
              re = c ? Oe + s : s + Oe;
            }
            return re;
          })(s, t, !0, c);
        })(
          s,
          (function Re(s, t = 8) {
            const c = s % t;
            return c ? ((s - c) / t) * t + t : s;
          })(s.length, t),
          c
        );
      }
      function Fe(s) {
        return s.replace(/^0x/, "");
      }
      function Me(s) {
        return s.startsWith("0x") ? s : `0x${s}`;
      }
      function Ce(s) {
        return (s = ft((s = Fe(s)), 2)) && (s = Me(s)), s;
      }
      function pt(s) {
        return d(new Uint8Array(s));
      }
      function Y(s, t) {
        const c = Fe(Ce(new (ee())(s).toString(16)));
        return t ? c : Me(c);
      }
      var Z = U(4237),
        pe = U(8501);
      function ge(s) {
        return Ce(s);
      }
      const Ae = pe.payloadId;
      function He() {
        return ((t, c) => {
          for (
            c = t = "";
            t++ < 36;
            c +=
              (51 * t) & 52
                ? (15 ^ t
                    ? 8 ^ (Math.random() * (20 ^ t ? 16 : 4))
                    : 4
                  ).toString(16)
                : "-"
          );
          return c;
        })();
      }
      function nn(s, t) {
        return (function g(s, t) {
          return !(
            "string" != typeof s ||
            !s.match(/^0x[0-9A-Fa-f]*$/) ||
            (t && s.length !== 2 + 2 * t)
          );
        })(s, t);
      }
      function Tt(s) {
        return typeof s.result < "u";
      }
      function Rt(s) {
        return typeof s.error < "u";
      }
      function rn(s) {
        return typeof s.event < "u";
      }
      const bn = (s) =>
        !(
          !s ||
          "0x" !== s.toLowerCase().substring(0, 2) ||
          !/^(0x)?[0-9a-f]{40}$/i.test(s) ||
          (!/^(0x)?[0-9a-f]{40}$/.test(s) &&
            !/^(0x)?[0-9A-F]{40}$/.test(s) &&
            s !==
              (function wn(s) {
                s = Fe(s.toLowerCase());
                const t = Fe(
                  (0, Z.keccak_256)(
                    (function Ke(s) {
                      return ae(s);
                    })(s)
                  )
                );
                let c = "";
                for (let F = 0; F < s.length; F++)
                  parseInt(t[F], 16) > 7
                    ? (c += s[F].toUpperCase())
                    : (c += s[F]);
                return Me(c);
              })(s))
        );
      function on(s) {
        return (
          !(function mt(s) {
            return !(s && s.length);
          })(s) &&
            !nn(s[0]) &&
            (s[0] = (function wt(s, t) {
              return (function ve(s, t = !1) {
                return y(ae(s), t);
              })(s, !t);
            })(s[0])),
          s
        );
      }
      function Bt(s) {
        if (typeof s.type < "u" && "0" !== s.type) return s;
        if (typeof s.from > "u" || !bn(s.from))
          throw new Error(
            "Transaction object must include a valid 'from' value."
          );
        function t(z) {
          let re = z;
          return (
            ("number" == typeof z ||
              ("string" == typeof z &&
                !(function Je(s) {
                  return "" === s || ("string" == typeof s && "" === s.trim());
                })(z))) &&
              (nn(z) ? "string" == typeof z && (re = ge(z)) : (re = Y(z))),
            "string" == typeof re &&
              (re = (function K(s) {
                return (function ht(s) {
                  const t = s.startsWith("0x");
                  return (
                    (s = (s = Fe(s)).startsWith(Q) ? s.substring(1) : s),
                    t ? Me(s) : s
                  );
                })(Me(s));
              })(re)),
            re
          );
        }
        const c = {
            from: ge(s.from),
            to: typeof s.to > "u" ? void 0 : ge(s.to),
            gasPrice: typeof s.gasPrice > "u" ? "" : t(s.gasPrice),
            gas:
              typeof s.gas > "u"
                ? typeof s.gasLimit > "u"
                  ? ""
                  : t(s.gasLimit)
                : t(s.gas),
            value: typeof s.value > "u" ? "" : t(s.value),
            nonce: typeof s.nonce > "u" ? "" : t(s.nonce),
            data: typeof s.data > "u" ? "" : ge(s.data) || "0x",
          },
          F = ["gasPrice", "gas", "value", "nonce"];
        return (
          Object.keys(c).forEach((z) => {
            (typeof c[z] > "u" ||
              ("string" == typeof c[z] && !c[z].trim().length)) &&
              F.includes(z) &&
              delete c[z];
          }),
          c
        );
      }
      var an = U(3230);
      function sn(s) {
        return an.parse(s);
      }
      const Rn = typeof global.WebSocket < "u" ? global.WebSocket : U(3067),
        Nt = "Session currently connected",
        bt = "Session currently disconnected",
        un = "JSON RPC response format is invalid",
        cn = "User close QRCode Modal",
        Kn = "walletconnect.org",
        ln = "abcdefghijklmnopqrstuvwxyz0123456789"
          .split("")
          .map((s) => `https://${s}.bridge.walletconnect.org`);
      function Xn(s) {
        return (function Qn(s) {
          return (
            (function Yn(s) {
              return (function Jn(s) {
                let t =
                  s.indexOf("//") > -1 ? s.split("/")[2] : s.split("/")[0];
                return (t = t.split(":")[0]), (t = t.split("?")[0]), t;
              })(s)
                .split(".")
                .slice(-2)
                .join(".");
            })(s) === Kn
          );
        })(s)
          ? (function jn() {
              return ln[
                (function Vn() {
                  return Math.floor(Math.random() * ln.length);
                })()
              ];
            })()
          : s;
      }
      const tr = class er {
        constructor(t) {
          if (
            ((this.protocol = "wc"),
            (this.version = 1),
            (this._bridge = ""),
            (this._key = null),
            (this._clientId = ""),
            (this._clientMeta = null),
            (this._peerId = ""),
            (this._peerMeta = null),
            (this._handshakeId = 0),
            (this._handshakeTopic = ""),
            (this._connected = !1),
            (this._accounts = []),
            (this._chainId = 0),
            (this._networkId = 0),
            (this._rpcUrl = ""),
            (this._eventManager = new (class zn {
              constructor() {
                this._eventEmitters = [];
              }
              subscribe(t) {
                this._eventEmitters.push(t);
              }
              unsubscribe(t) {
                this._eventEmitters = this._eventEmitters.filter(
                  (c) => c.event !== t
                );
              }
              trigger(t) {
                let F,
                  c = [];
                (F = (function _n(s) {
                  return typeof s.method < "u";
                })(t)
                  ? t.method
                  : Tt(t) || Rt(t)
                  ? `response:${t.id}`
                  : rn(t)
                  ? t.event
                  : ""),
                  F && (c = this._eventEmitters.filter((z) => z.event === F)),
                  (!c || !c.length) &&
                    !(function vn(s) {
                      return b.includes(s) || s.startsWith("wc_");
                    })(F) &&
                    !rn(F) &&
                    (c = this._eventEmitters.filter(
                      (z) => "call_request" === z.event
                    )),
                  c.forEach((z) => {
                    if (Rt(t)) {
                      const re = new Error(t.error.message);
                      z.callback(re, null);
                    } else z.callback(null, t);
                  });
              }
            })()),
            (this._clientMeta =
              (0, O.getClientMeta)() || t.connectorOpts.clientMeta || null),
            (this._cryptoLib = t.cryptoLib),
            (this._sessionStorage =
              t.sessionStorage ||
              new (class Zn {
                constructor(t = "walletconnect") {
                  this.storageId = t;
                }
                getSession() {
                  let t = null;
                  const c = (0, O.getLocal)(this.storageId);
                  return (
                    c &&
                      (function Tn(s) {
                        return typeof s.bridge < "u";
                      })(c) &&
                      (t = c),
                    t
                  );
                }
                setSession(t) {
                  return (0, O.setLocal)(this.storageId, t), t;
                }
                removeSession() {
                  (0, O.removeLocal)(this.storageId);
                }
              })(t.connectorOpts.storageId)),
            (this._qrcodeModal = t.connectorOpts.qrcodeModal),
            (this._qrcodeModalOptions = t.connectorOpts.qrcodeModalOptions),
            (this._signingMethods = [
              ...G,
              ...(t.connectorOpts.signingMethods || []),
            ]),
            !t.connectorOpts.bridge &&
              !t.connectorOpts.uri &&
              !t.connectorOpts.session)
          )
            throw new Error(
              "Missing one of the required parameters: bridge / uri / session"
            );
          t.connectorOpts.bridge && (this.bridge = Xn(t.connectorOpts.bridge)),
            t.connectorOpts.uri && (this.uri = t.connectorOpts.uri);
          const c = t.connectorOpts.session || this._getStorageSession();
          c && (this.session = c),
            this.handshakeId &&
              this._subscribeToSessionResponse(
                this.handshakeId,
                "Session request rejected"
              ),
            (this._transport =
              t.transport ||
              new (class In {
                constructor(t) {
                  if (
                    ((this.opts = t),
                    (this._queue = []),
                    (this._events = []),
                    (this._subscriptions = []),
                    (this._protocol = t.protocol),
                    (this._version = t.version),
                    (this._url = ""),
                    (this._netMonitor = null),
                    (this._socket = null),
                    (this._nextSocket = null),
                    (this._subscriptions = t.subscriptions || []),
                    (this._netMonitor =
                      t.netMonitor ||
                      new (class An {
                        constructor() {
                          (this._eventEmitters = []),
                            typeof window < "u" &&
                              typeof window.addEventListener < "u" &&
                              (window.addEventListener("online", () =>
                                this.trigger("online")
                              ),
                              window.addEventListener("offline", () =>
                                this.trigger("offline")
                              ));
                        }
                        on(t, c) {
                          this._eventEmitters.push({ event: t, callback: c });
                        }
                        trigger(t) {
                          let c = [];
                          t &&
                            (c = this._eventEmitters.filter(
                              (F) => F.event === t
                            )),
                            c.forEach((F) => {
                              F.callback();
                            });
                        }
                      })()),
                    !t.url || "string" != typeof t.url)
                  )
                    throw new Error("Missing or invalid WebSocket url");
                  (this._url = t.url),
                    this._netMonitor.on("online", () => this._socketCreate());
                }
                set readyState(t) {}
                get readyState() {
                  return this._socket ? this._socket.readyState : -1;
                }
                set connecting(t) {}
                get connecting() {
                  return 0 === this.readyState;
                }
                set connected(t) {}
                get connected() {
                  return 1 === this.readyState;
                }
                set closing(t) {}
                get closing() {
                  return 2 === this.readyState;
                }
                set closed(t) {}
                get closed() {
                  return 3 === this.readyState;
                }
                open() {
                  this._socketCreate();
                }
                close() {
                  this._socketClose();
                }
                send(t, c, F) {
                  if (!c || "string" != typeof c)
                    throw new Error("Missing or invalid topic field");
                  this._socketSend({
                    topic: c,
                    type: "pub",
                    payload: t,
                    silent: !!F,
                  });
                }
                subscribe(t) {
                  this._socketSend({
                    topic: t,
                    type: "sub",
                    payload: "",
                    silent: !0,
                  });
                }
                on(t, c) {
                  this._events.push({ event: t, callback: c });
                }
                _socketCreate() {
                  if (this._nextSocket) return;
                  const t = (function Bn(s, t, c) {
                    var F, z;
                    const Oe = (
                        s.startsWith("https")
                          ? s.replace("https", "wss")
                          : s.startsWith("http")
                          ? s.replace("http", "ws")
                          : s
                      ).split("?"),
                      ut = (0, O.isBrowser)()
                        ? {
                            protocol: t,
                            version: c,
                            env: "browser",
                            host:
                              (null === (F = (0, O.getLocation)()) ||
                              void 0 === F
                                ? void 0
                                : F.host) || "",
                          }
                        : {
                            protocol: t,
                            version: c,
                            env:
                              (null === (z = (0, O.detectEnv)()) || void 0 === z
                                ? void 0
                                : z.name) || "",
                          },
                      ct = (function En(s, t) {
                        let c = sn(s);
                        return (
                          (c = Object.assign(Object.assign({}, c), t)),
                          (function Sn(s) {
                            return an.stringify(s);
                          })(c)
                        );
                      })(
                        (function xn(s) {
                          const t =
                            -1 !== s.indexOf("?") ? s.indexOf("?") : void 0;
                          return typeof t < "u" ? s.substr(t) : "";
                        })(Oe[1] || ""),
                        ut
                      );
                    return Oe[0] + "?" + ct;
                  })(this._url, this._protocol, this._version);
                  if (((this._nextSocket = new Rn(t)), !this._nextSocket))
                    throw new Error("Failed to create socket");
                  (this._nextSocket.onmessage = (c) => this._socketReceive(c)),
                    (this._nextSocket.onopen = () => this._socketOpen()),
                    (this._nextSocket.onerror = (c) => this._socketError(c)),
                    (this._nextSocket.onclose = () => {
                      setTimeout(() => {
                        (this._nextSocket = null), this._socketCreate();
                      }, 1e3);
                    });
                }
                _socketOpen() {
                  this._socketClose(),
                    (this._socket = this._nextSocket),
                    (this._nextSocket = null),
                    this._queueSubscriptions(),
                    this._pushQueue();
                }
                _socketClose() {
                  this._socket &&
                    ((this._socket.onclose = () => {}), this._socket.close());
                }
                _socketSend(t) {
                  const c = JSON.stringify(t);
                  this._socket && 1 === this._socket.readyState
                    ? this._socket.send(c)
                    : (this._setToQueue(t), this._socketCreate());
                }
                _socketReceive(t) {
                  var c = this;
                  return (0, E.Z)(function* () {
                    let F;
                    try {
                      F = JSON.parse(t.data);
                    } catch {
                      return;
                    }
                    if (
                      (c._socketSend({
                        topic: F.topic,
                        type: "ack",
                        payload: "",
                        silent: !0,
                      }),
                      c._socket && 1 === c._socket.readyState)
                    ) {
                      const z = c._events.filter(
                        (re) => "message" === re.event
                      );
                      z && z.length && z.forEach((re) => re.callback(F));
                    }
                  })();
                }
                _socketError(t) {
                  const c = this._events.filter((F) => "error" === F.event);
                  c && c.length && c.forEach((F) => F.callback(t));
                }
                _queueSubscriptions() {
                  this._subscriptions.forEach((c) =>
                    this._queue.push({
                      topic: c,
                      type: "sub",
                      payload: "",
                      silent: !0,
                    })
                  ),
                    (this._subscriptions = this.opts.subscriptions || []);
                }
                _setToQueue(t) {
                  this._queue.push(t);
                }
                _pushQueue() {
                  this._queue.forEach((c) => this._socketSend(c)),
                    (this._queue = []);
                }
              })({
                protocol: this.protocol,
                version: this.version,
                url: this.bridge,
                subscriptions: [this.clientId],
              })),
            this._subscribeToInternalEvents(),
            this._initTransport(),
            t.connectorOpts.uri && this._subscribeToSessionRequest(),
            t.pushServerOpts && this._registerPushServer(t.pushServerOpts);
        }
        set bridge(t) {
          t && (this._bridge = t);
        }
        get bridge() {
          return this._bridge;
        }
        set key(t) {
          if (!t) return;
          const c = (function vt(s) {
            return w(s).buffer;
          })(t);
          this._key = c;
        }
        get key() {
          return this._key
            ? (function ze(s, t) {
                return p(new Uint8Array(s), !t);
              })(this._key, !0)
            : "";
        }
        set clientId(t) {
          t && (this._clientId = t);
        }
        get clientId() {
          let t = this._clientId;
          return t || (t = this._clientId = He()), this._clientId;
        }
        set peerId(t) {
          t && (this._peerId = t);
        }
        get peerId() {
          return this._peerId;
        }
        set clientMeta(t) {}
        get clientMeta() {
          let t = this._clientMeta;
          return t || (t = this._clientMeta = (0, O.getClientMeta)()), t;
        }
        set peerMeta(t) {
          this._peerMeta = t;
        }
        get peerMeta() {
          return this._peerMeta;
        }
        set handshakeTopic(t) {
          t && (this._handshakeTopic = t);
        }
        get handshakeTopic() {
          return this._handshakeTopic;
        }
        set handshakeId(t) {
          t && (this._handshakeId = t);
        }
        get handshakeId() {
          return this._handshakeId;
        }
        get uri() {
          return this._formatUri();
        }
        set uri(t) {
          if (!t) return;
          const { handshakeTopic: c, bridge: F, key: z } = this._parseUri(t);
          (this.handshakeTopic = c), (this.bridge = F), (this.key = z);
        }
        set chainId(t) {
          this._chainId = t;
        }
        get chainId() {
          return this._chainId;
        }
        set networkId(t) {
          this._networkId = t;
        }
        get networkId() {
          return this._networkId;
        }
        set accounts(t) {
          this._accounts = t;
        }
        get accounts() {
          return this._accounts;
        }
        set rpcUrl(t) {
          this._rpcUrl = t;
        }
        get rpcUrl() {
          return this._rpcUrl;
        }
        set connected(t) {}
        get connected() {
          return this._connected;
        }
        set pending(t) {}
        get pending() {
          return !!this._handshakeTopic;
        }
        get session() {
          return {
            connected: this.connected,
            accounts: this.accounts,
            chainId: this.chainId,
            bridge: this.bridge,
            key: this.key,
            clientId: this.clientId,
            clientMeta: this.clientMeta,
            peerId: this.peerId,
            peerMeta: this.peerMeta,
            handshakeId: this.handshakeId,
            handshakeTopic: this.handshakeTopic,
          };
        }
        set session(t) {
          t &&
            ((this._connected = t.connected),
            (this.accounts = t.accounts),
            (this.chainId = t.chainId),
            (this.bridge = t.bridge),
            (this.key = t.key),
            (this.clientId = t.clientId),
            (this.clientMeta = t.clientMeta),
            (this.peerId = t.peerId),
            (this.peerMeta = t.peerMeta),
            (this.handshakeId = t.handshakeId),
            (this.handshakeTopic = t.handshakeTopic));
        }
        on(t, c) {
          this._eventManager.subscribe({ event: t, callback: c });
        }
        off(t) {
          this._eventManager.unsubscribe(t);
        }
        createInstantRequest(t) {
          var c = this;
          return (0, E.Z)(function* () {
            c._key = yield c._generateKey();
            const F = c._formatRequest({
              method: "wc_instantRequest",
              params: [
                {
                  peerId: c.clientId,
                  peerMeta: c.clientMeta,
                  request: c._formatRequest(t),
                },
              ],
            });
            (c.handshakeId = F.id),
              (c.handshakeTopic = He()),
              c._eventManager.trigger({
                event: "display_uri",
                params: [c.uri],
              }),
              c.on("modal_closed", () => {
                throw new Error(cn);
              });
            const z = () => {
              c.killSession();
            };
            try {
              const re = yield c._sendCallRequest(F);
              return re && z(), re;
            } catch (re) {
              throw (z(), re);
            }
          })();
        }
        connect(t) {
          var c = this;
          return (0, E.Z)(function* () {
            if (!c._qrcodeModal) throw new Error("QRCode Modal not provided");
            return c.connected
              ? { chainId: c.chainId, accounts: c.accounts }
              : (yield c.createSession(t),
                new Promise(
                  (function () {
                    var F = (0, E.Z)(function* (z, re) {
                      c.on("modal_closed", () => re(new Error(cn))),
                        c.on("connect", (Oe, ut) => {
                          if (Oe) return re(Oe);
                          z(ut.params[0]);
                        });
                    });
                    return function (z, re) {
                      return F.apply(this, arguments);
                    };
                  })()
                ));
          })();
        }
        createSession(t) {
          var c = this;
          return (0, E.Z)(function* () {
            if (c._connected) throw new Error(Nt);
            if (c.pending) return;
            c._key = yield c._generateKey();
            const F = c._formatRequest({
              method: "wc_sessionRequest",
              params: [
                {
                  peerId: c.clientId,
                  peerMeta: c.clientMeta,
                  chainId: t && t.chainId ? t.chainId : null,
                },
              ],
            });
            (c.handshakeId = F.id),
              (c.handshakeTopic = He()),
              c._sendSessionRequest(F, "Session update rejected", {
                topic: c.handshakeTopic,
              }),
              c._eventManager.trigger({
                event: "display_uri",
                params: [c.uri],
              });
          })();
        }
        approveSession(t) {
          if (this._connected) throw new Error(Nt);
          (this.chainId = t.chainId),
            (this.accounts = t.accounts),
            (this.networkId = t.networkId || 0),
            (this.rpcUrl = t.rpcUrl || ""),
            this._sendResponse({
              id: this.handshakeId,
              jsonrpc: "2.0",
              result: {
                approved: !0,
                chainId: this.chainId,
                networkId: this.networkId,
                accounts: this.accounts,
                rpcUrl: this.rpcUrl,
                peerId: this.clientId,
                peerMeta: this.clientMeta,
              },
            }),
            (this._connected = !0),
            this._setStorageSession(),
            this._eventManager.trigger({
              event: "connect",
              params: [
                {
                  peerId: this.peerId,
                  peerMeta: this.peerMeta,
                  chainId: this.chainId,
                  accounts: this.accounts,
                },
              ],
            });
        }
        rejectSession(t) {
          if (this._connected) throw new Error(Nt);
          const c = t && t.message ? t.message : "Session Rejected",
            F = this._formatResponse({
              id: this.handshakeId,
              error: { message: c },
            });
          this._sendResponse(F),
            (this._connected = !1),
            this._eventManager.trigger({
              event: "disconnect",
              params: [{ message: c }],
            }),
            this._removeStorageSession();
        }
        updateSession(t) {
          if (!this._connected) throw new Error(bt);
          (this.chainId = t.chainId),
            (this.accounts = t.accounts),
            (this.networkId = t.networkId || 0),
            (this.rpcUrl = t.rpcUrl || "");
          const F = this._formatRequest({
            method: "wc_sessionUpdate",
            params: [
              {
                approved: !0,
                chainId: this.chainId,
                networkId: this.networkId,
                accounts: this.accounts,
                rpcUrl: this.rpcUrl,
              },
            ],
          });
          this._sendSessionRequest(F, "Session update rejected"),
            this._eventManager.trigger({
              event: "session_update",
              params: [{ chainId: this.chainId, accounts: this.accounts }],
            }),
            this._manageStorageSession();
        }
        killSession(t) {
          var c = this;
          return (0, E.Z)(function* () {
            const F = t ? t.message : "Session Disconnected",
              re = c._formatRequest({
                method: "wc_sessionUpdate",
                params: [
                  {
                    approved: !1,
                    chainId: null,
                    networkId: null,
                    accounts: null,
                  },
                ],
              });
            yield c._sendRequest(re), c._handleSessionDisconnect(F);
          })();
        }
        sendTransaction(t) {
          var c = this;
          return (0, E.Z)(function* () {
            if (!c._connected) throw new Error(bt);
            const F = Bt(t),
              z = c._formatRequest({
                method: "eth_sendTransaction",
                params: [F],
              });
            return yield c._sendCallRequest(z);
          })();
        }
        signTransaction(t) {
          var c = this;
          return (0, E.Z)(function* () {
            if (!c._connected) throw new Error(bt);
            const F = Bt(t),
              z = c._formatRequest({
                method: "eth_signTransaction",
                params: [F],
              });
            return yield c._sendCallRequest(z);
          })();
        }
        signMessage(t) {
          var c = this;
          return (0, E.Z)(function* () {
            if (!c._connected) throw new Error(bt);
            const F = c._formatRequest({ method: "eth_sign", params: t });
            return yield c._sendCallRequest(F);
          })();
        }
        signPersonalMessage(t) {
          var c = this;
          return (0, E.Z)(function* () {
            if (!c._connected) throw new Error(bt);
            t = on(t);
            const F = c._formatRequest({ method: "personal_sign", params: t });
            return yield c._sendCallRequest(F);
          })();
        }
        signTypedData(t) {
          var c = this;
          return (0, E.Z)(function* () {
            if (!c._connected) throw new Error(bt);
            const F = c._formatRequest({
              method: "eth_signTypedData",
              params: t,
            });
            return yield c._sendCallRequest(F);
          })();
        }
        updateChain(t) {
          var c = this;
          return (0, E.Z)(function* () {
            if (!c._connected)
              throw new Error("Session currently disconnected");
            const F = c._formatRequest({
              method: "wallet_updateChain",
              params: [t],
            });
            return yield c._sendCallRequest(F);
          })();
        }
        unsafeSend(t, c) {
          return (
            this._sendRequest(t, c),
            this._eventManager.trigger({
              event: "call_request_sent",
              params: [{ request: t, options: c }],
            }),
            new Promise((F, z) => {
              this._subscribeToResponse(t.id, (re, Oe) => {
                if (re) z(re);
                else {
                  if (!Oe) throw new Error("Missing JSON RPC response");
                  F(Oe);
                }
              });
            })
          );
        }
        sendCustomRequest(t, c) {
          var F = this;
          return (0, E.Z)(function* () {
            if (!F._connected) throw new Error(bt);
            switch (t.method) {
              case "eth_accounts":
                return F.accounts;
              case "eth_chainId":
                return Y(F.chainId);
              case "eth_sendTransaction":
              case "eth_signTransaction":
                t.params && (t.params[0] = Bt(t.params[0]));
                break;
              case "personal_sign":
                t.params && (t.params = on(t.params));
            }
            const z = F._formatRequest(t);
            return yield F._sendCallRequest(z, c);
          })();
        }
        approveRequest(t) {
          if (!Tt(t))
            throw new Error(
              'JSON-RPC success response must include "result" field'
            );
          {
            const c = this._formatResponse(t);
            this._sendResponse(c);
          }
        }
        rejectRequest(t) {
          if (!Rt(t))
            throw new Error(
              'JSON-RPC error response must include "error" field'
            );
          {
            const c = this._formatResponse(t);
            this._sendResponse(c);
          }
        }
        transportClose() {
          this._transport.close();
        }
        _sendRequest(t, c) {
          var F = this;
          return (0, E.Z)(function* () {
            const z = F._formatRequest(t),
              re = yield F._encrypt(z),
              Oe = typeof c?.topic < "u" ? c.topic : F.peerId,
              ut = JSON.stringify(re),
              ct =
                typeof c?.forcePushNotification < "u"
                  ? !c.forcePushNotification
                  : (function yn(s) {
                      return (
                        !!s.method.startsWith("wc_") || !G.includes(s.method)
                      );
                    })(z);
            F._transport.send(ut, Oe, ct);
          })();
        }
        _sendResponse(t) {
          var c = this;
          return (0, E.Z)(function* () {
            const F = yield c._encrypt(t),
              z = c.peerId,
              re = JSON.stringify(F);
            c._transport.send(re, z, !0);
          })();
        }
        _sendSessionRequest(t, c, F) {
          var z = this;
          return (0, E.Z)(function* () {
            z._sendRequest(t, F), z._subscribeToSessionResponse(t.id, c);
          })();
        }
        _sendCallRequest(t, c) {
          return (
            this._sendRequest(t, c),
            this._eventManager.trigger({
              event: "call_request_sent",
              params: [{ request: t, options: c }],
            }),
            this._subscribeToCallResponse(t.id)
          );
        }
        _formatRequest(t) {
          if (typeof t.method > "u")
            throw new Error('JSON RPC request must have valid "method" value');
          return {
            id: typeof t.id > "u" ? Ae() : t.id,
            jsonrpc: "2.0",
            method: t.method,
            params: typeof t.params > "u" ? [] : t.params,
          };
        }
        _formatResponse(t) {
          if (typeof t.id > "u")
            throw new Error('JSON RPC request must have valid "id" value');
          const c = { id: t.id, jsonrpc: "2.0" };
          if (Rt(t)) {
            const F = (function Mn(s) {
              const t = s.message || "Failed or Rejected Request";
              let c = -32e3;
              if (s && !s.code)
                switch (t) {
                  case "Parse error":
                    c = -32700;
                    break;
                  case "Invalid request":
                    c = -32600;
                    break;
                  case "Method not found":
                    c = -32601;
                    break;
                  case "Invalid params":
                    c = -32602;
                    break;
                  case "Internal error":
                    c = -32603;
                    break;
                  default:
                    c = -32e3;
                }
              const F = { code: c, message: t };
              return s.data && (F.data = s.data), F;
            })(t.error);
            return Object.assign(Object.assign(Object.assign({}, c), t), {
              error: F,
            });
          }
          if (Tt(t)) return Object.assign(Object.assign({}, c), t);
          throw new Error(un);
        }
        _handleSessionDisconnect(t) {
          const c = t || "Session Disconnected";
          this._connected ||
            (this._qrcodeModal && this._qrcodeModal.close(),
            (0, O.removeLocal)(O.mobileLinkChoiceKey)),
            this._connected && (this._connected = !1),
            this._handshakeId && (this._handshakeId = 0),
            this._handshakeTopic && (this._handshakeTopic = ""),
            this._peerId && (this._peerId = ""),
            this._eventManager.trigger({
              event: "disconnect",
              params: [{ message: c }],
            }),
            this._removeStorageSession(),
            this.transportClose();
        }
        _handleSessionResponse(t, c) {
          c && c.approved
            ? (this._connected
                ? (c.chainId && (this.chainId = c.chainId),
                  c.accounts && (this.accounts = c.accounts),
                  this._eventManager.trigger({
                    event: "session_update",
                    params: [
                      { chainId: this.chainId, accounts: this.accounts },
                    ],
                  }))
                : ((this._connected = !0),
                  c.chainId && (this.chainId = c.chainId),
                  c.accounts && (this.accounts = c.accounts),
                  c.peerId && !this.peerId && (this.peerId = c.peerId),
                  c.peerMeta && !this.peerMeta && (this.peerMeta = c.peerMeta),
                  this._eventManager.trigger({
                    event: "connect",
                    params: [
                      {
                        peerId: this.peerId,
                        peerMeta: this.peerMeta,
                        chainId: this.chainId,
                        accounts: this.accounts,
                      },
                    ],
                  })),
              this._manageStorageSession())
            : this._handleSessionDisconnect(t);
        }
        _handleIncomingMessages(t) {
          var c = this;
          return (0, E.Z)(function* () {
            if (![c.clientId, c.handshakeTopic].includes(t.topic)) return;
            let z;
            try {
              z = JSON.parse(t.payload);
            } catch {
              return;
            }
            const re = yield c._decrypt(z);
            re && c._eventManager.trigger(re);
          })();
        }
        _subscribeToSessionRequest() {
          this._transport.subscribe(this.handshakeTopic);
        }
        _subscribeToResponse(t, c) {
          this.on(`response:${t}`, c);
        }
        _subscribeToSessionResponse(t, c) {
          this._subscribeToResponse(t, (F, z) => {
            F
              ? this._handleSessionResponse(F.message)
              : Tt(z)
              ? this._handleSessionResponse(c, z.result)
              : this._handleSessionResponse(
                  z.error && z.error.message ? z.error.message : c
                );
          });
        }
        _subscribeToCallResponse(t) {
          return new Promise((c, F) => {
            this._subscribeToResponse(t, (z, re) => {
              z
                ? F(z)
                : Tt(re)
                ? c(re.result)
                : F(re.error && re.error.message ? re.error : new Error(un));
            });
          });
        }
        _subscribeToInternalEvents() {
          this.on("display_uri", () => {
            this._qrcodeModal &&
              this._qrcodeModal.open(
                this.uri,
                () => {
                  this._eventManager.trigger({
                    event: "modal_closed",
                    params: [],
                  });
                },
                this._qrcodeModalOptions
              );
          }),
            this.on("connect", () => {
              this._qrcodeModal && this._qrcodeModal.close();
            }),
            this.on("call_request_sent", (t, c) => {
              const { request: F } = c.params[0];
              if (
                (0, O.isMobile)() &&
                this._signingMethods.includes(F.method)
              ) {
                const z = (0, O.getLocal)(O.mobileLinkChoiceKey);
                z && (window.location.href = z.href);
              }
            }),
            this.on("wc_sessionRequest", (t, c) => {
              t &&
                this._eventManager.trigger({
                  event: "error",
                  params: [
                    { code: "SESSION_REQUEST_ERROR", message: t.toString() },
                  ],
                }),
                (this.handshakeId = c.id),
                (this.peerId = c.params[0].peerId),
                (this.peerMeta = c.params[0].peerMeta);
              const F = Object.assign(Object.assign({}, c), {
                method: "session_request",
              });
              this._eventManager.trigger(F);
            }),
            this.on("wc_sessionUpdate", (t, c) => {
              t && this._handleSessionResponse(t.message),
                this._handleSessionResponse(
                  "Session disconnected",
                  c.params[0]
                );
            });
        }
        _initTransport() {
          this._transport.on("message", (t) => this._handleIncomingMessages(t)),
            this._transport.on("open", () =>
              this._eventManager.trigger({
                event: "transport_open",
                params: [],
              })
            ),
            this._transport.on("close", () =>
              this._eventManager.trigger({
                event: "transport_close",
                params: [],
              })
            ),
            this._transport.on("error", () =>
              this._eventManager.trigger({
                event: "transport_error",
                params: ["Websocket connection failed"],
              })
            ),
            this._transport.open();
        }
        _formatUri() {
          return `${this.protocol}:${this.handshakeTopic}@${
            this.version
          }?bridge=${encodeURIComponent(this.bridge)}&key=${this.key}`;
        }
        _parseUri(t) {
          const c = (function Cn(s) {
            const t = s.indexOf(":"),
              c = -1 !== s.indexOf("?") ? s.indexOf("?") : void 0,
              F = s.substring(0, t),
              Oe = (function re(At) {
                const kt = At.split("@");
                return { handshakeTopic: kt[0], version: parseInt(kt[1], 10) };
              })(s.substring(t + 1, c)),
              Mt = (function ct(At) {
                const Et = sn(At);
                return { key: Et.key || "", bridge: Et.bridge || "" };
              })(typeof c < "u" ? s.substr(c) : "");
            return Object.assign(Object.assign({ protocol: F }, Oe), Mt);
          })(t);
          if (c.protocol === this.protocol) {
            if (!c.handshakeTopic)
              throw Error("Invalid or missing handshakeTopic parameter value");
            const F = c.handshakeTopic;
            if (!c.bridge)
              throw Error("Invalid or missing bridge url parameter value");
            const z = decodeURIComponent(c.bridge);
            if (!c.key) throw Error("Invalid or missing key parameter value");
            return { handshakeTopic: F, bridge: z, key: c.key };
          }
          throw new Error("URI format is invalid");
        }
        _generateKey() {
          var t = this;
          return (0, E.Z)(function* () {
            return t._cryptoLib ? yield t._cryptoLib.generateKey() : null;
          })();
        }
        _encrypt(t) {
          var c = this;
          return (0, E.Z)(function* () {
            const F = c._key;
            return c._cryptoLib && F ? yield c._cryptoLib.encrypt(t, F) : null;
          })();
        }
        _decrypt(t) {
          var c = this;
          return (0, E.Z)(function* () {
            const F = c._key;
            return c._cryptoLib && F ? yield c._cryptoLib.decrypt(t, F) : null;
          })();
        }
        _getStorageSession() {
          let t = null;
          return (
            this._sessionStorage && (t = this._sessionStorage.getSession()), t
          );
        }
        _setStorageSession() {
          this._sessionStorage && this._sessionStorage.setSession(this.session);
        }
        _removeStorageSession() {
          this._sessionStorage && this._sessionStorage.removeSession();
        }
        _manageStorageSession() {
          this._connected
            ? this._setStorageSession()
            : this._removeStorageSession();
        }
        _registerPushServer(t) {
          if (!t.url || "string" != typeof t.url)
            throw Error(
              "Invalid or missing pushServerOpts.url parameter value"
            );
          if (!t.type || "string" != typeof t.type)
            throw Error(
              "Invalid or missing pushServerOpts.type parameter value"
            );
          if (!t.token || "string" != typeof t.token)
            throw Error(
              "Invalid or missing pushServerOpts.token parameter value"
            );
          const c = {
            bridge: this.bridge,
            topic: this.clientId,
            type: t.type,
            token: t.token,
            peerName: "",
            language: t.language || "",
          };
          this.on(
            "connect",
            (function () {
              var F = (0, E.Z)(function* (z, re) {
                if (z) throw z;
                t.peerMeta && (c.peerName = re.params[0].peerMeta.name);
                try {
                  if (
                    !(yield (yield fetch(`${t.url}/new`, {
                      method: "POST",
                      headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(c),
                    })).json()).success
                  )
                    throw Error("Failed to register in Push Server");
                } catch {
                  throw Error("Failed to register in Push Server");
                }
              });
              return function (z, re) {
                return F.apply(this, arguments);
              };
            })()
          );
        }
      };
      var Ct = U(1948);
      const Lt = 256,
        hn = 256,
        yt = "AES-CBC",
        rr = `SHA-${Lt}`,
        Ot = "HMAC",
        ir = "encrypt",
        or = "decrypt",
        ar = "sign",
        sr = "verify";
      function It(s) {
        return Ft.apply(this, arguments);
      }
      function Ft() {
        return (Ft = (0, E.Z)(function* (s, t = yt) {
          return Ct.getSubtleCrypto().importKey(
            "raw",
            s,
            (function ur(s) {
              return s === yt
                ? { length: Lt, name: yt }
                : { hash: { name: rr }, name: Ot };
            })(t),
            !0,
            (function cr(s) {
              return s === yt ? [ir, or] : [ar, sr];
            })(t)
          );
        })).apply(this, arguments);
      }
      function Pt() {
        return (Pt = (0, E.Z)(function* (s, t, c) {
          const F = Ct.getSubtleCrypto(),
            z = yield It(t, yt),
            re = yield F.encrypt({ iv: s, name: yt }, z, c);
          return new Uint8Array(re);
        })).apply(this, arguments);
      }
      function Dt() {
        return (Dt = (0, E.Z)(function* (s, t, c) {
          const F = Ct.getSubtleCrypto(),
            z = yield It(t, yt),
            re = yield F.decrypt({ iv: s, name: yt }, z, c);
          return new Uint8Array(re);
        })).apply(this, arguments);
      }
      function Ht() {
        return (Ht = (0, E.Z)(function* (s, t) {
          const c = Ct.getSubtleCrypto(),
            F = yield It(s, Ot),
            z = yield c.sign({ length: hn, name: Ot }, F, t);
          return new Uint8Array(z);
        })).apply(this, arguments);
      }
      function dn(s, t) {
        return Gt.apply(this, arguments);
      }
      function Gt() {
        return (
          (Gt = (0, E.Z)(function* (s, t) {
            return yield (function hr(s, t) {
              return Ht.apply(this, arguments);
            })(s, t);
          })),
          Gt.apply(this, arguments)
        );
      }
      function pn(s) {
        return jt.apply(this, arguments);
      }
      function jt() {
        return (jt = (0, E.Z)(function* (s) {
          const c = (function nr(s) {
            return Ct.getBrowerCrypto().getRandomValues(new Uint8Array(s));
          })((s || 256) / 8);
          return (function Ge(s) {
            return te(s).buffer;
          })(d(c));
        })).apply(this, arguments);
      }
      function gn(s, t) {
        return Qt.apply(this, arguments);
      }
      function Qt() {
        return (Qt = (0, E.Z)(function* (s, t) {
          const c = w(s.data),
            F = w(s.iv),
            re = p(w(s.hmac), !1),
            Oe = he(c, F),
            ct = p(yield dn(t, Oe), !1);
          return Fe(re) === Fe(ct);
        })).apply(this, arguments);
      }
      function mr(s, t, c) {
        return Xt.apply(this, arguments);
      }
      function Xt() {
        return (Xt = (0, E.Z)(function* (s, t, c) {
          const F = te(pt(t)),
            re = te(pt(c || (yield pn(128)))),
            Oe = p(re, !1),
            ct = (function _e(s) {
              return te(ae(s));
            })(JSON.stringify(s)),
            Mt = yield (function dr(s, t, c) {
              return (function lr(s, t, c) {
                return Pt.apply(this, arguments);
              })(s, t, c);
            })(re, F, ct),
            mn = p(Mt, !1),
            At = he(Mt, re);
          return { data: mn, hmac: p(yield dn(F, At), !1), iv: Oe };
        })).apply(this, arguments);
      }
      function _r(s, t) {
        return en.apply(this, arguments);
      }
      function en() {
        return (en = (0, E.Z)(function* (s, t) {
          const c = te(pt(t));
          if (!c) throw new Error("Missing key: required for decryption");
          if (!(yield gn(s, c))) return null;
          const z = w(s.data),
            re = w(s.iv),
            ut = M(
              yield (function pr(s, t, c) {
                return (function fr(s, t, c) {
                  return Dt.apply(this, arguments);
                })(s, t, c);
              })(re, c, z)
            );
          let ct;
          try {
            ct = JSON.parse(ut);
          } catch {
            return null;
          }
          return ct;
        })).apply(this, arguments);
      }
      const yr = class vr extends tr {
        constructor(t, c) {
          super({ cryptoLib: C, connectorOpts: t, pushServerOpts: c });
        }
      };
      var wr = U(5722),
        br = U.n(wr),
        Mr = U(8866);
      class xr extends Mr.XR {
        constructor(t) {
          super(),
            (this.events = new (T())()),
            (this.accounts = []),
            (this.chainId = 1),
            (this.pending = !1),
            (this.bridge = "https://bridge.walletconnect.org"),
            (this.qrcode = !0),
            (this.qrcodeModalOptions = void 0),
            (this.opts = t),
            (this.chainId = t?.chainId || this.chainId),
            (this.wc = this.register(t));
        }
        get connected() {
          return typeof this.wc < "u" && this.wc.connected;
        }
        get connecting() {
          return this.pending;
        }
        get connector() {
          return (this.wc = this.register(this.opts)), this.wc;
        }
        on(t, c) {
          this.events.on(t, c);
        }
        once(t, c) {
          this.events.once(t, c);
        }
        off(t, c) {
          this.events.off(t, c);
        }
        removeListener(t, c) {
          this.events.removeListener(t, c);
        }
        open(t) {
          var c = this;
          return (0, E.Z)(function* () {
            if (!c.connected)
              return new Promise((F, z) => {
                c.on("error", (re) => {
                  z(re);
                }),
                  c.on("open", () => {
                    F();
                  }),
                  c.create(t);
              });
            c.onOpen();
          })();
        }
        close() {
          var t = this;
          return (0, E.Z)(function* () {
            typeof t.wc > "u" ||
              (t.wc.connected && t.wc.killSession(), t.onClose());
          })();
        }
        send(t) {
          var c = this;
          return (0, E.Z)(function* () {
            (c.wc = c.register(c.opts)),
              c.connected || (yield c.open()),
              c
                .sendPayload(t)
                .then((F) => c.events.emit("payload", F))
                .catch((F) =>
                  c.events.emit(
                    "payload",
                    (0, pe.formatJsonRpcError)(t.id, F.message)
                  )
                );
          })();
        }
        register(t) {
          if (this.wc) return this.wc;
          (this.opts = t || this.opts),
            (this.bridge = t?.connector
              ? t.connector.bridge
              : t?.bridge || "https://bridge.walletconnect.org"),
            (this.qrcode = typeof t?.qrcode > "u" || !1 !== t.qrcode),
            (this.chainId = typeof t?.chainId < "u" ? t.chainId : this.chainId),
            (this.qrcodeModalOptions = t?.qrcodeModalOptions);
          const c = {
            bridge: this.bridge,
            qrcodeModal: this.qrcode ? br() : void 0,
            qrcodeModalOptions: this.qrcodeModalOptions,
            storageId: t?.storageId,
            signingMethods: t?.signingMethods,
            clientMeta: t?.clientMeta,
          };
          if (
            ((this.wc = typeof t?.connector < "u" ? t.connector : new yr(c)),
            typeof this.wc > "u")
          )
            throw new Error("Failed to register WalletConnect connector");
          return (
            this.wc.accounts.length && (this.accounts = this.wc.accounts),
            this.wc.chainId && (this.chainId = this.wc.chainId),
            this.registerConnectorEvents(),
            this.wc
          );
        }
        onOpen(t) {
          (this.pending = !1), t && (this.wc = t), this.events.emit("open");
        }
        onClose() {
          (this.pending = !1),
            this.wc && (this.wc = void 0),
            this.events.emit("close");
        }
        onError(t, c = "Failed or Rejected Request", F = -32e3, z) {
          const re = {
            id: t.id,
            jsonrpc: t.jsonrpc,
            error: { code: F, message: c },
          };
          return (
            typeof z < "u" && (re.error.data = z),
            this.events.emit("payload", re),
            re
          );
        }
        create(t) {
          (this.wc = this.register(this.opts)),
            (this.chainId = t || this.chainId),
            !this.connected &&
              !this.pending &&
              ((this.pending = !0),
              this.registerConnectorEvents(),
              this.wc
                .createSession({ chainId: this.chainId })
                .then(() => this.events.emit("created"))
                .catch((c) => this.events.emit("error", c)));
        }
        registerConnectorEvents() {
          (this.wc = this.register(this.opts)),
            this.wc.on("connect", (t) => {
              var c, F;
              t
                ? this.events.emit("error", t)
                : ((this.accounts =
                    (null === (c = this.wc) || void 0 === c
                      ? void 0
                      : c.accounts) || []),
                  (this.chainId =
                    (null === (F = this.wc) || void 0 === F
                      ? void 0
                      : F.chainId) || this.chainId),
                  this.onOpen());
            }),
            this.wc.on("disconnect", (t) => {
              t ? this.events.emit("error", t) : this.onClose();
            }),
            this.wc.on("modal_closed", () => {
              this.events.emit("error", new Error("User closed modal"));
            }),
            this.wc.on("session_update", (t, c) => {
              const { accounts: F, chainId: z } = c.params[0];
              (!this.accounts || (F && this.accounts !== F)) &&
                ((this.accounts = F), this.events.emit("accountsChanged", F)),
                (!this.chainId || (z && this.chainId !== z)) &&
                  ((this.chainId = z), this.events.emit("chainChanged", z));
            });
        }
        sendPayload(t) {
          var c = this;
          return (0, E.Z)(function* () {
            c.wc = c.register(c.opts);
            try {
              const F = yield c.wc.unsafeSend(t);
              return c.sanitizeResponse(F);
            } catch (F) {
              return c.onError(t, F.message);
            }
          })();
        }
        sanitizeResponse(t) {
          return typeof t.error < "u" && typeof t.error.code > "u"
            ? (0, pe.formatJsonRpcError)(t.id, t.error.message, t.error.data)
            : t;
        }
      }
      const Sr = class Er {
        constructor(t) {
          (this.events = new (T())()),
            (this.rpc = { infuraId: t?.infuraId, custom: t?.rpc }),
            (this.signer = new a.r(new xr(t))),
            (this.http = this.setHttpProvider(
              this.signer.connection.chainId || t?.chainId || 1
            )),
            this.registerEventListeners();
        }
        get connected() {
          return this.signer.connection.connected;
        }
        get connector() {
          return this.signer.connection.connector;
        }
        get accounts() {
          return this.signer.connection.accounts;
        }
        get chainId() {
          return this.signer.connection.chainId;
        }
        get rpcUrl() {
          var t;
          return (
            (null === (t = this.http) || void 0 === t ? void 0 : t.connection)
              .url || ""
          );
        }
        request(t) {
          var c = this;
          return (0, E.Z)(function* () {
            switch (t.method) {
              case "eth_requestAccounts":
                return yield c.connect(), c.signer.connection.accounts;
              case "eth_accounts":
                return c.signer.connection.accounts;
              case "eth_chainId":
                return c.signer.connection.chainId;
            }
            if (G.includes(t.method)) return c.signer.request(t);
            if (typeof c.http > "u")
              throw new Error(
                `Cannot request JSON-RPC method (${t.method}) without provided rpc url`
              );
            return c.http.request(t);
          })();
        }
        sendAsync(t, c) {
          this.request(t)
            .then((F) => c(null, F))
            .catch((F) => c(F, void 0));
        }
        enable() {
          var t = this;
          return (0, E.Z)(function* () {
            return yield t.request({ method: "eth_requestAccounts" });
          })();
        }
        connect() {
          var t = this;
          return (0, E.Z)(function* () {
            t.signer.connection.connected || (yield t.signer.connect());
          })();
        }
        disconnect() {
          var t = this;
          return (0, E.Z)(function* () {
            t.signer.connection.connected && (yield t.signer.disconnect());
          })();
        }
        on(t, c) {
          this.events.on(t, c);
        }
        once(t, c) {
          this.events.once(t, c);
        }
        removeListener(t, c) {
          this.events.removeListener(t, c);
        }
        off(t, c) {
          this.events.off(t, c);
        }
        get isWalletConnect() {
          return !0;
        }
        registerEventListeners() {
          this.signer.connection.on("accountsChanged", (t) => {
            this.events.emit("accountsChanged", t);
          }),
            this.signer.connection.on("chainChanged", (t) => {
              (this.http = this.setHttpProvider(t)),
                this.events.emit("chainChanged", t);
            }),
            this.signer.on("disconnect", () => {
              this.events.emit("disconnect");
            });
        }
        setHttpProvider(t) {
          const c = (function it(s, t) {
            let c;
            const F = (function je(s, t) {
              let c;
              const F = fe[s];
              return F && (c = `https://${F}.infura.io/v3/${t}`), c;
            })(s, t.infuraId);
            return (
              t.custom && t.custom[s] ? (c = t.custom[s]) : F && (c = F), c
            );
          })(t, this.rpc);
          return typeof c > "u" ? void 0 : new a.r(new B.k(c));
        }
      };
    },
    5722: (de, A, U) => {
      function C(u) {
        return u && "object" == typeof u && "default" in u ? u.default : u;
      }
      var E = U(5035),
        v = C(U(3259)),
        T = C(U(9093)),
        a = U(8836),
        O =
          ':root {\n  --animation-duration: 300ms;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.animated {\n  animation-duration: var(--animation-duration);\n  animation-fill-mode: both;\n}\n\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n.fadeOut {\n  animation-name: fadeOut;\n}\n\n#walletconnect-wrapper {\n  -webkit-user-select: none;\n  align-items: center;\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  left: 0;\n  pointer-events: none;\n  position: fixed;\n  top: 0;\n  user-select: none;\n  width: 100%;\n  z-index: 99999999999999;\n}\n\n.walletconnect-modal__headerLogo {\n  height: 21px;\n}\n\n.walletconnect-modal__header p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  align-items: flex-start;\n  display: flex;\n  flex: 1;\n  margin-left: 5px;\n}\n\n.walletconnect-modal__close__wrapper {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  z-index: 10000;\n  background: white;\n  border-radius: 26px;\n  padding: 6px;\n  box-sizing: border-box;\n  width: 26px;\n  height: 26px;\n  cursor: pointer;\n}\n\n.walletconnect-modal__close__icon {\n  position: relative;\n  top: 7px;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transform: rotate(45deg);\n}\n\n.walletconnect-modal__close__line1 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n}\n\n.walletconnect-modal__close__line2 {\n  position: absolute;\n  width: 100%;\n  border: 1px solid rgb(48, 52, 59);\n  transform: rotate(90deg);\n}\n\n.walletconnect-qrcode__base {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: rgba(37, 41, 46, 0.95);\n  height: 100%;\n  left: 0;\n  pointer-events: auto;\n  position: fixed;\n  top: 0;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  width: 100%;\n  will-change: opacity;\n  padding: 40px;\n  box-sizing: border-box;\n}\n\n.walletconnect-qrcode__text {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 10px 0 20px 0;\n  text-align: center;\n  width: 100%;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-qrcode__text {\n    font-size: 4vw;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-qrcode__text {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-qrcode__image {\n  width: calc(100% - 30px);\n  box-sizing: border-box;\n  cursor: none;\n  margin: 0 auto;\n}\n\n.walletconnect-qrcode__notification {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  font-size: 16px;\n  padding: 16px 20px;\n  border-radius: 16px;\n  text-align: center;\n  transition: all 0.1s ease-in-out;\n  background: white;\n  color: black;\n  margin-bottom: -60px;\n  opacity: 0;\n}\n\n.walletconnect-qrcode__notification.notification__show {\n  opacity: 1;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__header {\n    height: 130px;\n  }\n  .walletconnect-modal__base {\n    overflow: auto;\n  }\n}\n\n@media only screen and (min-device-width: 415px) and (max-width: 768px) {\n  #content {\n    max-width: 768px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 375px) and (max-width: 415px) {\n  #content {\n    max-width: 414px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (min-width: 320px) and (max-width: 375px) {\n  #content {\n    max-width: 375px;\n    box-sizing: border-box;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  #content {\n    max-width: 320px;\n    box-sizing: border-box;\n  }\n}\n\n.walletconnect-modal__base {\n  -webkit-font-smoothing: antialiased;\n  background: #ffffff;\n  border-radius: 24px;\n  box-shadow: 0 10px 50px 5px rgba(0, 0, 0, 0.4);\n  font-family: ui-rounded, "SF Pro Rounded", "SF Pro Text", medium-content-sans-serif-font,\n    -apple-system, BlinkMacSystemFont, ui-sans-serif, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell,\n    "Open Sans", "Helvetica Neue", sans-serif;\n  margin-top: 41px;\n  padding: 24px 24px 22px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n  will-change: transform;\n  overflow: visible;\n  transform: translateY(-50%);\n  top: 50%;\n  max-width: 500px;\n  margin: auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__base {\n    padding: 24px 12px;\n  }\n}\n\n.walletconnect-modal__base .hidden {\n  transform: translateY(150%);\n  transition: 0.125s cubic-bezier(0.4, 0, 1, 1);\n}\n\n.walletconnect-modal__header {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  left: 0;\n  justify-content: space-between;\n  position: absolute;\n  top: -42px;\n  width: 100%;\n}\n\n.walletconnect-modal__base .wc-logo {\n  align-items: center;\n  display: flex;\n  height: 26px;\n  margin-top: 15px;\n  padding-bottom: 15px;\n  pointer-events: auto;\n}\n\n.walletconnect-modal__base .wc-logo div {\n  background-color: #3399ff;\n  height: 21px;\n  margin-right: 5px;\n  mask-image: url("images/wc-logo.svg") center no-repeat;\n  width: 32px;\n}\n\n.walletconnect-modal__base .wc-logo p {\n  color: #ffffff;\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n}\n\n.walletconnect-modal__base h2 {\n  color: rgba(60, 66, 82, 0.6);\n  font-size: 16px;\n  font-weight: 600;\n  letter-spacing: 0;\n  line-height: 1.1875em;\n  margin: 0 0 19px 0;\n  text-align: center;\n  width: 100%;\n}\n\n.walletconnect-modal__base__row {\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  align-items: center;\n  border-radius: 20px;\n  cursor: pointer;\n  display: flex;\n  height: 56px;\n  justify-content: space-between;\n  padding: 0 15px;\n  position: relative;\n  margin: 0px 0px 8px;\n  text-align: left;\n  transition: 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  will-change: transform;\n  text-decoration: none;\n}\n\n.walletconnect-modal__base__row:hover {\n  background: rgba(60, 66, 82, 0.06);\n}\n\n.walletconnect-modal__base__row:active {\n  background: rgba(60, 66, 82, 0.06);\n  transform: scale(0.975);\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n\n.walletconnect-modal__base__row__h3 {\n  color: #25292e;\n  font-size: 20px;\n  font-weight: 700;\n  margin: 0;\n  padding-bottom: 3px;\n}\n\n.walletconnect-modal__base__row__right {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.walletconnect-modal__base__row__right__app-icon {\n  border-radius: 8px;\n  height: 34px;\n  margin: 0 11px 2px 0;\n  width: 34px;\n  background-size: 100%;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-modal__base__row__right__caret {\n  height: 18px;\n  opacity: 0.3;\n  transition: 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);\n  width: 8px;\n  will-change: opacity;\n}\n\n.walletconnect-modal__base__row:hover .caret,\n.walletconnect-modal__base__row:active .caret {\n  opacity: 0.6;\n}\n\n.walletconnect-modal__mobile__toggle {\n  width: 80%;\n  display: flex;\n  margin: 0 auto;\n  position: relative;\n  overflow: hidden;\n  border-radius: 8px;\n  margin-bottom: 18px;\n  background: #d4d5d9;\n}\n\n.walletconnect-modal__single_wallet {\n  display: flex;\n  justify-content: center;\n  margin-top: 7px;\n  margin-bottom: 18px;\n}\n\n.walletconnect-modal__single_wallet a {\n  cursor: pointer;\n  color: rgb(64, 153, 255);\n  font-size: 21px;\n  font-weight: 800;\n  text-decoration: none !important;\n  margin: 0 auto;\n}\n\n.walletconnect-modal__mobile__toggle_selector {\n  width: calc(50% - 8px);\n  background: white;\n  position: absolute;\n  border-radius: 5px;\n  height: calc(100% - 8px);\n  top: 4px;\n  transition: all 0.2s ease-in-out;\n  transform: translate3d(4px, 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle.right__selected .walletconnect-modal__mobile__toggle_selector {\n  transform: translate3d(calc(100% + 12px), 0, 0);\n}\n\n.walletconnect-modal__mobile__toggle a {\n  font-size: 12px;\n  width: 50%;\n  text-align: center;\n  padding: 8px;\n  margin: 0;\n  font-weight: 600;\n  z-index: 1;\n}\n\n.walletconnect-modal__footer {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n\n@media only screen and (max-width: 768px) {\n  .walletconnect-modal__footer {\n    margin-top: 5vw;\n  }\n}\n\n.walletconnect-modal__footer a {\n  cursor: pointer;\n  color: #898d97;\n  font-size: 15px;\n  margin: 0 auto;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-modal__footer a {\n    font-size: 14px;\n  }\n}\n\n.walletconnect-connect__buttons__wrapper {\n  max-height: 44vh;\n}\n\n.walletconnect-connect__buttons__wrapper__android {\n  margin: 50% 0;\n}\n\n.walletconnect-connect__buttons__wrapper__wrap {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  margin: 10px 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__buttons__wrapper__wrap {\n    margin-top: 40px;\n  }\n}\n\n.walletconnect-connect__button {\n  background-color: rgb(64, 153, 255);\n  padding: 12px;\n  border-radius: 8px;\n  text-decoration: none;\n  color: rgb(255, 255, 255);\n  font-weight: 500;\n}\n\n.walletconnect-connect__button__icon_anchor {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 8px;\n  width: 42px;\n  justify-self: center;\n  flex-direction: column;\n  text-decoration: none !important;\n}\n\n@media only screen and (max-width: 320px) {\n  .walletconnect-connect__button__icon_anchor {\n    margin: 4px;\n  }\n}\n\n.walletconnect-connect__button__icon {\n  border-radius: 10px;\n  height: 42px;\n  margin: 0;\n  width: 42px;\n  background-size: cover !important;\n  box-shadow: 0 4px 12px 0 rgba(37, 41, 46, 0.25);\n}\n\n.walletconnect-connect__button__text {\n  color: #424952;\n  font-size: 2.7vw;\n  text-decoration: none !important;\n  padding: 0;\n  margin-top: 1.8vw;\n  font-weight: 600;\n}\n\n@media only screen and (min-width: 768px) {\n  .walletconnect-connect__button__text {\n    font-size: 16px;\n    margin-top: 12px;\n  }\n}\n\n.walletconnect-search__input {\n  border: none;\n  background: #d4d5d9;\n  border-style: none;\n  padding: 8px 16px;\n  outline: none;\n  font-style: normal;\n  font-stretch: normal;\n  font-size: 16px;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  border-radius: 8px;\n  width: calc(100% - 16px);\n  margin: 0;\n  margin-bottom: 8px;\n}\n';
      typeof Symbol < "u" &&
        (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
        typeof Symbol < "u" &&
          (Symbol.asyncIterator ||
            (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
      var fe =
          "data:image/svg+xml,%3Csvg height='185' viewBox='0 0 300 185' width='300' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m61.4385429 36.2562612c48.9112241-47.8881663 128.2119871-47.8881663 177.1232091 0l5.886545 5.7634174c2.445561 2.3944081 2.445561 6.2765112 0 8.6709204l-20.136695 19.715503c-1.222781 1.1972051-3.2053 1.1972051-4.428081 0l-8.100584-7.9311479c-34.121692-33.4079817-89.443886-33.4079817-123.5655788 0l-8.6750562 8.4936051c-1.2227816 1.1972041-3.205301 1.1972041-4.4280806 0l-20.1366949-19.7155031c-2.4455612-2.3944092-2.4455612-6.2765122 0-8.6709204zm218.7677961 40.7737449 17.921697 17.546897c2.445549 2.3943969 2.445563 6.2764769.000031 8.6708899l-80.810171 79.121134c-2.445544 2.394426-6.410582 2.394453-8.85616.000062-.00001-.00001-.000022-.000022-.000032-.000032l-57.354143-56.154572c-.61139-.598602-1.60265-.598602-2.21404 0-.000004.000004-.000007.000008-.000011.000011l-57.3529212 56.154531c-2.4455368 2.394432-6.4105755 2.394472-8.8561612.000087-.0000143-.000014-.0000296-.000028-.0000449-.000044l-80.81241943-79.122185c-2.44556021-2.394408-2.44556021-6.2765115 0-8.6709197l17.92172963-17.5468673c2.4455602-2.3944082 6.4105989-2.3944082 8.8561602 0l57.3549775 56.155357c.6113908.598602 1.602649.598602 2.2140398 0 .0000092-.000009.0000174-.000017.0000265-.000024l57.3521031-56.155333c2.445505-2.3944633 6.410544-2.3945531 8.856161-.0002.000034.0000336.000068.0000673.000101.000101l57.354902 56.155432c.61139.598601 1.60265.598601 2.21404 0l57.353975-56.1543249c2.445561-2.3944092 6.410599-2.3944092 8.85616 0z' fill='%233b99fc'/%3E%3C/svg%3E",
        V = "WalletConnect",
        ee = 300,
        X = "rgb(64, 153, 255)",
        le = "walletconnect-wrapper",
        D = "walletconnect-style-sheet",
        P = "walletconnect-qrcode-modal",
        N = "walletconnect-qrcode-close",
        x = "walletconnect-qrcode-text",
        S = "walletconnect-connect-button";
      function W(u) {
        return a.createElement(
          "div",
          { className: "walletconnect-modal__header" },
          a.createElement("img", {
            src: fe,
            className: "walletconnect-modal__headerLogo",
          }),
          a.createElement("p", null, V),
          a.createElement(
            "div",
            {
              className: "walletconnect-modal__close__wrapper",
              onClick: u.onClose,
            },
            a.createElement(
              "div",
              { id: N, className: "walletconnect-modal__close__icon" },
              a.createElement("div", {
                className: "walletconnect-modal__close__line1",
              }),
              a.createElement("div", {
                className: "walletconnect-modal__close__line2",
              })
            )
          )
        );
      }
      function q(u) {
        return a.createElement(
          "a",
          {
            className: "walletconnect-connect__button",
            href: u.href,
            id: S + "-" + u.name,
            onClick: u.onClick,
            rel: "noopener noreferrer",
            style: { backgroundColor: u.color },
            target: "_blank",
          },
          u.name
        );
      }
      var ne =
        "data:image/svg+xml,%3Csvg fill='none' height='18' viewBox='0 0 8 18' width='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath clip-rule='evenodd' d='m.586301.213898c-.435947.33907-.5144813.967342-.175411 1.403292l4.87831 6.27212c.28087.36111.28087.86677 0 1.22788l-4.878311 6.27211c-.33907.436-.260536 1.0642.175412 1.4033.435949.3391 1.064219.2605 1.403289-.1754l4.87832-6.2721c.84259-1.08336.84259-2.60034 0-3.68367l-4.87832-6.27212c-.33907-.4359474-.96734-.514482-1.403289-.175412z' fill='%233c4252' fill-rule='evenodd'/%3E%3C/svg%3E";
      function Q(u) {
        var n = u.color,
          R = u.logo;
        return a.createElement(
          "a",
          {
            className: "walletconnect-modal__base__row",
            href: u.href,
            onClick: u.onClick,
            rel: "noopener noreferrer",
            target: "_blank",
          },
          a.createElement(
            "h3",
            { className: "walletconnect-modal__base__row__h3" },
            u.name
          ),
          a.createElement(
            "div",
            { className: "walletconnect-modal__base__row__right" },
            a.createElement("div", {
              className: "walletconnect-modal__base__row__right__app-icon",
              style: {
                background: "url('" + R + "') " + n,
                backgroundSize: "100%",
              },
            }),
            a.createElement("img", {
              src: ne,
              className: "walletconnect-modal__base__row__right__caret",
            })
          )
        );
      }
      function te(u) {
        var g = u.name,
          L =
            window.innerWidth < 768
              ? (g.length > 8 ? 2.5 : 2.7) + "vw"
              : "inherit";
        return a.createElement(
          "a",
          {
            className: "walletconnect-connect__button__icon_anchor",
            href: u.href,
            onClick: u.onClick,
            rel: "noopener noreferrer",
            target: "_blank",
          },
          a.createElement("div", {
            className: "walletconnect-connect__button__icon",
            style: {
              background: "url('" + u.logo + "') " + u.color,
              backgroundSize: "100%",
            },
          }),
          a.createElement(
            "div",
            {
              style: { fontSize: L },
              className: "walletconnect-connect__button__text",
            },
            g
          )
        );
      }
      var y = 5,
        e = 12;
      function o(u) {
        var n = E.isAndroid(),
          i = a.useState(""),
          g = i[0],
          R = i[1],
          k = a.useState(""),
          L = k[0],
          $ = k[1],
          ce = a.useState(1),
          ie = ce[0],
          he = ce[1],
          me = L
            ? u.links.filter(function (Fe) {
                return Fe.name.toLowerCase().includes(L.toLowerCase());
              })
            : u.links,
          xe = u.errorMessage,
          Re = L || me.length > y,
          ot = Math.ceil(me.length / e),
          Ne = [(ie - 1) * e + 1, ie * e],
          Ue = me.length
            ? me.filter(function (Fe, Me) {
                return Me + 1 >= Ne[0] && Me + 1 <= Ne[1];
              })
            : [],
          ft = !n && ot > 1,
          Le = void 0;
        return a.createElement(
          "div",
          null,
          a.createElement(
            "p",
            { id: x, className: "walletconnect-qrcode__text" },
            n ? u.text.connect_mobile_wallet : u.text.choose_preferred_wallet
          ),
          !n &&
            a.createElement("input", {
              className: "walletconnect-search__input",
              placeholder: "Search",
              value: g,
              onChange: function We(Fe) {
                R(Fe.target.value),
                  clearTimeout(Le),
                  Fe.target.value
                    ? (Le = setTimeout(function () {
                        $(Fe.target.value), he(1);
                      }, 1e3))
                    : (R(""), $(""), he(1));
              },
            }),
          a.createElement(
            "div",
            {
              className:
                "walletconnect-connect__buttons__wrapper" +
                (n ? "__android" : Re && me.length ? "__wrap" : ""),
            },
            n
              ? a.createElement(q, {
                  name: u.text.connect,
                  color: X,
                  href: u.uri,
                  onClick: a.useCallback(function () {
                    E.saveMobileLinkInfo({ name: "Unknown", href: u.uri });
                  }, []),
                })
              : Ue.length
              ? Ue.map(function (Fe) {
                  var Me = Fe.color,
                    Ce = Fe.name,
                    ht = Fe.shortName,
                    Pe = Fe.logo,
                    ke = E.formatIOSMobile(u.uri, Fe),
                    dt = a.useCallback(
                      function () {
                        E.saveMobileLinkInfo({ name: Ce, href: ke });
                      },
                      [Ue]
                    );
                  return Re
                    ? a.createElement(te, {
                        color: Me,
                        href: ke,
                        name: ht || Ce,
                        logo: Pe,
                        onClick: dt,
                      })
                    : a.createElement(Q, {
                        color: Me,
                        href: ke,
                        name: Ce,
                        logo: Pe,
                        onClick: dt,
                      });
                })
              : a.createElement(
                  a.Fragment,
                  null,
                  a.createElement(
                    "p",
                    null,
                    xe.length
                      ? u.errorMessage
                      : u.links.length && !me.length
                      ? u.text.no_wallets_found
                      : u.text.loading
                  )
                )
          ),
          ft &&
            a.createElement(
              "div",
              { className: "walletconnect-modal__footer" },
              Array(ot)
                .fill(0)
                .map(function (Fe, Me) {
                  var Ce = Me + 1;
                  return a.createElement(
                    "a",
                    {
                      style: {
                        margin: "auto 10px",
                        fontWeight: ie === Ce ? "bold" : "normal",
                      },
                      onClick: function () {
                        return he(Ce);
                      },
                    },
                    Ce
                  );
                })
            )
        );
      }
      function l(u) {
        var n = !!u.message.trim();
        return a.createElement(
          "div",
          {
            className:
              "walletconnect-qrcode__notification" +
              (n ? " notification__show" : ""),
          },
          u.message
        );
      }
      var d = function (u) {
        try {
          var n = "";
          return Promise.resolve(
            v.toString(u, { margin: 0, type: "svg" })
          ).then(function (i) {
            return (
              "string" == typeof i &&
                (n = i.replace(
                  "<svg",
                  '<svg class="walletconnect-qrcode__image"'
                )),
              n
            );
          });
        } catch (i) {
          return Promise.reject(i);
        }
      };
      function p(u) {
        var n = a.useState(""),
          i = n[0],
          g = n[1],
          R = a.useState(""),
          k = R[0],
          L = R[1];
        return (
          a.useEffect(function () {
            try {
              return Promise.resolve(d(u.uri)).then(function (ce) {
                L(ce);
              });
            } catch (ce) {
              Promise.reject(ce);
            }
          }, []),
          a.createElement(
            "div",
            null,
            a.createElement(
              "p",
              { id: x, className: "walletconnect-qrcode__text" },
              u.text.scan_qrcode_with_wallet
            ),
            a.createElement("div", { dangerouslySetInnerHTML: { __html: k } }),
            a.createElement(
              "div",
              { className: "walletconnect-modal__footer" },
              a.createElement(
                "a",
                {
                  onClick: function () {
                    T(u.uri)
                      ? (g(u.text.copied_to_clipboard),
                        setInterval(function () {
                          return g("");
                        }, 1200))
                      : (g("Error"),
                        setInterval(function () {
                          return g("");
                        }, 1200));
                  },
                },
                u.text.copy_to_clipboard
              )
            ),
            a.createElement(l, { message: i })
          )
        );
      }
      function M(u) {
        var n = E.isAndroid(),
          i = E.isMobile(),
          g = i
            ? u.qrcodeModalOptions && u.qrcodeModalOptions.mobileLinks
              ? u.qrcodeModalOptions.mobileLinks
              : void 0
            : u.qrcodeModalOptions && u.qrcodeModalOptions.desktopLinks
            ? u.qrcodeModalOptions.desktopLinks
            : void 0,
          R = a.useState(!1),
          k = R[0],
          L = R[1],
          $ = a.useState(!1),
          ce = $[0],
          ie = $[1],
          he = a.useState(!i),
          me = he[0],
          xe = he[1],
          Re = {
            mobile: i,
            text: u.text,
            uri: u.uri,
            qrcodeModalOptions: u.qrcodeModalOptions,
          },
          ot = a.useState(""),
          Ne = ot[0],
          Ue = ot[1],
          ft = a.useState(!1),
          Le = ft[0],
          We = ft[1],
          Fe = a.useState([]),
          Me = Fe[0],
          Ce = Fe[1],
          ht = a.useState(""),
          Pe = ht[0],
          ke = ht[1],
          dt = function () {
            ce ||
              k ||
              (g && !g.length) ||
              Me.length > 0 ||
              a.useEffect(function () {
                !(function () {
                  try {
                    if (n) return Promise.resolve();
                    L(!0);
                    var pt = (function ue(u, n) {
                      try {
                        var i = u();
                      } catch (g) {
                        return n(g);
                      }
                      return i && i.then ? i.then(void 0, n) : i;
                    })(
                      function () {
                        var De =
                          u.qrcodeModalOptions &&
                          u.qrcodeModalOptions.registryUrl
                            ? u.qrcodeModalOptions.registryUrl
                            : E.getWalletRegistryUrl();
                        return Promise.resolve(fetch(De)).then(function (ze) {
                          return Promise.resolve(ze.json()).then(function (_t) {
                            var gt = E.getMobileLinkRegistry(
                              E.formatMobileRegistry(
                                _t.listings,
                                i ? "mobile" : "desktop"
                              ),
                              g
                            );
                            L(!1),
                              ie(!0),
                              ke(gt.length ? "" : u.text.no_supported_wallets),
                              Ce(gt);
                            var Ze = 1 === gt.length;
                            Ze && (Ue(E.formatIOSMobile(u.uri, gt[0])), xe(!0)),
                              We(Ze);
                          });
                        });
                      },
                      function (De) {
                        L(!1),
                          ie(!0),
                          ke(u.text.something_went_wrong),
                          console.error(De);
                      }
                    );
                    Promise.resolve(
                      pt && pt.then ? pt.then(function () {}) : void 0
                    );
                  } catch (De) {
                    return Promise.reject(De);
                  }
                })();
              });
          };
        dt();
        var $e = i ? me : !me;
        return a.createElement(
          "div",
          { id: P, className: "walletconnect-qrcode__base animated fadeIn" },
          a.createElement(
            "div",
            { className: "walletconnect-modal__base" },
            a.createElement(W, { onClose: u.onClose }),
            Le && me
              ? a.createElement(
                  "div",
                  { className: "walletconnect-modal__single_wallet" },
                  a.createElement(
                    "a",
                    {
                      onClick: function () {
                        return E.saveMobileLinkInfo({
                          name: Me[0].name,
                          href: Ne,
                        });
                      },
                      href: Ne,
                      rel: "noopener noreferrer",
                      target: "_blank",
                    },
                    u.text.connect_with +
                      " " +
                      (Le ? Me[0].name : "") +
                      " \u203a"
                  )
                )
              : n || k || (!k && Me.length)
              ? a.createElement(
                  "div",
                  {
                    className:
                      "walletconnect-modal__mobile__toggle" +
                      ($e ? " right__selected" : ""),
                  },
                  a.createElement("div", {
                    className: "walletconnect-modal__mobile__toggle_selector",
                  }),
                  i
                    ? a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                          "a",
                          {
                            onClick: function () {
                              return xe(!1), dt();
                            },
                          },
                          u.text.mobile
                        ),
                        a.createElement(
                          "a",
                          {
                            onClick: function () {
                              return xe(!0);
                            },
                          },
                          u.text.qrcode
                        )
                      )
                    : a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                          "a",
                          {
                            onClick: function () {
                              return xe(!0);
                            },
                          },
                          u.text.qrcode
                        ),
                        a.createElement(
                          "a",
                          {
                            onClick: function () {
                              return xe(!1), dt();
                            },
                          },
                          u.text.desktop
                        )
                      )
                )
              : null,
            a.createElement(
              "div",
              null,
              me || (!n && !k && !Me.length)
                ? a.createElement(p, Object.assign({}, Re))
                : a.createElement(
                    o,
                    Object.assign({}, Re, { links: Me, errorMessage: Pe })
                  )
            )
          )
        );
      }
      var _e = {
        de: {
          choose_preferred_wallet: "W\xe4hle bevorzugte Wallet",
          connect_mobile_wallet: "Verbinde mit Mobile Wallet",
          scan_qrcode_with_wallet:
            "Scanne den QR-code mit einer WalletConnect kompatiblen Wallet",
          connect: "Verbinden",
          qrcode: "QR-Code",
          mobile: "Mobile",
          desktop: "Desktop",
          copy_to_clipboard: "In die Zwischenablage kopieren",
          copied_to_clipboard: "In die Zwischenablage kopiert!",
          connect_with: "Verbinden mit Hilfe von",
          loading: "Laden...",
          something_went_wrong: "Etwas ist schief gelaufen",
          no_supported_wallets: "Es gibt noch keine unterst\xfctzten Wallet",
          no_wallets_found: "keine Wallet gefunden",
        },
        en: {
          choose_preferred_wallet: "Choose your preferred wallet",
          connect_mobile_wallet: "Connect to Mobile Wallet",
          scan_qrcode_with_wallet:
            "Scan QR code with a WalletConnect-compatible wallet",
          connect: "Connect",
          qrcode: "QR Code",
          mobile: "Mobile",
          desktop: "Desktop",
          copy_to_clipboard: "Copy to clipboard",
          copied_to_clipboard: "Copied to clipboard!",
          connect_with: "Connect with",
          loading: "Loading...",
          something_went_wrong: "Something went wrong",
          no_supported_wallets: "There are no supported wallets yet",
          no_wallets_found: "No wallets found",
        },
        es: {
          choose_preferred_wallet: "Elige tu billetera preferida",
          connect_mobile_wallet: "Conectar a billetera m\xf3vil",
          scan_qrcode_with_wallet:
            "Escanea el c\xf3digo QR con una billetera compatible con WalletConnect",
          connect: "Conectar",
          qrcode: "C\xf3digo QR",
          mobile: "M\xf3vil",
          desktop: "Desktop",
          copy_to_clipboard: "Copiar",
          copied_to_clipboard: "Copiado!",
          connect_with: "Conectar mediante",
          loading: "Cargando...",
          something_went_wrong: "Algo sali\xf3 mal",
          no_supported_wallets: "Todav\xeda no hay billeteras compatibles",
          no_wallets_found: "No se encontraron billeteras",
        },
        fr: {
          choose_preferred_wallet:
            "Choisissez votre portefeuille pr\xe9f\xe9r\xe9",
          connect_mobile_wallet: "Se connecter au portefeuille mobile",
          scan_qrcode_with_wallet:
            "Scannez le QR code avec un portefeuille compatible WalletConnect",
          connect: "Se connecter",
          qrcode: "QR Code",
          mobile: "Mobile",
          desktop: "Desktop",
          copy_to_clipboard: "Copier",
          copied_to_clipboard: "Copi\xe9!",
          connect_with: "Connectez-vous \xe0 l'aide de",
          loading: "Chargement...",
          something_went_wrong: "Quelque chose a mal tourn\xe9",
          no_supported_wallets:
            "Il n'y a pas encore de portefeuilles pris en charge",
          no_wallets_found: "Aucun portefeuille trouv\xe9",
        },
        ko: {
          choose_preferred_wallet:
            "\uc6d0\ud558\ub294 \uc9c0\uac11\uc744 \uc120\ud0dd\ud558\uc138\uc694",
          connect_mobile_wallet:
            "\ubaa8\ubc14\uc77c \uc9c0\uac11\uacfc \uc5f0\uacb0",
          scan_qrcode_with_wallet:
            "WalletConnect \uc9c0\uc6d0 \uc9c0\uac11\uc5d0\uc11c QR\ucf54\ub4dc\ub97c \uc2a4\uce94\ud558\uc138\uc694",
          connect: "\uc5f0\uacb0",
          qrcode: "QR \ucf54\ub4dc",
          mobile: "\ubaa8\ubc14\uc77c",
          desktop: "\ub370\uc2a4\ud06c\ud0d1",
          copy_to_clipboard: "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac",
          copied_to_clipboard:
            "\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub418\uc5c8\uc2b5\ub2c8\ub2e4!",
          connect_with: "\uc640 \uc5f0\uacb0\ud558\ub2e4",
          loading: "\ub85c\ub4dc \uc911...",
          something_went_wrong:
            "\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",
          no_supported_wallets:
            "\uc544\uc9c1 \uc9c0\uc6d0\ub418\ub294 \uc9c0\uac11\uc774 \uc5c6\uc2b5\ub2c8\ub2e4",
          no_wallets_found:
            "\uc9c0\uac11\uc744 \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4",
        },
        pt: {
          choose_preferred_wallet: "Escolha sua carteira preferida",
          connect_mobile_wallet: "Conectar-se \xe0 carteira m\xf3vel",
          scan_qrcode_with_wallet:
            "Ler o c\xf3digo QR com uma carteira compat\xedvel com WalletConnect",
          connect: "Conectar",
          qrcode: "C\xf3digo QR",
          mobile: "M\xf3vel",
          desktop: "Desktop",
          copy_to_clipboard: "Copiar",
          copied_to_clipboard: "Copiado!",
          connect_with: "Ligar por meio de",
          loading: "Carregamento...",
          something_went_wrong: "Algo correu mal",
          no_supported_wallets: "Ainda n\xe3o h\xe1 carteiras suportadas",
          no_wallets_found: "Nenhuma carteira encontrada",
        },
        zh: {
          choose_preferred_wallet: "\u9009\u62e9\u4f60\u7684\u94b1\u5305",
          connect_mobile_wallet:
            "\u8fde\u63a5\u81f3\u79fb\u52a8\u7aef\u94b1\u5305",
          scan_qrcode_with_wallet:
            "\u4f7f\u7528\u517c\u5bb9 WalletConnect \u7684\u94b1\u5305\u626b\u63cf\u4e8c\u7ef4\u7801",
          connect: "\u8fde\u63a5",
          qrcode: "\u4e8c\u7ef4\u7801",
          mobile: "\u79fb\u52a8",
          desktop: "\u684c\u9762",
          copy_to_clipboard: "\u590d\u5236\u5230\u526a\u8d34\u677f",
          copied_to_clipboard:
            "\u590d\u5236\u5230\u526a\u8d34\u677f\u6210\u529f\uff01",
          connect_with: "\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u8fde\u63a5",
          loading: "\u6b63\u5728\u52a0\u8f7d...",
          something_went_wrong: "\u51fa\u4e86\u95ee\u9898",
          no_supported_wallets:
            "\u76ee\u524d\u8fd8\u6ca1\u6709\u652f\u6301\u7684\u94b1\u5305",
          no_wallets_found: "\u6ca1\u6709\u627e\u5230\u94b1\u5305",
        },
        fa: {
          choose_preferred_wallet:
            "\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0631\u062f \u0646\u0638\u0631 \u062e\u0648\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f",
          connect_mobile_wallet:
            "\u0628\u0647 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0648\u0635\u0644 \u0634\u0648\u06cc\u062f",
          scan_qrcode_with_wallet:
            "\u06a9\u062f QR \u0631\u0627 \u0628\u0627 \u06cc\u06a9 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0633\u0627\u0632\u06af\u0627\u0631 \u0628\u0627 WalletConnect \u0627\u0633\u06a9\u0646 \u06a9\u0646\u06cc\u062f",
          connect: "\u0627\u062a\u0635\u0627\u0644",
          qrcode: "\u06a9\u062f QR",
          mobile: "\u0633\u06cc\u0627\u0631",
          desktop: "\u062f\u0633\u06a9\u062a\u0627\u067e",
          copy_to_clipboard:
            "\u06a9\u067e\u06cc \u0628\u0647 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f",
          copied_to_clipboard:
            "\u062f\u0631 \u06a9\u0644\u06cc\u067e \u0628\u0648\u0631\u062f \u06a9\u067e\u06cc \u0634\u062f!",
          connect_with: "\u0627\u0631\u062a\u0628\u0627\u0637 \u0628\u0627",
          loading: "...\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc",
          something_went_wrong:
            "\u0645\u0634\u06a9\u0644\u06cc \u067e\u06cc\u0634 \u0622\u0645\u062f",
          no_supported_wallets:
            "\u0647\u0646\u0648\u0632 \u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0634\u062f\u0647 \u0627\u06cc \u0648\u062c\u0648\u062f \u0646\u062f\u0627\u0631\u062f",
          no_wallets_found:
            "\u0647\u06cc\u0686 \u06a9\u06cc\u0641 \u067e\u0648\u0644\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f",
        },
      };
      function be() {
        var u = E.getDocumentOrThrow(),
          n = u.getElementById(P);
        n &&
          ((n.className = n.className.replace("fadeIn", "fadeOut")),
          setTimeout(function () {
            var i = u.getElementById(le);
            i && u.body.removeChild(i);
          }, ee));
      }
      function Ee(u) {
        return function () {
          be(), u && u();
        };
      }
      function st() {
        var u = E.getNavigatorOrThrow().language.split("-")[0] || "en";
        return _e[u] || _e.en;
      }
      var Be = function () {
        return (
          typeof process < "u" &&
          typeof process.versions < "u" &&
          typeof process.versions.node < "u"
        );
      };
      de.exports = {
        open: function Se(u, n, i) {
          console.log(u),
            Be()
              ? (function B(u) {
                  v.toString(u, { type: "terminal" }).then(console.log);
                })(u)
              : (function Ie(u, n, i) {
                  !(function ve() {
                    var u = E.getDocumentOrThrow(),
                      n = u.getElementById(D);
                    n && u.head.removeChild(n);
                    var i = u.createElement("style");
                    i.setAttribute("id", D),
                      (i.innerText = O),
                      u.head.appendChild(i);
                  })();
                  var g = (function nt() {
                    var u = E.getDocumentOrThrow(),
                      n = u.createElement("div");
                    return n.setAttribute("id", le), u.body.appendChild(n), n;
                  })();
                  a.render(
                    a.createElement(M, {
                      text: st(),
                      uri: u,
                      onClose: Ee(n),
                      qrcodeModalOptions: i,
                    }),
                    g
                  );
                })(u, n, i);
        },
        close: function Te() {
          Be() ||
            (function ye() {
              be();
            })();
        },
      };
    },
    8836: (de, A, U) => {
      "use strict";
      U.r(A),
        U.d(A, {
          Children: () => We,
          Component: () => N,
          Fragment: () => P,
          PureComponent: () => ot,
          Suspense: () => Ce,
          SuspenseList: () => ke,
          cloneElement: () => wt,
          createContext: () => j,
          createElement: () => X,
          createFactory: () => Xe,
          createPortal: () => pt,
          createRef: () => D,
          default: () => xt,
          findDOMNode: () => tt,
          forwardRef: () => ft,
          hydrate: () => Ve,
          isValidElement: () => Ke,
          lazy: () => Pe,
          memo: () => Ne,
          render: () => _t,
          unmountComponentAtNode: () => et,
          unstable_batchedUpdates: () => vt,
          useCallback: () => g,
          useContext: () => R,
          useDebugValue: () => k,
          useEffect: () => Te,
          useErrorBoundary: () => L,
          useImperativeHandle: () => n,
          useLayoutEffect: () => lt,
          useMemo: () => i,
          useReducer: () => Se,
          useRef: () => u,
          useState: () => Be,
          version: () => St,
        });
      var C,
        v,
        T,
        a,
        B,
        O,
        b,
        G = {},
        ue = [],
        fe = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;
      function V(f, h) {
        for (var m in h) f[m] = h[m];
        return f;
      }
      function ee(f) {
        var h = f.parentNode;
        h && h.removeChild(f);
      }
      function X(f, h, m) {
        var H,
          Y = arguments,
          Z = {};
        for (H in h) "key" !== H && "ref" !== H && (Z[H] = h[H]);
        if (arguments.length > 3)
          for (m = [m], H = 3; H < arguments.length; H++) m.push(Y[H]);
        if (
          (null != m && (Z.children = m),
          "function" == typeof f && null != f.defaultProps)
        )
          for (H in f.defaultProps)
            void 0 === Z[H] && (Z[H] = f.defaultProps[H]);
        return le(f, Z, h && h.key, h && h.ref, null);
      }
      function le(f, h, m, H, Y) {
        var Z = {
          type: f,
          props: h,
          key: m,
          ref: H,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: Y,
        };
        return null == Y && (Z.__v = Z), C.vnode && C.vnode(Z), Z;
      }
      function D() {
        return {};
      }
      function P(f) {
        return f.children;
      }
      function N(f, h) {
        (this.props = f), (this.context = h);
      }
      function x(f, h) {
        if (null == h) return f.__ ? x(f.__, f.__.__k.indexOf(f) + 1) : null;
        for (var m; h < f.__k.length; h++)
          if (null != (m = f.__k[h]) && null != m.__e) return m.__e;
        return "function" == typeof f.type ? x(f) : null;
      }
      function S(f) {
        var h, m;
        if (null != (f = f.__) && null != f.__c) {
          for (f.__e = f.__c.base = null, h = 0; h < f.__k.length; h++)
            if (null != (m = f.__k[h]) && null != m.__e) {
              f.__e = f.__c.base = m.__e;
              break;
            }
          return S(f);
        }
      }
      function W(f) {
        ((!f.__d && (f.__d = !0) && v.push(f) && !T++) ||
          B !== C.debounceRendering) &&
          ((B = C.debounceRendering) || a)(q);
      }
      function q() {
        for (var f; (T = v.length); )
          (f = v.sort(function (h, m) {
            return h.__v.__b - m.__v.__b;
          })),
            (v = []),
            f.some(function (h) {
              var m, H, Y, Z, pe, ge, we;
              h.__d &&
                ((ge = (pe = (m = h).__v).__e),
                (we = m.__P) &&
                  ((H = []),
                  ((Y = V({}, pe)).__v = Y),
                  (Z = l(
                    we,
                    pe,
                    Y,
                    m.__n,
                    void 0 !== we.ownerSVGElement,
                    null,
                    H,
                    ge ?? x(pe)
                  )),
                  d(H, pe),
                  Z != ge && S(pe)));
            });
      }
      function ne(f, h, m, H, Y, Z, pe, ge, we) {
        var se,
          K,
          Ae,
          He,
          rt,
          je,
          it,
          Je = (m && m.__k) || ue,
          mt = Je.length;
        if (
          (ge == G && (ge = null != Z ? Z[0] : mt ? x(m, 0) : null),
          (se = 0),
          (h.__k = Q(h.__k, function (Ye) {
            if (null != Ye) {
              if (
                ((Ye.__ = h),
                (Ye.__b = h.__b + 1),
                null === (Ae = Je[se]) ||
                  (Ae && Ye.key == Ae.key && Ye.type === Ae.type))
              )
                Je[se] = void 0;
              else
                for (K = 0; K < mt; K++) {
                  if ((Ae = Je[K]) && Ye.key == Ae.key && Ye.type === Ae.type) {
                    Je[K] = void 0;
                    break;
                  }
                  Ae = null;
                }
              if (
                ((He = l(f, Ye, (Ae = Ae || G), H, Y, Z, pe, ge, we)),
                (K = Ye.ref) &&
                  Ae.ref != K &&
                  (it || (it = []),
                  Ae.ref && it.push(Ae.ref, null, Ye),
                  it.push(K, Ye.__c || He, Ye)),
                null != He)
              ) {
                var at;
                if ((null == je && (je = He), void 0 !== Ye.__d))
                  (at = Ye.__d), (Ye.__d = void 0);
                else if (Z == Ae || He != ge || null == He.parentNode) {
                  e: if (null == ge || ge.parentNode !== f)
                    f.appendChild(He), (at = null);
                  else {
                    for (
                      rt = ge, K = 0;
                      (rt = rt.nextSibling) && K < mt;
                      K += 2
                    )
                      if (rt == He) break e;
                    f.insertBefore(He, ge), (at = ge);
                  }
                  "option" == h.type && (f.value = "");
                }
                (ge = void 0 !== at ? at : He.nextSibling),
                  "function" == typeof h.type && (h.__d = ge);
              } else ge && Ae.__e == ge && ge.parentNode != f && (ge = x(Ae));
            }
            return se++, Ye;
          })),
          (h.__e = je),
          null != Z && "function" != typeof h.type)
        )
          for (se = Z.length; se--; ) null != Z[se] && ee(Z[se]);
        for (se = mt; se--; ) null != Je[se] && I(Je[se], Je[se]);
        if (it)
          for (se = 0; se < it.length; se++) M(it[se], it[++se], it[++se]);
      }
      function Q(f, h, m) {
        if ((null == m && (m = []), null == f || "boolean" == typeof f))
          h && m.push(h(null));
        else if (Array.isArray(f))
          for (var H = 0; H < f.length; H++) Q(f[H], h, m);
        else
          m.push(
            h
              ? h(
                  "string" == typeof f || "number" == typeof f
                    ? le(null, f, null, null, f)
                    : null != f.__e || null != f.__c
                    ? le(f.type, f.props, f.key, null, f.__v)
                    : f
                )
              : f
          );
        return m;
      }
      function y(f, h, m) {
        "-" === h[0]
          ? f.setProperty(h, m)
          : (f[h] =
              "number" == typeof m && !1 === fe.test(h) ? m + "px" : m ?? "");
      }
      function e(f, h, m, H, Y) {
        var Z, pe, ge, we, se;
        if (
          (Y
            ? "className" === h && (h = "class")
            : "class" === h && (h = "className"),
          "style" === h)
        )
          if (((Z = f.style), "string" == typeof m)) Z.cssText = m;
          else {
            if (("string" == typeof H && ((Z.cssText = ""), (H = null)), H))
              for (we in H) (m && we in m) || y(Z, we, "");
            if (m) for (se in m) (H && m[se] === H[se]) || y(Z, se, m[se]);
          }
        else
          "o" === h[0] && "n" === h[1]
            ? ((pe = h !== (h = h.replace(/Capture$/, ""))),
              (ge = h.toLowerCase()),
              (h = (ge in f ? ge : h).slice(2)),
              m
                ? (H || f.addEventListener(h, o, pe),
                  ((f.l || (f.l = {}))[h] = m))
                : f.removeEventListener(h, o, pe))
            : "list" !== h &&
              "tagName" !== h &&
              "form" !== h &&
              "type" !== h &&
              "size" !== h &&
              !Y &&
              h in f
            ? (f[h] = m ?? "")
            : "function" != typeof m &&
              "dangerouslySetInnerHTML" !== h &&
              (h !== (h = h.replace(/^xlink:?/, ""))
                ? null == m || !1 === m
                  ? f.removeAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      h.toLowerCase()
                    )
                  : f.setAttributeNS(
                      "http://www.w3.org/1999/xlink",
                      h.toLowerCase(),
                      m
                    )
                : null == m || (!1 === m && !/^ar/.test(h))
                ? f.removeAttribute(h)
                : f.setAttribute(h, m));
      }
      function o(f) {
        this.l[f.type](C.event ? C.event(f) : f);
      }
      function l(f, h, m, H, Y, Z, pe, ge, we) {
        var se,
          K,
          Ae,
          He,
          rt,
          je,
          it,
          Je,
          mt,
          Ye,
          at = h.type;
        if (void 0 !== h.constructor) return null;
        (se = C.__b) && se(h);
        try {
          e: if ("function" == typeof at) {
            if (
              ((Je = h.props),
              (mt = (se = at.contextType) && H[se.__c]),
              (Ye = se ? (mt ? mt.props.value : se.__) : H),
              m.__c
                ? (it = (K = h.__c = m.__c).__ = K.__E)
                : ("prototype" in at && at.prototype.render
                    ? (h.__c = K = new at(Je, Ye))
                    : ((h.__c = K = new N(Je, Ye)),
                      (K.constructor = at),
                      (K.render = _)),
                  mt && mt.sub(K),
                  (K.props = Je),
                  K.state || (K.state = {}),
                  (K.context = Ye),
                  (K.__n = H),
                  (Ae = K.__d = !0),
                  (K.__h = [])),
              null == K.__s && (K.__s = K.state),
              null != at.getDerivedStateFromProps &&
                (K.__s == K.state && (K.__s = V({}, K.__s)),
                V(K.__s, at.getDerivedStateFromProps(Je, K.__s))),
              (He = K.props),
              (rt = K.state),
              Ae)
            )
              null == at.getDerivedStateFromProps &&
                null != K.componentWillMount &&
                K.componentWillMount(),
                null != K.componentDidMount && K.__h.push(K.componentDidMount);
            else {
              if (
                (null == at.getDerivedStateFromProps &&
                  Je !== He &&
                  null != K.componentWillReceiveProps &&
                  K.componentWillReceiveProps(Je, Ye),
                (!K.__e &&
                  null != K.shouldComponentUpdate &&
                  !1 === K.shouldComponentUpdate(Je, K.__s, Ye)) ||
                  (h.__v === m.__v && !K.__))
              ) {
                for (
                  K.props = Je,
                    K.state = K.__s,
                    h.__v !== m.__v && (K.__d = !1),
                    K.__v = h,
                    h.__e = m.__e,
                    h.__k = m.__k,
                    K.__h.length && pe.push(K),
                    se = 0;
                  se < h.__k.length;
                  se++
                )
                  h.__k[se] && (h.__k[se].__ = h);
                break e;
              }
              null != K.componentWillUpdate &&
                K.componentWillUpdate(Je, K.__s, Ye),
                null != K.componentDidUpdate &&
                  K.__h.push(function () {
                    K.componentDidUpdate(He, rt, je);
                  });
            }
            (K.context = Ye),
              (K.props = Je),
              (K.state = K.__s),
              (se = C.__r) && se(h),
              (K.__d = !1),
              (K.__v = h),
              (K.__P = f),
              (se = K.render(K.props, K.state, K.context)),
              (h.__k =
                null != se && se.type == P && null == se.key
                  ? se.props.children
                  : Array.isArray(se)
                  ? se
                  : [se]),
              null != K.getChildContext &&
                (H = V(V({}, H), K.getChildContext())),
              Ae ||
                null == K.getSnapshotBeforeUpdate ||
                (je = K.getSnapshotBeforeUpdate(He, rt)),
              ne(f, h, m, H, Y, Z, pe, ge, we),
              (K.base = h.__e),
              K.__h.length && pe.push(K),
              it && (K.__E = K.__ = null),
              (K.__e = !1);
          } else
            null == Z && h.__v === m.__v
              ? ((h.__k = m.__k), (h.__e = m.__e))
              : (h.__e = (function p(f, h, m, H, Y, Z, pe, ge) {
                  var we,
                    se,
                    K,
                    Ae,
                    He,
                    rt = m.props,
                    je = h.props;
                  if (((Y = "svg" === h.type || Y), null != Z))
                    for (we = 0; we < Z.length; we++)
                      if (
                        null != (se = Z[we]) &&
                        ((null === h.type
                          ? 3 === se.nodeType
                          : se.localName === h.type) ||
                          f == se)
                      ) {
                        (f = se), (Z[we] = null);
                        break;
                      }
                  if (null == f) {
                    if (null === h.type) return document.createTextNode(je);
                    (f = Y
                      ? document.createElementNS(
                          "http://www.w3.org/2000/svg",
                          h.type
                        )
                      : document.createElement(h.type, je.is && { is: je.is })),
                      (Z = null),
                      (ge = !1);
                  }
                  if (null === h.type)
                    rt !== je && f.data != je && (f.data = je);
                  else {
                    if (
                      (null != Z && (Z = ue.slice.call(f.childNodes)),
                      (K = (rt = m.props || G).dangerouslySetInnerHTML),
                      (Ae = je.dangerouslySetInnerHTML),
                      !ge)
                    ) {
                      if (rt === G)
                        for (rt = {}, He = 0; He < f.attributes.length; He++)
                          rt[f.attributes[He].name] = f.attributes[He].value;
                      (Ae || K) &&
                        ((Ae && K && Ae.__html == K.__html) ||
                          (f.innerHTML = (Ae && Ae.__html) || ""));
                    }
                    (function te(f, h, m, H, Y) {
                      var Z;
                      for (Z in m)
                        "children" === Z ||
                          "key" === Z ||
                          Z in h ||
                          e(f, Z, null, m[Z], H);
                      for (Z in h)
                        (Y && "function" != typeof h[Z]) ||
                          "children" === Z ||
                          "key" === Z ||
                          "value" === Z ||
                          "checked" === Z ||
                          m[Z] === h[Z] ||
                          e(f, Z, h[Z], m[Z], H);
                    })(f, je, rt, Y, ge),
                      Ae
                        ? (h.__k = [])
                        : ((h.__k = h.props.children),
                          ne(
                            f,
                            h,
                            m,
                            H,
                            "foreignObject" !== h.type && Y,
                            Z,
                            pe,
                            G,
                            ge
                          )),
                      ge ||
                        ("value" in je &&
                          void 0 !== (we = je.value) &&
                          we !== f.value &&
                          e(f, "value", we, rt.value, !1),
                        "checked" in je &&
                          void 0 !== (we = je.checked) &&
                          we !== f.checked &&
                          e(f, "checked", we, rt.checked, !1));
                  }
                  return f;
                })(m.__e, h, m, H, Y, Z, pe, we));
          (se = C.diffed) && se(h);
        } catch (tn) {
          (h.__v = null), C.__e(tn, h, m);
        }
        return h.__e;
      }
      function d(f, h) {
        C.__c && C.__c(h, f),
          f.some(function (m) {
            try {
              (f = m.__h),
                (m.__h = []),
                f.some(function (H) {
                  H.call(m);
                });
            } catch (H) {
              C.__e(H, m.__v);
            }
          });
      }
      function M(f, h, m) {
        try {
          "function" == typeof f ? f(h) : (f.current = h);
        } catch (H) {
          C.__e(H, m);
        }
      }
      function I(f, h, m) {
        var H, Y, Z;
        if (
          (C.unmount && C.unmount(f),
          (H = f.ref) && ((H.current && H.current !== f.__e) || M(H, null, h)),
          m || "function" == typeof f.type || (m = null != (Y = f.__e)),
          (f.__e = f.__d = void 0),
          null != (H = f.__c))
        ) {
          if (H.componentWillUnmount)
            try {
              H.componentWillUnmount();
            } catch (pe) {
              C.__e(pe, h);
            }
          H.base = H.__P = null;
        }
        if ((H = f.__k)) for (Z = 0; Z < H.length; Z++) H[Z] && I(H[Z], h, m);
        null != Y && ee(Y);
      }
      function _(f, h, m) {
        return this.constructor(f, m);
      }
      function r(f, h, m) {
        var H, Y, Z;
        C.__ && C.__(f, h),
          (Y = (H = m === O) ? null : (m && m.__k) || h.__k),
          (f = X(P, null, [f])),
          (Z = []),
          l(
            h,
            ((H ? h : m || h).__k = f),
            Y || G,
            G,
            void 0 !== h.ownerSVGElement,
            m && !H ? [m] : Y ? null : ue.slice.call(h.childNodes),
            Z,
            m || G,
            H
          ),
          d(Z, f);
      }
      function w(f, h) {
        r(f, h, O);
      }
      function oe(f, h) {
        var m, H;
        for (H in ((h = V(V({}, f.props), h)),
        arguments.length > 2 && (h.children = ue.slice.call(arguments, 2)),
        (m = {}),
        h))
          "key" !== H && "ref" !== H && (m[H] = h[H]);
        return le(f.type, m, h.key || f.key, h.ref || f.ref, null);
      }
      function j(f) {
        var h = {},
          m = {
            __c: "__cC" + b++,
            __: f,
            Consumer: function (H, Y) {
              return H.children(Y);
            },
            Provider: function (H) {
              var Y,
                Z = this;
              return (
                this.getChildContext ||
                  ((Y = []),
                  (this.getChildContext = function () {
                    return (h[m.__c] = Z), h;
                  }),
                  (this.shouldComponentUpdate = function (pe) {
                    Z.props.value !== pe.value &&
                      Y.some(function (ge) {
                        (ge.context = pe.value), W(ge);
                      });
                  }),
                  (this.sub = function (pe) {
                    Y.push(pe);
                    var ge = pe.componentWillUnmount;
                    pe.componentWillUnmount = function () {
                      Y.splice(Y.indexOf(pe), 1), ge && ge.call(pe);
                    };
                  })),
                H.children
              );
            },
          };
        return (m.Consumer.contextType = m), (m.Provider.__ = m), m;
      }
      (C = {
        __e: function (f, h) {
          for (var m, H; (h = h.__); )
            if ((m = h.__c) && !m.__)
              try {
                if (
                  (m.constructor &&
                    null != m.constructor.getDerivedStateFromError &&
                    ((H = !0),
                    m.setState(m.constructor.getDerivedStateFromError(f))),
                  null != m.componentDidCatch &&
                    ((H = !0), m.componentDidCatch(f)),
                  H)
                )
                  return W((m.__E = m));
              } catch (Y) {
                f = Y;
              }
          throw f;
        },
      }),
        (N.prototype.setState = function (f, h) {
          var m;
          (m =
            this.__s !== this.state
              ? this.__s
              : (this.__s = V({}, this.state))),
            "function" == typeof f && (f = f(m, this.props)),
            f && V(m, f),
            null != f && this.__v && (h && this.__h.push(h), W(this));
        }),
        (N.prototype.forceUpdate = function (f) {
          this.__v && ((this.__e = !0), f && this.__h.push(f), W(this));
        }),
        (N.prototype.render = P),
        (v = []),
        (T = 0),
        (a =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (O = G),
        (b = 0);
      var J,
        ae,
        _e,
        ve = 0,
        nt = [],
        be = C.__r,
        Ee = C.diffed,
        st = C.__c,
        Ie = C.unmount;
      function ye(f, h) {
        C.__h && C.__h(ae, f, ve || h), (ve = 0);
        var m = ae.__H || (ae.__H = { __: [], __h: [] });
        return f >= m.__.length && m.__.push({}), m.__[f];
      }
      function Be(f) {
        return (ve = 1), Se(me, f);
      }
      function Se(f, h, m) {
        var H = ye(J++, 2);
        return (
          H.__c ||
            ((H.__c = ae),
            (H.__ = [
              m ? m(h) : me(void 0, h),
              function (Y) {
                var Z = f(H.__[0], Y);
                H.__[0] !== Z && ((H.__[0] = Z), H.__c.setState({}));
              },
            ])),
          H.__
        );
      }
      function Te(f, h) {
        var m = ye(J++, 3);
        !C.__s && he(m.__H, h) && ((m.__ = f), (m.__H = h), ae.__H.__h.push(m));
      }
      function lt(f, h) {
        var m = ye(J++, 4);
        !C.__s && he(m.__H, h) && ((m.__ = f), (m.__H = h), ae.__h.push(m));
      }
      function u(f) {
        return (
          (ve = 5),
          i(function () {
            return { current: f };
          }, [])
        );
      }
      function n(f, h, m) {
        (ve = 6),
          lt(
            function () {
              "function" == typeof f ? f(h()) : f && (f.current = h());
            },
            null == m ? m : m.concat(f)
          );
      }
      function i(f, h) {
        var m = ye(J++, 7);
        return he(m.__H, h) ? ((m.__H = h), (m.__h = f), (m.__ = f())) : m.__;
      }
      function g(f, h) {
        return (
          (ve = 8),
          i(function () {
            return f;
          }, h)
        );
      }
      function R(f) {
        var h = ae.context[f.__c],
          m = ye(J++, 9);
        return (
          (m.__c = f),
          h ? (null == m.__ && ((m.__ = !0), h.sub(ae)), h.props.value) : f.__
        );
      }
      function k(f, h) {
        C.useDebugValue && C.useDebugValue(h ? h(f) : f);
      }
      function L(f) {
        var h = ye(J++, 10),
          m = Be();
        return (
          (h.__ = f),
          ae.componentDidCatch ||
            (ae.componentDidCatch = function (H) {
              h.__ && h.__(H), m[1](H);
            }),
          [
            m[0],
            function () {
              m[1](void 0);
            },
          ]
        );
      }
      function $() {
        nt.some(function (f) {
          if (f.__P)
            try {
              f.__H.__h.forEach(ce), f.__H.__h.forEach(ie), (f.__H.__h = []);
            } catch (h) {
              return (f.__H.__h = []), C.__e(h, f.__v), !0;
            }
        }),
          (nt = []);
      }
      function ce(f) {
        f.t && f.t();
      }
      function ie(f) {
        var h = f.__();
        "function" == typeof h && (f.t = h);
      }
      function he(f, h) {
        return (
          !f ||
          h.some(function (m, H) {
            return m !== f[H];
          })
        );
      }
      function me(f, h) {
        return "function" == typeof h ? h(f) : h;
      }
      function xe(f, h) {
        for (var m in h) f[m] = h[m];
        return f;
      }
      function Re(f, h) {
        for (var m in f) if ("__source" !== m && !(m in h)) return !0;
        for (var H in h) if ("__source" !== H && f[H] !== h[H]) return !0;
        return !1;
      }
      (C.__r = function (f) {
        be && be(f),
          (J = 0),
          (ae = f.__c).__H &&
            (ae.__H.__h.forEach(ce), ae.__H.__h.forEach(ie), (ae.__H.__h = []));
      }),
        (C.diffed = function (f) {
          Ee && Ee(f);
          var h = f.__c;
          if (h) {
            var m = h.__H;
            m &&
              m.__h.length &&
              ((1 !== nt.push(h) && _e === C.requestAnimationFrame) ||
                (
                  (_e = C.requestAnimationFrame) ||
                  function (H) {
                    var Y,
                      Z = function () {
                        clearTimeout(pe),
                          cancelAnimationFrame(Y),
                          setTimeout(H);
                      },
                      pe = setTimeout(Z, 100);
                    typeof window < "u" && (Y = requestAnimationFrame(Z));
                  }
                )($));
          }
        }),
        (C.__c = function (f, h) {
          h.some(function (m) {
            try {
              m.__h.forEach(ce),
                (m.__h = m.__h.filter(function (H) {
                  return !H.__ || ie(H);
                }));
            } catch (H) {
              h.some(function (Y) {
                Y.__h && (Y.__h = []);
              }),
                (h = []),
                C.__e(H, m.__v);
            }
          }),
            st && st(f, h);
        }),
        (C.unmount = function (f) {
          Ie && Ie(f);
          var h = f.__c;
          if (h) {
            var m = h.__H;
            if (m)
              try {
                m.__.forEach(function (H) {
                  return H.t && H.t();
                });
              } catch (H) {
                C.__e(H, h.__v);
              }
          }
        });
      var ot = (function (f) {
        var h, m;
        function H(Y) {
          var Z;
          return ((Z = f.call(this, Y) || this).isPureReactComponent = !0), Z;
        }
        return (
          (m = f),
          ((h = H).prototype = Object.create(m.prototype)),
          (h.prototype.constructor = h),
          (h.__proto__ = m),
          (H.prototype.shouldComponentUpdate = function (Y, Z) {
            return Re(this.props, Y) || Re(this.state, Z);
          }),
          H
        );
      })(N);
      function Ne(f, h) {
        function m(Y) {
          var Z = this.props.ref,
            pe = Z == Y.ref;
          return (
            !pe && Z && (Z.call ? Z(null) : (Z.current = null)),
            h ? !h(this.props, Y) || !pe : Re(this.props, Y)
          );
        }
        function H(Y) {
          return (this.shouldComponentUpdate = m), X(f, xe({}, Y));
        }
        return (
          (H.prototype.isReactComponent = !0),
          (H.displayName = "Memo(" + (f.displayName || f.name) + ")"),
          (H.t = !0),
          H
        );
      }
      var Ue = C.__b;
      function ft(f) {
        function h(m) {
          var H = xe({}, m);
          return delete H.ref, f(H, m.ref);
        }
        return (
          (h.prototype.isReactComponent = h.t = !0),
          (h.displayName = "ForwardRef(" + (f.displayName || f.name) + ")"),
          h
        );
      }
      C.__b = function (f) {
        f.type && f.type.t && f.ref && ((f.props.ref = f.ref), (f.ref = null)),
          Ue && Ue(f);
      };
      var Le = function (f, h) {
          return f
            ? Q(f).reduce(function (m, H, Y) {
                return m.concat(h(H, Y));
              }, [])
            : null;
        },
        We = {
          map: Le,
          forEach: Le,
          count: function (f) {
            return f ? Q(f).length : 0;
          },
          only: function (f) {
            if (1 !== (f = Q(f)).length)
              throw new Error("Children.only() expects only one child.");
            return f[0];
          },
          toArray: Q,
        },
        Fe = C.__e;
      function Me(f) {
        return (
          f && (((f = xe({}, f)).__c = null), (f.__k = f.__k && f.__k.map(Me))),
          f
        );
      }
      function Ce() {
        (this.__u = 0), (this.o = null), (this.__b = null);
      }
      function ht(f) {
        var h = f.__.__c;
        return h && h.u && h.u(f);
      }
      function Pe(f) {
        var h, m, H;
        function Y(Z) {
          if (
            (h ||
              (h = f()).then(
                function (pe) {
                  m = pe.default || pe;
                },
                function (pe) {
                  H = pe;
                }
              ),
            H)
          )
            throw H;
          if (!m) throw h;
          return X(m, Z);
        }
        return (Y.displayName = "Lazy"), (Y.t = !0), Y;
      }
      function ke() {
        (this.i = null), (this.l = null);
      }
      (C.__e = function (f, h, m) {
        if (f.then)
          for (var H, Y = h; (Y = Y.__); )
            if ((H = Y.__c) && H.__c) return H.__c(f, h.__c);
        Fe(f, h, m);
      }),
        ((Ce.prototype = new N()).__c = function (f, h) {
          var m = this;
          null == m.o && (m.o = []), m.o.push(h);
          var H = ht(m.__v),
            Y = !1,
            Z = function () {
              Y || ((Y = !0), H ? H(pe) : pe());
            };
          (h.__c = h.componentWillUnmount),
            (h.componentWillUnmount = function () {
              Z(), h.__c && h.__c();
            });
          var pe = function () {
            var ge;
            if (!--m.__u)
              for (
                m.__v.__k[0] = m.state.u, m.setState({ u: (m.__b = null) });
                (ge = m.o.pop());

              )
                ge.forceUpdate();
          };
          m.__u++ || m.setState({ u: (m.__b = m.__v.__k[0]) }), f.then(Z, Z);
        }),
        (Ce.prototype.render = function (f, h) {
          return (
            this.__b && ((this.__v.__k[0] = Me(this.__b)), (this.__b = null)),
            [X(N, null, h.u ? null : f.children), h.u && f.fallback]
          );
        });
      var dt = function (f, h, m) {
        if (
          (++m[1] === m[0] && f.l.delete(h),
          f.props.revealOrder && ("t" !== f.props.revealOrder[0] || !f.l.size))
        )
          for (m = f.i; m; ) {
            for (; m.length > 3; ) m.pop()();
            if (m[1] < m[0]) break;
            f.i = m = m[2];
          }
      };
      ((ke.prototype = new N()).u = function (f) {
        var h = this,
          m = ht(h.__v),
          H = h.l.get(f);
        return (
          H[0]++,
          function (Y) {
            var Z = function () {
              h.props.revealOrder ? (H.push(Y), dt(h, f, H)) : Y();
            };
            m ? m(Z) : Z();
          }
        );
      }),
        (ke.prototype.render = function (f) {
          (this.i = null), (this.l = new Map());
          var h = Q(f.children);
          f.revealOrder && "b" === f.revealOrder[0] && h.reverse();
          for (var m = h.length; m--; )
            this.l.set(h[m], (this.i = [1, 0, this.i]));
          return f.children;
        }),
        (ke.prototype.componentDidUpdate = ke.prototype.componentDidMount =
          function () {
            var f = this;
            f.l.forEach(function (h, m) {
              dt(f, m, h);
            });
          });
      var $e = (function () {
        function f() {}
        var h = f.prototype;
        return (
          (h.getChildContext = function () {
            return this.props.context;
          }),
          (h.render = function (m) {
            return m.children;
          }),
          f
        );
      })();
      function qe(f) {
        var h = this,
          m = f.container,
          H = X($e, { context: h.context }, f.vnode);
        return (
          h.s &&
            h.s !== m &&
            (h.v.parentNode && h.s.removeChild(h.v), I(h.h), (h.p = !1)),
          f.vnode
            ? h.p
              ? ((m.__k = h.__k), r(H, m), (h.__k = m.__k))
              : ((h.v = document.createTextNode("")),
                w("", m),
                m.appendChild(h.v),
                (h.p = !0),
                (h.s = m),
                r(H, m, h.v),
                (h.__k = h.v.__k))
            : h.p && (h.v.parentNode && h.s.removeChild(h.v), I(h.h)),
          (h.h = H),
          (h.componentWillUnmount = function () {
            h.v.parentNode && h.s.removeChild(h.v), I(h.h);
          }),
          null
        );
      }
      function pt(f, h) {
        return X(qe, { vnode: f, container: h });
      }
      var De =
        /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      N.prototype.isReactComponent = {};
      var ze =
        (typeof Symbol < "u" && Symbol.for && Symbol.for("react.element")) ||
        60103;
      function _t(f, h, m) {
        if (null == h.__k) for (; h.firstChild; ) h.removeChild(h.firstChild);
        return r(f, h), "function" == typeof m && m(), f ? f.__c : null;
      }
      function Ve(f, h, m) {
        return w(f, h), "function" == typeof m && m(), f ? f.__c : null;
      }
      var Ge = C.event;
      function gt(f, h) {
        f["UNSAFE_" + h] &&
          !f[h] &&
          Object.defineProperty(f, h, {
            configurable: !1,
            get: function () {
              return this["UNSAFE_" + h];
            },
            set: function (m) {
              this["UNSAFE_" + h] = m;
            },
          });
      }
      C.event = function (f) {
        Ge && (f = Ge(f)), (f.persist = function () {});
        var h = !1,
          m = !1,
          H = f.stopPropagation;
        f.stopPropagation = function () {
          H.call(f), (h = !0);
        };
        var Y = f.preventDefault;
        return (
          (f.preventDefault = function () {
            Y.call(f), (m = !0);
          }),
          (f.isPropagationStopped = function () {
            return h;
          }),
          (f.isDefaultPrevented = function () {
            return m;
          }),
          (f.nativeEvent = f)
        );
      };
      var Ze = {
          configurable: !0,
          get: function () {
            return this.class;
          },
        },
        Qe = C.vnode;
      C.vnode = function (f) {
        f.$$typeof = ze;
        var h = f.type,
          m = f.props;
        if (h) {
          if (
            (m.class != m.className &&
              ((Ze.enumerable = "className" in m),
              null != m.className && (m.class = m.className),
              Object.defineProperty(m, "className", Ze)),
            "function" != typeof h)
          ) {
            var H, Y, Z;
            for (Z in (m.defaultValue &&
              void 0 !== m.value &&
              (m.value || 0 === m.value || (m.value = m.defaultValue),
              delete m.defaultValue),
            Array.isArray(m.value) &&
              m.multiple &&
              "select" === h &&
              (Q(m.children).forEach(function (pe) {
                -1 != m.value.indexOf(pe.props.value) &&
                  (pe.props.selected = !0);
              }),
              delete m.value),
            m))
              if ((H = De.test(Z))) break;
            if (H)
              for (Z in ((Y = f.props = {}), m))
                Y[De.test(Z) ? Z.replace(/[A-Z0-9]/, "-$&").toLowerCase() : Z] =
                  m[Z];
          }
          (function (pe) {
            var ge = f.type,
              we = f.props;
            if (we && "string" == typeof ge) {
              var se = {};
              for (var K in we)
                /^on(Ani|Tra|Tou)/.test(K) &&
                  ((we[K.toLowerCase()] = we[K]), delete we[K]),
                  (se[K.toLowerCase()] = K);
              if (
                (se.ondoubleclick &&
                  ((we.ondblclick = we[se.ondoubleclick]),
                  delete we[se.ondoubleclick]),
                se.onbeforeinput &&
                  ((we.onbeforeinput = we[se.onbeforeinput]),
                  delete we[se.onbeforeinput]),
                se.onchange &&
                  ("textarea" === ge ||
                    ("input" === ge.toLowerCase() &&
                      !/^fil|che|ra/i.test(we.type))))
              ) {
                var Ae = se.oninput || "oninput";
                we[Ae] || ((we[Ae] = we[se.onchange]), delete we[se.onchange]);
              }
            }
          })(),
            "function" == typeof h &&
              !h.m &&
              h.prototype &&
              (gt(h.prototype, "componentWillMount"),
              gt(h.prototype, "componentWillReceiveProps"),
              gt(h.prototype, "componentWillUpdate"),
              (h.m = !0));
        }
        Qe && Qe(f);
      };
      var St = "16.8.0";
      function Xe(f) {
        return X.bind(null, f);
      }
      function Ke(f) {
        return !!f && f.$$typeof === ze;
      }
      function wt(f) {
        return Ke(f) ? oe.apply(null, arguments) : f;
      }
      function et(f) {
        return !!f.__k && (r(null, f), !0);
      }
      function tt(f) {
        return (f && (f.base || (1 === f.nodeType && f))) || null;
      }
      var vt = function (f, h) {
        return f(h);
      };
      const xt = {
        useState: Be,
        useReducer: Se,
        useEffect: Te,
        useLayoutEffect: lt,
        useRef: u,
        useImperativeHandle: n,
        useMemo: i,
        useCallback: g,
        useContext: R,
        useDebugValue: k,
        version: "16.8.0",
        Children: We,
        render: _t,
        hydrate: _t,
        unmountComponentAtNode: et,
        createPortal: pt,
        createElement: X,
        createContext: j,
        createFactory: Xe,
        cloneElement: wt,
        createRef: D,
        Fragment: P,
        isValidElement: Ke,
        findDOMNode: tt,
        Component: N,
        PureComponent: ot,
        memo: Ne,
        forwardRef: ft,
        unstable_batchedUpdates: vt,
        Suspense: Ce,
        SuspenseList: ke,
        lazy: Pe,
      };
    },
    9348: function (de, A, U) {
      !(function (C, E) {
        "use strict";
        function v(y, e) {
          if (!y) throw new Error(e || "Assertion failed");
        }
        function T(y, e) {
          y.super_ = e;
          var o = function () {};
          (o.prototype = e.prototype),
            (y.prototype = new o()),
            (y.prototype.constructor = y);
        }
        function a(y, e, o) {
          if (a.isBN(y)) return y;
          (this.negative = 0),
            (this.words = null),
            (this.length = 0),
            (this.red = null),
            null !== y &&
              (("le" === e || "be" === e) && ((o = e), (e = 10)),
              this._init(y || 0, e || 10, o || "be"));
        }
        var B;
        "object" == typeof C ? (C.exports = a) : (E.BN = a),
          (a.BN = a),
          (a.wordSize = 26);
        try {
          B = U(6563).Buffer;
        } catch {}
        function O(y, e, o) {
          for (var l = 0, d = Math.min(y.length, o), p = e; p < d; p++) {
            var M = y.charCodeAt(p) - 48;
            (l <<= 4),
              (l |=
                M >= 49 && M <= 54
                  ? M - 49 + 10
                  : M >= 17 && M <= 22
                  ? M - 17 + 10
                  : 15 & M);
          }
          return l;
        }
        function b(y, e, o, l) {
          for (var d = 0, p = Math.min(y.length, o), M = e; M < p; M++) {
            var I = y.charCodeAt(M) - 48;
            (d *= l), (d += I >= 49 ? I - 49 + 10 : I >= 17 ? I - 17 + 10 : I);
          }
          return d;
        }
        (a.isBN = function (e) {
          return (
            e instanceof a ||
            (null !== e &&
              "object" == typeof e &&
              e.constructor.wordSize === a.wordSize &&
              Array.isArray(e.words))
          );
        }),
          (a.max = function (e, o) {
            return e.cmp(o) > 0 ? e : o;
          }),
          (a.min = function (e, o) {
            return e.cmp(o) < 0 ? e : o;
          }),
          (a.prototype._init = function (e, o, l) {
            if ("number" == typeof e) return this._initNumber(e, o, l);
            if ("object" == typeof e) return this._initArray(e, o, l);
            "hex" === o && (o = 16), v(o === (0 | o) && o >= 2 && o <= 36);
            var d = 0;
            "-" === (e = e.toString().replace(/\s+/g, ""))[0] && d++,
              16 === o ? this._parseHex(e, d) : this._parseBase(e, o, d),
              "-" === e[0] && (this.negative = 1),
              this.strip(),
              "le" === l && this._initArray(this.toArray(), o, l);
          }),
          (a.prototype._initNumber = function (e, o, l) {
            e < 0 && ((this.negative = 1), (e = -e)),
              e < 67108864
                ? ((this.words = [67108863 & e]), (this.length = 1))
                : e < 4503599627370496
                ? ((this.words = [67108863 & e, (e / 67108864) & 67108863]),
                  (this.length = 2))
                : (v(e < 9007199254740992),
                  (this.words = [67108863 & e, (e / 67108864) & 67108863, 1]),
                  (this.length = 3)),
              "le" === l && this._initArray(this.toArray(), o, l);
          }),
          (a.prototype._initArray = function (e, o, l) {
            if ((v("number" == typeof e.length), e.length <= 0))
              return (this.words = [0]), (this.length = 1), this;
            (this.length = Math.ceil(e.length / 3)),
              (this.words = new Array(this.length));
            for (var d = 0; d < this.length; d++) this.words[d] = 0;
            var p,
              M,
              I = 0;
            if ("be" === l)
              for (d = e.length - 1, p = 0; d >= 0; d -= 3)
                (this.words[p] |=
                  ((M = e[d] | (e[d - 1] << 8) | (e[d - 2] << 16)) << I) &
                  67108863),
                  (this.words[p + 1] = (M >>> (26 - I)) & 67108863),
                  (I += 24) >= 26 && ((I -= 26), p++);
            else if ("le" === l)
              for (d = 0, p = 0; d < e.length; d += 3)
                (this.words[p] |=
                  ((M = e[d] | (e[d + 1] << 8) | (e[d + 2] << 16)) << I) &
                  67108863),
                  (this.words[p + 1] = (M >>> (26 - I)) & 67108863),
                  (I += 24) >= 26 && ((I -= 26), p++);
            return this.strip();
          }),
          (a.prototype._parseHex = function (e, o) {
            (this.length = Math.ceil((e.length - o) / 6)),
              (this.words = new Array(this.length));
            for (var l = 0; l < this.length; l++) this.words[l] = 0;
            var d,
              p,
              M = 0;
            for (l = e.length - 6, d = 0; l >= o; l -= 6)
              (p = O(e, l, l + 6)),
                (this.words[d] |= (p << M) & 67108863),
                (this.words[d + 1] |= (p >>> (26 - M)) & 4194303),
                (M += 24) >= 26 && ((M -= 26), d++);
            l + 6 !== o &&
              ((p = O(e, o, l + 6)),
              (this.words[d] |= (p << M) & 67108863),
              (this.words[d + 1] |= (p >>> (26 - M)) & 4194303)),
              this.strip();
          }),
          (a.prototype._parseBase = function (e, o, l) {
            (this.words = [0]), (this.length = 1);
            for (var d = 0, p = 1; p <= 67108863; p *= o) d++;
            d--, (p = (p / o) | 0);
            for (
              var M = e.length - l,
                I = M % d,
                _ = Math.min(M, M - I) + l,
                r = 0,
                w = l;
              w < _;
              w += d
            )
              (r = b(e, w, w + d, o)),
                this.imuln(p),
                this.words[0] + r < 67108864
                  ? (this.words[0] += r)
                  : this._iaddn(r);
            if (0 !== I) {
              var oe = 1;
              for (r = b(e, w, e.length, o), w = 0; w < I; w++) oe *= o;
              this.imuln(oe),
                this.words[0] + r < 67108864
                  ? (this.words[0] += r)
                  : this._iaddn(r);
            }
          }),
          (a.prototype.copy = function (e) {
            e.words = new Array(this.length);
            for (var o = 0; o < this.length; o++) e.words[o] = this.words[o];
            (e.length = this.length),
              (e.negative = this.negative),
              (e.red = this.red);
          }),
          (a.prototype.clone = function () {
            var e = new a(null);
            return this.copy(e), e;
          }),
          (a.prototype._expand = function (e) {
            for (; this.length < e; ) this.words[this.length++] = 0;
            return this;
          }),
          (a.prototype.strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1]; )
              this.length--;
            return this._normSign();
          }),
          (a.prototype._normSign = function () {
            return (
              1 === this.length && 0 === this.words[0] && (this.negative = 0),
              this
            );
          }),
          (a.prototype.inspect = function () {
            return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
          });
        var G = [
            "",
            "0",
            "00",
            "000",
            "0000",
            "00000",
            "000000",
            "0000000",
            "00000000",
            "000000000",
            "0000000000",
            "00000000000",
            "000000000000",
            "0000000000000",
            "00000000000000",
            "000000000000000",
            "0000000000000000",
            "00000000000000000",
            "000000000000000000",
            "0000000000000000000",
            "00000000000000000000",
            "000000000000000000000",
            "0000000000000000000000",
            "00000000000000000000000",
            "000000000000000000000000",
            "0000000000000000000000000",
          ],
          ue = [
            0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
          ],
          fe = [
            0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
            16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
            11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
            5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
            20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
            60466176,
          ];
        function ee(y, e, o) {
          o.negative = e.negative ^ y.negative;
          var l = (y.length + e.length) | 0;
          (o.length = l), (l = (l - 1) | 0);
          var d = 0 | y.words[0],
            p = 0 | e.words[0],
            M = d * p,
            _ = (M / 67108864) | 0;
          o.words[0] = 67108863 & M;
          for (var r = 1; r < l; r++) {
            for (
              var w = _ >>> 26,
                oe = 67108863 & _,
                j = Math.min(r, e.length - 1),
                J = Math.max(0, r - y.length + 1);
              J <= j;
              J++
            )
              (w +=
                ((M =
                  (d = 0 | y.words[(r - J) | 0]) * (p = 0 | e.words[J]) + oe) /
                  67108864) |
                0),
                (oe = 67108863 & M);
            (o.words[r] = 0 | oe), (_ = 0 | w);
          }
          return 0 !== _ ? (o.words[r] = 0 | _) : o.length--, o.strip();
        }
        (a.prototype.toString = function (e, o) {
          var l;
          if (((o = 0 | o || 1), 16 === (e = e || 10) || "hex" === e)) {
            l = "";
            for (var d = 0, p = 0, M = 0; M < this.length; M++) {
              var I = this.words[M],
                _ = (16777215 & ((I << d) | p)).toString(16);
              (l =
                0 != (p = (I >>> (24 - d)) & 16777215) || M !== this.length - 1
                  ? G[6 - _.length] + _ + l
                  : _ + l),
                (d += 2) >= 26 && ((d -= 26), M--);
            }
            for (0 !== p && (l = p.toString(16) + l); l.length % o != 0; )
              l = "0" + l;
            return 0 !== this.negative && (l = "-" + l), l;
          }
          if (e === (0 | e) && e >= 2 && e <= 36) {
            var r = ue[e],
              w = fe[e];
            l = "";
            var oe = this.clone();
            for (oe.negative = 0; !oe.isZero(); ) {
              var j = oe.modn(w).toString(e);
              l = (oe = oe.idivn(w)).isZero() ? j + l : G[r - j.length] + j + l;
            }
            for (this.isZero() && (l = "0" + l); l.length % o != 0; )
              l = "0" + l;
            return 0 !== this.negative && (l = "-" + l), l;
          }
          v(!1, "Base should be between 2 and 36");
        }),
          (a.prototype.toNumber = function () {
            var e = this.words[0];
            return (
              2 === this.length
                ? (e += 67108864 * this.words[1])
                : 3 === this.length && 1 === this.words[2]
                ? (e += 4503599627370496 + 67108864 * this.words[1])
                : this.length > 2 &&
                  v(!1, "Number can only safely store up to 53 bits"),
              0 !== this.negative ? -e : e
            );
          }),
          (a.prototype.toJSON = function () {
            return this.toString(16);
          }),
          (a.prototype.toBuffer = function (e, o) {
            return v(typeof B < "u"), this.toArrayLike(B, e, o);
          }),
          (a.prototype.toArray = function (e, o) {
            return this.toArrayLike(Array, e, o);
          }),
          (a.prototype.toArrayLike = function (e, o, l) {
            var d = this.byteLength(),
              p = l || Math.max(1, d);
            v(d <= p, "byte array longer than desired length"),
              v(p > 0, "Requested array length <= 0"),
              this.strip();
            var _,
              r,
              M = "le" === o,
              I = new e(p),
              w = this.clone();
            if (M) {
              for (r = 0; !w.isZero(); r++)
                (_ = w.andln(255)), w.iushrn(8), (I[r] = _);
              for (; r < p; r++) I[r] = 0;
            } else {
              for (r = 0; r < p - d; r++) I[r] = 0;
              for (r = 0; !w.isZero(); r++)
                (_ = w.andln(255)), w.iushrn(8), (I[p - r - 1] = _);
            }
            return I;
          }),
          (a.prototype._countBits = Math.clz32
            ? function (e) {
                return 32 - Math.clz32(e);
              }
            : function (e) {
                var o = e,
                  l = 0;
                return (
                  o >= 4096 && ((l += 13), (o >>>= 13)),
                  o >= 64 && ((l += 7), (o >>>= 7)),
                  o >= 8 && ((l += 4), (o >>>= 4)),
                  o >= 2 && ((l += 2), (o >>>= 2)),
                  l + o
                );
              }),
          (a.prototype._zeroBits = function (e) {
            if (0 === e) return 26;
            var o = e,
              l = 0;
            return (
              8191 & o || ((l += 13), (o >>>= 13)),
              127 & o || ((l += 7), (o >>>= 7)),
              15 & o || ((l += 4), (o >>>= 4)),
              3 & o || ((l += 2), (o >>>= 2)),
              1 & o || l++,
              l
            );
          }),
          (a.prototype.bitLength = function () {
            var o = this._countBits(this.words[this.length - 1]);
            return 26 * (this.length - 1) + o;
          }),
          (a.prototype.zeroBits = function () {
            if (this.isZero()) return 0;
            for (var e = 0, o = 0; o < this.length; o++) {
              var l = this._zeroBits(this.words[o]);
              if (((e += l), 26 !== l)) break;
            }
            return e;
          }),
          (a.prototype.byteLength = function () {
            return Math.ceil(this.bitLength() / 8);
          }),
          (a.prototype.toTwos = function (e) {
            return 0 !== this.negative
              ? this.abs().inotn(e).iaddn(1)
              : this.clone();
          }),
          (a.prototype.fromTwos = function (e) {
            return this.testn(e - 1)
              ? this.notn(e).iaddn(1).ineg()
              : this.clone();
          }),
          (a.prototype.isNeg = function () {
            return 0 !== this.negative;
          }),
          (a.prototype.neg = function () {
            return this.clone().ineg();
          }),
          (a.prototype.ineg = function () {
            return this.isZero() || (this.negative ^= 1), this;
          }),
          (a.prototype.iuor = function (e) {
            for (; this.length < e.length; ) this.words[this.length++] = 0;
            for (var o = 0; o < e.length; o++)
              this.words[o] = this.words[o] | e.words[o];
            return this.strip();
          }),
          (a.prototype.ior = function (e) {
            return v(0 == (this.negative | e.negative)), this.iuor(e);
          }),
          (a.prototype.or = function (e) {
            return this.length > e.length
              ? this.clone().ior(e)
              : e.clone().ior(this);
          }),
          (a.prototype.uor = function (e) {
            return this.length > e.length
              ? this.clone().iuor(e)
              : e.clone().iuor(this);
          }),
          (a.prototype.iuand = function (e) {
            var o;
            o = this.length > e.length ? e : this;
            for (var l = 0; l < o.length; l++)
              this.words[l] = this.words[l] & e.words[l];
            return (this.length = o.length), this.strip();
          }),
          (a.prototype.iand = function (e) {
            return v(0 == (this.negative | e.negative)), this.iuand(e);
          }),
          (a.prototype.and = function (e) {
            return this.length > e.length
              ? this.clone().iand(e)
              : e.clone().iand(this);
          }),
          (a.prototype.uand = function (e) {
            return this.length > e.length
              ? this.clone().iuand(e)
              : e.clone().iuand(this);
          }),
          (a.prototype.iuxor = function (e) {
            var o, l;
            this.length > e.length
              ? ((o = this), (l = e))
              : ((o = e), (l = this));
            for (var d = 0; d < l.length; d++)
              this.words[d] = o.words[d] ^ l.words[d];
            if (this !== o)
              for (; d < o.length; d++) this.words[d] = o.words[d];
            return (this.length = o.length), this.strip();
          }),
          (a.prototype.ixor = function (e) {
            return v(0 == (this.negative | e.negative)), this.iuxor(e);
          }),
          (a.prototype.xor = function (e) {
            return this.length > e.length
              ? this.clone().ixor(e)
              : e.clone().ixor(this);
          }),
          (a.prototype.uxor = function (e) {
            return this.length > e.length
              ? this.clone().iuxor(e)
              : e.clone().iuxor(this);
          }),
          (a.prototype.inotn = function (e) {
            v("number" == typeof e && e >= 0);
            var o = 0 | Math.ceil(e / 26),
              l = e % 26;
            this._expand(o), l > 0 && o--;
            for (var d = 0; d < o; d++)
              this.words[d] = 67108863 & ~this.words[d];
            return (
              l > 0 &&
                (this.words[d] = ~this.words[d] & (67108863 >> (26 - l))),
              this.strip()
            );
          }),
          (a.prototype.notn = function (e) {
            return this.clone().inotn(e);
          }),
          (a.prototype.setn = function (e, o) {
            v("number" == typeof e && e >= 0);
            var l = (e / 26) | 0,
              d = e % 26;
            return (
              this._expand(l + 1),
              (this.words[l] = o
                ? this.words[l] | (1 << d)
                : this.words[l] & ~(1 << d)),
              this.strip()
            );
          }),
          (a.prototype.iadd = function (e) {
            var o, l, d;
            if (0 !== this.negative && 0 === e.negative)
              return (
                (this.negative = 0),
                (o = this.isub(e)),
                (this.negative ^= 1),
                this._normSign()
              );
            if (0 === this.negative && 0 !== e.negative)
              return (
                (e.negative = 0),
                (o = this.isub(e)),
                (e.negative = 1),
                o._normSign()
              );
            this.length > e.length
              ? ((l = this), (d = e))
              : ((l = e), (d = this));
            for (var p = 0, M = 0; M < d.length; M++)
              (this.words[M] =
                67108863 & (o = (0 | l.words[M]) + (0 | d.words[M]) + p)),
                (p = o >>> 26);
            for (; 0 !== p && M < l.length; M++)
              (this.words[M] = 67108863 & (o = (0 | l.words[M]) + p)),
                (p = o >>> 26);
            if (((this.length = l.length), 0 !== p))
              (this.words[this.length] = p), this.length++;
            else if (l !== this)
              for (; M < l.length; M++) this.words[M] = l.words[M];
            return this;
          }),
          (a.prototype.add = function (e) {
            var o;
            return 0 !== e.negative && 0 === this.negative
              ? ((e.negative = 0), (o = this.sub(e)), (e.negative ^= 1), o)
              : 0 === e.negative && 0 !== this.negative
              ? ((this.negative = 0), (o = e.sub(this)), (this.negative = 1), o)
              : this.length > e.length
              ? this.clone().iadd(e)
              : e.clone().iadd(this);
          }),
          (a.prototype.isub = function (e) {
            if (0 !== e.negative) {
              e.negative = 0;
              var o = this.iadd(e);
              return (e.negative = 1), o._normSign();
            }
            if (0 !== this.negative)
              return (
                (this.negative = 0),
                this.iadd(e),
                (this.negative = 1),
                this._normSign()
              );
            var d,
              p,
              l = this.cmp(e);
            if (0 === l)
              return (
                (this.negative = 0),
                (this.length = 1),
                (this.words[0] = 0),
                this
              );
            l > 0 ? ((d = this), (p = e)) : ((d = e), (p = this));
            for (var M = 0, I = 0; I < p.length; I++)
              (M = (o = (0 | d.words[I]) - (0 | p.words[I]) + M) >> 26),
                (this.words[I] = 67108863 & o);
            for (; 0 !== M && I < d.length; I++)
              (M = (o = (0 | d.words[I]) + M) >> 26),
                (this.words[I] = 67108863 & o);
            if (0 === M && I < d.length && d !== this)
              for (; I < d.length; I++) this.words[I] = d.words[I];
            return (
              (this.length = Math.max(this.length, I)),
              d !== this && (this.negative = 1),
              this.strip()
            );
          }),
          (a.prototype.sub = function (e) {
            return this.clone().isub(e);
          });
        var X = function (e, o, l) {
          var _,
            r,
            w,
            d = e.words,
            p = o.words,
            M = l.words,
            I = 0,
            oe = 0 | d[0],
            j = 8191 & oe,
            J = oe >>> 13,
            ae = 0 | d[1],
            _e = 8191 & ae,
            ve = ae >>> 13,
            nt = 0 | d[2],
            be = 8191 & nt,
            Ee = nt >>> 13,
            st = 0 | d[3],
            Ie = 8191 & st,
            ye = st >>> 13,
            Be = 0 | d[4],
            Se = 8191 & Be,
            Te = Be >>> 13,
            lt = 0 | d[5],
            u = 8191 & lt,
            n = lt >>> 13,
            i = 0 | d[6],
            g = 8191 & i,
            R = i >>> 13,
            k = 0 | d[7],
            L = 8191 & k,
            $ = k >>> 13,
            ce = 0 | d[8],
            ie = 8191 & ce,
            he = ce >>> 13,
            me = 0 | d[9],
            xe = 8191 & me,
            Re = me >>> 13,
            ot = 0 | p[0],
            Ne = 8191 & ot,
            Ue = ot >>> 13,
            ft = 0 | p[1],
            Le = 8191 & ft,
            We = ft >>> 13,
            Fe = 0 | p[2],
            Me = 8191 & Fe,
            Ce = Fe >>> 13,
            ht = 0 | p[3],
            Pe = 8191 & ht,
            ke = ht >>> 13,
            dt = 0 | p[4],
            $e = 8191 & dt,
            qe = dt >>> 13,
            pt = 0 | p[5],
            De = 8191 & pt,
            ze = pt >>> 13,
            _t = 0 | p[6],
            Ve = 8191 & _t,
            Ge = _t >>> 13,
            gt = 0 | p[7],
            Ze = 8191 & gt,
            Qe = gt >>> 13,
            St = 0 | p[8],
            Xe = 8191 & St,
            Ke = St >>> 13,
            wt = 0 | p[9],
            et = 8191 & wt,
            tt = wt >>> 13;
          (l.negative = e.negative ^ o.negative), (l.length = 19);
          var vt =
            (((I + (_ = Math.imul(j, Ne))) | 0) +
              ((8191 & (r = ((r = Math.imul(j, Ue)) + Math.imul(J, Ne)) | 0)) <<
                13)) |
            0;
          (I = ((((w = Math.imul(J, Ue)) + (r >>> 13)) | 0) + (vt >>> 26)) | 0),
            (vt &= 67108863),
            (_ = Math.imul(_e, Ne)),
            (r = ((r = Math.imul(_e, Ue)) + Math.imul(ve, Ne)) | 0),
            (w = Math.imul(ve, Ue));
          var xt =
            (((I + (_ = (_ + Math.imul(j, Le)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(j, We)) | 0) + Math.imul(J, Le)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(J, We)) | 0) + (r >>> 13)) | 0) +
              (xt >>> 26)) |
            0),
            (xt &= 67108863),
            (_ = Math.imul(be, Ne)),
            (r = ((r = Math.imul(be, Ue)) + Math.imul(Ee, Ne)) | 0),
            (w = Math.imul(Ee, Ue)),
            (_ = (_ + Math.imul(_e, Le)) | 0),
            (r = ((r = (r + Math.imul(_e, We)) | 0) + Math.imul(ve, Le)) | 0),
            (w = (w + Math.imul(ve, We)) | 0);
          var f =
            (((I + (_ = (_ + Math.imul(j, Me)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(j, Ce)) | 0) + Math.imul(J, Me)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(J, Ce)) | 0) + (r >>> 13)) | 0) +
              (f >>> 26)) |
            0),
            (f &= 67108863),
            (_ = Math.imul(Ie, Ne)),
            (r = ((r = Math.imul(Ie, Ue)) + Math.imul(ye, Ne)) | 0),
            (w = Math.imul(ye, Ue)),
            (_ = (_ + Math.imul(be, Le)) | 0),
            (r = ((r = (r + Math.imul(be, We)) | 0) + Math.imul(Ee, Le)) | 0),
            (w = (w + Math.imul(Ee, We)) | 0),
            (_ = (_ + Math.imul(_e, Me)) | 0),
            (r = ((r = (r + Math.imul(_e, Ce)) | 0) + Math.imul(ve, Me)) | 0),
            (w = (w + Math.imul(ve, Ce)) | 0);
          var h =
            (((I + (_ = (_ + Math.imul(j, Pe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(j, ke)) | 0) + Math.imul(J, Pe)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(J, ke)) | 0) + (r >>> 13)) | 0) +
              (h >>> 26)) |
            0),
            (h &= 67108863),
            (_ = Math.imul(Se, Ne)),
            (r = ((r = Math.imul(Se, Ue)) + Math.imul(Te, Ne)) | 0),
            (w = Math.imul(Te, Ue)),
            (_ = (_ + Math.imul(Ie, Le)) | 0),
            (r = ((r = (r + Math.imul(Ie, We)) | 0) + Math.imul(ye, Le)) | 0),
            (w = (w + Math.imul(ye, We)) | 0),
            (_ = (_ + Math.imul(be, Me)) | 0),
            (r = ((r = (r + Math.imul(be, Ce)) | 0) + Math.imul(Ee, Me)) | 0),
            (w = (w + Math.imul(Ee, Ce)) | 0),
            (_ = (_ + Math.imul(_e, Pe)) | 0),
            (r = ((r = (r + Math.imul(_e, ke)) | 0) + Math.imul(ve, Pe)) | 0),
            (w = (w + Math.imul(ve, ke)) | 0);
          var m =
            (((I + (_ = (_ + Math.imul(j, $e)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(j, qe)) | 0) + Math.imul(J, $e)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(J, qe)) | 0) + (r >>> 13)) | 0) +
              (m >>> 26)) |
            0),
            (m &= 67108863),
            (_ = Math.imul(u, Ne)),
            (r = ((r = Math.imul(u, Ue)) + Math.imul(n, Ne)) | 0),
            (w = Math.imul(n, Ue)),
            (_ = (_ + Math.imul(Se, Le)) | 0),
            (r = ((r = (r + Math.imul(Se, We)) | 0) + Math.imul(Te, Le)) | 0),
            (w = (w + Math.imul(Te, We)) | 0),
            (_ = (_ + Math.imul(Ie, Me)) | 0),
            (r = ((r = (r + Math.imul(Ie, Ce)) | 0) + Math.imul(ye, Me)) | 0),
            (w = (w + Math.imul(ye, Ce)) | 0),
            (_ = (_ + Math.imul(be, Pe)) | 0),
            (r = ((r = (r + Math.imul(be, ke)) | 0) + Math.imul(Ee, Pe)) | 0),
            (w = (w + Math.imul(Ee, ke)) | 0),
            (_ = (_ + Math.imul(_e, $e)) | 0),
            (r = ((r = (r + Math.imul(_e, qe)) | 0) + Math.imul(ve, $e)) | 0),
            (w = (w + Math.imul(ve, qe)) | 0);
          var H =
            (((I + (_ = (_ + Math.imul(j, De)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(j, ze)) | 0) + Math.imul(J, De)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(J, ze)) | 0) + (r >>> 13)) | 0) +
              (H >>> 26)) |
            0),
            (H &= 67108863),
            (_ = Math.imul(g, Ne)),
            (r = ((r = Math.imul(g, Ue)) + Math.imul(R, Ne)) | 0),
            (w = Math.imul(R, Ue)),
            (_ = (_ + Math.imul(u, Le)) | 0),
            (r = ((r = (r + Math.imul(u, We)) | 0) + Math.imul(n, Le)) | 0),
            (w = (w + Math.imul(n, We)) | 0),
            (_ = (_ + Math.imul(Se, Me)) | 0),
            (r = ((r = (r + Math.imul(Se, Ce)) | 0) + Math.imul(Te, Me)) | 0),
            (w = (w + Math.imul(Te, Ce)) | 0),
            (_ = (_ + Math.imul(Ie, Pe)) | 0),
            (r = ((r = (r + Math.imul(Ie, ke)) | 0) + Math.imul(ye, Pe)) | 0),
            (w = (w + Math.imul(ye, ke)) | 0),
            (_ = (_ + Math.imul(be, $e)) | 0),
            (r = ((r = (r + Math.imul(be, qe)) | 0) + Math.imul(Ee, $e)) | 0),
            (w = (w + Math.imul(Ee, qe)) | 0),
            (_ = (_ + Math.imul(_e, De)) | 0),
            (r = ((r = (r + Math.imul(_e, ze)) | 0) + Math.imul(ve, De)) | 0),
            (w = (w + Math.imul(ve, ze)) | 0);
          var Y =
            (((I + (_ = (_ + Math.imul(j, Ve)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(j, Ge)) | 0) + Math.imul(J, Ve)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(J, Ge)) | 0) + (r >>> 13)) | 0) +
              (Y >>> 26)) |
            0),
            (Y &= 67108863),
            (_ = Math.imul(L, Ne)),
            (r = ((r = Math.imul(L, Ue)) + Math.imul($, Ne)) | 0),
            (w = Math.imul($, Ue)),
            (_ = (_ + Math.imul(g, Le)) | 0),
            (r = ((r = (r + Math.imul(g, We)) | 0) + Math.imul(R, Le)) | 0),
            (w = (w + Math.imul(R, We)) | 0),
            (_ = (_ + Math.imul(u, Me)) | 0),
            (r = ((r = (r + Math.imul(u, Ce)) | 0) + Math.imul(n, Me)) | 0),
            (w = (w + Math.imul(n, Ce)) | 0),
            (_ = (_ + Math.imul(Se, Pe)) | 0),
            (r = ((r = (r + Math.imul(Se, ke)) | 0) + Math.imul(Te, Pe)) | 0),
            (w = (w + Math.imul(Te, ke)) | 0),
            (_ = (_ + Math.imul(Ie, $e)) | 0),
            (r = ((r = (r + Math.imul(Ie, qe)) | 0) + Math.imul(ye, $e)) | 0),
            (w = (w + Math.imul(ye, qe)) | 0),
            (_ = (_ + Math.imul(be, De)) | 0),
            (r = ((r = (r + Math.imul(be, ze)) | 0) + Math.imul(Ee, De)) | 0),
            (w = (w + Math.imul(Ee, ze)) | 0),
            (_ = (_ + Math.imul(_e, Ve)) | 0),
            (r = ((r = (r + Math.imul(_e, Ge)) | 0) + Math.imul(ve, Ve)) | 0),
            (w = (w + Math.imul(ve, Ge)) | 0);
          var Z =
            (((I + (_ = (_ + Math.imul(j, Ze)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(j, Qe)) | 0) + Math.imul(J, Ze)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(J, Qe)) | 0) + (r >>> 13)) | 0) +
              (Z >>> 26)) |
            0),
            (Z &= 67108863),
            (_ = Math.imul(ie, Ne)),
            (r = ((r = Math.imul(ie, Ue)) + Math.imul(he, Ne)) | 0),
            (w = Math.imul(he, Ue)),
            (_ = (_ + Math.imul(L, Le)) | 0),
            (r = ((r = (r + Math.imul(L, We)) | 0) + Math.imul($, Le)) | 0),
            (w = (w + Math.imul($, We)) | 0),
            (_ = (_ + Math.imul(g, Me)) | 0),
            (r = ((r = (r + Math.imul(g, Ce)) | 0) + Math.imul(R, Me)) | 0),
            (w = (w + Math.imul(R, Ce)) | 0),
            (_ = (_ + Math.imul(u, Pe)) | 0),
            (r = ((r = (r + Math.imul(u, ke)) | 0) + Math.imul(n, Pe)) | 0),
            (w = (w + Math.imul(n, ke)) | 0),
            (_ = (_ + Math.imul(Se, $e)) | 0),
            (r = ((r = (r + Math.imul(Se, qe)) | 0) + Math.imul(Te, $e)) | 0),
            (w = (w + Math.imul(Te, qe)) | 0),
            (_ = (_ + Math.imul(Ie, De)) | 0),
            (r = ((r = (r + Math.imul(Ie, ze)) | 0) + Math.imul(ye, De)) | 0),
            (w = (w + Math.imul(ye, ze)) | 0),
            (_ = (_ + Math.imul(be, Ve)) | 0),
            (r = ((r = (r + Math.imul(be, Ge)) | 0) + Math.imul(Ee, Ve)) | 0),
            (w = (w + Math.imul(Ee, Ge)) | 0),
            (_ = (_ + Math.imul(_e, Ze)) | 0),
            (r = ((r = (r + Math.imul(_e, Qe)) | 0) + Math.imul(ve, Ze)) | 0),
            (w = (w + Math.imul(ve, Qe)) | 0);
          var pe =
            (((I + (_ = (_ + Math.imul(j, Xe)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(j, Ke)) | 0) + Math.imul(J, Xe)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(J, Ke)) | 0) + (r >>> 13)) | 0) +
              (pe >>> 26)) |
            0),
            (pe &= 67108863),
            (_ = Math.imul(xe, Ne)),
            (r = ((r = Math.imul(xe, Ue)) + Math.imul(Re, Ne)) | 0),
            (w = Math.imul(Re, Ue)),
            (_ = (_ + Math.imul(ie, Le)) | 0),
            (r = ((r = (r + Math.imul(ie, We)) | 0) + Math.imul(he, Le)) | 0),
            (w = (w + Math.imul(he, We)) | 0),
            (_ = (_ + Math.imul(L, Me)) | 0),
            (r = ((r = (r + Math.imul(L, Ce)) | 0) + Math.imul($, Me)) | 0),
            (w = (w + Math.imul($, Ce)) | 0),
            (_ = (_ + Math.imul(g, Pe)) | 0),
            (r = ((r = (r + Math.imul(g, ke)) | 0) + Math.imul(R, Pe)) | 0),
            (w = (w + Math.imul(R, ke)) | 0),
            (_ = (_ + Math.imul(u, $e)) | 0),
            (r = ((r = (r + Math.imul(u, qe)) | 0) + Math.imul(n, $e)) | 0),
            (w = (w + Math.imul(n, qe)) | 0),
            (_ = (_ + Math.imul(Se, De)) | 0),
            (r = ((r = (r + Math.imul(Se, ze)) | 0) + Math.imul(Te, De)) | 0),
            (w = (w + Math.imul(Te, ze)) | 0),
            (_ = (_ + Math.imul(Ie, Ve)) | 0),
            (r = ((r = (r + Math.imul(Ie, Ge)) | 0) + Math.imul(ye, Ve)) | 0),
            (w = (w + Math.imul(ye, Ge)) | 0),
            (_ = (_ + Math.imul(be, Ze)) | 0),
            (r = ((r = (r + Math.imul(be, Qe)) | 0) + Math.imul(Ee, Ze)) | 0),
            (w = (w + Math.imul(Ee, Qe)) | 0),
            (_ = (_ + Math.imul(_e, Xe)) | 0),
            (r = ((r = (r + Math.imul(_e, Ke)) | 0) + Math.imul(ve, Xe)) | 0),
            (w = (w + Math.imul(ve, Ke)) | 0);
          var ge =
            (((I + (_ = (_ + Math.imul(j, et)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(j, tt)) | 0) + Math.imul(J, et)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(J, tt)) | 0) + (r >>> 13)) | 0) +
              (ge >>> 26)) |
            0),
            (ge &= 67108863),
            (_ = Math.imul(xe, Le)),
            (r = ((r = Math.imul(xe, We)) + Math.imul(Re, Le)) | 0),
            (w = Math.imul(Re, We)),
            (_ = (_ + Math.imul(ie, Me)) | 0),
            (r = ((r = (r + Math.imul(ie, Ce)) | 0) + Math.imul(he, Me)) | 0),
            (w = (w + Math.imul(he, Ce)) | 0),
            (_ = (_ + Math.imul(L, Pe)) | 0),
            (r = ((r = (r + Math.imul(L, ke)) | 0) + Math.imul($, Pe)) | 0),
            (w = (w + Math.imul($, ke)) | 0),
            (_ = (_ + Math.imul(g, $e)) | 0),
            (r = ((r = (r + Math.imul(g, qe)) | 0) + Math.imul(R, $e)) | 0),
            (w = (w + Math.imul(R, qe)) | 0),
            (_ = (_ + Math.imul(u, De)) | 0),
            (r = ((r = (r + Math.imul(u, ze)) | 0) + Math.imul(n, De)) | 0),
            (w = (w + Math.imul(n, ze)) | 0),
            (_ = (_ + Math.imul(Se, Ve)) | 0),
            (r = ((r = (r + Math.imul(Se, Ge)) | 0) + Math.imul(Te, Ve)) | 0),
            (w = (w + Math.imul(Te, Ge)) | 0),
            (_ = (_ + Math.imul(Ie, Ze)) | 0),
            (r = ((r = (r + Math.imul(Ie, Qe)) | 0) + Math.imul(ye, Ze)) | 0),
            (w = (w + Math.imul(ye, Qe)) | 0),
            (_ = (_ + Math.imul(be, Xe)) | 0),
            (r = ((r = (r + Math.imul(be, Ke)) | 0) + Math.imul(Ee, Xe)) | 0),
            (w = (w + Math.imul(Ee, Ke)) | 0);
          var we =
            (((I + (_ = (_ + Math.imul(_e, et)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(_e, tt)) | 0) + Math.imul(ve, et)) |
                  0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(ve, tt)) | 0) + (r >>> 13)) | 0) +
              (we >>> 26)) |
            0),
            (we &= 67108863),
            (_ = Math.imul(xe, Me)),
            (r = ((r = Math.imul(xe, Ce)) + Math.imul(Re, Me)) | 0),
            (w = Math.imul(Re, Ce)),
            (_ = (_ + Math.imul(ie, Pe)) | 0),
            (r = ((r = (r + Math.imul(ie, ke)) | 0) + Math.imul(he, Pe)) | 0),
            (w = (w + Math.imul(he, ke)) | 0),
            (_ = (_ + Math.imul(L, $e)) | 0),
            (r = ((r = (r + Math.imul(L, qe)) | 0) + Math.imul($, $e)) | 0),
            (w = (w + Math.imul($, qe)) | 0),
            (_ = (_ + Math.imul(g, De)) | 0),
            (r = ((r = (r + Math.imul(g, ze)) | 0) + Math.imul(R, De)) | 0),
            (w = (w + Math.imul(R, ze)) | 0),
            (_ = (_ + Math.imul(u, Ve)) | 0),
            (r = ((r = (r + Math.imul(u, Ge)) | 0) + Math.imul(n, Ve)) | 0),
            (w = (w + Math.imul(n, Ge)) | 0),
            (_ = (_ + Math.imul(Se, Ze)) | 0),
            (r = ((r = (r + Math.imul(Se, Qe)) | 0) + Math.imul(Te, Ze)) | 0),
            (w = (w + Math.imul(Te, Qe)) | 0),
            (_ = (_ + Math.imul(Ie, Xe)) | 0),
            (r = ((r = (r + Math.imul(Ie, Ke)) | 0) + Math.imul(ye, Xe)) | 0),
            (w = (w + Math.imul(ye, Ke)) | 0);
          var se =
            (((I + (_ = (_ + Math.imul(be, et)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(be, tt)) | 0) + Math.imul(Ee, et)) |
                  0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(Ee, tt)) | 0) + (r >>> 13)) | 0) +
              (se >>> 26)) |
            0),
            (se &= 67108863),
            (_ = Math.imul(xe, Pe)),
            (r = ((r = Math.imul(xe, ke)) + Math.imul(Re, Pe)) | 0),
            (w = Math.imul(Re, ke)),
            (_ = (_ + Math.imul(ie, $e)) | 0),
            (r = ((r = (r + Math.imul(ie, qe)) | 0) + Math.imul(he, $e)) | 0),
            (w = (w + Math.imul(he, qe)) | 0),
            (_ = (_ + Math.imul(L, De)) | 0),
            (r = ((r = (r + Math.imul(L, ze)) | 0) + Math.imul($, De)) | 0),
            (w = (w + Math.imul($, ze)) | 0),
            (_ = (_ + Math.imul(g, Ve)) | 0),
            (r = ((r = (r + Math.imul(g, Ge)) | 0) + Math.imul(R, Ve)) | 0),
            (w = (w + Math.imul(R, Ge)) | 0),
            (_ = (_ + Math.imul(u, Ze)) | 0),
            (r = ((r = (r + Math.imul(u, Qe)) | 0) + Math.imul(n, Ze)) | 0),
            (w = (w + Math.imul(n, Qe)) | 0),
            (_ = (_ + Math.imul(Se, Xe)) | 0),
            (r = ((r = (r + Math.imul(Se, Ke)) | 0) + Math.imul(Te, Xe)) | 0),
            (w = (w + Math.imul(Te, Ke)) | 0);
          var K =
            (((I + (_ = (_ + Math.imul(Ie, et)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(Ie, tt)) | 0) + Math.imul(ye, et)) |
                  0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(ye, tt)) | 0) + (r >>> 13)) | 0) +
              (K >>> 26)) |
            0),
            (K &= 67108863),
            (_ = Math.imul(xe, $e)),
            (r = ((r = Math.imul(xe, qe)) + Math.imul(Re, $e)) | 0),
            (w = Math.imul(Re, qe)),
            (_ = (_ + Math.imul(ie, De)) | 0),
            (r = ((r = (r + Math.imul(ie, ze)) | 0) + Math.imul(he, De)) | 0),
            (w = (w + Math.imul(he, ze)) | 0),
            (_ = (_ + Math.imul(L, Ve)) | 0),
            (r = ((r = (r + Math.imul(L, Ge)) | 0) + Math.imul($, Ve)) | 0),
            (w = (w + Math.imul($, Ge)) | 0),
            (_ = (_ + Math.imul(g, Ze)) | 0),
            (r = ((r = (r + Math.imul(g, Qe)) | 0) + Math.imul(R, Ze)) | 0),
            (w = (w + Math.imul(R, Qe)) | 0),
            (_ = (_ + Math.imul(u, Xe)) | 0),
            (r = ((r = (r + Math.imul(u, Ke)) | 0) + Math.imul(n, Xe)) | 0),
            (w = (w + Math.imul(n, Ke)) | 0);
          var Ae =
            (((I + (_ = (_ + Math.imul(Se, et)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(Se, tt)) | 0) + Math.imul(Te, et)) |
                  0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(Te, tt)) | 0) + (r >>> 13)) | 0) +
              (Ae >>> 26)) |
            0),
            (Ae &= 67108863),
            (_ = Math.imul(xe, De)),
            (r = ((r = Math.imul(xe, ze)) + Math.imul(Re, De)) | 0),
            (w = Math.imul(Re, ze)),
            (_ = (_ + Math.imul(ie, Ve)) | 0),
            (r = ((r = (r + Math.imul(ie, Ge)) | 0) + Math.imul(he, Ve)) | 0),
            (w = (w + Math.imul(he, Ge)) | 0),
            (_ = (_ + Math.imul(L, Ze)) | 0),
            (r = ((r = (r + Math.imul(L, Qe)) | 0) + Math.imul($, Ze)) | 0),
            (w = (w + Math.imul($, Qe)) | 0),
            (_ = (_ + Math.imul(g, Xe)) | 0),
            (r = ((r = (r + Math.imul(g, Ke)) | 0) + Math.imul(R, Xe)) | 0),
            (w = (w + Math.imul(R, Ke)) | 0);
          var He =
            (((I + (_ = (_ + Math.imul(u, et)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(u, tt)) | 0) + Math.imul(n, et)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(n, tt)) | 0) + (r >>> 13)) | 0) +
              (He >>> 26)) |
            0),
            (He &= 67108863),
            (_ = Math.imul(xe, Ve)),
            (r = ((r = Math.imul(xe, Ge)) + Math.imul(Re, Ve)) | 0),
            (w = Math.imul(Re, Ge)),
            (_ = (_ + Math.imul(ie, Ze)) | 0),
            (r = ((r = (r + Math.imul(ie, Qe)) | 0) + Math.imul(he, Ze)) | 0),
            (w = (w + Math.imul(he, Qe)) | 0),
            (_ = (_ + Math.imul(L, Xe)) | 0),
            (r = ((r = (r + Math.imul(L, Ke)) | 0) + Math.imul($, Xe)) | 0),
            (w = (w + Math.imul($, Ke)) | 0);
          var rt =
            (((I + (_ = (_ + Math.imul(g, et)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(g, tt)) | 0) + Math.imul(R, et)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(R, tt)) | 0) + (r >>> 13)) | 0) +
              (rt >>> 26)) |
            0),
            (rt &= 67108863),
            (_ = Math.imul(xe, Ze)),
            (r = ((r = Math.imul(xe, Qe)) + Math.imul(Re, Ze)) | 0),
            (w = Math.imul(Re, Qe)),
            (_ = (_ + Math.imul(ie, Xe)) | 0),
            (r = ((r = (r + Math.imul(ie, Ke)) | 0) + Math.imul(he, Xe)) | 0),
            (w = (w + Math.imul(he, Ke)) | 0);
          var je =
            (((I + (_ = (_ + Math.imul(L, et)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(L, tt)) | 0) + Math.imul($, et)) | 0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul($, tt)) | 0) + (r >>> 13)) | 0) +
              (je >>> 26)) |
            0),
            (je &= 67108863),
            (_ = Math.imul(xe, Xe)),
            (r = ((r = Math.imul(xe, Ke)) + Math.imul(Re, Xe)) | 0),
            (w = Math.imul(Re, Ke));
          var it =
            (((I + (_ = (_ + Math.imul(ie, et)) | 0)) | 0) +
              ((8191 &
                (r =
                  ((r = (r + Math.imul(ie, tt)) | 0) + Math.imul(he, et)) |
                  0)) <<
                13)) |
            0;
          (I =
            ((((w = (w + Math.imul(he, tt)) | 0) + (r >>> 13)) | 0) +
              (it >>> 26)) |
            0),
            (it &= 67108863);
          var Je =
            (((I + (_ = Math.imul(xe, et))) | 0) +
              ((8191 &
                (r = ((r = Math.imul(xe, tt)) + Math.imul(Re, et)) | 0)) <<
                13)) |
            0;
          return (
            (I =
              ((((w = Math.imul(Re, tt)) + (r >>> 13)) | 0) + (Je >>> 26)) | 0),
            (Je &= 67108863),
            (M[0] = vt),
            (M[1] = xt),
            (M[2] = f),
            (M[3] = h),
            (M[4] = m),
            (M[5] = H),
            (M[6] = Y),
            (M[7] = Z),
            (M[8] = pe),
            (M[9] = ge),
            (M[10] = we),
            (M[11] = se),
            (M[12] = K),
            (M[13] = Ae),
            (M[14] = He),
            (M[15] = rt),
            (M[16] = je),
            (M[17] = it),
            (M[18] = Je),
            0 !== I && ((M[19] = I), l.length++),
            l
          );
        };
        function D(y, e, o) {
          return new P().mulp(y, e, o);
        }
        function P(y, e) {
          (this.x = y), (this.y = e);
        }
        Math.imul || (X = ee),
          (a.prototype.mulTo = function (e, o) {
            var l,
              d = this.length + e.length;
            return (
              (l =
                10 === this.length && 10 === e.length
                  ? X(this, e, o)
                  : d < 63
                  ? ee(this, e, o)
                  : d < 1024
                  ? (function le(y, e, o) {
                      (o.negative = e.negative ^ y.negative),
                        (o.length = y.length + e.length);
                      for (var l = 0, d = 0, p = 0; p < o.length - 1; p++) {
                        var M = d;
                        d = 0;
                        for (
                          var I = 67108863 & l,
                            _ = Math.min(p, e.length - 1),
                            r = Math.max(0, p - y.length + 1);
                          r <= _;
                          r++
                        ) {
                          var J = (0 | y.words[p - r]) * (0 | e.words[r]),
                            ae = 67108863 & J;
                          (I = 67108863 & (ae = (ae + I) | 0)),
                            (d +=
                              (M =
                                ((M = (M + ((J / 67108864) | 0)) | 0) +
                                  (ae >>> 26)) |
                                0) >>> 26),
                            (M &= 67108863);
                        }
                        (o.words[p] = I), (l = M), (M = d);
                      }
                      return 0 !== l ? (o.words[p] = l) : o.length--, o.strip();
                    })(this, e, o)
                  : D(this, e, o)),
              l
            );
          }),
          (P.prototype.makeRBT = function (e) {
            for (
              var o = new Array(e), l = a.prototype._countBits(e) - 1, d = 0;
              d < e;
              d++
            )
              o[d] = this.revBin(d, l, e);
            return o;
          }),
          (P.prototype.revBin = function (e, o, l) {
            if (0 === e || e === l - 1) return e;
            for (var d = 0, p = 0; p < o; p++)
              (d |= (1 & e) << (o - p - 1)), (e >>= 1);
            return d;
          }),
          (P.prototype.permute = function (e, o, l, d, p, M) {
            for (var I = 0; I < M; I++) (d[I] = o[e[I]]), (p[I] = l[e[I]]);
          }),
          (P.prototype.transform = function (e, o, l, d, p, M) {
            this.permute(M, e, o, l, d, p);
            for (var I = 1; I < p; I <<= 1)
              for (
                var _ = I << 1,
                  r = Math.cos((2 * Math.PI) / _),
                  w = Math.sin((2 * Math.PI) / _),
                  oe = 0;
                oe < p;
                oe += _
              )
                for (var j = r, J = w, ae = 0; ae < I; ae++) {
                  var _e = l[oe + ae],
                    ve = d[oe + ae],
                    nt = l[oe + ae + I],
                    be = d[oe + ae + I],
                    Ee = j * nt - J * be;
                  (be = j * be + J * nt),
                    (l[oe + ae] = _e + (nt = Ee)),
                    (d[oe + ae] = ve + be),
                    (l[oe + ae + I] = _e - nt),
                    (d[oe + ae + I] = ve - be),
                    ae !== _ &&
                      ((Ee = r * j - w * J), (J = r * J + w * j), (j = Ee));
                }
          }),
          (P.prototype.guessLen13b = function (e, o) {
            var l = 1 | Math.max(o, e),
              d = 1 & l,
              p = 0;
            for (l = (l / 2) | 0; l; l >>>= 1) p++;
            return 1 << (p + 1 + d);
          }),
          (P.prototype.conjugate = function (e, o, l) {
            if (!(l <= 1))
              for (var d = 0; d < l / 2; d++) {
                var p = e[d];
                (e[d] = e[l - d - 1]),
                  (e[l - d - 1] = p),
                  (p = o[d]),
                  (o[d] = -o[l - d - 1]),
                  (o[l - d - 1] = -p);
              }
          }),
          (P.prototype.normalize13b = function (e, o) {
            for (var l = 0, d = 0; d < o / 2; d++) {
              var p =
                8192 * Math.round(e[2 * d + 1] / o) +
                Math.round(e[2 * d] / o) +
                l;
              (e[d] = 67108863 & p),
                (l = p < 67108864 ? 0 : (p / 67108864) | 0);
            }
            return e;
          }),
          (P.prototype.convert13b = function (e, o, l, d) {
            for (var p = 0, M = 0; M < o; M++)
              (l[2 * M] = 8191 & (p += 0 | e[M])),
                (l[2 * M + 1] = 8191 & (p >>>= 13)),
                (p >>>= 13);
            for (M = 2 * o; M < d; ++M) l[M] = 0;
            v(0 === p), v(0 == (-8192 & p));
          }),
          (P.prototype.stub = function (e) {
            for (var o = new Array(e), l = 0; l < e; l++) o[l] = 0;
            return o;
          }),
          (P.prototype.mulp = function (e, o, l) {
            var d = 2 * this.guessLen13b(e.length, o.length),
              p = this.makeRBT(d),
              M = this.stub(d),
              I = new Array(d),
              _ = new Array(d),
              r = new Array(d),
              w = new Array(d),
              oe = new Array(d),
              j = new Array(d),
              J = l.words;
            (J.length = d),
              this.convert13b(e.words, e.length, I, d),
              this.convert13b(o.words, o.length, w, d),
              this.transform(I, M, _, r, d, p),
              this.transform(w, M, oe, j, d, p);
            for (var ae = 0; ae < d; ae++) {
              var _e = _[ae] * oe[ae] - r[ae] * j[ae];
              (r[ae] = _[ae] * j[ae] + r[ae] * oe[ae]), (_[ae] = _e);
            }
            return (
              this.conjugate(_, r, d),
              this.transform(_, r, J, M, d, p),
              this.conjugate(J, M, d),
              this.normalize13b(J, d),
              (l.negative = e.negative ^ o.negative),
              (l.length = e.length + o.length),
              l.strip()
            );
          }),
          (a.prototype.mul = function (e) {
            var o = new a(null);
            return (
              (o.words = new Array(this.length + e.length)), this.mulTo(e, o)
            );
          }),
          (a.prototype.mulf = function (e) {
            var o = new a(null);
            return (o.words = new Array(this.length + e.length)), D(this, e, o);
          }),
          (a.prototype.imul = function (e) {
            return this.clone().mulTo(e, this);
          }),
          (a.prototype.imuln = function (e) {
            v("number" == typeof e), v(e < 67108864);
            for (var o = 0, l = 0; l < this.length; l++) {
              var d = (0 | this.words[l]) * e,
                p = (67108863 & d) + (67108863 & o);
              (o >>= 26),
                (o += (d / 67108864) | 0),
                (o += p >>> 26),
                (this.words[l] = 67108863 & p);
            }
            return 0 !== o && ((this.words[l] = o), this.length++), this;
          }),
          (a.prototype.muln = function (e) {
            return this.clone().imuln(e);
          }),
          (a.prototype.sqr = function () {
            return this.mul(this);
          }),
          (a.prototype.isqr = function () {
            return this.imul(this.clone());
          }),
          (a.prototype.pow = function (e) {
            var o = (function V(y) {
              for (var e = new Array(y.bitLength()), o = 0; o < e.length; o++) {
                var d = o % 26;
                e[o] = (y.words[(o / 26) | 0] & (1 << d)) >>> d;
              }
              return e;
            })(e);
            if (0 === o.length) return new a(1);
            for (
              var l = this, d = 0;
              d < o.length && 0 === o[d];
              d++, l = l.sqr()
            );
            if (++d < o.length)
              for (var p = l.sqr(); d < o.length; d++, p = p.sqr())
                0 !== o[d] && (l = l.mul(p));
            return l;
          }),
          (a.prototype.iushln = function (e) {
            v("number" == typeof e && e >= 0);
            var p,
              o = e % 26,
              l = (e - o) / 26,
              d = (67108863 >>> (26 - o)) << (26 - o);
            if (0 !== o) {
              var M = 0;
              for (p = 0; p < this.length; p++) {
                var I = this.words[p] & d;
                (this.words[p] = (((0 | this.words[p]) - I) << o) | M),
                  (M = I >>> (26 - o));
              }
              M && ((this.words[p] = M), this.length++);
            }
            if (0 !== l) {
              for (p = this.length - 1; p >= 0; p--)
                this.words[p + l] = this.words[p];
              for (p = 0; p < l; p++) this.words[p] = 0;
              this.length += l;
            }
            return this.strip();
          }),
          (a.prototype.ishln = function (e) {
            return v(0 === this.negative), this.iushln(e);
          }),
          (a.prototype.iushrn = function (e, o, l) {
            var d;
            v("number" == typeof e && e >= 0),
              (d = o ? (o - (o % 26)) / 26 : 0);
            var p = e % 26,
              M = Math.min((e - p) / 26, this.length),
              I = 67108863 ^ ((67108863 >>> p) << p),
              _ = l;
            if (((d -= M), (d = Math.max(0, d)), _)) {
              for (var r = 0; r < M; r++) _.words[r] = this.words[r];
              _.length = M;
            }
            if (0 !== M)
              if (this.length > M)
                for (this.length -= M, r = 0; r < this.length; r++)
                  this.words[r] = this.words[r + M];
              else (this.words[0] = 0), (this.length = 1);
            var w = 0;
            for (r = this.length - 1; r >= 0 && (0 !== w || r >= d); r--) {
              var oe = 0 | this.words[r];
              (this.words[r] = (w << (26 - p)) | (oe >>> p)), (w = oe & I);
            }
            return (
              _ && 0 !== w && (_.words[_.length++] = w),
              0 === this.length && ((this.words[0] = 0), (this.length = 1)),
              this.strip()
            );
          }),
          (a.prototype.ishrn = function (e, o, l) {
            return v(0 === this.negative), this.iushrn(e, o, l);
          }),
          (a.prototype.shln = function (e) {
            return this.clone().ishln(e);
          }),
          (a.prototype.ushln = function (e) {
            return this.clone().iushln(e);
          }),
          (a.prototype.shrn = function (e) {
            return this.clone().ishrn(e);
          }),
          (a.prototype.ushrn = function (e) {
            return this.clone().iushrn(e);
          }),
          (a.prototype.testn = function (e) {
            v("number" == typeof e && e >= 0);
            var o = e % 26,
              l = (e - o) / 26;
            return !(this.length <= l || !(this.words[l] & (1 << o)));
          }),
          (a.prototype.imaskn = function (e) {
            v("number" == typeof e && e >= 0);
            var o = e % 26,
              l = (e - o) / 26;
            return (
              v(0 === this.negative, "imaskn works only with positive numbers"),
              this.length <= l
                ? this
                : (0 !== o && l++,
                  (this.length = Math.min(l, this.length)),
                  0 !== o &&
                    (this.words[this.length - 1] &=
                      67108863 ^ ((67108863 >>> o) << o)),
                  this.strip())
            );
          }),
          (a.prototype.maskn = function (e) {
            return this.clone().imaskn(e);
          }),
          (a.prototype.iaddn = function (e) {
            return (
              v("number" == typeof e),
              v(e < 67108864),
              e < 0
                ? this.isubn(-e)
                : 0 !== this.negative
                ? 1 === this.length && (0 | this.words[0]) < e
                  ? ((this.words[0] = e - (0 | this.words[0])),
                    (this.negative = 0),
                    this)
                  : ((this.negative = 0),
                    this.isubn(e),
                    (this.negative = 1),
                    this)
                : this._iaddn(e)
            );
          }),
          (a.prototype._iaddn = function (e) {
            this.words[0] += e;
            for (var o = 0; o < this.length && this.words[o] >= 67108864; o++)
              (this.words[o] -= 67108864),
                o === this.length - 1
                  ? (this.words[o + 1] = 1)
                  : this.words[o + 1]++;
            return (this.length = Math.max(this.length, o + 1)), this;
          }),
          (a.prototype.isubn = function (e) {
            if ((v("number" == typeof e), v(e < 67108864), e < 0))
              return this.iaddn(-e);
            if (0 !== this.negative)
              return (
                (this.negative = 0), this.iaddn(e), (this.negative = 1), this
              );
            if (((this.words[0] -= e), 1 === this.length && this.words[0] < 0))
              (this.words[0] = -this.words[0]), (this.negative = 1);
            else
              for (var o = 0; o < this.length && this.words[o] < 0; o++)
                (this.words[o] += 67108864), (this.words[o + 1] -= 1);
            return this.strip();
          }),
          (a.prototype.addn = function (e) {
            return this.clone().iaddn(e);
          }),
          (a.prototype.subn = function (e) {
            return this.clone().isubn(e);
          }),
          (a.prototype.iabs = function () {
            return (this.negative = 0), this;
          }),
          (a.prototype.abs = function () {
            return this.clone().iabs();
          }),
          (a.prototype._ishlnsubmul = function (e, o, l) {
            var p;
            this._expand(e.length + l);
            var M,
              I = 0;
            for (p = 0; p < e.length; p++) {
              M = (0 | this.words[p + l]) + I;
              var _ = (0 | e.words[p]) * o;
              (I = ((M -= 67108863 & _) >> 26) - ((_ / 67108864) | 0)),
                (this.words[p + l] = 67108863 & M);
            }
            for (; p < this.length - l; p++)
              (I = (M = (0 | this.words[p + l]) + I) >> 26),
                (this.words[p + l] = 67108863 & M);
            if (0 === I) return this.strip();
            for (v(-1 === I), I = 0, p = 0; p < this.length; p++)
              (I = (M = -(0 | this.words[p]) + I) >> 26),
                (this.words[p] = 67108863 & M);
            return (this.negative = 1), this.strip();
          }),
          (a.prototype._wordDiv = function (e, o) {
            var l,
              d = this.clone(),
              p = e,
              M = 0 | p.words[p.length - 1];
            0 != (l = 26 - this._countBits(M)) &&
              ((p = p.ushln(l)), d.iushln(l), (M = 0 | p.words[p.length - 1]));
            var r,
              _ = d.length - p.length;
            if ("mod" !== o) {
              ((r = new a(null)).length = _ + 1),
                (r.words = new Array(r.length));
              for (var w = 0; w < r.length; w++) r.words[w] = 0;
            }
            var oe = d.clone()._ishlnsubmul(p, 1, _);
            0 === oe.negative && ((d = oe), r && (r.words[_] = 1));
            for (var j = _ - 1; j >= 0; j--) {
              var J =
                67108864 * (0 | d.words[p.length + j]) +
                (0 | d.words[p.length + j - 1]);
              for (
                J = Math.min((J / M) | 0, 67108863), d._ishlnsubmul(p, J, j);
                0 !== d.negative;

              )
                J--,
                  (d.negative = 0),
                  d._ishlnsubmul(p, 1, j),
                  d.isZero() || (d.negative ^= 1);
              r && (r.words[j] = J);
            }
            return (
              r && r.strip(),
              d.strip(),
              "div" !== o && 0 !== l && d.iushrn(l),
              { div: r || null, mod: d }
            );
          }),
          (a.prototype.divmod = function (e, o, l) {
            return (
              v(!e.isZero()),
              this.isZero()
                ? { div: new a(0), mod: new a(0) }
                : 0 !== this.negative && 0 === e.negative
                ? ((M = this.neg().divmod(e, o)),
                  "mod" !== o && (d = M.div.neg()),
                  "div" !== o &&
                    ((p = M.mod.neg()), l && 0 !== p.negative && p.iadd(e)),
                  { div: d, mod: p })
                : 0 === this.negative && 0 !== e.negative
                ? ((M = this.divmod(e.neg(), o)),
                  "mod" !== o && (d = M.div.neg()),
                  { div: d, mod: M.mod })
                : this.negative & e.negative
                ? ((M = this.neg().divmod(e.neg(), o)),
                  "div" !== o &&
                    ((p = M.mod.neg()), l && 0 !== p.negative && p.isub(e)),
                  { div: M.div, mod: p })
                : e.length > this.length || this.cmp(e) < 0
                ? { div: new a(0), mod: this }
                : 1 === e.length
                ? "div" === o
                  ? { div: this.divn(e.words[0]), mod: null }
                  : "mod" === o
                  ? { div: null, mod: new a(this.modn(e.words[0])) }
                  : {
                      div: this.divn(e.words[0]),
                      mod: new a(this.modn(e.words[0])),
                    }
                : this._wordDiv(e, o)
            );
            var d, p, M;
          }),
          (a.prototype.div = function (e) {
            return this.divmod(e, "div", !1).div;
          }),
          (a.prototype.mod = function (e) {
            return this.divmod(e, "mod", !1).mod;
          }),
          (a.prototype.umod = function (e) {
            return this.divmod(e, "mod", !0).mod;
          }),
          (a.prototype.divRound = function (e) {
            var o = this.divmod(e);
            if (o.mod.isZero()) return o.div;
            var l = 0 !== o.div.negative ? o.mod.isub(e) : o.mod,
              d = e.ushrn(1),
              p = e.andln(1),
              M = l.cmp(d);
            return M < 0 || (1 === p && 0 === M)
              ? o.div
              : 0 !== o.div.negative
              ? o.div.isubn(1)
              : o.div.iaddn(1);
          }),
          (a.prototype.modn = function (e) {
            v(e <= 67108863);
            for (var o = (1 << 26) % e, l = 0, d = this.length - 1; d >= 0; d--)
              l = (o * l + (0 | this.words[d])) % e;
            return l;
          }),
          (a.prototype.idivn = function (e) {
            v(e <= 67108863);
            for (var o = 0, l = this.length - 1; l >= 0; l--) {
              var d = (0 | this.words[l]) + 67108864 * o;
              (this.words[l] = (d / e) | 0), (o = d % e);
            }
            return this.strip();
          }),
          (a.prototype.divn = function (e) {
            return this.clone().idivn(e);
          }),
          (a.prototype.egcd = function (e) {
            v(0 === e.negative), v(!e.isZero());
            var o = this,
              l = e.clone();
            o = 0 !== o.negative ? o.umod(e) : o.clone();
            for (
              var d = new a(1), p = new a(0), M = new a(0), I = new a(1), _ = 0;
              o.isEven() && l.isEven();

            )
              o.iushrn(1), l.iushrn(1), ++_;
            for (var r = l.clone(), w = o.clone(); !o.isZero(); ) {
              for (
                var oe = 0, j = 1;
                !(o.words[0] & j) && oe < 26;
                ++oe, j <<= 1
              );
              if (oe > 0)
                for (o.iushrn(oe); oe-- > 0; )
                  (d.isOdd() || p.isOdd()) && (d.iadd(r), p.isub(w)),
                    d.iushrn(1),
                    p.iushrn(1);
              for (
                var J = 0, ae = 1;
                !(l.words[0] & ae) && J < 26;
                ++J, ae <<= 1
              );
              if (J > 0)
                for (l.iushrn(J); J-- > 0; )
                  (M.isOdd() || I.isOdd()) && (M.iadd(r), I.isub(w)),
                    M.iushrn(1),
                    I.iushrn(1);
              o.cmp(l) >= 0
                ? (o.isub(l), d.isub(M), p.isub(I))
                : (l.isub(o), M.isub(d), I.isub(p));
            }
            return { a: M, b: I, gcd: l.iushln(_) };
          }),
          (a.prototype._invmp = function (e) {
            v(0 === e.negative), v(!e.isZero());
            var oe,
              o = this,
              l = e.clone();
            o = 0 !== o.negative ? o.umod(e) : o.clone();
            for (
              var d = new a(1), p = new a(0), M = l.clone();
              o.cmpn(1) > 0 && l.cmpn(1) > 0;

            ) {
              for (var I = 0, _ = 1; !(o.words[0] & _) && I < 26; ++I, _ <<= 1);
              if (I > 0)
                for (o.iushrn(I); I-- > 0; )
                  d.isOdd() && d.iadd(M), d.iushrn(1);
              for (var r = 0, w = 1; !(l.words[0] & w) && r < 26; ++r, w <<= 1);
              if (r > 0)
                for (l.iushrn(r); r-- > 0; )
                  p.isOdd() && p.iadd(M), p.iushrn(1);
              o.cmp(l) >= 0 ? (o.isub(l), d.isub(p)) : (l.isub(o), p.isub(d));
            }
            return (oe = 0 === o.cmpn(1) ? d : p).cmpn(0) < 0 && oe.iadd(e), oe;
          }),
          (a.prototype.gcd = function (e) {
            if (this.isZero()) return e.abs();
            if (e.isZero()) return this.abs();
            var o = this.clone(),
              l = e.clone();
            (o.negative = 0), (l.negative = 0);
            for (var d = 0; o.isEven() && l.isEven(); d++)
              o.iushrn(1), l.iushrn(1);
            for (;;) {
              for (; o.isEven(); ) o.iushrn(1);
              for (; l.isEven(); ) l.iushrn(1);
              var p = o.cmp(l);
              if (p < 0) {
                var M = o;
                (o = l), (l = M);
              } else if (0 === p || 0 === l.cmpn(1)) break;
              o.isub(l);
            }
            return l.iushln(d);
          }),
          (a.prototype.invm = function (e) {
            return this.egcd(e).a.umod(e);
          }),
          (a.prototype.isEven = function () {
            return 0 == (1 & this.words[0]);
          }),
          (a.prototype.isOdd = function () {
            return 1 == (1 & this.words[0]);
          }),
          (a.prototype.andln = function (e) {
            return this.words[0] & e;
          }),
          (a.prototype.bincn = function (e) {
            v("number" == typeof e);
            var o = e % 26,
              l = (e - o) / 26,
              d = 1 << o;
            if (this.length <= l)
              return this._expand(l + 1), (this.words[l] |= d), this;
            for (var p = d, M = l; 0 !== p && M < this.length; M++) {
              var I = 0 | this.words[M];
              (p = (I += p) >>> 26), (this.words[M] = I &= 67108863);
            }
            return 0 !== p && ((this.words[M] = p), this.length++), this;
          }),
          (a.prototype.isZero = function () {
            return 1 === this.length && 0 === this.words[0];
          }),
          (a.prototype.cmpn = function (e) {
            var l,
              o = e < 0;
            if (0 !== this.negative && !o) return -1;
            if (0 === this.negative && o) return 1;
            if ((this.strip(), this.length > 1)) l = 1;
            else {
              o && (e = -e), v(e <= 67108863, "Number is too big");
              var d = 0 | this.words[0];
              l = d === e ? 0 : d < e ? -1 : 1;
            }
            return 0 !== this.negative ? 0 | -l : l;
          }),
          (a.prototype.cmp = function (e) {
            if (0 !== this.negative && 0 === e.negative) return -1;
            if (0 === this.negative && 0 !== e.negative) return 1;
            var o = this.ucmp(e);
            return 0 !== this.negative ? 0 | -o : o;
          }),
          (a.prototype.ucmp = function (e) {
            if (this.length > e.length) return 1;
            if (this.length < e.length) return -1;
            for (var o = 0, l = this.length - 1; l >= 0; l--) {
              var d = 0 | this.words[l],
                p = 0 | e.words[l];
              if (d !== p) {
                d < p ? (o = -1) : d > p && (o = 1);
                break;
              }
            }
            return o;
          }),
          (a.prototype.gtn = function (e) {
            return 1 === this.cmpn(e);
          }),
          (a.prototype.gt = function (e) {
            return 1 === this.cmp(e);
          }),
          (a.prototype.gten = function (e) {
            return this.cmpn(e) >= 0;
          }),
          (a.prototype.gte = function (e) {
            return this.cmp(e) >= 0;
          }),
          (a.prototype.ltn = function (e) {
            return -1 === this.cmpn(e);
          }),
          (a.prototype.lt = function (e) {
            return -1 === this.cmp(e);
          }),
          (a.prototype.lten = function (e) {
            return this.cmpn(e) <= 0;
          }),
          (a.prototype.lte = function (e) {
            return this.cmp(e) <= 0;
          }),
          (a.prototype.eqn = function (e) {
            return 0 === this.cmpn(e);
          }),
          (a.prototype.eq = function (e) {
            return 0 === this.cmp(e);
          }),
          (a.red = function (e) {
            return new Q(e);
          }),
          (a.prototype.toRed = function (e) {
            return (
              v(!this.red, "Already a number in reduction context"),
              v(0 === this.negative, "red works only with positives"),
              e.convertTo(this)._forceRed(e)
            );
          }),
          (a.prototype.fromRed = function () {
            return (
              v(
                this.red,
                "fromRed works only with numbers in reduction context"
              ),
              this.red.convertFrom(this)
            );
          }),
          (a.prototype._forceRed = function (e) {
            return (this.red = e), this;
          }),
          (a.prototype.forceRed = function (e) {
            return (
              v(!this.red, "Already a number in reduction context"),
              this._forceRed(e)
            );
          }),
          (a.prototype.redAdd = function (e) {
            return (
              v(this.red, "redAdd works only with red numbers"),
              this.red.add(this, e)
            );
          }),
          (a.prototype.redIAdd = function (e) {
            return (
              v(this.red, "redIAdd works only with red numbers"),
              this.red.iadd(this, e)
            );
          }),
          (a.prototype.redSub = function (e) {
            return (
              v(this.red, "redSub works only with red numbers"),
              this.red.sub(this, e)
            );
          }),
          (a.prototype.redISub = function (e) {
            return (
              v(this.red, "redISub works only with red numbers"),
              this.red.isub(this, e)
            );
          }),
          (a.prototype.redShl = function (e) {
            return (
              v(this.red, "redShl works only with red numbers"),
              this.red.shl(this, e)
            );
          }),
          (a.prototype.redMul = function (e) {
            return (
              v(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.mul(this, e)
            );
          }),
          (a.prototype.redIMul = function (e) {
            return (
              v(this.red, "redMul works only with red numbers"),
              this.red._verify2(this, e),
              this.red.imul(this, e)
            );
          }),
          (a.prototype.redSqr = function () {
            return (
              v(this.red, "redSqr works only with red numbers"),
              this.red._verify1(this),
              this.red.sqr(this)
            );
          }),
          (a.prototype.redISqr = function () {
            return (
              v(this.red, "redISqr works only with red numbers"),
              this.red._verify1(this),
              this.red.isqr(this)
            );
          }),
          (a.prototype.redSqrt = function () {
            return (
              v(this.red, "redSqrt works only with red numbers"),
              this.red._verify1(this),
              this.red.sqrt(this)
            );
          }),
          (a.prototype.redInvm = function () {
            return (
              v(this.red, "redInvm works only with red numbers"),
              this.red._verify1(this),
              this.red.invm(this)
            );
          }),
          (a.prototype.redNeg = function () {
            return (
              v(this.red, "redNeg works only with red numbers"),
              this.red._verify1(this),
              this.red.neg(this)
            );
          }),
          (a.prototype.redPow = function (e) {
            return (
              v(this.red && !e.red, "redPow(normalNum)"),
              this.red._verify1(this),
              this.red.pow(this, e)
            );
          });
        var N = { k256: null, p224: null, p192: null, p25519: null };
        function x(y, e) {
          (this.name = y),
            (this.p = new a(e, 16)),
            (this.n = this.p.bitLength()),
            (this.k = new a(1).iushln(this.n).isub(this.p)),
            (this.tmp = this._tmp());
        }
        function S() {
          x.call(
            this,
            "k256",
            "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
          );
        }
        function W() {
          x.call(
            this,
            "p224",
            "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
          );
        }
        function q() {
          x.call(
            this,
            "p192",
            "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
          );
        }
        function ne() {
          x.call(
            this,
            "25519",
            "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
          );
        }
        function Q(y) {
          if ("string" == typeof y) {
            var e = a._prime(y);
            (this.m = e.p), (this.prime = e);
          } else
            v(y.gtn(1), "modulus must be greater than 1"),
              (this.m = y),
              (this.prime = null);
        }
        function te(y) {
          Q.call(this, y),
            (this.shift = this.m.bitLength()),
            this.shift % 26 != 0 && (this.shift += 26 - (this.shift % 26)),
            (this.r = new a(1).iushln(this.shift)),
            (this.r2 = this.imod(this.r.sqr())),
            (this.rinv = this.r._invmp(this.m)),
            (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
            (this.minv = this.minv.umod(this.r)),
            (this.minv = this.r.sub(this.minv));
        }
        (x.prototype._tmp = function () {
          var e = new a(null);
          return (e.words = new Array(Math.ceil(this.n / 13))), e;
        }),
          (x.prototype.ireduce = function (e) {
            var l,
              o = e;
            do {
              this.split(o, this.tmp),
                (l = (o = (o = this.imulK(o)).iadd(this.tmp)).bitLength());
            } while (l > this.n);
            var d = l < this.n ? -1 : o.ucmp(this.p);
            return (
              0 === d
                ? ((o.words[0] = 0), (o.length = 1))
                : d > 0
                ? o.isub(this.p)
                : o.strip(),
              o
            );
          }),
          (x.prototype.split = function (e, o) {
            e.iushrn(this.n, 0, o);
          }),
          (x.prototype.imulK = function (e) {
            return e.imul(this.k);
          }),
          T(S, x),
          (S.prototype.split = function (e, o) {
            for (var l = 4194303, d = Math.min(e.length, 9), p = 0; p < d; p++)
              o.words[p] = e.words[p];
            if (((o.length = d), e.length <= 9))
              return (e.words[0] = 0), void (e.length = 1);
            var M = e.words[9];
            for (o.words[o.length++] = M & l, p = 10; p < e.length; p++) {
              var I = 0 | e.words[p];
              (e.words[p - 10] = ((I & l) << 4) | (M >>> 22)), (M = I);
            }
            (e.words[p - 10] = M >>>= 22),
              (e.length -= 0 === M && e.length > 10 ? 10 : 9);
          }),
          (S.prototype.imulK = function (e) {
            (e.words[e.length] = 0),
              (e.words[e.length + 1] = 0),
              (e.length += 2);
            for (var o = 0, l = 0; l < e.length; l++) {
              var d = 0 | e.words[l];
              (e.words[l] = 67108863 & (o += 977 * d)),
                (o = 64 * d + ((o / 67108864) | 0));
            }
            return (
              0 === e.words[e.length - 1] &&
                (e.length--, 0 === e.words[e.length - 1] && e.length--),
              e
            );
          }),
          T(W, x),
          T(q, x),
          T(ne, x),
          (ne.prototype.imulK = function (e) {
            for (var o = 0, l = 0; l < e.length; l++) {
              var d = 19 * (0 | e.words[l]) + o,
                p = 67108863 & d;
              (d >>>= 26), (e.words[l] = p), (o = d);
            }
            return 0 !== o && (e.words[e.length++] = o), e;
          }),
          (a._prime = function (e) {
            if (N[e]) return N[e];
            var o;
            if ("k256" === e) o = new S();
            else if ("p224" === e) o = new W();
            else if ("p192" === e) o = new q();
            else {
              if ("p25519" !== e) throw new Error("Unknown prime " + e);
              o = new ne();
            }
            return (N[e] = o), o;
          }),
          (Q.prototype._verify1 = function (e) {
            v(0 === e.negative, "red works only with positives"),
              v(e.red, "red works only with red numbers");
          }),
          (Q.prototype._verify2 = function (e, o) {
            v(0 == (e.negative | o.negative), "red works only with positives"),
              v(e.red && e.red === o.red, "red works only with red numbers");
          }),
          (Q.prototype.imod = function (e) {
            return this.prime
              ? this.prime.ireduce(e)._forceRed(this)
              : e.umod(this.m)._forceRed(this);
          }),
          (Q.prototype.neg = function (e) {
            return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
          }),
          (Q.prototype.add = function (e, o) {
            this._verify2(e, o);
            var l = e.add(o);
            return l.cmp(this.m) >= 0 && l.isub(this.m), l._forceRed(this);
          }),
          (Q.prototype.iadd = function (e, o) {
            this._verify2(e, o);
            var l = e.iadd(o);
            return l.cmp(this.m) >= 0 && l.isub(this.m), l;
          }),
          (Q.prototype.sub = function (e, o) {
            this._verify2(e, o);
            var l = e.sub(o);
            return l.cmpn(0) < 0 && l.iadd(this.m), l._forceRed(this);
          }),
          (Q.prototype.isub = function (e, o) {
            this._verify2(e, o);
            var l = e.isub(o);
            return l.cmpn(0) < 0 && l.iadd(this.m), l;
          }),
          (Q.prototype.shl = function (e, o) {
            return this._verify1(e), this.imod(e.ushln(o));
          }),
          (Q.prototype.imul = function (e, o) {
            return this._verify2(e, o), this.imod(e.imul(o));
          }),
          (Q.prototype.mul = function (e, o) {
            return this._verify2(e, o), this.imod(e.mul(o));
          }),
          (Q.prototype.isqr = function (e) {
            return this.imul(e, e.clone());
          }),
          (Q.prototype.sqr = function (e) {
            return this.mul(e, e);
          }),
          (Q.prototype.sqrt = function (e) {
            if (e.isZero()) return e.clone();
            var o = this.m.andln(3);
            if ((v(o % 2 == 1), 3 === o)) {
              var l = this.m.add(new a(1)).iushrn(2);
              return this.pow(e, l);
            }
            for (
              var d = this.m.subn(1), p = 0;
              !d.isZero() && 0 === d.andln(1);

            )
              p++, d.iushrn(1);
            v(!d.isZero());
            var M = new a(1).toRed(this),
              I = M.redNeg(),
              _ = this.m.subn(1).iushrn(1),
              r = this.m.bitLength();
            for (
              r = new a(2 * r * r).toRed(this);
              0 !== this.pow(r, _).cmp(I);

            )
              r.redIAdd(I);
            for (
              var w = this.pow(r, d),
                oe = this.pow(e, d.addn(1).iushrn(1)),
                j = this.pow(e, d),
                J = p;
              0 !== j.cmp(M);

            ) {
              for (var ae = j, _e = 0; 0 !== ae.cmp(M); _e++) ae = ae.redSqr();
              v(_e < J);
              var ve = this.pow(w, new a(1).iushln(J - _e - 1));
              (oe = oe.redMul(ve)),
                (w = ve.redSqr()),
                (j = j.redMul(w)),
                (J = _e);
            }
            return oe;
          }),
          (Q.prototype.invm = function (e) {
            var o = e._invmp(this.m);
            return 0 !== o.negative
              ? ((o.negative = 0), this.imod(o).redNeg())
              : this.imod(o);
          }),
          (Q.prototype.pow = function (e, o) {
            if (o.isZero()) return new a(1).toRed(this);
            if (0 === o.cmpn(1)) return e.clone();
            var d = new Array(16);
            (d[0] = new a(1).toRed(this)), (d[1] = e);
            for (var p = 2; p < d.length; p++) d[p] = this.mul(d[p - 1], e);
            var M = d[0],
              I = 0,
              _ = 0,
              r = o.bitLength() % 26;
            for (0 === r && (r = 26), p = o.length - 1; p >= 0; p--) {
              for (var w = o.words[p], oe = r - 1; oe >= 0; oe--) {
                var j = (w >> oe) & 1;
                M !== d[0] && (M = this.sqr(M)),
                  0 !== j || 0 !== I
                    ? ((I <<= 1),
                      (I |= j),
                      (4 == ++_ || (0 === p && 0 === oe)) &&
                        ((M = this.mul(M, d[I])), (_ = 0), (I = 0)))
                    : (_ = 0);
              }
              r = 26;
            }
            return M;
          }),
          (Q.prototype.convertTo = function (e) {
            var o = e.umod(this.m);
            return o === e ? o.clone() : o;
          }),
          (Q.prototype.convertFrom = function (e) {
            var o = e.clone();
            return (o.red = null), o;
          }),
          (a.mont = function (e) {
            return new te(e);
          }),
          T(te, Q),
          (te.prototype.convertTo = function (e) {
            return this.imod(e.ushln(this.shift));
          }),
          (te.prototype.convertFrom = function (e) {
            var o = this.imod(e.mul(this.rinv));
            return (o.red = null), o;
          }),
          (te.prototype.imul = function (e, o) {
            if (e.isZero() || o.isZero())
              return (e.words[0] = 0), (e.length = 1), e;
            var l = e.imul(o),
              d = l
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              p = l.isub(d).iushrn(this.shift),
              M = p;
            return (
              p.cmp(this.m) >= 0
                ? (M = p.isub(this.m))
                : p.cmpn(0) < 0 && (M = p.iadd(this.m)),
              M._forceRed(this)
            );
          }),
          (te.prototype.mul = function (e, o) {
            if (e.isZero() || o.isZero()) return new a(0)._forceRed(this);
            var l = e.mul(o),
              d = l
                .maskn(this.shift)
                .mul(this.minv)
                .imaskn(this.shift)
                .mul(this.m),
              p = l.isub(d).iushrn(this.shift),
              M = p;
            return (
              p.cmp(this.m) >= 0
                ? (M = p.isub(this.m))
                : p.cmpn(0) < 0 && (M = p.iadd(this.m)),
              M._forceRed(this)
            );
          }),
          (te.prototype.invm = function (e) {
            return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
          });
      })((de = U.nmd(de)), this);
    },
    6499: (de, A) => {
      "use strict";
      function U(V) {
        let ee;
        return (
          typeof window < "u" && typeof window[V] < "u" && (ee = window[V]), ee
        );
      }
      function C(V) {
        const ee = U(V);
        if (!ee) throw new Error(`${V} is not defined in Window`);
        return ee;
      }
      Object.defineProperty(A, "__esModule", { value: !0 }),
        (A.getLocalStorage =
          A.getLocalStorageOrThrow =
          A.getCrypto =
          A.getCryptoOrThrow =
          A.getLocation =
          A.getLocationOrThrow =
          A.getNavigator =
          A.getNavigatorOrThrow =
          A.getDocument =
          A.getDocumentOrThrow =
          A.getFromWindowOrThrow =
          A.getFromWindow =
            void 0),
        (A.getFromWindow = U),
        (A.getFromWindowOrThrow = C),
        (A.getDocumentOrThrow = function E() {
          return C("document");
        }),
        (A.getDocument = function v() {
          return U("document");
        }),
        (A.getNavigatorOrThrow = function T() {
          return C("navigator");
        }),
        (A.getNavigator = function a() {
          return U("navigator");
        }),
        (A.getLocationOrThrow = function B() {
          return C("location");
        }),
        (A.getLocation = function O() {
          return U("location");
        }),
        (A.getCryptoOrThrow = function b() {
          return C("crypto");
        }),
        (A.getCrypto = function G() {
          return U("crypto");
        }),
        (A.getLocalStorageOrThrow = function ue() {
          return C("localStorage");
        }),
        (A.getLocalStorage = function fe() {
          return U("localStorage");
        });
    },
    543: (de, A, U) => {
      "use strict";
      A.D = void 0;
      const E = U(6499);
      A.D = function v() {
        let T, a;
        try {
          (T = E.getDocumentOrThrow()), (a = E.getLocationOrThrow());
        } catch {
          return null;
        }
        function O(...le) {
          const D = T.getElementsByTagName("meta");
          for (let P = 0; P < D.length; P++) {
            const N = D[P],
              x = ["itemprop", "property", "name"]
                .map((S) => N.getAttribute(S))
                .filter((S) => !!S && le.includes(S));
            if (x.length && x) {
              const S = N.getAttribute("content");
              if (S) return S;
            }
          }
          return "";
        }
        const ue = (function b() {
          let le = O("name", "og:site_name", "og:title", "twitter:title");
          return le || (le = T.title), le;
        })();
        return {
          description: (function G() {
            return O(
              "description",
              "og:description",
              "twitter:description",
              "keywords"
            );
          })(),
          url: a.origin,
          icons: (function B() {
            const le = T.getElementsByTagName("link"),
              D = [];
            for (let P = 0; P < le.length; P++) {
              const N = le[P],
                x = N.getAttribute("rel");
              if (x && x.toLowerCase().indexOf("icon") > -1) {
                const S = N.getAttribute("href");
                if (S)
                  if (
                    -1 === S.toLowerCase().indexOf("https:") &&
                    -1 === S.toLowerCase().indexOf("http:") &&
                    0 !== S.indexOf("//")
                  ) {
                    let W = a.protocol + "//" + a.host;
                    if (0 === S.indexOf("/")) W += S;
                    else {
                      const q = a.pathname.split("/");
                      q.pop(), (W += q.join("/") + "/" + S);
                    }
                    D.push(W);
                  } else
                    0 === S.indexOf("//") ? D.push(a.protocol + S) : D.push(S);
              }
            }
            return D;
          })(),
          name: ue,
        };
      };
    },
    9093: (de, A, U) => {
      "use strict";
      var C = U(3675),
        E = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      de.exports = function a(B, O) {
        var b,
          G,
          ue,
          fe,
          V,
          ee,
          X = !1;
        O || (O = {}), (b = O.debug || !1);
        try {
          if (
            ((ue = C()),
            (fe = document.createRange()),
            (V = document.getSelection()),
            ((ee = document.createElement("span")).textContent = B),
            (ee.ariaHidden = "true"),
            (ee.style.all = "unset"),
            (ee.style.position = "fixed"),
            (ee.style.top = 0),
            (ee.style.clip = "rect(0, 0, 0, 0)"),
            (ee.style.whiteSpace = "pre"),
            (ee.style.webkitUserSelect = "text"),
            (ee.style.MozUserSelect = "text"),
            (ee.style.msUserSelect = "text"),
            (ee.style.userSelect = "text"),
            ee.addEventListener("copy", function (D) {
              D.stopPropagation(),
                O.format &&
                  (D.preventDefault(),
                  typeof D.clipboardData > "u"
                    ? (b && console.warn("unable to use e.clipboardData"),
                      b && console.warn("trying IE specific stuff"),
                      window.clipboardData.clearData(),
                      window.clipboardData.setData(E[O.format] || E.default, B))
                    : (D.clipboardData.clearData(),
                      D.clipboardData.setData(O.format, B))),
                O.onCopy && (D.preventDefault(), O.onCopy(D.clipboardData));
            }),
            document.body.appendChild(ee),
            fe.selectNodeContents(ee),
            V.addRange(fe),
            !document.execCommand("copy"))
          )
            throw new Error("copy command was unsuccessful");
          X = !0;
        } catch (D) {
          b && console.error("unable to copy using execCommand: ", D),
            b && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(O.format || "text", B),
              O.onCopy && O.onCopy(window.clipboardData),
              (X = !0);
          } catch (P) {
            b && console.error("unable to copy using clipboardData: ", P),
              b && console.error("falling back to prompt"),
              (G = (function T(B) {
                var O =
                  (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") +
                  "+C";
                return B.replace(/#{\s*key\s*}/g, O);
              })(
                "message" in O ? O.message : "Copy to clipboard: #{key}, Enter"
              )),
              window.prompt(G, B);
          }
        } finally {
          V &&
            ("function" == typeof V.removeRange
              ? V.removeRange(fe)
              : V.removeAllRanges()),
            ee && document.body.removeChild(ee),
            ue();
        }
        return X;
      };
    },
    5829: (de) => {
      (de.exports = C), (C.strict = E), (C.loose = v);
      var A = Object.prototype.toString,
        U = {
          "[object Int8Array]": !0,
          "[object Int16Array]": !0,
          "[object Int32Array]": !0,
          "[object Uint8Array]": !0,
          "[object Uint8ClampedArray]": !0,
          "[object Uint16Array]": !0,
          "[object Uint32Array]": !0,
          "[object Float32Array]": !0,
          "[object Float64Array]": !0,
        };
      function C(T) {
        return E(T) || v(T);
      }
      function E(T) {
        return (
          T instanceof Int8Array ||
          T instanceof Int16Array ||
          T instanceof Int32Array ||
          T instanceof Uint8Array ||
          T instanceof Uint8ClampedArray ||
          T instanceof Uint16Array ||
          T instanceof Uint32Array ||
          T instanceof Float32Array ||
          T instanceof Float64Array
        );
      }
      function v(T) {
        return U[A.call(T)];
      }
    },
    6425: (de) => {
      var A = {}.toString;
      de.exports =
        Array.isArray ||
        function (U) {
          return "[object Array]" == A.call(U);
        };
    },
    3259: (de, A, U) => {
      var C = U(8695),
        E = U(1465),
        v = U(3210),
        T = U(2334);
      function a(B, O, b, G, ue) {
        var fe = [].slice.call(arguments, 1),
          V = fe.length,
          ee = "function" == typeof fe[V - 1];
        if (!ee && !C()) throw new Error("Callback required as last argument");
        if (!ee) {
          if (V < 1) throw new Error("Too few arguments provided");
          return (
            1 === V
              ? ((b = O), (O = G = void 0))
              : 2 === V && !O.getContext && ((G = b), (b = O), (O = void 0)),
            new Promise(function (le, D) {
              try {
                var P = E.create(b, G);
                le(B(P, O, G));
              } catch (N) {
                D(N);
              }
            })
          );
        }
        if (V < 2) throw new Error("Too few arguments provided");
        2 === V
          ? ((ue = b), (b = O), (O = G = void 0))
          : 3 === V &&
            (O.getContext && typeof ue > "u"
              ? ((ue = G), (G = void 0))
              : ((ue = G), (G = b), (b = O), (O = void 0)));
        try {
          var X = E.create(b, G);
          ue(null, B(X, O, G));
        } catch (le) {
          ue(le);
        }
      }
      (A.create = E.create),
        (A.toCanvas = a.bind(null, v.render)),
        (A.toDataURL = a.bind(null, v.renderToDataURL)),
        (A.toString = a.bind(null, function (B, O, b) {
          return T.render(B, b);
        }));
    },
    8695: (de) => {
      de.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    6221: (de, A, U) => {
      var C = U(4792).getSymbolSize;
      (A.getRowColCoords = function (v) {
        if (1 === v) return [];
        for (
          var T = Math.floor(v / 7) + 2,
            a = C(v),
            B = 145 === a ? 26 : 2 * Math.ceil((a - 13) / (2 * T - 2)),
            O = [a - 7],
            b = 1;
          b < T - 1;
          b++
        )
          O[b] = O[b - 1] - B;
        return O.push(6), O.reverse();
      }),
        (A.getPositions = function (v) {
          for (
            var T = [], a = A.getRowColCoords(v), B = a.length, O = 0;
            O < B;
            O++
          )
            for (var b = 0; b < B; b++)
              (0 === O && 0 === b) ||
                (0 === O && b === B - 1) ||
                (O === B - 1 && 0 === b) ||
                T.push([a[O], a[b]]);
          return T;
        });
    },
    2424: (de, A, U) => {
      var C = U(4016),
        E = [
          "0",
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "A",
          "B",
          "C",
          "D",
          "E",
          "F",
          "G",
          "H",
          "I",
          "J",
          "K",
          "L",
          "M",
          "N",
          "O",
          "P",
          "Q",
          "R",
          "S",
          "T",
          "U",
          "V",
          "W",
          "X",
          "Y",
          "Z",
          " ",
          "$",
          "%",
          "*",
          "+",
          "-",
          ".",
          "/",
          ":",
        ];
      function v(T) {
        (this.mode = C.ALPHANUMERIC), (this.data = T);
      }
      (v.getBitsLength = function (a) {
        return 11 * Math.floor(a / 2) + (a % 2) * 6;
      }),
        (v.prototype.getLength = function () {
          return this.data.length;
        }),
        (v.prototype.getBitsLength = function () {
          return v.getBitsLength(this.data.length);
        }),
        (v.prototype.write = function (a) {
          var B;
          for (B = 0; B + 2 <= this.data.length; B += 2) {
            var O = 45 * E.indexOf(this.data[B]);
            (O += E.indexOf(this.data[B + 1])), a.put(O, 11);
          }
          this.data.length % 2 && a.put(E.indexOf(this.data[B]), 6);
        }),
        (de.exports = v);
    },
    2118: (de) => {
      function A() {
        (this.buffer = []), (this.length = 0);
      }
      (A.prototype = {
        get: function (U) {
          var C = Math.floor(U / 8);
          return 1 == ((this.buffer[C] >>> (7 - (U % 8))) & 1);
        },
        put: function (U, C) {
          for (var E = 0; E < C; E++)
            this.putBit(1 == ((U >>> (C - E - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (U) {
          var C = Math.floor(this.length / 8);
          this.buffer.length <= C && this.buffer.push(0),
            U && (this.buffer[C] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (de.exports = A);
    },
    4425: (de, A, U) => {
      var C = U(1708);
      function E(v) {
        if (!v || v < 1)
          throw new Error("BitMatrix size must be defined and greater than 0");
        (this.size = v),
          (this.data = C.alloc(v * v)),
          (this.reservedBit = C.alloc(v * v));
      }
      (E.prototype.set = function (v, T, a, B) {
        var O = v * this.size + T;
        (this.data[O] = a), B && (this.reservedBit[O] = !0);
      }),
        (E.prototype.get = function (v, T) {
          return this.data[v * this.size + T];
        }),
        (E.prototype.xor = function (v, T, a) {
          this.data[v * this.size + T] ^= a;
        }),
        (E.prototype.isReserved = function (v, T) {
          return this.reservedBit[v * this.size + T];
        }),
        (de.exports = E);
    },
    5663: (de, A, U) => {
      var C = U(1708),
        E = U(4016);
      function v(T) {
        (this.mode = E.BYTE), (this.data = C.from(T));
      }
      (v.getBitsLength = function (a) {
        return 8 * a;
      }),
        (v.prototype.getLength = function () {
          return this.data.length;
        }),
        (v.prototype.getBitsLength = function () {
          return v.getBitsLength(this.data.length);
        }),
        (v.prototype.write = function (T) {
          for (var a = 0, B = this.data.length; a < B; a++)
            T.put(this.data[a], 8);
        }),
        (de.exports = v);
    },
    4655: (de, A, U) => {
      var C = U(2259),
        E = [
          1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4,
          4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8,
          10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6,
          11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23,
          25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12,
          23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29,
          40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51,
          60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74,
          24, 47, 65, 77, 25, 49, 68, 81,
        ],
        v = [
          7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48,
          72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110,
          160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308,
          104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280,
          408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650,
          224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504,
          750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952,
          1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140,
          1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350,
          1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590,
          1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860,
          2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430,
        ];
      (A.getBlocksCount = function (a, B) {
        switch (B) {
          case C.L:
            return E[4 * (a - 1) + 0];
          case C.M:
            return E[4 * (a - 1) + 1];
          case C.Q:
            return E[4 * (a - 1) + 2];
          case C.H:
            return E[4 * (a - 1) + 3];
          default:
            return;
        }
      }),
        (A.getTotalCodewordsCount = function (a, B) {
          switch (B) {
            case C.L:
              return v[4 * (a - 1) + 0];
            case C.M:
              return v[4 * (a - 1) + 1];
            case C.Q:
              return v[4 * (a - 1) + 2];
            case C.H:
              return v[4 * (a - 1) + 3];
            default:
              return;
          }
        });
    },
    2259: (de, A) => {
      (A.L = { bit: 1 }),
        (A.M = { bit: 0 }),
        (A.Q = { bit: 3 }),
        (A.H = { bit: 2 }),
        (A.isValid = function (E) {
          return E && typeof E.bit < "u" && E.bit >= 0 && E.bit < 4;
        }),
        (A.from = function (E, v) {
          if (A.isValid(E)) return E;
          try {
            return (function U(C) {
              if ("string" != typeof C)
                throw new Error("Param is not a string");
              switch (C.toLowerCase()) {
                case "l":
                case "low":
                  return A.L;
                case "m":
                case "medium":
                  return A.M;
                case "q":
                case "quartile":
                  return A.Q;
                case "h":
                case "high":
                  return A.H;
                default:
                  throw new Error("Unknown EC Level: " + C);
              }
            })(E);
          } catch {
            return v;
          }
        });
    },
    3114: (de, A, U) => {
      var C = U(4792).getSymbolSize;
      A.getPositions = function (T) {
        var a = C(T);
        return [
          [0, 0],
          [a - 7, 0],
          [0, a - 7],
        ];
      };
    },
    7078: (de, A, U) => {
      var C = U(4792),
        T = C.getBCHDigit(1335);
      A.getEncodedBits = function (B, O) {
        for (var b = (B.bit << 3) | O, G = b << 10; C.getBCHDigit(G) - T >= 0; )
          G ^= 1335 << (C.getBCHDigit(G) - T);
        return 21522 ^ ((b << 10) | G);
      };
    },
    5339: (de, A, U) => {
      var C = U(1708),
        E = C.alloc(512),
        v = C.alloc(256);
      (function () {
        for (var a = 1, B = 0; B < 255; B++)
          (E[B] = a), (v[a] = B), 256 & (a <<= 1) && (a ^= 285);
        for (B = 255; B < 512; B++) E[B] = E[B - 255];
      })(),
        (A.log = function (a) {
          if (a < 1) throw new Error("log(" + a + ")");
          return v[a];
        }),
        (A.exp = function (a) {
          return E[a];
        }),
        (A.mul = function (a, B) {
          return 0 === a || 0 === B ? 0 : E[v[a] + v[B]];
        });
    },
    449: (de, A, U) => {
      var C = U(4016),
        E = U(4792);
      function v(T) {
        (this.mode = C.KANJI), (this.data = T);
      }
      (v.getBitsLength = function (a) {
        return 13 * a;
      }),
        (v.prototype.getLength = function () {
          return this.data.length;
        }),
        (v.prototype.getBitsLength = function () {
          return v.getBitsLength(this.data.length);
        }),
        (v.prototype.write = function (T) {
          var a;
          for (a = 0; a < this.data.length; a++) {
            var B = E.toSJIS(this.data[a]);
            if (B >= 33088 && B <= 40956) B -= 33088;
            else {
              if (!(B >= 57408 && B <= 60351))
                throw new Error(
                  "Invalid SJIS character: " +
                    this.data[a] +
                    "\nMake sure your charset is UTF-8"
                );
              B -= 49472;
            }
            T.put((B = 192 * ((B >>> 8) & 255) + (255 & B)), 13);
          }
        }),
        (de.exports = v);
    },
    3667: (de, A) => {
      A.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      function C(E, v, T) {
        switch (E) {
          case A.Patterns.PATTERN000:
            return (v + T) % 2 == 0;
          case A.Patterns.PATTERN001:
            return v % 2 == 0;
          case A.Patterns.PATTERN010:
            return T % 3 == 0;
          case A.Patterns.PATTERN011:
            return (v + T) % 3 == 0;
          case A.Patterns.PATTERN100:
            return (Math.floor(v / 2) + Math.floor(T / 3)) % 2 == 0;
          case A.Patterns.PATTERN101:
            return ((v * T) % 2) + ((v * T) % 3) == 0;
          case A.Patterns.PATTERN110:
            return (((v * T) % 2) + ((v * T) % 3)) % 2 == 0;
          case A.Patterns.PATTERN111:
            return (((v * T) % 3) + ((v + T) % 2)) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + E);
        }
      }
      (A.isValid = function (v) {
        return null != v && "" !== v && !isNaN(v) && v >= 0 && v <= 7;
      }),
        (A.from = function (v) {
          return A.isValid(v) ? parseInt(v, 10) : void 0;
        }),
        (A.getPenaltyN1 = function (v) {
          for (
            var T = v.size, a = 0, B = 0, O = 0, b = null, G = null, ue = 0;
            ue < T;
            ue++
          ) {
            (B = O = 0), (b = G = null);
            for (var fe = 0; fe < T; fe++) {
              var V = v.get(ue, fe);
              V === b ? B++ : (B >= 5 && (a += B - 5 + 3), (b = V), (B = 1)),
                (V = v.get(fe, ue)) === G
                  ? O++
                  : (O >= 5 && (a += O - 5 + 3), (G = V), (O = 1));
            }
            B >= 5 && (a += B - 5 + 3), O >= 5 && (a += O - 5 + 3);
          }
          return a;
        }),
        (A.getPenaltyN2 = function (v) {
          for (var T = v.size, a = 0, B = 0; B < T - 1; B++)
            for (var O = 0; O < T - 1; O++) {
              var b =
                v.get(B, O) +
                v.get(B, O + 1) +
                v.get(B + 1, O) +
                v.get(B + 1, O + 1);
              (4 === b || 0 === b) && a++;
            }
          return 3 * a;
        }),
        (A.getPenaltyN3 = function (v) {
          for (var T = v.size, a = 0, B = 0, O = 0, b = 0; b < T; b++) {
            B = O = 0;
            for (var G = 0; G < T; G++)
              (B = ((B << 1) & 2047) | v.get(b, G)),
                G >= 10 && (1488 === B || 93 === B) && a++,
                (O = ((O << 1) & 2047) | v.get(G, b)),
                G >= 10 && (1488 === O || 93 === O) && a++;
          }
          return 40 * a;
        }),
        (A.getPenaltyN4 = function (v) {
          for (var T = 0, a = v.data.length, B = 0; B < a; B++) T += v.data[B];
          return 10 * Math.abs(Math.ceil((100 * T) / a / 5) - 10);
        }),
        (A.applyMask = function (v, T) {
          for (var a = T.size, B = 0; B < a; B++)
            for (var O = 0; O < a; O++)
              T.isReserved(O, B) || T.xor(O, B, C(v, O, B));
        }),
        (A.getBestMask = function (v, T) {
          for (
            var a = Object.keys(A.Patterns).length, B = 0, O = 1 / 0, b = 0;
            b < a;
            b++
          ) {
            T(b), A.applyMask(b, v);
            var G =
              A.getPenaltyN1(v) +
              A.getPenaltyN2(v) +
              A.getPenaltyN3(v) +
              A.getPenaltyN4(v);
            A.applyMask(b, v), G < O && ((O = G), (B = b));
          }
          return B;
        });
    },
    4016: (de, A, U) => {
      var C = U(4406),
        E = U(2699);
      (A.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (A.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (A.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (A.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (A.MIXED = { bit: -1 }),
        (A.getCharCountIndicator = function (a, B) {
          if (!a.ccBits) throw new Error("Invalid mode: " + a);
          if (!C.isValid(B)) throw new Error("Invalid version: " + B);
          return B >= 1 && B < 10
            ? a.ccBits[0]
            : B < 27
            ? a.ccBits[1]
            : a.ccBits[2];
        }),
        (A.getBestModeForData = function (a) {
          return E.testNumeric(a)
            ? A.NUMERIC
            : E.testAlphanumeric(a)
            ? A.ALPHANUMERIC
            : E.testKanji(a)
            ? A.KANJI
            : A.BYTE;
        }),
        (A.toString = function (a) {
          if (a && a.id) return a.id;
          throw new Error("Invalid mode");
        }),
        (A.isValid = function (a) {
          return a && a.bit && a.ccBits;
        }),
        (A.from = function (a, B) {
          if (A.isValid(a)) return a;
          try {
            return (function v(T) {
              if ("string" != typeof T)
                throw new Error("Param is not a string");
              switch (T.toLowerCase()) {
                case "numeric":
                  return A.NUMERIC;
                case "alphanumeric":
                  return A.ALPHANUMERIC;
                case "kanji":
                  return A.KANJI;
                case "byte":
                  return A.BYTE;
                default:
                  throw new Error("Unknown mode: " + T);
              }
            })(a);
          } catch {
            return B;
          }
        });
    },
    7783: (de, A, U) => {
      var C = U(4016);
      function E(v) {
        (this.mode = C.NUMERIC), (this.data = v.toString());
      }
      (E.getBitsLength = function (T) {
        return 10 * Math.floor(T / 3) + (T % 3 ? (T % 3) * 3 + 1 : 0);
      }),
        (E.prototype.getLength = function () {
          return this.data.length;
        }),
        (E.prototype.getBitsLength = function () {
          return E.getBitsLength(this.data.length);
        }),
        (E.prototype.write = function (T) {
          var a, B, O;
          for (a = 0; a + 3 <= this.data.length; a += 3)
            (B = this.data.substr(a, 3)), (O = parseInt(B, 10)), T.put(O, 10);
          var b = this.data.length - a;
          b > 0 &&
            ((B = this.data.substr(a)),
            (O = parseInt(B, 10)),
            T.put(O, 3 * b + 1));
        }),
        (de.exports = E);
    },
    1106: (de, A, U) => {
      var C = U(1708),
        E = U(5339);
      (A.mul = function (T, a) {
        for (var B = C.alloc(T.length + a.length - 1), O = 0; O < T.length; O++)
          for (var b = 0; b < a.length; b++) B[O + b] ^= E.mul(T[O], a[b]);
        return B;
      }),
        (A.mod = function (T, a) {
          for (var B = C.from(T); B.length - a.length >= 0; ) {
            for (var O = B[0], b = 0; b < a.length; b++) B[b] ^= E.mul(a[b], O);
            for (var G = 0; G < B.length && 0 === B[G]; ) G++;
            B = B.slice(G);
          }
          return B;
        }),
        (A.generateECPolynomial = function (T) {
          for (var a = C.from([1]), B = 0; B < T; B++)
            a = A.mul(a, [1, E.exp(B)]);
          return a;
        });
    },
    1465: (de, A, U) => {
      var C = U(1708),
        E = U(4792),
        v = U(2259),
        T = U(2118),
        a = U(4425),
        B = U(6221),
        O = U(3114),
        b = U(3667),
        G = U(4655),
        ue = U(2636),
        fe = U(2088),
        V = U(7078),
        ee = U(4016),
        X = U(2033),
        le = U(6425);
      function S(te, y, e) {
        var d,
          p,
          o = te.size,
          l = V.getEncodedBits(y, e);
        for (d = 0; d < 15; d++)
          te.set(
            d < 6 ? d : d < 8 ? d + 1 : o - 15 + d,
            8,
            (p = 1 == ((l >> d) & 1)),
            !0
          ),
            te.set(
              8,
              d < 8 ? o - d - 1 : d < 9 ? 15 - d - 1 + 1 : 15 - d - 1,
              p,
              !0
            );
        te.set(o - 8, 8, 1, !0);
      }
      function Q(te, y, e, o) {
        var l;
        if (le(te)) l = X.fromArray(te);
        else {
          if ("string" != typeof te) throw new Error("Invalid data");
          var d = y;
          if (!d) {
            var p = X.rawSplit(te);
            d = fe.getBestVersionForData(p, e);
          }
          l = X.fromString(te, d || 40);
        }
        var M = fe.getBestVersionForData(l, e);
        if (!M)
          throw new Error(
            "The amount of data is too big to be stored in a QR Code"
          );
        if (y) {
          if (y < M)
            throw new Error(
              "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                M +
                ".\n"
            );
        } else y = M;
        var I = (function q(te, y, e) {
            var o = new T();
            e.forEach(function (_) {
              o.put(_.mode.bit, 4),
                o.put(_.getLength(), ee.getCharCountIndicator(_.mode, te)),
                _.write(o);
            });
            var p =
              8 *
              (E.getSymbolTotalCodewords(te) - G.getTotalCodewordsCount(te, y));
            for (
              o.getLengthInBits() + 4 <= p && o.put(0, 4);
              o.getLengthInBits() % 8 != 0;

            )
              o.putBit(0);
            for (var M = (p - o.getLengthInBits()) / 8, I = 0; I < M; I++)
              o.put(I % 2 ? 17 : 236, 8);
            return (function ne(te, y, e) {
              for (
                var o = E.getSymbolTotalCodewords(y),
                  d = o - G.getTotalCodewordsCount(y, e),
                  p = G.getBlocksCount(y, e),
                  I = p - (o % p),
                  _ = Math.floor(o / p),
                  r = Math.floor(d / p),
                  w = r + 1,
                  oe = _ - r,
                  j = new ue(oe),
                  J = 0,
                  ae = new Array(p),
                  _e = new Array(p),
                  ve = 0,
                  nt = C.from(te.buffer),
                  be = 0;
                be < p;
                be++
              ) {
                var Ee = be < I ? r : w;
                (ae[be] = nt.slice(J, J + Ee)),
                  (_e[be] = j.encode(ae[be])),
                  (J += Ee),
                  (ve = Math.max(ve, Ee));
              }
              var ye,
                Be,
                st = C.alloc(o),
                Ie = 0;
              for (ye = 0; ye < ve; ye++)
                for (Be = 0; Be < p; Be++)
                  ye < ae[Be].length && (st[Ie++] = ae[Be][ye]);
              for (ye = 0; ye < oe; ye++)
                for (Be = 0; Be < p; Be++) st[Ie++] = _e[Be][ye];
              return st;
            })(o, te, y);
          })(y, e, l),
          _ = E.getSymbolSize(y),
          r = new a(_);
        return (
          (function D(te, y) {
            for (
              var e = te.size, o = O.getPositions(y), l = 0;
              l < o.length;
              l++
            )
              for (var d = o[l][0], p = o[l][1], M = -1; M <= 7; M++)
                if (!(d + M <= -1 || e <= d + M))
                  for (var I = -1; I <= 7; I++)
                    p + I <= -1 ||
                      e <= p + I ||
                      te.set(
                        d + M,
                        p + I,
                        (M >= 0 && M <= 6 && (0 === I || 6 === I)) ||
                          (I >= 0 && I <= 6 && (0 === M || 6 === M)) ||
                          (M >= 2 && M <= 4 && I >= 2 && I <= 4),
                        !0
                      );
          })(r, y),
          (function P(te) {
            for (var y = te.size, e = 8; e < y - 8; e++) {
              var o = e % 2 == 0;
              te.set(e, 6, o, !0), te.set(6, e, o, !0);
            }
          })(r),
          (function N(te, y) {
            for (var e = B.getPositions(y), o = 0; o < e.length; o++)
              for (var l = e[o][0], d = e[o][1], p = -2; p <= 2; p++)
                for (var M = -2; M <= 2; M++)
                  te.set(
                    l + p,
                    d + M,
                    -2 === p ||
                      2 === p ||
                      -2 === M ||
                      2 === M ||
                      (0 === p && 0 === M),
                    !0
                  );
          })(r, y),
          S(r, e, 0),
          y >= 7 &&
            (function x(te, y) {
              for (
                var l, d, p, e = te.size, o = fe.getEncodedBits(y), M = 0;
                M < 18;
                M++
              )
                (l = Math.floor(M / 3)),
                  te.set(
                    l,
                    (d = (M % 3) + e - 8 - 3),
                    (p = 1 == ((o >> M) & 1)),
                    !0
                  ),
                  te.set(d, l, p, !0);
            })(r, y),
          (function W(te, y) {
            for (
              var e = te.size, o = -1, l = e - 1, d = 7, p = 0, M = e - 1;
              M > 0;
              M -= 2
            )
              for (6 === M && M--; ; ) {
                for (var I = 0; I < 2; I++)
                  if (!te.isReserved(l, M - I)) {
                    var _ = !1;
                    p < y.length && (_ = 1 == ((y[p] >>> d) & 1)),
                      te.set(l, M - I, _),
                      -1 == --d && (p++, (d = 7));
                  }
                if ((l += o) < 0 || e <= l) {
                  (l -= o), (o = -o);
                  break;
                }
              }
          })(r, I),
          isNaN(o) && (o = b.getBestMask(r, S.bind(null, r, e))),
          b.applyMask(o, r),
          S(r, e, o),
          {
            modules: r,
            version: y,
            errorCorrectionLevel: e,
            maskPattern: o,
            segments: l,
          }
        );
      }
      A.create = function (y, e) {
        if (typeof y > "u" || "" === y) throw new Error("No input text");
        var l,
          d,
          o = v.M;
        return (
          typeof e < "u" &&
            ((o = v.from(e.errorCorrectionLevel, v.M)),
            (l = fe.from(e.version)),
            (d = b.from(e.maskPattern)),
            e.toSJISFunc && E.setToSJISFunction(e.toSJISFunc)),
          Q(y, l, o, d)
        );
      };
    },
    2636: (de, A, U) => {
      var C = U(1708),
        E = U(1106),
        v = U(9024).lW;
      function T(a) {
        (this.genPoly = void 0),
          (this.degree = a),
          this.degree && this.initialize(this.degree);
      }
      (T.prototype.initialize = function (B) {
        (this.degree = B), (this.genPoly = E.generateECPolynomial(this.degree));
      }),
        (T.prototype.encode = function (B) {
          if (!this.genPoly) throw new Error("Encoder not initialized");
          var O = C.alloc(this.degree),
            b = v.concat([B, O], B.length + this.degree),
            G = E.mod(b, this.genPoly),
            ue = this.degree - G.length;
          if (ue > 0) {
            var fe = C.alloc(this.degree);
            return G.copy(fe, ue), fe;
          }
          return G;
        }),
        (de.exports = T);
    },
    2699: (de, A) => {
      var U = "[0-9]+",
        E =
          "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
        v =
          "(?:(?![A-Z0-9 $%*+\\-./:]|" +
          (E = E.replace(/u/g, "\\u")) +
          ")(?:.|[\r\n]))+";
      (A.KANJI = new RegExp(E, "g")),
        (A.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (A.BYTE = new RegExp(v, "g")),
        (A.NUMERIC = new RegExp(U, "g")),
        (A.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
      var T = new RegExp("^" + E + "$"),
        a = new RegExp("^" + U + "$"),
        B = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (A.testKanji = function (b) {
        return T.test(b);
      }),
        (A.testNumeric = function (b) {
          return a.test(b);
        }),
        (A.testAlphanumeric = function (b) {
          return B.test(b);
        });
    },
    2033: (de, A, U) => {
      var C = U(4016),
        E = U(7783),
        v = U(2424),
        T = U(5663),
        a = U(449),
        B = U(2699),
        O = U(4792),
        b = U(4901);
      function G(P) {
        return unescape(encodeURIComponent(P)).length;
      }
      function ue(P, N, x) {
        for (var W, S = []; null !== (W = P.exec(x)); )
          S.push({ data: W[0], index: W.index, mode: N, length: W[0].length });
        return S;
      }
      function fe(P) {
        var S,
          W,
          N = ue(B.NUMERIC, C.NUMERIC, P),
          x = ue(B.ALPHANUMERIC, C.ALPHANUMERIC, P);
        return (
          O.isKanjiModeEnabled()
            ? ((S = ue(B.BYTE, C.BYTE, P)), (W = ue(B.KANJI, C.KANJI, P)))
            : ((S = ue(B.BYTE_KANJI, C.BYTE, P)), (W = [])),
          N.concat(x, S, W)
            .sort(function (ne, Q) {
              return ne.index - Q.index;
            })
            .map(function (ne) {
              return { data: ne.data, mode: ne.mode, length: ne.length };
            })
        );
      }
      function V(P, N) {
        switch (N) {
          case C.NUMERIC:
            return E.getBitsLength(P);
          case C.ALPHANUMERIC:
            return v.getBitsLength(P);
          case C.KANJI:
            return a.getBitsLength(P);
          case C.BYTE:
            return T.getBitsLength(P);
        }
      }
      function D(P, N) {
        var x,
          S = C.getBestModeForData(P);
        if ((x = C.from(N, S)) !== C.BYTE && x.bit < S.bit)
          throw new Error(
            '"' +
              P +
              '" cannot be encoded with mode ' +
              C.toString(x) +
              ".\n Suggested mode is: " +
              C.toString(S)
          );
        switch ((x === C.KANJI && !O.isKanjiModeEnabled() && (x = C.BYTE), x)) {
          case C.NUMERIC:
            return new E(P);
          case C.ALPHANUMERIC:
            return new v(P);
          case C.KANJI:
            return new a(P);
          case C.BYTE:
            return new T(P);
        }
      }
      (A.fromArray = function (N) {
        return N.reduce(function (x, S) {
          return (
            "string" == typeof S
              ? x.push(D(S, null))
              : S.data && x.push(D(S.data, S.mode)),
            x
          );
        }, []);
      }),
        (A.fromString = function (N, x) {
          for (
            var W = (function X(P) {
                for (var N = [], x = 0; x < P.length; x++) {
                  var S = P[x];
                  switch (S.mode) {
                    case C.NUMERIC:
                      N.push([
                        S,
                        {
                          data: S.data,
                          mode: C.ALPHANUMERIC,
                          length: S.length,
                        },
                        { data: S.data, mode: C.BYTE, length: S.length },
                      ]);
                      break;
                    case C.ALPHANUMERIC:
                      N.push([
                        S,
                        { data: S.data, mode: C.BYTE, length: S.length },
                      ]);
                      break;
                    case C.KANJI:
                      N.push([
                        S,
                        { data: S.data, mode: C.BYTE, length: G(S.data) },
                      ]);
                      break;
                    case C.BYTE:
                      N.push([
                        { data: S.data, mode: C.BYTE, length: G(S.data) },
                      ]);
                  }
                }
                return N;
              })(fe(N, O.isKanjiModeEnabled())),
              q = (function le(P, N) {
                for (
                  var x = {}, S = { start: {} }, W = ["start"], q = 0;
                  q < P.length;
                  q++
                ) {
                  for (var ne = P[q], Q = [], te = 0; te < ne.length; te++) {
                    var y = ne[te],
                      e = "" + q + te;
                    Q.push(e), (x[e] = { node: y, lastCount: 0 }), (S[e] = {});
                    for (var o = 0; o < W.length; o++) {
                      var l = W[o];
                      x[l] && x[l].node.mode === y.mode
                        ? ((S[l][e] =
                            V(x[l].lastCount + y.length, y.mode) -
                            V(x[l].lastCount, y.mode)),
                          (x[l].lastCount += y.length))
                        : (x[l] && (x[l].lastCount = y.length),
                          (S[l][e] =
                            V(y.length, y.mode) +
                            4 +
                            C.getCharCountIndicator(y.mode, N)));
                    }
                  }
                  W = Q;
                }
                for (o = 0; o < W.length; o++) S[W[o]].end = 0;
                return { map: S, table: x };
              })(W, x),
              ne = b.find_path(q.map, "start", "end"),
              Q = [],
              te = 1;
            te < ne.length - 1;
            te++
          )
            Q.push(q.table[ne[te]].node);
          return A.fromArray(
            (function ee(P) {
              return P.reduce(function (N, x) {
                var S = N.length - 1 >= 0 ? N[N.length - 1] : null;
                return S && S.mode === x.mode
                  ? ((N[N.length - 1].data += x.data), N)
                  : (N.push(x), N);
              }, []);
            })(Q)
          );
        }),
        (A.rawSplit = function (N) {
          return A.fromArray(fe(N, O.isKanjiModeEnabled()));
        });
    },
    4792: (de, A) => {
      var U,
        C = [
          0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
          655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706,
          1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196,
          3362, 3532, 3706,
        ];
      (A.getSymbolSize = function (v) {
        if (!v) throw new Error('"version" cannot be null or undefined');
        if (v < 1 || v > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return 4 * v + 17;
      }),
        (A.getSymbolTotalCodewords = function (v) {
          return C[v];
        }),
        (A.getBCHDigit = function (E) {
          for (var v = 0; 0 !== E; ) v++, (E >>>= 1);
          return v;
        }),
        (A.setToSJISFunction = function (v) {
          if ("function" != typeof v)
            throw new Error('"toSJISFunc" is not a valid function.');
          U = v;
        }),
        (A.isKanjiModeEnabled = function () {
          return typeof U < "u";
        }),
        (A.toSJIS = function (v) {
          return U(v);
        });
    },
    4406: (de, A) => {
      A.isValid = function (C) {
        return !isNaN(C) && C >= 1 && C <= 40;
      };
    },
    2088: (de, A, U) => {
      var C = U(4792),
        E = U(4655),
        v = U(2259),
        T = U(4016),
        a = U(4406),
        B = U(6425),
        b = C.getBCHDigit(7973);
      function ue(ee, X) {
        return T.getCharCountIndicator(ee, X) + 4;
      }
      function fe(ee, X) {
        var le = 0;
        return (
          ee.forEach(function (D) {
            var P = ue(D.mode, X);
            le += P + D.getBitsLength();
          }),
          le
        );
      }
      (A.from = function (X, le) {
        return a.isValid(X) ? parseInt(X, 10) : le;
      }),
        (A.getCapacity = function (X, le, D) {
          if (!a.isValid(X)) throw new Error("Invalid QR Code version");
          typeof D > "u" && (D = T.BYTE);
          var x =
            8 *
            (C.getSymbolTotalCodewords(X) - E.getTotalCodewordsCount(X, le));
          if (D === T.MIXED) return x;
          var S = x - ue(D, X);
          switch (D) {
            case T.NUMERIC:
              return Math.floor((S / 10) * 3);
            case T.ALPHANUMERIC:
              return Math.floor((S / 11) * 2);
            case T.KANJI:
              return Math.floor(S / 13);
            default:
              return Math.floor(S / 8);
          }
        }),
        (A.getBestVersionForData = function (X, le) {
          var D,
            P = v.from(le, v.M);
          if (B(X)) {
            if (X.length > 1)
              return (function V(ee, X) {
                for (var le = 1; le <= 40; le++)
                  if (fe(ee, le) <= A.getCapacity(le, X, T.MIXED)) return le;
              })(X, P);
            if (0 === X.length) return 1;
            D = X[0];
          } else D = X;
          return (function G(ee, X, le) {
            for (var D = 1; D <= 40; D++)
              if (X <= A.getCapacity(D, le, ee)) return D;
          })(D.mode, D.getLength(), P);
        }),
        (A.getEncodedBits = function (X) {
          if (!a.isValid(X) || X < 7)
            throw new Error("Invalid QR Code version");
          for (var le = X << 12; C.getBCHDigit(le) - b >= 0; )
            le ^= 7973 << (C.getBCHDigit(le) - b);
          return (X << 12) | le;
        });
    },
    3210: (de, A, U) => {
      var C = U(6355);
      (A.render = function (a, B, O) {
        var b = O,
          G = B;
        typeof b > "u" && (!B || !B.getContext) && ((b = B), (B = void 0)),
          B ||
            (G = (function v() {
              try {
                return document.createElement("canvas");
              } catch {
                throw new Error("You need to specify a canvas element");
              }
            })()),
          (b = C.getOptions(b));
        var ue = C.getImageWidth(a.modules.size, b),
          fe = G.getContext("2d"),
          V = fe.createImageData(ue, ue);
        return (
          C.qrToImageData(V.data, a, b),
          (function E(T, a, B) {
            T.clearRect(0, 0, a.width, a.height),
              a.style || (a.style = {}),
              (a.height = B),
              (a.width = B),
              (a.style.height = B + "px"),
              (a.style.width = B + "px");
          })(fe, G, ue),
          fe.putImageData(V, 0, 0),
          G
        );
      }),
        (A.renderToDataURL = function (a, B, O) {
          var b = O;
          return (
            typeof b > "u" && (!B || !B.getContext) && ((b = B), (B = void 0)),
            b || (b = {}),
            A.render(a, B, b).toDataURL(
              b.type || "image/png",
              (b.rendererOpts || {}).quality
            )
          );
        });
    },
    2334: (de, A, U) => {
      var C = U(6355);
      function E(a, B) {
        var O = a.a / 255,
          b = B + '="' + a.hex + '"';
        return O < 1
          ? b + " " + B + '-opacity="' + O.toFixed(2).slice(1) + '"'
          : b;
      }
      function v(a, B, O) {
        var b = a + B;
        return typeof O < "u" && (b += " " + O), b;
      }
      A.render = function (B, O, b) {
        var G = C.getOptions(O),
          ue = B.modules.size,
          fe = B.modules.data,
          V = ue + 2 * G.margin,
          ee = G.color.light.a
            ? "<path " +
              E(G.color.light, "fill") +
              ' d="M0 0h' +
              V +
              "v" +
              V +
              'H0z"/>'
            : "",
          X =
            "<path " +
            E(G.color.dark, "stroke") +
            ' d="' +
            (function T(a, B, O) {
              for (
                var b = "", G = 0, ue = !1, fe = 0, V = 0;
                V < a.length;
                V++
              ) {
                var ee = Math.floor(V % B),
                  X = Math.floor(V / B);
                !ee && !ue && (ue = !0),
                  a[V]
                    ? (fe++,
                      (V > 0 && ee > 0 && a[V - 1]) ||
                        ((b += ue ? v("M", ee + O, 0.5 + X + O) : v("m", G, 0)),
                        (G = 0),
                        (ue = !1)),
                      (ee + 1 < B && a[V + 1]) || ((b += v("h", fe)), (fe = 0)))
                    : G++;
              }
              return b;
            })(fe, ue, G.margin) +
            '"/>',
          P =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (G.width
              ? 'width="' + G.width + '" height="' + G.width + '" '
              : "") +
            'viewBox="0 0 ' +
            V +
            " " +
            V +
            '" shape-rendering="crispEdges">' +
            ee +
            X +
            "</svg>\n";
        return "function" == typeof b && b(null, P), P;
      };
    },
    6355: (de, A) => {
      function U(C) {
        if (("number" == typeof C && (C = C.toString()), "string" != typeof C))
          throw new Error("Color should be defined as hex string");
        var E = C.slice().replace("#", "").split("");
        if (E.length < 3 || 5 === E.length || E.length > 8)
          throw new Error("Invalid hex color: " + C);
        (3 === E.length || 4 === E.length) &&
          (E = Array.prototype.concat.apply(
            [],
            E.map(function (T) {
              return [T, T];
            })
          )),
          6 === E.length && E.push("F", "F");
        var v = parseInt(E.join(""), 16);
        return {
          r: (v >> 24) & 255,
          g: (v >> 16) & 255,
          b: (v >> 8) & 255,
          a: 255 & v,
          hex: "#" + E.slice(0, 6).join(""),
        };
      }
      (A.getOptions = function (E) {
        E || (E = {}), E.color || (E.color = {});
        var T = E.width && E.width >= 21 ? E.width : void 0;
        return {
          width: T,
          scale: T ? 4 : E.scale || 4,
          margin:
            typeof E.margin > "u" || null === E.margin || E.margin < 0
              ? 4
              : E.margin,
          color: {
            dark: U(E.color.dark || "#000000ff"),
            light: U(E.color.light || "#ffffffff"),
          },
          type: E.type,
          rendererOpts: E.rendererOpts || {},
        };
      }),
        (A.getScale = function (E, v) {
          return v.width && v.width >= E + 2 * v.margin
            ? v.width / (E + 2 * v.margin)
            : v.scale;
        }),
        (A.getImageWidth = function (E, v) {
          var T = A.getScale(E, v);
          return Math.floor((E + 2 * v.margin) * T);
        }),
        (A.qrToImageData = function (E, v, T) {
          for (
            var a = v.modules.size,
              B = v.modules.data,
              O = A.getScale(a, T),
              b = Math.floor((a + 2 * T.margin) * O),
              G = T.margin * O,
              ue = [T.color.light, T.color.dark],
              fe = 0;
            fe < b;
            fe++
          )
            for (var V = 0; V < b; V++) {
              var ee = 4 * (fe * b + V),
                X = T.color.light;
              fe >= G &&
                V >= G &&
                fe < b - G &&
                V < b - G &&
                (X =
                  ue[
                    B[Math.floor((fe - G) / O) * a + Math.floor((V - G) / O)]
                      ? 1
                      : 0
                  ]),
                (E[ee++] = X.r),
                (E[ee++] = X.g),
                (E[ee++] = X.b),
                (E[ee] = X.a);
            }
        });
    },
    1708: (de, A, U) => {
      "use strict";
      var C = U(6425),
        v = (T.TYPED_ARRAY_SUPPORT = (function E() {
          try {
            var N = new Uint8Array(1);
            return (
              (N.__proto__ = {
                __proto__: Uint8Array.prototype,
                foo: function () {
                  return 42;
                },
              }),
              42 === N.foo()
            );
          } catch {
            return !1;
          }
        })())
          ? 2147483647
          : 1073741823;
      function T(N, x, S) {
        return T.TYPED_ARRAY_SUPPORT || this instanceof T
          ? "number" == typeof N
            ? b(this, N)
            : (function P(N, x, S, W) {
                if ("number" == typeof x)
                  throw new TypeError('"value" argument must not be a number');
                return typeof ArrayBuffer < "u" && x instanceof ArrayBuffer
                  ? (function fe(N, x, S, W) {
                      if (S < 0 || x.byteLength < S)
                        throw new RangeError("'offset' is out of bounds");
                      if (x.byteLength < S + (W || 0))
                        throw new RangeError("'length' is out of bounds");
                      var q;
                      return (
                        (q =
                          void 0 === S && void 0 === W
                            ? new Uint8Array(x)
                            : void 0 === W
                            ? new Uint8Array(x, S)
                            : new Uint8Array(x, S, W)),
                        T.TYPED_ARRAY_SUPPORT
                          ? (q.__proto__ = T.prototype)
                          : (q = ue(N, q)),
                        q
                      );
                    })(N, x, S, W)
                  : "string" == typeof x
                  ? (function G(N, x) {
                      var S = 0 | X(x),
                        W = O(N, S),
                        q = W.write(x);
                      return q !== S && (W = W.slice(0, q)), W;
                    })(N, x)
                  : (function V(N, x) {
                      if (T.isBuffer(x)) {
                        var S = 0 | a(x.length),
                          W = O(N, S);
                        return 0 === W.length || x.copy(W, 0, 0, S), W;
                      }
                      if (x) {
                        if (
                          (typeof ArrayBuffer < "u" &&
                            x.buffer instanceof ArrayBuffer) ||
                          "length" in x
                        )
                          return "number" != typeof x.length ||
                            (function B(N) {
                              return N != N;
                            })(x.length)
                            ? O(N, 0)
                            : ue(N, x);
                        if ("Buffer" === x.type && Array.isArray(x.data))
                          return ue(N, x.data);
                      }
                      throw new TypeError(
                        "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                      );
                    })(N, x);
              })(this, N, x, S)
          : new T(N, x, S);
      }
      function a(N) {
        if (N >= v)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              v.toString(16) +
              " bytes"
          );
        return 0 | N;
      }
      function O(N, x) {
        var S;
        return (
          T.TYPED_ARRAY_SUPPORT
            ? ((S = new Uint8Array(x)).__proto__ = T.prototype)
            : (null === (S = N) && (S = new T(x)), (S.length = x)),
          S
        );
      }
      function b(N, x) {
        var S = O(N, x < 0 ? 0 : 0 | a(x));
        if (!T.TYPED_ARRAY_SUPPORT) for (var W = 0; W < x; ++W) S[W] = 0;
        return S;
      }
      function ue(N, x) {
        for (
          var S = x.length < 0 ? 0 : 0 | a(x.length), W = O(N, S), q = 0;
          q < S;
          q += 1
        )
          W[q] = 255 & x[q];
        return W;
      }
      function ee(N, x) {
        x = x || 1 / 0;
        for (var S, W = N.length, q = null, ne = [], Q = 0; Q < W; ++Q) {
          if ((S = N.charCodeAt(Q)) > 55295 && S < 57344) {
            if (!q) {
              if (S > 56319) {
                (x -= 3) > -1 && ne.push(239, 191, 189);
                continue;
              }
              if (Q + 1 === W) {
                (x -= 3) > -1 && ne.push(239, 191, 189);
                continue;
              }
              q = S;
              continue;
            }
            if (S < 56320) {
              (x -= 3) > -1 && ne.push(239, 191, 189), (q = S);
              continue;
            }
            S = 65536 + (((q - 55296) << 10) | (S - 56320));
          } else q && (x -= 3) > -1 && ne.push(239, 191, 189);
          if (((q = null), S < 128)) {
            if ((x -= 1) < 0) break;
            ne.push(S);
          } else if (S < 2048) {
            if ((x -= 2) < 0) break;
            ne.push((S >> 6) | 192, (63 & S) | 128);
          } else if (S < 65536) {
            if ((x -= 3) < 0) break;
            ne.push((S >> 12) | 224, ((S >> 6) & 63) | 128, (63 & S) | 128);
          } else {
            if (!(S < 1114112)) throw new Error("Invalid code point");
            if ((x -= 4) < 0) break;
            ne.push(
              (S >> 18) | 240,
              ((S >> 12) & 63) | 128,
              ((S >> 6) & 63) | 128,
              (63 & S) | 128
            );
          }
        }
        return ne;
      }
      function X(N) {
        return T.isBuffer(N)
          ? N.length
          : typeof ArrayBuffer < "u" &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(N) || N instanceof ArrayBuffer)
          ? N.byteLength
          : ("string" != typeof N && (N = "" + N),
            0 === N.length ? 0 : ee(N).length);
      }
      T.TYPED_ARRAY_SUPPORT &&
        ((T.prototype.__proto__ = Uint8Array.prototype),
        (T.__proto__ = Uint8Array),
        typeof Symbol < "u" &&
          Symbol.species &&
          T[Symbol.species] === T &&
          Object.defineProperty(T, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1,
          })),
        (T.prototype.write = function (x, S, W) {
          void 0 === S || (void 0 === W && "string" == typeof S)
            ? ((W = this.length), (S = 0))
            : isFinite(S) && ((S |= 0), isFinite(W) ? (W |= 0) : (W = void 0));
          var q = this.length - S;
          if (
            ((void 0 === W || W > q) && (W = q),
            (x.length > 0 && (W < 0 || S < 0)) || S > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          return (function D(N, x, S, W) {
            return (function le(N, x, S, W) {
              for (
                var q = 0;
                q < W && !(q + S >= x.length || q >= N.length);
                ++q
              )
                x[q + S] = N[q];
              return q;
            })(ee(x, N.length - S), N, S, W);
          })(this, x, S, W);
        }),
        (T.prototype.slice = function (x, S) {
          var q,
            W = this.length;
          if (
            ((x = ~~x) < 0 ? (x += W) < 0 && (x = 0) : x > W && (x = W),
            (S = void 0 === S ? W : ~~S) < 0
              ? (S += W) < 0 && (S = 0)
              : S > W && (S = W),
            S < x && (S = x),
            T.TYPED_ARRAY_SUPPORT)
          )
            (q = this.subarray(x, S)).__proto__ = T.prototype;
          else {
            var ne = S - x;
            q = new T(ne, void 0);
            for (var Q = 0; Q < ne; ++Q) q[Q] = this[Q + x];
          }
          return q;
        }),
        (T.prototype.copy = function (x, S, W, q) {
          if (
            (W || (W = 0),
            !q && 0 !== q && (q = this.length),
            S >= x.length && (S = x.length),
            S || (S = 0),
            q > 0 && q < W && (q = W),
            q === W || 0 === x.length || 0 === this.length)
          )
            return 0;
          if (S < 0) throw new RangeError("targetStart out of bounds");
          if (W < 0 || W >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (q < 0) throw new RangeError("sourceEnd out of bounds");
          q > this.length && (q = this.length),
            x.length - S < q - W && (q = x.length - S + W);
          var Q,
            ne = q - W;
          if (this === x && W < S && S < q)
            for (Q = ne - 1; Q >= 0; --Q) x[Q + S] = this[Q + W];
          else if (ne < 1e3 || !T.TYPED_ARRAY_SUPPORT)
            for (Q = 0; Q < ne; ++Q) x[Q + S] = this[Q + W];
          else Uint8Array.prototype.set.call(x, this.subarray(W, W + ne), S);
          return ne;
        }),
        (T.prototype.fill = function (x, S, W) {
          if ("string" == typeof x) {
            if (
              ("string" == typeof S
                ? ((S = 0), (W = this.length))
                : "string" == typeof W && (W = this.length),
              1 === x.length)
            ) {
              var q = x.charCodeAt(0);
              q < 256 && (x = q);
            }
          } else "number" == typeof x && (x &= 255);
          if (S < 0 || this.length < S || this.length < W)
            throw new RangeError("Out of range index");
          if (W <= S) return this;
          var ne;
          if (
            ((S >>>= 0),
            (W = void 0 === W ? this.length : W >>> 0),
            x || (x = 0),
            "number" == typeof x)
          )
            for (ne = S; ne < W; ++ne) this[ne] = x;
          else {
            var Q = T.isBuffer(x) ? x : new T(x),
              te = Q.length;
            for (ne = 0; ne < W - S; ++ne) this[ne + S] = Q[ne % te];
          }
          return this;
        }),
        (T.concat = function (x, S) {
          if (!C(x))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === x.length) return O(null, 0);
          var W;
          if (void 0 === S)
            for (S = 0, W = 0; W < x.length; ++W) S += x[W].length;
          var q = b(null, S),
            ne = 0;
          for (W = 0; W < x.length; ++W) {
            var Q = x[W];
            if (!T.isBuffer(Q))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            Q.copy(q, ne), (ne += Q.length);
          }
          return q;
        }),
        (T.byteLength = X),
        (T.prototype._isBuffer = !0),
        (T.isBuffer = function (x) {
          return !(null == x || !x._isBuffer);
        }),
        (de.exports.alloc = function (N) {
          var x = new T(N);
          return x.fill(0), x;
        }),
        (de.exports.from = function (N) {
          return new T(N);
        });
    },
    9024: (de, A, U) => {
      "use strict";
      var E = U(5343),
        v = U(8461),
        T =
          "function" == typeof Symbol && "function" == typeof Symbol.for
            ? Symbol.for("nodejs.util.inspect.custom")
            : null;
      (A.lW = b), (A.h2 = 50);
      var a = 2147483647;
      function O(u) {
        if (u > a)
          throw new RangeError(
            'The value "' + u + '" is invalid for option "size"'
          );
        var n = new Uint8Array(u);
        return Object.setPrototypeOf(n, b.prototype), n;
      }
      function b(u, n, i) {
        if ("number" == typeof u) {
          if ("string" == typeof n)
            throw new TypeError(
              'The "string" argument must be of type string. Received type number'
            );
          return V(u);
        }
        return G(u, n, i);
      }
      function G(u, n, i) {
        if ("string" == typeof u)
          return (function ee(u, n) {
            if (
              (("string" != typeof n || "" === n) && (n = "utf8"),
              !b.isEncoding(n))
            )
              throw new TypeError("Unknown encoding: " + n);
            var i = 0 | S(u, n),
              g = O(i),
              R = g.write(u, n);
            return R !== i && (g = g.slice(0, R)), g;
          })(u, n);
        if (ArrayBuffer.isView(u))
          return (function le(u) {
            if (Se(u, Uint8Array)) {
              var n = new Uint8Array(u);
              return D(n.buffer, n.byteOffset, n.byteLength);
            }
            return X(u);
          })(u);
        if (null == u)
          throw new TypeError(
            "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
              typeof u
          );
        if (
          Se(u, ArrayBuffer) ||
          (u && Se(u.buffer, ArrayBuffer)) ||
          (typeof SharedArrayBuffer < "u" &&
            (Se(u, SharedArrayBuffer) ||
              (u && Se(u.buffer, SharedArrayBuffer))))
        )
          return D(u, n, i);
        if ("number" == typeof u)
          throw new TypeError(
            'The "value" argument must not be of type number. Received type number'
          );
        var g = u.valueOf && u.valueOf();
        if (null != g && g !== u) return b.from(g, n, i);
        var R = (function P(u) {
          if (b.isBuffer(u)) {
            var n = 0 | N(u.length),
              i = O(n);
            return 0 === i.length || u.copy(i, 0, 0, n), i;
          }
          return void 0 !== u.length
            ? "number" != typeof u.length || Te(u.length)
              ? O(0)
              : X(u)
            : "Buffer" === u.type && Array.isArray(u.data)
            ? X(u.data)
            : void 0;
        })(u);
        if (R) return R;
        if (
          typeof Symbol < "u" &&
          null != Symbol.toPrimitive &&
          "function" == typeof u[Symbol.toPrimitive]
        )
          return b.from(u[Symbol.toPrimitive]("string"), n, i);
        throw new TypeError(
          "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
            typeof u
        );
      }
      function ue(u) {
        if ("number" != typeof u)
          throw new TypeError('"size" argument must be of type number');
        if (u < 0)
          throw new RangeError(
            'The value "' + u + '" is invalid for option "size"'
          );
      }
      function V(u) {
        return ue(u), O(u < 0 ? 0 : 0 | N(u));
      }
      function X(u) {
        for (
          var n = u.length < 0 ? 0 : 0 | N(u.length), i = O(n), g = 0;
          g < n;
          g += 1
        )
          i[g] = 255 & u[g];
        return i;
      }
      function D(u, n, i) {
        if (n < 0 || u.byteLength < n)
          throw new RangeError('"offset" is outside of buffer bounds');
        if (u.byteLength < n + (i || 0))
          throw new RangeError('"length" is outside of buffer bounds');
        var g;
        return (
          (g =
            void 0 === n && void 0 === i
              ? new Uint8Array(u)
              : void 0 === i
              ? new Uint8Array(u, n)
              : new Uint8Array(u, n, i)),
          Object.setPrototypeOf(g, b.prototype),
          g
        );
      }
      function N(u) {
        if (u >= a)
          throw new RangeError(
            "Attempt to allocate Buffer larger than maximum size: 0x" +
              a.toString(16) +
              " bytes"
          );
        return 0 | u;
      }
      function S(u, n) {
        if (b.isBuffer(u)) return u.length;
        if (ArrayBuffer.isView(u) || Se(u, ArrayBuffer)) return u.byteLength;
        if ("string" != typeof u)
          throw new TypeError(
            'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
              typeof u
          );
        var i = u.length,
          g = arguments.length > 2 && !0 === arguments[2];
        if (!g && 0 === i) return 0;
        for (var R = !1; ; )
          switch (n) {
            case "ascii":
            case "latin1":
            case "binary":
              return i;
            case "utf8":
            case "utf-8":
              return Ee(u).length;
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return 2 * i;
            case "hex":
              return i >>> 1;
            case "base64":
              return ye(u).length;
            default:
              if (R) return g ? -1 : Ee(u).length;
              (n = ("" + n).toLowerCase()), (R = !0);
          }
      }
      function W(u, n, i) {
        var g = !1;
        if (
          ((void 0 === n || n < 0) && (n = 0),
          n > this.length ||
            ((void 0 === i || i > this.length) && (i = this.length), i <= 0) ||
            (i >>>= 0) <= (n >>>= 0))
        )
          return "";
        for (u || (u = "utf8"); ; )
          switch (u) {
            case "hex":
              return w(this, n, i);
            case "utf8":
            case "utf-8":
              return p(this, n, i);
            case "ascii":
              return _(this, n, i);
            case "latin1":
            case "binary":
              return r(this, n, i);
            case "base64":
              return d(this, n, i);
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return oe(this, n, i);
            default:
              if (g) throw new TypeError("Unknown encoding: " + u);
              (u = (u + "").toLowerCase()), (g = !0);
          }
      }
      function q(u, n, i) {
        var g = u[n];
        (u[n] = u[i]), (u[i] = g);
      }
      function ne(u, n, i, g, R) {
        if (0 === u.length) return -1;
        if (
          ("string" == typeof i
            ? ((g = i), (i = 0))
            : i > 2147483647
            ? (i = 2147483647)
            : i < -2147483648 && (i = -2147483648),
          Te((i = +i)) && (i = R ? 0 : u.length - 1),
          i < 0 && (i = u.length + i),
          i >= u.length)
        ) {
          if (R) return -1;
          i = u.length - 1;
        } else if (i < 0) {
          if (!R) return -1;
          i = 0;
        }
        if (("string" == typeof n && (n = b.from(n, g)), b.isBuffer(n)))
          return 0 === n.length ? -1 : Q(u, n, i, g, R);
        if ("number" == typeof n)
          return (
            (n &= 255),
            "function" == typeof Uint8Array.prototype.indexOf
              ? R
                ? Uint8Array.prototype.indexOf.call(u, n, i)
                : Uint8Array.prototype.lastIndexOf.call(u, n, i)
              : Q(u, [n], i, g, R)
          );
        throw new TypeError("val must be string, number or Buffer");
      }
      function Q(u, n, i, g, R) {
        var ie,
          k = 1,
          L = u.length,
          $ = n.length;
        if (
          void 0 !== g &&
          ("ucs2" === (g = String(g).toLowerCase()) ||
            "ucs-2" === g ||
            "utf16le" === g ||
            "utf-16le" === g)
        ) {
          if (u.length < 2 || n.length < 2) return -1;
          (k = 2), (L /= 2), ($ /= 2), (i /= 2);
        }
        function ce(Re, ot) {
          return 1 === k ? Re[ot] : Re.readUInt16BE(ot * k);
        }
        if (R) {
          var he = -1;
          for (ie = i; ie < L; ie++)
            if (ce(u, ie) === ce(n, -1 === he ? 0 : ie - he)) {
              if ((-1 === he && (he = ie), ie - he + 1 === $)) return he * k;
            } else -1 !== he && (ie -= ie - he), (he = -1);
        } else
          for (i + $ > L && (i = L - $), ie = i; ie >= 0; ie--) {
            for (var me = !0, xe = 0; xe < $; xe++)
              if (ce(u, ie + xe) !== ce(n, xe)) {
                me = !1;
                break;
              }
            if (me) return ie;
          }
        return -1;
      }
      function te(u, n, i, g) {
        i = Number(i) || 0;
        var R = u.length - i;
        g ? (g = Number(g)) > R && (g = R) : (g = R);
        var k = n.length;
        g > k / 2 && (g = k / 2);
        for (var L = 0; L < g; ++L) {
          var $ = parseInt(n.substr(2 * L, 2), 16);
          if (Te($)) return L;
          u[i + L] = $;
        }
        return L;
      }
      function y(u, n, i, g) {
        return Be(Ee(n, u.length - i), u, i, g);
      }
      function e(u, n, i, g) {
        return Be(
          (function st(u) {
            for (var n = [], i = 0; i < u.length; ++i)
              n.push(255 & u.charCodeAt(i));
            return n;
          })(n),
          u,
          i,
          g
        );
      }
      function o(u, n, i, g) {
        return Be(ye(n), u, i, g);
      }
      function l(u, n, i, g) {
        return Be(
          (function Ie(u, n) {
            for (var i, g, k = [], L = 0; L < u.length && !((n -= 2) < 0); ++L)
              (g = (i = u.charCodeAt(L)) >> 8), k.push(i % 256), k.push(g);
            return k;
          })(n, u.length - i),
          u,
          i,
          g
        );
      }
      function d(u, n, i) {
        return E.fromByteArray(0 === n && i === u.length ? u : u.slice(n, i));
      }
      function p(u, n, i) {
        i = Math.min(u.length, i);
        for (var g = [], R = n; R < i; ) {
          var ce,
            ie,
            he,
            me,
            k = u[R],
            L = null,
            $ = k > 239 ? 4 : k > 223 ? 3 : k > 191 ? 2 : 1;
          if (R + $ <= i)
            switch ($) {
              case 1:
                k < 128 && (L = k);
                break;
              case 2:
                128 == (192 & (ce = u[R + 1])) &&
                  (me = ((31 & k) << 6) | (63 & ce)) > 127 &&
                  (L = me);
                break;
              case 3:
                (ie = u[R + 2]),
                  128 == (192 & (ce = u[R + 1])) &&
                    128 == (192 & ie) &&
                    (me = ((15 & k) << 12) | ((63 & ce) << 6) | (63 & ie)) >
                      2047 &&
                    (me < 55296 || me > 57343) &&
                    (L = me);
                break;
              case 4:
                (ie = u[R + 2]),
                  (he = u[R + 3]),
                  128 == (192 & (ce = u[R + 1])) &&
                    128 == (192 & ie) &&
                    128 == (192 & he) &&
                    (me =
                      ((15 & k) << 18) |
                      ((63 & ce) << 12) |
                      ((63 & ie) << 6) |
                      (63 & he)) > 65535 &&
                    me < 1114112 &&
                    (L = me);
            }
          null === L
            ? ((L = 65533), ($ = 1))
            : L > 65535 &&
              (g.push((((L -= 65536) >>> 10) & 1023) | 55296),
              (L = 56320 | (1023 & L))),
            g.push(L),
            (R += $);
        }
        return (function I(u) {
          var n = u.length;
          if (n <= M) return String.fromCharCode.apply(String, u);
          for (var i = "", g = 0; g < n; )
            i += String.fromCharCode.apply(String, u.slice(g, (g += M)));
          return i;
        })(g);
      }
      !(b.TYPED_ARRAY_SUPPORT = (function B() {
        try {
          var u = new Uint8Array(1),
            n = {
              foo: function () {
                return 42;
              },
            };
          return (
            Object.setPrototypeOf(n, Uint8Array.prototype),
            Object.setPrototypeOf(u, n),
            42 === u.foo()
          );
        } catch {
          return !1;
        }
      })()) &&
        typeof console < "u" &&
        "function" == typeof console.error &&
        console.error(
          "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
        ),
        Object.defineProperty(b.prototype, "parent", {
          enumerable: !0,
          get: function () {
            if (b.isBuffer(this)) return this.buffer;
          },
        }),
        Object.defineProperty(b.prototype, "offset", {
          enumerable: !0,
          get: function () {
            if (b.isBuffer(this)) return this.byteOffset;
          },
        }),
        (b.poolSize = 8192),
        (b.from = function (u, n, i) {
          return G(u, n, i);
        }),
        Object.setPrototypeOf(b.prototype, Uint8Array.prototype),
        Object.setPrototypeOf(b, Uint8Array),
        (b.alloc = function (u, n, i) {
          return (function fe(u, n, i) {
            return (
              ue(u),
              u <= 0
                ? O(u)
                : void 0 !== n
                ? "string" == typeof i
                  ? O(u).fill(n, i)
                  : O(u).fill(n)
                : O(u)
            );
          })(u, n, i);
        }),
        (b.allocUnsafe = function (u) {
          return V(u);
        }),
        (b.allocUnsafeSlow = function (u) {
          return V(u);
        }),
        (b.isBuffer = function (n) {
          return null != n && !0 === n._isBuffer && n !== b.prototype;
        }),
        (b.compare = function (n, i) {
          if (
            (Se(n, Uint8Array) && (n = b.from(n, n.offset, n.byteLength)),
            Se(i, Uint8Array) && (i = b.from(i, i.offset, i.byteLength)),
            !b.isBuffer(n) || !b.isBuffer(i))
          )
            throw new TypeError(
              'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
            );
          if (n === i) return 0;
          for (
            var g = n.length, R = i.length, k = 0, L = Math.min(g, R);
            k < L;
            ++k
          )
            if (n[k] !== i[k]) {
              (g = n[k]), (R = i[k]);
              break;
            }
          return g < R ? -1 : R < g ? 1 : 0;
        }),
        (b.isEncoding = function (n) {
          switch (String(n).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return !0;
            default:
              return !1;
          }
        }),
        (b.concat = function (n, i) {
          if (!Array.isArray(n))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (0 === n.length) return b.alloc(0);
          var g;
          if (void 0 === i)
            for (i = 0, g = 0; g < n.length; ++g) i += n[g].length;
          var R = b.allocUnsafe(i),
            k = 0;
          for (g = 0; g < n.length; ++g) {
            var L = n[g];
            if (Se(L, Uint8Array))
              k + L.length > R.length
                ? b.from(L).copy(R, k)
                : Uint8Array.prototype.set.call(R, L, k);
            else {
              if (!b.isBuffer(L))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              L.copy(R, k);
            }
            k += L.length;
          }
          return R;
        }),
        (b.byteLength = S),
        (b.prototype._isBuffer = !0),
        (b.prototype.swap16 = function () {
          var n = this.length;
          if (n % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var i = 0; i < n; i += 2) q(this, i, i + 1);
          return this;
        }),
        (b.prototype.swap32 = function () {
          var n = this.length;
          if (n % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var i = 0; i < n; i += 4)
            q(this, i, i + 3), q(this, i + 1, i + 2);
          return this;
        }),
        (b.prototype.swap64 = function () {
          var n = this.length;
          if (n % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var i = 0; i < n; i += 8)
            q(this, i, i + 7),
              q(this, i + 1, i + 6),
              q(this, i + 2, i + 5),
              q(this, i + 3, i + 4);
          return this;
        }),
        (b.prototype.toLocaleString = b.prototype.toString =
          function () {
            var n = this.length;
            return 0 === n
              ? ""
              : 0 === arguments.length
              ? p(this, 0, n)
              : W.apply(this, arguments);
          }),
        (b.prototype.equals = function (n) {
          if (!b.isBuffer(n)) throw new TypeError("Argument must be a Buffer");
          return this === n || 0 === b.compare(this, n);
        }),
        (b.prototype.inspect = function () {
          var n = "",
            i = A.h2;
          return (
            (n = this.toString("hex", 0, i)
              .replace(/(.{2})/g, "$1 ")
              .trim()),
            this.length > i && (n += " ... "),
            "<Buffer " + n + ">"
          );
        }),
        T && (b.prototype[T] = b.prototype.inspect),
        (b.prototype.compare = function (n, i, g, R, k) {
          if (
            (Se(n, Uint8Array) && (n = b.from(n, n.offset, n.byteLength)),
            !b.isBuffer(n))
          )
            throw new TypeError(
              'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
                typeof n
            );
          if (
            (void 0 === i && (i = 0),
            void 0 === g && (g = n ? n.length : 0),
            void 0 === R && (R = 0),
            void 0 === k && (k = this.length),
            i < 0 || g > n.length || R < 0 || k > this.length)
          )
            throw new RangeError("out of range index");
          if (R >= k && i >= g) return 0;
          if (R >= k) return -1;
          if (i >= g) return 1;
          if (this === n) return 0;
          for (
            var L = (k >>>= 0) - (R >>>= 0),
              $ = (g >>>= 0) - (i >>>= 0),
              ce = Math.min(L, $),
              ie = this.slice(R, k),
              he = n.slice(i, g),
              me = 0;
            me < ce;
            ++me
          )
            if (ie[me] !== he[me]) {
              (L = ie[me]), ($ = he[me]);
              break;
            }
          return L < $ ? -1 : $ < L ? 1 : 0;
        }),
        (b.prototype.includes = function (n, i, g) {
          return -1 !== this.indexOf(n, i, g);
        }),
        (b.prototype.indexOf = function (n, i, g) {
          return ne(this, n, i, g, !0);
        }),
        (b.prototype.lastIndexOf = function (n, i, g) {
          return ne(this, n, i, g, !1);
        }),
        (b.prototype.write = function (n, i, g, R) {
          if (void 0 === i) (R = "utf8"), (g = this.length), (i = 0);
          else if (void 0 === g && "string" == typeof i)
            (R = i), (g = this.length), (i = 0);
          else {
            if (!isFinite(i))
              throw new Error(
                "Buffer.write(string, encoding, offset[, length]) is no longer supported"
              );
            (i >>>= 0),
              isFinite(g)
                ? ((g >>>= 0), void 0 === R && (R = "utf8"))
                : ((R = g), (g = void 0));
          }
          var k = this.length - i;
          if (
            ((void 0 === g || g > k) && (g = k),
            (n.length > 0 && (g < 0 || i < 0)) || i > this.length)
          )
            throw new RangeError("Attempt to write outside buffer bounds");
          R || (R = "utf8");
          for (var L = !1; ; )
            switch (R) {
              case "hex":
                return te(this, n, i, g);
              case "utf8":
              case "utf-8":
                return y(this, n, i, g);
              case "ascii":
              case "latin1":
              case "binary":
                return e(this, n, i, g);
              case "base64":
                return o(this, n, i, g);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return l(this, n, i, g);
              default:
                if (L) throw new TypeError("Unknown encoding: " + R);
                (R = ("" + R).toLowerCase()), (L = !0);
            }
        }),
        (b.prototype.toJSON = function () {
          return {
            type: "Buffer",
            data: Array.prototype.slice.call(this._arr || this, 0),
          };
        });
      var M = 4096;
      function _(u, n, i) {
        var g = "";
        i = Math.min(u.length, i);
        for (var R = n; R < i; ++R) g += String.fromCharCode(127 & u[R]);
        return g;
      }
      function r(u, n, i) {
        var g = "";
        i = Math.min(u.length, i);
        for (var R = n; R < i; ++R) g += String.fromCharCode(u[R]);
        return g;
      }
      function w(u, n, i) {
        var g = u.length;
        (!n || n < 0) && (n = 0), (!i || i < 0 || i > g) && (i = g);
        for (var R = "", k = n; k < i; ++k) R += lt[u[k]];
        return R;
      }
      function oe(u, n, i) {
        for (var g = u.slice(n, i), R = "", k = 0; k < g.length - 1; k += 2)
          R += String.fromCharCode(g[k] + 256 * g[k + 1]);
        return R;
      }
      function j(u, n, i) {
        if (u % 1 != 0 || u < 0) throw new RangeError("offset is not uint");
        if (u + n > i)
          throw new RangeError("Trying to access beyond buffer length");
      }
      function J(u, n, i, g, R, k) {
        if (!b.isBuffer(u))
          throw new TypeError('"buffer" argument must be a Buffer instance');
        if (n > R || n < k)
          throw new RangeError('"value" argument is out of bounds');
        if (i + g > u.length) throw new RangeError("Index out of range");
      }
      function ae(u, n, i, g, R, k) {
        if (i + g > u.length) throw new RangeError("Index out of range");
        if (i < 0) throw new RangeError("Index out of range");
      }
      function _e(u, n, i, g, R) {
        return (
          (n = +n),
          (i >>>= 0),
          R || ae(u, 0, i, 4),
          v.write(u, n, i, g, 23, 4),
          i + 4
        );
      }
      function ve(u, n, i, g, R) {
        return (
          (n = +n),
          (i >>>= 0),
          R || ae(u, 0, i, 8),
          v.write(u, n, i, g, 52, 8),
          i + 8
        );
      }
      (b.prototype.slice = function (n, i) {
        var g = this.length;
        (n = ~~n) < 0 ? (n += g) < 0 && (n = 0) : n > g && (n = g),
          (i = void 0 === i ? g : ~~i) < 0
            ? (i += g) < 0 && (i = 0)
            : i > g && (i = g),
          i < n && (i = n);
        var R = this.subarray(n, i);
        return Object.setPrototypeOf(R, b.prototype), R;
      }),
        (b.prototype.readUintLE = b.prototype.readUIntLE =
          function (n, i, g) {
            (n >>>= 0), (i >>>= 0), g || j(n, i, this.length);
            for (var R = this[n], k = 1, L = 0; ++L < i && (k *= 256); )
              R += this[n + L] * k;
            return R;
          }),
        (b.prototype.readUintBE = b.prototype.readUIntBE =
          function (n, i, g) {
            (n >>>= 0), (i >>>= 0), g || j(n, i, this.length);
            for (var R = this[n + --i], k = 1; i > 0 && (k *= 256); )
              R += this[n + --i] * k;
            return R;
          }),
        (b.prototype.readUint8 = b.prototype.readUInt8 =
          function (n, i) {
            return (n >>>= 0), i || j(n, 1, this.length), this[n];
          }),
        (b.prototype.readUint16LE = b.prototype.readUInt16LE =
          function (n, i) {
            return (
              (n >>>= 0),
              i || j(n, 2, this.length),
              this[n] | (this[n + 1] << 8)
            );
          }),
        (b.prototype.readUint16BE = b.prototype.readUInt16BE =
          function (n, i) {
            return (
              (n >>>= 0),
              i || j(n, 2, this.length),
              (this[n] << 8) | this[n + 1]
            );
          }),
        (b.prototype.readUint32LE = b.prototype.readUInt32LE =
          function (n, i) {
            return (
              (n >>>= 0),
              i || j(n, 4, this.length),
              (this[n] | (this[n + 1] << 8) | (this[n + 2] << 16)) +
                16777216 * this[n + 3]
            );
          }),
        (b.prototype.readUint32BE = b.prototype.readUInt32BE =
          function (n, i) {
            return (
              (n >>>= 0),
              i || j(n, 4, this.length),
              16777216 * this[n] +
                ((this[n + 1] << 16) | (this[n + 2] << 8) | this[n + 3])
            );
          }),
        (b.prototype.readIntLE = function (n, i, g) {
          (n >>>= 0), (i >>>= 0), g || j(n, i, this.length);
          for (var R = this[n], k = 1, L = 0; ++L < i && (k *= 256); )
            R += this[n + L] * k;
          return R >= (k *= 128) && (R -= Math.pow(2, 8 * i)), R;
        }),
        (b.prototype.readIntBE = function (n, i, g) {
          (n >>>= 0), (i >>>= 0), g || j(n, i, this.length);
          for (var R = i, k = 1, L = this[n + --R]; R > 0 && (k *= 256); )
            L += this[n + --R] * k;
          return L >= (k *= 128) && (L -= Math.pow(2, 8 * i)), L;
        }),
        (b.prototype.readInt8 = function (n, i) {
          return (
            (n >>>= 0),
            i || j(n, 1, this.length),
            128 & this[n] ? -1 * (255 - this[n] + 1) : this[n]
          );
        }),
        (b.prototype.readInt16LE = function (n, i) {
          (n >>>= 0), i || j(n, 2, this.length);
          var g = this[n] | (this[n + 1] << 8);
          return 32768 & g ? 4294901760 | g : g;
        }),
        (b.prototype.readInt16BE = function (n, i) {
          (n >>>= 0), i || j(n, 2, this.length);
          var g = this[n + 1] | (this[n] << 8);
          return 32768 & g ? 4294901760 | g : g;
        }),
        (b.prototype.readInt32LE = function (n, i) {
          return (
            (n >>>= 0),
            i || j(n, 4, this.length),
            this[n] |
              (this[n + 1] << 8) |
              (this[n + 2] << 16) |
              (this[n + 3] << 24)
          );
        }),
        (b.prototype.readInt32BE = function (n, i) {
          return (
            (n >>>= 0),
            i || j(n, 4, this.length),
            (this[n] << 24) |
              (this[n + 1] << 16) |
              (this[n + 2] << 8) |
              this[n + 3]
          );
        }),
        (b.prototype.readFloatLE = function (n, i) {
          return (
            (n >>>= 0), i || j(n, 4, this.length), v.read(this, n, !0, 23, 4)
          );
        }),
        (b.prototype.readFloatBE = function (n, i) {
          return (
            (n >>>= 0), i || j(n, 4, this.length), v.read(this, n, !1, 23, 4)
          );
        }),
        (b.prototype.readDoubleLE = function (n, i) {
          return (
            (n >>>= 0), i || j(n, 8, this.length), v.read(this, n, !0, 52, 8)
          );
        }),
        (b.prototype.readDoubleBE = function (n, i) {
          return (
            (n >>>= 0), i || j(n, 8, this.length), v.read(this, n, !1, 52, 8)
          );
        }),
        (b.prototype.writeUintLE = b.prototype.writeUIntLE =
          function (n, i, g, R) {
            (n = +n),
              (i >>>= 0),
              (g >>>= 0),
              R || J(this, n, i, g, Math.pow(2, 8 * g) - 1, 0);
            var L = 1,
              $ = 0;
            for (this[i] = 255 & n; ++$ < g && (L *= 256); )
              this[i + $] = (n / L) & 255;
            return i + g;
          }),
        (b.prototype.writeUintBE = b.prototype.writeUIntBE =
          function (n, i, g, R) {
            (n = +n),
              (i >>>= 0),
              (g >>>= 0),
              R || J(this, n, i, g, Math.pow(2, 8 * g) - 1, 0);
            var L = g - 1,
              $ = 1;
            for (this[i + L] = 255 & n; --L >= 0 && ($ *= 256); )
              this[i + L] = (n / $) & 255;
            return i + g;
          }),
        (b.prototype.writeUint8 = b.prototype.writeUInt8 =
          function (n, i, g) {
            return (
              (n = +n),
              (i >>>= 0),
              g || J(this, n, i, 1, 255, 0),
              (this[i] = 255 & n),
              i + 1
            );
          }),
        (b.prototype.writeUint16LE = b.prototype.writeUInt16LE =
          function (n, i, g) {
            return (
              (n = +n),
              (i >>>= 0),
              g || J(this, n, i, 2, 65535, 0),
              (this[i] = 255 & n),
              (this[i + 1] = n >>> 8),
              i + 2
            );
          }),
        (b.prototype.writeUint16BE = b.prototype.writeUInt16BE =
          function (n, i, g) {
            return (
              (n = +n),
              (i >>>= 0),
              g || J(this, n, i, 2, 65535, 0),
              (this[i] = n >>> 8),
              (this[i + 1] = 255 & n),
              i + 2
            );
          }),
        (b.prototype.writeUint32LE = b.prototype.writeUInt32LE =
          function (n, i, g) {
            return (
              (n = +n),
              (i >>>= 0),
              g || J(this, n, i, 4, 4294967295, 0),
              (this[i + 3] = n >>> 24),
              (this[i + 2] = n >>> 16),
              (this[i + 1] = n >>> 8),
              (this[i] = 255 & n),
              i + 4
            );
          }),
        (b.prototype.writeUint32BE = b.prototype.writeUInt32BE =
          function (n, i, g) {
            return (
              (n = +n),
              (i >>>= 0),
              g || J(this, n, i, 4, 4294967295, 0),
              (this[i] = n >>> 24),
              (this[i + 1] = n >>> 16),
              (this[i + 2] = n >>> 8),
              (this[i + 3] = 255 & n),
              i + 4
            );
          }),
        (b.prototype.writeIntLE = function (n, i, g, R) {
          if (((n = +n), (i >>>= 0), !R)) {
            var k = Math.pow(2, 8 * g - 1);
            J(this, n, i, g, k - 1, -k);
          }
          var L = 0,
            $ = 1,
            ce = 0;
          for (this[i] = 255 & n; ++L < g && ($ *= 256); )
            n < 0 && 0 === ce && 0 !== this[i + L - 1] && (ce = 1),
              (this[i + L] = (((n / $) >> 0) - ce) & 255);
          return i + g;
        }),
        (b.prototype.writeIntBE = function (n, i, g, R) {
          if (((n = +n), (i >>>= 0), !R)) {
            var k = Math.pow(2, 8 * g - 1);
            J(this, n, i, g, k - 1, -k);
          }
          var L = g - 1,
            $ = 1,
            ce = 0;
          for (this[i + L] = 255 & n; --L >= 0 && ($ *= 256); )
            n < 0 && 0 === ce && 0 !== this[i + L + 1] && (ce = 1),
              (this[i + L] = (((n / $) >> 0) - ce) & 255);
          return i + g;
        }),
        (b.prototype.writeInt8 = function (n, i, g) {
          return (
            (n = +n),
            (i >>>= 0),
            g || J(this, n, i, 1, 127, -128),
            n < 0 && (n = 255 + n + 1),
            (this[i] = 255 & n),
            i + 1
          );
        }),
        (b.prototype.writeInt16LE = function (n, i, g) {
          return (
            (n = +n),
            (i >>>= 0),
            g || J(this, n, i, 2, 32767, -32768),
            (this[i] = 255 & n),
            (this[i + 1] = n >>> 8),
            i + 2
          );
        }),
        (b.prototype.writeInt16BE = function (n, i, g) {
          return (
            (n = +n),
            (i >>>= 0),
            g || J(this, n, i, 2, 32767, -32768),
            (this[i] = n >>> 8),
            (this[i + 1] = 255 & n),
            i + 2
          );
        }),
        (b.prototype.writeInt32LE = function (n, i, g) {
          return (
            (n = +n),
            (i >>>= 0),
            g || J(this, n, i, 4, 2147483647, -2147483648),
            (this[i] = 255 & n),
            (this[i + 1] = n >>> 8),
            (this[i + 2] = n >>> 16),
            (this[i + 3] = n >>> 24),
            i + 4
          );
        }),
        (b.prototype.writeInt32BE = function (n, i, g) {
          return (
            (n = +n),
            (i >>>= 0),
            g || J(this, n, i, 4, 2147483647, -2147483648),
            n < 0 && (n = 4294967295 + n + 1),
            (this[i] = n >>> 24),
            (this[i + 1] = n >>> 16),
            (this[i + 2] = n >>> 8),
            (this[i + 3] = 255 & n),
            i + 4
          );
        }),
        (b.prototype.writeFloatLE = function (n, i, g) {
          return _e(this, n, i, !0, g);
        }),
        (b.prototype.writeFloatBE = function (n, i, g) {
          return _e(this, n, i, !1, g);
        }),
        (b.prototype.writeDoubleLE = function (n, i, g) {
          return ve(this, n, i, !0, g);
        }),
        (b.prototype.writeDoubleBE = function (n, i, g) {
          return ve(this, n, i, !1, g);
        }),
        (b.prototype.copy = function (n, i, g, R) {
          if (!b.isBuffer(n))
            throw new TypeError("argument should be a Buffer");
          if (
            (g || (g = 0),
            !R && 0 !== R && (R = this.length),
            i >= n.length && (i = n.length),
            i || (i = 0),
            R > 0 && R < g && (R = g),
            R === g || 0 === n.length || 0 === this.length)
          )
            return 0;
          if (i < 0) throw new RangeError("targetStart out of bounds");
          if (g < 0 || g >= this.length)
            throw new RangeError("Index out of range");
          if (R < 0) throw new RangeError("sourceEnd out of bounds");
          R > this.length && (R = this.length),
            n.length - i < R - g && (R = n.length - i + g);
          var k = R - g;
          return (
            this === n && "function" == typeof Uint8Array.prototype.copyWithin
              ? this.copyWithin(i, g, R)
              : Uint8Array.prototype.set.call(n, this.subarray(g, R), i),
            k
          );
        }),
        (b.prototype.fill = function (n, i, g, R) {
          if ("string" == typeof n) {
            if (
              ("string" == typeof i
                ? ((R = i), (i = 0), (g = this.length))
                : "string" == typeof g && ((R = g), (g = this.length)),
              void 0 !== R && "string" != typeof R)
            )
              throw new TypeError("encoding must be a string");
            if ("string" == typeof R && !b.isEncoding(R))
              throw new TypeError("Unknown encoding: " + R);
            if (1 === n.length) {
              var k = n.charCodeAt(0);
              (("utf8" === R && k < 128) || "latin1" === R) && (n = k);
            }
          } else
            "number" == typeof n
              ? (n &= 255)
              : "boolean" == typeof n && (n = Number(n));
          if (i < 0 || this.length < i || this.length < g)
            throw new RangeError("Out of range index");
          if (g <= i) return this;
          var L;
          if (
            ((i >>>= 0),
            (g = void 0 === g ? this.length : g >>> 0),
            n || (n = 0),
            "number" == typeof n)
          )
            for (L = i; L < g; ++L) this[L] = n;
          else {
            var $ = b.isBuffer(n) ? n : b.from(n, R),
              ce = $.length;
            if (0 === ce)
              throw new TypeError(
                'The value "' + n + '" is invalid for argument "value"'
              );
            for (L = 0; L < g - i; ++L) this[L + i] = $[L % ce];
          }
          return this;
        });
      var nt = /[^+/0-9A-Za-z-_]/g;
      function Ee(u, n) {
        n = n || 1 / 0;
        for (var i, g = u.length, R = null, k = [], L = 0; L < g; ++L) {
          if ((i = u.charCodeAt(L)) > 55295 && i < 57344) {
            if (!R) {
              if (i > 56319) {
                (n -= 3) > -1 && k.push(239, 191, 189);
                continue;
              }
              if (L + 1 === g) {
                (n -= 3) > -1 && k.push(239, 191, 189);
                continue;
              }
              R = i;
              continue;
            }
            if (i < 56320) {
              (n -= 3) > -1 && k.push(239, 191, 189), (R = i);
              continue;
            }
            i = 65536 + (((R - 55296) << 10) | (i - 56320));
          } else R && (n -= 3) > -1 && k.push(239, 191, 189);
          if (((R = null), i < 128)) {
            if ((n -= 1) < 0) break;
            k.push(i);
          } else if (i < 2048) {
            if ((n -= 2) < 0) break;
            k.push((i >> 6) | 192, (63 & i) | 128);
          } else if (i < 65536) {
            if ((n -= 3) < 0) break;
            k.push((i >> 12) | 224, ((i >> 6) & 63) | 128, (63 & i) | 128);
          } else {
            if (!(i < 1114112)) throw new Error("Invalid code point");
            if ((n -= 4) < 0) break;
            k.push(
              (i >> 18) | 240,
              ((i >> 12) & 63) | 128,
              ((i >> 6) & 63) | 128,
              (63 & i) | 128
            );
          }
        }
        return k;
      }
      function ye(u) {
        return E.toByteArray(
          (function be(u) {
            if ((u = (u = u.split("=")[0]).trim().replace(nt, "")).length < 2)
              return "";
            for (; u.length % 4 != 0; ) u += "=";
            return u;
          })(u)
        );
      }
      function Be(u, n, i, g) {
        for (var R = 0; R < g && !(R + i >= n.length || R >= u.length); ++R)
          n[R + i] = u[R];
        return R;
      }
      function Se(u, n) {
        return (
          u instanceof n ||
          (null != u &&
            null != u.constructor &&
            null != u.constructor.name &&
            u.constructor.name === n.name)
        );
      }
      function Te(u) {
        return u != u;
      }
      var lt = (function () {
        for (var u = "0123456789abcdef", n = new Array(256), i = 0; i < 16; ++i)
          for (var g = 16 * i, R = 0; R < 16; ++R) n[g + R] = u[i] + u[R];
        return n;
      })();
    },
    3230: (de, A, U) => {
      "use strict";
      const C = U(8372),
        E = U(2761),
        v = U(8951);
      function O(D) {
        if ("string" != typeof D || 1 !== D.length)
          throw new TypeError(
            "arrayFormatSeparator must be single character string"
          );
      }
      function b(D, P) {
        return P.encode ? (P.strict ? C(D) : encodeURIComponent(D)) : D;
      }
      function G(D, P) {
        return P.decode ? E(D) : D;
      }
      function ue(D) {
        return Array.isArray(D)
          ? D.sort()
          : "object" == typeof D
          ? ue(Object.keys(D))
              .sort((P, N) => Number(P) - Number(N))
              .map((P) => D[P])
          : D;
      }
      function fe(D) {
        const P = D.indexOf("#");
        return -1 !== P && (D = D.slice(0, P)), D;
      }
      function ee(D) {
        const P = (D = fe(D)).indexOf("?");
        return -1 === P ? "" : D.slice(P + 1);
      }
      function X(D, P) {
        return (
          P.parseNumbers &&
          !Number.isNaN(Number(D)) &&
          "string" == typeof D &&
          "" !== D.trim()
            ? (D = Number(D))
            : P.parseBooleans &&
              null !== D &&
              ("true" === D.toLowerCase() || "false" === D.toLowerCase()) &&
              (D = "true" === D.toLowerCase()),
          D
        );
      }
      function le(D, P) {
        O(
          (P = Object.assign(
            {
              decode: !0,
              sort: !0,
              arrayFormat: "none",
              arrayFormatSeparator: ",",
              parseNumbers: !1,
              parseBooleans: !1,
            },
            P
          )).arrayFormatSeparator
        );
        const N = (function B(D) {
            let P;
            switch (D.arrayFormat) {
              case "index":
                return (N, x, S) => {
                  (P = /\[(\d*)\]$/.exec(N)),
                    (N = N.replace(/\[\d*\]$/, "")),
                    P
                      ? (void 0 === S[N] && (S[N] = {}), (S[N][P[1]] = x))
                      : (S[N] = x);
                };
              case "bracket":
                return (N, x, S) => {
                  (P = /(\[\])$/.exec(N)),
                    (S[(N = N.replace(/\[\]$/, ""))] = P
                      ? void 0 !== S[N]
                        ? [].concat(S[N], x)
                        : [x]
                      : x);
                };
              case "comma":
              case "separator":
                return (N, x, S) => {
                  const q =
                    "string" == typeof x &&
                    x.split("").indexOf(D.arrayFormatSeparator) > -1
                      ? x.split(D.arrayFormatSeparator).map((ne) => G(ne, D))
                      : null === x
                      ? x
                      : G(x, D);
                  S[N] = q;
                };
              default:
                return (N, x, S) => {
                  S[N] = void 0 !== S[N] ? [].concat(S[N], x) : x;
                };
            }
          })(P),
          x = Object.create(null);
        if ("string" != typeof D || !(D = D.trim().replace(/^[?#&]/, "")))
          return x;
        for (const S of D.split("&")) {
          let [W, q] = v(P.decode ? S.replace(/\+/g, " ") : S, "=");
          (q =
            void 0 === q
              ? null
              : ["comma", "separator"].includes(P.arrayFormat)
              ? q
              : G(q, P)),
            N(G(W, P), q, x);
        }
        for (const S of Object.keys(x)) {
          const W = x[S];
          if ("object" == typeof W && null !== W)
            for (const q of Object.keys(W)) W[q] = X(W[q], P);
          else x[S] = X(W, P);
        }
        return !1 === P.sort
          ? x
          : (!0 === P.sort
              ? Object.keys(x).sort()
              : Object.keys(x).sort(P.sort)
            ).reduce((S, W) => {
              const q = x[W];
              return (
                (S[W] =
                  Boolean(q) && "object" == typeof q && !Array.isArray(q)
                    ? ue(q)
                    : q),
                S
              );
            }, Object.create(null));
      }
      (A.extract = ee),
        (A.parse = le),
        (A.stringify = (D, P) => {
          if (!D) return "";
          O(
            (P = Object.assign(
              {
                encode: !0,
                strict: !0,
                arrayFormat: "none",
                arrayFormatSeparator: ",",
              },
              P
            )).arrayFormatSeparator
          );
          const N = (q) =>
              (P.skipNull && ((D) => null == D)(D[q])) ||
              (P.skipEmptyString && "" === D[q]),
            x = (function a(D) {
              switch (D.arrayFormat) {
                case "index":
                  return (P) => (N, x) => {
                    const S = N.length;
                    return void 0 === x ||
                      (D.skipNull && null === x) ||
                      (D.skipEmptyString && "" === x)
                      ? N
                      : null === x
                      ? [...N, [b(P, D), "[", S, "]"].join("")]
                      : [...N, [b(P, D), "[", b(S, D), "]=", b(x, D)].join("")];
                  };
                case "bracket":
                  return (P) => (N, x) =>
                    void 0 === x ||
                    (D.skipNull && null === x) ||
                    (D.skipEmptyString && "" === x)
                      ? N
                      : null === x
                      ? [...N, [b(P, D), "[]"].join("")]
                      : [...N, [b(P, D), "[]=", b(x, D)].join("")];
                case "comma":
                case "separator":
                  return (P) => (N, x) =>
                    null == x || 0 === x.length
                      ? N
                      : 0 === N.length
                      ? [[b(P, D), "=", b(x, D)].join("")]
                      : [[N, b(x, D)].join(D.arrayFormatSeparator)];
                default:
                  return (P) => (N, x) =>
                    void 0 === x ||
                    (D.skipNull && null === x) ||
                    (D.skipEmptyString && "" === x)
                      ? N
                      : null === x
                      ? [...N, b(P, D)]
                      : [...N, [b(P, D), "=", b(x, D)].join("")];
              }
            })(P),
            S = {};
          for (const q of Object.keys(D)) N(q) || (S[q] = D[q]);
          const W = Object.keys(S);
          return (
            !1 !== P.sort && W.sort(P.sort),
            W.map((q) => {
              const ne = D[q];
              return void 0 === ne
                ? ""
                : null === ne
                ? b(q, P)
                : Array.isArray(ne)
                ? ne.reduce(x(q), []).join("&")
                : b(q, P) + "=" + b(ne, P);
            })
              .filter((q) => q.length > 0)
              .join("&")
          );
        }),
        (A.parseUrl = (D, P) => {
          P = Object.assign({ decode: !0 }, P);
          const [N, x] = v(D, "#");
          return Object.assign(
            { url: N.split("?")[0] || "", query: le(ee(D), P) },
            P && P.parseFragmentIdentifier && x
              ? { fragmentIdentifier: G(x, P) }
              : {}
          );
        }),
        (A.stringifyUrl = (D, P) => {
          P = Object.assign({ encode: !0, strict: !0 }, P);
          const N = fe(D.url).split("?")[0] || "",
            x = A.extract(D.url),
            S = A.parse(x, { sort: !1 }),
            W = Object.assign(S, D.query);
          let q = A.stringify(W, P);
          q && (q = `?${q}`);
          let ne = (function V(D) {
            let P = "";
            const N = D.indexOf("#");
            return -1 !== N && (P = D.slice(N)), P;
          })(D.url);
          return (
            D.fragmentIdentifier && (ne = `#${b(D.fragmentIdentifier, P)}`),
            `${N}${q}${ne}`
          );
        });
    },
    3675: (de) => {
      de.exports = function () {
        var A = document.getSelection();
        if (!A.rangeCount) return function () {};
        for (
          var U = document.activeElement, C = [], E = 0;
          E < A.rangeCount;
          E++
        )
          C.push(A.getRangeAt(E));
        switch (U.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            U.blur();
            break;
          default:
            U = null;
        }
        return (
          A.removeAllRanges(),
          function () {
            "Caret" === A.type && A.removeAllRanges(),
              A.rangeCount ||
                C.forEach(function (v) {
                  A.addRange(v);
                }),
              U && U.focus();
          }
        );
      };
    },
    8517: (de, A, U) => {
      var C = U(5829).strict;
      de.exports = function (v) {
        if (C(v)) {
          var T = Buffer.from(v.buffer);
          return (
            v.byteLength !== v.buffer.byteLength &&
              (T = T.slice(v.byteOffset, v.byteOffset + v.byteLength)),
            T
          );
        }
        return Buffer.from(v);
      };
    },
    6563: () => {},
  },
]);
