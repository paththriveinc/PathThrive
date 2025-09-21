<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Phg5M675M5Y5S3VXyH9VayiRff9Pd4-l

## Run Locally

**Prerequisites:**  Node.js

No additional environment variables are required for local development.

1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

The repository includes a GitHub Actions workflow that builds the project with Vite and publishes the `dist/` output to GitHub Pages.

1. If you fork or rename the project, update the `GITHUB_PAGES_BASE` path in [`vite.config.ts`](vite.config.ts) so it matches your repository name.
2. Commit and push to the `main` branch. The **Deploy to GitHub Pages** workflow will install dependencies, run `npm run build`, and upload the generated site.
3. In your repository settings, enable GitHub Pages and choose “GitHub Actions” as the source. After the workflow finishes, your site will be live at `https://<username>.github.io/PathThrive/` (or your repository name).
