import LiquidGlass from 'liquid-glass-react'
import ErrorBoundary from './ErrorBoundary.jsx'

/**
 * Liquid-glass surface (rdev/liquid-glass-react) for the hero + publication
 * cards. Real refraction + chromatic aberration in Chrome/Edge; Safari and
 * Firefox show frost only (documented library limitation).
 *
 * Wrapped in an ErrorBoundary that degrades to a plain CSS-glass card if the
 * library ever throws (this build host has no browser to verify it).
 *
 * Tunables (rdev props): displacementScale, blurAmount, saturation,
 * aberrationIntensity, elasticity, cornerRadius. Left mostly at library
 * defaults on purpose.
 */
export default function GlassPanel({ className = '', cornerRadius = 22, padding = '22px 24px', children }) {
  const fallback = (
    <div className={`glass-panel glass-panel--css ${className}`.trim()} style={{ padding }}>
      {children}
    </div>
  )

  return (
    <ErrorBoundary fallback={fallback}>
      <LiquidGlass
        cornerRadius={cornerRadius}
        padding={padding}
        elasticity={0.1}
        className={`glass-liquid ${className}`.trim()}
        style={{ width: '100%' }}
      >
        {children}
      </LiquidGlass>
    </ErrorBoundary>
  )
}
