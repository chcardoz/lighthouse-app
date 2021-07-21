import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';
import cookie from 'js-cookie';

import firebase from './firebase';
import { createUser } from './db';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = await formatUser(rawUser);
      const { token, ...userWithoutToken } = user;

      createUser(user.uid, userWithoutToken);
      setUser(user);

      cookie.set('fast-feedback-auth', true, {
        expires: 1,
      });

      setLoading(false);
      return user;
    } else {
      setUser(false);
      cookie.remove('fast-feedback-auth');

      setLoading(false);
      return false;
    }
  };

  const signinWithEmail = (email, password) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
        Router.push('/dashboard');
      });
  };

  const signupWithEmail = (email, password) => {
    setLoading(true);
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        handleUser(response.user);
        Router.push('/dashboard');
      });
  };

  const signinWithGoogle = (redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);

        if (redirect) {
          Router.push(redirect);
        }
      });
  };

  const signout = () => {
    Router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    loading,
    signinWithEmail,
    signupWithEmail,
    signinWithGoogle,
    signout,
  };
}

const formatUser = async (user) => {
  const token = await user.getIdToken();
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    token,
  };
};
