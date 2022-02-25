import React, { Component } from "react";
import {View} from "react-native-web";
import {StyleSheet} from "react-native";
import './Components.css';

export class AboutPage extends Component {
    state = {
        accessibilityHover: false,
        effects: true,
    };

    accessibilityState = () => {
        this.setState({accessibilityHover: !this.state.accessibilityHover});
    }

    toggleEffects = () => {
        this.props.effectsCallback(!this.state.effects);
        this.setState({effects: !this.state.effects});
    }

    render() {
        // const lightColor = "#BB47FF";
        // const darkColor = "#6647FF";
        const lightColor = "#FFC671";
        const darkColor = "#FF8E47";

        if (this.props.mobile) {
            return(
                <View style={styles.scrollContainer}>
                    <View style={{flexDirection: "column"}}>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <svg width="52" height="66" viewBox="0 0 40 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_2_0" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="51">
                                    <g id="mask0_2_0">
                                        {this.state.effects && <path id="Play" d="M25.7654 37.875L17.5154 42.9375L17.5154 33.5625L25.7654 37.875Z" fill="#000"/>}
                                        {!this.state.effects && <path id="Pause" d="M25.9375 33.5625L25.9375 42.9375L22.3904 42.9375L22.3904 33.5625L25.9375 33.5625Z" fill="#C4C4C4"/>}
                                        {!this.state.effects && <path id="Pause_2" d="M21.0625 33.5625L21.0625 42.9375L17.5154 42.9375L17.5154 33.5625L21.0625 33.5625Z" fill="#C4C4C4"/>}
                                        {!this.state.accessibilityHover && <g id="Shutter">
                                            <g id="Dashes">
                                                <path id="Rectangle 3" d="M8.28723 14.5484L12.0409 13.284L9.83726 20.6449L6.0763 21.7697L8.28723 14.5484Z" fill="#000"/>
                                                <path id="Rectangle 4" d="M16.4723 9.97673L20.2259 8.7124L18.0223 16.0733L14.2613 17.198L16.4723 9.97673Z" fill="#000"/>
                                                <path id="Rectangle 5" d="M24.5956 5.29638L28.3493 4.03205L26.1456 11.3929L22.3847 12.5177L24.5956 5.29638Z" fill="#000"/>
                                            </g>
                                            <path id="Flap" d="M0.0536728 19.0067L2.66301 17.5264L5.00685 21.6578L31.5352 6.60793L29.9932 3.88986L3.46485 18.9397L2.66301 17.5264L29.1913 2.47647L31.8007 0.996154L34.9772 6.59537L3.23018 24.6059L0.0536728 19.0067Z" fill="#000"/>
                                        </g>}
                                        {this.state.accessibilityHover && <g id="Shutter">
                                            <g id="Dashes_2">
                                                <path id="Rectangle 3_2" d="M12.3614 18.1447L16.2501 18.8972L10.7013 24.2122L6.87507 23.3347L12.3614 18.1447Z" fill="#000"/>
                                                <path id="Rectangle 4_2" d="M21.7364 18.2072L25.6251 18.9597L20.0763 24.2747L16.2501 23.3972L21.7364 18.2072Z" fill="#000"/>
                                                <path id="Rectangle 5_2" d="M31.1114 18.1447L35.0001 18.8972L29.4513 24.2122L25.6251 23.3347L31.1114 18.1447Z" fill="#000"/>
                                            </g>
                                            <path id="Flap_2" d="M3.00007 17.9597H6.00007V22.7097H36.5001V19.5847H6.00007V17.9597H36.5001H39.5001V24.3972H3.00007V17.9597Z" fill="#000"/>
                                        </g>}
                                        <g id="Shutter_2">
                                            <g id="Dashes_2">
                                                <path id="Rectangle 3_2" d="M12.3614 24.31L16.2501 25.0625L10.7013 30.3775L6.87507 29.5L12.3614 24.31Z" fill="#000"/>
                                                <path id="Rectangle 4_2" d="M21.7364 24.3725L25.6251 25.125L20.0763 30.44L16.2501 29.5625L21.7364 24.3725Z" fill="#000"/>
                                                <path id="Rectangle 5_2" d="M31.1114 24.31L35.0001 25.0625L29.4513 30.3775L25.6251 29.5L31.1114 24.31Z" fill="#000"/>
                                            </g>
                                            <path id="Flap_2" d="M3.00007 24.125H6.00007V28.875H36.5001V25.75H6.00007V24.125H36.5001H39.5001V30.5625H3.00007V24.125Z" fill="#000"/>
                                        </g>
                                        <path id="Box" d="M3.00007 26H6.00007V29V47.5H36.5001V26H39.5001V50.5H3.00007V26Z" fill="#000"/>
                                    </g>
                                </mask>
                                <g mask="url(#mask0_2_0)">
                                    <g id="Gradient Background">
                                        <path id="Vector" d="M99.9744 -45H-59V113.974H99.9744V-45Z" fill="url(#paint0_linear_0_1)"/>
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_0_1" x1="20.4872" y1="-45" x2="20.4872" y2="113.974" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.333333" stopColor={darkColor}/>
                                        <stop offset="0.598958" stopColor={lightColor}/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </View>
                        <a onMouseDown={this.toggleEffects} target="_blank" className={"noUnderlineLink"}>
                            <div className={"menuItem"}>TOGGLE EFFECTS</div></a>
                        <svg width="200px" height="200px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Frame 1">
                                <mask id="mask0_1_2" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="26" y="13" width="100" height="100">
                                    <g id="Group 1">
                                        <g id="bottomArrow" style={{mixBlendMode: "multiply"}}>
                                            <path d="M50.0416 83L26 58.9584L31.6569 53.3015L50.0416 71.6863L68.4264 53.3015L74.0833 58.9584L50.0416 83Z" fill="#C4C4C4"/>
                                        </g>
                                        <g id="middleArrow" style={{mixBlendMode: "multiply"}}>
                                            <path d="M50.0416 63L26 38.9584L31.6569 33.3015L50.0416 51.6863L68.4264 33.3015L74.0833 38.9584L50.0416 63Z" fill="#C4C4C4"/>
                                        </g>
                                        <g id="topArrow" style={{mixBlendMode: "multiply"}}>
                                            <path d="M50.0416 43L26 18.9584L31.6569 13.3015L50.0416 31.6863L68.4264 13.3015L74.0833 18.9584L50.0416 43Z" fill="#C4C4C4"/>
                                        </g>
                                    </g>
                                </mask>
                                <g mask="url(#mask0_1_2)">
                                    <rect id="Rectangle 1" width="100px" height="100px" fill="url(#paint0_linear_1_2)"/>
                                </g>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_1_2" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.25" stopColor={darkColor}/>
                                    <stop offset="0.75" stopColor={lightColor}/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </View>
                </View>
            );
        }

        // else, desktop version:
        return(
            <View style={styles.scrollContainer}>
                <View style={{flex: 4, flexDirection: "row", justifyContent: "flex-end"}}>
                    <div className={"iconTextBox"}>
                        <a onMouseDown={this.toggleEffects} target="_blank" className={"noUnderlineLink"} onMouseEnter={this.accessibilityState} onMouseLeave={this.accessibilityState}>
                            <div className={"menuItem"}>TOGGLE EFFECTS</div></a>
                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <svg width="52" height="66" viewBox="0 0 40 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0_2_0" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="51">
                                    <g id="mask0_2_0">
                                        {this.state.effects && <path id="Play" d="M25.7654 37.875L17.5154 42.9375L17.5154 33.5625L25.7654 37.875Z" fill="#000"/>}
                                        {!this.state.effects && <path id="Pause" d="M25.9375 33.5625L25.9375 42.9375L22.3904 42.9375L22.3904 33.5625L25.9375 33.5625Z" fill="#C4C4C4"/>}
                                        {!this.state.effects && <path id="Pause_2" d="M21.0625 33.5625L21.0625 42.9375L17.5154 42.9375L17.5154 33.5625L21.0625 33.5625Z" fill="#C4C4C4"/>}
                                        {!this.state.accessibilityHover && <g id="Shutter">
                                            <g id="Dashes">
                                                <path id="Rectangle 3" d="M8.28723 14.5484L12.0409 13.284L9.83726 20.6449L6.0763 21.7697L8.28723 14.5484Z" fill="#000"/>
                                                <path id="Rectangle 4" d="M16.4723 9.97673L20.2259 8.7124L18.0223 16.0733L14.2613 17.198L16.4723 9.97673Z" fill="#000"/>
                                                <path id="Rectangle 5" d="M24.5956 5.29638L28.3493 4.03205L26.1456 11.3929L22.3847 12.5177L24.5956 5.29638Z" fill="#000"/>
                                            </g>
                                            <path id="Flap" d="M0.0536728 19.0067L2.66301 17.5264L5.00685 21.6578L31.5352 6.60793L29.9932 3.88986L3.46485 18.9397L2.66301 17.5264L29.1913 2.47647L31.8007 0.996154L34.9772 6.59537L3.23018 24.6059L0.0536728 19.0067Z" fill="#000"/>
                                        </g>}
                                        {this.state.accessibilityHover && <g id="Shutter">
                                            <g id="Dashes_2">
                                                <path id="Rectangle 3_2" d="M12.3614 18.1447L16.2501 18.8972L10.7013 24.2122L6.87507 23.3347L12.3614 18.1447Z" fill="#000"/>
                                                <path id="Rectangle 4_2" d="M21.7364 18.2072L25.6251 18.9597L20.0763 24.2747L16.2501 23.3972L21.7364 18.2072Z" fill="#000"/>
                                                <path id="Rectangle 5_2" d="M31.1114 18.1447L35.0001 18.8972L29.4513 24.2122L25.6251 23.3347L31.1114 18.1447Z" fill="#000"/>
                                            </g>
                                            <path id="Flap_2" d="M3.00007 17.9597H6.00007V22.7097H36.5001V19.5847H6.00007V17.9597H36.5001H39.5001V24.3972H3.00007V17.9597Z" fill="#000"/>
                                        </g>}
                                        <g id="Shutter_2">
                                            <g id="Dashes_2">
                                                <path id="Rectangle 3_2" d="M12.3614 24.31L16.2501 25.0625L10.7013 30.3775L6.87507 29.5L12.3614 24.31Z" fill="#000"/>
                                                <path id="Rectangle 4_2" d="M21.7364 24.3725L25.6251 25.125L20.0763 30.44L16.2501 29.5625L21.7364 24.3725Z" fill="#000"/>
                                                <path id="Rectangle 5_2" d="M31.1114 24.31L35.0001 25.0625L29.4513 30.3775L25.6251 29.5L31.1114 24.31Z" fill="#000"/>
                                            </g>
                                            <path id="Flap_2" d="M3.00007 24.125H6.00007V28.875H36.5001V25.75H6.00007V24.125H36.5001H39.5001V30.5625H3.00007V24.125Z" fill="#000"/>
                                        </g>
                                        <path id="Box" d="M3.00007 26H6.00007V29V47.5H36.5001V26H39.5001V50.5H3.00007V26Z" fill="#000"/>
                                    </g>
                                </mask>
                                <g mask="url(#mask0_2_0)">
                                    <g id="Gradient Background">
                                        <path id="Vector" d="M99.9744 -45H-59V113.974H99.9744V-45Z" fill="url(#paint0_linear_0_1)"/>
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient id="paint0_linear_0_1" x1="20.4872" y1="-45" x2="20.4872" y2="113.974" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.333333" stopColor={darkColor}/>
                                        <stop offset="0.598958" stopColor={lightColor}/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </View>
                    </div>
                </View>
                <View style={{flex: 5}}>
                    <svg width="200px" height="200px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 1">
                            <mask id="mask0_1_2" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="26" y="13" width="100" height="100">
                                <g id="Group 1">
                                    <g id="bottomArrow" style={{mixBlendMode: "multiply"}}>
                                        <path d="M50.0416 83L26 58.9584L31.6569 53.3015L50.0416 71.6863L68.4264 53.3015L74.0833 58.9584L50.0416 83Z" fill="000"/>
                                    </g>
                                    <g id="middleArrow" style={{mixBlendMode: "multiply"}}>
                                        <path d="M50.0416 63L26 38.9584L31.6569 33.3015L50.0416 51.6863L68.4264 33.3015L74.0833 38.9584L50.0416 63Z" fill="000"/>
                                    </g>
                                    <g id="topArrow" style={{mixBlendMode: "multiply"}}>
                                        <path d="M50.0416 43L26 18.9584L31.6569 13.3015L50.0416 31.6863L68.4264 13.3015L74.0833 18.9584L50.0416 43Z" fill="000"/>
                                    </g>
                                </g>
                            </mask>
                            <g mask="url(#mask0_1_2)">
                                <rect id="Rectangle 1" width="100px" height="100px" fill="url(#paint0_linear_1_2)"/>
                            </g>
                        </g>
                        <defs>
                            <linearGradient id="paint0_linear_1_2" x1="50" y1="0" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                                <stop offset="0.25" stopColor={darkColor}/>
                                <stop offset="0.75" stopColor={lightColor}/>
                            </linearGradient>
                        </defs>
                    </svg>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    scrollContainer: {
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        zIndex: 2,
    },
});
