/**
 * Hidden SVG filter used by the liquid-glass panels (Chromium only).
 * `backdrop-filter: url(#liquid-glass)` runs this over the backdrop so the mesh
 * behind hero/cards genuinely refracts. Safari/Firefox ignore SVG-in-backdrop
 * and fall back to the plain blur declared alongside it in base.css.
 */
export default function GlassFilters() {
  return (
    <svg className="glass-defs" width="0" height="0" aria-hidden="true" focusable="false">
      <defs>
        <filter
          id="liquid-glass"
          x="-15%"
          y="-15%"
          width="130%"
          height="130%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.012"
            numOctaves="2"
            seed="11"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.1" result="map" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="map"
            scale="55"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )
}
