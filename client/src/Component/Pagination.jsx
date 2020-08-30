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

    let perPage = 8,
      totalPage = Math.ceil(business.length / perPage),
      arr = [];

    for (let i = 1; i <= totalPage; i++) {
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
                    currPage < totalPage ? currPage + 1 : totalPage
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
