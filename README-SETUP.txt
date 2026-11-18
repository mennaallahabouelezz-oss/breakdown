RADY TRANS - Unified App (بلاغ عطل خارجى + الصيانات المتأخرة للأسطول) with entrance codes

OPEN:  index.html  (the only entry point). Enter the code -> choose the app -> switch any time from the top bar.

A) Firebase (once) - project "radytrans-breakdowns"
  1. Firestore > Rules > paste firestore.rules > Publish   (adds the appUsers rules; nothing else changes)
  2. Authentication > Users > admin@radytrans.app > set the password to  Rady@2026
     (this one password is used for: uploading the cars workbook, and the Users screen)
  The data (reports, cars workbook, maintenance sheets, plans) stays in the SAME Firebase databases as before. Nothing was moved.

B) Upload ALL files + lib folder to GitHub/Netlify (replace the old ones).

C) First run
  1. Sign in with code 2001 (Menna) > "المستخدمون" > password > press "تحديث المستخدمين الأساسيين" once.
  2. Users: Nour 1988, Menna 2001, محمود فايز 111, محمد على سليم 23, اسلام الجمال 35, فايز 40, صبرى مرزوق 55,
     عماد الجوهرى 77, مصطفى حكيم 80, محمد حسن 100, حمادة سليم 90.

WHO CAN DO WHAT
  Menna : everything; only she uploads/deletes maintenance sheets (password Rady@2026) and uploads the cars workbook (password);
          completes/edits any report (like Nour); can delete reports; manages users.
  Nour  : both apps, completes/edits any report, deletes reports.
  Engineers (incl. the 4 new): both apps; their name is fixed in the report form; they complete only their own reports.
