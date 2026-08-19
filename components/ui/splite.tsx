'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  onLoad?: () => void
  fallback?: React.ReactNode
}

export function SplineScene({ scene, className, onLoad, fallback }: SplineSceneProps) {
  return (
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
      <Spline
        scene={scene}
        className={className}
        onLoad={onLoad}
      />
    </Suspense>
  )
}
