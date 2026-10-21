/* WakeWalk — Bip, o mascote, sem React.
   Porte 1:1 de redesign/bip.jsx (que por sua vez espelha lib/src/design_system/components/mascot/):
   mesmo espaço 100×100 (chão em y = 92), mesmas juntas, mesmas cores, mesmos clipes.
   Uso: <div class="bip" data-anim="ringing" data-t="180" role="img" aria-label="…"></div>
   - data-anim: idle | ringing | walking | squat | pushUp | celebrate | sleeping | dance
   - data-t: instante (ms) mostrado quando o movimento está reduzido (padrão: STILL do clipe)
   - data-glow="0" desliga o halo
   API: WWBip.play(el, anim) troca o clipe de um mascote já montado. */
(function () {
  "use strict";
  // ---------------------------------------------------------------- paleta (MascotPalette)
  const P = {
    bodyLight: "#A3AEFF", body: "#7C8CFF", bodyDeep: "#4F5CE8", limb: "#4652DD", foot: "#3540C4",
    face: "#FBF8F1", faceShade: "#E9E3D6", ink: "#1B1E2E", blush: "#FF8FA8", bell: "#FFCF5A",
    bellDeep: "#E9A21B", limbFar: "#2F3AB0", footFar: "#262F96", tick: "#C9CDEB", zzz: "#B9C2FF", sweat: "#8FD3FF", sparkle: "#FFE08A",
  };

  // ---------------------------------------------------------------- rig (MascotPose)
  const BASE = {
    body: [50, 50], rot: 0, squash: 1,
    shoulderL: [32, 54], shoulderR: [68, 54], elbowL: [25, 62], elbowR: [75, 62], handL: [26, 71], handR: [74, 71],
    hipL: [42, 68], hipR: [58, 68], kneeL: [41, 79], kneeR: [59, 79], footL: [40, 89], footR: [60, 89],
    eyes: "round", mouth: "smile", eyeOpen: 1, lookX: 0, bellJitter: 0, waves: 0, zzz: 0, sparkle: 0, sweat: 0, depth: 0,
  };
  const TORSO = ["body", "shoulderL", "shoulderR", "elbowL", "elbowR", "handL", "handR", "hipL", "hipR"];
  const LEGS = ["kneeL", "kneeR", "footL", "footR"];
  const POINTS = TORSO.concat(LEGS);
  const NUMS = ["rot", "squash", "eyeOpen", "lookX", "bellJitter", "waves", "zzz", "sparkle", "sweat", "depth"];
  const pose = (base, o) => Object.assign({}, base, o);
  const shift = (p, dx, dy, keys) => { const q = Object.assign({}, p); keys.forEach((k) => { q[k] = [p[k][0] + dx, p[k][1] + dy]; }); return q; };
  const shiftTorso = (p, dx, dy) => shift(p, dx, dy, TORSO);
  const shiftAll = (p, dx, dy) => shift(p, dx, dy, POINTS);
  function lerpPose(a, b, t) {
    const q = {};
    POINTS.forEach((k) => { q[k] = [a[k][0] + (b[k][0] - a[k][0]) * t, a[k][1] + (b[k][1] - a[k][1]) * t]; });
    NUMS.forEach((k) => { q[k] = a[k] + (b[k] - a[k]) * t; });
    q.eyes = t >= .5 ? b.eyes : a.eyes;
    q.mouth = t >= .5 ? b.mouth : a.mouth;
    return q;
  }

  // ---------------------------------------------------------------- curvas (Curves do Flutter)
  function bezier(x1, y1, x2, y2) {
    return (x) => {
      if (x <= 0 || x >= 1) return x;
      let lo = 0, hi = 1, t = x;
      for (let i = 0; i < 24; i++) {
        t = (lo + hi) / 2;
        const cx = 3 * (1 - t) * (1 - t) * t * x1 + 3 * (1 - t) * t * t * x2 + t * t * t;
        if (cx < x) lo = t; else hi = t;
      }
      return 3 * (1 - t) * (1 - t) * t * y1 + 3 * (1 - t) * t * t * y2 + t * t * t;
    };
  }
  const C = {
    easeInOut: bezier(.42, 0, .58, 1), easeOut: bezier(0, 0, .58, 1), easeIn: bezier(.42, 0, 1, 1),
    easeOutBack: bezier(.175, .885, .32, 1.275), linear: (x) => x,
  };
  const K = (p, ms, curve) => ({ p, ms, curve: C[curve || "easeInOut"] });

  // ---------------------------------------------------------------- clipes (mascot_clips.dart)
  const b = BASE;
  const waveUp = pose(b, { elbowR: [80, 46], handR: [84, 34], eyes: "happy", mouth: "grin" });
  const waveOut = pose(waveUp, { elbowR: [82, 48], handR: [91, 39] });
  const shake = (dir, hop) => pose(shiftAll(b, dir * 1.6, -hop), {
    rot: dir * .13, bellJitter: dir, waves: 1, eyes: "wow", mouth: "open",
    elbowL: [22 + dir * 1.6, 48 - hop], handL: [17 + dir * 1.6, 37 - hop + dir * 2],
    elbowR: [78 + dir * 1.6, 48 - hop], handR: [83 + dir * 1.6, 37 - hop - dir * 2],
  });
  const stepA = pose(shiftTorso(b, 0, -1.5), { rot: -.05, kneeL: [37, 73], footL: [35, 81], kneeR: [59, 78], footR: [60, 89], elbowL: [23, 56], handL: [19, 61], elbowR: [77, 64], handR: [80, 75], lookX: -.3 });
  const passA = shiftTorso(b, 0, .5);
  const stepB = pose(shiftTorso(b, 0, -1.5), { rot: .05, kneeR: [63, 73], footR: [65, 81], kneeL: [41, 78], footL: [40, 89], elbowR: [77, 56], handR: [81, 61], elbowL: [23, 64], handL: [20, 75], lookX: .3 });
  const squatUp = pose(shiftTorso(b, 0, -3), { elbowL: [21, 52], handL: [11, 51], elbowR: [79, 52], handR: [89, 51], kneeL: [41, 77], kneeR: [59, 77] });
  const squatDown = pose(shiftTorso(b, 0, 11), { squash: .96, elbowL: [21, 64], handL: [10, 62], elbowR: [79, 64], handR: [90, 62], kneeL: [29, 81], kneeR: [71, 81], footL: [37, 89], footR: [63, 89], eyes: "effort", mouth: "flat", sweat: 1 });
  const pushTop = pose(b, { body: [29, 42], rot: -.1, shoulderL: [30, 60], elbowL: [29, 75], handL: [31, 90], shoulderR: [35, 59], elbowR: [34, 74], handR: [36, 90], hipL: [44, 59], kneeL: [67, 74], footL: [90, 89], hipR: [47, 56], kneeR: [70, 68], footR: [94, 86], lookX: -.7, depth: 1 });
  const pushBottom = pose(pushTop, { body: [31, 64], rot: 0, shoulderL: [31, 80], elbowL: [17, 83], shoulderR: [36, 79], elbowR: [22, 82], hipL: [46, 79], kneeL: [68, 84], hipR: [49, 77], kneeR: [71, 79], eyes: "effort", mouth: "flat", sweat: 1 });
  const armsUp = pose(b, { elbowL: [23, 40], handL: [18, 27], elbowR: [77, 40], handR: [82, 27], eyes: "happy", mouth: "grin", sparkle: 1 });
  const jump = pose(shiftAll(armsUp, 0, -9), { kneeL: [37, 69], footL: [36, 78], kneeR: [63, 69], footR: [64, 78] });
  const land = pose(shiftTorso(armsUp, 0, 3), { squash: .92 });
  const sleepIn = pose(shiftTorso(b, 0, 3), { rot: .09, squash: .97, eyes: "sleep", mouth: "o", elbowL: [27, 66], handL: [32, 75], elbowR: [73, 66], handR: [68, 75], zzz: 1 });
  const sleepOut = pose(shiftTorso(sleepIn, 0, -1.5), { squash: 1 });
  const danceL = pose(shiftTorso(b, -3.5, 1.5), { rot: -.13, squash: .98, elbowL: [24, 64], handL: [15, 60], elbowR: [74, 42], handR: [83, 29],
    kneeL: [36, 80], kneeR: [60, 77], eyes: "happy", mouth: "grin", lookX: -.4 });
  const danceR = pose(shiftTorso(b, 3.5, 1.5), { rot: .13, squash: .98, elbowR: [76, 64], handR: [85, 60], elbowL: [26, 42], handL: [17, 29],
    kneeR: [64, 80], kneeL: [40, 77], eyes: "happy", mouth: "grin", lookX: .4 });
  const danceHop = pose(shiftAll(b, 0, -4), { elbowL: [20, 50], handL: [11, 44], elbowR: [80, 50], handR: [89, 44], kneeL: [39, 77], kneeR: [61, 77], eyes: "happy", mouth: "open", sparkle: .7 });

  const CLIPS = {
    idle: [K(b, 500), K(shiftTorso(pose(b, { squash: .985 }), 0, 1), 700), K(b, 700), K(pose(b, { eyeOpen: 0 }), 90), K(b, 110),
      K(pose(b, { lookX: -1 }), 320), K(pose(b, { lookX: -1 }), 420), K(pose(b, { lookX: 1 }), 380), K(pose(b, { lookX: 1 }), 420), K(b, 300),
      K(waveUp, 280, "easeOut"), K(waveOut, 200), K(waveUp, 200), K(waveOut, 200), K(waveUp, 200), K(b, 380)],
    ringing: [[-1, 0], [1, 3], [-1, 5], [1, 3], [-1, 0], [1, 0], [-1, 2], [1, 0]].map(([d, h]) => K(shake(d, h), 90, "linear")),
    walking: [K(stepA, 230), K(passA, 170), K(stepB, 230), K(passA, 170)],
    squat: [K(squatUp, 320), K(squatDown, 620), K(squatDown, 220), K(squatUp, 560, "easeOutBack"), K(pose(squatUp, { eyes: "happy" }), 300)],
    pushUp: [K(pushTop, 320), K(pushBottom, 640), K(pushBottom, 200), K(pushTop, 560, "easeOutBack"), K(pose(pushTop, { eyes: "happy" }), 300)],
    celebrate: [K(land, 160), K(jump, 300, "easeOut"), K(jump, 80), K(land, 240, "easeIn"), K(armsUp, 220), K(pose(armsUp, { eyeOpen: .9 }), 360)],
    sleeping: [K(sleepOut, 1500), K(sleepIn, 1700)],
    dance: [K(danceL, 300), K(danceL, 80), K(danceHop, 120, "easeOut"), K(danceR, 300, "easeOutBack"), K(danceR, 80), K(danceHop, 120, "easeOut"), K(danceL, 0.001)],
  };
  // instante "de capa" de cada clipe, mostrado quando o movimento está reduzido
  const STILL = { idle: 0, ringing: 180, walking: 0, squat: 900, pushUp: 900, celebrate: 460, sleeping: 1500, dance: 300 };
  const duration = (keys) => keys.reduce((s, k) => s + k.ms, 0);
  function poseAt(keys, ms) {
    const total = duration(keys);
    let t = ((ms % total) + total) % total;
    let prev = keys[keys.length - 1].p;
    for (const k of keys) {
      if (t < k.ms) return lerpPose(prev, k.p, k.curve(t / k.ms));
      t -= k.ms; prev = k.p;
    }
    return keys[keys.length - 1].p;
  }

  // ---------------------------------------------------------------- desenho (mascot_painter.dart)
  const f = (n) => Math.round(n * 100) / 100;
  const deg = (r) => r * 180 / Math.PI;
  const limb = (a, c, z) => `M${f(a[0])} ${f(a[1])} Q${f(c[0])} ${f(c[1])} ${f(z[0])} ${f(z[1])}`;
  const arcPath = (cx, cy, r, a0, sweep) => {
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), a1 = a0 + sweep;
    const x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    return `M${f(x0)} ${f(y0)} A${r} ${r} 0 ${sweep > Math.PI ? 1 : 0} 1 ${f(x1)} ${f(y1)}`;
  };
  const ST = (color, w) => `fill="none" stroke="${color}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`;
  const mix = (a, c, t) => {
    if (!t) return a;
    const h = (s, i) => parseInt(s.slice(1 + i * 2, 3 + i * 2), 16);
    return "#" + [0, 1, 2].map((i) => Math.round(h(a, i) + (h(c, i) - h(a, i)) * t).toString(16).padStart(2, "0")).join("");
  };

  function face(p, id) {
    const look = p.lookX * 2.2;
    let s = "";
    [-10.5, 10.5].forEach((x) => { s += `<ellipse cx="${x}" cy="4.6" rx="3.2" ry="1.8" fill="${P.blush}" opacity=".5"/>`; });
    [-1, 1].forEach((side) => {
      const cx = side * 6.8 + look, cy = -2.4;
      if (p.eyes === "round" || p.eyes === "wow") {
        const big = p.eyes === "wow", rx = big ? 3.5 : 2.8, ry = (big ? 4.1 : 3.6) * Math.max(0, Math.min(1, p.eyeOpen));
        if (ry < .9) s += `<line x1="${f(cx - rx)}" y1="${cy}" x2="${f(cx + rx)}" y2="${cy}" ${ST(P.ink, 1.7)}/>`;
        else s += `<ellipse cx="${f(cx)}" cy="${cy}" rx="${rx}" ry="${f(ry)}" fill="${P.ink}"/><circle cx="${f(cx + rx * .32)}" cy="${f(cy - ry * .38)}" r="${big ? 1.3 : 1.05}" fill="#fff"/>`;
      } else if (p.eyes === "happy") {
        s += `<path d="M${f(cx - 3)} ${f(cy + 1.2)} Q${f(cx)} ${f(cy - 3.4)} ${f(cx + 3)} ${f(cy + 1.2)}" ${ST(P.ink, 1.7)}/>`;
      } else if (p.eyes === "effort") {
        s += `<path d="M${f(cx - side * 2.6)} ${f(cy - 2.4)} L${f(cx + side * 2)} ${cy} L${f(cx - side * 2.6)} ${f(cy + 2.4)}" ${ST(P.ink, 1.7)}/>`;
      } else {
        s += `<path d="M${f(cx - 3)} ${cy} Q${f(cx)} ${f(cy + 2.8)} ${f(cx + 3)} ${cy}" ${ST(P.ink, 1.7)}/>`;
      }
    });
    const mx = f(look * .5), my = 7.4;
    if (p.mouth === "smile") s += `<path d="M${f(mx - 3.4)} ${f(my - .6)} Q${mx} ${f(my + 2.8)} ${f(mx + 3.4)} ${f(my - .6)}" ${ST(P.ink, 1.7)}/>`;
    else if (p.mouth === "grin") {
      const d = `M${f(mx - 4.2)} ${f(my - 1.2)} Q${mx} ${f(my + 6.4)} ${f(mx + 4.2)} ${f(my - 1.2)} Z`;
      s += `<clipPath id="${id}grin"><path d="${d}"/></clipPath><path d="${d}" fill="${P.ink}"/><circle cx="${mx}" cy="${f(my + 4.2)}" r="2.6" fill="${P.blush}" clip-path="url(#${id}grin)"/>`;
    } else if (p.mouth === "open") s += `<ellipse cx="${mx}" cy="${f(my + .6)}" rx="2.7" ry="3" fill="${P.ink}"/><ellipse cx="${mx}" cy="${f(my + 2.1)}" rx="1.7" ry="1.1" fill="${P.blush}"/>`;
    else if (p.mouth === "o") s += `<circle cx="${mx}" cy="${f(my + .4)}" r="1.5" fill="${P.ink}"/>`;
    else s += `<line x1="${f(mx - 3)}" y1="${f(my + .6)}" x2="${f(mx + 3)}" y2="${f(my + .6)}" ${ST(P.ink, 1.7)}/>`;
    return s;
  }

  function fx(p, t) {
    let s = "";
    if (p.waves > .01) [-1, 1].forEach((side) => {
      const a = -Math.PI / 2 + side * .72, ox = p.body[0] + Math.cos(a) * 26, oy = p.body[1] + Math.sin(a) * 26;
      for (let i = 0; i < 2; i++) {
        const ph = ((t / 620) + i * .5) % 1;
        s += `<path d="${arcPath(ox, oy, f(6 + ph * 12), a - .55, 1.1)}" ${ST(P.bell, 2.2)} opacity="${f((1 - ph) * p.waves * .9)}"/>`;
      }
    });
    if (p.zzz > .01) for (let i = 0; i < 3; i++) {
      const ph = ((t / 2400) + i / 3) % 1, sz = 3.6 + ph * 3.6, x = p.body[0] + 17 + ph * 14, y = p.body[1] - 22 - ph * 20;
      s += `<path d="M${f(x)} ${f(y)} L${f(x + sz)} ${f(y)} L${f(x)} ${f(y + sz)} L${f(x + sz)} ${f(y + sz)}" ${ST(P.zzz, 1.7)} opacity="${f(Math.sin(ph * Math.PI) * p.zzz)}"/>`;
    }
    if (p.sparkle > .01) [[-34, -24], [34, -30], [-38, 8], [37, 4]].forEach(([dx, dy], i) => {
      const tw = .5 + .5 * Math.sin(t / 180 + i * 1.7), cx = p.body[0] + dx, cy = p.body[1] + dy, r = (2.2 + tw * 2.6) * p.sparkle;
      s += `<path fill="${i % 2 === 0 ? P.sparkle : "#fff"}" opacity="${f((.55 + tw * .45) * p.sparkle)}" d="M${f(cx)} ${f(cy - r)} Q${f(cx)} ${f(cy)} ${f(cx + r)} ${f(cy)} Q${f(cx)} ${f(cy)} ${f(cx)} ${f(cy + r)} Q${f(cx)} ${f(cy)} ${f(cx - r)} ${f(cy)} Q${f(cx)} ${f(cy)} ${f(cx)} ${f(cy - r)} Z"/>`;
    });
    if (p.sweat > .01) {
      const cx = p.body[0] + 19, cy = p.body[1] - 17;
      s += `<path fill="${P.sweat}" opacity="${f(.9 * p.sweat)}" d="M${f(cx)} ${f(cy - 4)} Q${f(cx + 3)} ${f(cy)} ${f(cx)} ${f(cy + 2.2)} Q${f(cx - 3)} ${f(cy)} ${f(cx)} ${f(cy - 4)} Z"/>`;
    }
    return s;
  }

  function defs(id) {
    return `<defs><radialGradient id="${id}body" cx="32.5%" cy="27.5%" r="105%"><stop offset="0" stop-color="${P.bodyLight}"/><stop offset=".5" stop-color="${P.body}"/><stop offset="1" stop-color="${P.bodyDeep}"/></radialGradient>` +
      `<linearGradient id="${id}face" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P.face}"/><stop offset="1" stop-color="${P.faceShade}"/></linearGradient>` +
      `<linearGradient id="${id}bell" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${P.bell}"/><stop offset="1" stop-color="${P.bellDeep}"/></linearGradient>` +
      `<radialGradient id="${id}glow"><stop offset=".45" stop-color="${P.body}" stop-opacity=".3"/><stop offset=".7" stop-color="${P.body}" stop-opacity=".12"/><stop offset="1" stop-color="${P.body}" stop-opacity="0"/></radialGradient></defs>`;
  }

  function frame(p, t, id, glow) {
    const lift = Math.max(0, Math.min(16, 50 - p.body[1])) / 16;
    const sx = 1 / Math.sqrt(p.squash), sy = p.squash;
    const far = mix(P.limb, P.limbFar, p.depth), farFoot = mix(P.foot, P.footFar, p.depth);
    let bells = "";
    [-1, 1].forEach((side) => {
      const a = -Math.PI / 2 + side * .72, cx = Math.cos(a) * 23.5, cy = Math.sin(a) * 23.5;
      bells += `<g transform="translate(${f(cx)} ${f(cy)}) rotate(${f(deg(a + Math.PI / 2 + p.bellJitter * side * .22))})">` +
        `<path d="M-8.6 0 A8.6 8.6 0 0 1 8.6 0 Z" fill="url(#${id}bell)"/><rect x="-9.5" y="-.9" width="19" height="2.6" rx="1.3" fill="${P.bellDeep}"/><circle cx="-3" cy="-4.4" r="1.6" fill="#fff" opacity=".55"/></g>`;
    });
    let ticks = "";
    [-Math.PI / 2, 0, Math.PI].forEach((a) => { ticks += `<circle cx="${f(Math.cos(a) * 15.2)}" cy="${f(Math.sin(a) * 15.2)}" r="1.1" fill="${P.tick}"/>`; });
    return `<ellipse cx="${f(p.body[0] + (p.footL[0] + p.footR[0] - 100) / 4)}" cy="92" rx="${f(20 * (1 - lift * .35))}" ry="2.5" fill="#000" opacity="${f(.22 - lift * .08)}"/>` +
      (glow ? `<circle cx="${f(p.body[0])}" cy="${f(p.body[1])}" r="42" fill="url(#${id}glow)"/>` : "") +
      `<path d="${limb(p.hipR, p.kneeR, p.footR)}" ${ST(far, 6.4)}/>` +
      `<path d="${limb(p.hipL, p.kneeL, p.footL)}" ${ST(P.limb, 6.4)}/>` +
      `<ellipse cx="${f(p.footR[0] + 1.6)}" cy="${f(p.footR[1] + .6)}" rx="5.5" ry="2.8" fill="${farFoot}"/>` +
      `<ellipse cx="${f(p.footL[0] - 1.6)}" cy="${f(p.footL[1] + .6)}" rx="5.5" ry="2.8" fill="${P.foot}"/>` +
      `<path d="${limb(p.shoulderR, p.elbowR, p.handR)}" ${ST(far, 5.6)}/>` +
      `<path d="${limb(p.shoulderL, p.elbowL, p.handL)}" ${ST(P.limb, 5.6)}/>` +
      `<g transform="translate(${f(p.body[0])} ${f(p.body[1])}) rotate(${f(deg(p.rot))}) scale(${f(sx)} ${f(sy)})">` +
      `<line x1="0" y1="-23" x2="0" y2="-28.5" ${ST(P.limb, 2.6)}/><circle cx="${f(p.bellJitter * 1.4)}" cy="-30" r="2.8" fill="${P.bellDeep}"/>` +
      bells +
      `<circle cx="0" cy="0" r="24" fill="url(#${id}body)"/>` +
      `<path d="${arcPath(0, 0, 21.6, Math.PI * 1.08, Math.PI * .42)}" ${ST("rgba(255,255,255,.38)", 2)}/>` +
      `<circle cx="0" cy="0" r="18" fill="url(#${id}face)"/>` + ticks + face(p, id) + `</g>` +
      `<circle cx="${f(p.handR[0])}" cy="${f(p.handR[1])}" r="3.9" fill="${mix(P.face, P.faceShade, p.depth)}" stroke="${far}" stroke-width="1.2"/>` +
      `<circle cx="${f(p.handL[0])}" cy="${f(p.handL[1])}" r="3.9" fill="${P.face}" stroke="${P.limb}" stroke-width="1.2"/>` +
      fx(p, t);
  }

  // ---------------------------------------------------------------- montagem + laço único de animação
  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  const live = new Set();
  let uid = 0, raf = 0, t0 = 0;

  function draw(m, now) {
    m.layer.innerHTML = frame(poseAt(CLIPS[m.anim] || CLIPS.idle, now), now, m.id, m.glow);
  }
  let last = 0;
  function loop(ts) {
    if (!t0) t0 = ts;
    // ~30 fps bastam para o rig e poupam bateria em celulares modestos
    if (ts - last >= 32) { last = ts; live.forEach((m) => draw(m, ts - t0 + m.offset)); }
    raf = live.size ? requestAnimationFrame(loop) : 0;
  }
  function kick() { if (!raf && live.size && !(reduced && reduced.matches) && !document.hidden) raf = requestAnimationFrame(loop); }
  function staticFrame(m) { draw(m, m.still); }

  const io = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      const m = en.target.__bip;
      if (!m) return;
      if (en.isIntersecting) live.add(m); else live.delete(m);
    });
    kick();
  }, { rootMargin: "80px" }) : null;

  function mount(el) {
    if (el.__bip) return el.__bip;
    const id = "bip" + (++uid) + "_";
    el.innerHTML = `<svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">${defs(id)}<g></g></svg>`;
    const m = { el, id, layer: el.querySelector("g"), anim: el.dataset.anim || "idle",
      glow: el.dataset.glow !== "0", still: el.dataset.t != null ? +el.dataset.t : (STILL[el.dataset.anim] || 0), offset: (uid * 337) % 1000 };
    el.__bip = m;
    staticFrame(m);
    if (io) io.observe(el);
    return m;
  }
  function play(el, anim) {
    const m = mount(el);
    m.anim = anim; el.dataset.anim = anim;
    m.still = STILL[anim] || 0;
    staticFrame(m);
  }

  document.addEventListener("visibilitychange", () => { if (document.hidden) { cancelAnimationFrame(raf); raf = 0; } else kick(); });
  if (reduced && reduced.addEventListener) reduced.addEventListener("change", () => {
    if (reduced.matches) { cancelAnimationFrame(raf); raf = 0; document.querySelectorAll(".bip").forEach((el) => el.__bip && staticFrame(el.__bip)); }
    else kick();
  });

  function init() { document.querySelectorAll(".bip[data-anim]").forEach(mount); }
  window.WWBip = { play, mount, clips: Object.keys(CLIPS) };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
