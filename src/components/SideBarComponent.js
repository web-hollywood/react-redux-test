import React from 'react';
import { getBEMClasses } from '../helpers/cssClassesHelper';

import '../styles/components/sideBarComponent.css';

const sideBarClasses = getBEMClasses(['side-bar']);

class SideBarComponent extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			user: '',
			password: '',
			repository: ''
		}
	}

	handleChange = (attr, evt) => {
		this.setState({
            [attr] : evt.target.value
        })
	}

	openIssues = () => {
		const { openIssues } = this.props;
		const { user, password, repository } = this.state;
		openIssues({
			user,
			password,
			repository
		})
	}

	render() {
		const { user, password, repository } = this.state;

		return(
			<div className={sideBarClasses('container')}>
				<div className={sideBarClasses('row')}>
					<span>Github User Name(Email) :</span>
				</div>
				<div className={sideBarClasses('row')}>
					<input type="text" value={ user } onChange={ this.handleChange.bind(this, 'user') } />
				</div>
				<div className={sideBarClasses('row')}>
					<span>Password :</span>
				</div>
				<div className={sideBarClasses('row')}>
					<input type="text" value={ password } onChange={ this.handleChange.bind(this, 'password') } />
				</div>
				<div className={sideBarClasses('row')}>
					<span>Repostiry URI ( username/repo-name ) :</span>
				</div>
				<div className={sideBarClasses('row')}>
					<input type="text" value={ repository } onChange={ this.handleChange.bind(this, 'repository') } />
				</div>
				<div className={sideBarClasses('footer')}>
					<button onClick={this.openIssues}>Open Issues</button>
				</div>
			</div>
		)
	}
};

export default SideBarComponent;
