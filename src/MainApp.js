import React, {Component} from 'react';
import {CornerGuide} from "./components/CornerGuide";

import './App.css';
import {ProjectsPage} from "./components/ProjectsPage";
import {FreelancePage} from "./components/FreelancePage";
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {IntroPage} from "./components/IntroPage";
import {AboutPage} from "./components/AboutPage";
import {IntroAnim} from "./components/IntroAnim";
import {ModalWindow} from "./components/ModalWindow";

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
    modalVisible: false,
  }

  componentDidMount() {
    window.addEventListener('resize', this.listenToResize)
    this.listenToResize();
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
    const effects = [
      '.filmSpots', '.background', '.filmScratchInner',
      '.filmScratchOuter', '.wholeView', '.grain',
    ];

    for (let i = 0; i < effects.length; i++) {
      const effect = document.querySelector(effects[i]);
      if (active) {
        effect.classList.add('active');
      } else {
        effect.classList.remove('active');
      }
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
          <div className={"filmSpots active"}/>
          <div className={"filmScratchInner active"}/>
          <div className={"filmScratchOuter active"}/>
          <div className={"background active"}/>
          <div className={"grain active"}/>
          <div className={"wholeView active"}>
            <div className={"fadeInContainer"}>
              <IntroPage mobile={mobile} effectsCallback={this.setEffects}/>
              <AboutPage mobile={mobile} toggleModal={this.toggleModal}/>

              <CornerGuide mobile={mobile}/>
              <FreelancePage mobile={mobile} refProp={this.freelanceRef}/>
              <ProjectsPage mobile={mobile} refProp={this.projectsRef}/>

              <Footer mobile={mobile}/>
            </div>
          </div>
          <div className={"fadeInContainer"}>
            <Header freelanceScroll={this.freelanceScroll} mobile={mobile} toggleModal={this.toggleModal}
                    projectsScroll={this.projectsScroll} introScroll={this.introScroll}/>
            <ModalWindow visible={this.state.modalVisible} toggleModal={this.toggleModal}/>
          </div>
        </div>}
      </div>
    );
  }

  toggleModal = () => this.setState({modalVisible: !this.state.modalVisible});
  freelanceScroll = () => this.freelanceRef.current.scrollIntoView();
  projectsScroll = () => this.projectsRef.current.scrollIntoView();
  introScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
}