import react from "react";
import faker from "@faker-js/faker";

const CommentDetail = props=>{

    console.log(props);

  return(

    <div className="comment">
            <a  className="avatar">
                <img src={faker.image.avatar()} alt="Avatar"></img>
            </a>
            <div className="content">
                <a className="author">{props.author}</a>
                <div className="metadata">
                    <span className="date"> {faker.date.weekday(true)} {faker.time.recent('abbr')}</span>
                </div>
                <div className="text"> {faker.lorem.lines(1)}</div>
               

            </div>
            </div>
  )

}

export default CommentDetail;