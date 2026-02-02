# WhatSEaas - WhatsApp Search as a Service

An AI-powered WhatsApp bot that answers questions with web search capabilities using Groq AI.

## What it does

Send a message to your WhatsApp bot, and it will:

- Use AI to understand your question
- Search the web when needed for current information
- Send formatted responses back on WhatsApp

## Quick Setup

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up environment variables**
   - Copy `example.env` to `.env`
   - Add your `GROQ_API_KEY`

3. **Run the bot**

   ```bash
   npm run dev
   ```

4. **Link your WhatsApp**
   - Scan the QR code with WhatsApp
   - Go to Settings > Linked Devices > Link a Device

5. **Update your number**
   - Edit `server.js` and update your WhatsApp number to receive responses

## Tech Stack

- **WhatsApp**: whatsapp-web.js
- **AI**: Groq API (fast LLM inference)
- **Web Scraping**: Firecrawl
- **Search**: Brave Search API
- **Language**: JavaScript/TypeScript

---

_Check out the demo video for a walkthrough_
