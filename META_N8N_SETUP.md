# Automatiq Meta + n8n connection setup

## Goal
Facebook/Instagram customer authorization should happen on Meta's official login screen. The browser must never receive a Meta App Secret or long-lived page token.

## Recommended flow
1. User signs in to Automatiq.
2. User clicks Buy Now on a Facebook/Instagram package.
3. Automatiq opens `AUTOMATIQ_META_CONFIG.oauthUrl`.
4. That URL is an n8n webhook or backend endpoint that starts Meta OAuth.
5. Backend redirects the user to Meta's official OAuth authorization page.
6. User logs in to Facebook, selects the Page and grants the requested permissions.
7. Meta redirects back to the backend callback URL.
8. Backend exchanges the authorization code server-side.
9. Backend stores the resulting Page/account token securely on the server/n8n credential store.
10. Backend redirects to:
   `https://mdsahadathossenshihab.github.io/automatiq/connect-meta.html?service=SERVICE_ID&plan=monthly&connected=1`
11. The Automatiq page shows the order form.
12. The order is stored in Firestore with `connectionStatus: connected`.

## Important
- Do not put Meta App Secret in `firebase-config.js`.
- Do not ask customers for their Facebook password.
- Do not store long-lived Meta tokens in localStorage or front-end JavaScript.
- For Instagram automation, the Instagram account should be a Professional account connected to the Facebook Page.
- Request only the permissions required for the selected workflow.

## n8n pieces
A practical n8n design is:
- Webhook: OAuth start
- HTTP Request: redirect / authorization handling
- Webhook: OAuth callback
- HTTP Request: exchange code
- HTTP Request: fetch authorized Page/account information
- Secure credential / data store: save token and Page ID
- HTTP Request / Graph API nodes: perform automation actions
- Webhook: return connection result to Automatiq

## Front-end configuration
Edit `firebase-config.js`:
`window.AUTOMATIQ_META_CONFIG.oauthUrl = "YOUR_N8N_OAUTH_START_URL";`

The website appends `service`, `plan`, and `returnUrl` query parameters to that URL.
