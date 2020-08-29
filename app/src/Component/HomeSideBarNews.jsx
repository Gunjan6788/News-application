import React from "react";
import { uuid } from "uuidv4";
import style from "./HomeSideBarNews.module.css";

export default function HomeSideBarNews(props) {
  const { url, title, urlToImage } = props;

  return (
    <div className="row bg-light border-bottom" key={uuid()}>
      <img
        alt="..."
        src={urlToImage}
        className="col-4 d-flex flex-column jstify-conent-center"
        style={{ height: "60px" }}
      />
      <div className="col-8">
        <a href={url} rel="noopener noreferrer" target="_blank">
          <p className={`float-right text-justify ${style.newsTextSize}`}>
            {title}
          </p>
        </a>
      </div>
    </div>
  );
}
