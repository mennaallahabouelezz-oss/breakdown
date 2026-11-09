RADY TRANS - Breakdown App (Firebase shared database, NO password for users)

A) Firebase (once)
 1. console.firebase.google.com -> your project (or Add project).
 2. Build > Authentication > Get started > Sign-in method > "Anonymous" > Enable > Save.
 3. Build > Firestore Database > Create database (production mode, any region).
    Rules tab > paste the contents of firestore.rules > Publish.
 4. Project settings (gear) > General > Your apps > Web (</>) > register app > copy the firebaseConfig values.
 5. Open config.js and paste the values (leave teamEmail empty).

B) Netlify
 Netlify > your site > Deploys > drag & drop THIS whole folder.
 Then Firebase > Authentication > Settings > Authorized domains: add your Netlify domain (xxxx.netlify.app).

C) Phones
 Open the site in Chrome > menu > "Install app" / "Add to Home screen" (iPhone: Safari > Share > Add to Home Screen).
 No login screen. Old records saved on a device are uploaded automatically the first time.
