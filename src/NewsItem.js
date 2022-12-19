import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl} = this.props
    return (
      <div className="my-3">
        <div class="card" style={{width: "18rem;"}}>
          <img src={!imageUrl?"https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/12/13101821/hakutor-2020-879x485-1.jpg":imageUrl} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              {description}
            </p>
            <a href={newsUrl} target="__blank" class="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
