import React, { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const signup = async (email, password, name) => {
    setError(null);
    setPending(true);

    try {
      const response = await projectAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response.user);
      if (!res) {
        throw new Error("did not go through");
      }
      await response.user.updateProfile({ displayName: name });

      setPending(false);
      setError(null);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setPending(false);
    }
  };

  return { error, isPending, signup };
};
