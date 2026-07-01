import { useState } from 'react'

/**
 * Collapsible section.
 * - default: header is a CSS-glass pill.
 * - plain:   no glass anywhere (header is bare text), for the lower
 *            sections that should sit directly on the background.
 */
export default function Section({ icon, title, defaultOpen = true, plain = false, children }) {
  const [open, setOpen] = useState(defaultOpen)
  const headerCls = plain
    ? 'section-header section-header--plain'
    : 'section-header glass-panel glass-panel--css glass-panel--interactive'
  return (
    <section className="section">
      <button type="button" className={headerCls} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
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
