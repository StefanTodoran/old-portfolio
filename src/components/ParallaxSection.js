import React, { Component } from "react";
import './Components.css';
import {View} from "react-native-web";
import {StyleSheet} from "react-native";

export class ParallaxSection extends Component {
    render() {
        if (this.props.mobile) {
            return(
                <View style={styles.mobile}>
                    <this.props.content/>
                    <br/>
                    <img className={this.props.imageStyle} src={this.props.image} draggable={false}/>
                </View>
            );
        }

        const containerStyle = (this.props.large) ? styles.containerLarge : styles.container;
        if (this.props.flipped) {
            return(
                <View style={containerStyle}>
                    <View style={styles.project}>
                        <img className={this.props.imageStyle} src={this.props.image} draggable={false}/>
                        <View style={styles.description}>
                            <this.props.content/>
                        </View>
                    </View>
                </View>
            );
        }
        return(
            <View style={containerStyle}>
                <View style={styles.project}>
                    <View style={styles.description}>
                        <this.props.content/>
                    </View>
                    <img className={this.props.imageStyle} src={this.props.image} draggable={false}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: "90vh",
        alignItems: "center",
        justifyContent: "center",
    },
    containerLarge: {
        height: "120vh",
        alignItems: "center",
        justifyContent: "center",
    },
    project: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    },
    description: {
        width: "40%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    mobile: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    }
});