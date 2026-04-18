# HelpHub AI - React + Vite Version

This is a React + Vite conversion of the HelpHub AI community support platform.

## Project Structure

```
helphub-react/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section with stats
│   │   ├── CoreFlow.jsx     # Core flow features
│   │   ├── FeaturedRequests.jsx  # Featured requests feed
│   │   └── Footer.jsx       # Footer
│   ├── context/
│   │   └── DataContext.jsx  # Global state management
│   ├── utils/
│   │   └── helpers.js       # Utility functions
│   ├── styles/
│   │   └── globals.css      # Global styles
│   ├── App.jsx              # Main App component
│   └── main.jsx             # React entry point
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── package.json             # Project dependencies
└── README.md                # This file
```

## Features

- ✅ React 18 with Vite
- ✅ Context API for state management
- ✅ LocalStorage for data persistence
- ✅ AI-powered request categorization
- ✅ Community trust scoring
- ✅ Responsive design
- ✅ Landing page with stats
- ✅ Featured requests display

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd helphub-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Data & Storage

- All data is stored in `localStorage`
- Initial seed data is created on first load
- The app persists users, requests, notifications, and messages

## Key Components

### DataContext
- Manages global state for users, requests, notifications, messages
- Provides helper functions for AI categorization, urgency detection, etc.
- Seeds initial demo data

### Components
- **Header**: Navigation and branding
- **Hero**: Landing page hero section with stats
- **CoreFlow**: Feature highlights
- **FeaturedRequests**: Display of featured support requests
- **Footer**: Footer information

## Customization

### Modify Styles
Edit `src/styles/globals.css` to customize the design system

### Add New Components
Create new components in `src/components/` and import them in `App.jsx`

### Update Data
Modify seed data in `src/context/DataContext.jsx` or interact with localStorage directly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
