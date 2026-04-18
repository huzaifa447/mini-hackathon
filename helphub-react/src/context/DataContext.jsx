import { createContext, useContext, useState, useEffect } from 'react'

const DataContext = createContext()

const STORAGE_KEYS = {
  users: "helphub_users",
  requests: "helphub_requests",
  notifications: "helphub_notifications",
  messages: "helphub_messages",
  currentUser: "helphub_current_user"
}

const SKILLS = [
  "JavaScript", "HTML/CSS", "React", "Node.js", "Python", "UI/UX", "Graphic Design",
  "Content Writing", "Public Speaking", "Data Analysis", "Math Tutoring", "Career Guidance",
  "Git/GitHub", "Figma", "Firebase", "Interview Prep"
]

const CATEGORIES = {
  "Web Development": ["website", "frontend", "javascript", "html", "css", "react", "bug", "responsive"],
  "Design": ["design", "figma", "ui", "ux", "poster", "brand"],
  "Career": ["resume", "career", "job", "interview", "linkedin", "portfolio"],
  "Academics": ["math", "assignment", "physics", "chemistry", "study", "exam", "tutor"],
  "Content": ["writing", "content", "script", "copy", "blog"],
  "Community": ["event", "volunteer", "community", "coordination", "mentor"]
}

const URGENCY = [
  { level: "Critical", words: ["asap", "urgent", "deadline", "today", "stuck", "production"] },
  { level: "High", words: ["soon", "issue", "blocked", "tomorrow", "important"] },
  { level: "Medium", words: ["guidance", "improve", "help", "review"] }
]

const load = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback } catch { return fallback }
}

const save = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const seedData = () => {
  if (!load(STORAGE_KEYS.users, null)) {
    save(STORAGE_KEYS.users, [
      { id: "user-1", name: "Ayesha Khan", role: "Both", location: "Karachi", interests: ["Hackathons", "UI/UX", "Community Building"], skills: ["Figma", "UI/UX", "HTML/CSS", "Career Guidance"], trustScore: 92, badges: ["Design Ally", "Fast Responder", "Top Mentor"], contributions: 31 },
      { id: "user-2", name: "Hassan Ali", role: "Can Help", location: "Lahore", interests: ["Web Apps", "Teaching", "Open Source"], skills: ["JavaScript", "React", "Git/GitHub", "Node.js"], trustScore: 88, badges: ["Code Rescuer", "Bug Hunter"], contributions: 24 },
      { id: "user-3", name: "Sara Noor", role: "Need Help", location: "Islamabad", interests: ["Learning", "Data", "Public Speaking"], skills: ["Python", "Data Analysis"], trustScore: 74, badges: ["Community Voice"], contributions: 11 }
    ])
    save(STORAGE_KEYS.currentUser, "user-1")
  }

  if (!load(STORAGE_KEYS.requests, null)) {
    save(STORAGE_KEYS.requests, [
      { id: "req-1", title: "Need help making my portfolio responsive before demo day", description: "My HTML/CSS portfolio breaks on tablets and I need layout guidance before tomorrow evening.", tags: ["HTML/CSS", "Responsive", "Portfolio"], category: "Web Development", urgency: "High", location: "Karachi", requesterId: "user-3", helperIds: ["user-1"], status: "Open", createdAt: "2026-04-17T10:00:00", aiSummary: "Responsive layout issue with a short deadline. Best helpers are frontend mentors comfortable with CSS grids and media queries." },
      { id: "req-2", title: "Looking for Figma feedback on a volunteer event poster", description: "I have a draft poster for a campus community event and want sharper hierarchy, spacing, and CTA copy.", tags: ["Figma", "Poster", "Design Review"], category: "Design", urgency: "Medium", location: "Lahore", requesterId: "user-1", helperIds: ["user-2"], status: "Open", createdAt: "2026-04-16T15:30:00", aiSummary: "A visual design critique request where feedback on hierarchy, spacing, and messaging would create the most value." },
      { id: "req-3", title: "Need mock interview support for internship applications", description: "Applying to frontend internships and need someone to practice behavioral and technical interview questions with me.", tags: ["Interview Prep", "Career", "Frontend"], category: "Career", urgency: "Low", location: "Remote", requesterId: "user-3", helperIds: ["user-1", "user-2"], status: "Solved", createdAt: "2026-04-14T09:15:00", aiSummary: "Career coaching request focused on confidence-building, behavioral answers, and entry-level frontend interviews." }
    ])
  }

  if (!load(STORAGE_KEYS.notifications, null)) {
    save(STORAGE_KEYS.notifications, [
      { id: "note-1", title: "New helper matched to your responsive portfolio request", type: "Match", status: "Unread", time: "12 min ago" },
      { id: "note-2", title: "Your trust score increased after a solved request", type: "Reputation", status: "Unread", time: "1 hr ago" },
      { id: "note-3", title: "AI Center detected rising demand for interview prep", type: "Insight", status: "Read", time: "Today" }
    ])
  }

  if (!load(STORAGE_KEYS.messages, null)) {
    save(STORAGE_KEYS.messages, [
      { id: "msg-1", from: "Ayesha Khan", to: "Sara Noor", text: "I checked your portfolio request. Share the breakpoint screenshots and I can suggest fixes.", time: "09:45 AM" },
      { id: "msg-2", from: "Hassan Ali", to: "Ayesha Khan", text: "Your event poster concept is solid. I would tighten the CTA and reduce the background texture.", time: "11:10 AM" }
    ])
  }
}

export const DataProvider = ({ children }) => {
  const [users, setUsers] = useState([])
  const [requests, setRequests] = useState([])
  const [notifications, setNotifications] = useState([])
  const [messages, setMessages] = useState([])
  const [currentUser, setCurrentUserState] = useState(null)

  useEffect(() => {
    seedData()
    setUsers(load(STORAGE_KEYS.users, []))
    setRequests(load(STORAGE_KEYS.requests, []))
    setNotifications(load(STORAGE_KEYS.notifications, []))
    setMessages(load(STORAGE_KEYS.messages, []))
    const userId = load(STORAGE_KEYS.currentUser, null)
    const allUsers = load(STORAGE_KEYS.users, [])
    setCurrentUserState(allUsers.find(u => u.id === userId) || allUsers[0])
  }, [])

  const setCurrentUser = (id) => {
    const allUsers = load(STORAGE_KEYS.users, [])
    const user = allUsers.find(u => u.id === id)
    if (user) {
      setCurrentUserState(user)
      save(STORAGE_KEYS.currentUser, id)
    }
  }

  const value = {
    users,
    requests,
    notifications,
    messages,
    currentUser,
    setCurrentUser,
    SKILLS,
    CATEGORIES,
    URGENCY
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData must be used within DataProvider')
  }
  return context
}
