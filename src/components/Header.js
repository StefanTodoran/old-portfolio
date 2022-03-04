import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import './Components.css';
import {View} from "react-native-web";
import {MenuItem} from "./MenuItem";

export class Header extends Component {
    render() {
        return (
            <div className={"navbar"}>
                <View style={{flexDirection: "row"}}>
                    <MenuItem text={"INTRO"} onPress={this.props.introScroll} styleClass={"navbarItem"}/>
                    <MenuItem text={"FREELANCE"} onPress={this.props.freelanceScroll} styleClass={"navbarItem"}/>
                    <MenuItem text={"PROJECTS"} onPress={this.props.projectsScroll} styleClass={"navbarItem"}/>
                </View>
                {!this.props.mobile && <View style={{flexDirection: "row", marginRight: 10}}>
                    <div className={"menuName"}>STEFAN TODORAN</div>
                </View>}
            </div>
        );
    }
}