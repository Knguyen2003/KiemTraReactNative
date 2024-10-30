/*Reducer là một hàm trong Redux dùng để cập nhật state dựa trên action*/
import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
  DELETE_JOB_SUCCESS,
  ADD_JOB_SUCCESS,
  EDIT_JOB_SUCCESS,
} from './actions';

// Trạng thái ban đầu (state) của ứng dụng
const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

// Hàm reducer xử lý các hành động và cập nhật state
const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_JOBS_SUCCESS:
      return { ...state, loading: false, jobs: action.payload };
    case FETCH_JOBS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case DELETE_JOB_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.filter((job) => job.id !== action.payload),
      };
    case ADD_JOB_SUCCESS:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case EDIT_JOB_SUCCESS:
      return {
        ...state,
        jobs: state.jobs.map((job) =>
          job.id === action.payload.id ? action.payload : job
        ),
      };
    default:
      return state;
  }
};

export default jobReducer;
