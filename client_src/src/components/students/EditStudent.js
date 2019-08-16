import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getEditStudentDetails, editStudent} from '../../actions/studentActions';

class EditStudent extends Component {
  state = {
    usn: '',
    name: '',
    age: '',
  };

  async componentWillMount() {
    let editUsn = this.props.match.params.id;
    await this.props.getEditStudentDetails(editUsn);
    this.setState({
      usn: this.props.studentedit.usn,
      name: this.props.studentedit.name,
      age: this.props.studentedit.age,
    });
    //this.getStudentDetails();
  }
  // getStudentDetails() {
  //   let editusn = this.props.match.params.id;
  //   axios
  //     .get(`http://localhost:3000/students/${editusn}`)
  //     .then(res => {
  //       this.setState({
  //         usn: res.data.usn,
  //         name: res.data.name,
  //         age: res.data.age,
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }

  onSubmit = e => {
    e.preventDefault();
    const updatedStudent = {
      usn: this.refs.usn.value,
      name: this.refs.name.value,
      age: this.refs.age.value,
    };
    this.props.editStudent(updatedStudent, this.state.usn);
    this.props.history.push('/');
  };

  handleInputChange = e => {
    this.setState({[e.target.name]: e.target.value});
  };
  render() {
    return (
      <div>
        <br />
        <NavLink to="/" className="btn btn-light">
          Back
        </NavLink>
        <h1 className="text-secondary text-center">Edit Student details</h1>
        <form action="" onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="usn">Usn</label>
            <input
              type="text"
              name="usn"
              ref="usn"
              value={this.state.usn}
              readOnly
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              ref="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              ref="age"
              value={this.state.age}
              onChange={this.handleInputChange}
            />
          </div>
          <input
            type="submit"
            value="Save Details"
            className="btn btn-secondary btn-block"
          />
        </form>
      </div>
    );
  }
}
EditStudent.propTypes = {
  students: PropTypes.array.isRequired,
  getEditStudentDetails: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  students: state.students,
  studentedit: state.studentedit,
});
export default connect(
  mapStateToProps,
  {getEditStudentDetails, editStudent},
)(EditStudent);
