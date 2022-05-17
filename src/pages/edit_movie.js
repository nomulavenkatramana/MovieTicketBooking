import React from "react";
import Adminnavbar from "../navbar/admin_navbar";
import UserService from "../services/UserService";

class Editmovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: localStorage.getItem("moviename"),
      movieLanguage: localStorage.getItem("movielanguage"),
      movieDuration: localStorage.getItem("movieduration"),
      movieId: localStorage.getItem("movieid"),
      ticketCost: localStorage.getItem("ticketcost"),
      theaterName: localStorage.getItem("theatername"),
      startDate: localStorage.getItem("startdate"),
      endDate: localStorage.getItem("enddate")
    };
    this.addMovie = this.addMovie.bind(this);
  }

  addMovie = e => {
    e.preventDefault();

    if (
      this.state.movieName === "" ||
      this.state.movieLanguage === "" ||
      this.state.movieDuration === "" ||
      this.state.movieId === "" ||
      this.state.ticketCost === "" ||
      this.state.theaterName === "" ||
      this.state.startDate === "" ||
      this.state.endDate === ""
    ) {
      alert("please enter all fields");
    } else {
      var id = localStorage.getItem("id");
      let movie = {
        movieName: this.state.movieName,
        movieLanguage: this.state.movieLanguage,
        movieDuration: this.state.movieDuration,
        movieId: this.state.movieId,
        ticketCost: this.state.ticketCost,
        theaterName: this.state.theaterName,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      };
      console.log("movie => " + JSON.stringify(movie));
      UserService.updateMovie(movie, id).then(res => {
        console.log(res);
        alert("Movie Updated Successfully");
      });
    }
  };

  changeMovieNameHandler = event => {
    this.setState({ movieName: event.target.value });
  };
  changeLanguageHandler = event => {
    this.setState({ movieLanguage: event.target.value });
  };
  changeDurationHandler = event => {
    this.setState({ movieDuration: event.target.value });
  };
  changeMovieidHandler = event => {
    this.setState({ movieId: event.target.value });
  };
  changeTicketcostHandler = event => {
    this.setState({ ticketCost: event.target.value });
  };
  changeTheaternameHandler = event => {
    this.setState({ theaterName: event.target.value });
  };
  changeStartdateHandler = event => {
    this.setState({ startDate: event.target.value });
  };
  changeEnddateHandler = event => {
    this.setState({ endDate: event.target.value });
  };

  render() {
    return (
      <div>
        <Adminnavbar />
        <div class="limiter" style={{ marginTop: "2%" }}>
          <div
            class="container-login100"
            style={{ backgroundColor: "transparent", marginTop: "-2%" }}
          >
            <div class="wrap-login100" style={{ height: "870px" }}>
              <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
                <span class="login100-form-title">EDIT MOVIE</span>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    value={this.state.movieName}
                    onChange={this.changeMovieNameHandler}
                    placeholder="Movie name"
                  />
                  <span class="focus-input100" />
                </div>
                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    value={this.state.movieLanguage}
                    onChange={this.changeLanguageHandler}
                    placeholder="Movie language"
                  />
                  <span class="focus-input100" />
                </div>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    value={this.state.movieDuration}
                    onChange={this.changeDurationHandler}
                    placeholder="Movie Duration"
                  />
                  <span class="focus-input100" />
                </div>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    value={this.state.movieId}
                    onChange={this.changeMovieidHandler}
                    placeholder="Movie Id"
                  />
                  <span class="focus-input100" />
                </div>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    value={this.state.ticketCost}
                    onChange={this.changeTicketcostHandler}
                    placeholder="Ticket Cost"
                  />
                  <span class="focus-input100" />
                </div>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    value={this.state.theaterName}
                    onChange={this.changeTheaternameHandler}
                    placeholder="Theater Name"
                  />
                  <span class="focus-input100" />
                </div>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="date"
                    name="username"
                    value={this.state.startDate}
                    onChange={this.changeStartdateHandler}
                    placeholder="Pick Start Date"
                  />
                  <span class="focus-input100" />
                </div>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="date"
                    name="username"
                    value={this.state.endDate}
                    onChange={this.changeEnddateHandler}
                    placeholder="Theater Name"
                  />
                  <span class="focus-input100" />
                </div>

                <br />
                <div class="container-login100-form-btn">
                  <button class="login100-form-btn" onClick={this.addMovie}>
                    Update Movie
                  </button>
                </div>

                <div class="flex-col-c p-t-40 p-b-40" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editmovie;
