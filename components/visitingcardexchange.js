import React from "react";
import {
    View,
    asset,
    VrButton
} from "react-360";
import Entity from "Entity";
import { NativeModules } from 'react-360';
const { AudioModule } = NativeModules;
import { exhibitor_visitor_card_exchange_save } from '../dataactions'

export default class visitingcardexchange extends React.Component {

    // constructor() {
    //     super();
    //     this.state = {
    //       cardexchangemessage:null
    //     };

    //   }
    // cardexchangehandler = () => {              
    //     const dataval = {
    //         exhibitor_user_id: this.props.exhibitoruserid,
    //         visitor_user_id: this.props.twodloggedinuser_id,
    //     }
    //     var data = exhibitor_visitor_card_exchange_save(dataval, null)
    //     data.then(res => {            
    //         //
    //         if (res.data["error"] === undefined) {
    //             this.setState({cardexchangemessage:"Card exchange done."})
    //         }
    //         else {
    //             this.setState({ cardexchangemessage: "Error in exchange the card." })
    //         }
    //     });
    // }
    render() {
        console.log(this.props.twodloggedinuser_id )
        return (
            <View>
                {/* <VrButton
                    onClick={this.cardexchangehandler}> */}
                <VrButton onClick={() => {
                    postMessage({ type: "savecardexchange", exhibitor_user_id: this.props.exhibitoruserid, visitor_user_id: this.props.twodloggedinuser_id });
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
