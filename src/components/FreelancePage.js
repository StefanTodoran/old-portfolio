import React, { Component } from "react";
import {View} from "react-native-web";
import {StyleSheet} from "react-native";

import './Components.css';
import preview1 from "../assets/iha_preview_alt.png";
import preview3 from "../assets/siwh_preview_1.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import {ParallaxSection} from "./ParallaxSection";

export class FreelancePage extends Component {
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
        const firstParallax = document.querySelector('.clientPreview1');
        const firstDesc = document.querySelector('.firstDesc');
        let firstDifference = this.state.middle - this.getMiddle(firstDesc.getBoundingClientRect());
        firstParallax.style.transform = `translateY(${firstDifference * -.5}px)`

        const secondParallax = document.querySelector('.clientPreview2');
        const secondDesc = document.querySelector('.secondDesc');
        let secondDifference = this.state.middle - this.getMiddle(secondDesc.getBoundingClientRect());
        secondParallax.style.transform = `translateY(${secondDifference * -.5}px)`
    }

    getMiddle(element) {
        return ((element.top + element.bottom) / 2);
    }


    render() {
        const itemOneContent = () => {
            return(
                <div className={"firstDesc"}>
                    <div className={"title"}>Web Design Origins</div>
                    <div className={"paragraph"}>
                        I first got into web design starting in 2019 shortly after first learning to
                        code, when I built a website for my mom's small business. Although I had never expected my work to serve
                        as anything more than as a way to attract customers to my mom's business, due to her networking many of her
                        colleagues and other local business owners saw the website I had built, and before I knew it I had requests
                        coming in from all over!
                    </div>
                    <br/>
                </div>
            )
        }
        const itemTwoContent = () => {
            return(
                <div className={"secondDesc"}>
                    <div className={"title"}>Freelance Web Design</div>
                    <div className={"paragraph"}>
                        As I've developed my web design skills, both through experience and through the Paul Allen
                        computer science program at the University of Washington, I've started to actively seek out more clients. Not only
                        is my freelance work a great opportunity to practice programming outside of a classroom environment, it is
                        also an opportunity to support local business. In the current day and age, a website isn't exactly optional anymore. However,
                        often times professional website building services can be prohibitively  expensive, while also lacking sufficient
                        customization and design involvement on behalf of the customer to warrant their price.
                    </div>
                </div>
            )
        }

        const imageOneStyle = (this.props.mobile) ? "mobileImage" : "clientPreview1";
        const imageTwoStyle = (this.props.mobile) ? "mobileImage" : "clientPreview2";
        const logoStyle = (this.props.mobile) ? "mobileLogo" : "clientLogo";

        return(
            <View style={styles.container} ref={this.props.refProp}>
                <ParallaxSection image={preview3} imageStyle={imageOneStyle} large={true}
                                 content={itemOneContent} mobile={this.props.mobile}/>

                <br/>
                <View style={styles.logosTitle}>
                    <div className={"lineLeft"}/>
                    <div className={"logoLabel"}>RECENT CLIENTS</div>
                    <div className={"lineRight"}/>
                </View>
                <View style={styles.logos}>
                    <img title={"Sound Integrative Women's Health"} className={logoStyle} src={client1} alt={""}/>
                    <img title={"Alina Hairstylist"} className={logoStyle} src={client2} alt={""}/>
                    <img title={"TDSW Solutions Corp."} className={logoStyle} src={client4} alt={""}/>
                    <img title={"Inner Harmony Acupuncture"} className={logoStyle} src={client3} alt={""}/>
                </View>
                <View style={styles.logosTitle}>
                    <div className={"longLine"}/>
                </View>
                <br/>

                <ParallaxSection image={preview1} imageStyle={imageTwoStyle} flipped={true} large={true}
                                 content={itemTwoContent} mobile={this.props.mobile}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
    },
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
});