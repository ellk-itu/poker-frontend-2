import { useContext, useState } from "react";
import { addApplicant } from "../../firebase/firestore";
import { alertContext } from "../../common/useAlert/Alert";

// Empty for now but could be our own webpage sometime
export default function SignUp() {
  const [email, setEmail] = useState("");

  const alert = useContext(alertContext);

  const submitForm = async () => {
    try {
      const res = await addApplicant(email);
      alert("info", res);
    } catch (error) {
      if (!(error instanceof Error)) return;
      alert("warning", error.toString());
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <div className="flex-down gap-8 bg-base-200 p-8 rounded-lg w-1/2">
        <p className="font-display-alternative text-4xl text-primary">
          Sign up here!
        </p>
        <fieldset className="fieldset">
          <label className="label fieldset-label text-md" htmlFor="">
            Email
          </label>
          <input
            className="input input-primary input-lg w-full"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="your@mail.here"
          />
          <p className="text-sm text-neutral max-w-[52em]">
            Don't worry. We don't use your email for anything else than to see
            how many would be joining. Don't believe us. All our code is open
            source [Link to the thing]
          </p>
        </fieldset>
        <button
          className="btn btn-primary btn-lg w-1/3 self-end"
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
