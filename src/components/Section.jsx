import { useState } from 'react'

/** Collapsible section. Header is a CSS-glass button (safe, keeps click semantics). */
export default function Section({ icon, title, defaultOpen = true, children }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <section className="section">
      <button
        type="button"
        className="section-header glass-panel glass-panel--css glass-panel--interactive"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {icon && <span aria-hidden="true">{icon}</span>}
        <span>{title}</span>
        <span className="chev" aria-hidden="true">▾</span>
      </button>
      <div className="section-body" hidden={!open}>
        {children}
      </div>
    </section>
  )
}
