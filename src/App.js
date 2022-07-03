import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />

          <Switch>
            <Route exact path="/">
              <News
                key="general"
                pageSize={9}
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                country="in"
                category="general"
              />
            </Route>
            <Route exact path="/business">
              <News
                key="business"
                pageSize={9}
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                country="in"
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
              <News
                key="entertainment"
                pageSize={9}
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                country="in"
                category="entertainment"
              />
            </Route>
            <Route exact path="/health">
              <News
                key="health"
                pageSize={9}
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                country="in"
                category="health"
              />
            </Route>
            <Route exact path="/science">
              <News
                key="science"
                pageSize={9}
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                country="in"
                category="science"
              />
            </Route>
            <Route exact path="/sports">
              <News
                key="sports"
                pageSize={9}
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                country="in"
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
              <News
                key="technology"
                pageSize={9}
                setProgress={this.setProgress}
                apiKey={this.apiKey}
                country="in"
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
