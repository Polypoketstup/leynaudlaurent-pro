/* ==========================================================================
   Animation de fond du hero — version abstraite
   Un champ de pictogrammes au trait, inspirés des compétences :
   panneau PV, courbe de production, capteur, transformateur HTA, agents IA,
   performance, diagnostic, support technique, communication, innovation,
   détection de défauts.
   Ils dérivent lentement, sont reliés en constellation, et s'allument en
   cascade : une impulsion passe d'une compétence à ses voisines.

   Portfolio Laurent Leynaud — module autonome, sans texte.
   - Se dessine dans <div id="hero-anim"> (section #accueil).
   - Évite le bloc de texte central (position mesurée en direct).
   - Léger effet de profondeur qui suit la souris (ordinateur uniquement).
   - Respecte « réduire les animations » (image fixe) et se met en pause
     quand le hero n'est pas visible ou que l'onglet est en arrière-plan.
   ========================================================================== */
(function () {
    'use strict';

    var NS = 'http://www.w3.org/2000/svg';
    var COL = {
        line:    '#94a3b8',
        amber:   '#f59e0b',
        amberHi: '#fbbf24'
    };

    // ------------------------------------------------------------------
    // Outils
    // ------------------------------------------------------------------
    function clamp(x, a, b) { return x < a ? a : (x > b ? b : x); }
    function easeOut(x) { return 1 - Math.pow(1 - x, 3); }
    function f1(v) { return v.toFixed(1); }
    function el(name, attrs, parent) {
        var e = document.createElementNS(NS, name);
        if (attrs) for (var k in attrs) e.setAttribute(k, attrs[k]);
        if (parent) parent.appendChild(e);
        return e;
    }
    // Générateur pseudo-aléatoire reproductible (mise en page stable)
    function rng(seed) {
        return function () {
            seed |= 0; seed = seed + 0x6D2B79F5 | 0;
            var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
            t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        };
    }

    // Formes élémentaires (coordonnées en pixels, centrées sur 0)
    function P(x, y) { return f1(x) + ',' + f1(y); }
    function circle(cx, cy, r) {
        return 'M' + P(cx - r, cy) + 'a' + f1(r) + ',' + f1(r) + ' 0 1,0 ' + f1(2 * r) + ',0' +
               'a' + f1(r) + ',' + f1(r) + ' 0 1,0 ' + f1(-2 * r) + ',0';
    }
    function arc(cx, cy, r, a0, a1) {
        var x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0);
        var x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
        return 'M' + P(x0, y0) + 'A' + f1(r) + ',' + f1(r) + ' 0 ' + (Math.abs(a1 - a0) > Math.PI ? 1 : 0) + ',1 ' + P(x1, y1);
    }
    function poly(pts, close) {
        return pts.map(function (p, i) { return (i ? 'L' : 'M') + P(p[0], p[1]); }).join('') + (close ? 'Z' : '');
    }
    var D = Math.PI / 180;

    // ------------------------------------------------------------------
    // Pictogrammes — chacun renvoie une liste de { d, dot }
    // ------------------------------------------------------------------
    var GLYPHS = {
        // Panneau PV : module incliné, 2 × 3 cellules
        pv: function (s) {
            var t = [[-0.72 * s, -0.58 * s], [1.0 * s, -0.58 * s]], b = [[-1.0 * s, 0.58 * s], [0.72 * s, 0.58 * s]];
            var out = [{ d: poly([t[0], t[1], b[1], b[0]], true) }];
            out.push({ d: poly([[-0.86 * s, 0], [0.86 * s, 0]]) });
            [1 / 3, 2 / 3].forEach(function (u) {
                out.push({ d: poly([[t[0][0] + u * 1.72 * s, -0.58 * s], [b[0][0] + u * 1.72 * s, 0.58 * s]]) });
            });
            return out;
        },
        // Courbe de production journalière
        curve: function (s) {
            var pts = [];
            for (var i = 0; i <= 24; i++) {
                var u = i / 24;
                pts.push([-s + 2 * s * u, 0.62 * s - 1.25 * s * Math.pow(Math.sin(Math.PI * u), 1.6)]);
            }
            return [{ d: poly([[-s, 0.62 * s], [s, 0.62 * s]]) }, { d: poly(pts) }];
        },
        // Capteur sans fil : point d'émission + ondes
        sensor: function (s) {
            return [
                { d: circle(0, -0.1 * s, 0.11 * s), dot: true },
                { d: poly([[0, 0.02 * s], [0, 0.85 * s]]) },
                { d: arc(0, -0.1 * s, 0.42 * s, -45 * D, 45 * D) },
                { d: arc(0, -0.1 * s, 0.42 * s, 135 * D, 225 * D) },
                { d: arc(0, -0.1 * s, 0.82 * s, -40 * D, 40 * D) },
                { d: arc(0, -0.1 * s, 0.82 * s, 140 * D, 220 * D) }
            ];
        },
        // Transformateur HTA : symbole normalisé, deux cercles sécants
        transfo: function (s) {
            return [
                { d: circle(-0.3 * s, 0, 0.52 * s) },
                { d: circle(0.3 * s, 0, 0.52 * s) },
                { d: poly([[-1.0 * s, 0], [-0.82 * s, 0]]) },
                { d: poly([[0.82 * s, 0], [1.0 * s, 0]]) }
            ];
        },
        // Agents IA : hexagone et réseau de nœuds
        agents: function (s) {
            var hex = [], nodes = [], out = [];
            for (var i = 0; i < 6; i++) hex.push([s * Math.cos((60 * i - 90) * D), s * Math.sin((60 * i - 90) * D)]);
            out.push({ d: poly(hex, true) });
            for (i = 0; i < 3; i++) nodes.push([0.48 * s * Math.cos((120 * i - 90) * D), 0.48 * s * Math.sin((120 * i - 90) * D)]);
            nodes.forEach(function (n) { out.push({ d: poly([[0, 0], n]) }); });
            out.push({ d: poly([nodes[0], nodes[1], nodes[2]], true) });
            nodes.concat([[0, 0]]).forEach(function (n) { out.push({ d: circle(n[0], n[1], 0.09 * s), dot: true }); });
            return out;
        },
        // Performance : jauge et aiguille
        perf: function (s) {
            var out = [{ d: arc(0, 0.35 * s, 0.95 * s, 180 * D, 360 * D) }];
            for (var i = 0; i <= 4; i++) {
                var a = (180 + 45 * i) * D;
                out.push({ d: poly([[0.95 * s * Math.cos(a), 0.35 * s + 0.95 * s * Math.sin(a)], [0.75 * s * Math.cos(a), 0.35 * s + 0.75 * s * Math.sin(a)]]) });
            }
            out.push({ d: poly([[0, 0.35 * s], [0.62 * s * Math.cos(305 * D), 0.35 * s + 0.62 * s * Math.sin(305 * D)]]) });
            out.push({ d: circle(0, 0.35 * s, 0.09 * s), dot: true });
            return out;
        },
        // Diagnostic : mire de visée
        diag: function (s) {
            return [
                { d: circle(0, 0, 0.62 * s) },
                { d: circle(0, 0, 0.22 * s) },
                { d: poly([[0, -s], [0, -0.42 * s]]) },
                { d: poly([[0, 0.42 * s], [0, s]]) },
                { d: poly([[-s, 0], [-0.42 * s, 0]]) },
                { d: poly([[0.42 * s, 0], [s, 0]]) }
            ];
        },
        // Support technique : deux bulles de dialogue
        support: function (s) {
            var b1 = poly([[-s, -0.75 * s], [0.35 * s, -0.75 * s], [0.35 * s, 0.05 * s], [-0.45 * s, 0.05 * s], [-0.7 * s, 0.32 * s], [-0.7 * s, 0.05 * s], [-s, 0.05 * s]], true);
            var b2 = poly([[-0.15 * s, -0.2 * s], [s, -0.2 * s], [s, 0.55 * s], [0.75 * s, 0.55 * s], [0.75 * s, 0.82 * s], [0.48 * s, 0.55 * s], [-0.15 * s, 0.55 * s]], true);
            return [{ d: b1 }, { d: b2 },
                { d: poly([[-0.72 * s, -0.45 * s], [0.08 * s, -0.45 * s]]) },
                { d: poly([[0.12 * s, 0.17 * s], [0.75 * s, 0.17 * s]]) }];
        },
        // Système de communication : bus et équipements (Modbus, HTA)
        comms: function (s) {
            var out = [{ d: poly([[-s, -0.35 * s], [s, -0.35 * s]]) }];
            [-0.62, 0, 0.62].forEach(function (u) {
                var x = u * s, h = 0.17 * s;
                out.push({ d: poly([[x, -0.35 * s], [x, 0.18 * s]]) });
                out.push({ d: poly([[x - h, 0.18 * s], [x + h, 0.18 * s], [x + h, 0.52 * s], [x - h, 0.52 * s]], true) });
            });
            out.push({ d: circle(-s, -0.35 * s, 0.07 * s), dot: true });
            out.push({ d: circle(s, -0.35 * s, 0.07 * s), dot: true });
            return out;
        },
        // Innovation : étincelle
        spark: function (s) {
            function star(cx, cy, r, k) {
                var p = [];
                for (var i = 0; i < 8; i++) {
                    var rr = i % 2 ? r * k : r, a = (45 * i - 90) * D;
                    p.push([cx + rr * Math.cos(a), cy + rr * Math.sin(a)]);
                }
                return poly(p, true);
            }
            return [{ d: star(-0.12 * s, 0.1 * s, 0.88 * s, 0.2) }, { d: star(0.68 * s, -0.62 * s, 0.3 * s, 0.25) }];
        },
        // Détection de défauts : triangle d'alerte et éclair
        fault: function (s) {
            return [
                { d: poly([[0, -0.88 * s], [s, 0.78 * s], [-s, 0.78 * s]], true) },
                { d: poly([[0.08 * s, -0.36 * s], [-0.16 * s, 0.14 * s], [0.14 * s, 0.1 * s], [-0.08 * s, 0.56 * s]]) }
            ];
        }
    };
    var TYPES = Object.keys(GLYPHS);

    // Bloc de texte du hero (rectangle à éviter), en pixels depuis le coin du hero
    function contentRect(host) {
        var sec = host.parentElement, W = host.clientWidth;
        var box = sec && (sec.querySelector('.container > div') || sec.querySelector('.container'));
        if (!box) return { x0: W * 0.25, x1: W * 0.75, y0: host.clientHeight * 0.15, y1: host.clientHeight * 0.85 };
        var y = 0, n = box;
        while (n && n !== sec) { y += n.offsetTop; n = n.offsetParent; }
        var cw = Math.min(820, W - 32);
        return { x0: (W - cw) / 2, x1: (W + cw) / 2, y0: y, y1: y + box.offsetHeight };
    }

    // ------------------------------------------------------------------
    // Scène
    // ------------------------------------------------------------------
    function HeroAbstract(host) {
        this.host = host;
        this.clock = 0;                 // secondes écoulées (animation active)
        this.running = false;
        this.visible = true;
        this.reduced = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
        this.mouse = { x: 0, y: 0, tx: 0, ty: 0 };
        this.build();
    }

    HeroAbstract.prototype.key = function () {
        var r = contentRect(this.host);
        return this.host.clientWidth + 'x' + this.host.clientHeight + '/' + Math.round(r.y0) + '/' + Math.round(r.y1);
    };

    HeroAbstract.prototype.build = function () {
        var W = this.host.clientWidth, H = this.host.clientHeight;
        if (!W || !H) return;
        this.size = this.key();
        this.W = W; this.H = H;
        var rect = contentRect(this.host);
        var narrow = (W - (rect.x1 - rect.x0)) / 2 < 150;   // pas de place sur les côtés
        var rand = rng(20080 + Math.round(W / 50));
        var i, j;

        var svg = el('svg', {
            width: W, height: H, viewBox: '0 0 ' + W + ' ' + H,
            'aria-hidden': 'true', focusable: 'false',
            style: 'position:absolute;inset:0;display:block;opacity:0;transition:opacity 1.4s ease;'
        });
        this.svg = svg;
        var gLinks = el('g', null, svg), gPulses = el('g', null, svg), gGlyphs = el('g', null, svg);

        // --- Placement : grille irrégulière qui contourne le texte ---------
        var c = clamp(W / 8.5, 125, 180);
        var nav = document.getElementById('navbar');
        var topLimit = Math.max(84, (nav ? nav.offsetHeight : 64) + 28);   // sous la barre de navigation
        var cols = Math.ceil(W / c), rows = Math.ceil(H / c);
        var cand = [];
        for (var r = 0; r < rows; r++) {
            for (var q = 0; q < cols; q++) {
                var x = (q + 0.5) * (W / cols) + (rand() - 0.5) * c * 0.55;
                var y = (r + 0.5) * (H / rows) + (rand() - 0.5) * c * 0.55;
                if (y < topLimit || y > H - 30) continue;                // barre de navigation, bord bas
                var inside = x > rect.x0 - 36 && x < rect.x1 + 36 && y > rect.y0 - 24 && y < rect.y1 + 24;
                if (inside && !narrow) continue;                          // grand écran : on évite le texte
                if (inside && rand() < 0.7) continue;                     // petit écran : quelques-uns, très discrets
                if (Math.abs(x - W / 2) < 40 && y > H - 80) continue;     // flèche de défilement
                if (!inside && rand() < 0.18) continue;                   // respiration
                cand.push({ x: x, y: y, inside: inside });
            }
        }
        // Types répartis pour que chaque compétence soit présente
        var order = [];
        while (order.length < cand.length) {
            var batch = TYPES.slice();
            for (i = batch.length - 1; i > 0; i--) { j = Math.floor(rand() * (i + 1)); var tmp = batch[i]; batch[i] = batch[j]; batch[j] = tmp; }
            order = order.concat(batch);
        }

        var self = this;
        this.glyphs = cand.map(function (p, k) {
            var depth = 0.45 + 0.55 * rand();
            var s = c * (0.12 + 0.10 * depth);
            var g = {
                type: order[k], bx: p.x, by: p.y, depth: depth, dim: p.inside,
                ax: (5 + 9 * rand()) * depth, ay: (5 + 9 * rand()) * depth,
                wx: 2 * Math.PI / (16 + 12 * rand()), wy: 2 * Math.PI / (18 + 12 * rand()), wr: 2 * Math.PI / (20 + 14 * rand()),
                px: rand() * 6.28, py: rand() * 6.28, pr: rand() * 6.28, rot: 3 + 4 * rand(),
                act: -99, links: []
            };
            g.node = el('g', null, gGlyphs);
            var baseOp = (0.16 + 0.30 * depth) * (g.dim ? 0.22 : 1);
            var base = el('g', { fill: 'none', stroke: COL.line, 'stroke-width': 1, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', opacity: baseOp.toFixed(3) }, g.node);
            g.hot = el('g', { fill: 'none', stroke: COL.amberHi, 'stroke-width': 1.25, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', opacity: 0 }, g.node);
            g.hotOp = (0.6 + 0.4 * depth) * (g.dim ? 0.45 : 1);
            g.paths = [];
            GLYPHS[g.type](s).forEach(function (part) {
                el('path', { d: part.d, fill: part.dot ? COL.line : 'none' }, base);
                var hp = el('path', { d: part.d, fill: part.dot ? COL.amber : 'none' }, g.hot);
                var len = hp.getTotalLength ? hp.getTotalLength() : 200;
                hp.setAttribute('stroke-dasharray', f1(len) + ' ' + f1(len));
                hp.setAttribute('stroke-dashoffset', f1(len));
                g.paths.push({ e: hp, len: len, dot: !!part.dot });
            });
            return g;
        });

        // --- Constellation : chaque pictogramme relié à ses 2 plus proches --
        this.links = [];
        var maxD = c * 1.85, seen = {};
        this.glyphs.forEach(function (a, ia) {
            var near = self.glyphs.map(function (b, ib) { return { ib: ib, d: Math.hypot(a.bx - b.bx, a.by - b.by) }; })
                .filter(function (o) { return o.ib !== ia && o.d < maxD; })
                .sort(function (u, v) { return u.d - v.d; }).slice(0, 2);
            near.forEach(function (o) {
                var k = Math.min(ia, o.ib) + '-' + Math.max(ia, o.ib);
                if (seen[k]) return;
                seen[k] = 1;
                var b = self.glyphs[o.ib];
                var L = { a: a, b: b, d0: o.d / maxD, e: el('line', { stroke: COL.line, 'stroke-width': 0.8 }, gLinks) };
                self.links.push(L);
                a.links.push(L); b.links.push(L);
            });
        });

        this.gPulses = gPulses;
        this.pulses = [];
        this.nextSpawn = 0.6;

        this.host.innerHTML = '';
        this.host.appendChild(svg);

        if (this.reduced) {
            // Image fixe : quelques compétences allumées, reliées
            var picks = [0, Math.floor(this.glyphs.length / 3), Math.floor(2 * this.glyphs.length / 3)];
            picks.forEach(function (ix) { if (self.glyphs[ix]) self.glyphs[ix].act = -1.0; });
            this.render(0);
        } else {
            this.render(this.clock);
        }
        requestAnimationFrame(function () { svg.style.opacity = '1'; });
    };

    // Allume un pictogramme, puis propage l'impulsion à ses voisins
    HeroAbstract.prototype.activate = function (g, now, depth) {
        if (now - g.act < 4) return;
        g.act = now;
        if (depth >= 3) return;
        var self = this;
        var links = g.links.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 2);
        links.forEach(function (L, k) {
            if (Math.random() > 0.72) return;
            var to = L.a === g ? L.b : L.a;
            if (now - to.act < 4) return;
            self.pulses.push({
                L: L, from: g, to: to, t0: now + 0.35 + k * 0.15, dur: 0.75, depth: depth + 1,
                e: el('circle', { r: 2.2, fill: COL.amberHi, opacity: 0 }, self.gPulses)
            });
        });
    };

    // Enveloppe d'allumage : tracé progressif, plein éclat, puis extinction
    function envelope(since) {
        if (since < 0) return { draw: 0, a: 0, pop: 1 };
        var draw = easeOut(clamp(since / 0.75, 0, 1));
        var a = since < 0.2 ? since / 0.2 : (since < 1.3 ? 1 : clamp(1 - (since - 1.3) / 1.6, 0, 1));
        var pop = 1 + 0.07 * Math.sin(Math.PI * clamp(since / 0.5, 0, 1));
        return { draw: draw, a: a, pop: pop };
    }

    HeroAbstract.prototype.render = function (now) {
        if (!this.glyphs) return;
        var i, g, self = this;

        // Parallaxe souris (lissée)
        var m = this.mouse;
        m.x += (m.tx - m.x) * 0.05; m.y += (m.ty - m.y) * 0.05;

        // Allumages spontanés
        if (!this.reduced && now >= this.nextSpawn && this.glyphs.length) {
            var tries = 6;
            while (tries--) {
                g = this.glyphs[Math.floor(Math.random() * this.glyphs.length)];
                if (now - g.act > 6 && !g.dim) { this.activate(g, now, 0); break; }
            }
            this.nextSpawn = now + 1.1 + Math.random() * 1.0;
        }

        // Pictogrammes : dérive, rotation, allumage
        for (i = 0; i < this.glyphs.length; i++) {
            g = this.glyphs[i];
            var t = this.reduced ? 0 : now;
            g.x = g.bx + g.ax * Math.sin(g.wx * t + g.px) - m.x * 22 * g.depth;
            g.y = g.by + g.ay * Math.sin(g.wy * t + g.py) - m.y * 14 * g.depth;
            var rot = g.rot * Math.sin(g.wr * t + g.pr);
            var env = envelope(this.reduced ? (g.act > -50 ? 1.0 : -1) : now - g.act);
            g.level = env.a;
            g.node.setAttribute('transform', 'translate(' + f1(g.x) + ',' + f1(g.y) + ') rotate(' + rot.toFixed(2) + ') scale(' + env.pop.toFixed(3) + ')');
            g.hot.setAttribute('opacity', (env.a * g.hotOp).toFixed(3));
            if (env.a > 0) {
                for (var k = 0; k < g.paths.length; k++) {
                    var p = g.paths[k];
                    p.e.setAttribute('stroke-dashoffset', f1(p.len * (1 - env.draw)));
                }
            }
        }

        // Liaisons
        for (i = 0; i < this.links.length; i++) {
            var L = this.links[i];
            var hot = Math.max(L.a.level || 0, L.b.level || 0);
            var base = 0.05 + 0.09 * (1 - L.d0);
            if (L.a.dim || L.b.dim) base *= 0.4;
            L.e.setAttribute('x1', f1(L.a.x)); L.e.setAttribute('y1', f1(L.a.y));
            L.e.setAttribute('x2', f1(L.b.x)); L.e.setAttribute('y2', f1(L.b.y));
            L.e.setAttribute('stroke', hot > 0.05 ? COL.amber : COL.line);
            L.e.setAttribute('stroke-opacity', (base + 0.28 * hot).toFixed(3));
        }

        // Impulsions qui voyagent d'une compétence à l'autre
        this.pulses = this.pulses.filter(function (P) {
            var u = (now - P.t0) / P.dur;
            if (u < 0) return true;
            if (u >= 1) {
                self.activate(P.to, now, P.depth);
                P.e.parentNode && P.e.parentNode.removeChild(P.e);
                return false;
            }
            var e = u * u * (3 - 2 * u);
            P.e.setAttribute('cx', f1(P.from.x + (P.to.x - P.from.x) * e));
            P.e.setAttribute('cy', f1(P.from.y + (P.to.y - P.from.y) * e));
            P.e.setAttribute('opacity', (Math.sin(Math.PI * u) * 0.95).toFixed(3));
            return true;
        });
    };

    // ------------------------------------------------------------------
    // Boucle
    // ------------------------------------------------------------------
    HeroAbstract.prototype.start = function () {
        if (this.reduced || this.running) return;
        this.running = true;
        var self = this, last = null;
        function frame(ts) {
            if (!self.running) return;
            if (last !== null) {
                self.clock += Math.min(ts - last, 100) / 1000;
                self.render(self.clock);
            }
            last = ts;
            self.raf = requestAnimationFrame(frame);
        }
        this.raf = requestAnimationFrame(frame);
    };
    HeroAbstract.prototype.stop = function () {
        this.running = false;
        if (this.raf) cancelAnimationFrame(this.raf);
    };
    HeroAbstract.prototype.sync = function () {
        if (this.visible && !document.hidden) this.start(); else this.stop();
    };

    // ------------------------------------------------------------------
    // Initialisation
    // ------------------------------------------------------------------
    function init() {
        var host = document.getElementById('hero-anim');
        if (!host || !document.createElementNS) return;
        var anim = new HeroAbstract(host);
        window.heroAnimation = anim;   // accessible depuis la console pour le débogage

        if ('IntersectionObserver' in window) {
            new IntersectionObserver(function (entries) {
                anim.visible = entries[0].isIntersecting;
                anim.sync();
            }, { threshold: 0.05 }).observe(host);
        }
        document.addEventListener('visibilitychange', function () { anim.sync(); });

        var timer;
        function rebuild() {
            clearTimeout(timer);
            timer = setTimeout(function () { if (anim.key() !== anim.size) anim.build(); }, 180);
        }
        if ('ResizeObserver' in window) {
            var ro = new ResizeObserver(rebuild);
            ro.observe(host);
            var box = host.parentElement && host.parentElement.querySelector('.container > div');
            if (box) ro.observe(box);
        } else {
            window.addEventListener('resize', rebuild);
        }
        window.addEventListener('load', rebuild);

        // Profondeur qui suit la souris (souris uniquement, pas au doigt)
        var section = host.parentElement;
        if (section && window.matchMedia && window.matchMedia('(pointer: fine)').matches) {
            section.addEventListener('mousemove', function (e) {
                var r = section.getBoundingClientRect();
                anim.mouse.tx = (e.clientX - r.left) / r.width - 0.5;
                anim.mouse.ty = (e.clientY - r.top) / r.height - 0.5;
            });
            section.addEventListener('mouseleave', function () { anim.mouse.tx = 0; anim.mouse.ty = 0; });
        }

        anim.sync();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();
