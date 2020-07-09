
import React, { Component } from 'react';
import { View, TextField } from 'react-360';

class callschedule extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }
    render() {
        return (
            <View>
                <TextField
                    id="test" label="test1" value="test"
                />
            </View>
        );
    }
}
export default callschedule;