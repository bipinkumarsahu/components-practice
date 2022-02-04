import React from "react";
import ReactDOM from "react-dom";
import faker from '@faker-js/faker';

const App =()=>{
    return (
        <div className="ui container comments">
            <div className="comment">
            <a  className="avatar">
                <img src={faker.image.avatar()} alt="Avatar"></img>
            </a>
            <div className="content">
                <a className="author">{faker.name.firstName()}</a>
                <div className="metadata">
                    <span className="date"> {faker.date.weekday(true)} {faker.time.recent('abbr')}</span>
                </div>
                <div className="text"> {faker.lorem.lines(2)}</div>
               

            </div>
            </div>
            
           
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root") )