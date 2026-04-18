#!/bin/bash

# HelpHub React Setup Script

echo "🚀 HelpHub AI React + Vite Setup"
echo "=================================="
echo ""

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo ""
echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "  1. npm run dev     - Start development server"
echo "  2. npm run build   - Build for production"
echo "  3. npm run preview - Preview production build"
echo ""
echo "🎉 Happy coding!"
