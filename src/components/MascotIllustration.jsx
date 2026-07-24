export default function MascotIllustration() {
  return (
    <svg
      viewBox="0 0 280 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-label="Developer girl mascot"
    >
      <defs>
        <radialGradient id="ms-skin" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#FDDBB4" />
          <stop offset="100%" stopColor="#F0B98A" />
        </radialGradient>
        <linearGradient id="ms-hoodie" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
        <linearGradient id="ms-hair" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#3d2b6e" />
          <stop offset="100%" stopColor="#1a0f30" />
        </linearGradient>
        <radialGradient id="ms-bg" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Background glow */}
      <ellipse cx="140" cy="170" rx="130" ry="130" fill="url(#ms-bg)" />

      {/* ── BODY ── */}
      <path
        d="M78 196 Q65 248 62 295 L218 295 Q215 248 202 196 Q182 174 140 174 Q98 174 78 196Z"
        fill="url(#ms-hoodie)"
      />
      <path d="M133 176 L137 240" stroke="#7c3aed" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
      <path d="M147 176 L143 240" stroke="#7c3aed" strokeWidth="1.2" strokeOpacity="0.5" strokeLinecap="round" />
      <path
        d="M112 228 Q140 240 168 228 Q166 252 140 255 Q114 252 112 228Z"
        fill="#6d28d9"
        fillOpacity="0.4"
      />
      <path d="M131 178 Q128 194 130 210" stroke="white" strokeWidth="1.3" strokeOpacity="0.4" fill="none" strokeLinecap="round" />
      <path d="M149 178 Q152 194 150 210" stroke="white" strokeWidth="1.3" strokeOpacity="0.4" fill="none" strokeLinecap="round" />

      {/* Left arm */}
      <path d="M80 198 Q58 212 50 248 Q56 260 68 258 Q72 232 90 214Z" fill="url(#ms-hoodie)" />
      <ellipse cx="58" cy="262" rx="14" ry="11" fill="#FDDBB4" />
      {/* Right arm */}
      <path d="M200 198 Q222 212 230 248 Q224 260 212 258 Q208 232 190 214Z" fill="url(#ms-hoodie)" />
      <ellipse cx="222" cy="262" rx="14" ry="11" fill="#FDDBB4" />

      {/* ── NECK ── */}
      <path
        d="M128 158 Q127 178 132 180 L148 180 Q153 178 152 158 Q147 164 140 165 Q133 164 128 158Z"
        fill="#FDDBB4"
      />

      {/* ── HEAD ── */}
      <ellipse cx="140" cy="105" rx="62" ry="64" fill="url(#ms-skin)" />
      <ellipse cx="79" cy="110" rx="10" ry="13" fill="#FDDBB4" />
      <ellipse cx="80" cy="110" rx="6" ry="9" fill="#F5C9A0" />
      <ellipse cx="201" cy="110" rx="10" ry="13" fill="#FDDBB4" />
      <ellipse cx="200" cy="110" rx="6" ry="9" fill="#F5C9A0" />

      {/* ── HAIR ── */}
      <path
        d="M80 90 Q82 36 140 33 Q198 36 200 90 Q195 48 140 45 Q85 48 80 90Z"
        fill="url(#ms-hair)"
      />
      <path d="M80 90 Q72 118 76 148 Q84 154 90 150 Q86 124 87 96Z" fill="url(#ms-hair)" />
      <path d="M200 90 Q208 118 204 148 Q196 154 190 150 Q194 124 193 96Z" fill="url(#ms-hair)" />
      {/* Bun */}
      <circle cx="140" cy="42" r="22" fill="url(#ms-hair)" />
      <circle cx="140" cy="42" r="16" fill="#3d2b6e" />
      <path d="M129 33 Q140 28 151 33" stroke="#5a3a9a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M122 42 Q131 48 140 46 Q149 48 158 42" stroke="#5a3a9a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Front wispies */}
      <path d="M104 68 Q110 80 107 96" stroke="#2d1b4e" strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M116 60 Q120 72 117 86" stroke="#2d1b4e" strokeWidth="3.5" fill="none" strokeLinecap="round" />

      {/* ── FACE ── */}
      {/* Eyebrows */}
      <path d="M106 90 Q118 84 128 88" stroke="#2d1b4e" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M152 88 Q162 84 174 90" stroke="#2d1b4e" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* Left eye */}
      <ellipse cx="118" cy="108" rx="14" ry="15" fill="white" />
      <ellipse cx="120" cy="110" rx="10" ry="11" fill="#2d1b4e" />
      <ellipse cx="120" cy="110" rx="7" ry="8" fill="#7c3aed" />
      <ellipse cx="121" cy="111" rx="4" ry="4.5" fill="#1a0a30" />
      <circle cx="123" cy="107" r="3" fill="white" />
      <circle cx="118" cy="113" r="1.5" fill="white" fillOpacity="0.6" />

      {/* Right eye */}
      <ellipse cx="162" cy="108" rx="14" ry="15" fill="white" />
      <ellipse cx="160" cy="110" rx="10" ry="11" fill="#2d1b4e" />
      <ellipse cx="160" cy="110" rx="7" ry="8" fill="#7c3aed" />
      <ellipse cx="159" cy="111" rx="4" ry="4.5" fill="#1a0a30" />
      <circle cx="157" cy="107" r="3" fill="white" />
      <circle cx="162" cy="113" r="1.5" fill="white" fillOpacity="0.6" />

      {/* Upper lashes left */}
      <path d="M106 99 L109 94" stroke="#2d1b4e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M112 96 L113 91" stroke="#2d1b4e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M118 94 L118 89" stroke="#2d1b4e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M124 95 L126 90" stroke="#2d1b4e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M130 98 L133 93" stroke="#2d1b4e" strokeWidth="1.8" strokeLinecap="round" />
      {/* Upper lashes right */}
      <path d="M150 98 L147 93" stroke="#2d1b4e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M156 95 L154 90" stroke="#2d1b4e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M162 94 L162 89" stroke="#2d1b4e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M168 96 L170 91" stroke="#2d1b4e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M174 99 L177 94" stroke="#2d1b4e" strokeWidth="1.8" strokeLinecap="round" />

      {/* Nose */}
      <path d="M136 122 Q140 128 144 122" stroke="#d4956a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="137" cy="123" r="1.5" fill="#d4956a" fillOpacity="0.5" />
      <circle cx="143" cy="123" r="1.5" fill="#d4956a" fillOpacity="0.5" />

      {/* Mouth */}
      <path d="M126 136 Q140 150 154 136" stroke="#c0725a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M128 138 Q140 152 152 138 Q140 155 128 138Z" fill="#ff9b9b" fillOpacity="0.2" />

      {/* Blush */}
      <ellipse cx="104" cy="124" rx="14" ry="9" fill="#FFB3B3" fillOpacity="0.5" />
      <ellipse cx="176" cy="124" rx="14" ry="9" fill="#FFB3B3" fillOpacity="0.5" />

      {/* ── DECORATIONS ── */}
      {/* Stars */}
      <path d="M32 52 L34 45 L36 52 L43 54 L36 56 L34 63 L32 56 L25 54Z" fill="#3b82f6" opacity="0.85" />
      <path d="M237 58 L239 52 L241 58 L247 60 L241 62 L239 68 L237 62 L231 60Z" fill="#14b8a6" opacity="0.85" />
      <path d="M40 168 L41.5 163 L43 168 L48 170 L43 172 L41.5 177 L40 172 L35 170Z" fill="#8b5cf6" opacity="0.7" />
      <path d="M232 172 L233.5 167 L235 172 L240 174 L235 176 L233.5 181 L232 176 L227 174Z" fill="#3b82f6" opacity="0.7" />

      {/* Dots */}
      <circle cx="52" cy="230" r="3.5" fill="#3b82f6" fillOpacity="0.4" />
      <circle cx="46" cy="248" r="2.5" fill="#8b5cf6" fillOpacity="0.35" />
      <circle cx="228" cy="232" r="3.5" fill="#14b8a6" fillOpacity="0.4" />
      <circle cx="234" cy="250" r="2.5" fill="#8b5cf6" fillOpacity="0.35" />

      {/* Floating code labels */}
      <text x="22" y="130" fill="#3b82f6" fontSize="14" fontFamily="monospace" fillOpacity="0.65" fontWeight="bold">{"{ }"}</text>
      <text x="232" y="120" fill="#14b8a6" fontSize="14" fontFamily="monospace" fillOpacity="0.65" fontWeight="bold">{"</>"}</text>
    </svg>
  );
}
