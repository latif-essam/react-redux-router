import "../App.css";
import { connect } from "react-redux";
import React, { Component, Fragment } from "react";
import { LoadingBar } from "react-redux-loading";
import { Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";

class App extends Component {
  render() {
    console.log(this.props.dispatch);
    return (
      <Fragment>
        <LoadingBar />
        <div className="container">
          <Nav />
          {this.props.loading === true ? null : (
            <div>
              <Route path="/" exact component={Home} />
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}
function mapStateToProps() {
  return {
    loading: false,
    newProsp: "lol",
  };
}
export default connect(mapStateToProps)(App);
