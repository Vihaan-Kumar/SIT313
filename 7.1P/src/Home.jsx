import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";

function Home() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      {/* Navbar with search + links */}
      <header className="navbar">
        <h1>DEV@Deakin</h1>
        <input type="text" placeholder="Search..." className="search-bar" />
        <div className="nav-links">
          <span>Post</span>
          <span onClick={handleLogout} className="logout-link">
            Logout
          </span>
        </div>
      </header>

      {/* Content */}
      <div className="auth-container">
        <div className="form-box">
          <h2>Welcome to DEV@Deakin 🎉</h2>
          <p>You are logged in successfully!</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
