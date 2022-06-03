import React, {Component} from "react";
import './Components.css';
import {View} from "react-native-web";
import {StyleSheet} from "react-native";

export class Section extends Component {
  render() {
    if (this.props.mobile) {
      return (
        <View style={styles.mobile}>
          <this.props.content/>
          <br/>
          <img className={this.props.imageStyle} src={this.props.image} alt={""}/>
        </View>
      );
    }

    if (this.props.flipped) {
      return (
        <View>
          <View style={styles.project}>
            <img className={this.props.imageStyle} src={this.props.image} alt={""}/>
            <View style={styles.description}>
              <this.props.content/>
            </View>
          </View>
        </View>
      );
    }
    return (
      <View>
        <View style={styles.project}>
          <View style={styles.description}>
            <this.props.content/>
          </View>
          <img className={this.props.imageStyle} src={this.props.image} alt={""}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  project: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  description: {
    width: "40%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  mobile: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  }
});