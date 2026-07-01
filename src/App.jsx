import MeshBackground from './components/MeshBackground.jsx'
import Hero from './components/Hero.jsx'
import Section from './components/Section.jsx'
import PublicationList from './components/PublicationList.jsx'
import Education from './components/Education.jsx'
import Awards from './components/Awards.jsx'
import Projects from './components/Projects.jsx'
import Patents from './components/Patents.jsx'
import Footer from './components/Footer.jsx'
import { firstAuthorPubs, coAuthoredPubs } from './data/publications.js'

export default function App() {
  return (
    <>
      <MeshBackground />
      <main className="page stack">
        <Hero />

        <Section icon="✦" title="First-Author Publications">
          <PublicationList items={firstAuthorPubs} />
        </Section>

        <Section icon="✧" title="Co-Authored Publications">
          <PublicationList items={coAuthoredPubs} />
        </Section>

        <Section icon="🎓" title="Education">
          <Education />
        </Section>

        <Section icon="🏆" title="Awards">
          <Awards />
        </Section>

        <Section icon="🛠️" title="Project">
          <Projects />
        </Section>

        <Section icon="📜" title="Patents">
          <Patents />
        </Section>

        <Footer />
      </main>
    </>
  )
}
