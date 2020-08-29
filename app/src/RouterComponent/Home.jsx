import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopHeadlines, businessNews } from "../Redux/action";
import HeadingsCard from "../Component/HeadingsCard";
import { uuid } from "uuidv4";
import NewsCard from "../Component/NewsCard";
import Carousel from "react-elastic-carousel";
import "./Home.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 6 },
];

class Home extends Component {
  componentDidMount() {
    let { getTopHeadlines, businessNews } = this.props;
    getTopHeadlines();
    businessNews();
  }

  render() {
    const { topHeadlines, loading, business } = this.props;
    let topThreeHeadings = topHeadlines && topHeadlines.slice(0, 2),
      otherHeadings = topHeadlines && topHeadlines.slice(3, 9),
      headlines = topHeadlines && topHeadlines.slice(10, 17);

    console.log(business);

    return (
      <>
        <div className="container mt-3">
          <p className="font-weight-bolder bg-dark text-light pl-1">TOP NEWS</p>
          <div className="row">
            <div className="col-8">
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

              <p className="font-weight-bolder mt-4 bg-dark text-light pl-1">HEADLINES</p>
              <div className="row">
                {topHeadlines &&
                  otherHeadings.map((ele, i) => (
                    <div
                      className="col-lg-4 col-md-6 col-12 mb-3 border-bottom border-right"
                      key={uuid()}
                    >
                      <p className="font-weight-lighter text-justify news-text-size mr-2">
                        {ele.title}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            <div className="col-4">
              <div className="row pl-5 pb-1 pt-1">
                {topHeadlines &&
                  headlines.map((ele) => (
                    <div className="row bg-light border-bottom" key={uuid()}>
                      <img
                        src={ele.urlToImage}
                        className="col-4 d-flex flex-column jstify-conent-center"
                        style={{ height: "60px" }}
                      />
                      <div className="col-8">
                        <p className="float-right text-justify news-text-size">
                          {ele.title}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        
          <p className="font-weight-bolder mt-4 bg-dark text-light pl-1">Business</p>
          <div className="row">
            <Carousel breakPoints={breakPoints}>
              {business &&
                business.map((ele) => (
                  <HeadingsCard
                    key={uuid()}
                    title={ele.title}
                    url={ele.url}
                    urlToImage={ele.urlToImage}
                  />
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
});

const mapDispatchToProps = (dispatch) => ({
  getTopHeadlines: () => dispatch(getTopHeadlines()),
  businessNews: () => dispatch(businessNews()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
