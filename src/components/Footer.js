import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {TouchableOpacity, View} from "react-native-web";
import './Components.css';

import resume from "../assets/resume.png";
import contact from "../assets/contact.png";
import top from "../assets/backToTop.png";
import resumePDF from "../assets/Resume.pdf";

export class Footer extends Component {
    render() {
        const scrollToTop = () =>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
        const emailContact = ({ email, subject, body, children }) => {
            return (
                <a href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>{children}</a>
            );
        };

        return (
            <div>
                <hr/>
                <View style={styles.container}>
                    <div>
                        <a href={resumePDF} target = "_blank">
                            <img className={"footerButton"} src={resume} alt={"RESUME"}/>
                        </a>
                        <a href={"mailto:stodoran@uw.edu?subject=Hey!+Lets+work+together!"} target = "_blank">
                            <img className={"footerButton"} src={contact} alt={"CONTACT"}/>
                        </a>
                    </div>
                    <TouchableOpacity onPress={scrollToTop}>
                        <img className={"footerButton"} src={top} alt={"BACK TO TOP"}/>
                    </TouchableOpacity>
                </View>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingLeft: "2vh",
        flex: 1,
    },
});