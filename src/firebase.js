import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCrJoKpocnI_wukrkR3Hszq6W_Pcd2ks94",
  authDomain: "stdsajunction.firebaseapp.com",
  databaseURL: "https://stdsajunction-default-rtdb.firebaseio.com",
  projectId: "stdsajunction",
  storageBucket: "stdsajunction.appspot.com",
  messagingSenderId: "350564667648",
  appId: "1:350564667648:web:8d270ec393e906b71ae3e5"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app)

// import { initializeApp } from "firebase/app";
// import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: "AIzaSyBEFIdzSRpFi8xvNq_xW7cdGrgUYAxDQEY",
//   authDomain: "imageuploaddb-c7d98.firebaseapp.com",
//   projectId: "imageuploaddb-c7d98",
//   storageBucket: "imageuploaddb-c7d98.appspot.com",
//   messagingSenderId: "150465952860",
//   appId: "1:150465952860:web:03dd5bf5d383e71bc1ba99"
// };

// const app = initializeApp(firebaseConfig);
// export const imageDb = getStorage(app)