# Automatiq — Production GitHub Pages Build

## Firebase setup
The production config in `firebase-config.js` now targets the current Automatiq Web App: `automatiq-e9b5b`.

Before deploying to GitHub Pages:
1. Firebase Console → **Authentication → Sign-in method** → enable **Email/Password**.
2. Authentication → **Settings → Authorized domains** → add `mdsahadathossenshihab.github.io`.
3. Firebase Console → **Project settings → Your apps → Web app** → keep the Web SDK config synchronized with `firebase-config.js`.
4. Publish the included `firestore.rules` in **Firestore Database → Rules**.

The website uses Firebase Compat SDK in the static GitHub Pages build. The supplied Web App configuration includes the API key, project ID, app ID and measurement ID; Analytics is not required for authentication, so the site does not initialize Analytics unless it is explicitly added later.

If Authentication still fails, use the exact Firebase error shown on the Login page. Common causes include Email/Password being disabled or the GitHub Pages domain not being authorized.

## What was fixed in this build
- Full Services catalog with grouped service cards
- Fixed package pricing and custom-service presentation
- Safer Lucide icon names
- Pricing service selection/scroll behavior
- Firebase authentication error handling
- Explicit invalid-API-key guidance instead of a confusing generic toast
- Sign in, sign up and password reset flows
- Dashboard auth/error handling
- Service request modal and Firestore order flow
- Mobile navigation and responsive layout
- Scroll/reveal behavior for dynamically rendered service cards
- Custom 404 page and relative GitHub Pages links

## GitHub Pages URL
`https://mdsahadathossenshihab.github.io/automatiq/`

## Firebase security
Publish the included `firestore.rules` in Firebase Console before production use. Do not use unrestricted Firestore rules for a public client application.


## Firebase Web App configuration

The project now uses the exact Firebase Web App configuration supplied for the Automatiq Firebase project, including the current Web App `appId`. The static GitHub Pages site uses Firebase Compat SDK because the pages load `firebase-app-compat.js`, `firebase-auth-compat.js`, and `firebase-firestore-compat.js`.

After deployment, if Authentication still reports `auth/api-key-not-valid`, verify the API key is active in Firebase/Google Cloud and that its API restrictions allow the required Firebase APIs. Also enable Email/Password under Firebase Authentication → Sign-in method.

