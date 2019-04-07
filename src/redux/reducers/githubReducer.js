import { 
  LOAD_GITHUB_ISSUES_REQUESTED,
  LOAD_GITHUB_ISSUES_SUCCEEDED,
  LOAD_GITHUB_ISSUES_FAILED
} from '../actions/githubActions';

const initialState = {
  credential: {
    user: '',
    password: '',
    repository: ''
  },
  issues: [],
  isLoading: false
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case LOAD_GITHUB_ISSUES_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case LOAD_GITHUB_ISSUES_SUCCEEDED:
      return {
        ...state,
        issues: payload,
        isLoading: false
      };
    case LOAD_GITHUB_ISSUES_FAILED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}
