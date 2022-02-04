import React from "react";
import ReactDOM from "react-dom";

const App =()=>{
    return (
        <div className="ui container comments">
            <div className="comment">
            <a src="/" className="avatar">
                <img alt="Avatar"></img>
            </a>
            <div className="content">
                <a class Name="author">Sam</a>
                <div className="metadata">
                    <span className="date"> Today at 9.30</span>
                </div>
                <div className="text"> Nice post!</div>
               

            </div>
            </div>
            
           
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root") )