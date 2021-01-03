import React from "react";
import history from "../history";
const Status = (props) => {
  return (
    <div className=" z-10 inset-0  flex justify-center items-center h-full w-full">
      <div className="border border-gray-300 rounded flex flex-col items-center justify-center  pt-4 px-4 pb-20 text-center sm:p-0 w-full ">
        <div
          className=" h-full flex flex-col  rounded-lg text-left  transform transition-all sm:my-8 sm:max-w-lg sm:w-full py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4 mx-auto">
            <div className="sm:flex sm:items-center flex-col justify-center ">
              <div className="mx-auto  flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 sm:mx-0 sm:h-10 mb-4 ">
                {props.result === "unsuccessful" ? (
                  <i className="fas fa-times-circle text-red-500 "></i>
                ) : (
                  <i className="fas fa-check-circle text-green-500 "></i>
                )}
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left mb-4 flex flex-col items-center">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Payment {props.result}
                </h3>
                <div className="mt-2">
                  <p className="text-sm leading-5 text-gray-500">
                    The payment was not successful. Order has been cancelled
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse w-full">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-full">
              <button
                type="button"
                className={`inline-flex justify-center w-full rounded-md border border-transparent px-4 py-4  ${
                  props.result === "successful"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-red-600 hover:bg-red-700"
                } text-base leading-6 font-medium text-white shadow-sm  focus:outline-none focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5`}
                onClick={() => {
                  history.push("/");
                }}
              >
                Place another order
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
