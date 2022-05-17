import UserService from "../services/UserService";
import React from "react";
import "../css/table.css";
import Adminnavbar from "../navbar/admin_navbar";

class Updateshow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: []
    };
  }

  componentDidMount() {
    UserService.getShows().then(res => {
      this.setState({ shows: res.data });
    });
  }

  render() {
    return (
      <div>
        <Adminnavbar />
        <h2 className="text-center" style={{ color: "white" }}>
          Update Show
        </h2>

        <br />
        <div className="row">
          <table className="table table-striped table-bordered" id="table">
            <thead>
              <tr>
                <th className="text-center">Theater Id</th>
                <th className="text-center">Movie Id</th>
                <th className="text-center">Show Time</th>
                <th className="text-center">Update</th>
              </tr>
            </thead>
            <tbody>
              {this.state.shows.map(show =>
                <tr key={show.id}>
                  <td>
                    {" "}{show.theaterId}{" "}
                  </td>
                  <td>
                    {" "}{show.movieId}
                  </td>
                  <td>
                    {" "}{show.showTime}
                  </td>
                  <td>
                    {" "}<i
                      onClick={() => {
                        var id = show.id;
                        var theaterid = show.theaterId;
                        var movieid = show.movieId;
                        var showtime = show.showTime;
                        var totalseats = show.seatsAvailable;
                        localStorage.setItem("id", id);
                        localStorage.setItem("theaterid", theaterid);
                        localStorage.setItem("movieid", movieid);
                        localStorage.setItem("showtime", showtime);
                        localStorage.setItem("totalseats", totalseats);
                        window.location.href = "/editshow";
                      }}
                      className="fa fa-edit"
                      style={{ fontSize: "24px", color: "red" }}
                    />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Updateshow;
