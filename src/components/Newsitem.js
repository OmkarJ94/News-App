import React, { Component } from "react";
import "./card.css"
export class Newsitem extends Component {
  render() {
    let { title, description, imageurl, newsUrl, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem", marginTop: "10px" }}>
          <img
            src={
              !imageurl
                ? "http://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"
                : imageurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h6>
              Source: <span className="badge bg-secondary">{source}</span>
            </h6>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
            <hr/>
            <p className="card-text">
              <small className="text-muted">
                Publish On {new Date(date).toGMTString()}<hr/> by{" "}
                {!author ? <b>Unknown</b> : author}
              </small>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
