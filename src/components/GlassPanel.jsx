import { lazy, Suspense } from 'react'
import ErrorBoundary from './ErrorBoundary.jsx'

/**
 * Liquid-glass surface for publication cards and the hero panel.
 *
 * Two-layer, fail-safe design (this build host has no browser to verify the
 * refraction, so the site must look right even if the engine misbehaves):
 *
 *   1. CSS glass base (`.glass-panel--css`) — guaranteed cross-browser,
 *      samples the real mesh behind the element (perfect alignment), text
 *      stays crisp. Shown while the engine loads and if it ever fails.
 *   2. samasante <Glass> — true SVG-displacement refraction of the backdrop,
 *      children crisp on top. Loaded LAZILY so a bad/missing export degrades
 *      to the CSS layer at runtime instead of breaking the whole bundle.
 *
 * To disable the JS layer entirely (pure CSS-glass-over-mesh — still a full
 * liquid-glass look), set USE_JS_REFRACTION = false.
 */
const USE_JS_REFRACTION = true

const LazyGlass = USE_JS_REFRACTION
  ? lazy(() =>
      import('@samasante/liquid-glass').then((m) => ({ default: m.Glass })),
    )
  : null

export default function GlassPanel({
  as: Tag = 'div',
  className = '',
  interactive = false,
  optics,
  children,
  ...rest
}) {
  const interactiveCls = interactive ? ' glass-panel--interactive' : ''
  const cssClass = `glass-panel glass-panel--css${interactiveCls} ${className}`.trim()

  const fallback = (
    <Tag className={cssClass} {...rest}>
      {children}
    </Tag>
  )

  if (!LazyGlass) return fallback

  return (
    <ErrorBoundary fallback={fallback}>
      <Suspense fallback={fallback}>
        <LazyGlass
          as={Tag}
          className={`glass-panel glass-panel--js${interactiveCls} ${className}`.trim()}
          optics={{ frost: 6, dispersion: 0.35, bend: 0.5, ...optics }}
          {...rest}
        >
          {children}
        </LazyGlass>
      </Suspense>
    </ErrorBoundary>
  )
}
