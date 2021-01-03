import React from "react";
import CandidateCard from "./CandidateCard";
import {Link} from "react-router-dom"

const CandidateList = (props) => {
  let k = -1;
  if (props.recipes.length === 0) {
    console.log("no no");
  } else {
    console.log(props.recipes);
  }
  let recipes = [];

  if (props.recipes.length !== 0) {
    recipes = props.recipes.map((recipe) => {
      k++;
      console.log(recipe);

      return (
        <div className="h-full rounded  mx-4 sm:w-1/4 h-64 mb-8">
          <CandidateCard
            key={recipe.id}
            keyId={k}
            recipe={recipe}
          ></CandidateCard>
        </div>
      );
    });
  }
  return props.recipes.length !== 0 ? (
    <div>
      <div className="flex ml-auto sm:px-48 pr-4 flex-col my-8">
        <h1 className="text-gray-500  text-right">Category</h1>
        <h1 className="text-2xl text-gray-900 font-extrabold font-nunito text-right">
          Software Engineers
        </h1>
      </div>
      <div>
        <Link to="/shortlisted">Accepted</Link>
        <Link to="/rejected">Rejected</Link>
      </div>
      <div className="z-1 sm:px-16 flex sm:flex-row flex-wrap justify-center flex-col">
        {recipes}
      </div>
    </div>
  ) : (
    <div className="flex justify-center h-full w-full p-10 mt-10">
      {<h1 className="text-gray-500 ">Your dish is still cooking!</h1>}
    </div>
  );
};

export default CandidateList;
