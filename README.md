# Automatiq — Production Website

GitHub Pages-ready multi-page Automatiq website.

## Included
- Home, Services, Service Details, Pricing, Secure Meta Connection, Login/Signup, Dashboard, Admin Console, Automation, Support, Social Automation, Vibe Coding.
- Facebook + Instagram automation only for Meta social packages.
- WhatsApp is manual activation.
- Monthly / yearly / setup pricing UI.
- Firebase Auth + Firestore client workspace.
- Performance-first animation: no heavy scroll effects or icon library dependency.

## Firebase
`firebase-config.js` contains the supplied Automatiq Web App configuration. Enable:
1. Authentication → Sign-in method → Email/Password.
2. Authentication → Settings → Authorized domains → `mdsahadathossenshihab.github.io`.
3. Publish `firestore.rules`.

## Meta + n8n connection
The website intentionally does **not** store a Meta App Secret in browser code. Configure:
`window.AUTOMATIQ_META_CONFIG.oauthUrl`
with the public OAuth-start URL of your n8n/backend workflow.

Recommended flow:
Browser → Meta OAuth → backend/n8n callback → exchange code server-side → store page/account token server-side → return connection status to Firebase workspace.

The user should authorize through Meta's official login page. Automatiq should never ask for the user's Facebook password.

## Admin
The Admin Console requires a Firebase Auth custom claim:
`admin: true`
Set this only from a trusted Firebase Admin SDK/server environment. Do not make a user document's `role` field the source of authorization.

## GitHub Pages
Upload all files to the repository root. Open:
`https://mdsahadathossenshihab.github.io/automatiq/`
