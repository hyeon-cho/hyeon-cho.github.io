const links = [
  { href: '/files/cv.pdf', title: 'Curriculum Vitae', icon: 'ai ai-cv', external: true },
  { href: 'mailto:hyun_cho@korea.ac.kr', title: 'Email', icon: 'fas fa-envelope' },
  {
    href: 'https://scholar.google.com/citations?user=MRz6g3QAAAAJ&hl=ko',
    title: 'Google Scholar',
    icon: 'ai ai-google-scholar',
    external: true,
  },
  { href: 'https://www.linkedin.com/in/chohyunmin/', title: 'LinkedIn', icon: 'fab fa-linkedin-in', external: true },
  { href: 'https://github.com/hyeon-cho', title: 'GitHub', icon: 'fab fa-github', external: true },
]

export default function ProfileLinks() {
  return (
    <div className="profile-links">
      {links.map((l) => (
        <a
          key={l.title}
          className="profile-link"
          href={l.href}
          title={l.title}
          aria-label={l.title}
          {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          <i className={l.icon} aria-hidden="true" />
        </a>
      ))}
    </div>
  )
}
