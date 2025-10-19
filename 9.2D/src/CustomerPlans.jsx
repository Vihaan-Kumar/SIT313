import { useNavigate } from "react-router-dom";
import "./Authentication.css";

function CustomerPlans() {
  const navigate = useNavigate();

  return (
    <>
      <header className="navbar">
        <h1>DEV@Deakin</h1>
        <div className="nav-links">
          <span onClick={() => navigate("/home")}>Home</span>
          <span onClick={() => navigate("/post")}>Post</span>
          <span onClick={() => navigate("/login")}>Logout</span>
        </div>
      </header>


      <div className="auth-container">
        <div className="plans-container">
          <h2>Choose Your Plan</h2>
          <div className="plans-grid">
            <div className="plan-card">
              <h3>Free Plan</h3>
              <p>Basic access to DEV@Deakin community features.</p>
              <ul>
                <li>✓ View posts</li>
                <li>✓ Comment and react</li>
                <li>✗ No advanced analytics</li>
              </ul>
              <button className="btn-primary" onClick={() => navigate("/home")}>
                Continue Free
              </button>
            </div>

            <div className="plan-card premium">
              <h3>Premium Plan</h3>
              <p>Unlock premium features and customization tools.</p>
              <ul>
                <li>✓ Advanced analytics</li>
                <li>✓ Custom themes & banners</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="btn-primary" onClick={() => navigate("/payment")}>
                Upgrade to Premium
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default CustomerPlans;
