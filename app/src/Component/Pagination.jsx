import React, { Component } from "react";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currPage: 1,
    };
  }

  handleClick = (id) => {
    const { handlePagination } = this.props;
    this.setState({
      currPage: id,
    });

    handlePagination(id);
  };

  render() {
    const { business } = this.props;
    let { currPage } = this.state;

    let per_page = 8,
      total_page = Math.ceil(business.length / per_page),
      arr = [];

    for (let i = 1; i <= total_page; i++) {
      arr.push(i);
    }

    return (
      <div>
        <nav >
          <ul className="pagination">
            <li className="page-item">
              <button
                className="page-link"
                onClick={() =>
                  this.handleClick(currPage > 1 ? currPage - 1 : 1)
                }
              >
                Prev
              </button>
            </li>
            {arr &&
              arr.map((item) => (
                <li
                  key={uuidv4()}
                  className={
                    currPage === item ? "page-item active" : "page-item"
                  }
                >
                  <button
                    className="page-link"
                    onClick={() => this.handleClick(item)}
                  >
                    {item}
                  </button>
                </li>
              ))}
            <li className="page-item">
              <button
                className="page-link"
                onClick={() =>
                  this.handleClick(
                    currPage < total_page ? currPage + 1 : total_page
                  )
                }
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    business: state.business
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Pagination)
