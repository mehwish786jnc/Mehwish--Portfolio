import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Gamepad2, Trophy } from "lucide-react";
import {
  siReact,
  siPython,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siDocker,
  siKubernetes,
  siPytorch,
  siGit,
  siGithub,
  siJenkins,
  siPostgresql,
  siTailwindcss,
  siMongodb,
  siGraphql,
  siRedis,
} from "simple-icons";
import { fadeUp, viewport } from "../motion";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

const GRID = 17;
const CELL = 30;
const SIZE = GRID * CELL; // canvas internal resolution
const HIGH_KEY = "portfolio-snake-high";

// Real tech brand logos (simple-icons: 24x24 SVG path + official brand hex).
const TOKENS = [
  siReact,
  siPython,
  siTypescript,
  siJavascript,
  siNodedotjs,
  siDocker,
  siKubernetes,
  siPytorch,
  siGit,
  siGithub,
  siJenkins,
  siPostgresql,
  siTailwindcss,
  siMongodb,
  siGraphql,
  siRedis,
].map((icon) => ({
  label: icon.title,
  color: `#${icon.hex}`,
  path: icon.path,
  path2d: typeof Path2D !== "undefined" ? new Path2D(icon.path) : null,
}));

const START_DIR = { x: 1, y: 0 };
const centerSnake = () => {
  const c = Math.floor(GRID / 2);
  return [
    { x: c, y: c },
    { x: c - 1, y: c },
    { x: c - 2, y: c },
  ];
};

const isDark = () =>
  typeof document !== "undefined" &&
  document.documentElement.classList.contains("dark");

export default function SnakeGame() {
  const { t } = useLang();
  const g = t.game;

  const canvasRef = useRef(null);
  const snakeRef = useRef(centerSnake());
  const dirRef = useRef({ ...START_DIR });
  const nextDirRef = useRef({ ...START_DIR });
  const foodRef = useRef(null);
  const statusRef = useRef("idle");

  const [status, setStatus] = useState("idle"); // idle | running | paused | gameOver
  const [score, setScore] = useState(0);
  const [high, setHigh] = useState(0);
  const [collected, setCollected] = useState([]);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  // Load persisted high score.
  useEffect(() => {
    const saved = Number(localStorage.getItem(HIGH_KEY));
    if (!Number.isNaN(saved)) setHigh(saved);
  }, []);

  const placeFood = useCallback((snake) => {
    let cell;
    do {
      cell = {
        x: Math.floor(Math.random() * GRID),
        y: Math.floor(Math.random() * GRID),
      };
    } while (snake.some((s) => s.x === cell.x && s.y === cell.y));
    cell.token = TOKENS[Math.floor(Math.random() * TOKENS.length)];
    foodRef.current = cell;
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dark = isDark();

    // Board background.
    ctx.clearRect(0, 0, SIZE, SIZE);
    ctx.fillStyle = dark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.03)";
    ctx.fillRect(0, 0, SIZE, SIZE);

    // Grid lines.
    ctx.strokeStyle = dark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.05)";
    ctx.lineWidth = 1;
    for (let i = 1; i < GRID; i++) {
      ctx.beginPath();
      ctx.moveTo(i * CELL, 0);
      ctx.lineTo(i * CELL, SIZE);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i * CELL);
      ctx.lineTo(SIZE, i * CELL);
      ctx.stroke();
    }

    // Food = real brand logo on a white chip (readable in both themes).
    const food = foodRef.current;
    if (food) {
      const fx = food.x * CELL;
      const fy = food.y * CELL;
      ctx.fillStyle = "#ffffff";
      ctx.shadowColor = "rgba(0,0,0,0.25)";
      ctx.shadowBlur = 6;
      roundRect(ctx, fx + 3, fy + 3, CELL - 6, CELL - 6, 8);
      ctx.fill();
      ctx.shadowBlur = 0;

      if (food.token.path2d) {
        const pad = 6;
        const scale = (CELL - pad * 2) / 24;
        ctx.save();
        ctx.translate(fx + pad, fy + pad);
        ctx.scale(scale, scale);
        ctx.fillStyle = food.token.color;
        ctx.fill(food.token.path2d);
        ctx.restore();
      }
    }

    // Snake with brand gradient.
    const snake = snakeRef.current;
    const style = getComputedStyle(document.documentElement);
    const blue   = `rgb(${style.getPropertyValue("--brand-blue").trim()})`;
    const purple = `rgb(${style.getPropertyValue("--brand-purple").trim()})`;
    const teal   = `rgb(${style.getPropertyValue("--brand-teal").trim()})`;
    const grad = ctx.createLinearGradient(0, 0, SIZE, SIZE);
    grad.addColorStop(0, blue);
    grad.addColorStop(0.5, purple);
    grad.addColorStop(1, teal);
    snake.forEach((seg, i) => {
      ctx.fillStyle = grad;
      ctx.globalAlpha = i === 0 ? 1 : Math.max(0.55, 1 - i * 0.03);
      roundRect(ctx, seg.x * CELL + 2, seg.y * CELL + 2, CELL - 4, CELL - 4, 9);
      ctx.fill();
    });
    ctx.globalAlpha = 1;

    // Eyes on the head.
    const head = snake[0];
    if (head) {
      const dir = dirRef.current;
      ctx.fillStyle = "#ffffff";
      const cx = head.x * CELL + CELL / 2;
      const cy = head.y * CELL + CELL / 2;
      const off = 5;
      const perp = { x: dir.y, y: dir.x };
      [-1, 1].forEach((s) => {
        ctx.beginPath();
        ctx.arc(
          cx + dir.x * 4 + perp.x * off * s,
          cy + dir.y * 4 + perp.y * off * s,
          2.4,
          0,
          Math.PI * 2
        );
        ctx.fill();
      });
    }
  }, []);

  const startGame = useCallback(() => {
    snakeRef.current = centerSnake();
    dirRef.current = { ...START_DIR };
    nextDirRef.current = { ...START_DIR };
    placeFood(snakeRef.current);
    setScore(0);
    setCollected([]);
    setStatus("running");
  }, [placeFood]);

  const endGame = useCallback(() => {
    setStatus("gameOver");
    setScore((s) => {
      setHigh((h) => {
        const next = Math.max(h, s);
        localStorage.setItem(HIGH_KEY, String(next));
        return next;
      });
      return s;
    });
  }, []);

  const tick = useCallback(() => {
    const dir = nextDirRef.current;
    dirRef.current = dir;
    const snake = snakeRef.current;
    const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

    const hitsWall =
      head.x < 0 || head.x >= GRID || head.y < 0 || head.y >= GRID;
    const hitsSelf = snake.some((s) => s.x === head.x && s.y === head.y);
    if (hitsWall || hitsSelf) {
      endGame();
      return;
    }

    const food = foodRef.current;
    const eats = food && head.x === food.x && head.y === food.y;
    const next = [head, ...snake];
    if (eats) {
      setScore((s) => s + 1);
      setCollected((c) => [food.token, ...c].slice(0, 14));
      placeFood(next);
    } else {
      next.pop();
    }
    snakeRef.current = next;
    draw();
  }, [draw, endGame, placeFood]);

  // Game loop — starts slow, speeds up gradually with score.
  useEffect(() => {
    if (status !== "running") return;
    const speed = Math.max(70, 220 - score * 12);
    const id = setInterval(tick, speed);
    return () => clearInterval(id);
  }, [status, score, tick]);

  // Redraw when idle/paused/theme so the board is always visible.
  useEffect(() => {
    draw();
  }, [draw, status, collected]);

  const setDirection = useCallback((d) => {
    const cur = dirRef.current;
    if (d.x === -cur.x && d.y === -cur.y) return; // no reversing
    nextDirRef.current = d;
  }, []);

  // Keyboard controls (only while playing, so arrows still scroll otherwise).
  useEffect(() => {
    const onKey = (e) => {
      const s = statusRef.current;
      if (s !== "running" && s !== "paused") return;
      const map = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        w: { x: 0, y: -1 },
        s: { x: 0, y: 1 },
        a: { x: -1, y: 0 },
        d: { x: 1, y: 0 },
      };
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === " " || key === "Spacebar") {
        e.preventDefault();
        setStatus((p) => (p === "running" ? "paused" : "running"));
        return;
      }
      if (map[key]) {
        e.preventDefault();
        if (statusRef.current === "running") setDirection(map[key]);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setDirection]);

  // Touch swipe controls.
  const touchStart = useRef(null);
  const onTouchStart = (e) => {
    const tch = e.touches[0];
    touchStart.current = { x: tch.clientX, y: tch.clientY };
  };
  const onTouchEnd = (e) => {
    if (!touchStart.current || statusRef.current !== "running") return;
    const tch = e.changedTouches[0];
    const dx = tch.clientX - touchStart.current.x;
    const dy = tch.clientY - touchStart.current.y;
    if (Math.abs(dx) < 20 && Math.abs(dy) < 20) return;
    if (Math.abs(dx) > Math.abs(dy)) {
      setDirection({ x: dx > 0 ? 1 : -1, y: 0 });
    } else {
      setDirection({ x: 0, y: dy > 0 ? 1 : -1 });
    }
    touchStart.current = null;
  };

  const overlay =
    status === "idle" || status === "paused" || status === "gameOver";

  return (
    <section id="play" className="section-container">
      <SectionHeading
        eyebrow={g.eyebrow}
        title={g.title}
        subtitle={g.subtitle}
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[auto,1fr] md:items-start"
      >
        {/* Board */}
        <div className="relative mx-auto w-full max-w-[420px]">
          <canvas
            ref={canvasRef}
            width={SIZE}
            height={SIZE}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="aspect-square w-full touch-none rounded-2xl glass"
          />

          {overlay && (
            <div className="absolute inset-0 grid place-items-center rounded-2xl bg-slate-950/45 backdrop-blur-sm">
              <div className="text-center">
                {status === "gameOver" && (
                  <>
                    <p className="text-2xl font-extrabold text-white">
                      {g.gameOver}
                    </p>
                    <p className="mt-1 text-sm text-slate-200">
                      {g.score}: <span className="font-bold">{score}</span>
                    </p>
                  </>
                )}
                {status === "paused" && (
                  <p className="mb-4 text-2xl font-extrabold text-white">
                    {g.pause}
                  </p>
                )}
                {status === "idle" && (
                  <p className="mb-4 max-w-[220px] text-sm text-slate-200">
                    {g.controlsHint}
                  </p>
                )}
                <button
                  onClick={() =>
                    status === "paused" ? setStatus("running") : startGame()
                  }
                  className="btn-primary mt-4"
                >
                  <Play className="h-4 w-4" />
                  {status === "idle"
                    ? g.start
                    : status === "paused"
                      ? g.resume
                      : g.restart}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Side panel */}
        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl glass p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                <Gamepad2 className="h-3.5 w-3.5" /> {g.score}
              </div>
              <div className="mt-1 text-3xl font-extrabold tabular-nums gradient-text">
                {score}
              </div>
            </div>
            <div className="rounded-2xl glass p-4 text-center">
              <div className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                <Trophy className="h-3.5 w-3.5" /> {g.highScore}
              </div>
              <div className="mt-1 text-3xl font-extrabold tabular-nums text-slate-800 dark:text-white">
                {high}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-2">
            {status === "running" ? (
              <button
                onClick={() => setStatus("paused")}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold text-slate-700 transition-transform hover:scale-105 dark:text-slate-200"
              >
                <Pause className="h-4 w-4" /> {g.pause}
              </button>
            ) : status === "paused" ? (
              <button
                onClick={() => setStatus("running")}
                className="btn-primary"
              >
                <Play className="h-4 w-4" /> {g.resume}
              </button>
            ) : (
              <button onClick={startGame} className="btn-primary">
                <Play className="h-4 w-4" />
                {status === "gameOver" ? g.restart : g.start}
              </button>
            )}
            {status !== "idle" && (
              <button
                onClick={startGame}
                className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm font-semibold text-slate-700 transition-transform hover:scale-105 dark:text-slate-200"
              >
                <RotateCcw className="h-4 w-4" /> {g.restart}
              </button>
            )}
          </div>

          {/* Collected tokens */}
          <div className="rounded-2xl glass p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
              {g.collected}
            </p>
            {collected.length ? (
              <div className="flex flex-wrap gap-1.5">
                {collected.map((tk, i) => (
                  <LogoChip key={i} token={tk} />
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5 opacity-90">
                {TOKENS.map((tk) => (
                  <LogoChip key={tk.label} token={tk} muted />
                ))}
              </div>
            )}
          </div>

          {/* On-screen dpad (mobile-friendly) */}
          <div className="mx-auto grid w-36 grid-cols-3 gap-1.5 md:mx-0">
            <span />
            <DPadButton onClick={() => setDirection({ x: 0, y: -1 })} label="▲" />
            <span />
            <DPadButton onClick={() => setDirection({ x: -1, y: 0 })} label="◀" />
            <span />
            <DPadButton onClick={() => setDirection({ x: 1, y: 0 })} label="▶" />
            <span />
            <DPadButton onClick={() => setDirection({ x: 0, y: 1 })} label="▼" />
            <span />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function LogoChip({ token, muted }) {
  return (
    <span
      title={token.label}
      className={`grid h-8 w-8 place-items-center rounded-lg bg-white shadow-sm ring-1 ring-black/5 ${
        muted ? "opacity-70" : ""
      }`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill={token.color}
        aria-hidden="true"
      >
        <path d={token.path} />
      </svg>
    </span>
  );
}

function DPadButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-xl glass text-slate-600 transition-transform hover:scale-105 active:scale-95 dark:text-slate-300"
    >
      {label}
    </button>
  );
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}
