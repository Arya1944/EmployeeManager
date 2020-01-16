import React, { Component } from "react";
import _ from "lodash";

class Pagination extends Component {
  render() {
    const pageCount = Math.ceil(this.props.itemCounts / this.props.pageSize);
    if (pageCount === 1) return null;
    const pageItems = _.range(1, pageCount + 1);

    return (
      <React.Fragment>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {pageItems.map(page => (
              <li class="page-item" key={page}>
                <a
                  class="page-link"
                  href="#"
                  onClick={() => this.props.onPageClick(page)}
                >
                  {page}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default Pagination;
