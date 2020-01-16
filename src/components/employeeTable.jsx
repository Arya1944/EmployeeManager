import React, { Component } from "react";
import { Link } from "react-router-dom";
import Liked from "./liked";
import Table from "../common/table";

class EmployeeTable extends Component {
  state = {
    sortColumn: { path: "title", order: "asc" }
  };

  render() {
    const columns = [
      { key: "#" },
      {
        path: "first_name",
        lable: "First Name",

        content: employee => (
          <Link to={`/employees/${employee._id}`}>{employee.first_name}</Link>
        )
      },
      { path: "last_name", lable: "Last Name" },
      { path: "gender", lable: "Gender" },
      { path: "email", lable: "Email" },
      {
        key: "status",
        content: employee => (
          <Liked
            liked={employee.status}
            onClick={() => this.props.onLike(employee)}
          />
        )
      },
      {
        key: "delete",
        content: employee => (
          <button
            onClick={() => this.props.onDelete(employee)}
            cName="btn btn-danger btn-sm"
          >
            Delete
          </button>
        )
      }
    ];
    const { sortColumn, employees, onSort } = this.props;
    return (
      <Table
        columns={columns}
        sortColumn={sortColumn}
        data={employees}
        onSort={onSort}
      />
    );
  }
}

export default EmployeeTable;
