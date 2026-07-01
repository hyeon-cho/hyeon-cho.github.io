import GlassPanel from './GlassPanel.jsx'
import ProfileLinks from './ProfileLinks.jsx'

export default function Hero() {
  return (
    <GlassPanel padding="26px 30px">
      {/* Flex lives on this inner wrapper, not on the GlassPanel itself:
          samasante <Glass> injects its own DOM around `children`, so a
          layout applied to the panel element would not reach the columns. */}
      <div className="hero-inner">
        <div className="hero-text">
          <span className="name">Hyunmin Cho</span>
          <p>
            I am a third-year Integrated M.S.-Ph.D. student, currently in my first Ph.D.-level year at{' '}
            <a href="https://www.korea.edu/sites/en/index.do" target="_blank" rel="noopener noreferrer">
              Korea University
            </a>
            ,{' '}
            <a href="https://ipa.korea.ac.kr/" target="_blank" rel="noopener noreferrer">
              Image Processing Algorithm Lab.
            </a>
            , advised by Prof.{' '}
            <a
              href="https://scholar.google.com/citations?user=aLYNnyoAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kyong Hwan Jin
            </a>
            .
          </p>
          <p>
            My research interests include <strong>generative models</strong>,{' '}
            <strong>controllable generation</strong>, and <strong>world models</strong>. I aim to build
            generative systems that translate human intent into flexible and modifiable digital reality.
          </p>
          <p className="contact-line">
            Feel free to send me an e-mail if you would like to chat!
            <br />
            <strong>Contact</strong>: hyun_cho@korea.ac.kr
          </p>
          <ProfileLinks />
        </div>
        <div className="hero-photo">
          <a href="/images/hyuncho.JPG" target="_blank" rel="noopener noreferrer">
            <img src="/images/hyuncho.JPG" alt="Hyunmin Cho" />
          </a>
        </div>
      </div>
    </GlassPanel>
  )
}
