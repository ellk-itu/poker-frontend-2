import { useContext, useState } from "react";
import { addApplicant } from "../../firebase/firestore";
import { alertContext } from "../../common/useAlert/Alert";
import backgroundImage from "../../assets/IMG_2584 1.png";

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
    <div className="flex-1 flex min-h-[90vh]">
      <div className="flex-1 flex p-16 items-center justify-center">
        <div className="w-3/5 min-w-[300px] flex-down gap-8">
          <p className="font-display-alternative text-4xl text-primary w-full">
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
              how many would be joining. Don't believe us. All our code is{" "}
              <a
                href="https://github.com/ellk-itu/poker-frontend-2"
                className="link"
              >
                open source
              </a>
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
      <div className="flex-1 h-full relative">
        <img src={backgroundImage} className="h-full object-cover" />
      </div>
    </div>
  );
}
