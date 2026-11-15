import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollLagoonProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-50 h-1 bg-transparent"
    >
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-[#329FD8] via-[#65A366] to-[#F2C53D]"
        style={{ scaleX }}
      />
    </div>
  );
}

interface SwayingReedsCornerProps {
  className?: string;
  tone?: 'green' | 'gold' | 'blue';
}

export function SwayingReedsCorner({
  className = '',
  tone = 'green',
}: SwayingReedsCornerProps) {
  const stemColor =
    tone === 'gold' ? '#8C6708' : tone === 'blue' ? '#186E9E' : '#3E7240';
  const plumeColor =
    tone === 'gold' ? '#D6A11E' : tone === 'blue' ? '#329FD8' : '#65A366';

  return (
    <motion.svg
      viewBox="0 0 180 150"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      initial={{ rotate: -1 }}
      animate={{ rotate: [-1.4, 1.8, -1.4] }}
      transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: 'bottom center' }}
    >
      <path
        d="M36 146 Q42 92 26 30"
        stroke={stemColor}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <rect
        x="21"
        y="24"
        width="8"
        height="28"
        rx="4"
        transform="rotate(-10 21 24)"
        fill={plumeColor}
        opacity="0.82"
      />
      <path
        d="M66 146 Q74 88 64 16"
        stroke={stemColor}
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.75"
      />
      <rect
        x="60"
        y="12"
        width="8.5"
        height="31"
        rx="4.25"
        transform="rotate(-3 60 12)"
        fill={plumeColor}
        opacity="0.88"
      />
      <path
        d="M96 146 Q110 88 134 38"
        stroke={stemColor}
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.6"
      />
      <path
        d="M124 44 C132 30, 146 24, 150 32 C148 42, 136 52, 124 44 Z"
        fill={plumeColor}
        opacity="0.55"
      />
      <path
        d="M52 146 C34 118, 18 98, 12 78 C24 94, 42 114, 52 146 Z"
        fill={stemColor}
        opacity="0.32"
      />
      <path
        d="M84 146 C100 112, 118 96, 140 82 C122 104, 102 122, 84 146 Z"
        fill={plumeColor}
        opacity="0.34"
      />
      <g transform="translate(88, 60)">
        <path
          d="M2 14 C8 6, 18 6, 23 11 L28 9 L25 14 C23 20, 14 23, 6 20 L0 24 L4 17 Z"
          fill={stemColor}
          opacity="0.82"
        />
        <circle cx="20" cy="11" r="1.2" fill="#FFFDF8" />
      </g>
    </motion.svg>
  );
}

export function FlyingBirdsFlock({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 220 72"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      animate={{ y: [0, -6, 0], x: [0, 8, 0] }}
      transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <path
        d="M18 32 Q28 18 38 30 Q48 18 58 32"
        stroke="#102A3A"
        strokeWidth="2.2"
        strokeLinecap="round"
        opacity="0.58"
      />
      <path
        d="M78 18 Q86 8 94 17 Q102 8 110 18"
        stroke="#102A3A"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.48"
      />
      <path
        d="M128 42 Q135 34 142 41 Q149 34 156 42"
        stroke="#186E9E"
        strokeWidth="1.9"
        strokeLinecap="round"
        opacity="0.52"
      />
      <path
        d="M174 24 Q180 17 186 23 Q192 17 198 24"
        stroke="#2E6B30"
        strokeWidth="1.7"
        strokeLinecap="round"
        opacity="0.5"
      />
    </motion.svg>
  );
}

export function PeekingCarpinchoWave({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 180 150"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Background tall reeds */}
      <motion.g
        animate={{ rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'bottom center' }}
      >
        <path d="M26 146 Q20 92 28 38" stroke="#4D8850" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M148 146 Q156 96 146 46" stroke="#4D8850" strokeWidth="2.4" strokeLinecap="round" />
        <rect x="23" y="34" width="7" height="22" rx="3.5" fill="#65A366" />
        <path d="M138 146 C145 118, 160 100, 170 86" stroke="#65A366" strokeWidth="2.2" strokeLinecap="round" />
      </motion.g>

      {/* Cute Carpincho body & gentle bob */}
      <motion.g
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Body */}
        <path
          d="M46 145 C44 114, 58 94, 88 94 C118 94, 134 114, 132 145 Z"
          fill="#B98856"
          stroke="#5C3D22"
          strokeWidth="2.4"
        />
        {/* Head */}
        <path
          d="M58 96 C54 74, 68 56, 94 56 C116 56, 132 68, 134 86 C135 98, 122 106, 96 106 C74 106, 61 103, 58 96 Z"
          fill="#C59663"
          stroke="#5C3D22"
          strokeWidth="2.4"
        />
        {/* Ears */}
        <ellipse cx="73" cy="59" rx="6" ry="8" transform="rotate(-18 73 59)" fill="#A57548" stroke="#5C3D22" strokeWidth="2.2" />
        <ellipse cx="104" cy="56" rx="5.5" ry="7.5" transform="rotate(10 104 56)" fill="#A57548" stroke="#5C3D22" strokeWidth="2.2" />
        {/* Happy calm eyes & nose */}
        <path d="M84 76 Q89 72 94 76" stroke="#3E2714" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M110 76 Q115 72 120 76" stroke="#3E2714" strokeWidth="2.2" strokeLinecap="round" />
        <ellipse cx="123" cy="88" rx="6.5" ry="4.5" fill="#5C3D22" />
        <path d="M116 95 Q122 99 128 94" stroke="#5C3D22" strokeWidth="2" strokeLinecap="round" />
        {/* Rosy cheek */}
        <circle cx="96" cy="87" r="4" fill="#F2A679" opacity="0.55" />

        {/* Waving front paw! */}
        <motion.g
          animate={{ rotate: [0, 18, -8, 18, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '54px 114px' }}
        >
          <path
            d="M54 114 C40 104, 34 90, 42 82 C48 77, 56 84, 62 104 Z"
            fill="#C59663"
            stroke="#5C3D22"
            strokeWidth="2.3"
          />
          <path d="M41 86 L43 90 M46 83 L47 87 M51 84 L51 88" stroke="#5C3D22" strokeWidth="1.6" strokeLinecap="round" />
        </motion.g>
      </motion.g>

      {/* Foreground grassy tufts */}
      <path
        d="M32 146 Q46 126 56 146 Q68 128 80 146 Q100 132 114 146 Q128 126 144 146"
        stroke="#4D8850"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="#8CBF75"
        fillOpacity="0.4"
      />
    </motion.svg>
  );
}

export function PerchingBenteveo({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 140 110"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      {/* Rustic branch with leaves */}
      <path
        d="M12 88 Q68 78 126 84"
        stroke="#6B4C35"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <motion.g
        animate={{ rotate: [-2, 2.5, -2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '24px 85px' }}
      >
        <path d="M24 85 C10 72, 8 56, 22 52 C32 60, 32 76, 24 85 Z" fill="#8CBF75" stroke="#2E6B30" strokeWidth="1.8" />
        <path d="M112 83 C124 72, 134 58, 122 50 C112 56, 108 72, 112 83 Z" fill="#65A366" stroke="#2E6B30" strokeWidth="1.8" />
      </motion.g>

      {/* Cute Benteveo bird */}
      <motion.g
        animate={{ rotate: [0, -3, 2, 0] }}
        transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '72px 76px' }}
      >
        {/* Tail */}
        <path d="M46 66 L24 78 L30 84 L52 72 Z" fill="#8A5E3B" stroke="#3D2918" strokeWidth="1.8" />
        {/* Yellow chest & belly */}
        <path
          d="M54 50 C68 38, 88 42, 92 58 C94 70, 82 80, 64 78 C50 76, 46 62, 54 50 Z"
          fill="#F2C53D"
          stroke="#3D2918"
          strokeWidth="2"
        />
        {/* Brown wing */}
        <path
          d="M50 54 C58 46, 74 48, 78 60 C72 68, 56 70, 48 62 Z"
          fill="#966844"
          stroke="#3D2918"
          strokeWidth="1.8"
        />
        {/* Black & white striped head */}
        <circle cx="80" cy="36" r="14" fill="#23323C" stroke="#102A3A" strokeWidth="1.8" />
        <path d="M68 34 Q80 28 91 34" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="84" cy="35" r="2" fill="#FFFFFF" />
        {/* Beak */}
        <path d="M93 34 L106 37 L93 41 Z" fill="#3D2918" />
        {/* Little feet */}
        <path d="M68 78 L66 84 M78 78 L78 84" stroke="#3D2918" strokeWidth="2" strokeLinecap="round" />
      </motion.g>
    </motion.svg>
  );
}

export function SwayingCeiboCluster({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 160 150"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      animate={{ rotate: [-1.5, 2, -1.5] }}
      transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: 'bottom left' }}
    >
      <path d="M18 142 Q42 98 86 48" stroke="#3E7240" strokeWidth="2.8" strokeLinecap="round" />
      {/* Leaves */}
      <path d="M46 106 C28 96, 20 82, 34 74 C46 80, 52 94, 46 106 Z" fill="#8CBF75" stroke="#2E6B30" strokeWidth="1.8" />
      <path d="M64 82 C82 88, 96 80, 92 66 C78 64, 66 72, 64 82 Z" fill="#65A366" stroke="#2E6B30" strokeWidth="1.8" />
      {/* Ceibo crimson-coral blossoms */}
      <g transform="translate(68, 30)">
        <path d="M18 28 C4 18, 2 2, 16 0 C26 4, 28 18, 18 28 Z" fill="#D9534F" stroke="#7A2422" strokeWidth="1.8" />
        <path d="M22 30 C30 14, 44 12, 46 24 C42 36, 30 38, 22 30 Z" fill="#E36D69" stroke="#7A2422" strokeWidth="1.8" />
        <circle cx="20" cy="28" r="3" fill="#F2C53D" />
      </g>
      <g transform="translate(36, 48) scale(0.82)">
        <path d="M18 28 C4 18, 2 2, 16 0 C26 4, 28 18, 18 28 Z" fill="#D9534F" stroke="#7A2422" strokeWidth="1.8" />
        <circle cx="18" cy="26" r="2.8" fill="#F2C53D" />
      </g>
    </motion.svg>
  );
}

export function GlidingLagoonSwan({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 170 110"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      animate={{ y: [0, -4, 0], x: [0, 5, 0] }}
      transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Water ripples */}
      <path d="M22 86 Q60 80 96 86 T148 84" stroke="#329FD8" strokeWidth="2.2" strokeLinecap="round" opacity="0.65" />
      <path d="M36 95 Q74 90 114 95" stroke="#96D5F4" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
      {/* White swan body */}
      <path
        d="M36 74 C38 56, 62 50, 92 56 C106 58, 118 66, 114 78 C92 84, 52 84, 36 74 Z"
        fill="#FFFFFF"
        stroke="#102A3A"
        strokeWidth="2.2"
      />
      {/* Wing detail */}
      <path d="M52 64 Q76 58 96 68" stroke="#96D5F4" strokeWidth="2" strokeLinecap="round" />
      {/* Black neck & head */}
      <path
        d="M104 64 C108 42, 98 22, 110 16 C118 12, 128 16, 128 24 C128 28, 122 30, 118 28 C116 38, 120 52, 114 68 Z"
        fill="#1E2C36"
        stroke="#102A3A"
        strokeWidth="1.8"
      />
      {/* Red/coral beak */}
      <path d="M128 21 L138 24 L128 27 Z" fill="#E36D69" />
      <circle cx="121" cy="20" r="1.4" fill="#FFFFFF" />
    </motion.svg>
  );
}

export function FlutteringDragonfly({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      viewBox="0 0 90 80"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      animate={{ y: [0, -7, 2, -5, 0], x: [0, 5, -3, 4, 0], rotate: [-4, 5, -4] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      {/* Translucent wings */}
      <ellipse cx="32" cy="28" rx="18" ry="8" transform="rotate(-24 32 28)" fill="#96D5F4" fillOpacity="0.45" stroke="#186E9E" strokeWidth="1.6" />
      <ellipse cx="58" cy="28" rx="18" ry="8" transform="rotate(24 58 28)" fill="#96D5F4" fillOpacity="0.45" stroke="#186E9E" strokeWidth="1.6" />
      <ellipse cx="34" cy="40" rx="14" ry="6" transform="rotate(-12 34 40)" fill="#F2C53D" fillOpacity="0.35" stroke="#186E9E" strokeWidth="1.5" />
      <ellipse cx="56" cy="40" rx="14" ry="6" transform="rotate(12 56 40)" fill="#F2C53D" fillOpacity="0.35" stroke="#186E9E" strokeWidth="1.5" />
      {/* Body */}
      <path d="M45 20 L45 64" stroke="#102A3A" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="45" cy="18" r="4" fill="#329FD8" stroke="#102A3A" strokeWidth="1.6" />
    </motion.svg>
  );
}

export type LocalFloraVariant = 'junco' | 'ceibo' | 'cortadera' | 'camalote';

export function LocalFloraCardArt({
  variant,
  className = '',
}: {
  variant: LocalFloraVariant;
  className?: string;
}) {
  if (variant === 'ceibo') {
    return (
      <motion.svg
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        className={`pointer-events-none select-none ${className}`}
        animate={{ rotate: [-1.5, 2, -1.5] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'bottom right' }}
      >
        <path d="M108 116 Q80 76 34 38" stroke="#3E7240" strokeWidth="2.6" strokeLinecap="round" />
        <path d="M84 86 C64 82, 54 70, 62 58 C74 60, 84 72, 84 86 Z" fill="#8CBF75" stroke="#2E6B30" strokeWidth="1.6" />
        <path d="M62 64 C74 48, 90 46, 94 58 C86 68, 72 70, 62 64 Z" fill="#65A366" stroke="#2E6B30" strokeWidth="1.6" />
        <g transform="translate(20, 18)">
          <path d="M18 26 C4 16, 2 2, 16 0 C26 4, 28 18, 18 26 Z" fill="#D9534F" stroke="#7A2422" strokeWidth="1.7" />
          <path d="M22 28 C30 12, 44 10, 46 22 C42 34, 30 36, 22 28 Z" fill="#E36D69" stroke="#7A2422" strokeWidth="1.7" />
          <circle cx="20" cy="26" r="3" fill="#F2C53D" />
        </g>
      </motion.svg>
    );
  }

  if (variant === 'cortadera') {
    return (
      <motion.svg
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        className={`pointer-events-none select-none ${className}`}
        animate={{ rotate: [-2, 2.2, -2] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: 'bottom center' }}
      >
        <path d="M82 118 Q74 72 52 24" stroke="#8C6708" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M96 118 Q94 78 86 38" stroke="#65A366" strokeWidth="2.2" strokeLinecap="round" />
        {/* Golden pampean plumes */}
        <path d="M40 16 C48 12, 60 18, 58 34 C54 44, 42 38, 40 16 Z" fill="#F2C53D" fillOpacity="0.88" stroke="#8C6708" strokeWidth="1.5" />
        <path d="M76 32 C84 26, 96 32, 92 48 C88 54, 78 48, 76 32 Z" fill="#F6D56B" fillOpacity="0.85" stroke="#8C6708" strokeWidth="1.4" />
        <path d="M74 118 C54 92, 34 80, 18 68 C38 86, 56 102, 74 118 Z" fill="#8CBF75" fillOpacity="0.55" />
      </motion.svg>
    );
  }

  if (variant === 'camalote') {
    return (
      <motion.svg
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        className={`pointer-events-none select-none ${className}`}
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        {/* Water ripple & floating lagoon pads */}
        <path d="M16 104 Q58 96 106 104" stroke="#329FD8" strokeWidth="2" strokeLinecap="round" opacity="0.65" />
        <ellipse cx="44" cy="88" rx="22" ry="12" fill="#8CBF75" stroke="#2E6B30" strokeWidth="1.7" />
        <ellipse cx="82" cy="90" rx="20" ry="11" fill="#65A366" stroke="#2E6B30" strokeWidth="1.7" />
        {/* Blooming camalote flower */}
        <path d="M64 84 Q64 56 62 34" stroke="#2E6B30" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M62 34 C50 26, 48 14, 62 12 C76 14, 74 26, 62 34 Z" fill="#96D5F4" stroke="#186E9E" strokeWidth="1.6" />
        <path d="M56 38 C42 36, 40 26, 52 24" fill="#329FD8" fillOpacity="0.7" stroke="#186E9E" strokeWidth="1.5" />
        <path d="M68 38 C82 36, 84 26, 72 24" fill="#329FD8" fillOpacity="0.7" stroke="#186E9E" strokeWidth="1.5" />
        <circle cx="62" cy="22" r="3" fill="#F2C53D" />
      </motion.svg>
    );
  }

  return (
    <motion.svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      animate={{ rotate: [-1.5, 1.8, -1.5] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      style={{ transformOrigin: 'bottom center' }}
    >
      <path d="M36 118 Q40 72 28 24" stroke="#3E7240" strokeWidth="2.3" strokeLinecap="round" />
      <rect x="23" y="20" width="7.5" height="24" rx="3.75" transform="rotate(-10 23 20)" fill="#65A366" />
      <path d="M66 118 Q72 68 64 14" stroke="#3E7240" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="60" y="10" width="8" height="26" rx="4" transform="rotate(-3 60 10)" fill="#4D8850" />
      <path d="M92 118 Q102 74 112 36" stroke="#329FD8" strokeWidth="2" strokeLinecap="round" opacity="0.75" />
      <path d="M50 118 C34 94, 20 80, 12 62 C26 76, 40 94, 50 118 Z" fill="#8CBF75" fillOpacity="0.5" />
    </motion.svg>
  );
}

