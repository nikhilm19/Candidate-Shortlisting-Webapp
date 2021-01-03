import React from "react";
import img1 from "../assets/images/otp.svg";
import Status from "./Status";
class OTP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      status: null,
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  checkStatus = (e) => {
    if (this.state.value === "123456") {
      this.setState({
        status: "successful",
      });
    } else {
      this.setState({
        status: "unsuccessful",
      });
    }
  };

  render() {
    return (
      <div className="flex flex-col mt-8 mx-4 sm:w-1/3 bg-white justify-center p-8 shadow-xl rounded">
        <div className={`${this.state.status !== null ? "hidden" : ""}`}>
          <div className="flex justify-center">
            <h1 className="text-3xl font-extrabold text-gray-700 font-nunito">
              Finish Payment
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="">
              <img src={img1} width="300px" height="300px" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <input
              name="otp"
              type="password"
              className="px-4 py-4 sm:w-1/2 bg-gray-200 w-full"
              placeholder="Enter OTP"
              value={this.state.value}
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="w-full  flex justify-center my-4 rounded">
            <button
              className="py-4 w-full sm:w-1/2 text-white bg-green-500 rounded text-xl font-nunito"
              onClick={this.checkStatus}
            >
              Confirm
            </button>
          </div>
        </div>

        {this.state.status !== null ? (
          <Status
            result={this.state.status}
            className={`${this.state.status === null ? "hidden" : ""}`}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default OTP;
