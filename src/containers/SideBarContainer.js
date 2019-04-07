import { connect } from 'react-redux';
import { openIssues } from '../redux/actions/githubActions';
import SideBarComponent from '../components/SideBarComponent';

const mapStateToProps = state => {
  const { github } = state;

  return {
    github
  };
};

const mapDispatchToProps = {
  openIssues
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarComponent);