export default function Education() {
  return (
    <div className="panel-body">
      <div className="education-item">
        <div className="education-logo">
          <img src="/images/korea_univ.png" alt="Korea University logo" />
        </div>
        <div className="education-info">
          <span className="degree">Integrated M.S. &amp; Ph.D. in Electrical Engineering</span>{' '}
          <span className="place">| Korea University</span>
          <br />
          <span className="dates">Mar. 2024 – Present</span>
        </div>
        <div className="education-details">
          <strong>Research:</strong> Generative Models, World Models, and Hopfield Networks
          <br />
          <strong>Advisor:</strong> Prof.{' '}
          <a href="https://ipa.korea.ac.kr/" target="_blank" rel="noopener noreferrer">
            Kyong Hwan Jin
          </a>
        </div>
      </div>

      <div className="education-item">
        <div className="education-logo">
          <img src="/images/gachon_univ.png" alt="Gachon University logo" />
        </div>
        <div className="education-info">
          <span className="degree">B.S. in Software</span> <span className="place">| Gachon University</span>
          <br />
          <span className="dates">Mar. 2020 – Feb. 2024</span>
        </div>
        <div className="education-details">
          <strong>Research:</strong> Image Super-Resolution
          <br />
          <strong>Advisor:</strong> Prof.{' '}
          <a href="https://sites.google.com/view/aikiho/professor" target="_blank" rel="noopener noreferrer">
            Kiho Choi
          </a>{' '}
          <span style={{ color: 'var(--muted)' }}>(currently at Kyung Hee University)</span>
        </div>
      </div>
    </div>
  )
}
