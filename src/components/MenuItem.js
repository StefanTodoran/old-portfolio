import React, {Component} from 'react';
import './Components.scss';
import {View} from "react-native-web";

export class MenuItem extends Component {
  render() {
    return (
      <div className={"iconTextBox"}>
        <a href={this.props.onClick} target="_blank" className={"noUnderlineLink"}
           onMouseEnter={this.props.hoverCallback} onMouseLeave={this.props.hoverCallback}>
          <View style={{flexDirection: "row", justifyContent: "center"}}>
            <this.props.svgIcon/>
          </View>
          <div className={"menuItem title clickableTitle"}>{this.props.labelText}</div>
        </a>
      </div>
    );
  }
}