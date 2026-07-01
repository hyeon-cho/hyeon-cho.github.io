import PublicationCard from './PublicationCard.jsx'

export default function PublicationList({ items }) {
  return (
    <div className="pub-list">
      {items.map((pub) => (
        <PublicationCard key={pub.id} pub={pub} />
      ))}
    </div>
  )
}
