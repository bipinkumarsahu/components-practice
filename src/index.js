import React from "react";
import ReactDOM from "react-dom";
import faker from '@faker-js/faker';
import CommentDetail from "./CommentDetail.js";

const App =()=>{
    return (
        <div className="ui container comments">
            <CommentDetail author = {faker.name.firstName()} avatar = {faker.image.avatar()} time = {faker.time.recent('abbr')}/>
            <CommentDetail author = {faker.name.firstName()} avatar = {faker.image.avatar()} time = {faker.time.recent('abbr')} />
            <CommentDetail author = {faker.name.firstName()} avatar = {faker.image.avatar()} time = {faker.time.recent('abbr')} />
            
           
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root") )