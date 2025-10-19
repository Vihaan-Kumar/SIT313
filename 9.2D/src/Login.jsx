import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./Authentication.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="auth-container">
      <header className="navbar">
        <h1>DEV@Deakin</h1>
      </header>

      <div className="form-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Your email</label>
          <input type="email" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} required />

          <label>Your password</label>
          <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />

          <button type="submit" className="btn-primary">Login</button>
        </form>
        {error && <p className="error">{error}</p>}

        <p>
          Don’t have an account?{" "}
          <Link to="/register" className="link">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
