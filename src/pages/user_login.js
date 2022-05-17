import React from "react";
import Homenavbar from "../navbar/home_navbar";
import UserService from "../services/UserService";
import { Link } from "react-router-dom";

class Userlogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      data: {}
    };
    this.signIn = this.signIn.bind(this);
  }

  signIn = e => {
    e.preventDefault();

    if (this.state.email === "" || this.state.password === "") {
      alert("please enter email and password");
    } else {
      //console.log(this.state.email, this.state.password);
      UserService.checkUser(this.state.password).then(res => {
        this.setState({
          data: res.data
        });
        console.log(res.data);
        if (
          res.data.email === this.state.email &&
          res.data.password === this.state.password
        ) {
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("mobile", res.data.mobile);
          localStorage.setItem("gender", res.data.gender);
          localStorage.setItem("dateofbirth", res.data.dateOfBirth);
          localStorage.setItem("address", res.data.address);
          window.location.href = "/userhomepage";
        }
      });
    }
  };
  changeEmailHandler = event => {
    this.setState({ email: event.target.value });
  };
  changePasswordHandler = event => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <div>
        <Homenavbar />
        <div class="limiter" style={{ marginTop: "2%" }}>
          <div
            class="container-login100"
            style={{ backgroundColor: "transparent", marginTop: "-2%" }}
          >
            <div class="wrap-login100">
              <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
                <span class="login100-form-title">User Login</span>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="email"
                    name="username"
                    value={this.state.email}
                    onChange={this.changeEmailHandler}
                    placeholder="Email"
                  />
                  <span class="focus-input100" />
                </div>

                <div
                  class="wrap-input100 validate-input"
                  data-validate="Please enter password"
                >
                  <input
                    class="input100"
                    type="password"
                    value={this.state.password}
                    onChange={this.changePasswordHandler}
                    name="pass"
                    placeholder="Password"
                  />
                  <span class="focus-input100" />
                </div>

                <div class="text-right p-t-13 p-b-23">
                  <Link to="/adminlogin" class="txt2">
                    Admin Login
                  </Link>
                </div>

                <div class="container-login100-form-btn">
                  <button class="login100-form-btn" onClick={this.signIn}>
                    Sign in
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
}

export default Userlogin;
