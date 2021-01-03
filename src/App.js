import React from "react";
import SearchBar from "./components/SearchBar";
import { Router, Route, Link } from "react-router-dom";
import candidate from "./api/candidate";
import history from "./history";

import axios from "axios";
import candidates from "./data/candidates.json";
import CandidateList from "./components/CandidateList";
import CandidateDetail from "./components/CandidateDetails";

import Illustration1 from "./assets/images/Illustration1.png";

import Illustration2 from "./assets/images/Illustration2.png";
import Illustration3 from "./assets/images/Illustration3.png";
import Illustration4 from "./assets/images/Illustration4.png";
import Checkout from "./components/Checkout";
import Otp from "./components/Otp";
import Shortlisted from "./components/Shortlisted";
import Rejected from "./components/Rejected";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      results: [],
    };
  }

  async componentDidMount() {
    try {
      this.setState({ candidates: candidates, results: candidates });
      const response = await candidate.get("");
      // console.log(response);
      // console.log(response.data);
      if (response.status !== 200) {
        this.setState({ candidates: candidates, results: candidates });
      } else
        this.setState({ candidates: response.data, results: response.data });
    } catch (e) {
      this.setState({ candidates: candidates, results: candidates });
    }
    // const response = candidates;
  }
  onSubmit = async (term) => {
    // console.log(term);
    if (term === "") {
      this.setState({ results: this.state.candidates });
    }
    let results = this.state.candidates.filter((candidate) => {
      return candidate.name.startsWith(term);
    });

    this.setState({ results });
    // console.log(term);
  };

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${Illustration1}),url(${Illustration2}) ,url(${Illustration3}), url(${Illustration4})`,
          backgroundPosition: "right bottom, left bottom, right top, left top",
          backgroundRepeat: "no-repeat",
          backgroundSize: "200px, 130px, 130px, 130px",
        }}
        className="h-screen overflow-scroll App flex flex-col top-0 inset-x-0 h-16 items-center  py-16"
      >
        <Router history={history}>
          <div className="sm:pl-8 flex bg-gray-200 border-b border-gray-200 fixed top-0 inset-x-0 z-20 h-16 items-center justify-center">
            {/* <header className="sticky w-1/4 mr-8"></header> */}

            <SearchBar onSubmit={this.onSubmit} />
            <div className="sm:w-1/2 h-full flex justify-center">
              <div className="flex flex-row sm:w-1/2 justify-center px-2 py-2 items-center">
                <a href="https://nikhilm19.tech/" className="font-nunito">
                  About Us
                </a>
              </div>
            </div>
          </div>

          <Route
            path="/"
            exact
            component={() => <CandidateList candidates={this.state.results} />}
          />
          <Route path="/shortlisted" exact component={() => <Shortlisted />} />
          <Route path="/rejected" exact component={() => <Rejected />} />

          <Route
            path="/:id"
            exact
            render={(props) => (
              <CandidateDetail candidates={this.state.candidates} {...props} />
            )}
          />

          <Route
            path="/checkout"
            exact
            render={(props) => <Checkout {...props} />}
          />
          <Route path="/verify" exact render={(props) => <Otp {...props} />} />
        </Router>
      </div>
    );
  }
}

export default App;
