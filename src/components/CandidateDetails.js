import React from "react";

import candidateApi from "../api/candidate";
import candidates from "../data/candidates.json";
import starIcon from "../assets/icons/Icon awesome-star.png";
import { Link } from "react-router-dom";
import Poster from "../assets/images/Img1.jpg";
import { acceptCandidate, rejectCandidate } from "../actions/index";
import { connect } from "react-redux";

class Details extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {};
  }

  shortlistCandidate = () => {
    console.log(this.state.candidate);
    this.props.acceptCandidate(this.state.candidate);
  };
  rejectCandidate = () => {
    console.log(this.state.candidate);
    this.props.rejectCandidate(this.state.candidate);
  };
  componentDidMount = async () => {
    //const data = await candidateApi.get("");
    // const response = await candidateApi.get("");

    const response = candidates;

    console.log(this.props.match.params.id);

    this.setState({
      candidate: response[parseInt(this.props.match.params.id) - 1000],
    });
  };

  render() {
    console.log(this.state.candidate);
    return this.state.candidate ? (
      <section class="text-gray-700 body-font flex flex-col w-full sm:px-48 py-5 mt-5">
        <div className="sm:ml-4 sticky sm:static top-0 bg-white z-10 sm:bg-transparent">
          <Link to="/" className="go-back font-nunito pl-4">
            <i class="fas fa-arrow-alt-circle-left "></i> Go back
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row flex-col-reverse z-1">
          {" "}
          <div class="flex flex-wrap sm:w-1/2">
            <div class="p-4">
              <div class=" p-6 rounded-lg ">
                <img
                  class="h-72 rounded w-full object-fit object-center mb-6"
                  alt="content"
                  src={this.state.candidate.image}
                />
                <h3 class=" text-xl font-medium ">About:</h3>
                <h2 class="text-gray-600 font-medium  mb-4 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h2>
                <h3 class="  text-xl font-medium title-font">Career Goal</h3>
                <p class=" text-gray-600 font-medium mb-4 text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div class="container sm:px-5  mx-auto flex sm:w-1/2">
            <div class="rounded-lg px-4 sm:p-8 flex flex-col md:ml-auto w-full sm:mt-10 md:mt-0 relative z-5">
              <h2 class="text-gray-500 text-lg mb-1 font-xs title-font text-center sm:text-right">
                {/* // */}
              </h2>
              <h2 class="text-gray-900 text-lg mb-1 font-bold sm:text-4xl text-2xl font-nunito text-center sm:text-right">
                {this.state.candidate ? this.state.candidate.name : "Foobar"}
              </h2>

              {/* <div className="flex flex-row sm:ml-auto mx-auto">
                <div>
                  <h1 className="bg-black text-white text-sm mr-8 px-2 ">
                    4/5
                  </h1>
                </div>
                <img class="w-4 h-4 mr-4" src={starIcon} alt="content" />
                <img class="w-4 h-4 mr-4" src={starIcon} alt="content" />
                <img class="w-4 h-4 mr-4" src={starIcon} alt="content" />
                <img class="w-4 h-4 mr-4" src={starIcon} alt="content" />
              </div> */}

              <h2 class="text-gray-400 text-lg mb-1 font-medium title-font text-center sm:text-right">
                Description
              </h2>
              <p class="leading-relaxed mb-5 text-gray-600 text-center sm:text-right text-xl">
                Working as a software engineer at Xyz
              </p>

              <div className="flex flex-row mx-auto sm:ml-auto mb-4">
                <div className="bg-black px-4 py-2 rounded-full w-16 h-16 mr-4 text-white text-center">
                  <h1 className="text-xl">8</h1>{" "}
                  <h2 className="text-xs">Yrs+</h2>
                </div>
                <div className="bg-black px-4 py-2 rounded-full w-16 h-16 mr-4 text-white text-center">
                  <h1 className="text-xl">20</h1>{" "}
                  <h2 className="text-xs">Skills</h2>
                </div>
                <div className="bg-black px-4 py-2 rounded-full w-16 h-16 mr-4 text-white text-center">
                  <h1 className="text-xl">15</h1>{" "}
                  <h2 className="text-xs">Roles</h2>
                </div>
              </div>

              {/* <h2 class="leading-relaxed text-sm mb-5 text-gray-600 text-center sm:text-right mb-4">
                FAVOURITE THIS candidate <span role="img">❤️</span>
              </h2> */}
              <span className="text-black bg-indigo-200 border border-gray-300 mb-4 border-2 w-full"></span>
              <button
                class="text-white bg-green-600 border-0 py-4 px-6 mb-4 hover:bg-green-500 focus:outline-none  rounded-md text-lg"
                onClick={this.shortlistCandidate}
              >
                Shortlist
              </button>
              <button
                onClick={this.rejectCandidate}
                class="text-white  bg-red-600 border-0 py-4 px-6 hover:bg-red-500 focus:outline-none  text-lg rounded-md "
              >
                Reject
              </button>
              {/* <textarea
                class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
                placeholder="Message"
              ></textarea>
              <button class="text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-md text-lg">
                Add Comment
              </button> */}
            </div>
          </div>
        </div>
      </section>
    ) : (
      ""
    );
  }
}

export default connect(null, { acceptCandidate, rejectCandidate })(Details);
