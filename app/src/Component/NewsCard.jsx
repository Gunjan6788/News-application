import React from "react";

export default function NewsCard(props) {
  let { title, url, urlToImage } = props;

  return (
    <div class="col-11 col-lg-2">
      <div class="card m-1" style={{ height: "25rem" }}>
        <img
          src={urlToImage}
          class="card-img-top"
          alt="..."
          style={{ height: "6rem" }}
        />
        <div class="card-body">
          <a href={url} target="_blank">
            <h5 class="card-title ">{title}</h5>
          </a>
        </div>
      </div>
    </div>
  );
}
