import { useData } from '../context/DataContext'

export default function Hero() {
  const { users, requests } = useData()
  
  const solved = requests.filter(req => req.status === 'Solved').length
  const maxTrustScore = Math.max(...users.map(u => u.trustScore))

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy fade-in">
          <p className="eyebrow">SMIT Grand Coding Night 2026</p>
          <h1>Find help faster. Become help that matters.</h1>
          <p>HelpHub AI is a community-powered support network for students, mentors, creators, and builders. Ask for help, offer help, track impact, and let AI surface smarter matches across the platform.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="/dashboard">Open product demo</a>
            <a className="btn btn-secondary" href="/create-request">Post a request</a>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <p className="eyebrow">Members</p>
              <div className="stat-value">{users.length * 128}+</div>
              <p>Students, mentors, and helpers in the loop.</p>
            </div>
            <div className="stat-card">
              <p className="eyebrow">Requests</p>
              <div className="stat-value">{requests.length * 18}+</div>
              <p>Support posts shared across learning journeys.</p>
            </div>
            <div className="stat-card">
              <p className="eyebrow">Solved</p>
              <div className="stat-value">{solved * 23}+</div>
              <p>Problems resolved through fast community action.</p>
            </div>
          </div>
        </div>
        <div className="hero-panel fade-in">
          <span className="orb"></span>
          <p className="eyebrow">Live product feel</p>
          <h2>More than a form. More like an ecosystem.</h2>
          <p>A polished multi-page experience inspired by product platforms, with AI summaries, trust scores, contribution signals, notifications, and leaderboard momentum built directly in React, Vite, and LocalStorage.</p>
          <div className="stack">
            <div className="feature-card" style={{ color: 'black' }}>
              <h3>AI request intelligence</h3>
              <p style={{ color: 'black' }}>Auto-categorization, urgency detection, tags, rewrite suggestions, and trend snapshots.</p>
            </div>
            <div className="feature-card" style={{ color: 'black' }}>
              <h3>Community trust graph</h3>
              <p style={{ color: 'black' }}>Badges, helper rankings, trust score boosts, and visible contribution history.</p>
            </div>
            <div className="feature-card" style={{ color: 'black' }}>
              <h3>{maxTrustScore}%</h3>
              <p style={{ color: 'black' }}>Top trust score currently active across the sample mentor network.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
