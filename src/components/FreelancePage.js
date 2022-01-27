import React, { Component } from "react";
import {View} from "react-native-web";
import {StyleSheet} from "react-native";
import {Section} from "./Section";

import './Components.css';
import preview1 from "../assets/iha_preview_alt.png";
import preview2 from "../assets/siwh_preview_2.png";
import preview3 from "../assets/siwh_preview_1.png";
import title from "../assets/freelance.gif";
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
                    <div className={"paragraph"}>Here are a few of my recent clients:</div>
                </div>
            )
        }
        const itemFourContent = () => {
            return(
                <div>
                    <div className={"paragraph"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut at tincidunt mauris,
                        quis mollis orci. Suspendisse eu eleifend mauris. Vestibulum lobortis, lacus sed fringilla lobortis,
                        neque urna semper odio, quis interdum ex massa quis purus. Fusce sodales lectus sit amet tristique
                        cursus. Mauris iaculis vel dui a eleifend. Ut ac dolor a odio pharetra auctor. Mauris aliquet lorem
                        facilisis, lacinia massa ac, aliquet massa. Duis dictum neque eget erat sodales auctor eu euismod erat.
                    </div>
                    <br/>
                    <div className={"paragraph"}>Nunc mollis porta urna, a convallis odio laoreet a. Nulla in metus vitae tortor
                        luctus euismod et ac ipsum. Nunc vel porttitor erat, vel efficitur turpis. Aenean nisl nibh, auctor et
                        vehicula quis, mattis et orci. Duis dolor lorem, pretium a velit ac, venenatis dignissim nisi. Quisque
                        eu est in neque lacinia sollicitudin auctor vel nulla. Aenean accumsan, lacus ut iaculis imperdiet,
                        justo nisi porta lacus, eget facilisis odio massa ac erat.
                    </div>
                    <br/>
                </div>
            )
        }

        return(
            <View style={styles.container}>
                <View style={styles.title}>
                    <img src={title} alt={""}/>
                </View>
                <Section image={preview1} imageStyle={"clientPreview"} content={itemOneContent} flipped={true}/>
                <Section image={preview2} imageStyle={"clientPreview"} content={itemTwoContent}/>
                <View style={styles.logos}>
                    <img title={"Sound Integrative Women's Health"} className={"clientLogo"} src={client1} alt={""}/>
                    <img title={"Alina Hairstylist"} className={"clientLogo"} src={client2} alt={""}/>
                    <img title={"Inner Harmony Acupuncture"} className={"clientLogo"} src={client3} alt={""}/>
                </View>
                <Section image={preview3} imageStyle={"clientPreview"} content={itemFourContent} flipped={true}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        padding: 10,
    },
    title: {
        flexDirection: "row",
        justifyContent: "center",
        height: "10vh",
    },
    logos: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
});