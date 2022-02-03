import React, { Component } from "react";
import {View} from "react-native-web";
import {StyleSheet} from "react-native";
import {ParallaxSection} from "./ParallaxSection";

import './Components.css';
import technivision from "../assets/technivision.gif";
import linguini from "../assets/linguini.png";
import datina from "../assets/datina.gif";

export class ProjectsPage extends Component {
    state = {
        middle: 0,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.doParallax);
        this.setState({
            middle: document.documentElement.clientHeight/2,
        })
    }

    doParallax = () => {
        const tvParallax = document.querySelector('.tvParallax');
        const tvDesc = document.querySelector('.tvDesc');
        let tvDifference = this.state.middle - this.getMiddle(tvDesc.getBoundingClientRect());
        tvParallax.style.transform = `translateY(${tvDifference * -.5}px)`

        const lgParallax = document.querySelector('.lgParallax');
        const lgDesc = document.querySelector('.lgDesc');
        let lgDifference = this.state.middle - this.getMiddle(lgDesc.getBoundingClientRect());
        lgParallax.style.transform = `translateY(${lgDifference * -.5}px)`

        const daParallax = document.querySelector('.daParallax');
        const daDesc = document.querySelector('.daDesc');
        let daDifference = this.state.middle - this.getMiddle(daDesc.getBoundingClientRect());
        daParallax.style.transform = `translateY(${daDifference * -.5}px)`
    }

    getMiddle(element) {
        return ((element.top + element.bottom) / 2);
    }

    render() {
        const itemOneContent = () => {
            return(
                <div className={"tvDesc"}>
                    <a href={"https://www.youtube.com/watch?v=tSOshI3OD_Q"} target="_blank"
                       className={"title"}>Technivision ⮚</a>
                    <div className={"paragraph"}>
                        A “personal trainer in your pocket” hybrid mobile app that aims to help users achieve
                        safer, more effective workouts. By utilizing computer vision and pose estimation, Technivision
                        can provide individualized feedback on their exercise technique.
                    </div>
                </div>
            )
        }
        const itemTwoContent = () => {
            return(
                <div className={"lgDesc"}>
                    <a href={"https://www.youtube.com/watch?v=HCLEnS05A-s"} target="_blank"
                       className={"title"}>Linguini ⮚</a>
                    <div className={"paragraph"}>
                        A light-weight browser extension designed to help you translate words and phrases at the press
                        of a button. Its sleek, low-profile interface seamlessly integrates into chrome; you won't notice
                        it when you don't need to use it. Created with language learners in mind, linguini offers multiple
                        translations to help users find deeper understanding and assist learning.
                    </div>
                </div>
            )
        }
        const itemThreeContent = () => {
            return(
                <div className={"daDesc"}>
                    <a href={"https://www.facebook.com/datinaseattle"} target="_blank"
                       className={"title"}>Datina ⮚</a>
                    <div className={"paragraph"}>
                        ...is a Romanian folkloric ensemble based in Seattle, Washington composed entirely of volunteers.
                        As I managed the audio at performances and practices, I grew to be dissatisfied with the existing
                        premium music software. Both out of a desire to save money—the non-profit group is low budget and
                        funded by donations—and to address these shortcomings with existing software, I created a music manager
                        Python program to organize, edit and play music for both practices and performances.
                    </div>
                </div>
            )
        }

        const tvStyle = (this.props.mobile) ? "tvMobileImage" : "tvParallax";
        const lgStyle = (this.props.mobile) ? "mobileImage" : "lgParallax";
        const daStyle = (this.props.mobile) ? "mobileImage" : "daParallax";

        return(
            <View style={styles.container} ref={this.props.refProp}>
                <ParallaxSection image={technivision} imageStyle={tvStyle}
                                 content={itemOneContent} mobile={this.props.mobile}/>
                <ParallaxSection image={linguini} imageStyle={lgStyle}
                                 content={itemTwoContent} mobile={this.props.mobile} flipped={true}/>
                <ParallaxSection image={datina} imageStyle={daStyle}
                                 content={itemThreeContent} mobile={this.props.mobile}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
        overflow: "hidden",
    },
});