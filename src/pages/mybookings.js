import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Usernavbar from "../navbar/user_navbar";
import UserService from "../services/UserService";

export const Mybookings = () => {
  const navigate = useNavigate();
  var email = localStorage.getItem("email");
  const [userdata, setuserdata] = useState([]);

  useEffect(() => {
    UserService.getBookingsByEmail(email).then(res => {
      //console.log(res.data);
      var data = [];
      data.push(res.data);
      //console.log(data);
      setuserdata(data);
      //console.log(this.state.movies);
    });
  }, []);

  const deleteBooking = (username, seatnames) => {
    UserService.deleteBooking(username).then(res => {
      console.log(res);
      UserService.deleteBookedseats(seatnames).then(res => {
        console.log(res);
        window.location.reload(true);
      });
    });
  };

  return (
    <div>
      <Usernavbar />
      <br />
      {userdata.map(data => {
        return (
          <div class="limiter" style={{ marginTop: "2%" }}>
            <div
              class="container-login100"
              style={{ backgroundColor: "transparent", marginTop: "-2%" }}
            >
              <div class="wrap-login100" style={{ height: "740px" }}>
                <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
                  <span class="login100-form-title">Your Ticket</span>

                  <div
                    class="wrap-input100 validate-input m-b-16"
                    data-validate="Please enter username"
                  >
                    <input
                      class="input100"
                      type="text"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      name="username"
                      id="date"
                      placeholder={
                        "Booking date :" + " " + " " + data.bookingdate
                      }
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>

                  <div
                    class="wrap-input100 validate-input m-b-16"
                    data-validate="Please enter username"
                  >
                    <input
                      class="input100"
                      type="text"
                      name="username"
                      id="moviename"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      placeholder={"Movie name :" + " " + " " + data.moviename}
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>

                  <div
                    class="wrap-input100 validate-input"
                    data-validate="Please enter password"
                  >
                    <input
                      class="input100"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      type="password"
                      id="moviewatchers"
                      name="pass"
                      placeholder={
                        "Movie watchers :" + " " + " " + data.moviewatchers
                      }
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>
                  <br />
                  <div
                    class="wrap-input100 validate-input m-b-16"
                    data-validate="Please enter username"
                  >
                    <input
                      class="input100"
                      type="text"
                      name="username"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      id="ceatnames"
                      placeholder={"Seat names :" + " " + " " + data.seatnames}
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>
                  <div
                    class="wrap-input100 validate-input m-b-16"
                    data-validate="Please enter username"
                  >
                    <input
                      class="input100"
                      type="text"
                      name="username"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      placeholder={"Total cost :" + " " + " " + data.totalcost}
                      id="totalcost"
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>

                  <div
                    class="wrap-input100 validate-input m-b-16"
                    data-validate="Please enter username"
                  >
                    <input
                      class="input100"
                      type="text"
                      name="username"
                      style={{
                        fontSize: "23px",
                        backgroundColor: "transparent"
                      }}
                      placeholder={"Show time :" + " " + " " + data.showtime}
                      id="showtime"
                    />
                    <span
                      class="focus-input100"
                      style={{ backgroundColor: "transparent" }}
                    />
                  </div>

                  <br />
                  <div class="container-login100-form-btn">
                    <button
                      type="button"
                      class="login100-form-btn"
                      onClick={() =>
                        deleteBooking(data.username, data.seatnames)}
                    >
                      Cancel Booking
                    </button>
                  </div>

                  <div class="flex-col-c p-t-40 p-b-40" />
                </form>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
