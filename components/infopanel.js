import React from "react";
import {Text, View, VrButton, asset} from "react-360";
import styles from './stylesheet';
import { NativeModules } from 'react-360';
const { AudioModule } = NativeModules;
const RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
import shortid from "shortid";
import { hallnumber, hallname } from "./commonutility";

export default class Infopanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hover: false,
            showinfopanel: false,
            hall_number: hallnumber.hall1,
            data: props.infodata,
            filtereddata:null,
            xCurPos : -0,
            zCurPos : 0,
            xTarPos : -0,
            zTarPos : 0,    
        };
        RCTDeviceEventEmitter.addListener('clickedshowinfopanel', (e) => { this.showinfopanelhandler(e); });
        RCTDeviceEventEmitter.addListener('clickedhallnumber', (e) => { this.clickedhallnumberhandler(e); });
        this.Lerp = this.Lerp.bind(this);
    }
    clickedhallnumberhandler(e) {
        this.setState({
            hall_number: e.hall_number,
        });
        this.filterdataby_hall_number(e.hall_number)
    }
    showinfopanelhandler(e) {        
        this.setState({
            showinfopanel: true,
            data: e.infodata            
        });
        this.filterdataby_hall_number(hallnumber.hall1)
    } 
    filterdataby_hall_number(hallnumber){
        
        let filterdata = this.state.data.filter((post) => {
            return parseInt(hallnumber,10) === parseInt(post.hall_number,10);
        });
        this.setState({filtereddata:filterdata}) 
    } 
    
    componentDidMount(){
        this.Lerp();
    }

    Lerp() {
        if(Math.abs (this.state.xCurPos - this.state.xTarPos) > 0.3)
        {
            // to match the X Coordinates
            this.setState({
                xCurPos : this.state.xCurPos * (1-0.05) + this.state.xTarPos * 0.05
            });
            postMessage({type:"hallstallposition", x: this.state.xCurPos, z: this.state.zCurPos});
        }

        else if(Math.abs (this.state.zCurPos - this.state.zTarPos) > 0.3)
        {
            // to match the Z Coordinates
            this.setState({
                zCurPos : this.state.zCurPos * (1-0.05) + this.state.zTarPos * 0.05
            });
            postMessage({type:"hallstallposition", x: this.state.xCurPos, z: this.state.zCurPos});
        }
        requestAnimationFrame(this.Lerp);
    }

    render() {
        
        let infoarray = [];
        let infoarray1 = null;
        let infoarray2 = null;
        if (this.state.filtereddata !== null && this.state.filtereddata !== undefined) {
            this.state.filtereddata.map((item, i) => {
                // if (i > 5) {
                //     return;
                // }
                let detail =
                    <VrButton style={styles.button}>
                        <Text style={styles.textSize}>{item.exhibitor_name}</Text>
                    </VrButton>
                return (
                    infoarray.push(
                        <React.Fragment key={shortid.generate()}>{detail}</React.Fragment>
                    )
                )
            });
        }
        if (parseInt(this.state.hall_number, 10) == parseInt(hallnumber.hall1, 10)) {
            infoarray1 = infoarray
        }
        else {
            infoarray2 = infoarray
        }
        return (
            <View style={{ backgroundColor: '#000000' }}>
                {this.state.showinfopanel && <View>
                    <VrButton style={styles.button}
                       
                        onClick={() => {
                            postMessage({ type: "hall", hall_number: parseInt(hallnumber.hall1, 10) });
                            AudioModule.playOneShot({
                                source: asset('Button-click-sound-effect.mp3'),
                            });
                        }}>
                        <Text style={styles.textSize}>{hallname.hall1}</Text>
                    </VrButton>
                    {infoarray1}
                    <VrButton style={styles.button}                       
                        onClick={() => {
                            postMessage({ type: "hall", hall_number: parseInt(hallnumber.hall2, 10) });
                            AudioModule.playOneShot({
                                source: asset('Button-click-sound-effect.mp3'),
                            });
                        }}>
                        <Text style={styles.textSize}>{hallname.hall2}</Text>
                    </VrButton>
                    {infoarray2}
                </View>
                }
            </View>
        );
    }
}