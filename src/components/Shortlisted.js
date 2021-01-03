import { connect } from "react-redux";
import React from "react";
import CandidateList from "./CandidateList";

class Shortlisted extends React.Component {
  constructor(props) {
    super(props);
  }
  renderList() {
    return <CandidateList recipes={this.props.accepted} />;
  }

  render() {
    return <div className="w-1/2 ">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    accepted: state.accepted,
    rejected: state.rejected,
  };
};

export default connect(mapStateToProps, {})(Shortlisted);
