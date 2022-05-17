import UserService from "../services/UserService";
import React from "react";
import "../css/table.css";
import Adminnavbar from "../navbar/admin_navbar";

class Viewtheater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theaters: []
    };
  }

  componentDidMount() {
    UserService.getTheaters().then(res => {
      this.setState({ theaters: res.data });
    });
  }

  render() {
    return (
      <div>
        <Adminnavbar />
        <h2 className="text-center" style={{ color: "white" }}>
          Theater List
        </h2>

        <br />
        <div className="row">
          <table className="table table-striped table-bordered" id="table">
            <thead>
              <tr>
                <th className="text-center">Theater Name</th>
                <th className="text-center">Theater location</th>
                <th className="text-center">Total Seats</th>
              </tr>
            </thead>
            <tbody>
              {this.state.theaters.map(theater =>
                <tr key={theater.id}>
                  <td>
                    {" "}{theater.theaterName}{" "}
                  </td>
                  <td>
                    {" "}{theater.theaterLocation}
                  </td>
                  <td>
                    {" "}{theater.totalSeats}
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

export default Viewtheater;
