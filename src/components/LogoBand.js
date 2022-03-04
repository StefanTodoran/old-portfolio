import React, { Component } from "react";
import './Components.css';
import {View} from "react-native-web";
import {StyleSheet} from "react-native";
import {HoverImage} from "./HoverImage";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";

export class LogoBand extends Component {
    render() {
        if (this.props.mobile) {
            return(
                <View style={styles.containerMobile}>
                    <View style={styles.logosTitle}>
                        <div className={"lineLeft"}/>
                        <div className={"logoLabel"}>RECENT CLIENTS</div>
                        <div className={"lineRight"}/>
                    </View>
                    <View style={styles.logos}>
                        <img title={"Sound Integrative Women's Health"} className={"mobileLogo"} src={client1} draggable={false}/>
                        <img title={"Alina Hairstylist"} className={"mobileLogo"} src={client2} draggable={false}/>
                        <img title={"TDSW Solutions Corp."} className={"mobileLogo"} src={client4} draggable={false}/>
                        <img title={"Inner Harmony Acupuncture"} className={"mobileLogo"} src={client3} draggable={false}/>
                    </View>
                    <View style={styles.logosTitle}>
                        <div className={"longLine"}/>
                    </View>
                </View>
            );
        }

        return(
            <View style={styles.container}>
                <View style={styles.logosTitle}>
                    <div className={"lineLeft"}/>
                    <div className={"logoLabel"}>RECENT CLIENTS</div>
                    <div className={"lineRight"}/>
                </View>
                <View style={styles.logos}>
                    <HoverImage logoStyle={"clientLogo"} src={client1} title={"Sound Integrative Women's Health"}/>
                    <HoverImage logoStyle={"clientLogo"} src={client2} title={"Alina Hairstylist"}/>
                    <HoverImage logoStyle={"clientLogo"} src={client3} title={"Inner Harmony Acupuncture"}/>
                    <HoverImage logoStyle={"clientLogo"} src={client4} title={"TDSW Solutions Corp."}/>
                </View>
                <View style={styles.logosTitle}>
                    <div className={"longLine"}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    logosTitle: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    logos: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    container: {
        marginVertical: "20vh",
    },
    containerMobile: {
        marginVertical: "5vh",
    },
});