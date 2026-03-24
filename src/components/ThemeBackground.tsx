import { useMemo } from 'react'
import { useTheme } from '../App'

const STAR_COUNT = 200

interface StarData {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

function generateStars(): StarData[] {
  return Array.from({ length: STAR_COUNT }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.2 + 0.4,
    duration: Math.random() * 4 + 1.5,
    delay: Math.random() * 6,
  }))
}

function Cloud({
  top,
  left,
  width,
  floatDuration,
  floatDelay,
}: {
  top: string
  left: string
  width: number
  floatDuration: number
  floatDelay: number
}) {
  const h = Math.round(width * 0.38)
  const bumpL = Math.round(width * 0.09)
  const bumpM = Math.round(width * 0.30)
  const bumpR = Math.round(width * 0.60)
  const bumpSizeL = Math.round(width * 0.44)
  const bumpSizeM = Math.round(width * 0.55)
  const bumpSizeR = Math.round(width * 0.38)

  return (
    <div className="absolute pointer-events-none" style={{ top, left }}>
      <div
        className="cloud-float relative"
        style={{ width, height: width * 0.6, animationDuration: `${floatDuration}s`, animationDelay: `${floatDelay}s` }}
      >
        {/* Body */}
        <div
          className="absolute rounded-full bg-white/90"
          style={{ width, height: h, bottom: 0, left: 0 }}
        />
        {/* Left bump */}
        <div
          className="absolute rounded-full bg-white/90"
          style={{ width: bumpSizeL, height: bumpSizeL, bottom: h * 0.55, left: bumpL }}
        />
        {/* Middle bump (tallest) */}
        <div
          className="absolute rounded-full bg-white/95"
          style={{ width: bumpSizeM, height: bumpSizeM, bottom: h * 0.6, left: bumpM }}
        />
        {/* Right bump */}
        <div
          className="absolute rounded-full bg-white/90"
          style={{ width: bumpSizeR, height: bumpSizeR, bottom: h * 0.45, left: bumpR }}
        />
      </div>
    </div>
  )
}

export default function ThemeBackground() {
  const { theme } = useTheme()
  const stars = useMemo(() => generateStars(), [])

  if (theme === 'dark') {
    return (
      <div
        className="fixed inset-0 -z-10 overflow-hidden"
        style={{
          background:
            'linear-gradient(160deg, #020818 0%, #080f28 35%, #0c1a3a 65%, #160924 100%)',
        }}
      >
        {/* Stars */}
        {stars.map((star) => (
          <div
            key={star.id}
            className="star-twinkle absolute rounded-full bg-white"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}

        {/* Moon */}
        <div
          className="absolute rounded-full"
          style={{
            width: 140,
            height: 140,
            top: '7%',
            right: '7%',
            background:
              'radial-gradient(circle at 38% 32%, #e8e8e0, #c0bfb0, #8a8878, #5a5a50)',
            boxShadow:
              '0 0 40px rgba(220, 220, 200, 0.18), 0 0 80px rgba(200, 200, 180, 0.08), inset -28px -20px 48px rgba(0,0,0,0.5)',
            overflow: 'hidden',
            position: 'absolute',
          }}
        >
          {/* Crater 1 — large, upper left */}
          <div style={{
            position: 'absolute', borderRadius: '50%',
            width: 34, height: 34, top: 20, left: 18,
            background: 'radial-gradient(circle at 40% 35%, #b8b7a8, #9a9888)',
            boxShadow: 'inset 3px 3px 8px rgba(0,0,0,0.45), inset -1px -1px 3px rgba(255,255,255,0.12)',
          }} />
          {/* Crater 2 — medium, right side */}
          <div style={{
            position: 'absolute', borderRadius: '50%',
            width: 22, height: 22, top: 52, left: 90,
            background: 'radial-gradient(circle at 38% 33%, #c0bfb0, #9a9888)',
            boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.4), inset -1px -1px 2px rgba(255,255,255,0.1)',
          }} />
          {/* Crater 3 — small, lower center */}
          <div style={{
            position: 'absolute', borderRadius: '50%',
            width: 14, height: 14, top: 90, left: 58,
            background: 'radial-gradient(circle at 40% 35%, #b0afa0, #929080)',
            boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.4)',
          }} />
          {/* Crater 4 — small, lower left */}
          <div style={{
            position: 'absolute', borderRadius: '50%',
            width: 18, height: 18, top: 100, left: 28,
            background: 'radial-gradient(circle at 38% 33%, #b8b7a8, #9c9a8a)',
            boxShadow: 'inset 2px 2px 6px rgba(0,0,0,0.38)',
          }} />
          {/* Crater 5 — tiny, upper right */}
          <div style={{
            position: 'absolute', borderRadius: '50%',
            width: 10, height: 10, top: 30, left: 100,
            background: 'radial-gradient(circle at 38% 33%, #c8c7b8, #a8a798)',
            boxShadow: 'inset 1px 1px 4px rgba(0,0,0,0.35)',
          }} />
          {/* Mare (dark patch) — lower right area */}
          <div style={{
            position: 'absolute', borderRadius: '50%',
            width: 48, height: 36, top: 78, left: 72,
            background: 'rgba(60,58,50,0.22)',
          }} />
          {/* Mare (dark patch) — upper center */}
          <div style={{
            position: 'absolute', borderRadius: '50%',
            width: 30, height: 22, top: 38, left: 52,
            background: 'rgba(55,53,45,0.18)',
          }} />
        </div>

        {/* Distant tiny star cluster (brightest stars slightly larger) */}
        {[
          { x: 48, y: 5, s: 3.5 },
          { x: 50, y: 3.5, s: 2.5 },
          { x: 52, y: 6, s: 2 },
          { x: 49.5, y: 7, s: 1.5 },
        ].map((s, i) => (
          <div
            key={`cluster-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.s,
              height: s.s,
              background: 'white',
              boxShadow: '0 0 4px 1px rgba(180,200,255,0.7)',
            }}
          />
        ))}
      </div>
    )
  }

  // Light mode — daytime sky
  return (
    <div
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          'linear-gradient(to bottom, #38bdf8 0%, #7dd3fc 30%, #bae6fd 65%, #e0f2fe 100%)',
      }}
    >
      {/* Sun */}
      <div
        className="sun-pulse absolute rounded-full"
        style={{
          width: 82,
          height: 82,
          top: '6%',
          right: '11%',
          background:
            'radial-gradient(circle at 40% 35%, #fffde7, #ffee58, #ffc107)',
        }}
      />

      {/* Clouds */}
      <Cloud top="10%" left="3%"  width={160} floatDuration={9}  floatDelay={0}   />
      <Cloud top="6%"  left="30%" width={120} floatDuration={11} floatDelay={2.5} />
      <Cloud top="20%" left="55%" width={190} floatDuration={13} floatDelay={1}   />
      <Cloud top="32%" left="10%" width={100} floatDuration={8}  floatDelay={4}   />
      <Cloud top="15%" left="78%" width={130} floatDuration={10} floatDelay={0.5} />
      <Cloud top="42%" left="40%" width={85}  floatDuration={12} floatDelay={3}   />
    </div>
  )
}
