import {
  GET_STUDENTS,
  ADD_STUDENT,
  EDIT_STUDENT,
  DELETE_STUDENT,
  GET_EDIT_STUDENT_DETAILS,
} from '../actions/types';

const initialState = {
  students: [],
  studentedit: {},
};

const studentReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case GET_STUDENTS:
      return {
        ...state,
        students: payload,
      };
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, payload],
      };
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(student => student.usn !== payload),
      };

    case GET_EDIT_STUDENT_DETAILS:
      return {
        ...state,
        studentedit: payload,
      };

    case EDIT_STUDENT:
      return {
        ...state,
        students: state.students.map(student =>
          student.usn === payload.usn ? payload : student,
        ),
      };
    default:
      return state;
  }
};
export default studentReducer;
