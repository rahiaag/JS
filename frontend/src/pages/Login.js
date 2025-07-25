import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/Config.js";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  async function signIn() {
    await signInWithPopup(auth, googleProvider);
    navigate("/dashboard");
  }

  return (
    <div className="login-container">
      <button className="login-button"
        onClick={signIn}
      >
        Sign in with Google
      </button>
    </div>
  );
};

export default Login;
