import { credentials } from './../node_modules/google-gax/node_modules/@grpc/grpc-js/src/index';
import { Firestore } from "firebase-admin/firestore";
import {getApps} from "firebase-admin/app";
import admin,  {initializeApp} from "firebase-admin";

const serviceAccount = {
  "type": "service_account",
  "project_id": "fire-homes-course-b5637",
  "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
  "private_key": process.env.FIREBASE_PRIVATE_KEY,
  "client_email": process.env.FIREBASE_CLIENT_EMAIL,
  "client_id": process.env.FIREBASE_CLIENT_ID,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40fire-homes-course-b5637.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
}

let firestore: Firestore;
const currentApps = getApps();

if (!currentApps.length) {
  const app = initializeApp({credential: admin.credential
    .cert(serviceAccount)});
   });
  auth = getAuth(app);
  storage = getStorage(app);
} else {
  const app = currentApps[0];
  auth = getAuth(app);
  storage = getStorage(app);
}

