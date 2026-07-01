import GlassPanel from './GlassPanel.jsx'

function Author({ a }) {
  let inner
  if (a.first) inner = <span className="first-author"><strong>{a.name}</strong></span>
  else if (a.me) inner = <strong>{a.name}</strong>
  else if (a.url)
    inner = (
      <a href={a.url} target="_blank" rel="noopener noreferrer">
        {a.name}
      </a>
    )
  else inner = <span>{a.name}</span>

  return (
    <>
      {inner}
      {a.star && (
        <strong>
          <sup>*</sup>
        </strong>
      )}
      {a.dagger && <sup>†</sup>}
    </>
  )
}

function Authors({ authors, note }) {
  return (
    <div className="pub-authors">
      {authors.map((a, i) => (
        <span key={i}>
          {i > 0 && ', '}
          {authors.length > 1 && i === authors.length - 1 && 'and '}
          <Author a={a} />
        </span>
      ))}
      {note && <span className="author-note">{note}</span>}
    </div>
  )
}

function PubLink({ link }) {
  const body = (
    <>
      <span aria-hidden="true">{link.icon}</span> {link.label}
      {link.note && <small>&nbsp;{link.note}</small>}
    </>
  )
  if (link.disabled || !link.url) {
    return <span className="pub-link disabled">{body}</span>
  }
  return (
    <a className="pub-link" href={link.url} target="_blank" rel="noopener noreferrer">
      {body}
    </a>
  )
}

export default function PublicationCard({ pub }) {
  return (
    <GlassPanel className="pub-card" interactive>
      <div className="pub-meta">
        <span className="venue-badge">{pub.venue}</span>
        <span>{pub.location}</span>
      </div>

      {pub.url ? (
        <a className="pub-title" href={pub.url} target="_blank" rel="noopener noreferrer">
          {pub.title}
        </a>
      ) : (
        <div className="pub-title">{pub.title}</div>
      )}

      <Authors authors={pub.authors} note={pub.note} />
      <div className="pub-venue">{pub.venueFull}</div>

      {pub.links?.length > 0 && (
        <div className="pub-links">
          {pub.links.map((l, i) => (
            <PubLink key={i} link={l} />
          ))}
        </div>
      )}

      {pub.summary && (
        <p className="pub-summary">
          {pub.summary.map((s, i) =>
            s.b ? <strong key={i}>{s.t}</strong> : <span key={i}>{s.t}</span>,
          )}
        </p>
      )}
    </GlassPanel>
  )
}
