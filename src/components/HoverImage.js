import React, {Component} from 'react';
import './Components.css';
import {StyleSheet} from "react-native";
import {View} from "react-native-web";

export class HoverImage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <div className={"overlay"}>
                    <div className={"hoverText"}>{this.props.title}</div>
                </div>
                <img className={this.props.logoStyle} src={this.props.src} draggable={false}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "max(10vw, 150px)",
        height: "max(10vw, 150px)",
        justifyContent: "center",
        marginRight: "10px",
        marginLeft: "10px",
        marginBottom: "10px",
    },
});