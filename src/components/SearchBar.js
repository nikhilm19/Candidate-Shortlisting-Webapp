import React from "react";
import SearchIcon from "../assets/icons/Icon feather-search.png";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      term: " ",
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  componentDidMount() {}

  render() {
    return (
      <div className="searchbar-container  xl:w-1/2 bg-gray-200 flex flex-grow sm:justify-center">
        <form
          className="flex-grow  bg-transparent rounded px-2 py-2 "
          onChange={this.onFormSubmit}
        >
          <div className="relative h-auto">
            <span className="h-full">
              <div className="absolute flex inset-y-0 pointer-events-none absolute inset-y-0 flex items-center">
                <img
                  src={SearchIcon}
                  className="bg-white rounded-full p-2 mr-4 shadow-md"
                ></img>
              </div>
              <input
                className="text-gray-600 bg-transparent  font-nunito
                pl-8 h-full ml-2 
           placeholder-gray-600 border border-transparent focus:border-gray-300
            focus:bg-white focus:placeholder-gray-500 rounded w-full py-2  
             leading-tight focus:outline-none  placeholder-gray-100 focus:placeholder-purple-500 "
                type="text"
                onSubmit={this.onFormSubmit}
                onChange={(e) => this.setState({ term: e.target.value })}
                placeholder="Search a candidate"
              ></input>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
