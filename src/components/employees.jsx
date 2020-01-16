import Pagination from "../common/pagination";
import React, { Component } from "react";
import { Paginate } from "../utilites/paginate";
import { getEmployees } from "../services/employeeService";
import _ from "lodash";
import EmployeeTable from "./employeeTable";
import { Link } from "react-router-dom";

class Employees extends Component {
  state = {
    employees: [],
    sortColumn: { path: "first_name", order: "asc" },
    item: 0,
    pageSize: 30,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ employees: getEmployees() });
  }
  onHandleDelete = employee => {
    const employees = this.state.employees.filter(m => m.id !== employee.id);
    this.setState({ employees });
  };

  OnIncrement = () => {
    let item = this.state.item;
    item++;
    alert(item);
    this.setState({ item });
    console.log(item);
  };

  onPageClick = page => {
    //const Employees = [...this.state.Employees] ;
    this.setState({ currentPage: page });
    console.log(page);
  };

  onHandleDelete = employee => {
    const employees = this.state.employees.filter(m => m.id !== employee.id);
    this.setState({ employees });
  };

  OnHandleLike = employee => {
    const employees = [...this.state.employees];
    const index = employees.indexOf(employee);
    employees[index].status = employee.status === true ? false : true;
    this.setState({ employees });
  };
  onHandleSort = sortColumn => {
    this.setState({ sortColumn: sortColumn });
  };

  render() {
    const {
      employees: currentEmployees,
      currentPage,
      pageSize,
      sortColumn
    } = this.state;

    const { length: count } = this.state.employees;

    const sorted = _.orderBy(
      currentEmployees,
      [sortColumn.path],
      [sortColumn.order]
    );
    const employees = Paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col">
          <Link
            to="/newEmployee"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Employee
          </Link>
          <span>Number of Employees{currentEmployees.length} </span>
          <EmployeeTable
            onLike={this.OnHandleLike}
            onDelete={this.onHandleDelete}
            employees={employees}
            sortColumn={sortColumn}
            onSort={this.onHandleSort}
          />

          <Pagination
            itemCounts={currentEmployees.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageClick={this.onPageClick}
          />
        </div>
      </div>
    );
  }
}
export default Employees;
