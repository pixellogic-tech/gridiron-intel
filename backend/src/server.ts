// backend/src/server.ts
import express from 'express';
import { createServer } from 'http';

const app = express();

// Smart port finder
const startServer = (port: number = 5000): void => {
  const server = createServer(app);
  
  server.listen(port)
    .on('listening', () => {
      console.log(`
        🏈 GridironIntel Backend Server
        ✅ Server running on port ${port}
        📡 API: http://localhost:${port}
        🚀 Environment: ${process.env.NODE_ENV || 'development'}
      `);
    })
    .on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`⚠️ Port ${port} is busy, trying port ${port + 1}...`);
        startServer(port + 1);
      } else {
        console.error('❌ Server error:', err);
        process.exit(1);
      }
    });
};

// Start with preferred port
const PORT = parseInt(process.env.PORT || '5000', 10);
startServer(PORT);
