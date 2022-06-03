import React, {Component} from 'react';
import {StyleSheet} from "react-native";
import {CornerGuide} from "./components/CornerGuide";

import './App.css';
import {ProjectsPage} from "./components/ProjectsPage";
import {FreelancePage} from "./components/FreelancePage";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {IntroPage} from "./components/IntroPage";
import {AboutPage} from "./components/AboutPage";
import {IntroAnim} from "./components/IntroAnim";

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

    introFinished: false,
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
    const spots = document.querySelector('.filmSpots');
    const bg = document.querySelector('.background');
    const grain = document.querySelector('.grain');
    const inner = document.querySelector('.filmScratchInner');
    const outer = document.querySelector('.filmScratchOuter');
    const stutter = document.querySelector('.wholeView');

    if (active) {
      spots.classList.add('activeFilmSpots');
      bg.classList.add('activeBackground');
      grain.classList.add('activeGrain');
      inner.classList.add('activeScratchInner');
      outer.classList.add('activeScratchOuter');
      stutter.classList.add('wholeViewActive');
    } else {
      spots.classList.remove('activeFilmSpots');
      bg.classList.remove('activeBackground');
      grain.classList.remove('activeGrain');
      inner.classList.remove('activeScratchInner');
      outer.classList.remove('activeScratchOuter');
      stutter.classList.remove('wholeViewActive');
    }
  }

  endIntro = () => {
    this.setState({introFinished: true});
  }

  render() {
    const mobile = this.props.mobile || this.state.tallMode;
    return (
      <div>
        {!this.state.introFinished && <IntroAnim endIntroCallback={this.endIntro}/>}

        {this.state.introFinished && <div>
          <div className={"filmSpots activeFilmSpots"}/>
          <div className={"filmScratchInner activeScratchInner"}/>
          <div className={"filmScratchOuter activeScratchOuter"}/>
          <div className={"background activeBackground"}/>
          <div className={"grain activeGrain"}/>
          <div className={"wholeView wholeViewActive"}>
            <div className={"fadeInContainer"}>
              <IntroPage mobile={mobile} effectsCallback={this.setEffects}/>
              <AboutPage mobile={mobile}/>

              <CornerGuide mobile={mobile}/>
              <FreelancePage mobile={mobile} refProp={this.freelanceRef}/>
              <ProjectsPage mobile={mobile} refProp={this.projectsRef}/>

              <Footer mobile={mobile}/>
            </div>
          </div>
          <div className={"fadeInContainer"}>
            <Header freelanceScroll={this.freelanceScroll} mobile={mobile}
                    projectsScroll={this.projectsScroll} introScroll={this.introScroll}/>
          </div>
        </div>}
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