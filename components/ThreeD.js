import React from "react";
import {View, asset, VrButton} from "react-360";
import ArtGalleryModel from "./ArtGalleryModel";
import Lights from './Lights';
import Entity from 'Entity';
import { NativeModules } from 'react-360';
const { AudioModule } = NativeModules;


export default class ThreeD extends React.Component {
    constructor() {
        super();
        this.state = {
            xCurPos: -0,
            zCurPos: 0,
            xTarPos: -0,
            zTarPos: 0,
        };
        this.Lerp = this.Lerp.bind(this);
    }
    componentDidMount() {
        this.Lerp();
    }
    Lerp() {
        if (Math.abs(this.state.xCurPos - this.state.xTarPos) > 0.3) {
            // to match the X Coordinates
            this.setState({
                xCurPos: this.state.xCurPos * (1 - 0.05) + this.state.xTarPos * 0.05
            });
            postMessage({ type: "newPosition", x: this.state.xCurPos, z: this.state.zCurPos });
        }
        else if (Math.abs(this.state.zCurPos - this.state.zTarPos) > 0.3) {
            // to match the Z Coordinates
            this.setState({
                zCurPos: this.state.zCurPos * (1 - 0.05) + this.state.zTarPos * 0.05
            });
            postMessage({ type: "newPosition", x: this.state.xCurPos, z: this.state.zCurPos });
        }
        requestAnimationFrame(this.Lerp);
    }
    render() {        
        return (
            <View>           
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = 180
                        this.state.zTarPos = -30;
                        postMessage({ type: "infopanel", show_panel: true, infodata: this.props.infodata});
                        AudioModule.playOneShot({
                          source: asset('Button-click-sound-effect.mp3'),
                        });
                    }}>
                    <Entity
                        source={{
                            obj: asset('target.obj'),
                            mtl: asset('target.mtl')
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [-180, 0, 30] },
                                { scale: 2 }
                            ]
                        }}
                    />
                </VrButton>
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = 190
                        this.state.zTarPos = 0;
                        postMessage({ type: "infopanel", show_panel: true, infodata: this.props.infodata});
                        AudioModule.playOneShot({
                          source: asset('Button-click-sound-effect.mp3'),
                        });
                    }}>
                    <Entity
                        source={{
                            obj: asset('target.obj'),
                            mtl: asset('target.mtl')
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [-190, 0, 0] },
                                { scale: 2 }
                            ]
                        }}
                    />
                </VrButton>
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = 180
                        this.state.zTarPos = 25;
                        postMessage({ type: "infopanel", show_panel: true, infodata: this.props.infodata});
                        AudioModule.playOneShot({
                          source: asset('Button-click-sound-effect.mp3'),
                        });
                    }}>
                    <Entity
                        source={{
                            obj: asset('target.obj'),
                            mtl: asset('target.mtl')
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [-180, 0, -25] },
                                { scale: 2 }
                            ]
                        }}
                    />
                </VrButton>
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = 210
                        this.state.zTarPos = 25;
                        postMessage({ type: "infopanel", show_panel: true, infodata: this.props.infodata});
                        AudioModule.playOneShot({
                          source: asset('Button-click-sound-effect.mp3'),
                        });
                    }}>
                    <Entity
                        source={{
                            obj: asset('target.obj'),
                            mtl: asset('target.mtl')
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [-210, 0, -25] },
                                { scale: 2 }
                            ]
                        }}
                    />
                </VrButton>
                <VrButton
                    onClick={() => {
                        this.state.xTarPos = 240
                        this.state.zTarPos = 25;
                        postMessage({ type: "infopanel", show_panel: true, infodata: this.props.infodata});
                        AudioModule.playOneShot({
                          source: asset('Button-click-sound-effect.mp3'),
                        });
                    }}>
                    <Entity
                        source={{
                            obj: asset('target.obj'),
                            mtl: asset('target.mtl')
                        }}
                        lit={true}
                        style={{
                            transform: [
                                { translate: [-240, 0, -25] },
                                { scale: 2 }
                            ]
                        }}
                    />
                </VrButton>
                <ArtGalleryModel/>
                <Lights />
            </View>
        );
    }
}