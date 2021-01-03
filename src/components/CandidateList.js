import React from "react";
import CandidateCard from "./CandidateCard";
import { Link } from "react-router-dom";

const CandidateList = (props) => {
  let k = -1;
  if (props.candidates.length === 0) {
    console.log("no no");
  } else {
    console.log(props.candidates);
  }
  let candidates = [];

  if (props.candidates.length !== 0) {
    candidates = props.candidates.map((candidate) => {
      k++;
      console.log(candidate);

      return (
        <div className="h-full rounded  mx-4 sm:w-1/4 h-64 mb-8">
          <CandidateCard
            key={candidate.id}
            keyId={k}
            candidate={candidate}
            rejected={props.isRejected}
            shortlisted={props.isShortlisted}
            isFiltered={props.isFiltered}
          ></CandidateCard>
        </div>
      );
    });
  }
  return props.candidates.length !== 0 ? (
    <div className="w-full">
      <div className="flex ml-auto sm:px-48 pr-4 flex-col my-8">
        <h1 className="text-gray-500  text-center">Category</h1>
        <h1 className="text-2xl text-gray-900 font-extrabold font-nunito text-center">
          Software Engineers
        </h1>
        <div className="ml-auto">
          <Link
            to="/shortlisted"
            className="bg-green-600 p-4 rounded mr-4 text-white"
          >
            Accepted
          </Link>
          <Link to="/rejected" className="bg-red-600 p-4 rounded text-white">
            Rejected
          </Link>
        </div>
      </div>

      <div className="z-1 sm:px-16 flex sm:flex-row flex-wrap justify-center flex-col">
        {candidates}
      </div>
    </div>
  ) : (
    <div className="flex justify-center h-full w-full p-10 mt-10">
      {<h1 className="text-gray-500 ">Your dish is still cooking!</h1>}
    </div>
  );
};

export default CandidateList;
