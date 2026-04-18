export default function Header() {
  return (
    <header className="topbar">
      <div className="container nav">
        <a className="brand" href="/">
          <span className="brand-badge">H</span>
          <span>HelpHub AI</span>
        </a>
        <nav className="nav-links">
          <a href="/" className="active">Home</a>
          <a href="/explore">Explore</a>
          <a href="/leaderboard">Leaderboard</a>
          <a href="/ai-center">AI Center</a>
        </nav>
        <div className="nav-actions">
          <a className="pill" href="/notifications">Live community signals</a>
          <a className="btn btn-primary" href="/auth">Join the platform</a>
        </div>
      </div>
    </header>
  )
}
