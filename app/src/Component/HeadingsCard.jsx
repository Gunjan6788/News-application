import React from "react";

export default function HeadingsCard(props) {
  let { title, description, url, urlToImage } = props;
  console.log(url);
  return (
    <div class="col-11 col-lg-6">
      <div class="card " style={{ height: "18rem" }}>
        <img
          src={urlToImage}
          class="card-img-top"
          alt="..."
          style={{ height: "10rem" }}
        />
        {/* <div class="card-img-overlay d-flex flex-column justify-content-center">
          <a href={url} target="_blank">
            <h5 class="card-title ">{title}</h5>
          </a>
        </div> */}
        <div class="card-body">
          <p class="card-text">{title}</p>
        </div>
      </div>
    </div>
  );
}
