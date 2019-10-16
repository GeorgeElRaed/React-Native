import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class HorizontalStack extends Component {
    constructor(props) {
        super(props);
        
        this.Style = this.props.style;
    }

    render() {
        if (this.props.children.length == undefined)
            items = this.props.children;
        else
            items = this.props.children.map((child, index) => {
                return (
                    <View key={index} style={this.styles.block}>
                        {child}
                    </View>
                );
            });

        return (
            <View style={[this.styles.horizontal,this.Style]}>
                {items}
            </View>
        );
    }

    styles = StyleSheet.create({
        horizontal: {
            flexDirection: "row"
        },
        block: {

        }
    });

}