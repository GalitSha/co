import React, {Component} from 'react';
import connectorImg from "../../images/converters.jpg"
import wandIcon from '../../images/wand-icon.png'
import heartIcon from '../../images/heart-icon.png'
import shareIcon from '../../images/share-icon.png'

export class Connector extends Component {
  render() {
    return (
      <div className="connector">
        <h5 className="connector-name">{this.props.data.name}</h5>
        <img src={connectorImg} className="connector-img"/>

        <div className="details">
          <div className="details-metadata">
            <div>pressure rating:</div>
            <div>{this.props.data.pressure_rating}</div>
          </div>
          <div className="details-metadata">
            <div>voltage rating:</div>
            <div>{this.props.data.voltage_rating}</div>
          </div>
          <div className="details-metadata">
            <div>wire gauge:</div>
            <div>{this.props.data.wiregauge}</div>
          </div>
          <div className="details-metadata">
            <div>contacts:</div>
            <div>{this.props.data.contacts}</div>
          </div>
        </div>
        <div className="buttons">
          <img src={heartIcon} alt="like"/>
          <img src={shareIcon} alt="share"/>
          <img src={wandIcon} alt="magic wand"/>
        </div>
      </div>
    );
  }
}


