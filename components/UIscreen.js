import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  asset,
  VrButton,
  Image
} from 'react-360';
import Callschedule from './callschedule';

const RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

export default class UIscreen extends React.Component {

  constructor() {
    super();
    this.state = {
      ImageView: false,
      pictName: ""
    };

    RCTDeviceEventEmitter.addListener('clickedImage', (e) => { this.changeImage(e); });
  }
  hideImage() {
    this.setState({
      ImageView: false
    });
  }
  changeImage(e) {
    console.log(e.thePicture)
    this.setState({
      ImageView: true,
      pictName: e.thePicture
    });
  }

  render() {
    return (
      <View style={{ backgroundColor: '#000000' }}>
        {this.state.ImageView && <View>
          <Image
            //source={{uri: this.state.pictName}}
            source={asset('test.jpg')}
            style={{
              width: 512,
              height: 340
            }}
          />
          <VrButton onClick={() => {
            this.hideImage();
          }}>
            <Text>Close</Text>
          </VrButton>         
        </View>
        }
      </View>
    );
  }
};
