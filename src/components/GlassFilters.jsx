/**
 * Hidden SVG filter used by the liquid-glass panels (Chromium only).
 * `backdrop-filter: url(#liquid-glass)` runs this over the backdrop, so the
 * mesh behind the hero and publication cards genuinely refracts. Safari and
 * Firefox ignore SVG filters in backdrop-filter and fall back to plain blur
 * (handled in base.css via a duplicate backdrop-filter declaration).
 */
export default function GlassFilters() {
  return (
    <svg className="glass-defs" width="0" height="0" aria-hidden="true" focusable="false">
      <defs>
        <filter
          id="liquid-glass"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.010"
            numOctaves="2"
            seed="14"
            result="turb"
          />
          <feGaussianBlur in="turb" stdDeviation="1.1" result="turbSoft" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbSoft"
            scale="40"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  )
}
