import React, {Component} from 'react';
import './Components.scss';
import {View} from "react-native-web";
import {NavbarItem} from "./NavbarItem";

export class Header extends Component {
  render() {
    return (
      <div className={"navbar"}>
        <View style={{flexDirection: "row"}}>
          <NavbarItem text={"INTRO"} onPress={this.props.introScroll}
                      styleClass={"navbarItem title clickableTitle"}/>
          <NavbarItem text={"FREELANCE"} onPress={this.props.freelanceScroll}
                      styleClass={"navbarItem title clickableTitle"}/>
          <NavbarItem text={"PROJECTS"} onPress={this.props.projectsScroll}
                      styleClass={"navbarItem title clickableTitle"}/>
          <NavbarItem text={"COLLABORATE"} onPress={this.props.toggleModal}
                      styleClass={"navbarItem title clickableTitle lastItem"}/>
        </View>
        <View style={{flexDirection: "row", marginRight: 10}}>
          <div className={"menuName title"}>STEFAN TODORAN</div>
          <div className={"menuName title filledTitle"}>STEFAN TODORAN</div>
        </View>
      </div>
    );
  }
}