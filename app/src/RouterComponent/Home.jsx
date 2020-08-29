import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopHeadlines, businessNews, technologyNews } from "../Redux/action";
import HeadingsCard from "../Component/HeadingsCard";
import NewsCard from "../Component/NewsCard";
import { uuid } from "uuidv4";
import Carousel from "react-elastic-carousel";
import style from "./Home.module.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 4 },
];

class Home extends Component {
  componentDidMount() {
    let { getTopHeadlines, businessNews, technologyNews } = this.props;
    getTopHeadlines();
    businessNews();
    technologyNews()
  }

  render() {
    const { topHeadlines, loading, business, technology } = this.props;
    let topThreeHeadings = topHeadlines && topHeadlines.slice(0, 2),
      otherHeadings = topHeadlines && topHeadlines.slice(3, 9),
      headlines = topHeadlines && topHeadlines.slice(10, 16);

    console.log(business);

    return (
      <>
        <div className="container mt-3">
          <p className="font-weight-bolder bg-dark text-light pl-1">TOP NEWS</p>
          <div className="row">
            <div className="col-md-8 col-12">
              <div className="row">
                {topHeadlines &&
                  topThreeHeadings.map((ele) => (
                    <>
                      {loading ? (
                        <div
                          className="spinner-border"
                          role="status"
                          key={uuid()}
                        >
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        <HeadingsCard
                          key={uuid()}
                          title={ele.title}
                          description={ele.description}
                          url={ele.url}
                          urlToImage={ele.urlToImage}
                        />
                      )}
                    </>
                  ))}
              </div>

              <p className="font-weight-bolder mt-4 bg-dark text-light pl-1">
                HEADLINES
              </p>
              <div className="row">
                {topHeadlines &&
                  otherHeadings.map((ele) => (
                    <div
                      className="col-lg-4 col-md-6 col-12 mb-3 border-bottom border-right"
                      key={uuid()}
                    >
                      <a href={ele.url} rel="noopener noreferrer" target="_blank">
                        <p
                          className={`font-weight-bolder text-justify mr-2 ${style.newsTextSize}`}
                        >
                          {ele.title}
                        </p>
                      </a>
                    </div>
                  ))}
              </div>
            </div>

            <div className="col-md-4 col-12">
              <div className="row pl-5 pb-1 pt-1">
                {topHeadlines &&
                  headlines.map((ele) => (
                    <div className="row bg-light border-bottom" key={uuid()}>
                      <img
                        alt="..."
                        src={ele.urlToImage}
                        className="col-4 d-flex flex-column jstify-conent-center"
                        style={{ height: "60px" }}
                      />
                      <div className="col-8">
                        <a href={ele.url} rel="noopener noreferrer" target="_blank">
                          <p
                            className={`float-right text-justify ${style.newsTextSize}`}
                          >
                            {ele.title}
                          </p>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <p className="font-weight-bolder mt-4 bg-dark text-light pl-1">
            Business
          </p>
          <div className="row">
            <Carousel breakPoints={breakPoints} pagination={false}>
              {business &&
                business.map((ele) => (
                  <div className="p-1 col-12">
                    <NewsCard
                      key={uuid()}
                      title={ele.title}
                      url={ele.url}
                      urlToImage={ele.urlToImage}
                    />
                  </div>
                ))}
            </Carousel>
          </div>

          <p className="font-weight-bolder mt-4 bg-dark text-light pl-1">
            Technology
          </p>
          <div className="row">
            <Carousel breakPoints={breakPoints} pagination={false} >
              {technology &&
                technology.map((ele) => (
                  <div className="p-1 col-12">
                    <NewsCard
                      key={uuid()}
                      title={ele.title}
                      url={ele.url}
                      urlToImage={ele.urlToImage}
                    />
                  </div>
                ))}
            </Carousel>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  topHeadlines: state.topHeadlines,
  loading: state.loading,
  business: state.business,
  technology: state.technology
});

const mapDispatchToProps = (dispatch) => ({
  getTopHeadlines: () => dispatch(getTopHeadlines()),
  businessNews: () => dispatch(businessNews()),
  technologyNews: () => dispatch(technologyNews())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
