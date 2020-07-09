import React from "react";
import {  
  View,
  asset,
  VrButton  
} from "react-360";
import Entity from "Entity";
import {NativeModules} from 'react-360';
const {AudioModule} = NativeModules;

export default class PictureButtonObject extends React.Component {
  render() {
    return (
      <View>
        <VrButton onClick={() => {
          postMessage({ type: "newPic", pic: this.props.pic });
          AudioModule.playOneShot({
            source: asset('Button-click-sound-effect.mp3'),
          });
        }}>
          <Entity

            style={{
              transform: [
                { translate: [this.props.x, this.props.y, this.props.z] },
                { scale: 4 },
                { rotateY: 90 }
              ],
            }}
            source={{
              obj: asset("picturebutton.obj"),
              mtl: asset("picturebutton.mtl")
            }}
            lit={true}
          />
        </VrButton>
      </View >
    );
  }
}
