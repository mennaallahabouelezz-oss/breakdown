// إعدادات قاعدة البيانات المشتركة (Firebase)
window.RT_CONFIG = {
  // فارغ = دخول تلقائي بدون كلمة مرور (Anonymous)
  teamEmail: "",
  // حساب الإدارة (Firebase ▸ Authentication ▸ Users): كلمة مرور هذا الحساب هي كلمة مرور تبويب الإدارة المخفي
  adminEmail: "admin@radytrans.app",
  firebase: {
    apiKey: "AIzaSyAhp6-oOEO1wf6Wy9MrhN-BT_KjmVbtrJM",
    authDomain: "radytrans-breakdowns.firebaseapp.com",
    projectId: "radytrans-breakdowns",
    storageBucket: "radytrans-breakdowns.firebasestorage.app",
    messagingSenderId: "668552550308",
    appId: "1:668552550308:web:d199f50c589b47aada9331"
  },
  // ربط بوابة الصيانة (قراءة فقط): يظهر في تقرير PDF فقط — لا يظهر داخل التطبيق
  pmPortal: {
    collection: "radyTransMaintenanceRecords",
    firebase: {
      apiKey: "AIzaSyC9qoVbvwh_kbiynyLCOgUTal21z6NQ5jc",
      authDomain: "rady-trans-maintenance.firebaseapp.com",
      projectId: "rady-trans-maintenance",
      storageBucket: "rady-trans-maintenance.firebasestorage.app",
      messagingSenderId: "981350250039",
      appId: "1:981350250039:web:cbc1294ef7aa2ecc69b1b2"
    }
  }
};
