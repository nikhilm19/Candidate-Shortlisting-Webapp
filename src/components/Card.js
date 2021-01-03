import React from "react";
import { Link } from "react-router-dom";
import history from "../history";

export default function CandidateReviewCard(props) {
  const [show, setShow] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const renderButton = () => {
    if (props.isFiltered === true) {
      if (props.shortlisted === true) {
        return (
          <button className="text-white bg-green-500 w-full px-4 py-4 text-center disabled">
            Accepted
          </button>
        );
      } else if (props.rejected === true) {
        return (
          <button className="text-white bg-green-500 w-full px-4 py-4 text-center disabled">
            Rejected
          </button>
        );
      }
    } else {
      return (
        <div className="w-full h-full flex flex-row">
          <button
            className="text-white bg-green-500  w-full px-4 py-4 text-center"
            onClick={() =>
              history.push({
                pathname: "/checkout",
                state: { candidate: props.candidate },
              })
            }
          >
            Accept
          </button>
          <button
            className="text-white bg-red-500 w-full h-full px-4 py-4 text-center"
            onClick={() =>
              history.push({
                pathname: "/checkout",
                state: { candidate: props.candidate },
              })
            }
          >
            Reject
          </button>
        </div>
      );
    }
  };

  return (
    <div
      class={`  flex h-full card relative ${show ? "" : ""}`}
      ref={props.ref}
      // style={{ height: "450px" }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {show && (
        <div
          className="flex flex-col justify-center items-center h-64 "
          style={{
            // height: "450px",
            width: "100%",
            zIndex: "20",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "rgba(0, 74, 117, 0.72)",
          }}
        >
          <Link
            to={`/${props.candidate.id}`}
            className=" bg-transparent text-white border-gray-500 border p-2 w-32 text-center mb-2 rounded hover:bg-blue-400 transition ease-in-out duration-500"
          >
            View More
          </Link>
          <Link
            to={`/${props.candidate.id}`}
            className=" bg-transparent text-white border-gray-500 border p-2 w-32 text-center mb-2 rounded hover:bg-indigo-400 transition ease-in-out duration-500"
          >
            All Details
          </Link>
        </div>
      )}

      <div className="z-10 h-full w-full rounded-lg hover:rounded-2xl">
        <div
          class="w-full h-64 "
          style={{
            // backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage:
              props.keyId % 2 == 0
                ? ` url(${props.candidate.image})`
                : ` url('${props.candidate.image}')`,
          }}
          onClick={() => history.push(`${props.keyId}`)}
        >
          {props.keyId % 2 == 0 ? (
            <h1 className="bg-indigo-400 w-32 text-white  px-2 py-1 text-center ml-auto label font-nunito text-sm">
              {/* 4 <i class="fas fa-star stars"></i> */}

              {"Recommended"}
            </h1>
          ) : (
            ""
            // <h1 className="bg-gray-700 w-16 text-white px-2 py-1 text-center ml-auto label font-nunito text-sm">
            //   {/* 4 <i class="fas fa-star stars"></i> */}
            //   {props.candidate.label === "" ? "New" : props.candidate.label}
            // </h1>
          )}
        </div>

        <div className="border-none flex flex-grow flex-col ">
          {props.keyId % 2 == 0 ? (
            <div class="px-6 py-4 bg-gray-800 border-none flex flex-grow flex-col w-full ">
              <div class="font-black font-nunito text-2xl text-white">
                {props.candidate.name}
              </div>

              <div class="flex flex-row justify-between">
                <div className="flex flex-row text-white">
                  {/* <i class="far fa-clock w-6 h-6 flex my-auto justify-center items-center"></i> */}
                  {/* <h1 class="rounded-full  py-1 text-sm font-semibold text-white mr-2">
                    Rs {props.candidate.price}
                  </h1> */}
                </div>
                <div>
                  <i class="fas fa-heart ml-auto text-red-400"></i>
                </div>
              </div>
              <p class="text-white text-xs mt-2">{props.candidate.description}</p>
            </div>
          ) : (
            <div class=" px-6 py-4 bg-white  flex flex-grow flex-col ">
              <div class="font-black font-nunito text-2xl text-black">
                {props.candidate.name}
              </div>

              <div class="bg-white flex flex-row justify-between">
                <div className="flex flex-row">
                  {/* <i class="far fa-clock w-6 h-6 flex my-auto justify-center items-center"></i> */}
                  {/* <h1 class="rounded-full  py-1 text-sm font-semibold text-black mr-2">
                    Rs {props.candidate.price}
                  </h1> */}
                </div>
                <div>
                  <i class="fas fa-heart ml-auto text-red-400"></i>
                </div>
              </div>
              <p class="text-black text-xs h-full mt-2">
                {props.candidate.description}
              </p>
            </div>
          )}

          <div className="flex flex-row  justify-center h-full ">
            {renderButton()}
          </div>
        </div>
      </div>
    </div>
  );
}
