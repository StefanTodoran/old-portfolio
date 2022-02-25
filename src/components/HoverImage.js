import React, {Component} from 'react';
import './Components.css';
import {StyleSheet} from "react-native";
import {View} from "react-native-web";

export class HoverImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <img className={this.props.logoStyle} src={this.props.src} draggable={false}/>
                <div className={"overlay"}>
                    <div className={"hoverText"}>{this.props.title}</div>
                </div>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "10vw",
        height: "10vw",
        justifyContent: "center",
        marginRight: "10px",
        marginLeft: "10px",
        marginBottom: "10px",
    },
    containerMobile: {
        width: "10vw",
        height: "10vw",
        justifyContent: "center",
        marginRight: "10px",
        marginLeft: "10px",
        marginBottom: "10px",
    },
});