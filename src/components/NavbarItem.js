import React, {Component} from 'react';
import {TouchableOpacity} from "react-native-web";
import './Components.scss';

export class NavbarItem extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <div className={this.props.styleClass}>{this.props.text}</div>
        <div className={this.props.styleClass + " filledTitle"}>{this.props.text}</div>
      </TouchableOpacity>
    );
  }
}