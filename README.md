# Automatiq — Production GitHub Pages Build

## Important Firebase step
The current project files contain the Firebase Web App configuration that was previously supplied. The live site is returning `auth/api-key-not-valid` during Firebase Authentication, which means the API key currently stored in `firebase-config.js` is not accepted by Firebase Authentication.

Firebase's documentation says the common causes are: a deleted key, a key from another project, or API/application restrictions that prevent the key from being used. The correct fix is to obtain the current config object for the **same Firebase Web App** and replace the `apiKey` value in `firebase-config.js` before deploying.

### Get the correct Web config
1. Open Firebase Console.
2. Open project `gen-lang-client-0755341897`.
3. Go to **Project settings → Your apps → Web app**.
4. Open the SDK setup/configuration object.
5. Copy the current `apiKey` into `firebase-config.js`.
6. In **Authentication → Sign-in method**, make sure **Email/Password** is enabled.
7. In **Authentication → Settings → Authorized domains**, make sure `mdsahadathossenshihab.github.io` is present.
8. Deploy the files to GitHub Pages again.

Do not replace the Firebase API key with a Gemini/Generative Language API key. Firebase web apps use the Firebase Web App key.

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
