import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home.jsx";
import RenderedPage from "./RenderedPage.jsx";
import "./App.css";

function App()
{
  return(
    <div>
      <nav className="navbar">
        <Link to="/">Home</Link> | <Link to="/next-page">New Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/next-page" element={<RenderedPage/>}/>
      </Routes>
    </div>
  );
}

export default App;