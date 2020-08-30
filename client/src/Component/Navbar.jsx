import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchNews, selectedSource } from "../Redux/action";
import moment from "moment";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      selectValue: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = () => {
    const { searchNews } = this.props;
    const { value } = this.state;
    let date = new Date();
    date = moment(date).format("YYYY-MM-DD");
    searchNews(value, date);
  };

  handleSelectChange = (e) => {
    const { selectedSource } = this.props;
    selectedSource(e.target.value);
  };

  render() {
    let { value, selectValue } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <p
              className="navbar-brand mr-5 border rounded-circle p-1"
              href="!#"
            >
              News
            </p>

            <div className="navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <Link to="/">
                  <li className="nav-item mr-5 text-light">Home</li>
                </Link>
                <Link to="/business">
                  <li className="nav-item mr-5 text-light">Business</li>
                </Link>
                <Link to="/technology">
                  <li className="nav-item mr-5 text-light">Technology</li>
                </Link>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={value}
                  onChange={this.handleChange}
                />
                <Link to="/searchNews">
                  <button
                    className="btn btn-outline-light my-2 my-sm-0 mr-5"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Search
                  </button>
                </Link>
                <Link to="/searchNews">
                  <select
                    className="custom-select mt-sm-3 mt-md-0"
                    value={selectValue}
                    onChange={this.handleSelectChange}
                  >
                    <option defaultValue>See top news source</option>
                    <option value="techcrunch">techcrunch</option>
                    <option value="bloomberg">Bloomberg</option>
                    <option value="CNBC">CNBC</option>
                    <option value="abc-news">ABC News</option>
                    <option value="google-news">Google News</option>
                  </select>
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  topHeadlines: state.topHeadlines,
  loading: state.loading,
  business: state.business,
  technology: state.technology,
});

const mapDispatchToProps = (dispatch) => ({
  searchNews: (value, date) => dispatch(searchNews(value, date)),
  selectedSource: (payload) => dispatch(selectedSource(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
