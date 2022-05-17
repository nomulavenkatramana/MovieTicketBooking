import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Bookingdetails = () => {
  const navigate = useNavigate();
  const currentdate = localStorage.getItem("bookingdate");
  var moviename = localStorage.getItem("moviename");
  const moviewatchers = localStorage.getItem("moviewatchers");
  const seatnames = localStorage.getItem("seatnames");
  const totalcost = localStorage.getItem("totalcost");
  const showtime = localStorage.getItem("showtime");
  const theatername = localStorage.getItem("theatername");
  useEffect(() => {
    document.getElementById("date").disabled = true;
    document.getElementById("moviename").disabled = true;
    document.getElementById("moviewatchers").disabled = true;
    document.getElementById("ceatnames").disabled = true;
    document.getElementById("totalcost").disabled = true;
  }, []);

  return (
    <div>
      <br />
      <div class="limiter" style={{ marginTop: "2%" }}>
        <div
          class="container-login100"
          style={{ backgroundColor: "transparent", marginTop: "-2%" }}
        >
          <div class="wrap-login100" style={{ height: "800px" }}>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">Your Ticket</span>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  style={{ fontSize: "23px", backgroundColor: "transparent" }}
                  name="username"
                  id="date"
                  placeholder={"Booking date :" + " " + " " + currentdate}
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
                  style={{ fontSize: "23px", backgroundColor: "transparent" }}
                  placeholder={"Movie name :" + " " + " " + moviename}
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
                  style={{ fontSize: "23px", backgroundColor: "transparent" }}
                  type="password"
                  id="moviewatchers"
                  name="pass"
                  placeholder={"Movie watchers :" + " " + " " + moviewatchers}
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
                  style={{ fontSize: "23px", backgroundColor: "transparent" }}
                  id="ceatnames"
                  placeholder={"Seat names :" + " " + " " + seatnames}
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
                  style={{ fontSize: "23px", backgroundColor: "transparent" }}
                  placeholder={"Total cost :" + " " + " " + totalcost}
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
                  style={{ fontSize: "23px", backgroundColor: "transparent" }}
                  placeholder={"Show time :" + " " + " " + showtime}
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
                  style={{ fontSize: "23px", backgroundColor: "transparent" }}
                  placeholder={"Theatre name :" + " " + " " + theatername}
                  id="totalcost"
                />
                <span
                  class="focus-input100"
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
              <br />
              <div class="container-login100-form-btn">
                <button
                  class="login100-form-btn"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  Return To Home
                </button>
              </div>

              <div class="flex-col-c p-t-40 p-b-40" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
