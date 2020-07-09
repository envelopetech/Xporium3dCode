import React from "react";
import {View, asset} from "react-360";
import Entity from "Entity";
import { NativeModules } from 'react-360';

const { AudioModule } = NativeModules;

// AudioModule.playEnvironmental({
//   source: asset('hallway-crowd.mp3'),
//   volume: 0.5,
// });

const ArtGalleryModel = () => {
  return (
    <View>
      <Entity
        style={{
          transform: [{ translate: [-20, -1, 20] }, { scale: .05 }, { rotateY: 90 }]
        }}
        source={{
          obj: asset("exhibition-hall5.obj"),
          mtl: asset("exhibition-hall5.mtl")
        }}
        wireframe={false}
        lit={true}
      />
    </View>
  );
}
export default ArtGalleryModel;