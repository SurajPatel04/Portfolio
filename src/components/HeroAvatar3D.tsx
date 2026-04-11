import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import surajPhoto from '../assets/Suraj Patel New.png';

// ─── Holographic Scan Line Overlay ───────────────────────────────────────────
function HoloScanLines() {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[2rem] overflow-hidden opacity-[0.04] mix-blend-overlay"
      style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,218,248,1) 2px, rgba(0,218,248,1) 3px)',
        backgroundSize: '100% 6px',
      }}
    />
  );
}

// ─── Rotating Orbital Ring ────────────────────────────────────────────────────
function RotatingRing({
  size,
  borderColor,
  duration,
  reverse = false,
  tiltX = 0,
  tiltY = 0,
  opacity = 0.5,
}: {
  size: number;
  borderColor: string;
  duration: number;
  reverse?: boolean;
  tiltX?: number;
  tiltY?: number;
  opacity?: number;
}) {
  return (
    <motion.div
      className="absolute rounded-full border pointer-events-none"
      style={{
        width: size,
        height: size,
        left: '50%',
        top: '50%',
        x: '-50%',
        y: '-50%',
        borderColor,
        borderWidth: 1.5,
        opacity,
        rotateX: tiltX,
        rotateY: tiltY,
      }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    />
  );
}

// ─── Pulsing Orbiting Dot ────────────────────────────────────────────────────
function FloatingDot({
  angle,
  radius,
  color,
  size = 5,
  delay = 0,
}: {
  angle: number;
  radius: number;
  color: string;
  size?: number;
  delay?: number;
}) {
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        left: '50%',
        top: '50%',
        marginLeft: x - size / 2,
        marginTop: y - size / 2,
        boxShadow: `0 0 ${size * 2}px ${color}`,
      }}
      animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
      transition={{ duration: 2.5, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  );
}

// ─── Corner Accent ────────────────────────────────────────────────────────────
function CornerAccent({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const styles: Record<string, React.CSSProperties> = {
    tl: { top: 0, left: 0, borderTop: '2px solid rgba(0,218,248,0.7)', borderLeft: '2px solid rgba(0,218,248,0.7)', borderRadius: '8px 0 0 0' },
    tr: { top: 0, right: 0, borderTop: '2px solid rgba(0,218,248,0.7)', borderRight: '2px solid rgba(0,218,248,0.7)', borderRadius: '0 8px 0 0' },
    bl: { bottom: 0, left: 0, borderBottom: '2px solid rgba(0,218,248,0.7)', borderLeft: '2px solid rgba(0,218,248,0.7)', borderRadius: '0 0 0 8px' },
    br: { bottom: 0, right: 0, borderBottom: '2px solid rgba(0,218,248,0.7)', borderRight: '2px solid rgba(0,218,248,0.7)', borderRadius: '0 0 8px 0' },
  };
  return (
    <div
      className="absolute w-5 h-5 pointer-events-none"
      style={styles[position]}
    />
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function HeroAvatar3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Spring-physics mouse tracking → smooth 3D tilt
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 80, damping: 20 });
  const springY = useSpring(rawY, { stiffness: 80, damping: 20 });

  const rotateY = useTransform(springX, [-1, 1], [-18, 18]);
  const rotateX = useTransform(springY, [-1, 1], [12, -12]);
  const glowX = useTransform(springX, [-1, 1], ['20%', '80%']);
  const glowY = useTransform(springY, [-1, 1], ['20%', '80%']);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      rawX.set((e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2));
      rawY.set((e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2));
    },
    [rawX, rawY]
  );

  const handleMouseLeave = useCallback(() => {
    rawX.set(0);
    rawY.set(0);
  }, [rawX, rawY]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1200px' }}
    >
      {/* ── Reactive ambient glow that tracks with mouse ───────────── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 320,
          height: 320,
          left: glowX,
          top: glowY,
          transform: 'translate(-50%, -50%)',
          background:
            'radial-gradient(circle, rgba(0,218,248,0.20) 0%, rgba(167,139,250,0.12) 55%, transparent 100%)',
          filter: 'blur(50px)',
        }}
      />

      {/* ── Orbital rings (3D tilted, rotating) ───────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: '800px' }}>
        <RotatingRing size={440} borderColor="rgba(0,218,248,0.22)" duration={20} tiltX={72} opacity={0.65} />
        <RotatingRing size={375} borderColor="rgba(167,139,250,0.28)" duration={13} reverse tiltX={48} tiltY={18} opacity={0.5} />
        <RotatingRing size={305} borderColor="rgba(0,218,248,0.15)" duration={25} tiltX={22} tiltY={65} opacity={0.4} />
      </div>

      {/* ── Orbiting dots ─────────────────────────────────────────── */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 72, 144, 216, 288].map((angle, i) => (
          <FloatingDot key={`c${angle}`} angle={angle} radius={188} color="#00daf8" size={5} delay={i * 0.5} />
        ))}
        {[36, 108, 180, 252, 324].map((angle, i) => (
          <FloatingDot key={`p${angle}`} angle={angle} radius={152} color="#a78bfa" size={4} delay={i * 0.4 + 0.25} />
        ))}
      </div>

      {/* ── 3D Floating Card ──────────────────────────────────────── */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10"
      >
        {/* Soft glow behind card */}
        <div
          className="absolute -inset-6 rounded-[3rem] pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse, rgba(0,218,248,0.18) 0%, rgba(167,139,250,0.10) 55%, transparent 85%)',
            filter: 'blur(24px)',
          }}
        />

        {/* Glass card */}
        <div
          className="relative overflow-hidden rounded-[2rem]"
          style={{
            width: 300,
            height: 370,
            background: 'rgba(10,15,28,0.25)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(0,218,248,0.22)',
            boxShadow:
              '0 0 0 1px rgba(167,139,250,0.12) inset, 0 32px 64px rgba(0,0,0,0.65), 0 0 48px rgba(0,218,248,0.10)',
          }}
        >
          {/* Scan lines */}
          <HoloScanLines />

          {/* Top edge shimmer */}
          <div
            className="absolute top-0 left-0 right-0 h-px pointer-events-none z-10"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,218,248,0.7), transparent)' }}
          />

          {/* Photo — PNG with transparent background, no processing needed */}
          <img
            src={surajPhoto}
            alt="Suraj Patel"
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              height: '105%',
              width: 'auto',
              objectFit: 'contain',
              objectPosition: 'bottom center',
              maxWidth: '110%',
            }}
          />

          {/* Bottom tinted glow */}
          <div
            className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to top, rgba(0,218,248,0.07) 0%, transparent 100%)' }}
          />

          {/* Corner accents */}
          <CornerAccent position="tl" />
          <CornerAccent position="tr" />
          <CornerAccent position="bl" />
          <CornerAccent position="br" />
        </div>

        {/* Label beneath card */}
        <div className="mt-4 text-center">
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase"
            style={{ color: 'rgba(0,218,248,0.65)' }}
          >
            Full Stack · AI Engineer
          </p>
        </div>
      </motion.div>
    </div>
  );
}
