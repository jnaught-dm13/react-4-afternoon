import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentInfo: {}
    };
  }
  componentDidMount() {
    console.log("Studnet props ", this.props.match.params.id);
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(response => {
        this.setState({ studentInfo: response.data });
      });
  }
  render() {
    const info = this.state.studentInfo;
    console.log("student info ", info);
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>
          {info.first_name} {info.last_name}
        </h1>
        <h3> Grade: {info.grade}</h3>
        <h3>Email: {info.email}</h3>
        <Link to={`/classlist/${info.class}`}>
          <button>Back to class list</button>
        </Link>
      </div>
    );
  }
}
