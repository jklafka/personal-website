import { useState, useEffect, useRef } from 'react'

type Mode = 'work' | 'shortBreak' | 'longBreak'

const DURATIONS: Record<Mode, number> = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
}

const MODE_LABELS: Record<Mode, string> = {
  work: 'Work',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
}

function playDone() {
  const ctx = new AudioContext()
  const osc = ctx.createOscillator()
  const gain = ctx.createGain()
  osc.connect(gain)
  gain.connect(ctx.destination)
  osc.frequency.value = 880
  gain.gain.setValueAtTime(0.3, ctx.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1)
  osc.start()
  osc.stop(ctx.currentTime + 1)
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function PomodoroTimer() {
  const [mode, setMode] = useState<Mode>('work')
  const [secondsLeft, setSecondsLeft] = useState(DURATIONS.work)
  const [isRunning, setIsRunning] = useState(false)
  const [pomodorosCompleted, setPomodorosCompleted] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Track mode in a ref so the interval callback can read the latest value
  const modeRef = useRef<Mode>(mode)
  const pomodorosRef = useRef(pomodorosCompleted)
  modeRef.current = mode
  pomodorosRef.current = pomodorosCompleted

  function clearTimer() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  function switchMode(newMode: Mode) {
    clearTimer()
    setIsRunning(false)
    setMode(newMode)
    setSecondsLeft(DURATIONS[newMode])
  }

  function handleComplete() {
    clearTimer()
    setIsRunning(false)
    playDone()

    if (modeRef.current === 'work') {
      const next = pomodorosRef.current + 1
      setPomodorosCompleted(next)
      setMode(next % 4 === 0 ? 'longBreak' : 'shortBreak')
      setSecondsLeft(next % 4 === 0 ? DURATIONS.longBreak : DURATIONS.shortBreak)
    } else {
      setMode('work')
      setSecondsLeft(DURATIONS.work)
    }
  }

  function toggle() {
    if (isRunning) {
      clearTimer()
      setIsRunning(false)
    } else {
      setIsRunning(true)
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            handleComplete()
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
  }

  function reset() {
    clearTimer()
    setIsRunning(false)
    setSecondsLeft(DURATIONS[mode])
  }

  // Clean up interval on unmount
  useEffect(() => () => clearTimer(), [])

  const dotCount = pomodorosCompleted % 4 || (pomodorosCompleted > 0 && pomodorosCompleted % 4 === 0 ? 4 : 0)

  return (
    <main className="max-w-4xl mx-auto px-6 py-14">
      <h1 className="text-3xl font-bold tracking-tight mb-2">Pomodoro Timer</h1>
      <p className="text-neutral-500 dark:text-neutral-400 mb-10 text-sm">
        25-minute focused work sessions with short and long breaks.
      </p>

      <div className="flex flex-col items-center gap-8">
        {/* Mode tabs */}
        <div className="flex gap-2">
          {(Object.keys(DURATIONS) as Mode[]).map((m) => (
            <button
              key={m}
              onClick={() => switchMode(m)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                mode === m
                  ? 'bg-blue-600 text-white'
                  : 'border border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              }`}
            >
              {MODE_LABELS[m]}
            </button>
          ))}
        </div>

        {/* Timer display */}
        <div className="text-8xl font-mono font-bold tracking-tight">
          {formatTime(secondsLeft)}
        </div>

        {/* Pomodoro dots */}
        <div className="flex items-center gap-3">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-colors ${
                i < dotCount
                  ? 'bg-blue-600'
                  : 'border border-neutral-400 dark:border-neutral-600'
              }`}
            />
          ))}
          {pomodorosCompleted >= 4 && (
            <span className="text-xs text-neutral-500 dark:text-neutral-400 ml-1">
              +{Math.floor(pomodorosCompleted / 4) * 4}
            </span>
          )}
        </div>

        {/* Controls */}
        <div className="flex gap-3">
          <button
            onClick={toggle}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            {isRunning ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={reset}
            className="px-6 py-2 border border-neutral-300 dark:border-neutral-700 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            Reset
          </button>
        </div>

        {pomodorosCompleted > 0 && (
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {pomodorosCompleted} pomodoro{pomodorosCompleted !== 1 ? 's' : ''} completed this session
          </p>
        )}
      </div>
    </main>
  )
}
