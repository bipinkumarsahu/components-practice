import React from "react";
import ReactDOM from "react-dom";
import faker from '@faker-js/faker';
import CommentDetail from "./CommentDetail.js";
import ApprovalCard from "./ApprovalCard.js";

const App =()=>{
    return (
        <div className="ui comments one cards ">
            <ApprovalCard>Are you sure ?</ApprovalCard>
            <ApprovalCard>
            <CommentDetail author = {faker.name.firstName()} avatar = {faker.image.avatar()} time = {faker.time.recent('abbr')}/>
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author = {faker.name.firstName()} avatar = {faker.image.avatar()} time = {faker.time.recent('abbr')} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author = {faker.name.firstName()} avatar = {faker.image.avatar()} time = {faker.time.recent('abbr')} />
            </ApprovalCard>
            
           
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector("#root") )