import React, { Component } from 'react';
import { StyleSheet, ScrollView, Dimensions } from 'react-native';
import ItemDetailsView from '../components/ItemShowcase/ItemDetailsView';
import ShippingDetailsView from '../components/Shipping/ShippingDetailsView';
import CartDetailsView from '../components/Cart/CartDetailsView';
import ReviewsDetailsView from '../components/Reviews/ReviewsDetailsView';
import SpecSheetView from '../components/ItemShowcase/SpecSheetView';

export default class DetailsScreen extends Component {


  constructor(props) {
    super(props);

    this.Item = this.props.navigation.getParam("Item", {});

    this.imageWidth = Math.round(Dimensions.get('window').width);
    this.styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'rgb(235,235,235)',
      },

      image: {
        width: this.imageWidth,
        aspectRatio: 3 / 2,
        borderWidth: 0.2,
        borderColor: "lightgrey",
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

      DetailsBlock: {
        backgroundColor: 'white',
        marginBottom: 15,
      },

      pad: {
        paddingLeft: 15,
        paddingRight: 15,
      },

      bottomBorder: {
        borderBottomWidth: 0.7,
        borderColor: "rgb(188,188,188)",
      },

      topBorder: {
        borderTopWidth: 0.7,
        borderColor: "rgb(188,188,188)",
      }




    });
  }

  render() {

    return (
      <ScrollView style={this.styles.container}>
        <ItemDetailsView Styles={this.styles} Item={this.Item} />
        <SpecSheetView Styles={this.styles} Item={this.Item} />
        <ShippingDetailsView Styles={this.styles} Item={this.Item} />
        <CartDetailsView Styles={this.styles} Item={this.Item} navigation={this.props.navigation} />
          <ReviewsDetailsView Styles={this.styles} Item={this.Item} navigation={this.props.navigation} />
      </ScrollView>
      );
  
    }
  }
  
  
