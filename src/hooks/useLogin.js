import React, { useState, useContext } from "react";
import { projectAuth } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const login = async (email, password) => {
    setError(null);
    setPending(true);
    try {
      const response = await projectAuth.signInWithEmailAndPassword(
        email,
        password
      );
      dispatch({ type: "LOGIN", payload: response.user });

      setPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
      setPending(false);
    }
  };
  return { error, setPending, login };
};
