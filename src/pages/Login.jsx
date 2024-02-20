import IsLogin from "components/IsLogin";
import Membership from "components/Membership";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {

  const [isLoginView, setIsLoginView] = useState(true);
  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  return (
    <div>
      {isLoginView ? (
        <>
          <IsLogin onSignUpClick={toggleView}/>
        </>
      ) : (
        <>
          <Membership onSignUpClick={toggleView}/>

        </>
      )}

    </div>
  );
}
