import {
  GET_STUDENTS,
  ADD_STUDENT,
  EDIT_STUDENT,
  DELETE_STUDENT,
  GET_EDIT_STUDENT_DETAILS,
} from './types';
import axios from 'axios';

// Get students from database
export const getStudents = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:3000/students');
    dispatch({
      type: GET_STUDENTS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const addStudent = newStudent => async dispatch => {
  const res = await axios.post('http://localhost:3000/students', newStudent);
  dispatch({
    type: ADD_STUDENT,
    payload: res.data,
  });
};

export const getEditStudentDetails = editUsn => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:3000/students/${editUsn}`);
    dispatch({
      type: GET_EDIT_STUDENT_DETAILS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

// Edit student
export const editStudent = (updatedStudent, usn) => async dispatch => {
  try {
    const res = await axios.put(
      `http://localhost:3000/students/${usn}`,
      updatedStudent,
    );
    dispatch({
      type: EDIT_STUDENT,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteStudent = usn => async dispatch => {
  try {
    await axios.delete(`http://localhost:3000/students/${usn}`);
    dispatch({
      type: DELETE_STUDENT,
      payload: usn,
    });
  } catch (error) {
    console.error(error.message);
  }
};
