import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, Platform } from 'react-native';
import HorizontalStack from '../HorizontalStack';
import VerticalStack from '../VerticalStack';
import { Icon } from 'react-native-elements';

export default class ItemDisplay extends Component {

    constructor(props) {
        super(props);
        this.fontFamily = Platform.OS === 'ios' ? "Roboto" : "Avenir Next";
        this.imageWidth = Math.round(Dimensions.get('window').width) / 2;
        this.screenHeight = Math.round(Dimensions.get('window').height);

        this.styles = StyleSheet.create({
            container: {
                maxWidth: this.imageWidth,
                minWidth: this.imageWidth,
                borderColor: "lightgray",
                borderWidth: 0.2,
                borderRadius: 3,
                marginLeft: 2,
                marginRight: 2,
                marginTop: 3.5,
                marginBottom: 3.5,
                justifyContent: "center",
                textAlign: "center",
                flexDirection: "row",
                backgroundColor: "white",
                overflow: "hidden",
            },

            image: {
                maxWidth: this.imageWidth,
                minWidth: this.imageWidth,
                aspectRatio: 3 / 2
            },

            common: {
                fontFamily: this.fontFamily,
                marginLeft: 8,
            },

            commonExtra: {
                fontSize: 11.5,
                marginBottom: 5,
            },

            description: {
                color: "rgb(69,69,69)",
                fontSize: 13,
                fontWeight: '100',
                marginBottom: 8,
                marginTop: 6,
            },
            priceNcurrency: {
                color: "black",
                fontSize: 17,
                fontWeight: "bold",
            },

            fullPrice: {
                color: "rgb(159,159,159)",
                textDecorationLine: "line-through",
            },

            extraInfo: {
                color: "rgb(159,159,159)",
            },

            discountCountainer: {
                backgroundColor: "rgb(255,227,224)",
                marginLeft: 8,
                borderRadius: 2,
            },

            discount: {
                color: "rgb(221,77,66)",
                fontFamily: this.fontFamily,
            },

            Icon: {

            },

        });

        this.Item = this.props.Object;
    }



    render() {
        const { style } = this.props;

        return (
            <View style={[this.styles.container, style]}>
                <VerticalStack>
                    <Image style={this.styles.image}
                        source={{ uri: this.Item.ImagesSrc[0] }}
                    />
                    <Text numberOfLines={2} style={[this.styles.description, this.styles.common]}>
                        {this.Item.Description}{"\n"}
                    </Text>
                    <HorizontalStack>
                        <Text style={[this.styles.priceNcurrency, this.styles.common]}>{this.Item.Currency} {this.Item.CurrencySign}{this.Item.Price}</Text>
                        <Text style={[this.styles.priceNcurrency, this.styles.common]}></Text>
                    </HorizontalStack>
                    <HorizontalStack>
                        <Text style={[this.styles.fullPrice, this.styles.common, this.styles.commonExtra]}>{this.Item.Currency} {this.Item.CurrencySign}{this.Item.FullPrice}</Text>
                        <View style={[this.styles.discountCountainer, this.styles.common, this.styles.commonExtra]}>
                            <Text style={[this.styles.discount]}> -{this.Item.Discount}% </Text>
                        </View>
                    </HorizontalStack>
                    <Text style={[this.styles.extraInfo, this.styles.common, this.styles.commonExtra]}>{this.Item.ShippingMethod}</Text>
                    <HorizontalStack>
                        <Text style={[this.styles.extraInfo, this.styles.common, this.styles.commonExtra]}>{this.Item.StarRating} </Text>
                        <Icon
                            color='rgb(253,111,110)'
                            size={14}
                            style={this.styles.Icon}
                            type="ionicon"
                            name={Platform.OS === "ios" ? "ios-star" : "md-star"}
                        />
                        <Text style={[this.styles.extraInfo, this.styles.common, this.styles.commonExtra]}>{this.Item.NumberSold} Sold</Text>
                    </HorizontalStack>
                </VerticalStack>
            </View>
        );
    }


}
