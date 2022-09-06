import React, { useState, useContext } from "react";
import { projectAuth } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const logout = async () => {
    setError(null);
    setPending(true);

    try {
      await projectAuth.signOut();

      dispatch({ type: "LOGOUT" });

      setPending(false);
      setError(null);
    } catch (error) {
      setError(error.message);
      console.log(error.message);
      setPending(false);
    }
  };

  return { error, setPending, logout };
};
