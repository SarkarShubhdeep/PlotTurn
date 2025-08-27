# ✍️ PlotTurn – MVP Plan

An interactive storytelling app where users build a chain-style narrative, one message at a time. Each user sees only the last sentence of the story and contributes the next line, continuing the chain. Great for creativity, fun, and unexpected twists.

---

## 🎯 Concept Summary

**PlotTurn** is a collaborative story-building platform where:

-   Users only see the last message written.
-   They add the next line to continue the story.
-   Stories evolve with random twists and different styles from each contributor.
-   Optionally, stories can be grouped by theme (e.g., sci-fi, mystery, absurdist).

---

## ✅ MVP Features

-   [x] Start a new story or join an existing one.
-   [x] Only show the last line to the user.
-   [x] Submit the next line in the story.
-   [x] View completed stories after a set number of entries (e.g., 10 lines).
-   [x] Light themed mode (Sci-fi, Mystery, Random, etc.).
-   [x] Local storage for story history (or use Supabase for a small DB).

---

## ⚙️ Tech Stack

-   **Nuxt 3 + TypeScript**
-   **Nuxt UI** for UI components and styling
-   **Supabase** (optional for story persistence and auth)
-   **localStorage** (fallback for MVP if not using DB)

---

## 🚀 Implementation Steps

### 1. Project Setup

-   Scaffold Nuxt project with TypeScript
-   Install Nuxt UI

```bash
npx nuxi init PlotTurn
cd chainstory
npm install
npm install @nuxt/ui
```

### 2. Story Flow Logic

-   Create a `Story` type with `id`, `theme`, `lines: string[]`, and `status`.
-   Limit the view to show only the last line of a story in progress.
-   Append new lines to the story and store.

### 3. UI Components

-   **StartScreen.vue**: Choose or create a theme and begin.
-   **StoryPage.vue**: Display only the last line and a text input.
-   **FinalStory.vue**: Once complete, display the full story.
-   Use `UCard`, `UButton`, and `UTextarea` from Nuxt UI for fast styling.

### 4. Storage Logic

-   **Option 1:** Use localStorage to persist stories in the browser.
-   **Option 2 (preferred):** Use Supabase with anonymous auth to store stories in a simple table.

### 5. Theming

-   Add preset themes like:
    -   Sci-Fi (e.g., “The ship trembled as...”)
    -   Wholesome
    -   Horror
    -   Chaotic / Random

---

## 🗓️ Timeline (MVP)

| Day   | Tasks                                                       |
| ----- | ----------------------------------------------------------- |
| Day 1 | Nuxt setup, theme chooser UI, story state logic             |
| Day 2 | Submission logic, local/Supabase storage, minimal UI polish |

---

## 💡 Future Features (Post-MVP)

-   Story upvoting or sharing
-   “Prompt Builder” for custom starters
-   Auth + leaderboards (“Top chaos writers”)
-   Export as image or text
-   Multiple endings or branching chains

---

Let me know if you want a GitHub README version or deploy script too!
