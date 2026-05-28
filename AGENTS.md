# Agent Instructions & Context (AGENTS.md)

This document contains critical project context, configuration details, and architecture decisions for any AI agent interacting with this repository.

## 1. Project Overview
- **Project Name:** SouNoob Blog
- **Domain:** [sounoob.com.br](https://sounoob.com.br)
- **Framework:** Jekyll
- **Ruby Version:** 3.3
- **Jekyll Version:** ~> 4.3

## 2. Architecture & Deployment
- **Deployment Platform:** GitHub Pages.
- **CI/CD Pipeline:** The project does NOT use the default legacy GitHub Pages Jekyll builder (which is locked to Jekyll 3.9). Instead, it uses a custom **GitHub Actions workflow** located at `.github/workflows/jekyll.yml` to compile Jekyll 4.x and upload the artifacts.
- **GitHub Repository Settings:** The Pages source setting (`Settings -> Pages`) must be configured to use **GitHub Actions**.

## 3. Local Development Environment
The local environment is entirely containerized to avoid requiring local Ruby installations on the host machine.
- **Containerization:** Docker & Docker Compose.
- **Service Configuration:** Defined in `docker-compose.yml`.
- **Base Image:** `ruby:3.3`
- **Bootstrapping:** The container automatically runs `bundle install` and then starts the server with `bundle exec jekyll serve --host 0.0.0.0 --watch --drafts --trace`.
- **Local URL:** `http://localhost:4000`

### Commands
- Start environment: `docker compose up`
- Stop environment: `CTRL+C` in the terminal.

## 4. Dependencies & Plugins
Dependencies are managed via `Gemfile`. Key gems include:
- **rouge:** Replaced `pygments.rb` for code syntax highlighting.
- **html-proofer:** Used for HTML validation.
- **jekyll-feed:** Generates RSS feed.
- **jekyll-seo-tag:** Generates meta tags for SEO.
- **jekyll-paginate:** For pagination support.
- **jekyll-sitemap:** Generates `sitemap.xml`.
- **jekyll-redirect-from:** Manages redirects (widely used in older posts).

## 5. Technical Constraints & Historical Fixes
- **FontAwesome 4.7:** The project previously referenced local fonts in `_variables.scss` (`../fonts`). However, the `assets/fonts` directory does not exist in the repository, causing 404 network errors. This was fixed by updating `$fa-font-path` to point to a CDN (`//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts`). **Do not revert this to local fonts unless you also add the actual `.woff`/`.ttf` files to the repository.**
- **Sass Deprecations:** In Jekyll 4 (Dart Sass), using `/` for division is deprecated. In `assets/css/_variables.scss`, `$fa-li-width` was refactored to use `calc(30em / 14)` instead of `(30em / 14)`. When writing or modifying CSS/SCSS, ensure you avoid legacy division syntax.
- **HTML/Liquid Layouts:** Found in `_layouts/` and `_includes/`. The `index_rendered.html` (if exists in workspace) is just a temporary dump of the rendered page for debugging. Do not edit it directly; edit the Jekyll templates.
- **Avatar Comments:** The `<img class="avatar">` tag in `_includes/aside.html` is intentionally commented out. Do not attempt to fix or un-comment it unless explicitly requested by the user, as the `src` attribute historically pointed to the raw `site.url`.
