import React from "react";
import Adminnavbar from "../navbar/admin_navbar";
import UserService from "../services/UserService";

class Edittheater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theaterName: localStorage.getItem("theatername"),
      theaterLocation: localStorage.getItem("theaterlocation"),
      totalSeats: localStorage.getItem("totalseat"),
      theaterId: localStorage.getItem("theaterid")
    };
    this.updateTheater = this.updateTheater.bind(this);
  }

  updateTheater = e => {
    e.preventDefault();

    if (
      this.state.theaterName === "" ||
      this.state.theaterLocation === "" ||
      this.state.totalSeats === "" ||
      this.state.theaterId === ""
    ) {
      alert("please enter all fields");
    } else {
      var id = localStorage.getItem("id");
      //alert(id);
      let theater = {
        theaterName: this.state.theaterName,
        theaterLocation: this.state.theaterLocation,
        totalSeats: this.state.totalSeats,
        theaterId: this.state.theaterId
      };
      console.log("theater => " + JSON.stringify(theater, id));
      UserService.updateTheater(theater, id).then(res => {
        console.log(res);
        alert("Theatre Updated Successfully");
      });
    }
  };

  changeTheaterNameHandler = event => {
    this.setState({ theaterName: event.target.value });
  };
  changeLocationHandler = event => {
    this.setState({ theaterLocation: event.target.value });
  };
  changeSeatingcapacityHandler = event => {
    this.setState({ totalSeats: event.target.value });
  };

  changeTheateridHandler = event => {
    this.setState({ theaterId: event.target.value });
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
            <div class="wrap-login100" style={{ height: "580px" }}>
              <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
                <span class="login100-form-title">EDIT THEATERS</span>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    value={this.state.theaterName}
                    onChange={this.changeTheaterNameHandler}
                    placeholder="Theater name"
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
                    value={this.state.theaterLocation}
                    onChange={this.changeLocationHandler}
                    placeholder="Theater location"
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
                    value={this.state.totalSeats}
                    onChange={this.changeSeatingcapacityHandler}
                    placeholder="Total Seats"
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
                    value={this.state.theaterId}
                    onChange={this.changeTheateridHandler}
                    placeholder="Theater Id"
                  />
                  <span class="focus-input100" />
                </div>

                <br />
                <div class="container-login100-form-btn">
                  <button
                    class="login100-form-btn"
                    onClick={this.updateTheater}
                  >
                    Edit Theater
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

export default Edittheater;
