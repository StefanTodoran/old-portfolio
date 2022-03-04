import React, { Component } from "react";
import './IntroAnim.css';
import {TouchableOpacity, View} from "react-native-web";
import {CornerGuide} from "./CornerGuide";
import {StyleSheet} from "react-native";
import {FreelancePage} from "./FreelancePage";
import {ProjectsPage} from "./ProjectsPage";
import {Footer} from "./Footer";
import {Header} from "./Header";

export class IntroAnim extends Component {
    state = {
        started: false,
        header: false,
    }

    startIntro = () => {
        this.setState({started: true});
        const bg = document.querySelector('.background');
        const grain = document.querySelector('.grain');
        const inner = document.querySelector('.filmScratchInner');
        const outer = document.querySelector('.filmScratchOuter');
        const stutter = document.querySelector('.wholeView');

        bg.classList.add('activeBackground');
        grain.classList.add('activeGrain');
        inner.classList.add('activeScratchInner');
        outer.classList.add('activeScratchOuter');
        stutter.classList.add('wholeViewActive');
    }

    setHeader = (state) => {
        this.setState({header: state});
    }

    render() {
        return(
            <div>
                <div className={"filmScratchInner"}/>
                <div className={"filmScratchOuter"}/>
                <div className={"background"}/>
                <div className={"grain"}/>
                {!this.state.started && <div className={"fullScreenContainer"}>
                    <TouchableOpacity onPress={this.startIntro}>
                        <svg className={"playButton"} width="114" height="130" viewBox="0 0 57 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_0_1" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="57" height="65">
                            <g id="mask0_0_1">
                                <path id="Play" d="M57 29.7481L0.265424 64.5625L0.265427 0.0913939L57 29.7481Z" fill="#C4C4C4"/>
                            </g>
                        </mask>
                        <g mask="url(#mask0_0_1)">
                            <g id="Gradient Background">
                                <path id="Vector" d="M96.9744 -41H-62V117.974H96.9744V-41Z" fill="url(#paint0_linear_0_1)"/>
                            </g>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_0_1" x1="17.4872" y1="-41" x2="17.4872" y2="117.974" gradientUnits="userSpaceOnUse">
                                <stop offset="0.333333" stopColor="#FF8E47"/>
                                <stop offset="0.598958" stopColor="#FFC05C"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    </TouchableOpacity>
                </div>}
                {this.state.started &&
                    <div>
                        <View style={styles.filler}/>
                        <View style={styles.filler}/>
                        <div className={"fullScreenContainer paragraph hint"}>HINT: Scroll to 'watch' the movie</div>
                        <CornerGuide mobile={this.props.mobile} setHeader={this.setHeader}/>

                        <FreelancePage mobile={this.props.mobile} refProp={this.freelanceRef}/>
                        <ProjectsPage mobile={this.props.mobile} refProp={this.projectsRef}/>
                        {!this.props.mobile && <View style={styles.container}>
                            <div className={"fin"}>FIN</div>
                        </View>}
                        <Header freelanceScroll={this.freelanceScroll} mobile={this.props.mobile}
                                projectsScroll={this.projectsScroll} introScroll={this.introScroll}/>
                    </div>
                }
            </div>
        )
    }
}

const styles = StyleSheet.create({
    filler: {
        height: "100vh",
    },
    container: {
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }
});