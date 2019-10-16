import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions, ScrollView, Text, Button, TouchableOpacity } from 'react-native';
import HorizontalStack from '../HorizontalStack';
import { Icon } from 'react-native-elements';
import Rating from '../Rating';
import { isAvailable } from 'expo/build/AR';

export default class ShippingDetailsView extends Component {


    constructor(props) {
        super(props);
        this.Item = this.props.Item;
        this.styles = this.props.Styles;

        this.buttonWidth = Math.round(Dimensions.get('window').width) / 3;

        this.styles.Contact = {
            color: "rgb(255,218,215)",
        }

        this.styles.AddToCart = {
            color: "rgb(255,71,71)",
        }

        this.styles.BuyNow = {
            color: "white",
        }

        this.styles.ContactContainer = {
            backgroundColor: "white",
        }

        this.styles.AddToCartContainer = {
            backgroundColor: "rgb(255,218,215)",
        }

        this.styles.BuyNowContainer = {
            backgroundColor: "rgb(255,71,71)",
        }

        this.styles.ButtonsCommon = {
            width: this.buttonWidth,
            maxWidth: this.buttonWidth,
            minWidth: this.buttonWidth,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 15,
            paddingBottom: 15,
        }

        this.styles.ButtonsTextCommon = {
            fontWeight: "bold"
        }

        StyleSheet.create({
            something: {
            }
        })
    }

    render() {
        return (
            <View style={[this.styles.DetailsBlock, this.styles.bottomBorder, this.styles.topBorder]}>
                <HorizontalStack>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("NotImplemented")}>
                        <View style={[this.styles.ContactContainer, this.styles.ButtonsCommon]}>
                            <Text style={[this.styles.Contact, this.styles.ButtonsTextCommon]}>CONTACT</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("NotImplemented")}>
                        <View style={[this.styles.AddToCartContainer, this.styles.ButtonsCommon]}>
                            <Text style={[this.styles.AddToCart, this.styles.ButtonsTextCommon]}>ADD TO CART</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("NotImplemented")}>
                        <View style={[this.styles.BuyNowContainer, this.styles.ButtonsCommon]}>
                            <Text style={[this.styles.BuyNow, this.styles.ButtonsTextCommon]}>BUY NOW</Text>
                        </View>
                    </TouchableOpacity>
                </HorizontalStack>
            </View>
        );
    }
}