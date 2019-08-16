import React, {Fragment, Component} from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getStudents, deleteStudent} from '../../actions/studentActions';

class Students extends Component {
  componentWillMount() {
    this.props.getStudents();
  }
  onDelete = usn => {
    this.props.deleteStudent(usn);
    //this.props.getStudents();
  };

  render() {
    const {students} = this.props;
    return (
      <div>
        <h1 className="text-primary text-center">Students Details</h1>
        {students.length > 0 ? (
          <Fragment>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>USN</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>

                {students.map(student => (
                  <tr key={student.usn}>
                    <td>{student.usn}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>
                      <NavLink to={`/students/edit/${student.usn}`}>
                        <i className="fas fa-user-edit" />
                      </NavLink>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.onDelete(student.usn)}
                      >
                        <i className="fas fa-user-times" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <br />
            <NavLink to="/students/add" className="btn btn-primary btn-block">
              <i className="fas fa-user-plus" /> Add Student
            </NavLink>
          </Fragment>
        ) : (
          <Fragment>
            <p className="lead">No students records..!! Add one</p>
            <br />
            <NavLink to="/students/add" className="btn btn-primary btn-block">
              <i className="fas fa-user-plus" /> Add Student
            </NavLink>
          </Fragment>
        )}
      </div>
    );
  }
}

Students.propTypes = {
  students: PropTypes.array.isRequired,
  getStudents: PropTypes.func.isRequired,
  deleteStudent: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  students: state.students,
});

export default connect(
  mapStateToProps,
  {getStudents, deleteStudent},
)(Students);
