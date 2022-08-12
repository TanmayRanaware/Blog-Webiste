let firebaseConfig = {
    apiKey: "AIzaSyAF_aohB21rFvXeLhYUfYxNZIKtri9zBZU",
    authDomain: "blog-website-beb2f.firebaseapp.com",
    projectId: "blog-website-beb2f",
    storageBucket: "blog-website-beb2f.appspot.com",
    messagingSenderId: "261501357596",
    appId: "1:261501357596:web:18dd08df8fb7dacc2f19d9"
  };


firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();