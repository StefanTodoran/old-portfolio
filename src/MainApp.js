import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {CornerGuide} from "./components/CornerGuide";

import './App.css';
import {ProjectsPage} from "./components/ProjectsPage";
import {FreelancePage} from "./components/FreelancePage";
import {Footer} from "./components/Footer";
import {ScrollAnim} from "./components/ScrollAnim";
import {Header} from "./components/Header";

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

    render() {
        const mobile = this.props.mobile || this.state.tallMode;
        return (
            <div className={"background"}>
                <ScrollAnim/>
                <ScrollAnim/>

                <CornerGuide mobile={mobile}/>
                <FreelancePage mobile={mobile} refProp={this.freelanceRef}/>
                <ProjectsPage mobile={mobile} refProp={this.projectsRef}/>

                <br/>
                <Header freelanceScroll={this.freelanceScroll} mobile={mobile}
                        projectsScroll={this.projectsScroll} introScroll={this.introScroll}/>
                <Footer mobile={mobile}/>
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
        width: 5,
        height: 1200,
    },
});