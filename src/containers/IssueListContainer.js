import { connect } from 'react-redux';
import IssueListComponent from '../components/IssueListComponent';

const mapStateToProps = state => {
  const { github } = state;

  return {
    github
  };
};

const mapDispatchToProps = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IssueListComponent);