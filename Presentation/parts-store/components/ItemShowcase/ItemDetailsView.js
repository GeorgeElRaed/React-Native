import React, { Component } from 'react';
import { Platform, StyleSheet, View, Image, Dimensions, ScrollView, Text, Button } from 'react-native';
import HorizontalStack from '../HorizontalStack';
import { Icon } from 'react-native-elements';
import Rating from '../Rating';

export default class ItemDetailsView extends Component {


    constructor(props) {
        super(props);

        this.Item = this.props.Item;
        this.styles = this.props.Styles;

        
    }
    
    render() {


        images = this.Item.ImagesSrc.map((v, i) => {
            return (
                <Image key={i} source={{ uri: v }} style={this.styles.image} />
            )
        });

        return (
            <View style={[this.styles.DetailsBlock,this.styles.bottomBorder]}>
                <ScrollView horizontal='true'>
                    {images}
                </ScrollView>
                <View style={this.styles.pad}>
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
                    <Text style={[this.styles.description, this.styles.common]}>
                        {this.Item.Description}
                    </Text>
                    <HorizontalStack>
                        <Text style={[this.styles.extraInfo, this.styles.common, this.styles.commonExtra]}>{this.Item.StarRating} </Text>
                        <Rating Rating={this.Item.StarRating} />
                        <Text style={[this.styles.extraInfo, this.styles.common, this.styles.commonExtra]}>{this.Item.NumberSold} Sold</Text>
                    </HorizontalStack>
                </View>
            </View>
        );

    }
}


