import React from "react";
import Homenavbar from "../navbar/home_navbar";
import UserService from "../services/UserService";

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dateOfBirth: "",
      gender: "",
      email: "",
      password: "",
      address: "",
      mobile: ""
    };
    this.createAccount = this.createAccount.bind(this);
  }

  createAccount = e => {
    e.preventDefault();
    let user = {
      name: this.state.name,
      dateOfBirth: this.state.dateOfBirth,
      gender: this.state.gender,
      email: this.state.email,
      password: this.state.password,
      address: this.state.address,
      mobile: this.state.mobile
    };
    console.log("user => " + JSON.stringify(user));

    if (
      user.name === "" ||
      user.dateOfBirth === "" ||
      user.gender === "" ||
      user.email === "" ||
      user.password === "" ||
      user.address === "" ||
      user.mobile === ""
    ) {
      alert("please enter all fields");
    } else {
      UserService.createAccount(user).then(res => {
        console.log(res);
        alert("Account Created Successfully");
        window.location.href = "/userlogin";
      });
    }
  };

  changeNameHandler = event => {
    this.setState({ name: event.target.value });
  };
  changeDateofbirthHandler = event => {
    this.setState({ dateOfBirth: event.target.value });
  };
  changeGenderHandler = event => {
    this.setState({ gender: event.target.value });
  };
  changeEmailHandler = event => {
    this.setState({ email: event.target.value });
  };
  changePasswordHandler = event => {
    this.setState({ password: event.target.value });
  };
  changeAddressHandler = event => {
    this.setState({ address: event.target.value });
  };
  changeMobileHandler = event => {
    this.setState({ mobile: event.target.value });
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
            <div class="wrap-login100" style={{ height: "800px" }}>
              <form class="login100-form validate-form p-l-55 p-r-55 p-t-178">
                <span class="login100-form-title">Create Account </span>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    value={this.state.name}
                    onChange={this.changeNameHandler}
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
                    type="date"
                    name="username"
                    value={this.state.dateOfBirth}
                    onChange={this.changeDateofbirthHandler}
                    placeholder="Email"
                  />
                  <span class="focus-input100" />
                </div>

                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <select
                    class="input100"
                    name="username"
                    value={this.state.gender}
                    onChange={this.changeGenderHandler}
                    placeholder="Email"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
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
                <br />
                <div
                  class="wrap-input100 validate-input m-b-16"
                  data-validate="Please enter username"
                >
                  <input
                    class="input100"
                    type="text"
                    name="username"
                    value={this.state.address}
                    onChange={this.changeAddressHandler}
                    placeholder="Address"
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
                    value={this.state.mobile}
                    onChange={this.changeMobileHandler}
                    placeholder="Mobile"
                  />
                  <span class="focus-input100" />
                </div>
                <br />
                <div class="container-login100-form-btn">
                  <button
                    class="login100-form-btn"
                    onClick={this.createAccount}
                  >
                    Sign up
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

export default Signup;
