# Stein — public site (GitHub Pages)

Static landing page and privacy policy for Plaid Compliance Center and OAuth institution registration.

**Live URL (after deploy):** `https://andrewsetness.github.io/stein/`

## Deploy

From this folder:

```bash
git init
git add index.html privacy.html README.md
git commit -m "Add Stein public site for Plaid compliance"
gh repo create stein --public --source=. --remote=origin --push
gh api repos/andrewsetness/stein/pages -X POST -f build_type=legacy -f source[branch]=main -f source[path]=/
```

Or enable Pages in GitHub: **Settings → Pages → Deploy from branch `main` / root**.

## Plaid app profile

- **Website URL:** `https://andrewsetness.github.io/stein/`
- **Privacy policy:** `https://andrewsetness.github.io/stein/privacy.html`
