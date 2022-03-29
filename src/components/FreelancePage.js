import React, { Component } from "react";
import {View} from "react-native-web";
import {StyleSheet} from "react-native";

import './Components.css';
import preview1 from "../assets/iha_preview_alt.png";
import preview3 from "../assets/siwh_preview_1.png";
import {ParallaxSection} from "./ParallaxSection";
import {LogoBand} from "./LogoBand";

export class FreelancePage extends Component {
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
            this.handleParallax('.clientPreview1','.firstDesc');
            this.handleParallax('.clientPreview2','.secondDesc');

            this.textAnimate('.firstDesc');
            this.textAnimate('.secondDesc');
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
            const descName = (this.props.mobile) ? '' : 'firstDesc';
            return(
                <div className={descName}>
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
            const descName = (this.props.mobile) ? '' : 'secondDesc';
            return(
                <div className={descName}>
                    <div className={"title"}>Freelance Web Design</div>
                    <div className={"paragraph"}>
                        As I've developed my web design skills, both through experience and through the Paul Allen
                        computer science program at the University of Washington, I've started to actively seek out more
                        clients. Not only is my freelance work a great opportunity to practice programming outside of a
                        classroom environment, it is also an opportunity to support local business, as often times
                        professional website building services can be prohibitively  expensive, while also lacking
                        sufficient customization and design involvement on behalf of the customer to warrant their price.
                    </div>
                </div>
            )
        }

        const imageOneStyle = (this.props.mobile) ? "mobileClientPreview" : "clientPreview1";
        const imageTwoStyle = (this.props.mobile) ? "mobileClientPreview" : "clientPreview2";

        return(
            <View style={styles.container} ref={this.props.refProp}>
                <ParallaxSection image={preview3} imageStyle={imageOneStyle}
                                 content={itemOneContent} mobile={this.props.mobile}/>
                <br/><LogoBand mobile={this.props.mobile}/><br/>
                <ParallaxSection image={preview1} imageStyle={imageTwoStyle} flipped={true}
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
});