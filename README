# Dematrix shop manager

A single-file offline-capable web app for recording sales, repairs, trade-ins and inventory.
Everything is stored in the browser (`localStorage`) — no server needed to run it.

## Run it locally (right now)
Just double-click `index.html`, or open it in any browser. That's it — no install.

## Put it on GitHub and host it online (GitHub Pages — free)

1. **Create a GitHub account** (if you don't have one): https://github.com/join

2. **Create a new repository**
   - Go to https://github.com/new
   - Name it something like `dematrix-shop-manager`
   - Set it to **Public** (GitHub Pages free tier requires this, unless you have GitHub Pro)
   - Click "Create repository"

3. **Upload the file**
   - On the new repo page, click "uploading an existing file"
   - Drag in `index.html` (and this `README.md` if you like)
   - Click "Commit changes"

4. **Turn on GitHub Pages**
   - Go to the repo's **Settings** tab → **Pages** (left sidebar)
   - Under "Build and deployment" → Source, choose **Deploy from a branch**
   - Branch: `main`, folder: `/ (root)` → Save
   - Wait 1–2 minutes. GitHub will give you a link like:
     `https://yourusername.github.io/dematrix-shop-manager/`

5. **That link is your live app.**
   - Open it on the shop desktop/laptop — bookmark it there.
   - Open the *same link* on your phone to check in on things.

## How the data works now (Firebase real-time sync)

The app now syncs through Firebase, so the shop desktop and your phone see the same live data:

- Every save pushes to a shared Firestore document. Any other device signed in sees the change within a second or two.
- The shop desktop still works **offline** — Firestore caches data locally in the browser and syncs automatically once the connection returns.
- A sign-in screen protects the data — only email/password accounts you create can see it (see setup below).
- The header shows a small sync status ("Synced" / "Offline — saved on this device").

### One-time Firebase setup (do this before first use)

1. **Turn on Firestore**
   - Go to https://console.firebase.google.com → your `dematrix-shop-manager` project
   - Left sidebar → **Build → Firestore Database** → **Create database** → Start in **production mode** → pick a region close to Nigeria (e.g. `eur3` or `europe-west`) → Enable

2. **Apply the security rules**
   - In Firestore → **Rules** tab, replace the contents with what's in `firestore.rules` (included here), then **Publish**

3. **Turn on Email/Password sign-in**
   - Left sidebar → **Build → Authentication** → **Get started**
   - Sign-in method tab → enable **Email/Password**

4. **Create a login for yourself and the shop**
   - Authentication → **Users** tab → **Add user**
   - Enter an email and password for yourself, and one for the shop computer (can be the same login if you prefer)
   - These are the credentials typed into the app's sign-in screen — there's no public sign-up, only accounts you create here

Once those four things are done, opening `index.html` (or your GitHub Pages link) on any device and signing in with one of those accounts gives real-time synced access.

### Backup (still recommended)
Use **Settings → Export backup** occasionally to download a `.json` snapshot as an extra safety copy, independent of Firebase.

## Updating the app later
Any time you want changes, edit `index.html` and re-upload it to the same GitHub repo (or ask me to make the change and re-upload the new version) — GitHub Pages updates automatically within a minute or two of a new commit.

## Password
The Capital & profit/loss section's default password is `admin123` — change it immediately from Settings → Capital & profit/loss password.
