import React from "react";
import style from "./newsCard.module.css";

export default function NewsCard(props) {
  let { title, url, urlToImage } = props;

  return (
    <div class="">
      <div class="card m-1 mb-2" style={{ height: "14rem" }}>
        <img
          src={urlToImage}
          class="card-img-top"
          alt="..."
          style={{ height: "7rem" }}
        />
        <div class="card-body">
          <a href={url} rel="noopener noreferrer" target="_blank">
            <p class={`${style.cardHeading} text-justify text-dark`}>{title}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
