// TODO: Set up Firebase Cloud Messaging service worker
import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging/sw';
import { getFirebaseConfig } from './firebase-config';

const firebaseApp = initializeApp(getFirebaseConfig());
getMessaging(firebaseApp);
console.info('Firebase messaging service worker is set up');

//Service Worker 只需要加載和初始化 Firebase Cloud Messaging SDK，它將負責顯示通知。
