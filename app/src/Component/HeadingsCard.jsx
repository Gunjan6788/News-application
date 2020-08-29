import React from "react";
import style from './HeadingsCard.module.css'

export default function HeadingsCard(props) {
  let { title, url, urlToImage } = props;
  console.log(url);
  return (
    <div className="col-11 col-lg-6">
      <div className="card " style={{ height: "18rem" }}>
        <img
          src={urlToImage}
          className="card-img-top"
          alt="..."
          style={{ height: "10rem" }}
        />
        <div className="card-body">
          <a href={url} rel="noopener noreferrer" target="_blank">
            <h5 className={`${style.cardHeading}`}>{title}</h5>
          </a>
        </div>
      </div>
    </div>
  );
}
