import React, { Component } from "react";
import './Components.css';
import {View} from "react-native-web";
import {StyleSheet} from "react-native";

export class ScrollAnim extends Component {
    render() {
        return(
            <View style={styles.scrollContainer}>
                <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame 1">
                        <mask id="mask0_1_2" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="26" y="13" width="49" height="70">
                            <g id="Group 1">
                                <g id="bottomArrow" style={{mixBlendMode: "multiply"}}>
                                    <path d="M50.0416 83L26 58.9584L31.6569 53.3015L50.0416 71.6863L68.4264 53.3015L74.0833 58.9584L50.0416 83Z" fill="#C4C4C4"/>
                                </g>
                                <g id="middleArrow" style={{mixBlendMode: "multiply"}}>
                                    <path d="M50.0416 63L26 38.9584L31.6569 33.3015L50.0416 51.6863L68.4264 33.3015L74.0833 38.9584L50.0416 63Z" fill="#C4C4C4"/>
                                </g>
                                <g id="topArrow" style={{mixBlendMode: "multiply"}}>
                                    <path d="M50.0416 43L26 18.9584L31.6569 13.3015L50.0416 31.6863L68.4264 13.3015L74.0833 18.9584L50.0416 43Z" fill="#C4C4C4"/>
                                </g>
                            </g>
                        </mask>
                        <g mask="url(#mask0_1_2)">
                            <rect id="Rectangle 1" width="100" height="100" fill="url(#paint0_linear_1_2)"/>
                        </g>
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_1_2" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                            <stop offset="0.25" stop-color="#6647FF"/>
                            <stop offset="0.75" stop-color="#BB47FF"/>
                        </linearGradient>
                    </defs>
                </svg>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
    },
});