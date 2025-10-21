<p align="center">
 <img src='public/img/logo.png' height='150' alt="IdeaForge Logo" />
</p>

# IdeaForge

**Where Art Meets Collaboration**

[![CI](https://github.com/Kiyoshiakira/ideaforge/workflows/CI%20-%20Continuous%20Integration/badge.svg)](https://github.com/Kiyoshiakira/ideaforge/actions/workflows/ci.yml)
[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL%203.0-blue.svg)](LICENSE)

IdeaForge is an open-source collaborative suite that brings artists, writers, filmmakers, animators, game designers, musicians, and creative professionals together in real-time. Think Figma meets Notion, purpose-built for creative workflows.

---

## 🚀 Our Vision: A New Era of Collaborative Creation

Too often, creative projects stall—not because of a lack of ideas, but because creators don’t have access to the right collaborators. A screenwriter might imagine a character’s story, but need an artist to visualize them or a musician to bring a scene to life. What if the world’s creative talent could come together—across disciplines, geographies, and skill levels—to build something bigger than themselves?

**IdeaForge is more than just a tool. It’s a new creative ecosystem:**

- **Open Collaboration:** Writers, artists, musicians, filmmakers, animators, and more can post their work, invite others to contribute, and watch their ideas evolve in real time.
- **Flexible Rights & Revenue:** Creators choose how their work is used:
  - Allow and receive royalties on derivative works
  - Sell royalty rights up front
  - Or gift their work to the public domain
- **All-in-One Platform:** No more scattered portfolios or chasing collaborators. Share, adapt, remix, and get paid—all in one place.
- **Power for Everyone:** Whether you’re a stay-at-home artist, a hobbyist, or a pro, you can contribute, build your portfolio, and earn from anywhere.
- **Creative “Multiverse”:** One script or story can become dozens of artworks, animations, games, or even VR experiences—each credited, each rewarding its contributors.

**We believe in a world where:**

- Creative barriers are broken down
- Credit and revenue flow fairly
- Anyone can help bring great stories to life—not just big studios

Join us to help build the future of collaborative creation.  
Let’s make creativity accessible, rewarding, and truly global.

---

## 🌟 Features

- **Real-Time Collaboration:** Work together on scripts, notes, boards, creative bibles, music, audio, and performance projects with live multi-user editing.
- **Role-Based Permissions:** Project owners control saves, history, and team management. Contributors can edit and suggest, with strong grief protection.
- **Skill-Driven Teams:** Showcase your creative skills—art, animation, music, sound design, writing, audio engineering, voice acting, acting, and more. Join projects that need your expertise, and build a meaningful portfolio.
- **Showcase & Portfolio:** Share your best work on your profile and in the global showcase.
- **Auditions & Casting:** Apply your acting or voice skills to projects, participate in auditions, and connect with creators seeking talent.
- **AI-Powered Onboarding & Assistance:** Integrated AI bot to help new users, generate demo projects, and provide creative suggestions.
- **Extensible for Animation, Games, Film, Audio, Performance, and Beyond:** Modular project "bibles"—manage scripts, characters, worlds, assets, music, sound design, casting, and more.

---

## 🌙 Dark Mode

IdeaForge features a comprehensive dark mode designed for creative professionals who work long hours.

- **WCAG 2.1 AA Compliant** - All colors meet accessibility standards
- **Smooth Transitions** - Seamless switching between light and dark themes
- **Persistent Preferences** - Remembers your choice across sessions
- **System Aware** - Respects your OS theme preference
- **Keyboard Accessible** - Toggle with `Ctrl/Cmd + Shift + D`

**📚 Documentation:**

- [Dark Mode Design Guide](DARK_MODE_DESIGN.md) - Complete color specifications
- [Quick Start Guide](DARK_MODE_QUICK_START.md) - Implementation for developers
- [Visual Examples](docs/DARK_MODE_VISUALS.md) - Screenshots and comparisons
- [Authentication Quick Start](docs/authentication/QUICK_START_AUTH.md)
- [Firebase Auth Developer Guide](docs/authentication/AUTH_DEVELOPER_GUIDE.md)
- [Dark Mode Design](docs/dark_mode/DARK_MODE_DESIGN.md)
- [Prompt Patterns (AI)](docs/ai/prompt_patterns.md)
- [CI/CD & Development](docs/development/CI_CD_SETUP_SUMMARY.md)
- [Collab Project Next Steps](docs/collab_next_steps.md)

**🎨 Try it now:** Open [`public/dark-mode-showcase.html`](public/dark-mode-showcase.html) to see all colors and components in action!

---

## 🗺️ Roadmap

We’re building IdeaForge in public and tracking progress transparently. Here’s our current roadmap:

| Quarter | Milestone                                          |
| ------- | -------------------------------------------------- |
| Q4 2025 | Core collaboration engine, basic project workspace |
| Q1 2026 | Real-time sync, role-based permissions             |
| Q2 2026 | AI assistance, plugin system                       |
| Q3 2026 | Mobile support, advanced integrations              |

👉 **See our [GitHub Milestones](https://github.com/Kiyoshiakira/ideaforge/milestones) for details and live progress.**

Check [`COLLAB-NEXT-STEPS.md`](COLLAB-NEXT-STEPS.md) for a detailed step-by-step build plan, open questions, and ideas.

---

## 🎨 UI/UX Design & Styling

IdeaForge features a modern, accessible design system with comprehensive support for both light and dark modes.

### CSS Architecture

The site uses a modular CSS structure:

- **`styles.css`** - Main stylesheet with global styles, layout components, and responsive design
- **`dark-theme.css`** - Complete dark mode implementation with CSS custom properties
- **`theme-toggle.css`** - Theme switching button styles
- **`auth.css`** - Authentication modal and form styles

### Key CSS Classes

#### Layout Components

- **`.main-section`** - Centered white boxes (max-width: 1100px) for major content sections
- **`.hero`** - Hero banner with gradient background, automatically centered
- **`.features-preview`** - Flexbox container for feature cards
- **`.gallery-grid`** - Responsive grid for showcasing work

#### Feature Cards

- **`.preview-card`** - Feature cards on homepage with gradient purple background
- **`.feature-card`** - General feature cards used throughout the site
- **`.hiw-step`** - How It Works step cards
- **`.gallery-item`** - Gallery items with image and caption

#### Interactive Elements

- **`.cta-btn`** - Call-to-action buttons with gold gradient
- **`.hero-btn`** - Hero section buttons with purple gradient

### Responsive Breakpoints

- **900px** - Feature cards and steps switch to single column
- **800px** - Main sections get reduced padding, logo size adjusts
- **600px** - Hero text size reduces, enhanced mobile padding
- **480px** - Smallest screens, minimal padding and compact layouts

### Accessibility Features

- **WCAG 2.1 AA Compliant** - All color combinations meet contrast standards
- **Focus States** - Clear keyboard focus indicators on all interactive elements
- **ARIA Labels** - Comprehensive ARIA attributes for screen readers
- **Responsive Navigation** - Mobile-friendly navigation with theme toggle
- **Hover Effects** - Visual feedback on interactive elements

### Dark Mode

See the [Dark Mode Design Guide](DARK_MODE_DESIGN.md) for complete specifications and usage guidelines.

---

## 🚀 Getting Started

Interested in contributing? See [CONTRIBUTING.md](CONTRIBUTING.md) for how you can join!

### Local Development

1. **Clone the repo:**

   ```bash
   git clone https://github.com/Kiyoshiakira/ideaforge.git
   cd ideaforge
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the local server:**

   For local development, you can use any static file server. For example:

   ```bash
   # Using Python 3
   python3 -m http.server 8000 --directory public

   # Or using Node.js http-server (install globally: npm install -g http-server)
   http-server public -p 8000

   # Or using Firebase emulators
   firebase serve
   ```

4. **Open in your browser:**

   Visit `http://localhost:8000` (or your configured port).

5. **Run linting and formatting:**

   ```bash
   # Run linting
   npm run lint

   # Check code formatting
   npm run format:check

   # Auto-format code
   npm run format
   ```

---

## 🤝 How to Contribute

We welcome developers, designers, testers, artists, writers, musicians, sound designers, audio engineers, actors, voice actors—anyone interested in building creative tools!

- Read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines
- Check [open issues](https://github.com/Kiyoshiakira/ideaforge/issues)
- Introduce yourself and claim a task, or propose new ideas
- Look for issues labeled [`good first issue`](https://github.com/Kiyoshiakira/ideaforge/labels/good%20first%20issue) and [`help wanted`](https://github.com/Kiyoshiakira/ideaforge/labels/help%20wanted)

**Bangarang for Contributors:**

- All contributors are credited and celebrated.
- Major contributors & outstanding works are featured in our global showcase.
- We support pairing up, code review, and learning together—your growth matters here!

---

## 🙌 Community & Credits

- All contributors will be credited in project documentation and on the site.
- Major contributors & outstanding works will be highlighted in the global showcase.
- Join the conversation—open an [issue](https://github.com/Kiyoshiakira/ideaforge/issues) or check out Discussions (coming soon).

---

## 🔒 Security Policy

Please see [SECURITY.md](SECURITY.md) for how to report vulnerabilities or security concerns.

---

## 📄 License

AGPL-3.0

---

**Let’s build a new home for collaborative creation—for art, story, music, sound, performance, and more. Welcome to IdeaForge!**
