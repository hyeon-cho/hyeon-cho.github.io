/**
 * Full-width liquid-glass panel: a plain block element (so hero/cards flow
 * normally and never break layout) that gets its glass from CSS —
 * `.glass-panel--css` (frost) plus the SVG displacement + specular treatment
 * on `.hero` / `.pub-card` in base.css.
 */
export default function GlassPanel({ className = '', interactive = false, children }) {
  const cls = `glass-panel glass-panel--css${interactive ? ' glass-panel--interactive' : ''} ${className}`.trim()
  return <div className={cls}>{children}</div>
}
