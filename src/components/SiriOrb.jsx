import { useId, useMemo } from "react";
import { motion } from "framer-motion";
import { useLang } from "../i18n/LanguageContext";

/*
 * Flagship abstract ribbon mark.
 * 3 thick, gracefully tapered glass ribbons swirl in balanced rotational
 * motion, overlapping with soft transparency and glass-like edge highlights
 * around a clean, open center. Pure vector, transparent background.
 */

const CENTER = 50;
const SAMPLES = 54;

// One elegant comma-swirl ribbon, then rotated 3x for a balanced mark.
const BASE = { p0: [50, 44], c1: [76, 35], c2: [86, 62], p3: [60, 80] };
const WIDTH = 15;

const GRADIENT_PAIRS = [
  ["--brand-blue",   "--brand-purple"],
  ["--brand-blue",   "--brand-teal"],
  ["--brand-purple", "--brand-teal"],
];

function cssRgb(varName) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  return `rgb(${raw})`;
}

function rot([x, y], deg) {
  const a = (deg * Math.PI) / 180;
  const dx = x - CENTER;
  const dy = y - CENTER;
  return [
    CENTER + dx * Math.cos(a) - dy * Math.sin(a),
    CENTER + dx * Math.sin(a) + dy * Math.cos(a),
  ];
}

const RIBBONS = [0, 120, 240].map((deg) => ({
  p0: rot(BASE.p0, deg),
  c1: rot(BASE.c1, deg),
  c2: rot(BASE.c2, deg),
  p3: rot(BASE.p3, deg),
  w: WIDTH,
}));

function cubic(p0, c1, c2, p3, t) {
  const u = 1 - t;
  const a = u * u * u;
  const b = 3 * u * u * t;
  const c = 3 * u * t * t;
  const d = t * t * t;
  return [
    a * p0[0] + b * c1[0] + c * c2[0] + d * p3[0],
    a * p0[1] + b * c1[1] + c * c2[1] + d * p3[1],
  ];
}

function cubicTangent(p0, c1, c2, p3, t) {
  const u = 1 - t;
  const a = 3 * u * u;
  const b = 6 * u * t;
  const c = 3 * t * t;
  return [
    a * (c1[0] - p0[0]) + b * (c2[0] - c1[0]) + c * (p3[0] - c2[0]),
    a * (c1[1] - p0[1]) + b * (c2[1] - c1[1]) + c * (p3[1] - c2[1]),
  ];
}

// Returns { fill, edge } — a tapered filled ribbon and its outer edge polyline
// (used as a glass rim highlight).
function buildRibbon(r) {
  const left = [];
  const right = [];
  for (let s = 0; s <= SAMPLES; s++) {
    const t = s / SAMPLES;
    const [x, y] = cubic(r.p0, r.c1, r.c2, r.p3, t);
    const [tx, ty] = cubicTangent(r.p0, r.c1, r.c2, r.p3, t);
    const len = Math.hypot(tx, ty) || 1;
    const nx = -ty / len;
    const ny = tx / len;
    // Full body in the middle, smooth elegant taper toward both tips.
    const hw = (r.w / 2) * Math.pow(Math.sin(Math.PI * t), 0.5);
    left.push([x + nx * hw, y + ny * hw]);
    right.push([x - nx * hw, y - ny * hw]);
  }

  let fill = `M ${left[0][0].toFixed(2)} ${left[0][1].toFixed(2)}`;
  for (let i = 1; i < left.length; i++) {
    fill += ` L ${left[i][0].toFixed(2)} ${left[i][1].toFixed(2)}`;
  }
  for (let i = right.length - 1; i >= 0; i--) {
    fill += ` L ${right[i][0].toFixed(2)} ${right[i][1].toFixed(2)}`;
  }
  fill += " Z";

  let edge = `M ${left[0][0].toFixed(2)} ${left[0][1].toFixed(2)}`;
  for (let i = 1; i < left.length; i++) {
    edge += ` L ${left[i][0].toFixed(2)} ${left[i][1].toFixed(2)}`;
  }

  return { fill, edge };
}

export default function SiriOrb({ size = 64, state = "idle", className = "" }) {
  const uid = useId().replace(/:/g, "");
  const { lang } = useLang();

  const gradients = useMemo(
    () => GRADIENT_PAIRS.map(([a, b]) => ({ from: cssRgb(a), to: cssRgb(b) })),
    [lang]
  );

  const ribbons = useMemo(
    () => RIBBONS.map((r, i) => ({ ...r, ...buildRibbon(r), ...gradients[i] })),
    [gradients]
  );

  const spin = state === "thinking" ? 14 : state === "speaking" ? 20 : 42;
  const pulse = state === "thinking" ? 2.2 : 3.6;

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        style={{ display: "block", overflow: "visible" }}
      >
        <defs>
          {ribbons.map((r, i) => (
            <linearGradient
              key={i}
              id={`${uid}-g${i}`}
              gradientUnits="userSpaceOnUse"
              x1={r.p0[0]}
              y1={r.p0[1]}
              x2={r.p3[0]}
              y2={r.p3[1]}
            >
              <stop offset="0%" stopColor={r.from} />
              <stop offset="100%" stopColor={r.to} />
            </linearGradient>
          ))}

          <radialGradient id={`${uid}-core`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={gradients[2].from} stopOpacity="0.9" />
            <stop offset="45%" stopColor={gradients[0].from} stopOpacity="0.4" />
            <stop offset="100%" stopColor={gradients[1].to} stopOpacity="0" />
          </radialGradient>

          <filter id={`${uid}-soft`} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="3.2" />
          </filter>
          <filter id={`${uid}-bloom`} x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* Soft ambient bloom for depth */}
        <motion.circle
          cx="50"
          cy="50"
          r="26"
          fill={`url(#${uid}-core)`}
          filter={`url(#${uid}-bloom)`}
          animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.92, 1.06, 0.92] }}
          transition={{ duration: pulse, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "50px 50px" }}
        />

        {/* Rotating ribbon swirl */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: spin, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        >
          {/* Depth shadow pass (offset, dark, blurred) */}
          <g
            transform="translate(1.4 2.2)"
            opacity="0.3"
            filter={`url(#${uid}-soft)`}
          >
            {ribbons.map((r, i) => (
              <path key={`sh-${i}`} d={r.fill} fill="#1e1b4b" />
            ))}
          </g>

          {/* Soft glow pass */}
          <g opacity="0.55" filter={`url(#${uid}-soft)`}>
            {ribbons.map((r, i) => (
              <path key={`gl-${i}`} d={r.fill} fill={`url(#${uid}-g${i})`} />
            ))}
          </g>

          {/* Translucent glass fill — natural overlap */}
          <g>
            {ribbons.map((r, i) => (
              <path
                key={`fl-${i}`}
                d={r.fill}
                fill={`url(#${uid}-g${i})`}
                opacity="0.82"
              />
            ))}
          </g>

          {/* Glass rim highlight along one edge */}
          <g fill="none" stroke="#ffffff" strokeLinecap="round">
            {ribbons.map((r, i) => (
              <path
                key={`hl-${i}`}
                d={r.edge}
                strokeWidth="0.9"
                opacity="0.5"
              />
            ))}
          </g>
        </motion.g>

        {/* Clean bright convergence — subtle, keeps center open */}
        <motion.circle
          cx="50"
          cy="50"
          r="3.6"
          fill="#ffffff"
          filter={`url(#${uid}-soft)`}
          animate={{ opacity: [0.55, 0.9, 0.55], scale: [0.85, 1.15, 0.85] }}
          transition={{ duration: pulse, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "50px 50px" }}
        />
      </svg>
    </div>
  );
}
