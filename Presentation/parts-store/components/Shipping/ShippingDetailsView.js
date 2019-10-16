import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions, ScrollView, Text, Button } from 'react-native';
import HorizontalStack from '../HorizontalStack';
import { Icon } from 'react-native-elements';
import Rating from '../Rating';
import { isAvailable } from 'expo/build/AR';

export default class ShippingDetailsView extends Component {


    constructor(props) {
        super(props);
        this.Item = this.props.Item;
        this.styles = this.props.Styles;
        this.ShippingIndex = 0;
        this.Shipping = this.getAllShippingDetails();

    }

    getAllShippingDetails() {
        //Fetch Online
        return {
            ShippingMethods:
                [
                    {
                        Name: "Free Shipping",
                        Cost: 0,
                        Currency: "US",
                        CurrencySign: "$",
                        Tracking: "Available",
                    },
                    {
                        Name: "Chinese Shipping",
                        Cost: 5,
                        Currency: "US",
                        CurrencySign: "$",
                        Tracking: "Available",
                    },
                    {
                        Name: "IDK Shipping",
                        Cost: 25,
                        Currency: "US",
                        CurrencySign: "$",
                        Tracking: "Available",
                    }
                ]
        };
    }


    render() {
        return (
            <View style={[this.styles.DetailsBlock, this.styles.pad, this.styles.bottomBorder, this.styles.topBorder]}>
                <View>
                    <Text style={this.styles.priceNcurrency}>Shiping: {this.Shipping.ShippingMethods[this.ShippingIndex].Currency} {this.Shipping.ShippingMethods[this.ShippingIndex].CurrencySign}{this.Shipping.ShippingMethods[this.ShippingIndex].Cost}</Text>
                    <Text style={this.styles.extraInfo}>To your location via {this.Shipping.ShippingMethods[this.ShippingIndex].Name}</Text>
                </View>
                <HorizontalStack>
                    <Icon
                        color='rgb(253,111,110)'
                        size={14}
                        type="ionicon"
                        name={Platform.OS === "ios" ? "ios-star-half" : "md-star-half"}
                    />
                    <Text>60-Day Buyer Protection</Text>
                </HorizontalStack>
            </View>
        );
    }

}