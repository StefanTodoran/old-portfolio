import React, { Component } from "react";
import {View} from "react-native-web";
import {StyleSheet} from "react-native";
import './Components.css';
import resumePDF from "../assets/Resume.pdf";
import {MenuItem} from "./MenuItem";

export class IntroPage extends Component {
    state = {
        resumeHover: false,
        contactHover: false,
    };

    resumeState = () => {
        this.setState({resumeHover: !this.state.resumeHover});
    }

    contactState = () => {
        this.setState({contactHover: !this.state.contactHover});
    }

    render() {
        const mail = "mailto:stodoran@uw.edu?subject=Hey!+Lets+work+together!";

        // const lightColor = "#BB47FF";
        // const darkColor = "#6647FF";
        const lightColor = "#FFC671";
        const darkColor = "#FF8E47";

        if (this.props.mobile) {
            return(
                <View style={styles.scrollContainer}>
                    <View style={{flexDirection: "column", alignItems: "center", justifyContent: "center"}}>

                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <svg width="50" height="52" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="50" height="52"/>
                                <mask id="mask0_0_1" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="52">
                                    <g id="mask0_0_1">
                                        <g id="Mimic Text">
                                            <path id="Line 3" d="M19.0769 34.1795H42.9231" stroke="black" strokeWidth="1.58974"/>
                                            <path id="Line 2" d="M19.0769 29.4103H42.9231" stroke="black" strokeWidth="1.58974"/>
                                            <path id="Line 1" d="M22.2564 24.641H42.9231" stroke="black" strokeWidth="1.58974"/>
                                        </g>
                                        <g id="File Outline" style={{mixBlendMode: "multiply"}}>
                                            <path d="M12.7179 0.28254H15.8975L38.9487 0.282538L37.359 3.17949V13.5128H46.1026V16.6923H37.359H34.1795V3.462H15.8975L15.8974 46.1026H46.1026V13.5128L37.359 3.17949L38.9487 0.282538L49.2821 11.9231V49.2821H12.718V28.1032L12.7179 0.28254Z" fill="black"/>
                                            <path d="M0.230923 3.7031L3.21668 3.41115L15.2493 1.98691L15.541 4.99005L3.50864 6.39691L7.64463 48.6952L32.2983 46.1636L32.5903 49.1494L4.95083 51.9729L0.230923 3.7031Z" fill="black"/>
                                        </g>
                                    </g>
                                </mask>
                                <g mask="url(#mask0_0_1)">
                                    <g id="Group">
                                        <g id="Gradient Background" filter="url(#filter0_i_0_1)">
                                            <path id="Vector_2" d="M109.692 -46.1026H-49.2821V112.872H109.692V-46.1026Z" fill="url(#paint0_linear_0_1)"/>
                                        </g>
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_i_0_1" x="-49.2821" y="-46.1026" width="158.974" height="165.333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="6.35897"/>
                                        <feGaussianBlur stdDeviation="3.17949"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_0_1" x1="30.2051" y1="-46.1026" x2="30.2051" y2="112.872" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.333333" stopColor={darkColor}/>
                                        <stop offset="0.598958" stopColor={lightColor}/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </View>
                        <a href={resumePDF} target="_blank" className={"noUnderlineLink"}>
                            <div className={"menuItem title clickableTitle"}>RESUME</div></a>

                        <View style={{flexDirection: "row", justifyContent: "center"}}>
                            <svg width="57" height="49" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="Untitled (1) 1">
                                    <mask id="mask0_1_1" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="35">
                                        <g id="mask0_1_1">
                                            <path id="Right Line" d="M40 30L23 21" stroke="black" stroke-width="1.25"/>
                                            <path id="Left Line" d="M1 30L18 21" stroke="black" stroke-width="1.25"/>
                                            {this.state.contactHover && <path id="Open Envelope" d="M1 13L20.5 2L40 13" stroke="black" stroke-width="2"/>}
                                            {!this.state.contactHover && <path id="Closed Envelope" d="M0.5 13H20.5H40.5" stroke="black" stroke-width="2"/>}
                                            <path id="Top Line" d="M1 14L20.5 22L40 14" stroke="black" stroke-width="2"/>
                                            <path id="Mail Outline" d="M0.6 12L2 13V23V33H39V13L40.4 12L41 13V35H0V13L0.6 12Z" fill="#000"/>
                                        </g>
                                    </mask>
                                    <g mask="url(#mask0_1_1)">
                                        <g id="Group">
                                            <g id="Gradient Background" filter="url(#filter0_i_0_1)">
                                                <path id="Vector_2" d="M72 -36H-28V64H72V-36Z" fill="url(#paint0_linear_0_1)"/>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                                <defs>
                                    <filter id="filter0_i_0_1" x="-28" y="-36" width="100" height="104" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                        <feOffset dy="4"/>
                                        <feGaussianBlur stdDeviation="2"/>
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_0_1" x1="22" y1="-36" x2="22" y2="64" gradientUnits="userSpaceOnUse">
                                        <stop offset="0.333333" stopColor={darkColor}/>
                                        <stop offset="0.598958" stopColor={lightColor}/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </View>
                        <a href={mail} target="_blank" className={"noUnderlineLink"}>
                            <div className={"menuItem title clickableTitle"}>CONTACT</div></a>

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
        const resumeSVG = () => {
            return(
                <svg width="50" height="52" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="50" height="52"/>
                    <mask id="mask0_0_1" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="52">
                        <g id="mask0_0_1">
                            <g id="Mimic Text">
                                <path id="Line 3" d="M19.0769 34.1795H42.9231" stroke="black" strokeWidth="1.58974"/>
                                <path id="Line 2" d="M19.0769 29.4103H42.9231" stroke="black" strokeWidth="1.58974"/>
                                <path id="Line 1" d="M22.2564 24.641H42.9231" stroke="black" strokeWidth="1.58974"/>
                            </g>
                            <g id="File Outline" style={{mixBlendMode: "multiply"}}>
                                <path d="M12.7179 0.28254H15.8975L38.9487 0.282538L37.359 3.17949V13.5128H46.1026V16.6923H37.359H34.1795V3.462H15.8975L15.8974 46.1026H46.1026V13.5128L37.359 3.17949L38.9487 0.282538L49.2821 11.9231V49.2821H12.718V28.1032L12.7179 0.28254Z" fill="black"/>
                                {this.state.resumeHover && <path d="M0.230923 3.7031L3.21668 3.41115L15.2493 1.98691L15.541 4.99005L3.50864 6.39691L7.64463 48.6952L32.2983 46.1636L32.5903 49.1494L4.95083 51.9729L0.230923 3.7031Z" fill="black"/>}
                            </g>
                        </g>
                    </mask>
                    <g mask="url(#mask0_0_1)">
                        <g id="Group">
                            <g id="Gradient Background" filter="url(#filter0_i_0_1)">
                                <path id="Vector_2" d="M109.692 -46.1026H-49.2821V112.872H109.692V-46.1026Z" fill="url(#paint0_linear_0_1)"/>
                            </g>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_i_0_1" x="-49.2821" y="-46.1026" width="158.974" height="165.333" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="6.35897"/>
                            <feGaussianBlur stdDeviation="3.17949"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1"/>
                        </filter>
                        <linearGradient id="paint0_linear_0_1" x1="30.2051" y1="-46.1026" x2="30.2051" y2="112.872" gradientUnits="userSpaceOnUse">
                            <stop offset="0.333333" stopColor={darkColor}/>
                            <stop offset="0.598958" stopColor={lightColor}/>
                        </linearGradient>
                    </defs>
                </svg>
            )
        }
        const contactSVG = () => {
            return(
                <svg width="57" height="49" viewBox="0 0 41 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Untitled (1) 1">
                        <mask id="mask0_1_1" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="35">
                            <g id="mask0_1_1">
                                <path id="Right Line" d="M40 30L23 21" stroke="black" strokeWidth="1.25"/>
                                <path id="Left Line" d="M1 30L18 21" stroke="black" strokeWidth="1.25"/>
                                {this.state.contactHover && <path id="Open Envelope" d="M1 13L20.5 2L40 13" stroke="black" strokeWidth="2"/>}
                                {!this.state.contactHover && <path id="Closed Envelope" d="M0.5 13H20.5H40.5" stroke="black" strokeWidth="2"/>}
                                {this.state.contactHover && <path id="Top Line" d="M1 14L20.5 22L40 14" stroke="black" strokeWidth="1.5"/>}
                                {!this.state.contactHover && <path id="Top Line" d="M1 14L20.5 22L40 14" stroke="black" strokeWidth="2"/>}
                                <path id="Mail Outline" d="M0.6 12L2 13V23V33H39V13L40.4 12L41 13V35H0V13L0.6 12Z" fill="#000"/>
                            </g>
                        </mask>
                        <g mask="url(#mask0_1_1)">
                            <g id="Group">
                                <g id="Gradient Background" filter="url(#filter0_i_0_1)">
                                    <path id="Vector_2" d="M72 -36H-28V64H72V-36Z" fill="url(#paint0_linear_0_1)"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_i_0_1" x="-28" y="-36" width="100" height="104" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="4"/>
                            <feGaussianBlur stdDeviation="2"/>
                            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1"/>
                        </filter>
                        <linearGradient id="paint0_linear_0_1" x1="22" y1="-36" x2="22" y2="64" gradientUnits="userSpaceOnUse">
                            <stop offset="0.333333" stopColor={darkColor}/>
                            <stop offset="0.598958" stopColor={lightColor}/>
                        </linearGradient>
                    </defs>
                </svg>
            )
        }
        return(
            <View style={styles.scrollContainer}>
                <View style={{flex: 4, flexDirection: "row", justifyContent: "flex-end"}}>
                    <MenuItem labelText={"RESUME"} svgIcon={resumeSVG} hoverCallback={this.resumeState} onClick={resumePDF}/>
                    <MenuItem labelText={"CONTACT"} svgIcon={contactSVG} hoverCallback={this.contactState} onClick={mail}/>
                </View>
                <View style={{flex: 5}}>
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
