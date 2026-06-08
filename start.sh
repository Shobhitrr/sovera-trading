#!/bin/bash
# SOVÉRA - Start Development Server
# Run this if the site is down. The preview URL auto-updates.
cd /home/team/shared/sovera

# Kill any existing vite processes
pkill -f "vite" 2>/dev/null
sleep 1

# Start the dev server bound to all interfaces
nohup npx vite --host 0.0.0.0 > /tmp/sovera-dev.log 2>&1 &

# Wait for it to start
sleep 3
echo "Dev server status:"
ss -Htln | grep :5173 && echo "✓ Running on port 5173" || echo "✗ Not running"
echo "Log: /tmp/sovera-dev.log"
echo "To view: npm run dev (already set up)"
