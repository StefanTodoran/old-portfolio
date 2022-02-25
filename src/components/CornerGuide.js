import React, {Component} from "react";
import {View} from "react-native-web";
import {StyleSheet} from "react-native";

import './Components.css';
import portrait from "../assets/portrait.png";
import quote from "../assets/quote.png";

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
        const intro = <div><h2>Hey there!</h2><p>I'm Stefan, a computer science student at the University of Washington with a passion for AI, UX Design and web development.</p></div>
        const projects = <div><h2>A bit about me...</h2><p>I always seek to push my boundaries, exploring all corners of computer science. Here's some of the work I'm most proud of.</p></div>
        const show = (this.state.position < 0.075) ? intro : projects;
        return(
            <div className={"guideContainer"}>
                <View style={styles.container}>
                    <img className={"portrait"} src={portrait} draggable={false}/>
                    <img className={"quoteRight"} src={quote} draggable={false}/>
                    <div className={"intro"}>{show}</div>
                    <img className={"quote"} src={quote} draggable={false}/>
                </View>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row-reverse",
        alignItems: "center",
        flex: 1,
    },
});