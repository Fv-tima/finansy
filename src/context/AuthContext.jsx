import { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase-config";
import { googleProvider, fbProvider, appleProvider } from "../firebase-config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function signout() {
    return signOut(auth);
  }

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  function signUpWithGoogle() {
    return signInWithPopup(auth, googleProvider);
  }

  function signUpWithFb() {
    return signInWithPopup(auth, fbProvider);
  }

  function signUpWithApple() {
    return signInWithPopup(auth, appleProvider);
  }

  const userId = currentUser?.uid;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = {
    userId,
    currentUser,
    signin,
    signout,
    signUp,
    signUpWithGoogle,
    signUpWithFb,
    signUpWithApple,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
