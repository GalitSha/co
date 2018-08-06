import React, {Component} from 'react';
import '../../App.css';
import {connectors} from "../connectors";
import {Connector} from "./Connector";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      connectors: connectors
    }
  }

  render() {
    return (
      <div className="main-container">
        <div className="grid-container">
          {this.state.connectors.map((connector) =>
            <Connector data={connector}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;


