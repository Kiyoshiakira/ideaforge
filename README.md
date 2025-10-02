# IdeaForge

IdeaForge is a platform for artists, writers, and musicians to share, collaborate, and earn royalties from their creations. It features Smart Royalties, a Dream Funding grant, and an Audition System. It guarantees 100% creator ownership, provides legal protection, and offers free tools and an AI learning assistant to support creators.

## Features

- **Creative Collaboration**: Share your work and collaborate with other creators
- **Smart Royalties**: Automatic tracking and payment of royalties
- **Dream Funding**: Community-voted grants for creative projects
- **Audition System**: Connect scripts with talent through video auditions
- **100% Creator Ownership**: You retain full rights to your work
- **Free Creative Tools**: Access to professional-grade open-source tools
- **AI Learning Assistant**: Get personalized guidance for skill development

## Tech Stack

### Frontend
- HTML5, CSS3 (Tailwind CSS)
- Vanilla JavaScript
- Responsive design for mobile and desktop

### Backend
- Node.js
- Express.js
- MongoDB (planned)
- JWT Authentication (planned)
- File upload with Multer

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (for database functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kiyoshiakira/ideaforge.git
cd ideaforge
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```
PORT=3000
MONGODB_URI=mongodb://localhost:27017/ideaforge
JWT_SECRET=your-secret-key-here
```

### Running the Application

#### Development Mode
```bash
npm run dev
```

#### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
ideaforge/
├── public/               # Frontend files
│   └── index.html       # Main HTML file (CreativeHub)
├── routes/              # API routes
│   ├── auth.js         # Authentication routes
│   ├── projects.js     # Project management routes
│   ├── uploads.js      # File upload routes
│   ├── collaborations.js # Collaboration routes
│   ├── funding.js      # Dream Funding routes
│   └── auditions.js    # Audition system routes
├── models/             # Database models (to be implemented)
├── middleware/         # Custom middleware
├── server.js           # Main server file
├── package.json        # Dependencies
└── .env.example        # Environment variables template
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project by ID

### Uploads
- `POST /api/uploads` - Upload creative content
- `GET /api/uploads/:id` - Get upload by ID

### Collaborations
- `GET /api/collaborations` - Get user's collaborations
- `POST /api/collaborations` - Request collaboration
- `PUT /api/collaborations/:id` - Update collaboration status

### Funding
- `GET /api/funding` - Get funding applications
- `POST /api/funding` - Submit funding application
- `POST /api/funding/:id/vote` - Vote for application

### Auditions
- `GET /api/auditions` - Get open auditions
- `POST /api/auditions` - Create audition
- `POST /api/auditions/:id/submit` - Submit audition entry

## Development Roadmap

- [x] Frontend HTML structure
- [x] Backend server setup
- [x] API route structure
- [ ] Database models and integration
- [ ] User authentication with JWT
- [ ] File upload functionality
- [ ] Real-time collaboration features
- [ ] Payment integration for royalties
- [ ] AI learning assistant integration
- [ ] Mobile app development

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC License - see the LICENSE file for details.

## Contact

For questions or support, please open an issue on GitHub.
