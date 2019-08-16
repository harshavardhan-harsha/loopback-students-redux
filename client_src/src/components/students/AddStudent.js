import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {addStudent} from '../../actions/studentActions';
import PropTypes from 'prop-types';

class AddStudent extends Component {
  onSubmit = e => {
    e.preventDefault();
    const newStudent = {
      usn: this.refs.usn.value,
      name: this.refs.name.value,
      age: this.refs.age.value,
    };
    this.props.addStudent(newStudent);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <br />
        <NavLink to="/" className="btn btn-light">
          Back
        </NavLink>
        <h1 className="text-primary text-center">Add Student Info</h1>
        <form action="" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="usn">Usn</label>
            <input
              type="text"
              name="usn"
              ref="usn"
              placeholder="Enter Usn"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              ref="name"
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              ref="age"
              placeholder="Enter Age"
              required
            />
          </div>
          <input
            type="submit"
            value="Add Student"
            className="btn btn-dark btn-block"
          />
        </form>
      </div>
    );
  }
}

AddStudent.propTypes = {
  addStudent: PropTypes.func.isRequired,
};

export default connect(
  null,
  {addStudent},
)(AddStudent);
