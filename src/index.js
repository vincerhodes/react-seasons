import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, lng: null, errorMessage: "", time: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
      (err) => this.setState({ errorMessage: err.message })
    );
    setInterval(() => {
      this.setState({ time: new Date().toLocaleString() });
    }, 1000);
  }

  componentDidUpdate() {
    // console.log(this.state.time);
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <SeasonDisplay
          lat={this.state.lat}
          lng={this.state.lng}
          time={this.state.time}
        />
      );
    }
    return <Spinner text={"Waiting for location..."} />;
  }

  // render must be defined in a react class!!
  render() {
    return this.renderContent();
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
