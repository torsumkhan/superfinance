import React, { useState, useContext } from "react";
import { projectAuth } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const signup = async (email, password, name) => {
    setError(null);
    setPending(true);

    try {
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response.user);
      if (!response) {
        throw new Error("did not go through");
      }
      await response.user.updateProfile({ displayName: name });

      dispatch({ type: "LOGIN", payload: response.user });

      setPending(false);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setPending(false);
    }
  };

  return { error, setPending, signup };
};
