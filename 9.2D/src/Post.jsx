import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { markdown } from "@codemirror/lang-markdown";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";

function Post() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  return (
    <>

      <header className="navbar">
        <h1>DEV@Deakin</h1>
        <div className="nav-links">
          <span onClick={() => navigate("/home")}>Home</span>
          <span onClick={() => navigate("/plans")}>Plans</span>
          <span onClick={() => navigate("/login")}>Logout</span>
        </div>
    </header>
    
      <div className="post-container">
        <h2>Create a Post</h2>
        <CodeMirror
          value={content}
          height="200px"
          extensions={[markdown()]}
          onChange={(value) => setContent(value)}
        />
        <div className="preview-box">
          <h3>Preview</h3>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
  );
    </>
  );
}

export default Post;
