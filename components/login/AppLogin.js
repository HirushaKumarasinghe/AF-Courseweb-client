import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./login";

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div class="split left">
          <div class="centered">
            <h2>Jane Flex</h2>
            <p>Some text.</p>
          </div>
        </div>

        <div class="split right">
          <div class="centered">
            <div className="card rounded-0">
              <div className="card-header">
                <h3 className="mb-0">Login</h3>
              </div>
              <div className="card-body">
                <form
                  className="form"
                  role="form"
                  autocomplete="off"
                  id="formLogin"
                  novalidate=""
                  method="POST"
                >
                  <div className="form-group">
                    <label for="uname1">Username</label>
                    <input
                      type="text"
                      className="form-control form-control-lg rounded-0"
                      name="uname1"
                      id="uname1"
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control form-control-lg rounded-0"
                      id="pwd1"
                      required=""
                      autocomplete="new-password"
                    />
                  </div>
                  <div>
                    <label className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" />
                      <span className="custom-control-indicator" />
                      <span className="custom-control-description small text-dark">
                        Remember me
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success btn-lg float-right"
                    id="btnLogin"
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
