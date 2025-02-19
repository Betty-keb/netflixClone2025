import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Check if deploying to GitHub Pages
const isGitHubPages = process.env.NODE_ENV === "production" && process.env.GITHUB_ACTIONS;
// https://vite.dev/config/
export default defineConfig({
	base: isGitHubPages ? "/netflixClone2025/" : "/", // Use base only for GitHub Pages
	plugins: [react()],
});
