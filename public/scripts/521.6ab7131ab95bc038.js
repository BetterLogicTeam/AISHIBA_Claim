(self.webpackChunkico_fe = self.webpackChunkico_fe || []).push([
  [521],
  {
    5319: (X, w, y) => {
      const m = y(623),
        f = y(2789),
        h = y(3500),
        u = y(8872);
      function p(v, x, g, I, G) {
        const q = [].slice.call(arguments, 1),
          M = q.length,
          B = "function" == typeof q[M - 1];
        if (!B && !m()) throw new Error("Callback required as last argument");
        if (!B) {
          if (M < 1) throw new Error("Too few arguments provided");
          return (
            1 === M
              ? ((g = x), (x = I = void 0))
              : 2 === M && !x.getContext && ((I = g), (g = x), (x = void 0)),
            new Promise(function (K, it) {
              try {
                const st = f.create(g, I);
                K(v(st, x, I));
              } catch (st) {
                it(st);
              }
            })
          );
        }
        if (M < 2) throw new Error("Too few arguments provided");
        2 === M
          ? ((G = g), (g = x), (x = I = void 0))
          : 3 === M &&
            (x.getContext && typeof G > "u"
              ? ((G = I), (I = void 0))
              : ((G = I), (I = g), (g = x), (x = void 0)));
        try {
          const K = f.create(g, I);
          G(null, v(K, x, I));
        } catch (K) {
          G(K);
        }
      }
      (w.create = f.create),
        (w.toCanvas = p.bind(null, h.render)),
        (w.toDataURL = p.bind(null, h.renderToDataURL)),
        (w.toString = p.bind(null, function (v, x, g) {
          return u.render(v, g);
        }));
    },
    623: (X) => {
      X.exports = function () {
        return (
          "function" == typeof Promise &&
          Promise.prototype &&
          Promise.prototype.then
        );
      };
    },
    9063: (X, w, y) => {
      const m = y(1825).getSymbolSize;
      (w.getRowColCoords = function (h) {
        if (1 === h) return [];
        const u = Math.floor(h / 7) + 2,
          p = m(h),
          v = 145 === p ? 26 : 2 * Math.ceil((p - 13) / (2 * u - 2)),
          x = [p - 7];
        for (let g = 1; g < u - 1; g++) x[g] = x[g - 1] - v;
        return x.push(6), x.reverse();
      }),
        (w.getPositions = function (h) {
          const u = [],
            p = w.getRowColCoords(h),
            v = p.length;
          for (let x = 0; x < v; x++)
            for (let g = 0; g < v; g++)
              (0 === x && 0 === g) ||
                (0 === x && g === v - 1) ||
                (x === v - 1 && 0 === g) ||
                u.push([p[x], p[g]]);
          return u;
        });
    },
    1361: (X, w, y) => {
      const m = y(9713),
        f = [
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
      function h(u) {
        (this.mode = m.ALPHANUMERIC), (this.data = u);
      }
      (h.getBitsLength = function (p) {
        return 11 * Math.floor(p / 2) + (p % 2) * 6;
      }),
        (h.prototype.getLength = function () {
          return this.data.length;
        }),
        (h.prototype.getBitsLength = function () {
          return h.getBitsLength(this.data.length);
        }),
        (h.prototype.write = function (p) {
          let v;
          for (v = 0; v + 2 <= this.data.length; v += 2) {
            let x = 45 * f.indexOf(this.data[v]);
            (x += f.indexOf(this.data[v + 1])), p.put(x, 11);
          }
          this.data.length % 2 && p.put(f.indexOf(this.data[v]), 6);
        }),
        (X.exports = h);
    },
    9468: (X) => {
      function w() {
        (this.buffer = []), (this.length = 0);
      }
      (w.prototype = {
        get: function (y) {
          const m = Math.floor(y / 8);
          return 1 == ((this.buffer[m] >>> (7 - (y % 8))) & 1);
        },
        put: function (y, m) {
          for (let f = 0; f < m; f++)
            this.putBit(1 == ((y >>> (m - f - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (y) {
          const m = Math.floor(this.length / 8);
          this.buffer.length <= m && this.buffer.push(0),
            y && (this.buffer[m] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (X.exports = w);
    },
    4652: (X) => {
      function w(y) {
        if (!y || y < 1)
          throw new Error("BitMatrix size must be defined and greater than 0");
        (this.size = y),
          (this.data = new Uint8Array(y * y)),
          (this.reservedBit = new Uint8Array(y * y));
      }
      (w.prototype.set = function (y, m, f, h) {
        const u = y * this.size + m;
        (this.data[u] = f), h && (this.reservedBit[u] = !0);
      }),
        (w.prototype.get = function (y, m) {
          return this.data[y * this.size + m];
        }),
        (w.prototype.xor = function (y, m, f) {
          this.data[y * this.size + m] ^= f;
        }),
        (w.prototype.isReserved = function (y, m) {
          return this.reservedBit[y * this.size + m];
        }),
        (X.exports = w);
    },
    3934: (X, w, y) => {
      const m = y(8419),
        f = y(9713);
      function h(u) {
        (this.mode = f.BYTE),
          "string" == typeof u && (u = m(u)),
          (this.data = new Uint8Array(u));
      }
      (h.getBitsLength = function (p) {
        return 8 * p;
      }),
        (h.prototype.getLength = function () {
          return this.data.length;
        }),
        (h.prototype.getBitsLength = function () {
          return h.getBitsLength(this.data.length);
        }),
        (h.prototype.write = function (u) {
          for (let p = 0, v = this.data.length; p < v; p++)
            u.put(this.data[p], 8);
        }),
        (X.exports = h);
    },
    1101: (X, w, y) => {
      const m = y(2785),
        f = [
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
        h = [
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
      (w.getBlocksCount = function (p, v) {
        switch (v) {
          case m.L:
            return f[4 * (p - 1) + 0];
          case m.M:
            return f[4 * (p - 1) + 1];
          case m.Q:
            return f[4 * (p - 1) + 2];
          case m.H:
            return f[4 * (p - 1) + 3];
          default:
            return;
        }
      }),
        (w.getTotalCodewordsCount = function (p, v) {
          switch (v) {
            case m.L:
              return h[4 * (p - 1) + 0];
            case m.M:
              return h[4 * (p - 1) + 1];
            case m.Q:
              return h[4 * (p - 1) + 2];
            case m.H:
              return h[4 * (p - 1) + 3];
            default:
              return;
          }
        });
    },
    2785: (X, w) => {
      (w.L = { bit: 1 }),
        (w.M = { bit: 0 }),
        (w.Q = { bit: 3 }),
        (w.H = { bit: 2 }),
        (w.isValid = function (f) {
          return f && typeof f.bit < "u" && f.bit >= 0 && f.bit < 4;
        }),
        (w.from = function (f, h) {
          if (w.isValid(f)) return f;
          try {
            return (function y(m) {
              if ("string" != typeof m)
                throw new Error("Param is not a string");
              switch (m.toLowerCase()) {
                case "l":
                case "low":
                  return w.L;
                case "m":
                case "medium":
                  return w.M;
                case "q":
                case "quartile":
                  return w.Q;
                case "h":
                case "high":
                  return w.H;
                default:
                  throw new Error("Unknown EC Level: " + m);
              }
            })(f);
          } catch {
            return h;
          }
        });
    },
    9086: (X, w, y) => {
      const m = y(1825).getSymbolSize;
      w.getPositions = function (u) {
        const p = m(u);
        return [
          [0, 0],
          [p - 7, 0],
          [0, p - 7],
        ];
      };
    },
    5688: (X, w, y) => {
      const m = y(1825),
        u = m.getBCHDigit(1335);
      w.getEncodedBits = function (v, x) {
        const g = (v.bit << 3) | x;
        let I = g << 10;
        for (; m.getBCHDigit(I) - u >= 0; ) I ^= 1335 << (m.getBCHDigit(I) - u);
        return 21522 ^ ((g << 10) | I);
      };
    },
    1890: (X, w) => {
      const y = new Uint8Array(512),
        m = new Uint8Array(256);
      (function () {
        let h = 1;
        for (let u = 0; u < 255; u++)
          (y[u] = h), (m[h] = u), (h <<= 1), 256 & h && (h ^= 285);
        for (let u = 255; u < 512; u++) y[u] = y[u - 255];
      })(),
        (w.log = function (h) {
          if (h < 1) throw new Error("log(" + h + ")");
          return m[h];
        }),
        (w.exp = function (h) {
          return y[h];
        }),
        (w.mul = function (h, u) {
          return 0 === h || 0 === u ? 0 : y[m[h] + m[u]];
        });
    },
    7244: (X, w, y) => {
      const m = y(9713),
        f = y(1825);
      function h(u) {
        (this.mode = m.KANJI), (this.data = u);
      }
      (h.getBitsLength = function (p) {
        return 13 * p;
      }),
        (h.prototype.getLength = function () {
          return this.data.length;
        }),
        (h.prototype.getBitsLength = function () {
          return h.getBitsLength(this.data.length);
        }),
        (h.prototype.write = function (u) {
          let p;
          for (p = 0; p < this.data.length; p++) {
            let v = f.toSJIS(this.data[p]);
            if (v >= 33088 && v <= 40956) v -= 33088;
            else {
              if (!(v >= 57408 && v <= 60351))
                throw new Error(
                  "Invalid SJIS character: " +
                    this.data[p] +
                    "\nMake sure your charset is UTF-8"
                );
              v -= 49472;
            }
            (v = 192 * ((v >>> 8) & 255) + (255 & v)), u.put(v, 13);
          }
        }),
        (X.exports = h);
    },
    4288: (X, w) => {
      w.Patterns = {
        PATTERN000: 0,
        PATTERN001: 1,
        PATTERN010: 2,
        PATTERN011: 3,
        PATTERN100: 4,
        PATTERN101: 5,
        PATTERN110: 6,
        PATTERN111: 7,
      };
      function m(f, h, u) {
        switch (f) {
          case w.Patterns.PATTERN000:
            return (h + u) % 2 == 0;
          case w.Patterns.PATTERN001:
            return h % 2 == 0;
          case w.Patterns.PATTERN010:
            return u % 3 == 0;
          case w.Patterns.PATTERN011:
            return (h + u) % 3 == 0;
          case w.Patterns.PATTERN100:
            return (Math.floor(h / 2) + Math.floor(u / 3)) % 2 == 0;
          case w.Patterns.PATTERN101:
            return ((h * u) % 2) + ((h * u) % 3) == 0;
          case w.Patterns.PATTERN110:
            return (((h * u) % 2) + ((h * u) % 3)) % 2 == 0;
          case w.Patterns.PATTERN111:
            return (((h * u) % 3) + ((h + u) % 2)) % 2 == 0;
          default:
            throw new Error("bad maskPattern:" + f);
        }
      }
      (w.isValid = function (h) {
        return null != h && "" !== h && !isNaN(h) && h >= 0 && h <= 7;
      }),
        (w.from = function (h) {
          return w.isValid(h) ? parseInt(h, 10) : void 0;
        }),
        (w.getPenaltyN1 = function (h) {
          const u = h.size;
          let p = 0,
            v = 0,
            x = 0,
            g = null,
            I = null;
          for (let G = 0; G < u; G++) {
            (v = x = 0), (g = I = null);
            for (let q = 0; q < u; q++) {
              let M = h.get(G, q);
              M === g ? v++ : (v >= 5 && (p += v - 5 + 3), (g = M), (v = 1)),
                (M = h.get(q, G)),
                M === I ? x++ : (x >= 5 && (p += x - 5 + 3), (I = M), (x = 1));
            }
            v >= 5 && (p += v - 5 + 3), x >= 5 && (p += x - 5 + 3);
          }
          return p;
        }),
        (w.getPenaltyN2 = function (h) {
          const u = h.size;
          let p = 0;
          for (let v = 0; v < u - 1; v++)
            for (let x = 0; x < u - 1; x++) {
              const g =
                h.get(v, x) +
                h.get(v, x + 1) +
                h.get(v + 1, x) +
                h.get(v + 1, x + 1);
              (4 === g || 0 === g) && p++;
            }
          return 3 * p;
        }),
        (w.getPenaltyN3 = function (h) {
          const u = h.size;
          let p = 0,
            v = 0,
            x = 0;
          for (let g = 0; g < u; g++) {
            v = x = 0;
            for (let I = 0; I < u; I++)
              (v = ((v << 1) & 2047) | h.get(g, I)),
                I >= 10 && (1488 === v || 93 === v) && p++,
                (x = ((x << 1) & 2047) | h.get(I, g)),
                I >= 10 && (1488 === x || 93 === x) && p++;
          }
          return 40 * p;
        }),
        (w.getPenaltyN4 = function (h) {
          let u = 0;
          const p = h.data.length;
          for (let x = 0; x < p; x++) u += h.data[x];
          return 10 * Math.abs(Math.ceil((100 * u) / p / 5) - 10);
        }),
        (w.applyMask = function (h, u) {
          const p = u.size;
          for (let v = 0; v < p; v++)
            for (let x = 0; x < p; x++)
              u.isReserved(x, v) || u.xor(x, v, m(h, x, v));
        }),
        (w.getBestMask = function (h, u) {
          const p = Object.keys(w.Patterns).length;
          let v = 0,
            x = 1 / 0;
          for (let g = 0; g < p; g++) {
            u(g), w.applyMask(g, h);
            const I =
              w.getPenaltyN1(h) +
              w.getPenaltyN2(h) +
              w.getPenaltyN3(h) +
              w.getPenaltyN4(h);
            w.applyMask(g, h), I < x && ((x = I), (v = g));
          }
          return v;
        });
    },
    9713: (X, w, y) => {
      const m = y(8277),
        f = y(334);
      (w.NUMERIC = { id: "Numeric", bit: 1, ccBits: [10, 12, 14] }),
        (w.ALPHANUMERIC = { id: "Alphanumeric", bit: 2, ccBits: [9, 11, 13] }),
        (w.BYTE = { id: "Byte", bit: 4, ccBits: [8, 16, 16] }),
        (w.KANJI = { id: "Kanji", bit: 8, ccBits: [8, 10, 12] }),
        (w.MIXED = { bit: -1 }),
        (w.getCharCountIndicator = function (p, v) {
          if (!p.ccBits) throw new Error("Invalid mode: " + p);
          if (!m.isValid(v)) throw new Error("Invalid version: " + v);
          return v >= 1 && v < 10
            ? p.ccBits[0]
            : v < 27
            ? p.ccBits[1]
            : p.ccBits[2];
        }),
        (w.getBestModeForData = function (p) {
          return f.testNumeric(p)
            ? w.NUMERIC
            : f.testAlphanumeric(p)
            ? w.ALPHANUMERIC
            : f.testKanji(p)
            ? w.KANJI
            : w.BYTE;
        }),
        (w.toString = function (p) {
          if (p && p.id) return p.id;
          throw new Error("Invalid mode");
        }),
        (w.isValid = function (p) {
          return p && p.bit && p.ccBits;
        }),
        (w.from = function (p, v) {
          if (w.isValid(p)) return p;
          try {
            return (function h(u) {
              if ("string" != typeof u)
                throw new Error("Param is not a string");
              switch (u.toLowerCase()) {
                case "numeric":
                  return w.NUMERIC;
                case "alphanumeric":
                  return w.ALPHANUMERIC;
                case "kanji":
                  return w.KANJI;
                case "byte":
                  return w.BYTE;
                default:
                  throw new Error("Unknown mode: " + u);
              }
            })(p);
          } catch {
            return v;
          }
        });
    },
    9394: (X, w, y) => {
      const m = y(9713);
      function f(h) {
        (this.mode = m.NUMERIC), (this.data = h.toString());
      }
      (f.getBitsLength = function (u) {
        return 10 * Math.floor(u / 3) + (u % 3 ? (u % 3) * 3 + 1 : 0);
      }),
        (f.prototype.getLength = function () {
          return this.data.length;
        }),
        (f.prototype.getBitsLength = function () {
          return f.getBitsLength(this.data.length);
        }),
        (f.prototype.write = function (u) {
          let p, v, x;
          for (p = 0; p + 3 <= this.data.length; p += 3)
            (v = this.data.substr(p, 3)), (x = parseInt(v, 10)), u.put(x, 10);
          const g = this.data.length - p;
          g > 0 &&
            ((v = this.data.substr(p)),
            (x = parseInt(v, 10)),
            u.put(x, 3 * g + 1));
        }),
        (X.exports = f);
    },
    7307: (X, w, y) => {
      const m = y(1890);
      (w.mul = function (h, u) {
        const p = new Uint8Array(h.length + u.length - 1);
        for (let v = 0; v < h.length; v++)
          for (let x = 0; x < u.length; x++) p[v + x] ^= m.mul(h[v], u[x]);
        return p;
      }),
        (w.mod = function (h, u) {
          let p = new Uint8Array(h);
          for (; p.length - u.length >= 0; ) {
            const v = p[0];
            for (let g = 0; g < u.length; g++) p[g] ^= m.mul(u[g], v);
            let x = 0;
            for (; x < p.length && 0 === p[x]; ) x++;
            p = p.slice(x);
          }
          return p;
        }),
        (w.generateECPolynomial = function (h) {
          let u = new Uint8Array([1]);
          for (let p = 0; p < h; p++)
            u = w.mul(u, new Uint8Array([1, m.exp(p)]));
          return u;
        });
    },
    2789: (X, w, y) => {
      const m = y(1825),
        f = y(2785),
        h = y(9468),
        u = y(4652),
        p = y(9063),
        v = y(9086),
        x = y(4288),
        g = y(1101),
        I = y(9441),
        G = y(6184),
        q = y(5688),
        M = y(9713),
        B = y(3285);
      function Q(N, H, j) {
        const k = N.size,
          Y = q.getEncodedBits(H, j);
        let U, P;
        for (U = 0; U < 15; U++)
          (P = 1 == ((Y >> U) & 1)),
            N.set(U < 6 ? U : U < 8 ? U + 1 : k - 15 + U, 8, P, !0),
            N.set(
              8,
              U < 8 ? k - U - 1 : U < 9 ? 15 - U - 1 + 1 : 15 - U - 1,
              P,
              !0
            );
        N.set(k - 8, 8, 1, !0);
      }
      function mt(N, H, j, k) {
        let Y;
        if (Array.isArray(N)) Y = B.fromArray(N);
        else {
          if ("string" != typeof N) throw new Error("Invalid data");
          {
            let $t = H;
            if (!$t) {
              const Ot = B.rawSplit(N);
              $t = G.getBestVersionForData(Ot, j);
            }
            Y = B.fromString(N, $t || 40);
          }
        }
        const U = G.getBestVersionForData(Y, j);
        if (!U)
          throw new Error(
            "The amount of data is too big to be stored in a QR Code"
          );
        if (H) {
          if (H < U)
            throw new Error(
              "\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " +
                U +
                ".\n"
            );
        } else H = U;
        const P = (function W(N, H, j) {
            const k = new h();
            j.forEach(function (Z) {
              k.put(Z.mode.bit, 4),
                k.put(Z.getLength(), M.getCharCountIndicator(Z.mode, N)),
                Z.write(k);
            });
            const P =
              8 *
              (m.getSymbolTotalCodewords(N) - g.getTotalCodewordsCount(N, H));
            for (
              k.getLengthInBits() + 4 <= P && k.put(0, 4);
              k.getLengthInBits() % 8 != 0;

            )
              k.putBit(0);
            const F = (P - k.getLengthInBits()) / 8;
            for (let Z = 0; Z < F; Z++) k.put(Z % 2 ? 17 : 236, 8);
            return (function ct(N, H, j) {
              const k = m.getSymbolTotalCodewords(H),
                U = k - g.getTotalCodewordsCount(H, j),
                P = g.getBlocksCount(H, j),
                Z = P - (k % P),
                $t = Math.floor(k / P),
                Ot = Math.floor(U / P),
                me = Ot + 1,
                Tt = $t - Ot,
                Me = new I(Tt);
              let Yt = 0;
              const xt = new Array(P),
                pe = new Array(P);
              let Jt = 0;
              const Ne = new Uint8Array(N.buffer);
              for (let lt = 0; lt < P; lt++) {
                const Xt = lt < Z ? Ot : me;
                (xt[lt] = Ne.slice(Yt, Yt + Xt)),
                  (pe[lt] = Me.encode(xt[lt])),
                  (Yt += Xt),
                  (Jt = Math.max(Jt, Xt));
              }
              const Qt = new Uint8Array(k);
              let z,
                ft,
                b = 0;
              for (z = 0; z < Jt; z++)
                for (ft = 0; ft < P; ft++)
                  z < xt[ft].length && (Qt[b++] = xt[ft][z]);
              for (z = 0; z < Tt; z++)
                for (ft = 0; ft < P; ft++) Qt[b++] = pe[ft][z];
              return Qt;
            })(k, N, H);
          })(H, j, Y),
          F = m.getSymbolSize(H),
          Z = new u(F);
        return (
          (function K(N, H) {
            const j = N.size,
              k = v.getPositions(H);
            for (let Y = 0; Y < k.length; Y++) {
              const U = k[Y][0],
                P = k[Y][1];
              for (let F = -1; F <= 7; F++)
                if (!(U + F <= -1 || j <= U + F))
                  for (let Z = -1; Z <= 7; Z++)
                    P + Z <= -1 ||
                      j <= P + Z ||
                      N.set(
                        U + F,
                        P + Z,
                        (F >= 0 && F <= 6 && (0 === Z || 6 === Z)) ||
                          (Z >= 0 && Z <= 6 && (0 === F || 6 === F)) ||
                          (F >= 2 && F <= 4 && Z >= 2 && Z <= 4),
                        !0
                      );
            }
          })(Z, H),
          (function it(N) {
            const H = N.size;
            for (let j = 8; j < H - 8; j++) {
              const k = j % 2 == 0;
              N.set(j, 6, k, !0), N.set(6, j, k, !0);
            }
          })(Z),
          (function st(N, H) {
            const j = p.getPositions(H);
            for (let k = 0; k < j.length; k++) {
              const Y = j[k][0],
                U = j[k][1];
              for (let P = -2; P <= 2; P++)
                for (let F = -2; F <= 2; F++)
                  N.set(
                    Y + P,
                    U + F,
                    -2 === P ||
                      2 === P ||
                      -2 === F ||
                      2 === F ||
                      (0 === P && 0 === F),
                    !0
                  );
            }
          })(Z, H),
          Q(Z, j, 0),
          H >= 7 &&
            (function J(N, H) {
              const j = N.size,
                k = G.getEncodedBits(H);
              let Y, U, P;
              for (let F = 0; F < 18; F++)
                (Y = Math.floor(F / 3)),
                  (U = (F % 3) + j - 8 - 3),
                  (P = 1 == ((k >> F) & 1)),
                  N.set(Y, U, P, !0),
                  N.set(U, Y, P, !0);
            })(Z, H),
          (function V(N, H) {
            const j = N.size;
            let k = -1,
              Y = j - 1,
              U = 7,
              P = 0;
            for (let F = j - 1; F > 0; F -= 2)
              for (6 === F && F--; ; ) {
                for (let Z = 0; Z < 2; Z++)
                  if (!N.isReserved(Y, F - Z)) {
                    let $t = !1;
                    P < H.length && ($t = 1 == ((H[P] >>> U) & 1)),
                      N.set(Y, F - Z, $t),
                      U--,
                      -1 === U && (P++, (U = 7));
                  }
                if (((Y += k), Y < 0 || j <= Y)) {
                  (Y -= k), (k = -k);
                  break;
                }
              }
          })(Z, P),
          isNaN(k) && (k = x.getBestMask(Z, Q.bind(null, Z, j))),
          x.applyMask(k, Z),
          Q(Z, j, k),
          {
            modules: Z,
            version: H,
            errorCorrectionLevel: j,
            maskPattern: k,
            segments: Y,
          }
        );
      }
      w.create = function (H, j) {
        if (typeof H > "u" || "" === H) throw new Error("No input text");
        let Y,
          U,
          k = f.M;
        return (
          typeof j < "u" &&
            ((k = f.from(j.errorCorrectionLevel, f.M)),
            (Y = G.from(j.version)),
            (U = x.from(j.maskPattern)),
            j.toSJISFunc && m.setToSJISFunction(j.toSJISFunc)),
          mt(H, Y, k, U)
        );
      };
    },
    9441: (X, w, y) => {
      const m = y(7307);
      function f(h) {
        (this.genPoly = void 0),
          (this.degree = h),
          this.degree && this.initialize(this.degree);
      }
      (f.prototype.initialize = function (u) {
        (this.degree = u), (this.genPoly = m.generateECPolynomial(this.degree));
      }),
        (f.prototype.encode = function (u) {
          if (!this.genPoly) throw new Error("Encoder not initialized");
          const p = new Uint8Array(u.length + this.degree);
          p.set(u);
          const v = m.mod(p, this.genPoly),
            x = this.degree - v.length;
          if (x > 0) {
            const g = new Uint8Array(this.degree);
            return g.set(v, x), g;
          }
          return v;
        }),
        (X.exports = f);
    },
    334: (X, w) => {
      const y = "[0-9]+";
      let f =
        "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
      f = f.replace(/u/g, "\\u");
      const h = "(?:(?![A-Z0-9 $%*+\\-./:]|" + f + ")(?:.|[\r\n]))+";
      (w.KANJI = new RegExp(f, "g")),
        (w.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g")),
        (w.BYTE = new RegExp(h, "g")),
        (w.NUMERIC = new RegExp(y, "g")),
        (w.ALPHANUMERIC = new RegExp("[A-Z $%*+\\-./:]+", "g"));
      const u = new RegExp("^" + f + "$"),
        p = new RegExp("^" + y + "$"),
        v = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
      (w.testKanji = function (g) {
        return u.test(g);
      }),
        (w.testNumeric = function (g) {
          return p.test(g);
        }),
        (w.testAlphanumeric = function (g) {
          return v.test(g);
        });
    },
    3285: (X, w, y) => {
      const m = y(9713),
        f = y(9394),
        h = y(1361),
        u = y(3934),
        p = y(7244),
        v = y(334),
        x = y(1825),
        g = y(4901);
      function I(J) {
        return unescape(encodeURIComponent(J)).length;
      }
      function G(J, Q, V) {
        const W = [];
        let ct;
        for (; null !== (ct = J.exec(V)); )
          W.push({
            data: ct[0],
            index: ct.index,
            mode: Q,
            length: ct[0].length,
          });
        return W;
      }
      function q(J) {
        const Q = G(v.NUMERIC, m.NUMERIC, J),
          V = G(v.ALPHANUMERIC, m.ALPHANUMERIC, J);
        let W, ct;
        return (
          x.isKanjiModeEnabled()
            ? ((W = G(v.BYTE, m.BYTE, J)), (ct = G(v.KANJI, m.KANJI, J)))
            : ((W = G(v.BYTE_KANJI, m.BYTE, J)), (ct = [])),
          Q.concat(V, W, ct)
            .sort(function (N, H) {
              return N.index - H.index;
            })
            .map(function (N) {
              return { data: N.data, mode: N.mode, length: N.length };
            })
        );
      }
      function M(J, Q) {
        switch (Q) {
          case m.NUMERIC:
            return f.getBitsLength(J);
          case m.ALPHANUMERIC:
            return h.getBitsLength(J);
          case m.KANJI:
            return p.getBitsLength(J);
          case m.BYTE:
            return u.getBitsLength(J);
        }
      }
      function st(J, Q) {
        let V;
        const W = m.getBestModeForData(J);
        if (((V = m.from(Q, W)), V !== m.BYTE && V.bit < W.bit))
          throw new Error(
            '"' +
              J +
              '" cannot be encoded with mode ' +
              m.toString(V) +
              ".\n Suggested mode is: " +
              m.toString(W)
          );
        switch ((V === m.KANJI && !x.isKanjiModeEnabled() && (V = m.BYTE), V)) {
          case m.NUMERIC:
            return new f(J);
          case m.ALPHANUMERIC:
            return new h(J);
          case m.KANJI:
            return new p(J);
          case m.BYTE:
            return new u(J);
        }
      }
      (w.fromArray = function (Q) {
        return Q.reduce(function (V, W) {
          return (
            "string" == typeof W
              ? V.push(st(W, null))
              : W.data && V.push(st(W.data, W.mode)),
            V
          );
        }, []);
      }),
        (w.fromString = function (Q, V) {
          const ct = (function K(J) {
              const Q = [];
              for (let V = 0; V < J.length; V++) {
                const W = J[V];
                switch (W.mode) {
                  case m.NUMERIC:
                    Q.push([
                      W,
                      { data: W.data, mode: m.ALPHANUMERIC, length: W.length },
                      { data: W.data, mode: m.BYTE, length: W.length },
                    ]);
                    break;
                  case m.ALPHANUMERIC:
                    Q.push([
                      W,
                      { data: W.data, mode: m.BYTE, length: W.length },
                    ]);
                    break;
                  case m.KANJI:
                    Q.push([
                      W,
                      { data: W.data, mode: m.BYTE, length: I(W.data) },
                    ]);
                    break;
                  case m.BYTE:
                    Q.push([{ data: W.data, mode: m.BYTE, length: I(W.data) }]);
                }
              }
              return Q;
            })(q(Q, x.isKanjiModeEnabled())),
            mt = (function it(J, Q) {
              const V = {},
                W = { start: {} };
              let ct = ["start"];
              for (let mt = 0; mt < J.length; mt++) {
                const N = J[mt],
                  H = [];
                for (let j = 0; j < N.length; j++) {
                  const k = N[j],
                    Y = "" + mt + j;
                  H.push(Y), (V[Y] = { node: k, lastCount: 0 }), (W[Y] = {});
                  for (let U = 0; U < ct.length; U++) {
                    const P = ct[U];
                    V[P] && V[P].node.mode === k.mode
                      ? ((W[P][Y] =
                          M(V[P].lastCount + k.length, k.mode) -
                          M(V[P].lastCount, k.mode)),
                        (V[P].lastCount += k.length))
                      : (V[P] && (V[P].lastCount = k.length),
                        (W[P][Y] =
                          M(k.length, k.mode) +
                          4 +
                          m.getCharCountIndicator(k.mode, Q)));
                  }
                }
                ct = H;
              }
              for (let mt = 0; mt < ct.length; mt++) W[ct[mt]].end = 0;
              return { map: W, table: V };
            })(ct, V),
            N = g.find_path(mt.map, "start", "end"),
            H = [];
          for (let j = 1; j < N.length - 1; j++) H.push(mt.table[N[j]].node);
          return w.fromArray(
            (function B(J) {
              return J.reduce(function (Q, V) {
                const W = Q.length - 1 >= 0 ? Q[Q.length - 1] : null;
                return W && W.mode === V.mode
                  ? ((Q[Q.length - 1].data += V.data), Q)
                  : (Q.push(V), Q);
              }, []);
            })(H)
          );
        }),
        (w.rawSplit = function (Q) {
          return w.fromArray(q(Q, x.isKanjiModeEnabled()));
        });
    },
    1825: (X, w) => {
      let y;
      const m = [
        0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581,
        655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828,
        1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532,
        3706,
      ];
      (w.getSymbolSize = function (h) {
        if (!h) throw new Error('"version" cannot be null or undefined');
        if (h < 1 || h > 40)
          throw new Error('"version" should be in range from 1 to 40');
        return 4 * h + 17;
      }),
        (w.getSymbolTotalCodewords = function (h) {
          return m[h];
        }),
        (w.getBCHDigit = function (f) {
          let h = 0;
          for (; 0 !== f; ) h++, (f >>>= 1);
          return h;
        }),
        (w.setToSJISFunction = function (h) {
          if ("function" != typeof h)
            throw new Error('"toSJISFunc" is not a valid function.');
          y = h;
        }),
        (w.isKanjiModeEnabled = function () {
          return typeof y < "u";
        }),
        (w.toSJIS = function (h) {
          return y(h);
        });
    },
    8277: (X, w) => {
      w.isValid = function (m) {
        return !isNaN(m) && m >= 1 && m <= 40;
      };
    },
    6184: (X, w, y) => {
      const m = y(1825),
        f = y(1101),
        h = y(2785),
        u = y(9713),
        p = y(8277),
        x = m.getBCHDigit(7973);
      function I(M, B) {
        return u.getCharCountIndicator(M, B) + 4;
      }
      function G(M, B) {
        let K = 0;
        return (
          M.forEach(function (it) {
            const st = I(it.mode, B);
            K += st + it.getBitsLength();
          }),
          K
        );
      }
      (w.from = function (B, K) {
        return p.isValid(B) ? parseInt(B, 10) : K;
      }),
        (w.getCapacity = function (B, K, it) {
          if (!p.isValid(B)) throw new Error("Invalid QR Code version");
          typeof it > "u" && (it = u.BYTE);
          const Q =
            8 * (m.getSymbolTotalCodewords(B) - f.getTotalCodewordsCount(B, K));
          if (it === u.MIXED) return Q;
          const V = Q - I(it, B);
          switch (it) {
            case u.NUMERIC:
              return Math.floor((V / 10) * 3);
            case u.ALPHANUMERIC:
              return Math.floor((V / 11) * 2);
            case u.KANJI:
              return Math.floor(V / 13);
            default:
              return Math.floor(V / 8);
          }
        }),
        (w.getBestVersionForData = function (B, K) {
          let it;
          const st = h.from(K, h.M);
          if (Array.isArray(B)) {
            if (B.length > 1)
              return (function q(M, B) {
                for (let K = 1; K <= 40; K++)
                  if (G(M, K) <= w.getCapacity(K, B, u.MIXED)) return K;
              })(B, st);
            if (0 === B.length) return 1;
            it = B[0];
          } else it = B;
          return (function g(M, B, K) {
            for (let it = 1; it <= 40; it++)
              if (B <= w.getCapacity(it, K, M)) return it;
          })(it.mode, it.getLength(), st);
        }),
        (w.getEncodedBits = function (B) {
          if (!p.isValid(B) || B < 7)
            throw new Error("Invalid QR Code version");
          let K = B << 12;
          for (; m.getBCHDigit(K) - x >= 0; )
            K ^= 7973 << (m.getBCHDigit(K) - x);
          return (B << 12) | K;
        });
    },
    3500: (X, w, y) => {
      const m = y(4596);
      (w.render = function (p, v, x) {
        let g = x,
          I = v;
        typeof g > "u" && (!v || !v.getContext) && ((g = v), (v = void 0)),
          v ||
            (I = (function h() {
              try {
                return document.createElement("canvas");
              } catch {
                throw new Error("You need to specify a canvas element");
              }
            })()),
          (g = m.getOptions(g));
        const G = m.getImageWidth(p.modules.size, g),
          q = I.getContext("2d"),
          M = q.createImageData(G, G);
        return (
          m.qrToImageData(M.data, p, g),
          (function f(u, p, v) {
            u.clearRect(0, 0, p.width, p.height),
              p.style || (p.style = {}),
              (p.height = v),
              (p.width = v),
              (p.style.height = v + "px"),
              (p.style.width = v + "px");
          })(q, I, G),
          q.putImageData(M, 0, 0),
          I
        );
      }),
        (w.renderToDataURL = function (p, v, x) {
          let g = x;
          return (
            typeof g > "u" && (!v || !v.getContext) && ((g = v), (v = void 0)),
            g || (g = {}),
            w
              .render(p, v, g)
              .toDataURL(g.type || "image/png", (g.rendererOpts || {}).quality)
          );
        });
    },
    8872: (X, w, y) => {
      const m = y(4596);
      function f(p, v) {
        const x = p.a / 255,
          g = v + '="' + p.hex + '"';
        return x < 1
          ? g + " " + v + '-opacity="' + x.toFixed(2).slice(1) + '"'
          : g;
      }
      function h(p, v, x) {
        let g = p + v;
        return typeof x < "u" && (g += " " + x), g;
      }
      w.render = function (v, x, g) {
        const I = m.getOptions(x),
          G = v.modules.size,
          q = v.modules.data,
          M = G + 2 * I.margin,
          B = I.color.light.a
            ? "<path " +
              f(I.color.light, "fill") +
              ' d="M0 0h' +
              M +
              "v" +
              M +
              'H0z"/>'
            : "",
          K =
            "<path " +
            f(I.color.dark, "stroke") +
            ' d="' +
            (function u(p, v, x) {
              let g = "",
                I = 0,
                G = !1,
                q = 0;
              for (let M = 0; M < p.length; M++) {
                const B = Math.floor(M % v),
                  K = Math.floor(M / v);
                !B && !G && (G = !0),
                  p[M]
                    ? (q++,
                      (M > 0 && B > 0 && p[M - 1]) ||
                        ((g += G ? h("M", B + x, 0.5 + K + x) : h("m", I, 0)),
                        (I = 0),
                        (G = !1)),
                      (B + 1 < v && p[M + 1]) || ((g += h("h", q)), (q = 0)))
                    : I++;
              }
              return g;
            })(q, G, I.margin) +
            '"/>',
          J =
            '<svg xmlns="http://www.w3.org/2000/svg" ' +
            (I.width
              ? 'width="' + I.width + '" height="' + I.width + '" '
              : "") +
            'viewBox="0 0 ' +
            M +
            " " +
            M +
            '" shape-rendering="crispEdges">' +
            B +
            K +
            "</svg>\n";
        return "function" == typeof g && g(null, J), J;
      };
    },
    4596: (X, w) => {
      function y(m) {
        if (("number" == typeof m && (m = m.toString()), "string" != typeof m))
          throw new Error("Color should be defined as hex string");
        let f = m.slice().replace("#", "").split("");
        if (f.length < 3 || 5 === f.length || f.length > 8)
          throw new Error("Invalid hex color: " + m);
        (3 === f.length || 4 === f.length) &&
          (f = Array.prototype.concat.apply(
            [],
            f.map(function (u) {
              return [u, u];
            })
          )),
          6 === f.length && f.push("F", "F");
        const h = parseInt(f.join(""), 16);
        return {
          r: (h >> 24) & 255,
          g: (h >> 16) & 255,
          b: (h >> 8) & 255,
          a: 255 & h,
          hex: "#" + f.slice(0, 6).join(""),
        };
      }
      (w.getOptions = function (f) {
        f || (f = {}), f.color || (f.color = {});
        const u = f.width && f.width >= 21 ? f.width : void 0;
        return {
          width: u,
          scale: u ? 4 : f.scale || 4,
          margin:
            typeof f.margin > "u" || null === f.margin || f.margin < 0
              ? 4
              : f.margin,
          color: {
            dark: y(f.color.dark || "#000000ff"),
            light: y(f.color.light || "#ffffffff"),
          },
          type: f.type,
          rendererOpts: f.rendererOpts || {},
        };
      }),
        (w.getScale = function (f, h) {
          return h.width && h.width >= f + 2 * h.margin
            ? h.width / (f + 2 * h.margin)
            : h.scale;
        }),
        (w.getImageWidth = function (f, h) {
          const u = w.getScale(f, h);
          return Math.floor((f + 2 * h.margin) * u);
        }),
        (w.qrToImageData = function (f, h, u) {
          const p = h.modules.size,
            v = h.modules.data,
            x = w.getScale(p, u),
            g = Math.floor((p + 2 * u.margin) * x),
            I = u.margin * x,
            G = [u.color.light, u.color.dark];
          for (let q = 0; q < g; q++)
            for (let M = 0; M < g; M++) {
              let B = 4 * (q * g + M),
                K = u.color.light;
              q >= I &&
                M >= I &&
                q < g - I &&
                M < g - I &&
                (K =
                  G[
                    v[Math.floor((q - I) / x) * p + Math.floor((M - I) / x)]
                      ? 1
                      : 0
                  ]),
                (f[B++] = K.r),
                (f[B++] = K.g),
                (f[B++] = K.b),
                (f[B] = K.a);
            }
        });
    },
    8419: (X) => {
      "use strict";
      X.exports = function (y) {
        for (var m = [], f = y.length, h = 0; h < f; h++) {
          var u = y.charCodeAt(h);
          if (u >= 55296 && u <= 56319 && f > h + 1) {
            var p = y.charCodeAt(h + 1);
            p >= 56320 &&
              p <= 57343 &&
              ((u = 1024 * (u - 55296) + p - 56320 + 65536), (h += 1));
          }
          u < 128
            ? m.push(u)
            : u < 2048
            ? (m.push((u >> 6) | 192), m.push((63 & u) | 128))
            : u < 55296 || (u >= 57344 && u < 65536)
            ? (m.push((u >> 12) | 224),
              m.push(((u >> 6) & 63) | 128),
              m.push((63 & u) | 128))
            : u >= 65536 && u <= 1114111
            ? (m.push((u >> 18) | 240),
              m.push(((u >> 12) & 63) | 128),
              m.push(((u >> 6) & 63) | 128),
              m.push((63 & u) | 128))
            : m.push(239, 191, 189);
        }
        return new Uint8Array(m).buffer;
      };
    },
    6521: (X, w, y) => {
      "use strict";
      y.r(w),
        y.d(w, {
          W3mAccountButton: () => le,
          W3mConnectButton: () => Ht,
          W3mCoreButton: () => Rt,
          W3mModal: () => de,
          W3mNetworkSwitch: () => Zt,
          W3mQrCode: () => It,
        });
      var m = y(9671);
      const f = window,
        h =
          f.ShadowRoot &&
          (void 0 === f.ShadyCSS || f.ShadyCSS.nativeShadow) &&
          "adoptedStyleSheets" in Document.prototype &&
          "replace" in CSSStyleSheet.prototype,
        u = Symbol(),
        p = new WeakMap();
      class v {
        constructor(r, i, l) {
          if (((this._$cssResult$ = !0), l !== u))
            throw Error(
              "CSSResult is not constructable. Use `unsafeCSS` or `css` instead."
            );
          (this.cssText = r), (this.t = i);
        }
        get styleSheet() {
          let r = this.o;
          const i = this.t;
          if (h && void 0 === r) {
            const l = void 0 !== i && 1 === i.length;
            l && (r = p.get(i)),
              void 0 === r &&
                ((this.o = r = new CSSStyleSheet()).replaceSync(this.cssText),
                l && p.set(i, r));
          }
          return r;
        }
        toString() {
          return this.cssText;
        }
      }
      const g = (n, ...r) => {
          const i =
            1 === n.length
              ? n[0]
              : r.reduce(
                  (l, a, s) =>
                    l +
                    ((c) => {
                      if (!0 === c._$cssResult$) return c.cssText;
                      if ("number" == typeof c) return c;
                      throw Error(
                        "Value passed to 'css' function must be a 'css' function result: " +
                          c +
                          ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security."
                      );
                    })(a) +
                    n[s + 1],
                  n[0]
                );
          return new v(i, n, u);
        },
        G = h
          ? (n) => n
          : (n) =>
              n instanceof CSSStyleSheet
                ? ((r) => {
                    let i = "";
                    for (const l of r.cssRules) i += l.cssText;
                    return ((n) =>
                      new v("string" == typeof n ? n : n + "", void 0, u))(i);
                  })(n)
                : n;
      var q;
      const M = window,
        B = M.trustedTypes,
        K = B ? B.emptyScript : "",
        it = M.reactiveElementPolyfillSupport,
        st = {
          toAttribute(n, r) {
            switch (r) {
              case Boolean:
                n = n ? K : null;
                break;
              case Object:
              case Array:
                n = null == n ? n : JSON.stringify(n);
            }
            return n;
          },
          fromAttribute(n, r) {
            let i = n;
            switch (r) {
              case Boolean:
                i = null !== n;
                break;
              case Number:
                i = null === n ? null : Number(n);
                break;
              case Object:
              case Array:
                try {
                  i = JSON.parse(n);
                } catch {
                  i = null;
                }
            }
            return i;
          },
        },
        J = (n, r) => r !== n && (r == r || n == n),
        Q = {
          attribute: !0,
          type: String,
          converter: st,
          reflect: !1,
          hasChanged: J,
        },
        V = "finalized";
      class W extends HTMLElement {
        constructor() {
          super(),
            (this._$Ei = new Map()),
            (this.isUpdatePending = !1),
            (this.hasUpdated = !1),
            (this._$El = null),
            this.u();
        }
        static addInitializer(r) {
          var i;
          this.finalize(),
            (null !== (i = this.h) && void 0 !== i ? i : (this.h = [])).push(r);
        }
        static get observedAttributes() {
          this.finalize();
          const r = [];
          return (
            this.elementProperties.forEach((i, l) => {
              const a = this._$Ep(l, i);
              void 0 !== a && (this._$Ev.set(a, l), r.push(a));
            }),
            r
          );
        }
        static createProperty(r, i = Q) {
          if (
            (i.state && (i.attribute = !1),
            this.finalize(),
            this.elementProperties.set(r, i),
            !i.noAccessor && !this.prototype.hasOwnProperty(r))
          ) {
            const l = "symbol" == typeof r ? Symbol() : "__" + r,
              a = this.getPropertyDescriptor(r, l, i);
            void 0 !== a && Object.defineProperty(this.prototype, r, a);
          }
        }
        static getPropertyDescriptor(r, i, l) {
          return {
            get() {
              return this[i];
            },
            set(a) {
              const s = this[r];
              (this[i] = a), this.requestUpdate(r, s, l);
            },
            configurable: !0,
            enumerable: !0,
          };
        }
        static getPropertyOptions(r) {
          return this.elementProperties.get(r) || Q;
        }
        static finalize() {
          if (this.hasOwnProperty(V)) return !1;
          this[V] = !0;
          const r = Object.getPrototypeOf(this);
          if (
            (r.finalize(),
            void 0 !== r.h && (this.h = [...r.h]),
            (this.elementProperties = new Map(r.elementProperties)),
            (this._$Ev = new Map()),
            this.hasOwnProperty("properties"))
          ) {
            const i = this.properties,
              l = [
                ...Object.getOwnPropertyNames(i),
                ...Object.getOwnPropertySymbols(i),
              ];
            for (const a of l) this.createProperty(a, i[a]);
          }
          return (this.elementStyles = this.finalizeStyles(this.styles)), !0;
        }
        static finalizeStyles(r) {
          const i = [];
          if (Array.isArray(r)) {
            const l = new Set(r.flat(1 / 0).reverse());
            for (const a of l) i.unshift(G(a));
          } else void 0 !== r && i.push(G(r));
          return i;
        }
        static _$Ep(r, i) {
          const l = i.attribute;
          return !1 === l
            ? void 0
            : "string" == typeof l
            ? l
            : "string" == typeof r
            ? r.toLowerCase()
            : void 0;
        }
        u() {
          var r;
          (this._$E_ = new Promise((i) => (this.enableUpdating = i))),
            (this._$AL = new Map()),
            this._$Eg(),
            this.requestUpdate(),
            null === (r = this.constructor.h) ||
              void 0 === r ||
              r.forEach((i) => i(this));
        }
        addController(r) {
          var i, l;
          (null !== (i = this._$ES) && void 0 !== i
            ? i
            : (this._$ES = [])
          ).push(r),
            void 0 !== this.renderRoot &&
              this.isConnected &&
              (null === (l = r.hostConnected) || void 0 === l || l.call(r));
        }
        removeController(r) {
          var i;
          null === (i = this._$ES) ||
            void 0 === i ||
            i.splice(this._$ES.indexOf(r) >>> 0, 1);
        }
        _$Eg() {
          this.constructor.elementProperties.forEach((r, i) => {
            this.hasOwnProperty(i) &&
              (this._$Ei.set(i, this[i]), delete this[i]);
          });
        }
        createRenderRoot() {
          var r;
          const i =
            null !== (r = this.shadowRoot) && void 0 !== r
              ? r
              : this.attachShadow(this.constructor.shadowRootOptions);
          return (
            ((n, r) => {
              h
                ? (n.adoptedStyleSheets = r.map((i) =>
                    i instanceof CSSStyleSheet ? i : i.styleSheet
                  ))
                : r.forEach((i) => {
                    const l = document.createElement("style"),
                      a = f.litNonce;
                    void 0 !== a && l.setAttribute("nonce", a),
                      (l.textContent = i.cssText),
                      n.appendChild(l);
                  });
            })(i, this.constructor.elementStyles),
            i
          );
        }
        connectedCallback() {
          var r;
          void 0 === this.renderRoot &&
            (this.renderRoot = this.createRenderRoot()),
            this.enableUpdating(!0),
            null === (r = this._$ES) ||
              void 0 === r ||
              r.forEach((i) => {
                var l;
                return null === (l = i.hostConnected) || void 0 === l
                  ? void 0
                  : l.call(i);
              });
        }
        enableUpdating(r) {}
        disconnectedCallback() {
          var r;
          null === (r = this._$ES) ||
            void 0 === r ||
            r.forEach((i) => {
              var l;
              return null === (l = i.hostDisconnected) || void 0 === l
                ? void 0
                : l.call(i);
            });
        }
        attributeChangedCallback(r, i, l) {
          this._$AK(r, l);
        }
        _$EO(r, i, l = Q) {
          var a;
          const s = this.constructor._$Ep(r, l);
          if (void 0 !== s && !0 === l.reflect) {
            const c = (
              void 0 !==
              (null === (a = l.converter) || void 0 === a
                ? void 0
                : a.toAttribute)
                ? l.converter
                : st
            ).toAttribute(i, l.type);
            (this._$El = r),
              null == c ? this.removeAttribute(s) : this.setAttribute(s, c),
              (this._$El = null);
          }
        }
        _$AK(r, i) {
          var l;
          const a = this.constructor,
            s = a._$Ev.get(r);
          if (void 0 !== s && this._$El !== s) {
            const c = a.getPropertyOptions(s),
              $ =
                "function" == typeof c.converter
                  ? { fromAttribute: c.converter }
                  : void 0 !==
                    (null === (l = c.converter) || void 0 === l
                      ? void 0
                      : l.fromAttribute)
                  ? c.converter
                  : st;
            (this._$El = s),
              (this[s] = $.fromAttribute(i, c.type)),
              (this._$El = null);
          }
        }
        requestUpdate(r, i, l) {
          let a = !0;
          void 0 !== r &&
            ((
              (l = l || this.constructor.getPropertyOptions(r)).hasChanged || J
            )(this[r], i)
              ? (this._$AL.has(r) || this._$AL.set(r, i),
                !0 === l.reflect &&
                  this._$El !== r &&
                  (void 0 === this._$EC && (this._$EC = new Map()),
                  this._$EC.set(r, l)))
              : (a = !1)),
            !this.isUpdatePending && a && (this._$E_ = this._$Ej());
        }
        _$Ej() {
          var r = this;
          return (0, m.Z)(function* () {
            r.isUpdatePending = !0;
            try {
              yield r._$E_;
            } catch (l) {
              Promise.reject(l);
            }
            const i = r.scheduleUpdate();
            return null != i && (yield i), !r.isUpdatePending;
          })();
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          var r;
          if (!this.isUpdatePending) return;
          this._$Ei &&
            (this._$Ei.forEach((a, s) => (this[s] = a)), (this._$Ei = void 0));
          let i = !1;
          const l = this._$AL;
          try {
            (i = this.shouldUpdate(l)),
              i
                ? (this.willUpdate(l),
                  null === (r = this._$ES) ||
                    void 0 === r ||
                    r.forEach((a) => {
                      var s;
                      return null === (s = a.hostUpdate) || void 0 === s
                        ? void 0
                        : s.call(a);
                    }),
                  this.update(l))
                : this._$Ek();
          } catch (a) {
            throw ((i = !1), this._$Ek(), a);
          }
          i && this._$AE(l);
        }
        willUpdate(r) {}
        _$AE(r) {
          var i;
          null === (i = this._$ES) ||
            void 0 === i ||
            i.forEach((l) => {
              var a;
              return null === (a = l.hostUpdated) || void 0 === a
                ? void 0
                : a.call(l);
            }),
            this.hasUpdated || ((this.hasUpdated = !0), this.firstUpdated(r)),
            this.updated(r);
        }
        _$Ek() {
          (this._$AL = new Map()), (this.isUpdatePending = !1);
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$E_;
        }
        shouldUpdate(r) {
          return !0;
        }
        update(r) {
          void 0 !== this._$EC &&
            (this._$EC.forEach((i, l) => this._$EO(l, this[l], i)),
            (this._$EC = void 0)),
            this._$Ek();
        }
        updated(r) {}
        firstUpdated(r) {}
      }
      var ct;
      (W[V] = !0),
        (W.elementProperties = new Map()),
        (W.elementStyles = []),
        (W.shadowRootOptions = { mode: "open" }),
        it?.({ ReactiveElement: W }),
        (null !== (q = M.reactiveElementVersions) && void 0 !== q
          ? q
          : (M.reactiveElementVersions = [])
        ).push("1.6.2");
      const mt = window,
        N = mt.trustedTypes,
        H = N ? N.createPolicy("lit-html", { createHTML: (n) => n }) : void 0,
        j = "$lit$",
        k = `lit$${(Math.random() + "").slice(9)}$`,
        Y = "?" + k,
        U = `<${Y}>`,
        P = document,
        F = () => P.createComment(""),
        Z = (n) =>
          null === n || ("object" != typeof n && "function" != typeof n),
        $t = Array.isArray,
        me = "[ \t\n\f\r]",
        Tt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
        Me = /-->/g,
        Yt = />/g,
        xt = RegExp(
          `>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,
          "g"
        ),
        pe = /'/g,
        Jt = /"/g,
        Ne = /^(?:script|style|textarea|title)$/i,
        Qt =
          (n) =>
          (r, ...i) => ({ _$litType$: n, strings: r, values: i }),
        b = Qt(1),
        z = Qt(2),
        ft = Symbol.for("lit-noChange"),
        lt = Symbol.for("lit-nothing"),
        Xt = new WeakMap(),
        jt = P.createTreeWalker(P, 129, null, !1);
      class ge {
        constructor({ strings: r, _$litType$: i }, l) {
          let a;
          this.parts = [];
          let s = 0,
            c = 0;
          const $ = r.length - 1,
            C = this.parts,
            [A, nt] = ((n, r) => {
              const i = n.length - 1,
                l = [];
              let a,
                s = 2 === r ? "<svg>" : "",
                c = Tt;
              for (let C = 0; C < i; C++) {
                const A = n[C];
                let nt,
                  O,
                  T = -1,
                  rt = 0;
                for (
                  ;
                  rt < A.length &&
                  ((c.lastIndex = rt), (O = c.exec(A)), null !== O);

                )
                  (rt = c.lastIndex),
                    c === Tt
                      ? "!--" === O[1]
                        ? (c = Me)
                        : void 0 !== O[1]
                        ? (c = Yt)
                        : void 0 !== O[2]
                        ? (Ne.test(O[2]) && (a = RegExp("</" + O[2], "g")),
                          (c = xt))
                        : void 0 !== O[3] && (c = xt)
                      : c === xt
                      ? ">" === O[0]
                        ? ((c = a ?? Tt), (T = -1))
                        : void 0 === O[1]
                        ? (T = -2)
                        : ((T = c.lastIndex - O[2].length),
                          (nt = O[1]),
                          (c = void 0 === O[3] ? xt : '"' === O[3] ? Jt : pe))
                      : c === Jt || c === pe
                      ? (c = xt)
                      : c === Me || c === Yt
                      ? (c = Tt)
                      : ((c = xt), (a = void 0));
                const wt = c === xt && n[C + 1].startsWith("/>") ? " " : "";
                s +=
                  c === Tt
                    ? A + U
                    : T >= 0
                    ? (l.push(nt), A.slice(0, T) + j + A.slice(T) + k + wt)
                    : A + k + (-2 === T ? (l.push(void 0), C) : wt);
              }
              const $ = s + (n[i] || "<?>") + (2 === r ? "</svg>" : "");
              if (!Array.isArray(n) || !n.hasOwnProperty("raw"))
                throw Error("invalid template strings array");
              return [void 0 !== H ? H.createHTML($) : $, l];
            })(r, i);
          if (
            ((this.el = ge.createElement(A, l)),
            (jt.currentNode = this.el.content),
            2 === i)
          ) {
            const O = this.el.content,
              T = O.firstChild;
            T.remove(), O.append(...T.childNodes);
          }
          for (; null !== (a = jt.nextNode()) && C.length < $; ) {
            if (1 === a.nodeType) {
              if (a.hasAttributes()) {
                const O = [];
                for (const T of a.getAttributeNames())
                  if (T.endsWith(j) || T.startsWith(k)) {
                    const rt = nt[c++];
                    if ((O.push(T), void 0 !== rt)) {
                      const wt = a.getAttribute(rt.toLowerCase() + j).split(k),
                        at = /([.?@])?(.*)/.exec(rt);
                      C.push({
                        type: 1,
                        index: s,
                        name: at[2],
                        strings: wt,
                        ctor:
                          "." === at[1]
                            ? Hn
                            : "?" === at[1]
                            ? Zn
                            : "@" === at[1]
                            ? Fn
                            : fe,
                      });
                    } else C.push({ type: 6, index: s });
                  }
                for (const T of O) a.removeAttribute(T);
              }
              if (Ne.test(a.tagName)) {
                const O = a.textContent.split(k),
                  T = O.length - 1;
                if (T > 0) {
                  a.textContent = N ? N.emptyScript : "";
                  for (let rt = 0; rt < T; rt++)
                    a.append(O[rt], F()),
                      jt.nextNode(),
                      C.push({ type: 2, index: ++s });
                  a.append(O[T], F());
                }
              }
            } else if (8 === a.nodeType)
              if (a.data === Y) C.push({ type: 2, index: s });
              else {
                let O = -1;
                for (; -1 !== (O = a.data.indexOf(k, O + 1)); )
                  C.push({ type: 7, index: s }), (O += k.length - 1);
              }
            s++;
          }
        }
        static createElement(r, i) {
          const l = P.createElement("template");
          return (l.innerHTML = r), l;
        }
      }
      function Dt(n, r, i = n, l) {
        var a, s, c, $;
        if (r === ft) return r;
        let C =
          void 0 !== l
            ? null === (a = i._$Co) || void 0 === a
              ? void 0
              : a[l]
            : i._$Cl;
        const A = Z(r) ? void 0 : r._$litDirective$;
        return (
          C?.constructor !== A &&
            (null === (s = C?._$AO) || void 0 === s || s.call(C, !1),
            void 0 === A ? (C = void 0) : ((C = new A(n)), C._$AT(n, i, l)),
            void 0 !== l
              ? ((null !== (c = ($ = i)._$Co) && void 0 !== c
                  ? c
                  : ($._$Co = []))[l] = C)
              : (i._$Cl = C)),
          void 0 !== C && (r = Dt(n, C._$AS(n, r.values), C, l)),
          r
        );
      }
      class Vn {
        constructor(r, i) {
          (this._$AV = []),
            (this._$AN = void 0),
            (this._$AD = r),
            (this._$AM = i);
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(r) {
          var i;
          const {
              el: { content: l },
              parts: a,
            } = this._$AD,
            s = (
              null !== (i = r?.creationScope) && void 0 !== i ? i : P
            ).importNode(l, !0);
          jt.currentNode = s;
          let c = jt.nextNode(),
            $ = 0,
            C = 0,
            A = a[0];
          for (; void 0 !== A; ) {
            if ($ === A.index) {
              let nt;
              2 === A.type
                ? (nt = new qt(c, c.nextSibling, this, r))
                : 1 === A.type
                ? (nt = new A.ctor(c, A.name, A.strings, this, r))
                : 6 === A.type && (nt = new Gn(c, this, r)),
                this._$AV.push(nt),
                (A = a[++C]);
            }
            $ !== A?.index && ((c = jt.nextNode()), $++);
          }
          return (jt.currentNode = P), s;
        }
        v(r) {
          let i = 0;
          for (const l of this._$AV)
            void 0 !== l &&
              (void 0 !== l.strings
                ? (l._$AI(r, l, i), (i += l.strings.length - 2))
                : l._$AI(r[i])),
              i++;
        }
      }
      class qt {
        constructor(r, i, l, a) {
          var s;
          (this.type = 2),
            (this._$AH = lt),
            (this._$AN = void 0),
            (this._$AA = r),
            (this._$AB = i),
            (this._$AM = l),
            (this.options = a),
            (this._$Cp = null === (s = a?.isConnected) || void 0 === s || s);
        }
        get _$AU() {
          var r, i;
          return null !==
            (i = null === (r = this._$AM) || void 0 === r ? void 0 : r._$AU) &&
            void 0 !== i
            ? i
            : this._$Cp;
        }
        get parentNode() {
          let r = this._$AA.parentNode;
          const i = this._$AM;
          return void 0 !== i && 11 === r?.nodeType && (r = i.parentNode), r;
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(r, i = this) {
          (r = Dt(this, r, i)),
            Z(r)
              ? r === lt || null == r || "" === r
                ? (this._$AH !== lt && this._$AR(), (this._$AH = lt))
                : r !== this._$AH && r !== ft && this._(r)
              : void 0 !== r._$litType$
              ? this.g(r)
              : void 0 !== r.nodeType
              ? this.$(r)
              : ((n) => $t(n) || "function" == typeof n?.[Symbol.iterator])(r)
              ? this.T(r)
              : this._(r);
        }
        k(r) {
          return this._$AA.parentNode.insertBefore(r, this._$AB);
        }
        $(r) {
          this._$AH !== r && (this._$AR(), (this._$AH = this.k(r)));
        }
        _(r) {
          this._$AH !== lt && Z(this._$AH)
            ? (this._$AA.nextSibling.data = r)
            : this.$(P.createTextNode(r)),
            (this._$AH = r);
        }
        g(r) {
          var i;
          const { values: l, _$litType$: a } = r,
            s =
              "number" == typeof a
                ? this._$AC(r)
                : (void 0 === a.el &&
                    (a.el = ge.createElement(a.h, this.options)),
                  a);
          if (
            (null === (i = this._$AH) || void 0 === i ? void 0 : i._$AD) === s
          )
            this._$AH.v(l);
          else {
            const c = new Vn(s, this),
              $ = c.u(this.options);
            c.v(l), this.$($), (this._$AH = c);
          }
        }
        _$AC(r) {
          let i = Xt.get(r.strings);
          return void 0 === i && Xt.set(r.strings, (i = new ge(r))), i;
        }
        T(r) {
          $t(this._$AH) || ((this._$AH = []), this._$AR());
          const i = this._$AH;
          let l,
            a = 0;
          for (const s of r)
            a === i.length
              ? i.push(
                  (l = new qt(this.k(F()), this.k(F()), this, this.options))
                )
              : (l = i[a]),
              l._$AI(s),
              a++;
          a < i.length &&
            (this._$AR(l && l._$AB.nextSibling, a), (i.length = a));
        }
        _$AR(r = this._$AA.nextSibling, i) {
          var l;
          for (
            null === (l = this._$AP) || void 0 === l || l.call(this, !1, !0, i);
            r && r !== this._$AB;

          ) {
            const a = r.nextSibling;
            r.remove(), (r = a);
          }
        }
        setConnected(r) {
          var i;
          void 0 === this._$AM &&
            ((this._$Cp = r),
            null === (i = this._$AP) || void 0 === i || i.call(this, r));
        }
      }
      class fe {
        constructor(r, i, l, a, s) {
          (this.type = 1),
            (this._$AH = lt),
            (this._$AN = void 0),
            (this.element = r),
            (this.name = i),
            (this._$AM = a),
            (this.options = s),
            l.length > 2 || "" !== l[0] || "" !== l[1]
              ? ((this._$AH = Array(l.length - 1).fill(new String())),
                (this.strings = l))
              : (this._$AH = lt);
        }
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(r, i = this, l, a) {
          const s = this.strings;
          let c = !1;
          if (void 0 === s)
            (r = Dt(this, r, i, 0)),
              (c = !Z(r) || (r !== this._$AH && r !== ft)),
              c && (this._$AH = r);
          else {
            const $ = r;
            let C, A;
            for (r = s[0], C = 0; C < s.length - 1; C++)
              (A = Dt(this, $[l + C], i, C)),
                A === ft && (A = this._$AH[C]),
                c || (c = !Z(A) || A !== this._$AH[C]),
                A === lt ? (r = lt) : r !== lt && (r += (A ?? "") + s[C + 1]),
                (this._$AH[C] = A);
          }
          c && !a && this.j(r);
        }
        j(r) {
          r === lt
            ? this.element.removeAttribute(this.name)
            : this.element.setAttribute(this.name, r ?? "");
        }
      }
      class Hn extends fe {
        constructor() {
          super(...arguments), (this.type = 3);
        }
        j(r) {
          this.element[this.name] = r === lt ? void 0 : r;
        }
      }
      const Br = N ? N.emptyScript : "";
      class Zn extends fe {
        constructor() {
          super(...arguments), (this.type = 4);
        }
        j(r) {
          r && r !== lt
            ? this.element.setAttribute(this.name, Br)
            : this.element.removeAttribute(this.name);
        }
      }
      class Fn extends fe {
        constructor(r, i, l, a, s) {
          super(r, i, l, a, s), (this.type = 5);
        }
        _$AI(r, i = this) {
          var l;
          if (
            (r = null !== (l = Dt(this, r, i, 0)) && void 0 !== l ? l : lt) ===
            ft
          )
            return;
          const a = this._$AH,
            s =
              (r === lt && a !== lt) ||
              r.capture !== a.capture ||
              r.once !== a.once ||
              r.passive !== a.passive,
            c = r !== lt && (a === lt || s);
          s && this.element.removeEventListener(this.name, this, a),
            c && this.element.addEventListener(this.name, this, r),
            (this._$AH = r);
        }
        handleEvent(r) {
          var i, l;
          "function" == typeof this._$AH
            ? this._$AH.call(
                null !==
                  (l =
                    null === (i = this.options) || void 0 === i
                      ? void 0
                      : i.host) && void 0 !== l
                  ? l
                  : this.element,
                r
              )
            : this._$AH.handleEvent(r);
        }
      }
      class Gn {
        constructor(r, i, l) {
          (this.element = r),
            (this.type = 6),
            (this._$AN = void 0),
            (this._$AM = i),
            (this.options = l);
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(r) {
          Dt(this, r);
        }
      }
      var nn, rn;
      (0, mt.litHtmlPolyfillSupport)?.(ge, qt),
        (null !== (ct = mt.litHtmlVersions) && void 0 !== ct
          ? ct
          : (mt.litHtmlVersions = [])
        ).push("2.7.4");
      class S extends W {
        constructor() {
          super(...arguments),
            (this.renderOptions = { host: this }),
            (this._$Do = void 0);
        }
        createRenderRoot() {
          var r, i;
          const l = super.createRenderRoot();
          return (
            (null !== (r = (i = this.renderOptions).renderBefore) &&
              void 0 !== r) ||
              (i.renderBefore = l.firstChild),
            l
          );
        }
        update(r) {
          const i = this.render();
          this.hasUpdated ||
            (this.renderOptions.isConnected = this.isConnected),
            super.update(r),
            (this._$Do = ((n, r, i) => {
              var l, a;
              const s = null !== (l = i?.renderBefore) && void 0 !== l ? l : r;
              let c = s._$litPart$;
              if (void 0 === c) {
                const $ =
                  null !== (a = i?.renderBefore) && void 0 !== a ? a : null;
                s._$litPart$ = c = new qt(
                  r.insertBefore(F(), $),
                  $,
                  void 0,
                  i ?? {}
                );
              }
              return c._$AI(n), c;
            })(i, this.renderRoot, this.renderOptions));
        }
        connectedCallback() {
          var r;
          super.connectedCallback(),
            null === (r = this._$Do) || void 0 === r || r.setConnected(!0);
        }
        disconnectedCallback() {
          var r;
          super.disconnectedCallback(),
            null === (r = this._$Do) || void 0 === r || r.setConnected(!1);
        }
        render() {
          return ft;
        }
      }
      (S.finalized = !0),
        (S._$litElement$ = !0),
        null === (nn = globalThis.litElementHydrateSupport) ||
          void 0 === nn ||
          nn.call(globalThis, { LitElement: S }),
        (0, globalThis.litElementPolyfillSupport)?.({ LitElement: S }),
        (null !== (rn = globalThis.litElementVersions) && void 0 !== rn
          ? rn
          : (globalThis.litElementVersions = [])
        ).push("3.3.2");
      const R = (n) => (r) => {
          return "function" == typeof r
            ? ((l = r), customElements.define(n, l), l)
            : ((i, l) => {
                const { kind: a, elements: s } = l;
                return {
                  kind: a,
                  elements: s,
                  finisher(c) {
                    customElements.define(i, c);
                  },
                };
              })(n, r);
          var l;
        },
        Ur = (n, r) =>
          "method" === r.kind && r.descriptor && !("value" in r.descriptor)
            ? {
                ...r,
                finisher(i) {
                  i.createProperty(r.key, n);
                },
              }
            : {
                kind: "field",
                key: Symbol(),
                placement: "own",
                descriptor: {},
                originalKey: r.key,
                initializer() {
                  "function" == typeof r.initializer &&
                    (this[r.key] = r.initializer.call(this));
                },
                finisher(i) {
                  i.createProperty(r.key, n);
                },
              },
        zr = (n, r, i) => {
          r.constructor.createProperty(i, n);
        };
      function _(n) {
        return (r, i) => (void 0 !== i ? zr(n, r, i) : Ur(n, r));
      }
      function et(n) {
        return _({ ...n, state: !0 });
      }
      window;
      var d = y(2768);
      class Fr {
        constructor(r) {}
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(r, i, l) {
          (this._$Ct = r), (this._$AM = i), (this._$Ci = l);
        }
        _$AS(r, i) {
          return this.update(r, i);
        }
        update(r, i) {
          return this.render(...i);
        }
      }
      const vt =
          ((n = class extends Fr {
            constructor(n) {
              var r;
              if (
                (super(n),
                1 !== n.type ||
                  "class" !== n.name ||
                  (null === (r = n.strings) || void 0 === r
                    ? void 0
                    : r.length) > 2)
              )
                throw Error(
                  "`classMap()` can only be used in the `class` attribute and must be the only part in the attribute."
                );
            }
            render(n) {
              return (
                " " +
                Object.keys(n)
                  .filter((r) => n[r])
                  .join(" ") +
                " "
              );
            }
            update(n, [r]) {
              var i, l;
              if (void 0 === this.it) {
                (this.it = new Set()),
                  void 0 !== n.strings &&
                    (this.nt = new Set(
                      n.strings
                        .join(" ")
                        .split(/\s/)
                        .filter((s) => "" !== s)
                    ));
                for (const s in r)
                  r[s] &&
                    (null === (i = this.nt) || void 0 === i || !i.has(s)) &&
                    this.it.add(s);
                return this.render(r);
              }
              const a = n.element.classList;
              this.it.forEach((s) => {
                s in r || (a.remove(s), this.it.delete(s));
              });
              for (const s in r) {
                const c = !!r[s];
                c === this.it.has(s) ||
                  (null !== (l = this.nt) && void 0 !== l && l.has(s)) ||
                  (c
                    ? (a.add(s), this.it.add(s))
                    : (a.remove(s), this.it.delete(s)));
              }
              return ft;
            }
          }),
          (...r) => ({ _$litDirective$: n, values: r })),
        Ct = {
          duration: 0.3,
          delay: 0,
          endDelay: 0,
          repeat: 0,
          easing: "ease",
        },
        we = { ms: (n) => 1e3 * n, s: (n) => n / 1e3 },
        Jn = () => {},
        Pt = (n) => n;
      var n;
      function Qn(n, r = !0) {
        if (n && "finished" !== n.playState)
          try {
            n.stop ? n.stop() : (r && n.commitStyles(), n.cancel());
          } catch {}
      }
      const Gr = (n) => n(),
        Xn = (n, r, i = Ct.duration) =>
          new Proxy(
            { animations: n.map(Gr).filter(Boolean), duration: i, options: r },
            Yr
          ),
        Yr = {
          get: (n, r) => {
            const i = ((n) => n.animations[0])(n);
            switch (r) {
              case "duration":
                return n.duration;
              case "currentTime":
                return we.s(i?.[r] || 0);
              case "playbackRate":
              case "playState":
                return i?.[r];
              case "finished":
                return (
                  n.finished ||
                    (n.finished = Promise.all(n.animations.map(Jr)).catch(Jn)),
                  n.finished
                );
              case "stop":
                return () => {
                  n.animations.forEach((l) => Qn(l));
                };
              case "forEachNative":
                return (l) => {
                  n.animations.forEach((a) => l(a, n));
                };
              default:
                return typeof i?.[r] > "u"
                  ? void 0
                  : () => n.animations.forEach((l) => l[r]());
            }
          },
          set: (n, r, i) => {
            switch (r) {
              case "currentTime":
                i = we.ms(i);
              case "currentTime":
              case "playbackRate":
                for (let l = 0; l < n.animations.length; l++)
                  n.animations[l][r] = i;
                return !0;
            }
            return !1;
          },
        },
        Jr = (n) => n.finished,
        an = (n) => "object" == typeof n && Boolean(n.createAnimation),
        Se = (n) => "number" == typeof n,
        te = (n) => Array.isArray(n) && !Se(n[0]),
        qn = (n, r, i) => -i * n + i * r + n,
        ln = (n, r, i) => (r - n == 0 ? 1 : (i - n) / (r - n));
      function tr(n, r) {
        const i = n[n.length - 1];
        for (let l = 1; l <= r; l++) {
          const a = ln(0, r, l);
          n.push(qn(i, 1, a));
        }
      }
      const Xr = (n, r, i) => {
          const l = r - n;
          return ((((i - n) % l) + l) % l) + n;
        },
        er = (n, r, i) => Math.min(Math.max(i, n), r);
      const nr = (n, r, i) =>
          (((1 - 3 * i + 3 * r) * n + (3 * i - 6 * r)) * n + 3 * r) * n,
        ei = 1e-7,
        ni = 12;
      function ve(n, r, i, l) {
        if (n === r && i === l) return Pt;
        return (s) =>
          0 === s || 1 === s
            ? s
            : nr(
                ((s) =>
                  (function ri(n, r, i, l, a) {
                    let s,
                      c,
                      $ = 0;
                    do {
                      (c = r + (i - r) / 2),
                        (s = nr(c, l, a) - n),
                        s > 0 ? (i = c) : (r = c);
                    } while (Math.abs(s) > ei && ++$ < ni);
                    return c;
                  })(s, 0, 1, n, i))(s),
                r,
                l
              );
      }
      const ii =
          (n, r = "end") =>
          (i) => {
            const l =
                (i = "end" === r ? Math.min(i, 0.999) : Math.max(i, 0.001)) * n,
              a = "end" === r ? Math.floor(l) : Math.ceil(l);
            return er(0, 1, a / n);
          },
        ee = (n) => "function" == typeof n,
        rr = (n) => Array.isArray(n) && Se(n[0]),
        ir = {
          ease: ve(0.25, 0.1, 0.25, 1),
          "ease-in": ve(0.42, 0, 1, 1),
          "ease-in-out": ve(0.42, 0, 0.58, 1),
          "ease-out": ve(0, 0, 0.58, 1),
        },
        oi = /\((.*?)\)/;
      function or(n) {
        if (ee(n)) return n;
        if (rr(n)) return ve(...n);
        if (ir[n]) return ir[n];
        if (n.startsWith("steps")) {
          const r = oi.exec(n);
          if (r) {
            const i = r[1].split(",");
            return ii(parseFloat(i[0]), i[1].trim());
          }
        }
        return Pt;
      }
      class ar {
        constructor(
          r,
          i = [0, 1],
          {
            easing: l,
            duration: a = Ct.duration,
            delay: s = Ct.delay,
            endDelay: c = Ct.endDelay,
            repeat: $ = Ct.repeat,
            offset: C,
            direction: A = "normal",
          } = {}
        ) {
          if (
            ((this.startTime = null),
            (this.rate = 1),
            (this.t = 0),
            (this.cancelTimestamp = null),
            (this.easing = Pt),
            (this.duration = 0),
            (this.totalDuration = 0),
            (this.repeat = 0),
            (this.playState = "idle"),
            (this.finished = new Promise((O, T) => {
              (this.resolve = O), (this.reject = T);
            })),
            an((l = l || Ct.easing)))
          ) {
            const O = l.createAnimation(i);
            (l = O.easing), (i = O.keyframes || i), (a = O.duration || a);
          }
          (this.repeat = $),
            (this.easing = te(l) ? Pt : or(l)),
            this.updateDuration(a);
          const nt = (function ti(
            n,
            r = (function Qr(n) {
              const r = [0];
              return tr(r, n - 1), r;
            })(n.length),
            i = Pt
          ) {
            const l = n.length,
              a = l - r.length;
            return (
              a > 0 && tr(r, a),
              (s) => {
                let c = 0;
                for (; c < l - 2 && !(s < r[c + 1]); c++);
                let $ = er(0, 1, ln(r[c], r[c + 1], s));
                return (
                  ($ = (function qr(n, r) {
                    return te(n) ? n[Xr(0, n.length, r)] : n;
                  })(
                    i,
                    c
                  )($)),
                  qn(n[c], n[c + 1], $)
                );
              }
            );
          })(i, C, te(l) ? l.map(or) : Pt);
          (this.tick = (O) => {
            var T;
            let rt = 0;
            (rt =
              void 0 !== this.pauseTime
                ? this.pauseTime
                : (O - this.startTime) * this.rate),
              (this.t = rt),
              (rt /= 1e3),
              (rt = Math.max(rt - s, 0)),
              "finished" === this.playState &&
                void 0 === this.pauseTime &&
                (rt = this.totalDuration);
            const wt = rt / this.duration;
            let at = Math.floor(wt),
              tt = wt % 1;
            !tt && wt >= 1 && (tt = 1), 1 === tt && at--;
            const pt = at % 2;
            ("reverse" === A ||
              ("alternate" === A && pt) ||
              ("alternate-reverse" === A && !pt)) &&
              (tt = 1 - tt);
            const ot = rt >= this.totalDuration ? 1 : Math.min(tt, 1),
              ht = nt(this.easing(ot));
            r(ht),
              void 0 === this.pauseTime &&
              ("finished" === this.playState || rt >= this.totalDuration + c)
                ? ((this.playState = "finished"),
                  null === (T = this.resolve) ||
                    void 0 === T ||
                    T.call(this, ht))
                : "idle" !== this.playState &&
                  (this.frameRequestId = requestAnimationFrame(this.tick));
          }),
            this.play();
        }
        play() {
          const r = performance.now();
          (this.playState = "running"),
            void 0 !== this.pauseTime
              ? (this.startTime = r - this.pauseTime)
              : this.startTime || (this.startTime = r),
            (this.cancelTimestamp = this.startTime),
            (this.pauseTime = void 0),
            (this.frameRequestId = requestAnimationFrame(this.tick));
        }
        pause() {
          (this.playState = "paused"), (this.pauseTime = this.t);
        }
        finish() {
          (this.playState = "finished"), this.tick(0);
        }
        stop() {
          var r;
          (this.playState = "idle"),
            void 0 !== this.frameRequestId &&
              cancelAnimationFrame(this.frameRequestId),
            null === (r = this.reject) || void 0 === r || r.call(this, !1);
        }
        cancel() {
          this.stop(), this.tick(this.cancelTimestamp);
        }
        reverse() {
          this.rate *= -1;
        }
        commitStyles() {}
        updateDuration(r) {
          (this.duration = r), (this.totalDuration = r * (this.repeat + 1));
        }
        get currentTime() {
          return this.t;
        }
        set currentTime(r) {
          void 0 !== this.pauseTime || 0 === this.rate
            ? (this.pauseTime = r)
            : (this.startTime = performance.now() - r / this.rate);
        }
        get playbackRate() {
          return this.rate;
        }
        set playbackRate(r) {
          this.rate = r;
        }
      }
      class ai {
        setAnimation(r) {
          (this.animation = r),
            r?.finished.then(() => this.clearAnimation()).catch(() => {});
        }
        clearAnimation() {
          this.animation = this.generator = void 0;
        }
      }
      const sn = new WeakMap();
      function sr(n) {
        return (
          sn.has(n) || sn.set(n, { transforms: [], values: new Map() }),
          sn.get(n)
        );
      }
      const ci = ["", "X", "Y", "Z"],
        Re = { x: "translateX", y: "translateY", z: "translateZ" },
        cr = {
          syntax: "<angle>",
          initialValue: "0deg",
          toDefaultUnit: (n) => n + "deg",
        },
        hi = {
          translate: {
            syntax: "<length-percentage>",
            initialValue: "0px",
            toDefaultUnit: (n) => n + "px",
          },
          rotate: cr,
          scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: Pt },
          skew: cr,
        },
        be = new Map(),
        cn = (n) => `--motion-${n}`,
        Le = ["x", "y", "z"];
      ["translate", "scale", "rotate", "skew"].forEach((n) => {
        ci.forEach((r) => {
          Le.push(n + r), be.set(cn(n + r), hi[n]);
        });
      });
      const ui = (n, r) => Le.indexOf(n) - Le.indexOf(r),
        mi = new Set(Le),
        dr = (n) => mi.has(n),
        pi = (n, r) => {
          Re[r] && (r = Re[r]);
          const { transforms: i } = sr(n);
          (function si(n, r) {
            -1 === n.indexOf(r) && n.push(r);
          })(i, r),
            (n.style.transform = gi(i));
        },
        gi = (n) => n.sort(ui).reduce(fi, "").trim(),
        fi = (n, r) => `${n} ${r}(var(${cn(r)}))`,
        dn = (n) => n.startsWith("--"),
        hr = new Set(),
        hn = (n, r) => document.createElement("div").animate(n, r),
        ur = {
          cssRegisterProperty: () =>
            typeof CSS < "u" &&
            Object.hasOwnProperty.call(CSS, "registerProperty"),
          waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
          partialKeyframes: () => {
            try {
              hn({ opacity: [1] });
            } catch {
              return !1;
            }
            return !0;
          },
          finished: () =>
            Boolean(hn({ opacity: [0, 1] }, { duration: 0.001 }).finished),
          linearEasing: () => {
            try {
              hn({ opacity: 0 }, { easing: "linear(0, 1)" });
            } catch {
              return !1;
            }
            return !0;
          },
        },
        un = {},
        ne = {};
      for (const n in ur)
        ne[n] = () => (void 0 === un[n] && (un[n] = ur[n]()), un[n]);
      const mr = (n, r) =>
          ee(n)
            ? ne.linearEasing()
              ? `linear(${((n, r) => {
                  let i = "";
                  const l = Math.round(r / 0.015);
                  for (let a = 0; a < l; a++) i += n(ln(0, l - 1, a)) + ", ";
                  return i.substring(0, i.length - 2);
                })(n, r)})`
              : Ct.easing
            : rr(n)
            ? yi(n)
            : n,
        yi = ([n, r, i, l]) => `cubic-bezier(${n}, ${r}, ${i}, ${l})`,
        Ci = (n) => (Array.isArray(n) ? n : [n]);
      function mn(n) {
        return Re[n] && (n = Re[n]), dr(n) ? cn(n) : n;
      }
      const je = {
          get: (n, r) => {
            r = mn(r);
            let i = dn(r)
              ? n.style.getPropertyValue(r)
              : getComputedStyle(n)[r];
            if (!i && 0 !== i) {
              const l = be.get(r);
              l && (i = l.initialValue);
            }
            return i;
          },
          set: (n, r, i) => {
            (r = mn(r)), dn(r) ? n.style.setProperty(r, i) : (n.style[r] = i);
          },
        },
        $i = (n) => "string" == typeof n;
      function ki(n, r, i, l = {}, a) {
        const s = (function Ei() {
            return window.__MOTION_DEV_TOOLS_RECORD;
          })(),
          c = !1 !== l.record && s;
        let $,
          {
            duration: C = Ct.duration,
            delay: A = Ct.delay,
            endDelay: nt = Ct.endDelay,
            repeat: O = Ct.repeat,
            easing: T = Ct.easing,
            persist: rt = !1,
            direction: wt,
            offset: at,
            allowWebkitAcceleration: tt = !1,
          } = l;
        const pt = sr(n),
          ot = dr(r);
        let ht = ne.waapi();
        ot && pi(n, r);
        const dt = mn(r),
          At = (function li(n, r) {
            return n.has(r) || n.set(r, new ai()), n.get(r);
          })(pt.values, dt),
          Lt = be.get(dt);
        return (
          Qn(At.animation, !(an(T) && At.generator) && !1 !== l.record),
          () => {
            const en = () => {
              var ut, Pe;
              return null !==
                (Pe =
                  null !== (ut = je.get(n, dt)) && void 0 !== ut
                    ? ut
                    : Lt?.initialValue) && void 0 !== Pe
                ? Pe
                : 0;
            };
            let gt = (function xi(n, r) {
              for (let i = 0; i < n.length; i++)
                null === n[i] && (n[i] = i ? n[i - 1] : r());
              return n;
            })(Ci(i), en);
            const Dr = (function Ai(n, r) {
              var i;
              let l = r?.toDefaultUnit || Pt;
              const a = n[n.length - 1];
              if ($i(a)) {
                const s =
                  (null === (i = a.match(/(-?[\d.]+)([a-z%]*)/)) || void 0 === i
                    ? void 0
                    : i[2]) || "";
                s && (l = (c) => c + s);
              }
              return l;
            })(gt, Lt);
            if (an(T)) {
              const ut = T.createAnimation(gt, "opacity" !== r, en, dt, At);
              (T = ut.easing),
                (gt = ut.keyframes || gt),
                (C = ut.duration || C);
            }
            if (
              (dn(dt) &&
                (ne.cssRegisterProperty()
                  ? (function wi(n) {
                      if (!hr.has(n)) {
                        hr.add(n);
                        try {
                          const { syntax: r, initialValue: i } = be.has(n)
                            ? be.get(n)
                            : {};
                          CSS.registerProperty({
                            name: n,
                            inherits: !1,
                            syntax: r,
                            initialValue: i,
                          });
                        } catch {}
                      }
                    })(dt)
                  : (ht = !1)),
              ot &&
                !ne.linearEasing() &&
                (ee(T) || (te(T) && T.some(ee))) &&
                (ht = !1),
              ht)
            ) {
              Lt && (gt = gt.map((Kt) => (Se(Kt) ? Lt.toDefaultUnit(Kt) : Kt))),
                1 === gt.length &&
                  (!ne.partialKeyframes() || c) &&
                  gt.unshift(en());
              const ut = {
                delay: we.ms(A),
                duration: we.ms(C),
                endDelay: we.ms(nt),
                easing: te(T) ? void 0 : mr(T, C),
                direction: wt,
                iterations: O + 1,
                fill: "both",
              };
              ($ = n.animate(
                {
                  [dt]: gt,
                  offset: at,
                  easing: te(T) ? T.map((Kt) => mr(Kt, C)) : void 0,
                },
                ut
              )),
                $.finished ||
                  ($.finished = new Promise((Kt, gs) => {
                    ($.onfinish = Kt), ($.oncancel = gs);
                  }));
              const Pe = gt[gt.length - 1];
              $.finished
                .then(() => {
                  rt || (je.set(n, dt, Pe), $.cancel());
                })
                .catch(Jn),
                tt || ($.playbackRate = 1.000001);
            } else if (a && ot)
              (gt = gt.map((ut) =>
                "string" == typeof ut ? parseFloat(ut) : ut
              )),
                1 === gt.length && gt.unshift(parseFloat(en())),
                ($ = new a(
                  (ut) => {
                    je.set(n, dt, Dr ? Dr(ut) : ut);
                  },
                  gt,
                  Object.assign(Object.assign({}, l), {
                    duration: C,
                    easing: T,
                  })
                ));
            else {
              const ut = gt[gt.length - 1];
              je.set(n, dt, Lt && Se(ut) ? Lt.toDefaultUnit(ut) : ut);
            }
            return (
              c &&
                s(
                  n,
                  r,
                  gt,
                  { duration: C, delay: A, easing: T, repeat: O, offset: at },
                  "motion-one"
                ),
              At.setAnimation($),
              $
            );
          }
        );
      }
      const Ii = (n, r) =>
        n[r] ? Object.assign(Object.assign({}, n), n[r]) : Object.assign({}, n);
      function Ti(n, r, i) {
        return ee(n) ? n(r, i) : n;
      }
      const Mi = (function Pi(n) {
        return function (i, l, a = {}) {
          i = (function _i(n, r) {
            var i;
            return (
              "string" == typeof n
                ? r
                  ? ((null !== (i = r[n]) && void 0 !== i) ||
                      (r[n] = document.querySelectorAll(n)),
                    (n = r[n]))
                  : (n = document.querySelectorAll(n))
                : n instanceof Element && (n = [n]),
              Array.from(n || [])
            );
          })(i);
          const s = i.length;
          Boolean(s), Boolean(l);
          const c = [];
          for (let $ = 0; $ < s; $++) {
            const C = i[$];
            for (const A in l) {
              const nt = Ii(a, A);
              nt.delay = Ti(nt.delay, $, s);
              const O = ki(C, A, l[A], nt, n);
              c.push(O);
            }
          }
          return Xn(c, a, a.duration);
        };
      })(ar);
      function Ni(n, r = {}) {
        return Xn(
          [
            () => {
              const i = new ar(n, [0, 1], r);
              return i.finished.catch(() => {}), i;
            },
          ],
          r,
          r.duration
        );
      }
      function Bt(n, r, i) {
        return (ee(n) ? Ni : Mi)(n, r, i);
      }
      var Si = y(5319),
        Ri = Object.defineProperty,
        pr = Object.getOwnPropertySymbols,
        Li = Object.prototype.hasOwnProperty,
        ji = Object.prototype.propertyIsEnumerable,
        gr = (n, r, i) =>
          r in n
            ? Ri(n, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (n[r] = i),
        De = (n, r) => {
          for (var i in r || (r = {})) Li.call(r, i) && gr(n, i, r[i]);
          if (pr) for (var i of pr(r)) ji.call(r, i) && gr(n, i, r[i]);
          return n;
        };
      const D = {
          getPreset: (n) =>
            ({
              "--w3m-accent-color": "#3396FF",
              "--w3m-accent-fill-color": "#FFFFFF",
              "--w3m-z-index": "89",
              "--w3m-background-color": "#3396FF",
              "--w3m-background-border-radius": "8px",
              "--w3m-container-border-radius": "30px",
              "--w3m-wallet-icon-border-radius": "15px",
              "--w3m-wallet-icon-large-border-radius": "30px",
              "--w3m-wallet-icon-small-border-radius": "7px",
              "--w3m-input-border-radius": "28px",
              "--w3m-button-border-radius": "10px",
              "--w3m-notification-border-radius": "36px",
              "--w3m-secondary-button-border-radius": "28px",
              "--w3m-icon-button-border-radius": "50%",
              "--w3m-button-hover-highlight-border-radius": "10px",
              "--w3m-text-big-bold-size": "20px",
              "--w3m-text-big-bold-weight": "600",
              "--w3m-text-big-bold-line-height": "24px",
              "--w3m-text-big-bold-letter-spacing": "-0.03em",
              "--w3m-text-big-bold-text-transform": "none",
              "--w3m-text-xsmall-bold-size": "10px",
              "--w3m-text-xsmall-bold-weight": "700",
              "--w3m-text-xsmall-bold-line-height": "12px",
              "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
              "--w3m-text-xsmall-bold-text-transform": "uppercase",
              "--w3m-text-xsmall-regular-size": "12px",
              "--w3m-text-xsmall-regular-weight": "600",
              "--w3m-text-xsmall-regular-line-height": "14px",
              "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
              "--w3m-text-xsmall-regular-text-transform": "none",
              "--w3m-text-small-thin-size": "14px",
              "--w3m-text-small-thin-weight": "500",
              "--w3m-text-small-thin-line-height": "16px",
              "--w3m-text-small-thin-letter-spacing": "-0.03em",
              "--w3m-text-small-thin-text-transform": "none",
              "--w3m-text-small-regular-size": "14px",
              "--w3m-text-small-regular-weight": "600",
              "--w3m-text-small-regular-line-height": "16px",
              "--w3m-text-small-regular-letter-spacing": "-0.03em",
              "--w3m-text-small-regular-text-transform": "none",
              "--w3m-text-medium-regular-size": "16px",
              "--w3m-text-medium-regular-weight": "600",
              "--w3m-text-medium-regular-line-height": "20px",
              "--w3m-text-medium-regular-letter-spacing": "-0.03em",
              "--w3m-text-medium-regular-text-transform": "none",
              "--w3m-font-family":
                "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
              "--w3m-success-color": "rgb(38,181,98)",
              "--w3m-error-color": "rgb(242, 90, 103)",
            }[n]),
          setTheme() {
            const n = document.querySelector(":root"),
              { themeVariables: r } = d.Ic.state;
            if (n) {
              const i = De(
                De(
                  De(
                    De(
                      {},
                      (function Di() {
                        var n;
                        const i = {
                          light: {
                            foreground: {
                              1: "rgb(20,20,20)",
                              2: "rgb(121,134,134)",
                              3: "rgb(158,169,169)",
                            },
                            background: {
                              1: "rgb(255,255,255)",
                              2: "rgb(241,243,243)",
                              3: "rgb(228,231,231)",
                            },
                            overlay: "rgba(0,0,0,0.1)",
                          },
                          dark: {
                            foreground: {
                              1: "rgb(228,231,231)",
                              2: "rgb(148,158,158)",
                              3: "rgb(110,119,119)",
                            },
                            background: {
                              1: "rgb(20,20,20)",
                              2: "rgb(39,42,42)",
                              3: "rgb(59,64,64)",
                            },
                            overlay: "rgba(255,255,255,0.1)",
                          },
                        }[null != (n = d.Ic.state.themeMode) ? n : "dark"];
                        return {
                          "--w3m-color-fg-1": i.foreground[1],
                          "--w3m-color-fg-2": i.foreground[2],
                          "--w3m-color-fg-3": i.foreground[3],
                          "--w3m-color-bg-1": i.background[1],
                          "--w3m-color-bg-2": i.background[2],
                          "--w3m-color-bg-3": i.background[3],
                          "--w3m-color-overlay": i.overlay,
                        };
                      })()
                    ),
                    {
                      "--w3m-accent-color": "#3396FF",
                      "--w3m-accent-fill-color": "#FFFFFF",
                      "--w3m-z-index": "89",
                      "--w3m-background-color": "#3396FF",
                      "--w3m-background-border-radius": "8px",
                      "--w3m-container-border-radius": "30px",
                      "--w3m-wallet-icon-border-radius": "15px",
                      "--w3m-wallet-icon-large-border-radius": "30px",
                      "--w3m-wallet-icon-small-border-radius": "7px",
                      "--w3m-input-border-radius": "28px",
                      "--w3m-button-border-radius": "10px",
                      "--w3m-notification-border-radius": "36px",
                      "--w3m-secondary-button-border-radius": "28px",
                      "--w3m-icon-button-border-radius": "50%",
                      "--w3m-button-hover-highlight-border-radius": "10px",
                      "--w3m-text-big-bold-size": "20px",
                      "--w3m-text-big-bold-weight": "600",
                      "--w3m-text-big-bold-line-height": "24px",
                      "--w3m-text-big-bold-letter-spacing": "-0.03em",
                      "--w3m-text-big-bold-text-transform": "none",
                      "--w3m-text-xsmall-bold-size": "10px",
                      "--w3m-text-xsmall-bold-weight": "700",
                      "--w3m-text-xsmall-bold-line-height": "12px",
                      "--w3m-text-xsmall-bold-letter-spacing": "0.02em",
                      "--w3m-text-xsmall-bold-text-transform": "uppercase",
                      "--w3m-text-xsmall-regular-size": "12px",
                      "--w3m-text-xsmall-regular-weight": "600",
                      "--w3m-text-xsmall-regular-line-height": "14px",
                      "--w3m-text-xsmall-regular-letter-spacing": "-0.03em",
                      "--w3m-text-xsmall-regular-text-transform": "none",
                      "--w3m-text-small-thin-size": "14px",
                      "--w3m-text-small-thin-weight": "500",
                      "--w3m-text-small-thin-line-height": "16px",
                      "--w3m-text-small-thin-letter-spacing": "-0.03em",
                      "--w3m-text-small-thin-text-transform": "none",
                      "--w3m-text-small-regular-size": "14px",
                      "--w3m-text-small-regular-weight": "600",
                      "--w3m-text-small-regular-line-height": "16px",
                      "--w3m-text-small-regular-letter-spacing": "-0.03em",
                      "--w3m-text-small-regular-text-transform": "none",
                      "--w3m-text-medium-regular-size": "16px",
                      "--w3m-text-medium-regular-weight": "600",
                      "--w3m-text-medium-regular-line-height": "20px",
                      "--w3m-text-medium-regular-letter-spacing": "-0.03em",
                      "--w3m-text-medium-regular-text-transform": "none",
                      "--w3m-font-family":
                        "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu, 'Helvetica Neue', sans-serif",
                      "--w3m-success-color": "rgb(38,181,98)",
                      "--w3m-error-color": "rgb(242, 90, 103)",
                    }
                  ),
                  r
                ),
                (function Bi() {
                  const { themeVariables: n } = d.Ic.state;
                  return {
                    "--w3m-background-image-url":
                      null != n && n["--w3m-background-image-url"]
                        ? `url(${n["--w3m-background-image-url"]})`
                        : "none",
                  };
                })()
              );
              Object.entries(i).forEach(([l, a]) => n.style.setProperty(l, a));
            }
          },
          globalCss: g`*,::after,::before{margin:0;padding:0;box-sizing:border-box;font-style:normal;text-rendering:optimizeSpeed;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-tap-highlight-color:transparent;backface-visibility:hidden}button{cursor:pointer;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease}@media (hover:hover) and (pointer:fine){button:active{transition:all .1s ease;transform:scale(.93)}}button::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;transition:background-color,.2s ease}button:disabled{cursor:not-allowed}button svg,button w3m-text{position:relative;z-index:1}input{border:none;outline:0;appearance:none}img{display:block}::selection{color:var(--w3m-accent-fill-color);background:var(--w3m-accent-color)}`,
        },
        Wi = g`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{display:flex;justify-content:center;align-items:center;width:32px;height:32px;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-accent-color);border-radius:var(--w3m-icon-button-border-radius);margin-bottom:4px}button path{fill:var(--w3m-accent-fill-color)}`;
      var Ui = Object.defineProperty,
        zi = Object.getOwnPropertyDescriptor,
        Be = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? zi(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Ui(r, i, a), a;
        };
      let re = class extends S {
        constructor() {
          super(...arguments),
            (this.icon = void 0),
            (this.label = ""),
            (this.onClick = () => null);
        }
        render() {
          return b`<button @click="${this.onClick}"><div>${this.icon}</div><w3m-text variant="xsmall-regular" color="accent">${this.label}</w3m-text></button>`;
        }
      };
      (re.styles = [D.globalCss, Wi]),
        Be([_()], re.prototype, "icon", 2),
        Be([_()], re.prototype, "label", 2),
        Be([_()], re.prototype, "onClick", 2),
        (re = Be([R("w3m-box-button")], re));
      const Vi = g`button{border-radius:var(--w3m-secondary-button-border-radius);height:28px;padding:0 10px;background-color:var(--w3m-accent-color)}button path{fill:var(--w3m-accent-fill-color)}button::after{border-radius:inherit;border:1px solid var(--w3m-color-overlay)}button:disabled::after{background-color:transparent}.w3m-icon-left svg{margin-right:5px}.w3m-icon-right svg{margin-left:5px}button:active::after{background-color:var(--w3m-color-overlay)}.w3m-ghost,.w3m-ghost:active::after,.w3m-outline{background-color:transparent}.w3m-ghost:active{opacity:.5}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}.w3m-ghost:hover::after{background-color:transparent}.w3m-ghost:hover{opacity:.5}}button:disabled{background-color:var(--w3m-color-bg-3);pointer-events:none}.w3m-ghost::after{border-color:transparent}.w3m-ghost path{fill:var(--w3m-color-fg-2)}.w3m-outline path{fill:var(--w3m-accent-color)}.w3m-outline:disabled{background-color:transparent;opacity:.5}`;
      var Hi = Object.defineProperty,
        Zi = Object.getOwnPropertyDescriptor,
        ie = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Zi(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Hi(r, i, a), a;
        };
      let Mt = class extends S {
        constructor() {
          super(...arguments),
            (this.disabled = !1),
            (this.iconLeft = void 0),
            (this.iconRight = void 0),
            (this.onClick = () => null),
            (this.variant = "default");
        }
        render() {
          let r = "inverse";
          return (
            "ghost" === this.variant && (r = "secondary"),
            "outline" === this.variant && (r = "accent"),
            b`<button class="${vt({
              "w3m-icon-left": void 0 !== this.iconLeft,
              "w3m-icon-right": void 0 !== this.iconRight,
              "w3m-ghost": "ghost" === this.variant,
              "w3m-outline": "outline" === this.variant,
            })}" ?disabled="${this.disabled}" @click="${this.onClick}">${
              this.iconLeft
            }<w3m-text variant="small-regular" color="${r}"><slot></slot></w3m-text>${
              this.iconRight
            }</button>`
          );
        }
      };
      (Mt.styles = [D.globalCss, Vi]),
        ie([_()], Mt.prototype, "disabled", 2),
        ie([_()], Mt.prototype, "iconLeft", 2),
        ie([_()], Mt.prototype, "iconRight", 2),
        ie([_()], Mt.prototype, "onClick", 2),
        ie([_()], Mt.prototype, "variant", 2),
        (Mt = ie([R("w3m-button")], Mt));
      const Fi = g`:host{display:inline-block}button{padding:0 15px 1px;height:40px;border-radius:var(--w3m-button-border-radius);color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:active::after{background-color:var(--w3m-color-overlay)}button:disabled{padding-bottom:0;background-color:var(--w3m-color-bg-3);color:var(--w3m-color-fg-3)}.w3m-secondary{color:var(--w3m-accent-color);background-color:transparent}.w3m-secondary::after{display:none}@media(hover:hover){button:hover::after{background-color:var(--w3m-color-overlay)}}`;
      var Gi = Object.defineProperty,
        Ki = Object.getOwnPropertyDescriptor,
        pn = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Ki(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Gi(r, i, a), a;
        };
      let ye = class extends S {
        constructor() {
          super(...arguments), (this.disabled = !1), (this.variant = "primary");
        }
        render() {
          return b`<button ?disabled="${this.disabled}" class="${vt({
            "w3m-secondary": "secondary" === this.variant,
          })}"><slot></slot></button>`;
        }
      };
      (ye.styles = [D.globalCss, Fi]),
        pn([_()], ye.prototype, "disabled", 2),
        pn([_()], ye.prototype, "variant", 2),
        (ye = pn([R("w3m-button-big")], ye));
      const Yi = g`:host{background-color:var(--w3m-color-bg-2);border-top:1px solid var(--w3m-color-bg-3)}div{padding:10px 20px;display:inherit;flex-direction:inherit;align-items:inherit;width:inherit;justify-content:inherit}`;
      let gn = class extends S {
        render() {
          return b`<div><slot></slot></div>`;
        }
      };
      (gn.styles = [D.globalCss, Yi]),
        (gn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-info-footer")], gn));
      const L = {
          CROSS_ICON: z`<svg width="12" height="12" viewBox="0 0 12 12"><path d="M9.94 11A.75.75 0 1 0 11 9.94L7.414 6.353a.5.5 0 0 1 0-.708L11 2.061A.75.75 0 1 0 9.94 1L6.353 4.586a.5.5 0 0 1-.708 0L2.061 1A.75.75 0 0 0 1 2.06l3.586 3.586a.5.5 0 0 1 0 .708L1 9.939A.75.75 0 1 0 2.06 11l3.586-3.586a.5.5 0 0 1 .708 0L9.939 11Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_LOGO: z`<svg width="178" height="29" viewBox="0 0 178 29" id="w3m-wc-logo"><path d="M10.683 7.926c5.284-5.17 13.85-5.17 19.134 0l.636.623a.652.652 0 0 1 0 .936l-2.176 2.129a.343.343 0 0 1-.478 0l-.875-.857c-3.686-3.607-9.662-3.607-13.348 0l-.937.918a.343.343 0 0 1-.479 0l-2.175-2.13a.652.652 0 0 1 0-.936l.698-.683Zm23.633 4.403 1.935 1.895a.652.652 0 0 1 0 .936l-8.73 8.543a.687.687 0 0 1-.956 0L20.37 17.64a.172.172 0 0 0-.239 0l-6.195 6.063a.687.687 0 0 1-.957 0l-8.73-8.543a.652.652 0 0 1 0-.936l1.936-1.895a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .239 0l6.195-6.064a.687.687 0 0 1 .957 0l6.196 6.064a.172.172 0 0 0 .24 0l6.195-6.064a.687.687 0 0 1 .956 0ZM48.093 20.948l2.338-9.355c.139-.515.258-1.07.416-1.942.12.872.258 1.427.357 1.942l2.022 9.355h4.181l3.528-13.874h-3.21l-1.943 8.523a24.825 24.825 0 0 0-.456 2.457c-.158-.931-.317-1.625-.495-2.438l-1.883-8.542h-4.201l-2.042 8.542a41.204 41.204 0 0 0-.475 2.438 41.208 41.208 0 0 0-.476-2.438l-1.903-8.542h-3.349l3.508 13.874h4.083ZM63.33 21.304c1.585 0 2.596-.654 3.11-1.605-.059.297-.078.595-.078.892v.357h2.655V15.22c0-2.735-1.248-4.32-4.3-4.32-2.636 0-4.36 1.466-4.52 3.487h2.914c.1-.891.734-1.426 1.705-1.426.911 0 1.407.515 1.407 1.11 0 .435-.258.693-1.03.792l-1.388.159c-2.061.257-3.825 1.01-3.825 3.19 0 1.982 1.645 3.092 3.35 3.092Zm.891-2.041c-.773 0-1.348-.436-1.348-1.19 0-.733.655-1.09 1.645-1.268l.674-.119c.575-.118.892-.218 1.09-.396v.912c0 1.228-.892 2.06-2.06 2.06ZM70.398 7.074v13.874h2.874V7.074h-2.874ZM74.934 7.074v13.874h2.874V7.074h-2.874ZM84.08 21.304c2.735 0 4.5-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922H81.92ZM94.92 21.146c.633 0 1.248-.1 1.525-.179v-2.18c-.218.04-.475.06-.693.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.338v-2.24h-2.338V7.788H91.47v3.448H89.37v2.24h2.1v4.201c0 2.3 1.15 3.469 3.45 3.469ZM104.62 21.304c3.924 0 6.302-2.299 6.599-5.608h-3.111c-.238 1.803-1.506 3.032-3.369 3.032-2.2 0-3.746-1.784-3.746-4.796 0-2.953 1.605-4.638 3.805-4.638 1.883 0 2.953 1.15 3.171 2.834h3.191c-.317-3.448-2.854-5.41-6.342-5.41-3.984 0-7.036 2.695-7.036 7.214 0 4.677 2.676 7.372 6.838 7.372ZM117.449 21.304c2.993 0 5.114-1.882 5.114-5.172 0-3.23-2.121-5.233-5.114-5.233-2.972 0-5.093 2.002-5.093 5.233 0 3.29 2.101 5.172 5.093 5.172Zm0-2.22c-1.327 0-2.18-1.09-2.18-2.952 0-1.903.892-2.973 2.18-2.973 1.308 0 2.2 1.07 2.2 2.973 0 1.862-.872 2.953-2.2 2.953ZM126.569 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.229-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM137.464 20.948v-5.689c0-1.208.753-2.1 1.823-2.1 1.011 0 1.606.773 1.606 2.06v5.729h2.873v-6.144c0-2.339-1.228-3.905-3.428-3.905-1.526 0-2.458.734-2.953 1.606a5.31 5.31 0 0 0 .079-.892v-.377h-2.874v9.712h2.874ZM149.949 21.304c2.735 0 4.499-1.546 4.697-3.567h-2.893c-.139.892-.892 1.387-1.804 1.387-1.228 0-2.12-.99-2.14-2.358h6.897v-.555c0-3.21-1.764-5.312-4.816-5.312-2.933 0-4.994 2.062-4.994 5.173 0 3.37 2.12 5.232 5.053 5.232Zm-2.16-6.421c.119-1.11.932-1.922 2.081-1.922 1.11 0 1.883.772 1.903 1.922h-3.984ZM160.876 21.304c3.013 0 4.658-1.645 4.975-4.201h-2.874c-.099 1.07-.713 1.982-2.001 1.982-1.309 0-2.2-1.21-2.2-2.993 0-1.942 1.03-2.933 2.259-2.933 1.209 0 1.803.872 1.883 1.882h2.873c-.218-2.358-1.823-4.142-4.776-4.142-2.874 0-5.153 1.903-5.153 5.193 0 3.25 1.923 5.212 5.014 5.212ZM172.067 21.146c.634 0 1.248-.1 1.526-.179v-2.18c-.218.04-.476.06-.694.06-1.05 0-1.427-.595-1.427-1.566v-3.805h2.339v-2.24h-2.339V7.788h-2.854v3.448h-2.1v2.24h2.1v4.201c0 2.3 1.15 3.469 3.449 3.469Z" fill="#fff"/></svg>`,
          WALLET_CONNECT_ICON: z`<svg width="28" height="20" viewBox="0 0 28 20"><g clip-path="url(#a)"><path d="M7.386 6.482c3.653-3.576 9.575-3.576 13.228 0l.44.43a.451.451 0 0 1 0 .648L19.55 9.033a.237.237 0 0 1-.33 0l-.606-.592c-2.548-2.496-6.68-2.496-9.228 0l-.648.634a.237.237 0 0 1-.33 0L6.902 7.602a.451.451 0 0 1 0-.647l.483-.473Zm16.338 3.046 1.339 1.31a.451.451 0 0 1 0 .648l-6.035 5.909a.475.475 0 0 1-.662 0L14.083 13.2a.119.119 0 0 0-.166 0l-4.283 4.194a.475.475 0 0 1-.662 0l-6.035-5.91a.451.451 0 0 1 0-.647l1.338-1.31a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0l4.283 4.194c.046.044.12.044.166 0l4.283-4.194a.475.475 0 0 1 .662 0Z" fill="#000000"/></g><defs><clipPath id="a"><path fill="#ffffff" d="M0 0h28v20H0z"/></clipPath></defs></svg>`,
          WALLET_CONNECT_ICON_COLORED: z`<svg width="96" height="96" fill="none"><path fill="#fff" d="M25.322 33.597c12.525-12.263 32.83-12.263 45.355 0l1.507 1.476a1.547 1.547 0 0 1 0 2.22l-5.156 5.048a.814.814 0 0 1-1.134 0l-2.074-2.03c-8.737-8.555-22.903-8.555-31.64 0l-2.222 2.175a.814.814 0 0 1-1.134 0l-5.156-5.049a1.547 1.547 0 0 1 0-2.22l1.654-1.62Zm56.019 10.44 4.589 4.494a1.547 1.547 0 0 1 0 2.22l-20.693 20.26a1.628 1.628 0 0 1-2.267 0L48.283 56.632a.407.407 0 0 0-.567 0L33.03 71.012a1.628 1.628 0 0 1-2.268 0L10.07 50.75a1.547 1.547 0 0 1 0-2.22l4.59-4.494a1.628 1.628 0 0 1 2.267 0l14.687 14.38c.156.153.41.153.567 0l14.685-14.38a1.628 1.628 0 0 1 2.268 0l14.687 14.38c.156.153.41.153.567 0l14.686-14.38a1.628 1.628 0 0 1 2.268 0Z"/><path stroke="#000" d="M25.672 33.954c12.33-12.072 32.325-12.072 44.655 0l1.508 1.476a1.047 1.047 0 0 1 0 1.506l-5.157 5.048a.314.314 0 0 1-.434 0l-2.074-2.03c-8.932-8.746-23.409-8.746-32.34 0l-2.222 2.174a.314.314 0 0 1-.434 0l-5.157-5.048a1.047 1.047 0 0 1 0-1.506l1.655-1.62Zm55.319 10.44 4.59 4.494a1.047 1.047 0 0 1 0 1.506l-20.694 20.26a1.128 1.128 0 0 1-1.568 0l-14.686-14.38a.907.907 0 0 0-1.267 0L32.68 70.655a1.128 1.128 0 0 1-1.568 0L10.42 50.394a1.047 1.047 0 0 1 0-1.506l4.59-4.493a1.128 1.128 0 0 1 1.567 0l14.687 14.379a.907.907 0 0 0 1.266 0l-.35-.357.35.357 14.686-14.38a1.128 1.128 0 0 1 1.568 0l14.687 14.38a.907.907 0 0 0 1.267 0l14.686-14.38a1.128 1.128 0 0 1 1.568 0Z"/></svg>`,
          BACK_ICON: z`<svg width="10" height="18" viewBox="0 0 10 18"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.735.179a.75.75 0 0 1 .087 1.057L2.92 8.192a1.25 1.25 0 0 0 0 1.617l5.902 6.956a.75.75 0 1 1-1.144.97L1.776 10.78a2.75 2.75 0 0 1 0-3.559L7.678.265A.75.75 0 0 1 8.735.18Z" fill="#fff"/></svg>`,
          COPY_ICON: z`<svg width="24" height="24" fill="none"><path fill="#fff" fill-rule="evenodd" d="M7.01 7.01c.03-1.545.138-2.5.535-3.28A5 5 0 0 1 9.73 1.545C10.8 1 12.2 1 15 1c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C23 4.8 23 6.2 23 9c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.78.397-1.735.505-3.28.534l-.001.01c-.03 1.54-.138 2.493-.534 3.27a5 5 0 0 1-2.185 2.186C13.2 23 11.8 23 9 23c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C1 19.2 1 17.8 1 15c0-2.8 0-4.2.545-5.27A5 5 0 0 1 3.73 7.545C4.508 7.149 5.46 7.04 7 7.01h.01ZM15 15.5c-1.425 0-2.403-.001-3.162-.063-.74-.06-1.139-.172-1.427-.319a3.5 3.5 0 0 1-1.53-1.529c-.146-.288-.257-.686-.318-1.427C8.501 11.403 8.5 10.425 8.5 9c0-1.425.001-2.403.063-3.162.06-.74.172-1.139.318-1.427a3.5 3.5 0 0 1 1.53-1.53c.288-.146.686-.257 1.427-.318.759-.062 1.737-.063 3.162-.063 1.425 0 2.403.001 3.162.063.74.06 1.139.172 1.427.318a3.5 3.5 0 0 1 1.53 1.53c.146.288.257.686.318 1.427.062.759.063 1.737.063 3.162 0 1.425-.001 2.403-.063 3.162-.06.74-.172 1.139-.319 1.427a3.5 3.5 0 0 1-1.529 1.53c-.288.146-.686.257-1.427.318-.759.062-1.737.063-3.162.063ZM7 8.511c-.444.009-.825.025-1.162.052-.74.06-1.139.172-1.427.318a3.5 3.5 0 0 0-1.53 1.53c-.146.288-.257.686-.318 1.427-.062.759-.063 1.737-.063 3.162 0 1.425.001 2.403.063 3.162.06.74.172 1.139.318 1.427a3.5 3.5 0 0 0 1.53 1.53c.288.146.686.257 1.427.318.759.062 1.737.063 3.162.063 1.425 0 2.403-.001 3.162-.063.74-.06 1.139-.172 1.427-.319a3.5 3.5 0 0 0 1.53-1.53c.146-.287.257-.685.318-1.426.027-.337.043-.718.052-1.162H15c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C7 13.2 7 11.8 7 9v-.489Z" clip-rule="evenodd"/></svg>`,
          RETRY_ICON: z`<svg width="15" height="16" viewBox="0 0 15 16"><path d="M6.464 2.03A.75.75 0 0 0 5.403.97L2.08 4.293a1 1 0 0 0 0 1.414L5.403 9.03a.75.75 0 0 0 1.06-1.06L4.672 6.177a.25.25 0 0 1 .177-.427h2.085a4 4 0 1 1-3.93 4.746c-.077-.407-.405-.746-.82-.746-.414 0-.755.338-.7.748a5.501 5.501 0 1 0 5.45-6.248H4.848a.25.25 0 0 1-.177-.427L6.464 2.03Z" fill="#fff"/></svg>`,
          DESKTOP_ICON: z`<svg width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C2.204 1 3.13 1 4.98 1h6.04c1.85 0 2.775 0 3.466.394a3 3 0 0 1 1.12 1.12C16 3.204 16 4.13 16 5.98v1.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C13.796 12 12.87 12 11.02 12H4.98c-1.85 0-2.775 0-3.466-.394a3 3 0 0 1-1.12-1.12C0 9.796 0 8.87 0 7.02V5.98ZM4.98 2.5h6.04c.953 0 1.568.001 2.034.043.446.04.608.108.69.154a1.5 1.5 0 0 1 .559.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033v1.04c0 .952-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.046-.243.114-.69.154-.466.042-1.08.043-2.033.043H4.98c-.952 0-1.568-.001-2.034-.043-.446-.04-.608-.108-.69-.154a1.5 1.5 0 0 1-.559-.56c-.046-.08-.114-.243-.154-.69-.042-.465-.043-1.08-.043-2.033V5.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.046.243-.114.69-.154.465-.042 1.08-.043 2.033-.043Z" fill="#fff"/><path d="M4 14.25a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          MOBILE_ICON: z`<svg width="16" height="16" viewBox="0 0 16 16"><path d="M6.75 5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.98c0-1.85 0-2.775.394-3.466a3 3 0 0 1 1.12-1.12C5.204 0 6.136 0 8 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C13 2.204 13 3.13 13 4.98v6.04c0 1.85 0 2.775-.394 3.466a3 3 0 0 1-1.12 1.12C10.796 16 9.864 16 8 16s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C3 13.796 3 12.87 3 11.02V4.98Zm8.5 0v6.04c0 .953-.001 1.568-.043 2.034-.04.446-.108.608-.154.69a1.499 1.499 0 0 1-.56.559c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.046-.08-.114-.243-.154-.69-.042-.466-.043-1.08-.043-2.033V4.98c0-.952.001-1.568.043-2.034.04-.446.108-.608.154-.69a1.5 1.5 0 0 1 .56-.559c.08-.045.243-.113.693-.154C6.42 1.501 7.041 1.5 8 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.046.08.114.243.154.69.042.465.043 1.08.043 2.033Z" fill="#fff"/></svg>`,
          ARROW_DOWN_ICON: z`<svg width="14" height="14" viewBox="0 0 14 14"><path d="M2.28 7.47a.75.75 0 0 0-1.06 1.06l5.25 5.25a.75.75 0 0 0 1.06 0l5.25-5.25a.75.75 0 0 0-1.06-1.06l-3.544 3.543a.25.25 0 0 1-.426-.177V.75a.75.75 0 0 0-1.5 0v10.086a.25.25 0 0 1-.427.176L2.28 7.47Z" fill="#fff"/></svg>`,
          ARROW_UP_RIGHT_ICON: z`<svg width="15" height="14" fill="none"><path d="M4.5 1.75A.75.75 0 0 1 5.25 1H12a1.5 1.5 0 0 1 1.5 1.5v6.75a.75.75 0 0 1-1.5 0V4.164a.25.25 0 0 0-.427-.176L4.061 11.5A.75.75 0 0 1 3 10.44l7.513-7.513a.25.25 0 0 0-.177-.427H5.25a.75.75 0 0 1-.75-.75Z" fill="#fff"/></svg>`,
          ARROW_RIGHT_ICON: z`<svg width="6" height="14" viewBox="0 0 6 14"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.181 1.099a.75.75 0 0 1 1.024.279l2.433 4.258a2.75 2.75 0 0 1 0 2.729l-2.433 4.257a.75.75 0 1 1-1.303-.744L4.335 7.62a1.25 1.25 0 0 0 0-1.24L1.902 2.122a.75.75 0 0 1 .28-1.023Z" fill="#fff"/></svg>`,
          QRCODE_ICON: z`<svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"/><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"/></svg>`,
          SCAN_ICON: z`<svg width="16" height="16" fill="none"><path fill="#fff" d="M10 15.216c0 .422.347.763.768.74 1.202-.064 2.025-.222 2.71-.613a5.001 5.001 0 0 0 1.865-1.866c.39-.684.549-1.507.613-2.709a.735.735 0 0 0-.74-.768.768.768 0 0 0-.76.732c-.009.157-.02.306-.032.447-.073.812-.206 1.244-.384 1.555-.31.545-.761.996-1.306 1.306-.311.178-.743.311-1.555.384-.141.013-.29.023-.447.032a.768.768 0 0 0-.732.76ZM10 .784c0 .407.325.737.732.76.157.009.306.02.447.032.812.073 1.244.206 1.555.384a3.5 3.5 0 0 1 1.306 1.306c.178.311.311.743.384 1.555.013.142.023.29.032.447a.768.768 0 0 0 .76.732.734.734 0 0 0 .74-.768c-.064-1.202-.222-2.025-.613-2.71A5 5 0 0 0 13.477.658c-.684-.39-1.507-.549-2.709-.613a.735.735 0 0 0-.768.74ZM5.232.044A.735.735 0 0 1 6 .784a.768.768 0 0 1-.732.76c-.157.009-.305.02-.447.032-.812.073-1.244.206-1.555.384A3.5 3.5 0 0 0 1.96 3.266c-.178.311-.311.743-.384 1.555-.013.142-.023.29-.032.447A.768.768 0 0 1 .784 6a.735.735 0 0 1-.74-.768c.064-1.202.222-2.025.613-2.71A5 5 0 0 1 2.523.658C3.207.267 4.03.108 5.233.044ZM5.268 14.456a.768.768 0 0 1 .732.76.734.734 0 0 1-.768.74c-1.202-.064-2.025-.222-2.71-.613a5 5 0 0 1-1.865-1.866c-.39-.684-.549-1.507-.613-2.709A.735.735 0 0 1 .784 10c.407 0 .737.325.76.732.009.157.02.306.032.447.073.812.206 1.244.384 1.555a3.5 3.5 0 0 0 1.306 1.306c.311.178.743.311 1.555.384.142.013.29.023.447.032Z"/></svg>`,
          CHECKMARK_ICON: z`<svg width="13" height="12" viewBox="0 0 13 12"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.155.132a.75.75 0 0 1 .232 1.035L5.821 11.535a1 1 0 0 1-1.626.09L.665 7.21a.75.75 0 1 1 1.17-.937L4.71 9.867a.25.25 0 0 0 .406-.023L11.12.364a.75.75 0 0 1 1.035-.232Z" fill="#fff"/></svg>`,
          HELP_ETH_IMG: z`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#j)"><rect width="60" height="60" rx="30" fill="#987DE8"/><path fill-rule="evenodd" clip-rule="evenodd" d="m15.48 28.367 11.966-19.3c1.174-1.892 3.927-1.892 5.1 0l11.97 19.306a6 6 0 0 1 .9 3.142v.028a6 6 0 0 1-1.154 3.56L33.227 50.208c-1.599 2.188-4.864 2.188-6.461 0L15.733 35.095a6 6 0 0 1-1.154-3.538v-.029a6 6 0 0 1 .9-3.161Z" fill="#fff"/><path d="M30.84 10.112a.992.992 0 0 0-.844-.464V24.5l12.598 5.53c.081-.466-.001-.963-.27-1.398L30.84 10.112Z" fill="#643CDD"/><path d="M29.996 9.648a.991.991 0 0 0-.845.465l-11.489 18.53a1.991 1.991 0 0 0-.264 1.387l12.598-5.53V9.648Z" fill="#BDADEB"/><path d="M29.996 50.544a.994.994 0 0 0 .808-.41l11.235-15.38c.307-.434-.193-.988-.658-.72L31.49 39.71a2.998 2.998 0 0 1-1.494.398v10.437Z" fill="#643CDD"/><path d="M17.966 34.762 29.19 50.134c.2.274.503.41.807.41V40.108a2.998 2.998 0 0 1-1.493-.398l-9.884-5.676c-.468-.27-.971.292-.653.728Z" fill="#BDADEB"/><path d="M42.594 30.03 29.996 24.5v13.138a3 3 0 0 0 1.495-.399l10.149-5.83c.525-.31.856-.823.954-1.38Z" fill="#401AB3"/><path d="M29.996 37.638V24.462l-12.598 5.566c.098.564.437 1.083.974 1.392l10.13 5.82c.462.265.978.398 1.494.398Z" fill="#7C5AE2"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="29.5"/><defs><clipPath id="j"><rect width="60" height="60" rx="30" fill="#fff"/></clipPath></defs></svg>`,
          HELP_PAINTING_IMG: z`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#k)"><rect width="60" height="60" rx="3" fill="#C653C6"/><path d="M52.094 47.344c0-4.246-1.436-9.557-5.885-12.4a2.876 2.876 0 0 0-1.615-3.891v-.819a4.037 4.037 0 0 0-1.34-3.007 4.75 4.75 0 0 0-2.41-6.252v-5.506c0-6.248-5.065-11.313-11.313-11.313-6.247 0-11.312 5.065-11.312 11.313v2.152a3.343 3.343 0 0 0-1.18 5.045 4.738 4.738 0 0 0-1.633 3.584 4.73 4.73 0 0 0 .956 2.858 5.218 5.218 0 0 0-2.358 6.815c-3.06 4.129-6.098 8.298-6.098 15.64 0 2.668.364 4.856.731 6.385.184.765.368 1.366.509 1.78a12.721 12.721 0 0 0 .225.611l.015.037.005.011.001.004v.002h.001l.92-.393-.92.394.26.606h38.26l.291-.49-.86-.51.86.51v-.001l.002-.002.002-.005.01-.017.035-.06.127-.225c.108-.195.26-.477.441-.835.363-.714.845-1.732 1.328-2.953.959-2.427 1.945-5.725 1.945-9.068Z" fill="#E87DE8" stroke="#fff" stroke-width="2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5 29.5c-3-.5-5.5-3-5.503-7l.002-7c0-.466 0-.698.026-.893a3 3 0 0 1 2.582-2.582c.195-.026.428-.026.893-.026 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.398 0 2.097 0 2.648.229a3 3 0 0 1 1.624 1.623c.228.552.228 1.25.228 2.649v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.495 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z" fill="#fff"/></g><rect class="help-img-highlight" x=".5" y=".5" width="59" height="59" rx="2.5"/><defs><clipPath id="k"><rect width="60" height="60" rx="3" fill="#fff"/></clipPath></defs></svg>`,
          HELP_CHART_IMG: z`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#l)"><path d="M0 25.01C0 15.76 0 11.133 1.97 7.678a15 15 0 0 1 5.598-5.597C11.023.11 15.648.11 24.9.11h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.597C60 11.133 60 15.758 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a15 15 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a14.999 14.999 0 0 1-5.597-5.598C0 49.087 0 44.462 0 35.21v-10.2Z" fill="#1DC956"/><path d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z" stroke="#fff" stroke-opacity=".1"/><path d="M16.109 60c-3.833-.179-6.41-.645-8.541-1.86a15 15 0 0 1-5.598-5.598C.553 50.057.155 46.967.043 41.985l4.146-1.382a4 4 0 0 0 2.48-2.39l4.654-12.409a2 2 0 0 1 2.505-1.195l2.526.842a2 2 0 0 0 2.422-1.003l2.968-5.938c.81-1.62 3.185-1.415 3.705.32l3.774 12.581a2 2 0 0 0 3.025 1.09l3.342-2.228c.27-.18.49-.422.646-.706l5.297-9.712a2 2 0 0 1 1.428-1.016l4.134-.689a2 2 0 0 1 1.61.437l3.892 3.243a2 2 0 0 0 2.694-.122l4.633-4.632C60 19.28 60 21.88 60 25.01v10.2c0 9.252 0 13.877-1.97 17.332a14.998 14.998 0 0 1-5.598 5.598c-2.131 1.215-4.708 1.681-8.54 1.86H16.108Z" fill="#2BEE6C"/><path d="M.072 43.03a112.37 112.37 0 0 1-.048-2.093l3.85-1.283a3 3 0 0 0 1.86-1.793l4.653-12.408a3 3 0 0 1 3.758-1.793l2.526.842a1 1 0 0 0 1.21-.501l2.97-5.938c1.214-2.43 4.775-2.123 5.556.48l3.774 12.58a1 1 0 0 0 1.513.545l3.341-2.227a1 1 0 0 0 .323-.353l5.298-9.712a3 3 0 0 1 2.14-1.523l4.135-.69a3 3 0 0 1 2.414.655l3.892 3.244a1 1 0 0 0 1.347-.061l5.28-5.28c.046.845.077 1.752.097 2.732l-3.962 3.962a3 3 0 0 1-4.042.183l-3.893-3.243a1 1 0 0 0-.804-.218l-4.135.689a1 1 0 0 0-.714.507l-5.297 9.712c-.233.427-.565.79-.97 1.06l-3.34 2.228a3 3 0 0 1-4.538-1.635l-3.775-12.58c-.26-.868-1.447-.97-1.852-.16l-2.969 5.937a3 3 0 0 1-3.632 1.505l-2.526-.842a1 1 0 0 0-1.252.597L7.606 38.564a5 5 0 0 1-3.1 2.988L.072 43.029Z" fill="#fff"/><path fill-rule="evenodd" clip-rule="evenodd" d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="#2BEE6C"/><path d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" fill="#fff"/><path d="M45 .283v59.654c-.63.042-1.294.074-2 .098V.185c.706.025 1.37.056 2 .098Z" fill="#fff"/><path class="help-img-highlight" d="M.5 25.01c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.289a14.5 14.5 0 0 1 5.412-5.41c1.639-.936 3.579-1.418 6.289-1.661C16.822.61 20.265.61 24.9.61h10.2c4.635 0 8.078 0 10.795.245 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.579 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.795-.244 2.71-.726 4.65-1.66 6.29a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.412C1.47 50.655.988 48.716.745 46.005.5 43.288.5 39.845.5 35.21v-10.2Z"/></g><defs><clipPath id="l"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          HELP_KEY_IMG: z`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#m)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M39.192 29.192c5.077-5.077 5.077-13.308 0-18.385-5.076-5.077-13.308-5.077-18.384 0-5.077 5.077-5.077 13.308 0 18.385l1.287 1.291c1.137 1.142 1.706 1.712 2.097 2.387.267.462.472.957.608 1.473.2.755.2 1.56.2 3.171V48.75c0 1.077 0 1.615.134 2.119a4 4 0 0 0 .407.984c.262.45.643.831 1.404 1.592l.294.295c.654.654.982.981 1.365 1.086.26.07.533.07.792 0 .383-.105.71-.432 1.365-1.086l3.478-3.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.478-.479c-.655-.654-.982-.981-1.087-1.365a1.5 1.5 0 0 1 0-.791c.105-.384.432-.711 1.087-1.365l.478-.479c.655-.654.982-.981 1.087-1.365a1.5 1.5 0 0 0 0-.791c-.105-.384-.432-.711-1.087-1.365l-.492-.493c-.65-.65-.974-.974-1.08-1.355a1.5 1.5 0 0 1-.003-.788c.102-.382.425-.71 1.069-1.364l5.46-5.547Z"/><circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="m"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          HELP_USER_IMG: z`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#n)"><rect width="60" height="60" fill="#00ACE6" rx="30"/><path fill="#1AC6FF" stroke="#fff" stroke-width="2" d="M59 73c0 16.016-12.984 29-29 29S1 89.016 1 73c0-16.017 11-29 29-29s29 12.983 29 29ZM18.69 19.902a11 11 0 0 1 9.281-8.692 14.842 14.842 0 0 1 4.058 0 11 11 0 0 1 9.28 8.692c.178.866.322 1.75.44 2.625.132.977.132 1.968 0 2.945a39.467 39.467 0 0 1-.44 2.625 11 11 0 0 1-9.28 8.692 14.862 14.862 0 0 1-4.058 0 11 11 0 0 1-9.28-8.692 39.467 39.467 0 0 1-.44-2.625 11.004 11.004 0 0 1 0-2.945c.118-.876.262-1.759.44-2.625Z"/><circle cx="24.5" cy="23.5" r="1.5" fill="#fff"/><circle cx="35.5" cy="23.5" r="1.5" fill="#fff"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m31 20-3 8h4"/></g><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/><defs><clipPath id="n"><rect width="60" height="60" fill="#fff" rx="30"/></clipPath></defs></svg>`,
          HELP_LOCK_IMG: z`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#C653C6" rx="3"/><path fill="#fff" d="M20.034 15.216C20 15.607 20 16.07 20 17v2.808c0 1.13 0 1.696-.2 2.11a1.78 1.78 0 0 1-.584.714c-.366.28-1.051.42-2.423.7a7.076 7.076 0 0 0-1.597.511 9.001 9.001 0 0 0-4.353 4.353C10 30.005 10 32.336 10 37c0 4.663 0 6.995.843 8.804a9.001 9.001 0 0 0 4.353 4.353C17.005 51 19.336 51 24 51h12c4.663 0 6.995 0 8.804-.843a9.001 9.001 0 0 0 4.353-4.353C50 43.995 50 41.664 50 37c0-4.663 0-6.995-.843-8.804a9.001 9.001 0 0 0-4.353-4.353 7.076 7.076 0 0 0-1.597-.511c-1.372-.28-2.057-.42-2.423-.7a1.78 1.78 0 0 1-.583-.715C40 21.505 40 20.94 40 19.809V17c0-.929 0-1.393-.034-1.784a9 9 0 0 0-8.182-8.182C31.393 7 30.93 7 30 7s-1.393 0-1.784.034a9 9 0 0 0-8.182 8.182Z"/><path fill="#E87DE8" d="M22 17c0-.929 0-1.393.044-1.784a7 7 0 0 1 6.172-6.172C28.606 9 29.071 9 30 9s1.393 0 1.784.044a7 7 0 0 1 6.172 6.172c.044.39.044.855.044 1.784v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.394-.077-1.78a4 4 0 0 0-3.143-3.143C31.394 12 30.93 12 30 12s-1.394 0-1.78.077a4 4 0 0 0-3.143 3.143C25 15.606 25 16.07 25 17v4.5a1.5 1.5 0 0 1-3 0V17Z"/><path fill="#E87DE8" fill-rule="evenodd" d="M12 36.62c0-4.317 0-6.476.92-8.088a7 7 0 0 1 2.612-2.612c1.612-.92 3.77-.92 8.088-.92h6.855c.469 0 .703 0 .906.017 2.73.222 4.364 2.438 4.619 4.983.27-2.698 2.111-5 5.015-5A6.985 6.985 0 0 1 48 31.985v5.395c0 4.317 0 6.476-.92 8.088a7 7 0 0 1-2.612 2.612c-1.612.92-3.77.92-8.088.92h-5.855c-.469 0-.703 0-.906-.017-2.73-.222-4.364-2.438-4.619-4.983-.258 2.583-1.943 4.818-4.714 4.99-.155.01-.335.01-.694.01-.55 0-.825 0-1.057-.015a7 7 0 0 1-6.52-6.52C12 42.233 12 41.958 12 41.408V36.62Zm21.24-.273a4 4 0 1 0-6.478 0c.985 1.36 1.479 2.039 1.564 2.229.178.398.176.818.174 1.247V42.5a1.5 1.5 0 0 0 3 0v-2.677c-.002-.429-.004-.85.174-1.247.085-.19.579-.87 1.565-2.229Z" clip-rule="evenodd"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
          HELP_COMPAS_IMG: z`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#1DC956" rx="30"/><circle cx="30" cy="29.999" r="3" fill="#fff"/><path fill="#2BEE6C" stroke="#fff" stroke-width="2" d="m45.316 17.9-.88-.425.88.424a7.9 7.9 0 0 1 .026-.053c.093-.192.21-.432.26-.687l-.819-.162.819.162a2 2 0 0 0-.239-1.405c-.132-.224-.32-.412-.472-.562a8.415 8.415 0 0 1-.042-.042l-.042-.042c-.15-.151-.338-.34-.562-.472l-.508.862.508-.862a2 2 0 0 0-1.405-.239c-.255.05-.495.167-.687.26l-.053.026-15.05 7.246-.108.052c-1.131.545-1.843.887-2.456 1.374a6.994 6.994 0 0 0-1.13 1.13c-.487.613-.83 1.325-1.375 2.457l-.051.108-7.247 15.05-.025.053c-.094.192-.21.431-.26.686a2 2 0 0 0 .239 1.406l.855-.505-.856.505c.133.224.321.411.473.562l.042.042.041.042c.15.151.338.34.563.472a2 2 0 0 0 1.405.239l-.195-.981.195.98c.255-.05.494-.166.686-.26l.054-.025-.419-.87.419.87 15.05-7.247.107-.051c1.132-.545 1.844-.888 2.457-1.374a7.002 7.002 0 0 0 1.13-1.13c.487-.614.83-1.325 1.374-2.457l.052-.108 7.246-15.05Z"/><path fill="#1DC956" d="m33.376 32.723-2.669-3.43-14.85 14.849.206.205a1 1 0 0 0 1.141.194l15.105-7.273a3 3 0 0 0 1.067-4.545Z"/><path fill="#86F999" d="m26.624 27.276 2.669 3.43 14.85-14.849-.206-.205a1 1 0 0 0-1.141-.194L27.69 22.731a3 3 0 0 0-1.067 4.545Z"/><circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="29.5"/></svg>`,
          HELP_NOUN_IMG: z`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><rect width="60" height="60" fill="#794CFF" rx="3"/><path fill="#987DE8" stroke="#fff" stroke-width="2" d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"/><path fill="#fff" d="M37.5 25h10v10h-10z"/><path fill="#4019B2" d="M42.5 25h5v10h-5z"/><path fill="#fff" d="M19.5 25h10v10h-10z"/><path fill="#4019B2" d="M24.5 25h5v10h-5z"/><path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"/><rect class="help-img-highlight" width="59" height="59" x=".5" y=".5" rx="2.5"/></svg>`,
          HELP_DAO_IMG: z`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#o)"><path fill="#EB8B47" d="M0 24.9c0-9.252 0-13.878 1.97-17.332A15 15 0 0 1 7.569 1.97C11.023 0 15.648 0 24.9 0h10.2c9.251 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.022 60 15.648 60 24.899v10.2c0 9.252 0 13.878-1.97 17.332a15.001 15.001 0 0 1-5.598 5.598c-3.455 1.97-8.08 1.97-17.332 1.97H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.351 0 35.1V24.9Z"/><path class="help-img-highlight" d="M.5 24.9c0-4.635 0-8.078.244-10.795.244-2.71.726-4.65 1.66-6.29a14.5 14.5 0 0 1 5.412-5.41C9.455 1.468 11.395.986 14.105.743 16.822.5 20.265.5 24.9.5h10.2c4.635 0 8.078 0 10.795.244 2.71.243 4.65.725 6.29 1.66a14.5 14.5 0 0 1 5.41 5.411c.935 1.64 1.417 3.58 1.66 6.29.244 2.717.245 6.16.245 10.794v10.2c0 4.635 0 8.078-.244 10.796-.244 2.71-.726 4.65-1.66 6.289a14.5 14.5 0 0 1-5.412 5.41c-1.639.936-3.579 1.418-6.289 1.661-2.717.244-6.16.244-10.795.244H24.9c-4.635 0-8.078 0-10.795-.244-2.71-.243-4.65-.725-6.29-1.66a14.5 14.5 0 0 1-5.41-5.411c-.935-1.64-1.417-3.58-1.66-6.29C.5 43.178.5 39.734.5 35.1V24.9Z"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M19 52c5.523 0 10-4.477 10-10s-4.477-10-10-10S9 36.477 9 42s4.477 10 10 10Z"/><path fill="#fff" fill-rule="evenodd" d="M42.844 8.326a1 1 0 0 0-1.687 0L28.978 27.463A1 1 0 0 0 29.822 29h24.357a1 1 0 0 0 .843-1.537L42.844 8.326Z" clip-rule="evenodd"/><path fill="#FF974C" fill-rule="evenodd" d="M42.335 11.646c.324.115.571.504 1.066 1.28l7.332 11.523c.562.883.843 1.325.792 1.69a1 1 0 0 1-.342.623c-.28.238-.803.238-1.85.238H34.667c-1.047 0-1.57 0-1.85-.238a1 1 0 0 1-.342-.623c-.051-.365.23-.806.792-1.69l7.332-11.523c.495-.776.742-1.165 1.066-1.28a1 1 0 0 1 .67 0ZM35 27a7 7 0 0 0 7-7 7 7 0 0 0 7 7H35Z" clip-rule="evenodd"/><path fill="#FF974C" stroke="#fff" stroke-width="2" d="M10.106 9.357c-.109.32-.107.682-.106.975V25.668c-.001.293-.003.654.106.975a2 2 0 0 0 1.251 1.25c.32.11.682.108.975.107H19c5.523 0 10-4.477 10-10S24.523 8 19 8h-6.668c-.293-.001-.654-.003-.975.106a2 2 0 0 0-1.25 1.251Z"/><circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/><circle cx="19" cy="41.999" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2"/></g><defs><clipPath id="o"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          SEARCH_ICON: z`<svg width="20" height="21"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.432 13.992c-.354-.353-.91-.382-1.35-.146a5.5 5.5 0 1 1 2.265-2.265c-.237.441-.208.997.145 1.35l3.296 3.296a.75.75 0 1 1-1.06 1.061l-3.296-3.296Zm.06-5a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" fill="#949E9E"/></svg>`,
          HELP_ICON: z`<svg width="11" height="17" viewBox="0 0 11 17"><path fill="#fff" d="M5.22 2.97c-1.07 0-2.25.843-2.25 2.25a.75.75 0 0 1-1.5 0c0-2.393 2.019-3.75 3.75-3.75 1.73 0 3.75 1.357 3.75 3.75 0 1.64-1.038 2.466-1.785 3.057-.802.635-1.215.984-1.215 1.693a.75.75 0 1 1-1.5 0c0-1.466.985-2.24 1.681-2.788l.103-.081C7.007 6.504 7.47 6.08 7.47 5.22c0-1.407-1.181-2.25-2.25-2.25ZM5.22 14.97a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"/></svg>`,
          WALLET_ICON: z`<svg width="15" height="14" fill="none" viewBox="0 0 15 14"><path fill="#fff" fill-rule="evenodd" d="M.64 9.2v-3h.001c.009-1.857.07-2.886.525-3.682a4 4 0 0 1 1.492-1.493C3.58.5 4.813.5 7.28.5h3.735c.58 0 .871 0 1.114.04A3 3 0 0 1 14.6 3.011c.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041h-.777c.178.307.302.648.362 1.011.04.243.04.533.04 1.114 0 .58 0 .871-.04 1.114a3 3 0 0 1-2.471 2.47c-.243.041-.533.041-1.114.041H4.507A3.867 3.867 0 0 1 .64 9.633V9.2ZM7.28 2h3.735c.64 0 .779.005.87.02a1.5 1.5 0 0 1 1.235 1.236c.015.09.02.229.02.869s-.005.779-.02.87a1.5 1.5 0 0 1-1.236 1.235c-.09.015-.229.02-.869.02H4.023c-.697 0-1.345.21-1.883.572V6.25h.001c.004-.791.015-1.383.059-1.867.056-.629.157-.926.269-1.122a2.5 2.5 0 0 1 .932-.933c.197-.111.494-.212 1.123-.268C5.173 2 6.019 2 7.28 2Zm-.265 5.75H4.023c-1.04 0-1.883.843-1.883 1.883A2.367 2.367 0 0 0 4.507 12h2.508c.64 0 .779-.005.87-.02a1.5 1.5 0 0 0 1.235-1.236c.015-.09.02-.229.02-.869s-.005-.779-.02-.87A1.5 1.5 0 0 0 7.884 7.77c-.09-.015-.228-.02-.869-.02Z" clip-rule="evenodd"/></svg>`,
          NETWORK_PLACEHOLDER: z`<svg width="28" height="28" fill="none" viewBox="0 0 28 28"><mask id="p" width="26" height="28" x="1" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#D9D9D9" d="M12 1.172a4 4 0 0 1 4 0l8.124 4.69a4 4 0 0 1 2 3.465v9.381a4 4 0 0 1-2 3.464L16 26.862a4 4 0 0 1-4 0l-8.124-4.69a4 4 0 0 1-2-3.464V9.327a4 4 0 0 1 2-3.464L12 1.173Z"/></mask><g mask="url(#p)"><path id="network-placeholder-fill" fill="#fff" d="M0 0h28v28H0z"/><path id="network-placeholder-dash" stroke="#000" stroke-dasharray="2 2" d="m8.953 2.931 2.032-1.173.25.433 1.015-.586c.269-.155.553-.271.844-.35l-.13-.483a4.003 4.003 0 0 1 2.071 0l-.13.483c.293.079.576.195.845.35l1.016.586.25-.433 2.03 1.173-.25.433 2.032 1.173.25-.433 2.03 1.172-.25.433 1.016.587c.269.155.512.342.725.556l.354-.354a4.003 4.003 0 0 1 1.035 1.794l-.483.129c.078.292.12.596.12.906v1.172h.5v2.346h-.5v2.345h.5v2.345h-.5v1.173c0 .31-.042.614-.12.906l.483.13a4.003 4.003 0 0 1-1.035 1.793l-.354-.354a3.498 3.498 0 0 1-.725.556l-1.015.586.25.434-2.031 1.172-.25-.433-2.031 1.173.25.433-2.031 1.172-.25-.433-1.016.587a3.494 3.494 0 0 1-.844.35l.13.482a4.003 4.003 0 0 1-2.071 0l.13-.483a3.496 3.496 0 0 1-.845-.35l-1.015-.586-.25.433-2.032-1.172.25-.433-2.03-1.173-.25.433L4.89 22.76l.25-.434-1.015-.586a3.498 3.498 0 0 1-.725-.556l-.354.354a4.003 4.003 0 0 1-1.035-1.794l.483-.13a3.497 3.497 0 0 1-.12-.905v-1.173h-.5V15.19h.5v-2.345h-.5v-2.346h.5V9.327c0-.31.042-.614.12-.906l-.483-.13a4.003 4.003 0 0 1 1.035-1.793l.354.354c.213-.214.456-.401.725-.556l1.015-.587-.25-.433 2.031-1.172.25.433 2.031-1.173-.25-.433Z"/><path fill="#798686" stroke="#fff" d="M14.243 13.563 14 13.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.538.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.538-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#9EA9A9" stroke="#fff" d="M14.243 8.563 14 8.428l-.243.135-6.388 3.549-.024.013c-.432.24-.79.44-1.053.622-.266.184-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.316.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722l-.468-.177.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.316-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-6.388-3.55Z"/><path fill="#C9CFCF" stroke="#fff" d="m22.344 9.53-.468-.176.468.177a1.5 1.5 0 0 0 0-1.062l-.468.177.468-.177c-.12-.317-.37-.537-.636-.722-.263-.183-.62-.382-1.053-.622l-.024-.013-3.163-1.758-.09-.05c-1.163-.645-1.856-1.03-2.606-1.161a4.5 4.5 0 0 0-1.544 0c-.75.13-1.443.516-2.607 1.162l-.088.05-3.164 1.757-.024.013c-.432.24-.79.44-1.053.622-.266.185-.516.405-.636.722a1.5 1.5 0 0 0 0 1.062c.12.317.37.537.636.722.263.183.62.382 1.053.622l.024.013 3.164 1.758.088.049c1.164.646 1.857 1.032 2.607 1.162.51.09 1.033.09 1.544 0 .75-.13 1.443-.516 2.606-1.162l.09-.05 3.163-1.757.024-.013c.432-.24.79-.44 1.053-.622.266-.184.516-.405.636-.722Z"/></g></svg>`,
          WALLET_PLACEHOLDER: z`<svg width="60" height="60" fill="none" viewBox="0 0 60 60"><g clip-path="url(#q)"><path id="wallet-placeholder-fill" fill="#fff" d="M0 24.9c0-9.251 0-13.877 1.97-17.332a15 15 0 0 1 5.598-5.597C11.023 0 15.648 0 24.9 0h10.2c9.252 0 13.877 0 17.332 1.97a15 15 0 0 1 5.597 5.598C60 11.023 60 15.648 60 24.9v10.2c0 9.252 0 13.877-1.97 17.332a15.001 15.001 0 0 1-5.598 5.597C48.977 60 44.352 60 35.1 60H24.9c-9.251 0-13.877 0-17.332-1.97a15 15 0 0 1-5.597-5.598C0 48.977 0 44.352 0 35.1V24.9Z"/><path id="wallet-placeholder-dash" stroke="#000" stroke-dasharray="4 4" stroke-width="1.5" d="M.04 41.708a231.598 231.598 0 0 1-.039-4.403l.75-.001L.75 35.1v-2.55H0v-5.1h.75V24.9l.001-2.204h-.75c.003-1.617.011-3.077.039-4.404l.75.016c.034-1.65.099-3.08.218-4.343l-.746-.07c.158-1.678.412-3.083.82-4.316l.713.236c.224-.679.497-1.296.827-1.875a14.25 14.25 0 0 1 1.05-1.585L3.076 5.9A15 15 0 0 1 5.9 3.076l.455.596a14.25 14.25 0 0 1 1.585-1.05c.579-.33 1.196-.603 1.875-.827l-.236-.712C10.812.674 12.217.42 13.895.262l.07.746C15.23.89 16.66.824 18.308.79l-.016-.75C19.62.012 21.08.004 22.695.001l.001.75L24.9.75h2.55V0h5.1v.75h2.55l2.204.001v-.75c1.617.003 3.077.011 4.404.039l-.016.75c1.65.034 3.08.099 4.343.218l.07-.746c1.678.158 3.083.412 4.316.82l-.236.713c.679.224 1.296.497 1.875.827a14.24 14.24 0 0 1 1.585 1.05l.455-.596A14.999 14.999 0 0 1 56.924 5.9l-.596.455c.384.502.735 1.032 1.05 1.585.33.579.602 1.196.827 1.875l.712-.236c.409 1.233.663 2.638.822 4.316l-.747.07c.119 1.264.184 2.694.218 4.343l.75-.016c.028 1.327.036 2.787.039 4.403l-.75.001.001 2.204v2.55H60v5.1h-.75v2.55l-.001 2.204h.75a231.431 231.431 0 0 1-.039 4.404l-.75-.016c-.034 1.65-.099 3.08-.218 4.343l.747.07c-.159 1.678-.413 3.083-.822 4.316l-.712-.236a10.255 10.255 0 0 1-.827 1.875 14.242 14.242 0 0 1-1.05 1.585l.596.455a14.997 14.997 0 0 1-2.824 2.824l-.455-.596c-.502.384-1.032.735-1.585 1.05-.579.33-1.196.602-1.875.827l.236.712c-1.233.409-2.638.663-4.316.822l-.07-.747c-1.264.119-2.694.184-4.343.218l.016.75c-1.327.028-2.787.036-4.403.039l-.001-.75-2.204.001h-2.55V60h-5.1v-.75H24.9l-2.204-.001v.75a231.431 231.431 0 0 1-4.404-.039l.016-.75c-1.65-.034-3.08-.099-4.343-.218l-.07.747c-1.678-.159-3.083-.413-4.316-.822l.236-.712a10.258 10.258 0 0 1-1.875-.827 14.252 14.252 0 0 1-1.585-1.05l-.455.596A14.999 14.999 0 0 1 3.076 54.1l.596-.455a14.24 14.24 0 0 1-1.05-1.585 10.259 10.259 0 0 1-.827-1.875l-.712.236C.674 49.188.42 47.783.262 46.105l.746-.07C.89 44.77.824 43.34.79 41.692l-.75.016Z"/><path fill="#fff" fill-rule="evenodd" d="M35.643 32.145c-.297-.743-.445-1.114-.401-1.275a.42.42 0 0 1 .182-.27c.134-.1.463-.1 1.123-.1.742 0 1.499.046 2.236-.05a6 6 0 0 0 5.166-5.166c.051-.39.051-.855.051-1.784 0-.928 0-1.393-.051-1.783a6 6 0 0 0-5.166-5.165c-.39-.052-.854-.052-1.783-.052h-7.72c-4.934 0-7.401 0-9.244 1.051a8 8 0 0 0-2.985 2.986C16.057 22.28 16.003 24.58 16 29 15.998 31.075 16 33.15 16 35.224A7.778 7.778 0 0 0 23.778 43H28.5c1.394 0 2.09 0 2.67-.116a6 6 0 0 0 4.715-4.714c.115-.58.115-1.301.115-2.744 0-1.31 0-1.964-.114-2.49a4.998 4.998 0 0 0-.243-.792Z" clip-rule="evenodd"/><path fill="#9EA9A9" fill-rule="evenodd" d="M37 18h-7.72c-2.494 0-4.266.002-5.647.126-1.361.122-2.197.354-2.854.728a6.5 6.5 0 0 0-2.425 2.426c-.375.657-.607 1.492-.729 2.853-.11 1.233-.123 2.777-.125 4.867 0 .7 0 1.05.097 1.181.096.13.182.181.343.2.163.02.518-.18 1.229-.581a6.195 6.195 0 0 1 3.053-.8H37c.977 0 1.32-.003 1.587-.038a4.5 4.5 0 0 0 3.874-3.874c.036-.268.039-.611.039-1.588 0-.976-.003-1.319-.038-1.587a4.5 4.5 0 0 0-3.875-3.874C38.32 18.004 37.977 18 37 18Zm-7.364 12.5h-7.414a4.722 4.722 0 0 0-4.722 4.723 6.278 6.278 0 0 0 6.278 6.278H28.5c1.466 0 1.98-.008 2.378-.087a4.5 4.5 0 0 0 3.535-3.536c.08-.397.087-.933.087-2.451 0-1.391-.009-1.843-.08-2.17a3.5 3.5 0 0 0-2.676-2.676c-.328-.072-.762-.08-2.108-.08Z" clip-rule="evenodd"/></g><defs><clipPath id="q"><path fill="#fff" d="M0 0h60v60H0z"/></clipPath></defs></svg>`,
          TOKEN_PLACEHOLDER: z`<svg width="60" height="60" viewBox="0 0 60 60" fill="none"><rect id="token-placeholder-fill" width="58" height="58" x="1" y="1" fill="#fff" rx="29"/><path fill="#3B4040" stroke="#fff" stroke-width="2" d="M32 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5.566c0 .357.192.685.495.875a16.001 16.001 0 0 1 4.256 3.894c.667.88.33 2.113-.627 2.665l-2.494 1.44c-.956.552-2.166.204-2.913-.609a9.12 9.12 0 1 0 .064 12.267c.739-.82 1.945-1.181 2.907-.64l2.509 1.415c.962.542 1.312 1.77.654 2.658a16 16 0 0 1-4.356 4.028c-.303.19-.495.518-.495.875V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2.992c0-.602-.528-1.065-1.13-1.032-.579.032-1.16.032-1.74 0-.602-.032-1.13.43-1.13 1.032V50a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5.566c0-.357-.192-.685-.495-.875a16 16 0 0 1 0-27.118c.303-.19.495-.517.495-.875V10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2.992c0 .601.528 1.064 1.13 1.032.58-.032 1.161-.032 1.74 0 .602.033 1.13-.43 1.13-1.032V10Z"/><rect id="token-placeholder-dash" width="58" height="58" x="1" y="1" stroke="#000" stroke-dasharray="6 6" stroke-width="2" rx="29"/></svg>`,
          ACCOUNT_COPY: z`<svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path fill="#fff" fill-rule="evenodd" d="M4.003 4.005c.012-1.225.074-1.936.391-2.491a3 3 0 0 1 1.12-1.12C6.204 0 7.136 0 9 0s2.795 0 3.486.394a3 3 0 0 1 1.12 1.12C14 2.204 14 3.136 14 5s0 2.795-.394 3.486a3 3 0 0 1-1.12 1.12c-.555.317-1.266.379-2.491.391l.002.003c-.012 1.222-.075 1.932-.391 2.486a3 3 0 0 1-1.12 1.12C7.796 14 6.864 14 5 14s-2.795 0-3.486-.394a3 3 0 0 1-1.12-1.12C0 11.796 0 10.864 0 9s0-2.795.394-3.486a3 3 0 0 1 1.12-1.12c.554-.316 1.264-.379 2.486-.391l.003.002ZM9 8.5c-.959 0-1.58-.001-2.05-.043-.45-.04-.613-.109-.693-.154a1.5 1.5 0 0 1-.56-.56c-.045-.08-.113-.243-.154-.693C5.501 6.58 5.5 5.959 5.5 5c0-.959.001-1.58.043-2.05.04-.45.109-.613.154-.693a1.5 1.5 0 0 1 .56-.56c.08-.045.243-.113.693-.154C7.42 1.501 8.041 1.5 9 1.5c.959 0 1.58.001 2.05.043.45.04.613.109.693.154a1.5 1.5 0 0 1 .56.56c.045.08.113.243.154.693.042.47.043 1.091.043 2.05 0 .959-.001 1.58-.043 2.05-.04.45-.109.613-.154.693a1.5 1.5 0 0 1-.56.56c-.08.045-.242.113-.693.154-.47.042-1.091.043-2.05.043ZM4 5.503a13.77 13.77 0 0 0-1.05.04c-.45.04-.613.109-.693.154a1.5 1.5 0 0 0-.56.56c-.045.08-.113.243-.154.693C1.501 7.42 1.5 8.041 1.5 9c0 .959.001 1.58.043 2.05.04.45.109.613.154.693a1.5 1.5 0 0 0 .56.56c.08.045.243.113.693.154.47.042 1.091.043 2.05.043.959 0 1.58-.001 2.05-.043.45-.04.613-.109.693-.154a1.5 1.5 0 0 0 .56-.56c.045-.08.113-.242.154-.693.025-.283.035-.619.04-1.05-1.534-.003-2.358-.037-2.983-.394a3 3 0 0 1-1.12-1.12c-.357-.625-.39-1.449-.394-2.983Z" clip-rule="evenodd"/></svg>`,
          ACCOUNT_DISCONNECT: z`<svg width="16" height="14" fill="none" viewBox="0 0 16 14"><path fill="#fff" d="M9.677 1.5h-2.61c-1.261 0-2.107.001-2.757.06-.629.056-.926.157-1.122.268a2.5 2.5 0 0 0-.933.933c-.112.196-.212.493-.269 1.122-.058.65-.06 1.496-.06 2.757v.72c0 1.26.002 2.107.06 2.756.057.63.157.927.27 1.123a2.5 2.5 0 0 0 .932.933c.196.111.493.212 1.122.268.65.059 1.496.06 2.757.06h2.61a.75.75 0 1 1 0 1.5h-2.61c-2.467 0-3.7 0-4.622-.525a4 4 0 0 1-1.493-1.493C.427 11.06.427 9.827.427 7.36v-.72c0-2.467 0-3.7.525-4.622A4 4 0 0 1 2.445.525C3.366 0 4.6 0 7.067 0h2.61a.75.75 0 1 1 0 1.5Z"/><path fill="#fff" d="M10.896 11.03a.75.75 0 0 1 0-1.06l1.793-1.793a.25.25 0 0 0-.176-.427H8.177a.75.75 0 0 1 0-1.5h4.336a.25.25 0 0 0 .176-.427L10.896 4.03a.75.75 0 0 1 1.061-1.06l3.323 3.323a1 1 0 0 1 0 1.414l-3.323 3.323a.75.75 0 0 1-1.06 0Z"/></svg>`,
          GLOBE_ICON: z`<svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#fff" fill-rule="evenodd" d="M15.5 8a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Zm-2.113.75c.301 0 .535.264.47.558a6.01 6.01 0 0 1-2.867 3.896c-.203.116-.42-.103-.334-.32.409-1.018.691-2.274.797-3.657a.512.512 0 0 1 .507-.477h1.427Zm.47-2.058c.065.294-.169.558-.47.558H11.96a.512.512 0 0 1-.507-.477c-.106-1.383-.389-2.638-.797-3.656-.087-.217.13-.437.333-.32a6.01 6.01 0 0 1 2.868 3.895Zm-4.402.558c.286 0 .515-.24.49-.525-.121-1.361-.429-2.534-.83-3.393-.279-.6-.549-.93-.753-1.112a.535.535 0 0 0-.724 0c-.204.182-.474.513-.754 1.112-.4.859-.708 2.032-.828 3.393a.486.486 0 0 0 .49.525h2.909Zm-5.415 0c.267 0 .486-.21.507-.477.106-1.383.389-2.638.797-3.656.087-.217-.13-.437-.333-.32a6.01 6.01 0 0 0-2.868 3.895c-.065.294.169.558.47.558H4.04ZM2.143 9.308c-.065-.294.169-.558.47-.558H4.04c.267 0 .486.21.507.477.106 1.383.389 2.639.797 3.657.087.217-.13.436-.333.32a6.01 6.01 0 0 1-2.868-3.896Zm3.913-.033a.486.486 0 0 1 .49-.525h2.909c.286 0 .515.24.49.525-.121 1.361-.428 2.535-.83 3.394-.279.6-.549.93-.753 1.112a.535.535 0 0 1-.724 0c-.204-.182-.474-.513-.754-1.112-.4-.859-.708-2.033-.828-3.394Z" clip-rule="evenodd"/></svg>`,
        },
        qi = g`.w3m-toolbar-placeholder{top:0;bottom:0;left:0;right:0;width:100%;position:absolute;display:block;pointer-events:none;height:100px;border-radius:calc(var(--w3m-background-border-radius) * .9);background-color:var(--w3m-background-color);background-image:var(--w3m-background-image-url);background-position:center;background-size:cover}.w3m-toolbar{height:38px;display:flex;position:relative;margin:5px 15px 5px 5px;justify-content:space-between;align-items:center}.w3m-toolbar img,.w3m-toolbar svg{height:28px;object-position:left center;object-fit:contain}#w3m-wc-logo path{fill:var(--w3m-accent-fill-color)}button{width:28px;height:28px;border-radius:var(--w3m-icon-button-border-radius);border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;background-color:var(--w3m-color-bg-1);box-shadow:0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-bg-2)}button svg{display:block;object-position:center}button path{fill:var(--w3m-color-fg-1)}.w3m-toolbar div{display:flex}.w3m-toolbar div button:first-child{margin-right:16px}.w3m-help-active button:first-child{background-color:var(--w3m-color-fg-1)}.w3m-help-active button:first-child path{fill:var(--w3m-color-bg-1)}@media(hover:hover){button:hover{background-color:var(--w3m-color-bg-2)}}`;
      var to = Object.defineProperty,
        eo = Object.getOwnPropertyDescriptor,
        wr = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? eo(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && to(r, i, a), a;
        };
      let We = class extends S {
        constructor() {
          super(),
            (this.isHelp = !1),
            (this.unsubscribeRouter = void 0),
            (this.unsubscribeRouter = d.AV.subscribe((n) => {
              this.isHelp = "Help" === n.view;
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unsubscribeRouter) || n.call(this);
        }
        onHelp() {
          d.AV.push("Help");
        }
        logoTemplate() {
          var n;
          const r =
            null == (n = d.Ic.state.themeVariables)
              ? void 0
              : n["--w3m-logo-image-url"];
          return r ? b`<img src="${r}">` : L.WALLET_CONNECT_LOGO;
        }
        render() {
          const n = { "w3m-help-active": this.isHelp };
          return b`<div class="w3m-toolbar-placeholder"></div><div class="w3m-toolbar">${this.logoTemplate()}<div class="${vt(
            n
          )}"><button @click="${this.onHelp}">${
            L.HELP_ICON
          }</button> <button @click="${d.jb.close}">${
            L.CROSS_ICON
          }</button></div></div>`;
        }
      };
      (We.styles = [D.globalCss, qi]),
        wr([et()], We.prototype, "isHelp", 2),
        (We = wr([R("w3m-modal-backcard")], We));
      const no = g`main{padding:20px;padding-top:0;width:100%}`;
      let fn = class extends S {
        render() {
          return b`<main><slot></slot></main>`;
        }
      };
      (fn.styles = [D.globalCss, no]),
        (fn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-modal-content")], fn));
      const ao = g`footer{padding:10px;display:flex;flex-direction:column;align-items:inherit;justify-content:inherit;border-top:1px solid var(--w3m-color-bg-2)}`;
      let wn = class extends S {
        render() {
          return b`<footer><slot></slot></footer>`;
        }
      };
      (wn.styles = [D.globalCss, ao]),
        (wn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-modal-footer")], wn));
      const ho = g`header{display:flex;justify-content:center;align-items:center;padding:20px;position:relative}.w3m-border{border-bottom:1px solid var(--w3m-color-bg-2);margin-bottom:20px}header button{padding:15px 20px}header button:active{opacity:.5}@media(hover:hover){header button:hover{opacity:.5}}.w3m-back-btn{position:absolute;left:0}.w3m-action-btn{position:absolute;right:0}path{fill:var(--w3m-accent-color)}`;
      var uo = Object.defineProperty,
        mo = Object.getOwnPropertyDescriptor,
        xe = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? mo(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && uo(r, i, a), a;
        };
      let Wt = class extends S {
        constructor() {
          super(...arguments),
            (this.title = ""),
            (this.onAction = void 0),
            (this.actionIcon = void 0),
            (this.border = !1);
        }
        backBtnTemplate() {
          return b`<button class="w3m-back-btn" @click="${d.AV.goBack}">${L.BACK_ICON}</button>`;
        }
        actionBtnTemplate() {
          return b`<button class="w3m-action-btn" @click="${this.onAction}">${this.actionIcon}</button>`;
        }
        render() {
          const r = d.AV.state.history.length > 1,
            i = this.title
              ? b`<w3m-text variant="big-bold">${this.title}</w3m-text>`
              : b`<slot></slot>`;
          return b`<header class="${vt({ "w3m-border": this.border })}">${
            r ? this.backBtnTemplate() : null
          } ${i} ${this.onAction ? this.actionBtnTemplate() : null}</header>`;
        }
      };
      (Wt.styles = [D.globalCss, ho]),
        xe([_()], Wt.prototype, "title", 2),
        xe([_()], Wt.prototype, "onAction", 2),
        xe([_()], Wt.prototype, "actionIcon", 2),
        xe([_()], Wt.prototype, "border", 2),
        (Wt = xe([R("w3m-modal-header")], Wt));
      const po = {
          1: "692ed6ba-e569-459a-556a-776476829e00",
          42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
          43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
          56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
          250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
          10: "ab9c186a-c52f-464b-2906-ca59d760a400",
          137: "41d04d42-da3b-4453-8506-668cc0727900",
          100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
          9001: "f926ff41-260d-4028-635e-91913fc28e00",
          324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
          314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
          4689: "34e68754-e536-40da-c153-6ef2e7188a00",
          1088: "3897a66d-40b9-4833-162f-a2c90531c900",
          1284: "161038da-44ae-4ec7-1208-0ea569454b00",
          1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
        },
        go = {
          ETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
          WETH: { icon: "692ed6ba-e569-459a-556a-776476829e00" },
          AVAX: { icon: "30c46e53-e989-45fb-4549-be3bd4eb3b00" },
          FTM: { icon: "06b26297-fe0c-4733-5d6b-ffa5498aac00" },
          BNB: { icon: "93564157-2e8e-4ce7-81df-b264dbee9b00" },
          MATIC: { icon: "41d04d42-da3b-4453-8506-668cc0727900" },
          OP: { icon: "ab9c186a-c52f-464b-2906-ca59d760a400" },
          xDAI: { icon: "02b53f6a-e3d4-479e-1cb4-21178987d100" },
          EVMOS: { icon: "f926ff41-260d-4028-635e-91913fc28e00" },
          METIS: { icon: "3897a66d-40b9-4833-162f-a2c90531c900" },
          IOTX: { icon: "34e68754-e536-40da-c153-6ef2e7188a00" },
        },
        yt = {
          externalWallets() {
            const { isStandalone: n } = d.zb.state;
            if (n) return [];
            let r = d.Id.client().getConnectors();
            return (r = r.filter((i) => "injected" !== i.id)), r;
          },
          manualWallets() {
            var n, r;
            const { mobileWallets: i, desktopWallets: l } = d.t0.state,
              a = null == (n = yt.recentWallet()) ? void 0 : n.id,
              c = (d.zv.isMobile() ? i : l)?.filter(($) => a !== $.id);
            return null !=
              (r = d.zv.isMobile()
                ? c?.map(({ id: $, name: C, links: A }) => ({
                    id: $,
                    name: C,
                    mobile: A,
                    links: A,
                  }))
                : c?.map(({ id: $, name: C, links: A }) => ({
                    id: $,
                    name: C,
                    desktop: A,
                    links: A,
                  })))
              ? r
              : [];
          },
          installedInjectedWallets() {
            const { isStandalone: n } = d.zb.state;
            if (n) return [];
            if (!d.Id.client().isInjectedProviderInstalled()) return [];
            const { namespace: r } = d.Id.client(),
              { injectedWallets: i } = d.uc.state;
            let l = i.filter(
              ({ injected: a }) =>
                !!a.some(
                  (s) =>
                    d.Id.client().safeCheckInjectedProvider(s.injected_id) &&
                    s.namespace === r
                )
            );
            return (
              l.length > 1 &&
                (l = l.filter(
                  ({ injected: a }) =>
                    !!a
                      .map(({ injected_id: s }) => s)
                      .every((s) => "isMetaMask" !== s)
                )),
              l.length
                ? l
                : [{ name: "Browser", id: "browser", image_id: void 0 }]
            );
          },
          injectedWallets() {
            const { isStandalone: n } = d.zb.state,
              {
                explorerExcludedWalletIds: r,
                explorerRecommendedWalletIds: i,
              } = d.t0.state,
              l = d.zv.isMobile();
            if (n || "ALL" === r || l) return [];
            const { namespace: a } = d.Id.client(),
              { injectedWallets: s } = d.uc.state;
            return s.filter(({ id: c, injected: $ }) => {
              const C = d.zv.isArray(r) ? r : [],
                A = d.zv.isArray(i) ? i : [];
              return !!$.some(
                (nt) => nt.namespace === a && !C.includes(c) && !A.includes(c)
              );
            });
          },
          recentWallet: () => E.getRecentWallet(),
          recomendedWallets(n = !1) {
            var r;
            const a = [
                ...yt.installedInjectedWallets().map(({ id: c }) => c),
                n || null == (r = yt.recentWallet()) ? void 0 : r.id,
              ],
              { recomendedWallets: s } = d.uc.state;
            return s.filter((c) => !a.includes(c.id));
          },
        },
        E = {
          MOBILE_BREAKPOINT: 600,
          W3M_RECENT_WALLET_DATA: "W3M_RECENT_WALLET_DATA",
          EXPLORER_WALLET_URL:
            "https://explorer.walletconnect.com/?type=wallet",
          rejectStandaloneButtonComponent() {
            const { isStandalone: n } = d.zb.state;
            if (n)
              throw new Error(
                "Web3Modal button components are not available in standalone mode."
              );
          },
          getShadowRootElement(n, r) {
            const i = n.renderRoot.querySelector(r);
            if (!i) throw new Error(`${r} not found`);
            return i;
          },
          getWalletIcon({ id: n, image_id: r }) {
            const { walletImages: i } = d.t0.state;
            return null != i && i[n]
              ? i[n]
              : r
              ? d.uc.getWalletImageUrl(r)
              : "";
          },
          getWalletName: (n, r = !1) => (r ? n.split(" ")[0] : n),
          getChainIcon(n) {
            var r;
            const i = po[n],
              { projectId: l, chainImages: a } = d.t0.state;
            return null != (r = a?.[n])
              ? r
              : l && i
              ? d.uc.getAssetImageUrl(i)
              : "";
          },
          getTokenIcon(n) {
            var r, i;
            const l = null == (r = go[n]) ? void 0 : r.icon,
              { projectId: a, tokenImages: s } = d.t0.state;
            return null != (i = s?.[n])
              ? i
              : a && l
              ? d.uc.getAssetImageUrl(l)
              : "";
          },
          isMobileAnimation: () => window.innerWidth <= E.MOBILE_BREAKPOINT,
          preloadImage: (n) =>
            (0, m.Z)(function* () {
              const r = new Promise((i, l) => {
                const a = new Image();
                (a.onload = i), (a.onerror = l), (a.src = n);
              });
              return Promise.race([r, d.zv.wait(3e3)]);
            })(),
          getErrorMessage: (n) =>
            n instanceof Error ? n.message : "Unknown Error",
          debounce(n, r = 500) {
            let i;
            return (...l) => {
              i && clearTimeout(i),
                (i = setTimeout(function a() {
                  n(...l);
                }, r));
            };
          },
          handleMobileLinking(n) {
            const { standaloneUri: r } = d.zb.state,
              { pairingUri: i } = d.kD.state,
              { mobile: l, name: a } = n,
              s = l?.native,
              c = l?.universal;
            E.setRecentWallet(n),
              (function $(C) {
                let A = "";
                s
                  ? (A = d.zv.formatUniversalUrl(s, C, a))
                  : c && (A = d.zv.formatNativeUrl(c, C, a)),
                  d.zv.openHref(A, "_self");
              })(r || i);
          },
          handleAndroidLinking() {
            const { standaloneUri: n } = d.zb.state,
              { pairingUri: r } = d.kD.state;
            n
              ? (d.zv.setWalletConnectAndroidDeepLink(n),
                d.zv.openHref(n, "_self"))
              : (d.zv.setWalletConnectAndroidDeepLink(r),
                d.zv.openHref(r, "_self"));
          },
          handleUriCopy: () =>
            (0, m.Z)(function* () {
              const { standaloneUri: n } = d.zb.state,
                { pairingUri: r } = d.kD.state;
              n
                ? yield navigator.clipboard.writeText(n)
                : yield navigator.clipboard.writeText(r),
                d.Vs.openToast("Link copied", "success");
            })(),
          handleConnectorConnection: (n, r) =>
            (0, m.Z)(function* () {
              try {
                const { selectedChain: i } = d.zb.state;
                yield d.Id.client().connectConnector(n, i?.id), d.jb.close();
              } catch (i) {
                console.error(i),
                  r ? r() : d.Vs.openToast(E.getErrorMessage(i), "error");
              }
            })(),
          getCustomImageUrls() {
            const { chainImages: n, walletImages: r } = d.t0.state,
              i = Object.values(n ?? {}),
              l = Object.values(r ?? {});
            return Object.values([...i, ...l]);
          },
          truncate: (n, r = 8) =>
            n.length <= r
              ? n
              : `${n.substring(0, 4)}...${n.substring(n.length - 4)}`,
          generateAvatarColors(n) {
            var r;
            const i =
                null == (r = n.match(/.{1,7}/g)) ? void 0 : r.splice(0, 5),
              l = [];
            i?.forEach((s) => {
              let c = 0;
              for (let C = 0; C < s.length; C += 1)
                (c = s.charCodeAt(C) + ((c << 5) - c)), (c &= c);
              const $ = [0, 0, 0];
              for (let C = 0; C < 3; C += 1) $[C] = (c >> (8 * C)) & 255;
              l.push(`rgb(${$[0]}, ${$[1]}, ${$[2]})`);
            });
            const a = document.querySelector(":root");
            a &&
              Object.entries({
                "--w3m-color-av-1": l[0],
                "--w3m-color-av-2": l[1],
                "--w3m-color-av-3": l[2],
                "--w3m-color-av-4": l[3],
                "--w3m-color-av-5": l[4],
              }).forEach(([c, $]) => a.style.setProperty(c, $));
          },
          setRecentWallet(n) {
            const { walletConnectVersion: r } = d.zb.state;
            localStorage.setItem(
              E.W3M_RECENT_WALLET_DATA,
              JSON.stringify({ [r]: n })
            );
          },
          getRecentWallet() {
            const n = localStorage.getItem(E.W3M_RECENT_WALLET_DATA);
            if (n) {
              const { walletConnectVersion: r } = d.zb.state,
                i = JSON.parse(n);
              if (i[r]) return i[r];
            }
          },
          caseSafeIncludes: (n, r) => n.toUpperCase().includes(r.toUpperCase()),
          openWalletExplorerUrl() {
            d.zv.openHref(E.EXPLORER_WALLET_URL, "_blank");
          },
          getCachedRouterWalletPlatforms() {
            const {
                id: n,
                desktop: r,
                mobile: i,
                injected: l,
              } = d.zv.getWalletRouterData(),
              a = yt.installedInjectedWallets(),
              s = !(null == l || !l.length);
            return {
              isInjectedInstalled: a.some((nt) => nt.id === n),
              isInjected: s,
              isDesktop: !(null == r || !r.native),
              isMobile:
                !(null == i || !i.native) || !(null == i || !i.universal),
              isWeb: !(null == r || !r.universal),
            };
          },
          goToConnectingView(n) {
            d.AV.setData({ Wallet: n });
            const r = d.zv.isMobile(),
              {
                isDesktop: i,
                isWeb: l,
                isMobile: a,
                isInjectedInstalled: s,
              } = E.getCachedRouterWalletPlatforms();
            d.AV.push(
              r
                ? s
                  ? "InjectedConnecting"
                  : a
                  ? "MobileConnecting"
                  : l
                  ? "WebConnecting"
                  : "InstallWallet"
                : s
                ? "InjectedConnecting"
                : i
                ? "DesktopConnecting"
                : l
                ? "WebConnecting"
                : a
                ? "MobileQrcodeConnecting"
                : "InstallWallet"
            );
          },
        },
        fo = g`.w3m-router{overflow:hidden;will-change:transform}.w3m-content{display:flex;flex-direction:column}`;
      var wo = Object.defineProperty,
        vo = Object.getOwnPropertyDescriptor,
        vn = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? vo(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && wo(r, i, a), a;
        };
      let Ce = class extends S {
        constructor() {
          super(),
            (this.view = d.AV.state.view),
            (this.prevView = d.AV.state.view),
            (this.unsubscribe = void 0),
            (this.oldHeight = "0px"),
            (this.resizeObserver = void 0),
            (this.unsubscribe = d.AV.subscribe((n) => {
              this.view !== n.view && this.onChangeRoute();
            }));
        }
        firstUpdated() {
          (this.resizeObserver = new ResizeObserver(([n]) => {
            const r = `${n.contentRect.height}px`;
            "0px" !== this.oldHeight &&
              Bt(
                this.routerEl,
                { height: [this.oldHeight, r] },
                { duration: 0.2 }
              ),
              (this.oldHeight = r);
          })),
            this.resizeObserver.observe(this.contentEl);
        }
        disconnectedCallback() {
          var n, r;
          null == (n = this.unsubscribe) || n.call(this),
            null == (r = this.resizeObserver) || r.disconnect();
        }
        get routerEl() {
          return E.getShadowRootElement(this, ".w3m-router");
        }
        get contentEl() {
          return E.getShadowRootElement(this, ".w3m-content");
        }
        viewTemplate() {
          switch (this.view) {
            case "ConnectWallet":
              return b`<w3m-connect-wallet-view></w3m-connect-wallet-view>`;
            case "SelectNetwork":
              return b`<w3m-select-network-view></w3m-select-network-view>`;
            case "InjectedConnecting":
              return b`<w3m-injected-connecting-view></w3m-injected-connecting-view>`;
            case "DesktopConnecting":
              return b`<w3m-desktop-connecting-view></w3m-desktop-connecting-view>`;
            case "MobileConnecting":
              return b`<w3m-mobile-connecting-view></w3m-mobile-connecting-view>`;
            case "WebConnecting":
              return b`<w3m-web-connecting-view></w3m-web-connecting-view>`;
            case "MobileQrcodeConnecting":
              return b`<w3m-mobile-qr-connecting-view></w3m-mobile-qr-connecting-view>`;
            case "GetWallet":
              return b`<w3m-get-wallet-view></w3m-get-wallet-view>`;
            case "WalletExplorer":
              return b`<w3m-wallet-explorer-view></w3m-wallet-explorer-view>`;
            case "Qrcode":
              return b`<w3m-qrcode-view></w3m-qrcode-view>`;
            case "Help":
              return b`<w3m-help-view></w3m-help-view>`;
            case "Account":
              return b`<w3m-account-view></w3m-account-view>`;
            case "SwitchNetwork":
              return b`<w3m-switch-network-view></w3m-switch-network-view>`;
            case "InstallWallet":
              return b`<w3m-install-wallet-view></w3m-install-wallet-view>`;
            default:
              return b`<div>Not Found</div>`;
          }
        }
        onChangeRoute() {
          var n = this;
          return (0, m.Z)(function* () {
            yield Bt(
              n.routerEl,
              { opacity: [1, 0], scale: [1, 1.02] },
              { duration: 0.15, delay: 0.1 }
            ).finished,
              (n.view = d.AV.state.view),
              Bt(
                n.routerEl,
                { opacity: [0, 1], scale: [0.99, 1] },
                { duration: 0.37, delay: 0.05 }
              );
          })();
        }
        render() {
          return b`<div class="w3m-router"><div class="w3m-content">${this.viewTemplate()}</div></div>`;
        }
      };
      (Ce.styles = [D.globalCss, fo]),
        vn([et()], Ce.prototype, "view", 2),
        vn([et()], Ce.prototype, "prevView", 2),
        (Ce = vn([R("w3m-modal-router")], Ce));
      const bo = g`div{height:36px;width:max-content;display:flex;justify-content:center;align-items:center;padding:9px 15px 11px;position:absolute;top:12px;box-shadow:0 6px 14px -6px rgba(10,16,31,.3),0 10px 32px -4px rgba(10,16,31,.15);z-index:2;left:50%;transform:translateX(-50%);pointer-events:none;backdrop-filter:blur(20px) saturate(1.8);-webkit-backdrop-filter:blur(20px) saturate(1.8);border-radius:var(--w3m-notification-border-radius);border:1px solid var(--w3m-color-overlay);background-color:var(--w3m-color-overlay)}svg{margin-right:5px}@-moz-document url-prefix(){div{background-color:var(--w3m-color-bg-3)}}.w3m-success path{fill:var(--w3m-accent-color)}.w3m-error path{fill:var(--w3m-error-color)}`;
      var yo = Object.defineProperty,
        xo = Object.getOwnPropertyDescriptor,
        vr = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? xo(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && yo(r, i, a), a;
        };
      let Ue = class extends S {
        constructor() {
          super(),
            (this.open = !1),
            (this.unsubscribe = void 0),
            (this.timeout = void 0),
            (this.unsubscribe = d.Vs.subscribe((n) => {
              n.open
                ? ((this.open = !0),
                  (this.timeout = setTimeout(() => d.Vs.closeToast(), 2200)))
                : ((this.open = !1), clearTimeout(this.timeout));
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unsubscribe) || n.call(this),
            clearTimeout(this.timeout),
            d.Vs.closeToast();
        }
        render() {
          const { message: n, variant: r } = d.Vs.state;
          return this.open
            ? b`<div class="${vt({
                "w3m-success": "success" === r,
                "w3m-error": "error" === r,
              })}">${"success" === r ? L.CHECKMARK_ICON : null} ${
                "error" === r ? L.CROSS_ICON : null
              }<w3m-text variant="small-regular">${n}</w3m-text></div>`
            : null;
        }
      };
      (Ue.styles = [D.globalCss, bo]),
        vr([et()], Ue.prototype, "open", 2),
        (Ue = vr([R("w3m-modal-toast")], Ue));
      const Co = g`button{padding:5px;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;flex-direction:column;align-items:center;justify-content:center;width:80px;height:90px;position:relative}w3m-network-image{width:54px;height:59px}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;margin-top:5px}button:active{background-color:var(--w3m-color-overlay)}.w3m-unsupported{opacity:.3}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}`;
      var $o = Object.defineProperty,
        Ao = Object.getOwnPropertyDescriptor,
        $e = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Ao(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && $o(r, i, a), a;
        };
      let Ut = class extends S {
        constructor() {
          super(...arguments),
            (this.onClick = () => null),
            (this.name = ""),
            (this.chainId = ""),
            (this.unsupported = !1);
        }
        render() {
          return b`<button @click="${this.onClick}" class="${vt({
            "w3m-unsupported": this.unsupported,
          })}"><w3m-network-image chainId="${
            this.chainId
          }"></w3m-network-image><w3m-text variant="xsmall-regular">${
            this.name
          }</w3m-text></button>`;
        }
      };
      (Ut.styles = [D.globalCss, Co]),
        $e([_()], Ut.prototype, "onClick", 2),
        $e([_()], Ut.prototype, "name", 2),
        $e([_()], Ut.prototype, "chainId", 2),
        $e([_()], Ut.prototype, "unsupported", 2),
        (Ut = $e([R("w3m-network-button")], Ut));
      const Eo = g`@keyframes loading{to{stroke-dashoffset:0}}:host{width:inherit;height:inherit;position:relative}path{stroke:var(--w3m-color-overlay)}svg{width:100%;height:100%;margin:0}#network-placeholder-fill{fill:var(--w3m-color-bg-3)}#network-placeholder-dash{stroke:var(--w3m-color-overlay)}image{clip-path:path('M17.033 4.964c3.852-2.262 5.778-3.393 7.84-3.77a11.807 11.807 0 0 1 4.254 0c2.062.377 3.988 1.508 7.84 3.77l6.066 3.562c3.852 2.263 5.777 3.394 7.13 5.022a12.268 12.268 0 0 1 2.127 3.747c.71 2.006.71 4.268.71 8.793v7.124c0 4.525 0 6.787-.71 8.793a12.268 12.268 0 0 1-2.126 3.747c-1.354 1.628-3.28 2.76-7.131 5.022l-6.066 3.562c-3.852 2.262-5.778 3.393-7.84 3.771a11.814 11.814 0 0 1-4.254 0c-2.062-.378-3.988-1.509-7.84-3.77l-6.066-3.563c-3.852-2.263-5.778-3.394-7.13-5.022a12.268 12.268 0 0 1-2.127-3.747C1 40 1 37.737 1 33.212v-7.124c0-4.525 0-6.787.71-8.793a12.268 12.268 0 0 1 2.127-3.747c1.352-1.628 3.278-2.76 7.13-5.022l6.066-3.562Z')}`;
      var ko = Object.defineProperty,
        Io = Object.getOwnPropertyDescriptor,
        br = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Io(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && ko(r, i, a), a;
        };
      let ze = class extends S {
        constructor() {
          super(...arguments), (this.chainId = "");
        }
        render() {
          const n = E.getChainIcon(this.chainId);
          return n
            ? b`<svg width="54" height="59" viewBox="0 0 54 59" fill="none"><image href="${n}"/><image href="${n}" width="54" height="59"/><path d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/></svg>`
            : b`${L.NETWORK_PLACEHOLDER}`;
        }
      };
      (ze.styles = [D.globalCss, Eo]),
        br([_()], ze.prototype, "chainId", 2),
        (ze = br([R("w3m-network-image")], ze));
      const _o = 0.1;
      function bn(n, r, i) {
        return n !== r && (n - r < 0 ? r - n : n - r) <= i + _o;
      }
      const To = {
          generate(n, r, i, l) {
            const a = "light" === l ? "#141414" : "#fff",
              s = "light" === l ? "#fff" : "#141414",
              c = [],
              $ = (function Oo(n, r) {
                const i = Array.prototype.slice.call(
                    Si.create(n, { errorCorrectionLevel: r }).modules.data,
                    0
                  ),
                  l = Math.sqrt(i.length);
                return i.reduce(
                  (a, s, c) =>
                    (c % l == 0 ? a.push([s]) : a[a.length - 1].push(s)) && a,
                  []
                );
              })(n, "Q"),
              C = r / $.length,
              A = [
                { x: 0, y: 0 },
                { x: 1, y: 0 },
                { x: 0, y: 1 },
              ];
            A.forEach(({ x: at, y: tt }) => {
              const pt = ($.length - 7) * C * at,
                ot = ($.length - 7) * C * tt;
              for (let dt = 0; dt < A.length; dt += 1) {
                const At = C * (7 - 2 * dt);
                c.push(
                  z`<rect fill="${dt % 2 == 0 ? a : s}" height="${At}" rx="${
                    0.32 * At
                  }" ry="${0.32 * At}" width="${At}" x="${pt + C * dt}" y="${
                    ot + C * dt
                  }">`
                );
              }
            });
            const nt = Math.floor((i + 25) / C),
              O = $.length / 2 - nt / 2,
              T = $.length / 2 + nt / 2 - 1,
              rt = [];
            $.forEach((at, tt) => {
              at.forEach((pt, ot) => {
                !$[tt][ot] ||
                  (tt < 7 && ot < 7) ||
                  (tt > $.length - 8 && ot < 7) ||
                  (tt < 7 && ot > $.length - 8) ||
                  (tt > O && tt < T && ot > O && ot < T) ||
                  rt.push([tt * C + C / 2, ot * C + C / 2]);
              });
            });
            const wt = {};
            return (
              rt.forEach(([at, tt]) => {
                wt[at] ? wt[at].push(tt) : (wt[at] = [tt]);
              }),
              Object.entries(wt)
                .map(([at, tt]) => {
                  const pt = tt.filter((ot) =>
                    tt.every((ht) => !bn(ot, ht, C))
                  );
                  return [Number(at), pt];
                })
                .forEach(([at, tt]) => {
                  tt.forEach((pt) => {
                    c.push(
                      z`<circle cx="${at}" cy="${pt}" fill="${a}" r="${
                        C / 2.5
                      }">`
                    );
                  });
                }),
              Object.entries(wt)
                .filter(([at, tt]) => tt.length > 1)
                .map(([at, tt]) => {
                  const pt = tt.filter((ot) => tt.some((ht) => bn(ot, ht, C)));
                  return [Number(at), pt];
                })
                .map(([at, tt]) => {
                  tt.sort((ot, ht) => (ot < ht ? -1 : 1));
                  const pt = [];
                  for (const ot of tt) {
                    const ht = pt.find((dt) => dt.some((At) => bn(ot, At, C)));
                    ht ? ht.push(ot) : pt.push([ot]);
                  }
                  return [at, pt.map((ot) => [ot[0], ot[ot.length - 1]])];
                })
                .forEach(([at, tt]) => {
                  tt.forEach(([pt, ot]) => {
                    c.push(
                      z`<line x1="${at}" x2="${at}" y1="${pt}" y2="${ot}" stroke="${a}" stroke-width="${
                        C / 1.25
                      }" stroke-linecap="round">`
                    );
                  });
                }),
              c
            );
          },
        },
        Po = g`@keyframes fadeIn{0%{opacity:0}100%{opacity:1}}div{position:relative;user-select:none;display:block;overflow:hidden;width:100%;aspect-ratio:1/1;animation:fadeIn ease .2s}svg:first-child,w3m-wallet-image{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{transform:translateY(-50%) translateX(-50%)}w3m-wallet-image{width:25%;height:25%;border-radius:var(--w3m-wallet-icon-border-radius)}svg:first-child{transform:translateY(-50%) translateX(-50%) scale(.9)}svg:first-child path:first-child{fill:var(--w3m-accent-color)}svg:first-child path:last-child{stroke:var(--w3m-color-overlay)}`;
      var Mo = Object.defineProperty,
        No = Object.getOwnPropertyDescriptor,
        oe = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? No(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Mo(r, i, a), a;
        };
      let It = class extends S {
        constructor() {
          super(...arguments),
            (this.uri = ""),
            (this.size = 0),
            (this.imageId = void 0),
            (this.walletId = void 0),
            (this.imageUrl = void 0);
        }
        svgTemplate() {
          var n;
          const r = null != (n = d.Ic.state.themeMode) ? n : "light";
          return z`<svg height="${this.size}" width="${
            this.size
          }">${To.generate(this.uri, this.size, this.size / 4, r)}</svg>`;
        }
        render() {
          return b`<div>${
            this.walletId || this.imageUrl
              ? b`<w3m-wallet-image walletId="${this.walletId}" imageId="${this.imageId}" imageUrl="${this.imageUrl}"></w3m-wallet-image>`
              : L.WALLET_CONNECT_ICON_COLORED
          } ${this.svgTemplate()}<w3m-theme-context></w3m-theme-context></div>`;
        }
      };
      (It.styles = [D.globalCss, Po]),
        oe([_()], It.prototype, "uri", 2),
        oe([_({ type: Number })], It.prototype, "size", 2),
        oe([_()], It.prototype, "imageId", 2),
        oe([_()], It.prototype, "walletId", 2),
        oe([_()], It.prototype, "imageUrl", 2),
        (It = oe([R("w3m-qrcode")], It));
      const So = g`:host{position:relative;height:28px;width:80%}input{width:100%;height:100%;line-height:28px!important;border-radius:var(--w3m-input-border-radius);font-style:normal;font-family:-apple-system,system-ui,BlinkMacSystemFont,'Segoe UI',Roboto,Ubuntu,'Helvetica Neue',sans-serif;font-feature-settings:'case' on;font-weight:500;font-size:16px;letter-spacing:-.03em;padding:0 10px 0 34px;transition:.2s all ease;color:transparent;position:absolute;background-color:var(--w3m-color-bg-3);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}input::placeholder{color:transparent}svg{margin:2px 4px 0 0}div{top:0;left:calc(50% - 12px);transform:translateX(-50%);transition:.2s all ease;pointer-events:none;display:flex;align-items:center;justify-content:center;height:calc(100% - 2px);width:fit-content;position:relative}input:focus-within+div,input:not(:placeholder-shown)+div{transform:translateX(10px);left:0}w3m-text{opacity:1;transition:.2s opacity ease}input:focus-within+div w3m-text,input:not(:placeholder-shown)+div w3m-text{opacity:0}input:focus-within,input:not(:placeholder-shown){color:var(--w3m-color-fg-1)}input:focus-within{box-shadow:inset 0 0 0 1px var(--w3m-accent-color)}path{fill:var(--w3m-color-fg-2)}`;
      var Ro = Object.defineProperty,
        Lo = Object.getOwnPropertyDescriptor,
        xr = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Lo(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Ro(r, i, a), a;
        };
      let Ve = class extends S {
        constructor() {
          super(...arguments), (this.onChange = () => null);
        }
        render() {
          const n = "Search wallets";
          return b`<input type="text" @input="${this.onChange}" placeholder="${n}"><div>${L.SEARCH_ICON}<w3m-text color="secondary" variant="small-thin">${n}</w3m-text></div>`;
        }
      };
      (Ve.styles = [D.globalCss, So]),
        xr([_()], Ve.prototype, "onChange", 2),
        (Ve = xr([R("w3m-search-input")], Ve));
      const jo = g`@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}100%{stroke-dasharray:90,150;stroke-dashoffset:-124}}svg{animation:rotate 2s linear infinite;display:flex;justify-content:center;align-items:center}svg circle{stroke-linecap:round;animation:dash 1.5s ease infinite;stroke:var(--w3m-accent-color)}`;
      let yn = class extends S {
        render() {
          return b`<svg viewBox="0 0 50 50" width="24" height="24"><circle cx="25" cy="25" r="20" fill="none" stroke-width="4" stroke="#fff"/></svg>`;
        }
      };
      (yn.styles = [D.globalCss, jo]),
        (yn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-spinner")], yn));
      const Uo = g`span{font-style:normal;font-family:var(--w3m-font-family);font-feature-settings:'tnum' on,'lnum' on,'case' on}.w3m-xsmall-bold{font-family:var(--w3m-text-xsmall-bold-font-family);font-weight:var(--w3m-text-xsmall-bold-weight);font-size:var(--w3m-text-xsmall-bold-size);line-height:var(--w3m-text-xsmall-bold-line-height);letter-spacing:var(--w3m-text-xsmall-bold-letter-spacing);text-transform:var(--w3m-text-xsmall-bold-text-transform)}.w3m-xsmall-regular{font-family:var(--w3m-text-xsmall-regular-font-family);font-weight:var(--w3m-text-xsmall-regular-weight);font-size:var(--w3m-text-xsmall-regular-size);line-height:var(--w3m-text-xsmall-regular-line-height);letter-spacing:var(--w3m-text-xsmall-regular-letter-spacing);text-transform:var(--w3m-text-xsmall-regular-text-transform)}.w3m-small-thin{font-family:var(--w3m-text-small-thin-font-family);font-weight:var(--w3m-text-small-thin-weight);font-size:var(--w3m-text-small-thin-size);line-height:var(--w3m-text-small-thin-line-height);letter-spacing:var(--w3m-text-small-thin-letter-spacing);text-transform:var(--w3m-text-small-thin-text-transform)}.w3m-small-regular{font-family:var(--w3m-text-small-regular-font-family);font-weight:var(--w3m-text-small-regular-weight);font-size:var(--w3m-text-small-regular-size);line-height:var(--w3m-text-small-regular-line-height);letter-spacing:var(--w3m-text-small-regular-letter-spacing);text-transform:var(--w3m-text-small-regular-text-transform)}.w3m-medium-regular{font-family:var(--w3m-text-medium-regular-font-family);font-weight:var(--w3m-text-medium-regular-weight);font-size:var(--w3m-text-medium-regular-size);line-height:var(--w3m-text-medium-regular-line-height);letter-spacing:var(--w3m-text-medium-regular-letter-spacing);text-transform:var(--w3m-text-medium-regular-text-transform)}.w3m-big-bold{font-family:var(--w3m-text-big-bold-font-family);font-weight:var(--w3m-text-big-bold-weight);font-size:var(--w3m-text-big-bold-size);line-height:var(--w3m-text-big-bold-line-height);letter-spacing:var(--w3m-text-big-bold-letter-spacing);text-transform:var(--w3m-text-big-bold-text-transform)}:host(*){color:var(--w3m-color-fg-1)}.w3m-color-primary{color:var(--w3m-color-fg-1)}.w3m-color-secondary{color:var(--w3m-color-fg-2)}.w3m-color-tertiary{color:var(--w3m-color-fg-3)}.w3m-color-inverse{color:var(--w3m-accent-fill-color)}.w3m-color-accnt{color:var(--w3m-accent-color)}.w3m-color-error{color:var(--w3m-error-color)}`;
      var zo = Object.defineProperty,
        Vo = Object.getOwnPropertyDescriptor,
        xn = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Vo(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && zo(r, i, a), a;
        };
      let Ae = class extends S {
        constructor() {
          super(...arguments),
            (this.variant = "medium-regular"),
            (this.color = "primary");
        }
        render() {
          return b`<span><slot class="${vt({
            "w3m-big-bold": "big-bold" === this.variant,
            "w3m-medium-regular": "medium-regular" === this.variant,
            "w3m-small-regular": "small-regular" === this.variant,
            "w3m-small-thin": "small-thin" === this.variant,
            "w3m-xsmall-regular": "xsmall-regular" === this.variant,
            "w3m-xsmall-bold": "xsmall-bold" === this.variant,
            "w3m-color-primary": "primary" === this.color,
            "w3m-color-secondary": "secondary" === this.color,
            "w3m-color-tertiary": "tertiary" === this.color,
            "w3m-color-inverse": "inverse" === this.color,
            "w3m-color-accnt": "accent" === this.color,
            "w3m-color-error": "error" === this.color,
          })}"></slot></span>`;
        }
      };
      (Ae.styles = [D.globalCss, Uo]),
        xn([_()], Ae.prototype, "variant", 2),
        xn([_()], Ae.prototype, "color", 2),
        (Ae = xn([R("w3m-text")], Ae));
      const Ho = g`div{overflow:hidden;position:relative;border-radius:50%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:50%;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}svg{width:100%;height:100%}#token-placeholder-fill{fill:var(--w3m-color-bg-3)}#token-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      var Zo = Object.defineProperty,
        Fo = Object.getOwnPropertyDescriptor,
        Cr = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Fo(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Zo(r, i, a), a;
        };
      let He = class extends S {
        constructor() {
          super(...arguments), (this.symbol = void 0);
        }
        render() {
          var n;
          const r = E.getTokenIcon(null != (n = this.symbol) ? n : "");
          return r
            ? b`<div><img src="${r}" alt="${this.id}"></div>`
            : L.TOKEN_PLACEHOLDER;
        }
      };
      (He.styles = [D.globalCss, Ho]),
        Cr([_()], He.prototype, "symbol", 2),
        (He = Cr([R("w3m-token-image")], He));
      const Go = g`button{width:100%;height:100%;border-radius:var(--w3m-button-hover-highlight-border-radius);display:flex;align-items:flex-start}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button>div{width:80px;padding:5px 0;display:flex;flex-direction:column;align-items:center}w3m-text{width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center}w3m-wallet-image{height:60px;width:60px;transition:all .2s ease;border-radius:var(--w3m-wallet-icon-border-radius);margin-bottom:5px}.w3m-sublabel{margin-top:2px}`;
      var Ko = Object.defineProperty,
        Yo = Object.getOwnPropertyDescriptor,
        Nt = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Yo(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Ko(r, i, a), a;
        };
      let Et = class extends S {
        constructor() {
          super(...arguments),
            (this.onClick = () => null),
            (this.name = ""),
            (this.walletId = ""),
            (this.label = void 0),
            (this.imageId = void 0),
            (this.installed = !1),
            (this.recent = !1);
        }
        sublabelTemplate() {
          return this.recent
            ? b`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">RECENT</w3m-text>`
            : this.installed
            ? b`<w3m-text class="w3m-sublabel" variant="xsmall-bold" color="tertiary">INSTALLED</w3m-text>`
            : null;
        }
        handleClick() {
          d.uA.click({ name: "WALLET_BUTTON", walletId: this.walletId }),
            this.onClick();
        }
        render() {
          var n;
          return b`<button @click="${this.handleClick.bind(
            this
          )}"><div><w3m-wallet-image walletId="${this.walletId}" imageId="${
            this.imageId
          }"></w3m-wallet-image><w3m-text variant="xsmall-regular">${
            null != (n = this.label) ? n : E.getWalletName(this.name, !0)
          }</w3m-text>${this.sublabelTemplate()}</div></button>`;
        }
      };
      (Et.styles = [D.globalCss, Go]),
        Nt([_()], Et.prototype, "onClick", 2),
        Nt([_()], Et.prototype, "name", 2),
        Nt([_()], Et.prototype, "walletId", 2),
        Nt([_()], Et.prototype, "label", 2),
        Nt([_()], Et.prototype, "imageId", 2),
        Nt([_()], Et.prototype, "installed", 2),
        Nt([_()], Et.prototype, "recent", 2),
        (Et = Nt([R("w3m-wallet-button")], Et));
      const Jo = g`:host{display:block}div{overflow:hidden;position:relative;border-radius:inherit;width:100%;height:100%;background-color:var(--w3m-color-overlay)}svg{position:relative;width:100%;height:100%}div::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;border-radius:inherit;border:1px solid var(--w3m-color-overlay)}div img{width:100%;height:100%;object-fit:cover;object-position:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      var Qo = Object.defineProperty,
        Xo = Object.getOwnPropertyDescriptor,
        Ze = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Xo(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Qo(r, i, a), a;
        };
      let ae = class extends S {
        constructor() {
          super(...arguments),
            (this.walletId = ""),
            (this.imageId = void 0),
            (this.imageUrl = void 0);
        }
        render() {
          var n;
          const r =
            null != (n = this.imageUrl) && n.length
              ? this.imageUrl
              : E.getWalletIcon({ id: this.walletId, image_id: this.imageId });
          return b`${
            r.length
              ? b`<div><img src="${r}" alt="${this.id}"></div>`
              : L.WALLET_PLACEHOLDER
          }`;
        }
      };
      (ae.styles = [D.globalCss, Jo]),
        Ze([_()], ae.prototype, "walletId", 2),
        Ze([_()], ae.prototype, "imageId", 2),
        Ze([_()], ae.prototype, "imageUrl", 2),
        (ae = Ze([R("w3m-wallet-image")], ae));
      let $r = class extends S {
        constructor() {
          super(),
            (this.unwatchAccount = void 0),
            d.CV.getAccount(),
            this.fetchProfile(),
            this.fetchBalance(),
            (this.unwatchAccount = d.Id.client().watchAccount((n) => {
              const { address: r, isConnected: i } = d.CV.state;
              n.isConnected &&
                n.address !== r &&
                (this.fetchProfile(n.address),
                this.fetchBalance(n.address),
                d.CV.setAddress(n.address)),
                n.isConnected || d.CV.resetAccount(),
                i !== n.isConnected && d.jb.close(),
                !i && n.isConnected
                  ? d.uA.track({ name: "ACCOUNT_CONNECTED" })
                  : i &&
                    !n.isConnected &&
                    d.uA.track({ name: "ACCOUNT_DISCONNECTED" }),
                d.CV.setIsConnected(n.isConnected);
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unwatchAccount) || n.call(this);
        }
        fetchProfile(n) {
          return (0, m.Z)(function* () {
            var r;
            const i =
              null == (r = d.zb.state.chains)
                ? void 0
                : r.find((l) => 1 === l.id);
            if (d.t0.state.enableAccountView && i)
              try {
                yield d.CV.fetchProfile(E.preloadImage, n);
              } catch (l) {
                console.error(l), d.Vs.openToast(E.getErrorMessage(l), "error");
              }
          })();
        }
        fetchBalance(n) {
          return (0, m.Z)(function* () {
            if (d.t0.state.enableAccountView)
              try {
                yield d.CV.fetchBalance(n);
              } catch (r) {
                console.error(r), d.Vs.openToast(E.getErrorMessage(r), "error");
              }
          })();
        }
      };
      $r = ((n, r, i, l) => {
        for (var c, a = r, s = n.length - 1; s >= 0; s--)
          (c = n[s]) && (a = c(a) || a);
        return a;
      })([R("w3m-account-context")], $r);
      var na = Object.defineProperty,
        ra = Object.getOwnPropertyDescriptor,
        Ar = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? ra(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && na(r, i, a), a;
        };
      let Cn = class extends S {
        constructor() {
          super(), (this.preload = !0), this.preloadData();
        }
        loadImages(n) {
          return (0, m.Z)(function* () {
            try {
              null != n &&
                n.length &&
                (yield Promise.all(
                  n.map(
                    (function () {
                      var r = (0, m.Z)(function* (i) {
                        return E.preloadImage(i);
                      });
                      return function (i) {
                        return r.apply(this, arguments);
                      };
                    })()
                  )
                ));
            } catch {
              console.info("Unsuccessful attempt at preloading some images", n);
            }
          })();
        }
        preloadListings() {
          var n = this;
          return (0, m.Z)(function* () {
            var r;
            if (d.t0.state.enableExplorer) {
              const { chains: i } = d.zb.state;
              yield Promise.all([
                d.uc.getRecomendedWallets(),
                d.uc.getInjectedWallets(),
              ]),
                d.zb.setIsDataLoaded(!0);
              const { recomendedWallets: l } = d.uc.state,
                a = yt.installedInjectedWallets(),
                s = null != (r = i?.map((C) => E.getChainIcon(C.id))) ? r : [],
                c = l.map((C) => E.getWalletIcon(C)),
                $ = a.map((C) => E.getWalletIcon(C));
              yield n.loadImages([...s, ...c, ...$]);
            } else d.zb.setIsDataLoaded(!0);
          })();
        }
        preloadCustomImages() {
          var n = this;
          return (0, m.Z)(function* () {
            const r = E.getCustomImageUrls();
            yield n.loadImages(r);
          })();
        }
        preloadData() {
          var n = this;
          return (0, m.Z)(function* () {
            try {
              n.preload &&
                ((n.preload = !1),
                yield Promise.all([
                  n.preloadListings(),
                  n.preloadCustomImages(),
                ]));
            } catch (r) {
              console.error(r), d.Vs.openToast("Failed preloading", "error");
            }
          })();
        }
      };
      Ar([et()], Cn.prototype, "preload", 2),
        (Cn = Ar([R("w3m-explorer-context")], Cn));
      var ia = Object.defineProperty,
        oa = Object.getOwnPropertyDescriptor,
        Er = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? oa(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && ia(r, i, a), a;
        };
      let $n = class extends S {
        constructor() {
          super(),
            (this.activeChainId = void 0),
            (this.unwatchNetwork = void 0);
          const n = d.zb.getSelectedChain();
          (this.activeChainId = n?.id),
            (this.unwatchNetwork = d.Id.client().watchNetwork((r) => {
              const i = r.chain;
              i &&
                this.activeChainId !== i.id &&
                (d.zb.setSelectedChain(i),
                (this.activeChainId = i.id),
                d.CV.resetBalance(),
                this.fetchBalance());
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unwatchNetwork) || n.call(this);
        }
        fetchBalance() {
          return (0, m.Z)(function* () {
            if (d.t0.state.enableAccountView)
              try {
                yield d.CV.fetchBalance();
              } catch (n) {
                console.error(n), d.Vs.openToast(E.getErrorMessage(n), "error");
              }
          })();
        }
      };
      Er([et()], $n.prototype, "activeChainId", 2),
        ($n = Er([R("w3m-network-context")], $n));
      let kr = class extends S {
        constructor() {
          super(),
            (this.unsubscribeTheme = void 0),
            D.setTheme(),
            (this.unsubscribeTheme = d.Ic.subscribe(D.setTheme)),
            this.preloadThemeImages();
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unsubscribeTheme) || n.call(this);
        }
        preloadThemeImages() {
          return (0, m.Z)(function* () {
            try {
              const { themeVariables: n } = d.Ic.state,
                r = [
                  n?.["--w3m-background-image-url"],
                  n?.["--w3m-logo-image-url"],
                ].filter(Boolean);
              r.length &&
                (yield Promise.all(
                  r.map(
                    (function () {
                      var i = (0, m.Z)(function* (l) {
                        return E.preloadImage(l);
                      });
                      return function (l) {
                        return i.apply(this, arguments);
                      };
                    })()
                  )
                ));
            } catch {
              console.info("Unsuccessful attempt at preloading some images");
            }
          })();
        }
      };
      kr = ((n, r, i, l) => {
        for (var c, a = r, s = n.length - 1; s >= 0; s--)
          (c = n[s]) && (a = c(a) || a);
        return a;
      })([R("w3m-theme-context")], kr);
      var _r;
      let Or = class extends S {
        constructor() {
          super(),
            (this.unwatchOptions = void 0),
            (this.unwatchAccount = void 0),
            (this.timeout = void 0),
            (this.isGenerated = !1),
            (this.selectedChainId =
              null == (_r = d.zb.state.selectedChain) ? void 0 : _r.id),
            (this.isAccountConnected = d.CV.state.isConnected),
            (this.lastRetry = Date.now()),
            (this.unwatchOptions = d.zb.subscribe((n) => {
              var r, i;
              (null == (r = n.selectedChain) ? void 0 : r.id) !==
                this.selectedChainId &&
                ((this.selectedChainId =
                  null == (i = n.selectedChain) ? void 0 : i.id),
                this.connectAndWait());
            })),
            (this.unwatchAccount = d.CV.subscribe((n) => {
              (this.isAccountConnected !== n.isConnected ||
                !this.isGenerated) &&
                ((this.isAccountConnected = n.isConnected),
                setTimeout(this.connectAndWait.bind(this), 0));
            })),
            document.addEventListener(
              "visibilitychange",
              this.onVisibilityChange.bind(this)
            );
        }
        disconnectedCallback() {
          var n, r;
          null == (n = this.unwatchOptions) || n.call(this),
            null == (r = this.unwatchAccount) || r.call(this),
            document.removeEventListener(
              "visibilitychange",
              this.onVisibilityChange
            );
        }
        connectAndWait() {
          var n = this;
          return (0, m.Z)(function* () {
            if ((clearTimeout(n.timeout), !n.isAccountConnected)) {
              (n.isGenerated = !0),
                (n.timeout = setTimeout(n.connectAndWait.bind(n), 18e4));
              try {
                const { standaloneUri: r, selectedChain: i } = d.zb.state;
                r
                  ? d.kD.setPairingUri(r)
                  : yield d.Id.client().connectWalletConnect(
                      (l) => d.kD.setPairingUri(l),
                      i?.id
                    );
              } catch (r) {
                console.error(r),
                  d.kD.setPairingError(!0),
                  d.Vs.openToast("Connection request declined", "error"),
                  Date.now() - n.lastRetry >= 1e3 &&
                    ((n.lastRetry = Date.now()), n.connectAndWait());
              }
            }
          })();
        }
        onVisibilityChange() {
          !document.hidden &&
            d.zv.isMobile() &&
            setTimeout(this.connectAndWait.bind(this), 1e3);
        }
      };
      Or = ((n, r, i, l) => {
        for (var c, a = r, s = n.length - 1; s >= 0; s--)
          (c = n[s]) && (a = c(a) || a);
        return a;
      })([R("w3m-wc-connection-context")], Or);
      const ma = g`:host{all:initial}div{display:flex;align-items:center;background-color:var(--w3m-color-overlay);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);border-radius:var(--w3m-button-border-radius);padding:4px 4px 4px 8px}div button{border-radius:var(--w3m-secondary-button-border-radius);padding:4px 8px;padding-left:4px;height:auto;margin-left:10px;color:var(--w3m-accent-fill-color);background-color:var(--w3m-accent-color)}.w3m-no-avatar{padding-left:8px}button::after{content:'';top:0;bottom:0;left:0;right:0;position:absolute;background-color:transparent;border-radius:inherit;transition:background-color .2s ease;border:1px solid var(--w3m-color-overlay)}button:hover::after{background-color:var(--w3m-color-overlay)}w3m-avatar{margin-right:6px}w3m-button-big w3m-avatar{margin-left:-5px}`;
      var pa = Object.defineProperty,
        ga = Object.getOwnPropertyDescriptor,
        An = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? ga(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && pa(r, i, a), a;
        };
      let le = class extends S {
        constructor() {
          super(),
            (this.balance = "hide"),
            (this.avatar = "show"),
            E.rejectStandaloneButtonComponent();
        }
        onOpen() {
          const { isStandalone: n } = d.zb.state;
          n ||
            (d.uA.click({ name: "ACCOUNT_BUTTON" }),
            d.jb.open({ route: "Account" }));
        }
        accountTemplate() {
          return b`${
            "show" === this.avatar ? b`<w3m-avatar></w3m-avatar>` : null
          }<w3m-address-text></w3m-address-text>`;
        }
        render() {
          return "show" === this.balance
            ? b`<div><w3m-balance></w3m-balance><button @click="${
                this.onOpen
              }" class="${vt({
                "w3m-no-avatar": "hide" === this.avatar,
              })}">${this.accountTemplate()}</button></div>`
            : b`<w3m-button-big @click="${
                this.onOpen
              }">${this.accountTemplate()}</w3m-button-big>`;
        }
      };
      (le.styles = [D.globalCss, ma]),
        An([_()], le.prototype, "balance", 2),
        An([_()], le.prototype, "avatar", 2),
        (le = An([R("w3m-account-button")], le));
      const fa = g`button{display:flex;border-radius:var(--w3m-button-hover-highlight-border-radius);flex-direction:column;justify-content:center;padding:5px;width:100px}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}button:disabled{pointer-events:none}w3m-network-image{width:32px;height:32px}w3m-text{margin-top:4px}`;
      var wa = Object.defineProperty,
        va = Object.getOwnPropertyDescriptor,
        En = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? va(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && wa(r, i, a), a;
        };
      let Ee = class extends S {
        constructor() {
          super(),
            (this.chainId = 0),
            (this.label = ""),
            (this.unsubscribeNetwork = void 0);
          const { selectedChain: n } = d.zb.state;
          (this.chainId = n?.id),
            (this.label = n?.name),
            (this.unsubscribeNetwork = d.zb.subscribe(
              ({ selectedChain: r }) => {
                (this.chainId = r?.id), (this.label = r?.name);
              }
            ));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unsubscribeNetwork) || n.call(this);
        }
        onClick() {
          d.AV.push("SelectNetwork");
        }
        render() {
          const { chains: n, selectedChain: r } = d.zb.state,
            i = n?.map((s) => s.id),
            l = r && i?.includes(r.id);
          return b`<button @click="${this.onClick}" ?disabled="${
            n && n.length <= 1 && l
          }"><w3m-network-image chainId="${
            this.chainId
          }"></w3m-network-image><w3m-text variant="xsmall-regular" color="accent">${
            this.label
          }</w3m-text></button>`;
        }
      };
      (Ee.styles = [D.globalCss, fa]),
        En([et()], Ee.prototype, "chainId", 2),
        En([et()], Ee.prototype, "label", 2),
        (Ee = En([R("w3m-account-network-button")], Ee));
      const ba = g`@keyframes slide{0%{background-position:0 0}100%{background-position:200px 0}}w3m-text{padding:1px 0}.w3m-loading{background:linear-gradient(270deg,var(--w3m-color-fg-1) 36.33%,var(--w3m-color-fg-3) 42.07%,var(--w3m-color-fg-1) 83.3%);background-size:200px 100%;background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent;animation-name:slide;animation-duration:1.5s;animation-iteration-count:infinite;animation-timing-function:linear}`;
      var ya = Object.defineProperty,
        xa = Object.getOwnPropertyDescriptor,
        ke = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? xa(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && ya(r, i, a), a;
        };
      let zt = class extends S {
        constructor() {
          super(),
            (this.address = void 0),
            (this.name = void 0),
            (this.loading = !0),
            (this.variant = "button"),
            (this.unsubscribeAccount = void 0),
            (this.address = d.CV.state.address),
            (this.name = d.CV.state.profileName),
            (this.loading = !!d.CV.state.profileLoading),
            (this.unsubscribeAccount = d.CV.subscribe(
              ({ address: n, profileName: r, profileLoading: i }) => {
                (this.address = n), (this.name = r), (this.loading = !!i);
              }
            ));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unsubscribeAccount) || n.call(this);
        }
        render() {
          var n;
          const r = "button" === this.variant;
          return b`<w3m-text class="${vt({
            "w3m-loading": this.loading,
          })}" variant="${r ? "medium-regular" : "big-bold"}" color="${
            r ? "inverse" : "primary"
          }">${
            this.name
              ? this.name
              : E.truncate(null != (n = this.address) ? n : "")
          }</w3m-text>`;
        }
      };
      (zt.styles = [D.globalCss, ba]),
        ke([et()], zt.prototype, "address", 2),
        ke([et()], zt.prototype, "name", 2),
        ke([et()], zt.prototype, "loading", 2),
        ke([_()], zt.prototype, "variant", 2),
        (zt = ke([R("w3m-address-text")], zt));
      const bt = {
          onConnecting(n) {
            E.goToConnectingView(n);
          },
          onExternal(n) {
            E.handleConnectorConnection(n);
          },
          manualWalletsTemplate() {
            return yt
              .manualWallets()
              .map(
                (n) =>
                  b`<w3m-wallet-button walletId="${n.id}" name="${
                    n.name
                  }" .onClick="${() =>
                    this.onConnecting(n)}"></w3m-wallet-button>`
              );
          },
          recomendedWalletsTemplate(n = !1) {
            return yt
              .recomendedWallets(n)
              .map(
                (r) =>
                  b`<w3m-wallet-button walletId="${r.id}" imageId="${
                    r.image_id
                  }" name="${r.name}" .onClick="${() =>
                    this.onConnecting(r)}"></w3m-wallet-button>`
              );
          },
          externalWalletsTemplate() {
            return yt
              .externalWallets()
              .map(
                (n) =>
                  b`<w3m-wallet-button name="${n.name}" walletId="${
                    n.id
                  }" .onClick="${() =>
                    this.onExternal(n.id)}"></w3m-wallet-button>`
              );
          },
          recentWalletTemplate() {
            const n = yt.recentWallet();
            if (n)
              return b`<w3m-wallet-button name="${n.name}" walletId="${
                n.id
              }" imageId="${n.image_id}" .recent="${!0}" .onClick="${() =>
                this.onConnecting(n)}"></w3m-wallet-button>`;
          },
          installedInjectedWalletsTemplate() {
            return yt
              .installedInjectedWallets()
              .map(
                (n) =>
                  b`<w3m-wallet-button .installed="${!0}" name="${
                    n.name
                  }" walletId="${n.id}" imageId="${
                    n.image_id
                  }" .onClick="${() =>
                    this.onConnecting(n)}"></w3m-wallet-button>`
              );
          },
          injectedWalletsTemplate() {
            return yt
              .injectedWallets()
              .map(
                (n) =>
                  b`<w3m-wallet-button name="${n.name}" walletId="${
                    n.id
                  }" imageId="${n.image_id}" .onClick="${() =>
                    this.onConnecting(n)}"></w3m-wallet-button>`
              );
          },
        },
        Ca = g`@keyframes scroll{0%{transform:translate3d(0,0,0)}100%{transform:translate3d(calc(-70px * 9),0,0)}}.w3m-slider{position:relative;overflow-x:hidden;padding:10px 0;margin:0 -20px;width:calc(100% + 40px)}.w3m-track{display:flex;width:calc(70px * 18);animation:scroll 20s linear infinite;opacity:.7}.w3m-track svg{margin:0 5px}w3m-wallet-image{width:60px;height:60px;margin:0 5px;border-radius:var(--w3m-wallet-icon-border-radius)}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-title{display:flex;align-items:center;margin-bottom:10px}.w3m-title svg{margin-right:6px}.w3m-title path{fill:var(--w3m-accent-color)}w3m-modal-footer .w3m-title{padding:0 10px}w3m-button-big{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);filter:drop-shadow(0 0 17px var(--w3m-color-bg-1))}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center;margin-bottom:15px}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      let kn = class extends S {
        onGoToQrcode() {
          d.AV.push("Qrcode");
        }
        onGetWallet() {
          d.AV.push("GetWallet");
        }
        render() {
          const { recomendedWallets: n } = d.uc.state,
            r = [...n, ...n],
            i = bt.externalWalletsTemplate(),
            l = bt.installedInjectedWalletsTemplate(),
            a = [...l, ...i].length > 0;
          return b`<w3m-modal-header title="Connect your wallet" .onAction="${
            this.onGoToQrcode
          }" .actionIcon="${
            L.QRCODE_ICON
          }"></w3m-modal-header><w3m-modal-content><div class="w3m-title">${
            L.MOBILE_ICON
          }<w3m-text variant="small-regular" color="accent">WalletConnect</w3m-text></div><div class="w3m-slider"><div class="w3m-track">${[
            ...Array(2 * d.zv.RECOMMENDED_WALLET_AMOUNT),
          ].map((c, $) => {
            const C = r[$ % r.length];
            return C
              ? b`<w3m-wallet-image walletId="${C.id}" imageId="${C.image_id}"></w3m-wallet-image>`
              : L.WALLET_PLACEHOLDER;
          })}</div><w3m-button-big @click="${
            E.handleAndroidLinking
          }"><w3m-text variant="medium-regular" color="inverse">Select Wallet</w3m-text></w3m-button-big></div></w3m-modal-content>${
            a
              ? b`<w3m-modal-footer><div class="w3m-title">${L.WALLET_ICON}<w3m-text variant="small-regular" color="accent">Other</w3m-text></div><div class="w3m-grid">${l} ${i}</div></w3m-modal-footer>`
              : null
          }<w3m-info-footer><w3m-text color="secondary" variant="small-thin">${
            "Choose WalletConnect to see supported apps on your device" +
            (a ? ", or select from other options" : "")
          }</w3m-text><w3m-button variant="outline" .iconRight="${
            L.ARROW_UP_RIGHT_ICON
          }" .onClick="${() =>
            this.onGetWallet()}">I don't have a wallet</w3m-button></w3m-info-footer>`;
        }
      };
      (kn.styles = [D.globalCss, Ca]),
        (kn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-android-wallet-selection")], kn));
      const ka = g`@keyframes slide{0%{transform:translateX(-50px)}100%{transform:translateX(200px)}}.w3m-placeholder,img{border-radius:50%;box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);display:block;position:relative;overflow:hidden!important;background-color:var(--w3m-color-av-1);background-image:radial-gradient(at 66% 77%,var(--w3m-color-av-2) 0,transparent 50%),radial-gradient(at 29% 97%,var(--w3m-color-av-3) 0,transparent 50%),radial-gradient(at 99% 86%,var(--w3m-color-av-4) 0,transparent 50%),radial-gradient(at 29% 88%,var(--w3m-color-av-5) 0,transparent 50%);transform:translateZ(0)}.w3m-loader{width:50px;height:100%;background:linear-gradient(270deg,transparent 0,rgba(255,255,255,.4) 30%,transparent 100%);animation-name:slide;animation-duration:1.5s;transform:translateX(-50px);animation-iteration-count:infinite;animation-timing-function:linear;animation-delay:.55s}.w3m-small{width:24px;height:24px}.w3m-medium{width:60px;height:60px}`;
      var Ia = Object.defineProperty,
        _a = Object.getOwnPropertyDescriptor,
        Ie = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? _a(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Ia(r, i, a), a;
        };
      let Vt = class extends S {
        constructor() {
          super(),
            (this.address = void 0),
            (this.avatar = void 0),
            (this.loading = !0),
            (this.size = "small"),
            (this.unsubscribeAccount = void 0),
            (this.address = d.CV.state.address),
            (this.avatar = d.CV.state.profileAvatar),
            (this.loading = !!d.CV.state.profileLoading),
            (this.unsubscribeAccount = d.CV.subscribe(
              ({ address: n, profileAvatar: r, profileLoading: i }) => {
                (this.address = n), (this.avatar = r), (this.loading = !!i);
              }
            ));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unsubscribeAccount) || n.call(this);
        }
        render() {
          const n = {
            "w3m-placeholder": !0,
            "w3m-small": "small" === this.size,
            "w3m-medium": "medium" === this.size,
          };
          return this.avatar
            ? b`<img class="${vt(n)}" src="${this.avatar}">`
            : this.address
            ? (E.generateAvatarColors(this.address),
              b`<div class="${vt(n)}">${
                this.loading ? b`<div class="w3m-loader"></div>` : null
              }</div>`)
            : null;
        }
      };
      (Vt.styles = [D.globalCss, ka]),
        Ie([et()], Vt.prototype, "address", 2),
        Ie([et()], Vt.prototype, "avatar", 2),
        Ie([et()], Vt.prototype, "loading", 2),
        Ie([_()], Vt.prototype, "size", 2),
        (Vt = Ie([R("w3m-avatar")], Vt));
      const Oa = g`div{display:flex;align-items:center}w3m-token-image{width:28px;height:28px;margin-right:6px}`;
      var Ta = Object.defineProperty,
        Pa = Object.getOwnPropertyDescriptor,
        In = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Pa(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Ta(r, i, a), a;
        };
      let _e = class extends S {
        constructor() {
          var n, r;
          super(),
            (this.symbol = void 0),
            (this.amount = void 0),
            (this.unsubscribeAccount = void 0),
            (this.symbol =
              null == (n = d.CV.state.balance) ? void 0 : n.symbol),
            (this.amount =
              null == (r = d.CV.state.balance) ? void 0 : r.amount),
            (this.unsubscribeAccount = d.CV.subscribe(({ balance: i }) => {
              (this.symbol = i?.symbol), (this.amount = i?.amount);
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unsubscribeAccount) || n.call(this);
        }
        render() {
          let n = "_._";
          return (
            "0.0" === this.amount
              ? (n = 0)
              : "string" == typeof this.amount && this.amount.length > 6
              ? (n = parseFloat(this.amount).toFixed(3))
              : "string" == typeof this.amount && (n = parseFloat(this.amount)),
            b`<div><w3m-token-image symbol="${this.symbol}"></w3m-token-image><w3m-text variant="medium-regular" color="primary">${n} ${this.symbol}</w3m-text></div>`
          );
        }
      };
      (_e.styles = [D.globalCss, Oa]),
        In([et()], _e.prototype, "symbol", 2),
        In([et()], _e.prototype, "amount", 2),
        (_e = In([R("w3m-balance")], _e));
      const Ma = g`:host{all:initial}svg{width:28px;height:20px;margin:-1px 3px 0 -5px}svg path{fill:var(--w3m-accent-fill-color)}button:disabled svg path{fill:var(--w3m-color-fg-3)}w3m-spinner{margin:0 10px 0 0}`;
      var Na = Object.defineProperty,
        Sa = Object.getOwnPropertyDescriptor,
        Fe = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Sa(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Na(r, i, a), a;
        };
      let Ht = class extends S {
        constructor() {
          super(),
            (this.loading = !1),
            (this.label = "Connect Wallet"),
            (this.icon = "show"),
            (this.modalUnsub = void 0),
            E.rejectStandaloneButtonComponent(),
            (this.modalUnsub = d.jb.subscribe((n) => {
              n.open && (this.loading = !0), n.open || (this.loading = !1);
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.modalUnsub) || n.call(this);
        }
        iconTemplate() {
          return "show" === this.icon ? L.WALLET_CONNECT_ICON : null;
        }
        onClick() {
          d.CV.state.isConnected ? this.onDisconnect() : this.onConnect();
        }
        onConnect() {
          var n = this;
          return (0, m.Z)(function* () {
            (n.loading = !0),
              d.uA.click({ name: "CONNECT_BUTTON" }),
              yield d.jb.open(),
              d.jb.state.open || (n.loading = !1);
          })();
        }
        onDisconnect() {
          return (0, m.Z)(function* () {
            d.uA.click({ name: "DISCONNECT_BUTTON" }),
              yield d.Id.client().disconnect();
          })();
        }
        render() {
          return b`<w3m-button-big .disabled="${this.loading}" @click="${
            this.onClick
          }">${
            this.loading
              ? b`<w3m-spinner></w3m-spinner><w3m-text variant="medium-regular" color="accent">Connecting...</w3m-text>`
              : b`${this.iconTemplate()}<w3m-text variant="medium-regular" color="inverse">${
                  this.label
                }</w3m-text>`
          }</w3m-button-big>`;
        }
      };
      (Ht.styles = [D.globalCss, Ma]),
        Fe([et()], Ht.prototype, "loading", 2),
        Fe([_()], Ht.prototype, "label", 2),
        Fe([_()], Ht.prototype, "icon", 2),
        (Ht = Fe([R("w3m-connect-button")], Ht));
      const Ra = g`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:2px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:90px;height:90px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}.w3m-stale svg,.w3m-stale use{display:none}`;
      var La = Object.defineProperty,
        ja = Object.getOwnPropertyDescriptor,
        se = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? ja(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && La(r, i, a), a;
        };
      let St = class extends S {
        constructor() {
          super(...arguments),
            (this.walletId = void 0),
            (this.imageId = void 0),
            (this.isError = !1),
            (this.isStale = !1),
            (this.label = "");
        }
        svgLoaderTemplate() {
          var n, r;
          const i =
            null !=
            (r =
              null == (n = d.Ic.state.themeVariables)
                ? void 0
                : n["--w3m-wallet-icon-large-border-radius"])
              ? r
              : D.getPreset("--w3m-wallet-icon-large-border-radius");
          let l = 0;
          return (
            (l = i.includes("%") ? 0.88 * parseInt(i, 10) : parseInt(i, 10)),
            (l *= 1.17),
            b`<svg viewBox="0 0 110 110" width="110" height="110"><rect id="w3m-loader" x="2" y="2" width="106" height="106" rx="${l}"/><use xlink:href="#w3m-loader" stroke-dasharray="106 ${
              317 - 1.57 * l
            }" stroke-dashoffset="${425 - 1.8 * l}"></use></svg>`
          );
        }
        render() {
          return b`<div class="${vt({
            "w3m-error": this.isError,
            "w3m-stale": this.isStale,
          })}">${this.svgLoaderTemplate()}<w3m-wallet-image walletId="${
            this.walletId
          }" imageId="${
            this.imageId
          }"></w3m-wallet-image></div><w3m-text variant="medium-regular" color="${
            this.isError ? "error" : "primary"
          }">${this.isError ? "Connection declined" : this.label}</w3m-text>`;
        }
      };
      (St.styles = [D.globalCss, Ra]),
        se([_()], St.prototype, "walletId", 2),
        se([_()], St.prototype, "imageId", 2),
        se([_()], St.prototype, "isError", 2),
        se([_()], St.prototype, "isStale", 2),
        se([_()], St.prototype, "label", 2),
        (St = se([R("w3m-connector-waiting")], St));
      var Da = Object.defineProperty,
        Ba = Object.getOwnPropertyDescriptor,
        ce = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Ba(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Da(r, i, a), a;
        };
      let Rt = class extends S {
        constructor() {
          super(),
            (this.isConnected = !1),
            (this.label = "Connect Wallet"),
            (this.icon = "show"),
            (this.avatar = "show"),
            (this.balance = "hide"),
            (this.unsubscribeAccount = void 0),
            E.rejectStandaloneButtonComponent(),
            (this.isConnected = d.CV.state.isConnected),
            (this.unsubscribeAccount = d.CV.subscribe(({ isConnected: n }) => {
              this.isConnected = n;
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unsubscribeAccount) || n.call(this);
        }
        render() {
          const { enableAccountView: n } = d.t0.state;
          return this.isConnected && n
            ? b`<w3m-account-button balance="${this.balance}" avatar="${this.avatar}"></w3m-account-button>`
            : b`<w3m-connect-button label="${
                this.isConnected ? "Disconnect" : this.label
              }" icon="${this.icon}"></w3m-connect-button>`;
        }
      };
      ce([et()], Rt.prototype, "isConnected", 2),
        ce([_()], Rt.prototype, "label", 2),
        ce([_()], Rt.prototype, "icon", 2),
        ce([_()], Rt.prototype, "avatar", 2),
        ce([_()], Rt.prototype, "balance", 2),
        (Rt = ce([R("w3m-core-button")], Rt));
      const Wa = g`.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between}.w3m-desktop-title,.w3m-mobile-title{display:flex;align-items:center}.w3m-mobile-title{justify-content:space-between;margin-bottom:20px;margin-top:-10px}.w3m-desktop-title{margin-bottom:10px;padding:0 10px}.w3m-subtitle{display:flex;align-items:center}.w3m-subtitle:last-child path{fill:var(--w3m-color-fg-3)}.w3m-desktop-title svg,.w3m-mobile-title svg{margin-right:6px}.w3m-desktop-title path,.w3m-mobile-title path{fill:var(--w3m-accent-color)}`;
      let _n = class extends S {
        render() {
          const { isStandalone: n } = d.zb.state,
            { explorerExcludedWalletIds: r, enableExplorer: i } = d.t0.state,
            l = "ALL" !== r && i,
            a = bt.manualWalletsTemplate(),
            s = bt.recomendedWalletsTemplate(),
            c = bt.externalWalletsTemplate(),
            $ = bt.recentWalletTemplate(),
            C = bt.installedInjectedWalletsTemplate();
          let A = [$, ...a, ...s];
          n || (A = [...C, $, ...c, ...a, ...s]), (A = A.filter(Boolean));
          const nt = A.length > 4 || l;
          let O = [];
          return (
            (O = nt ? A.slice(0, 3) : A),
            b`<w3m-modal-header .border="${!0}" title="Connect your wallet" .onAction="${
              E.handleUriCopy
            }" .actionIcon="${
              L.COPY_ICON
            }"></w3m-modal-header><w3m-modal-content><div class="w3m-mobile-title"><div class="w3m-subtitle">${
              L.MOBILE_ICON
            }<w3m-text variant="small-regular" color="accent">Mobile</w3m-text></div><div class="w3m-subtitle">${
              L.SCAN_ICON
            }<w3m-text variant="small-regular" color="secondary">Scan with your wallet</w3m-text></div></div><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>${
              O.length
                ? b`<w3m-modal-footer><div class="w3m-desktop-title">${
                    L.DESKTOP_ICON
                  }<w3m-text variant="small-regular" color="accent">Desktop</w3m-text></div><div class="w3m-grid">${O} ${
                    nt
                      ? b`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`
                      : null
                  }</div></w3m-modal-footer>`
                : null
            }`
          );
        }
      };
      (_n.styles = [D.globalCss, Wa]),
        (_n = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-desktop-wallet-selection")], _n));
      const Ha = g`div{background-color:var(--w3m-color-bg-2);padding:10px 20px 15px 20px;border-top:1px solid var(--w3m-color-bg-3);text-align:center}a{color:var(--w3m-accent-color);text-decoration:none;transition:opacity .2s ease-in-out;display:inline}a:active{opacity:.8}@media(hover:hover){a:hover{opacity:.8}}`;
      let On = class extends S {
        render() {
          const { termsOfServiceUrl: n, privacyPolicyUrl: r } = d.t0.state;
          return n ?? r
            ? b`<div><w3m-text variant="small-regular" color="secondary">By connecting your wallet to this app, you agree to the app's ${
                n
                  ? b`<a href="${n}" target="_blank" rel="noopener noreferrer">Terms of Service</a>`
                  : null
              } ${n && r ? "and" : null} ${
                r
                  ? b`<a href="${r}" target="_blank" rel="noopener noreferrer">Privacy Policy</a>`
                  : null
              }</w3m-text></div>`
            : null;
        }
      };
      (On.styles = [D.globalCss, Ha]),
        (On = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-legal-notice")], On));
      const Ka = g`div{display:grid;grid-template-columns:repeat(4,80px);margin:0 -10px;justify-content:space-between;row-gap:10px}`;
      let Tn = class extends S {
        onQrcode() {
          d.AV.push("Qrcode");
        }
        render() {
          const { isStandalone: n } = d.zb.state,
            { explorerExcludedWalletIds: r, enableExplorer: i } = d.t0.state,
            l = "ALL" !== r && i,
            a = bt.manualWalletsTemplate(),
            s = bt.recomendedWalletsTemplate(),
            c = bt.externalWalletsTemplate(),
            $ = bt.recentWalletTemplate(),
            C = bt.installedInjectedWalletsTemplate();
          let A = [$, ...a, ...s];
          n || (A = [...C, $, ...c, ...a, ...s]), (A = A.filter(Boolean));
          const nt = A.length > 8 || l;
          let O = [];
          return (
            (O = nt ? A.slice(0, 7) : A),
            b`<w3m-modal-header title="Connect your wallet" .onAction="${
              this.onQrcode
            }" .actionIcon="${L.QRCODE_ICON}"></w3m-modal-header>${
              O.length
                ? b`<w3m-modal-content><div>${O} ${
                    nt
                      ? b`<w3m-view-all-wallets-button></w3m-view-all-wallets-button>`
                      : null
                  }</div></w3m-modal-content>`
                : null
            }`
          );
        }
      };
      (Tn.styles = [D.globalCss, Ka]),
        (Tn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-mobile-wallet-selection")], Tn));
      const Xa = g`:host{all:initial}.w3m-overlay{top:0;bottom:0;left:0;right:0;position:fixed;z-index:var(--w3m-z-index);overflow:hidden;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3);opacity:0;pointer-events:none}@media(max-height:720px) and (orientation:landscape){.w3m-overlay{overflow:scroll;align-items:flex-start;padding:20px 0}}.w3m-active{pointer-events:auto}.w3m-container{position:relative;max-width:360px;width:100%;outline:0;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) var(--w3m-container-border-radius) var(--w3m-container-border-radius);border:1px solid var(--w3m-color-overlay);overflow:hidden}.w3m-card{width:100%;position:relative;border-radius:var(--w3m-container-border-radius);overflow:hidden;box-shadow:0 6px 14px -6px rgba(10,16,31,.12),0 10px 32px -4px rgba(10,16,31,.1),0 0 0 1px var(--w3m-color-overlay);background-color:var(--w3m-color-bg-1);color:var(--w3m-color-fg-1)}@media(max-width:600px){.w3m-container{max-width:440px;border-radius:var(--w3m-background-border-radius) var(--w3m-background-border-radius) 0 0}.w3m-card{border-radius:var(--w3m-container-border-radius) var(--w3m-container-border-radius) 0 0}.w3m-overlay{align-items:flex-end}}@media(max-width:440px){.w3m-container{border:0}}`;
      var qa = Object.defineProperty,
        tl = Object.getOwnPropertyDescriptor,
        Pn = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? tl(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && qa(r, i, a), a;
        };
      let de = class extends S {
        constructor() {
          super(),
            (this.open = !1),
            (this.active = !1),
            (this.unsubscribeModal = void 0),
            (this.abortController = void 0),
            (this.unsubscribeModal = d.jb.subscribe((n) => {
              n.open ? this.onOpenModalEvent() : this.onCloseModalEvent();
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unsubscribeModal) || n.call(this);
        }
        get overlayEl() {
          return E.getShadowRootElement(this, ".w3m-overlay");
        }
        get containerEl() {
          return E.getShadowRootElement(this, ".w3m-container");
        }
        toggleBodyScroll(n) {
          document.querySelector("body") &&
            (n
              ? document.getElementById("w3m-styles")?.remove()
              : document.head.insertAdjacentHTML(
                  "beforeend",
                  '<style id="w3m-styles">html,body{touch-action:none;overflow:hidden;overscroll-behavior:contain;}</style>'
                ));
        }
        onCloseModal(n) {
          n.target === n.currentTarget && d.jb.close();
        }
        onOpenModalEvent() {
          var n = this;
          this.toggleBodyScroll(!1),
            this.addKeyboardEvents(),
            (this.open = !0),
            setTimeout(
              (0, m.Z)(function* () {
                const r = E.isMobileAnimation()
                  ? { y: ["50vh", "0vh"] }
                  : { scale: [0.98, 1] };
                yield Promise.all([
                  Bt(
                    n.overlayEl,
                    { opacity: [0, 1] },
                    { delay: 0.1, duration: 0.2 }
                  ).finished,
                  Bt(n.containerEl, r, { delay: 0.1, duration: 0.2 }).finished,
                ]),
                  (n.active = !0);
              }),
              0
            );
        }
        onCloseModalEvent() {
          var n = this;
          return (0, m.Z)(function* () {
            n.toggleBodyScroll(!0), n.removeKeyboardEvents();
            const r = E.isMobileAnimation()
              ? { y: ["0vh", "50vh"] }
              : { scale: [1, 0.98] };
            yield Promise.all([
              Bt(n.overlayEl, { opacity: [1, 0] }, { duration: 0.2 }).finished,
              Bt(n.containerEl, r, { duration: 0.2 }).finished,
            ]),
              n.containerEl.removeAttribute("style"),
              (n.active = !1),
              (n.open = !1);
          })();
        }
        addKeyboardEvents() {
          (this.abortController = new AbortController()),
            window.addEventListener(
              "keydown",
              (n) => {
                var r;
                "Escape" === n.key
                  ? d.jb.close()
                  : "Tab" === n.key &&
                    ((null != (r = n.target) && r.tagName.includes("W3M-")) ||
                      this.containerEl.focus());
              },
              this.abortController
            ),
            this.containerEl.focus();
        }
        removeKeyboardEvents() {
          var n;
          null == (n = this.abortController) || n.abort(),
            (this.abortController = void 0);
        }
        managedModalContextTemplate() {
          const { isStandalone: n } = d.zb.state;
          return n
            ? null
            : b`<w3m-wc-connection-context></w3m-wc-connection-context><w3m-account-context></w3m-account-context><w3m-network-context></w3m-network-context>`;
        }
        render() {
          const n = { "w3m-overlay": !0, "w3m-active": this.active };
          return b`<w3m-explorer-context></w3m-explorer-context><w3m-theme-context></w3m-theme-context>${this.managedModalContextTemplate()}<div id="w3m-modal" class="${vt(
            n
          )}" @click="${
            this.onCloseModal
          }" role="alertdialog" aria-modal="true"><div class="w3m-container" tabindex="0">${
            this.open
              ? b`<w3m-modal-backcard></w3m-modal-backcard><div class="w3m-card"><w3m-modal-router></w3m-modal-router><w3m-modal-toast></w3m-modal-toast></div>`
              : null
          }</div></div>`;
        }
      };
      (de.styles = [D.globalCss, Xa]),
        Pn([et()], de.prototype, "open", 2),
        Pn([et()], de.prototype, "active", 2),
        (de = Pn([R("w3m-modal")], de));
      const el = g`:host{all:initial}w3m-network-image{margin-left:-6px;margin-right:6px;width:28px;height:28px}`;
      var nl = Object.defineProperty,
        rl = Object.getOwnPropertyDescriptor,
        Ge = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? rl(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && nl(r, i, a), a;
        };
      let Zt = class extends S {
        constructor() {
          super(),
            (this.chainId = ""),
            (this.label = ""),
            (this.wrongNetwork = !1),
            (this.unsubscribeNetwork = void 0),
            E.rejectStandaloneButtonComponent();
          const { selectedChain: n } = d.zb.state;
          this.onSetChainData(n),
            (this.unsubscribeNetwork = d.zb.subscribe(
              ({ selectedChain: r }) => {
                this.onSetChainData(r);
              }
            ));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unsubscribeNetwork) || n.call(this);
        }
        onSetChainData(n) {
          if (n) {
            const { chains: r } = d.zb.state,
              i = r?.map((l) => l.id);
            (this.chainId = n.id.toString()),
              (this.wrongNetwork = !(null != i && i.includes(n.id))),
              (this.label = this.wrongNetwork ? "Wrong Network" : n.name);
          }
        }
        onClick() {
          d.uA.click({ name: "NETWORK_BUTTON" }),
            d.jb.open({ route: "SelectNetwork" });
        }
        render() {
          var n;
          const { chains: r } = d.zb.state;
          return b`<w3m-button-big @click="${this.onClick}" ?disabled="${!(
            r && r.length > 1
          )}"><w3m-network-image chainId="${
            this.chainId
          }"></w3m-network-image><w3m-text variant="medium-regular" color="inverse">${
            null != (n = this.label) && n.length ? this.label : "Select Network"
          }</w3m-text></w3m-button-big>`;
        }
      };
      (Zt.styles = [D.globalCss, el]),
        Ge([et()], Zt.prototype, "chainId", 2),
        Ge([et()], Zt.prototype, "label", 2),
        Ge([et()], Zt.prototype, "wrongNetwork", 2),
        (Zt = Ge([R("w3m-network-switch")], Zt));
      const il = g`@keyframes loading{to{stroke-dashoffset:0}}@keyframes shake{10%,90%{transform:translate3d(-1px,0,0)}20%,80%{transform:translate3d(1px,0,0)}30%,50%,70%{transform:translate3d(-2px,0,0)}40%,60%{transform:translate3d(2px,0,0)}}:host{display:flex;flex-direction:column;align-items:center}div{position:relative;width:110px;height:110px;display:flex;justify-content:center;align-items:center;margin:40px 0 20px 0;transform:translate3d(0,0,0)}svg{position:absolute;width:110px;height:110px;fill:none;stroke:transparent;stroke-linecap:round;stroke-width:1px;top:0;left:0}use{stroke:var(--w3m-accent-color);animation:loading 1s linear infinite}w3m-network-image{width:92px;height:92px}w3m-text{margin-bottom:40px}.w3m-error svg{stroke:var(--w3m-error-color)}.w3m-error use{display:none}.w3m-error{animation:shake .4s cubic-bezier(.36,.07,.19,.97) both}`;
      var ol = Object.defineProperty,
        al = Object.getOwnPropertyDescriptor,
        Ke = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? al(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && ol(r, i, a), a;
        };
      let he = class extends S {
        constructor() {
          super(...arguments),
            (this.chainId = void 0),
            (this.isError = !1),
            (this.label = "");
        }
        svgLoaderTemplate() {
          return b`<svg width="54" height="59" viewBox="0 0 54 59" fill="none" class="w3m-loader"><path id="w3m-loader-path" d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"/><use xlink:href="#w3m-loader-path" stroke-dasharray="54 118" stroke-dashoffset="172"></use></svg>`;
        }
        render() {
          return b`<div class="${vt({
            "w3m-error": this.isError,
          })}">${this.svgLoaderTemplate()}<w3m-network-image chainId="${
            this.chainId
          }"></w3m-network-image></div><w3m-text variant="medium-regular" color="${
            this.isError ? "error" : "primary"
          }">${this.isError ? "Switch declined" : this.label}</w3m-text>`;
        }
      };
      (he.styles = [D.globalCss, il]),
        Ke([_()], he.prototype, "chainId", 2),
        Ke([_()], he.prototype, "isError", 2),
        Ke([_()], he.prototype, "label", 2),
        (he = Ke([R("w3m-network-waiting")], he));
      const ll = g`div{display:flex;margin-top:15px}slot{display:inline-block;margin:0 5px}w3m-button{margin:0 5px}`;
      var sl = Object.defineProperty,
        cl = Object.getOwnPropertyDescriptor,
        Ft = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? cl(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && sl(r, i, a), a;
        };
      let _t = class extends S {
        constructor() {
          super(...arguments),
            (this.isMobile = !1),
            (this.isInjected = !1),
            (this.isInjectedInstalled = !1),
            (this.isDesktop = !1),
            (this.isWeb = !1),
            (this.isRetry = !1);
        }
        onMobile() {
          d.zv.isMobile()
            ? d.AV.replace("MobileConnecting")
            : d.AV.replace("MobileQrcodeConnecting");
        }
        onInjected() {
          d.AV.replace(
            this.isInjectedInstalled ? "InjectedConnecting" : "InstallWallet"
          );
        }
        onDesktop() {
          d.AV.replace("DesktopConnecting");
        }
        onWeb() {
          d.AV.replace("WebConnecting");
        }
        render() {
          const { isStandalone: n } = d.zb.state;
          return b`<div>${this.isRetry ? b`<slot></slot>` : null} ${
            this.isMobile
              ? b`<w3m-button .onClick="${this.onMobile}" .iconLeft="${L.MOBILE_ICON}" variant="outline">Mobile</w3m-button>`
              : null
          } ${
            this.isInjected && !n
              ? b`<w3m-button .onClick="${this.onInjected}" .iconLeft="${L.WALLET_ICON}" variant="outline">Browser</w3m-button>`
              : null
          } ${
            this.isDesktop
              ? b`<w3m-button .onClick="${this.onDesktop}" .iconLeft="${L.DESKTOP_ICON}" variant="outline">Desktop</w3m-button>`
              : null
          } ${
            this.isWeb
              ? b`<w3m-button .onClick="${this.onWeb}" .iconLeft="${L.GLOBE_ICON}" variant="outline">Web</w3m-button>`
              : null
          }</div>`;
        }
      };
      (_t.styles = [D.globalCss, ll]),
        Ft([_()], _t.prototype, "isMobile", 2),
        Ft([_()], _t.prototype, "isInjected", 2),
        Ft([_()], _t.prototype, "isInjectedInstalled", 2),
        Ft([_()], _t.prototype, "isDesktop", 2),
        Ft([_()], _t.prototype, "isWeb", 2),
        Ft([_()], _t.prototype, "isRetry", 2),
        (_t = Ft([R("w3m-platform-selection")], _t));
      const dl = g`button{display:flex;flex-direction:column;padding:5px 10px;border-radius:var(--w3m-button-hover-highlight-border-radius);height:100%;justify-content:flex-start}.w3m-icons{width:60px;height:60px;display:flex;flex-wrap:wrap;padding:7px;border-radius:var(--w3m-wallet-icon-border-radius);justify-content:space-between;align-items:center;margin-bottom:5px;background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay)}button:active{background-color:var(--w3m-color-overlay)}@media(hover:hover){button:hover{background-color:var(--w3m-color-overlay)}}.w3m-icons img{width:21px;height:21px;object-fit:cover;object-position:center;border-radius:calc(var(--w3m-wallet-icon-border-radius)/ 2);border:1px solid var(--w3m-color-overlay)}.w3m-icons svg{width:21px;height:21px}.w3m-icons img:nth-child(1),.w3m-icons img:nth-child(2),.w3m-icons svg:nth-child(1),.w3m-icons svg:nth-child(2){margin-bottom:4px}w3m-text{width:100%;text-align:center}#wallet-placeholder-fill{fill:var(--w3m-color-bg-3)}#wallet-placeholder-dash{stroke:var(--w3m-color-overlay)}`;
      let Mn = class extends S {
        onClick() {
          d.AV.push("WalletExplorer");
        }
        render() {
          const { recomendedWallets: n } = d.uc.state,
            i = [...n, ...yt.manualWallets()].reverse().slice(0, 4);
          return b`<button @click="${
            this.onClick
          }"><div class="w3m-icons">${i.map((l) => {
            const a = E.getWalletIcon(l);
            if (a) return b`<img src="${a}">`;
            const s = E.getWalletIcon({ id: l.id });
            return s ? b`<img src="${s}">` : L.WALLET_PLACEHOLDER;
          })} ${[...Array(4 - i.length)].map(
            () => L.WALLET_PLACEHOLDER
          )}</div><w3m-text variant="xsmall-regular">View All</w3m-text></button>`;
        }
      };
      (Mn.styles = [D.globalCss, dl]),
        (Mn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-view-all-wallets-button")], Mn));
      const pl = g`.w3m-qr-container{width:100%;display:flex;justify-content:center;align-items:center;aspect-ratio:1/1}`;
      var gl = Object.defineProperty,
        fl = Object.getOwnPropertyDescriptor,
        Ye = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? fl(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && gl(r, i, a), a;
        };
      let ue = class extends S {
        constructor() {
          super(),
            (this.walletId = ""),
            (this.imageId = ""),
            (this.uri = ""),
            (this.unwatchWcConnection = void 0),
            setTimeout(() => {
              const { pairingUri: n } = d.kD.state,
                { standaloneUri: r } = d.zb.state;
              this.uri = r ?? n;
            }, 0),
            (this.unwatchWcConnection = d.kD.subscribe((n) => {
              n.pairingUri && (this.uri = n.pairingUri);
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unwatchWcConnection) || n.call(this);
        }
        get overlayEl() {
          return E.getShadowRootElement(this, ".w3m-qr-container");
        }
        render() {
          return b`<div class="w3m-qr-container">${
            this.uri
              ? b`<w3m-qrcode size="${this.overlayEl.offsetWidth}" uri="${this.uri}" walletId="${this.walletId}" imageId="${this.imageId}"></w3m-qrcode>`
              : b`<w3m-spinner></w3m-spinner>`
          }</div>`;
        }
      };
      (ue.styles = [D.globalCss, pl]),
        Ye([_()], ue.prototype, "walletId", 2),
        Ye([_()], ue.prototype, "imageId", 2),
        Ye([et()], ue.prototype, "uri", 2),
        (ue = Ye([R("w3m-walletconnect-qr")], ue));
      const wl = g`.w3m-profile{display:flex;justify-content:space-between;align-items:flex-start;padding-top:20px}.w3m-connection-badge{background-color:var(--w3m-color-bg-2);box-shadow:inset 0 0 0 1px var(--w3m-color-overlay);padding:6px 10px 6px 26px;position:relative;border-radius:28px}.w3m-connection-badge::before{content:'';position:absolute;width:10px;height:10px;left:10px;background-color:var(--w3m-success-color);border-radius:50%;top:50%;margin-top:-5px;box-shadow:0 1px 4px 1px var(--w3m-success-color),inset 0 0 0 1px var(--w3m-color-overlay)}.w3m-footer{display:flex;justify-content:space-between}w3m-address-text{margin-top:10px;display:block}.w3m-balance{border-top:1px solid var(--w3m-color-bg-2);padding:11px 20px}`;
      let Nn = class extends S {
        onDisconnect() {
          return (0, m.Z)(function* () {
            yield d.Id.client().disconnect();
          })();
        }
        onCopyAddress() {
          return (0, m.Z)(function* () {
            var n;
            yield navigator.clipboard.writeText(
              null != (n = d.CV.state.address) ? n : ""
            ),
              d.Vs.openToast("Address copied", "success");
          })();
        }
        render() {
          return b`<w3m-modal-content><div class="w3m-profile"><div class="w3m-info"><w3m-avatar size="medium"></w3m-avatar><w3m-address-text variant="modal"></w3m-address-text></div><div class="w3m-connection-badge"><w3m-text variant="small-regular" color="secondary">Connected</w3m-text></div></div></w3m-modal-content><div class="w3m-balance"><w3m-balance></w3m-balance></div><w3m-modal-footer><div class="w3m-footer"><w3m-account-network-button></w3m-account-network-button><w3m-box-button label="Copy Address" .onClick="${this.onCopyAddress}" .icon="${L.ACCOUNT_COPY}"></w3m-box-button><w3m-box-button label="Disconnect" .onClick="${this.onDisconnect}" .icon="${L.ACCOUNT_DISCONNECT}"></w3m-box-button></div></w3m-modal-footer>`;
        }
      };
      (Nn.styles = [D.globalCss, wl]),
        (Nn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-account-view")], Nn));
      let Sn = class extends S {
        viewTemplate() {
          return d.zv.isAndroid()
            ? b`<w3m-android-wallet-selection></w3m-android-wallet-selection>`
            : d.zv.isMobile()
            ? b`<w3m-mobile-wallet-selection></w3m-mobile-wallet-selection>`
            : b`<w3m-desktop-wallet-selection></w3m-desktop-wallet-selection>`;
        }
        render() {
          return b`${this.viewTemplate()}<w3m-legal-notice></w3m-legal-notice>`;
        }
      };
      (Sn.styles = [D.globalCss]),
        (Sn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-connect-wallet-view")], Sn));
      const Al = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      var El = Object.defineProperty,
        kl = Object.getOwnPropertyDescriptor,
        Tr = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? kl(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && El(r, i, a), a;
        };
      let Je = class extends S {
        constructor() {
          super(),
            (this.isError = !1),
            (this.unwatchConnection = void 0),
            this.openDesktopApp(),
            (this.unwatchConnection = d.kD.subscribe((n) => {
              this.isError = n.pairingError;
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unwatchConnection) || n.call(this);
        }
        onFormatAndRedirect(n) {
          const { desktop: r, name: i } = d.zv.getWalletRouterData(),
            l = r?.native;
          if (l) {
            const a = d.zv.formatNativeUrl(l, n, i);
            d.zv.openHref(a, "_self");
          }
        }
        openDesktopApp() {
          d.kD.setPairingError(!1);
          const { standaloneUri: n } = d.zb.state,
            { pairingUri: r } = d.kD.state,
            i = d.zv.getWalletRouterData();
          E.setRecentWallet(i), this.onFormatAndRedirect(n || r);
        }
        render() {
          const { name: n, id: r, image_id: i } = d.zv.getWalletRouterData(),
            {
              isMobile: l,
              isInjected: a,
              isWeb: s,
            } = E.getCachedRouterWalletPlatforms();
          return b`<w3m-modal-header title="${n}" .onAction="${
            E.handleUriCopy
          }" .actionIcon="${
            L.COPY_ICON
          }"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${r}" imageId="${i}" label="${`Continue in ${n}...`}" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Connection can continue loading if ${n} is not installed on your device`}</w3m-text><w3m-platform-selection .isMobile="${l}" .isInjected="${a}" .isWeb="${s}" .isRetry="${!0}"><w3m-button .onClick="${this.openDesktopApp.bind(
            this
          )}" .iconRight="${
            L.RETRY_ICON
          }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (Je.styles = [D.globalCss, Al]),
        Tr([et()], Je.prototype, "isError", 2),
        (Je = Tr([R("w3m-desktop-connecting-view")], Je));
      const Il = g`.w3m-info-text{margin:5px 0 15px;max-width:320px;text-align:center}.w3m-wallet-item{margin:0 -20px 0 0;padding-right:20px;display:flex;align-items:center;border-bottom:1px solid var(--w3m-color-bg-2)}.w3m-wallet-item:last-child{margin-bottom:-20px;border-bottom:0}.w3m-wallet-content{margin-left:20px;height:60px;display:flex;flex:1;align-items:center;justify-content:space-between}.w3m-footer-actions{display:flex;flex-direction:column;align-items:center;padding:20px 0;border-top:1px solid var(--w3m-color-bg-2)}w3m-wallet-image{display:block;width:40px;height:40px;border-radius:10px}`;
      let Rn = class extends S {
        onGet(n) {
          d.zv.openHref(n, "_blank");
        }
        render() {
          const n = d.uc.state.recomendedWallets.slice(0, 5),
            r = yt.manualWallets().slice(0, 5),
            l = r.length;
          return b`<w3m-modal-header title="Get a wallet"></w3m-modal-header><w3m-modal-content>${
            n.length
              ? n.map(
                  (a) =>
                    b`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${
                      a.id
                    }" imageId="${
                      a.image_id
                    }"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${
                      a.name
                    }</w3m-text><w3m-button .iconRight="${
                      L.ARROW_RIGHT_ICON
                    }" .onClick="${() =>
                      this.onGet(a.homepage)}">Get</w3m-button></div></div>`
                )
              : null
          } ${
            l
              ? r.map(
                  (a) =>
                    b`<div class="w3m-wallet-item"><w3m-wallet-image walletId="${
                      a.id
                    }"></w3m-wallet-image><div class="w3m-wallet-content"><w3m-text variant="medium-regular">${
                      a.name
                    }</w3m-text><w3m-button .iconRight="${
                      L.ARROW_RIGHT_ICON
                    }" .onClick="${() =>
                      this.onGet(
                        a.links.universal
                      )}">Get</w3m-button></div></div>`
                )
              : null
          }</w3m-modal-content><div class="w3m-footer-actions"><w3m-text variant="medium-regular">Not what you're looking for?</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With hundreds of wallets out there, there's something for everyone</w3m-text><w3m-button .onClick="${
            E.openWalletExplorerUrl
          }" .iconRight="${
            L.ARROW_UP_RIGHT_ICON
          }">Explore Wallets</w3m-button></div>`;
        }
      };
      (Rn.styles = [D.globalCss, Il]),
        (Rn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-get-wallet-view")], Rn));
      const Pl = g`.w3m-footer-actions{display:flex;justify-content:center}.w3m-footer-actions w3m-button{margin:0 5px}.w3m-info-container{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-bottom:20px}.w3m-info-container:last-child{margin-bottom:0}.w3m-info-text{margin-top:5px;text-align:center}.w3m-images svg{margin:0 2px 5px;width:55px;height:55px}.help-img-highlight{stroke:var(--w3m-color-overlay)}`;
      let Ln = class extends S {
        constructor() {
          super(...arguments),
            (this.learnUrl = "https://ethereum.org/en/wallets/");
        }
        onGet() {
          d.t0.state.enableExplorer
            ? d.AV.push("GetWallet")
            : E.openWalletExplorerUrl();
        }
        onLearnMore() {
          d.zv.openHref(this.learnUrl, "_blank");
        }
        render() {
          return b`<w3m-modal-header title="What is a wallet?"></w3m-modal-header><w3m-modal-content><div class="w3m-info-container"><div class="w3m-images">${
            L.HELP_CHART_IMG
          } ${L.HELP_PAINTING_IMG} ${
            L.HELP_ETH_IMG
          }</div><w3m-text variant="medium-regular">A home for your digital assets</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${
            L.HELP_KEY_IMG
          } ${L.HELP_USER_IMG} ${
            L.HELP_LOCK_IMG
          }</div><w3m-text variant="medium-regular">One login for all of web3</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">Log in to any app by connecting your wallet. Say goodbye to countless passwords!</w3m-text></div><div class="w3m-info-container"><div class="w3m-images">${
            L.HELP_COMPAS_IMG
          } ${L.HELP_NOUN_IMG} ${
            L.HELP_DAO_IMG
          }</div><w3m-text variant="medium-regular">Your gateway to a new web</w3m-text><w3m-text variant="small-thin" color="secondary" class="w3m-info-text">With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.</w3m-text></div><div class="w3m-footer-actions"><w3m-button .onClick="${this.onGet.bind(
            this
          )}" .iconLeft="${
            L.WALLET_ICON
          }">Get a Wallet</w3m-button><w3m-button .onClick="${this.onLearnMore.bind(
            this
          )}" .iconRight="${
            L.ARROW_UP_RIGHT_ICON
          }">Learn More</w3m-button></div></w3m-modal-content>`;
        }
      };
      (Ln.styles = [D.globalCss, Pl]),
        (Ln = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-help-view")], Ln));
      const Rl = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      var Ll = Object.defineProperty,
        jl = Object.getOwnPropertyDescriptor,
        Pr = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? jl(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Ll(r, i, a), a;
        };
      let Qe = class extends S {
        constructor() {
          super(),
            (this.isError = !1),
            (this.connector = d.Id.client().getConnectorById("injected")),
            this.openInjectedApp();
        }
        openInjectedApp() {
          var n = this;
          return (0, m.Z)(function* () {
            const { ready: r } = n.connector;
            r &&
              ((n.isError = !1),
              yield E.handleConnectorConnection("injected", () => {
                n.isError = !0;
              }));
          })();
        }
        render() {
          const { name: n, id: r, image_id: i } = d.zv.getWalletRouterData(),
            {
              isMobile: l,
              isDesktop: a,
              isWeb: s,
            } = E.getCachedRouterWalletPlatforms();
          return b`<w3m-modal-header title="${n}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${r}" imageId="${i}" label="${`Continue in ${n}...`}" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Connection can be declined if multiple wallets are installed or previous request is still active</w3m-text><w3m-platform-selection .isMobile="${l}" .isDesktop="${a}" .isWeb="${s}" .isRetry="${!0}"><w3m-button .onClick="${this.openInjectedApp.bind(
            this
          )}" .disabled="${!this.isError}" .iconRight="${
            L.RETRY_ICON
          }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (Qe.styles = [D.globalCss, Rl]),
        Pr([et()], Qe.prototype, "isError", 2),
        (Qe = Pr([R("w3m-injected-connecting-view")], Qe));
      const Dl = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
      let jn = class extends S {
        onInstall(n) {
          n && d.zv.openHref(n, "_blank");
        }
        render() {
          const {
            name: n,
            id: r,
            image_id: i,
            homepage: l,
          } = d.zv.getWalletRouterData();
          return b`<w3m-modal-header title="${n}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${r}" imageId="${i}" label="Not Detected" .isStale="${!0}"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Download ${n} to continue. If multiple browser extensions are installed, disable non ${n} ones and try again`}</w3m-text><w3m-button .onClick="${() =>
            this.onInstall(l)}" .iconLeft="${
            L.ARROW_DOWN_ICON
          }">Download</w3m-button></w3m-info-footer>`;
        }
      };
      (jn.styles = [D.globalCss, Dl]),
        (jn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-install-wallet-view")], jn));
      const zl = g`w3m-wallet-image{border-radius:var(--w3m-wallet-icon-large-border-radius);width:96px;height:96px;margin-bottom:20px}w3m-info-footer{display:flex;width:100%}.w3m-app-store{justify-content:space-between}.w3m-app-store w3m-wallet-image{margin-right:10px;margin-bottom:0;width:28px;height:28px;border-radius:var(--w3m-wallet-icon-small-border-radius)}.w3m-app-store div{display:flex;align-items:center}.w3m-app-store w3m-button{margin-right:-10px}.w3m-note{flex-direction:column;align-items:center;padding:5px 0}.w3m-note w3m-text{text-align:center}w3m-platform-selection div{display:flex}w3m-platform-selection w3m-button:nth-child(2){margin-left:10px}`;
      var Vl = Object.defineProperty,
        Hl = Object.getOwnPropertyDescriptor,
        Mr = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? Hl(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Vl(r, i, a), a;
        };
      let Xe = class extends S {
        constructor() {
          super(),
            (this.isError = !1),
            (this.unwatchConnection = void 0),
            this.openMobileApp(),
            (this.unwatchConnection = d.kD.subscribe((n) => {
              this.isError = n.pairingError;
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unwatchConnection) || n.call(this);
        }
        onFormatAndRedirect(n, r = !1) {
          const { mobile: i, name: l } = d.zv.getWalletRouterData(),
            a = i?.native,
            s = i?.universal;
          if (a && !r) {
            const c = d.zv.formatNativeUrl(a, n, l);
            d.zv.openHref(c, "_self");
          } else if (s) {
            const c = d.zv.formatUniversalUrl(s, n, l);
            d.zv.openHref(c, "_self");
          }
        }
        openMobileApp(n = !1) {
          d.kD.setPairingError(!1);
          const { standaloneUri: r } = d.zb.state,
            { pairingUri: i } = d.kD.state,
            l = d.zv.getWalletRouterData();
          E.setRecentWallet(l), this.onFormatAndRedirect(r || i, n);
        }
        onGoToAppStore(n) {
          n && d.zv.openHref(n, "_blank");
        }
        render() {
          const {
              name: n,
              id: r,
              image_id: i,
              app: l,
              mobile: a,
            } = d.zv.getWalletRouterData(),
            { isWeb: s } = E.getCachedRouterWalletPlatforms(),
            c = l?.ios,
            $ = a?.universal;
          return b`<w3m-modal-header title="${n}"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${r}" imageId="${i}" label="Tap 'Open' to continue…" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer class="w3m-note"><w3m-text color="secondary" variant="small-thin">You can reload the website to try again ${
            $ ? ` or open ${n} using a "Backup" instead` : ""
          }</w3m-text><w3m-platform-selection .isWeb="${s}" .isRetry="${!0}"><div><w3m-button .onClick="${() =>
            this.openMobileApp(!1)}" .iconRight="${
            L.RETRY_ICON
          }">Retry</w3m-button>${
            $
              ? b`<w3m-button variant="outline" .onClick="${() =>
                  this.openMobileApp(!0)}" .iconRight="${
                  L.ARROW_UP_RIGHT_ICON
                }">Backup</w3m-button>`
              : null
          }</div></w3m-platform-selection></w3m-info-footer><w3m-info-footer class="w3m-app-store"><div><w3m-wallet-image walletId="${r}" imageId="${i}"></w3m-wallet-image><w3m-text>${`Get ${n}`}</w3m-text></div><w3m-button .iconRight="${
            L.ARROW_RIGHT_ICON
          }" .onClick="${() =>
            this.onGoToAppStore(
              c
            )}" variant="ghost">App Store</w3m-button></w3m-info-footer>`;
        }
      };
      (Xe.styles = [D.globalCss, zl]),
        Mr([et()], Xe.prototype, "isError", 2),
        (Xe = Mr([R("w3m-mobile-connecting-view")], Xe));
      const Zl = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      let Dn = class extends S {
        render() {
          const { name: n, id: r, image_id: i } = d.zv.getWalletRouterData(),
            {
              isInjected: l,
              isDesktop: a,
              isWeb: s,
            } = E.getCachedRouterWalletPlatforms();
          return b`<w3m-modal-header title="${n}" .onAction="${
            E.handleUriCopy
          }" .actionIcon="${
            L.COPY_ICON
          }"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr walletId="${r}" imageId="${i}"></w3m-walletconnect-qr></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`Scan this qrcode with your phone's camera or inside ${n} app`}</w3m-text><w3m-platform-selection .isDesktop="${a}" .isInjected="${l}" .isWeb="${s}"></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (Dn.styles = [D.globalCss, Zl]),
        (Dn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-mobile-qr-connecting-view")], Dn));
      let Bn = class extends S {
        render() {
          return b`<w3m-modal-header title="Scan the code" .onAction="${E.handleUriCopy}" .actionIcon="${L.COPY_ICON}"></w3m-modal-header><w3m-modal-content><w3m-walletconnect-qr></w3m-walletconnect-qr></w3m-modal-content>`;
        }
      };
      (Bn.styles = [D.globalCss]),
        (Bn = ((n, r, i, l) => {
          for (var c, a = r, s = n.length - 1; s >= 0; s--)
            (c = n[s]) && (a = c(a) || a);
          return a;
        })([R("w3m-qrcode-view")], Bn));
      const Xl = g`div{display:grid;grid-template-columns:repeat(4,80px);margin:-5px -10px;justify-content:space-between}w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-info-footer w3m-text{text-align:center}`;
      var Nr = Object.defineProperty,
        ql = Object.defineProperties,
        ts = Object.getOwnPropertyDescriptor,
        es = Object.getOwnPropertyDescriptors,
        Sr = Object.getOwnPropertySymbols,
        ns = Object.prototype.hasOwnProperty,
        rs = Object.prototype.propertyIsEnumerable,
        Rr = (n, r, i) =>
          r in n
            ? Nr(n, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (n[r] = i),
        Wn = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? ts(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && Nr(r, i, a), a;
        };
      let Oe = class extends S {
        constructor() {
          super(),
            (this.connectedChains = "ALL"),
            (this.isUnsupportedChains = !1),
            this.getConnectedChainIds();
        }
        getConnectedChainIds() {
          var n = this;
          return (0, m.Z)(function* () {
            n.connectedChains = yield d.Id.client().getConnectedChainIds();
          })();
        }
        onSelectChain(n) {
          return (0, m.Z)(function* () {
            try {
              const {
                  selectedChain: r,
                  walletConnectVersion: i,
                  isPreferInjected: l,
                } = d.zb.state,
                { isConnected: a } = d.CV.state;
              a
                ? r?.id === n.id
                  ? d.AV.reset("Account")
                  : 2 === i
                  ? (yield d.Id.client().switchNetwork({ chainId: n.id }),
                    d.AV.reset("Account"))
                  : d.AV.push("SwitchNetwork", { SwitchNetwork: n })
                : l
                ? (d.zb.setSelectedChain(n), d.jb.close())
                : (d.zb.setSelectedChain(n), d.AV.push("ConnectWallet"));
            } catch (r) {
              console.error(r), d.Vs.openToast(E.getErrorMessage(r), "error");
            }
          })();
        }
        isUnsuportedChainId(n) {
          return (
            (("string" == typeof this.connectedChains &&
              "ALL" !== this.connectedChains) ||
              !(
                !Array.isArray(this.connectedChains) ||
                this.connectedChains.includes(String(n))
              )) &&
            ((this.isUnsupportedChains = !0), !0)
          );
        }
        render() {
          var n = this;
          const { chains: r } = d.zb.state,
            i = r?.map((a) =>
              ((n, r) => ql(n, es(r)))(
                ((n, r) => {
                  for (var i in r || (r = {})) ns.call(r, i) && Rr(n, i, r[i]);
                  if (Sr) for (var i of Sr(r)) rs.call(r, i) && Rr(n, i, r[i]);
                  return n;
                })({}, a),
                { unsupported: this.isUnsuportedChainId(a.id) }
              )
            ),
            l = i?.sort(
              (a, s) => Number(a.unsupported) - Number(s.unsupported)
            );
          return b`<w3m-modal-header title="Select network"></w3m-modal-header><w3m-modal-content><div>${l?.map(
            (a) =>
              b`<w3m-network-button name="${a.name}" chainId="${
                a.id
              }" .unsupported="${a.unsupported}" .onClick="${(0, m.Z)(
                function* () {
                  return n.onSelectChain(a);
                }
              )}">${a.name}</w3m-network-button>`
          )}</div></w3m-modal-content>${
            this.isUnsupportedChains
              ? b`<w3m-info-footer><w3m-text color="secondary" variant="small-thin">Your connected wallet may not support some of the networks available for this dapp</w3m-text></w3m-info-footer>`
              : null
          }`;
        }
      };
      (Oe.styles = [D.globalCss, Xl]),
        Wn([et()], Oe.prototype, "connectedChains", 2),
        Wn([et()], Oe.prototype, "isUnsupportedChains", 2),
        (Oe = Wn([R("w3m-select-network-view")], Oe));
      const as = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}w3m-button{margin-top:15px}`;
      var ls = Object.defineProperty,
        ss = Object.getOwnPropertyDescriptor,
        Lr = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? ss(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && ls(r, i, a), a;
        };
      let qe = class extends S {
        constructor() {
          super(), (this.isError = !1), this.onSwitchNetwork();
        }
        onSwitchNetwork() {
          var n = this;
          return (0, m.Z)(function* () {
            try {
              n.isError = !1;
              const r = d.zv.getSwitchNetworkRouterData();
              yield d.Id.client().switchNetwork({ chainId: r.id }),
                d.zb.setSelectedChain(r),
                d.AV.reset("Account");
            } catch {
              n.isError = !0;
            }
          })();
        }
        render() {
          const { id: n, name: r } = d.zv.getSwitchNetworkRouterData();
          return b`<w3m-modal-header title="${`Connect to ${r}`}"></w3m-modal-header><w3m-modal-content><w3m-network-waiting chainId="${n}" label="Approve in your wallet" .isError="${
            this.isError
          }"></w3m-network-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">Switch can be declined if chain is not supported by a wallet or previous request is still active</w3m-text><w3m-button .onClick="${this.onSwitchNetwork.bind(
            this
          )}" .disabled="${!this.isError}" .iconRight="${
            L.RETRY_ICON
          }">Try Again</w3m-button></w3m-info-footer>`;
        }
      };
      (qe.styles = [D.globalCss, as]),
        Lr([et()], qe.prototype, "isError", 2),
        (qe = Lr([R("w3m-switch-network-view")], qe));
      const cs = g`w3m-modal-content{height:clamp(200px,60vh,600px);display:block;overflow:scroll;scrollbar-width:none;position:relative;margin-top:1px}.w3m-grid{display:grid;grid-template-columns:repeat(4,80px);justify-content:space-between;margin:-15px -10px;padding-top:20px}w3m-modal-content::after,w3m-modal-content::before{content:'';position:fixed;pointer-events:none;z-index:1;width:100%;height:20px;opacity:1}w3m-modal-content::before{box-shadow:0 -1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(var(--w3m-color-bg-1),rgba(255,255,255,0))}w3m-modal-content::after{box-shadow:0 1px 0 0 var(--w3m-color-bg-1);background:linear-gradient(rgba(255,255,255,0),var(--w3m-color-bg-1));top:calc(100% - 20px)}w3m-modal-content::-webkit-scrollbar{display:none}.w3m-placeholder-block{display:flex;justify-content:center;align-items:center;height:100px;overflow:hidden}.w3m-empty,.w3m-loading{display:flex}.w3m-loading .w3m-placeholder-block{height:100%}.w3m-end-reached .w3m-placeholder-block{height:0;opacity:0}.w3m-empty .w3m-placeholder-block{opacity:1;height:100%}w3m-wallet-button{margin:calc((100% - 60px)/ 3) 0}`;
      var ds = Object.defineProperty,
        hs = Object.getOwnPropertyDescriptor,
        Te = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? hs(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && ds(r, i, a), a;
        };
      let Gt = class extends S {
        constructor() {
          super(...arguments),
            (this.loading = !d.uc.state.wallets.listings.length),
            (this.firstFetch = !d.uc.state.wallets.listings.length),
            (this.search = ""),
            (this.endReached = !1),
            (this.intersectionObserver = void 0),
            (this.searchDebounce = E.debounce((n) => {
              n.length >= 3
                ? ((this.firstFetch = !0),
                  (this.endReached = !1),
                  (this.search = n),
                  d.uc.resetSearch(),
                  this.fetchWallets())
                : this.search &&
                  ((this.search = ""),
                  (this.endReached = this.isLastPage()),
                  d.uc.resetSearch());
            }));
        }
        firstUpdated() {
          this.createPaginationObserver();
        }
        disconnectedCallback() {
          var n;
          null == (n = this.intersectionObserver) || n.disconnect();
        }
        get placeholderEl() {
          return E.getShadowRootElement(this, ".w3m-placeholder-block");
        }
        createPaginationObserver() {
          (this.intersectionObserver = new IntersectionObserver(([n]) => {
            n.isIntersecting &&
              (!this.search || !this.firstFetch) &&
              this.fetchWallets();
          })),
            this.intersectionObserver.observe(this.placeholderEl);
        }
        isLastPage() {
          const { wallets: n, search: r } = d.uc.state,
            { listings: i, total: l } = this.search ? r : n;
          return l <= 40 || i.length >= l;
        }
        fetchWallets() {
          var n = this;
          return (0, m.Z)(function* () {
            var r;
            const { wallets: i, search: l, injectedWallets: a } = d.uc.state,
              { listings: s, total: c, page: $ } = n.search ? l : i;
            if (!n.endReached && (n.firstFetch || (c > 40 && s.length < c)))
              try {
                n.loading = !0;
                const C =
                    null == (r = d.zb.state.standaloneChains)
                      ? void 0
                      : r.join(","),
                  { listings: A } = yield d.uc.getWallets({
                    page: n.firstFetch ? 1 : $ + 1,
                    entries: 40,
                    search: n.search,
                    version: d.zb.state.walletConnectVersion,
                    chains: C,
                  }),
                  nt = A.map((T) => E.getWalletIcon(T)),
                  O = a.map((T) => E.getWalletIcon(T));
                yield Promise.all([
                  ...nt.map(
                    (function () {
                      var T = (0, m.Z)(function* (rt) {
                        return E.preloadImage(rt);
                      });
                      return function (rt) {
                        return T.apply(this, arguments);
                      };
                    })()
                  ),
                  ...O.map(
                    (function () {
                      var T = (0, m.Z)(function* (rt) {
                        return E.preloadImage(rt);
                      });
                      return function (rt) {
                        return T.apply(this, arguments);
                      };
                    })()
                  ),
                  d.zv.wait(300),
                ]),
                  (n.endReached = n.isLastPage());
              } catch (C) {
                console.error(C), d.Vs.openToast(E.getErrorMessage(C), "error");
              } finally {
                (n.loading = !1), (n.firstFetch = !1);
              }
          })();
        }
        onConnect(n) {
          d.zv.isAndroid() ? E.handleMobileLinking(n) : E.goToConnectingView(n);
        }
        onSearchChange(n) {
          const { value: r } = n.target;
          this.searchDebounce(r);
        }
        render() {
          const { wallets: n, search: r } = d.uc.state,
            { listings: i } = this.search ? r : n,
            l = this.loading && !i.length,
            a = this.search.length >= 3;
          let s = bt.injectedWalletsTemplate(),
            c = bt.manualWalletsTemplate(),
            $ = bt.recomendedWalletsTemplate(!0);
          a &&
            ((s = s.filter(({ values: O }) =>
              E.caseSafeIncludes(O[0], this.search)
            )),
            (c = c.filter(({ values: O }) =>
              E.caseSafeIncludes(O[0], this.search)
            )),
            ($ = $.filter(({ values: O }) =>
              E.caseSafeIncludes(O[0], this.search)
            )));
          const C = !(this.loading || i.length || s.length || $.length),
            A = Math.max(s.length, i.length),
            nt = {
              "w3m-loading": l,
              "w3m-end-reached": this.endReached || !this.loading,
              "w3m-empty": C,
            };
          return b`<w3m-modal-header><w3m-search-input .onChange="${this.onSearchChange.bind(
            this
          )}"></w3m-search-input></w3m-modal-header><w3m-modal-content class="${vt(
            nt
          )}"><div class="w3m-grid">${l ? null : $} ${
            l
              ? null
              : [...Array(A)].map(
                  (O, T) =>
                    b`${c[T]} ${s[T]} ${
                      i[T]
                        ? b`<w3m-wallet-button imageId="${
                            i[T].image_id
                          }" name="${i[T].name}" walletId="${
                            i[T].id
                          }" .onClick="${() =>
                            this.onConnect(i[T])}"></w3m-wallet-button>`
                        : null
                    }`
                )
          }</div><div class="w3m-placeholder-block">${
            C
              ? b`<w3m-text variant="big-bold" color="secondary">No results found</w3m-text>`
              : null
          } ${
            !C && this.loading ? b`<w3m-spinner></w3m-spinner>` : null
          }</div></w3m-modal-content>`;
        }
      };
      (Gt.styles = [D.globalCss, cs]),
        Te([et()], Gt.prototype, "loading", 2),
        Te([et()], Gt.prototype, "firstFetch", 2),
        Te([et()], Gt.prototype, "search", 2),
        Te([et()], Gt.prototype, "endReached", 2),
        (Gt = Te([R("w3m-wallet-explorer-view")], Gt));
      const us = g`w3m-info-footer{flex-direction:column;align-items:center;display:flex;width:100%;padding:5px 0}w3m-text{text-align:center}`;
      var ms = Object.defineProperty,
        ps = Object.getOwnPropertyDescriptor,
        jr = (n, r, i, l) => {
          for (
            var c, a = l > 1 ? void 0 : l ? ps(r, i) : r, s = n.length - 1;
            s >= 0;
            s--
          )
            (c = n[s]) && (a = (l ? c(r, i, a) : c(a)) || a);
          return l && a && ms(r, i, a), a;
        };
      let tn = class extends S {
        constructor() {
          super(),
            (this.isError = !1),
            (this.unwatchConnection = void 0),
            this.openWebWallet(),
            (this.unwatchConnection = d.kD.subscribe((n) => {
              this.isError = n.pairingError;
            }));
        }
        disconnectedCallback() {
          var n;
          null == (n = this.unwatchConnection) || n.call(this);
        }
        onFormatAndRedirect(n) {
          const { desktop: r, name: i } = d.zv.getWalletRouterData(),
            l = r?.universal;
          if (l) {
            const a = d.zv.formatUniversalUrl(l, n, i);
            d.zv.openHref(a, "_blank");
          }
        }
        openWebWallet() {
          d.kD.setPairingError(!1);
          const { standaloneUri: n } = d.zb.state,
            { pairingUri: r } = d.kD.state,
            i = d.zv.getWalletRouterData();
          E.setRecentWallet(i), this.onFormatAndRedirect(n || r);
        }
        render() {
          const { name: n, id: r, image_id: i } = d.zv.getWalletRouterData(),
            {
              isMobile: l,
              isInjected: a,
              isDesktop: s,
            } = E.getCachedRouterWalletPlatforms(),
            c = d.zv.isMobile();
          return b`<w3m-modal-header title="${n}" .onAction="${
            E.handleUriCopy
          }" .actionIcon="${
            L.COPY_ICON
          }"></w3m-modal-header><w3m-modal-content><w3m-connector-waiting walletId="${r}" imageId="${i}" label="${`Continue in ${n}...`}" .isError="${
            this.isError
          }"></w3m-connector-waiting></w3m-modal-content><w3m-info-footer><w3m-text color="secondary" variant="small-thin">${`${n} web app has opened in a new tab. Go there, accept the connection, and come back`}</w3m-text><w3m-platform-selection .isMobile="${l}" .isInjected="${
            !c && a
          }" .isDesktop="${
            !c && s
          }" .isRetry="${!0}"><w3m-button .onClick="${this.openWebWallet.bind(
            this
          )}" .iconRight="${
            L.RETRY_ICON
          }">Retry</w3m-button></w3m-platform-selection></w3m-info-footer>`;
        }
      };
      (tn.styles = [D.globalCss, us]),
        jr([et()], tn.prototype, "isError", 2),
        (tn = jr([R("w3m-web-connecting-view")], tn));
    },
  },
]);
