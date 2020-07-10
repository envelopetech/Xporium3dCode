import React from 'react';
import {
    Text,
    View,
    VrButton
} from 'react-360';

const RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');
import { exhibitor_visitor_card_exchange_save } from '../dataactions'

export default class cardexchangedonescreen extends React.Component {

    constructor() {
        super();
        this.state = {
            isviewmessage: false,
            message_text: "",
            exhibitoruser_data: null,
            visitoruser_data: null
        };

        RCTDeviceEventEmitter.addListener('exhibitorvisitorcardexchangehandler', (e) => { this.savecardexchange(e); });
    }
    hideImage() {
        this.setState({
            isviewmessage: false
        });
    }
    savecardexchange(e) {
        // console.log("exchange screen:", e.exhibitor_user_id)
        // console.log("exchange screen:", e.visitor_user_id)
        const dataval = {
            exhibitor_user_id: e.exhibitor_user_id,
            visitor_user_id: e.visitor_user_id,
        }
        var data = exhibitor_visitor_card_exchange_save(dataval, null)
        data.then(res => {
            debugger;
            if (res.data["error"] === undefined) {
                this.setState({ isviewmessage: true, message_text: "Card exchange done.", exhibitoruser_data: res.data[0], visitoruser_data: res.data[1] })

            }
            else {
                this.setState({ isviewmessage: true, message_text: res.data["error"] })
            }
        });
    }
    render() {
        return (
            <View style={{ backgroundColor: '#000000' }}>
                {this.state.isviewmessage && <View>
                    <Text style={{
                        height: 40, color: "#ffffff"
                    }}>{this.state.message_text}</Text>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <View style={{ backgroundColor: 'white', flex: 0.5 }} >
                            <Text style={{
                                height: 40, color: "#000000"
                            }}>Exhibitor</Text>
                            <Text style={{
                                height: 30, color: "#000000"
                            }}>Name: {this.state.exhibitoruser_data[0]["name"]}</Text>
                            <Text style={{
                                height: 30, color: "#000000"
                            }}>Phone: {this.state.exhibitoruser_data[0]["phone_number"]}</Text>
                            <Text style={{
                                height: 30, color: "#000000"
                            }}>Email: {this.state.exhibitoruser_data[0]["company_email"]}</Text>
                            <Text style={{
                                height: 30, color: "#000000"
                            }}>Website: {this.state.exhibitoruser_data[0]["company_website"]}</Text>
                            
                            <Text style={{
                                height: 30, color: "#000000"
                            }}>Address: {this.state.exhibitoruser_data[0]["address1"]}</Text>
                            <Text style={{
                                height: 30, color: "#000000"
                            }}>Location: {this.state.exhibitoruser_data[0]["location"]}</Text>
                            <Text style={{
                                height: 30, color: "#000000"
                            }}></Text>
                        </View>
                        <View style={{ backgroundColor: 'white', flex: 0.5 }} >
                            <Text style={{
                                height: 40, color: "#000000"
                            }}>Visitor</Text>
                            <Text style={{
                                height: 30, color: "#000000"
                            }}>Name: {this.state.visitoruser_data[0]["name"]}</Text>
                            <Text style={{
                                height: 30, color: "#000000"
                            }}>Phone: {this.state.visitoruser_data[0]["phone_number"]}</Text>
                            <Text style={{
                                height: 30, color: "#000000"
                            }}>Designation: {this.state.visitoruser_data[0]["work_as"]}</Text>
                            <Text style={{
                                height: 30, color: "#000000"
                            }}></Text>
                        </View>
                    </View>
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
