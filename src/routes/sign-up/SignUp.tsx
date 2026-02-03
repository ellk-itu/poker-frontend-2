import { useEffect, useState } from "react";
import { addApplicant } from "../../firebase/firestore";

// Empty for now but could be our own webpage sometime
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [response, setResponse] = useState<string>();

  const submitForm = async () => {
    try {
      const res = await addApplicant(email);
      setResponse(res);
    } catch (error) {
      if (!(error instanceof Error)) return;
      setResponse(error.toString());
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="flex flex-col gap-8 bg-base-200 p-8 rounded-lg">
        <fieldset className="fieldset">
          <label className="label fieldset-label" htmlFor="">
            Email
          </label>
          <input
            className="input input-primary"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </fieldset>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => {
            submitForm();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
