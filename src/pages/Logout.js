import React, { useEffect } from "react";
import { auth } from "../firebase";

const Logout = () => {
  useEffect(() => {
    auth.signOut();
  }, []);

  return <div>You have been logged out</div>;
};

export default Logout;
