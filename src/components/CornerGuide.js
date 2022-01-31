import React, {Component} from "react";
import {View} from "react-native-web";
import {StyleSheet} from "react-native";

import './Components.css';
import portrait from "../assets/portrait.png";
import intro from "../assets/intro.png";
import projects from "../assets/projects.png";

export class CornerGuide extends Component {
    state = {
        position: 0, // we start at the top of the page
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.listenToScroll)
    }

    // method measures scroll position relative to the bottom, e.g.
    // position = 1 is the bottom, position = 0 is the top.
    listenToScroll = () => {
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = winScroll / height;

        this.setState({
            position: scrolled,
        });
    }


    render() {
        const show = (this.state.position < 0.1) ? intro : projects;
        return(
            <div className={"guideContainer"}>
                <View style={styles.container}>
                    <img className={"portrait"} src={portrait} alt={""}/>
                    <img className={"blurb"} src={show} alt={""}/>
                </View>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row-reverse",
        flex: 1,
    },
});