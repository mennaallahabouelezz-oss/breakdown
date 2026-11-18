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

UPDATE v2 (do this once after uploading the new files)
  1. Upload ALL files to GitHub/Netlify (replace the old ones; sw.js cache is bumped to v2).
  2. Sign in with 2001 (Menna) > "المستخدمون" > password > press "تحديث المستخدمين الأساسيين" ONCE.
     (This applies the new app access below to the existing users. No Firebase rules change is needed.)

WHO SEES WHAT
  Both apps + switch (home screen with the 2 choices):  Menna, Nour, محمد على سليم (23), محمود فايز (111), محمد حسن (100)
  Breakdown app ONLY (opens directly, no switch):       اسلام الجمال (35), فايز (40), صبرى مرزوق (55)
  Maintenance app ONLY (opens directly, no switch):     عماد الجوهرى (77), مصطفى حكيم (80), حمادة سليم (90)

MAINTENANCE APP
  Menna : sees + manages the uploaded files (upload / delete / clear, with password), the PM analysis, and the user-activity report.
  Nour  : sees the uploaded-files list, the PM analysis and the user-activity report (view only - cannot upload/delete/edit).
  Everyone else : no upload card, no analysis, no report - only the plate-number search, centered in the page.

USER ACTIVITY REPORT (Menna & Nour only)
  Maintenance app > button "تقرير نشاط المستخدمين" > pick the user + day (or from/to dates) > "طباعة / حفظ PDF".
  Per day: every plate the user searched (time) + every task he closed / re-opened (plate, customer, task, status, time). Cairo time.
  Recording starts from this version (older closures have no user name). The log is stored in the same shared database
  (one document per user per day, kind "activity") and is NOT deleted by "Delete all / Clear saved data".
  The "Closed tasks report" now also has a "Closed by" column.

Other permissions (unchanged): breakdown reports - Menna and Nour complete/edit any report and can delete; engineers complete only their own.
