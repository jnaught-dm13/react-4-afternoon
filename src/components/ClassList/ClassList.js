import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class ClassList extends Component {
  constructor() {
    super();
    this.state = {
      student: []
    };
  }
  componentDidMount() {
    console.log(this.props.match.params.class);
    axios
      .get(
        `http://localhost:3005/students?class=${this.props.match.params.class}`
      )
      .then(response => {
        console.log("response ", response);
        this.setState({ student: response.data });
      });
  }
  render() {
    console.log(this.props);
    console.log("Student State ", this.state.student);
    const students = this.state.student.map((e, i) => (
      <Link to={`/student/${e.id}`} key={i}>
        <h3>
          {e.first_name} {e.last_name}
        </h3>
      </Link>
    ));
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <Link to="/">
          <button> Home View</button>
        </Link>
        <h2>ClassList:</h2>
        {students}
      </div>
    );
  }
}
