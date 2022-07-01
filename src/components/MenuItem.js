import React, { Component } from 'react';
import './Components.scss';
import { View } from "react-native-web";

export class MenuItem extends Component {
  render() {
    const content = () => {
      return(
        <>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <this.props.svgIcon />
          </View>
          <div className={"menuItem title clickableTitle"}>{this.props.labelText}</div>
        </>
      );
    }

    if (this.props.useHref) {
      return (
        <div className={"iconTextBox"}>
          <a href={this.props.onClick} target="_blank" className={"noUnderlineLink"}
            onMouseEnter={this.props.hoverCallback} onMouseLeave={this.props.hoverCallback}>
            {content()}
          </a>
        </div>
      );
    }
    return (
      <div className={"iconTextBox"}>
        <a onClick={this.props.onClick} target="_blank" className={"noUnderlineLink"}
          onMouseEnter={this.props.hoverCallback} onMouseLeave={this.props.hoverCallback}>
          {content()}
        </a>
      </div>
    );
  }
}