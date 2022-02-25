import React, {Component} from 'react';
import {TouchableOpacity} from "react-native-web";
import './Components.css';

export class MenuItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <div className={this.props.styleClass}>{this.props.text}</div>
            </TouchableOpacity>
        );
    }
}