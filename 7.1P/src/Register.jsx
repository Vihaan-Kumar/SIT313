import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import "./Authentication.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
      });

      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="auth-container">
      <header className="navbar">
        <h1>DEV@Deakin</h1>
      </header>
      <div className="form-box">
        <h2>Create a DEV@Deakin Account</h2>
        <form onSubmit={handleRegister}>
          <label>Name*</label>
          <input type="text" placeholder="Enter Username" onChange={(e) => setName(e.target.value)} required />

          <label>Email*</label>
          <input type="email" placeholder="Enter email address" onChange={(e) => setEmail(e.target.value)} required />

          <label>Password*</label>
          <input type="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} required />

          <label>Confirm password*</label>
          <input type="password" placeholder="Enter password again" onChange={(e) => setConfirmPassword(e.target.value)} required />

          <button type="submit" className="btn-primary">Create</button>
        </form>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="link">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
