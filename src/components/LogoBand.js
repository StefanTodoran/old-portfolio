import React, {Component} from "react";
import './Components.scss';
import {View} from "react-native-web";
import {StyleSheet} from "react-native";
import client1 from "../assets/client1.png";
import client2 from "../assets/client2.png";
import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";
import client5 from "../assets/client5.png";
import client6 from "../assets/client6.png";

export class LogoBand extends Component {
  render() {
    if (this.props.mobile) {
      return (
        <View style={styles.containerMobile}>
          <View style={styles.logosTitle}>
            <div className={"lineLeft"}/>
            <div className={"logoLabel"}>RECENT CLIENTS</div>
            <div className={"lineRight"}/>
          </View>
          <View style={styles.mobileLogos}>
            <img title={"Sound Integrative Women's Health"} className={"mobile-logo"}
                 src={client1} draggable={false} style={{"--order": 1}}/>
            <img title={"Alina Hairstylist"} className={"mobile-logo"}
                 src={client2} draggable={false} style={{"--order": 2}}/>
            <img title={"Inner Harmony Acupuncture"} className={"mobile-logo"}
                 src={client3} draggable={false} style={{"--order": 3}}/>
            <img title={"TDSW Solutions Corp."} className={"mobile-logo"}
                 src={client4} draggable={false} style={{"--order": 4}}/>
            <img title={"GeoSMART"} className={"mobile-logo"}
                 src={client5} draggable={false} style={{"--order": 5}}/>
            <img title={"Gleam"} className={"mobile-logo"}
                 src={client6} draggable={false} style={{"--order": 6}}/>
          </View>
          <View style={styles.logosTitle}>
            <div className={"longLine"}/>
          </View>
        </View>
      );
    }

    const clientLogo = (order, src, link) => {
      return (
        <a className={"hover-image"} href={link} target={"_blank"}
           style={{"--order": order, backgroundImage: `url(${src})`}}/>
      )
    }
    return (
      <View style={styles.container}>
        <View style={styles.logosTitle}>
          <div className={"lineLeft"}/>
          <div className={"logoLabel"}>RECENT CLIENTS</div>
          <div className={"lineRight"}/>
        </View>
        <View style={styles.logos}>

          {clientLogo(1, client1, "https://www.soundintegrativewomens.com/")}
          {clientLogo(2, client2)}
          {clientLogo(3, client3, "https://www.acupuncture-5e.com/")}
          {clientLogo(4, client4)}
          {clientLogo(5, client5, "https://geo-smart.github.io/geosmartsite/")}
          {clientLogo(6, client6, "http://gogleam.co/")}
        </View>
        <View style={styles.logosTitle}>
          <div className={"longLine"}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logosTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  logos: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    overflow: "hidden",
    height: "max(13vw, 150px)",
  },
  mobileLogos: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    overflow: "hidden",
    height: "max(13vw, 85px)",
  },

  container: {
    marginVertical: "20vh",
  },
  containerMobile: {
    marginVertical: "5vh",
  },
});