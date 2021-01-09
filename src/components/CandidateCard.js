import React from "react";
import candidateCardContent from "./CandidateCardContent";
import MuiCard from "./Card";
class candidateCard extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      spans: 0,
    };
  }
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    console.log(this.props.keyId);

    this.setState({ spans });
  };

  render() {
    console.log(this.props.candidate);
    const { Image, name, label } = this.props.candidate;
    return (
      <div
        className="h-full card"
        style={{ gridRowEnd: `span ${this.state.spans}`, overflow: "hidden" }}
        ref={this.imageRef}
      >
        <MuiCard
          candidate={this.props.candidate}
          keyId={this.props.keyId}
          shortlisted={this.props.shortlisted}
          rejected={this.props.rejected}
          isFiltered={this.props.isFiltered}
        />
      </div>
    );
  }
}

export default candidateCard;
