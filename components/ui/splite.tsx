'use client'

import { Suspense, lazy, useCallback, useEffect, useRef } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

/** The subset of the Spline runtime Application we drive. */
type SplineApp = {
  play?: () => void
  stop?: () => void
}

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: () => void
  fallback?: React.ReactNode
}

/**
 * A Spline scene that only renders while it is actually on screen.
 *
 * The runtime otherwise drives its WebGL loop for the lifetime of the page, so
 * the 3D scene keeps burning GPU and battery while the user reads the footer.
 * An IntersectionObserver stops the loop once the canvas leaves the viewport and
 * restarts it when it comes back; the same happens when the tab is hidden.
 */
export function SplineScene({ scene, className, onLoad, fallback }: SplineSceneProps) {
  const appRef = useRef<SplineApp | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const visibleRef = useRef(true)

  const handleLoad = useCallback(
    (app: SplineApp) => {
      appRef.current = app
      // The observer may have already fired before the scene finished loading.
      if (!visibleRef.current) app.stop?.()
      onLoad?.()
    },
    [onLoad]
  )

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const setRunning = (running: boolean) => {
      visibleRef.current = running
      if (running) appRef.current?.play?.()
      else appRef.current?.stop?.()
    }

    const observer = new IntersectionObserver(
      ([entry]) => setRunning(entry.isIntersecting),
      { rootMargin: '80px' }
    )
    observer.observe(el)

    const onVisibility = () => {
      if (document.hidden) setRunning(false)
      else if (el.getBoundingClientRect().bottom > 0) setRunning(true)
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div ref={containerRef} className={className}>
      <Suspense
        fallback={
          fallback !== undefined ? (
            fallback
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="loader">Loading 3D...</span>
            </div>
          )
        }
      >
        <Spline scene={scene} className="w-full h-full" onLoad={handleLoad} />
      </Suspense>
    </div>
  )
}
