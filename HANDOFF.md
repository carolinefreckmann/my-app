# Project Handoff

## Who is Caroline?
15 years old, new to coding, in a summer course called Shipyard. She learns by DIRECTING Claude — not typing code herself. She is graded on understanding, not just output. Always explain before doing, keep language simple, and check her understanding. One concrete example beats a wall of text.

## What is this app?
A Locket-style photo sharing app built in React. Users log in, post a photo, and see their friends' photos.

## Where does everything live?
- Code: `~/my-app` (this folder)
- Live site: https://my-app-six-iota-38.vercel.app/
- GitHub: https://github.com/carolinefreckmann/my-app
- Stack: React + Vite. No back-end or database yet.

## What we built so far (front-end only)

### Login screen
- Upload a profile photo
- Type your name
- Type a passcode (any characters)
- Hit "let's go" to enter the app
- Login is saved in localStorage so you stay logged in after reloading

### Locket screen (after login)
- Profile chip in the top-left corner showing your name and avatar
- 🥐 logo at the top
- Big circular photo frame — tap "send a photo" to fill it with a photo from your device
- Friends section below with placeholder circles (fake names: Mia, Jordan, Sofia, Blake, Riley)

### Git history
Every change was committed and pushed to GitHub. Vercel auto-deploys on every push.

## What is NOT built yet
1. **Back-end** — there is no server. The passcode is not verified against anything real.
2. **Database** — nothing is saved permanently on a server. Photos and login disappear if you clear the browser.
3. **Real friends** — the friends section is hardcoded fake data. Real friends would require accounts stored in a database.
4. **Real accounts** — right now anyone can type any name and "log in." No real authentication exists.

## The exact next step
Add a **log out button** to the locket screen so Caroline can switch accounts without clearing localStorage manually. This is small, visible, and sets up the idea of session management before we tackle the back-end.

After that, the big next milestone is: **start the back-end** — a simple Node.js/Express server that can receive the login form and check a real username + passcode.
