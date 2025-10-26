# 🏈 Gridiron Intel

**The Next-Generation Football Analytics Platform That Destroys Hudl**

AI-powered video analysis, advanced statistics, and intelligent play recognition for high school football teams.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

## 🚀 Features

### 🎥 **AI Video Analysis**
- Automatic play detection and tagging
- Player tracking and route recognition
- Formation identification
- Real-time highlight generation
- Multi-angle video sync

### 📊 **Advanced Analytics**
- Real-time game statistics
- Player performance metrics
- Opponent scouting reports
- Trend analysis and predictions
- Custom report generation

### 🎮 **Coaching Tools**
- Digital playbook with 3D diagrams
- Practice plan builder
- Player evaluation system
- Depth chart management
- Communication hub

### 💪 **Why We're Better Than Hudl**
- ✅ **FREE** basic tier (vs Hudl's expensive plans)
- ✅ **No watermarks** on your videos
- ✅ **Unlimited storage** for videos
- ✅ **AI-powered** automatic tagging
- ✅ **Open API** for custom integrations
- ✅ **Faster processing** (GPU-accelerated)
- ✅ **Real-time collaboration** tools
- ✅ **Mobile-first** design

## 🏗️ Tech Stack

### Frontend
- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **TensorFlow.js** - Client-side AI
- **Socket.io** - Real-time updates
- **Framer Motion** - Animations

### Backend
- **Node.js + Express** - API server
- **Prisma** - Database ORM
- **PostgreSQL** - Primary database
- **Redis** - Caching & queues
- **Socket.io** - WebSocket server
- **Bull** - Job processing

### AI/ML
- **Python + FastAPI** - AI service
- **TensorFlow/PyTorch** - ML models
- **OpenCV** - Video processing
- **FFmpeg** - Video encoding

### Infrastructure
- **Docker** - Containerization
- **AWS S3** - Video storage
- **Vercel** - Frontend hosting
- **Railway** - Backend hosting

## 📦 Project Structure
gridiron-intel/
├── backend/ # Express API server
│ ├── src/
│ ├── prisma/
│ └── tests/
├── gridiron-intel-web/ # Next.js frontend
│ ├── app/
│ ├── components/
│ ├── lib/
│ └── public/
├── mobile/ # React Native app
│ └── src/
├── ai-core/ # Python AI service
│ ├── models/
│ └── src/
├── packages/
│ └── database/ # Prisma schema
└── services/
├── video-processor/ # FFmpeg service
└── realtime-engine/ # WebSocket server
## 🚀 Quick Start

### Prerequisites
- Node.js >= 18.0.0
- PostgreSQL >= 14
- Redis >= 6.0
- Python >= 3.9 (for AI features)
- Docker (optional, recommended)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/pixellogic_dev/gridiron-intel.git
cd gridiron-intel
npm install
cd backend && npm install
cd ../gridiron-intel-web && npm install
cd ../packages/database && npm install
cp .env.example .env
# With Docker:
docker-compose up -d postgres redis
# Or locally:
sudo systemctl start postgresql redis
cd packages/database
npx prisma generate
npx prisma db push
npx prisma db seed
# In separate terminals:

# Backend
cd backend && npm run dev

# Frontend
cd gridiron-intel-web && npm run dev

# AI Service (optional)
cd ai-core && python app.py
Frontend: http://localhost:3000
Backend API: http://localhost:5000
Prisma Studio: http://localhost:5555
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
# Run all tests
npm test

# Backend tests
cd backend && npm test

# Frontend tests
cd gridiron-intel-web && npm test

# E2E tests
npm run test:e2e
cd gridiron-intel-web
vercel deploy --prod
cd backend
git push railway main
docker-compose -f docker-compose.prod.yml up -d

All rights reserved.

This software and its source code are proprietary and confidential.
No part of this software may be reproduced, distributed, or transmitted 
in any form or by any means, including copying, modifying, or redistributing, 
without the prior written permission of the author.
🙏 Acknowledgments

    Inspired by the need for affordable, powerful football analytics
    Built by coaches, for coaches
    Community-driven development
📧 Contact

    Website: gridiron-intel.com
    Email: pixellogic_dev@proton.me
    Built with ❤️ by the PixelLogic Gridiron-intel team
Making elite football analytics accessible to everyone.
'EOFSCRIPT'
