import React, { Component } from "react";
import { connect } from "react-redux";
import { uuid } from "uuidv4";
import NewsCard from "../Component/NewsCard";
import Pagination from "../Component/Pagination";
import moment from "moment";

class Technology extends Component {
  constructor(props) {
    super(props);

    this.state = {
      curr_page: 1,
    };
  }

  handlePagination = (item) => {
    console.log(item);
    this.setState({
      curr_page: item,
    });
  };

  render() {
    const { technology } = this.props;
    const { curr_page } = this.state;
    let currDate = new Date();

    let per_page = 8,
      start_index = per_page * (curr_page - 1),
      end_index = curr_page * per_page - 1;

    let currData = technology.slice(start_index, end_index + 1);
    console.log(currData);

    return (
      <>
        <div className="container mt-3">
          <p className="font-weight-bolder bg-dark text-light pl-1">
            Technology
          </p>
          <div className="row">
            {currData &&
              currData.map((ele) => (
                <div className="col-11 col-lg-3 col-md-6">
                  <NewsCard
                    key={uuid()}
                    title={ele.title}
                    url={ele.url}
                    urlToImage={ele.urlToImage}
                    date={moment
                      .utc(
                        moment(
                          moment(currDate).format("hh:mm:ss a"),
                          "HH:mm:ss"
                        ).diff(
                          moment(
                            moment(ele.publishedAt).format("hh:mm:ss a"),
                            "HH:mm:ss"
                          )
                        )
                      )
                      .format("hh")}
                  />
                </div>
              ))}
          </div>

          {currData.length > 0 && (
            <div className="m-5 d-flex justify-content-center">
              <Pagination handlePagination={this.handlePagination} />
            </div>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  technology: state.technology,
});

export default connect(mapStateToProps, null)(Technology);
