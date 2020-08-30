import React from "react";
import style from "./newsCard.module.css";

export default function NewsCard(props) {
  let { title, url, urlToImage, date } = props;

  return (
    <div
      className="card m-1 mb-2 overflow-hidden"
      style={date ? { height: "20rem" } : { height: "16rem" }}
    >
      <img
        src={urlToImage}
        className="card-img-top"
        alt="..."
        style={{ height: "7rem" }}
      />
      <div className="card-body">
        <a href={url} rel="noopener noreferrer" target="_blank">
          <p className={`${style.cardHeading} text-justify text-dark`}>
            {title}
          </p>
        </a>
      </div>
      {date && (
        <div className="card-footer">
          <small className="text-seconday">
            - {date < 10 ? date.slice(1, 2) : date} hours ago ...
          </small>
        </div>
      )}
    </div>
  );
}
