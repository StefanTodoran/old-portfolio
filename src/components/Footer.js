import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {TouchableOpacity, View} from "react-native-web";
import './Components.css';

import resume from "../assets/resume.png";
import contact from "../assets/contact.png";
import top from "../assets/backToTop.png";
import resumePDF from "../assets/Resume.pdf";
import {MenuItem} from "./MenuItem";

export class Footer extends Component {
    render() {
        const scrollToTop = () =>{
            window.scrollTo({
                top: 0,
            });
        };

        const mail = "mailto:stodoran@uw.edu?subject=Hey!+Lets+work+together!";
        return (
            <View style={styles.footer}>
                <View style={{flexDirection: "row"}}>
                    <a href={resumePDF} target="_blank" className={"footerLink"}>
                        <div className={"footerItem"}>RESUME</div>
                    </a>
                    <a href={mail} target="_blank" className={"footerLink"}>
                        <div className={"footerItem"}>CONTACT</div>
                    </a>
                </View>
                <TouchableOpacity onPress={scrollToTop}>
                    <svg width="40" height="34" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_9_3" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="49" height="30">
                            <g style={{mixBlendMode: "multiply"}}>
                                <path d="M24.0417 0.301496L48.0833 24.3431L42.4264 30L24.0417 11.6152L5.6569 30L4.94542e-07 24.3431L24.0417 0.301496Z" fill="#C4C4C4"/>
                            </g>
                        </mask>
                        <g mask="url(#mask0_9_3)">
                            <path d="M74 -33H-26V67H74V-33Z" fill="url(#paint0_linear_9_3)"/>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_9_3" x1="24" y1="-33" x2="24" y2="67" gradientUnits="userSpaceOnUse">
                                <stop offset="0.333333" stopColor="#6647FF"/>
                                <stop offset="0.598958" stopColor="#BB47FF"/>
                            </linearGradient>
                        </defs>
                    </svg>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingLeft: "2vh",
        flex: 1,
        borderColor: "rgba(200,200,200,0.5)",
        borderTopWidth: 1,
        paddingTop: 15,
        paddingHorizontal: 10,
        // backdropFilter: "blur(3px)", this looks the same as white bg since footer doesn't move
        backgroundColor: "#ffffff",
    },
});