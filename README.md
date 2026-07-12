# Mechanical Engineering Portfolio

A custom, dark industrial Hugo portfolio designed for GitHub Pages. Content is managed through Markdown rather than hard-coded HTML.

## Why Hugo

Hugo is a strong fit for this portfolio because it is fast, has no runtime database, supports Markdown content, and produces a completely static site. GitHub Actions can build and deploy it automatically whenever content is pushed to `main`.

## Local setup

1. Install Hugo Extended: https://gohugo.io/installation/
2. Clone the repository.
3. From the repository root, run:

```bash
hugo server -D
```

4. Open the local address printed by Hugo, usually `http://localhost:1313`.

## Initial configuration

Edit `hugo.toml`:

- Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` in `baseURL`.
- Replace the placeholder name, email, GitHub, LinkedIn, location, and bio.
- Place your resume at `static/files/resume.pdf`.

## Adding a project

Create a Markdown file in `content/projects/`, or run:

```bash
hugo new projects/project-name.md
```

Use this front matter:

```yaml
---
title: "Project Name"
date: 2026-07-01
summary: "One-sentence project summary."
featured: true
weight: 1
tags: ["CAD", "Simulation", "Prototyping"]
status: "Complete"
github: "https://github.com/..."
demo: ""
---
```

Write the project case study below the front matter using normal Markdown headings, lists, links, and images.

The home page automatically displays the first three projects where `featured: true`. Project filters are generated automatically from the tags used in project files.

## Adding experience

Create a Markdown file in `content/experience/`:

```yaml
---
title: "Mechanical Engineering Intern"
company: "Company Name"
location: "City, State"
period: "May 2027 — Aug 2027"
start: 2027-05-01
tags: ["SolidWorks", "FEA", "DFM"]
---
```

Add accomplishment bullets below the front matter.

## Updating skills

Edit `data/skills.yaml`. Add or remove items without changing any HTML.

## Adding project images

The simplest option is to create a folder under `static/images/projects/` and reference files in Markdown:

```markdown
![Project assembly](/images/projects/project-name/assembly.webp)
```

Use WebP or AVIF where practical, and compress images before committing them.

## GitHub Pages deployment

1. Create a new GitHub repository.
2. Copy this site into it and push to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push a commit. The workflow in `.github/workflows/hugo.yaml` will build and deploy the site.

For a project site, GitHub will normally publish it at:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

For a personal root site, name the repository `YOUR-USERNAME.github.io` and set `baseURL` accordingly.

## Recommended content strategy

Each project should read like a short engineering case study:

1. Problem and requirements
2. Your role
3. Constraints
4. Design process
5. Analysis or testing
6. Final result
7. What changed because of your work

Use measured outcomes when available. Do not invent metrics; leave placeholders until a result can be verified.

## Performance notes

- No JavaScript framework
- One small JavaScript file for filtering
- Hugo minifies and fingerprints assets
- Static HTML works well with GitHub Pages CDN
- Fonts can be self-hosted later to eliminate Google Fonts requests
