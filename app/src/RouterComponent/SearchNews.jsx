import React, { Component } from "react";
import { connect } from "react-redux";
import { uuid } from "uuidv4";
import NewsCard from "../Component/NewsCard";
import HomeSideBarNews from "../Component/HomeSideBarNews";

class SearchNews extends Component {
  render() {
    const { searchItems, topHeadlines } = this.props;

    return (
      <>
        <div className="container mt-3">
          <p className="font-weight-bolder pl-1">Search Results ...</p>
          <div className="row">
            <div className="col-8">
              <div className="row">
                {searchItems &&
                  searchItems.map((ele) => (
                    <div className="col-11 col-lg-4 col-md-6" key={uuid()}>
                      {topHeadlines ? (
                        <NewsCard
                          title={ele.title}
                          url={ele.url}
                          urlToImage={ele.urlToImage}
                        />
                      ) : (
                        <div
                          className="spinner-border"
                          role="status"
                          key={uuid()}
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
            <div className="col-4">
              {topHeadlines &&
                topHeadlines.map((ele) => (
                  <HomeSideBarNews
                    urlToImage={ele.urlToImage}
                    title={ele.title}
                    url={ele.url}
                  />
                ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  searchItems: state.searchItems,
  topHeadlines: state.topHeadlines,
});

export default connect(mapStateToProps, null)(SearchNews);
