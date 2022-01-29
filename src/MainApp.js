import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {CornerGuide} from "./components/CornerGuide";

import './App.css';
import {ProjectsPage} from "./components/ProjectsPage";
import {FreelancePage} from "./components/FreelancePage";
import {Footer} from "./components/Footer";
import {ScrollAnim} from "./components/ScrollAnim";

export class MainApp extends Component {
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
                <FreelancePage mobile={this.props.mobile || this.state.tallMode}/>
                <ProjectsPage mobile={this.props.mobile || this.state.tallMode}/>

                <br/>
                <Footer/>
            </div>
        );
    }
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