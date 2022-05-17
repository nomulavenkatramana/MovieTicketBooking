import UserService from "../services/UserService";
import React from "react";
import "../css/table.css";
import Adminnavbar from "../navbar/admin_navbar";

class Updatetheater extends React.Component {
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
          Update Theater
        </h2>

        <br />
        <div className="row">
          <table className="table table-striped table-bordered" id="table">
            <thead>
              <tr>
                <th className="text-center">Theater Name</th>
                <th className="text-center">Theater location</th>
                <th className="text-center">Update</th>
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
                          var id = theater.id;
                          var theatername = theater.theaterName;
                          var theaterlocation = theater.theaterLocation;
                          var totalseat = theater.totalSeats;
                          var theaterid = theater.theaterId;
                          localStorage.setItem("id", id);
                          localStorage.setItem("theatername", theatername);
                          localStorage.setItem(
                            "theaterlocation",
                            theaterlocation
                          );
                          localStorage.setItem("totalseat", totalseat);
                          localStorage.setItem("theaterid", theaterid);
                          window.location.href = "/edittheater";
                        }}
                        className="fa fa-edit"
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

export default Updatetheater;
