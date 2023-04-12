import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  getAuth,
} from 'firebase/auth';
// Configs
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    // const credentials = GoogleAuthProvider.credentialFromResult(result);
    const { displayName, email, photoURL, uid } = result.user;

    return {
      success: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      success: false,
      errorCode,
      errorMessage,
    };
  }
};

export const signInWithEmail = async ({ displayName, email, password }) => {
  try {
    const result = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, photoURL } = result.user;

    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      success: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      success: false,
      errorCode,
      errorMessage,
    };
  }
};

export const loginWithEmail = async ({ email, password }) => {
  try {
    const result = await signInWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );

    const { uid, displayName, photoURL } = result.user;

    return {
      success: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    return {
      success: false,
      errorCode,
      errorMessage,
    };
  }
};

export const logoutFirebase = async () => await FirebaseAuth.signOut();
