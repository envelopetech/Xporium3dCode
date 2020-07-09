import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  asset,
  Model,
  AmbientLight,
  PointLight,
  SpotLight
} from "react-360";
import Entity from "Entity";

export default class Lights extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight
          intensity={0.8}
          style={{
            color: "white",
            transform: [{ translate: [0, 0, 0] }]
          }}
        />

       

<PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [-180, 30, -25] }]
          }}
          distance={40}
        />

        <PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [-210, 30, -25] }]
          }}
          distance={40}
        />

<PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [150, 30, -90] }]
          }}
          distance={40}
        />

<PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [30, 30, -120] }]
          }}
          distance={40}
        />

        <PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [30, 30, -150] }]
          }}
          distance={40}
        />

<PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [15, 30, -150] }]
          }}
          distance={40}
        />



<PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [60, 30, -30] }]
          }}
          distance={40}
        />

        <PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [60, 30, -60] }]
          }}
          distance={40}
        />

<PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [60, 30, -90] }]
          }}
          distance={40}
        />

<PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [60, 30, -120] }]
          }}
          distance={40}
        />

        <PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [60, 30, -150] }]
          }}
          distance={40}
        />

<PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [60, 30, -180] }]
          }}
          distance={40}
        />



<PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [90, 30, -30] }]
          }}
          distance={40}
        />
        <PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [120, 30, -30] }]
          }}
          distance={40}
        />
        <PointLight
          intensity={2}
          style={{
            color: "#F5F5DC",
            transform: [{ translate: [160, 30, -30] }]
          }}
          distance={40}
        />


      </View>
    );
  }
}
