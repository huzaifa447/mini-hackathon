import { useData } from '../context/DataContext'

function RequestCard({ request, requester }) {
  return (
    <article className="request-card fade-in">
      <div className="card-meta">
        <span className="tag">{request.category}</span>
        <span className={`tag ${["Critical", "High"].includes(request.urgency) ? "urgent" : ""}`}>
          {request.urgency}
        </span>
        <span className={`tag ${request.status === "Solved" ? "success" : ""}`}>
          {request.status}
        </span>
      </div>
      <h3>{request.title}</h3>
      <p>{request.description}</p>
      <div className="tag-row">
        {request.tags.map((tag, idx) => (
          <span key={idx} className="tag">{tag}</span>
        ))}
      </div>
      <div className="list-item" style={{ paddingBottom: 0, borderBottom: 0 }}>
        <div>
          <strong>{requester?.name || "Unknown user"}</strong>
          <p>{request.location} • {request.helperIds.length} helper{request.helperIds.length === 1 ? "" : "s"} interested</p>
        </div>
        <a className="btn btn-secondary" href={`/request-detail?id=${request.id}`}>
          Open details
        </a>
      </div>
    </article>
  )
}

export default function FeaturedRequests() {
  const { requests, users } = useData()

  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <p className="section-kicker">Featured requests</p>
            <h2>Community problems currently in motion</h2>
          </div>
          <a className="btn btn-secondary" href="/explore">View full feed</a>
        </div>
        <div className="card-grid">
          {requests.slice(0, 3).map((request) => {
            const requester = users.find(u => u.id === request.requesterId)
            return <RequestCard key={request.id} request={request} requester={requester} />
          })}
        </div>
      </div>
    </section>
  )
}
