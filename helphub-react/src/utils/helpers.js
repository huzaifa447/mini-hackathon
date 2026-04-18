export const getTopCategory = (requests) => {
  const counts = requests.reduce((acc, request) => ({ ...acc, [request.category]: (acc[request.category] || 0) + 1 }), {})
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "Community"
}

export const suggestCategory = (text, CATEGORIES) => {
  const normalized = text.toLowerCase()
  let best = { category: "Community", score: 0 }
  Object.entries(CATEGORIES).forEach(([category, words]) => {
    const score = words.reduce((sum, word) => sum + Number(normalized.includes(word)), 0)
    if (score > best.score) best = { category, score }
  })
  return best.category
}

export const detectUrgency = (text, URGENCY) => {
  const normalized = text.toLowerCase()
  for (const rule of URGENCY) if (rule.words.some((word) => normalized.includes(word))) return rule.level
  return "Low"
}

export const suggestTags = (text, SKILLS) => {
  const normalized = text.toLowerCase()
  const tags = SKILLS.filter((skill) => normalized.includes(skill.toLowerCase()) || normalized.includes(skill.toLowerCase().replace("/", ""))).slice(0, 4)
  if (normalized.includes("portfolio")) tags.push("Portfolio")
  if (normalized.includes("responsive")) tags.push("Responsive")
  if (normalized.includes("interview")) tags.push("Interview Prep")
  if (normalized.includes("design")) tags.push("Design Review")
  return [...new Set(tags)].slice(0, 5)
}

export const rewriteDescription = (text) => {
  const trimmed = text.trim()
  if (!trimmed) return ""
  return `I need focused support with ${trimmed.charAt(0).toLowerCase() + trimmed.slice(1)}. A helper who can provide practical next steps, examples, and a quick review would be ideal.`
}

export const deriveSkillSuggestions = (interests = [], skills = [], SKILLS) => {
  const joined = [...interests, ...skills].join(" ").toLowerCase()
  const helpWith = SKILLS.filter((item) => joined.includes(item.toLowerCase()) || item.split(" ").some((part) => joined.includes(part.toLowerCase()))).slice(0, 4)
  const needHelp = SKILLS.filter((item) => !skills.includes(item) && !helpWith.includes(item)).slice(0, 4)
  return {
    helpWith: helpWith.length ? helpWith : ["UI/UX", "Career Guidance", "Public Speaking"],
    needHelp: needHelp.length ? needHelp : ["Git/GitHub", "Interview Prep", "React"]
  }
}

export const initials = (name = "U") => name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase()
