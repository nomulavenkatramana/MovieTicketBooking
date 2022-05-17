import UserService from "../services/UserService";
import React from "react";
import "../css/table.css";
import Adminnavbar from "../navbar/admin_navbar";

class Viewmovie extends React.Component {
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
          Movie List
        </h2>

        <br />
        <div className="row">
          <table className="table table-striped table-bordered" id="table">
            <thead>
              <tr>
                <th className="text-center">Movie Name</th>
                <th className="text-center">Movie Language</th>
                <th className="text-center">Movie Duration</th>
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
                    {" "}{movie.movieDuration}
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

export default Viewmovie;
