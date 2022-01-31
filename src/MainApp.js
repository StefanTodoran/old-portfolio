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
        return (
            <div className={"background"}>
                <ScrollAnim/>
                <ScrollAnim/>

                <CornerGuide/>
                <FreelancePage mobile={this.props.mobile || this.state.tallMode} refProp={this.freelanceRef}/>
                <ProjectsPage mobile={this.props.mobile || this.state.tallMode} refProp={this.projectsRef}/>

                <br/>
                <Header freelanceScroll={this.freelanceScroll}
                        projectsScroll={this.projectsScroll} introScroll={this.introScroll}/>
                <Footer/>
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