import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import { saveEmployee } from "./../services/employeeService";

class NewEmployee extends Form {
  state = {
    data: { first_name: "", last_name: "", gender: "", email: "", status: "" },
    errors: {}
  };

  schema = {
    id: Joi.number(),
    first_name: Joi.string()
      .required()
      .label("First Name"),
    last_name: Joi.string()
      .required()
      .label("Last Name"),
    gender: Joi.string()
      .required()
      .label("Gender"),
    email: Joi.string()
      .required()
      .email()
      .label("Emali"),
    status: Joi.boolean()
      .label("Status")
      .required()
  };

  doSubmit = () => {
    saveEmployee(this.state.data);
    this.props.history.push("/employees");
  };
  render() {
    const { data, errors } = this.state;

    const gender = [
      { id: "Female", name: "Female" },
      { id: "Male", name: "Male" }
    ];
    const status = [
      { id: true, name: "Active" },
      { id: false, name: "Inactive" }
    ];
    return (
      <div>
        <h1>Employee</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("first_name", "First Name")}
          {this.renderInput("last_name", "Last Name")}
          {this.renderSelect("gender", "Gender", gender)}
          {this.renderInput("email", "Email")}
          {this.renderSelect("status", "Status", status)}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewEmployee;
