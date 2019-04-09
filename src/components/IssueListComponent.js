import React from 'react';
import ReactTable from "react-table";
import { getBEMClasses } from '../helpers/cssClassesHelper';

import 'react-table/react-table.css'
import '../styles/components/issueListComponent.css';

const issueListClasses = getBEMClasses(['issue-list']);

class IssueListComponent extends React.Component {

	render() {
		const { issues, isLoading } = this.props.github;
		
		const tableData = issues.map((issue) => {
			return {
				title: issue.title,
				content: issue.body,
				state: issue.state,
				assignee: issue.assignee && issue.assignee.login,
				created_at: issue.created_at,
			}
		});

		const tableColumns = [
			{
				Header: 'Title',
				accessor: 'title'
			},
			{
				Header: 'Content',
				accessor: 'content'
			},
			{
				Header: 'State',
				accessor: 'state'
			},
			{
				Header: 'Assignee',
				accessor: 'assignee'
			},
			{
				Header: 'Created Date',
				accessor: 'created_at'
			},
		];

		const loadingDOM = (
			<div className={issueListClasses('loading')}>
				Loading...
			</div>
		)

		return(
			<div className={issueListClasses('container')}>
				<div className={issueListClasses('header')}>
					<div className={issueListClasses('header-title')}>
						Issue List
					</div>
					<div className={issueListClasses('header-btn__container')}>
						<button>Create Issue</button>
						<button>Delete Issue</button>
					</div>
				</div>
				{ isLoading ? 
					loadingDOM 
					:
					<ReactTable
						data={tableData}
						columns={tableColumns}
						filterable={true}
					/>
				}
			</div>
		)
	}
};

export default IssueListComponent;
