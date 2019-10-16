import React, { Component } from 'react';
import { Platform, StyleSheet, View, TouchableOpacity, Image, Dimensions, ScrollView, Text, Button, ActivityIndicator } from 'react-native';
import HorizontalStack from '../HorizontalStack';
import Rating from '../Rating';
import API from '../../components/API/API';

export default class ReviewsDetailsView extends Component {

    state = {
        Reviews: null,
        ReviewsCount: 0,
        ActivityIndicator: null,
    }

    constructor(props) {
        super(props);
        this.Item = this.props.Item;
        this.styles = this.props.Styles;


        this.keyIndex = 1;
        this.page = 1;


        this.buttonWidth = Math.round(Dimensions.get('window').width) / 2;

        this.styles.UsernameContainer = {
            marginBottom: 7,
            alignContent: "space-between",
            justifyContent: "space-between",
        };

        this.styles.Username = {
            fontWeight: "100",
            fontSize: 12,
        };

        this.styles.Date = {
            fontWeight: "100",
            fontSize: 12,
            alignSelf: "flex-end",
        };

        this.styles.Rating = {
            marginBottom: 7,
        }

        this.styles.Review = {
            marginBottom: 15,
        }

        this.styles.Review = {
            marginBottom: 15,
        }

        this.styles.SeeMoreContainer = {
            backgroundColor: "rgb(255,218,215)",
        }

        this.styles.ReviewItemContainer = {
            backgroundColor: "rgb(255,71,71)",
        }

        this.styles.ReviewButtonsCommon = {
            width: this.buttonWidth,
            maxWidth: this.buttonWidth,
            minWidth: this.buttonWidth,
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 15,
            paddingBottom: 15,
        }
    }

    getReviews(Reviews) {
        return Reviews.map((v, i) => {
            return (
                <View key={this.keyIndex++}>
                    <HorizontalStack style={this.styles.UsernameContainer}>
                        <Text style={this.styles.Username}>{v.Username}</Text>
                        <Text style={this.styles.Date}>{new Date(v.Date).toDateString()}</Text>
                    </HorizontalStack>
                    <Rating style={this.styles.Rating} Rating={v.Rating} />
                    <Text style={this.styles.Review}>{v.Review}</Text>
                </View>
            )
        })
    }


    LoadMore() {
        this.setState({
            ActivityIndicator: (<ActivityIndicator size="small" color="blue" />)
        })

        API.GetItemReviews(this.Item.ID, this.page++, (Reviews) => {
            Items = this.getReviews(Reviews);
            New = [...this.state.Reviews];
            New.forEach(element => Items.push(element));

            this.setState({
                Reviews: Items,
            })
        })

        setTimeout(() => {
            this.setState({ ActivityIndicator: null })
        }, 100);
    }

    componentDidMount() {
        API.GetReviewsCount(this.Item.ID, (ReviewsCount) => {
            API.GetItemReviews(this.Item.ID, this.page++, (Reviews) => {
                Items = this.getReviews(Reviews);
                this.setState({
                    Reviews: Items,
                    ReviewsCount: ReviewsCount,
                })
            })
        })

    }

    render() {

        return (
            <View>
                <View style={[this.styles.DetailsBlock, this.styles.pad, this.styles.bottomBorder, this.styles.topBorder]}>
                    <Text style={this.styles.Title}>Customer Reviews ({this.state.ReviewsCount})</Text>
                    {this.state.Reviews}
                    {this.state.ActivityIndicator}
                </View>
                <HorizontalStack>
                    <TouchableOpacity onPress={() => { this.LoadMore() }}>
                        <View style={[this.styles.SeeMoreContainer, this.styles.ReviewButtonsCommon]}>
                            <Text style={[this.styles.AddToCart, this.styles.ButtonsTextCommon]}>SEE MORE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Review", { Item: this.Item })}>
                        <View style={[this.styles.ReviewItemContainer, this.styles.ReviewButtonsCommon]}>
                            <Text style={[this.styles.BuyNow, this.styles.ButtonsTextCommon]}>REVIEW ITEM</Text>
                        </View>
                    </TouchableOpacity>
                </HorizontalStack>
            </View>
        );
    }

}