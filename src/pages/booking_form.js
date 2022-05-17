import React, { useState, useEffect } from "react";
import "../css/booking_form.css";
import { useNavigate } from "react-router-dom";
import Usernavbar from "../navbar/user_navbar";
import UserService from "../services/UserService";

function Bookingform() {
  const navigate = useNavigate();
  const [bookingdate, setbookingdate] = useState("");
  const releasedate = localStorage.getItem("releasedate");
  const outdate = localStorage.getItem("outdate");
  const moviename = localStorage.getItem("moviename");
  const ticketcost = localStorage.getItem("ticketcost");
  const theaterid = localStorage.getItem("theaterid");
  const movieid = localStorage.getItem("movieid");
  const [showtime, setshowtime] = useState("");
  const [showdata, setshowdata] = useState([]);

  useEffect(() => {
    //console.log(theaterid, movieid);
    UserService.getShowtimebytheaternameandmoviename(theaterid).then(res => {
      console.log(res.data);
      var data = [];
      if (res.data.movieId == movieid) {
        data.push(res.data);
        setshowdata(data);
      }

      //console.log(showdata);
    });
  }, []);

  const selectCeats = e => {
    const username = localStorage.getItem("name");
    e.preventDefault();
    if (
      username === "" ||
      moviename === "" ||
      ticketcost === "" ||
      bookingdate === "" ||
      showtime === ""
    ) {
      alert("please fill all fields");
    } else {
      localStorage.setItem("bookingdate", bookingdate);
      localStorage.setItem("showtime", showtime);
      navigate("/seatselect");
    }
  };

  return (
    <div>
      <Usernavbar />
      <div class="limiter" style={{ marginTop: "2%" }}>
        <div
          class="container-login100"
          style={{ backgroundColor: "transparent", marginTop: "-2%" }}
        >
          <div class="wrap-login100" style={{ height: "680px" }}>
            <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
              <span class="login100-form-title">Book Your Ticket</span>

              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="text"
                  name="username"
                  value={localStorage.getItem("name")}
                  placeholder="Username"
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
                  value={moviename}
                />
                <span class="focus-input100" />
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Please enter password"
              >
                <input
                  class="input100"
                  type="text"
                  value={ticketcost}
                  name="pass"
                  placeholder="Password"
                />
                <span class="focus-input100" />
              </div>
              <br />
              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <input
                  class="input100"
                  type="date"
                  name="username"
                  value={bookingdate}
                  onChange={e => setbookingdate(e.target.value)}
                  max={outdate}
                  min={releasedate}
                />
                <span class="focus-input100" />
              </div>
              <br />
              <div
                class="wrap-input100 validate-input m-b-16"
                data-validate="Please enter username"
              >
                <select
                  class="input100"
                  value={showtime}
                  onChange={e => setshowtime(e.target.value)}
                >
                  <option>pick show time</option>
                  {showdata.map(data => {
                    return (
                      <option>
                        {data.showTime}
                      </option>
                    );
                  })}
                </select>
                <span class="focus-input100" />
              </div>
              <br />
              <div class="container-login100-form-btn">
                <button class="login100-form-btn" onClick={selectCeats}>
                  Select ceats
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

export default Bookingform;
