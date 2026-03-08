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

        {/* Mars-like rocky planet */}
        <div
          className="absolute rounded-full"
          style={{
            width: 88,
            height: 88,
            top: '11%',
            right: '9%',
            background:
              'radial-gradient(circle at 33% 28%, #e8835a, #c25430, #7a2e15)',
            boxShadow:
              '0 0 28px rgba(194, 84, 48, 0.35), inset -18px -12px 32px rgba(0,0,0,0.55)',
          }}
        />

        {/* Small moon near Mars */}
        <div
          className="absolute rounded-full"
          style={{
            width: 16,
            height: 16,
            top: '7%',
            right: '17%',
            background:
              'radial-gradient(circle at 38% 33%, #d0d0d0, #8a8a8a, #505050)',
            boxShadow: 'inset -4px -3px 7px rgba(0,0,0,0.55)',
          }}
        />

        {/* Neptune-like ice giant */}
        <div
          className="absolute rounded-full"
          style={{
            width: 58,
            height: 58,
            bottom: '17%',
            left: '5%',
            background:
              'radial-gradient(circle at 35% 28%, #7ec8e8, #3a7fc1, #18346e)',
            boxShadow:
              '0 0 24px rgba(58, 127, 193, 0.4), inset -12px -9px 22px rgba(0,0,0,0.45)',
          }}
        />

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
