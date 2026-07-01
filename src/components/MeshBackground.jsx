/**
 * Fixed, full-viewport animated gradient mesh.
 * This is the colour/contrast layer that makes the glass panels
 * actually read as glass (the old site sat on flat near-white, so the
 * existing backdrop-filter glass was invisible). Kept light and slow.
 */
export default function MeshBackground() {
  return (
    <div className="mesh-bg" aria-hidden="true">
      <span className="mesh-blob mesh-blob--1" />
      <span className="mesh-blob mesh-blob--3" />
      <span className="mesh-blob mesh-blob--4" />
    </div>
  )
}
