import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {CornerGuide} from "./components/CornerGuide";

import './App.css';
import {ProjectsPage} from "./components/ProjectsPage";
import {FreelancePage} from "./components/FreelancePage";
import {Footer} from "./components/Footer";
import {ScrollAnim} from "./components/ScrollAnim";
import {Header} from "./components/Header";
import {View} from "react-native-web";
import {IntroPage} from "./components/IntroPage";
import {AboutPage} from "./components/AboutPage";

export class MainApp extends Component {
    constructor(props) {
        super(props)
        this.freelanceRef = React.createRef();
        this.projectsRef = React.createRef();
        this.topRef = React.createRef();
    }

    state = {
        tallMode: false,
        // tallMode handles resizing for the desktop site. Mobile is always in
        // tall mode, while desktop switches based on the window width.
    }

    componentDidMount() {
        window.addEventListener('resize', this.listenToResize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.listenToResize)
    }

    listenToResize = () => {
        if (document.documentElement.scrollWidth < 850) {
            this.setState({
                tallMode: true,
            });
        } else {
            this.setState({
                tallMode: false,
            });
        }
    }

    setEffects = (active) => {
        const bg = document.querySelector('.background');
        const grain = document.querySelector('.grain');
        const inner = document.querySelector('.filmScratchInner');
        const outer = document.querySelector('.filmScratchOuter');

        if (active) {
            bg.classList.add('activeBackground');
            grain.classList.add('activeGrain');
            inner.classList.add('activeScratchInner');
            outer.classList.add('activeScratchOuter');
        } else {
            bg.classList.remove('activeBackground');
            grain.classList.remove('activeGrain');
            inner.classList.remove('activeScratchInner');
            outer.classList.remove('activeScratchOuter');
        }
    }

    render() {
        const mobile = this.props.mobile || this.state.tallMode;
        return (
            <div>
                <div className={"background activeBackground"}/>
                <div className={"grain activeGrain"}/>
                <div className={"filmScratchInner activeScratchInner"}/>
                <div className={"filmScratchOuter activeScratchOuter"}/>
                <IntroPage mobile={mobile}/>
                <AboutPage mobile={mobile} effectsCallback={this.setEffects}/>
                {/*<ScrollAnim/>*/}

                <CornerGuide mobile={mobile}/>
                <FreelancePage mobile={mobile} refProp={this.freelanceRef}/>
                <ProjectsPage mobile={mobile} refProp={this.projectsRef}/>

                <View style={styles.filler}/>

                <Footer/>
                <Header freelanceScroll={this.freelanceScroll} mobile={mobile}
                        projectsScroll={this.projectsScroll} introScroll={this.introScroll}/>
            </div>
        );
    }

    freelanceScroll = () => this.freelanceRef.current.scrollIntoView();
    projectsScroll = () => this.projectsRef.current.scrollIntoView();
    introScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },
    filler: {
        height: "15vh",
    },
});