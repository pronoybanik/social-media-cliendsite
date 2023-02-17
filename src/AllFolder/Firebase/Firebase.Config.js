import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBtu6bGCzy9KVJjHgJg3v4V01vFHDQ09MU",
    authDomain: "social-media-cliendsite.firebaseapp.com",
    projectId: "social-media-cliendsite",
    storageBucket: "social-media-cliendsite.appspot.com",
    messagingSenderId: "542984016079",
    appId: "1:542984016079:web:205e3d3bd062be5577a7ba"
};

const app = initializeApp(firebaseConfig);

export default app;
