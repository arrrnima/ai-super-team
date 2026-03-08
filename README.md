# AI Super Team 🧠⚡

5 marketing legends as AI advisors. One advisory board. Built with Next.js + Anthropic Claude.

---

## Deploy in 15 minutes (free)

### What you need
- A free [GitHub](https://github.com) account
- A free [Vercel](https://vercel.com) account
- An [Anthropic API key](https://console.anthropic.com/) (~$5 credit to start)

---

### Step 1 — Install Node.js
Download from https://nodejs.org (choose the LTS version)

Verify it works:
```bash
node --version   # should show v18 or higher
npm --version
```

---

### Step 2 — Set up the project locally
```bash
# Install dependencies
npm install

# Create your local env file
cp .env.example .env.local
```

Open `.env.local` and replace `your_api_key_here` with your real Anthropic API key.
Get your key at: https://console.anthropic.com/

---

### Step 3 — Test it locally
```bash
npm run dev
```

Open http://localhost:3000 — the app should be running.

---

### Step 4 — Push to GitHub

1. Go to https://github.com/new
2. Create a new repository called `ai-super-team` (set to Private if you prefer)
3. Run these commands in your terminal:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ai-super-team.git
git push -u origin main
```

---

### Step 5 — Deploy on Vercel (free)

1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `ai-super-team` repository
4. Click **"Environment Variables"** and add:
   - Key: `ANTHROPIC_API_KEY`
   - Value: your actual API key (starts with `sk-ant-...`)
5. Click **Deploy**

That's it. Vercel gives you a free URL like `ai-super-team.vercel.app`.

---

## Cost

| Service | Cost |
|---------|------|
| Vercel hosting | Free forever |
| GitHub | Free forever |
| Anthropic API | ~$0.003 per conversation (pay as you go) |

For personal use, $5 of API credit lasts a very long time.

---

## Local development

```bash
npm run dev    # start dev server at localhost:3000
npm run build  # build for production
npm start      # run production build locally
```

---

## Project structure

```
ai-super-team/
├── pages/
│   ├── api/
│   │   └── chat.js      ← API proxy (keeps your key secret)
│   ├── _app.js
│   └── index.js         ← Main app
├── styles/
│   └── globals.css
├── .env.example         ← Copy to .env.local
├── .gitignore
├── next.config.js
└── package.json
```

The API key lives only in Vercel's environment variables and in your local `.env.local` file. It is never exposed to the browser.
