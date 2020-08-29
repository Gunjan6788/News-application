import React, { Component } from "react";
import { connect } from "react-redux";
import { getTopHeadlines } from "../Redux/action";
import HeadingsCard from "../Component/HeadingsCard";
import { uuid } from "uuidv4";
import NewsCard from "../Component/NewsCard";
import "./Home.css";

class Home extends Component {
  componentDidMount() {
    let { getTopHeadlines } = this.props;
    getTopHeadlines();
  }

  render() {
    const { topHeadlines, loading } = this.props;
    let topThreeHeadings = topHeadlines && topHeadlines.slice(0, 2),
      otherHeadings = topHeadlines && topHeadlines.slice(3, 9),
      headlines = topHeadlines && topHeadlines.slice(10, 17);
    console.log(topHeadlines, topThreeHeadings);

    return (
      <div className="container mt-3">
        <p className="font-weight-bolder">TOP NEWS</p>
        <div className="row">
          <div className="col-8">
            <div className="row">
              {topHeadlines &&
                topThreeHeadings.map((ele) => (
                  <>
                    {loading ? (
                      <div className="spinner-border" role="status">
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

            <p className="font-weight-bolder mt-4">HEADLINES</p>
            <div className="row">
              {topHeadlines &&
                otherHeadings.map((ele, i) => (
                  <>
                    <div className="col-4 mb-3 border-bottom border-right">
                      <div className="mr-2">
                        <p className="font-weight-lighter text-justify news-text-size">
                          {ele.title}
                        </p>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>

          <div className="col-4">
            <div className="row pl-5 pb-1 pt-1">
              {topHeadlines &&
                headlines.map((ele) => (
                  <>
                    <div className="row bg-light border-bottom">
                        <img src={ele.urlToImage} className="col-4 d-flex flex-column jstify-conent-center" style={{ height: "50px" }} />
                      <div className="col-8">
                        <p className="float-right text-justify news-text-size">{ele.title}</p>
                      </div>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>

        <div>
            
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  topHeadlines: state.topHeadlines,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  getTopHeadlines: () => dispatch(getTopHeadlines()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
