import React, { useState } from "react";
import "./RenderedPage.css";

function RenderedPage()
{
    const[postType, SetpostType]=useState("question");

return(
    <div className="post-container">
        <h2>Create a new Post:</h2>

        <label>
            <input
             type="radio"
             value="question"
             checked={postType == "question"}
             onChange={() => SetpostType("question")}
             />
        Question
        </label>

        <label>
            <input
             type="radio"
             value="article"
             checked={postType == "article"}
             onChange={() => SetpostType("article")}
             />
        Article
        </label>
    
        <hr/>

        {postType == "question" ? (
            <>
            <label className="newpost-label">
                Question Title
            </label>
            <br/>
            <input
             className="newpost-input"
             type="text"
             placeholder="Lets try starting with a how, why and what :)"
             />
             
            <br/>

             <label className="newpost-label">
                Describe your issue
             </label>
             <br/>
             <textarea className="newpost-input"></textarea>
             <br/>

             <label className="newpost-label">
                Tags
             </label>
             <br/>
             <input
              className="newpost-input"
              type="text"
              placeholder="Tag your posts so others can find them easily and possible provide assistance, eg: Java, React"
             />
             <br/>
            </>
        ) : (
            <>
            <label className="newpost-label">
                Article Title
            </label>
            <br/>
            <input
             className="newpost-input"
             type="text"
             placeholder="Lets try starting with a how, why and what :)"
             />
             <br/>

             <label className="newpost-label">
                Abstract 
             </label>
             <br/>
             <textarea className="newpost-input"></textarea>
             <br/>

             <label className="newpost-label">
                Article Text
             </label>
             <br/>
             <textarea className="newpost-input"></textarea>
             <br/>

             <label className="newpost-label">
                Tags
             </label>
             <br/>
             <input
              className="newpost-input"
              type="text"
              placeholder="Tag your posts so others can find them easily and possible provide assistance, eg: Java, React"
             />
             <br/>
            </>
        )}

        <button className="newpost-confirm">Post</button>
    </div>
);
}

export default RenderedPage;
