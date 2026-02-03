import {
  collection,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { app } from "./app";
import { sha256 } from "js-sha256";

export const firestore = getFirestore(app);

// Adds a new applicant to join pokerbot
export const addApplicant = async (email: string): Promise<string> => {
  const hash = sha256(Uint8Array.from(email));

  const applicantCollectionRef = collection(firestore, "applicants");
  const applicantDocRef = doc(applicantCollectionRef, hash.toString());

  if ((await getDoc(applicantDocRef)).exists()) {
    throw new Error("Applicant already exists");
  }

  try {
    await setDoc(applicantDocRef, {});
  } catch (error) {
    throw new Error("Error setting the doc" + error);
  }

  return "Success";
};
