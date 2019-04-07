import { API_END_POINT } from '../../helpers/config';

export const LOAD_GITHUB_ISSUES_REQUESTED = 'LOAD_GITHUB_ISSUES_REQUESTED';
export const LOAD_GITHUB_ISSUES_SUCCEEDED = 'LOAD_GITHUB_ISSUES_SUCCEEDED';
export const LOAD_GITHUB_ISSUES_FAILED = 'LOAD_GITHUB_ISSUES_FAILED';

export const openIssues = (payload) => async (dispatch) => {
	const url = API_END_POINT + payload.repository + '/issues';

	const headers = {
		'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(payload.user + ':' + payload.password)
	};

	dispatch(openGithubIssuesRequested());

	const res = await fetch(url, {
		method: 'GET',
		headers
	}).then( resp => resp.json() );

	if (res.length && res.length > 0) {
		dispatch(openGithubIssuesSucceeded(res));
	} else {
		dispatch(openGithubIssuesFailed());
	}
};

export const openGithubIssuesRequested = () => ({
	type: LOAD_GITHUB_ISSUES_REQUESTED
});

export const openGithubIssuesSucceeded = (payload) => ({
	type: LOAD_GITHUB_ISSUES_SUCCEEDED,
	payload
});

export const openGithubIssuesFailed = () => ({
	type: LOAD_GITHUB_ISSUES_FAILED
});