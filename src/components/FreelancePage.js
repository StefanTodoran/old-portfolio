import React, { Component } from "react";
import {View} from "react-native-web";
import {StyleSheet} from "react-native";
import {Section} from "./Section";

import './Components.css';
import preview1 from "../assets/iha_preview_alt.png";
import preview2 from "../assets/siwh_preview_2.png";
import preview3 from "../assets/siwh_preview_1.png";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";

export class FreelancePage extends Component {
    render() {
        const itemOneContent = () => {
            return(
                <div>
                    <div className={"paragraph"}>I first got into web design starting in 2019 shortly after first learning to
                        code, when I built a website for my mom's small business. Although I had never expected my work to serve
                        as anything more than as a way to attract customers to my mom's business, due to her networking many of her
                        colleagues and other local business owners saw the website I had built, and before I knew it I had requests
                        coming in from all over!
                    </div>
                    <br/>
                    <div className={"paragraph"}>Being inexperienced and self-taught, at first I was reluctant to accept. I wanted to
                        support local small businesses, but I was afraid; I didn't want to be the one to mess up such an important part
                        of their outreach network! However, I took the opportunity and put myself out there, learning on the fly. I used
                        and continue to use a variety of different frameworks and website builders, depending on the needs of my clients.
                        However, the tool that I grew to like most was React, probably in no small part due to the fact that I already had
                        experience with it. In fact, this very website is built with React!
                    </div>
                    <br/>
                </div>
            )
        }
        const itemTwoContent = () => {
            return(
                <div>
                    <div className={"paragraph"}>As I've developed my web design skills, both through experience and through the Paul Allen
                        computer science program at the University of Washington, I've started to actively seek out more clients. The way I see
                        it, not only is my freelance work a great opportunity to practice programming outside of a classroom environment, it is
                        also an opportunity to support local business. In the current day and age, a website isn't exactly optional anymore. However,
                        often times professional website building services can be prohibitively  expensive, while also lacking sufficient
                        customization and design involvement on behalf of the customer to warrant their price.
                    </div>
                    <br/>
                    <div className={"paragraph"}>This makes my services the perfect alternative to professional firms; I provide my customers with unlimited
                        revisions, to ensure that every nook and cranny of their website looks and feels exactly how they imagined. I integrate my
                        clients into the design process, exchanging ideas and developing designs together. I also only take on one client at a time,
                        and all of this for a FAR cheaper price.
                    </div>
                    <br/>
                </div>
            )
        }
        const itemFourContent = () => {
            return(
                <div>
                    <div className={"paragraph"}>If you're in need of a website yourself, or just curious about my design
                        process and want to learn more, click the contact button at the bottom of this page to shoot me an
                        email and see if my services are right for you.
                    </div>
                    <br/>
                    <div className={"divider"}>* * *</div>
                    <br/>
                    <div className={"paragraph"}>Similarly to my goals in freelance work, I strive to make the projects I
                        work on relevant to my immediate community, whether that comes in the form of building a program
                        to organize and edit music for the local folk ensemble Datina, or working on an app that uses pose
                        estimation to provide users doing socially distanced workouts with feedback on their technique. I
                        study computer science because of the opportunity to directly affect and improve the world around
                        me through the projects I work on. The next section is a couple of highlights from these very projects,
                        specifically some of the work that I consider to be the most noteworthy or meaningful. While I'm always
                        looking forward to the next opportunity or project, I always try to give my old projects updates when I
                        have a break from classes and other commitments, so some of these are still in progress.
                    </div>
                    <br/>
                </div>
            )
        }

        const imageStyle = (this.props.mobile) ? "mobileImage" : "clientPreview";
        const logoStyle = (this.props.mobile) ? "mobileLogo" : "clientLogo";

        return(
            <View style={styles.container} ref={this.props.refProp}>
                <br/><br/>
                <div className={"title"}>FREELANCE</div>
                <Section image={preview1} imageStyle={imageStyle}
                         content={itemOneContent} mobile={this.props.mobile} flipped={true}/>
                <Section image={preview2} imageStyle={imageStyle}
                         content={itemTwoContent} mobile={this.props.mobile}/>

                <br/>
                <View style={styles.logosTitle}>
                    <div className={"line"}/>
                    <div className={"logoLabel"}>RECENT CLIENTS</div>
                    <div className={"line"}/>
                </View>
                <View style={styles.logos}>
                    <img title={"Sound Integrative Women's Health"} className={logoStyle} src={client1} alt={""}/>
                    <img title={"Alina Hairstylist"} className={logoStyle} src={client2} alt={""}/>
                    <img title={"Inner Harmony Acupuncture"} className={logoStyle} src={client3} alt={""}/>
                </View>
                <View style={styles.logosTitle}>
                    <div className={"longLine"}/>
                </View>
                <br/>

                <Section image={preview3} imageStyle={imageStyle}
                         content={itemFourContent} mobile={this.props.mobile} flipped={true}/>
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