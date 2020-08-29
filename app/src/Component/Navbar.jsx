import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchNews } from "../Redux/action";
import moment from "moment";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = () => {
      const {searchNews} = this.props
      const {value} = this.state
      let date = new Date()
      date = moment(date).format('YYYY-MM-DD');
      searchNews(value, date)
  };

  render() {
    let { value } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <p className="navbar-brand mr-5 border rounded-circle p-1" href="!#">
              News
            </p>

            <div className="navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <Link to="/">
                  <li className="nav-item mr-5">Home</li>
                </Link>
                <Link to="/business">
                  <li className="nav-item mr-5">Business</li>
                </Link>
                <Link to="/technology">
                  <li className="nav-item mr-5">Technology</li>
                </Link>
              </ul>
              <form
                className="form-inline my-2 my-lg-0"
              >
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={value}
                  onChange={this.handleChange}
                />
                <Link to="/SearchNews">
                  <button
                    className="btn btn-outline-light my-2 my-sm-0"
                    type="submit"
                    onClick={this.handleSubmit}
                  >
                    Search
                  </button>
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
  searchNews: (value,date) => dispatch(searchNews(value,date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
