import React, { Component } from "react";
import { connect } from "react-redux";
import { uuid } from "uuidv4";
import NewsCard from "../Component/NewsCard";
import Pagination from "../Component/Pagination";

class Business extends Component {
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
    const { business } = this.props;
    const { curr_page } = this.state;

    let per_page = 8,
      start_index = per_page * (curr_page - 1),
      end_index = curr_page * per_page - 1;

    let currData = business.slice(start_index, end_index + 1);

    return (
      <>
        <div className="container mt-3">
          <p className="font-weight-bolder bg-dark text-light pl-1">Business</p>
          <div className="row">
            {currData &&
              currData.map((ele) => (
                <div className="col-11 col-lg-3 col-md-6">
                  <NewsCard
                    key={uuid()}
                    title={ele.title}
                    url={ele.url}
                    urlToImage={ele.urlToImage}
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
  business: state.business,
});

export default connect(mapStateToProps, null)(Business);
