import UserService from "../services/UserService";
import React from "react";
import "../css/table.css";
import Adminnavbar from "../navbar/admin_navbar";

class Updatemovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    UserService.getMovies().then(res => {
      this.setState({ movies: res.data });
    });
  }

  render() {
    return (
      <div>
        <Adminnavbar />
        <h2 className="text-center" style={{ color: "white" }}>
          Update Movie
        </h2>

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
              {this.state.movies.map(movie =>
                <tr key={movie.id}>
                  <td>
                    {" "}{movie.movieName}{" "}
                  </td>
                  <td>
                    {" "}{movie.movieLanguage}
                  </td>
                  <td>
                    {" "}<i
                      onClick={() => {
                        var id = movie.id;
                        var moviename = movie.movieName;
                        var movielanguage = movie.movieLanguage;
                        var movieduration = movie.movieDuration;
                        var movieid = movie.movieId;
                        var ticketcost = movie.ticketCost;
                        var theatername = movie.theaterName;
                        var startDate = movie.startDate;
                        var endDate = movie.endDate;
                        localStorage.setItem("id", id);
                        localStorage.setItem("movieid", id);
                        localStorage.setItem("moviename", moviename);
                        localStorage.setItem("movielanguage", movielanguage);
                        localStorage.setItem("movieduration", movieduration);
                        localStorage.setItem("movieid", movieid);
                        localStorage.setItem("ticketcost", ticketcost);
                        localStorage.setItem("theatername", theatername);
                        localStorage.setItem("startdate", startDate);
                        localStorage.setItem("enddate", endDate);
                        window.location.href = "/editmovie";
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

export default Updatemovie;
