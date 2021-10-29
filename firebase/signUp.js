import react from 'react'
import { getAuth, onAuthStateChanged, FacebookAuthProvider, signInWithCredential } from 'firebase/auth';

import { getDatabase, ref, set } from 'firebase/database';

function storeHighScore(user, score) {
  if (user != null) {
    const database = getDatabase();
    set(ref(db, 'users/' + user.uid), {
      highscore: score,
    });
  }
}