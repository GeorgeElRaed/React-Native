import React, { Component } from 'react';
import { View } from 'react-native';



export default class verticalStack extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { style } = this.props;
        return (
            <View style={style}>
                {this.props.children}
            </View>
        );
    }

}