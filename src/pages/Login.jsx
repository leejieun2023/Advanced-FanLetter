import IsLogin from "components/IsLogin";
import SignUp from "components/SignUp";
import { useState } from "react";

export default function Login() {

  const [isLoginView, setIsLoginView] = useState(true);
  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div>
      {isLoginView ? (
        <>
          <IsLogin onSignUpClick={toggleView} />
        </>
      ) : (
        <>
          <SignUp />

        </>
      )}

    </div>
  );
}
