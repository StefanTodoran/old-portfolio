import React, { Component } from "react";
import {View} from "react-native-web";
import {StyleSheet} from "react-native";
import {Section} from "./Section";

import './Components.css';
import technivision from "../assets/technivision.gif";
import linguini from "../assets/linguini.png";
import datina from "../assets/datina.gif";

export class ProjectsPage extends Component {
    render() {
        const itemOneContent = () => {
            return(
                <div>
                    <div className={"paragraph"}>In short, Technivision is a “personal trainer in your pocket”, a hybrid mobile
                        app that aims to help users safe and feel confident in their workouts by using computer vision and machine
                        learning to provide individualized feedback on their exercise technique.
                    </div>
                    <br/>
                    <div className={"paragraph"}>Often, people who cannot afford a personal trainer but are interested in improving
                        their form will turn to online resources to learn about how to do exercises with the proper technique.
                        Unfortunately, not only is the information they find not personalized to their individual needs, it can
                        also often be inaccurate. At best, this might just mean ineffective or inefficient workouts, but at worst
                        bad technique can genuinely be dangerous.
                    </div>
                    <br/>
                    <div className={"paragraph"}>That’s where <a href={"https://www.youtube.com/watch?v=tSOshI3OD_Q"} target="_blank">Technivision</a> comes
                        in; by utilizing pose estimation to provide users with personalized feedback on how to improve their technique in
                        various exercises, Technivision has the goal of teaching users how to achieve safer, more effective work outs.
                    </div>
                </div>
            )
        }
        const itemTwoContent = () => {
            return(
                <div>
                    <div className={"paragraph"}>The ultimate goal of any person learning a language is to eventually never need a translator
                        ever again. As a language student myself, I know all too well how tedious and often blantly wrong services like Google
                        Translate can be. While copying some text, opening up Google Translate in a new tab and pasting for a semi-acurate
                        translation is good enough for some people, many of us aren't okay with settling with such a service.
                    </div>
                    <br/>
                    <div className={"paragraph"}>When it comes to translation APIs, each one out there is unique. Some may be better at short
                        phrases and individual words, while others require more context but are more adept at complex passages. With linguini,
                        not only can you get the best of both worlds, comparing and contrasting mutliple translation services, but you get
                        unparalleled convenience.
                    </div>
                    <br/>
                    <div className={"paragraph"}><a href={"https://www.youtube.com/watch?v=HCLEnS05A-s"} target="_blank">Linguini</a> is a browser
                        extension designed to help you translate words and phrases at the press of a button. Its sleek, low-profile interface
                        seamlessly integrates into chrome; you won't notice it when you don't need to use it. Created with language learners in
                        mind, linguini offers multiple translations to help users find deeper understanding and assist learning.
                    </div>
                </div>
            )
        }
        const itemThreeContent = () => {
            return(
                <div>
                    <div className={"paragraph"}><a href={"https://www.facebook.com/datinaseattle"} target="_blank">Datina</a> is a Romanian
                        folkloric ensemble based in Seattle, Washington. The group, made entirely of volunteers, helps participants to enrich
                        their cultural lives and pursue personal fulfillment through the performance of traditional dances and music, as well
                        as learning about arts and crafts from Romania. Datina strives to preserve and promote the Romanian heritage and culture.
                    </div>
                    <br/>
                    <div className={"paragraph"}>I originally got involved with the group volunteering as a Theatrical Sound Engineer, and as I
                        managed the audio at performances and practices, I grew to be dissatisfied with the existing premium music software.
                        Both out of a desire to save money—the non-profit group is low budget and funded by donations—and as a way to address these shortcomings
                        with existing software, I created a music manager Python program to organize, edit and play music for both practices and
                        performances. As of now, the program does not yet have an official release for public use, but I am continuing
                        to develop it with this goal.
                    </div>
                </div>
            )
        }

        const tvStyle = (this.props.mobile) ? "tvMobileImage" : "tvPreview";
        const lgStyle = (this.props.mobile) ? "mobileImage" : "lgPreview";
        const daStyle = (this.props.mobile) ? "mobileImage" : "daPreview";

        return(
            <View style={styles.container}>
                <div className={"title"}>PROJECTS</div>
                <Section image={technivision} imageStyle={tvStyle}
                         content={itemOneContent} mobile={this.props.mobile}/>
                <Section image={linguini} imageStyle={lgStyle}
                         content={itemTwoContent} mobile={this.props.mobile} flipped={true}/>
                <Section image={datina} imageStyle={daStyle}
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