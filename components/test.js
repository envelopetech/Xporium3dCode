import React from "react";
import {
  AppRegistry,
  View,
  asset,
  SpotLight,
  NativeModules,
} from "react-360";
import Entity from "Entity";

const { AudioModule } = NativeModules;

AudioModule.playEnvironmental({
  source: asset('hallway-crowd.mp3'),
  volume: 0.5,
});
export default class Test extends React.Component {
  render() {
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
        <Entity
          style={{
            transform: [{ translate: [-255, 0, -3] }, { scale: 4 }, { rotateY: 270 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-255, 0, -53] }, { scale: 4 }, { rotateY: 90 }]

          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-255, 0, -103] }, { scale: 4 }, { rotateY: 270 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-255, 0, -153] }, { scale: 4 }, { rotateY: 90 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-255, 0, -188] }, { scale: 4 }, { rotateY: 270 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-255, 0, -238] }, { scale: 4 }, { rotateY: 90 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-255, 0, -288] }, { scale: 4 }, { rotateY: 270 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-255, 0, -342] }, { scale: 4 }, { rotateY: 90 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-180, 0, -53] }, { scale: 4 }, { rotateY: 90 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-180, 0, -103] }, { scale: 4 }, { rotateY: 270 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-180, 0, -153] }, { scale: 4 }, { rotateY: 90 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />

        <Entity
          style={{
            transform: [{ translate: [-180, 0, -188] }, { scale: 4 }, { rotateY: 270 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-180, 0, -238] }, { scale: 4 }, { rotateY: 90 }]

          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />

        <Entity
          style={{
            transform: [{ translate: [-180, 0, -288] }, { scale: 4 }, { rotateY: 270 }]

          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />

        <Entity
          style={{
            transform: [{ translate: [-180, 0, -342] }, { scale: 4 }, { rotateY: 90 }]

          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />

        <Entity
          style={{
            transform: [{ translate: [-105, 0, -53] }, { scale: 4 }, { rotateY: 90 }]

          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />

        <Entity
          style={{
            transform: [{ translate: [-105, 0, -3] }, { scale: 4 }, { rotateY: 270 }]

          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />

        <Entity
          style={{
            transform: [{ translate: [-105, 0, -103] }, { scale: 4 }, { rotateY: 270 }]

          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-105, 0, -153] }, { scale: 4 }, { rotateY: 90 }]

          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />

        <Entity
          style={{
            transform: [{ translate: [-105, 0, -188] }, { scale: 4 }, { rotateY: 270 }]
          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />
        <Entity
          style={{
            transform: [{ translate: [-105, 0, -238] }, { scale: 4 }, { rotateY: 90 }]

          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />

        <Entity
          style={{
            transform: [{ translate: [-105, 0, -288] }, { scale: 4 }, { rotateY: 270 }]

          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />

        <Entity
          style={{
            transform: [{ translate: [-105, 0, -342] }, { scale: 4 }, { rotateY: 90 }]

          }}
          source={{
            obj: asset("purchasedstall3.obj"),
            mtl: asset("purchasedstall3.mtl")
          }}
          lit
        />

      </View>
    );
  }
}
