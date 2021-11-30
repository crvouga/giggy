import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "./firebase";

type ISignInMethod = {
  type: "google";
};

export const signIn = async (method: ISignInMethod) => {
  if (method.type === "google") {
    await signInWithRedirect(auth, new GoogleAuthProvider());
  }

  return {
    errors: [new Error("Unsupported sign in method")],
  };
};
