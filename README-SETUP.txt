RADY TRANS - Breakdown App (Firebase shared database)

USERS: no password. Every device signs in automatically (Anonymous).
ADMIN: hidden tab. Tap the Rady Trans logo (top right) 5 times quickly -> enter the admin password.

A) Firebase (once)
 1. Authentication > Sign-in method:  Anonymous = Enabled  AND  Email/Password = Enabled.
 2. Authentication > Users > Add user:
        email    = admin@radytrans.app
        password = (the admin password, e.g. MENNA@2025)
    (this password is checked by Firebase itself; it is not written anywhere in the app files)
 3. Firestore Database > Rules > paste firestore.rules > Publish.
 4. config.js: keep teamEmail empty; adminEmail must equal the email in step 2 AND in firestore.rules.

B) Upload to GitHub (repo "breakdown"): Add file > Upload files > drag ALL the files and the lib folder > Commit.

C) Admin: upload the cars workbook
 Open the app > tap the logo 5 times > password > "الإدارة" tab > choose the Excel file >
 check the customer names > "حفظ واستبدال الكشف القديم". Re-upload any time: the old one is replaced.
