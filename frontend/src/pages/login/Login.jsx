import { getRedirectResult, signInWithRedirect } from "firebase/auth";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

import { auth, provider } from "../../services/auth";

import "./Login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getRedirectResult(auth)
      .then((response) => {
        if (!response) return;

        const { user } = response;
        const stringifiedUser = JSON.stringify({
          accessToken: user.accessToken,
          email: user.email,
        });

        localStorage.setItem("user", stringifiedUser);
        navigate("/stores", { replace: true });
      })
      .catch((error) => {
        alert(error.message);
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onClick = async () =>
    signInWithRedirect(auth, provider).catch((error) => {
      alert(error.message);
      console.error(error);
    });

  return (
    <main className="container h-100 d-flex justify-content-center align-items-center">
      <div>
        <p className="logo-text">Brand Logo/Name</p>
        <button className="sign-in-btn" onClick={onClick} disabled={isLoading}>
          <FcGoogle size={25} opacity={isLoading ? 0.55 : 1} />{" "}
          {isLoading ? "Loading. Please wait!" : "Sign In With Google"}
        </button>
      </div>
    </main>
  );
};

export default Login;
