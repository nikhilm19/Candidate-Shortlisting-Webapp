import { connect } from "react-redux";
import React from "react";
import CandidateList from "./CandidateList";

class Rejected extends React.Component {
  constructor(props) {
    super(props);
  }
  renderList() {
    if (this.props.rejected === null)
      return (
        <div className="w-full h-full my-auto text-center mt-16">
          Sorry, you haven't rejected any candidates.
        </div>
      );
    return (
      <CandidateList
        candidates={this.props.rejected}
        isFiltered={true}
        isRejected={true}
      />
    );
  }

  render() {
    return <div className="w-full h-full">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  if (state === undefined) return { accepted: null, rejected: null };
  return {
    accepted: state.accepted,
    rejected: state.rejected,
  };
};

export default connect(mapStateToProps, {})(Rejected);
