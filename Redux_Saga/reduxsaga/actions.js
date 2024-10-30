{/* Action type */}
export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export const DELETE_JOB_REQUEST = 'DELETE_JOB_REQUEST';
export const DELETE_JOB_SUCCESS = 'DELETE_JOB_SUCCESS';
export const DELETE_JOB_FAILURE = 'DELETE_JOB_FAILURE';

export const ADD_JOB_REQUEST = 'ADD_JOB_REQUEST';
export const ADD_JOB_SUCCESS = 'ADD_JOB_SUCCESS';
export const ADD_JOB_FAILURE = 'ADD_JOB_FAILURE';

export const EDIT_JOB_REQUEST = 'EDIT_JOB_REQUEST';
export const EDIT_JOB_SUCCESS = 'EDIT_JOB_SUCCESS';
export const EDIT_JOB_FAILURE = 'EDIT_JOB_FAILURE';

{/* Action creators */}

export const fetchJobsRequest = () => ({ type: FETCH_JOBS_REQUEST });
export const fetchJobsSuccess = (jobs) => ({ type: FETCH_JOBS_SUCCESS, payload: jobs });
export const fetchJobsFailure = (error) => ({ type: FETCH_JOBS_FAILURE, payload: error });

export const deleteJobRequest = (id) => ({ type: DELETE_JOB_REQUEST, payload: id });
export const deleteJobSuccess = (id) => ({ type: DELETE_JOB_SUCCESS, payload: id });
export const deleteJobFailure = (error) => ({ type: DELETE_JOB_FAILURE, payload: error });

export const addJobRequest = (job) => ({ type: ADD_JOB_REQUEST, payload: job });
export const addJobSuccess = (job) => ({ type: ADD_JOB_SUCCESS, payload: job });
export const addJobFailure = (error) => ({ type: ADD_JOB_FAILURE, payload: error });

export const editJobRequest = (job) => ({ type: EDIT_JOB_REQUEST, payload: job });
export const editJobSuccess = (job) => ({ type: EDIT_JOB_SUCCESS, payload: job });
export const editJobFailure = (error) => ({ type: EDIT_JOB_FAILURE, payload: error });