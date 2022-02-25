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
        window.addEventListener('scroll', this.handleScroll);
        this.setState({
            middle: document.documentElement.clientHeight/2,
        })
    }

    handleScroll = () => {
        if (!this.props.mobile) {
            this.handleParallax('.tvParallax','.tvDesc');
            this.handleParallax('.lgParallax','.lgDesc');
            this.handleParallax('.daParallax','.daDesc');

            this.textAnimate('.tvDesc');
            this.textAnimate('.lgDesc');
            this.textAnimate('.daDesc');
        }
    }

    handleParallax(image, description) {
        const img = document.querySelector(image);
        const desc = document.querySelector(description);
        let diff = this.state.middle - this.getMiddle(desc.getBoundingClientRect());
        img.style.transform = `translateY(${diff * -.5}px)`;
    }

    getMiddle(element) {
        return ((element.top + element.bottom) / 2);
    }

    textAnimate(selector) {
        const text = document.querySelector(selector);
        let dist = (this.state.middle * 1.9) - this.getMiddle(text.getBoundingClientRect());
        if (dist > 0) {
            text.classList.add("activeDesc");
        } else {
            text.classList.remove("activeDesc");
        }
    }

    render() {
        const itemOneContent = () => {
            const descName = (this.props.mobile) ? '' : 'tvDesc';
            return( // {"\u2B9A"} = &#11162; = ⮚
                <div className={descName}>
                    <a href={"https://www.youtube.com/watch?v=tSOshI3OD_Q"} target="_blank"
                       className={"title"}>Technivision</a>
                    <div className={"paragraph"}>
                        A “personal trainer in your pocket” hybrid mobile app that aims to help users achieve
                        safer, more effective workouts. By utilizing computer vision and pose estimation, Technivision
                        can provide individualized feedback on their exercise technique.
                    </div>
                </div>
            )
        }
        const itemTwoContent = () => {
            const descName = (this.props.mobile) ? '' : 'lgDesc';
            return(
                <div className={descName}>
                    <a href={"https://www.youtube.com/watch?v=HCLEnS05A-s"} target="_blank"
                       className={"title"}>Linguini</a>
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
            const descName = (this.props.mobile) ? '' : 'daDesc';
            return(
                <div className={descName}>
                    <a href={"https://www.facebook.com/datinaseattle"} target="_blank"
                       className={"title"}>Datina</a>
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
        const lgStyle = (this.props.mobile) ? "lgMobileImage" : "lgParallax";
        const daStyle = (this.props.mobile) ? "daMobileImage" : "daParallax";

        return(
            <View style={styles.container} ref={this.props.refProp}>
                <div className={"wrapper"}>
                    <ParallaxSection image={technivision} imageStyle={tvStyle}
                                     content={itemOneContent} mobile={this.props.mobile}/>
                    <ParallaxSection image={linguini} imageStyle={lgStyle}
                                     content={itemTwoContent} mobile={this.props.mobile} flipped={true}/>
                    <ParallaxSection image={datina} imageStyle={daStyle}
                                     content={itemThreeContent} mobile={this.props.mobile}/>
                </div>
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