import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  apiKey = process.env.REACT_APP_APIKEY;
  state = {
    progress: 0,
  };
  
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar></Navbar>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Switch>
            <Route exact path="/">
              <News
                setProgress={this.setProgress}
                key="home"
                pageSize={6}
                apikey={this.apiKey}
                country={"in"}
                category={"business"}
              ></News>
            </Route>
            <Route exact path="/business">
              <News
                setProgress={this.setProgress}
                key="business"
                pageSize={6}
                apikey={this.apiKey}
                country={"in"}
                category={"business"}
              ></News>
            </Route>
            <Route exact path="/entertainment">
              <News
                setProgress={this.setProgress}
                key="entertainment"
                pageSize={6}
                apikey={this.apiKey}
                country={"in"}
                category={"entertainment"}
              ></News>
            </Route>
            <Route exact path="/general">
              <News
                setProgress={this.setProgress}
                key="general"
                pageSize={6}
                apikey={this.apiKey}
                country={"in"}
                category={"general"}
              ></News>
            </Route>
            <Route exact path="/health">
              <News
                setProgress={this.setProgress}
                key="health"
                pageSize={6}
                apikey={this.apiKey}
                country={"in"}
                category={"health"}
              ></News>
            </Route>
            <Route exact path="/science">
              <News
                setProgress={this.setProgress}
                key="science"
                pageSize={6}
                apikey={this.apiKey}
                country={"in"}
                category={"science"}
              ></News>
            </Route>
            <Route exact path="/sports">
              <News
                setProgress={this.setProgress}
                key="sports"
                pageSize={6}
                apikey={this.apiKey}
                country={"in"}
                category={"sports"}
              ></News>
            </Route>
            <Route exact path="/technology">
              <News
                setProgress={this.setProgress}
                key="technology"
                pageSize={6}
                apikey={this.apiKey}
                country={"in"}
                category={"technology"}
              ></News>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
