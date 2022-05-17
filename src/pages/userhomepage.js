import UserService from "../services/UserService";
import React from "react";
import "../css/table.css";
import Usernavbar from "../navbar/user_navbar";

class Userhomepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theaters: []
    };
  }

  componentDidMount() {
    UserService.getTheaters().then(res => {
      this.setState({ theaters: res.data });
      console.log(this.state.theaters);
    });
  }

  render() {
    return (
      <div>
        <Usernavbar />
        <h2 className="text-center" style={{ color: "white" }}>
          Select Theater
        </h2>
        <br />
        <br />
        <div className="row">
          <table className="table table-striped table-bordered" id="table">
            <thead>
              <tr>
                <th className="text-center">Theater Name</th>
                <th className="text-center">Theater location</th>
                <th className="text-center">Select</th>
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
                    {" "}{
                      <i
                        onClick={() => {
                          localStorage.setItem(
                            "theatername",
                            theater.theaterName
                          );
                          localStorage.setItem("theaterid", theater.theaterId);
                          window.location.href = "/userviewmovie";
                        }}
                        class="fa fa-check"
                        style={{ fontSize: "24px", color: "red" }}
                      />
                    }
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

export default Userhomepage;
