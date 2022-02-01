import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import './Components.css';
import {View} from "react-native-web";
import {MenuItem} from "./MenuItem";

export class Header extends Component {
    render() {
        return (
            <View style={styles.navbar}>
                <View style={{flexDirection: "row"}}>
                    <MenuItem text={"INTRO"} onPress={this.props.introScroll} styleClass={"menuItem"}/>
                    <MenuItem text={"FREELANCE"} onPress={this.props.freelanceScroll} styleClass={"menuItem"}/>
                    <MenuItem text={"PROJECTS"} onPress={this.props.projectsScroll} styleClass={"menuItem"}/>
                </View>
                {(!this.props.mobile) &&
                <View style={{flexDirection: "row"}}>
                    <div className={"menuName"}>STEFAN TODORAN</div>
                </View>}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: {
        overflow: "hidden",
        position: "fixed",
        top: 0,
        backgroundColor: "rgba(256,256,256,0.5)",
        borderColor: "rgba(200,200,200,0.5)",
        borderBottomWidth: 1,
        backdropFilter: "blur(3px)",
        width: "100%",
        zIndex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
    },
});