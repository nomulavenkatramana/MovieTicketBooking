import UserService from "../services/UserService";
import React from "react";
import "../css/table.css";
import Adminnavbar from "../navbar/admin_navbar";
import Usernavbar from "../navbar/user_navbar";

class Userviewmovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theatername: localStorage.getItem("theatername"),
      movies: []
    };
  }

  componentDidMount() {
    UserService.getMovieByTheaterName(this.state.theatername).then(res => {
      console.log(res.data);
      var data = [];
      data.push(res.data);
      console.log(data);
      this.setState({ movies: data });
      //console.log(this.state.movies);
    });
  }

  render() {
    return (
      <div>
        <Usernavbar />
        <h2 className="text-center" style={{ color: "white" }}>
          Theater Movies
        </h2>
        <br />
        <br />
        <div className="row">
          <table className="table table-striped table-bordered" id="table">
            <thead>
              <tr>
                <th className="text-center">Movie Name</th>
                <th className="text-center">Movie Language</th>
                <th className="text-center">Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.movies.map((movie, index) =>
                <tr key={index}>
                  <td>
                    {" "}{movie.movieName}{" "}
                  </td>
                  <td>
                    {" "}{movie.movieLanguage}
                  </td>
                  <td>
                    {" "}<i
                      onClick={() => {
                        var releasedate = movie.startDate;
                        var outdate = movie.endDate;
                        var moviename = movie.movieName;
                        var ticketcost = movie.ticketCost;
                        var movieid = movie.movieId;
                        localStorage.setItem("releasedate", releasedate);
                        localStorage.setItem("outdate", outdate);
                        localStorage.setItem("moviename", moviename);
                        localStorage.setItem("ticketcost", ticketcost);
                        localStorage.setItem("movieid", movieid);
                        window.location.href = "/bookingform";
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

export default Userviewmovie;
