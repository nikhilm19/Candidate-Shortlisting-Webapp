import { Check } from "@material-ui/icons";
import React from "react";
import history from "../history";
import img1 from "../assets/images/Img1.jpg";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { recipe } = this.props.location.state;
    return (
      <div className="checkout flex flex-col sm:flex-row mt-4 w-full">
        <div className=" h-full flex flex-col sm:flex-row w-full p-8">
          <div className="cart flex flex-col sm:w-1/2 bg-blue-200 px-8 border border-gray-300 p-8 mr-8 rounded-md w-full">
            <div className=" flex flex-row mb-8">
              <h3 className="text-2xl font-nunito font-bold">My Cart</h3>
            </div>

            <div className="flex flex-col  rounded-xl w-full font-nunito font-bold">
              <div className="flex flex-row h-32 mb-8">
                <div className="h-full rounded mr-4 mb-8">
                  <img
                    src={recipe.image}
                    classname="w-8 rounded-md"
                    width="200px"
                    height="100px"
                  ></img>
                </div>

                <div className="flex flex-col w-full">
                  <div className="">
                    <h1 className="font-nunito font-extrabold text-3xl">
                      {recipe.name}
                    </h1>
                  </div>
                  <div className="flex justify-end w-full">
                    <h2 className="font-nunito text-2xl font-extrabold ">
                      Rs {recipe.price}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="actions flex flex-row h-full justify-between mb-8">
                <div>
                  <h2>Quantity</h2>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <div className="mr-4">
                    <button className="font-bold text-2xl"> -</button>
                  </div>
                  <div>
                    <input type="number" className="w-16 rounded "></input>
                  </div>
                  <div className="ml-4">
                    <button>-</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between mb-8">
                <div className="flex">
                  <h2>Coupon Code</h2>
                </div>
                <div className="flex w-full">
                  <input
                    className="border-yellow-200 sm:px-4 py-2 rounded w-full"
                    placeholder="COMBO2002"
                  ></input>
                </div>
              </div>
              <div className="flex flex-col mb-8">
                <div className="flex flex-row justify-between mb-4">
                  <h3>Subtotal</h3>
                  <h3>Rs {recipe.price}</h3>
                </div>
                <div className="flex flex-row justify-between mb-4">
                  <h3>Delivery cost</h3>
                  <h3>Rs {recipe.price}</h3>
                </div>
                <div className="px-8 w-full border border-dashed border-gray-700 my-8"></div>
                <div className="flex flex-row justify-between text-2xl">
                  <h3>Total</h3>
                  <h3>Rs {recipe.price}</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="payment flex flex-col bg-indigo-700 text-white px-8 py-8 rounded h-full w-full">
            <div className="card-opts w-full">
              <div className="flex flex-row mb-4">
                <h1 className="text-2xl font-nunito">Payment Details</h1>
              </div>
              <div className="flex flex-col">
                <div className="w-full mb-4"> Choose a payment method</div>

                <div className="flex flex-row mb-8">
                  <button className="rounded border border-gray-600 w-16 focus:border-gray-100 focus:border-w-2 focus:outline-none h-16 w-32 mr-4 ">
                    Visa
                  </button>
                  <button className="rounded border border-gray-600 w-16 focus:border-gray-100 focus:outline-none h-16 w-32 mr-4 focus:shadow-xl">
                    Visa
                  </button>
                </div>

                <div className="flex flex-col sm:flex-row mb-8 w-full">
                  <div className="flex flex-col mb-8 sm:mb-0 sm:w-1/2 sm:mr-8">
                    {" "}
                    <div className="flex flex-col">
                      <h1 className="text-3xl font-nunito mb-8">
                        Billing details
                      </h1>
                    </div>
                    <div className="flex flex-col mb-4 justify-between">
                      <label for="name">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="py-2 rounded px-2 bg-indigo-600"
                      ></input>
                    </div>
                    <div className="flex flex-col mb-4 justify-between">
                      <label for="name">Address</label>
                      <input
                        type="text"
                        placeholder="Enter your Address"
                        className="py-2 rounded px-2 bg-indigo-600"
                      ></input>
                    </div>
                    <div className="flex flex-col sm:flex-row mb-2 justify-between">
                      <div className="flex flex-col mb-4 sm:mb-4">
                        <label for="name">City</label>
                        <input
                          type="text"
                          placeholder="Enter your city"
                          className="py-2 rounded px-2 bg-indigo-600"
                        ></input>
                      </div>
                      <div className="flex flex-col">
                        <label for="name">Zip Code</label>
                        <input
                          type="number"
                          placeholder="1234578"
                          className="py-2 rounded px-2  bg-indigo-600"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:w-1/2 sm:px-4">
                    <div className="flex flex-col sm:mb-8 mb-4 ">
                      <h1 className="text-3xl font-nunito">Card details</h1>
                    </div>
                    <div className="flex flex-col mb-4 justify-between">
                      <label for="name">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name on card"
                        className="py-2 rounded px-2 bg-indigo-600"
                      ></input>
                    </div>
                    <div className="flex flex-col mb-4 justify-between">
                      <label for="name">Card Number</label>
                      <input
                        type="text"
                        placeholder="Enter your card number"
                        className="py-2 rounded px-2 bg-indigo-600"
                      ></input>
                    </div>
                    <div className="flex flex-col sm:flex-row mb-2 justify-between">
                      <div className="flex flex-col mb-4 sm:mb-0">
                        <label for="name">Expiration Date</label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="py-2 rounded px-2 bg-indigo-600"
                        ></input>
                      </div>
                      <div className="flex flex-col">
                        <label for="name">Cvv</label>
                        <input
                          type="password"
                          placeholder="***"
                          className="py-2 rounded px-2  bg-indigo-600"
                        ></input>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="flex flex-col mb-8">
                  <div className="flex flex-row justify-between mb-2">
                    <h3>Subtotal</h3>
                    <h3>Rs 500</h3>
                  </div>
                  <div className="flex flex-row justify-between mb-2">
                    <h3>Delivery cost</h3>
                    <h3>Rs 500</h3>
                  </div>
                  <div className="flex flex-row justify-between text-2xl">
                    <h3>Total</h3>
                    <h3>Rs 500</h3>
                  </div>
                </div> */}
                <div className="flex flex-row py-2 rounded w-full justify-center">
                  <button
                    className="w-full sm:w-1/2 bg-green-500 py-4 rounded text-white"
                    onClick={() => {
                      history.push("/verify");
                    }}
                  >
                    Checkout <i className="fas fa-lock" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
