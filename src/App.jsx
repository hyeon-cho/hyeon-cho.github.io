import MeshBackground from './components/MeshBackground.jsx'
import GlassFilters from './components/GlassFilters.jsx'
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
      <GlassFilters />
      <main className="page stack">
        <Hero />

        <Section icon="✦" title="First-Author Publications" plain>
          <PublicationList items={firstAuthorPubs} />
        </Section>

        <Section icon="✧" title="Co-Authored Publications" plain>
          <PublicationList items={coAuthoredPubs} />
        </Section>

        <Section icon="🎓" title="Education" plain>
          <Education />
        </Section>

        <Section icon="🏆" title="Awards" plain>
          <Awards />
        </Section>

        <Section icon="🛠️" title="Project" plain>
          <Projects />
        </Section>

        <Section icon="📜" title="Patents" plain>
          <Patents />
        </Section>

        <Footer />
      </main>
    </>
  )
}
