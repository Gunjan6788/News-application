import React from "react";

export default function HeadingsCard(props) {
  let { title, description, url, urlToImage } = props;
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
        {/* <div className="card-img-overlay d-flex flex-column justify-content-center">
          <a href={url} target="_blank">
            <h5 className="card-title ">{title}</h5>
          </a>
        </div> */}
        <div className="card-body">
          <p className="card-text">{title}</p>
        </div>
      </div>
    </div>
  );
}
