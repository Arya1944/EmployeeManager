import React, { Component } from "react";

class TableHeader extends Component {
  onHandleSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (path === sortColumn.path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    console.log(sortColumn.path);
    console.log(sortColumn.order);

    this.props.onSort(sortColumn);
  };
  renderSortIcon = column => {
    console.log(this.props.sortColumn.order);

    if (column.path !== this.props.sortColumn.path) return null;

    return this.props.sortColumn.order === "asc" ? (
      <i className="fa fa-sort-asc" />
    ) : (
      <i className="fa fa-sort-desc" />
    );
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          <th  scope="col">#</th>
          {columns.map(c => (
            <th
              className="clickable"
              key={c.path}
              scope="col"
              onClick={() => this.onHandleSort(c.path)}
            >
              {c.lable}
              {this.renderSortIcon(c)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
