import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {View} from "react-native-web";
import {CornerGuide} from "./components/CornerGuide";

import './App.css';
import scroll from "./assets/scroll.gif";
import {ProjectsPage} from "./components/ProjectsPage";
import {FreelancePage} from "./components/FreelancePage";
import {Footer} from "./components/Footer";

export class MainApp extends Component {
    render() {
        return (
            <div className={"background"}>
                <View style={styles.scrollContainer}>
                    <img className={"scroll"} src={scroll} alt={""}/>
                </View>
                <View style={styles.scrollContainer}>
                    <img className={"scroll"} src={scroll} alt={""}/>
                </View>

                <CornerGuide/>
                <FreelancePage mobile={this.props.mobile}/>
                <ProjectsPage mobile={this.props.mobile}/>

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
    scrollContainer: {
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
    },
    filler: {
        width: 5,
        height: 1200,
    },
});