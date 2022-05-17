import React from "react";
import Adminnavbar from "../navbar/admin_navbar";
import UserService from "../services/UserService";

class Editshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theaterId: localStorage.getItem("theaterid"),
      movieId: localStorage.getItem("movieid"),
      showTime: localStorage.getItem("showtime"),
      seatsAvailable: localStorage.getItem("totalseats")
    };
    this.addShow = this.addShow.bind(this);
  }

  addShow = e => {
    e.preventDefault();

    if (
      this.state.theaterId === "" ||
      this.state.movieId === "" ||
      this.state.showTime === "" ||
      this.state.seatsAvailable === ""
    ) {
      alert("please enter all fields");
    } else {
      var id = localStorage.getItem("id");
      let show = {
        theaterId: this.state.theaterId,
        movieId: this.state.movieId,
        showTime: this.state.showTime,
        seatsAvailable: this.state.seatsAvailable
      };
      console.log("show => " + JSON.stringify(show));
      UserService.updateShow(show, id).then(res => {
        console.log(res);
        alert("Show Updated Successfully");
      });
    }
  };

  changeTheaterIdHandler = event => {
    this.setState({ theaterId: event.target.value });
  };
  changeMovieIdHandler = event => {
    this.setState({ movieId: event.target.value });
  };
  changeShowTimeHandler = event => {
    this.setState({ showTime: event.target.value });
  };
  changeSeatsAvailableHandler = event => {
    this.setState({ seatsAvailable: event.target.value });
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
            <div class="wrap-login100" style={{ height: "600px" }}>
              <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
                <span class="login100-form-title">EDIT SHOW</span>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    value={this.state.theaterId}
                    onChange={this.changeTheaterIdHandler}
                    placeholder="Theater id"
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
                    onChange={this.changeMovieIdHandler}
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
                    type="time"
                    name="username"
                    value={this.state.showTime}
                    onChange={this.changeShowTimeHandler}
                    placeholder="Show Time"
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
                    value={this.state.seatsAvailable}
                    onChange={this.changeSeatsAvailableHandler}
                    placeholder="Total Seats"
                  />
                  <span class="focus-input100" />
                </div>

                <br />
                <div class="container-login100-form-btn">
                  <button class="login100-form-btn" onClick={this.addShow}>
                    Update Show
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

export default Editshow;
