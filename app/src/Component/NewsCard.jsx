import React from "react";
import style from "./NewCard.module.css";

export default function NewsCard(props) {
  let { title, url, urlToImage } = props;

  return (
    <div>
      <div class={`card ${style.card}`} style={{ height: "4rem" }}>
        <img
          src={urlToImage}
          class="card-img-top"
          alt="..."
          style={{ height: "3rem" }}
        />
        <div class="card-body">
          <small>
            <a href={url} target="_blank">
              {title}
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
